(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1v46":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n("d7n7");var o=function(){}},CcaC:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var o=n("IheW"),i=n("AytR"),s=n("HDdC"),r=n("gFX4"),a=n("8Y7J"),p=function(){var t=function(){function t(t){this.httpClient=t,this.socket=r(i.a.api_url)}var e=t.prototype;return e.getUsers=function(){return this.httpClient.get("./api/users")},e.getUser=function(t){return this.httpClient.get("./api/users/"+t)},e.getUsersByCompany=function(t){return this.httpClient.get("./api/users/get-by-company/"+t)},e.addUser=function(t){var e=JSON.stringify(t);console.log("body",e);var n=new o.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.post("./api/users",e,{headers:n})},e.updateUser=function(t){var e=JSON.stringify(t);console.log("body",e);var n=new o.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.put("./api/users/"+t._id,e,{headers:n})},e.deleteUser=function(t){return this.httpClient.delete("./api/users/"+t)},e.onCheckEmailExist=function(t){return this.httpClient.get("./api/users/check-email-exist/"+t)},e.addUserSocktet=function(){var t=this;return new s.a(function(e){return t.socket=r(i.a.api_url),t.socket.on("add",function(t){e.next(t)}),function(){t.socket.disconnect()}})},e.deleteUserSocktet=function(){var t=this;return new s.a(function(e){return t.socket=r(i.a.api_url),t.socket.on("delete",function(t){e.next(t)}),function(){t.socket.disconnect()}})},e.updateUserSocktet=function(){var t=this;return new s.a(function(e){return t.socket=r(i.a.api_url),t.socket.on("update",function(t){e.next(t)}),function(){t.socket.disconnect()}})},e.statusUpdateUserSocktet=function(){var t=this;return new s.a(function(e){return t.socket=r(i.a.api_url),t.socket.on("status",function(t){e.next(t)}),function(){t.socket.disconnect()}})},t}();return t.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new t(a["\u0275\u0275inject"](o.HttpClient))},token:t,providedIn:"root"}),t}()},DX9g:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n("8Y7J"),i=n("IheW"),s=function(){var t=function(){function t(t){this.httpClient=t}var e=t.prototype;return e.imageUpload=function(t){var e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post("./api/image-upload",e)},e.profileImageUpload=function(t){var e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post("./api/image-upload/profile",e)},e.companyLogoUpload=function(t){var e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post("./api/image-upload/logo",e)},t}();return t.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new t(o["\u0275\u0275inject"](i.HttpClient))},token:t,providedIn:"root"}),t}()},NqMA:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var s=n("8Y7J"),r=n("SVse"),a=n("sdDj"),p=function(){function t(t,e){this.el=t,this.zone=e,this.promptLabel="Enter a password",this.weakLabel="Weak",this.mediumLabel="Medium",this.strongLabel="Strong",this.feedback=!0}return Object.defineProperty(t.prototype,"showPassword",{set:function(t){this.el.nativeElement.type=t?"text":"password"},enumerable:!0,configurable:!0}),t.prototype.ngDoCheck=function(){this.updateFilledState()},t.prototype.onInput=function(t){this.updateFilledState()},t.prototype.updateFilledState=function(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length},t.prototype.createPanel=function(){this.panel=document.createElement("div"),this.panel.className="ui-password-panel ui-widget ui-state-highlight ui-corner-all",this.meter=document.createElement("div"),this.meter.className="ui-password-meter",this.info=document.createElement("div"),this.info.className="ui-password-info",this.info.textContent=this.promptLabel,this.panel.appendChild(this.meter),this.panel.appendChild(this.info),this.panel.style.minWidth=a.DomHandler.getOuterWidth(this.el.nativeElement)+"px",document.body.appendChild(this.panel)},t.prototype.onFocus=function(t){var e=this;this.feedback&&(this.panel||this.createPanel(),this.panel.style.zIndex=String(++a.DomHandler.zindex),this.zone.runOutsideAngular(function(){setTimeout(function(){a.DomHandler.addClass(e.panel,"ui-password-panel-visible"),a.DomHandler.removeClass(e.panel,"ui-password-panel-hidden")},1),a.DomHandler.absolutePosition(e.panel,e.el.nativeElement)}))},t.prototype.onBlur=function(t){var e=this;this.feedback&&(a.DomHandler.addClass(this.panel,"ui-password-panel-hidden"),a.DomHandler.removeClass(this.panel,"ui-password-panel-visible"),this.zone.runOutsideAngular(function(){setTimeout(function(){e.ngOnDestroy()},150)}))},t.prototype.onKeyup=function(t){if(this.feedback){var e=t.target.value,n=null,o=null;if(0===e.length)n=this.promptLabel,o="0px 0px";else{var i=this.testStrength(e);i<30?(n=this.weakLabel,o="0px -10px"):i>=30&&i<80?(n=this.mediumLabel,o="0px -20px"):i>=80&&(n=this.strongLabel,o="0px -30px")}this.meter.style.backgroundPosition=o,this.info.textContent=n}},t.prototype.testStrength=function(t){var e,n=0;return e=t.match("[0-9]"),n+=25*this.normalize(e?e.length:.25,1),e=t.match("[a-zA-Z]"),n+=10*this.normalize(e?e.length:.5,3),e=t.match("[!@#$%^&*?_~.,;=]"),n+=35*this.normalize(e?e.length:1/6,1),e=t.match("[A-Z]"),n+=30*this.normalize(e?e.length:1/6,1),(n*=t.length/8)>100?100:n},t.prototype.normalize=function(t,e){return t-e<=0?t/e:1+t/(t+e/4)*.5},Object.defineProperty(t.prototype,"disabled",{get:function(){return this.el.nativeElement.disabled},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){this.panel&&(document.body.removeChild(this.panel),this.panel=null,this.meter=null,this.info=null)},o([s.Input(),i("design:type",String)],t.prototype,"promptLabel",void 0),o([s.Input(),i("design:type",String)],t.prototype,"weakLabel",void 0),o([s.Input(),i("design:type",String)],t.prototype,"mediumLabel",void 0),o([s.Input(),i("design:type",String)],t.prototype,"strongLabel",void 0),o([s.Input(),i("design:type",Boolean)],t.prototype,"feedback",void 0),o([s.Input(),i("design:type",Boolean),i("design:paramtypes",[Boolean])],t.prototype,"showPassword",null),o([s.HostListener("input",["$event"]),i("design:type",Function),i("design:paramtypes",[Object]),i("design:returntype",void 0)],t.prototype,"onInput",null),o([s.HostListener("focus",["$event"]),i("design:type",Function),i("design:paramtypes",[Object]),i("design:returntype",void 0)],t.prototype,"onFocus",null),o([s.HostListener("blur",["$event"]),i("design:type",Function),i("design:paramtypes",[Object]),i("design:returntype",void 0)],t.prototype,"onBlur",null),o([s.HostListener("keyup",["$event"]),i("design:type",Function),i("design:paramtypes",[Object]),i("design:returntype",void 0)],t.prototype,"onKeyup",null),o([s.Directive({selector:"[pPassword]",host:{"[class.ui-inputtext]":"true","[class.ui-corner-all]":"true","[class.ui-state-default]":"true","[class.ui-widget]":"true","[class.ui-state-filled]":"filled"}}),i("design:paramtypes",[s.ElementRef,s.NgZone])],t)}();e.Password=p;var u=o([s.NgModule({imports:[r.CommonModule],exports:[p],declarations:[p]})],function(){});e.PasswordModule=u},"YD+O":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n("8Y7J");var o=function(){}},bjBz:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var s=n("8Y7J"),r=n("SVse"),a=n("s7LF");e.INPUTSWITCH_VALUE_ACCESSOR={provide:a.NG_VALUE_ACCESSOR,useExisting:s.forwardRef(function(){return p}),multi:!0};var p=function(){function t(t){this.cd=t,this.onChange=new s.EventEmitter,this.checked=!1,this.focused=!1,this.onModelChange=function(){},this.onModelTouched=function(){}}return t.prototype.onClick=function(t,e){this.disabled||this.readonly||(this.toggle(t),e.focus())},t.prototype.onInputChange=function(t){this.readonly||this.updateModel(t,t.target.checked)},t.prototype.toggle=function(t){this.updateModel(t,!this.checked)},t.prototype.updateModel=function(t,e){this.checked=e,this.onModelChange(this.checked),this.onChange.emit({originalEvent:t,checked:this.checked})},t.prototype.onFocus=function(t){this.focused=!0},t.prototype.onBlur=function(t){this.focused=!1,this.onModelTouched()},t.prototype.writeValue=function(t){this.checked=t,this.cd.markForCheck()},t.prototype.registerOnChange=function(t){this.onModelChange=t},t.prototype.registerOnTouched=function(t){this.onModelTouched=t},t.prototype.setDisabledState=function(t){this.disabled=t},o([s.Input(),i("design:type",Object)],t.prototype,"style",void 0),o([s.Input(),i("design:type",String)],t.prototype,"styleClass",void 0),o([s.Input(),i("design:type",Number)],t.prototype,"tabindex",void 0),o([s.Input(),i("design:type",String)],t.prototype,"inputId",void 0),o([s.Input(),i("design:type",String)],t.prototype,"name",void 0),o([s.Input(),i("design:type",Boolean)],t.prototype,"disabled",void 0),o([s.Input(),i("design:type",Boolean)],t.prototype,"readonly",void 0),o([s.Output(),i("design:type",s.EventEmitter)],t.prototype,"onChange",void 0),o([s.Component({selector:"p-inputSwitch",template:'\n        <div [ngClass]="{\'ui-inputswitch ui-widget\': true, \'ui-inputswitch-checked\': checked, \'ui-state-disabled\': disabled, \'ui-inputswitch-readonly\': readonly, \'ui-inputswitch-focus\': focused}" \n            [ngStyle]="style" [class]="styleClass" (click)="onClick($event, cb)" role="checkbox" [attr.aria-checked]="checked">\n            <div class="ui-helper-hidden-accessible">\n                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [attr.tabindex]="tabindex" [checked]="checked" (change)="onInputChange($event)"\n                        (focus)="onFocus($event)" (blur)="onBlur($event)" [disabled]="disabled" />\n            </div>\n            <span class="ui-inputswitch-slider"></span>\n        </div>\n    ',providers:[e.INPUTSWITCH_VALUE_ACCESSOR]}),i("design:paramtypes",[s.ChangeDetectorRef])],t)}();e.InputSwitch=p;var u=o([s.NgModule({imports:[r.CommonModule],exports:[p],declarations:[p]})],function(){});e.InputSwitchModule=u},d7n7:function(t,e,n){"use strict";var o=n("8Y7J"),i=function(t){t&&Object.assign(this,t)};n.d(e,"a",function(){return s});var s=function(){function t(t,e){this.el=t,this.ngZone=e,this.onAddressChange=new o.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.options||(this.options=new i),this.initialize()},t.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},t.prototype.initialize=function(){var t=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){t.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(e){e.key&&"enter"==e.key.toLowerCase()&&e.target===t.el.nativeElement&&(e.preventDefault(),e.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var t=document.getElementsByClassName("pac-container");if(t){var e=Array.from(t);if(e)for(var n=0,o=e;n<o.length;n++){var i=o[n];i&&i.addEventListener("touchend",function(t){t.stopImmediatePropagation()})}}},500)},t.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},t.prototype.handleChangeEvent=function(){var t=this;this.ngZone.run(function(){t.place=t.autocomplete.getPlace(),t.place&&t.place.place_id&&t.onAddressChange.emit(t.place)})},t}()}}]);