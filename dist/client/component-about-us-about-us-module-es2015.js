(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-us/about-us.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-us/about-us.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-header></app-header>\r\n    \r\n    \r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"item active\">\r\n        <img src=\"/assets/img/bbg5.png\" alt=\"New York\" width=\"1200\" height=\"700\">\r\n        <!-- <div class=\"carousel-caption\">\r\n          <h3>GST Ready Best POS Billing Software</h3>\r\n          <p>Ownwaysoft is a single solution to manage all your business requirements</p>\r\n        </div>       -->\r\n      </div>\r\n\r\n    </div>\r\n\r\n    \r\n     <!-- Container (About Section) -->\r\n     <div id=\"about\" class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n          <h2>About Company</h2><br>\r\n          <h4>Ownwaysoft is a software company that we develope billing softwares, web applications, e-commerce site, windows applications and hybrid apps.</h4><br>\r\n          <p>Ownwaysoft is a single solution to manage all your business requirements.We have an experience in develope billing softwares, web applications, e-commerce site, windows applications and hybrid apps.</p>\r\n          <br><button class=\"btn btn-default btn-lg\" routerLink=\"/contact-us\">Get in Touch</button>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <span class=\"glyphicon glyphicon-signal logo\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n \r\n    \r\n    \r\n    <app-footer></app-footer>");

/***/ }),

/***/ "./src/app/component/about-us/about-us-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/about-us/about-us-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AboutUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsRoutingModule", function() { return AboutUsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.component */ "./src/app/component/about-us/about-us.component.ts");




const routes = [
    { path: '', component: _about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] }
];
let AboutUsRoutingModule = class AboutUsRoutingModule {
};
AboutUsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutUsRoutingModule);



/***/ }),

/***/ "./src/app/component/about-us/about-us.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/about-us/about-us.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181;\n}\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.carousel-inner img {\n  -webkit-filter: grayscale(90%);\n  filter: grayscale(90%);\n  /* make all photos black and white */\n  width: 100%;\n  /* Set width to 100% */\n  margin: auto;\n}\n\n.carousel-caption h3 {\n  color: #fff !important;\n}\n\n@media (max-width: 600px) {\n  .carousel-caption {\n    display: none;\n    /* Hide the carousel text when the screen is less than 600 pixels wide */\n  }\n}\n\n.jumbotron {\n  background-color: #0b9bd8;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif;\n}\n\n.container-fluid {\n  padding: 60px 50px;\n}\n\n.bg-grey {\n  background-color: #f6f6f6;\n}\n\n.logo-small1 {\n  color: #0b9bd8;\n  font-size: 50px;\n}\n\n.logo {\n  color: #0b9bd8;\n  font-size: 200px;\n}\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: none;\n  border-radius: 0;\n}\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #0b9bd8;\n}\n\n.carousel-indicators li {\n  border-color: #0b9bd8;\n}\n\n.carousel-indicators li.active {\n  background-color: #0b9bd8;\n}\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0;\n}\n\n.item span {\n  font-style: normal;\n}\n\n.panel {\n  border: 1px solid #0b9bd8;\n  border-radius: 0 !important;\n  -webkit-transition: box-shadow 0.5s;\n  transition: box-shadow 0.5s;\n}\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2);\n}\n\n.panel-footer .btn:hover {\n  border: 1px solid #0b9bd8;\n  background-color: #fff !important;\n  color: #0b9bd8;\n}\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #0b9bd8 !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.panel-footer {\n  background-color: white !important;\n}\n\n.panel-footer h3 {\n  font-size: 32px;\n}\n\n.panel-footer h4 {\n  color: #aaa;\n  font-size: 14px;\n}\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #0b9bd8;\n  color: #fff;\n}\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #fff;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif;\n  box-shadow: 0px 1px 0px 1px #eee;\n}\n\n.navbar li a, .navbar .navbar-brand {\n  color: #222 !important;\n}\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #169fda !important;\n  background-color: #fff !important;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important;\n}\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #0b9bd8;\n}\n\n.slideanim {\n  visibility: hidden;\n}\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible;\n}\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n  }\n}\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0;\n  }\n\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Fib3V0LXVzL0Y6XFxiYWdlZVxcaW52ZW50b3J5LW1uZ3RcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFxhYm91dC11c1xcYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFBd0Isb0NBQUE7RUFDeEIsV0FBQTtFQUFhLHNCQUFBO0VBQ2IsWUFBQTtBQ01KOztBREpFO0VBQ0Usc0JBQUE7QUNPSjs7QURMRTtFQUNFO0lBQ0UsYUFBQTtJQUFlLHdFQUFBO0VDU25CO0FBQ0Y7O0FEUEU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FDU0o7O0FEUEU7RUFDRSxrQkFBQTtBQ1VKOztBRFJFO0VBQ0UseUJBQUE7QUNXSjs7QURURTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDWUo7O0FEVkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNhSjs7QURYRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDZUo7O0FEYkU7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUNnQko7O0FEZEU7RUFDRSxxQkFBQTtBQ2lCSjs7QURmRTtFQUNFLHlCQUFBO0FDa0JKOztBRGhCRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDbUJKOztBRGpCRTtFQUNFLGtCQUFBO0FDb0JKOztBRGxCRTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDcUJKOztBRG5CRTtFQUNFLDJDQUFBO0FDc0JKOztBRHBCRTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDdUJKOztBRHJCRTtFQUNFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ3dCSjs7QUR0QkU7RUFDRSxrQ0FBQTtBQ3lCSjs7QUR2QkU7RUFDRSxlQUFBO0FDMEJKOztBRHhCRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDMkJKOztBRHpCRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUM0Qko7O0FEMUJFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0FDNkJKOztBRDNCRTtFQUNFLHNCQUFBO0FDOEJKOztBRDNCRTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUM4Qko7O0FENUJFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQytCSjs7QUQ3QkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDZ0NKOztBRDlCRTtFQUFZLGtCQUFBO0FDa0NkOztBRGpDRTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNvQ0o7O0FEbENFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ3FDSjtFRG5DRTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtZQUFBLHlCQUFBO0VDcUNKO0FBQ0Y7O0FEbkNFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7RUNxQ0o7RURuQ0U7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUNxQ0o7QUFDRjs7QURuQ0U7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtFQ3FDSjs7RURuQ0U7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUNzQ0o7QUFDRjs7QURwQ0U7RUFDRTtJQUNFLGdCQUFBO0VDc0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQ6IDQwMCAxNXB4IExhdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcclxuICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfSAgXHJcbiAgLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDkwJSk7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg5MCUpOyAvKiBtYWtlIGFsbCBwaG90b3MgYmxhY2sgYW5kIHdoaXRlICovIFxyXG4gICAgd2lkdGg6IDEwMCU7IC8qIFNldCB3aWR0aCB0byAxMDAlICovXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jYXB0aW9uIGgzIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIHRoZSBjYXJvdXNlbCB0ZXh0IHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwIHBpeGVscyB3aWRlICovXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOWJkODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTAwcHggMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcclxuICB9XHJcbiAgLmJnLWdyZXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICB9XHJcbiAgLmxvZ28tc21hbGwxIHtcclxuICAgIGNvbG9yOiAjMGI5YmQ4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICAubG9nbyB7XHJcbiAgICBjb2xvcjogIzBiOWJkODtcclxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XHJcbiAgfVxyXG4gIC50aHVtYm5haWwge1xyXG4gICAgcGFkZGluZzogMCAwIDE1cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC50aHVtYm5haWwgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmNhcm91c2VsLWNvbnRyb2wucmlnaHQsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMGI5YmQ4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwYjliZDg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4O1xyXG4gIH1cclxuICAuaXRlbSBoNCB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBtYXJnaW46IDcwcHggMDtcclxuICB9XHJcbiAgLml0ZW0gc3BhbiB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG4gIC5wYW5lbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGI5YmQ4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6MCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xyXG4gIH1cclxuICAucGFuZWw6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA0MHB4IHJnYmEoMCwwLDAsIC4yKTtcclxuICB9XHJcbiAgLnBhbmVsLWZvb3RlciAuYnRuOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYjliZDg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzBiOWJkODtcclxuICB9XHJcbiAgLnBhbmVsLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjliZDggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgLnBhbmVsLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGFuZWwtZm9vdGVyIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbiAgLnBhbmVsLWZvb3RlciBoNCB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLnBhbmVsLWZvb3RlciAuYnRuIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOWJkODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAubmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDMgIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDBweCAxcHggI2VlZTtcclxuICB9XHJcbiAgLm5hdmJhciBsaSBhLCAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcclxuICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICB9XHJcbiAgLm5hdmJhci1uYXYgbGkgYTpob3ZlciwgLm5hdmJhci1uYXYgbGkuYWN0aXZlIGEge1xyXG4gICAgY29sb3I6ICMxNjlmZGEgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBmb290ZXIgLmdseXBoaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwYjliZDg7XHJcbiAgfVxyXG4gIC5zbGlkZWFuaW0ge3Zpc2liaWxpdHk6aGlkZGVuO31cclxuICAuc2xpZGUge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBzbGlkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xyXG4gICAgfSBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xyXG4gICAgfSBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29sLXNtLTQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1sZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICBmb250LXNpemU6IDE1MHB4O1xyXG4gICAgfVxyXG4gIH0iLCJib2R5IHtcbiAgZm9udDogNDAwIDE1cHggTGF0bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNhcm91c2VsLWlubmVyIGltZyB7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoOTAlKTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKTtcbiAgLyogbWFrZSBhbGwgcGhvdG9zIGJsYWNrIGFuZCB3aGl0ZSAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogU2V0IHdpZHRoIHRvIDEwMCUgKi9cbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiBoMyB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvKiBIaWRlIHRoZSBjYXJvdXNlbCB0ZXh0IHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwIHBpeGVscyB3aWRlICovXG4gIH1cbn1cbi5qdW1ib3Ryb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTAwcHggMjVweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiA2MHB4IDUwcHg7XG59XG5cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cblxuLmxvZ28tc21hbGwxIHtcbiAgY29sb3I6ICMwYjliZDg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmxvZ28ge1xuICBjb2xvcjogIzBiOWJkODtcbiAgZm9udC1zaXplOiAyMDBweDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC5yaWdodCwgLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGNvbG9yOiAjMGI5YmQ4O1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJvcmRlci1jb2xvcjogIzBiOWJkODtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiOWJkODtcbn1cblxuLml0ZW0gaDQge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogNzBweCAwO1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ucGFuZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGI5YmQ4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbn1cblxuLnBhbmVsOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNXB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBhbmVsLWZvb3RlciAuYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBiOWJkODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzBiOWJkODtcbn1cblxuLnBhbmVsLWhlYWRpbmcge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG59XG5cbi5wYW5lbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucGFuZWwtZm9vdGVyIGgzIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4ucGFuZWwtZm9vdGVyIGg0IHtcbiAgY29sb3I6ICNhYWE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBhbmVsLWZvb3RlciAuYnRuIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjliZDg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogOTk5OTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDMgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IDFweCAjZWVlO1xufVxuXG4ubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICMxNjlmZGEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5mb290ZXIgLmdseXBoaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMwYjliZDg7XG59XG5cbi5zbGlkZWFuaW0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zbGlkZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1zbS00IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG4gIH1cblxuICAuYnRuLWxnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubG9nbyB7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/about-us/about-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/about-us/about-us.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.scss */ "./src/app/component/about-us/about-us.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutUsComponent);



/***/ }),

/***/ "./src/app/component/about-us/about-us.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/about-us/about-us.module.ts ***!
  \*******************************************************/
/*! exports provided: AboutUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsModule", function() { return AboutUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/component/about-us/about-us-routing.module.ts");
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us.component */ "./src/app/component/about-us/about-us.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.module */ "./src/app/component/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/component/footer/footer.module.ts");







let AboutUsModule = class AboutUsModule {
};
AboutUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutUsRoutingModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"]
        ]
    })
], AboutUsModule);



/***/ })

}]);
//# sourceMappingURL=component-about-us-about-us-module-es2015.js.map