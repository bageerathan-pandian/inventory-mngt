(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-register-register-module"],{

/***/ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js")) :
	undefined;
}(this, (function (exports,_angular_core) { 'use strict';

var Options = (function () {
    /**
     * @param {?=} opt
     */
    function Options(opt) {
        if (!opt)
            return;
        Object.assign(this, opt);
    }
    return Options;
}());

var GooglePlaceDirective = (function () {
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
        if (!this.options)
            this.options = new Options();
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
        if (!this.isGoogleLibExists())
            throw new Error("Google maps library can not be found");
        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
        if (!this.autocomplete)
            throw new Error("Autocomplete is not initialized");
        if (!this.autocomplete.addListener != null) {
            this.eventListener = this.autocomplete.addListener('place_changed', function () {
                _this.handleChangeEvent();
            });
        }
        this.el.nativeElement.addEventListener('keydown', function (event) {
            if (!event.key) {
                return;
            }
            var /** @type {?} */ key = event.key.toLowerCase();
            if (key == 'enter' && event.target === _this.el.nativeElement) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
        // according to https://gist.github.com/schoenobates/ef578a02ac8ab6726487
        if (window && window.navigator && window.navigator.userAgent && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
            setTimeout(function () {
                var /** @type {?} */ containers = document.getElementsByClassName('pac-container');
                if (containers) {
                    var /** @type {?} */ arr = Array.from(containers);
                    if (arr) {
                        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                            var container = arr_1[_i];
                            if (!container)
                                continue;
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
    GooglePlaceDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[ngx-google-places-autocomplete]',
                    exportAs: 'ngx-places'
                },] },
    ];
    /**
     * @nocollapse
     */
    GooglePlaceDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.NgZone, },
    ]; };
    GooglePlaceDirective.propDecorators = {
        'options': [{ type: _angular_core.Input, args: ['options',] },],
        'onAddressChange': [{ type: _angular_core.Output },],
    };
    return GooglePlaceDirective;
}());

var GooglePlaceModule = (function () {
    function GooglePlaceModule() {
    }
    GooglePlaceModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [GooglePlaceDirective],
                    exports: [GooglePlaceDirective]
                },] },
    ];
    /**
     * @nocollapse
     */
    GooglePlaceModule.ctorParameters = function () { return []; };
    return GooglePlaceModule;
}());

exports.GooglePlaceModule = GooglePlaceModule;
exports.GooglePlaceDirective = GooglePlaceDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/primeng/captcha.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/captcha.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/captcha/captcha */ "./node_modules/primeng/components/captcha/captcha.js"));

/***/ }),

/***/ "./node_modules/primeng/components/captcha/captcha.js":
/*!************************************************************!*\
  !*** ./node_modules/primeng/components/captcha/captcha.js ***!
  \************************************************************/
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
var Captcha = /** @class */ (function () {
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
            }
            else {
                this.init();
            }
        }
        else {
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
            'callback': function (response) { _this._zone.run(function () { return _this.recaptchaCallback(response); }); },
            'expired-callback': function () { _this._zone.run(function () { return _this.recaptchaExpiredCallback(); }); }
        });
    };
    Captcha.prototype.reset = function () {
        if (this._instance === null)
            return;
        window.grecaptcha.reset(this._instance);
    };
    Captcha.prototype.getResponse = function () {
        if (this._instance === null)
            return null;
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Captcha.prototype, "siteKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Captcha.prototype, "theme", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Captcha.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Captcha.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Captcha.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Captcha.prototype, "language", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Captcha.prototype, "initCallback", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Captcha.prototype, "onResponse", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Captcha.prototype, "onExpire", void 0);
    Captcha = __decorate([
        core_1.Component({
            selector: 'p-captcha',
            template: "<div></div>"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone])
    ], Captcha);
    return Captcha;
}());
exports.Captcha = Captcha;
var CaptchaModule = /** @class */ (function () {
    function CaptchaModule() {
    }
    CaptchaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Captcha],
            declarations: [Captcha]
        })
    ], CaptchaModule);
    return CaptchaModule;
}());
exports.CaptchaModule = CaptchaModule;
//# sourceMappingURL=captcha.js.map

/***/ }),

/***/ "./node_modules/primeng/components/messages/messages.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/messages/messages.js ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
var messageservice_1 = __webpack_require__(/*! ../common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
var Messages = /** @class */ (function () {
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
                        var filteredMessages = messages.filter(function (m) { return _this.key === m.key; });
                        _this.value = _this.value ? _this.value.concat(filteredMessages) : filteredMessages.slice();
                    }
                    else if (_this.key === messages.key) {
                        _this.value = _this.value ? _this.value.concat([messages]) : [messages];
                    }
                }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
                if (key) {
                    if (_this.key === key) {
                        _this.value = null;
                    }
                }
                else {
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
        get: function () {
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Messages.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Messages.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Messages.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Messages.prototype, "enableService", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "showTransitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "hideTransitionOptions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Messages.prototype, "valueChange", void 0);
    Messages = __decorate([
        core_1.Component({
            selector: 'p-messages',
            template: "\n        <div *ngIf=\"hasMessages()\" class=\"ui-messages ui-widget ui-corner-all\"\n                    [ngClass]=\"{'ui-messages-info':(value[0].severity === 'info'),\n                    'ui-messages-warn':(value[0].severity === 'warn'),\n                    'ui-messages-error':(value[0].severity === 'error'),\n                    'ui-messages-success':(value[0].severity === 'success')}\"\n                    [ngStyle]=\"style\" [class]=\"styleClass\" [@messageAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\">\n            <a tabindex=\"0\" class=\"ui-messages-close\" (click)=\"clear($event)\" (keydown.enter)=\"clear($event)\" *ngIf=\"closable\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n            <span class=\"ui-messages-icon pi\" [ngClass]=\"icon\"></span>\n            <ul>\n                <li *ngFor=\"let msg of value\">\n                    <span *ngIf=\"msg.summary\" class=\"ui-messages-summary\" [innerHTML]=\"msg.summary\"></span>\n                    <span *ngIf=\"msg.detail\" class=\"ui-messages-detail\" [innerHTML]=\"msg.detail\"></span>\n                </li>\n            </ul>\n        </div>\n    ",
            animations: [
                animations_1.trigger('messageAnimation', [
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateY(-25%)', opacity: 0 }),
                        animations_1.animate('{{showTransitionParams}}')
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate(('{{hideTransitionParams}}'), animations_1.style({
                            opacity: 0,
                            transform: 'translateY(-25%)'
                        }))
                    ])
                ])
            ]
        }),
        __param(0, core_1.Optional()),
        __metadata("design:paramtypes", [messageservice_1.MessageService])
    ], Messages);
    return Messages;
}());
exports.Messages = Messages;
var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Messages],
            declarations: [Messages]
        })
    ], MessagesModule);
    return MessagesModule;
}());
exports.MessagesModule = MessagesModule;
//# sourceMappingURL=messages.js.map

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

/***/ "./node_modules/primeng/components/radiobutton/radiobutton.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/radiobutton/radiobutton.js ***!
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
exports.RADIO_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RadioButton; }),
    multi: true
};
var RadioButton = /** @class */ (function () {
    function RadioButton(cd) {
        this.cd = cd;
        this.onClick = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
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
        this.checked = (value == this.value);
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RadioButton.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RadioButton.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RadioButton.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RadioButton.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "labelStyleClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioButton.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioButton.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioButton.prototype, "onBlur", void 0);
    __decorate([
        core_1.ViewChild('rb', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], RadioButton.prototype, "inputViewChild", void 0);
    RadioButton = __decorate([
        core_1.Component({
            selector: 'p-radioButton',
            template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"'ui-radiobutton ui-widget'\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #rb type=\"radio\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.value]=\"value\" [attr.tabindex]=\"tabindex\" \n                    [checked]=\"checked\" (change)=\"onChange($event)\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" [disabled]=\"disabled\">\n            </div>\n            <div (click)=\"handleClick($event, rb, true)\"\n                [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':rb.checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'pi pi-circle-on':rb.checked}\"></span>\n            </div>\n        </div>\n        <label (click)=\"select($event)\" [class]=\"labelStyleClass\"\n            [ngClass]=\"{'ui-radiobutton-label':true, 'ui-label-active':rb.checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n            *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
            providers: [exports.RADIO_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], RadioButton);
    return RadioButton;
}());
exports.RadioButton = RadioButton;
var RadioButtonModule = /** @class */ (function () {
    function RadioButtonModule() {
    }
    RadioButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [RadioButton],
            declarations: [RadioButton]
        })
    ], RadioButtonModule);
    return RadioButtonModule;
}());
exports.RadioButtonModule = RadioButtonModule;
//# sourceMappingURL=radiobutton.js.map

/***/ }),

/***/ "./node_modules/primeng/messages.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/messages.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/messages/messages */ "./node_modules/primeng/components/messages/messages.js"));

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

/***/ "./node_modules/primeng/radiobutton.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/radiobutton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/radiobutton/radiobutton */ "./node_modules/primeng/components/radiobutton/radiobutton.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner  bdOpacity = 0.1  bdColor = \"rgba(255,255,255,0.9)\"  size = \"default\"  color = \"#060606\"  type = \"ball-clip-rotate\"  [fullScreen] = \"false\"  >\n        <p style=\"color: #000\" > Registering... </p>\n</ngx-spinner>\n\n<div  class=\"ui-g-12 ui-md-6 ui-md-offset-3\">\n    \n    <p-messages class=\"ui-g-12\" styleClass=\"loagin-wrapper\" ></p-messages>\n    <div class=\"ui-g-12\"  style=\"text-align: center;position: relative;height: 100px;\">\n        <a routerLink=\"/login\">\n          <img src=\"Card\" src=\"./assets/img/comp_logo.png\" style=\"    max-height: 100%;  max-width: 100%;   left: 0;   right: 0;    top: 0;     bottom: 0;   margin: auto;\">\n        </a>\n    </div>\n\n<div  class=\"register-form ui-g-12\">\n              \n\n<p-card *ngIf=\"!successRegister\" >\n        <div class=\"\">\n                <h2>Registration</h2>\n                <span>You can register free!</span>\n            </div>\n  <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\n\n  <form [formGroup]=\"planForm\" *ngIf=\"activeIndex == 0\"> \n    <div class=\"ui-g ui-fluid\" >\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\n                    \n                    <p-card header=\"Free* / 30 days\" subheader=\"*30 days only trail\"  styleClass=\"ui-card-shadow\">\n                        <p-header>\n                                <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;float: right;margin: 10px;\"  *ngIf=\"planForm.value.plan_type == '0'\"></i>\n                        </p-header>\n                               <div>\n                                   <ul>\n                                        <ol> Product entry allow 50 only </ol>\n                                        <ol> Product allowd only 30 days </ol>\n                                    </ul>\n                               </div>\n                            <p-footer>\n                                <button pButton type=\"button\" label=\"Free*\"  class=\"ui-button-secondary\" (click)=\"selectPlanType(0)\"></button>\n                            </p-footer>\n                        </p-card>\n                    <!-- <p-radioButton name=\"plan_type\" value=\"0\" label=\"Free Plan\" formControlName=\"plan_type\" ></p-radioButton> -->\n            </div>\n            <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\n                \n                    <p-card header=\"Paid\" subheader=\"One time payment\"  styleClass=\"ui-card-shadow\">\n                            <p-header>\n                                    <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;float: right;   margin: 10px;\"  *ngIf=\"planForm.value.plan_type == '1'\"></i>\n                                </p-header>\n                            <div>\n                                    <ul>\n                                         <ol> Unlimited product entry</ol>\n                                         <ol> Long time support </ol>\n                                     </ul>\n                                </div>\n                                   <p-footer>\n                                <button pButton type=\"button\" label=\"$15,000\"  style=\"margin-right: .25em\" (click)=\"selectPlanType(1)\"></button>\n                            </p-footer>\n                        </p-card>\n                <!-- <p-radioButton name=\"plan_type\" value=\"1\" label=\"Premium Plan\" formControlName=\"plan_type\" ></p-radioButton> -->\n            </div>\n        </div>\n    </div>\n    <!-- <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n            <button type=\"button\" pButton  icon=\"pi pi-angle-right\" conPos=\"right\" class=\"ui-button-success\" (click)=\"onSaveData(1)\" label=\"Next\" style=\"float: right;\"></button>\n        </div>\n    </p-footer> -->\n  </form>\n  <form [formGroup]=\"companyForm\" *ngIf=\"activeIndex == 1\"> \n    <div class=\"ui-g ui-fluid\" >\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"vin\">Company Name</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input pInputText  formControlName=\"company_name\" autofocus />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Owner Name</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input pInputText  formControlName=\"owner_name\"  />\n            </div>\n        </div>\n         <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Company Address</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input pInputText  formControlName=\"company_address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\n\n                <!-- <input pInputText  formControlName=\"company_address\" /> -->\n\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Phone</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask>\n\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"year\">GSTIN</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText  formControlName=\"gstin\"  />\n                </div>\n            </div>\n    </div>\n    <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"pi pi-angle-left\" (click)=\"back(0)\" label=\"Back\" style=\"float: left;\"></button>\n            <button type=\"button\" pButton  icon=\"pi pi-angle-right\" conPos=\"right\" class=\"ui-button-success\" (click)=\"onSaveData(2)\" label=\"Next\" style=\"float: right;\"></button>\n        </div>\n    </p-footer>\n  </form>\n    <form  [formGroup]=\"userForm\"  *ngIf=\"activeIndex == 2\"> \n        <div class=\"ui-g ui-fluid\" >\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">Full Name</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <input pInputText  formControlName=\"user_name\"  autofocus />\n                    </div>\n                </div>\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"vin\">User Email</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                            <div class=\"ui-inputgroup\">\n                                    <input pInputText  formControlName=\"user_email\" pKeyFilter=\"email\" placeholder=\"admin@example.com\"  emailExist (focusout)=\"onCheckEmailExist()\" />\n                                    <button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-warn\" *ngIf=\"emailCheckStatus == 0\"></button>    \n                                    <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\" *ngIf=\"emailCheckStatus == 1\"></button>    \n                                    <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" *ngIf=\"emailCheckStatus == 2\"></button>   \n              \n                                </div>\n                    </div>\n                    \n                </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"year\">User Password</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input type=\"password\" formControlName=\"user_pwd\" pPassword nopasswordmatch (focusout)=\"passwordMatch()\" />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"year\">Confirm Password</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input type=\"password\" formControlName=\"cnfirm_user_pwd\" pPassword nopasswordmatch (focusout)=\"passwordMatch()\"  />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                    <div class=\"ui-g-4\">\n                        <label for=\"year\">Phone</label>\n                    </div>\n                    <div class=\"ui-g-8\">\n                        <p-inputMask formControlName=\"phone\" mask=\"99-99999-99999\" placeholder=\"99-99999-99999\"  slotChar=\" \"></p-inputMask>\n        \n                    </div>\n                </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"pi pi-angle-left\" (click)=\"back(1)\" label=\"Back\" style=\"float: left;\"></button>\n                <button type=\"button\" pButton  icon=\"pi pi-angle-right\" conPos=\"right\" class=\"ui-button-success\" (click)=\"onSaveData(3)\" label=\"Next\" style=\"float: right;\"></button>\n            </div>\n        </p-footer>\n      </form>\n            <div  *ngIf=\"activeIndex == 3\"> \n                <div class=\"ui-g ui-fluid\" >\n                    <div class=\"ui-g-12\">\n                        Plane type: \n                        <div class=\"ui-g-12\">\n                                <div class=\"ui-g-4\">\n                                    <label for=\"vin\">Plan Type</label>\n                                </div>\n                                <div class=\"ui-g-8\">\n                                      \n                                        <span class=\"label label-warning\" *ngIf=\"planForm.value.plan_type == '0'\" >Free Account</span>\n                                        <span class=\"label label-success\" *ngIf=\"planForm.value.plan_type == '1'\" >Paid Account</span>\n                                </div>\n                            </div>\n                            <div class=\"ui-g-12\">\n                                    <div class=\"ui-g-4\">\n                                        <label for=\"vin\">Company Name</label>\n                                    </div>\n                                    <div class=\"ui-g-8\">\n                                      {{companyForm.value.company_name}}\n                                    </div>\n                                </div>\n                                <div class=\"ui-g-12\">\n                                        <div class=\"ui-g-4\">\n                                            <label for=\"vin\">Company Address</label>\n                                        </div>\n                                        <div class=\"ui-g-8\">\n                                          {{companyForm.value.company_address}}\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-g-12\">\n                                            <div class=\"ui-g-4\">\n                                                <label for=\"vin\">User Name</label>\n                                            </div>\n                                            <div class=\"ui-g-8\">\n                                              {{userForm.value.user_name}}\n                                            </div>\n                                        </div>\n                                        <div class=\"ui-g-12\">\n                                                <div class=\"ui-g-4\">\n                                                    <label for=\"vin\">User Email</label>\n                                                </div>\n                                                <div class=\"ui-g-8\">\n                                                  {{userForm.value.user_email}}\n                                                </div>\n                                            </div>\n                            <!-- <pre>{{ companyForm.value | json }}</pre>\n                            <pre>{{ userForm.value | json }}</pre> -->\n                    </div>\n                </div>\n                <p-footer>\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                        <button type=\"button\" pButton icon=\"pi pi-angle-left\" (click)=\"back(2)\" label=\"Back\" style=\"float: left;\"></button>\n                        <button type=\"button\" pButton  icon=\"actionLoding ? 'pi pi-save' : 'pi pi-spin pi-spinner'\" class=\"ui-button-success\" (click)=\"onRegister()\"  label=\"Register\" style=\"float: right;\"></button>\n                    </div>\n                </p-footer>\n              </div>\n         <p-footer>\n               \n                  \n                <a  rel=\"noopener noreferrer\"  routerLink=\"/login\" >Login?</a>\n           \n      </p-footer>\n    </p-card>\n    \n    <p-card  class=\"login-form ui-g-12 ui-md-12\"  *ngIf=\"successRegister\" >\n            <div style=\"text-align: center\">\n                <i class=\"pi pi-check\" style=\"    color: #fff;   background: #08bd65;     border-radius: 100%;margin: 10px;font-size: 50px\"></i>\n            <h3>Registered Successfully!</h3> \n            <p>We will redirect to app. </p>\n              </div>\n          </p-card>\n\n</div>");

/***/ }),

/***/ "./src/app/component/register/register-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/register/register-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/component/register/register.component.ts");




const routes = [
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }
];
let RegisterRoutingModule = class RegisterRoutingModule {
};
RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RegisterRoutingModule);



/***/ }),

/***/ "./src/app/component/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/register/register.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-stripe-checkout */ "./node_modules/ng-stripe-checkout/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");












let RegisterComponent = class RegisterComponent {
    constructor(messageService, _fb, auth, router, stripeCheckoutLoader, commonService, spinner) {
        this.messageService = messageService;
        this._fb = _fb;
        this.auth = auth;
        this.router = router;
        this.stripeCheckoutLoader = stripeCheckoutLoader;
        this.commonService = commonService;
        this.spinner = spinner;
        this.successRegister = false;
        this.activeIndex = 0;
        this.futureMonthEnd = moment__WEBPACK_IMPORTED_MODULE_8__().add(1, 'M');
        this.socket = io(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].api_url);
        this.planForm = this._fb.group({
            plan_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.companyForm = this._fb.group({
            _id: [''],
            company_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            owner_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gstin: [''],
            status: [1]
        });
        this.userForm = this._fb.group({
            _id: [''],
            user_code: ['u-0001', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
            user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cnfirm_user_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_details_id: [''],
            role: [1],
            status: [1]
        });
    }
    ngOnInit() {
        this.getCompanyCount();
        this.items = [
            {
                label: 'Plan Details',
                command: (event) => {
                    this.activeIndex = 0;
                    // this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: 'Compnay Details',
                command: (event) => {
                    this.activeIndex = 1;
                    // this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Personal Details',
                command: (event) => {
                    this.activeIndex = 2;
                    // this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            },
            {
                label: 'Confirmation',
                command: (event) => {
                    this.activeIndex = 3;
                    // this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            }
        ];
    }
    showResponse(event) {
        this.messageService.add({ severity: 'info', summary: 'Succees', detail: 'User Responded', sticky: true });
    }
    handleAddressChange(address) {
        console.log('address', address);
        // Do some stuff
        this.companyForm.controls['company_address'].setValue(address.formatted_address);
    }
    back(val) {
        console.log('val', val);
        this.activeIndex = val;
        this.messageService.clear();
    }
    getCompanyCount() {
        this.auth.getCompanyCount()
            .subscribe((data) => {
            console.log('data', data);
            this.companyForm.controls['company_code'].setValue(this.commonService.incrCode('u', data));
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
    selectPlanType(val) {
        this.planForm.controls['plan_type'].setValue(val);
        // this.activeIndex = 1;
        this.onSaveData(1);
    }
    onSaveData(val) {
        if (val == 1) {
            if (this.planForm.invalid) {
                this.checkValidityPlan();
                return false;
            }
        }
        else if (val == 2) {
            if (this.companyForm.invalid) {
                this.checkValidityCompany();
                return false;
            }
        }
        else if (val == 3) {
            if (this.userForm.invalid) {
                this.checkValidityUser();
                return false;
            }
        }
        this.activeIndex = val;
        this.messageService.clear();
    }
    passwordMatch() {
        let newPassword = this.userForm.value.user_pwd;
        let confirmPassword = this.userForm.value.cnfirm_user_pwd;
        if (confirmPassword != '') {
            if (newPassword != confirmPassword) {
                console.log('not eq');
                console.log(this.userForm);
                this.userForm.controls['cnfirm_user_pwd'].setErrors({ 'nopasswordmatch': true });
                this.userForm.controls['cnfirm_user_pwd'].markAsDirty();
                // this.utilities.presentToast('Confirm password not match!','warning');
            }
            else {
                console.log('eq');
                this.userForm.controls['cnfirm_user_pwd'].setErrors({ 'nopasswordmatch': null });
                this.userForm.controls['cnfirm_user_pwd'].updateValueAndValidity();
            }
        }
        else {
        }
    }
    onRegisterCompany() {
        this.messageService.clear();
        this.auth.onRegisterCompany(this.companyForm.value)
            .subscribe((data) => {
            console.log('data', data);
            this.userForm.controls['company_details_id'].setValue(data._id);
            if (this.planForm.value.plan_type == 1) {
                this.onBuyProduct(data);
                return false;
            }
            else {
                let payData = {
                    plan_type: 0,
                    payment_amount: 15000,
                    currency: 'INR',
                    company_details_id: data,
                    payment_details: '',
                    expiry_date: this.futureMonthEnd,
                    status: 0
                };
                this.onRegisterPayment(payData);
            }
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
    onRegisterUser() {
        this.messageService.clear();
        this.auth.onRegisterUser(this.userForm.value)
            .subscribe((data) => {
            console.log('data', data);
            if (data.token) {
                this.spinner.hide();
                this.successRegister = true;
                this.socket.emit('loginTodo', data.user);
                localStorage.setItem('secret_token', data.token);
                localStorage.setItem('user_details', JSON.stringify(data.user));
                localStorage.setItem('client_company_id', data.user.company_details_id._id);
                this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Register Successfully!' });
                localStorage.setItem("inventryLogedIn", "1");
                this.router.navigate(["/dashboard"]);
            }
            else {
                this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Please try again!' });
                this.successRegister = false;
                this.spinner.hide();
            }
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
            this.successRegister = false;
            this.spinner.hide();
        });
    }
    onRegisterPayment(cdata) {
        this.messageService.clear();
        this.auth.onRegisterPayment(cdata)
            .subscribe((data) => {
            console.log('data', data);
            this.onRegisterUser();
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
    onRegister() {
        console.log(this.companyForm);
        console.log(this.userForm);
        this.spinner.show();
        this.userForm.controls['phone'].setValue(this.companyForm.value.phone);
        this.messageService.clear();
        if (this.planForm.invalid) {
            this.activeIndex = 0;
            this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Please select plan type!' });
            return false;
        }
        if (this.companyForm.invalid) {
            this.activeIndex = 1;
            this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Please add company info.!' });
            return false;
        }
        if (this.userForm.invalid) {
            this.activeIndex = 2;
            this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Please add personal info.!' });
            return false;
        }
        this.onRegisterCompany();
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
    onBuyProduct(cdata) {
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
                company_details_id: cdata,
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
            //     company_details_id: cdata,
            //     payment_details: err,
            //     expiry_date: this.futureMonthEnd,
            //     status: 2
            // }
            // this.onRegisterPayment(payData)
        });
    }
    onClickCancel() {
        // If the window has been opened, this is how you can close it:
        this.stripeCheckoutHandler.close();
    }
    onCheckEmailExist() {
        this.messageService.clear();
        console.log('onCheckEmailExist', this.userForm.value.user_email);
        console.log('valid', this.userForm.controls['user_email'].valid);
        if (this.userForm.controls['user_email'].invalid == true) {
            this.emailCheckStatus = null;
            return false;
        }
        this.emailCheckStatus = null;
        this.auth.onCheckEmailExist(this.userForm.value.user_email)
            .subscribe((data) => {
            console.log('data', data);
            if (data.length != 0) {
                this.emailCheckStatus = 2;
                this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Email already exist!' });
                this.userForm.controls['user_email'].setErrors({ 'emailExist': true });
                this.userForm.controls['user_email'].markAsDirty();
            }
            else {
                this.emailCheckStatus = 1;
                this.userForm.controls['user_email'].setErrors({ 'emailExist': null });
                this.userForm.controls['user_email'].updateValueAndValidity();
            }
        }, error => {
            console.log('er', error);
            this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
        });
    }
    checkValidityPlan() {
        Object.keys(this.planForm.controls).forEach((key) => {
            this.planForm.controls[key].markAsDirty();
        });
    }
    checkValidityCompany() {
        Object.keys(this.companyForm.controls).forEach((key) => {
            this.companyForm.controls[key].markAsDirty();
        });
    }
    checkValidityUser() {
        Object.keys(this.userForm.controls).forEach((key) => {
            this.userForm.controls[key].markAsDirty();
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_7__["StripeCheckoutLoader"] },
    { type: src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceDirective"])
], RegisterComponent.prototype, "placesRef", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/component/register/register.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_7__["StripeCheckoutLoader"], src_app_shared_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/component/register/register.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/register/register.module.ts ***!
  \*******************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/component/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/steps */ "./node_modules/primeng/steps.js");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_steps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/captcha */ "./node_modules/primeng/captcha.js");
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_captcha__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-stripe-checkout */ "./node_modules/ng-stripe-checkout/index.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");


















let RegisterModule = class RegisterModule {
};
RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
            primeng_steps__WEBPACK_IMPORTED_MODULE_6__["StepsModule"],
            primeng_captcha__WEBPACK_IMPORTED_MODULE_7__["CaptchaModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_10__["MessagesModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_11__["InputMaskModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__["GooglePlaceModule"],
            ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_15__["StripeCheckoutModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__["RadioButtonModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"]
        ]
    })
], RegisterModule);



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
//# sourceMappingURL=component-register-register-module-es2015.js.map