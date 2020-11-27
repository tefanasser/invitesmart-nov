import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  register_form: FormGroup;
  public phone_no:any;
  public email:any;
  public images:any=[];
  public isLoader:any;
  public isValue:any;
  public lang:any;
  public regType: any;
  public errorMessage:any;
  constructor(
    public toastController: ToastController, public translate: TranslateService,  public alertController: AlertController, public userService: UserService, public formBuilder: FormBuilder, private router: Router) {
      translate.setDefaultLang('ar');
      this.lang = 'ar'
      localStorage.setItem('language',  this.lang);
      this.errorMessage = this.lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
      this.checkMessage(this.errorMessage);
      this.regType = "email"
  }
  ngAfterViewInit() {
    this.regType = "email"
  }
  
  checkMessage(message){
    this.validation_messages = {
      'phone_no': [
        { type: 'required', message:  message}
       
      ]
    };
  }
  ngOnInit() {
    this.regType = "email"
    this.register_form = this.formBuilder.group({
      phone_no: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(16)])]
    });
  }

  async alertMessage(err) {
    const alert = await this.alertController.create({
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
  changeLanguage(lang){
    this.lang = lang;
    this.errorMessage = lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
    this.checkMessage(this.errorMessage)
    localStorage.removeItem('language');
    if(lang){
      localStorage.setItem('language',  this.lang)
      this.translate.use(this.lang);
    }
   
  }

  register_type(value) {
    if(value == 1) {
      this.regType = "email"
    }  if(value == 2) {
      this.regType = "phone"
    }

  }

  async check_phone() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Have you added area code your phone number',
      buttons: ['No', 'Yes']
    });

    await alert.present();
  }
    // ************************ Sign Up***************************//
  async register() {
    console.log(this.regType, this.email,this.phone_no )
    if(this.regType == 'email') {
      if(this.email){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(this.email) == false) 
        {
            alert('Invalid Email Address');
            return false;

        } else {
          var obj = {emailOrPhone: this.email, regType: this.regType}
          this.reg_data(obj)
        }
      } else {
        alert('Email is required.')
      }
     

    } else if(this.regType == 'phone') {
      if(this.phone_no) {
        var result = confirm("If you have entered  correct country code and phone number click Ok");
        if (result) {
          var obj = {emailOrPhone: this.phone_no, regType: this.regType}
          this.reg_data(obj)
        }
      } else {
        alert('Phone number is required.')
      }
      
      
    } else {
      alert('select sign up type')
      return false
    }
  
  
   
  }
  async successMessage(type) {
    const toast = await this.toastController.create({
      message: type,
      duration: 2000
    });
    toast.present();
  }
  async reg_data(obj) {
    this.isLoader = true;
    await this.userService.register(obj)
      .subscribe(res => {
          this.isLoader = false;
          if(this.regType == 'email') {
            this.successMessage('Please check your email.One time password is sent.')
          } else {
            this.successMessage('One time password is sent to your phone.')
          }
          this.router.navigate(['/sign-in']) 
      }, err => {
        this.isLoader = false;
        console.log(err.error.error)
        this.alertMessage(JSON.stringify("Something went wrong.Try again"))
        this.isValue = err;
        console.log(this.isValue, 'testing');
      });
  }

  sign_up() {
     this.router.navigate(['/sign-in'])
  }
  
  // ******************************** Form Validation Messages ************************//

  validation_messages = {
    'phone_no': [
      { type: 'required', message:  this.errorMessage}
     
    ],
    
  };
}