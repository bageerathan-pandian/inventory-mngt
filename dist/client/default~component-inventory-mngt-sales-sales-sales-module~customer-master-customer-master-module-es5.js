function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-inventory-mngt-sales-sales-sales-module~customer-master-customer-master-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtSharedCustomerFormCustomerFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "       \r\n<p-dialog  [maximizable]=\"true\" [(visible)]=\"displayDialog3\" (onHide)=\"onClose()\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\r\n    <p-header>\r\n            <span *ngIf=\"customerForm.value._id\">Update</span>\r\n            <span *ngIf=\"!customerForm.value._id\">Add</span> Customer\r\n    </p-header>\r\n<form [formGroup]=\"customerForm\">\r\n<div class=\"ui-g ui-fluid\" >\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Customer Code</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText formControlName=\"customer_code\" disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Customer Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"customer_name\" autofocus />\r\n            </div>\r\n        </div>\r\n    <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Customer Address</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"customer_address\" ngx-google-places-autocomplete  #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Customer Phone</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <p-checkbox label=\"Enable Tax\" binary=\"true\" formControlName=\"enable_tax\"></p-checkbox>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">GSTIN</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"customer_gstin\"  />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Route Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <!-- <p-dropdown [options]=\"routeNameList\"   placeholder=\"Select Route\"   formControlName=\"route_name\"  ></p-dropdown> -->\r\n                <p-dropdown [options]=\"routeNameList\" placeholder=\"Select Route\" filter=\"true\"\r\n                formControlName=\"route_details_id\" [showClear]=\"true\" (onChange)=\"onSelectRoute($event)\">\r\n            </p-dropdown>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"brand\">Status</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\"> \r\n        <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\r\n        <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"!customerForm.value._id\" (click)=\"saveCust()\" label=\"Add\"></button>\r\n        <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" *ngIf=\"customerForm.value._id\" (click)=\"updateCust()\" label=\"Update\"></button>\r\n    </div>\r\n</p-footer>\r\n</form>\r\n</p-dialog>\r\n\r\n<app-route-form [displayDialog2]=\"displayDialog2\" (displayChangeEvent2)=\"onDialogClose2($event)\" ></app-route-form>\r\n";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtSharedCustomerFormCustomerFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zaGFyZWQvY3VzdG9tZXItZm9ybS9jdXN0b21lci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CustomerFormComponent */

  /***/
  function srcAppComponentInventoryMngtSharedCustomerFormCustomerFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function () {
      return CustomerFormComponent;
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


    var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/customer.service */
    "./src/app/shared/customer.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/route.service */
    "./src/app/shared/route.service.ts");

    var CustomerFormComponent = /*#__PURE__*/function () {
      function CustomerFormComponent(_fb, customerService, commonService, sessionService, messageService, routeService) {
        _classCallCheck(this, CustomerFormComponent);

        this._fb = _fb;
        this.customerService = customerService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.routeService = routeService;
        this.displayChangeEvent3 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.status = [{
          label: 'Active',
          value: 1
        }, {
          label: 'De-Active',
          value: 0
        }];
        this.routeNameList = [{
          label: 'Barma Colony',
          value: 'Barma Colony'
        }, {
          label: 'Sekkalai Road',
          value: 'Sekkalai Road'
        }, {
          label: '100 Feet Road',
          value: '100 Feet Road'
        }, {
          label: 'Senjai',
          value: 'Senjai'
        }, {
          label: 'Sriramnagar',
          value: 'Sriramnagar'
        }, {
          label: 'Railway Road',
          value: 'Railway Road'
        }];
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

      _createClass(CustomerFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getRouteByCompany();
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange(address) {
          console.log('address', address); // Do some stuff

          this.customerForm.controls['customer_address'].setValue(address.formatted_address);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this = this;

          console.log('displayDialog3', this.displayDialog3);
          console.log('isObjectcatData', lodash__WEBPACK_IMPORTED_MODULE_8__["isPlainObject"](this.routeData));

          if (lodash__WEBPACK_IMPORTED_MODULE_8__["isPlainObject"](this.routeData)) {
            console.log('catData', this.routeData);
            this.getRouteByCompany();
            setTimeout(function () {
              _this.customerForm.controls['route_details_id'].setValue(_this.routeData.value ? _this.routeData.value : null);
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
          } else {
            this.getCustomerByCompany();
          }
        }
      }, {
        key: "getRouteByCompany",
        value: function getRouteByCompany() {
          var _this2 = this;

          this.routeNameList = [];
          this.routeService.getRouteByCompany().subscribe(function (data) {
            console.log('routeNameList', data);

            _this2.routeNameList.push({
              label: '+ Add New Route',
              value: 0
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var catData = _step.value;

                _this2.routeNameList.push({
                  label: catData.route_name + ' | ' + catData.route_code,
                  value: catData._id
                });
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            console.log('routeNameList1', _this2.routeNameList); // if(_.some(this.catData, _.isObject)){ 
            //   this.stockForm.controls['category_details_id'].setValue(this.stockData.category_details_id  ? this.stockData.category_details_id._id : null);
            // }
          });
        }
      }, {
        key: "onSelectRoute",
        value: function onSelectRoute(event) {
          console.log(event.value);

          if (event.value == 0) {
            // this.showDialogToAddCat()
            // this.routeDialogEvent.emit(true)
            this.displayDialog2 = true;
            this.customerForm.controls['route_details_id'].reset();
            return false;
          }
        }
      }, {
        key: "getCustomerByCompany",
        value: function getCustomerByCompany() {
          var _this3 = this;

          this.customerService.getCustomerByCompany().subscribe(function (data) {
            console.log('unitList', data);

            _this3.customerForm.reset();

            _this3.customerForm.controls['customer_code'].setValue(_this3.commonService.incrCode('c', data.length));

            _this3.customerForm.controls['status'].setValue(1);

            _this3.customerForm.controls['company_details_id'].setValue(_this3.sessionService.getItem('company_id'));
          });
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          var _this4 = this;

          Object.keys(this.customerForm.controls).forEach(function (key) {
            _this4.customerForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "saveCust",
        value: function saveCust() {
          var _this5 = this;

          if (this.customerForm.invalid) {
            this.checkValidity();
            return false;
          }

          this.customerService.addCustomer(this.customerForm.value).subscribe(function (data) {
            console.log('add customer', data); // let newData = {
            //   label : data.customer_name +' | ' +data.customer_code,
            //   value : data._id
            //  }

            _this5.customerEvent.emit(data);

            _this5.messageService.add({
              severity: 'success',
              summary: 'Customer Added Successfully',
              detail: 'Customer Added Successfully'
            });

            _this5.displayDialog3 = false;
          }, function (error) {
            console.log(error);

            _this5.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });

            _this5.displayDialog3 = false;
          });
        }
      }, {
        key: "updateCust",
        value: function updateCust() {
          var _this6 = this;

          if (this.customerForm.invalid) {
            this.checkValidity();
            return false;
          }

          this.customerService.updateCustomer(this.customerForm.value).subscribe(function (data) {
            console.log('update customer', data); // let newData = {
            //   label : data.customer_name +' | ' +data.customer_code,
            //   value : data._id
            //  }

            _this6.customerEvent.emit(data);

            _this6.messageService.add({
              severity: 'success',
              summary: 'Customer Updated Successfully',
              detail: 'Customer Updated Successfully'
            });

            _this6.displayDialog3 = false;
          }, function (error) {
            console.log(error);

            _this6.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });

            _this6.displayDialog3 = false;
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          // this.displayDialog = false;
          this.displayChangeEvent3.emit(false);
        }
      }, {
        key: "onDialogClose2",
        value: function onDialogClose2(event) {
          this.getRouteByCompany();
        } // Work against memory leak if component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.displayChangeEvent3.unsubscribe();
        }
      }]);

      return CustomerFormComponent;
    }();

    CustomerFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
      }, {
        type: src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_9__["RouteService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomerFormComponent.prototype, "custData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomerFormComponent.prototype, "routeData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CustomerFormComponent.prototype, "displayDialog3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomerFormComponent.prototype, "displayChangeEvent3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomerFormComponent.prototype, "customerEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__["GooglePlaceDirective"])], CustomerFormComponent.prototype, "placesRef", void 0);
    CustomerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-form.component.scss */
      "./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], src_app_shared_route_service__WEBPACK_IMPORTED_MODULE_9__["RouteService"]])], CustomerFormComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/shared/customer-form/customer-form.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/shared/customer-form/customer-form.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: CustomerFormModule */

  /***/
  function srcAppComponentInventoryMngtSharedCustomerFormCustomerFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerFormModule", function () {
      return CustomerFormModule;
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


    var _customer_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-form.component */
    "./src/app/component/inventory-mngt/shared/customer-form/customer-form.component.ts");
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
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/inputmask */
    "./node_modules/primeng/inputmask.js");
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/checkbox.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _route_form_route_form_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../route-form/route-form.module */
    "./src/app/component/inventory-mngt/shared/route-form/route-form.module.ts");

    var CustomerFormModule = function CustomerFormModule() {
      _classCallCheck(this, CustomerFormModule);
    };

    CustomerFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_customer_form_component__WEBPACK_IMPORTED_MODULE_3__["CustomerFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__["InputMaskModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__["CheckboxModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceModule"], _route_form_route_form_module__WEBPACK_IMPORTED_MODULE_12__["RouteFormModule"]],
      exports: [_customer_form_component__WEBPACK_IMPORTED_MODULE_3__["CustomerFormComponent"]]
    })], CustomerFormModule);
    /***/
  },

  /***/
  "./src/app/shared/customer.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/customer.service.ts ***!
    \********************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppSharedCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
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

    var CustomerService = /*#__PURE__*/function () {
      function CustomerService(httpClient, sessionService) {
        _classCallCheck(this, CustomerService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
      }

      _createClass(CustomerService, [{
        key: "getCustomer",
        value: function getCustomer() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer');
        }
      }, {
        key: "getCustomerByCompany",
        value: function getCustomerByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addCustomer",
        value: function addCustomer(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/customer/' + id);
        }
      }]);

      return CustomerService;
    }();

    CustomerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], CustomerService);
    /***/
  }
}]);
//# sourceMappingURL=default~component-inventory-mngt-sales-sales-sales-module~customer-master-customer-master-module-es5.js.map