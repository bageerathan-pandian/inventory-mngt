function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-master-brand-master-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/brand-master/brand-master.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/brand-master/brand-master.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtMasterBrandMasterBrandMasterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n        <div style=\"margin-top: 15px;\">\n      <p-card  >\n      <p-table  #dt1 [columns]=\"cols\" [loading]=\"loading\" [value]=\"brandList\" dataKey=\"_id\" [paginator]=\"true\" [rows]=\"10\"   [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['brand_code','brand_name']\">\n          <ng-template pTemplate=\"caption\">\n             \n           \n              <div style=\"text-align: right;width: 50%; float: right; margin-bottom: 10px;\">        \n                  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \n                  <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\n              </div>\n          </ng-template>\n          <ng-template pTemplate=\"header\" let-columns>\n              <tr>\n                    <th style=\"width: 3em\">\n                            <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                        </th>\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\n                            {{col.header}}\n                            <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n\n                        </th>\n                 <th style=\"width: 10%;\">\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\"  pTooltip=\"Add new Brand\" tooltipPosition=\"top\" ></button>\n\n            </th>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-rowData  let-ri=\"rowIndex\" >\n            \n              <tr [pSelectableRow]=\"rowData\">\n                    <td>\n                            <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n                        </td>\n                  <td>\n                      {{rowData.brand_code}}\n                  </td>\n                  <td>\n                              {{rowData.brand_name}}\n                  </td>\n                  <td>\n                    {{rowData.updatedAt | date:'medium'}}\n            </td>\n                  <td style=\"text-align: center\">\n                    <p-dropdown [options]=\"status\" placeholder=\"Status\" [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event)\"></p-dropdown>\n                </td>\n                <td style=\"text-align:center\">\n                    <button  pButton type=\"button\"  icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"showDialogToAdd(rowData)\" style=\"    margin: 0px 5px;\"></button>\n                    <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\n                    <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\n                </td>\n              </tr>\n          </ng-template>\n           \n           <ng-template pTemplate=\"paginatorleft\" let-state>\n            Showing {{(state.page  * state.rows) + 1}} to {{state.rows * (state.page + 1)}} of <strong>{{brandList?.length}}</strong> entries\n          </ng-template>\n      </p-table>\n\n      <!-- <p-dialog    [maximizable]=\"true\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\n            <p-header>\n                    <span *ngIf=\"categoryForm.value._id\">Update</span>\n                    <span *ngIf=\"!categoryForm.value._id\">Add</span> Category\n            </p-header>\n        <form [formGroup]=\"categoryForm\">\n        <div class=\"ui-g ui-fluid\" >\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label > Code</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText  formControlName=\"brand_code\" disabled />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label >Category Name</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText  formControlName=\"brand_name\" autofocus />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"brand\">Status</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n    \n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </form>\n    </p-dialog> -->\n    \n    <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\n            <p-footer>\n                    <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \n                    <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\n                </p-footer>\n            </p-confirmDialog>\n\n\n    </p-card>\n    </div>\n\n    <app-brand-form [displayDialog4]=\"displayDialog4\" [brandData]=\"brandData\" (displayChangeEvent4)=\"onDialogClose4($event)\" (brandEvent)=\"receiveBrand($event)\"></app-brand-form>\n\n\n    <!-- <p-toast class=\"deletepopuplist\" position=\"center\" key=\"c\" (onClose)=\"onReject()\" [modal]=\"true\" [baseZIndex]=\"5000\">\n            <ng-template let-message pTemplate=\"message\">\n                <div style=\"text-align: center\">\n                    <img src=\"/assets/img/delete.png\" style=\"max-width: 40%;\">\n                    <h3 style=\"font-size: 26px;margin-top: 0;\">{{message.summary}}</h3>\n                    <p>{{message.detail}}</p>\n                </div>\n                <div class=\"ui-g ui-fluid\">\n                    <div class=\"ui-g-6\">\n                        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Yes\" class=\"ui-button-danger\" style=\"    padding: 0.429em 1em;\">\n                        </button>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\" style=\"    padding: 0.429em 1em;\"></button>\n                    </div>\n                </div>\n            </ng-template>\n        </p-toast> -->";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/brand-master/brand-master-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/brand-master/brand-master-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: BrandMasterRoutingModule */

  /***/
  function srcAppComponentInventoryMngtMasterBrandMasterBrandMasterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandMasterRoutingModule", function () {
      return BrandMasterRoutingModule;
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


    var _brand_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./brand-master.component */
    "./src/app/component/inventory-mngt/master/brand-master/brand-master.component.ts");

    var routes = [{
      path: '',
      component: _brand_master_component__WEBPACK_IMPORTED_MODULE_3__["BrandMasterComponent"]
    }];

    var BrandMasterRoutingModule = function BrandMasterRoutingModule() {
      _classCallCheck(this, BrandMasterRoutingModule);
    };

    BrandMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BrandMasterRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/brand-master/brand-master.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/brand-master/brand-master.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtMasterBrandMasterBrandMasterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9tYXN0ZXIvYnJhbmQtbWFzdGVyL2JyYW5kLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/brand-master/brand-master.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/brand-master/brand-master.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: BrandMasterComponent */

  /***/
  function srcAppComponentInventoryMngtMasterBrandMasterBrandMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandMasterComponent", function () {
      return BrandMasterComponent;
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


    var src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/brand.service */
    "./src/app/shared/brand.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");

    var BrandMasterComponent = /*#__PURE__*/function () {
      function BrandMasterComponent(router, confirmationService, messageService, brandService, commonService, sessionService) {
        _classCallCheck(this, BrandMasterComponent);

        this.router = router;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.brandService = brandService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.brandListSheet = [];
        this.status = [];
        this.brandData = [];
      }

      _createClass(BrandMasterComponent, [{
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
            label: "Brand",
            command: function command(event) {
              _this.router.navigate(["/inventory-mngt/master/brand"]);
            }
          }];
          this.status = [{
            label: 'Active',
            value: 1
          }, {
            label: 'De-Active',
            value: 0
          }]; // if(this.user_details.role == '0'){
          //   this.getbrand();
          // }else{

          this.getbrandByCompany(); // }

          this.cols = [// { field: '_id', header: '#' },
          {
            field: 'brand_code',
            header: 'Code'
          }, {
            field: 'brand_name',
            header: 'brand Name'
          }, {
            field: 'updatedAt',
            header: 'Updated Date'
          }, {
            field: 'status',
            header: 'Status'
          } // { field: '', header: 'Action' }
          ];
        } // getbrand(){
        //   this.loading = true
        //   this.brandService.getBrand()
        //   .subscribe((data:any)=>{
        //     console.log('brandList',data);
        //     this.brandList = data;
        //     this.loading = false;
        //   })
        // }

      }, {
        key: "getbrandByCompany",
        value: function getbrandByCompany() {
          var _this2 = this;

          this.loading = true;
          this.brandService.getBrandByCompany().subscribe(function (data) {
            console.log('brandList', data);
            _this2.brandList = data;
            _this2.loading = false;
          });
        } // showDialogToAdd() {
        //   this.brandForm.reset();
        //   this.brandForm.controls['brand_code'].setValue(this.commonService.incrCode('c',this.brandList.length));
        //   this.brandForm.controls['status'].setValue(1);
        //   this.brandForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        //   this.displayDialog4 = true;
        // }

      }, {
        key: "delete",
        value: function _delete(data, index) {
          var _this3 = this;

          console.log('delete', data, index); // this.messageService.clear();
          // this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'You want to delete this item'});

          this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this brand?',
            accept: function accept() {
              //Actual logic to perform a confirmation
              _this3.onRowDelete(data, index);
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
        value: function onRowDelete(brand, index) {
          var _this4 = this;

          console.log(brand, index);
          this.brandService.deleteBrand(brand._id).subscribe(function (data) {
            console.log('delete', data);

            _this4.brandList.splice(index, 1);

            _this4.brandList = _toConsumableArray(_this4.brandList);

            _this4.messageService.add({
              severity: 'success',
              summary: 'Brand Deleted Successfully',
              detail: 'Brand Deleted Successfully'
            });
          }, function (error) {
            console.log(error);

            _this4.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }, {
        key: "onChangeStatus",
        value: function onChangeStatus(event, id) {
          var _this5 = this;

          console.log(event);
          var isChecked = event.checked;
          this.brandService.updateStatus(event.checked, id).subscribe(function (data) {
            _this5.messageService.add({
              severity: 'success',
              summary: 'Status Updated Successfully',
              detail: 'Status Updated Successfully'
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
        key: "showDialogToAdd",
        value: function showDialogToAdd(Data) {
          this.brandData = Data;
          this.displayDialog4 = true;
        }
      }, {
        key: "onDialogClose4",
        value: function onDialogClose4(event) {
          console.log(event);
          this.displayDialog4 = false;
          this.brandData = null;
        }
      }, {
        key: "receiveBrand",
        value: function receiveBrand(event) {
          console.log('receivebrand', event);
          var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.brandList, function (o) {
            return o._id == event._id;
          });
          console.log(sliceIndex);

          if (sliceIndex > -1) {
            // Replace item at index using native splice
            this.brandList.splice(sliceIndex, 1, event);
            this.brandList = _toConsumableArray(this.brandList);
          } else {
            this.brandList = [event].concat(_toConsumableArray(this.brandList));
          }
        }
      }]);

      return BrandMasterComponent;
    }();

    BrandMasterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_5__["BrandService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
      }];
    };

    BrandMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brand-master',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./brand-master.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/brand-master/brand-master.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./brand-master.component.scss */
      "./src/app/component/inventory-mngt/master/brand-master/brand-master.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_brand_service__WEBPACK_IMPORTED_MODULE_5__["BrandService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])], BrandMasterComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/brand-master/brand-master.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/brand-master/brand-master.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BrandMasterModule */

  /***/
  function srcAppComponentInventoryMngtMasterBrandMasterBrandMasterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandMasterModule", function () {
      return BrandMasterModule;
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


    var _brand_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./brand-master-routing.module */
    "./src/app/component/inventory-mngt/master/brand-master/brand-master-routing.module.ts");
    /* harmony import */


    var _brand_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./brand-master.component */
    "./src/app/component/inventory-mngt/master/brand-master/brand-master.component.ts");
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


    var _shared_brand_form_brand_form_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../shared/brand-form/brand-form.module */
    "./src/app/component/inventory-mngt/shared/brand-form/brand-form.module.ts");

    var BrandMasterModule = function BrandMasterModule() {
      _classCallCheck(this, BrandMasterModule);
    };

    BrandMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_brand_master_component__WEBPACK_IMPORTED_MODULE_4__["BrandMasterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _brand_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["BrandMasterRoutingModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__["InputSwitchModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__["ProgressSpinnerModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"], _shared_brand_form_brand_form_module__WEBPACK_IMPORTED_MODULE_18__["BrandFormModule"]]
    })], BrandMasterModule);
    /***/
  },

  /***/
  "./src/app/shared/brand.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/brand.service.ts ***!
    \*****************************************/

  /*! exports provided: BrandService */

  /***/
  function srcAppSharedBrandServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandService", function () {
      return BrandService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/shared/session.service.ts");

    var BrandService = /*#__PURE__*/function () {
      function BrandService(httpClient, sessionService) {
        _classCallCheck(this, BrandService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(BrandService, [{
        key: "getBrand",
        value: function getBrand() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand');
        }
      }, {
        key: "getBrandByCompany",
        value: function getBrandByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addBrand",
        value: function addBrand(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateBrand",
        value: function updateBrand(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteBrand",
        value: function deleteBrand(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand/' + id);
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(status, id) {
          var body = JSON.stringify(status);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/brand/status-update/' + id, body, {
            headers: headerOption
          });
        }
      }]);

      return BrandService;
    }();

    BrandService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    BrandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], BrandService);
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
//# sourceMappingURL=brand-master-brand-master-module-es5.js.map