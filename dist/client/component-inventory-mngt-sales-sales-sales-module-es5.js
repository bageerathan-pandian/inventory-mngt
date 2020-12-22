function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-sales-sales-sales-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/sales/sales/sales.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/sales/sales/sales.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtSalesSalesSalesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n\r\n<p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n<form class=\"example-form sec\" [formGroup]=\"invoiceForm\">\r\n        <div style=\"margin-top: 15px;\">\r\n                <p-card>\r\n\r\n                        <div class=\"ui-g ui-fluid\">\r\n\r\n\r\n                                <div class=\"ui-g-2\">\r\n                                        <div class=\"ui-g-12\">\r\n                                                Invoice No.: <input pInputText type=\"text\"\r\n                                                        formControlName=\"invoice_code\" readonly required>\r\n                                        </div>\r\n                                </div>\r\n\r\n                                <div class=\"ui-g-2\">\r\n                                        <div class=\"ui-g-12\">\r\n                                                Invoice Date: <p-calendar [showIcon]=\"true\" [readonlyInput]=\"true\"\r\n                                                        formControlName=\"invoice_date\" [maxDate]=\"today\"></p-calendar>\r\n                                        </div>\r\n                                </div>\r\n\r\n                                <div class=\"ui-g-2\">\r\n\r\n                                        <div class=\"ui-g-12\">\r\n                                                Customer Name: <p-dropdown [options]=\"customerList\"\r\n                                                        placeholder=\"Select Customer\"\r\n                                                        formControlName=\"customer_details_id\" filter=\"true\"\r\n                                                        (onChange)=\"onSelectCust($event)\"></p-dropdown>\r\n                                                <p class=\"warning-msg\" style=\"position: absolute;\">\r\n                                                        <em\r\n                                                                *ngIf=\"invoiceForm.value.customer_details_id && selectedCustData?.total_pending_amt\">*Amt\r\n                                                                to be received :\r\n                                                                {{selectedCustData?.total_pending_amt | currency : 'INR':true}}\r\n                                                        </em>\r\n                                                </p>\r\n\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"ui-g-2\">\r\n                                        <div class=\"ui-g-12\">\r\n                                                Customer Address: <input pInputText type=\"text\"\r\n                                                        value=\"{{selectedCustData?.customer_address}}\" readonly>\r\n                                        </div>\r\n                                </div>\r\n\r\n                                <div class=\"ui-g-2\">\r\n                                        <!-- <pre>{{ selectedSupplierData | json }}</pre> -->\r\n\r\n\r\n                                        <div class=\"ui-g-12\">\r\n\r\n                                                Customer Phone: <input pInputText type=\"text\"\r\n                                                        value=\"{{selectedCustData?.phone}}\" readonly>\r\n                                        </div>\r\n\r\n\r\n\r\n                                </div>\r\n\r\n                                <div class=\"ui-g-3\">\r\n\r\n                                </div>\r\n                                <div class=\"ui-g-4\">\r\n\r\n                                </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n                </p-card>\r\n\r\n        </div>\r\n        <div style=\"margin-top: 15px;\">\r\n\r\n                <p-card>\r\n                        <div formArrayName=\"invoiceList\">\r\n                                <!-- <p-scrollPanel [style]=\"{width: '100%', height: '200px'}\"> -->\r\n\r\n                                <table style=\"margin-bottom: 15px;\">\r\n                                        <thead>\r\n                                                <tr>\r\n                                                        <th style=\"width:5em\">Order #</th>\r\n                                                        <th style=\"width:20em\">Product Name/Code</th>\r\n                                                        <th>Price</th>\r\n                                                        <th>MRP</th>\r\n                                                        <th>Qty</th>\r\n                                                        <!-- <th>Total</th>\r\n                        <th>CGST(Amt)</th>\r\n                        <th>SGST(Amt)</th> -->\r\n                                                        <th>GST(%)</th>\r\n                                                        <th class=\"with-gst\">Total</th>\r\n                                                        <th style=\"width:8em\"></th>\r\n                                                </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                                <tr *ngFor=\"let itemrow of invoiceForm.get('invoiceList')['controls']; let i=index\"\r\n                                                        [formGroupName]=\"i\">\r\n                                                        <td>\r\n                                                                {{i + 1}}\r\n                                                        </td>\r\n                                                        <td>\r\n                                                                <!-- <p-dropdown [options]=\"stocksList\"\r\n                                                                        formControlName=\"stock_details_id\"\r\n                                                                        (onChange)=\"onSelectProduct($event,i)\" required\r\n                                                                        placeholder=\"Select a Product\" filter=\"true\">\r\n                                                                </p-dropdown> -->\r\n                                                                <p-autoComplete formControlName=\"stock_details_id\"\r\n                                                                        [suggestions]=\"stocksListResult\"\r\n                                                                        (completeMethod)=\"searchProduct($event)\"\r\n                                                                        (onSelect)=\"onSelectProduct($event,i)\"\r\n                                                                        [dropdown]=\"true\" field=\"label\" dataKey=\"value\"\r\n                                                                        [forceSelection]=\"true\"\r\n                                                                        placeholder=\"Enter Product's Name/Code\">\r\n                                                                </p-autoComplete>\r\n\r\n\r\n                                                        </td>\r\n                                                        <td class=\"hidden-spinner\" style=\"width: 15%;\">\r\n                                                                <!-- <input pInputText type=\"text\" formControlName=\"price\"   required readonly> -->\r\n                                                                <p-spinner [step]=\"0.25\" formControlName=\"price\"\r\n                                                                        [min]=\"1\" [max]=\"itemrow.get('mrp').value\"\r\n                                                                        (keyup)=\"onChangeQty(i)\" [formatInput]=\"true\"\r\n                                                                        [disabled]=\"invoiceForm.value.invoiceList[i].stock_details_id ? false : true\"\r\n                                                                        required></p-spinner>\r\n\r\n                                                                <!-- <span class=\"ui-inputtext ui-fluid .ui-inputtext ui-corner-all\" style=\"float: left; height: 35px;\">  {{ invoiceForm.value.invoiceList[i].price  | currency :'INR':true}}</span> -->\r\n\r\n                                                        </td>\r\n                                                        <td class=\"hidden-spinner\" style=\"width: 15%;\">\r\n                                                                <p-spinner size=\"30\" formControlName=\"mrp\"\r\n                                                                        [formatInput]=\"true\" [disabled]=\"true\">\r\n                                                                </p-spinner>\r\n\r\n\r\n                                                        </td>\r\n                                                        <td>\r\n                                                                <p-spinner formControlName=\"qty\" required\r\n                                                                        pKeyFilter=\"int\" [min]=\"1\"\r\n                                                                        (focusout)=\"onChangeQty(i)\"\r\n                                                                        (onChange)=\"onChangeQty(i)\"\r\n                                                                        [disabled]=\"invoiceForm.value.invoiceList[i].stock_details_id ? false : true\">\r\n                                                                </p-spinner>\r\n                                                                <!-- <input pInputText type=\"text\" formControlName=\"qty\"  pKeyFilter=\"int\" [min]=\"1\"  (keyup)=\"onChangeQty(i)\"  required> -->\r\n                                                                <p class=\"error-msg\" style=\"position: absolute;\">\r\n                                                                        <em\r\n                                                                                *ngIf=\"invoiceForm.value.invoiceList[i].qty && (invoiceForm.value.invoiceList[i].total_qty < invoiceForm.value.invoiceList[i].qty)\">\r\n                                                                                *Ther\r\n                                                                                are\r\n                                                                                {{invoiceForm.value.invoiceList[i].total_qty}}\r\n                                                                                only available</em>\r\n                                                                </p>\r\n                                                        </td>\r\n\r\n                                                        <!-- <td class=\"hidden-spinner\" style=\"width: 15%;\">\r\n                       <p-spinner styleClasssize=\"30\"  formControlName=\"total\"  [formatInput]=\"true\" [disabled]=\"true\"></p-spinner>\r\n\r\n               </td>\r\n                \r\n               <td class=\"hidden-spinner\">\r\n                <p-spinner styleClasssize=\"30\"  formControlName=\"cgst_amt\"  [formatInput]=\"true\" [disabled]=\"true\"></p-spinner>\r\n\r\n                <p class=\"error-msg\" style=\"position: absolute;    color: #222;\">\r\n                        <em >*{{invoiceForm.value.invoiceList[i].tax_name}}</em>\r\n                        </p>           \r\n                </td>\r\n                <td class=\"hidden-spinner\" >\r\n                        <p-spinner styleClasssize=\"30\"  formControlName=\"sgst_amt\"  [formatInput]=\"true\" [disabled]=\"true\"></p-spinner>\r\n\r\n                </td> -->\r\n                                                        <td class=\"hidden-spinner\">\r\n                                                                <!-- <input pInputText type=\"text\" formControlName=\"price\"   required readonly> -->\r\n                                                                <p-spinner size=\"30\" formControlName=\"gst_per\"\r\n                                                                        [formatInput]=\"true\" [disabled]=\"true\">\r\n                                                                </p-spinner>\r\n\r\n                                                                <p class=\"error-msg\"\r\n                                                                        style=\"position: absolute;    color: #222;\">\r\n                                                                        <em>*{{invoiceForm.value.invoiceList[i].tax_name}}</em>\r\n                                                                </p>\r\n                                                        </td>\r\n\r\n\r\n                                                        <td class=\"hidden-spinner\" style=\"width: 15%;\">\r\n                                                                <!-- <input pInputText type=\"text\" formControlName=\"total\"   required readonly> -->\r\n                                                                <p-spinner [step]=\"0.25\"\r\n                                                                        formControlName=\"total_with_gst\"\r\n                                                                        [formatInput]=\"true\" [disabled]=\"true\">\r\n                                                                </p-spinner>\r\n\r\n                                                        </td>\r\n                                                        <td>\r\n                                                                <!-- <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" [disabled]=\"(invoiceForm.value.invoiceList.length == 1) ? true : false\" (click)=\"deleteListItem(i)\"  style=\"    margin: 0px 5px;\"></button> -->\r\n                                                                <!-- <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"deleteListItem(i)\" *ngIf=\"invoiceForm.value.invoiceList.length != i+1\"  style=\"    margin: 0px 5px;\"></button> -->\r\n                                                                <button pButton type=\"button\" icon=\"pi pi-trash\"\r\n                                                                        class=\"ui-button-danger\"\r\n                                                                        (click)=\"deleteListItem(i)\" *ngIf=\"i != 0\"\r\n                                                                        style=\"    margin: 0px 5px;\"></button>\r\n                                                                <button pButton type=\"button\" icon=\"pi pi-plus\"\r\n                                                                        class=\"ui-button-success\"\r\n                                                                        (click)=\"addListItem()\" *ngIf=\"i == 0\"\r\n                                                                        style=\"    margin: 0px 5px;\"></button>\r\n                                                        </td>\r\n                                                </tr>\r\n                                        </tbody>\r\n                                        <!-- <tfoot>\r\n           <tr >\r\n               <th >\r\n                 \r\n               </th>\r\n              <th >\r\n                          <p-dropdown [options]=\"stocksList\" required placeholder=\"Select a Product\"  [showClear]=\"true\" filter=\"true\">\r\n                           \r\n                      </p-dropdown> \r\n              </th>\r\n              <th >\r\n                      <input pInputText type=\"text\"   required>\r\n                     \r\n              </th>\r\n              <th>\r\n                      <input pInputText type=\"text\"   required>\r\n              </th>\r\n              <th >\r\n                      <input pInputText type=\"text\"    required>\r\n                     \r\n              </th>\r\n              <th style=\"text-align:center\">\r\n                           <button  pButton type=\"button\"  icon=\"pi pi-plus\" class=\"ui-button-success\" (click)=\"addListItem()\"  style=\"    margin: 0px 5px;\"></button>\r\n                          </th>\r\n          </tr>\r\n        </tfoot> -->\r\n                                </table>\r\n\r\n                                <!-- </p-scrollPanel> -->\r\n                        </div>\r\n                        <div class=\"ui-g ui-fluid\">\r\n                                <div class=\"ui-g-12 ui-md-6\" style=\"text-align: center\">\r\n                                        <h6>Grand Total <em *ngIf=\"invoiceForm.value.tax_enable\">(with GST)</em></h6>\r\n                                        <h1 style=\"font-size: 50px;\"\r\n                                                [ngStyle]=\"{'color': invoiceForm.value.tax_enable ? '#34a835' : '#ffba01'}\">\r\n                                                {{ invoiceForm.value.grand_total | currency :'INR':true}}</h1>\r\n                                </div>\r\n                                <div class=\"ui-g-12 ui-md-6\">\r\n                                        <div class=\"ui-g-12 ui-md-6\">\r\n                                                <div class=\"ui-g-12\">\r\n                                                        <div class=\"ui-g-12  ui-md-5\">\r\n                                                                <p style=\"padding: 0;\"> Sub Amount: </p>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12  ui-md-5\" style=\"text-align: right;\">\r\n                                                                <b>{{invoiceForm.value.sub_total  | currency : 'INR':true}}</b>\r\n                                                        </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12\">\r\n                                                        <div class=\"ui-g-12  ui-md-5\">\r\n                                                                <p style=\"padding: 0;\"> SGST: </p>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12  ui-md-5\" style=\"text-align: right;\">\r\n                                                                <b>{{invoiceForm.value.sgst  | currency : 'INR':true}}</b>\r\n                                                        </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12\">\r\n                                                        <div class=\"ui-g-12  ui-md-5\">\r\n                                                                <p style=\"padding: 0;\"> CGST: </p>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12  ui-md-5\" style=\"text-align: right;\">\r\n                                                                <b>{{invoiceForm.value.cgst  | currency : 'INR':true}}</b>\r\n                                                        </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12\">\r\n                                                        <div class=\"ui-g-12  ui-md-5\">\r\n                                                                <p style=\"padding: 0;\"> Round Off: </p>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12  ui-md-5\" style=\"text-align: right;\">\r\n                                                                <b>{{invoiceForm.value.round_off  | currency : 'INR':true}}</b>\r\n                                                        </div>\r\n                                                </div>\r\n                                                <div class=\"ui-g-12\">\r\n                                                        <div class=\"ui-g-12  ui-md-5\">\r\n                                                                <p style=\"padding: 0;\"> Grand Total: </p>\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-12  ui-md-5\" style=\"text-align: right;\">\r\n                                                                <b>{{invoiceForm.value.grand_total  | currency : 'INR':true}}</b>\r\n                                                        </div>\r\n                                                </div>\r\n\r\n\r\n                                                <div class=\"ui-g-12\">\r\n                                                        <p-checkbox name=\"tax\" binary=\"true\" disabled=\"true\"\r\n                                                                (onChange)=\"toggleTax($event)\"\r\n                                                                formControlName=\"tax_enable\" label=\"Enable Tax\">\r\n                                                        </p-checkbox>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"ui-g-12 ui-md-6\">\r\n\r\n                                                Discount : <input pInputText type=\"text\" pKeyFilter=\"int\" required\r\n                                                        max=\"{{invoiceForm.value.grand_total}}\"\r\n                                                        formControlName=\"discount\" (keyup)=\"onChangeDiscount()\">\r\n                                                Payment Status : <p-dropdown [options]=\"paymentStatus\"\r\n                                                        placeholder=\"Select Status\" formControlName=\"payment_status\"\r\n                                                        required></p-dropdown>\r\n\r\n                                                Payment Type : <p-dropdown [options]=\"paymentType\"\r\n                                                        placeholder=\"Select Payment\" formControlName=\"payment_type\"\r\n                                                        required></p-dropdown>\r\n                                                Paind Amount : <input pInputText type=\"text\" pKeyFilter=\"int\" required\r\n                                                        formControlName=\"paid_amount\" (keyup)=\"onChangePaindAmount()\">\r\n                                                Balance Amount : <input pInputText type=\"text\" pKeyFilter=\"int\" required\r\n                                                        formControlName=\"balance_amount\">\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g ui-fluid\">\r\n\r\n                                <div class=\"ui-g-2\">\r\n                                        <button pButton type=\"button\" label=\"Reset\" icon=\"pi pi-replay\"\r\n                                                class=\"ui-button-secondary\" (click)=\"onReset()\"></button>\r\n                                </div>\r\n                                <div class=\"ui-g-2\">\r\n                                        <button pButton type=\"button\" (click)=\"saveOrder()\"\r\n                                                label=\"{{salesId ? 'Update' : 'Save'}} & Print Bill\" icon=\"pi pi-save\"\r\n                                                class=\"ui-button-success\"></button>\r\n                                </div>\r\n                                <!-- <div class=\"ui-g-2\">\r\n                                <button pButton type=\"button\" (click)=\"scanBarcode()\" label=\"Scan\" icon=\"pi pi-search\" class=\"ui-button-success\"></button>\r\n                            </div> -->\r\n                                <!-- <div class=\"ui-g-2\">\r\n                            <p-splitButton label=\"Print Order\" icon=\"pi pi-print\" (click)=\"printOrderWithoutView()\" [model]=\"printItems\" styleClass=\"ui-button-warning\"></p-splitButton>\r\n                    </div> -->\r\n                                <div class=\"ui-g-2\">\r\n                                        <button pButton type=\"button\" label=\"Print Priview\" icon=\"pi pi-print\"\r\n                                                (click)=\"printPriview()\" class=\"ui-button-warning\"></button>\r\n                                </div>\r\n                        </div>\r\n\r\n\r\n\r\n                </p-card>\r\n        </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n<app-stock-form [displayDialog]=\"displayDialog\" (categoryDialogEvent)=\"categoryDialog($event)\"\r\n        (unitDialogEvent)=\"unitDialog($event)\" (taxDialogEvent)=\"taxDialog($event)\" [stockData]=\"stockData\"\r\n        [catData]=\"catData\" [unitData]=\"unitData\" [taxData]=\"taxData\" (stockEvent)=\"receiveStock($event)\"\r\n        (displayChangeEvent)=\"onDialogClose($event)\"></app-stock-form>\r\n\r\n<app-category-form [displayDialog1]=\"displayDialog1\" (displayChangeEvent1)=\"onDialogClose1($event)\"\r\n        (catEvent)=\"receiveCategory($event)\"></app-category-form>\r\n\r\n<app-unit-form [displayDialog2]=\"displayDialog2\" (displayChangeEvent2)=\"onDialogClose2($event)\"\r\n        (unitEvent)=\"receiveUnit($event)\"></app-unit-form>\r\n\r\n<app-customer-form [displayDialog3]=\"displayDialog3\" (displayChangeEvent3)=\"onDialogClose3($event)\"\r\n        (customerEvent)=\"receiveCustomer($event)\"></app-customer-form>\r\n\r\n<app-tax-form [displayDialog3]=\"displayDialog4\" (displayChangeEvent3)=\"onDialogClose4($event)\"\r\n        (taxEvent)=\"receiveTax($event)\"></app-tax-form>\r\n\r\n<!-- <div id=\"print-section\" style=\"display: none\">  -->\r\n<div id=\"print-section\">\r\n\r\n        <app-invoice-design #printDiv [invoiceData]=\"invoiceData\"></app-invoice-design>\r\n\r\n        <!-- <app-invoice-design-pos></app-invoice-design-pos> -->\r\n</div>\r\n\r\n<p-dialog [showHeader]=\"false\" [(visible)]=\"loaidnSpinner\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '350px', minWidth: '200px'}\" [minY]=\"70\" \r\n[maximizable]=\"true\" [baseZIndex]=\"10000\">\r\n\r\n\r\n        <div style=\"text-align: center;padding: 16px;\">\r\n                <p-progressSpinner [style]=\"{width: '50px', height: '50px'}\" strokeWidth=\"3\" animationDuration=\".5s\">\r\n                </p-progressSpinner>\r\n                <h5>Please wait...</h5>\r\n                <p> Getting data processing...</p>\r\n\r\n        </div>\r\n</p-dialog>";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/sales/sales/sales-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/sales/sales/sales-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: SalesRoutingModule */

  /***/
  function srcAppComponentInventoryMngtSalesSalesSalesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesRoutingModule", function () {
      return SalesRoutingModule;
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


    var _sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales.component */
    "./src/app/component/inventory-mngt/sales/sales/sales.component.ts");

    var routes = [{
      path: '',
      component: _sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"]
    }, {
      path: ':invoice_code',
      component: _sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"]
    }];

    var SalesRoutingModule = function SalesRoutingModule() {
      _classCallCheck(this, SalesRoutingModule);
    };

    SalesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SalesRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/sales/sales/sales.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/sales/sales/sales.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtSalesSalesSalesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen {\n  #print-section {\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n  }\n}\n@media print {\n  #print-section {\n    visibility: visible !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L3NhbGVzL3NhbGVzL0Y6XFxiYWdlZVxcaW52ZW50b3J5LW1uZ3RcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxpbnZlbnRvcnktbW5ndFxcc2FsZXNcXHNhbGVzXFxzYWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L3NhbGVzL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7RUNDRjtBQUNGO0FERUE7RUFFSTtJQUVJLDhCQUFBO0VDRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9zYWxlcy9zYWxlcy9zYWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4ge1xyXG4gICAgI3ByaW50LXNlY3Rpb257XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIHByaW50XHJcbnsgICAgXHJcbiAgICAjcHJpbnQtc2VjdGlvblxyXG4gICAge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiB7XG4gICNwcmludC1zZWN0aW9uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gICNwcmludC1zZWN0aW9uIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/sales/sales/sales.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/sales/sales/sales.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SalesComponent */

  /***/
  function srcAppComponentInventoryMngtSalesSalesSalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesComponent", function () {
      return SalesComponent;
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


    var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/customer.service */
    "./src/app/shared/customer.service.ts");
    /* harmony import */


    var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/stock.service */
    "./src/app/shared/stock.service.ts");
    /* harmony import */


    var src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/category.service */
    "./src/app/shared/category.service.ts");
    /* harmony import */


    var src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/sales.service */
    "./src/app/shared/sales.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/pdf-generator.service */
    "./src/app/shared/pdf-generator.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_shared_invoice_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/shared/invoice.service */
    "./src/app/shared/invoice.service.ts");

    var SalesComponent = /*#__PURE__*/function () {
      function SalesComponent(_fb, router, messageService, customerService, stockService, categoryService, salesService, commonService, auth, pdfGenerator, sessionService, activeRoute, invoiceService) {
        var _this = this;

        _classCallCheck(this, SalesComponent);

        this._fb = _fb;
        this.router = router;
        this.messageService = messageService;
        this.customerService = customerService;
        this.stockService = stockService;
        this.categoryService = categoryService;
        this.salesService = salesService;
        this.commonService = commonService;
        this.auth = auth;
        this.pdfGenerator = pdfGenerator;
        this.sessionService = sessionService;
        this.activeRoute = activeRoute;
        this.invoiceService = invoiceService;
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

        this.taxData = []; // pass data to another component

        this.invoiceArray = [];
        this.selectedCustData = [];
        this.today = new Date();
        this.stocksListResult = [];
        this.loaidnSpinner = false;
        this.activeRoute.params.subscribe(function (params) {
          console.log(params.invoice_code);
          _this.invoice_code = params.invoice_code;
        }); // let invalidDate = new Date();
        // this.invalidDates = [invalidDate];
      }

      _createClass(SalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.invoice_code) {
            this.bradCrum = [{
              label: '',
              icon: 'pi pi-home',
              command: function command(event) {
                _this2.router.navigate(['/inventory-mngt/dashboard']);
              }
            }, {
              label: "Payment",
              command: function command(event) {
                _this2.router.navigate(["/inventory-mngt/payment"]);
              }
            }, {
              label: "Edit Invoice"
            }, {
              label: null
            }];
          } else {
            this.bradCrum = [{
              label: '',
              icon: 'pi pi-home',
              command: function command(event) {
                _this2.router.navigate(['/inventory-mngt/dashboard']);
              }
            }, {
              label: "Sales",
              command: function command(event) {
                _this2.router.navigate(["/inventory-mngt/sales"]);
              }
            }];
          }

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
          }, {
            label: 'Collection',
            value: 3
          }];
          this.discountPer = [{
            label: '5%',
            value: 1
          }, {
            label: '10%',
            value: 2
          }];
          this.createSalesForm();
          this.getCustomerByCompany();
          this.getCategoryByCompany();
          this.getStockByCompany();

          if (!this.invoice_code) {
            this.getLastInvoiceByCompany();
          }

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
          var _this3 = this;

          Object.keys(this.invoiceForm.controls).forEach(function (key) {
            console.log('key', key);

            _this3.invoiceForm.controls[key].markAsDirty();
          });
          Object.keys(this.invoiceForm.get('invoiceList')['controls']).forEach(function (key1) {
            console.log('key1', key1);
            Object.keys(_this3.invoiceForm.get('invoiceList')['controls'][key1].controls).forEach(function (key2) {
              console.log('key2', key2);
              console.log('invoiceList', _this3.invoiceForm.get('invoiceList')['controls'][key1].controls[key2]);

              _this3.invoiceForm.get('invoiceList')['controls'][key1].controls[key2].markAsDirty();
            });
          });
        }
      }, {
        key: "checkValidityCus",
        value: function checkValidityCus() {
          var _this4 = this;

          Object.keys(this.customerForm.controls).forEach(function (key) {
            _this4.customerForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "createSalesForm",
        value: function createSalesForm() {
          this.invoiceForm = this._fb.group({
            _id: [''],
            company_details_id: [this.sessionService.getItem('company_id'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            invoice_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            invoice_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            customer_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            customer_details_id_total_purchase_amt: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            customer_details_id_total_paid_amt: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            customer_details_id_total_pending_amt: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            invoiceList: this._fb.array([this.initRowFirst()]),
            sub_total: [0.00],
            discount: [0.00],
            round_off: [0.00],
            grand_total: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            befor_grand_total: [0.00],
            cgst: [0.00],
            sgst: [0.00],
            tax_enable: [true],
            payment_type: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            paid_amount: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            befor_paid_amount: [0.00],
            balance_amount: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            payment_status: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
          });
        }
      }, {
        key: "priviewPdf",
        value: function priviewPdf() {
          this.pdfGenerator.testPdg().subscribe(function (data) {
            console.log('testPdf', data);
            console.log('url', src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].api_url + data); // printJS('docs/'+ environment.api_url + data)
            // printJS({ printable: 'docs/' + environment.api_url + data + "'", type: 'pdf', showModal: true })
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
        value: function initRowFirst(data) {
          console.log(data);
          return this._fb.group({
            stock_details_id: [data ? data.stock_details_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            stock_name: [data ? data.stock_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            price: [data ? data.price : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            mrp: [data ? data.mrp : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            qty: [data ? data.qty : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            befor_qty: [data ? data.qty : ''],
            total_qty: [data ? data.total_qty : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            tax_name: [data ? data.tax_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            cgst_amt: [data ? data.cgst_amt : 0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            sgst_amt: [data ? data.sgst_amt : 0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            gst_per: [data ? data.gst_per : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            total: [data ? data.total : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            total_with_gst: [data ? data.total_with_gst : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
          });
        }
      }, {
        key: "getInvoiceById",
        value: function getInvoiceById() {
          var _this5 = this;

          this.loaidnSpinner = true;
          this.invoiceService.getInvoiceById(this.invoice_code).subscribe(function (data) {
            _this5.loaidnSpinner = false;
            console.log('getInvoiceById', data);
            _this5.bradCrum[3].label = data[0].invoice_code ? data[0].invoice_code : null;
            _this5.selectedCustData = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](_this5.customers, {
              '_id': data[0].customer_details_id
            });

            _this5.invoiceForm.patchValue({
              _id: data[0]._id,
              invoice_code: data[0].invoice_code,
              invoice_date: new Date(data[0].invoice_date),
              customer_details_id: data[0].customer_details_id,
              customer_details_id_total_paid_amt: _this5.selectedCustData ? _this5.selectedCustData.total_paid_amt : 0,
              customer_details_id_total_pending_amt: _this5.selectedCustData ? _this5.selectedCustData.total_pending_amt : 0,
              customer_details_id_total_purchase_amt: _this5.selectedCustData ? _this5.selectedCustData.total_purchase_amt : 0,
              discount: data[0].discount ? data[0].discount : 0,
              grand_total: data[0].grand_total,
              befor_grand_total: data[0].grand_total,
              paid_amount: data[0].paid_amount ? data[0].paid_amount : 0,
              payment_status: data[0].payment_status,
              payment_type: data[0].payment_type,
              round_off: data[0].round_off ? data[0].round_off : 0,
              sgst: data[0].sgst,
              cgst: data[0].cgst,
              sub_total: data[0].sub_total,
              tax_enable: data[0].tax_enable
            }); // this.invoiceForm.controls['invoice_code'].setValue(data[0].invoice_code);


            var control = _this5.invoiceForm.controls['invoiceList'];
            control.removeAt(0);
            data[0].invoice_list.forEach(function (element) {
              // this.initRowFirst(element)
              var foundIndex = _this5.stocks.findIndex(function (x) {
                return x._id == element.stock_details_id;
              });

              _this5.stocks[foundIndex].stock_qty += element.qty;
              var selectedProdData = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](_this5.stocks, {
                '_id': element.stock_details_id
              });
              var listStock = {
                label: selectedProdData.stock_name + ' | ' + selectedProdData.stock_code + ' (' + selectedProdData.stock_qty + ')',
                value: selectedProdData._id
              };
              element.stock_details_id = listStock;
              control.push(_this5.initRowFirst(element));
            });
          }, function (error) {});
        }
      }, {
        key: "getLastInvoiceByCompany",
        value: function getLastInvoiceByCompany() {
          var _this6 = this;

          this.salesService.getLastInvoice().subscribe(function (data) {
            console.log('getLastInvoice', data); // this.createSalesForm()

            _this6.invoiceForm.controls['invoice_code'].setValue(_this6.commonService.incrCode('ARG', data));
          }, function (error) {
            _this6.invoiceForm.controls['invoice_code'].setValue(_this6.commonService.incrCode('ARG', 0));
          });
        }
      }, {
        key: "getCustomerByCompany",
        value: function getCustomerByCompany() {
          var _this7 = this;

          this.customerList = [];
          this.customerService.getCustomerByCompany().subscribe(function (data) {
            _this7.customers = data;

            _this7.customerList.push({
              label: '+ Add New Customer',
              value: 0
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this7.customers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var custData = _step.value;
                var listCust = {
                  label: custData.customer_name + ' | ' + custData.customer_code,
                  value: custData._id
                };

                _this7.customerList.push(listCust);
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

            console.log('customerList', _this7.customerList);
          });
        }
      }, {
        key: "getCategoryByCompany",
        value: function getCategoryByCompany() {
          var _this8 = this;

          this.categoryService.getCategoryByCompany().subscribe(function (data) {
            console.log('categoryList', data);
            _this8.categoryList = data;
          });
        }
      }, {
        key: "getStockByCompany",
        value: function getStockByCompany() {
          var _this9 = this;

          this.stocks = [];
          this.stocksList = [];

          if (this.invoice_code) {
            this.stockService.getStockByCompany().subscribe(function (data) {
              console.log('stocksList', data);
              _this9.stocks = data; // this.stocksList = data;
              // this.stocksList.push({ label: '+ Add New Stock', value: 0 });

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = _this9.stocks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var stockData = _step2.value;
                  var listStock = {
                    label: stockData.stock_name + ' | ' + stockData.stock_code + ' (' + stockData.stock_qty + ')',
                    value: stockData._id
                  };

                  _this9.stocksList.push(listStock);
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

              if (_this9.invoice_code) {
                _this9.getInvoiceById();
              }
            });
          } else {
            this.stockService.getStockByCompanyActive().subscribe(function (data) {
              console.log('stocksList', data);
              _this9.stocks = data; // this.stocksList = data;
              // this.stocksList.push({ label: '+ Add New Stock', value: 0 });

              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = _this9.stocks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var stockData = _step3.value;
                  var listStock = {
                    label: stockData.stock_name + ' | ' + stockData.stock_code + ' (' + stockData.stock_qty + ')',
                    value: stockData._id
                  };

                  _this9.stocksList.push(listStock);
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            });
          }
        }
      }, {
        key: "addSales",
        value: function addSales() {
          var _this10 = this;

          console.log('invoiceArray', this.invoiceForm.value);
          this.invoiceForm.get('customer_details_id').setValue(this.selectedCustData._id);
          this.invoiceForm.get('invoiceList')['controls'].forEach(function (element) {
            console.log(element.controls['stock_details_id'].value);
            element.controls['stock_details_id'].setValue(element.controls['stock_details_id'].value.value);
          });
          this.salesService.addSales(this.invoiceForm.value).subscribe(function (data) {
            console.log(data);
            _this10.invoiceData = data.data[0];

            _this10.getStockByCompany(); // refresh stock qty


            _this10.invoiceForm.reset();

            _this10.selectedCustData = [];

            _this10.invoiceForm.controls['company_details_id'].setValue(_this10.sessionService.getItem('company_id'));

            _this10.invoiceForm.controls['invoice_code'].setValue(_this10.commonService.incrCode('ARG', data.next_invoice));

            _this10.invoiceForm.controls['invoice_date'].setValue(new Date());

            _this10.invoiceForm.controls['invoiceList'].reset();

            var control = _this10.invoiceForm.controls['invoiceList'];
            control.clear();
            control.push(_this10.initRowFirst());

            _this10.invoiceForm.controls['sub_total'].setValue(0.00);

            _this10.invoiceForm.controls['discount'].setValue(0.00);

            _this10.invoiceForm.controls['paid_amount'].setValue(0.00);

            _this10.invoiceForm.controls['balance_amount'].setValue(0.00);

            _this10.invoiceForm.controls['grand_total'].setValue(0.00);

            _this10.invoiceForm.controls['cgst'].setValue(0.00);

            _this10.invoiceForm.controls['sgst'].setValue(0.00);

            _this10.invoiceForm.controls['payment_type'].setValue(1);

            _this10.invoiceForm.controls['payment_status'].setValue(1);

            _this10.invoiceForm.controls['tax_enable'].setValue(true);

            setTimeout(function () {
              var divToPrint = document.getElementById('print-section');
              var mywindow = window.open('', 'new div', 'height=600,width=900');
              mywindow.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
              mywindow.document.close(); //   printJS({
              //     printable: 'print-section',
              //     type: 'html',
              //     targetStyles: ['width'],
              //     style: ' #print-section { visibility: visible!important; } ',
              //   })
            }, 1000);
          });
        }
      }, {
        key: "updateSales",
        value: function updateSales() {
          var _this11 = this;

          console.log('invoiceArray', this.invoiceForm.value);
          this.invoiceForm.get('customer_details_id').setValue(this.selectedCustData._id);
          this.invoiceForm.get('invoiceList')['controls'].forEach(function (element) {
            console.log(element.controls['stock_details_id'].value);
            element.controls['stock_details_id'].setValue(element.controls['stock_details_id'].value.value);
          });
          this.salesService.updateSales(this.invoiceForm.value).subscribe(function (data) {
            console.log(data);
            _this11.invoiceData = data.data[0];

            _this11.getStockByCompany(); // refresh stock qty


            _this11.invoiceForm.reset();

            _this11.selectedCustData = [];

            _this11.invoiceForm.controls['company_details_id'].setValue(_this11.sessionService.getItem('company_id'));

            _this11.invoiceForm.controls['invoice_code'].setValue(_this11.commonService.incrCode('ARG', data.next_invoice));

            _this11.invoiceForm.controls['invoice_date'].setValue(new Date());

            _this11.invoiceForm.controls['invoiceList'].reset();

            var control = _this11.invoiceForm.controls['invoiceList'];
            control.clear();
            control.push(_this11.initRowFirst());

            _this11.invoiceForm.controls['sub_total'].setValue(0.00);

            _this11.invoiceForm.controls['discount'].setValue(0.00);

            _this11.invoiceForm.controls['paid_amount'].setValue(0.00);

            _this11.invoiceForm.controls['balance_amount'].setValue(0.00);

            _this11.invoiceForm.controls['grand_total'].setValue(0.00);

            _this11.invoiceForm.controls['cgst'].setValue(0.00);

            _this11.invoiceForm.controls['sgst'].setValue(0.00);

            _this11.invoiceForm.controls['payment_type'].setValue(1);

            _this11.invoiceForm.controls['payment_status'].setValue(1);

            _this11.invoiceForm.controls['tax_enable'].setValue(true);

            setTimeout(function () {
              var divToPrint = document.getElementById('print-section');
              var mywindow = window.open('', 'new div', 'height=600,width=900');
              mywindow.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
              mywindow.document.close();

              _this11.router.navigate(['/inventory-mngt/payment']); //   printJS({
              //     printable: 'print-section',
              //     type: 'html',
              //     targetStyles: ['width'],
              //     style: ' #print-section { visibility: visible!important; } ',
              //   })

            }, 1000);
          });
        }
      }, {
        key: "printPriview",
        value: function printPriview() {
          var invoiceData = this.invoiceForm.value;
          invoiceData.invoice_list = invoiceData.invoiceList;
          invoiceData.customer_details_id = {
            customer_code: this.selectedCustData.customer_code,
            customer_name: this.selectedCustData.customer_name,
            customer_address: this.selectedCustData.customer_address,
            phone: this.selectedCustData.phone,
            customer_gstin: this.selectedCustData.customer_gstin,
            route_name: this.selectedCustData.route_name
          };
          this.invoiceData = invoiceData;
          setTimeout(function () {
            var divToPrint = document.getElementById('print-section');
            var mywindow = window.open('', 'new div', 'height=600,width=900');
            mywindow.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
            mywindow.document.close(); // printJS({
            //   printable: 'print-section',
            //   type: 'html',
            //   targetStyles: ['width'],
            //   style: ' #print-section { visibility: visible!important; } ',
            // })
          }, 1000);
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

          if (this.invoice_code) {
            this.updateSales();
          } else {
            this.addSales();
          }
        }
      }, {
        key: "onSelectCust",
        value: function onSelectCust(event) {
          console.log(event.value);

          if (event.value == 0) {
            this.selectedCustData = [];
            this.displayDialog3 = true;
            this.invoiceForm.controls['customer_details_id'].reset();
            return false;
          } else {
            this.selectedCustData = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](this.customers, {
              '_id': event.value
            });
            this.invoiceForm.get('tax_enable').setValue(this.selectedCustData.enable_tax ? this.selectedCustData.enable_tax : false);
            this.invoiceForm.get('customer_details_id_total_purchase_amt').setValue(this.selectedCustData.total_purchase_amt ? this.selectedCustData.total_purchase_amt : 0);
            this.invoiceForm.get('customer_details_id_total_paid_amt').setValue(this.selectedCustData.total_paid_amt ? this.selectedCustData.total_paid_amt : 0);
            this.invoiceForm.get('customer_details_id_total_pending_amt').setValue(this.selectedCustData.total_pending_amt ? this.selectedCustData.total_pending_amt : 0);
            this.calculateTotal();
          }
        }
      }, {
        key: "addListItem",
        value: function addListItem() {
          if (this.invoiceForm.controls['invoiceList'].invalid) {
            this.checkValidity();
            this.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Please fill the mantatory field!'
            });
            return false;
          }

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
          this.selectedCustData = [];
          this.invoiceForm.controls['invoiceList'].reset();
          var control = this.invoiceForm.controls['invoiceList'];
          control.clear();
          control.push(this.initRowFirst());
          this.invoiceForm.controls['invoice_date'].setValue(new Date());
          this.invoiceForm.controls['sub_total'].setValue(0.00);
          this.invoiceForm.controls['discount'].setValue(0.00);
          this.invoiceForm.controls['paid_amount'].setValue(0.00);
          this.invoiceForm.controls['balance_amount'].setValue(0.00);
          this.invoiceForm.controls['grand_total'].setValue(0.00);
          this.invoiceForm.controls['sub_total'].setValue(0.00);
          this.invoiceForm.controls['discount'].setValue(0.00);
          this.invoiceForm.controls['cgst'].setValue(0.00);
          this.invoiceForm.controls['sgst'].setValue(0.00);
          this.invoiceForm.controls['tax_enable'].setValue(true);
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
            this.invoiceForm.get('invoiceList')['controls'][i].reset();
            return false;
          }

          console.log(this.invoiceForm.value.invoiceList);

          if (this.invoiceForm.value.invoiceList.length > 1) {
            var cloneInvoiceList = this.invoiceForm.value.invoiceList.slice();
            cloneInvoiceList.splice(i, 1); // to remove selected row

            var stockAddedData = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](cloneInvoiceList, {
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
              this.invoiceForm.get('invoiceList')['controls'][i].controls['stock_details_id'].reset();
              return false;
            }
          }

          var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_10__["findIndex"](this.stocks, function (o) {
            return o._id == event.value;
          });
          console.log(sliceIndex);

          if (sliceIndex > -1) {
            // this.loggedInUsersList.splice(sliceIndex, 1);
            console.log(this.stocks[sliceIndex]);
            console.log(this.invoiceForm.get('invoiceList')['controls'][i]); // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[sliceIndex].stock_qty) 

            this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['stock_name'].setValue(this.stocks[sliceIndex].stock_name);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['total_qty'].setValue(this.stocks[sliceIndex].stock_qty);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[sliceIndex].selling_price);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['mrp'].setValue(this.stocks[sliceIndex].mrp);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['tax_name'].setValue(this.stocks[sliceIndex].tax_details_id.tax_name);
            var cgst_amt = Number(this.stocks[sliceIndex].selling_price) * (Number(this.stocks[sliceIndex].tax_details_id.tax_value_cgst) / 100);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['cgst_amt'].setValue(cgst_amt);
            var sgst_amt = Number(this.stocks[sliceIndex].selling_price) * (Number(this.stocks[sliceIndex].tax_details_id.tax_value_sgst) / 100);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['sgst_amt'].setValue(sgst_amt);
            var gst_pet = Number(this.stocks[sliceIndex].tax_details_id.tax_value_cgst) + Number(this.stocks[sliceIndex].tax_details_id.tax_value_sgst);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['gst_per'].setValue(gst_pet);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(1 * this.stocks[sliceIndex].selling_price);
            var total_amt_with_gst = 1 * this.stocks[sliceIndex].selling_price * gst_pet / 100 + this.stocks[sliceIndex].selling_price;
            this.invoiceForm.get('invoiceList')['controls'][i].controls['total_with_gst'].setValue(total_amt_with_gst);
            this.calculateTotal();
          }
        }
      }, {
        key: "onChangeQty",
        value: function onChangeQty(i) {
          if (!this.invoiceForm.get('invoiceList')['controls'][i].value.stock_details_id && this.invoiceForm.get('invoiceList')['controls'][i].value.stock_details_id == '') {
            return;
          }

          if (this.invoiceForm.get('invoiceList')['controls'][i].value.qty == 0 || this.invoiceForm.get('invoiceList')['controls'][i].value.qty == '0') {
            this.messageService.add({
              severity: 'warn',
              summary: 'Warning!',
              detail: 'Quantity atleast 1'
            });
            this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1);
            return;
          }

          console.log(i);
          console.log(this.invoiceForm.value.invoiceList[i].stock_details_id.value);
          console.log(this.stocks);
          console.log('qty', this.invoiceForm.get('invoiceList')['controls'][i].value.qty);
          var stockData = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](this.stocks, {
            '_id': this.invoiceForm.value.invoiceList[i].stock_details_id.value
          }); // let stockDataAdded = _.find(this.invoiceForm.value.invoiceList, { '_id': this.invoiceForm.value.invoiceList[i].stock_details_id })

          console.log(this.stocks[i]);
          console.log('stockData', stockData);
          console.log(this.invoiceForm.get('invoiceList')['controls'][i].value); // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
          // this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price) 

          if (stockData.stock_qty >= this.invoiceForm.get('invoiceList')['controls'][i].value.qty) {
            this.invoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(this.invoiceForm.get('invoiceList')['controls'][i].value.qty * this.invoiceForm.get('invoiceList')['controls'][i].value.price);
            var cgst_amt = Number(this.invoiceForm.get('invoiceList')['controls'][i].value.total) * (Number(this.stocks[i].tax_details_id.tax_value_cgst) / 100);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['cgst_amt'].setValue(cgst_amt);
            var sgst_amt = Number(this.invoiceForm.get('invoiceList')['controls'][i].value.total) * (Number(this.stocks[i].tax_details_id.tax_value_sgst) / 100);
            this.invoiceForm.get('invoiceList')['controls'][i].controls['sgst_amt'].setValue(sgst_amt);
            var total_amt_with_gst = this.invoiceForm.get('invoiceList')['controls'][i].value.total * (this.invoiceForm.get('invoiceList')['controls'][i].value.gst_per / 100) + this.invoiceForm.get('invoiceList')['controls'][i].value.total;
            this.invoiceForm.get('invoiceList')['controls'][i].controls['total_with_gst'].setValue(total_amt_with_gst);
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
          if (this.invoiceForm.value.tax_enable) {
            var grand_total = this.invoiceForm.value.sub_total - this.invoiceForm.value.discount + this.invoiceForm.value.cgst + this.invoiceForm.value.sgst;
            var round_off_total = Math.round(grand_total);
            var round_off_amt = round_off_total - grand_total;
            this.invoiceForm.controls['round_off'].setValue(round_off_amt);
            this.invoiceForm.controls['grand_total'].setValue(round_off_total);
          } else {
            var _grand_total = this.invoiceForm.value.sub_total - this.invoiceForm.value.discount;

            var _round_off_total = Math.round(_grand_total);

            var _round_off_amt = _round_off_total - _grand_total;

            this.invoiceForm.controls['round_off'].setValue(_round_off_amt);
            this.invoiceForm.controls['grand_total'].setValue(_round_off_total);
          }
        }
      }, {
        key: "toggleTax",
        value: function toggleTax(event) {
          if (this.invoiceForm.controls['grand_total'].value == 0) {
            return false;
          }

          this.calculateTotal();
        }
      }, {
        key: "calculateTotal",
        value: function calculateTotal() {
          // subtotal
          var sub_total = 0;
          var sub_total = lodash__WEBPACK_IMPORTED_MODULE_10__["sumBy"](this.invoiceForm.value.invoiceList, 'total');
          console.log('sub_total1', sub_total);
          this.invoiceForm.controls['sub_total'].setValue(sub_total); // cgst_total

          var cgst_total = 0;
          var cgst_total = lodash__WEBPACK_IMPORTED_MODULE_10__["sumBy"](this.invoiceForm.value.invoiceList, 'cgst_amt');
          this.invoiceForm.controls['cgst'].setValue(cgst_total); // sgst_total

          var sgst_total = 0;
          var sgst_total = lodash__WEBPACK_IMPORTED_MODULE_10__["sumBy"](this.invoiceForm.value.invoiceList, 'sgst_amt');
          this.invoiceForm.controls['sgst'].setValue(sgst_total);

          if (this.invoiceForm.value.tax_enable) {
            var grand_total = sub_total - this.invoiceForm.value.discount + cgst_total + sgst_total;
            var round_off_total = Math.round(grand_total);
            var round_off_amt = round_off_total - grand_total;
            this.invoiceForm.controls['round_off'].setValue(round_off_amt);
            this.invoiceForm.controls['grand_total'].setValue(round_off_total);
          } else {
            var _grand_total2 = sub_total - this.invoiceForm.value.discount;

            var _round_off_total2 = Math.round(_grand_total2);

            var _round_off_amt2 = _round_off_total2 - _grand_total2;

            this.invoiceForm.controls['round_off'].setValue(_round_off_amt2);
            this.invoiceForm.controls['grand_total'].setValue(_round_off_total2);
          }
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
        key: "receiveTax",
        value: function receiveTax(event) {
          console.log('receiveTax', event);
          this.taxData = event;
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
        key: "onDialogClose4",
        value: function onDialogClose4(event) {
          console.log(event);
          this.displayDialog4 = false;
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
      }, {
        key: "taxDialog",
        value: function taxDialog(event) {
          console.log('taxDialog', event);
          this.displayDialog4 = event;
        }
      }, {
        key: "scanBarcode",
        value: function scanBarcode() {
          var bardcode = '5e12c97cfb943b2df8151858';
          var geStockData = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](this.stocks, function (o) {
            return o._id == bardcode;
          });
          console.log('geStockData', geStockData);
          var event = {
            value: geStockData._id
          };
          console.log('event', event);
          var addIndex = Number(this.invoiceForm.get('invoiceList')['controls'].length) - 1;

          if (addIndex == 0 && this.invoiceForm.get('invoiceList')['controls'][addIndex].invalid) {
            this.onSelectProduct(event, addIndex);
            this.invoiceForm.get('invoiceList')['controls'][addIndex].controls['stock_details_id'].setValue(geStockData._id);
          } else {
            this.addListItem();
            this.onSelectProduct(event, addIndex);
            this.invoiceForm.get('invoiceList')['controls'][addIndex].controls['stock_details_id'].setValue(geStockData._id);
          }
        }
      }]);

      return SalesComponent;
    }();

    SalesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
      }, {
        type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"]
      }, {
        type: src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
      }, {
        type: src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_7__["SalesService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]
      }, {
        type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthLoginService"]
      }, {
        type: src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_13__["PdfGeneratorService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_shared_invoice_service__WEBPACK_IMPORTED_MODULE_16__["InvoiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("form", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SalesComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('printDiv', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SalesComponent.prototype, "printDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceDirective"])], SalesComponent.prototype, "placesRef", void 0);
    SalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sales",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sales.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/sales/sales/sales.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sales.component.scss */
      "./src/app/component/inventory-mngt/sales/sales/sales.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"], src_app_shared_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"], src_app_shared_sales_service__WEBPACK_IMPORTED_MODULE_7__["SalesService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthLoginService"], src_app_shared_pdf_generator_service__WEBPACK_IMPORTED_MODULE_13__["PdfGeneratorService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_shared_invoice_service__WEBPACK_IMPORTED_MODULE_16__["InvoiceService"]])], SalesComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/sales/sales/sales.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/component/inventory-mngt/sales/sales/sales.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SalesModule */

  /***/
  function srcAppComponentInventoryMngtSalesSalesSalesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesModule", function () {
      return SalesModule;
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


    var _sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales.component */
    "./src/app/component/inventory-mngt/sales/sales/sales.component.ts");
    /* harmony import */


    var _sales_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sales-routing.module */
    "./src/app/component/inventory-mngt/sales/sales/sales-routing.module.ts");
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


    var _shared_customer_form_customer_form_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../../shared/customer-form/customer-form.module */
    "./src/app/component/inventory-mngt/shared/customer-form/customer-form.module.ts");
    /* harmony import */


    var _shared_invoice_design_invoice_design_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../../shared/invoice-design/invoice-design.module */
    "./src/app/component/inventory-mngt/shared/invoice-design/invoice-design.module.ts");
    /* harmony import */


    var _shared_invoice_design_pos_invoice_design_pos_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ../../shared/invoice-design-pos/invoice-design-pos.module */
    "./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.module.ts");
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! primeng/scrollpanel */
    "./node_modules/primeng/scrollpanel.js");
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_32__);
    /* harmony import */


    var _shared_tax_form_tax_form_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ../../shared/tax-form/tax-form.module */
    "./src/app/component/inventory-mngt/shared/tax-form/tax-form.module.ts");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_34__);

    var SalesModule = function SalesModule() {
      _classCallCheck(this, SalesModule);
    };

    SalesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sales_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoCompleteModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"], primeng_keyfilter__WEBPACK_IMPORTED_MODULE_16__["KeyFilterModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__["ConfirmDialogModule"], primeng_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_20__["SplitButtonModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_21__["InplaceModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__["GooglePlaceModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_24__["SidebarModule"], safe_pipe__WEBPACK_IMPORTED_MODULE_25__["SafePipeModule"], _shared_stock_form_stock_form_module__WEBPACK_IMPORTED_MODULE_26__["StockFormModule"], _shared_category_form_category_form_module__WEBPACK_IMPORTED_MODULE_27__["CategoryFormModule"], _shared_unit_form_unit_form_module__WEBPACK_IMPORTED_MODULE_28__["UnitFormModule"], _shared_customer_form_customer_form_module__WEBPACK_IMPORTED_MODULE_29__["CustomerFormModule"], _shared_invoice_design_invoice_design_module__WEBPACK_IMPORTED_MODULE_30__["InvoiceDesignModule"], _shared_invoice_design_pos_invoice_design_pos_module__WEBPACK_IMPORTED_MODULE_31__["InvoiceDesignPosModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_32__["ScrollPanelModule"], _shared_tax_form_tax_form_module__WEBPACK_IMPORTED_MODULE_33__["TaxFormModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_34__["ProgressSpinnerModule"]],
      exports: [_sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"]]
    })], SalesModule);
    /***/
  }
}]);
//# sourceMappingURL=component-inventory-mngt-sales-sales-sales-module-es5.js.map