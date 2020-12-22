(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-e-commerce-company-products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/e-commerce/company/products/products.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/e-commerce/company/products/products.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"wrapper\">\r\n    <h1>Bike Stock</h1>\r\n<span><i class=\"shopping-cart\"></i></span>\r\n\r\n   <div class=\"clear\"></div>\r\n   <div class=\"items\">\r\n       <div class=\"item\" *ngFor=\"let item of stocksList; let i=index\">\r\n           <img src=\"http://img.tjskl.org.cn/pic/z2577d9d-200x200-1/pinarello_lungavita_2010_single_speed_bike.jpg\" alt=\"item\" />\r\n            <h2>{{item.stock_name}}</h2>\r\n\r\n           <p>Price: <em>{{item.selling_price  | currency : 'INR':true}}</em>\r\n           </p>\r\n           <button class=\"add-to-cart\" type=\"button\" (click)=\"addCart()\">Add to cart</button>\r\n       </div>\r\n      \r\n   </div>\r\n</div> -->\r\n\r\n\r\n<div class=\"ui-g ui-fluid\">\r\n    \r\n    <div class=\"ui-g-12\" >\r\n        <h1> Stock</h1>\r\n        <span><i class=\"shopping-cart\"></i></span>\r\n    </div>\r\n    <div class=\"ui-g-12\" >\r\n      \r\n        <div class=\"ui-g-3\"*ngFor=\"let item of stocksList; let i=index\">\r\n<p-card header=\"{{item.stock_name}}\" subheader=\"{{item.selling_price  | currency : 'INR':true}}\" [style]=\"{width: '320px'}\" styleClass=\"ui-card-shadow\">\r\n    <p-header>\r\n        <img src=\"Card\" src=\"http://img.tjskl.org.cn/pic/z2577d9d-200x200-1/pinarello_lungavita_2010_single_speed_bike.jpg\">\r\n    </p-header>\r\n    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>\r\n    <p-footer>\r\n        <button pButton type=\"button\" label=\"Buy\" (click)=\"addCart()\" icon=\"pi pi-check\" style=\"margin-right: .25em\"></button>\r\n    </p-footer>\r\n</p-card>\r\n</div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./src/app/component/e-commerce/company/products/products-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/e-commerce/company/products/products-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/component/e-commerce/company/products/products.component.ts");




const routes = [{ path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] }];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/component/e-commerce/company/products/products.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/component/e-commerce/company/products/products.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #F2EEE9;\n  font: normal 13px/1.5 Georgia, Serif;\n  color: #333;\n}\n\n.wrapper {\n  width: 705px;\n  margin: 20px auto;\n  padding: 20px;\n}\n\nh1 {\n  display: inline-block;\n  background-color: #333;\n  color: #fff;\n  font-size: 20px;\n  font-weight: normal;\n  text-transform: uppercase;\n  padding: 4px 20px;\n  float: left;\n}\n\n.clear {\n  clear: both;\n}\n\n.items {\n  display: block;\n  margin: 20px 0;\n}\n\n.item {\n  background-color: #fff;\n  float: left;\n  margin: 0 10px 10px 0;\n  width: 205px;\n  padding: 10px;\n  height: 290px;\n}\n\n.item img {\n  display: block;\n  margin: auto;\n}\n\nh2 {\n  font-size: 16px;\n  display: block;\n  border-bottom: 1px solid #ccc;\n  margin: 0 0 10px 0;\n  padding: 0 0 5px 0;\n}\n\nbutton {\n  border: 1px solid #722A1B;\n  padding: 4px 14px;\n  background-color: #fff;\n  color: #722A1B;\n  text-transform: uppercase;\n  float: right;\n  margin: 5px 0;\n  font-weight: bold;\n  cursor: pointer;\n}\n\nspan {\n  float: right;\n}\n\n.shopping-cart {\n  display: inline-block;\n  background: url(\"http://cdn1.iconfinder.com/data/icons/jigsoar-icons/24/_cart.png\") no-repeat 0 0;\n  width: 24px;\n  height: 24px;\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2UtY29tbWVyY2UvY29tcGFueS9wcm9kdWN0cy9GOlxcYmFnZWVcXGludmVudG9yeS1tbmd0XFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudFxcZS1jb21tZXJjZVxcY29tcGFueVxccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvZS1jb21tZXJjZS9jb21wYW55L3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNPSjs7QURMQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNVSjs7QURSQTtFQUNJLFlBQUE7QUNXSjs7QURUQTtFQUNJLHFCQUFBO0VBQ0EsaUdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZS1jb21tZXJjZS9jb21wYW55L3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRUVFOTtcclxuICAgIGZvbnQ6IG5vcm1hbCAxM3B4LzEuNSBHZW9yZ2lhLCBTZXJpZjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIHdpZHRoOiA3MDVweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDRweCAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbi5pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbi5pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcclxuICAgIHdpZHRoOiAyMDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG59XHJcbi5pdGVtIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgcGFkZGluZzogMCAwIDVweCAwO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzIyQTFCO1xyXG4gICAgcGFkZGluZzogNHB4IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM3MjJBMUI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnNwYW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5zaG9wcGluZy1jYXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cDovL2NkbjEuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9qaWdzb2FyLWljb25zLzI0L19jYXJ0LnBuZycpIG5vLXJlcGVhdCAwIDA7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFRUU5O1xuICBmb250OiBub3JtYWwgMTNweC8xLjUgR2VvcmdpYSwgU2VyaWY7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA3MDVweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uaXRlbXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcbiAgd2lkdGg6IDIwNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDI5MHB4O1xufVxuXG4uaXRlbSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIHBhZGRpbmc6IDAgMCA1cHggMDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyMkExQjtcbiAgcGFkZGluZzogNHB4IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjNzIyQTFCO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zaG9wcGluZy1jYXJ0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwOi8vY2RuMS5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2ppZ3NvYXItaWNvbnMvMjQvX2NhcnQucG5nXCIpIG5vLXJlcGVhdCAwIDA7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/e-commerce/company/products/products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/e-commerce/company/products/products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/stock.service */ "./src/app/shared/stock.service.ts");



let ProductsComponent = class ProductsComponent {
    constructor(stockService) {
        this.stockService = stockService;
    }
    ngOnInit() {
        this.getStockByCompanySlug();
    }
    getStockByCompanySlug() {
        this.stockService.getStockByCompanySlug()
            .subscribe((data) => {
            console.log('stocksList', data);
            this.stocksList = data;
        });
    }
    addCart() {
        $(function () {
            var cart = $('.shopping-cart');
            var imgtodrag = $(this).parent('.item').find("img").eq(0);
            if (imgtodrag) {
                var imgclone = imgtodrag.clone()
                    .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                    .css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                })
                    .appendTo($('body'))
                    .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1000, 'easeInOutExpo');
                setTimeout(function () {
                    cart.effect("shake", {
                        times: 2
                    }, 200);
                }, 1500);
                imgclone.animate({
                    'width': 0,
                    'height': 0
                }, function () {
                    $(this).detach();
                });
            }
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/e-commerce/company/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/component/e-commerce/company/products/products.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/component/e-commerce/company/products/products.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/e-commerce/company/products/products.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/component/e-commerce/company/products/products-routing.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.component */ "./src/app/component/e-commerce/company/products/products.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);







let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]
        ]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/shared/stock.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/stock.service.ts ***!
  \*****************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/session.service.ts");





let StockService = class StockService {
    constructor(httpClient, sessionService) {
        this.httpClient = httpClient;
        this.sessionService = sessionService;
    }
    getStock() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock');
    }
    getStockByCompany() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company/' + this.sessionService.getItem('company_id'));
    }
    getStockByCompanySlug() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company-slug/' + this.sessionService.getItem('slug'));
    }
    getStockByCompanyActive() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/get-by-company-active/' + this.sessionService.getItem('company_id'));
    }
    addStock(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock', body, { headers: headerOption });
    }
    updateStock(data) {
        var body = JSON.stringify(data);
        console.log('body', body);
        var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/' + data._id, body, { headers: headerOption });
    }
    deleteStock(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/stock/' + id);
    }
};
StockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
StockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], StockService);



/***/ })

}]);
//# sourceMappingURL=component-e-commerce-company-products-products-module-es2015.js.map