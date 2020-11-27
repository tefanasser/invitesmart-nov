(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-invitation-update-invitation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/update-invitation/update-invitation.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/update-invitation/update-invitation.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header >\n  <ion-toolbar class=\"toolbar-background\">\n    <ion-buttons slot=\"start\">\n      <!--<ion-back-button></ion-back-button>-->\n<!-- </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <ion-grid class=\"ion-padding-top\">\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"12\">\n        <form [formGroup]=\"invitation_form\" class=\" form \" class=\"form app-form-area\">\n          <div class=\"grid-padding\">\n            <h3 color=\"primary\" style=\"margin-top:10px;\">EVENT NAME</h3>\n            <div colass=\"row\" style=\"text-align: -webkit-center;\">\n              <div class=\"input-group prefix\">\n                <ion-input type=\"text\" [(ngModel)]=\"event_name\" formControlName=\"event_name\">\n                </ion-input>\n              </div>\n            </div>\n            <div class=\"validation-errors login-validation\">\n              <ng-container *ngFor=\"let validation of validation_messages.event_name\">\n                <div class=\"error-message\" *ngIf=\"invitation_form.get('event_name').hasError(validation.type) && (invitation_form.get('event_name').dirty || invitation_form.get('event_name').touched)\">\n                  <ion-icon style=\"color: red;\" ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon>\n                  <span style=\"color: red;\">{{validation.message}}</span>\n                </div>\n              </ng-container>\n            </div>\n            <br>\n\n            <h3 color=\"primary\" style=\"margin-top:20px;\">INVITATION IMAGE</h3>\n            <div class=\"input-group prefix image-field\">\n              <ion-input type=\"text\" [(ngModel)]=\"invitation_image\" [ngModelOptions]=\"{standalone: true}\">\n                <ion-icon (click)=\"CameraActionSheet()\" ios=\"ios-add-circle\" md=\"md-add-circle\" class=\"plus-icon-style\"></ion-icon>\n              </ion-input>\n            </div>\n            <div *ngIf=\"isLoader\">\n              <ion-spinner name=\"lines\"></ion-spinner>\n            </div>\n            <div *ngIf=\"!invitation_image\">\n              <img src=\"assets/profile-image.png\" style=\"margin-top:0px;\">\n            </div>\n            <!-- <img src=\"{{currentImage}}\" style=\"height:50px; height:50px;\"> -->\n            <div *ngIf=\"invitation_image\">\n              <img src=\"{{invitation_image}}\" style=\"margin-top:10px; margin-bottom:10px;border: 2px solid gray;\">\n            </div>\n          </div>\n          <ion-row>\n            <ion-col size=\"6\">\n              <button type=\"submit\" routerLink=\"/invitation\" class=\"btn send-button\" color=\"primary\">&nbsp;&nbsp;Back &nbsp;&nbsp;\n              </button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <button type=\"submit\" (click)=\"update_invitation()\" [disabled]=\"isLoader\" class=\"btn send-button\" color=\"primary\">Update</button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/update-invitation/update-invitation.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/update-invitation/update-invitation.module.ts ***!
  \***************************************************************/
/*! exports provided: UpdateInvitationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInvitationPageModule", function() { return UpdateInvitationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_invitation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-invitation.page */ "./src/app/update-invitation/update-invitation.page.ts");







const routes = [
    {
        path: '',
        component: _update_invitation_page__WEBPACK_IMPORTED_MODULE_6__["UpdateInvitationPage"]
    }
];
let UpdateInvitationPageModule = class UpdateInvitationPageModule {
};
UpdateInvitationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_update_invitation_page__WEBPACK_IMPORTED_MODULE_6__["UpdateInvitationPage"]]
    })
], UpdateInvitationPageModule);



/***/ }),

/***/ "./src/app/update-invitation/update-invitation.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/update-invitation/update-invitation.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #989898;\n  margin: 0;\n}\n\ninput {\n  height: 0px !important;\n  padding-bottom: 0px !important;\n  -width: 80% !important;\n}\n\n.image-field ion-input {\n  height: 47px !important;\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #989898;\n  margin: 0;\n}\n\n.native-input.sc-ion-input-md {\n  width: 80 !important;\n}\n\n.grid-padding {\n  padding: 50px !important;\n}\n\n.plus-icon-style {\n  color: #3E51B5 !important;\n  margin-top: 0px;\n  font-size: 13px;\n  margin-bottom: 1px;\n}\n\n.custom-alertDanger {\n  color: greenyellow !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3VwZGF0ZS1pbnZpdGF0aW9uL3VwZGF0ZS1pbnZpdGF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXBkYXRlLWludml0YXRpb24vdXBkYXRlLWludml0YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0csa0JBQUE7QUNBSDs7QURHQTtFQUFvQixnQkFBQTtFQUNqQixrQkFBQTtBQ0NIOztBREVBO0VBQXNCLGdCQUFBO0VBQ25CLGtCQUFBO0FDRUg7O0FEQ0E7RUFDRyxrQkFBQTtBQ0VIOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUNHRjs7QUREQztFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0lIOztBREZBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQ0tGOztBREZBO0VBQ0Usb0JBQUE7QUNLRjs7QURIQTtFQUNFLHdCQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLDZCQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUtaW52aXRhdGlvbi91cGRhdGUtaW52aXRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIgeyAgLyogRmlyZWZveCAxOSsgKi9cbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cbmlvbi1pbnB1dHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzk4OTg5ODtcbiAgbWFyZ2luOiAwO1xufVxuIGlucHV0IHtcbiAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAtd2lkdGg6IDgwJSAhaW1wb3J0YW50XG59XG4uaW1hZ2UtZmllbGQgaW9uLWlucHV0IHtcbiAgaGVpZ2h0OjQ3cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzk4OTg5ODtcbiAgbWFyZ2luOiAwO1xuIFxufVxuLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICB3aWR0aDo4MCAhaW1wb3J0YW50O1xufVxuLmdyaWQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcbn1cbi5wbHVzLWljb24tc3R5bGUge1xuICBjb2xvcjogIzNFNTFCNSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuLmN1c3RvbS1hbGVydERhbmdlciB7XG4gIGNvbG9yOiBncmVlbnllbGxvdyAhaW1wb3J0YW50O1xufVxuIiwiOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMTJweCAxMnB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjOTg5ODk4O1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2UtZmllbGQgaW9uLWlucHV0IHtcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICM5ODk4OTg7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICB3aWR0aDogODAgIWltcG9ydGFudDtcbn1cblxuLmdyaWQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnBsdXMtaWNvbi1zdHlsZSB7XG4gIGNvbG9yOiAjM0U1MUI1ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5jdXN0b20tYWxlcnREYW5nZXIge1xuICBjb2xvcjogZ3JlZW55ZWxsb3cgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/update-invitation/update-invitation.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/update-invitation/update-invitation.page.ts ***!
  \*************************************************************/
/*! exports provided: UpdateInvitationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInvitationPage", function() { return UpdateInvitationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");








let UpdateInvitationPage = class UpdateInvitationPage {
    constructor(route, actionSheetController, camera, alertController, userService, formBuilder, router) {
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.alertController = alertController;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formData = {};
        // ******************************** Form Validation Messages ************************//
        this.validation_messages = {
            'event_name': [
                { type: 'required', message: 'Event name is required.' }
            ]
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.id = this.route.snapshot.queryParams["id"];
        this.event_name = this.route.snapshot.queryParams["event_name"];
        this.invitation_image = this.route.snapshot.queryParams["invitation_image"];
        this.invitation_form = this.formBuilder.group({
            event_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1)])]
        });
    }
    alertMessage(err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: err,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    // ************************ Sign In ***************************//
    update_invitation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = { event_name: this.event_name, invitation_image: this.invitation_image, id: this.id };
            yield this.userService.updateInvitation(data)
                .subscribe(res => {
                this.router.navigate(['/invitation']);
            }, err => {
                this.formData = {};
                this.alertMessage(err.error.message);
            });
        });
    }
    captureImage() {
        const CamOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
        };
        this.camera.getPicture(CamOptions).then((imageData) => {
            // this.currentImage = imageData;
            this.uploadImage(imageData);
        });
    }
    captureImageGallery() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: 0,
            saveToPhotoAlbum: true,
            // targetWidth: 1200,
            // targetHeight: 1200,
            allowEdit: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.uploadImage(imageData);
        });
    }
    CameraActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionSheetController.create({
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
            yield actionSheet.present();
        });
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
    uploadImage(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoader = true;
            yield this.userService.uploadImage({ base64image: data })
                .subscribe(res => {
                this.result = res;
                this.invitation_image = this.result.data;
                this.isLoader = false;
            }, err => {
                this.isLoader = false;
                this.alertMessage(err.error.message);
            });
        });
    }
    back() {
        localStorage.removeItem('image');
        this.router.navigate(['/invitation']);
    }
};
UpdateInvitationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UpdateInvitationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-invitation',
        template: __webpack_require__(/*! raw-loader!./update-invitation.page.html */ "./node_modules/raw-loader/index.js!./src/app/update-invitation/update-invitation.page.html"),
        styles: [__webpack_require__(/*! ./update-invitation.page.scss */ "./src/app/update-invitation/update-invitation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], UpdateInvitationPage);



/***/ })

}]);
//# sourceMappingURL=update-invitation-update-invitation-module-es2015.js.map