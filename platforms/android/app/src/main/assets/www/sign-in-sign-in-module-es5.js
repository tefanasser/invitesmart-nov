(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"centered container\">\n        <ion-grid class=\"ion-padding-top grid-padding\">\n            <ion-row>\n              <ion-col class=\"font-bold mgbottom50 font20\">\n                  {{ 'page.enter_the_one_time_password' | translate }}\n                <!-- ENTER THE ONE-TIME<br>PASSWORD SEND TO<br>YOUR PHONE -->\n              </ion-col>\n            </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n             \n            <form [formGroup]=\"login_form\" class=\"form \" class=\"form-deco form app-form-area\">\n              <div class=\"row\" style=\"text-align: -webkit-center;\">\n                  <div class=\"input-group prefix\">\n                    <ion-input type=\"text\"  minLength=\"4\" maxLength=\"4\" [(ngModel)]=\"otp_code\" formControlName=\"otp_code\" placeholder=\"\"></ion-input>\n                  </div>\n                </div>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validation_messages.otp_code\">\n                      <div class=\"error-message\"\n                        *ngIf=\"login_form.get('otp_code').hasError(validation.type) && (login_form.get('otp_code').dirty || login_form.get('otp_code').touched)\">\n                        <ion-icon style=\"color: red;\" ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon><span\n                          style=\"color: red;\">{{validation.message}}</span>\n                      </div>\n                    </ng-container>\n                  </div>\n              <br>\n              <div *ngIf=\"isLoader\"><ion-spinner name=\"lines\"></ion-spinner></div>\n              <div class=\"row\">\n                <button type=\"submit\"  [disabled]=\"!login_form.valid\" (click)=\"login()\" class=\"btn send-button\" color=\"primary\">&nbsp;&nbsp; {{ 'page.sign in' | translate }} &nbsp;&nbsp;</button>\n              </div>\n            </form>\n            <div class=\"des-text\"> {{ 'page.support_text' | translate }}</div>\n            <div class=\"whatsup-link\" (click)=\"redirect()\">\n              <img src=\"assets/whatsup-icon.png\"\n              />\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n      <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n      <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]
    }
];
var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
        })
    ], SignInPageModule);
    return SignInPageModule;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-addon {\n  padding: 6px 15px 6px 12px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  color: #000;\n  text-align: center;\n  background-color: #989898;\n  border: 9px solid #989898;\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n  display: table-cell;\n}\n\nion-input {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #989898;\n  margin: 0;\n}\n\n.suffix input {\n  border-radius: 4px 0px 0px 4px;\n}\n\n.suffix .input-group-addon {\n  border-left: 0;\n  border-radius: 0px 4px 4px 0px;\n}\n\n.input-group-addon.suffix {\n  border-radius: 0px 4px 4px 0px;\n  border-left: 0;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.bottom-fix {\n  bottom: 17%;\n  left: 30%;\n}\n\n.des-text {\n  margin: 20px 0px 20px 0px;\n  font-size: x-small;\n}\n\n.whatsup-link {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTtFQUNJLDhCQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURDQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUVJLFdBQUE7RUFDQSxTQUFBO0FDR0o7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNDLG1CQUFBO0FDSUwiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICAvLyBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBwYWRkaW5nOiA2cHggMTVweCA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4OTg5ODtcbiAgICBib3JkZXI6IDlweCBzb2xpZCAjOTg5ODk4O1xuICAgIHdpZHRoOiAxJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICM5ODk4OTg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc3VmZml4IGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG59XG4uc3VmZml4IC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xufVxuLmlucHV0LWdyb3VwLWFkZG9uLnN1ZmZpeCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAwO1xufVxuLmlucHV0LWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbi5ib3R0b20tZml4e1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDE3JTtcbiAgICBsZWZ0OjMwJVxuICAgIFxufVxuLmRlcy10ZXh0IHtcbiAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xufVxuLndoYXRzdXAtbGluayB7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSIsIi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDZweCAxNXB4IDZweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4O1xuICBib3JkZXI6IDlweCBzb2xpZCAjOTg5ODk4O1xuICB3aWR0aDogMSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICM5ODk4OTg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN1ZmZpeCBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbn1cblxuLnN1ZmZpeCAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBib3JkZXItbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xufVxuXG4uaW5wdXQtZ3JvdXAtYWRkb24uc3VmZml4IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cblxuLmJvdHRvbS1maXgge1xuICBib3R0b206IDE3JTtcbiAgbGVmdDogMzAlO1xufVxuXG4uZGVzLXRleHQge1xuICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi53aGF0c3VwLWxpbmsge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");








var SignInPage = /** @class */ (function () {
    function SignInPage(iab, translate, alertController, userService, formBuilder, router) {
        this.iab = iab;
        this.translate = translate;
        this.alertController = alertController;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formData = {};
        // ******************************** Form Validation Messages ************************//
        this.validation_messages = {
            'otp_code': [
                { type: 'required', message: this.lang == 'en' ? '4-digit otp code is required.' : '4-رمز otp مطلوب.' }
            ]
        };
    }
    SignInPage.prototype.ngAfterViewInit = function () {
        this.lang = localStorage.getItem('language');
        if (this.lang) {
            this.translate.use(this.lang);
            console.log(this.translate, '###############');
        }
    };
    SignInPage.prototype.ngOnInit = function () {
        this.login_form = this.formBuilder.group({
            otp_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
        });
    };
    SignInPage.prototype.alertMessage = function (err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: err,
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
    // ************************ Sign In ***************************//
    SignInPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoader = true;
                        return [4 /*yield*/, this.userService.login({ otp: this.otp_code })
                                .subscribe(function (res) {
                                _this.result = res;
                                _this.isLoader = false;
                                console.log(_this.result, 'testing');
                                localStorage.setItem('userId', _this.result.data.id);
                                localStorage.setItem('sessionToken', _this.result.data.accessToken);
                                _this.router.navigate(['/invitation']);
                            }, function (err) {
                                _this.isLoader = false;
                                _this.alertMessage(err.error.message);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInPage.prototype.redirect = function () {
        this.iab.create('https://api.whatsapp.com/send?phone=966505278757&text=%D9%84%D9%85%20%D9%8A%D8%B5%D9%84%D9%86%D9%8A%20%D9%83%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20/%20I%20did%20not%20receive%20the%20code%20', "_system");
    };
    SignInPage.ctorParameters = function () { return [
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.page.html"),
            styles: [__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInPage);
    return SignInPage;
}());



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map