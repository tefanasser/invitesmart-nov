(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <ion-toolbar style=\"padding-top:10px !important;padding-bottom: 10px !important;\"> \n      <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n      <button routerLink=\"/invitation-type\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n          color=\"light\"> {{'page.back' | translate}}</button>\n  </ion-toolbar> \n</ion-header>\n<ion-content class=\"centered container\">\n    <ion-grid class=\"ion-padding-top grid-padding\">\n        <ion-row>\n          <!-- <ion-col class=\"font-bold mgbottom50 font20\">\n            ENTER THE ONE-TIME<br>PASSWORD SEND TO<br>YOUR PHONE\n          </ion-col> -->\n        </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <form [formGroup]=\"number_form\" class=\"form \" class=\"form-deco form app-form-area\">\n            <div class=\"row\" style=\"text-align: -webkit-center;\">\n                <div class=\"input-group prefix\">\n                  <ion-input type=\"number\" [(ngModel)]=\"no_of_guest\" formControlName=\"no_of_guest\"  placeholder=\"\"></ion-input>\n                </div>\n              </div> \n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.no_of_guest\" >\n                <div class=\"error-message\"\n                  *ngIf=\"number_form.get('no_of_guest').hasError(validation.type) && (number_form.get('no_of_guest').dirty || number_form.get('no_of_guest').touched)\">\n                  <ion-icon style=\"color: red;\" ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon><span style=\"color: red;\">{{validation.message}}</span>\n                </div>\n              </ng-container>\n            </div>\n            <br>\n          <br>\n          <div class=\"row\">\n              <button type=\"submit\" [disabled]=\"!number_form.valid\" (click)=\"update_invitation()\" class=\"btn send-button\"\n                color=\"primary\">{{'page.numbers_only' | translate}}</button>\n            </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n      <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n      <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n  \n  </footer>\n\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                    component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-addon {\n  padding: 6px 15px 6px 12px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  color: #000;\n  text-align: center;\n  background-color: #989898;\n  border: 9px solid #989898;\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n  display: table-cell; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px;\n  margin-top: 8px; }\n\nion-input {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #989898;\n  margin: 0; }\n\nimg {\n  border-radius: 15px; }\n\n.suffix input {\n  border-radius: 4px 0px 0px 4px; }\n\n.suffix .input-group-addon {\n  border-left: 0;\n  border-radius: 0px 4px 4px 0px; }\n\n.input-group-addon.suffix {\n  border-radius: 0px 4px 4px 0px;\n  border-left: 0; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n\n.bottom-fix {\n  bottom: 17%;\n  left: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRywwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQUV0QjtFQUNHLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVsQjtFQUNHLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsU0FBUyxFQUFBOztBQUVaO0VBRUcsbUJBQW1CLEVBQUE7O0FBRXRCO0VBQ0csOEJBQThCLEVBQUE7O0FBRWpDO0VBQ0csY0FBYztFQUNkLDhCQUE4QixFQUFBOztBQUVqQztFQUNHLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBRWpCO0VBQ0csa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFFNUI7RUFFRyxXQUFXO0VBQ1gsU0FFSCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAvLyBwYWRkaW5nOiA2cHggMTJweDtcbiAgIHBhZGRpbmc6IDZweCAxNXB4IDZweCAxMnB4O1xuICAgZm9udC1zaXplOiAxNHB4O1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgY29sb3I6ICMwMDA7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4O1xuICAgYm9yZGVyOiA5cHggc29saWQgIzk4OTg5ODtcbiAgIHdpZHRoOiAxJTtcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbi50aHVtYi1uYWlsLWJ1dHRvbiB7XG4gICBjb2xvcjogd2hpdGU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgIHBhZGRpbmc6IDEzcHg7XG4gICBmb250LXNpemU6IDEzcHg7XG4gICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgIGZsb2F0OiBsZWZ0O1xuICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgIG1hcmdpbi10b3A6IDhweDtcbiB9XG5pb24taW5wdXQge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgei1pbmRleDogMjtcbiAgIGZsb2F0OiBsZWZ0O1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXJnaW4tYm90dG9tOiAwO1xuICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgIHBhZGRpbmc6IDEycHggMTJweDtcbiAgIGJvcmRlcjogNHB4IHNvbGlkICM5ODk4OTg7XG4gICBtYXJnaW46IDA7XG59XG5pbWd7XG4gICAvLyB3aWR0aDo1MCU7XG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnN1ZmZpeCBpbnB1dCB7XG4gICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG59XG4uc3VmZml4IC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICBib3JkZXItbGVmdDogMDtcbiAgIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbi5zdWZmaXgge1xuICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uaW5wdXQtZ3JvdXAge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgZGlzcGxheTogdGFibGU7XG4gICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuLmJvdHRvbS1maXh7XG4gICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICBib3R0b206IDE3JTtcbiAgIGxlZnQ6MzAlXG4gICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let HomePage = class HomePage {
    constructor(translate, actionSheetController, alertController, userService, formBuilder, router) {
        this.translate = translate;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formData = {};
        this.images = [];
        this.guestList = [];
        // ******************************** Form Validation Messages ************************//
        this.validation_messages = {
            'no_of_guest': [
                { type: 'required', message: 'Number is required.' },
                { type: 'pattern', message: 'Number 1 to 100 is allowed.' }
            ]
        };
        let lang = localStorage.getItem('language');
        if (lang) {
            this.translate.use(lang);
        }
    }
    ngOnInit() {
        this.no_of_guest = localStorage.getItem('guests');
        this.invitationId = localStorage.getItem('invitationId');
        if (this.invitationId) {
            this.guest_list();
        }
        const regexPattern = /^\d{1,3}$/;
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(regexPattern);
        this.number_form = this.formBuilder.group({
            no_of_guest: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9][0-9]?$|^100$/)
            ]))
        });
    }
    addNames() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let code = 0;
            var value;
            this.guestList = [];
            let userId = localStorage.getItem('userId');
            let guest = localStorage.getItem('guests');
            if (this.no_of_guest > guest) {
                let message = "Only maximum " + guest + " guests are allowed.";
                this.alertMessage(message);
            }
            else {
                for (var i = 0; i < this.no_of_guest; i++) {
                    if (this.no_of_guest) {
                        code++;
                        if (code <= 9) {
                            value = '00' + code;
                        }
                        else if (code > 9 && code < 100) {
                            value = '0' + code;
                        }
                        else {
                            value = code;
                        }
                        let data = { invitationCode: value, userId: userId, invitationId: this.invitationId };
                        this.guestList.push(data);
                    }
                }
                yield this.userService.addGuestName({ data: this.guestList })
                    .subscribe(res => {
                    localStorage.removeItem('guests');
                    this.router.navigate(['/thumbnails'], { queryParams: { no_of_guest: this.no_of_guest } });
                }, err => {
                    this.alertMessage(err.error.message);
                });
            }
        });
    }
    // ************************ Update Invitation ***************************//
    update_invitation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let id = localStorage.getItem('invitationId');
            let data = { id: id, isGuestSelected: true };
            yield this.userService.updateInvitation(data)
                .subscribe(res => {
                this.addNames();
            }, err => {
                this.alertMessage(err.error.message);
            });
        });
    }
    // ************************ Guest List ***************************//
    guest_list() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userId = localStorage.getItem('userId');
            localStorage.removeItem('names');
            yield this.userService.guest_list(userId, this.invitationId)
                .subscribe(res => {
                this.names = res['data'];
                localStorage.setItem('names', JSON.stringify(this.names));
            }, err => {
                this.formData = {};
                this.alertMessage(err.error.message);
            });
        });
    }
    alertMessage(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    // ************************ Redirct To Thumbnail Images Page ***************************//
    getImages() {
        this.router.navigate(['/thumbnails'], { queryParams: { no_of_guest: this.no_of_guest } });
    }
};
HomePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map