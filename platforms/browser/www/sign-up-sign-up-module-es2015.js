(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"centered container\">\n  <ion-grid class=\"ion-padding-top grid-padding\">\n    <ion-row>\n      <ion-col class=\"font-bold mgbottom50 font20\">\n        {{'page.sign_in_using_your_phone_number' | translate }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <form  class=\"form \" class=\"form app-form-area\">\n            <ion-list style=\"margin-bottom:40px !important\">\n                <ion-radio-group value=\"email\">\n                  <ion-item>\n                    <ion-label>Sign Up With Email</ion-label>\n                    <ion-radio slot=\"start\" value=\"email\" (click)=\"register_type(1)\"></ion-radio>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>Sign Up With Phone</ion-label>\n                    <ion-radio slot=\"start\" value=\"phone\" (click)=\"register_type(2)\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            <div class=\"row\" style=\"text-align: -webkit-center;\" *ngIf=\"regType == 'phone'\">\n                <div class=\"input-group prefix\">\n                  <ion-input type=\"text\"  [(ngModel)]=\"phone_no\" [ngModelOptions]=\"{standalone: true}\"  placeholder=\"Phone\"></ion-input>\n                </div>\n              \n              </div>\n          <div class=\"row\" style=\"text-align: -webkit-center;\" *ngIf=\"regType == 'email'\">\n              <div class=\"input-group prefix\">\n                <ion-input type=\"email\"  [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\"></ion-input>\n              </div>\n            \n            </div>\n        \n          <br>\n          <span style=\"padding-top:10px;font-family: 'oswald';padding-left:5px; text-align: center;\" *ngIf=\"regType == 'phone'\">{{'page.please_input_your_number' | translate}}</span>\n          <br>\n          <div *ngIf=\"isLoader\"><ion-spinner name=\"lines\"></ion-spinner></div>\n          <div class=\"row\" >\n            <button type=\"submit\" (click)=\"register()\" class=\"btn send-button\"\n              color=\"primary\"> {{ 'page.send_sms' | translate }}</button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<footer class=\"footer\">\n  <div style=\"float:left;\">\n    <img src=\"assets/72x72.png\">\n  </div>\n  <div style=\"float:left;\">\n    <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n  </div>\n  <div style=\"float:right;margin-top: 15px;\">\n      <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n  </div>\n\n</footer>\n  \n "

/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");








const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_7__["SignUpPage"]
    }
];
let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_7__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-addon {\n  padding: 6px 15px 6px 12px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  color: #000;\n  text-align: center;\n  background-color: #989898;\n  border: 9px solid #989898;\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n  display: table-cell;\n  font-weight: bold;\n  margin: auto;\n  display: block;\n}\n\nion-input {\n  width: 260px !important;\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #989898;\n  margin: 0;\n  margin: auto;\n  display: block;\n}\n\ninput {\n  margin: auto;\n  display: block;\n}\n\n.suffix input {\n  border-radius: 4px 0px 0px 4px;\n}\n\n.suffix .input-group-addon {\n  border-left: 0;\n  border-radius: 0px 4px 4px 0px;\n}\n\n.input-group-addon.suffix {\n  border-radius: 0px 4px 4px 0px;\n  border-left: 0;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.bottom-fix {\n  bottom: 17%;\n}\n\n.footer img {\n  cursor: pointer;\n}\n\nion-label {\n  border: 0px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7QUNFSjs7QURBQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLHVCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICAvLyBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBwYWRkaW5nOiA2cHggMTVweCA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4OTg5ODtcbiAgICBib3JkZXI6IDlweCBzb2xpZCAjOTg5ODk4O1xuICAgIHdpZHRoOiAxJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgd2lkdGg6MjYwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICM5ODk4OTg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmlucHV0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuLnN1ZmZpeCBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xufVxuLnN1ZmZpeCAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbi5zdWZmaXgge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbiAgICBib3JkZXItbGVmdDogMDtcbn1cbi5pbnB1dC1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG4uYm90dG9tLWZpeHtcbiAgICBib3R0b206IDE3JTtcbiAgICAvLyBsZWZ0OjMwJVxuICAgIFxufVxuLmZvb3RlciBpbWd7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWxhYmVsIHtcbiAgICBib3JkZXI6MHB4IHNvbGlkIHdoaXRlO1xufSIsIi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDZweCAxNXB4IDZweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4O1xuICBib3JkZXI6IDlweCBzb2xpZCAjOTg5ODk4O1xuICB3aWR0aDogMSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogMjYwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzk4OTg5ODtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zdWZmaXggaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG59XG5cbi5zdWZmaXggLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLnN1ZmZpeCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG5cbi5ib3R0b20tZml4IHtcbiAgYm90dG9tOiAxNyU7XG59XG5cbi5mb290ZXIgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tbGFiZWwge1xuICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let SignUpPage = class SignUpPage {
    constructor(toastController, translate, alertController, userService, formBuilder, router) {
        this.toastController = toastController;
        this.translate = translate;
        this.alertController = alertController;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formData = {};
        this.images = [];
        // ******************************** Form Validation Messages ************************//
        this.validation_messages = {
            'phone_no': [
                { type: 'required', message: this.errorMessage }
            ],
        };
        translate.setDefaultLang('ar');
        this.lang = 'ar';
        localStorage.setItem('language', this.lang);
        this.errorMessage = this.lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
        this.checkMessage(this.errorMessage);
        this.regType = "email";
    }
    ngAfterViewInit() {
        this.regType = "email";
    }
    checkMessage(message) {
        this.validation_messages = {
            'phone_no': [
                { type: 'required', message: message }
            ]
        };
    }
    ngOnInit() {
        this.regType = "email";
        this.register_form = this.formBuilder.group({
            phone_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)])]
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
    changeLanguage(lang) {
        this.lang = lang;
        this.errorMessage = lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
        this.checkMessage(this.errorMessage);
        localStorage.removeItem('language');
        if (lang) {
            localStorage.setItem('language', this.lang);
            this.translate.use(this.lang);
        }
    }
    register_type(value) {
        if (value == 1) {
            this.regType = "email";
        }
        if (value == 2) {
            this.regType = "phone";
        }
    }
    check_phone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '',
                subHeader: '',
                message: 'Have you added area code your phone number',
                buttons: ['No', 'Yes']
            });
            yield alert.present();
        });
    }
    // ************************ Sign Up***************************//
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.regType, this.email, this.phone_no);
            if (this.regType == 'email') {
                if (this.email) {
                    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (reg.test(this.email) == false) {
                        alert('Invalid Email Address');
                        return false;
                    }
                    else {
                        var obj = { emailOrPhone: this.email, regType: this.regType };
                        this.reg_data(obj);
                    }
                }
                else {
                    alert('Email is required.');
                }
            }
            else if (this.regType == 'phone') {
                if (this.phone_no) {
                    var result = confirm("If you have entered  correct country code and phone number click Ok");
                    if (result) {
                        var obj = { emailOrPhone: this.phone_no, regType: this.regType };
                        this.reg_data(obj);
                    }
                }
                else {
                    alert('Phone number is required.');
                }
            }
            else {
                alert('select sign up type');
                return false;
            }
        });
    }
    successMessage(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: type,
                duration: 2000
            });
            toast.present();
        });
    }
    reg_data(obj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoader = true;
            yield this.userService.register(obj)
                .subscribe(res => {
                this.isLoader = false;
                if (this.regType == 'email') {
                    this.successMessage('Please check your email.One time password is sent.');
                }
                else {
                    this.successMessage('One time password is sent to your phone.');
                }
                this.router.navigate(['/sign-in']);
            }, err => {
                this.isLoader = false;
                console.log(err.error.error);
                this.alertMessage(JSON.stringify(err));
                this.isValue = err;
            });
        });
    }
    sign_up() {
        this.router.navigate(['/sign-in']);
    }
};
SignUpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.page.html"),
        styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map