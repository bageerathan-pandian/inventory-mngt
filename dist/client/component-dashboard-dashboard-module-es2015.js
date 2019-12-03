(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-dashboard-dashboard-module"],{

/***/ "./node_modules/primeng/components/tabview/tabview.js":
/*!************************************************************!*\
  !*** ./node_modules/primeng/components/tabview/tabview.js ***!
  \************************************************************/
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
var tooltip_1 = __webpack_require__(/*! ../tooltip/tooltip */ "./node_modules/primeng/components/tooltip/tooltip.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var idx = 0;
var TabViewNav = /** @class */ (function () {
    function TabViewNav() {
        this.orientation = 'top';
        this.onTabClick = new core_1.EventEmitter();
        this.onTabCloseClick = new core_1.EventEmitter();
    }
    TabViewNav.prototype.getDefaultHeaderClass = function (tab) {
        var styleClass = 'ui-state-default ui-corner-' + this.orientation;
        if (tab.headerStyleClass) {
            styleClass = styleClass + " " + tab.headerStyleClass;
        }
        return styleClass;
    };
    TabViewNav.prototype.clickTab = function (event, tab) {
        this.onTabClick.emit({
            originalEvent: event,
            tab: tab
        });
    };
    TabViewNav.prototype.clickClose = function (event, tab) {
        this.onTabCloseClick.emit({
            originalEvent: event,
            tab: tab
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TabViewNav.prototype, "tabs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabViewNav.prototype, "orientation", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TabViewNav.prototype, "onTabClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TabViewNav.prototype, "onTabCloseClick", void 0);
    TabViewNav = __decorate([
        core_1.Component({
            selector: '[p-tabViewNav]',
            host: {
                '[class.ui-tabview-nav]': 'true',
                '[class.ui-helper-reset]': 'true',
                '[class.ui-helper-clearfix]': 'true',
                '[class.ui-widget-header]': 'true',
                '[class.ui-corner-all]': 'true'
            },
            template: "\n        <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n            <li [class]=\"getDefaultHeaderClass(tab)\" [ngStyle]=\"tab.headerStyle\" role=\"presentation\"\n                [ngClass]=\"{'ui-tabview-selected ui-state-active': tab.selected, 'ui-state-disabled': tab.disabled}\"\n                (click)=\"clickTab($event,tab)\" *ngIf=\"!tab.closed\" tabindex=\"0\" (keydown.enter)=\"clickTab($event,tab)\">\n                <a [attr.id]=\"tab.id + '-label'\" role=\"tab\" [attr.aria-selected]=\"tab.selected\" [attr.aria-controls]=\"tab.id\" [pTooltip]=\"tab.tooltip\" [tooltipPosition]=\"orientation\">\n                    <ng-container *ngIf=\"!tab.headerTemplate\" >\n                        <span class=\"ui-tabview-left-icon\" [ngClass]=\"tab.leftIcon\" *ngIf=\"tab.leftIcon\"></span>\n                        <span class=\"ui-tabview-title\">{{tab.header}}</span>\n                        <span class=\"ui-tabview-right-icon\" [ngClass]=\"tab.rightIcon\" *ngIf=\"tab.rightIcon\"></span>\n                    </ng-container>\n                    <ng-container *ngIf=\"tab.headerTemplate\">\n                        <ng-container *ngTemplateOutlet=\"tab.headerTemplate\"></ng-container>\n                    </ng-container>\n                </a>\n                <span *ngIf=\"tab.closable\" class=\"ui-tabview-close pi pi-times\" (click)=\"clickClose($event,tab)\"></span>\n            </li>\n        </ng-template>\n    ",
        })
    ], TabViewNav);
    return TabViewNav;
}());
exports.TabViewNav = TabViewNav;
var TabPanel = /** @class */ (function () {
    function TabPanel(viewContainer) {
        this.viewContainer = viewContainer;
        this.cache = true;
        this.id = "ui-tabpanel-" + idx++;
    }
    TabPanel.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                default:
                    _this.contentTemplate = item.template;
                    break;
            }
        });
    };
    Object.defineProperty(TabPanel.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            this.loaded = true;
        },
        enumerable: true,
        configurable: true
    });
    TabPanel.prototype.ngOnDestroy = function () {
        this.view = null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabPanel.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TabPanel.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TabPanel.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabPanel.prototype, "headerStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabPanel.prototype, "headerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabPanel.prototype, "leftIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabPanel.prototype, "rightIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TabPanel.prototype, "cache", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabPanel.prototype, "tooltip", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], TabPanel.prototype, "templates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TabPanel.prototype, "selected", null);
    TabPanel = __decorate([
        core_1.Component({
            selector: 'p-tabPanel',
            template: "\n        <div [attr.id]=\"id\" class=\"ui-tabview-panel ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': !selected}\"\n            role=\"tabpanel\" [attr.aria-hidden]=\"!selected\" [attr.aria-labelledby]=\"id + '-label'\" *ngIf=\"!closed\">\n            <ng-content></ng-content>\n            <ng-container *ngIf=\"contentTemplate && (cache ? loaded : selected)\">\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </ng-container>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef])
    ], TabPanel);
    return TabPanel;
}());
exports.TabPanel = TabPanel;
var TabView = /** @class */ (function () {
    function TabView(el) {
        this.el = el;
        this.orientation = 'top';
        this.onChange = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.activeIndexChange = new core_1.EventEmitter();
    }
    TabView.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initTabs();
        this.tabPanels.changes.subscribe(function (_) {
            _this.initTabs();
        });
    };
    TabView.prototype.initTabs = function () {
        this.tabs = this.tabPanels.toArray();
        var selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
        }
    };
    TabView.prototype.open = function (event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            var selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            tab.selected = true;
            var selectedTabIndex = this.findTabIndex(tab);
            this.preventActiveIndexPropagation = true;
            this.activeIndexChange.emit(selectedTabIndex);
            this.onChange.emit({ originalEvent: event, index: selectedTabIndex });
        }
        if (event) {
            event.preventDefault();
        }
    };
    TabView.prototype.close = function (event, tab) {
        var _this = this;
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: function () {
                    _this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    };
    TabView.prototype.closeTab = function (tab) {
        if (tab.disabled) {
            return;
        }
        if (tab.selected) {
            tab.selected = false;
            for (var i = 0; i < this.tabs.length; i++) {
                var tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    };
    TabView.prototype.findSelectedTab = function () {
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    };
    TabView.prototype.findTabIndex = function (tab) {
        var index = -1;
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    };
    TabView.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Object.defineProperty(TabView.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (val) {
            this._activeIndex = val;
            if (this.preventActiveIndexPropagation) {
                this.preventActiveIndexPropagation = false;
                return;
            }
            if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
                this.findSelectedTab().selected = false;
                this.tabs[this._activeIndex].selected = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabView.prototype, "orientation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabView.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabView.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TabView.prototype, "controlClose", void 0);
    __decorate([
        core_1.ContentChildren(TabPanel),
        __metadata("design:type", core_1.QueryList)
    ], TabView.prototype, "tabPanels", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TabView.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TabView.prototype, "onClose", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TabView.prototype, "activeIndexChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TabView.prototype, "activeIndex", null);
    TabView = __decorate([
        core_1.Component({
            selector: 'p-tabView',
            template: "\n        <div [ngClass]=\"'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation!='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\"\n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n            <div class=\"ui-tabview-panels\">\n                <ng-content></ng-content>\n            </div>\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation=='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\"\n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n        </div>\n    ",
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], TabView);
    return TabView;
}());
exports.TabView = TabView;
var TabViewModule = /** @class */ (function () {
    function TabViewModule() {
    }
    TabViewModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_1.SharedModule, tooltip_1.TooltipModule],
            exports: [TabView, TabPanel, TabViewNav, shared_1.SharedModule],
            declarations: [TabView, TabPanel, TabViewNav]
        })
    ], TabViewModule);
    return TabViewModule;
}());
exports.TabViewModule = TabViewModule;
//# sourceMappingURL=tabview.js.map

/***/ }),

/***/ "./node_modules/primeng/tabview.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/tabview.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/tabview/tabview */ "./node_modules/primeng/components/tabview/tabview.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"ui-g ui-fluid\">\n  <div class=\"ui-g-12\"  *ngIf=\"auth.getUserData().role == '0'\">\n      <div class=\"ui-g-3\" style=\"float: right\">     \n      <p-dropdown [options]=\"companyList\" [(ngModel)]=\"client_company_id\" placeholder=\"Select Company\" filter=\"true\" optionLabel=\"company_name\" (onChange)=\"onChangeCompany($event.value)\">\n      </p-dropdown>\n      </div>\n  </div>\n  <div  [ngClass]=\"auth.getUserData().role == '0' ? 'adminClass' : 'userClass'\" *ngIf=\"auth.getUserData().role == '0'\" >     \n    <a routerLink=\"/master/company\"  >\n    <p-card styleClass=\"card1 ui-g-12\" >\n          <p-header>\n                  Company\n              </p-header>\n        <div class=\"ui-g-6\">\n          <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0; \">  {{companyList.length}}</h2>\n        </div>\n        <div class=\"ui-g-6\"> \n           <i class=\"pi pi-shopping-cart\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>\n          </div>\n          <!-- <p-footer>\n              <a routerLink=\"/master/company\"  pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" style=\"position: relative; top: 4px;\"></i>\n              </a>\n          </p-footer> -->\n    </p-card>\n    </a>\n  </div>\n<div  [ngClass]=\"auth.getUserData().role == '0' ? 'adminClass' : 'userClass'\" >\n<a routerLink=\"/master/stock\" >\n  <p-card styleClass=\"card2 ui-g-12\" >\n        <p-header>\n                Stocks\n            </p-header>\n      <div class=\"ui-g-6\">\n        <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0; \">  {{stocksList.length}}</h2>\n      </div>\n      <div class=\"ui-g-6\"> \n         <i class=\"pi pi-shopping-cart\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>\n        </div>\n        <!-- <p-footer>\n            <a routerLink=\"/master/stock\"  pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" style=\"position: relative; top: 4px;\"></i>\n            </a>\n        </p-footer> -->\n  </p-card>\n</a>\n</div>\n<div   [ngClass]=\"auth.getUserData().role == '0' ? 'adminClass' : 'userClass'\" >\n    <a routerLink=\"/sales\"  >\n  <p-card styleClass=\"card3 ui-g-12\" >\n        <p-header>\n                Sales\n            </p-header>\n      <div class=\"ui-g-6\">\n          <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0; \">  {{totalSalesAmount  | currency : 'INR':true}}</h2>\n      </div>\n      <div class=\"ui-g-6\">\n          <i class=\"pi pi-dollar\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>        \n        </div>\n        <!-- <p-footer>\n                <a routerLink=\"/sales\" pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" ></i>\n                </a>\n            </p-footer> -->\n  </p-card>\n    </a>\n</div>\n<div  [ngClass]=\"auth.getUserData().role == '0' ? 'adminClass' : 'userClass'\" >\n    <a routerLink=\"/purchase\"  >\n\n  <p-card styleClass=\"card4 ui-g-12\" >\n        <p-header>\n                Purchase\n            </p-header>\n      <div class=\"ui-g-6\">\n          <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0; \">  {{totalPurchaceAmount  | currency : 'INR':true}}</h2>\n      </div>\n      <div class=\"ui-g-6\">\n          <i class=\"pi pi-money-bill\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>        \n        </div>\n        <!-- <p-footer>\n                <a routerLink=\"/purchase\"  pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" ></i>\n                </a>\n            </p-footer> -->\n  </p-card>\n    </a>\n</div>\n<div  [ngClass]=\"auth.getUserData().role == '0' ? 'adminClass' : 'userClass'\"  >\n    <a routerLink=\"/master/customer\" >\n\n  <p-card styleClass=\"card5 ui-g-12\" >\n        <p-header>\n                Customers\n            </p-header>\n      <div class=\"ui-g-6\">\n          <h2 style=\" font-size: 30px; margin-bottom: 0;  padding: 0;  \">  {{customerList.length}}</h2>\n      </div>\n      <div class=\"ui-g-6\">\n          <i class=\"pi pi-users\" style=\"    font-size: 80px;    opacity: 0.1;\"></i>        \n        </div>\n        <!-- <p-footer>\n                <a routerLink=\"/master/customer\" pTooltip=\"View More\" tooltipPosition=\"top\">View More  <i class=\"pi pi-arrow-right\" ></i>\n                </a>\n            </p-footer> -->\n  </p-card>\n    </a>\n</div>\n</div>\n<div class=\"ui-g ui-fluid\">\n        <div class=\"ui-g-5\">\n                <p-card styleClass=\"ui-g-12\" >\n                      <!-- <div class=\"ui-g-3\" style=\"float: right;position: relative;\">\n                      <p-dropdown [options]=\"yearList\" [(ngModel)]=\"selectedYear\" placeholder=\"Select Year\"  filter=\"true\" ></p-dropdown>\n                    </div> -->\n                  <p-chart type=\"bar\" [data]=\"data\" [options]=\"options\"></p-chart>\n                  </p-card>\n              </div>\n              <div class=\"ui-g-5\">\n                    <p-card styleClass=\"ui-g-12\" >\n                          <!-- <h3>Profit/Loss Report</h3> -->\n                          <!-- <div class=\"ui-g-3\" style=\"float: right;position: relative;\">\n                          <p-dropdown [options]=\"yearList\" [(ngModel)]=\"selectedYear\" placeholder=\"Select Year\"  filter=\"true\" ></p-dropdown>\n                        </div> -->\n                      <p-chart type=\"bar\" [data]=\"data1\" [options]=\"options1\"></p-chart>\n                      </p-card>\n                  </div>\n                  <div class=\"ui-g-2\">\n                      \n\n                  <p-card  styleClass=\"ui-g-12\" >\n                      \n     <p-scrollPanel [style]=\"{width: '100%', height: '280px'}\">\n                        <div class=\"active-detail\">\n                            <h3 style=\"margin: 20px 0;\" class=\"full-width\">Active Users</h3>\n                            <div class=\"gallery-cont full-width\">\n                                <ul>\n                                    <li *ngFor=\"let item of loggedInUsersList\">\n                                        <div class=\"active-left\">\n                                            <img src=\"../assets/img/userface.jpg\"\n                                                *ngIf=\"item.user_image==''|| item.user_image == null\">\n                                            <img src=\"{{item.user_image}}\" *ngIf=\"item.user_image!=''|| item.user_image != null\">\n                                            <ng-container *ngIf=\"item.isLoggedIn; else elseTemplate\">\n                                                   <i class=\"pi pi-check\" style=\"    position: absolute;   left: 18px;    color: #fff;   background: #08bd65;     border-radius: 100%;font-size: 12px\"></i>\n                                                </ng-container>\n                                                <ng-template #elseTemplate>\n                                                    <i class=\"pi pi-times\"  style=\"    position: absolute;   left: 18px;    color: #fff;   background: #f06487;     border-radius: 100%;font-size: 12px\"></i>\n                                                </ng-template>\n                                        </div>\n                                        <div class=\"active-rgt\">\n                                            <h6>{{item.user_name | titlecase}}</h6>\n                                            <span [ngSwitch]=\"item.role\">\n                                                <p *ngSwitchCase=\"'0'\">\n                                                Admin -  <em  *ngIf=\"auth.getUserData().role == '0'\">  {{item.company_details_id.company_name}}</em>\n                                                </p>\n                                                <p *ngSwitchCase=\"'1'\">\n                                                   Admin -  <em  >  {{item.company_details_id.company_name}}</em>\n                                                </p>\n                                                <p *ngSwitchCase=\"'2'\">\n                                                    Manager -  <em  >  {{item.company_details_id.company_name}}</em>\n                                                 </p>\n                                                <p *ngSwitchCase=\"'3'\">\n                                                        Sales person -  <em  >  {{item.company_details_id.company_name}}</em>\n                                                </p>\n                                                <p *ngSwitchDefault>\n                                                        Others -  {{item.company_details_id.company_name}}\n                                                </p>\n                                                \n                                                </span>\n                                               \n                                            <!-- <ng-container *ngIf=\"item.isLoggedIn; else elseTemplate\">\n                                                <a class=\"cmn-btn\"><i class=\"pi pi-check\"></i>Online</a>\n                                            </ng-container>\n                                            <ng-template #elseTemplate>\n                                                <a class=\"cmn-btn red-btn\"><i class=\"pi pi-times\"></i>Offline</a>\n                                            </ng-template> -->\n                                        </div>\n                                    </li>\n                                </ul>\n                               \n                            </div>\n                        </div>\n                    \n                    \n    </p-scrollPanel>\n                    </p-card>\n                    \n                </div>\n    </div>\n    <div class=\"ui-g ui-fluid\">\n              \n              <div class=\"ui-g-4\">\n                    <p-card styleClass=\"ui-g-12\" >\n                  <h3>Recently {{stocksLatestList.length}} Added Stocks</h3>\n                  <p-table  #dt1 [value]=\"stocksLatestList\" dataKey=\"_id\"  >\n                       \n                      <ng-template pTemplate=\"header\">\n                          <tr>\n                              <th >\n                                   Code\n                                </th>\n                                <th  >\n                                    Stock Name\n                                </th>\n                                <th  >\n                                    Qty\n                                </th>\n                                <th  >\n                                    Price\n                                </th>\n                          </tr>\n                      </ng-template>\n                      <ng-template pTemplate=\"body\" let-rowData  let-ri=\"rowIndex\">\n                        \n                          <tr >\n                              <td>\n                                  {{rowData.stock_code}}\n                              </td>\n                              <td>\n                                {{rowData.stock_name}}\n                              </td>\n                              <td>\n                                {{rowData.stock_qty}}\n                              </td>\n                              <td>\n                                {{rowData.selling_price | currency : 'INR':true}}\n                              </td>\n                          </tr>\n                      </ng-template>\n                      \n    <ng-template pTemplate=\"footer\">\n            <tr *ngIf=\"stocksLatestList?.length == 0\">\n               <td colspan=\"4\" style=\"text-align: center\">\n                       There are {{stocksLatestList?.length}} records\n               </td>\n           </tr>\n           \n       </ng-template>\n                  </p-table>\n                  <button pButton icon=\"pi pi-eye\" iconPos=\"left\"  class=\"ui-button-raised ui-button-rounded\" label=\"view all Stocks\" routerLink=\"/master/stock\" style=\" width: auto; margin-top: 10px;\"></button>\n                 \n                </p-card>\n              </div>\n              \n              <div class=\"ui-g-4\">\n                    <p-card styleClass=\"ui-g-12\" >\n                    <h3>Latest {{salesLatestList.length}} Sales</h3>\n                    <p-table  #dt1 [value]=\"salesLatestList\" dataKey=\"id\"  >\n                       \n                        <ng-template pTemplate=\"header\">\n                            <tr>\n                                <th  >\n                                     #Invoice No\n                                  </th>\n                                  <th >\n                                      Stock Name\n                                  </th>\n                                  <!-- <th >\n                                      Price\n                                  </th> -->\n                                  <th >\n                                      Qty\n                                  </th>\n                                  <th >\n                                   Total \n                                  </th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-rowData  let-ri=\"rowIndex\">\n                          \n                            <tr >\n                                <td>\n                                    {{rowData.invoice_details_id.invoice_code}}\n                                </td>\n                                \n                                <td>\n                                        {{rowData.stock_details_id.stock_name}}\n                                    </td>\n                                <!-- <td>\n                                        {{rowData.stock_price | currency : 'INR':true}}\n                                </td> -->\n                                <td>\n                                        {{rowData.stock_qty}}\n                                   \n                                </td>\n                                <td>\n                                  {{rowData.stock_total_price | currency : 'INR':true}}\n                                </td>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"footer\">\n                                <tr  *ngIf=\"salesLatestList?.length == 0\">\n                                   <td colspan=\"5\" style=\"text-align: center\">\n                                           There are {{salesLatestList?.length}} records\n                                   </td>\n                               </tr>\n                               \n                           </ng-template>\n                    </p-table>\n                    <button pButton icon=\"pi pi-eye\" iconPos=\"left\"  class=\"ui-button-raised ui-button-rounded\" label=\"view all Orders\" routerLink=\"/report/sales-report\"  style=\" width: auto; margin-top: 10px;\"></button>\n                </p-card>\n                </div>\n                \n              <div class=\"ui-g-4\">\n                    <p-card styleClass=\"ui-g-12\" >\n        <h3>Latest {{purchaseLatestList.length}} Purchase</h3>\n        <p-table  #dt1 [value]=\"purchaseLatestList\" dataKey=\"id\"  >\n             \n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th >\n                         Code\n                      </th>\n                    <th  >\n                        Category\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData  let-ri=\"rowIndex\">\n              \n                <tr >\n                    <td>\n                        #{{rowData.category_code}}\n                    </td>\n                    <td>\n                      {{rowData.category_name}}\n                    </td>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"footer\" >\n                    <tr *ngIf=\"purchaseLatestList?.length == 0\">\n                       <td colspan=\"2\" style=\"text-align: center\">\n                               There are {{purchaseLatestList?.length}} records\n                       </td>\n                   </tr>\n                   \n               </ng-template>\n        </p-table>\n        <button pButton icon=\"pi pi-eye\" iconPos=\"left\"  class=\"ui-button-raised ui-button-rounded\" label=\"view all Purchase\" routerLink=\"/report/purchase-report\"  style=\" width: auto; margin-top: 10px;\"></button>\n    </p-card>\n    </div>\n              </div>\n    \n<!-- <pre>{{ loggedInUsersList | json }}</pre> -->\n");

/***/ }),

/***/ "./src/app/component/dashboard/dashboard-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");




const routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .card1 {\n  background-color: #42A5F5;\n  color: #fff;\n}\n:host ::ng-deep .card1 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card2 {\n  background-color: #7E57C2 !important;\n  color: #fff;\n}\n:host ::ng-deep .card2 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card3 {\n  background-color: #FFB300 !important;\n  color: #fff;\n}\n:host ::ng-deep .card3 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card4 {\n  background-color: #66BB6A !important;\n  color: #fff;\n}\n:host ::ng-deep .card4 .ui-card-body {\n  padding: 0;\n}\n:host ::ng-deep .card5 {\n  background-color: #f57842 !important;\n  color: #fff;\n}\n:host ::ng-deep .card5 .ui-card-body {\n  padding: 0;\n}\n.adminClass {\n  width: 20%;\n  padding: 0 1%;\n}\n.userClass {\n  width: 25%;\n  padding: 1%;\n}\n.gallery-cont ul {\n  padding: 0;\n  margin-bottom: 0;\n}\n.gallery-cont ul li {\n  list-style: none;\n  display: block;\n  position: relative;\n  float: left;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.gallery-cont ul li .active-left {\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n}\n.gallery-cont ul li .active-left img {\n  border-radius: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.gallery-cont ul li .active-rgt {\n  float: left;\n  width: auto;\n  margin-left: 10px;\n}\n.gallery-cont ul li .active-rgt h6 {\n  font-weight: 500;\n  margin: 0;\n  color: #000;\n}\n.gallery-cont ul li .active-rgt .red-btn {\n  background: #f06487;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9FOlxcb3dud2F5c29mdC5jb21cXGludmVudG9yeU1hbmFnZW1lbnRcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSx5QkFBQTtFQUNBLFdBQUE7QUNDUjtBREFRO0VBQ1EsVUFBQTtBQ0VoQjtBRENBO0VBQ1Esb0NBQUE7RUFDQSxXQUFBO0FDRVI7QUREUTtFQUNRLFVBQUE7QUNHaEI7QURBQTtFQUNRLG9DQUFBO0VBQ0EsV0FBQTtBQ0dSO0FERlE7RUFDUSxVQUFBO0FDSWhCO0FEREE7RUFDUSxvQ0FBQTtFQUNBLFdBQUE7QUNJUjtBREhRO0VBQ1EsVUFBQTtBQ0toQjtBREZBO0VBQ1Esb0NBQUE7RUFDQSxXQUFBO0FDS1I7QURKUTtFQUNRLFVBQUE7QUNNaEI7QURGQTtFQUNRLFVBQUE7RUFDQSxhQUFBO0FDS1I7QURGQTtFQUNRLFVBQUE7RUFDQSxXQUFBO0FDS1I7QUREUTtFQUNJLFVBQUE7RUFBVSxnQkFBQTtBQ0t0QjtBREpZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTWhCO0FETGdCO0VBQ0ksV0FBQTtFQUFXLFlBQUE7RUFBWSxXQUFBO0VBQVcsa0JBQUE7QUNVdEQ7QURUb0I7RUFDSSxtQkFBQTtFQUFtQixlQUFBO0VBQWUsZ0JBQUE7RUFBZ0IsTUFBQTtFQUFNLE9BQUE7RUFBTyxRQUFBO0VBQVEsU0FBQTtFQUFTLFlBQUE7QUNrQnhHO0FEZmdCO0VBQ0ksV0FBQTtFQUFXLFdBQUE7RUFBVyxpQkFBQTtBQ21CMUM7QURsQm9CO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ29CeEI7QURqQm9CO0VBQ0ksbUJBQUE7QUNtQnhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNhcmQxe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MkE1RjU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLnVpLWNhcmQtYm9keXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY2FyZDJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdFNTdDMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC51aS1jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQzeyAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC51aS1jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQ0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NkJCNkEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAudWktY2FyZC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkNXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3ODQyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLnVpLWNhcmQtYm9keXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4uYWRtaW5DbGFzc3tcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMSU7XHJcbn1cclxuXHJcbi51c2VyQ2xhc3N7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLmdhbGxlcnktY29udHtcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgcGFkZGluZzowO21hcmdpbi1ib3R0b206MDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIC5hY3RpdmUtbGVmdHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNXB4O2hlaWdodDoyNXB4O2Zsb2F0OmxlZnQ7cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlLXJndHtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O3dpZHRoOmF1dG87bWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5yZWQtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjA2NDg3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0iLCI6aG9zdCA6Om5nLWRlZXAgLmNhcmQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyQTVGNTtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNhcmQxIC51aS1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdFNTdDMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2FyZDIgLnVpLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkMyAudWktY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NkJCNkEgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNhcmQ0IC51aS1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1Nzg0MiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2FyZDUgLnVpLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hZG1pbkNsYXNzIHtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogMCAxJTtcbn1cblxuLnVzZXJDbGFzcyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4uZ2FsbGVyeS1jb250IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5nYWxsZXJ5LWNvbnQgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZ2FsbGVyeS1jb250IHVsIGxpIC5hY3RpdmUtbGVmdCB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2FsbGVyeS1jb250IHVsIGxpIC5hY3RpdmUtbGVmdCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmdhbGxlcnktY29udCB1bCBsaSAuYWN0aXZlLXJndCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZ2FsbGVyeS1jb250IHVsIGxpIC5hY3RpdmUtcmd0IGg2IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5nYWxsZXJ5LWNvbnQgdWwgbGkgLmFjdGl2ZS1yZ3QgLnJlZC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZjA2NDg3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/customer.service */ "./src/app/shared/customer.service.ts");
/* harmony import */ var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/stock.service */ "./src/app/shared/stock.service.ts");
/* harmony import */ var src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pdf-generator.service */ "./src/app/shared/pdf-generator.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/company.service */ "./src/app/shared/company.service.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/sales.service */ "./src/app/shared/sales.service.ts");











let DashboardComponent = class DashboardComponent {
    constructor(companyService, auth, customerService, stockService, dashboardService, pdfGenerator, salesService) {
        this.companyService = companyService;
        this.auth = auth;
        this.customerService = customerService;
        this.stockService = stockService;
        this.dashboardService = dashboardService;
        this.pdfGenerator = pdfGenerator;
        this.salesService = salesService;
        this.customerList = [];
        this.stocksList = [];
        this.companyList = [];
        this.branchList = [];
        this.stocksLatestList = [];
        this.salesLatestList = [];
        this.purchaseLatestList = [];
        this.totalSalesAmount = 0;
        this.totalPurchaceAmount = 0;
        this.yearList = [];
        this.selectedYear = Number(moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY'));
        this.loggedInUsersList = [];
        this.client_company_id = this.auth.getUserData().company_details_id;
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Purchase',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Sales',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.data1 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: '2018',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: '2019',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.data2 = {
            labels: ['Sales', 'Purchase'],
            datasets: [
                {
                    data: [300, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
        this.yearList = [
            { label: '2019', value: 2019 },
            { label: '2018', value: 2018 }
        ];
        this.options = {
            title: {
                display: true,
                text: 'Profit/Loss Report',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
        this.options1 = {
            title: {
                display: true,
                text: 'Customer Yearly Report',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
        this.items = [
            { label: '', icon: 'pi pi-home' },
            { label: 'Dashboard' }
        ];
    }
    ngOnInit() {
        /**
           * login user by sockte
           */
        this.auth.logInSocktet().subscribe((user) => {
            console.log('login user');
            console.log(user);
            console.log(this.loggedInUsersList);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](this.loggedInUsersList, function (o) { return o._id == user._id; });
            console.log(sliceIndex);
            if (sliceIndex > -1) {
                // this.loggedInUsersList.splice(sliceIndex, 1);
                this.loggedInUsersList.splice(sliceIndex, 1, user);
            }
            else {
                this.loggedInUsersList.push(user);
            }
        });
        this.auth.logOutSocktet().subscribe((user) => {
            console.log('logout user');
            console.log(user);
            console.log(this.loggedInUsersList);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](this.loggedInUsersList, function (o) { return o._id == user._id; });
            console.log(sliceIndex);
            if (sliceIndex > -1) {
                // this.loggedInUsersList.splice(sliceIndex, 1);
                this.loggedInUsersList.splice(sliceIndex, 1, user);
            }
        });
        this.getTotalSalesAmount();
        this.getLoggedInUsers();
        this.getCompany();
        this.getCustomerByCompany(this.auth.getUserCompanyId());
        this.getStocksByCompany(this.auth.getUserCompanyId());
        this.getLatestStocks(this.auth.getUserCompanyId());
        this.getLatestSales(this.auth.getUserCompanyId());
        this.getLatestPurchase(this.auth.getUserCompanyId());
        this.testPdf();
    }
    getLoggedInUsers() {
        console.log('getUserCompanyId', this.auth.getUserCompanyId());
        this.dashboardService.getLoggedInUsers()
            .subscribe((data) => {
            console.log('getLoggedInUsers', data);
            this.loggedInUsersList = [];
            if (this.auth.getUserData().role != 0) {
                for (let lData of data) {
                    if (lData.company_details_id._id == this.auth.getUserCompanyId()) {
                        console.log('lData', lData);
                        this.loggedInUsersList.push(lData);
                    }
                }
            }
            else {
                this.loggedInUsersList = data;
            }
            // this.getBranchByCompany(data[0]._id)
        });
    }
    getCompany() {
        this.companyService.getCompany()
            .subscribe((data) => {
            console.log('companyList', data);
            this.companyList = data;
            // this.getBranchByCompany(data[0]._id)
        });
    }
    getTotalSalesAmount() {
        this.salesService.getTotalSalesAmount()
            .subscribe((data) => {
            console.log('getTotalSalesAmount', data);
            this.totalSalesAmount = data[0].grand_total;
        });
    }
    getCustomerByCompany(id) {
        this.customerService.getCustomerByCompany(id)
            .subscribe((data) => {
            console.log('customerList', data);
            this.customerList = data;
        });
    }
    getStocksByCompany(id) {
        this.stockService.getStockByCompany(id)
            .subscribe((data) => {
            console.log('stocksList', data);
            this.stocksList = data;
        });
    }
    getLatestStocks(id) {
        this.dashboardService.getLatestStocks(id)
            .subscribe((data) => {
            console.log('getLatestStocks', data);
            this.stocksLatestList = data;
        });
    }
    getLatestSales(id) {
        this.dashboardService.getLatestSales(id)
            .subscribe((data) => {
            console.log('getLatestSales', data);
            this.salesLatestList = data;
        });
    }
    getLatestPurchase(id) {
        this.dashboardService.getLatestPurchase(id)
            .subscribe((data) => {
            console.log('getLatestPurchase', data);
            this.purchaseLatestList = data;
        });
    }
    testPdf() {
        this.pdfGenerator.testPdg()
            .subscribe((data) => {
            console.log('testPdf', data);
        });
    }
    onChangeCompany(val) {
        console.log('onChangeCompany', val);
        this.client_company_id = val;
        localStorage.setItem('client_company_id', val._id);
        this.ngOnInit();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"] },
    { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] },
    { type: src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_4__["PdfGeneratorService"] },
    { type: src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__["SalesService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/component/dashboard/dashboard.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"], src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"], src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_4__["PdfGeneratorService"], src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__["SalesService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/component/dashboard/dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/component/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_16__);

















let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"],
            primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_16__["ScrollPanelModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/shared/dashboard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/dashboard.service.ts ***!
  \*********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let DashboardService = class DashboardService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getLoggedInUsers() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/logged-in-users');
    }
    getLatestStocks(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/latest-stock/' + id);
    }
    getLatestSales(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/latest-sales/' + id);
    }
    getLatestPurchase(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/dashboard/latest-purchase/' + id);
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DashboardService);



/***/ }),

/***/ "./src/app/shared/pdf-generator.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pdf-generator.service.ts ***!
  \*************************************************/
/*! exports provided: PdfGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfGeneratorService", function() { return PdfGeneratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let PdfGeneratorService = class PdfGeneratorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    testPdg() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/pdf/test-pdf');
    }
};
PdfGeneratorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PdfGeneratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PdfGeneratorService);



/***/ })

}]);
//# sourceMappingURL=component-dashboard-dashboard-module-es2015.js.map