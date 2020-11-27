import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-invitation',
  templateUrl: 'invitation.page.html',
  styleUrls: ['invitation.page.scss'],
})
export class InvitationPage {
  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  invitation_form: FormGroup;
  public image_code:any;
  public invitations:any;
  public images:any=[];
  public names: any;
  public isLoader:any;
  constructor(
    public translate: TranslateService, public alertController: AlertController, public userService: UserService, private router: Router) {
      let lang = localStorage.getItem('language')
      if (lang) {
        this.translate.use(lang);
      }
    }
  
  ngOnInit() {
    // this.invitation_list();
  }
  ionViewDidEnter() {
    this.invitation_list();
    console.log(this.translate, '#########################')
  }
  async alertMessage(err) {
    const alert = await this.alertController.create({
      message: err,
      buttons: ['OK']
    });
    await alert.present();
  }
  // ************************ Redirct To Thumbnail Images Page ***************************//
  async invitation_list(){
    this.isLoader = true;
    this.userId = localStorage.getItem('userId');
    localStorage.removeItem('image');
    await this.userService.invitations(this.userId)
      .subscribe(res => {
       this.invitations = res['data'];
       this.isLoader = false;
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
 
  async edit_invitation(invitation) {
    localStorage.removeItem('invitationId');
    localStorage.removeItem('names');
    localStorage.removeItem('guests');
    localStorage.removeItem('isGuestSelected');
    await this.userService.getInvitation(invitation._id)
      .subscribe(res => {
       let data = res['data'];
       localStorage.setItem('invitationId', data._id);
       localStorage.setItem('guests', data.no_of_guest);
       localStorage.setItem('isGuestSelected', data.isGuestSelected);
      if(data.isGuestSelected) {
        this.router.navigate(['/thumbnails'])
      } else {
        this.router.navigate(['/invitation-type'])
      }
      }, err => {
        this.alertMessage(err.error.message)
      });
   
  }

    // ************************ Guest List ***************************//
    async guest_list(id) {
      let userId = localStorage.getItem('userId');
      localStorage.removeItem('names')
      await this.userService.guest_list(userId, id)
        .subscribe(res => {
         this.names = res['data'];
         localStorage.setItem('names', JSON.stringify(this.names))
         this.router.navigate(['/thumbnails'])
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
 
  goTo(){
    this.router.navigate(['/create-invitation'])
  }
}