(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/forgot-password/forgot-password.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/forgot-password/forgot-password.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\r\n<ngx-spinner  bdOpacity = 0.1  bdColor = \"rgba(255,255,255,0.9)\"  size = \"default\"  color = \"#060606\"  type = \"ball-clip-rotate\"  [fullScreen] = \"false\"  >\r\n    <p style=\"color: #000\" > Sending email... </p>\r\n</ngx-spinner>\r\n<div  class=\"ui-g-12\" style=\"padding: 5% 0;background: url(./assets/img/home-bg3.png) no-repeat center center;\r\nbackground-size: cover;height: 100%;\">\r\n  \r\n      <div class=\"ui-g-12 ui-md-4 ui-md-offset-4\">\r\n    \r\n    <p-messages class=\"ui-g-12\" styleClass=\"loagin-wrapper\" ></p-messages>\r\n    <!-- <div class=\"ui-g-12\"  style=\"text-align: center;position: relative;height: 100px;\">\r\n    <a routerLink=\"\">\r\n      <img src=\"Card\" src=\"./assets/img/comp_logo.png\" style=\"    max-height: 100%;  max-width: 100%;   left: 0;   right: 0;    top: 0;     bottom: 0;   margin: auto;\">\r\n    </a>\r\n</div> -->\r\n    \r\n        <p-card  class=\"login-form ui-g-12 ui-md-12\" *ngIf=\"!successRegister\">\r\n          <form [formGroup]=\"forgotForm\" (ngSubmit)=\"forgotPassword()\" style=\"text-align: center\">\r\n         \r\n          <div class=\"ui-g ui-fluid\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                  <h2>Forgot Your Password?</h2>\r\n                  <span>Please enter your Email to reset your password</span>\r\n              </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-envelope\"></i></span>\r\n                        <input type=\"text\" pInputText placeholder=\"Email\" formControlName=\"email\" required style=\"    width: 100%;\">              \r\n                   </div>\r\n                   <p  class=\"error-msg\" *ngIf=\"!forgotForm.controls['email'].valid && (forgotForm.controls['email'].dirty || forgotForm.controls['email'].touched)\">\r\n                      <em *ngIf=\"forgotForm.controls['email'].errors['required']\"> Recovery Email is required    </em>\r\n                      <em *ngIf=\"forgotForm.controls['email'].errors['pattern']\">  Invalid Email    </em>\r\n                   </p>\r\n               \r\n                </div>\r\n           \r\n        \r\n              \r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <button pButton type=\"submit\" label=\"Send Reset Password Link\"  class=\"ui-button-raised \" style=\"margin-right: .25em;    width: 100%;\" ></button>\r\n\r\n              </div>\r\n            </div>\r\n                <div style=\"text-align: center\">\r\n              <a  rel=\"noopener noreferrer\"  routerLink=\"/login\"  >Login?</a>\r\n                </div>\r\n        </form>\r\n      </p-card>\r\n      <p-card  class=\"login-form ui-g-12 ui-md-12\"  *ngIf=\"successRegister\" >\r\n        <div style=\"text-align: center\">\r\n            <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;margin: 10px;font-size: 50px\"></i>\r\n        <h3>Password Reset Mail Sent</h3> \r\n        <p>An email has been sent to your rescue email address, <b>{{this.forgotForm.value.email}}</b> . Follow the direction in the email to reset your password. </p>\r\n          </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n  <!-- <div  class=\"ui-g-12 \">\r\n      <app-footer></app-footer>\r\n</div> -->");

/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/forgot-password/forgot-password-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function() { return ForgotPasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/component/forgot-password/forgot-password.component.ts");




const routes = [
    { path: '', component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"] }
];
let ForgotPasswordRoutingModule = class ForgotPasswordRoutingModule {
};
ForgotPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ForgotPasswordRoutingModule);



/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/forgot-password/forgot-password.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  margin-top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ZvcmdvdC1wYXNzd29yZC9GOlxcYmFnZWVcXGludmVudG9yeS1tbmd0XFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBV0ksZUFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyB3aWR0aDogNDAwcHg7XHJcbiAgICAvLyBtYXgtaGVpZ2h0OiA0NDBweDtcclxuICAgIC8vIGhlaWdodDogYXV0bztcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogMDtcclxuICAgIC8vIGJvdHRvbTogMDtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbiAgICAvLyByaWdodDogMDtcclxuICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICB9XHJcbiAgLy8gLmxvYWdpbi13cmFwcGVye1xyXG4gIC8vICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIC8vIH1cclxuICBcclxuICAiLCIubG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/forgot-password/forgot-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");








let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(auth, _fb, messageService, router, spinner, sessionService) {
        this.auth = auth;
        this._fb = _fb;
        this.messageService = messageService;
        this.router = router;
        this.spinner = spinner;
        this.sessionService = sessionService;
        this.successRegister = false;
        if (this.sessionService.getItem('inventryLogedIn')) {
            this.router.navigate(["/dashboard"]);
        }
        this.forgotForm = this._fb.group({
            // userName: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
        });
    }
    ngOnInit() { }
    checkValidity() {
        Object.keys(this.forgotForm.controls).forEach((key) => {
            this.forgotForm.controls[key].markAsDirty();
        });
    }
    forgotPassword() {
        console.log(this.forgotForm.value);
        if (this.forgotForm.invalid) {
            this.checkValidity();
            return false;
        }
        this.spinner.show();
        this.auth.forgotPassword(this.forgotForm.value)
            .subscribe((data) => {
            console.log(data);
            this.spinner.hide();
            this.messageService.clear();
            if (data == 2) {
                this.messageService.add({ severity: 'warn', summary: this.forgotForm.value.email, detail: ' No user found with that email address.!' });
                this.forgotForm.controls['email'].setErrors({ 'emailExist': true });
                this.forgotForm.controls['email'].markAsDirty();
                // this. resetPassword()
            }
            else if (data == 1) {
                this.successRegister = true;
                this.forgotForm.controls['email'].setErrors({ 'emailExist': null });
                this.forgotForm.controls['email'].updateValueAndValidity();
            }
            else {
                this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Please try again!' });
                this.successRegister = false;
                this.spinner.hide();
            }
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
            this.successRegister = false;
            this.spinner.hide();
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthLoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/component/forgot-password/forgot-password.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthLoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/forgot-password/forgot-password.module.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/component/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/component/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.module */ "./src/app/component/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/component/footer/footer.module.ts");













let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_8__["MessageModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_7__["MessagesModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"]
        ]
    })
], ForgotPasswordModule);



/***/ })

}]);
//# sourceMappingURL=component-forgot-password-forgot-password-module-es2015.js.map