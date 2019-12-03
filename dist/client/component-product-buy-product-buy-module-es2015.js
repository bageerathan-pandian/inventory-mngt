(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-product-buy-product-buy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/product-buy/product-buy.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/product-buy/product-buy.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 15px;\">\r\n<p-card >\r\n<!-- Product Price:Rs 4500.00 -->\r\n<!-- <div id=\"paypal-checkout-btn\"></div> -->\r\n<!-- <pre>{{ paymentDetails | json }}</pre>  -->\r\n<div class=\"ui-g ui-fluid\" >\r\n<div  *ngIf=\"paymentDetails.plan_type == '0'\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"vin\">Plan Type</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n                <span class=\"label label-warning\"  >Free Account </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Payment Amount</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                    {{paymentDetails.payment_amount | currency : 'INR':true}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Currency</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                        {{paymentDetails.currency}}\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">Expiry Date</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            {{paymentDetails.expiry_date | date:'medium'}}\r\n                    </div>\r\n                </div>\r\n</div>\r\n\r\n<div  *ngIf=\"paymentDetails.plan_type == '1'\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-4\">\r\n              <label for=\"vin\">Plan Type</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n                \r\n                <span class=\"label label-success\" >Paid Account</span>\r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n              <div class=\"ui-g-4\">\r\n                  <label for=\"vin\">Payment Amount</label>\r\n              </div>\r\n              <div class=\"ui-g-8\">\r\n                      {{paymentDetails.payment_amount | currency : 'INR':true}}\r\n              </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n                  <div class=\"ui-g-4\">\r\n                      <label for=\"vin\">Currency</label>\r\n                  </div>\r\n                  <div class=\"ui-g-8\">\r\n                          {{paymentDetails.currency}}\r\n                  </div>\r\n              </div>\r\n              <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">Email</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            {{paymentDetails.payment_details.email}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Type</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                                {{paymentDetails.payment_details.type}}\r\n                        </div>\r\n                    </div>\r\n              <div class=\"ui-g-12\">\r\n                      <div class=\"ui-g-4\">\r\n                          <label for=\"vin\">Paid date</label>\r\n                      </div>\r\n                      <div class=\"ui-g-8\">\r\n                            {{paymentDetails.updatedAt | date:'medium'}}\r\n                      </div>\r\n                  </div>\r\n  </div>\r\n</div>\r\n<p-button label=\"Pay\" (onClick)=\"onBuyProduct()\" *ngIf=\"paymentDetails.plan_type == '0'\"></p-button>\r\n</p-card>\r\n</div>");

/***/ }),

/***/ "./src/app/component/product-buy/product-buy-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/product-buy/product-buy-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductBuyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBuyRoutingModule", function() { return ProductBuyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_buy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-buy.component */ "./src/app/component/product-buy/product-buy.component.ts");




const routes = [
    { path: '', component: _product_buy_component__WEBPACK_IMPORTED_MODULE_3__["ProductBuyComponent"] }
];
let ProductBuyRoutingModule = class ProductBuyRoutingModule {
};
ProductBuyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductBuyRoutingModule);



/***/ }),

/***/ "./src/app/component/product-buy/product-buy.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/component/product-buy/product-buy.component.sass ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9kdWN0LWJ1eS9wcm9kdWN0LWJ1eS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/component/product-buy/product-buy.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/product-buy/product-buy.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBuyComponent", function() { return ProductBuyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-stripe-checkout */ "./node_modules/ng-stripe-checkout/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");






let ProductBuyComponent = class ProductBuyComponent {
    constructor(messageService, stripeCheckoutLoader, auth) {
        this.messageService = messageService;
        this.stripeCheckoutLoader = stripeCheckoutLoader;
        this.auth = auth;
        this.addScript = false;
        this.futureMonthEnd = moment__WEBPACK_IMPORTED_MODULE_4__().add(1, 'M');
        this.paymentDetails = [];
        this.paypalConfig = {
            env: "sandbox",
            client: {
                sandbox: "AYvoUXz1SzxSJvZbpGkgofTKprB_Iz3gY06RgddW8-dmFXcBPdF8HZVe4aFuVuMF0DWLy-df3AjSWN_6",
                production: "EEVz2dWLaEOmKwOdOEdHGLsHJoJONWZkX_b89zPnLv-QwCI1AD_EJYm3bTBiqqVpalvnKuzDci74pimG"
            },
            commit: true,
            payment: (data, actions) => {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: 11, currency: 'USD' } }
                        ]
                    }
                });
            },
            onAuthorize: (data, actions) => {
                return actions.payment.execute().then((payment) => {
                    console.log('payment', payment);
                });
            }
        };
    }
    ngOnInit() {
        this.getPaymentDetails(this.auth.getUserCompanyId());
    }
    getPaymentDetails(company_details_id) {
        this.auth.getPaymentDetails(company_details_id)
            .subscribe((data) => {
            console.log('data', data);
            this.paymentDetails = data[0];
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        if (!this.addScript) {
            this.addPaypalScript().then(() => {
                paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
            });
        }
    }
    ngAfterViewInit() {
        this.stripeCheckoutLoader.createHandler({
            key: 'pk_test_F63TkaKKCwSbIPGbjcbzWuJT00PfCXqOJj',
            token: (token) => {
                // Do something with the token...
                console.log('Payment successful!', token);
            }
        }).then((handler) => {
            this.stripeCheckoutHandler = handler;
        });
    }
    addPaypalScript() {
        this.addScript = true;
        return new Promise((resolve, reject) => {
            let scriptTagElement = document.createElement('script');
            scriptTagElement.src = "https://www.paypalobjects.com/api/checkout.js";
            scriptTagElement.onload = resolve;
            document.body.appendChild(scriptTagElement);
        });
    }
    onBuyProduct() {
        this.stripeCheckoutHandler.open({
            amount: 1500000,
            currency: 'INR',
        }).then((token) => {
            // Do something with the token...
            console.log('Payment successful!', token);
            let payData = {
                plan_type: 1,
                payment_amount: 15000,
                currency: 'INR',
                company_details_id: this.auth.getUserData().company_details_id,
                payment_details: token,
                expiry_date: '',
                status: 1
            };
            this.onRegisterPayment(payData);
        }).catch((err) => {
            // Payment failed or was canceled by user...
            if (err !== 'stripe_closed') {
                throw err;
            }
            //   let payData:ProductPayment = {
            //     plan_type : 1,
            //     payment_amount : 15000,
            //     currency: 'INR',
            //     company_details_id: this.auth.getUserData().company_details_id,
            //     payment_details: err,
            //     expiry_date: this.futureMonthEnd,
            //     status: 2
            // }
            // this.onRegisterPayment(payData)
        });
    }
    onRegisterPayment(cdata) {
        this.messageService.clear();
        this.auth.onRegisterPayment(cdata)
            .subscribe((data) => {
            console.log('data', data);
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
};
ProductBuyComponent.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__["StripeCheckoutLoader"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ProductBuyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-buy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-buy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/product-buy/product-buy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-buy.component.sass */ "./src/app/component/product-buy/product-buy.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__["StripeCheckoutLoader"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], ProductBuyComponent);



/***/ }),

/***/ "./src/app/component/product-buy/product-buy.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/product-buy/product-buy.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductBuyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBuyModule", function() { return ProductBuyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_buy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-buy-routing.module */ "./src/app/component/product-buy/product-buy-routing.module.ts");
/* harmony import */ var _product_buy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-buy.component */ "./src/app/component/product-buy/product-buy.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-stripe-checkout */ "./node_modules/ng-stripe-checkout/index.js");








let ProductBuyModule = class ProductBuyModule {
};
ProductBuyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_buy_component__WEBPACK_IMPORTED_MODULE_4__["ProductBuyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _product_buy_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductBuyRoutingModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_7__["StripeCheckoutModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"]
        ]
    })
], ProductBuyModule);



/***/ })

}]);
//# sourceMappingURL=component-product-buy-product-buy-module-es2015.js.map