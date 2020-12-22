function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-purchase-purchase-return-purchase-return-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtPurchasePurchaseReturnPurchaseReturnComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n\r\n<p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n<form class=\"example-form sec\" [formGroup]=\"invoiceForm\">\r\n<div style=\"margin-top: 15px;\">\r\n<p-card>\r\n\r\n<div class=\"ui-g ui-fluid\">\r\n\r\n<div class=\"ui-g-4\">\r\n    Invoice No.:  <input pInputText type=\"text\" formControlName=\"invoice_code\"  readonly required>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n    Order Date:  <p-calendar [showIcon]=\"true\"  [readonlyInput]=\"true\" formControlName=\"invoice_date\"  ></p-calendar>\r\n</div>\r\n<div class=\"ui-g-4\">\r\n     Customer Name: <p-dropdown [options]=\"customerList\"   placeholder=\"Select Customer\"  formControlName=\"customer_details_id\"  [showClear]=\"true\" filter=\"true\" (onChange)=\"onSelectCust($event)\" ></p-dropdown>\r\n\r\n</div>\r\n</div>\r\n\r\n      \r\n\r\n\r\n</p-card>\r\n\r\n</div>\r\n<div style=\"margin-top: 15px;\">\r\n    \r\n<p-card>\r\n<div formArrayName=\"invoiceList\">\r\n   \r\n<table>\r\n        <thead>\r\n        <tr>\r\n                <th style=\"width: 10%\">Order #</th>\r\n                <th>Product Name</th>\r\n                <th>Price</th>\r\n                <th>Qty</th>\r\n                <th>Total</th>\r\n                <th style=\"width:8em\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n    <tr *ngFor=\"let itemrow of invoiceForm.get('invoiceList')['controls']; let i=index\"\r\n    [formGroupName]=\"i\">\r\n        <td >\r\n          {{i + 1}}\r\n        </td>\r\n       <td >\r\n                   <p-dropdown [options]=\"stocksList\" formControlName=\"stock_details_id\" (onChange)=\"onSelectProduct($event,i)\" required placeholder=\"Select a Product\"  [showClear]=\"true\" filter=\"true\">\r\n                    \r\n               </p-dropdown> \r\n               \r\n       </td>\r\n       <td >\r\n               <input pInputText type=\"text\" formControlName=\"price\"   required readonly>\r\n              \r\n       </td>\r\n       <td>\r\n               <!-- <p-spinner  formControlName=\"qty\"  required pKeyFilter=\"int\" [min]=\"1\"  [max]=\"2\"  (keypress)=\"onChangeQty(i)\"  ></p-spinner> -->\r\n               <input pInputText type=\"text\" formControlName=\"qty\"  pKeyFilter=\"int\" [min]=\"1\"  [max]=\"2\"  (keyup)=\"onChangeQty(i)\"  required>\r\n       </td>\r\n       <td >\r\n               <input pInputText type=\"text\" formControlName=\"total\"   required readonly>\r\n              \r\n       </td>\r\n       <td >\r\n        <!-- <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" [disabled]=\"(invoiceForm.value.invoiceList.length == 1) ? true : false\" (click)=\"deleteListItem(i)\"  style=\"    margin: 0px 5px;\"></button> -->\r\n        <!-- <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"deleteListItem(i)\" *ngIf=\"invoiceForm.value.invoiceList.length != i+1\"  style=\"    margin: 0px 5px;\"></button> -->\r\n        <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"deleteListItem(i)\" *ngIf=\"i != 0\"  style=\"    margin: 0px 5px;\"></button>\r\n                    <button  pButton type=\"button\"  icon=\"pi pi-plus\" class=\"ui-button-success\" (click)=\"addListItem()\" *ngIf=\"i == 0\"  style=\"    margin: 0px 5px;\"></button>\r\n                   </td>\r\n   </tr>\r\n</tbody>\r\n<!-- <tfoot>\r\n   <tr >\r\n       <th >\r\n         \r\n       </th>\r\n      <th >\r\n                  <p-dropdown [options]=\"stocksList\" required placeholder=\"Select a Product\"  [showClear]=\"true\" filter=\"true\">\r\n                   \r\n              </p-dropdown> \r\n      </th>\r\n      <th >\r\n              <input pInputText type=\"text\"   required>\r\n             \r\n      </th>\r\n      <th>\r\n              <input pInputText type=\"text\"   required>\r\n      </th>\r\n      <th >\r\n              <input pInputText type=\"text\"    required>\r\n             \r\n      </th>\r\n      <th style=\"text-align:center\">\r\n                   <button  pButton type=\"button\"  icon=\"pi pi-plus\" class=\"ui-button-success\" (click)=\"addListItem()\"  style=\"    margin: 0px 5px;\"></button>\r\n                  </th>\r\n  </tr>\r\n</tfoot> -->\r\n</table>\r\n</div>\r\n    <div class=\"ui-g ui-fluid\">\r\n            <div class=\"ui-g-12 ui-md-6\" style=\"text-align: center\">\r\n                    <h6>Grand Total</h6>\r\n                    <h1>{{ invoiceForm.value.grand_total | currency :'INR':true}}</h1>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                    Sub Amount:  \r\n                   <p>{{invoiceForm.value.sub_total  | currency : 'INR':true}}</p> \r\n                    Discount $ :<input pInputText type=\"text\" pKeyFilter=\"int\"  required max=\"{{invoiceForm.value.grand_total}}\"  formControlName=\"discount\"   (keyup)=\"onChangeDiscount()\"  >\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                    Grand Total: \r\n                   <p>{{invoiceForm.value.grand_total  | currency : 'INR':true}}</p> \r\n                   Payment Type : <p-dropdown [options]=\"paymentType\"   placeholder=\"Select Payment\"   formControlName=\"payment_type\" required ></p-dropdown>\r\n                   Paind Amount : <input pInputText type=\"text\" pKeyFilter=\"int\"  required   formControlName=\"paid_amount\"   (keyup)=\"onChangePaindAmount()\"  >\r\n                   Balance Amount : <input pInputText type=\"text\" pKeyFilter=\"int\"  required   formControlName=\"balance_amount\"    >\r\n                   Payment Status : <p-dropdown [options]=\"paymentStatus\"   placeholder=\"Select Status\"   formControlName=\"payment_status\" required ></p-dropdown> \r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g ui-fluid\">\r\n\r\n            <div class=\"ui-g-2\">\r\n                    <button pButton type=\"button\" label=\"Reset\" icon=\"pi pi-replay\" class=\"ui-button-secondary\" (click)=\"onReset()\"></button>\r\n                </div>\r\n            <div class=\"ui-g-2\">\r\n                    <button pButton type=\"button\" (click)=\"saveOrder()\" label=\"Save & Print Bill\" icon=\"pi pi-save\" class=\"ui-button-success\"></button>\r\n                </div>\r\n            <!-- <div class=\"ui-g-2\">\r\n                    <p-splitButton label=\"Print Order\" icon=\"pi pi-print\" (click)=\"printOrderWithoutView()\" [model]=\"printItems\" styleClass=\"ui-button-warning\"></p-splitButton>\r\n            </div> -->\r\n            <!-- <div class=\"ui-g-2\">\r\n                <button pButton type=\"button\" onclick=\"printJS('print-section', 'html')\" label=\"Print\" icon=\"pi pi-print\"  class=\"ui-button-warning\"  ></button>\r\n            </div> -->\r\n        </div>\r\n\r\n\r\n\r\n</p-card>\r\n</div>\r\n</form>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: PurchaseReturnRoutingModule */

  /***/
  function srcAppComponentInventoryMngtPurchasePurchaseReturnPurchaseReturnRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseReturnRoutingModule", function () {
      return PurchaseReturnRoutingModule;
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


    var _purchase_return_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./purchase-return.component */
    "./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.ts");

    var routes = [{
      path: '',
      component: _purchase_return_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseReturnComponent"]
    }];

    var PurchaseReturnRoutingModule = function PurchaseReturnRoutingModule() {
      _classCallCheck(this, PurchaseReturnRoutingModule);
    };

    PurchaseReturnRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PurchaseReturnRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtPurchasePurchaseReturnPurchaseReturnComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9wdXJjaGFzZS9wdXJjaGFzZS1yZXR1cm4vcHVyY2hhc2UtcmV0dXJuLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: PurchaseReturnComponent */

  /***/
  function srcAppComponentInventoryMngtPurchasePurchaseReturnPurchaseReturnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseReturnComponent", function () {
      return PurchaseReturnComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/pdf-generator.service */
    "./src/app/shared/pdf-generator.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/customer.service */
    "./src/app/shared/customer.service.ts");
    /* harmony import */


    var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/stock.service */
    "./src/app/shared/stock.service.ts");
    /* harmony import */


    var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/category.service */
    "./src/app/shared/category.service.ts");
    /* harmony import */


    var src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/sales.service */
    "./src/app/shared/sales.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);

    var PurchaseReturnComponent = /*#__PURE__*/function () {
      function PurchaseReturnComponent(_fb, router, messageService, customerService, stockService, categoryService, salesService, commonService, pdfGenerator, sessionService) {
        _classCallCheck(this, PurchaseReturnComponent);

        this._fb = _fb;
        this.router = router;
        this.messageService = messageService;
        this.customerService = customerService;
        this.stockService = stockService;
        this.categoryService = categoryService;
        this.salesService = salesService;
        this.commonService = commonService;
        this.pdfGenerator = pdfGenerator;
        this.sessionService = sessionService;
        this.stocksList = [];
        this.customerList = [];
        this.cities1 = [];
        this.salesList = [];
        this.invoiceDate = new Date();
        this.rowData = {};
        this.paymentStatus = [];
        this.paymentType = [];
        this.discountPer = [];
        this.discount = 0.00;
        this.sub_total = 0.00;
        this.grand_total = 0.00;
        this.showPdf = false;
        this.stockData = []; // pass data to another component

        this.catData = []; // pass data to another component

        this.unitData = []; // pass data to another component

        this.invoiceArray = []; // let invalidDate = new Date();
        // this.invalidDates = [invalidDate];

        this.invoiceForm = this._fb.group({
          _id: [''],
          company_details_id: [this.sessionService.getItem('company_id'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          invoice_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          invoice_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          customer_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          invoiceList: this._fb.array([this.initRowFirst()]),
          sub_total: [0.00],
          discount: [0.00],
          grand_total: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          payment_type: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          paid_amount: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          balance_amount: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          payment_status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(PurchaseReturnComponent, [{
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
            label: "Purchase",
            command: function command(event) {
              _this.router.navigate(["/inventory-mngt/purchase/purchase"]);
            }
          }, {
            label: "Purchase Return",
            command: function command(event) {
              _this.router.navigate(["/inventory-mngt/purchase/purchase-return"]);
            }
          }];
          this.status = [{
            label: 'Active',
            value: 1
          }, {
            label: 'De-Active',
            value: 0
          }];
          this.paymentType = [{
            label: 'Cash',
            value: 1
          }, {
            label: 'Card',
            value: 2
          }];
          this.paymentStatus = [{
            label: 'Paid',
            value: 1
          }, {
            label: 'Pending',
            value: 2
          }];
          this.discountPer = [{
            label: '5%',
            value: 1
          }, {
            label: '10%',
            value: 2
          }];
          this.getLastInvoiceByCompany();
          this.getCustomerByCompany();
          this.getCategoryByCompany();
          this.getStockByCompany();
          this.invoiceForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange(address) {
          console.log('address', address); // Do some stuff

          this.customerForm.controls['customer_address'].setValue(address.formatted_address);
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          var _this2 = this;

          Object.keys(this.invoiceForm.controls).forEach(function (key) {
            console.log('key', key);

            _this2.invoiceForm.controls[key].markAsDirty();
          });
          Object.keys(this.invoiceForm.get('invoiceList')['controls']).forEach(function (key1) {
            console.log('key1', key1);
            Object.keys(_this2.invoiceForm.get('invoiceList')['controls'][key1].controls).forEach(function (key2) {
              console.log('key2', key2);
              console.log('invoiceList', _this2.invoiceForm.get('invoiceList')['controls'][key1].controls[key2]);

              _this2.invoiceForm.get('invoiceList')['controls'][key1].controls[key2].markAsDirty();
            });
          });
        }
      }, {
        key: "checkValidityCus",
        value: function checkValidityCus() {
          var _this3 = this;

          Object.keys(this.customerForm.controls).forEach(function (key) {
            _this3.customerForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "priviewPdf",
        value: function priviewPdf() {
          this.pdfGenerator.testPdg().subscribe(function (data) {
            console.log('testPdf', data);
            console.log('url', src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].api_url + data); // printJS('docs/'+ environment.api_url + data)
            // printJS({printable:'docs/'+environment.api_url + data +"'", type:'pdf', showModal:true})
          });
        }
      }, {
        key: "printOrder",
        value: function printOrder() {// let elementCopy = this.printDiv(true);
          // this.printDiv.nativeElement.appendChild();
          // document.body.appendChild(this.printDiv.nativeElement);
          // window.print();
          // printJS('print-section', 'html')
        }
      }, {
        key: "printOrderWithoutView",
        value: function printOrderWithoutView() {}
      }, {
        key: "initRowFirst",
        value: function initRowFirst() {
          return this._fb.group({
            stock_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            total_qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            total: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "getLastInvoiceByCompany",
        value: function getLastInvoiceByCompany() {
          var _this4 = this;

          this.salesService.getLastInvoice().subscribe(function (data) {
            console.log('getLastInvoice', data);

            _this4.invoiceForm.controls['invoice_code'].setValue(_this4.commonService.incrCode('INV', data));
          }, function (error) {
            _this4.invoiceForm.controls['invoice_code'].setValue(_this4.commonService.incrCode('INV', 0));
          });
        }
      }, {
        key: "getCustomerByCompany",
        value: function getCustomerByCompany() {
          var _this5 = this;

          this.customerList = [];
          this.customerService.getCustomerByCompany().subscribe(function (data) {
            _this5.customers = data;

            _this5.customerList.push({
              label: '+ Add New Customer',
              value: 0
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this5.customers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var custData = _step.value;
                var listCust = {
                  label: custData.customer_name + ' | ' + custData.customer_code,
                  value: custData._id
                };

                _this5.customerList.push(listCust);
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

            console.log('customerList', _this5.customerList);
          });
        }
      }, {
        key: "getCategoryByCompany",
        value: function getCategoryByCompany() {
          var _this6 = this;

          this.categoryService.getCategoryByCompany().subscribe(function (data) {
            console.log('categoryList', data);
            _this6.categoryList = data;
          });
        }
      }, {
        key: "getStockByCompany",
        value: function getStockByCompany() {
          var _this7 = this;

          this.stocks = [];
          this.stocksList = [];
          this.stockService.getStockByCompanyActive().subscribe(function (data) {
            console.log('stocksList', data);
            _this7.stocks = data; // this.stocksList = data;

            _this7.stocksList.push({
              label: '+ Add New Stock',
              value: 0
            });

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _this7.stocks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var stockData = _step2.value;
                var listStock = {
                  label: stockData.stock_name + ' | ' + stockData.stock_code,
                  value: stockData._id
                };

                _this7.stocksList.push(listStock);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          });
        }
      }, {
        key: "addSales",
        value: function addSales() {
          var _this8 = this;

          console.log('invoiceArray', this.invoiceForm.value);
          this.salesService.addSales(this.invoiceForm.value).subscribe(function (data) {
            console.log(data);

            _this8.getStockByCompany(); // refresh stock qty


            _this8.invoiceForm.reset();

            _this8.invoiceForm.controls['company_details_id'].setValue(_this8.sessionService.getItem('company_id'));

            _this8.invoiceForm.controls['invoice_code'].setValue(_this8.commonService.incrCode('INV', data));

            _this8.invoiceForm.controls['invoice_date'].setValue(new Date());

            _this8.invoiceForm.controls['sub_total'].setValue(0.00);

            _this8.invoiceForm.controls['discount'].setValue(0.00);

            _this8.invoiceForm.controls['paid_amount'].setValue(0.00);

            _this8.invoiceForm.controls['balance_amount'].setValue(0.00);

            _this8.invoiceForm.controls['grand_total'].setValue(0.00);

            _this8.invoiceForm.controls['payment_type'].setValue(1);

            _this8.invoiceForm.controls['payment_status'].setValue(1); // printJS('print-section', 'html') // print invoice

          });
        }
      }, {
        key: "saveOrder",
        value: function saveOrder() {
          console.log(this.invoiceForm.value);

          if (this.invoiceForm.invalid) {
            this.checkValidity();
            this.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Please fill the mantatory field!'
            });
            return false;
          }

          this.addSales();
        }
      }, {
        key: "onSelectCust",
        value: function onSelectCust(event) {
          console.log(event.value);

          if (event.value == 0) {
            // this.showDialogToAddCust()
            this.displayDialog3 = true;
            this.invoiceForm.controls['customer_details_id'].reset();
            return false;
          }
        }
      }, {
        key: "addListItem",
        value: function addListItem() {
          var control = this.invoiceForm.controls['invoiceList'];
          control.push(this.initRowFirst());
          console.log(control);
        }
      }, {
        key: "deleteListItem",
        value: function deleteListItem(i) {
          var control = this.invoiceForm.controls['invoiceList'];
          control.removeAt(i);
          console.log(control);
          this.calculateTotal();
        }
      }, {
        key: "onReset",
        value: function onReset() {
          // reset whole form back to initial state   
          // this.invoiceForm.reset();
          // this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV',this.customerList.length)); 
          this.invoiceForm.controls['invoiceList'].reset();
          this.invoiceForm.controls['invoice_date'].setValue(new Date());
          this.invoiceForm.controls['sub_total'].setValue(0.00);
          this.invoiceForm.controls['discount'].setValue(0.00);
          this.invoiceForm.controls['paid_amount'].setValue(0.00);
          this.invoiceForm.controls['balance_amount'].setValue(0.00);
          this.invoiceForm.controls['grand_total'].setValue(0.00);
        }
      }, {
        key: "onClear",
        value: function onClear() {// clear errors and reset ticket fields  
        }
      }, {
        key: "onSelectProduct",
        value: function onSelectProduct(event, i) {
          console.log(event.value);

          if (event.value == 0) {
            // this.showDialogToAddStock()
            this.displayDialog = true;
            this.invoiceForm.get('invoiceList')['controls'][i].reset();
            return false;
          }

          console.log(this.invoiceForm.value.invoiceList);

          if (this.invoiceForm.value.invoiceList.length > 1) {
            var stockAddedData = lodash__WEBPACK_IMPORTED_MODULE_14__["find"](this.invoiceForm.value.invoiceList, {
              'stock_details_id': event.value
            });
            console.log('stockAddedData', stockAddedData);

            if (stockAddedData.price) {
              this.messageService.add({
                severity: 'warn',
                summary: 'Warning!',
                detail: 'Stock already added in invoice'
              });
              this.invoiceForm.get('invoiceList')['controls'][i].controls['stock_details_id'].reset();
              return false;
            }
          }

          var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_14__["findIndex"](this.stocks, function (o) {
            return o._id == event.value;
          });
          console.log(sliceIndex);

          if (sliceIndex > -1) {
            // this.loggedInUsersList.splice(sliceIndex, 1);
            console.log(this.stocks[sliceIndex]);
            console.log(this.invoiceForm.get('invoiceList')['controls'][i]); // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[sliceIndex].stock_qty) 

            this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['total_qty'].setValue(this.stocks[sliceIndex].stock_qty);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[sliceIndex].selling_price);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(1 * this.stocks[sliceIndex].selling_price);
            this.calculateTotal();
          }
        }
      }, {
        key: "onChangeQty",
        value: function onChangeQty(i) {
          if (!this.invoiceForm.get('invoiceList')['controls'][i].value.stock_details_id && this.invoiceForm.get('invoiceList')['controls'][i].value.stock_details_id == '') {
            return;
          }

          console.log(i);
          console.log(this.invoiceForm.value.invoiceList[i].stock_details_id);
          console.log(this.stocks);
          console.log('qty', this.invoiceForm.get('invoiceList')['controls'][i].value.qty);
          var stockData = lodash__WEBPACK_IMPORTED_MODULE_14__["find"](this.stocks, {
            '_id': this.invoiceForm.value.invoiceList[i].stock_details_id
          }); // let stockDataAdded = _.find(this.invoiceForm.value.invoiceList, { '_id': this.invoiceForm.value.invoiceList[i].stock_details_id })

          console.log(this.stocks[i]);
          console.log('stockData', stockData);
          console.log(this.invoiceForm.get('invoiceList')['controls'][i].value); // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
          // this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price) 

          if (stockData.stock_qty >= this.invoiceForm.get('invoiceList')['controls'][i].value.qty) {
            this.invoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(this.invoiceForm.get('invoiceList')['controls'][i].value.qty * this.stocks[i].selling_price);
          } else {
            this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1);
            var qty_data = stockData.stock_name + ' has ' + stockData.stock_qty + ' only available!';
            this.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: qty_data
            });
          }

          this.calculateTotal();
        }
      }, {
        key: "onChangeDiscount",
        value: function onChangeDiscount() {
          // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
          // this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price)    
          this.invoiceForm.controls['grand_total'].setValue(this.invoiceForm.value.sub_total - this.invoiceForm.value.discount); // this.calculateTotal()
        }
      }, {
        key: "calculateTotal",
        value: function calculateTotal() {
          // subtotal
          var sub_total = 0;
          var sub_total = lodash__WEBPACK_IMPORTED_MODULE_14__["sumBy"](this.invoiceForm.value.invoiceList, 'total');
          console.log('sub_total1', sub_total);
          this.invoiceForm.controls['sub_total'].setValue(sub_total);
          this.invoiceForm.controls['grand_total'].setValue(sub_total - this.invoiceForm.value.discount);
        }
      }, {
        key: "onChangePaindAmount",
        value: function onChangePaindAmount() {
          this.invoiceForm.controls['balance_amount'].setValue(this.invoiceForm.value.grand_total - this.invoiceForm.value.paid_amount);
        }
      }, {
        key: "receiveStock",
        value: function receiveStock(event) {
          console.log(event); // this.stocksList = [event,...this.stocksList];

          this.getStockByCompany();
        }
      }, {
        key: "receiveCategory",
        value: function receiveCategory(event) {
          console.log('receiveCategory', event);
          this.catData = event;
        }
      }, {
        key: "receiveUnit",
        value: function receiveUnit(event) {
          console.log('receiveUnit', event);
          this.unitData = event;
        }
      }, {
        key: "receiveCustomer",
        value: function receiveCustomer(event) {
          console.log('receiveCustomer', event);
          this.getCustomerByCompany();
        }
      }, {
        key: "onDialogClose",
        value: function onDialogClose(event) {
          console.log(event);
          this.catData = []; // clear new cat data while open stock form

          this.unitData = []; // clear new unit data while open stock form

          this.displayDialog = false;
        }
      }, {
        key: "onDialogClose1",
        value: function onDialogClose1(event) {
          console.log(event);
          this.displayDialog1 = false;
        }
      }, {
        key: "onDialogClose2",
        value: function onDialogClose2(event) {
          console.log(event);
          this.displayDialog2 = false;
        }
      }, {
        key: "onDialogClose3",
        value: function onDialogClose3(event) {
          console.log(event);
          this.displayDialog3 = false;
        }
      }, {
        key: "categoryDialog",
        value: function categoryDialog(event) {
          console.log('categoryDialog', event);
          this.displayDialog1 = event;
        }
      }, {
        key: "unitDialog",
        value: function unitDialog(event) {
          console.log('unitDialog', event);
          this.displayDialog2 = event;
        }
      }]);

      return PurchaseReturnComponent;
    }();

    PurchaseReturnComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]
      }, {
        type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_8__["StockService"]
      }, {
        type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"]
      }, {
        type: src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__["SalesService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"]
      }, {
        type: src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_5__["PdfGeneratorService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("form", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PurchaseReturnComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('printDiv', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PurchaseReturnComponent.prototype, "printDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceDirective"])], PurchaseReturnComponent.prototype, "placesRef", void 0);
    PurchaseReturnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-purchase-return',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./purchase-return.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./purchase-return.component.scss */
      "./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_8__["StockService"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"], src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_10__["SalesService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"], src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_5__["PdfGeneratorService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])], PurchaseReturnComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: PurchaseReturnModule */

  /***/
  function srcAppComponentInventoryMngtPurchasePurchaseReturnPurchaseReturnModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseReturnModule", function () {
      return PurchaseReturnModule;
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


    var _purchase_return_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./purchase-return.component */
    "./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return.component.ts");
    /* harmony import */


    var _purchase_return_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./purchase-return-routing.module */
    "./src/app/component/inventory-mngt/purchase/purchase-return/purchase-return-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/autocomplete.js");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/calendar.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/checkbox.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/keyfilter */
    "./node_modules/primeng/keyfilter.js");
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/inputmask */
    "./node_modules/primeng/inputmask.js");
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/confirmdialog.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var primeng_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/spinner */
    "./node_modules/primeng/spinner.js");
    /* harmony import */


    var primeng_spinner__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_spinner__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/splitbutton */
    "./node_modules/primeng/splitbutton.js");
    /* harmony import */


    var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var primeng_inplace__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/inplace */
    "./node_modules/primeng/inplace.js");
    /* harmony import */


    var primeng_inplace__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/dialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_22__);
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__);
    /* harmony import */


    var primeng_sidebar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! primeng/sidebar */
    "./node_modules/primeng/sidebar.js");
    /* harmony import */


    var primeng_sidebar__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */


    var safe_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! safe-pipe */
    "./node_modules/safe-pipe/index.js");
    /* harmony import */


    var safe_pipe__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(safe_pipe__WEBPACK_IMPORTED_MODULE_25__);

    var PurchaseReturnModule = function PurchaseReturnModule() {
      _classCallCheck(this, PurchaseReturnModule);
    };

    PurchaseReturnModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_purchase_return_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseReturnComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _purchase_return_routing_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseReturnRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoCompleteModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"], primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16__["KeyFilterModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__["ConfirmDialogModule"], primeng_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20__["SplitButtonModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_21__["InplaceModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__["GooglePlaceModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_24__["SidebarModule"], safe_pipe__WEBPACK_IMPORTED_MODULE_25__["SafePipeModule"]]
    })], PurchaseReturnModule);
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
//# sourceMappingURL=component-inventory-mngt-purchase-purchase-return-purchase-return-module-es5.js.map