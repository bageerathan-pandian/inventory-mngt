(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1v46":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n("d7n7");var i=function(){return function(){}}()},CcaC:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var i=n("IheW"),o=n("AytR"),s=n("HDdC"),a=n("gFX4"),r=n("8Y7J");let p=(()=>{class e{constructor(e){this.httpClient=e,this.socket=a(o.a.api_url)}getUsers(){return this.httpClient.get("./api/users")}getUser(e){return this.httpClient.get("./api/users/"+e)}getUsersByCompany(e){return this.httpClient.get("./api/users/get-by-company/"+e)}addUser(e){var t=JSON.stringify(e);console.log("body",t);var n=new i.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.post("./api/users",t,{headers:n})}updateUser(e){var t=JSON.stringify(e);console.log("body",t);var n=new i.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.put("./api/users/"+e._id,t,{headers:n})}deleteUser(e){return this.httpClient.delete("./api/users/"+e)}onCheckEmailExist(e){return this.httpClient.get("./api/users/check-email-exist/"+e)}addUserSocktet(){return new s.a(e=>(this.socket=a(o.a.api_url),this.socket.on("add",t=>{e.next(t)}),()=>{this.socket.disconnect()}))}deleteUserSocktet(){return new s.a(e=>(this.socket=a(o.a.api_url),this.socket.on("delete",t=>{e.next(t)}),()=>{this.socket.disconnect()}))}updateUserSocktet(){return new s.a(e=>(this.socket=a(o.a.api_url),this.socket.on("update",t=>{e.next(t)}),()=>{this.socket.disconnect()}))}statusUpdateUserSocktet(){return new s.a(e=>(this.socket=a(o.a.api_url),this.socket.on("status",t=>{e.next(t)}),()=>{this.socket.disconnect()}))}}return e.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new e(r["\u0275\u0275inject"](i.HttpClient))},token:e,providedIn:"root"}),e})()},DX9g:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("8Y7J"),o=n("IheW");let s=(()=>{class e{constructor(e){this.httpClient=e}imageUpload(e){let t=new FormData;return t.append("image",e,e.name),console.log("body",t),this.httpClient.post("./api/image-upload",t)}profileImageUpload(e){let t=new FormData;return t.append("image",e,e.name),console.log("body",t),this.httpClient.post("./api/image-upload/profile",t)}companyLogoUpload(e){let t=new FormData;return t.append("image",e,e.name),console.log("body",t),this.httpClient.post("./api/image-upload/logo",t)}}return e.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new e(i["\u0275\u0275inject"](o.HttpClient))},token:e,providedIn:"root"}),e})()},NqMA:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n("8Y7J"),a=n("SVse"),r=n("sdDj"),p=function(){function e(e,t){this.el=e,this.zone=t,this.promptLabel="Enter a password",this.weakLabel="Weak",this.mediumLabel="Medium",this.strongLabel="Strong",this.feedback=!0}return Object.defineProperty(e.prototype,"showPassword",{set:function(e){this.el.nativeElement.type=e?"text":"password"},enumerable:!0,configurable:!0}),e.prototype.ngDoCheck=function(){this.updateFilledState()},e.prototype.onInput=function(e){this.updateFilledState()},e.prototype.updateFilledState=function(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length},e.prototype.createPanel=function(){this.panel=document.createElement("div"),this.panel.className="ui-password-panel ui-widget ui-state-highlight ui-corner-all",this.meter=document.createElement("div"),this.meter.className="ui-password-meter",this.info=document.createElement("div"),this.info.className="ui-password-info",this.info.textContent=this.promptLabel,this.panel.appendChild(this.meter),this.panel.appendChild(this.info),this.panel.style.minWidth=r.DomHandler.getOuterWidth(this.el.nativeElement)+"px",document.body.appendChild(this.panel)},e.prototype.onFocus=function(e){var t=this;this.feedback&&(this.panel||this.createPanel(),this.panel.style.zIndex=String(++r.DomHandler.zindex),this.zone.runOutsideAngular(function(){setTimeout(function(){r.DomHandler.addClass(t.panel,"ui-password-panel-visible"),r.DomHandler.removeClass(t.panel,"ui-password-panel-hidden")},1),r.DomHandler.absolutePosition(t.panel,t.el.nativeElement)}))},e.prototype.onBlur=function(e){var t=this;this.feedback&&(r.DomHandler.addClass(this.panel,"ui-password-panel-hidden"),r.DomHandler.removeClass(this.panel,"ui-password-panel-visible"),this.zone.runOutsideAngular(function(){setTimeout(function(){t.ngOnDestroy()},150)}))},e.prototype.onKeyup=function(e){if(this.feedback){var t=e.target.value,n=null,i=null;if(0===t.length)n=this.promptLabel,i="0px 0px";else{var o=this.testStrength(t);o<30?(n=this.weakLabel,i="0px -10px"):o>=30&&o<80?(n=this.mediumLabel,i="0px -20px"):o>=80&&(n=this.strongLabel,i="0px -30px")}this.meter.style.backgroundPosition=i,this.info.textContent=n}},e.prototype.testStrength=function(e){var t,n=0;return t=e.match("[0-9]"),n+=25*this.normalize(t?t.length:.25,1),t=e.match("[a-zA-Z]"),n+=10*this.normalize(t?t.length:.5,3),t=e.match("[!@#$%^&*?_~.,;=]"),n+=35*this.normalize(t?t.length:1/6,1),t=e.match("[A-Z]"),n+=30*this.normalize(t?t.length:1/6,1),(n*=e.length/8)>100?100:n},e.prototype.normalize=function(e,t){return e-t<=0?e/t:1+e/(e+t/4)*.5},Object.defineProperty(e.prototype,"disabled",{get:function(){return this.el.nativeElement.disabled},enumerable:!0,configurable:!0}),e.prototype.ngOnDestroy=function(){this.panel&&(document.body.removeChild(this.panel),this.panel=null,this.meter=null,this.info=null)},i([s.Input(),o("design:type",String)],e.prototype,"promptLabel",void 0),i([s.Input(),o("design:type",String)],e.prototype,"weakLabel",void 0),i([s.Input(),o("design:type",String)],e.prototype,"mediumLabel",void 0),i([s.Input(),o("design:type",String)],e.prototype,"strongLabel",void 0),i([s.Input(),o("design:type",Boolean)],e.prototype,"feedback",void 0),i([s.Input(),o("design:type",Boolean),o("design:paramtypes",[Boolean])],e.prototype,"showPassword",null),i([s.HostListener("input",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],e.prototype,"onInput",null),i([s.HostListener("focus",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],e.prototype,"onFocus",null),i([s.HostListener("blur",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],e.prototype,"onBlur",null),i([s.HostListener("keyup",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],e.prototype,"onKeyup",null),i([s.Directive({selector:"[pPassword]",host:{"[class.ui-inputtext]":"true","[class.ui-corner-all]":"true","[class.ui-state-default]":"true","[class.ui-widget]":"true","[class.ui-state-filled]":"filled"}}),o("design:paramtypes",[s.ElementRef,s.NgZone])],e)}();t.Password=p;var l=i([s.NgModule({imports:[a.CommonModule],exports:[p],declarations:[p]})],function(){});t.PasswordModule=l},"YD+O":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n("8Y7J");class i{}},bjBz:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n("8Y7J"),a=n("SVse"),r=n("s7LF");t.INPUTSWITCH_VALUE_ACCESSOR={provide:r.NG_VALUE_ACCESSOR,useExisting:s.forwardRef(function(){return p}),multi:!0};var p=function(){function e(e){this.cd=e,this.onChange=new s.EventEmitter,this.checked=!1,this.focused=!1,this.onModelChange=function(){},this.onModelTouched=function(){}}return e.prototype.onClick=function(e,t){this.disabled||this.readonly||(this.toggle(e),t.focus())},e.prototype.onInputChange=function(e){this.readonly||this.updateModel(e,e.target.checked)},e.prototype.toggle=function(e){this.updateModel(e,!this.checked)},e.prototype.updateModel=function(e,t){this.checked=t,this.onModelChange(this.checked),this.onChange.emit({originalEvent:e,checked:this.checked})},e.prototype.onFocus=function(e){this.focused=!0},e.prototype.onBlur=function(e){this.focused=!1,this.onModelTouched()},e.prototype.writeValue=function(e){this.checked=e,this.cd.markForCheck()},e.prototype.registerOnChange=function(e){this.onModelChange=e},e.prototype.registerOnTouched=function(e){this.onModelTouched=e},e.prototype.setDisabledState=function(e){this.disabled=e},i([s.Input(),o("design:type",Object)],e.prototype,"style",void 0),i([s.Input(),o("design:type",String)],e.prototype,"styleClass",void 0),i([s.Input(),o("design:type",Number)],e.prototype,"tabindex",void 0),i([s.Input(),o("design:type",String)],e.prototype,"inputId",void 0),i([s.Input(),o("design:type",String)],e.prototype,"name",void 0),i([s.Input(),o("design:type",Boolean)],e.prototype,"disabled",void 0),i([s.Input(),o("design:type",Boolean)],e.prototype,"readonly",void 0),i([s.Output(),o("design:type",s.EventEmitter)],e.prototype,"onChange",void 0),i([s.Component({selector:"p-inputSwitch",template:'\n        <div [ngClass]="{\'ui-inputswitch ui-widget\': true, \'ui-inputswitch-checked\': checked, \'ui-state-disabled\': disabled, \'ui-inputswitch-readonly\': readonly, \'ui-inputswitch-focus\': focused}" \n            [ngStyle]="style" [class]="styleClass" (click)="onClick($event, cb)" role="checkbox" [attr.aria-checked]="checked">\n            <div class="ui-helper-hidden-accessible">\n                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [attr.tabindex]="tabindex" [checked]="checked" (change)="onInputChange($event)"\n                        (focus)="onFocus($event)" (blur)="onBlur($event)" [disabled]="disabled" />\n            </div>\n            <span class="ui-inputswitch-slider"></span>\n        </div>\n    ',providers:[t.INPUTSWITCH_VALUE_ACCESSOR]}),o("design:paramtypes",[s.ChangeDetectorRef])],e)}();t.InputSwitch=p;var l=i([s.NgModule({imports:[a.CommonModule],exports:[p],declarations:[p]})],function(){});t.InputSwitchModule=l},d7n7:function(e,t,n){"use strict";var i=n("8Y7J"),o=function(){return function(e){e&&Object.assign(this,e)}}();n.d(t,"a",function(){return s});var s=function(){function e(e,t){this.el=e,this.ngZone=t,this.onAddressChange=new i.EventEmitter}return e.prototype.ngAfterViewInit=function(){this.options||(this.options=new o),this.initialize()},e.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},e.prototype.initialize=function(){var e=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){e.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(t){t.key&&"enter"==t.key.toLowerCase()&&t.target===e.el.nativeElement&&(t.preventDefault(),t.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var e=document.getElementsByClassName("pac-container");if(e){var t=Array.from(e);if(t)for(var n=0,i=t;n<i.length;n++){var o=i[n];o&&o.addEventListener("touchend",function(e){e.stopImmediatePropagation()})}}},500)},e.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},e.prototype.handleChangeEvent=function(){var e=this;this.ngZone.run(function(){e.place=e.autocomplete.getPlace(),e.place&&e.place.place_id&&e.onAddressChange.emit(e.place)})},e}()}}]);