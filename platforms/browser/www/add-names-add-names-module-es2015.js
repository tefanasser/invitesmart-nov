(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-names-add-names-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-names/add-names.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-names/add-names.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <ion-toolbar style=\"padding-top: 20px !important;\n  padding-bottom: 10px !important;\n  margin-bottom: 20px;\"> \n      <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n      <button type=\"submit\" routerLink=\"/thumbnails\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n          color=\"light\"> {{'page.next' | translate}}</button>\n  </ion-toolbar> \n</ion-header>\n<ion-content class=\"centered container\">\n    <ion-grid class=\"ion-padding-top\">\n        <ion-row>\n          <!-- <ion-col class=\"font-bold mgbottom50 font20\">\n            ENTER THE ONE-TIME<br>PASSWORD SEND TO<br>YOUR PHONE\n          </ion-col> -->\n        </ion-row>\n    <ion-row>\n     <ion-col size=\"12\">\n     \n        <form  class=\"form \" class=\"form-deco form app-form-area\">\n            <div class=\"row\" style=\"text-align: -webkit-center;\">\n                <div class=\"input-group prefix\">\n                  <!-- <ion-item> -->\n                    <textarea [(ngModel)]=\"name\"rows=\"10\" cols=\"29\" placeholder=\"{{'page.please_add_names_or_past' | translate}}\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n                  <!-- </ion-item> -->\n                </div>\n              </div> \n          <!-- <ion-item class=\"create-item create-user-2 united-state-field\" style=\"padding: 0px;border: 1px solid rgb(104, 180, 245);\">\n              <ion-input type=\"number\" class=\"center-block\" [(ngModel)]=\"image_code\" formControlName=\"image_code\"  placeholder=\"Text Box\"></ion-input>\n            </ion-item> -->\n            <!-- <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.image_code\" >\n                <div class=\"error-message\"\n                  *ngIf=\"number_form.get('image_code').hasError(validation.type) && (number_form.get('image_code').dirty || number_form.get('image_code').touched)\">\n                  <ion-icon style=\"color: red;\" ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon><span style=\"color: red;\">{{validation.message}}</span>\n                </div>\n              </ng-container>\n            </div> -->\n            <br>\n          <br>\n\n          <div class=\"row\">\n              <button type=\"submit\"  (click)=\"addNames()\" class=\"btn send-button\"\n                color=\"primary\">{{'page.add_names' | translate}}</button>\n            </div>\n        </form>\n        <div style=\"margin-top:10px !important\" *ngIf=\"isLoader\"><ion-spinner name=\"lines\"></ion-spinner></div>\n        <ion-list *ngFor=\"let user of guests\">\n          <ion-item *ngIf=\"user.name !== ''\"><ion-label ><b>{{user.name | uppercase}}</b></ion-label>\n            <ion-icon class=\"cross-icon-style\" (click)=\"deleteRecord(user._id)\" ios=\"ios-close\" md=\"md-close\"></ion-icon>\n            <!-- <img src=\"assets/arrow.png\"  (click)=\"deleteRecord(user._id)\" style=\"margin-top:0px;\"> -->\n            <!-- <ion-icon  name=\"arrow-forward\" ></ion-icon> -->\n          </ion-item>\n        \n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<footer class=\"footer\">\n    <div style=\"float:left;\">\n      <img src=\"assets/72x72.png\">\n    </div>\n    <div style=\"float:left;\">\n      <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n    </div>\n       <div style=\"float:right;margin-top: 15px;\">\n        <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n    </div>\n  </footer>\n\n"

/***/ }),

/***/ "./src/app/add-names/add-names.module.ts":
/*!***********************************************!*\
  !*** ./src/app/add-names/add-names.module.ts ***!
  \***********************************************/
/*! exports provided: AddNamesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNamesPageModule", function() { return AddNamesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _add_names_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-names.page */ "./src/app/add-names/add-names.page.ts");








const routes = [
    {
        path: '',
        component: _add_names_page__WEBPACK_IMPORTED_MODULE_7__["AddNamesPage"]
    }
];
let AddNamesPageModule = class AddNamesPageModule {
};
AddNamesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_names_page__WEBPACK_IMPORTED_MODULE_7__["AddNamesPage"]]
    })
], AddNamesPageModule);



/***/ }),

/***/ "./src/app/add-names/add-names.page.scss":
/*!***********************************************!*\
  !*** ./src/app/add-names/add-names.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-addon {\n  padding: 6px 15px 6px 12px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  color: #000;\n  text-align: center;\n  background-color: #D3D1D1;\n  border: 9px solid #D3D1D1;\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n  display: table-cell;\n}\n\nion-input {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #D3D1D1;\n  margin: 0;\n}\n\nimg {\n  border-radius: 15px;\n}\n\n.footer img {\n  border-radius: 0px !important;\n}\n\n.suffix input {\n  border-radius: 4px 0px 0px 4px;\n}\n\n.suffix .input-group-addon {\n  border-left: 0;\n  border-radius: 0px 4px 4px 0px;\n}\n\n.input-group-addon.suffix {\n  border-radius: 0px 4px 4px 0px;\n  border-left: 0;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.bottom-fix {\n  bottom: 17%;\n  left: 30%;\n}\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: right;\n  margin-right: 5px;\n  margin-top: 8px;\n}\n\ntextarea {\n  background-color: #D3D1D1 !important;\n  border-radius: 10% !important;\n  padding: 24px 20px 0px 20px;\n}\n\n.cross-icon-style {\n  zoom: 1;\n  margin-bottom: 2px;\n  margin-top: 1px;\n  color: black;\n}\n\n.toolbar-container {\n  height: 65px;\n}\n\n.header-md:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2FkZC1uYW1lcy9hZGQtbmFtZXMucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtbmFtZXMvYWRkLW5hbWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0M7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREVDO0VBRUcsbUJBQUE7QUNBSjs7QURFQztFQUNFLDZCQUFBO0FDQ0g7O0FEQ0M7RUFDRyw4QkFBQTtBQ0VKOztBREFDO0VBQ0csY0FBQTtFQUNBLDhCQUFBO0FDR0o7O0FEREM7RUFDRyw4QkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQztFQUNHLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEM7RUFFRyxXQUFBO0VBQ0EsU0FBQTtBQ0tKOztBREZDO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0tIOztBREhDO0VBQ0csb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDTUo7O0FESkM7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ09IOztBREpBO0VBQ0csWUFBQTtBQ09IOztBRExBO0VBQ0csYUFBQTtBQ1FIIiwiZmlsZSI6InNyYy9hcHAvYWRkLW5hbWVzL2FkZC1uYW1lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIC8vIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIHBhZGRpbmc6IDZweCAxNXB4IDZweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMUQxO1xuICAgIGJvcmRlcjogOXB4IHNvbGlkICNEM0QxRDE7XG4gICAgd2lkdGg6IDElO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuIH1cbiBcbiBpb24taW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI0QzRDFEMTtcbiAgICBtYXJnaW46IDA7XG4gfVxuIGltZ3tcbiAgICAvLyB3aWR0aDo1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiB9XG4gLmZvb3RlciBpbWcge1xuICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIC5zdWZmaXggaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbiB9XG4gLnN1ZmZpeCAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbiB9XG4gLmlucHV0LWdyb3VwLWFkZG9uLnN1ZmZpeCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuIH1cbiAuaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuIH1cbiAuYm90dG9tLWZpeHtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxNyU7XG4gICAgbGVmdDozMCVcbiAgICBcbiB9XG4gLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICAgcGFkZGluZzogMTNweDtcbiAgIGZvbnQtc2l6ZTogMTNweDtcbiAgIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICAgZmxvYXQ6IHJpZ2h0O1xuICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICBtYXJnaW4tdG9wOiA4cHg7XG4gfVxuIHRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMUQxICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjRweCAyMHB4IDBweCAyMHB4O1xuIH1cbiAuY3Jvc3MtaWNvbi1zdHlsZSB7XG4gICB6b29tOiAxO1xuICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgbWFyZ2luLXRvcDogMXB4O1xuICAgY29sb3I6YmxhY2s7XG4gICAvLyBmbG9hdDogcmlnaHQ7XG59XG4udG9vbGJhci1jb250YWluZXIge1xuICAgaGVpZ2h0OiA2NXB4O1xufVxuLmhlYWRlci1tZDphZnRlciB7XG4gICBkaXNwbGF5Om5vbmU7XG59XG4gIiwiLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgcGFkZGluZzogNnB4IDE1cHggNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0QxRDE7XG4gIGJvcmRlcjogOXB4IHNvbGlkICNEM0QxRDE7XG4gIHdpZHRoOiAxJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuaW9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI0QzRDFEMTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZm9vdGVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc3VmZml4IGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xufVxuXG4uc3VmZml4IC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XG59XG5cbi5pbnB1dC1ncm91cC1hZGRvbi5zdWZmaXgge1xuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuXG4uYm90dG9tLWZpeCB7XG4gIGJvdHRvbTogMTclO1xuICBsZWZ0OiAzMCU7XG59XG5cbi50aHVtYi1uYWlsLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgcGFkZGluZzogMTNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0QxRDEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDI0cHggMjBweCAwcHggMjBweDtcbn1cblxuLmNyb3NzLWljb24tc3R5bGUge1xuICB6b29tOiAxO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udG9vbGJhci1jb250YWluZXIge1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-names/add-names.page.ts":
/*!*********************************************!*\
  !*** ./src/app/add-names/add-names.page.ts ***!
  \*********************************************/
/*! exports provided: AddNamesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNamesPage", function() { return AddNamesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let AddNamesPage = class AddNamesPage {
    constructor(translate, toastController, actionSheetController, alertController, userService, formBuilder, router) {
        this.translate = translate;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formData = {};
        this.names = [];
        this.cells = [];
        // ******************************** Form Validation Messages ************************//
        this.validation_messages = {
            'image_code': [
                { type: 'required', message: 'Number is required.' },
                { type: 'pattern', message: 'Number 1 to 100 is allowed.' }
            ]
        };
        this.lang = localStorage.getItem('language');
        if (this.lang) {
            this.translate.use(this.lang);
        }
    }
    ionViewDidEnter() {
        this.userId = localStorage.getItem('userId');
        this.no_of_guest = localStorage.getItem('guests');
        this.invitationId = localStorage.getItem('invitationId');
        this.isGuestSelected = localStorage.getItem('isGuestSelected');
        if (this.invitationId) {
            this.guest_list();
            this.get_invitation();
        }
    }
    ngOnInit() {
        // this.userId = localStorage.getItem('userId')
        // this.no_of_guest = localStorage.getItem('guests');
        // this.invitationId = localStorage.getItem('invitationId');
        // if(this.invitationId){
        //   this.guest_list();
        //   this.get_invitation();
        // }
    }
    // ************************ Update Invitation ***************************//
    update_invitation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let id = localStorage.getItem('invitationId');
            let data = { id: id, no_of_guest: this.invitation.no_of_guest, isGuestSelected: true };
            yield this.userService.updateInvitation(data)
                .subscribe(res => {
                localStorage.removeItem('isGuestSelected');
                let data = res['data'];
                console.log(data, '#######################################');
                localStorage.setItem('isGuestSelected', data.isGuestSelected);
            }, err => {
                this.alertMessage(err.error.message);
            });
        });
    }
    // ************************ Get Invitation ***************************//
    get_invitation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let invitationId = localStorage.getItem('invitationId');
            yield this.userService.getInvitation(invitationId)
                .subscribe(res => {
                this.invitation = res['data'];
                console.log(this.invitation, 'testing');
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
    // ************************ Guest List ***************************//
    guest_list() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.names = [];
            localStorage.removeItem('names');
            this.userId = localStorage.getItem('userId');
            this.invitationId = localStorage.getItem('invitationId');
            this.isLoader = true;
            yield this.userService.guestWithName(this.userId, this.invitationId)
                .subscribe(res => {
                this.names = res['data'];
                this.guests = this.names.filter(user => user.name !== '');
                console.log(this.names, 'testing1234');
                this.isLoader = false;
                localStorage.setItem('names', JSON.stringify(this.names));
            }, err => {
                this.isLoader = false;
                this.router.navigate(['/sign-up']);
            });
        });
    }
    // ************************ Guest List ***************************//
    get_guest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.names = [];
            localStorage.removeItem('names');
            this.userId = localStorage.getItem('userId');
            this.invitationId = localStorage.getItem('invitationId');
            this.isLoader = true;
            yield this.userService.guestWithName(this.userId, this.invitationId)
                .subscribe(res => {
                this.names = res['data'];
                console.log(this.names, 'names');
                this.isLoader = false;
                localStorage.setItem('names', JSON.stringify(this.names));
            }, err => {
                this.isLoader = false;
                this.alertMessage(err.error.message);
                this.router.navigate(['/sign-up']);
            });
        });
    }
    // ************************ Delete Records ***************************//
    deleteRecord(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let message = this.lang == 'en' ? '"You want to delete this guest."' : 'هل ترغب بالحذف ؟';
            var result = confirm(message);
            if (result) {
                yield this.userService.delete(id)
                    .subscribe(res => {
                    let message = this.lang == 'en' ? 'Guest deleted successfully.' : 'تم إضافة الأسماء بنجاح';
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
            this.cells = [];
            let cells = this.name.split(/\r\n|\n/);
            this.cells = cells.filter(function (el) {
                return el != "";
            });
            var value;
            var arr = [];
            var guests;
            if (this.names.length) {
                guests = this.names.length + this.cells.length;
            }
            else {
                guests = this.cells.length;
            }
            let allowedNumber = this.invitation.no_of_guest - this.names.length;
            let code = this.names.length;
            let message;
            if (guests > parseInt(this.invitation.no_of_guest)) {
                if (allowedNumber == 0) {
                    message = "New guest is not allowed.";
                }
                else {
                    message = "Only maximum" + " " + allowedNumber + " " + " guests are allowed";
                }
                this.alertMessage(message);
                this.cells = [];
            }
            else {
                for (var i = 0; i < this.cells.length; i++) {
                    if (this.cells[i]) {
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
                        let data = { name: this.cells[i], userId: this.userId, invitationId: this.invitationId, isGuest: true, invitationCode: '' };
                        arr.push(data);
                    }
                }
                this.isGuestSelected = localStorage.getItem('isGuestSelected');
                let guest = this.isGuestSelected == 'false' ? (this.no_of_guest - this.cells.length) : 0;
                this.isLoader = true;
                yield this.userService.addGuestName({ data: arr })
                    .subscribe(res => {
                    let message = this.lang == 'en' ? 'Guest created successfully.' : 'تم إضافة الأسماء بنجاح';
                    this.successMessage(message);
                    this.isLoader = false;
                    this.update_invitation();
                    this.guest_list();
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
                this.name = '';
            }
        });
    }
    // ************************ Redirct To Thumbnail Images Page ***************************//
    getImages() {
        //  this.router.navigate(['/thumbnails'], { queryParams: {image_code: this.image_code} })
    }
};
AddNamesPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddNamesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-names',
        template: __webpack_require__(/*! raw-loader!./add-names.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-names/add-names.page.html"),
        styles: [__webpack_require__(/*! ./add-names.page.scss */ "./src/app/add-names/add-names.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddNamesPage);



/***/ })

}]);
//# sourceMappingURL=add-names-add-names-module-es2015.js.map