webpackJsonp([0],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_loader_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_if__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_if___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_if__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_mergeMap__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_filter__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_debounceTime__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_pluck__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_pluck__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Observable class extensions


// Observable operators









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__loader_loader_component__["a" /* LoaderComponent */]
            ],
            providers: [],
            entryComponents: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__loader_loader_component__["a" /* LoaderComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_app_state__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IncidentComponent = /** @class */ (function () {
    function IncidentComponent(navCtrl, alertCtrl, loadingCtrl, toastCtrl, appStateServ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appStateServ = appStateServ;
        this.successMsg = 'Successfully sent report!';
        this.sendReport = function () {
            _this.displaySendConfirmation();
        };
        this.displaySendConfirmation = function () {
            var alert = _this.alertCtrl.create({
                title: 'Send report to Emergency Queue?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }, {
                        text: 'Send',
                        handler: function () {
                            _this.appStateServ.startLoading();
                            setTimeout(function () {
                                _this.appStateServ.stopLoading();
                                _this.hasBeenSubmitted = true;
                                _this.displayNotification(_this.successMsg);
                            }, 3000);
                        }
                    }
                ]
            });
            alert.present();
        };
        this.hasBeenSubmitted = false;
        this.incidentStatus = 'ACTIVE - NOT SUBMITTED';
        this.appStateServ.changes.subscribe(function (state) {
            _this.isAuth = state.user.isAuth;
        });
    }
    IncidentComponent.prototype.ionViewCanEnter = function () {
        return this.isAuth;
    };
    IncidentComponent.prototype.displayNotification = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // do something
        });
        toast.present();
    };
    ;
    IncidentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'incident-comp',template:/*ion-inline-start:"C:\Users\goodw\projects\sample\src\views\incident\incident.template.html"*/`<ion-content\n\n  class="incident-bg"\n\n  fxLayout="row"\n\n  fxLayoutAlign="center center"\n\n  padding>\n\n  \n\n  <img src="/assets/img/surv-logo.png" class="logo-style">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col></ion-col>\n\n      <ion-col>\n\n      \n\n      \n\n      \n\n  <ion-grid style="margin-top: 60px;">\n\n    \n\n    <ion-row align-items-start justify-content-start>\n\n      \n\n      <ion-col fxlayoutalign="center center" fxlayout="column">\n\n        \n\n        <ion-card class="dash-card" >\n\n          \n\n          <ion-card-title style="color: #453A49; font-weight: 300;">\n\n            Status:\n\n            <span class="danger" *ngIf="!hasBeenSubmitted">\n\n              ACTIVE - NOT SUBMITTED</span>\n\n            <span class="sucess" *ngIf="hasBeenSubmitted">\n\n              ACTIVE - SUBMITTED</span>\n\n          </ion-card-title>\n\n          \n\n          <ion-card-content>\n\n            \n\n            <div\n\n              fxLayout="row"\n\n              fxLayoutAlign="start start"\n\n              fxLayout.sm="column"\n\n              fxLayout.md="column">\n\n              \n\n              <video-comp class="video-style"></video-comp>\n\n              \n\n              <div class="main-table">\n\n                \n\n                <div\n\n                  class="report-table"\n\n                  fxLayout="column"\n\n                  fxLayoutAlign="start stretch">\n\n                  \n\n                  <div class="table-header">\n\n                    <h1 class="table-title">Incident Details</h1>\n\n                  </div>\n\n                  \n\n                  <div class="incident-row" fxLayout="row"\n\n                       fxLayoutAlign="space-around start">\n\n                    <div fxFlex class="table-subheader">Store Details</div>\n\n                   \n\n                  </div>\n\n                  <div class="incident-row" fxLayout="row" fxLayoutAlign="space-around start">\n\n                    <div fxFlex class="incident-text">Store Number: 52351</div>\n\n                    <div fxFlex class="incident-text">Store Address:<br> 123 Elm St, Smalltown, OK 95123</div>\n\n                  </div>\n\n                  <div class="incident-row" fxLayout="row"\n\n                       fxLayoutAlign="space-around start">\n\n                    <div fxFlex class="table-subheader">Employees On Duty</div>\n\n                  </div>\n\n                  <div class="incident-row" fxLayout="row"\n\n                       fxLayoutAlign="space-around start">\n\n                    <div fxFlex class="incident-text squeeze-row">Name: Ivan Bulgari</div>\n\n                    <div fxFlex class="incident-text squeeze-row">Employee ID: 123456\n\n                    </div>\n\n                  </div>\n\n                  <div class="incident-row" fxLayout="row"\n\n                       fxLayoutAlign="space-around start">\n\n                    <div fxFlex class="incident-text" style="padding: 0 0 8px 4px;">Job Title: Asst Mgr\n\n                    </div>\n\n                  </div>\n\n                  <div class="incident-row" fxLayout="row"\n\n                       fxLayoutAlign="space-around start">\n\n                    <div fxFlex class="incident-text squeeze-row" >Name: Edgar Ahmeel</div>\n\n                    <div fxFlex class="incident-text squeeze-row" >Employee ID: 234567\n\n                    </div>\n\n                  </div>\n\n                  <div class="incident-row" fxLayout="row"\n\n                       fxLayoutAlign="space-around start">\n\n                    <div fxFlex class="incident-text" style="padding: 0 0 8px 4px;">Job Title: Cashier\n\n                    </div>\n\n                  </div>\n\n                  <div class="incident-row" fxLayout="row"\n\n                       fxLayoutAlign="space-around start">\n\n                    <div fxFlex class="table-subheader">Daily Sales</div>\n\n                  </div>\n\n                  <div class="incident-row" fxLayout="column"\n\n                       fxLayoutAlign="start start">\n\n                    <div class="incident-row" fxLayout="row"\n\n                         fxLayoutAlign="space-around start">\n\n                      <div fxFlex class="incident-text">Cash Sales: </div>\n\n                      <div fxFlex class="incident-text" style="text-align: end;">$5,430.76</div>\n\n                      <div fxFlex></div>\n\n                    </div>\n\n                    <div class="incident-row" fxLayout="row"\n\n                         fxLayoutAlign="space-around start">\n\n                      <div fxFlex class="incident-text">Deposits:</div>\n\n                      <div fxFlex class="incident-text" style="text-align: end;">$5,153.23</div>\n\n                      <div fxFlex></div>\n\n                    </div>\n\n                    <div class="incident-row" fxLayout="row"\n\n                         fxLayoutAlign="space-around start">\n\n                      <div fxFlex class="incident-text">Cash on Hand:</div>\n\n                      <div fxFlex class="incident-text" style="text-align: end;">$277.53</div>\n\n                      <div fxFlex></div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            \n\n          </ion-card-content>\n\n          <div fxLayout="row" fxLayoutAlign="end end">\n\n            <button ion-button color="success" (click)="sendReport()" [disabled]="hasBeenSubmitted">Send Report</button>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-grid>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\goodw\projects\sample\src\views\incident\incident.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__state_app_state__["a" /* AppStateService */]])
    ], IncidentComponent);
    return IncidentComponent;
}());

//# sourceMappingURL=incident.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_app_state__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incident_incident_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(navCtrl, toastCtrl, appStateServ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.appStateServ = appStateServ;
        this.credentials = {
            email: '',
            password: ''
        };
        this.successMsg = 'Successfully logged in!';
        this.errMsg = 'Email or password did not match our records.';
        this.user = {
            isAuth: false,
            email: '',
            password: '',
            name: {
                firstName: 'Anon User',
                lastName: '',
                nickName: ''
            }
        };
        this.gotoSignup = function (event) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */]);
        };
        this.doLogin = function () {
            _this.appStateServ.startLoading();
            setTimeout(function () {
                if (_this.verifyCredentials()) {
                    _this.appStateServ.stopLoading();
                    _this.loginSuccess();
                    var state = Object.assign({}, _this.appStateServ.getState());
                    state.user.isAuth = true;
                    state.timestamp = new Date(Date.now()).toLocaleTimeString();
                    _this.appStateServ.setState(state);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__incident_incident_component__["a" /* IncidentComponent */]);
                }
                else {
                    _this.appStateServ.stopLoading();
                    _this.loginError();
                }
            }, 3000);
        };
        this.verifyCredentials = function () {
            return (_this.user.email === _this.credentials.email && _this.user.password === _this.credentials.password && _this.user.email.length > 1 && _this.user.password.length > 1);
        };
        this.loginSuccess = function () {
            var toast = _this.toastCtrl.create({
                message: _this.successMsg,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        };
        this.loginError = function () {
            var toast = _this.toastCtrl.create({
                message: _this.errMsg,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        };
        this.appStateServ.changes.subscribe(function (state) {
            _this.user = state.user;
        });
    }
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login-comp',template:/*ion-inline-start:"C:\Users\goodw\projects\sample\src\views\login\login.template.html"*/`<ion-content class="login-bg" fxLayout="row" fxLayoutAlign="center center">\n\n  <div\n\n    class="login-col"\n\n    fxLayout="column"\n\n    fxLayoutAlign="start center">\n\n    <img src="/assets/img/surv-logo.png" class="image-style">\n\n    <h1 class="login-title" >Login</h1>\n\n    \n\n  <ion-card class="login-card">\n\n    \n\n    <ion-card-header>\n\n      <ion-card-title>Please sign in...</ion-card-title>\n\n    </ion-card-header>\n\n    \n\n    <ion-card-content>\n\n      <div\n\n        *ngIf="(email.dirty || email.touched) && email.invalid"\n\n        class="form-error">\n\n        <div\n\n          *ngIf="email.errors.required"\n\n          class="form-error">\n\n          Email is required.\n\n        </div>\n\n        <div\n\n          *ngIf="email.errors.minlength"\n\n          class="form-error">\n\n          Email must be a minimum of 5 characters.\n\n        </div>\n\n      </div>\n\n      <div\n\n        *ngIf="(password.dirty || password.touched) && password.invalid">\n\n        <div\n\n          *ngIf="password.errors.required"\n\n          class="form-error">\n\n          Password is required.\n\n        </div>\n\n        <div\n\n          *ngIf="password.errors.minlength"\n\n          class="form-error">\n\n          Password must be a minimum of 6 characters.\n\n        </div>\n\n      </div>\n\n      \n\n      <form #loginForm="ngForm" autocomplete="off">\n\n        \n\n        <ion-list>\n\n        \n\n          <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input\n\n              color="primary"\n\n              type="email"\n\n              #email="ngModel"\n\n              name="email"\n\n              [(ngModel)]="credentials.email"\n\n              autocomplete="new-password"\n\n              required\n\n              minlength="5">\n\n            </ion-input>\n\n            \n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input\n\n              color="primary"\n\n              type="password"\n\n              #password="ngModel"\n\n              name="password"\n\n              [(ngModel)]="credentials.password"\n\n              autocomplete="new-password"\n\n              required\n\n              minLength="6">\n\n            </ion-input>\n\n            \n\n          </ion-item>\n\n\n\n          <div padding>\n\n            <button\n\n              ion-button\n\n              color="success"\n\n              (click)="doLogin()"\n\n              [disabled]="loginForm.invalid"\n\n              block>\n\n              Login\n\n            </button>\n\n          </div>\n\n\n\n        </ion-list>\n\n      </form>\n\n      \n\n    </ion-card-content>\n\n    \n\n    <div class="login-footer">\n\n      <p>\n\n        New user? Please <span (click)="gotoSignup(e)"\n\n                                class="login-footer-link">Signup</span> first.\n\n      </p>\n\n    </div>\n\n    \n\n  </ion-card>\n\n  \n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\goodw\projects\sample\src\views\login\login.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__state_app_state__["a" /* AppStateService */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_app_state__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(navCtrl, toastCtrl, appStateServ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.appStateServ = appStateServ;
        this.credentials = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        this.user = {
            isAuth: false,
            email: '',
            password: '',
            name: {
                firstName: 'Anon User',
                lastName: '',
                nickName: ''
            }
        };
        this.successMsg = 'Successfully registered!';
        this.gotoLogin = function (event) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]);
        };
        this.signup = function () {
            _this.appStateServ.startLoading();
            // save the credentials
            _this.appStateServ.setState({
                isLoading: true,
                timestamp: new Date(Date.now()).toLocaleTimeString(),
                user: {
                    isAuth: false,
                    email: _this.credentials.email,
                    password: _this.credentials.password,
                    name: {
                        firstName: _this.credentials.firstName,
                        lastName: _this.credentials.lastName
                    }
                }
            });
            setTimeout(function () {
                _this.appStateServ.stopLoading();
                _this.signupSuccess();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]);
            }, 3000);
        };
        this.signupSuccess = function () {
            var toast = _this.toastCtrl.create({
                message: _this.successMsg,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        };
        this.appStateServ.changes.subscribe(function (state) {
            _this.user = state.user;
        });
    }
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'signup-comp',template:/*ion-inline-start:"C:\Users\goodw\projects\sample\src\views\signup\signup.template.html"*/`<ion-content class="signup-bg" fxLayout="row" fxLayoutAlign="center center">\n\n  <div\n\n    class="signup-col"\n\n    fxLayout="column"\n\n    fxLayoutAlign="start center">\n\n    <img src="/assets/img/surv-logo.png" style="opacity: 0.2; width: 300px; position: absolute; top: 60%; left: 50%; margin-left: -150px;">\n\n    <h1 class="signup-title">Sign-up</h1>\n\n    \n\n    <ion-card class="signup-card">\n\n      \n\n      <ion-card-header>\n\n        <ion-card-title>Please register below...</ion-card-title>\n\n      </ion-card-header>\n\n      \n\n      <ion-card-content>\n\n        \n\n        <div\n\n          *ngIf="(email.dirty || email.touched) && email.invalid"\n\n          class="form-error">\n\n          <div\n\n            *ngIf="email.errors.required"\n\n            class="form-error">\n\n            Email is required.\n\n          </div>\n\n          <div\n\n            *ngIf="email.errors.minlength"\n\n            class="form-error">\n\n            Email must be a minimum of 5 characters.\n\n          </div>\n\n        </div>\n\n        <div\n\n          *ngIf="(password.dirty || password.touched) && password.invalid">\n\n          <div\n\n            *ngIf="password.errors.required"\n\n            class="form-error">\n\n            Password is required.\n\n          </div>\n\n          <div\n\n            *ngIf="password.errors.minlength"\n\n            class="form-error">\n\n            Password must be a minimum of 6 characters.\n\n          </div>\n\n        </div>\n\n        <div\n\n          *ngIf="(firstName.dirty || firstName.touched) && firstName.invalid"\n\n          class="form-error">\n\n          <div\n\n            *ngIf="firstName.errors.required"\n\n            class="form-error">\n\n            First name is required.\n\n          </div>\n\n          <div\n\n            *ngIf="firstName.errors.minlength"\n\n            class="form-error">\n\n            First name must be a minimum of 2 characters.\n\n          </div>\n\n        </div>\n\n        <div\n\n          *ngIf="(lastName.dirty || lastName.touched) && lastName.invalid">\n\n          <div\n\n            *ngIf="lastName.errors.required"\n\n            class="form-error">\n\n            Last name is required.\n\n          </div>\n\n          <div\n\n            *ngIf="lastName.errors.minlength"\n\n            class="form-error">\n\n            Last name must be a minimum of 2 characters.\n\n          </div>\n\n        </div>\n\n        \n\n        <form #signupForm="ngForm" autocomplete="off">\n\n          \n\n          <ion-list>\n\n            \n\n            <ion-item>\n\n              <ion-label floating>First Name</ion-label>\n\n              <ion-input\n\n                color="primary"\n\n                type="text"\n\n                #firstName="ngModel"\n\n                name="firstName"\n\n                [(ngModel)]="credentials.firstName"\n\n                autocomplete="new-password"\n\n                required\n\n                minLength="2">\n\n              </ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-label floating>Last Name</ion-label>\n\n              <ion-input\n\n                color="primary"\n\n                type="text"\n\n                #lastName="ngModel"\n\n                name="lastName"\n\n                [(ngModel)]="credentials.lastName"\n\n                autocomplete="new-password"\n\n                required\n\n                minLength="2">\n\n              </ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input\n\n                color="primary"\n\n                type="email"\n\n                #email="ngModel"\n\n                name="email"\n\n                [(ngModel)]="credentials.email"\n\n                autocomplete="new-password"\n\n                required\n\n                minLength="5">\n\n              </ion-input>\n\n            </ion-item>\n\n            \n\n            \n\n            <ion-item>\n\n              <ion-label floating>Password</ion-label>\n\n              <ion-input\n\n                color="primary"\n\n                type="password"\n\n                #password="ngModel"\n\n                name="password"\n\n                [(ngModel)]="credentials.password"\n\n                autocomplete="new-password"\n\n                required\n\n                minLength="6">\n\n              </ion-input>\n\n            </ion-item>\n\n            \n\n            <div padding>\n\n              <button\n\n                ion-button\n\n                color="success"\n\n                (click)="signup()"\n\n                [disabled]="signupForm.invalid"\n\n                block>\n\n                Signup\n\n              </button>\n\n            </div>\n\n          \n\n          </ion-list>\n\n        </form>\n\n      \n\n      </ion-card-content>\n\n      \n\n      <div class="signup-footer">\n\n        <p>\n\n          Already have an account? Head to our <span (click)="gotoLogin(e)"\n\n                                 class="signup-footer-link">Login</span> page.\n\n        </p>\n\n      </div>\n\n    \n\n    </ion-card>\n\n  \n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\goodw\projects\sample\src\views\signup\signup.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__state_app_state__["a" /* AppStateService */]])
    ], SignupComponent);
    return SignupComponent;
}());

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifyService = /** @class */ (function () {
    function NotifyService(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.defaultMessage = 'Well... something happened. Just not sure what.';
    }
    NotifyService.prototype.showNotification = function (msg, timeInMsecs) {
        var message = msg ? msg : this.defaultMessage;
        var displayTime = timeInMsecs ? timeInMsecs : 3000;
        var toast = this.toastCtrl.create({
            message: message,
            duration: displayTime,
            position: 'bottom'
        });
        toast.present();
    };
    NotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], NotifyService);
    return NotifyService;
}());

//# sourceMappingURL=notify.service.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(261);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_state_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_views_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__sample_proj',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__state_state_module__["a" /* StateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__views_views_module__["a" /* ViewsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */]
                }
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_8__state_state_module__["a" /* StateModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__views_views_module__["a" /* ViewsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notify_service__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: []
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__notify_service__["a" /* NotifyService */],
                __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */],
                __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]
            ],
            entryComponents: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notify_service__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(notifyServ) {
        var _this = this;
        this.notifyServ = notifyServ;
        this.defaultMessage = 'The unknown error is not known. - Captain Obvious';
        this.handleError = function (details) {
            var state = {
                lastError: {
                    component: 'AppStateService',
                    details: details ? details : _this.defaultMessage
                },
                isLoading: false
            };
            _this.notifyServ.showNotification(state.lastError.details);
            console.error(state.lastError);
            return state;
        };
    }
    ErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__notify_service__["a" /* NotifyService */]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());

//# sourceMappingURL=error-handler.service.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService(loadingCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.defaultMessage = 'Loading...';
        this.defaultMaxTime = 3000;
        this.displayLoader = function (msg, timeToDisplay) {
            var loading = _this.loadingCtrl.create({
                content: msg ? msg : _this.defaultMessage
            });
            var time = timeToDisplay ? timeToDisplay : _this.defaultMaxTime;
            loading.present();
            setTimeout(function () {
                loading.dismiss();
            }, time);
        };
    }
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_app_state__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(appStateServ) {
        var _this = this;
        this.appStateServ = appStateServ;
        this.appStateServ.changes.subscribe(function (state) {
            setTimeout(function () {
                _this.isLoading = state.isLoading;
            });
        });
    }
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'loader-comp',template:/*ion-inline-start:"C:\Users\goodw\projects\sample\src\shared\loader\loader.template.html"*/`<div class="container" *ngIf="isLoading">\n\n  <div class="loader">\n\n    <div class="loader-square"></div>\n\n    <div class="loader-square"></div>\n\n    <div class="loader-square"></div>\n\n    <div class="loader-square"></div>\n\n    <div class="loader-square"></div>\n\n    <div class="loader-square"></div>\n\n  </div>\n\n</div>\n\n`/*ion-inline-end:"C:\Users\goodw\projects\sample\src\shared\loader\loader.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__state_app_state__["a" /* AppStateService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_state__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var StateModule = /** @class */ (function () {
    function StateModule(parentModule) {
        // Prevent state from having multiple instances
        // We can only have one instance of state!!
        if (parentModule) {
            throw new Error('StateModule is already loaded. Import it in the AppModule only');
        }
    }
    StateModule_1 = StateModule;
    StateModule.forRoot = function () {
        return {
            ngModule: StateModule_1,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__app_state__["b" /* INIT_APP_STATE */],
                    useValue: __WEBPACK_IMPORTED_MODULE_6__app_state__["c" /* initialAppState */]
                }
            ]
        };
    };
    StateModule = StateModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__app_state__["a" /* AppStateService */]
            ],
            entryComponents: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [StateModule])
    ], StateModule);
    return StateModule;
    var StateModule_1;
}());

//# sourceMappingURL=state.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__incident_incident_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__incident_video_video_component__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_2__incident_incident_component__["a" /* IncidentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__incident_video_video_component__["a" /* VideoComponent */]
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_2__incident_incident_component__["a" /* IncidentComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_2__incident_incident_component__["a" /* IncidentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__incident_video_video_component__["a" /* VideoComponent */]
            ]
        })
    ], ViewsModule);
    return ViewsModule;
}());

//# sourceMappingURL=views.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoComponent = /** @class */ (function () {
    function VideoComponent(navCtrl, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.videoParams = 'G9XyEyGMKy4?autoplay=0&controls=1&showinfo=0&modestbranding=0&loop=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0';
        this.videoUrl = 'https://www.youtube.com/embed/';
        this.init = function () {
            var videoSrc = _this.videoUrl + _this.videoParams;
            _this.trustedUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(videoSrc);
        };
    }
    VideoComponent.prototype.ngOnInit = function () {
        this.init();
    };
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'video-comp',template:/*ion-inline-start:"C:\Users\goodw\projects\sample\src\views\incident\video\video.template.html"*/`  <iframe class="video-layout"\n\n          [src]="trustedUrl"\n\n          frameborder="0" allowfullscreen>\n\n  \n\n  </iframe>\n\n  <div class="video-overlay">\n\n    <div fxLayout="row" fxLayoutAlign="space-around start">\n\n      <div fxFlex class="overlay-text">Video ID: G9XyEyGMKy4</div>\n\n      <div fxFlex class="overlay-text">Timestamp: 11/12/2017 01:15:37:06 (PST)</div>\n\n    </div>\n\n    <div fxLayout="row" fxLayoutAlign="space-around start">\n\n      <div fxFlex class="overlay-text">Viewport: 640x360</div>\n\n      <div fxFlex class="overlay-text">Optimal Res: 854x460@30</div>\n\n    </div>\n\n    <div fxLayout="row" fxLayoutAlign="space-around start">\n\n      <div fxFlex class="overlay-text">Codecs: vp9 (244) / opus (251)</div>\n\n      <div fxFlex class="overlay-text">Loudness: 7.7dB</div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n`/*ion-inline-end:"C:\Users\goodw\projects\sample\src\views\incident\video\video.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VideoComponent);
    return VideoComponent;
}());

//# sourceMappingURL=video.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_app_state__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_incident_incident_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_login_login_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_signup_signup_component__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(platform, statusBar, splashScreen, storage, appStateService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.appStateService = appStateService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__views_incident_incident_component__["a" /* IncidentComponent */];
        this.initializeApp = function () {
            // Configure views/screen array for menu links
            _this.views = [
                { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_6__views_incident_incident_component__["a" /* IncidentComponent */] },
                { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_8__views_signup_signup_component__["a" /* SignupComponent */] },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__views_login_login_component__["a" /* LoginComponent */] }
            ];
            _this.appStateService.startLoading();
            /*
             When device is ready, check if platform is Cordova (Android, iOS, and Win Phone).
             If true, then 'do stuff'
             */
            _this.platform.ready().then(function (readySource) {
                _this.openPage(_this.rootPage);
                if (_this.platform.is('cordova')) {
                    // Stuff being done
                    _this.statusBar.styleDefault();
                    _this.splashScreen.hide();
                }
            });
        };
        this.openPage = function (view) {
            _this.nav.setRoot(view.component).catch(function (reason) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__views_signup_signup_component__["a" /* SignupComponent */]);
                // Simulating network lag
                setTimeout(function () {
                    _this.appStateService.stopLoading();
                }, 2000);
            });
        };
        this.initializeApp();
        // Subscribe to any changes in state
        this.appStateService.changes.subscribe(function (state) {
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-app',template:/*ion-inline-start:"C:\Users\goodw\projects\sample\src\app\app.template.html"*/`<loader-comp></loader-comp>\n<ion-nav></ion-nav>\n`/*ion-inline-end:"C:\Users\goodw\projects\sample\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__state_app_state__["a" /* AppStateService */]])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initialAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INIT_APP_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var initialAppState = {
    isLoading: false,
    timestamp: new Date(Date.now()).toLocaleTimeString(),
    user: {
        isAuth: true,
        email: null,
        password: null,
        name: {
            firstName: 'Anonymous User',
            lastName: null,
            nickName: null
        }
    }
};
var INIT_APP_STATE = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* InjectionToken */]('app.state');
var AppStateService = /** @class */ (function () {
    function AppStateService(config, storage) {
        var _this = this;
        this.storage = storage;
        this.state = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](initialAppState);
        this.errMsg = 'Houston, we have a problem (AppStateService)';
        this.init = function (config) {
            _this.storage.ready().then(function () { return _this.retrieveStorageValues(config); });
        };
        this.retrieveStorageValues = function (config) {
            _this.storage.get('app').then(function (state) {
                // Init from localStorage (if set) or config (INIT_APP_STATE)
                if (state && state.user && state.user.email && state.user.password) {
                    state.timestamp = new Date(Date.now()).toLocaleTimeString();
                    _this.setState(state);
                }
                else {
                    _this.setState(config);
                }
            });
        };
        // Creates an Observable called 'changes'
        // Subscribe to 'changes' to rcv updates to state
        this.changes = this.state.asObservable().distinctUntilChanged()
            .do(function (changes) {
            _this.storage.set('app', changes);
        });
        this.getState = function () {
            return _this.state.value;
        };
        this.setState = function (state) {
            // The 'next' method will also trigger 'changes' to emit the new values
            _this.state.next(state);
        };
        // Helper methods to update loading status
        this.startLoading = function () {
            var state = Object.assign({}, _this.getState());
            state.isLoading = true;
            _this.setState(state);
        };
        this.stopLoading = function () {
            var state = Object.assign({}, _this.getState());
            state.isLoading = false;
            _this.setState(state);
        };
        this.init(config);
    }
    AppStateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(INIT_APP_STATE)),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AppStateService);
    return AppStateService;
}());

//# sourceMappingURL=app.state.js.map

/***/ })

},[251]);
//# sourceMappingURL=main.js.map