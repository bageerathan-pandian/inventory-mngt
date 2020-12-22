function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchase-return-report-purchase-return-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtReportsPurchaseReturnReportPurchaseReturnReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>purchase-return-report works!</p>\r\n\r\n<form [formGroup]=\"myForm\" (ngSubmit)=\"add()\">\r\n    <input type=\"text\" pInputText formControlName=\"name\">\r\n    <span *ngIf=\"!myForm.controls['name'].valid&&myForm.controls['name'].dirty\">Name required</span>\r\n    <input type=\"text\" pInputText formControlName=\"age\">\r\n    <span *ngIf=\"!myForm.controls['age'].valid&&myForm.controls['age'].dirty\">age required</span>\r\n\r\n    <div *ngFor=\"let data of hopiesList\">\r\n        <input type=\"checkbox\" (change)=\"onChange(data, $event.target.checked)\"> {{data.name}}<br>\r\n    </div>\r\n    <span *ngIf=\"!myForm.controls['hoppies'].valid&&myForm.controls['hoppies'].dirty\">hoppies required</span>\r\n\r\n    <div *ngFor=\"let item of colorsArrayList.controls; let i=index\" formArrayName=\"colors\">\r\n        <div [formGroupName]=\"i\">\r\n            <input type=\"text\" pInputText formControlName=\"colorName\" placeholder=\"enter name\">\r\n            <span *ngIf=\"!item.controls['colorName'].valid&&item.controls['colorName'].dirty\">name required</span>\r\n\r\n            <a *ngIf=\"i==0\" (click)=\"addArray()\" title=\"add\">\r\n                <i class=\"fa fa-plus\"></i>\r\n            </a>\r\n            <a *ngIf=\"i!==0\" (click)=\"removeArray(i)\" title=\"Delete\"><i class=\"fa fa-trash\"></i>\r\n            </a>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <input type=\"submit\" value=\"add\">\r\n</form>";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report-routing.module.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report-routing.module.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: PurchaseReturnReportRoutingModule */

  /***/
  function srcAppComponentInventoryMngtReportsPurchaseReturnReportPurchaseReturnReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseReturnReportRoutingModule", function () {
      return PurchaseReturnReportRoutingModule;
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


    var _purchase_return_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./purchase-return-report.component */
    "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.ts");

    var routes = [{
      path: '',
      component: _purchase_return_report_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseReturnReportComponent"]
    }];

    var PurchaseReturnReportRoutingModule = function PurchaseReturnReportRoutingModule() {
      _classCallCheck(this, PurchaseReturnReportRoutingModule);
    };

    PurchaseReturnReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PurchaseReturnReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtReportsPurchaseReturnReportPurchaseReturnReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9yZXBvcnRzL3B1cmNoYXNlLXJldHVybi1yZXBvcnQvcHVyY2hhc2UtcmV0dXJuLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: PurchaseReturnReportComponent */

  /***/
  function srcAppComponentInventoryMngtReportsPurchaseReturnReportPurchaseReturnReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseReturnReportComponent", function () {
      return PurchaseReturnReportComponent;
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


    var _purchase_return_report_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./purchase-return-report.models */
    "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.models.ts");

    var PurchaseReturnReportComponent = /*#__PURE__*/function () {
      function PurchaseReturnReportComponent(_fb) {
        _classCallCheck(this, PurchaseReturnReportComponent);

        this._fb = _fb;
        this.hopiesList = [{
          id: 1,
          name: 'cricket'
        }, {
          id: 2,
          name: 'baskat'
        }, {
          id: 3,
          name: 'running'
        }];
      }

      _createClass(PurchaseReturnReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.creatForm();
        }
      }, {
        key: "creatForm",
        value: function creatForm() {
          var _this = this;

          var purchaseReturnReportModel = new _purchase_return_report_models__WEBPACK_IMPORTED_MODULE_3__["PurchaseReturnReportModel"]();
          this.myForm = this._fb.group({
            hoppies: this._fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            colors: this._fb.array([])
          });
          Object.keys(purchaseReturnReportModel).forEach(function (key) {
            _this.myForm.addControl(key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](purchaseReturnReportModel[key], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
          });
          this.colorsArrayList.push(this.createArrayListModel());
        }
      }, {
        key: "createArrayListModel",
        value: function createArrayListModel(colorsListModel) {
          var collersListFormControlModel = new _purchase_return_report_models__WEBPACK_IMPORTED_MODULE_3__["ColorsListModel"](colorsListModel);
          var formControls = {};
          Object.keys(collersListFormControlModel).forEach(function (key) {
            formControls[key] = [{
              value: collersListFormControlModel[key],
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]];
          });
          return this._fb.group(formControls);
        }
      }, {
        key: "createArray1ListModel",
        value: function createArray1ListModel(data) {
          var formControls = {};
          Object.keys(data).forEach(function (key) {
            formControls[key] = [{
              value: data[key],
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]];
          });
          return this._fb.group(formControls);
        }
      }, {
        key: "addArray",
        value: function addArray() {
          this.colorsArrayList.insert(0, this.createArrayListModel());
        }
      }, {
        key: "removeArray",
        value: function removeArray(i) {
          this.colorsArrayList.removeAt(i);
        }
      }, {
        key: "onChange",
        value: function onChange(data, isChecked) {
          if (isChecked) {
            this.hoppiesArrayList.push(this.createArray1ListModel(data)); // this.hoppiesArrayList.push(new FormControl(data));
          } else {
            var index = this.hoppiesArrayList.controls.findIndex(function (x) {
              return x == data;
            });
            this.hoppiesArrayList.removeAt(index);
          }
        }
      }, {
        key: "add",
        value: function add() {
          var _this2 = this;

          this.myForm;

          if (this.myForm.invalid) {
            Object.keys(this.myForm.controls).forEach(function (key) {
              _this2.myForm.controls[key].markAsDirty();
            });
            return;
          }
        }
      }, {
        key: "colorsArrayList",
        get: function get() {
          return this.myForm.get('colors');
        }
      }, {
        key: "hoppiesArrayList",
        get: function get() {
          return this.myForm.get('hoppies');
        }
      }]);

      return PurchaseReturnReportComponent;
    }();

    PurchaseReturnReportComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    PurchaseReturnReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-purchase-return-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./purchase-return-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./purchase-return-report.component.scss */
      "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], PurchaseReturnReportComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.models.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.models.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: PurchaseReturnReportModel, ColorsListModel */

  /***/
  function srcAppComponentInventoryMngtReportsPurchaseReturnReportPurchaseReturnReportModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseReturnReportModel", function () {
      return PurchaseReturnReportModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorsListModel", function () {
      return ColorsListModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PurchaseReturnReportModel = function PurchaseReturnReportModel(purchaseReturnReportModel) {
      _classCallCheck(this, PurchaseReturnReportModel);

      this.name = purchaseReturnReportModel ? purchaseReturnReportModel.name : '';
      this.age = purchaseReturnReportModel ? purchaseReturnReportModel.age : '';
      this.hoppies = purchaseReturnReportModel ? purchaseReturnReportModel.hoppies : [];
    };

    var ColorsListModel = function ColorsListModel(colorsListModel) {
      _classCallCheck(this, ColorsListModel);

      this.colorName = colorsListModel ? colorsListModel.colorName : '';
    };
    /***/

  },

  /***/
  "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: PurchaseReturnReportModule */

  /***/
  function srcAppComponentInventoryMngtReportsPurchaseReturnReportPurchaseReturnReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseReturnReportModule", function () {
      return PurchaseReturnReportModule;
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


    var _purchase_return_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./purchase-return-report.component */
    "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report.component.ts");
    /* harmony import */


    var _purchase_return_report_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./purchase-return-report-routing.module */
    "./src/app/component/inventory-mngt/reports/purchase-return-report/purchase-return-report-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var PurchaseReturnReportModule = function PurchaseReturnReportModule() {
      _classCallCheck(this, PurchaseReturnReportModule);
    };

    PurchaseReturnReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_purchase_return_report_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseReturnReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _purchase_return_report_routing_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseReturnReportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
    })], PurchaseReturnReportModule);
    /***/
  }
}]);
//# sourceMappingURL=purchase-return-report-purchase-return-report-module-es5.js.map