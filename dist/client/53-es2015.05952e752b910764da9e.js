(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{ReMG:function(l,e,n){"use strict";n.r(e);var i=n("8Y7J");class u{}var s=n("pMnS"),t=n("hpmT"),a=n("4WZM"),r=n("Ge8E"),o=n("EjV3"),d=n("VSng"),c=n("iInd"),p=n("SVse"),g=n("nP3v"),m=n("WwML"),f=n("4Vzq"),v=n("s7LF"),h=n("QNcV"),y=(n("24Yq"),n("AytR")),b=n("0hB7");class S{constructor(l,e,n,i,u,s,t){this.auth=l,this.sessionService=e,this._fb=n,this.messageService=i,this.activeRoute=u,this.router=s,this.spinner=t,this.isVerifying=!1,this.socket=io(y.a.api_url),this.verifyForm=this._fb.group({_id:[this.activeRoute.snapshot.params.id],token:[this.activeRoute.snapshot.params.token,v.Validators.required]})}ngOnInit(){this.verifyEmail()}verifyEmail(){this.verifyForm.invalid&&(this.isVerifying=!0,this.status=2),this.auth.verifiedEmail(this.verifyForm.value).subscribe(l=>{console.log("data",l),this.isVerifying=!0,1==l.status&&(this.status=1,this.userCredential={user_email:l.user_email,user_pwd:l.user_pwd}),2==l.status&&(this.status=2),3==l.status&&(this.status=2)},l=>{console.log("er",l),this.messageService.add({severity:"error",summary:"Opps!",detail:"Sothing went wrong!"}),this.isVerifying=!0,this.status=2})}onLogin(){console.log(this.userCredential),this.auth.logIn(this.userCredential).subscribe(l=>{console.log("data",l),this.messageService.clear(),this.spinner.hide(),l.token?(this.socket.emit("loginTodo",l.user),this.sessionService.setItem("inventryLogedIn","1"),this.sessionService.setItem("secret_token",l.token),this.sessionService.setItem("rememberMe",!1),this.sessionService.setUserCredentials(l.user),this.router.navigate(["/inventory-mngt/dashboard"]),this.messageService.add({severity:"success",summary:"Success!",detail:"Login success!"})):(this.messageService.clear(),this.messageService.add({severity:"warn",summary:"Warning!",detail:"Check your User Name/Password"}))},l=>{console.log("er",l),this.spinner.hide(),this.messageService.add({severity:"error",summary:"Opps!",detail:"Sothing went wrong!"})})}}var I=n("7g+E"),R=i["\u0275crt"]({encapsulation:0,styles:[[".login-form[_ngcontent-%COMP%]{margin-top:20%}"]],data:{}});function C(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,13,"p-card",[["class","login-form ui-g-12 ui-md-12"]],null,null,null,t.b,t.a)),i["\u0275did"](1,49152,null,2,a.Card,[i.ElementRef],null,null),i["\u0275qud"](603979776,1,{headerFacet:0}),i["\u0275qud"](603979776,2,{footerFacet:0}),(l()(),i["\u0275eld"](4,0,null,1,0,"i",[["class","pi pi-envelope"],["style","    color: #fff;   background: #FF9800;     border-radius: 100%;margin: 10px;font-size: 50px"]],null,null,null,null,null)),(l()(),i["\u0275eld"](5,0,null,1,5,"div",[["class","ui-g ui-fluid"]],null,null,null,null,null)),(l()(),i["\u0275eld"](6,0,null,null,4,"div",[["class","ui-g-12 ui-md-12"]],null,null,null,null,null)),(l()(),i["\u0275eld"](7,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["We are verifying your email address"])),(l()(),i["\u0275eld"](9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Your identify is being verified. We will email your once your verificaton has completed."])),(l()(),i["\u0275eld"](11,0,null,1,2,"p-progressSpinner",[],null,null,null,r.b,r.a)),i["\u0275did"](12,49152,null,0,o.ProgressSpinner,[],{style:[0,"style"]},null),i["\u0275pod"](13,{width:0,height:1})],(function(l,e){var n=l(e,13,0,"50px","50px");l(e,12,0,n)}),null)}function w(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,9,"div",[["class","ui-g ui-fluid"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,5,"div",[["class","ui-g-12 ui-md-12"],["style","text-align: center"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,0,"i",[["class","pi pi-check"],["style","    color: #fff;   background: #08bd65;     border-radius: 100%;margin: 10px;font-size: 50px"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Congratulations!"])),(l()(),i["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Your email has been verified successfully. "])),(l()(),i["\u0275eld"](7,0,null,null,2,"div",[["class","ui-g-12 ui-md-12"]],null,null,null,null,null)),(l()(),i["\u0275eld"](8,0,null,null,1,"button",[["class","ui-button-raised "],["icon","pi pi-arrow-right"],["iconPos","right"],["label","Let's get started"],["pButton",""],["style","margin-right: .25em;    width: 100%;"],["type","submit"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.onLogin()&&i),i}),null,null)),i["\u0275did"](9,4341760,null,0,d.ButtonDirective,[i.ElementRef],{iconPos:[0,"iconPos"],label:[1,"label"],icon:[2,"icon"]},null)],(function(l,e){l(e,9,0,"right","Let's get started","pi pi-arrow-right")}),null)}function M(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,10,"div",[["class","ui-g ui-fluid"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,5,"div",[["class","ui-g-12 ui-md-12"],["style","text-align: center"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,0,"i",[["class","pi pi-times"],["style","    color: #fff;   background: #e35b5b;     border-radius: 100%;margin: 10px;font-size: 50px"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Oops!"])),(l()(),i["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["This link is expired or invalid "])),(l()(),i["\u0275eld"](7,0,null,null,3,"div",[["class","ui-g-12 ui-md-12"]],null,null,null,null,null)),(l()(),i["\u0275eld"](8,0,null,null,2,"button",[["class","ui-button-raised "],["icon","pi pi-home"],["iconPos","left"],["label","Goto Home"],["pButton",""],["routerLink","/home"],["style","margin-right: .25em;    width: 100%;"]],null,[[null,"click"]],(function(l,e,n){var u=!0;return"click"===e&&(u=!1!==i["\u0275nov"](l,9).onClick()&&u),u}),null,null)),i["\u0275did"](9,16384,null,0,c.RouterLink,[c.Router,c.ActivatedRoute,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),i["\u0275did"](10,4341760,null,0,d.ButtonDirective,[i.ElementRef],{iconPos:[0,"iconPos"],label:[1,"label"],icon:[2,"icon"]},null)],(function(l,e){l(e,9,0,"/home"),l(e,10,0,"left","Goto Home","pi pi-home")}),null)}function k(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,7,"p-card",[["class","login-form ui-g-12 ui-md-12"]],null,null,null,t.b,t.a)),i["\u0275did"](1,49152,null,2,a.Card,[i.ElementRef],null,null),i["\u0275qud"](603979776,3,{headerFacet:0}),i["\u0275qud"](603979776,4,{footerFacet:0}),(l()(),i["\u0275and"](16777216,null,1,1,null,w)),i["\u0275did"](5,16384,null,0,p.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275and"](16777216,null,1,1,null,M)),i["\u0275did"](7,16384,null,0,p.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component;l(e,5,0,1==n.status),l(e,7,0,2==n.status)}),null)}function _(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,6,"div",[["class","ui-g-12 ui-md-6 ui-md-offset-3"],["style","margin-top: 10%;text-align: center"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,1,"p-messages",[["class","ui-g-12"],["styleClass","loagin-wrapper"]],null,null,null,g.b,g.a)),i["\u0275did"](2,245760,null,0,m.Messages,[[2,f.MessageService]],{styleClass:[0,"styleClass"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,C)),i["\u0275did"](4,16384,null,0,p.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,k)),i["\u0275did"](6,16384,null,0,p.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component;l(e,2,0,"loagin-wrapper"),l(e,4,0,!n.isVerifying),l(e,6,0,n.isVerifying)}),null)}function V(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,"app-email-verify",[],null,null,null,_,R)),i["\u0275did"](1,114688,null,0,S,[h.a,b.a,v.FormBuilder,f.MessageService,c.ActivatedRoute,c.Router,I.c],null,null)],(function(l,e){l(e,1,0)}),null)}var N=i["\u0275ccf"]("app-email-verify",S,V,{},{},[]);class O{}var T=n("7LN8"),L=n("IL0X"),F=n("CjyL"),E=n("I45J");n.d(e,"EmailVerifyModuleNgFactory",(function(){return P}));var P=i["\u0275cmf"](u,[],(function(l){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,N]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[i.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](4608,v.FormBuilder,v.FormBuilder,[]),i["\u0275mpd"](4608,v["\u0275angular_packages_forms_forms_o"],v["\u0275angular_packages_forms_forms_o"],[]),i["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),i["\u0275mpd"](1073742336,c.RouterModule,c.RouterModule,[[2,c["\u0275angular_packages_router_router_a"]],[2,c.Router]]),i["\u0275mpd"](1073742336,O,O,[]),i["\u0275mpd"](1073742336,v["\u0275angular_packages_forms_forms_d"],v["\u0275angular_packages_forms_forms_d"],[]),i["\u0275mpd"](1073742336,v.ReactiveFormsModule,v.ReactiveFormsModule,[]),i["\u0275mpd"](1073742336,T.SharedModule,T.SharedModule,[]),i["\u0275mpd"](1073742336,a.CardModule,a.CardModule,[]),i["\u0275mpd"](1073742336,L.MessageModule,L.MessageModule,[]),i["\u0275mpd"](1073742336,m.MessagesModule,m.MessagesModule,[]),i["\u0275mpd"](1073742336,F.a,F.a,[]),i["\u0275mpd"](1073742336,E.a,E.a,[]),i["\u0275mpd"](1073742336,o.ProgressSpinnerModule,o.ProgressSpinnerModule,[]),i["\u0275mpd"](1073742336,d.ButtonModule,d.ButtonModule,[]),i["\u0275mpd"](1073742336,u,u,[]),i["\u0275mpd"](1024,c.ROUTES,(function(){return[[{path:"",component:S}]]}),[])])}))},WwML:function(l,e,n){"use strict";var i=this&&this.__decorate||function(l,e,n,i){var u,s=arguments.length,t=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)t=Reflect.decorate(l,e,n,i);else for(var a=l.length-1;a>=0;a--)(u=l[a])&&(t=(s<3?u(t):s>3?u(e,n,t):u(e,n))||t);return s>3&&t&&Object.defineProperty(e,n,t),t},u=this&&this.__metadata||function(l,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,e)},s=this&&this.__param||function(l,e){return function(n,i){e(n,i,l)}};Object.defineProperty(e,"__esModule",{value:!0});var t=n("8Y7J"),a=n("SVse"),r=n("GS7A"),o=n("4Vzq"),d=function(){function l(l){this.messageService=l,this.closable=!0,this.enableService=!0,this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.valueChange=new t.EventEmitter}return l.prototype.ngOnInit=function(){var l=this;this.messageService&&this.enableService&&(this.messageSubscription=this.messageService.messageObserver.subscribe((function(e){if(e)if(e instanceof Array){var n=e.filter((function(e){return l.key===e.key}));l.value=l.value?l.value.concat(n):n.slice()}else l.key===e.key&&(l.value=l.value?l.value.concat([e]):[e])})),this.clearSubscription=this.messageService.clearObserver.subscribe((function(e){e?l.key===e&&(l.value=null):l.value=null})))},l.prototype.hasMessages=function(){return this.value&&this.value.length>0},l.prototype.getSeverityClass=function(){return this.value[0].severity},l.prototype.clear=function(l){this.value=[],this.valueChange.emit(this.value),l.preventDefault()},Object.defineProperty(l.prototype,"icon",{get:function(){var l=null;if(this.hasMessages())switch(this.value[0].severity){case"success":l="pi-check";break;case"info":l="pi-info-circle";break;case"error":l="pi-times";break;case"warn":l="pi-exclamation-triangle";break;default:l="pi-info-circle"}return l},enumerable:!0,configurable:!0}),l.prototype.ngOnDestroy=function(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe()},i([t.Input(),u("design:type",Array)],l.prototype,"value",void 0),i([t.Input(),u("design:type",Boolean)],l.prototype,"closable",void 0),i([t.Input(),u("design:type",Object)],l.prototype,"style",void 0),i([t.Input(),u("design:type",String)],l.prototype,"styleClass",void 0),i([t.Input(),u("design:type",Boolean)],l.prototype,"enableService",void 0),i([t.Input(),u("design:type",String)],l.prototype,"key",void 0),i([t.Input(),u("design:type",String)],l.prototype,"showTransitionOptions",void 0),i([t.Input(),u("design:type",String)],l.prototype,"hideTransitionOptions",void 0),i([t.Output(),u("design:type",t.EventEmitter)],l.prototype,"valueChange",void 0),i([t.Component({selector:"p-messages",template:'\n        <div *ngIf="hasMessages()" class="ui-messages ui-widget ui-corner-all"\n                    [ngClass]="{\'ui-messages-info\':(value[0].severity === \'info\'),\n                    \'ui-messages-warn\':(value[0].severity === \'warn\'),\n                    \'ui-messages-error\':(value[0].severity === \'error\'),\n                    \'ui-messages-success\':(value[0].severity === \'success\')}"\n                    [ngStyle]="style" [class]="styleClass" [@messageAnimation]="{value: \'visible\', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}">\n            <a tabindex="0" class="ui-messages-close" (click)="clear($event)" (keydown.enter)="clear($event)" *ngIf="closable">\n                <i class="pi pi-times"></i>\n            </a>\n            <span class="ui-messages-icon pi" [ngClass]="icon"></span>\n            <ul>\n                <li *ngFor="let msg of value">\n                    <span *ngIf="msg.summary" class="ui-messages-summary" [innerHTML]="msg.summary"></span>\n                    <span *ngIf="msg.detail" class="ui-messages-detail" [innerHTML]="msg.detail"></span>\n                </li>\n            </ul>\n        </div>\n    ',animations:[r.trigger("messageAnimation",[r.state("visible",r.style({transform:"translateY(0)",opacity:1})),r.transition("void => *",[r.style({transform:"translateY(-25%)",opacity:0}),r.animate("{{showTransitionParams}}")]),r.transition("* => void",[r.animate("{{hideTransitionParams}}",r.style({opacity:0,transform:"translateY(-25%)"}))])])]}),s(0,t.Optional()),u("design:paramtypes",[o.MessageService])],l)}();e.Messages=d;var c=i([t.NgModule({imports:[a.CommonModule],exports:[d],declarations:[d]})],(function(){}));e.MessagesModule=c},hpmT:function(l,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d}));var i=n("8Y7J"),u=(n("4WZM"),n("SVse")),s=(n("7LN8"),i["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function t(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-header"]],null,null,null,null,null)),i["\u0275ncd"](null,0)],null,null)}function a(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-title"]],null,null,null,null,null)),(l()(),i["\u0275ted"](1,null,["",""]))],null,(function(l,e){l(e,1,0,e.component.header)}))}function r(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-subtitle"]],null,null,null,null,null)),(l()(),i["\u0275ted"](1,null,["",""]))],null,(function(l,e){l(e,1,0,e.component.subheader)}))}function o(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-footer"]],null,null,null,null,null)),i["\u0275ncd"](null,2)],null,null)}function d(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,15,"div",[],null,null,null,null,null)),i["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](2,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275prd"](512,null,u["\u0275NgStyleImpl"],u["\u0275NgStyleR2Impl"],[i.ElementRef,i.KeyValueDiffers,i.Renderer2]),i["\u0275did"](4,278528,null,0,u.NgStyle,[u["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,t)),i["\u0275did"](6,16384,null,0,u.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275eld"](7,0,null,null,8,"div",[["class","ui-card-body"]],null,null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,a)),i["\u0275did"](9,16384,null,0,u.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,r)),i["\u0275did"](11,16384,null,0,u.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275eld"](12,0,null,null,1,"div",[["class","ui-card-content"]],null,null,null,null,null)),i["\u0275ncd"](null,1),(l()(),i["\u0275and"](16777216,null,null,1,null,o)),i["\u0275did"](15,16384,null,0,u.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component;l(e,2,0,n.styleClass,"ui-card ui-widget ui-widget-content ui-corner-all"),l(e,4,0,n.style),l(e,6,0,n.headerFacet),l(e,9,0,n.header),l(e,11,0,n.subheader),l(e,15,0,n.footerFacet)}),null)}}}]);