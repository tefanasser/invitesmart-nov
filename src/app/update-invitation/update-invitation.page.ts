import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-update-invitation',
  templateUrl: './update-invitation.page.html',
  styleUrls: ['./update-invitation.page.scss'],
})
export class UpdateInvitationPage implements OnInit {
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
  public invitation_image: any;
  public isLoader: any
  public result: any;
  constructor(
    private route: ActivatedRoute, public actionSheetController: ActionSheetController, private camera: Camera, public alertController: AlertController, public userService: UserService, public formBuilder: FormBuilder, private router: Router) {
  }
  ngAfterViewInit() {

  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams["id"];
    this.event_name = this.route.snapshot.queryParams["event_name"];
    this.invitation_image = this.route.snapshot.queryParams["invitation_image"];
    this.invitation_form = this.formBuilder.group({
      event_name: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])]
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
  async update_invitation() {
    let data = { event_name: this.event_name, invitation_image: this.invitation_image, id: this.id };
    await this.userService.updateInvitation(data)
      .subscribe(res => {
        this.router.navigate(['/invitation'])
      }, err => {
        this.formData = {};
        this.alertMessage(err.error.message)
      });
  }

  captureImage() {
    const CamOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      // targetWidth: 1200,
      // targetHeight: 1200
    }
    this.camera.getPicture(CamOptions).then((imageData) => {
      // this.currentImage = imageData;
      this.uploadImage(imageData);
    });

  }

  captureImageGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 0,
      saveToPhotoAlbum: true,
      // targetWidth: 1200,
      // targetHeight: 1200,
      allowEdit: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.uploadImage(imageData);
    });
  }

  async CameraActionSheet() {
    let actionSheet = await this.actionSheetController.create({
      header: 'Choose an image from',
      // enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.captureImage();
          }
        },
        {
          text: 'Library',
          icon: 'image',
          handler: () => {
            this.captureImageGallery();
          }
        },
        {
          text: 'Cancel',
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

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }
  async uploadImage(data) {
    this.isLoader = true;
    await this.userService.uploadImage({ base64image: data })
      .subscribe(res => {
        this.result = res;
        this.invitation_image = this.result.data;
        this.isLoader = false;
      }, err => {
        this.isLoader = false;
        this.alertMessage(err.error.message)
      });
  }

  back() {
    localStorage.removeItem('image');
    this.router.navigate(['/invitation'])
  }
  // ******************************** Form Validation Messages ************************//
  validation_messages = {
    'event_name': [
      { type: 'required', message: 'Event name is required.' }

    ]

  };
}

