import{a as yt,b as It,c as Mt}from"./chunk-JYZLBE4U.js";import{a as dt,b as st,e as pt,g as mt,h as M,j as ct,k as ut,o as ft,p as _t,q as xt,r as Ct,t as ht,u as bt,v as vt}from"./chunk-HLZHUOYP.js";import{a as D,c as Ft,d as jt,e as zt}from"./chunk-DS6LRZQI.js";import{a as Pt,c as Dt}from"./chunk-BLLRCSUX.js";import{a as gt}from"./chunk-KCNYKJWJ.js";import{b as Et,c as wt,d as Tt}from"./chunk-ASRTK4OC.js";import{V as St,c as E,e as Q,f as q,h as H,i as K,j as W,k as J,m as Z,p as $,q as tt,v as ot,w as nt,x as rt,y as lt}from"./chunk-AUU2XHJ7.js";import{a as Bt,b as kt,c as Ot,d as Vt,e as Rt,f as Nt}from"./chunk-EFXBFYW2.js";import{$a as F,Db as y,Fb as c,Fc as G,Jb as p,Kb as _,Lb as I,P as k,Qb as j,Qd as X,Rd as Y,Sb as T,Tb as z,Td as et,U as O,Ub as n,Ud as it,Vb as r,Vd as at,Xa as i,Ya as f,Zb as L,_b as A,a as B,ac as U,ea as V,hb as C,ib as m,kb as w,ob as S,pb as x,ra as R,sa as N,tb as l,ub as d,vb as h,xa as b,ya as v,zb as g}from"./chunk-P6JOJAQU.js";function Ht(t,s){if(t&1){let e=g();l(0,"div",12)(1,"button",13),y("deleted",function(){b(e);let o=c(2);return v(o.onDeleted())}),p(2),n(3,"translate"),d()()}if(t&2){let e=c(2);i(1),m("appPostDelete",e.dataSource.data().id),i(1),I(" ",r(3,2,"uni.delete")," ")}}function Kt(t,s){if(t&1){let e=g();l(0,"button",14),y("click",function(){b(e);let o=c(2);return o.form.controls.title.setValue(""),v(o.form.controls.body.markAsDirty())}),n(1,"translate"),n(2,"translate"),l(3,"mat-icon"),p(4,"close"),d()()}t&2&&(m("matTooltip",r(2,4,"uni.clear")),C("aria-label",r(1,2,"uni.clear")))}function Wt(t,s){if(t&1){let e=g();l(0,"button",14),y("click",function(){b(e);let o=c(2);return o.form.controls.body.setValue(""),v(o.form.controls.body.markAsDirty())}),n(1,"translate"),n(2,"translate"),l(3,"mat-icon"),p(4,"close"),d()()}t&2&&(m("matTooltip",r(2,4,"uni.clear")),C("aria-label",r(1,2,"uni.clear")))}function Jt(t,s){if(t&1){let e=g();S(0,Ht,4,4,"div",1),l(1,"mat-card")(2,"mat-card-header")(3,"mat-card-subtitle"),p(4),d(),l(5,"mat-card-title"),p(6),d()(),l(7,"mat-card-content",2)(8,"form",3),y("ngSubmit",function(){b(e);let o=c();return v(o.onSubmit())})("reset",function(o){b(e);let u=c();return v(u.onReset(o))}),l(9,"mat-form-field",4)(10,"mat-label"),p(11),n(12,"translate"),d(),h(13,"input",5),S(14,Kt,5,6,"button",6),d(),l(15,"mat-form-field",4)(16,"mat-label"),p(17),n(18,"translate"),d(),h(19,"textarea",7,8),n(21,"translate"),S(22,Wt,5,6,"button",6),d(),l(23,"div",9)(24,"button",10),p(25),n(26,"translate"),d(),l(27,"button",11),p(28),n(29,"translate"),d()()()()()}if(t&2){let e=c();x(0,e.dataSource.state()==="data"?0:-1),i(3),w("blur-sm",e.dataSource.state()!=="data"),i(1),_("#"+e.dataSource.data().id),i(1),w("blur-sm",e.dataSource.state()!=="data"),i(1),_(e.dataSource.data().title),i(2),m("formGroup",e.form),i(3),_(r(12,17,"form.post.title.label")),i(3),x(14,e.form.controls.title.value?14:-1),i(3),_(r(18,19,"form.post.body.label")),i(2),m("placeholder",r(21,21,"form.post.body.placeholder")),i(3),x(22,e.form.controls.body.value?22:-1),i(2),m("disabled",e.form.pristine),i(1),I(" ",r(26,23,"uni.reset")," "),i(2),m("disabled",e.form.pristine||e.form.invalid),i(1),I(" ",r(29,25,"uni.submit")," ")}}function Xt(t,s){if(t&1&&(l(0,"mat-card")(1,"mat-card-content",15),h(2,"mat-icon",16),n(3,"translate"),l(4,"div"),p(5),d()()()),t&2){let e=c();i(2),C("aria-label",r(3,2,"uni.aria-label.error-icon")),i(3),_(e.dataSource.error())}}function Yt(t,s){t&1&&(l(0,"mat-card")(1,"mat-card-content",15),h(2,"mat-icon",17),n(3,"translate"),l(4,"div"),p(5),n(6,"translate"),d()()()),t&2&&(i(2),C("aria-label",r(3,2,"uni.aria-label.warning-icon")),i(3),_(r(6,4,"error.post-was-not-found")))}var Zt=(t,s)=>[t,s],Lt=t=>[t];function $t(t,s){if(t&1&&(h(0,"mat-icon",20),n(1,"translate"),l(2,"a",19),n(3,"localize"),p(4),d(),h(5,"mat-icon",20),n(6,"translate"),l(7,"a",19),n(8,"localize"),p(9),n(10,"translate"),d()),t&2){let e=c(2);C("aria-label",r(1,6,"uni.aria-label.arrow-icon")),i(2),m("routerLink",z(16,Zt,r(3,8,"/"),e.dataSource.data().id)),i(2),_(e.dataSource.data().id),i(1),C("aria-label",r(6,10,"uni.aria-label.arrow-icon")),i(2),m("routerLink",T(19,Lt,r(8,12,"/"+e.dataSource.data().id+"/"+e.ROUTE_DEFINITION.POSTS.EDIT))),i(2),I(" ",r(10,14,"breadcrumbs.posts.edit"),"")}}function te(t,s){if(t&1&&(l(0,"div",18)(1,"a",19),n(2,"localize"),p(3),n(4,"translate"),d(),S(5,$t,11,21),d()),t&2){let e=c();i(1),m("routerLink",T(7,Lt,r(2,3,"/"))),i(2),_(r(4,5,"breadcrumbs.app.posts")),i(2),x(5,e.dataSource.state()==="data"?5:-1)}}var Ge=(()=>{let s=class s{constructor(a,o,u,P,At,Ut,Gt,Qt,qt){this.postCollection=a,this.route=o,this.translate=u,this.breadcrumbsPortalService=P,this.fb=At,this.snackBar=Ut,this.lr=Gt,this.confirm=Qt,this.router=qt,this.destroyRef=R(F),this.dataSource=new Pt(D),this.ROUTE_DEFINITION=gt,this.form=this.fb.nonNullable.group({title:["",[M.required,M.min(3)]],body:["",[M.required,M.min(3)]]})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(Et.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),this.route.paramMap.pipe(k(500),jt(),zt(this.dataSource),Ft(),V(a=>this.postCollection.getByKey(a)),q(this.destroyRef)).subscribe({next:a=>{this.dataSource.setData(a),this.form.patchValue(a)},error:a=>{if(a instanceof G&&a.status>=400&&a.status<500)this.dataSource.setData(D);else{let o=this.translate.instant("error.unexpected-exception");this.dataSource.setError(o)}}})}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.postCollection.update(B({id:this.dataSource.data().id},this.form.value)).pipe(O()).subscribe({next:a=>{this.dataSource.setData(a),this.form.reset(a),this.snackBar.open(this.translate.instant("response.update.success"),this.translate.instant("uni.close"))},error:()=>{this.snackBar.open(this.translate.instant("response.update.failed"),this.translate.instant("uni.close"))}})}onReset(a){a.preventDefault(),this.form.reset(this.dataSource.data())}onDeleted(){let a=this.lr.translateRoute("/");this.router.navigate([a])}};s.\u0275fac=function(o){return new(o||s)(f(Tt),f(Z),f(et),f(lt),f(Ct),f(St),f(ot),f(wt),f($))},s.\u0275cmp=N({type:s,selectors:[["app-post-edit"]],viewQuery:function(o,u){if(o&1&&A(E,7),o&2){let P;L(P=U())&&(u.portalContent=P.first)}},standalone:!0,features:[j],decls:4,vars:3,consts:[["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["class","flex items-end justify-end gap-2"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"formGroup","ngSubmit","reset"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],["autosize","cdkTextareaAutosize"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"flex","items-end","justify-end","gap-2"],["mat-button","","color","accent",3,"appPostDelete","deleted"],["matSuffix","","mat-icon-button","",3,"matTooltip","click"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","fontIcon","error"],["aria-hidden","false","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(o,u){o&1&&S(0,Jt,30,27,"mat-card")(1,Xt,6,4,"mat-card")(2,Yt,7,6,"mat-card")(3,te,6,9,"div",0),o&2&&(x(0,u.dataSource.state()==="loading"||u.dataSource.state()==="data"?0:-1),i(1),x(1,u.dataSource.state()==="error"?1:-1),i(1),x(2,u.dataSource.state()==="empty"?2:-1))},dependencies:[Q,E,Y,X,J,K,H,W,Nt,Bt,Ot,Rt,Vt,kt,Mt,It,pt,dt,st,yt,vt,bt,ht,ft,mt,ct,ut,_t,xt,at,it,tt,rt,nt,Dt],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let t=s;return t})();export{Ge as PostEditComponent};