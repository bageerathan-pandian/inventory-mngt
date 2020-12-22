function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-about-us-about-us-module~component-contact-us-contact-us-module~component-email-ve~3b80dfe2"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    <footer class=\"container-fluid text-center\">\r\n            <a href=\"#myPage\" title=\"To Top\">\r\n              <span class=\"glyphicon glyphicon-chevron-up\"></span>\r\n            </a>\r\n            <p>2019@ Ownwaysoft.com <a href=\"http://www.ownwaysoft.com\" title=\"Visit Ownwaysoft\">www.ownwaysoft.com</a></p>\r\n    </footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n            <div class=\"container\">\r\n              <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                  <span class=\"icon-bar\"></span>\r\n                  <span class=\"icon-bar\"></span>\r\n                  <span class=\"icon-bar\"></span>                        \r\n                </button>\r\n                <div class=\"navbar-brand\"  style=\"text-align: center;position: relative;height: 80px;\">\r\n                  <a  (click)=\"goTo('/')\">\r\n                    <img src=\"Card\" src=\"./assets/img/comp_logo.png\" style=\"    max-height: 100%;  max-width: 100%;   left: 0;   right: 0;    top: 0;     bottom: 0;   margin: auto;\">\r\n                  </a>\r\n              </div>\r\n              </div>\r\n              <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n                  \r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li><a (click)=\"goTo('/register');titleService.setDocTitle('Ownwaysoft - Register')\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n                  <li><a (click)=\"goTo('/login');titleService.setDocTitle('Ownwaysoft - Login')\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n                </ul>\r\n\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                        <!-- <li><a href=\"#about\" >ABOUT</a></li>\r\n                        <li><a href=\"#services\">SERVICES</a></li>\r\n                        <li><a href=\"#portfolio\">PORTFOLIO</a></li>\r\n                        <li><a href=\"#pricing\">PRICING</a></li>\r\n                        <li><a href=\"#contact\">CONTACT</a></li> -->\r\n                        <li><a (click)=\"goTo('/about-us');titleService.setDocTitle('Ownwaysoft - About Us')\" routerLinkActive=\"active\">ABOUT US</a></li>\r\n                        <li><a (click)=\"goTo('/services');titleService.setDocTitle('Ownwaysoft - Services')\" routerLinkActive=\"active\">SERVICES</a></li>\r\n                        <!-- <li><a (click)=\"goTo('/#portfolio')\" routerLinkActive=\"active\">PORTFOLIO</a></li> -->\r\n                        <li><a (click)=\"goTo('/pricing');titleService.setDocTitle('Ownwaysoft - Pricing')\" routerLinkActive=\"active\">PRICING</a></li>\r\n                        <li><a (click)=\"goTo('/contact-us');titleService.setDocTitle('Ownwaysoft - Contact Us')\" routerLinkActive=\"active\">CONTACT US</a></li>\r\n                </ul>\r\n                \r\n              </div>\r\n            </div>\r\n          </nav> \r\n  \r\n             ";
    /***/
  },

  /***/
  "./src/app/component/footer/footer.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/component/footer/footer.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181;\n}\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.carousel-inner img {\n  -webkit-filter: grayscale(90%);\n  filter: grayscale(90%);\n  /* make all photos black and white */\n  width: 100%;\n  /* Set width to 100% */\n  margin: auto;\n}\n\n.carousel-caption h3 {\n  color: #fff !important;\n}\n\n@media (max-width: 600px) {\n  .carousel-caption {\n    display: none;\n    /* Hide the carousel text when the screen is less than 600 pixels wide */\n  }\n}\n\n.jumbotron {\n  background-color: #f4511e;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif;\n}\n\n.container-fluid {\n  padding: 60px 50px;\n}\n\n.bg-grey {\n  background-color: #f6f6f6;\n}\n\n.logo-small {\n  color: #f4511e;\n  font-size: 50px;\n}\n\n.logo {\n  color: #f4511e;\n  font-size: 200px;\n}\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: none;\n  border-radius: 0;\n}\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #f4511e;\n}\n\n.carousel-indicators li {\n  border-color: #f4511e;\n}\n\n.carousel-indicators li.active {\n  background-color: #f4511e;\n}\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0;\n}\n\n.item span {\n  font-style: normal;\n}\n\n.panel {\n  border: 1px solid #f4511e;\n  border-radius: 0 !important;\n  -webkit-transition: box-shadow 0.5s;\n  transition: box-shadow 0.5s;\n}\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2);\n}\n\n.panel-footer .btn:hover {\n  border: 1px solid #f4511e;\n  background-color: #fff !important;\n  color: #f4511e;\n}\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #f4511e !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.panel-footer {\n  background-color: white !important;\n}\n\n.panel-footer h3 {\n  font-size: 32px;\n}\n\n.panel-footer h4 {\n  color: #aaa;\n  font-size: 14px;\n}\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #f4511e;\n  color: #fff;\n}\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #fff;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif;\n}\n\n.navbar li a, .navbar .navbar-brand {\n  color: #222 !important;\n}\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #169fda !important;\n  background-color: #fff !important;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important;\n}\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #f4511e;\n}\n\n.slideanim {\n  visibility: hidden;\n}\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible;\n}\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n  }\n}\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0;\n  }\n\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Zvb3Rlci9GOlxcYmFnZWVcXGludmVudG9yeS1tbmd0XFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUF3QixvQ0FBQTtFQUN4QixXQUFBO0VBQWEsc0JBQUE7RUFDYixZQUFBO0FDTUo7O0FESkU7RUFDRSxzQkFBQTtBQ09KOztBRExFO0VBQ0U7SUFDRSxhQUFBO0lBQWUsd0VBQUE7RUNTbkI7QUFDRjs7QURQRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUNTSjs7QURQRTtFQUNFLGtCQUFBO0FDVUo7O0FEUkU7RUFDRSx5QkFBQTtBQ1dKOztBRFRFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNZSjs7QURWRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNjSjs7QURaRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNlSjs7QURiRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQ2dCSjs7QURkRTtFQUNFLHFCQUFBO0FDaUJKOztBRGZFO0VBQ0UseUJBQUE7QUNrQko7O0FEaEJFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNtQko7O0FEakJFO0VBQ0Usa0JBQUE7QUNvQko7O0FEbEJFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNxQko7O0FEbkJFO0VBQ0UsMkNBQUE7QUNzQko7O0FEcEJFO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUN1Qko7O0FEckJFO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDd0JKOztBRHRCRTtFQUNFLGtDQUFBO0FDeUJKOztBRHZCRTtFQUNFLGVBQUE7QUMwQko7O0FEeEJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUMyQko7O0FEekJFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQzRCSjs7QUQxQkU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDNkJKOztBRDNCRTtFQUNFLHNCQUFBO0FDOEJKOztBRDNCRTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUM4Qko7O0FENUJFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQytCSjs7QUQ3QkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDZ0NKOztBRDlCRTtFQUFZLGtCQUFBO0FDa0NkOztBRGpDRTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNvQ0o7O0FEbENFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ3FDSjtFRG5DRTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtZQUFBLHlCQUFBO0VDcUNKO0FBQ0Y7O0FEbkNFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7RUNxQ0o7RURuQ0U7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUNxQ0o7QUFDRjs7QURuQ0U7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtFQ3FDSjs7RURuQ0U7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUNzQ0o7QUFDRjs7QURwQ0U7RUFDRTtJQUNFLGdCQUFBO0VDc0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udDogNDAwIDE1cHggTGF0bywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xyXG4gICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9ICBcclxuICAuY2Fyb3VzZWwtaW5uZXIgaW1nIHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoOTAlKTtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDkwJSk7IC8qIG1ha2UgYWxsIHBob3RvcyBibGFjayBhbmQgd2hpdGUgKi8gXHJcbiAgICB3aWR0aDogMTAwJTsgLyogU2V0IHdpZHRoIHRvIDEwMCUgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmNhcm91c2VsLWNhcHRpb24gaDMge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIGNhcm91c2VsIHRleHQgd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2MDAgcGl4ZWxzIHdpZGUgKi9cclxuICAgIH1cclxuICB9XHJcbiAgLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gIH1cclxuICAuYmctZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIH1cclxuICAubG9nby1zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Y0NTExZTtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbiAgLmxvZ28ge1xyXG4gICAgY29sb3I6ICNmNDUxMWU7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gIH1cclxuICAudGh1bWJuYWlsIHtcclxuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICAudGh1bWJuYWlsIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0LCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBjb2xvcjogI2Y0NTExZTtcclxuICB9XHJcbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ1MTFlO1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZTtcclxuICB9XHJcbiAgLml0ZW0gaDQge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbWFyZ2luOiA3MHB4IDA7XHJcbiAgfVxyXG4gIC5pdGVtIHNwYW4ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuICAucGFuZWwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y0NTExZTsgXHJcbiAgICBib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxuICB9XHJcbiAgLnBhbmVsOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDVweCAwcHggNDBweCByZ2JhKDAsMCwwLCAuMik7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIgLmJ0bjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjQ1MTFlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmNDUxMWU7XHJcbiAgfVxyXG4gIC5wYW5lbC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBhbmVsLWZvb3RlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIgaDQge1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIgLmJ0biB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLm5hdmJhciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZzogMzBweCAyMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLW5hdiBsaSBhOmhvdmVyLCAubmF2YmFyLW5hdiBsaS5hY3RpdmUgYSB7XHJcbiAgICBjb2xvcjogIzE2OWZkYSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGZvb3RlciAuZ2x5cGhpY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogI2Y0NTExZTtcclxuICB9XHJcbiAgLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxyXG4gIC5zbGlkZSB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XHJcbiAgICB9IFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XHJcbiAgICB9IFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb2wtc20tNCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICB9XHJcbiAgICAuYnRuLWxnIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XHJcbiAgICB9XHJcbiAgfSIsImJvZHkge1xuICBmb250OiA0MDAgMTVweCBMYXRvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBjb2xvcjogIzgxODE4MTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIgaW1nIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSg5MCUpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg5MCUpO1xuICAvKiBtYWtlIGFsbCBwaG90b3MgYmxhY2sgYW5kIHdoaXRlICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBTZXQgd2lkdGggdG8gMTAwJSAqL1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIGgzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIC8qIEhpZGUgdGhlIGNhcm91c2VsIHRleHQgd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2MDAgcGl4ZWxzIHdpZGUgKi9cbiAgfVxufVxuLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMDBweCAyNXB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDYwcHggNTBweDtcbn1cblxuLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufVxuXG4ubG9nby1zbWFsbCB7XG4gIGNvbG9yOiAjZjQ1MTFlO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5sb2dvIHtcbiAgY29sb3I6ICNmNDUxMWU7XG4gIGZvbnQtc2l6ZTogMjAwcHg7XG59XG5cbi50aHVtYm5haWwge1xuICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi50aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBjb2xvcjogI2Y0NTExZTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBib3JkZXItY29sb3I6ICNmNDUxMWU7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG59XG5cbi5pdGVtIGg0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDcwcHggMDtcbn1cblxuLml0ZW0gc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLnBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0NTExZTtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XG59XG5cbi5wYW5lbDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDVweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wYW5lbC1mb290ZXIgLmJ0bjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNDUxMWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmNDUxMWU7XG59XG5cbi5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuXG4ucGFuZWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnBhbmVsLWZvb3RlciBoMyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLnBhbmVsLWZvb3RlciBoNCB7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wYW5lbC1mb290ZXIgLmJ0biB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xufVxuXG4ubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICMxNjlmZGEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5mb290ZXIgLmdseXBoaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmNDUxMWU7XG59XG5cbi5zbGlkZWFuaW0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zbGlkZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1zbS00IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG4gIH1cblxuICAuYnRuLWxnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubG9nbyB7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/footer/footer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/footer/footer.component.ts ***!
    \******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/component/footer/footer.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/component/footer/footer.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/component/footer/footer.module.ts ***!
    \***************************************************/

  /*! exports provided: FooterModule */

  /***/
  function srcAppComponentFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
      return FooterModule;
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


    var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer.component */
    "./src/app/component/footer/footer.component.ts");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
    })], FooterModule);
    /***/
  },

  /***/
  "./src/app/component/header/header.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/component/header/header.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181;\n}\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.carousel-inner img {\n  -webkit-filter: grayscale(90%);\n  filter: grayscale(90%);\n  /* make all photos black and white */\n  width: 100%;\n  /* Set width to 100% */\n  margin: auto;\n}\n\n.carousel-caption h3 {\n  color: #fff !important;\n}\n\n@media (max-width: 600px) {\n  .carousel-caption {\n    display: none;\n    /* Hide the carousel text when the screen is less than 600 pixels wide */\n  }\n}\n\n.jumbotron {\n  background-color: #0b9bd8;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif;\n}\n\n.container-fluid {\n  padding: 60px 50px;\n}\n\n.bg-grey {\n  background-color: #f6f6f6;\n}\n\n.logo-small1 {\n  color: #0b9bd8;\n  font-size: 50px;\n}\n\n.logo {\n  color: #0b9bd8;\n  font-size: 200px;\n}\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: none;\n  border-radius: 0;\n}\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #0b9bd8;\n}\n\n.carousel-indicators li {\n  border-color: #0b9bd8;\n}\n\n.carousel-indicators li.active {\n  background-color: #0b9bd8;\n}\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0;\n}\n\n.item span {\n  font-style: normal;\n}\n\n.panel {\n  border: 1px solid #0b9bd8;\n  border-radius: 0 !important;\n  -webkit-transition: box-shadow 0.5s;\n  transition: box-shadow 0.5s;\n}\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2);\n}\n\n.panel-footer .btn:hover {\n  border: 1px solid #0b9bd8;\n  background-color: #fff !important;\n  color: #0b9bd8;\n}\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #0b9bd8 !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.panel-footer {\n  background-color: white !important;\n}\n\n.panel-footer h3 {\n  font-size: 32px;\n}\n\n.panel-footer h4 {\n  color: #aaa;\n  font-size: 14px;\n}\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #0b9bd8;\n  color: #fff;\n}\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #fff;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif;\n  box-shadow: 0px 1px 0px 1px #eee;\n}\n\n.navbar li a, .navbar .navbar-brand {\n  color: #222 !important;\n}\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #169fda !important;\n  background-color: #fff !important;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important;\n}\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #0b9bd8;\n}\n\n.slideanim {\n  visibility: hidden;\n}\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible;\n}\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n  }\n}\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0;\n  }\n\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9GOlxcYmFnZWVcXGludmVudG9yeS1tbmd0XFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUF3QixvQ0FBQTtFQUN4QixXQUFBO0VBQWEsc0JBQUE7RUFDYixZQUFBO0FDTUo7O0FESkU7RUFDRSxzQkFBQTtBQ09KOztBRExFO0VBQ0U7SUFDRSxhQUFBO0lBQWUsd0VBQUE7RUNTbkI7QUFDRjs7QURQRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUNTSjs7QURQRTtFQUNFLGtCQUFBO0FDVUo7O0FEUkU7RUFDRSx5QkFBQTtBQ1dKOztBRFRFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNZSjs7QURWRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNjSjs7QURaRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNlSjs7QURiRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQ2dCSjs7QURkRTtFQUNFLHFCQUFBO0FDaUJKOztBRGZFO0VBQ0UseUJBQUE7QUNrQko7O0FEaEJFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNtQko7O0FEakJFO0VBQ0Usa0JBQUE7QUNvQko7O0FEbEJFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNxQko7O0FEbkJFO0VBQ0UsMkNBQUE7QUNzQko7O0FEcEJFO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUN1Qko7O0FEckJFO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDd0JKOztBRHRCRTtFQUNFLGtDQUFBO0FDeUJKOztBRHZCRTtFQUNFLGVBQUE7QUMwQko7O0FEeEJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUMyQko7O0FEekJFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQzRCSjs7QUQxQkU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7QUM2Qko7O0FEM0JFO0VBQ0Usc0JBQUE7QUM4Qko7O0FEM0JFO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQzhCSjs7QUQ1QkU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FDK0JKOztBRDdCRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNnQ0o7O0FEOUJFO0VBQVksa0JBQUE7QUNrQ2Q7O0FEakNFO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ29DSjs7QURsQ0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VDcUNKO0VEbkNFO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO1lBQUEseUJBQUE7RUNxQ0o7QUFDRjs7QURuQ0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtFQ3FDSjtFRG5DRTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtFQ3FDSjtBQUNGOztBRG5DRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0VDcUNKOztFRG5DRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQ3NDSjtBQUNGOztBRHBDRTtFQUNFO0lBQ0UsZ0JBQUE7RUNzQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250OiA0MDAgMTVweCBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XHJcbiAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH0gIFxyXG4gIC5jYXJvdXNlbC1pbm5lciBpbWcge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSg5MCUpO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKTsgLyogbWFrZSBhbGwgcGhvdG9zIGJsYWNrIGFuZCB3aGl0ZSAqLyBcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBTZXQgd2lkdGggdG8gMTAwJSAqL1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtY2FwdGlvbiBoMyB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgY2Fyb3VzZWwgdGV4dCB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMCBwaXhlbHMgd2lkZSAqL1xyXG4gICAgfVxyXG4gIH1cclxuICAuanVtYm90cm9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjliZDg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHg7XHJcbiAgfVxyXG4gIC5iZy1ncmV5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgfVxyXG4gIC5sb2dvLXNtYWxsMSB7XHJcbiAgICBjb2xvcjogIzBiOWJkODtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbiAgLmxvZ28ge1xyXG4gICAgY29sb3I6ICMwYjliZDg7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gIH1cclxuICAudGh1bWJuYWlsIHtcclxuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICAudGh1bWJuYWlsIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0LCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBiOWJkODtcclxuICB9XHJcbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGI5YmQ4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOWJkODtcclxuICB9XHJcbiAgLml0ZW0gaDQge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbWFyZ2luOiA3MHB4IDA7XHJcbiAgfVxyXG4gIC5pdGVtIHNwYW4ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuICAucGFuZWwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBiOWJkODsgXHJcbiAgICBib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxuICB9XHJcbiAgLnBhbmVsOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDVweCAwcHggNDBweCByZ2JhKDAsMCwwLCAuMik7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIgLmJ0bjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGI5YmQ4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwYjliZDg7XHJcbiAgfVxyXG4gIC5wYW5lbC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBhbmVsLWZvb3RlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIgaDQge1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1mb290ZXIgLmJ0biB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjliZDg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLm5hdmJhciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMXB4ICNlZWU7XHJcbiAgfVxyXG4gIC5uYXZiYXIgbGkgYSwgLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcclxuICAgIGNvbG9yOiAjMTY5ZmRhICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgZm9vdGVyIC5nbHlwaGljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjMGI5YmQ4O1xyXG4gIH1cclxuICAuc2xpZGVhbmltIHt2aXNpYmlsaXR5OmhpZGRlbjt9XHJcbiAgLnNsaWRlIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc2xpZGUge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcclxuICAgIH0gXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcclxuICAgIH0gXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbC1zbS00IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgIH1cclxuICAgIC5idG4tbGcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIH1cclxuICB9IiwiYm9keSB7XG4gIGZvbnQ6IDQwMCAxNXB4IExhdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jYXJvdXNlbC1pbm5lciBpbWcge1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDkwJSk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDkwJSk7XG4gIC8qIG1ha2UgYWxsIHBob3RvcyBibGFjayBhbmQgd2hpdGUgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIFNldCB3aWR0aCB0byAxMDAlICovXG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcm91c2VsLWNhcHRpb24gaDMge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogSGlkZSB0aGUgY2Fyb3VzZWwgdGV4dCB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMCBwaXhlbHMgd2lkZSAqL1xuICB9XG59XG4uanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiOWJkODtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwMHB4IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogNjBweCA1MHB4O1xufVxuXG4uYmctZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG59XG5cbi5sb2dvLXNtYWxsMSB7XG4gIGNvbG9yOiAjMGI5YmQ4O1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5sb2dvIHtcbiAgY29sb3I6ICMwYjliZDg7XG4gIGZvbnQtc2l6ZTogMjAwcHg7XG59XG5cbi50aHVtYm5haWwge1xuICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi50aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBjb2xvcjogIzBiOWJkODtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBib3JkZXItY29sb3I6ICMwYjliZDg7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjliZDg7XG59XG5cbi5pdGVtIGg0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDcwcHggMDtcbn1cblxuLml0ZW0gc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLnBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBiOWJkODtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XG59XG5cbi5wYW5lbDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDVweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wYW5lbC1mb290ZXIgLmJ0bjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYjliZDg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwYjliZDg7XG59XG5cbi5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiOWJkOCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuXG4ucGFuZWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnBhbmVsLWZvb3RlciBoMyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLnBhbmVsLWZvb3RlciBoNCB7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wYW5lbC1mb290ZXIgLmJ0biB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5YmQ4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDBweCAxcHggI2VlZTtcbn1cblxuLm5hdmJhciBsaSBhLCAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogIzIyMiAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLW5hdiBsaSBhOmhvdmVyLCAubmF2YmFyLW5hdiBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjMTY5ZmRhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuZm9vdGVyIC5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjMGI5YmQ4O1xufVxuXG4uc2xpZGVhbmltIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2xpZGUge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtc20tNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjVweCAwO1xuICB9XG5cbiAgLmJ0bi1sZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/header/header.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/header/header.component.ts ***!
    \******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var src_app_shared_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/title.service */
    "./src/app/shared/title.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, titleService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.titleService = titleService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goTo",
        value: function goTo(page) {
          this.router.navigate([page]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/component/header/header.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/component/header/header.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/component/header/header.module.ts ***!
    \***************************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppComponentHeaderHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
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


    var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/component/header/header.component.ts");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
    })], HeaderModule);
    /***/
  }
}]);
//# sourceMappingURL=default~component-about-us-about-us-module~component-contact-us-contact-us-module~component-email-ve~3b80dfe2-es5.js.map