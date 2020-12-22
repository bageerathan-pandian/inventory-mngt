function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-master-stock-master-module"], {
  /***/
  "./node_modules/primeng/checkbox.js":
  /*!******************************************!*\
    !*** ./node_modules/primeng/checkbox.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengCheckboxJs(module, exports, __webpack_require__) {
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
    /*! ./components/checkbox/checkbox */
    "./node_modules/primeng/components/checkbox/checkbox.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/components/checkbox/checkbox.js":
  /*!**************************************************************!*\
    !*** ./node_modules/primeng/components/checkbox/checkbox.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsCheckboxCheckboxJs(module, exports, __webpack_require__) {
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

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    exports.CHECKBOX_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return Checkbox;
      }),
      multi: true
    };

    var Checkbox =
    /** @class */
    function () {
      function Checkbox(cd) {
        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new core_1.EventEmitter();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

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
          if (this.checked) this.addValue();else this.removeValue();
          this.onModelChange(this.model);

          if (this.formControl) {
            this.formControl.setValue(this.model);
          }
        } else {
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
        if (this.binary) return this.model;else return this.model && this.model.indexOf(this.value) > -1;
      };

      Checkbox.prototype.removeValue = function () {
        var _this = this;

        this.model = this.model.filter(function (val) {
          return val !== _this.value;
        });
      };

      Checkbox.prototype.addValue = function () {
        if (this.model) this.model = this.model.concat([this.value]);else this.model = [this.value];
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

      __decorate([core_1.Input(), __metadata("design:type", Object)], Checkbox.prototype, "value", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "name", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Checkbox.prototype, "disabled", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "binary", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "label", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Number)], Checkbox.prototype, "tabindex", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "inputId", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Checkbox.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "labelStyleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", forms_1.FormControl)], Checkbox.prototype, "formControl", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "checkboxIcon", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Checkbox.prototype, "readonly", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Checkbox.prototype, "onChange", void 0);

      Checkbox = __decorate([core_1.Component({
        selector: 'p-checkbox',
        template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"{'ui-chkbox ui-widget': true,'ui-chkbox-readonly': readonly}\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [name]=\"name\" [readonly]=\"readonly\" [value]=\"value\" [checked]=\"checked\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\"\n                [ngClass]=\"{'ui-state-focus':focused}\" (change)=\"handleChange($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,cb,true)\"\n                        [ngClass]=\"{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"checked ? checkboxIcon : null\"></span>\n            </div>\n        </div>\n        <label (click)=\"onClick($event,cb,true)\" [class]=\"labelStyleClass\"\n                [ngClass]=\"{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n                *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
        providers: [exports.CHECKBOX_VALUE_ACCESSOR]
      }), __metadata("design:paramtypes", [core_1.ChangeDetectorRef])], Checkbox);
      return Checkbox;
    }();

    exports.Checkbox = Checkbox;

    var CheckboxModule =
    /** @class */
    function () {
      function CheckboxModule() {}

      CheckboxModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [Checkbox],
        declarations: [Checkbox]
      })], CheckboxModule);
      return CheckboxModule;
    }();

    exports.CheckboxModule = CheckboxModule; //# sourceMappingURL=checkbox.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/stock-master/stock-master.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/stock-master/stock-master.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtMasterStockMasterStockMasterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n<div style=\"margin-top: 15px;\">\r\n    <p-card>\r\n        <p-table #dt [value]=\"stocksList\" [loading]=\"loading\" [columns]=\"cols\" dataKey=\"_id\" [paginator]=\"true\"\r\n            [rowsPerPageOptions]=\"[10,50,100]\"\r\n            [globalFilterFields]=\"['_id','stock_name','stock_qty','buying_price','selling_price','product_details']\"\r\n            [rows]=\"10\">\r\n\r\n            <ng-template pTemplate=\"caption\">\r\n                <div class=\"ui-helper-clearfix\" style=\"text-align: left;width: 50%; float: left; margin-bottom: 10px;\">\r\n                    <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\"\r\n                        (click)=\"dt.exportCSV()\" style=\"margin-right: 0.5em;width: 20%;\"></button>\r\n                    <button type=\"button\" pButton icon=\"pi pi-file-excel\" iconPos=\"left\" label=\"EXCEL\"\r\n                        (click)=\"exportExcel()\" style=\"margin-right: 0.5em;width: 20%;\"\r\n                        class=\"ui-button-success\"></button>\r\n                    <!-- <button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"ui-button-warning\"  style=\"margin-right: 0.5em;\" ></button> -->\r\n                    <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"CSV - Selection Only\"\r\n                        (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"margin-right: 0.5em;width: 35%;\"></button>\r\n                </div>\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n                </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th style=\"width: 3em\">\r\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n                    </th>\r\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn>\r\n                        {{col.header}}\r\n                        <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\"\r\n                            ariaLabelDesc=\"Activate to sort in descending order\"\r\n                            ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n\r\n                    </th>\r\n                    <th style=\"width: 10%;\">\r\n                        <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\" iconPos=\"left\"\r\n                            (click)=\"showDialogToAdd()\" label=\"Add\" pTooltip=\"Add new stock\"\r\n                            tooltipPosition=\"top\"></button>\r\n\r\n                    </th>\r\n                </tr>\r\n                <!-- <tr>\r\n            <th ></th>\r\n            <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt.filters[col.field]?.value\">\r\n            </th>            \r\n            <th ></th>\r\n        </tr> -->\r\n\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td>\r\n                        <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.stock_code}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData._id}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.stock_name}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.category_details_id.category_name}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData?.brand_details_id?.brand_name ? rowData?.brand_details_id?.brand_name : '--'}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.stock_qty}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.buying_price  | currency : 'INR':true}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.mrp  | currency : 'INR':true}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.buying_with_tax ? 'YES' : 'No'}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.selling_price  | currency : 'INR':true}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.tax_details_id.tax_name}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.unit_details_id?.unit_name}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.updatedAt | date:'medium'}}\r\n                    </td>\r\n                    <td style=\"text-align: center\">\r\n                        <p-dropdown [options]=\"status\" placeholder=\"Status\" [(ngModel)]=\"rowData.status\"\r\n                            (onChange)=\"onChangeStatus($event)\"></p-dropdown>\r\n                    </td>\r\n                    <td style=\"text-align:center\">\r\n                        <button pButton type=\"button\" icon=\"pi pi-pencil\" class=\"ui-button-info\"\r\n                            (click)=\"showDialogToAdd(rowData)\" style=\"    margin: 0px 5px;\"></button>\r\n                        <!-- <button  pButton type=\"button\"  icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEdit(rowData)\" style=\"    margin: 0px 5px;\"></button> -->\r\n                        <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\r\n                        <button pButton type=\"button\" icon=\"pi pi-trash\" class=\"ui-button-danger\"\r\n                            (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"paginatorleft\" let-state>\r\n                Showing {{(state.page  * state.rows) + 1}} to {{state.rows * (state.page + 1)}} of\r\n                <strong>{{stocksList?.length}}</strong> entries\r\n            </ng-template>\r\n\r\n        </p-table>\r\n\r\n\r\n    </p-card>\r\n</div>\r\n\r\n\r\n<app-stock-form [displayDialog]=\"displayDialog\" (categoryDialogEvent)=\"categoryDialog($event)\"\r\n    (unitDialogEvent)=\"unitDialog($event)\" (taxDialogEvent)=\"taxDialog($event)\"  (brandDialogEvent)=\"brandDialog($event)\" [stockData]=\"stockData\"\r\n    [catData]=\"catData\" [taxData]=\"taxData\" [unitData]=\"unitData\" [brandData]=\"brandData\" (stockEvent)=\"receiveStock($event)\"\r\n    (displayChangeEvent)=\"onDialogClose($event)\"></app-stock-form>\r\n\r\n<app-category-form [displayDialog1]=\"displayDialog1\" (displayChangeEvent1)=\"onDialogClose1($event)\"\r\n    (catEvent)=\"receiveCategory($event)\"></app-category-form>\r\n\r\n<app-unit-form [displayDialog2]=\"displayDialog2\" (displayChangeEvent2)=\"onDialogClose2($event)\"\r\n    (unitEvent)=\"receiveUnit($event)\"></app-unit-form>\r\n\r\n    <app-tax-form [displayDialog3]=\"displayDialog3\" (displayChangeEvent3)=\"onDialogClose3($event)\"\r\n    (taxEvent)=\"receiveTax($event)\"></app-tax-form>\r\n\r\n    <app-brand-form [displayDialog4]=\"displayDialog4\" (displayChangeEvent4)=\"onDialogClose4($event)\"\r\n        (brandEvent)=\"receiveBrand($event)\"></app-brand-form>\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\r\n    <p-footer>\r\n        <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>\r\n        <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/stock-master/stock-master-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/stock-master/stock-master-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: StockMasterRoutingModule */

  /***/
  function srcAppComponentInventoryMngtMasterStockMasterStockMasterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockMasterRoutingModule", function () {
      return StockMasterRoutingModule;
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


    var _stock_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stock-master.component */
    "./src/app/component/inventory-mngt/master/stock-master/stock-master.component.ts");

    var routes = [{
      path: '',
      component: _stock_master_component__WEBPACK_IMPORTED_MODULE_3__["StockMasterComponent"]
    }];

    var StockMasterRoutingModule = function StockMasterRoutingModule() {
      _classCallCheck(this, StockMasterRoutingModule);
    };

    StockMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StockMasterRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/stock-master/stock-master.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/stock-master/stock-master.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtMasterStockMasterStockMasterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9tYXN0ZXIvc3RvY2stbWFzdGVyL3N0b2NrLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/stock-master/stock-master.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/stock-master/stock-master.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: StockMasterComponent */

  /***/
  function srcAppComponentInventoryMngtMasterStockMasterStockMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockMasterComponent", function () {
      return StockMasterComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/stock.service */
    "./src/app/shared/stock.service.ts");
    /* harmony import */


    var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/category.service */
    "./src/app/shared/category.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/unit.service */
    "./src/app/shared/unit.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");

    var StockMasterComponent = /*#__PURE__*/function () {
      function StockMasterComponent(router, _fb, confirmationService, messageService, stockService, categoryService, unitService, commonService, sessionService) {
        var _this2 = this;

        _classCallCheck(this, StockMasterComponent);

        this.router = router;
        this._fb = _fb;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.stockService = stockService;
        this.categoryService = categoryService;
        this.unitService = unitService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.car = {};
        this.status = [];
        this.clonedCars = {};
        this.categoryList = [];
        this.stockListSheet = [];
        this.unitList = [];
        this.stockData = []; // pass data to another component

        this.catData = []; // pass data to another component

        this.taxData = []; // pass data to another component

        this.unitData = []; // pass data to another component

        this.brandData = []; // pass data to another component

        this.bradCrum = [{
          label: '',
          icon: 'pi pi-home',
          command: function command(event) {
            _this2.router.navigate(['/inventory-mngt/dashboard']);
          }
        }, {
          label: 'Master',
          command: function command(event) {
            _this2.router.navigate(["/inventory-mngt/master"]);
          }
        }, {
          label: 'Stock'
        }];
        this.status = [{
          label: 'Active',
          value: 1
        }, {
          label: 'De-Active',
          value: 0
        }];
        this.getCategoryByCompany(); // this.getTaxByCompany();

        this.getUnitByCompany();
        this.getStocksByCompany();
        this.categoryForm = this._fb.group({
          _id: [''],
          company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          category_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          category_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.unitForm = this._fb.group({
          _id: [''],
          company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          unit_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          unit_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.cols = [{
          field: 'stock_code',
          header: 'Code'
        }, {
          field: '_id',
          header: 'Barcode'
        }, {
          field: 'stock_name',
          header: 'Stock Name'
        }, {
          field: 'category_details_id',
          header: 'Category'
        }, {
          field: 'brand_details_id',
          header: 'Brand'
        }, {
          field: 'stock_qty',
          header: 'Stock Qty'
        }, {
          field: 'buying_price',
          header: 'Buying Price'
        }, {
          field: 'mrp',
          header: 'MRP'
        }, {
          field: 'buying_with_tax',
          header: 'Buying Price(With Tax)'
        }, {
          field: 'selling_price',
          header: 'Selling Price'
        }, {
          field: 'tax_details_id',
          header: 'Tax %'
        }, {
          field: 'unit_details_id',
          header: 'Unit'
        }, {
          field: 'updatedAt',
          header: 'Updated Date'
        }, {
          field: 'status',
          header: 'Status'
        } // { field: '', header: 'Action' }
        ];
      }

      _createClass(StockMasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "receiveStock",
        value: function receiveStock(event) {
          console.log(event);
          var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.stocksList, function (o) {
            return o._id == event._id;
          });
          console.log(sliceIndex);

          if (sliceIndex > -1) {
            // Replace item at index using native splice
            this.stocksList.splice(sliceIndex, 1, event); // this.stocksList = [...this.stocksList];
          } else {// this.stocksList = [event,...this.stocksList];
            }

          this.getStocksByCompany();
        }
      }, {
        key: "receiveCategory",
        value: function receiveCategory(event) {
          console.log('receiveCategory', event);
          this.catData = event;
        }
      }, {
        key: "receiveTax",
        value: function receiveTax(event) {
          console.log('receiveTax', event);
          this.taxData = event;
        }
      }, {
        key: "receiveUnit",
        value: function receiveUnit(event) {
          console.log('receiveUnit', event);
          this.unitData = event;
        }
      }, {
        key: "receiveBrand",
        value: function receiveBrand(event) {
          console.log('receiveBrand', event);
          this.brandData = event;
        }
      }, {
        key: "onDialogClose",
        value: function onDialogClose(event) {
          console.log(event);
          this.catData = []; // clear new cat data while open stock form

          this.unitData = []; // clear new unit data while open stock form

          this.taxData = []; // clear new unit data while open stock form

          this.brandData = []; // clear new unit data while open stock form

          this.stockData = [];
          this.displayDialog = false;
        }
      }, {
        key: "onDialogClose1",
        value: function onDialogClose1(event) {
          console.log(event);
          this.displayDialog1 = false;
          this.catData = null;
        }
      }, {
        key: "onDialogClose2",
        value: function onDialogClose2(event) {
          console.log(event);
          this.displayDialog2 = false;
          this.unitData = null;
        }
      }, {
        key: "onDialogClose3",
        value: function onDialogClose3(event) {
          console.log(event);
          this.displayDialog3 = false;
          this.taxData = null;
        }
      }, {
        key: "onDialogClose4",
        value: function onDialogClose4(event) {
          console.log(event);
          this.displayDialog4 = false;
          this.brandData = null;
        }
      }, {
        key: "categoryDialog",
        value: function categoryDialog(event) {
          console.log('categoryDialog', event);
          this.displayDialog1 = event;
        }
      }, {
        key: "taxDialog",
        value: function taxDialog(event) {
          console.log('taxDialog', event);
          this.displayDialog3 = event;
        }
      }, {
        key: "unitDialog",
        value: function unitDialog(event) {
          console.log('unitDialog', event);
          this.displayDialog2 = event;
        }
      }, {
        key: "brandDialog",
        value: function brandDialog(event) {
          console.log('brandDialog', event);
          this.displayDialog4 = event;
        }
      }, {
        key: "getCategoryByCompany",
        value: function getCategoryByCompany() {
          var _this3 = this;

          this.categoryService.getCategoryByCompany().subscribe(function (data) {
            console.log('categoryList', data);

            _this3.categoryList.push({
              label: '+ Add New Category',
              value: 0
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var catData = _step.value;

                _this3.categoryList.push({
                  label: catData.category_name + ' | ' + catData.category_code,
                  value: catData._id
                });
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

            console.log('categoryList1', _this3.categoryList);
          });
        }
      }, {
        key: "getUnitByCompany",
        value: function getUnitByCompany() {
          var _this4 = this;

          this.unitService.getUnitByCompany().subscribe(function (data) {
            console.log('unitList', data);

            _this4.unitList.push({
              label: '+ Add New Unit',
              value: 0
            });

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var unitData = _step2.value;

                _this4.unitList.push({
                  label: unitData.unit_name + ' | ' + unitData.unit_code,
                  value: unitData._id
                });
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            console.log('unitList', _this4.unitList);
          });
        }
      }, {
        key: "getStocksByCompany",
        value: function getStocksByCompany() {
          var _this5 = this;

          this.loading = true;
          this.stockService.getStockByCompany().subscribe(function (data) {
            console.log('stocksList', data);
            _this5.stocksList = data;
            _this5.loading = false;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var sheetData = _step3.value;

                _this5.stockListSheet.push({
                  'Barcode': sheetData._id,
                  'Stock Code': sheetData.stock_code,
                  'Stock Name': sheetData.stock_name,
                  'Category Name': sheetData.category_details_id.category_name,
                  'Stock Qty': sheetData.stock_qty,
                  'Buying Price': sheetData.buying_price,
                  'Selling Price': sheetData.selling_price,
                  'Product Details': sheetData.product_details,
                  'Unit': sheetData.unit_details_id ? sheetData.unit_details_id.unit_name : '',
                  'Updated date': sheetData.updatedAt,
                  'Status': sheetData.status // ''  : sheetData.status

                });
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd(stockData) {
          this.stockData = stockData;
          this.displayDialog = true;
        }
      }, {
        key: "delete",
        value: function _delete(stock, index) {
          var _this6 = this;

          console.log('delete', stock, index);
          this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this Stock?',
            accept: function accept() {
              //Actual logic to perform a confirmation
              _this6.onRowDelete(stock, index);
            }
          });
        }
      }, {
        key: "onRowDelete",
        value: function onRowDelete(stock, index) {
          var _this7 = this;

          console.log(stock, index);
          this.stockService.deleteStock(stock._id).subscribe(function (data) {
            console.log('delete', data);

            _this7.stocksList.splice(index, 1);

            _this7.stocksList = _toConsumableArray(_this7.stocksList);

            _this7.messageService.add({
              severity: 'success',
              summary: 'Stock Deleted Successfully',
              detail: 'Stock Deleted Successfully'
            });
          }, function (error) {
            console.log(error);

            _this7.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }, {
        key: "onChangeStatus",
        value: function onChangeStatus(event) {
          console.log(event);
          var isChecked = event.checked;
        }
      }, {
        key: "exportPdf",
        value: function exportPdf() {
          __webpack_require__.e(
          /*! import() | jspdf */
          "default~jspdf~jspdf-autotable").then(__webpack_require__.t.bind(null,
          /*! jspdf */
          "./node_modules/jspdf/dist/jspdf.min.js", 7)).then(function (jsPDF) {
            Promise.all(
            /*! import() | jspdf-autotable */
            [__webpack_require__.e("default~jspdf~jspdf-autotable"), __webpack_require__.e("jspdf-autotable")]).then(__webpack_require__.t.bind(null,
            /*! jspdf-autotable */
            "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js", 7)).then(function (x) {
              var doc = new jsPDF(); // console.log(this.cols,this.categoryListSheet);
              // doc.autoTable(this.cols, this.categoryListSheet);

              doc.save('cat-primengTable.pdf');
            });
          });
        }
      }, {
        key: "exportExcel",
        value: function exportExcel() {
          var _this8 = this;

          __webpack_require__.e(
          /*! import() | xlsx */
          "xlsx").then(__webpack_require__.t.bind(null,
          /*! xlsx */
          "./node_modules/xlsx/xlsx.js", 7)).then(function (xlsx) {
            var worksheet = xlsx.utils.json_to_sheet(_this8.stockListSheet);
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
            });

            _this8.saveAsExcelFile(excelBuffer, "primengTable");
          });
        }
      }, {
        key: "saveAsExcelFile",
        value: function saveAsExcelFile(buffer, fileName) {
          __webpack_require__.e(
          /*! import() | file-saver */
          "file-saver").then(__webpack_require__.t.bind(null,
          /*! file-saver */
          "./node_modules/file-saver/dist/FileSaver.min.js", 7)).then(function (FileSaver) {
            var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            var EXCEL_EXTENSION = '.xlsx';
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          });
        }
      }]);

      return StockMasterComponent;
    }();

    StockMasterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"]
      }, {
        type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
      }, {
        type: src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_9__["UnitService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
      }];
    };

    StockMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stock-master',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stock-master.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/stock-master/stock-master.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stock-master.component.scss */
      "./src/app/component/inventory-mngt/master/stock-master/stock-master.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"], src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_9__["UnitService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]])], StockMasterComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/stock-master/stock-master.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/stock-master/stock-master.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: StockMasterModule */

  /***/
  function srcAppComponentInventoryMngtMasterStockMasterStockMasterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockMasterModule", function () {
      return StockMasterModule;
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


    var _stock_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stock-master-routing.module */
    "./src/app/component/inventory-mngt/master/stock-master/stock-master-routing.module.ts");
    /* harmony import */


    var _stock_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./stock-master.component */
    "./src/app/component/inventory-mngt/master/stock-master/stock-master.component.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/dialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/confirmdialog.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/inputtextarea */
    "./node_modules/primeng/inputtextarea.js");
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/keyfilter */
    "./node_modules/primeng/keyfilter.js");
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/inputswitch */
    "./node_modules/primeng/inputswitch.js");
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/tooltip.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _shared_stock_form_stock_form_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../shared/stock-form/stock-form.module */
    "./src/app/component/inventory-mngt/shared/stock-form/stock-form.module.ts");
    /* harmony import */


    var _shared_category_form_category_form_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../shared/category-form/category-form.module */
    "./src/app/component/inventory-mngt/shared/category-form/category-form.module.ts");
    /* harmony import */


    var _shared_unit_form_unit_form_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../shared/unit-form/unit-form.module */
    "./src/app/component/inventory-mngt/shared/unit-form/unit-form.module.ts");
    /* harmony import */


    var _shared_tax_form_tax_form_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../shared/tax-form/tax-form.module */
    "./src/app/component/inventory-mngt/shared/tax-form/tax-form.module.ts");
    /* harmony import */


    var _shared_brand_form_brand_form_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../shared/brand-form/brand-form.module */
    "./src/app/component/inventory-mngt/shared/brand-form/brand-form.module.ts");

    var StockMasterModule = function StockMasterModule() {
      _classCallCheck(this, StockMasterModule);
    };

    StockMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_stock_master_component__WEBPACK_IMPORTED_MODULE_4__["StockMasterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _stock_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["StockMasterRoutingModule"], primeng_card__WEBPACK_IMPORTED_MODULE_9__["CardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialogModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_14__["ToastModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"], primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16__["KeyFilterModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__["InputSwitchModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"], _shared_stock_form_stock_form_module__WEBPACK_IMPORTED_MODULE_20__["StockFormModule"], _shared_category_form_category_form_module__WEBPACK_IMPORTED_MODULE_21__["CategoryFormModule"], _shared_unit_form_unit_form_module__WEBPACK_IMPORTED_MODULE_22__["UnitFormModule"], _shared_tax_form_tax_form_module__WEBPACK_IMPORTED_MODULE_23__["TaxFormModule"], _shared_brand_form_brand_form_module__WEBPACK_IMPORTED_MODULE_24__["BrandFormModule"]]
    })], StockMasterModule);
    /***/
  },

  /***/
  "./src/app/shared/category.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/category.service.ts ***!
    \********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppSharedCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
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

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(httpClient, sessionService) {
        _classCallCheck(this, CategoryService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(CategoryService, [{
        key: "getCategory",
        value: function getCategory() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category');
        }
      }, {
        key: "getCategoryByCompany",
        value: function getCategoryByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addCategory",
        value: function addCategory(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category/' + id);
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(status, id) {
          var body = JSON.stringify(status);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category/status-update/' + id, body, {
            headers: headerOption
          });
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], CategoryService);
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
//# sourceMappingURL=stock-master-stock-master-module-es5.js.map