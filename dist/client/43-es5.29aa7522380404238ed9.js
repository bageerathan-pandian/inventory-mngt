(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{i80g:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J"),o=function(){},r=u("pMnS"),e=u("wd/R"),a=function(){function n(){}return n.prototype.ngOnInit=function(){$(function(){var n=e().subtract(29,"days"),l=e();function u(n,l){$("#reportrange span").html(n.format("MMMM D, YYYY")+" - "+l.format("MMMM D, YYYY"))}$("#reportrange").daterangepicker({startDate:n,endDate:l,ranges:{Today:[e(),e()],Yesterday:[e().subtract(1,"days"),e().subtract(1,"days")],"Last 7 Days":[e().subtract(6,"days"),e()],"Last 30 Days":[e().subtract(29,"days"),e()],"This Month":[e().startOf("month"),e().endOf("month")],"Last Month":[e().subtract(1,"month").startOf("month"),e().subtract(1,"month").endOf("month")]}},u),u(n,l)})},n}(),c=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" sales-report works!\n"])),(n()(),t["\u0275eld"](2,0,null,null,4,"div",[["id","reportrange"],["style","background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-calendar"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 "])),(n()(),t["\u0275eld"](5,0,null,null,0,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,0,"i",[["class","fa fa-caret-down"]],null,null,null,null,null))],null,null)}var p=t["\u0275ccf"]("app-sales-report",a,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-sales-report",[],null,null,null,s,c)),t["\u0275did"](1,114688,null,0,a,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),d=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),i=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" purchase-report works!\n"]))],null,null)}var m=t["\u0275ccf"]("app-purchase-report",d,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-purchase-report",[],null,null,null,f,i)),t["\u0275did"](1,114688,null,0,d,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),h=u("SVse"),g=u("iInd"),y=function(){};u.d(l,"ReportsModuleNgFactory",function(){return M});var M=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,p,m]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[t.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),t["\u0275mpd"](1073742336,g.RouterModule,g.RouterModule,[[2,g["\u0275angular_packages_router_router_a"]],[2,g.Router]]),t["\u0275mpd"](1073742336,y,y,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,g.ROUTES,function(){return[[{path:"",redirectTo:"sales-report",pathMatch:"full"},{path:"sales-report",component:a},{path:"purchase-report",component:d}]]},[])])})}}]);