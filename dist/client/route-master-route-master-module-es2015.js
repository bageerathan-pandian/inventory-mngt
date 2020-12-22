(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["route-master-route-master-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/route-master/route-master.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/route-master/route-master.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n<div style=\"margin-top: 15px;\">\n<p-card  >\n<p-table  #dt1  [columns]=\"cols\" [loading]=\"loading\" [value]=\"routeList\" dataKey=\"_id\" [paginator]=\"true\" [rows]=\"10\"   [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['_id','unit_code','unit_name']\">\n  <ng-template pTemplate=\"caption\">\n      <div class=\"ui-helper-clearfix\" >\n\n          <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button> -->\n          <!-- <button type=\"button\" pButton icon=\"fa fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button> -->\n      </div>\n      <div style=\"text-align: right\">        \n          <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \n          <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\n      </div>\n  </ng-template>\n  <ng-template  pTemplate=\"header\" let-columns>\n      <tr>\n            <th style=\"width: 3em\">\n                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                </th>\n            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n\n                </th>\n         <th style=\"width: 10%;\">\n            <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\" ></button>\n\n    </th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\" >\n    \n      <tr [pEditableRow]=\"rowData\">\n            <td>\n                    <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n                </td>\n          <td>\n              {{rowData.route_code}}\n          </td>\n          <td>\n              <p-cellEditor>\n                  <ng-template pTemplate=\"input\">\n                      <input pInputText type=\"text\" [(ngModel)]=\"rowData.route_name\" required>\n                  </ng-template>\n                  <ng-template pTemplate=\"output\">\n                      {{rowData.route_name}}\n                  </ng-template>\n              </p-cellEditor>\n          </td>\n          <td>\n            {{rowData.updatedAt | date:'medium'}}\n    </td>\n          <td style=\"text-align: center\">\n            <p-dropdown [options]=\"status\" placeholder=\"Status\" [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event)\"></p-dropdown>\n        </td>\n        <td style=\"text-align:center\">\n            <button  pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEdit(rowData)\" style=\"    margin: 0px 5px;\"></button>\n            <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\n            <button  pButton type=\"button\" pCancelEditableRow icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\n        </td>\n      </tr>\n  </ng-template>\n   \n   <ng-template pTemplate=\"paginatorleft\" let-state>\n    Showing {{(state.page  * state.rows) + 1}} to {{state.rows * (state.page + 1)}} of <strong>{{routeList?.length}}</strong> entries\n  </ng-template>\n</p-table>\n\n<!-- <p-dialog  [maximizable]=\"true\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\n    <p-header>\n            <span *ngIf=\"unitForm.value._id\">Update</span>\n            <span *ngIf=\"!unitForm.value._id\">Add</span> Unit\n    </p-header>\n<form [formGroup]=\"unitForm\">\n<div class=\"ui-g ui-fluid\" >\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-4\">\n            <label for=\"vin\">Code</label>\n        </div>\n        <div class=\"ui-g-8\">\n            <input pInputText  formControlName=\"unit_code\" disabled />\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-4\">\n            <label for=\"vin\">Tax Name</label>\n        </div>\n        <div class=\"ui-g-8\">\n            <input pInputText formControlName=\"unit_name\" autofocus />\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-4\">\n            <label for=\"brand\">Status</label>\n        </div>\n        <div class=\"ui-g-8\">\n            <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n\n        </div>\n    </div>\n</div>\n<p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n        <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\n    </div>\n</p-footer>\n</form>\n</p-dialog> -->\n\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\n    <p-footer>\n            <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \n            <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\n        </p-footer>\n    </p-confirmDialog>\n</p-card>\n</div>\n\n<app-route-form [displayDialog2]=\"displayDialog2\" [routeData]=\"routeData\"  (displayChangeEvent2)=\"onDialogClose2($event)\"  (routeEvent)=\"receiveRoute($event)\"></app-route-form>\n");

/***/ }),

/***/ "./src/app/component/inventory-mngt/master/route-master/route-master-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/master/route-master/route-master-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: RouteMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteMasterRoutingModule", function() { return RouteMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _route_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-master.component */ "./src/app/component/inventory-mngt/master/route-master/route-master.component.ts");




const routes = [
    { path: '', component: _route_master_component__WEBPACK_IMPORTED_MODULE_3__["RouteMasterComponent"] }
];
let RouteMasterRoutingModule = class RouteMasterRoutingModule {
};
RouteMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RouteMasterRoutingModule);



/***/ }),

/***/ "./src/app/component/inventory-mngt/master/route-master/route-master.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/master/route-master/route-master.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9tYXN0ZXIvcm91dGUtbWFzdGVyL3JvdXRlLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/master/route-master/route-master.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/master/route-master/route-master.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RouteMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteMasterComponent", function() { return RouteMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/route.service */ "./src/app/shared/route.service.ts");








let RouteMasterComponent = class RouteMasterComponent {
    constructor(router, confirmationService, messageService, routeService, commonService, sessionService) {
        this.router = router;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.routeService = routeService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.car = {};
        this.status = [];
        this.routeData = [];
    }
    ngOnInit() {
        this.bradCrum = [
            {
                label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/inventory-mngt/dashboard']);
                }
            },
            {
                label: "Master",
                command: event => {
                    this.router.navigate(["/inventory-mngt/master"]);
                }
            },
            {
                label: "Route",
                command: event => {
                    this.router.navigate(["/inventory-mngt/master/route"]);
                }
            }
        ];
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        // if(this.user_details.role == '0'){
        //   this.getTax();
        // }else{
        this.getRouteByCompany();
        // }
        this.cols = [
            // { field: '_id', header: '#' },
            { field: 'route_code', header: 'Code' },
            { field: 'route_name', header: 'Route Name' },
            { field: 'updatedAt', header: 'Updated Date' },
            { field: 'status', header: 'Status' }
            // { field: '', header: 'Action' }
        ];
    }
    getRoute() {
        this.loading = true;
        this.routeService.getRoute()
            .subscribe((data) => {
            console.log('routeList', data);
            this.routeList = data;
            this.loading = false;
        });
    }
    getRouteByCompany() {
        this.loading = true;
        this.routeService.getRouteByCompany()
            .subscribe((data) => {
            console.log('routeList', data);
            this.routeList = data;
            this.loading = false;
        });
    }
    showDialogToAdd() {
        // this.unitForm.reset();
        // this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u',this.routeList.length));
        // this.unitForm.controls['status'].setValue(1);
        // this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        this.displayDialog2 = true;
    }
    delete(data, index) {
        console.log('delete', data, index);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this Route?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.onRowDelete(data, index);
            }
        });
    }
    onRowEdit(route) {
        console.log(route);
        this.displayDialog2 = true;
        this.routeData = route;
        // this.unitForm.controls['_id'].setValue(unit._id);
        // this.unitForm.controls['unit_code'].setValue(unit.unit_code);
        // this.unitForm.controls['unit_name'].setValue(unit.unit_name);
        // this.unitForm.controls['status'].setValue(unit.status);
    }
    onRowDelete(tax, index) {
        console.log(tax, index);
        this.routeService.deleteRoute(tax._id)
            .subscribe((data) => {
            console.log('delete', data);
            this.routeList.splice(index, 1);
            this.routeList = [...this.routeList];
            this.messageService.add({ severity: 'success', summary: 'Route Deleted Successfully', detail: 'Route Deleted Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onChangeStatus(event, id) {
        console.log(event);
        let isChecked = event.checked;
        this.routeService.updateStatus(event.checked, id)
            .subscribe((data) => {
            this.messageService.add({ severity: 'success', summary: 'Status Updated Successfully', detail: 'Status Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onDialogClose2(event) {
        console.log(event);
        this.displayDialog2 = false;
    }
    receiveRoute(event) {
        console.log('receiveRoute', event);
        var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.routeList, function (o) { return o._id == event._id; });
        console.log(sliceIndex);
        if (sliceIndex > -1) {
            // Replace item at index using native splice
            this.routeList.splice(sliceIndex, 1, event);
            this.routeList = [...this.routeList];
        }
        else {
            this.routeList = [event, ...this.routeList];
        }
    }
};
RouteMasterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
];
RouteMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-route-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./route-master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/route-master/route-master.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./route-master.component.scss */ "./src/app/component/inventory-mngt/master/route-master/route-master.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
], RouteMasterComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/master/route-master/route-master.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/master/route-master/route-master.module.ts ***!
  \*************************************************************************************/
/*! exports provided: RouteMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteMasterModule", function() { return RouteMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _route_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-master-routing.module */ "./src/app/component/inventory-mngt/master/route-master/route-master-routing.module.ts");
/* harmony import */ var _route_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-master.component */ "./src/app/component/inventory-mngt/master/route-master/route-master.component.ts");
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
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shared_route_form_route_form_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/route-form/route-form.module */ "./src/app/component/inventory-mngt/shared/route-form/route-form.module.ts");




















let RouteMasterModule = class RouteMasterModule {
};
RouteMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_route_master_component__WEBPACK_IMPORTED_MODULE_4__["RouteMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _route_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["RouteMasterRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__["InputSwitchModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__["ProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__["MultiSelectModule"],
            _shared_route_form_route_form_module__WEBPACK_IMPORTED_MODULE_19__["RouteFormModule"]
        ]
    })
], RouteMasterModule);



/***/ })

}]);
//# sourceMappingURL=route-master-route-master-module-es2015.js.map