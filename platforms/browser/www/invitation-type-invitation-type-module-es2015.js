(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invitation-type-invitation-type-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/invitation-type/invitation-type.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invitation-type/invitation-type.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <ion-toolbar style=\"padding-top:20px !important;padding-bottom: 15px !important;\"> \n      <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n      <button routerLink=\"/invitation\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n          color=\"light\"> {{'page.back' | translate}}</button>\n  </ion-toolbar> \n</ion-header>\n<ion-content>\n      <ion-toolbar class=\"sub-header\">\n        \n        <h3 class=\"ion-text-center\">{{'page.choose_invitation_type' | translate}}</h3>\n      </ion-toolbar>\n        <!-- Item Dividers in a List -->\n        <ion-row>\n          <ion-col size=12 style=\" text-align:center;\">\n            <button type=\"button\" (click)=\"update_invitation()\" text-center class=\"btn choose-button\" color=\"primary\">&nbsp;&nbsp;&nbsp;{{'page.numbers_only' | translate}}&nbsp;&nbsp;&nbsp;</button>\n          </ion-col>\n        </ion-row>\n          <ion-row>\n          <ion-col size=12 style=\" text-align:center;\">\n            <button type=\"button\" [routerLink]=\"['/add-names']\"  routerDirection=\"forward\" class=\"btn choose-button\"  color=\"primary\">{{'page.numbers_and_names' | translate}}</button>\n          </ion-col>\n        </ion-row>\n</ion-content>\n\n\n<footer class=\"footer\">\n  <div style=\"float:left;\">\n    <img src=\"assets/72x72.png\">\n  </div>\n  <div style=\"float:left;\">\n    <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n  </div>\n  <div style=\"float:right;margin-top: 15px;\">\n      <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n  </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/invitation-type/invitation-type.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/invitation-type/invitation-type.module.ts ***!
  \***********************************************************/
/*! exports provided: InvitationTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationTypePageModule", function() { return InvitationTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _invitation_type_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invitation-type.page */ "./src/app/invitation-type/invitation-type.page.ts");








const routes = [
    {
        path: '',
        component: _invitation_type_page__WEBPACK_IMPORTED_MODULE_7__["InvitationTypePage"]
    }
];
let InvitationTypePageModule = class InvitationTypePageModule {
};
InvitationTypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_invitation_type_page__WEBPACK_IMPORTED_MODULE_7__["InvitationTypePage"]]
    })
], InvitationTypePageModule);



/***/ }),

/***/ "./src/app/invitation-type/invitation-type.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/invitation-type/invitation-type.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choose-button {\n  color: white;\n  background-color: #3E51B5;\n  margin-top: 40px;\n  border-radius: 29px;\n  padding: 23px;\n  font-size: 20px;\n  font-family: \"oswald\";\n}\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px;\n  margin-top: 8px;\n}\n\n.sub-header {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2ludml0YXRpb24tdHlwZS9pbnZpdGF0aW9uLXR5cGUucGFnZS5zY3NzIiwic3JjL2FwcC9pbnZpdGF0aW9uLXR5cGUvaW52aXRhdGlvbi10eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDSSxnQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvaW52aXRhdGlvbi10eXBlL2ludml0YXRpb24tdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvb3NlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICAgIHBhZGRpbmc6IDIzcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xufVxuLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIC5zdWItaGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgfSIsIi5jaG9vc2UtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBwYWRkaW5nOiAyM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xufVxuXG4udGh1bWItbmFpbC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gIGJvcmRlci1yYWRpdXM6IDI5cHg7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/invitation-type/invitation-type.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/invitation-type/invitation-type.page.ts ***!
  \*********************************************************/
/*! exports provided: InvitationTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationTypePage", function() { return InvitationTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let InvitationTypePage = class InvitationTypePage {
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
            this.get_invitation();
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
    alertMessage(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
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
                if (err.error.message == 'token expired') {
                    this.router.navigate(['/sign-up']);
                    this.alertMessage(err.error.message);
                }
                else {
                    this.alertMessage(err.error.message);
                    this.router.navigate(['/invitation']);
                }
            });
        });
    }
    // ************************ Get Invitation ***************************//
    get_invitation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let invitationId = localStorage.getItem('invitationId');
            if (invitationId) {
                yield this.userService.getInvitation(invitationId)
                    .subscribe(res => {
                    this.invitation = res['data'];
                    console.log(this.invitation, 'testing');
                }, err => {
                    if (err.error.message == 'token expired') {
                        this.router.navigate(['/sign-up']);
                        this.alertMessage(err.error.message);
                    }
                    else {
                        this.alertMessage(err.error.message);
                        this.router.navigate(['/invitation']);
                    }
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
                console.log(res, '########1234###############');
                let noOfGuest = res['data'].no_of_guest;
                this.addNames(noOfGuest);
            }, err => {
                if (err.error.message == 'token expired') {
                    this.router.navigate(['/sign-up']);
                    this.alertMessage(err.error.message);
                }
                else {
                    this.alertMessage(err.error.message);
                    this.router.navigate(['/invitation']);
                }
            });
        });
    }
    goTo() {
        this.router.navigate(['/home']);
    }
    addNames(guestNo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var value;
            this.guestList = [];
            let userId = localStorage.getItem('userId');
            this.no_of_guest = parseInt(guestNo) - this.names.length;
            let numValue = this.names.filter(obj => {
                return obj.invitationCode !== '';
            });
            let code = numValue.length;
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
                if (err.error.message == 'token expired') {
                    this.router.navigate(['/sign-up']);
                    this.alertMessage(err.error.message);
                }
                else {
                    this.alertMessage(err.error.message);
                    this.router.navigate(['/invitation']);
                }
            });
            // }
        });
    }
};
InvitationTypePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
InvitationTypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invitation-type',
        template: __webpack_require__(/*! raw-loader!./invitation-type.page.html */ "./node_modules/raw-loader/index.js!./src/app/invitation-type/invitation-type.page.html"),
        styles: [__webpack_require__(/*! ./invitation-type.page.scss */ "./src/app/invitation-type/invitation-type.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], InvitationTypePage);



/***/ })

}]);
//# sourceMappingURL=invitation-type-invitation-type-module-es2015.js.map