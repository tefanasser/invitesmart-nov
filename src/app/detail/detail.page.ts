import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import * as $ from "jquery";
import { AlertController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import htmlToImage from 'html-to-image';
import { Platform, Events, LoadingController } from '@ionic/angular';
import domtoimage from 'dom-to-image';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './../services/user.service';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @ViewChild('container', {static: false}) container;
  public qrCode: any = null;
  public invitation:any;
  public imgUrl:any;
  constructor(private platform: Platform, public userService: UserService, public translate: TranslateService, private socialSharing: SocialSharing, private modalController: ModalController) {
    let lang = localStorage.getItem('language')
      if (lang) {
        this.translate.use(lang);
      }
   }
  
  ngOnInit() {
    this.qrCode =   localStorage.getItem('qrCode');
    this.invitation = JSON.parse(localStorage.getItem('detail'));
    
    console.log(this.invitation, 'testing')
 }
 shareImage() {
  // this.platform.ready().then(() => {
    // if (this.platform.is('ios')) {
  setTimeout(() => domtoimage.toPng(this.container.nativeElement)
  .then(dataUrl => {
    var img = new Image();
      img.src = dataUrl;
      this.imgUrl = img.src
      console.log(img.src)
      
  })
  .catch(function (error) {
      console.error('oops, something went wrong!', error);
  }), 1000);
// }
// })
}
}
