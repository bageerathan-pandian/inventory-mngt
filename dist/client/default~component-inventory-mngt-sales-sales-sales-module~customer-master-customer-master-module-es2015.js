(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-inventory-mngt-sales-sales-sales-module~customer-master-customer-master-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("       \r\n<p-dialog  [maximizable]=\"true\" [(visible)]=\"displayDialog3\" (onHide)=\"onClose()\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\r\n    <p-header>\r\n            <span *ngIf=\"customerForm.value._id\">Update</span>\r\n            <span *ngIf=\"!customerForm.value._id\">Add</span> Customer\r\n    </p-header>\r\n<form [formGroup]=\"customerForm\">\r\n<div class=\"ui-g ui-fluid\" >\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Customer Code</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText formControlName=\"customer_code\" disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Customer Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"customer_name\" autofocus />\r\n            </div>\r\n        </div>\r\n    <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Customer Address</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"customer_address\" ngx-google-places-autocomplete  #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Customer Phone</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <p-checkbox label=\"Enable Tax\" binary=\"true\" formControlName=\"enable_tax\"></p-checkbox>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">GSTIN</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"customer_gstin\"  />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Route Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <!-- <p-dropdown [options]=\"routeNameList\"   placeholder=\"Select Route\"   formControlName=\"route_name\"  ></p-dropdown> -->\r\n                <p-dropdown [options]=\"routeNameList\" placeholder=\"Select Route\" filter=\"true\"\r\n                formControlName=\"route_details_id\" [showClear]=\"true\" (onChange)=\"onSelectRoute($event)\">\r\n            </p-dropdown>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"brand\">Status</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\"> \r\n        <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\r\n        <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!customerForm.value._id\" (click)=\"saveCust()\" label=\"Add\"></button>\r\n        <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"customerForm.value._id\" (click)=\"updateCust()\" label=\"Update\"></button>\r\n    </div>\r\n</p-footer>\r\n</form>\r\n</p-dialog>\r\n\r\n<app-route-form [displayDialog2]=\"displayDialog2\" (displayChangeEvent2)=\"onDialogClose2($event)\" ></app-route-form>\r\n");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zaGFyZWQvY3VzdG9tZXItZm9ybS9jdXN0b21lci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/customer.service */ "./src/app/shared/customer.service.ts");
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/route.service */ "./src/app/shared/route.service.ts");










let CustomerFormComponent = class CustomerFormComponent {
    constructor(_fb, customerService, commonService, sessionService, messageService, routeService) {
        this._fb = _fb;
        this.customerService = customerService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.routeService = routeService;
        this.displayChangeEvent3 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.routeNameList = [
            { label: 'Barma Colony', value: 'Barma Colony' },
            { label: 'Sekkalai Road', value: 'Sekkalai Road' },
            { label: '100 Feet Road', value: '100 Feet Road' },
            { label: 'Senjai', value: 'Senjai' },
            { label: 'Sriramnagar', value: 'Sriramnagar' },
            { label: 'Railway Road', value: 'Railway Road' },
        ];
        this.customerForm = this._fb.group({
            _id: [''],
            company_details_id: [this.sessionService.getItem('company_id'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customer_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customer_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customer_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            enable_tax: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customer_gstin: [''],
            route_details_id: [''],
            total_purchase_amt: [0.00],
            total_paid_amt: [0.00],
            total_pending_amt: [0.00],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.getRouteByCompany();
    }
    handleAddressChange(address) {
        console.log('address', address);
        // Do some stuff
        this.customerForm.controls['customer_address'].setValue(address.formatted_address);
    }
    ngOnChanges() {
        console.log('displayDialog3', this.displayDialog3);
        console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_8__["isPlainObject"](this.routeData));
        if (lodash__WEBPACK_IMPORTED_MODULE_8__["isPlainObject"](this.routeData)) {
            console.log('catData', this.routeData);
            this.getRouteByCompany();
            setTimeout(() => {
                this.customerForm.controls['route_details_id'].setValue(this.routeData.value ? this.routeData.value : null);
            }, 1000);
        }
        console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_8__["isPlainObject"](this.custData));
        if (lodash__WEBPACK_IMPORTED_MODULE_8__["isPlainObject"](this.custData)) {
            console.log('custData', this.custData);
            this.customerForm.controls['_id'].setValue(this.custData._id);
            this.customerForm.controls['customer_code'].setValue(this.custData.customer_code);
            this.customerForm.controls['customer_name'].setValue(this.custData.customer_name);
            this.customerForm.controls['customer_address'].setValue(this.custData.customer_address);
            this.customerForm.controls['phone'].setValue(this.custData.phone);
            this.customerForm.controls['enable_tax'].setValue(this.custData.enable_tax);
            this.customerForm.controls['route_details_id'].setValue(this.custData.route_details_id ? this.custData.route_details_id._id : null);
            this.customerForm.controls['customer_gstin'].setValue(this.custData.customer_gstin);
            this.customerForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
            this.customerForm.controls['total_purchase_amt'].setValue(this.custData.total_purchase_amt);
            this.customerForm.controls['total_paid_amt'].setValue(this.custData.total_paid_amt);
            this.customerForm.controls['total_pending_amt'].setValue(this.custData.total_pending_amt);
            this.customerForm.controls['status'].setValue(this.custData.status);
        }
        else {
            this.getCustomerByCompany();
        }
    }
    getRouteByCompany() {
        this.routeNameList = [];
        this.routeService.getRouteByCompany()
            .subscribe((data) => {
            console.log('routeNameList', data);
            this.routeNameList.push({ label: '+ Add New Route', value: 0 });
            for (let catData of data) {
                this.routeNameList.push({
                    label: catData.route_name + ' | ' + catData.route_code,
                    value: catData._id
                });
            }
            console.log('routeNameList1', this.routeNameList);
            // if(_.some(this.catData, _.isObject)){ 
            //   this.stockForm.controls['category_details_id'].setValue(this.stockData.category_details_id  ? this.stockData.category_details_id._id : null);
            // }
        });
    }
    onSelectRoute(event) {
        console.log(event.value);
        if (event.value == 0) {
            // this.showDialogToAddCat()
            // this.routeDialogEvent.emit(true)
            this.displayDialog2 = true;
            this.customerForm.controls['route_details_id'].reset();
            return false;
        }
    }
    getCustomerByCompany() {
        this.customerService.getCustomerByCompany()
            .subscribe((data) => {
            console.log('unitList', data);
            this.customerForm.reset();
            this.customerForm.controls['customer_code'].setValue(this.commonService.incrCode('c', data.length));
            this.customerForm.controls['status'].setValue(1);
            this.customerForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
        });
    }
    checkValidity() {
        Object.keys(this.customerForm.controls).forEach((key) => {
            this.customerForm.controls[key].markAsDirty();
        });
    }
    saveCust() {
        if (this.customerForm.invalid) {
            this.checkValidity();
            return false;
        }
        this.customerService.addCustomer(this.customerForm.value)
            .subscribe((data) => {
            console.log('add customer', data);
            // let newData = {
            //   label : data.customer_name +' | ' +data.customer_code,
            //   value : data._id
            //  }
            this.customerEvent.emit(data);
            this.messageService.add({ severity: 'success', summary: 'Customer Added Successfully', detail: 'Customer Added Successfully' });
            this.displayDialog3 = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog3 = false;
        });
    }
    updateCust() {
        if (this.customerForm.invalid) {
            this.checkValidity();
            return false;
        }
        this.customerService.updateCustomer(this.customerForm.value)
            .subscribe((data) => {
            console.log('update customer', data);
            // let newData = {
            //   label : data.customer_name +' | ' +data.customer_code,
            //   value : data._id
            //  }
            this.customerEvent.emit(data);
            this.messageService.add({ severity: 'success', summary: 'Customer Updated Successfully', detail: 'Customer Updated Successfully' });
            this.displayDialog3 = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog3 = false;
        });
    }
    onClose() {
        // this.displayDialog = false;
        this.displayChangeEvent3.emit(false);
    }
    onDialogClose2(event) {
        this.getRouteByCompany();
    }
    // Work against memory leak if component is destroyed
    ngOnDestroy() {
        this.displayChangeEvent3.unsubscribe();
    }
};
CustomerFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_9__["RouteService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomerFormComponent.prototype, "custData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomerFormComponent.prototype, "routeData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CustomerFormComponent.prototype, "displayDialog3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomerFormComponent.prototype, "displayChangeEvent3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomerFormComponent.prototype, "customerEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__["GooglePlaceDirective"])
], CustomerFormComponent.prototype, "placesRef", void 0);
CustomerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-form.component.scss */ "./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_9__["RouteService"]])
], CustomerFormComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/customer-form/customer-form.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/customer-form/customer-form.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomerFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormModule", function() { return CustomerFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _customer_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-form.component */ "./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _route_form_route_form_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../route-form/route-form.module */ "./src/app/component/inventory-mngt/shared/route-form/route-form.module.ts");













let CustomerFormModule = class CustomerFormModule {
};
CustomerFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_customer_form_component__WEBPACK_IMPORTED_MODULE_3__["CustomerFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__["InputMaskModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__["CheckboxModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceModule"],
            _route_form_route_form_module__WEBPACK_IMPORTED_MODULE_12__["RouteFormModule"]
        ],
        exports: [_customer_form_component__WEBPACK_IMPORTED_MODULE_3__["CustomerFormComponent"]]
    })
], CustomerFormModule);



/***/ }),

/***/ "./src/app/shared/customer.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/customer.service.ts ***!
  \********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/session.service.ts");





let CustomerService = class CustomerService {
    constructor(httpClient, sessionService) {
        this.httpClient = httpClient;
        this.sessionService = sessionService;
    }
    getCustomer() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer');
    }
    getCustomerByCompany() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/get-by-company/' + this.sessionService.getItem('company_id'));
    }
    addCustomer(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer', body, { headers: headerOption });
    }
    updateCustomer(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/' + data._id, body, { headers: headerOption });
    }
    deleteCustomer(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/' + id);
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], CustomerService);



/***/ })

}]);
//# sourceMappingURL=default~component-inventory-mngt-sales-sales-sales-module~customer-master-customer-master-module-es2015.js.map