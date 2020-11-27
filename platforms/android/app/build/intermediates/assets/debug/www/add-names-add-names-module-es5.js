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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_names_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-names.page */ "./src/app/add-names/add-names.page.ts");








var routes = [
    {
        path: '',
        component: _add_names_page__WEBPACK_IMPORTED_MODULE_7__["AddNamesPage"]
    }
];
var AddNamesPageModule = /** @class */ (function () {
    function AddNamesPageModule() {
    }
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
    return AddNamesPageModule;
}());



/***/ }),

/***/ "./src/app/add-names/add-names.page.scss":
/*!***********************************************!*\
  !*** ./src/app/add-names/add-names.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-addon {\n  padding: 6px 15px 6px 12px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  color: #000;\n  text-align: center;\n  background-color: #D3D1D1;\n  border: 9px solid #D3D1D1;\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n  display: table-cell; }\n\nion-input {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n  padding: 12px 12px;\n  border: 4px solid #D3D1D1;\n  margin: 0; }\n\nimg {\n  border-radius: 15px; }\n\n.footer img {\n  border-radius: 0px !important; }\n\n.suffix input {\n  border-radius: 4px 0px 0px 4px; }\n\n.suffix .input-group-addon {\n  border-left: 0;\n  border-radius: 0px 4px 4px 0px; }\n\n.input-group-addon.suffix {\n  border-radius: 0px 4px 4px 0px;\n  border-left: 0; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n\n.bottom-fix {\n  bottom: 17%;\n  left: 30%; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: right;\n  margin-right: 5px;\n  margin-top: 8px; }\n\ntextarea {\n  background-color: #D3D1D1 !important;\n  border-radius: 10% !important;\n  padding: 24px 20px 0px 20px; }\n\n.cross-icon-style {\n  zoom: 1;\n  margin-bottom: 2px;\n  margin-top: 1px;\n  color: black; }\n\n.toolbar-container {\n  height: 65px; }\n\n.header-md:after {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlbm92bzAzL0Rlc2t0b3AvcHJvamVjdC9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2FkZC1uYW1lcy9hZGQtbmFtZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFHdEI7RUFDRyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFNBQVMsRUFBQTs7QUFFWjtFQUVHLG1CQUFtQixFQUFBOztBQUV0QjtFQUNFLDZCQUE2QixFQUFBOztBQUUvQjtFQUNHLDhCQUE4QixFQUFBOztBQUVqQztFQUNHLGNBQWM7RUFDZCw4QkFBOEIsRUFBQTs7QUFFakM7RUFDRyw4QkFBOEI7RUFDOUIsY0FBYyxFQUFBOztBQUVqQjtFQUNHLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCLEVBQUE7O0FBRTVCO0VBRUcsV0FBVztFQUNYLFNBRUgsRUFBQTs7QUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVqQjtFQUNHLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsMkJBQTJCLEVBQUE7O0FBRTlCO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdkO0VBQ0csWUFBWSxFQUFBOztBQUVmO0VBQ0csYUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLW5hbWVzL2FkZC1uYW1lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIC8vIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIHBhZGRpbmc6IDZweCAxNXB4IDZweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMUQxO1xuICAgIGJvcmRlcjogOXB4IHNvbGlkICNEM0QxRDE7XG4gICAgd2lkdGg6IDElO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuIH1cbiBcbiBpb24taW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI0QzRDFEMTtcbiAgICBtYXJnaW46IDA7XG4gfVxuIGltZ3tcbiAgICAvLyB3aWR0aDo1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiB9XG4gLmZvb3RlciBpbWcge1xuICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIC5zdWZmaXggaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbiB9XG4gLnN1ZmZpeCAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbiB9XG4gLmlucHV0LWdyb3VwLWFkZG9uLnN1ZmZpeCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuIH1cbiAuaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuIH1cbiAuYm90dG9tLWZpeHtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxNyU7XG4gICAgbGVmdDozMCVcbiAgICBcbiB9XG4gLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICAgcGFkZGluZzogMTNweDtcbiAgIGZvbnQtc2l6ZTogMTNweDtcbiAgIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICAgZmxvYXQ6IHJpZ2h0O1xuICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICBtYXJnaW4tdG9wOiA4cHg7XG4gfVxuIHRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMUQxICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjRweCAyMHB4IDBweCAyMHB4O1xuIH1cbiAuY3Jvc3MtaWNvbi1zdHlsZSB7XG4gICB6b29tOiAxO1xuICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgbWFyZ2luLXRvcDogMXB4O1xuICAgY29sb3I6YmxhY2s7XG4gICAvLyBmbG9hdDogcmlnaHQ7XG59XG4udG9vbGJhci1jb250YWluZXIge1xuICAgaGVpZ2h0OiA2NXB4O1xufVxuLmhlYWRlci1tZDphZnRlciB7XG4gICBkaXNwbGF5Om5vbmU7XG59XG4gIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var AddNamesPage = /** @class */ (function () {
    function AddNamesPage(translate, toastController, actionSheetController, alertController, userService, formBuilder, router) {
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
    AddNamesPage.prototype.ionViewDidEnter = function () {
        this.userId = localStorage.getItem('userId');
        this.no_of_guest = localStorage.getItem('guests');
        this.invitationId = localStorage.getItem('invitationId');
        this.isGuestSelected = localStorage.getItem('isGuestSelected');
        if (this.invitationId) {
            this.guest_list();
            this.get_invitation();
        }
    };
    AddNamesPage.prototype.ngOnInit = function () {
        // this.userId = localStorage.getItem('userId')
        // this.no_of_guest = localStorage.getItem('guests');
        // this.invitationId = localStorage.getItem('invitationId');
        // if(this.invitationId){
        //   this.guest_list();
        //   this.get_invitation();
        // }
    };
    // ************************ Update Invitation ***************************//
    AddNamesPage.prototype.update_invitation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = localStorage.getItem('invitationId');
                        data = { id: id, no_of_guest: this.invitation.no_of_guest, isGuestSelected: true };
                        return [4 /*yield*/, this.userService.updateInvitation(data)
                                .subscribe(function (res) {
                                localStorage.removeItem('isGuestSelected');
                                var data = res['data'];
                                console.log(data, '#######################################');
                                localStorage.setItem('isGuestSelected', data.isGuestSelected);
                            }, function (err) {
                                _this.alertMessage(err.error.message);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ************************ Get Invitation ***************************//
    AddNamesPage.prototype.get_invitation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var invitationId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invitationId = localStorage.getItem('invitationId');
                        return [4 /*yield*/, this.userService.getInvitation(invitationId)
                                .subscribe(function (res) {
                                _this.invitation = res['data'];
                                console.log(_this.invitation, 'testing');
                            }, function (err) {
                                _this.alertMessage(err.error.message);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddNamesPage.prototype.successMessage = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
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
    // ************************ Guest List ***************************//
    AddNamesPage.prototype.guest_list = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.names = [];
                        localStorage.removeItem('names');
                        this.userId = localStorage.getItem('userId');
                        this.invitationId = localStorage.getItem('invitationId');
                        this.isLoader = true;
                        return [4 /*yield*/, this.userService.guestWithName(this.userId, this.invitationId)
                                .subscribe(function (res) {
                                _this.names = res['data'];
                                _this.guests = _this.names.filter(function (user) { return user.name !== ''; });
                                console.log(_this.names, 'testing1234');
                                _this.isLoader = false;
                                localStorage.setItem('names', JSON.stringify(_this.names));
                            }, function (err) {
                                _this.isLoader = false;
                                _this.router.navigate(['/sign-up']);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ************************ Guest List ***************************//
    AddNamesPage.prototype.get_guest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.names = [];
                        localStorage.removeItem('names');
                        this.userId = localStorage.getItem('userId');
                        this.invitationId = localStorage.getItem('invitationId');
                        this.isLoader = true;
                        return [4 /*yield*/, this.userService.guestWithName(this.userId, this.invitationId)
                                .subscribe(function (res) {
                                _this.names = res['data'];
                                console.log(_this.names, 'names');
                                _this.isLoader = false;
                                localStorage.setItem('names', JSON.stringify(_this.names));
                            }, function (err) {
                                _this.isLoader = false;
                                _this.alertMessage(err.error.message);
                                _this.router.navigate(['/sign-up']);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ************************ Delete Records ***************************//
    AddNamesPage.prototype.deleteRecord = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var message, result;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.lang == 'en' ? '"You want to delete this guest."' : 'هل ترغب بالحذف ؟';
                        result = confirm(message);
                        if (!result) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.delete(id)
                                .subscribe(function (res) {
                                var message = _this.lang == 'en' ? 'Guest deleted successfully.' : 'تم إضافة الأسماء بنجاح';
                                _this.successMessage(message);
                                _this.guest_list();
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
    AddNamesPage.prototype.alertMessage = function (message) {
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
    AddNamesPage.prototype.addNames = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cells, value, arr, guests, allowedNumber, code, message, i, data, guest;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cells = [];
                        cells = this.name.split(/\r\n|\n/);
                        this.cells = cells.filter(function (el) {
                            return el != "";
                        });
                        arr = [];
                        if (this.names.length) {
                            guests = this.names.length + this.cells.length;
                        }
                        else {
                            guests = this.cells.length;
                        }
                        allowedNumber = this.invitation.no_of_guest - this.names.length;
                        code = this.names.length;
                        if (!(guests > parseInt(this.invitation.no_of_guest))) return [3 /*break*/, 1];
                        if (allowedNumber == 0) {
                            message = "New guest is not allowed.";
                        }
                        else {
                            message = "Only maximum" + " " + allowedNumber + " " + " guests are allowed";
                        }
                        this.alertMessage(message);
                        this.cells = [];
                        return [3 /*break*/, 3];
                    case 1:
                        for (i = 0; i < this.cells.length; i++) {
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
                                data = { name: this.cells[i], userId: this.userId, invitationId: this.invitationId, isGuest: true, invitationCode: '' };
                                arr.push(data);
                            }
                        }
                        this.isGuestSelected = localStorage.getItem('isGuestSelected');
                        guest = this.isGuestSelected == 'false' ? (this.no_of_guest - this.cells.length) : 0;
                        this.isLoader = true;
                        return [4 /*yield*/, this.userService.addGuestName({ data: arr })
                                .subscribe(function (res) {
                                var message = _this.lang == 'en' ? 'Guest created successfully.' : 'تم إضافة الأسماء بنجاح';
                                _this.successMessage(message);
                                _this.isLoader = false;
                                _this.update_invitation();
                                _this.guest_list();
                            }, function (err) {
                                _this.isLoader = false;
                                if (err.error.message == 'token expired') {
                                    _this.router.navigate(['/sign-up']);
                                    _this.alertMessage(err.error.message);
                                }
                                else {
                                    _this.alertMessage(err.error.message);
                                    _this.router.navigate(['/invitation']);
                                }
                            })];
                    case 2:
                        _a.sent();
                        this.name = '';
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // ************************ Redirct To Thumbnail Images Page ***************************//
    AddNamesPage.prototype.getImages = function () {
        //  this.router.navigate(['/thumbnails'], { queryParams: {image_code: this.image_code} })
    };
    AddNamesPage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AddNamesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-names',
            template: __webpack_require__(/*! raw-loader!./add-names.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-names/add-names.page.html"),
            styles: [__webpack_require__(/*! ./add-names.page.scss */ "./src/app/add-names/add-names.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddNamesPage);
    return AddNamesPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-names-add-names-module-es5.js.map