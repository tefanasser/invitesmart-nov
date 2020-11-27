import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  private loading: any;
  public userId: string;
  public id: string;
  public phone_no:any;
  public isLoader:any;
  public isValue:any;
  public lang:any;
  public errorMessage:any;
  constructor(
    private iab: InAppBrowser,  public toastController: ToastController, public translate: TranslateService,  public alertController: AlertController, public userService: UserService, public formBuilder: FormBuilder, private router: Router) {
      translate.setDefaultLang('ar');
      this.lang = 'ar'
      localStorage.setItem('language',  this.lang);
      this.errorMessage = this.lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
  }
  ngAfterViewInit() {
    this.userId = localStorage.getItem('userId')
  }
  
 
  ngOnInit() {
  }

  async successMessage(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  changeLanguage(lang){
    this.lang = lang;
   let err = lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
    this.errorMessage = lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
    localStorage.removeItem('language');
    if(lang){
      let message = 'Language is changed  successfully.';
      this.successMessage(message)
      localStorage.setItem('language',  this.lang)
      this.translate.use(this.lang);
    }
   
  }
  empty_storage() {
    localStorage.removeItem('userId')
    localStorage.removeItem('guests')
    localStorage.removeItem('invitationId');
    localStorage.removeItem('isGuestSelected')
    localStorage.removeItem('event');
    localStorage.removeItem('eventName')
     this.router.navigate(['/sign-up'])
  }
    // ************************ Sign Up***************************//
    async logout() {
      this.userId = localStorage.getItem('userId')
      if(this.userId) {
        this.isLoader = true;
        await this.userService.logout({userId: this.userId})
          .subscribe(res => {
              this.isLoader = false;
              this.empty_storage();
              this.router.navigate(['/sign-up']) ;
              let message = 'User is logout  successfully.';
              
              this.successMessage(message)
          }, err => {
            this.isLoader = false;
            this.empty_storage();
            let message = 'User is logout  successfully.';
            this.successMessage(message)
            console.log(err.error.error)
            this.isValue = err;
          });
      } else {
        this.empty_storage();
        let message = 'User is logout  successfully.';
        this.successMessage(message)
        console.log("Logout sucessfully.")
      }
     
    } 
    back(){
      this.userId = localStorage.getItem('userId');
      if(this.userId) {
        this.router.navigate(['/invitation']) ;
      } else {
        this.router.navigate(['/sign-up']) ;
      }
    }
    whatsup_redirect(){
      this.iab.create('https://api.whatsapp.com/send?phone=966505278757&text=%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%20invite%20smart%20', `_system`);
   }
}