(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-inventory-mngt-purchase-purchase-purchase-module~component-inventory-mngt-sales-sa~105a02a9"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n    <p-dialog  [maximizable]=\"true\" [(visible)]=\"displayDialog2\" (onHide)=\"onClose()\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '400px'}\">\r\n        <p-header>\r\n                <span *ngIf=\"unitForm.value._id\">Update</span>\r\n                <span *ngIf=\"!unitForm.value._id\">Add</span> Unit\r\n        </p-header>\r\n        \r\n    <form [formGroup]=\"unitForm\">\r\n            <div class=\"ui-g ui-fluid\" >\r\n                \r\n    <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Unit Code</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input type=\"text\" pInputText formControlName=\"unit_code\"  disabled />\r\n            </div>\r\n        </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">Unit Name</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input pInputText id=\"vin\" formControlName=\"unit_name\" autofocus />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"brand\">Status</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <p-footer>\r\n                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                    <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!unitForm.value._id\" (click)=\"addUnit()\" label=\"Add\"></button>\r\n                    <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"unitForm.value._id\" (click)=\"updateUnit()\" label=\"Update\"></button>\r\n                </div>\r\n            </p-footer>\r\n        </form> \r\n        </p-dialog>");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zaGFyZWQvdW5pdC1mb3JtL3VuaXQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UnitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFormComponent", function() { return UnitFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/unit.service */ "./src/app/shared/unit.service.ts");
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let UnitFormComponent = class UnitFormComponent {
    constructor(_fb, unitService, commonService, sessionService, messageService) {
        this._fb = _fb;
        this.unitService = unitService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.displayChangeEvent2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.unitForm = this._fb.group({
            _id: [''],
            company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            unit_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            unit_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    ngOnChanges() {
        console.log('displayDialog2', this.displayDialog2);
        console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"](this.unitData));
        if (lodash__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"](this.unitData)) {
            console.log('catData', this.unitData);
            this.unitForm.controls['_id'].setValue(this.unitData._id);
            this.unitForm.controls['unit_code'].setValue(this.unitData.unit_code);
            this.unitForm.controls['unit_name'].setValue(this.unitData.unit_name);
            this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
            this.unitForm.controls['status'].setValue(this.unitData.status);
        }
        else {
            this.getUnitByCompany();
        }
    }
    getUnitByCompany() {
        this.unitService.getUnitByCompany()
            .subscribe((data) => {
            console.log('unitList', data);
            this.unitForm.reset();
            this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u', data.length));
            this.unitForm.controls['status'].setValue(1);
            this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
        });
    }
    checkValidity() {
        Object.keys(this.unitForm.controls).forEach((key) => {
            this.unitForm.controls[key].markAsDirty();
        });
    }
    addUnit() {
        console.log('unitForm', this.unitForm);
        if (this.unitForm.invalid) {
            this.checkValidity();
            return;
        }
        this.unitService.addUnit(this.unitForm.value)
            .subscribe((data) => {
            console.log('add unit', data);
            // let newData = {
            //   label : data.unit_name +' | ' +data.unit_code,
            //   value : data._id
            //  }
            this.unitEvent.emit(data);
            // this.unitList = [newData,...this.unitList];
            // this.categoryList.push(data);
            // console.log('this.unitList',this.unitList);
            this.messageService.add({ severity: 'success', summary: 'New Unit Added Successfully', detail: 'New Unit Added Successfully' });
            // this.stockForm.controls['unit_details_id'].setValue(data._id) 
            this.displayDialog2 = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog2 = false;
        });
    }
    updateUnit() {
        console.log('unitForm', this.unitForm);
        if (this.unitForm.invalid) {
            this.checkValidity();
            return;
        }
        this.unitService.updateUnit(this.unitForm.value)
            .subscribe((data) => {
            console.log('add unit', data);
            // let newData = {
            //   label : data.unit_name +' | ' +data.unit_code,
            //   value : data._id
            //  }
            this.unitEvent.emit(data);
            // this.unitList = [newData,...this.unitList];
            // this.categoryList.push(data);
            // console.log('this.unitList',this.unitList);
            this.messageService.add({ severity: 'success', summary: 'Unit Updated Successfully', detail: 'Unit Updated Successfully' });
            // this.stockForm.controls['unit_details_id'].setValue(data._id) 
            this.displayDialog2 = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog2 = false;
        });
    }
    onClose() {
        // this.displayDialog = false;
        this.displayChangeEvent2.emit(false);
    }
    // Work against memory leak if component is destroyed
    ngOnDestroy() {
        this.displayChangeEvent2.unsubscribe();
    }
};
UnitFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UnitFormComponent.prototype, "unitData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], UnitFormComponent.prototype, "displayDialog2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UnitFormComponent.prototype, "displayChangeEvent2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UnitFormComponent.prototype, "unitEvent", void 0);
UnitFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unit-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unit-form.component.scss */ "./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
], UnitFormComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/unit-form/unit-form.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/unit-form/unit-form.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UnitFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFormModule", function() { return UnitFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _unit_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unit-form.component */ "./src/app/component/inventory-mngt/shared/unit-form/unit-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_8__);









let UnitFormModule = class UnitFormModule {
};
UnitFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_unit_form_component__WEBPACK_IMPORTED_MODULE_3__["UnitFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
        ],
        exports: [_unit_form_component__WEBPACK_IMPORTED_MODULE_3__["UnitFormComponent"]]
    })
], UnitFormModule);



/***/ }),

/***/ "./src/app/shared/unit.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/unit.service.ts ***!
  \****************************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/session.service.ts");





let UnitService = class UnitService {
    constructor(httpClient, sessionService) {
        this.httpClient = httpClient;
        this.sessionService = sessionService;
    }
    getUnit() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/unit');
    }
    getUnitByCompany() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/unit/get-by-company/' + this.sessionService.getItem('company_id'));
    }
    addUnit(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/unit', body, { headers: headerOption });
    }
    updateUnit(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/unit/' + data._id, body, { headers: headerOption });
    }
    deleteUnit(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/unit/' + id);
    }
    updateStatus(status, id) {
        var body = JSON.stringify(status);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/unit/status-update/' + id, body, { headers: headerOption });
    }
};
UnitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
UnitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], UnitService);



/***/ })

}]);
//# sourceMappingURL=default~component-inventory-mngt-purchase-purchase-purchase-module~component-inventory-mngt-sales-sa~105a02a9-es2015.js.map