(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-e-commerce-company-company-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/e-commerce/company/company.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/e-commerce/company/company.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>company works!</p>\r\n");

/***/ }),

/***/ "./src/app/component/e-commerce/company/company-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/e-commerce/company/company-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.component */ "./src/app/component/e-commerce/company/company.component.ts");




const routes = [{ path: '', component: _company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"] }];
let CompanyRoutingModule = class CompanyRoutingModule {
};
CompanyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompanyRoutingModule);



/***/ }),

/***/ "./src/app/component/e-commerce/company/company.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/component/e-commerce/company/company.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9lLWNvbW1lcmNlL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/e-commerce/company/company.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/e-commerce/company/company.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyComponent = class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/e-commerce/company/company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.scss */ "./src/app/component/e-commerce/company/company.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CompanyComponent);



/***/ }),

/***/ "./src/app/component/e-commerce/company/company.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/e-commerce/company/company.module.ts ***!
  \****************************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/component/e-commerce/company/company-routing.module.ts");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company.component */ "./src/app/component/e-commerce/company/company.component.ts");





let CompanyModule = class CompanyModule {
};
CompanyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _company_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyRoutingModule"]
        ]
    })
], CompanyModule);



/***/ })

}]);
//# sourceMappingURL=component-e-commerce-company-company-module-es2015.js.map