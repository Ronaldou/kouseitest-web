(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Em={exports:{}},Xa={},Tm={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),r0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),s0=Symbol.for("react.strict_mode"),o0=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),c0=Symbol.for("react.suspense"),h0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),hf=Symbol.iterator;function f0(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Am={};function _i(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||Im}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function km(){}km.prototype=_i.prototype;function zc(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||Im}var Bc=zc.prototype=new km;Bc.constructor=zc;Sm(Bc,_i.prototype);Bc.isPureReactComponent=!0;var df=Array.isArray,xm=Object.prototype.hasOwnProperty,$c={current:null},Pm={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)xm.call(e,r)&&!Pm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zs,type:t,key:s,ref:a,props:i,_owner:$c.current}}function p0(t,e){return{$$typeof:zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hc(t){return typeof t=="object"&&t!==null&&t.$$typeof===zs}function m0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ff=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m0(""+t.key):e.toString(36)}function $o(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case zs:case r0:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Xl(a,0):r,df(i)?(n="",t!=null&&(n=t.replace(ff,"$&/")+"/"),$o(i,e,n,"",function(d){return d})):i!=null&&(Hc(i)&&(i=p0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ff,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",df(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+Xl(s,l);a+=$o(s,e,n,c,i)}else if(c=f0(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+Xl(s,l++),a+=$o(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function wo(t,e,n){if(t==null)return t;var r=[],i=0;return $o(t,r,"","",function(s){return e.call(n,s,i++)}),r}function g0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var et={current:null},Ho={transition:null},y0={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:$c};function Rm(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:wo,forEach:function(t,e,n){wo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wo(t,function(){e++}),e},toArray:function(t){return wo(t,function(e){return e})||[]},only:function(t){if(!Hc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=_i;Q.Fragment=i0;Q.Profiler=o0;Q.PureComponent=zc;Q.StrictMode=s0;Q.Suspense=c0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;Q.act=Rm;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sm({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=$c.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)xm.call(e,c)&&!Pm.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:zs,type:t.type,key:i,ref:s,props:r,_owner:a}};Q.createContext=function(t){return t={$$typeof:l0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a0,_context:t},t.Consumer=t};Q.createElement=Cm;Q.createFactory=function(t){var e=Cm.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:u0,render:t}};Q.isValidElement=Hc;Q.lazy=function(t){return{$$typeof:d0,_payload:{_status:-1,_result:t},_init:g0}};Q.memo=function(t,e){return{$$typeof:h0,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Ho.transition;Ho.transition={};try{t()}finally{Ho.transition=e}};Q.unstable_act=Rm;Q.useCallback=function(t,e){return et.current.useCallback(t,e)};Q.useContext=function(t){return et.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return et.current.useDeferredValue(t)};Q.useEffect=function(t,e){return et.current.useEffect(t,e)};Q.useId=function(){return et.current.useId()};Q.useImperativeHandle=function(t,e,n){return et.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return et.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return et.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return et.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return et.current.useReducer(t,e,n)};Q.useRef=function(t){return et.current.useRef(t)};Q.useState=function(t){return et.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return et.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return et.current.useTransition()};Q.version="18.3.1";Tm.exports=Q;var gt=Tm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=gt,_0=Symbol.for("react.element"),w0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,T0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)E0.call(e,r)&&!I0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_0,type:t,key:s,ref:a,props:i,_owner:T0.current}}Xa.Fragment=w0;Xa.jsx=Nm;Xa.jsxs=Nm;Em.exports=Xa;var k=Em.exports,Dm={exports:{}},ft={},Om={exports:{}},bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var q=z.length;z.push(K);e:for(;0<q;){var he=q-1>>>1,ne=z[he];if(0<i(ne,K))z[he]=K,z[q]=ne,q=he;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],q=z.pop();if(q!==K){z[0]=q;e:for(var he=0,ne=z.length,_e=ne>>>1;he<_e;){var qt=2*(he+1)-1,Gt=z[qt],Qt=qt+1,Lt=z[Qt];if(0>i(Gt,q))Qt<ne&&0>i(Lt,Gt)?(z[he]=Lt,z[Qt]=q,he=Qt):(z[he]=Gt,z[qt]=q,he=qt);else if(Qt<ne&&0>i(Lt,q))z[he]=Lt,z[Qt]=q,he=Qt;else break e}}return K}function i(z,K){var q=z.sortIndex-K.sortIndex;return q!==0?q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],m=1,v=null,g=3,C=!1,N=!1,O=!1,F=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var K=n(d);K!==null;){if(K.callback===null)r(d);else if(K.startTime<=z)r(d),K.sortIndex=K.expirationTime,e(c,K);else break;K=n(d)}}function D(z){if(O=!1,S(z),!N)if(n(c)!==null)N=!0,ki(U);else{var K=n(d);K!==null&&Kt(D,K.startTime-z)}}function U(z,K){N=!1,O&&(O=!1,E(p),p=-1),C=!0;var q=g;try{for(S(K),v=n(c);v!==null&&(!(v.expirationTime>K)||z&&!A());){var he=v.callback;if(typeof he=="function"){v.callback=null,g=v.priorityLevel;var ne=he(v.expirationTime<=K);K=t.unstable_now(),typeof ne=="function"?v.callback=ne:v===n(c)&&r(c),S(K)}else r(c);v=n(c)}if(v!==null)var _e=!0;else{var qt=n(d);qt!==null&&Kt(D,qt.startTime-K),_e=!1}return _e}finally{v=null,g=q,C=!1}}var j=!1,w=null,p=-1,_=5,T=-1;function A(){return!(t.unstable_now()-T<_)}function P(){if(w!==null){var z=t.unstable_now();T=z;var K=!0;try{K=w(!0,z)}finally{K?I():(j=!1,w=null)}}else j=!1}var I;if(typeof y=="function")I=function(){y(P)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,nr=mt.port2;mt.port1.onmessage=P,I=function(){nr.postMessage(null)}}else I=function(){F(P,0)};function ki(z){w=z,j||(j=!0,I())}function Kt(z,K){p=F(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){N||C||(N=!0,ki(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var q=g;g=K;try{return z()}finally{g=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=g;g=z;try{return K()}finally{g=q}},t.unstable_scheduleCallback=function(z,K,q){var he=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?he+q:he):q=he,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=q+ne,z={id:m++,callback:K,priorityLevel:z,startTime:q,expirationTime:ne,sortIndex:-1},q>he?(z.sortIndex=q,e(d,z),n(c)===null&&z===n(d)&&(O?(E(p),p=-1):O=!0,Kt(D,q-he))):(z.sortIndex=ne,e(c,z),N||C||(N=!0,ki(U))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var K=g;return function(){var q=g;g=K;try{return z.apply(this,arguments)}finally{g=q}}}})(bm);Om.exports=bm;var S0=Om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=gt,dt=S0;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,ms={};function Pr(t,e){oi(t,e),oi(t+"Capture",e)}function oi(t,e){for(ms[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=Object.prototype.hasOwnProperty,k0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pf={},mf={};function x0(t){return Du.call(mf,t)?!0:Du.call(pf,t)?!1:k0.test(t)?mf[t]=!0:(pf[t]=!0,!1)}function P0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C0(t,e,n,r){if(e===null||typeof e>"u"||P0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Me[t]=new tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Me[e]=new tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Me[t]=new tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Me[t]=new tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Me[t]=new tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Me[t]=new tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Me[t]=new tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Me[t]=new tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Me[t]=new tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wc=/[\-:]([a-z])/g;function Kc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wc,Kc);Me[e]=new tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wc,Kc);Me[e]=new tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wc,Kc);Me[e]=new tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Me[t]=new tt(t,1,!1,t.toLowerCase(),null,!1,!1)});Me.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Me[t]=new tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qc(t,e,n,r){var i=Me.hasOwnProperty(e)?Me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(C0(e,n,i,r)&&(n=null),r||i===null?x0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yn=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Mm=Symbol.for("react.context"),Qc=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),Xc=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),gf=Symbol.iterator;function Ui(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,Yl;function Xi(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var Jl=!1;function Zl(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xi(t):""}function R0(t){switch(t.tag){case 5:return Xi(t.type);case 16:return Xi("Lazy");case 13:return Xi("Suspense");case 19:return Xi("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fr:return"Fragment";case Mr:return"Portal";case Ou:return"Profiler";case Gc:return"StrictMode";case bu:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mm:return(t.displayName||"Context")+".Consumer";case Lm:return(t._context.displayName||"Context")+".Provider";case Qc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xc:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case Sn:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function N0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===Gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D0(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function To(t){t._valueTracker||(t._valueTracker=D0(t))}function Um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function la(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mu(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(t,e){e=e.checked,e!=null&&qc(t,"checked",e,!1)}function Fu(t,e){zm(t,e);var n=qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&ju(t,e.type,qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ju(t,e,n){(e!=="number"||la(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yi=Array.isArray;function Xr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _f(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(Yi(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qn(n)}}function Bm(t,e){var n=qn(e.value),r=qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $m(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$m(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Io,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O0=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(t){O0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ts[e]=ts[t]})});function Wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ts.hasOwnProperty(t)&&ts[t]?(""+e).trim():e+"px"}function Km(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var b0=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bu(t,e){if(e){if(b0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,Yr=null,Jr=null;function Ef(t){if(t=Hs(t)){if(typeof Wu!="function")throw Error(V(280));var e=t.stateNode;e&&(e=tl(e),Wu(t.stateNode,t.type,e))}}function qm(t){Yr?Jr?Jr.push(t):Jr=[t]:Yr=t}function Gm(){if(Yr){var t=Yr,e=Jr;if(Jr=Yr=null,Ef(t),e)for(t=0;t<e.length;t++)Ef(e[t])}}function Qm(t,e){return t(e)}function Xm(){}var eu=!1;function Ym(t,e,n){if(eu)return t(e,n);eu=!0;try{return Qm(t,e,n)}finally{eu=!1,(Yr!==null||Jr!==null)&&(Xm(),Gm())}}function ys(t,e){var n=t.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var Ku=!1;if(cn)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Ku=!1}function V0(t,e,n,r,i,s,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var ns=!1,ua=null,ca=!1,qu=null,L0={onError:function(t){ns=!0,ua=t}};function M0(t,e,n,r,i,s,a,l,c){ns=!1,ua=null,V0.apply(L0,arguments)}function F0(t,e,n,r,i,s,a,l,c){if(M0.apply(this,arguments),ns){if(ns){var d=ua;ns=!1,ua=null}else throw Error(V(198));ca||(ca=!0,qu=d)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tf(t){if(Cr(t)!==t)throw Error(V(188))}function j0(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Tf(i),t;if(s===r)return Tf(i),e;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function Zm(t){return t=j0(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eg(t);if(e!==null)return e;t=t.sibling}return null}var tg=dt.unstable_scheduleCallback,If=dt.unstable_cancelCallback,U0=dt.unstable_shouldYield,z0=dt.unstable_requestPaint,we=dt.unstable_now,B0=dt.unstable_getCurrentPriorityLevel,Jc=dt.unstable_ImmediatePriority,ng=dt.unstable_UserBlockingPriority,ha=dt.unstable_NormalPriority,$0=dt.unstable_LowPriority,rg=dt.unstable_IdlePriority,Ya=null,Ut=null;function H0(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Ya,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:q0,W0=Math.log,K0=Math.LN2;function q0(t){return t>>>=0,t===0?32:31-(W0(t)/K0|0)|0}var So=64,Ao=4194304;function Ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function da(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ji(l):(s&=a,s!==0&&(r=Ji(s)))}else a=n&~i,a!==0?r=Ji(a):s!==0&&(r=Ji(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function G0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Nt(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=G0(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function X0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var og,eh,ag,lg,ug,Qu=!1,ko=[],bn=null,Vn=null,Ln=null,vs=new Map,_s=new Map,kn=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(t,e){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(e.pointerId)}}function Bi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hs(e),e!==null&&eh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function J0(t,e,n,r,i){switch(e){case"focusin":return bn=Bi(bn,t,e,n,r,i),!0;case"dragenter":return Vn=Bi(Vn,t,e,n,r,i),!0;case"mouseover":return Ln=Bi(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vs.set(s,Bi(vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_s.set(s,Bi(_s.get(s)||null,t,e,n,r,i)),!0}return!1}function cg(t){var e=cr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Jm(n),e!==null){t.blockedOn=e,ug(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hu=r,n.target.dispatchEvent(r),Hu=null}else return e=Hs(n),e!==null&&eh(e),t.blockedOn=n,!1;e.shift()}return!0}function Af(t,e,n){Wo(t)&&n.delete(e)}function Z0(){Qu=!1,bn!==null&&Wo(bn)&&(bn=null),Vn!==null&&Wo(Vn)&&(Vn=null),Ln!==null&&Wo(Ln)&&(Ln=null),vs.forEach(Af),_s.forEach(Af)}function $i(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,Z0)))}function ws(t){function e(i){return $i(i,t)}if(0<ko.length){$i(ko[0],t);for(var n=1;n<ko.length;n++){var r=ko[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bn!==null&&$i(bn,t),Vn!==null&&$i(Vn,t),Ln!==null&&$i(Ln,t),vs.forEach(e),_s.forEach(e),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&kn.shift()}var Zr=yn.ReactCurrentBatchConfig,fa=!0;function ew(t,e,n,r){var i=te,s=Zr.transition;Zr.transition=null;try{te=1,th(t,e,n,r)}finally{te=i,Zr.transition=s}}function tw(t,e,n,r){var i=te,s=Zr.transition;Zr.transition=null;try{te=4,th(t,e,n,r)}finally{te=i,Zr.transition=s}}function th(t,e,n,r){if(fa){var i=Xu(t,e,n,r);if(i===null)hu(t,e,r,pa,n),Sf(t,r);else if(J0(i,t,e,n,r))r.stopPropagation();else if(Sf(t,r),e&4&&-1<Y0.indexOf(t)){for(;i!==null;){var s=Hs(i);if(s!==null&&og(s),s=Xu(t,e,n,r),s===null&&hu(t,e,r,pa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hu(t,e,r,null,n)}}var pa=null;function Xu(t,e,n,r){if(pa=null,t=Yc(r),t=cr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pa=t,null}function hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B0()){case Jc:return 1;case ng:return 4;case ha:case $0:return 16;case rg:return 536870912;default:return 16}default:return 16}}var Dn=null,nh=null,Ko=null;function dg(){if(Ko)return Ko;var t,e=nh,n=e.length,r,i="value"in Dn?Dn.value:Dn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Ko=i.slice(t,1<r?1-r:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xo(){return!0}function kf(){return!1}function pt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xo:kf,this.isPropagationStopped=kf,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),e}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rh=pt(wi),$s=me({},wi,{view:0,detail:0}),nw=pt($s),nu,ru,Hi,Ja=me({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ih,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hi&&(Hi&&t.type==="mousemove"?(nu=t.screenX-Hi.screenX,ru=t.screenY-Hi.screenY):ru=nu=0,Hi=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),xf=pt(Ja),rw=me({},Ja,{dataTransfer:0}),iw=pt(rw),sw=me({},$s,{relatedTarget:0}),iu=pt(sw),ow=me({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),aw=pt(ow),lw=me({},wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uw=pt(lw),cw=me({},wi,{data:0}),Pf=pt(cw),hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fw[t])?!!e[t]:!1}function ih(){return pw}var mw=me({},$s,{key:function(t){if(t.key){var e=hw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ih,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gw=pt(mw),yw=me({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=pt(yw),vw=me({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ih}),_w=pt(vw),ww=me({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ew=pt(ww),Tw=me({},Ja,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iw=pt(Tw),Sw=[9,13,27,32],sh=cn&&"CompositionEvent"in window,rs=null;cn&&"documentMode"in document&&(rs=document.documentMode);var Aw=cn&&"TextEvent"in window&&!rs,fg=cn&&(!sh||rs&&8<rs&&11>=rs),Rf=String.fromCharCode(32),Nf=!1;function pg(t,e){switch(t){case"keyup":return Sw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function kw(t,e){switch(t){case"compositionend":return mg(e);case"keypress":return e.which!==32?null:(Nf=!0,Rf);case"textInput":return t=e.data,t===Rf&&Nf?null:t;default:return null}}function xw(t,e){if(jr)return t==="compositionend"||!sh&&pg(t,e)?(t=dg(),Ko=nh=Dn=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var Pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Pw[t.type]:e==="textarea"}function gg(t,e,n,r){qm(r),e=ma(e,"onChange"),0<e.length&&(n=new rh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var is=null,Es=null;function Cw(t){xg(t,0)}function Za(t){var e=Br(t);if(Um(e))return t}function Rw(t,e){if(t==="change")return e}var yg=!1;if(cn){var su;if(cn){var ou="oninput"in document;if(!ou){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),ou=typeof Of.oninput=="function"}su=ou}else su=!1;yg=su&&(!document.documentMode||9<document.documentMode)}function bf(){is&&(is.detachEvent("onpropertychange",vg),Es=is=null)}function vg(t){if(t.propertyName==="value"&&Za(Es)){var e=[];gg(e,Es,t,Yc(t)),Ym(Cw,e)}}function Nw(t,e,n){t==="focusin"?(bf(),is=e,Es=n,is.attachEvent("onpropertychange",vg)):t==="focusout"&&bf()}function Dw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Za(Es)}function Ow(t,e){if(t==="click")return Za(e)}function bw(t,e){if(t==="input"||t==="change")return Za(e)}function Vw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:Vw;function Ts(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Du.call(e,i)||!Ot(t[i],e[i]))return!1}return!0}function Vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lf(t,e){var n=Vf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vf(n)}}function _g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wg(){for(var t=window,e=la();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=la(t.document)}return e}function oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lw(t){var e=wg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(r!==null&&oh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Lf(n,s);var a=Lf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mw=cn&&"documentMode"in document&&11>=document.documentMode,Ur=null,Yu=null,ss=null,Ju=!1;function Mf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||Ur==null||Ur!==la(r)||(r=Ur,"selectionStart"in r&&oh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ss&&Ts(ss,r)||(ss=r,r=ma(Yu,"onSelect"),0<r.length&&(e=new rh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ur)))}function Po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zr={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},au={},Eg={};cn&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function el(t){if(au[t])return au[t];if(!zr[t])return t;var e=zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Eg)return au[t]=e[n];return t}var Tg=el("animationend"),Ig=el("animationiteration"),Sg=el("animationstart"),Ag=el("transitionend"),kg=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(t,e){kg.set(t,e),Pr(e,[t])}for(var lu=0;lu<Ff.length;lu++){var uu=Ff[lu],Fw=uu.toLowerCase(),jw=uu[0].toUpperCase()+uu.slice(1);Zn(Fw,"on"+jw)}Zn(Tg,"onAnimationEnd");Zn(Ig,"onAnimationIteration");Zn(Sg,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(Ag,"onTransitionEnd");oi("onMouseEnter",["mouseout","mouseover"]);oi("onMouseLeave",["mouseout","mouseover"]);oi("onPointerEnter",["pointerout","pointerover"]);oi("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function jf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,F0(r,e,void 0,t),t.currentTarget=null}function xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;jf(i,l,d),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;jf(i,l,d),s=c}}}if(ca)throw t=qu,ca=!1,qu=null,t}function le(t,e){var n=e[rc];n===void 0&&(n=e[rc]=new Set);var r=t+"__bubble";n.has(r)||(Pg(e,t,2,!1),n.add(r))}function cu(t,e,n){var r=0;e&&(r|=4),Pg(n,t,r,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Is(t){if(!t[Co]){t[Co]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(Uw.has(n)||cu(n,!1,t),cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,cu("selectionchange",!1,e))}}function Pg(t,e,n,r){switch(hg(e)){case 1:var i=ew;break;case 4:i=tw;break;default:i=th}n=i.bind(null,e,n,t),i=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=cr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Ym(function(){var d=s,m=Yc(n),v=[];e:{var g=kg.get(t);if(g!==void 0){var C=rh,N=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":C=gw;break;case"focusin":N="focus",C=iu;break;case"focusout":N="blur",C=iu;break;case"beforeblur":case"afterblur":C=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=iw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=_w;break;case Tg:case Ig:case Sg:C=aw;break;case Ag:C=Ew;break;case"scroll":C=nw;break;case"wheel":C=Iw;break;case"copy":case"cut":case"paste":C=uw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Cf}var O=(e&4)!==0,F=!O&&t==="scroll",E=O?g!==null?g+"Capture":null:g;O=[];for(var y=d,S;y!==null;){S=y;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,E!==null&&(D=ys(y,E),D!=null&&O.push(Ss(y,D,S)))),F)break;y=y.return}0<O.length&&(g=new C(g,N,null,n,m),v.push({event:g,listeners:O}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",g&&n!==Hu&&(N=n.relatedTarget||n.fromElement)&&(cr(N)||N[hn]))break e;if((C||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,C?(N=n.relatedTarget||n.toElement,C=d,N=N?cr(N):null,N!==null&&(F=Cr(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(C=null,N=d),C!==N)){if(O=xf,D="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(O=Cf,D="onPointerLeave",E="onPointerEnter",y="pointer"),F=C==null?g:Br(C),S=N==null?g:Br(N),g=new O(D,y+"leave",C,n,m),g.target=F,g.relatedTarget=S,D=null,cr(m)===d&&(O=new O(E,y+"enter",N,n,m),O.target=S,O.relatedTarget=F,D=O),F=D,C&&N)t:{for(O=C,E=N,y=0,S=O;S;S=Vr(S))y++;for(S=0,D=E;D;D=Vr(D))S++;for(;0<y-S;)O=Vr(O),y--;for(;0<S-y;)E=Vr(E),S--;for(;y--;){if(O===E||E!==null&&O===E.alternate)break t;O=Vr(O),E=Vr(E)}O=null}else O=null;C!==null&&Uf(v,g,C,O,!1),N!==null&&F!==null&&Uf(v,F,N,O,!0)}}e:{if(g=d?Br(d):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var U=Rw;else if(Df(g))if(yg)U=bw;else{U=Dw;var j=Nw}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=Ow);if(U&&(U=U(t,d))){gg(v,U,n,m);break e}j&&j(t,g,d),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&ju(g,"number",g.value)}switch(j=d?Br(d):window,t){case"focusin":(Df(j)||j.contentEditable==="true")&&(Ur=j,Yu=d,ss=null);break;case"focusout":ss=Yu=Ur=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Mf(v,n,m);break;case"selectionchange":if(Mw)break;case"keydown":case"keyup":Mf(v,n,m)}var w;if(sh)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else jr?pg(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(fg&&n.locale!=="ko"&&(jr||p!=="onCompositionStart"?p==="onCompositionEnd"&&jr&&(w=dg()):(Dn=m,nh="value"in Dn?Dn.value:Dn.textContent,jr=!0)),j=ma(d,p),0<j.length&&(p=new Pf(p,t,null,n,m),v.push({event:p,listeners:j}),w?p.data=w:(w=mg(n),w!==null&&(p.data=w)))),(w=Aw?kw(t,n):xw(t,n))&&(d=ma(d,"onBeforeInput"),0<d.length&&(m=new Pf("onBeforeInput","beforeinput",null,n,m),v.push({event:m,listeners:d}),m.data=w))}xg(v,e)})}function Ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ma(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ys(t,n),s!=null&&r.unshift(Ss(t,s,i)),s=ys(t,e),s!=null&&r.push(Ss(t,s,i))),t=t.return}return r}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uf(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=ys(n,s),c!=null&&a.unshift(Ss(n,c,l))):i||(c=ys(n,s),c!=null&&a.push(Ss(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var zw=/\r\n?/g,Bw=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(zw,`
`).replace(Bw,"")}function Ro(t,e,n){if(e=zf(e),zf(t)!==e&&n)throw Error(V(425))}function ga(){}var Zu=null,ec=null;function tc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,$w=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,Hw=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(t){return Bf.resolve(null).then(t).catch(Ww)}:nc;function Ww(t){setTimeout(function(){throw t})}function du(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ws(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(e)}function Mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $f(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),jt="__reactFiber$"+Ei,As="__reactProps$"+Ei,hn="__reactContainer$"+Ei,rc="__reactEvents$"+Ei,Kw="__reactListeners$"+Ei,qw="__reactHandles$"+Ei;function cr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$f(t);t!==null;){if(n=t[jt])return n;t=$f(t)}return e}t=n,n=t.parentNode}return null}function Hs(t){return t=t[jt]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function tl(t){return t[As]||null}var ic=[],$r=-1;function er(t){return{current:t}}function ue(t){0>$r||(t.current=ic[$r],ic[$r]=null,$r--)}function se(t,e){$r++,ic[$r]=t.current,t.current=e}var Gn={},Ge=er(Gn),it=er(!1),vr=Gn;function ai(t,e){var n=t.type.contextTypes;if(!n)return Gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function st(t){return t=t.childContextTypes,t!=null}function ya(){ue(it),ue(Ge)}function Hf(t,e,n){if(Ge.current!==Gn)throw Error(V(168));se(Ge,e),se(it,n)}function Cg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,N0(t)||"Unknown",i));return me({},n,r)}function va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gn,vr=Ge.current,se(Ge,t),se(it,it.current),!0}function Wf(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=Cg(t,e,vr),r.__reactInternalMemoizedMergedChildContext=t,ue(it),ue(Ge),se(Ge,t)):ue(it),se(it,n)}var Zt=null,nl=!1,fu=!1;function Rg(t){Zt===null?Zt=[t]:Zt.push(t)}function Gw(t){nl=!0,Rg(t)}function tr(){if(!fu&&Zt!==null){fu=!0;var t=0,e=te;try{var n=Zt;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zt=null,nl=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(t+1)),tg(Jc,tr),i}finally{te=e,fu=!1}}return null}var Hr=[],Wr=0,_a=null,wa=0,yt=[],vt=0,_r=null,en=1,tn="";function ar(t,e){Hr[Wr++]=wa,Hr[Wr++]=_a,_a=t,wa=e}function Ng(t,e,n){yt[vt++]=en,yt[vt++]=tn,yt[vt++]=_r,_r=t;var r=en;t=tn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,en=1<<32-Nt(e)+i|n<<i|r,tn=s+t}else en=1<<s|n<<i|r,tn=t}function ah(t){t.return!==null&&(ar(t,1),Ng(t,1,0))}function lh(t){for(;t===_a;)_a=Hr[--Wr],Hr[Wr]=null,wa=Hr[--Wr],Hr[Wr]=null;for(;t===_r;)_r=yt[--vt],yt[vt]=null,tn=yt[--vt],yt[vt]=null,en=yt[--vt],yt[vt]=null}var ht=null,ct=null,ce=!1,xt=null;function Dg(t,e){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ht=t,ct=Mn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ht=t,ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:en,overflow:tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ht=t,ct=null,!0):!1;default:return!1}}function sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oc(t){if(ce){var e=ct;if(e){var n=e;if(!Kf(t,e)){if(sc(t))throw Error(V(418));e=Mn(n.nextSibling);var r=ht;e&&Kf(t,e)?Dg(r,n):(t.flags=t.flags&-4097|2,ce=!1,ht=t)}}else{if(sc(t))throw Error(V(418));t.flags=t.flags&-4097|2,ce=!1,ht=t}}}function qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ht=t}function No(t){if(t!==ht)return!1;if(!ce)return qf(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tc(t.type,t.memoizedProps)),e&&(e=ct)){if(sc(t))throw Og(),Error(V(418));for(;e;)Dg(t,e),e=Mn(e.nextSibling)}if(qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ct=Mn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ct=null}}else ct=ht?Mn(t.stateNode.nextSibling):null;return!0}function Og(){for(var t=ct;t;)t=Mn(t.nextSibling)}function li(){ct=ht=null,ce=!1}function uh(t){xt===null?xt=[t]:xt.push(t)}var Qw=yn.ReactCurrentBatchConfig;function Wi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function Do(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gf(t){var e=t._init;return e(t._payload)}function bg(t){function e(E,y){if(t){var S=E.deletions;S===null?(E.deletions=[y],E.flags|=16):S.push(y)}}function n(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function r(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function i(E,y){return E=zn(E,y),E.index=0,E.sibling=null,E}function s(E,y,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<y?(E.flags|=2,y):S):(E.flags|=2,y)):(E.flags|=1048576,y)}function a(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,y,S,D){return y===null||y.tag!==6?(y=wu(S,E.mode,D),y.return=E,y):(y=i(y,S),y.return=E,y)}function c(E,y,S,D){var U=S.type;return U===Fr?m(E,y,S.props.children,D,S.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Sn&&Gf(U)===y.type)?(D=i(y,S.props),D.ref=Wi(E,y,S),D.return=E,D):(D=ea(S.type,S.key,S.props,null,E.mode,D),D.ref=Wi(E,y,S),D.return=E,D)}function d(E,y,S,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Eu(S,E.mode,D),y.return=E,y):(y=i(y,S.children||[]),y.return=E,y)}function m(E,y,S,D,U){return y===null||y.tag!==7?(y=mr(S,E.mode,D,U),y.return=E,y):(y=i(y,S),y.return=E,y)}function v(E,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=wu(""+y,E.mode,S),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Eo:return S=ea(y.type,y.key,y.props,null,E.mode,S),S.ref=Wi(E,null,y),S.return=E,S;case Mr:return y=Eu(y,E.mode,S),y.return=E,y;case Sn:var D=y._init;return v(E,D(y._payload),S)}if(Yi(y)||Ui(y))return y=mr(y,E.mode,S,null),y.return=E,y;Do(E,y)}return null}function g(E,y,S,D){var U=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(E,y,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Eo:return S.key===U?c(E,y,S,D):null;case Mr:return S.key===U?d(E,y,S,D):null;case Sn:return U=S._init,g(E,y,U(S._payload),D)}if(Yi(S)||Ui(S))return U!==null?null:m(E,y,S,D,null);Do(E,S)}return null}function C(E,y,S,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(S)||null,l(y,E,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Eo:return E=E.get(D.key===null?S:D.key)||null,c(y,E,D,U);case Mr:return E=E.get(D.key===null?S:D.key)||null,d(y,E,D,U);case Sn:var j=D._init;return C(E,y,S,j(D._payload),U)}if(Yi(D)||Ui(D))return E=E.get(S)||null,m(y,E,D,U,null);Do(y,D)}return null}function N(E,y,S,D){for(var U=null,j=null,w=y,p=y=0,_=null;w!==null&&p<S.length;p++){w.index>p?(_=w,w=null):_=w.sibling;var T=g(E,w,S[p],D);if(T===null){w===null&&(w=_);break}t&&w&&T.alternate===null&&e(E,w),y=s(T,y,p),j===null?U=T:j.sibling=T,j=T,w=_}if(p===S.length)return n(E,w),ce&&ar(E,p),U;if(w===null){for(;p<S.length;p++)w=v(E,S[p],D),w!==null&&(y=s(w,y,p),j===null?U=w:j.sibling=w,j=w);return ce&&ar(E,p),U}for(w=r(E,w);p<S.length;p++)_=C(w,E,p,S[p],D),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?p:_.key),y=s(_,y,p),j===null?U=_:j.sibling=_,j=_);return t&&w.forEach(function(A){return e(E,A)}),ce&&ar(E,p),U}function O(E,y,S,D){var U=Ui(S);if(typeof U!="function")throw Error(V(150));if(S=U.call(S),S==null)throw Error(V(151));for(var j=U=null,w=y,p=y=0,_=null,T=S.next();w!==null&&!T.done;p++,T=S.next()){w.index>p?(_=w,w=null):_=w.sibling;var A=g(E,w,T.value,D);if(A===null){w===null&&(w=_);break}t&&w&&A.alternate===null&&e(E,w),y=s(A,y,p),j===null?U=A:j.sibling=A,j=A,w=_}if(T.done)return n(E,w),ce&&ar(E,p),U;if(w===null){for(;!T.done;p++,T=S.next())T=v(E,T.value,D),T!==null&&(y=s(T,y,p),j===null?U=T:j.sibling=T,j=T);return ce&&ar(E,p),U}for(w=r(E,w);!T.done;p++,T=S.next())T=C(w,E,p,T.value,D),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?p:T.key),y=s(T,y,p),j===null?U=T:j.sibling=T,j=T);return t&&w.forEach(function(P){return e(E,P)}),ce&&ar(E,p),U}function F(E,y,S,D){if(typeof S=="object"&&S!==null&&S.type===Fr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Eo:e:{for(var U=S.key,j=y;j!==null;){if(j.key===U){if(U=S.type,U===Fr){if(j.tag===7){n(E,j.sibling),y=i(j,S.props.children),y.return=E,E=y;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Sn&&Gf(U)===j.type){n(E,j.sibling),y=i(j,S.props),y.ref=Wi(E,j,S),y.return=E,E=y;break e}n(E,j);break}else e(E,j);j=j.sibling}S.type===Fr?(y=mr(S.props.children,E.mode,D,S.key),y.return=E,E=y):(D=ea(S.type,S.key,S.props,null,E.mode,D),D.ref=Wi(E,y,S),D.return=E,E=D)}return a(E);case Mr:e:{for(j=S.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(E,y.sibling),y=i(y,S.children||[]),y.return=E,E=y;break e}else{n(E,y);break}else e(E,y);y=y.sibling}y=Eu(S,E.mode,D),y.return=E,E=y}return a(E);case Sn:return j=S._init,F(E,y,j(S._payload),D)}if(Yi(S))return N(E,y,S,D);if(Ui(S))return O(E,y,S,D);Do(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(E,y.sibling),y=i(y,S),y.return=E,E=y):(n(E,y),y=wu(S,E.mode,D),y.return=E,E=y),a(E)):n(E,y)}return F}var ui=bg(!0),Vg=bg(!1),Ea=er(null),Ta=null,Kr=null,ch=null;function hh(){ch=Kr=Ta=null}function dh(t){var e=Ea.current;ue(Ea),t._currentValue=e}function ac(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ei(t,e){Ta=t,ch=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rt=!0),t.firstContext=null)}function Et(t){var e=t._currentValue;if(ch!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(Ta===null)throw Error(V(308));Kr=t,Ta.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var hr=null;function fh(t){hr===null?hr=[t]:hr.push(t)}function Lg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fh(e)):(n.next=i.next,i.next=n),e.interleaved=n,dn(t,r)}function dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var An=!1;function ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function an(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,dn(t,n)}return i=r.interleaved,i===null?(e.next=e,fh(r)):(e.next=i.next,i.next=e),r.interleaved=e,dn(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zc(t,n)}}function Qf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ia(t,e,n,r){var i=t.updateQueue;An=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=c))}if(s!==null){var v=i.baseState;a=0,m=d=c=null,l=s;do{var g=l.lane,C=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,O=l;switch(g=e,C=n,O.tag){case 1:if(N=O.payload,typeof N=="function"){v=N.call(C,v,g);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=O.payload,g=typeof N=="function"?N.call(C,v,g):N,g==null)break e;v=me({},v,g);break e;case 2:An=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else C={eventTime:C,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=C,c=v):m=m.next=C,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(c=v),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Er|=a,t.lanes=a,t.memoizedState=v}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Ws={},zt=er(Ws),ks=er(Ws),xs=er(Ws);function dr(t){if(t===Ws)throw Error(V(174));return t}function mh(t,e){switch(se(xs,e),se(ks,t),se(zt,Ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zu(e,t)}ue(zt),se(zt,e)}function ci(){ue(zt),ue(ks),ue(xs)}function Fg(t){dr(xs.current);var e=dr(zt.current),n=zu(e,t.type);e!==n&&(se(ks,t),se(zt,n))}function gh(t){ks.current===t&&(ue(zt),ue(ks))}var fe=er(0);function Sa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pu=[];function yh(){for(var t=0;t<pu.length;t++)pu[t]._workInProgressVersionPrimary=null;pu.length=0}var Qo=yn.ReactCurrentDispatcher,mu=yn.ReactCurrentBatchConfig,wr=0,pe=null,Se=null,xe=null,Aa=!1,os=!1,Ps=0,Xw=0;function ze(){throw Error(V(321))}function vh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function _h(t,e,n,r,i,s){if(wr=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?eE:tE,t=n(r,i),os){s=0;do{if(os=!1,Ps=0,25<=s)throw Error(V(301));s+=1,xe=Se=null,e.updateQueue=null,Qo.current=nE,t=n(r,i)}while(os)}if(Qo.current=ka,e=Se!==null&&Se.next!==null,wr=0,xe=Se=pe=null,Aa=!1,e)throw Error(V(300));return t}function wh(){var t=Ps!==0;return Ps=0,t}function Ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?pe.memoizedState=xe=t:xe=xe.next=t,xe}function Tt(){if(Se===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Se.next;var e=xe===null?pe.memoizedState:xe.next;if(e!==null)xe=e,Se=t;else{if(t===null)throw Error(V(310));Se=t,t={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},xe===null?pe.memoizedState=xe=t:xe=xe.next=t}return xe}function Cs(t,e){return typeof e=="function"?e(t):e}function gu(t){var e=Tt(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,d=s;do{var m=d.lane;if((wr&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var v={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=v,a=r):c=c.next=v,pe.lanes|=m,Er|=m}d=d.next}while(d!==null&&d!==s);c===null?a=r:c.next=l,Ot(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,Er|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=Tt(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Ot(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jg(){}function Ug(t,e){var n=pe,r=Tt(),i=e(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,Eh($g.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Rs(9,Bg.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(V(349));wr&30||zg(n,e,i)}return i}function zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bg(t,e,n,r){e.value=n,e.getSnapshot=r,Hg(e)&&Wg(t)}function $g(t,e,n){return n(function(){Hg(e)&&Wg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ot(t,n)}catch{return!0}}function Wg(t){var e=dn(t,1);e!==null&&Dt(e,t,1,-1)}function Yf(t){var e=Ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:t},e.queue=t,t=t.dispatch=Zw.bind(null,pe,t),[e.memoizedState,t]}function Rs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Kg(){return Tt().memoizedState}function Xo(t,e,n,r){var i=Ft();pe.flags|=t,i.memoizedState=Rs(1|e,n,void 0,r===void 0?null:r)}function rl(t,e,n,r){var i=Tt();r=r===void 0?null:r;var s=void 0;if(Se!==null){var a=Se.memoizedState;if(s=a.destroy,r!==null&&vh(r,a.deps)){i.memoizedState=Rs(e,n,s,r);return}}pe.flags|=t,i.memoizedState=Rs(1|e,n,s,r)}function Jf(t,e){return Xo(8390656,8,t,e)}function Eh(t,e){return rl(2048,8,t,e)}function qg(t,e){return rl(4,2,t,e)}function Gg(t,e){return rl(4,4,t,e)}function Qg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xg(t,e,n){return n=n!=null?n.concat([t]):null,rl(4,4,Qg.bind(null,e,t),n)}function Th(){}function Yg(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jg(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zg(t,e,n){return wr&21?(Ot(n,e)||(n=ig(),pe.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n)}function Yw(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=mu.transition;mu.transition={};try{t(!1),e()}finally{te=n,mu.transition=r}}function ey(){return Tt().memoizedState}function Jw(t,e,n){var r=Un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ty(t))ny(e,n);else if(n=Lg(t,e,n,r),n!==null){var i=Ze();Dt(n,t,r,i),ry(n,e,r)}}function Zw(t,e,n){var r=Un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ty(t))ny(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ot(l,a)){var c=e.interleaved;c===null?(i.next=i,fh(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Lg(t,e,i,r),n!==null&&(i=Ze(),Dt(n,t,r,i),ry(n,e,r))}}function ty(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function ny(t,e){os=Aa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ry(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zc(t,n)}}var ka={readContext:Et,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},eE={readContext:Et,useCallback:function(t,e){return Ft().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:Jf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xo(4194308,4,Qg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xo(4,2,t,e)},useMemo:function(t,e){var n=Ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Jw.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Ft();return t={current:t},e.memoizedState=t},useState:Yf,useDebugValue:Th,useDeferredValue:function(t){return Ft().memoizedState=t},useTransition:function(){var t=Yf(!1),e=t[0];return t=Yw.bind(null,t[1]),Ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=Ft();if(ce){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),Ce===null)throw Error(V(349));wr&30||zg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jf($g.bind(null,r,s,t),[t]),r.flags|=2048,Rs(9,Bg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ft(),e=Ce.identifierPrefix;if(ce){var n=tn,r=en;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ps++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tE={readContext:Et,useCallback:Yg,useContext:Et,useEffect:Eh,useImperativeHandle:Xg,useInsertionEffect:qg,useLayoutEffect:Gg,useMemo:Jg,useReducer:gu,useRef:Kg,useState:function(){return gu(Cs)},useDebugValue:Th,useDeferredValue:function(t){var e=Tt();return Zg(e,Se.memoizedState,t)},useTransition:function(){var t=gu(Cs)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Ug,useId:ey,unstable_isNewReconciler:!1},nE={readContext:Et,useCallback:Yg,useContext:Et,useEffect:Eh,useImperativeHandle:Xg,useInsertionEffect:qg,useLayoutEffect:Gg,useMemo:Jg,useReducer:yu,useRef:Kg,useState:function(){return yu(Cs)},useDebugValue:Th,useDeferredValue:function(t){var e=Tt();return Se===null?e.memoizedState=t:Zg(e,Se.memoizedState,t)},useTransition:function(){var t=yu(Cs)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Ug,useId:ey,unstable_isNewReconciler:!1};function At(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var il={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=Un(t),s=an(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Dt(e,t,i,r),Go(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=Un(t),s=an(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Dt(e,t,i,r),Go(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ze(),r=Un(t),i=an(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fn(t,i,r),e!==null&&(Dt(e,t,r,n),Go(e,t,r))}};function Zf(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ts(n,r)||!Ts(i,s):!0}function iy(t,e,n){var r=!1,i=Gn,s=e.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=st(e)?vr:Ge.current,r=e.contextTypes,s=(r=r!=null)?ai(t,i):Gn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ep(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&il.enqueueReplaceState(e,e.state,null)}function uc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ph(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=st(e)?vr:Ge.current,i.context=ai(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&il.enqueueReplaceState(i,i.state,null),Ia(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function hi(t,e){try{var n="",r=e;do n+=R0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function vu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rE=typeof WeakMap=="function"?WeakMap:Map;function sy(t,e,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pa||(Pa=!0,wc=r),cc(t,e)},n}function oy(t,e,n){n=an(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){cc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cc(t,e),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function tp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new rE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yE.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=an(-1,1),e.tag=2,Fn(n,e,1))),n.lanes|=1),t)}var iE=yn.ReactCurrentOwner,rt=!1;function Je(t,e,n,r){e.child=t===null?Vg(e,null,n,r):ui(e,t.child,n,r)}function ip(t,e,n,r,i){n=n.render;var s=e.ref;return ei(e,i),r=_h(t,e,n,r,s,i),n=wh(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(ce&&n&&ah(e),e.flags|=1,Je(t,e,r,i),e.child)}function sp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ay(t,e,s,r,i)):(t=ea(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ts,n(a,r)&&t.ref===e.ref)return fn(t,e,i)}return e.flags|=1,t=zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ay(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ts(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,fn(t,e,i)}return hc(t,e,n,r,i)}function ly(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Gr,ut),ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(Gr,ut),ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(Gr,ut),ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(Gr,ut),ut|=r;return Je(t,e,i,n),e.child}function uy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hc(t,e,n,r,i){var s=st(n)?vr:Ge.current;return s=ai(e,s),ei(e,i),n=_h(t,e,n,r,s,i),r=wh(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(ce&&r&&ah(e),e.flags|=1,Je(t,e,n,i),e.child)}function op(t,e,n,r,i){if(st(n)){var s=!0;va(e)}else s=!1;if(ei(e,i),e.stateNode===null)Yo(t,e),iy(e,n,r),uc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Et(d):(d=st(n)?vr:Ge.current,d=ai(e,d));var m=n.getDerivedStateFromProps,v=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==d)&&ep(e,a,r,d),An=!1;var g=e.memoizedState;a.state=g,Ia(e,r,a,i),c=e.memoizedState,l!==r||g!==c||it.current||An?(typeof m=="function"&&(lc(e,n,m,r),c=e.memoizedState),(l=An||Zf(e,n,l,r,g,c,d))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),a.props=r,a.state=c,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Mg(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:At(e.type,l),a.props=d,v=e.pendingProps,g=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Et(c):(c=st(n)?vr:Ge.current,c=ai(e,c));var C=n.getDerivedStateFromProps;(m=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==v||g!==c)&&ep(e,a,r,c),An=!1,g=e.memoizedState,a.state=g,Ia(e,r,a,i);var N=e.memoizedState;l!==v||g!==N||it.current||An?(typeof C=="function"&&(lc(e,n,C,r),N=e.memoizedState),(d=An||Zf(e,n,d,r,g,N,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),a.props=r,a.state=N,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return dc(t,e,n,r,s,i)}function dc(t,e,n,r,i,s){uy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Wf(e,n,!1),fn(t,e,s);r=e.stateNode,iE.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=ui(e,t.child,null,s),e.child=ui(e,null,l,s)):Je(t,e,l,s),e.memoizedState=r.state,i&&Wf(e,n,!0),e.child}function cy(t){var e=t.stateNode;e.pendingContext?Hf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hf(t,e.context,!1),mh(t,e.containerInfo)}function ap(t,e,n,r,i){return li(),uh(i),e.flags|=256,Je(t,e,n,r),e.child}var fc={dehydrated:null,treeContext:null,retryLane:0};function pc(t){return{baseLanes:t,cachePool:null,transitions:null}}function hy(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(fe,i&1),t===null)return oc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=al(a,r,0,null),t=mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pc(n),e.memoizedState=fc,t):Ih(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return sE(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=zn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zn(l,s):(s=mr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?pc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=fc,r}return s=t.child,t=s.sibling,r=zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ih(t,e){return e=al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oo(t,e,n,r){return r!==null&&uh(r),ui(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sE(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=vu(Error(V(422))),Oo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=al({mode:"visible",children:r.children},i,0,null),s=mr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ui(e,t.child,null,a),e.child.memoizedState=pc(a),e.memoizedState=fc,s);if(!(e.mode&1))return Oo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(V(419)),r=vu(s,r,void 0),Oo(t,e,a,r)}if(l=(a&t.childLanes)!==0,rt||l){if(r=Ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dn(t,i),Dt(r,t,i,-1))}return Ch(),r=vu(Error(V(421))),Oo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ct=Mn(i.nextSibling),ht=e,ce=!0,xt=null,t!==null&&(yt[vt++]=en,yt[vt++]=tn,yt[vt++]=_r,en=t.id,tn=t.overflow,_r=e),e=Ih(e,r.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ac(t.return,e,n)}function _u(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Je(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_u(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_u(e,!0,n,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oE(t,e,n){switch(e.tag){case 3:cy(e),li();break;case 5:Fg(e);break;case 1:st(e.type)&&va(e);break;case 4:mh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Ea,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?hy(t,e,n):(se(fe,fe.current&1),t=fn(t,e,n),t!==null?t.sibling:null);se(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,ly(t,e,n)}return fn(t,e,n)}var fy,mc,py,my;fy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mc=function(){};py=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dr(zt.current);var s=null;switch(n){case"input":i=Mu(t,i),r=Mu(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Uu(t,i),r=Uu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ga)}Bu(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ms.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ms.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&le("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};my=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ki(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function aE(t,e,n){var r=e.pendingProps;switch(lh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return st(e.type)&&ya(),Be(e),null;case 3:return r=e.stateNode,ci(),ue(it),ue(Ge),yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(No(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(Ic(xt),xt=null))),mc(t,e),Be(e),null;case 5:gh(e);var i=dr(xs.current);if(n=e.type,t!==null&&e.stateNode!=null)py(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return Be(e),null}if(t=dr(zt.current),No(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[As]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Zi.length;i++)le(Zi[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":yf(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":_f(r,s),le("invalid",r)}Bu(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ro(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ro(r.textContent,l,t),i=["children",""+l]):ms.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&le("scroll",r)}switch(n){case"input":To(r),vf(r,s,!0);break;case"textarea":To(r),wf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ga)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$m(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[jt]=e,t[As]=r,fy(t,e,!1,!1),e.stateNode=t;e:{switch(a=$u(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zi.length;i++)le(Zi[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":yf(t,r),i=Mu(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",t);break;case"textarea":_f(t,r),i=Uu(t,r),le("invalid",t);break;default:i=r}Bu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Km(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Hm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&gs(t,c):typeof c=="number"&&gs(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ms.hasOwnProperty(s)?c!=null&&s==="onScroll"&&le("scroll",t):c!=null&&qc(t,s,c,a))}switch(n){case"input":To(t),vf(t,r,!1);break;case"textarea":To(t),wf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)my(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=dr(xs.current),dr(zt.current),No(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=ht,t!==null))switch(t.tag){case 3:Ro(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return Be(e),null;case 13:if(ue(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&ct!==null&&e.mode&1&&!(e.flags&128))Og(),li(),e.flags|=98560,s=!1;else if(s=No(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[jt]=e}else li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else xt!==null&&(Ic(xt),xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?Ae===0&&(Ae=3):Ch())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return ci(),mc(t,e),t===null&&Is(e.stateNode.containerInfo),Be(e),null;case 10:return dh(e.type._context),Be(e),null;case 17:return st(e.type)&&ya(),Be(e),null;case 19:if(ue(fe),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Ki(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Sa(t),a!==null){for(e.flags|=128,Ki(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>di&&(e.flags|=128,r=!0,Ki(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sa(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ki(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ce)return Be(e),null}else 2*we()-s.renderingStartTime>di&&n!==1073741824&&(e.flags|=128,r=!0,Ki(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=fe.current,se(fe,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return Ph(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ut&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function lE(t,e){switch(lh(e),e.tag){case 1:return st(e.type)&&ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ci(),ue(it),ue(Ge),yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gh(e),null;case 13:if(ue(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(fe),null;case 4:return ci(),null;case 10:return dh(e.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var bo=!1,We=!1,uE=typeof WeakSet=="function"?WeakSet:Set,B=null;function qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function gc(t,e,n){try{n()}catch(r){ye(t,e,r)}}var up=!1;function cE(t,e){if(Zu=fa,t=wg(),oh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,m=0,v=t,g=null;t:for(;;){for(var C;v!==n||i!==0&&v.nodeType!==3||(l=a+i),v!==s||r!==0&&v.nodeType!==3||(c=a+r),v.nodeType===3&&(a+=v.nodeValue.length),(C=v.firstChild)!==null;)g=v,v=C;for(;;){if(v===t)break t;if(g===n&&++d===i&&(l=a),g===s&&++m===r&&(c=a),(C=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=C}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ec={focusedElem:t,selectionRange:n},fa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var O=N.memoizedProps,F=N.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?O:At(e.type,O),F);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(D){ye(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return N=up,up=!1,N}function as(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gc(e,n,s)}i=i.next}while(i!==r)}}function sl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gy(t){var e=t.alternate;e!==null&&(t.alternate=null,gy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[As],delete e[rc],delete e[Kw],delete e[qw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yy(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ga));else if(r!==4&&(t=t.child,t!==null))for(vc(t,e,n),t=t.sibling;t!==null;)vc(t,e,n),t=t.sibling}function _c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_c(t,e,n),t=t.sibling;t!==null;)_c(t,e,n),t=t.sibling}var De=null,kt=!1;function Tn(t,e,n){for(n=n.child;n!==null;)vy(t,e,n),n=n.sibling}function vy(t,e,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 5:We||qr(n,e);case 6:var r=De,i=kt;De=null,Tn(t,e,n),De=r,kt=i,De!==null&&(kt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(kt?(t=De,n=n.stateNode,t.nodeType===8?du(t.parentNode,n):t.nodeType===1&&du(t,n),ws(t)):du(De,n.stateNode));break;case 4:r=De,i=kt,De=n.stateNode.containerInfo,kt=!0,Tn(t,e,n),De=r,kt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&gc(n,e,a),i=i.next}while(i!==r)}Tn(t,e,n);break;case 1:if(!We&&(qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,e,l)}Tn(t,e,n);break;case 21:Tn(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Tn(t,e,n),We=r):Tn(t,e,n);break;default:Tn(t,e,n)}}function hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uE),e.forEach(function(r){var i=_E.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,kt=!1;break e;case 3:De=l.stateNode.containerInfo,kt=!0;break e;case 4:De=l.stateNode.containerInfo,kt=!0;break e}l=l.return}if(De===null)throw Error(V(160));vy(s,a,i),De=null,kt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){ye(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_y(e,t),e=e.sibling}function _y(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),Mt(t),r&4){try{as(3,t,t.return),sl(3,t)}catch(O){ye(t,t.return,O)}try{as(5,t,t.return)}catch(O){ye(t,t.return,O)}}break;case 1:St(e,t),Mt(t),r&512&&n!==null&&qr(n,n.return);break;case 5:if(St(e,t),Mt(t),r&512&&n!==null&&qr(n,n.return),t.flags&32){var i=t.stateNode;try{gs(i,"")}catch(O){ye(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&zm(i,s),$u(l,a);var d=$u(l,s);for(a=0;a<c.length;a+=2){var m=c[a],v=c[a+1];m==="style"?Km(i,v):m==="dangerouslySetInnerHTML"?Hm(i,v):m==="children"?gs(i,v):qc(i,m,v,d)}switch(l){case"input":Fu(i,s);break;case"textarea":Bm(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Xr(i,!!s.multiple,C,!1):g!==!!s.multiple&&(s.defaultValue!=null?Xr(i,!!s.multiple,s.defaultValue,!0):Xr(i,!!s.multiple,s.multiple?[]:"",!1))}i[As]=s}catch(O){ye(t,t.return,O)}}break;case 6:if(St(e,t),Mt(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){ye(t,t.return,O)}}break;case 3:if(St(e,t),Mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(O){ye(t,t.return,O)}break;case 4:St(e,t),Mt(t);break;case 13:St(e,t),Mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kh=we())),r&4&&hp(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(We=(d=We)||m,St(e,t),We=d):St(e,t),Mt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(B=t,m=t.child;m!==null;){for(v=B=m;B!==null;){switch(g=B,C=g.child,g.tag){case 0:case 11:case 14:case 15:as(4,g,g.return);break;case 1:qr(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(O){ye(r,n,O)}}break;case 5:qr(g,g.return);break;case 22:if(g.memoizedState!==null){fp(v);continue}}C!==null?(C.return=g,B=C):fp(v)}m=m.sibling}e:for(m=null,v=t;;){if(v.tag===5){if(m===null){m=v;try{i=v.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=v.stateNode,c=v.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Wm("display",a))}catch(O){ye(t,t.return,O)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(O){ye(t,t.return,O)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:St(e,t),Mt(t),r&4&&hp(t);break;case 21:break;default:St(e,t),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yy(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gs(i,""),r.flags&=-33);var s=cp(t);_c(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=cp(t);vc(t,l,a);break;default:throw Error(V(161))}}catch(c){ye(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hE(t,e,n){B=t,wy(t)}function wy(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bo;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||We;l=bo;var d=We;if(bo=a,(We=c)&&!d)for(B=i;B!==null;)a=B,c=a.child,a.tag===22&&a.memoizedState!==null?pp(i):c!==null?(c.return=a,B=c):pp(i);for(;s!==null;)B=s,wy(s),s=s.sibling;B=i,bo=l,We=d}dp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):dp(t)}}function dp(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||sl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&ws(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}We||e.flags&512&&yc(e)}catch(g){ye(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function fp(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function pp(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sl(4,e)}catch(c){ye(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ye(e,i,c)}}var s=e.return;try{yc(e)}catch(c){ye(e,s,c)}break;case 5:var a=e.return;try{yc(e)}catch(c){ye(e,a,c)}}}catch(c){ye(e,e.return,c)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var dE=Math.ceil,xa=yn.ReactCurrentDispatcher,Sh=yn.ReactCurrentOwner,wt=yn.ReactCurrentBatchConfig,Z=0,Ce=null,Ie=null,Le=0,ut=0,Gr=er(0),Ae=0,Ns=null,Er=0,ol=0,Ah=0,ls=null,nt=null,kh=0,di=1/0,Jt=null,Pa=!1,wc=null,jn=null,Vo=!1,On=null,Ca=0,us=0,Ec=null,Jo=-1,Zo=0;function Ze(){return Z&6?we():Jo!==-1?Jo:Jo=we()}function Un(t){return t.mode&1?Z&2&&Le!==0?Le&-Le:Qw.transition!==null?(Zo===0&&(Zo=ig()),Zo):(t=te,t!==0||(t=window.event,t=t===void 0?16:hg(t.type)),t):1}function Dt(t,e,n,r){if(50<us)throw us=0,Ec=null,Error(V(185));Bs(t,n,r),(!(Z&2)||t!==Ce)&&(t===Ce&&(!(Z&2)&&(ol|=n),Ae===4&&xn(t,Le)),ot(t,r),n===1&&Z===0&&!(e.mode&1)&&(di=we()+500,nl&&tr()))}function ot(t,e){var n=t.callbackNode;Q0(t,e);var r=da(t,t===Ce?Le:0);if(r===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?Gw(mp.bind(null,t)):Rg(mp.bind(null,t)),Hw(function(){!(Z&6)&&tr()}),n=null;else{switch(sg(r)){case 1:n=Jc;break;case 4:n=ng;break;case 16:n=ha;break;case 536870912:n=rg;break;default:n=ha}n=Py(n,Ey.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ey(t,e){if(Jo=-1,Zo=0,Z&6)throw Error(V(327));var n=t.callbackNode;if(ti()&&t.callbackNode!==n)return null;var r=da(t,t===Ce?Le:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ra(t,r);else{e=r;var i=Z;Z|=2;var s=Iy();(Ce!==t||Le!==e)&&(Jt=null,di=we()+500,pr(t,e));do try{mE();break}catch(l){Ty(t,l)}while(1);hh(),xa.current=s,Z=i,Ie!==null?e=0:(Ce=null,Le=0,e=Ae)}if(e!==0){if(e===2&&(i=Gu(t),i!==0&&(r=i,e=Tc(t,i))),e===1)throw n=Ns,pr(t,0),xn(t,r),ot(t,we()),n;if(e===6)xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!fE(i)&&(e=Ra(t,r),e===2&&(s=Gu(t),s!==0&&(r=s,e=Tc(t,s))),e===1))throw n=Ns,pr(t,0),xn(t,r),ot(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:lr(t,nt,Jt);break;case 3:if(xn(t,r),(r&130023424)===r&&(e=kh+500-we(),10<e)){if(da(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nc(lr.bind(null,t,nt,Jt),e);break}lr(t,nt,Jt);break;case 4:if(xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Nt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dE(r/1960))-r,10<r){t.timeoutHandle=nc(lr.bind(null,t,nt,Jt),r);break}lr(t,nt,Jt);break;case 5:lr(t,nt,Jt);break;default:throw Error(V(329))}}}return ot(t,we()),t.callbackNode===n?Ey.bind(null,t):null}function Tc(t,e){var n=ls;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=Ra(t,e),t!==2&&(e=nt,nt=n,e!==null&&Ic(e)),t}function Ic(t){nt===null?nt=t:nt.push.apply(nt,t)}function fE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~Ah,e&=~ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function mp(t){if(Z&6)throw Error(V(327));ti();var e=da(t,0);if(!(e&1))return ot(t,we()),null;var n=Ra(t,e);if(t.tag!==0&&n===2){var r=Gu(t);r!==0&&(e=r,n=Tc(t,r))}if(n===1)throw n=Ns,pr(t,0),xn(t,e),ot(t,we()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,nt,Jt),ot(t,we()),null}function xh(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(di=we()+500,nl&&tr())}}function Tr(t){On!==null&&On.tag===0&&!(Z&6)&&ti();var e=Z;Z|=1;var n=wt.transition,r=te;try{if(wt.transition=null,te=1,t)return t()}finally{te=r,wt.transition=n,Z=e,!(Z&6)&&tr()}}function Ph(){ut=Gr.current,ue(Gr)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$w(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(lh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ya();break;case 3:ci(),ue(it),ue(Ge),yh();break;case 5:gh(r);break;case 4:ci();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:dh(r.type._context);break;case 22:case 23:Ph()}n=n.return}if(Ce=t,Ie=t=zn(t.current,null),Le=ut=e,Ae=0,Ns=null,Ah=ol=Er=0,nt=ls=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}hr=null}return t}function Ty(t,e){do{var n=Ie;try{if(hh(),Qo.current=ka,Aa){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Aa=!1}if(wr=0,xe=Se=pe=null,os=!1,Ps=0,Sh.current=null,n===null||n.return===null){Ae=1,Ns=e,Ie=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=l,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var C=np(a);if(C!==null){C.flags&=-257,rp(C,a,l,s,e),C.mode&1&&tp(s,d,e),e=C,c=d;var N=e.updateQueue;if(N===null){var O=new Set;O.add(c),e.updateQueue=O}else N.add(c);break e}else{if(!(e&1)){tp(s,d,e),Ch();break e}c=Error(V(426))}}else if(ce&&l.mode&1){var F=np(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),rp(F,a,l,s,e),uh(hi(c,l));break e}}s=c=hi(c,l),Ae!==4&&(Ae=2),ls===null?ls=[s]:ls.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=sy(s,c,e);Qf(s,E);break e;case 1:l=c;var y=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(jn===null||!jn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=oy(s,l,e);Qf(s,D);break e}}s=s.return}while(s!==null)}Ay(n)}catch(U){e=U,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function Iy(){var t=xa.current;return xa.current=ka,t===null?ka:t}function Ch(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ce===null||!(Er&268435455)&&!(ol&268435455)||xn(Ce,Le)}function Ra(t,e){var n=Z;Z|=2;var r=Iy();(Ce!==t||Le!==e)&&(Jt=null,pr(t,e));do try{pE();break}catch(i){Ty(t,i)}while(1);if(hh(),Z=n,xa.current=r,Ie!==null)throw Error(V(261));return Ce=null,Le=0,Ae}function pE(){for(;Ie!==null;)Sy(Ie)}function mE(){for(;Ie!==null&&!U0();)Sy(Ie)}function Sy(t){var e=xy(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?Ay(t):Ie=e,Sh.current=null}function Ay(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lE(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,Ie=null;return}}else if(n=aE(n,e,ut),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Ae===0&&(Ae=5)}function lr(t,e,n){var r=te,i=wt.transition;try{wt.transition=null,te=1,gE(t,e,n,r)}finally{wt.transition=i,te=r}return null}function gE(t,e,n,r){do ti();while(On!==null);if(Z&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(X0(t,s),t===Ce&&(Ie=Ce=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,Py(ha,function(){return ti(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var a=te;te=1;var l=Z;Z|=4,Sh.current=null,cE(t,n),_y(n,t),Lw(ec),fa=!!Zu,ec=Zu=null,t.current=n,hE(n),z0(),Z=l,te=a,wt.transition=s}else t.current=n;if(Vo&&(Vo=!1,On=t,Ca=i),s=t.pendingLanes,s===0&&(jn=null),H0(n.stateNode),ot(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pa)throw Pa=!1,t=wc,wc=null,t;return Ca&1&&t.tag!==0&&ti(),s=t.pendingLanes,s&1?t===Ec?us++:(us=0,Ec=t):us=0,tr(),null}function ti(){if(On!==null){var t=sg(Ca),e=wt.transition,n=te;try{if(wt.transition=null,te=16>t?16:t,On===null)var r=!1;else{if(t=On,On=null,Ca=0,Z&6)throw Error(V(331));var i=Z;for(Z|=4,B=t.current;B!==null;){var s=B,a=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(B=d;B!==null;){var m=B;switch(m.tag){case 0:case 11:case 15:as(8,m,s)}var v=m.child;if(v!==null)v.return=m,B=v;else for(;B!==null;){m=B;var g=m.sibling,C=m.return;if(gy(m),m===d){B=null;break}if(g!==null){g.return=C,B=g;break}B=C}}}var N=s.alternate;if(N!==null){var O=N.child;if(O!==null){N.child=null;do{var F=O.sibling;O.sibling=null,O=F}while(O!==null)}}B=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,B=a;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:as(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,B=E;break e}B=s.return}}var y=t.current;for(B=y;B!==null;){a=B;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,B=S;else e:for(a=y;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:sl(9,l)}}catch(U){ye(l,l.return,U)}if(l===a){B=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,B=D;break e}B=l.return}}if(Z=i,tr(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Ya,t)}catch{}r=!0}return r}finally{te=n,wt.transition=e}}return!1}function gp(t,e,n){e=hi(n,e),e=sy(t,e,1),t=Fn(t,e,1),e=Ze(),t!==null&&(Bs(t,1,e),ot(t,e))}function ye(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){t=hi(n,t),t=oy(e,t,1),e=Fn(e,t,1),t=Ze(),e!==null&&(Bs(e,1,t),ot(e,t));break}}e=e.return}}function yE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ze(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(Le&n)===n&&(Ae===4||Ae===3&&(Le&130023424)===Le&&500>we()-kh?pr(t,0):Ah|=n),ot(t,e)}function ky(t,e){e===0&&(t.mode&1?(e=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):e=1);var n=Ze();t=dn(t,e),t!==null&&(Bs(t,e,n),ot(t,n))}function vE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ky(t,n)}function _E(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),ky(t,n)}var xy;xy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rt=!1,oE(t,e,n);rt=!!(t.flags&131072)}else rt=!1,ce&&e.flags&1048576&&Ng(e,wa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yo(t,e),t=e.pendingProps;var i=ai(e,Ge.current);ei(e,n),i=_h(null,e,r,t,i,n);var s=wh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,st(r)?(s=!0,va(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ph(e),i.updater=il,e.stateNode=i,i._reactInternals=e,uc(e,r,t,n),e=dc(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&ah(e),Je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=EE(r),t=At(r,t),i){case 0:e=hc(null,e,r,t,n);break e;case 1:e=op(null,e,r,t,n);break e;case 11:e=ip(null,e,r,t,n);break e;case 14:e=sp(null,e,r,At(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),hc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),op(t,e,r,i,n);case 3:e:{if(cy(e),t===null)throw Error(V(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mg(t,e),Ia(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=hi(Error(V(423)),e),e=ap(t,e,r,n,i);break e}else if(r!==i){i=hi(Error(V(424)),e),e=ap(t,e,r,n,i);break e}else for(ct=Mn(e.stateNode.containerInfo.firstChild),ht=e,ce=!0,xt=null,n=Vg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),r===i){e=fn(t,e,n);break e}Je(t,e,r,n)}e=e.child}return e;case 5:return Fg(e),t===null&&oc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,tc(r,i)?a=null:s!==null&&tc(r,s)&&(e.flags|=32),uy(t,e),Je(t,e,a,n),e.child;case 6:return t===null&&oc(e),null;case 13:return hy(t,e,n);case 4:return mh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ui(e,null,r,n):Je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),ip(t,e,r,i,n);case 7:return Je(t,e,e.pendingProps,n),e.child;case 8:return Je(t,e,e.pendingProps.children,n),e.child;case 12:return Je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,se(Ea,r._currentValue),r._currentValue=a,s!==null)if(Ot(s.value,a)){if(s.children===i.children&&!it.current){e=fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=an(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ac(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ac(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ei(e,n),i=Et(i),r=r(i),e.flags|=1,Je(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),sp(t,e,r,i,n);case 15:return ay(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Yo(t,e),e.tag=1,st(r)?(t=!0,va(e)):t=!1,ei(e,n),iy(e,r,i),uc(e,r,i,n),dc(null,e,r,!0,t,n);case 19:return dy(t,e,n);case 22:return ly(t,e,n)}throw Error(V(156,e.tag))};function Py(t,e){return tg(t,e)}function wE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(t,e,n,r){return new wE(t,e,n,r)}function Rh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function EE(t){if(typeof t=="function")return Rh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qc)return 11;if(t===Xc)return 14}return 2}function zn(t,e){var n=t.alternate;return n===null?(n=_t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ea(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Rh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Fr:return mr(n.children,i,s,e);case Gc:a=8,i|=8;break;case Ou:return t=_t(12,n,e,i|2),t.elementType=Ou,t.lanes=s,t;case bu:return t=_t(13,n,e,i),t.elementType=bu,t.lanes=s,t;case Vu:return t=_t(19,n,e,i),t.elementType=Vu,t.lanes=s,t;case Fm:return al(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lm:a=10;break e;case Mm:a=9;break e;case Qc:a=11;break e;case Xc:a=14;break e;case Sn:a=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=_t(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mr(t,e,n,r){return t=_t(7,t,r,e),t.lanes=n,t}function al(t,e,n,r){return t=_t(22,t,r,e),t.elementType=Fm,t.lanes=n,t.stateNode={isHidden:!1},t}function wu(t,e,n){return t=_t(6,t,null,e),t.lanes=n,t}function Eu(t,e,n){return e=_t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nh(t,e,n,r,i,s,a,l,c){return t=new TE(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ph(s),t}function IE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Cy(t){if(!t)return Gn;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(st(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(st(n))return Cg(t,n,e)}return e}function Ry(t,e,n,r,i,s,a,l,c){return t=Nh(n,r,!0,t,i,s,a,l,c),t.context=Cy(null),n=t.current,r=Ze(),i=Un(n),s=an(r,i),s.callback=e??null,Fn(n,s,i),t.current.lanes=i,Bs(t,i,r),ot(t,r),t}function ll(t,e,n,r){var i=e.current,s=Ze(),a=Un(i);return n=Cy(n),e.context===null?e.context=n:e.pendingContext=n,e=an(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fn(i,e,a),t!==null&&(Dt(t,i,a,s),Go(t,i,a)),a}function Na(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dh(t,e){yp(t,e),(t=t.alternate)&&yp(t,e)}function SE(){return null}var Ny=typeof reportError=="function"?reportError:function(t){console.error(t)};function Oh(t){this._internalRoot=t}ul.prototype.render=Oh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));ll(t,e,null,null)};ul.prototype.unmount=Oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){ll(null,t,null,null)}),e[hn]=null}};function ul(t){this._internalRoot=t}ul.prototype.unstable_scheduleHydration=function(t){if(t){var e=lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kn.length&&e!==0&&e<kn[n].priority;n++);kn.splice(n,0,t),n===0&&cg(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function AE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Na(a);s.call(d)}}var a=Ry(e,r,t,0,null,!1,!1,"",vp);return t._reactRootContainer=a,t[hn]=a.current,Is(t.nodeType===8?t.parentNode:t),Tr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Na(c);l.call(d)}}var c=Nh(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=c,t[hn]=c.current,Is(t.nodeType===8?t.parentNode:t),Tr(function(){ll(e,c,n,r)}),c}function hl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Na(a);l.call(c)}}ll(e,a,t,i)}else a=AE(n,e,t,i,r);return Na(a)}og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ji(e.pendingLanes);n!==0&&(Zc(e,n|1),ot(e,we()),!(Z&6)&&(di=we()+500,tr()))}break;case 13:Tr(function(){var r=dn(t,1);if(r!==null){var i=Ze();Dt(r,t,1,i)}}),Dh(t,1)}};eh=function(t){if(t.tag===13){var e=dn(t,134217728);if(e!==null){var n=Ze();Dt(e,t,134217728,n)}Dh(t,134217728)}};ag=function(t){if(t.tag===13){var e=Un(t),n=dn(t,e);if(n!==null){var r=Ze();Dt(n,t,e,r)}Dh(t,e)}};lg=function(){return te};ug=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};Wu=function(t,e,n){switch(e){case"input":if(Fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=tl(r);if(!i)throw Error(V(90));Um(r),Fu(r,i)}}}break;case"textarea":Bm(t,n);break;case"select":e=n.value,e!=null&&Xr(t,!!n.multiple,e,!1)}};Qm=xh;Xm=Tr;var kE={usingClientEntryPoint:!1,Events:[Hs,Br,tl,qm,Gm,xh]},qi={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xE={bundleType:qi.bundleType,version:qi.version,rendererPackageName:qi.rendererPackageName,rendererConfig:qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zm(t),t===null?null:t.stateNode},findFiberByHostInstance:qi.findFiberByHostInstance||SE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{Ya=Lo.inject(xE),Ut=Lo}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kE;ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(V(200));return IE(t,e,null,n)};ft.createRoot=function(t,e){if(!bh(t))throw Error(V(299));var n=!1,r="",i=Ny;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nh(t,1,!1,null,null,n,!1,r,i),t[hn]=e.current,Is(t.nodeType===8?t.parentNode:t),new Oh(e)};ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=Zm(e),t=t===null?null:t.stateNode,t};ft.flushSync=function(t){return Tr(t)};ft.hydrate=function(t,e,n){if(!cl(e))throw Error(V(200));return hl(null,t,e,!0,n)};ft.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Ny;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ry(e,null,t,1,n??null,i,!1,s,a),t[hn]=e.current,Is(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ul(e)};ft.render=function(t,e,n){if(!cl(e))throw Error(V(200));return hl(null,t,e,!1,n)};ft.unmountComponentAtNode=function(t){if(!cl(t))throw Error(V(40));return t._reactRootContainer?(Tr(function(){hl(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1};ft.unstable_batchedUpdates=xh;ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cl(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return hl(t,e,n,!1,r)};ft.version="18.3.1-next-f1338f8080-20240426";function Dy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dy)}catch(t){console.error(t)}}Dy(),Dm.exports=ft;var PE=Dm.exports,Oy,_p=PE;Oy=_p.createRoot,_p.hydrateRoot;var CE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const RE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),NE=(t,e)=>{const n=gt.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,children:l,...c},d)=>gt.createElement("svg",{ref:d,...CE,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:`lucide lucide-${RE(t)}`,...c},[...e.map(([m,v])=>gt.createElement(m,v)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n};var Vt=NE;const wp=Vt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),DE=Vt("CheckCircle2",[["path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",key:"14v8dr"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),OE=Vt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),bE=Vt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),VE=Vt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),LE=Vt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),ME=Vt("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),FE=Vt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),jE=Vt("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),UE=Vt("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),zE=Vt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,m=s>>2,v=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,C=d&63;c||(C=64,a||(g=64)),r.push(n[m],n[v],n[g],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(by(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const v=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||v==null)throw new $E;const g=s<<2|l>>4;if(r.push(g),d!==64){const C=l<<4&240|d>>2;if(r.push(C),v!==64){const N=d<<6&192|v;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $E extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HE=function(t){const e=by(t);return Vy.encodeByteArray(e,!0)},Da=function(t){return HE(t).replace(/\./g,"")},Ly=function(t){try{return Vy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=()=>WE().__FIREBASE_DEFAULTS__,qE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ly(t[1]);return e&&JSON.parse(e)},dl=()=>{try{return KE()||qE()||GE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},My=t=>{var e,n;return(n=(e=dl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},QE=t=>{const e=My(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fy=()=>{var t;return(t=dl())===null||t===void 0?void 0:t.config},jy=t=>{var e;return(e=dl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Da(JSON.stringify(n)),Da(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function ZE(){var t;const e=(t=dl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function t1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function n1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r1(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function i1(){return!ZE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function s1(){try{return typeof indexedDB=="object"}catch{return!1}}function o1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=a1,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?l1(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new vn(i,l,r)}}function l1(t,e){return t.replace(u1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const u1=/\{\$([^}]+)}/g;function c1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Ep(s)&&Ep(a)){if(!Oa(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ep(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function h1(t,e){const n=new d1(t,e);return n.subscribe.bind(n)}class d1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");f1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tu),i.error===void 0&&(i.error=Tu),i.complete===void 0&&(i.complete=Tu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function f1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g1(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:m1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m1(t){return t===ur?void 0:t}function g1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new p1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const v1={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},_1=X.INFO,w1={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},E1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=w1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=_1,this._logHandler=E1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const T1=(t,e)=>e.some(n=>t instanceof n);let Tp,Ip;function I1(){return Tp||(Tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function S1(){return Ip||(Ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uy=new WeakMap,Sc=new WeakMap,zy=new WeakMap,Iu=new WeakMap,Lh=new WeakMap;function A1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Bn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Uy.set(n,t)}).catch(()=>{}),Lh.set(e,t),e}function k1(t){if(Sc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Sc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function x1(t){Ac=t(Ac)}function P1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Su(this),e,...n);return zy.set(r,e.sort?e.sort():[e]),Bn(r)}:S1().includes(t)?function(...e){return t.apply(Su(this),e),Bn(Uy.get(this))}:function(...e){return Bn(t.apply(Su(this),e))}}function C1(t){return typeof t=="function"?P1(t):(t instanceof IDBTransaction&&k1(t),T1(t,I1())?new Proxy(t,Ac):t)}function Bn(t){if(t instanceof IDBRequest)return A1(t);if(Iu.has(t))return Iu.get(t);const e=C1(t);return e!==t&&(Iu.set(t,e),Lh.set(e,t)),e}const Su=t=>Lh.get(t);function R1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Bn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Bn(a.result),c.oldVersion,c.newVersion,Bn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const N1=["get","getKey","getAll","getAllKeys","count"],D1=["put","add","delete","clear"],Au=new Map;function Sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Au.get(e))return Au.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=D1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||N1.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&c.done]))[0]};return Au.set(e,s),s}x1(t=>({...t,get:(e,n,r)=>Sp(e,n)||t.get(e,n,r),has:(e,n)=>!!Sp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(b1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function b1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",Ap="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Vh("@firebase/app"),V1="@firebase/app-compat",L1="@firebase/analytics-compat",M1="@firebase/analytics",F1="@firebase/app-check-compat",j1="@firebase/app-check",U1="@firebase/auth",z1="@firebase/auth-compat",B1="@firebase/database",$1="@firebase/data-connect",H1="@firebase/database-compat",W1="@firebase/functions",K1="@firebase/functions-compat",q1="@firebase/installations",G1="@firebase/installations-compat",Q1="@firebase/messaging",X1="@firebase/messaging-compat",Y1="@firebase/performance",J1="@firebase/performance-compat",Z1="@firebase/remote-config",eT="@firebase/remote-config-compat",tT="@firebase/storage",nT="@firebase/storage-compat",rT="@firebase/firestore",iT="@firebase/vertexai-preview",sT="@firebase/firestore-compat",oT="firebase",aT="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="[DEFAULT]",lT={[kc]:"fire-core",[V1]:"fire-core-compat",[M1]:"fire-analytics",[L1]:"fire-analytics-compat",[j1]:"fire-app-check",[F1]:"fire-app-check-compat",[U1]:"fire-auth",[z1]:"fire-auth-compat",[B1]:"fire-rtdb",[$1]:"fire-data-connect",[H1]:"fire-rtdb-compat",[W1]:"fire-fn",[K1]:"fire-fn-compat",[q1]:"fire-iid",[G1]:"fire-iid-compat",[Q1]:"fire-fcm",[X1]:"fire-fcm-compat",[Y1]:"fire-perf",[J1]:"fire-perf-compat",[Z1]:"fire-rc",[eT]:"fire-rc-compat",[tT]:"fire-gcs",[nT]:"fire-gcs-compat",[rT]:"fire-fst",[sT]:"fire-fst-compat",[iT]:"fire-vertex","fire-js":"fire-js",[oT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Map,uT=new Map,Pc=new Map;function kp(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Pc.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of ba.values())kp(n,t);for(const n of uT.values())kp(n,t);return!0}function Mh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Ks("app","Firebase",cT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=aT;function By(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=Fy()),!n)throw $n.create("no-options");const s=ba.get(i);if(s){if(Oa(n,s.options)&&Oa(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const a=new y1(i);for(const c of Pc.values())a.addComponent(c);const l=new hT(n,r,a);return ba.set(i,l),l}function $y(t=xc){const e=ba.get(t);if(!e&&t===xc&&Fy())return By();if(!e)throw $n.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let i=(r=lT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(l.join(" "));return}fi(new Ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="firebase-heartbeat-database",fT=1,Ds="firebase-heartbeat-store";let ku=null;function Hy(){return ku||(ku=R1(dT,fT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ds)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),ku}async function pT(t){try{const n=(await Hy()).transaction(Ds),r=await n.objectStore(Ds).get(Wy(t));return await n.done,r}catch(e){if(e instanceof vn)pn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function xp(t,e){try{const r=(await Hy()).transaction(Ds,"readwrite");await r.objectStore(Ds).put(e,Wy(t)),await r.done}catch(n){if(n instanceof vn)pn.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function Wy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=1024,gT=30*24*60*60*1e3;class yT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _T(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=gT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pp(),{heartbeatsToSend:r,unsentEntries:i}=vT(this._heartbeatsCache.heartbeats),s=Da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pn.warn(n),""}}}function Pp(){return new Date().toISOString().substring(0,10)}function vT(t,e=mT){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Cp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _T{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s1()?o1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cp(t){return Da(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){fi(new Ir("platform-logger",e=>new O1(e),"PRIVATE")),fi(new Ir("heartbeat",e=>new yT(e),"PRIVATE")),Hn(kc,Ap,t),Hn(kc,Ap,"esm2017"),Hn("fire-js","")}wT("");var ET="firebase",TT="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(ET,TT,"app");var Rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ky;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,p){function _(){}_.prototype=p.prototype,w.D=p.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(T,A,P){for(var I=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)I[mt-2]=arguments[mt];return p.prototype[A].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,p,_){_||(_=0);var T=Array(16);if(typeof p=="string")for(var A=0;16>A;++A)T[A]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(A=0;16>A;++A)T[A]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=w.g[0],_=w.g[1],A=w.g[2];var P=w.g[3],I=p+(P^_&(A^P))+T[0]+3614090360&4294967295;p=_+(I<<7&4294967295|I>>>25),I=P+(A^p&(_^A))+T[1]+3905402710&4294967295,P=p+(I<<12&4294967295|I>>>20),I=A+(_^P&(p^_))+T[2]+606105819&4294967295,A=P+(I<<17&4294967295|I>>>15),I=_+(p^A&(P^p))+T[3]+3250441966&4294967295,_=A+(I<<22&4294967295|I>>>10),I=p+(P^_&(A^P))+T[4]+4118548399&4294967295,p=_+(I<<7&4294967295|I>>>25),I=P+(A^p&(_^A))+T[5]+1200080426&4294967295,P=p+(I<<12&4294967295|I>>>20),I=A+(_^P&(p^_))+T[6]+2821735955&4294967295,A=P+(I<<17&4294967295|I>>>15),I=_+(p^A&(P^p))+T[7]+4249261313&4294967295,_=A+(I<<22&4294967295|I>>>10),I=p+(P^_&(A^P))+T[8]+1770035416&4294967295,p=_+(I<<7&4294967295|I>>>25),I=P+(A^p&(_^A))+T[9]+2336552879&4294967295,P=p+(I<<12&4294967295|I>>>20),I=A+(_^P&(p^_))+T[10]+4294925233&4294967295,A=P+(I<<17&4294967295|I>>>15),I=_+(p^A&(P^p))+T[11]+2304563134&4294967295,_=A+(I<<22&4294967295|I>>>10),I=p+(P^_&(A^P))+T[12]+1804603682&4294967295,p=_+(I<<7&4294967295|I>>>25),I=P+(A^p&(_^A))+T[13]+4254626195&4294967295,P=p+(I<<12&4294967295|I>>>20),I=A+(_^P&(p^_))+T[14]+2792965006&4294967295,A=P+(I<<17&4294967295|I>>>15),I=_+(p^A&(P^p))+T[15]+1236535329&4294967295,_=A+(I<<22&4294967295|I>>>10),I=p+(A^P&(_^A))+T[1]+4129170786&4294967295,p=_+(I<<5&4294967295|I>>>27),I=P+(_^A&(p^_))+T[6]+3225465664&4294967295,P=p+(I<<9&4294967295|I>>>23),I=A+(p^_&(P^p))+T[11]+643717713&4294967295,A=P+(I<<14&4294967295|I>>>18),I=_+(P^p&(A^P))+T[0]+3921069994&4294967295,_=A+(I<<20&4294967295|I>>>12),I=p+(A^P&(_^A))+T[5]+3593408605&4294967295,p=_+(I<<5&4294967295|I>>>27),I=P+(_^A&(p^_))+T[10]+38016083&4294967295,P=p+(I<<9&4294967295|I>>>23),I=A+(p^_&(P^p))+T[15]+3634488961&4294967295,A=P+(I<<14&4294967295|I>>>18),I=_+(P^p&(A^P))+T[4]+3889429448&4294967295,_=A+(I<<20&4294967295|I>>>12),I=p+(A^P&(_^A))+T[9]+568446438&4294967295,p=_+(I<<5&4294967295|I>>>27),I=P+(_^A&(p^_))+T[14]+3275163606&4294967295,P=p+(I<<9&4294967295|I>>>23),I=A+(p^_&(P^p))+T[3]+4107603335&4294967295,A=P+(I<<14&4294967295|I>>>18),I=_+(P^p&(A^P))+T[8]+1163531501&4294967295,_=A+(I<<20&4294967295|I>>>12),I=p+(A^P&(_^A))+T[13]+2850285829&4294967295,p=_+(I<<5&4294967295|I>>>27),I=P+(_^A&(p^_))+T[2]+4243563512&4294967295,P=p+(I<<9&4294967295|I>>>23),I=A+(p^_&(P^p))+T[7]+1735328473&4294967295,A=P+(I<<14&4294967295|I>>>18),I=_+(P^p&(A^P))+T[12]+2368359562&4294967295,_=A+(I<<20&4294967295|I>>>12),I=p+(_^A^P)+T[5]+4294588738&4294967295,p=_+(I<<4&4294967295|I>>>28),I=P+(p^_^A)+T[8]+2272392833&4294967295,P=p+(I<<11&4294967295|I>>>21),I=A+(P^p^_)+T[11]+1839030562&4294967295,A=P+(I<<16&4294967295|I>>>16),I=_+(A^P^p)+T[14]+4259657740&4294967295,_=A+(I<<23&4294967295|I>>>9),I=p+(_^A^P)+T[1]+2763975236&4294967295,p=_+(I<<4&4294967295|I>>>28),I=P+(p^_^A)+T[4]+1272893353&4294967295,P=p+(I<<11&4294967295|I>>>21),I=A+(P^p^_)+T[7]+4139469664&4294967295,A=P+(I<<16&4294967295|I>>>16),I=_+(A^P^p)+T[10]+3200236656&4294967295,_=A+(I<<23&4294967295|I>>>9),I=p+(_^A^P)+T[13]+681279174&4294967295,p=_+(I<<4&4294967295|I>>>28),I=P+(p^_^A)+T[0]+3936430074&4294967295,P=p+(I<<11&4294967295|I>>>21),I=A+(P^p^_)+T[3]+3572445317&4294967295,A=P+(I<<16&4294967295|I>>>16),I=_+(A^P^p)+T[6]+76029189&4294967295,_=A+(I<<23&4294967295|I>>>9),I=p+(_^A^P)+T[9]+3654602809&4294967295,p=_+(I<<4&4294967295|I>>>28),I=P+(p^_^A)+T[12]+3873151461&4294967295,P=p+(I<<11&4294967295|I>>>21),I=A+(P^p^_)+T[15]+530742520&4294967295,A=P+(I<<16&4294967295|I>>>16),I=_+(A^P^p)+T[2]+3299628645&4294967295,_=A+(I<<23&4294967295|I>>>9),I=p+(A^(_|~P))+T[0]+4096336452&4294967295,p=_+(I<<6&4294967295|I>>>26),I=P+(_^(p|~A))+T[7]+1126891415&4294967295,P=p+(I<<10&4294967295|I>>>22),I=A+(p^(P|~_))+T[14]+2878612391&4294967295,A=P+(I<<15&4294967295|I>>>17),I=_+(P^(A|~p))+T[5]+4237533241&4294967295,_=A+(I<<21&4294967295|I>>>11),I=p+(A^(_|~P))+T[12]+1700485571&4294967295,p=_+(I<<6&4294967295|I>>>26),I=P+(_^(p|~A))+T[3]+2399980690&4294967295,P=p+(I<<10&4294967295|I>>>22),I=A+(p^(P|~_))+T[10]+4293915773&4294967295,A=P+(I<<15&4294967295|I>>>17),I=_+(P^(A|~p))+T[1]+2240044497&4294967295,_=A+(I<<21&4294967295|I>>>11),I=p+(A^(_|~P))+T[8]+1873313359&4294967295,p=_+(I<<6&4294967295|I>>>26),I=P+(_^(p|~A))+T[15]+4264355552&4294967295,P=p+(I<<10&4294967295|I>>>22),I=A+(p^(P|~_))+T[6]+2734768916&4294967295,A=P+(I<<15&4294967295|I>>>17),I=_+(P^(A|~p))+T[13]+1309151649&4294967295,_=A+(I<<21&4294967295|I>>>11),I=p+(A^(_|~P))+T[4]+4149444226&4294967295,p=_+(I<<6&4294967295|I>>>26),I=P+(_^(p|~A))+T[11]+3174756917&4294967295,P=p+(I<<10&4294967295|I>>>22),I=A+(p^(P|~_))+T[2]+718787259&4294967295,A=P+(I<<15&4294967295|I>>>17),I=_+(P^(A|~p))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var _=p-this.blockSize,T=this.B,A=this.h,P=0;P<p;){if(A==0)for(;P<=_;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<p;)if(T[A++]=w.charCodeAt(P++),A==this.blockSize){i(this,T),A=0;break}}else for(;P<p;)if(T[A++]=w[P++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var _=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=_&255,_/=256;for(this.u(w),w=Array(16),p=_=0;4>p;++p)for(var T=0;32>T;T+=8)w[_++]=this.g[p]>>>T&255;return w};function s(w,p){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=p(w)}function a(w,p){this.h=p;for(var _=[],T=!0,A=w.length-1;0<=A;A--){var P=w[A]|0;T&&P==p||(_[A]=P,T=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?s(w,function(p){return new a([p|0],0>p?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return F(d(-w));for(var p=[],_=1,T=0;w>=_;T++)p[T]=w/_|0,_*=4294967296;return new a(p,0)}function m(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return F(m(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),T=v,A=0;A<w.length;A+=8){var P=Math.min(8,w.length-A),I=parseInt(w.substring(A,A+P),p);8>P?(P=d(Math.pow(p,P)),T=T.j(P).add(d(I))):(T=T.j(_),T=T.add(d(I)))}return T}var v=c(0),g=c(1),C=c(16777216);t=a.prototype,t.m=function(){if(O(this))return-F(this).m();for(var w=0,p=1,_=0;_<this.g.length;_++){var T=this.i(_);w+=(0<=T?T:4294967296+T)*p,p*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(O(this))return"-"+F(this).toString(w);for(var p=d(Math.pow(w,6)),_=this,T="";;){var A=D(_,p).g;_=E(_,A.j(p));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,N(_))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function O(w){return w.h==-1}t.l=function(w){return w=E(this,w),O(w)?-1:N(w)?0:1};function F(w){for(var p=w.g.length,_=[],T=0;T<p;T++)_[T]=~w.g[T];return new a(_,~w.h).add(g)}t.abs=function(){return O(this)?F(this):this},t.add=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],T=0,A=0;A<=p;A++){var P=T+(this.i(A)&65535)+(w.i(A)&65535),I=(P>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=I>>>16,P&=65535,I&=65535,_[A]=I<<16|P}return new a(_,_[_.length-1]&-2147483648?-1:0)};function E(w,p){return w.add(F(p))}t.j=function(w){if(N(this)||N(w))return v;if(O(this))return O(w)?F(this).j(F(w)):F(F(this).j(w));if(O(w))return F(this.j(F(w)));if(0>this.l(C)&&0>w.l(C))return d(this.m()*w.m());for(var p=this.g.length+w.g.length,_=[],T=0;T<2*p;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var P=this.i(T)>>>16,I=this.i(T)&65535,mt=w.i(A)>>>16,nr=w.i(A)&65535;_[2*T+2*A]+=I*nr,y(_,2*T+2*A),_[2*T+2*A+1]+=P*nr,y(_,2*T+2*A+1),_[2*T+2*A+1]+=I*mt,y(_,2*T+2*A+1),_[2*T+2*A+2]+=P*mt,y(_,2*T+2*A+2)}for(T=0;T<p;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=p;T<2*p;T++)_[T]=0;return new a(_,0)};function y(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function S(w,p){this.g=w,this.h=p}function D(w,p){if(N(p))throw Error("division by zero");if(N(w))return new S(v,v);if(O(w))return p=D(F(w),p),new S(F(p.g),F(p.h));if(O(p))return p=D(w,F(p)),new S(F(p.g),p.h);if(30<w.g.length){if(O(w)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var _=g,T=p;0>=T.l(w);)_=U(_),T=U(T);var A=j(_,1),P=j(T,1);for(T=j(T,2),_=j(_,2);!N(T);){var I=P.add(T);0>=I.l(w)&&(A=A.add(_),P=I),T=j(T,1),_=j(_,1)}return p=E(w,A.j(p)),new S(A,p)}for(A=v;0<=w.l(p);){for(_=Math.max(1,Math.floor(w.m()/p.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=d(_),I=P.j(p);O(I)||0<I.l(w);)_-=T,P=d(_),I=P.j(p);N(P)&&(P=g),A=A.add(P),w=E(w,I)}return new S(A,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)&w.i(T);return new a(_,this.h&w.h)},t.or=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)|w.i(T);return new a(_,this.h|w.h)},t.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)^w.i(T);return new a(_,this.h^w.h)};function U(w){for(var p=w.g.length+1,_=[],T=0;T<p;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(_,w.h)}function j(w,p){var _=p>>5;p%=32;for(var T=w.g.length-_,A=[],P=0;P<T;P++)A[P]=0<p?w.i(P+_)>>>p|w.i(P+_+1)<<32-p:w.i(P+_);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Ky=a}).apply(typeof Rp<"u"?Rp:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qy,es,Gy,ta,Cc,Qy,Xy,Yy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var x=o[f];if(!(x in h))break e;h=h[x]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,x={next:function(){if(!f&&h<o.length){var R=h++;return{value:u(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function m(o,u,h){return o.call.apply(o.bind,arguments)}function v(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,f),o.apply(u,x)}}return function(){return o.apply(u,arguments)}}function g(o,u,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,g.apply(null,arguments)}function C(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,x,R){for(var M=Array(arguments.length-2),re=2;re<arguments.length;re++)M[re-2]=arguments[re];return u.prototype[x].apply(f,M)}}function O(o){const u=o.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function F(o,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(c(f)){const x=o.length||0,R=f.length||0;o.length=x+R;for(let M=0;M<R;M++)o[x+M]=f[M]}else o.push(f)}}class E{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function y(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function w(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function p(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let h,f;for(let x=1;x<arguments.length;x++){f=arguments[x];for(h in f)o[h]=f[h];for(let R=0;R<_.length;R++)h=_[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function A(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function P(o){l.setTimeout(()=>{throw o},0)}function I(){var o=K;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class mt{constructor(){this.h=this.g=null}add(u,h){const f=nr.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var nr=new E(()=>new ki,o=>o.reset());class ki{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,z=!1,K=new mt,q=()=>{const o=l.Promise.resolve(void 0);Kt=()=>{o.then(he)}};var he=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(h){P(h)}var u=nr;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}z=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function Gt(o,u){if(_e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(U){e:{try{D(u.nodeName);var x=!0;break e}catch{}x=!1}x||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Gt.aa.h.call(this)}}N(Gt,_e);var Qt={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),x_=0;function P_(o,u,h,f,x){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=x,this.key=++x_,this.da=this.fa=!1}function to(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function no(o){this.src=o,this.g={},this.h=0}no.prototype.add=function(o,u,h,f,x){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var M=xl(o,u,f,x);return-1<M?(u=o[M],h||(u.fa=!1)):(u=new P_(u,this.src,R,!!f,x),u.fa=h,o.push(u)),u};function kl(o,u){var h=u.type;if(h in o.g){var f=o.g[h],x=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=x)&&Array.prototype.splice.call(f,x,1),R&&(to(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function xl(o,u,h,f){for(var x=0;x<o.length;++x){var R=o[x];if(!R.da&&R.listener==u&&R.capture==!!h&&R.ha==f)return x}return-1}var Pl="closure_lm_"+(1e6*Math.random()|0),Cl={};function cd(o,u,h,f,x){if(f&&f.once)return dd(o,u,h,f,x);if(Array.isArray(u)){for(var R=0;R<u.length;R++)cd(o,u[R],h,f,x);return null}return h=Ol(h),o&&o[Lt]?o.K(u,h,d(f)?!!f.capture:!!f,x):hd(o,u,h,!1,f,x)}function hd(o,u,h,f,x,R){if(!u)throw Error("Invalid event type");var M=d(x)?!!x.capture:!!x,re=Nl(o);if(re||(o[Pl]=re=new no(o)),h=re.add(u,h,f,M,R),h.proxy)return h;if(f=C_(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)qt||(x=M),x===void 0&&(x=!1),o.addEventListener(u.toString(),f,x);else if(o.attachEvent)o.attachEvent(pd(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function C_(){function o(h){return u.call(o.src,o.listener,h)}const u=R_;return o}function dd(o,u,h,f,x){if(Array.isArray(u)){for(var R=0;R<u.length;R++)dd(o,u[R],h,f,x);return null}return h=Ol(h),o&&o[Lt]?o.L(u,h,d(f)?!!f.capture:!!f,x):hd(o,u,h,!0,f,x)}function fd(o,u,h,f,x){if(Array.isArray(u))for(var R=0;R<u.length;R++)fd(o,u[R],h,f,x);else f=d(f)?!!f.capture:!!f,h=Ol(h),o&&o[Lt]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],h=xl(R,h,f,x),-1<h&&(to(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=Nl(o))&&(u=o.g[u.toString()],o=-1,u&&(o=xl(u,h,f,x)),(h=-1<o?u[o]:null)&&Rl(h))}function Rl(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Lt])kl(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(pd(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Nl(u))?(kl(h,o),h.h==0&&(h.src=null,u[Pl]=null)):to(o)}}}function pd(o){return o in Cl?Cl[o]:Cl[o]="on"+o}function R_(o,u){if(o.da)o=!0;else{u=new Gt(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&Rl(o),o=h.call(f,u)}return o}function Nl(o){return o=o[Pl],o instanceof no?o:null}var Dl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ol(o){return typeof o=="function"?o:(o[Dl]||(o[Dl]=function(u){return o.handleEvent(u)}),o[Dl])}function Fe(){ne.call(this),this.i=new no(this),this.M=this,this.F=null}N(Fe,ne),Fe.prototype[Lt]=!0,Fe.prototype.removeEventListener=function(o,u,h,f){fd(this,o,u,h,f)};function Xe(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new _e(u,o);else if(u instanceof _e)u.target=u.target||o;else{var x=u;u=new _e(f,o),T(u,x)}if(x=!0,h)for(var R=h.length-1;0<=R;R--){var M=u.g=h[R];x=ro(M,f,!0,u)&&x}if(M=u.g=o,x=ro(M,f,!0,u)&&x,x=ro(M,f,!1,u)&&x,h)for(R=0;R<h.length;R++)M=u.g=h[R],x=ro(M,f,!1,u)&&x}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)to(h[f]);delete o.g[u],o.h--}}this.F=null},Fe.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},Fe.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function ro(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var x=!0,R=0;R<u.length;++R){var M=u[R];if(M&&!M.da&&M.capture==h){var re=M.listener,Ne=M.ha||M.src;M.fa&&kl(o.i,M),x=re.call(Ne,f)!==!1&&x}}return x&&!f.defaultPrevented}function md(o,u,h){if(typeof o=="function")h&&(o=g(o,h));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function gd(o){o.g=md(()=>{o.g=null,o.i&&(o.i=!1,gd(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class N_ extends ne{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:gd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(o){ne.call(this),this.h=o,this.g={}}N(xi,ne);var yd=[];function vd(o){j(o.g,function(u,h){this.g.hasOwnProperty(h)&&Rl(u)},o),o.g={}}xi.prototype.N=function(){xi.aa.N.call(this),vd(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bl=l.JSON.stringify,D_=l.JSON.parse,O_=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Vl(){}Vl.prototype.h=null;function _d(o){return o.h||(o.h=o.i())}function wd(){}var Pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ll(){_e.call(this,"d")}N(Ll,_e);function Ml(){_e.call(this,"c")}N(Ml,_e);var rr={},Ed=null;function io(){return Ed=Ed||new Fe}rr.La="serverreachability";function Td(o){_e.call(this,rr.La,o)}N(Td,_e);function Ci(o){const u=io();Xe(u,new Td(u))}rr.STAT_EVENT="statevent";function Id(o,u){_e.call(this,rr.STAT_EVENT,o),this.stat=u}N(Id,_e);function Ye(o){const u=io();Xe(u,new Id(u,o))}rr.Ma="timingevent";function Sd(o,u){_e.call(this,rr.Ma,o),this.size=u}N(Sd,_e);function Ri(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function b_(o,u,h,f,x,R){o.info(function(){if(o.g)if(R)for(var M="",re=R.split("&"),Ne=0;Ne<re.length;Ne++){var ee=re[Ne].split("=");if(1<ee.length){var je=ee[0];ee=ee[1];var Ue=je.split("_");M=2<=Ue.length&&Ue[1]=="type"?M+(je+"="+ee+"&"):M+(je+"=redacted&")}}else M=null;else M=R;return"XMLHTTP REQ ("+f+") [attempt "+x+"]: "+u+`
`+h+`
`+M})}function V_(o,u,h,f,x,R,M){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+x+"]: "+u+`
`+h+`
`+R+" "+M})}function Nr(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+M_(o,h)+(f?" "+f:"")})}function L_(o,u){o.info(function(){return"TIMEOUT: "+u})}Ni.prototype.info=function(){};function M_(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var x=f[1];if(Array.isArray(x)&&!(1>x.length)){var R=x[0];if(R!="noop"&&R!="stop"&&R!="close")for(var M=1;M<x.length;M++)x[M]=""}}}}return bl(h)}catch{return u}}var so={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ad={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fl;function oo(){}N(oo,Vl),oo.prototype.g=function(){return new XMLHttpRequest},oo.prototype.i=function(){return{}},Fl=new oo;function _n(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kd}function kd(){this.i=null,this.g="",this.h=!1}var xd={},jl={};function Ul(o,u,h){o.L=1,o.v=co(Xt(u)),o.m=h,o.P=!0,Pd(o,null)}function Pd(o,u){o.F=Date.now(),ao(o),o.A=Xt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Bd(h.i,"t",f),o.C=0,h=o.j.J,o.h=new kd,o.g=af(o.j,h?u:null,!o.m),0<o.O&&(o.M=new N_(g(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var x="readystatechange";Array.isArray(x)||(x&&(yd[0]=x.toString()),x=yd);for(var R=0;R<x.length;R++){var M=cd(h,x[R],f||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ci(),b_(o.i,o.u,o.A,o.l,o.R,o.m)}_n.prototype.ca=function(o){o=o.target;const u=this.M;u&&Yt(o)==3?u.j():this.Y(o)},_n.prototype.Y=function(o){try{if(o==this.g)e:{const Ue=Yt(this.g);var u=this.g.Ba();const br=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Qd(this.g)))){this.J||Ue!=4||u==7||(u==8||0>=br?Ci(3):Ci(2)),zl(this);var h=this.g.Z();this.X=h;t:if(Cd(this)){var f=Qd(this.g);o="";var x=f.length,R=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Di(this);var M="";break t}this.h.i=new l.TextDecoder}for(u=0;u<x;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(R&&u==x-1)});f.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,V_(this.i,this.u,this.A,this.l,this.R,Ue,h),this.o){if(this.T&&!this.K){t:{if(this.g){var re,Ne=this.g;if((re=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(re)){var ee=re;break t}}ee=null}if(h=ee)Nr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bl(this,h);else{this.o=!1,this.s=3,Ye(12),ir(this),Di(this);break e}}if(this.P){h=!0;let It;for(;!this.J&&this.C<M.length;)if(It=F_(this,M),It==jl){Ue==4&&(this.s=4,Ye(14),h=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(It==xd){this.s=4,Ye(15),Nr(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else Nr(this.i,this.l,It,null),Bl(this,It);if(Cd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||M.length!=0||this.h.h||(this.s=1,Ye(16),h=!1),this.o=this.o&&h,!h)Nr(this.i,this.l,M,"[Invalid Chunked Response]"),ir(this),Di(this);else if(0<M.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Gl(je),je.M=!0,Ye(11))}}else Nr(this.i,this.l,M,null),Bl(this,M);Ue==4&&ir(this),this.o&&!this.J&&(Ue==4?nf(this.j,this):(this.o=!1,ao(this)))}else t0(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),ir(this),Di(this)}}}catch{}finally{}};function Cd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function F_(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?jl:(h=Number(u.substring(h,f)),isNaN(h)?xd:(f+=1,f+h>u.length?jl:(u=u.slice(f,f+h),o.C=f+h,u)))}_n.prototype.cancel=function(){this.J=!0,ir(this)};function ao(o){o.S=Date.now()+o.I,Rd(o,o.I)}function Rd(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ri(g(o.ba,o),u)}function zl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}_n.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(L_(this.i,this.A),this.L!=2&&(Ci(),Ye(17)),ir(this),this.s=2,Di(this)):Rd(this,this.S-o)};function Di(o){o.j.G==0||o.J||nf(o.j,o)}function ir(o){zl(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vd(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Bl(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||$l(h.h,o))){if(!o.K&&$l(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var x=f;if(x[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)yo(h),mo(h);else break e;ql(h),Ye(18)}}else h.za=x[1],0<h.za-h.T&&37500>x[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ri(g(h.Za,h),6e3));if(1>=Od(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else or(h,11)}else if((o.K||h.g==o)&&yo(h),!y(u))for(x=h.Da.g.parse(u),u=0;u<x.length;u++){let ee=x[u];if(h.T=ee[0],ee=ee[1],h.G==2)if(ee[0]=="c"){h.K=ee[1],h.ia=ee[2];const je=ee[3];je!=null&&(h.la=je,h.j.info("VER="+h.la));const Ue=ee[4];Ue!=null&&(h.Aa=Ue,h.j.info("SVER="+h.Aa));const br=ee[5];br!=null&&typeof br=="number"&&0<br&&(f=1.5*br,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const It=o.g;if(It){const _o=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_o){var R=f.h;R.g||_o.indexOf("spdy")==-1&&_o.indexOf("quic")==-1&&_o.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Hl(R,R.h),R.h=null))}if(f.D){const Ql=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Ql&&(f.ya=Ql,ae(f.I,f.D,Ql))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var M=o;if(f.qa=of(f,f.J?f.ia:null,f.W),M.K){bd(f.h,M);var re=M,Ne=f.L;Ne&&(re.I=Ne),re.B&&(zl(re),ao(re)),f.g=M}else ef(f);0<h.i.length&&go(h)}else ee[0]!="stop"&&ee[0]!="close"||or(h,7);else h.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?or(h,7):Kl(h):ee[0]!="noop"&&h.l&&h.l.ta(ee),h.v=0)}}Ci(4)}catch{}}var j_=class{constructor(o,u){this.g=o,this.map=u}};function Nd(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Od(o){return o.h?1:o.g?o.g.size:0}function $l(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Hl(o,u){o.g?o.g.add(u):o.h=u}function bd(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Nd.prototype.cancel=function(){if(this.i=Vd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Vd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return O(o.i)}function U_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function z_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const f in o)u[h++]=f;return u}}}function Ld(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=z_(o),f=U_(o),x=f.length,R=0;R<x;R++)u.call(void 0,f[R],h&&h[R],o)}var Md=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B_(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),x=null;if(0<=f){var R=o[h].substring(0,f);x=o[h].substring(f+1)}else R=o[h];u(R,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function sr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof sr){this.h=o.h,lo(this,o.j),this.o=o.o,this.g=o.g,uo(this,o.s),this.l=o.l;var u=o.i,h=new Vi;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Fd(this,h),this.m=o.m}else o&&(u=String(o).match(Md))?(this.h=!1,lo(this,u[1]||"",!0),this.o=Oi(u[2]||""),this.g=Oi(u[3]||"",!0),uo(this,u[4]),this.l=Oi(u[5]||"",!0),Fd(this,u[6]||"",!0),this.m=Oi(u[7]||"")):(this.h=!1,this.i=new Vi(null,this.h))}sr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(bi(u,jd,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(bi(u,jd,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(bi(h,h.charAt(0)=="/"?W_:H_,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",bi(h,q_)),o.join("")};function Xt(o){return new sr(o)}function lo(o,u,h){o.j=h?Oi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function uo(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Fd(o,u,h){u instanceof Vi?(o.i=u,G_(o.i,o.h)):(h||(u=bi(u,K_)),o.i=new Vi(u,o.h))}function ae(o,u,h){o.i.set(u,h)}function co(o){return ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Oi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function bi(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,$_),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function $_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var jd=/[#\/\?@]/g,H_=/[#\?:]/g,W_=/[#\?]/g,K_=/[#\?@]/g,q_=/#/g;function Vi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function wn(o){o.g||(o.g=new Map,o.h=0,o.i&&B_(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=Vi.prototype,t.add=function(o,u){wn(this),this.i=null,o=Dr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Ud(o,u){wn(o),u=Dr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function zd(o,u){return wn(o),u=Dr(o,u),o.g.has(u)}t.forEach=function(o,u){wn(this),this.g.forEach(function(h,f){h.forEach(function(x){o.call(u,x,f,this)},this)},this)},t.na=function(){wn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const x=o[f];for(let R=0;R<x.length;R++)h.push(u[f])}return h},t.V=function(o){wn(this);let u=[];if(typeof o=="string")zd(this,o)&&(u=u.concat(this.g.get(Dr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},t.set=function(o,u){return wn(this),this.i=null,o=Dr(this,o),zd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Bd(o,u,h){Ud(o,u),0<h.length&&(o.i=null,o.g.set(Dr(o,u),O(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const R=encodeURIComponent(String(f)),M=this.V(f);for(f=0;f<M.length;f++){var x=R;M[f]!==""&&(x+="="+encodeURIComponent(String(M[f]))),o.push(x)}}return this.i=o.join("&")};function Dr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function G_(o,u){u&&!o.j&&(wn(o),o.i=null,o.g.forEach(function(h,f){var x=f.toLowerCase();f!=x&&(Ud(this,f),Bd(this,x,h))},o)),o.j=u}function Q_(o,u){const h=new Ni;if(l.Image){const f=new Image;f.onload=C(En,h,"TestLoadImage: loaded",!0,u,f),f.onerror=C(En,h,"TestLoadImage: error",!1,u,f),f.onabort=C(En,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=C(En,h,"TestLoadImage: timeout",!1,u,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function X_(o,u){const h=new Ni,f=new AbortController,x=setTimeout(()=>{f.abort(),En(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(x),R.ok?En(h,"TestPingServer: ok",!0,u):En(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(x),En(h,"TestPingServer: error",!1,u)})}function En(o,u,h,f,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),f(h)}catch{}}function Y_(){this.g=new O_}function J_(o,u,h){const f=h||"";try{Ld(o,function(x,R){let M=x;d(x)&&(M=bl(x)),u.push(f+R+"="+encodeURIComponent(M))})}catch(x){throw u.push(f+"type="+encodeURIComponent("_badmap")),x}}function ho(o){this.l=o.Ub||null,this.j=o.eb||!1}N(ho,Vl),ho.prototype.g=function(){return new fo(this.l,this.j)},ho.prototype.i=function(o){return function(){return o}}({});function fo(o,u){Fe.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(fo,Fe),t=fo.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Mi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Mi(this)),this.g&&(this.readyState=3,Mi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$d(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function $d(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Li(this):Mi(this),this.readyState==3&&$d(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Li(this))},t.Qa=function(o){this.g&&(this.response=o,Li(this))},t.ga=function(){this.g&&Li(this)};function Li(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Mi(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Mi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Hd(o){let u="";return j(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function Wl(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Hd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ae(o,u,h))}function ge(o){Fe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ge,Fe);var Z_=/^https?$/i,e0=["POST","PUT"];t=ge.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fl.g(),this.v=this.o?_d(this.o):_d(Fl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){Wd(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var x in f)h.set(x,f[x]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),x=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(e0,u,void 0))||f||x||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of h)this.g.setRequestHeader(R,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gd(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Wd(this,R)}};function Wd(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Kd(o),po(o)}function Kd(o){o.A||(o.A=!0,Xe(o,"complete"),Xe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Xe(this,"complete"),Xe(this,"abort"),po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qd(this):this.bb())},t.bb=function(){qd(this)};function qd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yt(o)!=4||o.Z()!=2)){if(o.u&&Yt(o)==4)md(o.Ea,0,o);else if(Xe(o,"readystatechange"),Yt(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=M===0){var x=String(o.D).match(Md)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),f=!Z_.test(x?x.toLowerCase():"")}h=f}if(h)Xe(o,"complete"),Xe(o,"success");else{o.m=6;try{var R=2<Yt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Kd(o)}}finally{po(o)}}}}function po(o,u){if(o.g){Gd(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Xe(o,"ready");try{h.onreadystatechange=f}catch{}}}function Gd(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Yt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),D_(u)}};function Qd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function t0(o){const u={};o=(o.g&&2<=Yt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(y(o[f]))continue;var h=A(o[f]);const x=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=u[x]||[];u[x]=R,R.push(h)}w(u,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fi(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Xd(o){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fi("baseRetryDelayMs",5e3,o),this.cb=Fi("retryDelaySeedMs",1e4,o),this.Wa=Fi("forwardChannelMaxRetries",2,o),this.wa=Fi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Nd(o&&o.concurrentRequestLimit),this.Da=new Y_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xd.prototype,t.la=8,t.G=1,t.connect=function(o,u,h,f){Ye(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=of(this,null,this.W),go(this)};function Kl(o){if(Yd(o),o.G==3){var u=o.U++,h=Xt(o.I);if(ae(h,"SID",o.K),ae(h,"RID",u),ae(h,"TYPE","terminate"),ji(o,h),u=new _n(o,o.j,u),u.L=2,u.v=co(Xt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=af(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ao(u)}sf(o)}function mo(o){o.g&&(Gl(o),o.g.cancel(),o.g=null)}function Yd(o){mo(o),o.u&&(l.clearTimeout(o.u),o.u=null),yo(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function go(o){if(!Dd(o.h)&&!o.s){o.s=!0;var u=o.Ga;Kt||q(),z||(Kt(),z=!0),K.add(u,o),o.B=0}}function n0(o,u){return Od(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ri(g(o.Ga,o,u),rf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const x=new _n(this,this.j,o);let R=this.o;if(this.S&&(R?(R=p(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(x.H=R,R=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Zd(this,x,u),h=Xt(this.I),ae(h,"RID",o),ae(h,"CVER",22),this.D&&ae(h,"X-HTTP-Session-Id",this.D),ji(this,h),R&&(this.O?u="headers="+encodeURIComponent(String(Hd(R)))+"&"+u:this.m&&Wl(h,this.m,R)),Hl(this.h,x),this.Ua&&ae(h,"TYPE","init"),this.P?(ae(h,"$req",u),ae(h,"SID","null"),x.T=!0,Ul(x,h,null)):Ul(x,h,u),this.G=2}}else this.G==3&&(o?Jd(this,o):this.i.length==0||Dd(this.h)||Jd(this))};function Jd(o,u){var h;u?h=u.l:h=o.U++;const f=Xt(o.I);ae(f,"SID",o.K),ae(f,"RID",h),ae(f,"AID",o.T),ji(o,f),o.m&&o.o&&Wl(f,o.m,o.o),h=new _n(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Zd(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Hl(o.h,h),Ul(h,f,u)}function ji(o,u){o.H&&j(o.H,function(h,f){ae(u,f,h)}),o.l&&Ld({},function(h,f){ae(u,f,h)})}function Zd(o,u,h){h=Math.min(o.i.length,h);var f=o.l?g(o.l.Na,o.l,o):null;e:{var x=o.i;let R=-1;for(;;){const M=["count="+h];R==-1?0<h?(R=x[0].g,M.push("ofs="+R)):R=0:M.push("ofs="+R);let re=!0;for(let Ne=0;Ne<h;Ne++){let ee=x[Ne].g;const je=x[Ne].map;if(ee-=R,0>ee)R=Math.max(0,x[Ne].g-100),re=!1;else try{J_(je,M,"req"+ee+"_")}catch{f&&f(je)}}if(re){f=M.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function ef(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Kt||q(),z||(Kt(),z=!0),K.add(u,o),o.v=0}}function ql(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ri(g(o.Fa,o),rf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,tf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ri(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),mo(this),tf(this))};function Gl(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function tf(o){o.g=new _n(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Xt(o.qa);ae(u,"RID","rpc"),ae(u,"SID",o.K),ae(u,"AID",o.T),ae(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ae(u,"TO",o.ja),ae(u,"TYPE","xmlhttp"),ji(o,u),o.m&&o.o&&Wl(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=co(Xt(u)),h.m=null,h.P=!0,Pd(h,o)}t.Za=function(){this.C!=null&&(this.C=null,mo(this),ql(this),Ye(19))};function yo(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function nf(o,u){var h=null;if(o.g==u){yo(o),Gl(o),o.g=null;var f=2}else if($l(o.h,u))h=u.D,bd(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var x=o.B;f=io(),Xe(f,new Sd(f,h)),go(o)}else ef(o);else if(x=u.s,x==3||x==0&&0<u.X||!(f==1&&n0(o,u)||f==2&&ql(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),x){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function rf(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function or(o,u){if(o.j.info("Error code "+u),u==2){var h=g(o.fb,o),f=o.Xa;const x=!f;f=new sr(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||lo(f,"https"),co(f),x?Q_(f.toString(),h):X_(f.toString(),h)}else Ye(2);o.G=0,o.l&&o.l.sa(u),sf(o),Yd(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function sf(o){if(o.G=0,o.ka=[],o.l){const u=Vd(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function of(o,u,h){var f=h instanceof sr?Xt(h):new sr(h);if(f.g!="")u&&(f.g=u+"."+f.g),uo(f,f.s);else{var x=l.location;f=x.protocol,u=u?u+"."+x.hostname:x.hostname,x=+x.port;var R=new sr(null);f&&lo(R,f),u&&(R.g=u),x&&uo(R,x),h&&(R.l=h),f=R}return h=o.D,u=o.ya,h&&u&&ae(f,h,u),ae(f,"VER",o.la),ji(o,f),f}function af(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ge(new ho({eb:h})):new ge(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lf(){}t=lf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vo(){}vo.prototype.g=function(o,u){return new lt(o,u)};function lt(o,u){Fe.call(this),this.g=new Xd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!y(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Or(this)}N(lt,Fe),lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){Kl(this.g)},lt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=bl(o),o=h);u.i.push(new j_(u.Ya++,o)),u.G==3&&go(u)},lt.prototype.N=function(){this.g.l=null,delete this.j,Kl(this.g),delete this.g,lt.aa.N.call(this)};function uf(o){Ll.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(uf,Ll);function cf(){Ml.call(this),this.status=1}N(cf,Ml);function Or(o){this.g=o}N(Or,lf),Or.prototype.ua=function(){Xe(this.g,"a")},Or.prototype.ta=function(o){Xe(this.g,new uf(o))},Or.prototype.sa=function(o){Xe(this.g,new cf)},Or.prototype.ra=function(){Xe(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Yy=function(){return new vo},Xy=function(){return io()},Qy=rr,Cc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,ta=so,Ad.COMPLETE="complete",Gy=Ad,wd.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,es=wd,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,qy=ge}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const Np="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Vh("@firebase/firestore");function Gi(){return Sr.logLevel}function $(t,...e){if(Sr.logLevel<=X.DEBUG){const n=e.map(Fh);Sr.debug(`Firestore (${Ii}): ${t}`,...n)}}function Ar(t,...e){if(Sr.logLevel<=X.ERROR){const n=e.map(Fh);Sr.error(`Firestore (${Ii}): ${t}`,...n)}}function Va(t,...e){if(Sr.logLevel<=X.WARN){const n=e.map(Fh);Sr.warn(`Firestore (${Ii}): ${t}`,...n)}}function Fh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+t;throw Ar(e),new Error(e)}function Ee(t,e){t||Y()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class ST{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AT{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new Jy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new He(e)}}class kT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ee(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new PT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Re(0,0))}static max(){return new de(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Os.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Os?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Os{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const NT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Os{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return NT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ve.fromString(e))}static fromName(e){return new G(ve.fromString(e).popFirst(5))}static empty(){return new G(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ve(e.slice()))}}function DT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=de.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Qn(i,G.empty(),e)}function OT(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(de.min(),G.empty(),-1)}static max(){return new Qn(de.max(),G.empty(),-1)}}function bT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==VT)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},c=>r(c))}),a=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const d=c;n(e[d]).next(m=>{a[d]=m,++l,l===s&&r(a)},m=>i(m))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function MT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tv.oe=-1;function jh(t){return t==null}function La(t){return t===0&&1/t==-1/0}function FT(t){return typeof t=="number"&&Number.isInteger(t)&&!La(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new at(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fo(this.root,e,this.comparator,!0)}}class Fo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Op(this.data.getIterator())}getIteratorFrom(e){return new Op(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Op{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new qe(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jT("Invalid base64 string: "+s):s}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const UT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=UT.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bs(t){return typeof t=="string"?Ht.fromBase64String(t):Ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rv(t){const e=t.mapValue.fields.__previous_value__;return Uh(e)?rv(e):e}function Ma(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,r,i,s,a,l,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class Fa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uh(t)?4:$T(t)?9007199254740991:BT(t)?10:11:Y()}function Wt(t,e){if(t===e)return!0;const n=mi(t);if(n!==mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ma(t).isEqual(Ma(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=kr(i.timestampValue),l=kr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return bs(i.bytesValue).isEqual(bs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=be(i.doubleValue),l=be(s.doubleValue);return a===l?La(a)===La(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Dp(a)!==Dp(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Wt(a[c],l[c])))return!1;return!0}(t,e);default:return Y()}}function Vs(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=mi(t),r=mi(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=be(s.integerValue||s.doubleValue),c=be(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return bp(t.timestampValue,e.timestampValue);case 4:return bp(Ma(t),Ma(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,a){const l=bs(s),c=bs(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const m=ie(l[d],c[d]);if(m!==0)return m}return ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ie(be(s.latitude),be(a.latitude));return l!==0?l:ie(be(s.longitude),be(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vp(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,c,d,m;const v=s.fields||{},g=a.fields||{},C=(l=v.value)===null||l===void 0?void 0:l.arrayValue,N=(c=g.value)===null||c===void 0?void 0:c.arrayValue,O=ie(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0);return O!==0?O:Vp(C,N)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===jo.mapValue&&a===jo.mapValue)return 0;if(s===jo.mapValue)return 1;if(a===jo.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),d=a.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let v=0;v<c.length&&v<m.length;++v){const g=ie(c[v],m[v]);if(g!==0)return g;const C=gi(l[c[v]],d[m[v]]);if(C!==0)return C}return ie(c.length,m.length)}(t.mapValue,e.mapValue);default:throw Y()}}function bp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=kr(t),r=kr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function Vp(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=gi(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function yi(t){return Rc(t)}function Rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return bs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Rc(n.fields[a])}`;return i+"}"}(t.mapValue):Y()}function Nc(t){return!!t&&"integerValue"in t}function zh(t){return!!t&&"arrayValue"in t}function na(t){return!!t&&"mapValue"in t}function BT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $T(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cs(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=cs(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];na(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(cs(this.value))}}function iv(t){const e=[];return Gs(t.fields,(n,r)=>{const i=new Ve([n]);if(na(r)){const s=iv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Pt(e,0,de.min(),de.min(),de.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Pt(e,1,n,de.min(),r,i,0)}static newNoDocument(e,n){return new Pt(e,2,n,de.min(),de.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,de.min(),de.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.position=e,this.inclusive=n}}function Lp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(a.referenceValue),n.key):r=gi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n="asc"){this.field=e,this.dir=n}}function HT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{}class Pe extends sv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KT(e,n,r):n==="array-contains"?new QT(e,r):n==="in"?new XT(e,r):n==="not-in"?new YT(e,r):n==="array-contains-any"?new JT(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qT(e,r):new GT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gi(n,this.value)):n!==null&&mi(this.value)===mi(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends sv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Xn(e,n)}matches(e){return ov(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ov(t){return t.op==="and"}function av(t){return WT(t)&&ov(t)}function WT(t){for(const e of t.filters)if(e instanceof Xn)return!1;return!0}function Dc(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(av(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function lv(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Wt(r.value,i.value)}(t,e):t instanceof Xn?function(r,i){return i instanceof Xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&lv(a,i.filters[l]),!0):!1}(t,e):void Y()}function uv(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof Xn?function(n){return n.op.toString()+" {"+n.getFilters().map(uv).join(" ,")+"}"}(t):"Filter"}class KT extends Pe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class qT extends Pe{constructor(e,n){super(e,"in",n),this.keys=cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GT extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class QT extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zh(n)&&Vs(n.arrayValue,this.value)}}class XT extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vs(this.value.arrayValue,n)}}class YT extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vs(this.value.arrayValue,n)}}class JT extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Fp(t,e=null,n=[],r=[],i=null,s=null,a=null){return new ZT(t,e,n,r,i,s,a)}function Bh(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),jh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.ue=n}return e.ue}function $h(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mp(t.startAt,e.startAt)&&Mp(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eI(t,e,n,r,i,s,a,l){return new pl(t,e,n,r,i,s,a,l)}function tI(t){return new pl(t)}function jp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nI(t){return t.collectionGroup!==null}function hs(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new qe(Ve.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ua(s,r))}),n.has(Ve.keyField().canonicalString())||e.ce.push(new Ua(Ve.keyField(),r))}return e.ce}function yr(t){const e=oe(t);return e.le||(e.le=rI(e,hs(t))),e.le}function rI(t,e){if(t.limitType==="F")return Fp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ua(i.field,s)});const n=t.endAt?new ja(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ja(t.startAt.position,t.startAt.inclusive):null;return Fp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oc(t,e,n){return new pl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hv(t,e){return $h(yr(t),yr(e))&&t.limitType===e.limitType}function dv(t){return`${Bh(yr(t))}|lt:${t.limitType}`}function Qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uv(i)).join(", ")}]`),jh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>yi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>yi(i)).join(",")),`Target(${r})`}(yr(t))}; limitType=${t.limitType})`}function Hh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of hs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const d=Lp(a,l,c);return a.inclusive?d<=0:d<0}(r.startAt,hs(r),i)||r.endAt&&!function(a,l,c){const d=Lp(a,l,c);return a.inclusive?d>=0:d>0}(r.endAt,hs(r),i))}(t,e)}function iI(t){return(e,n)=>{let r=!1;for(const i of hs(t)){const s=sI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sI(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,a,l){const c=a.data.field(s),d=l.data.field(s);return c!==null&&d!==null?gi(c,d):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new at(G.comparator);function za(){return oI}const fv=new at(G.comparator);function Uo(...t){let e=fv;for(const n of t)e=e.insert(n.key,n);return e}function pv(t){let e=fv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fr(){return ds()}function mv(){return ds()}function ds(){return new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}const aI=new at(G.comparator),lI=new qe(G.comparator);function Ke(...t){let e=lI;for(const n of t)e=e.add(n);return e}const uI=new qe(ie);function cI(){return uI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:La(e)?"-0":e}}function gv(t){return{integerValue:""+t}}function hI(t,e){return FT(e)?gv(e):Wh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this._=void 0}}function dI(t,e,n){return t instanceof Ls?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uh(s)&&(s=rv(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Ms?vv(t,e):t instanceof Fs?_v(t,e):function(i,s){const a=yv(i,s),l=Up(a)+Up(i.Pe);return Nc(a)&&Nc(i.Pe)?gv(l):Wh(i.serializer,l)}(t,e)}function fI(t,e,n){return t instanceof Ms?vv(t,e):t instanceof Fs?_v(t,e):n}function yv(t,e){return t instanceof Ba?function(r){return Nc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ls extends ml{}class Ms extends ml{constructor(e){super(),this.elements=e}}function vv(t,e){const n=wv(e);for(const r of t.elements)n.some(i=>Wt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fs extends ml{constructor(e){super(),this.elements=e}}function _v(t,e){let n=wv(e);for(const r of t.elements)n=n.filter(i=>!Wt(i,r));return{arrayValue:{values:n}}}class Ba extends ml{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Up(t){return be(t.integerValue||t.doubleValue)}function wv(t){return zh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n){this.field=e,this.transform=n}}function mI(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ms&&i instanceof Ms||r instanceof Fs&&i instanceof Fs?pi(r.elements,i.elements,Wt):r instanceof Ba&&i instanceof Ba?Wt(r.Pe,i.Pe):r instanceof Ls&&i instanceof Ls}(t.transform,e.transform)}class gI{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gl{}function Ev(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iv(t.key,ln.none()):new Qs(t.key,t.data,ln.none());{const n=t.data,r=Ct.empty();let i=new qe(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Rr(t.key,r,new Rt(i.toArray()),ln.none())}}function yI(t,e,n){t instanceof Qs?function(i,s,a){const l=i.value.clone(),c=Bp(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(i,s,a){if(!ra(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Bp(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Tv(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function fs(t,e,n,r){return t instanceof Qs?function(s,a,l,c){if(!ra(s.precondition,a))return l;const d=s.value.clone(),m=$p(s.fieldTransforms,c,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(s,a,l,c){if(!ra(s.precondition,a))return l;const d=$p(s.fieldTransforms,c,a),m=a.data;return m.setAll(Tv(s)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(t,e,n,r):function(s,a,l){return ra(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function vI(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=yv(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function zp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pi(r,i,(s,a)=>mI(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qs extends gl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rr extends gl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Tv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bp(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,fI(a,l,n[i]))}return r}function $p(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,dI(s,a,e))}return r}class Iv extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _I extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yI(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mv();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const c=Ev(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ke())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,(n,r)=>zp(n,r))&&pi(this.baseMutations,e.baseMutations,(n,r)=>zp(n,r))}}class Kh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=function(){return aI}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Kh(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,J;function TI(t){switch(t){default:return Y();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function II(t){if(t===void 0)return Ar("GRPC error has no .code"),L.UNKNOWN;switch(t){case Te.OK:return L.OK;case Te.CANCELLED:return L.CANCELLED;case Te.UNKNOWN:return L.UNKNOWN;case Te.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Te.INTERNAL:return L.INTERNAL;case Te.UNAVAILABLE:return L.UNAVAILABLE;case Te.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Te.NOT_FOUND:return L.NOT_FOUND;case Te.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Te.ABORTED:return L.ABORTED;case Te.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Te.DATA_LOSS:return L.DATA_LOSS;default:return Y()}}(J=Te||(Te={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ky([4294967295,4294967295],0);class SI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function AI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kI(t,e){return bc(t,e.toTimestamp())}function ni(t){return Ee(!!t),de.fromTimestamp(function(n){const r=kr(n);return new Re(r.seconds,r.nanos)}(t))}function Sv(t,e){return Vc(t,e).canonicalString()}function Vc(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xI(t){const e=ve.fromString(t);return Ee(VI(e)),e}function Lc(t,e){return Sv(t.databaseId,e.path)}function PI(t){const e=xI(t);return e.length===4?ve.emptyPath():RI(e)}function CI(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RI(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hp(t,e,n){return{name:Lc(t,e),fields:n.value.mapValue.fields}}function NI(t,e){let n;if(e instanceof Qs)n={update:Hp(t,e.key,e.value)};else if(e instanceof Iv)n={delete:Lc(t,e.key)};else if(e instanceof Rr)n={update:Hp(t,e.key,e.data),updateMask:bI(e.fieldMask)};else{if(!(e instanceof _I))return Y();n={verify:Lc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Ls)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ms)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ba)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:kI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function DI(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?ni(i.updateTime):ni(s);return a.isEqual(de.min())&&(a=ni(s)),new gI(a,i.transformResults||[])}(n,e))):[]}function OI(t){let e=PI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const m=n.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let s=[];n.where&&(s=function(v){const g=Av(v);return g instanceof Xn&&av(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(v){return v.map(g=>function(N){return new Ua(Lr(N.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(v){let g;return g=typeof v=="object"?v.value:v,jh(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(v){const g=!!v.before,C=v.values||[];return new ja(C,g)}(n.startAt));let d=null;return n.endAt&&(d=function(v){const g=!v.before,C=v.values||[];return new ja(C,g)}(n.endAt)),eI(e,i,a,s,l,"F",c,d)}function Av(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Lr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Lr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Lr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Lr(n.unaryFilter.field);return Pe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Lr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xn.create(n.compositeFilter.filters.map(r=>Av(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function Lr(t){return Ve.fromServerFormat(t.fieldPath)}function bI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.ct=e}}function MI(t){const e=OI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.un=new jI}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Qn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class jI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vi(0)}static kn(){return new vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.changes=new Si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fs(r.mutation,i,Rt.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ke()){const i=fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=Uo();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ke()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=za();const a=ds(),l=function(){return ds()}();return n.forEach((c,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof Rr)?s=s.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),fs(m.mutation,d,m.mutation.getFieldMask(),Re.now())):a.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((d,m)=>a.set(d,m)),n.forEach((d,m)=>{var v;return l.set(d,new zI(m,(v=a.get(d))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ds();let i=new at((a,l)=>a-l),s=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let m=r.get(c)||Rt.empty();m=l.applyToLocalView(d,m),r.set(c,m);const v=(i.get(l.batchId)||Ke()).add(c);i=i.insert(l.batchId,v)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,m=c.value,v=mv();m.forEach(g=>{if(!s.has(g)){const C=Ev(n.get(g),r.get(g));C!==null&&v.set(g,C),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(fr());let l=-1,c=s;return a.next(d=>b.forEach(d,(m,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),s.get(m)?b.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{c=c.insert(m,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,c,d,Ke())).next(m=>({batchId:l,changes:pv(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Uo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=Uo();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,c=>{const d=function(v,g){return new pl(g,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((v,g)=>{a=a.insert(v,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((c,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Pt.newInvalidDocument(m)))});let l=Uo();return a.forEach((c,d)=>{const m=s.get(c);m!==void 0&&fs(m.mutation,d,Rt.empty(),Re.now()),Hh(n,d)&&(l=l.insert(c,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ni(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:MI(i.bundledQuery),readTime:ni(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.overlays=new at(G.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=fr(),s=n.length+1,a=new G(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new at((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let m=s.get(d.largestBatchId);m===null&&(m=fr(),s=s.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=fr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=i)););return b.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new EI(n,r));let s=this.Ir.get(n);s===void 0&&(s=Ke(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.Tr=new qe(ke.Er),this.dr=new qe(ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ke(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ke(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new ve([])),r=new ke(n,e),i=new ke(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new ve([])),r=new ke(n,e),i=new ke(n,e+1);let s=Ke();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new ke(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(ke.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wI(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new ke(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),i=new ke(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ie);return n.forEach(i=>{const s=new ke(i,0),a=new ke(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const a=new ke(new G(s),0);let l=new qe(ie);return this.br.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.wr)),!0)},a),b.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const s=new ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ke(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.Mr=e,this.docs=function(){return new at(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=za();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=za();const a=n.path,l=new G(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:m}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||bT(OT(m),r)<=0||(i.has(m.key)||Hh(n,m))&&(s=s.insert(m.key,m.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GI(this)}getSize(e){return b.resolve(this.size)}}class GI extends UI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.persistence=e,this.Nr=new Si(n=>Bh(n),$h),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qh,this.targetCount=0,this.kr=vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new tv(0),this.Kr=!1,this.Kr=!0,this.$r=new WI,this.referenceDelegate=e(this),this.Ur=new QI(this),this.indexManager=new FI,this.remoteDocumentCache=function(i){return new qI(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new LI(n),this.Gr=new $I(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new KI(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new YI(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YI extends LT{constructor(e){super(),this.currentSequenceNumber=e}}class Gh{constructor(e){this.persistence=e,this.Jr=new qh,this.Yr=null}static Zr(e){return new Gh(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ke(),i=Ke();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qh(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return i1()?8:MT(Qe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new JI;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Gi()<=X.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(Gi()<=X.DEBUG&&$("QueryEngine","Query:",Qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Gi()<=X.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(n))):b.resolve())}Yi(e,n){if(jp(n))return b.resolve(null);let r=yr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Oc(n,null,"F"),r=yr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Ke(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.ts(n,l);return this.ns(n,d,a,c.readTime)?this.Yi(e,Oc(n,null,"F")):this.rs(e,d,n,c)}))})))}Zi(e,n,r,i){return jp(n)||i.isEqual(de.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?b.resolve(null):(Gi()<=X.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qi(n)),this.rs(e,a,n,DT(i,-1)).next(l=>l))})}ts(e,n){let r=new qe(iI(e));return n.forEach((i,s)=>{Hh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Gi()<=X.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Qi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Qn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new at(ie),this._s=new Si(s=>Bh(s),$h),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function tS(t,e,n,r){return new eS(t,e,n,r)}async function kv(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=Ke();for(const d of i){a.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}for(const d of s){l.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}return n.localDocuments.getDocuments(r,c).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function nS(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,d,m){const v=d.batch,g=v.keys();let C=b.resolve();return g.forEach(N=>{C=C.next(()=>m.getEntry(c,N)).next(O=>{const F=d.docVersions.get(N);Ee(F!==null),O.version.compareTo(F)<0&&(v.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),m.addEntry(O)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(c,v))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ke();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rS(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function iS(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Wp{constructor(){this.activeTargetIds=cI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sS{constructor(){this.so=new Wp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo=null;function xu(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class uS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=xu(),c=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(n,c,d,i).then(m=>($("RestConnection",`Received RPC '${n}' ${l}: `,m),m),m=>{throw Va("RestConnection",`RPC '${n}' ${l} failed with error: `,m,"url: ",c,"request:",i),m})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=aS[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=xu();return new Promise((a,l)=>{const c=new qy;c.setWithCredentials(!0),c.listenOnce(Gy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ta.NO_ERROR:const m=c.getResponseJson();$($e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(m)),a(m);break;case ta.TIMEOUT:$($e,`RPC '${e}' ${s} timed out`),l(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case ta.HTTP_ERROR:const v=c.getStatus();if($($e,`RPC '${e}' ${s} failed with status:`,v,"response text:",c.getResponseText()),v>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const C=g==null?void 0:g.error;if(C&&C.status&&C.message){const N=function(F){const E=F.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(C.status);l(new H(N,C.message))}else l(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new H(L.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$($e,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);$($e,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=xu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Yy(),l=Xy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const m=s.join("");$($e,`Creating RPC '${e}' stream ${i}: ${m}`,c);const v=a.createWebChannel(m,c);let g=!1,C=!1;const N=new lS({Io:F=>{C?$($e,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(g||($($e,`Opening RPC '${e}' stream ${i} transport.`),v.open(),g=!0),$($e,`RPC '${e}' stream ${i} sending:`,F),v.send(F))},To:()=>v.close()}),O=(F,E,y)=>{F.listen(E,S=>{try{y(S)}catch(D){setTimeout(()=>{throw D},0)}})};return O(v,es.EventType.OPEN,()=>{C||($($e,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),O(v,es.EventType.CLOSE,()=>{C||(C=!0,$($e,`RPC '${e}' stream ${i} transport closed`),N.So())}),O(v,es.EventType.ERROR,F=>{C||(C=!0,Va($e,`RPC '${e}' stream ${i} transport errored:`,F),N.So(new H(L.UNAVAILABLE,"The operation could not be completed")))}),O(v,es.EventType.MESSAGE,F=>{var E;if(!C){const y=F.data[0];Ee(!!y);const S=y,D=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(D){$($e,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let j=function(_){const T=Te[_];if(T!==void 0)return II(T)}(U),w=D.message;j===void 0&&(j=L.INTERNAL,w="Unknown error status: "+U+" with message "+D.message),C=!0,N.So(new H(j,w)),v.close()}else $($e,`RPC '${e}' stream ${i} received:`,y),N.bo(y)}}),O(l,Qy.STAT_EVENT,F=>{F.stat===Cc.PROXY?$($e,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===Cc.NOPROXY&&$($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Pu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){return new SI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,r,i,s,a,l,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xv(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hS extends cS{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=DI(e.writeResults,e.commitTime),r=ni(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=CI(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>NI(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Vc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Vc(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(L.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ar(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ys(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=oe(c);d.L_.add(4),await Xs(d),d.q_.set("Unknown"),d.L_.delete(4),await vl(d)}(this))})}),this.q_=new fS(r,i)}}async function vl(t){if(Ys(t))for(const e of t.B_)await e(!0)}async function Xs(t){for(const e of t.B_)await e(!1)}function Ys(t){return oe(t).L_.size===0}async function Pv(t,e,n){if(!fl(e))throw e;t.L_.add(1),await Xs(t),t.q_.set("Offline"),n||(n=()=>rS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vl(t)})}function Cv(t,e){return e().catch(n=>Pv(t,n,e))}async function _l(t){const e=oe(t),n=Yn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mS(e);)try{const i=await iS(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,gS(e,i)}catch(i){await Pv(e,i)}Rv(e)&&Nv(e)}function mS(t){return Ys(t)&&t.O_.length<10}function gS(t,e){t.O_.push(e);const n=Yn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Rv(t){return Ys(t)&&!Yn(t).n_()&&t.O_.length>0}function Nv(t){Yn(t).start()}async function yS(t){Yn(t).p_()}async function vS(t){const e=Yn(t);for(const n of t.O_)e.m_(n.mutations)}async function _S(t,e,n){const r=t.O_.shift(),i=Kh.from(r,e,n);await Cv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _l(t)}async function wS(t,e){e&&Yn(t).V_&&await async function(r,i){if(function(a){return TI(a)&&a!==L.ABORTED}(i.code)){const s=r.O_.shift();Yn(r).s_(),await Cv(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await _l(r)}}(t,e),Rv(t)&&Nv(t)}async function qp(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Ys(n);n.L_.add(3),await Xs(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vl(n)}async function ES(t,e){const n=oe(t);e?(n.L_.delete(2),await vl(n)):e||(n.L_.add(2),await Xs(n),n.q_.set("Unknown"))}function Yn(t){return t.U_||(t.U_=function(n,r,i){const s=oe(n);return s.w_(),new hS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yS.bind(null,t),mo:wS.bind(null,t),f_:vS.bind(null,t),g_:_S.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await _l(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Xh(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dv(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),fl(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}class TS{constructor(){this.queries=Gp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=Gp(),s.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function Gp(){return new Si(t=>dv(t),hv)}function IS(t){t.Y_.forEach(e=>{e.next()})}var Qp,Xp;(Xp=Qp||(Qp={})).ea="default",Xp.Cache="cache";class SS{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Si(l=>dv(l),hv),this.Ma=new Map,this.xa=new Set,this.Oa=new at(G.comparator),this.Na=new Map,this.La=new qh,this.Ba={},this.ka=new Map,this.qa=vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function AS(t,e,n){const r=CS(t);try{const i=await function(a,l){const c=oe(a),d=Re.now(),m=l.reduce((C,N)=>C.add(N.key),Ke());let v,g;return c.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=za(),O=Ke();return c.cs.getEntries(C,m).next(F=>{N=F,N.forEach((E,y)=>{y.isValidDocument()||(O=O.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(C,N)).next(F=>{v=F;const E=[];for(const y of l){const S=vI(y,v.get(y.key).overlayedDocument);S!=null&&E.push(new Rr(y.key,S,iv(S.value.mapValue),ln.exists(!0)))}return c.mutationQueue.addMutationBatch(C,d,E,l)}).next(F=>{g=F;const E=F.applyToLocalDocumentSet(v,O);return c.documentOverlayCache.saveOverlays(C,F.batchId,E)})}).then(()=>({batchId:g.batchId,changes:pv(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let d=a.Ba[a.currentUser.toKey()];d||(d=new at(ie)),d=d.insert(l,c),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,n),await wl(r,i.changes),await _l(r.remoteStore)}catch(i){const s=Dv(i,"Failed to persist write");n.reject(s)}}function Yp(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=oe(a);c.onlineState=l;let d=!1;c.queries.forEach((m,v)=>{for(const g of v.j_)g.Z_(l)&&(d=!0)}),d&&IS(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kS(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await nS(n.localStore,e);bv(n,r,null),Ov(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wl(n,i)}catch(i){await ev(i)}}async function xS(t,e,n){const r=oe(t);try{const i=await function(a,l){const c=oe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return c.mutationQueue.lookupMutationBatch(d,l).next(v=>(Ee(v!==null),m=v.keys(),c.mutationQueue.removeMutationBatch(d,v))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>c.localDocuments.getDocuments(d,m))})}(r.localStore,e);bv(r,e,n),Ov(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wl(r,i)}catch(i){await ev(i)}}function Ov(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function bv(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function wl(t,e,n){const r=oe(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,n).then(d=>{var m;if((d||n)&&r.isPrimaryClient){const v=d?!d.fromCache:(m=n==null?void 0:n.targetChanges.get(c.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(c.targetId,v?"current":"not-current")}if(d){i.push(d);const v=Qh.Wi(c.targetId,d);s.push(v)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(c,d){const m=oe(c);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>b.forEach(d,g=>b.forEach(g.$i,C=>m.persistence.referenceDelegate.addReference(v,g.targetId,C)).next(()=>b.forEach(g.Ui,C=>m.persistence.referenceDelegate.removeReference(v,g.targetId,C)))))}catch(v){if(!fl(v))throw v;$("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const g=v.targetId;if(!v.fromCache){const C=m.os.get(g),N=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(N);m.os=m.os.insert(g,O)}}}(r.localStore,s))}async function PS(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await kv(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(c=>{c.reject(new H(L.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wl(n,r.hs)}}function CS(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xS.bind(null,e),e}class $a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return tS(this.persistence,new ZI,e.initialUser,this.serializer)}Ga(e){return new XI(Gh.Zr,this.serializer)}Wa(e){return new sS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$a.provider={build:()=>new $a};class Mc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PS.bind(null,this.syncEngine),await ES(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TS}()}createDatastore(e){const n=yl(e.databaseInfo.databaseId),r=function(s){return new uS(s)}(e.databaseInfo);return function(s,a,l,c){return new dS(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new pS(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Yp(this.syncEngine,n,0),function(){return Kp.D()?new Kp:new oS}())}createSyncEngine(e,n){return function(i,s,a,l,c,d,m){const v=new SS(i,s,a,l,c,d);return m&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Xs(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Mc.provider={build:()=>new Mc};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=Zy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Dv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cu(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NS(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qp(e.remoteStore,i)),t._onlineComponents=e}async function NS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Va("Error using user provided cache. Falling back to memory cache: "+n),await Cu(t,new $a)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Cu(t,new $a);return t._offlineComponents}async function DS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Jp(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Jp(t,new Mc))),t._onlineComponents}function OS(t){return DS(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bS(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function em(t){if(!G.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tm(t){if(G.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Mv(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yh(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class El{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IT;switch(r.type){case"firstParty":return new xT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zp.get(n);r&&($("ComponentProvider","Removing Datastore"),Zp.delete(n),r.terminate())}(this),Promise.resolve()}}function VS(t,e,n,r={}){var i;const s=(t=Mv(t,El))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Va("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=He.MOCK_USER;else{l=YE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new He(d)}t._authCredentials=new ST(new Jy(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jh(this.firestore,e,this._query)}}class un{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class Wn extends Jh{constructor(e,n,r){super(e,n,tI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new G(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function LS(t,e,...n){if(t=bt(t),Lv("collection","path",e),t instanceof El){const r=ve.fromString(e,...n);return tm(r),new Wn(t,null,r)}{if(!(t instanceof un||t instanceof Wn))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return tm(r),new Wn(t.firestore,null,r)}}function MS(t,e,...n){if(t=bt(t),arguments.length===1&&(e=Zy.newId()),Lv("doc","path",e),t instanceof El){const r=ve.fromString(e,...n);return em(r),new un(t,null,new G(r))}{if(!(t instanceof un||t instanceof Wn))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return em(r),new un(t.firestore,t instanceof Wn?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xv(this,"async_queue_retry"),this.Vu=()=>{const r=Pu();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!fl(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Xh.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Fv extends El{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new rm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rm(e),this._firestoreClient=void 0,await e}}}function FS(t,e){const n=typeof t=="object"?t:$y(),r=typeof t=="string"?t:e||"(default)",i=Mh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=QE("firestore");s&&VS(i,...s)}return i}function jS(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||US(t),t._firestoreClient}function US(t){var e,n,r;const i=t._freezeSettings(),s=function(l,c,d,m){return new zT(l,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Vv(m.experimentalLongPollingOptions),m.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new RS(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(Ht.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=/^__.*__$/;class BS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(e,this.data,n,this.fieldTransforms)}}function Bv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ed{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ed(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ha(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Bv(this.Cu)&&zS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class $S{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yl(e)}Qu(e,n,r,i=!1){return new ed({Cu:e,methodName:n,qu:r,path:Ve.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function HS(t){const e=t._freezeSettings(),n=yl(t._databaseId);return new $S(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WS(t,e,n,r,i,s={}){const a=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Kv("Data must be an object, but it was:",a,r);const l=Hv(r,a);let c,d;if(s.merge)c=new Rt(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const m=[];for(const v of s.mergeFields){const g=KS(e,v,n);if(!a.contains(g))throw new H(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);QS(m,g)||m.push(g)}c=new Rt(m),d=a.fieldTransforms.filter(v=>c.covers(v.field))}else c=null,d=a.fieldTransforms;return new BS(new Ct(l),c,d)}class td extends Zh{_toFieldTransform(e){return new pI(e.path,new Ls)}isEqual(e){return e instanceof td}}function $v(t,e){if(Wv(t=bt(t)))return Kv("Unsupported field value:",e,t),Hv(t,e);if(t instanceof Zh)return function(r,i){if(!Bv(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=$v(l,i.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:bc(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bc(i.serializer,s)}}if(r instanceof Uv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:AI(i.serializer,r._byteString)};if(r instanceof un){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sv(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof zv)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Wh(l.serializer,c)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Yh(r)}`)}(t,e)}function Hv(t,e){const n={};return nv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,i)=>{const s=$v(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Wv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Uv||t instanceof js||t instanceof un||t instanceof Zh||t instanceof zv)}function Kv(t,e,n){if(!Wv(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function KS(t,e,n){if((e=bt(e))instanceof jv)return e._internalPath;if(typeof e=="string")return GS(t,e);throw Ha("Field path arguments must be of type string or ",t,!1,void 0,n)}const qS=new RegExp("[~\\*/\\[\\]]");function GS(t,e,n){if(e.search(qS)>=0)throw Ha(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jv(...e.split("."))._internalPath}catch{throw Ha(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ha(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new H(L.INVALID_ARGUMENT,l+t+c)}function QS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function YS(t,e){const n=Mv(t.firestore,Fv),r=MS(t),i=XS(t.converter,e);return JS(n,[WS(HS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function JS(t,e){return function(r,i){const s=new gr;return r.asyncQueue.enqueueAndForget(async()=>AS(await OS(r),i,s)),s.promise}(jS(t),e)}function ZS(){return new td("serverTimestamp")}(function(e,n=!0){(function(i){Ii=i})(Ti),fi(new Ir("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Fv(new AT(r.getProvider("auth-internal")),new CT(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fa(d.options.projectId,m)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Hn(Np,"4.7.3",e),Hn(Np,"4.7.3","esm2017")})();function nd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function qv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eA=qv,Gv=new Ks("auth","Firebase",qv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Vh("@firebase/auth");function tA(t,...e){Wa.logLevel<=X.WARN&&Wa.warn(`Auth (${Ti}): ${t}`,...e)}function ia(t,...e){Wa.logLevel<=X.ERROR&&Wa.error(`Auth (${Ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw rd(t,...e)}function Bt(t,...e){return rd(t,...e)}function Qv(t,e,n){const r=Object.assign(Object.assign({},eA()),{[e]:n});return new Ks("auth","Firebase",r).create(e,{appName:t.name})}function Kn(t){return Qv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gv.create(t,...e)}function W(t,e,...n){if(!t)throw rd(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ia(e),new Error(e)}function gn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nA(){return im()==="http:"||im()==="https:"}function im(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nA()||t1()||"connection"in navigator)?navigator.onLine:!0}function iA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=JE()||n1()}get(){return rA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=new Js(3e4,6e4);function Tl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ai(t,e,n,r,i={}){return Yv(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=qs(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},s);return e1()||(d.referrerPolicy="no-referrer"),Xv.fetch()(Zv(t,t.config.apiHost,n,l),d)})}async function Yv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sA),e);try{const i=new aA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Bo(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Bo(t,"user-disabled",a);const m=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Qv(t,m,d);mn(t,m)}}catch(i){if(i instanceof vn)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function Jv(t,e,n,r,i={}){const s=await Ai(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Zv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?id(t.config,i):`${t.config.apiScheme}://${i}`}class aA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),oA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e){return Ai(t,"POST","/v1/accounts:delete",e)}async function e_(t,e){return Ai(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uA(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=sd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ps(Ru(i.auth_time)),issuedAtTime:ps(Ru(i.iat)),expirationTime:ps(Ru(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ru(t){return Number(t)*1e3}function sd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ly(n);return i?JSON.parse(i):(ia("Failed to decode base64 JWT payload"),null)}catch(i){return ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sm(t){const e=sd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&cA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ps(this.lastLoginAt),this.creationTime=ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Us(t,e_(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?t_(s.providerUserInfo):[],l=fA(t.providerData,a),c=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),m=c?d:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(t,v)}async function dA(t){const e=bt(t);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t_(t){return t.map(e=>{var{providerId:n}=e,r=nd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){const n=await Yv(t,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Zv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xv.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mA(t,e){return Ai(t,"POST","/v2/accounts:revokeToken",Tl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=sm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new ri;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uA(this,e)}reload(){return dA(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await Us(this,lA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,c,d,m;const v=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(d=n.createdAt)!==null&&d!==void 0?d:void 0,y=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:S,emailVerified:D,isAnonymous:U,providerData:j,stsTokenManager:w}=n;W(S&&w,e,"internal-error");const p=ri.fromJSON(this.name,w);W(typeof S=="string",e,"internal-error"),In(v,e.name),In(g,e.name),W(typeof D=="boolean",e,"internal-error"),W(typeof U=="boolean",e,"internal-error"),In(C,e.name),In(N,e.name),In(O,e.name),In(F,e.name),In(E,e.name),In(y,e.name);const _=new sn({uid:S,auth:e,email:g,emailVerified:D,displayName:v,isAnonymous:U,photoURL:N,phoneNumber:C,tenantId:O,stsTokenManager:p,createdAt:E,lastLoginAt:y});return j&&Array.isArray(j)&&(_.providerData=j.map(T=>Object.assign({},T))),F&&(_._redirectEventId=F),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new ri;i.updateFromServerResponse(n);const s=new sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ka(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?t_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ri;l.updateFromIdToken(r);const c=new sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new Map;function on(t){gn(t instanceof Function,"Expected a class definition");let e=om.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,om.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n_.type="NONE";const am=n_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=sa(this.userKey,i.apiKey,s),this.fullPersistenceKey=sa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ii(on(am),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||on(am);const a=sa(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(a);if(m){const v=sn._fromJSON(e,m);d!==s&&(l=v),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ii(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new ii(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l_(e))return"Blackberry";if(u_(e))return"Webos";if(i_(e))return"Safari";if((e.includes("chrome/")||s_(e))&&!e.includes("edge/"))return"Chrome";if(a_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r_(t=Qe()){return/firefox\//i.test(t)}function i_(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s_(t=Qe()){return/crios\//i.test(t)}function o_(t=Qe()){return/iemobile/i.test(t)}function a_(t=Qe()){return/android/i.test(t)}function l_(t=Qe()){return/blackberry/i.test(t)}function u_(t=Qe()){return/webos/i.test(t)}function od(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gA(t=Qe()){var e;return od(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yA(){return r1()&&document.documentMode===10}function c_(t=Qe()){return od(t)||a_(t)||u_(t)||l_(t)||/windows phone/i.test(t)||o_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e=[]){let n;switch(t){case"Browser":n=lm(Qe());break;case"Worker":n=`${lm(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t,e={}){return Ai(t,"GET","/v2/passwordPolicy",Tl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=6;class EA{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:wA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new um(this),this.idTokenSubscription=new um(this),this.beforeStateQueue=new vA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await e_(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Kn(this));const n=e?bt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _A(this),n=new EA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Il(t){return bt(t)}class um{constructor(e){this.auth=e,this.observer=null,this.addObserver=h1(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IA(t){ad=t}function SA(t){return ad.loadJS(t)}function AA(){return ad.gapiScript}function kA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t,e){const n=Mh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Oa(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function PA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CA(t,e,n){const r=Il(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=d_(e),{host:a,port:l}=RA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NA()}function d_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RA(t){const e=d_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:cm(a)}}}function cm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e){return Jv(t,"POST","/v1/accounts:signInWithIdp",Tl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="http://localhost";class xr extends f_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=nd(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new xr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends p_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Zs{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Zs{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Zs{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){return Jv(t,"POST","/v1/accounts:signUp",Tl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sn._fromIdTokenResponse(e,r,i),a=hm(r);return new Jn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hm(r);return new Jn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t){var e;if(nn(t.app))return Promise.reject(Kn(t));const n=Il(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Jn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await OA(n,{returnSecureToken:!0}),i=await Jn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function m_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function VA(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Kn(r));const i="reauthenticate";try{const s=await Us(t,m_(r,i,e,t),n);W(s.idToken,r,"internal-error");const a=sd(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(t.uid===l,r,"user-mismatch"),Jn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,e,n=!1){if(nn(t.app))return Promise.reject(Kn(t));const r="signIn",i=await m_(t,r,e),s=await Jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function FA(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function jA(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const Ga="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ga,"1"),this.storage.removeItem(Ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=1e3,zA=10;class y_ extends g_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);yA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y_.type="LOCAL";const BA=y_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_ extends g_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}v_.type="SESSION";const __=v_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),c=await $A(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const d=ld("",20);i.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){const g=v;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(m),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function WA(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function KA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GA(){return w_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebaseLocalStorageDb",QA=1,Qa="firebaseLocalStorage",T_="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function XA(){const t=indexedDB.deleteDatabase(E_);return new eo(t).toPromise()}function Uc(){const t=indexedDB.open(E_,QA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qa,{keyPath:T_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qa)?e(r):(r.close(),await XA(),e(await Uc()))})})}async function dm(t,e,n){const r=Al(t,!0).put({[T_]:e,value:n});return new eo(r).toPromise()}async function YA(t,e){const n=Al(t,!1).get(e),r=await new eo(n).toPromise();return r===void 0?null:r.value}function fm(t,e){const n=Al(t,!0).delete(e);return new eo(n).toPromise()}const JA=800,ZA=3;class I_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sl._getInstance(GA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KA(),!this.activeServiceWorker)return;this.sender=new HA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uc();return await dm(e,Ga,"1"),await fm(e,Ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Al(i,!1).getAll();return new eo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I_.type="LOCAL";const ek=I_;new Js(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t,e){return e?on(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends f_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nk(t){return MA(t.auth,new ud(t),t.bypassAuthState)}function rk(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),LA(n,new ud(t),t.bypassAuthState)}async function ik(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),VA(n,new ud(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nk;case"linkViaPopup":case"linkViaRedirect":return ik;case"reauthViaPopup":case"reauthViaRedirect":return rk;default:mn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new Js(2e3,1e4);class Qr extends S_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sk.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="pendingRedirect",oa=new Map;class ak extends S_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const r=await lk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lk(t,e){const n=hk(e),r=ck(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uk(t,e){oa.set(t._key(),e)}function ck(t){return on(t._redirectPersistence)}function hk(t){return sa(ok,t.config.apiKey,t.name)}async function dk(t,e,n=!1){if(nn(t.app))return Promise.reject(Kn(t));const r=Il(t),i=tk(r,e),a=await new ak(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=10*60*1e3;class pk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!A_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fk&&this.cachedEventUids.clear(),this.cachedEventUids.has(pm(e))}saveEventToCache(e){this.cachedEventUids.add(pm(e)),this.lastProcessedEventTime=Date.now()}}function pm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function A_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e={}){return Ai(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vk=/^https?/;async function _k(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gk(t);for(const n of e)try{if(wk(n))return}catch{}mn(t,"unauthorized-domain")}function wk(t){const e=Fc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!vk.test(n))return!1;if(yk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new Js(3e4,6e4);function mm(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tk(t){return new Promise((e,n)=>{var r,i,s;function a(){mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mm(),n(Bt(t,"network-request-failed"))},timeout:Ek.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)a();else{const l=kA("iframefcb");return $t()[l]=()=>{gapi.load?a():n(Bt(t,"network-request-failed"))},SA(`${AA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw aa=null,e})}let aa=null;function Ik(t){return aa=aa||Tk(t),aa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new Js(5e3,15e3),Ak="__/auth/iframe",kk="emulator/auth/iframe",xk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ck(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?id(e,kk):`https://${t.config.authDomain}/${Ak}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},i=Pk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qs(r).slice(1)}`}async function Rk(t){const e=await Ik(t),n=$t().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:Ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Bt(t,"network-request-failed"),l=$t().setTimeout(()=>{s(a)},Sk.get());function c(){$t().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dk=500,Ok=600,bk="_blank",Vk="http://localhost";class gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lk(t,e,n,r=Dk,i=Ok){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Nk),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Qe().toLowerCase();n&&(l=s_(d)?bk:n),r_(d)&&(e=e||Vk,c.scrollbars="yes");const m=Object.entries(c).reduce((g,[C,N])=>`${g}${C}=${N},`,"");if(gA(d)&&l!=="_self")return Mk(e||"",l),new gm(null);const v=window.open(e||"",l,m);W(v,t,"popup-blocked");try{v.focus()}catch{}return new gm(v)}function Mk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="__/auth/handler",jk="emulator/auth/handler",Uk=encodeURIComponent("fac");async function ym(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:i};if(e instanceof p_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",c1(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,v]of Object.entries(s||{}))a[m]=v}if(e instanceof Zs){const m=e.getScopes().filter(v=>v!=="");m.length>0&&(a.scopes=m.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const c=await t._getAppCheckToken(),d=c?`#${Uk}=${encodeURIComponent(c)}`:"";return`${zk(t)}?${qs(l).slice(1)}${d}`}function zk({config:t}){return t.emulator?id(t,jk):`https://${t.authDomain}/${Fk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="webStorageSupport";class Bk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=__,this._completeRedirectFn=dk,this._overrideRedirectResult=uk}async _openPopup(e,n,r,i){var s;gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ym(e,n,r,Fc(),i);return Lk(e,a,ld())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ym(e,n,r,Fc(),i);return WA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rk(e),r=new pk(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nu,{type:Nu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nu];a!==void 0&&n(!!a),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_k(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return c_()||i_()||od()}}const $k=Bk;var vm="@firebase/auth",_m="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kk(t){fi(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h_(t)},d=new TA(r,i,s,c);return PA(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new Ir("auth-internal",e=>{const n=Il(e.getProvider("auth").getImmediate());return(r=>new Hk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(vm,_m,Wk(t)),Hn(vm,_m,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=5*60,Gk=jy("authIdTokenMaxAge")||qk;let wm=null;const Qk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gk)return;const i=n==null?void 0:n.token;wm!==i&&(wm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xk(t=$y()){const e=Mh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xA(t,{popupRedirectResolver:$k,persistence:[ek,BA,__]}),r=jy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Qk(s.toString());jA(n,a,()=>a(n.currentUser)),FA(n,l=>a(l))}}const i=My("auth");return i&&CA(n,`http://${i}`),n}function Yk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}IA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Yk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kk("Browser");const Jk={apiKey:"AIzaSyADkO4L8Ya1xKi9kQm7jtqSIMLWrII-9xw",authDomain:"kouseiproject-6cae6.firebaseapp.com",projectId:"kouseiproject-6cae6",storageBucket:"kouseiproject-6cae6.firebasestorage.app",messagingSenderId:"83620134962",appId:"1:83620134962:web:7107463d5721dd70bdfc2b",measurementId:"G-HHCPMQTLDY"},k_=By(Jk),Zk=Xk(k_),ex=FS(k_),tx="kouseiproject-6cae6",nx=()=>{const[t,e]=gt.useState("jp"),[n,r]=gt.useState("home"),[i,s]=gt.useState(!1),[a,l]=gt.useState(!1),[c,d]=gt.useState(null);gt.useEffect(()=>{window.scrollTo(0,0)},[n]);const m=async E=>{E.preventDefault(),l(!0),d(null);const y=new FormData(E.target),S={name:y.get("name"),email:y.get("email"),service:y.get("service"),message:y.get("message"),createdAt:ZS(),sourceUrl:window.location.href};try{await bA(Zk);const D=LS(ex,"artifacts",tx,"public","data","inquiries");await YS(D,S),d("success"),E.target.reset()}catch(D){console.error("提交失败:",D),d("error")}finally{l(!1)}},g={zh:{nav:["为何日本","核心服务","服务流程","关于我们"],hero:{tag:"日本顶级医疗管家",title:"臻享健康 焕新生命",desc:"为您链接日本顶级医疗资源，提供从精密体检、干细胞治疗到行程定制的一站式私密服务。",cta1:"定制您的行程",cta2:"了解详情"},whyJapan:{title:"为何选择日本",subtitle:"咫尺之遥，触碰世界医疗科技的顶峰",items:[{icon:"Shield",title:"全球顶尖的重疾筛查",desc:"拥有极高的人均高阶设备保有量，能够精准发现5毫米以下的极早期微小病灶。"},{icon:"Star",title:"合规前沿的再生医疗",desc:"全球少有的为再生医疗专项立法的国家，提供安全、合法、高效的细胞治疗。"},{icon:"Heart",title:"极致的“款待”文化",desc:"以患者为中心的医疗理念，从环境到沟通，为您提供令人绝对安心的医疗体验。"},{icon:"Clock",title:"优越的地理距离",desc:"文化相近，饮食契合，极短的飞行时间让您的跨国健康之旅轻松无负担。"}]},services:{title:"核心服务领域",subtitle:"我们严格筛选日本前1%的医疗机构，只为您提供最专业、最权威的医疗健康服务。",btnLabel:"更多详情",items:[{id:"service_checkup",label:"精密体检",title:"Ningen Dock 深度检诊",desc:["PET-CT 全身癌症筛查","高级脑部/心血管精密检查","消化道内视镜"],image:"./ningen.jpg"},{id:"service_regen",label:"再生医疗",title:"干细胞与抗衰老",desc:["自体干细胞修复疗法","NK免疫细胞回输","血液净化与排毒"],badge:"热门推荐",image:"./saisei.jpg"},{id:"service_beauty",label:"医疗美容",title:"日式美学定制",desc:["高端皮肤管理","玻尿酸/肉毒素微调","赤坂名医预约"],image:"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"},{id:"service_tourism",label:"医疗旅游",title:"尊享定制化行程",desc:["五星级酒店/高级疗养院","私人医疗翻译全程陪同","日本文化深度体验"],image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"}]},process:{title:"尊享服务流程",subtitle:"从心出发，全程守护您的健康之旅",steps:[{num:"01",title:"专属医学评估",desc:"资深医学顾问一对一沟通，深度了解您的健康需求与既往病史，确立初步方向。"},{num:"02",title:"权威方案定制",desc:"联合日本顶尖医院专家进行会诊，为您量身定制检诊、治疗或抗衰老方案。"},{num:"03",title:"无忧赴日体验",desc:"专属管家代办医疗签证，安排五星级食宿与专车接送，专业医疗翻译全程陪同。"},{num:"04",title:"终身健康管家",desc:"建立专属健康档案，权威报告中文深度解读，回国后持续跟踪您的健康指标。"}]},about:{title:"关于 弘城咨询",subtitle:"链接顶尖医疗，护航生命质量",desc1:"弘城咨询 致力于成为高净值人群的私人健康管家。我们深耕日本顶级医疗领域多年，与日本排名前列的特定机能病院、专科名医及尖端研究机构建立了深度的官方合作关系。",desc2:"我们摒弃流水线式的中介模式，坚持「一客一案」的极致服务理念。从前期会诊到赴日就医，再到归国随访，我们将日本的“款待文化 (Omotenashi)”融入每一个细节，确保您的每一次健康之旅都绝对私密、安心且卓有成效。"},company:{title:"会社概要",nameLabel:"公司名称",name:"弘城咨询 株式会社",establishedLabel:"成立日期",established:"2026年1月",addressLabel:"公司地址",address:"120-0001 东京都足立区大谷田1-43-28",emailLabel:"联系邮箱",email:"kousei.consulting@gmail.com",businessLabel:"业务内容",business:"赴日医疗咨询、医疗协调、医疗翻译、笔译服务、医疗旅游",wechatTitle:"官方微信客服",wechatDesc:"扫码添加专属医疗管家，开启一对一VIP咨询"},serviceDetails:{service_checkup:{title:"精密体检 (Ningen Dock)",subtitle:"毫米级筛查，防患于未然",content:"日本的“人间 Dock”（Ningen Dock）体检体系享誉全球。我们为您预约极具声望的顶级综合医院，采用世界最先进的 PET-CT、3.0T MRI 等高精度设备。结合日本专家严谨的双重、三重读影体制，能够发现5mm以下的超早期癌症病灶，为您的健康筑起最坚固的防线。"},service_regen:{title:"再生医疗与干细胞",subtitle:"重启身体机能，逆转时光痕迹",content:"日本在再生医疗研究领域处于世界领先地位，且拥有完善的安全保障法规。我们直连持有日本厚生劳动省许可的顶级再生医疗设施。无论是利用自体干细胞进行器官组织修复、抗衰老，还是通过 NK/LAK 免疫细胞疗法提升自身免疫力、预防癌症，我们都能为您提供最前沿、最安全合法的治疗方案。"},service_beauty:{title:"日式医疗美容",subtitle:"匠心审美，雕琢自然之美",content:"避开千篇一律的流水线审美，体验日本名医的“定制化美学”。我们与东京赤坂、表参道一线的顶级美容外科诊所深度合作，由经验丰富的院长级名医亲自面诊施术。从高端皮肤抗衰管理到精细的面部轮廓微调，我们追求不着痕迹的自然蜕变，全方位保障您的隐私与安全。"},service_tourism:{title:"高端医疗旅游",subtitle:"在身心疗愈中，深度品味日本",content:"健康不仅仅是医疗，更是一场身心的极致放松。在为您安排严谨医疗行程的同时，我们的私人管家团队可根据您的喜好，定制深度的日本文化体验之旅。无论是入住隐秘的高级温泉旅馆、品鉴米其林星级怀石料理，还是体验茶道与禅修，我们让您的每一次赴日之旅都成为奢华的享受。"}},inquiry:{title:"开启您的健康之旅",name:"您的姓名",email:"电子邮箱",service:"咨询项目",message:"留言内容",submit:"立即提交预约",submitting:"提交中...",success:"提交成功！我们的医学顾问将尽快联络您。",error:"抱歉，提交出错了。请稍后再试或直接拨打电话咨询。"}},jp:{nav:["選ばれる理由","主要サービス","サービスフロー","会社概要"],hero:{tag:"日本医療コンシェルジュ",title:"至高の健康、生命の更新",desc:"日本のトップクラスの医療リソースを結び、精密検診から幹細胞治疗、オーダーメイドの旅程まで、ワンストップのプライベートサービスを提供します。",cta1:"プランを相談する",cta2:"詳細を見る"},whyJapan:{title:"選ばれる理由",subtitle:"最高峰の医療テクノロジーを、すぐそばで",items:[{icon:"Shield",title:"世界トップクラスの検診",desc:"最新鋭の検査機器を駆使し、5mm以下の超早期がん病変も正確に発見します。"},{icon:"Star",title:"安全で先端の再生医療",desc:"法整備された厳格な管理のもと、安全かつ高水準な細胞治療を提供します。"},{icon:"Heart",title:"究極の「おもてなし」",desc:"患者様中心の理念に基づき、すべてにおいて安心できる医療体験を提供します。"},{icon:"Clock",title:"恵まれた地理的条件",desc:"文化や食習慣が近く、短時間のフライトで海外での治療もストレスフリーです。"}]},services:{title:"主要サービス",subtitle:"日本のトップ1%の医療機関を推選し、最もプロフェッショナルで権威あるヘルスケアサービスを提供します。",btnLabel:"詳細を見る",items:[{id:"service_checkup",label:"人間ドック",title:"精密検診プラン",desc:["PET-CT全身がん検診","高度な脳・心血管検査","消化器内視鏡検査"],image:"./ningen.jpg"},{id:"service_regen",label:"再生医療",title:"幹細胞と若返り",desc:["自己幹細胞修復療法","NK免疫細胞療法","血液クリーニング"],badge:"おすすめ",image:"./saisei.jpg"},{id:"service_beauty",label:"美容医療",title:"日本式美学の追求",desc:["高度なスキンケア","ヒアルロン酸・ボトックス","赤坂の名医予約"],image:"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"},{id:"service_tourism",label:"医療ツーリズム",title:"オーダーメイド旅程",desc:["5つ星ホテル・高級療養所","専属医療通訳の同行","日本文化体験プログラム"],image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"}]},process:{title:"サービスフロー",subtitle:"安心と信頼のトータルサポート",steps:[{num:"01",title:"個別コンサルティング",desc:"専属の医療顧問がお客様の健康状態やご要望を詳細にヒアリングし、初期プランをご提案します。"},{num:"02",title:"最適なプラン作成",desc:"日本のトップ専門医と連携し、お客様に合わせた最適な検診・治療プログラムを構築します。"},{num:"03",title:"プレミアムな来日体験",desc:"医療ビザの取得サポート、高級ホテルの手配、専用車による送迎、医療通訳の同行など、全てを手配します。"},{num:"04",title:"アフターケア",desc:"パーソナル健康カルテを作成し、検査結果の翻訳と詳細な解説を行います。帰国後も継続的にサポートします。"}]},about:{title:"会社概要",subtitle:"トップクラスの医療で、生命の質を守る",desc1:"当社は、富裕層向けのプライベートヘルスコンシェルジュです。長年にわたり日本の最先端医療分野に携わり、トップクラスの総合病院、専門医、研究機関と強固な公式パートナーシップを築いています。",desc2:"医療通訳の枠を超え、専属コンシェルジュによるきめ細やかなサポート体制のもと、お一人おひとりに寄り添い、最適な訪日医療プランを完全オーダーメイドでご提案いたします。"},company:{title:"会社概要",nameLabel:"会社名",name:"弘誠コンサルティング株式会社",establishedLabel:"設立",established:"令和8年1月",addressLabel:"所在地",address:"〒120-0001　東京都足立区大谷田1-43-28",emailLabel:"メール",email:"kousei.consulting@gmail.com",businessLabel:"事業内容",business:"訪日医療コンサルティング、医療コーディネーター、医療通訳、翻訳、医療ツーリズム",wechatTitle:"公式WeChat",wechatDesc:"QRコードをスキャンして専属コンシェルジュを追加し、1対1のVIP相談を開始"},serviceDetails:{service_checkup:{title:"人間ドック (Ningen Dock)",subtitle:"ミリ単位の早期発見で、未来の健康を守る",content:"日本の「人間ドック」は世界的に高い評価を得ています。最高峰の総合病院を予約し、最新のPET-CTや3.0T MRIなどの高精度機器を使用します。日本人専門医による厳格な二重・三重の読影体制により、5mm以下の超早期がん病変も発見し、お客様の健康に強固な防衛線を築きます。"},service_regen:{title:"再生医療と幹細胞療法",subtitle:"身体機能をリセットし、若々しさを取り戻す",content:"日本は再生医療の研究で世界をリードしており、厳格で安全な法整備がなされています。厚生労働省の認可を受けた最高レベルの再生医療施設と提携。自己幹細胞を用いた組織修復やアンチエイジング、NK/LAK免疫細胞療法による免疫力向上・がん予防など、最先端で安全な治療プランを提供します。"},service_beauty:{title:"美容医療",subtitle:"匠の技術で、自然な美しさを引き出す",content:"画一的な美しさではなく、名医による「オーダーメイドの美学」を体験してください。銀座や表参道のトップクリニックと提携し、経験豊富な院長クラスの医師が直接診察・施術を行います。最先端のスキンケアから繊細な輪郭形成まで、不自然さのない究極の美を追求し、プライバシーと安全を完全に保証します。"},service_tourism:{title:"医療ツーリズム",subtitle:"心身の癒やしと、深い日本文化の体験",content:"健康への配慮だけでなく、旅の体験そのものを大切にしています。医療スケジュールの合間に、専属コンシェルジュがお客様の好みに合わせた日本文化体験をご提案します。隠れ家的な高級温泉旅館での滞在、ミシュラン星付き懐石料理の堪能、茶道や禅の体験など、すべての瞬間をラグジュアリーな享受へと昇華させます。"}},inquiry:{title:"健康への第一歩",name:"お名前",email:"メールアドレス",service:"希望項目",message:"メッセージ",submit:"予約を申し込む",submitting:"送信中...",success:"送信が完了しました。担当者より折り返しご連絡いたします。",error:"エラーが発生しました。もう一度お試しいただくか、お電話でご連絡ください。"}}}[t],C=()=>k.jsxs("nav",{className:"fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100",children:[k.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:k.jsxs("div",{className:"flex justify-between items-center h-20",children:[k.jsxs("div",{className:"flex-shrink flex items-center cursor-pointer min-w-0 flex-1 mr-4",onClick:()=>r("home"),children:[k.jsx("img",{src:"./logo.png",alt:"Mediclub Logo",className:"h-6 md:h-8 w-auto mr-2 flex-shrink-0"}),k.jsxs("span",{className:"font-serif text-lg md:text-2xl font-bold text-blue-900 truncate flex-1",children:["弘誠コンサルティング株式会社",k.jsx("span",{className:"text-[#D4AF37] text-xs align-top ml-1 italic font-bold",children:"JP"})]})]}),k.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[g.nav.map((E,y)=>k.jsx("button",{onClick:()=>{n!=="home"&&r("home"),setTimeout(()=>{var S;return(S=document.getElementById(`section-${y}`))==null?void 0:S.scrollIntoView({behavior:"smooth"})},100)},className:"text-gray-600 hover:text-[#D4AF37] text-sm font-medium transition-colors",children:E},y)),k.jsxs("div",{className:"flex items-center bg-gray-100 p-1 rounded-full border border-gray-200",children:[k.jsx("button",{onClick:()=>e("jp"),className:`px-3 py-1 text-xs rounded-full transition-all ${t==="jp"?"bg-white shadow-sm text-blue-900 font-bold border border-[#D4AF37]/20":"text-gray-400"}`,children:"日本語"}),k.jsx("button",{onClick:()=>e("zh"),className:`px-3 py-1 text-xs rounded-full transition-all ${t==="zh"?"bg-white shadow-sm text-blue-900 font-bold border border-[#D4AF37]/20":"text-gray-400"}`,children:"中文"})]}),k.jsx("button",{onClick:()=>r("inquiry"),className:"bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-all shadow-lg border border-[#D4AF37]/40",children:t==="jp"?"相談":"咨询"})]}),k.jsx("div",{className:"md:hidden",children:k.jsx("button",{onClick:()=>s(!i),className:"text-gray-600",children:i?k.jsx(zE,{size:24}):k.jsx(FE,{size:24})})})]})}),i&&k.jsxs("div",{className:"md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl",children:[g.nav.map((E,y)=>k.jsx("button",{className:"block w-full text-left px-4 py-2 text-gray-600 font-medium",onClick:()=>{r("home"),s(!1),setTimeout(()=>{var S;return(S=document.getElementById(`section-${y}`))==null?void 0:S.scrollIntoView({behavior:"smooth"})},100)},children:E},y)),k.jsx("button",{onClick:()=>{r("inquiry"),s(!1)},className:"block w-full bg-blue-900 text-white py-3 rounded-xl font-bold",children:t==="jp"?"相談する":"立即咨询"}),k.jsxs("div",{className:"flex justify-center space-x-6 py-2 border-t border-gray-50",children:[k.jsx("button",{onClick:()=>e("jp"),className:t==="jp"?"text-blue-900 font-bold":"text-gray-400",children:"日本語"}),k.jsx("button",{onClick:()=>e("zh"),className:t==="zh"?"text-blue-900 font-bold":"text-gray-400",children:"中文"})]})]})]}),N=()=>k.jsxs(k.Fragment,{children:[k.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center",children:[k.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 z-0"}),k.jsxs("div",{className:"relative z-10 px-4 max-w-5xl mx-auto",children:[k.jsx("span",{className:"inline-block py-1 px-4 rounded-full bg-blue-50 text-[#D4AF37] text-xs font-bold tracking-[0.2em] mb-6 border border-[#D4AF37]/30 uppercase",children:g.hero.tag}),k.jsx("h1",{className:"text-4xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight",children:g.hero.title}),k.jsx("p",{className:"mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-light leading-relaxed",children:g.hero.desc}),k.jsxs("div",{className:"mt-12 flex flex-col sm:flex-row justify-center gap-5",children:[k.jsxs("button",{onClick:()=>r("inquiry"),className:"px-10 py-4 bg-blue-900 text-white rounded-full font-bold text-lg hover:bg-blue-800 shadow-xl shadow-blue-900/30 transition-all flex items-center justify-center border border-[#D4AF37]/50 group",children:[g.hero.cta1," ",k.jsx(wp,{className:"ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"})]}),k.jsx("button",{onClick:()=>{var E;return(E=document.getElementById("section-1"))==null?void 0:E.scrollIntoView({behavior:"smooth"})},className:"px-10 py-4 bg-white text-blue-900 border border-[#D4AF37]/30 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-sm",children:g.hero.cta2})]})]})]}),k.jsx("section",{id:"section-0",className:"py-16 bg-white relative border-b border-gray-100",children:k.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[k.jsxs("div",{className:"text-center mb-12",children:[k.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-bold mb-3 text-gray-900",children:g.whyJapan.title}),k.jsx("div",{className:"w-12 h-1 bg-[#D4AF37] mx-auto"})]}),k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:g.whyJapan.items.map((E,y)=>{const S={Shield:k.jsx(jE,{className:"w-6 h-6 text-[#D4AF37]"}),Star:k.jsx(UE,{className:"w-6 h-6 text-[#D4AF37]"}),Heart:k.jsx(LE,{className:"w-6 h-6 text-[#D4AF37]"}),Clock:k.jsx(bE,{className:"w-6 h-6 text-[#D4AF37]"})}[E.icon];return k.jsxs("div",{className:"flex flex-col items-center text-center group px-2",children:[k.jsx("div",{className:"w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform",children:S}),k.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-3",children:E.title}),k.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:E.desc})]},y)})})]})}),k.jsx("section",{id:"section-1",className:"py-24 bg-blue-900 text-white relative",children:k.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[k.jsxs("div",{className:"text-center mb-16",children:[k.jsx("h2",{className:"text-3xl md:text-4xl font-serif font-bold mb-4",children:g.services.title}),k.jsx("div",{className:"w-16 h-1 bg-[#D4AF37] mx-auto mb-6"}),k.jsx("p",{className:"text-blue-200 leading-relaxed max-w-2xl mx-auto",children:g.services.subtitle})]}),k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:g.services.items.map((E,y)=>k.jsxs("div",{className:"rounded-3xl overflow-hidden shadow-2xl transition-all hover:transform hover:-translate-y-2 border group bg-white text-gray-900 relative flex flex-col",children:[k.jsxs("div",{className:"h-48 relative overflow-hidden bg-gray-200",children:[k.jsx("img",{src:E.image,alt:E.label,className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/20"}),k.jsx("div",{className:"absolute inset-0 flex items-end justify-center pb-6",children:k.jsx("span",{className:"text-2xl font-serif font-bold text-white drop-shadow-md",children:E.label})}),E.badge&&k.jsx("div",{className:"absolute top-0 right-0 bg-[#D4AF37] text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest z-20",children:E.badge})]}),k.jsxs("div",{className:"p-8 flex-1 flex flex-col",children:[k.jsx("h3",{className:"text-lg font-bold mb-4 min-h-[3rem] text-gray-900",children:E.title}),k.jsx("ul",{className:"space-y-3 mb-8 flex-1",children:E.desc.map((S,D)=>k.jsxs("li",{className:"flex items-start text-xs opacity-80",children:[k.jsx("div",{className:"w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0 bg-blue-900"}),k.jsx("span",{children:S})]},D))}),k.jsxs("button",{onClick:()=>r(E.id),className:"w-full py-3 rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center space-x-2 bg-blue-900 text-white hover:bg-blue-800 shadow-md",children:[k.jsx("span",{children:g.services.btnLabel}),k.jsx(OE,{size:14})]})]})]},y))})]})}),k.jsx("section",{id:"section-2",className:"py-24 bg-gray-50 relative",children:k.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[k.jsxs("div",{className:"text-center mb-16",children:[k.jsx("h2",{className:"text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900",children:g.process.title}),k.jsx("div",{className:"w-16 h-1 bg-[#D4AF37] mx-auto mb-6"}),k.jsx("p",{className:"text-gray-500 leading-relaxed max-w-2xl mx-auto",children:g.process.subtitle})]}),k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:g.process.steps.map((E,y)=>k.jsxs("div",{className:"bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group",children:[k.jsx("div",{className:"absolute -right-4 -top-4 text-8xl font-serif font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors",children:E.num}),k.jsxs("div",{className:"relative z-10",children:[k.jsxs("div",{className:"text-[#D4AF37] font-bold mb-4 text-xl",children:[E.num,"."]}),k.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:E.title}),k.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:E.desc})]})]},y))})]})}),k.jsx("section",{id:"section-3",className:"py-24 bg-white relative",children:k.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[k.jsxs("div",{className:"text-center mb-16",children:[k.jsx("div",{className:"hidden w-14 h-14 bg-blue-900 text-[#D4AF37] font-serif text-3xl font-bold items-center justify-center rounded-sm mx-auto mb-8 shadow-lg border border-[#D4AF37]/30",children:"M"}),k.jsx("h2",{className:"text-3xl md:text-5xl font-serif font-bold mb-4 text-gray-900",children:g.about.title}),k.jsx("p",{className:"text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-12",children:g.about.subtitle}),k.jsxs("div",{className:"bg-gray-50 p-10 md:p-16 rounded-[2rem] border border-gray-100 shadow-sm text-left relative",children:[k.jsx("span",{className:"absolute top-8 left-8 text-6xl font-serif text-[#D4AF37] opacity-20",children:'"'}),k.jsx("p",{className:"text-gray-600 text-lg leading-loose mb-6 relative z-10 indent-8",children:g.about.desc1}),k.jsx("p",{className:"text-gray-600 text-lg leading-loose relative z-10 indent-8",children:g.about.desc2})]})]}),k.jsxs("div",{className:"mt-16 grid grid-cols-1 md:grid-cols-3 gap-8",children:[k.jsxs("div",{className:"md:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100",children:[k.jsxs("h3",{className:"text-xl font-serif font-bold text-blue-900 mb-6 flex items-center",children:[k.jsx(VE,{className:"mr-2 text-[#D4AF37]",size:20}),g.company.title]}),k.jsxs("div",{className:"space-y-4 text-sm text-gray-600",children:[k.jsxs("div",{className:"flex border-b border-gray-50 pb-3",children:[k.jsx("span",{className:"w-28 font-bold text-gray-800",children:g.company.nameLabel}),k.jsx("span",{children:g.company.name})]}),k.jsxs("div",{className:"flex border-b border-gray-50 pb-3",children:[k.jsx("span",{className:"w-28 font-bold text-gray-800",children:g.company.establishedLabel}),k.jsx("span",{children:g.company.established})]}),k.jsxs("div",{className:"flex border-b border-gray-50 pb-3",children:[k.jsx("span",{className:"w-28 font-bold text-gray-800",children:g.company.addressLabel}),k.jsx("span",{children:g.company.address})]}),k.jsxs("div",{className:"flex border-b border-gray-50 pb-3",children:[k.jsx("span",{className:"w-28 font-bold text-gray-800",children:g.company.emailLabel}),k.jsx("span",{children:g.company.email})]}),k.jsxs("div",{className:"flex border-b border-gray-50 pb-3",children:[k.jsx("span",{className:"w-28 font-bold text-gray-800",children:g.company.contactLabel}),k.jsx("span",{children:g.company.contact})]}),k.jsxs("div",{className:"flex pt-1",children:[k.jsx("span",{className:"w-28 font-bold text-gray-800 flex-shrink-0",children:g.company.businessLabel}),k.jsx("span",{className:"leading-relaxed",children:g.company.business})]})]})]}),k.jsxs("div",{className:"bg-blue-900 p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden",children:[k.jsx("div",{className:"absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37] opacity-20 rounded-full blur-2xl"}),k.jsx("h3",{className:"text-lg font-bold text-white mb-6 tracking-widest",children:g.company.wechatTitle}),k.jsxs("div",{className:"w-36 h-36 bg-white rounded-xl p-2 shadow-lg mb-4 relative flex items-center justify-center",children:[k.jsx("span",{className:"text-gray-300 text-xs absolute z-0",children:"QR Code"}),k.jsx("img",{src:"./contact.jpg",alt:"WeChat QR Code",className:"w-full h-full object-cover relative z-10 opacity-30"})]}),k.jsx("p",{className:"text-xs text-blue-200 leading-relaxed px-4",children:g.company.wechatDesc})]})]})]})})]}),O=({id:E})=>{const y=g.serviceDetails[E];return y?k.jsx("section",{className:"pt-32 pb-24 min-h-screen bg-gray-50",children:k.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[k.jsxs("button",{onClick:()=>r("home"),className:"flex items-center text-blue-900 font-bold hover:text-[#D4AF37] transition-colors mb-10",children:[k.jsx(wp,{className:"rotate-180 mr-2 w-5 h-5"}),t==="zh"?"返回首页":"ホームに戻る"]}),k.jsxs("div",{className:"bg-white p-10 md:p-16 rounded-[2rem] shadow-xl border border-gray-100",children:[k.jsx("h1",{className:"text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight",children:y.title}),k.jsx("h2",{className:"text-lg md:text-xl text-[#D4AF37] font-bold tracking-wide mb-10",children:y.subtitle}),k.jsx("div",{className:"w-20 h-1 bg-blue-900 mb-10"}),k.jsx("p",{className:"text-gray-600 text-lg leading-loose mb-16 text-justify whitespace-pre-line",children:y.content}),k.jsxs("div",{className:"text-center pt-8 border-t border-gray-100",children:[k.jsx("p",{className:"text-sm text-gray-400 mb-6 uppercase tracking-widest",children:t==="zh"?"开启专属定制服务":"専属サービスを開始する"}),k.jsx("button",{onClick:()=>r("inquiry"),className:"px-12 py-4 bg-blue-900 text-white rounded-full font-bold text-lg hover:bg-blue-800 shadow-xl shadow-blue-900/30 transition-all border border-[#D4AF37]/50 w-full md:w-auto",children:t==="zh"?"立即咨询此服务":"このサービスについて相談する"})]})]})]})}):null},F=()=>k.jsx("section",{className:"pt-32 pb-24 min-h-screen bg-gray-50",children:k.jsxs("div",{className:"max-w-3xl mx-auto px-4",children:[k.jsxs("div",{className:"text-center mb-12",children:[k.jsx("h2",{className:"text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4",children:g.inquiry.title}),k.jsx("div",{className:"w-12 h-1 bg-[#D4AF37] mx-auto"})]}),k.jsx("div",{className:"bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100",children:c==="success"?k.jsxs("div",{className:"text-center py-12",children:[k.jsx("div",{className:"w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6",children:k.jsx(DE,{size:40})}),k.jsx("p",{className:"text-xl font-bold text-gray-800 mb-4",children:g.inquiry.success}),k.jsx("button",{onClick:()=>d(null),className:"text-blue-900 font-bold hover:underline",children:"返回首页"})]}):k.jsxs("form",{className:"space-y-6",onSubmit:m,children:[k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",children:g.inquiry.name}),k.jsx("input",{name:"name",required:!0,placeholder:"Name",className:"w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-1 focus:ring-[#D4AF37] outline-none"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",children:g.inquiry.email}),k.jsx("input",{name:"email",type:"email",required:!0,placeholder:"Email",className:"w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-1 focus:ring-[#D4AF37] outline-none"})]})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",children:g.inquiry.service}),k.jsx("select",{name:"service",className:"w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-1 focus:ring-[#D4AF37] outline-none appearance-none",children:g.services.items.map((E,y)=>k.jsx("option",{value:E.label,children:E.label},y))})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",children:g.inquiry.message}),k.jsx("textarea",{name:"message",required:!0,rows:4,className:"w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-1 focus:ring-[#D4AF37] outline-none"})]}),c==="error"&&k.jsx("p",{className:"text-red-500 text-sm font-medium",children:g.inquiry.error}),k.jsxs("button",{disabled:a,className:`w-full py-4 rounded-xl font-bold shadow-lg border border-[#D4AF37]/50 transition-all flex items-center justify-center ${a?"bg-gray-400":"bg-blue-900 text-white hover:bg-blue-800"}`,children:[a&&k.jsx(ME,{className:"animate-spin mr-2",size:20}),a?g.inquiry.submitting:g.inquiry.submit]})]})})]})});return k.jsxs("div",{className:"font-sans text-gray-700 bg-gray-50 antialiased selection:bg-[#D4AF37]/30",children:[k.jsx(C,{}),k.jsxs("main",{children:[n==="home"&&k.jsx(N,{}),n==="inquiry"&&k.jsx(F,{}),n.startsWith("service_")&&k.jsx(O,{id:n})]}),k.jsx("footer",{className:"bg-white py-12 border-t border-gray-100 text-center",children:k.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[k.jsx("p",{className:"text-sm text-gray-400 mb-2",children:"© 2026 弘誠コンサルティング株式会社. All Rights Reserved."}),k.jsx("div",{className:"flex justify-center space-x-6 text-xs text-gray-400 font-medium",children:k.jsx("span",{children:"EMAIL:kousei.consulting@gmail.com"})})]})})]})};Oy(document.getElementById("root")).render(k.jsx(gt.StrictMode,{children:k.jsx(nx,{})}));
