import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { AddGuestsPage } from '../modal/add-guests/add-guests.page';
import { ModalController } from '@ionic/angular';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-choose-package',
  templateUrl: './choose-package.page.html',
  styleUrls: ['./choose-package.page.scss'],
})
export class ChoosePackagePage implements OnInit {
  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  invitation_form: FormGroup;
  public image_code: any;
  public guest_packages: any;
  public images: any = [];
  public result: any;
  public event_name: any;
  public no_of_guest: any;
  public productId: any;
  public event_location: any;
  public lang: any;
  public invitation: any;
  public paidPlan: any;
  constructor(
    public translate: TranslateService, public toastController: ToastController, private iap: InAppPurchase, public modalController: ModalController, private route: ActivatedRoute, public alertController: AlertController, public userService: UserService, private router: Router) {
    this.lang = localStorage.getItem('language')
    if (this.lang) {
      this.translate.use(this.lang);
    }
  }
  ngAfterViewInit() {

  }
  ngOnInit() {
    this.package_list()
  }
  ionViewDidEnter() {
    this.event_name = this.route.snapshot.queryParams["event_name"];
    this.get_invitation();
    this.package_list()
  }

  package_list() {
    this.paidPlan = this.route.snapshot.queryParams["paidPlan"];
    let invitationId = localStorage.getItem('invitationId');
    if(!invitationId) {
      this.guest_packages = [
        { id: 1, package_name: this.lang == 'en' ? "10 guests / free" : '10 ضيوف (مجانا)', each_guest_price: 0, quantity: 10, isFree: this.paidPlan},
        { id: 2, package_name: this.lang == 'en' ? "Paid Packages" : 'الباقات المدفوعة', each_guest_price: 0, quantity: 10, isFree: true }
      ]
    } else {
      this.guest_packages = [
        { id: 2, package_name: this.lang == 'en' ? "Paid Packages" : 'الباقات المدفوعة', each_guest_price: 0, quantity: 10, isFree: true }
      ]
    }
   
  }
  async successMessage() {
    let eventName = this.lang == 'en' ? 'Invitation created successfully.' : 'تم إنشاء الدعوة بنجاح.'
    const toast = await this.toastController.create({
      message: eventName,
      duration: 2000
    });
    toast.present();
  }
  async payment() {
    this.router.navigate(['/buy-guest-plan'], { queryParams: {paidPlan: this.paidPlan} })
  }
  // ************************ Get Invitation ***************************//
  async get_invitation() {
    let invitationId = localStorage.getItem('invitationId');
    if(invitationId) {
      await this.userService.getInvitation(invitationId)
      .subscribe(res => {
        this.invitation = res['data'];
        console.log(this.invitation, 'testing')
      }, err => {
        this.alertMessage(err.error.message)
      });
    }
   
  }

  async alertMessage(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // **************************** Open Share Invitation Modal ********************************//
  async AddNoOfGuest() {
    const modal = await this.modalController.create({
      component: AddGuestsPage
    });
    return await modal.present();
  }

  create_and_update_invitatin(type) {
    let id = localStorage.getItem('invitationId');
    if(id) {
      this.update_invitation(type);
    } else {
      this.create_invitation(type);
    }
  }
  // ************************ Create Invitation***************************//
  async create_invitation(type) {
    let userId = localStorage.getItem('userId');
    let imageName = localStorage.getItem('image');
    let event = localStorage.getItem('event');
    this.event_name = localStorage.getItem('eventName');
    var eventLocation;
    if (event == "undefined") {
      eventLocation = ''
    } else {
      eventLocation = event;
    }
    var data = { invitation_image: imageName, event_name: this.event_name, userId: userId, no_of_guest: 10, price: '0', productId: '', transactionId: '', event_location: eventLocation }
    if(type) {
      await this.userService.createInvitation(data)
      .subscribe(res => {
        let result = res['data']
        localStorage.removeItem('guests')
        localStorage.removeItem('invitationId');
        localStorage.removeItem('isGuestSelected')
        localStorage.removeItem('event');
        localStorage.removeItem('eventName')
        this.successMessage()
        localStorage.setItem('guests', result.no_of_guest)
        localStorage.setItem('invitationId', result._id);
        localStorage.setItem('isGuestSelected', result.isGuestSelected);
        this.router.navigate(['/invitation-type'])
        localStorage.removeItem('image');
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
  // ************************ Create Invitation***************************//
  async update_invitation(type) {
    let id = localStorage.getItem('invitationId');
    let guest = parseInt(this.invitation.no_of_guest) + 10;
    var data = { no_of_guest: guest, id: id }
    if(!type) {
    await this.userService.updateInvitation(data)
      .subscribe(res => {
        let result = res['data']
        localStorage.removeItem('guests')
        localStorage.removeItem('isGuestSelected')
        localStorage.removeItem('event');
        localStorage.removeItem('eventName')
        this.successMessage()
        localStorage.setItem('guests', result.no_of_guest)
        localStorage.setItem('invitationId', result._id);
        localStorage.setItem('isGuestSelected', result.isGuestSelected);
        this.router.navigate(['/invitation-type'])
        localStorage.removeItem('image');
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

  edit_invitation(item) {
    this.router.navigate(['/update-invitation'], { queryParams: { id: item._id, event_name: item.event_name, invitation_image: item.invitation_image } })
    item = {};
  }

  getFromSelection(selection) {

  }
  goBack() {
    let id = localStorage.getItem('invitationId');
    if(id) {
      this.router.navigate(['/thumbnails'])
    } else {
      this.router.navigate(['/create-invitation'])
    }
  }
}