(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scan-guest-scan-guest-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/scan-guest/scan-guest.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scan-guest/scan-guest.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <ion-toolbar style=\"padding-top: 20px !important;\n  padding-bottom: 10px !important;\n  margin-bottom: 20px;\"> \n      <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n      <button routerLink=\"/thumbnails\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n          color=\"light\"> {{'page.back' | translate}}</button>\n          <button routerLink=\"/scan-list\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n          color=\"light\">{{'page.show_scan_list' | translate}} </button>\n  </ion-toolbar> \n</ion-header>\n<ion-content>\n<div id=\"scannerArea\"></div>\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n        <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n        <span class=\"footer-text\"><a href=\"https://invitesmartapp.com\" target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/scan-guest/scan-guest.module.ts":
/*!*************************************************!*\
  !*** ./src/app/scan-guest/scan-guest.module.ts ***!
  \*************************************************/
/*! exports provided: ScanGuestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanGuestPageModule", function() { return ScanGuestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scan_guest_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scan-guest.page */ "./src/app/scan-guest/scan-guest.page.ts");








const routes = [
    {
        path: '',
        component: _scan_guest_page__WEBPACK_IMPORTED_MODULE_7__["ScanGuestPage"]
    }
];
let ScanGuestPageModule = class ScanGuestPageModule {
};
ScanGuestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_scan_guest_page__WEBPACK_IMPORTED_MODULE_7__["ScanGuestPage"]]
    })
], ScanGuestPageModule);



/***/ }),

/***/ "./src/app/scan-guest/scan-guest.page.scss":
/*!*************************************************!*\
  !*** ./src/app/scan-guest/scan-guest.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center; }\n\n:-ms-input-placeholder {\n  text-align: center; }\n\n.sub-header {\n  --background: #D3D1D1;\n  color: white; }\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  width: 100% !important;\n  height: 100% !important;\n  text-align: center;\n  font-family: 'oswald';\n  font-weight: normal; }\n\nion-content ion-toolbar ion-title {\n  left: 0; }\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: 'Oswald' !important; }\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important; }\n\n.ion-list {\n  display: contents !important; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px;\n  margin-top: 8px; }\n\n#scannerArea {\n  margin-top: 10px; }\n\n#scannerArea img {\n  opacity: 0.5;\n  max-width: 95%;\n  max-height: calc(98% - 100px);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.card {\n  background-color: #D3D1D1;\n  width: 150px;\n  height: 125px; }\n\n.thumb-nail-button {\n  color: white;\n  border-radius: 29px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  color: white;\n  background-color: #3E51B5;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px; }\n\nion-toast.success .toast-wrapper {\n  background: white !important;\n  width: 400px;\n  height: 300px; }\n\nion-toast.error .toast-wrapper {\n  background: #d14747; }\n\nion-content {\n  --ion-background-color:transparent !important; }\n\nion-content {\n  --background: transparent;\n  opacity: 1; }\n\n.footer img {\n  max-width: 95%;\n  max-height: calc(98% - 100px);\n  position: fixed; }\n\n.footer-text {\n  display: block;\n  margin-top: 24px;\n  padding-left: 113px !important;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3NjYW4tZ3Vlc3Qvc2Nhbi1ndWVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFBb0IsZ0JBQUE7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQXNCLGdCQUFBO0VBQ3BCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNDLHFCQUFhO0VBQ2IsWUFBVyxFQUFBOztBQUVaO0VBQ0Msa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBRVIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLE9BQU8sRUFBQTs7QUFHUjtFQUNDLGdDQUFnQyxFQUFBOztBQUVqQztFQUNBLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFBOztBQUUzQjtFQUNBLDRCQUEyQixFQUFBOztBQUUzQjtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsNEJBQUE7RUFDQSx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVc7RUFBRSxhQUFZLEVBQUE7O0FBRTNCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNBLDRCQUE0QjtFQUM1QixZQUFXO0VBQ1gsYUFBWSxFQUFBOztBQUdaO0VBQ0EsbUJBQTRCLEVBQUE7O0FBRTVCO0VBQ0EsNkNBQXVCLEVBQUE7O0FBR3ZCO0VBQ0cseUJBQWE7RUFDYixVQUFVLEVBQUE7O0FBRWI7RUFFRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBRWhCLDhCQUE4QjtFQUM5QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NjYW4tZ3Vlc3Qvc2Nhbi1ndWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgIFxufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuLnN1Yi1oZWFkZXIge1xuIC0tYmFja2dyb3VuZDogI0QzRDFEMTtcbiBjb2xvcjp3aGl0ZTtcbn1cbmlvbi10aXRsZSB7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIHRvcDogMDtcbiBsZWZ0OiA0NTtcbi8vICAgIHBhZGRpbmc6IDAgOTBweCAxcHg7XG4gd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gZm9udC1mYW1pbHk6ICdvc3dhbGQnO1xuIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbn1cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIGlvbi10aXRsZXtcbiBsZWZ0OiAwO1xuXG59XG4uaXRlbS5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuIGZvbnQtZmFtaWx5OiAnT3N3YWxkJyAhaW1wb3J0YW50O1xufVxuLmxpc3QtbWQge1xubWFyZ2luLWxlZnQ6IDA7XG5tYXJnaW4tcmlnaHQ6IDA7XG5tYXJnaW4tdG9wOiAwO1xubWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQgO1xucGFkZGluZy1sZWZ0OiAwO1xucGFkZGluZy1yaWdodDogMDtcbnBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5pb24tbGlzdCB7XG5kaXNwbGF5OmNvbnRlbnRzICFpbXBvcnRhbnQ7XG59XG4udGh1bWItbmFpbC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gIGJvcmRlci1yYWRpdXM6IDI5cHg7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4jc2Nhbm5lckFyZWEge1xuICBtYXJnaW4tdG9wOjEwcHg7XG59XG4jc2Nhbm5lckFyZWEgaW1nIHtcbiAgb3BhY2l0eTogMC41O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWF4LWhlaWdodDogY2FsYyg5OCUgLSAxMDBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0QxRDE7XG4gIHdpZHRoOjE1MHB4OyBoZWlnaHQ6MTI1cHg7XG59XG4udGh1bWItbmFpbC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI5cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgcGFkZGluZzogMTNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICBcbn1cbmlvbi10b2FzdC5zdWNjZXNzIC50b2FzdC13cmFwcGVyIHtcbmJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG53aWR0aDo0MDBweDtcbmhlaWdodDozMDBweDtcbn1cblxuaW9uLXRvYXN0LmVycm9yIC50b2FzdC13cmFwcGVyIHtcbmJhY2tncm91bmQ6IHJnYigyMDksIDcxLCA3MSk7XG59XG5pb24tY29udGVudHtcbi0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgIG9wYWNpdHk6IDE7XG59XG4uZm9vdGVyICBpbWcge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIG1heC1oZWlnaHQ6IGNhbGMoOTglIC0gMTAwcHgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uZm9vdGVyLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgLy8gZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDExM3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/scan-guest/scan-guest.page.ts":
/*!***********************************************!*\
  !*** ./src/app/scan-guest/scan-guest.page.ts ***!
  \***********************************************/
/*! exports provided: ScanGuestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanGuestPage", function() { return ScanGuestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_scan_scan_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/scan/scan.page */ "./src/app/modal/scan/scan.page.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");











let ScanGuestPage = class ScanGuestPage {
    constructor(translate, platform, toastController, alertController, userService, qrScanner, modalController, socialSharing, route, router) {
        this.translate = translate;
        this.platform = platform;
        this.toastController = toastController;
        this.alertController = alertController;
        this.userService = userService;
        this.qrScanner = qrScanner;
        this.modalController = modalController;
        this.socialSharing = socialSharing;
        this.route = route;
        this.router = router;
        this.images = [];
        this.qrCode = null;
        let lang = localStorage.getItem('language');
        if (lang) {
            this.translate.use(lang);
        }
    }
    ngOnInit() {
        // this.get_invitation();
        this.no_of_guest = this.route.snapshot.queryParams["no_of_guest"];
        this.invitation = JSON.parse(localStorage.getItem('invitation'));
        this.invitationId = localStorage.getItem('invitationId');
        this.names = JSON.parse(localStorage.getItem('names'));
        var code = 0;
        this.platform.ready().then(() => {
            document.getElementsByTagName("body")[0].style.opacity = '1';
            this.scanSub.unsubscribe();
        });
        //  this.scanqrCode();
    }
    ionViewDidEnter() {
        document.getElementsByTagName("body")[0].style.opacity = '1';
        this.scanqrCode();
    }
    ionViewWillLeave() {
        this.stopScanning();
    }
    IsJsonString(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    stopScanning() {
        document.getElementsByTagName("body")[0].style.opacity = '1';
        this.qrScanner.hide();
        this.qrScanner.destroy();
    }
    // *************************** Redirect To Scanned List Page ******************************//
    scanned_list(item) {
        this.router.navigate(['/detail'], { queryParams: { image: item.image, code: item.image_code } });
    }
    // ************************ Redirct To Thumbnail Images Page ***************************//
    get_invitation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userId = localStorage.getItem('userId');
            let invitationId = localStorage.getItem('invitationId');
            if (invitationId) {
                yield this.userService.getInvitation(invitationId)
                    .subscribe(res => {
                    this.invitation = res['data'];
                    console.log(this.invitation.invitation_image, 'testing123');
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
    alertMessage(err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: err,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    scanqrCode() {
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then((status) => {
            if (status.authorized) {
                this.qrScanner.show();
                document.getElementById("scannerArea").style.opacity = "0";
                this.scanSub = this.qrScanner.scan().subscribe((text) => {
                    console.log('Scanned something', text);
                    let value = JSON.stringify(text);
                    let data = JSON.parse(value);
                    this.getGuestInfo(data);
                    this.qrScanner.hide();
                    this.scanSub.unsubscribe(); // stop scanning
                    // document.getElementById("scannerArea").style.opacity = "1";
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                if (!status.authorized && status.canOpenSettings) {
                    if (confirm('Would you like to enable QR code scanning? You can allow camera access in your settings.')) {
                        this.qrScanner.openSettings();
                    }
                }
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // this.qrScanner.openSettings();
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch((e) => console.log('Error is', e));
    }
    messageModal(record) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_scan_scan_page__WEBPACK_IMPORTED_MODULE_5__["ScanPage"],
                cssClass: 'message-modal',
                componentProps: { name: record.name, isScanned: record.isScanned, isEmpty: record.isEmpty },
                backdropDismiss: false,
            });
            return yield modal.present();
        });
    }
    // ************************ Redirct To Thumbnail Images Page ***************************//
    getGuestInfo(dat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let getJson = dat.match(/[^{]+(?=\})/g);
            if (getJson) {
                let jsonData = JSON.parse(dat);
                if (typeof jsonData == 'object' && jsonData.id) {
                    yield this.userService.getGuestName(jsonData.id)
                        .subscribe(res => {
                        this.data = res['data'];
                        if (this.data.isDeleted == false && this.data.invitationId == this.invitationId) {
                            if (this.data.isScanned == true) {
                                let rec = { isScanned: this.data.isScanned, name: this.data.name, isEmpty: false };
                                this.messageModal(rec);
                            }
                            else {
                                this.update_guest(this.data._id);
                            }
                        }
                        else {
                            let rec = { isScanned: '', name: '', isEmpty: true };
                            this.messageModal(rec);
                        }
                    }, err => {
                        this.alertMessage(err.error.message);
                    });
                }
                else {
                    let rec = { isScanned: '', name: '', isEmpty: true };
                    this.messageModal(rec);
                }
            }
            else {
                let rec = { isScanned: '', name: '', isEmpty: true };
                this.messageModal(rec);
            }
        });
    }
    // ************************ Redirct To Thumbnail Images Page ***************************//
    update_guest(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.userService.updateGuest({ id: id })
                .subscribe(res => {
                let result = res['data'];
                let rec = { isScanned: false, name: this.data.name, isEmpty: false };
                this.messageModal(rec);
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
        this.router.navigate(['/add-names']);
    }
};
ScanGuestPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["QRScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ScanGuestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan-guest',
        template: __webpack_require__(/*! raw-loader!./scan-guest.page.html */ "./node_modules/raw-loader/index.js!./src/app/scan-guest/scan-guest.page.html"),
        styles: [__webpack_require__(/*! ./scan-guest.page.scss */ "./src/app/scan-guest/scan-guest.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["QRScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ScanGuestPage);



/***/ })

}]);
//# sourceMappingURL=scan-guest-scan-guest-module-es2015.js.map