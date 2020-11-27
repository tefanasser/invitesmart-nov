(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invitation-type-invitation-type-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/invitation-type/invitation-type.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invitation-type/invitation-type.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n  <ion-toolbar style=\"padding-top:20px !important;padding-bottom: 15px !important;\"> \n      <!-- <button routerLink=\"/scan-guest\" routerDirection=\"root\" class=\"scan-button\">SCAN</button> -->\n      <button routerLink=\"/invitation\" routerDirection=\"root\" class=\"btn thumb-nail-button\"\n          color=\"light\"> {{'page.back' | translate}}</button>\n  </ion-toolbar> \n</ion-header>\n<ion-content>\n      <ion-toolbar class=\"sub-header\">\n        \n        <h3 class=\"ion-text-center\">{{'page.choose_invitation_type' | translate}}</h3>\n      </ion-toolbar>\n        <!-- Item Dividers in a List -->\n        <ion-row>\n          <ion-col size=12 style=\" text-align:center;\">\n            <button type=\"button\" (click)=\"update_invitation()\" text-center class=\"btn choose-button\" color=\"primary\">&nbsp;&nbsp;&nbsp;{{'page.numbers_only' | translate}}&nbsp;&nbsp;&nbsp;</button>\n          </ion-col>\n        </ion-row>\n          <ion-row>\n          <ion-col size=12 style=\" text-align:center;\">\n            <button type=\"button\" [routerLink]=\"['/add-names']\"  routerDirection=\"forward\" class=\"btn choose-button\"  color=\"primary\">{{'page.numbers_and_names' | translate}}</button>\n          </ion-col>\n        </ion-row>\n</ion-content>\n\n\n<footer class=\"footer\">\n  <div style=\"float:left;\">\n    <img src=\"assets/72x72.png\">\n  </div>\n  <div style=\"float:left;\">\n    <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n  </div>\n  <div style=\"float:right;margin-top: 15px;\">\n      <ion-icon routerLink=\"/setting\" ios=\"ios-settings\" md=\"md-settings\" style=\"zoom:3.0; color:#3E51B5;\"></ion-icon>\n  </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/invitation-type/invitation-type.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/invitation-type/invitation-type.module.ts ***!
  \***********************************************************/
/*! exports provided: InvitationTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationTypePageModule", function() { return InvitationTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _invitation_type_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invitation-type.page */ "./src/app/invitation-type/invitation-type.page.ts");








var routes = [
    {
        path: '',
        component: _invitation_type_page__WEBPACK_IMPORTED_MODULE_7__["InvitationTypePage"]
    }
];
var InvitationTypePageModule = /** @class */ (function () {
    function InvitationTypePageModule() {
    }
    InvitationTypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_invitation_type_page__WEBPACK_IMPORTED_MODULE_7__["InvitationTypePage"]]
        })
    ], InvitationTypePageModule);
    return InvitationTypePageModule;
}());



/***/ }),

/***/ "./src/app/invitation-type/invitation-type.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/invitation-type/invitation-type.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choose-button {\n  color: white;\n  background-color: #3E51B5;\n  margin-top: 40px;\n  border-radius: 29px;\n  padding: 23px;\n  font-size: 20px;\n  font-family: \"oswald\"; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 13px;\n  font-size: 13px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 5px;\n  margin-top: 8px; }\n\n.sub-header {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL2ludml0YXRpb24tdHlwZS9pbnZpdGF0aW9uLXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0ksZ0JBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ludml0YXRpb24tdHlwZS9pbnZpdGF0aW9uLXR5cGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob29zZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgICBwYWRkaW5nOiAyM3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbn1cbi50aHVtYi1uYWlsLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gICAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICAuc3ViLWhlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/invitation-type/invitation-type.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/invitation-type/invitation-type.page.ts ***!
  \*********************************************************/
/*! exports provided: InvitationTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationTypePage", function() { return InvitationTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var InvitationTypePage = /** @class */ (function () {
    function InvitationTypePage(translate, actionSheetController, alertController, userService, formBuilder, router) {
        this.translate = translate;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formData = {};
        this.images = [];
        this.guestList = [];
        var lang = localStorage.getItem('language');
        if (lang) {
            this.translate.use(lang);
        }
    }
    InvitationTypePage.prototype.ngOnInit = function () {
        this.no_of_guest = localStorage.getItem('guests');
        this.invitationId = localStorage.getItem('invitationId');
        if (this.invitationId) {
            this.guest_list();
            this.get_invitation();
        }
        var regexPattern = /^\d{1,3}$/;
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(regexPattern);
        this.number_form = this.formBuilder.group({
            no_of_guest: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9][0-9]?$|^100$/)
            ]))
        });
    };
    InvitationTypePage.prototype.alertMessage = function (message) {
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
    // ************************ Guest List ***************************//
    InvitationTypePage.prototype.guest_list = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = localStorage.getItem('userId');
                        localStorage.removeItem('names');
                        return [4 /*yield*/, this.userService.guest_list(userId, this.invitationId)
                                .subscribe(function (res) {
                                _this.names = res['data'];
                                localStorage.setItem('names', JSON.stringify(_this.names));
                            }, function (err) {
                                _this.formData = {};
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
    // ************************ Get Invitation ***************************//
    InvitationTypePage.prototype.get_invitation = function () {
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
    // ************************ Update Invitation ***************************//
    InvitationTypePage.prototype.update_invitation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = localStorage.getItem('invitationId');
                        data = { id: id, isGuestSelected: true };
                        return [4 /*yield*/, this.userService.updateInvitation(data)
                                .subscribe(function (res) {
                                console.log(res, '########1234###############');
                                var noOfGuest = res['data'].no_of_guest;
                                _this.addNames(noOfGuest);
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
    InvitationTypePage.prototype.goTo = function () {
        this.router.navigate(['/home']);
    };
    InvitationTypePage.prototype.addNames = function (guestNo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, userId, numValue, code, i, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.guestList = [];
                        userId = localStorage.getItem('userId');
                        this.no_of_guest = parseInt(guestNo) - this.names.length;
                        numValue = this.names.filter(function (obj) {
                            return obj.invitationCode !== '';
                        });
                        code = numValue.length;
                        for (i = 0; i < this.no_of_guest; i++) {
                            if (this.no_of_guest) {
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
                                data = { invitationCode: value, userId: userId, invitationId: this.invitationId };
                                this.guestList.push(data);
                            }
                        }
                        return [4 /*yield*/, this.userService.addGuestName({ data: this.guestList })
                                .subscribe(function (res) {
                                localStorage.removeItem('guests');
                                _this.router.navigate(['/thumbnails'], { queryParams: { no_of_guest: _this.no_of_guest } });
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
    InvitationTypePage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    InvitationTypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitation-type',
            template: __webpack_require__(/*! raw-loader!./invitation-type.page.html */ "./node_modules/raw-loader/index.js!./src/app/invitation-type/invitation-type.page.html"),
            styles: [__webpack_require__(/*! ./invitation-type.page.scss */ "./src/app/invitation-type/invitation-type.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InvitationTypePage);
    return InvitationTypePage;
}());



/***/ })

}]);
//# sourceMappingURL=invitation-type-invitation-type-module-es5.js.map