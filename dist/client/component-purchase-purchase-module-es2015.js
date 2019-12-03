(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-purchase-purchase-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/purchase/purchase.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/purchase/purchase.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  purchase works!\n</p>\n");

/***/ }),

/***/ "./src/app/component/purchase/purchase-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/purchase/purchase-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PurchaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseRoutingModule", function() { return PurchaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _purchase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase.component */ "./src/app/component/purchase/purchase.component.ts");




const routes = [
    { path: '', component: _purchase_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseComponent"] }
];
let PurchaseRoutingModule = class PurchaseRoutingModule {
};
PurchaseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PurchaseRoutingModule);



/***/ }),

/***/ "./src/app/component/purchase/purchase.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/purchase/purchase.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wdXJjaGFzZS9wdXJjaGFzZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/purchase/purchase.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/purchase/purchase.component.ts ***!
  \**********************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PurchaseComponent = class PurchaseComponent {
    constructor() { }
    ngOnInit() {
    }
};
PurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/purchase/purchase.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase.component.scss */ "./src/app/component/purchase/purchase.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PurchaseComponent);



/***/ }),

/***/ "./src/app/component/purchase/purchase.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/purchase/purchase.module.ts ***!
  \*******************************************************/
/*! exports provided: PurchaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModule", function() { return PurchaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-routing.module */ "./src/app/component/purchase/purchase-routing.module.ts");
/* harmony import */ var _purchase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase.component */ "./src/app/component/purchase/purchase.component.ts");





let PurchaseModule = class PurchaseModule {
};
PurchaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_purchase_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _purchase_routing_module__WEBPACK_IMPORTED_MODULE_3__["PurchaseRoutingModule"]
        ]
    })
], PurchaseModule);



/***/ })

}]);
//# sourceMappingURL=component-purchase-purchase-module-es2015.js.map