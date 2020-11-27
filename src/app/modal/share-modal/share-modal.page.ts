import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
// import htmlToImage from 'html-to-image';
import * as $ from "jquery";
import { Platform, Events, LoadingController } from '@ionic/angular';
import domtoimage from 'dom-to-image';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import html2Canvas from 'html2canvas';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.page.html',
  styleUrls: ['./share-modal.page.scss'],
})
export class ShareModalPage implements OnInit {
  // @ViewChild('screen', { static: false }) screen: ElementRef;
  // @ViewChild('canvas', { static: false }) canvas: ElementRef;
  // @ViewChild('downloadLink', { static: false }) downloadLink: ElementRef;
  public qrCode: any = null;
  public base64image: any;
  public lang: any;
  public result: any;
  public isLoader: any;
  public screen: any;
  state: boolean = false;
  constructor(private screenshot: Screenshot, private platform: Platform, public userService: UserService, public translate: TranslateService, private socialSharing: SocialSharing, private modalController: ModalController) {
    this.lang = localStorage.getItem('language')
    if (this.lang) {
      this.translate.use(this.lang);
    }
  }
  ngOnInit(){
    this.lang = localStorage.getItem('language')
    if (this.lang) {
      this.translate.use(this.lang);
    }
  }

  ionViewDidEnter() {
    this.isLoader = true;
    this.get_invitation();
    // setTimeout(() => {
    //   this.share();
    // }, 4000);
  }

  ionViewWillEnter() {
    this.get_invitation();
  }

  async get_invitation() {
    let invitationId = localStorage.getItem('invitationId')
    if(invitationId){
      await this.userService.getInvitation(invitationId)
      .subscribe(res => {
        this.result = res['data'];
        console.log(this.result, '###################')
      }, err => {
        console.log(err)
      });
    }
  }
  // ********************************** Close Modal *******************************************//
  closeModal() {
    this.modalController.dismiss();
  }
  reset() {
    var self = this;
    setTimeout(function () {
      self.state = false;
    }, 3000);
  }
  
  wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    
    context.fillText(line, x, y);
  }
  // ******************************** Share To ***************************************************//
  share() {
    if (1) {
      var myImg: any = document.querySelector("#img");
      var w = myImg.naturalWidth;
      var h = myImg.naturalHeight;
      if (w < 600) {
        h = h * 600 / w;
        w = 600;
      }
      var w_qr = Math.floor(w / 5);
      var w_logo = Math.floor(w / 4);
      var c: any = document.getElementById("myCanvas");
      c.width = w + 20;
      c.height = h + w_qr + 20;
      var ctx = c.getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, c.width, c.height);
      var img = document.getElementById("img");
      var img_logo = document.getElementById("img_logo");
      var qrcode = $('.qrcode img');
      var image = new Image();
      let tt = this;
      let title = '';
      if(this.lang == 'ar' && tt.result && tt.result.event_location){
        title = ':‫موقع‬ ‫المناسبة‬';
      } else if(this.lang == 'ar' && tt.result && !tt.result.event_location){
        title = '';
      } 
     
      if(this.lang == 'en' && tt.result && tt.result.event_location){
        title = 'Event location :'
      } else if(this.lang == 'en' && tt.result && !tt.result.event_location){
        title = ''
      } 
      image.onload = function () {
        ctx.drawImage(image, 30, h + 15, w_qr, w_qr);
        let dataUrl = c.toDataURL();
        tt.base64image = new Image();
        tt.base64image.src = dataUrl;
        tt.modalController.dismiss();
        tt.isLoader = false;
        var link = tt.result && tt.result.event_location && typeof (tt.result.event_location) !== "undefined" ? tt.result.event_location : "";
        // ************************Android share invitation code **********************
        tt.platform.ready().then(() => {
          if (tt.base64image) {
            tt.socialSharing.share(title, tt.result.event_name, tt.base64image.src, link).then(() => {
            }).catch(() => {
              // Error!
            });
          }
        })
        // ************************Ios share invitation code **********************
        // tt.platform.ready().then(() => {
        //   if (tt.base64image) {
        //     tt.socialSharing.share(null, null, tt.base64image.src, null).then(() => {
        //     }).catch(() => {
        //       // Error!
        //     });
        //   }
        // })
        // $('#temp_img').attr('src', base64);
      };
      image.src = qrcode.attr('src');
      ctx.drawImage(img, 10, 10, w, h);
      ctx.drawImage(img_logo, w - w_logo, h-15, w_logo, w_logo * 0.9);
      let font_size = 30 * w / 745;
      ctx.font = font_size + 'px Arial';
      ctx.fillStyle = "black";
      ctx.textAlign = "center";  
      ctx.textBaseline = 'middle';
      let text = $('#image_code').text()
      let stringType = this.isNumeric(text)
      console.log(w / 3 - 90, h + 50 + w_qr / 2, w / 2, '$$$$')
      if(stringType) {
        ctx.fillText($('#image_code').text(), w / 2-100, h + w_qr / 2);
      } else {
        this.wrapText(ctx, text, w / 2-100, h + w_qr / 2, w / 2, font_size+12);
        // this.wrapText(ctx, text, w / 3 - 90, h + 50 + w_qr / 2, w / 2, font_size+10);
      }
     
      // ctx.fillText(text, w / 2 - 50, h + w_qr / 2);
      return;
    }
    // **************************** IOS Sharing Functionality  *************************************
    // this.screenshot.save('jpg', 80, 'myscreenshot').then(res => {
    //   this.screen = resres.filePath;
    //   console.log(this.screen, 'testing123')
    //   this.state = true;
    //   var link = "invitesmart.com";
    //   this.platform.ready().then(() => {
    //     if (this.platform.is('ios')) {
    //       this.modalController.dismiss();
    //       this.socialSharing.share(null, null, this.screen, link).then(() => {
    //         this.modalController.dismiss();
    //       }).catch(() => {
    //         this.modalController.dismiss();
    //       });
    //     } else {
    //       if(this.platform.is('android')){
    //         alert(this.screen)
    //         this.socialSharing.share('Invite Smart', 'Invite Smart', this.screen, link).then(() => {
    //         this.modalController.dismiss();
    //         }).catch(() => {
    //           this.modalController.dismiss();
    //         });
    //       }
    //     }
    //   })
    //   // this.reset();
    // });
    // var convertMeToImg = $('#capture')[0];

    // ****************************  Android Sharing Functionality  *************************************
    var node = document.getElementById('capture');
    var link = this.result && this.result.event_location && typeof (this.result.event_location) !== "undefined" ? this.result.event_location : "invitesmart.com";
    // domtoimage.toPng(node)
    //   .then(dataUrl => {
    //     this.base64image = new Image();
    //     this.base64image.src = dataUrl;
    //     this.modalController.dismiss();
    //     this.isLoader = false;
    //     this.platform.ready().then(() => {
    //       if (this.base64image) {
    //         this.socialSharing.share('Invite Smart', this.result.event_name, this.base64image.src, link).then(() => {
    //         }).catch(() => {
    //           // Error!
    //         });
    //       }
    //     })
    //   })
    //   .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    //   });
  }
  isNumeric(value) {
    return /^-?\d+$/.test(value);
}
}
