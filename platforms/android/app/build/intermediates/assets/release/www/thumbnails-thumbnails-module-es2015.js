(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thumbnails-thumbnails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/thumbnails/thumbnails.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thumbnails/thumbnails.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar class=\"headertm\" style=\"padding-top: 20px !important;\n    padding-bottom: 10px !important;\n    margin-bottom: 20px;\">\n        <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n        <ion-row>\n            <ion-col size=2>\n                <button type=\"submit\" routerLink=\"/invitation\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n                    color=\"light\">{{'page.back' | translate}}</button>\n            </ion-col>\n            <ion-col size=5>\n                <button type=\"submit\" style=\"margin-left: 14px;\" routerLink=\"/scan-guest\" class=\"btn thumb-nail-button\"\n                    color=\"light\">{{'page.scan' | translate}}</button>\n            </ion-col>\n            <ion-col size=3 style=\"margin-top: 18px;\">\n                <div class=\"title main-header\" style=\"margin-right:1px;\"><span\n                        style=\"margin:-14px;\">{{'page.add_guest' | translate}}</span></div>\n            </ion-col>\n            <!-- <ion-col size=1> -->\n            <ion-icon (click)=\"guests()\" ios=\"ios-add-circle\" md=\"md-add-circle\" class=\"plus-icon\"></ion-icon>\n            <!-- </ion-col> -->\n\n        </ion-row>\n\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <!-- <h2 style=\"margin-left:30px;\">Comming Soon</h2> -->\n    <ion-toolbar text-center class=\"sub-header\">\n      <span *ngIf=\"totalGuests\" style=\"float:left;margin-left:10px;color:#3E51B5\"><b>{{guestCount}} / {{totalGuests}}</b></span>  \n        <div *ngIf=\"images.length > 0\" style=\"margin-left:10px\">{{images[0].invitationId.event_name}}</div>\n    </ion-toolbar>\n    <!-- <ion-fab *ngIf=\"!isLoader\">\n            <ion-fab-button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</ion-fab-button>\n    </ion-fab> -->\n    <ion-grid class=\"mgbottom20\">\n        <!-- Item Dividers in a List -->\n        <div *ngIf=\"isLoader\" style=\"margin-left:49%;\">\n            <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n        <div style=\"justify-content: center;\" text-center>\n            <span *ngFor=\"let item of images; let i = index;\" style=\"width:auto; float:left;\">\n                <ion-card class=\"card\">\n                    <span *ngIf=\"item._id\">\n                        <span class=\"del-b\" (click)=\"deleteRecord(item._id)\">\n                            <ion-icon name=\"trash\"></ion-icon>\n                        </span>\n                        <div class=\"container\">\n                            <img [src]=\"item?.invitationId?.invitation_image ? item?.invitationId?.invitation_image: 'assets/default_image.png'\"\n                                class=\"thumbnail-image\" />\n                                <ion-icon style=\"float:left;padding-top: 6px;\" *ngIf=\"item._id\" class=\"share-icon-style\"\n                                (click)=\"shareModal(item)\" name=\"share\"></ion-icon>\n                        </div>\n                    </span>\n                    <span >\n                        <!-- <ion-card-title style=\"float:left;\" *ngIf=\"!name\"> {{item.image_code}}</ion-card-title> -->\n                        <ion-card-title\n                            class=\"share-tilte-text ion-text-center\" style=\"width:100%;\">\n                            <span *ngIf=\"item.name\">{{item.name}}</span>\n                            <span *ngIf=\"item._id && !item.name\" style=\"font-size: 15px;\"><span>{{item.invitationId.event_id}}</span><span style=\"color: hsl(60, 48%, 49%);\">{{item.invitationCode}}</span></span>\n                            <span *ngIf=\"!item._id\" style=\"padding:15px 20px 15px 40px;font-size:30px;float:left;\">{{item.invitationCode}}</span>\n                        </ion-card-title>\n                      \n                    </span>\n                </ion-card>\n            </span>\n        </div>\n        <!-- <ion-row *ngIf=\"!isLoader\"text-center style=\"width:100% !important; display: inline-block; margin-left:100px;\">\n            <button routerLink=\"/invitation\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n                color=\"light\">Back</button>\n        </ion-row> -->\n\n    </ion-grid>\n\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n        <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n        <span class=\"footer-text\"><a href=\"https://invitesmartapp.com\" target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n    <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n\n</footer>"

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

module.exports = "::-webkit-input-placeholder {\n  text-align: center; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center; }\n\n:-ms-input-placeholder {\n  text-align: center; }\n\n.sub-header {\n  --background: #D3D1D1;\n  color: white;\n  text-align: center;\n  margin-top: 10px; }\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 45;\n  text-align: center;\n  font-family: 'oswald';\n  font-weight: normal;\n  z-index: -1;\n  display: inline-block;\n  margin-top: 10px; }\n\nion-content ion-toolbar ion-title {\n  left: 0; }\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h {\n  font-family: 'Oswald' !important; }\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0px !important;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px !important; }\n\n.ion-list {\n  display: contents !important; }\n\n.mgbottom20 img {\n  width: 100% !important;\n  border: 0;\n  height: 95px !important;\n  font-weight: bold;\n  padding: 5px; }\n\n.card {\n  background-color: #D3D1D1;\n  width: 150px;\n  height: auto; }\n\n.plus-icon {\n  zoom: 3.0;\n  color: #3E51B5;\n  margin-top: 3px;\n  height: auto; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 6px;\n  margin-top: 5px;\n  z-index: 99999; }\n\nion-toast.success .toast-wrapper {\n  background: white !important;\n  width: 400px;\n  height: 300px; }\n\nion-toast.error .toast-wrapper {\n  background: #d14747; }\n\n.modalCss {\n  height: 80% !important; }\n\n.sc-ion-modal-md-h {\n  --width: 75% !important;\n  --height: 80% !important; }\n\n.scan-button {\n  position: fixed;\n  border-radius: 29px;\n  font-size: 20px;\n  font-family: \"oswald\";\n  margin: 45px;\n  float: left;\n  --background:#3E51B5;\n  --border-radius:29px;\n  right: 3vh; }\n\n.ion-header {\n  height: 0px !important; }\n\nion-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.cross-icon {\n  float: left;\n  color: black;\n  height: 30px;\n  font-weight: bold;\n  font-size: 15px;\n  padding: 10px 0px 0px 10px; }\n\n.del-b {\n  float: right;\n  padding-right: 10px;\n  padding-top: 5px;\n  color: black;\n  font-size: 20px; }\n\n.share-tilte-text {\n  word-wrap: break-word;\n  width: auto;\n  float: left;\n  font-size: 15px;\n  margin: 5px 0px 5px 5px;\n  color: black;\n  font-weight: bold; }\n\n.container {\n  position: relative;\n  margin-top: 30px; }\n\n.container img {\n  display: block;\n  opacity: 0.5; }\n\n.container .share-icon-style {\n  position: absolute;\n  bottom: 19px;\n  left: 43px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlbm92bzAzL0Rlc2t0b3AvcHJvamVjdC9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3RodW1ibmFpbHMvdGh1bWJuYWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBa0IsRUFBQTs7QUFHckI7RUFBb0IsZ0JBQUE7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3JCO0VBQXNCLGdCQUFBO0VBQ25CLGtCQUFrQixFQUFBOztBQUdyQjtFQUNHLGtCQUFrQixFQUFBOztBQUVyQjtFQUNFLHFCQUFhO0VBQ2IsWUFBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUlSLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxPQUFPLEVBQUE7O0FBR1Q7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFFbEM7RUFDQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiw2QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSw0QkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsWUFBVyxFQUFBOztBQUViO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0UsU0FBUztFQUFFLGNBQWM7RUFDekIsZUFBYztFQUNkLFlBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDVix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFDRSw0QkFBNEI7RUFDNUIsWUFBVztFQUNYLGFBQVksRUFBQTs7QUFHZDtFQUNDLG1CQUE0QixFQUFBOztBQUU3QjtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHVCQUFRO0VBQ1Qsd0JBQVMsRUFBQTs7QUFFVjtFQUNFLGVBQWM7RUFDZCxtQkFBbUI7RUFFbkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFhO0VBQ2Isb0JBQWdCO0VBRWhCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLHNCQUFxQixFQUFBOztBQU12QjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBRVosWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFbkI7RUFBYSxrQkFBa0I7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDaEQ7RUFDRSxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aHVtYm5haWxzL3RodW1ibmFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gXG4gOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuIH1cbiBcbiA6Oi1tb3otcGxhY2Vob2xkZXIgeyAgLyogRmlyZWZveCAxOSsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiB9XG4gXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuIH1cbiAuc3ViLWhlYWRlciB7XG4gICAtLWJhY2tncm91bmQ6ICNEM0QxRDE7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIG1hcmdpbi10b3A6MTBweDtcbiB9XG4gaW9uLXRpdGxlIHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMDtcbiAgIGxlZnQ6IDQ1O1xuLy8gICAgcGFkZGluZzogMCA5MHB4IDFweDtcbiAgLy8gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIC8vICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQtZmFtaWx5OiAnb3N3YWxkJztcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICB6LWluZGV4OiAtMTtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIG1hcmdpbi10b3A6MTBweDtcblxuIH1cbiBpb24tY29udGVudCBpb24tdG9vbGJhciBpb24tdGl0bGV7XG4gICBsZWZ0OiAwO1xuXG4gfVxuIC5pdGVtLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gICBmb250LWZhbWlseTogJ09zd2FsZCcgIWltcG9ydGFudDtcbiB9XG4gLmxpc3QtbWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudCA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLmlvbi1saXN0IHtcbiAgZGlzcGxheTpjb250ZW50cyAhaW1wb3J0YW50O1xufVxuLm1nYm90dG9tMjAgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDk1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6NXB4O1xufVxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0QxRDE7XG4gICAgd2lkdGg6MTUwcHg7IFxuICAgIGhlaWdodDogYXV0bztcbn1cbi5wbHVzLWljb24ge1xuICB6b29tOiAzLjA7IGNvbG9yOiAjM0U1MUI1O1xuICBtYXJnaW4tdG9wOjNweDtcbiAgaGVpZ2h0OmF1dG87XG5cbn1cbi50aHVtYi1uYWlsLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICAgIGJvcmRlci1yYWRpdXM6IDI5cHg7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5pb24tdG9hc3Quc3VjY2VzcyAudG9hc3Qtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOjQwMHB4O1xuICBoZWlnaHQ6MzAwcHg7XG59XG5cbmlvbi10b2FzdC5lcnJvciAudG9hc3Qtd3JhcHBlciB7XG5cdGJhY2tncm91bmQ6IHJnYigyMDksIDcxLCA3MSk7XG59XG4ubW9kYWxDc3Mge1xuICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xufVxuLnNjLWlvbi1tb2RhbC1tZC1oIHtcbiAgLS13aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gLS1oZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xufVxuLnNjYW4tYnV0dG9uIHtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI5cHg7XG4gIC8vIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIG1hcmdpbjogNDVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC0tYmFja2dyb3VuZDojM0U1MUI1O1xuICAtLWJvcmRlci1yYWRpdXM6MjlweDtcbiAgLy8gYm90dG9tOiAzdmg7XG4gIHJpZ2h0OiAzdmg7XG59XG4uaW9uLWhlYWRlciB7XG4gIGhlaWdodDowcHggIWltcG9ydGFudDtcbn1cbi8vIC50aXRsZSB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5pb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNyb3NzLWljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICAvLyB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcbn1cbi5kZWwtYiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uc2hhcmUtdGlsdGUtdGV4dCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2lkdGg6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDBweCA1cHggNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciB7IHBvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW4tdG9wOiAzMHB4OyB9XG4uY29udGFpbmVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb250YWluZXIgLnNoYXJlLWljb24tc3R5bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTlweDtcbiAgbGVmdDogNDNweDtcbn1cblxuIl19 */"

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