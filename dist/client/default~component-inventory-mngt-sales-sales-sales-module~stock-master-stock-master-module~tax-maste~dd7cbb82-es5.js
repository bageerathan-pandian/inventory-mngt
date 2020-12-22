function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-inventory-mngt-sales-sales-sales-module~stock-master-stock-master-module~tax-maste~dd7cbb82"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtSharedTaxFormTaxFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-dialog [maximizable]=\"true\" [(visible)]=\"displayDialog3\" (onHide)=\"onClose()\" [responsive]=\"true\" showEffect=\"fade\"\n    [resizable]=\"false\" [modal]=\"true\" [style]=\"{width: '400px'}\">\n    <p-header>\n        <span *ngIf=\"taxForm.value._id\">Update</span>\n        <span *ngIf=\"!taxForm.value._id\">Add</span> Tax\n    </p-header>\n    <form [formGroup]=\"taxForm\">\n        <div class=\"ui-g ui-fluid\">\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Tax Code</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText formControlName=\"tax_code\" disabled />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Tax Name</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"vin\" formControlName=\"tax_name\" autofocus />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Tax (CGST)% </label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <div class=\"ui-inputgroup\">\n                        <input pInputText pKeyFilter=\"num\" formControlName=\"tax_value_cgst\"  />\n                        <span class=\"ui-inputgroup-addon\">%</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Tax (SGST)% </label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <div class=\"ui-inputgroup\">\n                        <input pInputText pKeyFilter=\"num\" formControlName=\"tax_value_sgst\"  />\n                        <span class=\"ui-inputgroup-addon\">%</span>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Tax Type</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <p-dropdown [options]=\"taxTypeList\" placeholder=\"Select Tax Type\" formControlName=\"tax_type\"></p-dropdown>\n                </div>\n            </div> -->\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"brand\">Status</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n\n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n                <button type=\"button\" pButton icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!taxForm.value._id\"\n                    (click)=\"addTax()\" label=\"Add\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"taxForm.value._id\"\n                    (click)=\"updateTax()\" label=\"Update\"></button>\n            </div>\n        </p-footer>\n    </form>\n</p-dialog>";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtSharedTaxFormTaxFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zaGFyZWQvdGF4LWZvcm0vdGF4LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.ts ***!
    \********************************************************************************/

  /*! exports provided: TaxFormComponent */

  /***/
  function srcAppComponentInventoryMngtSharedTaxFormTaxFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaxFormComponent", function () {
      return TaxFormComponent;
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


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/tax.service */
    "./src/app/shared/tax.service.ts");

    var TaxFormComponent = /*#__PURE__*/function () {
      function TaxFormComponent(_fb, taxService, commonService, sessionService, messageService) {
        _classCallCheck(this, TaxFormComponent);

        this._fb = _fb;
        this.taxService = taxService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.displayChangeEvent3 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.taxEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.status = [{
          label: 'Active',
          value: 1
        }, {
          label: 'De-Active',
          value: 0
        }];
        this.taxTypeList = [{
          label: 'CGST',
          value: 1
        }, {
          label: 'SGST',
          value: 2
        }, {
          label: 'IGST',
          value: 3
        }];
        this.taxForm = this._fb.group({
          _id: [''],
          company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          tax_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          tax_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          tax_value_cgst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          tax_value_sgst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(TaxFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log('displayDialog3', this.displayDialog3);
          console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"](this.taxData));

          if (lodash__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"](this.taxData)) {
            console.log('catData', this.taxData);
            this.taxForm.controls['_id'].setValue(this.taxData._id);
            this.taxForm.controls['tax_code'].setValue(this.taxData.tax_code);
            this.taxForm.controls['tax_name'].setValue(this.taxData.tax_name);
            this.taxForm.controls['tax_value_cgst'].setValue(this.taxData.tax_value_cgst);
            this.taxForm.controls['tax_value_sgst'].setValue(this.taxData.tax_value_sgst);
            this.taxForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
            this.taxForm.controls['status'].setValue(this.taxData.status);
          } else {
            this.getUnitByCompany();
          }
        }
      }, {
        key: "getUnitByCompany",
        value: function getUnitByCompany() {
          var _this = this;

          this.taxService.getTaxByCompany().subscribe(function (data) {
            _this.taxForm.reset();

            _this.taxForm.controls['tax_code'].setValue(_this.commonService.incrCode('t', data.length));

            _this.taxForm.controls['status'].setValue(1);

            _this.taxForm.controls['company_details_id'].setValue(_this.sessionService.getItem('company_id'));
          });
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          var _this2 = this;

          Object.keys(this.taxForm.controls).forEach(function (key) {
            _this2.taxForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "addTax",
        value: function addTax() {
          var _this3 = this;

          console.log('taxForm', this.taxForm);

          if (this.taxForm.invalid) {
            this.checkValidity();
            return;
          }

          this.taxService.addTax(this.taxForm.value).subscribe(function (data) {
            // let newData = {
            //   label : data.tax_name +' | ' +data.tax_code,
            //   value : data._id
            //  }
            _this3.taxEvent.emit(data); // this.unitList = [newData,...this.unitList];
            // this.categoryList.push(data);
            // console.log('this.unitList',this.unitList);


            _this3.messageService.add({
              severity: 'success',
              summary: 'New Tax Added Successfully',
              detail: 'New Tax Added Successfully'
            }); // this.stockForm.controls['unit_details_id'].setValue(data._id) 


            _this3.displayDialog3 = false;
          }, function (error) {
            console.log(error);

            _this3.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });

            _this3.displayDialog3 = false;
          });
        }
      }, {
        key: "updateTax",
        value: function updateTax() {
          var _this4 = this;

          console.log('taxForm', this.taxForm);

          if (this.taxForm.invalid) {
            this.checkValidity();
            return;
          }

          this.taxService.updateTax(this.taxForm.value).subscribe(function (data) {
            console.log('add unit', data); // let newData = {
            //   label : data.tax_name +' | ' +data.tax_code,
            //   value : data._id
            //  }

            _this4.taxEvent.emit(data); // this.unitList = [newData,...this.unitList];
            // this.categoryList.push(data);
            // console.log('this.unitList',this.unitList);


            _this4.messageService.add({
              severity: 'success',
              summary: 'Tax Updated Successfully',
              detail: 'Tax Updated Successfully'
            }); // this.stockForm.controls['unit_details_id'].setValue(data._id) 


            _this4.displayDialog3 = false;
          }, function (error) {
            console.log(error);

            _this4.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });

            _this4.displayDialog3 = false;
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          // this.displayDialog = false;
          this.displayChangeEvent3.emit(false);
        } // Work against memory leak if component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.displayChangeEvent3.unsubscribe();
        }
      }]);

      return TaxFormComponent;
    }();

    TaxFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_7__["TaxService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TaxFormComponent.prototype, "taxData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], TaxFormComponent.prototype, "displayDialog3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TaxFormComponent.prototype, "displayChangeEvent3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TaxFormComponent.prototype, "taxEvent", void 0);
    TaxFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tax-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tax-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tax-form.component.scss */
      "./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_7__["TaxService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])], TaxFormComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/tax-form/tax-form.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/tax-form/tax-form.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: TaxFormModule */

  /***/
  function srcAppComponentInventoryMngtSharedTaxFormTaxFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaxFormModule", function () {
      return TaxFormModule;
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


    var _tax_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tax-form.component */
    "./src/app/component/inventory-mngt/shared/tax-form/tax-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/dialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/keyfilter */
    "./node_modules/primeng/keyfilter.js");
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9__);

    var TaxFormModule = function TaxFormModule() {
      _classCallCheck(this, TaxFormModule);
    };

    TaxFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tax_form_component__WEBPACK_IMPORTED_MODULE_3__["TaxFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9__["KeyFilterModule"]],
      exports: [_tax_form_component__WEBPACK_IMPORTED_MODULE_3__["TaxFormComponent"]]
    })], TaxFormModule);
    /***/
  }
}]);
//# sourceMappingURL=default~component-inventory-mngt-sales-sales-sales-module~stock-master-stock-master-module~tax-maste~dd7cbb82-es5.js.map