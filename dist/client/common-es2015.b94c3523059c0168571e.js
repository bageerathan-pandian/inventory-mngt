(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1E+r":function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var l=e("IheW"),i=e("AytR"),o=e("8Y7J");let a=(()=>{class n{constructor(n){this.httpClient=n}getCompany(){return this.httpClient.get(i.a.api_url+"/api/company")}getCompanyAdminUsers(){return this.httpClient.get(i.a.api_url+"/api/company/admin-users")}getAllCompanies(){return this.httpClient.get(i.a.api_url+"/api/company/get-all-companies")}getCompanyByGroup(){return this.httpClient.get(i.a.api_url+"/api/company/groupByCompany")}addCompany(n){var t=JSON.stringify(n);console.log("body",t);var e=new l.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.post(i.a.api_url+"/api/company",t,{headers:e})}updateCompany(n){var t=JSON.stringify(n);console.log("body",t);var e=new l.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.put(i.a.api_url+"/api/company/"+n._id,t,{headers:e})}deleteCompany(n){return this.httpClient.delete(i.a.api_url+"/api/company/"+n)}}return n.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new n(o["\u0275\u0275inject"](l.HttpClient))},token:n,providedIn:"root"}),n})()},"410/":function(n,t,e){"use strict";e("F6mo"),e("iRPl"),e("RimA")},"73c4":function(n,t,e){"use strict";var l=this&&this.__decorate||function(n,t,e,l){var i,o=arguments.length,a=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,l);else for(var r=n.length-1;r>=0;r--)(i=n[r])&&(a=(o<3?i(a):o>3?i(t,e,a):i(t,e))||a);return o>3&&a&&Object.defineProperty(t,e,a),a},i=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=e("8Y7J"),a=e("SVse"),r=e("iInd"),u=function(){function n(){this.activeIndex=0,this.readonly=!0,this.activeIndexChange=new o.EventEmitter}return n.prototype.itemClick=function(n,t,e){this.readonly||t.disabled?n.preventDefault():(this.activeIndexChange.emit(e),t.url||n.preventDefault(),t.command&&t.command({originalEvent:n,item:t,index:e}))},l([o.Input(),i("design:type",Number)],n.prototype,"activeIndex",void 0),l([o.Input(),i("design:type",Array)],n.prototype,"model",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"readonly",void 0),l([o.Input(),i("design:type",Object)],n.prototype,"style",void 0),l([o.Input(),i("design:type",String)],n.prototype,"styleClass",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"activeIndexChange",void 0),l([o.Component({selector:"p-steps",template:'\n        <div [ngClass]="{\'ui-steps ui-widget ui-helper-clearfix\':true,\'ui-steps-readonly\':readonly}" [ngStyle]="style" [class]="styleClass">\n            <ul role="tablist">\n                <li *ngFor="let item of model; let i = index" class="ui-steps-item" #menuitem [ngStyle]="item.style" [class]="item.styleClass"\n                    [ngClass]="{\'ui-state-highlight ui-steps-current\':(i === activeIndex),\n                        \'ui-state-default\':(i !== activeIndex),\n                        \'ui-state-complete\':(i < activeIndex),\n                        \'ui-state-disabled ui-steps-incomplete\':item.disabled||(i !== activeIndex && readonly)}">\n                    <a *ngIf="!item.routerLink" [href]="item.url||\'#\'" class="ui-menuitem-link" (click)="itemClick($event, item, i)" [attr.target]="item.target" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : \'0\'">\n                        <span class="ui-steps-number">{{i + 1}}</span>\n                        <span class="ui-steps-title">{{item.label}}</span>\n                    </a>\n                    <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="\'ui-state-active\'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link" (click)="itemClick($event, item, i)" [attr.target]="item.target" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : \'0\'">\n                        <span class="ui-steps-number">{{i + 1}}</span>\n                        <span class="ui-steps-title">{{item.label}}</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    '})],n)}();t.Steps=u;var s=l([o.NgModule({imports:[a.CommonModule,r.RouterModule],exports:[u,r.RouterModule],declarations:[u]})],(function(){}));t.StepsModule=s},BG2F:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e("Uyfi");class l{}},CjyL:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{}},F6mo:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("8Y7J"),i=e("iRPl"),o=function(){function n(){}return n.decorators=[{type:l.NgModule,args:[{providers:[i.a]}]}],n}()},I45J:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{}},IL0X:function(n,t,e){"use strict";var l=this&&this.__decorate||function(n,t,e,l){var i,o=arguments.length,a=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,l);else for(var r=n.length-1;r>=0;r--)(i=n[r])&&(a=(o<3?i(a):o>3?i(t,e,a):i(t,e))||a);return o>3&&a&&Object.defineProperty(t,e,a),a},i=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=e("8Y7J"),a=e("SVse"),r=function(){function n(){}return Object.defineProperty(n.prototype,"icon",{get:function(){var n=null;if(this.severity)switch(this.severity){case"success":n="pi pi-check";break;case"info":n="pi pi-info-circle";break;case"error":n="pi pi-times";break;case"warn":n="pi pi-exclamation-triangle";break;default:n="pi pi-info-circle"}return n},enumerable:!0,configurable:!0}),l([o.Input(),i("design:type",String)],n.prototype,"severity",void 0),l([o.Input(),i("design:type",String)],n.prototype,"text",void 0),l([o.Component({selector:"p-message",template:"\n        <div aria-live=\"polite\" class=\"ui-message ui-widget ui-corner-all\" *ngIf=\"severity\"\n        [ngClass]=\"{'ui-message-info': (severity === 'info'),\n                'ui-message-warn': (severity === 'warn'),\n                'ui-message-error': (severity === 'error'),\n                'ui-message-success': (severity === 'success')}\">\n            <span class=\"ui-message-icon\" [ngClass]=\"icon\"></span>\n            <span class=\"ui-message-text\" [innerHTML]=\"text\"></span>\n        </div>\n    "})],n)}();t.UIMessage=r;var u=l([o.NgModule({imports:[a.CommonModule],exports:[r],declarations:[r]})],(function(){}));t.MessageModule=u},Lrjr:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{}},"Pk+G":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{constructor(n){this.router=n}ngOnInit(){}goTo(n){this.router.navigate([n])}}},RimA:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){function n(n){var t=this,e=n.token;n.token=function(n,l){null!=e&&e(n,l),null!=t.resolveFn&&t.resolveFn(n)},this.stripeCheckout=StripeCheckout.configure(n)}return n.prototype.open=function(n){var t=this,e=n.closed;n.closed=function(){null!=e&&e(),t.rejectFn("stripe_closed")};var l=new Promise((function(n,e){t.resolveFn=n,t.rejectFn=e}));return this.stripeCheckout.open(n),l},n.prototype.close=function(){this.stripeCheckout.close()},n}()},Uyfi:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{constructor(){}ngOnInit(){}}},"VQ/Y":function(n,t,e){"use strict";var l=this&&this.__decorate||function(n,t,e,l){var i,o=arguments.length,a=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,l);else for(var r=n.length-1;r>=0;r--)(i=n[r])&&(a=(o<3?i(a):o>3?i(t,e,a):i(t,e))||a);return o>3&&a&&Object.defineProperty(t,e,a),a},i=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=e("8Y7J"),a=e("SVse"),r=function(){function n(n,t,e,l){this.el=n,this.cd=e,this.zone=l,this.onMapClick=new o.EventEmitter,this.onOverlayClick=new o.EventEmitter,this.onOverlayDblClick=new o.EventEmitter,this.onOverlayDragStart=new o.EventEmitter,this.onOverlayDrag=new o.EventEmitter,this.onOverlayDragEnd=new o.EventEmitter,this.onMapReady=new o.EventEmitter,this.onMapDragEnd=new o.EventEmitter,this.onZoomChanged=new o.EventEmitter,this.differ=t.find([]).create(null)}return n.prototype.ngAfterViewChecked=function(){!this.map&&this.el.nativeElement.offsetParent&&this.initialize()},n.prototype.initialize=function(){var n=this;if(this.map=new google.maps.Map(this.el.nativeElement.children[0],this.options),this.onMapReady.emit({map:this.map}),this.overlays)for(var t=0,e=this.overlays;t<e.length;t++){var l=e[t];l.setMap(this.map),this.bindOverlayEvents(l)}this.map.addListener("click",(function(t){n.zone.run((function(){n.onMapClick.emit(t)}))})),this.map.addListener("dragend",(function(t){n.zone.run((function(){n.onMapDragEnd.emit(t)}))})),this.map.addListener("zoom_changed",(function(t){n.zone.run((function(){n.onZoomChanged.emit(t)}))}))},n.prototype.bindOverlayEvents=function(n){var t=this;n.addListener("click",(function(e){t.zone.run((function(){t.onOverlayClick.emit({originalEvent:e,overlay:n,map:t.map})}))})),n.addListener("dblclick",(function(e){t.zone.run((function(){t.onOverlayDblClick.emit({originalEvent:e,overlay:n,map:t.map})}))})),n.getDraggable()&&this.bindDragEvents(n)},n.prototype.ngDoCheck=function(){var n=this,t=this.differ.diff(this.overlays);t&&this.map&&(t.forEachRemovedItem((function(n){google.maps.event.clearInstanceListeners(n.item),n.item.setMap(null)})),t.forEachAddedItem((function(t){t.item.setMap(n.map),t.item.addListener("click",(function(e){n.zone.run((function(){n.onOverlayClick.emit({originalEvent:e,overlay:t.item,map:n.map})}))})),t.item.getDraggable()&&n.bindDragEvents(t.item)})))},n.prototype.bindDragEvents=function(n){var t=this;n.addListener("dragstart",(function(e){t.zone.run((function(){t.onOverlayDragStart.emit({originalEvent:e,overlay:n,map:t.map})}))})),n.addListener("drag",(function(e){t.zone.run((function(){t.onOverlayDrag.emit({originalEvent:e,overlay:n,map:t.map})}))})),n.addListener("dragend",(function(e){t.zone.run((function(){t.onOverlayDragEnd.emit({originalEvent:e,overlay:n,map:t.map})}))}))},n.prototype.getMap=function(){return this.map},l([o.Input(),i("design:type",Object)],n.prototype,"style",void 0),l([o.Input(),i("design:type",String)],n.prototype,"styleClass",void 0),l([o.Input(),i("design:type",Object)],n.prototype,"options",void 0),l([o.Input(),i("design:type",Array)],n.prototype,"overlays",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onMapClick",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onOverlayClick",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onOverlayDblClick",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onOverlayDragStart",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onOverlayDrag",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onOverlayDragEnd",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onMapReady",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onMapDragEnd",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onZoomChanged",void 0),l([o.Component({selector:"p-gmap",template:'<div [ngStyle]="style" [class]="styleClass"></div>'}),i("design:paramtypes",[o.ElementRef,o.IterableDiffers,o.ChangeDetectorRef,o.NgZone])],n)}();t.GMap=r;var u=l([o.NgModule({imports:[a.CommonModule],exports:[r],declarations:[r]})],(function(){}));t.GMapModule=u},WO8h:function(n,t,e){"use strict";var l=e("8Y7J"),i=e("Uyfi");e.d(t,"a",(function(){return u}));var o=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function a(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,[" message works!\n"]))],null,null)}function r(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-message",[],null,null,null,a,o)),l["\u0275did"](1,114688,null,0,i.a,[],null,null)],(function(n,t){n(t,1,0)}),null)}var u=l["\u0275ccf"]("app-message",i.a,r,{},{},[])},XCAP:function(n,t,e){"use strict";var l=e("8Y7J");e("Pk+G"),e("iInd"),e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var i=l["\u0275crt"]({encapsulation:0,styles:[["body[_ngcontent-%COMP%]{font:400 15px Lato,sans-serif;line-height:1.8;color:#818181}h2[_ngcontent-%COMP%]{font-size:24px;text-transform:uppercase;color:#303030;font-weight:600;margin-bottom:30px}h4[_ngcontent-%COMP%]{font-size:19px;line-height:1.375em;color:#303030;font-weight:400;margin-bottom:30px}.carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:grayscale(90%);filter:grayscale(90%);width:100%;margin:auto}.carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff!important}@media (max-width:600px){.carousel-caption[_ngcontent-%COMP%]{display:none}}.jumbotron[_ngcontent-%COMP%]{background-color:#0b9bd8;color:#fff;padding:100px 25px;font-family:Montserrat,sans-serif}.container-fluid[_ngcontent-%COMP%]{padding:60px 50px}.bg-grey[_ngcontent-%COMP%]{background-color:#f6f6f6}.logo-small1[_ngcontent-%COMP%]{color:#0b9bd8;font-size:50px}.logo[_ngcontent-%COMP%]{color:#0b9bd8;font-size:200px}.thumbnail[_ngcontent-%COMP%]{padding:0 0 15px;border:none;border-radius:0}.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;margin-bottom:10px}.carousel-control.left[_ngcontent-%COMP%], .carousel-control.right[_ngcontent-%COMP%]{background-image:none;color:#0b9bd8}.carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-color:#0b9bd8}.carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#0b9bd8}.item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:19px;line-height:1.375em;font-weight:400;font-style:italic;margin:70px 0}.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:normal}.panel[_ngcontent-%COMP%]{border:1px solid #0b9bd8;border-radius:0!important;-webkit-transition:box-shadow .5s;transition:box-shadow .5s}.panel[_ngcontent-%COMP%]:hover{box-shadow:5px 0 40px rgba(0,0,0,.2)}.panel-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{border:1px solid #0b9bd8;background-color:#fff!important;color:#0b9bd8}.panel-heading[_ngcontent-%COMP%]{color:#fff!important;background-color:#0b9bd8!important;padding:25px;border-bottom:1px solid transparent;border-radius:0}.panel-footer[_ngcontent-%COMP%]{background-color:#fff!important}.panel-footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:32px}.panel-footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#aaa;font-size:14px}.panel-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:15px 0;background-color:#0b9bd8;color:#fff}.navbar[_ngcontent-%COMP%]{margin-bottom:0;background-color:#fff;z-index:9999;border:0;font-size:12px!important;line-height:1.42857143!important;letter-spacing:4px;border-radius:0;font-family:Montserrat,sans-serif;box-shadow:0 1px 0 1px #eee}.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#222!important}.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#169fda!important;background-color:#fff!important}.navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]{border-color:transparent;color:#fff!important}footer[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px;color:#0b9bd8}.slideanim[_ngcontent-%COMP%]{visibility:hidden}.slide[_ngcontent-%COMP%]{animation-name:slide;-webkit-animation-name:slide;animation-duration:1s;-webkit-animation-duration:1s;visibility:visible}@keyframes slide{0%{opacity:0;-webkit-transform:translateY(70%);transform:translateY(70%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide{0%{opacity:0;-webkit-transform:translateY(70%)}100%{opacity:1;-webkit-transform:translateY(0)}}@media screen and (max-width:768px){.col-sm-4[_ngcontent-%COMP%]{text-align:center;margin:25px 0}.btn-lg[_ngcontent-%COMP%]{width:100%;margin-bottom:35px}}@media screen and (max-width:480px){.logo[_ngcontent-%COMP%]{font-size:150px}}"]],data:{}});function o(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,32,"nav",[["class","navbar navbar-default navbar-fixed-top"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,31,"div",[["class","container"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,7,"div",[["class","navbar-header"]],null,null,null,null,null)),(n()(),l["\u0275eld"](3,0,null,null,3,"button",[["class","navbar-toggle"],["data-target","#myNavbar"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(n()(),l["\u0275eld"](4,0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(n()(),l["\u0275eld"](5,0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(n()(),l["\u0275eld"](6,0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(n()(),l["\u0275eld"](7,0,null,null,2,"div",[["class","navbar-brand"],["style","text-align: center;position: relative;height: 80px;"]],null,null,null,null,null)),(n()(),l["\u0275eld"](8,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goTo("/")&&l),l}),null,null)),(n()(),l["\u0275eld"](9,0,null,null,0,"img",[["src","./assets/img/comp_logo.png"],["style","    max-height: 100%;  max-width: 100%;   left: 0;   right: 0;    top: 0;     bottom: 0;   margin: auto;"]],null,null,null,null,null)),(n()(),l["\u0275eld"](10,0,null,null,22,"div",[["class","collapse navbar-collapse"],["id","myNavbar"]],null,null,null,null,null)),(n()(),l["\u0275eld"](11,0,null,null,8,"ul",[["class","nav navbar-nav navbar-right"]],null,null,null,null,null)),(n()(),l["\u0275eld"](12,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](13,0,null,null,2,"a",[["routerLinkActive","active"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goTo("/register")&&l),l}),null,null)),(n()(),l["\u0275eld"](14,0,null,null,0,"span",[["class","glyphicon glyphicon-user"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,[" Sign Up"])),(n()(),l["\u0275eld"](16,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](17,0,null,null,2,"a",[["routerLinkActive","active"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goTo("/login")&&l),l}),null,null)),(n()(),l["\u0275eld"](18,0,null,null,0,"span",[["class","glyphicon glyphicon-log-in"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,[" Login"])),(n()(),l["\u0275eld"](20,0,null,null,12,"ul",[["class","nav navbar-nav navbar-right"]],null,null,null,null,null)),(n()(),l["\u0275eld"](21,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](22,0,null,null,1,"a",[["routerLinkActive","active"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goTo("/about-us")&&l),l}),null,null)),(n()(),l["\u0275ted"](-1,null,["ABOUT US"])),(n()(),l["\u0275eld"](24,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](25,0,null,null,1,"a",[["routerLinkActive","active"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goTo("/services")&&l),l}),null,null)),(n()(),l["\u0275ted"](-1,null,["SERVICES"])),(n()(),l["\u0275eld"](27,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](28,0,null,null,1,"a",[["routerLinkActive","active"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goTo("/pricing")&&l),l}),null,null)),(n()(),l["\u0275ted"](-1,null,["PRICING"])),(n()(),l["\u0275eld"](30,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](31,0,null,null,1,"a",[["routerLinkActive","active"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goTo("/contact-us")&&l),l}),null,null)),(n()(),l["\u0275ted"](-1,null,["CONTACT US"]))],null,null)}},c9MS:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{}},iRPl:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("8Y7J"),i=e("RimA"),o=function(){function n(){}return n.prototype.createHandler=function(n){return this.load().then((function(){return new i.a(n)}))},n.prototype.load=function(){return this.loaded||(this.loaded=new Promise((function(n,t){var e=document.createElement("script");e.type="text/javascript",e.src="https://checkout.stripe.com/checkout.js",e.onerror=function(n){return t(n)},e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,n())}:e.onload=function(){n()},document.getElementsByTagName("body")[0].appendChild(e)}))),this.loaded},n.decorators=[{type:l.Injectable}],n}()},joWC:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var l=e("IheW"),i=e("0hB7"),o=e("AytR"),a=e("8Y7J");let r=(()=>{class n{constructor(n,t){this.httpClient=n,this.sessionService=t}getInvoiceByCompany(){return this.httpClient.get(o.a.api_url+"/api/invoice/get-by-company/"+this.sessionService.getItem("company_id"))}updateInvoice(n){var t=JSON.stringify(n);console.log("body",t);var e=new l.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.put(o.a.api_url+"/api/invoice/"+n._id,t,{headers:e})}getTotalSalesAmount(){return this.httpClient.get(o.a.api_url+"/api/invoice/total-sales/"+this.sessionService.getItem("company_id"))}getTotalPurchaseAmount(){return this.httpClient.get(o.a.api_url+"/api/invoice/total-purchase/"+this.sessionService.getItem("company_id"))}}return n.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new n(a["\u0275\u0275inject"](l.HttpClient),a["\u0275\u0275inject"](i.a))},token:n,providedIn:"root"}),n})()},l53z:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var l=e("IheW"),i=e("0hB7"),o=e("AytR"),a=e("8Y7J");let r=(()=>{class n{constructor(n,t){this.httpClient=n,this.sessionService=t}getTotalPurchaseAmount(){return this.httpClient.get(o.a.api_url+"/api/purchase/total-purchase/"+this.sessionService.getItem("company_id"))}getLastInvoice(){return this.httpClient.get(o.a.api_url+"/api/purchase/last-invoice/"+this.sessionService.getItem("company_id"))}addPurchase(n){var t=JSON.stringify(n);console.log("body",t);var e=new l.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.post(o.a.api_url+"/api/purchase",t,{headers:e})}}return n.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new n(a["\u0275\u0275inject"](l.HttpClient),a["\u0275\u0275inject"](i.a))},token:n,providedIn:"root"}),n})()},nMfs:function(n,t,e){"use strict";function l(n,t){return e=>{const l=e.controls[t];l.errors&&!l.errors.mustMatch||l.setErrors(e.controls[n].value!==l.value?{mustMatch:!0}:null)}}e.d(t,"a",(function(){return l}))},nP3v:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return p}));var l=e("8Y7J"),i=(e("WwML"),e("SVse")),o=(e("4Vzq"),l["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"messageAnimation",definitions:[{type:0,name:"visible",styles:{type:6,styles:{transform:"translateY(0)",opacity:1},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{transform:"translateY(-25%)",opacity:0},offset:null},{type:4,styles:null,timings:"{{showTransitionParams}}"}],options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:6,styles:{opacity:0,transform:"translateY(-25%)"},offset:null},timings:"{{hideTransitionParams}}"}],options:null}],options:{}}]}}));function a(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"a",[["class","ui-messages-close"],["tabindex","0"]],null,[[null,"click"],[null,"keydown.enter"]],(function(n,t,e){var l=!0,i=n.component;return"click"===t&&(l=!1!==i.clear(e)&&l),"keydown.enter"===t&&(l=!1!==i.clear(e)&&l),l}),null,null)),(n()(),l["\u0275eld"](1,0,null,null,0,"i",[["class","pi pi-times"]],null,null,null,null,null))],null,null)}function r(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"span",[["class","ui-messages-summary"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,t){n(t,0,0,t.parent.context.$implicit.summary)}))}function u(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"span",[["class","ui-messages-detail"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,t){n(t,0,0,t.parent.context.$implicit.detail)}))}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,r)),l["\u0275did"](2,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,u)),l["\u0275did"](4,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,2,0,t.context.$implicit.summary),n(t,4,0,t.context.$implicit.detail)}),null)}function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,15,"div",[["class","ui-messages ui-widget ui-corner-all"]],[[24,"@messageAnimation",0]],null,null,null,null)),l["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](3,{"ui-messages-info":0,"ui-messages-warn":1,"ui-messages-error":2,"ui-messages-success":3}),l["\u0275prd"](512,null,i["\u0275NgStyleImpl"],i["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](5,278528,null,0,i.NgStyle,[i["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),l["\u0275pod"](6,{showTransitionParams:0,hideTransitionParams:1}),l["\u0275pod"](7,{value:0,params:1}),(n()(),l["\u0275and"](16777216,null,null,1,null,a)),l["\u0275did"](9,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](10,0,null,null,2,"span",[["class","ui-messages-icon pi"]],null,null,null,null,null)),l["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](12,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),l["\u0275eld"](13,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](15,278528,null,0,i.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var e=t.component,l=e.styleClass,i=n(t,3,0,"info"===e.value[0].severity,"warn"===e.value[0].severity,"error"===e.value[0].severity,"success"===e.value[0].severity);n(t,2,0,l,i),n(t,5,0,e.style),n(t,9,0,e.closable),n(t,12,0,"ui-messages-icon pi",e.icon),n(t,15,0,e.value)}),(function(n,t){var e=t.component,l=n(t,7,0,"visible",n(t,6,0,e.showTransitionOptions,e.hideTransitionOptions));n(t,0,0,l)}))}function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275and"](16777216,null,null,1,null,c)),l["\u0275did"](1,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,t.component.hasMessages())}),null)}},rGLl:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return c}));var l=e("8Y7J"),i=(e("EPYN"),e("SVse")),o=e("VSng"),a=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function r(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"div",[["class","ui-inplace-display"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.activate(e)&&l),l}),null,null)),l["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](3,{"ui-state-disabled":0}),l["\u0275ncd"](null,0)],(function(n,t){var e=n(t,3,0,t.component.disabled);n(t,2,0,"ui-inplace-display",e)}),null)}function u(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"button",[["icon","pi pi-times"],["pButton",""],["type","button"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.deactivate(e)&&l),l}),null,null)),l["\u0275did"](1,4341760,null,0,o.ButtonDirective,[l.ElementRef],{icon:[0,"icon"]},null)],(function(n,t){n(t,1,0,"pi pi-times")}),null)}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"div",[["class","ui-inplace-content"]],null,null,null,null,null)),l["\u0275ncd"](null,1),(n()(),l["\u0275and"](16777216,null,null,1,null,u)),l["\u0275did"](3,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,3,0,t.component.closable)}),null)}function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"div",[],null,null,null,null,null)),l["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](3,{"ui-inplace ui-widget":0,"ui-inplace-closable":1}),l["\u0275prd"](512,null,i["\u0275NgStyleImpl"],i["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](5,278528,null,0,i.NgStyle,[i["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,r)),l["\u0275did"](7,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](9,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component,l=e.styleClass,i=n(t,3,0,!0,e.closable);n(t,2,0,l,i),n(t,5,0,e.style),n(t,7,0,!e.active),n(t,9,0,e.active)}),null)}},sh68:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{}},"t+mc":function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return a}));var l=e("8Y7J"),i=(e("VQ/Y"),e("SVse")),o=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function a(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,2,"div",[],[[8,"className",0]],null,null,null,null)),l["\u0275prd"](512,null,i["\u0275NgStyleImpl"],i["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](2,278528,null,0,i.NgStyle,[i["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null)],(function(n,t){n(t,2,0,t.component.style)}),(function(n,t){n(t,0,0,t.component.styleClass)}))}},wosZ:function(n,t,e){"use strict";var l=e("8Y7J");e("xb3B"),e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var i=l["\u0275crt"]({encapsulation:0,styles:[["body[_ngcontent-%COMP%]{font:400 15px Lato,sans-serif;line-height:1.8;color:#818181}h2[_ngcontent-%COMP%]{font-size:24px;text-transform:uppercase;color:#303030;font-weight:600;margin-bottom:30px}h4[_ngcontent-%COMP%]{font-size:19px;line-height:1.375em;color:#303030;font-weight:400;margin-bottom:30px}.carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:grayscale(90%);filter:grayscale(90%);width:100%;margin:auto}.carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff!important}@media (max-width:600px){.carousel-caption[_ngcontent-%COMP%]{display:none}}.jumbotron[_ngcontent-%COMP%]{background-color:#f4511e;color:#fff;padding:100px 25px;font-family:Montserrat,sans-serif}.container-fluid[_ngcontent-%COMP%]{padding:60px 50px}.bg-grey[_ngcontent-%COMP%]{background-color:#f6f6f6}.logo-small[_ngcontent-%COMP%]{color:#f4511e;font-size:50px}.logo[_ngcontent-%COMP%]{color:#f4511e;font-size:200px}.thumbnail[_ngcontent-%COMP%]{padding:0 0 15px;border:none;border-radius:0}.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;margin-bottom:10px}.carousel-control.left[_ngcontent-%COMP%], .carousel-control.right[_ngcontent-%COMP%]{background-image:none;color:#f4511e}.carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-color:#f4511e}.carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#f4511e}.item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:19px;line-height:1.375em;font-weight:400;font-style:italic;margin:70px 0}.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:normal}.panel[_ngcontent-%COMP%]{border:1px solid #f4511e;border-radius:0!important;-webkit-transition:box-shadow .5s;transition:box-shadow .5s}.panel[_ngcontent-%COMP%]:hover{box-shadow:5px 0 40px rgba(0,0,0,.2)}.panel-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{border:1px solid #f4511e;background-color:#fff!important;color:#f4511e}.panel-heading[_ngcontent-%COMP%]{color:#fff!important;background-color:#f4511e!important;padding:25px;border-bottom:1px solid transparent;border-radius:0}.panel-footer[_ngcontent-%COMP%]{background-color:#fff!important}.panel-footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:32px}.panel-footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#aaa;font-size:14px}.panel-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:15px 0;background-color:#f4511e;color:#fff}.navbar[_ngcontent-%COMP%]{margin-bottom:0;background-color:#fff;z-index:9999;border:0;font-size:12px!important;line-height:1.42857143!important;letter-spacing:4px;border-radius:0;font-family:Montserrat,sans-serif}.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#222!important}.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#169fda!important;background-color:#fff!important}.navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]{border-color:transparent;color:#fff!important}footer[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px;color:#f4511e}.slideanim[_ngcontent-%COMP%]{visibility:hidden}.slide[_ngcontent-%COMP%]{animation-name:slide;-webkit-animation-name:slide;animation-duration:1s;-webkit-animation-duration:1s;visibility:visible}@keyframes slide{0%{opacity:0;-webkit-transform:translateY(70%);transform:translateY(70%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide{0%{opacity:0;-webkit-transform:translateY(70%)}100%{opacity:1;-webkit-transform:translateY(0)}}@media screen and (max-width:768px){.col-sm-4[_ngcontent-%COMP%]{text-align:center;margin:25px 0}.btn-lg[_ngcontent-%COMP%]{width:100%;margin-bottom:35px}}@media screen and (max-width:480px){.logo[_ngcontent-%COMP%]{font-size:150px}}"]],data:{}});function o(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"footer",[["class","container-fluid text-center"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"a",[["href","#myPage"],["title","To Top"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,0,"span",[["class","glyphicon glyphicon-chevron-up"]],null,null,null,null,null)),(n()(),l["\u0275eld"](3,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["2019@ Ownwaysoft.com "])),(n()(),l["\u0275eld"](5,0,null,null,1,"a",[["href","http://www.ownwaysoft.com"],["title","Visit Ownwaysoft"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["www.ownwaysoft.com"]))],null,null)}},xZuC:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var l=e("IheW"),i=e("AytR"),o=e("0hB7"),a=e("8Y7J");let r=(()=>{class n{constructor(n,t){this.httpClient=n,this.sessionService=t}getLastInvoice(){return this.httpClient.get(i.a.api_url+"/api/sales/last-invoice/"+this.sessionService.getItem("company_id"))}addSales(n){var t=JSON.stringify(n);console.log("body",t);var e=new l.HttpHeaders({"Content-Type":"application/json"});return this.httpClient.post(i.a.api_url+"/api/sales",t,{headers:e})}}return n.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new n(a["\u0275\u0275inject"](l.HttpClient),a["\u0275\u0275inject"](o.a))},token:n,providedIn:"root"}),n})()},xb3B:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{constructor(){}ngOnInit(){}}}}]);