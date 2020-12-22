(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-inventory-mngt-purchase-purchase-purchase-module~component-inventory-mngt-sales-sa~35e485d3"],{

/***/ "./node_modules/primeng/components/inputtextarea/inputtextarea.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/inputtextarea/inputtextarea.js ***!
  \************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var InputTextarea = /** @class */ (function () {
    function InputTextarea(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
        this.onResize = new core_1.EventEmitter();
    }
    InputTextarea.prototype.ngDoCheck = function () {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputTextarea.prototype.onInput = function (e) {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    };
    InputTextarea.prototype.onFocus = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.onBlur = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.resize = function (event) {
        this.el.nativeElement.style.height = 'auto';
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = "scroll";
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = "hidden";
        }
        this.onResize.emit(event || {});
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InputTextarea.prototype, "autoResize", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputTextarea.prototype, "onResize", void 0);
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onInput", null);
    __decorate([
        core_1.HostListener('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onBlur", null);
    InputTextarea = __decorate([
        core_1.Directive({
            selector: '[pInputTextarea]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-inputtextarea-resizable]': 'autoResize',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, forms_1.NgModel])
    ], InputTextarea);
    return InputTextarea;
}());
exports.InputTextarea = InputTextarea;
var InputTextareaModule = /** @class */ (function () {
    function InputTextareaModule() {
    }
    InputTextareaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputTextarea],
            declarations: [InputTextarea]
        })
    ], InputTextareaModule);
    return InputTextareaModule;
}());
exports.InputTextareaModule = InputTextareaModule;
//# sourceMappingURL=inputtextarea.js.map

/***/ }),

/***/ "./node_modules/primeng/inputtextarea.js":
/*!***********************************************!*\
  !*** ./node_modules/primeng/inputtextarea.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtextarea/inputtextarea */ "./node_modules/primeng/components/inputtextarea/inputtextarea.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-dialog [(visible)]=\"displayDialog\" [maximizable]=\"true\" (onHide)=\"onClose()\" [responsive]=\"true\" showEffect=\"fade\"\r\n    [resizable]=\"false\" [modal]=\"true\" [style]=\"{width: '700px'}\">\r\n    <p-header>\r\n        <span *ngIf=\"stockForm.value._id\">Update</span>\r\n        <span *ngIf=\"!stockForm.value._id\">Add</span> Stock\r\n    </p-header>\r\n    <form [formGroup]=\"stockForm\">\r\n        <div class=\"ui-g ui-fluid\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Stock Code</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <input type=\"text\" pInputText formControlName=\"stock_code\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Stock Name</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <input type=\"text\" pInputText formControlName=\"stock_name\" autofocus />\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Brand Name</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <p-dropdown [options]=\"brandList\" placeholder=\"Select Company\" filter=\"true\"\r\n                                formControlName=\"brand_details_id\" [showClear]=\"true\" (onChange)=\"onSelectBrand($event)\">\r\n                            </p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Category</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <p-dropdown [options]=\"categoryList\" placeholder=\"Select Category\" filter=\"true\"\r\n                                formControlName=\"category_details_id\" [showClear]=\"true\"\r\n                                (onChange)=\"onSelectCat($event)\">\r\n                            </p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"year\">Qty</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <!-- <input type=\"text\" pKeyFilter=\"int\" pInputText formControlName=\"stock_qty\" /> -->\r\n                            <p-spinner size=\"30\" formControlName=\"stock_qty\" [min]=\"1\" [formatInput]=\"true\"\r\n                                [disabled]=\"formType == 'purchase' ? true : false\"></p-spinner>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Unit</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <p-dropdown [options]=\"unitList\" placeholder=\"Select Unit\" filter=\"true\"\r\n                                formControlName=\"unit_details_id\" [showClear]=\"true\" (onChange)=\"onSelectUnit($event)\">\r\n                            </p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-12\">\r\n                            <p-checkbox label=\"Buying Price (With Tax)\" binary=\"true\" formControlName=\"buying_with_tax\"></p-checkbox>\r\n                        </div>\r\n                    </div> -->\r\n\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    \r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"year\">Buying Price</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8 hidden-spinner\">\r\n                            <!-- <input type=\"text\" pKeyFilter=\"int\" pInputText formControlName=\"buying_price\" /> -->\r\n                            <p-spinner size=\"30\" formControlName=\"buying_price\" [min]=\"1\" [step]=\"0.25\" [formatInput]=\"true\">\r\n                            </p-spinner>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"year\">MRP</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8 hidden-spinner\">\r\n                            <!-- <input type=\"text\" pKeyFilter=\"int\" pInputText formControlName=\"selling_price\" /> -->\r\n                            <p-spinner formControlName=\"mrp\" [min]=\"1\" [step]=\"0.25\" [formatInput]=\"true\"></p-spinner>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"year\">Selling Price</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8 hidden-spinner\">\r\n                            <!-- <input type=\"text\" pKeyFilter=\"int\" pInputText formControlName=\"selling_price\" /> -->\r\n                            <p-spinner formControlName=\"selling_price\" [min]=\"1\" [max]=\"stockForm.get('mrp').value\" [step]=\"0.25\" [formatInput]=\"true\"></p-spinner>\r\n\r\n                        </div>\r\n                    </div>\r\n                   \r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Tax %</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <p-dropdown [options]=\"taxList\" placeholder=\"Select Tax\" filter=\"true\"\r\n                                formControlName=\"tax_details_id\" [showClear]=\"true\" (onChange)=\"onSelectTax($event)\">\r\n                            </p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"year\">Details</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <!-- <input type=\"text\" pInputText [(ngModel)]=\"car.product_details\" /> -->\r\n                            <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea autoResize=\"false\"\r\n                                formControlName=\"product_details\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                \r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"brand\">Status</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\">\r\n                            </p-dropdown>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\r\n                <button type=\"button\" pButton icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!stockForm.value._id\"\r\n                    (click)=\"save()\" label=\"Add\"></button>\r\n                <button type=\"button\" pButton icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"stockForm.value._id\"\r\n                    (click)=\"save()\" label=\"Update\"></button>\r\n            </div>\r\n        </p-footer>\r\n    </form>\r\n</p-dialog>");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zaGFyZWQvc3RvY2stZm9ybS9zdG9jay1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: StockFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockFormComponent", function() { return StockFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/stock.service */ "./src/app/shared/stock.service.ts");
/* harmony import */ var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/category.service */ "./src/app/shared/category.service.ts");
/* harmony import */ var src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/unit.service */ "./src/app/shared/unit.service.ts");
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/tax.service */ "./src/app/shared/tax.service.ts");
/* harmony import */ var src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/brand.service */ "./src/app/shared/brand.service.ts");












let StockFormComponent = class StockFormComponent {
    constructor(_fb, stockService, categoryService, taxService, unitService, commonService, sessionService, messageService, brandService) {
        this._fb = _fb;
        this.stockService = stockService;
        this.categoryService = categoryService;
        this.taxService = taxService;
        this.unitService = unitService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.brandService = brandService;
        this.stockEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.categoryDialogEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.taxDialogEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unitDialogEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.brandDialogEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.car = {};
        this.status = [];
        this.stocksList = [];
        this.categoryList = [];
        this.taxList = [];
        this.stockListSheet = [];
        this.unitList = [];
        this.brandList = [];
        this.getStocksByCompany();
        this.getCategoryByCompany();
        this.getTaxByCompany();
        this.getUnitByCompany();
        this.getBrandByCompany();
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.stockForm = this._fb.group({
            _id: [''],
            company_details_id: [this.sessionService.getItem('company_id') ? this.sessionService.getItem('company_id') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stock_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stock_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brand_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tax_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stock_qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            buying_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            buying_with_tax: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selling_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            product_details: [''],
            unit_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() { }
    ngOnChanges() {
        console.log('displayDialog', this.displayDialog);
        console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.catData));
        if (lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.catData)) {
            console.log('catData', this.catData);
            this.getCategoryByCompany();
            setTimeout(() => {
                this.stockForm.controls['category_details_id'].setValue(this.catData.value ? this.catData.value : null);
            }, 1000);
        }
        console.log('isObjectbrandData', lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.brandData));
        if (lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.brandData)) {
            console.log('brandData', this.brandData);
            this.getBrandByCompany();
            setTimeout(() => {
                this.stockForm.controls['brand_details_id'].setValue(this.brandData.value ? this.brandData.value : null);
            }, 1000);
        }
        console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.taxData));
        if (lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.taxData)) {
            console.log('catData', this.taxData);
            this.getTaxByCompany();
            setTimeout(() => {
                this.stockForm.controls['tax_details_id'].setValue(this.taxData.value ? this.taxData.value : null);
            }, 1000);
        }
        console.log('isObjectunitData', lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.unitData));
        if (lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.unitData)) {
            console.log('unitData', this.unitData);
            this.getUnitByCompany();
            setTimeout(() => {
                this.stockForm.controls['unit_details_id'].setValue(this.unitData.value ? this.unitData.value : null);
            }, 1000);
        }
        console.log('isObjectstockData', lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.stockData));
        if (lodash__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"](this.stockData)) {
            console.log('stockData', this.stockData);
            this.stockForm.controls['_id'].setValue(this.stockData._id ? this.stockData._id : '');
            this.stockForm.controls['stock_code'].setValue(this.stockData.stock_code ? this.stockData.stock_code : '');
            this.stockForm.controls['stock_name'].setValue(this.stockData.stock_name ? this.stockData.stock_name : '');
            this.stockForm.controls['category_details_id'].setValue(this.stockData.category_details_id ? this.stockData.category_details_id._id : null);
            this.stockForm.controls['brand_details_id'].setValue(this.stockData.brand_details_id ? this.stockData.brand_details_id._id : null);
            this.stockForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
            this.stockForm.controls['stock_qty'].setValue(this.stockData.stock_qty ? this.stockData.stock_qty : '');
            this.stockForm.controls['buying_price'].setValue(this.stockData.buying_price ? this.stockData.buying_price : '');
            this.stockForm.controls['mrp'].setValue(this.stockData.mrp ? this.stockData.mrp : '');
            this.stockForm.controls['buying_with_tax'].setValue(this.stockData.buying_with_tax ? this.stockData.buying_with_tax : false);
            this.stockForm.controls['selling_price'].setValue(this.stockData.selling_price ? this.stockData.selling_price : '');
            this.stockForm.controls['tax_details_id'].setValue(this.stockData.tax_details_id ? this.stockData.tax_details_id._id : null);
            this.stockForm.controls['unit_details_id'].setValue(this.stockData.unit_details_id ? this.stockData.unit_details_id._id : null);
            this.stockForm.controls['status'].setValue(this.stockData.status ? this.stockData.status : 1);
        }
        else {
            this.getStocksByCompany();
            // this.stockForm.reset() 
            // this.stockForm.controls['stock_code'].setValue(this.commonService.incrCode('s',this.stocksList.length));
            // this.stockForm.controls['status'].setValue(1);
            // this.stockForm.controls['buying_with_tax'].setValue(false);
            // this.stockForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        }
        if (this.formType == 'purchase') {
            this.stockForm.controls['stock_qty'].setValue(0);
        }
        else {
        }
    }
    getStocksByCompany() {
        this.stockService.getStockByCompany()
            .subscribe((data) => {
            console.log('stocksList', data);
            this.stocksList = data;
            this.stockForm.controls['stock_code'].setValue(this.commonService.incrCode('s', this.stocksList.length));
        });
    }
    getCategoryByCompany() {
        this.categoryList = [];
        this.categoryService.getCategoryByCompany()
            .subscribe((data) => {
            console.log('categoryList', data);
            this.categoryList.push({ label: '+ Add New Category', value: 0 });
            for (let catData of data) {
                this.categoryList.push({
                    label: catData.category_name + ' | ' + catData.category_code,
                    value: catData._id
                });
            }
            console.log('categoryList1', this.categoryList);
            // if(_.some(this.catData, _.isObject)){ 
            //   this.stockForm.controls['category_details_id'].setValue(this.stockData.category_details_id  ? this.stockData.category_details_id._id : null);
            // }
        });
    }
    getBrandByCompany() {
        this.brandList = [];
        this.brandService.getBrandByCompany()
            .subscribe((data) => {
            console.log('brandList', data);
            this.brandList.push({ label: '+ Add New Brand', value: 0 });
            for (let brnadData of data) {
                this.brandList.push({
                    label: brnadData.brand_name + ' | ' + brnadData.brand_code,
                    value: brnadData._id
                });
            }
            console.log('brandList', this.brandList);
            // if(_.some(this.catData, _.isObject)){ 
            //   this.stockForm.controls['category_details_id'].setValue(this.stockData.category_details_id  ? this.stockData.category_details_id._id : null);
            // }
        });
    }
    getTaxByCompany() {
        this.taxList = [];
        this.taxService.getTaxByCompany()
            .subscribe((data) => {
            this.taxList.push({ label: '+ Add New Tax', value: 0 });
            for (let taxData of data) {
                this.taxList.push({
                    label: taxData.tax_name + ' | ' + taxData.tax_code,
                    value: taxData._id
                });
            }
            console.log('taxList', this.taxList);
            // if(_.some(this.catData, _.isObject)){ 
            //   this.stockForm.controls['category_details_id'].setValue(this.stockData.category_details_id  ? this.stockData.category_details_id._id : null);
            // }
        });
    }
    getUnitByCompany() {
        this.unitList = [];
        this.unitService.getUnitByCompany()
            .subscribe((data) => {
            console.log('unitList', data);
            this.unitList.push({ label: '+ Add New Unit', value: 0 });
            for (let unitData of data) {
                this.unitList.push({
                    label: unitData.unit_name + ' | ' + unitData.unit_code,
                    value: unitData._id
                });
            }
            console.log('unitList', this.unitList);
            // if(_.some(this.unitData, _.isObject)){ 
            //   this.stockForm.controls['unit_details_id'].setValue(this.stockData.unit_details_id  ? this.stockData.unit_details_id._id : null);
            // }
        });
    }
    onSelectCat(event) {
        console.log(event.value);
        if (event.value == 0) {
            // this.showDialogToAddCat()
            this.categoryDialogEvent.emit(true);
            this.stockForm.controls['category_details_id'].reset();
            return false;
        }
    }
    onSelectBrand(event) {
        console.log(event.value);
        if (event.value == 0) {
            // this.showDialogToAddCat()
            this.brandDialogEvent.emit(true);
            this.stockForm.controls['brand_details_id'].reset();
            return false;
        }
    }
    onSelectTax(event) {
        console.log(event.value);
        if (event.value == 0) {
            // this.showDialogToAddCat()
            this.taxDialogEvent.emit(true);
            this.stockForm.controls['tax_details_id'].reset();
            return false;
        }
    }
    onSelectUnit(event) {
        console.log(event.value);
        if (event.value == 0) {
            // this.showDialogToAddUnit()      
            this.unitDialogEvent.emit(true);
            this.stockForm.controls['unit_details_id'].reset();
            return false;
        }
    }
    checkValidity() {
        Object.keys(this.stockForm.controls).forEach((key) => {
            this.stockForm.controls[key].markAsDirty();
        });
    }
    save() {
        console.log(this.stockForm.value);
        // this.stockEvent.emit(this.stockForm.value) 
        if (this.stockForm.invalid) {
            this.checkValidity();
            return false;
        }
        if (this.stockForm.value._id) {
            this.onRowUpdate(this.stockForm.value);
        }
        else {
            this.onRowAdd(this.stockForm.value);
        }
    }
    onRowAdd(stock) {
        console.log('onRowAdd', stock);
        console.log('onRowAdd1', this.stockForm);
        this.stockService.addStock(stock)
            .subscribe((data) => {
            console.log('add customer', data);
            this.stockEvent.emit(data);
            this.messageService.add({ severity: 'success', summary: 'Stock Added Successfully', detail: 'Stock Added Successfully' });
            this.displayDialog = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog = false;
        });
    }
    onRowUpdate(stock) {
        console.log(stock);
        this.stockService.updateStock(stock)
            .subscribe((data) => {
            console.log('update', data);
            this.stockEvent.emit(data);
            this.messageService.add({ severity: 'success', summary: 'Stock Updated Successfully', detail: 'Stock Updated Successfully' });
            this.displayDialog = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog = false;
        });
    }
    resetForm() {
        this.stockForm.reset();
        this.stockForm.controls['stock_code'].setValue(this.commonService.incrCode('s', this.stocksList.length));
        this.stockForm.controls['status'].setValue(1);
        this.stockForm.controls['buying_with_tax'].setValue(false);
        this.stockForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
    }
    onClose() {
        // this.displayDialog = false;
        this.displayChangeEvent.emit(false);
        this.resetForm();
    }
    // Work against memory leak if component is destroyed
    ngOnDestroy() {
        this.stockEvent.unsubscribe();
        this.displayChangeEvent.unsubscribe();
    }
};
StockFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"] },
    { type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
    { type: src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
    { type: src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_11__["BrandService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "stockData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "catData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "brandData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "taxData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "unitData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StockFormComponent.prototype, "formType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], StockFormComponent.prototype, "displayDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "stockEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "displayChangeEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "categoryDialogEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "taxDialogEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "unitDialogEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockFormComponent.prototype, "brandDialogEvent", void 0);
StockFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-form.component.scss */ "./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"], src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"], src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_11__["BrandService"]])
], StockFormComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/stock-form/stock-form.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/stock-form/stock-form.module.ts ***!
  \*********************************************************************************/
/*! exports provided: StockFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockFormModule", function() { return StockFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _stock_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-form.component */ "./src/app/component/inventory-mngt/shared/stock-form/stock-form.component.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/spinner */ "./node_modules/primeng/spinner.js");
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_spinner__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__);













let StockFormModule = class StockFormModule {
};
StockFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_stock_form_component__WEBPACK_IMPORTED_MODULE_3__["StockFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__["InputTextareaModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_10__["InputMaskModule"],
            primeng_spinner__WEBPACK_IMPORTED_MODULE_11__["SpinnerModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckboxModule"]
            // GooglePlaceModule
        ],
        exports: [_stock_form_component__WEBPACK_IMPORTED_MODULE_3__["StockFormComponent"]]
    })
], StockFormModule);



/***/ }),

/***/ "./src/app/shared/brand.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/brand.service.ts ***!
  \*****************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/session.service.ts");





let BrandService = class BrandService {
    constructor(httpClient, sessionService) {
        this.httpClient = httpClient;
        this.sessionService = sessionService;
    }
    getBrand() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand');
    }
    getBrandByCompany() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand/get-by-company/' + this.sessionService.getItem('company_id'));
    }
    addBrand(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand', body, { headers: headerOption });
    }
    updateBrand(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand/' + data._id, body, { headers: headerOption });
    }
    deleteBrand(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand/' + id);
    }
    updateStatus(status, id) {
        var body = JSON.stringify(status);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand/status-update/' + id, body, { headers: headerOption });
    }
};
BrandService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
BrandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], BrandService);



/***/ }),

/***/ "./src/app/shared/tax.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/tax.service.ts ***!
  \***************************************/
/*! exports provided: TaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxService", function() { return TaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/session.service.ts");





let TaxService = class TaxService {
    constructor(httpClient, sessionService) {
        this.httpClient = httpClient;
        this.sessionService = sessionService;
    }
    getTax() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax');
    }
    getTaxByCompany() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/get-by-company/' + this.sessionService.getItem('company_id'));
    }
    addTax(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax', body, { headers: headerOption });
    }
    updateTax(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/' + data._id, body, { headers: headerOption });
    }
    deleteTax(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/' + id);
    }
    updateStatus(status, id) {
        var body = JSON.stringify(status);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/status-update/' + id, body, { headers: headerOption });
    }
};
TaxService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
TaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], TaxService);



/***/ })

}]);
//# sourceMappingURL=default~component-inventory-mngt-purchase-purchase-purchase-module~component-inventory-mngt-sales-sa~35e485d3-es2015.js.map