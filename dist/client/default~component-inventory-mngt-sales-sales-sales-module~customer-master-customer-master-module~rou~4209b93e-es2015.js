(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-inventory-mngt-sales-sales-sales-module~customer-master-customer-master-module~rou~4209b93e"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/route-form/route-form.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/route-form/route-form.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <p-dialog  [maximizable]=\"true\" [(visible)]=\"displayDialog2\" (onHide)=\"onClose()\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '400px'}\">\n        <p-header>\n                <span *ngIf=\"routeForm.value._id\">Update</span>\n                <span *ngIf=\"!routeForm.value._id\">Add</span> Route\n        </p-header>\n        \n    <form [formGroup]=\"routeForm\">\n            <div class=\"ui-g ui-fluid\" >\n                \n    <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"vin\">Route Code</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input type=\"text\" pInputText formControlName=\"route_code\"  disabled />\n            </div>\n        </div>\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">Route Name</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <input pInputText id=\"vin\" formControlName=\"route_name\" autofocus />\n                    </div>\n                </div>\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"brand\">Status</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n        \n                    </div>\n                </div>\n            </div>\n            <p-footer>\n                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                    <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!routeForm.value._id\" (click)=\"addRoute()\" label=\"Add\"></button>\n                    <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"routeForm.value._id\" (click)=\"updateRoute()\" label=\"Update\"></button>\n                </div>\n            </p-footer>\n        </form> \n        </p-dialog>");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/route-form/route-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/route-form/route-form.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zaGFyZWQvcm91dGUtZm9ybS9yb3V0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/route-form/route-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/route-form/route-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: RouteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteFormComponent", function() { return RouteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/route.service */ "./src/app/shared/route.service.ts");








let RouteFormComponent = class RouteFormComponent {
    constructor(_fb, routeService, commonService, sessionService, messageService) {
        this._fb = _fb;
        this.routeService = routeService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.displayChangeEvent2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.routeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.routeForm = this._fb.group({
            _id: [''],
            company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            route_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            route_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    ngOnChanges() {
        console.log('displayDialog2', this.displayDialog2);
        console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"](this.routeData));
        if (lodash__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"](this.routeData)) {
            console.log('catData', this.routeData);
            this.routeForm.controls['_id'].setValue(this.routeData._id);
            this.routeForm.controls['route_code'].setValue(this.routeData.route_code);
            this.routeForm.controls['route_name'].setValue(this.routeData.route_name);
            this.routeForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
            this.routeForm.controls['status'].setValue(this.routeData.status);
        }
        else {
            this.getRouteByCompany();
        }
    }
    getRouteByCompany() {
        this.routeService.getRouteByCompany()
            .subscribe((data) => {
            console.log('routeList', data);
            this.routeForm.reset();
            this.routeForm.controls['route_code'].setValue(this.commonService.incrCode('r', data.length));
            this.routeForm.controls['status'].setValue(1);
            this.routeForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
        });
    }
    checkValidity() {
        Object.keys(this.routeForm.controls).forEach((key) => {
            this.routeForm.controls[key].markAsDirty();
        });
    }
    addRoute() {
        console.log('routeForm', this.routeForm);
        if (this.routeForm.invalid) {
            this.checkValidity();
            return;
        }
        this.routeService.addRoute(this.routeForm.value)
            .subscribe((data) => {
            console.log('add route', data);
            // let newData = {
            //   label : data.unit_name +' | ' +data.unit_code,
            //   value : data._id
            //  }
            this.routeEvent.emit(data);
            // this.unitList = [newData,...this.unitList];
            // this.categoryList.push(data);
            // console.log('this.unitList',this.unitList);
            this.messageService.add({ severity: 'success', summary: 'New Route Added Successfully', detail: 'New Route Added Successfully' });
            // this.stockForm.controls['unit_details_id'].setValue(data._id) 
            this.displayDialog2 = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
            this.displayDialog2 = false;
        });
    }
    updateRoute() {
        console.log('roureForm', this.routeForm);
        if (this.routeForm.invalid) {
            this.checkValidity();
            return;
        }
        this.routeService.updateRoute(this.routeForm.value)
            .subscribe((data) => {
            console.log('add route', data);
            // let newData = {
            //   label : data.unit_name +' | ' +data.unit_code,
            //   value : data._id
            //  }
            this.routeEvent.emit(data);
            // this.unitList = [newData,...this.unitList];
            // this.categoryList.push(data);
            // console.log('this.unitList',this.unitList);
            this.messageService.add({ severity: 'success', summary: 'Route Updated Successfully', detail: 'Route Updated Successfully' });
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
RouteFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouteFormComponent.prototype, "routeData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RouteFormComponent.prototype, "displayDialog2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouteFormComponent.prototype, "displayChangeEvent2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouteFormComponent.prototype, "routeEvent", void 0);
RouteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-route-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./route-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/route-form/route-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./route-form.component.scss */ "./src/app/component/inventory-mngt/shared/route-form/route-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
], RouteFormComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/route-form/route-form.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/route-form/route-form.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RouteFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteFormModule", function() { return RouteFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _route_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-form.component */ "./src/app/component/inventory-mngt/shared/route-form/route-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_8__);









let RouteFormModule = class RouteFormModule {
};
RouteFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_route_form_component__WEBPACK_IMPORTED_MODULE_3__["RouteFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
        ],
        exports: [_route_form_component__WEBPACK_IMPORTED_MODULE_3__["RouteFormComponent"]]
    })
], RouteFormModule);



/***/ }),

/***/ "./src/app/shared/route.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/route.service.ts ***!
  \*****************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/session.service.ts");





let RouteService = class RouteService {
    constructor(httpClient, sessionService) {
        this.httpClient = httpClient;
        this.sessionService = sessionService;
    }
    getRoute() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/route');
    }
    getRouteByCompany() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/route/get-by-company/' + this.sessionService.getItem('company_id'));
    }
    addRoute(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/route', body, { headers: headerOption });
    }
    updateRoute(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/route/' + data._id, body, { headers: headerOption });
    }
    deleteRoute(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/route/' + id);
    }
    updateStatus(status, id) {
        var body = JSON.stringify(status);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/route/status-update/' + id, body, { headers: headerOption });
    }
};
RouteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], RouteService);



/***/ })

}]);
//# sourceMappingURL=default~component-inventory-mngt-sales-sales-sales-module~customer-master-customer-master-module~rou~4209b93e-es2015.js.map