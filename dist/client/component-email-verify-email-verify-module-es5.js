function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-email-verify-email-verify-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/email-verify/email-verify.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/email-verify/email-verify.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentEmailVerifyEmailVerifyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-header></app-header> -->\r\n<div  class=\"ui-g-12 ui-md-6 ui-md-offset-3\" style=\"margin-top: 10%;text-align: center\">\r\n    \r\n    <p-messages class=\"ui-g-12\" styleClass=\"loagin-wrapper\" ></p-messages>\r\n    \r\n    <p-card  class=\"login-form ui-g-12 ui-md-12\"  *ngIf=\"!isVerifying\">\r\n            <i class=\"pi pi-envelope\" style=\"    color: #fff;   background: #FF9800;     border-radius: 100%;margin: 10px;font-size: 50px\"></i>\r\n\r\n         \r\n          <div class=\"ui-g ui-fluid\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                  <h2>We are verifying your email address</h2>\r\n                  <span>Your identify is being verified. We will email your once your verificaton has completed.</span>\r\n          </div>\r\n        </div>  \r\n        <p-progressSpinner  [style]=\"{width: '50px', height: '50px'}\"></p-progressSpinner>\r\n\r\n      </p-card>\r\n      <p-card  class=\"login-form ui-g-12 ui-md-12\"  *ngIf=\"isVerifying\" >\r\n            <div class=\"ui-g ui-fluid\" *ngIf=\"status == 1\">\r\n                <div class=\"ui-g-12 ui-md-12\" style=\"text-align: center\">\r\n                    <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;margin: 10px;font-size: 50px\"></i>\r\n                <h3>Congratulations!</h3> \r\n                 <p>Your email has been verified successfully. </p>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                <button pButton type=\"submit\" label=\"Let's get started\" icon=\"pi pi-arrow-right\" iconPos=\"right\" class=\"ui-button-raised \" style=\"margin-right: .25em;    width: 100%;\" (click)=\"onLogin()\" ></button>\r\n\r\n                </div>\r\n             </div>\r\n             <div class=\"ui-g ui-fluid\" *ngIf=\"status == 2\">\r\n                 <div class=\"ui-g-12 ui-md-12\" style=\"text-align: center\">\r\n                     <i class=\"pi pi-times\" style=\"    color: #fff;   background: #e35b5b;     border-radius: 100%;margin: 10px;font-size: 50px\"></i>\r\n                 <h3>Oops!</h3> \r\n                  <p>This link is expired or invalid </p>\r\n                 </div>\r\n                 <div class=\"ui-g-12 ui-md-12\">\r\n                 <button pButton  label=\"Goto Home\"  icon=\"pi pi-home\" iconPos=\"left\" class=\"ui-button-raised \" style=\"margin-right: .25em;    width: 100%;\" routerLink=\"/home\"></button>\r\n \r\n                 </div>\r\n              </div>\r\n      </p-card>\r\n  </div>\r\n  \r\n\r\n  <!-- <div  class=\"ui-g-12 \">\r\n        <app-footer></app-footer>\r\n</div> -->";
    /***/
  },

  /***/
  "./src/app/component/email-verify/email-verify-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/component/email-verify/email-verify-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: EmailVerifyRoutingModule */

  /***/
  function srcAppComponentEmailVerifyEmailVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailVerifyRoutingModule", function () {
      return EmailVerifyRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _email_verify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./email-verify.component */
    "./src/app/component/email-verify/email-verify.component.ts");

    var routes = [{
      path: '',
      component: _email_verify_component__WEBPACK_IMPORTED_MODULE_3__["EmailVerifyComponent"]
    }];

    var EmailVerifyRoutingModule = function EmailVerifyRoutingModule() {
      _classCallCheck(this, EmailVerifyRoutingModule);
    };

    EmailVerifyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmailVerifyRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/email-verify/email-verify.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/component/email-verify/email-verify.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentEmailVerifyEmailVerifyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-form {\n  margin-top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2VtYWlsLXZlcmlmeS9GOlxcYmFnZWVcXGludmVudG9yeS1tbmd0XFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudFxcZW1haWwtdmVyaWZ5XFxlbWFpbC12ZXJpZnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9lbWFpbC12ZXJpZnkvZW1haWwtdmVyaWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBV00sZUFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2VtYWlsLXZlcmlmeS9lbWFpbC12ZXJpZnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gd2lkdGg6IDQwMHB4O1xyXG4gICAgICAvLyBtYXgtaGVpZ2h0OiA0NDBweDtcclxuICAgICAgLy8gaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vIHRvcDogMDtcclxuICAgICAgLy8gYm90dG9tOiAwO1xyXG4gICAgICAvLyBsZWZ0OiAwO1xyXG4gICAgICAvLyByaWdodDogMDtcclxuICAgICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcbiAgICAvLyAubG9hZ2luLXdyYXBwZXJ7XHJcbiAgICAvLyAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgIiwiLmxvZ2luLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/component/email-verify/email-verify.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component/email-verify/email-verify.component.ts ***!
    \******************************************************************/

  /*! exports provided: EmailVerifyComponent */

  /***/
  function srcAppComponentEmailVerifyEmailVerifyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function () {
      return EmailVerifyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var EmailVerifyComponent = /*#__PURE__*/function () {
      function EmailVerifyComponent(auth, sessionService, _fb, messageService, activeRoute, router, spinner) {
        _classCallCheck(this, EmailVerifyComponent);

        this.auth = auth;
        this.sessionService = sessionService;
        this._fb = _fb;
        this.messageService = messageService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.spinner = spinner;
        this.isVerifying = false;
        this.socket = io(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api_url);
        this.verifyForm = this._fb.group({
          _id: [this.activeRoute.snapshot.params.id],
          token: [this.activeRoute.snapshot.params.token, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(EmailVerifyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.verifyEmail();
        }
      }, {
        key: "verifyEmail",
        value: function verifyEmail() {
          var _this = this;

          if (this.verifyForm.invalid) {
            this.isVerifying = true;
            this.status = 2;
          }

          this.auth.verifiedEmail(this.verifyForm.value).subscribe(function (data) {
            console.log('data', data);
            _this.isVerifying = true;

            if (data.status == 1) {
              _this.status = 1;
              _this.userCredential = {
                user_email: data.user_email,
                user_pwd: data.user_pwd
              };
            }

            if (data.status == 2) {
              _this.status = 2;
            }

            if (data.status == 3) {
              _this.status = 2;
            } else {}
          }, function (error) {
            console.log('er', error);

            _this.messageService.add({
              severity: 'error',
              summary: 'Opps!',
              detail: 'Sothing went wrong!'
            });

            _this.isVerifying = true;
            _this.status = 2;
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this2 = this;

          console.log(this.userCredential); // this.spinner.show();

          this.auth.logIn(this.userCredential).subscribe(function (data) {
            console.log('data', data);

            _this2.messageService.clear();

            _this2.spinner.hide();

            if (data.token) {
              // setTimeout(() => {
              _this2.socket.emit('loginTodo', data.user);

              _this2.sessionService.setItem("inventryLogedIn", "1");

              _this2.sessionService.setItem('secret_token', data.token);

              _this2.sessionService.setItem('rememberMe', false);

              _this2.sessionService.setUserCredentials(data.user); // if(this.loginForm.value.rememberMe == true){
              //   this.sessionService.setItem('user_email', this.loginForm.value.user_email);
              //   this.sessionService.setItem('user_pwd',  this.loginForm.value.user_pwd);
              //   this.sessionService.setItem('rememberMe',  this.loginForm.value.rememberMe);
              //   this.sessionService.setItem('secret_token', data.token);
              // }else{
              //   this.sessionService.clear()
              // }


              _this2.router.navigate(["/inventory-mngt/dashboard"]);

              _this2.messageService.add({
                severity: 'success',
                summary: 'Success!',
                detail: 'Login success!'
              }); //  }, 1000);

            } else {
              _this2.messageService.clear();

              _this2.messageService.add({
                severity: 'warn',
                summary: 'Warning!',
                detail: 'Check your User Name/Password'
              });
            }
          }, function (error) {
            console.log('er', error);

            _this2.spinner.hide();

            _this2.messageService.add({
              severity: 'error',
              summary: 'Opps!',
              detail: 'Sothing went wrong!'
            }); // this.sessionService.setItem("inventryLogedIn", "1");
            // this.router.navigate(["/dashboard"]);

          });
        }
      }]);

      return EmailVerifyComponent;
    }();

    EmailVerifyComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthLoginService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
      }];
    };

    EmailVerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-email-verify',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./email-verify.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/email-verify/email-verify.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./email-verify.component.scss */
      "./src/app/component/email-verify/email-verify.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthLoginService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])], EmailVerifyComponent);
    /***/
  },

  /***/
  "./src/app/component/email-verify/email-verify.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/component/email-verify/email-verify.module.ts ***!
    \***************************************************************/

  /*! exports provided: EmailVerifyModule */

  /***/
  function srcAppComponentEmailVerifyEmailVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailVerifyModule", function () {
      return EmailVerifyModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _email_verify_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./email-verify-routing.module */
    "./src/app/component/email-verify/email-verify-routing.module.ts");
    /* harmony import */


    var _email_verify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./email-verify.component */
    "./src/app/component/email-verify/email-verify.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/message.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/messages.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../header/header.module */
    "./src/app/component/header/header.module.ts");
    /* harmony import */


    var _footer_footer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../footer/footer.module */
    "./src/app/component/footer/footer.module.ts");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_12__);

    var EmailVerifyModule = function EmailVerifyModule() {
      _classCallCheck(this, EmailVerifyModule);
    };

    EmailVerifyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_email_verify_component__WEBPACK_IMPORTED_MODULE_4__["EmailVerifyComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _email_verify_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailVerifyRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"], primeng_message__WEBPACK_IMPORTED_MODULE_7__["MessageModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_8__["MessagesModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_10__["FooterModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__["ProgressSpinnerModule"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"]]
    })], EmailVerifyModule);
    /***/
  }
}]);
//# sourceMappingURL=component-email-verify-email-verify-module-es5.js.map