(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{hpmT:function(l,n,u){"use strict";u.d(n,"a",function(){return a}),u.d(n,"b",function(){return r});var e=u("8Y7J"),t=(u("4WZM"),u("SVse")),a=(u("7LN8"),e["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function d(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-header"]],null,null,null,null,null)),e["\u0275ncd"](null,0)],null,null)}function i(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.header)})}function s(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-subtitle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.subheader)})}function o(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","ui-card-footer"]],null,null,null,null,null)),e["\u0275ncd"](null,2)],null,null)}function r(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,15,"div",[],null,null,null,null,null)),e["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275prd"](512,null,t["\u0275NgStyleImpl"],t["\u0275NgStyleR2Impl"],[e.ElementRef,e.KeyValueDiffers,e.Renderer2]),e["\u0275did"](4,278528,null,0,t.NgStyle,[t["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,d)),e["\u0275did"](6,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](7,0,null,null,8,"div",[["class","ui-card-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,i)),e["\u0275did"](9,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](11,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](12,0,null,null,1,"div",[["class","ui-card-content"]],null,null,null,null,null)),e["\u0275ncd"](null,1),(l()(),e["\u0275and"](16777216,null,null,1,null,o)),e["\u0275did"](15,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.styleClass,"ui-card ui-widget ui-widget-content ui-corner-all"),l(n,4,0,u.style),l(n,6,0,u.headerFacet),l(n,9,0,u.header),l(n,11,0,u.subheader),l(n,15,0,u.footerFacet)},null)}},kvWK:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var a=u("pMnS"),d=u("WW0F"),i=u("VSng"),s=u("SVse"),o=u("hpmT"),r=u("4WZM"),c=(u("24Yq"),u("410/"),u("wd/R")),p=u("QNcV"),m=u("0hB7");class g{constructor(l,n,u,e){this.messageService=l,this.stripeCheckoutLoader=n,this.auth=u,this.sessionService=e,this.addScript=!1,this.futureMonthEnd=c().add(1,"M"),this.paymentDetails=[],this.paypalConfig={env:"sandbox",client:{sandbox:"AYvoUXz1SzxSJvZbpGkgofTKprB_Iz3gY06RgddW8-dmFXcBPdF8HZVe4aFuVuMF0DWLy-df3AjSWN_6",production:"EEVz2dWLaEOmKwOdOEdHGLsHJoJONWZkX_b89zPnLv-QwCI1AD_EJYm3bTBiqqVpalvnKuzDci74pimG"},commit:!0,payment:(l,n)=>n.payment.create({payment:{transactions:[{amount:{total:11,currency:"USD"}}]}}),onAuthorize:(l,n)=>n.payment.execute().then(l=>{console.log("payment",l)})}}ngOnInit(){this.getPaymentDetails(this.sessionService.getItem("company_id"))}getPaymentDetails(l){this.auth.getPaymentDetails(l).subscribe(l=>{console.log("data",l),this.paymentDetails=l[0]},l=>{console.log("er",l),this.messageService.add({severity:"error",summary:"Opps!",detail:"Sothing went wrong!"})})}ngAfterViewChecked(){this.addScript||this.addPaypalScript().then(()=>{paypal.Button.render(this.paypalConfig,"#paypal-checkout-btn")})}ngAfterViewInit(){this.stripeCheckoutLoader.createHandler({key:"pk_test_F63TkaKKCwSbIPGbjcbzWuJT00PfCXqOJj",token:l=>{console.log("Payment successful!",l)}}).then(l=>{this.stripeCheckoutHandler=l})}addPaypalScript(){return this.addScript=!0,new Promise((l,n)=>{let u=document.createElement("script");u.src="https://www.paypalobjects.com/api/checkout.js",u.onload=l,document.body.appendChild(u)})}onBuyProduct(){this.stripeCheckoutHandler.open({amount:15e5,currency:"INR"}).then(l=>{console.log("Payment successful!",l);let n={plan_type:1,payment_amount:15e3,currency:"INR",company_details_id:this.sessionService.getItem("company_id"),payment_details:l,expiry_date:"",status:1};this.onRegisterPayment(n)}).catch(l=>{if("stripe_closed"!==l)throw l})}onRegisterPayment(l){this.messageService.clear(),this.auth.onRegisterPayment(l).subscribe(l=>{console.log("data",l)},l=>{console.log("er",l),this.messageService.add({severity:"error",summary:"Opps!",detail:"Sothing went wrong!"})})}}var v=u("4Vzq"),f=u("iRPl"),y=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,27,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,6,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Plan Type"])),(l()(),e["\u0275eld"](5,0,null,null,2,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"span",[["class","label label-warning"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Free Account "])),(l()(),e["\u0275eld"](8,0,null,null,6,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Payment Amount"])),(l()(),e["\u0275eld"](12,0,null,null,2,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,[" "," "])),e["\u0275ppd"](14,3),(l()(),e["\u0275eld"](15,0,null,null,5,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Currency"])),(l()(),e["\u0275eld"](19,0,null,null,1,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](20,null,[" "," "])),(l()(),e["\u0275eld"](21,0,null,null,6,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Expiry Date"])),(l()(),e["\u0275eld"](25,0,null,null,2,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](26,null,[" "," "])),e["\u0275ppd"](27,2)],null,function(l,n){var u=n.component,t=e["\u0275unv"](n,13,0,l(n,14,0,e["\u0275nov"](n.parent,0),u.paymentDetails.payment_amount,"INR",!0));l(n,13,0,t),l(n,20,0,u.paymentDetails.currency);var a=e["\u0275unv"](n,26,0,l(n,27,0,e["\u0275nov"](n.parent,1),u.paymentDetails.expiry_date,"medium"));l(n,26,0,a)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,39,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,6,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Plan Type"])),(l()(),e["\u0275eld"](5,0,null,null,2,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"span",[["class","label label-success"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Paid Account"])),(l()(),e["\u0275eld"](8,0,null,null,6,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Payment Amount"])),(l()(),e["\u0275eld"](12,0,null,null,2,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,[" "," "])),e["\u0275ppd"](14,3),(l()(),e["\u0275eld"](15,0,null,null,5,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Currency"])),(l()(),e["\u0275eld"](19,0,null,null,1,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](20,null,[" "," "])),(l()(),e["\u0275eld"](21,0,null,null,5,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email"])),(l()(),e["\u0275eld"](25,0,null,null,1,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](26,null,[" "," "])),(l()(),e["\u0275eld"](27,0,null,null,5,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Type"])),(l()(),e["\u0275eld"](31,0,null,null,1,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](32,null,[" "," "])),(l()(),e["\u0275eld"](33,0,null,null,6,"div",[["class","ui-g-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,2,"div",[["class","ui-g-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,1,"label",[["for","vin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Paid date"])),(l()(),e["\u0275eld"](37,0,null,null,2,"div",[["class","ui-g-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](38,null,[" "," "])),e["\u0275ppd"](39,2)],null,function(l,n){var u=n.component,t=e["\u0275unv"](n,13,0,l(n,14,0,e["\u0275nov"](n.parent,0),u.paymentDetails.payment_amount,"INR",!0));l(n,13,0,t),l(n,20,0,u.paymentDetails.currency),l(n,26,0,u.paymentDetails.payment_details.email),l(n,32,0,u.paymentDetails.payment_details.type);var a=e["\u0275unv"](n,38,0,l(n,39,0,e["\u0275nov"](n.parent,1),u.paymentDetails.updatedAt,"medium"));l(n,38,0,a)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p-button",[["label","Pay"]],null,[[null,"onClick"]],function(l,n,u){var e=!0;return"onClick"===n&&(e=!1!==l.component.onBuyProduct()&&e),e},d.b,d.a)),e["\u0275did"](1,49152,null,0,i.Button,[],{label:[0,"label"]},{onClick:"onClick"})],function(l,n){l(n,1,0,"Pay")},null)}function I(l){return e["\u0275vid"](0,[e["\u0275pid"](0,s.CurrencyPipe,[e.LOCALE_ID]),e["\u0275pid"](0,s.DatePipe,[e.LOCALE_ID]),(l()(),e["\u0275eld"](2,0,null,null,11,"div",[["style","margin-top: 15px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,10,"p-card",[],null,null,null,o.b,o.a)),e["\u0275did"](4,49152,null,2,r.Card,[e.ElementRef],null,null),e["\u0275qud"](603979776,1,{headerFacet:0}),e["\u0275qud"](603979776,2,{footerFacet:0}),(l()(),e["\u0275eld"](7,0,null,1,4,"div",[["class","ui-g ui-fluid"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](9,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](11,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,1,1,null,C)),e["\u0275did"](13,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,9,0,"0"==u.paymentDetails.plan_type),l(n,11,0,"1"==u.paymentDetails.plan_type),l(n,13,0,"0"==u.paymentDetails.plan_type)},null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-product-buy",[],null,null,null,I,y)),e["\u0275did"](1,12697600,null,0,g,[v.MessageService,f.a,p.a,m.a],null,null)],function(l,n){l(n,1,0)},null)}var _=e["\u0275ccf"]("app-product-buy",g,R,{},{},[]),S=u("iInd");class w{}var P=u("F6mo"),D=u("7LN8");u.d(n,"ProductBuyModuleNgFactory",function(){return N});var N=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,_]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[e.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,f.a,f.a,[]),e["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),e["\u0275mpd"](1073742336,S.RouterModule,S.RouterModule,[[2,S["\u0275angular_packages_router_router_a"]],[2,S.Router]]),e["\u0275mpd"](1073742336,w,w,[]),e["\u0275mpd"](1073742336,i.ButtonModule,i.ButtonModule,[]),e["\u0275mpd"](1073742336,P.a,P.a,[]),e["\u0275mpd"](1073742336,D.SharedModule,D.SharedModule,[]),e["\u0275mpd"](1073742336,r.CardModule,r.CardModule,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,S.ROUTES,function(){return[[{path:"",component:g}]]},[])])})}}]);