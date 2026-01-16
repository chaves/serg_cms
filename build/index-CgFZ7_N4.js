import{r as c,ie as ae,ig as xr,j as a,ih as re,en as g0,ii as m0,ij as Xt,ik as te,il as xe,em as We,im as Qt,io as Jt,ip as x0,iq as w0,ir as ke,is as wr,it as v0,iu as b0,iv as Lt,iw as Nn,ix as vr,iy as br,iz as pr,iA as _e,iB as p0,iC as $r,iD as $0,iE as m,n as p,f7 as E,iF as C0,iG as j0,iH as y0,iI as Cr,iJ as jr,iK as S0,iL as yr,iM as Sr,iN as Rr,iO as Mr,d$ as le,iP as Ar,iQ as Ir,iR as Tr,iS as Vr,iT as Er,iU as Lr,iV as Dr,iW as Hr,iX as R0,iY as zr,iZ as Br,i_ as kr,i$ as Or,j0 as Nr,j1 as _r,j2 as Fr,j3 as Wr,j4 as Ur,j5 as qr,j6 as Gr,j7 as Kr,j8 as Yr,j9 as Zr,ja as Xr,jb as Qr,jc as Jr,jd as Pr,je as M0,jf as e1,jg as t1,jh as n1,ji as o1,jj as r1,jk as a1,f9 as s1,jl as Dt,jm as Pt,jn as Ht,jo as zt,jp as i1,jq as c1,jr as l1,js as d1,jt as h1,ju as u1,jv as f1,jw as A0,jx as g1,jy as I0,jz as m1,jA as x1,jB as w1,jC as v1,jD as b1,jE as T0,jF as V0,jG as p1,jH as $1,jI as C1,jJ as j1,jK as y1,jL as S1,jM as R1,jN as M1,jO as A1,jP as I1,jQ as T1,jR as V1,jS as E1,jT as L1,jU as D1,jV as H1,jW as z1,jX as B1,jY as k1,jZ as O1,j_ as N1,j$ as _1,hS as _n,hT as E0}from"./strapi-Bqijykrh.js";var F1=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Oe=new WeakMap,dt=new WeakMap,ht={},At=0,L0=function(e){return e&&(e.host||L0(e.parentNode))},W1=function(e,t){return t.map(function(o){if(e.contains(o))return o;var r=L0(o);return r&&e.contains(r)?r:(console.error("aria-hidden",o,"in not contained inside",e,". Doing nothing"),null)}).filter(function(o){return!!o})},U1=function(e,t,o,r){var n=W1(t,Array.isArray(e)?e:[e]);ht[o]||(ht[o]=new WeakMap);var s=ht[o],i=[],l=new Set,d=new Set(n),u=function(g){!g||l.has(g)||(l.add(g),u(g.parentNode))};n.forEach(u);var h=function(g){!g||d.has(g)||Array.prototype.forEach.call(g.children,function(f){if(l.has(f))h(f);else try{var x=f.getAttribute(r),w=x!==null&&x!=="false",b=(Oe.get(f)||0)+1,C=(s.get(f)||0)+1;Oe.set(f,b),s.set(f,C),i.push(f),b===1&&w&&dt.set(f,!0),C===1&&f.setAttribute(o,"true"),w||f.setAttribute(r,"true")}catch($){console.error("aria-hidden: cannot operate on ",f,$)}})};return h(t),l.clear(),At++,function(){i.forEach(function(g){var f=Oe.get(g)-1,x=s.get(g)-1;Oe.set(g,f),s.set(g,x),f||(dt.has(g)||g.removeAttribute(r),dt.delete(g)),x||g.removeAttribute(o)}),At--,At||(Oe=new WeakMap,Oe=new WeakMap,dt=new WeakMap,ht={})}},D0=function(e,t,o){o===void 0&&(o="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),n=F1(e);return n?(r.push.apply(r,Array.from(n.querySelectorAll("[aria-live]"))),U1(r,n,o,"aria-hidden")):function(){return null}};function q1(e){const t=`${e}CollectionProvider`,[o,r]=v0(t),[n,s]=o(t,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),i=x=>{const{scope:w,children:b}=x,C=c.useRef(null),$=c.useRef(new Map).current,v=c.useRef(new Set).current;return a.jsx(n,{scope:w,itemMap:$,collectionRef:C,listeners:v,children:b})};i.displayName=t;const l=`${e}CollectionSlot`,d=c.forwardRef((x,w)=>{const{scope:b,children:C}=x,$=s(l,b),v=ae(w,$.collectionRef);return a.jsx(Lt,{ref:v,children:C})});d.displayName=l;const u=`${e}CollectionItemSlot`,h="data-radix-collection-item",g=c.forwardRef((x,w)=>{const{scope:b,children:C,...$}=x,v=c.useRef(null),R=ae(w,v),y=s(u,b);return c.useEffect(()=>{const M=Array.from(y.itemMap.values());return y.itemMap.set(v,{ref:v,...$}),y.listeners.forEach(j=>j(Array.from(y.itemMap.values()),M)),()=>{const j=Array.from(y.itemMap.values());y.itemMap.delete(v),y.listeners.forEach(S=>S(Array.from(y.itemMap.values()),j))}}),a.jsx(Lt,{[h]:"",ref:R,children:C})});g.displayName=u;function f(x){const w=s(`${e}CollectionConsumer`,x),b=c.useCallback(()=>{const $=w.collectionRef.current;if(!$)return[];const v=Array.from($.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((M,j)=>v.indexOf(M.ref.current)-v.indexOf(j.ref.current))},[w.collectionRef,w.itemMap]),C=c.useCallback($=>(w.listeners.add($),()=>w.listeners.delete($)),[w.listeners]);return{getItems:b,subscribe:C}}return[{Provider:i,Slot:d,ItemSlot:g},f,r]}const It=new Map;function G1(e,t){const o=e+(t?Object.entries(t).sort((n,s)=>n[0]<s[0]?-1:1).join():"");if(It.has(o))return It.get(o);const r=new Intl.Collator(e,t);return It.set(o,r),r}function en(e,t){const o=G1(e,{usage:"search",...t});return{startsWith(r,n){return n.length===0?!0:(r=r.normalize("NFC"),n=n.normalize("NFC"),o.compare(r.slice(0,n.length),n)===0)},endsWith(r,n){return n.length===0?!0:(r=r.normalize("NFC"),n=n.normalize("NFC"),o.compare(r.slice(-n.length),n)===0)},contains(r,n){if(n.length===0)return!0;r=r.normalize("NFC"),n=n.normalize("NFC");let s=0;const i=n.length;for(;s+i<=r.length;s++){const l=r.slice(s,s+i);if(o.compare(n,l)===0)return!0}return!1}}}const K1=e=>{const t=c.useRef();return c.useEffect(()=>{t.current=e}),t.current},H0=c.forwardRef(({children:e,estimatedItemSize:t=40,overscan:o=5,getItemCount:r,onViewportChange:n,...s},i)=>{const l=c.useRef(null),d=ae(i,l,n),u=c.useMemo(()=>c.Children.toArray(e),[e]),h=xr({count:r(),getScrollElement:()=>l.current,estimateSize:()=>t,overscan:o}),g=h.getVirtualItems();return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),a.jsx(re.div,{"data-radix-combobox-viewport":"",role:"presentation",...s,ref:d,style:{position:"relative",flex:1,overflow:"auto",...s.style},children:a.jsx("div",{style:{height:`${h.getTotalSize()}px`,width:"100%",position:"relative"},children:g.map(f=>{const x=u[f.index];return a.jsx("div",{"data-index":f.index,ref:h.measureElement,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${f.start}px)`},children:x},f.key)})})})]})});H0.displayName="VirtualizedViewport";const Y1=[" ","Enter","ArrowUp","ArrowDown"],Z1=["Enter"],X1=e=>!!(e.length===1&&e.match(/\S| /)),z0="Combobox",[Le,tt]=q1(z0),[Q1,je]=g0(z0),J1=({children:e})=>a.jsx($0,{children:a.jsx(Le.Provider,{scope:void 0,children:e})}),P1=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,ea=e=>{const{allowCustomValue:t=!1,autocomplete:o="none",children:r,open:n,defaultOpen:s,onOpenChange:i,value:l,defaultValue:d,onValueChange:u,disabled:h,required:g=!1,locale:f="en-EN",onTextValueChange:x,textValue:w,defaultTextValue:b,filterValue:C,defaultFilterValue:$,onFilterValueChange:v,isPrintableCharacter:R=X1,visible:y=!1,virtualized:M="auto",estimatedItemSize:j=40,overscan:S=5}=e,[V,z]=c.useState(null),[L,q]=c.useState(null),[D,k]=c.useState(null),[O,Y]=c.useState(null),[P=!1,H]=_e({prop:n,defaultProp:s,onChange:i}),[N,G]=_e({prop:l,defaultProp:d,onChange:u}),[J,Z]=_e({prop:w,defaultProp:t&&!b?l:b,onChange:x}),[ie,_]=_e({prop:C,defaultProp:$,onChange:v}),se=ke(),ne=c.useCallback((T,F)=>{const ee=F.map(X=>X.ref.current),[W,...U]=ee,[K]=U.slice(-1),ce=O??F.find(X=>X.value===N)?.ref.current;for(const X of T){if(X===ce)return;if(X?.scrollIntoView({block:"nearest"}),X===W&&L&&(L.scrollTop=0),X===K&&L&&(L.scrollTop=L.scrollHeight),Y(X),o==="both"){const Q=F.find(we=>we.ref.current===X);Q&&Z(Q.textValue)}if(X!==ce)return}},[o,Z,L,O,N]),ue=P1(o);return c.useEffect(()=>{o!=="both"&&Y(null)},[J,o]),c.useEffect(()=>{if(D&&V)return D0([D,V])},[D,V]),a.jsx(J1,{children:a.jsx(Q1,{allowCustomValue:t,autocomplete:ue,required:g,trigger:V,onTriggerChange:z,contentId:se,value:N,onValueChange:G,open:P,onOpenChange:H,disabled:h,locale:f,focusFirst:ne,textValue:J,onTextValueChange:Z,onViewportChange:q,onContentChange:k,visuallyFocussedItem:O,filterValue:ie,onFilterValueChange:_,onVisuallyFocussedItemChange:Y,isPrintableCharacter:R,visible:y,virtualized:M,estimatedItemSize:j,overscan:S,children:r})})},B0="ComboboxTrigger",k0=c.forwardRef((e,t)=>{const{...o}=e,r=je(B0),n=()=>{r.disabled||r.onOpenChange(!0)};return a.jsx(m0,{asChild:!0,children:a.jsx(Xt,{asChild:!0,trapped:r.open,onMountAutoFocus:s=>{s.preventDefault()},onUnmountAutoFocus:s=>{r.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),s.preventDefault()},children:a.jsx("div",{ref:t,"data-disabled":r.disabled?"":void 0,...o,onClick:te(o.onClick,s=>{if(r.disabled){s.preventDefault();return}r.trigger?.focus()}),onPointerDown:te(o.onPointerDown,s=>{if(r.disabled){s.preventDefault();return}const i=s.target;i.hasPointerCapture(s.pointerId)&&i.releasePointerCapture(s.pointerId),(i.closest("button")??i.closest("div"))===s.currentTarget&&s.button===0&&s.ctrlKey===!1&&(n(),r.trigger?.focus())})})})})});k0.displayName=B0;const O0="ComboboxInput",N0=c.forwardRef((e,t)=>{const o=je(O0),r=c.useRef(null),{getItems:n}=tt(void 0),{startsWith:s}=en(o.locale,{sensitivity:"base"}),i=o.disabled,l=ae(r,t,o.onTriggerChange),d=()=>{i||o.onOpenChange(!0)},u=K1(o.filterValue);return xe(()=>{const h=setTimeout(()=>{if(o.textValue===""||o.textValue===void 0||o.filterValue===""||o.filterValue===void 0)return;const g=n().find(x=>x.type==="option"&&s(x.textValue,o.textValue)),f=ma(u??"",o.filterValue);g&&!o.visuallyFocussedItem&&f===o.filterValue.length&&r.current?.setSelectionRange(o.filterValue.length,o.textValue.length)});return()=>clearTimeout(h)},[o.textValue,o.filterValue,s,o.visuallyFocussedItem,n,u]),a.jsx("input",{type:"text",role:"combobox","aria-controls":o.contentId,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":o.autocomplete.type,"data-state":o.open?"open":"closed","aria-disabled":i,"aria-activedescendant":o.visuallyFocussedItem?.id,disabled:i,"data-disabled":i?"":void 0,"data-placeholder":o.textValue===void 0?"":void 0,value:o.textValue??"",...e,ref:l,onKeyDown:te(e.onKeyDown,h=>{if(["ArrowUp","ArrowDown","Home","End"].includes(h.key))o.open||d(),setTimeout(()=>{let f=n().filter(x=>!x.disabled&&x.isVisible).map(x=>x.ref.current);if(["ArrowUp","End"].includes(h.key)&&(f=f.slice().reverse()),["ArrowUp","ArrowDown"].includes(h.key)){const x=o.visuallyFocussedItem??n().find(w=>w.value===o.value)?.ref.current;if(x){let w=f.indexOf(x);w===f.length-1&&(w=-1),f=f.slice(w+1)}}if(["ArrowDown"].includes(h.key)&&o.autocomplete.type==="both"&&f.length>1){const[x,...w]=f,b=n().find(C=>C.ref.current===x).textValue;o.textValue===b&&(f=w)}o.focusFirst(f,n())}),h.preventDefault();else if(["Tab"].includes(h.key)&&o.open)h.preventDefault();else if(["Escape"].includes(h.key))o.open?o.onOpenChange(!1):(o.onValueChange(void 0),o.onTextValueChange("")),h.preventDefault();else if(Z1.includes(h.key)){if(o.visuallyFocussedItem){const g=n().find(f=>f.ref.current===o.visuallyFocussedItem);g&&(o.onValueChange(g.value),o.onTextValueChange(g.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(g.textValue),g.ref.current?.click())}else{const g=n().find(f=>f.type==="option"&&!f.disabled&&f.textValue===o.textValue);g&&(o.onValueChange(g.value),o.onTextValueChange(g.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(g.textValue),g.ref.current?.click())}o.onOpenChange(!1),h.preventDefault()}else o.onVisuallyFocussedItemChange(null)}),onChange:te(e.onChange,h=>{o.onTextValueChange(h.currentTarget.value),o.autocomplete.type==="both"&&o.onFilterValueChange(h.currentTarget.value)}),onKeyUp:te(e.onKeyUp,h=>{if(!o.open&&(o.isPrintableCharacter(h.key)||["Backspace"].includes(h.key))&&d(),setTimeout(()=>{if(o.autocomplete.type==="both"&&o.isPrintableCharacter(h.key)&&o.filterValue!==void 0){const g=o.filterValue,f=n().find(x=>s(x.textValue,g));f&&o.onTextValueChange(f.textValue)}}),o.autocomplete.type==="none"&&o.isPrintableCharacter(h.key)){const g=o.textValue??"",f=n().find(x=>s(x.textValue,g));f&&(o.onVisuallyFocussedItemChange(f.ref.current),f.ref.current?.scrollIntoView())}}),onBlur:te(e.onBlur,()=>{if(o.open)return;o.onVisuallyFocussedItemChange(null);const[h]=n().filter(f=>f.textValue===o.textValue&&f.type==="option");if(h){o.onValueChange(h.value),o.autocomplete.type==="both"&&o.onFilterValueChange(h.textValue);return}if(o.allowCustomValue){o.onValueChange(o.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(o.textValue);return}const[g]=n().filter(f=>f.value===o.value&&f.type==="option");g&&o.textValue!==""?(o.onTextValueChange(g.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(g.textValue)):(o.onValueChange(void 0),o.onTextValueChange(""))})})});N0.displayName="ComboboxTextInput";const _0=c.forwardRef((e,t)=>{const{children:o,...r}=e,n=je(O0),s=n.disabled,i=()=>{s||(n.onOpenChange(!0),n.trigger?.focus())};return a.jsx(re.button,{"aria-hidden":!0,type:"button","aria-disabled":s,"aria-controls":n.contentId,"aria-expanded":n.open,disabled:s,"data-disabled":s?"":void 0,...r,tabIndex:-1,ref:t,onClick:te(r.onClick,()=>{n.trigger?.focus()}),onPointerDown:te(r.onPointerDown,l=>{l.button===0&&l.ctrlKey===!1&&(i(),l.preventDefault())}),onKeyDown:te(r.onKeyDown,l=>{Y1.includes(l.key)&&(i(),l.preventDefault())}),children:o||"▼"})});_0.displayName="ComboboxIcon";const ta="ComboboxPortal",F0=e=>a.jsx(p0,{asChild:!0,...e});F0.displayName=ta;const tn="ComboboxContent",W0=c.forwardRef((e,t)=>{const o=je(tn),{getItems:r}=tt(void 0),[n,s]=c.useState();if(xe(()=>{s(new DocumentFragment)},[]),xe(()=>{o.open&&o.autocomplete.type==="none"&&setTimeout(()=>{r().find(l=>l.value===o.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[r,o.autocomplete,o.value,o.open]),!o.open){const i=n;return i?We.createPortal(a.jsx(Le.Slot,{scope:void 0,children:a.jsx("div",{children:e.children})}),i):null}return a.jsx(U0,{...e,ref:t})});W0.displayName=tn;const na=10,U0=c.forwardRef((e,t)=>{const{onEscapeKeyDown:o,onPointerDownOutside:r,...n}=e,s=je(tn),i=ae(t,d=>s.onContentChange(d)),{onOpenChange:l}=s;return Qt(),c.useEffect(()=>{const d=()=>{l(!1)};return window.addEventListener("blur",d),window.addEventListener("resize",d),()=>{window.removeEventListener("blur",d),window.removeEventListener("resize",d)}},[l]),a.jsx(Jt,{allowPinchZoom:!0,children:a.jsx(x0,{asChild:!0,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:d=>{d.preventDefault()},onDismiss:()=>{s.onOpenChange(!1),s.trigger?.focus({preventScroll:!0})},children:a.jsx(q0,{role:"listbox",id:s.contentId,"data-state":s.open?"open":"closed",onContextMenu:d=>d.preventDefault(),...n,ref:i,style:{display:"flex",flexDirection:"column",outline:"none",...n.style}})})})});U0.displayName="ComboboxContentImpl";const q0=c.forwardRef((e,t)=>{const{align:o="start",collisionPadding:r=na,...n}=e;return a.jsx(w0,{...n,ref:t,align:o,collisionPadding:r,style:{boxSizing:"border-box",...n.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});q0.displayName="ComboboxPopperPosition";const G0="ComboboxViewport",K0=c.forwardRef((e,t)=>{const o=je(G0),r=ae(t,o.onViewportChange),s=c.useMemo(()=>c.Children.toArray(e.children),[e.children]).length;return o.virtualized===!0||o.virtualized==="auto"&&s>100?a.jsx(Le.Slot,{scope:void 0,children:a.jsx(H0,{...e,ref:r,getItemCount:()=>s,estimatedItemSize:o.estimatedItemSize,overscan:o.overscan,onViewportChange:o.onViewportChange})}):a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),a.jsx(Le.Slot,{scope:void 0,children:a.jsx(re.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:r,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});K0.displayName=G0;const mt="ComboboxItem",[Fn,nn]=g0(mt),on=c.forwardRef((e,t)=>{const{value:o,disabled:r=!1,textValue:n,...s}=e,[i,l]=c.useState();xe(()=>{l(new DocumentFragment)},[]);const{onTextValueChange:d,textValue:u,...h}=je(mt),g=ke(),[f,x]=c.useState(n??""),w=h.value===o,{startsWith:b,contains:C}=en(h.locale,{sensitivity:"base"}),$=c.useCallback(v=>{x(R=>R||(v?.textContent??"").trim())},[]);return c.useEffect(()=>{w&&u===void 0&&f!==""&&d(f)},[f,w,u,d]),h.autocomplete.type==="both"&&f&&h.filterValue&&!b(f,h.filterValue)||h.autocomplete.type==="list"&&h.autocomplete.filter==="startsWith"&&f&&u&&!b(f,u)||h.autocomplete.type==="list"&&h.autocomplete.filter==="contains"&&f&&u&&!C(f,u)?i?We.createPortal(a.jsx(Fn,{textId:g,onTextValueChange:$,isSelected:w,textValue:f,children:a.jsx(Le.ItemSlot,{scope:void 0,value:o,textValue:f,disabled:r,type:"option",isVisible:!1,children:a.jsx(Bt,{ref:t,value:o,disabled:r,...s})})}),i):null:a.jsx(Fn,{textId:g,onTextValueChange:$,isSelected:w,textValue:f,children:a.jsx(Le.ItemSlot,{scope:void 0,value:o,textValue:f,disabled:r,type:"option",isVisible:!0,children:a.jsx(Bt,{ref:t,value:o,disabled:r,...s})})})});on.displayName=mt;const Y0="ComboboxItemImpl",Bt=c.forwardRef((e,t)=>{const{value:o,disabled:r=!1,...n}=e,s=c.useRef(null),i=ae(t,s),{getItems:l}=tt(void 0),{onTextValueChange:d,visuallyFocussedItem:u,...h}=je(mt),{isSelected:g,textValue:f,textId:x}=nn(Y0),w=()=>{r||(h.onValueChange(o),d(f),h.onOpenChange(!1),h.autocomplete.type==="both"&&h.onFilterValueChange(f),h.trigger?.focus({preventScroll:!0}))},b=c.useMemo(()=>u===l().find($=>$.ref.current===s.current)?.ref.current,[l,u]),C=ke();return a.jsx(re.div,{role:"option","aria-labelledby":x,"data-highlighted":b?"":void 0,"aria-selected":g&&b,"data-state":g?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1,...n,id:C,ref:i,onPointerUp:te(n.onPointerUp,w)})});Bt.displayName=Y0;const Z0="ComboboxItemText",X0=c.forwardRef((e,t)=>{const{className:o,style:r,...n}=e,s=nn(Z0),i=ae(t,s.onTextValueChange);return a.jsx(re.span,{id:s.textId,...n,ref:i})});X0.displayName=Z0;const Q0="ComboboxItemIndicator",J0=c.forwardRef((e,t)=>{const{isSelected:o}=nn(Q0);return o?a.jsx(re.span,{"aria-hidden":!0,...e,ref:t}):null});J0.displayName=Q0;const rn="ComboboxNoValueFound",P0=c.forwardRef((e,t)=>{const{textValue:o="",filterValue:r="",visible:n=!1,locale:s,autocomplete:i}=je(rn),[l,d]=c.useState([]),{subscribe:u}=tt(void 0),{startsWith:h,contains:g}=en(s,{sensitivity:"base"});return c.useEffect(()=>{const f=u(x=>{if(n){const w=x.filter(b=>b.type!=="create");d(w)}else d(x)});return()=>{f()}},[n,u]),i.type==="none"&&l.length>0||i.type==="list"&&i.filter==="startsWith"&&l.some(f=>h(f.textValue,o))||i.type==="both"&&l.some(f=>h(f.textValue,r))||i.type==="list"&&i.filter==="contains"&&l.some(f=>g(f.textValue,o))?null:a.jsx(re.div,{...e,ref:t})});P0.displayName=rn;const eo=c.forwardRef((e,t)=>{const{disabled:o=!1,...r}=e,n=je(rn),{textValue:s,visuallyFocussedItem:i}=n,{getItems:l,subscribe:d}=tt(void 0),u=c.useRef(null),[h,g]=c.useState(!1),f=ae(t,u),x=c.useMemo(()=>i===l().find(C=>C.ref.current===u.current)?.ref.current,[l,i]),w=ke(),b=()=>{!o&&s&&(n.onValueChange(s),n.onTextValueChange(s),n.onOpenChange(!1),n.autocomplete.type==="both"&&n.onFilterValueChange(s),n.trigger?.focus({preventScroll:!0}))};return xe(()=>{const C=d($=>{g(!$.some(v=>v.textValue===s&&v.type!=="create"))});return l().length===0&&g(!0),()=>{C()}},[s,d,l]),(!s||!h)&&!n.visible?null:a.jsx(Le.ItemSlot,{scope:void 0,value:s??"",textValue:s??"",disabled:o,isVisible:!0,type:"create",children:a.jsx(re.div,{role:"option",tabIndex:o?void 0:-1,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,"data-highlighted":x?"":void 0,...r,id:w,ref:f,onPointerUp:te(r.onPointerUp,b)})})});eo.displayName="ComboboxCreateItem";const oa=ea,ra=k0,aa=N0,sa=_0,ia=F0,ca=W0,la=K0,da=on,ha=X0,ua=J0,fa=P0,ga=eo;function ma(e,t){const o=Math.min(e.length,t.length);for(let r=0;r<o;r++)if(e[r]!==t[r])return r;return o}const be=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:on,Content:ca,CreateItem:ga,Icon:sa,Item:da,ItemIndicator:ua,ItemText:ha,NoValueFound:fa,Portal:ia,Root:oa,TextInput:aa,Trigger:ra,Viewport:la},Symbol.toStringTag,{value:"Module"}));function an(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...o)=>t.current?.(...o),[])}const xa=[" ","Enter","ArrowUp","ArrowDown"],wa=[" ","Enter"],nt="Select",[xt,ot,va]=wr(nt),[Ue,ba]=v0(nt,[va,b0]),wt=b0(),[pa,Me]=Ue(nt),[$a,Ca]=Ue(nt),sn=e=>{const{__scopeSelect:t,children:o,open:r,defaultOpen:n,onOpenChange:s,value:i,defaultValue:l,onValueChange:d,dir:u,disabled:h,required:g,multi:f=!1}=e,x=wt(t),[w,b]=c.useState(null),[C,$]=c.useState(null),[v,R]=c.useState(!1),y=$r(u),[M=!1,j]=_e({prop:r,defaultProp:n,onChange:s}),[S,V]=_e({prop:i,defaultProp:l,onChange(D){d&&(Array.isArray(D),d(D))}}),z=c.useRef(null),[L,q]=c.useState(new Set);return a.jsx($0,{...x,children:a.jsx(pa,{required:g,scope:t,trigger:w,onTriggerChange:b,valueNode:C,onValueNodeChange:$,valueNodeHasChildren:v,onValueNodeHasChildrenChange:R,contentId:ke(),value:S,onValueChange:V,open:M,onOpenChange:j,dir:y,triggerPointerDownPosRef:z,disabled:h,multi:f,children:a.jsx(xt.Provider,{scope:t,children:a.jsx($a,{scope:e.__scopeSelect,onNativeOptionAdd:c.useCallback(D=>{q(k=>new Set(k).add(D))},[]),onNativeOptionRemove:c.useCallback(D=>{q(k=>{const O=new Set(k);return O.delete(D),O})},[]),children:o})})})})};sn.displayName=nt;const to="SelectTrigger",cn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=wt(o),s=Me(to,o),i=s.disabled,l=ae(t,s.onTriggerChange),d=ot(o),[u,h,g]=ho(x=>{const w=d().filter($=>!$.disabled),b=w.find($=>$.value===s.value),C=uo(w,x,b);if(C!==void 0&&!Array.isArray(C.value)){const $=s.multi?[C.value]:C.value;s.onValueChange($)}}),f=()=>{i||(s.onOpenChange(!0),g())};return a.jsx(m0,{asChild:!0,...n,children:a.jsx(re.div,{role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed","data-disabled":i?"":void 0,"data-placeholder":s.value===void 0?"":void 0,tabIndex:i?void 0:0,...r,ref:l,onClick:te(r.onClick,x=>{x.currentTarget.focus()}),onPointerDown:te(r.onPointerDown,x=>{const w=x.target;w.hasPointerCapture(x.pointerId)&&w.releasePointerCapture(x.pointerId),(w.closest("button")??w.closest("div"))===x.currentTarget&&x.button===0&&x.ctrlKey===!1&&(f(),s.triggerPointerDownPosRef.current={x:Math.round(x.pageX),y:Math.round(x.pageY)},x.preventDefault())}),onKeyDown:te(r.onKeyDown,x=>{const w=u.current!=="",b=x.ctrlKey||x.altKey||x.metaKey,C=x.target;(C.closest("button")??C.closest("div"))===x.currentTarget&&(!b&&x.key.length===1&&h(x.key),!(w&&x.key===" ")&&xa.includes(x.key)&&(f(),x.preventDefault()))})})})});cn.displayName=to;const no="SelectValue",ln=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,placeholder:n,...s}=e,i=Me(no,o),{onValueNodeHasChildrenChange:l}=i,d=r!==void 0,u=ae(t,i.onValueNodeChange),[h,g]=c.useState([]),f=ot(o);xe(()=>{l(d)},[l,d]),c.useLayoutEffect(()=>{if(Array.isArray(i.value)&&h.length!==i.value.length){const w=setTimeout(()=>{const b=f().filter(C=>Array.isArray(C.value)?!1:i.value?.includes(C.value));g(b)});return()=>{clearTimeout(w)}}},[i.value,f,h]);let x;if((i.value===void 0||i.value.length===0)&&n!==void 0)x=a.jsx("span",{children:n});else if(typeof r=="function")if(Array.isArray(i.value)){const w=i.value.map(b=>{const C=h.find($=>$.value===b);return C?r({value:b,textValue:C?.textValue}):null});x=w.every(b=>b===null)?n:w}else x=r(i.value);else x=r;return a.jsx(re.span,{...s,ref:u,children:x||null})});ln.displayName=no;const ja="SelectIcon",dn=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,...n}=e;return a.jsx(re.span,{"aria-hidden":!0,...n,ref:t,children:r||"▼"})});dn.displayName=ja;const ya="SelectPortal",hn=e=>a.jsx(p0,{asChild:!0,...e});hn.displayName=ya;const De="SelectContent",un=c.forwardRef((e,t)=>{const o=Me(De,e.__scopeSelect),[r,n]=c.useState();if(xe(()=>{n(new DocumentFragment)},[]),!o.open){const s=r;return s?We.createPortal(a.jsx(oo,{scope:e.__scopeSelect,children:a.jsx(xt.Slot,{scope:e.__scopeSelect,children:a.jsx("div",{children:e.children})})}),s):null}return a.jsx(ro,{...e,ref:t})});un.displayName=De;const Se=10,[oo,Ie]=Ue(De),Sa="SelectContentImpl",ro=c.forwardRef((e,t)=>{const{__scopeSelect:o,position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:s,onPointerDownOutside:i,side:l,sideOffset:d,align:u,alignOffset:h,arrowPadding:g,collisionBoundary:f,collisionPadding:x,sticky:w,hideWhenDetached:b,avoidCollisions:C,...$}=e,v=Me(De,o),[R,y]=c.useState(null),[M,j]=c.useState(null),S=ae(t,T=>y(T)),[V,z]=c.useState(null),[L,q]=c.useState(null),D=ot(o),[k,O]=c.useState(!1),Y=c.useRef(!1);c.useEffect(()=>{if(R)return D0(R)},[R]),Qt();const P=c.useCallback(T=>{const[F,...ee]=D().map(K=>K.ref.current),[W]=ee.slice(-1),U=document.activeElement;for(const K of T)if(K===U||(K?.scrollIntoView({block:"nearest"}),K===F&&M&&(M.scrollTop=0),K===W&&M&&(M.scrollTop=M.scrollHeight),K?.focus(),document.activeElement!==U))return},[D,M]),H=c.useCallback(()=>P([V,R]),[P,V,R]);c.useEffect(()=>{k&&H()},[k,H]);const{onOpenChange:N,triggerPointerDownPosRef:G}=v;c.useEffect(()=>{if(R){let T={x:0,y:0};const F=W=>{T={x:Math.abs(Math.round(W.pageX)-(G.current?.x??0)),y:Math.abs(Math.round(W.pageY)-(G.current?.y??0))}},ee=W=>{T.x<=10&&T.y<=10?W.preventDefault():R.contains(W.target)||N(!1),document.removeEventListener("pointermove",F),G.current=null};return G.current!==null&&(document.addEventListener("pointermove",F),document.addEventListener("pointerup",ee,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",ee,{capture:!0})}}},[R,N,G]),c.useEffect(()=>{const T=()=>N(!1);return window.addEventListener("blur",T),window.addEventListener("resize",T),()=>{window.removeEventListener("blur",T),window.removeEventListener("resize",T)}},[N]);const[J,Z]=ho(T=>{const F=D().filter(U=>!U.disabled),ee=F.find(U=>U.ref.current===document.activeElement),W=uo(F,T,ee);W&&setTimeout(()=>W.ref.current.focus())}),ie=c.useCallback((T,F,ee)=>{const W=!Y.current&&!ee;(v.value!==void 0&&v.value===F||W)&&(z(T),W&&(Y.current=!0))},[v.value]),_=c.useCallback(()=>R?.focus(),[R]),se=c.useCallback((T,F,ee)=>{const W=!Y.current&&!ee;(v.value!==void 0&&(Array.isArray(F)?F.every(K=>v.value?.includes(K)):v.value===F)||W)&&q(T)},[v.value]),ne=r==="popper"?kt:ao,ue=ne===kt?{side:l,sideOffset:d,align:u,alignOffset:h,arrowPadding:g,collisionBoundary:f,collisionPadding:x,sticky:w,hideWhenDetached:b,avoidCollisions:C}:{};return a.jsx(oo,{scope:o,content:R,viewport:M,onViewportChange:j,itemRefCallback:ie,selectedItem:V,onItemLeave:_,itemTextRefCallback:se,focusSelectedItem:H,selectedItemText:L,position:r,isPositioned:k,searchRef:J,children:a.jsx(Jt,{as:Lt,allowPinchZoom:!0,children:a.jsx(Xt,{asChild:!0,trapped:v.open,onMountAutoFocus:T=>{T.preventDefault()},onUnmountAutoFocus:te(n,T=>{v.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),T.preventDefault()}),children:a.jsx(x0,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:T=>T.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:a.jsx(ne,{role:"listbox",id:v.contentId,"data-state":v.open?"open":"closed","aria-multiselectable":v.multi?"true":void 0,dir:v.dir,onContextMenu:T=>T.preventDefault(),...$,...ue,onPlaced:()=>O(!0),ref:S,style:{display:"flex",flexDirection:"column",outline:"none",...$.style},onKeyDown:te($.onKeyDown,T=>{const F=T.ctrlKey||T.altKey||T.metaKey;if(T.key==="Tab"&&T.preventDefault(),!F&&T.key.length===1&&Z(T.key),["ArrowUp","ArrowDown","Home","End"].includes(T.key)){let W=D().filter(U=>!U.disabled).map(U=>U.ref.current);if(["ArrowUp","End"].includes(T.key)&&(W=W.slice().reverse()),["ArrowUp","ArrowDown"].includes(T.key)){const U=T.target,K=W.indexOf(U);W=W.slice(K+1)}setTimeout(()=>P(W)),T.preventDefault()}})})})})})})});ro.displayName=Sa;const Ra="SelectItemAlignedPosition",ao=c.forwardRef((e,t)=>{const{__scopeSelect:o,onPlaced:r,...n}=e,s=Me(De,o),i=Ie(De,o),[l,d]=c.useState(null),[u,h]=c.useState(null),g=ae(t,S=>h(S)),f=ot(o),x=c.useRef(!1),w=c.useRef(!0),{viewport:b,selectedItem:C,selectedItemText:$,focusSelectedItem:v}=i,R=c.useCallback(()=>{if(s.trigger&&s.valueNode&&l&&u&&b&&C&&$){const S=s.trigger.getBoundingClientRect(),V=u.getBoundingClientRect(),z=s.valueNode.getBoundingClientRect(),L=$.getBoundingClientRect();if(s.dir!=="rtl"){const U=L.left-V.left,K=z.left-U,ce=S.left-K,X=S.width+ce,Q=Math.max(X,V.width),we=window.innerWidth-Se,ye=Nn(K,[Se,we-Q]);l.style.minWidth=`${X}px`,l.style.left=`${ye}px`}else{const U=V.right-L.right,K=window.innerWidth-z.right-U,ce=window.innerWidth-S.right-K,X=S.width+ce,Q=Math.max(X,V.width),we=window.innerWidth-Se,ye=Nn(K,[Se,we-Q]);l.style.minWidth=`${X}px`,l.style.right=`${ye}px`}const q=f(),D=window.innerHeight-Se*2,k=b.scrollHeight,O=window.getComputedStyle(u),Y=parseInt(O.borderTopWidth,10),P=parseInt(O.paddingTop,10),H=parseInt(O.borderBottomWidth,10),N=parseInt(O.paddingBottom,10),G=Y+P+k+N+H,J=Math.min(C.offsetHeight*5,G),Z=window.getComputedStyle(b),ie=parseInt(Z.paddingTop,10),_=parseInt(Z.paddingBottom,10),se=S.top+S.height/2-Se,ne=D-se,ue=C.offsetHeight/2,T=C.offsetTop+ue,F=Y+P+T,ee=G-F;if(F<=se){const U=C===q[q.length-1].ref.current;l.style.bottom="0px";const K=u.clientHeight-b.offsetTop-b.offsetHeight,ce=Math.max(ne,ue+(U?_:0)+K+H),X=F+ce;l.style.height=`${X}px`}else{const U=C===q[0].ref.current;l.style.top="0px";const ce=Math.max(se,Y+b.offsetTop+(U?ie:0)+ue)+ee;l.style.height=`${ce}px`,b.scrollTop=F-se+b.offsetTop}l.style.margin=`${Se}px 0`,l.style.minHeight=`${J}px`,l.style.maxHeight=`${D}px`,r?.(),requestAnimationFrame(()=>x.current=!0)}},[f,s.trigger,s.valueNode,l,u,b,C,$,s.dir,r]);xe(()=>R(),[R]);const[y,M]=c.useState();xe(()=>{u&&M(window.getComputedStyle(u).zIndex)},[u]);const j=c.useCallback(S=>{S&&w.current===!0&&(R(),v?.(),w.current=!1)},[R,v]);return a.jsx(Aa,{scope:o,contentWrapper:l,shouldExpandOnScrollRef:x,onScrollButtonChange:j,children:a.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:y},children:a.jsx(re.div,{...n,ref:g,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})});ao.displayName=Ra;const Ma="SelectPopperPosition",kt=c.forwardRef((e,t)=>{const{__scopeSelect:o,align:r="start",collisionPadding:n=Se,...s}=e,i=wt(o);return a.jsx(w0,{...i,...s,ref:t,align:r,collisionPadding:n,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});kt.displayName=Ma;const[Aa,fn]=Ue(De,{}),Ot="SelectViewport",gn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=Ie(Ot,o),s=fn(Ot,o),i=ae(t,n.onViewportChange),l=c.useRef(0);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),a.jsx(xt.Slot,{scope:o,children:a.jsx(re.div,{"data-radix-select-viewport":"",role:"presentation",...r,ref:i,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:te(r.onScroll,d=>{const u=d.currentTarget,{contentWrapper:h,shouldExpandOnScrollRef:g}=s;if(g?.current&&h){const f=Math.abs(l.current-u.scrollTop);if(f>0){const x=window.innerHeight-Se*2,w=parseFloat(h.style.minHeight),b=parseFloat(h.style.height),C=Math.max(w,b);if(C<x){const $=C+f,v=Math.min(x,$),R=$-v;h.style.height=`${v}px`,h.style.bottom==="0px"&&(u.scrollTop=R>0?R:0,h.style.justifyContent="flex-end")}}}l.current=u.scrollTop})})})]})});gn.displayName=Ot;const so="SelectGroup",[Ia,Ta]=Ue(so),mn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=ke();return a.jsx(Ia,{scope:o,id:n,children:a.jsx(re.div,{role:"group","aria-labelledby":n,...r,ref:t})})});mn.displayName=so;const io="SelectLabel",xn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=Ta(io,o);return a.jsx(re.div,{id:n.id,...r,ref:t})});xn.displayName=io;const ft="SelectItem",[Va,co]=Ue(ft),wn=c.forwardRef((e,t)=>{const{__scopeSelect:o,value:r,disabled:n=!1,textValue:s,...i}=e,l=Me(ft,o),d=Ie(ft,o),u=typeof r=="string"?Array.isArray(l.value)?l.value.includes(r):l.value===r:r.every(v=>l.value?.includes(v)),h=Array.isArray(l.value)&&Array.isArray(r)&&r.some(v=>l.value?.includes(v)),[g,f]=c.useState(s??""),[x,w]=c.useState(!1),b=ae(t,v=>d.itemRefCallback?.(v,r,n)),C=ke(),$=()=>{if(!n){let v=l.multi&&typeof r=="string"?[r]:r;h&&!u?l.onValueChange(v):Array.isArray(l.value)&&(v=fo(r,l.value)),l.onValueChange(v),l.multi||l.onOpenChange(!1)}};if(!l.multi&&Array.isArray(r))throw new Error("You can only pass an array of values in multi selects");return a.jsx(Va,{scope:o,value:r,disabled:n,textId:C,isSelected:u,isIntermediate:h,onItemTextChange:c.useCallback(v=>{f(R=>R||(v?.textContent??"").trim())},[]),children:a.jsx(xt.ItemSlot,{scope:o,value:r,disabled:n,textValue:g,children:a.jsx(re.div,{role:"option","aria-labelledby":C,"data-highlighted":x?"":void 0,"aria-selected":l.multi?void 0:u&&x,"aria-checked":l.multi?u:void 0,"data-state":u?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...i,ref:b,onFocus:te(i.onFocus,()=>w(!0)),onBlur:te(i.onBlur,()=>w(!1)),onPointerUp:te(i.onPointerUp,$),onPointerMove:te(i.onPointerMove,v=>{n?d.onItemLeave?.():v.currentTarget.focus({preventScroll:!0})}),onPointerLeave:te(i.onPointerLeave,v=>{v.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:te(i.onKeyDown,v=>{d.searchRef?.current!==""&&v.key===" "||(wa.includes(v.key)&&$(),v.key===" "&&v.preventDefault())})})})})});wn.displayName=ft;const Qe="SelectItemText",vn=c.forwardRef((e,t)=>{const{__scopeSelect:o,className:r,style:n,...s}=e,i=Me(Qe,o),l=Ie(Qe,o),d=co(Qe,o),u=Ca(Qe,o),[h,g]=c.useState(null),f=ae(t,$=>g($),d.onItemTextChange,$=>l.itemTextRefCallback?.($,d.value,d.disabled)),x=h?.textContent,w=c.useMemo(()=>a.jsx("option",{value:d.value,disabled:d.disabled,children:x},Array.isArray(d.value)?d.value.join(";"):d.value),[d.disabled,d.value,x]),{onNativeOptionAdd:b,onNativeOptionRemove:C}=u;return xe(()=>(b(w),()=>C(w)),[b,C,w]),a.jsxs(a.Fragment,{children:[a.jsx(re.span,{id:d.textId,...s,ref:f}),d.isSelected&&i.valueNode&&!i.valueNodeHasChildren?We.createPortal(s.children,i.valueNode):null]})});vn.displayName=Qe;const lo="SelectItemIndicator",bn=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,...n}=e,s=co(lo,o);return typeof r=="function"?a.jsx(re.span,{"aria-hidden":!0,...n,ref:t,children:r({isSelected:s.isSelected,isIntermediate:s.isIntermediate})}):s.isSelected?a.jsx(re.span,{"aria-hidden":!0,...n,ref:t,children:r}):null});bn.displayName=lo;const Nt="SelectScrollUpButton",pn=c.forwardRef((e,t)=>{const o=Ie(Nt,e.__scopeSelect),r=fn(Nt,e.__scopeSelect),[n,s]=c.useState(!1),i=ae(t,r.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,d=()=>{const u=l.scrollTop>0;s(u)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?a.jsx(Cn,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=o;l&&d&&(l.scrollTop-=d.offsetHeight)}}):null});pn.displayName=Nt;const _t="SelectScrollDownButton",$n=c.forwardRef((e,t)=>{const o=Ie(_t,e.__scopeSelect),r=fn(_t,e.__scopeSelect),[n,s]=c.useState(!1),i=ae(t,r.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,d=()=>{const u=l.scrollHeight-l.clientHeight,h=Math.ceil(l.scrollTop)<u;s(h)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?a.jsx(Cn,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=o;l&&d&&(l.scrollTop+=d.offsetHeight)}}):null});$n.displayName=_t;const Cn=c.forwardRef((e,t)=>{const{__scopeSelect:o,onAutoScroll:r,...n}=e,s=Ie("SelectScrollButton",o),i=c.useRef(null),l=ot(o),d=c.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return c.useEffect(()=>()=>d(),[d]),xe(()=>{l().find(h=>h.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[l]),a.jsx(re.div,{"aria-hidden":!0,...n,ref:t,style:{flexShrink:0,...n.style},onPointerMove:te(n.onPointerMove,()=>{s.onItemLeave?.(),i.current===null&&(i.current=window.setInterval(r,50))}),onPointerLeave:te(n.onPointerLeave,()=>{d()})})});Cn.displayName="SelectScrollButtonImpl";const Ea="SelectSeparator",jn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e;return a.jsx(re.div,{"aria-hidden":!0,...r,ref:t})});jn.displayName=Ea;const Ft="SelectArrow",yn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=wt(o),s=Me(Ft,o),i=Ie(Ft,o);return s.open&&i.position==="popper"?a.jsx(vr,{...n,...r,ref:t}):null});yn.displayName=Ft;const La="BubbleSelect",Da=c.forwardRef((e,t)=>{const{value:o,...r}=e,n=c.useRef(null),s=ae(t,n),i=br(o),l=Me(La,void 0);c.useEffect(()=>{const u=n.current,h=window.HTMLSelectElement.prototype,f=Object.getOwnPropertyDescriptor(h,"value").set;if(i!==o&&f){const x=new Event("change",{bubbles:!0});f.call(u,o),u.dispatchEvent(x)}},[i,o]);let d=o;return l.multi&&!Array.isArray(o)&&(d=[]),a.jsx(pr,{asChild:!0,children:a.jsx("select",{...r,multiple:l.multi?!0:void 0,ref:s,defaultValue:d})})});Da.displayName="BubbleSelect";function ho(e){const t=an(e),o=c.useRef(""),r=c.useRef(0),n=c.useCallback(i=>{const l=o.current+i;t(l),function d(u){o.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>d(""),1e3))}(l)},[t]),s=c.useCallback(()=>{o.current="",window.clearTimeout(r.current)},[]);return c.useEffect(()=>()=>window.clearTimeout(r.current),[]),[o,n,s]}function uo(e,t,o){const n=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,s=o?e.indexOf(o):-1;let i=Ha(e,Math.max(s,0));n.length===1&&(i=i.filter(u=>u!==o));const d=i.find(u=>u.textValue.toLowerCase().startsWith(n.toLowerCase()));return d!==o?d:void 0}function Ha(e,t){return e.map((o,r)=>e[(t+r)%e.length])}const fo=(e,t=[])=>{if(Array.isArray(e))return e.reduce((r,n)=>fo(n,r),t);const o=t.indexOf(e);return o===-1?[...t,e]:[...t.slice(0,o),...t.slice(o+1)]},za=sn,Ba=cn,ka=ln,Oa=dn,Na=hn,_a=un,Fa=gn,Wa=mn,Ua=xn,qa=wn,Ga=vn,Ka=bn,Ya=pn,Za=$n,Xa=jn,Qa=yn,pe=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Qa,Content:_a,Group:Wa,Icon:Oa,Item:qa,ItemIndicator:Ka,ItemText:Ga,Label:Ua,Portal:Na,Root:za,ScrollDownButton:Za,ScrollUpButton:Ya,Select:sn,SelectArrow:yn,SelectContent:un,SelectGroup:mn,SelectIcon:dn,SelectItem:wn,SelectItemIndicator:bn,SelectItemText:vn,SelectLabel:xn,SelectPortal:hn,SelectScrollDownButton:$n,SelectScrollUpButton:pn,SelectSeparator:jn,SelectTrigger:cn,SelectValue:ln,SelectViewport:gn,Separator:Xa,Trigger:Ba,Value:ka,Viewport:Fa,createSelectScope:ba},Symbol.toStringTag,{value:"Module"}));function Ee(e,t,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e?.(n),o===!1||!n.defaultPrevented)return t?.(n)}}const Ja=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 2A12.014 12.014 0 0 0 4 14c0 3 1.57 6.883 4.201 10.375C10.85 27.894 13.764 30 16 30s5.151-2.101 7.799-5.625C26.43 20.875 28 17 28 14A12.014 12.014 0 0 0 16 2M8 14.5A1.5 1.5 0 0 1 9.5 13a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 0 1-1.5 1.5A4.5 4.5 0 0 1 8 14.5M18 25h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m1.5-6a1.5 1.5 0 0 1-1.5-1.5 4.5 4.5 0 0 1 4.5-4.5 1.5 1.5 0 0 1 1.5 1.5 4.5 4.5 0 0 1-4.5 4.5"})})};c.forwardRef(Ja);const Pa=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2v11a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-9 12h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m9-7H4V8h24z"})})};c.forwardRef(Pa);const es=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h2.137l-2.375-2.173-.047-.046a9.5 9.5 0 1 0-6.84 16.219H16a9.44 9.44 0 0 0 6.519-2.59 1.5 1.5 0 1 1 2.061 2.181A12.43 12.43 0 0 1 16 28.5h-.171a12.5 12.5 0 1 1 8.985-21.368L27.5 9.59V7a1.5 1.5 0 0 1 3 0"})})},ou=c.forwardRef(es),ts=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.061 19.061-9 9a1.503 1.503 0 0 1-2.125 0l-9-9a1.503 1.503 0 1 1 2.125-2.125l6.439 6.439V5a1.5 1.5 0 1 1 3 0v18.375l6.439-6.44a1.502 1.502 0 1 1 2.125 2.125z"})})};c.forwardRef(ts);const ns=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H8.625l6.44 6.439a1.502 1.502 0 1 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.503 1.503 0 0 1 2.125 2.125L8.625 14.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};c.forwardRef(ns);const os=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:s,viewBox:"0 0 16 16",stroke:i,ref:r,...o,children:a.jsx("path",{d:"M14.75 8a.75.75 0 0 1-.75.75H6.813l3.22 3.22a.751.751 0 1 1-1.063 1.062l-4.5-4.5a.75.75 0 0 1 0-1.063l4.5-4.5a.751.751 0 0 1 1.063 1.063L6.813 7.25H14a.75.75 0 0 1 .75.75M2.5 1.75a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75"})})};c.forwardRef(os);const rs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:s,viewBox:"0 0 16 16",stroke:i,ref:r,...o,children:a.jsx("path",{d:"M11.53 7.47a.75.75 0 0 1 0 1.062l-4.5 4.5a.751.751 0 1 1-1.062-1.063l3.22-3.219H2a.75.75 0 1 1 0-1.5h7.188L5.969 4.03a.751.751 0 1 1 1.063-1.062zm1.97-5.72a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75"})})};c.forwardRef(rs);const as=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m28.061 17.061-9 9a1.503 1.503 0 1 1-2.125-2.125l6.439-6.436H5a1.5 1.5 0 1 1 0-3h18.375l-6.436-6.44a1.503 1.503 0 0 1 2.125-2.125l9 9a1.5 1.5 0 0 1-.003 2.126"})})};c.forwardRef(as);const ss=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26.061 15.061a1.5 1.5 0 0 1-2.125 0L17.5 8.625V27a1.5 1.5 0 1 1-3 0V8.625l-6.439 6.436a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"})})};c.forwardRef(ss);const is=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M11 13.5H5A1.5 1.5 0 0 1 3.5 12V6a1.5 1.5 0 0 1 3 0v1.733C8.581 5.683 11.786 3.5 16 3.5c5.558 0 8.92 3.299 9.061 3.439a1.5 1.5 0 0 1-2.117 2.125C22.889 9.01 20.25 6.5 16 6.5c-3.625 0-6.367 2.21-8 4h3a1.5 1.5 0 1 1 0 3m16 5h-6a1.5 1.5 0 1 0 0 3h3c-1.625 1.79-4.375 4-8 4-4.25 0-6.889-2.511-6.944-2.565A1.5 1.5 0 0 0 6.94 25.06c.141.141 3.504 3.44 9.061 3.44 4.214 0 7.419-2.183 9.5-4.233V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5"})})};c.forwardRef(is);const cs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M220 48v48a12 12 0 0 1-24 0V77l-39.51 39.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12M99.51 139.51 60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l39.52-39.51a12 12 0 0 0-17-17Z"})})};c.forwardRef(cs);const ls=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27.725 21.993C27.031 20.798 26 17.416 26 13a10 10 0 0 0-20 0c0 4.418-1.032 7.797-1.726 8.993A2 2 0 0 0 6 25h5.101a5 5 0 0 0 9.798 0H26a2 2 0 0 0 1.725-3.008M16 27a3 3 0 0 1-2.828-2h5.656A3 3 0 0 1 16 27"})})};c.forwardRef(ls);const ds=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M22.135 14.308A6.001 6.001 0 0 0 17.5 4.5H9A1.5 1.5 0 0 0 7.5 6v19A1.5 1.5 0 0 0 9 26.5h10a6.5 6.5 0 0 0 3.135-12.192M10.5 7.5h7a3 3 0 0 1 0 6h-7zm8.5 16h-8.5v-7H19a3.5 3.5 0 1 1 0 7"})})};c.forwardRef(ds);const hs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 4v20a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2h17a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h17a1 1 0 0 1 1 1"})})};c.forwardRef(hs);const us=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19 14a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m10-5v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h5a2 2 0 0 1 2 2M12 7h8V6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm15 7.201V9H5v5.201A23 23 0 0 0 16 17a23 23 0 0 0 11-2.799"})})};c.forwardRef(us);const fs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M9.5 8A1.5 1.5 0 0 1 11 6.5h16a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 8M27 14.5H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3m0 8H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3M5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(fs);const gs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h3v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3z"})})},ms=c.forwardRef(gs),xs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30 14h-1.35l-3.472-7.812A2 2 0 0 0 23.35 5H8.65a2 2 0 0 0-1.828 1.188L3.35 14H2a1 1 0 0 0 0 2h1v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2h12v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V16h1a1 1 0 0 0 0-2m-20 6H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"})})};c.forwardRef(xs);const ws=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10A1 1 0 0 1 6 11h20a1 1 0 0 1 .707 1.707"})})},He=c.forwardRef(ws),vs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26.924 20.383A1 1 0 0 1 26 21H6a1 1 0 0 1-.708-1.707l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 .217 1.09"})})};c.forwardRef(vs);const bs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M7 26a1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3m-3-7a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 1 0 2 0 7.01 7.01 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9.01 9.01 0 0 1 9 9 1 1 0 0 0 2 0A11.01 11.01 0 0 0 4 15M27 5H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1 13.014 13.014 0 0 1 13 13 1 1 0 0 0 1 1h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"})})};c.forwardRef(bs);const ps=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25 3h-1a2 2 0 0 0-2 2v2h-3.5V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2H10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.586A1.98 1.98 0 0 0 5.586 12L7 13.414V27a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13.414L26.414 12A1.98 1.98 0 0 0 27 10.586V5a2 2 0 0 0-2-2m-6 24h-6v-8a3 3 0 0 1 6 0z"})})};c.forwardRef(ps);const $s=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M25 24H7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v13h17a1 1 0 0 1 0 2"})})};c.forwardRef($s);const Cs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M3.094 14.443a12.8 12.8 0 0 1 2.914-6.72 2 2 0 0 1 2.953-.138l3.459 3.533a1.98 1.98 0 0 1 .211 2.56 3.2 3.2 0 0 0-.462.968.5.5 0 0 1-.478.354h-8.1a.5.5 0 0 1-.497-.557m14.08-11.435A2 2 0 0 0 15 5v5.084a1.98 1.98 0 0 0 1.656 1.97 4 4 0 0 1 .677 7.72.51.51 0 0 0-.333.476v8.154a.5.5 0 0 0 .558.5A13.04 13.04 0 0 0 29 16.185C29.094 9.4 23.899 3.61 17.174 3.008M14.656 19.77a4 4 0 0 1-2.425-2.427.51.51 0 0 0-.475-.343H3.59a.5.5 0 0 0-.5.556A13.01 13.01 0 0 0 14.443 28.91a.5.5 0 0 0 .556-.5V20.25a.51.51 0 0 0-.343-.48"})})};c.forwardRef(Cs);const js=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 2a11 11 0 0 1 8.984 4.659L16 14.845zm0 22a11 11 0 0 1-8.984-4.659l18.97-10.951A11 11 0 0 1 16 27"})})};c.forwardRef(js);const ys=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m29.061 10.061-16 16a1.5 1.5 0 0 1-2.125 0l-7-7a1.504 1.504 0 0 1 2.125-2.125L12 22.875 26.939 7.939a1.502 1.502 0 1 1 2.125 2.125z"})})},ru=c.forwardRef(ys),Ss=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5.708 10.708-7 7a1 1 0 0 1-1.415 0l-3-3a1 1 0 0 1 1.415-1.415L14 18.586l6.293-6.293a1 1 0 0 1 1.415 1.415"})})};c.forwardRef(Ss);const Rs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M176.49 95.51a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84"})})};c.forwardRef(Rs);const Ms=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m27.061 13.061-10 10a1.503 1.503 0 0 1-2.125 0l-10-10a1.503 1.503 0 1 1 2.125-2.125L16 19.875l8.939-8.94a1.502 1.502 0 1 1 2.125 2.125z"})})};c.forwardRef(Ms);const As=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M21.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125L12.125 16z"})})},go=c.forwardRef(As),Is=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m23.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125L19.875 16l-8.936-8.939a1.502 1.502 0 1 1 2.125-2.125l10 10a1.5 1.5 0 0 1-.003 2.125"})})},Sn=c.forwardRef(Is),Ts=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27.061 21.061a1.503 1.503 0 0 1-2.125 0L16 12.125l-8.939 8.936a1.503 1.503 0 0 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0l10 10a1.5 1.5 0 0 1 0 2.125"})})};c.forwardRef(Ts);const Vs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7 14h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2"})})},Es=c.forwardRef(Vs),Ls=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 16a12 12 0 0 1-20.236 8.728 1.002 1.002 0 0 1 1.375-1.456 10 10 0 1 0-.21-14.343c-.441.446-.857.885-1.26 1.321l2.039 2.043A1 1 0 0 1 9 14H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1.707-.707L6.25 8.838c.402-.437.817-.875 1.258-1.32A12 12 0 0 1 28 16M16 9a1 1 0 0 0-1 1v6a1 1 0 0 0 .485.858l5 3a.999.999 0 0 0 1.486-1.1 1 1 0 0 0-.456-.616L17 15.434V10a1 1 0 0 0-1-1"})})};c.forwardRef(Ls);const Ds=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435C30.764 9.693 25.884 5 20.008 5"})})};c.forwardRef(Ds);const Hs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.991 15.565C30.764 9.693 25.884 5 20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435m-7.283 3.143a1 1 0 0 1-1.415 0L20 16.414V24a1 1 0 0 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.415-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1 0 1.415"})})};c.forwardRef(Hs);const zs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M8.96 12.153 4.342 16l4.618 3.848a1.5 1.5 0 1 1-1.92 2.305l-6-5a1.5 1.5 0 0 1 0-2.305l6-5a1.5 1.5 0 0 1 1.92 2.304m22 2.694-6-5a1.5 1.5 0 1 0-1.92 2.306L27.658 16l-4.618 3.848a1.5 1.5 0 1 0 1.92 2.305l6-5a1.5 1.5 0 0 0 0-2.305M20.512 3.59a1.5 1.5 0 0 0-1.922.898l-8 22a1.5 1.5 0 0 0 2.82 1.024l8-22a1.5 1.5 0 0 0-.898-1.922"})})};c.forwardRef(zs);const Bs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M200 40h-32a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h8v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-93.66 21.66a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L124.69 80Zm-64 24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L59.31 80l18.35 18.34a8 8 0 0 1-11.32 11.32ZM200 200H56v-64h96a16 16 0 0 0 16-16V56h32Z"})})};c.forwardRef(Bs);const ks=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 10H4a1 1 0 0 0-1 1v6a12.04 12.04 0 0 0 4.068 9H4a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2h-3.067a12.1 12.1 0 0 0 3.375-5.011A5 5 0 0 0 31 16v-1a5 5 0 0 0-5-5m3 6a3 3 0 0 1-2.15 2.875Q27 17.944 27 17v-4.828A3 3 0 0 1 29 15zM14 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m4 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-8 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"})})};c.forwardRef(ks);const Os=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.743 13.401a1 1 0 0 0-.487-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.758L6.47 10.61 2.74 12.734a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.204a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.583 1 1 0 0 0 .808-.073L16 26.768l3.765 2.107a1.013 1.013 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.759l.018-4.206 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})},au=c.forwardRef(Os),Ns=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M18.5 12V6a1.5 1.5 0 1 1 3 0v4.5H26a1.5 1.5 0 1 1 0 3h-6a1.5 1.5 0 0 1-1.5-1.5M12 18.5H6a1.5 1.5 0 1 0 0 3h4.5V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m14 0h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-4.5H26a1.5 1.5 0 1 0 0-3m-14-14A1.5 1.5 0 0 0 10.5 6v4.5H6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 12 4.5"})})};c.forwardRef(Ns);const _s=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M22.5 17.5h-2v-3h2a5 5 0 1 0-5-5v2h-3v-2a5 5 0 1 0-5 5h2v3h-2a5 5 0 1 0 5 5v-2h3v2a5 5 0 1 0 5-5m-2-8a2 2 0 1 1 2 2h-2zm-13 0a2 2 0 0 1 4 0v2h-2a2 2 0 0 1-2-2m4 13a2 2 0 1 1-2-2h2zm3-8h3v3h-3zm8 10a2 2 0 0 1-2-2v-2h2a2 2 0 0 1 0 4"})})};c.forwardRef(_s);const Fs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.5 24a1.5 1.5 0 0 1-1.5 1.5h-3.5V29a1.5 1.5 0 1 1-3 0v-3.5H8A1.5 1.5 0 0 1 6.5 24V9.5H3a1.5 1.5 0 0 1 0-3h3.5V3a1.5 1.5 0 0 1 3 0v19.5H29a1.5 1.5 0 0 1 1.5 1.5M13 9.5h9.5V19a1.5 1.5 0 1 0 3 0V8A1.5 1.5 0 0 0 24 6.5H13a1.5 1.5 0 0 0 0 3"})})};c.forwardRef(Fs);const Ws=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26.061 23.939a1.503 1.503 0 0 1-2.125 2.125L16 18.125l-7.939 7.936a1.503 1.503 0 1 1-2.125-2.125L13.875 16 5.939 8.061a1.503 1.503 0 1 1 2.125-2.125L16 13.875l7.939-7.94a1.502 1.502 0 1 1 2.125 2.125L18.125 16z"})})},qe=c.forwardRef(Ws),Us=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m4.708 16.293a1 1 0 0 1-1.415 1.415L16 17.414l-3.293 3.293a1 1 0 0 1-1.415-1.415L14.587 16l-3.293-3.293a1 1 0 1 1 1.415-1.415L16 14.587l3.293-3.293a1 1 0 0 1 1.415 1.415L17.414 16z"})})};c.forwardRef(Us);const qs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.48 9.524a1.51 1.51 0 0 0-1.668-.213l-6.276 3.125-5.24-8.704a1.514 1.514 0 0 0-2.592 0l-5.24 8.708L3.19 9.315a1.514 1.514 0 0 0-2.113 1.825l4.625 14.17a1 1 0 0 0 1.46.55C7.194 25.841 10.39 24 16 24s8.806 1.841 8.835 1.859a1 1 0 0 0 1.464-.549l4.625-14.166a1.51 1.51 0 0 0-.444-1.62M21.98 19.6a1 1 0 0 1-1.159.811 28.5 28.5 0 0 0-9.652 0 1 1 0 0 1-.348-1.97 30.6 30.6 0 0 1 10.348 0 1 1 0 0 1 .816 1.159z"})})};c.forwardRef(qs);const Gs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27.414 24a2 2 0 0 1 0 2.829l-.585.585a2 2 0 0 1-2.829 0l-6.906-6.905-2.735 6.292A1.98 1.98 0 0 1 12.533 28h-.098a1.98 1.98 0 0 1-1.801-1.375L4.1 6.615A1.994 1.994 0 0 1 6.615 4.1l20.01 6.534a2 2 0 0 1 .176 3.725l-6.292 2.735z"})})};c.forwardRef(Gs);const Ks=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3C9.271 3 4 6.075 4 10v12c0 3.925 5.271 7 12 7s12-3.075 12-7V10c0-3.925-5.271-7-12-7m10 13c0 1.203-.985 2.429-2.701 3.365C21.366 20.419 18.774 21 16 21s-5.366-.581-7.299-1.635C6.985 18.429 6 17.203 6 16v-2.08C8.133 15.795 11.779 17 16 17s7.868-1.21 10-3.08zm-2.701 9.365C21.366 26.419 18.774 27 16 27s-5.366-.581-7.299-1.635C6.985 24.429 6 23.203 6 22v-2.08C8.133 21.795 11.779 23 16 23s7.868-1.21 10-3.08V22c0 1.203-.985 2.429-2.701 3.365"})})};c.forwardRef(Ks);const Ys=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 12a2 2 0 0 0-2-2h-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a1 1 0 0 0 1.625.777L9 19.25V23a2 2 0 0 0 2 2h11.699l4.676 3.778A1 1 0 0 0 29 28zm-5.319 11.223a1 1 0 0 0-.625-.223H11v-4h10a2 2 0 0 0 2-2v-5h4v13.906z"})})};c.forwardRef(Ys);const Zs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-13.561 1.061a1.5 1.5 0 0 0 2.125 0l5-5a1.502 1.502 0 1 0-2.125-2.125L17.5 15.375V5a1.5 1.5 0 1 0-3 0v10.375l-2.439-2.436a1.502 1.502 0 1 0-2.125 2.125z"})})};c.forwardRef(Zs);const Xs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M13.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(Xs);const Qs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16h-4v-9a1 1 0 0 0-1-1h-9V6h14z"})})};c.forwardRef(Qs);const Js=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m11 13c.001 1.411-.27 2.81-.8 4.118l-5.587-3.437a2 2 0 0 0-.78-.279l-2.853-.385a2.01 2.01 0 0 0-2 .983h-1.09l-.475-.983a1.99 1.99 0 0 0-1.375-1.083l-1-.216.978-1.718h2.088c.338 0 .67-.087.966-.25l1.532-.845q.202-.113.375-.268l3.364-3.042a1.99 1.99 0 0 0 .407-2.458l-.045-.08A11.01 11.01 0 0 1 27 16M5 16a10.94 10.94 0 0 1 1.068-4.725l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99a2.01 2.01 0 0 0 1.8 1.125h.186l-.904 2.029a2 2 0 0 0 .357 2.171l.018.018L16 25.742l-.242 1.25A11.014 11.014 0 0 1 5 16"})})};c.forwardRef(Js);const Ps=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:[a.jsx("path",{d:"M20.689 3.88A13 13 0 0 0 16 3a13 13 0 0 0-8.155 23.124l1.02-1.765A11 11 0 0 1 5 16a10.94 10.94 0 0 1 1.068-4.724l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99q.113.226.275.418l1.169-2.025-.121-.25a1.99 1.99 0 0 0-1.375-1.084l-1-.217.978-1.717h2.088c.338 0 .67-.087.966-.25l.726-.4z"}),a.jsx("path",{fillRule:"evenodd",d:"m24 2.144 1.732 1-1.58 2.736q.54.435 1.036.932A13.01 13.01 0 0 1 29 16a13 13 0 0 1-17.69 12.124l-1.578 2.732-1.732-1zm-.86 5.49-4.936 8.549 1.628.22c.277.037.543.132.78.278l5.588 3.436c.53-1.308.801-2.706.8-4.117a11.01 11.01 0 0 0-3.86-8.367M13.92 23.6l-1.593 2.76a11 11 0 0 0 3.43.631l.242-1.25z",clipRule:"evenodd"})]})};c.forwardRef(Ps);const ei=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10.365 7.5C20.579 21.724 18.441 23 16 23s-4.579-1.275-5.865-3.5a1.001 1.001 0 0 1 1.477-1.31q.157.129.253.31C12.799 20.114 14.266 21 16 21s3.201-.887 4.135-2.5a1 1 0 1 1 1.73 1M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(ei);const ti=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 10.865a1 1 0 0 1-1.365-.365C19.201 20.886 17.734 20 16 20s-3.201.887-4.135 2.5a1.001 1.001 0 1 1-1.73-1C11.421 19.276 13.559 18 16 18s4.579 1.275 5.865 3.5a1 1 0 0 1-.365 1.365M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(ti);const ni=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27.5 6v5a1.5 1.5 0 1 1-3 0V7.5H21a1.5 1.5 0 0 1 0-3h5A1.5 1.5 0 0 1 27.5 6M11 24.5H7.5V21a1.5 1.5 0 0 0-3 0v5A1.5 1.5 0 0 0 6 27.5h5a1.5 1.5 0 1 0 0-3m15-5a1.5 1.5 0 0 0-1.5 1.5v3.5H21a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5m-15-15H6A1.5 1.5 0 0 0 4.5 6v5a1.5 1.5 0 0 0 3 0V7.5H11a1.5 1.5 0 0 0 0-3"})})};c.forwardRef(ni);const oi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 13a1.5 1.5 0 1 1-3 0V8.625l-7.439 7.439a1.503 1.503 0 1 1-2.125-2.125L23.375 6.5H19a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 28.5 5zM23 16a1.5 1.5 0 0 0-1.5 1.5v8h-15v-15h8a1.5 1.5 0 1 0 0-3H6A2.5 2.5 0 0 0 3.5 10v16A2.5 2.5 0 0 0 6 28.5h16a2.5 2.5 0 0 0 2.5-2.5v-8.5A1.5 1.5 0 0 0 23 16"})})},ri=c.forwardRef(oi),ai=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.914 15.595c-.044-.099-1.103-2.447-3.457-4.801C24.322 7.657 20.36 6 16 6S7.679 7.657 4.542 10.794C2.19 13.148 1.125 15.5 1.086 15.595a1 1 0 0 0 0 .812c.044.1 1.103 2.447 3.456 4.8C7.68 24.344 11.64 26 16 26s8.321-1.657 11.458-4.792c2.353-2.354 3.412-4.702 3.456-4.8a1 1 0 0 0 0-.813M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};c.forwardRef(ai);const si=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M6.74 4.328a1 1 0 1 0-1.48 1.345l2.405 2.646c-4.54 2.786-6.493 7.081-6.579 7.276a1 1 0 0 0 0 .813c.044.098 1.103 2.446 3.456 4.8C7.68 24.343 11.64 26 16 26c2.24.013 4.459-.448 6.509-1.354l2.75 3.027a1 1 0 1 0 1.48-1.345zm11.125 15.21a4 4 0 0 1-5.209-5.73zm13.049-3.13c-.053.117-1.319 2.92-4.17 5.475a1 1 0 0 1-1.408-.072L12.675 7.884a1 1 0 0 1 .575-1.66A17 17 0 0 1 16 6c4.36 0 8.321 1.658 11.458 4.794 2.353 2.354 3.412 4.702 3.456 4.801a1 1 0 0 1 0 .813"})})};c.forwardRef(si);const ii=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M17 15v12a1 1 0 0 1-2 0V15a1 1 0 0 1 2 0m8 9a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m3-6h-2V5a1 1 0 0 0-2 0v13h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 20a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m3-6H8V5a1 1 0 0 0-2 0v9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9-6h-2V5a1 1 0 0 0-2 0v3h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"})})};c.forwardRef(ii);const ci=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.48 16.851-7.474 7.559a1.97 1.97 0 0 1-1.4.585H9.415l-3.707 3.712a1.001 1.001 0 0 1-1.415-1.415l2.823-2.822L15.588 16h10.537a.5.5 0 0 1 .355.851m.607-13.03a8 8 0 0 0-10.737.518l-1.2 1.185a.5.5 0 0 0-.15.351v7.875l6.875-6.875a1 1 0 0 1 1.414 1.414L17.589 14h11.047a.5.5 0 0 0 .445-.27 8.01 8.01 0 0 0-1.994-9.909M7.854 20.904 13 15.758V8.845a.5.5 0 0 0-.851-.355L7.586 13A1.99 1.99 0 0 0 7 14.414v6.136a.5.5 0 0 0 .854.354"})})};c.forwardRef(ci);const li=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M19 11V5.5l5.5 5.5z"})})};c.forwardRef(li);const di=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5 8.21 8.21 0 0 1 10.9-.91 8 8 0 0 1 .82 11.81A30.06 30.06 0 0 1 64 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.39 9.19 8.26 8.26 0 0 1 .73 11.09 8 8 0 0 1-11.9.38A14.17 14.17 0 0 0 64 160c-8.82 0-16 9-16 20m103.81 16.31a20.82 20.82 0 0 1-9.19 15.23C137.43 215 131 216 125.13 216a61.1 61.1 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97M215.42 155l-19.89 55.68a8 8 0 0 1-15.06 0L160.58 155a8.21 8.21 0 0 1 4.5-10.45 8 8 0 0 1 10.45 4.76l12.47 34.9 12.47-34.9a8 8 0 0 1 10.45-4.76 8.23 8.23 0 0 1 4.5 10.45"})})};c.forwardRef(di);const hi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707m-7 11a1 1 0 0 1-1.415 1.415L16 20.414l-2.293 2.293a1 1 0 0 1-1.415-1.415L14.587 19l-2.293-2.293a1 1 0 1 1 1.415-1.415L16 17.587l2.293-2.293a1 1 0 0 1 1.415 1.415L17.414 19zM19 11V5.5l5.5 5.5z"})})};c.forwardRef(hi);const ui=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M6 15h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1m13-9.5 5.5 5.5H19zM28 19a1 1 0 0 1-1 1h-3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1M8 18H6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h1a3.5 3.5 0 1 0 0-7m0 5H7v-3h1a1.5 1.5 0 1 1 0 3m8-5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a4.5 4.5 0 1 0 0-9m0 7h-1v-5h1a2.5 2.5 0 0 1 0 5"})})};c.forwardRef(ui);const fi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76 44 44h-44Zm4 164.53a8.18 8.18 0 0 1-8.25 7.47H120a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51m-61.49-51.88L77.83 180l16.68 23.35a8 8 0 0 1-13 9.3L68 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L58.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46 8.19 8.19 0 0 1 10.88 2.38L68 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm121.28 39.66a20.81 20.81 0 0 1-9.18 15.23c-5.19 3.46-11.67 4.46-17.49 4.46a60.6 60.6 0 0 1-15.19-2 8 8 0 0 1 4.31-15.41c4.38 1.21 14.94 2.71 19.54-.35.89-.6 1.84-1.52 2.15-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 8.95-14.94c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.87 2.82 26.39 7.65 24.18 24.96"})})};c.forwardRef(fi);const gi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M184 144h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 184 144m-.35 40H176v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 183.65 184M136 152v55.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8v-55.71a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 136 152m-40 56.53a8.17 8.17 0 0 1-8.27 7.47h-31.5a8.27 8.27 0 0 1-6-2.5 8 8 0 0 1-1.18-9.5l25.16-44H56.27a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h31.77a8.27 8.27 0 0 1 6 2.5A8 8 0 0 1 95 156l-25.21 44H88a8 8 0 0 1 8 8.53M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"})})};c.forwardRef(gi);const mi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m13.687 4.146-2.5-2.5a.5.5 0 0 0-.354-.146h-5a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-7a.5.5 0 0 0-.146-.354M8.833 12h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1m0-2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1m4 1.5h-1v-5a.5.5 0 0 0-.146-.354l-2.5-2.5a.5.5 0 0 0-.354-.146h-3v-1h4.793l2.207 2.207z"})})};c.forwardRef(mi);const xi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.5 16a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M29 8.5H3a1.5 1.5 0 0 0 0 3h26a1.5 1.5 0 1 0 0-3m-10 12h-6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(xi);const wi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.926 1.926 0 0 0 4.924 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5z"})})};c.forwardRef(wi);const vi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 9h-4.385q.075-.06.146-.125A3.7 3.7 0 0 0 24 6.196 4.08 4.08 0 0 0 19.805 2a3.7 3.7 0 0 0-2.68 1.239A6.9 6.9 0 0 0 16 5.049a6.9 6.9 0 0 0-1.125-1.81A3.7 3.7 0 0 0 12.195 2 4.08 4.08 0 0 0 8 6.196a3.7 3.7 0 0 0 1.239 2.679q.072.06.146.125H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V15H5v-4h10v4h2v-4h10v4H17v11.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M10.564 7.375A1.7 1.7 0 0 1 10 6.125 2.076 2.076 0 0 1 12.074 4h.061a1.71 1.71 0 0 1 1.25.563c1.049 1.185 1.419 3.15 1.549 4.365-1.22-.13-3.184-.5-4.37-1.553m10.875 0c-1.186 1.05-3.155 1.42-4.375 1.55.148-1.314.561-3.237 1.561-4.361A1.7 1.7 0 0 1 19.875 4h.061A2.077 2.077 0 0 1 22 6.135a1.7 1.7 0 0 1-.564 1.24z"})})};c.forwardRef(vi);const bi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m9.796 8h-4.428a17.8 17.8 0 0 0-2.533-5.625A11.05 11.05 0 0 1 25.796 11M16 5.014c1.5 1.625 2.625 3.693 3.296 5.986h-6.592C13.375 8.707 14.5 6.641 16 5.014M12 16c0-1.005.084-2.009.25-3h7.5a18.2 18.2 0 0 1 0 6h-7.5a18 18 0 0 1-.25-3m.704 5h6.592c-.671 2.293-1.796 4.359-3.296 5.986-1.5-1.627-2.625-3.693-3.296-5.986m6.131 5.625A17.8 17.8 0 0 0 21.367 21h4.43a11.05 11.05 0 0 1-6.962 5.625M21.776 19a20.2 20.2 0 0 0 0-6h4.808a11 11 0 0 1 0 6z"})})};c.forwardRef(bi);const pi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M13 9.5c-.357 0-.71.085-1.028.25l-1.337-1.04a2.2 2.2 0 0 0 .116-.67l.646-.214a2.25 2.25 0 1 0-.636-1.37l-.487.162A2.25 2.25 0 0 0 8.5 5.75c-.062 0-.117 0-.175.008l-.278-.625A2.25 2.25 0 1 0 6.5 5.75c.063 0 .118 0 .176-.008l.278.625a2.24 2.24 0 0 0-.537 2.482l-1.33 1.182a2.25 2.25 0 1 0 .997 1.12l1.33-1.182a2.25 2.25 0 0 0 2.3-.075l1.224.954A2.25 2.25 0 1 0 13.001 9.5m0-4A.75.75 0 1 1 13 7a.75.75 0 0 1 0-1.5m-7.25-2a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M4 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M7.75 8a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M13 12.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"})})};c.forwardRef(pi);const $i=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M13.29 28.226 6.765 24.46a2.822 2.822 0 1 1-2.708-4.693v-7.532a2.824 2.824 0 1 1 2.708-4.693l6.525-3.767a2.824 2.824 0 1 1 5.42 0l6.524 3.766a2.822 2.822 0 1 1 2.71 4.693v7.533a2.824 2.824 0 1 1-2.71 4.694l-6.524 3.766A2.825 2.825 0 0 1 16 31.84a2.822 2.822 0 0 1-2.71-3.614M16 5.806q.413-.002.791-.113l8.531 14.776a2.8 2.8 0 0 0-.791 1.37H7.467a2.8 2.8 0 0 0-.79-1.369L15.21 5.693q.377.11.791.112M7.468 23.178l-.033.12 6.526 3.767A2.81 2.81 0 0 1 16 26.195c.802 0 1.526.334 2.04.871l6.523-3.766-.032-.121zM5.397 12.233a2.824 2.824 0 0 0 2.038-3.532l6.526-3.767q.043.045.088.088L5.517 19.8l-.12-.032zM26.482 19.8q.06-.018.121-.033v-7.532a2.824 2.824 0 0 1-2.04-3.534L18.04 4.934q-.045.045-.089.088z",clipRule:"evenodd"})})};c.forwardRef($i);const Ci=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 7v7.5a.5.5 0 0 1-.5.5H17V5.5a.5.5 0 0 1 .5-.5H25a2 2 0 0 1 2 2M14.5 5H7a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H15V5.5a.5.5 0 0 0-.5-.5m12 12H17v9.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5M5 17.5V25a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V17H5.5a.5.5 0 0 0-.5.5"})})};c.forwardRef(Ci);const ji=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M10.5 6.5v5h-7A.5.5 0 0 1 3 11V8a2 2 0 0 1 2-2h5a.5.5 0 0 1 .5.5m2 19a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-5h-7zM3 21v3a2 2 0 0 0 2 2h5a.5.5 0 0 0 .5-.5v-5h-7a.5.5 0 0 0-.5.5m0-7v4a.5.5 0 0 0 .5.5h7v-5h-7a.5.5 0 0 0-.5.5m16-8h-6a.5.5 0 0 0-.5.5v5h7v-5A.5.5 0 0 0 19 6m9.5 7.5h-7v5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-16 5h7v-5h-7zM27 6h-5a.5.5 0 0 0-.5.5v5h7a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2m1.5 14.5h-7v5a.5.5 0 0 0 .5.5h5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5"})})};c.forwardRef(ji);const yi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.791 17.633a3.04 3.04 0 0 0-2.326-.597C28.813 14.666 30 12.31 30 10c0-3.309-2.661-6-5.933-6A5.95 5.95 0 0 0 19.5 6.094 5.95 5.95 0 0 0 14.932 4C11.663 4 9 6.691 9 10c0 1.375.405 2.711 1.258 4.125a4 4 0 0 0-1.844 1.05L5.586 18H2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h13q.123 0 .242-.03l8-2a1 1 0 0 0 .15-.05l4.858-2.067.055-.025a3.074 3.074 0 0 0 .491-5.195zm-1.362 3.393-4.75 2.023L14.875 25H7v-5.586l2.829-2.828A1.98 1.98 0 0 1 11.242 16H17.5a1.5 1.5 0 0 1 0 3H14a1 1 0 0 0 0 2h4q.113 0 .224-.025l8.375-1.926.038-.01a1.075 1.075 0 0 1 .788 1.987z"})})};c.forwardRef(yi);const Si=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 10.5h-5.475l.951-5.231a1.5 1.5 0 1 0-2.952-.538L19.475 10.5h-4.95l.951-5.231a1.5 1.5 0 1 0-2.952-.538L11.475 10.5H6a1.5 1.5 0 0 0 0 3h4.93l-.909 5H4a1.5 1.5 0 0 0 0 3h5.475l-.951 5.231a1.5 1.5 0 0 0 1.207 1.75q.134.022.269.019a1.5 1.5 0 0 0 1.475-1.233l1.05-5.767h4.95l-.951 5.231a1.5 1.5 0 1 0 2.952.543l1.049-5.774H26a1.5 1.5 0 1 0 0-3h-4.93l.909-5H28a1.5 1.5 0 1 0 0-3m-9.979 8H13.07l.909-5h4.951z"})})};c.forwardRef(Si);const Ri=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-5 5 4.94 4.94 0 0 1-3.571-1.45 1.5 1.5 0 0 1 2.142-2.1 1.94 1.94 0 0 0 1.429.55 2 2 0 0 0 0-4 1.94 1.94 0 0 0-1.429.55 1.5 1.5 0 0 1-2.551-1.3l1-6A1.5 1.5 0 0 1 25 12.5h5a1.5 1.5 0 1 1 0 3h-3.729l-.338 2.029q.283-.03.567-.029a5 5 0 0 1 5 5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(Ri);const Mi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M32 22a1.5 1.5 0 0 1-1.5 1.5V26a1.5 1.5 0 1 1-3 0v-2.5H23a1.5 1.5 0 0 1-1.422-1.974l3-9a1.5 1.5 0 0 1 2.845.948L25.08 20.5H27.5V18a1.5 1.5 0 1 1 3 0v2.5A1.5 1.5 0 0 1 32 22M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(Mi);const Ai=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.5 14v12a1.5 1.5 0 1 1-3 0v-9.198l-.668.448a1.503 1.503 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 29.5 14M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(Ai);const Ii=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m27.133 17.541 1.655-2.772a1.5 1.5 0 1 0-2.576-1.538l-4.03 6.75q-.018.029-.032.059a5 5 0 1 0 4.983-2.5zM26.5 24.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0"})})};c.forwardRef(Ii);const Ti=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-8.571 3.5 1.5 1.5 0 1 1 2.142-2.099A2 2 0 1 0 26.5 20.5a1.5 1.5 0 0 1-1.229-2.36l1.854-2.64H24a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 0 1 1.229 2.36l-2.293 3.275A5 5 0 0 1 31.5 22.5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(Ti);const Vi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0M30 24.5h-3l3.593-4.791a4.499 4.499 0 1 0-7.837-4.209 1.5 1.5 0 1 0 2.829 1q.076-.218.216-.402a1.5 1.5 0 1 1 2.394 1.807L22.8 25.1a1.5 1.5 0 0 0 1.2 2.4h6a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(Vi);const Ei=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 17v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h2.956A10.964 10.964 0 0 0 16.081 6H16A11 11 0 0 0 5.045 16H8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a13.014 13.014 0 0 1 22.236-9.167A12.93 12.93 0 0 1 29 17"})})};c.forwardRef(Ei);const Li=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30 11.75c0 8.75-12.974 15.833-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.76 7.76 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.76 7.76 0 0 1 30 11.75"})})};c.forwardRef(Li);const Di=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 14.444V26a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14.444a2 2 0 0 1 .646-1.473l10-9.435.014-.013a2 2 0 0 1 2.705.013l10 9.435A2 2 0 0 1 28 14.444"})})};c.forwardRef(Di);const Hi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-7.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5 25v-3.5l6.5-6.5 10 10zm22 0h-2.671l-4.5-4.5 2.5-2.5L27 22.672z"})})};c.forwardRef(Hi);const zi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 25H5V11h2v10a2 2 0 0 0 2 2h14zm4-4H9v-4.5l4.5-4.5 6.208 6.208a1 1 0 0 0 1.413 0L24.33 15 27 17.672z"})})};c.forwardRef(zi);const Bi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 0 0 0-3m-18-4a1.5 1.5 0 0 0 1.061-2.561L6.125 12l3.936-3.94a1.503 1.503 0 1 0-2.125-2.125l-5 5a1.5 1.5 0 0 0 0 2.125l5 5A1.5 1.5 0 0 0 9 18.5"})})};c.forwardRef(Bi);const ki=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 1 0 0-3M3.939 18.06a1.5 1.5 0 0 0 2.125 0l5-5a1.5 1.5 0 0 0 0-2.125l-5-5a1.503 1.503 0 0 0-2.125 2.125L7.875 12l-3.936 3.939a1.5 1.5 0 0 0 0 2.122"})})};c.forwardRef(ki);const Oi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 23a2 2 0 0 1-2-2v-5a1 1 0 0 1 0-2 2 2 0 0 1 2 2v5a1 1 0 0 1 0 2"})})};c.forwardRef(Oi);const Ni=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.5 7A1.5 1.5 0 0 1 24 8.5h-3.919l-5 15H18a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h3.919l5-15H14a1.5 1.5 0 0 1 0-3h10A1.5 1.5 0 0 1 25.5 7"})})};c.forwardRef(Ni);const _i=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M20 2a10.01 10.01 0 0 0-9.511 13.098l-7.196 7.195A1 1 0 0 0 3 23v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l1.195-1.196A10 10 0 1 0 20 2m2.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"})})};c.forwardRef(_i);const Fi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 7h22v5H5zm22 18H14V14h13z"})})};c.forwardRef(Fi);const Wi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M22 29a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m5-16a10.94 10.94 0 0 1-4.205 8.651A2.03 2.03 0 0 0 22 23.25V24a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-.75a2 2 0 0 0-.779-1.582A10.95 10.95 0 0 1 5 13.06C4.967 7.104 9.782 2.143 15.735 2A11 11 0 0 1 27 13m-4.014-1.168a7.2 7.2 0 0 0-5.82-5.818 1 1 0 1 0-.332 1.972c2.071.349 3.829 2.106 4.18 4.182a1 1 0 0 0 1.972-.335"})})};c.forwardRef(Wi);const Ui=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m21.731 14.683-14 15a1 1 0 0 1-1.711-.875l1.832-9.167L.65 16.936a1 1 0 0 1-.375-1.625l14-15a1 1 0 0 1 1.71.875l-1.837 9.177 7.204 2.7a1 1 0 0 1 .375 1.62z"})})};c.forwardRef(Ui);const qi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M17.046 23.441a1.5 1.5 0 0 1 0 2.125l-.742.743a7.502 7.502 0 1 1-10.61-10.61l3.015-3.014A7.5 7.5 0 0 1 19 12.375a1.506 1.506 0 0 1-2 2.25 4.5 4.5 0 0 0-6.171.184l-3.013 3.01a4.5 4.5 0 0 0 6.365 6.365l.743-.743a1.5 1.5 0 0 1 2.122 0m9.26-17.75a7.51 7.51 0 0 0-10.61 0l-.742.743a1.503 1.503 0 1 0 2.125 2.125l.742-.743a4.5 4.5 0 0 1 6.365 6.365l-3.014 3.015a4.5 4.5 0 0 1-6.172.179 1.506 1.506 0 1 0-2 2.25 7.5 7.5 0 0 0 10.288-.304l3.014-3.014a7.51 7.51 0 0 0 .004-10.613z"})})};c.forwardRef(qi);const Gi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 9.5h22a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3m22 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(Gi);const Ki=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 17.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m13 5H5a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3m11 0h-1.5V21a1.5 1.5 0 1 0-3 0v1.5H23a1.5 1.5 0 1 0 0 3h1.5V27a1.5 1.5 0 1 0 3 0v-1.5H29a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(Ki);const Yi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h64a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m80 40H40a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24m120.49 20.49a12 12 0 0 1-17 0l-18.08-18.08a44 44 0 1 1 17-17l18.08 18.07a12 12 0 0 1 0 17.01M184 164a20 20 0 1 0-20-20 20 20 0 0 0 20 20"})})};c.forwardRef(Yi);const Zi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M17.5 4v4a1.5 1.5 0 1 1-3 0V4a1.5 1.5 0 1 1 3 0m4.156 7.844a1.5 1.5 0 0 0 1.062-.44l2.828-2.829a1.503 1.503 0 1 0-2.125-2.125l-2.825 2.833a1.5 1.5 0 0 0 1.06 2.56M28 14.5h-4a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 1 0 0-3m-5.282 6.096a1.501 1.501 0 0 0-2.451 1.638c.075.182.186.348.326.487l2.828 2.829a1.503 1.503 0 0 0 2.125-2.125zM16 22.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 1 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m-6.717-1.904-2.83 2.829A1.503 1.503 0 0 0 8.58 25.55l2.829-2.829a1.503 1.503 0 0 0-2.125-2.125M9.5 16A1.5 1.5 0 0 0 8 14.5H4a1.5 1.5 0 1 0 0 3h4A1.5 1.5 0 0 0 9.5 16m-.925-9.546A1.503 1.503 0 0 0 6.45 8.579l2.833 2.825a1.503 1.503 0 0 0 2.125-2.125z"})})},mo=c.forwardRef(Zi),Xi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M16 20.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20 10h-8V7a4 4 0 1 1 8 0z"})})};c.forwardRef(Xi);const Qi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M31 19a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1M7 9h2v2a1 1 0 1 0 2 0V9h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2m16 15h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2m4.414-14L10 27.414a2 2 0 0 1-2.828 0l-2.587-2.585a2 2 0 0 1 0-2.829L22 4.586a2 2 0 0 1 2.829 0l2.585 2.585a2 2 0 0 1 0 2.829M26 8.586 23.414 6l-4 4L22 12.586z"})})};c.forwardRef(Qi);const Ji=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"})})};c.forwardRef(Ji);const Pi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M11 7q0 .432-.088.838L16 10.382l5.088-2.544a4 4 0 1 1 .895 1.789L18.236 11.5l3.747 1.873a4 4 0 1 1 0 5.253L18.236 20.5l3.747 1.874a4 4 0 1 1-.895 1.788L16 21.618l-5.088 2.544Q11 24.567 11 25a4 4 0 1 1-.983-2.626l3.747-1.874-3.747-1.873a4 4 0 1 1 0-5.253l3.747-1.874-3.747-1.874A4 4 0 1 1 11 7M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2.236 8h9.528L16 12.618zM9 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M27 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-11a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11 3.382L20.764 17h-9.528z",clipRule:"evenodd"})})};c.forwardRef(Pi);const ec=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M14.8 8.254a4 4 0 1 0-1.082 1.682l7.483 4.81a4 4 0 0 0-.075.254H10.874A4.002 4.002 0 0 0 3 16a4 4 0 0 0 7.874 1h10.252q.033.128.075.254l-7.484 4.81a4 4 0 1 0 1.082 1.682l7.484-4.81a4 4 0 1 0 0-5.871zM11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(ec);const tc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M18.842 3.227a1 1 0 1 0-.445 1.95l1.747.399L9.6 12.959a4 4 0 1 0 0 6.081l10.546 7.385-1.748.399a1 1 0 1 0 .445 1.95l3.945-.9a1 1 0 0 0 .77-1.1l-.503-4.014a1 1 0 0 0-1.985.248l.223 1.779-10.545-7.384a4 4 0 0 0 .127-.403h14.712l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L25.586 15H10.874a4 4 0 0 0-.127-.403l10.544-7.383-.222 1.778a1 1 0 0 0 1.984.249l.503-4.015a1 1 0 0 0-.77-1.099zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0",clipRule:"evenodd"})})};c.forwardRef(tc);const nc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 6H5a2 2 0 0 0-2 2v20a1.98 1.98 0 0 0 1.156 1.813 1.986 1.986 0 0 0 2.141-.299L10.312 26H27a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10.5 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(nc);const oc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M10 16V8a6 6 0 1 1 12 0v8a6 6 0 1 1-12 0m16 0a1 1 0 0 0-2 0 8 8 0 0 1-16 0 1 1 0 1 0-2 0 10.014 10.014 0 0 0 9 9.95V29a1 1 0 0 0 2 0v-3.05A10.014 10.014 0 0 0 26 16"})})};c.forwardRef(oc);const rc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"})})},ac=c.forwardRef(rc),sc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 14H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"})})};c.forwardRef(sc);const ic=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M20 27h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"})})};c.forwardRef(ic);const cc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.443 18.776a13.1 13.1 0 0 1-4.626 6.614A13 13 0 0 1 4 15a12.9 12.9 0 0 1 2.61-7.815 13.1 13.1 0 0 1 6.614-4.625 1 1 0 0 1 1.25 1.25 11.01 11.01 0 0 0 13.725 13.725 1 1 0 0 1 1.25 1.25z"})})};c.forwardRef(cc);const lc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m17 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(lc);const dc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M10.939 8.061a1.5 1.5 0 0 1 0-2.125l4-4a1.5 1.5 0 0 1 2.125 0l4 4a1.503 1.503 0 1 1-2.125 2.125L17.5 6.625V12a1.5 1.5 0 1 1-3 0V6.625l-1.439 1.436a1.5 1.5 0 0 1-2.122 0m8 15.875L17.5 25.375V20a1.5 1.5 0 1 0-3 0v5.375l-1.439-1.44a1.504 1.504 0 0 0-2.125 2.125l4 4a1.5 1.5 0 0 0 2.125 0l4-4a1.502 1.502 0 1 0-2.125-2.125zm11.125-9-4-4a1.503 1.503 0 0 0-2.125 2.125l1.436 1.439H20a1.5 1.5 0 0 0 0 3h5.375l-1.44 1.439a1.503 1.503 0 0 0 2.125 2.125l4-4a1.5 1.5 0 0 0 .001-2.125zM6.625 17.5H12a1.5 1.5 0 1 0 0-3H6.625l1.44-1.439a1.503 1.503 0 1 0-2.125-2.125l-4 4a1.5 1.5 0 0 0 0 2.125l4 4a1.503 1.503 0 0 0 2.125-2.125z"})})};c.forwardRef(dc);const hc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26.615 3.214a.99.99 0 0 0-.857-.183l-16 4a1 1 0 0 0-.758.97v13.762a4.5 4.5 0 1 0 2 3.737V13.781l14-3.5v7.482a4.5 4.5 0 1 0 2 3.737V4a1 1 0 0 0-.385-.786"})})};c.forwardRef(hc);const uc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H14.5a1.5 1.5 0 1 1 0-3H27a1.5 1.5 0 0 1 1.5 1.5m-14-6.5H27a1.5 1.5 0 0 0 0-3H14.5a1.5 1.5 0 0 0 0 3m12.5 13H14.5a1.5 1.5 0 1 0 0 3H27a1.5 1.5 0 1 0 0-3M5.5 7.414V13a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 0 0-2.17-1.341l-2 1a1.5 1.5 0 0 0 1.17 2.75zm4.966 12.107a3.46 3.46 0 0 0-1.4-2.329 3.61 3.61 0 0 0-4.954.683 3.5 3.5 0 0 0-.52.942 1.5 1.5 0 0 0 2.818 1.027.5.5 0 0 1 .072-.125.6.6 0 0 1 .813-.103.48.48 0 0 1 .201.325.45.45 0 0 1-.096.347l-.016.02-3.585 4.794A1.5 1.5 0 0 0 5 27.5h4a1.5 1.5 0 1 0 0-3H8l1.785-2.389a3.43 3.43 0 0 0 .681-2.59"})})};c.forwardRef(uc);const fc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M17.2 8.254a4 4 0 1 1 1.082 1.682l-7.482 4.81q.04.125.074.254h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1H10.874q-.033.128-.075.254l7.484 4.81a4 4 0 1 1-1.082 1.682l-7.484-4.81a4 4 0 1 1 0-5.871zM21 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4",clipRule:"evenodd"})})};c.forwardRef(fc);const gc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M10.874 17A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m18 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(gc);const mc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M28.924 16.384c-.05.12-.124.231-.217.324l-4 4a1 1 0 0 1-1.632-.324 1 1 0 0 1 .217-1.09L25.585 17H10.875A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h14.712l-2.294-2.293a1 1 0 0 1 1.415-1.415l4 4a1 1 0 0 1 .217 1.09M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(mc);const xc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 4a1 1 0 0 0-1-1c-5.51 0-11.164 6.214-14.304 10.329A7.5 7.5 0 0 0 4 20.5c0 3.86-2.443 5.591-2.559 5.671A1 1 0 0 0 2 28h9.5a7.5 7.5 0 0 0 7.171-9.696C22.788 15.164 29 9.51 29 4M15.553 14.194a48 48 0 0 1 1.26-1.569 9.5 9.5 0 0 1 2.562 2.561q-.738.618-1.569 1.262a7.6 7.6 0 0 0-2.254-2.254m5.337-.335a11.6 11.6 0 0 0-2.75-2.75c3.973-4.316 6.969-5.625 8.738-5.989-.357 1.77-1.672 4.766-5.988 8.739"})})};c.forwardRef(xc);const wc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M31 13v6.25a2.01 2.01 0 0 1-1.45 1.922L17 24.75V29a1 1 0 0 1-2 0v-4.25a2.01 2.01 0 0 1 1.45-1.922L29 19.25V13h-2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3H2a1 1 0 0 1 0-2h2V8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2"})})};c.forwardRef(wc);const vc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.096 6.736A12.9 12.9 0 0 0 16 3h-.134A13 13 0 0 0 3 16c0 5.375 3.323 9.883 8.67 11.771A4 4 0 0 0 17 24a2 2 0 0 1 2-2h5.776a3.976 3.976 0 0 0 3.9-3.11c.224-.984.332-1.99.324-3a12.9 12.9 0 0 0-3.904-9.154M10.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(vc);const bc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.925 5.543v.018L21.65 29.554A1.985 1.985 0 0 1 19.728 31a1.98 1.98 0 0 1-1.803-1.144l-4.464-9.423a.5.5 0 0 1 .099-.568l7.158-7.159a1 1 0 0 0-1.414-1.413l-7.169 7.157a.5.5 0 0 1-.567.099l-9.376-4.441A2.05 2.05 0 0 1 1 12.17a1.99 1.99 0 0 1 1.446-1.815L26.44 3.08h.018a2 2 0 0 1 2.468 2.463"})})};c.forwardRef(bc);const pc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.56 17.061-10.257 10.25a7.501 7.501 0 0 1-10.607-10.61l12.27-12.236a5 5 0 0 1 7.07 7.074l-.021.02L13.04 23.086a1.503 1.503 0 0 1-2.121-.041 1.5 1.5 0 0 1 .041-2.121L22.924 9.409a2 2 0 1 0-2.838-2.82L7.816 18.82a4.5 4.5 0 1 0 6.366 6.364l10.258-10.25a1.503 1.503 0 0 1 2.125 2.125z"})})};c.forwardRef(pc);const $c=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 14.5h16a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m22 2H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3m-6 5H5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3"})})};c.forwardRef($c);const Cc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m28.414 9.171-5.585-5.586a2 2 0 0 0-2.829 0L4.586 19A1.98 1.98 0 0 0 4 20.414V26a2 2 0 0 0 2 2h5.586A1.98 1.98 0 0 0 13 27.414L28.414 12a2 2 0 0 0 0-2.829M24 13.585 18.414 8l3-3L27 10.585z"})})},su=c.forwardRef(Cc),jc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.985 21.885A7.03 7.03 0 0 1 22 28c-9.925 0-18-8.075-18-18a7.03 7.03 0 0 1 6.115-6.985 2 2 0 0 1 2.078 1.19l2.64 5.894v.015a2 2 0 0 1-.16 1.886 1 1 0 0 1-.07.096L12 15.181c.936 1.903 2.926 3.875 4.854 4.814l3.042-2.589q.045-.037.094-.07a2 2 0 0 1 1.896-.175l.017.008 5.888 2.639a2 2 0 0 1 1.194 2.077"})})};c.forwardRef(jc);const yc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m29.416 13-6.683 6.706c.57 1.584.806 4.236-1.65 7.5a2 2 0 0 1-1.458.794h-.141a2 2 0 0 1-1.415-.586l-6.033-6.04-5.328 5.333a1 1 0 1 1-1.415-1.415l5.332-5.328-6.037-6.038a2 2 0 0 1 .162-2.972c3.178-2.564 6.219-2.06 7.55-1.643L19 2.587a2 2 0 0 1 2.829 0l7.586 7.585A2 2 0 0 1 29.416 13"})})};c.forwardRef(yc);const Sc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.521 10.426 16.819a1 1 0 0 0 1.148 0C17 29.52 27 22.413 27 13A11.01 11.01 0 0 0 16 2m0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8"})})};c.forwardRef(Sc);const Rc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30 17v4a1 1 0 0 1-1.196.98L19.5 20.125v2.966l2.207 2.206A1 1 0 0 1 22 26v3a1 1 0 0 1-1.375.929L16 28.078l-4.625 1.85A1 1 0 0 1 10 29v-3a1 1 0 0 1 .293-.707l2.207-2.207v-2.961L3.196 21.98A1 1 0 0 1 2 21v-4a1 1 0 0 1 .553-.895l9.947-4.972V5.5a3.5 3.5 0 1 1 7 0v5.633l9.948 4.972A1 1 0 0 1 30 17"})})};c.forwardRef(Rc);const Mc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.676 18.884a7.6 7.6 0 0 1-3.978 1.107 9 9 0 0 1-3.42-.707A6.94 6.94 0 0 0 17 23.314V27a1 1 0 0 1-1.066 1A1.023 1.023 0 0 1 15 26.969v-1.555l-4.828-4.828A6.6 6.6 0 0 1 7.93 21a5.73 5.73 0 0 1-2.99-.834C2.216 18.511.75 14.702 1.034 9.974a1 1 0 0 1 .94-.94c4.728-.28 8.537 1.182 10.187 3.906a5.75 5.75 0 0 1 .806 3.56.5.5 0 0 1-.86.304l-2.4-2.513a1 1 0 0 0-1.415 1.414l6.736 6.906q.01-.146.026-.291a8.57 8.57 0 0 1 2.33-4.933l6.323-6.682a1 1 0 0 0-1.413-1.415l-6.125 6.477a.5.5 0 0 1-.848-.217c-.592-2.185-.331-4.36.8-6.228 2.233-3.685 7.428-5.657 13.898-5.277a1 1 0 0 1 .94.94c.375 6.471-1.598 11.666-5.283 13.899"})})};c.forwardRef(Mc);const Ac=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30 16a1.97 1.97 0 0 1-.95 1.689L11.04 28.706a2 2 0 0 1-2.767-.688A2 2 0 0 1 8 27.016V4.984a1.98 1.98 0 0 1 1.015-1.728 2 2 0 0 1 2.025.038L29.05 14.31A1.97 1.97 0 0 1 30 16"})})};c.forwardRef(Ac);const Ic=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-9.5V27a1.5 1.5 0 1 1-3 0v-9.5H5a1.5 1.5 0 1 1 0-3h9.5V5a1.5 1.5 0 1 1 3 0v9.5H27a1.5 1.5 0 0 1 1.5 1.5"})})},iu=c.forwardRef(Ic),Tc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.016 13.016 0 0 0 16 3m5 14h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2"})})};c.forwardRef(Tc);const Vc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H17V3a1 1 0 0 0-2 0v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4.92l-2.701 3.375a1 1 0 0 0 1.562 1.25L12.48 24h7.04l3.699 4.625a1 1 0 1 0 1.562-1.25L22.08 24H27a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 18a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0z"})})};c.forwardRef(Vc);const Ec=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.414 17 18 4.586A1.98 1.98 0 0 0 16.586 4H5a1 1 0 0 0-1 1v11.586A1.98 1.98 0 0 0 4.586 18L17 30.414a2 2 0 0 0 2.829 0l10.585-10.585a2 2 0 0 0 0-2.829M10.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(Ec);const Lc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M20.723 28H26a2 2 0 0 0 2-2v-4.706a1 1 0 0 0-1.383-.919 2.9 2.9 0 0 1-1.117.221c-1.654 0-3-1.387-3-3.091s1.346-3.091 3-3.091c.383 0 .763.075 1.117.221A1 1 0 0 0 28 13.706V9a2 2 0 0 0-2-2h-4.527a4.5 4.5 0 1 0-8.945 0H8a2 2 0 0 0-2 2v4.028a4.5 4.5 0 1 0 0 8.945V26a2 2 0 0 0 2 2h5.278"})})};c.forwardRef(Lc);const Dc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M18 22.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M29.5 16A13.5 13.5 0 1 1 16 2.5 13.515 13.515 0 0 1 29.5 16m-3 0A10.5 10.5 0 1 0 16 26.5 10.51 10.51 0 0 0 26.5 16M16 8c-3.033 0-5.5 2.242-5.5 5v.5a1.5 1.5 0 1 0 3 0V13c0-1.102 1.125-2 2.5-2s2.5.898 2.5 2-1.125 2-2.5 2a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 2.966.32C19.79 17.235 21.5 15.296 21.5 13c0-2.758-2.468-5-5.5-5"})})};c.forwardRef(Dc);const Hc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M14.5 9v11a6.006 6.006 0 0 1-6 6 1 1 0 0 1 0-2 4 4 0 0 0 4-4v-1H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2M27 7h-7.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H27v1a4 4 0 0 1-4 4 1 1 0 0 0 0 2 6.006 6.006 0 0 0 6-6V9a2 2 0 0 0-2-2"})})};c.forwardRef(Hc);const zc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5v23a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.395.349-4.779.902-7.11 1.223-5.061 3.54-8.454 6.704-9.809a1 1 0 0 1 1.394.92m-12.014-.164a.999.999 0 1 0-1.972.33L13.986 11H11V5a1 1 0 0 0-2 0v6H6.014l.972-5.835a1 1 0 1 0-1.972-.329l-1 6A1 1 0 0 0 4 11a6.01 6.01 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.01 6.01 0 0 0 16 11q0-.083-.014-.164z"})})};c.forwardRef(zc);const Bc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19 28a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m8.953-8.521-1.546 6.954a2 2 0 0 1-3.188 1.138l-3.405-2.57h-7.625L8.78 27.57a2 2 0 0 1-3.189-1.138l-1.545-6.954a2.01 2.01 0 0 1 .415-1.714l3.57-4.282c.12-1.574.482-3.12 1.072-4.584 1.612-4.043 4.5-6.579 5.671-7.481a2 2 0 0 1 2.45 0c1.167.902 4.059 3.438 5.671 7.48.59 1.465.952 3.01 1.072 4.585l3.57 4.282a2.01 2.01 0 0 1 .415 1.714m-17.404 4.25q-2.014-3.666-2.445-7.209L6 19.045 7.545 26l.022-.016zM17.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m8.5 6.545-2.104-2.525q-.428 3.535-2.445 7.211l2.982 2.25.022.017z"})})};c.forwardRef(Bc);const kc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19.716 14.141a1 1 0 0 1 .261-1.391l8.458-5.788a1 1 0 0 1 1.125 1.652L21.101 14.4a1 1 0 0 1-1.39-.261zm10.109 10.634a1 1 0 0 1-1.39.261L17 17.211l-5.315 3.636a4.5 4.5 0 1 1-1.125-1.65L15.229 16l-4.673-3.198a4.5 4.5 0 1 1 1.125-1.65l17.875 12.233a1 1 0 0 1 .269 1.39M9 22.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0-13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"})})};c.forwardRef(kc);const Oc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14-3.25 1.36-8.69 1.44-13.94 1.52-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57 1.36 3.27 1.44 8.69 1.52 13.94.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52 3.56 1.47 7.63 5.37 11.57 9.14 6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14 3.27-1.36 8.69-1.44 13.94-1.52 9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94 1.47-3.56 5.37-7.63 9.14-11.57 6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-52.2 6.84-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"})})};c.forwardRef(Oc);const Nc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.061 26.939 23.125 21A11.515 11.515 0 1 0 21 23.125l5.941 5.942a1.503 1.503 0 0 0 2.125-2.125zM5.5 14a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 5.5 14"})})},_c=c.forwardRef(Nc),Fc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 5H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M26 17H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(Fc);const Wc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 7v7.346c0 11.202-9.477 14.918-11.375 15.549a1.94 1.94 0 0 1-1.25 0C13.475 29.264 4 25.548 4 14.346V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2"})})};c.forwardRef(Wc);const Uc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m30.949 7.653-6.47-3.528A1 1 0 0 0 24 4h-4a1 1 0 0 0-1 1 3 3 0 0 1-6 0 1 1 0 0 0-1-1H8a1 1 0 0 0-.48.125L1.051 7.653a1.97 1.97 0 0 0-.824 2.657l2.41 4.601A2.05 2.05 0 0 0 4.458 16H7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16h2.543a2.05 2.05 0 0 0 1.822-1.089l2.409-4.601a1.97 1.97 0 0 0-.825-2.658M4.459 14a.08.08 0 0 1-.051-.016L2.01 9.408 7 6.685V14zm23.134-.018a.07.07 0 0 1-.052.018H25V6.685l4.99 2.723z"})})};c.forwardRef(Uc);const qc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M12 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0m11-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.805-16.594A1 1 0 0 0 28 8H6.04L5.026 4.45A2.01 2.01 0 0 0 3.103 3H1a1 1 0 0 0 0 2h2.103l4.522 15.824A3.01 3.01 0 0 0 10.509 23h12.014a2.99 2.99 0 0 0 2.867-2.117l3.566-11.59a1 1 0 0 0-.151-.887"})})};c.forwardRef(qc);const Gc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M14.5 27a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h7a1.5 1.5 0 0 1 0 3H6.5v19H13a1.5 1.5 0 0 1 1.5 1.5m13.561-12.061-5-5a1.503 1.503 0 0 0-2.125 2.125l2.439 2.436H13a1.5 1.5 0 1 0 0 3h10.375l-2.44 2.439a1.503 1.503 0 0 0 2.125 2.125l5-5a1.5 1.5 0 0 0 .001-2.125"})})};c.forwardRef(Gc);const Kc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M4 10a1 1 0 0 1 1-1h4.646a3.5 3.5 0 0 1 6.708 0H27a1 1 0 1 1 0 2H16.354a3.5 3.5 0 0 1-6.708 0H5a1 1 0 0 1-1-1m23 11h-2.646a3.5 3.5 0 0 0-6.708 0H5a1 1 0 0 0 0 2h12.646a3.5 3.5 0 0 0 6.708 0H27a1 1 0 1 0 0-2"})})};c.forwardRef(Kc);const Yc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 18a1.97 1.97 0 0 1-1.302 1.867l-6.457 2.375-2.375 6.452a1.99 1.99 0 0 1-3.735 0L9.75 22.25l-6.452-2.375a1.99 1.99 0 0 1 0-3.735l6.456-2.375 2.375-6.451a1.99 1.99 0 0 1 3.735 0l2.375 6.456 6.451 2.375A1.97 1.97 0 0 1 26 18M19 6h2v2a1 1 0 0 0 2 0V6h2a1 1 0 1 0 0-2h-2V2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2m11 4h-1V9a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"})})};c.forwardRef(Yc);const Zc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M15 7v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m10-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m12 0h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"})})};c.forwardRef(Zc);const Xc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:[a.jsx("path",{d:"M27.5 21.136 16 27.843 4.5 21.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),a.jsx("path",{d:"M27.5 15.136 16 21.843 4.5 15.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),a.jsx("path",{d:"m3.5 10.864 12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 0 0 0-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7a1 1 0 0 0 0 1.728"})]})};c.forwardRef(Xc);const Qc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m29.313 14.298-5.638 4.92 1.689 7.325a2 2 0 0 1-2.98 2.167l-6.389-3.875L9.62 28.71a2 2 0 0 1-2.98-2.168l1.686-7.317-5.638-4.928a2 2 0 0 1 1.138-3.507l7.433-.644 2.901-6.92a1.994 1.994 0 0 1 3.68 0l2.91 6.92 7.43.644a2 2 0 0 1 1.139 3.508z"})})};c.forwardRef(Qc);const Jc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 19a4 4 0 1 0-4.991 3.875A1 1 0 0 0 24 23a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4v-5.065c3.934-.5 7-3.934 7-8.039V5a2 2 0 0 0-2-2h-2a1 1 0 1 0 0 2h2v4.896c0 3.323-2.656 6.061-5.92 6.104A6 6 0 0 1 6 10V5h2a1 1 0 0 0 0-2H6a2 2 0 0 0-2 2v5a8 8 0 0 0 7 7.936V23a6.006 6.006 0 0 0 6 6h3a6.006 6.006 0 0 0 6-6 1 1 0 0 0-.009-.125A4 4 0 0 0 29 19m-4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"})})};c.forwardRef(Jc);const Pc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"})})};c.forwardRef(Pc);const el=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 12a1 1 0 0 0-.038-.275L27.17 5.45A2.01 2.01 0 0 0 25.25 4H6.75a2.01 2.01 0 0 0-1.919 1.45L3.04 11.725A1 1 0 0 0 3 12v2a5 5 0 0 0 2 4v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a5 5 0 0 0 2-4zm-18 2a3 3 0 0 1-4.39 2.657 1 1 0 0 0-.228-.132A3 3 0 0 1 5 14v-1h6zm8 0a3 3 0 0 1-6 0v-1h6zm8 0a3 3 0 0 1-1.384 2.525q-.12.051-.225.131A3 3 0 0 1 21 14v-1h6z"})})};c.forwardRef(el);const tl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-3.767A5.19 5.19 0 0 1 24.5 21c0 1.806-.976 3.54-2.679 4.756C20.25 26.881 18.18 27.5 16 27.5s-4.25-.619-5.821-1.744C8.476 24.54 7.5 22.806 7.5 21a1.5 1.5 0 0 1 3 0c0 1.898 2.519 3.5 5.5 3.5s5.5-1.602 5.5-3.5c0-1.595-1.163-2.523-4.419-3.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M9.389 12.5a1.5 1.5 0 0 0 1.5-1.5c0-2 2.197-3.5 5.111-3.5 2.17 0 3.921.831 4.685 2.223a1.5 1.5 0 0 0 2.625-1.446C22.016 5.914 19.281 4.5 16 4.5c-4.625 0-8.111 2.794-8.111 6.5a1.5 1.5 0 0 0 1.5 1.5"})})};c.forwardRef(tl);const nl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M15 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m1 3a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m-8.707.707a1 1 0 1 0 1.414-1.415l-2-2a1 1 0 1 0-1.414 1.415zm0 14.586-2 2a1 1 0 1 0 1.414 1.415l2-2a1 1 0 1 0-1.415-1.415M24 9a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0-1.415-1.414l-2 2A1 1 0 0 0 24 9m.707 14.293a1 1 0 1 0-1.415 1.415l2 2a1 1 0 0 0 1.415-1.415zM6 16a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m10 10a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m14-11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"})})};c.forwardRef(nl);const ol=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 8h-8.586l4.293-4.292a1 1 0 0 0-1.415-1.415L16 7.586l-5.292-5.293a1 1 0 1 0-1.415 1.415L13.586 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 17h-7V10h7zm-2-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"})})};c.forwardRef(ol);const rl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m29.978 19.625-1.5-12A3 3 0 0 0 25.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5.383l4.722 9.448A1 1 0 0 0 15 30a5 5 0 0 0 5-5v-2h7a3 3 0 0 0 2.977-3.375M9 18H4V7h5z"})})};c.forwardRef(rl);const al=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.25 10.015A3 3 0 0 0 27 9h-7V7a5 5 0 0 0-5-5 1 1 0 0 0-.895.553L9.383 12H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h21.5a3 3 0 0 0 2.977-2.625l1.5-12a3 3 0 0 0-.727-2.36M4 14h5v11H4z"})})};c.forwardRef(al);const sl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M23 3H9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h1l-1.8 2.4a1 1 0 0 0 1.6 1.2l2.7-3.6h7l2.7 3.6a1 1 0 0 0 1.6-1.2L22 27h1a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M10.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5-8H7v-5h8zm6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.5-8h-8v-5h8z"})})};c.forwardRef(sl);const il=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M14 21a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm0-15h-8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})})},cu=c.forwardRef(il),cl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M15.583 3.5v4a.75.75 0 1 1-1.5 0V5.313l-4.72 4.72a.75.75 0 0 1-1.062 0l-1.968-1.97-3.97 3.968a.751.751 0 1 1-1.062-1.063l4.5-4.5a.75.75 0 0 1 1.063 0l1.969 1.97 4.188-4.188h-2.188a.75.75 0 1 1 0-1.5h4a.75.75 0 0 1 .75.75"})})};c.forwardRef(cl);const ll=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m23.54 2.267-3.711 3.377c1.7.52 3.298 1.397 4.653 2.631 4.684 4.266 4.684 11.184 0 15.45q-5.184 4.72-16.021 6.008l3.71-3.377a12.2 12.2 0 0 1-4.653-2.63c-4.684-4.267-4.712-11.16 0-15.45q5.184-4.721 16.021-6.01m-7.54 8.4c-3.314 0-6 2.388-6 5.333s2.686 5.333 6 5.333 6-2.387 6-5.333c0-2.945-2.686-5.333-6-5.333"})})};c.forwardRef(ll);const dl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.5 28a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M16 24.5a8.51 8.51 0 0 0 8.5-8.5V7a1.5 1.5 0 1 0-3 0v9a5.5 5.5 0 0 1-11 0V7a1.5 1.5 0 1 0-3 0v9a8.51 8.51 0 0 0 8.5 8.5"})})};c.forwardRef(dl);const hl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-16.439-7.939L14.5 8.625V19a1.5 1.5 0 1 0 3 0V8.625l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.503 1.503 0 1 0 2.125 2.125z"})})};c.forwardRef(hl);const ul=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.866 27.5A1 1 0 0 1 28 28H4a1 1 0 0 1-.865-1.5c1.904-3.291 4.838-5.651 8.261-6.77a9 9 0 1 1 9.208 0c3.424 1.119 6.357 3.479 8.261 6.77a1 1 0 0 1 .001 1"})})};c.forwardRef(ul);const fl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19.44 3.101a1 1 0 0 0-1.054.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1 1 0 0 0 20 28V4a1 1 0 0 0-.56-.899M28.414 16l2.293-2.292a1.001 1.001 0 0 0-1.415-1.415L27 14.586l-2.293-2.293a1 1 0 1 0-1.415 1.415L25.587 16l-2.293 2.293a1 1 0 0 0 1.415 1.415L27 17.414l2.293 2.294a1 1 0 0 0 1.415-1.415z"})})};c.forwardRef(fl);const gl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M9 20H4v-8h5zm15.75-7.305a5 5 0 0 1 0 6.61 1 1 0 0 1-1.5-1.322 3 3 0 0 0 0-3.966 1 1 0 0 1 1.5-1.322M31 16a10 10 0 0 1-2.546 6.668 1 1 0 0 1-1.49-1.334 8 8 0 0 0 0-10.666.998.998 0 0 1 .407-1.624 1 1 0 0 1 1.083.29A9.98 9.98 0 0 1 31 16"})})};c.forwardRef(gl);const ml=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M15 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m11 11c-3.58 0-5.226-1.662-6.969-3.421a25 25 0 0 0-1.375-1.323C13.031 8.24 5.63 15.098 5.316 15.391a1 1 0 0 0 1.369 1.458 20.5 20.5 0 0 1 3.815-2.724c1.723-.922 3.174-1.279 4.338-1.072L8.082 28.6a1 1 0 0 0 1.835.798l4.2-9.659L18 22.515V29a1 1 0 1 0 2 0v-7a1 1 0 0 0-.419-.814l-4.65-3.321L16.61 14c.33.305.657.634 1 .98C19.381 16.774 21.586 19 26 19a1 1 0 0 0 0-2"})})};c.forwardRef(ml);const xl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-1 7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm1 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(xl);const wl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M3.468 10 5.9 5.786l-.14-.243a3 3 0 1 1 5.316-2.76.51.51 0 0 1-.2.65.5.5 0 0 1-.71-.233 2 2 0 1 0-3.542 1.84l.864 1.496a.5.5 0 0 1 0 .5L5.2 11a1 1 0 0 1-1.731-1m8.812-2.5h-.771l-2.31-4a1 1 0 0 0-1.731 1l2.165 3.75a.5.5 0 0 0 .432.25h2.227c1.118 0 2.06.915 2.041 2.033a2 2 0 0 1-1.98 1.967.515.515 0 0 0-.518.458.5.5 0 0 0 .5.542 3.003 3.003 0 0 0 3-3.058c-.034-1.643-1.41-2.942-3.052-2.942zm1.053 2.952c-.025-.538-.489-.952-1.027-.952H7.51a.5.5 0 0 0-.433.25l-1.01 1.75a2 2 0 1 1-3.342-2.187.51.51 0 0 0-.058-.688.5.5 0 0 0-.732.073A3 3 0 1 0 6.93 12l.289-.5h5.114a1 1 0 0 0 1-1.048"})})};c.forwardRef(wl);const vl=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=m(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m31.316 24.949-3 1a1 1 0 0 1-1.211-.5l-3.724-7.45H13a1 1 0 0 1-1-1v-3.707A7 7 0 0 0 14 27c3.239 0 6.261-2.256 7.031-5.25a1 1 0 1 1 1.938.5C21.96 26.162 18.19 29 14 29a9 9 0 0 1-2-17.774V8.851a3.5 3.5 0 1 1 2 0V11h7a1 1 0 0 1 0 2h-7v3h10a1 1 0 0 1 .894.552l3.612 7.225 2.178-.726a1 1 0 1 1 .632 1.898"})})};c.forwardRef(vl);const Ge=(e,t)=>{const o=c.createContext(t),r=s=>{const{children:i,...l}=s,d=c.useMemo(()=>l,Object.values(l));return a.jsx(o.Provider,{value:d,children:i})};function n(s){const i=c.useContext(o);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return r.displayName=`${e}Provider`,[r,n]};function bl(e,t){return typeof e=="string"?!1:t in e}function ut(e,t,o){return e&&t&&bl(e,t)?e[t]:o}const Wn={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},pl=e=>{const[t,o,r,n]=e,s=o??t;return[t,s,r??t,n??s]};function $l(e,t){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return t.spaces;case"color":case"background":case"borderColor":return t.colors;case"fontSize":return t.fontSizes;case"fontWeight":return t.fontWeights;case"lineHeight":return t.lineHeights;case"zIndex":return t.zIndices;case"boxShadow":return t.shadows;default:return null}}const vt=(e,t)=>{const o=Object.entries(e).reduce((r,n)=>{const[s,i]=n,l=$l(s,t),d=Object.prototype.hasOwnProperty.call(Wn,s)?Wn[s]:s;return d&&(i||i===0)&&(typeof i=="object"&&!Array.isArray(i)?Object.entries(i).forEach(([u,h])=>{r[u]={...r[u],...Un(d,h,l)}}):r.initial={...r.initial,...Un(d,i,l)}),r},{initial:{},small:{},medium:{},large:{}});return Object.entries(o).reduce((r,[n,s])=>{if(s&&Object.keys(s).length>0){const i=Object.entries(s).reduce((l,[d,u])=>(l.push(`${d}: ${u};`),l),[]).join(`
`);n==="initial"?r.push(i):r.push(`${t.breakpoints[n]}{ ${i} }`)}return r},[]).join(`
`)},Un=(e,t,o)=>{if(Array.isArray(e)&&Array.isArray(t)){const r=pl(t);return e.reduce((n,s,i)=>(n[s]=ut(o,r[i],r[i]),n),{})}else return Array.isArray(e)&&!Array.isArray(t)?e.reduce((r,n)=>(r[n]=ut(o,t,t),r),{}):!Array.isArray(e)&&!Array.isArray(t)?{[e]:ut(o,t,t)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},he=c.forwardRef,I=he((e,t)=>{const{background:o,basis:r,borderColor:n,color:s,flex:i,fontSize:l,grow:d,hasRadius:u,padding:h,paddingBottom:g,paddingLeft:f,paddingRight:x,paddingTop:w,margin:b,marginLeft:C,marginBottom:$,marginRight:v,marginTop:R,shadow:y,shrink:M,lineHeight:j,fontWeight:S,width:V,minWidth:z,maxWidth:L,height:q,minHeight:D,maxHeight:k,top:O,left:Y,bottom:P,right:H,borderRadius:N,borderStyle:G,borderWidth:J,tag:Z,pointerEvents:ie,display:_,position:se,zIndex:ne,overflow:ue,cursor:T,transition:F,transform:ee,animation:W,textAlign:U,textTransform:K,...ce}=e,X=Z||"div",Q={$background:o,$basis:r,$borderColor:n,$color:s,$flex:i,$fontSize:l,$grow:d,$hasRadius:u,$padding:h,$paddingBottom:g,$paddingLeft:f,$paddingRight:x,$paddingTop:w,$margin:b,$marginLeft:C,$marginBottom:$,$marginRight:v,$marginTop:R,$shadow:y,$shrink:M,$lineHeight:j,$fontWeight:S,$width:V,$minWidth:z,$maxWidth:L,$height:q,$minHeight:D,$maxHeight:k,$top:O,$left:Y,$bottom:P,$right:H,$borderRadius:N,$borderStyle:G,$borderWidth:J,$pointerEvents:ie,$display:_,$position:se,$zIndex:ne,$overflow:ue,$cursor:T,$transition:F,$transform:ee,$animation:W,$textAlign:U,$textTransform:K};return a.jsx(Cl,{as:X,ref:t,...Q,...ce})}),Cl=p.div`
  ${({theme:e,...t})=>vt({padding:t.$padding,paddingTop:t.$paddingTop,paddingBottom:t.$paddingBottom,paddingLeft:t.$paddingLeft,paddingRight:t.$paddingRight,margin:t.$margin,marginTop:t.$marginTop,marginBottom:t.$marginBottom,marginLeft:t.$marginLeft,marginRight:t.$marginRight,top:t.$top,left:t.$left,bottom:t.$bottom,right:t.$right,width:t.$width,minWidth:t.$minWidth,maxWidth:t.$maxWidth,height:t.$height,minHeight:t.$minHeight,maxHeight:t.$maxHeight,color:t.$color,background:t.$background,fontSize:t.$fontSize,fontWeight:t.$fontWeight,lineHeight:t.$lineHeight,borderRadius:t.$hasRadius?e.borderRadius:t.$borderRadius,borderStyle:t.$borderColor&&!t.$borderStyle?"solid":t.$borderStyle,borderWidth:t.$borderColor&&!t.$borderWidth?"1px":t.$borderWidth,borderColor:t.$borderColor,zIndex:t.$zIndex,boxShadow:t.$shadow,display:t.$display,pointerEvents:t.$pointerEvents,cursor:t.$cursor,textAlign:t.$textAlign,textTransform:t.$textTransform,transition:t.$transition,transform:t.$transform,animation:t.$animation,position:t.$position,overflow:t.$overflow,flex:t.$flex,flexShrink:t.$shrink,flexGrow:t.$grow,flexBasis:t.$basis},e)};
`,A=he((e,t)=>{const{className:o,alignItems:r,direction:n,inline:s,gap:i,justifyContent:l,wrap:d,...u}=e,h={$alignItems:r,$direction:n,$gap:i,$justifyContent:l,$wrap:d,$inline:s};return a.jsx(jl,{className:o,ref:t,...h,...u})}),jl=p(I)`
  ${({theme:e,$display:t="flex",$alignItems:o="center",$direction:r="row",...n})=>vt({gap:n.$gap,alignItems:o,justifyContent:n.$justifyContent,flexWrap:n.$wrap,flexDirection:r,display:n.$inline?"inline-flex":t},e)};
`,yl="alpha",Sl="beta",Rl="delta",Ml="epsilon",qn="omega",Al="pi",Il="sigma",xo=E`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Tl=({$variant:e=qn,theme:t})=>{switch(e){case yl:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case Sl:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case Rl:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case Ml:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case qn:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case Al:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case Il:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},B=he((e,t)=>{const{ellipsis:o,textColor:r="currentcolor",textDecoration:n,textTransform:s,variant:i,lineHeight:l,fontWeight:d,fontSize:u,...h}=e,g={$ellipsis:o,$textColor:r,$textDecoration:n,$textTransform:s,$variant:i,$lineHeight:l,$fontWeight:d,$fontSize:u};return a.jsx(Vl,{ref:t,tag:"span",...g,...h})}),Vl=p(I)`
  ${Tl}
  ${({$ellipsis:e})=>e?xo:""}

  ${({theme:e,...t})=>vt({color:t.$textColor,textDecoration:t.$textDecoration,textTransform:t.$textTransform,lineHeight:t.$lineHeight,fontWeight:t.$fontWeight,fontSize:t.$fontSize},e)}
`,[El,Rn]=Ge("Accordion"),Ll=c.forwardRef(({children:e,size:t="S",...o},r)=>a.jsx(Dl,{ref:r,$size:t,collapsible:!0,...o,type:"single",children:a.jsx(El,{size:t,children:e})})),Dl=p(Ur)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?E`
        border-radius: ${t=>t.theme.borderRadius};
        border: solid 1px ${t=>t.theme.colors.neutral200};
      `:E``}
`,Hl=c.forwardRef((e,t)=>{const{size:o}=Rn("Item");return a.jsx(zl,{$size:o,"data-size":o,ref:t,...e})}),zl=p(qr)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${e=>e.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,Bl=c.forwardRef(({caretPosition:e="left",description:t,icon:o,iconProps:r,children:n,...s},i)=>{const{size:l}=Rn("Trigger");return a.jsxs(vo,{$caretPosition:e,$size:l,ref:i,...s,children:[e==="left"?a.jsx(gt,{$size:l,children:a.jsx(He,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null,a.jsxs(A,{tag:"span",gap:2,overflow:"hidden",children:[o&&l==="S"?a.jsx(wo,{children:a.jsx(o,{...r})}):null,a.jsxs(A,{alignItems:"flex-start",direction:"column",tag:"span",ref:i,overflow:"hidden",children:[a.jsx(B,{fontWeight:l==="S"?"bold":void 0,ellipsis:!0,variant:l==="M"?"delta":void 0,textAlign:"left",width:"100%",children:n}),t&&l==="M"?a.jsx(B,{textAlign:"left",children:t}):null]})]}),e==="right"?a.jsx(gt,{$size:l,children:a.jsx(He,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null]})}),wo=p(I)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,gt=p(A).attrs(e=>({...e,tag:"span"}))`
  background-color: ${e=>e.theme.colors.neutral200};
  width: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  height: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${e=>e.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.authenticMotion},
      ${e=>e.theme.transitions.backgroundColor};
  }
`,vo=p(Wr)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${gt} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,kl=c.forwardRef((e,t)=>{const{size:o}=Rn("Trigger");return a.jsx(bo,{$size:o,...e,ref:t})}),bo=p(A).attrs(e=>({...e,tag:"span"}))`
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${e=>e.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${e=>e.theme.transitions.color};
    }
  }
`,Ol=c.forwardRef(({variant:e="primary",...t},o)=>a.jsx(Nl,{$variant:e,ref:o,...t})),Nl=p(Gr)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.$variant==="primary"?e.theme.colors.neutral0:e.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${e=>e.theme.colors.primary100};

      & > ${vo} {
        color: ${e=>e.theme.colors.primary600};

        & ${wo} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${gt} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${bo} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,_l=c.forwardRef((e,t)=>a.jsx(Ul,{ref:t,...e})),Fl=le`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,Wl=le`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,Ul=p(Kr)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${Fl} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${Wl} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,lu=Object.freeze(Object.defineProperty({__proto__:null,Actions:kl,Content:_l,Header:Ol,Item:Hl,Root:Ll,Trigger:Bl},Symbol.toStringTag,{value:"Module"})),bt=E`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e=>e.theme.colors.primary600};
    }
  }
`,Ke=({tag:e,...t})=>{const o=e||"span";return a.jsx(ql,{...t,as:o})},ql=p.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Pe=({children:e,label:t})=>{const o=c.Children.only(e);return a.jsxs(a.Fragment,{children:[c.cloneElement(o,{"aria-hidden":"true",focusable:"false"}),a.jsx(Ke,{children:t})]})};Pe.displayName="AccessibleIcon";const Wt=({theme:e,$variant:t})=>t==="danger"?e.colors.danger700:t==="success"?e.colors.success700:t==="warning"?e.colors.warning700:e.colors.primary700;p(I)`
  ${bt};
`;p(A)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${Wt};
    }
  }
`;p(I)`
  & a > span {
    color: ${Wt};
  }

  svg path {
    fill: ${Wt};
  }
`;function Ce({prop:e,defaultProp:t,onChange:o=()=>{}}){const[r,n]=po({defaultProp:t,onChange:o}),s=e!==void 0,i=s?e:r,l=R0(o),d=c.useCallback(u=>{if(s){const g=typeof u=="function"?u(e):u;g!==e&&l(g)}else n(u)},[s,e,n,l]);return[i,d]}function po({defaultProp:e,onChange:t}){const o=c.useState(e),[r]=o,n=c.useRef(r),s=R0(t);return c.useEffect(()=>{n.current!==r&&(s(r),n.current=r)},[r,n,s]),o}const Gn={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},Kn={120:"120ms"};`${Kn[120]}${Gn.easeOutQuad}`,`${Kn[120]}${Gn.easeOutQuad}`;const oe={overlayFadeIn:le`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:le`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:le`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:le`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:le`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:le`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:le`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:le`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:le`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:le`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:le`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},et=32,Yn=2;c.forwardRef(({onLoadingStatusChange:e,delayMs:t=600,src:o,alt:r,fallback:n,preview:s=!1,...i},l)=>{const[d,u]=Ce({onChange:e}),[h,g]=c.useState(!1),f=s&&d==="loaded",x=w=>{f&&g(w)};return a.jsxs(C0,{onOpenChange:x,children:[a.jsx(j0,{asChild:!0,children:a.jsxs(Ut,{ref:l,...i,children:[f?a.jsx(Gl,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:h?.4:0}}):null,a.jsx(Kl,{src:o,alt:r,onLoadingStatusChange:u}),a.jsx(Xr,{delayMs:t,children:a.jsx(B,{fontWeight:"bold",textTransform:"uppercase",children:n})})]})}),f?a.jsx(y0,{children:a.jsx(Yl,{side:"top",sideOffset:4,children:a.jsx(Zl,{src:o,alt:r})})}):null]})});const $o=E`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,Co=E`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Ut=p(Qr)`
  position: relative;
  z-index: 0;
  ${$o}
  width: ${et/10}rem;
  height: ${et/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,Gl=p(I)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Kl=p(Jr)`
  ${Co}
`,Yl=p(S0)`
  ${$o}
  width: ${et*Yn/10}rem;
  height: ${et*Yn/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${oe.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Zl=p.img`
  ${Co}
`;c.forwardRef((e,t)=>a.jsx(Xl,{...e,ref:t,tag:"div"}));const Xl=p(A)`
  & > ${Ut} + ${Ut} {
    margin-left: -${et/10/2}rem;
  }
`,Ql=({active:e=!1,size:t="M",textColor:o="neutral600",backgroundColor:r="neutral150",variant:n,children:s,minWidth:i=5,...l})=>{const d=t==="S"?1:2,u=n?{backgroundColor:`${n}200`,textColor:`${n}700`}:{backgroundColor:r,textColor:o};return a.jsx(Jl,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:i,paddingLeft:d,paddingRight:d,background:e?"primary200":u.backgroundColor,$size:t,...l,children:a.jsx(B,{variant:"sigma",textColor:e?"primary600":u.textColor,lineHeight:"1rem",children:s})})},Jl=p(A)`
  border-radius: ${({theme:e,$size:t})=>t==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:t})=>e==="S"?E`
        padding-block: 0.3rem;
        padding-inline ${t.spaces[1]}
      `:E`
      padding-block: 0.7rem;
      padding-inline ${t.spaces[2]}
    `};
`,Pl=p(I)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,rt=he(({href:e,disabled:t=!1,isExternal:o=!1,...r},n)=>a.jsx(Pl,{tag:"a",ref:n,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0,href:e,tabIndex:t?-1:void 0,"aria-disabled":t,pointerEvents:t?"none":void 0,cursor:t?void 0:"pointer",...r})),jo=()=>a.jsx(I,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:a.jsx(B,{variant:"pi",textColor:"neutral500",children:"/"})});jo.displayName="Divider";const e2=p(A)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,t2=c.forwardRef(({label:e,children:t,...o},r)=>{const n=c.Children.toArray(t);return a.jsx(I,{"aria-label":e,tag:"nav",...o,ref:r,children:a.jsx(e2,{tag:"ol",children:c.Children.map(n,(s,i)=>{const l=n.length>1&&i+1<n.length;return a.jsxs(A,{inline:!0,tag:"li",children:[s,l&&a.jsx(jo,{})]})})})})});t2.displayName="Breadcrumbs";const n2=c.forwardRef(({children:e,isCurrent:t=!1,...o},r)=>a.jsx(I,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:r,children:a.jsx(B,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"regular","aria-current":t,...o,children:e})}));n2.displayName="Crumb";const o2=p(rt)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,r2=c.forwardRef(({children:e,...t},o)=>a.jsx(o2,{ref:o,...t,children:e}));r2.displayName="CrumbLink";const Fe=e=>e.replaceAll(":","");function a2(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function yo(...e){return t=>e.forEach(o=>a2(o,t))}function fe(...e){return c.useCallback(yo(...e),e)}const s2=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ae=s2()?c.useEffect:c.useLayoutEffect,i2=kr.useId||(()=>{});let c2=0;const $e=e=>{const[t,o]=c.useState(i2());return Ae(()=>{e||o(r=>r??String(c2++))},[e]),e?.toString()??(t||"")},at=(e,t,{selectorToWatch:o,skipWhen:r=!1})=>{const n=an(t);c.useEffect(()=>{if(r||!e.current)return;const s={root:e.current,rootMargin:"0px"},i=u=>{u.forEach(h=>{h.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&n(h)})},l=new IntersectionObserver(i,s),d=e.current.querySelector(o);return d&&l.observe(d),()=>{l.disconnect()}},[r,n,o,e])},Mn="success-light",An="danger-light",pt="default",st="tertiary",it="secondary",So="danger",Ro="success",$t="ghost",In=[Mn,An],l2=[pt,st,it,So,Ro,$t,...In],d2=["XS","S","M","L"],ve=e=>e===Mn||e===An?`${e.substring(0,e.lastIndexOf("-"))}`:e===st?"neutral":e===pt||e===it||l2.every(t=>t!==e)?"primary":`${e}`,Mo=({theme:e})=>E`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,Ao=({theme:e,$variant:t})=>[...In,it].includes(t)?E`
      background-color: ${e.colors.neutral0};
    `:t===st?E`
      background-color: ${e.colors.neutral100};
    `:t===$t?E`
      background-color: ${e.colors.neutral100};
    `:t===pt?E`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:E`
    border: 1px solid ${e.colors[`${ve(t)}500`]};
    background: ${e.colors[`${ve(t)}500`]};
  `,Io=({theme:e,$variant:t})=>[...In,it].includes(t)?E`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${ve(t)}600`]};
      color: ${e.colors[`${ve(t)}600`]};
    `:t===st||t===$t?E`
      background-color: ${e.colors.neutral150};
    `:E`
    border: 1px solid ${e.colors[`${ve(t)}600`]};
    background: ${e.colors[`${ve(t)}600`]};
  `,To=({theme:e,$variant:t})=>{switch(t){case An:case Mn:case it:return E`
        border: 1px solid ${e.colors[`${ve(t)}200`]};
        background: ${e.colors[`${ve(t)}100`]};
        color: ${e.colors[`${ve(t)}700`]};
      `;case st:return E`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case $t:return E`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case Ro:case So:return E`
        border: 1px solid ${e.colors[`${ve(t)}600`]};
        background: ${e.colors[`${ve(t)}600`]};
        color: ${e.colors.neutral0};
      `;default:return E`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},qt=he(({variant:e=pt,startIcon:t,endIcon:o,disabled:r=!1,children:n,onClick:s,size:i=d2[1],loading:l=!1,fullWidth:d=!1,type:u="button",...h},g)=>{const f=r||l,x=C=>{!f&&s&&s(C)},w=h.tag??"button",b=w==="button"||w==="input"?u:void 0;return a.jsxs(f2,{ref:g,"aria-disabled":f,disabled:f,$size:i,$variant:e,tag:"button",onClick:x,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:d?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",type:b,...h,children:[(t||l)&&a.jsx(A,{tag:"span","aria-hidden":!0,children:l?a.jsx(u2,{}):t}),a.jsx(B,{variant:i==="S"?"pi":void 0,fontWeight:"bold",children:n}),o&&a.jsx(A,{tag:"span","aria-hidden":!0,children:o})]})}),h2=le`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,u2=p(mo)`
  animation: ${h2} 2s infinite linear;
  will-change: transform;
`,f2=p(A)`
  height: ${({theme:e,$size:t})=>e.sizes.button[t]};
  text-decoration: none;
  ${To}

  &:hover {
    ${Ao}
  }

  &:active {
    ${Io}
  }

  &[aria-disabled='true'] {
    ${Mo}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,Vo=c.forwardRef(({children:e,description:t,label:o,defaultOpen:r,open:n,onOpenChange:s,delayDuration:i=500,disableHoverableContent:l,...d},u)=>!o&&!t?e:a.jsxs(C0,{defaultOpen:r,open:n,onOpenChange:s,delayDuration:i,disableHoverableContent:l,children:[a.jsx(j0,{asChild:!0,children:e}),a.jsx(y0,{children:a.jsx(g2,{ref:u,sideOffset:8,...d,children:a.jsx(B,{variant:"pi",fontWeight:"bold",children:o||t})})})]})),g2=p(S0)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${oe.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,ze=he(({label:e,background:t,children:o,disabled:r=!1,onClick:n,size:s="S",variant:i="tertiary",withTooltip:l=!0,type:d="button",...u},h)=>{const g=x=>{!r&&n&&n(x)},f=a.jsx(Je,{"aria-disabled":r,background:r?"neutral150":t,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...u,ref:h,$size:s,onClick:g,$variant:i,type:d,children:a.jsx(Pe,{label:e,children:o})});return l?a.jsx(Vo,{label:e,children:f}):f}),Je=p(A)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"XS":return E`
          padding-block: 0.2rem;
          padding-inline: 0.2rem;
        `;case"S":return E`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return E`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return E`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${To}
  ${e=>e.$variant==="tertiary"?E`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${Ao}
    ${e=>e.$variant==="tertiary"?E`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${Io}
  }

  &[aria-disabled='true'] {
    ${Mo}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;p(A)`
  & ${Je}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${Je}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Je} {
    border-radius: 0;

    & + ${Je} {
      border-left: none;
    }
  }
`;const m2=he(({children:e,href:t,disabled:o=!1,startIcon:r,endIcon:n,isExternal:s=!1,color:i="primary600",activeColor:l="primary700",...d},u)=>a.jsxs(x2,{ref:u,href:t,disabled:o,isExternal:s,$activeColor:l,$color:i,...d,children:[r,a.jsx(B,{textColor:o?"neutral600":i,children:e}),n,t&&!n&&s&&a.jsx(ri,{fill:i})]})),x2=p(rt)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:e,$color:t,theme:o})=>e?o.colors.neutral600:o.colors[t||"primary600"]};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:e,$color:t})=>e.colors[t||"primary600"]};
    }

    svg path {
      fill: ${({theme:e,$color:t})=>e.colors[t||"primary600"]};
    }
  }

  &:active {
    color: ${({theme:e,$activeColor:t})=>e.colors[t||"primary700"]};
  }

  ${bt};
`,w2=e=>{switch(e){case"danger":return"danger100";default:return"primary100"}},v2=(e,t)=>{switch(e){case"danger":return"danger700";default:return"neutral800"}},Tt=(e,t)=>{switch(e){case"danger":return t?"danger500":"danger700";default:return t?"neutral300":"neutral500"}},b2=a1,p2=c.forwardRef(({label:e,endIcon:t=a.jsx(He,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:o=qt,icon:r,...n},s)=>{const i={...n,ref:s,type:"button"};return a.jsx(Pr,{asChild:!0,disabled:i.disabled,children:o===ze?a.jsx(ze,{label:e,variant:"tertiary",...i,children:r}):a.jsx(qt,{endIcon:t,variant:"ghost",...i})})}),$2=c.forwardRef(({children:e,intersectionId:t,onCloseAutoFocus:o,popoverPlacement:r="bottom-start",...n},s)=>{const[i,l]=r.split("-");return a.jsx(M0,{children:a.jsx(C2,{align:l,side:i,loop:!0,onCloseAutoFocus:o,asChild:!0,children:a.jsxs(Eo,{ref:s,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...n,children:[e,a.jsx(I,{id:t,width:"100%",height:"1px"})]})})})}),Eo=p(A)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${e=>e.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,C2=p(e1)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${oe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${oe.slideDownIn};
      }
    }
  }
`,Lo=({theme:e,$variant:t})=>E`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[data-highlighted] {
    background-color: ${e.colors[w2(t)]};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }

  color: ${e.colors[v2(t)]};
`,j2=p(A)`
  ${({theme:e,$variant:t})=>Lo({theme:e,$variant:t})}
`;p(m2)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>ut(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;

    > svg {
      path {
        fill: ${({theme:e,$variant:t})=>e.colors[Tt(t,!1)]};
      }
    }
  }
  > svg {
    path {
      fill: ${({theme:e,$variant:t})=>e.colors[Tt(t,!1)]};
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;

    > svg {
      path {
        fill: ${({theme:e,$variant:t})=>e.colors[Tt(t,!0)]};
      }
    }
  }

  ${({theme:e,$variant:t})=>Lo({theme:e,$variant:t})}
`;const y2=p(I)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:e})=>e.spaces[1]} -${({theme:e})=>e.spaces[1]};
  width: calc(100% + ${({theme:e})=>e.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;c.forwardRef((e,t)=>a.jsx(t1,{...e,asChild:!0,children:a.jsx(y2,{height:"1px",shrink:0,background:"neutral150",ref:t})}));c.forwardRef((e,t)=>a.jsx(n1,{asChild:!0,children:a.jsx(S2,{ref:t,variant:"sigma",textColor:"neutral600",...e})}));const S2=p(B)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;c.forwardRef(({disabled:e=!1,...t},o)=>a.jsx(o1,{asChild:!0,disabled:e,children:a.jsxs(R2,{ref:o,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[a.jsx(B,{children:t.children}),a.jsx(Sn,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const R2=p(j2)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;c.forwardRef((e,t)=>a.jsx(M0,{children:a.jsx(r1,{sideOffset:8,asChild:!0,children:a.jsx(Eo,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const M2=b2,A2=p2,I2=$2,T2=c.forwardRef(({children:e,onOpen:t,onClose:o,popoverPlacement:r,onReachEnd:n,...s},i)=>{const l=c.useRef(null),d=fe(i,l),u=c.useRef(null),[h,g]=c.useState(!1),f=C=>{n&&n(C)},x=C=>{C&&typeof t=="function"?t():!C&&typeof o=="function"&&o(),g(C)},w=$e(),b=`intersection-${Fe(w)}`;return at(u,f,{selectorToWatch:`#${b}`,skipWhen:!h}),a.jsxs(M2,{onOpenChange:x,children:[a.jsx(A2,{ref:d,...s,children:s.label}),a.jsx(I2,{ref:u,intersectionId:b,popoverPlacement:r,children:e})]})}),V2=p(T2)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,E2=c.forwardRef(({children:e,...t},o)=>a.jsx(V2,{ref:o,endIcon:null,size:"S",...t,children:e}));E2.displayName="CrumbSimpleMenu";const Do=c.createContext({id:""}),L2=()=>c.useContext(Do);c.forwardRef(({id:e,...t},o)=>{const r=$e(e),n=c.useMemo(()=>({id:r}),[r]);return a.jsx(Do.Provider,{value:n,children:a.jsx(I,{ref:o,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${r}-title`,...t})})});const D2=c.forwardRef(({position:e,...t},o)=>a.jsx(H2,{ref:o,$position:e,...t,direction:"row",gap:2})),H2=p(A)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:t})=>{if(e==="end")return t.spaces[3]}};
  left: ${({$position:e,theme:t})=>{if(e==="start")return t.spaces[3]}};
`;p.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;p.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;p.div`
  margin-left: auto;
  flex-shrink: 0;
`;p(Ql)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const z2=({fill:e,...t})=>{const{colors:o}=m();return a.jsx(I,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?o[e]:void 0,...t,children:a.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},Zn=c.forwardRef(({defaultChecked:e,checked:t,onCheckedChange:o,...r},n)=>{const s=c.useRef(null),[i,l]=Ce({defaultProp:e,prop:t,onChange:o}),d=fe(s,n);return a.jsx(B2,{ref:d,checked:i,onCheckedChange:l,...r,children:a.jsxs(k2,{forceMount:!0,children:[i===!0?a.jsx(z2,{width:"1.6rem",fill:"neutral0"}):null,i==="indeterminate"?a.jsx(ac,{fill:"neutral0"}):null]})})}),B2=p(Yr)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${e=>e.theme.borderRadius};
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked']:not([data-disabled]),
  &[data-state='indeterminate']:not([data-disabled]) {
    border: 1px solid ${e=>e.theme.colors.primary600};
    background-color: ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,k2=p(Zr)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Tn=c.forwardRef(({children:e,...t},o)=>{const r=$e(t.id);return e?a.jsxs(A,{gap:2,children:[a.jsx(Zn,{id:r,...t}),a.jsx(B,{tag:"label",textColor:"neutral800",htmlFor:r,children:e})]}):a.jsx(Zn,{ref:o,...t})});c.forwardRef((e,t)=>{const{id:o}=L2();return a.jsx(D2,{position:"start",children:a.jsx(Tn,{"aria-labelledby":`${o}-title`,...e,ref:t})})});p(I)`
  word-break: break-all;
`;p(A)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const de={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},O2=p(I)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,N2=p(A)`
  grid-area: slides;
`,Xn=p(I)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,_2=c.forwardRef(({actions:e,children:t,label:o,nextLabel:r,onNext:n,onPrevious:s,previousLabel:i,secondaryLabel:l,selectedSlide:d,...u},h)=>{const g=c.useRef(null),f=c.useRef(null),x=c.Children.map(t,(b,C)=>c.cloneElement(b,{selected:C===d})),w=b=>{switch(b.key){case de.RIGHT:{b.preventDefault(),f?.current&&f.current.focus(),n&&n();break}case de.LEFT:{b.preventDefault(),g?.current&&g.current.focus(),s&&s();break}}};return a.jsx(I,{ref:h,...u,onKeyDown:w,children:a.jsxs(I,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[a.jsxs(O2,{tag:"section","aria-roledescription":"carousel","aria-label":o,display:"grid",position:"relative",children:[x&&x.length>1&&a.jsxs(a.Fragment,{children:[a.jsx(Xn,{tag:"button",onClick:s,$area:"startAction",ref:g,type:"button",children:a.jsx(Pe,{label:i,children:a.jsx(go,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),a.jsx(Xn,{tag:"button",onClick:n,$area:"endAction",ref:f,type:"button",children:a.jsx(Pe,{label:r,children:a.jsx(Sn,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),a.jsx(N2,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:x}),e]}),l&&a.jsx(I,{paddingTop:2,paddingLeft:4,paddingRight:4,children:a.jsx(Vo,{label:l,children:a.jsx(A,{justifyContent:"center",children:a.jsx(B,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:l})})})})]})})}),Te=(e="&")=>({theme:t,$hasError:o=!1})=>E`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${o?t.colors.danger600:t.colors.primary600};
      box-shadow: ${o?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,[F2,ge]=Ge("Field",{}),Be=c.forwardRef(({children:e,name:t,error:o=!1,hint:r,id:n,required:s=!1,...i},l)=>{const d=$e(n),[u,h]=c.useState();return a.jsx(F2,{name:t,id:d,error:o,hint:r,required:s,labelNode:u,setLabelNode:h,children:a.jsx(A,{direction:"column",alignItems:"stretch",gap:1,ref:l,...i,children:e})})}),Vn=c.forwardRef(({children:e,action:t,...o},r)=>{const{id:n,required:s,setLabelNode:i}=ge("Label"),l=fe(r,i);return e?a.jsxs(W2,{ref:l,variant:"pi",textColor:"neutral800",fontWeight:"bold",...o,id:`${n}-label`,htmlFor:n,tag:"label",ellipsis:!0,children:[e,s&&a.jsx(B,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),t&&a.jsx(U2,{marginLeft:1,children:t})]}):null}),W2=p(B)`
  display: flex;
`,U2=p(A)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Ct=c.forwardRef(({endAction:e,startAction:t,disabled:o=!1,onChange:r,hasError:n,required:s,className:i,size:l="M",...d},u)=>{const{id:h,error:g,hint:f,name:x,required:w}=ge("Input");let b;g?b=`${h}-error`:f&&(b=`${h}-hint`);const C=!!g,$=c.useRef(null),v=c.useRef(null),R=fe(v,u),y=M=>{!o&&r&&r(M)};return c.useLayoutEffect(()=>{if($.current&&v.current){const M=$.current.offsetWidth,j=v.current;if(j){const S=M+8+16;j.style.paddingRight=`${S}px`}}},[e]),a.jsxs(K2,{gap:2,justifyContent:"space-between",$hasError:C||n,$disabled:o,$size:l,$hasLeftAction:!!t,$hasRightAction:!!e,className:i,children:[t,a.jsx(q2,{id:h,name:x,ref:R,$size:l,"aria-describedby":b,"aria-invalid":C||n,"aria-disabled":o,disabled:o,"data-disabled":o?"":void 0,onChange:y,"aria-required":w||s,$hasLeftAction:!!t,$hasRightAction:!!e,...d}),e&&a.jsx(G2,{ref:$,children:e})]})}),q2=p.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  line-height: 2.2rem;
  display: block;
  width: 100%;
  background: inherit;

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${e=>{switch(e.$size){case"S":return E`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return E`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,G2=p(A)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,K2=p(A)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:t})=>e?t.spaces[4]:0};
  position: relative;

  ${Te()}
  ${({theme:e,$disabled:t})=>t?E`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,Ho=()=>{const{id:e,hint:t,error:o}=ge("Hint");return!t||o?null:a.jsx(B,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:t})},zo=()=>{const{id:e,error:t}=ge("Error");return!t||typeof t!="string"?null:a.jsx(B,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:t})},Y2=c.forwardRef(({label:e,children:t,...o},r)=>a.jsx(Z2,{justifyContent:"unset",background:"transparent",borderStyle:"none",...o,type:"button",tag:"button",ref:r,children:a.jsx(Pe,{label:e,children:t})})),Z2=p(A)`
  font-size: 1.6rem;
  padding: 0;
`,du=Object.freeze(Object.defineProperty({__proto__:null,Action:Y2,Error:zo,Hint:Ho,Input:Ct,Label:Vn,Root:Be,useField:ge},Symbol.toStringTag,{value:"Module"}));c.forwardRef(({actions:e,children:t,error:o,hint:r,label:n,labelAction:s,nextLabel:i,onNext:l,onPrevious:d,previousLabel:u,required:h,secondaryLabel:g,selectedSlide:f,id:x,...w},b)=>{const C=$e(x);return a.jsx(Be,{hint:r,error:o,id:C,required:h,children:a.jsxs(A,{direction:"column",alignItems:"stretch",gap:1,children:[n&&a.jsx(Vn,{action:s,children:n}),a.jsx(_2,{ref:b,actions:e,label:n,nextLabel:i,onNext:l,onPrevious:d,previousLabel:u,secondaryLabel:g,selectedSlide:f,id:C,...w,children:t}),a.jsx(Ho,{}),a.jsx(zo,{})]})})});p(I)`
  ${xo}
`;p(A)`
  display: ${({$selected:e})=>e?"flex":"none"};
`;const jt=c.forwardRef(({children:e,viewportRef:t,...o},r)=>a.jsxs(X2,{ref:r,...o,children:[a.jsx(Q2,{ref:t,children:e}),a.jsx(Qn,{orientation:"vertical",children:a.jsx(Jn,{})}),a.jsx(Qn,{orientation:"horizontal",children:a.jsx(Jn,{})})]})),X2=p(Or)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,Q2=p(Nr)`
  min-width: 100%;
`,Qn=p(_r)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
    margin: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
    margin: 0.4rem;
  }
`,Jn=p(Fr)`
  position: relative;
  flex: 1;
  background-color: ${e=>e.theme.colors.neutral150};
  border-radius: 0.4rem;

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,J2="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",P2=c.forwardRef(({children:e,small:t=!1,...o},r)=>a.jsxs("div",{role:"alert","aria-live":"assertive",ref:r,...o,children:[a.jsx(Ke,{children:e}),a.jsx(td,{src:J2,"aria-hidden":!0,$small:t})]})),ed=le`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,td=p.img`
  animation: ${ed} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`;function Ne(e,t,o){let r=o.initialDeps??[],n;function s(){var i,l,d,u;let h;o.key&&((i=o.debug)!=null&&i.call(o))&&(h=Date.now());const g=e();if(!(g.length!==r.length||g.some((w,b)=>r[b]!==w)))return n;r=g;let x;if(o.key&&((l=o.debug)!=null&&l.call(o))&&(x=Date.now()),n=t(...g),o.key&&((d=o.debug)!=null&&d.call(o))){const w=Math.round((Date.now()-h)*100)/100,b=Math.round((Date.now()-x)*100)/100,C=b/16,$=(v,R)=>{for(v=String(v);v.length<R;)v=" "+v;return v};console.info(`%c⏱ ${$(b,5)} /${$(w,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*C,120))}deg 100% 31%);`,o?.key)}return(u=o?.onChange)==null||u.call(o,n),n}return s.updateDeps=i=>{r=i},s}function Pn(e,t){if(e===void 0)throw new Error("Unexpected undefined");return e}const nd=(e,t)=>Math.abs(e-t)<1.01,od=(e,t,o)=>{let r;return function(...n){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,n),o)}},e0=e=>{const{offsetWidth:t,offsetHeight:o}=e;return{width:t,height:o}},rd=e=>e,ad=e=>{const t=Math.max(e.startIndex-e.overscan,0),o=Math.min(e.endIndex+e.overscan,e.count-1),r=[];for(let n=t;n<=o;n++)r.push(n);return r},sd=(e,t)=>{const o=e.scrollElement;if(!o)return;const r=e.targetWindow;if(!r)return;const n=i=>{const{width:l,height:d}=i;t({width:Math.round(l),height:Math.round(d)})};if(n(e0(o)),!r.ResizeObserver)return()=>{};const s=new r.ResizeObserver(i=>{const l=()=>{const d=i[0];if(d?.borderBoxSize){const u=d.borderBoxSize[0];if(u){n({width:u.inlineSize,height:u.blockSize});return}}n(e0(o))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(l):l()});return s.observe(o,{box:"border-box"}),()=>{s.unobserve(o)}},t0={passive:!0},n0=typeof window>"u"?!0:"onscrollend"in window,id=(e,t)=>{const o=e.scrollElement;if(!o)return;const r=e.targetWindow;if(!r)return;let n=0;const s=e.options.useScrollendEvent&&n0?()=>{}:od(r,()=>{t(n,!1)},e.options.isScrollingResetDelay),i=h=>()=>{const{horizontal:g,isRtl:f}=e.options;n=g?o.scrollLeft*(f&&-1||1):o.scrollTop,s(),t(n,h)},l=i(!0),d=i(!1);d(),o.addEventListener("scroll",l,t0);const u=e.options.useScrollendEvent&&n0;return u&&o.addEventListener("scrollend",d,t0),()=>{o.removeEventListener("scroll",l),u&&o.removeEventListener("scrollend",d)}},cd=(e,t,o)=>{if(t?.borderBoxSize){const r=t.borderBoxSize[0];if(r)return Math.round(r[o.options.horizontal?"inlineSize":"blockSize"])}return e[o.options.horizontal?"offsetWidth":"offsetHeight"]},ld=(e,{adjustments:t=0,behavior:o},r)=>{var n,s;const i=e+t;(s=(n=r.scrollElement)==null?void 0:n.scrollTo)==null||s.call(n,{[r.options.horizontal?"left":"top"]:i,behavior:o})};class dd{constructor(t){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let o=null;const r=()=>o||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:o=new this.targetWindow.ResizeObserver(n=>{n.forEach(s=>{const i=()=>{this._measureElement(s.target,s)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(i):i()})}));return{disconnect:()=>{var n;(n=r())==null||n.disconnect(),o=null},observe:n=>{var s;return(s=r())==null?void 0:s.observe(n,{box:"border-box"})},unobserve:n=>{var s;return(s=r())==null?void 0:s.unobserve(n)}}})(),this.range=null,this.setOptions=o=>{Object.entries(o).forEach(([r,n])=>{typeof n>"u"&&delete o[r]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:rd,rangeExtractor:ad,onChange:()=>{},measureElement:cd,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...o}},this.notify=o=>{var r,n;(n=(r=this.options).onChange)==null||n.call(r,this,o)},this.maybeNotify=Ne(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),o=>{this.notify(o)},{key:"maybeNotify",debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(o=>o()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var o;const r=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==r){if(this.cleanup(),!r){this.maybeNotify();return}this.scrollElement=r,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((o=this.scrollElement)==null?void 0:o.window)??null,this.elementsCache.forEach(n=>{this.observer.observe(n)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,n=>{this.scrollRect=n,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(n,s)=>{this.scrollAdjustments=0,this.scrollDirection=s?this.getScrollOffset()<n?"forward":"backward":null,this.scrollOffset=n,this.isScrolling=s,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(o,r)=>{const n=new Map,s=new Map;for(let i=r-1;i>=0;i--){const l=o[i];if(n.has(l.lane))continue;const d=s.get(l.lane);if(d==null||l.end>d.end?s.set(l.lane,l):l.end<d.end&&n.set(l.lane,!0),n.size===this.options.lanes)break}return s.size===this.options.lanes?Array.from(s.values()).sort((i,l)=>i.end===l.end?i.index-l.index:i.end-l.end)[0]:void 0},this.getMeasurementOptions=Ne(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(o,r,n,s,i)=>(this.pendingMeasuredCacheIndexes=[],{count:o,paddingStart:r,scrollMargin:n,getItemKey:s,enabled:i}),{key:!1}),this.getMeasurements=Ne(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:o,paddingStart:r,scrollMargin:n,getItemKey:s,enabled:i},l)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(h=>{this.itemSizeCache.set(h.key,h.size)}));const d=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const u=this.measurementsCache.slice(0,d);for(let h=d;h<o;h++){const g=s(h),f=this.options.lanes===1?u[h-1]:this.getFurthestMeasurement(u,h),x=f?f.end+this.options.gap:r+n,w=l.get(g),b=typeof w=="number"?w:this.options.estimateSize(h),C=x+b,$=f?f.lane:h%this.options.lanes;u[h]={index:h,start:x,size:b,end:C,key:g,lane:$}}return this.measurementsCache=u,u},{key:"getMeasurements",debug:()=>this.options.debug}),this.calculateRange=Ne(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(o,r,n,s)=>this.range=o.length>0&&r>0?hd({measurements:o,outerSize:r,scrollOffset:n,lanes:s}):null,{key:"calculateRange",debug:()=>this.options.debug}),this.getVirtualIndexes=Ne(()=>{let o=null,r=null;const n=this.calculateRange();return n&&(o=n.startIndex,r=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,o,r]),[this.options.rangeExtractor,this.options.overscan,this.options.count,o,r]},(o,r,n,s,i)=>s===null||i===null?[]:o({startIndex:s,endIndex:i,overscan:r,count:n}),{key:"getVirtualIndexes",debug:()=>this.options.debug}),this.indexFromElement=o=>{const r=this.options.indexAttribute,n=o.getAttribute(r);return n?parseInt(n,10):(console.warn(`Missing attribute name '${r}={index}' on measured element.`),-1)},this._measureElement=(o,r)=>{const n=this.indexFromElement(o),s=this.measurementsCache[n];if(!s)return;const i=s.key,l=this.elementsCache.get(i);l!==o&&(l&&this.observer.unobserve(l),this.observer.observe(o),this.elementsCache.set(i,o)),o.isConnected&&this.resizeItem(n,this.options.measureElement(o,r,this))},this.resizeItem=(o,r)=>{const n=this.measurementsCache[o];if(!n)return;const s=this.itemSizeCache.get(n.key)??n.size,i=r-s;i!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(n,i,this):n.start<this.getScrollOffset()+this.scrollAdjustments)&&(this.options.debug&&console.info("correction",i),this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:void 0})),this.pendingMeasuredCacheIndexes.push(n.index),this.itemSizeCache=new Map(this.itemSizeCache.set(n.key,r)),this.notify(!1))},this.measureElement=o=>{if(!o){this.elementsCache.forEach((r,n)=>{r.isConnected||(this.observer.unobserve(r),this.elementsCache.delete(n))});return}this._measureElement(o,void 0)},this.getVirtualItems=Ne(()=>[this.getVirtualIndexes(),this.getMeasurements()],(o,r)=>{const n=[];for(let s=0,i=o.length;s<i;s++){const l=o[s],d=r[l];n.push(d)}return n},{key:"getVirtualItems",debug:()=>this.options.debug}),this.getVirtualItemForOffset=o=>{const r=this.getMeasurements();if(r.length!==0)return Pn(r[Bo(0,r.length-1,n=>Pn(r[n]).start,o)])},this.getOffsetForAlignment=(o,r,n=0)=>{const s=this.getSize(),i=this.getScrollOffset();r==="auto"&&(r=o>=i+s?"end":"start"),r==="center"?o+=(n-s)/2:r==="end"&&(o-=s);const l=this.getTotalSize()+this.options.scrollMargin-s;return Math.max(Math.min(l,o),0)},this.getOffsetForIndex=(o,r="auto")=>{o=Math.max(0,Math.min(o,this.options.count-1));const n=this.measurementsCache[o];if(!n)return;const s=this.getSize(),i=this.getScrollOffset();if(r==="auto")if(n.end>=i+s-this.options.scrollPaddingEnd)r="end";else if(n.start<=i+this.options.scrollPaddingStart)r="start";else return[i,r];const l=r==="end"?n.end+this.options.scrollPaddingEnd:n.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(l,r,n.size),r]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(o,{align:r="start",behavior:n}={})=>{n==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(o,r),{adjustments:void 0,behavior:n})},this.scrollToIndex=(o,{align:r="auto",behavior:n}={})=>{n==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),o=Math.max(0,Math.min(o,this.options.count-1));let s=0;const i=10,l=u=>{if(!this.targetWindow)return;const h=this.getOffsetForIndex(o,u);if(!h){console.warn("Failed to get offset for index:",o);return}const[g,f]=h;this._scrollToOffset(g,{adjustments:void 0,behavior:n}),this.targetWindow.requestAnimationFrame(()=>{const x=this.getScrollOffset(),w=this.getOffsetForIndex(o,f);if(!w){console.warn("Failed to get offset for index:",o);return}nd(w[0],x)||d(f)})},d=u=>{this.targetWindow&&(s++,s<i?(this.options.debug&&console.info("Schedule retry",s,i),this.targetWindow.requestAnimationFrame(()=>l(u))):console.warn(`Failed to scroll to index ${o} after ${i} attempts.`))};l(r)},this.scrollBy=(o,{behavior:r}={})=>{r==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+o,{adjustments:void 0,behavior:r})},this.getTotalSize=()=>{var o;const r=this.getMeasurements();let n;if(r.length===0)n=this.options.paddingStart;else if(this.options.lanes===1)n=((o=r[r.length-1])==null?void 0:o.end)??0;else{const s=Array(this.options.lanes).fill(null);let i=r.length-1;for(;i>=0&&s.some(l=>l===null);){const l=r[i];s[l.lane]===null&&(s[l.lane]=l.end),i--}n=Math.max(...s.filter(l=>l!==null))}return Math.max(n-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(o,{adjustments:r,behavior:n})=>{this.options.scrollToFn(o,{behavior:n,adjustments:r},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(t)}}const Bo=(e,t,o,r)=>{for(;e<=t;){const n=(e+t)/2|0,s=o(n);if(s<r)e=n+1;else if(s>r)t=n-1;else return n}return e>0?e-1:0};function hd({measurements:e,outerSize:t,scrollOffset:o,lanes:r}){const n=e.length-1,s=d=>e[d].start;if(e.length<=r)return{startIndex:0,endIndex:n};let i=Bo(0,n,s,o),l=i;if(r===1)for(;l<n&&e[l].end<o+t;)l++;else if(r>1){const d=Array(r).fill(0);for(;l<n&&d.some(h=>h<o+t);){const h=e[l];d[h.lane]=h.end,l++}const u=Array(r).fill(o+t);for(;i>=0&&u.some(h=>h>=o);){const h=e[i];u[h.lane]=h.start,i--}i=Math.max(0,i-i%r),l=Math.min(n,l+(r-1-l%r))}return{startIndex:i,endIndex:l}}const o0=typeof document<"u"?c.useLayoutEffect:c.useEffect;function ud(e){const t=c.useReducer(()=>({}),{})[1],o={...e,onChange:(n,s)=>{var i;s?We.flushSync(t):t(),(i=e.onChange)==null||i.call(e,n,s)}},[r]=c.useState(()=>new dd(o));return r.setOptions(o),o0(()=>r._didMount(),[]),o0(()=>r._willUpdate()),r}function fd(e){return ud({observeElementRect:sd,observeElementOffset:id,scrollToFn:ld,...e})}const gd=he((e,t)=>{const{gap:o=0,gridCols:r=12,...n}=e;return a.jsx(md,{ref:t,$gap:o,$gridCols:r,...n})}),md=p(I)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:t})=>vt({gap:t},e)}
`,xd=he(({col:e,s:t,xs:o,m:r,...n},s)=>a.jsx(wd,{ref:s,$col:e,$s:t,$xs:o,$m:r,...n})),wd=p(A)`
  grid-column: span ${({$xs:e,$col:t})=>e??t??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:t,$col:o})=>e??t??o??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:t,$xs:o,$col:r})=>e??t??o??r??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:t,$s:o,$xs:r})=>e??t??o??r??12};
  }
`,hu=Object.freeze(Object.defineProperty({__proto__:null,Item:xd,Root:gd},Symbol.toStringTag,{value:"Module"})),vd=({children:e,estimatedItemSize:t=40,overscan:o=10,itemCount:r,renderItem:n})=>{const s=c.useRef(null),[i,l]=c.useState(!1),d=c.useRef(!0);c.useEffect(()=>(d.current=!0,typeof c.startTransition=="function"&&c.startTransition(()=>{d.current&&l(!0)}),()=>{d.current=!1}),[]);const u=c.useMemo(()=>n&&r!==void 0?[]:c.Children.toArray(e),[e,n,r]),h=r??u.length,g=fd({count:h,getScrollElement:()=>s.current??null,estimateSize:c.useCallback(()=>t,[t]),overscan:o,scrollMargin:0,measureElement:void 0,lanes:1}),f=i&&d.current?g.getVirtualItems():[];return i?a.jsx(I,{ref:s,height:`${g.getTotalSize()>0?g.getTotalSize():0}px`,width:"100%",position:"relative","data-testid":"virtualized-list",style:{willChange:"transform"},children:f.map(x=>{const w=n?n(x.index):u[x.index];return a.jsx(I,{"data-index":x.index,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translate3d(0, ${x.start}px, 0)`},children:w},x.key)})}):a.jsx(I,{ref:s,height:"40px",width:"100%",position:"relative"})},bd=c.forwardRef(({allowCustomValue:e,autocomplete:t,children:o,className:r,clearLabel:n="Clear",creatable:s=!1,creatableDisabled:i=!1,creatableStartIcon:l,createMessage:d=_=>`Create "${_}"`,defaultFilterValue:u,defaultTextValue:h,defaultOpen:g=!1,open:f,onOpenChange:x,disabled:w=!1,hasError:b,id:C,filterValue:$,hasMoreItems:v=!1,isPrintableCharacter:R,loading:y=!1,loadingMessage:M="Loading content...",name:j,noOptionsMessage:S=()=>"No results found",onChange:V,onClear:z,onCreateOption:L,onFilterValueChange:q,onInputChange:D,onTextValueChange:k,onLoadMore:O,placeholder:Y="Select or enter a value",required:P=!1,size:H="M",startIcon:N,textValue:G,value:J,...Z},ie)=>{const[_,se]=Ce({prop:f,defaultProp:g,onChange:x}),[ne,ue]=Ce({prop:G,defaultProp:e&&!h?J:h,onChange:k}),[T,F]=Ce({prop:$,defaultProp:u,onChange:q}),ee=c.useRef(null),W=c.useRef(null),U=fe(W,ie),K=c.useRef(null),ce=me=>{z&&!w&&(ue(""),F(""),z(me),W.current.focus())},X=me=>{se(me)},Q=me=>{ue(me)},we=me=>{F(me)},ye=me=>{D&&D(me)},lr=me=>{V&&V(me)},dr=me=>{O&&v&&!y&&O(me)},Bn=()=>{L&&ne&&s!=="visible"?L(ne):L&&s==="visible"&&(L(),se(!1))},hr=$e(),kn=`intersection-${Fe(hr)}`;at(ee,dr,{selectorToWatch:`#${kn}`,skipWhen:!_});const{error:St,...lt}=ge("Combobox"),ur=!!St||b,Rt=lt.id??C,fr=lt.name??j,gr=lt.required||P,On=c.Children.toArray(o).filter(Boolean).length,mr=!!!(ne&&ne!==""||T&&T!=="")&&On>100;let Mt;return St?Mt=`${Rt}-error`:lt.hint&&(Mt=`${Rt}-hint`),a.jsxs(be.Root,{autocomplete:t||(s===!0?"list":"both"),onOpenChange:X,open:_,onTextValueChange:Q,textValue:ne,allowCustomValue:!!s||e,disabled:w,required:gr,value:J,onValueChange:lr,filterValue:T,onFilterValueChange:we,isPrintableCharacter:R,visible:s==="visible",children:[a.jsxs(pd,{$hasError:ur,$size:H,className:r,children:[a.jsxs(A,{flex:"1",tag:"span",gap:3,children:[N?a.jsx(A,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:N}):null,a.jsx($d,{placeholder:Y,id:Rt,"aria-invalid":!!St,onChange:ye,ref:U,name:fr,"aria-describedby":Mt,...Z})]}),a.jsxs(A,{tag:"span",gap:3,children:[ne&&z?a.jsx(ze,{size:"XS",variant:"ghost",onClick:ce,"aria-disabled":w,"aria-label":n,label:n,ref:K,children:a.jsx(qe,{})}):null,a.jsx(Cd,{children:a.jsx(He,{fill:"neutral500"})})]})]}),a.jsx(be.Portal,{children:a.jsx(jd,{sideOffset:4,children:a.jsxs(be.Viewport,{ref:ee,children:[a.jsxs(Sd,{children:[mr?a.jsx(vd,{itemCount:On,children:o}):o,s!==!0&&!y?a.jsx(be.NoValueFound,{asChild:!0,children:a.jsx(Gt,{$hasHover:!1,children:a.jsx(B,{children:S(ne??"")})})}):null,y?a.jsx(A,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:a.jsx(P2,{small:!0,children:M})}):null,a.jsx(I,{id:kn,width:"100%",height:"1px"})]}),s?a.jsx(yd,{onPointerUp:Bn,onClick:Bn,disabled:i,asChild:!0,children:a.jsx(Gt,{children:a.jsxs(A,{gap:2,children:[l&&a.jsx(I,{tag:"span","aria-hidden":!0,display:"inline-flex",children:l}),a.jsx(B,{children:d(ne??"")})]})})}):null]})})})]})}),pd=p(be.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return E`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[1]};
        `;default:return E`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[2]};
        `}}}

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Te()({theme:e,$hasError:t})};
`,$d=p(be.TextInput)`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Cd=p(be.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,jd=p(be.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:e})=>`2px solid ${e.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${oe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${oe.slideDownIn};
      }
    }
  }
`,yd=p(be.CreateItem)`
  && {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: ${({theme:e})=>e.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background: ${({theme:e})=>e.colors.neutral0};
  }
  &&[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    cursor: not-allowed;
  }
  &&[data-disabled] svg {
    fill: ${({theme:e})=>e.colors.neutral300};
  }
  && > div {
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-radius: ${({theme:e})=>e.borderRadius};
  }
  &&[data-disabled] > div {
    background-color: inherit;
  }
`,Sd=p(jt)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Rd=c.forwardRef(({children:e,value:t,disabled:o,textValue:r,...n},s)=>a.jsx(be.ComboboxItem,{asChild:!0,value:t,disabled:o,textValue:r,children:a.jsx(Gt,{ref:s,...n,children:a.jsx(be.ItemText,{asChild:!0,children:a.jsx(B,{children:e})})})})),Gt=p.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:t=!0})=>t?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,ko=(e,t)=>`${e}${Math.floor(t*255).toString(16).padStart(2,"0")}`,Md=jr,Ad=c.forwardRef((e,t)=>a.jsx(Ar,{...e,asChild:!0,ref:t})),Id=c.forwardRef((e,t)=>a.jsx(Vr,{children:a.jsx(Td,{children:a.jsx(Vd,{ref:t,...e})})})),Td=p(zr)`
  background: ${e=>ko(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${oe.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Vd=p(Br)`
  max-width: 42rem;
  height: min-content;
  width: calc(100% - ${({theme:e})=>e.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${oe.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${oe.modalPopOut};
    }
  }
`,Ed=c.forwardRef(({children:e,...t},o)=>a.jsx(Ir,{asChild:!0,children:a.jsx(Ld,{tag:"h2",variant:"beta",ref:o,padding:6,fontWeight:"bold",...t,children:e})})),Ld=p(B)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,Dd=c.forwardRef(({children:e,icon:t,...o},r)=>a.jsx(A,{ref:r,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...o,children:typeof e=="string"?a.jsxs(a.Fragment,{children:[t?c.cloneElement(t,{width:24,height:24}):null,a.jsx(Oo,{children:e})]}):e})),Oo=c.forwardRef((e,t)=>a.jsx(Tr,{asChild:!0,children:a.jsx(B,{ref:t,variant:"omega",...e,tag:"p"})})),Hd=c.forwardRef((e,t)=>a.jsx(zd,{ref:t,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"})),zd=p(A)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,Bd=c.forwardRef((e,t)=>a.jsx(Er,{...e,asChild:!0,ref:t})),kd=c.forwardRef((e,t)=>a.jsx(Lr,{...e,asChild:!0,ref:t})),uu=Object.freeze(Object.defineProperty({__proto__:null,Action:kd,Body:Dd,Cancel:Bd,Content:Id,Description:Oo,Footer:Hd,Header:Ed,Root:Md,Trigger:Ad},Symbol.toStringTag,{value:"Module"}));function Re(e,t){const o=c.useRef(null);return t&&o.current&&Od(t,o.current)&&(t=o.current),o.current=t??null,c.useMemo(()=>new N1(e,t),[e,t])}function Od(e,t){if(e===t)return!0;const o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(const n of o)if(t[n]!==e[n])return!1;return!0}const En={Log:"live-region-log",Status:"live-region-status",Alert:"live-region-alert"},r0=e=>{const t=document.querySelector(`#${En.Log}`);t&&(t.innerText=e)},a0=e=>{const t=document.querySelector(`#${En.Status}`);t&&(t.innerText=e)},s0=e=>{const t=document.querySelector(`#${En.Alert}`);t&&(t.innerText=e)},fu=()=>(c.useEffect(()=>()=>{r0(""),s0(""),a0("")},[]),{notifyLog:r0,notifyAlert:s0,notifyStatus:a0});s1`
${E`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    /* Sets 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: ${({theme:e})=>e.colors.neutral800};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }

  button {
    border: unset;
    background: unset;
    padding: unset;
    margin: unset;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font: unset;
  }

  #root {
    isolation: isolate;
  }

  ol,
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }

  *:has(> :disabled:not(button)) {
    cursor: not-allowed !important;
  }

  [aria-disabled='true']:not(button) {
    cursor: not-allowed !important;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`}
`;const i0="en-EN",Nd=()=>typeof navigator>"u"?i0:navigator.language?navigator.language:i0,[gu,yt]=Ge("StrapiDesignSystem",{locale:Nd()}),_d=u1,No=c.forwardRef(({container:e=globalThis?.document?.body,...t},o)=>e?We.createPortal(a.jsx(I,{ref:o,...t}),e):null);No.displayName="Portal";const Fd=c.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:o,disabled:r,hasError:n,children:s,id:i,size:l="M",withTags:d,...u},h)=>{const g=c.useRef(null),f=b=>{e&&!r&&(e(b),g.current.focus())},{labelNode:x}=ge("SelectTrigger"),w=fe(g,h);return a.jsx(pe.Trigger,{asChild:!0,children:a.jsxs(Wd,{"aria-disabled":r,$hasError:n,ref:w,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:r?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":x?`${i}-label`:void 0,$size:l,$withTags:d,...u,children:[a.jsxs(A,{flex:"1",tag:"span",gap:3,children:[o&&a.jsx(A,{tag:"span","aria-hidden":!0,children:o}),s]}),a.jsxs(A,{tag:"span",gap:3,children:[e?a.jsx(ze,{size:"XS",variant:"ghost",onClick:f,"aria-disabled":r,"aria-label":t,label:t,children:a.jsx(qe,{})}):null,a.jsx(Ud,{children:a.jsx(He,{})})]})]})})}),Wd=p(A)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return E`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return E`
          padding-block: ${e.$withTags?"0.3rem":e.theme.spaces[2]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `}}}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Te()({theme:e,$hasError:t})};
`,Ud=p(pe.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,qd=c.forwardRef(({children:e,placeholder:t,...o},r)=>a.jsx(Gd,{ref:r,ellipsis:!0,...o,children:a.jsx(Kd,{placeholder:t,children:e})})),Gd=p(B)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
  min-height: 2.2rem;
`,Kd=p(pe.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,Yd=c.forwardRef((e,t)=>a.jsx(Zd,{ref:t,...e,children:a.jsx(jt,{children:e.children})})),Zd=p(pe.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${oe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${oe.slideDownIn};
      }
    }
  }
`,Xd=p(pe.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Qd=c.forwardRef((e,t)=>a.jsx(Pd,{ref:t,...e})),Jd=E`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:e})=>e.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,Pd=p(pe.Item)`
  ${Jd}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,_o=pe.Root,Fo=Fd,Wo=qd,Uo=pe.Portal,qo=Yd,Go=Xd,Ln=Qd,Ko=pe.ItemIndicator,Yo=pe.ItemText,e5=pe.Group,c0=c.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:r,hasError:n,id:s,name:i,onChange:l,onClear:d,onCloseAutoFocus:u,onReachEnd:h,placeholder:g,required:f,size:x,startIcon:w,value:b,...C},$)=>{const[v,R]=c.useState(),[y,M]=c.useState(!1),j=Z=>{M(Z)},S=Z=>{d&&d(Z),l||R("")},V=Z=>{l?l(typeof b=="number"?Number(Z):Z):R(Z)},z=c.useRef(null),L=$e(),q=`intersection-${Fe(L)}`;at(z,Z=>{h&&h(Z)},{selectorToWatch:`#${q}`,skipWhen:!y});const{error:k,required:O,...Y}=ge("SingleSelect"),P=!!k||n,H=Y.id??s,N=Y.name??i;let G;k?G=`${H}-error`:Y.hint&&(G=`${H}-hint`);const J=(typeof b<"u"&&b!==null?b.toString():v)??"";return a.jsxs(_o,{onOpenChange:j,disabled:r,required:O??f,onValueChange:V,value:J,...C,children:[a.jsx(Fo,{ref:$,id:H,name:N,startIcon:w,hasError:P,disabled:r,clearLabel:t,onClear:J&&d?S:void 0,"aria-label":C["aria-label"],"aria-describedby":G??C["aria-describedby"],size:x,children:a.jsx(Wo,{placeholder:g,textColor:J?"neutral800":"neutral600",children:J&&o?o(J):void 0})}),a.jsx(Uo,{children:a.jsx(qo,{position:"popper",sideOffset:4,onCloseAutoFocus:u,children:a.jsxs(Go,{ref:z,children:[e,a.jsx(I,{id:q,width:"100%",height:"1px"})]})})})]})}),l0=c.forwardRef(({value:e,startIcon:t,children:o,...r},n)=>a.jsxs(Ln,{ref:n,value:e.toString(),...r,children:[t&&a.jsx(A,{tag:"span","aria-hidden":!0,children:t}),a.jsx(B,{lineHeight:"20px",width:"100%",children:a.jsx(Yo,{children:o})})]})),t5=200,d0=15,[n5,Ye]=Ge("DatePicker"),o5=c.forwardRef(({calendarLabel:e,className:t,initialDate:o,locale:r,maxDate:n,minDate:s,monthSelectLabel:i="Month",onChange:l,value:d,yearSelectLabel:u="Year",hasError:h,id:g,name:f,disabled:x=!1,required:w=!1,onClear:b,clearLabel:C="Clear",size:$="M",...v},R)=>{const y=Dt(),M=yt("DatePicker"),j=r??M.locale,S=Re(j,{day:"2-digit",month:"2-digit",year:"numeric"}),[V,z]=c.useState(!1),[L,q]=c.useState(null),[D,k]=c.useState(null),[O,Y]=c.useState(null),[P,H]=c.useState(),[N,G]=Ce({defaultProp:o?Ve(o):void 0,prop:d?Ve(d):void 0,onChange(Q){l&&l(Q?.toDate(y))}}),[J,Z]=c.useMemo(()=>{const Q=o?Ve(o):Pt("UTC"),we=s?Ve(s):Q.set({day:1,month:1,year:Q.year-t5});let ye=n?Ve(n):Q.set({day:31,month:12,year:Q.year+d0});return ye.compare(we)<0&&(ye=we.set({day:31,month:12,year:we.year+d0})),[we,ye]},[s,n,o]),[ie,_]=c.useState(r5({currentValue:N,minDate:J,maxDate:Z})),se=$e(),ne=c.useRef(null),ue=Q=>{b&&!x&&(H(""),G(void 0),b(Q),D?.focus())},T=c.useCallback(Q=>{Q&&N&&_(N),z(Q)},[N]);Ae(()=>{if(d){const Q=Ve(d);H(S.format(Q.toDate(y))),_(Q)}else H("")},[d,S,y]),Ae(()=>{if(o&&P===void 0){const Q=Ve(o);H(S.format(Q.toDate(y)))}},[o,P,S,y]);const{error:F,...ee}=ge("Combobox"),W=!!F||h,U=ee.id??g,K=ee.name??f,ce=ee.required||w;let X;return F?X=`${U}-error`:ee.hint&&(X=`${U}-hint`),a.jsxs(n5,{calendarDate:ie,content:O,contentId:se,disabled:x,locale:j,minDate:J,maxDate:Z,open:V,onCalendarDateChange:_,onContentChange:Y,onOpenChange:T,onTextInputChange:k,onTextValueChange:H,onTriggerChange:q,onValueChange:G,onClear:b,required:ce,textInput:D,textValue:P,timeZone:y,trigger:L,value:N,children:[a.jsxs(s5,{className:t,hasError:W,size:$,children:[a.jsx(ms,{fill:"neutral500","aria-hidden":!0}),a.jsx(l5,{ref:R,"aria-describedby":X,id:U,name:K,...v}),P&&b?a.jsx(ze,{size:"XS",variant:"ghost",onClick:ue,"aria-disabled":x,"aria-label":C,label:C,ref:ne,children:a.jsx(qe,{})}):null]}),a.jsx(No,{children:a.jsx(f5,{label:e,children:a.jsx(p5,{monthSelectLabel:i,yearSelectLabel:u})})})]})}),h0=e=>!!e.match(/^[^a-zA-Z]*$/),r5=({currentValue:e,minDate:t,maxDate:o})=>{const r=Pt("UTC");return e||(Ht(t,r)===t&&zt(o,r)===o?r:Ht(t,r)===r?t:zt(o,r)===r?o:r)},a5="DatePickerTrigger",s5=c.forwardRef(({hasError:e,size:t,...o},r)=>{const n=Ye(a5),s=fe(r,l=>n.onTriggerChange(l)),i=()=>{n.disabled||n.onOpenChange(!0)};return a.jsx(Xt,{asChild:!0,trapped:n.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{document.getSelection()?.empty(),l.preventDefault()},children:a.jsx(i5,{ref:s,$hasError:e,$size:t,$hasOnClear:!!n.onClear,...o,hasRadius:!0,gap:3,overflow:"hidden",background:n.disabled?"neutral150":"neutral0",onClick:Ee(o.onClick,()=>{n.textInput?.focus()}),onPointerDown:Ee(o.onPointerDown,l=>{const d=l.target;d.hasPointerCapture(l.pointerId)&&d.releasePointerCapture(l.pointerId),(d.closest("button")??d.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(i(),n.textInput?.focus())})})})}),i5=p(A)`
  min-width: ${({$hasOnClear:e})=>e?"160px":"130px"};
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return E`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return E`
          padding-block: ${e.theme.spaces[2]};
          padding-inline: ${e.theme.spaces[3]};
        `}}}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Te()({theme:e,$hasError:t})};
`,c5="DatePickerTextInput",l5=c.forwardRef(({placeholder:e,...t},o)=>{const r=Ye(c5),{onTextValueChange:n,textValue:s,onTextInputChange:i,onOpenChange:l,disabled:d,locale:u}=r,h=fe(o,$=>i($)),g=()=>{d||l(!0)},f=Re(u,{year:"numeric",month:"2-digit",day:"2-digit"}),[x,w,b]=c.useMemo(()=>{const $=f.formatToParts(new Date),v=$.filter(M=>M.type==="year"||M.type==="month"||M.type==="day"),R=v.map(M=>{switch(M.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),y=$.find(M=>M.type==="literal")?.value??"";return[R,y,v]},[f]),C=x.map($=>`\\d{${$.length}}`).join(`\\${w}`);return a.jsx(h5,{role:"combobox",type:"text",inputMode:"numeric",ref:h,"aria-autocomplete":"none","aria-controls":r.contentId,"aria-disabled":r.disabled,"aria-expanded":r.open,"aria-required":r.required,"aria-haspopup":"dialog","data-state":r.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,pattern:C,placeholder:e??x.join(w),...t,value:s??"",onBlur:Ee(t.onBlur,()=>{if(!r.textValue){r.onValueChange(void 0);return}r.onTextValueChange(f.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate)}),onChange:Ee(t.onChange,$=>{if(h0($.target.value)){const v=$.target.value.split(w),[R,y,M]=b.map((k,O)=>{const Y=v[O];return{...k,value:Y}}).sort((k,O)=>k.type==="year"?1:O.type==="year"?-1:k.type==="month"?1:O.type==="month"?-1:0).map(k=>k.value),j=r.calendarDate.year;let S=r.calendarDate.year;if(M){const k=M.length===1?`0${M}`:M;S=M.length<3?Number(`${j}`.slice(0,4-k.length)+k):Number(k)}M&&M.length<3&&S>r.maxDate.year&&(S-=100);const V=r.calendarDate.set({year:S}),z=V.calendar.getMonthsInYear(V),L=V.set({month:y&&Number(y)<=z?Number(y):void 0}),q=L.calendar.getDaysInMonth(L),D=L.set({day:R&&Number(R)<=q?Number(R):void 0});r.onCalendarDateChange(d5(D,r.minDate,r.maxDate)),r.onTextValueChange($.target.value)}}),onKeyDown:Ee(t.onKeyDown,$=>{if(!r.open&&(h0($.key)||["ArrowDown","Backspace"].includes($.key)))g();else if(["Tab"].includes($.key)&&r.open)$.preventDefault();else if(["Escape"].includes($.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),$.preventDefault();else if(r.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes($.key))switch($.preventDefault(),$.key){case"ArrowDown":{const v=r.calendarDate.add({weeks:1});if(r.maxDate&&v.compare(r.maxDate)>0)return;r.onCalendarDateChange(v);return}case"ArrowRight":{const v=r.calendarDate.add({days:1});if(r.maxDate&&v.compare(r.maxDate)>0)return;r.onCalendarDateChange(v);return}case"ArrowUp":{const v=r.calendarDate.subtract({weeks:1});if(r.minDate&&v.compare(r.minDate)<0)return;r.onCalendarDateChange(v);return}case"ArrowLeft":{const v=r.calendarDate.subtract({days:1});if(r.minDate&&v.compare(r.minDate)<0)return;r.onCalendarDateChange(v)}}else r.open&&["Enter"].includes($.key)&&($.preventDefault(),n(f.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate),r.onOpenChange(!1))})})});function d5(e,t,o){return t&&(e=zt(e,t)),o&&(e=Ht(e,o)),e}const h5=p.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,u5="DatePickerContent",f5=c.forwardRef((e,t)=>{const o=Ye(u5),[r,n]=c.useState(!1);return c.useEffect(()=>{o.open&&!r&&n(!0)},[o.open,r]),!o.open&&!r||!o.open?null:a.jsx(m5,{...e,ref:t})}),g5="DatePickerContent",m5=c.forwardRef((e,t)=>{const{label:o="Choose date",...r}=e,{onOpenChange:n,...s}=Ye(g5),{x:i,y:l,refs:d,strategy:u,placement:h}=i1({strategy:"fixed",placement:"bottom-start",middleware:[c1({mainAxis:4}),l1(),d1()],elements:{reference:s.trigger},whileElementsMounted:h1});c.useEffect(()=>{const f=()=>{n(!1)};return window.addEventListener("blur",f),window.addEventListener("resize",f),()=>{window.removeEventListener("blur",f),window.removeEventListener("resize",f)}},[n]);const g=fe(t,f=>s.onContentChange(f),d.setFloating);return Qt(),a.jsx(Jt,{allowPinchZoom:!0,children:a.jsx(_d,{asChild:!0,onFocusOutside:f=>{f.preventDefault()},onDismiss:()=>{n(!1)},children:a.jsx(x5,{ref:g,"data-state":s.open?"open":"closed","data-side":h.includes("top")?"top":"bottom",onContextMenu:f=>f.preventDefault(),id:s.contentId,role:"dialog","aria-modal":"true","aria-label":o,style:{left:i,top:l,position:u},hasRadius:!0,background:"neutral0",padding:1,...r})})})}),x5=p(I)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${oe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${oe.slideDownIn};
      }
    }
  }
`,w5="DatePickerCalendar",[v5,b5]=Ge("DateFormatters"),p5=c.forwardRef(({monthSelectLabel:e,yearSelectLabel:t,...o},r)=>{const{locale:n,timeZone:s,minDate:i,maxDate:l,calendarDate:d,onCalendarDateChange:u}=Ye(w5),h=f1(d),g=c.useMemo(()=>{const j=i.year,S=l.year;return[...Array(S-j+1).keys()].map(V=>(j+V).toString())},[i,l]),f=Re(n,{month:"long"}),x=c.useMemo(()=>[...Array(d.calendar.getMonthsInYear(d)).keys()].map(j=>f.format(d.set({month:j+1}).toDate(s))),[d,f,s]),w=Re(n,{weekday:"short"}),b=c.useMemo(()=>{const j=A0(Pt(s),n);return[...new Array(7).keys()].map(S=>{const z=j.add({days:S}).toDate(s);return w.format(z)})},[s,n,w]),C=Re(n,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),$=Re(n,{day:"numeric",calendar:d.calendar.identifier}),v=Re(n,{day:"2-digit",month:"2-digit",year:"numeric"}),R=j=>{if(typeof j=="number")return;const S=d.set({month:x.indexOf(j)+1});u(S)},y=j=>{if(typeof j=="number")return;const S=d.set({year:parseInt(j,10)});u(S)},M=$5(h,n);return a.jsx(v5,{dateFormatter:C,cellDateFormatter:$,textValueFormatter:v,children:a.jsxs(A,{ref:r,direction:"column",alignItems:"stretch",padding:4,...o,children:[a.jsxs(C5,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[a.jsx(Be,{children:a.jsx(c0,{"aria-label":e,value:x[d.month-1],onChange:R,children:x.map(j=>a.jsx(l0,{value:j,children:j},j))})}),a.jsx(Be,{children:a.jsx(c0,{value:d.year.toString(),"aria-label":t,onChange:y,children:g.map(j=>a.jsx(l0,{value:j,children:j},j))})})]}),a.jsxs("table",{role:"grid",children:[a.jsx("thead",{"aria-hidden":!0,children:a.jsx("tr",{"aria-rowindex":0,children:b.map((j,S)=>a.jsx(j5,{"aria-colindex":S,children:j},j))})}),a.jsx("tbody",{children:[...new Array(6).keys()].map(j=>a.jsx("tr",{"aria-rowindex":j+2,children:M(j).map((S,V)=>S?a.jsx(R5,{"aria-colindex":V+1,date:S,startDate:h,disabled:i.compare(S)>0||S.compare(l)>0},S.toString()):a.jsx(Zo,{"aria-colindex":V+1},V+1))},j))})]})]})})}),$5=(e,t)=>o=>{let r=e.add({weeks:o});const n=[];r=A0(r,t);const s=g1(r,t);for(let i=0;i<s;i++)n.push(null);for(;n.length<7;){n.push(r);const i=r.add({days:1});if(I0(r,i))break;r=i}for(;n.length<7;)n.push(null);return n},C5=p(A)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${e=>e.theme.fontWeights.bold};

    svg {
      fill: ${({theme:e})=>e.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};
    }
  }
`,j5=c.forwardRef(({children:e,...t},o)=>a.jsx(y5,{tag:"th",role:"gridcell",ref:o,...t,height:"2.4rem",width:"3.2rem",children:a.jsx(B,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),y5=p(I)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,S5="DatePickerCalendarCell",R5=c.forwardRef(({date:e,startDate:t,disabled:o,...r},n)=>{const{timeZone:s,calendarDate:i,onValueChange:l,onOpenChange:d,onTextValueChange:u,onCalendarDateChange:h}=Ye(S5),{dateFormatter:g,cellDateFormatter:f,textValueFormatter:x}=b5("DatePickerCalendarCell"),w=I0(i,e),b=c.useMemo(()=>g.format(e.toDate(s)),[g,e,s]),C=c.useMemo(()=>f.formatToParts(e.toDate(s)).find(y=>y.type==="day").value,[f,e,s]),$=m1(t),v=e.compare(t)<0||e.compare($)>0;let R="neutral900";return w?R="primary600":v&&(R="neutral600"),a.jsx(Zo,{tag:"td",role:"gridcell",ref:n,"aria-selected":w,...r,hasRadius:!0,"aria-label":b,tabIndex:w?0:-1,background:w?"primary100":"neutral0",cursor:"pointer",onPointerDown:Ee(r.onPointerDown,y=>{y.preventDefault(),h(e),l(e),u(x.format(e.toDate(s))),d(!1)}),"aria-disabled":o,children:a.jsx(B,{variant:"pi",textColor:R,children:C})})}),Zo=p(I)`
  text-align: center;
  padding: 0.7rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;
  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled='false'] {
    &:hover {
      background: ${({theme:e})=>e.colors.primary100};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Ve=e=>{const t=e.toISOString(),o=x1(t,"UTC");return w1(o)},M5=c.memo(o5),Vt=e=>!!e.match(/^[^a-zA-Z]*$/);function A5(e=""){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const I5=p(bd)`
  min-width: ${({onClear:e})=>e?"160px":"130px"};
`,T5=c.forwardRef(({step:e=15,value:t,defaultValue:o,onChange:r,...n},s)=>{const i=yt("TimePicker"),[l,d]=c.useState(""),[u,h]=Ce({prop:t,defaultProp:o,onChange:r}),g=Re(i.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),f=c.useMemo(()=>{const y=g.formatToParts(new Date),{value:M}=y.find(j=>j.type==="literal");return M},[g]),x=c.useMemo(()=>{const y=60/e;return[...Array(24).keys()].flatMap(M=>[...Array(y).keys()].map(j=>g.format(new Date(0,0,0,M,j*e))))},[e,g]),w=y=>{(!y||Vt(y))&&d(y)},b=y=>{const[M,j]=y.split(f);if(!M&&!j)return;const S=Number(M??"0"),V=Number(j??"0");if(!(S>23||V>59))return g.format(new Date(0,0,0,S,V))},C=y=>{const M=b(y.target.value);M?(d(M),h(M)):d(u)},$=y=>{if(typeof y<"u"){const M=b(y);h(M)}else h(y)};c.useEffect(()=>{const y=typeof t>"u"?"":t;Vt(y)&&d(y)},[t,d]);const R=`\\d{2}${A5(f)}\\d{2}`;return a.jsx(I5,{...n,ref:s,value:u,onChange:$,isPrintableCharacter:Vt,allowCustomValue:!0,placeholder:`--${f}--`,autocomplete:"none",startIcon:a.jsx(Es,{fill:"neutral500"}),inputMode:"numeric",pattern:R,textValue:l,onTextValueChange:w,onBlur:C,children:x.map(y=>a.jsx(Rd,{value:y,children:y},y))})});c.forwardRef(({clearLabel:e="clear",dateLabel:t="Choose date",timeLabel:o="Choose time",disabled:r=!1,hasError:n,onChange:s,onClear:i,required:l=!1,step:d,value:u,initialDate:h,size:g,...f},x)=>{const w=c.useRef(null),[b,C]=c.useState(!1),$=u?Ze(u,!1):void 0,[v,R]=Ce({defaultProp:h?Ze(h,!1):void 0,prop:b?void 0:$,onChange(H){s&&s(H?.toDate(Dt()))}}),y=yt("DateTimePicker"),M=Re(y.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),j=v?M.format(v.toDate(Dt())):"",S=c.useRef(u);Ae(()=>{b&&v&&R(void 0)},[b,v,R]),Ae(()=>{const H=S.current;u==null&&H!=null&&v&&R(void 0),b&&u!==H&&C(!1),S.current=u},[u,v,b,R,C]),Ae(()=>{b&&v===void 0&&u==null&&C(!1)},[b,v,u,C]);const V=H=>{let N=H?Ze(H):void 0;if(j&&N){const[G,J]=j.split(":");N=N.set({hour:parseInt(G,10),minute:parseInt(J,10)})}R(N)},z=H=>{if(!H)return;const[N,G]=H.split(":"),J=v?v.set({hour:parseInt(N,10),minute:parseInt(G,10)}):Ze(new Date).set({hour:parseInt(N,10),minute:parseInt(G,10)});R(J)},L=H=>{H.preventDefault(),C(!0),i&&i(H)},q=()=>{const H=v?v.set({hour:0,minute:0}):Ze(new Date);R(H)},D=fe(w,x),{error:k,id:O,labelNode:Y}=ge("DateTimePicker"),P=!!k||n;return a.jsxs(A,{"aria-labelledby":Y?`${O}-label`:void 0,role:"group",flex:"1",gap:1,wrap:"wrap",children:[a.jsx(Be,{flex:"1",children:a.jsx(M5,{...f,hasError:P,size:g,value:v?.toDate("UTC"),onChange:V,required:l,onClear:i?L:void 0,clearLabel:`${e} date`,disabled:r,ref:D,"aria-label":t})}),a.jsx(Be,{flex:"1",children:a.jsx(T5,{size:g,hasError:P,value:j,onChange:z,onClear:i&&j!==void 0&&j!=="00:00"?q:void 0,clearLabel:`${e} time`,required:l,disabled:r,step:d,"aria-label":o})})]})});const Ze=(e,t=!0)=>{const o=e.toISOString();let r=v1(o);return t&&(r=r.set({hour:0,minute:0})),b1(r)},V5=c.forwardRef((e,t)=>a.jsx(E5,{ref:t,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),E5=p(I)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,L5=p(I)`
  svg {
    height: 8.8rem;
  }
`,mu=c.forwardRef(({icon:e,content:t,action:o,hasRadius:r=!0,shadow:n="tableShadow"},s)=>a.jsxs(A,{ref:s,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:r,shadow:n,children:[e?a.jsx(L5,{paddingBottom:6,"aria-hidden":!0,children:e}):null,a.jsx(I,{paddingBottom:4,children:a.jsx(B,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:t})}),o]})),Xo=T0.define(),Qo=T0.define(),D5=V0.mark({attributes:{style:"background-color: yellow; color: black"}}),H5=p1.define({create(){return V0.none},update(e,t){return e=e.map(t.changes),t.effects.forEach(o=>{o.is(Xo)?e=e.update({add:o.value,sort:!0}):o.is(Qo)&&(e=e.update({filter:o.value}))}),e},provide:e=>$1.decorations.from(e)});c.forwardRef(({hasError:e,required:t,id:o,value:r="",disabled:n=!1,onChange:s=()=>null,...i},l)=>{const d=c.useRef(),u=c.useRef(),h=c.useRef(),{error:g,...f}=ge("JsonInput"),x=!!g||e,w=f.id??o,b=f.required||t;let C;g?C=`${w}-error`:f.hint&&(C=`${w}-hint`);const $=z=>{const L=u.current?.doc;if(L){const{text:q,to:D}=L.line(z),k=D-q.trimStart().length;D>k&&h.current?.dispatch({effects:Xo.of([D5.range(k,D)])})}},v=()=>{const z=u.current?.doc;if(z){const L=z.length||0;h.current?.dispatch({effects:Qo.of((q,D)=>D<=0||q>=L)})}},R=({state:z,view:L})=>{h.current=L,u.current=z,v();const D=_1()(L);D.length&&$(z.doc.lineAt(D[0].from).number)},y=(z,L)=>{R(L),s(z)},M=(z,L)=>{h.current=z,u.current=L,R({view:z,state:L})},{setContainer:j,view:S}=C1({value:r,onCreateEditor:M,container:d.current,editable:!n,extensions:[j1(),H5],onChange:y,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),V=fe(d,j);return c.useImperativeHandle(l,()=>({...S?.dom,focus(){S&&S.focus()},scrollIntoView(z){S&&S.dom.scrollIntoView(z)}}),[S]),a.jsx(z5,{ref:V,$disabled:n,$hasError:x,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":b,id:w,"aria-describedby":C,...i})});const z5=p(A)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
    cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${Te()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`,xu=he(({disabled:e,...t},o)=>a.jsx(qt,{ref:o,tag:rt,tabIndex:e?-1:void 0,disabled:e,...t}));p(I)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;p(I)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;const B5=Cr,k5=c.forwardRef((e,t)=>a.jsx(yr,{...e,asChild:!0,ref:t})),O5=c.forwardRef((e,t)=>a.jsx(Rr,{children:a.jsx(N5,{children:a.jsx(_5,{ref:t,...e})})})),N5=p(Dr)`
  background: ${e=>ko(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${oe.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,_5=p(Hr)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: calc(100% - ${({theme:e})=>e.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  ${({theme:e})=>e.breakpoints.medium} {
    width: calc(100% - ${({theme:e})=>e.spaces[9]});
  }
  > form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${oe.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${oe.modalPopOut};
    }
  }
`,Jo=c.forwardRef((e,t)=>a.jsx(Mr,{...e,asChild:!0,ref:t})),F5=c.forwardRef(({children:e,closeLabel:t="Close modal",...o},r)=>a.jsxs(W5,{ref:r,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...o,tag:"header",children:[e,a.jsx(Jo,{children:a.jsx(ze,{withTooltip:!1,label:t,children:a.jsx(qe,{})})})]})),W5=p(A)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,U5=c.forwardRef((e,t)=>a.jsx(Sr,{asChild:!0,children:a.jsx(B,{tag:"h2",variant:"omega",fontWeight:"bold",ref:t,...e})})),q5=c.forwardRef(({children:e,...t},o)=>a.jsx(G5,{ref:o,...t,children:e})),G5=p(jt)`
  padding-inline: ${e=>e.theme.spaces[7]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};
    /* Add negative margin and padding to avoid cropping the box shadow when the inputs are focused */
    margin: 0 -2px 0 -2px;
    padding-left: 2px;
    padding-right: 2px;

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`,K5=c.forwardRef((e,t)=>a.jsx(Y5,{ref:t,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"})),Y5=p(A)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,wu=Object.freeze(Object.defineProperty({__proto__:null,Body:q5,Close:Jo,Content:O5,Footer:K5,Header:F5,Root:B5,Title:U5,Trigger:k5},Symbol.toStringTag,{value:"Module"})),Z5="";c.forwardRef(({startAction:e,locale:t,onValueChange:o,value:r,step:n=1,disabled:s=!1,...i},l)=>{const d=yt("NumberInput"),u=t||d.locale,h=c.useRef(new y1(u,{style:"decimal"})),g=c.useRef(new S1(u,{maximumFractionDigits:20})),[f,x]=X5({prop(j){const S=String(r);return isNaN(Number(S))||S!==j&&j!==""?j:g.current.format(Number(r))},defaultProp:Z5,onChange(j){if(!o)return;const S=h.current.parse(j??"");o(isNaN(S)?void 0:S)}}),w=j=>{x(String(j))},b=({target:{value:j}})=>{h.current.isValidPartialNumber(j)&&w(j)},$=(j=>{const S=j.toString();return S.includes(".")?S.split(".")[1].length:0})(n),v=()=>{if(!f){w(n);return}const j=h.current.parse(f),S=isNaN(j)?n:j+n,V=parseFloat(S.toFixed($));w(g.current.format(V))},R=()=>{if(!f){w(-n);return}const j=h.current.parse(f),S=isNaN(j)?-n:j-n,V=parseFloat(S.toFixed($));w(g.current.format(V))},y=j=>{if(!s)switch(j.key){case de.DOWN:{j.preventDefault(),R();break}case de.UP:{j.preventDefault(),v();break}}},M=()=>{if(f){const j=h.current.parse(f),S=isNaN(j)?"":g.current.format(j);w(S)}};return a.jsx(Ct,{ref:l,startAction:e,disabled:s,type:"text",inputMode:"decimal",onChange:b,onKeyDown:y,onBlur:M,value:f,endAction:a.jsxs(A,{direction:"column",children:[a.jsx(u0,{disabled:s,"aria-hidden":!0,$reverse:!0,onClick:v,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:a.jsx(He,{fill:"neutral500"})}),a.jsx(u0,{disabled:s,"aria-hidden":!0,onClick:R,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:a.jsx(He,{fill:"neutral500"})})]}),...i})});const u0=p.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:e})=>e?"-2px":"2px"});
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:e})=>e?"rotateX(180deg)":void 0};
  }
`;function X5({prop:e,defaultProp:t,onChange:o=()=>{}}){const[r,n]=po({defaultProp:t,onChange:o}),s=e!==void 0,i=e instanceof Function?e(r):e,l=s?i:r,d=an(o),u=c.useCallback(h=>{if(s){const f=typeof h=="function"?h(i):h;f!==i&&(d(f),n(h))}else n(h)},[s,i,n,d]);return[l,u]}const Q5=c.createContext({activePage:1,pageCount:1}),Dn=()=>c.useContext(Q5);he(({children:e,...t},o)=>{const{activePage:r}=Dn(),n=r===1;return a.jsxs(er,{ref:o,"aria-disabled":n,tabIndex:n?-1:void 0,...t,children:[a.jsx(Ke,{children:e}),a.jsx(go,{"aria-hidden":!0})]})});he(({children:e,...t},o)=>{const{activePage:r,pageCount:n}=Dn(),s=r===n;return a.jsxs(er,{ref:o,"aria-disabled":s,tabIndex:s?-1:void 0,...t,children:[a.jsx(Ke,{children:e}),a.jsx(Sn,{"aria-hidden":!0})]})});const Po=p(rt)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${bt}
`,er=p(Po)`
  font-size: 1.1rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;he(({number:e,children:t,...o},r)=>{const{activePage:n}=Dn(),s=n===e;return a.jsxs(J5,{ref:r,...o,"aria-current":s,$active:s,children:[a.jsx(Ke,{children:t}),a.jsx(B,{"aria-hidden":!0,fontWeight:s?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const J5=p(Po)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;c.forwardRef((e,t)=>a.jsx(R1,{...e,asChild:!0,ref:t}));c.forwardRef((e,t)=>a.jsx(M1,{children:a.jsx(P5,{sideOffset:4,side:"bottom",align:"start",...e,ref:t})}));const P5=p(A1)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  background-color: ${e=>e.theme.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${oe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${oe.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${oe.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${oe.slideDownOut};
      }
    }
  }
`;c.forwardRef(({children:e,intersectionId:t,onReachEnd:o,...r},n)=>{const s=c.useRef(null),i=fe(s,n),l=$e();return at(s,o??(()=>{}),{selectorToWatch:`#${Fe(l)}`,skipWhen:!t||!o}),a.jsxs(eh,{ref:i,...r,children:[e,t&&o&&a.jsx(I,{id:Fe(l),width:"100%",height:"1px"})]})});const eh=p(jt)`
  height: 20rem;
`;c.forwardRef(({size:e="M",value:t,...o},r)=>a.jsx(th,{ref:r,$size:e,...o,children:a.jsx(nh,{style:{transform:`translate3D(-${100-(t??0)}%, 0, 0)`}})}));const th=p(I1)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,nh=p(T1)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;c.forwardRef((e,t)=>a.jsx(oh,{ref:t,...e}));const oh=p(V1)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;c.forwardRef(({children:e,id:t,...o},r)=>{const n=$e(t);return a.jsxs(A,{gap:2,children:[a.jsx(rh,{id:n,ref:r,...o,children:a.jsx(ah,{})}),a.jsx(B,{tag:"label",htmlFor:n,children:e})]})});const rh=p(E1)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,ah=p(L1)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${oe.popIn} ${e=>e.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary600};
  }
`,sh=e=>{const t=e.querySelector('[tabindex="0"]');t&&t.focus()},tr=c.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),ih=()=>c.useContext(tr),ch=c.forwardRef(({colCount:e,rowCount:t,jumpStep:o=3,initialCol:r=0,initialRow:n=0,...s},i)=>{const l=c.useRef(null),d=c.useRef(!1),u=fe(l,i),[h,g]=c.useState(n),[f,x]=c.useState(r),w=c.useCallback(({colIndex:$,rowIndex:v})=>{x($),g(v)},[]);c.useEffect(()=>{d.current&&sh(l.current),d.current||(d.current=!0)},[f,h]);const b=$=>{switch($.key){case de.RIGHT:{$.preventDefault(),x(v=>v<e-1?v+1:v);break}case de.LEFT:{$.preventDefault(),x(v=>v>0?v-1:v);break}case de.UP:{$.preventDefault(),g(v=>v>0?v-1:v);break}case de.DOWN:{$.preventDefault(),g(v=>v<t-1?v+1:v);break}case de.HOME:{$.preventDefault(),$.ctrlKey&&g(0),x(0);break}case de.END:{$.preventDefault(),$.ctrlKey&&g(t-1),x(e-1);break}case de.PAGE_DOWN:{$.preventDefault(),g(v=>v+o<t?v+o:t-1);break}case de.PAGE_UP:{$.preventDefault(),g(v=>v-o>0?v-o:0);break}}},C=c.useMemo(()=>({rowIndex:h,colIndex:f,setTableValues:w}),[f,h,w]);return a.jsx(tr.Provider,{value:C,children:a.jsx("table",{role:"grid",ref:u,"aria-rowcount":t,"aria-colcount":e,onKeyDown:b,...s})})}),Xe=(e,t)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(n=>!n.hasAttribute("disabled")),Et=e=>e.filter(t=>t.tagName==="INPUT"?t.type!=="checkbox"&&t.type!=="radio":!1),nr=c.forwardRef(({coords:e={col:0,row:0},tag:t="td",...o},r)=>{const n=c.useRef(null),s=fe(r,n),{rowIndex:i,colIndex:l,setTableValues:d}=ih(),[u,h]=c.useState(!1),g=w=>{const b=Xe(n.current);if(b.length===0||b.length===1&&Et(b).length===0)return;if(b.length>1&&!b.find($=>$.tagName!=="BUTTON")){w.preventDefault();const $=b.findIndex(v=>v===document.activeElement);if(w.key===de.RIGHT){const v=b[$+1];v&&(w.stopPropagation(),v.focus())}else if(w.key===de.LEFT){const v=b[$-1];v&&(w.stopPropagation(),v.focus())}return}const C=w.key===de.ENTER;if(C&&!u)h(!0);else if((w.key===de.ESCAPE||C)&&u){if(C&&document.activeElement?.tagName==="A")return;h(!1),n.current.focus()}else u&&w.stopPropagation()},f=i===e.row-1&&l===e.col-1;Ae(()=>{const w=Xe(n.current);w.length===0||w.length===1&&Et(w).length!==0||w.length>1&&w.find(b=>b.tagName!=="BUTTON")?(n.current.setAttribute("tabIndex",!u&&f?"0":"-1"),w.forEach((b,C)=>{b.setAttribute("tabIndex",u?"0":"-1"),u&&C===0&&b.focus()})):w.forEach(b=>{b.setAttribute("tabIndex",f?"0":"-1")})},[u,f]);const x=c.useCallback(()=>{const w=Xe(n.current);w.length>=1&&(Et(w).length!==0||!w.find(b=>b.tagName!=="BUTTON"))&&h(!0),d({rowIndex:e.row-1,colIndex:e.col-1})},[e,d]);return Ae(()=>{const w=n.current;return Xe(w).forEach(C=>{C.addEventListener("focus",x)}),()=>{Xe(w).forEach($=>{$.removeEventListener("focus",x)})}},[x]),a.jsx(I,{role:"gridcell",tag:t,ref:s,onKeyDown:g,...o})}),lh=e=>a.jsx(nr,{...e,tag:"th"}),dh=({children:e,...t})=>{const o=c.Children.toArray(e).map(r=>c.isValidElement(r)?c.cloneElement(r,{"aria-rowindex":1}):r);return a.jsx("thead",{...t,children:o})},hh=({children:e,...t})=>{const o=c.Children.toArray(e).map((r,n)=>c.isValidElement(r)?c.cloneElement(r,{"aria-rowindex":n+2}):r);return a.jsx("tbody",{...t,children:o})},uh=({children:e,...t})=>{const o=c.Children.toArray(e).map((r,n)=>c.isValidElement(r)?c.cloneElement(r,{"aria-colindex":n+1,coords:{col:n+1,row:t["aria-rowindex"]}}):r);return a.jsx(I,{tag:"tr",...t,children:o})},fh=p(qe)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,or=p(_c)`
  font-size: 1rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,gh=p.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  &:focus-within {
    ${or} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,mh=p(Ct)`
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  padding: 0 0 0 8px;
  color: ${({theme:e})=>e.colors.neutral800};

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${Te()}

  > input::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  > input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  > input::-webkit-search-decoration,
  > input::-webkit-search-cancel-button,
  > input::-webkit-search-results-button,
  > input::-webkit-search-results-decoration {
    display: none;
  }
`;c.forwardRef(({name:e,children:t,value:o="",onClear:r,clearLabel:n="Clear",...s},i)=>{const l=c.useRef(null),d=o.length>0,u=g=>{r(g),l.current.focus()},h=yo(i,l);return a.jsx(gh,{children:a.jsxs(Be,{name:e,children:[a.jsx(Ke,{children:a.jsx(Vn,{children:t})}),a.jsx(mh,{size:"S",type:"search",ref:h,value:o,startAction:a.jsx(or,{"aria-hidden":!0}),onKeyDown:g=>{g.stopPropagation(),g.key==="Escape"&&d&&u(g)},endAction:d?a.jsx(ze,{onClick:u,onMouseDown:g=>{g.preventDefault()},label:n,size:"XS",variant:"ghost",type:"button",children:a.jsx(fh,{})}):void 0,...s})]})})});const xh=p(I)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:e,...t})=>t["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:e})=>e?"pointer":"initial"};
  }
`,wh=({children:e,icon:t,label:o,disabled:r=!1,onClick:n,...s})=>{const i=l=>{r||!n||n(l)};return a.jsxs(A,{inline:!0,background:r?"neutral200":"primary100",color:r?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:r?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...s,children:[a.jsx(vh,{$disabled:r,variant:"pi",fontWeight:"bold",children:e}),a.jsx(xh,{tag:"button",disabled:r,"aria-disabled":r,"aria-label":o,padding:2,onClick:i,$iconAction:!!n,children:t})]})},vh=p(B)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;c.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:r,hasError:n,id:s,name:i,onChange:l,onClear:d,onCloseAutoFocus:u,onReachEnd:h,placeholder:g,required:f,size:x,startIcon:w,value:b,withTags:C,...$},v)=>{const R=c.useRef(null),[y,M]=c.useState(),[j,S]=c.useState(!1),V=_=>{l?l(_):M(_)},z=_=>()=>{const se=Array.isArray(b)?b.filter(ne=>ne!==_):(y??[]).filter(ne=>ne!==_);l?l(se):M(se)},L=_=>{S(_)},q=$e(),D=`intersection-${Fe(q)}`;at(R,_=>{h&&h(_)},{selectorToWatch:`#${D}`,skipWhen:!j});const O=typeof b<"u"&&b!==null?b:y,Y=_=>_&&typeof _=="object"&&_.value?a.jsx(wh,{tabIndex:-1,disabled:r,icon:a.jsx(qe,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:z(_.value),children:_.textValue},_.value):null,{error:P,...H}=ge("MultiSelect"),N=!!P||n,G=H.id??s,J=H.name??i,Z=H.required??f;let ie;return P?ie=`${G}-error`:H.hint&&(ie=`${G}-hint`),a.jsxs(_o,{onOpenChange:L,disabled:r,required:Z,onValueChange:V,value:O,...$,multi:!0,children:[a.jsx(Fo,{ref:v,id:G,name:J,"aria-label":$["aria-label"],"aria-describedby":ie??$["aria-describedby"],startIcon:w,hasError:N,disabled:r,clearLabel:t,onClear:O?.length?d:void 0,withTags:!!(C&&(O?.length??!1)),size:x,children:a.jsx(Wo,{placeholder:g,textColor:O?.length?"neutral800":"neutral600",children:O?.length?C?Y:o?o(O):void 0:void 0})}),a.jsx(Uo,{children:a.jsx(qo,{position:"popper",sideOffset:4,onCloseAutoFocus:u,children:a.jsxs(Go,{ref:R,children:[e,a.jsx(I,{id:D,width:"100%",height:"1px"})]})})})]})});const bh=c.forwardRef(({value:e,children:t,startIcon:o,...r},n)=>a.jsxs(Ln,{ref:n,value:e.toString(),...r,children:[o&&a.jsx(I,{tag:"span","aria-hidden":!0,children:o}),a.jsx(Ko,{children:({isSelected:s,isIntermediate:i})=>a.jsx(Tn,{checked:i?"indeterminate":s})}),a.jsx(B,{children:a.jsx(Yo,{children:t})})]}));c.forwardRef(({children:e,label:t,startIcon:o,values:r=[],...n},s)=>a.jsxs(e5,{ref:s,children:[a.jsxs(Ln,{value:r,...n,children:[o&&a.jsx(I,{tag:"span","aria-hidden":!0,children:o}),a.jsx(Ko,{children:({isSelected:i,isIntermediate:l})=>a.jsx(Tn,{checked:l?"indeterminate":i})}),a.jsx(B,{children:t})]}),e]}));p(bh)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const ph="23.2rem";c.forwardRef(({...e},t)=>a.jsx($h,{ref:t,...e,tag:"nav"}));const $h=p(I)`
  width: ${ph};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;p(V5)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;he(({active:e,children:t,icon:o=null,withBullet:r=!1,isSubSectionChild:n=!1,...s},i)=>a.jsxs(Ch,{background:"neutral100",paddingLeft:n?9:7,paddingBottom:2,paddingTop:2,ref:i,...s,children:[a.jsxs(A,{children:[o?a.jsx(jh,{children:o}):a.jsx(Kt,{$active:e}),a.jsx(B,{paddingLeft:2,children:t})]}),r&&a.jsx(A,{paddingRight:4,children:a.jsx(Kt,{$active:!0})})]}));const Kt=p.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,Ch=p(rt)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>E`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${Kt} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,jh=p.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;p.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;p(I)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;c.forwardRef(({visibleLabels:e,onLabel:t="On",offLabel:o="Off",onCheckedChange:r,checked:n,defaultChecked:s,disabled:i,...l},d)=>{const[u,h]=Ce({prop:n,defaultProp:s}),g=f=>{h(f)};return a.jsxs(A,{gap:3,children:[a.jsx(yh,{ref:d,onCheckedChange:Ee(r,g),checked:u,disabled:i,...l,children:a.jsx(Sh,{})}),e?a.jsx(Rh,{"aria-hidden":!0,"data-disabled":i,"data-state":u?"checked":"unchecked",children:u?t:o}):null]})});const yh=p(D1)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:e})=>e.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:e})=>e.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,Sh=p(H1)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Rh=p(B)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[Mh,Hn]=Ge("Tabs");c.forwardRef(({disabled:e=!1,variant:t="regular",hasError:o,...r},n)=>a.jsx(Mh,{disabled:e,hasError:o,variant:t,children:a.jsx(Ah,{ref:n,...r})}));const Ah=p(z1)`
  width: 100%;
  position: relative;
`;c.forwardRef((e,t)=>{const{variant:o}=Hn("List");return a.jsx(Ih,{ref:t,...e,$variant:o})});const Ih=p(B1)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;c.forwardRef(({children:e,disabled:t,...o},r)=>{const{disabled:n,variant:s,hasError:i}=Hn("Trigger"),l=n===!0||n===o.value||t,d=i===o.value;return a.jsxs(Th,{ref:r,...o,$hasError:d,$variant:s,disabled:l,children:[a.jsx(ar,{fontWeight:"bold",variant:s==="simple"?"sigma":void 0,children:e}),s==="simple"?a.jsx(rr,{}):null]})});const rr=p.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,ar=p(B)``,Th=p(k1)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?E`
        padding-block: ${t=>t.theme.spaces[4]};
        padding-inline: ${t=>t.theme.spaces[4]};

        & > ${ar} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${rr} {
            opacity: 1;
          }
        }
      `:E`
        padding-block: ${t=>t.theme.spaces[3]};
        padding-inline: ${t=>t.theme.spaces[3]};
        flex: 1;
        background-color: ${t=>t.theme.colors.neutral100};
        border-bottom: solid 1px ${t=>t.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${t=>t.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${t=>t.theme.spaces[4]};
          padding-inline: ${t=>t.theme.spaces[4]};
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};
          border-top-right-radius: ${t=>t.theme.borderRadius};
          border-top-left-radius: ${t=>t.theme.borderRadius};
          background-color: ${t=>t.theme.colors.neutral0};
          border-bottom: solid 1px ${t=>t.theme.colors.neutral0};
          box-shadow: ${e.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral400};
  }
`;c.forwardRef((e,t)=>{const{variant:o}=Hn("Content");return a.jsx(Vh,{$variant:o,ref:t,...e})});const Vh=p(O1)`
  ${e=>e.$variant==="simple"?E``:E`
        position: relative;
        z-index: 1;
        background-color: ${t=>t.theme.colors.neutral0};
      `}
`,Eh=p(I)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Lh=p(ch)`
  width: 100%;
  white-space: nowrap;
`,Dh=p(I)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,Hh=p(I)`
  overflow-x: auto;
`,vu=c.forwardRef(({footer:e,...t},o)=>{const r=c.useRef(null),[n,s]=c.useState(),i=l=>{const d=l.target.scrollWidth-l.target.clientWidth;if(l.target.scrollLeft===0){s("right");return}if(l.target.scrollLeft===d){s("left");return}l.target.scrollLeft>0&&s("both")};return c.useEffect(()=>{r.current.scrollWidth>r.current.clientWidth&&s("right")},[]),a.jsxs(Eh,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[a.jsx(Dh,{$overflowing:n,position:"relative",children:a.jsx(Hh,{ref:r,onScroll:i,paddingLeft:6,paddingRight:6,children:a.jsx(Lh,{ref:o,...t})})}),e]})}),zh=p(hh)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,bu=({children:e,...t})=>a.jsx(zh,{...t,children:e}),Bh=p(dh)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,pu=({children:e,...t})=>a.jsx(Bh,{...t,children:e}),kh=p(uh)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:e})=>e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:e})=>e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`,$u=e=>a.jsx(kh,{...e}),sr=p(nr)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,Cu=c.forwardRef(({children:e,action:t,...o},r)=>a.jsx(sr,{color:"neutral600",as:lh,ref:r,...o,children:a.jsxs(A,{children:[e,t]})})),ju=c.forwardRef(({children:e,...t},o)=>a.jsx(sr,{color:"neutral800",ref:o,...t,children:e}));p(I)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;p(I)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;he(({children:e,startIcon:t,endIcon:o,disabled:r=!1,loading:n=!1,type:s="button",...i},l)=>{const d=r||n;return a.jsxs(_h,{ref:l,disabled:d,"aria-disabled":d,tag:"button",type:s,gap:2,...i,children:[n?a.jsx(Nh,{"aria-hidden":!0,children:a.jsx(mo,{})}):t,a.jsx(B,{variant:"pi",children:e}),o]})});const Oh=le`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Nh=p.span`
  display: flex;
  animation: ${Oh} 2s infinite linear;
  will-change: transform;
`,_h=p(A)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${bt}
`,Fh=c.forwardRef((e,t)=>a.jsx(Ct,{ref:t,...e}));Fh.displayName="TextInput";const yu=c.forwardRef(({disabled:e,hasError:t,id:o,name:r,required:n,resizable:s=!0,...i},l)=>{const{error:d,...u}=ge("Textarea"),h=!!d||t,g=u.id??o,f=u.name??r,x=u.required||n;let w;return d?w=`${g}-error`:u.hint&&(w=`${g}-hint`),a.jsx(Wh,{borderColor:h?"danger600":"neutral200",$hasError:h,hasRadius:!0,children:a.jsx(Uh,{"aria-invalid":h,"aria-required":x,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:l,lineHeight:4,padding:4,width:"100%",height:"100%",id:g,name:f,"aria-describedby":w,$resizable:s,...i})})}),Wh=p(I)`
  ${Te()}
`,Uh=p(I)`
  display: block;
  border: none;
  resize: ${({$resizable:e})=>e?"vertical":"none"};
  min-height: ${({minHeight:e})=>e||"10.5rem"};

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,Su=c.forwardRef(({offLabel:e,onLabel:t,disabled:o,hasError:r,required:n,id:s,name:i,checked:l,onChange:d,...u},h)=>{const[g=!1,f]=Ce({prop:l}),x=g!==null&&!g,{error:w,...b}=ge("Toggle"),C=!!w||r,$=b.id??s,v=b.name??i,R=b.required||n;let y;return w?y=`${$}-error`:b.hint&&(y=`${$}-hint`),a.jsxs(qh,{position:"relative",hasRadius:!0,padding:1,background:o?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:C?"danger600":"neutral200",wrap:"wrap",cursor:o?"not-allowed":"pointer",$hasError:C,children:[a.jsx(f0,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&x?"neutral200":x?"neutral0":"transparent",borderColor:o&&x?"neutral300":x?"neutral200":o?"neutral150":"neutral100",children:a.jsx(B,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":x?"danger700":"neutral600",children:e})}),a.jsx(f0,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&g?"neutral200":g?"neutral0":"transparent",borderColor:o&&g?"neutral300":g?"neutral200":o?"neutral150":"neutral100",children:a.jsx(B,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":g?"primary600":"neutral600",children:t})}),a.jsx(Gh,{...u,id:$,name:v,ref:h,onChange:M=>{f(M.currentTarget.checked),d?.(M)},type:"checkbox","aria-required":R,disabled:o,"aria-disabled":o,checked:!!g,"aria-describedby":y})]})}),qh=p(A)`
  ${Te()}
`,f0=p(A)`
  padding-block: 0.6rem;
`,Gh=p.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`;function Kh(e,t,o){if(o===void 0&&(o=Error),!e)throw new o(t)}var Yh=function(e){console.error(e)},Zh=function(e){console.warn(e)},Xh={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Yh,onWarn:Zh};function Qh(e){Kh(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}_n(_n({},Xh),{textComponent:c.Fragment});var zn=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=c.createContext(null)):c.createContext(null);zn.Consumer;zn.Provider;var Jh=zn;function ir(){var e=c.useContext(Jh);return Qh(e),e}var Yt;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Yt||(Yt={}));var Zt;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Zt||(Zt={}));function cr(e){var t=function(o){var r=ir(),n=o.value,s=o.children,i=E0(o,["value","children"]),l=typeof n=="string"?new Date(n||0):n,d=e==="formatDate"?r.formatDateToParts(l,i):r.formatTimeToParts(l,i);return s(d)};return t.displayName=Zt[e],t}function ct(e){var t=function(o){var r=ir(),n=o.value,s=o.children,i=E0(o,["value","children"]),l=r[e](n,i);if(typeof s=="function")return s(l);var d=r.textComponent||c.Fragment;return c.createElement(d,null,l)};return t.displayName=Yt[e],t}ct("formatDate");ct("formatTime");ct("formatNumber");ct("formatList");ct("formatDisplayName");cr("formatDate");cr("formatTime");export{lu as A,qt as B,n2 as C,uu as D,mu as E,ru as F,hu as G,ze as I,m2 as L,wu as M,B as T,Ke as V,fu as a,I as b,A as c,du as d,Su as e,Fh as f,t2 as g,G1 as h,vu as i,pu as j,$u as k,Cu as l,bu as m,ju as n,su as o,ou as p,Tn as q,au as r,yu as s,cu as t,ir as u,en as v,xu as w,iu as x};
