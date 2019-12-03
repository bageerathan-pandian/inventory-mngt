(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-user-master-user-master-module"],{

/***/ "./node_modules/primeng/components/inputswitch/inputswitch.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/inputswitch/inputswitch.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
exports.INPUTSWITCH_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return InputSwitch; }),
    multi: true
};
var InputSwitch = /** @class */ (function () {
    function InputSwitch(cd) {
        this.cd = cd;
        this.onChange = new core_1.EventEmitter();
        this.checked = false;
        this.focused = false;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputSwitch.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], InputSwitch.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InputSwitch.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InputSwitch.prototype, "readonly", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputSwitch.prototype, "onChange", void 0);
    InputSwitch = __decorate([
        core_1.Component({
            selector: 'p-inputSwitch',
            template: "\n        <div [ngClass]=\"{'ui-inputswitch ui-widget': true, 'ui-inputswitch-checked': checked, 'ui-state-disabled': disabled, 'ui-inputswitch-readonly': readonly, 'ui-inputswitch-focus': focused}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event, cb)\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.tabindex]=\"tabindex\" [checked]=\"checked\" (change)=\"onInputChange($event)\"\n                        (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [disabled]=\"disabled\" />\n            </div>\n            <span class=\"ui-inputswitch-slider\"></span>\n        </div>\n    ",
            providers: [exports.INPUTSWITCH_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], InputSwitch);
    return InputSwitch;
}());
exports.InputSwitch = InputSwitch;
var InputSwitchModule = /** @class */ (function () {
    function InputSwitchModule() {
    }
    InputSwitchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputSwitch],
            declarations: [InputSwitch]
        })
    ], InputSwitchModule);
    return InputSwitchModule;
}());
exports.InputSwitchModule = InputSwitchModule;
//# sourceMappingURL=inputswitch.js.map

/***/ }),

/***/ "./node_modules/primeng/components/password/password.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/password/password.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var Password = /** @class */ (function () {
    function Password(el, zone) {
        this.el = el;
        this.zone = zone;
        this.promptLabel = 'Enter a password';
        this.weakLabel = 'Weak';
        this.mediumLabel = 'Medium';
        this.strongLabel = 'Strong';
        this.feedback = true;
    }
    Object.defineProperty(Password.prototype, "showPassword", {
        set: function (show) {
            this.el.nativeElement.type = show ? 'text' : 'password';
        },
        enumerable: true,
        configurable: true
    });
    Password.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    Password.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    Password.prototype.updateFilledState = function () {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    };
    Password.prototype.createPanel = function () {
        this.panel = document.createElement('div');
        this.panel.className = 'ui-password-panel ui-widget ui-state-highlight ui-corner-all';
        this.meter = document.createElement('div');
        this.meter.className = 'ui-password-meter';
        this.info = document.createElement('div');
        this.info.className = 'ui-password-info';
        this.info.textContent = this.promptLabel;
        this.panel.appendChild(this.meter);
        this.panel.appendChild(this.info);
        this.panel.style.minWidth = domhandler_1.DomHandler.getOuterWidth(this.el.nativeElement) + 'px';
        document.body.appendChild(this.panel);
    };
    Password.prototype.onFocus = function (e) {
        var _this = this;
        if (this.feedback) {
            if (!this.panel) {
                this.createPanel();
            }
            this.panel.style.zIndex = String(++domhandler_1.DomHandler.zindex);
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    domhandler_1.DomHandler.addClass(_this.panel, 'ui-password-panel-visible');
                    domhandler_1.DomHandler.removeClass(_this.panel, 'ui-password-panel-hidden');
                }, 1);
                domhandler_1.DomHandler.absolutePosition(_this.panel, _this.el.nativeElement);
            });
        }
    };
    Password.prototype.onBlur = function (e) {
        var _this = this;
        if (this.feedback) {
            domhandler_1.DomHandler.addClass(this.panel, 'ui-password-panel-hidden');
            domhandler_1.DomHandler.removeClass(this.panel, 'ui-password-panel-visible');
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.ngOnDestroy();
                }, 150);
            });
        }
    };
    Password.prototype.onKeyup = function (e) {
        if (this.feedback) {
            var value = e.target.value, label = null, meterPos = null;
            if (value.length === 0) {
                label = this.promptLabel;
                meterPos = '0px 0px';
            }
            else {
                var score = this.testStrength(value);
                if (score < 30) {
                    label = this.weakLabel;
                    meterPos = '0px -10px';
                }
                else if (score >= 30 && score < 80) {
                    label = this.mediumLabel;
                    meterPos = '0px -20px';
                }
                else if (score >= 80) {
                    label = this.strongLabel;
                    meterPos = '0px -30px';
                }
            }
            this.meter.style.backgroundPosition = meterPos;
            this.info.textContent = label;
        }
    };
    Password.prototype.testStrength = function (str) {
        var grade = 0;
        var val;
        val = str.match('[0-9]');
        grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
        val = str.match('[a-zA-Z]');
        grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
        val = str.match('[!@#$%^&*?_~.,;=]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
        val = str.match('[A-Z]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
        grade *= str.length / 8;
        return grade > 100 ? 100 : grade;
    };
    Password.prototype.normalize = function (x, y) {
        var diff = x - y;
        if (diff <= 0)
            return x / y;
        else
            return 1 + 0.5 * (x / (x + y / 4));
    };
    Object.defineProperty(Password.prototype, "disabled", {
        get: function () {
            return this.el.nativeElement.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Password.prototype.ngOnDestroy = function () {
        if (this.panel) {
            document.body.removeChild(this.panel);
            this.panel = null;
            this.meter = null;
            this.info = null;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Password.prototype, "promptLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Password.prototype, "weakLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Password.prototype, "mediumLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Password.prototype, "strongLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Password.prototype, "feedback", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Password.prototype, "showPassword", null);
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Password.prototype, "onInput", null);
    __decorate([
        core_1.HostListener('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Password.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Password.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Password.prototype, "onKeyup", null);
    Password = __decorate([
        core_1.Directive({
            selector: '[pPassword]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone])
    ], Password);
    return Password;
}());
exports.Password = Password;
var PasswordModule = /** @class */ (function () {
    function PasswordModule() {
    }
    PasswordModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Password],
            declarations: [Password]
        })
    ], PasswordModule);
    return PasswordModule;
}());
exports.PasswordModule = PasswordModule;
//# sourceMappingURL=password.js.map

/***/ }),

/***/ "./node_modules/primeng/inputswitch.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/inputswitch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputswitch/inputswitch */ "./node_modules/primeng/components/inputswitch/inputswitch.js"));

/***/ }),

/***/ "./node_modules/primeng/password.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/password.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/password/password */ "./node_modules/primeng/components/password/password.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-master/user-master.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-master/user-master.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <p-breadcrumb [model]=\"bradCrum\"></p-breadcrumb>\n        <div style=\"margin-top: 15px;\">\n            <div *ngIf=\"loding\" style=\"text-align: center\">\n                    <p-progressSpinner  [style]=\"{width: '50px', height: '50px'}\"></p-progressSpinner>\n            </div>\n  <p-card *ngIf=\"!loding\" >\n       \n<p-table #dt  [value]=\"userList\"  [columns]=\"cols\" [paginator]=\"true\"  [rowsPerPageOptions]=\"[10,50,100]\" [globalFilterFields]=\"['user_name','user_pwd','role']\"  [rows]=\"10\"  dataKey=\"_id\">\n \n    <ng-template pTemplate=\"caption\">\n        <div class=\"ui-helper-clearfix\" >\n\n            <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button> -->\n            <!-- <button type=\"button\" pButton icon=\"fa fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button> -->\n        </div>\n        <div style=\"text-align: right\">        \n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"   style=\"width:auto\">\n        </div>\n    </ng-template>\n    <ng-template  pTemplate=\"header\" let-columns>\n            <tr>\n                  <th style=\"width: 3em\">\n                          <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                      </th>\n                  <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn >\n                          {{col.header}}\n                          <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n\n                      </th>\n            <th >\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" class=\"ui-button-success\"  iconPos=\"left\" (click)=\"showDialogToAdd()\" label=\"Add\" ></button>\n\n            </th>\n        </tr>\n        <!-- <tr>\n            <th ></th>\n            <th *ngFor=\"let col of columns\" pResizableColumn>\n                <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt.filters[col.field]?.value\">\n            </th>            \n            <th ></th>\n        </tr> -->\n       \n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData  let-ri=\"rowIndex\">\n            <tr [pEditableRow]=\"rowData\">\n                    <td>\n                            <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n                        </td>\n              <td>\n                    {{rowData.user_code}}\n              </td>\n            <td>              \n                    {{rowData.user_name}}\n            </td>\n            <td>              \n                    {{rowData.user_email}}\n            </td>\n            <td>\n                    {{rowData.user_pwd}}\n            </td>\n            <td>\n                    {{rowData.phone}}\n            </td>\n            <td style=\"text-align: center\">\n                                <span class=\"label label-default\" *ngIf=\"rowData.role == 0\">Overall Admin</span>\n                                <span class=\"label label-success\"  *ngIf=\"rowData.role == 1\">Company Admin</span>\n                                <span class=\"label label-info\"  *ngIf=\"rowData.role == 2\">Company Manager</span>\n                                <span class=\"label label-warning\"  *ngIf=\"rowData.role == 3\">Sales Person</span>\n        </td>\n            <td>\n                    {{rowData.updatedAt | date:'medium'}}\n            </td>\n            <td style=\"text-align: center\">\n                <p-inputSwitch [(ngModel)]=\"rowData.status\" (onChange)=\"onChangeStatus($event)\"></p-inputSwitch> \n            </td>\n            <td style=\"text-align:center\">\n                <button  pButton type=\"button\"  icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEdit(rowData)\" style=\"    margin: 0px 5px;\"></button>\n                <!-- <button  pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button> -->\n                <button  pButton type=\"button\"  icon=\"pi pi-trash\" class=\"ui-button-danger\" (click)=\"delete(rowData, ri)\" style=\"    margin: 0px 5px;\" ></button>\n            </td>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"footer\" >\n            <tr>\n               <td colspan=\"10\" style=\"text-align: center\">\n                       There are {{userList?.length}} records\n               </td>\n           </tr>\n           \n       </ng-template>\n   \n\n</p-table>\n\n<p-dialog  [(visible)]=\"displayDialog\" [maximizable]=\"true\" [responsive]=\"true\" showEffect=\"fade\" [resizable]=\"false\" [modal]=\"true\"  [style]=\"{width: '700px'}\">\n        <p-header>\n                <span *ngIf=\"userForm.value._id\">Update</span>\n                <span *ngIf=\"!userForm.value._id\">Add</span> User\n        </p-header>\n        <div class=\"profile-wrapper\">\n    <form [formGroup]=\"userForm\"> \n            <div class=\"ui-g ui-fluid\" >\n                    <div class=\"ui-g-6\">\n                    <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"vin\">Code</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                <input pInputText  formControlName=\"user_code\" disabled />\n                            </div>\n                        </div>\n                    <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"vin\">Full Name</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                            <input pInputText formControlName=\"user_name\" autofocus />\n                        </div>\n                    </div>\n                    <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"vin\">User Email</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                    <div class=\"ui-inputgroup\">\n                                            <input pInputText formControlName=\"user_email\" emailExist (focusout)=\"onCheckEmailExist()\" />\n                                            <button pButton type=\"button\" icon=\"pi pi-spin  pi-spinner\" class=\"ui-button-warn\" *ngIf=\"emailCheckStatus == 0\"></button>    \n                                            <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\" *ngIf=\"emailCheckStatus == 1\"></button>    \n                                            <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" *ngIf=\"emailCheckStatus == 2\"></button>   \n                      \n                                        </div>\n                            </div>\n                        </div>\n                    <!-- <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"vin\">User Email</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                            <input pInputText formControlName=\"user_email\" emailExist (focusout)=\"onCheckEmailExist()\" />\n                        </div>\n                    </div> -->\n                    <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"year\">User Password</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                            <input type=\"password\" pPassword formControlName=\"user_pwd\" />\n                        </div>\n                    </div>\n                    <div class=\"ui-g-12\">\n                        <div class=\"ui-g-4\">\n                            <label for=\"year\">Confirm Password</label>\n                        </div>\n                        <div class=\"ui-g-8\">\n                            <input type=\"password\" pPassword formControlName=\"cnfirm_user_pwd\" />\n                        </div>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"year\">Phone</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                    <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask>\n                                </div>\n                        </div>\n                    \n            </div>\n            <div class=\"ui-g-6\">\n                    <div class=\"profile-wrap\" style=\"text-align: center;\">\n                            <div class=\"prof-img\">\n                                <img src=\"./assets/img/userface.jpg\" class=\"car-add\" *ngIf=\"!croppedImage\">\n                                <img [src]=\"croppedImage\" *ngIf=\"croppedImage\" class=\"car-addafter\" >\n                                <img src=\"{{IMG_URL}}/assets/lease_intake/img/loading-preview.gif\" class=\"loadingimg car-addafter\" *ngIf=\"logoLoading\">\n                            </div>\n                            <button class=\"cmn-btn\" type=\"button\" style=\"border:none;float:initial;font-size: 12px !important;background: #ef6a97;margin-top: 15px;position: relative;\">\n                                <input #upload_logofile type=\"file\" accept=\".png, .jpg, .jpeg\" style=\"position:absolute;display:inline-block;opacity:0;width:100%;left: 0;\"\n                                (change)=\"fileChangeEvent($event.target.files)\"/>\n                                <i class=\"pi pi-cloud-upload\" style=\"font-size:23px;\"></i>Upload Profile</button>\n                        </div>\n                        <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"year\">Role</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                <p-dropdown [options]=\"roleList\" formControlName=\"role\" placeholder=\"Select Role\" filter=\"true\" >\n                                </p-dropdown>\n                            </div>\n                        </div>\n                        <div class=\"ui-g-12\">\n                            <div class=\"ui-g-4\">\n                                <label for=\"brand\">Status</label>\n                            </div>\n                            <div class=\"ui-g-8\">\n                                <p-dropdown [options]=\"status\" placeholder=\"Select Status\" formControlName=\"status\"></p-dropdown>\n                \n                            </div>\n                        </div>\n                </div>\n    \n            </div>\n            </form>\n            </div>\n            <p-footer>\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                        <!-- <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete(car)\" label=\"Delete\"></button> -->\n                        <button type=\"button\" pButton  icon=\"actionLoding ? 'pi pi-save' : 'pi pi-spin pi-spinner'\" class=\"ui-button-success\" (click)=\"save()\" label=\"Save\"></button>\n                    </div>\n                </p-footer>\n</p-dialog>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" #cd>\n<p-footer>\n        <button pButton type=\"button\" label=\"Yes\" class=\"ui-button-success\" (click)=\"cd.accept()\"></button>        \n        <button pButton type=\"button\" label=\"No\" class=\"ui-button-danger\" (click)=\"cd.reject()\"></button>\n    </p-footer>\n</p-confirmDialog>\n\n</p-card>\n</div>\n");

/***/ }),

/***/ "./src/app/component/user-master/user-master-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/user-master/user-master-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMasterRoutingModule", function() { return UserMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-master.component */ "./src/app/component/user-master/user-master.component.ts");




const routes = [
    { path: '', component: _user_master_component__WEBPACK_IMPORTED_MODULE_3__["UserMasterComponent"] }
];
let UserMasterRoutingModule = class UserMasterRoutingModule {
};
UserMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserMasterRoutingModule);



/***/ }),

/***/ "./src/app/component/user-master/user-master.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/user-master/user-master.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-wrapper {\n  background: #fff;\n}\n.profile-wrapper h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n.profile-wrapper h4 span {\n  padding-top: 5px;\n  color: #c7c7c7;\n}\n.profile-wrapper button:focus {\n  outline: none;\n}\n.profile-wrapper .cmn-btn {\n  float: right;\n  padding: 3px 21px !important;\n  border-radius: 23px !important;\n  background: #08bd65;\n  color: #fff !important;\n  font-size: 15px !important;\n  text-transform: uppercase;\n  padding-left: 15px !important;\n  border: none;\n}\n.profile-wrapper .cmn-btn i {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px;\n}\n.profile-wrapper .profile-wrap {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  text-align: center;\n  height: 193px;\n  padding: 15px;\n  margin-bottom: 25px;\n}\n.profile-wrapper .profile-wrap .prof-img {\n  width: 115px;\n  height: 115px;\n  position: relative;\n  box-shadow: 0 0 10px #d4d4d4;\n  border-radius: 100%;\n  margin: auto;\n}\n.profile-wrapper .profile-wrap .prof-img img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXItbWFzdGVyL0U6XFxvd253YXlzb2Z0LmNvbVxcaW52ZW50b3J5LW1uZ3RcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50XFx1c2VyLW1hc3RlclxcdXNlci1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC91c2VyLW1hc3Rlci91c2VyLW1hc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURBQztFQUNJLGVBQUE7RUFBZSx5QkFBQTtFQUEwQixtQkFBQTtBQ0k5QztBREZFO0VBQ0csZ0JBQUE7RUFBb0IsY0FBQTtBQ0t6QjtBREZDO0VBQ0ksYUFBQTtBQ0lMO0FERkM7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFBa0MsWUFBQTtBQ0t2QztBRERDO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHTDtBREFDO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VMO0FEREs7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHVDtBREZTO0VBQ0ksZUFBQTtFQUFlLGdCQUFBO0VBQWdCLGtCQUFBO0VBQW1CLE1BQUE7RUFBTSxPQUFBO0VBQU8sUUFBQTtFQUFRLFNBQUE7RUFBUyxZQUFBO0VBQVksbUJBQUE7QUNZekciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdXNlci1tYXN0ZXIvdXNlci1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gaDR7XHJcbiAgICAgZm9udC1zaXplOjE4cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjI1cHg7XHJcbiB9XHJcbiAgaDQgc3BhbntcclxuICAgICBwYWRkaW5nLXRvcDo1cHg7ICAgIGNvbG9yOiAjYzdjN2M3O1xyXG4gfVxyXG4gXHJcbiBidXR0b246Zm9jdXMge1xyXG4gICAgIG91dGxpbmU6IG5vbmU7XHJcbiB9XHJcbiAuY21uLWJ0biB7XHJcbiAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIHBhZGRpbmc6IDNweCAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQ6ICMwOGJkNjU7XHJcbiAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50OyAgICBib3JkZXI6IG5vbmU7XHJcbiAgXHJcbiB9XHJcbiBcclxuIC5jbW4tYnRuIGkge1xyXG4gICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgIGhlaWdodDogMjVweDtcclxuICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiB9XHJcbiBcclxuIC5wcm9maWxlLXdyYXB7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGhlaWdodDogMTkzcHg7XHJcbiAgICAgcGFkZGluZzogMTVweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgIC5wcm9mLWltZ3tcclxuICAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkNGQ0ZDQ7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiB9XHJcbiB9IiwiLnByb2ZpbGUtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucHJvZmlsZS13cmFwcGVyIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnByb2ZpbGUtd3JhcHBlciBoNCBzcGFuIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgY29sb3I6ICNjN2M3Yzc7XG59XG4ucHJvZmlsZS13cmFwcGVyIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5jbW4tYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAzcHggMjFweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMwOGJkNjU7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnByb2ZpbGUtd3JhcHBlciAuY21uLWJ0biBpIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtd3JhcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDE5M3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS13cmFwIC5wcm9mLWltZyB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZDRkNGQ0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvZmlsZS13cmFwcGVyIC5wcm9maWxlLXdyYXAgLnByb2YtaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/user-master/user-master.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/user-master/user-master.component.ts ***!
  \****************************************************************/
/*! exports provided: UserMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMasterComponent", function() { return UserMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/company.service */ "./src/app/shared/company.service.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/image-upload.service */ "./src/app/shared/image-upload.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_12__);














let UserMasterComponent = class UserMasterComponent {
    constructor(router, auth, companyService, _fb, confirmationService, messageService, userService, commonService, imageUploadService) {
        this.router = router;
        this.auth = auth;
        this.companyService = companyService;
        this._fb = _fb;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.userService = userService;
        this.commonService = commonService;
        this.imageUploadService = imageUploadService;
        this.loding = true;
        this.actionLoding = true;
        this.status = [];
        this.companyList = [];
        this.roleList = [];
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_12__(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].api_url);
        this.bradCrum = [
            { label: '', icon: 'pi pi-home', command: (event) => {
                    this.router.navigate(['/dashboard']);
                }
            },
            { label: 'Master', command: (event) => {
                    this.router.navigate(['/dashboard']);
                } },
            { label: 'Users' },
        ];
        if (this.auth.getUserData().role == '0') {
            this.roleList = [
                { label: 'Admin', value: 1 },
                { label: 'Manager', value: 2 },
                { label: 'Sales Person', value: 3 },
            ];
        }
        else if (this.auth.getUserData().role == '1') {
            this.roleList = [
                { label: 'Manager', value: 2 },
                { label: 'Sales Person', value: 3 },
            ];
        }
        else if (this.auth.getUserData().role == '2') {
            this.roleList = [
                { label: 'Sales Person', value: 3 },
            ];
        }
        this.status = [
            { label: 'Active', value: 1 },
            { label: 'De-Active', value: 0 },
        ];
        this.userForm = this._fb.group({
            _id: [''],
            user_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            user_image: [''],
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
            user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cnfirm_user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            company_details_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.cols = [
            // { field: '_id', header: '#' },
            { field: 'user_code', header: 'Code' },
            { field: 'user_name', header: 'User Name' },
            { field: 'user_email', header: 'Email' },
            { field: 'user_pwd', header: 'Password' },
            { field: 'phone', header: 'Phone' },
            { field: 'role', header: 'Role' },
            { field: 'updatedAt', header: 'Updated Date' },
            { field: 'status', header: 'Status' }
            // { field: '', header: 'Action' }
        ];
    }
    ngOnInit() {
        // if(this.user_details.role == '0'){
        //   this.getUser();
        // }else{
        this.getUserByCompany(this.auth.getUserCompanyId());
        // }
        this.getCompany();
    }
    getCompany() {
        this.companyService.getCompany()
            .subscribe((data) => {
            console.log('companyList', data);
            this.companyList = data;
        });
    }
    getUser() {
        this.userService.getUsers()
            .subscribe((data) => {
            console.log('userList', data);
            this.userList = data;
            this.loding = false;
        });
    }
    getUserByCompany(id) {
        this.userService.getUsersByCompany(id)
            .subscribe((data) => {
            console.log('userList', data);
            this.userList = data;
            this.loding = false;
        });
    }
    showDialogToAdd() {
        console.log(this.userForm);
        this.userForm.reset();
        this.userForm.controls['user_code'].setValue(this.commonService.incrCode('u', this.userList.length));
        this.userForm.controls['status'].setValue(1);
        this.userForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id);
        this.displayDialog = true;
    }
    checkValidity() {
        Object.keys(this.userForm.controls).forEach((key) => {
            this.userForm.controls[key].markAsDirty();
        });
    }
    save() {
        console.log(this.userForm);
        if (this.userForm.invalid) {
            this.checkValidity();
            return;
        }
        console.log(this.userForm.value);
        if (this.userForm.value._id) {
            if (this.imageChangedEvent) {
                this.profileImageUpload();
            }
            else {
                this.onRowUpdate(this.userForm.value);
            }
        }
        else {
            if (this.imageChangedEvent) {
                this.profileImageUpload();
            }
            else {
                this.onRowAdd(this.userForm.value);
            }
        }
    }
    delete(data, index) {
        console.log('delete', data, index);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this user?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.onRowDelete(data, index);
            }
        });
    }
    onRowAdd(user) {
        console.log('onRowAdd', user);
        // this.cars.push(newcar); 
        this.userService.addUser(user)
            .subscribe((data) => {
            console.log('add user', data);
            this.userList = [data, ...this.userList];
            this.socket.emit('addTodo', data);
            console.log('this.userList', this.userList);
            this.messageService.add({ severity: 'success', summary: 'User Added Successfully', detail: 'User Added Successfully' });
            this.displayDialog = false;
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowEdit(user) {
        console.log('onRowEdit', user);
        this.displayDialog = true;
        this.userForm.controls['_id'].setValue(user._id);
        this.userForm.controls['company_details_id'].setValue(user.company_details_id._id);
        this.userForm.controls['role'].setValue(user.role);
        this.userForm.controls['user_code'].setValue(user.user_code);
        this.userForm.controls['user_name'].setValue(user.user_name);
        this.userForm.controls['user_image'].setValue(user.user_image);
        this.userForm.controls['user_email'].setValue(user.user_email);
        this.userForm.controls['user_pwd'].setValue(user.user_pwd);
        this.userForm.controls['cnfirm_user_pwd'].setValue(user.cnfirm_user_pwd);
        this.userForm.controls['phone'].setValue(user.phone);
        this.userForm.controls['status'].setValue(user.status);
        this.emailCheckStatus = user.user_email ? 1 : null;
        this.croppedImage = user.user_image ? user.user_image : '';
    }
    onRowDelete(user, index) {
        console.log(user, index);
        this.userService.deleteUser(user._id)
            .subscribe((data) => {
            console.log('delete', data);
            this.userList.splice(index, 1);
            this.userList = [...this.userList];
            this.messageService.add({ severity: 'success', summary: 'User Deleted Successfully', detail: 'User Deleted Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onRowUpdate(user) {
        console.log('onRowUpdate', user);
        this.displayDialog = false;
        // this.userForm.controls.updateValueAndValidity();
        this.userService.updateUser(user)
            .subscribe((data) => {
            console.log('update', data);
            this.socket.emit('updateTodo', data);
            var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.userList, function (o) { return o._id == user._id; });
            console.log(sliceIndex);
            if (sliceIndex > -1) {
                // Replace item at index using native splice
                this.userList.splice(sliceIndex, 1, data);
            }
            this.userList = [...this.userList];
            this.messageService.add({ severity: 'success', summary: 'User Updated Successfully', detail: 'User Updated Successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
        });
    }
    onChangeStatus(event) {
        console.log(event);
        let isChecked = event.checked;
    }
    profileImageUpload() {
        this.imageUploadService.profileImageUpload(this.imageChangedEvent)
            .subscribe((data) => {
            console.log(data);
            this.userForm.controls['user_image'].setValue(data);
            if (this.userForm.value._id) {
                this.onRowUpdate(this.userForm.value);
            }
            else {
                this.onRowAdd(this.userForm.value);
            }
        });
    }
    fileChangeEvent(file) {
        console.log(file);
        this.imageChangedEvent = file.item(0);
        console.log('imageChangedEvent', this.imageChangedEvent);
        // show image preview
        var render = new FileReader();
        render.onloadend = (e) => {
            console.log('reslt', render);
            this.croppedImage = render.result;
        };
        render.readAsDataURL(this.imageChangedEvent);
    }
    onCheckEmailExist() {
        console.log('valid', this.userForm.controls['user_email'].invalid);
        if (this.userForm.value.user_email != '' && this.userForm.controls['user_email'].invalid) {
            this.emailCheckStatus = null;
            return false;
        }
        this.emailCheckStatus = null;
        console.log('onCheckEmailExist', this.userForm.value.user_email);
        let _id = this.userForm.value._id;
        var sliceIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.userList, function (o) { return o._id == _id; });
        console.log(sliceIndex);
        if (sliceIndex > -1) {
            if (this.userList[sliceIndex].user_email == this.userForm.value.user_email) { // when not change
                this.emailCheckStatus = 1;
                return false;
            }
        }
        this.emailCheckStatus = 0;
        this.userService.onCheckEmailExist(this.userForm.value.user_email)
            .subscribe((data) => {
            console.log('data', data);
            if (data.length != 0) {
                this.emailCheckStatus = 2;
                this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Email already exist!' });
                this.userForm.controls['user_email'].setErrors({ 'emailExist': true });
                this.userForm.controls['user_email'].markAsDirty();
            }
            else {
                this.messageService.clear();
                this.emailCheckStatus = 1;
                this.userForm.controls['user_email'].setErrors({ 'emailExist': null });
                this.userForm.controls['user_email'].updateValueAndValidity();
            }
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
};
UserMasterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_10__["ImageUploadService"] }
];
UserMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-master/user-master.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-master.component.scss */ "./src/app/component/user-master/user-master.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], src_app_shared_image_upload_service__WEBPACK_IMPORTED_MODULE_10__["ImageUploadService"]])
], UserMasterComponent);



/***/ }),

/***/ "./src/app/component/user-master/user-master.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/user-master/user-master.module.ts ***!
  \*************************************************************/
/*! exports provided: UserMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMasterModule", function() { return UserMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-master-routing.module */ "./src/app/component/user-master/user-master-routing.module.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _user_master_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-master.component */ "./src/app/component/user-master/user-master.component.ts");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__);




















let UserMasterModule = class UserMasterModule {
};
UserMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_master_component__WEBPACK_IMPORTED_MODULE_15__["UserMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserMasterRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_11__["PasswordModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_14__["ToastModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__["InputSwitchModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__["InputMaskModule"]
        ]
    })
], UserMasterModule);



/***/ }),

/***/ "./src/app/shared/common.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/common.service.ts ***!
  \******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonService = class CommonService {
    constructor() { }
    leftPad(type, number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return type + '-' + output;
    }
    incrCode(type, count) {
        let cCode = Number(count) + 1;
        console.log('cCode', cCode);
        return this.leftPad(type, cCode, 4);
    }
};
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommonService);



/***/ })

}]);
//# sourceMappingURL=component-user-master-user-master-module-es2015.js.map