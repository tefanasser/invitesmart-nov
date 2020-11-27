import { Component, OnInit } from '@angular/core';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Platform, Events, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-buy-guest-plan',
  templateUrl: './buy-guest-plan.page.html',
  styleUrls: ['./buy-guest-plan.page.scss'],
})
export class BuyGuestPlanPage implements OnInit {
  products = [];
  previousPurchases = [];
  public event_name: any;
  public plans: any = [];
  public productIds: any = [];
  public checkError: any;
  public isLoader: any;
  public lang: any;
  public event_location: any;
  public invitation: any;
  public testResult: any;
  constructor(public translate: TranslateService, public toastController: ToastController, private route: ActivatedRoute, private router: Router, public alertController: AlertController, public userService: UserService, private iap: InAppPurchase, private plt: Platform) {
    this.productIds = ['com.invitesmart.15guest', 'com.invitesmart.25guests', 'com.invitesmart.50guests', 'com.invitesmart.100guests', 'com.invitesmart.200guests', 'com.invitesmart.300guests', 'com.invitesmart.400guests', 'com.invitesmart.600guests'];
    this.lang = localStorage.getItem('language')
    if (this.lang) {
      this.translate.use(this.lang);
    }
    this.plt.ready().then(() => {
      this.isLoader = true;
      this.iap.getProducts(this.productIds)
        .then((products) => {
          let prod = products;
          this.products = this.getMatch(this.productIds, prod);
          this.isLoader = false;
        })
        .catch((err) => {
          this.checkError = err;
          this.alertMessage(err);
          this.isLoader = false;
          this.router.navigate(['/choose-package'])
        });
    })
  }
  ngOnInit() {
    // this.products = [{title:'25 Package', price: 49.99},{title:'25 Package', price: 99.99}, {title:'25 Package', price: 99.99}]
    this.plans = [{ guest: 15, productId: 'com.invitesmart.15guest', price: 29.99 }, { guest: 25, productId: 'com.invitesmart.25guests', price: 49.99 }, { guest: 50, productId: 'com.invitesmart.50guests', price: 99.99 }, { guest: 100, productId: 'com.invitesmart.100guests', price: 199.99 }, { guest: 200, productId: 'com.invitesmart.200guests', price: 399.99 }, { guest: 300, productId: 'com.invitesmart.300guests', price: 599.99 }, { guest: 400, productId: 'com.invitesmart.400guests', price: 799.99 }, { guest: 600, productId: 'com.invitesmart.600guests', price: 899.99 }]
  }
  ionViewDidEnter() {
    this.get_invitation()
    this.event_name = this.route.snapshot.queryParams["event_name"];
  }
  getMatch(a, b) {
    var matches = [];
    for (var i = 0; i < a.length; i++) {
      for (var e = 0; e < b.length; e++) {
        if (a[i] === b[e].productId) matches.push(b[e]);
      }
    }
    return matches;
  }
  buyProduct(product) {
    let invitationId = localStorage.getItem('invitationId');
    this.iap.buy(product).then(data => {
      this.testResult = data;
      return this.iap.consume(data.productType, data.receipt, data.signature);
    }).then(() => {
      if (invitationId) {
        this.update_invitation(product)
      } else {
        this.create_invitation(product)
      }
      console.log('consume done!');
    }).catch(err => console.log(err))
  }

  restore() {
    this.iap.restorePurchases().then(purchases => {
      this.previousPurchases = purchases;
      // Unlock the features of the purchases!
      for (let prev of this.previousPurchases) {
      }
    });
  }
  async successMessage() {
    let eventName = this.lang == 'en' ? 'Invitation created successfully.' : 'تم إنشاء الدعوة بنجاح.'
    const toast = await this.toastController.create({
      message: eventName,
      duration: 2000
    });
    toast.present();
  }

  async alertMessage(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // ************************ Get Invitation ***************************//
  async get_invitation() {
    let invitationId = localStorage.getItem('invitationId');
    if (invitationId) {
      await this.userService.getInvitation(invitationId)
        .subscribe(res => {
          this.invitation = res['data'];
          console.log(this.invitation, 'testing')
        }, err => {
          if (err.error.message == 'token expired') {
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
  async update_invitation(product) {
    let id = localStorage.getItem('invitationId');
    let plan = this.plans.filter(o => o.productId === product);
    let guest = parseInt(this.invitation.no_of_guest) + parseInt(plan[0].guest);
    let data = { id: id, no_of_guest: guest, productId: product, price: "", transactionId: "" }
    await this.userService.updateInvitation(data)
      .subscribe(res => {
        let result = res['data']

        localStorage.removeItem('guests')
        localStorage.removeItem('isGuestSelected')
        localStorage.removeItem('event');
        localStorage.removeItem('eventName')
        this.successMessage()
        localStorage.setItem('guests', plan[0].guest)
        localStorage.setItem('invitationId', result._id);
        localStorage.setItem('isGuestSelected', result.isGuestSelected);
        this.router.navigate(['/invitation-type'])
        localStorage.removeItem('image');
      }, err => {
        if (err.error.message == 'token expired') {
          this.router.navigate(['/sign-up'])
          this.alertMessage(err.error.message);
        } else {
          this.alertMessage(err.error.message);
          this.router.navigate(['/invitation']);
        }

      });
  }
  // ************************ Create Invitation***************************//
  async create_invitation(product) {
    let userId = localStorage.getItem('userId');
    let imageName = localStorage.getItem('image');
    let event = localStorage.getItem('event');
    var eventLocation;
    if (event == "undefined") {
      eventLocation = ''
    } else {
      eventLocation = event;
    }
    this.event_name = localStorage.getItem('eventName');
    let plan = this.plans.filter(o => o.productId === product);
    if (plan) {
      var data = { invitation_image: imageName, event_name: this.event_name, userId: userId, no_of_guest: plan[0].guest, productId: "", price: '', transactionId: "", event_location: eventLocation }
    }
    this.isLoader = true;
    await this.userService.createInvitation(data)
      .subscribe(res => {
        let result = res['data']
        localStorage.removeItem('guests');
        localStorage.removeItem('invitationId');
        localStorage.removeItem('isGuestSelected');
        localStorage.removeItem('event')
        localStorage.removeItem('eventName')
        this.successMessage()
        localStorage.setItem('guests', plan[0].guest)
        localStorage.setItem('isGuestSelected', result.isGuestSelected);
        localStorage.setItem('invitationId', result._id);
        this.router.navigate(['/invitation-type'])
        localStorage.removeItem('image');
        this.isLoader = false;
      }, err => {
        if (err.error.message == 'token expired') {
          this.router.navigate(['/sign-up'])
          this.alertMessage(err.error.message);
        } else {
          this.alertMessage(err.error.message);
          this.router.navigate(['/invitation']);
        }
        this.isLoader = false;
      });
  }
  goBack() {
    let paidPlan = this.route.snapshot.queryParams["paidPlan"];
    this.router.navigate(['/choose-package'], { queryParams: { paidPlan: paidPlan } })
  }

}