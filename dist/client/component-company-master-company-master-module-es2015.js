(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-company-master-company-master-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/company-master/company-master.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/company-master/company-master.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n        <div style=\"margin-top: 15px;\">\n                <div *ngIf=\"loding\" style=\"text-align: center\">\n                        <p-progressSpinner  [style]=\"{width: '50px', height: '50px'}\"></p-progressSpinner>\n                </div>\n      <p-card *ngIf=\"!loding\" >\n<p-table  #dt  [value]=\"companyList\" [columns]=\"cols\" dataKey=\"_id\"  [paginator]=\"true\"  [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['company_code','company_name','company_address','owner_name','phone']\"  [rows]=\"10\" >\n \n    <ng-template pTemplate=\"caption\">\n        <div class=\"ui-helper-clearfix\" >\n\n            <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button> -->\n            <!-- <button type=\"button\" pButton icon=\"fa fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button> -->\n        </div>\n        <div style=\"text-align: right\">        \n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                  <th style=\"width: 3em\">\n                          <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                      </th>\n                  <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\n                          {{col.header}}\n                          <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n\n                      </th>\n            <th style=\"width: 10%;\">\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\" ></button>\n\n            </th>\n        </tr>\n        <!-- <tr>\n            <th ></th>\n            <th *ngFor=\"let col of columns\" pResizableColumn>\n                <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt.filters[col.field]?.value\">\n            </th>            \n            <th ></th>\n        </tr> -->\n       \n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData   let-ri=\"rowIndex\">\n          <tr [pSelectableRow]=\"rowData\">\n                <td>\n                        <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n                    </td>\n              <td>\n                   {{rowData.company_details_id.company_code}}\n              </td>\n            <td>              \n                    {{rowData.company_details_id.company_name}}\n            </td>\n            <td>              \n                    {{rowData.company_details_id.company_address}}\n            </td>   <td>              \n                    {{rowData.company_details_id.owner_name}}\n            </td> \n            <td>              \n                {{rowData.company_details_id.phone}}\n        </td>\n        <td>              \n            {{rowData.company_details_id.gstin}}\n    </td>\n            <td>\n                {{rowData.company_details_id.updatedAt | date:'medium'}}\n        </td>\n            <td style=\"text-align: center\">\n                <p-inputSwitch [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event)\"></p-inputSwitch> \n            </td>\n            <td style=\"text-align:center\">\n                <button  pButton type=\"button\"  icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEdit(rowData)\" style=\"    margin: 0px 5px;\"></button>\n                <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\n                <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\n            </td>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"footer\" >\n            <tr>\n               <td colspan=\"10\" style=\"text-align: center\">\n                       There are {{companyList?.length}} records\n               </td>\n           </tr>\n           \n       </ng-template>\n   \n\n\n</p-table>\n\n<p-dialog  [maximizable]=\"true\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '700px'}\">\n    \n  <!-- <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"> -->\n    <p-header>\n                <span *ngIf=\"companyForm.value._id\">Update</span>\n                <span *ngIf=\"!companyForm.value._id\">Add</span> Company\n        </p-header>\n        <div class=\"profile-wrapper\">\n    <form [formGroup]=\"companyForm\" > \n    <div class=\"ui-g ui-fluid\" >\n            <div class=\"ui-g-6\">\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Company Code</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText  formControlName=\"company_code\" disabled />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Company Name</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText formControlName=\"company_name\" autofocus />\n                </div>\n            </div>\n        <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Company Address</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <!-- <input pInputText id=\"vin\" [(ngModel)]=\"car.customer_name\"  /> -->\n                    <input pInputText  formControlName=\"company_address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\n\n                </div>\n            </div>\n         \n  \n            <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">Owner Name</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <input pInputText  formControlName=\"owner_name\"  />\n                    </div>\n                </div>\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">Company Phone</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask>\n        \n                    </div>\n                </div>\n               \n    </div>\n        <div class=\"ui-g-6\">\n                <div class=\"profile-wrap\" >\n                        <div class=\"prof-img\">\n                            <img src=\"./assets/img/logo.png\" class=\"car-add\" *ngIf=\"!croppedImage\">\n                            <img [src]=\"croppedImage\" *ngIf=\"croppedImage\" class=\"car-addafter\" >\n                            <img src=\"{{IMG_URL}}/assets/lease_intake/img/loading-preview.gif\" class=\"loadingimg car-addafter\" *ngIf=\"logoLoading\">\n                        </div>\n                        <button class=\"cmn-btn\" type=\"button\" style=\"border:none;float:initial;font-size: 12px !important;background: #ef6a97;margin-top: 15px;position: relative;\">\n                            <input #upload_logofile type=\"file\" accept=\".png, .jpg, .jpeg\" style=\"position:absolute;display:inline-block;opacity:0;width:100%;left: 0;\"\n                            (change)=\"fileChangeEvent($event.target.files)\"/>\n                            <i class=\"pi pi-cloud-upload\" style=\"font-size:23px;\"></i>Upload Logo</button>\n                    </div>\n                    <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"vin\">GSTIN</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                    <input pInputText formControlName=\"gstin\"  />\n                \n                            </div>\n                        </div>\n            </div>\n    </div>\n</form>\n  \n\n<form [formGroup]=\"userForm\" > \n        <div class=\"ui-g ui-fluid\" >\n                <div class=\"ui-g-6\">\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">Full Name</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <input pInputText formControlName=\"user_name\" autofocus />\n                    </div>\n                </div>\n                <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"vin\">User Email</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                                <div class=\"ui-inputgroup\">\n                                        <input pInputText formControlName=\"user_email\" emailExist (focusout)=\"onCheckEmailExist()\" />\n                                        <button pButton type=\"button\" icon=\"pi pi-spin  pi-spinner\" class=\"ui-button-warn\" *ngIf=\"emailCheckStatus == 0\"></button>    \n                                        <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\" *ngIf=\"emailCheckStatus == 1\"></button>    \n                                        <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" *ngIf=\"emailCheckStatus == 2\"></button>   \n                  \n                                    </div>\n                        </div>\n                    </div>\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"year\">User Password</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <input type=\"password\" pPassword formControlName=\"user_pwd\" />\n                    </div>\n                </div>\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"year\">Confirm Password</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <input type=\"password\" pPassword formControlName=\"cnfirm_user_pwd\" />\n                    </div>\n                </div>\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"year\">Role</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <p-dropdown [options]=\"roleList\" formControlName=\"role\" placeholder=\"Select Role\" filter=\"true\" >\n                        </p-dropdown>\n                    </div>\n                </div>\n                \n        </div>\n        <div class=\"ui-g-6\">\n                <div class=\"profile-wrap\" >\n                        <div class=\"prof-img\">\n                            <img src=\"./assets/img/userface.jpg\" class=\"car-add\" *ngIf=\"!croppedImage1\">\n                            <img [src]=\"croppedImage1\" *ngIf=\"croppedImage1\" class=\"car-addafter\" >\n                            <img src=\"{{IMG_URL}}/assets/lease_intake/img/loading-preview.gif\" class=\"loadingimg car-addafter\" *ngIf=\"logoLoading\">\n                        </div>\n                        <button class=\"cmn-btn\" type=\"button\" style=\"border:none;float:initial;font-size: 12px !important;background: #ef6a97;margin-top: 15px;position: relative;\">\n                            <input #upload_logofile type=\"file\" accept=\".png, .jpg, .jpeg\" style=\"position:absolute;display:inline-block;opacity:0;width:100%;left: 0;\"\n                            (change)=\"fileChangeEvent1($event.target.files)\"/>\n                            <i class=\"pi pi-cloud-upload\" style=\"font-size:23px;\"></i>Upload Profile</button>\n                    </div>\n                   \n                    <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"brand\">Status</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                            <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n            \n                        </div>\n                    </div>\n            </div>\n\n        </div>\n        </form>\n        </div>\n<!-- </p-steps> -->\n<p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n            <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n            <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\n        </div>\n    </p-footer>\n</p-dialog>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\n        <p-footer>\n                <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \n                <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\n            </p-footer>\n        </p-confirmDialog>\n\n</p-card>\n\n</div>\n\n");

/***/ }),

/***/ "./src/app/component/company-master/company-master-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/company-master/company-master-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CompanyMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMasterRoutingModule", function() { return CompanyMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-master.component */ "./src/app/component/company-master/company-master.component.ts");




const routes = [
    { path: '', component: _company_master_component__WEBPACK_IMPORTED_MODULE_3__["CompanyMasterComponent"] }
];
let CompanyMasterRoutingModule = class CompanyMasterRoutingModule {
};
CompanyMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompanyMasterRoutingModule);



/***/ }),

/***/ "./src/app/component/company-master/company-master.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/component/company-master/company-master.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-wrapper {\n  background: #fff;\n}\n.profile-wrapper h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n.profile-wrapper h4 span {\n  padding-top: 5px;\n  color: #c7c7c7;\n}\n.profile-wrapper button:focus {\n  outline: none;\n}\n.profile-wrapper .cmn-btn {\n  float: right;\n  padding: 3px 21px !important;\n  border-radius: 23px !important;\n  background: #08bd65;\n  color: #fff !important;\n  font-size: 15px !important;\n  text-transform: uppercase;\n  padding-left: 15px !important;\n  border: none;\n}\n.profile-wrapper .cmn-btn i {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px;\n}\n.profile-wrapper .profile-wrap {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  text-align: center;\n  height: 193px;\n  padding: 15px;\n  margin-bottom: 25px;\n}\n.profile-wrapper .profile-wrap .prof-img {\n  width: 115px;\n  height: 115px;\n  position: relative;\n  box-shadow: 0 0 10px #d4d4d4;\n  border-radius: 100%;\n  margin: auto;\n}\n.profile-wrapper .profile-wrap .prof-img img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbXBhbnktbWFzdGVyL0U6XFxvd253YXlzb2Z0LmNvbVxcaW52ZW50b3J5LW1uZ3RcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxjb21wYW55LW1hc3RlclxcY29tcGFueS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9jb21wYW55LW1hc3Rlci9jb21wYW55LW1hc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURBQztFQUNJLGVBQUE7RUFBZSx5QkFBQTtFQUEwQixtQkFBQTtBQ0k5QztBREZFO0VBQ0csZ0JBQUE7RUFBb0IsY0FBQTtBQ0t6QjtBREZDO0VBQ0ksYUFBQTtBQ0lMO0FERkM7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFBa0MsWUFBQTtBQ0t2QztBRERDO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHTDtBREFDO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VMO0FEREs7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHVDtBREZTO0VBQ0ksZUFBQTtFQUFlLGdCQUFBO0VBQWdCLGtCQUFBO0VBQW1CLE1BQUE7RUFBTSxPQUFBO0VBQU8sUUFBQTtFQUFRLFNBQUE7RUFBUyxZQUFBO0VBQVksbUJBQUE7QUNZekciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY29tcGFueS1tYXN0ZXIvY29tcGFueS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gaDR7XHJcbiAgICAgZm9udC1zaXplOjE4cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjI1cHg7XHJcbiB9XHJcbiAgaDQgc3BhbntcclxuICAgICBwYWRkaW5nLXRvcDo1cHg7ICAgIGNvbG9yOiAjYzdjN2M3O1xyXG4gfVxyXG4gXHJcbiBidXR0b246Zm9jdXMge1xyXG4gICAgIG91dGxpbmU6IG5vbmU7XHJcbiB9XHJcbiAuY21uLWJ0biB7XHJcbiAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIHBhZGRpbmc6IDNweCAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQ6ICMwOGJkNjU7XHJcbiAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50OyAgICBib3JkZXI6IG5vbmU7XHJcbiAgXHJcbiB9XHJcbiBcclxuIC5jbW4tYnRuIGkge1xyXG4gICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgIGhlaWdodDogMjVweDtcclxuICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiB9XHJcbiBcclxuIC5wcm9maWxlLXdyYXB7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGhlaWdodDogMTkzcHg7XHJcbiAgICAgcGFkZGluZzogMTVweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgIC5wcm9mLWltZ3tcclxuICAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkNGQ0ZDQ7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiB9XHJcbiB9IiwiLnByb2ZpbGUtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucHJvZmlsZS13cmFwcGVyIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnByb2ZpbGUtd3JhcHBlciBoNCBzcGFuIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgY29sb3I6ICNjN2M3Yzc7XG59XG4ucHJvZmlsZS13cmFwcGVyIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5jbW4tYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAzcHggMjFweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMwOGJkNjU7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnByb2ZpbGUtd3JhcHBlciAuY21uLWJ0biBpIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtd3JhcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDE5M3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS13cmFwIC5wcm9mLWltZyB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZDRkNGQ0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvZmlsZS13cmFwcGVyIC5wcm9maWxlLXdyYXAgLnByb2YtaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/company-master/company-master.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/company-master/company-master.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompanyMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMasterComponent", function() { return CompanyMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/company.service */ "./src/app/shared/company.service.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/image-upload.service */ "./src/app/shared/image-upload.service.ts");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let CompanyMasterComponent = class CompanyMasterComponent {
    constructor(router, _fb, auth, confirmationService, messageService, companyService, commonService, imageUploadService, userService) {
        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.companyService = companyService;
        this.commonService = commonService;
        this.imageUploadService = imageUploadService;
        this.userService = userService;
        this.loding = true;
        this.car = {};
        this.status = [];
        this.logoImageChangedEvent = '';
        this.profileImageChangedEvent = '';
        this.croppedImage = '';
        this.croppedImage1 = '';
        this.activeIndex = 0;
        this.futureMonthEnd = moment__WEBPACK_IMPORTED_MODULE_12__().add(1, 'M');
        this.bradCrum = [
            { label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/dashboard']);
                }
            },
            { label: 'Master', command: (event) => {
                    this.router.navigate(['/dashboard']);
                } },
            { label: 'Company' },
        ];
        this.roleList = [
            { label: 'Admin', value: 1 }
        ];
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.companyForm = this._fb.group({
            _id: [''],
            company_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_image: [''],
            company_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            owner_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gstin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.userForm = this._fb.group({
            _id: [''],
            user_code: ['u-0001', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            user_image: [''],
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
            user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cnfirm_user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: [''],
            role: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.cols = [
            // { field: '_id', header: '#' },
            { field: 'company_code', header: 'Code' },
            { field: 'company_name', header: 'Company Name' },
            { field: 'company_address', header: 'Company Address' },
            { field: 'owner_name', header: 'Owner Name' },
            { field: 'phone', header: 'Phone' },
            { field: 'gstin', header: 'GSTIN' },
            { field: 'updatedAt', header: 'Updated Date' },
            { field: 'status', header: 'Status' }
            // { field: '', header: 'Action' }
        ];
        this.items = [{
                label: 'Company',
                command: (event) => {
                    this.activeIndex = 0;
                    this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Admin User',
                command: (event) => {
                    this.activeIndex = 1;
                    this.messageService.add({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            }
        ];
    }
    ngOnInit() {
        this.getCompanyAdminUsers();
    }
    handleAddressChange(address) {
        console.log('address', address);
        // Do some stuff
        this.companyForm.controls['company_address'].setValue(address.formatted_address);
    }
    getCompanyAdminUsers() {
        this.companyService.getCompanyAdminUsers()
            .subscribe((data) => {
            console.log('companyList', data);
            this.companyList = data;
            this.loding = false;
        });
    }
    showDialogToAdd() {
        this.companyForm.reset();
        this.userForm.reset();
        this.croppedImage = '';
        this.croppedImage1 = '';
        this.companyForm.controls['company_code'].setValue(this.commonService.incrCode('c', this.companyList.length));
        this.companyForm.controls['status'].setValue(1);
        this.userForm.controls['user_code'].setValue('u-0001');
        this.userForm.controls['status'].setValue(1);
        this.displayDialog = true;
        this.emailCheckStatus = null;
    }
    checkValidity() {
        Object.keys(this.companyForm.controls).forEach((key) => {
            this.companyForm.controls[key].markAsDirty();
        });
    }
    checkValidity1() {
        Object.keys(this.userForm.controls).forEach((key) => {
            this.userForm.controls[key].markAsDirty();
        });
    }
    save() {
        console.log(this.companyForm, this.userForm);
        if (this.companyForm.invalid && this.userForm.invalid) {
            this.checkValidity();
            this.checkValidity1();
            return false;
        }
        console.log('data', this.companyForm.value);
        if (this.companyForm.value._id) {
            if (this.logoImageChangedEvent) {
                this.companyLogoUpload();
            }
            else {
                this.onRowUpdateCompany(this.companyForm.value);
            }
        }
        else {
            if (this.logoImageChangedEvent) {
                this.companyLogoUpload();
            }
            else {
                this.onRowAddCompany(this.companyForm.value);
            }
        }
    }
    delete(company, index) {
        console.log('delete', company, index);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this company?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.onRowDeleteCompany(company, index);
            }
        });
    }
    onRegisterPayment(cdata) {
        this.messageService.clear();
        this.auth.onRegisterPayment(cdata)
            .subscribe((data) => {
            console.log('data', data);
            // this.onRegisterUser();
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
    onRowAddCompany(company) {
        console.log('onRowAdd', company);
        // this.cars.push(newcar); 
        this.companyService.addCompany(company)
            .subscribe((data) => {
            console.log('add company', data);
            // add payment
            let payData = {
                plan_type: 0,
                payment_amount: 15000,
                currency: 'INR',
                company_details_id: data._id,
                payment_details: '',
                expiry_date: this.futureMonthEnd,
                status: 0
            };
            this.onRegisterPayment(payData);
            // this.companyList = [ data,...this.companyList];
            console.log('this.companyList', this.companyList);
            this.messageService.add({ severity: 'success', summary: 'Company Added Successfully', detail: 'Company Added Successfully' });
            this.displayDialog = false;
            if (this.profileImageChangedEvent) {
                this.profileImageUpload(data);
            }
            else {
                this.userForm.controls['company_details_id'].setValue(data._id);
                this.onRowAddUser(this.userForm.value, data);
            }
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowAddUser(user, cdata) {
        console.log('onRowAddUser', user);
        // this.cars.push(newcar); 
        this.userService.addUser(user)
            .subscribe((data) => {
            console.log('add user', data);
            data.company_details_id = cdata; // add company details
            this.companyList = [data, ...this.companyList];
            console.log('this.companyList', this.companyList);
            this.messageService.add({ severity: 'success', summary: 'User Added Successfully', detail: 'User Added Successfully' });
            this.displayDialog = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowEdit(user) {
        console.log(user);
        this.displayDialog = true;
        this.companyForm.controls['_id'].setValue(user.company_details_id._id);
        this.companyForm.controls['company_code'].setValue(user.company_details_id.company_code);
        this.companyForm.controls['company_name'].setValue(user.company_details_id.company_name);
        this.companyForm.controls['company_image'].setValue(user.company_details_id.company_image);
        this.companyForm.controls['company_address'].setValue(user.company_details_id.company_address);
        this.companyForm.controls['owner_name'].setValue(user.company_details_id.owner_name);
        this.companyForm.controls['phone'].setValue(user.company_details_id.phone);
        this.companyForm.controls['gstin'].setValue(user.company_details_id.gstin);
        this.companyForm.controls['status'].setValue(user.company_details_id.status);
        this.userForm.controls['_id'].setValue(user._id);
        this.userForm.controls['user_code'].setValue(user.user_code);
        this.userForm.controls['user_name'].setValue(user.user_name);
        this.userForm.controls['user_image'].setValue(user.user_image);
        this.userForm.controls['user_email'].setValue(user.user_email);
        this.userForm.controls['user_pwd'].setValue(user.user_pwd);
        this.userForm.controls['cnfirm_user_pwd'].setValue(user.user_pwd);
        this.userForm.controls['company_details_id'].setValue(user.company_details_id._id);
        this.userForm.controls['role'].setValue(user.role);
        this.userForm.controls['status'].setValue(user.status);
        this.croppedImage = user.company_details_id.company_image ? user.company_details_id.company_image : '';
        this.croppedImage1 = user.user_image ? user.user_image : '';
        this.emailCheckStatus = user.user_email ? 1 : null;
    }
    onRowDeleteCompany(company, index) {
        console.log(company, index);
        this.companyService.deleteCompany(company._id)
            .subscribe((data) => {
            console.log('delete', data);
            this.companyList.splice(index, 1);
            this.companyList = [...this.companyList];
            this.messageService.add({ severity: 'success', summary: 'Company Deleted Successfully', detail: 'Company Deleted Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowDeleteUser(user, index) {
        console.log(user, index);
        this.companyService.deleteCompany(user._id)
            .subscribe((data) => {
            console.log('delete', data);
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowUpdateCompany(company) {
        console.log(company);
        this.displayDialog = false;
        company.company_address = (this.companyForm.value.company_address) ? this.companyForm.value.company_address : company.company_address;
        this.companyService.updateCompany(company)
            .subscribe((data) => {
            console.log('update', data);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_7__["findIndex"](this.companyList, function (o) { return o._id == company._id; });
            console.log(sliceIndex);
            if (sliceIndex > -1) {
                // Replace item at index using native splice
                this.companyList.splice(sliceIndex, 1, data);
            }
            this.companyList = [...this.companyList];
            this.messageService.add({ severity: 'success', summary: 'Company Updated Successfully', detail: 'Company Updated Successfully' });
            if (this.profileImageChangedEvent) {
                this.profileImageUpload(data);
            }
            else {
                this.userForm.controls['company_details_id'].setValue(data._id);
                this.onRowUpdateUser(this.userForm.value);
            }
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowUpdateUser(user) {
        console.log(user);
        this.displayDialog = false;
        this.userService.updateUser(user)
            .subscribe((data) => {
            console.log('update', data);
            this.messageService.add({ severity: 'success', summary: 'User Updated Successfully', detail: 'User Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onChangeStatus(event) {
        console.log(event);
        let isChecked = event.checked;
    }
    companyLogoUpload() {
        this.imageUploadService.companyLogoUpload(this.logoImageChangedEvent)
            .subscribe((data) => {
            console.log(data);
            this.companyForm.controls['company_image'].setValue(data);
            if (this.companyForm.value._id) {
                this.onRowUpdateCompany(this.companyForm.value);
            }
            else {
                this.onRowAddCompany(this.companyForm.value);
            }
        });
    }
    profileImageUpload(cdata) {
        this.imageUploadService.profileImageUpload(this.profileImageChangedEvent)
            .subscribe((data) => {
            console.log(data);
            this.userForm.controls['user_image'].setValue(data);
            if (this.companyForm.value._id) {
                this.onRowUpdateUser(this.userForm.value);
            }
            else {
                this.onRowAddUser(this.userForm.value, cdata);
            }
        });
    }
    fileChangeEvent(file) {
        console.log(file);
        this.logoImageChangedEvent = file.item(0);
        console.log('imageChangedEvent', this.logoImageChangedEvent);
        // show image preview
        var render = new FileReader();
        render.onloadend = (e) => {
            console.log('reslt', render);
            this.croppedImage = render.result;
        };
        render.readAsDataURL(this.logoImageChangedEvent);
    }
    fileChangeEvent1(file) {
        console.log(file);
        this.profileImageChangedEvent = file.item(0);
        console.log('profileImageChangedEvent', this.profileImageChangedEvent);
        // show image preview
        var render = new FileReader();
        render.onloadend = (e) => {
            console.log('reslt', render);
            this.croppedImage1 = render.result;
        };
        render.readAsDataURL(this.profileImageChangedEvent);
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    onCheckEmailExist() {
        console.log('valid', this.userForm.controls['user_email'].invalid);
        if (this.userForm.value.user_email != '' && this.userForm.controls['user_email'].invalid) {
            this.emailCheckStatus = null;
            return false;
        }
        this.emailCheckStatus = null;
        console.log('onCheckEmailExist', this.userForm.value.user_email);
        let _id = this.userForm.value._id;
        var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_7__["findIndex"](this.companyList, function (o) { return o._id == _id; });
        console.log(sliceIndex);
        if (sliceIndex > -1) {
            if (this.companyList[sliceIndex].user_email == this.userForm.value.user_email) { // when not change
                this.emailCheckStatus = 1;
                return false;
            }
        }
        this.emailCheckStatus = 0;
        this.userService.onCheckEmailExist(this.userForm.value.user_email)
            .subscribe((data) => {
            console.log('data', data);
            if (data.length != 0) {
                this.emailCheckStatus = 2;
                this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Email already exist!' });
                this.userForm.controls['user_email'].setErrors({ 'emailExist': true });
                this.userForm.controls['user_email'].markAsDirty();
            }
            else {
                this.messageService.clear();
                this.emailCheckStatus = 1;
                this.userForm.controls['user_email'].setErrors({ 'emailExist': null });
                this.userForm.controls['user_email'].updateValueAndValidity();
            }
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
};
CompanyMasterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_10__["ImageUploadService"] },
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceDirective"])
], CompanyMasterComponent.prototype, "placesRef", void 0);
CompanyMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/company-master/company-master.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-master.component.scss */ "./src/app/component/company-master/company-master.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_10__["ImageUploadService"], src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]])
], CompanyMasterComponent);



/***/ }),

/***/ "./src/app/component/company-master/company-master.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/company-master/company-master.module.ts ***!
  \*******************************************************************/
/*! exports provided: CompanyMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMasterModule", function() { return CompanyMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _company_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-master-routing.module */ "./src/app/component/company-master/company-master-routing.module.ts");
/* harmony import */ var _company_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-master.component */ "./src/app/component/company-master/company-master.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/steps */ "./node_modules/primeng/steps.js");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_steps__WEBPACK_IMPORTED_MODULE_23__);
























let CompanyMasterModule = class CompanyMasterModule {
};
CompanyMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_master_component__WEBPACK_IMPORTED_MODULE_4__["CompanyMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _company_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyMasterRoutingModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_19__["InputSwitchModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_20__["ChartModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_6__["InputMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinnerModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__["ImageCropperModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_22__["FileUploadModule"],
            primeng_steps__WEBPACK_IMPORTED_MODULE_23__["StepsModule"]
        ]
    })
], CompanyMasterModule);



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
//# sourceMappingURL=component-company-master-company-master-module-es2015.js.map