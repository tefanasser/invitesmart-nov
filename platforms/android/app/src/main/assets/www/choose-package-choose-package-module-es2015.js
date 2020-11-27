(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-package-choose-package-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/choose-package/choose-package.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/choose-package/choose-package.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <!-- <ion-toolbar style=\"padding-top:10px !important;padding-bottom: 10px !important;\">  -->\n      <button style=\"padding-top: 15px !important;\n      padding-bottom: 10px !important;\n      margin-bottom: 20px;\" (click)=\"goBack()\"  class=\"headertm btn thumb-nail-button\"\n          color=\"light\"> {{'page.back' | translate}}</button>\n  <!-- </ion-toolbar>  -->\n</ion-header>\n<ion-content class=\"content-part\">\n    <ion-toolbar class=\"sub-header\">\n        <ion-title>{{'page.please_choose_package' | translate}} </ion-title>\n      </ion-toolbar>\n        <!-- Item Dividers in a List -->\n        <ion-list *ngFor=\"let invitation of guest_packages\">\n          <ion-item  (click)=\"invitation.id == 1 ? create_and_update_invitatin(invitation.isFree): payment()\"><ion-label><b style=\"cursor: pointer;\">{{invitation.package_name | uppercase}}</b></ion-label>\n            <img src=\"assets/arrow.png\"  style=\"margin-top:0px;\">\n            <!-- <ion-icon  name=\"arrow-forward\" ></ion-icon> -->\n          </ion-item>\n          \n        </ion-list>\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n      <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n      <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n  \n  </footer>\n\n"

/***/ }),

/***/ "./src/app/choose-package/choose-package.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/choose-package/choose-package.module.ts ***!
  \*********************************************************/
/*! exports provided: ChoosePackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosePackagePageModule", function() { return ChoosePackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choose_package_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./choose-package.page */ "./src/app/choose-package/choose-package.page.ts");








const routes = [
    {
        path: '',
        component: _choose_package_page__WEBPACK_IMPORTED_MODULE_7__["ChoosePackagePage"]
    }
];
let ChoosePackagePageModule = class ChoosePackagePageModule {
};
ChoosePackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_choose_package_page__WEBPACK_IMPORTED_MODULE_7__["ChoosePackagePage"]]
    })
], ChoosePackagePageModule);



/***/ }),

/***/ "./src/app/choose-package/choose-package.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/choose-package/choose-package.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\n.sub-header {\n  --background: #989898;\n  color: white;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  width: 100% !important;\n  height: 100% !important;\n  text-align: center;\n  font-family: \"oswald\";\n  font-weight: normal;\n}\n\nion-content ion-toolbar ion-title {\n  left: 0;\n}\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: \"Oswald\" !important;\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important;\n}\n\n.ion-list {\n  display: contents !important;\n}\n\n.content-part img {\n  max-width: 100%;\n  border: 0;\n  height: 25px !important;\n  font-weight: bold;\n}\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2Nob29zZS1wYWNrYWdlL2Nob29zZS1wYWNrYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hvb3NlLXBhY2thZ2UvY2hvb3NlLXBhY2thZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQztFQUFvQixnQkFBQTtFQUNqQixrQkFBQTtBQ0NKOztBREVDO0VBQXNCLGdCQUFBO0VBQ25CLGtCQUFBO0FDRUo7O0FEQ0M7RUFDRyxrQkFBQTtBQ0VKOztBREFDO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDR0g7O0FEQUM7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VIOztBRENDO0VBQ0UsT0FBQTtBQ0VIOztBRENDO0VBQ0UsZ0NBQUE7QUNFSDs7QURBQztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNHRjs7QUREQTtFQUNFLDRCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS1wYWNrYWdlL2Nob29zZS1wYWNrYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuIFxuIDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiB9XG4gXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gfVxuIFxuIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiB9XG4gLnN1Yi1oZWFkZXIge1xuICAgLS1iYWNrZ3JvdW5kOiAjOTg5ODk4O1xuICAgY29sb3I6d2hpdGU7XG4gIC8vICBtYXJnaW4tdG9wOjEwcHg7XG4gfVxuIGlvbi10aXRsZSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDA7XG4gICBsZWZ0OiA0NTtcbi8vICAgIHBhZGRpbmc6IDAgOTBweCAxcHg7XG4gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBmb250LWZhbWlseTogJ29zd2FsZCc7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gfVxuIGlvbi1jb250ZW50IGlvbi10b29sYmFyIGlvbi10aXRsZXtcbiAgIGxlZnQ6IDA7XG5cbiB9XG4gLml0ZW0uc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJyAhaW1wb3J0YW50O1xuIH1cbiAubGlzdC1tZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50IDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW9uLWxpc3Qge1xuICBkaXNwbGF5OmNvbnRlbnRzICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1wYXJ0IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGh1bWItbmFpbC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gIGJvcmRlci1yYWRpdXM6IDI5cHg7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4iLCI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTg5ODk4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA0NTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGxlZnQ6IDA7XG59XG5cbi5pdGVtLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWxpc3Qge1xuICBkaXNwbGF5OiBjb250ZW50cyAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1wYXJ0IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aHVtYi1uYWlsLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgcGFkZGluZzogMTNweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/choose-package/choose-package.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/choose-package/choose-package.page.ts ***!
  \*******************************************************/
/*! exports provided: ChoosePackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosePackagePage", function() { return ChoosePackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_add_guests_add_guests_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/add-guests/add-guests.page */ "./src/app/modal/add-guests/add-guests.page.ts");
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ "./node_modules/@ionic-native/in-app-purchase/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










let ChoosePackagePage = class ChoosePackagePage {
    constructor(translate, toastController, iap, modalController, route, alertController, userService, router) {
        this.translate = translate;
        this.toastController = toastController;
        this.iap = iap;
        this.modalController = modalController;
        this.route = route;
        this.alertController = alertController;
        this.userService = userService;
        this.router = router;
        this.formData = {};
        this.images = [];
        this.lang = localStorage.getItem('language');
        if (this.lang) {
            this.translate.use(this.lang);
        }
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.package_list();
    }
    ionViewDidEnter() {
        this.event_name = this.route.snapshot.queryParams["event_name"];
        this.get_invitation();
        this.package_list();
    }
    package_list() {
        this.paidPlan = this.route.snapshot.queryParams["paidPlan"];
        let invitationId = localStorage.getItem('invitationId');
        if (!invitationId) {
            this.guest_packages = [
                { id: 1, package_name: this.lang == 'en' ? "10 guests / free" : '10 ضيوف (مجانا)', each_guest_price: 0, quantity: 10, isFree: this.paidPlan },
                { id: 2, package_name: this.lang == 'en' ? "Paid Packages" : 'الباقات المدفوعة', each_guest_price: 0, quantity: 10, isFree: true }
            ];
        }
        else {
            this.guest_packages = [
                { id: 2, package_name: this.lang == 'en' ? "Paid Packages" : 'الباقات المدفوعة', each_guest_price: 0, quantity: 10, isFree: true }
            ];
        }
    }
    successMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let eventName = this.lang == 'en' ? 'Invitation created successfully.' : 'تم إنشاء الدعوة بنجاح.';
            const toast = yield this.toastController.create({
                message: eventName,
                duration: 2000
            });
            toast.present();
        });
    }
    payment() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigate(['/buy-guest-plan'], { queryParams: { paidPlan: this.paidPlan } });
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
                    this.alertMessage(err.error.message);
                });
            }
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
    // **************************** Open Share Invitation Modal ********************************//
    AddNoOfGuest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_add_guests_add_guests_page__WEBPACK_IMPORTED_MODULE_5__["AddGuestsPage"]
            });
            return yield modal.present();
        });
    }
    create_and_update_invitatin(type) {
        let id = localStorage.getItem('invitationId');
        if (id) {
            this.update_invitation(type);
        }
        else {
            this.create_invitation(type);
        }
    }
    // ************************ Create Invitation***************************//
    create_invitation(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userId = localStorage.getItem('userId');
            let imageName = localStorage.getItem('image');
            let event = localStorage.getItem('event');
            this.event_name = localStorage.getItem('eventName');
            var eventLocation;
            if (event == "undefined") {
                eventLocation = '';
            }
            else {
                eventLocation = event;
            }
            var data = { invitation_image: imageName, event_name: this.event_name, userId: userId, no_of_guest: 10, price: '0', productId: '', transactionId: '', event_location: eventLocation };
            if (type) {
                yield this.userService.createInvitation(data)
                    .subscribe(res => {
                    let result = res['data'];
                    localStorage.removeItem('guests');
                    localStorage.removeItem('invitationId');
                    localStorage.removeItem('isGuestSelected');
                    localStorage.removeItem('event');
                    localStorage.removeItem('eventName');
                    this.successMessage();
                    localStorage.setItem('guests', result.no_of_guest);
                    localStorage.setItem('invitationId', result._id);
                    localStorage.setItem('isGuestSelected', result.isGuestSelected);
                    this.router.navigate(['/invitation-type']);
                    localStorage.removeItem('image');
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
    // ************************ Create Invitation***************************//
    update_invitation(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let id = localStorage.getItem('invitationId');
            let guest = parseInt(this.invitation.no_of_guest) + 10;
            var data = { no_of_guest: guest, id: id };
            if (!type) {
                yield this.userService.updateInvitation(data)
                    .subscribe(res => {
                    let result = res['data'];
                    localStorage.removeItem('guests');
                    localStorage.removeItem('isGuestSelected');
                    localStorage.removeItem('event');
                    localStorage.removeItem('eventName');
                    this.successMessage();
                    localStorage.setItem('guests', result.no_of_guest);
                    localStorage.setItem('invitationId', result._id);
                    localStorage.setItem('isGuestSelected', result.isGuestSelected);
                    this.router.navigate(['/invitation-type']);
                    localStorage.removeItem('image');
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
    edit_invitation(item) {
        this.router.navigate(['/update-invitation'], { queryParams: { id: item._id, event_name: item.event_name, invitation_image: item.invitation_image } });
        item = {};
    }
    getFromSelection(selection) {
    }
    goBack() {
        let id = localStorage.getItem('invitationId');
        if (id) {
            this.router.navigate(['/thumbnails']);
        }
        else {
            this.router.navigate(['/create-invitation']);
        }
    }
};
ChoosePackagePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppPurchase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChoosePackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-package',
        template: __webpack_require__(/*! raw-loader!./choose-package.page.html */ "./node_modules/raw-loader/index.js!./src/app/choose-package/choose-package.page.html"),
        styles: [__webpack_require__(/*! ./choose-package.page.scss */ "./src/app/choose-package/choose-package.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppPurchase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ChoosePackagePage);



/***/ })

}]);
//# sourceMappingURL=choose-package-choose-package-module-es2015.js.map