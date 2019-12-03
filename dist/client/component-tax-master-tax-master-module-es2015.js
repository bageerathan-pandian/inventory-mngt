(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-tax-master-tax-master-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/tax-master/tax-master.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/tax-master/tax-master.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n        <div style=\"margin-top: 15px;\">\n                <div *ngIf=\"loding\" style=\"text-align: center\">\n                        <p-progressSpinner  [style]=\"{width: '50px', height: '50px'}\"></p-progressSpinner>\n                </div>\n      <p-card *ngIf=\"!loding\" >\n      <p-table  #dt1   [value]=\"taxList\" dataKey=\"id\"  [paginator]=\"true\" [rows]=\"10\"   [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['_id','tax_name','tax_value']\">\n          <ng-template pTemplate=\"caption\">\n              <div class=\"ui-helper-clearfix\" >\n      \n                  <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button> -->\n                  <!-- <button type=\"button\" pButton icon=\"fa fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button> -->\n              </div>\n              <div style=\"text-align: right\">        \n                  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \n                  <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\n              </div>\n          </ng-template>\n          <ng-template pTemplate=\"header\">\n              <tr>\n                  <th  [pSortableColumn]=\"'_id'\" pResizableColumn >\n                        #\n                    <p-sortIcon [field]=\"_id\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                    </th>\n                  <th  [pSortableColumn]=\"'tax_name'\" pResizableColumn>\n                      Tax Name\n                  <p-sortIcon [field]=\"tax_name\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                  </th>\n                  <th  [pSortableColumn]=\"'tax_value'\" pResizableColumn>\n                    Tax %\n                <p-sortIcon [field]=\"tax_value\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                </th>\n                  <th [pSortableColumn]=\"'updatedAt'\" pResizableColumn>\n                        Updated Date\n                     <p-sortIcon [field]=\"updatedAt\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                 </th>\n                 <th [pSortableColumn]=\"'status'\" pResizableColumn style=\"width: 10%;\">\n                    Status\n                 <p-sortIcon [field]=\"Status\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n             </th>\n                 <th style=\"width: 10%;\">\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\" ></button>\n\n            </th>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\" >\n            \n              <tr [pEditableRow]=\"rowData\">\n                  <td>\n                      #{{rowData._id}}\n                  </td>\n                  <td>\n                      <p-cellEditor>\n                          <ng-template pTemplate=\"input\">\n                              <input pInputText type=\"text\" [(ngModel)]=\"rowData.tax_name\" required>\n                          </ng-template>\n                          <ng-template pTemplate=\"output\">\n                              {{rowData.tax_name}}\n                          </ng-template>\n                      </p-cellEditor>\n                  </td>\n                  <td>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.tax_value\" required>\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.tax_value}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                  <td>\n                    {{rowData.updatedAt | date:'medium'}}\n            </td>\n                  <td style=\"text-align: center\">\n                    <p-inputSwitch [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event,rowData.id)\"></p-inputSwitch> \n                </td>\n                <td style=\"text-align:center\">\n                    <button  pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEdit(rowData)\" style=\"    margin: 0px 5px;\"></button>\n                    <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\n                    <button  pButton type=\"button\" pCancelEditableRow icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\n                </td>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"footer\">\n                <tr>\n                   <td colspan=\"5\" style=\"text-align: center\">\n                           There are {{taxList?.length}} records\n                   </td>\n               </tr>\n               \n           </ng-template>\n      </p-table>\n\n      <p-dialog   [maximizable]=\"true\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\n            <p-header>\n                    <span *ngIf=\"taxForm.value._id\">Update</span>\n                    <span *ngIf=\"!taxForm.value._id\">Add</span> Tax\n            </p-header>\n        <form [formGroup]=\"taxForm\">\n        <div class=\"ui-g ui-fluid\" >\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Tax Name</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"vin\" formControlName=\"tax_name\" autofocus />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Tax %</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"vin\" formControlName=\"tax_value\" autofocus />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"brand\">Status</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n    \n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </form>\n    </p-dialog>\n    \n    <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\n            <p-footer>\n                    <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \n                    <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\n                </p-footer>\n            </p-confirmDialog>\n    </p-card>\n    </div>");

/***/ }),

/***/ "./src/app/component/tax-master/tax-master-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/tax-master/tax-master-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TaxMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxMasterRoutingModule", function() { return TaxMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tax_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax-master.component */ "./src/app/component/tax-master/tax-master.component.ts");




const routes = [
    { path: '', component: _tax_master_component__WEBPACK_IMPORTED_MODULE_3__["TaxMasterComponent"] }
];
let TaxMasterRoutingModule = class TaxMasterRoutingModule {
};
TaxMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TaxMasterRoutingModule);



/***/ }),

/***/ "./src/app/component/tax-master/tax-master.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/tax-master/tax-master.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90YXgtbWFzdGVyL3RheC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/tax-master/tax-master.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/tax-master/tax-master.component.ts ***!
  \**************************************************************/
/*! exports provided: TaxMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxMasterComponent", function() { return TaxMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tax.service */ "./src/app/shared/tax.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");









let TaxMasterComponent = class TaxMasterComponent {
    constructor(router, _fb, auth, confirmationService, messageService, taxService, commonService) {
        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.taxService = taxService;
        this.commonService = commonService;
        this.loding = true;
        this.car = {};
        this.status = [];
    }
    ngOnInit() {
        this.bradCrum = [
            { label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/dashboard']);
                }
            },
            {
                label: "Master",
                command: event => {
                    this.router.navigate(["/dashboard"]);
                }
            },
            {
                label: "Tax",
                command: event => {
                    this.router.navigate(["/master/tax"]);
                }
            }
        ];
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.taxForm = this._fb.group({
            _id: [''],
            company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tax_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tax_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tax_value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // if(this.user_details.role == '0'){
        //   this.getTax();
        // }else{
        this.getTaxByCompany(this.auth.getUserCompanyId());
        // }
    }
    getTax() {
        this.taxService.getTax()
            .subscribe((data) => {
            console.log('taxList', data);
            this.taxList = data;
            this.loding = false;
        });
    }
    getTaxByCompany(id) {
        this.taxService.getTaxByCompany(id)
            .subscribe((data) => {
            console.log('taxList', data);
            this.taxList = data;
            this.loding = false;
        });
    }
    showDialogToAdd() {
        this.taxForm.reset();
        this.taxForm.controls['tax_code'].setValue(this.commonService.incrCode('t', this.taxList.length));
        this.taxForm.controls['status'].setValue(1);
        this.taxForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id);
        this.displayDialog = true;
    }
    checkValidity() {
        Object.keys(this.taxForm.controls).forEach((key) => {
            this.taxForm.controls[key].markAsDirty();
        });
    }
    save() {
        if (this.taxForm.invalid) {
            this.checkValidity();
            return false;
        }
        if (this.taxForm.value._id) {
            this.onRowUpdate(this.taxForm.value);
        }
        else {
            this.onRowAdd(this.taxForm.value);
        }
    }
    delete(data, index) {
        console.log('delete', data, index);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this Tax?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.onRowDelete(data, index);
            }
        });
    }
    onRowAdd(Tax) {
        console.log('onRowAdd', Tax);
        // this.cars.push(newcar); 
        this.taxService.addTax(Tax)
            .subscribe((data) => {
            console.log('add cat', data);
            this.taxList = [data, ...this.taxList];
            console.log('this.taxList', this.taxList);
            this.messageService.add({ severity: 'success', summary: 'Tax Added Successfully', detail: 'Tax Added Successfully' });
            this.displayDialog = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowEdit(tax) {
        console.log(tax);
        this.displayDialog = true;
        this.taxForm.controls['_id'].setValue(tax._id);
        this.taxForm.controls['tax_name'].setValue(tax.tax_name);
        this.taxForm.controls['tax_value'].setValue(tax.tax_value);
        this.taxForm.controls['status'].setValue(tax.status);
    }
    onRowDelete(tax, index) {
        console.log(tax, index);
        this.taxService.deleteTax(tax._id)
            .subscribe((data) => {
            console.log('delete', data);
            this.taxList.splice(index, 1);
            this.taxList = [...this.taxList];
            this.messageService.add({ severity: 'success', summary: 'Tax Deleted Successfully', detail: 'Tax Deleted Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowUpdate(Tax) {
        console.log('onRowUpdate', Tax);
        this.displayDialog = false;
        this.taxService.updateTax(Tax)
            .subscribe((data) => {
            console.log('update', data);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_7__["findIndex"](this.taxList, function (o) { return o._id == Tax._id; });
            console.log(sliceIndex);
            if (sliceIndex > -1) {
                // Replace item at index using native splice
                this.taxList.splice(sliceIndex, 1, data);
            }
            this.taxList = [...this.taxList];
            this.messageService.add({ severity: 'success', summary: 'Tax Updated Successfully', detail: 'Tax Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onChangeStatus(event, id) {
        console.log(event);
        let isChecked = event.checked;
        this.taxService.updateStatus(event.checked, id)
            .subscribe((data) => {
            this.messageService.add({ severity: 'success', summary: 'Status Updated Successfully', detail: 'Status Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
};
TaxMasterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_6__["TaxService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
];
TaxMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tax-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tax-master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/tax-master/tax-master.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tax-master.component.scss */ "./src/app/component/tax-master/tax-master.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_tax_service__WEBPACK_IMPORTED_MODULE_6__["TaxService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], TaxMasterComponent);



/***/ }),

/***/ "./src/app/component/tax-master/tax-master.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/tax-master/tax-master.module.ts ***!
  \***********************************************************/
/*! exports provided: TaxMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxMasterModule", function() { return TaxMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tax_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax-master-routing.module */ "./src/app/component/tax-master/tax-master-routing.module.ts");
/* harmony import */ var _tax_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tax-master.component */ "./src/app/component/tax-master/tax-master.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_19__);




















let TaxMasterModule = class TaxMasterModule {
};
TaxMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tax_master_component__WEBPACK_IMPORTED_MODULE_4__["TaxMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tax_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaxMasterRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_16__["ToastModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__["InputSwitchModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_19__["MultiSelectModule"]
        ]
    })
], TaxMasterModule);



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




let TaxService = class TaxService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTax() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax');
    }
    getTaxByCompany(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/tax/get-by-company/' + id);
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TaxService);



/***/ })

}]);
//# sourceMappingURL=component-tax-master-tax-master-module-es2015.js.map