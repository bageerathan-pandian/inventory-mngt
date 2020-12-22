(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-user-profile-profile-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/profile/profile.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/profile/profile.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <pre>{{ auth.getUserData() | json }}</pre> -->\r\n\r\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n        <div style=\"margin-top: 15px;\">\r\n<p-card>\r\n        <div class=\"profile-wrapper\"> \r\n    <form [formGroup]=\"userForm\"> \r\n    <div class=\"ui-g ui-fluid\" >\r\n            <div class=\"ui-g-4\">\r\n                  <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"year\">Company Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" pInputText [value]=\"sessionService.getItem('company_name')\" disabled/>\r\n                </div>\r\n            </div>\r\n                    <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Company Address</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                        <input type=\"text\" pInputText [value]=\"sessionService.getItem('company_address')\"  disabled/>\r\n                    </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Owner Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                        <input type=\"text\" pInputText [value]=\"sessionService.getItem('owner_name')\" disabled/>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">Company Phone</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input pInputText type=\"text\" [value]=\"sessionService.getItem('phone')\" disabled pKeyFilter=\"int\" ng2TelInput (countryChange)=\"onCountryChange($event)\" [ng2TelInputOptions]=\"{initialCountry:'in'}\"  />\r\n\r\n                            <!-- <input type=\"text\" pInputText [value]=\"sessionService.getItem('phone')\" disabled> -->\r\n\r\n                    </div>\r\n                </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n              <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-4\">\r\n              <label for=\"vin\">Full Name</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n              <input pInputText formControlName=\"user_name\" autofocus />\r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-4\">\r\n              <label for=\"vin\">User Email</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n              <input pInputText formControlName=\"user_email\" emailExist  disabled />\r\n          </div>\r\n      </div>\r\n      <!-- <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-4\">\r\n              <label for=\"year\">User Password</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n              <input type=\"password\" pPassword formControlName=\"user_pwd\" disabled/>\r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-4\">\r\n              <label for=\"year\">Confirm Password</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n              <input type=\"password\" pPassword formControlName=\"cnfirm_user_pwd\" disabled/>\r\n          </div>\r\n      </div> -->\r\n      <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-4\">\r\n              <label for=\"year\">Phone</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input pInputText type=\"text\"  disabled pKeyFilter=\"int\" ng2TelInput (countryChange)=\"onCountryChange($event)\" [ng2TelInputOptions]=\"{initialCountry:'in'}\"  formControlName=\"phone\"  />\r\n\r\n                  <!-- <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask> -->\r\n              </div>\r\n      </div>\r\n  <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n          <label for=\"year\">Role</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n          <p-dropdown [options]=\"roleList\" formControlName=\"role\" placeholder=\"Select Role\" filter=\"true\"  disabled='true'>\r\n          </p-dropdown>\r\n      </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n          <label for=\"brand\">Status</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n          <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n\r\n      </div>\r\n  </div> -->\r\n</div>\r\n    \r\n    <div class=\"ui-g-4\">\r\n            <div class=\"profile-wrap\">\r\n                    <div class=\"prof-img\">\r\n                        <img src=\"./assets/img/userface.jpg\" class=\"car-add\" *ngIf=\"!croppedImage\">\r\n                        <img [src]=\"croppedImage\" *ngIf=\"croppedImage\" class=\"car-addafter\" >\r\n                    </div>\r\n                    <button class=\"cmn-btn\" type=\"button\" style=\"border:none;float:initial;font-size: 12px !important;background: #ef6a97;margin-top: 15px;position: relative;\">\r\n                        <input #upload_logofile type=\"file\" accept=\".png, .jpg, .jpeg\" style=\"position:absolute;display:inline-block;opacity:0;width:100%;left: 0;\"\r\n                        (change)=\"fileChangeEvent($event.target.files)\"/>\r\n                        <i class=\"pi pi-cloud-upload\" style=\"font-size:23px;\"></i>Upload Profile</button>\r\n                </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\"  style=\"text-align: center;\">\r\n            <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\r\n            <button type=\"button\" style=\"width: 20%;\" pButton  icon=\"actionLoding ? 'pi pi-save' : 'pi pi-spin pi-spinner'\" class=\"ui-button-success\" (click)=\"onUpdate()\" label=\"Update\"></button>\r\n        </div>\r\n    </p-footer>\r\n    </form>\r\n        </div>\r\n</p-card>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/component/inventory-mngt/user/profile/profile-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/profile/profile-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/component/inventory-mngt/user/profile/profile.component.ts");




const routes = [
    { path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/component/inventory-mngt/user/profile/profile.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/profile/profile.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-wrapper {\n  background: #fff;\n}\n.profile-wrapper h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n.profile-wrapper h4 span {\n  padding-top: 5px;\n  color: #c7c7c7;\n}\n.profile-wrapper button:focus {\n  outline: none;\n}\n.profile-wrapper .cmn-btn {\n  float: right;\n  padding: 3px 21px !important;\n  border-radius: 23px !important;\n  background: #08bd65;\n  color: #fff !important;\n  font-size: 15px !important;\n  text-transform: uppercase;\n  padding-left: 15px !important;\n  border: none;\n}\n.profile-wrapper .cmn-btn i {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px;\n}\n.profile-wrapper .profile-wrap {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  text-align: center;\n  height: 193px;\n  padding: 15px;\n  margin-bottom: 25px;\n}\n.profile-wrapper .profile-wrap .prof-img {\n  width: 115px;\n  height: 115px;\n  position: relative;\n  box-shadow: 0 0 10px #d4d4d4;\n  border-radius: 100%;\n  margin: auto;\n}\n.profile-wrapper .profile-wrap .prof-img img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L3VzZXIvcHJvZmlsZS9GOlxcYmFnZWVcXGludmVudG9yeS1tbmd0XFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudFxcaW52ZW50b3J5LW1uZ3RcXHVzZXJcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGdCQUFBO0FDQ0g7QURBQTtFQUNJLGVBQUE7RUFBZSx5QkFBQTtFQUEwQixtQkFBQTtBQ0k3QztBREZDO0VBQ0csZ0JBQUE7RUFBb0IsY0FBQTtBQ0t4QjtBREZBO0VBQ0ksYUFBQTtBQ0lKO0FERkE7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFBa0MsWUFBQTtBQ0t0QztBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHSjtBREFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHUjtBREZRO0VBQ0ksZUFBQTtFQUFlLGdCQUFBO0VBQWdCLGtCQUFBO0VBQW1CLE1BQUE7RUFBTSxPQUFBO0VBQU8sUUFBQTtFQUFRLFNBQUE7RUFBUyxZQUFBO0VBQVksbUJBQUE7QUNZeEciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaW52ZW50b3J5LW1uZ3QvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS13cmFwcGVye1xyXG4gICBiYWNrZ3JvdW5kOiNmZmY7XHJcbmg0e1xyXG4gICAgZm9udC1zaXplOjE4cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjI1cHg7XHJcbn1cclxuIGg0IHNwYW57XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7ICAgIGNvbG9yOiAjYzdjN2M3O1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uY21uLWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAzcHggMjFweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzA4YmQ2NTtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDsgICAgYm9yZGVyOiBub25lO1xyXG4gXHJcbn1cclxuXHJcbi5jbW4tYnRuIGkge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnByb2ZpbGUtd3JhcHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE5M3B4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAucHJvZi1pbWd7XHJcbiAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkNGQ0ZDQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7cG9zaXRpb246IGFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbjphdXRvO2JvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufSIsIi5wcm9maWxlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnByb2ZpbGUtd3JhcHBlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wcm9maWxlLXdyYXBwZXIgaDQgc3BhbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGNvbG9yOiAjYzdjN2M3O1xufVxuLnByb2ZpbGUtd3JhcHBlciBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb2ZpbGUtd3JhcHBlciAuY21uLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogM3B4IDIxcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMDhiZDY1O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLmNtbi1idG4gaSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5wcm9maWxlLXdyYXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxOTNweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtd3JhcCAucHJvZi1pbWcge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS13cmFwIC5wcm9mLWltZyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/user/profile/profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/profile/profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/image-upload.service */ "./src/app/shared/image-upload.service.ts");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let ProfileComponent = class ProfileComponent {
    constructor(sessionService, _fb, router, imageUploadService, userService, messageService) {
        this.sessionService = sessionService;
        this._fb = _fb;
        this.router = router;
        this.imageUploadService = imageUploadService;
        this.userService = userService;
        this.messageService = messageService;
        this.roleList = [];
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.userForm = this._fb.group({
            _id: [this.sessionService.getItem('_id')],
            user_name: [this.sessionService.getItem('user_name'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            user_image: [this.sessionService.getItem('user_image')],
            user_email: [this.sessionService.getItem('user_email'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            user_pwd: [this.sessionService.getItem('user_pwd'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cnfirm_user_pwd: [this.sessionService.getItem('cnfirm_user_pwd'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company_details_id: [this.sessionService.getItem('company_id'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [this.sessionService.getItem('phone'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: [this.sessionService.getItem('role'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.croppedImage = this.sessionService.getItem('user_image') ? src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].api_url + this.sessionService.getItem('user_image') : null;
    }
    ngOnInit() {
        this.bradCrum = [
            { label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/inventory-mngt/dashboard']);
                }
            },
            {
                label: "Profile",
                command: event => {
                    this.router.navigate(["/inventory-mngt/profile"]);
                }
            }
        ];
        this.roleList = [
            { label: 'Admin', value: 1 },
            { label: 'Manager', value: 2 },
            { label: 'Sales Person', value: 3 },
        ];
    }
    // showDialogToAdd(user: User) {
    //   console.log('onRowEdit',user);
    //   this.displayDialog = true;
    //   this.userForm.controls['_id'].setValue(user._id);
    //   this.userForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id);
    //   this.userForm.controls['role'].setValue(user.role);
    //   this.userForm.controls['user_name'].setValue(user.user_name);
    //   this.userForm.controls['user_email'].setValue(user.user_email);
    //   this.userForm.controls['user_pwd'].setValue(user.user_pwd);
    //   this.userForm.controls['cnfirm_user_pwd'].setValue(user.cnfirm_user_pwd);
    //   this.userForm.controls['phone'].setValue(user.phone);
    //   this.userForm.controls['status'].setValue(user.status);
    // }
    profileImageUpload() {
        this.imageUploadService.profileImageUpload(this.imageChangedEvent)
            .subscribe((data) => {
            console.log(data);
            this.userForm.controls['user_image'].setValue(data);
            this.userUpdate();
        });
    }
    checkValidity() {
        Object.keys(this.userForm.controls).forEach((key) => {
            this.userForm.controls[key].markAsDirty();
        });
    }
    userUpdate() {
        console.log(this.userForm);
        if (this.userForm.invalid) {
            this.checkValidity();
            return false;
        }
        this.userService.updateUser(this.userForm.value)
            .subscribe((data) => {
            console.log('update', data);
            this.displayDialog = false;
            this.messageService.add({ severity: 'success', summary: 'User Updated Successfully', detail: 'User Updated Successfully' });
            this.userService.getUser()
                .subscribe((data) => {
                console.log('data', data[0]);
                this.sessionService.setUserCredentials(data[0]);
            });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onUpdate() {
        console.log('onRowAdd', this.userForm.value);
        if (this.imageChangedEvent) {
            this.profileImageUpload();
        }
        else {
            this.userUpdate();
        }
    }
    fileChangeEvent(file) {
        console.log(file);
        this.imageChangedEvent = file.item(0);
        console.log('imageChangedEvent', this.imageChangedEvent);
        // show image preview
        var render = new FileReader();
        render.onloadend = (e) => {
            console.log('reslt', render);
            this.croppedImage = render.result;
        };
        render.readAsDataURL(this.imageChangedEvent);
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    onCountryChange(event) {
        console.log(event);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_5__["ImageUploadService"] },
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/component/inventory-mngt/user/profile/profile.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_5__["ImageUploadService"], src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/user/profile/profile.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/profile/profile.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/component/inventory-mngt/user/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/component/inventory-mngt/user/profile/profile.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
























let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_12__["PasswordModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__["InputSwitchModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_17__["ChartModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_18__["GooglePlaceModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__["InputMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__["ProgressSpinnerModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__["ImageCropperModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_22__["FileUploadModule"],
            ng2_tel_input__WEBPACK_IMPORTED_MODULE_23__["Ng2TelInputModule"]
        ]
    })
], ProfileModule);



/***/ })

}]);
//# sourceMappingURL=component-inventory-mngt-user-profile-profile-module-es2015.js.map