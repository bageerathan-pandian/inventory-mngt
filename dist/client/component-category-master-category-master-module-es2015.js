(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-category-master-category-master-module"],{

/***/ "./node_modules/primeng/components/inputswitch/inputswitch.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/inputswitch/inputswitch.js ***!
  \********************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
exports.INPUTSWITCH_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return InputSwitch; }),
    multi: true
};
var InputSwitch = /** @class */ (function () {
    function InputSwitch(cd) {
        this.cd = cd;
        this.onChange = new core_1.EventEmitter();
        this.checked = false;
        this.focused = false;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    InputSwitch.prototype.onClick = function (event, cb) {
        if (!this.disabled && !this.readonly) {
            this.toggle(event);
            cb.focus();
        }
    };
    InputSwitch.prototype.onInputChange = function (event) {
        if (!this.readonly) {
            var inputChecked = event.target.checked;
            this.updateModel(event, inputChecked);
        }
    };
    InputSwitch.prototype.toggle = function (event) {
        this.updateModel(event, !this.checked);
    };
    InputSwitch.prototype.updateModel = function (event, value) {
        this.checked = value;
        this.onModelChange(this.checked);
        this.onChange.emit({
            originalEvent: event,
            checked: this.checked
        });
    };
    InputSwitch.prototype.onFocus = function (event) {
        this.focused = true;
    };
    InputSwitch.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
    };
    InputSwitch.prototype.writeValue = function (checked) {
        this.checked = checked;
        this.cd.markForCheck();
    };
    InputSwitch.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    InputSwitch.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    InputSwitch.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputSwitch.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], InputSwitch.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InputSwitch.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InputSwitch.prototype, "readonly", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputSwitch.prototype, "onChange", void 0);
    InputSwitch = __decorate([
        core_1.Component({
            selector: 'p-inputSwitch',
            template: "\n        <div [ngClass]=\"{'ui-inputswitch ui-widget': true, 'ui-inputswitch-checked': checked, 'ui-state-disabled': disabled, 'ui-inputswitch-readonly': readonly, 'ui-inputswitch-focus': focused}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event, cb)\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.tabindex]=\"tabindex\" [checked]=\"checked\" (change)=\"onInputChange($event)\"\n                        (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [disabled]=\"disabled\" />\n            </div>\n            <span class=\"ui-inputswitch-slider\"></span>\n        </div>\n    ",
            providers: [exports.INPUTSWITCH_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], InputSwitch);
    return InputSwitch;
}());
exports.InputSwitch = InputSwitch;
var InputSwitchModule = /** @class */ (function () {
    function InputSwitchModule() {
    }
    InputSwitchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputSwitch],
            declarations: [InputSwitch]
        })
    ], InputSwitchModule);
    return InputSwitchModule;
}());
exports.InputSwitchModule = InputSwitchModule;
//# sourceMappingURL=inputswitch.js.map

/***/ }),

/***/ "./node_modules/primeng/inputswitch.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/inputswitch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputswitch/inputswitch */ "./node_modules/primeng/components/inputswitch/inputswitch.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/category-master/category-master.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/category-master/category-master.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n        <div style=\"margin-top: 15px;\">\n                <div *ngIf=\"loding\" style=\"text-align: center\">\n                        <p-progressSpinner  [style]=\"{width: '50px', height: '50px'}\"></p-progressSpinner>\n                </div>\n      <p-card *ngIf=\"!loding\" >\n      <p-table  #dt1 [columns]=\"cols\"  [value]=\"categoryList\" dataKey=\"_id\" [paginator]=\"true\" [rows]=\"10\"   [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['category_code','category_name']\">\n          <ng-template pTemplate=\"caption\">\n             \n           \n              <div style=\"text-align: right;width: 50%; float: right; margin-bottom: 10px;\">        \n                  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \n                  <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\n              </div>\n          </ng-template>\n          <ng-template pTemplate=\"header\" let-columns>\n              <tr>\n                    <th style=\"width: 3em\">\n                            <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                        </th>\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\n                            {{col.header}}\n                            <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n\n                        </th>\n                 <th style=\"width: 10%;\">\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\"  pTooltip=\"Add new Category\" tooltipPosition=\"top\" ></button>\n\n            </th>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-rowData  let-ri=\"rowIndex\" >\n            \n              <tr [pSelectableRow]=\"rowData\">\n                    <td>\n                            <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n                        </td>\n                  <td>\n                      {{rowData.category_code}}\n                  </td>\n                  <td>\n                              {{rowData.category_name}}\n                  </td>\n                  <td>\n                    {{rowData.updatedAt | date:'medium'}}\n            </td>\n                  <td style=\"text-align: center\">\n                    <p-inputSwitch [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event,rowData.id)\"></p-inputSwitch> \n                </td>\n                <td style=\"text-align:center\">\n                    <button  pButton type=\"button\"  icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEdit(rowData)\" style=\"    margin: 0px 5px;\"></button>\n                    <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\n                    <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\n                </td>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"footer\">\n                <tr>\n                   <td colspan=\"6\" style=\"text-align: center\">\n                           There are {{categoryList?.length}} records\n                   </td>\n               </tr>\n               \n           </ng-template>\n      </p-table>\n\n      <p-dialog    [maximizable]=\"true\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\n            <p-header>\n                    <span *ngIf=\"categoryForm.value._id\">Update</span>\n                    <span *ngIf=\"!categoryForm.value._id\">Add</span> Category\n            </p-header>\n        <form [formGroup]=\"categoryForm\">\n        <div class=\"ui-g ui-fluid\" >\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label > Code</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText  formControlName=\"category_code\" disabled />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label >Category Name</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText  formControlName=\"category_name\" autofocus />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"brand\">Status</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n    \n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </form>\n    </p-dialog>\n    \n    <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\n            <p-footer>\n                    <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \n                    <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\n                </p-footer>\n            </p-confirmDialog>\n    </p-card>\n    </div>");

/***/ }),

/***/ "./src/app/component/category-master/category-master-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/category-master/category-master-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMasterRoutingModule", function() { return CategoryMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-master.component */ "./src/app/component/category-master/category-master.component.ts");




const routes = [
    { path: '', component: _category_master_component__WEBPACK_IMPORTED_MODULE_3__["CategoryMasterComponent"] }
];
let CategoryMasterRoutingModule = class CategoryMasterRoutingModule {
};
CategoryMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoryMasterRoutingModule);



/***/ }),

/***/ "./src/app/component/category-master/category-master.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/category-master/category-master.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYXRlZ29yeS1tYXN0ZXIvY2F0ZWdvcnktbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/category-master/category-master.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/category-master/category-master.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoryMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMasterComponent", function() { return CategoryMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/category.service */ "./src/app/shared/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");









let CategoryMasterComponent = class CategoryMasterComponent {
    constructor(router, _fb, auth, confirmationService, messageService, categoryService, commonService) {
        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.categoryService = categoryService;
        this.commonService = commonService;
        this.loding = true;
        this.categoryListSheet = [];
        this.clonedCars = {};
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
                label: "Category",
                command: event => {
                    this.router.navigate(["/master/category"]);
                }
            }
        ];
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.categoryForm = this._fb.group({
            _id: [''],
            company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            category_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            category_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        // if(this.user_details.role == '0'){
        //   this.getCategory();
        // }else{
        this.getCategoryByCompany(this.auth.getUserCompanyId());
        // }
        this.cols = [
            // { field: '_id', header: '#' },
            { field: 'category_code', header: 'Code' },
            { field: 'category_name', header: 'Category Name' },
            { field: 'updatedAt', header: 'Updated Date' },
            { field: 'status', header: 'Status' }
            // { field: '', header: 'Action' }
        ];
    }
    getCategory() {
        this.categoryService.getCategory()
            .subscribe((data) => {
            console.log('categoryList', data);
            this.categoryList = data;
            this.loding = false;
        });
    }
    getCategoryByCompany(id) {
        this.categoryService.getCategoryByCompany(id)
            .subscribe((data) => {
            console.log('categoryList', data);
            this.categoryList = data;
            this.loding = false;
        });
    }
    showDialogToAdd() {
        this.categoryForm.reset();
        this.categoryForm.controls['category_code'].setValue(this.commonService.incrCode('c', this.categoryList.length));
        this.categoryForm.controls['status'].setValue(1);
        this.categoryForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id);
        this.displayDialog = true;
    }
    checkValidity() {
        Object.keys(this.categoryForm.controls).forEach((key) => {
            this.categoryForm.controls[key].markAsDirty();
        });
    }
    save() {
        if (this.categoryForm.invalid) {
            this.checkValidity();
            return false;
        }
        if (this.categoryForm.value._id) {
            this.onRowUpdate(this.categoryForm.value);
        }
        else {
            this.onRowAdd(this.categoryForm.value);
        }
    }
    delete(data, index) {
        console.log('delete', data, index);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this category?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.onRowDelete(data, index);
            }
        });
    }
    onRowAdd(category) {
        console.log('onRowAdd', category);
        // this.cars.push(newcar); 
        this.categoryService.addCategory(category)
            .subscribe((data) => {
            console.log('add cat', data);
            this.categoryList = [data, ...this.categoryList];
            console.log('this.categoryList', this.categoryList);
            this.messageService.add({ severity: 'success', summary: 'Category Added Successfully', detail: 'Category Added Successfully' });
            this.displayDialog = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowEdit(category) {
        console.log(category);
        this.displayDialog = true;
        this.categoryForm.controls['_id'].setValue(category._id);
        this.categoryForm.controls['category_code'].setValue(category.category_code);
        this.categoryForm.controls['category_name'].setValue(category.category_name);
        this.categoryForm.controls['company_details_id'].setValue(category.company_details_id._id);
        this.categoryForm.controls['status'].setValue(category.status);
    }
    onRowDelete(category, index) {
        console.log(category, index);
        this.categoryService.deleteCategory(category._id)
            .subscribe((data) => {
            console.log('delete', data);
            this.categoryList.splice(index, 1);
            this.categoryList = [...this.categoryList];
            this.messageService.add({ severity: 'success', summary: 'Category Deleted Successfully', detail: 'Category Deleted Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowUpdate(category) {
        console.log('onRowUpdate', category);
        this.displayDialog = false;
        this.categoryService.updateCategory(category)
            .subscribe((data) => {
            console.log('update', data);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.categoryList, function (o) { return o._id == category._id; });
            console.log(sliceIndex);
            if (sliceIndex > -1) {
                // Replace item at index using native splice
                this.categoryList.splice(sliceIndex, 1, data);
            }
            this.categoryList = [...this.categoryList];
            this.messageService.add({ severity: 'success', summary: 'Category Updated Successfully', detail: 'Category Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onChangeStatus(event, id) {
        console.log(event);
        let isChecked = event.checked;
        this.categoryService.updateStatus(event.checked, id)
            .subscribe((data) => {
            this.messageService.add({ severity: 'success', summary: 'Status Updated Successfully', detail: 'Status Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
};
CategoryMasterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
];
CategoryMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-category-master",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/category-master/category-master.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-master.component.scss */ "./src/app/component/category-master/category-master.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], CategoryMasterComponent);



/***/ }),

/***/ "./src/app/component/category-master/category-master.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/category-master/category-master.module.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMasterModule", function() { return CategoryMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _category_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-master-routing.module */ "./src/app/component/category-master/category-master-routing.module.ts");
/* harmony import */ var _category_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-master.component */ "./src/app/component/category-master/category-master.component.ts");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__);


















let CategoryMasterModule = class CategoryMasterModule {
};
CategoryMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_category_master_component__WEBPACK_IMPORTED_MODULE_4__["CategoryMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _category_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoryMasterRoutingModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__["InputSwitchModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__["ProgressSpinnerModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"]
        ]
    })
], CategoryMasterModule);



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
//# sourceMappingURL=component-category-master-category-master-module-es2015.js.map