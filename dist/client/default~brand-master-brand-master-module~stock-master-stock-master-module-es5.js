function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~brand-master-brand-master-module~stock-master-stock-master-module"], {
  /***/
  "./node_modules/primeng/components/inputswitch/inputswitch.js":
  /*!********************************************************************!*\
    !*** ./node_modules/primeng/components/inputswitch/inputswitch.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsInputswitchInputswitchJs(module, exports, __webpack_require__) {
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

    exports.INPUTSWITCH_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return InputSwitch;
      }),
      multi: true
    };

    var InputSwitch =
    /** @class */
    function () {
      function InputSwitch(cd) {
        this.cd = cd;
        this.onChange = new core_1.EventEmitter();
        this.checked = false;
        this.focused = false;

        this.onModelChange = function () {};

        this.onModelTouched = function () {};
      }

      InputSwitch.prototype.onClick = function (event, cb) {
        if (!this.disabled && !this.readonly) {
          this.toggle(event);
          cb.focus();
        }
      };

      InputSwitch.prototype.onInputChange = function (event) {
        if (!this.readonly) {
          var inputChecked = event.target.checked;
          this.updateModel(event, inputChecked);
        }
      };

      InputSwitch.prototype.toggle = function (event) {
        this.updateModel(event, !this.checked);
      };

      InputSwitch.prototype.updateModel = function (event, value) {
        this.checked = value;
        this.onModelChange(this.checked);
        this.onChange.emit({
          originalEvent: event,
          checked: this.checked
        });
      };

      InputSwitch.prototype.onFocus = function (event) {
        this.focused = true;
      };

      InputSwitch.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
      };

      InputSwitch.prototype.writeValue = function (checked) {
        this.checked = checked;
        this.cd.markForCheck();
      };

      InputSwitch.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
      };

      InputSwitch.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
      };

      InputSwitch.prototype.setDisabledState = function (val) {
        this.disabled = val;
      };

      __decorate([core_1.Input(), __metadata("design:type", Object)], InputSwitch.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Number)], InputSwitch.prototype, "tabindex", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "inputId", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "name", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], InputSwitch.prototype, "disabled", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], InputSwitch.prototype, "readonly", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InputSwitch.prototype, "onChange", void 0);

      InputSwitch = __decorate([core_1.Component({
        selector: 'p-inputSwitch',
        template: "\n        <div [ngClass]=\"{'ui-inputswitch ui-widget': true, 'ui-inputswitch-checked': checked, 'ui-state-disabled': disabled, 'ui-inputswitch-readonly': readonly, 'ui-inputswitch-focus': focused}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event, cb)\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.tabindex]=\"tabindex\" [checked]=\"checked\" (change)=\"onInputChange($event)\"\n                        (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [disabled]=\"disabled\" />\n            </div>\n            <span class=\"ui-inputswitch-slider\"></span>\n        </div>\n    ",
        providers: [exports.INPUTSWITCH_VALUE_ACCESSOR]
      }), __metadata("design:paramtypes", [core_1.ChangeDetectorRef])], InputSwitch);
      return InputSwitch;
    }();

    exports.InputSwitch = InputSwitch;

    var InputSwitchModule =
    /** @class */
    function () {
      function InputSwitchModule() {}

      InputSwitchModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [InputSwitch],
        declarations: [InputSwitch]
      })], InputSwitchModule);
      return InputSwitchModule;
    }();

    exports.InputSwitchModule = InputSwitchModule; //# sourceMappingURL=inputswitch.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/inputswitch.js":
  /*!*********************************************!*\
    !*** ./node_modules/primeng/inputswitch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengInputswitchJs(module, exports, __webpack_require__) {
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
    /*! ./components/inputswitch/inputswitch */
    "./node_modules/primeng/components/inputswitch/inputswitch.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/tooltip.js":
  /*!*****************************************!*\
    !*** ./node_modules/primeng/tooltip.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengTooltipJs(module, exports, __webpack_require__) {
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
    /*! ./components/tooltip/tooltip */
    "./node_modules/primeng/components/tooltip/tooltip.js"));
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtSharedBrandFormBrandFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<p-dialog   [maximizable]=\"true\" [(visible)]=\"displayDialog4\" (onHide)=\"onClose()\"  [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '400px'}\">\n    <p-header>\n            <span *ngIf=\"brandForm.value._id\">Update</span>\n            <span *ngIf=\"!brandForm.value._id\">Add</span> Brand\n    </p-header>\n    \n <form [formGroup]=\"brandForm\">\n        <div class=\"ui-g ui-fluid\" >\n            \n<div class=\"ui-g-12\">\n        <div class=\"ui-g-4\">\n            <label for=\"vin\">Brand Code</label>\n        </div>\n        <div class=\"ui-g-8\">\n            <input type=\"text\" pInputText formControlName=\"brand_code\"  disabled />\n        </div>\n    </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Brand Name</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"vin\" formControlName=\"brand_name\" autofocus />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"brand\">Status</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n    \n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!brandForm.value._id\" (click)=\"addbrand()\" label=\"Add\"></button>\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"brandForm.value._id\" (click)=\"updatebrand()\" label=\"Update\"></button>\n            </div>\n        </p-footer>\n    </form> \n    </p-dialog>";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtSharedBrandFormBrandFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zaGFyZWQvYnJhbmQtZm9ybS9icmFuZC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BrandFormComponent */

  /***/
  function srcAppComponentInventoryMngtSharedBrandFormBrandFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandFormComponent", function () {
      return BrandFormComponent;
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


    var src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/brand.service */
    "./src/app/shared/brand.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);

    var BrandFormComponent = /*#__PURE__*/function () {
      function BrandFormComponent(_fb, brandService, commonService, sessionService, messageService) {
        _classCallCheck(this, BrandFormComponent);

        this._fb = _fb;
        this.brandService = brandService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.displayChangeEvent4 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.brandEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.brandList = [];
        this.status = [{
          label: 'Active',
          value: 1
        }, {
          label: 'De-Active',
          value: 0
        }];
        this.brandForm = this._fb.group({
          _id: [''],
          company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          brand_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          brand_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(BrandFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log('displayDialog4', this.displayDialog4);
          console.log('isObjectbrandData', lodash__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"](this.brandData));

          if (lodash__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"](this.brandData)) {
            console.log('brandData', this.brandData);
            this.brandForm.controls['_id'].setValue(this.brandData._id);
            this.brandForm.controls['brand_code'].setValue(this.brandData.brand_code);
            this.brandForm.controls['brand_name'].setValue(this.brandData.brand_name);
            this.brandForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
            this.brandForm.controls['status'].setValue(this.brandData.status);
          } else {
            this.getbrandByCompany();
          }
        }
      }, {
        key: "getbrandByCompany",
        value: function getbrandByCompany() {
          var _this = this;

          this.brandService.getBrandByCompany().subscribe(function (data) {
            console.log('brandList', data);
            _this.brandList = data;

            _this.brandForm.reset();

            _this.brandForm.controls['brand_code'].setValue(_this.commonService.incrCode('c', data.length));

            _this.brandForm.controls['status'].setValue(1);

            _this.brandForm.controls['company_details_id'].setValue(_this.sessionService.getItem('company_id'));
          });
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          var _this2 = this;

          Object.keys(this.brandForm.controls).forEach(function (key) {
            _this2.brandForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "addbrand",
        value: function addbrand() {
          var _this3 = this;

          console.log('brandForm', this.brandForm);

          if (this.brandForm.invalid) {
            this.checkValidity();
            return;
          }

          this.brandService.addBrand(this.brandForm.value).subscribe(function (data) {
            console.log('add cat', data); // let newData = {
            //   label : data.brand_name +' | ' +data.brand_code,
            //   value : data._id
            //  }

            _this3.brandEvent.emit(data); // this.brandList = [newData,...this.brandList];
            // this.brandList.push(data);
            // console.log('this.brandList',this.brandList);


            _this3.messageService.add({
              severity: 'success',
              summary: 'New Brand Added Successfully',
              detail: 'New brand Added Successfully'
            }); // this.stockForm.controls['brand_details_id'].setValue(data._id) 


            _this3.displayDialog4 = false;
          }, function (error) {
            console.log(error);

            _this3.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });

            _this3.displayDialog4 = false;
          });
        }
      }, {
        key: "updatebrand",
        value: function updatebrand() {
          var _this4 = this;

          console.log('brandForm', this.brandForm);

          if (this.brandForm.invalid) {
            this.checkValidity();
            return;
          }

          this.brandService.updateBrand(this.brandForm.value).subscribe(function (data) {
            console.log('update cat', data); // let newData = {
            //   label : data.brand_name +' | ' +data.brand_code,
            //   value : data._id
            //  }

            _this4.brandEvent.emit(data); // this.brandList = [newData,...this.brandList];
            // this.brandList.push(data);
            // console.log('this.brandList',this.brandList);


            _this4.messageService.add({
              severity: 'success',
              summary: 'brand Updated Successfully',
              detail: 'brand Updated Successfully'
            }); // this.stockForm.controls['brand_details_id'].setValue(data._id) 


            _this4.displayDialog4 = false;
          }, function (error) {
            console.log(error);

            _this4.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });

            _this4.displayDialog4 = false;
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          // this.displayDialog = false;
          this.displayChangeEvent4.emit(false);
        } // Work against memory leak if component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.displayChangeEvent4.unsubscribe();
        }
      }]);

      return BrandFormComponent;
    }();

    BrandFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_3__["BrandService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BrandFormComponent.prototype, "brandData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], BrandFormComponent.prototype, "displayDialog4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BrandFormComponent.prototype, "displayChangeEvent4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BrandFormComponent.prototype, "brandEvent", void 0);
    BrandFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brand-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./brand-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./brand-form.component.scss */
      "./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_3__["BrandService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])], BrandFormComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/brand-form/brand-form.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/brand-form/brand-form.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: BrandFormModule */

  /***/
  function srcAppComponentInventoryMngtSharedBrandFormBrandFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandFormModule", function () {
      return BrandFormModule;
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


    var _brand_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./brand-form.component */
    "./src/app/component/inventory-mngt/shared/brand-form/brand-form.component.ts");
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

    var BrandFormModule = function BrandFormModule() {
      _classCallCheck(this, BrandFormModule);
    };

    BrandFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_brand_form_component__WEBPACK_IMPORTED_MODULE_3__["BrandFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"]],
      exports: [_brand_form_component__WEBPACK_IMPORTED_MODULE_3__["BrandFormComponent"]]
    })], BrandFormModule);
    /***/
  }
}]);
//# sourceMappingURL=default~brand-master-brand-master-module~stock-master-stock-master-module-es5.js.map