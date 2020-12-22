(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-login-login-module"],{

/***/ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angular-6-social-login/angular-6-social-login.umd.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js")) :
	undefined;
}(this, (function (exports,core,common,rxjs) { 'use strict';

var AuthServiceConfig = (function () {
    /**
     * @param {?} providers
     */
    function AuthServiceConfig(providers) {
        this.providers = new Map();
        for (var i = 0; i < providers.length; i++) {
            var element = providers[i];
            this.providers.set(element.id, element.provider);
        }
    }
    return AuthServiceConfig;
}());
var AuthService = (function () {
    /**
     * @param {?} config
     */
    function AuthService(config) {
        var _this = this;
        this._user = null;
        this._authState = new rxjs.BehaviorSubject(null);
        this.providers = config.providers;
        this.providers.forEach(function (provider, key) {
            provider.initialize().then(function (user) {
                user.provider = key;
                _this._user = user;
                _this._authState.next(user);
            }).catch(function (err) {
                // this._authState.next(null);
            });
        });
    }
    Object.defineProperty(AuthService.prototype, "authState", {
        /**
         * @return {?}
         */
        get: function () {
            return this._authState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} providerId
     * @return {?}
     */
    AuthService.prototype.signIn = function (providerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ providerObject = _this.providers.get(providerId);
            if (providerObject) {
                providerObject.signIn().then(function (user) {
                    user.provider = providerId;
                    resolve(user);
                    _this._user = user;
                    _this._authState.next(user);
                });
            }
            else {
                reject(AuthService.LOGIN_PROVIDER_NOT_FOUND);
            }
        });
    };
    /**
     * @return {?}
     */
    AuthService.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._user && _this._user.provider) {
                var /** @type {?} */ providerId = _this._user.provider;
                var /** @type {?} */ providerObject = _this.providers.get(providerId);
                providerObject.signOut().then(function () {
                    _this._user = null;
                    _this._authState.next(null);
                    resolve();
                }).catch(function (err) {
                    _this._authState.next(null);
                });
            }
            else {
                reject(AuthService.LOGIN_PROVIDER_NOT_FOUND);
            }
        });
    };
    return AuthService;
}());
AuthService.LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
AuthService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
AuthService.ctorParameters = function () { return [
    { type: AuthServiceConfig, },
]; };

var SocialLoginModule = (function () {
    function SocialLoginModule() {
    }
    return SocialLoginModule;
}());
SocialLoginModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                providers: [
                    AuthService
                ]
            },] },
];
/**
 * @nocollapse
 */
SocialLoginModule.ctorParameters = function () { return []; };

var SocialUser = (function () {
    function SocialUser() {
    }
    return SocialUser;
}());
var LoginProviderClass = (function () {
    function LoginProviderClass() {
    }
    return LoginProviderClass;
}());
var LinkedInResponse = (function () {
    function LinkedInResponse() {
    }
    return LinkedInResponse;
}());

/**
 * @abstract
 */
var BaseLoginProvider = (function () {
    function BaseLoginProvider() {
    }
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.initialize = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.signIn = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.signOut = function () { };
    /**
     * @param {?} obj
     * @param {?} onload
     * @return {?}
     */
    BaseLoginProvider.prototype.loadScript = function (obj, onload) {
        if (document.getElementById(obj.name)) {
            return;
        }
        var /** @type {?} */ signInJS = document.createElement('script');
        signInJS.async = true;
        signInJS.src = obj.url;
        signInJS.onload = onload;
        if (obj.name === 'LINKEDIN') {
            signInJS.async = false;
            signInJS.text = ('api_key: ' + obj.id).replace('\'', '');
        }
        document.head.appendChild(signInJS);
    };
    return BaseLoginProvider;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GoogleLoginProvider = (function (_super) {
    __extends(GoogleLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function GoogleLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'google';
        _this.loginProviderObj.url = 'https://apis.google.com/js/platform.js';
        return _this;
    }
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                gapi.load('auth2', function () {
                    _this.auth2 = gapi.auth2.init({
                        client_id: _this.clientId,
                        scope: 'email'
                    });
                    _this.auth2.then(function () {
                        if (_this.auth2.isSignedIn.get()) {
                            resolve(_this.drawUser());
                        }
                    });
                });
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.drawUser = function () {
        var /** @type {?} */ user = new SocialUser();
        var /** @type {?} */ profile = this.auth2.currentUser.get().getBasicProfile();
        var /** @type {?} */ authResponseObj = this.auth2.currentUser.get().getAuthResponse(true);
        user.id = profile.getId();
        user.name = profile.getName();
        user.email = profile.getEmail();
        user.image = profile.getImageUrl();
        user.token = authResponseObj.access_token;
        user.idToken = authResponseObj.id_token;
        return user;
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ promise = _this.auth2.signIn();
            promise.then(function () {
                resolve(_this.drawUser());
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth2.signOut().then(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return GoogleLoginProvider;
}(BaseLoginProvider));
GoogleLoginProvider.PROVIDER_ID = 'google';

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FacebookLoginProvider = (function (_super) {
    __extends$1(FacebookLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function FacebookLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'facebook';
        _this.loginProviderObj.url = 'https://connect.facebook.net/en_US/sdk.js';
        return _this;
    }
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                FB.init({
                    appId: _this.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.10'
                });
                FB.AppEvents.logPageView();
                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        var /** @type {?} */ accessToken_1 = FB.getAuthResponse()['accessToken'];
                        FB.api('/me?fields=name,email,picture', function (res) {
                            resolve(FacebookLoginProvider.drawUser(Object.assign({}, { token: accessToken_1 }, res)));
                        });
                    }
                });
            });
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    FacebookLoginProvider.drawUser = function (response) {
        var /** @type {?} */ user = new SocialUser();
        user.id = response.id;
        user.name = response.name;
        user.email = response.email;
        user.token = response.token;
        user.image = 'https://graph.facebook.com/' + response.id + '/picture?type=normal';
        return user;
    };
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.signIn = function () {
        return new Promise(function (resolve, reject) {
            FB.login(function (response) {
                if (response.authResponse) {
                    var /** @type {?} */ accessToken_2 = FB.getAuthResponse()['accessToken'];
                    FB.api('/me?fields=name,email,picture', function (res) {
                        resolve(FacebookLoginProvider.drawUser(Object.assign({}, { token: accessToken_2 }, res)));
                    });
                }
            }, { scope: 'email,public_profile' });
        });
    };
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            FB.logout(function (response) {
                resolve();
            });
        });
    };
    return FacebookLoginProvider;
}(BaseLoginProvider));
FacebookLoginProvider.PROVIDER_ID = 'facebook';

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LinkedinLoginProvider = (function (_super) {
    __extends$2(LinkedinLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function LinkedinLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'linkedin';
        _this.loginProviderObj.url = 'https://platform.linkedin.com/in.js';
        return _this;
    }
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                IN.init({
                    api_key: _this.clientId,
                    authorize: true,
                    onLoad: _this.onLinkedInLoad()
                });
                IN.Event.on(IN, 'auth', function () {
                    if (IN.User.isAuthorized()) {
                        IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result(function (res) {
                            resolve(_this.drawUser(res));
                        });
                    }
                });
            });
        });
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.onLinkedInLoad = function () {
        IN.Event.on(IN, 'systemReady', function () {
            IN.User.refresh();
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    LinkedinLoginProvider.prototype.drawUser = function (response) {
        var /** @type {?} */ user = new SocialUser();
        user.id = response.emailAddress;
        user.name = response.firstName + ' ' + response.lastName;
        user.email = response.emailAddress;
        user.image = response.pictureUrl;
        user.token = IN.ENV.auth.oauth_token;
        return user;
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            IN.User.authorize(function () {
                IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result(function (res) {
                    resolve(_this.drawUser(res));
                });
            });
        });
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            IN.User.logout(function (response) {
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    return LinkedinLoginProvider;
}(BaseLoginProvider));
LinkedinLoginProvider.PROVIDER_ID = 'linkedin';

exports.SocialLoginModule = SocialLoginModule;
exports.AuthService = AuthService;
exports.AuthServiceConfig = AuthServiceConfig;
exports.SocialUser = SocialUser;
exports.LoginProviderClass = LoginProviderClass;
exports.LinkedInResponse = LinkedInResponse;
exports.FacebookLoginProvider = FacebookLoginProvider;
exports.GoogleLoginProvider = GoogleLoginProvider;
exports.LinkedinLoginProvider = LinkedinLoginProvider;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/primeng/checkbox.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/checkbox.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/checkbox/checkbox */ "./node_modules/primeng/components/checkbox/checkbox.js"));

/***/ }),

/***/ "./node_modules/primeng/components/checkbox/checkbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/checkbox/checkbox.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
exports.CHECKBOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Checkbox; }),
    multi: true
};
var Checkbox = /** @class */ (function () {
    function Checkbox(cd) {
        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.focused = false;
        this.checked = false;
    }
    Checkbox.prototype.onClick = function (event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled || this.readonly) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel();
        if (focus) {
            checkbox.focus();
        }
    };
    Checkbox.prototype.updateModel = function () {
        if (!this.binary) {
            if (this.checked)
                this.addValue();
            else
                this.removeValue();
            this.onModelChange(this.model);
            if (this.formControl) {
                this.formControl.setValue(this.model);
            }
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit(this.checked);
    };
    Checkbox.prototype.handleChange = function (event) {
        if (!this.readonly) {
            this.checked = event.target.checked;
            this.updateModel();
        }
    };
    Checkbox.prototype.isChecked = function () {
        if (this.binary)
            return this.model;
        else
            return this.model && this.model.indexOf(this.value) > -1;
    };
    Checkbox.prototype.removeValue = function () {
        var _this = this;
        this.model = this.model.filter(function (val) { return val !== _this.value; });
    };
    Checkbox.prototype.addValue = function () {
        if (this.model)
            this.model = this.model.concat([this.value]);
        else
            this.model = [this.value];
    };
    Checkbox.prototype.onFocus = function (event) {
        this.focused = true;
    };
    Checkbox.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
    };
    Checkbox.prototype.writeValue = function (model) {
        this.model = model;
        this.checked = this.isChecked();
        this.cd.markForCheck();
    };
    Checkbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Checkbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Checkbox.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Checkbox.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "binary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Checkbox.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "labelStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormControl)
    ], Checkbox.prototype, "formControl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "checkboxIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Checkbox.prototype, "readonly", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Checkbox.prototype, "onChange", void 0);
    Checkbox = __decorate([
        core_1.Component({
            selector: 'p-checkbox',
            template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"{'ui-chkbox ui-widget': true,'ui-chkbox-readonly': readonly}\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [name]=\"name\" [readonly]=\"readonly\" [value]=\"value\" [checked]=\"checked\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\"\n                [ngClass]=\"{'ui-state-focus':focused}\" (change)=\"handleChange($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,cb,true)\"\n                        [ngClass]=\"{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"checked ? checkboxIcon : null\"></span>\n            </div>\n        </div>\n        <label (click)=\"onClick($event,cb,true)\" [class]=\"labelStyleClass\"\n                [ngClass]=\"{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n                *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
            providers: [exports.CHECKBOX_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], Checkbox);
    return Checkbox;
}());
exports.Checkbox = Checkbox;
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Checkbox],
            declarations: [Checkbox]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());
exports.CheckboxModule = CheckboxModule;
//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\r\n\r\n<!-- <ngx-spinner  bdOpacity = 0.1  bdColor = \"rgba(255,255,255,0.9)\"  size = \"default\"  color = \"#060606\"  type = \"ball-clip-rotate\"  [fullScreen] = \"false\"  >\r\n        <p style=\"color: #000\" > Authendicating... </p>\r\n</ngx-spinner> -->\r\n\r\n<div class=\"ui-g-12\" style=\"padding: 5% 0;;background: url(./assets/img/home-bg1.png) no-repeat center center;\r\nbackground-size: cover;height: 100%;\">\r\n\r\n\r\n\r\n    <div class=\"ui-g-12 ui-md-4 ui-md-offset-4\">\r\n        <!-- <img src=\"Card\" src=\"http://localhost:8082/static/uploads/1ff378a1b901b5eae043ebba354869811574952066723.png\" > -->\r\n\r\n        <p-messages class=\"ui-g-12\" styleClass=\"loagin-wrapper\"></p-messages>\r\n        <!-- <div class=\"ui-g-12\"  style=\"text-align: center;position: relative;height: 100px;\">\r\n        <a routerLink=\"\">\r\n          <img src=\"Card\" src=\"./assets/img/comp_logo.png\" style=\"    max-height: 100%;  max-width: 100%;   left: 0;   right: 0;    top: 0;     bottom: 0;   margin: auto;\">\r\n        </a>\r\n    </div> -->\r\n        <p-card class=\"login-form  ui-g-12\">\r\n            \r\n\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" style=\"text-align: center\">\r\n                <div class=\"ui-g ui-fluid\">\r\n\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <h2>Login</h2>\r\n                        <span>With your Account</span>\r\n                        <div class=\"ui-g ui-fluid\">\r\n                            <div class=\"ui-g-12 ui-md-6\">\r\n                                <button pButton (click)=\"socialSignIn('facebook')\" icon=\"fa fa-facebook\" iconPos=\"left\"  label=\"Login with Facebook\" class=\"ui-button-raised \">  </button>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-6\">\r\n                                <button pButton (click)=\"socialSignIn('google')\" icon=\"pi pi-google\" iconPos=\"left\"  label=\"Login with Google\" class=\"ui-button-raised ui-button-danger\">  </button>\r\n                            </div>\r\n                        </div>\r\n                        <p>------------------ Or ------------------</p>\r\n                    </div>\r\n\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-envelope\"></i></span>\r\n                            <input type=\"text\" pInputText placeholder=\"User Email\" formControlName=\"user_email\"\r\n                                required>\r\n                        </div>\r\n                        <p class=\"error-msg\"\r\n                            *ngIf=\"!loginForm.controls['user_email'].valid && (loginForm.controls['user_email'].dirty || loginForm.controls['user_email'].touched)\">\r\n                            <em *ngIf=\"loginForm.controls['user_email'].errors['required']\"> User Email is required\r\n                            </em>\r\n                            <em *ngIf=\"loginForm.controls['user_email'].errors['pattern']\"> Invalid Email </em>\r\n                        </p>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-key\"></i></span>\r\n                            <input type=\"text\" pInputText placeholder=\"Password\" formControlName=\"user_pwd\" required>\r\n                        </div>\r\n                        <p class=\"error-msg\"\r\n                            *ngIf=\"!loginForm.controls['user_pwd'].valid && (loginForm.controls['user_pwd'].dirty || loginForm.controls['user_pwd'].touched)\">\r\n                            <em *ngIf=\"loginForm.controls['user_pwd'].errors['required']\">Password is required </em>\r\n                        </p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"ui-g-6 ui-md-6\">\r\n                        <p-checkbox name=\"groupname\" label=\"Remember Me\" binary=\"true\" formControlName=\"rememberMe\">\r\n                        </p-checkbox>\r\n                    </div>\r\n                </div>\r\n                <p-footer>\r\n                    <button *ngIf=\"!showSpinner\" pButton type=\"submit\" label=\"Login\" class=\"ui-button-raised \"\r\n                        style=\"margin-right: .25em;    width: 100% !important;\"></button>\r\n                    <button *ngIf=\"showSpinner\" pButton type=\"submit\" disabled label=\"Logging In...\"\r\n                        icon=\"pi pi-spinner pi-spin\" class=\"ui-button-raised \"\r\n                        style=\"margin-right: .25em;    width: 100% !important;\"></button>\r\n                </p-footer>\r\n            </form>\r\n            <p>------------------ Or ------------------</p>\r\n            <p-footer>\r\n                <p>Don't have an account? <a rel=\"noopener noreferrer\" routerLink=\"/register\">Register</a></p>\r\n\r\n\r\n                <a rel=\"noopener noreferrer\" routerLink=\"/forgot-password\">Forgot Password?</a>\r\n                <!-- <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-info-circle\" label=\"Show\"></button> -->\r\n\r\n            </p-footer>\r\n        </p-card>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"ui-g-12 \">\r\n    <app-footer></app-footer>\r\n</div> -->\r\n\r\n\r\n\r\n<p-dialog [(visible)]=\"display\" [showHeader]=\"false\" [baseZIndex]=\"10000\" [modal]=\"true\">\r\n\r\n    <div style=\"text-align: center;padding: 16px;\">\r\n        <i class=\"pi pi-exclamation-triangle\"\r\n            style=\"    color: #fff;   background:#FF9800;     border-radius: 100%;margin: 10px;font-size: 50px\"></i>\r\n\r\n        <h5 style=\"margin-top: 5px;color: #000;font-weight: 500;margin-bottom: 5px;\"> Account Deactivated! </h5>\r\n        <p>{{errorMsg}}</p>\r\n    </div>\r\n\r\n    <div class=\"ui-g ui-fluid\" style=\"margin-bottom: 5px;text-align: center;\">\r\n        <div class=\"ui-g-12\">\r\n            <button style=\"padding: 0.429em 1em;\" type=\"button\" pButton (click)=\"display=false\" label=\"Cancel\"\r\n                class=\"ui-button-secondary\"></button>\r\n        </div>\r\n    </div>\r\n</p-dialog>");

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
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL0Y6XFxiYWdlZVxcaW52ZW50b3J5LW1uZ3RcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVdFLGVBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gd2lkdGg6IDQwMHB4O1xyXG4gIC8vIG1heC1oZWlnaHQ6IDQ0MHB4O1xyXG4gIC8vIGhlaWdodDogYXV0bztcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiAwO1xyXG4gIC8vIGJvdHRvbTogMDtcclxuICAvLyBsZWZ0OiAwO1xyXG4gIC8vIHJpZ2h0OiAwO1xyXG4gIC8vIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLy8gLmxvYWdpbi13cmFwcGVye1xyXG4vLyAgIG1hcmdpbi10b3A6IDEwJTtcclxuLy8gfVxyXG5cclxuIiwiLmxvZ2luLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */");

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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__);









let LoginComponent = class LoginComponent {
    constructor(auth, _fb, messageService, router, spinner, sessionService, socialAuthService) {
        this.auth = auth;
        this._fb = _fb;
        this.messageService = messageService;
        this.router = router;
        this.spinner = spinner;
        this.sessionService = sessionService;
        this.socialAuthService = socialAuthService;
        this.display = false;
        if (this.sessionService.getItem('inventryLogedIn')) {
            this.router.navigate(["/inventory-mngt/dashboard"]);
        }
        // this.socket = io(environment.api_url);
        this.loginForm = this._fb.group({
            // userName: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
            user_pwd: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rememberMe: [false]
        });
    }
    ngOnInit() {
        if (localStorage.getItem('rememberMe') == 'true') {
            this.loginForm.controls['user_email'].setValue(localStorage.getItem('user_email'));
            this.loginForm.controls['user_pwd'].setValue(localStorage.getItem('user_pwd'));
            this.loginForm.controls['rememberMe'].setValue(localStorage.getItem('rememberMe') == 'true' ? true : false);
        }
        else {
            // sessionStorage.clear()
            localStorage.clear();
        }
    }
    checkValidity() {
        Object.keys(this.loginForm.controls).forEach((key) => {
            this.loginForm.controls[key].markAsDirty();
        });
    }
    socialSignIn(socialPlatform) {
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "linkedin") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["LinkedinLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
            console.log(socialPlatform + " sign in data : ", userData);
            this.router.navigate(["/register"], { queryParams: userData });
        });
    }
    onLogin() {
        if (this.loginForm.invalid) {
            this.checkValidity();
            return false;
        }
        console.log(this.loginForm.value);
        this.messageService.clear();
        this.showSpinner = true;
        this.auth.logIn(this.loginForm.value)
            .subscribe((data) => {
            console.log('data', data);
            this.messageService.clear();
            this.spinner.hide();
            this.showSpinner = false;
            if (data.user.status == 0) {
                this.display = true;
                this.errorMsg = 'Your account is deactivated by Company admin';
                // this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account is deactivated by Company admin!'});
                return false;
            }
            // if(data.user.status == 2){
            // this.display = true
            // this.errorMsg = 'Your account has been expired. Contact Ownwaysoft.com';
            // this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account has been expired. Contact Ownwaysoft.com!'});
            //   return false;
            // }
            if (data.token) {
                // setTimeout(() => {
                this.display = false;
                // this.socket.emit('loginTodo', data.user);
                this.sessionService.setItem("inventryLogedIn", "1");
                this.sessionService.setItem('secret_token', data.token);
                this.sessionService.setUserCredentials(data.user);
                if (this.loginForm.value.rememberMe) {
                    localStorage.setItem('user_email', data.user.user_email);
                    localStorage.setItem('user_pwd', data.user.user_pwd);
                    localStorage.setItem('rememberMe', this.loginForm.value.rememberMe);
                }
                else {
                    localStorage.clear();
                }
                if (data.user.status == 2) {
                    this.router.navigate(["/inventory-mngt/product-buy"]);
                }
                else {
                    this.router.navigate(["/inventory-mngt/dashboard"]);
                }
                this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Login success!' });
                //  }, 1000);
            }
            else {
                this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Check your User Name/Password' });
            }
        }, error => {
            console.log('er', error);
            this.spinner.hide();
            this.showSpinner = false;
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
            // this.sessionService.setItem("inventryLogedIn", "1");
            // this.router.navigate(["/dashboard"]);
        });
    }
    showDialog() {
        this.display = true;
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthLoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthLoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/component/login/login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/component/login/login.module.ts ***!
  \*************************************************/
/*! exports provided: getAuthServiceConfigs, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
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
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../header/header.module */ "./src/app/component/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/component/footer/footer.module.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__);

















// Configs 
function getAuthServiceConfigs() {
    let config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["FacebookLoginProvider"]("260032388619720")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["GoogleLoginProvider"]("462894231357-kn0c0bpvfplu6ihaipjeoocro148ough.apps.googleusercontent.com")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["LinkedinLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["LinkedinLoginProvider"]("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
        }
    ]);
    return config;
}
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
            _header_header_module__WEBPACK_IMPORTED_MODULE_13__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_14__["FooterModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["SocialLoginModule"]
        ], providers: [
            {
                provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_16__["AuthServiceConfig"],
                useFactory: getAuthServiceConfigs
            }
        ],
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=component-login-login-module-es2015.js.map