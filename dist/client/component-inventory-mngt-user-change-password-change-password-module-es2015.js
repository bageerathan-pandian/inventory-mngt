(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-user-change-password-change-password-module"],{

/***/ "./node_modules/primeng/breadcrumb.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/breadcrumb.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/breadcrumb/breadcrumb */ "./node_modules/primeng/components/breadcrumb/breadcrumb.js"));

/***/ }),

/***/ "./node_modules/primeng/components/breadcrumb/breadcrumb.js":
/*!******************************************************************!*\
  !*** ./node_modules/primeng/components/breadcrumb/breadcrumb.js ***!
  \******************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
    }
    Breadcrumb.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    };
    Breadcrumb.prototype.onHomeClick = function (event) {
        if (this.home) {
            this.itemClick(event, this.home);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Breadcrumb.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Breadcrumb.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Breadcrumb.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Breadcrumb.prototype, "home", void 0);
    Breadcrumb = __decorate([
        core_1.Component({
            selector: 'p-breadcrumb',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all'\">\n            <ul>\n                <li class=\"ui-breadcrumb-home\" *ngIf=\"home\">\n                    <a *ngIf=\"!home.routerLink\" [href]=\"home.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [ngClass]=\"{'ui-state-disabled':home.disabled}\" [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\"[attr.tabindex]=\"home.tabindex ? home.tabindex : '0'\">\n                        <span [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                    </a>\n                    <a *ngIf=\"home.routerLink\" [routerLink]=\"home.routerLink\" [queryParams]=\"home.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"home.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [ngClass]=\"{'ui-state-disabled':home.disabled}\" [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\" [attr.tabindex]=\"home.tabindex ? home.tabindex : '0'\">\n                        <span [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                    </a>\n                </li>\n                <li class=\"ui-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"model&&home\"></li>\n                <ng-template ngFor let-item let-end=\"last\" [ngForOf]=\"model\">\n                    <li role=\"menuitem\">\n                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\">\n                            <span *ngIf=\"item.icon\" class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\"  [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\">\n                            <span *ngIf=\"item.icon\" class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </li>\n                    <li class=\"ui-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"!end\"></li>\n                </ng-template>\n            </ul>\n        </div>\n    "
        })
    ], Breadcrumb);
    return Breadcrumb;
}());
exports.Breadcrumb = Breadcrumb;
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            exports: [Breadcrumb, router_1.RouterModule],
            declarations: [Breadcrumb]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());
exports.BreadcrumbModule = BreadcrumbModule;
//# sourceMappingURL=breadcrumb.js.map

/***/ }),

/***/ "./node_modules/primeng/components/password/password.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/password/password.js ***!
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
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var Password = /** @class */ (function () {
    function Password(el, zone) {
        this.el = el;
        this.zone = zone;
        this.promptLabel = 'Enter a password';
        this.weakLabel = 'Weak';
        this.mediumLabel = 'Medium';
        this.strongLabel = 'Strong';
        this.feedback = true;
    }
    Object.defineProperty(Password.prototype, "showPassword", {
        set: function (show) {
            this.el.nativeElement.type = show ? 'text' : 'password';
        },
        enumerable: true,
        configurable: true
    });
    Password.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    Password.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    Password.prototype.updateFilledState = function () {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    };
    Password.prototype.createPanel = function () {
        this.panel = document.createElement('div');
        this.panel.className = 'ui-password-panel ui-widget ui-state-highlight ui-corner-all';
        this.meter = document.createElement('div');
        this.meter.className = 'ui-password-meter';
        this.info = document.createElement('div');
        this.info.className = 'ui-password-info';
        this.info.textContent = this.promptLabel;
        this.panel.appendChild(this.meter);
        this.panel.appendChild(this.info);
        this.panel.style.minWidth = domhandler_1.DomHandler.getOuterWidth(this.el.nativeElement) + 'px';
        document.body.appendChild(this.panel);
    };
    Password.prototype.onFocus = function (e) {
        var _this = this;
        if (this.feedback) {
            if (!this.panel) {
                this.createPanel();
            }
            this.panel.style.zIndex = String(++domhandler_1.DomHandler.zindex);
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    domhandler_1.DomHandler.addClass(_this.panel, 'ui-password-panel-visible');
                    domhandler_1.DomHandler.removeClass(_this.panel, 'ui-password-panel-hidden');
                }, 1);
                domhandler_1.DomHandler.absolutePosition(_this.panel, _this.el.nativeElement);
            });
        }
    };
    Password.prototype.onBlur = function (e) {
        var _this = this;
        if (this.feedback) {
            domhandler_1.DomHandler.addClass(this.panel, 'ui-password-panel-hidden');
            domhandler_1.DomHandler.removeClass(this.panel, 'ui-password-panel-visible');
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.ngOnDestroy();
                }, 150);
            });
        }
    };
    Password.prototype.onKeyup = function (e) {
        if (this.feedback) {
            var value = e.target.value, label = null, meterPos = null;
            if (value.length === 0) {
                label = this.promptLabel;
                meterPos = '0px 0px';
            }
            else {
                var score = this.testStrength(value);
                if (score < 30) {
                    label = this.weakLabel;
                    meterPos = '0px -10px';
                }
                else if (score >= 30 && score < 80) {
                    label = this.mediumLabel;
                    meterPos = '0px -20px';
                }
                else if (score >= 80) {
                    label = this.strongLabel;
                    meterPos = '0px -30px';
                }
            }
            this.meter.style.backgroundPosition = meterPos;
            this.info.textContent = label;
        }
    };
    Password.prototype.testStrength = function (str) {
        var grade = 0;
        var val;
        val = str.match('[0-9]');
        grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
        val = str.match('[a-zA-Z]');
        grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
        val = str.match('[!@#$%^&*?_~.,;=]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
        val = str.match('[A-Z]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
        grade *= str.length / 8;
        return grade > 100 ? 100 : grade;
    };
    Password.prototype.normalize = function (x, y) {
        var diff = x - y;
        if (diff <= 0)
            return x / y;
        else
            return 1 + 0.5 * (x / (x + y / 4));
    };
    Object.defineProperty(Password.prototype, "disabled", {
        get: function () {
            return this.el.nativeElement.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Password.prototype.ngOnDestroy = function () {
        if (this.panel) {
            document.body.removeChild(this.panel);
            this.panel = null;
            this.meter = null;
            this.info = null;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Password.prototype, "promptLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Password.prototype, "weakLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Password.prototype, "mediumLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Password.prototype, "strongLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Password.prototype, "feedback", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Password.prototype, "showPassword", null);
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Password.prototype, "onInput", null);
    __decorate([
        core_1.HostListener('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Password.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Password.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Password.prototype, "onKeyup", null);
    Password = __decorate([
        core_1.Directive({
            selector: '[pPassword]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone])
    ], Password);
    return Password;
}());
exports.Password = Password;
var PasswordModule = /** @class */ (function () {
    function PasswordModule() {
    }
    PasswordModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Password],
            declarations: [Password]
        })
    ], PasswordModule);
    return PasswordModule;
}());
exports.PasswordModule = PasswordModule;
//# sourceMappingURL=password.js.map

/***/ }),

/***/ "./node_modules/primeng/password.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/password.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/password/password */ "./node_modules/primeng/components/password/password.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/change-password/change-password.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/change-password/change-password.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <pre>{{ auth.getUserData() | json }}</pre> -->\r\n<p-toast position=\"top-right\"></p-toast>\r\n\r\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n        <div style=\"margin-top: 15px;\">\r\n\r\n<p-messages class=\"ui-g-12\" styleClass=\"loagin-wrapper\" ></p-messages>\r\n<p-card  class=\"ui-g-12\">\r\n    <form [formGroup]=\"changePasswordForm\" > \r\n    <div class=\"ui-g ui-fluid\" >\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"user_pwd\">Old Password</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"password\" id=\"user_pwd\" pPassword formControlName=\"user_pwd\" />\r\n                </div>\r\n            </div>\r\n            <p  class=\"error-msg\" *ngIf=\"!changePasswordForm.controls['user_pwd'].valid && (changePasswordForm.controls['user_pwd'].dirty || changePasswordForm.controls['user_pwd'].touched)\">\r\n                <em *ngIf=\"changePasswordForm.controls['user_pwd'].errors['required']\"> Old password is required    </em>\r\n                <em *ngIf=\"changePasswordForm.controls['cnfirm_user_pwd'].errors['oldMatch']\">  Old password incorrect    </em>\r\n            </p>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"new_user_pwd\">New Password</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"password\" id=\"new_user_pwd\" pPassword formControlName=\"new_user_pwd\"  />\r\n                </div>\r\n            </div>\r\n            <p  class=\"error-msg\" *ngIf=\"!changePasswordForm.controls['new_user_pwd'].valid && (changePasswordForm.controls['new_user_pwd'].dirty || changePasswordForm.controls['new_user_pwd'].touched)\">\r\n                <em *ngIf=\"changePasswordForm.controls['new_user_pwd'].errors['required']\"> New password is required    </em>\r\n             </p>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"year\">Confirm Password</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"password\" pPassword formControlName=\"cnfirm_user_pwd\" />\r\n                </div>\r\n            </div>\r\n            <p  class=\"error-msg\" *ngIf=\"!changePasswordForm.controls['cnfirm_user_pwd'].valid && (changePasswordForm.controls['cnfirm_user_pwd'].dirty || changePasswordForm.controls['cnfirm_user_pwd'].touched)\">\r\n                <em *ngIf=\"changePasswordForm.controls['cnfirm_user_pwd'].errors['required']\"> Confirm password is required    </em>\r\n                <em *ngIf=\"changePasswordForm.controls['cnfirm_user_pwd'].errors['mustMatch']\">  Confirm password not match    </em>\r\n             </p>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\"  style=\"text-align: center;\">\r\n            <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\r\n            <button type=\"button\" style=\"width: 20%;\" pButton  icon=\"actionLoding ? 'pi pi-save' : 'pi pi-spin pi-spinner'\" class=\"ui-button-success\" (click)=\"updatePassword()\" label=\"Change Password\"></button>\r\n        </div>\r\n    </p-footer>\r\n    </form>\r\n</p-card>\r\n        </div>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\r\n<p-footer>\r\n        <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \r\n        <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>");

/***/ }),

/***/ "./src/app/component/inventory-mngt/user/change-password/change-password-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/change-password/change-password-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChangePasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordRoutingModule", function() { return ChangePasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.component */ "./src/app/component/inventory-mngt/user/change-password/change-password.component.ts");




const routes = [
    { path: '', component: _change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"] }
];
let ChangePasswordRoutingModule = class ChangePasswordRoutingModule {
};
ChangePasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChangePasswordRoutingModule);



/***/ }),

/***/ "./src/app/component/inventory-mngt/user/change-password/change-password.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/change-password/change-password.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC91c2VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/user/change-password/change-password.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/change-password/change-password.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_validations_password_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/validations/password-match */ "./src/app/shared/validations/password-match.ts");
/* harmony import */ var src_app_shared_validations_old_password_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/validations/old-password-match */ "./src/app/shared/validations/old-password-match.ts");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");









let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(auth, _fb, messageService, router, confirmationService, sessionService) {
        this.auth = auth;
        this._fb = _fb;
        this.messageService = messageService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.sessionService = sessionService;
        this.changePasswordForm = this._fb.group({
            _id: [this.sessionService.getItem('_id')],
            user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            new_user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cnfirm_user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company_details_id: [this.sessionService.getItem('company_id'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: [Object(src_app_shared_validations_old_password_match__WEBPACK_IMPORTED_MODULE_7__["oldMatch"])(this.sessionService.getItem('user_pwd'), 'user_pwd'), Object(src_app_shared_validations_password_match__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('new_user_pwd', 'cnfirm_user_pwd')]
        });
    }
    ngOnInit() {
        this.bradCrum = [
            { label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/inventory-mngt/dashboard']);
                }
            },
            {
                label: "Change Password",
                command: event => {
                    this.router.navigate(["/inventory-mngt/change-password"]);
                }
            }
        ];
    }
    checkValidity() {
        Object.keys(this.changePasswordForm.controls).forEach((key) => {
            this.changePasswordForm.controls[key].markAsDirty();
        });
    }
    // checkOldPassword(){
    //   this.messageService.clear();
    //   if(this.changePasswordForm.value.user_pwd && (this.auth.getUserData().user_pwd != this.changePasswordForm.value.user_pwd)){
    //       this.messageService.add({severity:'warn', summary:'Warning!', detail:'Old password is wrong!'});
    //       this.changePasswordForm.controls['user_pwd'].setValue('');
    //      }
    // }
    // passwordMatch() {
    //   this.messageService.clear();
    //   let newPassword = this.changePasswordForm.value.new_user_pwd;
    //   let confirmPassword = this.changePasswordForm.value.cnfirm_user_pwd;
    //   if (confirmPassword != '') {
    //     if (newPassword != confirmPassword) {
    //       console.log('not eq');
    //       console.log(this.changePasswordForm);
    //       this.changePasswordForm.controls['cnfirm_user_pwd'].setErrors({ 'nopasswordmatch': true })
    //       this.changePasswordForm.controls['cnfirm_user_pwd'].markAsDirty();
    //       this.messageService.add({severity:'warn', summary:'Warning!', detail:'Password not same'});
    //     } else {
    //       console.log('eq');        
    //       this.changePasswordForm.controls['cnfirm_user_pwd'].setErrors({ 'nopasswordmatch': null })
    //       this.changePasswordForm.controls['cnfirm_user_pwd'].updateValueAndValidity();
    //     }
    //   } else {
    //   }
    // }
    confirm() {
        this.confirmationService.confirm({
            message: 'You will be logged out shortly for security perposes. Please remember your new password before logged out.',
            accept: () => {
                //Actual logic to perform a confirmation
                this.doUpdatePassword();
            }
        });
    }
    updatePassword() {
        console.log(this.changePasswordForm);
        if (this.changePasswordForm.invalid) {
            this.checkValidity();
            // this.passwordMatch();
            return false;
        }
        // this.submitAttempt = false;
        this.confirm();
    }
    doUpdatePassword() {
        this.auth.changePassword(this.changePasswordForm.value)
            .subscribe((data) => {
            this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Password changed successfully!' });
            this.auth.logOut();
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthLoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/change-password/change-password.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.scss */ "./src/app/component/inventory-mngt/user/change-password/change-password.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthLoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]])
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/user/change-password/change-password.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/change-password/change-password.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/component/inventory-mngt/user/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password.component */ "./src/app/component/inventory-mngt/user/change-password/change-password.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_17__);


















let ChangePasswordModule = class ChangePasswordModule {
};
ChangePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordRoutingModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_10__["PasswordModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_14__["ChartModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
        ]
    })
], ChangePasswordModule);



/***/ }),

/***/ "./src/app/shared/validations/old-password-match.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/validations/old-password-match.ts ***!
  \**********************************************************/
/*! exports provided: oldMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oldMatch", function() { return oldMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function oldMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = controlName;
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.oldMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control !== matchingControl.value) {
            matchingControl.setErrors({ oldMatch: true });
            // matchingControl.markAsDirty();
        }
        else {
            matchingControl.setErrors(null);
            // matchingControl.updateValueAndValidity();
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=component-inventory-mngt-user-change-password-change-password-module-es2015.js.map