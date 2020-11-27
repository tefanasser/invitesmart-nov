import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-scan-list',
  templateUrl: './scan-list.page.html',
  styleUrls: ['./scan-list.page.scss'],
})
export class ScanListPage implements OnInit {

  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  number_form: FormGroup;
  public names:any = [];
  public name:any;
  public invitationId:any;
  public invitation:any
  public isLoader: any;
  constructor(
    public translate: TranslateService, public actionSheetController: ActionSheetController,  public alertController: AlertController, public userService: UserService, public formBuilder: FormBuilder, private router: Router) {
      let lang = localStorage.getItem('language')
      if (lang) {
        this.translate.use(lang);
      }
    }
  ionViewDidEnter() {
    this.guest_list();
   
  }
  
  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.invitationId = localStorage.getItem('invitationId');
    // this.guest_list();
    // const regexPattern = /^\d{1,3}$/;
    // Validators.pattern(regexPattern);
    // this.number_form = this.formBuilder.group({
    //   image_code: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern(/^[1-9][0-9]?$|^100$/)
    //   ]))
    // });
  }
   
  // ************************ Guest List ***************************//
   async guest_list() {
    this.names = []
    let userId = localStorage.getItem('userId');
    this.isLoader = true;
    await this.userService.scannedGuest(userId, this.invitationId)
      .subscribe(res => {
       this.names = res['data'];
       this.isLoader = false;
       console.log(this.names, 'testing')
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
  
  // ************************ Delete Records ***************************//
   async deleteRecord(id){
    await this.userService.delete(id)
      .subscribe(res => {
        this.guest_list()
      }, err => {
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
 
  async addNames() {
    var cells = this.name.split(/\r\n|\n/);
    var arr = [];
    for (var i = 0; i < cells.length; i++) {
       if(cells[i]){
        let data = {name: cells[i], userId: this.userId, invitationId: this.invitationId}
        arr.push(data);
      }
     
    }
    await this.userService.addGuestName({data: arr})
    .subscribe(res => {
      this.guest_list()
    }, err => {
      this.formData = {};
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