(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1v46":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("d7n7");var i=function(){}},CcaC:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var i=n("IheW"),o=n("AytR"),a=n("HDdC"),s=n("gFX4"),r=n("8Y7J"),p=function(){var t=function(){function t(t){this.httpClient=t,this.socket=s(o.a.api_url)}var e=t.prototype;return e.getUsers=function(){return this.httpClient.get(o.a.api_url+"/api/users")},e.getUser=function(t){return this.httpClient.get(o.a.api_url+"/api/users/"+t)},e.getUsersByCompany=function(t){return this.httpClient.get(o.a.api_url+"/api/users/get-by-company/"+t)},e.addUser=function(t){var e=JSON.stringify(t);console.log("body",e);var n=new i.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.post(o.a.api_url+"/api/users",e,{headers:n})},e.updateUser=function(t){var e=JSON.stringify(t);console.log("body",e);var n=new i.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.put(o.a.api_url+"/api/users/"+t._id,e,{headers:n})},e.deleteUser=function(t){return this.httpClient.delete(o.a.api_url+"/api/users/"+t)},e.onCheckEmailExist=function(t){return this.httpClient.get(o.a.api_url+"/api/users/check-email-exist/"+t)},e.addUserSocktet=function(){var t=this;return new a.a(function(e){return t.socket=s(o.a.api_url),t.socket.on("add",function(t){e.next(t)}),function(){t.socket.disconnect()}})},e.deleteUserSocktet=function(){var t=this;return new a.a(function(e){return t.socket=s(o.a.api_url),t.socket.on("delete",function(t){e.next(t)}),function(){t.socket.disconnect()}})},e.updateUserSocktet=function(){var t=this;return new a.a(function(e){return t.socket=s(o.a.api_url),t.socket.on("update",function(t){e.next(t)}),function(){t.socket.disconnect()}})},e.statusUpdateUserSocktet=function(){var t=this;return new a.a(function(e){return t.socket=s(o.a.api_url),t.socket.on("status",function(t){e.next(t)}),function(){t.socket.disconnect()}})},t}();return t.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new t(r["\u0275\u0275inject"](i.HttpClient))},token:t,providedIn:"root"}),t}()},DX9g:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("AytR"),o=n("8Y7J"),a=n("IheW"),s=function(){var t=function(){function t(t){this.httpClient=t}var e=t.prototype;return e.imageUpload=function(t){var e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post(i.a.api_url+"/api/image-upload",e)},e.profileImageUpload=function(t){var e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post(i.a.api_url+"/api/image-upload/profile",e)},e.companyLogoUpload=function(t){var e=new FormData;return e.append("image",t,t.name),console.log("body",e),this.httpClient.post(i.a.api_url+"/api/image-upload/logo",e)},t}();return t.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new t(o["\u0275\u0275inject"](a.HttpClient))},token:t,providedIn:"root"}),t}()},NqMA:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n("8Y7J"),s=n("SVse"),r=n("sdDj"),p=function(){function t(t,e){this.el=t,this.zone=e,this.promptLabel="Enter a password",this.weakLabel="Weak",this.mediumLabel="Medium",this.strongLabel="Strong",this.feedback=!0}return Object.defineProperty(t.prototype,"showPassword",{set:function(t){this.el.nativeElement.type=t?"text":"password"},enumerable:!0,configurable:!0}),t.prototype.ngDoCheck=function(){this.updateFilledState()},t.prototype.onInput=function(t){this.updateFilledState()},t.prototype.updateFilledState=function(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length},t.prototype.createPanel=function(){this.panel=document.createElement("div"),this.panel.className="ui-password-panel ui-widget ui-state-highlight ui-corner-all",this.meter=document.createElement("div"),this.meter.className="ui-password-meter",this.info=document.createElement("div"),this.info.className="ui-password-info",this.info.textContent=this.promptLabel,this.panel.appendChild(this.meter),this.panel.appendChild(this.info),this.panel.style.minWidth=r.DomHandler.getOuterWidth(this.el.nativeElement)+"px",document.body.appendChild(this.panel)},t.prototype.onFocus=function(t){var e=this;this.feedback&&(this.panel||this.createPanel(),this.panel.style.zIndex=String(++r.DomHandler.zindex),this.zone.runOutsideAngular(function(){setTimeout(function(){r.DomHandler.addClass(e.panel,"ui-password-panel-visible"),r.DomHandler.removeClass(e.panel,"ui-password-panel-hidden")},1),r.DomHandler.absolutePosition(e.panel,e.el.nativeElement)}))},t.prototype.onBlur=function(t){var e=this;this.feedback&&(r.DomHandler.addClass(this.panel,"ui-password-panel-hidden"),r.DomHandler.removeClass(this.panel,"ui-password-panel-visible"),this.zone.runOutsideAngular(function(){setTimeout(function(){e.ngOnDestroy()},150)}))},t.prototype.onKeyup=function(t){if(this.feedback){var e=t.target.value,n=null,i=null;if(0===e.length)n=this.promptLabel,i="0px 0px";else{var o=this.testStrength(e);o<30?(n=this.weakLabel,i="0px -10px"):o>=30&&o<80?(n=this.mediumLabel,i="0px -20px"):o>=80&&(n=this.strongLabel,i="0px -30px")}this.meter.style.backgroundPosition=i,this.info.textContent=n}},t.prototype.testStrength=function(t){var e,n=0;return e=t.match("[0-9]"),n+=25*this.normalize(e?e.length:.25,1),e=t.match("[a-zA-Z]"),n+=10*this.normalize(e?e.length:.5,3),e=t.match("[!@#$%^&*?_~.,;=]"),n+=35*this.normalize(e?e.length:1/6,1),e=t.match("[A-Z]"),n+=30*this.normalize(e?e.length:1/6,1),(n*=t.length/8)>100?100:n},t.prototype.normalize=function(t,e){return t-e<=0?t/e:1+t/(t+e/4)*.5},Object.defineProperty(t.prototype,"disabled",{get:function(){return this.el.nativeElement.disabled},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){this.panel&&(document.body.removeChild(this.panel),this.panel=null,this.meter=null,this.info=null)},i([a.Input(),o("design:type",String)],t.prototype,"promptLabel",void 0),i([a.Input(),o("design:type",String)],t.prototype,"weakLabel",void 0),i([a.Input(),o("design:type",String)],t.prototype,"mediumLabel",void 0),i([a.Input(),o("design:type",String)],t.prototype,"strongLabel",void 0),i([a.Input(),o("design:type",Boolean)],t.prototype,"feedback",void 0),i([a.Input(),o("design:type",Boolean),o("design:paramtypes",[Boolean])],t.prototype,"showPassword",null),i([a.HostListener("input",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],t.prototype,"onInput",null),i([a.HostListener("focus",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],t.prototype,"onFocus",null),i([a.HostListener("blur",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],t.prototype,"onBlur",null),i([a.HostListener("keyup",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],t.prototype,"onKeyup",null),i([a.Directive({selector:"[pPassword]",host:{"[class.ui-inputtext]":"true","[class.ui-corner-all]":"true","[class.ui-state-default]":"true","[class.ui-widget]":"true","[class.ui-state-filled]":"filled"}}),o("design:paramtypes",[a.ElementRef,a.NgZone])],t)}();e.Password=p;var l=i([a.NgModule({imports:[s.CommonModule],exports:[p],declarations:[p]})],function(){});e.PasswordModule=l},"YD+O":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("8Y7J");var i=function(){}},d7n7:function(t,e,n){"use strict";var i=n("8Y7J"),o=function(t){t&&Object.assign(this,t)};n.d(e,"a",function(){return a});var a=function(){function t(t,e){this.el=t,this.ngZone=e,this.onAddressChange=new i.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.options||(this.options=new o),this.initialize()},t.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},t.prototype.initialize=function(){var t=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){t.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(e){e.key&&"enter"==e.key.toLowerCase()&&e.target===t.el.nativeElement&&(e.preventDefault(),e.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var t=document.getElementsByClassName("pac-container");if(t){var e=Array.from(t);if(e)for(var n=0,i=e;n<i.length;n++){var o=i[n];o&&o.addEventListener("touchend",function(t){t.stopImmediatePropagation()})}}},500)},t.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},t.prototype.handleChangeEvent=function(){var t=this;this.ngZone.run(function(){t.place=t.autocomplete.getPlace(),t.place&&t.place.place_id&&t.onAddressChange.emit(t.place)})},t}()}}]);