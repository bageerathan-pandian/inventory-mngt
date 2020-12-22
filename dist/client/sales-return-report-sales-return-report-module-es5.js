function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-return-report-sales-return-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtReportsSalesReturnReportSalesReturnReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>sales-return-report works!</p>\r\n";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report-routing.module.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report-routing.module.ts ***!
    \************************************************************************************************************/

  /*! exports provided: SalesReturnReportRoutingModule */

  /***/
  function srcAppComponentInventoryMngtReportsSalesReturnReportSalesReturnReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesReturnReportRoutingModule", function () {
      return SalesReturnReportRoutingModule;
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


    var _sales_return_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales-return-report.component */
    "./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.ts");

    var routes = [{
      path: '',
      component: _sales_return_report_component__WEBPACK_IMPORTED_MODULE_3__["SalesReturnReportComponent"]
    }];

    var SalesReturnReportRoutingModule = function SalesReturnReportRoutingModule() {
      _classCallCheck(this, SalesReturnReportRoutingModule);
    };

    SalesReturnReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SalesReturnReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtReportsSalesReturnReportSalesReturnReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9yZXBvcnRzL3NhbGVzLXJldHVybi1yZXBvcnQvc2FsZXMtcmV0dXJuLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: SalesReturnReportComponent */

  /***/
  function srcAppComponentInventoryMngtReportsSalesReturnReportSalesReturnReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesReturnReportComponent", function () {
      return SalesReturnReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SalesReturnReportComponent = /*#__PURE__*/function () {
      function SalesReturnReportComponent() {
        _classCallCheck(this, SalesReturnReportComponent);
      }

      _createClass(SalesReturnReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SalesReturnReportComponent;
    }();

    SalesReturnReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sales-return-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sales-return-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sales-return-report.component.scss */
      "./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SalesReturnReportComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: SalesReturnReportModule */

  /***/
  function srcAppComponentInventoryMngtReportsSalesReturnReportSalesReturnReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesReturnReportModule", function () {
      return SalesReturnReportModule;
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


    var _sales_return_report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales-return-report-routing.module */
    "./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report-routing.module.ts");
    /* harmony import */


    var _sales_return_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sales-return-report.component */
    "./src/app/component/inventory-mngt/reports/sales-return-report/sales-return-report.component.ts");

    var SalesReturnReportModule = function SalesReturnReportModule() {
      _classCallCheck(this, SalesReturnReportModule);
    };

    SalesReturnReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sales_return_report_component__WEBPACK_IMPORTED_MODULE_4__["SalesReturnReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sales_return_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalesReturnReportRoutingModule"]]
    })], SalesReturnReportModule);
    /***/
  }
}]);
//# sourceMappingURL=sales-return-report-sales-return-report-module-es5.js.map