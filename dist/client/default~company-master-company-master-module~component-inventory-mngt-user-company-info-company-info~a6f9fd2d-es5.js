function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-master-company-master-module~component-inventory-mngt-user-company-info-company-info~a6f9fd2d"], {
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
  "./src/app/shared/image-upload.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/image-upload.service.ts ***!
    \************************************************/

  /*! exports provided: ImageUploadService */

  /***/
  function srcAppSharedImageUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploadService", function () {
      return ImageUploadService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ImageUploadService = /*#__PURE__*/function () {
      function ImageUploadService(httpClient) {
        _classCallCheck(this, ImageUploadService);

        this.httpClient = httpClient;
      }

      _createClass(ImageUploadService, [{
        key: "imageUpload",
        value: function imageUpload(data) {
          var formData = new FormData();
          formData.append("image", data, data.name);
          console.log('body', formData); // var headerOption = new HttpHeaders({'Content-Type':'application/json'});

          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + '/api/image-upload', formData);
        }
      }, {
        key: "profileImageUpload",
        value: function profileImageUpload(data) {
          var formData = new FormData();
          formData.append("image", data, data.name);
          console.log('body', formData); // var headerOption = new HttpHeaders({'Content-Type':'application/json'});

          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + '/api/image-upload/profile', formData);
        }
      }, {
        key: "companyLogoUpload",
        value: function companyLogoUpload(data) {
          var formData = new FormData();
          formData.append("image", data, data.name);
          console.log('body', formData); // var headerOption = new HttpHeaders({'Content-Type':'application/json'});

          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + '/api/image-upload/logo', formData);
        }
      }]);

      return ImageUploadService;
    }();

    ImageUploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ImageUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ImageUploadService);
    /***/
  },

  /***/
  "./src/app/shared/user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/user.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./session.service */
    "./src/app/shared/session.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient, sessionService) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
        this.sessionService = sessionService;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users');
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/' + this.sessionService.getItem('_id'));
        }
      }, {
        key: "getUsersByCompany",
        value: function getUsersByCompany() {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/get-by-company/' + this.sessionService.getItem('company_id'));
        }
      }, {
        key: "addUser",
        value: function addUser(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users', body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/' + data._id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "updateAllUsers",
        value: function updateAllUsers(data) {
          var body = JSON.stringify(data);
          console.log('body', body);
          var headerOption = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/update-all-users/' + data.company_details_id, body, {
            headers: headerOption
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/' + id);
        } // updateUser(){
        //   return this.httpClient.put('/users')
        // }

      }, {
        key: "onCheckEmailExist",
        value: function onCheckEmailExist(data) {
          return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/api/users/check-email-exist/' + data);
        }
      }, {
        key: "addUserSocktet",
        value: function addUserSocktet() {
          var _this = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);

            _this.socket.on('add', function (data) {
              observer.next(data);
            });

            return function () {
              _this.socket.disconnect();
            };
          });
          return observable;
        }
      }, {
        key: "deleteUserSocktet",
        value: function deleteUserSocktet() {
          var _this2 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this2.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);

            _this2.socket.on('delete', function (data) {
              observer.next(data);
            });

            return function () {
              _this2.socket.disconnect();
            };
          });
          return observable;
        }
      }, {
        key: "updateUserSocktet",
        value: function updateUserSocktet() {
          var _this3 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this3.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);

            _this3.socket.on('update', function (data) {
              observer.next(data);
            });

            return function () {
              _this3.socket.disconnect();
            };
          });
          return observable;
        }
      }, {
        key: "statusUpdateUserSocktet",
        value: function statusUpdateUserSocktet() {
          var _this4 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this4.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url);

            _this4.socket.on('status', function (data) {
              observer.next(data);
            });

            return function () {
              _this4.socket.disconnect();
            };
          });
          return observable;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])], UserService);
    /***/
  }
}]);
//# sourceMappingURL=default~company-master-company-master-module~component-inventory-mngt-user-company-info-company-info~a6f9fd2d-es5.js.map