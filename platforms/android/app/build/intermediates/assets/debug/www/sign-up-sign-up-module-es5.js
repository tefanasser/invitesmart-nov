(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"centered container\">\n  <ion-grid class=\"ion-padding-top grid-padding\">\n    <ion-row>\n      <ion-col class=\"font-bold mgbottom50 font20\">\n        {{'page.sign_in_using_your_phone_number' | translate }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <form  class=\"form \" class=\"form app-form-area\">\n            <ion-list style=\"margin-bottom:40px !important\">\n                <ion-radio-group value=\"email\">\n                  <ion-item>\n                    <ion-label>{{'page.sign_up_with_email' | translate }}</ion-label>\n                    <ion-radio slot=\"start\" value=\"email\" (click)=\"register_type(1)\"></ion-radio>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>{{'page.sign_up_with_phone' | translate }}</ion-label>\n                    <ion-radio slot=\"start\" value=\"phone\" (click)=\"register_type(2)\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            <div class=\"row\" style=\"text-align: -webkit-center;\" *ngIf=\"regType == 'phone'\">\n                <div class=\"input-group prefix\">\n                  <ion-input type=\"text\"  [(ngModel)]=\"phone_no\" [ngModelOptions]=\"{standalone: true}\"  placeholder=\"Phone\"></ion-input>\n                </div>\n              \n              </div>\n          <div class=\"row\" style=\"text-align: -webkit-center;\" *ngIf=\"regType == 'email'\">\n              <div class=\"input-group prefix\">\n                <ion-input type=\"email\"  [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\"></ion-input>\n              </div>\n            \n            </div>\n        \n          <br>\n          <span style=\"padding-top:10px;font-family: 'oswald';padding-left:5px; text-align: center;\" *ngIf=\"regType == 'phone'\">{{'page.please_input_your_number' | translate}}</span>\n          <br>\n          <div *ngIf=\"isLoader\"><ion-spinner name=\"lines\"></ion-spinner></div>\n          <div class=\"row\" >\n            <button type=\"submit\" (click)=\"register()\" class=\"btn send-button\"\n              color=\"primary\"> {{ 'page.send_sms' | translate }}</button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<footer class=\"footer\">\n  <div style=\"float:left;\">\n    <img src=\"assets/72x72.png\">\n  </div>\n  <div style=\"float:left;\">\n    <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n  </div>\n  <div style=\"float:right;margin-top: 15px;\">\n      <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n  </div>\n\n</footer>\n  \n "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");








var routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_7__["SignUpPage"]
    }
];
var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
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
    return SignUpPageModule;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-addon {\n  padding: 6px 15px 6px 12px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  color: #000;\n  text-align: center;\n  background-color: #989898;\n  border: 9px solid #989898;\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n  display: table-cell;\n  font-weight: bold;\n  margin: auto;\n  display: block; }\n\nion-input {\n  width: 260px !important;\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #989898;\n  margin: 0;\n  margin: auto;\n  display: block; }\n\ninput {\n  margin: auto;\n  display: block; }\n\n.suffix input {\n  border-radius: 4px 0px 0px 4px; }\n\n.suffix .input-group-addon {\n  border-left: 0;\n  border-radius: 0px 4px 4px 0px; }\n\n.input-group-addon.suffix {\n  border-radius: 0px 4px 4px 0px;\n  border-left: 0; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n\n.bottom-fix {\n  bottom: 17%; }\n\n.footer img {\n  cursor: pointer; }\n\nion-label {\n  border: 0px solid white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlbm92bzAzL0Rlc2t0b3AvcHJvamVjdC9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSx1QkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdsQjtFQUNJLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLGNBQWM7RUFDZCw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSw4QkFBOEI7RUFDOUIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksV0FBVyxFQUFBOztBQUlmO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLHVCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgLy8gcGFkZGluZzogNnB4IDEycHg7XG4gICAgcGFkZGluZzogNnB4IDE1cHggNnB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ODk4OTg7XG4gICAgYm9yZGVyOiA5cHggc29saWQgIzk4OTg5ODtcbiAgICB3aWR0aDogMSU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24taW5wdXQge1xuICAgIHdpZHRoOjI2MHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDEycHggMTJweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjOTg5ODk4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pbnB1dCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbi5zdWZmaXggaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbn1cbi5zdWZmaXggLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XG59XG4uaW5wdXQtZ3JvdXAtYWRkb24uc3VmZml4IHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuLmJvdHRvbS1maXh7XG4gICAgYm90dG9tOiAxNyU7XG4gICAgLy8gbGVmdDozMCVcbiAgICBcbn1cbi5mb290ZXIgaW1ne1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1sYWJlbCB7XG4gICAgYm9yZGVyOjBweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var SignUpPage = /** @class */ (function () {
    function SignUpPage(toastController, translate, alertController, userService, formBuilder, router) {
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
    SignUpPage.prototype.ngAfterViewInit = function () {
        this.regType = "email";
    };
    SignUpPage.prototype.checkMessage = function (message) {
        this.validation_messages = {
            'phone_no': [
                { type: 'required', message: message }
            ]
        };
    };
    SignUpPage.prototype.ngOnInit = function () {
        this.regType = "email";
        this.register_form = this.formBuilder.group({
            phone_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)])]
        });
    };
    SignUpPage.prototype.alertMessage = function (err) {
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
    SignUpPage.prototype.changeLanguage = function (lang) {
        this.lang = lang;
        this.errorMessage = lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
        this.checkMessage(this.errorMessage);
        localStorage.removeItem('language');
        if (lang) {
            localStorage.setItem('language', this.lang);
            this.translate.use(this.lang);
        }
    };
    SignUpPage.prototype.register_type = function (value) {
        if (value == 1) {
            this.regType = "email";
        }
        if (value == 2) {
            this.regType = "phone";
        }
    };
    SignUpPage.prototype.check_phone = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            subHeader: '',
                            message: 'Have you added area code your phone number',
                            buttons: ['No', 'Yes']
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
    // ************************ Sign Up***************************//
    SignUpPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reg, obj, result, obj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(this.regType, this.email, this.phone_no);
                if (this.regType == 'email') {
                    if (this.email) {
                        reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                        if (reg.test(this.email) == false) {
                            alert('Invalid Email Address');
                            return [2 /*return*/, false];
                        }
                        else {
                            obj = { emailOrPhone: this.email, regType: this.regType };
                            this.reg_data(obj);
                        }
                    }
                    else {
                        alert('Email is required.');
                    }
                }
                else if (this.regType == 'phone') {
                    if (this.phone_no) {
                        result = confirm("If you have entered  correct country code and phone number click Ok");
                        if (result) {
                            obj = { emailOrPhone: this.phone_no, regType: this.regType };
                            this.reg_data(obj);
                        }
                    }
                    else {
                        alert('Phone number is required.');
                    }
                }
                else {
                    alert('select sign up type');
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    SignUpPage.prototype.successMessage = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: type,
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
    SignUpPage.prototype.reg_data = function (obj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoader = true;
                        return [4 /*yield*/, this.userService.register(obj)
                                .subscribe(function (res) {
                                _this.isLoader = false;
                                if (_this.regType == 'email') {
                                    _this.successMessage('Please check your email.One time password is sent.');
                                }
                                else {
                                    _this.successMessage('One time password is sent to your phone.');
                                }
                                _this.router.navigate(['/sign-in']);
                            }, function (err) {
                                _this.isLoader = false;
                                console.log(err.error.error);
                                _this.alertMessage(JSON.stringify("Something went wrong.Try again"));
                                _this.isValue = err;
                                console.log(_this.isValue, 'testing');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpPage.prototype.sign_up = function () {
        this.router.navigate(['/sign-in']);
    };
    SignUpPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.page.html"),
            styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpPage);
    return SignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map