(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headertm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"5\"> <button (click)=\"back()\" class=\"btn thumb-nail-button\"    color=\"light\"> {{'page.back' | translate}}</button>\n        </ion-col>\n        <ion-col size=\"3\">\n            <span class=\"setting-icon\" >\n                <ion-icon ios=\"ios-settings\" md=\"md-settings\" class=\"icon-div\"></ion-icon>\n              </span>\n        </ion-col>\n        <ion-col size=\"4\"><span class=\"options\"> {{ 'page.options' | translate }}</span></ion-col>\n      </ion-row>\n      </ion-grid>\n  \n  \n\n\n</ion-header>\n<ion-content class=\"centered container\">\n  <ion-grid>\n    <ion-row style=\"margin-top:10px\">\n      <ion-col size=\"5\">\n        <h2 class=\"h2-tag\">{{ 'page.language' | translate }}</h2>\n      </ion-col>\n      <ion-col size=\"4\">\n          <button (click)=\"changeLanguage('en')\" type=\"submit\" class=\"btn en-button\">EN</button>\n          <button (click)=\"changeLanguage('ar')\" type=\"submit\" class=\"btn ar-button\">Arabic</button>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top:10px\">\n        <ion-col size=\"5\">\n            <h2 class=\"h2-tag\">{{ 'page.logout' | translate }}</h2>\n          </ion-col>\n          <ion-col size=\"4\">\n              <img (click)=\"logout()\" src=\"assets/logout.png\" width=50 height=50 style=\"margin-top:20px;\">\n          </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top:10px\">\n        <ion-col size=\"5\">\n            <h2 class=\"h2-tag-c\">{{ 'page.contact' | translate }}</h2>\n          </ion-col>\n          <ion-col size=\"4\">\n              <img (click)=\" whatsup_redirect()\" src=\"assets/whatsup-icon.png\"\n              />\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<footer class=\"footer\">\n  <div style=\"float:left;\">\n    <img src=\"assets/72x72.png\">\n  </div>\n  <div>\n    <span class=\"footer-text\"><a href=\"http://invitesmartapp.com/?reqp=1&reqr=\"  target=\"_blank\">WWW.INVITESMARTAPP.COM</a></span>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "ion-header {\n  position: none !important;\n  background-color: #DDDBDB;\n  height: 100px !important;\n}\n\n.en-button {\n  background-color: #3E51B5;\n  margin-top: 13px;\n  border-radius: 0px !important;\n  padding: 7px;\n  font-size: 27px;\n  font-family: \"oswald\";\n  width: 100px;\n  margin-left: 17px;\n  margin-top: 29px;\n  cursor: pointer;\n  color: #fff;\n}\n\n.ar-button {\n  background-color: #3E51B5;\n  margin-top: 13px;\n  border-radius: 0px !important;\n  padding: 7px;\n  font-size: 27px;\n  font-family: \"oswald\";\n  width: 100px;\n  margin-left: 17px;\n  margin-top: 5px;\n  cursor: pointer;\n  color: #fff;\n}\n\n.h2-tag {\n  font-family: \"oswald\";\n  font-size: 21px;\n  float: right;\n  margin-top: 23px;\n}\n\n.h2-tag-c {\n  font-family: \"oswald\";\n  font-size: 21px;\n  float: right;\n  margin-top: 8px;\n}\n\n.footer-text {\n  display: block;\n  margin-top: 24px;\n  font-size: 20px;\n  padding-left: 10px;\n  text-align: center;\n}\n\n.setting-icon {\n  top: 0;\n  left: 0;\n  padding-left: 28%;\n  text-align: center;\n}\n\n.icon-div {\n  zoom: 4;\n  color: #3E51B5;\n  margin-top: 5px !important;\n}\n\n.options {\n  font-size: 29px;\n  position: absolute;\n  padding-left: 25px;\n  padding-top: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZWVrdGVjaC9Eb2N1bWVudHMvQU1BUi9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLE9BQUE7RUFBVSxjQUFBO0VBQWMsMEJBQUE7QUNVNUI7O0FEUkE7RUFDSSxlQUFBO0VBQ0Ysa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOm5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREQkRCO1xuICAgIGhlaWdodDoxMDBweCAhaW1wb3J0YW50O1xufVxuLmVuLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgZm9udC1mYW1pbHk6ICdvc3dhbGQnO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbiAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hci1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnb3N3YWxkJztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjojZmZmO1xufVxuLmgyLXRhZyB7XG4gICAgZm9udC1mYW1pbHk6ICdvc3dhbGQnO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMjNweDtcbn1cbi5oMi10YWctYyB7XG4gICAgZm9udC1mYW1pbHk6ICdvc3dhbGQnO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmZvb3Rlci10ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNldHRpbmctaWNvbiB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyOCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmljb24tZGl2IHtcbiAgICB6b29tOjQuMDsgY29sb3I6IzNFNTFCNTttYXJnaW4tdG9wOjVweCAhaW1wb3J0YW50XG59XG4ub3B0aW9ucyB7XG4gICAgZm9udC1zaXplOiAyOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy10b3A6IDI3cHg7XG59XG4iLCJpb24taGVhZGVyIHtcbiAgcG9zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0REREJEQjtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uZW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDdweDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgbWFyZ2luLXRvcDogMjlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA3cHg7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmgyLXRhZyB7XG4gIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMjNweDtcbn1cblxuLmgyLXRhZy1jIHtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkXCI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2V0dGluZy1pY29uIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDI4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbi1kaXYge1xuICB6b29tOiA0O1xuICBjb2xvcjogIzNFNTFCNTtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vcHRpb25zIHtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy10b3A6IDI3cHg7XG59Il19 */"
=======
module.exports = "ion-header {\n  position: none !important;\n  background-color: #DDDBDB;\n  height: 100px !important; }\n\n.en-button {\n  background-color: #3E51B5;\n  margin-top: 13px;\n  border-radius: 0px !important;\n  padding: 7px;\n  font-size: 27px;\n  font-family: 'oswald';\n  width: 100px;\n  margin-left: 17px;\n  margin-top: 29px;\n  cursor: pointer;\n  color: #fff; }\n\n.ar-button {\n  background-color: #3E51B5;\n  margin-top: 13px;\n  border-radius: 0px !important;\n  padding: 7px;\n  font-size: 27px;\n  font-family: 'oswald';\n  width: 100px;\n  margin-left: 17px;\n  margin-top: 5px;\n  cursor: pointer;\n  color: #fff; }\n\n.h2-tag {\n  font-family: 'oswald';\n  font-size: 21px;\n  float: right;\n  margin-top: 23px; }\n\n.h2-tag-c {\n  font-family: 'oswald';\n  font-size: 21px;\n  float: right;\n  margin-top: 8px; }\n\n.footer-text {\n  display: block;\n  margin-top: 24px;\n  font-size: 20px;\n  padding-left: 10px;\n  text-align: center; }\n\n.setting-icon {\n  top: 0;\n  left: 0;\n  text-align: right; }\n\n.icon-div {\n  zoom: 4.0;\n  color: #3E51B5;\n  margin-top: 5px !important; }\n\n.options {\n  font-size: 29px;\n  position: absolute;\n  padding-top: 27px; }\n\n.thumb-nail-button {\n  color: white;\n  background-color: #3E51B5;\n  border-radius: 29px;\n  padding: 18px;\n  font-size: 14px;\n  font-family: \"oswald\";\n  float: left;\n  margin-left: 18px;\n  margin-top: 25px;\n  z-index: 99999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlbm92bzAzL0Rlc2t0b3AvcHJvamVjdC9pbnZpdGVzbWFydGlvcy9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix3QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUVmO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVUsRUFBQTs7QUFFZDtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFHUCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxTQUFRO0VBQUUsY0FBYTtFQUFDLDBCQUM1QixFQUFBOztBQUNBO0VBQ0ksZUFBZTtFQUNqQixrQkFBa0I7RUFFbEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0ksWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVztFQUNWLGlCQUFpQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBwb3NpdGlvbjpub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0REREJEQjtcbiAgICBoZWlnaHQ6MTAwcHggIWltcG9ydGFudDtcbn1cbi5lbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQjU7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnb3N3YWxkJztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1MUI1O1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBmb250LWZhbWlseTogJ29zd2FsZCc7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6I2ZmZjtcbn1cbi5oMi10YWcge1xuICAgIGZvbnQtZmFtaWx5OiAnb3N3YWxkJztcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIzcHg7XG59XG4uaDItdGFnLWMge1xuICAgIGZvbnQtZmFtaWx5OiAnb3N3YWxkJztcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cbi5mb290ZXItdGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXR0aW5nLWljb24ge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC8vIHBhZGRpbmctbGVmdDogMjQlO1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5pY29uLWRpdiB7XG4gICAgem9vbTo0LjA7IGNvbG9yOiMzRTUxQjU7bWFyZ2luLXRvcDo1cHggIWltcG9ydGFudFxufVxuLm9wdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMjlweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctdG9wOiAyN3B4O1xufVxuLnRodW1iLW5haWwtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNTFCNTtcbiAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm9zd2FsZFwiO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuIl19 */"
>>>>>>> 1dc25a9b14c1794c9a461b414d20f696c7a92bd8

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");









let SettingsComponent = class SettingsComponent {
    constructor(iab, toastController, translate, alertController, userService, formBuilder, router) {
        this.iab = iab;
        this.toastController = toastController;
        this.translate = translate;
        this.alertController = alertController;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        translate.setDefaultLang('ar');
        this.lang = 'ar';
        localStorage.setItem('language', this.lang);
        this.errorMessage = this.lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
    }
    ngAfterViewInit() {
        this.userId = localStorage.getItem('userId');
    }
    ngOnInit() {
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
    changeLanguage(lang) {
        this.lang = lang;
        let err = lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
        this.errorMessage = lang == 'en' ? 'Phone number is required.' : 'رقم الهاتف مطلوب';
        localStorage.removeItem('language');
        if (lang) {
            let message = 'Language is changed  successfully.';
            this.successMessage(message);
            localStorage.setItem('language', this.lang);
            this.translate.use(this.lang);
        }
    }
    empty_storage() {
        localStorage.removeItem('userId');
        localStorage.removeItem('guests');
        localStorage.removeItem('invitationId');
        localStorage.removeItem('isGuestSelected');
        localStorage.removeItem('event');
        localStorage.removeItem('eventName');
        this.router.navigate(['/sign-up']);
    }
    // ************************ Sign Up***************************//
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userId = localStorage.getItem('userId');
            if (this.userId) {
                this.isLoader = true;
                yield this.userService.logout({ userId: this.userId })
                    .subscribe(res => {
                    this.isLoader = false;
                    this.empty_storage();
                    this.router.navigate(['/sign-up']);
                    let message = 'User is logout  successfully.';
                    this.successMessage(message);
                }, err => {
                    this.isLoader = false;
                    this.empty_storage();
                    let message = 'User is logout  successfully.';
                    this.successMessage(message);
                    console.log(err.error.error);
                    this.isValue = err;
                });
            }
            else {
                this.empty_storage();
                let message = 'User is logout  successfully.';
                this.successMessage(message);
                console.log("Logout sucessfully.");
            }
        });
    }
    back() {
        this.userId = localStorage.getItem('userId');
        if (this.userId) {
            this.router.navigate(['/invitation']);
        }
        else {
            this.router.navigate(['/sign-up']);
        }
    }
    whatsup_redirect() {
        this.iab.create('https://api.whatsapp.com/send?phone=966505278757&text=%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%20invite%20smart%20', `_system`);
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");








const routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"]]
    })
], SettingsPageModule);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map