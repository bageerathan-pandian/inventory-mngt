function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-dashboard-dashboard-module"], {
  /***/
  "./node_modules/primeng/breadcrumb.js":
  /*!********************************************!*\
    !*** ./node_modules/primeng/breadcrumb.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengBreadcrumbJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/breadcrumb/breadcrumb */
    "./node_modules/primeng/components/breadcrumb/breadcrumb.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/components/breadcrumb/breadcrumb.js":
  /*!******************************************************************!*\
    !*** ./node_modules/primeng/components/breadcrumb/breadcrumb.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsBreadcrumbBreadcrumbJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Breadcrumb =
    /** @class */
    function () {
      function Breadcrumb() {}

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

      __decorate([core_1.Input(), __metadata("design:type", Array)], Breadcrumb.prototype, "model", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Breadcrumb.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Breadcrumb.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Breadcrumb.prototype, "home", void 0);

      Breadcrumb = __decorate([core_1.Component({
        selector: 'p-breadcrumb',
        template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all'\">\n            <ul>\n                <li class=\"ui-breadcrumb-home\" *ngIf=\"home\">\n                    <a *ngIf=\"!home.routerLink\" [href]=\"home.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [ngClass]=\"{'ui-state-disabled':home.disabled}\" [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\"[attr.tabindex]=\"home.tabindex ? home.tabindex : '0'\">\n                        <span [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                    </a>\n                    <a *ngIf=\"home.routerLink\" [routerLink]=\"home.routerLink\" [queryParams]=\"home.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"home.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [ngClass]=\"{'ui-state-disabled':home.disabled}\" [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\" [attr.tabindex]=\"home.tabindex ? home.tabindex : '0'\">\n                        <span [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                    </a>\n                </li>\n                <li class=\"ui-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"model&&home\"></li>\n                <ng-template ngFor let-item let-end=\"last\" [ngForOf]=\"model\">\n                    <li role=\"menuitem\">\n                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\">\n                            <span *ngIf=\"item.icon\" class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\"  [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\">\n                            <span *ngIf=\"item.icon\" class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </li>\n                    <li class=\"ui-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"!end\"></li>\n                </ng-template>\n            </ul>\n        </div>\n    "
      })], Breadcrumb);
      return Breadcrumb;
    }();

    exports.Breadcrumb = Breadcrumb;

    var BreadcrumbModule =
    /** @class */
    function () {
      function BreadcrumbModule() {}

      BreadcrumbModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        exports: [Breadcrumb, router_1.RouterModule],
        declarations: [Breadcrumb]
      })], BreadcrumbModule);
      return BreadcrumbModule;
    }();

    exports.BreadcrumbModule = BreadcrumbModule; //# sourceMappingURL=breadcrumb.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/components/inplace/inplace.js":
  /*!************************************************************!*\
    !*** ./node_modules/primeng/components/inplace/inplace.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsInplaceInplaceJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var button_1 = __webpack_require__(
    /*! ../button/button */
    "./node_modules/primeng/components/button/button.js");

    var InplaceDisplay =
    /** @class */
    function () {
      function InplaceDisplay() {}

      InplaceDisplay = __decorate([core_1.Component({
        selector: 'p-inplaceDisplay',
        template: '<ng-content></ng-content>'
      })], InplaceDisplay);
      return InplaceDisplay;
    }();

    exports.InplaceDisplay = InplaceDisplay;

    var InplaceContent =
    /** @class */
    function () {
      function InplaceContent() {}

      InplaceContent = __decorate([core_1.Component({
        selector: 'p-inplaceContent',
        template: '<ng-content></ng-content>'
      })], InplaceContent);
      return InplaceContent;
    }();

    exports.InplaceContent = InplaceContent;

    var Inplace =
    /** @class */
    function () {
      function Inplace() {
        this.onActivate = new core_1.EventEmitter();
        this.onDeactivate = new core_1.EventEmitter();
      }

      Inplace.prototype.activate = function (event) {
        if (!this.disabled) {
          this.active = true;
          this.onActivate.emit(event);
        }
      };

      Inplace.prototype.deactivate = function (event) {
        if (!this.disabled) {
          this.active = false;
          this.hover = false;
          this.onDeactivate.emit(event);
        }
      };

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Inplace.prototype, "active", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Inplace.prototype, "closable", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Inplace.prototype, "disabled", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Inplace.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Inplace.prototype, "styleClass", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Inplace.prototype, "onActivate", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Inplace.prototype, "onDeactivate", void 0);

      Inplace = __decorate([core_1.Component({
        selector: 'p-inplace',
        template: "\n        <div [ngClass]=\"{'ui-inplace ui-widget': true, 'ui-inplace-closable': closable}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-inplace-display\" (click)=\"activate($event)\"\n                [ngClass]=\"{'ui-state-disabled':disabled}\" *ngIf=\"!active\">\n                <ng-content select=\"[pInplaceDisplay]\"></ng-content>\n            </div>\n            <div class=\"ui-inplace-content\" *ngIf=\"active\">\n                <ng-content select=\"[pInplaceContent]\"></ng-content>\n                <button type=\"button\" icon=\"pi pi-times\" pButton (click)=\"deactivate($event)\" *ngIf=\"closable\"></button>\n            </div>\n        </div>\n    "
      })], Inplace);
      return Inplace;
    }();

    exports.Inplace = Inplace;

    var InplaceModule =
    /** @class */
    function () {
      function InplaceModule() {}

      InplaceModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule, button_1.ButtonModule],
        exports: [Inplace, InplaceDisplay, InplaceContent, button_1.ButtonModule],
        declarations: [Inplace, InplaceDisplay, InplaceContent]
      })], InplaceModule);
      return InplaceModule;
    }();

    exports.InplaceModule = InplaceModule; //# sourceMappingURL=inplace.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/dropdown.js":
  /*!******************************************!*\
    !*** ./node_modules/primeng/dropdown.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengDropdownJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/dropdown/dropdown */
    "./node_modules/primeng/components/dropdown/dropdown.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/inplace.js":
  /*!*****************************************!*\
    !*** ./node_modules/primeng/inplace.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengInplaceJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/inplace/inplace */
    "./node_modules/primeng/components/inplace/inplace.js"));
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/dashboard/dashboard.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/dashboard/dashboard.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12\" style=\"display: none;\">\r\n        <div class=\"alert alert-warning\" *ngIf=\"!sessionService.getItem('isEmailVerified')\">\r\n            <div *ngIf=\"sendingVerificationMailStatus != 1\">\r\n                Your email\r\n                <form [formGroup]=\"resendVerifyForm\" style=\"display: inline-block;\">\r\n                    <p-inplace closable=\"closable\">\r\n                        <span pInplaceDisplay>\r\n                            <strong>{{sessionService.getItem('user_email')}} </strong><i class=\"pi pi-pencil\"></i>\r\n                        </span>\r\n                        <span pInplaceContent>\r\n                            <input pInputText pKeyFilter=\"email\" formControlName=\"user_email\"\r\n                                placeholder=\"{{sessionService.getItem('user_email')}}\" />\r\n                            <!-- <button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-warn\" *ngIf=\"emailCheckStatus == 0\"></button>    \r\n                                        <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\" *ngIf=\"emailCheckStatus == 1\"></button>    \r\n                                        <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" *ngIf=\"emailCheckStatus == 2\"></button>                      -->\r\n\r\n                        </span>\r\n                    </p-inplace>\r\n                </form> not yet verified!\r\n                Please click this link to verify your email <a (click)=\"resendVerifyEmail()\">Send Verificaion Email </a>\r\n                <p-progressSpinner [style]=\"{width: '20px', height: '20px'}\" strokeWidth=\"2\"\r\n                    *ngIf=\"sendingVerificationMail\"></p-progressSpinner>\r\n            </div>\r\n            <div *ngIf=\"sendingVerificationMailStatus == 1\">\r\n                We have sent a verification mail to\r\n                <form [formGroup]=\"resendVerifyForm\" style=\"display: inline-block;\">\r\n                    <p-inplace closable=\"closable\">\r\n                        <span pInplaceDisplay>\r\n                            <strong>{{sessionService.getItem('user_email')}} </strong><i class=\"pi pi-pencil\"></i>\r\n                        </span>\r\n                        <span pInplaceContent>\r\n                            <input pInputText pKeyFilter=\"email\" formControlName=\"user_email\"\r\n                                placeholder=\"{{sessionService.getItem('user_email')}}\" />\r\n                            <!-- <button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-warn\" *ngIf=\"emailCheckStatus == 0\"></button>    \r\n                                        <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\" *ngIf=\"emailCheckStatus == 1\"></button>    \r\n                                        <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" *ngIf=\"emailCheckStatus == 2\"></button>                      -->\r\n\r\n                        </span>\r\n                    </p-inplace>\r\n                </form>\r\n                Please active your account with the link in this mail. If you cannot find the mail, please also check\r\n                the Junk/Spam folder!\r\n                <!-- <p>If you have not received a verification email or if your have mistyped your email address, your can resend the verification mail.</p> -->\r\n                Don't receive the email?<a (click)=\"resendVerifyEmail()\">Resend Verificaion Email </a>\r\n                <p-progressSpinner [style]=\"{width: '20px', height: '20px'}\" strokeWidth=\"2\"\r\n                    *ngIf=\"sendingVerificationMail\"></p-progressSpinner>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"sessionService.getItem('role') == '0'\">\r\n        <div class=\"ui-g-3\" style=\"float: right\">\r\n            <p-dropdown [options]=\"companyList\" [(ngModel)]=\"company_id\" placeholder=\"Select Company\" filter=\"true\"\r\n                optionLabel=\"company_name\" (onChange)=\"onChangeCompany($event.value)\">\r\n            </p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div [ngClass]=\"sessionService.getItem('role') == '0' ? 'adminClass' : 'userClass'\"\r\n        *ngIf=\"sessionService.getItem('role') == '0'\">\r\n        <a routerLink=\"/inventory-mngt/master/company\">\r\n            <p-card styleClass=\"card1 ui-g-12\">\r\n                <p-header>\r\n                    Company\r\n                </p-header>\r\n                <div class=\"ui-g-6\">\r\n                    <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0; \"> {{companyList.length}}</h2>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <i class=\"pi pi-shopping-cart\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>\r\n                </div>\r\n                <!-- <p-footer>\r\n              <a routerLink=\"/master/company\"  pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" style=\"position: relative; top: 4px;\"></i>\r\n              </a>\r\n          </p-footer> -->\r\n            </p-card>\r\n        </a>\r\n    </div>\r\n    <div [ngClass]=\"sessionService.getItem('role') == '0' ? 'adminClass' : 'userClass'\">\r\n        <a\r\n            [routerLink]=\"sessionService.getItem('role') != 3 ? '/inventory-mngt/master/stock' : '/inventory-mngt/dashboard'\">\r\n            <p-card styleClass=\"card2 ui-g-12\">\r\n                <p-header>\r\n                    Stocks\r\n                </p-header>\r\n                <div class=\"ui-g-6\">\r\n                    <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0; \"> {{stocksList.length}}</h2>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <i class=\"pi pi-shopping-cart\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>\r\n                </div>\r\n                <!-- <p-footer>\r\n            <a routerLink=\"/master/stock\"  pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" style=\"position: relative; top: 4px;\"></i>\r\n            </a>\r\n        </p-footer> -->\r\n            </p-card>\r\n        </a>\r\n    </div>\r\n    <div [ngClass]=\"sessionService.getItem('role') == '0' ? 'adminClass' : 'userClass'\">\r\n        <a\r\n            [routerLink]=\"sessionService.getItem('role') != 3 ? '/inventory-mngt/sales/sales' : '/inventory-mngt/dashboard'\">\r\n            <p-card styleClass=\"card3 ui-g-12\">\r\n                <p-header>\r\n                    Sales\r\n                </p-header>\r\n                <div class=\"ui-g-6\">\r\n                    <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0; \">\r\n                        {{totalSalesAmount  | currency : 'INR':true}}</h2>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <i class=\"pi pi-dollar\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>\r\n                </div>\r\n                <!-- <p-footer>\r\n                <a routerLink=\"/sales\" pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" ></i>\r\n                </a>\r\n            </p-footer> -->\r\n            </p-card>\r\n        </a>\r\n    </div>\r\n    <div [ngClass]=\"sessionService.getItem('role') == '0' ? 'adminClass' : 'userClass'\">\r\n        <a\r\n            [routerLink]=\"sessionService.getItem('role') != 3 ? '/inventory-mngt/purchase/purchase' : '/inventory-mngt/dashboard'\">\r\n\r\n            <p-card styleClass=\"card4 ui-g-12\">\r\n                <p-header>\r\n                    Purchase\r\n                </p-header>\r\n                <div class=\"ui-g-6\">\r\n                    <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0; \">\r\n                        {{totalPurchaceAmount  | currency : 'INR':true}}</h2>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <i class=\"pi pi-money-bill\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>\r\n                </div>\r\n                <!-- <p-footer>\r\n                <a routerLink=\"/purchase\"  pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" ></i>\r\n                </a>\r\n            </p-footer> -->\r\n            </p-card>\r\n        </a>\r\n    </div>\r\n    <div [ngClass]=\"sessionService.getItem('role') == '0' ? 'adminClass' : 'userClass'\">\r\n        <a\r\n            [routerLink]=\"sessionService.getItem('role') != 3 ? '/inventory-mngt/master/customer' : '/inventory-mngt/dashboard'\">\r\n\r\n            <p-card styleClass=\"card5 ui-g-12\">\r\n                <p-header>\r\n                    Customers\r\n                </p-header>\r\n                <div class=\"ui-g-6\">\r\n                    <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0;  \"> {{customerList.length}}</h2>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <i class=\"pi pi-users\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>\r\n                </div>\r\n                <!-- <p-footer>\r\n                <a routerLink=\"/master/customer\" pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" ></i>\r\n                </a>\r\n            </p-footer> -->\r\n            </p-card>\r\n        </a>\r\n    </div>\r\n    \r\n    <div [ngClass]=\"sessionService.getItem('role') == '0' ? 'adminClass' : 'userClass'\">\r\n        <a\r\n            [routerLink]=\"sessionService.getItem('role') != 3 ? '/inventory-mngt/collection' : '/inventory-mngt/dashboard'\">\r\n\r\n            <p-card styleClass=\"card6 ui-g-12\">\r\n                <p-header>\r\n                    Collections\r\n                </p-header>\r\n                <div class=\"ui-g-6\">\r\n                    <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0;  \"> {{totalCollectionAmount  | currency : 'INR':true}}</h2>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <i class=\"pi pi-users\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>\r\n                </div>\r\n                <!-- <p-footer>\r\n                <a routerLink=\"/master/customer\" pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" ></i>\r\n                </a>\r\n            </p-footer> -->\r\n            </p-card>\r\n        </a>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g ui-fluid\" >\r\n    <div class=\"ui-g-12 ui-md-10 ui-lg-8\">\r\n        <p-card styleClass=\"ui-g-12\">\r\n            <!-- <div class=\"ui-g-3\">\r\n                      <p-dropdown [options]=\"yearList\"  appendTo=\"body\" [(ngModel)]=\"selectedYear\" placeholder=\"Select Year\"  filter=\"true\" ></p-dropdown>\r\n                    </div> -->\r\n            <p-chart type=\"bar\" [data]=\"data\" [options]=\"options\" (refresh)=\"getProfitLoss()\"></p-chart>\r\n        </p-card>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4 ui-lg-4\">\r\n        <p-card styleClass=\"ui-g-12\">\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Overall Profit/Loss</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td style=\"padding: 15px;  font-size: 15px;\"> Total Purchase</td>\r\n                        <td style=\"padding: 15px;  font-size: 15px;\"> {{totalPurchaceAmount  | currency : 'INR':true}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"padding: 15px;  font-size: 15px;\">Total Sales</td>\r\n                        <td style=\"padding: 15px;  font-size: 15px;\"> {{totalSalesAmount  | currency : 'INR':true}}</td>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <th style=\"padding: 15px;  font-size: 15px;\">Profit/Loss</th>\r\n                        <th style=\"padding: 15px;  font-size: 17px;\"> <span\r\n                                [ngStyle]=\"{'color': (totalSalesAmount - totalPurchaceAmount) > 0 ? 'green' : 'red'}\">\r\n                                {{(totalSalesAmount - totalPurchaceAmount) | negotiveToBrackets }}</span></th>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </p-card>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-10 ui-lg-2\" style=\"display: none;\">\r\n\r\n\r\n        <p-card styleClass=\"ui-g-12\">\r\n\r\n            <p-scrollPanel [style]=\"{width: '100%', height: '280px'}\">\r\n                <div class=\"active-detail\">\r\n                    <h3 style=\"margin: 20px 0;\" class=\"full-width\">Active Users</h3>\r\n                    <div class=\"gallery-cont full-width\">\r\n                        <ul>\r\n                            <li *ngFor=\"let item of loggedInUsersList\">\r\n                                <div class=\"active-left\">\r\n                                    <img src=\"../assets/img/userface.jpg\" *ngIf=\"!item?.user_image\">\r\n                                    <img src=\"{{auth.apiURL()}}{{item.user_image}}\" *ngIf=\"item?.user_image\">\r\n                                    <ng-container *ngIf=\"item.isLoggedIn; else elseTemplate\">\r\n                                        <i class=\"pi pi-check\"\r\n                                            style=\"    position: absolute;   left: 18px;    color: #fff;   background: #08bd65;     border-radius: 100%;font-size: 12px\"></i>\r\n                                    </ng-container>\r\n                                    <ng-template #elseTemplate>\r\n                                        <i class=\"pi pi-times\"\r\n                                            style=\"    position: absolute;   left: 18px;    color: #fff;   background: #f06487;     border-radius: 100%;font-size: 12px\"></i>\r\n                                    </ng-template>\r\n                                </div>\r\n                                <div class=\"active-rgt\">\r\n                                    <h6>{{item.user_name | titlecase}}</h6>\r\n                                    <span [ngSwitch]=\"item.role\" style=\"font-size: 7px;\">\r\n                                        <p *ngSwitchCase=\"'0'\">\r\n                                            Admin - <em *ngIf=\"sessionService.getItem('role') == '0'\">\r\n                                                {{item.company_details_id.company_name}}</em>\r\n                                        </p>\r\n                                        <p *ngSwitchCase=\"'1'\">\r\n                                            Admin - <em> {{item.company_details_id.company_name}}</em>\r\n                                        </p>\r\n                                        <p *ngSwitchCase=\"'2'\">\r\n                                            Manager - <em> {{item.company_details_id.company_name}}</em>\r\n                                        </p>\r\n                                        <p *ngSwitchCase=\"'3'\">\r\n                                            Sales person - <em> {{item.company_details_id.company_name}}</em>\r\n                                        </p>\r\n                                        <p *ngSwitchDefault>\r\n                                            Others - {{item.company_details_id.company_name}}\r\n                                        </p>\r\n\r\n                                    </span>\r\n\r\n                                    <!-- <ng-container *ngIf=\"item.isLoggedIn; else elseTemplate\">\r\n                                                <a class=\"cmn-btn\"><i class=\"pi pi-check\"></i>Online</a>\r\n                                            </ng-container>\r\n                                            <ng-template #elseTemplate>\r\n                                                <a class=\"cmn-btn red-btn\"><i class=\"pi pi-times\"></i>Offline</a>\r\n                                            </ng-template> -->\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </p-scrollPanel>\r\n        </p-card>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g ui-fluid\">\r\n\r\n    <div class=\"ui-g-12 ui-md-4 ui-lg-4\">\r\n        <p-card styleClass=\"ui-g-12\">\r\n            <h3>Latest 5 Added Stocks</h3>\r\n            <p-table #dt1 [value]=\"stocksLatestList\" dataKey=\"_id\">\r\n\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>\r\n                            Code\r\n                        </th>\r\n                        <th>\r\n                            Stock Name\r\n                        </th>\r\n                        <th>\r\n                            Qty\r\n                        </th>\r\n                        <th>\r\n                            Price\r\n                        </th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\">\r\n\r\n                    <tr>\r\n                        <td>\r\n                            {{rowData.stock_code}}\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.stock_name}}\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.stock_qty}}\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.selling_price | currency : 'INR':true}}\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"footer\">\r\n                    <tr *ngIf=\"stocksLatestList?.length == 0\">\r\n                        <td colspan=\"4\" style=\"text-align: center\">\r\n                            There are {{stocksLatestList?.length}} records\r\n                        </td>\r\n                    </tr>\r\n\r\n                </ng-template>\r\n            </p-table>\r\n            <button pButton icon=\"pi pi-eye\" iconPos=\"left\" class=\"ui-button-raised ui-button-rounded\"\r\n                label=\"view all Stocks\"\r\n                [routerLink]=\"sessionService.getItem('role') != 3 ? '/inventory-mngt/master/stock' : '/inventory-mngt/dashboard'\"\r\n                style=\" width: auto; margin-top: 10px;\"></button>\r\n\r\n        </p-card>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-4 ui-lg-4\">\r\n        <p-card styleClass=\"ui-g-12\">\r\n            <h3>Latest 5 Sales</h3>\r\n            <p-table #dt1 [value]=\"salesLatestList\" dataKey=\"id\">\r\n\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>\r\n                            #Invoice No\r\n                        </th>\r\n                        <th>\r\n                            Sub Total\r\n                        </th>\r\n                        <th>\r\n                            Discount\r\n                        </th>\r\n                        <th>\r\n                            CSGT\r\n                        </th>\r\n                        <th>\r\n                            SGST\r\n                        </th>\r\n                        <th>\r\n                            Total\r\n                        </th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\">\r\n\r\n                    <tr>\r\n                        <td>\r\n                            {{rowData.invoice_details_id.invoice_code}}\r\n                        </td>\r\n\r\n                        <!-- <td>\r\n                                        {{rowData.stock_price | currency : 'INR':true}}\r\n                                </td> -->\r\n                        <td>\r\n                            {{rowData.sub_total | currency : 'INR':true}}\r\n\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.discount | currency : 'INR':true}}\r\n\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.invoice_details_id.cgst  | currency : 'INR':true}}\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.invoice_details_id.sgst  | currency : 'INR':true}}\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.grand_total | currency : 'INR':true}}\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"footer\">\r\n                    <tr *ngIf=\"salesLatestList?.length == 0\">\r\n                        <td colspan=\"6\" style=\"text-align: center\">\r\n                            There are {{salesLatestList?.length}} records\r\n                        </td>\r\n                    </tr>\r\n\r\n                </ng-template>\r\n            </p-table>\r\n            <button pButton icon=\"pi pi-eye\" iconPos=\"left\" class=\"ui-button-raised ui-button-rounded\"\r\n                label=\"view all Orders\"\r\n                [routerLink]=\"sessionService.getItem('role') != 3 ? '/inventory-mngt/payment' : '/inventory-mngt/dashboard'\"\r\n                style=\" width: auto; margin-top: 10px;\"></button>\r\n        </p-card>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-4 ui-lg-4\">\r\n        <p-card styleClass=\"ui-g-12\">\r\n            <h3>Latest 5 Purchase</h3>\r\n            <p-table #dt1 [value]=\"purchaseLatestList\" dataKey=\"id\">\r\n\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>\r\n                            #Invoice No\r\n                        </th>\r\n                        <th>\r\n                            Sub Total\r\n                        </th>\r\n                        <th>\r\n                            Discount\r\n                        </th>\r\n                        <th>\r\n                            CSGT\r\n                        </th>\r\n                        <th>\r\n                            SGST\r\n                        </th>\r\n                        <th>\r\n                            Total\r\n                        </th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\">\r\n\r\n                    <tr>\r\n                        <td>\r\n                            {{rowData.invoice_purchase_details_id.invoice_purchase_code}}\r\n                        </td>\r\n\r\n                        <!-- <td>\r\n                                        {{rowData.stock_price | currency : 'INR':true}}\r\n                                </td> -->\r\n                        <td>\r\n                            {{rowData.sub_total | currency : 'INR':true}}\r\n\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.discount | currency : 'INR':true}}\r\n\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.invoice_purchase_details_id.cgst  | currency : 'INR':true}}\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.invoice_purchase_details_id.sgst  | currency : 'INR':true}}\r\n                        </td>\r\n                        <td>\r\n                            {{rowData.grand_total | currency : 'INR':true}}\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"footer\">\r\n                    <tr *ngIf=\"purchaseLatestList?.length == 0\">\r\n                        <td colspan=\"6\" style=\"text-align: center\">\r\n                            There are {{purchaseLatestList?.length}} records\r\n                        </td>\r\n                    </tr>\r\n\r\n                </ng-template>\r\n            </p-table>\r\n            <button pButton icon=\"pi pi-eye\" iconPos=\"left\" class=\"ui-button-raised ui-button-rounded\"\r\n                label=\"view all Purchase\"\r\n                [routerLink]=\"sessionService.getItem('role') != 3 ? '/inventory-mngt/payment' : '/inventory-mngt/dashboard'\"\r\n                style=\" width: auto; margin-top: 10px;\"></button>\r\n        </p-card>\r\n    </div>\r\n</div>\r\n\r\n<!-- <pre>{{ loggedInUsersList | json }}</pre> -->";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/dashboard/dashboard-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/dashboard/dashboard-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppComponentInventoryMngtDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/component/inventory-mngt/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/dashboard/dashboard.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/dashboard/dashboard.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep .card1 {\n  background-color: #42A5F5;\n  color: #fff;\n}\n:host ::ng-deep .card1 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card2 {\n  background-color: #7E57C2 !important;\n  color: #fff;\n}\n:host ::ng-deep .card2 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card3 {\n  background-color: #FFB300 !important;\n  color: #fff;\n}\n:host ::ng-deep .card3 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card4 {\n  background-color: #36A2EB !important;\n  color: #fff;\n}\n:host ::ng-deep .card4 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card5 {\n  background-color: #f57842 !important;\n  color: #fff;\n}\n:host ::ng-deep .card5 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card6 {\n  background-color: #8a6d3b !important;\n  color: #fff;\n}\n:host ::ng-deep .card6 .ui-card-body {\n  padding: 0;\n}\n.adminClass {\n  width: 16.6%;\n  padding: 0 1%;\n}\n.userClass {\n  width: 20%;\n  padding: 1%;\n}\n.gallery-cont ul {\n  padding: 0;\n  margin-bottom: 0;\n}\n.gallery-cont ul li {\n  list-style: none;\n  display: block;\n  position: relative;\n  float: left;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.gallery-cont ul li .active-left {\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n}\n.gallery-cont ul li .active-left img {\n  border-radius: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.gallery-cont ul li .active-rgt {\n  float: left;\n  width: 75px;\n  margin-left: 10px;\n}\n.gallery-cont ul li .active-rgt h6 {\n  font-weight: 500;\n  margin: 0;\n  color: #000;\n}\n.gallery-cont ul li .active-rgt .red-btn {\n  background: #f06487;\n}\n@media only screen and (max-width: 767px) {\n  .adminClass {\n    width: 100%;\n  }\n\n  .userClass {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L2Rhc2hib2FyZC9GOlxcYmFnZWVcXGludmVudG9yeS1tbmd0XFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudFxcaW52ZW50b3J5LW1uZ3RcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvaW52ZW50b3J5LW1uZ3QvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLHlCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQVE7RUFDUSxVQUFBO0FDRWhCO0FEQ0E7RUFDUSxvQ0FBQTtFQUNBLFdBQUE7QUNFUjtBRERRO0VBQ1EsVUFBQTtBQ0doQjtBREFBO0VBQ1Esb0NBQUE7RUFDQSxXQUFBO0FDR1I7QURGUTtFQUNRLFVBQUE7QUNJaEI7QUREQTtFQUNRLG9DQUFBO0VBRUEsV0FBQTtBQ0dSO0FERlE7RUFDUSxVQUFBO0FDSWhCO0FEREE7RUFDUSxvQ0FBQTtFQUNBLFdBQUE7QUNJUjtBREhRO0VBQ1EsVUFBQTtBQ0toQjtBREZBO0VBQ1Esb0NBQUE7RUFDQSxXQUFBO0FDS1I7QURKUTtFQUNRLFVBQUE7QUNNaEI7QURGQTtFQUNRLFlBQUE7RUFDQSxhQUFBO0FDS1I7QURGQTtFQUNRLFVBQUE7RUFDQSxXQUFBO0FDS1I7QUREUTtFQUNJLFVBQUE7RUFBVSxnQkFBQTtBQ0t0QjtBREpZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTWhCO0FETGdCO0VBQ0ksV0FBQTtFQUFXLFlBQUE7RUFBWSxXQUFBO0VBQVcsa0JBQUE7QUNVdEQ7QURUb0I7RUFDSSxtQkFBQTtFQUFtQixlQUFBO0VBQWUsZ0JBQUE7RUFBZ0IsTUFBQTtFQUFNLE9BQUE7RUFBTyxRQUFBO0VBQVEsU0FBQTtFQUFTLFlBQUE7QUNrQnhHO0FEZmdCO0VBQ0ksV0FBQTtFQUFXLFdBQUE7RUFBVyxpQkFBQTtBQ21CMUM7QURsQm9CO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ29CeEI7QURqQm9CO0VBQ0ksbUJBQUE7QUNtQnhCO0FEVkk7RUFDSTtJQUNRLFdBQUE7RUNhZDs7RURWTTtJQUNRLFdBQUE7RUNhZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNhcmQxe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MkE1RjU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLnVpLWNhcmQtYm9keXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY2FyZDJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdFNTdDMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC51aS1jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQzeyAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC51aS1jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQ0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNkEyRUIgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZCQjZBICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLnVpLWNhcmQtYm9keXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY2FyZDV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1Nzg0MiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC51aS1jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQ2e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4YTZkM2IgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAudWktY2FyZC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5hZG1pbkNsYXNze1xyXG4gICAgICAgIHdpZHRoOiAxNi42JTtcclxuICAgICAgICBwYWRkaW5nOiAwIDElO1xyXG59XHJcblxyXG4udXNlckNsYXNze1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgcGFkZGluZzogMSU7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWNvbnR7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDttYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlLWxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjVweDtoZWlnaHQ6MjVweDtmbG9hdDpsZWZ0O3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwJTttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZS1yZ3R7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDt3aWR0aDo3NXB4O21hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucmVkLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwNjQ4NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAuYWRtaW5DbGFzc3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudXNlckNsYXNze1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfSIsIjpob3N0IDo6bmctZGVlcCAuY2FyZDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJBNUY1O1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2FyZDEgLnVpLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2FyZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U1N0MyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkMiAudWktY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkIzMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNhcmQzIC51aS1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2QTJFQiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2FyZDQgLnVpLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2FyZDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3ODQyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkNSAudWktY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkNiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YTZkM2IgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNhcmQ2IC51aS1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWRtaW5DbGFzcyB7XG4gIHdpZHRoOiAxNi42JTtcbiAgcGFkZGluZzogMCAxJTtcbn1cblxuLnVzZXJDbGFzcyB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4uZ2FsbGVyeS1jb250IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5nYWxsZXJ5LWNvbnQgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZ2FsbGVyeS1jb250IHVsIGxpIC5hY3RpdmUtbGVmdCB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2FsbGVyeS1jb250IHVsIGxpIC5hY3RpdmUtbGVmdCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmdhbGxlcnktY29udCB1bCBsaSAuYWN0aXZlLXJndCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNzVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZ2FsbGVyeS1jb250IHVsIGxpIC5hY3RpdmUtcmd0IGg2IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5nYWxsZXJ5LWNvbnQgdWwgbGkgLmFjdGl2ZS1yZ3QgLnJlZC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZjA2NDg3O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hZG1pbkNsYXNzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC51c2VyQ2xhc3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/dashboard/dashboard.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/dashboard/dashboard.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentInventoryMngtDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/customer.service */
    "./src/app/shared/customer.service.ts");
    /* harmony import */


    var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/stock.service */
    "./src/app/shared/stock.service.ts");
    /* harmony import */


    var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/dashboard.service */
    "./src/app/shared/dashboard.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/company.service */
    "./src/app/shared/company.service.ts");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/sales.service */
    "./src/app/shared/sales.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var src_app_shared_purchase_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/purchase.service */
    "./src/app/shared/purchase.service.ts");
    /* harmony import */


    var src_app_shared_invoice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/invoice.service */
    "./src/app/shared/invoice.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_collection_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/shared/collection.service */
    "./src/app/shared/collection.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(companyService, _fb, auth, sessionService, customerService, stockService, dashboardService, salesService, messageService, collectionService, purchaseService, invoiceService) {
        _classCallCheck(this, DashboardComponent);

        this.companyService = companyService;
        this._fb = _fb;
        this.auth = auth;
        this.sessionService = sessionService;
        this.customerService = customerService;
        this.stockService = stockService;
        this.dashboardService = dashboardService;
        this.salesService = salesService;
        this.messageService = messageService;
        this.collectionService = collectionService;
        this.purchaseService = purchaseService;
        this.invoiceService = invoiceService;
        this.customerList = [];
        this.stocksList = [];
        this.companyList = [];
        this.branchList = [];
        this.stocksLatestList = [];
        this.salesLatestList = [];
        this.purchaseLatestList = [];
        this.totalSalesAmount = 0;
        this.totalPurchaceAmount = 0;
        this.totalCollectionAmount = 0;
        this.yearList = [];
        this.selectedYear = Number(moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY'));
        this.loggedInUsersList = [];
        this.resendVerifyForm = this._fb.group({
          _id: [this.sessionService.getItem('_id'), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
          user_name: [this.sessionService.getItem('user_name'), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
          user_email: [this.sessionService.getItem('user_email'), [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]]
        });
        this.company_id = this.sessionService.getItem('_id').company_details_id;
        this.yearList = [{
          label: '2019',
          value: 2019
        }, {
          label: '2018',
          value: 2018
        }];
        this.options = {
          title: {
            display: true,
            text: 'Monthly Profit/Loss Report for 2020',
            fontSize: 16
          },
          legend: {
            position: 'bottom'
          },
          responsive: true,
          tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
              label: function label(tooltipItem, data) {
                var label = data.labels[tooltipItem.index];
                var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                var currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_15__["CurrencyPipe"]('en');
                var formattedNumber = currencyPipe.transform(datasetLabel, 'INR', 'symbol');
                return label + ': ' + formattedNumber;
              }
            }
          },
          scales: {
            yAxes: [{
              // stacked: true,
              ticks: {
                beginAtZero: !0,
                userCallback: function userCallback(value, index, values) {
                  var currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_15__["CurrencyPipe"]('en');
                  var formattedNumber = currencyPipe.transform(value, 'INR', 'symbol');
                  return formattedNumber;
                }
              }
            }],
            XAxes: [{// stacked: true
            }]
          }
        };
        this.items = [{
          label: '',
          icon: 'pi pi-home'
        }, {
          label: 'Dashboard'
        }];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          /**
             * login user by sockte
             */
          this.auth.logInSocktet().subscribe(function (user) {
            console.log('login user');
            console.log(user);
            console.log(_this.loggedInUsersList);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](_this.loggedInUsersList, function (o) {
              return o._id == user._id;
            });
            console.log(sliceIndex);

            if (sliceIndex > -1) {
              // this.loggedInUsersList.splice(sliceIndex, 1);
              _this.loggedInUsersList.splice(sliceIndex, 1, user);
            } else {
              _this.loggedInUsersList.push(user);
            }
          });
          this.auth.logOutSocktet().subscribe(function (user) {
            console.log('logout user');
            console.log(user);
            console.log(_this.loggedInUsersList);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](_this.loggedInUsersList, function (o) {
              return o._id == user._id;
            });
            console.log(sliceIndex);

            if (sliceIndex > -1) {
              // this.loggedInUsersList.splice(sliceIndex, 1);
              _this.loggedInUsersList.splice(sliceIndex, 1, user);
            }
          });
          this.getTotalSalesAmount();
          this.getTotalPurchaseAmount();
          this.getTotalCollectionAmount();
          this.getLoggedInUsers();
          this.getCompany();
          this.getCustomerByCompany();
          this.getStocksByCompany();
          this.getLatestStocks();
          this.getLatestSales();
          this.getLatestPurchase();
          this.getProfitLoss();
        }
      }, {
        key: "getLoggedInUsers",
        value: function getLoggedInUsers() {
          var _this2 = this;

          console.log('getUserCompanyId', this.sessionService.getItem('company_id'));
          this.dashboardService.getLoggedInUsers().subscribe(function (data) {
            console.log('getLoggedInUsers', data);
            _this2.loggedInUsersList = [];

            if (_this2.sessionService.getItem('role') != 0) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var lData = _step.value;

                  if (lData.company_details_id._id == _this2.sessionService.getItem('company_id')) {
                    console.log('lData', lData);

                    _this2.loggedInUsersList.push(lData);
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            } else {
              _this2.loggedInUsersList = data;
            } // this.getBranchByCompany(data[0]._id)

          });
        }
      }, {
        key: "getCompany",
        value: function getCompany() {
          var _this3 = this;

          this.companyService.getCompany().subscribe(function (data) {
            console.log('companyList', data);
            _this3.companyList = data; // this.getBranchByCompany(data[0]._id)
          });
        }
      }, {
        key: "getTotalSalesAmount",
        value: function getTotalSalesAmount() {
          var _this4 = this;

          this.invoiceService.getTotalSalesAmount().subscribe(function (data) {
            console.log('getTotalSalesAmount', data);
            _this4.totalSalesAmount = data.length > 0 ? data[0].grand_total : 0;
          });
        }
      }, {
        key: "getTotalPurchaseAmount",
        value: function getTotalPurchaseAmount() {
          var _this5 = this;

          this.invoiceService.getTotalPurchaseAmount().subscribe(function (data) {
            console.log('getTotalPurchaseAmount', data);
            _this5.totalPurchaceAmount = data.length > 0 ? data[0].grand_total : 0;
          });
        }
      }, {
        key: "getTotalCollectionAmount",
        value: function getTotalCollectionAmount() {
          var _this6 = this;

          this.collectionService.getCustomerCollectionTotal().subscribe(function (data) {
            console.log('getTotalCollectionAmount', data);
            _this6.totalCollectionAmount = data.length > 0 ? data[0].grand_total : 0;
          });
        }
      }, {
        key: "getCustomerByCompany",
        value: function getCustomerByCompany() {
          var _this7 = this;

          this.customerService.getCustomerByCompany().subscribe(function (data) {
            console.log('customerList', data);
            _this7.customerList = data;
          });
        }
      }, {
        key: "getStocksByCompany",
        value: function getStocksByCompany() {
          var _this8 = this;

          this.stockService.getStockByCompany().subscribe(function (data) {
            console.log('stocksList', data);
            _this8.stocksList = data;
          });
        }
      }, {
        key: "getLatestStocks",
        value: function getLatestStocks() {
          var _this9 = this;

          this.dashboardService.getLatestStocks().subscribe(function (data) {
            console.log('getLatestStocks', data);
            _this9.stocksLatestList = data;
          });
        }
      }, {
        key: "getLatestSales",
        value: function getLatestSales() {
          var _this10 = this;

          this.dashboardService.getLatestSales().subscribe(function (data) {
            console.log('getLatestSales', data);
            _this10.salesLatestList = data;
          });
        }
      }, {
        key: "getLatestPurchase",
        value: function getLatestPurchase() {
          var _this11 = this;

          this.dashboardService.getLatestPurchase().subscribe(function (data) {
            console.log('getLatestPurchase', data);
            _this11.purchaseLatestList = data;
          });
        }
      }, {
        key: "getProfitLoss",
        value: function getProfitLoss() {
          var _this12 = this;

          this.dashboardService.getProfitLoss().subscribe(function (data) {
            console.log('getProfitLoss', data);
            _this12.data = {
              labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
              datasets: [{
                label: 'Purchase',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }, {
                label: 'Sales',
                backgroundColor: '#FFB300',
                borderColor: '#7CB342',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }, {
                label: 'Collections',
                backgroundColor: '#8a6d3b',
                borderColor: '#8a6d3b',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }, {
                label: 'Profit',
                backgroundColor: '#66BB6A',
                borderColor: '#7CB342',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }, {
                label: 'Loss',
                backgroundColor: '#ee4e09 ',
                borderColor: '#ee4e09 ',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }]
            };
            data.purchase_pos.forEach(function (element) {
              _this12.data.datasets[0].data[element._id.month] = element.totalAmount;
            });
            data.sales_pos.forEach(function (element) {
              _this12.data.datasets[1].data[element._id.month] = element.totalAmount;
            });
            data.collection_pos.forEach(function (element) {
              _this12.data.datasets[2].data[element._id.month] = element.totalAmount;
            });
            data.sales_pos.forEach(function (element) {
              var pos = _this12.data.datasets[1].data[element._id.month] - _this12.data.datasets[0].data[element._id.month];

              if (pos >= 0) {
                _this12.data.datasets[3].data[element._id.month] = pos;
              } else {
                _this12.data.datasets[4].data[element._id.month] = pos;
              }
            });
          });
        }
      }, {
        key: "onChangeCompany",
        value: function onChangeCompany(val) {
          console.log('onChangeCompany', val);
          this.company_id = val;
          this.sessionService.setItem('company_id', val._id);
          this.ngOnInit();
        }
      }, {
        key: "resendVerifyEmail",
        value: function resendVerifyEmail() {
          var _this13 = this;

          console.log('resendVerifyEmail');
          this.sendingVerificationMail = true; // let emailData = {
          //   _id : this.sessionService.getItem('_id')._id,
          //   user_name : this.sessionService.getItem('_id').user_name,
          //   user_email : this.sessionService.getItem('_id').user_email
          // }

          this.auth.resendVerifyEmail(this.resendVerifyForm.value).subscribe(function (data) {
            console.log('data', data);
            _this13.sendingVerificationMail = false;
            _this13.sendingVerificationMailStatus = data;

            if (data == 1) {
              _this13.sessionService.setItem('user_email', _this13.resendVerifyForm.value.user_email); // update localstoreage values


              _this13.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: 'Send Successfully'
              });
            } else if (data == 2) {
              _this13.messageService.add({
                severity: 'warn',
                summary: 'Not send',
                detail: ''
              });
            } else if (data == 3) {
              _this13.messageService.add({
                severity: 'warn',
                summary: 'Email alredy exist',
                detail: ''
              });
            } else {
              _this13.messageService.add({
                severity: 'warn',
                summary: 'Service Message',
                detail: 'Not send. Retry'
              });
            }
          }, function (error) {
            console.log('er', error);
            _this13.sendingVerificationMail = false;

            _this13.messageService.add({
              severity: 'error',
              summary: 'Oops!',
              detail: 'Somthing went wrong'
            });
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
      }, {
        type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthLoginService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"]
      }, {
        type: src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }, {
        type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"]
      }, {
        type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
      }, {
        type: src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__["SalesService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_collection_service__WEBPACK_IMPORTED_MODULE_16__["CollectionService"]
      }, {
        type: src_app_shared_purchase_service__WEBPACK_IMPORTED_MODULE_13__["PurchaseService"]
      }, {
        type: src_app_shared_invoice_service__WEBPACK_IMPORTED_MODULE_14__["InvoiceService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/component/inventory-mngt/dashboard/dashboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthLoginService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"], src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"], src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"], src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__["SalesService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_collection_service__WEBPACK_IMPORTED_MODULE_16__["CollectionService"], src_app_shared_purchase_service__WEBPACK_IMPORTED_MODULE_13__["PurchaseService"], src_app_shared_invoice_service__WEBPACK_IMPORTED_MODULE_14__["InvoiceService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/dashboard/dashboard.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/dashboard/dashboard.module.ts ***!
    \************************************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppComponentInventoryMngtDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/component/inventory-mngt/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/component/inventory-mngt/dashboard/dashboard.component.ts");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/chart.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/tooltip.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/tabview */
    "./node_modules/primeng/tabview.js");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/scrollpanel */
    "./node_modules/primeng/scrollpanel.js");
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/messages.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/message.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var primeng_inplace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/inplace */
    "./node_modules/primeng/inplace.js");
    /* harmony import */


    var primeng_inplace__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var src_app_pipe_negotive_to_brackets_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/pipe/negotive-to-brackets.pipe */
    "./src/app/pipe/negotive-to-brackets.pipe.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], src_app_pipe_negotive_to_brackets_pipe__WEBPACK_IMPORTED_MODULE_21__["NegotiveToBracketsPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_5__["ChartModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"], primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_16__["ScrollPanelModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_17__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_18__["MessageModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__["ProgressSpinnerModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_20__["InplaceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/pipe/negotive-to-brackets.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/pipe/negotive-to-brackets.pipe.ts ***!
    \***************************************************/

  /*! exports provided: NegotiveToBracketsPipe */

  /***/
  function srcAppPipeNegotiveToBracketsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NegotiveToBracketsPipe", function () {
      return NegotiveToBracketsPipe;
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

    var NegotiveToBracketsPipe = /*#__PURE__*/function () {
      function NegotiveToBracketsPipe() {
        _classCallCheck(this, NegotiveToBracketsPipe);
      }

      _createClass(NegotiveToBracketsPipe, [{
        key: "transform",
        value: function transform(value) {
          console.log(value);

          if (value < 0) {
            var _currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]('en');

            var _formattedNumber = _currencyPipe.transform(Math.abs(value), 'INR', 'symbol');

            return "( ".concat(_formattedNumber, " )");
          }

          var currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]('en');
          var formattedNumber = currencyPipe.transform(value, 'INR', 'symbol');
          return formattedNumber;
        }
      }]);

      return NegotiveToBracketsPipe;
    }();

    NegotiveToBracketsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'negotiveToBrackets'
    })], NegotiveToBracketsPipe);
    /***/
  },

  /***/
  "./src/app/shared/customer.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/customer.service.ts ***!
    \********************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppSharedCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/shared/session.service.ts");

    var CustomerService = /*#__PURE__*/function () {
      function CustomerService(httpClient, sessionService) {
        _classCallCheck(this, CustomerService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(CustomerService, [{
        key: "getCustomer",
        value: function getCustomer() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer');
        }
      }, {
        key: "getCustomerByCompany",
        value: function getCustomerByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addCustomer",
        value: function addCustomer(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/' + id);
        }
      }]);

      return CustomerService;
    }();

    CustomerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], CustomerService);
    /***/
  },

  /***/
  "./src/app/shared/dashboard.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/dashboard.service.ts ***!
    \*********************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppSharedDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/shared/session.service.ts");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(httpClient, sessionService) {
        _classCallCheck(this, DashboardService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(DashboardService, [{
        key: "getLoggedInUsers",
        value: function getLoggedInUsers() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/logged-in-users');
        }
      }, {
        key: "getLatestStocks",
        value: function getLatestStocks() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/latest-stock/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "getLatestSales",
        value: function getLatestSales() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/latest-sales/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "getLatestPurchase",
        value: function getLatestPurchase() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/latest-purchase/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "getProfitLoss",
        value: function getProfitLoss() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/profit-loss/' + this.sessionService.getItem('company_id'));
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], DashboardService);
    /***/
  },

  /***/
  "./src/app/shared/stock.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/stock.service.ts ***!
    \*****************************************/

  /*! exports provided: StockService */

  /***/
  function srcAppSharedStockServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockService", function () {
      return StockService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/shared/session.service.ts");

    var StockService = /*#__PURE__*/function () {
      function StockService(httpClient, sessionService) {
        _classCallCheck(this, StockService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(StockService, [{
        key: "getStock",
        value: function getStock() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock');
        }
      }, {
        key: "getStockByCompany",
        value: function getStockByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "getStockByCompanySlug",
        value: function getStockByCompanySlug() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company-slug/' + this.sessionService.getItem('slug'));
        }
      }, {
        key: "getStockByCompanyActive",
        value: function getStockByCompanyActive() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company-active/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addStock",
        value: function addStock(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateStock",
        value: function updateStock(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteStock",
        value: function deleteStock(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/' + id);
        }
      }]);

      return StockService;
    }();

    StockService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    StockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], StockService);
    /***/
  }
}]);
//# sourceMappingURL=component-inventory-mngt-dashboard-dashboard-module-es5.js.map