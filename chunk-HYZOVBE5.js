import{a as nt}from"./chunk-MFKLQTZ5.js";import{b as I,c as ft,d as xt}from"./chunk-FI32Y5TI.js";import{b as at,c as ot,e as dt}from"./chunk-LJGVXG4G.js";import{d as it}from"./chunk-WBCUXGRC.js";import{d as rt}from"./chunk-ORFGKYDG.js";import{A as $,B as tt,c as P,e as U,f as z,h as Q,i as V,k as A,s as X,t as G,y as Y,ya as et,z as Z}from"./chunk-CTBQ3WIE.js";import{a as pt,b as lt,c as ct,d as st,e as mt,f as ut}from"./chunk-EFY7DP7E.js";import{$b as p,Cb as h,Da as y,Ea as w,Gb as a,Hb as o,Ib as v,Jc as j,La as E,Mb as O,Pb as B,Pc as F,Rb as u,Sd as H,Td as q,Vb as R,Vd as J,Wb as L,Wd as K,Xb as k,Xd as W,Za as e,_a as m,ac as c,bc as _,fa as D,fc as b,gb as T,gc as N,hc as n,ic as r,sa as M,wb as S,xb as g,yb as f,zb as x}from"./chunk-LZQYLMJQ.js";var ht=i=>[i],Ct=(i,s)=>[i,s];function St(i,s){if(i&1){let t=O();a(0,"div",1)(1,"button",4),B("deleted",function(){y(t);let l=u(2);return w(l.onDeleted())}),p(2),n(3,"translate"),o(),a(4,"a",5),n(5,"localize"),p(6),n(7,"translate"),o()()}if(i&2){let t=u(2);e(),f("appPostDelete",t.dataSource.data().id),e(),_(" ",r(3,4,"uni.delete")," "),e(2),f("routerLink",b(10,ht,r(5,6,"/"+t.dataSource.data().id+"/"+t.ROUTE_DEFINITION.POSTS.EDIT))),e(2),c(r(7,8,"uni.edit"))}}function gt(i,s){if(i&1&&(S(0,St,8,12,"div",1),a(1,"mat-card")(2,"mat-card-header")(3,"mat-card-subtitle"),p(4),o(),a(5,"mat-card-title"),p(6),n(7,"uppercase"),o()(),a(8,"mat-card-content")(9,"p",2),p(10),n(11,"translate"),o(),a(12,"p"),p(13),o(),a(14,"p",2),p(15),n(16,"translate"),o(),v(17,"app-user-info",3),o()()),i&2){let t=u();h(t.dataSource.state()==="data"?0:-1),e(3),x("blur-sm",t.dataSource.state()==="loading"),e(),c("#"+t.dataSource.data().id),e(),x("blur-sm",t.dataSource.state()==="loading"),e(),c(r(7,18,t.dataSource.data().title)),e(3),x("blur-sm",t.dataSource.state()==="loading"),e(),_(" ",r(11,20,"post-detail.about-post")," "),e(2),x("blur-sm",t.dataSource.state()==="loading"),e(),_(" ",t.dataSource.data().body," "),e(),x("blur-sm",t.dataSource.state()==="loading"),e(),_(" ",r(16,22,"post-detail.about-author")," "),e(2),f("user",t.dataSource.data().user)("isLoading",t.dataSource.state()==="loading")}}function Pt(i,s){if(i&1&&(a(0,"mat-card")(1,"mat-card-content",6),v(2,"mat-icon",7),n(3,"translate"),a(4,"div"),p(5),o()()()),i&2){let t=u();e(2),g("aria-label",r(3,2,"uni.aria-label.error-icon")),e(3),c(t.dataSource.error())}}function bt(i,s){i&1&&(a(0,"mat-card")(1,"mat-card-content",6),v(2,"mat-icon",8),n(3,"translate"),a(4,"div"),p(5),n(6,"translate"),o()()()),i&2&&(e(2),g("aria-label",r(3,2,"uni.aria-label.warning-icon")),e(3),c(r(6,4,"error.post-was-not-found")))}function It(i,s){if(i&1&&(v(0,"mat-icon",10),n(1,"translate"),a(2,"a",5),n(3,"localize"),p(4),o()),i&2){let t=u(2);g("aria-label",r(1,3,"uni.aria-label.arrow-icon")),e(2),f("routerLink",N(7,Ct,r(3,5,"/"),t.dataSource.data().id)),e(2),c(t.dataSource.data().id)}}function Dt(i,s){if(i&1&&(a(0,"div",9)(1,"a",5),n(2,"localize"),p(3),n(4,"translate"),o(),S(5,It,5,10),o()),i&2){let t=u();e(),f("routerLink",b(7,ht,r(2,3,"/"))),e(2),c(r(4,5,"breadcrumbs.app.posts")),e(2),h(t.dataSource.state()==="data"?5:-1)}}var re=(()=>{class i{constructor(t,d,l,C,vt,_t){this.postCollection=t,this.translate=d,this.breadcrumbsPortalService=l,this.lr=C,this.router=vt,this.store=_t,this.destroyRef=M(E),this.dataSource=new ot(I),this.ROUTE_DEFINITION=it}ngOnDestroy(){this.portalContent?.detach()}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),this.store.select(at).pipe(xt(this.dataSource),ft(),D(t=>this.postCollection.getExpanded(t)),z(this.destroyRef)).subscribe({next:t=>{this.dataSource.setData(t)},error:t=>{if(t instanceof F&&t.status>=400&&t.status<500)this.dataSource.setData(I);else{let d=this.translate.instant("error.unexpected-exception");this.dataSource.setError(d)}}})}onDeleted(){let t=this.lr.translateRoute("/");this.router.navigate([t])}static{this.\u0275fac=function(d){return new(d||i)(m(rt),m(J),m(tt),m(Y),m(X),m(et))}}static{this.\u0275cmp=T({type:i,selectors:[["app-post-detail"]],viewQuery:function(d,l){if(d&1&&R(P,7),d&2){let C;L(C=k())&&(l.portalContent=C.first)}},decls:4,vars:3,consts:[["class","container flex items-center gap-1 py-4",4,"cdkPortal"],[1,"flex","items-end","justify-end","gap-2"],[1,"mb-2","font-semibold","text-md"],[3,"user","isLoading"],["mat-button","","color","accent",3,"deleted","appPostDelete"],["mat-button","","color","primary",3,"routerLink"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","fontIcon","error"],["aria-hidden","false","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(d,l){d&1&&S(0,gt,18,24)(1,Pt,6,4,"mat-card")(2,bt,7,6,"mat-card")(3,Dt,6,9,"div",0),d&2&&(h(l.dataSource.state()==="data"||l.dataSource.state()==="loading"?0:-1),e(),h(l.dataSource.state()==="error"?1:-1),e(),h(l.dataSource.state()==="empty"?2:-1))},dependencies:[j,ut,pt,ct,mt,st,lt,q,H,A,V,Q,U,P,W,K,nt,G,$,Z,dt],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return i})();export{re as PostDetailComponent};
