import{$b as _,Db as i,Eb as t,Fb as g,Md as y,Nd as h,Ob as v,Wb as n,Xa as e,Xb as a,Zb as C,dc as o,ec as p,ma as c,oa as x,pa as f,sb as u,wb as E,zb as m}from"./chunk-22ROJBYS.js";function B(l,d){if(l&1&&(i(0,"tr",4)(1,"td",2),n(2),o(3,"translate"),t(),i(4,"td")(5,"div"),n(6),t(),i(7,"div"),n(8),t(),i(9,"div"),n(10),t(),i(11,"div"),n(12),t(),i(13,"div"),n(14),t()()()),l&2){let r=v();e(2),a(p(3,7,"post-detail.user.address")),e(4),a(r.address.street),e(2),a(r.address.suite),e(2),a(r.address.city),e(2),a(r.address.zipcode),e(2),C("",r.address.geo.lat,", ",r.address.geo.lng,"")}}function T(l,d){if(l&1&&(i(0,"tr",4)(1,"td",2),n(2),o(3,"translate"),t(),i(4,"td")(5,"div"),n(6),t(),i(7,"div"),n(8),t(),i(9,"div"),n(10),t()()()),l&2){let r=v();e(2),a(p(3,4,"post-detail.user.company")),e(4),a(r.company.name),e(2),a(r.company.catchPhrase),e(2),a(r.company.bs)}}function w(l,d){l&1&&(i(0,"tbody")(1,"tr")(2,"td",2),n(3),o(4,"translate"),t(),i(5,"td"),n(6),t()(),i(7,"tr")(8,"td",2),n(9),o(10,"translate"),t(),i(11,"td"),n(12),t()(),i(13,"tr")(14,"td",2),n(15),o(16,"translate"),t(),i(17,"td"),n(18),t()(),i(19,"tr")(20,"td",2),n(21),o(22,"translate"),t(),i(23,"td"),n(24),t()(),i(25,"tr")(26,"td",2),n(27),o(28,"translate"),t(),i(29,"td"),n(30),t()(),i(31,"tr")(32,"td",2),n(33),o(34,"translate"),t(),i(35,"td"),n(36),t()(),u(37,B,15,9,"tr",3)(38,T,11,6,"tr",3),t()),l&2&&(e(3),a(p(4,14,"post-detail.user.id")),e(3),a("#"+d.id),e(3),a(p(10,16,"post-detail.user.name")),e(3),a(d.name),e(3),a(p(16,18,"post-detail.user.username")),e(3),a(d.username),e(3),a(p(22,20,"post-detail.user.email")),e(3),a(d.email),e(3),a(p(28,22,"post-detail.user.phone")),e(3),a(d.phone),e(3),a(p(34,24,"post-detail.user.website")),e(3),a(d.website),e(),m(37,d.address?37:-1),e(),m(38,d.company?38:-1))}var q=(()=>{let d=class d{constructor(){this.user=c.required(),this.isLoading=c.required()}};d.\u0275fac=function(s){return new(s||d)},d.\u0275cmp=f({type:d,selectors:[["app-user-info"]],inputs:{user:[x.SignalBased,"user"],isLoading:[x.SignalBased,"isLoading"]},standalone:!0,features:[_],decls:5,vars:3,consts:[[1,"w-full"],["width","150"],[1,"font-bold"],["class","align-baseline"],[1,"align-baseline"]],template:function(s,I){if(s&1&&(i(0,"table",0)(1,"colgroup"),g(2,"col",1)(3,"col"),t(),u(4,w,39,26,"tbody"),t()),s&2){let S;E("blur-sm",I.isLoading()),e(4),m(4,(S=I.user())?4:-1,S)}},dependencies:[h,y],changeDetection:0});let l=d;return l})();export{q as a};