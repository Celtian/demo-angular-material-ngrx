import{$ as d,_ as f,da as _,ja as k,ka as K,l as C,la as V,m as w,ma as c,n as L,na as G,o as S,p as A,s as x}from"./chunk-XV2UP6CS.js";import{Ga as F,Ha as j,Wa as D,a as v,b as P,ia as N,ic as q,la as M,pa as T,qa as h,ra as b}from"./chunk-RCQUF6CP.js";var st={APP:{POSTS:"app.posts",NOT_FOUND:"app.not-found"},POSTS:{DETAIL:"posts.detail",CREATE:"posts.create",EDIT:"posts.edit"}};var Z="@ngrx/router-store/request",mt=f(Z,d()),O="@ngrx/router-store/navigation",vt=f(O,d()),y="@ngrx/router-store/cancel",Nt=f(y,d()),I="@ngrx/router-store/error",Tt=f(I,d()),$="@ngrx/router-store/navigated",Ct=f($,d());function St(e,t){let n=t;switch(n.type){case O:case I:case y:return{state:n.payload.routerState,navigationId:n.payload.event.id};default:return e}}var g=class{serialize(t){return{root:this.serializeRoute(t.root),url:t.url}}serializeRoute(t){let n=t.children.map(i=>this.serializeRoute(i));return{params:t.params,data:t.data,url:t.url,outlet:t.outlet,title:t.title,routeConfig:t.routeConfig?{path:t.routeConfig.path,pathMatch:t.routeConfig.pathMatch,redirectTo:t.routeConfig.redirectTo,outlet:t.routeConfig.outlet,title:typeof t.routeConfig.title=="string"?t.routeConfig.title:void 0}:null,queryParams:t.queryParams,fragment:t.fragment,firstChild:n[0],children:n}}},z=function(e){return e[e.PreActivation=1]="PreActivation",e[e.PostActivation=2]="PostActivation",e}(z||{}),J="router",H=new T("@ngrx/router-store Internal Configuration"),W=new T("@ngrx/router-store Configuration");function et(e){return v({stateKey:J,serializer:g,navigationActionTiming:z.PreActivation},e)}var E=class{serialize(t){return{root:this.serializeRoute(t.root),url:t.url}}serializeRoute(t){let n=t.children.map(i=>this.serializeRoute(i));return{params:t.params,paramMap:t.paramMap,data:t.data,url:t.url,outlet:t.outlet,title:t.title,routeConfig:t.routeConfig?{component:t.routeConfig.component,path:t.routeConfig.path,pathMatch:t.routeConfig.pathMatch,redirectTo:t.routeConfig.redirectTo,outlet:t.routeConfig.outlet,title:t.routeConfig.title}:null,queryParams:t.queryParams,queryParamMap:t.queryParamMap,fragment:t.fragment,component:t.routeConfig?t.routeConfig.component:void 0,root:void 0,parent:void 0,firstChild:n[0],pathFromRoot:void 0,children:n}}},m=class{},u=function(e){return e[e.NONE=1]="NONE",e[e.ROUTER=2]="ROUTER",e[e.STORE=3]="STORE",e}(u||{}),Q=(()=>{let t=class t{constructor(i,s,o,l,R,p){this.store=i,this.router=s,this.serializer=o,this.errorHandler=l,this.config=R,this.activeRuntimeChecks=p,this.lastEvent=null,this.routerState=null,this.trigger=u.NONE,this.stateKey=this.config.stateKey,!V()&&q()&&(p?.strictActionSerializability||p?.strictStateSerializability)&&this.serializer instanceof E&&console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer."),this.setUpStoreStateListener(),this.setUpRouterEventsListener()}setUpStoreStateListener(){this.store.pipe(K(this.stateKey),N(this.store)).subscribe(([i,s])=>{this.navigateIfNeeded(i,s)})}navigateIfNeeded(i,s){if(!i||!i.state||this.trigger===u.ROUTER||this.lastEvent instanceof C)return;let o=i.state.url;it(this.router.url,o)||(this.storeState=s,this.trigger=u.STORE,this.router.navigateByUrl(o).catch(l=>{this.errorHandler.handleError(l)}))}setUpRouterEventsListener(){let i=this.config.navigationActionTiming===z.PostActivation,s;this.router.events.pipe(N(this.store)).subscribe(([o,l])=>{this.lastEvent=o,o instanceof C?(this.routerState=this.serializer.serialize(this.router.routerState.snapshot),this.trigger!==u.STORE&&(this.storeState=l,this.dispatchRouterRequest(o))):o instanceof A?(s=o,!i&&this.trigger!==u.STORE&&this.dispatchRouterNavigation(o)):o instanceof L?(this.dispatchRouterCancel(o),this.reset()):o instanceof S?(this.dispatchRouterError(o),this.reset()):o instanceof w&&(this.trigger!==u.STORE&&(i&&this.dispatchRouterNavigation(s),this.dispatchRouterNavigated(o)),this.reset())})}dispatchRouterRequest(i){this.dispatchRouterAction(Z,{event:i})}dispatchRouterNavigation(i){let s=this.serializer.serialize(i.state);this.dispatchRouterAction(O,{routerState:s,event:new A(i.id,i.url,i.urlAfterRedirects,s)})}dispatchRouterCancel(i){this.dispatchRouterAction(y,{storeState:this.storeState,event:i})}dispatchRouterError(i){this.dispatchRouterAction(I,{storeState:this.storeState,event:new S(i.id,i.url,`${i}`)})}dispatchRouterNavigated(i){let s=this.serializer.serialize(this.router.routerState.snapshot);this.dispatchRouterAction($,{event:i,routerState:s})}dispatchRouterAction(i,s){this.trigger=u.ROUTER;try{this.store.dispatch({type:i,payload:P(v({routerState:this.routerState},s),{event:this.config.routerState===0?s.event:{id:s.event.id,url:s.event.url,urlAfterRedirects:s.event.urlAfterRedirects}})})}finally{this.trigger=u.NONE}}reset(){this.trigger=u.NONE,this.storeState=null,this.routerState=null}};t.\u0275fac=function(s){return new(s||t)(h(k),h(x),h(m),h(D),h(W),h(_))},t.\u0275prov=M({token:t,factory:t.\u0275fac});let e=t;return e})();function it(e,t){return B(e)===B(t)}function B(e){return e?.length>0&&e[e.length-1]==="/"?e.substring(0,e.length-1):e}function At(e={}){return j([{provide:H,useValue:e},{provide:W,useFactory:et,deps:[H]},{provide:m,useClass:e.serializer?e.serializer:e.routerState===0?E:g},{provide:F,multi:!0,useFactory(){return()=>b(Q)}},Q])}function rt(){return G(J)}function Ot(e=rt()){let t=c(e,r=>r&&r.state),n=c(t,r=>r&&r.root),i=c(n,r=>{if(!r)return;let a=r;for(;a.firstChild;)a=a.firstChild;return a}),s=c(n,r=>r&&r.fragment),o=c(n,r=>r&&r.queryParams),l=r=>c(o,a=>a&&a[r]),R=c(i,r=>r&&r.params),p=r=>c(R,a=>a&&a[r]),U=c(i,r=>r&&r.data),X=r=>c(U,a=>a&&a[r]),Y=c(t,r=>r&&r.url),tt=c(i,r=>{if(r?.routeConfig)return typeof r.routeConfig.title=="string"?r.routeConfig.title:r.title});return{selectCurrentRoute:i,selectFragment:s,selectQueryParams:o,selectQueryParam:l,selectRouteParams:R,selectRouteParam:p,selectRouteData:U,selectRouteDataParam:X,selectUrl:Y,selectTitle:tt}}export{St as a,At as b,Ot as c,st as d};
