(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-invitation-create-invitation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-invitation/create-invitation.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-invitation/create-invitation.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header >\n  <ion-toolbar class=\"toolbar-background\">\n    <ion-buttons slot=\"start\">\n      <!--<ion-back-button></ion-back-button>-->\n<!-- </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  <ion-grid class=\"ion-padding-top \">\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"12\">\n        <form  class=\" form \" class=\"form app-form-area\">\n          <div class=\"grid-padding\">\n            <h3 color=\"primary\" style=\"margin-top:10px;\">{{'page.event_name' | translate}}</h3>\n            <div colass=\"row\" style=\"text-align: -webkit-center;\">\n              <div class=\"input-group prefix\">\n                <ion-input type=\"text\"  [(ngModel)]=\"event_name\" [ngModelOptions]=\"{standalone: true}\" >\n                </ion-input>\n              </div>\n            </div>\n            <br>\n            <h3 color=\"primary\" style=\"margin-top:20px;\">{{'page.invitation_image' | translate}}</h3>\n            <div class=\"input-group prefix image-field create-invitation invitation-image\">\n              <input type=\"text\" [(ngModel)]=\"currentImage\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"image_name\">\n              <ion-icon  class=\"plus-icon-style\" (click)=\"CameraActionSheet()\" ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon>   \n            </div>\n\n            <div *ngIf=\"isLoader\"><ion-spinner name=\"lines\"></ion-spinner></div>\n            <div *ngIf=\"!currentImage\">  <img src=\"assets/profile-image.png\" style=\"margin-top:0px;\"></div>\n            <!-- <img src=\"{{currentImage}}\" style=\"height:50px; height:50px;\"> -->\n            <div *ngIf=\"currentImage\"> <img src=\"{{currentImage}}\" style=\"margin-top:10px; margin-bottom:10px; border: 2px solid gray;\"></div>\n            <h3 *ngIf=\"!isPlatform\" color=\"primary\" style=\"margin-top:10px;\"> {{'page.event_location_link' | translate}}</h3>\n            <div *ngIf=\"!isPlatform\" colass=\"row\" style=\"text-align: -webkit-center;\">\n              <div class=\"input-group prefix\">\n                <ion-input type=\"text\"  [(ngModel)]=\"event_location\" [ngModelOptions]=\"{standalone: true}\" >\n                </ion-input>\n              </div>\n            </div> \n          </div>\n          <ion-row>\n          </ion-row>\n          <div class=\"row\">\n            <button style=\"margin: 10px;\" type=\"submit\" routerLink=\"/invitation\" class=\"btn send-button\" color=\"primary\">&nbsp;&nbsp;{{'page.back' | translate}}\n              &nbsp;&nbsp;</button>\n            <button style=\"margin: 10px;\" type=\"submit\"  (click)=\"nextPage()\" class=\"btn send-button\" color=\"primary\">&nbsp;&nbsp;{{'page.next' | translate}} &nbsp;&nbsp;</button>\n            <!-- <button type=\"submit\"  [disabled]=\"!invitation_form.valid\" (click)=\"login()\" class=\"btn submit-button\" color=\"light\">Next</button> -->\n            </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n      <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n      <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n  \n  </footer>"

/***/ }),

/***/ "./src/app/create-invitation/create-invitation.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/create-invitation/create-invitation.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateInvitationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvitationPageModule", function() { return CreateInvitationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _create_invitation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-invitation.page */ "./src/app/create-invitation/create-invitation.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var CreateInvitationPageModule = /** @class */ (function () {
    function CreateInvitationPageModule() {
    }
    CreateInvitationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__["NgxQRCodeModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _create_invitation_page__WEBPACK_IMPORTED_MODULE_7__["CreateInvitationPage"]
                    }
                ])
            ],
            declarations: [_create_invitation_page__WEBPACK_IMPORTED_MODULE_7__["CreateInvitationPage"]]
        })
    ], CreateInvitationPageModule);
    return CreateInvitationPageModule;
}());



/***/ }),

/***/ "./src/app/create-invitation/create-invitation.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/create-invitation/create-invitation.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #989898;\n  margin: 0;\n}\n\n.image-field input {\n  height: 0px !important;\n  padding-bottom: 0px !important;\n  width: 80% !important;\n}\n\n.image-field ion-input {\n  height: 47px !important;\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #989898;\n  margin: 0;\n}\n\n.grid-padding {\n  padding: 50px !important;\n}\n\n.plus-icon-style {\n  color: #3E51B5 !important;\n  font-size: 25px;\n  position: relative;\n  margin-top: -35px;\n  margin-right: 5px;\n  z-index: 99999;\n}\n\n.custom-alertDanger {\n  color: greenyellow !important;\n}\n\n.invitation-image input {\n  height: 47px !important;\n  margin-top: 9px !important;\n  margin-bottom: 10px !important;\n  width: 100% !important;\n  border: 4px solid #989898;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2NyZWF0ZS1pbnZpdGF0aW9uL2NyZWF0ZS1pbnZpdGF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlYXRlLWludml0YXRpb24vY3JlYXRlLWludml0YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQztFQUFvQixnQkFBQTtFQUNqQixrQkFBQTtBQ0NKOztBREVDO0VBQXNCLGdCQUFBO0VBQ25CLGtCQUFBO0FDRUo7O0FEQ0M7RUFDRyxrQkFBQTtBQ0VKOztBREFDO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUNHSDs7QUREQTtFQUNJLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZBO0VBQ0csdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQ0tIOztBREZBO0VBQ0csd0JBQUE7QUNLSDs7QURIQTtFQUNHLHlCQUFBO0VBQ0MsZUFBQTtFQUlBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNHLDZCQUFBO0FDSUg7O0FERkE7RUFDRyx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDS0giLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtaW52aXRhdGlvbi9jcmVhdGUtaW52aXRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gfVxuIFxuIDo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuIH1cbiBcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gfVxuIGlvbi1pbnB1dHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHotaW5kZXg6IDI7XG4gICBmbG9hdDogbGVmdDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gICBib3JkZXI6IDRweCBzb2xpZCAjOTg5ODk4O1xuICAgbWFyZ2luOiAwO1xufVxuLmltYWdlLWZpZWxkIGlucHV0IHtcbiAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnRcbn1cbi5pbWFnZS1maWVsZCBpb24taW5wdXQge1xuICAgaGVpZ2h0OjQ3cHggIWltcG9ydGFudDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHotaW5kZXg6IDI7XG4gICBmbG9hdDogbGVmdDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gICBib3JkZXI6IDRweCBzb2xpZCAjOTg5ODk4O1xuICAgbWFyZ2luOiAwO1xuICBcbn1cbi5ncmlkLXBhZGRpbmcge1xuICAgcGFkZGluZzogNTBweCAhaW1wb3J0YW50O1xufVxuLnBsdXMtaWNvbi1zdHlsZSB7XG4gICBjb2xvcjogIzNFNTFCNSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgIC8vICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgIC8vICB6LWluZGV4OiAxMDAwO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IC0zNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuLmN1c3RvbS1hbGVydERhbmdlciB7XG4gICBjb2xvcjogZ3JlZW55ZWxsb3cgIWltcG9ydGFudDtcbn1cbi5pbnZpdGF0aW9uLWltYWdlIGlucHV0IHtcbiAgIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xuICAgbWFyZ2luLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG4gICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgYm9yZGVyOiA0cHggc29saWQgIzk4OTg5ODtcbn0iLCI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICM5ODk4OTg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmltYWdlLWZpZWxkIGlucHV0IHtcbiAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZS1maWVsZCBpb24taW5wdXQge1xuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzk4OTg5ODtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZ3JpZC1wYWRkaW5nIHtcbiAgcGFkZGluZzogNTBweCAhaW1wb3J0YW50O1xufVxuXG4ucGx1cy1pY29uLXN0eWxlIHtcbiAgY29sb3I6ICMzRTUxQjUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgei1pbmRleDogOTk5OTk7XG59XG5cbi5jdXN0b20tYWxlcnREYW5nZXIge1xuICBjb2xvcjogZ3JlZW55ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmludml0YXRpb24taW1hZ2UgaW5wdXQge1xuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzk4OTg5ODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-invitation/create-invitation.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/create-invitation/create-invitation.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateInvitationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvitationPage", function() { return CreateInvitationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");











var CreateInvitationPage = /** @class */ (function () {
    function CreateInvitationPage(platform, translate, toastController, actionSheetController, camera, alertController, userService, formBuilder, router) {
        this.platform = platform;
        this.translate = translate;
        this.toastController = toastController;
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
                { type: 'required', message: this.lang == 'en' ? 'Event name is required.' : 'فضلا ادخل اسم الدعوة' }
            ]
        };
        this.lang = localStorage.getItem('language');
        if (this.lang) {
            this.translate.use(this.lang);
        }
    }
    CreateInvitationPage.prototype.ngAfterViewInit = function () {
    };
    CreateInvitationPage.prototype.ngOnInit = function () {
        this.isPlatform = this.platform.is('ios');
        localStorage.getItem('userId');
        this.invitation_form = this.formBuilder.group({
            event_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    };
    CreateInvitationPage.prototype.alertMessage = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateInvitationPage.prototype.successMessage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Image is uploaded  successfully.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ************************ Create Invitation***************************//
    CreateInvitationPage.prototype.create_invitation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userId, imageName, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = localStorage.getItem('userId');
                        imageName = localStorage.getItem('image');
                        data = { invitation_image: imageName, event_name: this.event_name, userId: userId };
                        return [4 /*yield*/, this.userService.createInvitation(data)
                                .subscribe(function (res) {
                                _this.router.navigate(['/invitation']);
                            }, function (err) {
                                if (err.error.message == 'token expired') {
                                    _this.router.navigate(['/sign-up']);
                                    _this.alertMessage(err.error.message);
                                }
                                else {
                                    _this.alertMessage(err.error.message);
                                    _this.router.navigate(['/invitation']);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateInvitationPage.prototype.captureImage = function () {
        var _this = this;
        var CamOptions = {
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
        };
        this.camera.getPicture(CamOptions).then(function (imageData) {
            if (imageData) {
                _this.uploadImage(imageData);
            }
        });
    };
    CreateInvitationPage.prototype.captureImageGallery = function () {
        var _this = this;
        var options = {
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
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (imageData) {
                _this.uploadImage(imageData);
            }
        });
    };
    CreateInvitationPage.prototype.CameraActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: this.lang == 'en' ? 'Choose an image from' : 'اختيار صورة من',
                            // enableBackdropDismiss: true,
                            buttons: [
                                {
                                    text: this.lang == 'en' ? 'camera' : 'الة تصوير',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.captureImage();
                                    }
                                },
                                {
                                    text: this.lang == 'en' ? 'Library' : 'مكتبة',
                                    icon: 'image',
                                    handler: function () {
                                        _this.captureImageGallery();
                                    }
                                },
                                {
                                    text: this.lang == 'en' ? 'Cancel' : 'الغاء',
                                    role: 'cancel',
                                    icon: 'close-circle',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateInvitationPage.prototype.uploadImage = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.removeItem('image');
                        this.isLoader = true;
                        return [4 /*yield*/, this.userService.uploadImage({ base64image: data })
                                .subscribe(function (res) {
                                _this.successMessage();
                                _this.result = res;
                                _this.currentImage = _this.result.data;
                                localStorage.setItem('image', _this.currentImage);
                                _this.isLoader = false;
                            }, function (err) {
                                _this.formData = {};
                                _this.alertMessage(err.error.message);
                                _this.isLoader = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateInvitationPage.prototype.back = function () {
        localStorage.removeItem('image');
        this.router.navigate(['/invitation']);
    };
    CreateInvitationPage.prototype.nextPage = function () {
        localStorage.removeItem('invitationId');
        if (this.event_name) {
            localStorage.setItem('event', this.event_location);
            localStorage.setItem('eventName', this.event_name);
            this.router.navigate(['/choose-package'], { queryParams: { event_name: this.event_name, paidPlan: true } });
        }
        else {
            var eventName = this.lang == 'en' ? 'Event name is required.' : 'فضلا ادخل اسم الدعوة';
        }
    };
    CreateInvitationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CreateInvitationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-invitation',
            template: __webpack_require__(/*! raw-loader!./create-invitation.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-invitation/create-invitation.page.html"),
            styles: [__webpack_require__(/*! ./create-invitation.page.scss */ "./src/app/create-invitation/create-invitation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateInvitationPage);
    return CreateInvitationPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-invitation-create-invitation-module-es5.js.map