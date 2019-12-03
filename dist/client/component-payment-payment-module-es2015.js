(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/payment/payment.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/payment/payment.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n        <div style=\"margin-top: 15px;\">\n  <p-card>\n<p-table  #dt  [value]=\"paymentList\" [paginator]=\"true\"  [rowsPerPageOptions]=\"[10,50,100]\"   [resizableColumns]=\"true\"  selectionMode=\"single\" [(selection)]=\"selectedCars\"  [rows]=\"10\"  dataKey=\"id\">\n \n    <ng-template pTemplate=\"caption\">\n        <div class=\"ui-helper-clearfix\" >\n\n            <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button> -->\n            <!-- <button type=\"button\" pButton icon=\"fa fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button> -->\n        </div>\n        <div style=\"text-align: right\">        \n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" >\n        <tr>\n                <th  [pSortableColumn]=\"'id'\" pResizableColumn>\n                        # Invoice ID\n                    <p-sortIcon [field]=\"id\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                    </th>\n           \n            <th  [pSortableColumn]=\"'customer_name'\" pResizableColumn>\n              Customer Name\n            <p-sortIcon [field]=\"customer_name\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n        </th>\n           \n            <th  [pSortableColumn]=\"'sub_amount'\" pResizableColumn>\n                Sub Amount\n             <p-sortIcon [field]=\"sub_amount\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n         </th>\n         <th  [pSortableColumn]=\"'discount'\" pResizableColumn>\n            Discount\n         <p-sortIcon [field]=\"discount\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n     </th>\n     <th  [pSortableColumn]=\"'grand_total'\" pResizableColumn>\n        Grand Total\n     <p-sortIcon [field]=\"grand_total\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n </th>\n            <th [pSortableColumn]=\"'payment_type'\" pResizableColumn>\n                Payment Type\n                 <p-sortIcon [field]=\"payment_type\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n             </th>\n             <th [pSortableColumn]=\"'created_at'\" pResizableColumn>\n                Payment Date\n                 <p-sortIcon [field]=\"created_at\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n             </th>\n             <th [pSortableColumn]=\"'status'\" pResizableColumn>\n                Status\n                 <p-sortIcon [field]=\"status\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n             </th>\n            <th>\n\n            </th>\n        </tr>\n       \n       \n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\">\n          <tr [pEditableRow]=\"rowData\">\n              <td>\n                    {{rowData.id}}\n              </td>\n            <td>              \n                    {{rowData.customer_name}}\n            </td>\n            <td>              \n                {{rowData.sub_amount  | currency : 'INR':true}}\n            </td>\n            <td>\n                    {{rowData.discount  | currency : 'INR':true}}\n            </td>\n            <td>\n                {{rowData.grand_total  | currency : 'INR':true}}\n        </td>\n        <td>\n            <ng-container *ngIf=\"rowData.payment_type == 1; then thenTemplate; else elseTemplate\"></ng-container>\n            <ng-template #thenTemplate>\n                Cash\n            </ng-template>\n            <ng-template #elseTemplate>\n                Card\n            </ng-template>\n            \n        </td>\n        <td>\n        {{rowData.created_at | date:'medium'}}\n        </td>\n            <td>\n                <p-inputSwitch [(ngModel)]=\"rowData.payment_status\" (onChange)=\"onChangeStatus($event)\"></p-inputSwitch> \n            </td>\n            <td style=\"text-align:center\">\n                <button  pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEdit(rowData)\" style=\"    margin: 0px 5px;\"></button>\n                <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\n                <button  pButton type=\"button\" pCancelEditableRow icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\n            </td>\n        </tr>\n    </ng-template>\n\n   \n\n</p-table>\n\n<p-dialog  header=\"Payment Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\n\n    <div class=\"ui-g ui-fluid\" *ngIf=\"car\">\n            <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">Invoice Id</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <input type=\"text\" pInputText [(ngModel)]=\"car.id\" />\n                    </div>\n                </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"vin\">Customer Name</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input type=\"text\" pInputText [(ngModel)]=\"car.customer_name\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"vin\">Sub Amount</label>\n            </div>\n            <div class=\"ui-g-8\">\n                    <input type=\"text\" pInputText [(ngModel)]=\"car.sub_amount\" />\n                            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Discount</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input type=\"text\" pKeyFilter=\"int\" pInputText [(ngModel)]=\"car.discount\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Grand Total</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input type=\"text\" pKeyFilter=\"int\" pInputText [(ngModel)]=\"car.grand_total\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Payment Type</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input type=\"text\" pKeyFilter=\"int\" pInputText [(ngModel)]=\"car.payment_type\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"brand\">Status</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <p-dropdown [options]=\"status\" placeholder=\"Select Status\" [(ngModel)]=\"car.status\"></p-dropdown>\n\n            </div>\n        </div>\n    </div>\n    <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n            <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n            <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save(car)\" label=\"Save\"></button>\n        </div>\n    </p-footer>\n</p-dialog>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n\n</p-card>\n</div>\n");

/***/ }),

/***/ "./src/app/component/payment/payment-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/payment/payment-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.component */ "./src/app/component/payment/payment.component.ts");




const routes = [
    { path: '', component: _payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"] }
];
let PaymentRoutingModule = class PaymentRoutingModule {
};
PaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentRoutingModule);



/***/ }),

/***/ "./src/app/component/payment/payment.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/payment/payment.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/payment/payment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/payment/payment.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);






let PaymentComponent = class PaymentComponent {
    constructor(router, confirmationService, messageService) {
        this.router = router;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.car = {};
        this.status = [];
        this.clonedCars = {};
        this.bradCrum = [
            { label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/dashboard']);
                }
            },
            { label: 'Master', command: (event) => {
                    this.router.navigate(['/dashboard']);
                } },
            { label: 'Payment' },
        ];
        this.status = [
            { label: 'Paid', value: 1 },
            { label: 'Pending', value: 2 },
        ];
        this.getInvoice();
    }
    ngOnInit() { }
    getInvoice() {
        // this.invoiceService.getInvoice()
        // .subscribe((data:any)=>{
        //   console.log('getInvoice',data);
        //     this.paymentList = data;     
        // },
        // error =>{
        //   console.log('getInvoice',error);
        // })
    }
    showDialogToAdd() {
        // this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    }
    save(car) {
        console.log(car);
        this.onRowUpdate(car);
    }
    delete(car, index) {
        console.log('delete', car, index);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this Payment?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.onRowDelete(car, index);
            }
        });
    }
    onRowEdit(car) {
        console.log(car);
        this.displayDialog = true;
        this.car = {
            id: car.id,
            //      customer_id: car.customer_id,
            // customer_name:  car.customer_name,
            // sub_amount:  car.sub_amount,
            discount: car.discount,
            grand_total: car.grand_total,
            payment_type: car.payment_type,
            status: car.status,
        };
    }
    onRowDelete(car, index) {
        console.log(car, index);
        this.paymentList.splice(index, 1);
        this.paymentList = [...this.paymentList];
        this.messageService.add({ severity: 'success', summary: 'Payment Deleted Successfully', detail: 'Payment Deleted Successfully' });
    }
    onRowUpdate(user) {
        console.log(user);
        this.displayDialog = false;
        var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.paymentList, function (o) { return o.id == user.id; });
        console.log(sliceIndex);
        if (sliceIndex > -1) {
            // Replace item at index using native splice
            this.paymentList.splice(sliceIndex, 1, user);
        }
        this.paymentList = [...this.paymentList];
        this.messageService.add({ severity: 'success', summary: 'Payment Updated Successfully', detail: 'Payment Updated Successfully' });
    }
    onChangeStatus(event) {
        console.log(event);
        let isChecked = event.checked;
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/payment/payment.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.scss */ "./src/app/component/payment/payment.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], PaymentComponent);



/***/ }),

/***/ "./src/app/component/payment/payment.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/payment/payment.module.ts ***!
  \*****************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/component/payment/payment-routing.module.ts");
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment.component */ "./src/app/component/payment/payment.component.ts");
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
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__);



















let PaymentModule = class PaymentModule {
};
PaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentRoutingModule"],
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
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__["InputTextareaModule"],
            primeng_keyfilter__WEBPACK_IMPORTED_MODULE_17__["KeyFilterModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__["InputSwitchModule"]
        ]
    })
], PaymentModule);



/***/ })

}]);
//# sourceMappingURL=component-payment-payment-module-es2015.js.map