(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-guest-plan-buy-guest-plan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/buy-guest-plan/buy-guest-plan.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/buy-guest-plan/buy-guest-plan.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <ion-toolbar style=\"padding-top: 20px !important;\n  padding-bottom: 10px !important;\n  margin-bottom: 20px;\"> \n      <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n      <button (click)=\"goBack()\" class=\"btn thumb-nail-button\"    color=\"light\"> {{'page.back' | translate}}</button>\n  </ion-toolbar> \n</ion-header>\n<ion-content padding class=\"buy-guest\">\n    <ion-row style=\"text-align: center;margin-top:10px;\">\n        <ion-col><b>{{'page.choose_package' | translate}} </b></ion-col>\n      </ion-row>\n  <div *ngIf=\"isLoader\" style=\"margin-left:49%;\"><ion-spinner name=\"lines\"></ion-spinner></div>    \n  <div *ngIf=\"products.length > 0\">\n    <ion-card *ngFor=\"let product of products\">\n      <ion-card-header class=\"title\" style=\"text-align: center;\">{{ product.title | uppercase}}</ion-card-header>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button text-center class=\"btn button\" ion-button block (click)=\"buyProduct(product.productId)\">\n              {{'page.buy_now' | translate}} - {{ product.price }} \n          </button>\n        </ion-col>\n        <ion-col>\n          \n          </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>    \n  <div *ngIf=\"products.length == 0\" style=\"margin-top:100px;\">\n    <h4 style=\"text-align: center; font-family: oswald\"> {{'page.no_guest_package_found' | translate}}</h4>\n  </div>\n\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n      <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n      <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n  \n  </footer>"

/***/ }),

/***/ "./src/app/buy-guest-plan/buy-guest-plan.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/buy-guest-plan/buy-guest-plan.module.ts ***!
  \*********************************************************/
/*! exports provided: BuyGuestPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyGuestPlanPageModule", function() { return BuyGuestPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buy_guest_plan_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buy-guest-plan.page */ "./src/app/buy-guest-plan/buy-guest-plan.page.ts");








var routes = [
    {
        path: '',
        component: _buy_guest_plan_page__WEBPACK_IMPORTED_MODULE_7__["BuyGuestPlanPage"]
    }
];
var BuyGuestPlanPageModule = /** @class */ (function () {
    function BuyGuestPlanPageModule() {
    }
    BuyGuestPlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_buy_guest_plan_page__WEBPACK_IMPORTED_MODULE_7__["BuyGuestPlanPage"]]
        })
    ], BuyGuestPlanPageModule);
    return BuyGuestPlanPageModule;
}());



/***/ }),

/***/ "./src/app/buy-guest-plan/buy-guest-plan.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/buy-guest-plan/buy-guest-plan.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center; }\n\n:-ms-input-placeholder {\n  text-align: center; }\n\n.sub-header {\n  --background: #989898;\n  color: white;\n  margin-top: 0px !important; }\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  width: 100% !important;\n  height: 100% !important;\n  text-align: center;\n  font-family: 'oswald';\n  font-weight: normal; }\n\nion-content ion-toolbar ion-title {\n  left: 0; }\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: 'Oswald' !important; }\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important; }\n\n.ion-list {\n  display: contents !important; }\n\n.buy-guest img {\n  max-width: 100%;\n  border: 0;\n  height: 25px !important;\n  font-weight: bold; }\n\n.button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 15px;\n  font-size: 18px;\n  font-family: \"oswald\";\n  padding: 24px;\n  margin: 10px 0px 10px 0px; }\n\n.ion-text-center, [text-center] {\n  text-align: center !important;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n\n.title {\n  font-family: \"oswald\";\n  font-size: 16px; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px;\n  margin-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2J1eS1ndWVzdC1wbGFuL2J1eS1ndWVzdC1wbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFrQixFQUFBOztBQUdyQjtFQUFvQixnQkFBQTtFQUNqQixrQkFBa0IsRUFBQTs7QUFHckI7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3JCO0VBQ0csa0JBQWtCLEVBQUE7O0FBRXJCO0VBQ0UscUJBQWE7RUFDYixZQUFXO0VBQ1gsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBRVIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLE9BQU8sRUFBQTs7QUFHVDtFQUNFLGdDQUFnQyxFQUFBOztBQUVsQztFQUNDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLDRCQUEyQixFQUFBOztBQUU3QjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDSSw2QkFBNkI7RUFDN0IsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUVuQjtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnV5LWd1ZXN0LXBsYW4vYnV5LWd1ZXN0LXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gXG4gOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuIH1cbiBcbiA6Oi1tb3otcGxhY2Vob2xkZXIgeyAgLyogRmlyZWZveCAxOSsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiB9XG4gXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuIH1cbiAuc3ViLWhlYWRlciB7XG4gICAtLWJhY2tncm91bmQ6ICM5ODk4OTg7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuIH1cbiBpb24tdGl0bGUge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiAwO1xuICAgbGVmdDogNDU7XG4vLyAgICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC1mYW1pbHk6ICdvc3dhbGQnO1xuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuIH1cbiBpb24tY29udGVudCBpb24tdG9vbGJhciBpb24tdGl0bGV7XG4gICBsZWZ0OiAwO1xuXG4gfVxuIC5pdGVtLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gICBmb250LWZhbWlseTogJ09zd2FsZCcgIWltcG9ydGFudDtcbiB9XG4gLmxpc3QtbWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudCA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLmlvbi1saXN0IHtcbiAgZGlzcGxheTpjb250ZW50cyAhaW1wb3J0YW50O1xufVxuLmJ1eS1ndWVzdCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgICBcbn1cbi5pb24tdGV4dC1jZW50ZXIsIFt0ZXh0LWNlbnRlcl0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuIFxuIl19 */"

/***/ }),

/***/ "./src/app/buy-guest-plan/buy-guest-plan.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/buy-guest-plan/buy-guest-plan.page.ts ***!
  \*******************************************************/
/*! exports provided: BuyGuestPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyGuestPlanPage", function() { return BuyGuestPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ "./node_modules/@ionic-native/in-app-purchase/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var BuyGuestPlanPage = /** @class */ (function () {
    function BuyGuestPlanPage(translate, toastController, route, router, alertController, userService, iap, plt) {
        var _this = this;
        this.translate = translate;
        this.toastController = toastController;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.userService = userService;
        this.iap = iap;
        this.plt = plt;
        this.products = [];
        this.previousPurchases = [];
        this.plans = [];
        this.productIds = [];
        this.productIds = ['com.invitesmart.15guest', 'com.invitesmart.25guests', 'com.invitesmart.50guests', 'com.invitesmart.100guests', 'com.invitesmart.200guests', 'com.invitesmart.300guests', 'com.invitesmart.400guests', 'com.invitesmart.600guests'];
        this.lang = localStorage.getItem('language');
        if (this.lang) {
            this.translate.use(this.lang);
        }
        this.plt.ready().then(function () {
            _this.isLoader = true;
            _this.iap.getProducts(_this.productIds)
                .then(function (products) {
                var prod = products;
                _this.products = _this.getMatch(_this.productIds, prod);
                _this.isLoader = false;
            })
                .catch(function (err) {
                _this.checkError = err;
                _this.alertMessage(err);
                _this.isLoader = false;
                _this.router.navigate(['/choose-package']);
            });
        });
    }
    BuyGuestPlanPage.prototype.ngOnInit = function () {
        // this.products = [{title:'25 Package', price: 49.99},{title:'25 Package', price: 99.99}, {title:'25 Package', price: 99.99}]
        this.plans = [{ guest: 15, productId: 'com.invitesmart.15guest', price: 29.99 }, { guest: 25, productId: 'com.invitesmart.25guests', price: 49.99 }, { guest: 50, productId: 'com.invitesmart.50guests', price: 99.99 }, { guest: 100, productId: 'com.invitesmart.100guests', price: 199.99 }, { guest: 200, productId: 'com.invitesmart.200guests', price: 399.99 }, { guest: 300, productId: 'com.invitesmart.300guests', price: 599.99 }, { guest: 400, productId: 'com.invitesmart.400guests', price: 799.99 }, { guest: 600, productId: 'com.invitesmart.600guests', price: 899.99 }];
    };
    BuyGuestPlanPage.prototype.ionViewDidEnter = function () {
        this.get_invitation();
        this.event_name = this.route.snapshot.queryParams["event_name"];
    };
    BuyGuestPlanPage.prototype.getMatch = function (a, b) {
        var matches = [];
        for (var i = 0; i < a.length; i++) {
            for (var e = 0; e < b.length; e++) {
                if (a[i] === b[e].productId)
                    matches.push(b[e]);
            }
        }
        return matches;
    };
    BuyGuestPlanPage.prototype.buyProduct = function (product) {
        var _this = this;
        var invitationId = localStorage.getItem('invitationId');
        this.iap.buy(product).then(function (data) {
            _this.testResult = data;
            return _this.iap.consume(data.productType, data.receipt, data.signature);
        }).then(function () {
            if (invitationId) {
                _this.update_invitation(product);
            }
            else {
                _this.create_invitation(product);
            }
            console.log('consume done!');
        }).catch(function (err) { return console.log(err); });
    };
    BuyGuestPlanPage.prototype.restore = function () {
        var _this = this;
        this.iap.restorePurchases().then(function (purchases) {
            _this.previousPurchases = purchases;
            // Unlock the features of the purchases!
            for (var _i = 0, _a = _this.previousPurchases; _i < _a.length; _i++) {
                var prev = _a[_i];
            }
        });
    };
    BuyGuestPlanPage.prototype.successMessage = function () {
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
    BuyGuestPlanPage.prototype.alertMessage = function (message) {
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
    // ************************ Get Invitation ***************************//
    BuyGuestPlanPage.prototype.get_invitation = function () {
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
    BuyGuestPlanPage.prototype.update_invitation = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, plan, guest, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = localStorage.getItem('invitationId');
                        plan = this.plans.filter(function (o) { return o.productId === product; });
                        guest = parseInt(this.invitation.no_of_guest) + parseInt(plan[0].guest);
                        data = { id: id, no_of_guest: guest, productId: product, price: "", transactionId: "" };
                        return [4 /*yield*/, this.userService.updateInvitation(data)
                                .subscribe(function (res) {
                                var result = res['data'];
                                localStorage.removeItem('guests');
                                localStorage.removeItem('isGuestSelected');
                                localStorage.removeItem('event');
                                localStorage.removeItem('eventName');
                                _this.successMessage();
                                localStorage.setItem('guests', plan[0].guest);
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
                        return [2 /*return*/];
                }
            });
        });
    };
    // ************************ Create Invitation***************************//
    BuyGuestPlanPage.prototype.create_invitation = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userId, imageName, event, eventLocation, plan, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = localStorage.getItem('userId');
                        imageName = localStorage.getItem('image');
                        event = localStorage.getItem('event');
                        if (event == "undefined") {
                            eventLocation = '';
                        }
                        else {
                            eventLocation = event;
                        }
                        this.event_name = localStorage.getItem('eventName');
                        plan = this.plans.filter(function (o) { return o.productId === product; });
                        if (plan) {
                            data = { invitation_image: imageName, event_name: this.event_name, userId: userId, no_of_guest: plan[0].guest, productId: "", price: '', transactionId: "", event_location: eventLocation };
                        }
                        this.isLoader = true;
                        return [4 /*yield*/, this.userService.createInvitation(data)
                                .subscribe(function (res) {
                                var result = res['data'];
                                localStorage.removeItem('guests');
                                localStorage.removeItem('invitationId');
                                localStorage.removeItem('isGuestSelected');
                                localStorage.removeItem('event');
                                localStorage.removeItem('eventName');
                                _this.successMessage();
                                localStorage.setItem('guests', plan[0].guest);
                                localStorage.setItem('isGuestSelected', result.isGuestSelected);
                                localStorage.setItem('invitationId', result._id);
                                _this.router.navigate(['/invitation-type']);
                                localStorage.removeItem('image');
                                _this.isLoader = false;
                            }, function (err) {
                                if (err.error.message == 'token expired') {
                                    _this.router.navigate(['/sign-up']);
                                    _this.alertMessage(err.error.message);
                                }
                                else {
                                    _this.alertMessage(err.error.message);
                                    _this.router.navigate(['/invitation']);
                                }
                                _this.isLoader = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BuyGuestPlanPage.prototype.goBack = function () {
        var paidPlan = this.route.snapshot.queryParams["paidPlan"];
        this.router.navigate(['/choose-package'], { queryParams: { paidPlan: paidPlan } });
    };
    BuyGuestPlanPage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppPurchase"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
    ]; };
    BuyGuestPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buy-guest-plan',
            template: __webpack_require__(/*! raw-loader!./buy-guest-plan.page.html */ "./node_modules/raw-loader/index.js!./src/app/buy-guest-plan/buy-guest-plan.page.html"),
            styles: [__webpack_require__(/*! ./buy-guest-plan.page.scss */ "./src/app/buy-guest-plan/buy-guest-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppPurchase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], BuyGuestPlanPage);
    return BuyGuestPlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=buy-guest-plan-buy-guest-plan-module-es5.js.map