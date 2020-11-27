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

module.exports = "::-webkit-input-placeholder {\n  text-align: center; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center; }\n\n:-ms-input-placeholder {\n  text-align: center; }\n\n.sub-header {\n  --background: #989898;\n  color: white;\n  margin-top: 15px !important; }\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-family: 'oswald';\n  font-weight: normal; }\n\nion-content ion-toolbar ion-title {\n  left: 0; }\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: 'Oswald' !important; }\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important; }\n\n.ion-list {\n  display: contents !important; }\n\n.guest-list img {\n  max-width: 100%;\n  border: 0;\n  height: 25px !important;\n  font-weight: bold; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 12px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  margin-right: 10px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlbm92bzAzL0Rlc2t0b3AvcHJvamVjdC9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3NjYW4tbGlzdC9zY2FuLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3JCO0VBQW9CLGdCQUFBO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdyQjtFQUFzQixnQkFBQTtFQUNuQixrQkFBa0IsRUFBQTs7QUFHckI7RUFDRyxrQkFBa0IsRUFBQTs7QUFFckI7RUFDRSxxQkFBYTtFQUNiLFlBQVc7RUFDWCwyQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLE9BQU8sRUFBQTs7QUFHVDtFQUNFLGdDQUFnQyxFQUFBOztBQUVsQztFQUNDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLDRCQUEyQixFQUFBOztBQUU3QjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFFekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFpQjtFQUNqQixXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zY2FuLWxpc3Qvc2Nhbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuIFxuIDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiB9XG4gXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gfVxuIFxuIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiB9XG4gLnN1Yi1oZWFkZXIge1xuICAgLS1iYWNrZ3JvdW5kOiAjOTg5ODk4O1xuICAgY29sb3I6d2hpdGU7XG4gICBtYXJnaW4tdG9wOjE1cHggIWltcG9ydGFudDtcbiB9XG4gaW9uLXRpdGxlIHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMDtcbiAgIGxlZnQ6IDQ1O1xuICAgcGFkZGluZzogMCA5MHB4IDFweDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC1mYW1pbHk6ICdvc3dhbGQnO1xuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiB9XG4gaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIgaW9uLXRpdGxle1xuICAgbGVmdDogMDtcblxuIH1cbiAuaXRlbS5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnICFpbXBvcnRhbnQ7XG4gfVxuIC5saXN0LW1kIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQgO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5pb24tbGlzdCB7XG4gIGRpc3BsYXk6Y29udGVudHMgIWltcG9ydGFudDtcbn1cbi5ndWVzdC1saXN0IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aHVtYi1uYWlsLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gICAgLy8gbWFyZ2luLXRvcDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIGZsb2F0OmxlZnQ7XG59XG4gXG4iXX0= */"

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