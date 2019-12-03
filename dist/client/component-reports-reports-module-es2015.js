(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/purchase-report/purchase-report.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/purchase-report/purchase-report.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  purchase-report works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/reports.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/reports.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/sales-report/sales-report.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/sales-report/sales-report.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  sales-report works!\n</p>\n<div id=\"reportrange\" style=\"background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%\">\n    <i class=\"fa fa-calendar\"></i>&nbsp;\n    <span></span> <i class=\"fa fa-caret-down\"></i>\n</div>");

/***/ }),

/***/ "./src/app/component/reports/purchase-report/purchase-report.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/component/reports/purchase-report/purchase-report.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXBvcnRzL3B1cmNoYXNlLXJlcG9ydC9wdXJjaGFzZS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/reports/purchase-report/purchase-report.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/reports/purchase-report/purchase-report.component.ts ***!
  \********************************************************************************/
/*! exports provided: PurchaseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseReportComponent", function() { return PurchaseReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PurchaseReportComponent = class PurchaseReportComponent {
    constructor() { }
    ngOnInit() {
    }
};
PurchaseReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/purchase-report/purchase-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-report.component.scss */ "./src/app/component/reports/purchase-report/purchase-report.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PurchaseReportComponent);



/***/ }),

/***/ "./src/app/component/reports/reports-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/reports/reports-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-report/sales-report.component */ "./src/app/component/reports/sales-report/sales-report.component.ts");
/* harmony import */ var _purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-report/purchase-report.component */ "./src/app/component/reports/purchase-report/purchase-report.component.ts");





const routes = [
    { path: '', redirectTo: 'sales-report', pathMatch: 'full' },
    { path: 'sales-report', component: _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_3__["SalesReportComponent"] },
    { path: 'purchase-report', component: _purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseReportComponent"] }
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReportsRoutingModule);



/***/ }),

/***/ "./src/app/component/reports/reports.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/reports/reports.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/reports/reports.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/reports/reports.component.ts ***!
  \********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportsComponent = class ReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/component/reports/reports.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReportsComponent);



/***/ }),

/***/ "./src/app/component/reports/reports.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/reports/reports.module.ts ***!
  \*****************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/component/reports/reports-routing.module.ts");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports.component */ "./src/app/component/reports/reports.component.ts");
/* harmony import */ var _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-report/sales-report.component */ "./src/app/component/reports/sales-report/sales-report.component.ts");
/* harmony import */ var _purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-report/purchase-report.component */ "./src/app/component/reports/purchase-report/purchase-report.component.ts");







let ReportsModule = class ReportsModule {
};
ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"], _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_5__["SalesReportComponent"], _purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"]
        ]
    })
], ReportsModule);



/***/ }),

/***/ "./src/app/component/reports/sales-report/sales-report.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/component/reports/sales-report/sales-report.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXBvcnRzL3NhbGVzLXJlcG9ydC9zYWxlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/reports/sales-report/sales-report.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/reports/sales-report/sales-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: SalesReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportComponent", function() { return SalesReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let SalesReportComponent = class SalesReportComponent {
    constructor() { }
    ngOnInit() {
        $(function () {
            var start = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days');
            var end = moment__WEBPACK_IMPORTED_MODULE_2__();
            function cb(start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
            $('#reportrange').daterangepicker({
                startDate: start,
                endDate: end,
                ranges: {
                    'Today': [moment__WEBPACK_IMPORTED_MODULE_2__(), moment__WEBPACK_IMPORTED_MODULE_2__()],
                    'Yesterday': [moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days')],
                    'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_2__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_2__()],
                    'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_2__()],
                    'This Month': [moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_2__().endOf('month')],
                    'Last Month': [moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'month').endOf('month')]
                }
            }, cb);
            cb(start, end);
        });
    }
};
SalesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reports/sales-report/sales-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-report.component.scss */ "./src/app/component/reports/sales-report/sales-report.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SalesReportComponent);



/***/ })

}]);
//# sourceMappingURL=component-reports-reports-module-es2015.js.map