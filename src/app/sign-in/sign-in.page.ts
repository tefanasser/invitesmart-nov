import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { SessionProvider } from '../services/session/session';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  login_form: FormGroup;
  public otp_code: any;
  public result: any
  public isLoader: any;
  public lang:any;
  constructor(
    private iab: InAppBrowser, public translate: TranslateService, public alertController: AlertController, public userService: UserService, public formBuilder: FormBuilder, private router: Router) {
   
  }

  ngAfterViewInit() {
   this.lang = localStorage.getItem('language')
    if (this.lang) {
      this.translate.use(this.lang);
      console.log(this.translate, '###############')
    }
  }

  ngOnInit() {
    this.login_form = this.formBuilder.group({
      otp_code: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
    });
  }

  async alertMessage(err) {
    const alert = await this.alertController.create({
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
  // ************************ Sign In ***************************//
  async login() {
    this.isLoader = true;
    await this.userService.login({ otp: this.otp_code })
      .subscribe(res => {
        this.result = res
        this.isLoader = false;
        console.log(this.result, 'testing')
        localStorage.setItem('userId', this.result.data.id)
        localStorage.setItem('sessionToken', this.result.data.accessToken)
        this.router.navigate(['/invitation'])

      }, err => {
        this.isLoader = false;
        this.alertMessage(err.error.message)
      });
  }
  redirect(){
       this.iab.create('https://api.whatsapp.com/send?phone=966505278757&text=%D9%84%D9%85%20%D9%8A%D8%B5%D9%84%D9%86%D9%8A%20%D9%83%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20/%20I%20did%20not%20receive%20the%20code%20', `_system`);
  }
  // ******************************** Form Validation Messages ************************//
  validation_messages = {
    'otp_code': [
      { type: 'required', message: this.lang  == 'en' ? '4-digit otp code is required.' : '4-رمز otp مطلوب.' }
    ]
  };
}
