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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choose_package_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./choose-package.page */ "./src/app/choose-package/choose-package.page.ts");








var routes = [
    {
        path: '',
        component: _choose_package_page__WEBPACK_IMPORTED_MODULE_7__["ChoosePackagePage"]
    }
];
var ChoosePackagePageModule = /** @class */ (function () {
    function ChoosePackagePageModule() {
    }
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
    return ChoosePackagePageModule;
}());



/***/ }),

/***/ "./src/app/choose-package/choose-package.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/choose-package/choose-package.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center; }\n\n:-ms-input-placeholder {\n  text-align: center; }\n\n.sub-header {\n  --background: #989898;\n  color: white; }\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  width: 100% !important;\n  height: 100% !important;\n  text-align: center;\n  font-family: 'oswald';\n  font-weight: normal; }\n\nion-content ion-toolbar ion-title {\n  left: 0; }\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: 'Oswald' !important; }\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important; }\n\n.ion-list {\n  display: contents !important; }\n\n.content-part img {\n  max-width: 100%;\n  border: 0;\n  height: 25px !important;\n  font-weight: bold; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px;\n  margin-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2Nob29zZS1wYWNrYWdlL2Nob29zZS1wYWNrYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFrQixFQUFBOztBQUdyQjtFQUFvQixnQkFBQTtFQUNqQixrQkFBa0IsRUFBQTs7QUFHckI7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3JCO0VBQ0csa0JBQWtCLEVBQUE7O0FBRXJCO0VBQ0UscUJBQWE7RUFDYixZQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFFUixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsT0FBTyxFQUFBOztBQUdUO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0MsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsNEJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaG9vc2UtcGFja2FnZS9jaG9vc2UtcGFja2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gfVxuIFxuIDo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuIH1cbiBcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gfVxuIC5zdWItaGVhZGVyIHtcbiAgIC0tYmFja2dyb3VuZDogIzk4OTg5ODtcbiAgIGNvbG9yOndoaXRlO1xuICAvLyAgbWFyZ2luLXRvcDoxMHB4O1xuIH1cbiBpb24tdGl0bGUge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiAwO1xuICAgbGVmdDogNDU7XG4vLyAgICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC1mYW1pbHk6ICdvc3dhbGQnO1xuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuIH1cbiBpb24tY29udGVudCBpb24tdG9vbGJhciBpb24tdGl0bGV7XG4gICBsZWZ0OiAwO1xuXG4gfVxuIC5pdGVtLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gICBmb250LWZhbWlseTogJ09zd2FsZCcgIWltcG9ydGFudDtcbiB9XG4gLmxpc3QtbWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudCA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLmlvbi1saXN0IHtcbiAgZGlzcGxheTpjb250ZW50cyAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtcGFydCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_add_guests_add_guests_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/add-guests/add-guests.page */ "./src/app/modal/add-guests/add-guests.page.ts");
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ "./node_modules/@ionic-native/in-app-purchase/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var ChoosePackagePage = /** @class */ (function () {
    function ChoosePackagePage(translate, toastController, iap, modalController, route, alertController, userService, router) {
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
    ChoosePackagePage.prototype.ngAfterViewInit = function () {
    };
    ChoosePackagePage.prototype.ngOnInit = function () {
        this.package_list();
    };
    ChoosePackagePage.prototype.ionViewDidEnter = function () {
        this.event_name = this.route.snapshot.queryParams["event_name"];
        this.get_invitation();
        this.package_list();
    };
    ChoosePackagePage.prototype.package_list = function () {
        this.paidPlan = this.route.snapshot.queryParams["paidPlan"];
        var invitationId = localStorage.getItem('invitationId');
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
    };
    ChoosePackagePage.prototype.successMessage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var eventName, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventName = this.lang == 'en' ? 'Invitation created successfully.' : 'تم إنشاء الدعوة بنجاح.';
                        return [4 /*yield*/, this.toastController.create({
                                message: eventName,
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
    ChoosePackagePage.prototype.payment = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigate(['/buy-guest-plan'], { queryParams: { paidPlan: this.paidPlan } });
                return [2 /*return*/];
            });
        });
    };
    // ************************ Get Invitation ***************************//
    ChoosePackagePage.prototype.get_invitation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var invitationId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invitationId = localStorage.getItem('invitationId');
                        if (!invitationId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.getInvitation(invitationId)
                                .subscribe(function (res) {
                                _this.invitation = res['data'];
                                console.log(_this.invitation, 'testing');
                            }, function (err) {
                                _this.alertMessage(err.error.message);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ChoosePackagePage.prototype.alertMessage = function (message) {
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
    // **************************** Open Share Invitation Modal ********************************//
    ChoosePackagePage.prototype.AddNoOfGuest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_add_guests_add_guests_page__WEBPACK_IMPORTED_MODULE_5__["AddGuestsPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChoosePackagePage.prototype.create_and_update_invitatin = function (type) {
        var id = localStorage.getItem('invitationId');
        if (id) {
            this.update_invitation(type);
        }
        else {
            this.create_invitation(type);
        }
    };
    // ************************ Create Invitation***************************//
    ChoosePackagePage.prototype.create_invitation = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userId, imageName, event, eventLocation, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = localStorage.getItem('userId');
                        imageName = localStorage.getItem('image');
                        event = localStorage.getItem('event');
                        this.event_name = localStorage.getItem('eventName');
                        if (event == "undefined") {
                            eventLocation = '';
                        }
                        else {
                            eventLocation = event;
                        }
                        data = { invitation_image: imageName, event_name: this.event_name, userId: userId, no_of_guest: 10, price: '0', productId: '', transactionId: '', event_location: eventLocation };
                        if (!type) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.createInvitation(data)
                                .subscribe(function (res) {
                                var result = res['data'];
                                localStorage.removeItem('guests');
                                localStorage.removeItem('invitationId');
                                localStorage.removeItem('isGuestSelected');
                                localStorage.removeItem('event');
                                localStorage.removeItem('eventName');
                                _this.successMessage();
                                localStorage.setItem('guests', result.no_of_guest);
                                localStorage.setItem('invitationId', result._id);
                                localStorage.setItem('isGuestSelected', result.isGuestSelected);
                                _this.router.navigate(['/invitation-type']);
                                localStorage.removeItem('image');
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
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // ************************ Create Invitation***************************//
    ChoosePackagePage.prototype.update_invitation = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, guest, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = localStorage.getItem('invitationId');
                        guest = parseInt(this.invitation.no_of_guest) + 10;
                        data = { no_of_guest: guest, id: id };
                        if (!!type) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.updateInvitation(data)
                                .subscribe(function (res) {
                                var result = res['data'];
                                localStorage.removeItem('guests');
                                localStorage.removeItem('isGuestSelected');
                                localStorage.removeItem('event');
                                localStorage.removeItem('eventName');
                                _this.successMessage();
                                localStorage.setItem('guests', result.no_of_guest);
                                localStorage.setItem('invitationId', result._id);
                                localStorage.setItem('isGuestSelected', result.isGuestSelected);
                                _this.router.navigate(['/invitation-type']);
                                localStorage.removeItem('image');
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
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ChoosePackagePage.prototype.edit_invitation = function (item) {
        this.router.navigate(['/update-invitation'], { queryParams: { id: item._id, event_name: item.event_name, invitation_image: item.invitation_image } });
        item = {};
    };
    ChoosePackagePage.prototype.getFromSelection = function (selection) {
    };
    ChoosePackagePage.prototype.goBack = function () {
        var id = localStorage.getItem('invitationId');
        if (id) {
            this.router.navigate(['/thumbnails']);
        }
        else {
            this.router.navigate(['/create-invitation']);
        }
    };
    ChoosePackagePage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppPurchase"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ChoosePackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-package',
            template: __webpack_require__(/*! raw-loader!./choose-package.page.html */ "./node_modules/raw-loader/index.js!./src/app/choose-package/choose-package.page.html"),
            styles: [__webpack_require__(/*! ./choose-package.page.scss */ "./src/app/choose-package/choose-package.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppPurchase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChoosePackagePage);
    return ChoosePackagePage;
}());



/***/ })

}]);
//# sourceMappingURL=choose-package-choose-package-module-es5.js.map