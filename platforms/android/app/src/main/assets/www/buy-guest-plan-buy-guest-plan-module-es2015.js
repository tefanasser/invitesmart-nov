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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buy_guest_plan_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buy-guest-plan.page */ "./src/app/buy-guest-plan/buy-guest-plan.page.ts");








const routes = [
    {
        path: '',
        component: _buy_guest_plan_page__WEBPACK_IMPORTED_MODULE_7__["BuyGuestPlanPage"]
    }
];
let BuyGuestPlanPageModule = class BuyGuestPlanPageModule {
};
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



/***/ }),

/***/ "./src/app/buy-guest-plan/buy-guest-plan.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/buy-guest-plan/buy-guest-plan.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\n.sub-header {\n  --background: #989898;\n  color: white;\n  margin-top: 0px !important;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  width: 100% !important;\n  height: 100% !important;\n  text-align: center;\n  font-family: \"oswald\";\n  font-weight: normal;\n}\n\nion-content ion-toolbar ion-title {\n  left: 0;\n}\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: \"Oswald\" !important;\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important;\n}\n\n.ion-list {\n  display: contents !important;\n}\n\n.buy-guest img {\n  max-width: 100%;\n  border: 0;\n  height: 25px !important;\n  font-weight: bold;\n}\n\n.button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 15px;\n  font-size: 18px;\n  font-family: \"oswald\";\n  padding: 24px;\n  margin: 10px 0px 10px 0px;\n}\n\n.ion-text-center, [text-center] {\n  text-align: center !important;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.title {\n  font-family: \"oswald\";\n  font-size: 16px;\n}\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2J1eS1ndWVzdC1wbGFuL2J1eS1ndWVzdC1wbGFuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnV5LWd1ZXN0LXBsYW4vYnV5LWd1ZXN0LXBsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQztFQUFvQixnQkFBQTtFQUNqQixrQkFBQTtBQ0NKOztBREVDO0VBQXNCLGdCQUFBO0VBQ25CLGtCQUFBO0FDRUo7O0FEQ0M7RUFDRyxrQkFBQTtBQ0VKOztBREFDO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNHSDs7QUREQztFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFFQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDR0g7O0FEQUM7RUFDRSxPQUFBO0FDR0g7O0FEQUM7RUFDRSxnQ0FBQTtBQ0dIOztBRERDO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ0lGOztBREZBO0VBQ0UsNEJBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDT0Y7O0FESkE7RUFDSSw2QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ09KOztBRExBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9idXktZ3Vlc3QtcGxhbi9idXktZ3Vlc3QtcGxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gfVxuIFxuIDo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuIH1cbiBcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gfVxuIC5zdWItaGVhZGVyIHtcbiAgIC0tYmFja2dyb3VuZDogIzk4OTg5ODtcbiAgIGNvbG9yOndoaXRlO1xuICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIGlvbi10aXRsZSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDA7XG4gICBsZWZ0OiA0NTtcbi8vICAgIHBhZGRpbmc6IDAgOTBweCAxcHg7XG4gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBmb250LWZhbWlseTogJ29zd2FsZCc7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gfVxuIGlvbi1jb250ZW50IGlvbi10b29sYmFyIGlvbi10aXRsZXtcbiAgIGxlZnQ6IDA7XG5cbiB9XG4gLml0ZW0uc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJyAhaW1wb3J0YW50O1xuIH1cbiAubGlzdC1tZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50IDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW9uLWxpc3Qge1xuICBkaXNwbGF5OmNvbnRlbnRzICFpbXBvcnRhbnQ7XG59XG4uYnV5LWd1ZXN0IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xuICAgIFxufVxuLmlvbi10ZXh0LWNlbnRlciwgW3RleHQtY2VudGVyXSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4udGh1bWItbmFpbC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gIGJvcmRlci1yYWRpdXM6IDI5cHg7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4gXG4iLCI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTg5ODk4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNDU7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBsZWZ0OiAwO1xufVxuXG4uaXRlbS5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmlvbi1saXN0IHtcbiAgZGlzcGxheTogY29udGVudHMgIWltcG9ydGFudDtcbn1cblxuLmJ1eS1ndWVzdCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xufVxuXG4uaW9uLXRleHQtY2VudGVyLCBbdGV4dC1jZW50ZXJdIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ "./node_modules/@ionic-native/in-app-purchase/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let BuyGuestPlanPage = class BuyGuestPlanPage {
    constructor(translate, toastController, route, router, alertController, userService, iap, plt) {
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
        this.productIds = ['com.invitesmart.15guest', 'com.invitesmart.25guest', 'com.invitesmart.50guest', 'com.invitesmart.100guests', 'com.invitesmart.200guests', 'com.invitesmart.300guests', 'com.invitesmart.400guests', 'com.invitesmart.600guests'];
        this.lang = localStorage.getItem('language');
        if (this.lang) {
            this.translate.use(this.lang);
        }
        this.plt.ready().then(() => {
            this.isLoader = true;
            this.iap.getProducts(this.productIds)
                .then((products) => {
                let prod = products;
                this.products = this.getMatch(this.productIds, prod);
                this.isLoader = false;
            })
                .catch((err) => {
                this.checkError = err;
                this.alertMessage(err);
                this.isLoader = false;
                this.router.navigate(['/choose-package']);
            });
        });
    }
    ngOnInit() {
        // this.products = [{title:'25 Package', price: 49.99},{title:'25 Package', price: 99.99}, {title:'25 Package', price: 99.99}]
        this.plans = [{ guest: 15, productId: 'com.invitesmart.15guests', price: 1 }, { guest: 25, productId: 'com.invitesmart.25guest', price: 49.99 }, { guest: 50, productId: 'com.invitesmart.50guest', price: 99.99 }, { guest: 100, productId: 'com.invitesmart.100guests', price: 199.99 }, { guest: 200, productId: 'com.invitesmart.200guests', price: 399.99 }, { guest: 300, productId: 'com.invitesmart.300guests', price: 599.99 }, { guest: 400, productId: 'com.invitesmart.400guests', price: 799.99 }, { guest: 600, productId: 'com.invitesmart.600guests', price: 899.99 }];
    }
    ionViewDidEnter() {
        this.get_invitation();
        this.event_name = this.route.snapshot.queryParams["event_name"];
    }
    getMatch(a, b) {
        var matches = [];
        for (var i = 0; i < a.length; i++) {
            for (var e = 0; e < b.length; e++) {
                if (a[i] === b[e].productId)
                    matches.push(b[e]);
            }
        }
        return matches;
    }
    buyProduct(product) {
        let invitationId = localStorage.getItem('invitationId');
        this.iap.buy(product).then(data => {
            this.testResult = data;
            return this.iap.consume(data.productType, data.receipt, data.signature);
        }).then(() => {
            if (invitationId) {
                this.update_invitation(product);
            }
            else {
                this.create_invitation(product);
            }
            console.log('consume done!');
        }).catch(err => console.log(err));
    }
    restore() {
        this.iap.restorePurchases().then(purchases => {
            this.previousPurchases = purchases;
            // Unlock the features of the purchases!
            for (let prev of this.previousPurchases) {
            }
        });
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
    alertMessage(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
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
    // ************************ Create Invitation***************************//
    update_invitation(product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let id = localStorage.getItem('invitationId');
            let plan = this.plans.filter(o => o.productId === product);
            let guest = parseInt(this.invitation.no_of_guest) + parseInt(plan[0].guest);
            let data = { id: id, no_of_guest: guest, productId: product, price: "", transactionId: "" };
            yield this.userService.updateInvitation(data)
                .subscribe(res => {
                let result = res['data'];
                localStorage.removeItem('guests');
                localStorage.removeItem('isGuestSelected');
                localStorage.removeItem('event');
                localStorage.removeItem('eventName');
                this.successMessage();
                localStorage.setItem('guests', plan[0].guest);
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
        });
    }
    // ************************ Create Invitation***************************//
    create_invitation(product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userId = localStorage.getItem('userId');
            let imageName = localStorage.getItem('image');
            let event = localStorage.getItem('event');
            var eventLocation;
            if (event == "undefined") {
                eventLocation = '';
            }
            else {
                eventLocation = event;
            }
            this.event_name = localStorage.getItem('eventName');
            let plan = this.plans.filter(o => o.productId === product);
            if (plan) {
                var data = { invitation_image: imageName, event_name: this.event_name, userId: userId, no_of_guest: plan[0].guest, productId: "", price: '', transactionId: "", event_location: eventLocation };
            }
            this.isLoader = true;
            yield this.userService.createInvitation(data)
                .subscribe(res => {
                let result = res['data'];
                localStorage.removeItem('guests');
                localStorage.removeItem('invitationId');
                localStorage.removeItem('isGuestSelected');
                localStorage.removeItem('event');
                localStorage.removeItem('eventName');
                this.successMessage();
                localStorage.setItem('guests', plan[0].guest);
                localStorage.setItem('isGuestSelected', result.isGuestSelected);
                localStorage.setItem('invitationId', result._id);
                this.router.navigate(['/invitation-type']);
                localStorage.removeItem('image');
                this.isLoader = false;
            }, err => {
                if (err.error.message == 'token expired') {
                    this.router.navigate(['/sign-up']);
                    this.alertMessage(err.error.message);
                }
                else {
                    this.alertMessage(err.error.message);
                    this.router.navigate(['/invitation']);
                }
                this.isLoader = false;
            });
        });
    }
    goBack() {
        let paidPlan = this.route.snapshot.queryParams["paidPlan"];
        this.router.navigate(['/choose-package'], { queryParams: { paidPlan: paidPlan } });
    }
};
BuyGuestPlanPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppPurchase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
BuyGuestPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy-guest-plan',
        template: __webpack_require__(/*! raw-loader!./buy-guest-plan.page.html */ "./node_modules/raw-loader/index.js!./src/app/buy-guest-plan/buy-guest-plan.page.html"),
        styles: [__webpack_require__(/*! ./buy-guest-plan.page.scss */ "./src/app/buy-guest-plan/buy-guest-plan.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppPurchase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
], BuyGuestPlanPage);



/***/ })

}]);
//# sourceMappingURL=buy-guest-plan-buy-guest-plan-module-es2015.js.map