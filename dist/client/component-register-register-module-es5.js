function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-register-register-module"], {
  /***/
  "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js ***!
    \***************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNgxGooglePlacesAutocompleteBundlesNgxGooglePlacesAutocompleteUmdJs(module, exports, __webpack_require__) {
    (function (global, factory) {
      true ? factory(exports, __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js")) : undefined;
    })(this, function (exports, _angular_core) {
      'use strict';

      var Options = function () {
        /**
         * @param {?=} opt
         */
        function Options(opt) {
          if (!opt) return;
          Object.assign(this, opt);
        }

        return Options;
      }();

      var GooglePlaceDirective = function () {
        /**
         * @param {?} el
         * @param {?} ngZone
         */
        function GooglePlaceDirective(el, ngZone) {
          this.el = el;
          this.ngZone = ngZone;
          this.onAddressChange = new _angular_core.EventEmitter();
        }
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.ngAfterViewInit = function () {
          if (!this.options) this.options = new Options();
          this.initialize();
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.isGoogleLibExists = function () {
          return !(!google || !google.maps || !google.maps.places);
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.initialize = function () {
          var _this = this;

          if (!this.isGoogleLibExists()) throw new Error("Google maps library can not be found");
          this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
          if (!this.autocomplete) throw new Error("Autocomplete is not initialized");

          if (!this.autocomplete.addListener != null) {
            this.eventListener = this.autocomplete.addListener('place_changed', function () {
              _this.handleChangeEvent();
            });
          }

          this.el.nativeElement.addEventListener('keydown', function (event) {
            if (!event.key) {
              return;
            }

            var
            /** @type {?} */
            key = event.key.toLowerCase();

            if (key == 'enter' && event.target === _this.el.nativeElement) {
              event.preventDefault();
              event.stopPropagation();
            }
          }); // according to https://gist.github.com/schoenobates/ef578a02ac8ab6726487

          if (window && window.navigator && window.navigator.userAgent && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
            setTimeout(function () {
              var
              /** @type {?} */
              containers = document.getElementsByClassName('pac-container');

              if (containers) {
                var
                /** @type {?} */
                arr = Array.from(containers);

                if (arr) {
                  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var container = arr_1[_i];
                    if (!container) continue;
                    container.addEventListener('touchend', function (e) {
                      e.stopImmediatePropagation();
                    });
                  }
                }
              }
            }, 500);
          }
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.reset = function () {
          this.autocomplete.setComponentRestrictions(this.options.componentRestrictions);
          this.autocomplete.setTypes(this.options.types);
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.handleChangeEvent = function () {
          var _this = this;

          this.ngZone.run(function () {
            _this.place = _this.autocomplete.getPlace();

            if (_this.place && _this.place.place_id) {
              _this.onAddressChange.emit(_this.place);
            }
          });
        };

        GooglePlaceDirective.decorators = [{
          type: _angular_core.Directive,
          args: [{
            selector: '[ngx-google-places-autocomplete]',
            exportAs: 'ngx-places'
          }]
        }];
        /**
         * @nocollapse
         */

        GooglePlaceDirective.ctorParameters = function () {
          return [{
            type: _angular_core.ElementRef
          }, {
            type: _angular_core.NgZone
          }];
        };

        GooglePlaceDirective.propDecorators = {
          'options': [{
            type: _angular_core.Input,
            args: ['options']
          }],
          'onAddressChange': [{
            type: _angular_core.Output
          }]
        };
        return GooglePlaceDirective;
      }();

      var GooglePlaceModule = function () {
        function GooglePlaceModule() {}

        GooglePlaceModule.decorators = [{
          type: _angular_core.NgModule,
          args: [{
            declarations: [GooglePlaceDirective],
            exports: [GooglePlaceDirective]
          }]
        }];
        /**
         * @nocollapse
         */

        GooglePlaceModule.ctorParameters = function () {
          return [];
        };

        return GooglePlaceModule;
      }();

      exports.GooglePlaceModule = GooglePlaceModule;
      exports.GooglePlaceDirective = GooglePlaceDirective;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
    /***/

  },

  /***/
  "./node_modules/primeng/captcha.js":
  /*!*****************************************!*\
    !*** ./node_modules/primeng/captcha.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengCaptchaJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/captcha/captcha */
    "./node_modules/primeng/components/captcha/captcha.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/components/captcha/captcha.js":
  /*!************************************************************!*\
    !*** ./node_modules/primeng/components/captcha/captcha.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsCaptchaCaptchaJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var Captcha =
    /** @class */
    function () {
      function Captcha(el, _zone) {
        this.el = el;
        this._zone = _zone;
        this.siteKey = null;
        this.theme = 'light';
        this.type = 'image';
        this.size = 'normal';
        this.tabindex = 0;
        this.language = null;
        this.initCallback = "initRecaptcha";
        this.onResponse = new core_1.EventEmitter();
        this.onExpire = new core_1.EventEmitter();
        this._instance = null;
      }

      Captcha.prototype.ngAfterViewInit = function () {
        var _this = this;

        if (window.grecaptcha) {
          if (!window.grecaptcha.render) {
            setTimeout(function () {
              _this.init();
            }, 100);
          } else {
            this.init();
          }
        } else {
          window[this.initCallback] = function () {
            _this.init();
          };
        }
      };

      Captcha.prototype.init = function () {
        var _this = this;

        this._instance = window.grecaptcha.render(this.el.nativeElement.children[0], {
          'sitekey': this.siteKey,
          'theme': this.theme,
          'type': this.type,
          'size': this.size,
          'tabindex': this.tabindex,
          'hl': this.language,
          'callback': function callback(response) {
            _this._zone.run(function () {
              return _this.recaptchaCallback(response);
            });
          },
          'expired-callback': function expiredCallback() {
            _this._zone.run(function () {
              return _this.recaptchaExpiredCallback();
            });
          }
        });
      };

      Captcha.prototype.reset = function () {
        if (this._instance === null) return;
        window.grecaptcha.reset(this._instance);
      };

      Captcha.prototype.getResponse = function () {
        if (this._instance === null) return null;
        return window.grecaptcha.getResponse(this._instance);
      };

      Captcha.prototype.recaptchaCallback = function (response) {
        this.onResponse.emit({
          response: response
        });
      };

      Captcha.prototype.recaptchaExpiredCallback = function () {
        this.onExpire.emit();
      };

      Captcha.prototype.ngOnDestroy = function () {
        if (this._instance != null) {
          window.grecaptcha.reset(this._instance);
        }
      };

      __decorate([core_1.Input(), __metadata("design:type", String)], Captcha.prototype, "siteKey", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Captcha.prototype, "theme", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Captcha.prototype, "type", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Captcha.prototype, "size", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Captcha.prototype, "tabindex", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Captcha.prototype, "language", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Captcha.prototype, "initCallback", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Captcha.prototype, "onResponse", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Captcha.prototype, "onExpire", void 0);

      Captcha = __decorate([core_1.Component({
        selector: 'p-captcha',
        template: "<div></div>"
      }), __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone])], Captcha);
      return Captcha;
    }();

    exports.Captcha = Captcha;

    var CaptchaModule =
    /** @class */
    function () {
      function CaptchaModule() {}

      CaptchaModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [Captcha],
        declarations: [Captcha]
      })], CaptchaModule);
      return CaptchaModule;
    }();

    exports.CaptchaModule = CaptchaModule; //# sourceMappingURL=captcha.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/components/inplace/inplace.js":
  /*!************************************************************!*\
    !*** ./node_modules/primeng/components/inplace/inplace.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsInplaceInplaceJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var button_1 = __webpack_require__(
    /*! ../button/button */
    "./node_modules/primeng/components/button/button.js");

    var InplaceDisplay =
    /** @class */
    function () {
      function InplaceDisplay() {}

      InplaceDisplay = __decorate([core_1.Component({
        selector: 'p-inplaceDisplay',
        template: '<ng-content></ng-content>'
      })], InplaceDisplay);
      return InplaceDisplay;
    }();

    exports.InplaceDisplay = InplaceDisplay;

    var InplaceContent =
    /** @class */
    function () {
      function InplaceContent() {}

      InplaceContent = __decorate([core_1.Component({
        selector: 'p-inplaceContent',
        template: '<ng-content></ng-content>'
      })], InplaceContent);
      return InplaceContent;
    }();

    exports.InplaceContent = InplaceContent;

    var Inplace =
    /** @class */
    function () {
      function Inplace() {
        this.onActivate = new core_1.EventEmitter();
        this.onDeactivate = new core_1.EventEmitter();
      }

      Inplace.prototype.activate = function (event) {
        if (!this.disabled) {
          this.active = true;
          this.onActivate.emit(event);
        }
      };

      Inplace.prototype.deactivate = function (event) {
        if (!this.disabled) {
          this.active = false;
          this.hover = false;
          this.onDeactivate.emit(event);
        }
      };

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Inplace.prototype, "active", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Inplace.prototype, "closable", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Inplace.prototype, "disabled", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Inplace.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Inplace.prototype, "styleClass", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Inplace.prototype, "onActivate", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Inplace.prototype, "onDeactivate", void 0);

      Inplace = __decorate([core_1.Component({
        selector: 'p-inplace',
        template: "\n        <div [ngClass]=\"{'ui-inplace ui-widget': true, 'ui-inplace-closable': closable}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-inplace-display\" (click)=\"activate($event)\"\n                [ngClass]=\"{'ui-state-disabled':disabled}\" *ngIf=\"!active\">\n                <ng-content select=\"[pInplaceDisplay]\"></ng-content>\n            </div>\n            <div class=\"ui-inplace-content\" *ngIf=\"active\">\n                <ng-content select=\"[pInplaceContent]\"></ng-content>\n                <button type=\"button\" icon=\"pi pi-times\" pButton (click)=\"deactivate($event)\" *ngIf=\"closable\"></button>\n            </div>\n        </div>\n    "
      })], Inplace);
      return Inplace;
    }();

    exports.Inplace = Inplace;

    var InplaceModule =
    /** @class */
    function () {
      function InplaceModule() {}

      InplaceModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule, button_1.ButtonModule],
        exports: [Inplace, InplaceDisplay, InplaceContent, button_1.ButtonModule],
        declarations: [Inplace, InplaceDisplay, InplaceContent]
      })], InplaceModule);
      return InplaceModule;
    }();

    exports.InplaceModule = InplaceModule; //# sourceMappingURL=inplace.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/components/keyfilter/keyfilter.js":
  /*!****************************************************************!*\
    !*** ./node_modules/primeng/components/keyfilter/keyfilter.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsKeyfilterKeyfilterJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var domhandler_1 = __webpack_require__(
    /*! ../dom/domhandler */
    "./node_modules/primeng/components/dom/domhandler.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    exports.KEYFILTER_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function () {
        return KeyFilter;
      }),
      multi: true
    };

    var KeyFilter =
    /** @class */
    function () {
      function KeyFilter(el) {
        this.el = el;
        this.ngModelChange = new core_1.EventEmitter();
        this.isAndroid = domhandler_1.DomHandler.isAndroid();
      }

      KeyFilter_1 = KeyFilter;
      Object.defineProperty(KeyFilter.prototype, "pattern", {
        get: function get() {
          return this._pattern;
        },
        set: function set(_pattern) {
          this._pattern = _pattern;
          this.regex = KeyFilter_1.DEFAULT_MASKS[this._pattern] || this._pattern;
        },
        enumerable: true,
        configurable: true
      });

      KeyFilter.prototype.isNavKeyPress = function (e) {
        var k = e.keyCode;
        k = domhandler_1.DomHandler.getBrowser().safari ? KeyFilter_1.SAFARI_KEYS[k] || k : k;
        return k >= 33 && k <= 40 || k == KeyFilter_1.KEYS.RETURN || k == KeyFilter_1.KEYS.TAB || k == KeyFilter_1.KEYS.ESC;
      };

      ;

      KeyFilter.prototype.isSpecialKey = function (e) {
        var k = e.keyCode;
        var c = e.charCode;
        return k == 9 || k == 13 || k == 27 || k == 16 || k == 17 || k >= 18 && k <= 20 || domhandler_1.DomHandler.getBrowser().opera && !e.shiftKey && (k == 8 || k >= 33 && k <= 35 || k >= 36 && k <= 39 || k >= 44 && k <= 45);
      };

      KeyFilter.prototype.getKey = function (e) {
        var k = e.keyCode || e.charCode;
        return domhandler_1.DomHandler.getBrowser().safari ? KeyFilter_1.SAFARI_KEYS[k] || k : k;
      };

      KeyFilter.prototype.getCharCode = function (e) {
        return e.charCode || e.keyCode || e.which;
      };

      KeyFilter.prototype.findDelta = function (value, prevValue) {
        var delta = '';

        for (var i = 0; i < value.length; i++) {
          var str = value.substr(0, i) + value.substr(i + value.length - prevValue.length);
          if (str === prevValue) delta = value.substr(i, value.length - prevValue.length);
        }

        return delta;
      };

      KeyFilter.prototype.isValidChar = function (c) {
        return this.regex.test(c);
      };

      KeyFilter.prototype.isValidString = function (str) {
        for (var i = 0; i < str.length; i++) {
          if (!this.isValidChar(str.substr(i, 1))) {
            return false;
          }
        }

        return true;
      };

      KeyFilter.prototype.onInput = function (e) {
        if (this.isAndroid && !this.pValidateOnly) {
          var val = this.el.nativeElement.value;
          var lastVal = this.lastValue || '';
          var inserted = this.findDelta(val, lastVal);
          var removed = this.findDelta(lastVal, val);
          var pasted = inserted.length > 1 || !inserted && !removed;

          if (pasted) {
            if (!this.isValidString(val)) {
              this.el.nativeElement.value = lastVal;
              this.ngModelChange.emit(lastVal);
            }
          } else if (!removed) {
            if (!this.isValidChar(inserted)) {
              this.el.nativeElement.value = lastVal;
              this.ngModelChange.emit(lastVal);
            }
          }

          val = this.el.nativeElement.value;

          if (this.isValidString(val)) {
            this.lastValue = val;
          }
        }
      };

      KeyFilter.prototype.onKeyPress = function (e) {
        if (this.isAndroid || this.pValidateOnly) {
          return;
        }

        var browser = domhandler_1.DomHandler.getBrowser();

        if (e.ctrlKey || e.altKey) {
          return;
        }

        var k = this.getKey(e);

        if (k == 13) {
          return;
        }

        if (browser.mozilla && (this.isNavKeyPress(e) || k == KeyFilter_1.KEYS.BACKSPACE || k == KeyFilter_1.KEYS.DELETE && e.charCode == 0)) {
          return;
        }

        var c = this.getCharCode(e);
        var cc = String.fromCharCode(c);
        var ok = true;

        if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
          return;
        }

        ok = this.regex.test(cc);

        if (!ok) {
          e.preventDefault();
        }
      };

      KeyFilter.prototype.onPaste = function (e) {
        var clipboardData = e.clipboardData || window.clipboardData.getData('text');

        if (clipboardData) {
          var pastedText = clipboardData.getData('text');

          if (!this.regex.test(pastedText)) {
            e.preventDefault();
          }
        }
      };

      KeyFilter.prototype.validate = function (c) {
        if (this.pValidateOnly) {
          var value = this.el.nativeElement.value;

          if (value && !this.regex.test(value)) {
            return {
              validatePattern: false
            };
          }
        }
      };

      var KeyFilter_1;
      KeyFilter.DEFAULT_MASKS = {
        pint: /[\d]/,
        'int': /[\d\-]/,
        pnum: /[\d\.]/,
        money: /[\d\.\s,]/,
        num: /[\d\-\.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_\.\-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/i
      };
      KeyFilter.KEYS = {
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        BACKSPACE: 8,
        DELETE: 46
      };
      KeyFilter.SAFARI_KEYS = {
        63234: 37,
        63235: 39,
        63232: 38,
        63233: 40,
        63276: 33,
        63277: 34,
        63272: 46,
        63273: 36,
        63275: 35 // end

      };

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], KeyFilter.prototype, "pValidateOnly", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], KeyFilter.prototype, "ngModelChange", void 0);

      __decorate([core_1.Input('pKeyFilter'), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], KeyFilter.prototype, "pattern", null);

      __decorate([core_1.HostListener('input', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [KeyboardEvent]), __metadata("design:returntype", void 0)], KeyFilter.prototype, "onInput", null);

      __decorate([core_1.HostListener('keypress', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [KeyboardEvent]), __metadata("design:returntype", void 0)], KeyFilter.prototype, "onKeyPress", null);

      __decorate([core_1.HostListener('paste', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], KeyFilter.prototype, "onPaste", null);

      KeyFilter = KeyFilter_1 = __decorate([core_1.Directive({
        selector: '[pKeyFilter]',
        providers: [exports.KEYFILTER_VALIDATOR]
      }), __metadata("design:paramtypes", [core_1.ElementRef])], KeyFilter);
      return KeyFilter;
    }();

    exports.KeyFilter = KeyFilter;

    var KeyFilterModule =
    /** @class */
    function () {
      function KeyFilterModule() {}

      KeyFilterModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [KeyFilter],
        declarations: [KeyFilter]
      })], KeyFilterModule);
      return KeyFilterModule;
    }();

    exports.KeyFilterModule = KeyFilterModule; //# sourceMappingURL=keyfilter.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/components/messages/messages.js":
  /*!**************************************************************!*\
    !*** ./node_modules/primeng/components/messages/messages.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsMessagesMessagesJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = this && this.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var animations_1 = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var messageservice_1 = __webpack_require__(
    /*! ../common/messageservice */
    "./node_modules/primeng/components/common/messageservice.js");

    var Messages =
    /** @class */
    function () {
      function Messages(messageService) {
        this.messageService = messageService;
        this.closable = true;
        this.enableService = true;
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.valueChange = new core_1.EventEmitter();
      }

      Messages.prototype.ngOnInit = function () {
        var _this = this;

        if (this.messageService && this.enableService) {
          this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
            if (messages) {
              if (messages instanceof Array) {
                var filteredMessages = messages.filter(function (m) {
                  return _this.key === m.key;
                });
                _this.value = _this.value ? _this.value.concat(filteredMessages) : filteredMessages.slice();
              } else if (_this.key === messages.key) {
                _this.value = _this.value ? _this.value.concat([messages]) : [messages];
              }
            }
          });
          this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
            if (key) {
              if (_this.key === key) {
                _this.value = null;
              }
            } else {
              _this.value = null;
            }
          });
        }
      };

      Messages.prototype.hasMessages = function () {
        return this.value && this.value.length > 0;
      };

      Messages.prototype.getSeverityClass = function () {
        return this.value[0].severity;
      };

      Messages.prototype.clear = function (event) {
        this.value = [];
        this.valueChange.emit(this.value);
        event.preventDefault();
      };

      Object.defineProperty(Messages.prototype, "icon", {
        get: function get() {
          var icon = null;

          if (this.hasMessages()) {
            var msg = this.value[0];

            switch (msg.severity) {
              case 'success':
                icon = 'pi-check';
                break;

              case 'info':
                icon = 'pi-info-circle';
                break;

              case 'error':
                icon = 'pi-times';
                break;

              case 'warn':
                icon = 'pi-exclamation-triangle';
                break;

              default:
                icon = 'pi-info-circle';
                break;
            }
          }

          return icon;
        },
        enumerable: true,
        configurable: true
      });

      Messages.prototype.ngOnDestroy = function () {
        if (this.messageSubscription) {
          this.messageSubscription.unsubscribe();
        }

        if (this.clearSubscription) {
          this.clearSubscription.unsubscribe();
        }
      };

      __decorate([core_1.Input(), __metadata("design:type", Array)], Messages.prototype, "value", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Messages.prototype, "closable", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Messages.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Messages.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Messages.prototype, "enableService", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Messages.prototype, "key", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Messages.prototype, "showTransitionOptions", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Messages.prototype, "hideTransitionOptions", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Messages.prototype, "valueChange", void 0);

      Messages = __decorate([core_1.Component({
        selector: 'p-messages',
        template: "\n        <div *ngIf=\"hasMessages()\" class=\"ui-messages ui-widget ui-corner-all\"\n                    [ngClass]=\"{'ui-messages-info':(value[0].severity === 'info'),\n                    'ui-messages-warn':(value[0].severity === 'warn'),\n                    'ui-messages-error':(value[0].severity === 'error'),\n                    'ui-messages-success':(value[0].severity === 'success')}\"\n                    [ngStyle]=\"style\" [class]=\"styleClass\" [@messageAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\">\n            <a tabindex=\"0\" class=\"ui-messages-close\" (click)=\"clear($event)\" (keydown.enter)=\"clear($event)\" *ngIf=\"closable\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n            <span class=\"ui-messages-icon pi\" [ngClass]=\"icon\"></span>\n            <ul>\n                <li *ngFor=\"let msg of value\">\n                    <span *ngIf=\"msg.summary\" class=\"ui-messages-summary\" [innerHTML]=\"msg.summary\"></span>\n                    <span *ngIf=\"msg.detail\" class=\"ui-messages-detail\" [innerHTML]=\"msg.detail\"></span>\n                </li>\n            </ul>\n        </div>\n    ",
        animations: [animations_1.trigger('messageAnimation', [animations_1.state('visible', animations_1.style({
          transform: 'translateY(0)',
          opacity: 1
        })), animations_1.transition('void => *', [animations_1.style({
          transform: 'translateY(-25%)',
          opacity: 0
        }), animations_1.animate('{{showTransitionParams}}')]), animations_1.transition('* => void', [animations_1.animate('{{hideTransitionParams}}', animations_1.style({
          opacity: 0,
          transform: 'translateY(-25%)'
        }))])])]
      }), __param(0, core_1.Optional()), __metadata("design:paramtypes", [messageservice_1.MessageService])], Messages);
      return Messages;
    }();

    exports.Messages = Messages;

    var MessagesModule =
    /** @class */
    function () {
      function MessagesModule() {}

      MessagesModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [Messages],
        declarations: [Messages]
      })], MessagesModule);
      return MessagesModule;
    }();

    exports.MessagesModule = MessagesModule; //# sourceMappingURL=messages.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/components/radiobutton/radiobutton.js":
  /*!********************************************************************!*\
    !*** ./node_modules/primeng/components/radiobutton/radiobutton.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsRadiobuttonRadiobuttonJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    exports.RADIO_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return RadioButton;
      }),
      multi: true
    };

    var RadioButton =
    /** @class */
    function () {
      function RadioButton(cd) {
        this.cd = cd;
        this.onClick = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};
      }

      RadioButton.prototype.handleClick = function (event, radioButton, focus) {
        event.preventDefault();

        if (this.disabled) {
          return;
        }

        this.select(event);

        if (focus) {
          radioButton.focus();
        }
      };

      RadioButton.prototype.select = function (event) {
        if (!this.disabled) {
          this.inputViewChild.nativeElement.checked = true;
          this.checked = true;
          this.onModelChange(this.value);
          this.onClick.emit(event);
        }
      };

      RadioButton.prototype.writeValue = function (value) {
        this.checked = value == this.value;

        if (this.inputViewChild && this.inputViewChild.nativeElement) {
          this.inputViewChild.nativeElement.checked = this.checked;
        }

        this.cd.markForCheck();
      };

      RadioButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
      };

      RadioButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
      };

      RadioButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
      };

      RadioButton.prototype.onInputFocus = function (event) {
        this.focused = true;
        this.onFocus.emit(event);
      };

      RadioButton.prototype.onInputBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
        this.onBlur.emit(event);
      };

      RadioButton.prototype.onChange = function (event) {
        this.select(event);
      };

      __decorate([core_1.Input(), __metadata("design:type", Object)], RadioButton.prototype, "value", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], RadioButton.prototype, "name", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], RadioButton.prototype, "disabled", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], RadioButton.prototype, "label", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Number)], RadioButton.prototype, "tabindex", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], RadioButton.prototype, "inputId", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], RadioButton.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], RadioButton.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], RadioButton.prototype, "labelStyleClass", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], RadioButton.prototype, "onClick", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], RadioButton.prototype, "onFocus", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], RadioButton.prototype, "onBlur", void 0);

      __decorate([core_1.ViewChild('rb', {
        static: true
      }), __metadata("design:type", core_1.ElementRef)], RadioButton.prototype, "inputViewChild", void 0);

      RadioButton = __decorate([core_1.Component({
        selector: 'p-radioButton',
        template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"'ui-radiobutton ui-widget'\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #rb type=\"radio\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.value]=\"value\" [attr.tabindex]=\"tabindex\" \n                    [checked]=\"checked\" (change)=\"onChange($event)\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" [disabled]=\"disabled\">\n            </div>\n            <div (click)=\"handleClick($event, rb, true)\"\n                [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':rb.checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'pi pi-circle-on':rb.checked}\"></span>\n            </div>\n        </div>\n        <label (click)=\"select($event)\" [class]=\"labelStyleClass\"\n            [ngClass]=\"{'ui-radiobutton-label':true, 'ui-label-active':rb.checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n            *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
        providers: [exports.RADIO_VALUE_ACCESSOR]
      }), __metadata("design:paramtypes", [core_1.ChangeDetectorRef])], RadioButton);
      return RadioButton;
    }();

    exports.RadioButton = RadioButton;

    var RadioButtonModule =
    /** @class */
    function () {
      function RadioButtonModule() {}

      RadioButtonModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [RadioButton],
        declarations: [RadioButton]
      })], RadioButtonModule);
      return RadioButtonModule;
    }();

    exports.RadioButtonModule = RadioButtonModule; //# sourceMappingURL=radiobutton.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/inplace.js":
  /*!*****************************************!*\
    !*** ./node_modules/primeng/inplace.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengInplaceJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/inplace/inplace */
    "./node_modules/primeng/components/inplace/inplace.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/keyfilter.js":
  /*!*******************************************!*\
    !*** ./node_modules/primeng/keyfilter.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengKeyfilterJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/keyfilter/keyfilter */
    "./node_modules/primeng/components/keyfilter/keyfilter.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/messages.js":
  /*!******************************************!*\
    !*** ./node_modules/primeng/messages.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengMessagesJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/messages/messages */
    "./node_modules/primeng/components/messages/messages.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/radiobutton.js":
  /*!*********************************************!*\
    !*** ./node_modules/primeng/radiobutton.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengRadiobuttonJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/radiobutton/radiobutton */
    "./node_modules/primeng/components/radiobutton/radiobutton.js"));
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-header></app-header> -->\r\n\r\n<div  class=\"ui-g-12\" style=\"padding: 5% 0;background: url(./assets/img/home-bg2.jpg) no-repeat center center;\r\nbackground-size: cover;height: 100%;\">\r\n  \r\n    <div  class=\"ui-g-12 ui-md-6 ui-md-offset-3\">\r\n    <p-messages class=\"ui-g-12\" styleClass=\"loagin-wrapper\" ></p-messages>\r\n    <!-- <div class=\"ui-g-12\"  style=\"text-align: center;position: relative;height: 100px;\">\r\n        <a routerLink=\"\">\r\n          <img src=\"Card\" src=\"./assets/img/comp_logo.png\" style=\"    max-height: 100%;  max-width: 100%;   left: 0;   right: 0;    top: 0;     bottom: 0;   margin: auto;\">\r\n        </a>\r\n    </div> -->\r\n\r\n<div  class=\"register-form ui-g-12\">\r\n         \r\n   \r\n\r\n    \r\n\r\n<p-card *ngIf=\"!successRegister\" >\r\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n\r\n\r\n  <form [formGroup]=\"planForm\" *ngIf=\"activeIndex == 0\"> \r\n    <div class=\"ui-g ui-fluid\" >\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\r\n                    \r\n                    <p-card header=\"Free* / 30 days\" subheader=\"*30 days only trail\"  styleClass=\"ui-card-shadow\">\r\n                        <p-header>\r\n                                <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;float: right;margin: 10px;\"  *ngIf=\"planForm.value.plan_type == '0'\"></i>\r\n                        </p-header>\r\n                               <div>\r\n                                   <ul>\r\n                                        <li> limit of 50 product entry </li>\r\n                                        <li> No dedicated support </li>\r\n                                        <li> Limited access to advanced features </li>\r\n                                    </ul>\r\n                               </div>\r\n                            <p-footer>\r\n                                <button pButton type=\"button\" label=\"Free*\"  class=\"ui-button-secondary\" (click)=\"selectPlanType(0)\"></button>\r\n                            </p-footer>\r\n                        </p-card>\r\n                    <!-- <p-radioButton name=\"plan_type\" value=\"0\" label=\"Free Plan\" formControlName=\"plan_type\" ></p-radioButton> -->\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\r\n                \r\n                    <p-card header=\"Paid\" subheader=\"One time payment\"  styleClass=\"ui-card-shadow\">\r\n                            <p-header>\r\n                                    <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;float: right;   margin: 10px;\"  *ngIf=\"planForm.value.plan_type == '1'\"></i>\r\n                                </p-header>\r\n                            <div>\r\n                                    <ul>\r\n                                        <li> Unlimited product entry</li>\r\n                                        <li> Long time support </li>\r\n                                        <li> One time payment </li>\r\n                                     </ul>\r\n                                </div>\r\n                                   <p-footer>\r\n                                <button pButton type=\"button\" label=\"Rs.14,999\"  style=\"margin-right: .25em\" (click)=\"selectPlanType(1)\"></button>\r\n                            </p-footer>\r\n                        </p-card>\r\n                <!-- <p-radioButton name=\"plan_type\" value=\"1\" label=\"Premium Plan\" formControlName=\"plan_type\" ></p-radioButton> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button type=\"button\" pButton  icon=\"pi pi-angle-right\" conPos=\"right\" class=\"ui-button-success\" (click)=\"onSaveData(1)\" label=\"Next\" style=\"float: right;\"></button>\r\n        </div>\r\n    </p-footer> -->\r\n  </form>\r\n  <form [formGroup]=\"companyForm\" *ngIf=\"activeIndex == 1\"> \r\n    <div class=\"ui-g ui-fluid\" >\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"vin\">Company Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"company_name\" autofocus />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"year\">Owner Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"owner_name\"  />\r\n            </div>\r\n        </div>\r\n         <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"year\">Company Address</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input pInputText  formControlName=\"company_address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n\r\n                <!-- <input pInputText  formControlName=\"company_address\" /> -->\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"year\">Phone</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                    <!-- <input type=\"text\"\r\n                    ng2TelInput\r\n                    [ng2TelInputOptions]=\"{initialCountry: 'in'}\"\r\n                    (hasError)=\"hasError($event)\"\r\n                    (ng2TelOutput)=\"getNumber($event)\"\r\n                    (intlTelInputObject)=\"telInputObject($event)\"\r\n                    (countryChange)=\"onCountryChange($event)\" /> -->\r\n    <input pInputText type=\"text\" pKeyFilter=\"int\" ng2TelInput (countryChange)=\"onCountryChange($event)\" [ng2TelInputOptions]=\"{initialCountry: 'in'}\"  formControlName=\"phone\"  />\r\n\r\n    <!-- <p-inputMask  formControlName=\"phone\" mask=\"99999-99999\" placeholder=\"99999-99999\"  slotChar=\" \"></p-inputMask> -->\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"year\">GSTIN</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText  formControlName=\"gstin\"  />\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <div class=\"ui-g ui-fluid\">\r\n                <div class=\"ui-g-12 ui-md-6\">\r\n                    <button type=\"button\" pButton icon=\"pi pi-angle-left\" (click)=\"back(0)\" label=\"Back\" style=\"float: left;\"></button>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-6\">\r\n                    <button type=\"button\" pButton  icon=\"pi pi-angle-right\" conPos=\"right\" class=\"ui-button-success\" (click)=\"onSaveData(2)\" label=\"Next\" style=\"float: right;\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-footer>\r\n  </form>\r\n    <form  [formGroup]=\"userForm\"  *ngIf=\"activeIndex == 2\"> \r\n        <div class=\"ui-g ui-fluid\" >\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">Full Name</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input pInputText  formControlName=\"user_name\"  autofocus />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"vin\">User Email</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                    <input pInputText  formControlName=\"user_email\" pKeyFilter=\"email\" placeholder=\"admin@example.com\"  emailExist (focusout)=\"onCheckEmailExist()\" />\r\n                                    <button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-warn\" *ngIf=\"emailCheckStatus == 0\"></button>    \r\n                                    <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\" *ngIf=\"emailCheckStatus == 1\"></button>    \r\n                                    <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" *ngIf=\"emailCheckStatus == 2\"></button>   \r\n              \r\n                                </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"year\">User Password</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"password\" formControlName=\"user_pwd\" pPassword nopasswordmatch (focusout)=\"passwordMatch()\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"year\">Confirm Password</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"password\" formControlName=\"cnfirm_user_pwd\" pPassword nopasswordmatch (focusout)=\"passwordMatch()\"  />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"year\">Phone</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                                  \r\n    <input pInputText pKeyFilter=\"int\" ng2TelInput   [ng2TelInputOptions]=\"{initialCountry: 'in'}\" formControlName=\"phone\"  />\r\n                        <!-- <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask> -->\r\n        \r\n                    </div>\r\n                </div>\r\n                \r\n         \r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <div class=\"ui-g ui-fluid\">\r\n                    <div class=\"ui-g-12 ui-md-6\">\r\n                        <button type=\"button\" pButton icon=\"pi pi-angle-left\" (click)=\"back(1)\" label=\"Back\" style=\"float: left;\"></button>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-6\">\r\n                        <button type=\"button\" pButton  icon=\"pi pi-angle-right\" conPos=\"right\" class=\"ui-button-success\" (click)=\"onSaveData(3)\" label=\"Next\" style=\"float: right;\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </p-footer>\r\n      </form>\r\n            <div  *ngIf=\"activeIndex == 3\"> \r\n                <div class=\"ui-g ui-fluid\" >\r\n                    <div class=\"ui-g-12\">\r\n                        Plane type: \r\n                        <div class=\"ui-g-12\">\r\n                                <div class=\"ui-g-4\">\r\n                                    <label for=\"vin\">Plan Type</label>\r\n                                </div>\r\n                                <div class=\"ui-g-8\">\r\n                                      \r\n                                        <span class=\"label label-warning\" *ngIf=\"planForm.value.plan_type == '0'\" >Free Account</span>\r\n                                        <span class=\"label label-success\" *ngIf=\"planForm.value.plan_type == '1'\" >Paid Account</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                    <div class=\"ui-g-4\">\r\n                                        <label for=\"vin\">Company Name</label>\r\n                                    </div>\r\n                                    <div class=\"ui-g-8\">\r\n                                      {{companyForm.value.company_name}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-g-12\">\r\n                                        <div class=\"ui-g-4\">\r\n                                            <label for=\"vin\">Company Address</label>\r\n                                        </div>\r\n                                        <div class=\"ui-g-8\">\r\n                                          {{companyForm.value.company_address}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"ui-g-12\">\r\n                                            <div class=\"ui-g-4\">\r\n                                                <label for=\"vin\">User Name</label>\r\n                                            </div>\r\n                                            <div class=\"ui-g-8\">\r\n                                              {{userForm.value.user_name}}\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"ui-g-12\">\r\n                                                <div class=\"ui-g-4\">\r\n                                                    <label for=\"vin\">User Email</label>\r\n                                                </div>\r\n                                                <div class=\"ui-g-8\">\r\n                                                  {{userForm.value.user_email}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"ui-g-12\">\r\n                                                    <div class=\"ui-g-4\">\r\n                                                        </div>\r\n                                                        <div class=\"ui-g-8\">\r\n                                                                <p-captcha siteKey=\"{{site_key}}\" (onResponse)=\"showResponse($event)\"></p-captcha>\r\n                                                        </div>\r\n                                                        </div>\r\n                            <!-- <pre>{{ companyForm.value | json }}</pre>\r\n                            <pre>{{ userForm.value | json }}</pre> -->\r\n                    </div>\r\n                </div>\r\n                <p-footer>\r\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                        <div class=\"ui-g ui-fluid\">\r\n                            <div class=\"ui-g-12 ui-md-6\">\r\n                                <button type=\"button\" pButton icon=\"pi pi-angle-left\" (click)=\"back(2)\" label=\"Back\" style=\"float: left;\"></button>\r\n                            </div>\r\n                            <div class=\"ui-g-12 ui-md-6\">\r\n                                <button type=\"button\" pButton *ngIf=\"!loaingSpinner\" icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"onRegister()\"  label=\"Register\" style=\"float: right;\"></button>\r\n                                <button type=\"button\" pButton *ngIf=\"loaingSpinner\" disabled icon=\"pi pi-spin pi-spinner\" class=\"ui-button-success\"  label=\"Please wait...\" style=\"float: right;\"></button>\r\n                                   </div>\r\n                        </div>\r\n                   </div>\r\n                </p-footer>\r\n              </div>\r\n         <p-footer>\r\n               \r\n                  \r\n                <a  rel=\"noopener noreferrer\"  routerLink=\"/login\" >Login?</a>\r\n           \r\n      </p-footer>\r\n    </p-card>\r\n    \r\n    <p-card  class=\"login-form ui-g-12 ui-md-12\"  *ngIf=\"successRegister && emailVerify\" >\r\n            <div style=\"text-align: center\">\r\n                <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;margin: 10px;font-size: 50px\"></i>\r\n                <!-- <i class=\"pi pi-exclamation-triangle\" style=\"    color: #fff;   background:#FF9800;     border-radius: 100%;margin: 10px;font-size: 50px\"></i> -->\r\n                <!-- <h3>Welcome!</h3> \r\n                <p>Thanks for signing up! We just need you to verify email address to complete setting your account. </p>  -->\r\n                 <h3>PLEASE VERIFY YOUR EMAIL ADDRESS!</h3> \r\n\r\n              \r\n\r\n                 <p>We have sent a verification mail to </p>\r\n                  \r\n                     <form [formGroup]=\"resendVerifyForm\" style=\"display: inline-block;\"> \r\n                        <div class=\"ui-g ui-fluid\" >\r\n                            <div class=\"ui-g-12\">\r\n                                <div class=\"ui-g-8\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                            <p-inplace closable=\"closable\">\r\n                                                    <span pInplaceDisplay>\r\n                                                            <b *ngIf=\"userForm.value.user_email\">{{userForm.value.user_email}}</b> <b *ngIf=\"!userForm.value.user_email\">test@gmail.com</b>. <i class=\"pi pi-pencil\" ></i>\r\n                                                    </span>\r\n                                                    <span pInplaceContent>\r\n                                                            <input pInputText  formControlName=\"user_email\" pKeyFilter=\"email\" placeholder=\"{{userForm.value.user_email}}\"/>                    \r\n                                                       \r\n                                                    </span>\r\n                                                </p-inplace>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                           \r\n                        </div>\r\n                      </form>\r\n                    <p>Please active your account with the link in this mail. If you cannot find the mail, please also check the Junk/Spam folder!  </p>\r\n                    <!-- <p>If you have not received a verification email or if your have mistyped your email address, your can resend the verification mail.</p> -->\r\n                    <p>Don't receive the email?</p>\r\n                 \r\n                    <p-footer>\r\n                        <a (click)=\"resendVerifyEmail()\" >Resend Verification Email</a>\r\n                        <!-- <p>(or)</p>                        \r\n                        <a (click)=\"changePhoneVerify(0,1)\" >Verify Phone Number</a> -->\r\n                        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                            <div class=\"ui-g-12 ui-md-6 ui-md-offset-3\">\r\n                               <!-- <button type=\"button\" pButton (click)=\"resendVerifyEmail()\" label=\"Resend Verification Email\" style=\"float: left;\"></button> -->\r\n                               <button type=\"button\" pButton  icon=\"pi pi-angle-right\" conPos=\"right\" class=\"ui-button-secondary\" (click)=\"skipToDashboard()\" label=\"Skip\" style=\"float: right;\"></button>\r\n                            </div>\r\n                                                    </div>\r\n                    </p-footer>\r\n              </div>\r\n          </p-card>\r\n\r\n          <p-card  class=\"login-form ui-g-12 ui-md-12\"  *ngIf=\"successRegister && phoneVerify\" >\r\n            <div style=\"text-align: center\">\r\n                <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;margin: 10px;font-size: 50px\"></i>\r\n                <!-- <i class=\"pi pi-exclamation-triangle\" style=\"    color: #fff;   background:#FF9800;     border-radius: 100%;margin: 10px;font-size: 50px\"></i> -->\r\n                <!-- <h3>Welcome!</h3> \r\n                <p>Thanks for signing up! We just need you to verify email address to complete setting your account. </p>  -->\r\n                 <h3>PLEASE VERIFY YOUR PHONE NUMBER!</h3> \r\n\r\n              \r\n\r\n                 <p>We have sent a OTP to </p>\r\n                  \r\n                     <form [formGroup]=\"sendOTPForm\" > \r\n                        <div class=\"ui-g ui-fluid\" >\r\n                            <div class=\"ui-g-12\">\r\n                                <div class=\"ui-g-8\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                            <p-inplace closable=\"closable\">\r\n                                                    <span pInplaceDisplay>\r\n                                                            <b *ngIf=\"userForm.value.phone\">{{userForm.value.phone}}</b> <b *ngIf=\"!userForm.value.phone\">345345</b>. <i class=\"pi pi-pencil\" ></i>\r\n                                                    </span>\r\n                                                    <span pInplaceContent>                 \r\n                                                            <input pInputText type=\"text\" pKeyFilter=\"int\" ng2TelInput  [ng2TelInputOptions]=\"{initialCountry: 'in'}\"  formControlName=\"phone\"  />\r\n \r\n                                                    </span>\r\n                                                </p-inplace>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                           \r\n                        </div>\r\n                      </form>\r\n\r\n                      <form [formGroup]=\"verifyOTPForm\" > \r\n                            <div class=\"ui-g ui-fluid\" >\r\n                                <div class=\"ui-g-12\">\r\n                                    <div class=\"ui-g-8\">                \r\n                                        <input pInputText type=\"text\"  formControlName=\"otp\"  />\r\n     \r\n                                    </div>\r\n                                </div>\r\n                               \r\n                            </div>\r\n                          </form>\r\n                    <!-- <p>Please active your account with the link in this mail. If you cannot find the mail, please also check the Junk/Spam folder!  </p> -->\r\n                    <!-- <p>If you have not received a verification email or if your have mistyped your email address, your can resend the verification mail.</p> -->\r\n                    <p>Don't receive OTP?</p>\r\n                 \r\n                    <p-footer>\r\n                            <a (click)=\"resendVerifyPhone()\" >Resend OTP</a>\r\n                      \r\n                        <p>(or)</p>                        \r\n                        <a (click)=\"changePhoneVerify(1,0)\" >Verify Email</a>\r\n                        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                            <div class=\"ui-g ui-fluid\">\r\n                                <div class=\"ui-g-12 ui-md-6\">\r\n          <!-- <button type=\"button\" pButton (click)=\"resendVerifyEmail()\" label=\"Resend Verification Email\" style=\"float: left;\"></button> -->\r\n          <button type=\"button\" pButton  icon=\"pi pi-angle-right\" conPos=\"right\" class=\"ui-button-secondary\" (click)=\"skipToDashboard()\" label=\"Skip\" style=\"float: right;\"></button>\r\n        </div>\r\n                            </div>\r\n                        </div>\r\n                    </p-footer>\r\n              </div>\r\n          </p-card>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n<!-- <div  class=\"ui-g-12 \">\r\n        <app-footer></app-footer>\r\n</div> -->";
    /***/
  },

  /***/
  "./src/app/component/register/register-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/component/register/register-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: RegisterRoutingModule */

  /***/
  function srcAppComponentRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function () {
      return RegisterRoutingModule;
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


    var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/component/register/register.component.ts");

    var routes = [{
      path: '',
      component: _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }];

    var RegisterRoutingModule = function RegisterRoutingModule() {
      _classCallCheck(this, RegisterRoutingModule);
    };

    RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/register/register.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/component/register/register.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/register/register.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/component/register/register.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-stripe-checkout */
    "./node_modules/ng-stripe-checkout/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(messageService, _fb, auth, router, stripeCheckoutLoader, commonService, sessionService, activedRoute) {
        var _this2 = this;

        _classCallCheck(this, RegisterComponent);

        this.messageService = messageService;
        this._fb = _fb;
        this.auth = auth;
        this.router = router;
        this.stripeCheckoutLoader = stripeCheckoutLoader;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.activedRoute = activedRoute;
        this.successRegister = false;
        this.emailVerify = true;
        this.phoneVerify = false;
        this.activeIndex = 0;
        this.futureMonthEnd = moment__WEBPACK_IMPORTED_MODULE_8__().add(1, 'M');
        this.params = {}; // this.socket = io(environment.api_url);

        this.site_key = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].site_key;
        this.activedRoute.queryParams.subscribe(function (params) {
          // Defaults to 0 if no query param provided.
          console.log(params);
          _this2.params = params;
        });
        this.planForm = this._fb.group({
          plan_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.companyForm = this._fb.group({
          _id: [''],
          company_code: [''],
          company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          owner_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          company_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          country_code: ['in', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          country_dialCode: [91, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          gstin: [''],
          product_payment_details_id: [''],
          status: [1]
        });
        this.userForm = this._fb.group({
          _id: [''],
          user_code: ['u-0001', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          user_name: [this.params ? this.params.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          user_email: [this.params ? this.params.email : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
          user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          cnfirm_user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          company_details_id: [''],
          role: [1],
          status: [1]
        });
        this.resendVerifyForm = this._fb.group({
          _id: [this.sessionService.getItem('_id')],
          user_name: [this.sessionService.getItem('user_name'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          user_email: [this.sessionService.getItem('user_email'), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]]
        });
        this.sendOTPForm = this._fb.group({
          _id: [this.sessionService.getItem('_id')],
          user_name: [this.sessionService.getItem('user_name'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.verifyOTPForm = this._fb.group({
          _id: [this.sessionService.getItem('_id')],
          user_name: [this.sessionService.getItem('user_name'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.items = [{
            label: 'Plan Details',
            command: function command(event) {
              _this3.activeIndex = 0; // this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
            }
          }, {
            label: 'Compnay Details',
            command: function command(event) {
              _this3.activeIndex = 1; // this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
            }
          }, {
            label: 'Personal Details',
            command: function command(event) {
              _this3.activeIndex = 2; // this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this3.activeIndex = 3; // this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
            }
          }];
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange(address) {
          console.log('address', address); // Do some stuff

          this.companyForm.controls['company_address'].setValue(address.formatted_address);
        }
      }, {
        key: "back",
        value: function back(val) {
          console.log('val', val);
          this.activeIndex = val;
          this.messageService.clear();
        }
      }, {
        key: "selectPlanType",
        value: function selectPlanType(val) {
          this.planForm.controls['plan_type'].setValue(val); // this.activeIndex = 1;

          this.onSaveData(1);
        }
      }, {
        key: "onSaveData",
        value: function onSaveData(val) {
          if (val == 1) {
            if (this.planForm.invalid) {
              this.checkValidityPlan();
              return false;
            }
          } else if (val == 2) {
            if (this.companyForm.invalid) {
              this.checkValidityCompany();
              return false;
            }

            console.log('cm', this.companyForm.value);
          } else if (val == 3) {
            if (this.userForm.invalid) {
              this.checkValidityUser();
              return false;
            }
          }

          this.activeIndex = val;
          this.messageService.clear();
        }
      }, {
        key: "passwordMatch",
        value: function passwordMatch() {
          var newPassword = this.userForm.value.user_pwd;
          var confirmPassword = this.userForm.value.cnfirm_user_pwd;

          if (confirmPassword != '') {
            if (newPassword != confirmPassword) {
              console.log('not eq');
              console.log(this.userForm);
              this.userForm.controls['cnfirm_user_pwd'].setErrors({
                'nopasswordmatch': true
              });
              this.userForm.controls['cnfirm_user_pwd'].markAsDirty(); // this.utilities.presentToast('Confirm password not match!','warning');
            } else {
              console.log('eq');
              this.userForm.controls['cnfirm_user_pwd'].setErrors({
                'nopasswordmatch': null
              });
              this.userForm.controls['cnfirm_user_pwd'].updateValueAndValidity();
            }
          } else {}
        }
      }, {
        key: "onRegisterCompany",
        value: function onRegisterCompany() {
          var _this4 = this;

          this.messageService.clear();
          this.auth.onRegisterCompany(this.companyForm.value).subscribe(function (data) {
            console.log('data', data);

            _this4.userForm.controls['company_details_id'].setValue(data._id);

            _this4.onRegisterUser();
          }, function (error) {
            console.log('er', error);

            _this4.messageService.add({
              severity: 'error',
              summary: 'Opps!',
              detail: 'Sothing went wrong!'
            });
          });
        }
      }, {
        key: "onRegisterUser",
        value: function onRegisterUser() {
          var _this5 = this;

          this.messageService.clear();
          this.auth.onRegisterUser(this.userForm.value).subscribe(function (data) {
            console.log('onRegisterUser', data);
            _this5.loaingSpinner = false;

            if (data.status == 1) {
              _this5.successRegister = true;

              _this5.sessionService.setItem('_id', data._id);

              _this5.sessionService.setItem('user_name', data.user_name);

              _this5.sessionService.setItem('user_email', data.user_email);

              _this5.sessionService.setItem('user_pwd', data.user_pwd); // this.sessionService.setUserCredentials(data.user)

            } else if (data.status == 0) {
              _this5.successRegister = true;

              _this5.messageService.add({
                severity: 'warn',
                summary: 'Warning!',
                detail: 'Verification email not send!'
              });
            } else {
              _this5.messageService.add({
                severity: 'warn',
                summary: 'Warning!',
                detail: 'Please try again!'
              });

              _this5.successRegister = false;
            }
          }, function (error) {
            console.log('er', error);

            _this5.messageService.add({
              severity: 'error',
              summary: 'Opps!',
              detail: 'Sothing went wrong!'
            });

            _this5.successRegister = false;
            _this5.loaingSpinner = false;
          });
        }
      }, {
        key: "onCheckPaymentType",
        value: function onCheckPaymentType() {
          if (this.planForm.value.plan_type == 1) {
            this.onBuyProduct();
            return false;
          } else {
            var payData = {
              plan_type: 0,
              payment_amount: 14999,
              currency: 'INR',
              // company_details_id: data,
              payment_details: '',
              expiry_date: this.futureMonthEnd,
              status: 0
            };
            this.onRegisterPayment(payData);
          }
        }
      }, {
        key: "onRegisterPayment",
        value: function onRegisterPayment(cdata) {
          var _this6 = this;

          this.messageService.clear();
          this.auth.onRegisterPayment(cdata).subscribe(function (data) {
            console.log('onRegisterPayment data', data);

            _this6.companyForm.controls['product_payment_details_id'].setValue(data._id); // this.onRegisterUser();


            _this6.onRegisterCompany();
          }, function (error) {
            console.log('er', error);

            _this6.messageService.add({
              severity: 'error',
              summary: 'Opps!',
              detail: 'Sothing went wrong!'
            });
          });
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          console.log(this.companyForm);
          console.log(this.userForm);
          this.loaingSpinner = true;
          this.userForm.controls['phone'].setValue(this.companyForm.value.phone);
          this.messageService.clear();

          if (this.planForm.invalid) {
            this.activeIndex = 0;
            this.messageService.add({
              severity: 'warn',
              summary: 'Warning!',
              detail: 'Please select plan type!'
            });
            return false;
          }

          if (this.companyForm.invalid) {
            this.activeIndex = 1;
            this.messageService.add({
              severity: 'warn',
              summary: 'Warning!',
              detail: 'Please add company info.!'
            });
            return false;
          }

          if (this.userForm.invalid) {
            this.activeIndex = 2;
            this.messageService.add({
              severity: 'warn',
              summary: 'Warning!',
              detail: 'Please add personal info.!'
            });
            return false;
          }

          this.onCheckPaymentType();
        }
      }, {
        key: "resendVerifyEmail",
        value: function resendVerifyEmail() {
          var _this7 = this;

          this.resendVerifyForm.controls['_id'].setValue(this.sessionService.getItem('_id') ? this.sessionService.getItem('_id') : this.userForm.value._id);
          this.resendVerifyForm.controls['user_name'].setValue(this.sessionService.getItem('user_name') ? this.sessionService.getItem('user_name') : this.userForm.value.user_name);
          this.resendVerifyForm.controls['user_email'].setValue(this.resendVerifyForm.value.user_email ? this.resendVerifyForm.value.user_email : this.userForm.value.user_email);
          console.log('sendVerifyEmail', this.resendVerifyForm);

          if (this.resendVerifyForm.invalid) {
            return;
          }

          this.loaingSpinner = true;
          this.auth.resendVerifyEmail(this.resendVerifyForm.value).subscribe(function (data) {
            console.log('data', data);
            _this7.loaingSpinner = false;

            if (data == 1) {
              _this7.sessionService.setItem('user_email', _this7.resendVerifyForm.value.user_email); // update localstoreage values


              _this7.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: 'Send Successfully'
              });
            } else if (data == 2) {
              _this7.messageService.add({
                severity: 'warn',
                summary: 'Not send',
                detail: ''
              });
            } else if (data == 3) {
              _this7.messageService.add({
                severity: 'warn',
                summary: 'Email alredy exist',
                detail: ''
              });
            } else {
              _this7.messageService.add({
                severity: 'warn',
                summary: 'Service Message',
                detail: 'Not send. Retry'
              });
            }
          }, function (error) {
            console.log('er', error);
            _this7.loaingSpinner = false;

            _this7.messageService.add({
              severity: 'error',
              summary: 'Opps!',
              detail: 'Sothing went wrong!'
            });
          });
        }
      }, {
        key: "skipToDashboard",
        value: function skipToDashboard() {
          var _this8 = this;

          var loginData = {
            user_email: this.sessionService.getItem('user_email'),
            user_pwd: this.sessionService.getItem('user_pwd'),
            rememberMe: false
          };
          console.log(loginData);
          this.auth.logIn(loginData).subscribe(function (data) {
            console.log('data', data);

            _this8.messageService.clear();

            _this8.loaingSpinner = false;

            if (data.token) {
              // setTimeout(() => {
              // this.socket.emit('loginTodo', data.user);
              _this8.sessionService.setItem("inventryLogedIn", "1");

              _this8.sessionService.setItem('secret_token', data.token);

              _this8.sessionService.setItem('rememberMe', false);

              _this8.sessionService.setUserCredentials(data.user); // if(this.loginForm.value.rememberMe == true){
              //   this.sessionService.setItem('user_email', this.loginForm.value.user_email);
              //   this.sessionService.setItem('user_pwd',  this.loginForm.value.user_pwd);
              //   this.sessionService.setItem('rememberMe',  this.loginForm.value.rememberMe);
              //   this.sessionService.setItem('secret_token', data.token);
              // }else{
              //   this.sessionService.clear()
              // }


              _this8.router.navigate(["/inventory-mngt/dashboard"]);

              _this8.messageService.add({
                severity: 'success',
                summary: 'Success!',
                detail: 'Login success!'
              }); //  }, 1000);

            } else {
              _this8.messageService.clear();

              _this8.messageService.add({
                severity: 'warn',
                summary: 'Warning!',
                detail: 'Check your User Name/Password'
              });
            }
          }, function (error) {
            console.log('er', error);
            _this8.loaingSpinner = false;

            _this8.messageService.add({
              severity: 'error',
              summary: 'Opps!',
              detail: 'Sothing went wrong!'
            }); // this.sessionService.setItem("inventryLogedIn", "1");
            // this.router.navigate(["/dashboard"]);

          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this9 = this;

          this.stripeCheckoutLoader.createHandler({
            key: 'pk_test_F63TkaKKCwSbIPGbjcbzWuJT00PfCXqOJj',
            token: function token(_token) {
              // Do something with the token...
              console.log('Payment successful!', _token);
            }
          }).then(function (handler) {
            _this9.stripeCheckoutHandler = handler;
          });
        }
      }, {
        key: "onBuyProduct",
        value: function onBuyProduct() {
          var _this10 = this;

          this.stripeCheckoutHandler.open({
            amount: 1499900,
            currency: 'INR'
          }).then(function (token) {
            // Do something with the token...
            console.log('Payment successful!', token);
            var payData = {
              plan_type: 1,
              payment_amount: 14999,
              currency: 'INR',
              // company_details_id: cdata,
              payment_details: token,
              expiry_date: '',
              status: 1
            };

            _this10.onRegisterPayment(payData);
          }).catch(function (err) {
            // Payment failed or was canceled by user...
            if (err !== 'stripe_closed') {
              throw err;
            } //   let payData:ProductPayment = {
            //     plan_type : 1,
            //     payment_amount : 14999,
            //     currency: 'INR',
            //     company_details_id: cdata,
            //     payment_details: err,
            //     expiry_date: this.futureMonthEnd,
            //     status: 2
            // }
            // this.onRegisterPayment(payData)

          });
        }
      }, {
        key: "onClickCancel",
        value: function onClickCancel() {
          // If the window has been opened, this is how you can close it:
          this.stripeCheckoutHandler.close();
        }
      }, {
        key: "onCheckEmailExist",
        value: function onCheckEmailExist() {
          var _this11 = this;

          this.messageService.clear();
          console.log('onCheckEmailExist', this.userForm.value.user_email);
          console.log('valid', this.userForm.controls['user_email'].valid);

          if (this.userForm.controls['user_email'].invalid == true) {
            this.emailCheckStatus = null;
            return false;
          }

          this.emailCheckStatus = null;
          this.auth.onCheckEmailExist(this.userForm.value.user_email).subscribe(function (data) {
            console.log('data', data);

            if (data.length != 0) {
              _this11.emailCheckStatus = 2;

              _this11.messageService.add({
                severity: 'warn',
                summary: 'Warning!',
                detail: 'Email already exist!'
              });

              _this11.userForm.controls['user_email'].setErrors({
                'emailExist': true
              });

              _this11.userForm.controls['user_email'].markAsDirty();
            } else {
              _this11.emailCheckStatus = 1;

              _this11.userForm.controls['user_email'].setErrors({
                'emailExist': null
              });

              _this11.userForm.controls['user_email'].updateValueAndValidity();
            }
          }, function (error) {
            console.log('er', error);

            _this11.messageService.add({
              severity: 'error',
              summary: 'Opps!',
              detail: 'Sothing went wrong!'
            });
          });
        }
      }, {
        key: "showResponse",
        value: function showResponse(event) {
          console.log('event', event.response); // this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
        }
      }, {
        key: "telInputObject",
        value: function telInputObject(obj) {
          console.log(obj);
          console.log(obj.s.dialCode);
          obj.setCountry('in');
        }
      }, {
        key: "getNumber",
        value: function getNumber(evnt) {
          console.log('evnt', evnt);
        }
      }, {
        key: "checkValidityPlan",
        value: function checkValidityPlan() {
          var _this12 = this;

          Object.keys(this.planForm.controls).forEach(function (key) {
            _this12.planForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "checkValidityCompany",
        value: function checkValidityCompany() {
          var _this13 = this;

          Object.keys(this.companyForm.controls).forEach(function (key) {
            _this13.companyForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "checkValidityUser",
        value: function checkValidityUser() {
          var _this14 = this;

          Object.keys(this.userForm.controls).forEach(function (key) {
            _this14.userForm.controls[key].markAsDirty();
          });
        }
      }, {
        key: "changePhoneVerify",
        value: function changePhoneVerify(e, p) {
          this.emailVerify = e == 1 ? true : false;
          this.phoneVerify = p == 1 ? true : false;
        }
      }, {
        key: "onCountryChange",
        value: function onCountryChange(event) {
          console.log(event);
          this.companyForm.get('country_code').setValue(event.iso2);
          this.companyForm.get('country_dialCode').setValue(event.dialCode); // console.log(obj.s.dialCode);
          // obj.setCountry('in');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthLoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_7__["StripeCheckoutLoader"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceDirective"])], RegisterComponent.prototype, "placesRef", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/component/register/register.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthLoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_7__["StripeCheckoutLoader"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/component/register/register.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/component/register/register.module.ts ***!
    \*******************************************************/

  /*! exports provided: RegisterModule */

  /***/
  function srcAppComponentRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
      return RegisterModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/component/register/register-routing.module.ts");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/component/register/register.component.ts");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/steps.js");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_steps__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_captcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/captcha */
    "./node_modules/primeng/captcha.js");
    /* harmony import */


    var primeng_captcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_captcha__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/messages.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/inputmask */
    "./node_modules/primeng/inputmask.js");
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/password.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng-stripe-checkout */
    "./node_modules/ng-stripe-checkout/index.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/radiobutton.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _header_header_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../header/header.module */
    "./src/app/component/header/header.module.ts");
    /* harmony import */


    var _footer_footer_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../footer/footer.module */
    "./src/app/component/footer/footer.module.ts");
    /* harmony import */


    var primeng_inplace__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/inplace */
    "./node_modules/primeng/inplace.js");
    /* harmony import */


    var primeng_inplace__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var ng2_tel_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng2-tel-input */
    "./node_modules/ng2-tel-input/ng2-tel-input.js");
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/keyfilter */
    "./node_modules/primeng/keyfilter.js");
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_21__);

    var RegisterModule = function RegisterModule() {
      _classCallCheck(this, RegisterModule);
    };

    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_6__["StepsModule"], primeng_captcha__WEBPACK_IMPORTED_MODULE_7__["CaptchaModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_10__["MessagesModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_11__["InputMaskModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"], primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__["GooglePlaceModule"], ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_15__["StripeCheckoutModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__["RadioButtonModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_17__["HeaderModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_18__["FooterModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_19__["InplaceModule"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_20__["Ng2TelInputModule"], primeng_keyfilter__WEBPACK_IMPORTED_MODULE_21__["KeyFilterModule"]]
    })], RegisterModule);
    /***/
  },

  /***/
  "./src/app/shared/common.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/common.service.ts ***!
    \******************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppSharedCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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

    var CommonService = /*#__PURE__*/function () {
      function CommonService(httpClient) {
        _classCallCheck(this, CommonService);

        this.httpClient = httpClient;
      }

      _createClass(CommonService, [{
        key: "leftPad",
        value: function leftPad(type, number, targetLength) {
          var output = number + '';

          while (output.length < targetLength) {
            output = '0' + output;
          }

          return type + '-' + output;
        }
      }, {
        key: "incrCode",
        value: function incrCode(type, count) {
          var cCode = Number(count) + 1;
          console.log('cCode', cCode);
          return this.leftPad(type, cCode, 4);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CommonService);
    /***/
  }
}]);
//# sourceMappingURL=component-register-register-module-es5.js.map