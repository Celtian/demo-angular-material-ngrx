import{c as at,d as nt,e as ot,f as rt,h as st,i as lt,l as ct,p as dt,u as pt,v as ht}from"./chunk-4JZ5LHAZ.js";import{G as $e,I as Xe,J as Ze,M as de,N as pe,O as he,P as Je,S as me,T as ge,V as U,W as et,Y as $,Z as tt,_ as it,j as Ye,k as Ue}from"./chunk-XRQFQUXF.js";import{$b as Q,Aa as j,Ab as Pe,Bb as De,Bc as Le,Bd as Ge,C as be,Ca as F,Cb as Ae,Cd as Ke,Db as l,Dd as Y,Eb as p,Ed as qe,F as V,Fb as k,Fc as Re,Fd as Qe,G as te,Gd as ce,Ha as Se,Ja as Ie,Jb as E,Ka as xe,Mb as f,N as ie,Ob as m,Pb as ze,Qb as oe,Ra as Oe,Rb as G,S as ve,Sb as K,Ta as Me,Tb as P,Ub as D,Vb as Fe,Wb as x,Xa as c,Xb as R,Ya as h,Yb as q,Zc as re,_b as Ee,ea as ae,fa as ne,ga as M,gb as H,gd as Ve,hd as se,i as A,jb as we,jd as Be,k as fe,la as z,oa as d,ob as W,oc as b,pa as B,pc as O,pd as Ne,qa as N,sb as S,sd as je,ta as w,tb as y,ua as T,ub as _,va as C,wa as L,wb as Te,wd as le,x as ee,xa as ye,xd as He,yb as ke,yd as We,za as Ce,zb as I}from"./chunk-22ROJBYS.js";var Pt=["trigger"],Dt=["panel"];function At(a,n){if(a&1&&(l(0,"span",9),x(1),p()),a&2){let o=m();c(),R(o.placeholder)}}function zt(a,n){a&1&&oe(0)}function Ft(a,n){if(a&1&&(l(0,"span",11),x(1),p()),a&2){let o=m(2);c(),R(o.triggerValue)}}function Et(a,n){if(a&1&&(l(0,"span",10),S(1,zt,1,0)(2,Ft,2,1),p()),a&2){let o=m();c(),I(1,o.customTrigger?1:2)}}function Lt(a,n){if(a&1){let o=E();C(),L(),l(0,"div",12,13),f("@transformPanel.done",function(t){w(o);let i=m();return T(i._panelDoneAnimatingStream.next(t.toState))})("keydown",function(t){w(o);let i=m();return T(i._handleKeydown(t))}),oe(2,1),p()}if(a&2){let o=m();ke("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",o._getPanelTheme(),""),_("ngClass",o.panelClass)("@transformPanel","showing"),y("id",o.id+"-panel")("aria-multiselectable",o.multiple)("aria-label",o.ariaLabel||null)("aria-labelledby",o._getPanelAriaLabelledby())}}var Rt=[[["mat-select-trigger"]],"*"],Vt=["mat-select-trigger","*"],Bt={transformPanelWrap:me("transformPanelWrap",[$("* => void",it("@transformPanel",[tt()],{optional:!0}))]),transformPanel:me("transformPanel",[et("void",U({opacity:0,transform:"scale(1, 0.8)"})),$("void => showing",ge("120ms cubic-bezier(0, 0, 0.2, 1)",U({opacity:1,transform:"scale(1, 1)"}))),$("* => void",ge("100ms linear",U({opacity:0})))])};var ft=0,bt=new F("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=Se(de);return()=>a.scrollStrategies.reposition()}});function Nt(a){return()=>a.scrollStrategies.reposition()}var jt=new F("MAT_SELECT_CONFIG"),Ht={provide:bt,deps:[de],useFactory:Nt},Wt=new F("MatSelectTrigger"),ue=class{constructor(n,o){this.source=n,this.value=o}},vt=(()=>{let n=class n{_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=qe(e,this.options,this.optionGroups),s=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=Qe(s.offsetTop,s.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ue(this,e)}get focused(){return this._focused||this._panelOpen}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(st.required)??!1}set required(e){this._required=e,this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,r,s,v,g,Ct,St,_e,It,xt,Ot,Z){this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=i,this._elementRef=s,this._dir=v,this._parentFormField=St,this.ngControl=_e,this._liveAnnouncer=Ot,this._defaultOptions=Z,this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._panelOpen=!1,this._compareWith=(u,J)=>u===J,this._uid=`mat-select-${ft++}`,this._triggerAriaLabelledBy=null,this._destroy=new A,this.stateChanges=new A,this._onChange=()=>{},this._onTouched=()=>{},this._valueId=`mat-select-value-${ft++}`,this._panelDoneAnimatingStream=new A,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._multiple=!1,this.disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this.optionSelectionChanges=be(()=>{let u=this.options;return u?u.changes.pipe(ae(u),ne(()=>V(...u.map(J=>J.onSelectionChange)))):this._ngZone.onStable.pipe(ie(1),ne(()=>this.optionSelectionChanges))}),this.openedChange=new z,this._openedStream=this.openedChange.pipe(te(u=>u),ee(()=>{})),this._closedStream=this.openedChange.pipe(te(u=>!u),ee(()=>{})),this.selectionChange=new z,this.valueChange=new z,this._trackedModal=null,this._skipPredicate=u=>this.panelOpen?!1:u.disabled,this.ngControl&&(this.ngControl.valueAccessor=this),Z?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=Z.typeaheadDebounceInterval),this._errorStateTracker=new He(r,_e,Ct,g,this.stateChanges),this._scrollStrategyFactory=xt,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(It)||0,this.id=this.id}ngOnInit(){this._selectionModel=new $e(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(ve(),M(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe(M(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe(M(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ae(null),M(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&se(this._trackedModal,"aria-owns",t),Ve(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;se(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,s=this._keyManager;if(!s.isTyping()&&r&&!re(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let v=this.selected;s.onKeydown(e);let g=this.selected;g&&v!==g&&this._liveAnnouncer.announce(g.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,s=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!s&&(i===13||i===32)&&t.activeItem&&!re(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!s&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let v=this.options.some(g=>!g.disabled&&!g.selected);this.options.forEach(g=>{g.disabled||(v?g.select():g.deselect())})}else{let v=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==v&&t.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe(ie(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return i.value!=null&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof pe?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Be(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=V(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(M(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),V(...this.options.map(t=>t._stateChanges)).pipe(M(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}};n.\u0275fac=function(t){return new(t||n)(h(Xe),h(H),h(we),h(We),h(ye),h(je,8),h(ct,8),h(dt,8),h(nt,8),h(lt,10),Me("tabindex"),h(bt),h(Ne),h(jt,8))},n.\u0275cmp=B({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,r){if(t&1&&(G(r,Wt,5),G(r,Y,5),G(r,Ke,5)),t&2){let s;P(s=D())&&(i.customTrigger=s.first),P(s=D())&&(i.options=s),P(s=D())&&(i.optionGroups=s)}},viewQuery:function(t,i){if(t&1&&(K(Pt,5),K(Dt,5),K(he,5)),t&2){let r;P(r=D())&&(i.trigger=r.first),P(r=D())&&(i.panel=r.first),P(r=D())&&(i._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){t&1&&f("keydown",function(s){return i._handleKeydown(s)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(y("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),Te("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{userAriaDescribedBy:[d.None,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[d.HasDecoratorInputTransform,"disabled","disabled",b],disableRipple:[d.HasDecoratorInputTransform,"disableRipple","disableRipple",b],tabIndex:[d.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:O(e)],hideSingleSelectionIndicator:[d.HasDecoratorInputTransform,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],placeholder:"placeholder",required:[d.HasDecoratorInputTransform,"required","required",b],multiple:[d.HasDecoratorInputTransform,"multiple","multiple",b],disableOptionCentering:[d.HasDecoratorInputTransform,"disableOptionCentering","disableOptionCentering",b],compareWith:"compareWith",value:"value",ariaLabel:[d.None,"aria-label","ariaLabel"],ariaLabelledby:[d.None,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[d.HasDecoratorInputTransform,"typeaheadDebounceInterval","typeaheadDebounceInterval",O],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],standalone:!0,features:[Ee([{provide:at,useExisting:n},{provide:Ge,useExisting:n}]),W,Oe,Q],ngContentSelectors:Vt,decls:11,vars:8,consts:[["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],[1,"mat-mdc-select-value"],["class","mat-mdc-select-placeholder mat-mdc-select-min-line"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","attach","detach"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(t,i){if(t&1&&(ze(Rt),l(0,"div",0,1),f("click",function(){return i.open()}),l(3,"div",2),S(4,At,2,1,"span",3)(5,Et,3,1),p(),l(6,"div",4)(7,"div",5),C(),l(8,"svg",6),k(9,"path",7),p()()()(),S(10,Lt,3,9,"ng-template",8),f("backdropClick",function(){return i.close()})("attach",function(){return i._onAttached()})("detach",function(){return i.close()})),t&2){let r=Fe(1);c(3),y("id",i._valueId),c(),I(4,i.empty?4:5),c(6),_("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||r)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[pe,he,Le],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}'],encapsulation:2,data:{animation:[Bt.transformPanel]},changeDetection:0});let a=n;return a})();var yt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=N({type:n}),n.\u0275inj=j({providers:[Ht],imports:[Re,Je,ce,le,Ze,rt,ce,le]});let a=n;return a})();function Gt(a,n){if(a&1&&(l(0,"mat-option",18),x(1),p()),a&2){let o=n.$implicit;_("value",o),c(),q(" ",o," ")}}function Kt(a,n){if(a&1){let o=E();l(0,"mat-form-field",16)(1,"mat-select",17),f("selectionChange",function(t){w(o);let i=m(2);return T(i._changePageSize(t.value))}),De(2,Gt,2,2,"mat-option",18,Pe),p()()}if(a&2){let o=m(2);_("appearance",o._formFieldAppearance)("color",o.color),c(),_("value",o.pageSize)("disabled",o.disabled)("aria-labelledby",o._pageSizeLabelId)("panelClass",o.selectConfig.panelClass||"")("disableOptionCentering",o.selectConfig.disableOptionCentering),c(),Ae(o._displayedPageSizeOptions)}}function qt(a,n){if(a&1&&(l(0,"div",19),x(1),p()),a&2){let o=m(2);c(),R(o.pageSize)}}function Qt(a,n){if(a&1&&(l(0,"div",12)(1,"div",13),x(2),p(),S(3,Kt,4,7,"mat-form-field",14)(4,qt,2,1,"div",15),p()),a&2){let o=m();c(),y("id",o._pageSizeLabelId),c(),q(" ",o._intl.itemsPerPageLabel," "),c(),I(3,o._displayedPageSizeOptions.length>1?3:-1),c(),I(4,o._displayedPageSizeOptions.length<=1?4:-1)}}function Yt(a,n){if(a&1){let o=E();l(0,"button",20),f("click",function(){w(o);let t=m();return T(t.firstPage())}),C(),l(1,"svg",7),k(2,"path",21),p()()}if(a&2){let o=m();_("matTooltip",o._intl.firstPageLabel)("matTooltipDisabled",o._previousButtonsDisabled())("matTooltipPosition","above")("disabled",o._previousButtonsDisabled()),y("aria-label",o._intl.firstPageLabel)}}function Ut(a,n){if(a&1){let o=E();C(),L(),l(0,"button",22),f("click",function(){w(o);let t=m();return T(t.lastPage())}),C(),l(1,"svg",7),k(2,"path",23),p()()}if(a&2){let o=m();_("matTooltip",o._intl.lastPageLabel)("matTooltipDisabled",o._nextButtonsDisabled())("matTooltipPosition","above")("disabled",o._nextButtonsDisabled()),y("aria-label",o._intl.lastPageLabel)}}var X=(()=>{let n=class n{constructor(){this.changes=new A,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let r=e*t,s=r<i?Math.min(r+t,i):r+t;return`${r+1} \u2013 ${s} of ${i}`}}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=Ce({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();function $t(a){return a||new X}var Xt={provide:X,deps:[[new Ie,new xe,X]],useFactory:$t},Zt=50;var Jt=new F("MAT_PAGINATOR_DEFAULT_OPTIONS"),ei=0,ti=(()=>{let n=class n{get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>O(t,0)),this._updateDisplayedPageSizeOptions()}constructor(e,t,i){if(this._intl=e,this._changeDetectorRef=t,this._pageSizeLabelId=`mat-paginator-page-size-label-${ei++}`,this._isInitialized=!1,this._initializedStream=new fe(1),this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this.hidePageSize=!1,this.showFirstLastButtons=!1,this.selectConfig={},this.disabled=!1,this.page=new z,this.initialized=this._initializedStream,this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:r,pageSizeOptions:s,hidePageSize:v,showFirstLastButtons:g}=i;r!=null&&(this._pageSize=r),s!=null&&(this._pageSizeOptions=s),v!=null&&(this.hidePageSize=v),g!=null&&(this.showFirstLastButtons=g)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Zt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}};n.\u0275fac=function(t){return new(t||n)(h(X),h(H),h(Jt,8))},n.\u0275cmp=B({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[d.HasDecoratorInputTransform,"pageIndex","pageIndex",O],length:[d.HasDecoratorInputTransform,"length","length",O],pageSize:[d.HasDecoratorInputTransform,"pageSize","pageSize",O],pageSizeOptions:"pageSizeOptions",hidePageSize:[d.HasDecoratorInputTransform,"hidePageSize","hidePageSize",b],showFirstLastButtons:[d.HasDecoratorInputTransform,"showFirstLastButtons","showFirstLastButtons",b],selectConfig:"selectConfig",disabled:[d.HasDecoratorInputTransform,"disabled","disabled",b]},outputs:{page:"page"},exportAs:["matPaginator"],standalone:!0,features:[W,Q],decls:14,vars:14,consts:[[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],["class","mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button","class","mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-page-size-label"],["class","mat-mdc-paginator-page-size-select",3,"appearance","color"],["class","mat-mdc-paginator-page-size-value"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],["hideSingleSelectionIndicator","",3,"value","disabled","aria-labelledby","panelClass","disableOptionCentering","selectionChange"],[3,"value"],[1,"mat-mdc-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),S(2,Qt,5,4,"div",2),l(3,"div",3)(4,"div",4),x(5),p(),S(6,Yt,3,5,"button",5),l(7,"button",6),f("click",function(){return i.previousPage()}),C(),l(8,"svg",7),k(9,"path",8),p()(),L(),l(10,"button",9),f("click",function(){return i.nextPage()}),C(),l(11,"svg",7),k(12,"path",10),p()(),S(13,Ut,3,5,"button",11),p()()()),t&2&&(c(2),I(2,i.hidePageSize?-1:2),c(3),q(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),c(),I(6,i.showFirstLastButtons?6:-1),c(),_("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),y("aria-label",i._intl.previousPageLabel),c(3),_("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),y("aria-label",i._intl.nextPageLabel),c(3),I(13,i.showFirstLastButtons?13:-1))},dependencies:[ot,vt,Y,Ye,pt],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let a=n;return a})(),Xi=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=N({type:n}),n.\u0275inj=j({providers:[Xt],imports:[Ue,yt,ht,ti]});let a=n;return a})();export{X as a,ti as b,Xi as c};
