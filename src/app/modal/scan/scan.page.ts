import { Component, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import {ModalController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  constructor(public translate: TranslateService, public formBuilder: FormBuilder, public modalController: ModalController, private route:ActivatedRoute, public alertController: AlertController, public userService: UserService, private router: Router) { 
    let lang = localStorage.getItem('language')
    if (lang) {
      this.translate.use(lang);
    }
  }
 
  ngOnInit() {
   
  }
  
// ********************************** Close Modal *******************************************//
closeModal(){
  this.modalController.dismiss();
  this.router.navigate(['/scan-list'])
}
}
