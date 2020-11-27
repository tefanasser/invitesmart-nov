(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invitation-invitation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/invitation/invitation.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invitation/invitation.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <ion-toolbar style=\"padding-top: 20px !important;\n  padding-bottom: 10px !important;\n  margin-bottom: 10px;\">\n        <ion-title style=\"margin-left: 18px;\" class=\"main-header\"> {{'page.create_new_invitation' | translate}}</ion-title>\n        <ion-icon routerLink=\"/create-invitation\" routerDirection=\"forward\" ios=\"ios-add-circle\" md=\"md-add-circle\" class=\"plus-icon-style\"></ion-icon>\n  </ion-toolbar>\n  </ion-header>\n     <ion-content>\n        <ion-toolbar class=\"sub-header\">\n          <ion-title>{{ 'page.your invitations' | translate }}</ion-title>\n        </ion-toolbar>\n        <div *ngIf=\"isLoader\" style=\"margin-left:49%;\"><ion-spinner name=\"lines\"></ion-spinner></div>\n          <!-- Item Dividers in a List -->\n          <ion-list *ngFor=\"let invitation of invitations\">\n            <ion-item (click)=\"edit_invitation(invitation)\"><ion-label><b>{{invitation.event_name | uppercase}}</b></ion-label>\n              <img class=\"img-icon\" src=\"assets/arrow.png\"  style=\"margin-top:0px;\">\n              <!-- <ion-icon  name=\"arrow-forward\" ></ion-icon> -->\n            </ion-item>\n          </ion-list>\n  </ion-content>\n  <footer class=\"footer\">\n      <div style=\"float:left;\">\n        <img src=\"assets/72x72.png\">\n      </div>\n      <div style=\"float:left;\">\n        <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n      </div>\n      <div style=\"float:right;margin-top: 15px;\">\n          <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n      </div>\n    \n    </footer>\n  "

/***/ }),

/***/ "./src/app/invitation/invitation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/invitation/invitation.module.ts ***!
  \*************************************************/
/*! exports provided: InvitationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationPageModule", function() { return InvitationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _invitation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invitation.page */ "./src/app/invitation/invitation.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let InvitationPageModule = class InvitationPageModule {
};
InvitationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                    component: _invitation_page__WEBPACK_IMPORTED_MODULE_7__["InvitationPage"]
                }
            ])
        ],
        declarations: [_invitation_page__WEBPACK_IMPORTED_MODULE_7__["InvitationPage"]]
    })
], InvitationPageModule);



/***/ }),

/***/ "./src/app/invitation/invitation.page.scss":
/*!*************************************************!*\
  !*** ./src/app/invitation/invitation.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\n.sub-header {\n  --background: #989898;\n  color: white;\n  margin-top: 10px;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-family: \"oswald\";\n  font-weight: normal;\n}\n\nion-content ion-toolbar ion-title {\n  left: 0;\n}\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: \"Oswald\" !important;\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important;\n}\n\n.ion-list {\n  display: contents !important;\n}\n\n.img-icon {\n  max-width: 100%;\n  border: 0;\n  height: 25px !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2ludml0YXRpb24vaW52aXRhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2ludml0YXRpb24vaW52aXRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQ0FKOztBREdDO0VBQW9CLGdCQUFBO0VBQ2pCLGtCQUFBO0FDQ0o7O0FERUM7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQUE7QUNFSjs7QURDQztFQUNHLGtCQUFBO0FDRUo7O0FEQUM7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0dIOztBREFDO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNHSDs7QUREQztFQUNFLE9BQUE7QUNJSDs7QUREQztFQUNFLGdDQUFBO0FDSUg7O0FERkM7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDS0Y7O0FESEE7RUFDRSw0QkFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGF0aW9uL2ludml0YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gXG4gOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuIH1cbiBcbiA6Oi1tb3otcGxhY2Vob2xkZXIgeyAgLyogRmlyZWZveCAxOSsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiB9XG4gXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuIH1cbiAuc3ViLWhlYWRlciB7XG4gICAtLWJhY2tncm91bmQ6ICM5ODk4OTg7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIG1hcmdpbi10b3A6MTBweDtcblxuIH1cbiBpb24tdGl0bGUge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiAwO1xuICAgbGVmdDogNDU7XG4gICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBmb250LWZhbWlseTogJ29zd2FsZCc7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuIH1cbiBpb24tY29udGVudCBpb24tdG9vbGJhciBpb24tdGl0bGV7XG4gICBsZWZ0OiAwO1xuXG4gfVxuIC5pdGVtLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gICBmb250LWZhbWlseTogJ09zd2FsZCcgIWltcG9ydGFudDtcbiB9XG4gLmxpc3QtbWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudCA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLmlvbi1saXN0IHtcbiAgZGlzcGxheTpjb250ZW50cyAhaW1wb3J0YW50O1xufVxuLmltZy1pY29uIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiBcbiIsIjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICM5ODk4OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDQ1O1xuICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBsZWZ0OiAwO1xufVxuXG4uaXRlbS5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmlvbi1saXN0IHtcbiAgZGlzcGxheTogY29udGVudHMgIWltcG9ydGFudDtcbn1cblxuLmltZy1pY29uIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/invitation/invitation.page.ts":
/*!***********************************************!*\
  !*** ./src/app/invitation/invitation.page.ts ***!
  \***********************************************/
/*! exports provided: InvitationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationPage", function() { return InvitationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let InvitationPage = class InvitationPage {
    constructor(translate, alertController, userService, router) {
        this.translate = translate;
        this.alertController = alertController;
        this.userService = userService;
        this.router = router;
        this.formData = {};
        this.images = [];
        let lang = localStorage.getItem('language');
        if (lang) {
            this.translate.use(lang);
        }
    }
    ngOnInit() {
        // this.invitation_list();
    }
    ionViewDidEnter() {
        this.invitation_list();
        console.log(this.translate, '#########################');
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
    // ************************ Redirct To Thumbnail Images Page ***************************//
    invitation_list() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoader = true;
            this.userId = localStorage.getItem('userId');
            localStorage.removeItem('image');
            yield this.userService.invitations(this.userId)
                .subscribe(res => {
                this.invitations = res['data'];
                this.isLoader = false;
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
    edit_invitation(invitation) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.removeItem('invitationId');
            localStorage.removeItem('names');
            localStorage.removeItem('guests');
            localStorage.removeItem('isGuestSelected');
            yield this.userService.getInvitation(invitation._id)
                .subscribe(res => {
                let data = res['data'];
                localStorage.setItem('invitationId', data._id);
                localStorage.setItem('guests', data.no_of_guest);
                localStorage.setItem('isGuestSelected', data.isGuestSelected);
                if (data.isGuestSelected) {
                    this.router.navigate(['/thumbnails']);
                }
                else {
                    this.router.navigate(['/invitation-type']);
                }
            }, err => {
                this.alertMessage(err.error.message);
            });
        });
    }
    // ************************ Guest List ***************************//
    guest_list(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userId = localStorage.getItem('userId');
            localStorage.removeItem('names');
            yield this.userService.guest_list(userId, id)
                .subscribe(res => {
                this.names = res['data'];
                localStorage.setItem('names', JSON.stringify(this.names));
                this.router.navigate(['/thumbnails']);
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
        this.router.navigate(['/create-invitation']);
    }
};
InvitationPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InvitationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invitation',
        template: __webpack_require__(/*! raw-loader!./invitation.page.html */ "./node_modules/raw-loader/index.js!./src/app/invitation/invitation.page.html"),
        styles: [__webpack_require__(/*! ./invitation.page.scss */ "./src/app/invitation/invitation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], InvitationPage);



/***/ })

}]);
//# sourceMappingURL=invitation-invitation-module-es2015.js.map