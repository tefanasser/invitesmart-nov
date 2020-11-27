import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ModalController } from '@ionic/angular';
import { ShareModalPage } from '../modal/share-modal/share-modal.page';
import { ScanPage } from '../modal/scan/scan.page';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.page.html',
  styleUrls: ['./thumbnails.page.scss'],
})
export class ThumbnailsPage implements OnInit {
  public images: any = [];
  public base64image: any;
  public invitation: any;
  public qrCode: any = null;
  public no_of_guest: any;
  public names: any = [];
  public data: any;
  public guestCount:any;
  public userId = localStorage.getItem('userId');
  public invitationId = localStorage.getItem('invitationId');
  public isLoader: any;
  public lang: any;
  public totalGuests:any;
  public tInvites :any = [];
  constructor(public translate: TranslateService, public toastController: ToastController, public alertController: AlertController, public userService: UserService, private qrScanner: QRScanner, public modalController: ModalController, private socialSharing: SocialSharing, private route: ActivatedRoute, private router: Router) {
    this.lang = localStorage.getItem('language')
    if (this.lang) {
      this.translate.use(this.lang);
    }
  }

  ngOnInit() {
    // this.invitation = JSON.parse(localStorage.getItem('invitation'));
    // if(this.invitationId){
    //   this.guest_list();
    //   console.log(this.userId, this.invitationId)
    // }
    this.get_invitation()
  }
  ionViewDidEnter() {
    this.get_invitation()
    this.invitation = JSON.parse(localStorage.getItem('invitation'));
    if (this.invitationId) {
      this.guest_list();
      console.log(this.userId, this.invitationId)
    }
  }
  
  // ************************ Guest List ***************************//
  async guest_list() {
    this.isLoader = true;
    let code = 0;
    let value;
    this.names = [];
    this.images =[];
    await this.userService.guest_list(this.userId, this.invitationId)
      .subscribe(res => {
        this.isLoader = false;
        this.names = res['data'];
        console.log(this.names, '$$$$$%%%%')
        this.totalGuests = this.invitation && this.invitation.no_of_guest ? this.invitation.no_of_guest: 0;
        this.images = res['data'];
          let numbers = parseInt(this.invitation.no_of_guest) - parseInt(this.names.length);
          for (var i = 0; i < numbers; i++) {
            code++;
            if (code <= 9) {
              value = '00' + code;
            } else if (code > 9 && code < 100) {
              value = '0' + code;
            } else {
              value = code;
            }
            let data = { _id: '', name: '', userId: this.userId, invitationId: this.invitation, isGuest: true, invitationCode: value }
            this.images.push(data);
            console.log(this.images, '$$$$$%%%%')
          }
          let  guests = res['data'];
          let getCount = []
          // let emptyInvites = []
          for (var i = 0; i < guests.length; i++) {
            if(guests[i].name !== '') {
              getCount.push(guests[i])
            }
          }
          this.guestCount = getCount.length;
          // this.tInvites = emptyInvites.length;
          console.log(this.guestCount, '23213221321')
       
      }, err => {
        this.isLoader = false;
        if(err.error.message == 'token expired'){
          this.router.navigate(['/sign-up'])
          this.alertMessage(err.error.message);
        } else {
          this.alertMessage(err.error.message);
          this.router.navigate(['/invitation']);
        }
      });
  }
  // *************************** Redirect To Event Detail Page ******************************//
  detail(item) {
    let image = item.invitationId.invitation_image ? item._id ? item.invitationId.invitation_image : '' : item._id ? 'assets/default_image.png' : '';
    this.qrCode = { id: item._id, invitationCode: item.invitationId.event_id, isScanned: item.isScanned, invitationId: item.invitationId._id };
    let detail = { invitationId: item.invitationId._id, image: image, event_id: item.invitationId.event_id, name: item.name, isScanned: item.isScanned, invitationCode: item.invitationCode }
    localStorage.removeItem('qrCode');
    localStorage.setItem('qrCode', JSON.stringify(this.qrCode))
    localStorage.removeItem('detail');
    localStorage.setItem('detail', JSON.stringify(detail))
    this.router.navigate(['/detail'])
  }

  // ************************ Redirct To Thumbnail Images Page ***************************//
  async get_invitation() {
    let userId = localStorage.getItem('userId');
    let invitationId = localStorage.getItem('invitationId');
    if (invitationId) {
      await this.userService.getInvitation(invitationId)
        .subscribe(res => {
          this.invitation = res['data'];
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
  // **************************** Open Share Invitation Modal ********************************//
  async socialShare(data) {
    this.getGuestInfo(data)
  }

  async messageToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  scanqrCode() {
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            let data = JSON.parse(text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  async shareModal(data) {
    let image = data.invitationId.invitation_image != null ? data.invitationId.invitation_image : 'assets/default_image.png';
    this.qrCode = { id: data._id, guest_number: data.image_code, isScanned: data.isScanned, invitationId: data.invitationId._id };
    localStorage.removeItem('qrCode');
    localStorage.removeItem('image');
    localStorage.setItem('image', image)
    localStorage.setItem('qrCode', JSON.stringify(this.qrCode))
    const modal = await this.modalController.create({
      component: ShareModalPage,
      cssClass: 'my-custom-modal',
      componentProps: { invitationId: data.invitationId, image: image, event_id: data.invitationId.event_id, name: data.name, scanned_value: data.isScanned, image_code: data.invitationCode, qrCode: JSON.stringify(this.qrCode) }
    });
    return await modal.present();
  }
  async messageModal(record) {
    const modal = await this.modalController.create({
      component: ScanPage,
      cssClass: 'modalCss',
      componentProps: { name: record.name, isScanned: record.isScanned }
    });
    return await modal.present();
  }
  // ************************ Redirct To Thumbnail Images Page ***************************//
  async getGuestInfo(data) {
    if (data.id) {
      await this.userService.getGuestName(data.id)
        .subscribe(res => {
          this.data = res['data'];
          console.log(this.data, 'info')
          // if(value == true) {
          localStorage.removeItem('qrCode')
          localStorage.setItem('qrCode', JSON.stringify(this.qrCode))
          // } else {
          //   if(this.data.isScanned == true) {
          //     let rec = {isScanned: this.data.isScanned, name: this.data.name}
          //     this.messageModal(rec);
          //   } else {
          //     this.update_guest(this.data._id);
          //   }
          // }

        }, err => {
          if(err.error.message == 'token expired'){
            this.router.navigate(['/sign-up'])
            this.alertMessage(err.error.message);
          } else {
            this.alertMessage(err.error.message);
            this.router.navigate(['/invitation']);
          }
        });
    } else {
      this.data = {};
    }

  }

  // ************************ Redirct To Thumbnail Images Page ***************************//
  async update_guest(id) {
    await this.userService.updateGuest({ id: id })
      .subscribe(res => {
        let result = res['data'];
        let rec = { isScanned: false, name: this.data.name }
        this.messageModal(rec);
      }, err => {
        this.alertMessage(err.error.message)
      });
  }
  async successMessage(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  async guests() {
    this.isLoader = true;
    await this.userService.guest_list(this.userId, this.invitationId)
      .subscribe(res => {
        this.isLoader = false;
        let arrLength = res['data'].length;
        if(res) {
          this.check_guest(arrLength);
        }
        
      }, err => {
        this.isLoader = false;
        if(err.error.message == 'token expired'){
          this.router.navigate(['/sign-up'])
          this.alertMessage(err.error.message);
        } else {
          this.alertMessage(err.error.message);
          this.router.navigate(['/invitation']);
        }
      });
  }
  check_guest(arrLength) {
    console.log(arrLength, this.invitation.no_of_guest)
    if (arrLength == this.invitation.no_of_guest) {
      this.router.navigate(['/choose-package'], { queryParams: { paidPlan: false } })
    } else {
      this.router.navigate(['/add-names'])
    }
  }
  goTo() {
    this.router.navigate(['/add-names'])
  }
  // ************************ Delete Records ***************************//
  async deleteRecord(id) {
    let message = this.lang == 'en' ? '"You want to delete this guest."' : 'هل ترغب بالحذف ؟'
    var result = confirm(message);
    if (result) {
      await this.userService.delete(id)
        .subscribe(res => {
          let message = 'Guest deleted successfully.';
          this.successMessage(message)
          this.guest_list()
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

}
