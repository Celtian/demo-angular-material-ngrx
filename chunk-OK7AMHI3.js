import{a as ft,b as Ct,c as ht}from"./chunk-K2E7GH23.js";import{a as tt,b as et,e as it,g as rt,h as b,j as ot,k as nt,m as w,o as at,p as lt,q as mt,r as pt,t as st,u as ct,v as dt}from"./chunk-IZ4VIF3P.js";import{b as bt,c as vt,d as _t}from"./chunk-IUGUECLQ.js";import{A as Z,B as $,c as y,e as j,h as z,i as L,j as A,k as G,la as ut,s as H,t as U,y as X,z as Y}from"./chunk-U6TPWIGV.js";import{a as gt,b as xt,c as Mt,e as yt,f as wt}from"./chunk-BJW54FBD.js";import{Ab as a,Bb as l,Cb as g,Gb as x,Ia as C,Ja as h,Jb as M,Jd as Q,Kd as q,Lb as k,Md as W,Nd as J,Od as K,Pb as E,Qb as F,Rb as R,Tb as p,Ub as f,V as D,Vb as T,Yb as N,Za as t,_a as c,_b as V,ac as i,bc as r,pb as v,qb as _,rb as d,wb as B,ya as O}from"./chunk-Y724VXGI.js";var St=o=>[o];function Bt(o,s){if(o&1){let S=x();a(0,"button",11),i(1,"translate"),i(2,"translate"),M("click",function(){C(S);let e=k();return h(e.form.controls.title.setValue(""))}),a(3,"mat-icon"),p(4,"close"),l()()}o&2&&(d("matTooltip",r(1,2,"uni.clear")),_("aria-label",r(2,4,"uni.clear")))}function kt(o,s){if(o&1){let S=x();a(0,"button",11),i(1,"translate"),i(2,"translate"),M("click",function(){C(S);let e=k();return h(e.form.controls.body.setValue(""))}),a(3,"mat-icon"),p(4,"close"),l()()}o&2&&(d("matTooltip",r(1,2,"uni.clear")),_("aria-label",r(2,4,"uni.clear")))}function Tt(o,s){o&1&&(a(0,"div",12)(1,"a",13),i(2,"localize"),p(3),i(4,"translate"),l(),g(5,"mat-icon",14),i(6,"translate"),a(7,"a",13),i(8,"localize"),p(9),i(10,"translate"),l()()),o&2&&(t(),d("routerLink",V(15,St,r(2,5,"/"))),t(2),f(r(4,7,"breadcrumbs.app.posts")),t(2),_("aria-label",r(6,9,"uni.aria-label.arrow-icon")),t(2),d("routerLink",V(17,St,r(8,11,"/create"))),t(2),f(r(10,13,"breadcrumbs.posts.create")))}var me=(()=>{let s=class s{constructor(m,e,n,u,P,I,Pt,It){this.postCollection=m,this.breadcrumbsPortalService=e,this.fb=n,this.snackBar=u,this.router=P,this.lr=I,this.translate=Pt,this.confirm=It,this.form=this.fb.group({title:new w("",{nonNullable:!0,validators:[b.required,b.min(3)]}),body:new w("",{nonNullable:!0,validators:[b.required,b.min(3)]}),userId:new w(1,{nonNullable:!0})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(bt.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent)}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.postCollection.add(this.form.value).pipe(D()).subscribe({next:m=>{this.form.reset(m),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("uni.close"));let e=this.lr.translateRoute("/");this.router.navigate([e])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("uni.close"))}})}onReset(m){m.preventDefault(),this.form.reset()}};s.\u0275fac=function(e){return new(e||s)(c(_t),c($),c(pt),c(ut),c(H),c(X),c(W),c(vt))},s.\u0275cmp=O({type:s,selectors:[["app-post-create"]],viewQuery:function(e,n){if(e&1&&E(y,7),e&2){let u;F(u=R())&&(n.portalContent=u.first)}},standalone:!0,features:[N],decls:28,vars:21,consts:[["autosize","cdkTextareaAutosize"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"ngSubmit","reset","formGroup"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(e,n){if(e&1){let u=x();a(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),p(3),l()(),a(4,"mat-card-content",1)(5,"form",2),M("ngSubmit",function(){return C(u),h(n.onSubmit())})("reset",function(I){return C(u),h(n.onReset(I))}),a(6,"mat-form-field",3)(7,"mat-label"),p(8),i(9,"translate"),l(),g(10,"input",4),v(11,Bt,5,6,"button",5),l(),a(12,"mat-form-field",3)(13,"mat-label"),p(14),i(15,"translate"),l(),g(16,"textarea",6,0),i(18,"translate"),v(19,kt,5,6,"button",5),l(),a(20,"div",7)(21,"button",8),p(22),i(23,"translate"),l(),a(24,"button",9),p(25),i(26,"translate"),l()()()()(),v(27,Tt,11,19,"div",10)}e&2&&(t(3),f(n.form.controls.title.value),t(2),d("formGroup",n.form),t(3),f(r(9,11,"form.post.title.label")),t(3),B(11,n.form.controls.title.value?11:-1),t(3),f(r(15,13,"form.post.body.label")),t(2),d("placeholder",r(18,15,"form.post.body.placeholder")),t(3),B(19,n.form.controls.body.value?19:-1),t(2),d("disabled",n.form.pristine),t(),T(" ",r(23,17,"uni.reset")," "),t(2),d("disabled",n.form.pristine||n.form.invalid),t(),T(" ",r(26,19,"uni.submit")," "))},dependencies:[st,at,rt,ot,nt,lt,mt,wt,gt,Mt,yt,xt,q,Q,ht,Ct,it,tt,et,ft,G,L,z,A,dt,ct,j,y,K,J,U,Z,Y],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let o=s;return o})();export{me as PostCreateComponent};
