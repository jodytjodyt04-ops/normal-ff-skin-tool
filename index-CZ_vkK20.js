const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/admin-CharactersPage-qN7BKnJn.js","assets/admin-AdminShell-COEHdePi.js","assets/admin-VisibilityToggle-BX3Rex2K.js","assets/admin-CharacterEditPage-C4p_8ejt.js","assets/admin-adminConstants-DyWxIHBT.js","assets/admin-ItemsPage-Kpbq_CYe.js","assets/admin-VfxPanel-B0aSfyAF.js","assets/admin-VfxPage-DWUXRtcx.js","assets/admin-AnnouncementsPage-DDMcuA2n.js","assets/admin-MaintenancePage-gLyCNgMZ.js","assets/admin-CoveragePage-CWJTrClm.js","assets/admin-SettingsPage-CIb4-bvO.js","assets/admin-PasswordPage-Bmp5rwgi.js","assets/admin-SystemTestPage-0NuCApem.js","assets/admin-DebugConsolePage-InOkmS-D.js","assets/admin-CachePage-TCfNVRM_.js","assets/admin-TextureCachePage-EGvAsJz2.js","assets/admin-TextureWarmupPanel-BRcNz2p9.js","assets/admin-TextureSharedPage-DuoB3DFs.js","assets/admin-CleanupPage-D--zCLeu.js"])))=>i.map(i=>d[i]);
var w0=Object.defineProperty;var oh=r=>{throw TypeError(r)};var b0=(r,n,o)=>n in r?w0(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o;var sh=(r,n,o)=>b0(r,typeof n!="symbol"?n+"":n,o),zc=(r,n,o)=>n.has(r)||oh("Cannot "+o);var L=(r,n,o)=>(zc(r,n,"read from private field"),o?o.call(r):n.get(r)),Ee=(r,n,o)=>n.has(r)?oh("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,o),he=(r,n,o,s)=>(zc(r,n,"write to private field"),s?s.call(r,o):n.set(r,o),o),Et=(r,n,o)=>(zc(r,n,"access private method"),o);var Ca=(r,n,o,s)=>({set _(l){he(r,n,l,o)},get _(){return L(r,n,s)}});function _0(r,n){for(var o=0;o<n.length;o++){const s=n[o];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const d=Object.getOwnPropertyDescriptor(s,l);d&&Object.defineProperty(r,l,d.get?d:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function o(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=o(l);fetch(l.href,d)}})();function Cp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Mc={exports:{}},Go={},Uc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function S0(){if(ah)return Se;ah=1;var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function R(C){return C===null||typeof C!="object"?null:(C=w&&C[w]||C["@@iterator"],typeof C=="function"?C:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,A={};function I(C,z,ue){this.props=C,this.context=z,this.refs=A,this.updater=ue||B}I.prototype.isReactComponent={},I.prototype.setState=function(C,z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,z,"setState")},I.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function N(){}N.prototype=I.prototype;function T(C,z,ue){this.props=C,this.context=z,this.refs=A,this.updater=ue||B}var M=T.prototype=new N;M.constructor=T,D(M,I.prototype),M.isPureReactComponent=!0;var U=Array.isArray,V=Object.prototype.hasOwnProperty,G={current:null},se={key:!0,ref:!0,__self:!0,__source:!0};function _e(C,z,ue){var ye,we={},te=null,ce=null;if(z!=null)for(ye in z.ref!==void 0&&(ce=z.ref),z.key!==void 0&&(te=""+z.key),z)V.call(z,ye)&&!se.hasOwnProperty(ye)&&(we[ye]=z[ye]);var xe=arguments.length-2;if(xe===1)we.children=ue;else if(1<xe){for(var Te=Array(xe),ut=0;ut<xe;ut++)Te[ut]=arguments[ut+2];we.children=Te}if(C&&C.defaultProps)for(ye in xe=C.defaultProps,xe)we[ye]===void 0&&(we[ye]=xe[ye]);return{$$typeof:r,type:C,key:te,ref:ce,props:we,_owner:G.current}}function ve(C,z){return{$$typeof:r,type:C.type,key:z,ref:C.ref,props:C.props,_owner:C._owner}}function le(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function Ne(C){var z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ue){return z[ue]})}var De=/\/+/g;function Ce(C,z){return typeof C=="object"&&C!==null&&C.key!=null?Ne(""+C.key):z.toString(36)}function Le(C,z,ue,ye,we){var te=typeof C;(te==="undefined"||te==="boolean")&&(C=null);var ce=!1;if(C===null)ce=!0;else switch(te){case"string":case"number":ce=!0;break;case"object":switch(C.$$typeof){case r:case n:ce=!0}}if(ce)return ce=C,we=we(ce),C=ye===""?"."+Ce(ce,0):ye,U(we)?(ue="",C!=null&&(ue=C.replace(De,"$&/")+"/"),Le(we,z,ue,"",function(ut){return ut})):we!=null&&(le(we)&&(we=ve(we,ue+(!we.key||ce&&ce.key===we.key?"":(""+we.key).replace(De,"$&/")+"/")+C)),z.push(we)),1;if(ce=0,ye=ye===""?".":ye+":",U(C))for(var xe=0;xe<C.length;xe++){te=C[xe];var Te=ye+Ce(te,xe);ce+=Le(te,z,ue,Te,we)}else if(Te=R(C),typeof Te=="function")for(C=Te.call(C),xe=0;!(te=C.next()).done;)te=te.value,Te=ye+Ce(te,xe++),ce+=Le(te,z,ue,Te,we);else if(te==="object")throw z=String(C),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ce}function it(C,z,ue){if(C==null)return C;var ye=[],we=0;return Le(C,ye,"","",function(te){return z.call(ue,te,we++)}),ye}function Xe(C){if(C._status===-1){var z=C._result;z=z(),z.then(function(ue){(C._status===0||C._status===-1)&&(C._status=1,C._result=ue)},function(ue){(C._status===0||C._status===-1)&&(C._status=2,C._result=ue)}),C._status===-1&&(C._status=0,C._result=z)}if(C._status===1)return C._result.default;throw C._result}var Re={current:null},X={transition:null},re={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:X,ReactCurrentOwner:G};function J(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:it,forEach:function(C,z,ue){it(C,function(){z.apply(this,arguments)},ue)},count:function(C){var z=0;return it(C,function(){z++}),z},toArray:function(C){return it(C,function(z){return z})||[]},only:function(C){if(!le(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Se.Component=I,Se.Fragment=o,Se.Profiler=l,Se.PureComponent=T,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Se.act=J,Se.cloneElement=function(C,z,ue){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ye=D({},C.props),we=C.key,te=C.ref,ce=C._owner;if(z!=null){if(z.ref!==void 0&&(te=z.ref,ce=G.current),z.key!==void 0&&(we=""+z.key),C.type&&C.type.defaultProps)var xe=C.type.defaultProps;for(Te in z)V.call(z,Te)&&!se.hasOwnProperty(Te)&&(ye[Te]=z[Te]===void 0&&xe!==void 0?xe[Te]:z[Te])}var Te=arguments.length-2;if(Te===1)ye.children=ue;else if(1<Te){xe=Array(Te);for(var ut=0;ut<Te;ut++)xe[ut]=arguments[ut+2];ye.children=xe}return{$$typeof:r,type:C.type,key:we,ref:te,props:ye,_owner:ce}},Se.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:d,_context:C},C.Consumer=C},Se.createElement=_e,Se.createFactory=function(C){var z=_e.bind(null,C);return z.type=C,z},Se.createRef=function(){return{current:null}},Se.forwardRef=function(C){return{$$typeof:p,render:C}},Se.isValidElement=le,Se.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:Xe}},Se.memo=function(C,z){return{$$typeof:x,type:C,compare:z===void 0?null:z}},Se.startTransition=function(C){var z=X.transition;X.transition={};try{C()}finally{X.transition=z}},Se.unstable_act=J,Se.useCallback=function(C,z){return Re.current.useCallback(C,z)},Se.useContext=function(C){return Re.current.useContext(C)},Se.useDebugValue=function(){},Se.useDeferredValue=function(C){return Re.current.useDeferredValue(C)},Se.useEffect=function(C,z){return Re.current.useEffect(C,z)},Se.useId=function(){return Re.current.useId()},Se.useImperativeHandle=function(C,z,ue){return Re.current.useImperativeHandle(C,z,ue)},Se.useInsertionEffect=function(C,z){return Re.current.useInsertionEffect(C,z)},Se.useLayoutEffect=function(C,z){return Re.current.useLayoutEffect(C,z)},Se.useMemo=function(C,z){return Re.current.useMemo(C,z)},Se.useReducer=function(C,z,ue){return Re.current.useReducer(C,z,ue)},Se.useRef=function(C){return Re.current.useRef(C)},Se.useState=function(C){return Re.current.useState(C)},Se.useSyncExternalStore=function(C,z,ue){return Re.current.useSyncExternalStore(C,z,ue)},Se.useTransition=function(){return Re.current.useTransition()},Se.version="18.3.1",Se}var lh;function wu(){return lh||(lh=1,Uc.exports=S0()),Uc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function k0(){if(ch)return Go;ch=1;var r=wu(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(p,g,x){var y,w={},R=null,B=null;x!==void 0&&(R=""+x),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(B=g.ref);for(y in g)s.call(g,y)&&!d.hasOwnProperty(y)&&(w[y]=g[y]);if(p&&p.defaultProps)for(y in g=p.defaultProps,g)w[y]===void 0&&(w[y]=g[y]);return{$$typeof:n,type:p,key:R,ref:B,props:w,_owner:l.current}}return Go.Fragment=o,Go.jsx=f,Go.jsxs=f,Go}var uh;function E0(){return uh||(uh=1,Mc.exports=k0()),Mc.exports}var h=E0(),k=wu();const Rp=Cp(k),C0=_0({__proto__:null,default:Rp},[k]);var Ra={},Fc={exports:{}},Ft={},$c={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function R0(){return dh||(dh=1,(function(r){function n(X,re){var J=X.length;X.push(re);e:for(;0<J;){var C=J-1>>>1,z=X[C];if(0<l(z,re))X[C]=re,X[J]=z,J=C;else break e}}function o(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var re=X[0],J=X.pop();if(J!==re){X[0]=J;e:for(var C=0,z=X.length,ue=z>>>1;C<ue;){var ye=2*(C+1)-1,we=X[ye],te=ye+1,ce=X[te];if(0>l(we,J))te<z&&0>l(ce,we)?(X[C]=ce,X[te]=J,C=te):(X[C]=we,X[ye]=J,C=ye);else if(te<z&&0>l(ce,J))X[C]=ce,X[te]=J,C=te;else break e}}return re}function l(X,re){var J=X.sortIndex-re.sortIndex;return J!==0?J:X.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],x=[],y=1,w=null,R=3,B=!1,D=!1,A=!1,I=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(X){for(var re=o(x);re!==null;){if(re.callback===null)s(x);else if(re.startTime<=X)s(x),re.sortIndex=re.expirationTime,n(g,re);else break;re=o(x)}}function U(X){if(A=!1,M(X),!D)if(o(g)!==null)D=!0,Xe(V);else{var re=o(x);re!==null&&Re(U,re.startTime-X)}}function V(X,re){D=!1,A&&(A=!1,N(_e),_e=-1),B=!0;var J=R;try{for(M(re),w=o(g);w!==null&&(!(w.expirationTime>re)||X&&!Ne());){var C=w.callback;if(typeof C=="function"){w.callback=null,R=w.priorityLevel;var z=C(w.expirationTime<=re);re=r.unstable_now(),typeof z=="function"?w.callback=z:w===o(g)&&s(g),M(re)}else s(g);w=o(g)}if(w!==null)var ue=!0;else{var ye=o(x);ye!==null&&Re(U,ye.startTime-re),ue=!1}return ue}finally{w=null,R=J,B=!1}}var G=!1,se=null,_e=-1,ve=5,le=-1;function Ne(){return!(r.unstable_now()-le<ve)}function De(){if(se!==null){var X=r.unstable_now();le=X;var re=!0;try{re=se(!0,X)}finally{re?Ce():(G=!1,se=null)}}else G=!1}var Ce;if(typeof T=="function")Ce=function(){T(De)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,it=Le.port2;Le.port1.onmessage=De,Ce=function(){it.postMessage(null)}}else Ce=function(){I(De,0)};function Xe(X){se=X,G||(G=!0,Ce())}function Re(X,re){_e=I(function(){X(r.unstable_now())},re)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){D||B||(D=!0,Xe(V))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return o(g)},r.unstable_next=function(X){switch(R){case 1:case 2:case 3:var re=3;break;default:re=R}var J=R;R=re;try{return X()}finally{R=J}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,re){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var J=R;R=X;try{return re()}finally{R=J}},r.unstable_scheduleCallback=function(X,re,J){var C=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?C+J:C):J=C,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=J+z,X={id:y++,callback:re,priorityLevel:X,startTime:J,expirationTime:z,sortIndex:-1},J>C?(X.sortIndex=J,n(x,X),o(g)===null&&X===o(x)&&(A?(N(_e),_e=-1):A=!0,Re(U,J-C))):(X.sortIndex=z,n(g,X),D||B||(D=!0,Xe(V))),X},r.unstable_shouldYield=Ne,r.unstable_wrapCallback=function(X){var re=R;return function(){var J=R;R=re;try{return X.apply(this,arguments)}finally{R=J}}}})(Bc)),Bc}var fh;function P0(){return fh||(fh=1,$c.exports=R0()),$c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function N0(){if(hh)return Ft;hh=1;var r=wu(),n=P0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function R(e){return g.call(w,e)?!0:g.call(y,e)?!1:x.test(e)?w[e]=!0:(y[e]=!0,!1)}function B(e,t,i,a){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D(e,t,i,a){if(t===null||typeof t>"u"||B(e,t,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,i,a,c,u,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=m}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(N,T);I[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(N,T);I[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(N,T);I[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,t,i,a){var c=I.hasOwnProperty(t)?I[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D(t,i,c,a)&&(i=null),a||c===null?R(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,a=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,a?e.setAttributeNS(a,t,i):e.setAttribute(t,i))))}var U=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),G=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),Ne=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),X=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,C;function z(e){if(C===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);C=t&&t[1]||""}return`
`+C+e}var ue=!1;function ye(e,t){if(!e||ue)return"";ue=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var a=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){a=O}e.call(t.prototype)}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var c=O.stack.split(`
`),u=a.stack.split(`
`),m=c.length-1,v=u.length-1;1<=m&&0<=v&&c[m]!==u[v];)v--;for(;1<=m&&0<=v;m--,v--)if(c[m]!==u[v]){if(m!==1||v!==1)do if(m--,v--,0>v||c[m]!==u[v]){var b=`
`+c[m].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=m&&0<=v);break}}}finally{ue=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?z(e):""}function we(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=ye(e.type,!1),e;case 11:return e=ye(e.type.render,!1),e;case 1:return e=ye(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case se:return"Fragment";case G:return"Portal";case ve:return"Profiler";case _e:return"StrictMode";case Ce:return"Suspense";case Le:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ne:return(e.displayName||"Context")+".Consumer";case le:return(e._context.displayName||"Context")+".Provider";case De:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ut(e){var t=Te(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function In(e){e._valueTracker||(e._valueTracker=ut(e))}function qe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=Te(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function dt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ge(e,t){var i=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function xn(e,t){var i=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;i=xe(t.value!=null?t.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function An(e,t){t=t.checked,t!=null&&M(e,"checked",t,!1)}function vt(e,t){An(e,t);var i=xe(t.value),a=t.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ke(e,t.type,i):t.hasOwnProperty("defaultValue")&&ke(e,t.type,xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pe(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function ke(e,t,i){(t!=="number"||dt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var et=Array.isArray;function ot(e,t,i,a){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&a&&(e[i].defaultSelected=!0)}else{for(i=""+xe(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Bt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dn(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(et(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:xe(i)}}function Ht(e,t){var i=xe(t.value),a=xe(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function Gn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var At,no=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,a,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(At=At||document.createElement("div"),At.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=At.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vs=["Webkit","ms","Moz","O"];Object.keys(ft).forEach(function(e){vs.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ft[t]=ft[e]})});function Ln(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||ft.hasOwnProperty(e)&&ft[e]?(""+t).trim():t+"px"}function Or(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=i.indexOf("--")===0,c=Ln(i,t[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,c):e[i]=c}}var ro=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jn(e,t){if(t){if(ro[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function Ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,wn=null,bn=null;function so(e){if(e=Do(e)){if(typeof oo!="function")throw Error(o(280));var t=e.stateNode;t&&(t=$s(t),oo(e.stateNode,e.type,t))}}function ao(e){wn?bn?bn.push(e):bn=[e]:wn=e}function Ar(){if(wn){var e=wn,t=bn;if(bn=wn=null,so(e),t)for(e=0;e<t.length;e++)so(t[e])}}function ws(e,t){return e(t)}function ui(){}var di=!1;function bs(e,t,i){if(di)return e(t,i);di=!0;try{return ws(e,t,i)}finally{di=!1,(wn!==null||bn!==null)&&(ui(),Ar())}}function Yn(e,t){var i=e.stateNode;if(i===null)return null;var a=$s(i);if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var _n=!1;if(p)try{var sn={};Object.defineProperty(sn,"passive",{get:function(){_n=!0}}),window.addEventListener("test",sn,sn),window.removeEventListener("test",sn,sn)}catch{_n=!1}function lo(e,t,i,a,c,u,m,v,b){var O=Array.prototype.slice.call(arguments,3);try{t.apply(i,O)}catch(W){this.onError(W)}}var zn=!1,fi=null,hi=!1,pi=null,nl={onError:function(e){zn=!0,fi=e}};function rl(e,t,i,a,c,u,m,v,b){zn=!1,fi=null,lo.apply(nl,arguments)}function co(e,t,i,a,c,u,m,v,b){if(rl.apply(this,arguments),zn){if(zn){var O=fi;zn=!1,fi=null}else throw Error(o(198));hi||(hi=!0,pi=O)}}function wt(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function uo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sn(e){if(wt(e)!==e)throw Error(o(188))}function fo(e){var t=e.alternate;if(!t){if(t=wt(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,a=t;;){var c=i.return;if(c===null)break;var u=c.alternate;if(u===null){if(a=c.return,a!==null){i=a;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===i)return Sn(c),e;if(u===a)return Sn(c),t;u=u.sibling}throw Error(o(188))}if(i.return!==a.return)i=c,a=u;else{for(var m=!1,v=c.child;v;){if(v===i){m=!0,i=c,a=u;break}if(v===a){m=!0,a=c,i=u;break}v=v.sibling}if(!m){for(v=u.child;v;){if(v===i){m=!0,i=u,a=c;break}if(v===a){m=!0,a=u,i=c;break}v=v.sibling}if(!m)throw Error(o(189))}}if(i.alternate!==a)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function ho(e){return e=fo(e),e!==null?po(e):null}function po(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=po(e);if(t!==null)return t;e=e.sibling}return null}var go=n.unstable_scheduleCallback,mo=n.unstable_cancelCallback,_s=n.unstable_shouldYield,_=n.unstable_requestPaint,$=n.unstable_now,Q=n.unstable_getCurrentPriorityLevel,ee=n.unstable_ImmediatePriority,ge=n.unstable_UserBlockingPriority,Oe=n.unstable_NormalPriority,Xt=n.unstable_LowPriority,an=n.unstable_IdlePriority,Je=null,kn=null;function Dg(e){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Je,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Mg,Lg=Math.log,zg=Math.LN2;function Mg(e){return e>>>=0,e===0?32:31-(Lg(e)/zg|0)|0}var Ss=64,ks=4194304;function yo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Es(e,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,c=e.suspendedLanes,u=e.pingedLanes,m=i&268435455;if(m!==0){var v=m&~c;v!==0?a=yo(v):(u&=m,u!==0&&(a=yo(u)))}else m=i&~c,m!==0?a=yo(m):u!==0&&(a=yo(u));if(a===0)return 0;if(t!==0&&t!==a&&(t&c)===0&&(c=a&-a,u=t&-t,c>=u||c===16&&(u&4194240)!==0))return t;if((a&4)!==0&&(a|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)i=31-ln(t),c=1<<i,a|=e[i],t&=~c;return a}function Ug(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fg(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes;0<u;){var m=31-ln(u),v=1<<m,b=c[m];b===-1?((v&i)===0||(v&a)!==0)&&(c[m]=Ug(v,t)):b<=t&&(e.expiredLanes|=v),u&=~v}}function il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Du(){var e=Ss;return Ss<<=1,(Ss&4194240)===0&&(Ss=64),e}function ol(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function xo(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ln(t),e[t]=i}function $g(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-ln(i),u=1<<c;t[c]=0,a[c]=-1,e[c]=-1,i&=~u}}function sl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-ln(i),c=1<<a;c&t|e[a]&t&&(e[a]|=t),i&=~c}}var Ie=0;function Lu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zu,al,Mu,Uu,Fu,ll=!1,Cs=[],Zn=null,er=null,tr=null,vo=new Map,wo=new Map,nr=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $u(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":vo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(t.pointerId)}}function bo(e,t,i,a,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:u,targetContainers:[c]},t!==null&&(t=Do(t),t!==null&&al(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Hg(e,t,i,a,c){switch(t){case"focusin":return Zn=bo(Zn,e,t,i,a,c),!0;case"dragenter":return er=bo(er,e,t,i,a,c),!0;case"mouseover":return tr=bo(tr,e,t,i,a,c),!0;case"pointerover":var u=c.pointerId;return vo.set(u,bo(vo.get(u)||null,e,t,i,a,c)),!0;case"gotpointercapture":return u=c.pointerId,wo.set(u,bo(wo.get(u)||null,e,t,i,a,c)),!0}return!1}function Bu(e){var t=Dr(e.target);if(t!==null){var i=wt(t);if(i!==null){if(t=i.tag,t===13){if(t=uo(i),t!==null){e.blockedOn=t,Fu(e.priority,function(){Mu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);io=a,i.target.dispatchEvent(a),io=null}else return t=Do(i),t!==null&&al(t),e.blockedOn=i,!1;t.shift()}return!0}function Hu(e,t,i){Rs(e)&&i.delete(t)}function Wg(){ll=!1,Zn!==null&&Rs(Zn)&&(Zn=null),er!==null&&Rs(er)&&(er=null),tr!==null&&Rs(tr)&&(tr=null),vo.forEach(Hu),wo.forEach(Hu)}function _o(e,t){e.blockedOn===t&&(e.blockedOn=null,ll||(ll=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Wg)))}function So(e){function t(c){return _o(c,e)}if(0<Cs.length){_o(Cs[0],e);for(var i=1;i<Cs.length;i++){var a=Cs[i];a.blockedOn===e&&(a.blockedOn=null)}}for(Zn!==null&&_o(Zn,e),er!==null&&_o(er,e),tr!==null&&_o(tr,e),vo.forEach(t),wo.forEach(t),i=0;i<nr.length;i++)a=nr[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<nr.length&&(i=nr[0],i.blockedOn===null);)Bu(i),i.blockedOn===null&&nr.shift()}var gi=U.ReactCurrentBatchConfig,Ps=!0;function Vg(e,t,i,a){var c=Ie,u=gi.transition;gi.transition=null;try{Ie=1,cl(e,t,i,a)}finally{Ie=c,gi.transition=u}}function qg(e,t,i,a){var c=Ie,u=gi.transition;gi.transition=null;try{Ie=4,cl(e,t,i,a)}finally{Ie=c,gi.transition=u}}function cl(e,t,i,a){if(Ps){var c=ul(e,t,i,a);if(c===null)Rl(e,t,a,Ns,i),$u(e,a);else if(Hg(c,e,t,i,a))a.stopPropagation();else if($u(e,a),t&4&&-1<Bg.indexOf(e)){for(;c!==null;){var u=Do(c);if(u!==null&&zu(u),u=ul(e,t,i,a),u===null&&Rl(e,t,a,Ns,i),u===c)break;c=u}c!==null&&a.stopPropagation()}else Rl(e,t,a,null,i)}}var Ns=null;function ul(e,t,i,a){if(Ns=null,e=Ir(a),e=Dr(e),e!==null)if(t=wt(e),t===null)e=null;else if(i=t.tag,i===13){if(e=uo(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ns=e,null}function Wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q()){case ee:return 1;case ge:return 4;case Oe:case Xt:return 16;case an:return 536870912;default:return 16}default:return 16}}var rr=null,dl=null,js=null;function Vu(){if(js)return js;var e,t=dl,i=t.length,a,c="value"in rr?rr.value:rr.textContent,u=c.length;for(e=0;e<i&&t[e]===c[e];e++);var m=i-e;for(a=1;a<=m&&t[i-a]===c[u-a];a++);return js=c.slice(e,1<a?1-a:void 0)}function Ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Os(){return!0}function qu(){return!1}function Wt(e){function t(i,a,c,u,m){this._reactName=i,this._targetInst=c,this.type=a,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(i=e[v],this[v]=i?i(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Os:qu,this.isPropagationStopped=qu,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Os)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Os)},persist:function(){},isPersistent:Os}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Wt(mi),ko=J({},mi,{view:0,detail:0}),Kg=Wt(ko),hl,pl,Eo,Is=J({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Eo&&(Eo&&e.type==="mousemove"?(hl=e.screenX-Eo.screenX,pl=e.screenY-Eo.screenY):pl=hl=0,Eo=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Ku=Wt(Is),Qg=J({},Is,{dataTransfer:0}),Xg=Wt(Qg),Gg=J({},ko,{relatedTarget:0}),gl=Wt(Gg),Jg=J({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Yg=Wt(Jg),Zg=J({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=Wt(Zg),tm=J({},mi,{data:0}),Qu=Wt(tm),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=im[e])?!!t[e]:!1}function ml(){return om}var sm=J({},ko,{key:function(e){if(e.key){var t=nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?Ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),am=Wt(sm),lm=J({},Is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=Wt(lm),cm=J({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),um=Wt(cm),dm=J({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),fm=Wt(dm),hm=J({},Is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=Wt(hm),gm=[9,13,27,32],yl=p&&"CompositionEvent"in window,Co=null;p&&"documentMode"in document&&(Co=document.documentMode);var mm=p&&"TextEvent"in window&&!Co,Gu=p&&(!yl||Co&&8<Co&&11>=Co),Ju=" ",Yu=!1;function Zu(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yi=!1;function ym(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Yu=!0,Ju);case"textInput":return e=t.data,e===Ju&&Yu?null:e;default:return null}}function xm(e,t){if(yi)return e==="compositionend"||!yl&&Zu(e,t)?(e=Vu(),js=dl=rr=null,yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gu&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function nd(e,t,i,a){ao(a),t=Ms(t,"onChange"),0<t.length&&(i=new fl("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var Ro=null,Po=null;function wm(e){wd(e,0)}function As(e){var t=_i(e);if(qe(t))return e}function bm(e,t){if(e==="change")return t}var rd=!1;if(p){var xl;if(p){var vl="oninput"in document;if(!vl){var id=document.createElement("div");id.setAttribute("oninput","return;"),vl=typeof id.oninput=="function"}xl=vl}else xl=!1;rd=xl&&(!document.documentMode||9<document.documentMode)}function od(){Ro&&(Ro.detachEvent("onpropertychange",sd),Po=Ro=null)}function sd(e){if(e.propertyName==="value"&&As(Po)){var t=[];nd(t,Po,e,Ir(e)),bs(wm,t)}}function _m(e,t,i){e==="focusin"?(od(),Ro=t,Po=i,Ro.attachEvent("onpropertychange",sd)):e==="focusout"&&od()}function Sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(Po)}function km(e,t){if(e==="click")return As(t)}function Em(e,t){if(e==="input"||e==="change")return As(t)}function Cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:Cm;function No(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var c=i[a];if(!g.call(t,c)||!cn(e[c],t[c]))return!1}return!0}function ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ld(e,t){var i=ad(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ad(i)}}function cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ud(){for(var e=window,t=dt();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=dt(e.document)}return t}function wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rm(e){var t=ud(),i=e.focusedElem,a=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&cd(i.ownerDocument.documentElement,i)){if(a!==null&&wl(i)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,u=Math.min(a.start,c);a=a.end===void 0?u:Math.min(a.end,c),!e.extend&&u>a&&(c=a,a=u,u=c),c=ld(i,u);var m=ld(i,a);c&&m&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),u>a?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pm=p&&"documentMode"in document&&11>=document.documentMode,xi=null,bl=null,jo=null,_l=!1;function dd(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;_l||xi==null||xi!==dt(a)||(a=xi,"selectionStart"in a&&wl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),jo&&No(jo,a)||(jo=a,a=Ms(bl,"onSelect"),0<a.length&&(t=new fl("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=xi)))}function Ds(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var vi={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionend:Ds("Transition","TransitionEnd")},Sl={},fd={};p&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Ls(e){if(Sl[e])return Sl[e];if(!vi[e])return e;var t=vi[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in fd)return Sl[e]=t[i];return e}var hd=Ls("animationend"),pd=Ls("animationiteration"),gd=Ls("animationstart"),md=Ls("transitionend"),yd=new Map,xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){yd.set(e,t),d(t,[e])}for(var kl=0;kl<xd.length;kl++){var El=xd[kl],Nm=El.toLowerCase(),jm=El[0].toUpperCase()+El.slice(1);ir(Nm,"on"+jm)}ir(hd,"onAnimationEnd"),ir(pd,"onAnimationIteration"),ir(gd,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(md,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function vd(e,t,i){var a=e.type||"unknown-event";e.currentTarget=i,co(a,t,void 0,e),e.currentTarget=null}function wd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],c=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var m=a.length-1;0<=m;m--){var v=a[m],b=v.instance,O=v.currentTarget;if(v=v.listener,b!==u&&c.isPropagationStopped())break e;vd(c,v,O),u=b}else for(m=0;m<a.length;m++){if(v=a[m],b=v.instance,O=v.currentTarget,v=v.listener,b!==u&&c.isPropagationStopped())break e;vd(c,v,O),u=b}}}if(hi)throw e=pi,hi=!1,pi=null,e}function ze(e,t){var i=t[Il];i===void 0&&(i=t[Il]=new Set);var a=e+"__bubble";i.has(a)||(bd(t,e,2,!1),i.add(a))}function Cl(e,t,i){var a=0;t&&(a|=4),bd(i,e,a,t)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Oo(e){if(!e[zs]){e[zs]=!0,s.forEach(function(i){i!=="selectionchange"&&(Tm.has(i)||Cl(i,!1,e),Cl(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zs]||(t[zs]=!0,Cl("selectionchange",!1,t))}}function bd(e,t,i,a){switch(Wu(t)){case 1:var c=Vg;break;case 4:c=qg;break;default:c=cl}i=c.bind(null,t,i,e),c=void 0,!_n||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Rl(e,t,i,a,c){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var v=a.stateNode.containerInfo;if(v===c||v.nodeType===8&&v.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var b=m.tag;if((b===3||b===4)&&(b=m.stateNode.containerInfo,b===c||b.nodeType===8&&b.parentNode===c))return;m=m.return}for(;v!==null;){if(m=Dr(v),m===null)return;if(b=m.tag,b===5||b===6){a=u=m;continue e}v=v.parentNode}}a=a.return}bs(function(){var O=u,W=Ir(i),q=[];e:{var H=yd.get(e);if(H!==void 0){var Z=fl,ie=e;switch(e){case"keypress":if(Ts(i)===0)break e;case"keydown":case"keyup":Z=am;break;case"focusin":ie="focus",Z=gl;break;case"focusout":ie="blur",Z=gl;break;case"beforeblur":case"afterblur":Z=gl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=um;break;case hd:case pd:case gd:Z=Yg;break;case md:Z=fm;break;case"scroll":Z=Kg;break;case"wheel":Z=pm;break;case"copy":case"cut":case"paste":Z=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Xu}var oe=(t&4)!==0,Ye=!oe&&e==="scroll",P=oe?H!==null?H+"Capture":null:H;oe=[];for(var E=O,j;E!==null;){j=E;var K=j.stateNode;if(j.tag===5&&K!==null&&(j=K,P!==null&&(K=Yn(E,P),K!=null&&oe.push(Io(E,K,j)))),Ye)break;E=E.return}0<oe.length&&(H=new Z(H,ie,null,i,W),q.push({event:H,listeners:oe}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",H&&i!==io&&(ie=i.relatedTarget||i.fromElement)&&(Dr(ie)||ie[Mn]))break e;if((Z||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,Z?(ie=i.relatedTarget||i.toElement,Z=O,ie=ie?Dr(ie):null,ie!==null&&(Ye=wt(ie),ie!==Ye||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(Z=null,ie=O),Z!==ie)){if(oe=Ku,K="onMouseLeave",P="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Xu,K="onPointerLeave",P="onPointerEnter",E="pointer"),Ye=Z==null?H:_i(Z),j=ie==null?H:_i(ie),H=new oe(K,E+"leave",Z,i,W),H.target=Ye,H.relatedTarget=j,K=null,Dr(W)===O&&(oe=new oe(P,E+"enter",ie,i,W),oe.target=j,oe.relatedTarget=Ye,K=oe),Ye=K,Z&&ie)t:{for(oe=Z,P=ie,E=0,j=oe;j;j=wi(j))E++;for(j=0,K=P;K;K=wi(K))j++;for(;0<E-j;)oe=wi(oe),E--;for(;0<j-E;)P=wi(P),j--;for(;E--;){if(oe===P||P!==null&&oe===P.alternate)break t;oe=wi(oe),P=wi(P)}oe=null}else oe=null;Z!==null&&_d(q,H,Z,oe,!1),ie!==null&&Ye!==null&&_d(q,Ye,ie,oe,!0)}}e:{if(H=O?_i(O):window,Z=H.nodeName&&H.nodeName.toLowerCase(),Z==="select"||Z==="input"&&H.type==="file")var ae=bm;else if(td(H))if(rd)ae=Em;else{ae=Sm;var de=_m}else(Z=H.nodeName)&&Z.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=km);if(ae&&(ae=ae(e,O))){nd(q,ae,i,W);break e}de&&de(e,H,O),e==="focusout"&&(de=H._wrapperState)&&de.controlled&&H.type==="number"&&ke(H,"number",H.value)}switch(de=O?_i(O):window,e){case"focusin":(td(de)||de.contentEditable==="true")&&(xi=de,bl=O,jo=null);break;case"focusout":jo=bl=xi=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,dd(q,i,W);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":dd(q,i,W)}var fe;if(yl)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else yi?Zu(e,i)&&(me="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(me="onCompositionStart");me&&(Gu&&i.locale!=="ko"&&(yi||me!=="onCompositionStart"?me==="onCompositionEnd"&&yi&&(fe=Vu()):(rr=W,dl="value"in rr?rr.value:rr.textContent,yi=!0)),de=Ms(O,me),0<de.length&&(me=new Qu(me,e,null,i,W),q.push({event:me,listeners:de}),fe?me.data=fe:(fe=ed(i),fe!==null&&(me.data=fe)))),(fe=mm?ym(e,i):xm(e,i))&&(O=Ms(O,"onBeforeInput"),0<O.length&&(W=new Qu("onBeforeInput","beforeinput",null,i,W),q.push({event:W,listeners:O}),W.data=fe))}wd(q,t)})}function Io(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ms(e,t){for(var i=t+"Capture",a=[];e!==null;){var c=e,u=c.stateNode;c.tag===5&&u!==null&&(c=u,u=Yn(e,i),u!=null&&a.unshift(Io(e,u,c)),u=Yn(e,t),u!=null&&a.push(Io(e,u,c))),e=e.return}return a}function wi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _d(e,t,i,a,c){for(var u=t._reactName,m=[];i!==null&&i!==a;){var v=i,b=v.alternate,O=v.stateNode;if(b!==null&&b===a)break;v.tag===5&&O!==null&&(v=O,c?(b=Yn(i,u),b!=null&&m.unshift(Io(i,b,v))):c||(b=Yn(i,u),b!=null&&m.push(Io(i,b,v)))),i=i.return}m.length!==0&&e.push({event:t,listeners:m})}var Om=/\r\n?/g,Im=/\u0000|\uFFFD/g;function Sd(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace(Im,"")}function Us(e,t,i){if(t=Sd(t),Sd(e)!==t&&i)throw Error(o(425))}function Fs(){}var Pl=null,Nl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,Am=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(e){return kd.resolve(null).then(e).catch(Lm)}:Tl;function Lm(e){setTimeout(function(){throw e})}function Ol(e,t){var i=t,a=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(a===0){e.removeChild(c),So(t);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=c}while(i);So(t)}function or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var bi=Math.random().toString(36).slice(2),En="__reactFiber$"+bi,Ao="__reactProps$"+bi,Mn="__reactContainer$"+bi,Il="__reactEvents$"+bi,zm="__reactListeners$"+bi,Mm="__reactHandles$"+bi;function Dr(e){var t=e[En];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Mn]||i[En]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Ed(e);e!==null;){if(i=e[En])return i;e=Ed(e)}return t}e=i,i=e.parentNode}return null}function Do(e){return e=e[En]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _i(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function $s(e){return e[Ao]||null}var Al=[],Si=-1;function sr(e){return{current:e}}function Me(e){0>Si||(e.current=Al[Si],Al[Si]=null,Si--)}function Ae(e,t){Si++,Al[Si]=e.current,e.current=t}var ar={},bt=sr(ar),Dt=sr(!1),Lr=ar;function ki(e,t){var i=e.type.contextTypes;if(!i)return ar;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},u;for(u in i)c[u]=t[u];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Lt(e){return e=e.childContextTypes,e!=null}function Bs(){Me(Dt),Me(bt)}function Cd(e,t,i){if(bt.current!==ar)throw Error(o(168));Ae(bt,t),Ae(Dt,i)}function Rd(e,t,i){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(o(108,ce(e)||"Unknown",c));return J({},i,a)}function Hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ar,Lr=bt.current,Ae(bt,e),Ae(Dt,Dt.current),!0}function Pd(e,t,i){var a=e.stateNode;if(!a)throw Error(o(169));i?(e=Rd(e,t,Lr),a.__reactInternalMemoizedMergedChildContext=e,Me(Dt),Me(bt),Ae(bt,e)):Me(Dt),Ae(Dt,i)}var Un=null,Ws=!1,Dl=!1;function Nd(e){Un===null?Un=[e]:Un.push(e)}function Um(e){Ws=!0,Nd(e)}function lr(){if(!Dl&&Un!==null){Dl=!0;var e=0,t=Ie;try{var i=Un;for(Ie=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}Un=null,Ws=!1}catch(c){throw Un!==null&&(Un=Un.slice(e+1)),go(ee,lr),c}finally{Ie=t,Dl=!1}}return null}var Ei=[],Ci=0,Vs=null,qs=0,Gt=[],Jt=0,zr=null,Fn=1,$n="";function Mr(e,t){Ei[Ci++]=qs,Ei[Ci++]=Vs,Vs=e,qs=t}function jd(e,t,i){Gt[Jt++]=Fn,Gt[Jt++]=$n,Gt[Jt++]=zr,zr=e;var a=Fn;e=$n;var c=32-ln(a)-1;a&=~(1<<c),i+=1;var u=32-ln(t)+c;if(30<u){var m=c-c%5;u=(a&(1<<m)-1).toString(32),a>>=m,c-=m,Fn=1<<32-ln(t)+c|i<<c|a,$n=u+e}else Fn=1<<u|i<<c|a,$n=e}function Ll(e){e.return!==null&&(Mr(e,1),jd(e,1,0))}function zl(e){for(;e===Vs;)Vs=Ei[--Ci],Ei[Ci]=null,qs=Ei[--Ci],Ei[Ci]=null;for(;e===zr;)zr=Gt[--Jt],Gt[Jt]=null,$n=Gt[--Jt],Gt[Jt]=null,Fn=Gt[--Jt],Gt[Jt]=null}var Vt=null,qt=null,Ue=!1,un=null;function Td(e,t){var i=tn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function Od(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,qt=or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=zr!==null?{id:Fn,overflow:$n}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=tn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Vt=e,qt=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(Ue){var t=qt;if(t){var i=t;if(!Od(e,t)){if(Ml(e))throw Error(o(418));t=or(i.nextSibling);var a=Vt;t&&Od(e,t)?Td(a,i):(e.flags=e.flags&-4097|2,Ue=!1,Vt=e)}}else{if(Ml(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ue=!1,Vt=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function Ks(e){if(e!==Vt)return!1;if(!Ue)return Id(e),Ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=qt)){if(Ml(e))throw Ad(),Error(o(418));for(;t;)Td(e,t),t=or(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){qt=or(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Vt?or(e.stateNode.nextSibling):null;return!0}function Ad(){for(var e=qt;e;)e=or(e.nextSibling)}function Ri(){qt=Vt=null,Ue=!1}function Fl(e){un===null?un=[e]:un.push(e)}var Fm=U.ReactCurrentBatchConfig;function Lo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var a=i.stateNode}if(!a)throw Error(o(147,e));var c=a,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(m){var v=c.refs;m===null?delete v[u]:v[u]=m},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function Qs(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dd(e){var t=e._init;return t(e._payload)}function Ld(e){function t(P,E){if(e){var j=P.deletions;j===null?(P.deletions=[E],P.flags|=16):j.push(E)}}function i(P,E){if(!e)return null;for(;E!==null;)t(P,E),E=E.sibling;return null}function a(P,E){for(P=new Map;E!==null;)E.key!==null?P.set(E.key,E):P.set(E.index,E),E=E.sibling;return P}function c(P,E){return P=mr(P,E),P.index=0,P.sibling=null,P}function u(P,E,j){return P.index=j,e?(j=P.alternate,j!==null?(j=j.index,j<E?(P.flags|=2,E):j):(P.flags|=2,E)):(P.flags|=1048576,E)}function m(P){return e&&P.alternate===null&&(P.flags|=2),P}function v(P,E,j,K){return E===null||E.tag!==6?(E=Tc(j,P.mode,K),E.return=P,E):(E=c(E,j),E.return=P,E)}function b(P,E,j,K){var ae=j.type;return ae===se?W(P,E,j.props.children,K,j.key):E!==null&&(E.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Xe&&Dd(ae)===E.type)?(K=c(E,j.props),K.ref=Lo(P,E,j),K.return=P,K):(K=xa(j.type,j.key,j.props,null,P.mode,K),K.ref=Lo(P,E,j),K.return=P,K)}function O(P,E,j,K){return E===null||E.tag!==4||E.stateNode.containerInfo!==j.containerInfo||E.stateNode.implementation!==j.implementation?(E=Oc(j,P.mode,K),E.return=P,E):(E=c(E,j.children||[]),E.return=P,E)}function W(P,E,j,K,ae){return E===null||E.tag!==7?(E=qr(j,P.mode,K,ae),E.return=P,E):(E=c(E,j),E.return=P,E)}function q(P,E,j){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Tc(""+E,P.mode,j),E.return=P,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case V:return j=xa(E.type,E.key,E.props,null,P.mode,j),j.ref=Lo(P,null,E),j.return=P,j;case G:return E=Oc(E,P.mode,j),E.return=P,E;case Xe:var K=E._init;return q(P,K(E._payload),j)}if(et(E)||re(E))return E=qr(E,P.mode,j,null),E.return=P,E;Qs(P,E)}return null}function H(P,E,j,K){var ae=E!==null?E.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ae!==null?null:v(P,E,""+j,K);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case V:return j.key===ae?b(P,E,j,K):null;case G:return j.key===ae?O(P,E,j,K):null;case Xe:return ae=j._init,H(P,E,ae(j._payload),K)}if(et(j)||re(j))return ae!==null?null:W(P,E,j,K,null);Qs(P,j)}return null}function Z(P,E,j,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number")return P=P.get(j)||null,v(E,P,""+K,ae);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case V:return P=P.get(K.key===null?j:K.key)||null,b(E,P,K,ae);case G:return P=P.get(K.key===null?j:K.key)||null,O(E,P,K,ae);case Xe:var de=K._init;return Z(P,E,j,de(K._payload),ae)}if(et(K)||re(K))return P=P.get(j)||null,W(E,P,K,ae,null);Qs(E,K)}return null}function ie(P,E,j,K){for(var ae=null,de=null,fe=E,me=E=0,gt=null;fe!==null&&me<j.length;me++){fe.index>me?(gt=fe,fe=null):gt=fe.sibling;var je=H(P,fe,j[me],K);if(je===null){fe===null&&(fe=gt);break}e&&fe&&je.alternate===null&&t(P,fe),E=u(je,E,me),de===null?ae=je:de.sibling=je,de=je,fe=gt}if(me===j.length)return i(P,fe),Ue&&Mr(P,me),ae;if(fe===null){for(;me<j.length;me++)fe=q(P,j[me],K),fe!==null&&(E=u(fe,E,me),de===null?ae=fe:de.sibling=fe,de=fe);return Ue&&Mr(P,me),ae}for(fe=a(P,fe);me<j.length;me++)gt=Z(fe,P,me,j[me],K),gt!==null&&(e&&gt.alternate!==null&&fe.delete(gt.key===null?me:gt.key),E=u(gt,E,me),de===null?ae=gt:de.sibling=gt,de=gt);return e&&fe.forEach(function(yr){return t(P,yr)}),Ue&&Mr(P,me),ae}function oe(P,E,j,K){var ae=re(j);if(typeof ae!="function")throw Error(o(150));if(j=ae.call(j),j==null)throw Error(o(151));for(var de=ae=null,fe=E,me=E=0,gt=null,je=j.next();fe!==null&&!je.done;me++,je=j.next()){fe.index>me?(gt=fe,fe=null):gt=fe.sibling;var yr=H(P,fe,je.value,K);if(yr===null){fe===null&&(fe=gt);break}e&&fe&&yr.alternate===null&&t(P,fe),E=u(yr,E,me),de===null?ae=yr:de.sibling=yr,de=yr,fe=gt}if(je.done)return i(P,fe),Ue&&Mr(P,me),ae;if(fe===null){for(;!je.done;me++,je=j.next())je=q(P,je.value,K),je!==null&&(E=u(je,E,me),de===null?ae=je:de.sibling=je,de=je);return Ue&&Mr(P,me),ae}for(fe=a(P,fe);!je.done;me++,je=j.next())je=Z(fe,P,me,je.value,K),je!==null&&(e&&je.alternate!==null&&fe.delete(je.key===null?me:je.key),E=u(je,E,me),de===null?ae=je:de.sibling=je,de=je);return e&&fe.forEach(function(v0){return t(P,v0)}),Ue&&Mr(P,me),ae}function Ye(P,E,j,K){if(typeof j=="object"&&j!==null&&j.type===se&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case V:e:{for(var ae=j.key,de=E;de!==null;){if(de.key===ae){if(ae=j.type,ae===se){if(de.tag===7){i(P,de.sibling),E=c(de,j.props.children),E.return=P,P=E;break e}}else if(de.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Xe&&Dd(ae)===de.type){i(P,de.sibling),E=c(de,j.props),E.ref=Lo(P,de,j),E.return=P,P=E;break e}i(P,de);break}else t(P,de);de=de.sibling}j.type===se?(E=qr(j.props.children,P.mode,K,j.key),E.return=P,P=E):(K=xa(j.type,j.key,j.props,null,P.mode,K),K.ref=Lo(P,E,j),K.return=P,P=K)}return m(P);case G:e:{for(de=j.key;E!==null;){if(E.key===de)if(E.tag===4&&E.stateNode.containerInfo===j.containerInfo&&E.stateNode.implementation===j.implementation){i(P,E.sibling),E=c(E,j.children||[]),E.return=P,P=E;break e}else{i(P,E);break}else t(P,E);E=E.sibling}E=Oc(j,P.mode,K),E.return=P,P=E}return m(P);case Xe:return de=j._init,Ye(P,E,de(j._payload),K)}if(et(j))return ie(P,E,j,K);if(re(j))return oe(P,E,j,K);Qs(P,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,E!==null&&E.tag===6?(i(P,E.sibling),E=c(E,j),E.return=P,P=E):(i(P,E),E=Tc(j,P.mode,K),E.return=P,P=E),m(P)):i(P,E)}return Ye}var Pi=Ld(!0),zd=Ld(!1),Xs=sr(null),Gs=null,Ni=null,$l=null;function Bl(){$l=Ni=Gs=null}function Hl(e){var t=Xs.current;Me(Xs),e._currentValue=t}function Wl(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function ji(e,t){Gs=e,$l=Ni=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(zt=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if($l!==e)if(e={context:e,memoizedValue:t,next:null},Ni===null){if(Gs===null)throw Error(o(308));Ni=e,Gs.dependencies={lanes:0,firstContext:e}}else Ni=Ni.next=e;return t}var Ur=null;function Vl(e){Ur===null?Ur=[e]:Ur.push(e)}function Md(e,t,i,a){var c=t.interleaved;return c===null?(i.next=i,Vl(t)):(i.next=c.next,c.next=i),t.interleaved=i,Bn(e,a)}function Bn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var cr=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ud(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Pe&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,Bn(e,i)}return c=a.interleaved,c===null?(t.next=t,Vl(a)):(t.next=c.next,c.next=t),a.interleaved=t,Bn(e,i)}function Js(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,sl(e,i)}}function Fd(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var c=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var m={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};u===null?c=u=m:u=u.next=m,i=i.next}while(i!==null);u===null?c=u=t:u=u.next=t}else c=u=t;i={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Ys(e,t,i,a){var c=e.updateQueue;cr=!1;var u=c.firstBaseUpdate,m=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var b=v,O=b.next;b.next=null,m===null?u=O:m.next=O,m=b;var W=e.alternate;W!==null&&(W=W.updateQueue,v=W.lastBaseUpdate,v!==m&&(v===null?W.firstBaseUpdate=O:v.next=O,W.lastBaseUpdate=b))}if(u!==null){var q=c.baseState;m=0,W=O=b=null,v=u;do{var H=v.lane,Z=v.eventTime;if((a&H)===H){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var ie=e,oe=v;switch(H=t,Z=i,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){q=ie.call(Z,q,H);break e}q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,H=typeof ie=="function"?ie.call(Z,q,H):ie,H==null)break e;q=J({},q,H);break e;case 2:cr=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,H=c.effects,H===null?c.effects=[v]:H.push(v))}else Z={eventTime:Z,lane:H,tag:v.tag,payload:v.payload,callback:v.callback,next:null},W===null?(O=W=Z,b=q):W=W.next=Z,m|=H;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;H=v,v=H.next,H.next=null,c.lastBaseUpdate=H,c.shared.pending=null}}while(!0);if(W===null&&(b=q),c.baseState=b,c.firstBaseUpdate=O,c.lastBaseUpdate=W,t=c.shared.interleaved,t!==null){c=t;do m|=c.lane,c=c.next;while(c!==t)}else u===null&&(c.shared.lanes=0);Br|=m,e.lanes=m,e.memoizedState=q}}function $d(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=i,typeof c!="function")throw Error(o(191,c));c.call(a)}}}var zo={},Cn=sr(zo),Mo=sr(zo),Uo=sr(zo);function Fr(e){if(e===zo)throw Error(o(174));return e}function Kl(e,t){switch(Ae(Uo,t),Ae(Mo,e),Ae(Cn,zo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=li(t,e)}Me(Cn),Ae(Cn,t)}function Ti(){Me(Cn),Me(Mo),Me(Uo)}function Bd(e){Fr(Uo.current);var t=Fr(Cn.current),i=li(t,e.type);t!==i&&(Ae(Mo,e),Ae(Cn,i))}function Ql(e){Mo.current===e&&(Me(Cn),Me(Mo))}var $e=sr(0);function Zs(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Gl(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var ea=U.ReactCurrentDispatcher,Jl=U.ReactCurrentBatchConfig,$r=0,Be=null,st=null,ht=null,ta=!1,Fo=!1,$o=0,$m=0;function _t(){throw Error(o(321))}function Yl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!cn(e[i],t[i]))return!1;return!0}function Zl(e,t,i,a,c,u){if($r=u,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ea.current=e===null||e.memoizedState===null?Vm:qm,e=i(a,c),Fo){u=0;do{if(Fo=!1,$o=0,25<=u)throw Error(o(301));u+=1,ht=st=null,t.updateQueue=null,ea.current=Km,e=i(a,c)}while(Fo)}if(ea.current=ia,t=st!==null&&st.next!==null,$r=0,ht=st=Be=null,ta=!1,t)throw Error(o(300));return e}function ec(){var e=$o!==0;return $o=0,e}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Be.memoizedState=ht=e:ht=ht.next=e,ht}function Zt(){if(st===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ht===null?Be.memoizedState:ht.next;if(t!==null)ht=t,st=e;else{if(e===null)throw Error(o(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ht===null?Be.memoizedState=ht=e:ht=ht.next=e}return ht}function Bo(e,t){return typeof t=="function"?t(e):t}function tc(e){var t=Zt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=st,c=a.baseQueue,u=i.pending;if(u!==null){if(c!==null){var m=c.next;c.next=u.next,u.next=m}a.baseQueue=c=u,i.pending=null}if(c!==null){u=c.next,a=a.baseState;var v=m=null,b=null,O=u;do{var W=O.lane;if(($r&W)===W)b!==null&&(b=b.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),a=O.hasEagerState?O.eagerState:e(a,O.action);else{var q={lane:W,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};b===null?(v=b=q,m=a):b=b.next=q,Be.lanes|=W,Br|=W}O=O.next}while(O!==null&&O!==u);b===null?m=a:b.next=v,cn(a,t.memoizedState)||(zt=!0),t.memoizedState=a,t.baseState=m,t.baseQueue=b,i.lastRenderedState=a}if(e=i.interleaved,e!==null){c=e;do u=c.lane,Be.lanes|=u,Br|=u,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function nc(e){var t=Zt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=i.dispatch,c=i.pending,u=t.memoizedState;if(c!==null){i.pending=null;var m=c=c.next;do u=e(u,m.action),m=m.next;while(m!==c);cn(u,t.memoizedState)||(zt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,a]}function Hd(){}function Wd(e,t){var i=Be,a=Zt(),c=t(),u=!cn(a.memoizedState,c);if(u&&(a.memoizedState=c,zt=!0),a=a.queue,rc(Kd.bind(null,i,a,e),[e]),a.getSnapshot!==t||u||ht!==null&&ht.memoizedState.tag&1){if(i.flags|=2048,Ho(9,qd.bind(null,i,a,c,t),void 0,null),pt===null)throw Error(o(349));($r&30)!==0||Vd(i,t,c)}return c}function Vd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function qd(e,t,i,a){t.value=i,t.getSnapshot=a,Qd(t)&&Xd(e)}function Kd(e,t,i){return i(function(){Qd(t)&&Xd(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!cn(e,i)}catch{return!0}}function Xd(e){var t=Bn(e,1);t!==null&&pn(t,e,1,-1)}function Gd(e){var t=Rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Wm.bind(null,Be,e),[t.memoizedState,e]}function Ho(e,t,i,a){return e={tag:e,create:t,destroy:i,deps:a,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e)),e}function Jd(){return Zt().memoizedState}function na(e,t,i,a){var c=Rn();Be.flags|=e,c.memoizedState=Ho(1|t,i,void 0,a===void 0?null:a)}function ra(e,t,i,a){var c=Zt();a=a===void 0?null:a;var u=void 0;if(st!==null){var m=st.memoizedState;if(u=m.destroy,a!==null&&Yl(a,m.deps)){c.memoizedState=Ho(t,i,u,a);return}}Be.flags|=e,c.memoizedState=Ho(1|t,i,u,a)}function Yd(e,t){return na(8390656,8,e,t)}function rc(e,t){return ra(2048,8,e,t)}function Zd(e,t){return ra(4,2,e,t)}function ef(e,t){return ra(4,4,e,t)}function tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nf(e,t,i){return i=i!=null?i.concat([e]):null,ra(4,4,tf.bind(null,t,e),i)}function ic(){}function rf(e,t){var i=Zt();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&Yl(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function of(e,t){var i=Zt();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&Yl(t,a[1])?a[0]:(e=e(),i.memoizedState=[e,t],e)}function sf(e,t,i){return($r&21)===0?(e.baseState&&(e.baseState=!1,zt=!0),e.memoizedState=i):(cn(i,t)||(i=Du(),Be.lanes|=i,Br|=i,e.baseState=!0),t)}function Bm(e,t){var i=Ie;Ie=i!==0&&4>i?i:4,e(!0);var a=Jl.transition;Jl.transition={};try{e(!1),t()}finally{Ie=i,Jl.transition=a}}function af(){return Zt().memoizedState}function Hm(e,t,i){var a=pr(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},lf(e))cf(t,i);else if(i=Md(e,t,i,a),i!==null){var c=Tt();pn(i,e,a,c),uf(i,t,a)}}function Wm(e,t,i){var a=pr(e),c={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(lf(e))cf(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,v=u(m,i);if(c.hasEagerState=!0,c.eagerState=v,cn(v,m)){var b=t.interleaved;b===null?(c.next=c,Vl(t)):(c.next=b.next,b.next=c),t.interleaved=c;return}}catch{}finally{}i=Md(e,t,c,a),i!==null&&(c=Tt(),pn(i,e,a,c),uf(i,t,a))}}function lf(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function cf(e,t){Fo=ta=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function uf(e,t,i){if((i&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,sl(e,i)}}var ia={readContext:Yt,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Vm={readContext:Yt,useCallback:function(e,t){return Rn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:Yd,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,na(4194308,4,tf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return na(4194308,4,e,t)},useInsertionEffect:function(e,t){return na(4,2,e,t)},useMemo:function(e,t){var i=Rn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var a=Rn();return t=i!==void 0?i(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Hm.bind(null,Be,e),[a.memoizedState,e]},useRef:function(e){var t=Rn();return e={current:e},t.memoizedState=e},useState:Gd,useDebugValue:ic,useDeferredValue:function(e){return Rn().memoizedState=e},useTransition:function(){var e=Gd(!1),t=e[0];return e=Bm.bind(null,e[1]),Rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var a=Be,c=Rn();if(Ue){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),pt===null)throw Error(o(349));($r&30)!==0||Vd(a,t,i)}c.memoizedState=i;var u={value:i,getSnapshot:t};return c.queue=u,Yd(Kd.bind(null,a,u,e),[e]),a.flags|=2048,Ho(9,qd.bind(null,a,u,i,t),void 0,null),i},useId:function(){var e=Rn(),t=pt.identifierPrefix;if(Ue){var i=$n,a=Fn;i=(a&~(1<<32-ln(a)-1)).toString(32)+i,t=":"+t+"R"+i,i=$o++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=$m++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qm={readContext:Yt,useCallback:rf,useContext:Yt,useEffect:rc,useImperativeHandle:nf,useInsertionEffect:Zd,useLayoutEffect:ef,useMemo:of,useReducer:tc,useRef:Jd,useState:function(){return tc(Bo)},useDebugValue:ic,useDeferredValue:function(e){var t=Zt();return sf(t,st.memoizedState,e)},useTransition:function(){var e=tc(Bo)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Wd,useId:af,unstable_isNewReconciler:!1},Km={readContext:Yt,useCallback:rf,useContext:Yt,useEffect:rc,useImperativeHandle:nf,useInsertionEffect:Zd,useLayoutEffect:ef,useMemo:of,useReducer:nc,useRef:Jd,useState:function(){return nc(Bo)},useDebugValue:ic,useDeferredValue:function(e){var t=Zt();return st===null?t.memoizedState=e:sf(t,st.memoizedState,e)},useTransition:function(){var e=nc(Bo)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Wd,useId:af,unstable_isNewReconciler:!1};function dn(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function oc(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:J({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var oa={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var a=Tt(),c=pr(e),u=Hn(a,c);u.payload=t,i!=null&&(u.callback=i),t=ur(e,u,c),t!==null&&(pn(t,e,c,a),Js(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=Tt(),c=pr(e),u=Hn(a,c);u.tag=1,u.payload=t,i!=null&&(u.callback=i),t=ur(e,u,c),t!==null&&(pn(t,e,c,a),Js(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Tt(),a=pr(e),c=Hn(i,a);c.tag=2,t!=null&&(c.callback=t),t=ur(e,c,a),t!==null&&(pn(t,e,a,i),Js(t,e,a))}};function df(e,t,i,a,c,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,m):t.prototype&&t.prototype.isPureReactComponent?!No(i,a)||!No(c,u):!0}function ff(e,t,i){var a=!1,c=ar,u=t.contextType;return typeof u=="object"&&u!==null?u=Yt(u):(c=Lt(t)?Lr:bt.current,a=t.contextTypes,u=(a=a!=null)?ki(e,c):ar),t=new t(i,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oa,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=u),t}function hf(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&oa.enqueueReplaceState(t,t.state,null)}function sc(e,t,i,a){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},ql(e);var u=t.contextType;typeof u=="object"&&u!==null?c.context=Yt(u):(u=Lt(t)?Lr:bt.current,c.context=ki(e,u)),c.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(oc(e,t,u,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&oa.enqueueReplaceState(c,c.state,null),Ys(e,i,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Oi(e,t){try{var i="",a=t;do i+=we(a),a=a.return;while(a);var c=i}catch(u){c=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:c,digest:null}}function ac(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function lc(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Qm=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,i){i=Hn(-1,i),i.tag=3,i.payload={element:null};var a=t.value;return i.callback=function(){fa||(fa=!0,Sc=a),lc(e,t)},i}function gf(e,t,i){i=Hn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;i.payload=function(){return a(c)},i.callback=function(){lc(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(i.callback=function(){lc(e,t),typeof a!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),i}function mf(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new Qm;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(i)||(c.add(i),e=l0.bind(null,e,t,i),t.then(e,e))}function yf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xf(e,t,i,a,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Hn(-1,1),t.tag=2,ur(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Xm=U.ReactCurrentOwner,zt=!1;function jt(e,t,i,a){t.child=e===null?zd(t,null,i,a):Pi(t,e.child,i,a)}function vf(e,t,i,a,c){i=i.render;var u=t.ref;return ji(t,c),a=Zl(e,t,i,a,u,c),i=ec(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Wn(e,t,c)):(Ue&&i&&Ll(t),t.flags|=1,jt(e,t,a,c),t.child)}function wf(e,t,i,a,c){if(e===null){var u=i.type;return typeof u=="function"&&!jc(u)&&u.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=u,bf(e,t,u,a,c)):(e=xa(i.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&c)===0){var m=u.memoizedProps;if(i=i.compare,i=i!==null?i:No,i(m,a)&&e.ref===t.ref)return Wn(e,t,c)}return t.flags|=1,e=mr(u,a),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,i,a,c){if(e!==null){var u=e.memoizedProps;if(No(u,a)&&e.ref===t.ref)if(zt=!1,t.pendingProps=a=u,(e.lanes&c)!==0)(e.flags&131072)!==0&&(zt=!0);else return t.lanes=e.lanes,Wn(e,t,c)}return cc(e,t,i,a,c)}function _f(e,t,i){var a=t.pendingProps,c=a.children,u=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Ai,Kt),Kt|=i;else{if((i&1073741824)===0)return e=u!==null?u.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(Ai,Kt),Kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=u!==null?u.baseLanes:i,Ae(Ai,Kt),Kt|=a}else u!==null?(a=u.baseLanes|i,t.memoizedState=null):a=i,Ae(Ai,Kt),Kt|=a;return jt(e,t,c,i),t.child}function Sf(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function cc(e,t,i,a,c){var u=Lt(i)?Lr:bt.current;return u=ki(t,u),ji(t,c),i=Zl(e,t,i,a,u,c),a=ec(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Wn(e,t,c)):(Ue&&a&&Ll(t),t.flags|=1,jt(e,t,i,c),t.child)}function kf(e,t,i,a,c){if(Lt(i)){var u=!0;Hs(t)}else u=!1;if(ji(t,c),t.stateNode===null)aa(e,t),ff(t,i,a),sc(t,i,a,c),a=!0;else if(e===null){var m=t.stateNode,v=t.memoizedProps;m.props=v;var b=m.context,O=i.contextType;typeof O=="object"&&O!==null?O=Yt(O):(O=Lt(i)?Lr:bt.current,O=ki(t,O));var W=i.getDerivedStateFromProps,q=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function";q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==a||b!==O)&&hf(t,m,a,O),cr=!1;var H=t.memoizedState;m.state=H,Ys(t,a,m,c),b=t.memoizedState,v!==a||H!==b||Dt.current||cr?(typeof W=="function"&&(oc(t,i,W,a),b=t.memoizedState),(v=cr||df(t,i,v,a,H,b,O))?(q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=b),m.props=a,m.state=b,m.context=O,a=v):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{m=t.stateNode,Ud(e,t),v=t.memoizedProps,O=t.type===t.elementType?v:dn(t.type,v),m.props=O,q=t.pendingProps,H=m.context,b=i.contextType,typeof b=="object"&&b!==null?b=Yt(b):(b=Lt(i)?Lr:bt.current,b=ki(t,b));var Z=i.getDerivedStateFromProps;(W=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==q||H!==b)&&hf(t,m,a,b),cr=!1,H=t.memoizedState,m.state=H,Ys(t,a,m,c);var ie=t.memoizedState;v!==q||H!==ie||Dt.current||cr?(typeof Z=="function"&&(oc(t,i,Z,a),ie=t.memoizedState),(O=cr||df(t,i,O,a,H,ie,b)||!1)?(W||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,ie,b),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,ie,b)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ie),m.props=a,m.state=ie,m.context=b,a=O):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),a=!1)}return uc(e,t,i,a,u,c)}function uc(e,t,i,a,c,u){Sf(e,t);var m=(t.flags&128)!==0;if(!a&&!m)return c&&Pd(t,i,!1),Wn(e,t,u);a=t.stateNode,Xm.current=t;var v=m&&typeof i.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&m?(t.child=Pi(t,e.child,null,u),t.child=Pi(t,null,v,u)):jt(e,t,v,u),t.memoizedState=a.state,c&&Pd(t,i,!0),t.child}function Ef(e){var t=e.stateNode;t.pendingContext?Cd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cd(e,t.context,!1),Kl(e,t.containerInfo)}function Cf(e,t,i,a,c){return Ri(),Fl(c),t.flags|=256,jt(e,t,i,a),t.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function fc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rf(e,t,i){var a=t.pendingProps,c=$e.current,u=!1,m=(t.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(c&2)!==0),v?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ae($e,c&1),e===null)return Ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=a.children,e=a.fallback,u?(a=t.mode,u=t.child,m={mode:"hidden",children:m},(a&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=m):u=va(m,a,0,null),e=qr(e,a,i,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=fc(i),t.memoizedState=dc,e):hc(t,m));if(c=e.memoizedState,c!==null&&(v=c.dehydrated,v!==null))return Gm(e,t,m,a,v,c,i);if(u){u=a.fallback,m=t.mode,c=e.child,v=c.sibling;var b={mode:"hidden",children:a.children};return(m&1)===0&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=b,t.deletions=null):(a=mr(c,b),a.subtreeFlags=c.subtreeFlags&14680064),v!==null?u=mr(v,u):(u=qr(u,m,i,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,a=u,u=t.child,m=e.child.memoizedState,m=m===null?fc(i):{baseLanes:m.baseLanes|i,cachePool:null,transitions:m.transitions},u.memoizedState=m,u.childLanes=e.childLanes&~i,t.memoizedState=dc,a}return u=e.child,e=u.sibling,a=mr(u,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=i),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a}function hc(e,t){return t=va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sa(e,t,i,a){return a!==null&&Fl(a),Pi(t,e.child,null,i),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gm(e,t,i,a,c,u,m){if(i)return t.flags&256?(t.flags&=-257,a=ac(Error(o(422))),sa(e,t,m,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=a.fallback,c=t.mode,a=va({mode:"visible",children:a.children},c,0,null),u=qr(u,c,m,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,(t.mode&1)!==0&&Pi(t,e.child,null,m),t.child.memoizedState=fc(m),t.memoizedState=dc,u);if((t.mode&1)===0)return sa(e,t,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var v=a.dgst;return a=v,u=Error(o(419)),a=ac(u,a,void 0),sa(e,t,m,a)}if(v=(m&e.childLanes)!==0,zt||v){if(a=pt,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|m))!==0?0:c,c!==0&&c!==u.retryLane&&(u.retryLane=c,Bn(e,c),pn(a,e,c,-1))}return Nc(),a=ac(Error(o(421))),sa(e,t,m,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=c0.bind(null,e),c._reactRetry=t,null):(e=u.treeContext,qt=or(c.nextSibling),Vt=t,Ue=!0,un=null,e!==null&&(Gt[Jt++]=Fn,Gt[Jt++]=$n,Gt[Jt++]=zr,Fn=e.id,$n=e.overflow,zr=t),t=hc(t,a.children),t.flags|=4096,t)}function Pf(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Wl(e.return,t,i)}function pc(e,t,i,a,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:c}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=i,u.tailMode=c)}function Nf(e,t,i){var a=t.pendingProps,c=a.revealOrder,u=a.tail;if(jt(e,t,a.children,i),a=$e.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pf(e,i,t);else if(e.tag===19)Pf(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ae($e,a),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&Zs(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),pc(t,!1,c,i,u);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Zs(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}pc(t,!0,i,null,u);break;case"together":pc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=mr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=mr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Jm(e,t,i){switch(t.tag){case 3:Ef(t),Ri();break;case 5:Bd(t);break;case 1:Lt(t.type)&&Hs(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;Ae(Xs,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ae($e,$e.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Rf(e,t,i):(Ae($e,$e.current&1),e=Wn(e,t,i),e!==null?e.sibling:null);Ae($e,$e.current&1);break;case 19:if(a=(i&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Nf(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ae($e,$e.current),a)break;return null;case 22:case 23:return t.lanes=0,_f(e,t,i)}return Wn(e,t,i)}var jf,gc,Tf,Of;jf=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},gc=function(){},Tf=function(e,t,i,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,Fr(Cn.current);var u=null;switch(i){case"input":c=Ge(e,c),a=Ge(e,a),u=[];break;case"select":c=J({},c,{value:void 0}),a=J({},a,{value:void 0}),u=[];break;case"textarea":c=Bt(e,c),a=Bt(e,a),u=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Fs)}Jn(i,a);var m;i=null;for(O in c)if(!a.hasOwnProperty(O)&&c.hasOwnProperty(O)&&c[O]!=null)if(O==="style"){var v=c[O];for(m in v)v.hasOwnProperty(m)&&(i||(i={}),i[m]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(l.hasOwnProperty(O)?u||(u=[]):(u=u||[]).push(O,null));for(O in a){var b=a[O];if(v=c!=null?c[O]:void 0,a.hasOwnProperty(O)&&b!==v&&(b!=null||v!=null))if(O==="style")if(v){for(m in v)!v.hasOwnProperty(m)||b&&b.hasOwnProperty(m)||(i||(i={}),i[m]="");for(m in b)b.hasOwnProperty(m)&&v[m]!==b[m]&&(i||(i={}),i[m]=b[m])}else i||(u||(u=[]),u.push(O,i)),i=b;else O==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,v=v?v.__html:void 0,b!=null&&v!==b&&(u=u||[]).push(O,b)):O==="children"?typeof b!="string"&&typeof b!="number"||(u=u||[]).push(O,""+b):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(l.hasOwnProperty(O)?(b!=null&&O==="onScroll"&&ze("scroll",e),u||v===b||(u=[])):(u=u||[]).push(O,b))}i&&(u=u||[]).push("style",i);var O=u;(t.updateQueue=O)&&(t.flags|=4)}},Of=function(e,t,i,a){i!==a&&(t.flags|=4)};function Wo(e,t){if(!Ue)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function Ym(e,t,i){var a=t.pendingProps;switch(zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return Lt(t.type)&&Bs(),St(t),null;case 3:return a=t.stateNode,Ti(),Me(Dt),Me(bt),Gl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,un!==null&&(Cc(un),un=null))),gc(e,t),St(t),null;case 5:Ql(t);var c=Fr(Uo.current);if(i=t.type,e!==null&&t.stateNode!=null)Tf(e,t,i,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(o(166));return St(t),null}if(e=Fr(Cn.current),Ks(t)){a=t.stateNode,i=t.type;var u=t.memoizedProps;switch(a[En]=t,a[Ao]=u,e=(t.mode&1)!==0,i){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(c=0;c<To.length;c++)ze(To[c],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":xn(a,u),ze("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!u.multiple},ze("invalid",a);break;case"textarea":Dn(a,u),ze("invalid",a)}Jn(i,u),c=null;for(var m in u)if(u.hasOwnProperty(m)){var v=u[m];m==="children"?typeof v=="string"?a.textContent!==v&&(u.suppressHydrationWarning!==!0&&Us(a.textContent,v,e),c=["children",v]):typeof v=="number"&&a.textContent!==""+v&&(u.suppressHydrationWarning!==!0&&Us(a.textContent,v,e),c=["children",""+v]):l.hasOwnProperty(m)&&v!=null&&m==="onScroll"&&ze("scroll",a)}switch(i){case"input":In(a),pe(a,u,!0);break;case"textarea":In(a),Gn(a);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(a.onclick=Fs)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tr(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=m.createElement(i,{is:a.is}):(e=m.createElement(i),i==="select"&&(m=e,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):e=m.createElementNS(e,i),e[En]=t,e[Ao]=a,jf(e,t,!1,!1),t.stateNode=e;e:{switch(m=ci(i,a),i){case"dialog":ze("cancel",e),ze("close",e),c=a;break;case"iframe":case"object":case"embed":ze("load",e),c=a;break;case"video":case"audio":for(c=0;c<To.length;c++)ze(To[c],e);c=a;break;case"source":ze("error",e),c=a;break;case"img":case"image":case"link":ze("error",e),ze("load",e),c=a;break;case"details":ze("toggle",e),c=a;break;case"input":xn(e,a),c=Ge(e,a),ze("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=J({},a,{value:void 0}),ze("invalid",e);break;case"textarea":Dn(e,a),c=Bt(e,a),ze("invalid",e);break;default:c=a}Jn(i,c),v=c;for(u in v)if(v.hasOwnProperty(u)){var b=v[u];u==="style"?Or(e,b):u==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&no(e,b)):u==="children"?typeof b=="string"?(i!=="textarea"||b!=="")&&vn(e,b):typeof b=="number"&&vn(e,""+b):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(l.hasOwnProperty(u)?b!=null&&u==="onScroll"&&ze("scroll",e):b!=null&&M(e,u,b,m))}switch(i){case"input":In(e),pe(e,a,!1);break;case"textarea":In(e),Gn(e);break;case"option":a.value!=null&&e.setAttribute("value",""+xe(a.value));break;case"select":e.multiple=!!a.multiple,u=a.value,u!=null?ot(e,!!a.multiple,u,!1):a.defaultValue!=null&&ot(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Fs)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)Of(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(i=Fr(Uo.current),Fr(Cn.current),Ks(t)){if(a=t.stateNode,i=t.memoizedProps,a[En]=t,(u=a.nodeValue!==i)&&(e=Vt,e!==null))switch(e.tag){case 3:Us(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Us(a.nodeValue,i,(e.mode&1)!==0)}u&&(t.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[En]=t,t.stateNode=a}return St(t),null;case 13:if(Me($e),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ue&&qt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ad(),Ri(),t.flags|=98560,u=!1;else if(u=Ks(t),a!==null&&a.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[En]=t}else Ri(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;St(t),u=!1}else un!==null&&(Cc(un),un=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||($e.current&1)!==0?at===0&&(at=3):Nc())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return Ti(),gc(e,t),e===null&&Oo(t.stateNode.containerInfo),St(t),null;case 10:return Hl(t.type._context),St(t),null;case 17:return Lt(t.type)&&Bs(),St(t),null;case 19:if(Me($e),u=t.memoizedState,u===null)return St(t),null;if(a=(t.flags&128)!==0,m=u.rendering,m===null)if(a)Wo(u,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=Zs(e),m!==null){for(t.flags|=128,Wo(u,!1),a=m.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=i,i=t.child;i!==null;)u=i,e=a,u.flags&=14680066,m=u.alternate,m===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=m.childLanes,u.lanes=m.lanes,u.child=m.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=m.memoizedProps,u.memoizedState=m.memoizedState,u.updateQueue=m.updateQueue,u.type=m.type,e=m.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ae($e,$e.current&1|2),t.child}e=e.sibling}u.tail!==null&&$()>Di&&(t.flags|=128,a=!0,Wo(u,!1),t.lanes=4194304)}else{if(!a)if(e=Zs(m),e!==null){if(t.flags|=128,a=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Wo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Ue)return St(t),null}else 2*$()-u.renderingStartTime>Di&&i!==1073741824&&(t.flags|=128,a=!0,Wo(u,!1),t.lanes=4194304);u.isBackwards?(m.sibling=t.child,t.child=m):(i=u.last,i!==null?i.sibling=m:t.child=m,u.last=m)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=$(),t.sibling=null,i=$e.current,Ae($e,a?i&1|2:i&1),t):(St(t),null);case 22:case 23:return Pc(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Kt&1073741824)!==0&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Zm(e,t){switch(zl(t),t.tag){case 1:return Lt(t.type)&&Bs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ti(),Me(Dt),Me(bt),Gl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(Me($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me($e),null;case 4:return Ti(),null;case 10:return Hl(t.type._context),null;case 22:case 23:return Pc(),null;case 24:return null;default:return null}}var la=!1,kt=!1,e0=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Ii(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){Ke(e,t,a)}else i.current=null}function mc(e,t,i){try{i()}catch(a){Ke(e,t,a)}}var If=!1;function t0(e,t){if(Pl=Ps,e=ud(),wl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var c=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var m=0,v=-1,b=-1,O=0,W=0,q=e,H=null;t:for(;;){for(var Z;q!==i||c!==0&&q.nodeType!==3||(v=m+c),q!==u||a!==0&&q.nodeType!==3||(b=m+a),q.nodeType===3&&(m+=q.nodeValue.length),(Z=q.firstChild)!==null;)H=q,q=Z;for(;;){if(q===e)break t;if(H===i&&++O===c&&(v=m),H===u&&++W===a&&(b=m),(Z=q.nextSibling)!==null)break;q=H,H=q.parentNode}q=Z}i=v===-1||b===-1?null:{start:v,end:b}}else i=null}i=i||{start:0,end:0}}else i=null;for(Nl={focusedElem:e,selectionRange:i},Ps=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var ie=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,Ye=ie.memoizedState,P=t.stateNode,E=P.getSnapshotBeforeUpdate(t.elementType===t.type?oe:dn(t.type,oe),Ye);P.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(K){Ke(t,t.return,K)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return ie=If,If=!1,ie}function Vo(e,t,i){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var u=c.destroy;c.destroy=void 0,u!==void 0&&mc(t,i,u)}c=c.next}while(c!==a)}}function ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==t)}}function yc(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[En],delete t[Ao],delete t[Il],delete t[zm],delete t[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Df(e){return e.tag===5||e.tag===3||e.tag===4}function Lf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Fs));else if(a!==4&&(e=e.child,e!==null))for(xc(e,t,i),e=e.sibling;e!==null;)xc(e,t,i),e=e.sibling}function vc(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(vc(e,t,i),e=e.sibling;e!==null;)vc(e,t,i),e=e.sibling}var yt=null,fn=!1;function dr(e,t,i){for(i=i.child;i!==null;)zf(e,t,i),i=i.sibling}function zf(e,t,i){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Je,i)}catch{}switch(i.tag){case 5:kt||Ii(i,t);case 6:var a=yt,c=fn;yt=null,dr(e,t,i),yt=a,fn=c,yt!==null&&(fn?(e=yt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):yt.removeChild(i.stateNode));break;case 18:yt!==null&&(fn?(e=yt,i=i.stateNode,e.nodeType===8?Ol(e.parentNode,i):e.nodeType===1&&Ol(e,i),So(e)):Ol(yt,i.stateNode));break;case 4:a=yt,c=fn,yt=i.stateNode.containerInfo,fn=!0,dr(e,t,i),yt=a,fn=c;break;case 0:case 11:case 14:case 15:if(!kt&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var u=c,m=u.destroy;u=u.tag,m!==void 0&&((u&2)!==0||(u&4)!==0)&&mc(i,t,m),c=c.next}while(c!==a)}dr(e,t,i);break;case 1:if(!kt&&(Ii(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(v){Ke(i,t,v)}dr(e,t,i);break;case 21:dr(e,t,i);break;case 22:i.mode&1?(kt=(a=kt)||i.memoizedState!==null,dr(e,t,i),kt=a):dr(e,t,i);break;default:dr(e,t,i)}}function Mf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new e0),t.forEach(function(a){var c=u0.bind(null,e,a);i.has(a)||(i.add(a),a.then(c,c))})}}function hn(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];try{var u=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 5:yt=v.stateNode,fn=!1;break e;case 3:yt=v.stateNode.containerInfo,fn=!0;break e;case 4:yt=v.stateNode.containerInfo,fn=!0;break e}v=v.return}if(yt===null)throw Error(o(160));zf(u,m,c),yt=null,fn=!1;var b=c.alternate;b!==null&&(b.return=null),c.return=null}catch(O){Ke(c,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uf(t,e),t=t.sibling}function Uf(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(t,e),Pn(e),a&4){try{Vo(3,e,e.return),ca(3,e)}catch(oe){Ke(e,e.return,oe)}try{Vo(5,e,e.return)}catch(oe){Ke(e,e.return,oe)}}break;case 1:hn(t,e),Pn(e),a&512&&i!==null&&Ii(i,i.return);break;case 5:if(hn(t,e),Pn(e),a&512&&i!==null&&Ii(i,i.return),e.flags&32){var c=e.stateNode;try{vn(c,"")}catch(oe){Ke(e,e.return,oe)}}if(a&4&&(c=e.stateNode,c!=null)){var u=e.memoizedProps,m=i!==null?i.memoizedProps:u,v=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{v==="input"&&u.type==="radio"&&u.name!=null&&An(c,u),ci(v,m);var O=ci(v,u);for(m=0;m<b.length;m+=2){var W=b[m],q=b[m+1];W==="style"?Or(c,q):W==="dangerouslySetInnerHTML"?no(c,q):W==="children"?vn(c,q):M(c,W,q,O)}switch(v){case"input":vt(c,u);break;case"textarea":Ht(c,u);break;case"select":var H=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!u.multiple;var Z=u.value;Z!=null?ot(c,!!u.multiple,Z,!1):H!==!!u.multiple&&(u.defaultValue!=null?ot(c,!!u.multiple,u.defaultValue,!0):ot(c,!!u.multiple,u.multiple?[]:"",!1))}c[Ao]=u}catch(oe){Ke(e,e.return,oe)}}break;case 6:if(hn(t,e),Pn(e),a&4){if(e.stateNode===null)throw Error(o(162));c=e.stateNode,u=e.memoizedProps;try{c.nodeValue=u}catch(oe){Ke(e,e.return,oe)}}break;case 3:if(hn(t,e),Pn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{So(t.containerInfo)}catch(oe){Ke(e,e.return,oe)}break;case 4:hn(t,e),Pn(e);break;case 13:hn(t,e),Pn(e),c=e.child,c.flags&8192&&(u=c.memoizedState!==null,c.stateNode.isHidden=u,!u||c.alternate!==null&&c.alternate.memoizedState!==null||(_c=$())),a&4&&Mf(e);break;case 22:if(W=i!==null&&i.memoizedState!==null,e.mode&1?(kt=(O=kt)||W,hn(t,e),kt=O):hn(t,e),Pn(e),a&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!W&&(e.mode&1)!==0)for(ne=e,W=e.child;W!==null;){for(q=ne=W;ne!==null;){switch(H=ne,Z=H.child,H.tag){case 0:case 11:case 14:case 15:Vo(4,H,H.return);break;case 1:Ii(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){a=H,i=H.return;try{t=a,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(oe){Ke(a,i,oe)}}break;case 5:Ii(H,H.return);break;case 22:if(H.memoizedState!==null){Bf(q);continue}}Z!==null?(Z.return=H,ne=Z):Bf(q)}W=W.sibling}e:for(W=null,q=e;;){if(q.tag===5){if(W===null){W=q;try{c=q.stateNode,O?(u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(v=q.stateNode,b=q.memoizedProps.style,m=b!=null&&b.hasOwnProperty("display")?b.display:null,v.style.display=Ln("display",m))}catch(oe){Ke(e,e.return,oe)}}}else if(q.tag===6){if(W===null)try{q.stateNode.nodeValue=O?"":q.memoizedProps}catch(oe){Ke(e,e.return,oe)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===e)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===e)break e;for(;q.sibling===null;){if(q.return===null||q.return===e)break e;W===q&&(W=null),q=q.return}W===q&&(W=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:hn(t,e),Pn(e),a&4&&Mf(e);break;case 21:break;default:hn(t,e),Pn(e)}}function Pn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Df(i)){var a=i;break e}i=i.return}throw Error(o(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(vn(c,""),a.flags&=-33);var u=Lf(e);vc(e,u,c);break;case 3:case 4:var m=a.stateNode.containerInfo,v=Lf(e);xc(e,v,m);break;default:throw Error(o(161))}}catch(b){Ke(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n0(e,t,i){ne=e,Ff(e)}function Ff(e,t,i){for(var a=(e.mode&1)!==0;ne!==null;){var c=ne,u=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||la;if(!m){var v=c.alternate,b=v!==null&&v.memoizedState!==null||kt;v=la;var O=kt;if(la=m,(kt=b)&&!O)for(ne=c;ne!==null;)m=ne,b=m.child,m.tag===22&&m.memoizedState!==null?Hf(c):b!==null?(b.return=m,ne=b):Hf(c);for(;u!==null;)ne=u,Ff(u),u=u.sibling;ne=c,la=v,kt=O}$f(e)}else(c.subtreeFlags&8772)!==0&&u!==null?(u.return=c,ne=u):$f(e)}}function $f(e){for(;ne!==null;){var t=ne;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:kt||ca(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!kt)if(i===null)a.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:dn(t.type,i.memoizedProps);a.componentDidUpdate(c,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&$d(t,u,a);break;case 3:var m=t.updateQueue;if(m!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}$d(t,m,i)}break;case 5:var v=t.stateNode;if(i===null&&t.flags&4){i=v;var b=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&i.focus();break;case"img":b.src&&(i.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var W=O.memoizedState;if(W!==null){var q=W.dehydrated;q!==null&&So(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}kt||t.flags&512&&yc(t)}catch(H){Ke(t,t.return,H)}}if(t===e){ne=null;break}if(i=t.sibling,i!==null){i.return=t.return,ne=i;break}ne=t.return}}function Bf(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var i=t.sibling;if(i!==null){i.return=t.return,ne=i;break}ne=t.return}}function Hf(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{ca(4,t)}catch(b){Ke(t,i,b)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(b){Ke(t,c,b)}}var u=t.return;try{yc(t)}catch(b){Ke(t,u,b)}break;case 5:var m=t.return;try{yc(t)}catch(b){Ke(t,m,b)}}}catch(b){Ke(t,t.return,b)}if(t===e){ne=null;break}var v=t.sibling;if(v!==null){v.return=t.return,ne=v;break}ne=t.return}}var r0=Math.ceil,ua=U.ReactCurrentDispatcher,wc=U.ReactCurrentOwner,en=U.ReactCurrentBatchConfig,Pe=0,pt=null,tt=null,xt=0,Kt=0,Ai=sr(0),at=0,qo=null,Br=0,da=0,bc=0,Ko=null,Mt=null,_c=0,Di=1/0,Vn=null,fa=!1,Sc=null,fr=null,ha=!1,hr=null,pa=0,Qo=0,kc=null,ga=-1,ma=0;function Tt(){return(Pe&6)!==0?$():ga!==-1?ga:ga=$()}function pr(e){return(e.mode&1)===0?1:(Pe&2)!==0&&xt!==0?xt&-xt:Fm.transition!==null?(ma===0&&(ma=Du()),ma):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:Wu(e.type)),e)}function pn(e,t,i,a){if(50<Qo)throw Qo=0,kc=null,Error(o(185));xo(e,i,a),((Pe&2)===0||e!==pt)&&(e===pt&&((Pe&2)===0&&(da|=i),at===4&&gr(e,xt)),Ut(e,a),i===1&&Pe===0&&(t.mode&1)===0&&(Di=$()+500,Ws&&lr()))}function Ut(e,t){var i=e.callbackNode;Fg(e,t);var a=Es(e,e===pt?xt:0);if(a===0)i!==null&&mo(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(i!=null&&mo(i),t===1)e.tag===0?Um(Vf.bind(null,e)):Nd(Vf.bind(null,e)),Dm(function(){(Pe&6)===0&&lr()}),i=null;else{switch(Lu(a)){case 1:i=ee;break;case 4:i=ge;break;case 16:i=Oe;break;case 536870912:i=an;break;default:i=Oe}i=Zf(i,Wf.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Wf(e,t){if(ga=-1,ma=0,(Pe&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Li()&&e.callbackNode!==i)return null;var a=Es(e,e===pt?xt:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=ya(e,a);else{t=a;var c=Pe;Pe|=2;var u=Kf();(pt!==e||xt!==t)&&(Vn=null,Di=$()+500,Wr(e,t));do try{s0();break}catch(v){qf(e,v)}while(!0);Bl(),ua.current=u,Pe=c,tt!==null?t=0:(pt=null,xt=0,t=at)}if(t!==0){if(t===2&&(c=il(e),c!==0&&(a=c,t=Ec(e,c))),t===1)throw i=qo,Wr(e,0),gr(e,a),Ut(e,$()),i;if(t===6)gr(e,a);else{if(c=e.current.alternate,(a&30)===0&&!i0(c)&&(t=ya(e,a),t===2&&(u=il(e),u!==0&&(a=u,t=Ec(e,u))),t===1))throw i=qo,Wr(e,0),gr(e,a),Ut(e,$()),i;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(o(345));case 2:Vr(e,Mt,Vn);break;case 3:if(gr(e,a),(a&130023424)===a&&(t=_c+500-$(),10<t)){if(Es(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){Tt(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Tl(Vr.bind(null,e,Mt,Vn),t);break}Vr(e,Mt,Vn);break;case 4:if(gr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var m=31-ln(a);u=1<<m,m=t[m],m>c&&(c=m),a&=~u}if(a=c,a=$()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*r0(a/1960))-a,10<a){e.timeoutHandle=Tl(Vr.bind(null,e,Mt,Vn),a);break}Vr(e,Mt,Vn);break;case 5:Vr(e,Mt,Vn);break;default:throw Error(o(329))}}}return Ut(e,$()),e.callbackNode===i?Wf.bind(null,e):null}function Ec(e,t){var i=Ko;return e.current.memoizedState.isDehydrated&&(Wr(e,t).flags|=256),e=ya(e,t),e!==2&&(t=Mt,Mt=i,t!==null&&Cc(t)),e}function Cc(e){Mt===null?Mt=e:Mt.push.apply(Mt,e)}function i0(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var c=i[a],u=c.getSnapshot;c=c.value;try{if(!cn(u(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gr(e,t){for(t&=~bc,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-ln(t),a=1<<i;e[i]=-1,t&=~a}}function Vf(e){if((Pe&6)!==0)throw Error(o(327));Li();var t=Es(e,0);if((t&1)===0)return Ut(e,$()),null;var i=ya(e,t);if(e.tag!==0&&i===2){var a=il(e);a!==0&&(t=a,i=Ec(e,a))}if(i===1)throw i=qo,Wr(e,0),gr(e,t),Ut(e,$()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vr(e,Mt,Vn),Ut(e,$()),null}function Rc(e,t){var i=Pe;Pe|=1;try{return e(t)}finally{Pe=i,Pe===0&&(Di=$()+500,Ws&&lr())}}function Hr(e){hr!==null&&hr.tag===0&&(Pe&6)===0&&Li();var t=Pe;Pe|=1;var i=en.transition,a=Ie;try{if(en.transition=null,Ie=1,e)return e()}finally{Ie=a,en.transition=i,Pe=t,(Pe&6)===0&&lr()}}function Pc(){Kt=Ai.current,Me(Ai)}function Wr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Am(i)),tt!==null)for(i=tt.return;i!==null;){var a=i;switch(zl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Bs();break;case 3:Ti(),Me(Dt),Me(bt),Gl();break;case 5:Ql(a);break;case 4:Ti();break;case 13:Me($e);break;case 19:Me($e);break;case 10:Hl(a.type._context);break;case 22:case 23:Pc()}i=i.return}if(pt=e,tt=e=mr(e.current,null),xt=Kt=t,at=0,qo=null,bc=da=Br=0,Mt=Ko=null,Ur!==null){for(t=0;t<Ur.length;t++)if(i=Ur[t],a=i.interleaved,a!==null){i.interleaved=null;var c=a.next,u=i.pending;if(u!==null){var m=u.next;u.next=c,a.next=m}i.pending=a}Ur=null}return e}function qf(e,t){do{var i=tt;try{if(Bl(),ea.current=ia,ta){for(var a=Be.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}ta=!1}if($r=0,ht=st=Be=null,Fo=!1,$o=0,wc.current=null,i===null||i.return===null){at=1,qo=t,tt=null;break}e:{var u=e,m=i.return,v=i,b=t;if(t=xt,v.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var O=b,W=v,q=W.tag;if((W.mode&1)===0&&(q===0||q===11||q===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=yf(m);if(Z!==null){Z.flags&=-257,xf(Z,m,v,u,t),Z.mode&1&&mf(u,O,t),t=Z,b=O;var ie=t.updateQueue;if(ie===null){var oe=new Set;oe.add(b),t.updateQueue=oe}else ie.add(b);break e}else{if((t&1)===0){mf(u,O,t),Nc();break e}b=Error(o(426))}}else if(Ue&&v.mode&1){var Ye=yf(m);if(Ye!==null){(Ye.flags&65536)===0&&(Ye.flags|=256),xf(Ye,m,v,u,t),Fl(Oi(b,v));break e}}u=b=Oi(b,v),at!==4&&(at=2),Ko===null?Ko=[u]:Ko.push(u),u=m;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var P=pf(u,b,t);Fd(u,P);break e;case 1:v=b;var E=u.type,j=u.stateNode;if((u.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(fr===null||!fr.has(j)))){u.flags|=65536,t&=-t,u.lanes|=t;var K=gf(u,v,t);Fd(u,K);break e}}u=u.return}while(u!==null)}Xf(i)}catch(ae){t=ae,tt===i&&i!==null&&(tt=i=i.return);continue}break}while(!0)}function Kf(){var e=ua.current;return ua.current=ia,e===null?ia:e}function Nc(){(at===0||at===3||at===2)&&(at=4),pt===null||(Br&268435455)===0&&(da&268435455)===0||gr(pt,xt)}function ya(e,t){var i=Pe;Pe|=2;var a=Kf();(pt!==e||xt!==t)&&(Vn=null,Wr(e,t));do try{o0();break}catch(c){qf(e,c)}while(!0);if(Bl(),Pe=i,ua.current=a,tt!==null)throw Error(o(261));return pt=null,xt=0,at}function o0(){for(;tt!==null;)Qf(tt)}function s0(){for(;tt!==null&&!_s();)Qf(tt)}function Qf(e){var t=Yf(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Xf(e):tt=t,wc.current=null}function Xf(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=Ym(i,t,Kt),i!==null){tt=i;return}}else{if(i=Zm(i,t),i!==null){i.flags&=32767,tt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,tt=null;return}}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);at===0&&(at=5)}function Vr(e,t,i){var a=Ie,c=en.transition;try{en.transition=null,Ie=1,a0(e,t,i,a)}finally{en.transition=c,Ie=a}return null}function a0(e,t,i,a){do Li();while(hr!==null);if((Pe&6)!==0)throw Error(o(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=i.lanes|i.childLanes;if($g(e,u),e===pt&&(tt=pt=null,xt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||ha||(ha=!0,Zf(Oe,function(){return Li(),null})),u=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||u){u=en.transition,en.transition=null;var m=Ie;Ie=1;var v=Pe;Pe|=4,wc.current=null,t0(e,i),Uf(i,e),Rm(Nl),Ps=!!Pl,Nl=Pl=null,e.current=i,n0(i),_(),Pe=v,Ie=m,en.transition=u}else e.current=i;if(ha&&(ha=!1,hr=e,pa=c),u=e.pendingLanes,u===0&&(fr=null),Dg(i.stateNode),Ut(e,$()),t!==null)for(a=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],a(c.value,{componentStack:c.stack,digest:c.digest});if(fa)throw fa=!1,e=Sc,Sc=null,e;return(pa&1)!==0&&e.tag!==0&&Li(),u=e.pendingLanes,(u&1)!==0?e===kc?Qo++:(Qo=0,kc=e):Qo=0,lr(),null}function Li(){if(hr!==null){var e=Lu(pa),t=en.transition,i=Ie;try{if(en.transition=null,Ie=16>e?16:e,hr===null)var a=!1;else{if(e=hr,hr=null,pa=0,(Pe&6)!==0)throw Error(o(331));var c=Pe;for(Pe|=4,ne=e.current;ne!==null;){var u=ne,m=u.child;if((ne.flags&16)!==0){var v=u.deletions;if(v!==null){for(var b=0;b<v.length;b++){var O=v[b];for(ne=O;ne!==null;){var W=ne;switch(W.tag){case 0:case 11:case 15:Vo(8,W,u)}var q=W.child;if(q!==null)q.return=W,ne=q;else for(;ne!==null;){W=ne;var H=W.sibling,Z=W.return;if(Af(W),W===O){ne=null;break}if(H!==null){H.return=Z,ne=H;break}ne=Z}}}var ie=u.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var Ye=oe.sibling;oe.sibling=null,oe=Ye}while(oe!==null)}}ne=u}}if((u.subtreeFlags&2064)!==0&&m!==null)m.return=u,ne=m;else e:for(;ne!==null;){if(u=ne,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Vo(9,u,u.return)}var P=u.sibling;if(P!==null){P.return=u.return,ne=P;break e}ne=u.return}}var E=e.current;for(ne=E;ne!==null;){m=ne;var j=m.child;if((m.subtreeFlags&2064)!==0&&j!==null)j.return=m,ne=j;else e:for(m=E;ne!==null;){if(v=ne,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:ca(9,v)}}catch(ae){Ke(v,v.return,ae)}if(v===m){ne=null;break e}var K=v.sibling;if(K!==null){K.return=v.return,ne=K;break e}ne=v.return}}if(Pe=c,lr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Je,e)}catch{}a=!0}return a}finally{Ie=i,en.transition=t}}return!1}function Gf(e,t,i){t=Oi(i,t),t=pf(e,t,1),e=ur(e,t,1),t=Tt(),e!==null&&(xo(e,1,t),Ut(e,t))}function Ke(e,t,i){if(e.tag===3)Gf(e,e,i);else for(;t!==null;){if(t.tag===3){Gf(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fr===null||!fr.has(a))){e=Oi(i,e),e=gf(t,e,1),t=ur(t,e,1),e=Tt(),t!==null&&(xo(t,1,e),Ut(t,e));break}}t=t.return}}function l0(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),t=Tt(),e.pingedLanes|=e.suspendedLanes&i,pt===e&&(xt&i)===i&&(at===4||at===3&&(xt&130023424)===xt&&500>$()-_c?Wr(e,0):bc|=i),Ut(e,t)}function Jf(e,t){t===0&&((e.mode&1)===0?t=1:(t=ks,ks<<=1,(ks&130023424)===0&&(ks=4194304)));var i=Tt();e=Bn(e,t),e!==null&&(xo(e,t,i),Ut(e,i))}function c0(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Jf(e,i)}function u0(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(t),Jf(e,i)}var Yf;Yf=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)zt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return zt=!1,Jm(e,t,i);zt=(e.flags&131072)!==0}else zt=!1,Ue&&(t.flags&1048576)!==0&&jd(t,qs,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;aa(e,t),e=t.pendingProps;var c=ki(t,bt.current);ji(t,i),c=Zl(null,t,a,e,c,i);var u=ec();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lt(a)?(u=!0,Hs(t)):u=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ql(t),c.updater=oa,t.stateNode=c,c._reactInternals=t,sc(t,a,e,i),t=uc(null,t,a,!0,u,i)):(t.tag=0,Ue&&u&&Ll(t),jt(null,t,c,i),t=t.child),t;case 16:a=t.elementType;e:{switch(aa(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=f0(a),e=dn(a,e),c){case 0:t=cc(null,t,a,e,i);break e;case 1:t=kf(null,t,a,e,i);break e;case 11:t=vf(null,t,a,e,i);break e;case 14:t=wf(null,t,a,dn(a.type,e),i);break e}throw Error(o(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:dn(a,c),cc(e,t,a,c,i);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:dn(a,c),kf(e,t,a,c,i);case 3:e:{if(Ef(t),e===null)throw Error(o(387));a=t.pendingProps,u=t.memoizedState,c=u.element,Ud(e,t),Ys(t,a,null,i);var m=t.memoizedState;if(a=m.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){c=Oi(Error(o(423)),t),t=Cf(e,t,a,i,c);break e}else if(a!==c){c=Oi(Error(o(424)),t),t=Cf(e,t,a,i,c);break e}else for(qt=or(t.stateNode.containerInfo.firstChild),Vt=t,Ue=!0,un=null,i=zd(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ri(),a===c){t=Wn(e,t,i);break e}jt(e,t,a,i)}t=t.child}return t;case 5:return Bd(t),e===null&&Ul(t),a=t.type,c=t.pendingProps,u=e!==null?e.memoizedProps:null,m=c.children,jl(a,c)?m=null:u!==null&&jl(a,u)&&(t.flags|=32),Sf(e,t),jt(e,t,m,i),t.child;case 6:return e===null&&Ul(t),null;case 13:return Rf(e,t,i);case 4:return Kl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Pi(t,null,a,i):jt(e,t,a,i),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:dn(a,c),vf(e,t,a,c,i);case 7:return jt(e,t,t.pendingProps,i),t.child;case 8:return jt(e,t,t.pendingProps.children,i),t.child;case 12:return jt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,u=t.memoizedProps,m=c.value,Ae(Xs,a._currentValue),a._currentValue=m,u!==null)if(cn(u.value,m)){if(u.children===c.children&&!Dt.current){t=Wn(e,t,i);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var v=u.dependencies;if(v!==null){m=u.child;for(var b=v.firstContext;b!==null;){if(b.context===a){if(u.tag===1){b=Hn(-1,i&-i),b.tag=2;var O=u.updateQueue;if(O!==null){O=O.shared;var W=O.pending;W===null?b.next=b:(b.next=W.next,W.next=b),O.pending=b}}u.lanes|=i,b=u.alternate,b!==null&&(b.lanes|=i),Wl(u.return,i,t),v.lanes|=i;break}b=b.next}}else if(u.tag===10)m=u.type===t.type?null:u.child;else if(u.tag===18){if(m=u.return,m===null)throw Error(o(341));m.lanes|=i,v=m.alternate,v!==null&&(v.lanes|=i),Wl(m,i,t),m=u.sibling}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===t){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}jt(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,ji(t,i),c=Yt(c),a=a(c),t.flags|=1,jt(e,t,a,i),t.child;case 14:return a=t.type,c=dn(a,t.pendingProps),c=dn(a.type,c),wf(e,t,a,c,i);case 15:return bf(e,t,t.type,t.pendingProps,i);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:dn(a,c),aa(e,t),t.tag=1,Lt(a)?(e=!0,Hs(t)):e=!1,ji(t,i),ff(t,a,c),sc(t,a,c,i),uc(null,t,a,!0,e,i);case 19:return Nf(e,t,i);case 22:return _f(e,t,i)}throw Error(o(156,t.tag))};function Zf(e,t){return go(e,t)}function d0(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,t,i,a){return new d0(e,t,i,a)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f0(e){if(typeof e=="function")return jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===De)return 11;if(e===it)return 14}return 2}function mr(e,t){var i=e.alternate;return i===null?(i=tn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function xa(e,t,i,a,c,u){var m=2;if(a=e,typeof e=="function")jc(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case se:return qr(i.children,c,u,t);case _e:m=8,c|=8;break;case ve:return e=tn(12,i,t,c|2),e.elementType=ve,e.lanes=u,e;case Ce:return e=tn(13,i,t,c),e.elementType=Ce,e.lanes=u,e;case Le:return e=tn(19,i,t,c),e.elementType=Le,e.lanes=u,e;case Re:return va(i,c,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:m=10;break e;case Ne:m=9;break e;case De:m=11;break e;case it:m=14;break e;case Xe:m=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=tn(m,i,t,c),t.elementType=e,t.type=a,t.lanes=u,t}function qr(e,t,i,a){return e=tn(7,e,a,t),e.lanes=i,e}function va(e,t,i,a){return e=tn(22,e,a,t),e.elementType=Re,e.lanes=i,e.stateNode={isHidden:!1},e}function Tc(e,t,i){return e=tn(6,e,null,t),e.lanes=i,e}function Oc(e,t,i){return t=tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function h0(e,t,i,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Ic(e,t,i,a,c,u,m,v,b){return e=new h0(e,t,i,v,b),t===1?(t=1,u===!0&&(t|=8)):t=0,u=tn(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(u),e}function p0(e,t,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:a==null?null:""+a,children:e,containerInfo:t,implementation:i}}function eh(e){if(!e)return ar;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(Lt(i))return Rd(e,i,t)}return t}function th(e,t,i,a,c,u,m,v,b){return e=Ic(i,a,!0,e,c,u,m,v,b),e.context=eh(null),i=e.current,a=Tt(),c=pr(i),u=Hn(a,c),u.callback=t??null,ur(i,u,c),e.current.lanes=c,xo(e,c,a),Ut(e,a),e}function wa(e,t,i,a){var c=t.current,u=Tt(),m=pr(c);return i=eh(i),t.context===null?t.context=i:t.pendingContext=i,t=Hn(u,m),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=ur(c,t,m),e!==null&&(pn(e,c,m,u),Js(e,c,m)),m}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Ac(e,t){nh(e,t),(e=e.alternate)&&nh(e,t)}function g0(){return null}var rh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dc(e){this._internalRoot=e}_a.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));wa(e,t,null,null)},_a.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hr(function(){wa(null,e,null,null)}),t[Mn]=null}};function _a(e){this._internalRoot=e}_a.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<nr.length&&t!==0&&t<nr[i].priority;i++);nr.splice(i,0,e),i===0&&Bu(e)}};function Lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ih(){}function m0(e,t,i,a,c){if(c){if(typeof a=="function"){var u=a;a=function(){var O=ba(m);u.call(O)}}var m=th(t,a,e,0,null,!1,!1,"",ih);return e._reactRootContainer=m,e[Mn]=m.current,Oo(e.nodeType===8?e.parentNode:e),Hr(),m}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var v=a;a=function(){var O=ba(b);v.call(O)}}var b=Ic(e,0,!1,null,null,!1,!1,"",ih);return e._reactRootContainer=b,e[Mn]=b.current,Oo(e.nodeType===8?e.parentNode:e),Hr(function(){wa(t,b,i,a)}),b}function ka(e,t,i,a,c){var u=i._reactRootContainer;if(u){var m=u;if(typeof c=="function"){var v=c;c=function(){var b=ba(m);v.call(b)}}wa(t,m,e,c)}else m=m0(i,t,e,c,a);return ba(m)}zu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=yo(t.pendingLanes);i!==0&&(sl(t,i|1),Ut(t,$()),(Pe&6)===0&&(Di=$()+500,lr()))}break;case 13:Hr(function(){var a=Bn(e,1);if(a!==null){var c=Tt();pn(a,e,1,c)}}),Ac(e,1)}},al=function(e){if(e.tag===13){var t=Bn(e,134217728);if(t!==null){var i=Tt();pn(t,e,134217728,i)}Ac(e,134217728)}},Mu=function(e){if(e.tag===13){var t=pr(e),i=Bn(e,t);if(i!==null){var a=Tt();pn(i,e,t,a)}Ac(e,t)}},Uu=function(){return Ie},Fu=function(e,t){var i=Ie;try{return Ie=e,t()}finally{Ie=i}},oo=function(e,t,i){switch(t){case"input":if(vt(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var c=$s(a);if(!c)throw Error(o(90));qe(a),vt(a,c)}}}break;case"textarea":Ht(e,i);break;case"select":t=i.value,t!=null&&ot(e,!!i.multiple,t,!1)}},ws=Rc,ui=Hr;var y0={usingClientEntryPoint:!1,Events:[Do,_i,$s,ao,Ar,Rc]},Xo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x0={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ho(e),e===null?null:e.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance||g0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Je=Ea.inject(x0),kn=Ea}catch{}}return Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0,Ft.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(t))throw Error(o(200));return p0(e,t,null,i)},Ft.createRoot=function(e,t){if(!Lc(e))throw Error(o(299));var i=!1,a="",c=rh;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Ic(e,1,!1,null,null,i,!1,a,c),e[Mn]=t.current,Oo(e.nodeType===8?e.parentNode:e),new Dc(t)},Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ho(t),e=e===null?null:e.stateNode,e},Ft.flushSync=function(e){return Hr(e)},Ft.hydrate=function(e,t,i){if(!Sa(t))throw Error(o(200));return ka(null,e,t,!0,i)},Ft.hydrateRoot=function(e,t,i){if(!Lc(e))throw Error(o(405));var a=i!=null&&i.hydratedSources||null,c=!1,u="",m=rh;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),t=th(t,null,e,1,i??null,c,!1,u,m),e[Mn]=t.current,Oo(e),a)for(e=0;e<a.length;e++)i=a[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new _a(t)},Ft.render=function(e,t,i){if(!Sa(t))throw Error(o(200));return ka(null,e,t,!1,i)},Ft.unmountComponentAtNode=function(e){if(!Sa(e))throw Error(o(40));return e._reactRootContainer?(Hr(function(){ka(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1},Ft.unstable_batchedUpdates=Rc,Ft.unstable_renderSubtreeIntoContainer=function(e,t,i,a){if(!Sa(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return ka(e,t,i,!1,a)},Ft.version="18.3.1-next-f1338f8080-20240426",Ft}var ph;function Pp(){if(ph)return Fc.exports;ph=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Fc.exports=N0(),Fc.exports}var gh;function j0(){if(gh)return Ra;gh=1;var r=Pp();return Ra.createRoot=r.createRoot,Ra.hydrateRoot=r.hydrateRoot,Ra}var T0=j0();const O0=Cp(T0),I0=k.createContext(void 0),A0=({client:r,children:n})=>(k.useEffect(()=>(r.mount(),()=>{r.unmount()}),[r]),h.jsx(I0.Provider,{value:r,children:n})),D0={setTimeout:(r,n)=>setTimeout(r,n),clearTimeout:r=>clearTimeout(r),setInterval:(r,n)=>setInterval(r,n),clearInterval:r=>clearInterval(r)};var br,vu,yp,L0=(yp=class{constructor(){Ee(this,br,D0);Ee(this,vu,!1)}setTimeoutProvider(r){he(this,br,r)}setTimeout(r,n){return L(this,br).setTimeout(r,n)}clearTimeout(r){L(this,br).clearTimeout(r)}setInterval(r,n){return L(this,br).setInterval(r,n)}clearInterval(r){L(this,br).clearInterval(r)}},br=new WeakMap,vu=new WeakMap,yp);const nu=new L0;function z0(r){setTimeout(r,0)}const M0=typeof window>"u"||"Deno"in globalThis;function rn(){}function U0(r,n){return typeof r=="function"?r(n):r}function F0(r){return typeof r=="number"&&r>=0&&r!==1/0}function $0(r,n){return Math.max(r+(n||0)-Date.now(),0)}function ns(r,n){return typeof r=="function"?r(n):r}function mh(r,n){const{type:o="all",exact:s,fetchStatus:l,predicate:d,queryKey:f,stale:p}=r;if(f){if(s){if(n.queryHash!==bu(f,n.options))return!1}else if(!Xi(n.queryKey,f))return!1}if(o!=="all"){const g=n.isActive();if(o==="active"&&!g||o==="inactive"&&g)return!1}return!(typeof p=="boolean"&&n.isStale()!==p||l&&l!==n.state.fetchStatus||d&&!d(n))}function yh(r,n){const{exact:o,status:s,predicate:l,mutationKey:d}=r;if(d){if(!n.options.mutationKey)return!1;if(o){if(os(n.options.mutationKey)!==os(d))return!1}else if(!Xi(n.options.mutationKey,d))return!1}return!(s&&n.state.status!==s||l&&!l(n))}function bu(r,n){return((n==null?void 0:n.queryKeyHashFn)||os)(r)}function os(r){return JSON.stringify(r,(n,o)=>ru(o)?Object.keys(o).sort().reduce((s,l)=>(s[l]=o[l],s),{}):o)}function Xi(r,n){if(r===n)return!0;if(typeof r!=typeof n)return!1;if(r&&n&&typeof r=="object"&&typeof n=="object"){if(Array.isArray(r)&&Array.isArray(n)){if(n.length>r.length)return!1;for(let s=0;s<n.length;s++)if(!Xi(r[s],n[s]))return!1;return!0}const o=Object.keys(n);for(const s of o)if(!Xi(r[s],n[s]))return!1;return!0}return!1}const B0=Object.prototype.hasOwnProperty;function Np(r,n,o=0){if(r===n)return r;if(o>500)return n;const s=xh(r)&&xh(n);if(!s&&!(ru(r)&&ru(n)))return n;const l=(s?r:Object.keys(r)).length,d=s?n:Object.keys(n),f=d.length,p=s?new Array(f):{};let g=0;for(let x=0;x<f;x++){const y=s?x:d[x],w=r[y],R=n[y];if(w===R){p[y]=w,(s?x<l:B0.call(r,y))&&g++;continue}if(w===null||R===null||typeof w!="object"||typeof R!="object"){p[y]=R;continue}const B=Np(w,R,o+1);p[y]=B,B===w&&g++}return l===f&&g===l?r:p}function xh(r){return Array.isArray(r)&&r.length===Object.keys(r).length}function ru(r){if(!vh(r))return!1;const n=Object.getPrototypeOf(r),o=n==null?void 0:n.constructor;if(o===void 0)return!0;if(typeof o!="function")return!1;const s=o.prototype;return!(!vh(s)||!s.hasOwnProperty("isPrototypeOf")||n!==Object.prototype)}function vh(r){return Object.prototype.toString.call(r)==="[object Object]"}function H0(r){return new Promise(n=>{nu.setTimeout(n,r)})}function W0(r,n,o){return typeof o.structuralSharing=="function"?o.structuralSharing(r,n):o.structuralSharing!==!1?Np(r,n):n}function V0(r,n,o=0){const s=[...r,n];return o&&s.length>o?s.slice(1):s}function q0(r,n,o=0){const s=[n,...r];return o&&s.length>o?s.slice(0,-1):s}const _u=Symbol();function jp(r,n){return!r.queryFn&&(n!=null&&n.initialPromise)?()=>n.initialPromise:!r.queryFn||r.queryFn===_u?()=>Promise.reject(new Error(`Missing queryFn: '${r.queryHash}'`)):r.queryFn}function K0(r,n,o){let s=!1,l;return Object.defineProperty(r,"signal",{enumerable:!0,get:()=>(l??(l=n()),s||(s=!0,l.aborted?o():l.addEventListener("abort",o,{once:!0})),l)}),r}let Q0=()=>M0;const Tp=()=>Q0();var Ka=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(r){return this.listeners.add(r),this.onSubscribe(),()=>{this.listeners.delete(r),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Xr,_r,Fi,xp,X0=(xp=class extends Ka{constructor(){super();Ee(this,Xr);Ee(this,_r);Ee(this,Fi);he(this,Fi,n=>{if(typeof window<"u"&&window.addEventListener){const o=()=>n();return window.addEventListener("visibilitychange",o,!1),()=>{window.removeEventListener("visibilitychange",o)}}})}onSubscribe(){L(this,_r)||this.setEventListener(L(this,Fi))}onUnsubscribe(){var n;this.hasListeners()||((n=L(this,_r))==null||n.call(this),he(this,_r,void 0))}setEventListener(n){var o;he(this,Fi,n),(o=L(this,_r))==null||o.call(this),he(this,_r,n(s=>{typeof s=="boolean"?this.setFocused(s):this.onFocus()}))}setFocused(n){L(this,Xr)!==n&&(he(this,Xr,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(o=>{o(n)})}isFocused(){var n;return typeof L(this,Xr)=="boolean"?L(this,Xr):((n=globalThis.document)==null?void 0:n.visibilityState)!=="hidden"}},Xr=new WeakMap,_r=new WeakMap,Fi=new WeakMap,xp);const Op=new X0,G0=z0;function J0(){let r=[],n=0,o=p=>{p()},s=p=>{p()},l=G0;const d=p=>{n?r.push(p):l(()=>{o(p)})},f=()=>{const p=r;r=[],p.length&&l(()=>{s(()=>{p.forEach(g=>{o(g)})})})};return{batch:p=>{let g;n++;try{g=p()}finally{n--,n||f()}return g},batchCalls:p=>(...g)=>{d(()=>{p(...g)})},schedule:d,setNotifyFunction:p=>{o=p},setBatchNotifyFunction:p=>{s=p},setScheduler:p=>{l=p}}}const Ot=J0();var $i,Sr,Bi,vp,Y0=(vp=class extends Ka{constructor(){super();Ee(this,$i,!0);Ee(this,Sr);Ee(this,Bi);he(this,Bi,n=>{if(typeof window<"u"&&window.addEventListener){const o=()=>n(!0),s=()=>n(!1);return window.addEventListener("online",o,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",s)}}})}onSubscribe(){L(this,Sr)||this.setEventListener(L(this,Bi))}onUnsubscribe(){var n;this.hasListeners()||((n=L(this,Sr))==null||n.call(this),he(this,Sr,void 0))}setEventListener(n){var o;he(this,Bi,n),(o=L(this,Sr))==null||o.call(this),he(this,Sr,n(this.setOnline.bind(this)))}setOnline(n){L(this,$i)!==n&&(he(this,$i,n),this.listeners.forEach(o=>{o(n)}))}isOnline(){return L(this,$i)}},$i=new WeakMap,Sr=new WeakMap,Bi=new WeakMap,vp);const Fa=new Y0;function Z0(r){return Math.min(1e3*2**r,3e4)}function Ip(r){return(r??"online")==="online"?Fa.isOnline():!0}var iu=class extends Error{constructor(r){super("CancelledError"),this.revert=r==null?void 0:r.revert,this.silent=r==null?void 0:r.silent}};function Ap(r){let n=!1,o=0,s,l="pending",d,f;const p=new Promise((T,M)=>{d=T,f=M});p.catch(rn);const g=()=>l!=="pending",x=T=>{var M;if(!g()){const U=new iu(T);A(U),(M=r.onCancel)==null||M.call(r,U)}},y=()=>{n=!0},w=()=>{n=!1},R=()=>Op.isFocused()&&(r.networkMode==="always"||Fa.isOnline())&&r.canRun(),B=()=>Ip(r.networkMode)&&r.canRun(),D=T=>{g()||(s==null||s(),l="resolved",d(T))},A=T=>{g()||(s==null||s(),l="rejected",f(T))},I=()=>new Promise(T=>{var M;s=U=>{(g()||R())&&T(U)},(M=r.onPause)==null||M.call(r)}).then(()=>{var T;s=void 0,g()||(T=r.onContinue)==null||T.call(r)}),N=()=>{if(g())return;let T;const M=o===0?r.initialPromise:void 0;try{T=M??r.fn()}catch(U){T=Promise.reject(U)}Promise.resolve(T).then(D).catch(U=>{var ve;if(g())return;const V=r.retry??(Tp()?0:3),G=r.retryDelay??Z0,se=typeof G=="function"?G(o,U):G,_e=V===!0||typeof V=="number"&&o<V||typeof V=="function"&&V(o,U);if(n||!_e){A(U);return}o++,(ve=r.onFail)==null||ve.call(r,o,U),H0(se).then(()=>R()?void 0:I()).then(()=>{n?A(U):N()})})};return{promise:p,status:()=>l,cancel:x,continue:()=>(s==null||s(),p),cancelRetry:y,continueRetry:w,canStart:B,start:()=>(B()?N():I().then(N),p)}}var Gr,wp,Dp=(wp=class{constructor(){Ee(this,Gr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),F0(this.gcTime)&&he(this,Gr,nu.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(r){this.gcTime=Math.max(this.gcTime||0,r??(Tp()?1/0:3e5))}clearGcTimeout(){L(this,Gr)!==void 0&&(nu.clearTimeout(L(this,Gr)),he(this,Gr,void 0))}},Gr=new WeakMap,wp);function ey(r){return{onFetch:(n,o)=>{var y,w,R,B,D;const s=n.options,l=(R=(w=(y=n.fetchOptions)==null?void 0:y.meta)==null?void 0:w.fetchMore)==null?void 0:R.direction,d=((B=n.state.data)==null?void 0:B.pages)||[],f=((D=n.state.data)==null?void 0:D.pageParams)||[];let p={pages:[],pageParams:[]},g=0;const x=async()=>{let A=!1;const I=M=>{K0(M,()=>n.signal,()=>A=!0)},N=jp(n.options,n.fetchOptions),T=async(M,U,V)=>{if(A)return Promise.reject(n.signal.reason);if(U==null&&M.pages.length)return Promise.resolve(M);const se=(()=>{const Ne={client:n.client,queryKey:n.queryKey,pageParam:U,direction:V?"backward":"forward",meta:n.options.meta};return I(Ne),Ne})(),_e=await N(se),{maxPages:ve}=n.options,le=V?q0:V0;return{pages:le(M.pages,_e,ve),pageParams:le(M.pageParams,U,ve)}};if(l&&d.length){const M=l==="backward",U=M?ty:wh,V={pages:d,pageParams:f};p=await T(V,U(s,V),M)}else{const M=r??d.length;do{const U=g===0?f[0]??s.initialPageParam:wh(s,p);if(g>0&&U==null)break;p=await T(p,U),g++}while(g<M)}return p};n.options.persister?n.fetchFn=()=>{var A,I;return(I=(A=n.options).persister)==null?void 0:I.call(A,x,{client:n.client,queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},o)}:n.fetchFn=x}}}function wh(r,{pages:n,pageParams:o}){const s=n.length-1;return n.length>0?r.getNextPageParam(n[s],n,o[s],o):void 0}function ty(r,{pages:n,pageParams:o}){var s;return n.length>0?(s=r.getPreviousPageParam)==null?void 0:s.call(r,n[0],n,o[0],o):void 0}var Hi,Jr,Wi,nn,Yr,ct,fs,Zr,gn,qn,bp,ny=(bp=class extends Dp{constructor(n){super();Ee(this,gn);Ee(this,Hi);Ee(this,Jr);Ee(this,Wi);Ee(this,nn);Ee(this,Yr);Ee(this,ct);Ee(this,fs);Ee(this,Zr);he(this,Zr,!1),he(this,fs,n.defaultOptions),this.setOptions(n.options),this.observers=[],he(this,Yr,n.client),he(this,nn,L(this,Yr).getQueryCache()),this.queryKey=n.queryKey,this.queryHash=n.queryHash,he(this,Jr,_h(this.options)),this.state=n.state??L(this,Jr),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return L(this,Hi)}get promise(){var n;return(n=L(this,ct))==null?void 0:n.promise}setOptions(n){if(this.options={...L(this,fs),...n},n!=null&&n._type&&he(this,Hi,n._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const o=_h(this.options);o.data!==void 0&&(this.setState(bh(o.data,o.dataUpdatedAt)),he(this,Jr,o))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&L(this,nn).remove(this)}setData(n,o){const s=W0(this.state.data,n,this.options);return Et(this,gn,qn).call(this,{data:s,type:"success",dataUpdatedAt:o==null?void 0:o.updatedAt,manual:o==null?void 0:o.manual}),s}setState(n){Et(this,gn,qn).call(this,{type:"setState",state:n})}cancel(n){var s,l;const o=(s=L(this,ct))==null?void 0:s.promise;return(l=L(this,ct))==null||l.cancel(n),o?o.then(rn).catch(rn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return L(this,Jr)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(n=>ns(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===_u||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>ns(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!$0(this.state.dataUpdatedAt,n)}onFocus(){var n,o;(n=this.observers.find(s=>s.shouldFetchOnWindowFocus()))==null||n.refetch({cancelRefetch:!1}),(o=L(this,ct))==null||o.continue()}onOnline(){var n,o;(n=this.observers.find(s=>s.shouldFetchOnReconnect()))==null||n.refetch({cancelRefetch:!1}),(o=L(this,ct))==null||o.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),L(this,nn).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){const o=this.observers.indexOf(n);o!==-1&&(this.observers.splice(o,1),this.observers.length||(L(this,ct)&&(L(this,Zr)||this.state.fetchStatus==="paused"&&this.state.status==="pending"?L(this,ct).cancel({revert:!0}):L(this,ct).cancelRetry()),this.scheduleGc()),L(this,nn).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Et(this,gn,qn).call(this,{type:"invalidate"})}async fetch(n,o){var x,y,w,R,B,D,A,I,N,T,M,U;if(this.state.fetchStatus!=="idle"&&((x=L(this,ct))==null?void 0:x.status())!=="rejected"){if(this.state.data!==void 0&&(o!=null&&o.cancelRefetch))this.cancel({silent:!0});else if(L(this,ct))return L(this,ct).continueRetry(),L(this,ct).promise}if(n&&this.setOptions(n),!this.options.queryFn){const V=this.observers.find(G=>G.options.queryFn);V&&this.setOptions(V.options)}const s=new AbortController,l=V=>{Object.defineProperty(V,"signal",{enumerable:!0,get:()=>(he(this,Zr,!0),s.signal)})},d=()=>{const V=jp(this.options,o),se=(()=>{const _e={client:L(this,Yr),queryKey:this.queryKey,meta:this.meta};return l(_e),_e})();return he(this,Zr,!1),this.options.persister?this.options.persister(V,se,this):V(se)},p=(()=>{const V={fetchOptions:o,options:this.options,queryKey:this.queryKey,client:L(this,Yr),state:this.state,fetchFn:d};return l(V),V})();(y=L(this,Hi)==="infinite"?ey(this.options.pages):this.options.behavior)==null||y.onFetch(p,this),he(this,Wi,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((w=p.fetchOptions)==null?void 0:w.meta))&&Et(this,gn,qn).call(this,{type:"fetch",meta:(R=p.fetchOptions)==null?void 0:R.meta});const g=he(this,ct,Ap({initialPromise:o==null?void 0:o.initialPromise,fn:p.fetchFn,onCancel:V=>{V instanceof iu&&V.revert&&this.setState({...L(this,Wi),fetchStatus:"idle"}),s.abort()},onFail:(V,G)=>{Et(this,gn,qn).call(this,{type:"failed",failureCount:V,error:G})},onPause:()=>{Et(this,gn,qn).call(this,{type:"pause"})},onContinue:()=>{Et(this,gn,qn).call(this,{type:"continue"})},retry:p.options.retry,retryDelay:p.options.retryDelay,networkMode:p.options.networkMode,canRun:()=>!0}));try{const V=await g.start();if(V===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(V),(D=(B=L(this,nn).config).onSuccess)==null||D.call(B,V,this),(I=(A=L(this,nn).config).onSettled)==null||I.call(A,V,this.state.error,this),V}catch(V){if(V instanceof iu){if(V.silent)return L(this,ct).promise;if(V.revert){if(this.state.data===void 0)throw V;return this.state.data}}throw Et(this,gn,qn).call(this,{type:"error",error:V}),(T=(N=L(this,nn).config).onError)==null||T.call(N,V,this),(U=(M=L(this,nn).config).onSettled)==null||U.call(M,this.state.data,V,this),V}finally{L(this,ct)===g&&he(this,ct,void 0),this.scheduleGc()}}},Hi=new WeakMap,Jr=new WeakMap,Wi=new WeakMap,nn=new WeakMap,Yr=new WeakMap,ct=new WeakMap,fs=new WeakMap,Zr=new WeakMap,gn=new WeakSet,qn=function(n){const o=s=>{switch(n.type){case"failed":return{...s,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...ry(s.data,this.options),fetchMeta:n.meta??null};case"success":const l={...s,...bh(n.data,n.dataUpdatedAt),dataUpdateCount:s.dataUpdateCount+1,...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return he(this,Wi,n.manual?l:void 0),l;case"error":const d=n.error;return{...s,error:d,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:d,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...n.state}}};this.state=o(this.state),Ot.batch(()=>{this.observers.slice().forEach(s=>{s.onQueryUpdate()}),L(this,nn).notify({query:this,type:"updated",action:n})})},bp);function ry(r,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ip(n.networkMode)?"fetching":"paused",...r===void 0&&{error:null,status:"pending"}}}function bh(r,n){return{data:r,dataUpdatedAt:n??Date.now(),error:null,isInvalidated:!1,status:"success"}}function _h(r){const n=typeof r.initialData=="function"?r.initialData():r.initialData,o=n!==void 0,s=o?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:o?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:o?"success":"pending",fetchStatus:"idle"}}var hs,Nn,Rt,ei,jn,vr,_p,iy=(_p=class extends Dp{constructor(n){super();Ee(this,jn);Ee(this,hs);Ee(this,Nn);Ee(this,Rt);Ee(this,ei);he(this,hs,n.client),this.mutationId=n.mutationId,he(this,Rt,n.mutationCache),he(this,Nn,[]),this.state=n.state||oy(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){L(this,Nn).includes(n)||(L(this,Nn).push(n),this.clearGcTimeout(),L(this,Rt).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){he(this,Nn,L(this,Nn).filter(o=>o!==n)),this.scheduleGc(),L(this,Rt).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){L(this,Nn).length||(this.state.status==="pending"?this.scheduleGc():L(this,Rt).remove(this))}continue(){var n;return((n=L(this,ei))==null?void 0:n.continue())??(this.state.status==="pending"?this.execute(this.state.variables):Promise.resolve())}async execute(n){var p,g,x,y,w,R,B,D,A,I,N,T,M,U,V,G,se,_e;const o=()=>{Et(this,jn,vr).call(this,{type:"continue"})},s={client:L(this,hs),meta:this.options.meta,mutationKey:this.options.mutationKey},l=he(this,ei,Ap({fn:()=>this.options.mutationFn?this.options.mutationFn(n,s):Promise.reject(new Error("No mutationFn found")),onFail:(ve,le)=>{Et(this,jn,vr).call(this,{type:"failed",failureCount:ve,error:le})},onPause:()=>{Et(this,jn,vr).call(this,{type:"pause"})},onContinue:o,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>L(this,Rt).canRun(this)})),d=this.state.status==="pending",f=!l.canStart();try{if(d)o();else{Et(this,jn,vr).call(this,{type:"pending",variables:n,isPaused:f}),L(this,Rt).config.onMutate&&await L(this,Rt).config.onMutate(n,this,s);const le=await((g=(p=this.options).onMutate)==null?void 0:g.call(p,n,s));le!==this.state.context&&Et(this,jn,vr).call(this,{type:"pending",context:le,variables:n,isPaused:f})}const ve=await l.start();return await((y=(x=L(this,Rt).config).onSuccess)==null?void 0:y.call(x,ve,n,this.state.context,this,s)),await((R=(w=this.options).onSuccess)==null?void 0:R.call(w,ve,n,this.state.context,s)),await((D=(B=L(this,Rt).config).onSettled)==null?void 0:D.call(B,ve,null,this.state.variables,this.state.context,this,s)),await((I=(A=this.options).onSettled)==null?void 0:I.call(A,ve,null,n,this.state.context,s)),Et(this,jn,vr).call(this,{type:"success",data:ve}),ve}catch(ve){try{await((T=(N=L(this,Rt).config).onError)==null?void 0:T.call(N,ve,n,this.state.context,this,s))}catch(le){Promise.reject(le)}try{await((U=(M=this.options).onError)==null?void 0:U.call(M,ve,n,this.state.context,s))}catch(le){Promise.reject(le)}try{await((G=(V=L(this,Rt).config).onSettled)==null?void 0:G.call(V,void 0,ve,this.state.variables,this.state.context,this,s))}catch(le){Promise.reject(le)}try{await((_e=(se=this.options).onSettled)==null?void 0:_e.call(se,void 0,ve,n,this.state.context,s))}catch(le){Promise.reject(le)}throw Et(this,jn,vr).call(this,{type:"error",error:ve}),ve}finally{L(this,ei)===l&&he(this,ei,void 0),L(this,Rt).runNext(this)}}},hs=new WeakMap,Nn=new WeakMap,Rt=new WeakMap,ei=new WeakMap,jn=new WeakSet,vr=function(n){const o=s=>{switch(n.type){case"failed":return{...s,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...s,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:n.error,failureCount:s.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=o(this.state),Ot.batch(()=>{L(this,Nn).forEach(s=>{s.onMutationUpdate(n)}),L(this,Rt).notify({mutation:this,type:"updated",action:n})})},_p);function oy(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Kn,mn,ps,Sp,sy=(Sp=class extends Ka{constructor(n={}){super();Ee(this,Kn);Ee(this,mn);Ee(this,ps);this.config=n,he(this,Kn,new Set),he(this,mn,new Map),he(this,ps,0)}build(n,o,s){const l=new iy({client:n,mutationCache:this,mutationId:++Ca(this,ps)._,options:n.defaultMutationOptions(o),state:s});return this.add(l),l}add(n){L(this,Kn).add(n);const o=Pa(n);if(typeof o=="string"){const s=L(this,mn).get(o);s?s.push(n):L(this,mn).set(o,[n])}this.notify({type:"added",mutation:n})}remove(n){if(L(this,Kn).delete(n)){const o=Pa(n);if(typeof o=="string"){const s=L(this,mn).get(o);if(s)if(s.length>1){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}else s[0]===n&&L(this,mn).delete(o)}}this.notify({type:"removed",mutation:n})}canRun(n){var s;const o=Pa(n);if(typeof o=="string"){const l=(s=L(this,mn).get(o))==null?void 0:s.find(d=>d.state.status==="pending");return!l||l===n}else return!0}runNext(n){var s,l;const o=Pa(n);return typeof o=="string"?((l=(s=L(this,mn).get(o))==null?void 0:s.find(d=>d!==n&&d.state.isPaused))==null?void 0:l.continue())??Promise.resolve():Promise.resolve()}clear(){Ot.batch(()=>{L(this,Kn).forEach(n=>{this.notify({type:"removed",mutation:n})}),L(this,Kn).clear(),L(this,mn).clear()})}getAll(){return Array.from(L(this,Kn))}find(n){const o={exact:!0,...n};return this.getAll().find(s=>yh(o,s))}findAll(n={}){return this.getAll().filter(o=>yh(n,o))}notify(n){Ot.batch(()=>{this.listeners.forEach(o=>{o(n)})})}resumePausedMutations(){const n=this.getAll().filter(o=>o.state.isPaused);return Ot.batch(()=>Promise.all(n.map(o=>o.continue().catch(rn))))}},Kn=new WeakMap,mn=new WeakMap,ps=new WeakMap,Sp);function Pa(r){var n;return(n=r.options.scope)==null?void 0:n.id}var Tn,kp,ay=(kp=class extends Ka{constructor(n={}){super();Ee(this,Tn);this.config=n,he(this,Tn,new Map)}build(n,o,s){const l=o.queryKey,d=o.queryHash??bu(l,o);let f=this.get(d);return f||(f=new ny({client:n,queryKey:l,queryHash:d,options:n.defaultQueryOptions(o),state:s,defaultOptions:n.getQueryDefaults(l)}),this.add(f)),f}add(n){L(this,Tn).has(n.queryHash)||(L(this,Tn).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){L(this,Tn).get(n.queryHash)===n&&(n.destroy(),L(this,Tn).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Ot.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return L(this,Tn).get(n)}getAll(){return[...L(this,Tn).values()]}find(n){const o={exact:!0,...n};return this.getAll().find(s=>mh(o,s))}findAll(n={}){const o=this.getAll();return Object.keys(n).length>0?o.filter(s=>mh(n,s)):o}notify(n){Ot.batch(()=>{this.listeners.forEach(o=>{o(n)})})}onFocus(){Ot.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Ot.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Tn=new WeakMap,kp),He,kr,Er,Vi,qi,Cr,Ki,Qi,Ep,ly=(Ep=class{constructor(r={}){Ee(this,He);Ee(this,kr);Ee(this,Er);Ee(this,Vi);Ee(this,qi);Ee(this,Cr);Ee(this,Ki);Ee(this,Qi);he(this,He,r.queryCache||new ay),he(this,kr,r.mutationCache||new sy),he(this,Er,r.defaultOptions||{}),he(this,Vi,new Map),he(this,qi,new Map),he(this,Cr,0)}mount(){Ca(this,Cr)._++,L(this,Cr)===1&&(he(this,Ki,Op.subscribe(async r=>{r&&(await this.resumePausedMutations(),L(this,He).onFocus())})),he(this,Qi,Fa.subscribe(async r=>{r&&(await this.resumePausedMutations(),L(this,He).onOnline())})))}unmount(){var r,n;Ca(this,Cr)._--,L(this,Cr)===0&&((r=L(this,Ki))==null||r.call(this),he(this,Ki,void 0),(n=L(this,Qi))==null||n.call(this),he(this,Qi,void 0))}isFetching(r){return L(this,He).findAll({...r,fetchStatus:"fetching"}).length}isMutating(r){return L(this,kr).findAll({...r,status:"pending"}).length}getQueryData(r){var o;const n=this.defaultQueryOptions({queryKey:r});return(o=L(this,He).get(n.queryHash))==null?void 0:o.state.data}ensureQueryData(r){const n=this.defaultQueryOptions(r),o=L(this,He).build(this,n),s=o.state.data;return s===void 0?this.fetchQuery(r):(r.revalidateIfStale&&o.isStaleByTime(ns(n.staleTime,o))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(r){return L(this,He).findAll(r).map(({queryKey:n,state:o})=>[n,o.data])}setQueryData(r,n,o){var f;const s=this.defaultQueryOptions({queryKey:r}),l=(f=L(this,He).get(s.queryHash))==null?void 0:f.state.data,d=U0(n,l);if(d!==void 0)return L(this,He).build(this,s).setData(d,{...o,manual:!0})}setQueriesData(r,n,o){return Ot.batch(()=>L(this,He).findAll(r).map(({queryKey:s})=>[s,this.setQueryData(s,n,o)]))}getQueryState(r){var o;const n=this.defaultQueryOptions({queryKey:r});return(o=L(this,He).get(n.queryHash))==null?void 0:o.state}removeQueries(r){const n=L(this,He);Ot.batch(()=>{n.findAll(r).forEach(o=>{n.remove(o)})})}resetQueries(r,n){const o=L(this,He);return Ot.batch(()=>{const s=o.findAll(r),l=new Set(s);return s.forEach(d=>{d.reset()}),this.refetchQueries({type:"active",predicate:d=>l.has(d)},n)})}cancelQueries(r,n={}){const o={revert:!0,...n},s=Ot.batch(()=>L(this,He).findAll(r).map(l=>l.cancel(o)));return Promise.all(s).then(rn).catch(rn)}invalidateQueries(r,n={}){return Ot.batch(()=>(L(this,He).findAll(r).forEach(o=>{o.invalidate()}),(r==null?void 0:r.refetchType)==="none"?Promise.resolve():this.refetchQueries({...r,type:(r==null?void 0:r.refetchType)??(r==null?void 0:r.type)??"active"},n)))}refetchQueries(r,n={}){const o={...n,cancelRefetch:n.cancelRefetch??!0},s=Ot.batch(()=>L(this,He).findAll(r).filter(l=>!l.isDisabled()&&!l.isStatic()).map(l=>{let d=l.fetch(void 0,o);return o.throwOnError||(d=d.catch(rn)),l.state.fetchStatus==="paused"?Promise.resolve():d}));return Promise.all(s).then(rn)}async query(r){const n=this.defaultQueryOptions(r);n.retry===void 0&&(n.retry=!1);const o=L(this,He).build(this,n),s=o.isStaleByTime(ns(n.staleTime,o))?await o.fetch(n):o.state.data,l=n.select;return l?l(s):s}fetchQuery(r){const n=this.defaultQueryOptions(r);n.retry===void 0&&(n.retry=!1);const o=L(this,He).build(this,n);return o.isStaleByTime(ns(n.staleTime,o))?o.fetch(n):Promise.resolve(o.state.data)}prefetchQuery(r){return this.fetchQuery(r).then(rn).catch(rn)}infiniteQuery(r){return r._type="infinite",this.query(r)}fetchInfiniteQuery(r){return r._type="infinite",this.fetchQuery(r)}prefetchInfiniteQuery(r){return this.fetchInfiniteQuery(r).then(rn).catch(rn)}ensureInfiniteQueryData(r){return r._type="infinite",this.ensureQueryData(r)}resumePausedMutations(){return Fa.isOnline()?L(this,kr).resumePausedMutations():Promise.resolve()}getQueryCache(){return L(this,He)}getMutationCache(){return L(this,kr)}getDefaultOptions(){return L(this,Er)}setDefaultOptions(r){he(this,Er,r)}setQueryDefaults(r,n){L(this,Vi).set(os(r),{queryKey:r,defaultOptions:n})}getQueryDefaults(r){const n=[...L(this,Vi).values()],o={};return n.forEach(s=>{Xi(r,s.queryKey)&&Object.assign(o,s.defaultOptions)}),o}setMutationDefaults(r,n){L(this,qi).set(os(r),{mutationKey:r,defaultOptions:n})}getMutationDefaults(r){const n=[...L(this,qi).values()],o={};return n.forEach(s=>{Xi(r,s.mutationKey)&&Object.assign(o,s.defaultOptions)}),o}defaultQueryOptions(r){if(r._defaulted)return r;const n={...L(this,Er).queries,...this.getQueryDefaults(r.queryKey),...r,_defaulted:!0};return n.queryHash||(n.queryHash=bu(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===_u&&(n.enabled=!1),n}defaultMutationOptions(r){return r!=null&&r._defaulted?r:{...L(this,Er).mutations,...(r==null?void 0:r.mutationKey)&&this.getMutationDefaults(r.mutationKey),...r,_defaulted:!0}}clear(){L(this,He).clear(),L(this,kr).clear()}},He=new WeakMap,kr=new WeakMap,Er=new WeakMap,Vi=new WeakMap,qi=new WeakMap,Cr=new WeakMap,Ki=new WeakMap,Qi=new WeakMap,Ep);Pp();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)({}).hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},ss.apply(null,arguments)}var Rr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Rr||(Rr={}));const Sh="popstate";function cy(r){r===void 0&&(r={});function n(s,l){let{pathname:d,search:f,hash:p}=s.location;return ou("",{pathname:d,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function o(s,l){return typeof l=="string"?l:$a(l)}return dy(n,o,null,r)}function Ve(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function Lp(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function uy(){return Math.random().toString(36).substr(2,8)}function kh(r,n){return{usr:r.state,key:r.key,idx:n}}function ou(r,n,o,s){return o===void 0&&(o=null),ss({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof n=="string"?Yi(n):n,{state:o,key:n&&n.key||s||uy()})}function $a(r){let{pathname:n="/",search:o="",hash:s=""}=r;return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Yi(r){let n={};if(r){let o=r.indexOf("#");o>=0&&(n.hash=r.substr(o),r=r.substr(0,o));let s=r.indexOf("?");s>=0&&(n.search=r.substr(s),r=r.substr(0,s)),r&&(n.pathname=r)}return n}function dy(r,n,o,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:d=!1}=s,f=l.history,p=Rr.Pop,g=null,x=y();x==null&&(x=0,f.replaceState(ss({},f.state,{idx:x}),""));function y(){return(f.state||{idx:null}).idx}function w(){p=Rr.Pop;let I=y(),N=I==null?null:I-x;x=I,g&&g({action:p,location:A.location,delta:N})}function R(I,N){p=Rr.Push;let T=ou(A.location,I,N);x=y()+1;let M=kh(T,x),U=A.createHref(T);try{f.pushState(M,"",U)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(U)}d&&g&&g({action:p,location:A.location,delta:1})}function B(I,N){p=Rr.Replace;let T=ou(A.location,I,N);x=y();let M=kh(T,x),U=A.createHref(T);f.replaceState(M,"",U),d&&g&&g({action:p,location:A.location,delta:0})}function D(I){let N=l.location.origin!=="null"?l.location.origin:l.location.href,T=typeof I=="string"?I:$a(I);return T=T.replace(/ $/,"%20"),Ve(N,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,N)}let A={get action(){return p},get location(){return r(l,f)},listen(I){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(Sh,w),g=I,()=>{l.removeEventListener(Sh,w),g=null}},createHref(I){return n(l,I)},createURL:D,encodeLocation(I){let N=D(I);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:R,replace:B,go(I){return f.go(I)}};return A}var Eh;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Eh||(Eh={}));function fy(r,n,o){return o===void 0&&(o="/"),hy(r,n,o)}function hy(r,n,o,s){let l=typeof n=="string"?Yi(n):n,d=Gi(l.pathname||"/",o);if(d==null)return null;let f=zp(r);py(f);let p=null,g=Ey(d);for(let x=0;p==null&&x<f.length;++x)p=Sy(f[x],g);return p}function zp(r,n,o,s){n===void 0&&(n=[]),o===void 0&&(o=[]),s===void 0&&(s="");let l=(d,f,p)=>{let g={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:f,route:d};g.relativePath.startsWith("/")&&(Ve(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let x=Pr([s,g.relativePath]),y=o.concat(g);d.children&&d.children.length>0&&(Ve(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),zp(d.children,n,y,x)),!(d.path==null&&!d.index)&&n.push({path:x,score:by(x,d.index),routesMeta:y})};return r.forEach((d,f)=>{var p;if(d.path===""||!((p=d.path)!=null&&p.includes("?")))l(d,f);else for(let g of Mp(d.path))l(d,f,g)}),n}function Mp(r){let n=r.split("/");if(n.length===0)return[];let[o,...s]=n,l=o.endsWith("?"),d=o.replace(/\?$/,"");if(s.length===0)return l?[d,""]:[d];let f=Mp(s.join("/")),p=[];return p.push(...f.map(g=>g===""?d:[d,g].join("/"))),l&&p.push(...f),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function py(r){r.sort((n,o)=>n.score!==o.score?o.score-n.score:_y(n.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}const gy=/^:[\w-]+$/,my=3,yy=2,xy=1,vy=10,wy=-2,Ch=r=>r==="*";function by(r,n){let o=r.split("/"),s=o.length;return o.some(Ch)&&(s+=wy),n&&(s+=yy),o.filter(l=>!Ch(l)).reduce((l,d)=>l+(gy.test(d)?my:d===""?xy:vy),s)}function _y(r,n){return r.length===n.length&&r.slice(0,-1).every((s,l)=>s===n[l])?r[r.length-1]-n[n.length-1]:0}function Sy(r,n,o){let{routesMeta:s}=r,l={},d="/",f=[];for(let p=0;p<s.length;++p){let g=s[p],x=p===s.length-1,y=d==="/"?n:n.slice(d.length)||"/",w=su({path:g.relativePath,caseSensitive:g.caseSensitive,end:x},y),R=g.route;if(!w)return null;Object.assign(l,w.params),f.push({params:l,pathname:Pr([d,w.pathname]),pathnameBase:Py(Pr([d,w.pathnameBase])),route:R}),w.pathnameBase!=="/"&&(d=Pr([d,w.pathnameBase]))}return f}function su(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[o,s]=ky(r.path,r.caseSensitive,r.end),l=n.match(o);if(!l)return null;let d=l[0],f=d.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((x,y,w)=>{let{paramName:R,isOptional:B}=y;if(R==="*"){let A=p[w]||"";f=d.slice(0,d.length-A.length).replace(/(.)\/+$/,"$1")}const D=p[w];return B&&!D?x[R]=void 0:x[R]=(D||"").replace(/%2F/g,"/"),x},{}),pathname:d,pathnameBase:f,pattern:r}}function ky(r,n,o){n===void 0&&(n=!1),o===void 0&&(o=!0),Lp(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),s]}function Ey(r){try{return r.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Lp(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),r}}function Gi(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,s=r.charAt(o);return s&&s!=="/"?null:r.slice(o)||"/"}function Cy(r,n){n===void 0&&(n="/");let{pathname:o,search:s="",hash:l=""}=typeof r=="string"?Yi(r):r,d;return o?(o=Up(o),o.startsWith("/")?d=Rh(o.substring(1),"/"):d=Rh(o,n)):d=n,{pathname:d,search:Ny(s),hash:jy(l)}}function Rh(r,n){let o=n.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?o.length>1&&o.pop():l!=="."&&o.push(l)}),o.length>1?o.join("/"):"/"}function Hc(r,n,o,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ry(r){return r.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function Su(r,n){let o=Ry(r);return n?o.map((s,l)=>l===o.length-1?s.pathname:s.pathnameBase):o.map(s=>s.pathnameBase)}function ku(r,n,o,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=Yi(r):(l=ss({},r),Ve(!l.pathname||!l.pathname.includes("?"),Hc("?","pathname","search",l)),Ve(!l.pathname||!l.pathname.includes("#"),Hc("#","pathname","hash",l)),Ve(!l.search||!l.search.includes("#"),Hc("#","search","hash",l)));let d=r===""||l.pathname==="",f=d?"/":l.pathname,p;if(f==null)p=o;else{let w=n.length-1;if(!s&&f.startsWith("..")){let R=f.split("/");for(;R[0]==="..";)R.shift(),w-=1;l.pathname=R.join("/")}p=w>=0?n[w]:"/"}let g=Cy(l,p),x=f&&f!=="/"&&f.endsWith("/"),y=(d||f===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(x||y)&&(g.pathname+="/"),g}const Up=r=>r.replace(/\/\/+/g,"/"),Pr=r=>Up(r.join("/")),Py=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Ny=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,jy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Ty(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Fp=["post","put","patch","delete"];new Set(Fp);const Oy=["get",...Fp];new Set(Oy);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)({}).hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},as.apply(null,arguments)}const Qa=k.createContext(null),$p=k.createContext(null),Qn=k.createContext(null),Xa=k.createContext(null),On=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Bp=k.createContext(null);function Iy(r,n){let{relative:o}=n===void 0?{}:n;Zi()||Ve(!1);let{basename:s,navigator:l}=k.useContext(Qn),{hash:d,pathname:f,search:p}=Ja(r,{relative:o}),g=f;return s!=="/"&&(g=f==="/"?s:Pr([s,f])),l.createHref({pathname:g,search:p,hash:d})}function Zi(){return k.useContext(Xa)!=null}function Xn(){return Zi()||Ve(!1),k.useContext(Xa).location}function Hp(r){k.useContext(Qn).static||k.useLayoutEffect(r)}function Ga(){let{isDataRoute:r}=k.useContext(On);return r?Qy():Ay()}function Ay(){Zi()||Ve(!1);let r=k.useContext(Qa),{basename:n,future:o,navigator:s}=k.useContext(Qn),{matches:l}=k.useContext(On),{pathname:d}=Xn(),f=JSON.stringify(Su(l,o.v7_relativeSplatPath)),p=k.useRef(!1);return Hp(()=>{p.current=!0}),k.useCallback(function(x,y){if(y===void 0&&(y={}),!p.current)return;if(typeof x=="number"){s.go(x);return}let w=ku(x,JSON.parse(f),d,y.relative==="path");r==null&&n!=="/"&&(w.pathname=w.pathname==="/"?n:Pr([n,w.pathname])),(y.replace?s.replace:s.push)(w,y.state,y)},[n,s,f,d,r])}const Dy=k.createContext(null);function Ly(r){let n=k.useContext(On).outlet;return n&&k.createElement(Dy.Provider,{value:r},n)}function fb(){let{matches:r}=k.useContext(On),n=r[r.length-1];return n?n.params:{}}function Ja(r,n){let{relative:o}=n===void 0?{}:n,{future:s}=k.useContext(Qn),{matches:l}=k.useContext(On),{pathname:d}=Xn(),f=JSON.stringify(Su(l,s.v7_relativeSplatPath));return k.useMemo(()=>ku(r,JSON.parse(f),d,o==="path"),[r,f,d,o])}function zy(r,n){return My(r,n)}function My(r,n,o,s){Zi()||Ve(!1);let{navigator:l}=k.useContext(Qn),{matches:d}=k.useContext(On),f=d[d.length-1],p=f?f.params:{};f&&f.pathname;let g=f?f.pathnameBase:"/";f&&f.route;let x=Xn(),y;if(n){var w;let I=typeof n=="string"?Yi(n):n;g==="/"||(w=I.pathname)!=null&&w.startsWith(g)||Ve(!1),y=I}else y=x;let R=y.pathname||"/",B=R;if(g!=="/"){let I=g.replace(/^\//,"").split("/");B="/"+R.replace(/^\//,"").split("/").slice(I.length).join("/")}let D=fy(r,{pathname:B}),A=Hy(D&&D.map(I=>Object.assign({},I,{params:Object.assign({},p,I.params),pathname:Pr([g,l.encodeLocation?l.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?g:Pr([g,l.encodeLocation?l.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),d,o,s);return n&&A?k.createElement(Xa.Provider,{value:{location:as({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Rr.Pop}},A):A}function Uy(){let r=Ky(),n=Ty(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),o=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},n),o?k.createElement("pre",{style:l},o):null,null)}const Fy=k.createElement(Uy,null);class $y extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error!==void 0?k.createElement(On.Provider,{value:this.props.routeContext},k.createElement(Bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function By(r){let{routeContext:n,match:o,children:s}=r,l=k.useContext(Qa);return l&&l.static&&l.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=o.route.id),k.createElement(On.Provider,{value:n},s)}function Hy(r,n,o,s){var l;if(n===void 0&&(n=[]),o===void 0&&(o=null),s===void 0&&(s=null),r==null){var d;if(!o)return null;if(o.errors)r=o.matches;else if((d=s)!=null&&d.v7_partialHydration&&n.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let f=r,p=(l=o)==null?void 0:l.errors;if(p!=null){let y=f.findIndex(w=>w.route.id&&(p==null?void 0:p[w.route.id])!==void 0);y>=0||Ve(!1),f=f.slice(0,Math.min(f.length,y+1))}let g=!1,x=-1;if(o&&s&&s.v7_partialHydration)for(let y=0;y<f.length;y++){let w=f[y];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(x=y),w.route.id){let{loaderData:R,errors:B}=o,D=w.route.loader&&R[w.route.id]===void 0&&(!B||B[w.route.id]===void 0);if(w.route.lazy||D){g=!0,x>=0?f=f.slice(0,x+1):f=[f[0]];break}}}return f.reduceRight((y,w,R)=>{let B,D=!1,A=null,I=null;o&&(B=p&&w.route.id?p[w.route.id]:void 0,A=w.route.errorElement||Fy,g&&(x<0&&R===0?(Xy("route-fallback"),D=!0,I=null):x===R&&(D=!0,I=w.route.hydrateFallbackElement||null)));let N=n.concat(f.slice(0,R+1)),T=()=>{let M;return B?M=A:D?M=I:w.route.Component?M=k.createElement(w.route.Component,null):w.route.element?M=w.route.element:M=y,k.createElement(By,{match:w,routeContext:{outlet:y,matches:N,isDataRoute:o!=null},children:M})};return o&&(w.route.ErrorBoundary||w.route.errorElement||R===0)?k.createElement($y,{location:o.location,revalidation:o.revalidation,component:A,error:B,children:T(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):T()},null)}var Wp=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(Wp||{}),Vp=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Vp||{});function Wy(r){let n=k.useContext(Qa);return n||Ve(!1),n}function Vy(r){let n=k.useContext($p);return n||Ve(!1),n}function qy(r){let n=k.useContext(On);return n||Ve(!1),n}function qp(r){let n=qy(),o=n.matches[n.matches.length-1];return o.route.id||Ve(!1),o.route.id}function Ky(){var r;let n=k.useContext(Bp),o=Vy(),s=qp();return n!==void 0?n:(r=o.errors)==null?void 0:r[s]}function Qy(){let{router:r}=Wy(Wp.UseNavigateStable),n=qp(Vp.UseNavigateStable),o=k.useRef(!1);return Hp(()=>{o.current=!0}),k.useCallback(function(l,d){d===void 0&&(d={}),o.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,as({fromRouteId:n},d)))},[r,n])}const Ph={};function Xy(r,n,o){Ph[r]||(Ph[r]=!0)}function Gy(r,n){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Jy(r){let{to:n,replace:o,state:s,relative:l}=r;Zi()||Ve(!1);let{future:d,static:f}=k.useContext(Qn),{matches:p}=k.useContext(On),{pathname:g}=Xn(),x=Ga(),y=ku(n,Su(p,d.v7_relativeSplatPath),g,l==="path"),w=JSON.stringify(y);return k.useEffect(()=>x(JSON.parse(w),{replace:o,state:s,relative:l}),[x,w,l,o,s]),null}function Yy(r){return Ly(r.context)}function nt(r){Ve(!1)}function Zy(r){let{basename:n="/",children:o=null,location:s,navigationType:l=Rr.Pop,navigator:d,static:f=!1,future:p}=r;Zi()&&Ve(!1);let g=n.replace(/^\/*/,"/"),x=k.useMemo(()=>({basename:g,navigator:d,static:f,future:as({v7_relativeSplatPath:!1},p)}),[g,p,d,f]);typeof s=="string"&&(s=Yi(s));let{pathname:y="/",search:w="",hash:R="",state:B=null,key:D="default"}=s,A=k.useMemo(()=>{let I=Gi(y,g);return I==null?null:{location:{pathname:I,search:w,hash:R,state:B,key:D},navigationType:l}},[g,y,w,R,B,D,l]);return A==null?null:k.createElement(Qn.Provider,{value:x},k.createElement(Xa.Provider,{children:o,value:A}))}function ex(r){let{children:n,location:o}=r;return zy(au(n),o)}new Promise(()=>{});function au(r,n){n===void 0&&(n=[]);let o=[];return k.Children.forEach(r,(s,l)=>{if(!k.isValidElement(s))return;let d=[...n,l];if(s.type===k.Fragment){o.push.apply(o,au(s.props.children,d));return}s.type!==nt&&Ve(!1),!s.props.index||!s.props.children||Ve(!1);let f={id:s.props.id||d.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=au(s.props.children,d)),o.push(f)}),o}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)({}).hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},Ba.apply(null,arguments)}function Kp(r,n){if(r==null)return{};var o={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(n.indexOf(s)!==-1)continue;o[s]=r[s]}return o}function tx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function nx(r,n){return r.button===0&&(!n||n==="_self")&&!tx(r)}function lu(r){return r===void 0&&(r=""),new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((n,o)=>{let s=r[o];return n.concat(Array.isArray(s)?s.map(l=>[o,l]):[[o,s]])},[]))}function rx(r,n){let o=lu(r);return n&&n.forEach((s,l)=>{o.has(l)||n.getAll(l).forEach(d=>{o.append(l,d)})}),o}const ix=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ox=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],sx="6";try{window.__reactRouterVersion=sx}catch{}const ax=k.createContext({isTransitioning:!1}),lx="startTransition",Nh=C0[lx];function cx(r){let{basename:n,children:o,future:s,window:l}=r,d=k.useRef();d.current==null&&(d.current=cy({window:l,v5Compat:!0}));let f=d.current,[p,g]=k.useState({action:f.action,location:f.location}),{v7_startTransition:x}=s||{},y=k.useCallback(w=>{x&&Nh?Nh(()=>g(w)):g(w)},[g,x]);return k.useLayoutEffect(()=>f.listen(y),[f,y]),k.useEffect(()=>Gy(s),[s]),k.createElement(Zy,{basename:n,children:o,location:p.location,navigationType:p.action,navigator:f,future:s})}const ux=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qp=k.forwardRef(function(n,o){let{onClick:s,relative:l,reloadDocument:d,replace:f,state:p,target:g,to:x,preventScrollReset:y,viewTransition:w}=n,R=Kp(n,ix),{basename:B}=k.useContext(Qn),D,A=!1;if(typeof x=="string"&&dx.test(x)&&(D=x,ux))try{let M=new URL(window.location.href),U=x.startsWith("//")?new URL(M.protocol+x):new URL(x),V=Gi(U.pathname,B);U.origin===M.origin&&V!=null?x=V+U.search+U.hash:A=!0}catch{}let I=Iy(x,{relative:l}),N=hx(x,{replace:f,state:p,target:g,preventScrollReset:y,relative:l,viewTransition:w});function T(M){s&&s(M),M.defaultPrevented||N(M)}return k.createElement("a",Ba({},R,{href:D||I,onClick:A||d?s:T,ref:o,target:g}))}),hb=k.forwardRef(function(n,o){let{"aria-current":s="page",caseSensitive:l=!1,className:d="",end:f=!1,style:p,to:g,viewTransition:x,children:y}=n,w=Kp(n,ox),R=Ja(g,{relative:w.relative}),B=Xn(),D=k.useContext($p),{navigator:A,basename:I}=k.useContext(Qn),N=D!=null&&gx(R)&&x===!0,T=A.encodeLocation?A.encodeLocation(R).pathname:R.pathname,M=B.pathname,U=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;l||(M=M.toLowerCase(),U=U?U.toLowerCase():null,T=T.toLowerCase()),U&&I&&(U=Gi(U,I)||U);const V=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let G=M===T||!f&&M.startsWith(T)&&M.charAt(V)==="/",se=U!=null&&(U===T||!f&&U.startsWith(T)&&U.charAt(T.length)==="/"),_e={isActive:G,isPending:se,isTransitioning:N},ve=G?s:void 0,le;typeof d=="function"?le=d(_e):le=[d,G?"active":null,se?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let Ne=typeof p=="function"?p(_e):p;return k.createElement(Qp,Ba({},w,{"aria-current":ve,className:le,ref:o,style:Ne,to:g,viewTransition:x}),typeof y=="function"?y(_e):y)});var cu;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(cu||(cu={}));var jh;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(jh||(jh={}));function fx(r){let n=k.useContext(Qa);return n||Ve(!1),n}function hx(r,n){let{target:o,replace:s,state:l,preventScrollReset:d,relative:f,viewTransition:p}=n===void 0?{}:n,g=Ga(),x=Xn(),y=Ja(r,{relative:f});return k.useCallback(w=>{if(nx(w,o)){w.preventDefault();let R=s!==void 0?s:$a(x)===$a(y);g(r,{replace:R,state:l,preventScrollReset:d,relative:f,viewTransition:p})}},[x,g,y,s,l,o,r,d,f,p])}function px(r){let n=k.useRef(lu(r)),o=k.useRef(!1),s=Xn(),l=k.useMemo(()=>rx(s.search,o.current?null:n.current),[s.search]),d=Ga(),f=k.useCallback((p,g)=>{const x=lu(typeof p=="function"?p(l):p);o.current=!0,d("?"+x,g)},[d,l]);return[l,f]}function gx(r,n){n===void 0&&(n={});let o=k.useContext(ax);o==null&&Ve(!1);let{basename:s}=fx(cu.useViewTransitionState),l=Ja(r,{relative:n.relative});if(!o.isTransitioning)return!1;let d=Gi(o.currentLocation.pathname,s)||o.currentLocation.pathname,f=Gi(o.nextLocation.pathname,s)||o.nextLocation.pathname;return su(l.pathname,f)!=null||su(l.pathname,d)!=null}const mx="modulepreload",yx=function(r){return"/"+r},Th={},It=function(n,o,s){let l=Promise.resolve();if(o&&o.length>0){let f=function(x){return Promise.all(x.map(y=>Promise.resolve(y).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),g=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));l=f(o.map(x=>{if(x=yx(x),x in Th)return;Th[x]=!0;const y=x.endsWith(".css"),w=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${w}`))return;const R=document.createElement("link");if(R.rel=y?"stylesheet":mx,y||(R.as="script"),R.crossOrigin="",R.href=x,g&&R.setAttribute("nonce",g),document.head.appendChild(R),y)return new Promise((B,D)=>{R.addEventListener("load",B),R.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${x}`)))})}))}function d(f){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=f,window.dispatchEvent(p),!p.defaultPrevented)throw f}return l.then(f=>{for(const p of f||[])p.status==="rejected"&&d(p.reason);return n().catch(d)})};class ti extends Error{constructor(n,o){const s=new.target.prototype;super(`${n}: Status code '${o}'`),this.statusCode=o,this.__proto__=s}}class Eu extends Error{constructor(n="A timeout occurred."){const o=new.target.prototype;super(n),this.__proto__=o}}class yn extends Error{constructor(n="An abort occurred."){const o=new.target.prototype;super(n),this.__proto__=o}}class xx extends Error{constructor(n,o){const s=new.target.prototype;super(n),this.transport=o,this.errorType="UnsupportedTransportError",this.__proto__=s}}class vx extends Error{constructor(n,o){const s=new.target.prototype;super(n),this.transport=o,this.errorType="DisabledTransportError",this.__proto__=s}}class wx extends Error{constructor(n,o){const s=new.target.prototype;super(n),this.transport=o,this.errorType="FailedToStartTransportError",this.__proto__=s}}class Oh extends Error{constructor(n){const o=new.target.prototype;super(n),this.errorType="FailedToNegotiateWithServerError",this.__proto__=o}}class bx extends Error{constructor(n,o){const s=new.target.prototype;super(n),this.innerErrors=o,this.__proto__=s}}class Xp{constructor(n,o,s){this.statusCode=n,this.statusText=o,this.content=s}}class Ya{get(n,o){return this.send({...o,method:"GET",url:n})}post(n,o){return this.send({...o,method:"POST",url:n})}delete(n,o){return this.send({...o,method:"DELETE",url:n})}getCookieString(n){return""}}var F;(function(r){r[r.Trace=0]="Trace",r[r.Debug=1]="Debug",r[r.Information=2]="Information",r[r.Warning=3]="Warning",r[r.Error=4]="Error",r[r.Critical=5]="Critical",r[r.None=6]="None"})(F||(F={}));class ls{constructor(){}log(n,o){}}ls.instance=new ls;const _x="8.0.29";class rt{static isRequired(n,o){if(n==null)throw new Error(`The '${o}' argument is required.`)}static isNotEmpty(n,o){if(!n||n.match(/^\s*$/))throw new Error(`The '${o}' argument should not be empty.`)}static isIn(n,o,s){if(!(n in o))throw new Error(`Unknown ${s} value: ${n}.`)}}class We{static get isBrowser(){return!We.isNode&&typeof window=="object"&&typeof window.document=="object"}static get isWebWorker(){return!We.isNode&&typeof self=="object"&&"importScripts"in self}static get isReactNative(){return!We.isNode&&typeof window=="object"&&typeof window.document>"u"}static get isNode(){return typeof process<"u"&&process.release&&process.release.name==="node"}}function cs(r,n){let o="";return ii(r)?(o=`Binary data of length ${r.byteLength}`,n&&(o+=`. Content: '${Sx(r)}'`)):typeof r=="string"&&(o=`String data of length ${r.length}`,n&&(o+=`. Content: '${r}'`)),o}function Sx(r){const n=new Uint8Array(r);let o="";return n.forEach(s=>{const l=s<16?"0":"";o+=`0x${l}${s.toString(16)} `}),o.substr(0,o.length-1)}function ii(r){return r&&typeof ArrayBuffer<"u"&&(r instanceof ArrayBuffer||r.constructor&&r.constructor.name==="ArrayBuffer")}async function Gp(r,n,o,s,l,d){const f={},[p,g]=Ji();f[p]=g,r.log(F.Trace,`(${n} transport) sending data. ${cs(l,d.logMessageContent)}.`);const x=ii(l)?"arraybuffer":"text",y=await o.post(s,{content:l,headers:{...f,...d.headers},responseType:x,timeout:d.timeout,withCredentials:d.withCredentials});r.log(F.Trace,`(${n} transport) request complete. Response status: ${y.statusCode}.`)}function kx(r){return r===void 0?new Ha(F.Information):r===null?ls.instance:r.log!==void 0?r:new Ha(r)}class Ex{constructor(n,o){this._subject=n,this._observer=o}dispose(){const n=this._subject.observers.indexOf(this._observer);n>-1&&this._subject.observers.splice(n,1),this._subject.observers.length===0&&this._subject.cancelCallback&&this._subject.cancelCallback().catch(o=>{})}}class Ha{constructor(n){this._minLevel=n,this.out=console}log(n,o){if(n>=this._minLevel){const s=`[${new Date().toISOString()}] ${F[n]}: ${o}`;switch(n){case F.Critical:case F.Error:this.out.error(s);break;case F.Warning:this.out.warn(s);break;case F.Information:this.out.info(s);break;default:this.out.log(s);break}}}}function Ji(){let r="X-SignalR-User-Agent";return We.isNode&&(r="User-Agent"),[r,Cx(_x,Rx(),Nx(),Px())]}function Cx(r,n,o,s){let l="Microsoft SignalR/";const d=r.split(".");return l+=`${d[0]}.${d[1]}`,l+=` (${r}; `,n&&n!==""?l+=`${n}; `:l+="Unknown OS; ",l+=`${o}`,s?l+=`; ${s}`:l+="; Unknown Runtime Version",l+=")",l}function Rx(){if(We.isNode)switch(process.platform){case"win32":return"Windows NT";case"darwin":return"macOS";case"linux":return"Linux";default:return process.platform}else return""}function Px(){if(We.isNode)return process.versions.node}function Nx(){return We.isNode?"NodeJS":"Browser"}function Wc(r){return r.stack?r.stack:r.message?r.message:`${r}`}function jx(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("could not find global")}class Tx extends Ya{constructor(n){if(super(),this._logger=n,typeof fetch>"u"||We.isNode){const o=typeof __webpack_require__=="function"?__non_webpack_require__:require;this._jar=new(o("tough-cookie")).CookieJar,typeof fetch>"u"?this._fetchType=o("node-fetch"):this._fetchType=fetch,this._fetchType=o("fetch-cookie")(this._fetchType,this._jar)}else this._fetchType=fetch.bind(jx());if(typeof AbortController>"u"){const o=typeof __webpack_require__=="function"?__non_webpack_require__:require;this._abortControllerType=o("abort-controller")}else this._abortControllerType=AbortController}async send(n){if(n.abortSignal&&n.abortSignal.aborted)throw new yn;if(!n.method)throw new Error("No method defined.");if(!n.url)throw new Error("No url defined.");const o=new this._abortControllerType;let s;n.abortSignal&&(n.abortSignal.onabort=()=>{o.abort(),s=new yn});let l=null;if(n.timeout){const g=n.timeout;l=setTimeout(()=>{o.abort(),this._logger.log(F.Warning,"Timeout from HTTP request."),s=new Eu},g)}n.content===""&&(n.content=void 0),n.content&&(n.headers=n.headers||{},ii(n.content)?n.headers["Content-Type"]="application/octet-stream":n.headers["Content-Type"]="text/plain;charset=UTF-8");let d;try{d=await this._fetchType(n.url,{body:n.content,cache:"no-cache",credentials:n.withCredentials===!0?"include":"same-origin",headers:{"X-Requested-With":"XMLHttpRequest",...n.headers},method:n.method,mode:"cors",redirect:"follow",signal:o.signal})}catch(g){throw s||(this._logger.log(F.Warning,`Error from HTTP request. ${g}.`),g)}finally{l&&clearTimeout(l),n.abortSignal&&(n.abortSignal.onabort=null)}if(!d.ok){const g=await Ih(d,"text");throw new ti(g||d.statusText,d.status)}const p=await Ih(d,n.responseType);return new Xp(d.status,d.statusText,p)}getCookieString(n){let o="";return We.isNode&&this._jar&&this._jar.getCookies(n,(s,l)=>o=l.join("; ")),o}}function Ih(r,n){let o;switch(n){case"arraybuffer":o=r.arrayBuffer();break;case"text":o=r.text();break;case"blob":case"document":case"json":throw new Error(`${n} is not supported.`);default:o=r.text();break}return o}class Ox extends Ya{constructor(n){super(),this._logger=n}send(n){return n.abortSignal&&n.abortSignal.aborted?Promise.reject(new yn):n.method?n.url?new Promise((o,s)=>{const l=new XMLHttpRequest;l.open(n.method,n.url,!0),l.withCredentials=n.withCredentials===void 0?!0:n.withCredentials,l.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.content===""&&(n.content=void 0),n.content&&(ii(n.content)?l.setRequestHeader("Content-Type","application/octet-stream"):l.setRequestHeader("Content-Type","text/plain;charset=UTF-8"));const d=n.headers;d&&Object.keys(d).forEach(f=>{l.setRequestHeader(f,d[f])}),n.responseType&&(l.responseType=n.responseType),n.abortSignal&&(n.abortSignal.onabort=()=>{l.abort(),s(new yn)}),n.timeout&&(l.timeout=n.timeout),l.onload=()=>{n.abortSignal&&(n.abortSignal.onabort=null),l.status>=200&&l.status<300?o(new Xp(l.status,l.statusText,l.response||l.responseText)):s(new ti(l.response||l.responseText||l.statusText,l.status))},l.onerror=()=>{this._logger.log(F.Warning,`Error from HTTP request. ${l.status}: ${l.statusText}.`),s(new ti(l.statusText,l.status))},l.ontimeout=()=>{this._logger.log(F.Warning,"Timeout from HTTP request."),s(new Eu)},l.send(n.content)}):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}}class Ix extends Ya{constructor(n){if(super(),typeof fetch<"u"||We.isNode)this._httpClient=new Tx(n);else if(typeof XMLHttpRequest<"u")this._httpClient=new Ox(n);else throw new Error("No usable HttpClient found.")}send(n){return n.abortSignal&&n.abortSignal.aborted?Promise.reject(new yn):n.method?n.url?this._httpClient.send(n):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}getCookieString(n){return this._httpClient.getCookieString(n)}}class Qt{static write(n){return`${n}${Qt.RecordSeparator}`}static parse(n){if(n[n.length-1]!==Qt.RecordSeparator)throw new Error("Message is incomplete.");const o=n.split(Qt.RecordSeparator);return o.pop(),o}}Qt.RecordSeparatorCode=30;Qt.RecordSeparator=String.fromCharCode(Qt.RecordSeparatorCode);class Ax{writeHandshakeRequest(n){return Qt.write(JSON.stringify(n))}parseHandshakeResponse(n){let o,s;if(ii(n)){const p=new Uint8Array(n),g=p.indexOf(Qt.RecordSeparatorCode);if(g===-1)throw new Error("Message is incomplete.");const x=g+1;o=String.fromCharCode.apply(null,Array.prototype.slice.call(p.slice(0,x))),s=p.byteLength>x?p.slice(x).buffer:null}else{const p=n,g=p.indexOf(Qt.RecordSeparator);if(g===-1)throw new Error("Message is incomplete.");const x=g+1;o=p.substring(0,x),s=p.length>x?p.substring(x):null}const l=Qt.parse(o),d=JSON.parse(l[0]);if(d.type)throw new Error("Expected a handshake response from the server.");return[s,d]}}var be;(function(r){r[r.Invocation=1]="Invocation",r[r.StreamItem=2]="StreamItem",r[r.Completion=3]="Completion",r[r.StreamInvocation=4]="StreamInvocation",r[r.CancelInvocation=5]="CancelInvocation",r[r.Ping=6]="Ping",r[r.Close=7]="Close",r[r.Ack=8]="Ack",r[r.Sequence=9]="Sequence"})(be||(be={}));class Dx{constructor(){this.observers=[]}next(n){for(const o of this.observers)o.next(n)}error(n){for(const o of this.observers)o.error&&o.error(n)}complete(){for(const n of this.observers)n.complete&&n.complete()}subscribe(n){return this.observers.push(n),new Ex(this,n)}}class Lx{constructor(n,o,s){this._bufferSize=1e5,this._messages=[],this._totalMessageCount=0,this._waitForSequenceMessage=!1,this._nextReceivingSequenceId=1,this._latestReceivedSequenceId=0,this._bufferedByteCount=0,this._reconnectInProgress=!1,this._protocol=n,this._connection=o,this._bufferSize=s}async _send(n){const o=this._protocol.writeMessage(n);let s=Promise.resolve();if(this._isInvocationMessage(n)){this._totalMessageCount++;let l=()=>{},d=()=>{};ii(o)?this._bufferedByteCount+=o.byteLength:this._bufferedByteCount+=o.length,this._bufferedByteCount>=this._bufferSize&&(s=new Promise((f,p)=>{l=f,d=p})),this._messages.push(new zx(o,this._totalMessageCount,l,d))}try{this._reconnectInProgress||await this._connection.send(o)}catch{this._disconnected()}await s}_ack(n){let o=-1;for(let s=0;s<this._messages.length;s++){const l=this._messages[s];if(l._id<=n.sequenceId)o=s,ii(l._message)?this._bufferedByteCount-=l._message.byteLength:this._bufferedByteCount-=l._message.length,l._resolver();else if(this._bufferedByteCount<this._bufferSize)l._resolver();else break}o!==-1&&(this._messages=this._messages.slice(o+1))}_shouldProcessMessage(n){if(this._waitForSequenceMessage)return n.type!==be.Sequence?!1:(this._waitForSequenceMessage=!1,!0);if(!this._isInvocationMessage(n))return!0;const o=this._nextReceivingSequenceId;return this._nextReceivingSequenceId++,o<=this._latestReceivedSequenceId?(o===this._latestReceivedSequenceId&&this._ackTimer(),!1):(this._latestReceivedSequenceId=o,this._ackTimer(),!0)}_resetSequence(n){if(n.sequenceId>this._nextReceivingSequenceId){this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));return}this._nextReceivingSequenceId=n.sequenceId}_disconnected(){this._reconnectInProgress=!0,this._waitForSequenceMessage=!0}async _resend(){const n=this._messages.length!==0?this._messages[0]._id:this._totalMessageCount+1;await this._connection.send(this._protocol.writeMessage({type:be.Sequence,sequenceId:n}));const o=this._messages;for(const s of o)await this._connection.send(s._message);this._reconnectInProgress=!1}_dispose(n){n??(n=new Error("Unable to reconnect to server."));for(const o of this._messages)o._rejector(n)}_isInvocationMessage(n){switch(n.type){case be.Invocation:case be.StreamItem:case be.Completion:case be.StreamInvocation:case be.CancelInvocation:return!0;case be.Close:case be.Sequence:case be.Ping:case be.Ack:return!1}}_ackTimer(){this._ackTimerHandle===void 0&&(this._ackTimerHandle=setTimeout(async()=>{try{this._reconnectInProgress||await this._connection.send(this._protocol.writeMessage({type:be.Ack,sequenceId:this._latestReceivedSequenceId}))}catch{}clearTimeout(this._ackTimerHandle),this._ackTimerHandle=void 0},1e3))}}class zx{constructor(n,o,s,l){this._message=n,this._id=o,this._resolver=s,this._rejector=l}}const Mx=30*1e3,Ux=15*1e3,Fx=1e5;var Fe;(function(r){r.Disconnected="Disconnected",r.Connecting="Connecting",r.Connected="Connected",r.Disconnecting="Disconnecting",r.Reconnecting="Reconnecting"})(Fe||(Fe={}));class Cu{static create(n,o,s,l,d,f,p){return new Cu(n,o,s,l,d,f,p)}constructor(n,o,s,l,d,f,p){this._nextKeepAlive=0,this._freezeEventListener=()=>{this._logger.log(F.Warning,"The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")},rt.isRequired(n,"connection"),rt.isRequired(o,"logger"),rt.isRequired(s,"protocol"),this.serverTimeoutInMilliseconds=d??Mx,this.keepAliveIntervalInMilliseconds=f??Ux,this._statefulReconnectBufferSize=p??Fx,this._logger=o,this._protocol=s,this.connection=n,this._reconnectPolicy=l,this._handshakeProtocol=new Ax,this.connection.onreceive=g=>this._processIncomingData(g),this.connection.onclose=g=>this._connectionClosed(g),this._callbacks={},this._methods={},this._closedCallbacks=[],this._reconnectingCallbacks=[],this._reconnectedCallbacks=[],this._invocationId=0,this._receivedHandshakeResponse=!1,this._connectionState=Fe.Disconnected,this._connectionStarted=!1,this._cachedPingMessage=this._protocol.writeMessage({type:be.Ping})}get state(){return this._connectionState}get connectionId(){return this.connection&&this.connection.connectionId||null}get baseUrl(){return this.connection.baseUrl||""}set baseUrl(n){if(this._connectionState!==Fe.Disconnected&&this._connectionState!==Fe.Reconnecting)throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");if(!n)throw new Error("The HubConnection url must be a valid url.");this.connection.baseUrl=n}start(){return this._startPromise=this._startWithStateTransitions(),this._startPromise}async _startWithStateTransitions(){if(this._connectionState!==Fe.Disconnected)return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));this._connectionState=Fe.Connecting,this._logger.log(F.Debug,"Starting HubConnection.");try{await this._startInternal(),We.isBrowser&&window.document.addEventListener("freeze",this._freezeEventListener),this._connectionState=Fe.Connected,this._connectionStarted=!0,this._logger.log(F.Debug,"HubConnection connected successfully.")}catch(n){return this._connectionState=Fe.Disconnected,this._logger.log(F.Debug,`HubConnection failed to start successfully because of error '${n}'.`),Promise.reject(n)}}async _startInternal(){this._stopDuringStartError=void 0,this._receivedHandshakeResponse=!1;const n=new Promise((o,s)=>{this._handshakeResolver=o,this._handshakeRejecter=s});await this.connection.start(this._protocol.transferFormat);try{let o=this._protocol.version;this.connection.features.reconnect||(o=1);const s={protocol:this._protocol.name,version:o};if(this._logger.log(F.Debug,"Sending handshake request."),await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(s)),this._logger.log(F.Information,`Using HubProtocol '${this._protocol.name}'.`),this._cleanupTimeout(),this._resetTimeoutPeriod(),this._resetKeepAliveInterval(),await n,this._stopDuringStartError)throw this._stopDuringStartError;(this.connection.features.reconnect||!1)&&(this._messageBuffer=new Lx(this._protocol,this.connection,this._statefulReconnectBufferSize),this.connection.features.disconnected=this._messageBuffer._disconnected.bind(this._messageBuffer),this.connection.features.resend=()=>{if(this._messageBuffer)return this._messageBuffer._resend()}),this.connection.features.inherentKeepAlive||await this._sendMessage(this._cachedPingMessage)}catch(o){throw this._logger.log(F.Debug,`Hub handshake failed with error '${o}' during start(). Stopping HubConnection.`),this._cleanupTimeout(),this._cleanupPingTimer(),await this.connection.stop(o),o}}async stop(){const n=this._startPromise;this.connection.features.reconnect=!1,this._stopPromise=this._stopInternal(),await this._stopPromise;try{await n}catch{}}_stopInternal(n){if(this._connectionState===Fe.Disconnected)return this._logger.log(F.Debug,`Call to HubConnection.stop(${n}) ignored because it is already in the disconnected state.`),Promise.resolve();if(this._connectionState===Fe.Disconnecting)return this._logger.log(F.Debug,`Call to HttpConnection.stop(${n}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;const o=this._connectionState;return this._connectionState=Fe.Disconnecting,this._logger.log(F.Debug,"Stopping HubConnection."),this._reconnectDelayHandle?(this._logger.log(F.Debug,"Connection stopped during reconnect delay. Done reconnecting."),clearTimeout(this._reconnectDelayHandle),this._reconnectDelayHandle=void 0,this._completeClose(),Promise.resolve()):(o===Fe.Connected&&this._sendCloseMessage(),this._cleanupTimeout(),this._cleanupPingTimer(),this._stopDuringStartError=n||new yn("The connection was stopped before the hub handshake could complete."),this.connection.stop(n))}async _sendCloseMessage(){try{await this._sendWithProtocol(this._createCloseMessage())}catch{}}stream(n,...o){const[s,l]=this._replaceStreamingParams(o),d=this._createStreamInvocation(n,o,l);let f;const p=new Dx;return p.cancelCallback=()=>{const g=this._createCancelInvocation(d.invocationId);return delete this._callbacks[d.invocationId],f.then(()=>this._sendWithProtocol(g))},this._callbacks[d.invocationId]=(g,x)=>{if(x){p.error(x);return}else g&&(g.type===be.Completion?g.error?p.error(new Error(g.error)):p.complete():p.next(g.item))},f=this._sendWithProtocol(d).catch(g=>{p.error(g),delete this._callbacks[d.invocationId]}),this._launchStreams(s,f),p}_sendMessage(n){return this._resetKeepAliveInterval(),this.connection.send(n)}_sendWithProtocol(n){return this._messageBuffer?this._messageBuffer._send(n):this._sendMessage(this._protocol.writeMessage(n))}send(n,...o){const[s,l]=this._replaceStreamingParams(o),d=this._sendWithProtocol(this._createInvocation(n,o,!0,l));return this._launchStreams(s,d),d}invoke(n,...o){const[s,l]=this._replaceStreamingParams(o),d=this._createInvocation(n,o,!1,l);return new Promise((p,g)=>{this._callbacks[d.invocationId]=(y,w)=>{if(w){g(w);return}else y&&(y.type===be.Completion?y.error?g(new Error(y.error)):p(y.result):g(new Error(`Unexpected message type: ${y.type}`)))};const x=this._sendWithProtocol(d).catch(y=>{g(y),delete this._callbacks[d.invocationId]});this._launchStreams(s,x)})}on(n,o){!n||!o||(n=n.toLowerCase(),this._methods[n]||(this._methods[n]=[]),this._methods[n].indexOf(o)===-1&&this._methods[n].push(o))}off(n,o){if(!n)return;n=n.toLowerCase();const s=this._methods[n];if(s)if(o){const l=s.indexOf(o);l!==-1&&(s.splice(l,1),s.length===0&&delete this._methods[n])}else delete this._methods[n]}onclose(n){n&&this._closedCallbacks.push(n)}onreconnecting(n){n&&this._reconnectingCallbacks.push(n)}onreconnected(n){n&&this._reconnectedCallbacks.push(n)}_processIncomingData(n){if(this._cleanupTimeout(),this._receivedHandshakeResponse||(n=this._processHandshakeResponse(n),this._receivedHandshakeResponse=!0),n){const o=this._protocol.parseMessages(n,this._logger);for(const s of o)if(!(this._messageBuffer&&!this._messageBuffer._shouldProcessMessage(s)))switch(s.type){case be.Invocation:this._invokeClientMethod(s).catch(l=>{this._logger.log(F.Error,`Invoke client method threw error: ${Wc(l)}`)});break;case be.StreamItem:case be.Completion:{const l=this._callbacks[s.invocationId];if(l){s.type===be.Completion&&delete this._callbacks[s.invocationId];try{l(s)}catch(d){this._logger.log(F.Error,`Stream callback threw error: ${Wc(d)}`)}}break}case be.Ping:break;case be.Close:{this._logger.log(F.Information,"Close message received from server.");const l=s.error?new Error("Server returned an error on close: "+s.error):void 0;s.allowReconnect===!0?this.connection.stop(l):this._stopPromise=this._stopInternal(l);break}case be.Ack:this._messageBuffer&&this._messageBuffer._ack(s);break;case be.Sequence:this._messageBuffer&&this._messageBuffer._resetSequence(s);break;default:this._logger.log(F.Warning,`Invalid message type: ${s.type}.`);break}}this._resetTimeoutPeriod()}_processHandshakeResponse(n){let o,s;try{[s,o]=this._handshakeProtocol.parseHandshakeResponse(n)}catch(l){const d="Error parsing handshake response: "+l;this._logger.log(F.Error,d);const f=new Error(d);throw this._handshakeRejecter(f),f}if(o.error){const l="Server returned handshake error: "+o.error;this._logger.log(F.Error,l);const d=new Error(l);throw this._handshakeRejecter(d),d}else this._logger.log(F.Debug,"Server handshake complete.");return this._handshakeResolver(),s}_resetKeepAliveInterval(){this.connection.features.inherentKeepAlive||(this._nextKeepAlive=new Date().getTime()+this.keepAliveIntervalInMilliseconds,this._cleanupPingTimer())}_resetTimeoutPeriod(){if((!this.connection.features||!this.connection.features.inherentKeepAlive)&&(this._timeoutHandle=setTimeout(()=>this.serverTimeout(),this.serverTimeoutInMilliseconds),this._pingServerHandle===void 0)){let n=this._nextKeepAlive-new Date().getTime();n<0&&(n=0),this._pingServerHandle=setTimeout(async()=>{if(this._connectionState===Fe.Connected)try{await this._sendMessage(this._cachedPingMessage)}catch{this._cleanupPingTimer()}},n)}}serverTimeout(){this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))}async _invokeClientMethod(n){const o=n.target.toLowerCase(),s=this._methods[o];if(!s){this._logger.log(F.Warning,`No client method with the name '${o}' found.`),n.invocationId&&(this._logger.log(F.Warning,`No result given for '${o}' method and invocation ID '${n.invocationId}'.`),await this._sendWithProtocol(this._createCompletionMessage(n.invocationId,"Client didn't provide a result.",null)));return}const l=s.slice(),d=!!n.invocationId;let f,p,g;for(const x of l)try{const y=f;f=await x.apply(this,n.arguments),d&&f&&y&&(this._logger.log(F.Error,`Multiple results provided for '${o}'. Sending error to server.`),g=this._createCompletionMessage(n.invocationId,"Client provided multiple results.",null)),p=void 0}catch(y){p=y,this._logger.log(F.Error,`A callback for the method '${o}' threw error '${y}'.`)}g?await this._sendWithProtocol(g):d?(p?g=this._createCompletionMessage(n.invocationId,`${p}`,null):f!==void 0?g=this._createCompletionMessage(n.invocationId,null,f):(this._logger.log(F.Warning,`No result given for '${o}' method and invocation ID '${n.invocationId}'.`),g=this._createCompletionMessage(n.invocationId,"Client didn't provide a result.",null)),await this._sendWithProtocol(g)):f&&this._logger.log(F.Error,`Result given for '${o}' method but server is not expecting a result.`)}_connectionClosed(n){this._logger.log(F.Debug,`HubConnection.connectionClosed(${n}) called while in state ${this._connectionState}.`),this._stopDuringStartError=this._stopDuringStartError||n||new yn("The underlying connection was closed before the hub handshake could complete."),this._handshakeResolver&&this._handshakeResolver(),this._cancelCallbacksWithError(n||new Error("Invocation canceled due to the underlying connection being closed.")),this._cleanupTimeout(),this._cleanupPingTimer(),this._connectionState===Fe.Disconnecting?this._completeClose(n):this._connectionState===Fe.Connected&&this._reconnectPolicy?this._reconnect(n):this._connectionState===Fe.Connected&&this._completeClose(n)}_completeClose(n){if(this._connectionStarted){this._connectionState=Fe.Disconnected,this._connectionStarted=!1,this._messageBuffer&&(this._messageBuffer._dispose(n??new Error("Connection closed.")),this._messageBuffer=void 0),We.isBrowser&&window.document.removeEventListener("freeze",this._freezeEventListener);try{this._closedCallbacks.forEach(o=>o.apply(this,[n]))}catch(o){this._logger.log(F.Error,`An onclose callback called with error '${n}' threw error '${o}'.`)}}}async _reconnect(n){const o=Date.now();let s=0,l=n!==void 0?n:new Error("Attempting to reconnect due to a unknown error."),d=this._getNextRetryDelay(s++,0,l);if(d===null){this._logger.log(F.Debug,"Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."),this._completeClose(n);return}if(this._connectionState=Fe.Reconnecting,n?this._logger.log(F.Information,`Connection reconnecting because of error '${n}'.`):this._logger.log(F.Information,"Connection reconnecting."),this._reconnectingCallbacks.length!==0){try{this._reconnectingCallbacks.forEach(f=>f.apply(this,[n]))}catch(f){this._logger.log(F.Error,`An onreconnecting callback called with error '${n}' threw error '${f}'.`)}if(this._connectionState!==Fe.Reconnecting){this._logger.log(F.Debug,"Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");return}}for(;d!==null;){if(this._logger.log(F.Information,`Reconnect attempt number ${s} will start in ${d} ms.`),await new Promise(f=>{this._reconnectDelayHandle=setTimeout(f,d)}),this._reconnectDelayHandle=void 0,this._connectionState!==Fe.Reconnecting){this._logger.log(F.Debug,"Connection left the reconnecting state during reconnect delay. Done reconnecting.");return}try{if(await this._startInternal(),this._connectionState=Fe.Connected,this._logger.log(F.Information,"HubConnection reconnected successfully."),this._reconnectedCallbacks.length!==0)try{this._reconnectedCallbacks.forEach(f=>f.apply(this,[this.connection.connectionId]))}catch(f){this._logger.log(F.Error,`An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${f}'.`)}return}catch(f){if(this._logger.log(F.Information,`Reconnect attempt failed because of error '${f}'.`),this._connectionState!==Fe.Reconnecting){this._logger.log(F.Debug,`Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`),this._connectionState===Fe.Disconnecting&&this._completeClose();return}l=f instanceof Error?f:new Error(f.toString()),d=this._getNextRetryDelay(s++,Date.now()-o,l)}}this._logger.log(F.Information,`Reconnect retries have been exhausted after ${Date.now()-o} ms and ${s} failed attempts. Connection disconnecting.`),this._completeClose()}_getNextRetryDelay(n,o,s){try{return this._reconnectPolicy.nextRetryDelayInMilliseconds({elapsedMilliseconds:o,previousRetryCount:n,retryReason:s})}catch(l){return this._logger.log(F.Error,`IRetryPolicy.nextRetryDelayInMilliseconds(${n}, ${o}) threw error '${l}'.`),null}}_cancelCallbacksWithError(n){const o=this._callbacks;this._callbacks={},Object.keys(o).forEach(s=>{const l=o[s];try{l(null,n)}catch(d){this._logger.log(F.Error,`Stream 'error' callback called with '${n}' threw error: ${Wc(d)}`)}})}_cleanupPingTimer(){this._pingServerHandle&&(clearTimeout(this._pingServerHandle),this._pingServerHandle=void 0)}_cleanupTimeout(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}_createInvocation(n,o,s,l){if(s)return l.length!==0?{arguments:o,streamIds:l,target:n,type:be.Invocation}:{arguments:o,target:n,type:be.Invocation};{const d=this._invocationId;return this._invocationId++,l.length!==0?{arguments:o,invocationId:d.toString(),streamIds:l,target:n,type:be.Invocation}:{arguments:o,invocationId:d.toString(),target:n,type:be.Invocation}}}_launchStreams(n,o){if(n.length!==0){o||(o=Promise.resolve());for(const s in n)n[s].subscribe({complete:()=>{o=o.then(()=>this._sendWithProtocol(this._createCompletionMessage(s)))},error:l=>{let d;l instanceof Error?d=l.message:l&&l.toString?d=l.toString():d="Unknown error",o=o.then(()=>this._sendWithProtocol(this._createCompletionMessage(s,d)))},next:l=>{o=o.then(()=>this._sendWithProtocol(this._createStreamItemMessage(s,l)))}})}}_replaceStreamingParams(n){const o=[],s=[];for(let l=0;l<n.length;l++){const d=n[l];if(this._isObservable(d)){const f=this._invocationId;this._invocationId++,o[f]=d,s.push(f.toString()),n.splice(l,1)}}return[o,s]}_isObservable(n){return n&&n.subscribe&&typeof n.subscribe=="function"}_createStreamInvocation(n,o,s){const l=this._invocationId;return this._invocationId++,s.length!==0?{arguments:o,invocationId:l.toString(),streamIds:s,target:n,type:be.StreamInvocation}:{arguments:o,invocationId:l.toString(),target:n,type:be.StreamInvocation}}_createCancelInvocation(n){return{invocationId:n,type:be.CancelInvocation}}_createStreamItemMessage(n,o){return{invocationId:n,item:o,type:be.StreamItem}}_createCompletionMessage(n,o,s){return o?{error:o,invocationId:n,type:be.Completion}:{invocationId:n,result:s,type:be.Completion}}_createCloseMessage(){return{type:be.Close}}}const $x=[0,2e3,1e4,3e4,null];class Ah{constructor(n){this._retryDelays=n!==void 0?[...n,null]:$x}nextRetryDelayInMilliseconds(n){return this._retryDelays[n.previousRetryCount]}}class ni{}ni.Authorization="Authorization";ni.Cookie="Cookie";class Bx extends Ya{constructor(n,o){super(),this._innerClient=n,this._accessTokenFactory=o}async send(n){let o=!0;this._accessTokenFactory&&(!this._accessToken||n.url&&n.url.indexOf("/negotiate?")>0)&&(o=!1,this._accessToken=await this._accessTokenFactory()),this._setAuthorizationHeader(n);const s=await this._innerClient.send(n);return o&&s.statusCode===401&&this._accessTokenFactory?(this._accessToken=await this._accessTokenFactory(),this._setAuthorizationHeader(n),await this._innerClient.send(n)):s}_setAuthorizationHeader(n){n.headers||(n.headers={}),this._accessToken?n.headers[ni.Authorization]=`Bearer ${this._accessToken}`:this._accessTokenFactory&&n.headers[ni.Authorization]&&delete n.headers[ni.Authorization]}getCookieString(n){return this._innerClient.getCookieString(n)}}var lt;(function(r){r[r.None=0]="None",r[r.WebSockets=1]="WebSockets",r[r.ServerSentEvents=2]="ServerSentEvents",r[r.LongPolling=4]="LongPolling"})(lt||(lt={}));var Pt;(function(r){r[r.Text=1]="Text",r[r.Binary=2]="Binary"})(Pt||(Pt={}));let Hx=class{constructor(){this._isAborted=!1,this.onabort=null}abort(){this._isAborted||(this._isAborted=!0,this.onabort&&this.onabort())}get signal(){return this}get aborted(){return this._isAborted}};class Dh{get pollAborted(){return this._pollAbort.aborted}constructor(n,o,s){this._httpClient=n,this._logger=o,this._pollAbort=new Hx,this._options=s,this._running=!1,this.onreceive=null,this.onclose=null}async connect(n,o){if(rt.isRequired(n,"url"),rt.isRequired(o,"transferFormat"),rt.isIn(o,Pt,"transferFormat"),this._url=n,this._logger.log(F.Trace,"(LongPolling transport) Connecting."),o===Pt.Binary&&typeof XMLHttpRequest<"u"&&typeof new XMLHttpRequest().responseType!="string")throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");const[s,l]=Ji(),d={[s]:l,...this._options.headers},f={abortSignal:this._pollAbort.signal,headers:d,timeout:1e5,withCredentials:this._options.withCredentials};o===Pt.Binary&&(f.responseType="arraybuffer");const p=`${n}&_=${Date.now()}`;this._logger.log(F.Trace,`(LongPolling transport) polling: ${p}.`);const g=await this._httpClient.get(p,f);g.statusCode!==200?(this._logger.log(F.Error,`(LongPolling transport) Unexpected response code: ${g.statusCode}.`),this._closeError=new ti(g.statusText||"",g.statusCode),this._running=!1):this._running=!0,this._receiving=this._poll(this._url,f)}async _poll(n,o){try{for(;this._running;)try{const s=`${n}&_=${Date.now()}`;this._logger.log(F.Trace,`(LongPolling transport) polling: ${s}.`);const l=await this._httpClient.get(s,o);l.statusCode===204?(this._logger.log(F.Information,"(LongPolling transport) Poll terminated by server."),this._running=!1):l.statusCode!==200?(this._logger.log(F.Error,`(LongPolling transport) Unexpected response code: ${l.statusCode}.`),this._closeError=new ti(l.statusText||"",l.statusCode),this._running=!1):l.content?(this._logger.log(F.Trace,`(LongPolling transport) data received. ${cs(l.content,this._options.logMessageContent)}.`),this.onreceive&&this.onreceive(l.content)):this._logger.log(F.Trace,"(LongPolling transport) Poll timed out, reissuing.")}catch(s){this._running?s instanceof Eu?this._logger.log(F.Trace,"(LongPolling transport) Poll timed out, reissuing."):(this._closeError=s,this._running=!1):this._logger.log(F.Trace,`(LongPolling transport) Poll errored after shutdown: ${s.message}`)}}finally{this._logger.log(F.Trace,"(LongPolling transport) Polling complete."),this.pollAborted||this._raiseOnClose()}}async send(n){return this._running?Gp(this._logger,"LongPolling",this._httpClient,this._url,n,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))}async stop(){this._logger.log(F.Trace,"(LongPolling transport) Stopping polling."),this._running=!1,this._pollAbort.abort();try{await this._receiving,this._logger.log(F.Trace,`(LongPolling transport) sending DELETE request to ${this._url}.`);const n={},[o,s]=Ji();n[o]=s;const l={headers:{...n,...this._options.headers},timeout:this._options.timeout,withCredentials:this._options.withCredentials};let d;try{await this._httpClient.delete(this._url,l)}catch(f){d=f}d?d instanceof ti&&(d.statusCode===404?this._logger.log(F.Trace,"(LongPolling transport) A 404 response was returned from sending a DELETE request."):this._logger.log(F.Trace,`(LongPolling transport) Error sending a DELETE request: ${d}`)):this._logger.log(F.Trace,"(LongPolling transport) DELETE request accepted.")}finally{this._logger.log(F.Trace,"(LongPolling transport) Stop finished."),this._raiseOnClose()}}_raiseOnClose(){if(this.onclose){let n="(LongPolling transport) Firing onclose event.";this._closeError&&(n+=" Error: "+this._closeError),this._logger.log(F.Trace,n),this.onclose(this._closeError)}}}class Wx{constructor(n,o,s,l){this._httpClient=n,this._accessToken=o,this._logger=s,this._options=l,this.onreceive=null,this.onclose=null}async connect(n,o){return rt.isRequired(n,"url"),rt.isRequired(o,"transferFormat"),rt.isIn(o,Pt,"transferFormat"),this._logger.log(F.Trace,"(SSE transport) Connecting."),this._url=n,this._accessToken&&(n+=(n.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(this._accessToken)}`),new Promise((s,l)=>{let d=!1;if(o!==Pt.Text){l(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));return}let f;if(We.isBrowser||We.isWebWorker)f=new this._options.EventSource(n,{withCredentials:this._options.withCredentials});else{const p=this._httpClient.getCookieString(n),g={};g.Cookie=p;const[x,y]=Ji();g[x]=y,f=new this._options.EventSource(n,{withCredentials:this._options.withCredentials,headers:{...g,...this._options.headers}})}try{f.onmessage=p=>{if(this.onreceive)try{this._logger.log(F.Trace,`(SSE transport) data received. ${cs(p.data,this._options.logMessageContent)}.`),this.onreceive(p.data)}catch(g){this._close(g);return}},f.onerror=p=>{d?this._close():l(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))},f.onopen=()=>{this._logger.log(F.Information,`SSE connected to ${this._url}`),this._eventSource=f,d=!0,s()}}catch(p){l(p);return}})}async send(n){return this._eventSource?Gp(this._logger,"SSE",this._httpClient,this._url,n,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))}stop(){return this._close(),Promise.resolve()}_close(n){this._eventSource&&(this._eventSource.close(),this._eventSource=void 0,this.onclose&&this.onclose(n))}}class Vx{constructor(n,o,s,l,d,f){this._logger=s,this._accessTokenFactory=o,this._logMessageContent=l,this._webSocketConstructor=d,this._httpClient=n,this.onreceive=null,this.onclose=null,this._headers=f}async connect(n,o){rt.isRequired(n,"url"),rt.isRequired(o,"transferFormat"),rt.isIn(o,Pt,"transferFormat"),this._logger.log(F.Trace,"(WebSockets transport) Connecting.");let s;return this._accessTokenFactory&&(s=await this._accessTokenFactory()),new Promise((l,d)=>{n=n.replace(/^http/,"ws");let f;const p=this._httpClient.getCookieString(n);let g=!1;if(We.isNode||We.isReactNative){const x={},[y,w]=Ji();x[y]=w,s&&(x[ni.Authorization]=`Bearer ${s}`),p&&(x[ni.Cookie]=p),f=new this._webSocketConstructor(n,void 0,{headers:{...x,...this._headers}})}else s&&(n+=(n.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(s)}`);f||(f=new this._webSocketConstructor(n)),o===Pt.Binary&&(f.binaryType="arraybuffer"),f.onopen=x=>{this._logger.log(F.Information,`WebSocket connected to ${n}.`),this._webSocket=f,g=!0,l()},f.onerror=x=>{let y=null;typeof ErrorEvent<"u"&&x instanceof ErrorEvent?y=x.error:y="There was an error with the transport",this._logger.log(F.Information,`(WebSockets transport) ${y}.`)},f.onmessage=x=>{if(this._logger.log(F.Trace,`(WebSockets transport) data received. ${cs(x.data,this._logMessageContent)}.`),this.onreceive)try{this.onreceive(x.data)}catch(y){this._close(y);return}},f.onclose=x=>{if(g)this._close(x);else{let y=null;typeof ErrorEvent<"u"&&x instanceof ErrorEvent?y=x.error:y="WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.",d(new Error(y))}}})}send(n){return this._webSocket&&this._webSocket.readyState===this._webSocketConstructor.OPEN?(this._logger.log(F.Trace,`(WebSockets transport) sending data. ${cs(n,this._logMessageContent)}.`),this._webSocket.send(n),Promise.resolve()):Promise.reject("WebSocket is not in the OPEN state")}stop(){return this._webSocket&&this._close(void 0),Promise.resolve()}_close(n){this._webSocket&&(this._webSocket.onclose=()=>{},this._webSocket.onmessage=()=>{},this._webSocket.onerror=()=>{},this._webSocket.close(),this._webSocket=void 0),this._logger.log(F.Trace,"(WebSockets transport) socket closed."),this.onclose&&(this._isCloseEvent(n)&&(n.wasClean===!1||n.code!==1e3)?this.onclose(new Error(`WebSocket closed with status code: ${n.code} (${n.reason||"no reason given"}).`)):n instanceof Error?this.onclose(n):this.onclose())}_isCloseEvent(n){return n&&typeof n.wasClean=="boolean"&&typeof n.code=="number"}}const Lh=100;class qx{constructor(n,o={}){if(this._stopPromiseResolver=()=>{},this.features={},this._negotiateVersion=1,rt.isRequired(n,"url"),this._logger=kx(o.logger),this.baseUrl=this._resolveUrl(n),o=o||{},o.logMessageContent=o.logMessageContent===void 0?!1:o.logMessageContent,typeof o.withCredentials=="boolean"||o.withCredentials===void 0)o.withCredentials=o.withCredentials===void 0?!0:o.withCredentials;else throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");o.timeout=o.timeout===void 0?100*1e3:o.timeout;let s=null,l=null;if(We.isNode&&typeof require<"u"){const d=typeof __webpack_require__=="function"?__non_webpack_require__:require;s=d("ws"),l=d("eventsource")}!We.isNode&&typeof WebSocket<"u"&&!o.WebSocket?o.WebSocket=WebSocket:We.isNode&&!o.WebSocket&&s&&(o.WebSocket=s),!We.isNode&&typeof EventSource<"u"&&!o.EventSource?o.EventSource=EventSource:We.isNode&&!o.EventSource&&typeof l<"u"&&(o.EventSource=l),this._httpClient=new Bx(o.httpClient||new Ix(this._logger),o.accessTokenFactory),this._connectionState="Disconnected",this._connectionStarted=!1,this._options=o,this.onreceive=null,this.onclose=null}async start(n){if(n=n||Pt.Binary,rt.isIn(n,Pt,"transferFormat"),this._logger.log(F.Debug,`Starting connection with transfer format '${Pt[n]}'.`),this._connectionState!=="Disconnected")return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));if(this._connectionState="Connecting",this._startInternalPromise=this._startInternal(n),await this._startInternalPromise,this._connectionState==="Disconnecting"){const o="Failed to start the HttpConnection before stop() was called.";return this._logger.log(F.Error,o),await this._stopPromise,Promise.reject(new yn(o))}else if(this._connectionState!=="Connected"){const o="HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";return this._logger.log(F.Error,o),Promise.reject(new yn(o))}this._connectionStarted=!0}send(n){return this._connectionState!=="Connected"?Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")):(this._sendQueue||(this._sendQueue=new Ru(this.transport)),this._sendQueue.send(n))}async stop(n){if(this._connectionState==="Disconnected")return this._logger.log(F.Debug,`Call to HttpConnection.stop(${n}) ignored because the connection is already in the disconnected state.`),Promise.resolve();if(this._connectionState==="Disconnecting")return this._logger.log(F.Debug,`Call to HttpConnection.stop(${n}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;this._connectionState="Disconnecting",this._stopPromise=new Promise(o=>{this._stopPromiseResolver=o}),await this._stopInternal(n),await this._stopPromise}async _stopInternal(n){this._stopError=n;try{await this._startInternalPromise}catch{}if(this.transport){try{await this.transport.stop()}catch(o){this._logger.log(F.Error,`HttpConnection.transport.stop() threw error '${o}'.`),this._stopConnection()}this.transport=void 0}else this._logger.log(F.Debug,"HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.")}async _startInternal(n){let o=this.baseUrl;this._accessTokenFactory=this._options.accessTokenFactory,this._httpClient._accessTokenFactory=this._accessTokenFactory;try{if(this._options.skipNegotiation)if(this._options.transport===lt.WebSockets)this.transport=this._constructTransport(lt.WebSockets),await this._startTransport(o,n);else throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");else{let s=null,l=0;do{if(s=await this._getNegotiationResponse(o),this._connectionState==="Disconnecting"||this._connectionState==="Disconnected")throw new yn("The connection was stopped during negotiation.");if(s.error)throw new Error(s.error);if(s.ProtocolVersion)throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");if(s.url&&(o=s.url),s.accessToken){const d=s.accessToken;this._accessTokenFactory=()=>d,this._httpClient._accessToken=d,this._httpClient._accessTokenFactory=void 0}l++}while(s.url&&l<Lh);if(l===Lh&&s.url)throw new Error("Negotiate redirection limit exceeded.");await this._createTransport(o,this._options.transport,s,n)}this.transport instanceof Dh&&(this.features.inherentKeepAlive=!0),this._connectionState==="Connecting"&&(this._logger.log(F.Debug,"The HttpConnection connected successfully."),this._connectionState="Connected")}catch(s){return this._logger.log(F.Error,"Failed to start the connection: "+s),this._connectionState="Disconnected",this.transport=void 0,this._stopPromiseResolver(),Promise.reject(s)}}async _getNegotiationResponse(n){const o={},[s,l]=Ji();o[s]=l;const d=this._resolveNegotiateUrl(n);this._logger.log(F.Debug,`Sending negotiation request: ${d}.`);try{const f=await this._httpClient.post(d,{content:"",headers:{...o,...this._options.headers},timeout:this._options.timeout,withCredentials:this._options.withCredentials});if(f.statusCode!==200)return Promise.reject(new Error(`Unexpected status code returned from negotiate '${f.statusCode}'`));const p=JSON.parse(f.content);return(!p.negotiateVersion||p.negotiateVersion<1)&&(p.connectionToken=p.connectionId),p.useStatefulReconnect&&this._options._useStatefulReconnect!==!0?Promise.reject(new Oh("Client didn't negotiate Stateful Reconnect but the server did.")):p}catch(f){let p="Failed to complete negotiation with the server: "+f;return f instanceof ti&&f.statusCode===404&&(p=p+" Either this is not a SignalR endpoint or there is a proxy blocking the connection."),this._logger.log(F.Error,p),Promise.reject(new Oh(p))}}_createConnectUrl(n,o){return o?n+(n.indexOf("?")===-1?"?":"&")+`id=${o}`:n}async _createTransport(n,o,s,l){let d=this._createConnectUrl(n,s.connectionToken);if(this._isITransport(o)){this._logger.log(F.Debug,"Connection was provided an instance of ITransport, using that directly."),this.transport=o,await this._startTransport(d,l),this.connectionId=s.connectionId;return}const f=[],p=s.availableTransports||[];let g=s;for(const x of p){const y=this._resolveTransportOrError(x,o,l,(g==null?void 0:g.useStatefulReconnect)===!0);if(y instanceof Error)f.push(`${x.transport} failed:`),f.push(y);else if(this._isITransport(y)){if(this.transport=y,!g){try{g=await this._getNegotiationResponse(n)}catch(w){return Promise.reject(w)}d=this._createConnectUrl(n,g.connectionToken)}try{await this._startTransport(d,l),this.connectionId=g.connectionId;return}catch(w){if(this._logger.log(F.Error,`Failed to start the transport '${x.transport}': ${w}`),g=void 0,f.push(new wx(`${x.transport} failed: ${w}`,lt[x.transport])),this._connectionState!=="Connecting"){const R="Failed to select transport before stop() was called.";return this._logger.log(F.Debug,R),Promise.reject(new yn(R))}}}}return f.length>0?Promise.reject(new bx(`Unable to connect to the server with any of the available transports. ${f.join(" ")}`,f)):Promise.reject(new Error("None of the transports supported by the client are supported by the server."))}_constructTransport(n){switch(n){case lt.WebSockets:if(!this._options.WebSocket)throw new Error("'WebSocket' is not supported in your environment.");return new Vx(this._httpClient,this._accessTokenFactory,this._logger,this._options.logMessageContent,this._options.WebSocket,this._options.headers||{});case lt.ServerSentEvents:if(!this._options.EventSource)throw new Error("'EventSource' is not supported in your environment.");return new Wx(this._httpClient,this._httpClient._accessToken,this._logger,this._options);case lt.LongPolling:return new Dh(this._httpClient,this._logger,this._options);default:throw new Error(`Unknown transport: ${n}.`)}}_startTransport(n,o){return this.transport.onreceive=this.onreceive,this.features.reconnect?this.transport.onclose=async s=>{let l=!1;if(this.features.reconnect)try{this.features.disconnected(),await this.transport.connect(n,o),await this.features.resend()}catch{l=!0}else{this._stopConnection(s);return}l&&this._stopConnection(s)}:this.transport.onclose=s=>this._stopConnection(s),this.transport.connect(n,o)}_resolveTransportOrError(n,o,s,l){const d=lt[n.transport];if(d==null)return this._logger.log(F.Debug,`Skipping transport '${n.transport}' because it is not supported by this client.`),new Error(`Skipping transport '${n.transport}' because it is not supported by this client.`);if(Kx(o,d))if(n.transferFormats.map(p=>Pt[p]).indexOf(s)>=0){if(d===lt.WebSockets&&!this._options.WebSocket||d===lt.ServerSentEvents&&!this._options.EventSource)return this._logger.log(F.Debug,`Skipping transport '${lt[d]}' because it is not supported in your environment.'`),new xx(`'${lt[d]}' is not supported in your environment.`,d);this._logger.log(F.Debug,`Selecting transport '${lt[d]}'.`);try{return this.features.reconnect=d===lt.WebSockets?l:void 0,this._constructTransport(d)}catch(p){return p}}else return this._logger.log(F.Debug,`Skipping transport '${lt[d]}' because it does not support the requested transfer format '${Pt[s]}'.`),new Error(`'${lt[d]}' does not support ${Pt[s]}.`);else return this._logger.log(F.Debug,`Skipping transport '${lt[d]}' because it was disabled by the client.`),new vx(`'${lt[d]}' is disabled by the client.`,d)}_isITransport(n){return n&&typeof n=="object"&&"connect"in n}_stopConnection(n){if(this._logger.log(F.Debug,`HttpConnection.stopConnection(${n}) called while in state ${this._connectionState}.`),this.transport=void 0,n=this._stopError||n,this._stopError=void 0,this._connectionState==="Disconnected"){this._logger.log(F.Debug,`Call to HttpConnection.stopConnection(${n}) was ignored because the connection is already in the disconnected state.`);return}if(this._connectionState==="Connecting")throw this._logger.log(F.Warning,`Call to HttpConnection.stopConnection(${n}) was ignored because the connection is still in the connecting state.`),new Error(`HttpConnection.stopConnection(${n}) was called while the connection is still in the connecting state.`);if(this._connectionState==="Disconnecting"&&this._stopPromiseResolver(),n?this._logger.log(F.Error,`Connection disconnected with error '${n}'.`):this._logger.log(F.Information,"Connection disconnected."),this._sendQueue&&(this._sendQueue.stop().catch(o=>{this._logger.log(F.Error,`TransportSendQueue.stop() threw error '${o}'.`)}),this._sendQueue=void 0),this.connectionId=void 0,this._connectionState="Disconnected",this._connectionStarted){this._connectionStarted=!1;try{this.onclose&&this.onclose(n)}catch(o){this._logger.log(F.Error,`HttpConnection.onclose(${n}) threw error '${o}'.`)}}}_resolveUrl(n){if(n.lastIndexOf("https://",0)===0||n.lastIndexOf("http://",0)===0)return n;if(!We.isBrowser)throw new Error(`Cannot resolve '${n}'.`);const o=window.document.createElement("a");return o.href=n,this._logger.log(F.Information,`Normalizing '${n}' to '${o.href}'.`),o.href}_resolveNegotiateUrl(n){const o=new URL(n);o.pathname.endsWith("/")?o.pathname+="negotiate":o.pathname+="/negotiate";const s=new URLSearchParams(o.searchParams);return s.has("negotiateVersion")||s.append("negotiateVersion",this._negotiateVersion.toString()),s.has("useStatefulReconnect")?s.get("useStatefulReconnect")==="true"&&(this._options._useStatefulReconnect=!0):this._options._useStatefulReconnect===!0&&s.append("useStatefulReconnect","true"),o.search=s.toString(),o.toString()}}function Kx(r,n){return!r||(n&r)!==0}class Ru{constructor(n){this._transport=n,this._buffer=[],this._executing=!0,this._sendBufferedData=new Na,this._transportResult=new Na,this._sendLoopPromise=this._sendLoop()}send(n){return this._bufferData(n),this._transportResult||(this._transportResult=new Na),this._transportResult.promise}stop(){return this._executing=!1,this._sendBufferedData.resolve(),this._sendLoopPromise}_bufferData(n){if(this._buffer.length&&typeof this._buffer[0]!=typeof n)throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof n}`);this._buffer.push(n),this._sendBufferedData.resolve()}async _sendLoop(){for(;;){if(await this._sendBufferedData.promise,!this._executing){this._transportResult&&this._transportResult.reject("Connection stopped.");break}this._sendBufferedData=new Na;const n=this._transportResult;this._transportResult=void 0;const o=typeof this._buffer[0]=="string"?this._buffer.join(""):Ru._concatBuffers(this._buffer);this._buffer.length=0;try{await this._transport.send(o),n.resolve()}catch(s){n.reject(s)}}}static _concatBuffers(n){const o=n.map(d=>d.byteLength).reduce((d,f)=>d+f),s=new Uint8Array(o);let l=0;for(const d of n)s.set(new Uint8Array(d),l),l+=d.byteLength;return s.buffer}}class Na{constructor(){this.promise=new Promise((n,o)=>[this._resolver,this._rejecter]=[n,o])}resolve(){this._resolver()}reject(n){this._rejecter(n)}}const Qx="json";class Xx{constructor(){this.name=Qx,this.version=2,this.transferFormat=Pt.Text}parseMessages(n,o){if(typeof n!="string")throw new Error("Invalid input for JSON hub protocol. Expected a string.");if(!n)return[];o===null&&(o=ls.instance);const s=Qt.parse(n),l=[];for(const d of s){const f=JSON.parse(d);if(typeof f.type!="number")throw new Error("Invalid payload.");switch(f.type){case be.Invocation:this._isInvocationMessage(f);break;case be.StreamItem:this._isStreamItemMessage(f);break;case be.Completion:this._isCompletionMessage(f);break;case be.Ping:break;case be.Close:break;case be.Ack:this._isAckMessage(f);break;case be.Sequence:this._isSequenceMessage(f);break;default:o.log(F.Information,"Unknown message type '"+f.type+"' ignored.");continue}l.push(f)}return l}writeMessage(n){return Qt.write(JSON.stringify(n))}_isInvocationMessage(n){this._assertNotEmptyString(n.target,"Invalid payload for Invocation message."),n.invocationId!==void 0&&this._assertNotEmptyString(n.invocationId,"Invalid payload for Invocation message.")}_isStreamItemMessage(n){if(this._assertNotEmptyString(n.invocationId,"Invalid payload for StreamItem message."),n.item===void 0)throw new Error("Invalid payload for StreamItem message.")}_isCompletionMessage(n){if(n.result&&n.error)throw new Error("Invalid payload for Completion message.");!n.result&&n.error&&this._assertNotEmptyString(n.error,"Invalid payload for Completion message."),this._assertNotEmptyString(n.invocationId,"Invalid payload for Completion message.")}_isAckMessage(n){if(typeof n.sequenceId!="number")throw new Error("Invalid SequenceId for Ack message.")}_isSequenceMessage(n){if(typeof n.sequenceId!="number")throw new Error("Invalid SequenceId for Sequence message.")}_assertNotEmptyString(n,o){if(typeof n!="string"||n==="")throw new Error(o)}}const Gx={trace:F.Trace,debug:F.Debug,info:F.Information,information:F.Information,warn:F.Warning,warning:F.Warning,error:F.Error,critical:F.Critical,none:F.None};function Jx(r){const n=Gx[r.toLowerCase()];if(typeof n<"u")return n;throw new Error(`Unknown log level: ${r}`)}class Yx{configureLogging(n){if(rt.isRequired(n,"logging"),Zx(n))this.logger=n;else if(typeof n=="string"){const o=Jx(n);this.logger=new Ha(o)}else this.logger=new Ha(n);return this}withUrl(n,o){return rt.isRequired(n,"url"),rt.isNotEmpty(n,"url"),this.url=n,typeof o=="object"?this.httpConnectionOptions={...this.httpConnectionOptions,...o}:this.httpConnectionOptions={...this.httpConnectionOptions,transport:o},this}withHubProtocol(n){return rt.isRequired(n,"protocol"),this.protocol=n,this}withAutomaticReconnect(n){if(this.reconnectPolicy)throw new Error("A reconnectPolicy has already been set.");return n?Array.isArray(n)?this.reconnectPolicy=new Ah(n):this.reconnectPolicy=n:this.reconnectPolicy=new Ah,this}withServerTimeout(n){return rt.isRequired(n,"milliseconds"),this._serverTimeoutInMilliseconds=n,this}withKeepAliveInterval(n){return rt.isRequired(n,"milliseconds"),this._keepAliveIntervalInMilliseconds=n,this}withStatefulReconnect(n){return this.httpConnectionOptions===void 0&&(this.httpConnectionOptions={}),this.httpConnectionOptions._useStatefulReconnect=!0,this._statefulReconnectBufferSize=n==null?void 0:n.bufferSize,this}build(){const n=this.httpConnectionOptions||{};if(n.logger===void 0&&(n.logger=this.logger),!this.url)throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");const o=new qx(this.url,n);return Cu.create(o,this.logger||ls.instance,this.protocol||new Xx,this.reconnectPolicy,this._serverTimeoutInMilliseconds,this._keepAliveIntervalInMilliseconds,this._statefulReconnectBufferSize)}}function Zx(r){return r.log!==void 0}function Jp(r,n){return function(){return r.apply(n,arguments)}}const{toString:ev}=Object.prototype,{getPrototypeOf:jr}=Object,{iterator:gs,toStringTag:Yp}=Symbol,us=(({hasOwnProperty:r})=>(n,o)=>r.call(n,o))(Object.prototype),Zp=r=>typeof r=="string"&&(r==="__proto__"||r==="constructor"||r==="prototype"),eg=(r,n,o)=>r===Object.prototype||!o&&n===null,tv=r=>{if(!Object.isExtensible(r))return!1;const n=Object.getOwnPropertyNames(r);return Object.getOwnPropertySymbols&&n.push(...Object.getOwnPropertySymbols(r)),n.every(o=>{if(Zp(o))return!1;const s=Object.getOwnPropertyDescriptor(r,o);return!!s&&s.configurable&&s.writable===!0})},ds=(r,n)=>{let o=r;const s=[];for(;o!=null;){if(s.indexOf(o)!==-1)return!1;s.push(o);const l=jr(o);if(eg(o,l,o===r))return!1;if(us(o,n))return!0;o=l}return!1},nv=(r,n)=>r!=null&&ds(r,n)?r[n]:void 0,rv=r=>{if(r==null||typeof r!="object"&&typeof r!="function")return r;const n=jr(r);if(n===null&&tv(r))return r;const o=Object.create(null),s=Object.create(null),l=[];let d=r;for(;d!=null&&l.indexOf(d)===-1;){l.push(d);const f=d===r?n:jr(d);if(eg(d,f,d===r))break;const p=Object.getOwnPropertyNames(d);Object.getOwnPropertySymbols&&p.push(...Object.getOwnPropertySymbols(d));for(const g of p)Zp(g)||us(s,g)||(o[g]=r[g],s[g]=!0);d=f}return o},Pu=(r=>n=>{const o=ev.call(n);return r[o]||(r[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),on=r=>(r=r.toLowerCase(),n=>Pu(n)===r),Za=r=>n=>typeof n===r,{isArray:oi}=Array,si=Za("undefined");function eo(r){return r!==null&&!si(r)&&r.constructor!==null&&!si(r.constructor)&&$t(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const tg=on("ArrayBuffer");function iv(r){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(r):n=r&&r.buffer&&tg(r.buffer),n}const ov=Za("string"),$t=Za("function"),ng=Za("number"),to=r=>r!==null&&typeof r=="object",sv=r=>r===!0||r===!1,Aa=r=>{if(!to(r))return!1;const n=jr(r);return(n===null||n===Object.prototype||jr(n)===null)&&!ds(r,Yp)&&!ds(r,gs)},av=r=>{if(!to(r)||eo(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},lv=on("Date"),cv=on("File"),uv=r=>!!(r&&typeof r.uri<"u"),dv=r=>r&&typeof r.getParts<"u",fv=on("Blob"),hv=on("FileList"),pv=on("Set"),gv=r=>to(r)&&$t(r.pipe);function mv(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const zh=mv(),Mh=typeof zh.FormData<"u"?zh.FormData:void 0,yv=r=>{if(!r)return!1;if(Mh&&r instanceof Mh)return!0;const n=jr(r);if(!n||n===Object.prototype||!$t(r.append))return!1;const o=Pu(r);return o==="formdata"||o==="object"&&$t(r.toString)&&r.toString()==="[object FormData]"},xv=on("URLSearchParams"),[vv,wv,bv,_v]=["ReadableStream","Request","Response","Headers"].map(on),Sv=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ms(r,n,{allOwnKeys:o=!1}={}){if(r===null||typeof r>"u")return;let s,l;if(typeof r!="object"&&(r=[r]),oi(r))for(s=0,l=r.length;s<l;s++)n.call(null,r[s],s,r);else{if(eo(r))return;const d=o?Object.getOwnPropertyNames(r):Object.keys(r),f=d.length;let p;for(s=0;s<f;s++)p=d[s],n.call(null,r[p],p,r)}}function rg(r,n){if(eo(r))return null;n=n.toLowerCase();const o=Object.keys(r);let s=o.length,l;for(;s-- >0;)if(l=o[s],n===l.toLowerCase())return l;return null}const Qr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ig=r=>!si(r)&&r!==Qr;function uu(...r){const{caseless:n,skipUndefined:o}=ig(this)&&this||{},s={},l=(d,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=n&&typeof f=="string"&&rg(s,f)||f,g=us(s,p)?s[p]:void 0;Aa(g)&&Aa(d)?s[p]=uu(g,d):Aa(d)?s[p]=uu({},d):oi(d)?s[p]=d.slice():(!o||!si(d))&&(s[p]=d)};for(let d=0,f=r.length;d<f;d++){const p=r[d];if(!p||eo(p)||(ms(p,l),typeof p!="object"||oi(p)))continue;const g=Object.getOwnPropertySymbols(p);for(let x=0;x<g.length;x++){const y=g[x];Dv.call(p,y)&&l(p[y],y)}}return s}const kv=(r,n,o,{allOwnKeys:s}={})=>(ms(n,(l,d)=>{o&&$t(l)?Object.defineProperty(r,d,{__proto__:null,value:Jp(l,o),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,d,{__proto__:null,value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),r),Ev=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Cv=(r,n,o,s)=>{r.prototype=Object.create(n.prototype,s),Object.defineProperty(r.prototype,"constructor",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{__proto__:null,value:n.prototype}),o&&Object.assign(r.prototype,o)},Rv=(r,n,o,s)=>{let l,d,f;const p={};if(n=n||{},r==null)return n;do{for(l=Object.getOwnPropertyNames(r),d=l.length;d-- >0;)f=l[d],(!s||s(f,r,n))&&!p[f]&&(n[f]=r[f],p[f]=!0);r=o!==!1&&jr(r)}while(r&&(!o||o(r,n))&&r!==Object.prototype);return n},Pv=(r,n,o)=>{r=String(r),(o===void 0||o>r.length)&&(o=r.length),o-=n.length;const s=r.indexOf(n,o);return s!==-1&&s===o},Nv=r=>{if(!r)return null;if(oi(r))return r;let n=r.length;if(!ng(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=r[n];return o},jv=(r=>n=>r&&n instanceof r)(typeof Uint8Array<"u"&&jr(Uint8Array)),Tv=(r,n)=>{const s=(r&&r[gs]).call(r);let l;for(;(l=s.next())&&!l.done;){const d=l.value;n.call(r,d[0],d[1])}},Ov=(r,n)=>{let o;const s=[];for(;(o=r.exec(n))!==null;)s.push(o);return s},Iv=on("HTMLFormElement"),Av=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,s,l){return s.toUpperCase()+l}),{propertyIsEnumerable:Dv}=Object.prototype,Lv=on("RegExp"),og=(r,n)=>{const o=Object.getOwnPropertyDescriptors(r),s={};ms(o,(l,d)=>{let f;(f=n(l,d,r))!==!1&&(s[d]=f||l)}),Object.defineProperties(r,s)},zv=r=>{og(r,(n,o)=>{if($t(r)&&["arguments","caller","callee"].includes(o))return!1;const s=r[o];if($t(s)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},Mv=(r,n)=>{const o={},s=l=>{l.forEach(d=>{o[d]=!0})};return oi(r)?s(r):s(String(r).split(n)),o},Uv=()=>{},Fv=(r,n)=>r!=null&&Number.isFinite(r=+r)?r:n;function $v(r){return!!(r&&$t(r.append)&&r[Yp]==="FormData"&&r[gs])}const Bv=r=>{const n=new WeakSet,o=s=>{if(to(s)){if(n.has(s))return;if(eo(s))return s;if(!("toJSON"in s)){n.add(s);let l;if(pv(s)){l=[];for(const d of s){const f=o(d);!si(f)&&l.push(f)}}else l=oi(s)?[]:{},ms(s,(d,f)=>{const p=o(d);!si(p)&&(l[f]=p)});return n.delete(s),l}}return s};return o(r)},Hv=on("AsyncFunction"),Wv=r=>r&&(to(r)||$t(r))&&$t(r.then)&&$t(r.catch),sg=((r,n)=>r?setImmediate:n?((o,s)=>(Qr.addEventListener("message",({source:l,data:d})=>{l===Qr&&d===o&&s.length&&s.shift()()},!1),l=>{s.push(l),Qr.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",$t(Qr.postMessage)),Vv=typeof queueMicrotask<"u"?queueMicrotask.bind(Qr):typeof process<"u"&&process.nextTick||sg,ag=r=>r!=null&&$t(r[gs]),qv=r=>r!=null&&ds(r,gs)&&ag(r),S={isArray:oi,isArrayBuffer:tg,isBuffer:eo,isFormData:yv,isArrayBufferView:iv,isString:ov,isNumber:ng,isBoolean:sv,isObject:to,isPlainObject:Aa,isEmptyObject:av,isReadableStream:vv,isRequest:wv,isResponse:bv,isHeaders:_v,isUndefined:si,isDate:lv,isFile:cv,isReactNativeBlob:uv,isReactNative:dv,isBlob:fv,isRegExp:Lv,isFunction:$t,isStream:gv,isURLSearchParams:xv,isTypedArray:jv,isFileList:hv,forEach:ms,merge:uu,extend:kv,trim:Sv,stripBOM:Ev,inherits:Cv,toFlatObject:Rv,kindOf:Pu,kindOfTest:on,endsWith:Pv,toArray:Nv,forEachEntry:Tv,matchAll:Ov,isHTMLForm:Iv,hasOwnProperty:us,hasOwnProp:us,hasOwnInPrototypeChain:ds,getSafeProp:nv,toSafeFlatObject:rv,reduceDescriptors:og,freezeMethods:zv,toObjectSet:Mv,toCamelCase:Av,noop:Uv,toFiniteNumber:Fv,findKey:rg,global:Qr,isContextDefined:ig,isSpecCompliantForm:$v,toJSONObject:Bv,isAsyncFn:Hv,isThenable:Wv,setImmediate:sg,asap:Vv,isIterable:ag,isSafeIterable:qv},Kv=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qv=r=>{const n={};let o,s,l;return r&&r.split(`
`).forEach(function(f){l=f.indexOf(":"),o=f.substring(0,l).trim().toLowerCase(),s=f.substring(l+1).trim();const p=S.hasOwnProp(n,o);!o||p&&S.hasOwnProp(Kv,o)||(o==="set-cookie"?p?n[o].push(s):n[o]=[s]:n[o]=p?n[o]+", "+s:s)}),n};function Xv(r){let n=0,o=r.length;for(;n<o;){const s=r.charCodeAt(n);if(s!==9&&s!==32)break;n+=1}for(;o>n;){const s=r.charCodeAt(o-1);if(s!==9&&s!==32)break;o-=1}return n===0&&o===r.length?r:r.slice(n,o)}const Gv=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Jv=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Nu(r,n){return S.isArray(r)?r.map(o=>Nu(o,n)):Xv(String(r).replace(n,""))}const Yv=r=>Nu(r,Gv),Zv=r=>Nu(r,Jv);function lg(r){const n=Object.create(null);return S.forEach(r.toJSON(),(o,s)=>{n[s]=Zv(o)}),n}const Uh=Symbol("internals");function Jo(r){return r&&String(r).trim().toLowerCase()}function Da(r){return r===!1||r==null?r:S.isArray(r)?r.map(Da):Yv(String(r))}function e1(r){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=o.exec(r);)n[s[1]]=s[2];return n}const t1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Vc(r){let n=0,o=r.length;for(;n<o;){const s=r.charCodeAt(n);if(s!==9&&s!==32)break;n+=1}for(;o>n;){const s=r.charCodeAt(o-1);if(s!==9&&s!==32)break;o-=1}return n===0&&o===r.length?r:r.slice(n,o)}function n1(r){const n=r.length-1;if(n<1||r.charCodeAt(0)!==34||r.charCodeAt(n)!==34)return r;let o="";for(let s=1;s<n;s++){const l=r.charCodeAt(s);if(l===34||l===92&&(s+=1,s>=n))return r;o+=r[s]}return o}function r1(r){const n=Object.create(null),o=String(r);let s=0,l=!1,d=!1;function f(p){const g=Vc(o.slice(s,p)),x=g.indexOf("=");if(x<1)return;const y=Vc(g.slice(0,x));if(!t1.test(y))return;const w=y.toLowerCase();if(w==="__proto__"||w==="constructor"||w==="prototype")return;const R=Vc(g.slice(x+1));n[w]=n1(R)}for(let p=0;p<o.length;p++){const g=o.charCodeAt(p);l?d?d=!1:g===92?d=!0:g===34&&(l=!1):g===34?l=!0:(g===44||g===59)&&(f(p),s=p+1)}return f(o.length),n}const i1=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function qc(r,n,o,s,l){if(S.isFunction(s))return s.call(this,n,o);if(l&&(n=o),!!S.isString(n)){if(S.isString(s))return n.indexOf(s)!==-1;if(S.isRegExp(s))return s.test(n)}}function o1(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,s)=>o.toUpperCase()+s)}function s1(r,n){const o=S.toCamelCase(" "+n);["get","set","has"].forEach(s=>{Object.defineProperty(r,s+o,{__proto__:null,value:function(l,d,f){return this[s].call(this,n,l,d,f)},configurable:!0})})}let Nt=class{constructor(n){n&&this.set(n)}set(n,o,s){const l=this;function d(p,g,x){const y=Jo(g);if(!y)return;const w=S.findKey(l,y);(!w||l[w]===void 0||x===!0||x===void 0&&l[w]!==!1)&&(l[w||g]=Da(p))}const f=(p,g)=>S.forEach(p,(x,y)=>d(x,y,g));if(S.isPlainObject(n)||n instanceof this.constructor)f(n,o);else if(S.isString(n)&&(n=n.trim())&&!i1(n))f(Qv(n),o);else if(S.isObject(n)&&S.isSafeIterable(n)){let p=Object.create(null),g,x;for(const y of n){if(!S.isArray(y))throw new TypeError("Object iterator must return a key-value pair");x=y[0],S.hasOwnProp(p,x)?(g=p[x],p[x]=S.isArray(g)?[...g,y[1]]:[g,y[1]]):p[x]=y[1]}f(p,o)}else n!=null&&d(o,n,s);return this}get(n,o){if(n=Jo(n),n){const s=S.findKey(this,n);if(s){const l=this[s];if(!o)return l;if(o===!0)return e1(l);if(S.isFunction(o))return o.call(this,l,s);if(S.isRegExp(o))return o.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=Jo(n),n){const s=S.findKey(this,n);return!!(s&&this[s]!==void 0&&(!o||qc(this,this[s],s,o)))}return!1}delete(n,o){const s=this;let l=!1;function d(f){if(f=Jo(f),f){const p=S.findKey(s,f);p&&(!o||qc(s,s[p],p,o))&&(delete s[p],l=!0)}}return S.isArray(n)?n.forEach(d):d(n),l}clear(n){const o=Object.keys(this);let s=o.length,l=!1;for(;s--;){const d=o[s];(!n||qc(this,this[d],d,n,!0))&&(delete this[d],l=!0)}return l}normalize(n){const o=this,s={};return S.forEach(this,(l,d)=>{const f=S.findKey(s,d);if(f){o[f]=Da(l),delete o[d];return}const p=n?o1(d):String(d).trim();p!==d&&delete o[d],o[p]=Da(l),s[p]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return S.forEach(this,(s,l)=>{s!=null&&s!==!1&&(o[l]=n&&S.isArray(s)?s.join(", "):s)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}getSetCookie(){const n=this.get("set-cookie");return S.isArray(n)?n:n==null||n===!1?[]:[n]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static parseParameters(n){return r1(n)}static concat(n,...o){const s=new this(n);return o.forEach(l=>s.set(l)),s}static accessor(n){const s=(this[Uh]=this[Uh]={accessors:{}}).accessors,l=this.prototype;function d(f){const p=Jo(f);s[p]||(s1(l,f),s[p]=!0)}return S.isArray(n)?n.forEach(d):d(n),this}};Nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(Nt.prototype,({value:r},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>r,set(s){this[o]=s}}});S.freezeMethods(Nt);const Wa="[REDACTED ****]";function a1(r){if(S.hasOwnProp(r,"toJSON"))return!0;let n=Object.getPrototypeOf(r);for(;n&&n!==Object.prototype;){if(S.hasOwnProp(n,"toJSON"))return!0;n=Object.getPrototypeOf(n)}return!1}function l1(r,n){const o=new Set(n.map(d=>String(d).toLowerCase())),s=[],l=d=>{if(d===null||typeof d!="object"||S.isBuffer(d))return d;if(s.indexOf(d)!==-1)return;d instanceof Nt&&(d=d.toJSON()),s.push(d);let f;if(S.isArray(d))f=[],d.forEach((p,g)=>{const x=l(p);S.isUndefined(x)||(f[g]=x)});else{if(!S.isPlainObject(d)&&a1(d))return s.pop(),d;f=Object.create(null);for(const[p,g]of Object.entries(d)){const x=o.has(p.toLowerCase())?Wa:l(g);S.isUndefined(x)||(f[p]=x)}}return s.pop(),f};return l(r)}function Fh(r){try{return String(r)}catch{return""}}function c1(r){return r.errors.map(o=>{try{return o&&o.message?Fh(o.message):Fh(o)}catch{return""}}).filter(Boolean).join("; ")||r.name||"AggregateError"}let Y=class cg extends Error{static from(n,o,s,l,d,f){let p=n.message;!p&&S.isArray(n.errors)&&n.errors.length&&(p=c1(n));const g=new cg(p,o||n.code,s,l,d);return Object.defineProperty(g,"cause",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),g.name=n.name,n.status!=null&&g.status==null&&(g.status=n.status),f&&Object.assign(g,f),g}constructor(n,o,s,l,d){super(n),Object.defineProperty(this,"message",{__proto__:null,value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,o&&(this.code=o),s&&(this.config=s),l&&(this.request=l),d&&(this.response=d,this.status=d.status)}toJSON(){const n=this.config,o=n&&S.hasOwnProp(n,"redact")?n.redact:void 0,s=S.isArray(o)&&o.length>0?l1(n,o):S.toJSONObject(n);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:s,code:this.code,status:this.status}}};Y.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Y.ERR_BAD_OPTION="ERR_BAD_OPTION";Y.ECONNABORTED="ECONNABORTED";Y.ETIMEDOUT="ETIMEDOUT";Y.ECONNREFUSED="ECONNREFUSED";Y.ERR_NETWORK="ERR_NETWORK";Y.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Y.ERR_DEPRECATED="ERR_DEPRECATED";Y.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Y.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Y.ERR_CANCELED="ERR_CANCELED";Y.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Y.ERR_INVALID_URL="ERR_INVALID_URL";Y.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const u1=null,ug=100;function du(r){return S.isPlainObject(r)||S.isArray(r)}function dg(r){return S.endsWith(r,"[]")?r.slice(0,-2):r}function Kc(r,n,o){return r?r.concat(n).map(function(l,d){return l=dg(l),!o&&d?"["+l+"]":l}).join(o?".":""):n}function d1(r){return S.isArray(r)&&!r.some(du)}const f1=S.toFlatObject(S,{},null,function(n){return/^is[A-Z]/.test(n)});function el(r,n,o){if(!S.isObject(r))throw new TypeError("target must be an object");n=n||new FormData;const s=(T,M)=>{const U=S.getSafeProp(o,T);return S.isUndefined(U)?M:U},l=s("metaTokens",!0),d=s("visitor")||A,f=s("dots",!1),p=s("indexes",!1),g=s("Blob")||typeof Blob<"u"&&Blob,x=s("maxDepth",ug),y=g&&S.isSpecCompliantForm(n),w=[];if(!S.isFunction(d))throw new TypeError("visitor must be a function");function R(T){if(T===null)return"";if(S.isDate(T))return T.toISOString();if(S.isBoolean(T))return T.toString();if(!y&&S.isBlob(T))throw new Y("Blob is not supported. Use a Buffer instead.");if(S.isArrayBuffer(T)||S.isTypedArray(T)){if(y&&typeof g=="function")return new g([T]);throw new Y("Blob is not supported. Use a Buffer instead.",Y.ERR_NOT_SUPPORT)}return T}function B(T){if(T>x)throw new Y("Object is too deeply nested ("+T+" levels). Max depth: "+x,Y.ERR_FORM_DATA_DEPTH_EXCEEDED)}function D(T,M){if(x===1/0)return JSON.stringify(T);const U=[];return JSON.stringify(T,function(G,se){if(!S.isObject(se))return se;for(;U.length&&U[U.length-1]!==this;)U.pop();return U.push(se),B(M+U.length-1),se})}function A(T,M,U){let V=T;if(S.isReactNative(n)&&S.isReactNativeBlob(T))return n.append(Kc(U,M,f),R(T)),!1;if(T&&!U&&typeof T=="object"){if(S.endsWith(M,"{}"))M=l?M:M.slice(0,-2),T=D(T,1);else if(S.isArray(T)&&d1(T)||(S.isFileList(T)||S.endsWith(M,"[]"))&&(V=S.toArray(T)))return M=dg(M),V.forEach(function(se,_e){!(S.isUndefined(se)||se===null)&&n.append(p===!0?Kc([M],_e,f):p===null?M:M+"[]",R(se))}),!1}return du(T)?!0:(n.append(Kc(U,M,f),R(T)),!1)}const I=Object.assign(f1,{defaultVisitor:A,convertValue:R,isVisitable:du});function N(T,M,U=0){if(!S.isUndefined(T)){if(B(U),w.indexOf(T)!==-1)throw new Error("Circular reference detected in "+M.join("."));w.push(T),S.forEach(T,function(G,se){(!(S.isUndefined(G)||G===null)&&d.call(n,G,S.isString(se)?se.trim():se,M,I))===!0&&N(G,M?M.concat(se):[se],U+1)}),w.pop()}}if(!S.isObject(r))throw new TypeError("data must be an object");return N(r),n}function $h(r){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(r).replace(/[!'()~]|%20/g,function(s){return n[s]})}function ju(r,n){this._pairs=[],r&&el(r,this,n)}const fg=ju.prototype;fg.append=function(n,o){this._pairs.push([n,o])};fg.toString=function(n){const o=n?s=>n.call(this,s,$h):$h;return this._pairs.map(function(l){return o(l[0])+"="+o(l[1])},"").join("&")};function h1(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function hg(r,n,o){if(!n)return r;r=r||"";const s=S.isFunction(o)?{serialize:o}:o,l=S.getSafeProp(s,"encode")||h1,d=S.getSafeProp(s,"serialize");let f;if(d?f=d(n,s):f=S.isURLSearchParams(n)?n.toString():new ju(n,s).toString(l),f){const p=r.indexOf("#");p!==-1&&(r=r.slice(0,p)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}const Yo=Symbol("internals");function pg(r){return r?r.length:0}function Bh(r){if(r)for(;r.length&&r[r.length-1]===null;)r.pop()}function Zo(r,n){const o=r.handlers,s=pg(o);o!==n.handlersRef?(n.handlersRef=o,n.handlerEntries.clear()):s!==n.handlersLength&&(s?n.handlerEntries.forEach(function(d,f){o[d.index]!==d.handler&&n.handlerEntries.delete(f)}):n.handlerEntries.clear()),n.handlersLength=s}class Hh{constructor(){this.handlers=[],this[Yo]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(n,o,s){const l={fulfilled:n,rejected:o,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null},d=this[Yo];this.handlers==null&&(this.handlers=[]),Zo(this,d);const f=d.nextId++;return this.handlers.push(l),d.handlerEntries.set(f,{handler:l,index:this.handlers.length-1}),d.handlersLength=this.handlers.length,f}eject(n){const o=this[Yo];Zo(this,o);const s=o.handlerEntries.get(n);if(s){if(o.handlerEntries.delete(n),this.handlers[s.index]!==s.handler)return;this.handlers[s.index]=null,o.iterationDepth||(Bh(this.handlers),o.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Zo(this,this[Yo]))}forEach(n){const o=this[Yo];Zo(this,o),o.iterationDepth++;try{S.forEach(this.handlers,function(l){l!==null&&n(l)})}finally{--o.iterationDepth||(Zo(this,o),Bh(this.handlers),o.handlersLength=pg(this.handlers))}}}const Tu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},p1=typeof URLSearchParams<"u"?URLSearchParams:ju,g1=typeof FormData<"u"?FormData:null,m1=typeof Blob<"u"?Blob:null,y1={isBrowser:!0,classes:{URLSearchParams:p1,FormData:g1,Blob:m1},protocols:["http","https","file","blob","url","data"]},Ou=typeof window<"u"&&typeof document<"u",fu=typeof navigator=="object"&&navigator||void 0,x1=Ou&&(!fu||["ReactNative","NativeScript","NS"].indexOf(fu.product)<0),v1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",w1=Ou&&window.location.href||"http://localhost",b1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ou,hasStandardBrowserEnv:x1,hasStandardBrowserWebWorkerEnv:v1,navigator:fu,origin:w1},Symbol.toStringTag,{value:"Module"})),mt={...b1,...y1};function _1(r,n){return el(r,new mt.classes.URLSearchParams,{visitor:function(o,s,l,d){return mt.isNode&&S.isBuffer(o)?(this.append(s,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...n})}const Wh=ug;function gg(r){if(r>Wh)throw new Y("FormData field is too deeply nested ("+r+" levels). Max depth: "+Wh,Y.ERR_FORM_DATA_DEPTH_EXCEEDED)}function S1(r){const n=[],o=/[^.[\]]+|\[([^.[\]]*)]/g;let s;for(;(s=o.exec(r))!==null;)gg(n.length),n.push(s[0]==="[]"?"":s[1]||s[0]);return n}function k1(r){const n={},o=Object.keys(r);let s;const l=o.length;let d;for(s=0;s<l;s++)d=o[s],n[d]=r[d];return n}function mg(r){function n(o,s,l,d){gg(d);let f=o[d++];if(f==="__proto__")return!0;const p=Number.isFinite(+f),g=d>=o.length;return f=!f&&S.isArray(l)?l.length:f,g?(S.hasOwnProp(l,f)?l[f]=S.isArray(l[f])?l[f].concat(s):[l[f],s]:l[f]=s,!p):((!S.hasOwnProp(l,f)||!S.isObject(l[f]))&&(l[f]=[]),n(o,s,l[f],d)&&S.isArray(l[f])&&(l[f]=k1(l[f])),!p)}if(S.isFormData(r)&&S.isFunction(r.entries)){const o={};return S.forEachEntry(r,(s,l)=>{n(S1(s),l,o,0)}),o}return null}const yg=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),zi=(r,n)=>r!=null&&S.hasOwnProp(r,n)?r[n]:void 0;function E1(r,n,o){if(S.isString(r))try{return(n||JSON.parse)(r),S.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(o||JSON.stringify)(r)}const ys={transitional:Tu,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const s=o.getContentType()||"",l=s.indexOf("application/json")>-1,d=S.isObject(n);if(d&&S.isHTMLForm(n)&&(n=new FormData(n)),S.isFormData(n))return l?JSON.stringify(mg(n)):n;if(S.isArrayBuffer(n)||S.isBuffer(n)||S.isStream(n)||S.isFile(n)||S.isBlob(n)||S.isReadableStream(n))return n;if(S.isArrayBufferView(n))return n.buffer;if(S.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let p;if(d){const g=zi(this,"formSerializer");if(s.indexOf("application/x-www-form-urlencoded")>-1)return _1(n,g).toString();if((p=S.isFileList(n))||s.indexOf("multipart/form-data")>-1){const x=zi(this,"env"),y=x&&x.FormData;return el(p?{"files[]":n}:n,y&&new y,g)}}return d||l?(o.setContentType("application/json",!1),E1(n)):n}],transformResponse:[function(n){const o=zi(this,"transitional")||ys.transitional,s=o&&o.forcedJSONParsing,l=zi(this,"responseType"),d=l==="json";if(S.isResponse(n)||S.isReadableStream(n))return n;if(n&&S.isString(n)&&(s&&!l||d)){const p=!(o&&o.silentJSONParsing)&&d;try{return JSON.parse(n,zi(this,"parseReviver"))}catch(g){if(p)throw g.name==="SyntaxError"?Y.from(g,Y.ERR_BAD_RESPONSE,this,null,zi(this,"response")):g}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mt.classes.FormData,Blob:mt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(yg,r=>{ys.headers[r]={}});function Qc(r,n){const o=this||ys,s=n||o,l=Nt.from(s.headers);let d=s.data;return S.forEach(r,function(p){d=p.call(o,d,l.normalize(),n?n.status:void 0)}),l.normalize(),d}function xg(r){return!!(r&&r.__CANCEL__)}let xs=class extends Y{constructor(n,o,s){super(n??"canceled",Y.ERR_CANCELED,o,s),this.name="CanceledError",this.__CANCEL__=!0}};function vg(r,n,o){const s=o.config.validateStatus;!o.status||!s||s(o.status)?r(o):n(new Y("Request failed with status code "+o.status,o.status>=400&&o.status<500?Y.ERR_BAD_REQUEST:Y.ERR_BAD_RESPONSE,o.config,o.request,o))}const C1=/[\t\n\r]/g;function wg(r){if(typeof r!="string")return r;let n=0;for(;n<r.length&&r.charCodeAt(n)<=32;)n++;return r.slice(n).replace(C1,"")}function Xc(r){const n=/^([-+\w]{1,25}):(?:\/\/)?/.exec(r);return n&&n[1]||""}function R1(r,n){r=r||10;const o=new Array(r),s=new Array(r);let l=0,d=0,f;return n=n!==void 0?n:1e3,function(g){const x=Date.now(),y=s[d];f||(f=x),o[l]=g,s[l]=x;let w=d,R=0;for(;w!==l;)R+=o[w++],w=w%r;if(l=(l+1)%r,l===d&&(d=(d+1)%r),x-f<n)return;const B=y&&x-y;return B?Math.round(R*1e3/B):void 0}}function P1(r,n){let o=0,s=1e3/n,l,d;const f=(y,w=Date.now())=>{o=w,l=null,d&&(clearTimeout(d),d=null),r(...y)};return[(...y)=>{const w=Date.now(),R=w-o;R>=s?f(y,w):(l=y,d||(d=setTimeout(()=>{d=null,f(l)},s-R)))},()=>l&&f(l),(...y)=>f(y)]}const Va=(r,n,o=3)=>{let s=0;const l=R1(50,250);return P1(d=>{if(!d||!S.isNumber(d.loaded))return;const f=d.loaded,p=d.lengthComputable?d.total:void 0,g=Math.max(0,p!=null?Math.min(f,p):f),x=Math.max(0,g-s),y=l(x);s=Math.max(s,g);const w={loaded:g,total:p,progress:p?g/p:void 0,bytes:x,rate:y||void 0,estimated:y&&p?(p-g)/y:void 0,event:d,lengthComputable:p!=null,[n?"download":"upload"]:!0};r(w)},o)},Vh=(r,n)=>{const o=r!=null;return[s=>n[0]({lengthComputable:o,total:r,loaded:s}),n[1]]},qh=(r,n=S.asap)=>(...o)=>n(()=>r(...o)),N1=mt.hasStandardBrowserEnv?((r,n)=>o=>(o=new URL(o,mt.origin),r.protocol===o.protocol&&r.host===o.host&&(n||r.port===o.port)))(new URL(mt.origin),mt.navigator&&/(msie|trident)/i.test(mt.navigator.userAgent)):()=>!0,j1=mt.hasStandardBrowserEnv?{write(r,n,o,s,l,d,f){if(typeof document>"u")return;const p=[`${r}=${encodeURIComponent(n)}`];S.isNumber(o)&&p.push(`expires=${new Date(o).toUTCString()}`),S.isString(s)&&p.push(`path=${s}`),S.isString(l)&&p.push(`domain=${l}`),d===!0&&p.push("secure"),S.isString(f)&&p.push(`SameSite=${f}`),document.cookie=p.join("; ")},read(r){if(typeof document>"u")return null;const n=document.cookie.split(";");for(let o=0;o<n.length;o++){const s=n[o].replace(/^\s+/,""),l=s.indexOf("=");if(l!==-1&&s.slice(0,l)===r)try{return decodeURIComponent(s.slice(l+1))}catch{return s.slice(l+1)}}return null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function T1(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function O1(r,n){if(!n)return r;let o=r.length;for(;o>0&&r.charCodeAt(o-1)===47;)o--;return r.slice(0,o)+"/"+n.replace(/^\/+/,"")}const I1=/^https?:(?!\/\/)/i;function A1(r){return r&&r.replace(/(^|&)([^=&]*=)?[^&]+/g,(n,o,s="")=>`${o}${s}${Wa}`)}function D1(r){const n=r.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Wa}@`),o=n.indexOf("#"),l=(o===-1?n:n.slice(0,o)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Wa}`);return o===-1?l:`${l}#${A1(n.slice(o+1))}`}function Kh(r,n){if(typeof r=="string"){const o=wg(r);if(I1.test(o))throw new Y(`Invalid URL ${JSON.stringify(D1(o))}: missing "//" after protocol`,Y.ERR_INVALID_URL,n)}}function bg(r,n,o,s){Kh(n,s);let l=!T1(n);return r&&(l||o===!1)?(Kh(r,s),O1(r,n)):n}const Qh=r=>r instanceof Nt?{...r}:r,L1=r=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(r).concat(Object.getOwnPropertySymbols(r).filter(n=>Object.getOwnPropertyDescriptor(r,n).enumerable)):Object.keys(r);function ai(r,n){r=r||{},n=n||{};const o=Object.create(null);Object.defineProperty(o,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function s(y,w,R,B){return S.isPlainObject(y)&&S.isPlainObject(w)?S.merge.call({caseless:B},y,w):S.isPlainObject(w)?S.merge({},w):S.isArray(w)?w.slice():w}function l(y,w,R,B){if(S.isUndefined(w)){if(!S.isUndefined(y))return s(void 0,y,R,B)}else return s(y,w,R,B)}function d(y,w){if(!S.isUndefined(w))return s(void 0,w)}function f(y,w){if(S.isUndefined(w)){if(!S.isUndefined(y))return s(void 0,y)}else return s(void 0,w)}function p(y){const w=S.hasOwnProp(n,"transitional")?n.transitional:void 0;if(!S.isUndefined(w))if(S.isPlainObject(w)){if(S.hasOwnProp(w,y))return w[y]}else return;const R=S.hasOwnProp(r,"transitional")?r.transitional:void 0;if(S.isPlainObject(R)&&S.hasOwnProp(R,y))return R[y]}function g(y,w,R){if(S.hasOwnProp(n,R))return s(y,w);if(S.hasOwnProp(r,R))return s(void 0,y)}const x={url:d,method:d,data:d,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutErrorMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,allowedSocketPaths:f,responseEncoding:f,validateStatus:g,headers:(y,w,R)=>l(Qh(y),Qh(w),R,!0)};return S.forEach(L1({...r,...n}),function(w){if(w==="__proto__"||w==="constructor"||w==="prototype")return;const R=S.hasOwnProp(x,w)?x[w]:l,B=S.hasOwnProp(r,w)?r[w]:void 0,D=S.hasOwnProp(n,w)?n[w]:void 0,A=R(B,D,w);S.isUndefined(A)&&R!==g||(o[w]=A)}),S.hasOwnProp(n,"validateStatus")&&S.isUndefined(n.validateStatus)&&p("validateStatusUndefinedResolves")===!1&&(S.hasOwnProp(r,"validateStatus")?o.validateStatus=s(void 0,r.validateStatus):delete o.validateStatus),o}const z1=["content-type","content-length"];function M1(r,n,o){if(o!=="content-only"){r.set(n);return}Object.entries(n||{}).forEach(([s,l])=>{z1.includes(s.toLowerCase())&&r.set(s,l)})}const U1=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(n,o)=>String.fromCharCode(parseInt(o,16)));function _g(r){const n=ai({},r),o=R=>S.hasOwnProp(n,R)?n[R]:void 0,s=o("data");let l=o("withXSRFToken");const d=o("xsrfHeaderName"),f=o("xsrfCookieName");let p=o("headers");const g=o("auth"),x=o("baseURL"),y=o("allowAbsoluteUrls"),w=o("url");if(n.headers=p=Nt.from(p),n.url=hg(bg(x,w,y,n),o("params"),o("paramsSerializer")),g){const R=S.getSafeProp(g,"username")||"",B=S.getSafeProp(g,"password")||"";try{p.set("Authorization","Basic "+btoa(R+":"+(B?U1(B):"")))}catch(D){throw Y.from(D,Y.ERR_BAD_OPTION_VALUE,r)}}if(S.isFormData(s)){const R=S.getSafeProp(s,"getHeaders");mt.hasStandardBrowserEnv||mt.hasStandardBrowserWebWorkerEnv||S.isReactNative(s)?p.setContentType(void 0):S.isFunction(R)&&M1(p,R.call(s),o("formDataHeaderPolicy"))}if(mt.hasStandardBrowserEnv&&(S.isFunction(l)&&(l=l(n)),l===!0||l==null&&N1(n.url))){const B=d&&f&&j1.read(f);B&&p.set(d,B)}return n}const F1=typeof XMLHttpRequest<"u",$1=F1&&function(r){return new Promise(function(o,s){const l=_g(r);let d=l.data;const f=Nt.from(l.headers).normalize();let{responseType:p,onUploadProgress:g,onDownloadProgress:x}=l,y,w,R,B,D,A;function I(){B&&B(),D&&D(),l.cancelToken&&l.cancelToken.unsubscribe(y),l.signal&&l.signal.removeEventListener("abort",y)}let N=new XMLHttpRequest;N.open(l.method.toUpperCase(),l.url,!0),N.timeout=l.timeout;function T(U){if(!N)return;if(N.status===0&&(Xc(wg(l.url))||Xc(mt.origin))!=="file"&&!(N.responseURL&&N.responseURL.startsWith("file:"))){s(new Y("Request aborted",Y.ECONNABORTED,r,N)),I(),N=null;return}try{U?A&&A(U):D&&D()}catch(_e){setTimeout(()=>{throw _e})}if(!N)return;const V=Nt.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),se={data:!p||p==="text"||p==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:V,config:r,request:N};vg(function(ve){o(ve),I()},function(ve){s(ve),I()},se),N=null}"onloadend"in N?N.onloadend=T:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.startsWith("file:"))||setTimeout(T)},N.onabort=function(){N&&(s(new Y("Request aborted",Y.ECONNABORTED,r,N)),I(),N=null)},N.onerror=function(V){const G=V&&V.message?V.message:"Network Error",se=new Y(G,Y.ERR_NETWORK,r,N);se.event=V||null,s(se),I(),N=null},N.ontimeout=function(){let V=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const G=l.transitional||Tu;l.timeoutErrorMessage&&(V=l.timeoutErrorMessage),s(new Y(V,G.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,r,N)),I(),N=null},d===void 0&&f.setContentType(null),"setRequestHeader"in N&&S.forEach(lg(f),function(V,G){N.setRequestHeader(G,V)}),S.isUndefined(l.withCredentials)||(N.withCredentials=!!l.withCredentials),p&&p!=="json"&&(N.responseType=l.responseType),x&&([R,D,A]=Va(x,!0),N.addEventListener("progress",R)),g&&N.upload&&([w,B]=Va(g),N.upload.addEventListener("progress",w),N.upload.addEventListener("loadend",B)),(l.cancelToken||l.signal)&&(y=U=>{N&&(s(!U||U.type?new xs(null,r,N):U),N.abort(),I(),N=null)},l.cancelToken&&l.cancelToken.subscribe(y),l.signal&&(l.signal.aborted?y():l.signal.addEventListener("abort",y)));const M=Xc(l.url);if(M&&!mt.protocols.includes(M)){s(new Y("Unsupported protocol "+M+":",Y.ERR_BAD_REQUEST,r)),I();return}N.send(d||null)})},B1=(r,n)=>{if(r=r?r.filter(Boolean):[],!n&&!r.length)return;const o=new AbortController;let s=!1;const l=function(g){if(!s){s=!0,f();const x=g instanceof Error?g:this.reason;o.abort(x instanceof Y?x:new xs(x instanceof Error?x.message:x))}};let d=n&&setTimeout(()=>{d=null,l(new Y(`timeout of ${n}ms exceeded`,Y.ETIMEDOUT))},n);const f=()=>{r&&(d&&clearTimeout(d),d=null,r.forEach(g=>{g.unsubscribe?g.unsubscribe(l):g.removeEventListener("abort",l)}),r=null)};r.forEach(g=>{if(!s){if(g.aborted){l.call(g);return}g.addEventListener("abort",l,{once:!0})}});const{signal:p}=o;return p.unsubscribe=()=>S.asap(f),p},H1=function*(r,n){let o=r.byteLength;if(o<n){yield r;return}let s=0,l;for(;s<o;)l=s+n,yield r.slice(s,l),s=l},W1=async function*(r,n){for await(const o of V1(r))yield*H1(o,n)},V1=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const n=r.getReader();try{for(;;){const{done:o,value:s}=await n.read();if(o)break;yield s}}finally{await n.cancel()}},Xh=(r,n,o,s)=>{const l=W1(r,n);let d=0,f,p=g=>{f||(f=!0,s&&s(g))};return new ReadableStream({async pull(g){try{const{done:x,value:y}=await l.next();if(x){p(),g.close();return}let w=y.byteLength;if(o){let R=d+=w;o(R)}g.enqueue(new Uint8Array(y))}catch(x){throw p(x),x}},cancel(g){return p(g),l.return()}},{highWaterMark:2})},Gh=r=>r>=48&&r<=57||r>=65&&r<=70||r>=97&&r<=102,Sg=(r,n,o)=>n+2<o&&Gh(r.charCodeAt(n+1))&&Gh(r.charCodeAt(n+2)),Jh=r=>r<=57?r-48:(r&223)-55,q1=r=>r>=65&&r<=90||r>=97&&r<=122||r>=48&&r<=57||r===43||r===47||r===45||r===95,K1=r=>r===9||r===10||r===12||r===13||r===32,Q1=r=>{const n=Math.floor(r/4),o=r%4;return n*3+(o===2?1:o===3?2:0)},X1=r=>{const n=r.length;let o=0;return n>0&&r.charCodeAt(n-1)===61&&(o++,n>1&&r.charCodeAt(n-2)===61&&o++),Math.floor((n-o)*3/4)},G1=r=>{const n=r.length;let o=0,s=0,l=!1;for(let d=0;d<n;d++){let f=r.charCodeAt(d);if(f===37&&Sg(r,d,n)&&(f=Jh(r.charCodeAt(d+1))*16+Jh(r.charCodeAt(d+2)),d+=2),!K1(f)){if(f===61){s++;continue}if(!q1(f)||s>0){l=!0;continue}o++}}return l||s>2||s>0&&(o+s)%4!==0||o%4===1?X1(r):Q1(o)},J1=(r,n)=>{if(!r||typeof r!="string"||!r.startsWith("data:"))return 0;const o=r.indexOf(",");if(o<0)return 0;const s=r.slice(5,o),l=r.slice(o+1);if(/;base64/i.test(s))return n(l);let f=0;for(let p=0,g=l.length;p<g;p++){const x=l.charCodeAt(p);if(x===37&&Sg(l,p,g))f+=1,p+=2;else if(x<128)f+=1;else if(x<2048)f+=2;else if(x>=55296&&x<=56319&&p+1<g){const y=l.charCodeAt(p+1);y>=56320&&y<=57343?(f+=4,p++):f+=3}else f+=3}return f};function Y1(r){const n=typeof r=="string"?r.indexOf("#"):-1;return J1(n===-1?r:r.slice(0,n),G1)}const Iu="1.20.0",Yh=64*1024,Z1={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:ja}=S,ew=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(n,o)=>String.fromCharCode(parseInt(o,16))),Zh=r=>{if(!S.isString(r))return r;try{return decodeURIComponent(r)}catch{return r}},ep=(r,...n)=>{try{return!!r(...n)}catch{return!1}},tw=r=>{const n=r.indexOf("://");let o=r;return n!==-1&&(o=o.slice(n+3)),o.includes("@")||o.includes(":")},nw=r=>{const n=S.global!==void 0&&S.global!==null?S.global:globalThis,{ReadableStream:o,TextEncoder:s}=n;r=S.merge.call({skipUndefined:!0},{Request:n.Request,Response:n.Response},r);const{fetch:l,Request:d,Response:f}=r,p=l?ja(l):typeof fetch=="function",g=ja(d),x=ja(f);if(!p)return!1;const y=p&&ja(o),w=p&&(typeof s=="function"?(N=>T=>N.encode(T))(new s):async N=>new Uint8Array(await new d(N).arrayBuffer())),R=g&&y&&ep(()=>{let N=!1;const T=new d(mt.origin,{body:new o,method:"POST",get duplex(){return N=!0,"half"}}),M=T.headers.has("Content-Type");return T.body!=null&&T.body.cancel(),N&&!M}),B=x&&y&&ep(()=>S.isReadableStream(new f("").body)),D={stream:B&&(N=>N.body)};p&&["text","arrayBuffer","blob","formData","stream"].forEach(N=>{!D[N]&&(D[N]=(T,M)=>{let U=T&&T[N];if(U)return U.call(T);throw new Y(`Response type '${N}' is not supported`,Y.ERR_NOT_SUPPORT,M)})});const A=async N=>{if(N==null)return 0;if(S.isBlob(N))return N.size;if(S.isSpecCompliantForm(N))return(await new d(mt.origin,{method:"POST",body:N}).arrayBuffer()).byteLength;if(S.isArrayBufferView(N)||S.isArrayBuffer(N))return N.byteLength;if(S.isURLSearchParams(N)&&(N=N+""),S.isString(N))return(await w(N)).byteLength},I=async(N,T)=>{const M=S.toFiniteNumber(N.getContentLength());return M??A(T)};return async N=>{let{url:T,method:M,data:U,signal:V,cancelToken:G,timeout:se,onDownloadProgress:_e,onUploadProgress:ve,responseType:le,headers:Ne,withCredentials:De="same-origin",fetchOptions:Ce,maxContentLength:Le,maxBodyLength:it,maxRedirects:Xe}=_g(N);const Re=S.isNumber(Le)&&Le>-1,X=S.isNumber(it)&&it>-1,re=ce=>S.hasOwnProp(N,ce)?N[ce]:void 0;let J=l||fetch;le=le?(le+"").toLowerCase():"text";let C=B1([V,G&&G.toAbortSignal()],se),z=null;const ue=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let ye,we=null;const te=()=>new Y("Request body larger than maxBodyLength limit",Y.ERR_BAD_REQUEST,N,z);try{let ce;const xe=re("auth");if(xe){const pe=S.getSafeProp(xe,"username")||"",ke=S.getSafeProp(xe,"password")||"";ce={username:pe,password:ke}}if(tw(T)){const pe=new URL(T,mt.origin);if(!ce&&(pe.username||pe.password)){const ke=Zh(pe.username),et=Zh(pe.password);ce={username:ke,password:et}}(pe.username||pe.password)&&(pe.username="",pe.password="",T=pe.href)}if(ce&&(Ne.delete("authorization"),Ne.set("Authorization","Basic "+btoa(ew((ce.username||"")+":"+(ce.password||""))))),Re&&typeof T=="string"&&T.startsWith("data:")&&Y1(T)>Le)throw new Y("maxContentLength size of "+Le+" exceeded",Y.ERR_BAD_RESPONSE,N,z);if(X&&M!=="get"&&M!=="head"){const pe=await A(U);if(typeof pe=="number"&&isFinite(pe)&&(ye=pe,pe>it))throw te()}const Te=X&&(S.isReadableStream(U)||S.isStream(U)),ut=(pe,ke,et)=>Xh(pe,Yh,ot=>{if(X&&ot>it)throw we=te();ke&&ke(ot)},et);if(R&&M!=="get"&&M!=="head"&&(ve||Te)){if(ye=ye??await I(Ne,U),ye!==0||Te){let pe=new d(T,{method:"POST",body:U,duplex:"half"}),ke;if(S.isFormData(U)&&(ke=pe.headers.get("content-type"))&&Ne.setContentType(ke),pe.body){const[et,ot]=ve&&Vh(ye,Va(qh(ve)))||[];U=ut(pe.body,et,ot)}}}else if(Te&&!g&&y&&M!=="get"&&M!=="head")U=ut(U);else if(Te&&g&&!R&&M!=="get"&&M!=="head")throw new Y("Stream request bodies are not supported by the current fetch implementation",Y.ERR_NOT_SUPPORT,N,z);S.isString(De)||(De=De?"include":"omit");const In=g&&"credentials"in d.prototype;if(S.isFormData(U)){const pe=Ne.getContentType();pe&&/^multipart\/form-data/i.test(pe)&&!/boundary=/i.test(pe)&&Ne.delete("content-type")}Ne.set("User-Agent","axios/"+Iu,!1);const qe=Ce==null?Ce:Object.assign(Object.create(null),Ce);qe&&(delete qe.body,delete qe.headers,delete qe.method,delete qe.signal,delete qe.duplex,delete qe.credentials);const dt=Object.assign(Object.create(null),qe,{signal:C,method:M.toUpperCase(),headers:lg(Ne.normalize()),body:U,duplex:"half",credentials:In?De:void 0});g&&(S.forEach(Z1,(pe,ke)=>{dt[ke]===void 0&&(dt[ke]=pe)}),dt.signal===void 0&&(dt.signal=null),dt.body===void 0&&(dt.body=null)),Xe===0&&(dt.redirect="manual",qe&&(qe.redirect="manual")),z=g&&new d(T,dt);let Ge=await(g?J(z,qe):J(T,dt));const xn=Nt.from(Ge.headers);if(Re){const pe=S.toFiniteNumber(xn.getContentLength());if(pe!=null&&pe>Le)throw new Y("maxContentLength size of "+Le+" exceeded",Y.ERR_BAD_RESPONSE,N,z)}const An=B&&(le==="stream"||le==="response");if(B&&Ge.body&&(_e||Re||An&&ue)){const pe={};["status","statusText","headers"].forEach(Ht=>{pe[Ht]=Ge[Ht]});const ke=S.toFiniteNumber(xn.getContentLength()),[et,ot]=_e&&Vh(ke,Va(qh(_e),!0))||[];let Bt=0;const Dn=Ht=>{if(Re&&(Bt=Ht,Bt>Le))throw new Y("maxContentLength size of "+Le+" exceeded",Y.ERR_BAD_RESPONSE,N,z);et&&et(Ht)};Ge=new f(Xh(Ge.body,Yh,Dn,()=>{ot&&ot(),ue&&ue()}),pe)}le=le||"text";let vt=await D[S.findKey(D,le)||"text"](Ge,N);if(Re&&!B&&!An){let pe;if(vt!=null&&(typeof vt.byteLength=="number"?pe=vt.byteLength:typeof vt.size=="number"?pe=vt.size:typeof vt=="string"&&(pe=typeof s=="function"?new s().encode(vt).byteLength:vt.length)),typeof pe=="number"&&pe>Le)throw new Y("maxContentLength size of "+Le+" exceeded",Y.ERR_BAD_RESPONSE,N,z)}return!An&&ue&&ue(),await new Promise((pe,ke)=>{vg(pe,ke,{data:vt,headers:Nt.from(Ge.headers),status:Ge.status,statusText:Ge.statusText,config:N,request:z})})}catch(ce){if(ue&&ue(),C&&C.aborted&&C.reason instanceof Y){const xe=C.reason;throw xe.config=N,z&&(xe.request=z),ce!==xe&&Object.defineProperty(xe,"cause",{__proto__:null,value:ce,writable:!0,enumerable:!1,configurable:!0}),xe}if(we)throw z&&!we.request&&(we.request=z),we;if(ce instanceof Y)throw z&&!ce.request&&(ce.request=z),ce;if(ce&&ce.name==="TypeError"&&/Load failed|fetch/i.test(ce.message)){const xe=new Y("Network Error",Y.ERR_NETWORK,N,z,ce&&ce.response);throw Object.defineProperty(xe,"cause",{__proto__:null,value:ce.cause||ce,writable:!0,enumerable:!1,configurable:!0}),xe}throw Y.from(ce,ce&&ce.code,N,z,ce&&ce.response)}}},rw=new Map,kg=r=>{let n=r&&r.env||{};const{fetch:o,Request:s,Response:l}=n,d=[s,l,o];let f=d.length,p=f,g,x,y=rw;for(;p--;)g=d[p],x=y.get(g),x===void 0&&y.set(g,x=p?new Map:nw(n)),y=x;return x};kg();const Au={http:u1,xhr:$1,fetch:{get:kg}};S.forEach(Au,(r,n)=>{if(r){try{Object.defineProperty(r,"name",{__proto__:null,value:n})}catch{}Object.defineProperty(r,"adapterName",{__proto__:null,value:n})}});const tp=r=>`- ${r}`,iw=r=>S.isFunction(r)||r===null||r===!1;function ow(r,n){r=S.isArray(r)?r:[r];const{length:o}=r;let s,l;const d={};for(let f=0;f<o;f++){s=r[f];let p;if(l=s,!iw(s)&&(l=Au[(p=String(s)).toLowerCase()],l===void 0))throw new Y(`Unknown adapter '${p}'`);if(l&&(S.isFunction(l)||(l=l.get(n))))break;d[p||"#"+f]=l}if(!l){const f=Object.entries(d).map(([g,x])=>`adapter ${g} `+(x===!1?"is not supported by the environment":"is not available in the build"));let p=o?f.length>1?`since :
`+f.map(tp).join(`
`):" "+tp(f[0]):"as no adapter specified";throw new Y("There is no suitable adapter to dispatch the request "+p,Y.ERR_NOT_SUPPORT)}return l}const Eg={getAdapter:ow,adapters:Au};function Gc(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new xs(null,r)}function Jc(r){const n=S.toSafeFlatObject(r);return Gc(n),n.headers=Nt.from(S.getSafeProp(n,"headers")),n.data=Qc.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Eg.getAdapter(n.adapter||ys.adapter,n)(n).then(function(l){Gc(n),n.response=l;try{l.data=Qc.call(n,n.transformResponse,l)}finally{delete n.response}return l.headers=Nt.from(l.headers),l},function(l){if(!xg(l)&&(Gc(n),l&&l.response)){n.response=l.response;try{l.response.data=Qc.call(n,n.transformResponse,l.response)}finally{delete n.response}l.response.headers=Nt.from(l.response.headers)}return Promise.reject(l)})}const tl={};["object","boolean","number","function","string","symbol"].forEach((r,n)=>{tl[r]=function(s){return typeof s===r||"a"+(n<1?"n ":" ")+r}});const np={};tl.transitional=function(n,o,s){function l(d,f){return"[Axios v"+Iu+"] Transitional option '"+d+"'"+f+(s?". "+s:"")}return(d,f,p)=>{if(n===!1)throw new Y(l(f," has been removed"+(o?" in "+o:"")),Y.ERR_DEPRECATED);return o&&!np[f]&&(np[f]=!0,console.warn(l(f," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(d,f,p):!0}};tl.spelling=function(n){return(o,s)=>(console.warn(`${s} is likely a misspelling of ${n}`),!0)};function sw(r,n,o){if(typeof r!="object"||r===null)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const s=Object.keys(r);let l=s.length;for(;l-- >0;){const d=s[l],f=Object.prototype.hasOwnProperty.call(n,d)?n[d]:void 0;if(f){const p=r[d],g=p===void 0||f(p,d,r);if(g!==!0)throw new Y("option "+d+" must be "+g,Y.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new Y("Unknown option "+d,Y.ERR_BAD_OPTION)}}const La={assertOptions:sw,validators:tl},Ct=La.validators;let ri=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Hh,response:new Hh}}async request(n,o){try{return await this._request(n,o)}catch(s){if(s instanceof Error)try{let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const d=l.stack;let f="";if(typeof d=="string"){const p=d.indexOf(`
`);f=p===-1?"":d.slice(p+1)}if(!s.stack)s.stack=f;else if(f){const p=f.indexOf(`
`),g=p===-1?-1:f.indexOf(`
`,p+1),x=g===-1?"":f.slice(g+1);String(s.stack).endsWith(x)||(s.stack+=`
`+f)}}catch{}throw s}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=ai(this.defaults,o);const{transitional:s,paramsSerializer:l,headers:d}=o;s!==void 0&&La.assertOptions(s,{silentJSONParsing:Ct.transitional(Ct.boolean),forcedJSONParsing:Ct.transitional(Ct.boolean),clarifyTimeoutError:Ct.transitional(Ct.boolean),legacyInterceptorReqResOrdering:Ct.transitional(Ct.boolean),advertiseZstdAcceptEncoding:Ct.transitional(Ct.boolean),validateStatusUndefinedResolves:Ct.transitional(Ct.boolean)},!1),l!=null&&(S.isFunction(l)?o.paramsSerializer={serialize:l}:La.assertOptions(l,{encode:Ct.function,serialize:Ct.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),La.assertOptions(o,{baseUrl:Ct.spelling("baseURL"),withXsrfToken:Ct.spelling("withXSRFToken")},!0),o.method=(S.getSafeProp(o,"method")||S.getSafeProp(this.defaults,"method")||"get").toLowerCase();let f=d&&S.merge(d.common,d[o.method]);d&&S.forEach(yg.concat("common"),D=>{delete d[D]}),o.headers=Nt.concat(f,d);const p=[];let g=!0;this.interceptors.request.forEach(function(A){if(typeof A.runWhen=="function"&&A.runWhen(o)===!1)return;g=g&&A.synchronous;const I=o.transitional||Tu;I&&I.legacyInterceptorReqResOrdering?p.unshift(A.fulfilled,A.rejected):p.push(A.fulfilled,A.rejected)});const x=[];this.interceptors.response.forEach(function(A){x.push(A.fulfilled,A.rejected)});let y,w=0,R;if(!g){const D=[Jc.bind(this),void 0];for(D.unshift(...p),D.push(...x),R=D.length,y=Promise.resolve(o);w<R;)y=y.then(D[w++],D[w++]);return y}R=p.length;let B=o;for(;w<R;){const D=p[w++],A=p[w++];try{B=D?D(B):B}catch(I){if(!A){y=Promise.reject(I);break}try{const N=A.call(this,I);S.isThenable(N)&&(y=Promise.resolve(N).then(()=>Jc.call(this,B)))}catch(N){y=Promise.reject(N)}break}}if(!y)try{y=Jc.call(this,B)}catch(D){y=Promise.reject(D)}for(w=0,R=x.length;w<R;)y=y.then(x[w++],x[w++]);return y}getUri(n){n=ai(this.defaults,n);const o=bg(n.baseURL,n.url,n.allowAbsoluteUrls,n);return hg(o,n.params,n.paramsSerializer)}};S.forEach(["delete","get","head","options"],function(n){ri.prototype[n]=function(o,s){return this.request(ai(s||{},{method:n,url:o,data:s&&S.hasOwnProp(s,"data")?s.data:void 0}))}});S.forEach(["post","put","patch","query"],function(n){function o(s){return function(d,f,p){return this.request(ai(p||{},{method:n,headers:s?{"Content-Type":"multipart/form-data"}:{},url:d,data:f}))}}ri.prototype[n]=o(),n!=="query"&&(ri.prototype[n+"Form"]=o(!0))});let aw=class Cg{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const s=this;this.promise.then(l=>{if(!s._listeners)return;let d=s._listeners.length;for(;d-- >0;)s._listeners[d](l);s._listeners=null}),this.promise.then=l=>{let d;const f=new Promise(p=>{s.subscribe(p),d=p}).then(l);return f.cancel=function(){s.unsubscribe(d)},f},n(function(d,f,p){s.reason||(s.reason=new xs(d,f,p),o(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=s=>{n.abort(s)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new Cg(function(l){n=l}),cancel:n}}};function lw(r){return function(o){return r.apply(null,o)}}function cw(r){return S.isObject(r)&&r.isAxiosError===!0}const za={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(za).forEach(([r,n])=>{za[n]===void 0&&(za[n]=r)});function Rg(r){const n=new ri(r),o=Jp(ri.prototype.request,n);return S.extend(o,ri.prototype,n,{allOwnKeys:!0}),S.extend(o,n,null,{allOwnKeys:!0}),o.create=function(l){return Rg(ai(r,l))},o}const Qe=Rg(ys);Qe.Axios=ri;Qe.CanceledError=xs;Qe.CancelToken=aw;Qe.isCancel=xg;Qe.VERSION=Iu;Qe.toFormData=el;Qe.AxiosError=Y;Qe.Cancel=Qe.CanceledError;Qe.all=function(n){return Promise.all(n)};Qe.spread=lw;Qe.isAxiosError=cw;Qe.mergeConfig=ai;Qe.AxiosHeaders=Nt;Qe.formToJSON=r=>mg(S.isHTMLForm(r)?new FormData(r):r);Qe.getAdapter=Eg.getAdapter;Qe.HttpStatusCode=za;Qe.default=Qe;const{Axios:xb,AxiosError:vb,CanceledError:wb,isCancel:bb,CancelToken:_b,VERSION:Sb,all:kb,Cancel:Eb,isAxiosError:Cb,spread:Rb,toFormData:Pb,AxiosHeaders:Nb,HttpStatusCode:jb,formToJSON:Tb,getAdapter:Ob,mergeConfig:Ib,create:Ab}=Qe,Ze=Qe.create({baseURL:"/api",withCredentials:!0}),uw=500,Kr=[],hu=new Set;let Yc=0,Zc;function qa(){Zc===void 0&&(Zc=window.setTimeout(()=>{Zc=void 0,hu.forEach(r=>{try{r()}catch{}})},40))}function Db(){return Kr.slice()}function Lb(r){return hu.add(r),()=>{hu.delete(r)}}function zb(){Kr.length=0,qa()}function xr(r,n=2){return String(r).padStart(n,"0")}function dw(r){const n=-r.getTimezoneOffset(),o=n>=0?"+":"-",s=Math.abs(n);return`${r.getFullYear()}-${xr(r.getMonth()+1)}-${xr(r.getDate())}T${xr(r.getHours())}:${xr(r.getMinutes())}:${xr(r.getSeconds())}.${xr(r.getMilliseconds(),3)}${o}${xr(Math.floor(s/60))}:${xr(s%60)}`}let rp=0,Ta=0;function Nr(r,n){if(r!==void 0)return r.length<=n?r:r.slice(0,n)+`… (cắt bớt, tổng ${r.length} ký tự)`}function fw(r){Date.now()<rp||Ze.post("/debug/client",{level:r.level,area:r.area,message:Nr(r.message,1500),detail:Nr(r.detail,8e3),exType:r.exType,stack:Nr(r.stack,8e3),url:window.location.pathname+window.location.search,cid:r.cid,clientTime:r.ts,data:r.data}).then(()=>{Ta=0,r.posted=!0,qa()}).catch(()=>{Ta+=1,Ta>=5&&(rp=Date.now()+3e4,Ta=0)})}function wr(r,n,o,s="INFO",l){const d=new Date,f=s==="ERROR"||s==="WARN"?s:"INFO",p=Kr[Kr.length-1];if(p&&p.area===r&&p.level===f&&p.message===n&&p.detail===o&&d.getTime()-new Date(p.ts).getTime()<2e3){p.count=(p.count||1)+1,qa();return}Yc+=1;const g={id:`c${Yc}`,ts:dw(d),at:d.toLocaleTimeString(),level:f,area:r,origin:"client",message:n,detail:o,exType:l==null?void 0:l.exType,stack:l==null?void 0:l.stack,data:l==null?void 0:l.data,cid:`${d.getTime().toString(36)}${Yc}`};Kr.push(g),Kr.length>uw&&Kr.shift(),qa(),((l==null?void 0:l.post)??(f!=="INFO"||r!=="api"))&&fw(g)}const ip=/pass|token|secret|key|authorization|cookie/i;function rs(r,n=0){if(r==null)return r;if(typeof r=="string")return r.length>300?r.slice(0,300)+"…":r;if(typeof r!="object")return r;if(typeof Blob<"u"&&r instanceof Blob)return`[${r instanceof File?"File "+r.name:"Blob"} ${r.size} byte]`;if(typeof FormData<"u"&&r instanceof FormData){const s={};return r.forEach((l,d)=>{s[d]=ip.test(d)?"***":typeof l=="string"?rs(l,n+1):`[File ${l.name} ${l.size} byte]`}),s}if(Array.isArray(r))return r.slice(0,20).map(s=>rs(s,n+1));if(n>=3)return"{…}";const o={};for(const[s,l]of Object.entries(r))o[s]=ip.test(s)?"***":rs(l,n+1);return o}function hw(r){try{if(r==null)return;if(typeof r=="string")try{return rs(JSON.parse(r))}catch{return Nr(r,300)}return rs(r)}catch{return"[không tóm tắt được]"}}function pu(r,n){try{const o=typeof r=="string"?r:JSON.stringify(r);return Nr(o,n)}catch{return}}function pw(r){if(!r)return"";if(typeof r=="string")return r.length<200&&!r.trimStart().startsWith("<")?r:"";if(typeof r=="object"){const n=r.message??r.title;if(typeof n=="string")return n}return""}const op=r=>r==null?void 0:r.__dbg,gu=r=>String(r??"").includes("/debug/"),gw=r=>r.includes("/gate/")||r.includes("/auth/");Ze.interceptors.request.use(r=>{if(!gu(r.url)){const n=String(r.url??"");r.__dbg={t0:performance.now(),body:gw(n)?void 0:hw(r.data)}}return r});Ze.interceptors.response.use(r=>{var n;if(!gu(r.config.url)){const o=String(r.config.url??""),s=op(r.config),l=s?Math.round(performance.now()-s.t0):void 0,d=(r.config.method||"get").toUpperCase(),f=d==="GET"&&l!==void 0&&l>=3e3,p=o.includes("/gate/");wr("api",`${d} ${o} → ${r.status}${l!==void 0?` (${l}ms)`:""}${f?" chậm":""}`,p?"(redacted)":pu(r.data,500),f?"WARN":"INFO",{post:f,data:{method:d,url:o,status:r.status,durationMs:l,traceId:(n=r.headers)==null?void 0:n["x-trace-id"],params:r.config.params,requestBody:s==null?void 0:s.body}})}return r},r=>{var n,o,s,l,d,f,p,g,x,y;if(!gu((n=r==null?void 0:r.config)==null?void 0:n.url)){const w=String(((o=r==null?void 0:r.config)==null?void 0:o.url)??""),R=op(r==null?void 0:r.config),B=R?Math.round(performance.now()-R.t0):void 0,D=String(((s=r==null?void 0:r.config)==null?void 0:s.method)||"get").toUpperCase(),A=(l=r==null?void 0:r.response)==null?void 0:l.status,I=(d=r==null?void 0:r.response)==null?void 0:d.data,N=Qe.isCancel(r),T=N?"INFO":!A||A>=500?"ERROR":"WARN",M=pw(I)||(A?"":(r==null?void 0:r.code)==="ECONNABORTED"?"quá thời gian chờ":"không kết nối được máy chủ");wr("api",`${D} ${w} → ${N?"ĐÃ HỦY":A??"LỖI MẠNG"}${B!==void 0?` (${B}ms)`:""}${M?" — "+M:""}`,typeof I=="string"?Nr(I,4e3):pu(I??(r==null?void 0:r.message),4e3),T,{post:!A&&!N,exType:r==null?void 0:r.name,data:{method:D,url:w,status:A,durationMs:B,code:r==null?void 0:r.code,traceId:(p=(f=r==null?void 0:r.response)==null?void 0:f.headers)==null?void 0:p["x-trace-id"],params:(g=r==null?void 0:r.config)==null?void 0:g.params,requestBody:R==null?void 0:R.body,responseMessage:M||void 0}})}return((x=r==null?void 0:r.response)==null?void 0:x.status)===401&&mw(String(((y=r==null?void 0:r.config)==null?void 0:y.url)??"")),Promise.reject(r)});let sp=!1;function mw(r){if(sp||typeof window>"u")return;const n=window.location.pathname;!n.startsWith("/admin")||n.startsWith("/admin/login")||r.includes("/admin/auth/login")||r.includes("/admin/auth/me")||(sp=!0,window.location.assign("/admin/login"))}let ap=!1,Mi=!1;function eu(r){return typeof r=="string"?r:r instanceof Error?`${r.name}: ${r.message}`:pu(r,500)??String(r)}function yw(r,n){wr("react",`Lỗi hiển thị giao diện: ${r.message}`,n||void 0,"ERROR",{exType:r.name,stack:r.stack,data:{page:window.location.pathname}})}function xw(){if(ap||typeof window>"u")return;ap=!0,window.addEventListener("error",o=>{if(o instanceof ErrorEvent){const l=o.error;wr("js-error",o.message||"Lỗi JavaScript",`${o.filename}:${o.lineno}:${o.colno}`,"ERROR",{exType:l==null?void 0:l.name,stack:l==null?void 0:l.stack,data:{file:o.filename,line:o.lineno,col:o.colno,page:window.location.pathname}});return}const s=o.target;if(s&&s.tagName){const l=s.src||s.href||"";wr("resource",`Không tải được <${s.tagName.toLowerCase()}> ${l}`,void 0,"WARN",{data:{tag:s.tagName.toLowerCase(),src:l,page:window.location.pathname}})}},!0),window.addEventListener("unhandledrejection",o=>{const s=o.reason,l=s instanceof Error?s:void 0;wr("promise",`Promise bị từ chối mà không có xử lý: ${l?l.message:eu(s)}`,void 0,"ERROR",{exType:l==null?void 0:l.name,stack:l==null?void 0:l.stack,data:{page:window.location.pathname}})});const r=console.error.bind(console),n=console.warn.bind(console);console.error=(...o)=>{if(r(...o),!Mi){Mi=!0;try{const s=o.find(l=>l instanceof Error);wr("console",Nr(o.map(eu).join(" "),1500)??"",void 0,"ERROR",{exType:s==null?void 0:s.name,stack:s==null?void 0:s.stack})}finally{Mi=!1}}},console.warn=(...o)=>{if(n(...o),!Mi){Mi=!0;try{wr("console",Nr(o.map(eu).join(" "),1500)??"",void 0,"WARN",{post:!1})}finally{Mi=!1}}}}const Oa=[{id:"HAIR",label:"Tóc"},{id:"MASK",label:"Mặt nạ"},{id:"TOP",label:"Áo"},{id:"BOTTOM",label:"Quần"},{id:"SHOES",label:"Giày"},{id:"MAKEUP",label:"Make Up"}],Ma=[{id:"FIST",label:"Nắm Đấm"}],vw=[{id:"ADR_NORMAL",label:"FF Thường ADR"},{id:"ADR_MAX",label:"FF Max ADR"},{id:"IOS_NORMAL",label:"FF Thường iOS"},{id:"IOS_MAX",label:"FF Max iOS"}],mu=[{id:"RED",label:"Thần thoại",color:"#ef4444"},{id:"ORANGE",label:"Tinh hoa",color:"#f97316"},{id:"PURPLE",label:"Siêu hiếm",color:"#a855f7"},{id:"BLUE",label:"Hiếm",color:"#3b82f6"},{id:"GREEN",label:"Cơ bản",color:"#22c55e"},{id:"GRAY",label:"Thường",color:"#9ca3af"}],Pg={id:"UNKNOWN",label:"Chưa xác định",color:"#64748b"},Ng=[...mu,Pg];function Ua(r){return Ng.find(n=>n.id===r)||Pg}function lp(r){const n=mu.findIndex(o=>o.id===r);return n<0?0:mu.length-n}const yu="kmz.gate",cp=r=>Ma.some(n=>n.id===r),tu=48;function up(r){return(r||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/gi,"d").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function ww(r){if(!r||r==="UNKNOWN")return"";const n=up(r),o=up(Ua(r).label),s=l=>l.some(d=>n.includes(d)||o.includes(d));return s(["than thoai","mythic","mythical"])?"fx-mythic":s(["tinh hoa","essence","elite"])?"fx-essence":""}function bw(){try{const r=localStorage.getItem(yu);return r?JSON.parse(r):null}catch{return null}}function es(r){try{r?localStorage.setItem(yu,JSON.stringify(r)):localStorage.removeItem(yu)}catch{}}const xu="ubsb.activeJob";function _w(){try{return sessionStorage.getItem(xu)}catch{return null}}function Ui(r){try{r?sessionStorage.setItem(xu,r):sessionStorage.removeItem(xu)}catch{}}function Sw(r){return r<60?"dưới 1 phút":`khoảng ${Math.ceil(r/60)} phút`}function dp(r){if(r<60)return"dưới 1 phút";const n=Math.ceil(r/60),o=Math.floor(n/60),s=n%60;return o===0?`${s} phút`:s===0?`${o} giờ`:`${o} giờ ${s} phút`}function Ia(r,n){var o,s;return((s=(o=r.response)==null?void 0:o.data)==null?void 0:s.message)||n}const kw=["Chọn nhân vật để bắt đầu tùy chỉnh.","Chọn trang phục cho từng vị trí. Bạn có thể thay đổi lựa chọn bất cứ lúc nào.","Chọn phiên bản phù hợp với thiết bị của bạn.","Giữ trang này mở trong giây lát. Tệp sẽ được chuẩn bị và tải xuống khi hoàn tất."],fp=["Chọn nhân vật","Phối trang phục","Chọn phiên bản","Hoàn tất"],Ew={working:"Đang chuẩn bị tệp của bạn…"},Cw=`
  /* Chặn style mặc định của template (Vite...) làm trang bị lệch/co hẹp */
  html:has(.user-page),
  body:has(.user-page) {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    display: block;
    overflow-x: clip;
  }

  #root:has(.user-page) {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
    display: block;
    text-align: left;
  }

  .user-page {
    --bg: #07090f;
    --panel: rgba(15, 18, 28, 0.82);
    --panel-strong: rgba(18, 22, 34, 0.96);
    --line: rgba(255,255,255,.085);
    --line-strong: rgba(255,255,255,.14);
    --text: #f4f7fb;
    --muted: #8e98aa;
    --muted-2: #657086;
    --accent: #8b5cf6;
    --accent-2: #5b8cff;
    --success: #31d49b;
    --header-h: 64px;
    --pad: 24px;
    min-height: 100vh;
    min-height: 100dvh;
    overflow-x: clip;
    -webkit-text-size-adjust: 100%;
    background:
      radial-gradient(circle at 12% 15%, rgba(139,92,246,.12), transparent 28%),
      radial-gradient(circle at 88% 12%, rgba(91,140,255,.10), transparent 27%),
      radial-gradient(circle at 52% 100%, rgba(49,212,155,.055), transparent 28%),
      var(--bg);
    color: var(--text);
    -webkit-tap-highlight-color: transparent;
  }

  .user-page * { box-sizing: border-box; }
  .user-page button,
  .user-page input,
  .user-page select { font: inherit; touch-action: manipulation; }

  .user-bg-wrap {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .user-bg {
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    filter: blur(90px);
    opacity: .22;
    z-index: 0;
  }

  .user-bg-one {
    width: 280px;
    height: 280px;
    left: -100px;
    top: 180px;
    background: rgba(139,92,246,.28);
  }

  .user-bg-two {
    width: 320px;
    height: 320px;
    right: -120px;
    top: 42%;
    background: rgba(91,140,255,.20);
  }

  .user-header {
    position: sticky;
    top: 0;
    z-index: 20;
    border-bottom: 1px solid rgba(255,255,255,.07);
    background: rgba(7,9,15,.82);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .user-header-inner {
    width: min(1480px, calc(100% - 32px));
    margin: 0 auto;
    height: var(--header-h);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .brand {
    appearance: none;
    border: 0;
    background: transparent;
    padding: 0;
    color: var(--text);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-align: left;
  }

  .brand-mark {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,.10);
    background: linear-gradient(145deg, rgba(139,92,246,.28), rgba(91,140,255,.16));
    box-shadow: inset 0 1px 0 rgba(255,255,255,.11), 0 12px 32px rgba(0,0,0,.20);
    font-weight: 900;
    letter-spacing: -.04em;
  }

  .brand strong {
    display: block;
    font-size: 13px;
    letter-spacing: .14em;
  }

  .brand small {
    display: block;
    margin-top: 1px;
    color: var(--muted-2);
    font-size: 9px;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .header-right { display: flex; align-items: center; gap: 8px; }

  .quota-chip {
    padding: 6px 12px;
    border: 1px solid rgba(139,92,246,.30);
    border-radius: 999px;
    background: rgba(139,92,246,.10);
    color: #d7ccff;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
  }

  .quota-chip.is-low {
    border-color: rgba(251,191,36,.35);
    background: rgba(251,191,36,.09);
    color: #fcd34d;
  }

  .quota-chip.is-out {
    border-color: rgba(248,113,113,.35);
    background: rgba(248,113,113,.09);
    color: #ffadad;
  }

  .quota-panel {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
    padding: 12px 14px;
    border: 1px solid rgba(139,92,246,.26);
    border-radius: 14px;
    background: rgba(139,92,246,.07);
  }

  .quota-panel.is-low { border-color: rgba(251,191,36,.32); background: rgba(251,191,36,.06); }
  .quota-panel.is-out { border-color: rgba(248,113,113,.30); background: rgba(248,113,113,.06); }

  .quota-dots { display: flex; gap: 6px; flex: none; }

  .quota-dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,.22);
  }

  .quota-dots span.on {
    border-color: transparent;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    box-shadow: 0 0 12px rgba(139,92,246,.5);
  }

  .quota-text { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
  .quota-text strong { font-size: 13px; color: #e9edf7; }
  .quota-text span { font-size: 11px; line-height: 1.5; color: #9aa6bb; }

  .quota-note {
    width: min(560px, 100%);
    margin-top: 10px;
    color: #8e9ab0;
    font-size: 11px;
  }

  .header-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border: 1px solid rgba(255,255,255,.075);
    border-radius: 999px;
    background: rgba(255,255,255,.025);
    color: #c9d1df;
    font-size: 11px;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--success);
    box-shadow: 0 0 16px rgba(49,212,155,.75);
    animation: pulse-dot 1.8s ease-in-out infinite;
  }

  .user-container {
    position: relative;
    z-index: 1;
    width: min(1480px, calc(100% - 32px));
    margin: 0 auto;
    padding: 20px 0 38px;
  }

  .wizard-card {
    overflow: hidden;
    overflow: clip;
    border: 1px solid var(--line);
    border-radius: 22px;
    background:
      linear-gradient(180deg, rgba(255,255,255,.025), transparent 16%),
      var(--panel);
    box-shadow:
      0 30px 90px rgba(0,0,0,.34),
      inset 0 1px 0 rgba(255,255,255,.04);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  .wizard-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    padding: 22px 24px 18px;
    border-bottom: 1px solid var(--line);
  }

  .wizard-kicker,
  .finish-kicker {
    display: inline-block;
    margin-bottom: 4px;
    color: #7f8aa0;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .18em;
    text-transform: uppercase;
  }

  .wizard-head h2 {
    margin: 0;
    font-size: clamp(20px, 2.1vw, 28px);
    line-height: 1.1;
    letter-spacing: -.025em;
  }

  .step-count {
    display: flex;
    align-items: baseline;
    gap: 4px;
    white-space: nowrap;
  }

  .step-count strong {
    font-size: 22px;
    font-weight: 850;
    letter-spacing: -.04em;
  }

  .step-count span {
    color: var(--muted-2);
    font-size: 11px;
    letter-spacing: .08em;
  }

  .progress-steps {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,.012);
  }

  .progress-step {
    position: relative;
    min-width: 0;
    padding: 14px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--muted-2);
  }

  .progress-step + .progress-step {
    border-left: 1px solid rgba(255,255,255,.045);
  }

  .progress-step::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: transparent;
  }

  .progress-step.active {
    color: var(--text);
    background: linear-gradient(90deg, rgba(139,92,246,.07), transparent);
  }

  .progress-step.active::after {
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    box-shadow: 0 0 24px rgba(139,92,246,.40);
  }

  .progress-step.complete { color: #dce4f2; }

  .progress-step > span {
    flex: 0 0 auto;
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    border-radius: 99px;
    border: 1px solid rgba(255,255,255,.08);
    background: rgba(255,255,255,.025);
    font-size: 11px;
    font-weight: 800;
  }

  .progress-step.active > span {
    border-color: rgba(139,92,246,.46);
    background: rgba(139,92,246,.14);
    color: #d9c7ff;
  }

  .progress-step.complete > span {
    border-color: rgba(49,212,155,.25);
    background: rgba(49,212,155,.10);
    color: #87f0c9;
  }

  .progress-step label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 700;
  }

  .wizard-help {
    margin: 0;
    padding: 12px 24px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.5;
    border-bottom: 1px solid var(--line);
    background: rgba(0,0,0,0.1);
  }

  .wizard-content {
    padding: var(--pad);
  }

  /* DRESSING WORKSPACE LAYOUT 2 CỘT */
  .dressing-workspace {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 20px;
    align-items: start;
  }

  .dressing-sidebar {
    position: sticky;
    top: calc(var(--header-h) + 16px);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .slot-nav-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: rgba(255,255,255,.018);
  }

  .slot-nav-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    min-height: 42px;
    border: 1px solid transparent;
    border-radius: 11px;
    background: rgba(255,255,255,.02);
    color: #8f99ab;
    cursor: pointer;
    transition: all .18s ease;
  }

  .slot-nav-item:active {
    transform: scale(0.98);
  }

  @media (hover: hover) {
    .slot-nav-item:hover:not(.locked) {
      color: #dfe5f0;
      border-color: rgba(139,92,246,.28);
      background: rgba(139,92,246,.05);
    }
  }

  .slot-nav-item.active {
    border-color: rgba(139,92,246,.46);
    background: linear-gradient(135deg, rgba(139,92,246,.18), rgba(91,140,255,.08));
    color: #eee9ff;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.05);
  }

  .slot-nav-item.locked {
    opacity: .38;
    cursor: not-allowed;
  }

  .slot-nav-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 700;
  }

  .slot-nav-status {
    font-size: 11px;
    font-weight: 800;
  }

  .slot-nav-status.picked { color: #8cebc8; }
  .slot-nav-status.unpicked { color: #f87171; opacity: .7; }

  .filter-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 180px;
    gap: 12px;
    margin-bottom: 20px;
  }

  .search-box {
    min-width: 0;
    height: 46px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 14px;
    border: 1px solid var(--line-strong);
    border-radius: 13px;
    background: rgba(255,255,255,.025);
    transition: border-color .2s ease, box-shadow .2s ease;
  }

  .search-box:focus-within {
    border-color: rgba(139,92,246,.45);
    background: rgba(139,92,246,.04);
    box-shadow: 0 0 0 3px rgba(139,92,246,.12);
  }

  .search-box > span {
    color: #8590a5;
    font-size: 18px;
  }

  .search-box input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--text);
    font-size: 14px;
  }

  .search-box input::placeholder { color: #626c80; }

  .filter-select {
    width: 100%;
    min-width: 0;
    height: 46px;
    border: 1px solid var(--line-strong);
    border-radius: 13px;
    padding: 0 12px;
    outline: 0;
    background: rgba(255,255,255,.025);
    color: #cbd4e3;
    cursor: pointer;
    font-size: 13px;
  }

  .section-title {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  .section-title h3 {
    margin: 0;
    font-size: 15px;
    letter-spacing: -.01em;
  }

  .section-title span {
    display: block;
    margin-top: 3px;
    color: var(--muted-2);
    font-size: 11px;
  }

  .character-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
  }

  .character-card {
    /* Cột dọc, nội dung bám trên: thẻ trong cùng hàng cao bằng nhau nhưng ảnh không bị đẩy xuống giữa (nút mặc định căn giữa dọc). */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    min-width: 0;
    overflow: hidden;
    padding: 0;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(255,255,255,.028), rgba(255,255,255,.012));
    color: var(--text);
    text-align: left;
    cursor: pointer;
    transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
  }

  .character-card:active {
    transform: scale(0.97);
  }

  @media (hover: hover) {
    .character-card:hover {
      border-color: rgba(139,92,246,.34);
      background: linear-gradient(180deg, rgba(139,92,246,.08), rgba(255,255,255,.02));
    }
  }

  .character-image {
    position: relative;
    aspect-ratio: 1 / 1.1;
    overflow: hidden;
    background:
      linear-gradient(145deg, rgba(139,92,246,.09), rgba(91,140,255,.04)),
      #10131d;
  }

  .character-image::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(5,7,12,.55));
    pointer-events: none;
  }

  .character-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .35s ease;
  }

  .select-pill {
    position: absolute;
    right: 8px;
    bottom: 8px;
    z-index: 2;
    padding: 4px 8px;
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 999px;
    background: rgba(7,9,15,.75);
    backdrop-filter: blur(8px);
    color: #d8def0;
    font-size: 10px;
    font-weight: 750;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    color: #8a95aa;
    font-weight: 900;
    letter-spacing: .1em;
  }

  .character-info { flex: 1 1 auto; padding: 11px 12px 12px; }

  .character-info strong {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
  }

  .character-info span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 4px;
    color: var(--muted-2);
    font-size: 10px;
    line-height: 1.35;
  }

  .empty-state {
    grid-column: 1 / -1;
    min-height: 200px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 6px;
    padding: 24px;
    border: 1px dashed rgba(255,255,255,.10);
    border-radius: 16px;
    background: rgba(255,255,255,.018);
    text-align: center;
  }

  .empty-state > span { color: #808ba1; font-size: 24px; }
  .empty-state strong { font-size: 13px; }
  .empty-state p { margin: 0; color: var(--muted-2); font-size: 11px; }

  .selected-character {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255,255,255,.025);
  }

  .selected-avatar {
    width: 40px;
    height: 40px;
    overflow: hidden;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: rgba(255,255,255,.05);
  }

  .selected-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .selected-character span,
  .selected-character strong {
    display: block;
  }

  .selected-character span {
    color: var(--muted-2);
    font-size: 10px;
  }

  .selected-character strong {
    margin-top: 1px;
    font-size: 12px;
  }

  .text-button {
    border: 0;
    background: transparent;
    color: #a995ff;
    font-size: 11px;
    font-weight: 750;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 6px;
  }

  .slot-note {
    margin: 0 0 12px;
    padding: 8px 12px;
    border-left: 2px solid rgba(139,92,246,.46);
    border-radius: 0 8px 8px 0;
    background: rgba(139,92,246,.045);
    color: #919bae;
    font-size: 11px;
  }

  .slot-locked-notice {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: 12px;
    padding: 20px;
    border: 1px dashed rgba(255,255,255,.10);
    border-radius: 16px;
    background: rgba(255,255,255,.018);
  }

  .slot-locked-notice > span { font-size: 22px; }
  .slot-locked-notice strong { align-self: center; font-size: 13px; }
  .slot-locked-notice p { grid-column: 2; margin: 3px 0 0; color: var(--muted-2); font-size: 11px; line-height: 1.5; }

  .item-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    max-height: 480px;
    overflow-y: auto;
    padding-right: 4px;
    margin-bottom: 16px;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  .item-grid::-webkit-scrollbar {
    width: 4px;
  }

  .item-grid::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.35);
    border-radius: 999px;
  }

  .item-sentinel {
    grid-column: 1 / -1;
    padding: 10px 0 4px;
    text-align: center;
    color: var(--muted-2);
    font-size: 11px;
  }

  .item-card {
    min-width: 0;
    overflow: hidden;
    padding: 0;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255,255,255,.018);
    color: var(--text);
    text-align: left;
    cursor: pointer;
    transition: transform .18s ease, border-color .18s ease;
    /* <button> mặc định canh GIỮA nội dung theo chiều dọc; khi hàng lưới cao hơn nội dung
       (tên 1 dòng cạnh tên 2 dòng) sẽ hở một khoảng đen phía trên ảnh. Dùng flex để ảnh luôn dính mép trên. */
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    /* Thẻ nằm ngoài màn hình không bị tính layout / vẽ / giải mã ảnh; danh sách dài (hàng trăm đồ) cuộn vẫn nhẹ. */
    content-visibility: auto;
    contain-intrinsic-size: auto 130px;
  }

  .item-card:active {
    transform: scale(0.96);
  }

  /* Đồ không chọn được (Áo có Body nhưng nhân vật không có ảnh Body): mờ đi, dấu X đỏ giữa ảnh, không phản hồi khi bấm. */
  .item-card.blocked {
    cursor: not-allowed;
    filter: grayscale(.85);
    opacity: .5;
  }
  .item-card.blocked:active { transform: none; }
  .head-notice {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    padding: 10px 12px;
    border: 1px solid rgba(244,63,94,.30);
    border-radius: 12px;
    background: rgba(244,63,94,.07);
  }

  .head-notice > span { font-size: 18px; flex: none; }

  .head-notice p {
    flex: 1;
    min-width: 0;
    margin: 0;
    color: #f3c6cf;
    font-size: 12px;
    line-height: 1.5;
  }

  .head-notice strong { color: #fff; }

  .head-notice button {
    flex: none;
    min-height: 34px;
    padding: 0 12px;
    border: 1px solid rgba(244,63,94,.45);
    border-radius: 10px;
    background: rgba(244,63,94,.14);
    color: #ffd5dc;
    font-size: 11px;
    font-weight: 800;
    cursor: pointer;
  }

  .head-notice button:active { transform: scale(.97); }

  @media (max-width: 480px) {
    .head-notice { flex-wrap: wrap; }
    .head-notice button { width: 100%; }
  }

  .item-block-x {
    position: absolute;
    inset: 0;
    z-index: 6;
    display: grid;
    place-items: center;
    color: #f87171;
    font-size: 44px;
    font-weight: 900;
    line-height: 1;
    text-shadow: 0 2px 10px rgba(0,0,0,.8);
    pointer-events: none;
  }

  /* Trạng thái ĐÃ CHỌN: vòng viền dày + glow + huy hiệu ✓ + thanh tên đổi màu.
     Vòng viền vẽ bằng ::after (không dùng box-shadow của thẻ) nên không bị hiệu ứng
     glow của thẻ Tinh hoa / Thần thoại ghi đè. */
  .item-card.selected {
    --sel: var(--accent);
    position: relative;
    border-color: var(--sel);
    background: linear-gradient(180deg, rgba(139,92,246,.20), rgba(91,140,255,.08));
    filter: drop-shadow(0 0 7px color-mix(in srgb, var(--sel) 70%, transparent));
  }

  .item-card.has-tier.selected { --sel: var(--tier); }

  .item-card.selected::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 4;
    border-radius: inherit;
    pointer-events: none;
    box-shadow:
      inset 0 0 0 3px var(--sel),
      inset 0 0 0 4px rgba(255,255,255,.88),
      inset 0 0 20px color-mix(in srgb, var(--sel) 45%, transparent);
  }

  .item-card.selected > strong {
    background: color-mix(in srgb, var(--sel) 30%, transparent);
    color: #fff;
    font-weight: 800;
  }

  .item-image {
    position: relative;
    flex: none;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: #10131b;
  }

  .item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .item-image > span {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    color: #687387;
    font-size: 9px;
    font-weight: 800;
  }

  .item-image i {
    position: absolute;
    left: 6px;
    top: 6px;
    z-index: 5;
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--sel, var(--accent));
    border: 2px solid #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,.5);
    color: white;
    font-size: 12px;
    font-style: normal;
    font-weight: 900;
    animation: sel-badge-pop .28s cubic-bezier(.34,1.56,.64,1) both;
  }

  @keyframes sel-badge-pop {
    from { transform: scale(.3); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  .item-card > strong {
    display: block;
    flex: 1 1 auto;
    padding: 8px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
  }

  .error-box {
    margin-top: 12px;
    padding: 10px 12px;
    border: 1px solid rgba(248,113,113,.18);
    border-radius: 10px;
    background: rgba(248,113,113,.055);
    color: #ffadad;
    font-size: 11px;
  }

  .action-bar {
    position: sticky;
    bottom: max(12px, env(safe-area-inset-bottom));
    z-index: 10;
    margin-top: 16px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 1px solid rgba(139, 92, 246, 0.25);
    border-radius: 16px;
    background: rgba(10, 13, 22, 0.94);
    box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .action-bar span,
  .action-bar strong { display: block; }

  .action-bar span {
    color: var(--muted-2);
    font-size: 10px;
  }

  .action-bar strong {
    margin-top: 1px;
    font-size: 12px;
  }

  .primary-button,
  .secondary-button,
  .download-button {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 12px;
    padding: 0 16px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    transition: transform .15s ease, opacity .15s ease;
  }

  .primary-button:active,
  .secondary-button:active,
  .download-button:active {
    transform: scale(0.97);
  }

  .primary-button,
  .download-button {
    border: 1px solid rgba(139,92,246,.40);
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: white;
    box-shadow: 0 8px 24px rgba(91,140,255,.18);
  }

  .primary-button:disabled {
    opacity: .38;
    cursor: not-allowed;
    box-shadow: none;
  }

  .secondary-button {
    border: 1px solid var(--line-strong);
    background: rgba(255,255,255,.025);
    color: #b9c2d2;
  }

  /* MODAL XEM LẠI TỔNG HỢP DANH SÁCH TRANG PHỤC */
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    padding: 16px;
    background: rgba(4, 6, 12, 0.82);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    animation: modal-fade-in .2s ease;
  }

  .modal-card {
    width: min(500px, 100%);
    max-height: 85vh;
    max-height: 85dvh;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--line-strong);
    border-radius: 20px;
    background: rgba(15, 18, 28, 0.96);
    box-shadow: 0 30px 80px rgba(0,0,0,0.6);
    overflow: hidden;
  }

  .modal-head {
    padding: 16px 20px;
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-head h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 800;
  }

  .modal-close-btn {
    border: 0;
    background: transparent;
    color: var(--muted-2);
    font-size: 20px;
    cursor: pointer;
    padding: 6px 10px;
  }

  .modal-body {
    padding: 16px 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    -webkit-overflow-scrolling: touch;
  }

  .summary-slot-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: rgba(255,255,255,0.02);
    cursor: pointer;
  }

  .summary-slot-item:active {
    transform: scale(0.98);
  }

  .summary-slot-item.unselected {
    border-style: dashed;
    border-color: rgba(248, 113, 113, 0.35);
    background: rgba(248, 113, 113, 0.04);
  }

  .summary-slot-item.selected {
    border-color: rgba(139, 92, 246, 0.35);
    background: rgba(139, 92, 246, 0.06);
  }

  .summary-icon-box {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background: #10131b;
    border: 1px solid rgba(255,255,255,0.08);
    display: grid;
    place-items: center;
  }

  .summary-icon-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .summary-icon-box .unselected-icon {
    color: #f87171;
    font-size: 15px;
    font-weight: 800;
  }

  .summary-info {
    flex: 1;
    min-width: 0;
  }

  .summary-info .slot-tag {
    font-size: 10px;
    color: var(--muted-2);
    text-transform: uppercase;
    letter-spacing: .06em;
    font-weight: 700;
  }

  .summary-info .item-name {
    font-size: 12px;
    font-weight: 700;
    margin-top: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .summary-info .unselected-label {
    color: #f87171;
    font-size: 12px;
    font-weight: 700;
    margin-top: 1px;
  }

  .summary-badge {
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
  }

  .summary-badge.ok {
    background: rgba(49,212,155,0.12);
    color: #8cebc8;
  }

  .summary-badge.warn {
    background: rgba(248,113,113,0.12);
    color: #f87171;
  }

  .modal-foot {
    padding: 14px 20px;
    border-top: 1px solid var(--line);
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    background: rgba(10, 13, 22, 0.8);
  }

  .version-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .version-card {
    width: 100%;
    min-width: 0;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255,255,255,.02);
    color: var(--text);
    text-align: left;
    cursor: pointer;
    transition: transform .18s ease;
  }

  .version-card.ready:active {
    transform: scale(0.98);
  }

  .version-card.disabled {
    opacity: .42;
    cursor: not-allowed;
  }

  .version-icon {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: rgba(139,92,246,.10);
    color: #cdbdff;
    font-size: 16px;
  }

  .version-card strong {
    display: block;
    font-size: 13px;
  }

  .version-card span {
    display: block;
    margin-top: 2px;
    color: var(--muted-2);
    font-size: 10px;
  }

  .version-card > b {
    color: #d3dbea;
    font-size: 15px;
  }

  /* CỔNG LẤY MÃ (Link4m) Ở BƯỚC CHỌN PHIÊN BẢN */
  .gate-panel {
    margin-bottom: 14px;
    padding: 14px;
    display: grid;
    gap: 12px;
    border: 1px solid rgba(139,92,246,.28);
    border-radius: 14px;
    background: rgba(139,92,246,.06);
  }

  .gate-panel.verified {
    border-color: rgba(49,212,155,.30);
    background: rgba(49,212,155,.06);
  }

  .gate-head strong,
  .gate-done strong {
    display: block;
    font-size: 13px;
  }

  .gate-head span,
  .gate-done > div > span {
    display: block;
    margin-top: 3px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.5;
  }

  .gate-done {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .gate-badge {
    flex: none;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: rgba(49,212,155,.16);
    color: var(--success);
    font-weight: 800;
  }

  .gate-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .gate-actions > * { flex: 1 1 150px; }
  .gate-note {
    font-size: 12.5px;
    opacity: 0.75;
    margin: -2px 0 2px;
  }

  .gate-steps {
    margin: 0;
    padding: 10px 12px 10px 30px;
    display: grid;
    gap: 6px;
    font-size: 12.5px;
    line-height: 1.55;
    border: 1px solid rgba(251,191,36,.28);
    border-radius: 12px;
    background: rgba(251,191,36,.06);
  }

  .gate-steps b { color: #fff; }
  .gate-steps code {
    padding: 1px 6px;
    border-radius: 5px;
    background: rgba(255,255,255,.08);
    font-size: 12px;
  }

  .gate-input-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 10px;
  }

  .gate-input-row .search-box input {
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .gate-input-row .search-box input::placeholder {
    letter-spacing: 0;
    text-transform: none;
  }

  .gate-panel .error-box { margin-top: 0; }

  @media (max-width: 480px) {
    .gate-input-row { grid-template-columns: minmax(0, 1fr); }
  }

  .finish-content {
    min-height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .finish-icon {
    position: relative;
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    margin-bottom: 14px;
    border: 1px solid rgba(139,92,246,.28);
    border-radius: 20px;
    background: linear-gradient(145deg, rgba(139,92,246,.15), rgba(91,140,255,.08));
    color: #ddd1ff;
    font-size: 26px;
    animation: float-soft 3s ease-in-out infinite;
  }

  .finish-icon.done {
    border-color: rgba(49,212,155,.27);
    background: rgba(49,212,155,.09);
    color: #8cebc8;
  }

  .finish-content h3 {
    max-width: 560px;
    margin: 0;
    font-size: clamp(20px, 3vw, 30px);
    letter-spacing: -.03em;
  }

  .finish-content p {
    max-width: 560px;
    margin: 8px auto 0;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.6;
  }

  .progress-track {
    width: min(560px, 100%);
    height: 8px;
    overflow: hidden;
    margin-top: 24px;
    border-radius: 999px;
    background: rgba(255,255,255,.065);
  }

  .progress-track > div {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    box-shadow: 0 0 20px rgba(139,92,246,.45);
    transition: width .35s ease;
  }

  .progress-meta {
    width: min(560px, 100%);
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: var(--muted-2);
    font-size: 10px;
  }

  .progress-meta strong { color: #d7deeb; }

  .queue-card {
    width: min(560px, 100%);
    margin-top: 18px;
    padding: 14px 16px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 12px;
    border: 1px solid rgba(139,92,246,.26);
    border-radius: 14px;
    background: linear-gradient(145deg, rgba(139,92,246,.12), rgba(91,140,255,.06));
  }

  .queue-stat { display: flex; flex-direction: column; gap: 4px; min-width: 0; }

  .queue-stat span {
    color: #8e9ab0;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .queue-stat strong { color: #e9edf7; font-size: 22px; font-weight: 800; letter-spacing: -.02em; }

  .queue-pop { animation: queue-pop .45s ease; }

  @keyframes queue-pop {
    0% { transform: scale(1.25); color: #8cebc8; }
    100% { transform: scale(1); }
  }

  .progress-track.is-waiting { position: relative; }

  .progress-track.is-waiting > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 36%;
    animation: queue-slide 1.6s ease-in-out infinite;
  }

  @keyframes queue-slide {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(280%); }
  }

  .queue-note {
    width: min(560px, 100%);
    margin-top: 10px;
    color: #8e9ab0;
    font-size: 11px;
    line-height: 1.55;
  }

  @media (prefers-reduced-motion: reduce) {
    .queue-pop, .progress-track.is-waiting > div { animation: none; }
  }

  .optimize-box {
    width: min(560px, 100%);
    margin-top: 16px;
    padding: 12px 14px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    border-radius: 12px;
    border: 1px solid transparent;
    text-align: left;
  }

  .optimize-box.is-optimized {
    border-color: rgba(52,211,153,.28);
    background: rgba(52,211,153,.07);
  }

  .optimize-box.is-heavy {
    border-color: rgba(251,191,36,.30);
    background: rgba(251,191,36,.07);
  }

  .optimize-icon { font-size: 22px; line-height: 1.1; flex: none; }

  .optimize-text { display: flex; flex-direction: column; gap: 4px; min-width: 0; }

  .optimize-text strong { font-size: 13px; font-weight: 800; }

  .optimize-box.is-optimized .optimize-text strong { color: #6ee7b7; }
  .optimize-box.is-heavy .optimize-text strong { color: #fcd34d; }

  .optimize-text span { font-size: 11px; line-height: 1.5; color: #b6c0d2; }

  .download-button {
    margin-top: 20px;
    min-width: 180px;
  }

  .finish-content .secondary-button { margin-top: 10px; }

  .user-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 20px 0 4px;
    color: #4f596b;
    font-size: 9px;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  @keyframes pulse-dot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(.76); opacity: .72; }
  }

  @keyframes float-soft {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes modal-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .item-search { margin-bottom: 0; height: 44px; flex: 1; }

  .item-toolbar {
    display: flex;
    align-items: stretch;
    gap: 8px;
    margin-bottom: 12px;
  }

  .filter-button {
    flex: none;
    height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 0 16px;
    border: 1px solid var(--line-strong);
    border-radius: 13px;
    background: rgba(255,255,255,.025);
    color: var(--text);
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    transition: border-color .2s ease, background .2s ease;
  }

  .filter-button:hover { border-color: rgba(139,92,246,.45); }

  .filter-button.active {
    border-color: rgba(139,92,246,.55);
    background: rgba(139,92,246,.10);
  }

  .filter-button b {
    min-width: 18px;
    height: 18px;
    display: inline-grid;
    place-items: center;
    padding: 0 5px;
    border-radius: 999px;
    background: var(--accent);
    color: #fff;
    font-size: 10px;
  }

  .tier-panel {
    margin-bottom: 12px;
    padding: 12px;
    border: 1px solid var(--line-strong);
    border-radius: 14px;
    background: rgba(255,255,255,.022);
  }

  .tier-panel-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 12px;
  }

  .tier-panel-head span { color: var(--muted-2); font-size: 11px; }

  .tier-chips { display: flex; flex-wrap: wrap; gap: 8px; }

  .tier-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 11px;
    border: 1px solid var(--line-strong);
    border-radius: 999px;
    background: transparent;
    color: #aab3c5;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: border-color .15s ease, background .15s ease, color .15s ease;
  }

  .tier-chip i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--tier);
  }

  .tier-chip em {
    font-style: normal;
    font-size: 10px;
    opacity: .6;
  }

  .tier-chip.on {
    border-color: var(--tier);
    background: color-mix(in srgb, var(--tier) 16%, transparent);
    color: #fff;
  }

  .tier-panel-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 12px;
    padding-top: 10px;
    border-top: 1px solid var(--line);
  }

  .tier-sort {
    display: inline-flex;
    border: 1px solid var(--line-strong);
    border-radius: 10px;
    overflow: hidden;
  }

  .tier-sort button {
    padding: 6px 12px;
    border: 0;
    background: transparent;
    color: #8f99ad;
    font-size: 11px;
    font-weight: 800;
    cursor: pointer;
  }

  .tier-sort button.on { background: rgba(139,92,246,.22); color: #fff; }

  .tier-reset {
    border: 0;
    background: transparent;
    color: #a78bfa;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
  }

  .tier-reset:disabled { opacity: .35; cursor: default; }

  .item-card.has-tier { border-color: color-mix(in srgb, var(--tier) 55%, transparent); }
  .item-card.has-tier.selected { border-color: var(--tier); }

  .tier-tag {
    position: absolute;
    right: 6px;
    top: 6px;
    z-index: 2;
    padding: 2px 7px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--tier) 82%, #000);
    box-shadow: 0 1px 4px rgba(0,0,0,.45);
    color: #fff;
    font-size: 9px;
    font-weight: 900;
    text-decoration: none;
    line-height: 1.4;
  }

  /* ---------- Hiệu ứng thẻ Tinh hoa / Thần thoại ---------- */
  .item-card.fx-essence,
  .item-card.fx-mythic { position: relative; }

  .item-card.fx-essence .item-image::after,
  .item-card.fx-mythic .item-image::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(115deg, transparent 38%, rgba(255,255,255,.38) 50%, transparent 62%);
    transform: translateX(-120%);
    animation: tier-shine 3.4s ease-in-out infinite;
  }

  /* Tinh hoa: viền phát sáng nhịp thở + vệt sáng quét + sao nhỏ trên tag */
  .item-card.fx-essence {
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--tier) 65%, transparent), 0 0 12px -1px color-mix(in srgb, var(--tier) 55%, transparent);
  }
  /* Animate box-shadow buộc vẽ lại thẻ mỗi khung hình -> chỉ bật trên máy có chuột; điện thoại / máy cảm ứng dùng glow tĩnh. */
  @media (hover: hover) and (pointer: fine) {
    .item-card.fx-essence { animation: tier-glow 2.8s ease-in-out infinite; }
  }

  .item-card.fx-essence .tier-tag {
    background: linear-gradient(135deg, color-mix(in srgb, var(--tier) 90%, #fff 10%), color-mix(in srgb, var(--tier) 70%, #000));
    text-shadow: 0 0 6px color-mix(in srgb, var(--tier) 80%, #fff);
  }

  .item-card.fx-essence .tier-tag::before { content: "✦ "; }

  /* Thần thoại: glow đổi sắc + lấp lánh + tag ánh kim chuyển động */
  .item-card.fx-mythic {
    border-color: transparent;
    box-shadow: 0 0 0 1px #ff7ad9, 0 0 14px 0 var(--tier), 0 0 22px -6px #ffd36b;
  }
  @media (hover: hover) and (pointer: fine) {
    .item-card.fx-mythic { animation: tier-glow-mythic 3.2s ease-in-out infinite; }
  }

  .item-card.fx-mythic.selected { border-color: var(--tier); }

  .item-card.fx-mythic .item-image::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(circle at 18% 24%, rgba(255,255,255,.95) 0 1.4px, transparent 2.6px),
      radial-gradient(circle at 80% 60%, rgba(255,240,200,.95) 0 1.4px, transparent 2.6px),
      radial-gradient(circle at 46% 84%, rgba(255,255,255,.85) 0 1px, transparent 2.2px),
      radial-gradient(circle at 62% 30%, rgba(255,214,250,.9) 0 1px, transparent 2.2px);
    animation: tier-twinkle 2.4s ease-in-out infinite;
  }

  .item-card.fx-mythic .tier-tag {
    background: linear-gradient(90deg, var(--tier), #ff7ad9, #ffd36b, #7ad7ff, var(--tier));
    background-size: 250% 100%;
    color: #1a1026;
    text-shadow: 0 0 4px rgba(255,255,255,.55);
    animation: tier-tag-shimmer 3.6s linear infinite;
  }

  .item-card.fx-mythic .tier-tag::before { content: "★ "; }

  @keyframes tier-shine {
    0%, 55% { transform: translateX(-120%); }
    100% { transform: translateX(120%); }
  }

  @keyframes tier-glow {
    0%, 100% { box-shadow: 0 0 0 1px color-mix(in srgb, var(--tier) 40%, transparent), 0 0 8px -2px color-mix(in srgb, var(--tier) 45%, transparent); }
    50% { box-shadow: 0 0 0 1px color-mix(in srgb, var(--tier) 80%, transparent), 0 0 18px 0 color-mix(in srgb, var(--tier) 70%, transparent); }
  }

  @keyframes tier-glow-mythic {
    0%, 100% { box-shadow: 0 0 0 1px var(--tier), 0 0 12px -1px var(--tier), 0 0 22px -6px #ff7ad9; }
    33% { box-shadow: 0 0 0 1px #ff7ad9, 0 0 16px 0 #ff7ad9, 0 0 24px -6px #ffd36b; }
    66% { box-shadow: 0 0 0 1px #ffd36b, 0 0 16px 0 #ffd36b, 0 0 24px -6px #7ad7ff; }
  }

  @keyframes tier-twinkle {
    0%, 100% { opacity: .15; transform: scale(.96); }
    50% { opacity: 1; transform: scale(1.03); }
  }

  @keyframes tier-tag-shimmer {
    from { background-position: 0% 0; }
    to { background-position: 250% 0; }
  }

  .modal-sub {
    display: block;
    margin-top: 2px;
    color: var(--muted-2);
    font-size: 11px;
  }

  .modal-grab { display: none; }

  @keyframes modal-slide-up {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  /* ===== NHÂN VẬT CÓ VFX (phong cách lửa VIP) =====
     Tối ưu máy yếu: phần chuyển động CHỈ dùng transform / opacity (chạy trên GPU, không vẽ lại),
     không animate box-shadow / filter / background-position, không mix-blend-mode, số hạt ít (điện thoại còn 4).
     Viền lửa = 1 hình vuông conic-gradient XOAY bằng transform nằm sau thẻ, lớp nền che phần giữa chừa 2px làm viền.
     Thiết bị bật "giảm chuyển động": mọi animation tắt (quy tắc chung), viền lửa đứng yên, tàn lửa ẩn. */
  .character-card.has-vfx {
    position: relative;
    isolation: isolate;
    border-color: transparent;
    background: #150b07;
    box-shadow: 0 0 0 1px rgba(253,186,116,.45), 0 0 0 3px rgba(194,65,12,.18), 0 10px 26px rgba(220,38,38,.30), 0 0 34px rgba(249,115,22,.26);
  }
  .character-card.has-vfx::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: 50%;
    top: 50%;
    width: 170%;
    aspect-ratio: 1;
    /* Nền viền luôn là cam đỏ đậm liền mạch; một "sao chổi" vàng sáng có đuôi dài chạy quanh viền. */
    background: conic-gradient(
      #9a3412 0deg, #b91c1c 60deg, #c2410c 120deg, #991b1b 180deg, #c2410c 230deg,
      #ea580c 270deg, #f97316 300deg, #fb923c 325deg, #fde68a 345deg, #fffbeb 352deg, #fde68a 356deg, #9a3412 360deg);
    transform: translate(-50%, -50%) rotate(0deg);
    animation: fire-ring 3.6s linear infinite;
    will-change: transform;
    pointer-events: none;
  }
  .character-card.has-vfx::after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 2px;
    border-radius: 14px;
    background:
      radial-gradient(120% 60% at 50% 100%, rgba(249,115,22,.20), transparent 70%),
      linear-gradient(180deg, #1c0f0a, #120907);
    /* Đường sáng mảnh bên trong viền cho cảm giác viền kim loại nung đỏ. */
    box-shadow: inset 0 0 0 1px rgba(254,215,170,.22), inset 0 0 14px rgba(234,88,12,.18);
    pointer-events: none;
  }
  .character-card.has-vfx .character-image {
    /* Chừa 2px cho viền lửa. Đáy 2.4px để tổng chiều cao bằng thẻ thường: (rộng - 4px) x 1.1 + 2px + 2.4px = rộng x 1.1,
       nên tên nhân vật trong cùng hàng vẫn thẳng hàng. */
    margin: 2px 2px 2.4px;
    border-radius: 14px 14px 10px 10px;
    background:
      radial-gradient(75% 55% at 50% 100%, rgba(249,115,22,.55), transparent 70%),
      radial-gradient(60% 45% at 50% 0%, rgba(220,38,38,.35), transparent 70%),
      #1a0b06;
  }
  /* Ánh nóng quét chéo qua ảnh (transform). */
  .character-card.has-vfx .character-image::before {
    content: "";
    position: absolute;
    inset: -40% -60%;
    z-index: 3;
    background: linear-gradient(115deg, transparent 42%, rgba(254,215,170,.30) 50%, transparent 58%);
    transform: translateX(-60%);
    animation: vfx-sheen 4.2s ease-in-out infinite;
    pointer-events: none;
  }

  /* Lửa ở chân ảnh + tàn lửa bay lên (span.vfx-fire nằm trong .character-image) */
  .vfx-fire {
    position: absolute;
    inset: 0;
    z-index: 2;
    overflow: hidden;
    pointer-events: none;
  }
  .vfx-fire i {
    position: absolute;
    left: calc(10% + var(--i) * 15%);
    bottom: 12%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #fffbeb 0 25%, #fdba74 45%, rgba(239,68,68,.6) 65%, transparent 72%);
    opacity: 0;
    animation: ember-rise 2.6s ease-in infinite;
    animation-delay: calc(var(--i) * -0.45s);
    will-change: transform, opacity;
  }
  .vfx-fire i:nth-of-type(even) { width: 4px; height: 4px; animation-name: ember-rise-alt; animation-duration: 3.1s; }

  .vfx-ribbon {
    position: absolute;
    left: 8px;
    bottom: 8px;
    z-index: 4;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px 3px 6px;
    border: 1px solid rgba(254,215,170,.55);
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(127,29,29,.92), rgba(194,65,12,.92));
    color: #fff7ed;
    font-size: 10px;
    font-weight: 850;
    letter-spacing: .02em;
    pointer-events: none;
  }
  .vfx-ribbon svg { width: 11px; height: 11px; flex: none; }

  .character-card.has-vfx .character-info strong {
    background: linear-gradient(90deg, #fef3c7, #fdba74 45%, #f87171);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .character-card.has-vfx .character-info span { color: #c2856a; }

  @media (hover: hover) {
    .character-card.has-vfx:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(253,186,116,.55), 0 12px 30px rgba(220,38,38,.38), 0 0 44px rgba(249,115,22,.32);
    }
    .character-card.has-vfx:hover .character-image img { transform: scale(1.05); }
  }

  .vfx-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 7;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 9px 4px 7px;
    border: 1px solid rgba(254,240,138,.75);
    border-radius: 999px;
    background: linear-gradient(135deg, #fde047, #f97316 45%, #dc2626);
    color: #fff;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .1em;
    text-shadow: 0 1px 2px rgba(127,29,29,.8);
    box-shadow: 0 2px 10px rgba(239,68,68,.55), inset 0 1px 0 rgba(255,255,255,.45);
    pointer-events: none;
  }
  .vfx-badge svg {
    width: 11px;
    height: 11px;
    flex: none;
    transform-origin: 50% 100%;
    animation: fire-flicker 0.9s ease-in-out infinite alternate;
  }
  /* Vòng sáng lan ra từ nhãn (transform + opacity). */
  .vfx-badge::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    border: 1px solid rgba(253,186,116,.9);
    opacity: 0;
    animation: vfx-ring 2.4s ease-out infinite;
  }

  /* Điện thoại / màn nhỏ: bớt tàn lửa, quay viền chậm hơn để nhẹ máy. */
  @media (max-width: 640px) {
    .vfx-fire i:nth-of-type(n+5) { display: none; }
    .character-card.has-vfx::before { animation-duration: 6s; }
  }
  /* Nhãn "ẨN" cho mục chỉ admin thấy (đang test, chưa mở cho người dùng) */
  .hidden-tag {
    position: absolute;
    left: 6px;
    top: 6px;
    z-index: 5;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 7px;
    border-radius: 999px;
    border: 1px dashed rgba(253,224,71,.85);
    background: rgba(113,63,18,.88);
    color: #fde047;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: .06em;
    text-decoration: none;
    line-height: 1.4;
    box-shadow: 0 1px 6px rgba(0,0,0,.5);
    pointer-events: none;
  }
  .character-card.is-hidden,
  .item-card.is-hidden {
    outline: 2px dashed rgba(253,224,71,.55);
    outline-offset: -2px;
  }
  .character-card.is-hidden .character-image img,
  .item-card.is-hidden .item-image img { opacity: .82; }
  .hidden-inline {
    display: block;
    margin-top: 3px;
    font-style: normal;
    font-size: 11px;
    font-weight: 800;
    color: #fde047;
  }
  .hidden-notice {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 0 0 14px;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px dashed rgba(253,224,71,.6);
    background: rgba(113,63,18,.28);
    color: #fde68a;
    font-size: 13px;
    line-height: 1.5;
  }
  .hidden-notice b { color: #fde047; }
  .vfx-inline {
    display: block;
    margin-top: 3px;
    font-style: normal;
    font-size: 11px;
    font-weight: 800;
    color: #fdba74;
    text-shadow: 0 0 10px rgba(249,115,22,.55);
  }
  @keyframes vfx-sheen { 0%, 55% { transform: translateX(-60%); } 100% { transform: translateX(60%); } }
  @keyframes fire-ring { to { transform: translate(-50%, -50%) rotate(360deg); } }
  @keyframes fire-flicker {
    0% { transform: scale(1, 1) translateY(0); }
    50% { transform: scale(.94, 1.12) translateY(-2%); }
    100% { transform: scale(1.05, .92) translateY(1%); }
  }
  @keyframes ember-rise {
    0% { transform: translate(0, 0) scale(.6); opacity: 0; }
    12% { opacity: 1; }
    75% { opacity: .8; }
    100% { transform: translate(10px, -140px) scale(.3); opacity: 0; }
  }
  @keyframes ember-rise-alt {
    0% { transform: translate(0, 0) scale(.6); opacity: 0; }
    12% { opacity: 1; }
    75% { opacity: .7; }
    100% { transform: translate(-12px, -110px) scale(.3); opacity: 0; }
  }
  @keyframes vfx-ring {
    0% { transform: scale(1); opacity: .8; }
    100% { transform: scale(1.4, 1.75); opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .user-page *,
    .user-page *::before,
    .user-page *::after {
      animation: none !important;
      transition: none !important;
    }
  }

  /* ===== TABLET ===== */
  @media (max-width: 1180px) {
    .character-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .item-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  @media (max-width: 900px) {
    /* flex cột (không dùng grid) để thanh tab dính được và không làm giãn bề ngang */
    .dressing-workspace {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }

    .dressing-sidebar { display: contents; }
    .dressing-main { min-width: 0; }

    /* Thanh chọn mục (Tóc, Mặt nạ, Áo...): không cuộn ngang nữa, ô nào không đủ chỗ thì xuống dòng dưới để thấy hết và chọn qua lại dễ */
    /* Dính ngay dưới header khi cuộn xuống: không phải kéo lên đầu mới đổi được mục */
    .slot-nav-list {
      position: sticky;
      top: var(--header-h);
      z-index: 15;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
      margin: 0 calc(var(--pad) * -1);
      padding: 10px var(--pad);
      border: 0;
      border-bottom: 1px solid rgba(255,255,255,.06);
      border-radius: 0;
      background: rgba(9,11,18,.96);
    }

    .slot-nav-item {
      flex: 1 1 auto;
      justify-content: center;
      gap: 8px;
      min-height: 40px;
      padding: 0 14px;
      border-color: rgba(255,255,255,.08);
      border-radius: 999px;
      background: rgba(255,255,255,.035);
      white-space: nowrap;
    }

    .character-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }

    /* Mobile: cuộn theo cả trang, không lồng thêm khung cuộn riêng */
    .item-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      max-height: none;
      overflow: visible;
      padding-right: 0;
    }

    .version-grid { grid-template-columns: minmax(0, 1fr); }
    .version-grid + .secondary-button { width: 100%; }
  }

  /* ===== ĐIỆN THOẠI ===== */
  @media (max-width: 640px) {
    .user-page { --header-h: 56px; --pad: 12px; }

    .user-bg-wrap { display: none; }

    .user-header-inner { width: calc(100% - 24px); gap: 10px; }
    .brand-mark { width: 32px; height: 32px; }

    /* Tràn mép màn hình: tận dụng tối đa bề ngang */
    .user-container {
      width: 100%;
      padding: 0 0 calc(20px + env(safe-area-inset-bottom));
    }

    .wizard-card {
      /* overflow hidden/clip trên tổ tiên có thể làm hỏng position: sticky của thanh chọn mục */
      overflow: visible;
      border-left: 0;
      border-right: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }

    .wizard-head {
      align-items: center;
      padding: 14px var(--pad) 10px;
      border-bottom: 0;
    }

    .wizard-kicker { display: none; }
    .wizard-head h2 { font-size: 20px; }
    .step-count strong { font-size: 18px; }

    /* Bước: thanh tiến trình mảnh thay cho 4 ô lớn */
    .progress-steps {
      gap: 6px;
      padding: 0 var(--pad) 12px;
      background: none;
    }

    .progress-step {
      height: 4px;
      padding: 0;
      border-radius: 999px;
      background: rgba(255,255,255,.09);
    }

    .progress-step + .progress-step { border-left: 0; }
    .progress-step > span,
    .progress-step label,
    .progress-step::after { display: none; }

    .progress-step.active { background: linear-gradient(90deg, var(--accent), var(--accent-2)); }
    .progress-step.complete { background: var(--success); }

    .wizard-help { padding: 10px var(--pad); font-size: 12px; }
    .wizard-card[data-step="2"] .wizard-help { display: none; }

    .wizard-content { padding: var(--pad); }

    /* Thanh chọn mục gọn hơn để khi dính trên đầu không chiếm nhiều chỗ */
    .slot-nav-list { gap: 6px; padding: 8px var(--pad); }
    .slot-nav-item { min-height: 36px; padding: 0 10px; gap: 6px; }
    .slot-nav-label { font-size: 11.5px; }

    /* Bước 1 */
    .filter-row {
      grid-template-columns: minmax(0, 1fr) 104px;
      gap: 8px;
      margin-bottom: 14px;
    }

    .search-box { height: 44px; padding: 0 12px; }
    .filter-button { padding: 0 12px; }
    .filter-select { height: 44px; padding: 0 8px; }
    .search-box input,
    .filter-select { font-size: 16px; } /* tránh Safari tự zoom */

    .section-title { margin-bottom: 10px; }
    .character-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
    .select-pill { display: none; }
    .character-info { padding: 9px 10px 10px; }

    /* Bước 2 */
    .selected-character {
      grid-template-columns: auto minmax(0, 1fr) auto;
      gap: 10px;
      padding: 8px 10px;
    }

    .selected-avatar { width: 36px; height: 36px; }

    .text-button {
      min-height: 36px;
      padding: 0 12px;
      border: 1px solid rgba(169,149,255,.28);
      border-radius: 10px;
    }

    .slot-note { margin-bottom: 10px; }

    .item-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-bottom: 12px; }
    .item-card { border-radius: 12px; }

    .item-card > strong {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      min-height: calc(2.6em + 14px);
      padding: 6px 7px 8px;
      white-space: normal;
      line-height: 1.3;
    }

    .action-bar {
      bottom: calc(8px + env(safe-area-inset-bottom));
      margin-top: 12px;
      padding: 10px 10px 10px 14px;
      border-radius: 16px;
    }

    .action-bar .primary-button { min-height: 46px; padding: 0 20px; }

    /* Bottom sheet */
    .modal-overlay { padding: 0; align-items: end; }

    .modal-card {
      width: 100%;
      max-height: 88vh;
      max-height: 88dvh;
      border-bottom: 0;
      border-radius: 20px 20px 0 0;
      animation: modal-slide-up .25s ease-out;
    }

    .modal-grab {
      display: block;
      width: 40px;
      height: 4px;
      margin: 8px auto 0;
      border-radius: 99px;
      background: rgba(255,255,255,.18);
    }

    .modal-head { padding: 10px 16px 12px; }
    .modal-close-btn { width: 40px; height: 40px; padding: 0; }
    .modal-body { padding: 12px 16px; gap: 8px; }
    .summary-slot-item { min-height: 60px; }

    .modal-foot {
      padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
    }

    .modal-foot > button { flex: 1; }

    /* Bước 3 & 4 */
    .version-card { min-height: 68px; padding: 12px 14px; }

    .finish-content {
      min-height: 50vh;
      min-height: 50dvh;
      padding: 24px 16px;
    }

    .finish-content .download-button,
    .finish-content .secondary-button {
      width: 100%;
      max-width: 360px;
    }

    .user-footer { padding-top: 16px; }
  }

  @media (max-width: 360px) {
    .header-status { display: none; }
    .wizard-head h2 { font-size: 18px; }
  }

  @media (max-width: 340px) {
    .item-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
`;function Rw(){var po,go,mo,_s;const[r,n]=k.useState(1),[o,s]=k.useState(""),[l,d]=k.useState(""),[f,p]=k.useState([]),[g,x]=k.useState(null),[y,w]=k.useState("TOP"),[R,B]=k.useState([]),[D,A]=k.useState(""),[I,N]=k.useState([]),[T,M]=k.useState(!0),[U,V]=k.useState(!1),[G,se]=k.useState({}),[_e,ve]=k.useState([]),[le,Ne]=k.useState(0),[De,Ce]=k.useState(""),[Le,it]=k.useState(""),[Xe,Re]=k.useState(null),[X,re]=k.useState(""),[J,C]=k.useState(null),[z,ue]=k.useState(null),[ye,we]=k.useState(!1),[te,ce]=k.useState(null),[xe,Te]=k.useState(0),[ut,In]=k.useState(()=>Date.now()),qe=k.useRef({}),[dt,Ge]=k.useState(!1),[xn,An]=k.useState(!0),[vt,pe]=k.useState(!1),[ke,et]=k.useState(()=>bw()),[ot,Bt]=k.useState(!1),[Dn,Ht]=k.useState(""),[Gn,Tr]=k.useState(!1),[li,At]=k.useState(""),no=r===3;k.useEffect(()=>{Ze.get("/gate/config").then(_=>{An(!!_.data.enabled),pe(!!_.data.isAdmin)}).catch(()=>An(!0))},[no]),k.useEffect(()=>{r!==3||!xn||!ke||Ze.get(`/gate/${ke.id}`).then(_=>{const $=!!_.data.verified;Bt($);const Q=_.data.state;!$&&(Q==="expired"||Q==="used")&&(et(null),es(null))}).catch(_=>{var Q;((Q=_.response)==null?void 0:Q.status)===404&&(et(null),es(null)),Bt(!1)})},[r,xn,ke==null?void 0:ke.id]),k.useEffect(()=>{Ze.get("/characters",{params:{q:o,gender:l}}).then(_=>p(_.data)).catch(()=>Ce("Không thể tải danh sách nhân vật. Vui lòng thử lại."))},[o,l]),k.useEffect(()=>{if(!g)return;let _=!1;if(cp(y)){if(!g.hasVfx){B([]);return}return Ze.get(`/characters/${g.id}/vfx-items`,{params:{category:y}}).then($=>{_||B($.data.map(Q=>({...Q,slot:Q.category})))}).catch(()=>{_||Ce("Không thể tải danh sách lựa chọn.")}),()=>{_=!0}}if(!g.slots.includes(y)){B([]);return}return Ze.get(`/characters/${g.id}/items`,{params:{slot:y}}).then($=>{_||B($.data)}).catch(()=>{_||Ce("Không thể tải danh sách lựa chọn.")}),()=>{_=!0}},[g,y]),k.useEffect(()=>{const _=_w();return _&&Ze.get(`/builds/${_}`).then($=>{var ee;const Q=(ee=$.data)==null?void 0:ee.status;Q==="QUEUED"||Q==="RUNNING"||Q==="DONE"?(n(4),Ce(""),zn(_)):Ui(null)}).catch($=>{var Q;((Q=$==null?void 0:$.response)==null?void 0:Q.status)===404?Ui(null):(n(4),Ce(""),zn(_))}),()=>sn()},[]),k.useEffect(()=>{_n()},[no]);const vn=te&&!te.unlimited?Math.max(0,Math.ceil(te.resetInSeconds-(ut-xe)/1e3)):0,ft=!!te&&!te.unlimited&&te.remaining<=0;k.useEffect(()=>{if(!ft)return;const _=setInterval(()=>In(Date.now()),15e3);return()=>clearInterval(_)},[ft]),k.useEffect(()=>{ft&&vn<=0&&_n()},[ft,vn]),k.useEffect(()=>{if(r!==4)return;const _=document.title;return le>=100?document.title="✓ Tệp đã sẵn sàng":X==="QUEUED"&&J!==null?document.title=`⏳ Hàng đợi #${J+1}`:X==="RUNNING"&&(document.title=`⚙ Đang tạo ${le}%`),()=>{document.title=_}},[r,le,X,J]),k.useEffect(()=>{window.scrollTo({top:0})},[r]),k.useEffect(()=>{if(!dt)return;const _=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=_}},[dt]);const vs=k.useMemo(()=>{if(!g)return[];const _=Oa.filter(ge=>g.slots.includes(ge.id)),$=new Set(_.map(ge=>ge.id)),Q=g.slots.filter(ge=>!$.has(ge)).map(ge=>({id:ge,label:ge})),ee=g.hasVfx?Ma:[];return[..._,...Q,...ee]},[g]),Ln=k.useMemo(()=>{const _=D.trim().toLowerCase();return R.filter(Q=>(!_||Q.name.toLowerCase().includes(_))&&(I.length===0||I.includes(Q.tier||"UNKNOWN"))).slice().sort((Q,ee)=>{const ge=lp(Q.tier),Oe=lp(ee.tier);return ge===0||Oe===0?ge===Oe?0:ge===0?1:-1:T?Oe-ge:ge-Oe})},[R,D,I,T]),[Or,ro]=k.useState(tu),Jn=k.useRef(null),ci=k.useRef(null);k.useEffect(()=>{ro(tu),Jn.current&&(Jn.current.scrollTop=0)},[R,D,I,T]);const io=k.useMemo(()=>Ln.slice(0,Or),[Ln,Or]),Ir=Or<Ln.length;k.useEffect(()=>{const _=ci.current;if(!_||!Ir)return;if(typeof IntersectionObserver>"u"){ro(Ln.length);return}const $=Jn.current,Q=!!$&&getComputedStyle($).overflowY!=="visible",ee=new IntersectionObserver(ge=>{var Oe;(Oe=ge[0])!=null&&Oe.isIntersecting&&ro(Xt=>Xt+tu)},{root:Q?$:null,rootMargin:"0px 0px 400px 0px"});return ee.observe(_),()=>ee.disconnect()},[Ir,Or,Ln.length,y,g,R]);const oo=k.useMemo(()=>{const _={};for(const $ of R)_[$.tier||"UNKNOWN"]=(_[$.tier||"UNKNOWN"]||0)+1;return _},[R]),wn=I.length>0||!T,bn=Object.keys(G).length,so=!!((po=G.HAIR)!=null&&po.headSlot),[ao,Ar]=k.useState("");function ws(_,$){var Q,ee;return $==="HAIR"&&_.headSlot&&G.MASK?`Tóc "${_.name}" đã gồm đầu và mặt nạ. Hãy hủy chọn Mặt nạ trước khi chọn tóc này.`:$==="HAIR"&&_.headSlot&&G.MAKEUP&&!G.MAKEUP.vfxOnly?`Tóc "${_.name}" đã gồm đầu nên không thể dùng cùng Make Up. Hãy hủy chọn Make Up trước khi chọn tóc này.`:$==="MASK"&&((Q=G.HAIR)!=null&&Q.headSlot)?`Bạn đang chọn tóc "${G.HAIR.name}" đã gồm đầu và mặt nạ nên không thể chọn thêm Mặt nạ. Hãy hủy chọn tóc này trước.`:$==="MAKEUP"&&((ee=G.HAIR)!=null&&ee.headSlot)&&!_.vfxOnly?`Bạn đang chọn tóc "${G.HAIR.name}" đã gồm đầu nên không thể chọn thêm Make Up. Hãy hủy chọn tóc này trước.`:null}function ui(_){se($=>Object.fromEntries(Object.entries($).filter(([Q])=>Q!==_)))}k.useEffect(()=>{Ar("")},[y,G]);const di=k.useMemo(()=>Object.fromEntries(Object.entries(G).map(([_,$])=>[_,$.id])),[G]);async function bs(){var _,$;if(!(!g||bn===0)){Ce(""),Ge(!1);try{const Q=await Ze.post("/builds/availability",{characterId:g.id,version:"ADR_NORMAL",items:di});ve(Q.data),n(3)}catch(Q){const ee=($=(_=Q.response)==null?void 0:_.data)==null?void 0:$.message;Ce(ee||"Không thể kiểm tra lựa chọn lúc này. Vui lòng thử lại.")}}}function Yn(_){ce(_),Te(Date.now()),In(Date.now())}async function _n(){try{const _=await Ze.get("/builds/quota");Yn(_.data)}catch{}}function sn(){const _=qe.current;_.poll&&clearInterval(_.poll),_.conn&&_.conn.stop().catch(()=>{}),qe.current={}}function lo(_){sn(),Ui(null),we(!1),re("FAILED"),C(null),ue(null),Ce(_),_n()}async function zn(_){sn(),Ui(_);const $={jobId:_};qe.current=$;let Q=!1,ee=0,ge=0;const Oe=()=>{Q||(Q=!0,we(!1),$.poll&&clearInterval($.poll),re("DONE"),C(null),ue(null),nl(_),_n())},Xt=async()=>{try{const an=await Ze.get(`/builds/${_}`);if(qe.current!==$||Q)return;ee=0,ge=0,we(!1);const Je=an.data;if(Je.status==="DONE")return Oe();if(Je.status==="FAILED"||Je.status==="EXPIRED")return Q=!0,lo(Je.status==="EXPIRED"?"Tệp đã hết hạn. Vui lòng tạo lại.":"Không thể hoàn tất tệp. Vui lòng chọn lại và thử lần nữa.");re(Je.status),Ne(Math.max(Je.progress??0,Je.status==="QUEUED"?0:1)),C(Je.status==="QUEUED"?Je.queueAhead??null:null),ue(Je.status==="QUEUED"?Je.etaSeconds??null:null)}catch{ee+=1,ge||(ge=Date.now()),ee>=3&&qe.current===$&&!Q&&we(!0),Date.now()-ge>10*6e4&&!Q&&(Q=!0,lo("Mất kết nối quá lâu. Vui lòng kiểm tra mạng rồi thử lại."))}};try{const an=new Yx().withUrl("/hubs/progress").withAutomaticReconnect().build();an.on("progress",Je=>{if(!(qe.current!==$||Q)){if(Je.status==="DONE")return Oe();if(Je.status==="FAILED")return Q=!0,lo("Không thể hoàn tất tệp. Vui lòng chọn lại và thử lần nữa.");Ne(Je.progress),Je.status==="RUNNING"&&(re("RUNNING"),C(null),ue(null))}}),$.conn=an,await an.start(),await an.invoke("JoinJob",_)}catch{}qe.current===$&&($.poll=setInterval(Xt,2e3),Xt())}async function fi(_){var $,Q;if(g){n(4),Ce(""),Ne(8),re(""),C(null),ue(null),it(""),Re(null);try{const ee=await Ze.post("/builds",{characterId:g.id,version:_,items:di,gateId:ke==null?void 0:ke.id}),ge=ee.data.jobId;re(ee.data.status),ee.data.status==="QUEUED"&&(Ne(0),C(ee.data.queueAhead??null),ue(ee.data.etaSeconds??null)),_n(),await zn(ge)}catch(ee){const ge=($=ee.response)==null?void 0:$.status,Oe=(Q=ee.response)==null?void 0:Q.data;if(ge===429&&(Oe==null?void 0:Oe.code)==="DAILY_LIMIT"){Yn({unlimited:!1,limit:Number(Oe.limit??0),used:Number(Oe.used??0),remaining:0,resetInSeconds:Number(Oe.resetInSeconds??0)}),Ne(0),Ce(""),re(""),n(3);return}if(ge===403){Bt(!1),At(Ia(ee,"Mã xác nhận không còn hiệu lực. Vui lòng lấy mã mới.")),Ne(0),Ce(""),re(""),n(3);return}if(ge===503){Ne(0),re(""),n(3),Ce(Ia(ee,"Hệ thống đang bảo trì. Vui lòng thử lại sau ít phút."));return}re("FAILED"),Ce("Không thể bắt đầu chuẩn bị tệp. Vui lòng thử lại.")}}}async function hi(){if(!Gn){if(At(""),ke&&!ot&&ke.exp&&ke.exp-3e4>Date.now()){window.open(ke.url,"_blank","noopener,noreferrer");return}Tr(!0);try{const _=await Ze.post("/gate/start"),$=_.data.expiresAt,Q=$?Date.parse($):NaN,ee={id:_.data.gateId,url:_.data.shortUrl,exp:Number.isFinite(Q)?$&&!/[zZ]|[+-]\d\d:?\d\d$/.test($)?Date.parse($+"Z"):Q:void 0};et(ee),es(ee),Bt(!1),Ht(""),window.open(ee.url,"_blank","noopener,noreferrer")}catch(_){At(Ia(_,"Không thể tạo liên kết lấy mã. Vui lòng thử lại."))}finally{Tr(!1)}}}async function pi(){var _,$;if(!(!Dn.trim()||Gn)){if(!ke){At('Bạn chưa lấy mã. Hãy bấm "Lấy mã", vượt liên kết rồi dán mã vào đây.');return}Tr(!0),At("");try{await Ze.post(`/gate/${ke.id}/verify`,{key:Dn}),Bt(!0),Ht("")}catch(Q){const ee=Q.response,ge=ee==null?void 0:ee.status,Oe=Ia(Q,"Không thể xác nhận mã. Vui lòng thử lại.");if(ge===400&&((_=ee==null?void 0:ee.data)==null?void 0:_.reason)==="format")At(`${Oe} (Lần nhập này không bị tính vào số lần thử.)`);else if(ge===400){const Xt=($=ee==null?void 0:ee.data)==null?void 0:$.attemptsLeft;At(`${Oe} Hãy dùng mã 8 ký tự ở trang "Mã xác nhận của bạn" của web (không phải mã ở trang Link4m)`+(typeof Xt=="number"?`. Còn ${Xt} lần thử.`:"."))}else(ge===404||ge===410||ge===429)&&(et(null),es(null)),At(Oe)}finally{Tr(!1)}}}function nl(_){const $=`/api/builds/${_}/download`;it($),Ne(100),Ze.get(`/builds/${_}`).then(Q=>{var ee;return Re(((ee=Q.data)==null?void 0:ee.compression)??null)}).catch(()=>Re(null))}function rl(_){x(_),se({}),w(_.slots.includes("TOP")?"TOP":_.slots[0]||"TOP"),A(""),n(2),Ce("")}function co(){n(1),x(null),se({}),B([]),A(""),ve([]),Ne(0),it(""),Re(null),sn(),Ui(null),re(""),C(null),ue(null),_n(),Ce(""),Ge(!1),(le>=100||X!==""&&X!=="FAILED")&&(et(null),es(null),Bt(!1)),Ht(""),At("")}const wt=X==="QUEUED"&&le<100&&!De,uo=xn&&!ot,Sn=_=>!!g&&(cp(_)?!g.hasVfx:!g.slots.includes(_)),fo=((go=Oa.find(_=>_.id===y))==null?void 0:go.label)||((mo=Ma.find(_=>_.id===y))==null?void 0:mo.label)||y,ho=g?Oa.filter(_=>Sn(_.id)):[];return h.jsxs("div",{className:"user-page",children:[h.jsx("style",{children:Cw}),h.jsxs("div",{className:"user-bg-wrap","aria-hidden":"true",children:[h.jsx("div",{className:"user-bg user-bg-one"}),h.jsx("div",{className:"user-bg user-bg-two"})]}),h.jsx("header",{className:"user-header",children:h.jsxs("div",{className:"user-header-inner",children:[h.jsxs("button",{type:"button",onClick:co,className:"brand","aria-label":"Về trang chính",children:[h.jsx("span",{className:"brand-mark",children:"K"}),h.jsxs("span",{children:[h.jsx("strong",{children:"KEN MOD Z"}),h.jsx("small",{children:"Dressing Studio"})]})]}),h.jsxs("div",{className:"header-right",children:[te&&!te.unlimited&&h.jsx("div",{className:`quota-chip ${ft?"is-out":te.remaining===1?"is-low":""}`,title:"Số lượt tạo file trong 24 giờ gần nhất. Build lỗi không bị tính.",children:ft?`Hết lượt • mở lại sau ${dp(vn)}`:`Còn ${te.remaining}/${te.limit} lượt`}),h.jsxs("div",{className:"header-status",children:[h.jsx("span",{className:"status-dot"}),"Sẵn sàng"]})]})]})}),h.jsxs("main",{className:"user-container",children:[h.jsxs("section",{className:"wizard-card","data-step":r,children:[h.jsxs("div",{className:"wizard-head",children:[h.jsxs("div",{children:[h.jsx("span",{className:"wizard-kicker",children:"CUSTOMIZATION WORKSPACE"}),h.jsx("h2",{children:fp[r-1]})]}),h.jsxs("div",{className:"step-count",children:[h.jsxs("strong",{children:["0",r]}),h.jsx("span",{children:"/ 04"})]})]}),h.jsx("div",{className:"progress-steps",children:fp.map((_,$)=>{const Q=$+1,ee=Q===r,ge=Q<r;return h.jsxs("div",{className:`progress-step ${ee?"active":""} ${ge?"complete":""}`,children:[h.jsx("span",{children:ge?"✓":Q}),h.jsx("label",{children:_})]},_)})}),h.jsx("p",{className:"wizard-help",children:kw[r-1]}),r===1&&h.jsxs("section",{className:"wizard-content",children:[h.jsxs("div",{className:"filter-row",children:[h.jsxs("label",{className:"search-box",children:[h.jsx("span",{children:"⌕"}),h.jsx("input",{value:o,onChange:_=>s(_.target.value),placeholder:"Tìm nhân vật...","aria-label":"Tìm nhân vật"})]}),h.jsxs("select",{value:l,onChange:_=>d(_.target.value),"aria-label":"Lọc giới tính",className:"filter-select",children:[h.jsx("option",{value:"",children:"Tất cả"}),h.jsx("option",{value:"MALE",children:"Nam"}),h.jsx("option",{value:"FEMALE",children:"Nữ"}),h.jsx("option",{value:"OTHER",children:"Khác"})]})]}),h.jsx("div",{className:"section-title",children:h.jsxs("div",{children:[h.jsx("h3",{children:"Chọn nhân vật"}),h.jsxs("span",{children:[f.length," lựa chọn có sẵn",f.some(_=>_.hidden)&&` · ${f.filter(_=>_.hidden).length} đang ẩn (chỉ admin thấy)`]})]})}),h.jsxs("div",{className:"character-grid",children:[f.map(_=>h.jsxs("button",{type:"button",onClick:()=>rl(_),className:`character-card${_.hasVfx?" has-vfx":""}${_.hidden?" is-hidden":""}`,title:_.hidden?"Đang ẨN với người dùng, chỉ admin thấy":void 0,children:[_.hidden&&h.jsx("u",{className:"hidden-tag",children:"ẨN"}),_.hasVfx&&h.jsxs("span",{className:"vfx-badge",title:"Nhân vật có hiệu ứng VFX",children:[h.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:h.jsx("path",{fill:"currentColor",d:"M12 2c1 3.5-1.6 5.2-1.6 8 0 1.3.8 2.3 2 2.3s2-1 2-2.5c0-.6-.1-1.1-.3-1.6C16.6 9.8 19 12.6 19 16a7 7 0 0 1-14 0c0-4.6 4.3-6.9 7-14z"})}),"VFX"]}),h.jsxs("div",{className:"character-image",children:[_.avatarUrl?h.jsx("img",{src:_.avatarUrl,alt:_.name,loading:"lazy"}):h.jsx("div",{className:"image-placeholder",children:"KMZ"}),_.hasVfx&&h.jsx("span",{className:"vfx-fire","aria-hidden":"true",children:Array.from({length:6},($,Q)=>h.jsx("i",{style:{"--i":Q}},Q))}),_.hasVfx&&h.jsxs("span",{className:"vfx-ribbon",children:[h.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:h.jsx("path",{fill:"currentColor",d:"M12 2c1 3.5-1.6 5.2-1.6 8 0 1.3.8 2.3 2 2.3s2-1 2-2.5c0-.6-.1-1.1-.3-1.6C16.6 9.8 19 12.6 19 16a7 7 0 0 1-14 0c0-4.6 4.3-6.9 7-14z"})}),"Có hiệu ứng của đồ"]}),h.jsx("span",{className:"select-pill",children:"Chọn"})]}),h.jsxs("div",{className:"character-info",children:[h.jsx("strong",{children:_.name}),h.jsxs("span",{children:[_.slots.length," vị trí",!_.slots.includes("MASK")&&" · Khuyết MẶT NẠ"]})]})]},_.id)),f.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("span",{children:"⌕"}),h.jsx("strong",{children:"Không tìm thấy nhân vật"}),h.jsx("p",{children:"Thử thay đổi từ khóa hoặc bộ lọc."})]})]})]}),r===2&&g&&h.jsx("section",{className:"wizard-content",children:h.jsxs("div",{className:"dressing-workspace",children:[h.jsxs("div",{className:"dressing-sidebar",children:[h.jsxs("div",{className:"selected-character",children:[h.jsx("div",{className:"selected-avatar",children:g.avatarUrl?h.jsx("img",{src:g.avatarUrl,alt:g.name}):h.jsx("span",{children:"KMZ"})}),h.jsxs("div",{children:[h.jsx("span",{children:"Đang tùy chỉnh"}),h.jsx("strong",{children:g.name}),g.hasVfx&&h.jsx("em",{className:"vfx-inline",children:"✦ Có hiệu ứng của đồ"}),g.hidden&&h.jsx("em",{className:"hidden-inline",children:"ẨN · chỉ admin thấy"})]}),h.jsx("button",{type:"button",onClick:()=>n(1),className:"text-button",children:"Đổi nhân vật"})]}),h.jsxs("div",{className:"slot-nav-list",children:[Oa.map(_=>{const $=Sn(_.id),Q=!!G[_.id];return h.jsxs("button",{type:"button",onClick:()=>{w(_.id),A("")},"aria-disabled":$,title:$?`${g.name} không có ${_.label}`:void 0,className:`slot-nav-item ${y===_.id?"active":""} ${$?"locked":""}`,children:[h.jsx("div",{className:"slot-nav-label",children:h.jsx("span",{children:_.label})}),$?h.jsx("span",{className:"slot-nav-status",children:"🔒"}):Q?h.jsx("span",{className:"slot-nav-status picked",children:"✓"}):h.jsx("span",{className:"slot-nav-status unpicked",children:"•"})]},_.id)}),g.hasVfx&&Ma.map(_=>{const $=!!G[_.id];return h.jsxs("button",{type:"button",onClick:()=>{w(_.id),A("")},className:`slot-nav-item ${y===_.id?"active":""}`,children:[h.jsx("div",{className:"slot-nav-label",children:h.jsx("span",{children:_.label})}),$?h.jsx("span",{className:"slot-nav-status picked",children:"✓"}):h.jsx("span",{className:"slot-nav-status unpicked",children:"•"})]},_.id)})]})]}),h.jsxs("div",{className:"dressing-main",children:[ho.length>0&&!Sn(y)&&h.jsxs("p",{className:"slot-note",children:["Nhân vật này không có:"," ",ho.map(_=>_.label).join(", "),"."]}),!Sn(y)&&h.jsxs("div",{className:"item-toolbar",children:[h.jsxs("div",{className:"search-box item-search",children:[h.jsx("span",{children:"⌕"}),h.jsx("input",{value:D,onChange:_=>A(_.target.value),placeholder:`Tìm trang phục trong mục ${fo}...`})]}),h.jsxs("button",{type:"button",className:`filter-button ${U||wn?"active":""}`,"aria-expanded":U,onClick:()=>V(_=>!_),children:[h.jsx("span",{"aria-hidden":"true",children:"⚟"})," Lọc",wn&&h.jsx("b",{children:I.length+(T?0:1)})]})]}),!Sn(y)&&U&&h.jsxs("div",{className:"tier-panel",children:[h.jsxs("div",{className:"tier-panel-head",children:[h.jsx("strong",{children:"Cấp độ"}),h.jsx("span",{children:I.length===0?"Đang hiện tất cả":`Đang chọn ${I.length} cấp`})]}),h.jsx("div",{className:"tier-chips",children:Ng.map(_=>{const $=I.includes(_.id);return h.jsxs("button",{type:"button",className:`tier-chip ${$?"on":""}`,style:{"--tier":_.color},onClick:()=>N(Q=>Q.includes(_.id)?Q.filter(ee=>ee!==_.id):[...Q,_.id]),children:[h.jsx("i",{}),_.label,h.jsx("em",{children:oo[_.id]||0})]},_.id)})}),h.jsxs("div",{className:"tier-panel-foot",children:[h.jsxs("div",{className:"tier-sort",role:"group","aria-label":"Sắp xếp theo cấp độ",children:[h.jsx("button",{type:"button",className:T?"on":"",onClick:()=>M(!0),children:"Đỏ → Xám"}),h.jsx("button",{type:"button",className:T?"":"on",onClick:()=>M(!1),children:"Xám → Đỏ"})]}),h.jsx("button",{type:"button",className:"tier-reset",disabled:!wn,onClick:()=>{N([]),M(!0)},children:"Đặt lại"})]})]}),!Sn(y)&&((y==="MASK"||y==="MAKEUP")&&so?h.jsxs("div",{className:"head-notice",role:"status",children:[h.jsx("span",{"aria-hidden":"true",children:"👹"}),h.jsxs("p",{children:["Tóc ",h.jsx("strong",{children:(_s=G.HAIR)==null?void 0:_s.name})," đã gồm đầu",y==="MASK"?" và mặt nạ":""," nên không thể chọn thêm ",y==="MASK"?"Mặt nạ":"Make Up",y==="MAKEUP"&&R.some(_=>_.vfxOnly)?" có ảnh (Make Up chỉ có hiệu ứng VFX vẫn chọn được)":"","."]}),h.jsx("button",{type:"button",onClick:()=>ui("HAIR"),children:"Bỏ chọn tóc"})]}):ao&&h.jsxs("div",{className:"head-notice",role:"alert",children:[h.jsx("span",{"aria-hidden":"true",children:"⚠️"}),h.jsx("p",{children:ao}),y==="HAIR"&&G.MASK&&h.jsx("button",{type:"button",onClick:()=>{ui("MASK"),Ar("")},children:"Bỏ chọn Mặt nạ"}),y==="HAIR"&&G.MAKEUP&&h.jsx("button",{type:"button",onClick:()=>{ui("MAKEUP"),Ar("")},children:"Bỏ chọn Make Up"})]})),Sn(y)?h.jsxs("div",{className:"slot-locked-notice",role:"alert",children:[h.jsx("span",{children:"🔒"}),h.jsxs("strong",{children:["Nhân vật này không có ",fo]}),h.jsxs("p",{children:[g.name," không hỗ trợ vị trí ",fo,". Bạn hãy chọn một danh mục trang phục khác."]})]}):h.jsxs("div",{className:"item-grid",ref:Jn,children:[io.map(_=>{var Oe;const $=!!_.bodyBlocked||!!_.vfxBlocked,Q=!$&&((Oe=G[y])==null?void 0:Oe.id)===_.id,ee=Q?null:ws(_,y),ge=$||(y==="MASK"||y==="MAKEUP")&&!!ee;return h.jsxs("button",{type:"button","aria-disabled":ge,onClick:()=>$?void 0:ee?Ar(ee):se(Xt=>Q?Object.fromEntries(Object.entries(Xt).filter(([an])=>an!==y)):{...Xt,[y]:_}),className:`item-card ${Q?"selected":""} ${ge?"blocked":""} ${_.hidden?"is-hidden":""} ${_.tier&&_.tier!=="UNKNOWN"?"has-tier":""} ${ww(_.tier)}`,style:{"--tier":Ua(_.tier).color},title:`${_.name} · ${Ua(_.tier).label}${_.hidden?" · ẨN (chỉ admin thấy)":""}`,children:[h.jsxs("div",{className:"item-image",children:[_.hidden&&h.jsx("u",{className:"hidden-tag",children:"ẨN"}),_.iconUrl?h.jsx("img",{src:_.iconUrl,alt:_.name,loading:"lazy",decoding:"async"}):h.jsx("span",{children:"ITEM"}),Q&&h.jsx("i",{children:"✓"}),ge&&h.jsx("b",{className:"item-block-x","aria-hidden":"true",children:"✕"}),_.tier&&_.tier!=="UNKNOWN"&&h.jsx("u",{className:"tier-tag",children:Ua(_.tier).label})]}),h.jsx("strong",{children:_.name})]},_.id)}),Ir&&h.jsx("div",{ref:ci,className:"item-sentinel","aria-hidden":"true",children:"Đang tải thêm…"}),Ln.length===0&&h.jsxs("div",{className:"empty-state",children:[h.jsx("span",{children:"◌"}),h.jsx("strong",{children:"Chưa có lựa chọn"}),h.jsx("p",{children:D||I.length>0?"Không tìm thấy trang phục phù hợp bộ lọc.":"Mục này hiện chưa có sẵn trang phục."})]})]}),De&&h.jsx("div",{className:"error-box",children:De}),h.jsxs("div",{className:"action-bar",children:[h.jsxs("div",{children:[h.jsx("span",{children:"Đã chọn"}),h.jsxs("strong",{children:[bn," / ",vs.length," vị trí"]})]}),h.jsxs("button",{type:"button",disabled:bn===0,onClick:()=>Ge(!0),className:"primary-button",children:["Tiếp tục ",h.jsx("span",{children:"→"})]})]})]})]})}),r===3&&h.jsxs("section",{className:"wizard-content",children:[vt&&(()=>{const _=[...g!=null&&g.hidden?[`${g.name} (nhân vật)`]:[],...Object.values(G).filter($=>$==null?void 0:$.hidden).map($=>$.name)];return _.length>0?h.jsxs("div",{className:"hidden-notice",role:"note",children:[h.jsx("span",{"aria-hidden":"true",children:"🧪"}),h.jsxs("div",{children:[h.jsx("b",{children:"Bản build thử nghiệm."})," Có ",_.length," ","mục đang ẨN với người dùng: ",_.join(", "),". Chỉ admin chọn được, người dùng thường không thấy."]})]}):null})(),vt&&h.jsx("div",{className:"gate-panel verified",children:h.jsxs("div",{className:"gate-done",children:[h.jsx("span",{className:"gate-badge",children:"✓"}),h.jsxs("div",{children:[h.jsx("strong",{children:"Đang đăng nhập admin"}),h.jsx("span",{children:"Không cần lấy mã, chọn phiên bản bên dưới để tải."})]})]})}),te&&!te.unlimited&&h.jsxs("div",{className:`quota-panel ${ft?"is-out":te.remaining===1?"is-low":""}`,role:"status",children:[te.limit>0&&te.limit<=10&&h.jsx("div",{className:"quota-dots","aria-hidden":"true",children:Array.from({length:te.limit}).map((_,$)=>h.jsx("span",{className:$<te.remaining?"on":""},$))}),h.jsxs("div",{className:"quota-text",children:[h.jsx("strong",{children:ft?`Bạn đã dùng hết ${te.limit} lượt trong 24 giờ qua`:`Bạn còn ${te.remaining}/${te.limit} lượt trong 24 giờ`}),h.jsx("span",{children:ft?`Lượt mới sẽ mở lại sau ${dp(vn)}. Lựa chọn của bạn vẫn được giữ nếu bạn để trang này mở.`:te.remaining===1?"Đây là lượt cuối của bạn hôm nay, hãy kiểm tra kỹ lựa chọn trước khi tạo.":"Build bị lỗi sẽ không bị tính lượt."})]})]}),xn&&!ft&&h.jsx("div",{className:`gate-panel ${ot?"verified":""}`,children:ot?h.jsxs("div",{className:"gate-done",children:[h.jsx("span",{className:"gate-badge",children:"✓"}),h.jsxs("div",{children:[h.jsx("strong",{children:"Đã xác nhận mã"}),h.jsx("span",{children:"Bạn có thể chọn phiên bản bên dưới để tải về."})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"gate-head",children:[h.jsx("strong",{children:"Xác nhận trước khi tải"}),h.jsx("span",{children:"Vượt liên kết để lấy mã, rồi dán mã vào ô bên dưới để mở khóa bước chọn phiên bản."})]}),h.jsxs("ol",{className:"gate-steps",children:[h.jsxs("li",{children:["Bấm ",h.jsx("b",{children:'"Lấy mã"'})," và vượt hết các bước ở trang liên kết (Link4m). Mã ngắn hiện ở đó (ví dụ"," ",h.jsx("code",{children:"BzJ0jS"}),") chỉ để nhập ",h.jsx("b",{children:"tại trang Link4m"})," ","để đi tiếp, ",h.jsx("b",{children:"đừng dán vào đây"}),"."]}),h.jsxs("li",{children:["Khi trang web hiện ",h.jsx("b",{children:'"Mã xác nhận của bạn"'})," ","(8 ký tự, dạng ",h.jsx("code",{children:"XXXX-XXXX"}),"), sao chép mã đó."]}),h.jsxs("li",{children:["Quay lại đây, dán mã vào ô bên dưới rồi bấm"," ",h.jsx("b",{children:"Xác nhận"}),"."]})]}),h.jsx("div",{className:"gate-actions",children:h.jsx("button",{type:"button",className:"primary-button",onClick:hi,disabled:Gn,children:Gn?"Đang tạo liên kết…":"Lấy mã"})}),ke&&h.jsx("div",{className:"gate-note",children:'Đã có liên kết lấy mã. Bấm "Lấy mã" lần nữa sẽ mở lại đúng liên kết đó, mã cũ vẫn dùng được.'}),h.jsxs("div",{className:"gate-input-row",children:[h.jsxs("label",{className:"search-box",children:[h.jsx("span",{children:"✦"}),h.jsx("input",{value:Dn,onChange:_=>Ht(_.target.value),onKeyDown:_=>{_.key==="Enter"&&pi()},placeholder:"Dán mã 8 ký tự (XXXX-XXXX)","aria-label":"Mã xác nhận",autoCapitalize:"characters",autoComplete:"off",spellCheck:!1})]}),h.jsx("button",{type:"button",className:"primary-button",onClick:pi,disabled:Gn||!Dn.trim(),children:"Xác nhận"})]}),li&&h.jsx("div",{className:"error-box",children:li})]})}),h.jsx("div",{className:"version-grid",children:vw.map(_=>{const $=_e.find(ge=>ge.version===_.id),Q=!!($!=null&&$.ready),ee=Q&&!uo&&!ft;return h.jsxs("button",{type:"button",disabled:!ee,onClick:()=>fi(_.id),className:`version-card ${ee?"ready":"disabled"}`,children:[h.jsx("div",{className:"version-icon",children:"↗"}),h.jsxs("div",{children:[h.jsx("strong",{children:_.label}),h.jsx("span",{children:Q?ft?"Đã hết lượt trong 24 giờ":uo?"Cần xác nhận mã để mở khóa":"Có thể sử dụng":"Chưa khả dụng cho lựa chọn này"})]}),h.jsx("b",{children:ee?"→":"—"})]},_.id)})}),h.jsx("button",{type:"button",onClick:()=>n(2),className:"secondary-button",style:{marginTop:"16px"},children:"← Quay lại"})]}),r===4&&h.jsxs("section",{className:"wizard-content finish-content",children:[h.jsx("div",{className:`finish-icon ${le>=100?"done":""}`,children:le>=100?"✓":wt?"⏳":"✦"}),h.jsx("span",{className:"finish-kicker",children:le>=100?"READY":wt?"IN QUEUE":"PREPARING"}),h.jsx("h3",{children:le>=100?"Tệp đã sẵn sàng!":wt?J===0?"Sắp đến lượt bạn":"Bạn đang trong hàng đợi":Ew.working}),h.jsx("p",{children:le>=100?"Bạn có thể tải xuống và sử dụng ngay.":wt?J!==null&&J>0?`Còn ${J} lượt đang chờ trước bạn. Hệ thống sẽ tự bắt đầu ngay khi đến lượt.`:"Hệ thống sẽ bắt đầu chuẩn bị tệp của bạn trong giây lát.":"Vui lòng giữ trang này mở trong giây lát."}),ye&&le<100&&h.jsx("div",{className:"queue-note",role:"status","aria-live":"polite",children:"Đang kết nối lại với hệ thống (có thể đang bảo trì nhanh). Tệp của bạn vẫn được giữ, hãy để trang này mở, nó sẽ tự cập nhật khi kết nối trở lại."}),wt&&J!==null&&h.jsxs("div",{className:"queue-card",role:"status","aria-live":"polite",children:[h.jsxs("div",{className:"queue-stat",children:[h.jsx("span",{children:"Vị trí của bạn"}),h.jsxs("strong",{className:"queue-pop",children:["#",J+1]},J)]}),z!==null&&h.jsxs("div",{className:"queue-stat",children:[h.jsx("span",{children:"Dự kiến có tệp sau"}),h.jsx("strong",{children:Sw(z)})]})]}),h.jsx("div",{className:`progress-track ${wt?"is-waiting":""}`,children:h.jsx("div",{style:wt?void 0:{width:`${le}%`}})}),wt?h.jsx("div",{className:"queue-note",children:"Hãy giữ trang này mở, tải lại trang vẫn được giữ chỗ. Đừng tạo lại yêu cầu vì bạn sẽ phải xếp lại từ cuối hàng."}):h.jsxs("div",{className:"progress-meta",children:[h.jsx("span",{children:"Tiến trình"}),h.jsxs("strong",{children:[le,"%"]})]}),De&&h.jsx("div",{className:"error-box",children:De}),le>=100&&!De&&Xe&&h.jsxs("div",{className:`optimize-box ${Xe==="LZMA"?"is-heavy":"is-optimized"}`,role:"status",children:[h.jsx("span",{className:"optimize-icon","aria-hidden":"true",children:Xe==="LZMA"?"⚠️":"🚀"}),h.jsxs("div",{className:"optimize-text",children:[h.jsx("strong",{children:Xe==="LZMA"?"File mod chưa được tối ưu vì có nhiều hiệu ứng nặng. Khi vào trận có thể sẽ bị khựng 2-3 giây":"File mod được tối ưu cho máy yếu"}),h.jsx("span",{children:"💡Mẹo: Chọn quá nhiều đồ có hiệu ứng có thể khiến file mod được tạo lâu hơn."})]})]}),le>=100&&!De&&te&&!te.unlimited&&h.jsxs("div",{className:"quota-note",children:["Bạn còn ",te.remaining,"/",te.limit," lượt trong 24 giờ."]}),De&&le<100&&te&&!te.unlimited&&h.jsxs("div",{className:"quota-note",children:["Lượt này không bị tính. Bạn còn ",te.remaining,"/",te.limit," ","lượt."]}),De&&le<100&&h.jsx("button",{type:"button",onClick:()=>{if(!g)return co();sn(),Ui(null),re(""),Ce(""),Ne(0),n(3)},className:"secondary-button",style:{marginTop:"12px"},children:"← Chọn lại phiên bản"}),Le&&h.jsxs("a",{className:"download-button",href:Le,children:[h.jsx("span",{children:"↓"}),"Tải tệp xuống"]}),le>=100&&h.jsx("button",{type:"button",onClick:co,className:"secondary-button",children:"Tạo lựa chọn mới"})]})]}),h.jsxs("footer",{className:"user-footer",children:[h.jsx("span",{children:"KEN MOD Z"}),h.jsx("span",{children:"•"}),h.jsx("span",{children:"Customization Studio"})]})]}),dt&&r===2&&h.jsx("div",{className:"modal-overlay",onClick:()=>Ge(!1),children:h.jsxs("div",{className:"modal-card",role:"dialog","aria-modal":"true",onClick:_=>_.stopPropagation(),children:[h.jsx("div",{className:"modal-grab","aria-hidden":"true"}),h.jsxs("div",{className:"modal-head",children:[h.jsxs("div",{children:[h.jsx("h3",{children:"Danh sách đã chọn"}),h.jsx("span",{className:"modal-sub",children:"Kiểm tra các trang phục từ trên xuống"})]}),h.jsx("button",{type:"button",className:"modal-close-btn","aria-label":"Đóng",onClick:()=>Ge(!1),children:"✕"})]}),h.jsx("div",{className:"modal-body",children:vs.map(_=>{var ge;const $=G[_.id],Q=!!$,ee=!Q&&(_.id==="MASK"||_.id==="MAKEUP")&&so;return h.jsxs("div",{onClick:()=>{w(_.id),Ge(!1)},className:`summary-slot-item ${Q||ee?"selected":"unselected"}`,children:[h.jsx("div",{className:"summary-icon-box",children:Q&&$.iconUrl?h.jsx("img",{src:$.iconUrl,alt:$.name}):Q?h.jsx("span",{style:{fontSize:"10px",fontWeight:"bold",color:"#8cebc8"},children:"ITEM"}):ee?h.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",color:"#8cebc8"},children:"✓"}):h.jsx("span",{className:"unselected-icon",children:"?"})}),h.jsxs("div",{className:"summary-info",children:[h.jsx("span",{className:"slot-tag",children:_.label}),Q?h.jsx("div",{className:"item-name",children:$.name}):ee?h.jsxs("div",{className:"item-name",children:["Đã gồm trong tóc ",(ge=G.HAIR)==null?void 0:ge.name]}):h.jsxs("div",{className:"unselected-label",children:[_.label," (chưa chọn)"]})]}),h.jsx("span",{className:`summary-badge ${Q||ee?"ok":"warn"}`,children:Q?"✓ Đã chọn":ee?"✓ Đã gộp":"Bấm chọn"})]},_.id)})}),h.jsxs("div",{className:"modal-foot",children:[h.jsx("button",{type:"button",className:"secondary-button",onClick:()=>Ge(!1),children:"Chỉnh sửa"}),h.jsx("button",{type:"button",className:"primary-button",onClick:bs,children:"Xác nhận →"})]})]})})]})}const Pw=`
  .getkey-page {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 20px;
    background:
      radial-gradient(circle at 15% 15%, rgba(139,92,246,.14), transparent 30%),
      radial-gradient(circle at 85% 10%, rgba(91,140,255,.12), transparent 28%),
      #07090f;
    color: #f4f7fb;
    font-family: inherit;
  }
  .getkey-card {
    width: min(440px, 100%);
    padding: 28px 22px;
    text-align: center;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 20px;
    background: rgba(15,18,28,.9);
    box-shadow: 0 30px 80px rgba(0,0,0,.5);
  }
  .getkey-card h1 { margin: 0 0 6px; font-size: 18px; }
  .getkey-card p { margin: 0; color: #8e98aa; font-size: 13px; line-height: 1.6; }
  .getkey-code {
    margin: 20px 0 14px;
    padding: 16px 12px;
    border: 1px dashed rgba(139,92,246,.55);
    border-radius: 14px;
    background: rgba(139,92,246,.08);
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: .12em;
    user-select: all;
    -webkit-user-select: all;
  }
  .getkey-wait {
    margin: 20px auto 14px;
    width: 84px; height: 84px;
    display: grid; place-items: center;
    border-radius: 50%;
    border: 3px solid rgba(139,92,246,.35);
    font-size: 28px; font-weight: 800;
  }
  .getkey-btn {
    min-height: 44px;
    padding: 0 22px;
    border: 1px solid rgba(139,92,246,.4);
    border-radius: 12px;
    background: linear-gradient(135deg, #8b5cf6, #5b8cff);
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
  }
  .getkey-error { color: #ffadad; }
`;function Nw(){const[r]=px(),n=r.get("g")||"",o=r.get("t")||"",[s,l]=k.useState({kind:"loading"}),[d,f]=k.useState(!1),p=k.useCallback(async()=>{var x,y;if(!n||!o){l({kind:"error",message:"Liên kết không hợp lệ."});return}try{const w=await Ze.post(`/gate/${n}/reveal`,{t:o});w.data.ready?l({kind:"ready",key:w.data.key}):l({kind:"waiting",seconds:Math.max(1,Number(w.data.retryAfterSeconds)||1)})}catch(w){const R=(y=(x=w.response)==null?void 0:x.data)==null?void 0:y.message;l({kind:"error",message:R||"Không thể lấy mã lúc này. Vui lòng thử lại."})}},[n,o]);k.useEffect(()=>{p()},[p]),k.useEffect(()=>{if(s.kind!=="waiting")return;if(s.seconds<=0){p();return}const x=setTimeout(()=>l({kind:"waiting",seconds:s.seconds-1}),1e3);return()=>clearTimeout(x)},[s,p]);async function g(x){try{await navigator.clipboard.writeText(x),f(!0),setTimeout(()=>f(!1),2e3)}catch{}}return h.jsxs("div",{className:"getkey-page",children:[h.jsx("style",{children:Pw}),h.jsxs("div",{className:"getkey-card",children:[s.kind==="loading"&&h.jsx("p",{children:"Đang lấy mã…"}),s.kind==="waiting"&&h.jsxs(h.Fragment,{children:[h.jsx("h1",{children:"Vui lòng chờ một chút"}),h.jsx("div",{className:"getkey-wait",children:s.seconds}),h.jsx("p",{children:"Mã sẽ hiện ngay khi hết thời gian chờ."})]}),s.kind==="ready"&&h.jsxs(h.Fragment,{children:[h.jsx("h1",{children:"Mã xác nhận của bạn"}),h.jsx("p",{children:"Đây là mã của web (8 ký tự), khác với mã ngắn ở trang Link4m. Sao chép mã này, quay lại trang chọn phiên bản rồi dán vào ô xác nhận."}),h.jsx("div",{className:"getkey-code",children:s.key}),h.jsx("button",{type:"button",className:"getkey-btn",onClick:()=>g(s.key),children:d?"Đã sao chép ✓":"Sao chép mã"})]}),s.kind==="error"&&h.jsxs(h.Fragment,{children:[h.jsx("h1",{children:"Không lấy được mã"}),h.jsx("p",{className:"getkey-error",children:s.message})]})]})]})}function jw(){const r=Ga(),[n,o]=k.useState("admin"),[s,l]=k.useState(""),[d,f]=k.useState(""),[p,g]=k.useState(!1);async function x(y){var w;y.preventDefault(),g(!0),f("");try{await Ze.post("/admin/auth/login",{username:n,password:s}),r("/admin")}catch(R){const B=(w=R==null?void 0:R.response)==null?void 0:w.status;f(B===429?"Bạn thử quá nhiều lần. Vui lòng đợi vài phút rồi thử lại.":B===401||B===400?"Sai tài khoản hoặc mật khẩu.":"Không kết nối được máy chủ. Vui lòng thử lại.")}finally{g(!1)}}return h.jsxs("div",{className:"min-h-screen bg-[#080b12] text-slate-100 flex items-center justify-center p-5",children:[h.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden",children:[h.jsx("div",{className:"absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"}),h.jsx("div",{className:"absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"})]}),h.jsxs("div",{className:"relative w-full max-w-[430px]",children:[h.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[h.jsx(Qp,{to:"/",className:"text-xs font-semibold text-slate-500 transition hover:text-cyan-300",children:"← Trang người dùng"}),h.jsx("span",{className:"rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500",children:"Admin Console"})]}),h.jsxs("div",{className:"rounded-3xl border border-slate-800 bg-[#0d121b]/95 p-7 shadow-2xl sm:p-9",children:[h.jsxs("div",{className:"mb-8 flex items-center gap-3",children:[h.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-xl font-black text-cyan-300",children:"K"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-black tracking-tight text-white",children:"KEN MOD Z"}),h.jsx("div",{className:"mt-0.5 text-[10px] font-bold uppercase tracking-[.2em] text-slate-500",children:"Management System"})]})]}),h.jsx("h1",{className:"text-2xl font-black text-white",children:"Đăng nhập quản trị"}),h.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-500",children:"Đăng nhập để tiếp tục vào khu vực quản trị."}),h.jsxs("form",{onSubmit:x,className:"mt-7 space-y-4",children:[h.jsxs("label",{className:"block",children:[h.jsx("span",{className:"text-xs font-bold text-slate-400",children:"Tài khoản"}),h.jsx("input",{value:n,onChange:y=>o(y.target.value),className:"mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10",placeholder:"Tài khoản",autoComplete:"username"})]}),h.jsxs("label",{className:"block",children:[h.jsx("span",{className:"text-xs font-bold text-slate-400",children:"Mật khẩu"}),h.jsx("input",{value:s,onChange:y=>l(y.target.value),className:"mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10",type:"password",placeholder:"Mật khẩu",autoComplete:"current-password"})]}),d&&h.jsx("div",{className:"rounded-xl border border-rose-500/30 bg-rose-500/5 px-4 py-3 text-sm text-rose-300",children:d}),h.jsx("button",{disabled:p,className:"w-full rounded-xl bg-cyan-500 px-4 py-3.5 font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50",children:p?"Đang đăng nhập...":"Đăng nhập"})]}),h.jsxs("div",{className:"mt-6 flex items-center gap-3 border-t border-slate-800 pt-5 text-[11px] text-slate-600",children:[h.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),"Kết nối bảo mật · Admin API"]})]}),h.jsx("p",{className:"mt-5 text-center text-xs text-slate-700",children:"Ken Mod Z · Admin Dashboard"})]})]})}const hp=h.jsx("div",{className:"min-h-screen bg-[#080b12]"});class Tw extends k.Component{constructor(){super(...arguments);sh(this,"state",{error:null,stack:null})}static getDerivedStateFromError(o){return{error:o}}componentDidCatch(o,s){yw(o,s.componentStack),this.setState({stack:s.componentStack??null})}componentDidUpdate(o){this.state.error&&o.resetKey!==this.props.resetKey&&this.setState({error:null,stack:null})}render(){const{error:o,stack:s}=this.state;if(!o)return this.props.children;const l=/dynamically imported module|Loading chunk|Importing a module script failed|Failed to fetch/i.test(o.message);return h.jsx("div",{className:"flex min-h-screen items-center justify-center bg-[#080b12] p-6 text-slate-100",children:h.jsxs("div",{className:"w-full max-w-xl rounded-2xl border border-red-500/30 bg-[#0b0f17] p-6 shadow-2xl shadow-black/50",children:[h.jsx("div",{className:"mb-1 text-[10px] font-black uppercase tracking-[.2em] text-red-400",children:"Lỗi hiển thị trang admin"}),h.jsx("h2",{className:"text-lg font-black text-white",children:l?"Không tải được mã của trang này":"Trang gặp lỗi và không thể hiển thị"}),h.jsx("p",{className:"mt-2 text-sm text-slate-400",children:l?"Có thể bạn vừa cập nhật phiên bản mới hoặc mạng bị gián đoạn. Hãy tải lại trang.":"Lỗi này đã được ghi vào Debug Console kèm stack trace. Bạn có thể tải lại trang hoặc mở Debug Console để xem chi tiết."}),h.jsxs("pre",{className:"mt-4 max-h-40 overflow-auto whitespace-pre-wrap break-words rounded-xl border border-red-500/20 bg-red-500/[.05] p-3 font-mono text-[11px] text-red-200",children:[o.name,": ",o.message]}),s&&h.jsxs("details",{className:"mt-3 text-[11px] text-slate-500",children:[h.jsx("summary",{className:"cursor-pointer select-none font-bold text-slate-400",children:"Vị trí component"}),h.jsx("pre",{className:"mt-2 max-h-40 overflow-auto whitespace-pre-wrap break-words font-mono text-[10.5px]",children:s})]}),h.jsxs("div",{className:"mt-5 flex flex-wrap gap-2",children:[h.jsx("button",{type:"button",onClick:()=>window.location.reload(),className:"rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300 hover:bg-cyan-400/20",children:"Tải lại trang"}),h.jsx("a",{href:"/admin/debug",className:"rounded-xl border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300 hover:bg-slate-800",children:"Mở Debug Console"}),h.jsx("a",{href:"/admin",className:"rounded-xl border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300 hover:bg-slate-800",children:"Về tổng quan"})]})]})})}}function Ow(){const[r,n]=k.useState("checking"),o=Xn();return k.useEffect(()=>{let s=!0;return Ze.get("/admin/auth/me").then(()=>{s&&(xw(),n("ok"))}).catch(()=>s&&n("denied")),()=>{s=!1}},[]),r==="checking"?hp:r==="denied"?h.jsx(Jy,{to:"/admin/login",replace:!0}):h.jsx(k.Suspense,{fallback:hp,children:h.jsx(Tw,{resetKey:o.pathname,children:h.jsx(Yy,{})})})}const jg="kmz.ann.dismissed",Iw=300*1e3,pp={UPDATE:{icon:"✨",cls:"update",label:"Cập nhật"},INFO:{icon:"ℹ️",cls:"info",label:"Thông tin"},WARN:{icon:"🛠️",cls:"warn",label:"Sắp bảo trì"},DANGER:{icon:"⚠️",cls:"danger",label:"Sự cố"},OK:{icon:"✅",cls:"ok",label:"Đã khắc phục"}},Tg=r=>pp[r]??pp.INFO;function Aw(){try{const r=localStorage.getItem(jg),n=r?JSON.parse(r):{};return n&&typeof n=="object"?n:{}}catch{return{}}}function gp(r){try{localStorage.setItem(jg,JSON.stringify(r))}catch{}}function Og(r){const n=(r??"").trim();return n&&(n.startsWith("/")&&!n.startsWith("//")||/^https:\/\//i.test(n))?n:null}function Dw(){return h.jsx("style",{children:`
      .ann-stack { position: relative; z-index: 60; }
      .ann-bar { display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px; font-size: 13px; line-height: 1.5; border-bottom: 1px solid transparent; text-align: left; }
      .ann-bar .ico { flex: none; font-size: 16px; line-height: 1.35; }
      .ann-bar .txt { flex: 1; min-width: 0; overflow-wrap: anywhere; white-space: pre-line; }
      .ann-bar .txt b { color: #fff; }
      .ann-bar .txt a { color: inherit; text-decoration: underline; text-underline-offset: 2px; font-weight: 700; white-space: normal; }
      .ann-bar .x { flex: none; border: 0; background: transparent; color: inherit; opacity: .7; font-size: 20px; line-height: 1; padding: 0 6px; border-radius: 6px; cursor: pointer; min-width: 28px; min-height: 28px; }
      .ann-bar .x:hover { opacity: 1; background: rgba(255,255,255,.08); }
      .ann-bar.update { background: #1c1536; border-bottom-color: rgba(139,92,246,.35); color: #e1d6ff; }
      .ann-bar.info { background: #101b36; border-bottom-color: rgba(91,140,255,.32); color: #cfdcff; }
      .ann-bar.warn { background: #2b2410; border-bottom-color: rgba(251,191,36,.34); color: #ffe3a0; }
      .ann-bar.danger { background: #2e1417; border-bottom-color: rgba(248,113,113,.36); color: #ffc2c2; }
      .ann-bar.ok { background: #0f2a22; border-bottom-color: rgba(49,212,155,.32); color: #b6f5dc; }

      .ann-overlay { position: fixed; inset: 0; z-index: 200; display: flex; align-items: center; justify-content: center; padding: 16px; background: rgba(3,5,10,.72); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
      .ann-modal { width: min(480px, 100%); max-height: 92vh; overflow: auto; border-radius: 18px; border: 1px solid rgba(139,92,246,.30); background: rgba(18,22,34,.98); box-shadow: 0 30px 80px rgba(0,0,0,.55); color: #f4f7fb; text-align: left; }
      .ann-modal-head { padding: 18px 18px 4px; display: flex; gap: 12px; align-items: flex-start; }
      .ann-badge { flex: none; width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; font-size: 20px; background: linear-gradient(145deg, rgba(139,92,246,.35), rgba(91,140,255,.2)); border: 1px solid rgba(255,255,255,.12); }
      .ann-modal h3 { margin: 0; font-size: 16px; line-height: 1.35; overflow-wrap: anywhere; }
      .ann-modal .sub { color: #657086; font-size: 11.5px; margin-top: 2px; }
      .ann-modal ul { margin: 10px 18px 4px; padding: 0; list-style: none; display: grid; gap: 9px; }
      .ann-modal li { display: flex; gap: 10px; font-size: 13px; line-height: 1.5; color: #d3dae8; overflow-wrap: anywhere; }
      .ann-modal li > span:last-child { min-width: 0; }
      .ann-tag { flex: none; align-self: flex-start; font-size: 10px; font-weight: 900; letter-spacing: .04em; border-radius: 6px; padding: 2px 6px; margin-top: 2px; }
      .ann-tag.new { background: rgba(49,212,155,.14); color: #6ee7b7; border: 1px solid rgba(49,212,155,.3); }
      .ann-tag.fix { background: rgba(91,140,255,.14); color: #9db8ff; border: 1px solid rgba(91,140,255,.3); }
      .ann-tag.imp { background: rgba(251,191,36,.12); color: #fcd34d; border: 1px solid rgba(251,191,36,.3); }
      .ann-modal-foot { padding: 14px 18px 18px; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
      .ann-chk { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #8e98aa; cursor: pointer; }
      .ann-chk input { accent-color: #8b5cf6; width: 16px; height: 16px; }
      .ann-btn { min-height: 40px; display: inline-flex; align-items: center; justify-content: center; border-radius: 12px; padding: 0 16px; font-size: 13px; font-weight: 800; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.03); color: #b9c2d2; text-decoration: none; cursor: pointer; }
      .ann-btn.primary { border-color: rgba(139,92,246,.40); background: linear-gradient(135deg, #8b5cf6, #5b8cff); color: #fff; box-shadow: 0 8px 24px rgba(91,140,255,.18); }
      .ann-actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
      @media (max-width: 520px) { .ann-bar { padding: 9px 12px; font-size: 12.5px; } .ann-modal-foot .ann-actions { width: 100%; } .ann-modal-foot .ann-btn { flex: 1; } }
    `})}function Lw({a:r,onClose:n}){const o=Tg(r.level),s=Og(r.linkUrl);return h.jsxs("div",{className:`ann-bar ${o.cls}`,role:"status",children:[h.jsx("span",{className:"ico","aria-hidden":"true",children:o.icon}),h.jsxs("span",{className:"txt",children:[h.jsxs("b",{children:[r.title,":"]})," ",r.body,s&&h.jsxs(h.Fragment,{children:[" ",h.jsx("a",{href:s,target:s.startsWith("/")?void 0:"_blank",rel:"noopener noreferrer",children:r.linkText||"Xem chi tiết"})]})]}),r.dismissible&&n&&h.jsx("button",{type:"button",className:"x","aria-label":"Tắt thông báo",onClick:n,children:"×"})]})}const zw=[{re:/^\[(MỚI|MOI|NEW)\]\s*/i,cls:"new",text:"MỚI"},{re:/^\[(SỬA|SUA|FIX)\]\s*/i,cls:"fix",text:"SỬA"},{re:/^\[(LƯU Ý|LUU Y|NOTE)\]\s*/i,cls:"imp",text:"LƯU Ý"}];function Mw(r){for(const n of zw)if(n.re.test(r))return{tag:n,text:r.replace(n.re,"")};return{tag:null,text:r}}function Uw({a:r,dontShowAgain:n,onToggleDontShow:o,onClose:s}){const l=Tg(r.level),d=Og(r.linkUrl),f=r.body.split(`
`).map(p=>p.trim()).filter(Boolean);return h.jsxs("div",{className:"ann-modal",role:"dialog","aria-modal":"true","aria-label":r.title,children:[h.jsxs("div",{className:"ann-modal-head",children:[h.jsx("div",{className:"ann-badge","aria-hidden":"true",children:l.icon}),h.jsxs("div",{children:[h.jsx("h3",{children:r.title}),h.jsx("div",{className:"sub",children:l.label})]})]}),h.jsx("ul",{children:f.map((p,g)=>{const x=Mw(p);return h.jsxs("li",{children:[x.tag&&h.jsx("span",{className:`ann-tag ${x.tag.cls}`,children:x.tag.text}),h.jsx("span",{children:x.text})]},g)})}),h.jsxs("div",{className:"ann-modal-foot",children:[h.jsxs("label",{className:"ann-chk",children:[h.jsx("input",{type:"checkbox",checked:n,onChange:p=>o(p.target.checked)}),"Không hiện lại"]}),h.jsxs("div",{className:"ann-actions",children:[d&&h.jsx("a",{className:"ann-btn",href:d,target:d.startsWith("/")?void 0:"_blank",rel:"noopener noreferrer",children:r.linkText||"Xem chi tiết"}),h.jsx("button",{type:"button",className:"ann-btn primary",onClick:s,children:"Đã hiểu"})]})]})]})}function Fw(){const[r,n]=k.useState([]),[o,s]=k.useState(()=>Aw()),[l,d]=k.useState({}),[f,p]=k.useState(!0),g=k.useCallback(async()=>{try{const D=await Ze.get("/announcements");Array.isArray(D.data)&&n(D.data)}catch{}},[]);k.useEffect(()=>{g();const D=window.setInterval(()=>{document.hidden||g()},Iw),A=()=>{document.hidden||g()};return document.addEventListener("visibilitychange",A),()=>{window.clearInterval(D),document.removeEventListener("visibilitychange",A)}},[g]),k.useEffect(()=>{if(r.length===0)return;const D=new Set(r.map(I=>String(I.id))),A=Object.fromEntries(Object.entries(o).filter(([I])=>D.has(I)));Object.keys(A).length!==Object.keys(o).length&&(s(A),gp(A))},[r]);const x=k.useMemo(()=>r.filter(D=>!(D.dismissible&&o[String(D.id)]===D.stamp)),[r,o]),y=x.filter(D=>D.placement!=="MODAL").slice(0,3),w=x.find(D=>D.placement==="MODAL"&&!l[D.id])??null;function R(D){const A={...o,[String(D.id)]:D.stamp};s(A),gp(A)}function B(D){f&&R(D),d(A=>({...A,[D.id]:!0}))}return y.length===0&&!w?null:h.jsxs(h.Fragment,{children:[h.jsx(Dw,{}),y.length>0&&h.jsx("div",{className:"ann-stack",children:y.map(D=>h.jsx(Lw,{a:D,onClose:()=>R(D)},D.id))}),w&&h.jsx("div",{className:"ann-overlay",onClick:D=>{D.target===D.currentTarget&&B(w)},children:h.jsx(Uw,{a:w,dontShowAgain:f,onToggleDontShow:p,onClose:()=>B(w)})})]})}const $w="kmz.gate",Bw="ubsb.activeJob",mp="kmz.maint.dismissed";function Ig(){let r="",n="";try{const o=JSON.parse(localStorage.getItem($w)||"null");o!=null&&o.id&&(r=String(o.id))}catch{}try{n=sessionStorage.getItem(Bw)||""}catch{}return{gate:r,job:n}}function is(r){if(!r)return"";const n=new Date(r);return Number.isNaN(n.getTime())?"":n.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})}function Ag(r){const n=Math.ceil(r/6e4);if(n<=1)return"dưới 1 phút";if(n<60)return`khoảng ${n} phút`;const o=Math.floor(n/60),s=n%60;return s===0?`khoảng ${o} giờ`:`khoảng ${o} giờ ${s} phút`}function Hw(){const[r,n]=k.useState(null),[o,s]=k.useState(!1),[l,d]=k.useState(0),[f,p]=k.useState(0),g=k.useRef(0),x=k.useRef("off"),y=k.useRef(!1),w=k.useRef(void 0),R=k.useRef(async()=>{});k.useEffect(()=>{let D=!0;const A=()=>{if(!D)return;let T=3e4;y.current?T=4e3:x.current==="draining"?T=6e3:x.current==="scheduled"&&(T=1e4),document.hidden&&(T=Math.max(T,3e4)),w.current=window.setTimeout(()=>void I(),T+Math.random()*3e3)},I=async()=>{window.clearTimeout(w.current);try{const{gate:T,job:M}=Ig(),U=await Ze.get("/system/status",{params:{gate:T||void 0,job:M||void 0},timeout:8e3});if(!D)return;const V=U.data;g.current=0,y.current=!1,x.current=V.state,s(!1),n(V),d(Date.now()),V.serverTime&&p(new Date(V.serverTime).getTime()-Date.now())}catch{if(!D)return;g.current+=1,g.current>=2&&(y.current=!0,s(!0)),d(Date.now())}A()};R.current=I,I();const N=()=>{document.hidden||I()};return document.addEventListener("visibilitychange",N),()=>{D=!1,window.clearTimeout(w.current),document.removeEventListener("visibilitychange",N)}},[]);const B=k.useCallback(()=>R.current(),[]);return{status:r,offline:o,checkedAt:l,skew:f,recheck:B}}function Ww(r,n){const[o,s]=k.useState(()=>Date.now());return k.useEffect(()=>{if(!n)return;const l=window.setInterval(()=>s(Date.now()),r);return()=>window.clearInterval(l)},[r,n]),o}function Vw(){return h.jsx("style",{children:`
      .mt-bar { position: sticky; top: 0; z-index: 58; display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px; font-size: 13px; line-height: 1.5; text-align: left; border-bottom: 1px solid transparent; }
      .mt-bar .ico { flex: none; font-size: 16px; line-height: 1.35; }
      .mt-bar .txt { flex: 1; min-width: 0; overflow-wrap: anywhere; }
      .mt-bar .txt b { color: #fff; }
      .mt-bar .x { flex: none; border: 0; background: transparent; color: inherit; opacity: .7; font-size: 20px; line-height: 1; padding: 0 6px; border-radius: 6px; cursor: pointer; min-width: 28px; min-height: 28px; }
      .mt-bar .x:hover { opacity: 1; background: rgba(255,255,255,.08); }
      .mt-bar.warn { background: #2b2410; border-bottom-color: rgba(251,191,36,.34); color: #ffe3a0; }
      .mt-bar.info { background: #101b36; border-bottom-color: rgba(91,140,255,.32); color: #cfdcff; }
      .mt-bar.ok { background: #0f2a22; border-bottom-color: rgba(49,212,155,.32); color: #b6f5dc; }

      .mt-overlay { position: fixed; inset: 0; z-index: 300; display: grid; place-items: center; padding: 20px; overflow-y: auto;
        background: radial-gradient(900px 480px at 50% -10%, rgba(46,242,255,.10), transparent 60%), rgba(6,8,14,.94); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
      .mt-card { width: min(520px, 100%); text-align: left; color: #e9eef7; border-radius: 22px; border: 1px solid rgba(46,242,255,.22); background: rgba(14,19,29,.96); padding: 26px 24px 22px; box-shadow: 0 30px 90px rgba(0,0,0,.55); outline: none; }
      .mt-card h2 { margin: 0 0 8px; font-size: 22px; line-height: 1.25; font-weight: 800; color: #fff; }
      .mt-card p.msg { margin: 0; font-size: 14.5px; line-height: 1.65; color: #c3cddd; white-space: pre-line; overflow-wrap: anywhere; }
      .mt-gear { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; font-size: 22px; margin-bottom: 14px; background: linear-gradient(145deg, rgba(46,242,255,.22), rgba(139,92,246,.22)); border: 1px solid rgba(255,255,255,.12); }
      .mt-facts { margin: 18px 0 0; padding: 0; display: grid; gap: 1px; border-radius: 14px; overflow: hidden; background: rgba(255,255,255,.07); }
      .mt-facts > div { display: flex; justify-content: space-between; gap: 12px; align-items: baseline; padding: 11px 14px; background: #0f1520; font-size: 13.5px; }
      .mt-facts dt { color: #8d99ad; }
      .mt-facts dd { margin: 0; font-weight: 700; color: #fff; text-align: right; font-variant-numeric: tabular-nums; }
      .mt-facts dd small { display: block; font-weight: 500; color: #8d99ad; font-size: 12px; }
      .mt-assure { margin: 16px 0 0; font-size: 13px; line-height: 1.6; color: #9aa7bb; }
      .mt-foot { margin-top: 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; font-size: 12px; color: #7d899c; }
      .mt-btn { min-height: 40px; display: inline-flex; align-items: center; justify-content: center; border-radius: 12px; padding: 0 16px; font-size: 13px; font-weight: 800; border: 1px solid rgba(46,242,255,.35); background: rgba(46,242,255,.08); color: #8cf6ff; cursor: pointer; }
      .mt-btn:hover { background: rgba(46,242,255,.16); }
      .mt-btn:focus-visible { outline: 2px solid #2ef2ff; outline-offset: 2px; }
      .mt-pulse { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #2ef2ff; margin-right: 8px; animation: mt-pulse 1.6s ease-in-out infinite; }
      @keyframes mt-pulse { 0%,100% { opacity: .35; transform: scale(.85); } 50% { opacity: 1; transform: scale(1); } }
      @media (prefers-reduced-motion: reduce) { .mt-pulse { animation: none; opacity: 1; } }
      @media (max-width: 520px) { .mt-card { padding: 22px 18px 18px; border-radius: 18px; } .mt-card h2 { font-size: 20px; } .mt-bar { padding: 9px 12px; font-size: 12.5px; } }
    `})}function qw({mode:r,message:n,startAt:o,eta:s,now:l,checkedAt:d,onRetry:f}){const p=s?new Date(s).getTime():NaN,g=Number.isFinite(p),x=g?p-l:0;return h.jsxs("div",{className:"mt-card",role:"dialog","aria-modal":"true","aria-labelledby":"mt-title",tabIndex:-1,children:[h.jsx("div",{className:"mt-gear","aria-hidden":"true",children:r==="restarting"?"🔄":"🛠️"}),h.jsx("h2",{id:"mt-title",children:r==="restarting"?"Hệ thống đang khởi động lại":"Hệ thống đang bảo trì"}),h.jsx("p",{className:"msg",children:r==="restarting"?"Chỉ mất một lát thôi. Trang sẽ tự kết nối lại, bạn không cần tải lại.":n}),r==="blocked"&&(o||g)&&h.jsxs("dl",{className:"mt-facts",children:[o&&h.jsxs("div",{children:[h.jsx("dt",{children:"Bắt đầu bảo trì"}),h.jsx("dd",{children:is(o)})]}),g&&h.jsxs("div",{children:[h.jsx("dt",{children:"Dự kiến mở lại"}),h.jsxs("dd",{children:[is(s),h.jsx("small",{children:x>0?`còn ${Ag(x)}`:"sắp xong, đang chờ hệ thống mở lại"})]})]})]}),h.jsx("p",{className:"mt-assure",children:r==="restarting"?"Việc bạn đang làm vẫn được giữ nguyên.":"Bạn không mất gì cả. Khi hệ thống mở lại, trang này tự biến mất và bạn dùng tiếp như bình thường."}),h.jsxs("div",{className:"mt-foot",children:[h.jsxs("span",{children:[h.jsx("span",{className:"mt-pulse","aria-hidden":"true"}),"Đang tự kiểm tra",d?`, lần gần nhất ${new Date(d).toLocaleTimeString("vi-VN")}`:""]}),f&&h.jsx("button",{type:"button",className:"mt-btn",onClick:f,children:"Kiểm tra ngay"})]})]})}function ts({tone:r,icon:n,onClose:o,children:s}){return h.jsxs("div",{className:`mt-bar ${r}`,role:"status",children:[h.jsx("span",{className:"ico","aria-hidden":"true",children:n}),h.jsx("span",{className:"txt",children:s}),o&&h.jsx("button",{type:"button",className:"x","aria-label":"Đóng",onClick:o,children:"×"})]})}function Kw(){const{status:r,offline:n,checkedAt:o,skew:s,recheck:l}=Hw(),[d,f]=k.useState(()=>{try{return sessionStorage.getItem(mp)||""}catch{return""}}),[p,g]=k.useState(!1),x=k.useRef(!1),y=!!r&&r.blocking&&r.you==="new",{gate:w,job:R}=Ig(),B=!!w||!!R,D=n&&!B&&!y,A=y||D,I=A||!!r&&r.state!=="off",N=Ww(1e3,I)+s;k.useEffect(()=>{if(A)x.current=!0;else if(x.current&&r&&r.state==="off"&&!n){x.current=!1,g(!0);const G=window.setTimeout(()=>g(!1),7e3);return()=>window.clearTimeout(G)}},[A,r,n]),k.useEffect(()=>{if(!A)return;const G=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=G}},[A]);const T=k.useRef(null);k.useEffect(()=>{var G,se;A&&((se=(G=T.current)==null?void 0:G.querySelector(".mt-card"))==null||se.focus())},[A]);const M=r!=null&&r.startAt?`${r.state}:${r.startAt}`:"",U=()=>{f(M);try{sessionStorage.setItem(mp,M)}catch{}};if(!r&&!n)return null;let V=null;if(p)V=h.jsxs(ts,{tone:"ok",icon:"✅",onClose:()=>g(!1),children:[h.jsx("b",{children:"Hệ thống đã mở lại."})," Mời bạn tiếp tục như bình thường."]});else if(!A&&n&&B)V=h.jsxs(ts,{tone:"info",icon:"🔄",children:[h.jsx("b",{children:"Đang kết nối lại với hệ thống…"})," Việc bạn đang làm vẫn được giữ, trang sẽ tự cập nhật khi kết nối trở lại."]});else if(r&&r.state==="scheduled"&&r.you!=="admin"&&d!==M){const se=new Date(r.startAt||0).getTime()-N;V=h.jsxs(ts,{tone:"warn",icon:"🛠️",onClose:U,children:[h.jsxs("b",{children:["Sắp bảo trì lúc ",is(r.startAt)]}),se>0?` (còn ${Ag(se)})`:"",". Từ giờ đó người mới chưa vào được; bạn nào đã lấy mã vẫn dùng tiếp bình thường. Nếu bạn định tạo tệp, nên bắt đầu sớm."]})}else r&&r.blocking&&r.you==="member"?V=h.jsxs(ts,{tone:"warn",icon:"🛠️",children:[h.jsx("b",{children:"Hệ thống đang bảo trì, riêng bạn vẫn dùng bình thường."})," ",r.memberUntil?`Mã của bạn còn hiệu lực đến ${is(r.memberUntil)}, `:"","hãy hoàn tất sớm để tránh phải chờ hệ thống mở lại."]}):r&&r.state!=="off"&&r.you==="admin"&&(V=h.jsxs(ts,{tone:"info",icon:"🛠️",children:[h.jsxs("b",{children:["Chế độ bảo trì đang ",r.blocking?"bật":"hẹn giờ","."]})," Bạn là admin nên vẫn dùng bình thường; người dùng thường sẽ"," ",r.blocking?"thấy trang bảo trì":`thấy trang bảo trì từ ${is(r.startAt)}`,"."]}));return h.jsxs(h.Fragment,{children:[h.jsx(Vw,{}),V,A&&h.jsx("div",{className:"mt-overlay",ref:T,children:h.jsx(qw,{mode:D?"restarting":"blocked",message:r==null?void 0:r.message,startAt:r==null?void 0:r.startAt,eta:r==null?void 0:r.eta,now:N,checkedAt:o,onRetry:()=>void l()})})]})}const Qw=k.lazy(()=>It(()=>import("./admin-CharactersPage-qN7BKnJn.js"),__vite__mapDeps([0,1,2]))),Xw=k.lazy(()=>It(()=>import("./admin-CharacterEditPage-C4p_8ejt.js"),__vite__mapDeps([3,1,2,4]))),Gw=k.lazy(()=>It(()=>import("./admin-ItemsPage-Kpbq_CYe.js"),__vite__mapDeps([5,1,6,2,4]))),Jw=k.lazy(()=>It(()=>import("./admin-VfxPage-DWUXRtcx.js"),__vite__mapDeps([7,1,6,2]))),Yw=k.lazy(()=>It(()=>import("./admin-AnnouncementsPage-DDMcuA2n.js"),__vite__mapDeps([8,1]))),Zw=k.lazy(()=>It(()=>import("./admin-MaintenancePage-gLyCNgMZ.js"),__vite__mapDeps([9,1]))),eb=k.lazy(()=>It(()=>import("./admin-CoveragePage-CWJTrClm.js"),__vite__mapDeps([10,1]))),tb=k.lazy(()=>It(()=>import("./admin-SettingsPage-CIb4-bvO.js"),__vite__mapDeps([11,1]))),nb=k.lazy(()=>It(()=>import("./admin-PasswordPage-Bmp5rwgi.js"),__vite__mapDeps([12,1]))),rb=k.lazy(()=>It(()=>import("./admin-SystemTestPage-0NuCApem.js"),__vite__mapDeps([13,1]))),ib=k.lazy(()=>It(()=>import("./admin-DebugConsolePage-InOkmS-D.js"),__vite__mapDeps([14,1]))),ob=k.lazy(()=>It(()=>import("./admin-CachePage-TCfNVRM_.js"),__vite__mapDeps([15,1]))),sb=k.lazy(()=>It(()=>import("./admin-TextureCachePage-EGvAsJz2.js"),__vite__mapDeps([16,1,17]))),ab=k.lazy(()=>It(()=>import("./admin-TextureSharedPage-DuoB3DFs.js"),__vite__mapDeps([18,1,17]))),lb=k.lazy(()=>It(()=>import("./admin-CleanupPage-D--zCLeu.js"),__vite__mapDeps([19,1])));function cb(){const r=Xn(),n=r.pathname.startsWith("/admin");return h.jsxs("div",{className:n?"admin-shell min-h-screen":"user-shell min-h-screen",children:[!n&&r.pathname!=="/get-key"&&h.jsx(Fw,{}),!n&&r.pathname!=="/get-key"&&h.jsx(Kw,{}),h.jsxs(ex,{children:[h.jsx(nt,{path:"/",element:h.jsx(Rw,{})}),h.jsx(nt,{path:"/get-key",element:h.jsx(Nw,{})}),h.jsx(nt,{path:"/admin/login",element:h.jsx(jw,{})}),h.jsxs(nt,{element:h.jsx(Ow,{}),children:[h.jsx(nt,{path:"/admin",element:h.jsx(Qw,{})}),h.jsx(nt,{path:"/admin/characters/:id",element:h.jsx(Xw,{})}),h.jsx(nt,{path:"/admin/items",element:h.jsx(Gw,{})}),h.jsx(nt,{path:"/admin/vfx",element:h.jsx(Jw,{})}),h.jsx(nt,{path:"/admin/announcements",element:h.jsx(Yw,{})}),h.jsx(nt,{path:"/admin/maintenance",element:h.jsx(Zw,{})}),h.jsx(nt,{path:"/admin/coverage",element:h.jsx(eb,{})}),h.jsx(nt,{path:"/admin/settings",element:h.jsx(tb,{})}),h.jsx(nt,{path:"/admin/password",element:h.jsx(nb,{})}),h.jsx(nt,{path:"/admin/system-test",element:h.jsx(rb,{})}),h.jsx(nt,{path:"/admin/debug",element:h.jsx(ib,{})}),h.jsx(nt,{path:"/admin/cache",element:h.jsx(ob,{})}),h.jsx(nt,{path:"/admin/texture-cache",element:h.jsx(sb,{})}),h.jsx(nt,{path:"/admin/texture-shared",element:h.jsx(ab,{})}),h.jsx(nt,{path:"/admin/cleanup",element:h.jsx(lb,{})})]})]})]})}const ub=new ly;O0.createRoot(document.getElementById("root")).render(h.jsx(Rp.StrictMode,{children:h.jsx(A0,{client:ub,children:h.jsx(cx,{children:h.jsx(cb,{})})})}));export{Ng as A,Qp as L,Vw as M,hb as N,Oa as S,vw as V,Ze as a,Ua as b,lp as c,Ma as d,Dw as e,Lw as f,Uw as g,is as h,qw as i,h as j,Qe as k,Tg as l,Db as m,zb as n,Lb as o,Ga as p,Xn as q,k as r,Ag as s,wr as t,fb as u};
