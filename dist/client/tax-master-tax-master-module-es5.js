function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tax-master-tax-master-module"], {
  /***/
  "./node_modules/primeng/components/keyfilter/keyfilter.js":
  /*!****************************************************************!*\
    !*** ./node_modules/primeng/components/keyfilter/keyfilter.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsKeyfilterKeyfilterJs(module, exports, __webpack_require__) {
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

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    exports.KEYFILTER_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function () {
        return KeyFilter;
      }),
      multi: true
    };

    var KeyFilter =
    /** @class */
    function () {
      function KeyFilter(el) {
        this.el = el;
        this.ngModelChange = new core_1.EventEmitter();
        this.isAndroid = domhandler_1.DomHandler.isAndroid();
      }

      KeyFilter_1 = KeyFilter;
      Object.defineProperty(KeyFilter.prototype, "pattern", {
        get: function get() {
          return this._pattern;
        },
        set: function set(_pattern) {
          this._pattern = _pattern;
          this.regex = KeyFilter_1.DEFAULT_MASKS[this._pattern] || this._pattern;
        },
        enumerable: true,
        configurable: true
      });

      KeyFilter.prototype.isNavKeyPress = function (e) {
        var k = e.keyCode;
        k = domhandler_1.DomHandler.getBrowser().safari ? KeyFilter_1.SAFARI_KEYS[k] || k : k;
        return k >= 33 && k <= 40 || k == KeyFilter_1.KEYS.RETURN || k == KeyFilter_1.KEYS.TAB || k == KeyFilter_1.KEYS.ESC;
      };

      ;

      KeyFilter.prototype.isSpecialKey = function (e) {
        var k = e.keyCode;
        var c = e.charCode;
        return k == 9 || k == 13 || k == 27 || k == 16 || k == 17 || k >= 18 && k <= 20 || domhandler_1.DomHandler.getBrowser().opera && !e.shiftKey && (k == 8 || k >= 33 && k <= 35 || k >= 36 && k <= 39 || k >= 44 && k <= 45);
      };

      KeyFilter.prototype.getKey = function (e) {
        var k = e.keyCode || e.charCode;
        return domhandler_1.DomHandler.getBrowser().safari ? KeyFilter_1.SAFARI_KEYS[k] || k : k;
      };

      KeyFilter.prototype.getCharCode = function (e) {
        return e.charCode || e.keyCode || e.which;
      };

      KeyFilter.prototype.findDelta = function (value, prevValue) {
        var delta = '';

        for (var i = 0; i < value.length; i++) {
          var str = value.substr(0, i) + value.substr(i + value.length - prevValue.length);
          if (str === prevValue) delta = value.substr(i, value.length - prevValue.length);
        }

        return delta;
      };

      KeyFilter.prototype.isValidChar = function (c) {
        return this.regex.test(c);
      };

      KeyFilter.prototype.isValidString = function (str) {
        for (var i = 0; i < str.length; i++) {
          if (!this.isValidChar(str.substr(i, 1))) {
            return false;
          }
        }

        return true;
      };

      KeyFilter.prototype.onInput = function (e) {
        if (this.isAndroid && !this.pValidateOnly) {
          var val = this.el.nativeElement.value;
          var lastVal = this.lastValue || '';
          var inserted = this.findDelta(val, lastVal);
          var removed = this.findDelta(lastVal, val);
          var pasted = inserted.length > 1 || !inserted && !removed;

          if (pasted) {
            if (!this.isValidString(val)) {
              this.el.nativeElement.value = lastVal;
              this.ngModelChange.emit(lastVal);
            }
          } else if (!removed) {
            if (!this.isValidChar(inserted)) {
              this.el.nativeElement.value = lastVal;
              this.ngModelChange.emit(lastVal);
            }
          }

          val = this.el.nativeElement.value;

          if (this.isValidString(val)) {
            this.lastValue = val;
          }
        }
      };

      KeyFilter.prototype.onKeyPress = function (e) {
        if (this.isAndroid || this.pValidateOnly) {
          return;
        }

        var browser = domhandler_1.DomHandler.getBrowser();

        if (e.ctrlKey || e.altKey) {
          return;
        }

        var k = this.getKey(e);

        if (k == 13) {
          return;
        }

        if (browser.mozilla && (this.isNavKeyPress(e) || k == KeyFilter_1.KEYS.BACKSPACE || k == KeyFilter_1.KEYS.DELETE && e.charCode == 0)) {
          return;
        }

        var c = this.getCharCode(e);
        var cc = String.fromCharCode(c);
        var ok = true;

        if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
          return;
        }

        ok = this.regex.test(cc);

        if (!ok) {
          e.preventDefault();
        }
      };

      KeyFilter.prototype.onPaste = function (e) {
        var clipboardData = e.clipboardData || window.clipboardData.getData('text');

        if (clipboardData) {
          var pastedText = clipboardData.getData('text');

          if (!this.regex.test(pastedText)) {
            e.preventDefault();
          }
        }
      };

      KeyFilter.prototype.validate = function (c) {
        if (this.pValidateOnly) {
          var value = this.el.nativeElement.value;

          if (value && !this.regex.test(value)) {
            return {
              validatePattern: false
            };
          }
        }
      };

      var KeyFilter_1;
      KeyFilter.DEFAULT_MASKS = {
        pint: /[\d]/,
        'int': /[\d\-]/,
        pnum: /[\d\.]/,
        money: /[\d\.\s,]/,
        num: /[\d\-\.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_\.\-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/i
      };
      KeyFilter.KEYS = {
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        BACKSPACE: 8,
        DELETE: 46
      };
      KeyFilter.SAFARI_KEYS = {
        63234: 37,
        63235: 39,
        63232: 38,
        63233: 40,
        63276: 33,
        63277: 34,
        63272: 46,
        63273: 36,
        63275: 35 // end

      };

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], KeyFilter.prototype, "pValidateOnly", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], KeyFilter.prototype, "ngModelChange", void 0);

      __decorate([core_1.Input('pKeyFilter'), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], KeyFilter.prototype, "pattern", null);

      __decorate([core_1.HostListener('input', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [KeyboardEvent]), __metadata("design:returntype", void 0)], KeyFilter.prototype, "onInput", null);

      __decorate([core_1.HostListener('keypress', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [KeyboardEvent]), __metadata("design:returntype", void 0)], KeyFilter.prototype, "onKeyPress", null);

      __decorate([core_1.HostListener('paste', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], KeyFilter.prototype, "onPaste", null);

      KeyFilter = KeyFilter_1 = __decorate([core_1.Directive({
        selector: '[pKeyFilter]',
        providers: [exports.KEYFILTER_VALIDATOR]
      }), __metadata("design:paramtypes", [core_1.ElementRef])], KeyFilter);
      return KeyFilter;
    }();

    exports.KeyFilter = KeyFilter;

    var KeyFilterModule =
    /** @class */
    function () {
      function KeyFilterModule() {}

      KeyFilterModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [KeyFilter],
        declarations: [KeyFilter]
      })], KeyFilterModule);
      return KeyFilterModule;
    }();

    exports.KeyFilterModule = KeyFilterModule; //# sourceMappingURL=keyfilter.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/keyfilter.js":
  /*!*******************************************!*\
    !*** ./node_modules/primeng/keyfilter.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengKeyfilterJs(module, exports, __webpack_require__) {
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
    /*! ./components/keyfilter/keyfilter */
    "./node_modules/primeng/components/keyfilter/keyfilter.js"));
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/tax-master/tax-master.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/tax-master/tax-master.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtMasterTaxMasterTaxMasterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n        <div style=\"margin-top: 15px;\">\r\n      <p-card  >\r\n      <p-table  #dt1   [value]=\"taxList\" dataKey=\"id\" [loading]=\"loading\" [paginator]=\"true\" [rows]=\"10\"   [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['tax_code','tax_name','tax_value']\">\r\n          <ng-template pTemplate=\"caption\">\r\n              <div class=\"ui-helper-clearfix\" >\r\n      \r\n                  <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button> -->\r\n                  <!-- <button type=\"button\" pButton icon=\"fa fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button> -->\r\n              </div>\r\n              <div style=\"text-align: right\">        \r\n                  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \r\n                  <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\r\n              </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"header\">\r\n              <tr>\r\n                  <th  [pSortableColumn]=\"'tax_code'\" pResizableColumn >\r\n                        #\r\n                    <p-sortIcon [field]=\"tax_code\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n                    </th>\r\n                  <th  [pSortableColumn]=\"'tax_name'\" pResizableColumn>\r\n                      Tax Name\r\n                  <p-sortIcon [field]=\"tax_name\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n                  </th>\r\n                  <th  [pSortableColumn]=\"'tax_value'\" pResizableColumn>\r\n                    Tax (CGST)%\r\n                <p-sortIcon [field]=\"tax_value\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n                </th>\r\n                <th  [pSortableColumn]=\"'tax_value'\" pResizableColumn>\r\n                    Tax (SGST)%\r\n                <p-sortIcon [field]=\"tax_value\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n                </th>\r\n                  <th [pSortableColumn]=\"'updatedAt'\" pResizableColumn>\r\n                        Updated Date\r\n                     <p-sortIcon [field]=\"updatedAt\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n                 </th>\r\n                 <th [pSortableColumn]=\"'status'\" pResizableColumn style=\"width: 10%;\">\r\n                    Status\r\n                 <p-sortIcon [field]=\"Status\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n             </th>\r\n                 <th style=\"width: 10%;\">\r\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\" ></button>\r\n\r\n            </th>\r\n              </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\" >\r\n            \r\n              <tr [pEditableRow]=\"rowData\">\r\n                  <td>\r\n                      #{{rowData.tax_code}}\r\n                  </td>\r\n                  <td>\r\n                      <p-cellEditor>\r\n                          <ng-template pTemplate=\"input\">\r\n                              <input pInputText type=\"text\" [(ngModel)]=\"rowData.tax_name\" required>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"output\">\r\n                              {{rowData.tax_name}}\r\n                          </ng-template>\r\n                      </p-cellEditor>\r\n                  </td>\r\n                  <td>\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.tax_value_cgst\" required>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">\r\n                            {{rowData.tax_value_cgst}} %\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td>\r\n                <td>\r\n                  <p-cellEditor>\r\n                      <ng-template pTemplate=\"input\">\r\n                          <input pInputText type=\"text\" [(ngModel)]=\"rowData.tax_value_sgst\" required>\r\n                      </ng-template>\r\n                      <ng-template pTemplate=\"output\">\r\n                          {{rowData.tax_value_sgst}} %\r\n                      </ng-template>\r\n                  </p-cellEditor>\r\n              </td>\r\n                  <td>\r\n                    {{rowData.updatedAt | date:'medium'}}\r\n            </td>\r\n                  <td style=\"text-align: center\">\r\n                    <p-dropdown [options]=\"status\" placeholder=\"Status\" [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event)\"></p-dropdown>\r\n                </td>\r\n                <td style=\"text-align:center\">\r\n                    <button  pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"showDialogToAdd(rowData)\" style=\"    margin: 0px 5px;\"></button>\r\n                    <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\r\n                    <button  pButton type=\"button\" pCancelEditableRow icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\r\n                </td>\r\n              </tr>\r\n          </ng-template>\r\n\r\n           <ng-template pTemplate=\"paginatorleft\" let-state>\r\n            Showing {{(state.page  * state.rows) + 1}} to {{state.rows * (state.page + 1)}} of <strong>{{taxList?.length}}</strong> entries\r\n          </ng-template>\r\n      </p-table>\r\n\r\n      <app-tax-form [displayDialog3]=\"displayDialog3\" [taxData]=\"taxData\" (displayChangeEvent3)=\"onDialogClose3($event)\" (taxEvent)=\"receiveTax($event)\"></app-tax-form>\r\n\r\n\r\n      <!-- <p-dialog   [maximizable]=\"true\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\r\n            <p-header>\r\n                    <span *ngIf=\"taxForm.value._id\">Update</span>\r\n                    <span *ngIf=\"!taxForm.value._id\">Add</span> Tax\r\n            </p-header>\r\n        <form [formGroup]=\"taxForm\">\r\n        <div class=\"ui-g ui-fluid\" >\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Tax Code</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText  formControlName=\"tax_code\" disabled />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Tax Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText id=\"vin\" formControlName=\"tax_name\" autofocus />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Tax %</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText id=\"vin\" formControlName=\"tax_value\" autofocus />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"brand\">Status</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                 <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button>\r\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!taxForm.value._id\" (click)=\"save()\" label=\"Add\"></button>\r\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"taxForm.value._id\" (click)=\"save()\" label=\"Update\"></button>\r\n            </div>\r\n        </p-footer>\r\n    </form>\r\n    </p-dialog> -->\r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\r\n            <p-footer>\r\n                    <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \r\n                    <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\r\n                </p-footer>\r\n            </p-confirmDialog>\r\n    </p-card>\r\n    </div>";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/tax-master/tax-master-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/tax-master/tax-master-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TaxMasterRoutingModule */

  /***/
  function srcAppComponentInventoryMngtMasterTaxMasterTaxMasterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaxMasterRoutingModule", function () {
      return TaxMasterRoutingModule;
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


    var _tax_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tax-master.component */
    "./src/app/component/inventory-mngt/master/tax-master/tax-master.component.ts");

    var routes = [{
      path: '',
      component: _tax_master_component__WEBPACK_IMPORTED_MODULE_3__["TaxMasterComponent"]
    }];

    var TaxMasterRoutingModule = function TaxMasterRoutingModule() {
      _classCallCheck(this, TaxMasterRoutingModule);
    };

    TaxMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaxMasterRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/tax-master/tax-master.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/tax-master/tax-master.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtMasterTaxMasterTaxMasterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9tYXN0ZXIvdGF4LW1hc3Rlci90YXgtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/tax-master/tax-master.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/tax-master/tax-master.component.ts ***!
    \************************************************************************************/

  /*! exports provided: TaxMasterComponent */

  /***/
  function srcAppComponentInventoryMngtMasterTaxMasterTaxMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaxMasterComponent", function () {
      return TaxMasterComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/tax.service */
    "./src/app/shared/tax.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");

    var TaxMasterComponent = /*#__PURE__*/function () {
      function TaxMasterComponent(router, _fb, confirmationService, messageService, taxService, commonService, sessionService) {
        _classCallCheck(this, TaxMasterComponent);

        this.router = router;
        this._fb = _fb;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.taxService = taxService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.car = {};
        this.status = [];
        this.taxData = [];
      }

      _createClass(TaxMasterComponent, [{
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
            label: "Master",
            command: function command(event) {
              _this.router.navigate(["/inventory-mngt/master"]);
            }
          }, {
            label: "Tax",
            command: function command(event) {
              _this.router.navigate(["/inventory-mngt/master/tax"]);
            }
          }];
          this.status = [{
            label: 'Active',
            value: 1
          }, {
            label: 'De-Active',
            value: 0
          }]; // if(this.user_details.role == '0'){
          //   this.getTax();
          // }else{

          this.getTaxByCompany(); // }
        }
      }, {
        key: "getTax",
        value: function getTax() {
          var _this2 = this;

          this.loading = true;
          this.taxService.getTax().subscribe(function (data) {
            console.log('taxList', data);
            _this2.taxList = data;
            _this2.loading = false;
          });
        }
      }, {
        key: "getTaxByCompany",
        value: function getTaxByCompany() {
          var _this3 = this;

          this.loading = true;
          this.taxService.getTaxByCompany().subscribe(function (data) {
            console.log('taxList', data);
            _this3.taxList = data;
            _this3.loading = false;
          });
        } // showDialogToAdd() {
        //   this.taxForm.reset();
        //   this.taxForm.controls['tax_code'].setValue(this.commonService.incrCode('t',this.taxList.length));
        //   this.taxForm.controls['status'].setValue(1);
        //   this.taxForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        //   this.displayDialog = true;
        // }

      }, {
        key: "delete",
        value: function _delete(data, index) {
          var _this4 = this;

          console.log('delete', data, index);
          this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this Tax?',
            accept: function accept() {
              //Actual logic to perform a confirmation
              _this4.onRowDelete(data, index);
            }
          });
        }
      }, {
        key: "onRowDelete",
        value: function onRowDelete(tax, index) {
          var _this5 = this;

          console.log(tax, index);
          this.taxService.deleteTax(tax._id).subscribe(function (data) {
            console.log('delete', data);

            _this5.taxList.splice(index, 1);

            _this5.taxList = _toConsumableArray(_this5.taxList);

            _this5.messageService.add({
              severity: 'success',
              summary: 'Tax Deleted Successfully',
              detail: 'Tax Deleted Successfully'
            });
          }, function (error) {
            console.log(error);

            _this5.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }, {
        key: "onChangeStatus",
        value: function onChangeStatus(event, id) {
          var _this6 = this;

          console.log(event);
          var isChecked = event.checked;
          this.taxService.updateStatus(event.checked, id).subscribe(function (data) {
            _this6.messageService.add({
              severity: 'success',
              summary: 'Status Updated Successfully',
              detail: 'Status Updated Successfully'
            });
          }, function (error) {
            console.log(error);

            _this6.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd(Data) {
          this.taxData = Data;
          this.displayDialog3 = true;
        }
      }, {
        key: "onDialogClose3",
        value: function onDialogClose3(event) {
          console.log(event);
          this.displayDialog3 = false;
          this.taxData = null;
        }
      }, {
        key: "receiveTax",
        value: function receiveTax(event) {
          var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](this.taxList, function (o) {
            return o._id == event._id;
          });
          console.log(sliceIndex);

          if (sliceIndex > -1) {
            // Replace item at index using native splice
            this.taxList.splice(sliceIndex, 1, event);
            this.taxList = _toConsumableArray(this.taxList);
          } else {
            this.taxList = [event].concat(_toConsumableArray(this.taxList));
          }
        }
      }]);

      return TaxMasterComponent;
    }();

    TaxMasterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_5__["TaxService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
      }];
    };

    TaxMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tax-master',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tax-master.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/tax-master/tax-master.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tax-master.component.scss */
      "./src/app/component/inventory-mngt/master/tax-master/tax-master.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_5__["TaxService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]])], TaxMasterComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/tax-master/tax-master.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/tax-master/tax-master.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: TaxMasterModule */

  /***/
  function srcAppComponentInventoryMngtMasterTaxMasterTaxMasterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaxMasterModule", function () {
      return TaxMasterModule;
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


    var _tax_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tax-master-routing.module */
    "./src/app/component/inventory-mngt/master/tax-master/tax-master-routing.module.ts");
    /* harmony import */


    var _tax_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tax-master.component */
    "./src/app/component/inventory-mngt/master/tax-master/tax-master.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/dialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/confirmdialog.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/inputswitch */
    "./node_modules/primeng/inputswitch.js");
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/multiselect */
    "./node_modules/primeng/multiselect.js");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var _shared_tax_form_tax_form_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../shared/tax-form/tax-form.module */
    "./src/app/component/inventory-mngt/shared/tax-form/tax-form.module.ts");

    var TaxMasterModule = function TaxMasterModule() {
      _classCallCheck(this, TaxMasterModule);
    };

    TaxMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tax_master_component__WEBPACK_IMPORTED_MODULE_4__["TaxMasterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tax_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaxMasterRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__["InputSwitchModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__["ProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__["MultiSelectModule"], _shared_tax_form_tax_form_module__WEBPACK_IMPORTED_MODULE_19__["TaxFormModule"]]
    })], TaxMasterModule);
    /***/
  },

  /***/
  "./src/app/shared/tax.service.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/tax.service.ts ***!
    \***************************************/

  /*! exports provided: TaxService */

  /***/
  function srcAppSharedTaxServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaxService", function () {
      return TaxService;
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

    var TaxService = /*#__PURE__*/function () {
      function TaxService(httpClient, sessionService) {
        _classCallCheck(this, TaxService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(TaxService, [{
        key: "getTax",
        value: function getTax() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax');
        }
      }, {
        key: "getTaxByCompany",
        value: function getTaxByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addTax",
        value: function addTax(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateTax",
        value: function updateTax(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteTax",
        value: function deleteTax(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/' + id);
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(status, id) {
          var body = JSON.stringify(status);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/status-update/' + id, body, {
            headers: headerOption
          });
        }
      }]);

      return TaxService;
    }();

    TaxService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    TaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], TaxService);
    /***/
  }
}]);
//# sourceMappingURL=tax-master-tax-master-module-es5.js.map