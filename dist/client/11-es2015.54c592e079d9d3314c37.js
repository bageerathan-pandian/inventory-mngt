(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6fHJ":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n("SjkS");var r=function(){function t(){}var e;return e=t,t.forRoot=function(){return{ngModule:e,providers:[]}},t}()},CcaC:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("IheW"),o=n("AytR"),i=n("HDdC"),a=n("gFX4"),s=n("0hB7"),u=n("8Y7J");let l=(()=>{class t{constructor(t,e){this.httpClient=t,this.sessionService=e,this.socket=a(o.a.api_url)}getUsers(){return this.httpClient.get(o.a.api_url+"/api/users")}getUser(){return this.httpClient.get(o.a.api_url+"/api/users/"+this.sessionService.getItem("_id"))}getUsersByCompany(){return this.httpClient.get(o.a.api_url+"/api/users/get-by-company/"+this.sessionService.getItem("company_id"))}addUser(t){var e=JSON.stringify(t);console.log("body",e);var n=new r.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.post(o.a.api_url+"/api/users",e,{headers:n})}updateUser(t){var e=JSON.stringify(t);console.log("body",e);var n=new r.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.put(o.a.api_url+"/api/users/"+t._id,e,{headers:n})}updateAllUsers(t){var e=JSON.stringify(t);console.log("body",e);var n=new r.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.put(o.a.api_url+"/api/users/update-all-users/"+t.company_details_id,e,{headers:n})}deleteUser(t){return this.httpClient.delete(o.a.api_url+"/api/users/"+t)}onCheckEmailExist(t){return this.httpClient.get(o.a.api_url+"/api/users/check-email-exist/"+t)}addUserSocktet(){return new i.a(t=>(this.socket=a(o.a.api_url),this.socket.on("add",e=>{t.next(e)}),()=>{this.socket.disconnect()}))}deleteUserSocktet(){return new i.a(t=>(this.socket=a(o.a.api_url),this.socket.on("delete",e=>{t.next(e)}),()=>{this.socket.disconnect()}))}updateUserSocktet(){return new i.a(t=>(this.socket=a(o.a.api_url),this.socket.on("update",e=>{t.next(e)}),()=>{this.socket.disconnect()}))}statusUpdateUserSocktet(){return new i.a(t=>(this.socket=a(o.a.api_url),this.socket.on("status",e=>{t.next(e)}),()=>{this.socket.disconnect()}))}}return t.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new t(u["\u0275\u0275inject"](r.HttpClient),u["\u0275\u0275inject"](s.a))},token:t,providedIn:"root"}),t})()},DX9g:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("AytR"),o=n("8Y7J"),i=n("IheW");let a=(()=>{class t{constructor(t){this.httpClient=t}imageUpload(t){let e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post(r.a.api_url+"/api/image-upload",e)}profileImageUpload(t){let e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post(r.a.api_url+"/api/image-upload/profile",e)}companyLogoUpload(t){let e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post(r.a.api_url+"/api/image-upload/logo",e)}}return t.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new t(o["\u0275\u0275inject"](i.HttpClient))},token:t,providedIn:"root"}),t})()},NqMA:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=n("8Y7J"),a=n("SVse"),s=n("sdDj"),u=function(){function t(t,e){this.el=t,this.zone=e,this.promptLabel="Enter a password",this.weakLabel="Weak",this.mediumLabel="Medium",this.strongLabel="Strong",this.feedback=!0}return Object.defineProperty(t.prototype,"showPassword",{set:function(t){this.el.nativeElement.type=t?"text":"password"},enumerable:!0,configurable:!0}),t.prototype.ngDoCheck=function(){this.updateFilledState()},t.prototype.onInput=function(t){this.updateFilledState()},t.prototype.updateFilledState=function(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length},t.prototype.createPanel=function(){this.panel=document.createElement("div"),this.panel.className="ui-password-panel ui-widget ui-state-highlight ui-corner-all",this.meter=document.createElement("div"),this.meter.className="ui-password-meter",this.info=document.createElement("div"),this.info.className="ui-password-info",this.info.textContent=this.promptLabel,this.panel.appendChild(this.meter),this.panel.appendChild(this.info),this.panel.style.minWidth=s.DomHandler.getOuterWidth(this.el.nativeElement)+"px",document.body.appendChild(this.panel)},t.prototype.onFocus=function(t){var e=this;this.feedback&&(this.panel||this.createPanel(),this.panel.style.zIndex=String(++s.DomHandler.zindex),this.zone.runOutsideAngular((function(){setTimeout((function(){s.DomHandler.addClass(e.panel,"ui-password-panel-visible"),s.DomHandler.removeClass(e.panel,"ui-password-panel-hidden")}),1),s.DomHandler.absolutePosition(e.panel,e.el.nativeElement)})))},t.prototype.onBlur=function(t){var e=this;this.feedback&&(s.DomHandler.addClass(this.panel,"ui-password-panel-hidden"),s.DomHandler.removeClass(this.panel,"ui-password-panel-visible"),this.zone.runOutsideAngular((function(){setTimeout((function(){e.ngOnDestroy()}),150)})))},t.prototype.onKeyup=function(t){if(this.feedback){var e=t.target.value,n=null,r=null;if(0===e.length)n=this.promptLabel,r="0px 0px";else{var o=this.testStrength(e);o<30?(n=this.weakLabel,r="0px -10px"):o>=30&&o<80?(n=this.mediumLabel,r="0px -20px"):o>=80&&(n=this.strongLabel,r="0px -30px")}this.meter.style.backgroundPosition=r,this.info.textContent=n}},t.prototype.testStrength=function(t){var e,n=0;return e=t.match("[0-9]"),n+=25*this.normalize(e?e.length:.25,1),e=t.match("[a-zA-Z]"),n+=10*this.normalize(e?e.length:.5,3),e=t.match("[!@#$%^&*?_~.,;=]"),n+=35*this.normalize(e?e.length:1/6,1),e=t.match("[A-Z]"),n+=30*this.normalize(e?e.length:1/6,1),(n*=t.length/8)>100?100:n},t.prototype.normalize=function(t,e){return t-e<=0?t/e:1+t/(t+e/4)*.5},Object.defineProperty(t.prototype,"disabled",{get:function(){return this.el.nativeElement.disabled},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){this.panel&&(document.body.removeChild(this.panel),this.panel=null,this.meter=null,this.info=null)},r([i.Input(),o("design:type",String)],t.prototype,"promptLabel",void 0),r([i.Input(),o("design:type",String)],t.prototype,"weakLabel",void 0),r([i.Input(),o("design:type",String)],t.prototype,"mediumLabel",void 0),r([i.Input(),o("design:type",String)],t.prototype,"strongLabel",void 0),r([i.Input(),o("design:type",Boolean)],t.prototype,"feedback",void 0),r([i.Input(),o("design:type",Boolean),o("design:paramtypes",[Boolean])],t.prototype,"showPassword",null),r([i.HostListener("input",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],t.prototype,"onInput",null),r([i.HostListener("focus",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],t.prototype,"onFocus",null),r([i.HostListener("blur",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],t.prototype,"onBlur",null),r([i.HostListener("keyup",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],t.prototype,"onKeyup",null),r([i.Directive({selector:"[pPassword]",host:{"[class.ui-inputtext]":"true","[class.ui-corner-all]":"true","[class.ui-state-default]":"true","[class.ui-widget]":"true","[class.ui-state-filled]":"filled"}}),o("design:paramtypes",[i.ElementRef,i.NgZone])],t)}();e.Password=u;var l=r([i.NgModule({imports:[a.CommonModule],exports:[u],declarations:[u]})],(function(){}));e.PasswordModule=l},SjkS:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("mrSG"),o=n("8Y7J"),i=n("SVse"),a=function(){function t(t,e){this.el=t,this.platformId=e,this.ng2TelInputOptions={},this.hasError=new o.EventEmitter,this.ng2TelOutput=new o.EventEmitter,this.countryChange=new o.EventEmitter,this.intlTelInputObject=new o.EventEmitter}return t.prototype.ngOnInit=function(){var t=this;Object(i.isPlatformBrowser)(this.platformId)&&(this.ng2TelInputOptions=Object(r.__assign)({},this.ng2TelInputOptions,{utilsScript:this.getUtilsScript(this.ng2TelInputOptions)}),this.ngTelInput=window.intlTelInput(this.el.nativeElement,Object(r.__assign)({},this.ng2TelInputOptions)),this.el.nativeElement.addEventListener("countrychange",(function(){t.countryChange.emit(t.ngTelInput.getSelectedCountryData())})),this.intlTelInputObject.emit(this.ngTelInput))},t.prototype.onBlur=function(){var t=this.isInputValid();if(t){var e=this.ngTelInput.getNumber();this.hasError.emit(t),this.ng2TelOutput.emit(e)}else this.hasError.emit(t)},t.prototype.isInputValid=function(){return this.ngTelInput.isValidNumber()},t.prototype.setCountry=function(t){this.ngTelInput.setCountry(t)},t.prototype.getUtilsScript=function(t){return t.utilsScript||"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js"},t}()},bjBz:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=n("8Y7J"),a=n("SVse"),s=n("s7LF");e.INPUTSWITCH_VALUE_ACCESSOR={provide:s.NG_VALUE_ACCESSOR,useExisting:i.forwardRef((function(){return u})),multi:!0};var u=function(){function t(t){this.cd=t,this.onChange=new i.EventEmitter,this.checked=!1,this.focused=!1,this.onModelChange=function(){},this.onModelTouched=function(){}}return t.prototype.onClick=function(t,e){this.disabled||this.readonly||(this.toggle(t),e.focus())},t.prototype.onInputChange=function(t){this.readonly||this.updateModel(t,t.target.checked)},t.prototype.toggle=function(t){this.updateModel(t,!this.checked)},t.prototype.updateModel=function(t,e){this.checked=e,this.onModelChange(this.checked),this.onChange.emit({originalEvent:t,checked:this.checked})},t.prototype.onFocus=function(t){this.focused=!0},t.prototype.onBlur=function(t){this.focused=!1,this.onModelTouched()},t.prototype.writeValue=function(t){this.checked=t,this.cd.markForCheck()},t.prototype.registerOnChange=function(t){this.onModelChange=t},t.prototype.registerOnTouched=function(t){this.onModelTouched=t},t.prototype.setDisabledState=function(t){this.disabled=t},r([i.Input(),o("design:type",Object)],t.prototype,"style",void 0),r([i.Input(),o("design:type",String)],t.prototype,"styleClass",void 0),r([i.Input(),o("design:type",Number)],t.prototype,"tabindex",void 0),r([i.Input(),o("design:type",String)],t.prototype,"inputId",void 0),r([i.Input(),o("design:type",String)],t.prototype,"name",void 0),r([i.Input(),o("design:type",Boolean)],t.prototype,"disabled",void 0),r([i.Input(),o("design:type",Boolean)],t.prototype,"readonly",void 0),r([i.Output(),o("design:type",i.EventEmitter)],t.prototype,"onChange",void 0),r([i.Component({selector:"p-inputSwitch",template:'\n        <div [ngClass]="{\'ui-inputswitch ui-widget\': true, \'ui-inputswitch-checked\': checked, \'ui-state-disabled\': disabled, \'ui-inputswitch-readonly\': readonly, \'ui-inputswitch-focus\': focused}" \n            [ngStyle]="style" [class]="styleClass" (click)="onClick($event, cb)" role="checkbox" [attr.aria-checked]="checked">\n            <div class="ui-helper-hidden-accessible">\n                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [attr.tabindex]="tabindex" [checked]="checked" (change)="onInputChange($event)"\n                        (focus)="onFocus($event)" (blur)="onBlur($event)" [disabled]="disabled" />\n            </div>\n            <span class="ui-inputswitch-slider"></span>\n        </div>\n    ',providers:[e.INPUTSWITCH_VALUE_ACCESSOR]}),o("design:paramtypes",[i.ChangeDetectorRef])],t)}();e.InputSwitch=u;var l=r([i.NgModule({imports:[a.CommonModule],exports:[u],declarations:[u]})],(function(){}));e.InputSwitchModule=l},mrSG:function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return i})),n.d(e,"__rest",(function(){return a})),n.d(e,"__decorate",(function(){return s})),n.d(e,"__param",(function(){return u})),n.d(e,"__metadata",(function(){return l})),n.d(e,"__awaiter",(function(){return c})),n.d(e,"__generator",(function(){return p})),n.d(e,"__exportStar",(function(){return d})),n.d(e,"__values",(function(){return h})),n.d(e,"__read",(function(){return f})),n.d(e,"__spread",(function(){return y})),n.d(e,"__spreadArrays",(function(){return g})),n.d(e,"__await",(function(){return m})),n.d(e,"__asyncGenerator",(function(){return v})),n.d(e,"__asyncDelegator",(function(){return b})),n.d(e,"__asyncValues",(function(){return w})),n.d(e,"__makeTemplateObject",(function(){return _})),n.d(e,"__importStar",(function(){return S})),n.d(e,"__importDefault",(function(){return O})),n.d(e,"__classPrivateFieldGet",(function(){return C})),n.d(e,"__classPrivateFieldSet",(function(){return I}));var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function a(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function s(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function u(t,e){return function(n,r){e(n,r,t)}}function l(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function c(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function s(t){try{u(r.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))}function p(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function d(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function h(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(f(arguments[e]));return t}function g(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function m(t){return this instanceof m?(this.v=t,this):new m(t)}function v(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||s(t,e)}))})}function s(t,e){try{(n=o[t](e)).value instanceof m?Promise.resolve(n.value.v).then(u,l):c(i[0][2],n)}catch(r){c(i[0][3],r)}var n}function u(t){s("next",t)}function l(t){s("throw",t)}function c(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}function b(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:m(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function w(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=h(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){!function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)}(r,o,(e=t[n](e)).done,e.value)}))}}}function _(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function S(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function O(t){return t&&t.__esModule?t:{default:t}}function C(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function I(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}}}]);