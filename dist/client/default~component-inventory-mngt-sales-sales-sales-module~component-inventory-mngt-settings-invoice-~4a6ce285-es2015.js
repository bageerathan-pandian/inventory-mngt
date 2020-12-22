(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-inventory-mngt-sales-sales-sales-module~component-inventory-mngt-settings-invoice-~4a6ce285"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n        \r\n          <div id=\"invoice-POS\">\r\n            \r\n              <div id=\"top\">\r\n                <!-- <div class=\"logo\"></div> -->\r\n                <img src=\"./assets/img/logo.png\" class=\"logo\" *ngIf=\"!company_image\">\r\n                <img [src]=\"company_image\" *ngIf=\"company_image\" class=\"logo\" >\r\n                <div class=\"info\"> \r\n                  <h2>{{sessionService.getItem('company_name') | titlecase}}</h2>\r\n                </div><!--End Info-->\r\n              </div><!--End InvoiceTop-->\r\n              \r\n              <div id=\"mid\">\r\n                <div class=\"info\">\r\n                  <h2>Contact Info</h2>\r\n                  <p> \r\n                      Address : {{sessionService.getItem('company_address')}}\r\n                      <!-- Email   : {{sessionService.getItem('user_email')}} -->\r\n                      Phone   :  {{sessionService.getItem('phone')}}\r\n                  </p>\r\n                </div>\r\n              </div><!--End Invoice Mid-->\r\n              \r\n              <div id=\"bot\">\r\n          \r\n                    <div id=\"table\">\r\n                      <table>\r\n                        <tr class=\"tabletitle\">\r\n                          <td class=\"item\"><h2>Item</h2></td>\r\n                          <td class=\"Hours\"><h2>Qty</h2></td>\r\n                          <td class=\"Rate\"><h2>Sub Total</h2></td>\r\n                        </tr>\r\n          \r\n                        <tr class=\"service\" *ngFor=\"let item of invoiceData?.data; let i=index\">\r\n                          <td class=\"tableitem\"><p class=\"itemtext\">{{item.stock_details_id.stock_name}}</p></td>\r\n                          <td class=\"tableitem\"><p class=\"itemtext\">{{item.stock_qty}}</p></td>\r\n                          <td class=\"tableitem\"><p class=\"itemtext\">{{item.stock_price * item.stock_qty | currency : 'INR':true}}</p></td>\r\n                        </tr>\r\n          \r\n          \r\n          \r\n                        <tr class=\"tabletitle\">\r\n                          <td></td>\r\n                          <td class=\"Rate\"><h2>Discount</h2></td>\r\n                          <td class=\"payment\"><h2>{{invoiceData?.data[0].discount | currency : 'INR':true}}</h2></td>\r\n                        </tr>\r\n          \r\n                        <tr class=\"tabletitle\">\r\n                          <td></td>\r\n                          <td class=\"Rate\"><h2>Total</h2></td>\r\n                          <td class=\"payment\"><h2>{{invoiceData?.data[0].grand_total | currency : 'INR':true}}</h2></td>\r\n                        </tr>\r\n          \r\n                      </table>\r\n                    </div><!--End Table-->\r\n          \r\n                    <div id=\"legalcopy\">\r\n                      <p class=\"legal\"><strong>Thank you for your business!</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices. \r\n                      </p>\r\n                    </div>\r\n          \r\n                  </div><!--End InvoiceBot-->\r\n            </div><!--End Invoice-->\r\n          ");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#invoice-POS {\n  box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);\n  padding: 2mm;\n  margin: 0 auto;\n  width: 44mm;\n  background: #FFF;\n}\n\n#invoice-POS ::-moz-selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n#invoice-POS ::selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n#invoice-POS ::moz-selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n#invoice-POS h1 {\n  font-size: 1.5em;\n  color: #222;\n}\n\n#invoice-POS h2 {\n  font-size: 0.9em;\n}\n\n#invoice-POS h3 {\n  font-size: 1.2em;\n  font-weight: 300;\n  line-height: 2em;\n}\n\n#invoice-POS p {\n  font-size: 0.7em;\n  color: #666;\n  line-height: 1.2em;\n}\n\n#invoice-POS #top, #invoice-POS #mid, #invoice-POS #bot {\n  /* Targets all id with 'col-' */\n  border-bottom: 1px solid #EEE;\n}\n\n#invoice-POS #top {\n  min-height: 100px;\n}\n\n#invoice-POS #mid {\n  min-height: 80px;\n}\n\n#invoice-POS #bot {\n  min-height: 50px;\n}\n\n#invoice-POS #top .logo {\n  height: 60px;\n  width: 60px;\n  background: url(http://michaeltruong.ca/images/logo1.png) no-repeat;\n  background-size: 60px 60px;\n}\n\n#invoice-POS .clientlogo {\n  float: left;\n  height: 60px;\n  width: 60px;\n  background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;\n  background-size: 60px 60px;\n  border-radius: 50px;\n}\n\n#invoice-POS .info {\n  display: block;\n  margin-left: 0;\n}\n\n#invoice-POS .title {\n  float: right;\n}\n\n#invoice-POS .title p {\n  text-align: right;\n}\n\n#invoice-POS table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n#invoice-POS .tabletitle {\n  font-size: 0.5em;\n  background: #EEE;\n}\n\n#invoice-POS .service {\n  border-bottom: 1px solid #EEE;\n}\n\n#invoice-POS .item {\n  width: 24mm;\n}\n\n#invoice-POS .itemtext {\n  font-size: 0.5em;\n}\n\n#invoice-POS #legalcopy {\n  margin-top: 5mm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L3NoYXJlZC9pbnZvaWNlLWRlc2lnbi1wb3MvRjpcXGJhZ2VlXFxpbnZlbnRvcnktbW5ndFxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRcXGludmVudG9yeS1tbmd0XFxzaGFyZWRcXGludm9pY2UtZGVzaWduLXBvc1xcaW52b2ljZS1kZXNpZ24tcG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvaW52ZW50b3J5LW1uZ3Qvc2hhcmVkL2ludm9pY2UtZGVzaWduLXBvcy9pbnZvaWNlLWRlc2lnbi1wb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1E7RUFDRSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQVY7O0FERVE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDVjs7QURIUTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0NWOztBRENRO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDRVY7O0FEQVE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNHVjs7QUREUTtFQUNFLGdCQUFBO0FDSVY7O0FERlE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLVjs7QURIUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDTVY7O0FESlE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDT1Y7O0FETFE7RUFDRSxpQkFBQTtBQ1FWOztBRE5RO0VBQ0UsZ0JBQUE7QUNTVjs7QURQUTtFQUNFLGdCQUFBO0FDVVY7O0FEUlE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1FQUFBO0VBQ0EsMEJBQUE7QUNXVjs7QURUUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9FQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ1lWOztBRFZRO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNhVjs7QURYUTtFQUNFLFlBQUE7QUNjVjs7QURaUTtFQUNFLGlCQUFBO0FDZVY7O0FEYlE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNnQlY7O0FEZFE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDaUJWOztBRGZRO0VBQ0UsNkJBQUE7QUNrQlY7O0FEaEJRO0VBQ0UsV0FBQTtBQ21CVjs7QURqQlE7RUFDRSxnQkFBQTtBQ29CVjs7QURsQlE7RUFDRSxlQUFBO0FDcUJWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ludmVudG9yeS1tbmd0L3NoYXJlZC9pbnZvaWNlLWRlc2lnbi1wb3MvaW52b2ljZS1kZXNpZ24tcG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgICAgI2ludm9pY2UtUE9TIHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxaW4gLTAuMjVpbiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAybW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIHdpZHRoOiA0NG1tO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2ludm9pY2UtUE9TIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMzE1NDQ7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2ludm9pY2UtUE9TIDo6bW96LXNlbGVjdGlvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjMxNTQ0O1xyXG4gICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjaW52b2ljZS1QT1MgI3RvcCwgI2ludm9pY2UtUE9TICNtaWQsICNpbnZvaWNlLVBPUyAjYm90IHtcclxuICAgICAgICAgIC8qIFRhcmdldHMgYWxsIGlkIHdpdGggJ2NvbC0nICovXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2ludm9pY2UtUE9TICN0b3Age1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyAjbWlkIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyAjYm90IHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyAjdG9wIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9taWNoYWVsdHJ1b25nLmNhL2ltYWdlcy9sb2dvMS5wbmcpIG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjaW52b2ljZS1QT1MgLmNsaWVudGxvZ28ge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwOi8vbWljaGFlbHRydW9uZy5jYS9pbWFnZXMvY2xpZW50LmpwZykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjaW52b2ljZS1QT1MgLmluZm8ge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2ludm9pY2UtUE9TIC50aXRsZSB7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyAudGl0bGUgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2ludm9pY2UtUE9TIHRhYmxlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2ludm9pY2UtUE9TIC50YWJsZXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogLjVlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNFRUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnZvaWNlLVBPUyAuc2VydmljZSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2ludm9pY2UtUE9TIC5pdGVtIHtcclxuICAgICAgICAgIHdpZHRoOiAyNG1tO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjaW52b2ljZS1QT1MgLml0ZW10ZXh0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2ludm9pY2UtUE9TICNsZWdhbGNvcHkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNW1tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAgIC8vICAgICA6aG9zdCB7XHJcbiAgICAgICAgLy8gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfSIsIiNpbnZvaWNlLVBPUyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxaW4gLTAuMjVpbiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDJtbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA0NG1tO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4jaW52b2ljZS1QT1MgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZjMxNTQ0O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuI2ludm9pY2UtUE9TIDo6bW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmMzE1NDQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4jaW52b2ljZS1QT1MgaDEge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzIyMjtcbn1cblxuI2ludm9pY2UtUE9TIGgyIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuI2ludm9pY2UtUE9TIGgzIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuI2ludm9pY2UtUE9TIHAge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuXG4jaW52b2ljZS1QT1MgI3RvcCwgI2ludm9pY2UtUE9TICNtaWQsICNpbnZvaWNlLVBPUyAjYm90IHtcbiAgLyogVGFyZ2V0cyBhbGwgaWQgd2l0aCAnY29sLScgKi9cbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUU7XG59XG5cbiNpbnZvaWNlLVBPUyAjdG9wIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbiNpbnZvaWNlLVBPUyAjbWlkIHtcbiAgbWluLWhlaWdodDogODBweDtcbn1cblxuI2ludm9pY2UtUE9TICNib3Qge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4jaW52b2ljZS1QT1MgI3RvcCAubG9nbyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHVybChodHRwOi8vbWljaGFlbHRydW9uZy5jYS9pbWFnZXMvbG9nbzEucG5nKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xufVxuXG4jaW52b2ljZS1QT1MgLmNsaWVudGxvZ28ge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9taWNoYWVsdHJ1b25nLmNhL2ltYWdlcy9jbGllbnQuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4jaW52b2ljZS1QT1MgLmluZm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbiNpbnZvaWNlLVBPUyAudGl0bGUge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNpbnZvaWNlLVBPUyAudGl0bGUgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jaW52b2ljZS1QT1MgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuI2ludm9pY2UtUE9TIC50YWJsZXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgYmFja2dyb3VuZDogI0VFRTtcbn1cblxuI2ludm9pY2UtUE9TIC5zZXJ2aWNlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUU7XG59XG5cbiNpbnZvaWNlLVBPUyAuaXRlbSB7XG4gIHdpZHRoOiAyNG1tO1xufVxuXG4jaW52b2ljZS1QT1MgLml0ZW10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuI2ludm9pY2UtUE9TICNsZWdhbGNvcHkge1xuICBtYXJnaW4tdG9wOiA1bW07XG59Il19 */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: InvoiceDesignPosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDesignPosComponent", function() { return InvoiceDesignPosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let InvoiceDesignPosComponent = class InvoiceDesignPosComponent {
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.company_image = this.sessionService.getItem('company_image') ? src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.sessionService.getItem('company_image') : null;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
    }
};
InvoiceDesignPosComponent.ctorParameters = () => [
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InvoiceDesignPosComponent.prototype, "invoiceData", void 0);
InvoiceDesignPosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-design-pos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-design-pos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-design-pos.component.scss */ "./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
], InvoiceDesignPosComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: InvoiceDesignPosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDesignPosModule", function() { return InvoiceDesignPosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _invoice_design_pos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-design-pos.component */ "./src/app/component/inventory-mngt/shared/invoice-design-pos/invoice-design-pos.component.ts");




let InvoiceDesignPosModule = class InvoiceDesignPosModule {
};
InvoiceDesignPosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_invoice_design_pos_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDesignPosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        exports: [_invoice_design_pos_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDesignPosComponent"]]
    })
], InvoiceDesignPosModule);



/***/ })

}]);
//# sourceMappingURL=default~component-inventory-mngt-sales-sales-sales-module~component-inventory-mngt-settings-invoice-~4a6ce285-es2015.js.map