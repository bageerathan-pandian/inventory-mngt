(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner  bdOpacity = 0.1  bdColor = \"rgba(255,255,255,0.9)\"  size = \"default\"  color = \"#060606\"  type = \"ball-clip-rotate\"  [fullScreen] = \"false\"  >\n        <p style=\"color: #000\" > Authendicating... </p>\n</ngx-spinner>\n<div  class=\"ui-g-12 ui-md-4 ui-md-offset-4\">\n      \n    <p-messages class=\"ui-g-12\" styleClass=\"loagin-wrapper\" ></p-messages>\n<div class=\"ui-g-12\"  style=\"text-align: center;position: relative;height: 100px;\">\n        <a routerLink=\"/login\">\n          <img src=\"Card\" src=\"./assets/img/comp_logo.png\" style=\"    max-height: 100%;  max-width: 100%;   left: 0;   right: 0;    top: 0;     bottom: 0;   margin: auto;\">\n        </a>\n    </div>\n    <p-card  class=\"login-form ui-g-12 ui-md-12\" >\n           \n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" style=\"text-align: center\">\n        <div class=\"ui-g ui-fluid\">\n\n                <div class=\"ui-g-12 ui-md-12\">\n                    <h2>Login</h2>\n                    <span>with your business Account</span>\n                </div>\n        \n            <div class=\"ui-g-12 ui-md-12\">\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-envelope\"></i></span>\n                    <input type=\"text\" pInputText placeholder=\"User Email\" formControlName=\"user_email\" required >              \n               </div>\n                <p class=\"error-msg\" *ngIf=\"!loginForm.controls['user_email'].valid && (loginForm.controls['user_email'].dirty || loginForm.controls['user_email'].touched)\">\n                    <em *ngIf=\"loginForm.controls['user_email'].errors['required']\"> User Email is required    </em>\n                    <em *ngIf=\"loginForm.controls['user_email'].errors['pattern']\">  Invalid Email    </em>\n                 </p>\n            \n            </div>\n      \n            \n      \n            <div class=\"ui-g-12 ui-md-12\">\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-key\"></i></span>\n                    <input type=\"text\" pInputText placeholder=\"Password\" formControlName=\"user_pwd\" required>         \n                </div>\n                <p class=\"error-msg\" *ngIf=\"!loginForm.controls['user_pwd'].valid && (loginForm.controls['user_pwd'].dirty || loginForm.controls['user_pwd'].touched)\">\n                        <em *ngIf=\"loginForm.controls['user_pwd'].errors['required']\">Password is required  </em>\n                     </p>\n               \n            </div>\n            \n            <div class=\"ui-g-6 ui-md-6\">\n            <p-checkbox name=\"groupname\" label=\"Remember Me\"  binary=\"true\" formControlName=\"rememberMe\"  ></p-checkbox>\n          </div>\n          </div>\n        <p-footer>\n            <button pButton type=\"submit\" label=\"Login\"  class=\"ui-button-raised \" style=\"margin-right: .25em;    width: 100%;\" ></button>\n        </p-footer>\n      </form>\n      <p>------------------ Or ------------------</p>\n      <p-footer>\n                    <p >Don't have an account? <a  rel=\"noopener noreferrer\"  routerLink=\"/register\" >Register</a></p>\n                \n                  \n                <a  rel=\"noopener noreferrer\"  routerLink=\"/forgot-password\" >Forgot Password?</a>\n           \n      </p-footer>\n    </p-card>\n    \n    <div style=\"text-align: center\">\n        <div>2019@ Ownwaysoft.com Made with <span class=\"color-red\">❤</span>.</div>\n        <div>Version : 1.0.0</div>\n      </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/component/login/login-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/login/login-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/component/login/login.component.ts");




const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  text-align: center;\n}\n\n.loagin-wrapper {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL0U6XFxvd253YXlzb2Z0LmNvbVxcaW52ZW50b3J5LW1uZ3RcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEVUE7RUFDRSxlQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIHdpZHRoOiA0MDBweDtcclxuICAvLyBtYXgtaGVpZ2h0OiA0NDBweDtcclxuICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHRvcDogMDtcclxuICAvLyBib3R0b206IDA7XHJcbiAgLy8gbGVmdDogMDtcclxuICAvLyByaWdodDogMDtcclxuICAvLyBtYXJnaW46IGF1dG87XHJcbn1cclxuLmxvYWdpbi13cmFwcGVye1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuIiwiLmxvZ2luLWZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2FnaW4td3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");








let LoginComponent = class LoginComponent {
    constructor(auth, _fb, messageService, router, spinner) {
        this.auth = auth;
        this._fb = _fb;
        this.messageService = messageService;
        this.router = router;
        this.spinner = spinner;
        if (this.auth.isLogedIn()) {
            this.router.navigate(["/dashboard"]);
        }
        this.socket = io(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api_url);
        this.loginForm = this._fb.group({
            // userName: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
            user_pwd: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rememberMe: [false]
        });
    }
    ngOnInit() {
        if (sessionStorage.getItem('rememberMe') == 'true') {
            this.loginForm.controls['user_email'].setValue(sessionStorage.getItem('user_email'));
            this.loginForm.controls['user_pwd'].setValue(sessionStorage.getItem('user_pwd'));
            this.loginForm.controls['rememberMe'].setValue(sessionStorage.getItem('rememberMe') == 'true' ? true : false);
        }
        else {
            sessionStorage.clear();
        }
    }
    checkValidity() {
        Object.keys(this.loginForm.controls).forEach((key) => {
            this.loginForm.controls[key].markAsDirty();
        });
    }
    onLogin() {
        if (this.loginForm.invalid) {
            this.checkValidity();
            return false;
        }
        console.log(this.loginForm.value);
        this.showSpinner = true;
        this.spinner.show();
        this.auth.logIn(this.loginForm.value)
            .subscribe((data) => {
            console.log('data', data);
            this.showSpinner = false;
            this.messageService.clear();
            if (data.user.status == 0) {
                this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Your account is deactivated by Company admin!' });
                return false;
            }
            if (data.user.status == 2) {
                this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Your account has been expired. Contact App!' });
                return false;
            }
            if (data.token) {
                // setTimeout(() => {
                this.spinner.hide();
                this.socket.emit('loginTodo', data.user);
                localStorage.setItem('secret_token', data.token);
                localStorage.setItem('user_details', JSON.stringify(data.user));
                localStorage.setItem('client_company_id', data.user.company_details_id._id);
                this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Login success!' });
                localStorage.setItem("inventryLogedIn", "1");
                if (this.loginForm.value.rememberMe == true) {
                    sessionStorage.setItem('user_email', this.loginForm.value.user_email);
                    sessionStorage.setItem('user_pwd', this.loginForm.value.user_pwd);
                    sessionStorage.setItem('rememberMe', this.loginForm.value.rememberMe);
                    sessionStorage.setItem('secret_token', data.token);
                }
                else {
                    sessionStorage.clear();
                }
                this.router.navigate(["/dashboard"]);
                //  }, 1000);
            }
            else {
                this.messageService.clear();
                this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Check your User Name/Password' });
            }
        }, error => {
            console.log('er', error);
            this.showSpinner = false;
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
            // localStorage.setItem("inventryLogedIn", "1");
            // this.router.navigate(["/dashboard"]);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/component/login/login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/component/login/login.module.ts ***!
  \*************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/component/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");














let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_9__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_10__["MessageModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckboxModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=component-login-login-module-es2015.js.map