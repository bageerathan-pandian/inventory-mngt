function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-home-home-module"], {
  /***/
  "./node_modules/primeng/components/megamenu/megamenu.js":
  /*!**************************************************************!*\
    !*** ./node_modules/primeng/components/megamenu/megamenu.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsMegamenuMegamenuJs(module, exports, __webpack_require__) {
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

    var domhandler_1 = __webpack_require__(
    /*! ../dom/domhandler */
    "./node_modules/primeng/components/dom/domhandler.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MegaMenu =
    /** @class */
    function () {
      function MegaMenu(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.orientation = 'horizontal';
        this.autoZIndex = true;
        this.baseZIndex = 0;
      }

      MegaMenu.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
          return;
        }

        if (this.hideTimeout) {
          clearTimeout(this.hideTimeout);
          this.hideTimeout = null;
        }

        this.activeItem = item;

        if (menuitem.items) {
          var submenu = item.children[0].nextElementSibling;

          if (submenu) {
            if (this.autoZIndex) {
              submenu.style.zIndex = String(this.baseZIndex + ++domhandler_1.DomHandler.zindex);
            }

            if (this.orientation === 'horizontal') {
              submenu.style.top = domhandler_1.DomHandler.getOuterHeight(item.children[0]) + 'px';
              submenu.style.left = '0px';
            } else if (this.orientation === 'vertical') {
              submenu.style.top = '0px';
              submenu.style.left = domhandler_1.DomHandler.getOuterWidth(item.children[0]) + 'px';
            }
          }
        }
      };

      MegaMenu.prototype.onItemMouseLeave = function (event, link) {
        var _this = this;

        this.hideTimeout = setTimeout(function () {
          _this.activeItem = null;
        }, 1000);
      };

      MegaMenu.prototype.itemClick = function (event, item) {
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

        this.activeItem = null;
      };

      MegaMenu.prototype.getColumnClass = function (menuitem) {
        var length = menuitem.items ? menuitem.items.length : 0;
        var columnClass;

        switch (length) {
          case 2:
            columnClass = 'ui-g-6';
            break;

          case 3:
            columnClass = 'ui-g-4';
            break;

          case 4:
            columnClass = 'ui-g-3';
            break;

          case 6:
            columnClass = 'ui-g-2';
            break;

          default:
            columnClass = 'ui-g-12';
            break;
        }

        return columnClass;
      };

      __decorate([core_1.Input(), __metadata("design:type", Array)], MegaMenu.prototype, "model", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], MegaMenu.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], MegaMenu.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], MegaMenu.prototype, "orientation", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], MegaMenu.prototype, "autoZIndex", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Number)], MegaMenu.prototype, "baseZIndex", void 0);

      MegaMenu = __decorate([core_1.Component({
        selector: 'p-megaMenu',
        template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\"\n            [ngClass]=\"{'ui-megamenu ui-widget ui-widget-content ui-corner-all':true,'ui-megamenu-horizontal': orientation == 'horizontal','ui-megamenu-vertical': orientation == 'vertical'}\">\n            <ul class=\"ui-megamenu-root-list\">\n                <ng-template ngFor let-category [ngForOf]=\"model\">\n                    <li *ngIf=\"category.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': category.visible === false}\">\n                    <li *ngIf=\"!category.separator\" #item [ngClass]=\"{'ui-menuitem ui-corner-all':true,'ui-menuitem-active':item==activeItem, 'ui-helper-hidden': category.visible === false}\"\n                        (mouseenter)=\"onItemMouseEnter($event, item, category)\" (mouseleave)=\"onItemMouseLeave($event, item)\">\n   \n                        <a *ngIf=\"!category.routerLink\" [href]=\"category.url||'#'\" [attr.target]=\"category.target\" [attr.title]=\"category.title\" [attr.id]=\"category.id\" (click)=\"itemClick($event, category)\" [attr.tabindex]=\"category.tabindex ? category.tabindex : '0'\"\n                            [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':category.disabled}\" [ngStyle]=\"category.style\" [class]=\"category.styleClass\">\n                            <span class=\"ui-menuitem-icon\" *ngIf=\"category.icon\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{category.label}}</span>\n                            <span *ngIf=\"category.items\" class=\"ui-submenu-icon pi pi-fw\" [ngClass]=\"{'pi-caret-down':orientation=='horizontal','pi-caret-right':orientation=='vertical'}\"></span>\n                        </a>\n                        <a *ngIf=\"category.routerLink\" [routerLink]=\"category.routerLink\" [queryParams]=\"category.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"category.routerLinkActiveOptions||{exact:false}\" [attr.tabindex]=\"category.tabindex ? category.tabindex : '0'\" \n                            [attr.target]=\"category.target\" [attr.title]=\"category.title\" [attr.id]=\"category.id\"\n                            (click)=\"itemClick($event, category)\" [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':category.disabled}\" [ngStyle]=\"category.style\" [class]=\"category.styleClass\">\n                            <span class=\"ui-menuitem-icon\" *ngIf=\"category.icon\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{category.label}}</span>\n                        </a>\n\n                        <div class=\"ui-megamenu-panel ui-widget-content ui-corner-all ui-shadow\" *ngIf=\"category.items\">\n                            <div class=\"ui-g\">\n                                <ng-template ngFor let-column [ngForOf]=\"category.items\">\n                                    <div [class]=\"getColumnClass(category)\">\n                                        <ng-template ngFor let-submenu [ngForOf]=\"column\">\n                                            <ul class=\"ui-megamenu-submenu\">\n                                                <li class=\"ui-widget-header ui-megamenu-submenu-header ui-corner-all\">{{submenu.label}}</li>\n                                                <ng-template ngFor let-item [ngForOf]=\"submenu.items\">\n                                                    <li *ngIf=\"item.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': item.visible === false}\">\n                                                    <li *ngIf=\"!item.separator\" class=\"ui-menuitem ui-corner-all\" [ngClass]=\"{'ui-helper-hidden': item.visible === false}\">\n                                                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\"\n                                                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                                            <span class=\"ui-menuitem-icon\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                                                        </a>\n                                                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\"\n                                                            [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link ui-corner-all\" \n                                                             [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\"\n                                                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                                            <span class=\"ui-menuitem-icon\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                                                        </a>\n                                                    </li>\n                                                </ng-template>\n                                            </ul>\n                                        </ng-template>\n                                    </div>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </li>\n                </ng-template>\n                <li class=\"ui-menuitem ui-menuitem-custom ui-corner-all\" *ngIf=\"orientation === 'horizontal'\">\n                    <ng-content></ng-content>\n                </li>\n            </ul>\n        </div>\n    "
      }), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])], MegaMenu);
      return MegaMenu;
    }();

    exports.MegaMenu = MegaMenu;

    var MegaMenuModule =
    /** @class */
    function () {
      function MegaMenuModule() {}

      MegaMenuModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        exports: [MegaMenu, router_1.RouterModule],
        declarations: [MegaMenu]
      })], MegaMenuModule);
      return MegaMenuModule;
    }();

    exports.MegaMenuModule = MegaMenuModule; //# sourceMappingURL=megamenu.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/megamenu.js":
  /*!******************************************!*\
    !*** ./node_modules/primeng/megamenu.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengMegamenuJs(module, exports, __webpack_require__) {
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
    /*! ./components/megamenu/megamenu */
    "./node_modules/primeng/components/megamenu/megamenu.js"));
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-header></app-header>\r\n    \r\n    \r\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"item \">\r\n        <img src=\"/assets/img/banner_001.jpg\" alt=\"New York\" width=\"1200\" height=\"700\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>GST Ready Best POS Billing Software</h3>\r\n          <!-- <p>Ownwaysoft is a single solution to manage all your business requirements</p> -->\r\n        </div>      \r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img src=\"/assets/img/banner_002.jpg\" alt=\"Chicago\" width=\"1200\" height=\"700\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>ERP Softwares</h3>\r\n                <!-- <p>All kind of management softwares</p> -->\r\n        </div>      \r\n      </div>\r\n\r\n      <div class=\"item active\">\r\n        <img src=\"/assets/img/banner_003.png\" alt=\"Chicago\" width=\"1200\" height=\"700\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>E-commerce websites</h3>\r\n                <!-- <p>We develop ecommorce websites</p> -->\r\n        </div>      \r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img src=\"/assets/img/banner_004.jpg\" alt=\"Chicago\" width=\"1200\" height=\"700\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Web Applications</h3>\r\n                <!-- <p>Single and multi page responsive web applications</p> -->\r\n        </div>      \r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img src=\"/assets/img/banner_005.jpg\" alt=\"Chicago\" width=\"1200\" height=\"700\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Mobile Development</h3>\r\n                <!-- <p>Android and IOS app development. Hybrid apps.</p> -->\r\n        </div>      \r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img src=\"/assets/img/banner_006.jpg\" alt=\"Chicago\" width=\"1200\" height=\"700\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>SEO</h3>\r\n                <!-- <p>We work in search engine optimizations, google analytics and open grapgh</p> -->\r\n        </div>      \r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Left and right controls -->\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>\r\n    \r\n    <!-- Container (About Section) -->\r\n    <div id=\"about\" class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n          <h2>About Company</h2><br>\r\n          <h4>Ownwaysoft is a software company that we develope billing softwares, web applications, e-commerce site, windows applications and hybrid apps.</h4><br>\r\n          <p>Ownwaysoft is a single solution to manage all your business requirements.We have an experience in develope billing softwares, web applications, e-commerce site, windows applications and hybrid apps.</p>\r\n          <br><button class=\"btn btn-default btn-lg\" routerLink=\"/contact-us\">Get in Touch</button>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-signal logo\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"container-fluid bg-grey\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-globe logo slideanim\"></span>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <h2>Our Values</h2><br>\r\n          <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>\r\n          <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    \r\n    <!-- Container (Services Section) -->\r\n    <div id=\"services\" class=\"container-fluid text-center bg-grey\">\r\n      <h2>SERVICES</h2>\r\n      <h4>What we do</h4>\r\n      <br>\r\n      <div class=\"row slideanim\">\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-off logo-small1\"></span>\r\n          <h4>WEB APPLICATION</h4>\r\n          <p>We develope single page and multi page applications with responsive.We have using new technologies frond end developmenat</p>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-heart logo-small1\"></span>\r\n          <h4>WINDOWS APPLICATION</h4>\r\n          <p>Also we develope windows application like billing softwares and all kind of softwares</p>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-lock logo-small1\"></span>\r\n          <h4>SOFTWARES</h4>\r\n          <p>We develope all type of softwares like hotal management softwares, school management softwares and all other management softwares.</p>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n      <div class=\"row slideanim\">\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-leaf logo-small1\"></span>\r\n          <h4>ANDROID & IOS APPS</h4>\r\n          <p>We develope android and ios hyprid apps. we develop ecommers online app and all type of mobile softwares </p>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-certificate logo-small1\"></span>\r\n          <h4>SEO</h4>\r\n          <p>We also done search engine optimizations for your websites to google, googel analytics and open grapgh</p>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-wrench logo-small1\"></span>\r\n          <h4 style=\"color:#303030;\">DATABASE MANAGEMENT</h4>\r\n          <p>We also maintain database management</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- Container (Portfolio Section) -->\r\n    <div id=\"portfolio\" class=\"container-fluid text-center \">\r\n      <h2>Our Projects</h2><br>\r\n      <h4>What we have created</h4>\r\n      <div class=\"row text-center slideanim\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"thumbnail\">\r\n            <img src=\"/assets/img/projects/project1.png\" alt=\"Paris\" width=\"400\" height=\"300\" style=\"width: 400px;height: 300px;\">\r\n            <p><strong>Ways Infrastructure </strong></p>\r\n            <p>Chennai Project</p>\r\n            <a href=\"http://www.waysinfra.com/\" title=\"Ways Infrastructure\" target=\"_blank\">Project Link</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"thumbnail\">\r\n            <img src=\"/assets/img/projects/project1.png\" alt=\"Paris\" width=\"400\" height=\"300\" style=\"width: 400px;height: 300px;\">\r\n            <p><strong>Ways Infrastructure </strong></p>\r\n            <p>Chennai Project</p>\r\n            <a href=\"http://www.waysinfra.com/\" title=\"Ways Infrastructure\" target=\"_blank\">Project Link</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"thumbnail\">\r\n            <img src=\"/assets/img/projects/project1.png\" alt=\"Paris\" width=\"400\" height=\"300\" style=\"width: 400px;height: 300px;\">\r\n            <p><strong>Ways Infrastructure </strong></p>\r\n            <p>Chennai Project</p>\r\n            <a href=\"http://www.waysinfra.com/\" title=\"Ways Infrastructure\" target=\"_blank\">Project Link</a>\r\n          </div>\r\n        </div>\r\n      </div><br>\r\n      \r\n      <h2>What our customers say</h2>\r\n      <div id=\"myCarousel\" class=\"carousel slide text-center\" data-ride=\"carousel\">\r\n        <!-- Indicators -->\r\n        <ol class=\"carousel-indicators\">\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n        </ol>\r\n    \r\n        <!-- Wrapper for slides -->\r\n        <div class=\"carousel-inner\" role=\"listbox\">\r\n          <div class=\"item active\">\r\n            <h4>\"This company is the best. I am so happy with the result!\"<br><span>Kamaludeen, CEO, Ways Infrastructure</span></h4>\r\n          </div>\r\n          <div class=\"item\">\r\n            <h4>\"One word... WOW!!\"<br><span>John Doe, Salesman, Rep Inc</span></h4>\r\n          </div>\r\n          <div class=\"item\">\r\n            <h4>\"Could I... BE any more happy with this company?\"<br><span>Chandler Bing, Actor, FriendsAlot</span></h4>\r\n          </div>\r\n        </div>\r\n    \r\n        <!-- Left and right controls -->\r\n        <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- Container (Pricing Section) -->\r\n    <div id=\"pricing\" class=\"container-fluid\">\r\n      <div class=\"text-center\">\r\n        <h2>Pricing</h2>\r\n        <h4>Choose a payment plan that works for you</h4>\r\n      </div>\r\n      <div class=\"row slideanim\">\r\n        <div class=\"col-xs-12 pricing-wrapper\">\r\n          <div class=\"panel panel-default text-center\">\r\n            <div class=\"panel-heading\">\r\n              <h3>Static Websites</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Five pages with contact form</p>\r\n              <p>Customize theme</p>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <h3>Rs.9,999</h3>\r\n              <!-- <button class=\"btn btn-lg\" routerLink=\"/register\">Sign Up</button> -->\r\n            </div>\r\n          </div>      \r\n        </div>     \r\n        <div class=\"col-xs-12 pricing-wrapper\">\r\n          <div class=\"panel panel-default text-center\">\r\n            <div class=\"panel-heading\">\r\n              <h3>Dynamic Websites</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Multiple pages with contact form</p>\r\n              <p>Customize theme</p>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <h3>Rs.14,999</h3>\r\n              <!-- <button class=\"btn btn-lg\" routerLink=\"/register\">Sign Up</button> -->\r\n            </div>\r\n          </div>      \r\n        </div>   \r\n        <div class=\"col-xs-12 pricing-wrapper\">\r\n                    <div class=\"panel panel-default text-center\">\r\n            <div class=\"panel-heading\">\r\n              <h3>E-Commerce Websites</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Multiple pages with contact form</p>\r\n              <p>Customize theme</p>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <h3>Rs.19,999</h3>\r\n              <button class=\"btn btn-lg\" routerLink=\"/register\">Sign Up</button>\r\n            </div>\r\n          </div>      \r\n        </div>     \r\n        <div class=\"col-xs-12 pricing-wrapper\">\r\n          <div class=\"panel panel-default text-center\">\r\n            <div class=\"panel-heading\">\r\n              <h3>Billing/Management Softwares</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Unlimited product entry</p>\r\n              <p>Email notificatin</p>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <h3>Rs.14,999</h3>\r\n              <button class=\"btn btn-lg\" routerLink=\"/register\">Sign Up</button>\r\n            </div>\r\n          </div>      \r\n        </div>     \r\n        <div class=\"col-xs-12 pricing-wrapper\">\r\n          <div class=\"panel panel-default text-center\">\r\n            <div class=\"panel-heading\">\r\n              <h3>Android/IOS app</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <p>Android app (or) IOS app</p>\r\n              <p>Push notification</p>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <h3>Rs.14,999</h3>\r\n              <!-- <button class=\"btn btn-lg\" routerLink=\"/register\">Sign Up</button> -->\r\n            </div>\r\n          </div>      \r\n        </div>    \r\n      </div>\r\n    </div>\r\n    \r\n    <!-- Container (Contact Section) -->\r\n    <div id=\"contact\" class=\"container-fluid bg-grey\">\r\n      <h2 class=\"text-center\">CONTACT</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <p>Contact us and we'll get back to you within 24 hours.</p>\r\n          <p><span class=\"glyphicon glyphicon-map-marker\"></span> Karaikudi, India</p>\r\n          <p><span class=\"glyphicon glyphicon-phone\"></span> <a href=\"tel:+91 9095108395\">+91 9095108395</a></p>\r\n          <p><span class=\"glyphicon glyphicon-envelope\"></span> <a href=\"mailto:support@ownwaysoft.com\">support@ownwaysoft.com</a> </p>\r\n        </div>\r\n        <div class=\"col-sm-7 slideanim\">\r\n          <form [formGroup]=\"contactForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 form-group\">\r\n              <input class=\"form-control\" id=\"name\" formControlName=\"name\" placeholder=\"Name\" type=\"text\" required>\r\n              <p class=\"error-msg\" *ngIf=\"!contactForm.controls['name'].valid && (contactForm.controls['name'].dirty || contactForm.controls['name'].touched)\">\r\n                  <em *ngIf=\"contactForm.controls['name'].errors['required']\"> Name is required    </em>\r\n               </p>\r\n            </div>\r\n            <div class=\"col-sm-6 form-group\">\r\n              <input class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Email\" type=\"email\" required>\r\n              <p class=\"error-msg\" *ngIf=\"!contactForm.controls['email'].valid && (contactForm.controls['email'].dirty || contactForm.controls['email'].touched)\">\r\n                  <em *ngIf=\"contactForm.controls['email'].errors['required']\"> Email is required    </em>\r\n                  <em *ngIf=\"contactForm.controls['email'].errors['pattern']\">  Invalid Email    </em>\r\n               </p>\r\n            </div>\r\n          </div>\r\n          <textarea class=\"form-control\" id=\"comments\" formControlName=\"comments\" placeholder=\"Comment\" rows=\"5\"></textarea><br>\r\n          <p class=\"error-msg\" *ngIf=\"!contactForm.controls['comments'].valid && (contactForm.controls['comments'].dirty || contactForm.controls['comments'].touched)\">\r\n              <em *ngIf=\"contactForm.controls['comments'].errors['required']\"> Comment required    </em>\r\n           </p>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 form-group\">\r\n              <button class=\"btn btn-default pull-right\" type=\"submit\" (click)=\"sendContact()\">Send</button>\r\n            </div>\r\n          </div>          \r\n\r\n        </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- Image of location/map -->\r\n    <div>\r\n        <p-gmap [options]=\"options\" [style]=\"{'width':'100%','height':'320px'}\" ></p-gmap>\r\n    </div>\r\n    \r\n    <app-footer></app-footer>";
    /***/
  },

  /***/
  "./src/app/component/home/home-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/component/home/home-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppComponentHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
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


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/component/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/home/home.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/component/home/home.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181;\n}\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.carousel-inner img {\n  width: 100%;\n  /* Set width to 100% */\n  height: 600px;\n  margin: auto;\n}\n\n.carousel-caption h3 {\n  color: #fff !important;\n}\n\n@media (max-width: 600px) {\n  .carousel-caption {\n    display: none;\n    /* Hide the carousel text when the screen is less than 600 pixels wide */\n  }\n}\n\n.jumbotron {\n  background-color: #0b9bd8;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif;\n}\n\n.container-fluid {\n  padding: 60px 50px;\n}\n\n.bg-grey {\n  background-color: #f6f6f6;\n}\n\n.logo-small1 {\n  color: #0b9bd8;\n  font-size: 50px;\n}\n\n.logo {\n  color: #0b9bd8;\n  font-size: 200px;\n}\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: none;\n  border-radius: 0;\n}\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #0b9bd8;\n}\n\n.carousel-indicators li {\n  border-color: #0b9bd8;\n}\n\n.carousel-indicators li.active {\n  background-color: #0b9bd8;\n}\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0;\n}\n\n.item span {\n  font-style: normal;\n}\n\n.panel {\n  border: 1px solid #0b9bd8;\n  border-radius: 0 !important;\n  -webkit-transition: box-shadow 0.5s;\n  transition: box-shadow 0.5s;\n}\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2);\n}\n\n.panel-footer .btn:hover {\n  border: 1px solid #0b9bd8;\n  background-color: #fff !important;\n  color: #0b9bd8;\n}\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #0b9bd8 !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.panel-footer {\n  background-color: white !important;\n}\n\n.panel-footer h3 {\n  font-size: 32px;\n}\n\n.panel-footer h4 {\n  color: #aaa;\n  font-size: 14px;\n}\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #0b9bd8;\n  color: #fff;\n}\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #fff;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif;\n  box-shadow: 0px 1px 0px 1px #eee;\n}\n\n.navbar li a, .navbar .navbar-brand {\n  color: #222 !important;\n}\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #169fda !important;\n  background-color: #fff !important;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important;\n}\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #0b9bd8;\n}\n\n.slideanim {\n  visibility: hidden;\n}\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible;\n}\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n  }\n}\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n  }\n}\n\n.pricing-wrapper {\n  width: 20%;\n}\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0;\n  }\n\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px;\n  }\n\n  .pricing-wrapper {\n    width: 100%;\n  }\n\n  .carousel-control.left, .carousel-control.right {\n    display: none !important;\n  }\n\n  .carousel-indicators {\n    display: none !important;\n  }\n\n  .carousel-inner {\n    top: 30px !important;\n  }\n  .carousel-inner .item img {\n    height: 240px !important;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvRjpcXGJhZ2VlXFxpbnZlbnRvcnktbW5ndFxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREU7RUFHRSxXQUFBO0VBQWEsc0JBQUE7RUFDYixhQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERFO0VBQ0Usc0JBQUE7QUNJSjs7QURGRTtFQUNFO0lBQ0UsYUFBQTtJQUFlLHdFQUFBO0VDTW5CO0FBQ0Y7O0FESkU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FDTUo7O0FESkU7RUFDRSxrQkFBQTtBQ09KOztBRExFO0VBQ0UseUJBQUE7QUNRSjs7QURORTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDU0o7O0FEUEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDV0o7O0FEVEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWUo7O0FEVkU7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUNhSjs7QURYRTtFQUNFLHFCQUFBO0FDY0o7O0FEWkU7RUFDRSx5QkFBQTtBQ2VKOztBRGJFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNnQko7O0FEZEU7RUFDRSxrQkFBQTtBQ2lCSjs7QURmRTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDa0JKOztBRGhCRTtFQUNFLDJDQUFBO0FDbUJKOztBRGpCRTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDb0JKOztBRGxCRTtFQUNFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ3FCSjs7QURuQkU7RUFDRSxrQ0FBQTtBQ3NCSjs7QURwQkU7RUFDRSxlQUFBO0FDdUJKOztBRHJCRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDd0JKOztBRHRCRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUN5Qko7O0FEdkJFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0FDMEJKOztBRHhCRTtFQUNFLHNCQUFBO0FDMkJKOztBRHhCRTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUMyQko7O0FEekJFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQzRCSjs7QUQxQkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDNkJKOztBRDNCRTtFQUFZLGtCQUFBO0FDK0JkOztBRDlCRTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNpQ0o7O0FEL0JFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ2tDSjtFRGhDRTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtZQUFBLHlCQUFBO0VDa0NKO0FBQ0Y7O0FEaENFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7RUNrQ0o7RURoQ0U7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUNrQ0o7QUFDRjs7QUQvQkU7RUFDRSxVQUFBO0FDaUNKOztBRDlCRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0VDaUNKOztFRC9CRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQ2tDSjs7RURoQ0U7SUFDRSxXQUFBO0VDbUNKOztFRGpDRTtJQUNFLHdCQUFBO0VDb0NKOztFRGpDRTtJQUNFLHdCQUFBO0VDb0NKOztFRGxDRTtJQUNFLG9CQUFBO0VDcUNKO0VEbkNNO0lBQ0Usd0JBQUE7RUNxQ1I7QUFDRjs7QURqQ0U7RUFDRTtJQUNFLGdCQUFBO0VDbUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250OiA0MDAgMTVweCBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XHJcbiAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH0gIFxyXG4gIC5jYXJvdXNlbC1pbm5lciBpbWcge1xyXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSg5MCUpO1xyXG4gICAgLy8gZmlsdGVyOiBncmF5c2NhbGUoOTAlKTsgLyogbWFrZSBhbGwgcGhvdG9zIGJsYWNrIGFuZCB3aGl0ZSAqLyBcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBTZXQgd2lkdGggdG8gMTAwJSAqL1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmNhcm91c2VsLWNhcHRpb24gaDMge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIGNhcm91c2VsIHRleHQgd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2MDAgcGl4ZWxzIHdpZGUgKi9cclxuICAgIH1cclxuICB9XHJcbiAgLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gIH1cclxuICAuYmctZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIH1cclxuICAubG9nby1zbWFsbDEge1xyXG4gICAgY29sb3I6ICMwYjliZDg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIGNvbG9yOiAjMGI5YmQ4O1xyXG4gICAgZm9udC1zaXplOiAyMDBweDtcclxuICB9XHJcbiAgLnRodW1ibmFpbCB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgLnRodW1ibmFpbCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtY29udHJvbC5yaWdodCwgLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgY29sb3I6ICMwYjliZDg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzBiOWJkODtcclxuICB9XHJcbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjliZDg7XHJcbiAgfVxyXG4gIC5pdGVtIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbjogNzBweCAwO1xyXG4gIH1cclxuICAuaXRlbSBzcGFuIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbiAgLnBhbmVsIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYjliZDg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czowICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XHJcbiAgfVxyXG4gIC5wYW5lbDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDQwcHggcmdiYSgwLDAsMCwgLjIpO1xyXG4gIH1cclxuICAucGFuZWwtZm9vdGVyIC5idG46aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBiOWJkODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMGI5YmQ4O1xyXG4gIH1cclxuICAucGFuZWwtaGVhZGluZyB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOWJkOCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gIH1cclxuICAucGFuZWwtZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICAucGFuZWwtZm9vdGVyIGg0IHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAucGFuZWwtZm9vdGVyIC5idG4ge1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5uYXZiYXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IDFweCAjZWVlO1xyXG4gIH1cclxuICAubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZzogMzBweCAyMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLW5hdiBsaSBhOmhvdmVyLCAubmF2YmFyLW5hdiBsaS5hY3RpdmUgYSB7XHJcbiAgICBjb2xvcjogIzE2OWZkYSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGZvb3RlciAuZ2x5cGhpY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogIzBiOWJkODtcclxuICB9XHJcbiAgLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxyXG4gIC5zbGlkZSB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XHJcbiAgICB9IFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XHJcbiAgICB9IFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmljaW5nLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb2wtc20tNCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICB9XHJcbiAgICAuYnRuLWxnIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy13cmFwcGVye1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1jb250cm9sLmxlZnQsIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0e1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnN7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbm5lcntcclxuICAgICAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC5pdGVte1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIGhlaWdodDogMjQwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIH1cclxuICB9IiwiYm9keSB7XG4gIGZvbnQ6IDQwMCAxNXB4IExhdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jYXJvdXNlbC1pbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgLyogU2V0IHdpZHRoIHRvIDEwMCUgKi9cbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiBoMyB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvKiBIaWRlIHRoZSBjYXJvdXNlbCB0ZXh0IHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwIHBpeGVscyB3aWRlICovXG4gIH1cbn1cbi5qdW1ib3Ryb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTAwcHggMjVweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiA2MHB4IDUwcHg7XG59XG5cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cblxuLmxvZ28tc21hbGwxIHtcbiAgY29sb3I6ICMwYjliZDg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmxvZ28ge1xuICBjb2xvcjogIzBiOWJkODtcbiAgZm9udC1zaXplOiAyMDBweDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC5yaWdodCwgLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGNvbG9yOiAjMGI5YmQ4O1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJvcmRlci1jb2xvcjogIzBiOWJkODtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiOWJkODtcbn1cblxuLml0ZW0gaDQge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogNzBweCAwO1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ucGFuZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGI5YmQ4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbn1cblxuLnBhbmVsOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNXB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBhbmVsLWZvb3RlciAuYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBiOWJkODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzBiOWJkODtcbn1cblxuLnBhbmVsLWhlYWRpbmcge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG59XG5cbi5wYW5lbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucGFuZWwtZm9vdGVyIGgzIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4ucGFuZWwtZm9vdGVyIGg0IHtcbiAgY29sb3I6ICNhYWE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBhbmVsLWZvb3RlciAuYnRuIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjliZDg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogOTk5OTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDMgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IDFweCAjZWVlO1xufVxuXG4ubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICMxNjlmZGEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5mb290ZXIgLmdseXBoaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMwYjliZDg7XG59XG5cbi5zbGlkZWFuaW0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zbGlkZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuLnByaWNpbmctd3JhcHBlciB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtc20tNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjVweCAwO1xuICB9XG5cbiAgLmJ0bi1sZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gIC5wcmljaW5nLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcm91c2VsLWNvbnRyb2wubGVmdCwgLmNhcm91c2VsLWNvbnRyb2wucmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIHRvcDogMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lciAuaXRlbSBpbWcge1xuICAgIGhlaWdodDogMjQwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authService, messageService, _fb) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.messageService = messageService;
        this._fb = _fb;
        this.contactForm = this._fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
          subject: ['New User Contacted', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.options = {
            center: {
              lat: 10.073132,
              lng: 78.780151
            },
            zoom: 12
          };
        }
      }, {
        key: "sendContact",
        value: function sendContact() {
          var _this2 = this;

          if (this.contactForm.invalid) {
            return;
          }

          console.log('data', this.contactForm.value); // this.cars.push(newcar); 

          this.authService.sendContact(this.contactForm.value).subscribe(function (data) {
            console.log('sendContact', data);

            _this2.messageService.add({
              severity: 'success',
              summary: 'Send Successfully',
              detail: 'We will contact ASAP.'
            });
          }, function (error) {
            console.log(error);

            _this2.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthLoginService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/component/home/home.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthLoginService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/component/home/home.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/component/home/home.module.ts ***!
    \***********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppComponentHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/component/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/megamenu */
    "./node_modules/primeng/megamenu.js");
    /* harmony import */


    var primeng_megamenu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_gmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/gmap */
    "./node_modules/primeng/gmap.js");
    /* harmony import */


    var primeng_gmap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_gmap__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../header/header.module */
    "./src/app/component/header/header.module.ts");
    /* harmony import */


    var _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../footer/footer.module */
    "./src/app/component/footer/footer.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__["MegaMenuModule"], primeng_gmap__WEBPACK_IMPORTED_MODULE_6__["GMapModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]]
    })], HomeModule);
    /***/
  }
}]);
//# sourceMappingURL=component-home-home-module-es5.js.map