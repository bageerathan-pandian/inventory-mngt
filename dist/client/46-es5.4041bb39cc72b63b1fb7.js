function _defineProperties(l,e){for(var n=0;n<e.length;n++){var u=e[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,e,n){return e&&_defineProperties(l.prototype,e),n&&_defineProperties(l,n),l}function _classCallCheck(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{ReMG:function(l,e,n){"use strict";n.r(e);var u=n("8Y7J"),i=function l(){_classCallCheck(this,l)},t=n("pMnS"),s=n("hpmT"),a=n("4WZM"),r=n("Ge8E"),o=n("EjV3"),d=n("VSng"),c=n("iInd"),p=n("SVse"),f=n("XCAP"),g=n("Pk+G"),m=n("JeUk"),v=n("nP3v"),y=n("WwML"),h=n("4Vzq"),b=n("wosZ"),C=n("xb3B"),S=n("s7LF"),k=n("QNcV"),R=(n("24Yq"),n("AytR")),I=n("0hB7"),_=function(){function l(e,n,u,i,t,s,a){_classCallCheck(this,l),this.auth=e,this.sessionService=n,this._fb=u,this.messageService=i,this.activeRoute=t,this.router=s,this.spinner=a,this.isVerifying=!1,this.socket=io(R.a.api_url),this.verifyForm=this._fb.group({_id:[this.activeRoute.snapshot.params.id],token:[this.activeRoute.snapshot.params.token,S.Validators.required]})}return _createClass(l,[{key:"ngOnInit",value:function(){this.verifyEmail()}},{key:"verifyEmail",value:function(){var l=this;this.verifyForm.invalid&&(this.isVerifying=!0,this.status=2),this.auth.verifiedEmail(this.verifyForm.value).subscribe((function(e){console.log("data",e),l.isVerifying=!0,1==e.status&&(l.status=1,l.userCredential={user_email:e.user_email,user_pwd:e.user_pwd}),2==e.status&&(l.status=2),3==e.status&&(l.status=2)}),(function(e){console.log("er",e),l.messageService.add({severity:"error",summary:"Opps!",detail:"Sothing went wrong!"}),l.isVerifying=!0,l.status=2}))}},{key:"onLogin",value:function(){var l=this;console.log(this.userCredential),this.auth.logIn(this.userCredential).subscribe((function(e){console.log("data",e),l.messageService.clear(),l.spinner.hide(),e.token?(l.socket.emit("loginTodo",e.user),l.sessionService.setItem("inventryLogedIn","1"),l.sessionService.setItem("secret_token",e.token),l.sessionService.setItem("rememberMe",!1),l.sessionService.setUserCredentials(e.user),l.router.navigate(["/inventory-mngt/dashboard"]),l.messageService.add({severity:"success",summary:"Success!",detail:"Login success!"})):(l.messageService.clear(),l.messageService.add({severity:"warn",summary:"Warning!",detail:"Check your User Name/Password"}))}),(function(e){console.log("er",e),l.spinner.hide(),l.messageService.add({severity:"error",summary:"Opps!",detail:"Sothing went wrong!"})}))}}]),l}(),w=n("7g+E"),M=u["\u0275crt"]({encapsulation:0,styles:[[".login-form[_ngcontent-%COMP%]{margin-top:20%}"]],data:{}});function O(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,13,"p-card",[["class","login-form ui-g-12 ui-md-12"]],null,null,null,s.b,s.a)),u["\u0275did"](1,49152,null,2,a.Card,[u.ElementRef],null,null),u["\u0275qud"](603979776,1,{headerFacet:0}),u["\u0275qud"](603979776,2,{footerFacet:0}),(l()(),u["\u0275eld"](4,0,null,1,0,"i",[["class","pi pi-envelope"],["style","    color: #fff;   background: #FF9800;     border-radius: 100%;margin: 10px;font-size: 50px"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,1,5,"div",[["class","ui-g ui-fluid"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,4,"div",[["class","ui-g-12 ui-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["We are verifying your email address"])),(l()(),u["\u0275eld"](9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Your identify is being verified. We will email your once your verificaton has completed."])),(l()(),u["\u0275eld"](11,0,null,1,2,"p-progressSpinner",[],null,null,null,r.b,r.a)),u["\u0275did"](12,49152,null,0,o.ProgressSpinner,[],{style:[0,"style"]},null),u["\u0275pod"](13,{width:0,height:1})],(function(l,e){var n=l(e,13,0,"50px","50px");l(e,12,0,n)}),null)}function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,9,"div",[["class","ui-g ui-fluid"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,5,"div",[["class","ui-g-12 ui-md-12"],["style","text-align: center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"i",[["class","pi pi-check"],["style","    color: #fff;   background: #08bd65;     border-radius: 100%;margin: 10px;font-size: 50px"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Congratulations!"])),(l()(),u["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Your email has been verified successfully. "])),(l()(),u["\u0275eld"](7,0,null,null,2,"div",[["class","ui-g-12 ui-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,1,"button",[["class","ui-button-raised "],["icon","pi pi-arrow-right"],["iconPos","right"],["label","Let's get started"],["pButton",""],["style","margin-right: .25em;    width: 100%;"],["type","submit"]],null,[[null,"click"]],(function(l,e,n){var u=!0;return"click"===e&&(u=!1!==l.component.onLogin()&&u),u}),null,null)),u["\u0275did"](9,4341760,null,0,d.ButtonDirective,[u.ElementRef],{iconPos:[0,"iconPos"],label:[1,"label"],icon:[2,"icon"]},null)],(function(l,e){l(e,9,0,"right","Let's get started","pi pi-arrow-right")}),null)}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,10,"div",[["class","ui-g ui-fluid"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,5,"div",[["class","ui-g-12 ui-md-12"],["style","text-align: center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"i",[["class","pi pi-times"],["style","    color: #fff;   background: #e35b5b;     border-radius: 100%;margin: 10px;font-size: 50px"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Oops!"])),(l()(),u["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["This link is expired or invalid "])),(l()(),u["\u0275eld"](7,0,null,null,3,"div",[["class","ui-g-12 ui-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,2,"button",[["class","ui-button-raised "],["icon","pi pi-home"],["iconPos","left"],["label","Goto Home"],["pButton",""],["routerLink","/home"],["style","margin-right: .25em;    width: 100%;"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==u["\u0275nov"](l,9).onClick()&&i),i}),null,null)),u["\u0275did"](9,16384,null,0,c.RouterLink,[c.Router,c.ActivatedRoute,[8,null],u.Renderer2,u.ElementRef],{routerLink:[0,"routerLink"]},null),u["\u0275did"](10,4341760,null,0,d.ButtonDirective,[u.ElementRef],{iconPos:[0,"iconPos"],label:[1,"label"],icon:[2,"icon"]},null)],(function(l,e){l(e,9,0,"/home"),l(e,10,0,"left","Goto Home","pi pi-home")}),null)}function V(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,7,"p-card",[["class","login-form ui-g-12 ui-md-12"]],null,null,null,s.b,s.a)),u["\u0275did"](1,49152,null,2,a.Card,[u.ElementRef],null,null),u["\u0275qud"](603979776,3,{headerFacet:0}),u["\u0275qud"](603979776,4,{footerFacet:0}),(l()(),u["\u0275and"](16777216,null,1,1,null,P)),u["\u0275did"](5,16384,null,0,p.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,1,1,null,T)),u["\u0275did"](7,16384,null,0,p.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component;l(e,5,0,1==n.status),l(e,7,0,2==n.status)}),null)}function N(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,f.b,f.a)),u["\u0275did"](1,114688,null,0,g.a,[c.Router,m.a],null,null),(l()(),u["\u0275eld"](2,0,null,null,6,"div",[["class","ui-g-12 ui-md-6 ui-md-offset-3"],["style","margin-top: 10%;text-align: center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"p-messages",[["class","ui-g-12"],["styleClass","loagin-wrapper"]],null,null,null,v.b,v.a)),u["\u0275did"](4,245760,null,0,y.Messages,[[2,h.MessageService]],{styleClass:[0,"styleClass"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,O)),u["\u0275did"](6,16384,null,0,p.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,V)),u["\u0275did"](8,16384,null,0,p.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](9,0,null,null,2,"div",[["class","ui-g-12 "]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,1,"app-footer",[],null,null,null,b.b,b.a)),u["\u0275did"](11,114688,null,0,C.a,[],null,null)],(function(l,e){var n=e.component;l(e,1,0),l(e,4,0,"loagin-wrapper"),l(e,6,0,!n.isVerifying),l(e,8,0,n.isVerifying),l(e,11,0)}),null)}var L=u["\u0275ccf"]("app-email-verify",_,(function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-email-verify",[],null,null,null,N,M)),u["\u0275did"](1,114688,null,0,_,[k.a,I.a,S.FormBuilder,h.MessageService,c.ActivatedRoute,c.Router,w.c],null,null)],(function(l,e){l(e,1,0)}),null)}),{},{},[]),F=function l(){_classCallCheck(this,l)},E=n("7LN8"),x=n("IL0X"),B=n("CjyL"),j=n("I45J");n.d(e,"EmailVerifyModuleNgFactory",(function(){return A}));var A=u["\u0275cmf"](i,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,L]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[u.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,S.FormBuilder,S.FormBuilder,[]),u["\u0275mpd"](4608,S["\u0275angular_packages_forms_forms_o"],S["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),u["\u0275mpd"](1073742336,c.RouterModule,c.RouterModule,[[2,c["\u0275angular_packages_router_router_a"]],[2,c.Router]]),u["\u0275mpd"](1073742336,F,F,[]),u["\u0275mpd"](1073742336,S["\u0275angular_packages_forms_forms_d"],S["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,S.ReactiveFormsModule,S.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,E.SharedModule,E.SharedModule,[]),u["\u0275mpd"](1073742336,a.CardModule,a.CardModule,[]),u["\u0275mpd"](1073742336,x.MessageModule,x.MessageModule,[]),u["\u0275mpd"](1073742336,y.MessagesModule,y.MessagesModule,[]),u["\u0275mpd"](1073742336,B.a,B.a,[]),u["\u0275mpd"](1073742336,j.a,j.a,[]),u["\u0275mpd"](1073742336,o.ProgressSpinnerModule,o.ProgressSpinnerModule,[]),u["\u0275mpd"](1073742336,d.ButtonModule,d.ButtonModule,[]),u["\u0275mpd"](1073742336,i,i,[]),u["\u0275mpd"](1024,c.ROUTES,(function(){return[[{path:"",component:_}]]}),[])])}))},WwML:function(l,e,n){"use strict";var u=this&&this.__decorate||function(l,e,n,u){var i,t=arguments.length,s=t<3?e:null===u?u=Object.getOwnPropertyDescriptor(e,n):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(l,e,n,u);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(s=(t<3?i(s):t>3?i(e,n,s):i(e,n))||s);return t>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(l,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,e)},t=this&&this.__param||function(l,e){return function(n,u){e(n,u,l)}};Object.defineProperty(e,"__esModule",{value:!0});var s=n("8Y7J"),a=n("SVse"),r=n("GS7A"),o=n("4Vzq"),d=function(){function l(l){this.messageService=l,this.closable=!0,this.enableService=!0,this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.valueChange=new s.EventEmitter}return l.prototype.ngOnInit=function(){var l=this;this.messageService&&this.enableService&&(this.messageSubscription=this.messageService.messageObserver.subscribe((function(e){if(e)if(e instanceof Array){var n=e.filter((function(e){return l.key===e.key}));l.value=l.value?l.value.concat(n):n.slice()}else l.key===e.key&&(l.value=l.value?l.value.concat([e]):[e])})),this.clearSubscription=this.messageService.clearObserver.subscribe((function(e){e?l.key===e&&(l.value=null):l.value=null})))},l.prototype.hasMessages=function(){return this.value&&this.value.length>0},l.prototype.getSeverityClass=function(){return this.value[0].severity},l.prototype.clear=function(l){this.value=[],this.valueChange.emit(this.value),l.preventDefault()},Object.defineProperty(l.prototype,"icon",{get:function(){var l=null;if(this.hasMessages())switch(this.value[0].severity){case"success":l="pi-check";break;case"info":l="pi-info-circle";break;case"error":l="pi-times";break;case"warn":l="pi-exclamation-triangle";break;default:l="pi-info-circle"}return l},enumerable:!0,configurable:!0}),l.prototype.ngOnDestroy=function(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe()},u([s.Input(),i("design:type",Array)],l.prototype,"value",void 0),u([s.Input(),i("design:type",Boolean)],l.prototype,"closable",void 0),u([s.Input(),i("design:type",Object)],l.prototype,"style",void 0),u([s.Input(),i("design:type",String)],l.prototype,"styleClass",void 0),u([s.Input(),i("design:type",Boolean)],l.prototype,"enableService",void 0),u([s.Input(),i("design:type",String)],l.prototype,"key",void 0),u([s.Input(),i("design:type",String)],l.prototype,"showTransitionOptions",void 0),u([s.Input(),i("design:type",String)],l.prototype,"hideTransitionOptions",void 0),u([s.Output(),i("design:type",s.EventEmitter)],l.prototype,"valueChange",void 0),u([s.Component({selector:"p-messages",template:'\n        <div *ngIf="hasMessages()" class="ui-messages ui-widget ui-corner-all"\n                    [ngClass]="{\'ui-messages-info\':(value[0].severity === \'info\'),\n                    \'ui-messages-warn\':(value[0].severity === \'warn\'),\n                    \'ui-messages-error\':(value[0].severity === \'error\'),\n                    \'ui-messages-success\':(value[0].severity === \'success\')}"\n                    [ngStyle]="style" [class]="styleClass" [@messageAnimation]="{value: \'visible\', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}">\n            <a tabindex="0" class="ui-messages-close" (click)="clear($event)" (keydown.enter)="clear($event)" *ngIf="closable">\n                <i class="pi pi-times"></i>\n            </a>\n            <span class="ui-messages-icon pi" [ngClass]="icon"></span>\n            <ul>\n                <li *ngFor="let msg of value">\n                    <span *ngIf="msg.summary" class="ui-messages-summary" [innerHTML]="msg.summary"></span>\n                    <span *ngIf="msg.detail" class="ui-messages-detail" [innerHTML]="msg.detail"></span>\n                </li>\n            </ul>\n        </div>\n    ',animations:[r.trigger("messageAnimation",[r.state("visible",r.style({transform:"translateY(0)",opacity:1})),r.transition("void => *",[r.style({transform:"translateY(-25%)",opacity:0}),r.animate("{{showTransitionParams}}")]),r.transition("* => void",[r.animate("{{hideTransitionParams}}",r.style({opacity:0,transform:"translateY(-25%)"}))])])]}),t(0,s.Optional()),i("design:paramtypes",[o.MessageService])],l)}();e.Messages=d;var c=u([s.NgModule({imports:[a.CommonModule],exports:[d],declarations:[d]})],(function(){}));e.MessagesModule=c},hpmT:function(l,e,n){"use strict";n.d(e,"a",(function(){return t})),n.d(e,"b",(function(){return d}));var u=n("8Y7J"),i=(n("4WZM"),n("SVse")),t=(n("7LN8"),u["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function s(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-header"]],null,null,null,null,null)),u["\u0275ncd"](null,0)],null,null)}function a(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""]))],null,(function(l,e){l(e,1,0,e.component.header)}))}function r(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-subtitle"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""]))],null,(function(l,e){l(e,1,0,e.component.subheader)}))}function o(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-footer"]],null,null,null,null,null)),u["\u0275ncd"](null,2)],null,null)}function d(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,15,"div",[],null,null,null,null,null)),u["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275prd"](512,null,i["\u0275NgStyleImpl"],i["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](4,278528,null,0,i.NgStyle,[i["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,s)),u["\u0275did"](6,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](7,0,null,null,8,"div",[["class","ui-card-body"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,a)),u["\u0275did"](9,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,r)),u["\u0275did"](11,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](12,0,null,null,1,"div",[["class","ui-card-content"]],null,null,null,null,null)),u["\u0275ncd"](null,1),(l()(),u["\u0275and"](16777216,null,null,1,null,o)),u["\u0275did"](15,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component;l(e,2,0,n.styleClass,"ui-card ui-widget ui-widget-content ui-corner-all"),l(e,4,0,n.style),l(e,6,0,n.headerFacet),l(e,9,0,n.header),l(e,11,0,n.subheader),l(e,15,0,n.footerFacet)}),null)}}}]);