import{c as at,d as nt,e as ot,f as rt,h as st,i as lt,l as ct,p as dt,u as pt,v as ht}from"./chunk-IZ4VIF3P.js";import{G as $e,I as Xe,J as Ze,M as le,N as ce,O as de,P as Je,S as pe,T as he,V as Y,W as et,Y as U,Z as tt,_ as it,j as Ye,k as Ue}from"./chunk-U6TPWIGV.js";import{Ab as l,Bb as p,C as _e,Cb as P,Cc as Re,Cd as Ge,Dd as Ke,Ed as Q,F as L,Fd as qe,G as ee,Gb as D,Gc as Le,Gd as Qe,Ha as Ie,Hd as se,Ia as _,Ja as f,Jb as v,Ka as T,La as xe,Lb as m,Mb as ze,N as fe,Na as Oe,Nb as ae,Ob as H,Pb as W,Qb as A,Rb as z,S as be,Sb as Fe,Ta as Me,Tb as O,Ua as E,Ub as R,Vb as G,Xb as Ee,Yb as K,Za as c,_a as h,_c as ne,ea as te,fa as ie,fb as we,ga as k,hd as Ve,i as w,id as oe,k as ue,kd as Be,lb as j,lc as q,ma as ve,na as V,nc as y,oc as M,pa as F,pb as I,qb as S,qd as Ne,rb as b,sa as ye,tb as ke,td as je,ua as Ce,va as Se,vb as Te,wb as x,x as J,xa as d,xb as Pe,xd as re,ya as B,yb as De,yd as He,za as N,zb as Ae,zd as We}from"./chunk-Y724VXGI.js";var Pt=["trigger"],Dt=["panel"],At=[[["mat-select-trigger"]],"*"],zt=["mat-select-trigger","*"];function Ft(a,n){if(a&1&&(l(0,"span",4),O(1),p()),a&2){let o=m();c(),R(o.placeholder)}}function Et(a,n){a&1&&ae(0)}function Rt(a,n){if(a&1&&(l(0,"span",11),O(1),p()),a&2){let o=m(2);c(),R(o.triggerValue)}}function Lt(a,n){if(a&1&&(l(0,"span",10),I(1,Et,1,0)(2,Rt,2,1),p()),a&2){let o=m();c(),x(1,o.customTrigger?1:2)}}function Vt(a,n){if(a&1){let o=D();l(0,"div",12,1),v("@transformPanel.done",function(t){_(o);let i=m();return f(i._panelDoneAnimatingStream.next(t.toState))})("keydown",function(t){_(o);let i=m();return f(i._handleKeydown(t))}),ae(2,1),p()}if(a&2){let o=m();Te("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",o._getPanelTheme(),""),b("ngClass",o.panelClass)("@transformPanel","showing"),S("id",o.id+"-panel")("aria-multiselectable",o.multiple)("aria-label",o.ariaLabel||null)("aria-labelledby",o._getPanelAriaLabelledby())}}var Bt={transformPanelWrap:pe("transformPanelWrap",[U("* => void",it("@transformPanel",[tt()],{optional:!0}))]),transformPanel:pe("transformPanel",[et("void",Y({opacity:0,transform:"scale(1, 0.8)"})),U("void => showing",he("120ms cubic-bezier(0, 0, 0.2, 1)",Y({opacity:1,transform:"scale(1, 1)"}))),U("* => void",he("100ms linear",Y({opacity:0})))])};var ft=0,bt=new F("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=ye(le);return()=>a.scrollStrategies.reposition()}});function Nt(a){return()=>a.scrollStrategies.reposition()}var jt=new F("MAT_SELECT_CONFIG"),Ht={provide:bt,deps:[le],useFactory:Nt},Wt=new F("MatSelectTrigger"),me=class{constructor(n,o){this.source=n,this.value=o}},vt=(()=>{let n=class n{_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=qe(e,this.options,this.optionGroups),s=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=Qe(s.offsetTop,s.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new me(this,e)}get focused(){return this._focused||this._panelOpen}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(st.required)??!1}set required(e){this._required=e,this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,r,s,C,g,Ct,St,ge,It,xt,Ot,X){this._viewportRuler=e,this._changeDetectorRef=t,this._elementRef=s,this._dir=C,this._parentFormField=St,this.ngControl=ge,this._liveAnnouncer=Ot,this._defaultOptions=X,this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._panelOpen=!1,this._compareWith=(u,Z)=>u===Z,this._uid=`mat-select-${ft++}`,this._triggerAriaLabelledBy=null,this._destroy=new w,this.stateChanges=new w,this._onChange=()=>{},this._onTouched=()=>{},this._valueId=`mat-select-value-${ft++}`,this._panelDoneAnimatingStream=new w,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._multiple=!1,this.disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this._initialized=new w,this.optionSelectionChanges=_e(()=>{let u=this.options;return u?u.changes.pipe(te(u),ie(()=>L(...u.map(Z=>Z.onSelectionChange)))):this._initialized.pipe(ie(()=>this.optionSelectionChanges))}),this.openedChange=new E,this._openedStream=this.openedChange.pipe(ee(u=>u),J(()=>{})),this._closedStream=this.openedChange.pipe(ee(u=>!u),J(()=>{})),this.selectionChange=new E,this.valueChange=new E,this._trackedModal=null,this._skipPredicate=u=>this.panelOpen?!1:u.disabled,this.ngControl&&(this.ngControl.valueAccessor=this),X?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=X.typeaheadDebounceInterval),this._errorStateTracker=new He(r,ge,Ct,g,this.stateChanges),this._scrollStrategyFactory=xt,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(It)||0,this.id=this.id}ngOnInit(){this._selectionModel=new $e(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(be(),k(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe(k(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(k(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(te(null),k(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&oe(this._trackedModal,"aria-owns",t),Ve(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;oe(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,s=this._keyManager;if(!s.isTyping()&&r&&!ne(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let C=this.selected;s.onKeydown(e);let g=this.selected;g&&C!==g&&this._liveAnnouncer.announce(g.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,s=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!s&&(i===13||i===32)&&t.activeItem&&!ne(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!s&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let C=this.options.some(g=>!g.disabled&&!g.selected);this.options.forEach(g=>{g.disabled||(C?g.select():g.deselect())})}else{let C=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==C&&t.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe(fe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return i.value!=null&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ce?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Be(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=L(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(k(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),L(...this.options.map(t=>t._stateChanges)).pipe(k(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}};n.\u0275fac=function(t){return new(t||n)(h(Xe),h(q),h(we),h(We),h(Me),h(je,8),h(ct,8),h(dt,8),h(nt,8),h(lt,10),Oe("tabindex"),h(bt),h(Ne),h(jt,8))},n.\u0275cmp=B({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,r){if(t&1&&(H(r,Wt,5),H(r,Q,5),H(r,Ke,5)),t&2){let s;A(s=z())&&(i.customTrigger=s.first),A(s=z())&&(i.options=s),A(s=z())&&(i.optionGroups=s)}},viewQuery:function(t,i){if(t&1&&(W(Pt,5),W(Dt,5),W(de,5)),t&2){let r;A(r=z())&&(i.trigger=r.first),A(r=z())&&(i.panel=r.first),A(r=z())&&(i._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){t&1&&v("keydown",function(s){return i._handleKeydown(s)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(S("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),ke("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{userAriaDescribedBy:[d.None,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[d.HasDecoratorInputTransform,"disabled","disabled",y],disableRipple:[d.HasDecoratorInputTransform,"disableRipple","disableRipple",y],tabIndex:[d.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:M(e)],hideSingleSelectionIndicator:[d.HasDecoratorInputTransform,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",y],placeholder:"placeholder",required:[d.HasDecoratorInputTransform,"required","required",y],multiple:[d.HasDecoratorInputTransform,"multiple","multiple",y],disableOptionCentering:[d.HasDecoratorInputTransform,"disableOptionCentering","disableOptionCentering",y],compareWith:"compareWith",value:"value",ariaLabel:[d.None,"aria-label","ariaLabel"],ariaLabelledby:[d.None,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[d.HasDecoratorInputTransform,"typeaheadDebounceInterval","typeaheadDebounceInterval",M],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],standalone:!0,features:[Ee([{provide:at,useExisting:n},{provide:Ge,useExisting:n}]),j,Ie,K],ngContentSelectors:zt,decls:11,vars:8,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"backdropClick","attach","detach","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"keydown","ngClass"]],template:function(t,i){if(t&1){let r=D();ze(At),l(0,"div",2,0),v("click",function(){return _(r),f(i.open())}),l(3,"div",3),I(4,Ft,2,1,"span",4)(5,Lt,3,1),p(),l(6,"div",5)(7,"div",6),T(),l(8,"svg",7),P(9,"path",8),p()()()(),I(10,Vt,3,9,"ng-template",9),v("backdropClick",function(){return _(r),f(i.close())})("attach",function(){return _(r),f(i._onAttached())})("detach",function(){return _(r),f(i.close())})}if(t&2){let r=Fe(1);c(3),S("id",i._valueId),c(),x(4,i.empty?4:5),c(6),b("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||r)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[ce,de,Re],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}'],encapsulation:2,data:{animation:[Bt.transformPanel]},changeDetection:0});let a=n;return a})();var yt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=N({type:n}),n.\u0275inj=V({providers:[Ht],imports:[Le,Je,se,re,Ze,rt,se,re]});let a=n;return a})();function Gt(a,n){if(a&1&&(l(0,"mat-option",16),O(1),p()),a&2){let o=n.$implicit;b("value",o),c(),G(" ",o," ")}}function Kt(a,n){if(a&1){let o=D();l(0,"mat-form-field",13)(1,"mat-select",15),v("selectionChange",function(t){_(o);let i=m(2);return f(i._changePageSize(t.value))}),De(2,Gt,2,2,"mat-option",16,Pe),p()()}if(a&2){let o=m(2);b("appearance",o._formFieldAppearance)("color",o.color),c(),b("value",o.pageSize)("disabled",o.disabled)("aria-labelledby",o._pageSizeLabelId)("panelClass",o.selectConfig.panelClass||"")("disableOptionCentering",o.selectConfig.disableOptionCentering),c(),Ae(o._displayedPageSizeOptions)}}function qt(a,n){if(a&1&&(l(0,"div",14),O(1),p()),a&2){let o=m(2);c(),R(o.pageSize)}}function Qt(a,n){if(a&1&&(l(0,"div",2)(1,"div",12),O(2),p(),I(3,Kt,4,7,"mat-form-field",13)(4,qt,2,1,"div",14),p()),a&2){let o=m();c(),S("id",o._pageSizeLabelId),c(),G(" ",o._intl.itemsPerPageLabel," "),c(),x(3,o._displayedPageSizeOptions.length>1?3:-1),c(),x(4,o._displayedPageSizeOptions.length<=1?4:-1)}}function Yt(a,n){if(a&1){let o=D();l(0,"button",17),v("click",function(){_(o);let t=m();return f(t.firstPage())}),T(),l(1,"svg",7),P(2,"path",18),p()()}if(a&2){let o=m();b("matTooltip",o._intl.firstPageLabel)("matTooltipDisabled",o._previousButtonsDisabled())("matTooltipPosition","above")("disabled",o._previousButtonsDisabled()),S("aria-label",o._intl.firstPageLabel)}}function Ut(a,n){if(a&1){let o=D();l(0,"button",19),v("click",function(){_(o);let t=m();return f(t.lastPage())}),T(),l(1,"svg",7),P(2,"path",20),p()()}if(a&2){let o=m();b("matTooltip",o._intl.lastPageLabel)("matTooltipDisabled",o._nextButtonsDisabled())("matTooltipPosition","above")("disabled",o._nextButtonsDisabled()),S("aria-label",o._intl.lastPageLabel)}}var $=(()=>{let n=class n{constructor(){this.changes=new w,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let r=e*t,s=r<i?Math.min(r+t,i):r+t;return`${r+1} \u2013 ${s} of ${i}`}}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=ve({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();function $t(a){return a||new $}var Xt={provide:$,deps:[[new Ce,new Se,$]],useFactory:$t},Zt=50;var Jt=new F("MAT_PAGINATOR_DEFAULT_OPTIONS"),ei=0,ti=(()=>{let n=class n{get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>M(t,0)),this._updateDisplayedPageSizeOptions()}constructor(e,t,i){if(this._intl=e,this._changeDetectorRef=t,this._pageSizeLabelId=`mat-paginator-page-size-label-${ei++}`,this._isInitialized=!1,this._initializedStream=new ue(1),this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this.hidePageSize=!1,this.showFirstLastButtons=!1,this.selectConfig={},this.disabled=!1,this.page=new E,this.initialized=this._initializedStream,this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:r,pageSizeOptions:s,hidePageSize:C,showFirstLastButtons:g}=i;r!=null&&(this._pageSize=r),s!=null&&(this._pageSizeOptions=s),C!=null&&(this.hidePageSize=C),g!=null&&(this.showFirstLastButtons=g)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Zt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}};n.\u0275fac=function(t){return new(t||n)(h($),h(q),h(Jt,8))},n.\u0275cmp=B({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[d.HasDecoratorInputTransform,"pageIndex","pageIndex",M],length:[d.HasDecoratorInputTransform,"length","length",M],pageSize:[d.HasDecoratorInputTransform,"pageSize","pageSize",M],pageSizeOptions:"pageSizeOptions",hidePageSize:[d.HasDecoratorInputTransform,"hidePageSize","hidePageSize",y],showFirstLastButtons:[d.HasDecoratorInputTransform,"showFirstLastButtons","showFirstLastButtons",y],selectConfig:"selectConfig",disabled:[d.HasDecoratorInputTransform,"disabled","disabled",y]},outputs:{page:"page"},exportAs:["matPaginator"],standalone:!0,features:[j,K],decls:14,vars:14,consts:[[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),I(2,Qt,5,4,"div",2),l(3,"div",3)(4,"div",4),O(5),p(),I(6,Yt,3,5,"button",5),l(7,"button",6),v("click",function(){return i.previousPage()}),T(),l(8,"svg",7),P(9,"path",8),p()(),xe(),l(10,"button",9),v("click",function(){return i.nextPage()}),T(),l(11,"svg",7),P(12,"path",10),p()(),I(13,Ut,3,5,"button",11),p()()()),t&2&&(c(2),x(2,i.hidePageSize?-1:2),c(3),G(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),c(),x(6,i.showFirstLastButtons?6:-1),c(),b("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),S("aria-label",i._intl.previousPageLabel),c(3),b("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),S("aria-label",i._intl.nextPageLabel),c(3),x(13,i.showFirstLastButtons?13:-1))},dependencies:[ot,vt,Q,Ye,pt],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let a=n;return a})(),Xi=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=N({type:n}),n.\u0275inj=V({providers:[Xt],imports:[Ue,yt,ht,ti]});let a=n;return a})();export{$ as a,ti as b,Xi as c};
