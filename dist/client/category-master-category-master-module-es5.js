function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-master-category-master-module"], {
  /***/
  "./node_modules/primeng/components/inputswitch/inputswitch.js":
  /*!********************************************************************!*\
    !*** ./node_modules/primeng/components/inputswitch/inputswitch.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsInputswitchInputswitchJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    exports.INPUTSWITCH_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return InputSwitch;
      }),
      multi: true
    };

    var InputSwitch =
    /** @class */
    function () {
      function InputSwitch(cd) {
        this.cd = cd;
        this.onChange = new core_1.EventEmitter();
        this.checked = false;
        this.focused = false;

        this.onModelChange = function () {};

        this.onModelTouched = function () {};
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

      __decorate([core_1.Input(), __metadata("design:type", Object)], InputSwitch.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Number)], InputSwitch.prototype, "tabindex", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "inputId", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "name", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], InputSwitch.prototype, "disabled", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], InputSwitch.prototype, "readonly", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InputSwitch.prototype, "onChange", void 0);

      InputSwitch = __decorate([core_1.Component({
        selector: 'p-inputSwitch',
        template: "\n        <div [ngClass]=\"{'ui-inputswitch ui-widget': true, 'ui-inputswitch-checked': checked, 'ui-state-disabled': disabled, 'ui-inputswitch-readonly': readonly, 'ui-inputswitch-focus': focused}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event, cb)\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.tabindex]=\"tabindex\" [checked]=\"checked\" (change)=\"onInputChange($event)\"\n                        (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [disabled]=\"disabled\" />\n            </div>\n            <span class=\"ui-inputswitch-slider\"></span>\n        </div>\n    ",
        providers: [exports.INPUTSWITCH_VALUE_ACCESSOR]
      }), __metadata("design:paramtypes", [core_1.ChangeDetectorRef])], InputSwitch);
      return InputSwitch;
    }();

    exports.InputSwitch = InputSwitch;

    var InputSwitchModule =
    /** @class */
    function () {
      function InputSwitchModule() {}

      InputSwitchModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [InputSwitch],
        declarations: [InputSwitch]
      })], InputSwitchModule);
      return InputSwitchModule;
    }();

    exports.InputSwitchModule = InputSwitchModule; //# sourceMappingURL=inputswitch.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/dropdown.js":
  /*!******************************************!*\
    !*** ./node_modules/primeng/dropdown.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengDropdownJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/dropdown/dropdown */
    "./node_modules/primeng/components/dropdown/dropdown.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/inputswitch.js":
  /*!*********************************************!*\
    !*** ./node_modules/primeng/inputswitch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengInputswitchJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/inputswitch/inputswitch */
    "./node_modules/primeng/components/inputswitch/inputswitch.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/tooltip.js":
  /*!*****************************************!*\
    !*** ./node_modules/primeng/tooltip.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengTooltipJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/tooltip/tooltip */
    "./node_modules/primeng/components/tooltip/tooltip.js"));
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/category-master/category-master.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/category-master/category-master.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtMasterCategoryMasterCategoryMasterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n        <div style=\"margin-top: 15px;\">\r\n      <p-card  >\r\n      <p-table  #dt1 [columns]=\"cols\" [loading]=\"loading\" [value]=\"categoryList\" dataKey=\"_id\" [paginator]=\"true\" [rows]=\"10\"   [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['category_code','category_name']\">\r\n          <ng-template pTemplate=\"caption\">\r\n             \r\n           \r\n              <div style=\"text-align: right;width: 50%; float: right; margin-bottom: 10px;\">        \r\n                  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \r\n                  <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\r\n              </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"header\" let-columns>\r\n              <tr>\r\n                    <th style=\"width: 3em\">\r\n                            <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n                        </th>\r\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\r\n                            {{col.header}}\r\n                            <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n\r\n                        </th>\r\n                 <th style=\"width: 10%;\">\r\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\"  pTooltip=\"Add new Category\" tooltipPosition=\"top\" ></button>\r\n\r\n            </th>\r\n              </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-rowData  let-ri=\"rowIndex\" >\r\n            \r\n              <tr [pSelectableRow]=\"rowData\">\r\n                    <td>\r\n                            <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\r\n                        </td>\r\n                  <td>\r\n                      {{rowData.category_code}}\r\n                  </td>\r\n                  <td>\r\n                              {{rowData.category_name}}\r\n                  </td>\r\n                  <td>\r\n                    {{rowData.updatedAt | date:'medium'}}\r\n            </td>\r\n                  <td style=\"text-align: center\">\r\n                    <p-dropdown [options]=\"status\" placeholder=\"Status\" [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event)\"></p-dropdown>\r\n                </td>\r\n                <td style=\"text-align:center\">\r\n                    <button  pButton type=\"button\"  icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"showDialogToAdd(rowData)\" style=\"    margin: 0px 5px;\"></button>\r\n                    <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\r\n                    <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\r\n                </td>\r\n              </tr>\r\n          </ng-template>\r\n           \r\n           <ng-template pTemplate=\"paginatorleft\" let-state>\r\n            Showing {{(state.page  * state.rows) + 1}} to {{state.rows * (state.page + 1)}} of <strong>{{categoryList?.length}}</strong> entries\r\n          </ng-template>\r\n      </p-table>\r\n\r\n      <!-- <p-dialog    [maximizable]=\"true\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\r\n            <p-header>\r\n                    <span *ngIf=\"categoryForm.value._id\">Update</span>\r\n                    <span *ngIf=\"!categoryForm.value._id\">Add</span> Category\r\n            </p-header>\r\n        <form [formGroup]=\"categoryForm\">\r\n        <div class=\"ui-g ui-fluid\" >\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label > Code</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText  formControlName=\"category_code\" disabled />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label >Category Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText  formControlName=\"category_name\" autofocus />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"brand\">Status</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\r\n            </div>\r\n        </p-footer>\r\n    </form>\r\n    </p-dialog> -->\r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\r\n            <p-footer>\r\n                    <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \r\n                    <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\r\n                </p-footer>\r\n            </p-confirmDialog>\r\n\r\n\r\n    </p-card>\r\n    </div>\r\n\r\n    <app-category-form [displayDialog1]=\"displayDialog1\" [catData]=\"catData\" (displayChangeEvent1)=\"onDialogClose1($event)\" (catEvent)=\"receiveCategory($event)\"></app-category-form>\r\n\r\n\r\n    <!-- <p-toast class=\"deletepopuplist\" position=\"center\" key=\"c\" (onClose)=\"onReject()\" [modal]=\"true\" [baseZIndex]=\"5000\">\r\n            <ng-template let-message pTemplate=\"message\">\r\n                <div style=\"text-align: center\">\r\n                    <img src=\"/assets/img/delete.png\" style=\"max-width: 40%;\">\r\n                    <h3 style=\"font-size: 26px;margin-top: 0;\">{{message.summary}}</h3>\r\n                    <p>{{message.detail}}</p>\r\n                </div>\r\n                <div class=\"ui-g ui-fluid\">\r\n                    <div class=\"ui-g-6\">\r\n                        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Yes\" class=\"ui-button-danger\" style=\"    padding: 0.429em 1em;\">\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\" style=\"    padding: 0.429em 1em;\"></button>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </p-toast> -->";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/category-master/category-master-routing.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/category-master/category-master-routing.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: CategoryMasterRoutingModule */

  /***/
  function srcAppComponentInventoryMngtMasterCategoryMasterCategoryMasterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryMasterRoutingModule", function () {
      return CategoryMasterRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _category_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category-master.component */
    "./src/app/component/inventory-mngt/master/category-master/category-master.component.ts");

    var routes = [{
      path: '',
      component: _category_master_component__WEBPACK_IMPORTED_MODULE_3__["CategoryMasterComponent"]
    }];

    var CategoryMasterRoutingModule = function CategoryMasterRoutingModule() {
      _classCallCheck(this, CategoryMasterRoutingModule);
    };

    CategoryMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryMasterRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/category-master/category-master.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/category-master/category-master.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtMasterCategoryMasterCategoryMasterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9tYXN0ZXIvY2F0ZWdvcnktbWFzdGVyL2NhdGVnb3J5LW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/category-master/category-master.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/category-master/category-master.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: CategoryMasterComponent */

  /***/
  function srcAppComponentInventoryMngtMasterCategoryMasterCategoryMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryMasterComponent", function () {
      return CategoryMasterComponent;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/category.service */
    "./src/app/shared/category.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");

    var CategoryMasterComponent = /*#__PURE__*/function () {
      function CategoryMasterComponent(router, confirmationService, messageService, categoryService, commonService, sessionService) {
        _classCallCheck(this, CategoryMasterComponent);

        this.router = router;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.categoryService = categoryService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.categoryListSheet = [];
        this.status = [];
        this.catData = [];
      }

      _createClass(CategoryMasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.bradCrum = [{
            label: '',
            icon: 'pi pi-home',
            command: function command(event) {
              _this.router.navigate(['/inventory-mngt/dashboard']);
            }
          }, {
            label: "Master",
            command: function command(event) {
              _this.router.navigate(["/inventory-mngt/master"]);
            }
          }, {
            label: "Category",
            command: function command(event) {
              _this.router.navigate(["/inventory-mngt/master/category"]);
            }
          }];
          this.status = [{
            label: 'Active',
            value: 1
          }, {
            label: 'De-Active',
            value: 0
          }]; // if(this.user_details.role == '0'){
          //   this.getCategory();
          // }else{

          this.getCategoryByCompany(); // }

          this.cols = [// { field: '_id', header: '#' },
          {
            field: 'category_code',
            header: 'Code'
          }, {
            field: 'category_name',
            header: 'Category Name'
          }, {
            field: 'updatedAt',
            header: 'Updated Date'
          }, {
            field: 'status',
            header: 'Status'
          } // { field: '', header: 'Action' }
          ];
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this2 = this;

          this.loading = true;
          this.categoryService.getCategory().subscribe(function (data) {
            console.log('categoryList', data);
            _this2.categoryList = data;
            _this2.loading = false;
          });
        }
      }, {
        key: "getCategoryByCompany",
        value: function getCategoryByCompany() {
          var _this3 = this;

          this.loading = true;
          this.categoryService.getCategoryByCompany().subscribe(function (data) {
            console.log('categoryList', data);
            _this3.categoryList = data;
            _this3.loading = false;
          });
        } // showDialogToAdd() {
        //   this.categoryForm.reset();
        //   this.categoryForm.controls['category_code'].setValue(this.commonService.incrCode('c',this.categoryList.length));
        //   this.categoryForm.controls['status'].setValue(1);
        //   this.categoryForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        //   this.displayDialog1 = true;
        // }

      }, {
        key: "delete",
        value: function _delete(data, index) {
          var _this4 = this;

          console.log('delete', data, index); // this.messageService.clear();
          // this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'You want to delete this item'});

          this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this category?',
            accept: function accept() {
              //Actual logic to perform a confirmation
              _this4.onRowDelete(data, index);
            }
          });
        }
      }, {
        key: "onConfirm",
        value: function onConfirm() {
          this.messageService.clear('c');
        }
      }, {
        key: "onReject",
        value: function onReject() {
          this.messageService.clear('c');
        }
      }, {
        key: "onRowDelete",
        value: function onRowDelete(category, index) {
          var _this5 = this;

          console.log(category, index);
          this.categoryService.deleteCategory(category._id).subscribe(function (data) {
            console.log('delete', data);

            _this5.categoryList.splice(index, 1);

            _this5.categoryList = _toConsumableArray(_this5.categoryList);

            _this5.messageService.add({
              severity: 'success',
              summary: 'Category Deleted Successfully',
              detail: 'Category Deleted Successfully'
            });
          }, function (error) {
            console.log(error);

            _this5.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }, {
        key: "onChangeStatus",
        value: function onChangeStatus(event, id) {
          var _this6 = this;

          console.log(event);
          var isChecked = event.checked;
          this.categoryService.updateStatus(event.checked, id).subscribe(function (data) {
            _this6.messageService.add({
              severity: 'success',
              summary: 'Status Updated Successfully',
              detail: 'Status Updated Successfully'
            });
          }, function (error) {
            console.log(error);

            _this6.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd(Data) {
          this.catData = Data;
          this.displayDialog1 = true;
        }
      }, {
        key: "onDialogClose1",
        value: function onDialogClose1(event) {
          console.log(event);
          this.displayDialog1 = false;
          this.catData = null;
        }
      }, {
        key: "receiveCategory",
        value: function receiveCategory(event) {
          console.log('receiveCategory', event);
          var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.categoryList, function (o) {
            return o._id == event._id;
          });
          console.log(sliceIndex);

          if (sliceIndex > -1) {
            // Replace item at index using native splice
            this.categoryList.splice(sliceIndex, 1, event);
            this.categoryList = _toConsumableArray(this.categoryList);
          } else {
            this.categoryList = [event].concat(_toConsumableArray(this.categoryList));
          }
        }
      }]);

      return CategoryMasterComponent;
    }();

    CategoryMasterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
      }];
    };

    CategoryMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-category-master",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-master.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/category-master/category-master.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-master.component.scss */
      "./src/app/component/inventory-mngt/master/category-master/category-master.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])], CategoryMasterComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/category-master/category-master.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/category-master/category-master.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CategoryMasterModule */

  /***/
  function srcAppComponentInventoryMngtMasterCategoryMasterCategoryMasterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryMasterModule", function () {
      return CategoryMasterModule;
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


    var _category_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category-master-routing.module */
    "./src/app/component/inventory-mngt/master/category-master/category-master-routing.module.ts");
    /* harmony import */


    var _category_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./category-master.component */
    "./src/app/component/inventory-mngt/master/category-master/category-master.component.ts");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/inputswitch */
    "./node_modules/primeng/inputswitch.js");
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/confirmdialog.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/dialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/tooltip.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var _shared_category_form_category_form_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../shared/category-form/category-form.module */
    "./src/app/component/inventory-mngt/shared/category-form/category-form.module.ts");

    var CategoryMasterModule = function CategoryMasterModule() {
      _classCallCheck(this, CategoryMasterModule);
    };

    CategoryMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_category_master_component__WEBPACK_IMPORTED_MODULE_4__["CategoryMasterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _category_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoryMasterRoutingModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__["InputSwitchModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__["ProgressSpinnerModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"], _shared_category_form_category_form_module__WEBPACK_IMPORTED_MODULE_18__["CategoryFormModule"]]
    })], CategoryMasterModule);
    /***/
  },

  /***/
  "./src/app/shared/category.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/category.service.ts ***!
    \********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppSharedCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/shared/session.service.ts");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(httpClient, sessionService) {
        _classCallCheck(this, CategoryService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(CategoryService, [{
        key: "getCategory",
        value: function getCategory() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category');
        }
      }, {
        key: "getCategoryByCompany",
        value: function getCategoryByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addCategory",
        value: function addCategory(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category/' + id);
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(status, id) {
          var body = JSON.stringify(status);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/category/status-update/' + id, body, {
            headers: headerOption
          });
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], CategoryService);
    /***/
  },

  /***/
  "./src/app/shared/common.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/common.service.ts ***!
    \******************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppSharedCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CommonService = /*#__PURE__*/function () {
      function CommonService(httpClient) {
        _classCallCheck(this, CommonService);

        this.httpClient = httpClient;
      }

      _createClass(CommonService, [{
        key: "leftPad",
        value: function leftPad(type, number, targetLength) {
          var output = number + '';

          while (output.length < targetLength) {
            output = '0' + output;
          }

          return type + '-' + output;
        }
      }, {
        key: "incrCode",
        value: function incrCode(type, count) {
          var cCode = Number(count) + 1;
          console.log('cCode', cCode);
          return this.leftPad(type, cCode, 4);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CommonService);
    /***/
  }
}]);
//# sourceMappingURL=category-master-category-master-module-es5.js.map