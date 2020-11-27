import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { ShareModalPage } from '../modal/share-modal/share-modal.page';
import { ScanPage } from '../modal/scan/scan.page';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-scan-guest',
  templateUrl: './scan-guest.page.html',
  styleUrls: ['./scan-guest.page.scss'],
})
export class ScanGuestPage implements OnInit {

  public images: any = [];
  public base64image: any;
  public invitation: any;
  public qrCode: any = null;
  public no_of_guest: any;
  public names: any;
  public data: any;
  public isLoader: any;
  public scanSub: any;
  public invitationId: any;
  constructor( public translate: TranslateService, public platform: Platform, public toastController: ToastController, public alertController: AlertController, public userService: UserService, private qrScanner: QRScanner, public modalController: ModalController, private socialSharing: SocialSharing, private route: ActivatedRoute, private router: Router) {
    let lang = localStorage.getItem('language')
    if (lang) {
      this.translate.use(lang);
    }
   }
  ngOnInit() {
    // this.get_invitation();
    this.no_of_guest = this.route.snapshot.queryParams["no_of_guest"];
    this.invitation = JSON.parse(localStorage.getItem('invitation'));
    this.invitationId = localStorage.getItem('invitationId');
    this.names = JSON.parse(localStorage.getItem('names'));
    var code = 0;
    this.platform.ready().then(() => {
      document.getElementsByTagName("body")[0].style.opacity = '1';
      this.scanSub.unsubscribe();

    });
    //  this.scanqrCode();
  }
  ionViewDidEnter() {
    document.getElementsByTagName("body")[0].style.opacity = '1';
    this.scanqrCode();
  }
  ionViewWillLeave() {
    this.stopScanning();
  }
  IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  stopScanning() {
    document.getElementsByTagName("body")[0].style.opacity = '1';
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }
  // *************************** Redirect To Scanned List Page ******************************//
  scanned_list(item) {
    this.router.navigate(['/detail'], { queryParams: { image: item.image, code: item.image_code } })
  }
  // ************************ Redirct To Thumbnail Images Page ***************************//
  async get_invitation() {
    let userId = localStorage.getItem('userId');
    let invitationId = localStorage.getItem('invitationId');
    if(invitationId){
      await this.userService.getInvitation(invitationId)
      .subscribe(res => {
        this.invitation = res['data'];
        console.log(this.invitation.invitation_image, 'testing123')
      }, err => {
        if(err.error.message == 'token expired'){
          this.router.navigate(['/sign-up'])
          this.alertMessage(err.error.message);
        } else {
          this.alertMessage(err.error.message);
          this.router.navigate(['/invitation']);
        }
      });
    }
   
  }

  async alertMessage(err) {
    const alert = await this.alertController.create({
      message: err,
      buttons: ['OK']
    });
    await alert.present();
  }


  scanqrCode() {
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show()
          document.getElementById("scannerArea").style.opacity = "0";
          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            let value = JSON.stringify(text)
            let data = JSON.parse(value);
            this.getGuestInfo(data);
            this.qrScanner.hide();
            this.scanSub.unsubscribe(); // stop scanning
            // document.getElementById("scannerArea").style.opacity = "1";
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          if (!status.authorized && status.canOpenSettings) {
            if (confirm('Would you like to enable QR code scanning? You can allow camera access in your settings.')) {
              this.qrScanner.openSettings();
            }
          }
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // this.qrScanner.openSettings();
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }



  async messageModal(record) {
    const modal = await this.modalController.create({
      component: ScanPage,
      cssClass: 'message-modal',
      componentProps: { name: record.name, isScanned: record.isScanned, isEmpty: record.isEmpty },
      backdropDismiss: false,
    });
    return await modal.present();
  }
  // ************************ Redirct To Thumbnail Images Page ***************************//
  async getGuestInfo(dat){
    let getJson = dat.match(/[^{]+(?=\})/g);
    if (getJson){
      let jsonData = JSON.parse(dat);
      if (typeof jsonData == 'object' && jsonData.id) {
        await this.userService.getGuestName(jsonData.id)
          .subscribe(res => {
            this.data = res['data'];
            if (this.data.isDeleted == false && this.data.invitationId == this.invitationId) {
              if (this.data.isScanned == true) {
                let rec = { isScanned: this.data.isScanned, name: this.data.name, isEmpty: false }
                this.messageModal(rec);
              } else {
                this.update_guest(this.data._id);
              }
            } else {
              let rec = { isScanned: '', name: '', isEmpty: true }
              this.messageModal(rec);
            }
          }, err => {
            this.alertMessage(err.error.message)
          });
      } else {
        let rec = { isScanned: '', name: '', isEmpty: true }
        this.messageModal(rec);
      }
    } else {
      let rec = { isScanned: '', name: '', isEmpty: true }
      this.messageModal(rec);
    }

  }

  // ************************ Redirct To Thumbnail Images Page ***************************//
  async update_guest(id) {
    await this.userService.updateGuest({ id: id })
      .subscribe(res => {
        let result = res['data'];
        let rec = { isScanned: false, name: this.data.name, isEmpty: false }
        this.messageModal(rec);
      }, err => {
        if(err.error.message == 'token expired'){
          this.router.navigate(['/sign-up'])
          this.alertMessage(err.error.message);
        } else {
          this.alertMessage(err.error.message);
          this.router.navigate(['/invitation']);
        }
      });
  }

  goTo() {
    this.router.navigate(['/add-names'])
  }
}
