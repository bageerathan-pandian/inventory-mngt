(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-company-info-company-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/company-info/company-info.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/company-info/company-info.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n        <div style=\"margin-top: 15px;\">\n<p-card>\n        <div class=\"profile-wrapper\">\n\n\n    <form [formGroup]=\"companyForm\">\n        <div class=\"ui-g ui-fluid\" >\n            \n                <div class=\"ui-g-6\">\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Company Name</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"vin\" formControlName=\"company_name\" autofocus />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">Company Address</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <!-- <input pInputText id=\"vin\" [(ngModel)]=\"car.customer_name\"  /> -->\n                        <input pInputText  formControlName=\"company_address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\n    \n                    </div>\n                </div>\n               \n                <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"vin\">Owner Name</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                            <input pInputText id=\"vin\" formControlName=\"owner_name\"  />\n                        </div>\n                    </div>\n                    <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"vin\">Company Phone</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                            <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask>\n            \n                        </div>\n                    </div>\n                    <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"vin\">GSTIN</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                                <input pInputText id=\"vin\" formControlName=\"gstin\"  />\n            \n                        </div>\n                    </div>\n            <!-- <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"brand\">Status</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n    \n                </div>\n            </div> -->\n        </div>\n        <div class=\"ui-g-6\">\n                <div class=\"profile-wrap\">\n                        <div class=\"prof-img\">\n                            <img src=\"./assets/img/logo.png\" class=\"car-add\" *ngIf=\"!croppedImage\">\n                            <img [src]=\"croppedImage\" *ngIf=\"croppedImage\" class=\"car-addafter\" >\n                            <img src=\"{{IMG_URL}}/assets/lease_intake/img/loading-preview.gif\" class=\"loadingimg car-addafter\" *ngIf=\"logoLoading\">\n                        </div>\n                        <button class=\"cmn-btn\" type=\"button\" style=\"border:none;float:initial;font-size: 12px !important;background: #ef6a97;margin-top: 15px;position: relative;\">\n                            <input #upload_logofile type=\"file\" accept=\".png, .jpg, .jpeg\" style=\"position:absolute;display:inline-block;opacity:0;width:100%;left: 0;\"\n                            (change)=\"fileChangeEvent($event.target.files)\"/>\n                            <i class=\"pi pi-cloud-upload\" style=\"font-size:23px;\"></i>Upload Company Logo</button>\n                    </div>\n            </div>\n    </div>\n    \n        \n        <p-footer>\n                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                    <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n                    <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"onUpdate()\" label=\"Update\"></button>\n                </div>\n            </p-footer>\n\n    </form>\n\n        </div>\n\n</p-card>\n</div>\n    \n   ");

/***/ }),

/***/ "./src/app/component/company-info/company-info-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/company-info/company-info-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfoRoutingModule", function() { return CompanyInfoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-info.component */ "./src/app/component/company-info/company-info.component.ts");




const routes = [
    { path: '', component: _company_info_component__WEBPACK_IMPORTED_MODULE_3__["CompanyInfoComponent"] }
];
let CompanyInfoRoutingModule = class CompanyInfoRoutingModule {
};
CompanyInfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompanyInfoRoutingModule);



/***/ }),

/***/ "./src/app/component/company-info/company-info.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/company-info/company-info.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-wrapper {\n  background: #fff;\n}\n.profile-wrapper h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n.profile-wrapper h4 span {\n  padding-top: 5px;\n  color: #c7c7c7;\n}\n.profile-wrapper button:focus {\n  outline: none;\n}\n.profile-wrapper .cmn-btn {\n  float: right;\n  padding: 3px 21px !important;\n  border-radius: 23px !important;\n  background: #08bd65;\n  color: #fff !important;\n  font-size: 15px !important;\n  text-transform: uppercase;\n  padding-left: 15px !important;\n  border: none;\n}\n.profile-wrapper .cmn-btn i {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px;\n}\n.profile-wrapper .profile-wrap {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  text-align: center;\n  height: 193px;\n  padding: 15px;\n  margin-bottom: 25px;\n}\n.profile-wrapper .profile-wrap .prof-img {\n  width: 115px;\n  height: 115px;\n  position: relative;\n  box-shadow: 0 0 10px #d4d4d4;\n  border-radius: 100%;\n  margin: auto;\n}\n.profile-wrapper .profile-wrap .prof-img img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbXBhbnktaW5mby9FOlxcb3dud2F5c29mdC5jb21cXGludmVudG9yeU1hbmFnZW1lbnRcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxjb21wYW55LWluZm9cXGNvbXBhbnktaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2NvbXBhbnktaW5mby9jb21wYW55LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQUE7RUFDSSxlQUFBO0VBQWUseUJBQUE7RUFBMEIsbUJBQUE7QUNJN0M7QURGQztFQUNHLGdCQUFBO0VBQW9CLGNBQUE7QUNLeEI7QURGQTtFQUNJLGFBQUE7QUNJSjtBREZBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQWtDLFlBQUE7QUNLdEM7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR0o7QURBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDR1I7QURGUTtFQUNJLGVBQUE7RUFBZSxnQkFBQTtFQUFnQixrQkFBQTtFQUFtQixNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxTQUFBO0VBQVMsWUFBQTtFQUFZLG1CQUFBO0FDWXhHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NvbXBhbnktaW5mby9jb21wYW55LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG5oNHtcclxuICAgIGZvbnQtc2l6ZToxOHB4O3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbToyNXB4O1xyXG59XHJcbiBoNCBzcGFue1xyXG4gICAgcGFkZGluZy10b3A6NXB4OyAgICBjb2xvcjogI2M3YzdjNztcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmNtbi1idG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogM3B4IDIxcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMwOGJkNjU7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7ICAgIGJvcmRlcjogbm9uZTtcclxuIFxyXG59XHJcblxyXG4uY21uLWJ0biBpIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXdyYXB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxOTNweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgLnByb2YtaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZDRkNGQ0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbn0iLCIucHJvZmlsZS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5wcm9maWxlLXdyYXBwZXIgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucHJvZmlsZS13cmFwcGVyIGg0IHNwYW4ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogI2M3YzdjNztcbn1cbi5wcm9maWxlLXdyYXBwZXIgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLmNtbi1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDNweCAyMXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzA4YmQ2NTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5jbW4tYnRuIGkge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS13cmFwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTkzcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5wcm9maWxlLXdyYXAgLnByb2YtaW1nIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkNGQ0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtd3JhcCAucHJvZi1pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/company-info/company-info.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/company-info/company-info.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfoComponent", function() { return CompanyInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/company.service */ "./src/app/shared/company.service.ts");
/* harmony import */ var src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/image-upload.service */ "./src/app/shared/image-upload.service.ts");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");










let CompanyInfoComponent = class CompanyInfoComponent {
    constructor(auth, userService, _fb, imageUploadService, router, companyService, messageService) {
        this.auth = auth;
        this.userService = userService;
        this._fb = _fb;
        this.imageUploadService = imageUploadService;
        this.router = router;
        this.companyService = companyService;
        this.messageService = messageService;
        this.uploadedFiles = [];
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.companyForm = this._fb.group({
            _id: [this.auth.getUserData().company_details_id._id],
            company_name: [this.auth.getUserData().company_details_id.company_name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_address: [this.auth.getUserData().company_details_id.company_address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_image: [this.auth.getUserData().company_details_id.company_image],
            owner_name: [this.auth.getUserData().company_details_id.owner_name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: [this.auth.getUserData().company_details_id.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gstin: [this.auth.getUserData().company_details_id.gstin, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.croppedImage = this.auth.getUserData().company_details_id.company_image;
    }
    ngOnInit() {
        this.bradCrum = [
            { label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/dashboard']);
                }
            },
            {
                label: "Company Info",
                command: event => {
                    this.router.navigate(["/company-info"]);
                }
            }
        ];
    }
    handleAddressChange(address) {
        console.log('address', address);
        // Do some stuff
        this.companyForm.controls['company_address'].setValue(address.formatted_address);
    }
    // showDialogToAdd(company) {
    //   console.log(company)
    //   this.displayDialog = true;
    //   this.companyForm.controls['_id'].setValue(company._id);
    //   this.companyForm.controls['company_name'].setValue(company.company_name);
    //   this.companyForm.controls['company_address'].setValue(company.company_address);
    //   this.companyForm.controls['company_image'].setValue(company.company_image);
    //   this.croppedImage = company.company_image;
    //   this.companyForm.controls['owner_name'].setValue(company.owner_name);
    //   this.companyForm.controls['phone'].setValue(company.phone);
    //   this.companyForm.controls['gstin'].setValue(company.gstin);
    //   this.companyForm.controls['status'].setValue(company.status);
    // }
    imageUpload() {
        this.imageUploadService.imageUpload(this.imageChangedEvent)
            .subscribe((data) => {
            console.log(data);
            this.companyForm.controls['company_image'].setValue(data);
            this.companyUpdate();
        });
    }
    checkValidity() {
        Object.keys(this.companyForm.controls).forEach((key) => {
            this.companyForm.controls[key].markAsDirty();
        });
    }
    companyUpdate() {
        if (this.companyForm.invalid) {
            this.checkValidity();
            return false;
        }
        this.companyService.updateCompany(this.companyForm.value)
            .subscribe((data) => {
            console.log('update', data);
            this.displayDialog = false;
            this.messageService.add({ severity: 'success', summary: 'Company Updated Successfully', detail: 'Company Updated Successfully' });
            this.userService.getUser(this.auth.getUserData()._id)
                .subscribe((data) => {
                console.log('data', data[0]);
                localStorage.setItem('user_details', JSON.stringify(data[0]));
            });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onUpdate() {
        console.log('onRowAdd', this.companyForm.value);
        if (this.imageChangedEvent) {
            this.imageUpload();
        }
        else {
            this.companyUpdate();
        }
    }
    fileChangeEvent(file) {
        console.log(file);
        this.imageChangedEvent = file.item(0);
        console.log('imageChangedEvent', this.imageChangedEvent);
        // show image preview
        var render = new FileReader();
        render.onloadend = (e) => {
            console.log('reslt', render);
            this.croppedImage = render.result;
        };
        render.readAsDataURL(this.imageChangedEvent);
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
};
CompanyInfoComponent.ctorParameters = () => [
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_8__["ImageUploadService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__["GooglePlaceDirective"])
], CompanyInfoComponent.prototype, "placesRef", void 0);
CompanyInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/company-info/company-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-info.component.scss */ "./src/app/component/company-info/company-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_8__["ImageUploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
], CompanyInfoComponent);



/***/ }),

/***/ "./src/app/component/company-info/company-info.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/company-info/company-info.module.ts ***!
  \***************************************************************/
/*! exports provided: CompanyInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfoModule", function() { return CompanyInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _company_info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-info-routing.module */ "./src/app/component/company-info/company-info-routing.module.ts");
/* harmony import */ var _company_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-info.component */ "./src/app/component/company-info/company-info.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_12__);
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
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__);






















let CompanyInfoModule = class CompanyInfoModule {
};
CompanyInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_info_component__WEBPACK_IMPORTED_MODULE_4__["CompanyInfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _company_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyInfoRoutingModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_16__["ToastModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__["InputSwitchModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_18__["ChartModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__["GooglePlaceModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__["InputMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__["ProgressSpinnerModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperModule"]
        ]
    })
], CompanyInfoModule);



/***/ })

}]);
//# sourceMappingURL=component-company-info-company-info-module-es2015.js.map