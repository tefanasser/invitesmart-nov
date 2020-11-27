import { Component, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-add-guests',
  templateUrl: './add-guests.page.html',
  styleUrls: ['./add-guests.page.scss'],
})
export class AddGuestsPage implements OnInit {
  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  number_form: FormGroup;
  public no_of_guest:any;
  invitation_form: FormGroup;
  public result:any;
  constructor(public translate: TranslateService, public formBuilder: FormBuilder, public modalController: ModalController, private route:ActivatedRoute, public alertController: AlertController, public userService: UserService, private router: Router) {
    let lang = localStorage.getItem('language')
    if (lang) {
      this.translate.use(lang);
    }
   }

  ngOnInit() {
    this.number_form = this.formBuilder.group({
      no_of_guest: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(10[1-9]|1[1-9]\d|[2-9]\d\d|1000)$/)
      ]))
    });
  }
  async alertMessage(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  async payment(){
      // this.router.navigate(['/choose-package'])
      await this.userService.payment({each_guest_price: 2, quantity: this.no_of_guest})
      .subscribe(res => {
         this.result = res;
         console.log(this.result.url)
         window.location.href = this.result.url;
        //  this.router.navigate(['/choose-package'])
      }, err => {
        this.alertMessage(err.error.message)
      });
    
   
  }
// ********************************** Close Modal *******************************************//
closeModal(){
  this.modalController.dismiss();
}
// ******************************** Form Validation Messages ************************//
validation_messages = {
  'no_of_guest': [
    { type: 'required', message: 'Number is required.' },
    { type: 'pattern', message: 'Number 101 to 1000 is allowed.'}
  ]
};
}
