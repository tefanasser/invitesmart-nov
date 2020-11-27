import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileOriginal } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-create-invitation',
  templateUrl: 'create-invitation.page.html',
  styleUrls: ['create-invitation.page.scss'],
})
export class CreateInvitationPage {
  //  File: FileOriginal
  private loading: any;
  public formData: any = {};
  public userId: string;
  public id: string;
  invitation_form: FormGroup;
  public event_name: any;
  public image_name: any;
  public currentImage: any;
  public image: any;
  public imagePath: any;
  public result: any;
  public isLoader: any;
  public event_location: any;
  public lang: any;
  public isPlatform:any;
  constructor(
    public platform: Platform, public translate: TranslateService, public toastController: ToastController, public actionSheetController: ActionSheetController, private camera: Camera, public alertController: AlertController, public userService: UserService, public formBuilder: FormBuilder, private router: Router) {
    this.lang = localStorage.getItem('language')
    if (this.lang) {
      this.translate.use(this.lang);
    }
  }
  ngAfterViewInit() {

  }

  ngOnInit() {
    this.isPlatform = this.platform.is('ios');
    localStorage.getItem('userId')
    this.invitation_form = this.formBuilder.group({
      event_name: [null, Validators.compose([Validators.required])]
    });
  }

  async alertMessage(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    //   if(message == 'Image uploaded successfully.'){
    //   setTimeout(()=>{
    //     alert.dismiss();
    // }, 1);
    // }
  }
  async successMessage() {
    const toast = await this.toastController.create({
      message: 'Image is uploaded  successfully.',
      duration: 2000
    });
    toast.present();
  }
  // ************************ Create Invitation***************************//
  async create_invitation() {
    let userId = localStorage.getItem('userId');
    let imageName = localStorage.getItem('image');
    var data = { invitation_image: imageName, event_name: this.event_name, userId: userId }
    await this.userService.createInvitation(data)
      .subscribe(res => {
        this.router.navigate(['/invitation'])
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
  captureImage() {
    const CamOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      // targetWidth: 1200,
      // targetHeight: 1200,
      allowEdit: false
    }
    this.camera.getPicture(CamOptions).then((imageData) => {
      if (imageData) {
        this.uploadImage(imageData);
      }
    });

  }

  captureImageGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 0,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      // targetWidth: 1200,
      // targetHeight: 1200,
      allowEdit: false
    }
    this.camera.getPicture(options).then((imageData) => {
      if (imageData) {
        this.uploadImage(imageData);
      }
    });
  }

  async CameraActionSheet() {
    let actionSheet = await this.actionSheetController.create({
      header: this.lang == 'en' ? 'Choose an image from' : 'اختيار صورة من',
      // enableBackdropDismiss: true,
      buttons: [
        {
          text: this.lang == 'en' ? 'camera' : 'الة تصوير',
          icon: 'camera',
          handler: () => {
            this.captureImage();
          }
        },
        {
          text: this.lang == 'en' ? 'Library' : 'مكتبة',
          icon: 'image',
          handler: () => {
            this.captureImageGallery();
          }
        },
        {
          text: this.lang == 'en' ? 'Cancel' : 'الغاء',
          role: 'cancel',
          icon: 'close-circle',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  async uploadImage(data) {
    localStorage.removeItem('image');
    this.isLoader = true;
    await this.userService.uploadImage({ base64image: data })
      .subscribe(res => {
        this.successMessage()
        this.result = res;
        this.currentImage = this.result.data;
        localStorage.setItem('image', this.currentImage);
        this.isLoader = false;

      }, err => {
        this.formData = {};
        this.alertMessage(err.error.message)
        this.isLoader = false;
      });
  }

  back() {
    localStorage.removeItem('image');
    this.router.navigate(['/invitation'])
  }
  nextPage() {
    localStorage.removeItem('invitationId');
    if (this.event_name) {
      localStorage.setItem('event', this.event_location);
      localStorage.setItem('eventName', this.event_name);
      this.router.navigate(['/choose-package'], { queryParams: { event_name: this.event_name, paidPlan: true} })
    } else {
      let eventName = this.lang == 'en' ? 'Event name is required.' : 'فضلا ادخل اسم الدعوة'
    
    }

  }
  // ******************************** Form Validation Messages ************************//
  validation_messages = {
    'event_name': [
      { type: 'required', message: this.lang == 'en' ? 'Event name is required.' : 'فضلا ادخل اسم الدعوة' }

    ]

  };
}

