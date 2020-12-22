function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-report-sales-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtReportsSalesReportSalesReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n\r\n\r\n\r\n\r\n<div style=\"margin-top: 15px;\">\r\n\r\n<p-card>\r\n  \r\n \r\n\r\n<p-table  #dt  [value]=\"invoiceList\"  [loading]=\"loading\"  [columns]=\"cols\" dataKey=\"_id\" [paginator]=\"true\"  [rowsPerPageOptions]=\"[10,50,100]\"  [globalFilterFields]=\"['_id','invoice_details_id.invoice_code']\"  [rows]=\"10\" >\r\n\r\n<ng-template pTemplate=\"caption\">\r\n  \r\n  <div class=\"ui-helper-clearfix\" style=\"text-align: left;width: 50%; float: left; margin-bottom: 10px;\">\r\n    <div style=\"width: 68%;padding: 0 1%; float: left;\">\r\n      <!-- <div id=\"reportrange\" style=\"background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc;\">\r\n        <i class=\"fa fa-calendar\"></i>&nbsp;\r\n        <span></span> <i class=\"fa fa-caret-down\"></i>\r\n      </div> -->\r\n      <input type=\"text\" pInputText [(ngModel)]=\"selectedDate\" \r\n      ngxDaterangepickerMd\r\n      [showCustomRangeLabel]=\"true\"\r\n      [alwaysShowCalendars]=\"true\"\r\n      [ranges]=\"ranges\"\r\n      [linkedCalendars]=\"true\" \r\n      [showCancel]=\"true\"\r\n       placeholder=\"Select please...\"\r\n        readonly\r\n        [locale]=\"{format: 'DD/MM/YYYY'}\"\r\n         (ngModelChange)=\"change($event)\" />\r\n    </div>\r\n    <div style=\"width: 28%;padding: 0 1%; float: left;\">\r\n             <!-- <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"margin-right: 0.5em;\"></button> -->\r\n             <button type=\"button\" pButton icon=\"pi pi-file-excel\" iconPos=\"left\" label=\"EXCEL\" (click)=\"exportExcel()\" style=\"margin-right: 0.5em;\" class=\"ui-button-success\"></button>\r\n             <!-- <button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"ui-button-warning\"  style=\"margin-right: 0.5em;\" ></button> -->\r\n             <!-- <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"CSV - Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\"  style=\"margin-right: 0.5em;\"  ></button> -->\r\n        \r\n    </div>\r\n    \r\n\r\n    </div>\r\n<div style=\"text-align: right\">        \r\n  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \r\n  <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\r\n</div>\r\n</ng-template>\r\n<ng-template pTemplate=\"header\" let-columns>\r\n<tr>\r\n      <th style=\"width: 3em\">\r\n              <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n          </th>\r\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\r\n              {{col.header}}\r\n              <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n\r\n          </th>\r\n</tr>\r\n\r\n</ng-template>\r\n<ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\">\r\n  <tr [pSelectableRow]=\"rowData\">\r\n        <td>\r\n                <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\r\n            </td>\r\n            <td>\r\n                  {{rowData.invoice_details_id.invoice_code}}\r\n            </td>\r\n            <td>\r\n                  {{rowData.invoice_details_id.invoice_date | date:'medium'}}\r\n            </td>\r\n            <td>\r\n                {{rowData.sub_total  | currency : 'INR':true}}\r\n        </td>\r\n        <td>\r\n            {{rowData.discount  | currency : 'INR':true}}\r\n    </td>\r\n    <td>\r\n        {{rowData.grand_total  | currency : 'INR':true}}\r\n</td>\r\n<td>\r\n  <ng-container *ngIf=\"rowData.payment_type == 1; then thenPaymentTemplate; else elsePaymentTemplate\"></ng-container>\r\n  <ng-template #thenPaymentTemplate>\r\n    Cash\r\n  </ng-template>\r\n  <ng-template #elsePaymentTemplate>\r\n    Card\r\n  </ng-template>\r\n\r\n</td>\r\n<td>\r\n{{rowData.updatedAt | date:'medium'}}\r\n</td>\r\n    <td>\r\n        <!-- <p-inputSwitch [(ngModel)]=\"rowData.payment_status\" (onChange)=\"onChangeStatus($event)\"></p-inputSwitch>  -->\r\n        <!-- {{rowData.payment_status}} -->\r\n        <ng-container *ngIf=\"rowData.payment_status == 1; then thenStatusTemplate; else elseStatusTemplate\"></ng-container>\r\n        <ng-template #thenStatusTemplate>\r\n          Paid\r\n        </ng-template>\r\n        <ng-template #elseStatusTemplate>\r\n          Pending\r\n        </ng-template>\r\n    </td>\r\n</tr>\r\n</ng-template>\r\n\r\n\r\n<ng-template pTemplate=\"paginatorleft\" let-state>\r\nShowing {{(state.page  * state.rows) + 1}} to {{state.rows * (state.page + 1)}} of <strong>{{invoiceList?.length}}</strong> entries\r\n</ng-template>\r\n\r\n\r\n</p-table>\r\n\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n\r\n</p-card>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/sales-report/sales-report-routing.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/sales-report/sales-report-routing.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: SalesReportRoutingModule */

  /***/
  function srcAppComponentInventoryMngtReportsSalesReportSalesReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesReportRoutingModule", function () {
      return SalesReportRoutingModule;
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


    var _sales_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales-report.component */
    "./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.ts");

    var routes = [{
      path: '',
      component: _sales_report_component__WEBPACK_IMPORTED_MODULE_3__["SalesReportComponent"]
    }];

    var SalesReportRoutingModule = function SalesReportRoutingModule() {
      _classCallCheck(this, SalesReportRoutingModule);
    };

    SalesReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SalesReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtReportsSalesReportSalesReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9yZXBvcnRzL3NhbGVzLXJlcG9ydC9zYWxlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: SalesReportComponent */

  /***/
  function srcAppComponentInventoryMngtReportsSalesReportSalesReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesReportComponent", function () {
      return SalesReportComponent;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");
    /* harmony import */


    var src_app_shared_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/report.service */
    "./src/app/shared/report.service.ts");

    var SalesReportComponent = /*#__PURE__*/function () {
      function SalesReportComponent(router, reportService, sessionService) {
        var _this = this;

        _classCallCheck(this, SalesReportComponent);

        this.router = router;
        this.reportService = reportService;
        this.sessionService = sessionService;
        this.invoiceList = [];
        this.reportListSheet = [];
        this.selectedDate = {
          start: moment__WEBPACK_IMPORTED_MODULE_2__().format(),
          end: moment__WEBPACK_IMPORTED_MODULE_2__().format()
        };
        this.ranges = {
          'Today': [moment__WEBPACK_IMPORTED_MODULE_2__().format(), moment__WEBPACK_IMPORTED_MODULE_2__().format()],
          'Yesterday': [moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').format(), moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').format()],
          'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_2__().subtract(6, 'days').format(), moment__WEBPACK_IMPORTED_MODULE_2__().format()],
          'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days').format(), moment__WEBPACK_IMPORTED_MODULE_2__().format()],
          'This Month': [moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month').format(), moment__WEBPACK_IMPORTED_MODULE_2__().endOf('month').format()],
          'Last Month': [moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'month').startOf('month').format(), moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'month').endOf('month').format()]
        };
        this.alwaysShowCalendars = true;
        this.bradCrum = [{
          label: '',
          icon: 'pi pi-home',
          command: function command(event) {
            _this.router.navigate(['/inventory-mngt/dashboard']);
          }
        }, {
          label: 'Reports',
          command: function command(event) {
            _this.router.navigate(['/inventory-mngt/reports']);
          }
        }, {
          label: 'Sales report'
        }];
        this.cols = [// { field: '_id', header: '#' },
        {
          field: 'invoice_code',
          header: 'Code'
        }, {
          field: 'invoice_date',
          header: 'Invoice Date'
        }, {
          field: 'sub_total',
          header: 'Sub Total'
        }, {
          field: 'discount',
          header: 'Discount'
        }, {
          field: 'grand_total',
          header: 'Grand Total'
        }, {
          field: 'payment_type',
          header: 'Payment Type'
        }, {
          field: 'updatedAt',
          header: 'Updated Date'
        }, {
          field: 'payment_status',
          header: 'Status'
        }];
      }

      _createClass(SalesReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.selectedDate);
          this.getSalesReportByCompany(this.selectedDate.start, this.selectedDate.end);
        }
      }, {
        key: "change",
        value: function change(event) {
          console.log(event);
          this.getSalesReportByCompany(event.startDate, event.endDate);
        }
      }, {
        key: "getSalesReportByCompany",
        value: function getSalesReportByCompany(from_date, to_date) {
          var _this2 = this;

          console.log(from_date, to_date);
          this.loading = true;
          this.reportService.getSalesReportByCompany(from_date, to_date).subscribe(function (data) {
            console.log('invoiceList', data);
            _this2.invoiceList = data;
            _this2.loading = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var sheetData = _step.value;

                _this2.reportListSheet.push({
                  'Invoice Code': sheetData.invoice_details_id.invoice_code,
                  'Invoice Date': sheetData.invoice_details_id.invoice_date,
                  'Stock Name': sheetData.stock_details_id.stock_name,
                  'Stock Qty': sheetData.stock_qty,
                  'Stock Price': sheetData.stock_price,
                  'Discount': sheetData.discount,
                  'Total Price': sheetData.grand_total,
                  'Payment Type': sheetData.payment_type,
                  'Updated date': sheetData.updatedAt,
                  'Payment Status': sheetData.payment_status == 1 ? 'Paid' : 'Not Paid'
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
          });
        }
      }, {
        key: "exportExcel",
        value: function exportExcel() {
          var _this3 = this;

          __webpack_require__.e(
          /*! import() | xlsx */
          "xlsx").then(__webpack_require__.t.bind(null,
          /*! xlsx */
          "./node_modules/xlsx/xlsx.js", 7)).then(function (xlsx) {
            var worksheet = xlsx.utils.json_to_sheet(_this3.reportListSheet);
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
            });

            _this3.saveAsExcelFile(excelBuffer, "salesReportTable");
          });
        }
      }, {
        key: "saveAsExcelFile",
        value: function saveAsExcelFile(buffer, fileName) {
          __webpack_require__.e(
          /*! import() | file-saver */
          "file-saver").then(__webpack_require__.t.bind(null,
          /*! file-saver */
          "./node_modules/file-saver/dist/FileSaver.min.js", 7)).then(function (FileSaver) {
            var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            var EXCEL_EXTENSION = '.xlsx';
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          });
        }
      }]);

      return SalesReportComponent;
    }();

    SalesReportComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
      }];
    };

    SalesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sales-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sales-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sales-report.component.scss */
      "./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])], SalesReportComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/reports/sales-report/sales-report.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/reports/sales-report/sales-report.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: SalesReportModule */

  /***/
  function srcAppComponentInventoryMngtReportsSalesReportSalesReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesReportModule", function () {
      return SalesReportModule;
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


    var _sales_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales-report.component */
    "./src/app/component/inventory-mngt/reports/sales-report/sales-report.component.ts");
    /* harmony import */


    var _sales_report_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sales-report-routing.module */
    "./src/app/component/inventory-mngt/reports/sales-report/sales-report-routing.module.ts");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/confirmdialog.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-daterangepicker-material */
    "./node_modules/ngx-daterangepicker-material/fesm2015/ngx-daterangepicker-material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SalesReportModule = function SalesReportModule() {
      _classCallCheck(this, SalesReportModule);
    };

    SalesReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sales_report_component__WEBPACK_IMPORTED_MODULE_3__["SalesReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sales_report_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalesReportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_11__["NgxDaterangepickerMd"].forRoot()]
    })], SalesReportModule);
    /***/
  }
}]);
//# sourceMappingURL=sales-report-sales-report-module-es5.js.map