function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-purchase-purchase-purchase-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/purchase/purchase/purchase.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/purchase/purchase/purchase.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtPurchasePurchasePurchaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n\r\n<p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n<form class=\"example-form sec\" [formGroup]=\"purchaseInvoiceForm\">\r\n<div style=\"margin-top: 15px;\">\r\n<p-card>\r\n\r\n<div class=\"ui-g ui-fluid\">\r\n        \r\n<div class=\"ui-g-2\">\r\n        <div class=\"ui-g-12\">\r\n                Invoice No.:  <input pInputText type=\"text\" formControlName=\"invoice_purchase_code\"  readonly required>\r\n            </div>\r\n</div>\r\n<div class=\"ui-g-2\">\r\n            <div class=\"ui-g-12\">\r\n                Purchase Date:  <p-calendar [showIcon]=\"true\"  [readonlyInput]=\"true\" formControlName=\"invoice_date\"  [maxDate]=\"today\" ></p-calendar>\r\n            </div>\r\n</div>\r\n\r\n<div class=\"ui-g-2\">\r\n\r\n        <div class=\"ui-g-12\">\r\n                Supplier Name: <p-dropdown [options]=\"supplierList\"   placeholder=\"Select Supplier\"  formControlName=\"supplier_details_id\"  filter=\"true\" (onChange)=\"onSelectSup($event)\" ></p-dropdown>\r\n                <p class=\"warning-msg\" style=\"position: absolute;\">\r\n                        <em *ngIf=\"purchaseInvoiceForm.value.supplier_details_id && selectedSupplierData.total_pending_amt\">*Amt to be paid :\r\n                                {{selectedSupplierData.total_pending_amt | currency : 'INR':true}}\r\n                        </em>\r\n                </p>\r\n           </div>\r\n</div>\r\n\r\n<div class=\"ui-g-2\">\r\n           <div class=\"ui-g-12\">\r\n                Supplier Address:  <input pInputText type=\"text\" value=\"{{selectedSupplierData.supplier_address}}\" readonly > \r\n        </div> \r\n</div>\r\n\r\n<div class=\"ui-g-2\">\r\n        <!-- <pre>{{ selectedSupplierData | json }}</pre> -->\r\n        \r\n        \r\n         <div class=\"ui-g-12\">\r\n                \r\n        Phone:  <input pInputText type=\"text\" value=\"{{selectedSupplierData.phone}}\" readonly >\r\n        </div>\r\n    \r\n\r\n\r\n</div>\r\n\r\n<div class=\"ui-g-3\">\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n      \r\n\r\n\r\n</p-card>\r\n\r\n</div>\r\n<div style=\"margin-top: 15px;\">\r\n    \r\n<p-card>\r\n<div formArrayName=\"invoiceList\">\r\n   \r\n        <table style=\"margin-bottom: 15px;\">\r\n                <thead>\r\n                <tr>\r\n                        <th style=\"width:5em\">Order #</th>\r\n                        <th style=\"width:20em\">Product Name/Code</th>\r\n                        <th>Price</th>\r\n                        <th>MRP</th>\r\n                        <th>Qty</th>\r\n                        <th>GST(%)</th>\r\n                        <th class=\"with-gst\">Total</th>\r\n                        <th style=\"width:8em\"></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n            <tr *ngFor=\"let itemrow of purchaseInvoiceForm.get('invoiceList')['controls']; let i=index\"\r\n            [formGroupName]=\"i\">\r\n                <td >\r\n                  {{i + 1}}\r\n                </td>\r\n               <td >\r\n                           <!-- <p-dropdown [options]=\"stocksList\" formControlName=\"stock_details_id\" (onChange)=\"onSelectProduct($event,i)\" required placeholder=\"Select a Product\"   filter=\"true\">\r\n                            \r\n                       </p-dropdown>  -->\r\n                       <p-autoComplete autofocus=\"true\" formControlName=\"stock_details_id\" [suggestions]=\"stocksListResult\" (completeMethod)=\"searchProduct($event)\" (onSelect)=\"onSelectProduct($event,i)\" [dropdown]=\"true\" field=\"label\" [forceSelection]=\"true\" placeholder=\"Enter Product's Name/Code\"></p-autoComplete>\r\n\r\n                       \r\n               </td>\r\n               <td class=\"hidden-spinner\" style=\"width: 15%;\">\r\n                       <p-spinner [step]=\"0.25\"  formControlName=\"price\" [min]=\"1\" [max]=\"itemrow.get('mrp').value\" (keyup)=\"onChangeQty(i)\"  [formatInput]=\"true\" [disabled]=\"purchaseInvoiceForm.value.invoiceList[i].stock_details_id ? false : true\"  required></p-spinner>\r\n\r\n                      \r\n               </td>\r\n               <td class=\"hidden-spinner\" style=\"width: 15%;\">\r\n                <p-spinner size=\"30\"  formControlName=\"mrp\"  [formatInput]=\"true\" [disabled]=\"true\"></p-spinner>\r\n\r\n               \r\n        </td>\r\n               <td>\r\n                       <p-spinner  formControlName=\"qty\"  required pKeyFilter=\"int\" [min]=\"1\" (focusout)=\"onChangeQty(i)\" (onChange)=\"onChangeQty(i)\" [disabled]=\"purchaseInvoiceForm.value.invoiceList[i].stock_details_id ? false : true\" ></p-spinner>\r\n                     \r\n                </td>\r\n                <td class=\"hidden-spinner\" >\r\n                        <p-spinner size=\"30\"  formControlName=\"gst_per\"  [formatInput]=\"true\" [disabled]=\"true\"></p-spinner>\r\n \r\n                        <p class=\"error-msg\" style=\"position: absolute;    color: #222;\">\r\n                                <em >*{{purchaseInvoiceForm.value.invoiceList[i].tax_name}}</em>\r\n                                </p>                        \r\n                </td>\r\n\r\n\r\n               <td class=\"hidden-spinner\" style=\"width: 15%;\">\r\n                <p-spinner [step]=\"0.25\" formControlName=\"total_with_gst\" [formatInput]=\"true\" [disabled]=\"true\"></p-spinner>\r\n\r\n        </td>\r\n               <td >\r\n                <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"deleteListItem(i)\" *ngIf=\"i != 0\"  style=\"    margin: 0px 5px;\"></button>\r\n                            <button  pButton type=\"button\"  icon=\"pi pi-plus\" class=\"ui-button-success\" (click)=\"addListItem()\" *ngIf=\"i == 0\"  style=\"    margin: 0px 5px;\"></button>\r\n                           </td>\r\n           </tr>\r\n        </tbody>\r\n        </table>\r\n</div>\r\n   \r\n<div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-6\" style=\"text-align: center\">\r\n                <h6>Grand Total <em *ngIf=\"purchaseInvoiceForm.value.tax_enable\">(with GST)</em></h6>\r\n                <h1 style=\"font-size: 50px;\" [ngStyle]=\"{'color': purchaseInvoiceForm.value.tax_enable ? '#34a835' : '#ffba01'}\">{{ purchaseInvoiceForm.value.grand_total | currency :'INR':true}}</h1>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n    <div class=\"ui-g-12\">  \r\n        <div class=\"ui-g-12  ui-md-5\"><p style=\"padding: 0;\"> Sub Amount: </p> </div>\r\n        <div class=\"ui-g-12  ui-md-5\"><b>{{purchaseInvoiceForm.value.sub_total  | currency : 'INR':true}}</b> </div>\r\n    </div>   \r\n    <div class=\"ui-g-12\"> \r\n        <div class=\"ui-g-12  ui-md-5\"><p style=\"padding: 0;\"> SGST: </p> </div>\r\n        <div class=\"ui-g-12  ui-md-5\"><b>{{purchaseInvoiceForm.value.sgst  | currency : 'INR':true}}</b> </div>\r\n    </div>   \r\n    <div class=\"ui-g-12\"> \r\n        <div class=\"ui-g-12  ui-md-5\"><p style=\"padding: 0;\"> CGST:  </p> </div>\r\n        <div class=\"ui-g-12  ui-md-5\"><b>{{purchaseInvoiceForm.value.cgst  | currency : 'INR':true}}</b> </div>\r\n    </div>   \r\n    <div class=\"ui-g-12\"> \r\n        <div class=\"ui-g-12  ui-md-5\"><p style=\"padding: 0;\"> Grand Total:  </p> </div>\r\n        <div class=\"ui-g-12  ui-md-5\"><b>{{purchaseInvoiceForm.value.grand_total  | currency : 'INR':true}}</b> </div>\r\n    </div>   \r\n    \r\n    \r\n    <div class=\"ui-g-12\">     \r\n          <p-checkbox name=\"tax\" binary=\"true\" disabled=\"true\" (onChange)=\"toggleTax($event)\"  formControlName=\"tax_enable\" label=\"Enable Tax\" ></p-checkbox>\r\n    </div>\r\n            </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n                \r\n                Discount : <input pInputText type=\"text\" pKeyFilter=\"int\"  required max=\"{{purchaseInvoiceForm.value.grand_total}}\"  formControlName=\"discount\"   (keyup)=\"onChangeDiscount()\"  >\r\n                Payment Status : <p-dropdown [options]=\"paymentStatus\"   placeholder=\"Select Status\"   formControlName=\"payment_status\" required ></p-dropdown> \r\n             \r\n              Payment Type : <p-dropdown [options]=\"paymentType\"   placeholder=\"Select Payment\"   formControlName=\"payment_type\" required ></p-dropdown>\r\n               Paind Amount : <input pInputText type=\"text\" pKeyFilter=\"int\"  required   formControlName=\"paid_amount\"   (keyup)=\"onChangePaindAmount()\"  >\r\n               Balance Amount : <input pInputText type=\"text\" pKeyFilter=\"int\"  required   formControlName=\"balance_amount\"    >\r\n            </div>\r\n        </div>\r\n</div>\r\n\r\n<div class=\"ui-g ui-fluid\">\r\n\r\n        <div class=\"ui-g-2\">\r\n                <button pButton type=\"button\" label=\"Reset\" icon=\"pi pi-replay\" class=\"ui-button-secondary\" (click)=\"onReset()\"></button>\r\n            </div>\r\n        <div class=\"ui-g-2\">\r\n                <button pButton type=\"button\" (click)=\"saveOrder()\" label=\"Save\" icon=\"pi pi-save\" class=\"ui-button-success\"></button>\r\n            </div>\r\n            <!-- <div class=\"ui-g-2\">\r\n                    <button pButton type=\"button\" (click)=\"scanBarcode()\" label=\"Scan\" icon=\"pi pi-search\" class=\"ui-button-success\"></button>\r\n                </div> -->\r\n        <!-- <div class=\"ui-g-2\">\r\n                <p-splitButton label=\"Print Order\" icon=\"pi pi-print\" (click)=\"printOrderWithoutView()\" [model]=\"printItems\" styleClass=\"ui-button-warning\"></p-splitButton>\r\n        </div> -->\r\n        <!-- <div class=\"ui-g-2\">\r\n            <button pButton type=\"button\" label=\"Print Priview\" icon=\"pi pi-print\" (click)=\"printPriview()\"  class=\"ui-button-warning\"  ></button>\r\n        </div> -->\r\n    </div>\r\n\r\n\r\n\r\n</p-card>\r\n</div>\r\n</form>\r\n\r\n\r\n<app-stock-form [displayDialog]=\"displayDialog\" (categoryDialogEvent)=\"categoryDialog($event)\" (unitDialogEvent)=\"unitDialog($event)\" [formType]=\"formType\" [stockData]=\"stockData\" [catData]=\"catData\" [unitData]=\"unitData\" (stockEvent)=\"receiveStock($event)\"  (displayChangeEvent)=\"onDialogClose($event)\"></app-stock-form>\r\n\r\n<app-category-form [displayDialog1]=\"displayDialog1\" (displayChangeEvent1)=\"onDialogClose1($event)\" (catEvent)=\"receiveCategory($event)\"></app-category-form>\r\n\r\n<app-unit-form [displayDialog2]=\"displayDialog2\" (displayChangeEvent2)=\"onDialogClose2($event)\"  (unitEvent)=\"receiveUnit($event)\"></app-unit-form>\r\n\r\n\r\n\r\n\r\n<app-supplier-form [displayDialog]=\"displayDialog3\" (displayChangeEvent)=\"onDialogClose3($event)\" (supplierEvent)=\"receiveSupplier($event)\" [supplierData]=\"supplierData\"></app-supplier-form>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/purchase/purchase/purchase-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/purchase/purchase/purchase-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: PurchaseRoutingModule */

  /***/
  function srcAppComponentInventoryMngtPurchasePurchasePurchaseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseRoutingModule", function () {
      return PurchaseRoutingModule;
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


    var _purchase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./purchase.component */
    "./src/app/component/inventory-mngt/purchase/purchase/purchase.component.ts");

    var routes = [{
      path: '',
      component: _purchase_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseComponent"]
    }];

    var PurchaseRoutingModule = function PurchaseRoutingModule() {
      _classCallCheck(this, PurchaseRoutingModule);
    };

    PurchaseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PurchaseRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/purchase/purchase/purchase.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/purchase/purchase/purchase.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtPurchasePurchasePurchaseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9wdXJjaGFzZS9wdXJjaGFzZS9wdXJjaGFzZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/purchase/purchase/purchase.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/purchase/purchase/purchase.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PurchaseComponent */

  /***/
  function srcAppComponentInventoryMngtPurchasePurchasePurchaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function () {
      return PurchaseComponent;
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


    var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/stock.service */
    "./src/app/shared/stock.service.ts");
    /* harmony import */


    var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/category.service */
    "./src/app/shared/category.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var src_app_shared_suppier_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/suppier.service */
    "./src/app/shared/suppier.service.ts");
    /* harmony import */


    var src_app_shared_purchase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/purchase.service */
    "./src/app/shared/purchase.service.ts");

    var PurchaseComponent = /*#__PURE__*/function () {
      function PurchaseComponent(_fb, router, messageService, supplierService, stockService, categoryService, purchaseService, commonService, pdfGenerator, sessionService) {
        _classCallCheck(this, PurchaseComponent);

        this._fb = _fb;
        this.router = router;
        this.messageService = messageService;
        this.supplierService = supplierService;
        this.stockService = stockService;
        this.categoryService = categoryService;
        this.purchaseService = purchaseService;
        this.commonService = commonService;
        this.pdfGenerator = pdfGenerator;
        this.sessionService = sessionService;
        this.stocksList = [];
        this.supplierList = [];
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

        this.supplierData = []; // pass data to another component

        this.catData = []; // pass data to another component

        this.unitData = []; // pass data to another component

        this.formType = 'purchase';
        this.invoiceArray = [];
        this.selectedSupplierData = [];
        this.today = new Date();
        this.stocksListResult = []; // let invalidDate = new Date();
        // this.invalidDates = [invalidDate];

        this.purchaseInvoiceForm = this._fb.group({
          _id: [''],
          company_details_id: [this.sessionService.getItem('company_id'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          customer_details_id_total_purchase_amt: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          customer_details_id_total_paid_amt: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          customer_details_id_total_pending_amt: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          invoice_purchase_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          invoice_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          supplier_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          invoiceList: this._fb.array([this.initRowFirst()]),
          sub_total: [0.00],
          discount: [0.00],
          grand_total: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          cgst: [0.00],
          sgst: [0.00],
          tax_enable: [true],
          payment_type: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          paid_amount: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          balance_amount: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          payment_status: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(PurchaseComponent, [{
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
              _this.router.navigate(["/inventory-mngt/purchase"]);
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
          this.getSupplierByCompany();
          this.getCategoryByCompany();
          this.getStockByCompany();
          this.purchaseInvoiceForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'));
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

          Object.keys(this.purchaseInvoiceForm.controls).forEach(function (key) {
            console.log('key', key);

            _this2.purchaseInvoiceForm.controls[key].markAsDirty();
          });
          Object.keys(this.purchaseInvoiceForm.get('invoiceList')['controls']).forEach(function (key1) {
            console.log('key1', key1);
            Object.keys(_this2.purchaseInvoiceForm.get('invoiceList')['controls'][key1].controls).forEach(function (key2) {
              console.log('key2', key2);
              console.log('invoiceList', _this2.purchaseInvoiceForm.get('invoiceList')['controls'][key1].controls[key2]);

              _this2.purchaseInvoiceForm.get('invoiceList')['controls'][key1].controls[key2].markAsDirty();
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
            console.log('url', src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].api_url + data); // printJS('docs/'+ environment.api_url + data)
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
            stock_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            total_qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tax_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cgst_amt: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sgst_amt: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gst_per: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            total: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            total_with_gst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "getLastInvoiceByCompany",
        value: function getLastInvoiceByCompany() {
          var _this4 = this;

          this.purchaseService.getLastInvoice().subscribe(function (data) {
            console.log('getLastInvoice', data);

            _this4.purchaseInvoiceForm.controls['invoice_purchase_code'].setValue(_this4.commonService.incrCode('INV', data));
          }, function (error) {
            _this4.purchaseInvoiceForm.controls['invoice_purchase_code'].setValue(_this4.commonService.incrCode('INV', 0));
          });
        }
      }, {
        key: "getSupplierByCompany",
        value: function getSupplierByCompany() {
          var _this5 = this;

          this.supplierList = [];
          this.supplierService.getSupplierByCompany().subscribe(function (data) {
            console.log('supplierList', data);
            _this5.suppliers = data;

            _this5.supplierList.push({
              label: '+ Add New Supplier',
              value: 0
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this5.suppliers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var custData = _step.value;
                var listSup = {
                  label: custData.supplier_name + ' | ' + custData.supplier_code,
                  value: custData._id
                };

                _this5.supplierList.push(listSup);
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

            console.log('customerList', _this5.supplierList);
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
          this.stockService.getStockByCompany().subscribe(function (data) {
            console.log('stocksList', data);
            _this7.stocks = data; // this.stocksList = data;
            // this.stocksList.push({ label: '+ Add New Stock', value: 0 });

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
        key: "addPurchase",
        value: function addPurchase() {
          var _this8 = this;

          console.log('invoiceArray', this.purchaseInvoiceForm.value);
          this.purchaseInvoiceForm.get('supplier_details_id').setValue(this.selectedSupplierData._id);
          this.purchaseInvoiceForm.get('invoiceList')['controls'].forEach(function (element) {
            console.log(element.controls['stock_details_id'].value);
            element.controls['stock_details_id'].setValue(element.controls['stock_details_id'].value.value);
          });
          this.purchaseService.addPurchase(this.purchaseInvoiceForm.value).subscribe(function (data) {
            console.log(data);

            _this8.getStockByCompany(); // refresh stock qty


            _this8.selectedSupplierData = [];

            _this8.purchaseInvoiceForm.controls['company_details_id'].setValue(_this8.sessionService.getItem('company_id'));

            _this8.purchaseInvoiceForm.controls['invoice_purchase_code'].setValue(_this8.commonService.incrCode('INV', data));

            _this8.purchaseInvoiceForm.controls['invoice_date'].setValue(new Date());

            _this8.purchaseInvoiceForm.controls['invoiceList'].reset();

            var control = _this8.purchaseInvoiceForm.controls['invoiceList'];
            control.clear();
            control.push(_this8.initRowFirst());

            _this8.purchaseInvoiceForm.controls['sub_total'].setValue(0.00);

            _this8.purchaseInvoiceForm.controls['discount'].setValue(0.00);

            _this8.purchaseInvoiceForm.controls['paid_amount'].setValue(0.00);

            _this8.purchaseInvoiceForm.controls['balance_amount'].setValue(0.00);

            _this8.purchaseInvoiceForm.controls['grand_total'].setValue(0.00);

            _this8.purchaseInvoiceForm.controls['cgst'].setValue(0.00);

            _this8.purchaseInvoiceForm.controls['sgst'].setValue(0.00);

            _this8.purchaseInvoiceForm.controls['payment_type'].setValue(1);

            _this8.purchaseInvoiceForm.controls['payment_status'].setValue(1);

            _this8.purchaseInvoiceForm.controls['tax_enable'].setValue(true);
          });
        }
      }, {
        key: "saveOrder",
        value: function saveOrder() {
          console.log(this.purchaseInvoiceForm.value);

          if (this.purchaseInvoiceForm.invalid) {
            this.checkValidity();
            this.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Please fill the mantatory field!'
            });
            return false;
          }

          this.addPurchase();
        }
      }, {
        key: "onSelectSup",
        value: function onSelectSup(event) {
          console.log(event.value);

          if (event.value == 0) {
            this.selectedSupplierData = [];
            this.displayDialog3 = true;
            this.purchaseInvoiceForm.controls['supplier_details_id'].reset();
            return false;
          } else {
            this.selectedSupplierData = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](this.suppliers, {
              '_id': event.value
            });
            this.purchaseInvoiceForm.get('customer_details_id_total_purchase_amt').setValue(this.selectedSupplierData.total_purchase_amt ? this.selectedSupplierData.total_purchase_amt : 0);
            this.purchaseInvoiceForm.get('customer_details_id_total_paid_amt').setValue(this.selectedSupplierData.total_paid_amt ? this.selectedSupplierData.total_paid_amt : 0);
            this.purchaseInvoiceForm.get('customer_details_id_total_pending_amt').setValue(this.selectedSupplierData.total_pending_amt ? this.selectedSupplierData.total_pending_amt : 0);
          }
        }
      }, {
        key: "addListItem",
        value: function addListItem() {
          if (this.purchaseInvoiceForm.controls['invoiceList'].invalid) {
            this.checkValidity();
            this.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Please fill the mantatory field!'
            });
            return false;
          }

          var control = this.purchaseInvoiceForm.controls['invoiceList'];
          control.push(this.initRowFirst());
          console.log(control);
        }
      }, {
        key: "deleteListItem",
        value: function deleteListItem(i) {
          var control = this.purchaseInvoiceForm.controls['invoiceList'];
          control.removeAt(i);
          console.log(control);
          this.calculateTotal();
        }
      }, {
        key: "onReset",
        value: function onReset() {
          // reset whole form back to initial state   
          // this.purchaseInvoiceForm.reset();
          // this.purchaseInvoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV',this.customerList.length)); 
          this.selectedSupplierData = [];
          this.purchaseInvoiceForm.controls['invoiceList'].reset();
          var control = this.purchaseInvoiceForm.controls['invoiceList'];
          control.clear();
          control.push(this.initRowFirst());
          this.purchaseInvoiceForm.controls['invoice_date'].setValue(new Date());
          this.purchaseInvoiceForm.controls['sub_total'].setValue(0.00);
          this.purchaseInvoiceForm.controls['discount'].setValue(0.00);
          this.purchaseInvoiceForm.controls['paid_amount'].setValue(0.00);
          this.purchaseInvoiceForm.controls['balance_amount'].setValue(0.00);
          this.purchaseInvoiceForm.controls['grand_total'].setValue(0.00);
          this.purchaseInvoiceForm.controls['sub_total'].setValue(0.00);
          this.purchaseInvoiceForm.controls['discount'].setValue(0.00);
          this.purchaseInvoiceForm.controls['cgst'].setValue(0.00);
          this.purchaseInvoiceForm.controls['sgst'].setValue(0.00);
          this.purchaseInvoiceForm.controls['tax_enable'].setValue(true);
        }
      }, {
        key: "onClear",
        value: function onClear() {// clear errors and reset ticket fields  
        }
      }, {
        key: "searchProduct",
        value: function searchProduct(event) {
          // this.mylookupservice.getResults(event.query).then(data => {
          //     this.results = data;
          // });
          this.stocksListResult = this.stocksList.filter(function (item) {
            return item.label.toLowerCase().indexOf(event.query) >= 0;
          });
          this.stocksListResult.unshift({
            label: '+ Add New Stock',
            value: 0
          });
        }
      }, {
        key: "onSelectProduct",
        value: function onSelectProduct(event, i) {
          console.log(event.value, i);

          if (event.value == 0) {
            // this.showDialogToAddStock()
            this.displayDialog = true;
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].reset();
            return false;
          }

          console.log(this.purchaseInvoiceForm.value.invoiceList);

          if (this.purchaseInvoiceForm.value.invoiceList.length > 1) {
            var cloneInvoiceList = this.purchaseInvoiceForm.value.invoiceList.slice();
            cloneInvoiceList.splice(i, 1); // to remove selected row

            var stockAddedData = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](cloneInvoiceList, {
              'stock_details_id': {
                value: event.value
              }
            });
            console.log('stockAddedData', stockAddedData);

            if (stockAddedData) {
              this.messageService.add({
                severity: 'warn',
                summary: 'Warning!',
                detail: 'Stock already added in invoice'
              });
              this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['stock_details_id'].reset();
              return false;
            }
          }

          var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_12__["findIndex"](this.stocks, function (o) {
            return o._id == event.value;
          });
          console.log(sliceIndex);

          if (sliceIndex > -1) {
            // this.loggedInUsersList.splice(sliceIndex, 1);
            console.log(this.stocks[sliceIndex]);
            console.log(this.purchaseInvoiceForm.get('invoiceList')['controls'][i]); // this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[sliceIndex].stock_qty) 

            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['stock_name'].setValue(this.stocks[sliceIndex].stock_name);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['total_qty'].setValue(this.stocks[sliceIndex].stock_qty);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[sliceIndex].buying_price);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['mrp'].setValue(this.stocks[sliceIndex].mrp);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['tax_name'].setValue(this.stocks[sliceIndex].tax_details_id.tax_name);
            var cgst_amt = Number(this.stocks[sliceIndex].buying_price) * (Number(this.stocks[sliceIndex].tax_details_id.tax_value_cgst) / 100);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['cgst_amt'].setValue(cgst_amt);
            var sgst_amt = Number(this.stocks[sliceIndex].buying_price) * (Number(this.stocks[sliceIndex].tax_details_id.tax_value_sgst) / 100);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['sgst_amt'].setValue(sgst_amt);
            var gst_pet = Number(this.stocks[sliceIndex].tax_details_id.tax_value_cgst) + Number(this.stocks[sliceIndex].tax_details_id.tax_value_sgst);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['gst_per'].setValue(gst_pet);
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(1 * this.stocks[sliceIndex].buying_price);
            var total_amt_with_gst = 1 * this.stocks[sliceIndex].buying_price * gst_pet / 100 + this.stocks[sliceIndex].buying_price;
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['total_with_gst'].setValue(total_amt_with_gst);
            this.calculateTotal();
          }
        }
      }, {
        key: "onChangeQty",
        value: function onChangeQty(i) {
          if (!this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.stock_details_id && this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.stock_details_id == '') {
            return;
          }

          if (this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty == 0 || this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty == '0') {
            this.messageService.add({
              severity: 'warn',
              summary: 'Warning!',
              detail: 'Quantity atleast 1'
            });
            this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1);
            return;
          }

          console.log(i);
          console.log(this.purchaseInvoiceForm.value.invoiceList[i].stock_details_id);
          console.log(this.stocks);
          console.log('qty', this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty);
          var stockData = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](this.stocks, {
            '_id': this.purchaseInvoiceForm.value.invoiceList[i].stock_details_id
          }); // let stockDataAdded = _.find(this.purchaseInvoiceForm.value.invoiceList, { '_id': this.purchaseInvoiceForm.value.invoiceList[i].stock_details_id })

          console.log(this.stocks[i]);
          console.log('stockData', stockData);
          console.log(this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value);
          this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty * this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.price);
          var cgst_amt = Number(this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.total) * (Number(this.stocks[i].tax_details_id.tax_value_cgst) / 100);
          this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['cgst_amt'].setValue(cgst_amt);
          var sgst_amt = Number(this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.total) * (Number(this.stocks[i].tax_details_id.tax_value_sgst) / 100);
          this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['sgst_amt'].setValue(sgst_amt);
          var total_amt_with_gst = this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.total * (this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.gst_per / 100) + this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.total;
          this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['total_with_gst'].setValue(total_amt_with_gst);
          this.calculateTotal();
        }
      }, {
        key: "onChangeDiscount",
        value: function onChangeDiscount() {
          // this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
          // this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price)    
          // this.calculateTotal()
          if (this.purchaseInvoiceForm.controls['tax_enable'].value) {
            this.purchaseInvoiceForm.controls['grand_total'].setValue(this.purchaseInvoiceForm.value.sub_total - this.purchaseInvoiceForm.value.discount + this.purchaseInvoiceForm.value.cgst + this.purchaseInvoiceForm.value.sgst);
          } else {
            this.purchaseInvoiceForm.controls['grand_total'].setValue(this.purchaseInvoiceForm.value.sub_total - this.purchaseInvoiceForm.value.discount);
          }
        }
      }, {
        key: "toggleTax",
        value: function toggleTax(event) {
          if (this.purchaseInvoiceForm.controls['grand_total'].value == 0) {
            return false;
          }

          this.calculateTotal();
        }
      }, {
        key: "calculateTotal",
        value: function calculateTotal() {
          // subtotal
          var sub_total = 0;
          var sub_total = lodash__WEBPACK_IMPORTED_MODULE_12__["sumBy"](this.purchaseInvoiceForm.value.invoiceList, 'total');
          console.log('sub_total1', sub_total);
          this.purchaseInvoiceForm.controls['sub_total'].setValue(sub_total); // cgst_total

          var cgst_total = 0;
          var cgst_total = lodash__WEBPACK_IMPORTED_MODULE_12__["sumBy"](this.purchaseInvoiceForm.value.invoiceList, 'cgst_amt');
          this.purchaseInvoiceForm.controls['cgst'].setValue(cgst_total); // sgst_total

          var sgst_total = 0;
          var sgst_total = lodash__WEBPACK_IMPORTED_MODULE_12__["sumBy"](this.purchaseInvoiceForm.value.invoiceList, 'sgst_amt');
          this.purchaseInvoiceForm.controls['sgst'].setValue(sgst_total);

          if (this.purchaseInvoiceForm.value.tax_enable) {
            this.purchaseInvoiceForm.controls['grand_total'].setValue(sub_total - this.purchaseInvoiceForm.value.discount + cgst_total + sgst_total);
          } else {
            this.purchaseInvoiceForm.controls['grand_total'].setValue(sub_total - this.purchaseInvoiceForm.value.discount);
          }
        }
      }, {
        key: "onChangePaindAmount",
        value: function onChangePaindAmount() {
          this.purchaseInvoiceForm.controls['balance_amount'].setValue(this.purchaseInvoiceForm.value.grand_total - this.purchaseInvoiceForm.value.paid_amount);
        }
      }, {
        key: "receiveSupplier",
        value: function receiveSupplier(event) {
          console.log(event);
          this.getSupplierByCompany();
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

      return PurchaseComponent;
    }();

    PurchaseComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_suppier_service__WEBPACK_IMPORTED_MODULE_13__["SuppierService"]
      }, {
        type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_7__["StockService"]
      }, {
        type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"]
      }, {
        type: src_app_shared_purchase_service__WEBPACK_IMPORTED_MODULE_14__["PurchaseService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]
      }, {
        type: src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_5__["PdfGeneratorService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("form", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PurchaseComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('printDiv', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PurchaseComponent.prototype, "printDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceDirective"])], PurchaseComponent.prototype, "placesRef", void 0);
    PurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-purchase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./purchase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/purchase/purchase/purchase.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./purchase.component.scss */
      "./src/app/component/inventory-mngt/purchase/purchase/purchase.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_suppier_service__WEBPACK_IMPORTED_MODULE_13__["SuppierService"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_7__["StockService"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"], src_app_shared_purchase_service__WEBPACK_IMPORTED_MODULE_14__["PurchaseService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_5__["PdfGeneratorService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])], PurchaseComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/purchase/purchase/purchase.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/purchase/purchase/purchase.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: PurchaseModule */

  /***/
  function srcAppComponentInventoryMngtPurchasePurchasePurchaseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseModule", function () {
      return PurchaseModule;
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


    var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./purchase-routing.module */
    "./src/app/component/inventory-mngt/purchase/purchase/purchase-routing.module.ts");
    /* harmony import */


    var _purchase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./purchase.component */
    "./src/app/component/inventory-mngt/purchase/purchase/purchase.component.ts");
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
    /* harmony import */


    var _shared_stock_form_stock_form_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../shared/stock-form/stock-form.module */
    "./src/app/component/inventory-mngt/shared/stock-form/stock-form.module.ts");
    /* harmony import */


    var _shared_category_form_category_form_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../shared/category-form/category-form.module */
    "./src/app/component/inventory-mngt/shared/category-form/category-form.module.ts");
    /* harmony import */


    var _shared_unit_form_unit_form_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../../shared/unit-form/unit-form.module */
    "./src/app/component/inventory-mngt/shared/unit-form/unit-form.module.ts");
    /* harmony import */


    var _shared_supplier_form_supplier_form_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../../shared/supplier-form/supplier-form.module */
    "./src/app/component/inventory-mngt/shared/supplier-form/supplier-form.module.ts");

    var PurchaseModule = function PurchaseModule() {
      _classCallCheck(this, PurchaseModule);
    };

    PurchaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_purchase_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _purchase_routing_module__WEBPACK_IMPORTED_MODULE_3__["PurchaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoCompleteModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"], primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16__["KeyFilterModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__["ConfirmDialogModule"], primeng_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20__["SplitButtonModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_21__["InplaceModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__["GooglePlaceModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_24__["SidebarModule"], safe_pipe__WEBPACK_IMPORTED_MODULE_25__["SafePipeModule"], _shared_stock_form_stock_form_module__WEBPACK_IMPORTED_MODULE_26__["StockFormModule"], _shared_category_form_category_form_module__WEBPACK_IMPORTED_MODULE_27__["CategoryFormModule"], _shared_unit_form_unit_form_module__WEBPACK_IMPORTED_MODULE_28__["UnitFormModule"], _shared_supplier_form_supplier_form_module__WEBPACK_IMPORTED_MODULE_29__["SupplierFormModule"]]
    })], PurchaseModule);
    /***/
  }
}]);
//# sourceMappingURL=component-inventory-mngt-purchase-purchase-purchase-module-es5.js.map