(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scan-list-scan-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/scan-list/scan-list.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scan-list/scan-list.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <ion-toolbar style=\"padding-top: 20px !important;margin-bottom: 15px;margin-top:15px;\"> \n      <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n      <button routerLink=\"/thumbnails\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n          color=\"light\"> {{'page.back' | translate}}</button>\n          <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n    color=\"light\">{{'page.scan' | translate}}</button>\n  </ion-toolbar> \n</ion-header>\n<ion-content class=\"guest-list\">\n    <ion-toolbar class=\"sub-header\">\n        <ion-title>{{'page.scanned_guest_list' | translate}}</ion-title>\n      </ion-toolbar>\n        <!-- Item Dividers in a List -->\n        <ion-list *ngFor=\"let user of names\">\n          <ion-item><ion-label><b>{{user.name ? user.name : user.invitationCode | uppercase}}</b></ion-label>\n            <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"{{user.updatedAt}}\"></ion-datetime>\n            <ion-datetime display-format=\"DD-MM-YYYY\" picker-format=\"h:mm A\" value=\"{{user.updatedAt}}\"></ion-datetime>\n            <!-- <img src=\"assets/arrow.png\"  (click)=\"deleteRecord(user._id)\" style=\"margin-top:0px;\"> -->\n            <!-- <ion-icon  name=\"arrow-forward\" ></ion-icon> -->\n          </ion-item>\n        </ion-list>\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n      <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n      <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n  \n  </footer>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/scan-list/scan-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/scan-list/scan-list.module.ts ***!
  \***********************************************/
/*! exports provided: ScanListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanListPageModule", function() { return ScanListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scan_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scan-list.page */ "./src/app/scan-list/scan-list.page.ts");








const routes = [
    {
        path: '',
        component: _scan_list_page__WEBPACK_IMPORTED_MODULE_7__["ScanListPage"]
    }
];
let ScanListPageModule = class ScanListPageModule {
};
ScanListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_scan_list_page__WEBPACK_IMPORTED_MODULE_7__["ScanListPage"]]
    })
], ScanListPageModule);



/***/ }),

/***/ "./src/app/scan-list/scan-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/scan-list/scan-list.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\n.sub-header {\n  --background: #989898;\n  color: white;\n  margin-top: 15px !important;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-family: \"oswald\";\n  font-weight: normal;\n}\n\nion-content ion-toolbar ion-title {\n  left: 0;\n}\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: \"Oswald\" !important;\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important;\n}\n\n.ion-list {\n  display: contents !important;\n}\n\n.guest-list img {\n  max-width: 100%;\n  border: 0;\n  height: 25px !important;\n  font-weight: bold;\n}\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 12px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  margin-right: 10px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3NjYW4tbGlzdC9zY2FuLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zY2FuLWxpc3Qvc2Nhbi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FDQUo7O0FER0M7RUFBb0IsZ0JBQUE7RUFDakIsa0JBQUE7QUNDSjs7QURFQztFQUFzQixnQkFBQTtFQUNuQixrQkFBQTtBQ0VKOztBRENDO0VBQ0csa0JBQUE7QUNFSjs7QURBQztFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDR0g7O0FEREM7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0lIOztBREZDO0VBQ0UsT0FBQTtBQ0tIOztBREZDO0VBQ0UsZ0NBQUE7QUNLSDs7QURIQztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNNRjs7QURKQTtFQUNFLDRCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNRRjs7QURMQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvc2Nhbi1saXN0L3NjYW4tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gfVxuIFxuIDo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuIH1cbiBcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gfVxuIC5zdWItaGVhZGVyIHtcbiAgIC0tYmFja2dyb3VuZDogIzk4OTg5ODtcbiAgIGNvbG9yOndoaXRlO1xuICAgbWFyZ2luLXRvcDoxNXB4ICFpbXBvcnRhbnQ7XG4gfVxuIGlvbi10aXRsZSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDA7XG4gICBsZWZ0OiA0NTtcbiAgIHBhZGRpbmc6IDAgOTBweCAxcHg7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQtZmFtaWx5OiAnb3N3YWxkJztcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gfVxuIGlvbi1jb250ZW50IGlvbi10b29sYmFyIGlvbi10aXRsZXtcbiAgIGxlZnQ6IDA7XG5cbiB9XG4gLml0ZW0uc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJyAhaW1wb3J0YW50O1xuIH1cbiAubGlzdC1tZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50IDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW9uLWxpc3Qge1xuICBkaXNwbGF5OmNvbnRlbnRzICFpbXBvcnRhbnQ7XG59XG4uZ3Vlc3QtbGlzdCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGh1bWItbmFpbC1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICAgIC8vIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICBmbG9hdDpsZWZ0O1xufVxuIFxuIiwiOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzk4OTg5ODtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA0NTtcbiAgcGFkZGluZzogMCA5MHB4IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgbGVmdDogMDtcbn1cblxuLml0ZW0uc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tbGlzdCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzICFpbXBvcnRhbnQ7XG59XG5cbi5ndWVzdC1saXN0IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aHVtYi1uYWlsLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/scan-list/scan-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/scan-list/scan-list.page.ts ***!
  \*********************************************/
/*! exports provided: ScanListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanListPage", function() { return ScanListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let ScanListPage = class ScanListPage {
    constructor(translate, actionSheetController, alertController, userService, formBuilder, router) {
        this.translate = translate;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formData = {};
        this.names = [];
        // ******************************** Form Validation Messages ************************//
        this.validation_messages = {
            'image_code': [
                { type: 'required', message: 'Number is required.' },
                { type: 'pattern', message: 'Number 1 to 100 is allowed.' }
            ]
        };
        let lang = localStorage.getItem('language');
        if (lang) {
            this.translate.use(lang);
        }
    }
    ionViewDidEnter() {
        this.guest_list();
    }
    ngOnInit() {
        this.userId = localStorage.getItem('userId');
        this.invitationId = localStorage.getItem('invitationId');
        // this.guest_list();
        // const regexPattern = /^\d{1,3}$/;
        // Validators.pattern(regexPattern);
        // this.number_form = this.formBuilder.group({
        //   image_code: new FormControl('', Validators.compose([
        //     Validators.required,
        //     Validators.pattern(/^[1-9][0-9]?$|^100$/)
        //   ]))
        // });
    }
    // ************************ Guest List ***************************//
    guest_list() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.names = [];
            let userId = localStorage.getItem('userId');
            this.isLoader = true;
            yield this.userService.scannedGuest(userId, this.invitationId)
                .subscribe(res => {
                this.names = res['data'];
                this.isLoader = false;
                console.log(this.names, 'testing');
            }, err => {
                this.isLoader = false;
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
    // ************************ Delete Records ***************************//
    deleteRecord(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.userService.delete(id)
                .subscribe(res => {
                this.guest_list();
            }, err => {
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
    addNames() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var cells = this.name.split(/\r\n|\n/);
            var arr = [];
            for (var i = 0; i < cells.length; i++) {
                if (cells[i]) {
                    let data = { name: cells[i], userId: this.userId, invitationId: this.invitationId };
                    arr.push(data);
                }
            }
            yield this.userService.addGuestName({ data: arr })
                .subscribe(res => {
                this.guest_list();
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
            this.name = '';
        });
    }
    // ************************ Redirct To Thumbnail Images Page ***************************//
    getImages() {
        //  this.router.navigate(['/thumbnails'], { queryParams: {image_code: this.image_code} })
    }
};
ScanListPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ScanListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan-list',
        template: __webpack_require__(/*! raw-loader!./scan-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/scan-list/scan-list.page.html"),
        styles: [__webpack_require__(/*! ./scan-list.page.scss */ "./src/app/scan-list/scan-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ScanListPage);



/***/ })

}]);
//# sourceMappingURL=scan-list-scan-list-module-es2015.js.map