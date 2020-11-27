import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  number_form: FormGroup;
  public no_of_guest:any;
  public images:any=[];
  public invitation:any;
  public names:any;
  public invitationId:any;
  public guestList = [];
  constructor(
    public translate: TranslateService, public actionSheetController: ActionSheetController,  public alertController: AlertController, public userService: UserService, public formBuilder: FormBuilder, private router: Router) {
      let lang = localStorage.getItem('language')
      if (lang) {
        this.translate.use(lang);
      }
    }
  ngOnInit() {
    this.no_of_guest = localStorage.getItem('guests');
    this.invitationId = localStorage.getItem('invitationId');
    if(this.invitationId) {
      this.guest_list();
    }
    const regexPattern = /^\d{1,3}$/;
    Validators.pattern(regexPattern);
    this.number_form = this.formBuilder.group({
      no_of_guest: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[1-9][0-9]?$|^100$/)
      ]))
    });
  }
  
  async addNames() {
    let code = 0;
    var value; 
    this.guestList = [];
    let userId = localStorage.getItem('userId');
    let guest = localStorage.getItem('guests');
    if(this.no_of_guest > guest) {
      let message = "Only maximum "+guest+" guests are allowed.";
      this.alertMessage(message);
    } else {
      for (var i = 0; i < this.no_of_guest; i++) {
        if(this.no_of_guest){
         code++;
         if (code <= 9) {
          value = '00'+ code;
         } else if (code > 9 && code < 100) {
          value = '0'+ code;  
         } else {
            value =  code;
         }
         let data = {invitationCode: value, userId: userId, invitationId: this.invitationId}
         this.guestList.push(data);
       }
     }
     await this.userService.addGuestName({data: this.guestList})
     .subscribe(res => {
       localStorage.removeItem('guests')
       this.router.navigate(['/thumbnails'], { queryParams: {no_of_guest: this.no_of_guest}})
     }, err => {
       this.alertMessage(err.error.message)
     });
    }
   
  }
  // ************************ Update Invitation ***************************//
  async update_invitation(){
    let id = localStorage.getItem('invitationId');
    let data = {id:id, isGuestSelected: true};
    await this.userService.updateInvitation(data)
      .subscribe(res => {
        this.addNames();
      }, err => {
        this.alertMessage(err.error.message)
      });
  }
    // ************************ Guest List ***************************//
    async guest_list(){
      let userId = localStorage.getItem('userId');
      localStorage.removeItem('names')
      await this.userService.guest_list(userId, this.invitationId)
        .subscribe(res => {
         this.names = res['data'];
         localStorage.setItem('names', JSON.stringify(this.names))
        }, err => {
          this.formData = {};
          this.alertMessage(err.error.message)
        });
    }

    async alertMessage(message) {
      const alert = await this.alertController.create({
        message: message,
        buttons: ['OK']
      });
      await alert.present();
    }
  // ************************ Redirct To Thumbnail Images Page ***************************//
  getImages() {
     this.router.navigate(['/thumbnails'], { queryParams: {no_of_guest: this.no_of_guest}})
  }
  
  // ******************************** Form Validation Messages ************************//
  validation_messages = {
    'no_of_guest': [
      { type: 'required', message: 'Number is required.' },
      { type: 'pattern', message: 'Number 1 to 100 is allowed.' }
    ]
  };
}