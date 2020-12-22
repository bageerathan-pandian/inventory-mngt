function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-user-company-info-company-info-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/company-info/company-info.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/company-info/company-info.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtUserCompanyInfoCompanyInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n        <div style=\"margin-top: 15px;\">\r\n<p-card>\r\n        <div class=\"profile-wrapper\">\r\n\r\n\r\n    <form [formGroup]=\"companyForm\">\r\n        <div class=\"ui-g ui-fluid\" >\r\n            \r\n                <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Company Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText id=\"vin\" formControlName=\"company_name\" autofocus />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">Company Address</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input pInputText  formControlName=\"company_address\" ngx-google-places-autocomplete  #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n    \r\n                    </div>\r\n                </div>\r\n               \r\n                <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Owner Name</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <input pInputText id=\"vin\" formControlName=\"owner_name\"  />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Company Phone</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <!-- <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask> -->\r\n                            <input pInputText type=\"text\" pKeyFilter=\"int\" ng2TelInput (countryChange)=\"onCountryChange($event)\" [ng2TelInputOptions]=\"{initialCountry:'in'}\"  formControlName=\"phone\"  />\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Company Phone 2</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <!-- <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask> -->\r\n                            <input pInputText type=\"text\" pKeyFilter=\"int\" ng2TelInput (countryChange)=\"onCountryChange($event)\" [ng2TelInputOptions]=\"{initialCountry:'in'}\"  formControlName=\"phone2\"  />\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">GSTIN</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                                <input pInputText id=\"vin\" formControlName=\"gstin\"  />\r\n            \r\n                        </div>\r\n                    </div>\r\n            <!-- <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"brand\">Status</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n    \r\n                </div>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-12\">\r\n                    <div class=\"profile-wrap\">\r\n                        <div class=\"prof-img\">\r\n                            <img src=\"./assets/img/logo.png\" class=\"car-add\" *ngIf=\"!croppedImage\">\r\n                            <img [src]=\"croppedImage\" *ngIf=\"croppedImage\" class=\"car-addafter\" >\r\n                        </div>\r\n                        <button class=\"cmn-btn\" type=\"button\" style=\"border:none;float:initial;font-size: 12px !important;background: #ef6a97;margin-top: 15px;position: relative;\">\r\n                            <!-- <input #upload_logofile type=\"file\" accept=\".png, .jpg, .jpeg\" style=\"position:absolute;display:inline-block;opacity:0;width:100%;left: 0;\"\r\n                            (change)=\"fileChangeEvent($event.target.files)\"/>  -->\r\n                              <input #upload_logofile type=\"file\" accept=\".png, .jpg, .jpeg\" style=\"position:absolute;display:inline-block;opacity:0;width:100%;left: 0;\"\r\n                            (change)=\"fileChangeEvent($event)\"/>\r\n                            <i class=\"pi pi-cloud-upload\" style=\"font-size:23px;\"></i>Upload Company Logo</button>\r\n                    </div>\r\n             </div>  \r\n             \r\n            <!-- <div class=\"ui-g-12\">\r\n                <a routerLink=\"/company/{{sessionService.getItem('slug')}}\" target=\"_blank\">Company Link</a>\r\n            </div>     -->\r\n            </div>\r\n\r\n    </div>\r\n    \r\n        \r\n        <p-footer>\r\n                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\" style=\"text-align: center;\">\r\n                    <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\r\n                    <button type=\"button\" style=\"width: 20%;\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"onUpdate()\" label=\"Update\"></button>\r\n                </div>\r\n            </p-footer>\r\n\r\n    </form>\r\n\r\n        </div>\r\n\r\n</p-card>\r\n</div>\r\n\r\n<p-dialog  [(visible)]=\"displayDialog\" [maximizable]=\"true\" [responsive]=\"true\" [showHeader]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '500px'}\">\r\n \r\n    <image-cropper\r\n    [imageChangedEvent]=\"imageChangedEvent\"\r\n    [maintainAspectRatio]=\"true\"\r\n    [aspectRatio]=\"4 / 3\"\r\n    format=\"png\"\r\n    (imageCropped)=\"imageCropped($event)\"\r\n    (imageLoaded)=\"imageLoaded()\"\r\n    (cropperReady)=\"cropperReady()\"\r\n    (loadImageFailed)=\"loadImageFailed()\"\r\n></image-cropper>\r\n    <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Yes\" class=\"ui-button-success\"></button>\r\n\r\n    <button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\"></button>\r\n\r\n    </p-dialog>\r\n\r\n    \r\n ";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/user/company-info/company-info-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/user/company-info/company-info-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CompanyInfoRoutingModule */

  /***/
  function srcAppComponentInventoryMngtUserCompanyInfoCompanyInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyInfoRoutingModule", function () {
      return CompanyInfoRoutingModule;
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


    var _company_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./company-info.component */
    "./src/app/component/inventory-mngt/user/company-info/company-info.component.ts");

    var routes = [{
      path: '',
      component: _company_info_component__WEBPACK_IMPORTED_MODULE_3__["CompanyInfoComponent"]
    }];

    var CompanyInfoRoutingModule = function CompanyInfoRoutingModule() {
      _classCallCheck(this, CompanyInfoRoutingModule);
    };

    CompanyInfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CompanyInfoRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/user/company-info/company-info.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/user/company-info/company-info.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtUserCompanyInfoCompanyInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-wrapper {\n  background: #fff;\n}\n.profile-wrapper h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n.profile-wrapper h4 span {\n  padding-top: 5px;\n  color: #c7c7c7;\n}\n.profile-wrapper button:focus {\n  outline: none;\n}\n.profile-wrapper .cmn-btn {\n  float: right;\n  padding: 3px 21px !important;\n  border-radius: 23px !important;\n  background: #08bd65;\n  color: #fff !important;\n  font-size: 15px !important;\n  text-transform: uppercase;\n  padding-left: 15px !important;\n  border: none;\n}\n.profile-wrapper .cmn-btn i {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px;\n}\n.profile-wrapper .profile-wrap {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  text-align: center;\n  height: 193px;\n  padding: 15px;\n  margin-bottom: 25px;\n}\n.profile-wrapper .profile-wrap .prof-img {\n  width: 115px;\n  height: 115px;\n  position: relative;\n  box-shadow: 0 0 10px #d4d4d4;\n  border-radius: 100%;\n  margin: auto;\n}\n.profile-wrapper .profile-wrap .prof-img img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L3VzZXIvY29tcGFueS1pbmZvL0Y6XFxiYWdlZVxcaW52ZW50b3J5LW1uZ3RcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxpbnZlbnRvcnktbW5ndFxcdXNlclxcY29tcGFueS1pbmZvXFxjb21wYW55LWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC91c2VyL2NvbXBhbnktaW5mby9jb21wYW55LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQUE7RUFDSSxlQUFBO0VBQWUseUJBQUE7RUFBMEIsbUJBQUE7QUNJN0M7QURGQztFQUNHLGdCQUFBO0VBQW9CLGNBQUE7QUNLeEI7QURGQTtFQUNJLGFBQUE7QUNJSjtBREZBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQWtDLFlBQUE7QUNLdEM7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR0o7QURBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDR1I7QURGUTtFQUNJLGVBQUE7RUFBZSxnQkFBQTtFQUFnQixrQkFBQTtFQUFtQixNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxTQUFBO0VBQVMsWUFBQTtFQUFZLG1CQUFBO0FDWXhHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L3VzZXIvY29tcGFueS1pbmZvL2NvbXBhbnktaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbmg0e1xyXG4gICAgZm9udC1zaXplOjE4cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjI1cHg7XHJcbn1cclxuIGg0IHNwYW57XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7ICAgIGNvbG9yOiAjYzdjN2M3O1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uY21uLWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAzcHggMjFweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzA4YmQ2NTtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDsgICAgYm9yZGVyOiBub25lO1xyXG4gXHJcbn1cclxuXHJcbi5jbW4tYnRuIGkge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnByb2ZpbGUtd3JhcHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE5M3B4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAucHJvZi1pbWd7XHJcbiAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkNGQ0ZDQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7cG9zaXRpb246IGFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbjphdXRvO2JvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufSIsIi5wcm9maWxlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnByb2ZpbGUtd3JhcHBlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wcm9maWxlLXdyYXBwZXIgaDQgc3BhbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGNvbG9yOiAjYzdjN2M3O1xufVxuLnByb2ZpbGUtd3JhcHBlciBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb2ZpbGUtd3JhcHBlciAuY21uLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogM3B4IDIxcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMDhiZDY1O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLmNtbi1idG4gaSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5wcm9maWxlLXdyYXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxOTNweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtd3JhcCAucHJvZi1pbWcge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS13cmFwIC5wcm9mLWltZyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/user/company-info/company-info.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/user/company-info/company-info.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CompanyInfoComponent */

  /***/
  function srcAppComponentInventoryMngtUserCompanyInfoCompanyInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyInfoComponent", function () {
      return CompanyInfoComponent;
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


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
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


    var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/company.service */
    "./src/app/shared/company.service.ts");
    /* harmony import */


    var src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/image-upload.service */
    "./src/app/shared/image-upload.service.ts");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CompanyInfoComponent = /*#__PURE__*/function () {
      function CompanyInfoComponent(sessionService, userService, _fb, imageUploadService, router, companyService, messageService) {
        _classCallCheck(this, CompanyInfoComponent);

        this.sessionService = sessionService;
        this.userService = userService;
        this._fb = _fb;
        this.imageUploadService = imageUploadService;
        this.router = router;
        this.companyService = companyService;
        this.messageService = messageService;
        this.uploadedFiles = [];
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.status = [{
          label: 'Active',
          value: 1
        }, {
          label: 'De-Active',
          value: 0
        }];
        this.companyForm = this._fb.group({
          _id: [this.sessionService.getItem('company_id')],
          company_name: [this.sessionService.getItem('company_name'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          company_address: [this.sessionService.getItem('company_address'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          company_image: [this.sessionService.getItem('company_image')],
          owner_name: [this.sessionService.getItem('owner_name'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          phone: [this.sessionService.getItem('phone'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          phone2: [this.sessionService.getItem('phone2'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          gstin: [this.sessionService.getItem('gstin'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.croppedImage = this.sessionService.getItem('company_image') ? src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].api_url + this.sessionService.getItem('company_image') : null;
      }

      _createClass(CompanyInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.bradCrum = [{
            label: '',
            icon: 'pi pi-home',
            command: function command(event) {
              _this.router.navigate(['/inventory-mngt/dashboard']);
            }
          }, {
            label: "Company Info",
            command: function command(event) {
              _this.router.navigate(["/inventory-mngt/company-info"]);
            }
          }];
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange(address) {
          console.log('address', address); // Do some stuff

          this.companyForm.controls['company_address'].setValue(address.formatted_address);
        } // showDialogToAdd(company) {
        //   console.log(company)
        //   this.displayDialog = true;
        //   this.companyForm.controls['_id'].setValue(company._id);
        //   this.companyForm.controls['company_name'].setValue(company.company_name);
        //   this.companyForm.controls['company_address'].setValue(company.company_address);
        //   this.companyForm.controls['company_image'].setValue(company.company_image);
        //   this.croppedImage = company.company_image;
        //   this.companyForm.controls['owner_name'].setValue(company.owner_name);
        //   this.companyForm.controls['phone'].setValue(company.phone);
        //   this.companyForm.controls['gstin'].setValue(company.gstin);
        //   this.companyForm.controls['status'].setValue(company.status);
        // }

      }, {
        key: "imageUpload",
        value: function imageUpload() {
          var _this2 = this;

          console.log(this.imageChangedEvent.target.files.item(0));
          this.imageUploadService.imageUpload(this.imageChangedEvent.target.files.item(0)).subscribe(function (data) {
            console.log(data);

            _this2.companyForm.controls['company_image'].setValue(data);

            _this2.companyUpdate();
          });
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          var _this3 = this;

          Object.keys(this.companyForm.controls).forEach(function (key) {
            _this3.companyForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "companyUpdate",
        value: function companyUpdate() {
          var _this4 = this;

          if (this.companyForm.invalid) {
            this.checkValidity();
            return false;
          }

          this.companyService.updateCompany(this.companyForm.value).subscribe(function (data) {
            console.log('update', data);
            _this4.displayDialog = false;

            _this4.messageService.add({
              severity: 'success',
              summary: 'Company Updated Successfully',
              detail: 'Company Updated Successfully'
            });

            _this4.userService.getUser().subscribe(function (data) {
              console.log('data', data[0]);

              _this4.sessionService.setUserCredentials(data[0]);
            });
          }, function (error) {
            console.log(error);

            _this4.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          console.log('onRowAdd', this.companyForm.value);

          if (this.imageChangedEvent) {
            this.imageUpload();
          } else {
            this.companyUpdate();
          }
        } //   fileChangeEvent(file: FileList) {
        //     console.log(file)
        //     this.imageChangedEvent = file.item(0);
        //     console.log('imageChangedEvent',this.imageChangedEvent)
        //      // show image preview
        //      var render:FileReader = new FileReader();
        //      render.onloadend = (e) => {
        //       console.log('reslt',render)
        //        this.croppedImage = render.result;
        //      }
        //      render.readAsDataURL(this.imageChangedEvent);
        // }

      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          console.log(event);
          this.displayDialog = true;
          this.imageChangedEvent = event;
        }
      }, {
        key: "onConfirm",
        value: function onConfirm() {
          this.displayDialog = false;
        }
      }, {
        key: "onReject",
        value: function onReject() {
          this.displayDialog = false;
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {// show cropper
        }
      }, {
        key: "cropperReady",
        value: function cropperReady() {// cropper ready
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {// show message
        }
      }, {
        key: "onCountryChange",
        value: function onCountryChange(event) {
          console.log(event);
        }
      }]);

      return CompanyInfoComponent;
    }();

    CompanyInfoComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
      }, {
        type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_7__["ImageUploadService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["GooglePlaceDirective"])], CompanyInfoComponent.prototype, "placesRef", void 0);
    CompanyInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/company-info/company-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./company-info.component.scss */
      "./src/app/component/inventory-mngt/user/company-info/company-info.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"], src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_7__["ImageUploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])], CompanyInfoComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/user/company-info/company-info.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/user/company-info/company-info.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: CompanyInfoModule */

  /***/
  function srcAppComponentInventoryMngtUserCompanyInfoCompanyInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyInfoModule", function () {
      return CompanyInfoModule;
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


    var _company_info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./company-info-routing.module */
    "./src/app/component/inventory-mngt/user/company-info/company-info-routing.module.ts");
    /* harmony import */


    var _company_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./company-info.component */
    "./src/app/component/inventory-mngt/user/company-info/company-info.component.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/dialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/password.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/confirmdialog.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/inputswitch */
    "./node_modules/primeng/inputswitch.js");
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/chart.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/inputmask */
    "./node_modules/primeng/inputmask.js");
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var ng2_tel_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng2-tel-input */
    "./node_modules/ng2-tel-input/ng2-tel-input.js");

    var CompanyInfoModule = function CompanyInfoModule() {
      _classCallCheck(this, CompanyInfoModule);
    };

    CompanyInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_company_info_component__WEBPACK_IMPORTED_MODULE_4__["CompanyInfoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _company_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyInfoRoutingModule"], primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"], primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_16__["ToastModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__["InputSwitchModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_18__["ChartModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__["GooglePlaceModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__["InputMaskModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__["ProgressSpinnerModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperModule"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_22__["Ng2TelInputModule"]]
    })], CompanyInfoModule);
    /***/
  }
}]);
//# sourceMappingURL=component-inventory-mngt-user-company-info-company-info-module-es5.js.map