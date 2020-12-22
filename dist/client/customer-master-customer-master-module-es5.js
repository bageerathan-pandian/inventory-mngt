function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-master-customer-master-module"], {
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
  "./node_modules/primeng/checkbox.js":
  /*!******************************************!*\
    !*** ./node_modules/primeng/checkbox.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengCheckboxJs(module, exports, __webpack_require__) {
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
    /*! ./components/checkbox/checkbox */
    "./node_modules/primeng/components/checkbox/checkbox.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/components/checkbox/checkbox.js":
  /*!**************************************************************!*\
    !*** ./node_modules/primeng/components/checkbox/checkbox.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsCheckboxCheckboxJs(module, exports, __webpack_require__) {
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

    exports.CHECKBOX_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return Checkbox;
      }),
      multi: true
    };

    var Checkbox =
    /** @class */
    function () {
      function Checkbox(cd) {
        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new core_1.EventEmitter();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.focused = false;
        this.checked = false;
      }

      Checkbox.prototype.onClick = function (event, checkbox, focus) {
        event.preventDefault();

        if (this.disabled || this.readonly) {
          return;
        }

        this.checked = !this.checked;
        this.updateModel();

        if (focus) {
          checkbox.focus();
        }
      };

      Checkbox.prototype.updateModel = function () {
        if (!this.binary) {
          if (this.checked) this.addValue();else this.removeValue();
          this.onModelChange(this.model);

          if (this.formControl) {
            this.formControl.setValue(this.model);
          }
        } else {
          this.onModelChange(this.checked);
        }

        this.onChange.emit(this.checked);
      };

      Checkbox.prototype.handleChange = function (event) {
        if (!this.readonly) {
          this.checked = event.target.checked;
          this.updateModel();
        }
      };

      Checkbox.prototype.isChecked = function () {
        if (this.binary) return this.model;else return this.model && this.model.indexOf(this.value) > -1;
      };

      Checkbox.prototype.removeValue = function () {
        var _this = this;

        this.model = this.model.filter(function (val) {
          return val !== _this.value;
        });
      };

      Checkbox.prototype.addValue = function () {
        if (this.model) this.model = this.model.concat([this.value]);else this.model = [this.value];
      };

      Checkbox.prototype.onFocus = function (event) {
        this.focused = true;
      };

      Checkbox.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
      };

      Checkbox.prototype.writeValue = function (model) {
        this.model = model;
        this.checked = this.isChecked();
        this.cd.markForCheck();
      };

      Checkbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
      };

      Checkbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
      };

      Checkbox.prototype.setDisabledState = function (val) {
        this.disabled = val;
      };

      __decorate([core_1.Input(), __metadata("design:type", Object)], Checkbox.prototype, "value", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "name", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Checkbox.prototype, "disabled", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "binary", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "label", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Number)], Checkbox.prototype, "tabindex", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "inputId", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], Checkbox.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "labelStyleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", forms_1.FormControl)], Checkbox.prototype, "formControl", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], Checkbox.prototype, "checkboxIcon", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], Checkbox.prototype, "readonly", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], Checkbox.prototype, "onChange", void 0);

      Checkbox = __decorate([core_1.Component({
        selector: 'p-checkbox',
        template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"{'ui-chkbox ui-widget': true,'ui-chkbox-readonly': readonly}\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [name]=\"name\" [readonly]=\"readonly\" [value]=\"value\" [checked]=\"checked\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\"\n                [ngClass]=\"{'ui-state-focus':focused}\" (change)=\"handleChange($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,cb,true)\"\n                        [ngClass]=\"{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"checked ? checkboxIcon : null\"></span>\n            </div>\n        </div>\n        <label (click)=\"onClick($event,cb,true)\" [class]=\"labelStyleClass\"\n                [ngClass]=\"{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n                *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
        providers: [exports.CHECKBOX_VALUE_ACCESSOR]
      }), __metadata("design:paramtypes", [core_1.ChangeDetectorRef])], Checkbox);
      return Checkbox;
    }();

    exports.Checkbox = Checkbox;

    var CheckboxModule =
    /** @class */
    function () {
      function CheckboxModule() {}

      CheckboxModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [Checkbox],
        declarations: [Checkbox]
      })], CheckboxModule);
      return CheckboxModule;
    }();

    exports.CheckboxModule = CheckboxModule; //# sourceMappingURL=checkbox.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/components/inputswitch/inputswitch.js":
  /*!********************************************************************!*\
    !*** ./node_modules/primeng/components/inputswitch/inputswitch.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengComponentsInputswitchInputswitchJs(module, exports, __webpack_require__) {
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

    exports.INPUTSWITCH_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return InputSwitch;
      }),
      multi: true
    };

    var InputSwitch =
    /** @class */
    function () {
      function InputSwitch(cd) {
        this.cd = cd;
        this.onChange = new core_1.EventEmitter();
        this.checked = false;
        this.focused = false;

        this.onModelChange = function () {};

        this.onModelTouched = function () {};
      }

      InputSwitch.prototype.onClick = function (event, cb) {
        if (!this.disabled && !this.readonly) {
          this.toggle(event);
          cb.focus();
        }
      };

      InputSwitch.prototype.onInputChange = function (event) {
        if (!this.readonly) {
          var inputChecked = event.target.checked;
          this.updateModel(event, inputChecked);
        }
      };

      InputSwitch.prototype.toggle = function (event) {
        this.updateModel(event, !this.checked);
      };

      InputSwitch.prototype.updateModel = function (event, value) {
        this.checked = value;
        this.onModelChange(this.checked);
        this.onChange.emit({
          originalEvent: event,
          checked: this.checked
        });
      };

      InputSwitch.prototype.onFocus = function (event) {
        this.focused = true;
      };

      InputSwitch.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
      };

      InputSwitch.prototype.writeValue = function (checked) {
        this.checked = checked;
        this.cd.markForCheck();
      };

      InputSwitch.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
      };

      InputSwitch.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
      };

      InputSwitch.prototype.setDisabledState = function (val) {
        this.disabled = val;
      };

      __decorate([core_1.Input(), __metadata("design:type", Object)], InputSwitch.prototype, "style", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "styleClass", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Number)], InputSwitch.prototype, "tabindex", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "inputId", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], InputSwitch.prototype, "name", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], InputSwitch.prototype, "disabled", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], InputSwitch.prototype, "readonly", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], InputSwitch.prototype, "onChange", void 0);

      InputSwitch = __decorate([core_1.Component({
        selector: 'p-inputSwitch',
        template: "\n        <div [ngClass]=\"{'ui-inputswitch ui-widget': true, 'ui-inputswitch-checked': checked, 'ui-state-disabled': disabled, 'ui-inputswitch-readonly': readonly, 'ui-inputswitch-focus': focused}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event, cb)\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.tabindex]=\"tabindex\" [checked]=\"checked\" (change)=\"onInputChange($event)\"\n                        (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [disabled]=\"disabled\" />\n            </div>\n            <span class=\"ui-inputswitch-slider\"></span>\n        </div>\n    ",
        providers: [exports.INPUTSWITCH_VALUE_ACCESSOR]
      }), __metadata("design:paramtypes", [core_1.ChangeDetectorRef])], InputSwitch);
      return InputSwitch;
    }();

    exports.InputSwitch = InputSwitch;

    var InputSwitchModule =
    /** @class */
    function () {
      function InputSwitchModule() {}

      InputSwitchModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [InputSwitch],
        declarations: [InputSwitch]
      })], InputSwitchModule);
      return InputSwitchModule;
    }();

    exports.InputSwitchModule = InputSwitchModule; //# sourceMappingURL=inputswitch.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/dropdown.js":
  /*!******************************************!*\
    !*** ./node_modules/primeng/dropdown.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengDropdownJs(module, exports, __webpack_require__) {
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
    /*! ./components/dropdown/dropdown */
    "./node_modules/primeng/components/dropdown/dropdown.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/inputswitch.js":
  /*!*********************************************!*\
    !*** ./node_modules/primeng/inputswitch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengInputswitchJs(module, exports, __webpack_require__) {
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
    /*! ./components/inputswitch/inputswitch */
    "./node_modules/primeng/components/inputswitch/inputswitch.js"));
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/customer-master/customer-master.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/customer-master/customer-master.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentInventoryMngtMasterCustomerMasterCustomerMasterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\r\n<div style=\"margin-top: 15px;\">\r\n    <p-card>\r\n        <p-table #dt [loading]=\"loading\" [value]=\"customerList\" [columns]=\"cols\" dataKey=\"_id\" [paginator]=\"true\"\r\n            [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['_id','customer_name','customer_address','phone']\"\r\n            [rows]=\"10\">\r\n\r\n            <ng-template pTemplate=\"caption\">\r\n                <div class=\"ui-helper-clearfix\">\r\n\r\n                    <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button> -->\r\n                    <!-- <button type=\"button\" pButton icon=\"fa fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button> -->\r\n                </div>\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n                </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th style=\"width: 3em\">\r\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n                    </th>\r\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn>\r\n                        {{col.header}}\r\n                        <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\"\r\n                            ariaLabelDesc=\"Activate to sort in descending order\"\r\n                            ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n\r\n                    </th>\r\n                    <th style=\"width: 10%;\">\r\n                        <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\" iconPos=\"left\"\r\n                            (click)=\"showDialogToAdd()\" label=\"Add\"></button>\r\n\r\n                    </th>\r\n                </tr>\r\n                <!-- <tr>\r\n            <th ></th>\r\n            <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt.filters[col.field]?.value\">\r\n            </th>            \r\n            <th ></th>\r\n        </tr> -->\r\n\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-ri=\"rowIndex\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td>\r\n                        <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.customer_code}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.customer_name}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.customer_address}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.phone}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.enable_tax ? 'Yes' : 'No'}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.customer_gstin}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData?.route_details_id?.route_name}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.updatedAt | date:'medium'}}\r\n                    </td>\r\n                    <td style=\"text-align: center\">\r\n                        <p-dropdown [options]=\"status\" placeholder=\"Status\" [(ngModel)]=\"rowData.status\"\r\n                            (onChange)=\"onChangeStatus($event)\"></p-dropdown>\r\n                    </td>\r\n                    <td style=\"text-align:center\">\r\n                        <button pButton type=\"button\" icon=\"pi pi-pencil\" class=\"ui-button-info\"\r\n                            (click)=\"showDialogToAdd(rowData)\" style=\"    margin: 0px 5px;\"></button>\r\n                        <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\r\n                        <button pButton type=\"button\" icon=\"pi pi-trash\" class=\"ui-button-danger\"\r\n                            (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\"></button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"paginatorleft\" let-state>\r\n                Showing {{(state.page  * state.rows) + 1}} to {{state.rows * (state.page + 1)}} of\r\n                <strong>{{customerList?.length}}</strong> entries\r\n            </ng-template>\r\n\r\n\r\n        </p-table>\r\n\r\n        <!-- <p-dialog  [maximizable]=\"true\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '450px'}\">\r\n        <p-header>\r\n                <span *ngIf=\"customerForm.value._id\">Update</span>\r\n                <span *ngIf=\"!customerForm.value._id\">Add</span> Customer\r\n        </p-header>\r\n    <form [formGroup]=\"customerForm\">\r\n    <div class=\"ui-g ui-fluid\" >\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Customer Code</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText formControlName=\"customer_code\" disabled />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Customer Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText  formControlName=\"customer_name\" autofocus />\r\n                </div>\r\n            </div>\r\n        <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Customer Address</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText  formControlName=\"customer_address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Customer Phone</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask>\r\n    \r\n                </div>\r\n            </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"brand\">Status</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button type=\"button\" pButton  icon=\"pi pi-save\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\r\n        </div>\r\n    </p-footer>\r\n</form>\r\n</p-dialog> -->\r\n\r\n        <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\r\n            <p-footer>\r\n                <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>\r\n                <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\r\n            </p-footer>\r\n        </p-confirmDialog>\r\n\r\n    </p-card>\r\n\r\n</div>\r\n\r\n<app-customer-form [displayDialog3]=\"displayDialog3\" [custData]=\"custData\"\r\n    (displayChangeEvent3)=\"onDialogClose3($event)\" (customerEvent)=\"receiveCustomer($event)\"></app-customer-form>";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/customer-master/customer-master-routing.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/customer-master/customer-master-routing.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: CustomerMasterRoutingModule */

  /***/
  function srcAppComponentInventoryMngtMasterCustomerMasterCustomerMasterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerMasterRoutingModule", function () {
      return CustomerMasterRoutingModule;
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


    var _customer_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-master.component */
    "./src/app/component/inventory-mngt/master/customer-master/customer-master.component.ts");

    var routes = [{
      path: '',
      component: _customer_master_component__WEBPACK_IMPORTED_MODULE_3__["CustomerMasterComponent"]
    }];

    var CustomerMasterRoutingModule = function CustomerMasterRoutingModule() {
      _classCallCheck(this, CustomerMasterRoutingModule);
    };

    CustomerMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CustomerMasterRoutingModule);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/customer-master/customer-master.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/customer-master/customer-master.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentInventoryMngtMasterCustomerMasterCustomerMasterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbnZlbnRvcnktbW5ndC9tYXN0ZXIvY3VzdG9tZXItbWFzdGVyL2N1c3RvbWVyLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/customer-master/customer-master.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/customer-master/customer-master.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: CustomerMasterComponent */

  /***/
  function srcAppComponentInventoryMngtMasterCustomerMasterCustomerMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerMasterComponent", function () {
      return CustomerMasterComponent;
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


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/customer.service */
    "./src/app/shared/customer.service.ts");
    /* harmony import */


    var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/common.service */
    "./src/app/shared/common.service.ts");
    /* harmony import */


    var src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/session.service */
    "./src/app/shared/session.service.ts");

    var CustomerMasterComponent = /*#__PURE__*/function () {
      function CustomerMasterComponent(router, confirmationService, messageService, customerService, commonService, sessionService) {
        var _this2 = this;

        _classCallCheck(this, CustomerMasterComponent);

        this.router = router;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.customerService = customerService;
        this.commonService = commonService;
        this.sessionService = sessionService;
        this.car = {};
        this.status = [];
        this.custData = [];
        this.bradCrum = [{
          label: '',
          icon: 'pi pi-home',
          command: function command(event) {
            _this2.router.navigate(['/inventory-mngt/dashboard']);
          }
        }, {
          label: 'Master',
          command: function command(event) {
            _this2.router.navigate(["/inventory-mngt/master"]);
          }
        }, {
          label: 'Customer'
        }];
        this.status = [{
          label: 'Active',
          value: 1
        }, {
          label: 'De-Active',
          value: 0
        }];
        this.cols = [// { field: '_id', header: '#' },
        {
          field: 'customer_code',
          header: 'Code'
        }, {
          field: 'customer_name',
          header: 'Customer Name'
        }, {
          field: 'customer_address',
          header: 'Customer Address'
        }, {
          field: 'phone',
          header: 'Phone'
        }, {
          field: 'enable_tax',
          header: 'Enable Tax'
        }, {
          field: 'customer_gstin',
          header: 'GSTIN'
        }, {
          field: 'route_name',
          header: 'Route'
        }, {
          field: 'updatedAt',
          header: 'Updated Date'
        }, {
          field: 'status',
          header: 'Status'
        } // { field: '', header: 'Action' }
        ];
      }

      _createClass(CustomerMasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.getCustomer();
          this.getCustomerByCompany();
        }
      }, {
        key: "getCustomer",
        value: function getCustomer() {
          var _this3 = this;

          this.loading = true;
          this.customerService.getCustomer().subscribe(function (data) {
            console.log('customerList', data);
            _this3.customerList = data;
            _this3.loading = false;
          });
        }
      }, {
        key: "getCustomerByCompany",
        value: function getCustomerByCompany() {
          var _this4 = this;

          this.loading = true;
          this.customerService.getCustomerByCompany().subscribe(function (data) {
            console.log('customerList', data);
            _this4.customerList = data;
            _this4.loading = false;
          });
        } // showDialogToAdd() {
        //   this.customerForm.reset();
        //   this.customerForm.controls['customer_code'].setValue(this.commonService.incrCode('c',this.customerList.length));
        //   this.customerForm.controls['status'].setValue(1);
        //   this.customerForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        //   this.displayDialog3 = true;
        // }

      }, {
        key: "delete",
        value: function _delete(customer, index) {
          var _this5 = this;

          console.log('delete', customer, index);
          this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this customer?',
            accept: function accept() {
              //Actual logic to perform a confirmation
              _this5.onRowDelete(customer, index);
            }
          });
        }
      }, {
        key: "onRowDelete",
        value: function onRowDelete(customer, index) {
          var _this6 = this;

          console.log(customer, index);
          this.customerService.deleteCustomer(customer._id).subscribe(function (data) {
            console.log('delete', data);

            _this6.customerList.splice(index, 1);

            _this6.customerList = _toConsumableArray(_this6.customerList);

            _this6.messageService.add({
              severity: 'success',
              summary: 'Customer Deleted Successfully',
              detail: 'Customer Deleted Successfully'
            });
          }, function (error) {
            console.log(error);

            _this6.messageService.add({
              severity: 'error',
              summary: 'Oopss!',
              detail: 'Something went wrong!'
            });
          });
        }
      }, {
        key: "onChangeStatus",
        value: function onChangeStatus(event) {
          console.log(event);
          var isChecked = event.checked;
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd(Data) {
          this.custData = Data;
          this.displayDialog3 = true;
        }
      }, {
        key: "onDialogClose3",
        value: function onDialogClose3(event) {
          console.log(event);
          this.displayDialog3 = false;
          this.custData = null;
        }
      }, {
        key: "receiveCustomer",
        value: function receiveCustomer(event) {
          console.log('receiveUnit', event);
          var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.customerList, function (o) {
            return o._id == event._id;
          });
          console.log(sliceIndex);

          if (sliceIndex > -1) {
            // Replace item at index using native splice
            this.customerList.splice(sliceIndex, 1, event);
            this.customerList = _toConsumableArray(this.customerList);
          } else {
            this.customerList = [event].concat(_toConsumableArray(this.customerList));
          }
        }
      }]);

      return CustomerMasterComponent;
    }();

    CustomerMasterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
      }, {
        type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
      }];
    };

    CustomerMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-master',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-master.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/inventory-mngt/master/customer-master/customer-master.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-master.component.scss */
      "./src/app/component/inventory-mngt/master/customer-master/customer-master.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], src_app_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])], CustomerMasterComponent);
    /***/
  },

  /***/
  "./src/app/component/inventory-mngt/master/customer-master/customer-master.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/component/inventory-mngt/master/customer-master/customer-master.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CustomerMasterModule */

  /***/
  function srcAppComponentInventoryMngtMasterCustomerMasterCustomerMasterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerMasterModule", function () {
      return CustomerMasterModule;
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


    var _customer_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-master-routing.module */
    "./src/app/component/inventory-mngt/master/customer-master/customer-master-routing.module.ts");
    /* harmony import */


    var _customer_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customer-master.component */
    "./src/app/component/inventory-mngt/master/customer-master/customer-master.component.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/inputtext.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/card.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/dialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/dropdown.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/confirmdialog.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/inputswitch */
    "./node_modules/primeng/inputswitch.js");
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/chart.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/inputmask */
    "./node_modules/primeng/inputmask.js");
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/progressspinner.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _shared_customer_form_customer_form_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../shared/customer-form/customer-form.module */
    "./src/app/component/inventory-mngt/shared/customer-form/customer-form.module.ts");

    var CustomerMasterModule = function CustomerMasterModule() {
      _classCallCheck(this, CustomerMasterModule);
    };

    CustomerMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_customer_master_component__WEBPACK_IMPORTED_MODULE_4__["CustomerMasterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _customer_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerMasterRoutingModule"], primeng_card__WEBPACK_IMPORTED_MODULE_9__["CardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialogModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_14__["ToastModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__["InputSwitchModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_16__["ChartModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__["GooglePlaceModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_18__["InputMaskModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__["ProgressSpinnerModule"], _shared_customer_form_customer_form_module__WEBPACK_IMPORTED_MODULE_20__["CustomerFormModule"]]
    })], CustomerMasterModule);
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
//# sourceMappingURL=customer-master-customer-master-module-es5.js.map