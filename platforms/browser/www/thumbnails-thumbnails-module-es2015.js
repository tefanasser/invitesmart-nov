(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thumbnails-thumbnails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/thumbnails/thumbnails.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thumbnails/thumbnails.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar class=\"headertm\" style=\"padding-top: 20px !important;\n    padding-bottom: 10px !important;\n    margin-bottom: 20px;\">\n        <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n        <ion-row>\n            <ion-col size=2>\n                <button type=\"submit\" routerLink=\"/invitation\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n                    color=\"light\">{{'page.back' | translate}}</button>\n            </ion-col>\n            <ion-col size=5>\n                <button type=\"submit\" style=\"margin-left: 14px;\" routerLink=\"/scan-guest\" class=\"btn thumb-nail-button\"\n                    color=\"light\">{{'page.scan' | translate}}</button>\n            </ion-col>\n            <ion-col size=3 style=\"margin-top: 18px;\">\n                <div class=\"title main-header\" style=\"margin-right:1px;\"><span\n                        style=\"margin:-14px;\">{{'page.add_guest' | translate}}</span></div>\n            </ion-col>\n            <!-- <ion-col size=1> -->\n            <ion-icon (click)=\"guests()\" ios=\"ios-add-circle\" md=\"md-add-circle\" class=\"plus-icon\"></ion-icon>\n            <!-- </ion-col> -->\n\n        </ion-row>\n\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <!-- <h2 style=\"margin-left:30px;\">Comming Soon</h2> -->\n    <ion-toolbar text-center class=\"sub-header\">\n      <span *ngIf=\"totalGuests\" style=\"float:left;margin-left:10px;color:#3E51B5\"><b>{{guestCount}} / {{totalGuests}}</b></span>  \n        <div *ngIf=\"images.length > 0\" style=\"margin-left:10px\">{{images[0].invitationId.event_name}}</div>\n    </ion-toolbar>\n    <!-- <ion-fab *ngIf=\"!isLoader\">\n            <ion-fab-button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</ion-fab-button>\n    </ion-fab> -->\n    <ion-grid class=\"mgbottom20\">\n        <!-- Item Dividers in a List -->\n        <div *ngIf=\"isLoader\" style=\"margin-left:49%;\">\n            <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n        <div style=\"justify-content: center;\" text-center>\n            <span *ngFor=\"let item of images; let i = index;\" style=\"width:auto; float:left;\">\n                <ion-card class=\"card\">\n                    <span *ngIf=\"item._id\">\n                        <span class=\"del-b\" (click)=\"deleteRecord(item._id)\">\n                            <ion-icon name=\"trash\"></ion-icon>\n                        </span>\n                        <div class=\"container\">\n                            <img [src]=\"item?.invitationId?.invitation_image ? item?.invitationId?.invitation_image: 'assets/default_image.png'\"\n                                class=\"thumbnail-image\" />\n                                <ion-icon style=\"float:left;padding-top: 6px;\" *ngIf=\"item._id\" class=\"share-icon-style\"\n                                (click)=\"shareModal(item)\" name=\"share\"></ion-icon>\n                        </div>\n                    </span>\n                    <span style=\"\">\n                        <!-- <ion-card-title style=\"float:left;\" *ngIf=\"!name\"> {{item.image_code}}</ion-card-title> -->\n                        <ion-card-title\n                            class=\"share-tilte-text\">\n                            <span *ngIf=\"item.name\">{{item.name}}</span>\n                            <span *ngIf=\"item._id && !item.name\" style=\"font-size: 15px;\"><span>{{item.invitationId.event_id}}</span><span style=\"color: hsl(60, 48%, 49%);\">{{item.invitationCode}}</span></span>\n                            <span *ngIf=\"!item._id\">{{item.invitationCode}}</span>\n                        </ion-card-title>\n                      \n                    </span>\n                </ion-card>\n            </span>\n        </div>\n        <!-- <ion-row *ngIf=\"!isLoader\"text-center style=\"width:100% !important; display: inline-block; margin-left:100px;\">\n            <button routerLink=\"/invitation\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n                color=\"light\">Back</button>\n        </ion-row> -->\n\n    </ion-grid>\n\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n        <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n        <span class=\"footer-text\"><a href=\"https://invitesmartapp.com\" target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/thumbnails/thumbnails.module.ts":
/*!*************************************************!*\
  !*** ./src/app/thumbnails/thumbnails.module.ts ***!
  \*************************************************/
/*! exports provided: ThumbnailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsPageModule", function() { return ThumbnailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _thumbnails_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thumbnails.page */ "./src/app/thumbnails/thumbnails.page.ts");








const routes = [
    {
        path: '',
        component: _thumbnails_page__WEBPACK_IMPORTED_MODULE_7__["ThumbnailsPage"]
    }
];
let ThumbnailsPageModule = class ThumbnailsPageModule {
};
ThumbnailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_thumbnails_page__WEBPACK_IMPORTED_MODULE_7__["ThumbnailsPage"]]
    })
], ThumbnailsPageModule);



/***/ }),

/***/ "./src/app/thumbnails/thumbnails.page.scss":
/*!*************************************************!*\
  !*** ./src/app/thumbnails/thumbnails.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\n.sub-header {\n  --background: #D3D1D1;\n  color: white;\n  text-align: center;\n  margin-top: 10px;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  text-align: center;\n  font-family: \"oswald\";\n  font-weight: normal;\n  z-index: -1;\n  display: inline-block;\n  margin-top: 10px;\n}\n\nion-content ion-toolbar ion-title {\n  left: 0;\n}\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: \"Oswald\" !important;\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important;\n}\n\n.ion-list {\n  display: contents !important;\n}\n\n.mgbottom20 img {\n  width: 100% !important;\n  border: 0;\n  height: 95px !important;\n  font-weight: bold;\n  padding: 5px;\n}\n\n.card {\n  background-color: #D3D1D1;\n  width: 150px;\n  height: auto;\n}\n\n.plus-icon {\n  zoom: 3;\n  color: #3E51B5;\n  margin-top: 3px;\n  height: auto;\n}\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 6px;\n  margin-top: 5px;\n  z-index: 99999;\n}\n\nion-toast.success .toast-wrapper {\n  background: white !important;\n  width: 400px;\n  height: 300px;\n}\n\nion-toast.error .toast-wrapper {\n  background: #d14747;\n}\n\n.modalCss {\n  height: 80% !important;\n}\n\n.sc-ion-modal-md-h {\n  --width: 75% !important;\n  --height: 80% !important;\n}\n\n.scan-button {\n  position: fixed;\n  border-radius: 29px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  margin: 45px;\n  float: left;\n  --background:#3E51B5;\n  --border-radius:29px;\n  right: 3vh;\n}\n\n.ion-header {\n  height: 0px !important;\n}\n\nion-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.cross-icon {\n  float: left;\n  color: black;\n  height: 30px;\n  font-weight: bold;\n  font-size: 15px;\n  padding: 10px 0px 0px 10px;\n}\n\n.del-b {\n  float: right;\n  padding-right: 10px;\n  padding-top: 5px;\n  color: black;\n  font-size: 20px;\n}\n\n.share-tilte-text {\n  word-wrap: break-word;\n  width: auto;\n  float: left;\n  font-size: 15px;\n  margin: 5px 0px 5px 5px;\n  color: black;\n  font-weight: bold;\n}\n\n.container {\n  position: relative;\n  margin-top: 30px;\n}\n\n.container img {\n  display: block;\n  opacity: 0.5;\n}\n\n.container .share-icon-style {\n  position: absolute;\n  bottom: 19px;\n  left: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3RodW1ibmFpbHMvdGh1bWJuYWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RodW1ibmFpbHMvdGh1bWJuYWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQ0FKOztBREdDO0VBQW9CLGdCQUFBO0VBQ2pCLGtCQUFBO0FDQ0o7O0FERUM7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQUE7QUNFSjs7QURDQztFQUNHLGtCQUFBO0FDRUo7O0FEQUM7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR0g7O0FEREM7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBSUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDSDs7QURFQztFQUNFLE9BQUE7QUNDSDs7QURFQztFQUNFLGdDQUFBO0FDQ0g7O0FEQ0M7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQUE7RUFDRSw0QkFBQTtBQ0dGOztBRERBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNJRjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNFLE9BQUE7RUFBVyxjQUFBO0VBQ1gsZUFBQTtFQUNBLFlBQUE7QUNPRjs7QURKQTtFQUNFLFlBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDT0o7O0FETEE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUUY7O0FETEE7RUFDQyxtQkFBQTtBQ1FEOztBRE5BO0VBQ0Usc0JBQUE7QUNTRjs7QURQQTtFQUNFLHVCQUFBO0VBQ0Qsd0JBQUE7QUNVRDs7QURSQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUVBLFVBQUE7QUNTRjs7QURQQTtFQUNFLHNCQUFBO0FDVUY7O0FESkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNPRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNRRjs7QUROQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNTRjs7QURQQTtFQUFhLGtCQUFBO0VBQW1CLGdCQUFBO0FDWWhDOztBRFhBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNjRiIsImZpbGUiOiJzcmMvYXBwL3RodW1ibmFpbHMvdGh1bWJuYWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gfVxuIFxuIDo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuIH1cbiBcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gfVxuIC5zdWItaGVhZGVyIHtcbiAgIC0tYmFja2dyb3VuZDogI0QzRDFEMTtcbiAgIGNvbG9yOndoaXRlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLXRvcDoxMHB4O1xuIH1cbiBpb24tdGl0bGUge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiAwO1xuICAgbGVmdDogNDU7XG4vLyAgICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICAvLyAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgLy8gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC1mYW1pbHk6ICdvc3dhbGQnO1xuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgIHotaW5kZXg6IC0xO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgbWFyZ2luLXRvcDoxMHB4O1xuXG4gfVxuIGlvbi1jb250ZW50IGlvbi10b29sYmFyIGlvbi10aXRsZXtcbiAgIGxlZnQ6IDA7XG5cbiB9XG4gLml0ZW0uc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJyAhaW1wb3J0YW50O1xuIH1cbiAubGlzdC1tZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50IDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW9uLWxpc3Qge1xuICBkaXNwbGF5OmNvbnRlbnRzICFpbXBvcnRhbnQ7XG59XG4ubWdib3R0b20yMCBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogOTVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzo1cHg7XG59XG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDFEMTtcbiAgICB3aWR0aDoxNTBweDsgXG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLnBsdXMtaWNvbiB7XG4gIHpvb206IDMuMDsgY29sb3I6ICMzRTUxQjU7XG4gIG1hcmdpbi10b3A6M3B4O1xuICBoZWlnaHQ6YXV0bztcblxufVxuLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gICAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cbmlvbi10b2FzdC5zdWNjZXNzIC50b2FzdC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgd2lkdGg6NDAwcHg7XG4gIGhlaWdodDozMDBweDtcbn1cblxuaW9uLXRvYXN0LmVycm9yIC50b2FzdC13cmFwcGVyIHtcblx0YmFja2dyb3VuZDogcmdiKDIwOSwgNzEsIDcxKTtcbn1cbi5tb2RhbENzcyB7XG4gIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG59XG4uc2MtaW9uLW1vZGFsLW1kLWgge1xuICAtLXdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAtLWhlaWdodDogODAlICFpbXBvcnRhbnQ7XG59XG4uc2Nhbi1idXR0b24ge1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgLy8gcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgbWFyZ2luOiA0NXB4O1xuICBmbG9hdDogbGVmdDtcbiAgLS1iYWNrZ3JvdW5kOiMzRTUxQjU7XG4gIC0tYm9yZGVyLXJhZGl1czoyOXB4O1xuICAvLyBib3R0b206IDN2aDtcbiAgcmlnaHQ6IDN2aDtcbn1cbi5pb24taGVhZGVyIHtcbiAgaGVpZ2h0OjBweCAhaW1wb3J0YW50O1xufVxuLy8gLnRpdGxlIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbi8vIH1cbmlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY3Jvc3MtaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIC8vIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxMHB4O1xufVxuLmRlbC1iIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5zaGFyZS10aWx0ZS10ZXh0IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA1cHggMHB4IDVweCA1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIHsgcG9zaXRpb246IHJlbGF0aXZlO21hcmdpbi10b3A6IDMwcHg7IH1cbi5jb250YWluZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNvbnRhaW5lciAuc2hhcmUtaWNvbi1zdHlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxOXB4O1xuICBsZWZ0OiA0M3B4O1xufVxuXG4iLCI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNEMUQxO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDQ1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBsZWZ0OiAwO1xufVxuXG4uaXRlbS5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmlvbi1saXN0IHtcbiAgZGlzcGxheTogY29udGVudHMgIWltcG9ydGFudDtcbn1cblxuLm1nYm90dG9tMjAgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDk1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMUQxO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnBsdXMtaWNvbiB7XG4gIHpvb206IDM7XG4gIGNvbG9yOiAjM0U1MUI1O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB6LWluZGV4OiA5OTk5OTtcbn1cblxuaW9uLXRvYXN0LnN1Y2Nlc3MgLnRvYXN0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbmlvbi10b2FzdC5lcnJvciAudG9hc3Qtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNkMTQ3NDc7XG59XG5cbi5tb2RhbENzcyB7XG4gIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24tbW9kYWwtbWQtaCB7XG4gIC0td2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5zY2FuLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgbWFyZ2luOiA0NXB4O1xuICBmbG9hdDogbGVmdDtcbiAgLS1iYWNrZ3JvdW5kOiMzRTUxQjU7XG4gIC0tYm9yZGVyLXJhZGl1czoyOXB4O1xuICByaWdodDogM3ZoO1xufVxuXG4uaW9uLWhlYWRlciB7XG4gIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcbn1cblxuLmRlbC1iIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNoYXJlLXRpbHRlLXRleHQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDVweCAwcHggNXB4IDVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNvbnRhaW5lciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29udGFpbmVyIC5zaGFyZS1pY29uLXN0eWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE5cHg7XG4gIGxlZnQ6IDQzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/thumbnails/thumbnails.page.ts":
/*!***********************************************!*\
  !*** ./src/app/thumbnails/thumbnails.page.ts ***!
  \***********************************************/
/*! exports provided: ThumbnailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsPage", function() { return ThumbnailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_share_modal_share_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/share-modal/share-modal.page */ "./src/app/modal/share-modal/share-modal.page.ts");
/* harmony import */ var _modal_scan_scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/scan/scan.page */ "./src/app/modal/scan/scan.page.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");












let ThumbnailsPage = class ThumbnailsPage {
    constructor(translate, toastController, alertController, userService, qrScanner, modalController, socialSharing, route, router) {
        this.translate = translate;
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
        this.names = [];
        this.userId = localStorage.getItem('userId');
        this.invitationId = localStorage.getItem('invitationId');
        this.tInvites = [];
        this.lang = localStorage.getItem('language');
        if (this.lang) {
            this.translate.use(this.lang);
        }
    }
    ngOnInit() {
        // this.invitation = JSON.parse(localStorage.getItem('invitation'));
        // if(this.invitationId){
        //   this.guest_list();
        //   console.log(this.userId, this.invitationId)
        // }
        this.get_invitation();
    }
    ionViewDidEnter() {
        this.get_invitation();
        this.invitation = JSON.parse(localStorage.getItem('invitation'));
        if (this.invitationId) {
            this.guest_list();
            console.log(this.userId, this.invitationId);
        }
    }
    // ************************ Guest List ***************************//
    guest_list() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoader = true;
            let code = 0;
            let value;
            this.names = [];
            this.images = [];
            yield this.userService.guest_list(this.userId, this.invitationId)
                .subscribe(res => {
                this.isLoader = false;
                this.names = res['data'];
                console.log(this.names, '$$$$$%%%%');
                this.totalGuests = this.invitation && this.invitation.no_of_guest ? this.invitation.no_of_guest : 0;
                this.images = res['data'];
                let numbers = parseInt(this.invitation.no_of_guest) - parseInt(this.names.length);
                for (var i = 0; i < numbers; i++) {
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
                    let data = { _id: '', name: '', userId: this.userId, invitationId: this.invitation, isGuest: true, invitationCode: value };
                    this.images.push(data);
                    console.log(this.images, '$$$$$%%%%');
                }
                let guests = res['data'];
                let getCount = [];
                // let emptyInvites = []
                for (var i = 0; i < guests.length; i++) {
                    if (guests[i].name !== '') {
                        getCount.push(guests[i]);
                    }
                }
                this.guestCount = getCount.length;
                // this.tInvites = emptyInvites.length;
                console.log(this.guestCount, '23213221321');
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
    // *************************** Redirect To Event Detail Page ******************************//
    detail(item) {
        let image = item.invitationId.invitation_image ? item._id ? item.invitationId.invitation_image : '' : item._id ? 'assets/default_image.png' : '';
        this.qrCode = { id: item._id, invitationCode: item.invitationId.event_id, isScanned: item.isScanned, invitationId: item.invitationId._id };
        let detail = { invitationId: item.invitationId._id, image: image, event_id: item.invitationId.event_id, name: item.name, isScanned: item.isScanned, invitationCode: item.invitationCode };
        localStorage.removeItem('qrCode');
        localStorage.setItem('qrCode', JSON.stringify(this.qrCode));
        localStorage.removeItem('detail');
        localStorage.setItem('detail', JSON.stringify(detail));
        this.router.navigate(['/detail']);
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
    // **************************** Open Share Invitation Modal ********************************//
    socialShare(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getGuestInfo(data);
        });
    }
    messageToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    scanqrCode() {
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then((status) => {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                let scanSub = this.qrScanner.scan().subscribe((text) => {
                    console.log('Scanned something', text);
                    let data = JSON.parse(text);
                    this.qrScanner.hide(); // hide camera preview
                    scanSub.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch((e) => console.log('Error is', e));
    }
    shareModal(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let image = data.invitationId.invitation_image != null ? data.invitationId.invitation_image : 'assets/default_image.png';
            this.qrCode = { id: data._id, guest_number: data.image_code, isScanned: data.isScanned, invitationId: data.invitationId._id };
            localStorage.removeItem('qrCode');
            localStorage.removeItem('image');
            localStorage.setItem('image', image);
            localStorage.setItem('qrCode', JSON.stringify(this.qrCode));
            const modal = yield this.modalController.create({
                component: _modal_share_modal_share_modal_page__WEBPACK_IMPORTED_MODULE_5__["ShareModalPage"],
                cssClass: 'my-custom-modal',
                componentProps: { invitationId: data.invitationId, image: image, event_id: data.invitationId.event_id, name: data.name, scanned_value: data.isScanned, image_code: data.invitationCode, qrCode: JSON.stringify(this.qrCode) }
            });
            return yield modal.present();
        });
    }
    messageModal(record) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_scan_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"],
                cssClass: 'modalCss',
                componentProps: { name: record.name, isScanned: record.isScanned }
            });
            return yield modal.present();
        });
    }
    // ************************ Redirct To Thumbnail Images Page ***************************//
    getGuestInfo(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data.id) {
                yield this.userService.getGuestName(data.id)
                    .subscribe(res => {
                    this.data = res['data'];
                    console.log(this.data, 'info');
                    // if(value == true) {
                    localStorage.removeItem('qrCode');
                    localStorage.setItem('qrCode', JSON.stringify(this.qrCode));
                    // } else {
                    //   if(this.data.isScanned == true) {
                    //     let rec = {isScanned: this.data.isScanned, name: this.data.name}
                    //     this.messageModal(rec);
                    //   } else {
                    //     this.update_guest(this.data._id);
                    //   }
                    // }
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
            else {
                this.data = {};
            }
        });
    }
    // ************************ Redirct To Thumbnail Images Page ***************************//
    update_guest(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.userService.updateGuest({ id: id })
                .subscribe(res => {
                let result = res['data'];
                let rec = { isScanned: false, name: this.data.name };
                this.messageModal(rec);
            }, err => {
                this.alertMessage(err.error.message);
            });
        });
    }
    successMessage(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    guests() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoader = true;
            yield this.userService.guest_list(this.userId, this.invitationId)
                .subscribe(res => {
                this.isLoader = false;
                let arrLength = res['data'].length;
                if (res) {
                    this.check_guest(arrLength);
                }
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
    check_guest(arrLength) {
        console.log(arrLength, this.invitation.no_of_guest);
        if (arrLength == this.invitation.no_of_guest) {
            this.router.navigate(['/choose-package'], { queryParams: { paidPlan: false } });
        }
        else {
            this.router.navigate(['/add-names']);
        }
    }
    goTo() {
        this.router.navigate(['/add-names']);
    }
    // ************************ Delete Records ***************************//
    deleteRecord(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let message = this.lang == 'en' ? '"You want to delete this guest."' : 'هل ترغب بالحذف ؟';
            var result = confirm(message);
            if (result) {
                yield this.userService.delete(id)
                    .subscribe(res => {
                    let message = 'Guest deleted successfully.';
                    this.successMessage(message);
                    this.guest_list();
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
};
ThumbnailsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["QRScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ThumbnailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thumbnails',
        template: __webpack_require__(/*! raw-loader!./thumbnails.page.html */ "./node_modules/raw-loader/index.js!./src/app/thumbnails/thumbnails.page.html"),
        styles: [__webpack_require__(/*! ./thumbnails.page.scss */ "./src/app/thumbnails/thumbnails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["QRScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ThumbnailsPage);



/***/ })

}]);
//# sourceMappingURL=thumbnails-thumbnails-module-es2015.js.map