(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-inventory-mngt-user-product-buy-product-buy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/product-buy/product-buy.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/product-buy/product-buy.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 15px;\">\r\n<p-card >\r\n<!-- Product Price:Rs 4500.00 -->\r\n<!-- <div id=\"paypal-checkout-btn\"></div> -->\r\n<!-- <pre>{{ paymentDetails | json }}</pre>  -->\r\n\r\n<div class=\"alert alert-warning\" *ngIf=\"sessionService.getItem('status') != 1\">\r\n    Your account has been expired. Please buy to activate.\r\n </div> \r\n\r\n<div class=\"ui-g ui-fluid\" >\r\n<div  *ngIf=\"sessionService.getItem('plan_type') == '0'\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"vin\">Plan Type</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n                <span class=\"label label-warning\"  >Free Account </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Payment Amount</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                    {{sessionService.getItem('payment_amount') | currency : 'INR':true}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Currency</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                        {{sessionService.getItem('currency')}}\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">Expiry Date</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            {{sessionService.getItem('expiry_date') | date:'medium'}}\r\n                    </div>\r\n                </div>\r\n</div>\r\n\r\n<div  *ngIf=\"sessionService.getItem('plan_type') == '1'\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-4\">\r\n              <label for=\"vin\">Plan Type</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n                \r\n                <span class=\"label label-success\" >Paid Account</span>\r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n              <div class=\"ui-g-4\">\r\n                  <label for=\"vin\">Payment Amount</label>\r\n              </div>\r\n              <div class=\"ui-g-8\">\r\n                      {{sessionService.getItem('payment_amount') | currency : 'INR':true}}\r\n              </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n                  <div class=\"ui-g-4\">\r\n                      <label for=\"vin\">Currency</label>\r\n                  </div>\r\n                  <div class=\"ui-g-8\">\r\n                          {{sessionService.getItem('currency')}}\r\n                  </div>\r\n              </div>\r\n              <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">Email</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            {{sessionService.getItem('payment_details').email}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label for=\"vin\">Type</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                                {{sessionService.getItem('payment_details').type}}\r\n                        </div>\r\n                    </div>\r\n              <div class=\"ui-g-12\">\r\n                      <div class=\"ui-g-4\">\r\n                          <label for=\"vin\">Paid date</label>\r\n                      </div>\r\n                      <div class=\"ui-g-8\">\r\n                            {{sessionService.getItem('updatedAt') | date:'medium'}}\r\n                      </div>\r\n                  </div>\r\n  </div>\r\n</div>\r\n<p-button label=\"Buy\" (onClick)=\"onBuyProduct()\" *ngIf=\"sessionService.getItem('plan_type') == '0'\"></p-button>\r\n</p-card>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/component/inventory-mngt/user/product-buy/product-buy-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/product-buy/product-buy-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductBuyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBuyRoutingModule", function() { return ProductBuyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_buy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-buy.component */ "./src/app/component/inventory-mngt/user/product-buy/product-buy.component.ts");




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

/***/ "./src/app/component/inventory-mngt/user/product-buy/product-buy.component.sass":
/*!**************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/product-buy/product-buy.component.sass ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC91c2VyL3Byb2R1Y3QtYnV5L3Byb2R1Y3QtYnV5LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/component/inventory-mngt/user/product-buy/product-buy.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/product-buy/product-buy.component.ts ***!
  \************************************************************************************/
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
/* harmony import */ var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/company.service */ "./src/app/shared/company.service.ts");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var src_app_shared_menu_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/menu-data.service */ "./src/app/shared/menu-data.service.ts");










let ProductBuyComponent = class ProductBuyComponent {
    constructor(messageService, stripeCheckoutLoader, auth, sessionService, companyService, userService, menuDataService) {
        this.messageService = messageService;
        this.stripeCheckoutLoader = stripeCheckoutLoader;
        this.auth = auth;
        this.sessionService = sessionService;
        this.companyService = companyService;
        this.userService = userService;
        this.menuDataService = menuDataService;
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
            amount: 1499900,
            currency: 'INR',
        }).then((token) => {
            // Do something with the token...
            console.log('Payment successful!', token);
            let payData = {
                _id: this.sessionService.getItem('product_payment_details_id'),
                plan_type: 1,
                payment_amount: 14999,
                currency: 'INR',
                // company_details_id: this.sessionService.getItem('company_id'),
                payment_details: token,
                expiry_date: '',
                status: 1
            };
            this.onUpdatePayment(payData);
        }).catch((err) => {
            // Payment failed or was canceled by user...
            if (err !== 'stripe_closed') {
                throw err;
            }
            //   let payData:ProductPayment = {
            //     plan_type : 1,
            //     payment_amount : 14999,
            //     currency: 'INR',
            //     company_details_id: this.auth.getUserData().company_details_id,
            //     payment_details: err,
            //     expiry_date: this.futureMonthEnd,
            //     status: 2
            // }
            // this.onRegisterPayment(payData)
        });
    }
    onUpdatePayment(pdata) {
        this.messageService.clear();
        this.auth.onUpdatePayment(pdata)
            .subscribe((data) => {
            console.log('data', data);
            this.sessionService.setItem('plan_type', 1);
            this.sessionService.setItem('expiry_date', '');
            this.sessionService.setItem('payment_details', pdata.payment_details);
            let updateCompany = {
                _id: this.sessionService.getItem('company_id'),
                status: 1
            };
            this.onRowUpdateCompany(updateCompany);
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
    onRowUpdateCompany(company) {
        console.log(company);
        this.companyService.updateCompany(company)
            .subscribe((data) => {
            console.log('update', data);
            this.sessionService.setItem('status', 1);
            this.messageService.add({ severity: 'success', summary: 'Company Updated Successfully', detail: 'Company Updated Successfully' });
            let updateUser = {
                _id: this.sessionService.getItem('_id'),
                status: 1
            };
            this.menuDataService.companyStatusSource.next(1);
            this.onRowUpdateUser(updateUser);
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowUpdateUser(user) {
        console.log(user);
        this.userService.updateUser(user)
            .subscribe((data) => {
            console.log('update', data);
            console.log('data', data);
            this.messageService.add({ severity: 'success', summary: 'User Updated Successfully', detail: 'User Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
};
ProductBuyComponent.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__["StripeCheckoutLoader"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthLoginService"] },
    { type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"] },
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_shared_menu_data_service__WEBPACK_IMPORTED_MODULE_9__["MenuDataService"] }
];
ProductBuyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-buy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-buy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/user/product-buy/product-buy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-buy.component.sass */ "./src/app/component/inventory-mngt/user/product-buy/product-buy.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__["StripeCheckoutLoader"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthLoginService"],
        src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"], src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], src_app_shared_menu_data_service__WEBPACK_IMPORTED_MODULE_9__["MenuDataService"]])
], ProductBuyComponent);



/***/ }),

/***/ "./src/app/component/inventory-mngt/user/product-buy/product-buy.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/component/inventory-mngt/user/product-buy/product-buy.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductBuyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBuyModule", function() { return ProductBuyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_buy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-buy-routing.module */ "./src/app/component/inventory-mngt/user/product-buy/product-buy-routing.module.ts");
/* harmony import */ var _product_buy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-buy.component */ "./src/app/component/inventory-mngt/user/product-buy/product-buy.component.ts");
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



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/session.service.ts");







let UserService = class UserService {
    constructor(httpClient, sessionService) {
        this.httpClient = httpClient;
        this.sessionService = sessionService;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);
    }
    getUsers() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users');
    }
    getUser() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/' + this.sessionService.getItem('_id'));
    }
    getUsersByCompany() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/get-by-company/' + this.sessionService.getItem('company_id'));
    }
    addUser(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users', body, { headers: headerOption });
    }
    updateUser(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/' + data._id, body, { headers: headerOption });
    }
    updateAllUsers(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/update-all-users/' + data.company_details_id, body, { headers: headerOption });
    }
    deleteUser(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/' + id);
    }
    // updateUser(){
    //   return this.httpClient.put('/users')
    // }
    onCheckEmailExist(data) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/check-email-exist/' + data);
    }
    addUserSocktet() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](observer => {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);
            this.socket.on('add', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
    deleteUserSocktet() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](observer => {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);
            this.socket.on('delete', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
    updateUserSocktet() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](observer => {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);
            this.socket.on('update', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
    statusUpdateUserSocktet() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](observer => {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);
            this.socket.on('status', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
], UserService);



/***/ })

}]);
//# sourceMappingURL=component-inventory-mngt-user-product-buy-product-buy-module-es2015.js.map