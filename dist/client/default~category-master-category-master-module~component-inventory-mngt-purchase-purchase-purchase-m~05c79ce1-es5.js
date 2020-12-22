function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~category-master-category-master-module~component-inventory-mngt-purchase-purchase-purchase-m~05c79ce1"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/category-form/category-form.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/category-form/category-form.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtSharedCategoryFormCategoryFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<p-dialog   [maximizable]=\"true\" [(visible)]=\"displayDialog1\" (onHide)=\"onClose()\"  [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '400px'}\">\r\n    <p-header>\r\n            <span *ngIf=\"categoryForm.value._id\">Update</span>\r\n            <span *ngIf=\"!categoryForm.value._id\">Add</span> Category\r\n    </p-header>\r\n    \r\n <form [formGroup]=\"categoryForm\">\r\n        <div class=\"ui-g ui-fluid\" >\r\n            \r\n<div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"vin\">Category Code</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <input type=\"text\" pInputText formControlName=\"category_code\"  disabled />\r\n        </div>\r\n    </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Category Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText id=\"vin\" formControlName=\"category_name\" autofocus />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"brand\">Status</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!categoryForm.value._id\" (click)=\"addCategory()\" label=\"Add\"></button>\r\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"categoryForm.value._id\" (click)=\"updateCategory()\" label=\"Update\"></button>\r\n            </div>\r\n        </p-footer>\r\n    </form> \r\n    </p-dialog>";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/category-form/category-form.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/category-form/category-form.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtSharedCategoryFormCategoryFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zaGFyZWQvY2F0ZWdvcnktZm9ybS9jYXRlZ29yeS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/category-form/category-form.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/category-form/category-form.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CategoryFormComponent */

  /***/
  function srcAppComponentInventoryMngtSharedCategoryFormCategoryFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryFormComponent", function () {
      return CategoryFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/category.service */
    "./src/app/shared/category.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);

    var CategoryFormComponent = /*#__PURE__*/function () {
      function CategoryFormComponent(_fb, categoryService, commonService, sessionService, messageService) {
        _classCallCheck(this, CategoryFormComponent);

        this._fb = _fb;
        this.categoryService = categoryService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.displayChangeEvent1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.catEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.categoryList = [];
        this.status = [{
          label: 'Active',
          value: 1
        }, {
          label: 'De-Active',
          value: 0
        }];
        this.categoryForm = this._fb.group({
          _id: [''],
          company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          category_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          category_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(CategoryFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log('displayDialog1', this.displayDialog1);
          console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"](this.catData));

          if (lodash__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"](this.catData)) {
            console.log('catData', this.catData);
            this.categoryForm.controls['_id'].setValue(this.catData._id);
            this.categoryForm.controls['category_code'].setValue(this.catData.category_code);
            this.categoryForm.controls['category_name'].setValue(this.catData.category_name);
            this.categoryForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
            this.categoryForm.controls['status'].setValue(this.catData.status);
          } else {
            this.getCategoryByCompany();
          }
        }
      }, {
        key: "getCategoryByCompany",
        value: function getCategoryByCompany() {
          var _this = this;

          this.categoryService.getCategoryByCompany().subscribe(function (data) {
            console.log('categoryList', data);
            _this.categoryList = data;

            _this.categoryForm.reset();

            _this.categoryForm.controls['category_code'].setValue(_this.commonService.incrCode('c', data.length));

            _this.categoryForm.controls['status'].setValue(1);

            _this.categoryForm.controls['company_details_id'].setValue(_this.sessionService.getItem('company_id'));
          });
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          var _this2 = this;

          Object.keys(this.categoryForm.controls).forEach(function (key) {
            _this2.categoryForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "addCategory",
        value: function addCategory() {
          var _this3 = this;

          console.log('categoryForm', this.categoryForm);

          if (this.categoryForm.invalid) {
            this.checkValidity();
            return;
          }

          this.categoryService.addCategory(this.categoryForm.value).subscribe(function (data) {
            console.log('add cat', data); // let newData = {
            //   label : data.category_name +' | ' +data.category_code,
            //   value : data._id
            //  }

            _this3.catEvent.emit(data); // this.categoryList = [newData,...this.categoryList];
            // this.categoryList.push(data);
            // console.log('this.categoryList',this.categoryList);


            _this3.messageService.add({
              severity: 'success',
              summary: 'New Category Added Successfully',
              detail: 'New Category Added Successfully'
            }); // this.stockForm.controls['category_details_id'].setValue(data._id) 


            _this3.displayDialog1 = false;
          }, function (error) {
            console.log(error);

            _this3.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });

            _this3.displayDialog1 = false;
          });
        }
      }, {
        key: "updateCategory",
        value: function updateCategory() {
          var _this4 = this;

          console.log('categoryForm', this.categoryForm);

          if (this.categoryForm.invalid) {
            this.checkValidity();
            return;
          }

          this.categoryService.updateCategory(this.categoryForm.value).subscribe(function (data) {
            console.log('update cat', data); // let newData = {
            //   label : data.category_name +' | ' +data.category_code,
            //   value : data._id
            //  }

            _this4.catEvent.emit(data); // this.categoryList = [newData,...this.categoryList];
            // this.categoryList.push(data);
            // console.log('this.categoryList',this.categoryList);


            _this4.messageService.add({
              severity: 'success',
              summary: 'Category Updated Successfully',
              detail: 'Category Updated Successfully'
            }); // this.stockForm.controls['category_details_id'].setValue(data._id) 


            _this4.displayDialog1 = false;
          }, function (error) {
            console.log(error);

            _this4.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });

            _this4.displayDialog1 = false;
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          // this.displayDialog = false;
          this.displayChangeEvent1.emit(false);
        } // Work against memory leak if component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.displayChangeEvent1.unsubscribe();
        }
      }]);

      return CategoryFormComponent;
    }();

    CategoryFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryFormComponent.prototype, "catData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CategoryFormComponent.prototype, "displayDialog1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryFormComponent.prototype, "displayChangeEvent1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryFormComponent.prototype, "catEvent", void 0);
    CategoryFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/category-form/category-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-form.component.scss */
      "./src/app/component/inventory-mngt/shared/category-form/category-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])], CategoryFormComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/category-form/category-form.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/category-form/category-form.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: CategoryFormModule */

  /***/
  function srcAppComponentInventoryMngtSharedCategoryFormCategoryFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryFormModule", function () {
      return CategoryFormModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _category_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category-form.component */
    "./src/app/component/inventory-mngt/shared/category-form/category-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/dialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_8__);

    var CategoryFormModule = function CategoryFormModule() {
      _classCallCheck(this, CategoryFormModule);
    };

    CategoryFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_category_form_component__WEBPACK_IMPORTED_MODULE_3__["CategoryFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"]],
      exports: [_category_form_component__WEBPACK_IMPORTED_MODULE_3__["CategoryFormComponent"]]
    })], CategoryFormModule);
    /***/
  }
}]);
//# sourceMappingURL=default~category-master-category-master-module~component-inventory-mngt-purchase-purchase-purchase-m~05c79ce1-es5.js.map