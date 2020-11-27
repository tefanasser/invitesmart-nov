import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-add-names',
  templateUrl: './add-names.page.html',
  styleUrls: ['./add-names.page.scss'],
})
export class AddNamesPage {

  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  number_form: FormGroup;
  public names: any = [];
  public name: any;
  public invitationId: any;
  public invitation: any;
  public isLoader: any;
  public no_of_guest: any;
  public guests: any;
  public isGuestSelected: any;
  public lang:any;
  constructor(
    public translate: TranslateService,  public toastController: ToastController, public actionSheetController: ActionSheetController, public alertController: AlertController, public userService: UserService, public formBuilder: FormBuilder, private router: Router) {
      this.lang = localStorage.getItem('language')
      if (this.lang) {
        this.translate.use(this.lang);
      }
    }
  ionViewDidEnter() {
    this.userId = localStorage.getItem('userId')
    this.no_of_guest = localStorage.getItem('guests');
    this.invitationId = localStorage.getItem('invitationId');
    this.isGuestSelected = localStorage.getItem('isGuestSelected');
    if (this.invitationId) {
      this.guest_list();
      this.get_invitation();
    }
  }

  ngOnInit() {
    // this.userId = localStorage.getItem('userId')
    // this.no_of_guest = localStorage.getItem('guests');
    // this.invitationId = localStorage.getItem('invitationId');
    // if(this.invitationId){
    //   this.guest_list();
    //   this.get_invitation();
    // }
  }
  // ************************ Update Invitation ***************************//
  async update_invitation() {
    let id = localStorage.getItem('invitationId');
    let data = { id: id, no_of_guest: this.invitation.no_of_guest, isGuestSelected: true };
    await this.userService.updateInvitation(data)
      .subscribe(res => {
        localStorage.removeItem('isGuestSelected');
        let data = res['data'];
        console.log(data, '#######################################')
        localStorage.setItem('isGuestSelected', data.isGuestSelected);
      }, err => {
        this.alertMessage(err.error.message)
      });
  }
  // ************************ Get Invitation ***************************//
  async get_invitation() {
    let invitationId = localStorage.getItem('invitationId');
    await this.userService.getInvitation(invitationId)
      .subscribe(res => {
        this.invitation = res['data'];
        console.log(this.invitation, 'testing')
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
  // ************************ Guest List ***************************//
  async guest_list() {
    this.names = []
    localStorage.removeItem('names')
    this.userId = localStorage.getItem('userId')
    this.invitationId = localStorage.getItem('invitationId');
    this.isLoader = true;
    await this.userService.guestWithName(this.userId, this.invitationId)
      .subscribe(res => {
        this.names = res['data'];
        this.guests = this.names.filter(
          user => user.name !== '');
        console.log(this.names, 'testing1234')
        this.isLoader = false;
        localStorage.setItem('names', JSON.stringify(this.names))
      }, err => {
        this.isLoader = false;
        this.router.navigate(['/sign-up'])
      });
  }

  // ************************ Guest List ***************************//
  async get_guest() {
    this.names = []
    localStorage.removeItem('names')
    this.userId = localStorage.getItem('userId')
    this.invitationId = localStorage.getItem('invitationId');
    this.isLoader = true;
    await this.userService.guestWithName(this.userId, this.invitationId)
      .subscribe(res => {
        this.names = res['data'];
        console.log(this.names, 'names')
        this.isLoader = false;
        localStorage.setItem('names', JSON.stringify(this.names))
      }, err => {
        this.isLoader = false;
        this.alertMessage(err.error.message)
        this.router.navigate(['/sign-up'])
      });
  }

  // ************************ Delete Records ***************************//
  async deleteRecord(id) {
    let message = this.lang == 'en' ? '"You want to delete this guest."': 'هل ترغب بالحذف ؟'
    var result = confirm(message);
    if (result) {
      await this.userService.delete(id)
        .subscribe(res => {
          let message = this.lang == 'en' ? 'Guest deleted successfully.': 'تم إضافة الأسماء بنجاح'
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

  async alertMessage(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  public cells:any=[]
  async addNames() {
    this.cells = [];
    let cells = this.name.split(/\r\n|\n/);
    this.cells = cells.filter(function (el) {
      return el != "";
    });
    var value;
    var arr = [];
    var guests;
    if(this.names.length) {
      guests = this.names.length + this.cells.length;
    } else {
      guests = this.cells.length;
    }
    let allowedNumber = this.invitation.no_of_guest - this.names.length;
    let code = this.names.length;
    let message;
    if (guests > parseInt(this.invitation.no_of_guest)) {
      if(allowedNumber == 0){
        message = "New guest is not allowed.";
      } else {
        message = "Only maximum" + " " + allowedNumber + " " + " guests are allowed";
      }
      
      this.alertMessage(message);
      this.cells = [];
    } else {
      for (var i = 0; i < this.cells.length; i++) {
        if (this.cells[i]) {
          code++;
          if (code <= 9) {
            value = '00' + code;
          } else if (code > 9 && code < 100) {
            value = '0' + code;
          } else {
            value = code;
          }
          let data = { name: this.cells[i], userId: this.userId, invitationId: this.invitationId, isGuest: true, invitationCode: '' }
          arr.push(data);
        }
      }
      this.isGuestSelected = localStorage.getItem('isGuestSelected');
      let guest = this.isGuestSelected == 'false' ? (this.no_of_guest - this.cells.length) : 0;
      this.isLoader = true;
      await this.userService.addGuestName({ data: arr })
        .subscribe(res => {
          let message = this.lang == 'en' ? 'Guest created successfully.': 'تم إضافة الأسماء بنجاح'
          this.successMessage(message)
          this.isLoader = false;
          this.update_invitation();
          this.guest_list()
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
      this.name = '';
    }

  }

  // ************************ Redirct To Thumbnail Images Page ***************************//
  getImages() {
    //  this.router.navigate(['/thumbnails'], { queryParams: {image_code: this.image_code} })
  }

  // ******************************** Form Validation Messages ************************//
  validation_messages = {
    'image_code': [
      { type: 'required', message: 'Number is required.' },
      { type: 'pattern', message: 'Number 1 to 100 is allowed.' }
    ]
  };
}