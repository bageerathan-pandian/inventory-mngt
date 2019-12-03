(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-stock-master-stock-master-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/stock-master/stock-master.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/stock-master/stock-master.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n        <div style=\"margin-top: 15px;\">\n                <div *ngIf=\"loding\" style=\"text-align: center\">\n                        <p-progressSpinner  [style]=\"{width: '50px', height: '50px'}\"></p-progressSpinner>\n                </div>\n      <p-card *ngIf=\"!loding\" >\n<p-table  #dt   [value]=\"stocksList\"  [columns]=\"cols\" dataKey=\"_id\" [paginator]=\"true\"  [rowsPerPageOptions]=\"[10,50,100]\"  [globalFilterFields]=\"['_id','stock_name','stock_qty','buying_price','selling_price','product_details']\" [rows]=\"10\" >\n \n    <ng-template pTemplate=\"caption\">\n            <div class=\"ui-helper-clearfix\" style=\"text-align: left;width: 50%; float: left; margin-bottom: 10px;\">\n                    <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"margin-right: 0.5em;\"></button>\n                    <button type=\"button\" pButton icon=\"pi pi-file-excel\" iconPos=\"left\" label=\"EXCEL\" (click)=\"exportExcel()\" style=\"margin-right: 0.5em;\" class=\"ui-button-success\"></button>\n                    <!-- <button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"ui-button-warning\"  style=\"margin-right: 0.5em;\" ></button> -->\n                    <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"CSV - Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\"  style=\"margin-right: 0.5em;\"  ></button>\n                </div>\n        <div style=\"text-align: right\">        \n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                  <th style=\"width: 3em\">\n                          <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                      </th>\n                  <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\n                          {{col.header}}\n                          <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n\n                      </th>\n            <th style=\"width: 10%;\">\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\"  pTooltip=\"Add new stock\" tooltipPosition=\"top\"></button>\n\n            </th>\n        </tr>\n        <!-- <tr>\n            <th ></th>\n            <th *ngFor=\"let col of columns\" pResizableColumn>\n                <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt.filters[col.field]?.value\">\n            </th>            \n            <th ></th>\n        </tr> -->\n       \n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\" >\n            <tr [pSelectableRow]=\"rowData\">\n                    <td>\n                            <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n                        </td>\n                        <td>\n                                {{rowData.stock_code}}\n                          </td>\n                        <td>\n                                {{rowData._id}}\n                          </td>\n            <td>              \n                    {{rowData.stock_name}}\n            </td>\n            <td>              \n                {{rowData.category_details_id.category_name}}\n            </td>\n            <td>\n                    {{rowData.stock_qty}}\n            </td>\n            <td>\n                {{rowData.buying_price  | currency : 'INR':true}}\n        </td>\n        <td>\n            {{rowData.selling_price  | currency : 'INR':true}}\n        </td>\n        <td>\n        {{rowData.product_details}}\n        </td>\n        <td>\n                {{rowData.unit_details_id?.unit_name}}\n        </td>\n        <td>\n            {{rowData.updatedAt | date:'medium'}}\n    </td>\n        <td style=\"text-align: center\">\n            <p-inputSwitch [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event)\"></p-inputSwitch> \n            </td>\n            <td style=\"text-align:center\">\n                <button  pButton type=\"button\"  icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEdit(rowData)\" style=\"    margin: 0px 5px;\"></button>\n                <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\n                <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\n            </td>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"footer\" >\n         <tr>\n            <td colspan=\"13\" style=\"text-align: center\">\n                    There are {{stocksList?.length}} records\n            </td>\n        </tr>\n        \n    </ng-template>\n   \n\n</p-table>\n<p-dialog   [(visible)]=\"displayDialog\"  [maximizable]=\"true\"  [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\n    <p-header>\n            <span *ngIf=\"stockForm.value._id\">Update</span>\n            <span *ngIf=\"!stockForm.value._id\">Add</span> Stock\n    </p-header>\n    <form [formGroup]=\"stockForm\">\n    <div class=\"ui-g ui-fluid\" >\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Stock Code</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input type=\"text\" pInputText formControlName=\"stock_code\"  disabled />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Stock Name</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input type=\"text\" pInputText formControlName=\"stock_name\"  autofocus />\n                </div>\n            </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"vin\">Category</label>\n            </div>\n            <div class=\"ui-g-6\">\n                <p-dropdown [options]=\"categoryList\" placeholder=\"Select Category\" filter=\"true\" formControlName=\"category_details_id\" [showClear]=\"true\"></p-dropdown>\n            </div>\n            <div class=\"ui-g-2\">                \n                <p-button icon=\"pi pi-plus\" class=\"ui-button-success\" (click)=\"showDialogToAddCat()\"  pTooltip=\"Add new category\" tooltipPosition=\"top\"></p-button>\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Qty</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input type=\"text\" pKeyFilter=\"int\" pInputText formControlName=\"stock_qty\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Buying Price</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input type=\"text\" pKeyFilter=\"int\" pInputText formControlName=\"buying_price\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Selling Price</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input type=\"text\" pKeyFilter=\"int\" pInputText formControlName=\"selling_price\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Details</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <!-- <input type=\"text\" pInputText [(ngModel)]=\"car.product_details\" /> -->\n                <textarea [rows]=\"5\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\" formControlName=\"product_details\" ></textarea>\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Unit</label>\n                </div>\n                <div class=\"ui-g-6\">\n                    <p-dropdown [options]=\"unitList\" placeholder=\"Select Unit\" filter=\"true\" formControlName=\"unit_details_id\" [showClear]=\"true\"></p-dropdown>\n                </div>\n                <div class=\"ui-g-2\">                \n                    <p-button icon=\"pi pi-plus\" class=\"ui-button-success\" (click)=\"showDialogToAddUnit()\"  pTooltip=\"Add new unit\" tooltipPosition=\"top\"></p-button>\n                </div>\n            </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"brand\">Status</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n\n            </div>\n        </div>\n    </div>\n    <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n            <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n            <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\n        </div>\n    </p-footer>\n</form>\n</p-dialog>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\n        <p-footer>\n                <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \n                <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\n            </p-footer>\n        </p-confirmDialog>\n\n        <p-dialog   [maximizable]=\"true\" [(visible)]=\"displayDialog1\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\n                <p-header>\n                        <span *ngIf=\"categoryForm.value._id\">Update</span>\n                        <span *ngIf=\"!categoryForm.value._id\">Add</span> Category\n                </p-header>\n            <form [formGroup]=\"categoryForm\">\n                    <div class=\"ui-g ui-fluid\" >\n                        \n            <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">Category Code</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <input type=\"text\" pInputText formControlName=\"category_code\"  disabled />\n                    </div>\n                </div>\n                        <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"vin\">Category Name</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                <input pInputText id=\"vin\" formControlName=\"category_name\" autofocus />\n                            </div>\n                        </div>\n                        <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"brand\">Status</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n                \n                            </div>\n                        </div>\n                    </div>\n                    <p-footer>\n                        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                            <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n                            <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"addCategory()\" label=\"Save\"></button>\n                        </div>\n                    </p-footer>\n                </form>\n                </p-dialog>\n                <p-dialog  [maximizable]=\"true\" [(visible)]=\"displayDialog2\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\n                        <p-header>\n                                <span *ngIf=\"unitForm.value._id\">Update</span>\n                                <span *ngIf=\"!unitForm.value._id\">Add</span> Unit\n                        </p-header>\n                    <form [formGroup]=\"unitForm\">\n                            <div class=\"ui-g ui-fluid\" >\n                                \n                    <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"vin\">Unit Code</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                <input type=\"text\" pInputText formControlName=\"unit_code\"  disabled />\n                            </div>\n                        </div>\n                                <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"vin\">Unit Name</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                        <input pInputText id=\"vin\" formControlName=\"unit_name\" autofocus />\n                                    </div>\n                                </div>\n                                <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"brand\">Status</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                        <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n                        \n                                    </div>\n                                </div>\n                            </div>\n                            <p-footer>\n                                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                                    <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n                                    <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"addUnit()\" label=\"Save\"></button>\n                                </div>\n                            </p-footer>\n                        </form>\n                        </p-dialog>\n</p-card>\n</div>\n");

/***/ }),

/***/ "./src/app/component/stock-master/stock-master-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/stock-master/stock-master-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: StockMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMasterRoutingModule", function() { return StockMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stock_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-master.component */ "./src/app/component/stock-master/stock-master.component.ts");




const routes = [
    { path: '', component: _stock_master_component__WEBPACK_IMPORTED_MODULE_3__["StockMasterComponent"] }
];
let StockMasterRoutingModule = class StockMasterRoutingModule {
};
StockMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StockMasterRoutingModule);



/***/ }),

/***/ "./src/app/component/stock-master/stock-master.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/stock-master/stock-master.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zdG9jay1tYXN0ZXIvc3RvY2stbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/stock-master/stock-master.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/stock-master/stock-master.component.ts ***!
  \******************************************************************/
/*! exports provided: StockMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMasterComponent", function() { return StockMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/stock.service */ "./src/app/shared/stock.service.ts");
/* harmony import */ var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/category.service */ "./src/app/shared/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/unit.service */ "./src/app/shared/unit.service.ts");












let StockMasterComponent = class StockMasterComponent {
    constructor(router, _fb, auth, confirmationService, messageService, stockService, categoryService, unitService, commonService) {
        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.stockService = stockService;
        this.categoryService = categoryService;
        this.unitService = unitService;
        this.commonService = commonService;
        this.loding = true;
        this.car = {};
        this.status = [];
        this.clonedCars = {};
        this.categoryList = [];
        this.stockListSheet = [];
        this.unitList = [];
        this.bradCrum = [
            { label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/dashboard']);
                }
            },
            { label: 'Master', command: (event) => {
                    this.router.navigate(['/dashboard']);
                } },
            { label: 'Stock' },
        ];
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.getCategoryByCompany(this.auth.getUserCompanyId());
        this.getUnitByCompany(this.auth.getUserCompanyId());
        this.getStocksByCompany(this.auth.getUserCompanyId());
        this.stockForm = this._fb.group({
            _id: [''],
            company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            stock_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            stock_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            category_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            stock_qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            buying_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            selling_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            product_details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit_details_id: [''],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
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
        this.cols = [
            { field: 'stock_code', header: 'Code' },
            { field: '_id', header: 'Barcode' },
            { field: 'stock_name', header: 'Stock Name' },
            { field: 'category_details_id', header: 'Category' },
            { field: 'stock_qty', header: 'Stock Qty' },
            { field: 'buying_price', header: 'Buying Price' },
            { field: 'selling_price', header: 'Selling Price' },
            { field: 'product_details', header: 'Product Details' },
            { field: 'unit_details_id', header: 'Unit' },
            { field: 'updatedAt', header: 'Updated Date' },
            { field: 'status', header: 'Status' }
            // { field: '', header: 'Action' }
        ];
    }
    ngOnInit() { }
    getCategoryByCompany(id) {
        this.categoryService.getCategoryByCompany(id)
            .subscribe((data) => {
            console.log('categoryList', data);
            for (let catData of data) {
                this.categoryList.push({
                    label: catData.category_name + ' | ' + catData.category_code,
                    value: catData._id
                });
            }
            console.log('categoryList1', this.categoryList);
        });
    }
    getUnitByCompany(id) {
        this.unitService.getUnitByCompany(id)
            .subscribe((data) => {
            console.log('unitList', data);
            for (let unitData of data) {
                this.unitList.push({
                    label: unitData.unit_name + ' | ' + unitData.unit_code,
                    value: unitData._id
                });
            }
            console.log('unitList', this.unitList);
        });
    }
    getStocksByCompany(id) {
        this.stockService.getStockByCompany(id)
            .subscribe((data) => {
            console.log('stocksList', data);
            this.stocksList = data;
            this.loding = false;
            for (let sheetData of data) {
                this.stockListSheet.push({
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
                    'Status': sheetData.status
                    // ''  : sheetData.status
                });
            }
        });
    }
    showDialogToAdd() {
        this.stockForm.reset();
        this.stockForm.controls['stock_code'].setValue(this.commonService.incrCode('s', this.stocksList.length));
        this.stockForm.controls['status'].setValue(1);
        this.stockForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id);
        this.displayDialog = true;
    }
    showDialogToAddCat() {
        this.categoryForm.reset();
        this.categoryForm.controls['category_code'].setValue(this.commonService.incrCode('c', this.categoryList.length));
        this.categoryForm.controls['status'].setValue(1);
        this.categoryForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id);
        this.displayDialog1 = true;
    }
    showDialogToAddUnit() {
        this.unitForm.reset();
        this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u', this.unitList.length));
        this.unitForm.controls['status'].setValue(1);
        this.unitForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id);
        this.displayDialog2 = true;
    }
    checkValidity() {
        Object.keys(this.stockForm.controls).forEach((key) => {
            this.stockForm.controls[key].markAsDirty();
        });
    }
    checkValidityUnit() {
        Object.keys(this.stockForm.controls).forEach((key) => {
            this.stockForm.controls[key].markAsDirty();
        });
    }
    checkValidityCat() {
        Object.keys(this.stockForm.controls).forEach((key) => {
            this.stockForm.controls[key].markAsDirty();
        });
    }
    save() {
        console.log(this.stockForm.value);
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
    delete(stock, index) {
        console.log('delete', stock, index);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this Stock?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.onRowDelete(stock, index);
            }
        });
    }
    onRowAdd(stock) {
        console.log('onRowAdd', stock);
        console.log('onRowAdd1', this.stockForm);
        this.stockService.addStock(stock)
            .subscribe((data) => {
            console.log('add customer', data);
            this.stocksList = [data, ...this.stocksList];
            console.log('this.stocksList', this.stocksList);
            this.messageService.add({ severity: 'success', summary: 'Stock Added Successfully', detail: 'Stock Added Successfully' });
            this.displayDialog = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowEdit(stock) {
        console.log('onRowEdit', stock);
        console.log('onRowEdit1', this.stockForm);
        this.displayDialog = true;
        this.stockForm.controls['_id'].setValue(stock._id);
        this.stockForm.controls['stock_code'].setValue(stock.stock_code);
        this.stockForm.controls['stock_name'].setValue(stock.stock_name);
        this.stockForm.controls['category_details_id'].setValue(stock.category_details_id._id);
        this.stockForm.controls['company_details_id'].setValue(stock.company_details_id._id);
        this.stockForm.controls['stock_qty'].setValue(stock.stock_qty);
        this.stockForm.controls['buying_price'].setValue(stock.buying_price);
        this.stockForm.controls['selling_price'].setValue(stock.selling_price);
        this.stockForm.controls['product_details'].setValue(stock.product_details);
        this.stockForm.controls['unit_details_id'].setValue(stock.unit_details_id._id);
        this.stockForm.controls['status'].setValue(stock.status);
    }
    onRowDelete(stock, index) {
        console.log(stock, index);
        this.stockService.deleteStock(stock._id)
            .subscribe((data) => {
            console.log('delete', data);
            this.stocksList.splice(index, 1);
            this.stocksList = [...this.stocksList];
            this.messageService.add({ severity: 'success', summary: 'Stock Deleted Successfully', detail: 'Stock Deleted Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowUpdate(stock) {
        console.log(stock);
        this.displayDialog = false;
        this.stockService.updateStock(stock)
            .subscribe((data) => {
            console.log('update', data);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.stocksList, function (o) { return o._id == stock._id; });
            console.log(sliceIndex);
            if (sliceIndex > -1) {
                // Replace item at index using native splice
                this.stocksList.splice(sliceIndex, 1, data);
            }
            this.stocksList = [...this.stocksList];
            this.messageService.add({ severity: 'success', summary: 'Stock Updated Successfully', detail: 'Stock Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onChangeStatus(event) {
        console.log(event);
        let isChecked = event.checked;
    }
    addCategory() {
        console.log('categoryForm', this.categoryForm);
        if (this.categoryForm.invalid) {
            this.checkValidityCat();
            return;
        }
        this.categoryService.addCategory(this.categoryForm.value)
            .subscribe((data) => {
            console.log('add cat', data);
            let newData = {
                label: data.category_name + ' | ' + data.category_code,
                value: data._id
            };
            this.categoryList = [newData, ...this.categoryList];
            // this.categoryList.push(data);
            console.log('this.categoryList', this.categoryList);
            this.messageService.add({ severity: 'success', summary: 'New Category Added Successfully', detail: 'New Category Added Successfully' });
            this.stockForm.controls['category_details_id'].setValue(data._id);
            this.displayDialog1 = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog1 = false;
        });
    }
    addUnit() {
        console.log('unitForm', this.unitForm);
        if (this.unitForm.invalid) {
            this.checkValidityUnit();
            return;
        }
        this.unitService.addUnit(this.unitForm.value)
            .subscribe((data) => {
            console.log('add unit', data);
            let newData = {
                label: data.unit_name + ' | ' + data.unit_code,
                value: data._id
            };
            this.unitList = [newData, ...this.unitList];
            // this.categoryList.push(data);
            console.log('this.unitList', this.unitList);
            this.messageService.add({ severity: 'success', summary: 'New Unit Added Successfully', detail: 'New Unit Added Successfully' });
            this.stockForm.controls['unit_details_id'].setValue(data._id);
            this.displayDialog2 = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog2 = false;
        });
    }
    exportPdf() {
        __webpack_require__.e(/*! import() | jspdf */ "default~jspdf~jspdf-autotable").then(__webpack_require__.t.bind(null, /*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js", 7)).then(jsPDF => {
            Promise.all(/*! import() | jspdf-autotable */[__webpack_require__.e("default~jspdf~jspdf-autotable"), __webpack_require__.e("jspdf-autotable")]).then(__webpack_require__.t.bind(null, /*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js", 7)).then(x => {
                const doc = new jsPDF();
                // console.log(this.cols,this.categoryListSheet);
                // doc.autoTable(this.cols, this.categoryListSheet);
                doc.save('cat-primengTable.pdf');
            });
        });
    }
    exportExcel() {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "./node_modules/xlsx/xlsx.js", 7)).then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.stockListSheet);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, "primengTable");
        });
    }
    saveAsExcelFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js", 7)).then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
};
StockMasterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"] },
    { type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_10__["UnitService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] }
];
StockMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/stock-master/stock-master.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-master.component.scss */ "./src/app/component/stock-master/stock-master.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"], src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_10__["UnitService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])
], StockMasterComponent);



/***/ }),

/***/ "./src/app/component/stock-master/stock-master.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/stock-master/stock-master.module.ts ***!
  \***************************************************************/
/*! exports provided: StockMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMasterModule", function() { return StockMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _stock_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-master-routing.module */ "./src/app/component/stock-master/stock-master-routing.module.ts");
/* harmony import */ var _stock_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-master.component */ "./src/app/component/stock-master/stock-master.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__);





















let StockMasterModule = class StockMasterModule {
};
StockMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_stock_master_component__WEBPACK_IMPORTED_MODULE_4__["StockMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _stock_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["StockMasterRoutingModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_9__["CardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_12__["PasswordModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextareaModule"],
            primeng_keyfilter__WEBPACK_IMPORTED_MODULE_17__["KeyFilterModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_18__["InputSwitchModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__["ProgressSpinnerModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"]
        ]
    })
], StockMasterModule);



/***/ }),

/***/ "./src/app/shared/common.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/common.service.ts ***!
  \******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonService = class CommonService {
    constructor() { }
    leftPad(type, number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return type + '-' + output;
    }
    incrCode(type, count) {
        let cCode = Number(count) + 1;
        console.log('cCode', cCode);
        return this.leftPad(type, cCode, 4);
    }
};
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommonService);



/***/ })

}]);
//# sourceMappingURL=component-stock-master-stock-master-module-es2015.js.map