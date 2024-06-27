(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xa(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const Ct={},_r=[],Se=()=>{},Gm=()=>!1,Ki=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ja=e=>e.startsWith("onUpdate:"),Ht=Object.assign,Za=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Wm=Object.prototype.hasOwnProperty,_t=(e,t)=>Wm.call(e,t),ct=Array.isArray,yr=e=>Gi(e)==="[object Map]",Yh=e=>Gi(e)==="[object Set]",ut=e=>typeof e=="function",Kt=e=>typeof e=="string",xn=e=>typeof e=="symbol",xt=e=>e!==null&&typeof e=="object",Xh=e=>(xt(e)||ut(e))&&ut(e.then)&&ut(e.catch),Jh=Object.prototype.toString,Gi=e=>Jh.call(e),Qm=e=>Gi(e).slice(8,-1),Zh=e=>Gi(e)==="[object Object]",tc=e=>Kt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cs=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ym=/-(\w)/g,Ke=Wi(e=>e.replace(Ym,(t,n)=>n?n.toUpperCase():"")),Xm=/\B([A-Z])/g,Mr=Wi(e=>e.replace(Xm,"-$1").toLowerCase()),Qi=Wi(e=>e.charAt(0).toUpperCase()+e.slice(1)),jo=Wi(e=>e?`on${Qi(e)}`:""),Rn=(e,t)=>!Object.is(e,t),$o=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},tf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Jm=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xl;const ef=()=>Xl||(Xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ec(e){if(ct(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Kt(r)?ng(r):ec(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Kt(e)||xt(e))return e}const Zm=/;(?![^(]*\))/g,tg=/:([^]+)/,eg=/\/\*[^]*?\*\//g;function ng(e){const t={};return e.replace(eg,"").split(Zm).forEach(n=>{if(n){const r=n.split(tg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Yi(e){let t="";if(Kt(e))t=e;else if(ct(e))for(let n=0;n<e.length;n++){const r=Yi(e[n]);r&&(t+=r+" ")}else if(xt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const rg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sg=Xa(rg);function nf(e){return!!e||e===""}const ig=e=>Kt(e)?e:e==null?"":ct(e)||xt(e)&&(e.toString===Jh||!ut(e.toString))?JSON.stringify(e,rf,2):String(e),rf=(e,t)=>t&&t.__v_isRef?rf(e,t.value):yr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[qo(r,i)+" =>"]=s,n),{})}:Yh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>qo(n))}:xn(t)?qo(t):xt(t)&&!ct(t)&&!Zh(t)?String(t):t,qo=(e,t="")=>{var n;return xn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class og{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ve;try{return Ve=this,t()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ag(e,t=Ve){t&&t.active&&t.effects.push(e)}function cg(){return Ve}let Kn;class nc{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ag(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Nn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed){if(n.computed.effect._dirtyLevel===2)return nn(),!0;if(lg(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),nn()}return this._dirtyLevel>=5}set dirty(t){this._dirtyLevel=t?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=wn,n=Kn;try{return wn=!0,Kn=this,this._runnings++,Jl(this),this.fn()}finally{Zl(this),this._runnings--,Kn=n,wn=t}}stop(){this.active&&(Jl(this),Zl(this),this.onStop&&this.onStop(),this.active=!1)}}function lg(e){return e.value}function Jl(e){e._trackId++,e._depsLength=0}function Zl(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)sf(e.deps[t],e);e.deps.length=e._depsLength}}function sf(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let wn=!0,da=0;const of=[];function Nn(){of.push(wn),wn=!1}function nn(){const e=of.pop();wn=e===void 0?!0:e}function rc(){da++}function sc(){for(da--;!da&&pa.length;)pa.shift()()}function af(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&sf(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const pa=[];function cf(e,t,n){rc();for(const r of e.keys()){let s;if(!e.computed&&r.computed&&r._runnings>0&&(s??(s=e.get(r)===r._trackId))){r._dirtyLevel=2;continue}r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&pa.push(r.scheduler)))}sc()}const lf=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ma=new WeakMap,Gn=Symbol(""),ga=Symbol("");function pe(e,t,n){if(wn&&Kn){let r=ma.get(e);r||ma.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=lf(()=>r.delete(n))),af(Kn,s)}}function tn(e,t,n,r,s,i){const a=ma.get(e);if(!a)return;let c=[];if(t==="clear")c=[...a.values()];else if(n==="length"&&ct(e)){const l=Number(r);a.forEach((h,d)=>{(d==="length"||!xn(d)&&d>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(a.get(n)),t){case"add":ct(e)?tc(n)&&c.push(a.get("length")):(c.push(a.get(Gn)),yr(e)&&c.push(a.get(ga)));break;case"delete":ct(e)||(c.push(a.get(Gn)),yr(e)&&c.push(a.get(ga)));break;case"set":yr(e)&&c.push(a.get(Gn));break}rc();for(const l of c)l&&cf(l,5);sc()}const ug=Xa("__proto__,__v_isRef,__isVue"),uf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xn)),tu=hg();function hg(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=It(this);for(let i=0,a=this.length;i<a;i++)pe(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(It)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nn(),rc();const r=It(this)[t].apply(this,n);return sc(),nn(),r}}),e}function fg(e){xn(e)||(e=String(e));const t=It(this);return pe(t,"has",e),t.hasOwnProperty(e)}class hf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?bg:mf:i?pf:df).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=ct(t);if(!s){if(a&&_t(tu,n))return Reflect.get(tu,n,r);if(n==="hasOwnProperty")return fg}const c=Reflect.get(t,n,r);return(xn(n)?uf.has(n):ug(n))||(s||pe(t,"get",n),i)?c:me(c)?a&&tc(n)?c:c.value:xt(c)?s?_f(c):Ji(c):c}}class ff extends hf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const l=ws(i);if(!Pi(r)&&!ws(r)&&(i=It(i),r=It(r)),!ct(t)&&me(i)&&!me(r))return l?!1:(i.value=r,!0)}const a=ct(t)&&tc(n)?Number(n)<t.length:_t(t,n),c=Reflect.set(t,n,r,s);return t===It(s)&&(a?Rn(r,i)&&tn(t,"set",n,r):tn(t,"add",n,r)),c}deleteProperty(t,n){const r=_t(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&tn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!xn(n)||!uf.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",ct(t)?"length":Gn),Reflect.ownKeys(t)}}class dg extends hf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const pg=new ff,mg=new dg,gg=new ff(!0);const ic=e=>e,Xi=e=>Reflect.getPrototypeOf(e);function li(e,t,n=!1,r=!1){e=e.__v_raw;const s=It(e),i=It(t);n||(Rn(t,i)&&pe(s,"get",t),pe(s,"get",i));const{has:a}=Xi(s),c=r?ic:n?cc:Ts;if(a.call(s,t))return c(e.get(t));if(a.call(s,i))return c(e.get(i));e!==s&&e.get(t)}function ui(e,t=!1){const n=this.__v_raw,r=It(n),s=It(e);return t||(Rn(e,s)&&pe(r,"has",e),pe(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function hi(e,t=!1){return e=e.__v_raw,!t&&pe(It(e),"iterate",Gn),Reflect.get(e,"size",e)}function eu(e){e=It(e);const t=It(this);return Xi(t).has.call(t,e)||(t.add(e),tn(t,"add",e,e)),this}function nu(e,t){t=It(t);const n=It(this),{has:r,get:s}=Xi(n);let i=r.call(n,e);i||(e=It(e),i=r.call(n,e));const a=s.call(n,e);return n.set(e,t),i?Rn(t,a)&&tn(n,"set",e,t):tn(n,"add",e,t),this}function ru(e){const t=It(this),{has:n,get:r}=Xi(t);let s=n.call(t,e);s||(e=It(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&tn(t,"delete",e,void 0),i}function su(){const e=It(this),t=e.size!==0,n=e.clear();return t&&tn(e,"clear",void 0,void 0),n}function fi(e,t){return function(r,s){const i=this,a=i.__v_raw,c=It(a),l=t?ic:e?cc:Ts;return!e&&pe(c,"iterate",Gn),a.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function di(e,t,n){return function(...r){const s=this.__v_raw,i=It(s),a=yr(i),c=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,h=s[e](...r),d=n?ic:t?cc:Ts;return!t&&pe(i,"iterate",l?ga:Gn),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function pn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function _g(){const e={get(i){return li(this,i)},get size(){return hi(this)},has:ui,add:eu,set:nu,delete:ru,clear:su,forEach:fi(!1,!1)},t={get(i){return li(this,i,!1,!0)},get size(){return hi(this)},has:ui,add:eu,set:nu,delete:ru,clear:su,forEach:fi(!1,!0)},n={get(i){return li(this,i,!0)},get size(){return hi(this,!0)},has(i){return ui.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:fi(!0,!1)},r={get(i){return li(this,i,!0,!0)},get size(){return hi(this,!0)},has(i){return ui.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=di(i,!1,!1),n[i]=di(i,!0,!1),t[i]=di(i,!1,!0),r[i]=di(i,!0,!0)}),[e,n,t,r]}const[yg,vg,Eg,wg]=_g();function oc(e,t){const n=t?e?wg:Eg:e?vg:yg;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(_t(n,s)&&s in r?n:r,s,i)}const Tg={get:oc(!1,!1)},Ig={get:oc(!1,!0)},Ag={get:oc(!0,!1)};const df=new WeakMap,pf=new WeakMap,mf=new WeakMap,bg=new WeakMap;function Rg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sg(e){return e.__v_skip||!Object.isExtensible(e)?0:Rg(Qm(e))}function Ji(e){return ws(e)?e:ac(e,!1,pg,Tg,df)}function gf(e){return ac(e,!1,gg,Ig,pf)}function _f(e){return ac(e,!0,mg,Ag,mf)}function ac(e,t,n,r,s){if(!xt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=Sg(e);if(a===0)return e;const c=new Proxy(e,a===2?r:n);return s.set(e,c),c}function ls(e){return ws(e)?ls(e.__v_raw):!!(e&&e.__v_isReactive)}function ws(e){return!!(e&&e.__v_isReadonly)}function Pi(e){return!!(e&&e.__v_isShallow)}function yf(e){return e?!!e.__v_raw:!1}function It(e){const t=e&&e.__v_raw;return t?It(t):e}function Pg(e){return Object.isExtensible(e)&&tf(e,"__v_skip",!0),e}const Ts=e=>xt(e)?Ji(e):e,cc=e=>xt(e)?_f(e):e;class vf{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new nc(()=>t(this._value),()=>vi(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=It(this),n=t.effect._dirtyLevel;return(!t._cacheable||t.effect.dirty)&&Rn(t._value,t._value=t.effect.run())&&n!==3&&vi(t,5),Ef(t),t.effect._dirtyLevel>=2&&vi(t,3),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Cg(e,t,n=!1){let r,s;const i=ut(e);return i?(r=e,s=Se):(r=e.get,s=e.set),new vf(r,s,i||!s,n)}function Ef(e){var t;wn&&Kn&&(e=It(e),af(Kn,(t=e.dep)!=null?t:e.dep=lf(()=>e.dep=void 0,e instanceof vf?e:void 0)))}function vi(e,t=5,n,r){e=It(e);const s=e.dep;s&&cf(s,t)}function me(e){return!!(e&&e.__v_isRef===!0)}function _a(e){return wf(e,!1)}function Vg(e){return wf(e,!0)}function wf(e,t){return me(e)?e:new Dg(e,t)}class Dg{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:It(t),this._value=n?t:Ts(t)}get value(){return Ef(this),this._value}set value(t){const n=this.__v_isShallow||Pi(t)||ws(t);t=n?t:It(t),Rn(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Ts(t),vi(this,5))}}function en(e){return me(e)?e.value:e}const xg={get:(e,t,n)=>en(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Tf(e){return ls(e)?e:new Proxy(e,xg)}/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tn(e,t,n,r){try{return r?e(...r):e()}catch(s){Zi(s,t,n)}}function Ne(e,t,n,r){if(ut(e)){const s=Tn(e,t,n,r);return s&&Xh(s)&&s.catch(i=>{Zi(i,t,n)}),s}if(ct(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ne(e[i],t,n,r));return s}}function Zi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](e,a,c)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Nn(),Tn(l,null,10,[e,a,c]),nn();return}}Ng(e,n,s,r)}function Ng(e,t,n,r=!0){console.error(e)}let Is=!1,ya=!1;const re=[];let Be=0;const vr=[];let gn=null,qn=0;const If=Promise.resolve();let lc=null;function Af(e){const t=lc||If;return e?t.then(this?e.bind(this):e):t}function Og(e){let t=Be+1,n=re.length;for(;t<n;){const r=t+n>>>1,s=re[r],i=As(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function uc(e){(!re.length||!re.includes(e,Is&&e.allowRecurse?Be+1:Be))&&(e.id==null?re.push(e):re.splice(Og(e.id),0,e),bf())}function bf(){!Is&&!ya&&(ya=!0,lc=If.then(Sf))}function kg(e){const t=re.indexOf(e);t>Be&&re.splice(t,1)}function Mg(e){ct(e)?vr.push(...e):(!gn||!gn.includes(e,e.allowRecurse?qn+1:qn))&&vr.push(e),bf()}function iu(e,t,n=Is?Be+1:0){for(;n<re.length;n++){const r=re[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;re.splice(n,1),n--,r()}}}function Rf(e){if(vr.length){const t=[...new Set(vr)].sort((n,r)=>As(n)-As(r));if(vr.length=0,gn){gn.push(...t);return}for(gn=t,qn=0;qn<gn.length;qn++){const n=gn[qn];n.active!==!1&&n()}gn=null,qn=0}}const As=e=>e.id==null?1/0:e.id,Lg=(e,t)=>{const n=As(e)-As(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Sf(e){ya=!1,Is=!0,re.sort(Lg);try{for(Be=0;Be<re.length;Be++){const t=re[Be];t&&t.active!==!1&&Tn(t,null,14)}}finally{Be=0,re.length=0,Rf(),Is=!1,lc=null,(re.length||vr.length)&&Sf()}}function Fg(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ct;let s=n;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:g}=r[d]||Ct;g&&(s=n.map(v=>Kt(v)?v.trim():v)),p&&(s=n.map(Jm))}let c,l=r[c=jo(t)]||r[c=jo(Ke(t))];!l&&i&&(l=r[c=jo(Mr(t))]),l&&Ne(l,e,6,s);const h=r[c+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ne(h,e,6,s)}}function Pf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},c=!1;if(!ut(e)){const l=h=>{const d=Pf(h,t,!0);d&&(c=!0,Ht(a,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!c?(xt(e)&&r.set(e,null),null):(ct(i)?i.forEach(l=>a[l]=null):Ht(a,i),xt(e)&&r.set(e,a),a)}function to(e,t){return!e||!Ki(t)?!1:(t=t.slice(2).replace(/Once$/,""),_t(e,t[0].toLowerCase()+t.slice(1))||_t(e,Mr(t))||_t(e,t))}let ve=null,eo=null;function Ci(e){const t=ve;return ve=e,eo=e&&e.type.__scopeId||null,t}function Ug(e){eo=e}function Bg(){eo=null}function hc(e,t=ve,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&_u(-1);const i=Ci(t);let a;try{a=e(...s)}finally{Ci(i),r._d&&_u(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function zo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:g,setupState:v,ctx:V,inheritAttrs:D}=e,k=Ci(e);let G,z;try{if(n.shapeFlag&4){const it=s||r,wt=it;G=Ue(h.call(wt,it,d,p,v,g,V)),z=c}else{const it=t;G=Ue(it.length>1?it(p,{attrs:c,slots:a,emit:l}):it(p,null)),z=t.props?c:jg(c)}}catch(it){ds.length=0,Zi(it,e,1),G=Yt(bs)}let $=G;if(z&&D!==!1){const it=Object.keys(z),{shapeFlag:wt}=$;it.length&&wt&7&&(i&&it.some(Ja)&&(z=$g(z,i)),$=Ir($,z,!1,!0))}return n.dirs&&($=Ir($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),G=$,Ci(k),G}const jg=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ki(n))&&((t||(t={}))[n]=e[n]);return t},$g=(e,t)=>{const n={};for(const r in e)(!Ja(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function qg(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:c,patchFlag:l}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ou(r,a,h):!!a;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(a[g]!==r[g]&&!to(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?ou(r,a,h):!0:!!a;return!1}function ou(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!to(n,i))return!0}return!1}function zg({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Cf="components",Hg="directives";function Vf(e,t){return Df(Cf,e,!0,t)||e}const Kg=Symbol.for("v-ndc");function Gg(e){return Df(Hg,e)}function Df(e,t,n=!0,r=!1){const s=ve||se;if(s){const i=s.type;if(e===Cf){const c=j_(i,!1);if(c&&(c===t||c===Ke(t)||c===Qi(Ke(t))))return i}const a=au(s[e]||i[e],t)||au(s.appContext[e],t);return!a&&r?i:a}}function au(e,t){return e&&(e[t]||e[Ke(t)]||e[Qi(Ke(t))])}const Wg=e=>e.__isSuspense;function Qg(e,t){t&&t.pendingBranch?ct(e)?t.effects.push(...e):t.effects.push(e):Mg(e)}function no(e,t,n=se,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Nn();const c=Bs(n),l=Ne(t,n,e,a);return c(),nn(),l});return r?s.unshift(i):s.push(i),i}}const cn=e=>(t,n=se)=>{(!so||e==="sp")&&no(e,(...r)=>t(...r),n)},Yg=cn("bm"),xf=cn("m"),Xg=cn("bu"),Jg=cn("u"),Zg=cn("bum"),Nf=cn("um"),t_=cn("sp"),e_=cn("rtg"),n_=cn("rtc");function r_(e,t=se){no("ec",e,t)}function s_(e,t){if(ve===null)return e;const n=io(ve),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,c,l=Ct]=t[s];i&&(ut(i)&&(i={mounted:i,updated:i}),i.deep&&vn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Bn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Nn(),Ne(l,n,8,[e.el,c,e,t]),nn())}}/*! #__NO_SIDE_EFFECTS__ */function Of(e,t){return ut(e)?Ht({name:e.name},t,{setup:e}):e}const Ei=e=>!!e.type.__asyncLoader,va=e=>e?td(e)?io(e):va(e.parent):null,us=Ht(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>va(e.parent),$root:e=>va(e.root),$emit:e=>e.emit,$options:e=>fc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,uc(e.update)}),$nextTick:e=>e.n||(e.n=Af.bind(e.proxy)),$watch:e=>A_.bind(e)}),Ho=(e,t)=>e!==Ct&&!e.__isScriptSetup&&_t(e,t),i_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=e;let h;if(t[0]!=="$"){const v=a[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ho(r,t))return a[t]=1,r[t];if(s!==Ct&&_t(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&_t(h,t))return a[t]=3,i[t];if(n!==Ct&&_t(n,t))return a[t]=4,n[t];Ea&&(a[t]=0)}}const d=us[t];let p,g;if(d)return t==="$attrs"&&pe(e.attrs,"get",""),d(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==Ct&&_t(n,t))return a[t]=4,n[t];if(g=l.config.globalProperties,_t(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ho(s,t)?(s[t]=n,!0):r!==Ct&&_t(r,t)?(r[t]=n,!0):_t(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||e!==Ct&&_t(e,a)||Ho(t,a)||(c=i[0])&&_t(c,a)||_t(r,a)||_t(us,a)||_t(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_t(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cu(e){return ct(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ea=!0;function o_(e){const t=fc(e),n=e.proxy,r=e.ctx;Ea=!1,t.beforeCreate&&lu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:v,updated:V,activated:D,deactivated:k,beforeDestroy:G,beforeUnmount:z,destroyed:$,unmounted:it,render:wt,renderTracked:Z,renderTriggered:I,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:b,components:R,directives:E,filters:oe}=t;if(h&&a_(h,r,null),a)for(const dt in a){const ht=a[dt];ut(ht)&&(r[dt]=ht.bind(n))}if(s){const dt=s.call(n,n);xt(dt)&&(e.data=Ji(dt))}if(Ea=!0,i)for(const dt in i){const ht=i[dt],ge=ut(ht)?ht.bind(n,n):ut(ht.get)?ht.get.bind(n,n):Se,Pe=!ut(ht)&&ut(ht.set)?ht.set.bind(n):Se,Ae=De({get:ge,set:Pe});Object.defineProperty(r,dt,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Vt=>Ae.value=Vt})}if(c)for(const dt in c)kf(c[dt],r,n,dt);if(l){const dt=ut(l)?l.call(n):l;Reflect.ownKeys(dt).forEach(ht=>{fs(ht,dt[ht])})}d&&lu(d,e,"c");function Lt(dt,ht){ct(ht)?ht.forEach(ge=>dt(ge.bind(n))):ht&&dt(ht.bind(n))}if(Lt(Yg,p),Lt(xf,g),Lt(Xg,v),Lt(Jg,V),Lt(b_,D),Lt(R_,k),Lt(r_,y),Lt(n_,Z),Lt(e_,I),Lt(Zg,z),Lt(Nf,it),Lt(t_,T),ct(A))if(A.length){const dt=e.exposed||(e.exposed={});A.forEach(ht=>{Object.defineProperty(dt,ht,{get:()=>n[ht],set:ge=>n[ht]=ge})})}else e.exposed||(e.exposed={});wt&&e.render===Se&&(e.render=wt),b!=null&&(e.inheritAttrs=b),R&&(e.components=R),E&&(e.directives=E)}function a_(e,t,n=Se){ct(e)&&(e=wa(e));for(const r in e){const s=e[r];let i;xt(s)?"default"in s?i=je(s.from||r,s.default,!0):i=je(s.from||r):i=je(s),me(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function lu(e,t,n){Ne(ct(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function kf(e,t,n,r){const s=r.includes(".")?Wf(n,r):()=>n[r];if(Kt(e)){const i=t[e];ut(i)&&wi(s,i)}else if(ut(e))wi(s,e.bind(n));else if(xt(e))if(ct(e))e.forEach(i=>kf(i,t,n,r));else{const i=ut(e.handler)?e.handler.bind(n):t[e.handler];ut(i)&&wi(s,i,e)}}function fc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,c=i.get(t);let l;return c?l=c:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(h=>Vi(l,h,a,!0)),Vi(l,t,a)),xt(t)&&i.set(t,l),l}function Vi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Vi(e,i,n,!0),s&&s.forEach(a=>Vi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const c=c_[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const c_={data:uu,props:hu,emits:hu,methods:rs,computed:rs,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:rs,directives:rs,watch:u_,provide:uu,inject:l_};function uu(e,t){return t?e?function(){return Ht(ut(e)?e.call(this,this):e,ut(t)?t.call(this,this):t)}:t:e}function l_(e,t){return rs(wa(e),wa(t))}function wa(e){if(ct(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function rs(e,t){return e?Ht(Object.create(null),e,t):t}function hu(e,t){return e?ct(e)&&ct(t)?[...new Set([...e,...t])]:Ht(Object.create(null),cu(e),cu(t??{})):t}function u_(e,t){if(!e)return t;if(!t)return e;const n=Ht(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Mf(){return{app:null,config:{isNativeTag:Gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let h_=0;function f_(e,t){return function(r,s=null){ut(r)||(r=Ht({},r)),s!=null&&!xt(s)&&(s=null);const i=Mf(),a=new WeakSet;let c=!1;const l=i.app={_uid:h_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:q_,get config(){return i.config},set config(h){},use(h,...d){return a.has(h)||(h&&ut(h.install)?(a.add(h),h.install(l,...d)):ut(h)&&(a.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!c){const g=Yt(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(g,h):e(g,h,p),c=!0,l._container=h,h.__vue_app__=l,io(g.component)}},unmount(){c&&(e(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){const d=hs;hs=l;try{return h()}finally{hs=d}}};return l}}let hs=null;function fs(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function je(e,t,n=!1){const r=se||ve;if(r||hs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:hs._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ut(t)?t.call(r&&r.proxy):t}}const Lf={},Ff=()=>Object.create(Lf),Uf=e=>Object.getPrototypeOf(e)===Lf;function d_(e,t,n,r=!1){const s={},i=Ff();e.propsDefaults=Object.create(null),Bf(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:gf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function p_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,c=It(s),[l]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(to(e.emitsOptions,g))continue;const v=t[g];if(l)if(_t(i,g))v!==i[g]&&(i[g]=v,h=!0);else{const V=Ke(g);s[V]=Ta(l,c,V,v,e,!1)}else v!==i[g]&&(i[g]=v,h=!0)}}}else{Bf(e,t,s,i)&&(h=!0);let d;for(const p in c)(!t||!_t(t,p)&&((d=Mr(p))===p||!_t(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ta(l,c,p,void 0,e,!0)):delete s[p]);if(i!==c)for(const p in i)(!t||!_t(t,p))&&(delete i[p],h=!0)}h&&tn(e.attrs,"set","")}function Bf(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,c;if(t)for(let l in t){if(cs(l))continue;const h=t[l];let d;s&&_t(s,d=Ke(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:to(e.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=It(n),h=c||Ct;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ta(s,l,p,h[p],e,!_t(h,p))}}return a}function Ta(e,t,n,r,s,i){const a=e[n];if(a!=null){const c=_t(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ut(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Bs(s);r=h[n]=l.call(null,t),d()}}else r=l}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Mr(n))&&(r=!0))}return r}function jf(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},c=[];let l=!1;if(!ut(e)){const d=p=>{l=!0;const[g,v]=jf(p,t,!0);Ht(a,g),v&&c.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return xt(e)&&r.set(e,_r),_r;if(ct(i))for(let d=0;d<i.length;d++){const p=Ke(i[d]);fu(p)&&(a[p]=Ct)}else if(i)for(const d in i){const p=Ke(d);if(fu(p)){const g=i[d],v=a[p]=ct(g)||ut(g)?{type:g}:Ht({},g);if(v){const V=mu(Boolean,v.type),D=mu(String,v.type);v[0]=V>-1,v[1]=D<0||V<D,(V>-1||_t(v,"default"))&&c.push(p)}}}const h=[a,c];return xt(e)&&r.set(e,h),h}function fu(e){return e[0]!=="$"&&!cs(e)}function du(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function pu(e,t){return du(e)===du(t)}function mu(e,t){return ct(t)?t.findIndex(n=>pu(n,e)):ut(t)&&pu(t,e)?0:-1}const $f=e=>e[0]==="_"||e==="$stable",dc=e=>ct(e)?e.map(Ue):[Ue(e)],m_=(e,t,n)=>{if(t._n)return t;const r=hc((...s)=>dc(t(...s)),n);return r._c=!1,r},qf=(e,t,n)=>{const r=e._ctx;for(const s in e){if($f(s))continue;const i=e[s];if(ut(i))t[s]=m_(s,i,r);else if(i!=null){const a=dc(i);t[s]=()=>a}}},zf=(e,t)=>{const n=dc(t);e.slots.default=()=>n},g_=(e,t)=>{const n=e.slots=Ff();if(e.vnode.shapeFlag&32){const r=t._;r?(Ht(n,t),tf(n,"_",r,!0)):qf(t,n)}else t&&zf(e,t)},__=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Ct;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:(Ht(s,t),!n&&c===1&&delete s._):(i=!t.$stable,qf(t,s)),a=t}else t&&(zf(e,t),a={default:1});if(i)for(const c in s)!$f(c)&&a[c]==null&&delete s[c]};function Ia(e,t,n,r,s=!1){if(ct(e)){e.forEach((g,v)=>Ia(g,t&&(ct(t)?t[v]:t),n,r,s));return}if(Ei(r)&&!s)return;const i=r.shapeFlag&4?io(r.component):r.el,a=s?null:i,{i:c,r:l}=e,h=t&&t.r,d=c.refs===Ct?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(Kt(h)?(d[h]=null,_t(p,h)&&(p[h]=null)):me(h)&&(h.value=null)),ut(l))Tn(l,c,12,[a,d]);else{const g=Kt(l),v=me(l);if(g||v){const V=()=>{if(e.f){const D=g?_t(p,l)?p[l]:d[l]:l.value;s?ct(D)&&Za(D,i):ct(D)?D.includes(i)||D.push(i):g?(d[l]=[i],_t(p,l)&&(p[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=a,_t(p,l)&&(p[l]=a)):v&&(l.value=a,e.k&&(d[e.k]=a))};a?(V.id=-1,ue(V,n)):V()}}}const ue=Qg;function y_(e){return v_(e)}function v_(e,t){const n=ef();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=Se,insertStaticContent:V}=e,D=(_,w,P,O=null,x=null,B=null,H=void 0,U=null,j=!!w.dynamicChildren)=>{if(_===w)return;_&&!ts(_,w)&&(O=N(_),Vt(_,x,B,!0),_=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:M,ref:W,shapeFlag:et}=w;switch(M){case ro:k(_,w,P,O);break;case bs:G(_,w,P,O);break;case Go:_==null&&z(w,P,O,H);break;case Fe:R(_,w,P,O,x,B,H,U,j);break;default:et&1?wt(_,w,P,O,x,B,H,U,j):et&6?E(_,w,P,O,x,B,H,U,j):(et&64||et&128)&&M.process(_,w,P,O,x,B,H,U,j,Y)}W!=null&&x&&Ia(W,_&&_.ref,B,w||_,!w)},k=(_,w,P,O)=>{if(_==null)r(w.el=c(w.children),P,O);else{const x=w.el=_.el;w.children!==_.children&&h(x,w.children)}},G=(_,w,P,O)=>{_==null?r(w.el=l(w.children||""),P,O):w.el=_.el},z=(_,w,P,O)=>{[_.el,_.anchor]=V(_.children,w,P,O,_.el,_.anchor)},$=({el:_,anchor:w},P,O)=>{let x;for(;_&&_!==w;)x=g(_),r(_,P,O),_=x;r(w,P,O)},it=({el:_,anchor:w})=>{let P;for(;_&&_!==w;)P=g(_),s(_),_=P;s(w)},wt=(_,w,P,O,x,B,H,U,j)=>{w.type==="svg"?H="svg":w.type==="math"&&(H="mathml"),_==null?Z(w,P,O,x,B,H,U,j):T(_,w,x,B,H,U,j)},Z=(_,w,P,O,x,B,H,U)=>{let j,M;const{props:W,shapeFlag:et,transition:tt,dirs:J}=_;if(j=_.el=a(_.type,B,W&&W.is,W),et&8?d(j,_.children):et&16&&y(_.children,j,null,O,x,Ko(_,B),H,U),J&&Bn(_,null,O,"created"),I(j,_,_.scopeId,H,O),W){for(const Tt in W)Tt!=="value"&&!cs(Tt)&&i(j,Tt,null,W[Tt],B,_.children,O,x,qt);"value"in W&&i(j,"value",null,W.value,B),(M=W.onVnodeBeforeMount)&&Me(M,O,_)}J&&Bn(_,null,O,"beforeMount");const nt=E_(x,tt);nt&&tt.beforeEnter(j),r(j,w,P),((M=W&&W.onVnodeMounted)||nt||J)&&ue(()=>{M&&Me(M,O,_),nt&&tt.enter(j),J&&Bn(_,null,O,"mounted")},x)},I=(_,w,P,O,x)=>{if(P&&v(_,P),O)for(let B=0;B<O.length;B++)v(_,O[B]);if(x){let B=x.subTree;if(w===B){const H=x.vnode;I(_,H,H.scopeId,H.slotScopeIds,x.parent)}}},y=(_,w,P,O,x,B,H,U,j=0)=>{for(let M=j;M<_.length;M++){const W=_[M]=U?_n(_[M]):Ue(_[M]);D(null,W,w,P,O,x,B,H,U)}},T=(_,w,P,O,x,B,H)=>{const U=w.el=_.el;let{patchFlag:j,dynamicChildren:M,dirs:W}=w;j|=_.patchFlag&16;const et=_.props||Ct,tt=w.props||Ct;let J;if(P&&jn(P,!1),(J=tt.onVnodeBeforeUpdate)&&Me(J,P,w,_),W&&Bn(w,_,P,"beforeUpdate"),P&&jn(P,!0),M?A(_.dynamicChildren,M,U,P,O,Ko(w,x),B):H||ht(_,w,U,null,P,O,Ko(w,x),B,!1),j>0){if(j&16)b(U,w,et,tt,P,O,x);else if(j&2&&et.class!==tt.class&&i(U,"class",null,tt.class,x),j&4&&i(U,"style",et.style,tt.style,x),j&8){const nt=w.dynamicProps;for(let Tt=0;Tt<nt.length;Tt++){const gt=nt[Tt],Mt=et[gt],_e=tt[gt];(_e!==Mt||gt==="value")&&i(U,gt,Mt,_e,x,_.children,P,O,qt)}}j&1&&_.children!==w.children&&d(U,w.children)}else!H&&M==null&&b(U,w,et,tt,P,O,x);((J=tt.onVnodeUpdated)||W)&&ue(()=>{J&&Me(J,P,w,_),W&&Bn(w,_,P,"updated")},O)},A=(_,w,P,O,x,B,H)=>{for(let U=0;U<w.length;U++){const j=_[U],M=w[U],W=j.el&&(j.type===Fe||!ts(j,M)||j.shapeFlag&70)?p(j.el):P;D(j,M,W,null,O,x,B,H,!0)}},b=(_,w,P,O,x,B,H)=>{if(P!==O){if(P!==Ct)for(const U in P)!cs(U)&&!(U in O)&&i(_,U,P[U],null,H,w.children,x,B,qt);for(const U in O){if(cs(U))continue;const j=O[U],M=P[U];j!==M&&U!=="value"&&i(_,U,M,j,H,w.children,x,B,qt)}"value"in O&&i(_,"value",P.value,O.value,H)}},R=(_,w,P,O,x,B,H,U,j)=>{const M=w.el=_?_.el:c(""),W=w.anchor=_?_.anchor:c("");let{patchFlag:et,dynamicChildren:tt,slotScopeIds:J}=w;J&&(U=U?U.concat(J):J),_==null?(r(M,P,O),r(W,P,O),y(w.children||[],P,W,x,B,H,U,j)):et>0&&et&64&&tt&&_.dynamicChildren?(A(_.dynamicChildren,tt,P,x,B,H,U),(w.key!=null||x&&w===x.subTree)&&Hf(_,w,!0)):ht(_,w,P,W,x,B,H,U,j)},E=(_,w,P,O,x,B,H,U,j)=>{w.slotScopeIds=U,_==null?w.shapeFlag&512?x.ctx.activate(w,P,O,H,j):oe(w,P,O,x,B,H,j):Ie(_,w,j)},oe=(_,w,P,O,x,B,H)=>{const U=_.component=M_(_,O,x);if(Qf(_)&&(U.ctx.renderer=Y),L_(U),U.asyncDep){if(x&&x.registerDep(U,Lt,H),!_.el){const j=U.subTree=Yt(bs);G(null,j,w,P)}}else Lt(U,_,w,P,x,B,H)},Ie=(_,w,P)=>{const O=w.component=_.component;if(qg(_,w,P))if(O.asyncDep&&!O.asyncResolved){dt(O,w,P);return}else O.next=w,kg(O.update),O.effect.dirty=!0,O.update();else w.el=_.el,O.vnode=w},Lt=(_,w,P,O,x,B,H)=>{const U=()=>{if(_.isMounted){let{next:W,bu:et,u:tt,parent:J,vnode:nt}=_;{const be=Kf(_);if(be){W&&(W.el=nt.el,dt(_,W,H)),be.asyncDep.then(()=>{_.isUnmounted||U()});return}}let Tt=W,gt;jn(_,!1),W?(W.el=nt.el,dt(_,W,H)):W=nt,et&&$o(et),(gt=W.props&&W.props.onVnodeBeforeUpdate)&&Me(gt,J,W,nt),jn(_,!0);const Mt=zo(_),_e=_.subTree;_.subTree=Mt,D(_e,Mt,p(_e.el),N(_e),_,x,B),W.el=Mt.el,Tt===null&&zg(_,Mt.el),tt&&ue(tt,x),(gt=W.props&&W.props.onVnodeUpdated)&&ue(()=>Me(gt,J,W,nt),x)}else{let W;const{el:et,props:tt}=w,{bm:J,m:nt,parent:Tt}=_,gt=Ei(w);if(jn(_,!1),J&&$o(J),!gt&&(W=tt&&tt.onVnodeBeforeMount)&&Me(W,Tt,w),jn(_,!0),et&&bt){const Mt=()=>{_.subTree=zo(_),bt(et,_.subTree,_,x,null)};gt?w.type.__asyncLoader().then(()=>!_.isUnmounted&&Mt()):Mt()}else{const Mt=_.subTree=zo(_);D(null,Mt,P,O,_,x,B),w.el=Mt.el}if(nt&&ue(nt,x),!gt&&(W=tt&&tt.onVnodeMounted)){const Mt=w;ue(()=>Me(W,Tt,Mt),x)}(w.shapeFlag&256||Tt&&Ei(Tt.vnode)&&Tt.vnode.shapeFlag&256)&&_.a&&ue(_.a,x),_.isMounted=!0,w=P=O=null}},j=_.effect=new nc(U,Se,()=>uc(M),_.scope),M=_.update=()=>{j.dirty&&j.run()};M.id=_.uid,jn(_,!0),M()},dt=(_,w,P)=>{w.component=_;const O=_.vnode.props;_.vnode=w,_.next=null,p_(_,w.props,O,P),__(_,w.children,P),Nn(),iu(_),nn()},ht=(_,w,P,O,x,B,H,U,j=!1)=>{const M=_&&_.children,W=_?_.shapeFlag:0,et=w.children,{patchFlag:tt,shapeFlag:J}=w;if(tt>0){if(tt&128){Pe(M,et,P,O,x,B,H,U,j);return}else if(tt&256){ge(M,et,P,O,x,B,H,U,j);return}}J&8?(W&16&&qt(M,x,B),et!==M&&d(P,et)):W&16?J&16?Pe(M,et,P,O,x,B,H,U,j):qt(M,x,B,!0):(W&8&&d(P,""),J&16&&y(et,P,O,x,B,H,U,j))},ge=(_,w,P,O,x,B,H,U,j)=>{_=_||_r,w=w||_r;const M=_.length,W=w.length,et=Math.min(M,W);let tt;for(tt=0;tt<et;tt++){const J=w[tt]=j?_n(w[tt]):Ue(w[tt]);D(_[tt],J,P,null,x,B,H,U,j)}M>W?qt(_,x,B,!0,!1,et):y(w,P,O,x,B,H,U,j,et)},Pe=(_,w,P,O,x,B,H,U,j)=>{let M=0;const W=w.length;let et=_.length-1,tt=W-1;for(;M<=et&&M<=tt;){const J=_[M],nt=w[M]=j?_n(w[M]):Ue(w[M]);if(ts(J,nt))D(J,nt,P,null,x,B,H,U,j);else break;M++}for(;M<=et&&M<=tt;){const J=_[et],nt=w[tt]=j?_n(w[tt]):Ue(w[tt]);if(ts(J,nt))D(J,nt,P,null,x,B,H,U,j);else break;et--,tt--}if(M>et){if(M<=tt){const J=tt+1,nt=J<W?w[J].el:O;for(;M<=tt;)D(null,w[M]=j?_n(w[M]):Ue(w[M]),P,nt,x,B,H,U,j),M++}}else if(M>tt)for(;M<=et;)Vt(_[M],x,B,!0),M++;else{const J=M,nt=M,Tt=new Map;for(M=nt;M<=tt;M++){const ae=w[M]=j?_n(w[M]):Ue(w[M]);ae.key!=null&&Tt.set(ae.key,M)}let gt,Mt=0;const _e=tt-nt+1;let be=!1,Br=0;const un=new Array(_e);for(M=0;M<_e;M++)un[M]=0;for(M=J;M<=et;M++){const ae=_[M];if(Mt>=_e){Vt(ae,x,B,!0);continue}let Re;if(ae.key!=null)Re=Tt.get(ae.key);else for(gt=nt;gt<=tt;gt++)if(un[gt-nt]===0&&ts(ae,w[gt])){Re=gt;break}Re===void 0?Vt(ae,x,B,!0):(un[Re-nt]=M+1,Re>=Br?Br=Re:be=!0,D(ae,w[Re],P,null,x,B,H,U,j),Mt++)}const or=be?w_(un):_r;for(gt=or.length-1,M=_e-1;M>=0;M--){const ae=nt+M,Re=w[ae],ar=ae+1<W?w[ae+1].el:O;un[M]===0?D(null,Re,P,ar,x,B,H,U,j):be&&(gt<0||M!==or[gt]?Ae(Re,P,ar,2):gt--)}}},Ae=(_,w,P,O,x=null)=>{const{el:B,type:H,transition:U,children:j,shapeFlag:M}=_;if(M&6){Ae(_.component.subTree,w,P,O);return}if(M&128){_.suspense.move(w,P,O);return}if(M&64){H.move(_,w,P,Y);return}if(H===Fe){r(B,w,P);for(let et=0;et<j.length;et++)Ae(j[et],w,P,O);r(_.anchor,w,P);return}if(H===Go){$(_,w,P);return}if(O!==2&&M&1&&U)if(O===0)U.beforeEnter(B),r(B,w,P),ue(()=>U.enter(B),x);else{const{leave:et,delayLeave:tt,afterLeave:J}=U,nt=()=>r(B,w,P),Tt=()=>{et(B,()=>{nt(),J&&J()})};tt?tt(B,nt,Tt):Tt()}else r(B,w,P)},Vt=(_,w,P,O=!1,x=!1)=>{const{type:B,props:H,ref:U,children:j,dynamicChildren:M,shapeFlag:W,patchFlag:et,dirs:tt,memoIndex:J}=_;if(et===-2&&(x=!1),U!=null&&Ia(U,null,P,_,!0),J!=null&&(w.renderCache[J]=void 0),W&256){w.ctx.deactivate(_);return}const nt=W&1&&tt,Tt=!Ei(_);let gt;if(Tt&&(gt=H&&H.onVnodeBeforeUnmount)&&Me(gt,w,_),W&6)ke(_.component,P,O);else{if(W&128){_.suspense.unmount(P,O);return}nt&&Bn(_,null,w,"beforeUnmount"),W&64?_.type.remove(_,w,P,Y,O):M&&(B!==Fe||et>0&&et&64)?qt(M,w,P,!1,!0):(B===Fe&&et&384||!x&&W&16)&&qt(j,w,P),O&&Dt(_)}(Tt&&(gt=H&&H.onVnodeUnmounted)||nt)&&ue(()=>{gt&&Me(gt,w,_),nt&&Bn(_,null,w,"unmounted")},P)},Dt=_=>{const{type:w,el:P,anchor:O,transition:x}=_;if(w===Fe){ln(P,O);return}if(w===Go){it(_);return}const B=()=>{s(P),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(_.shapeFlag&1&&x&&!x.persisted){const{leave:H,delayLeave:U}=x,j=()=>H(P,B);U?U(_.el,B,j):j()}else B()},ln=(_,w)=>{let P;for(;_!==w;)P=g(_),s(_),_=P;s(w)},ke=(_,w,P)=>{const{bum:O,scope:x,update:B,subTree:H,um:U,m:j,a:M}=_;gu(j),gu(M),O&&$o(O),x.stop(),B&&(B.active=!1,Vt(H,_,w,P)),U&&ue(U,w),ue(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},qt=(_,w,P,O=!1,x=!1,B=0)=>{for(let H=B;H<_.length;H++)Vt(_[H],w,P,O,x)},N=_=>_.shapeFlag&6?N(_.component.subTree):_.shapeFlag&128?_.suspense.next():g(_.anchor||_.el);let Q=!1;const K=(_,w,P)=>{_==null?w._vnode&&Vt(w._vnode,null,null,!0):D(w._vnode||null,_,w,null,null,null,P),Q||(Q=!0,iu(),Rf(),Q=!1),w._vnode=_},Y={p:D,um:Vt,m:Ae,r:Dt,mt:oe,mc:y,pc:ht,pbc:A,n:N,o:e};let pt,bt;return{render:K,hydrate:pt,createApp:f_(K,pt)}}function Ko({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function E_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Hf(e,t,n=!1){const r=e.children,s=t.children;if(ct(r)&&ct(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=_n(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Hf(a,c)),c.type===ro&&(c.el=a.el)}}function w_(e){const t=e.slice(),n=[0];let r,s,i,a,c;const l=e.length;for(r=0;r<l;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,e[n[c]]<h?i=c+1:a=c;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Kf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Kf(t)}function gu(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const T_=Symbol.for("v-scx"),I_=()=>je(T_),pi={};function wi(e,t,n){return Gf(e,t,n)}function Gf(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:a,onTrigger:c}=Ct){if(t&&i){const Z=t;t=(...I)=>{Z(...I),wt()}}const l=se,h=Z=>r===!0?Z:vn(Z,r===!1?1:void 0);let d,p=!1,g=!1;if(me(e)?(d=()=>e.value,p=Pi(e)):ls(e)?(d=()=>h(e),p=!0):ct(e)?(g=!0,p=e.some(Z=>ls(Z)||Pi(Z)),d=()=>e.map(Z=>{if(me(Z))return Z.value;if(ls(Z))return h(Z);if(ut(Z))return Tn(Z,l,2)})):ut(e)?t?d=()=>Tn(e,l,2):d=()=>(v&&v(),Ne(e,l,3,[V])):d=Se,t&&r){const Z=d;d=()=>vn(Z())}let v,V=Z=>{v=$.onStop=()=>{Tn(Z,l,4),v=$.onStop=void 0}},D;if(so)if(V=Se,t?n&&Ne(t,l,3,[d(),g?[]:void 0,V]):d(),s==="sync"){const Z=I_();D=Z.__watcherHandles||(Z.__watcherHandles=[])}else return Se;let k=g?new Array(e.length).fill(pi):pi;const G=()=>{if(!(!$.active||!$.dirty))if(t){const Z=$.run();(r||p||(g?Z.some((I,y)=>Rn(I,k[y])):Rn(Z,k)))&&(v&&v(),Ne(t,l,3,[Z,k===pi?void 0:g&&k[0]===pi?[]:k,V]),k=Z)}else $.run()};G.allowRecurse=!!t;let z;s==="sync"?z=G:s==="post"?z=()=>ue(G,l&&l.suspense):(G.pre=!0,l&&(G.id=l.uid),z=()=>uc(G));const $=new nc(d,Se,z),it=cg(),wt=()=>{$.stop(),it&&Za(it.effects,$)};return t?n?G():k=$.run():s==="post"?ue($.run.bind($),l&&l.suspense):$.run(),D&&D.push(wt),wt}function A_(e,t,n){const r=this.proxy,s=Kt(e)?e.includes(".")?Wf(r,e):()=>r[e]:e.bind(r,r);let i;ut(t)?i=t:(i=t.handler,n=t);const a=Bs(this),c=Gf(s,i.bind(r),n);return a(),c}function Wf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function vn(e,t=1/0,n){if(t<=0||!xt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,me(e))vn(e.value,t,n);else if(ct(e))for(let r=0;r<e.length;r++)vn(e[r],t,n);else if(Yh(e)||yr(e))e.forEach(r=>{vn(r,t,n)});else if(Zh(e)){for(const r in e)vn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&vn(e[r],t,n)}return e}const Qf=e=>e.type.__isKeepAlive;function b_(e,t){Yf(e,"a",t)}function R_(e,t){Yf(e,"da",t)}function Yf(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(no(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Qf(s.parent.vnode)&&S_(r,t,n,s),s=s.parent}}function S_(e,t,n,r){const s=no(t,e,r,!0);Nf(()=>{Za(r[t],s)},n)}function Xf(e,t){e.shapeFlag&6&&e.component?Xf(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const P_=e=>e.__isTeleport,Fe=Symbol.for("v-fgt"),ro=Symbol.for("v-txt"),bs=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),ds=[];let xe=null;function wr(e=!1){ds.push(xe=e?null:[])}function C_(){ds.pop(),xe=ds[ds.length-1]||null}let Rs=1;function _u(e){Rs+=e}function V_(e){return e.dynamicChildren=Rs>0?xe||_r:null,C_(),Rs>0&&xe&&xe.push(e),e}function Tr(e,t,n,r,s,i){return V_(jt(e,t,n,r,s,i,!0))}function Aa(e){return e?e.__v_isVNode===!0:!1}function ts(e,t){return e.type===t.type&&e.key===t.key}const Jf=({key:e})=>e??null,Ti=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Kt(e)||me(e)||ut(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function jt(e,t=null,n=null,r=0,s=null,i=e===Fe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jf(t),ref:t&&Ti(t),scopeId:eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return c?(pc(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Kt(n)?8:16),Rs>0&&!a&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const Yt=D_;function D_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Kg)&&(e=bs),Aa(e)){const c=Ir(e,t,!0);return n&&pc(c,n),Rs>0&&!i&&xe&&(c.shapeFlag&6?xe[xe.indexOf(e)]=c:xe.push(c)),c.patchFlag=-2,c}if($_(e)&&(e=e.__vccOpts),t){t=x_(t);let{class:c,style:l}=t;c&&!Kt(c)&&(t.class=Yi(c)),xt(l)&&(yf(l)&&!ct(l)&&(l=Ht({},l)),t.style=ec(l))}const a=Kt(e)?1:Wg(e)?128:P_(e)?64:xt(e)?4:ut(e)?2:0;return jt(e,t,n,r,s,a,i,!0)}function x_(e){return e?yf(e)||Uf(e)?Ht({},e):e:null}function Ir(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=e,h=t?N_(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Jf(h),ref:t&&t.ref?n&&i?ct(i)?i.concat(Ti(t)):[i,Ti(t)]:Ti(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ir(e.ssContent),ssFallback:e.ssFallback&&Ir(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Xf(d,l.clone(d)),d}function Zf(e=" ",t=0){return Yt(ro,null,e,t)}function Ue(e){return e==null||typeof e=="boolean"?Yt(bs):ct(e)?Yt(Fe,null,e.slice()):typeof e=="object"?_n(e):Yt(ro,null,String(e))}function _n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ir(e)}function pc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ct(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),pc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Uf(t)?t._ctx=ve:s===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ut(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Zf(t)]):n=8);e.children=t,e.shapeFlag|=n}function N_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Yi([t.class,r.class]));else if(s==="style")t.style=ec([t.style,r.style]);else if(Ki(s)){const i=t[s],a=r[s];a&&i!==a&&!(ct(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Me(e,t,n,r=null){Ne(e,t,7,[n,r])}const O_=Mf();let k_=0;function M_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||O_,i={uid:k_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new og(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jf(r,s),emitsOptions:Pf(r,s),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:r.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Fg.bind(null,i),e.ce&&e.ce(i),i}let se=null,Di,ba;{const e=ef(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Di=t("__VUE_INSTANCE_SETTERS__",n=>se=n),ba=t("__VUE_SSR_SETTERS__",n=>so=n)}const Bs=e=>{const t=se;return Di(e),e.scope.on(),()=>{e.scope.off(),Di(t)}},yu=()=>{se&&se.scope.off(),Di(null)};function td(e){return e.vnode.shapeFlag&4}let so=!1;function L_(e,t=!1){t&&ba(t);const{props:n,children:r}=e.vnode,s=td(e);d_(e,n,s,t),g_(e,r);const i=s?F_(e,t):void 0;return t&&ba(!1),i}function F_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,i_);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?B_(e):null,i=Bs(e);Nn();const a=Tn(r,e,0,[e.props,s]);if(nn(),i(),Xh(a)){if(a.then(yu,yu),t)return a.then(c=>{vu(e,c,t)}).catch(c=>{Zi(c,e,0)});e.asyncDep=a}else vu(e,a,t)}else ed(e,t)}function vu(e,t,n){ut(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:xt(t)&&(e.setupState=Tf(t)),ed(e,n)}let Eu;function ed(e,t,n){const r=e.type;if(!e.render){if(!t&&Eu&&!r.render){const s=r.template||fc(e).template;if(s){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Ht(Ht({isCustomElement:i,delimiters:c},a),l);r.render=Eu(s,h)}}e.render=r.render||Se}{const s=Bs(e);Nn();try{o_(e)}finally{nn(),s()}}}const U_={get(e,t){return pe(e,"get",""),e[t]}};function B_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,U_),slots:e.slots,emit:e.emit,expose:t}}function io(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Tf(Pg(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in us)return us[n](e)},has(t,n){return n in t||n in us}})):e.proxy}function j_(e,t=!0){return ut(e)?e.displayName||e.name:e.name||t&&e.__name}function $_(e){return ut(e)&&"__vccOpts"in e}const De=(e,t)=>Cg(e,t,so);function nd(e,t,n){const r=arguments.length;return r===2?xt(t)&&!ct(t)?Aa(t)?Yt(e,null,[t]):Yt(e,t):Yt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Aa(n)&&(n=[n]),Yt(e,t,n))}const q_="3.4.30";/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const z_="http://www.w3.org/2000/svg",H_="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,wu=Je&&Je.createElement("template"),K_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Je.createElementNS(z_,e):t==="mathml"?Je.createElementNS(H_,e):n?Je.createElement(e,{is:n}):Je.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Je.createTextNode(e),createComment:e=>Je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wu.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const c=wu.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},G_=Symbol("_vtc");function W_(e,t,n){const r=e[G_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Tu=Symbol("_vod"),Q_=Symbol("_vsh"),Y_=Symbol(""),X_=/(^|;)\s*display\s*:/;function J_(e,t,n){const r=e.style,s=Kt(n);let i=!1;if(n&&!s){if(t)if(Kt(t))for(const a of t.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Ii(r,c,"")}else for(const a in t)n[a]==null&&Ii(r,a,"");for(const a in n)a==="display"&&(i=!0),Ii(r,a,n[a])}else if(s){if(t!==n){const a=r[Y_];a&&(n+=";"+a),r.cssText=n,i=X_.test(n)}}else t&&e.removeAttribute("style");Tu in e&&(e[Tu]=i?r.display:"",e[Q_]&&(r.display="none"))}const Iu=/\s*!important$/;function Ii(e,t,n){if(ct(n))n.forEach(r=>Ii(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Z_(e,t);Iu.test(n)?e.setProperty(Mr(r),n.replace(Iu,""),"important"):e[r]=n}}const Au=["Webkit","Moz","ms"],Wo={};function Z_(e,t){const n=Wo[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Wo[t]=r;r=Qi(r);for(let s=0;s<Au.length;s++){const i=Au[s]+r;if(i in e)return Wo[t]=i}return t}const bu="http://www.w3.org/1999/xlink";function Ru(e,t,n,r,s,i=sg(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(bu,t.slice(6,t.length)):e.setAttributeNS(bu,t,n):n==null||i&&!nf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":xn(n)?String(n):n)}function ty(e,t,n,r,s,i,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,s,i),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){const h=c==="OPTION"?e.getAttribute("value")||"":e.value,d=n==null?"":String(n);(h!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const h=typeof e[t];h==="boolean"?n=nf(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ey(e,t,n,r){e.addEventListener(t,n,r)}function ny(e,t,n,r){e.removeEventListener(t,n,r)}const Su=Symbol("_vei");function ry(e,t,n,r,s=null){const i=e[Su]||(e[Su]={}),a=i[t];if(r&&a)a.value=r;else{const[c,l]=sy(t);if(r){const h=i[t]=ay(r,s);ey(e,c,h,l)}else a&&(ny(e,c,a,l),i[t]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function sy(e){let t;if(Pu.test(e)){t={};let r;for(;r=e.match(Pu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mr(e.slice(2)),t]}let Qo=0;const iy=Promise.resolve(),oy=()=>Qo||(iy.then(()=>Qo=0),Qo=Date.now());function ay(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne(cy(r,n.value),t,5,[r])};return n.value=e,n.attached=oy(),n}function cy(e,t){if(ct(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Cu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ly=(e,t,n,r,s,i,a,c,l)=>{const h=s==="svg";t==="class"?W_(e,r,h):t==="style"?J_(e,n,r):Ki(t)?Ja(t)||ry(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uy(e,t,r,h))?(ty(e,t,r,i,a,c,l),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ru(e,t,r,h,a,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ru(e,t,r,h))};function uy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Cu(t)&&ut(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cu(t)&&Kt(n)?!1:t in e}const hy=Ht({patchProp:ly},K_);let Vu;function fy(){return Vu||(Vu=y_(hy))}const dy=(...e)=>{const t=fy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=my(r);if(!s)return;const i=t._component;!ut(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,py(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function py(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function my(e){return Kt(e)?document.querySelector(e):e}const rd=new Set,fe=new WeakMap,Ar=new WeakMap,Qn=new WeakMap,Ra=new WeakMap,gy=new WeakMap,br=new WeakMap,xi=new WeakMap,ss=new WeakSet;let Sn,mc=0,gc=0;const Ze="__aa_tgt",Ss="__aa_del",Ni="__aa_new",_y=e=>{const t=Iy(e);t&&t.forEach(n=>Ay(n))},yy=e=>{e.forEach(t=>{t.target===Sn&&Ey(),fe.has(t.target)&&rr(t.target)})};function vy(e){const t=Ra.get(e);t==null||t.disconnect();let n=fe.get(e),r=0;const s=5;n||(n=Rr(e),fe.set(e,n));const{offsetWidth:i,offsetHeight:a}=Sn,l=[n.top-s,i-(n.left+s+n.width),a-(n.top+s+n.height),n.left-s].map(d=>`${-1*Math.floor(d)}px`).join(" "),h=new IntersectionObserver(()=>{++r>1&&rr(e)},{root:Sn,threshold:1,rootMargin:l});h.observe(e),Ra.set(e,h)}function rr(e){clearTimeout(xi.get(e));const t=oo(e),n=Ps(t)?500:t.duration;xi.set(e,setTimeout(async()=>{const r=Qn.get(e);try{await(r==null?void 0:r.finished),fe.set(e,Rr(e)),vy(e)}catch{}},n))}function Ey(){clearTimeout(xi.get(Sn)),xi.set(Sn,setTimeout(()=>{rd.forEach(e=>ad(e,t=>sd(()=>rr(t))))},100))}function wy(e){setTimeout(()=>{gy.set(e,setInterval(()=>sd(rr.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function sd(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let Sa,gr;const Ty=typeof window<"u"&&"ResizeObserver"in window;Ty&&(Sn=document.documentElement,Sa=new MutationObserver(_y),gr=new ResizeObserver(yy),window.addEventListener("scroll",()=>{gc=window.scrollY,mc=window.scrollX}),gr.observe(Sn));function Iy(e){return e.reduce((r,s)=>[...r,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:e.reduce((r,s)=>{if(r===!1)return!1;if(s.target instanceof Element){if(Yo(s.target),!r.has(s.target)){r.add(s.target);for(let i=0;i<s.target.children.length;i++){const a=s.target.children.item(i);if(a){if(Ss in a)return!1;Yo(s.target,a),r.add(a)}}}if(s.removedNodes.length)for(let i=0;i<s.removedNodes.length;i++){const a=s.removedNodes[i];if(Ss in a)return!1;a instanceof Element&&(r.add(a),Yo(s.target,a),Ar.set(a,[s.previousSibling,s.nextSibling]))}}return r},new Set)}function Yo(e,t){!t&&!(Ze in e)?Object.defineProperty(e,Ze,{value:e}):t&&!(Ze in t)&&Object.defineProperty(t,Ze,{value:e})}function Ay(e){var t;const n=e.isConnected,r=fe.has(e);n&&Ar.has(e)&&Ar.delete(e),Qn.has(e)&&((t=Qn.get(e))===null||t===void 0||t.cancel()),Ni in e?Du(e):r&&n?Ry(e):r&&!n?Sy(e):Du(e)}function Le(e){return Number(e.replace(/[^0-9.\-]/g,""))}function by(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function Rr(e){const t=e.getBoundingClientRect(),{x:n,y:r}=by(e);return{top:t.top+r,left:t.left+n,width:t.width,height:t.height}}function id(e,t,n){let r=t.width,s=t.height,i=n.width,a=n.height;const c=getComputedStyle(e);if(c.getPropertyValue("box-sizing")==="content-box"){const h=Le(c.paddingTop)+Le(c.paddingBottom)+Le(c.borderTopWidth)+Le(c.borderBottomWidth),d=Le(c.paddingLeft)+Le(c.paddingRight)+Le(c.borderRightWidth)+Le(c.borderLeftWidth);r-=d,i-=d,s-=h,a-=h}return[r,i,s,a].map(Math.round)}function oo(e){return Ze in e&&br.has(e[Ze])?br.get(e[Ze]):{duration:250,easing:"ease-in-out"}}function od(e){if(Ze in e)return e[Ze]}function _c(e){const t=od(e);return t?ss.has(t):!1}function ad(e,...t){t.forEach(n=>n(e,br.has(e)));for(let n=0;n<e.children.length;n++){const r=e.children.item(n);r&&t.forEach(s=>s(r,br.has(r)))}}function yc(e){return Array.isArray(e)?e:[e]}function Ps(e){return typeof e=="function"}function Ry(e){const t=fe.get(e),n=Rr(e);if(!_c(e))return fe.set(e,n);let r;if(!t)return;const s=oo(e);if(typeof s!="function"){const i=t.left-n.left,a=t.top-n.top,[c,l,h,d]=id(e,t,n),p={transform:`translate(${i}px, ${a}px)`},g={transform:"translate(0, 0)"};c!==l&&(p.width=`${c}px`,g.width=`${l}px`),h!==d&&(p.height=`${h}px`,g.height=`${d}px`),r=e.animate([p,g],{duration:s.duration,easing:s.easing})}else{const[i]=yc(s(e,"remain",t,n));r=new Animation(i),r.play()}Qn.set(e,r),fe.set(e,n),r.addEventListener("finish",rr.bind(null,e))}function Du(e){Ni in e&&delete e[Ni];const t=Rr(e);fe.set(e,t);const n=oo(e);if(!_c(e))return;let r;if(typeof n!="function")r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[s]=yc(n(e,"add",t));r=new Animation(s),r.play()}Qn.set(e,r),r.addEventListener("finish",rr.bind(null,e))}function xu(e,t){var n;e.remove(),fe.delete(e),Ar.delete(e),Qn.delete(e),(n=Ra.get(e))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(Ss in e&&delete e[Ss],Object.defineProperty(e,Ni,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const r in t)e.style[r]=""},0)}function Sy(e){var t;if(!Ar.has(e)||!fe.has(e))return;const[n,r]=Ar.get(e);Object.defineProperty(e,Ss,{value:!0,configurable:!0});const s=window.scrollX,i=window.scrollY;if(r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=od(e))===null||t===void 0||t.appendChild(e),!_c(e))return xu(e);const[a,c,l,h]=Cy(e),d=oo(e),p=fe.get(e);(s!==mc||i!==gc)&&Py(e,s,i,d);let g,v={position:"absolute",top:`${a}px`,left:`${c}px`,width:`${l}px`,height:`${h}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!Ps(d))Object.assign(e.style,v),g=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:d.duration,easing:"ease-out"});else{const[V,D]=yc(d(e,"remove",p));(D==null?void 0:D.styleReset)!==!1&&(v=(D==null?void 0:D.styleReset)||v,Object.assign(e.style,v)),g=new Animation(V),g.play()}Qn.set(e,g),g.addEventListener("finish",xu.bind(null,e,v))}function Py(e,t,n,r){const s=mc-t,i=gc-n,a=document.documentElement.style.scrollBehavior;if(getComputedStyle(Sn).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+s,window.scrollY+i),!e.parentElement)return;const l=e.parentElement;let h=l.clientHeight,d=l.clientWidth;const p=performance.now();function g(){requestAnimationFrame(()=>{if(!Ps(r)){const v=h-l.clientHeight,V=d-l.clientWidth;p+r.duration>performance.now()?(window.scrollTo({left:window.scrollX-V,top:window.scrollY-v}),h=l.clientHeight,d=l.clientWidth,g()):document.documentElement.style.scrollBehavior=a}})}g()}function Cy(e){const t=fe.get(e),[n,,r]=id(e,t,Rr(e));let s=e.parentElement;for(;s&&(getComputedStyle(s).position==="static"||s instanceof HTMLBodyElement);)s=s.parentElement;s||(s=document.body);const i=getComputedStyle(s),a=fe.get(s)||Rr(s),c=Math.round(t.top-a.top)-Le(i.borderTopWidth),l=Math.round(t.left-a.left)-Le(i.borderLeftWidth);return[c,l,n,r]}function Vy(e,t={}){return Sa&&gr&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!Ps(t)&&!t.disrespectUserMotionPreference||(ss.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),ad(e,rr,wy,s=>gr==null?void 0:gr.observe(s)),Ps(t)?br.set(e,t):br.set(e,{duration:250,easing:"ease-in-out",...t}),Sa.observe(e,{childList:!0}),rd.add(e))),Object.freeze({parent:e,enable:()=>{ss.add(e)},disable:()=>{ss.delete(e)},isEnabled:()=>ss.has(e)})}const Dy={mounted:(e,t)=>{Vy(e,t.value||{})},getSSRProps:()=>({})},xy=Dy,Ny={install(e){e.directive("auto-animate",xy)}};/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fr=typeof document<"u";function Oy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const At=Object.assign;function Xo(e,t){const n={};for(const r in t){const s=t[r];n[r]=Oe(s)?s.map(e):e(s)}return n}const ps=()=>{},Oe=Array.isArray,cd=/#/g,ky=/&/g,My=/\//g,Ly=/=/g,Fy=/\?/g,ld=/\+/g,Uy=/%5B/g,By=/%5D/g,ud=/%5E/g,jy=/%60/g,hd=/%7B/g,$y=/%7C/g,fd=/%7D/g,qy=/%20/g;function vc(e){return encodeURI(""+e).replace($y,"|").replace(Uy,"[").replace(By,"]")}function zy(e){return vc(e).replace(hd,"{").replace(fd,"}").replace(ud,"^")}function Pa(e){return vc(e).replace(ld,"%2B").replace(qy,"+").replace(cd,"%23").replace(ky,"%26").replace(jy,"`").replace(hd,"{").replace(fd,"}").replace(ud,"^")}function Hy(e){return Pa(e).replace(Ly,"%3D")}function Ky(e){return vc(e).replace(cd,"%23").replace(Fy,"%3F")}function Gy(e){return e==null?"":Ky(e).replace(My,"%2F")}function Cs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Wy=/\/$/,Qy=e=>e.replace(Wy,"");function Jo(e,t,n="/"){let r,s={},i="",a="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),a=t.slice(c,t.length)),r=Zy(r??t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Cs(a)}}function Yy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Nu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Xy(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Sr(t.matched[r],n.matched[s])&&dd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Sr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function dd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jy(e[n],t[n]))return!1;return!0}function Jy(e,t){return Oe(e)?Ou(e,t):Oe(t)?Ou(t,e):e===t}function Ou(e,t){return Oe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Zy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vs;(function(e){e.pop="pop",e.push="push"})(Vs||(Vs={}));var ms;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ms||(ms={}));function tv(e){if(!e)if(fr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Qy(e)}const ev=/^[^#]+#/;function nv(e,t){return e.replace(ev,"#")+t}function rv(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ao=()=>({left:window.scrollX,top:window.scrollY});function sv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=rv(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ku(e,t){return(history.state?history.state.position-t:-1)+e}const Ca=new Map;function iv(e,t){Ca.set(e,t)}function ov(e){const t=Ca.get(e);return Ca.delete(e),t}let av=()=>location.protocol+"//"+location.host;function pd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let c=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Nu(l,"")}return Nu(n,e)+r+s}function cv(e,t,n,r){let s=[],i=[],a=null;const c=({state:g})=>{const v=pd(e,location),V=n.value,D=t.value;let k=0;if(g){if(n.value=v,t.value=g,a&&a===V){a=null;return}k=D?g.position-D.position:0}else r(v);s.forEach(G=>{G(n.value,V,{delta:k,type:Vs.pop,direction:k?k>0?ms.forward:ms.back:ms.unknown})})};function l(){a=n.value}function h(g){s.push(g);const v=()=>{const V=s.indexOf(g);V>-1&&s.splice(V,1)};return i.push(v),v}function d(){const{history:g}=window;g.state&&g.replaceState(At({},g.state,{scroll:ao()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Mu(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ao():null}}function lv(e){const{history:t,location:n}=window,r={value:pd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=e.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:av()+e+l;try{t[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](g)}}function a(l,h){const d=At({},t.state,Mu(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=At({},s.value,t.state,{forward:l,scroll:ao()});i(d.current,d,!0);const p=At({},Mu(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function uv(e){e=tv(e);const t=lv(e),n=cv(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=At({location:"",base:e,go:r,createHref:nv.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function hv(e){return typeof e=="string"||e&&typeof e=="object"}function md(e){return typeof e=="string"||typeof e=="symbol"}const gd=Symbol("");var Lu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Lu||(Lu={}));function Pr(e,t){return At(new Error,{type:e,[gd]:!0},t)}function Xe(e,t){return e instanceof Error&&gd in e&&(t==null||!!(e.type&t))}const Fu="[^/]+?",fv={sensitive:!1,strict:!1,start:!0,end:!0},dv=/[.+*?^${}()[\]/\\]/g;function pv(e,t){const n=At({},fv,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(dv,"\\$&"),v+=40;else if(g.type===1){const{value:V,repeatable:D,optional:k,regexp:G}=g;i.push({name:V,repeatable:D,optional:k});const z=G||Fu;if(z!==Fu){v+=10;try{new RegExp(`(${z})`)}catch(it){throw new Error(`Invalid custom RegExp for param "${V}" (${z}): `+it.message)}}let $=D?`((?:${z})(?:/(?:${z}))*)`:`(${z})`;p||($=k&&h.length<2?`(?:/${$})`:"/"+$),k&&($+="?"),s+=$,v+=20,k&&(v+=-8),D&&(v+=-20),z===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(a),p={};if(!d)return null;for(let g=1;g<d.length;g++){const v=d[g]||"",V=i[g-1];p[V.name]=v&&V.repeatable?v.split("/"):v}return p}function l(h){let d="",p=!1;for(const g of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of g)if(v.type===0)d+=v.value;else if(v.type===1){const{value:V,repeatable:D,optional:k}=v,G=V in h?h[V]:"";if(Oe(G)&&!D)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const z=Oe(G)?G.join("/"):G;if(!z)if(k)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${V}"`);d+=z}}return d||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function mv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function _d(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=mv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Uu(r))return 1;if(Uu(s))return-1}return s.length-r.length}function Uu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const gv={type:0,value:""},_v=/[a-zA-Z0-9_]/;function yv(e){if(!e)return[[]];if(e==="/")return[[gv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<e.length;){if(l=e[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:_v.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function vv(e,t,n){const r=pv(yv(e.path),n),s=At(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ev(e,t){const n=[],r=new Map;t=$u({strict:!1,end:!0,sensitive:!1},t);function s(p){return r.get(p)}function i(p,g,v){const V=!v,D=wv(p);D.aliasOf=v&&v.record;const k=$u(t,p),G=[D];if("alias"in p){const it=typeof p.alias=="string"?[p.alias]:p.alias;for(const wt of it)G.push(At({},D,{components:v?v.record.components:D.components,path:wt,aliasOf:v?v.record:D}))}let z,$;for(const it of G){const{path:wt}=it;if(g&&wt[0]!=="/"){const Z=g.record.path,I=Z[Z.length-1]==="/"?"":"/";it.path=g.record.path+(wt&&I+wt)}if(z=vv(it,g,k),v?v.alias.push(z):($=$||z,$!==z&&$.alias.push(z),V&&p.name&&!ju(z)&&a(p.name)),yd(z)&&l(z),D.children){const Z=D.children;for(let I=0;I<Z.length;I++)i(Z[I],z,v&&v.children[I])}v=v||z}return $?()=>{a($)}:ps}function a(p){if(md(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return n}function l(p){const g=Av(p,n);n.splice(g,0,p),p.record.name&&!ju(p)&&r.set(p.record.name,p)}function h(p,g){let v,V={},D,k;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Pr(1,{location:p});k=v.record.name,V=At(Bu(g.params,v.keys.filter($=>!$.optional).concat(v.parent?v.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&Bu(p.params,v.keys.map($=>$.name))),D=v.stringify(V)}else if(p.path!=null)D=p.path,v=n.find($=>$.re.test(D)),v&&(V=v.parse(D),k=v.record.name);else{if(v=g.name?r.get(g.name):n.find($=>$.re.test(g.path)),!v)throw Pr(1,{location:p,currentLocation:g});k=v.record.name,V=At({},g.params,p.params),D=v.stringify(V)}const G=[];let z=v;for(;z;)G.unshift(z.record),z=z.parent;return{name:k,path:D,params:V,matched:G,meta:Iv(G)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Bu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function wv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Tv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Tv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ju(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Iv(e){return e.reduce((t,n)=>At(t,n.meta),{})}function $u(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Av(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;_d(e,t[i])<0?r=i:n=i+1}const s=bv(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function bv(e){let t=e;for(;t=t.parent;)if(yd(t)&&_d(e,t)===0)return t}function yd({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Rv(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ld," "),a=i.indexOf("="),c=Cs(a<0?i:i.slice(0,a)),l=a<0?null:Cs(i.slice(a+1));if(c in t){let h=t[c];Oe(h)||(h=t[c]=[h]),h.push(l)}else t[c]=l}return t}function qu(e){let t="";for(let n in e){const r=e[n];if(n=Hy(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Oe(r)?r.map(i=>i&&Pa(i)):[r&&Pa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Sv(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Oe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Pv=Symbol(""),zu=Symbol(""),Ec=Symbol(""),vd=Symbol(""),Va=Symbol("");function es(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function yn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(Pr(4,{from:n,to:t})):g instanceof Error?l(g):hv(g)?l(Pr(2,{from:t,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),c())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Zo(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const c in a.components){let l=a.components[c];if(!(t!=="beforeRouteEnter"&&!a.instances[c]))if(Cv(l)){const d=(l.__vccOpts||l)[t];d&&i.push(yn(d,n,r,a,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const p=Oy(d)?d.default:d;a.components[c]=p;const v=(p.__vccOpts||p)[t];return v&&yn(v,n,r,a,c,s)()}))}}return i}function Cv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hu(e){const t=je(Ec),n=je(vd),r=De(()=>{const l=en(e.to);return t.resolve(l)}),s=De(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Sr.bind(null,d));if(g>-1)return g;const v=Ku(l[h-2]);return h>1&&Ku(d)===v&&p[p.length-1].path!==v?p.findIndex(Sr.bind(null,l[h-2])):g}),i=De(()=>s.value>-1&&Nv(n.params,r.value.params)),a=De(()=>s.value>-1&&s.value===n.matched.length-1&&dd(n.params,r.value.params));function c(l={}){return xv(l)?t[en(e.replace)?"replace":"push"](en(e.to)).catch(ps):Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}const Vv=Of({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hu,setup(e,{slots:t}){const n=Ji(Hu(e)),{options:r}=je(Ec),s=De(()=>({[Gu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:nd("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Dv=Vv;function xv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Nv(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Oe(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Ku(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gu=(e,t,n)=>e??t??n,Ov=Of({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=je(Va),s=De(()=>e.route||r.value),i=je(zu,0),a=De(()=>{let h=en(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=De(()=>s.value.matched[a.value]);fs(zu,De(()=>a.value+1)),fs(Pv,c),fs(Va,s);const l=_a();return wi(()=>[l.value,c.value,e.name],([h,d,p],[g,v,V])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!Sr(d,v)||!g)&&(d.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=c.value,g=p&&p.components[d];if(!g)return Wu(n.default,{Component:g,route:h});const v=p.props[d],V=v?v===!0?h.params:typeof v=="function"?v(h):v:null,k=nd(g,At({},V,t,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Wu(n.default,{Component:k,route:h})||k}}});function Wu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ed=Ov;function kv(e){const t=Ev(e.routes,e),n=e.parseQuery||Rv,r=e.stringifyQuery||qu,s=e.history,i=es(),a=es(),c=es(),l=Vg(mn);let h=mn;fr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xo.bind(null,N=>""+N),p=Xo.bind(null,Gy),g=Xo.bind(null,Cs);function v(N,Q){let K,Y;return md(N)?(K=t.getRecordMatcher(N),Y=Q):Y=N,t.addRoute(Y,K)}function V(N){const Q=t.getRecordMatcher(N);Q&&t.removeRoute(Q)}function D(){return t.getRoutes().map(N=>N.record)}function k(N){return!!t.getRecordMatcher(N)}function G(N,Q){if(Q=At({},Q||l.value),typeof N=="string"){const w=Jo(n,N,Q.path),P=t.resolve({path:w.path},Q),O=s.createHref(w.fullPath);return At(w,P,{params:g(P.params),hash:Cs(w.hash),redirectedFrom:void 0,href:O})}let K;if(N.path!=null)K=At({},N,{path:Jo(n,N.path,Q.path).path});else{const w=At({},N.params);for(const P in w)w[P]==null&&delete w[P];K=At({},N,{params:p(w)}),Q.params=p(Q.params)}const Y=t.resolve(K,Q),pt=N.hash||"";Y.params=d(g(Y.params));const bt=Yy(r,At({},N,{hash:zy(pt),path:Y.path})),_=s.createHref(bt);return At({fullPath:bt,hash:pt,query:r===qu?Sv(N.query):N.query||{}},Y,{redirectedFrom:void 0,href:_})}function z(N){return typeof N=="string"?Jo(n,N,l.value.path):At({},N)}function $(N,Q){if(h!==N)return Pr(8,{from:Q,to:N})}function it(N){return I(N)}function wt(N){return it(At(z(N),{replace:!0}))}function Z(N){const Q=N.matched[N.matched.length-1];if(Q&&Q.redirect){const{redirect:K}=Q;let Y=typeof K=="function"?K(N):K;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=z(Y):{path:Y},Y.params={}),At({query:N.query,hash:N.hash,params:Y.path!=null?{}:N.params},Y)}}function I(N,Q){const K=h=G(N),Y=l.value,pt=N.state,bt=N.force,_=N.replace===!0,w=Z(K);if(w)return I(At(z(w),{state:typeof w=="object"?At({},pt,w.state):pt,force:bt,replace:_}),Q||K);const P=K;P.redirectedFrom=Q;let O;return!bt&&Xy(r,Y,K)&&(O=Pr(16,{to:P,from:Y}),Ae(Y,Y,!0,!1)),(O?Promise.resolve(O):A(P,Y)).catch(x=>Xe(x)?Xe(x,2)?x:Pe(x):ht(x,P,Y)).then(x=>{if(x){if(Xe(x,2))return I(At({replace:_},z(x.to),{state:typeof x.to=="object"?At({},pt,x.to.state):pt,force:bt}),Q||P)}else x=R(P,Y,!0,_,pt);return b(P,Y,x),x})}function y(N,Q){const K=$(N,Q);return K?Promise.reject(K):Promise.resolve()}function T(N){const Q=ln.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(N):N()}function A(N,Q){let K;const[Y,pt,bt]=Mv(N,Q);K=Zo(Y.reverse(),"beforeRouteLeave",N,Q);for(const w of Y)w.leaveGuards.forEach(P=>{K.push(yn(P,N,Q))});const _=y.bind(null,N,Q);return K.push(_),qt(K).then(()=>{K=[];for(const w of i.list())K.push(yn(w,N,Q));return K.push(_),qt(K)}).then(()=>{K=Zo(pt,"beforeRouteUpdate",N,Q);for(const w of pt)w.updateGuards.forEach(P=>{K.push(yn(P,N,Q))});return K.push(_),qt(K)}).then(()=>{K=[];for(const w of bt)if(w.beforeEnter)if(Oe(w.beforeEnter))for(const P of w.beforeEnter)K.push(yn(P,N,Q));else K.push(yn(w.beforeEnter,N,Q));return K.push(_),qt(K)}).then(()=>(N.matched.forEach(w=>w.enterCallbacks={}),K=Zo(bt,"beforeRouteEnter",N,Q,T),K.push(_),qt(K))).then(()=>{K=[];for(const w of a.list())K.push(yn(w,N,Q));return K.push(_),qt(K)}).catch(w=>Xe(w,8)?w:Promise.reject(w))}function b(N,Q,K){c.list().forEach(Y=>T(()=>Y(N,Q,K)))}function R(N,Q,K,Y,pt){const bt=$(N,Q);if(bt)return bt;const _=Q===mn,w=fr?history.state:{};K&&(Y||_?s.replace(N.fullPath,At({scroll:_&&w&&w.scroll},pt)):s.push(N.fullPath,pt)),l.value=N,Ae(N,Q,K,_),Pe()}let E;function oe(){E||(E=s.listen((N,Q,K)=>{if(!ke.listening)return;const Y=G(N),pt=Z(Y);if(pt){I(At(pt,{replace:!0}),Y).catch(ps);return}h=Y;const bt=l.value;fr&&iv(ku(bt.fullPath,K.delta),ao()),A(Y,bt).catch(_=>Xe(_,12)?_:Xe(_,2)?(I(_.to,Y).then(w=>{Xe(w,20)&&!K.delta&&K.type===Vs.pop&&s.go(-1,!1)}).catch(ps),Promise.reject()):(K.delta&&s.go(-K.delta,!1),ht(_,Y,bt))).then(_=>{_=_||R(Y,bt,!1),_&&(K.delta&&!Xe(_,8)?s.go(-K.delta,!1):K.type===Vs.pop&&Xe(_,20)&&s.go(-1,!1)),b(Y,bt,_)}).catch(ps)}))}let Ie=es(),Lt=es(),dt;function ht(N,Q,K){Pe(N);const Y=Lt.list();return Y.length?Y.forEach(pt=>pt(N,Q,K)):console.error(N),Promise.reject(N)}function ge(){return dt&&l.value!==mn?Promise.resolve():new Promise((N,Q)=>{Ie.add([N,Q])})}function Pe(N){return dt||(dt=!N,oe(),Ie.list().forEach(([Q,K])=>N?K(N):Q()),Ie.reset()),N}function Ae(N,Q,K,Y){const{scrollBehavior:pt}=e;if(!fr||!pt)return Promise.resolve();const bt=!K&&ov(ku(N.fullPath,0))||(Y||!K)&&history.state&&history.state.scroll||null;return Af().then(()=>pt(N,Q,bt)).then(_=>_&&sv(_)).catch(_=>ht(_,N,Q))}const Vt=N=>s.go(N);let Dt;const ln=new Set,ke={currentRoute:l,listening:!0,addRoute:v,removeRoute:V,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:D,resolve:G,options:e,push:it,replace:wt,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:Lt.add,isReady:ge,install(N){const Q=this;N.component("RouterLink",Dv),N.component("RouterView",Ed),N.config.globalProperties.$router=Q,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>en(l)}),fr&&!Dt&&l.value===mn&&(Dt=!0,it(s.location).catch(pt=>{}));const K={};for(const pt in mn)Object.defineProperty(K,pt,{get:()=>l.value[pt],enumerable:!0});N.provide(Ec,Q),N.provide(vd,gf(K)),N.provide(Va,l);const Y=N.unmount;ln.add(N),N.unmount=function(){ln.delete(N),ln.size<1&&(h=mn,E&&E(),E=null,l.value=mn,Dt=!1,dt=!1),Y()}}};function qt(N){return N.reduce((Q,K)=>Q.then(()=>T(K)),Promise.resolve())}return ke}function Mv(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const c=t.matched[a];c&&(e.matched.find(h=>Sr(h,c))?r.push(c):n.push(c));const l=e.matched[a];l&&(t.matched.find(h=>Sr(h,l))||s.push(l))}return[n,r,s]}var Qu={};/**
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
 */const wd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Lv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],c=e[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,c=a?e[s+1]:0,l=s+2<e.length,h=l?e[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,v=h&63;l||(v=64,a||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(wd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Lv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Fv;const g=i<<2|c>>4;if(r.push(g),h!==64){const v=c<<4&240|h>>2;if(r.push(v),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Fv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uv=function(e){const t=wd(e);return Td.encodeByteArray(t,!0)},Oi=function(e){return Uv(e).replace(/\./g,"")},Bv=function(e){try{return Td.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function jv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $v=()=>jv().__FIREBASE_DEFAULTS__,qv=()=>{if(typeof process>"u"||typeof Qu>"u")return;const e=Qu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},zv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Bv(e[1]);return t&&JSON.parse(t)},wc=()=>{try{return $v()||qv()||zv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Hv=e=>{var t,n;return(n=(t=wc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Kv=e=>{const t=Hv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Id=()=>{var e;return(e=wc())===null||e===void 0?void 0:e.config};/**
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
 */class Gv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Wv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Oi(JSON.stringify(n)),Oi(JSON.stringify(a)),""].join(".")}/**
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
 */function Qv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yv(){var e;const t=(e=wc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Jv(){return!Yv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ad(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Zv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tE="FirebaseError";class On extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=tE,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?eE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new On(s,c,r)}}function eE(e,t){return e.replace(nE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const nE=/\{\$([^}]+)}/g;function ki(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Yu(i)&&Yu(a)){if(!ki(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yu(e){return e!==null&&typeof e=="object"}/**
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
 */const rE=1e3,sE=2,iE=4*60*60*1e3,oE=.5;function Xu(e,t=rE,n=sE){const r=t*Math.pow(n,e),s=Math.round(oE*r*(Math.random()-.5)*2);return Math.min(iE,r+s)}/**
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
 */function rn(e){return e&&e._delegate?e._delegate:e}class sn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class aE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Gv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lE(t))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=$n){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$n){return this.instances.has(t)}getOptions(t=$n){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=$n){return this.component?this.component.multipleInstances?t:$n:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cE(e){return e===$n?void 0:e}function lE(e){return e.instantiationMode==="EAGER"}/**
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
 */class uE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new aE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var yt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(yt||(yt={}));const hE={debug:yt.DEBUG,verbose:yt.VERBOSE,info:yt.INFO,warn:yt.WARN,error:yt.ERROR,silent:yt.SILENT},fE=yt.INFO,dE={[yt.DEBUG]:"log",[yt.VERBOSE]:"log",[yt.INFO]:"info",[yt.WARN]:"warn",[yt.ERROR]:"error"},pE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=dE[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tc{constructor(t){this.name=t,this._logLevel=fE,this._logHandler=pE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in yt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,yt.DEBUG,...t),this._logHandler(this,yt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,yt.VERBOSE,...t),this._logHandler(this,yt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,yt.INFO,...t),this._logHandler(this,yt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,yt.WARN,...t),this._logHandler(this,yt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,yt.ERROR,...t),this._logHandler(this,yt.ERROR,...t)}}const mE=(e,t)=>t.some(n=>e instanceof n);let Ju,Zu;function gE(){return Ju||(Ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _E(){return Zu||(Zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rd=new WeakMap,Da=new WeakMap,Sd=new WeakMap,ta=new WeakMap,Ic=new WeakMap;function yE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(In(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Rd.set(n,e)}).catch(()=>{}),Ic.set(t,e),t}function vE(e){if(Da.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Da.set(e,t)}let xa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Da.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Sd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function EE(e){xa=e(xa)}function wE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ea(this),t,...n);return Sd.set(r,t.sort?t.sort():[t]),In(r)}:_E().includes(e)?function(...t){return e.apply(ea(this),t),In(Rd.get(this))}:function(...t){return In(e.apply(ea(this),t))}}function TE(e){return typeof e=="function"?wE(e):(e instanceof IDBTransaction&&vE(e),mE(e,gE())?new Proxy(e,xa):e)}function In(e){if(e instanceof IDBRequest)return yE(e);if(ta.has(e))return ta.get(e);const t=TE(e);return t!==e&&(ta.set(e,t),Ic.set(t,e)),t}const ea=e=>Ic.get(e);function Pd(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),c=In(a);return r&&a.addEventListener("upgradeneeded",l=>{r(In(a.result),l.oldVersion,l.newVersion,In(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const IE=["get","getKey","getAll","getAllKeys","count"],AE=["put","add","delete","clear"],na=new Map;function th(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(na.get(t))return na.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=AE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IE.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return na.set(t,i),i}EE(e=>({...e,get:(t,n,r)=>th(t,n)||e.get(t,n,r),has:(t,n)=>!!th(t,n)||e.has(t,n)}));/**
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
 */class bE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Na="@firebase/app",eh="0.10.5";/**
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
 */const Yn=new Tc("@firebase/app"),SE="@firebase/app-compat",PE="@firebase/analytics-compat",CE="@firebase/analytics",VE="@firebase/app-check-compat",DE="@firebase/app-check",xE="@firebase/auth",NE="@firebase/auth-compat",OE="@firebase/database",kE="@firebase/database-compat",ME="@firebase/functions",LE="@firebase/functions-compat",FE="@firebase/installations",UE="@firebase/installations-compat",BE="@firebase/messaging",jE="@firebase/messaging-compat",$E="@firebase/performance",qE="@firebase/performance-compat",zE="@firebase/remote-config",HE="@firebase/remote-config-compat",KE="@firebase/storage",GE="@firebase/storage-compat",WE="@firebase/firestore",QE="@firebase/vertexai-preview",YE="@firebase/firestore-compat",XE="firebase",JE="10.12.2";/**
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
 */const Oa="[DEFAULT]",ZE={[Na]:"fire-core",[SE]:"fire-core-compat",[CE]:"fire-analytics",[PE]:"fire-analytics-compat",[DE]:"fire-app-check",[VE]:"fire-app-check-compat",[xE]:"fire-auth",[NE]:"fire-auth-compat",[OE]:"fire-rtdb",[kE]:"fire-rtdb-compat",[ME]:"fire-fn",[LE]:"fire-fn-compat",[FE]:"fire-iid",[UE]:"fire-iid-compat",[BE]:"fire-fcm",[jE]:"fire-fcm-compat",[$E]:"fire-perf",[qE]:"fire-perf-compat",[zE]:"fire-rc",[HE]:"fire-rc-compat",[KE]:"fire-gcs",[GE]:"fire-gcs-compat",[WE]:"fire-fst",[YE]:"fire-fst-compat",[QE]:"fire-vertex","fire-js":"fire-js",[XE]:"fire-js-all"};/**
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
 */const Mi=new Map,tw=new Map,ka=new Map;function nh(e,t){try{e.container.addComponent(t)}catch(n){Yn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pn(e){const t=e.name;if(ka.has(t))return Yn.debug(`There were multiple attempts to register component ${t}.`),!1;ka.set(t,e);for(const n of Mi.values())nh(n,e);for(const n of tw.values())nh(n,e);return!0}function js(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ew={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new co("app","Firebase",ew);/**
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
 */class nw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const rw=JE;function Cd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Oa,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw An.create("bad-app-name",{appName:String(s)});if(n||(n=Id()),!n)throw An.create("no-options");const i=Mi.get(s);if(i){if(ki(n,i.options)&&ki(r,i.config))return i;throw An.create("duplicate-app",{appName:s})}const a=new uE(s);for(const l of ka.values())a.addComponent(l);const c=new nw(n,r,a);return Mi.set(s,c),c}function Vd(e=Oa){const t=Mi.get(e);if(!t&&e===Oa&&Id())return Cd();if(!t)throw An.create("no-app",{appName:e});return t}function $e(e,t,n){var r;let s=(r=ZE[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yn.warn(c.join(" "));return}Pn(new sn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const sw="firebase-heartbeat-database",iw=1,Ds="firebase-heartbeat-store";let ra=null;function Dd(){return ra||(ra=Pd(sw,iw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ds)}catch(n){console.warn(n)}}}}).catch(e=>{throw An.create("idb-open",{originalErrorMessage:e.message})})),ra}async function ow(e){try{const n=(await Dd()).transaction(Ds),r=await n.objectStore(Ds).get(xd(e));return await n.done,r}catch(t){if(t instanceof On)Yn.warn(t.message);else{const n=An.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yn.warn(n.message)}}}async function rh(e,t){try{const r=(await Dd()).transaction(Ds,"readwrite");await r.objectStore(Ds).put(t,xd(e)),await r.done}catch(n){if(n instanceof On)Yn.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(r.message)}}}function xd(e){return`${e.name}!${e.options.appId}`}/**
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
 */const aw=1024,cw=30*24*60*60*1e3;class lw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=cw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sh(),{heartbeatsToSend:r,unsentEntries:s}=uw(this._heartbeatsCache.heartbeats),i=Oi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sh(){return new Date().toISOString().substring(0,10)}function uw(e,t=aw){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ih(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ih(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ad()?bd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ow(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ih(e){return Oi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function fw(e){Pn(new sn("platform-logger",t=>new bE(t),"PRIVATE")),Pn(new sn("heartbeat",t=>new lw(t),"PRIVATE")),$e(Na,eh,e),$e(Na,eh,"esm2017"),$e("fire-js","")}fw("");var dw="firebase",pw="10.12.2";/**
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
 */$e(dw,pw,"app");var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,Nd;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,b,R){for(var E=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)E[oe-2]=arguments[oe];return y.prototype[b].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],b=I.g[2];var R=I.g[3],E=y+(R^T&(b^R))+A[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=R+(b^y&(T^b))+A[1]+3905402710&4294967295,R=y+(E<<12&4294967295|E>>>20),E=b+(T^R&(y^T))+A[2]+606105819&4294967295,b=R+(E<<17&4294967295|E>>>15),E=T+(y^b&(R^y))+A[3]+3250441966&4294967295,T=b+(E<<22&4294967295|E>>>10),E=y+(R^T&(b^R))+A[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=R+(b^y&(T^b))+A[5]+1200080426&4294967295,R=y+(E<<12&4294967295|E>>>20),E=b+(T^R&(y^T))+A[6]+2821735955&4294967295,b=R+(E<<17&4294967295|E>>>15),E=T+(y^b&(R^y))+A[7]+4249261313&4294967295,T=b+(E<<22&4294967295|E>>>10),E=y+(R^T&(b^R))+A[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=R+(b^y&(T^b))+A[9]+2336552879&4294967295,R=y+(E<<12&4294967295|E>>>20),E=b+(T^R&(y^T))+A[10]+4294925233&4294967295,b=R+(E<<17&4294967295|E>>>15),E=T+(y^b&(R^y))+A[11]+2304563134&4294967295,T=b+(E<<22&4294967295|E>>>10),E=y+(R^T&(b^R))+A[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=R+(b^y&(T^b))+A[13]+4254626195&4294967295,R=y+(E<<12&4294967295|E>>>20),E=b+(T^R&(y^T))+A[14]+2792965006&4294967295,b=R+(E<<17&4294967295|E>>>15),E=T+(y^b&(R^y))+A[15]+1236535329&4294967295,T=b+(E<<22&4294967295|E>>>10),E=y+(b^R&(T^b))+A[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=R+(T^b&(y^T))+A[6]+3225465664&4294967295,R=y+(E<<9&4294967295|E>>>23),E=b+(y^T&(R^y))+A[11]+643717713&4294967295,b=R+(E<<14&4294967295|E>>>18),E=T+(R^y&(b^R))+A[0]+3921069994&4294967295,T=b+(E<<20&4294967295|E>>>12),E=y+(b^R&(T^b))+A[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=R+(T^b&(y^T))+A[10]+38016083&4294967295,R=y+(E<<9&4294967295|E>>>23),E=b+(y^T&(R^y))+A[15]+3634488961&4294967295,b=R+(E<<14&4294967295|E>>>18),E=T+(R^y&(b^R))+A[4]+3889429448&4294967295,T=b+(E<<20&4294967295|E>>>12),E=y+(b^R&(T^b))+A[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=R+(T^b&(y^T))+A[14]+3275163606&4294967295,R=y+(E<<9&4294967295|E>>>23),E=b+(y^T&(R^y))+A[3]+4107603335&4294967295,b=R+(E<<14&4294967295|E>>>18),E=T+(R^y&(b^R))+A[8]+1163531501&4294967295,T=b+(E<<20&4294967295|E>>>12),E=y+(b^R&(T^b))+A[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=R+(T^b&(y^T))+A[2]+4243563512&4294967295,R=y+(E<<9&4294967295|E>>>23),E=b+(y^T&(R^y))+A[7]+1735328473&4294967295,b=R+(E<<14&4294967295|E>>>18),E=T+(R^y&(b^R))+A[12]+2368359562&4294967295,T=b+(E<<20&4294967295|E>>>12),E=y+(T^b^R)+A[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=R+(y^T^b)+A[8]+2272392833&4294967295,R=y+(E<<11&4294967295|E>>>21),E=b+(R^y^T)+A[11]+1839030562&4294967295,b=R+(E<<16&4294967295|E>>>16),E=T+(b^R^y)+A[14]+4259657740&4294967295,T=b+(E<<23&4294967295|E>>>9),E=y+(T^b^R)+A[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=R+(y^T^b)+A[4]+1272893353&4294967295,R=y+(E<<11&4294967295|E>>>21),E=b+(R^y^T)+A[7]+4139469664&4294967295,b=R+(E<<16&4294967295|E>>>16),E=T+(b^R^y)+A[10]+3200236656&4294967295,T=b+(E<<23&4294967295|E>>>9),E=y+(T^b^R)+A[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=R+(y^T^b)+A[0]+3936430074&4294967295,R=y+(E<<11&4294967295|E>>>21),E=b+(R^y^T)+A[3]+3572445317&4294967295,b=R+(E<<16&4294967295|E>>>16),E=T+(b^R^y)+A[6]+76029189&4294967295,T=b+(E<<23&4294967295|E>>>9),E=y+(T^b^R)+A[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=R+(y^T^b)+A[12]+3873151461&4294967295,R=y+(E<<11&4294967295|E>>>21),E=b+(R^y^T)+A[15]+530742520&4294967295,b=R+(E<<16&4294967295|E>>>16),E=T+(b^R^y)+A[2]+3299628645&4294967295,T=b+(E<<23&4294967295|E>>>9),E=y+(b^(T|~R))+A[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=R+(T^(y|~b))+A[7]+1126891415&4294967295,R=y+(E<<10&4294967295|E>>>22),E=b+(y^(R|~T))+A[14]+2878612391&4294967295,b=R+(E<<15&4294967295|E>>>17),E=T+(R^(b|~y))+A[5]+4237533241&4294967295,T=b+(E<<21&4294967295|E>>>11),E=y+(b^(T|~R))+A[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=R+(T^(y|~b))+A[3]+2399980690&4294967295,R=y+(E<<10&4294967295|E>>>22),E=b+(y^(R|~T))+A[10]+4293915773&4294967295,b=R+(E<<15&4294967295|E>>>17),E=T+(R^(b|~y))+A[1]+2240044497&4294967295,T=b+(E<<21&4294967295|E>>>11),E=y+(b^(T|~R))+A[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=R+(T^(y|~b))+A[15]+4264355552&4294967295,R=y+(E<<10&4294967295|E>>>22),E=b+(y^(R|~T))+A[6]+2734768916&4294967295,b=R+(E<<15&4294967295|E>>>17),E=T+(R^(b|~y))+A[13]+1309151649&4294967295,T=b+(E<<21&4294967295|E>>>11),E=y+(b^(T|~R))+A[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=R+(T^(y|~b))+A[11]+3174756917&4294967295,R=y+(E<<10&4294967295|E>>>22),E=b+(y^(R|~T))+A[2]+718787259&4294967295,b=R+(E<<15&4294967295|E>>>17),E=T+(R^(b|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=T;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<y;)if(A[b++]=I.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<y;)if(A[b++]=I[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function i(I,y){var T=c;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function a(I,y){this.h=y;for(var T=[],A=!0,b=I.length-1;0<=b;b--){var R=I[b]|0;A&&R==y||(T[b]=R,A=!1)}this.g=T}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return k(h(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new a(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return k(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,b=0;b<I.length;b+=8){var R=Math.min(8,I.length-b),E=parseInt(I.substring(b,b+R),y);8>R?(R=h(Math.pow(y,R)),A=A.j(R).add(h(E))):(A=A.j(T),A=A.add(h(E)))}return A}var p=l(0),g=l(1),v=l(16777216);e=a.prototype,e.m=function(){if(D(this))return-k(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(D(this))return"-"+k(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,A="";;){var b=it(T,y).g;T=G(T,b.j(y));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=b,V(T))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function D(I){return I.h==-1}e.l=function(I){return I=G(this,I),D(I)?-1:V(I)?0:1};function k(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new a(T,~I.h).add(g)}e.abs=function(){return D(this)?k(this):this},e.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,b=0;b<=y;b++){var R=A+(this.i(b)&65535)+(I.i(b)&65535),E=(R>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=E>>>16,R&=65535,E&=65535,T[b]=E<<16|R}return new a(T,T[T.length-1]&-2147483648?-1:0)};function G(I,y){return I.add(k(y))}e.j=function(I){if(V(this)||V(I))return p;if(D(this))return D(I)?k(this).j(k(I)):k(k(this).j(I));if(D(I))return k(this.j(k(I)));if(0>this.l(v)&&0>I.l(v))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var R=this.i(A)>>>16,E=this.i(A)&65535,oe=I.i(b)>>>16,Ie=I.i(b)&65535;T[2*A+2*b]+=E*Ie,z(T,2*A+2*b),T[2*A+2*b+1]+=R*Ie,z(T,2*A+2*b+1),T[2*A+2*b+1]+=E*oe,z(T,2*A+2*b+1),T[2*A+2*b+2]+=R*oe,z(T,2*A+2*b+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new a(T,0)};function z(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function $(I,y){this.g=I,this.h=y}function it(I,y){if(V(y))throw Error("division by zero");if(V(I))return new $(p,p);if(D(I))return y=it(k(I),y),new $(k(y.g),k(y.h));if(D(y))return y=it(I,k(y)),new $(k(y.g),y.h);if(30<I.g.length){if(D(I)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(I);)T=wt(T),A=wt(A);var b=Z(T,1),R=Z(A,1);for(A=Z(A,2),T=Z(T,2);!V(A);){var E=R.add(A);0>=E.l(I)&&(b=b.add(T),R=E),A=Z(A,1),T=Z(T,1)}return y=G(I,b.j(y)),new $(b,y)}for(b=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(T),E=R.j(y);D(E)||0<E.l(I);)T-=A,R=h(T),E=R.j(y);V(R)&&(R=g),b=b.add(R),I=G(I,E)}return new $(b,I)}e.A=function(I){return it(this,I).h},e.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new a(T,this.h&I.h)},e.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new a(T,this.h|I.h)},e.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new a(T,this.h^I.h)};function wt(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(T,I.h)}function Z(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,b=[],R=0;R<A;R++)b[R]=0<y?I.i(R+T)>>>y|I.i(R+T+1)<<32-y:I.i(R+T);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Nd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Wn=a}).apply(typeof oh<"u"?oh:typeof self<"u"?self:typeof window<"u"?window:{});var mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Od,kd,is,Md,Ai,Ma,Ld,Fd,Ud;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof mi=="object"&&mi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in f))break t;f=f[S]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,m=!1,S={next:function(){if(!m&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function g(o,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,S,C){for(var q=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)q[Rt-2]=arguments[Rt];return u.prototype[S].apply(m,q)}}function D(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function k(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(l(m)){const S=o.length||0,C=m.length||0;o.length=S+C;for(let q=0;q<C;q++)o[S+q]=m[q]}else o.push(m)}}class G{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function z(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function it(o){return it[" "](o),o}it[" "]=function(){};var wt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Z(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)o[f]=m[f];for(let C=0;C<T.length;C++)f=T[C],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function R(o){c.setTimeout(()=>{throw o},0)}function E(){var o=ge;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class oe{constructor(){this.h=this.g=null}add(u,f){const m=Ie.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ie=new G(()=>new Lt,o=>o.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,ht=!1,ge=new oe,Pe=()=>{const o=c.Promise.resolve(void 0);dt=()=>{o.then(Ae)}};var Ae=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){R(f)}var u=Ie;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ht=!1};function Vt(){this.s=this.s,this.C=this.C}Vt.prototype.s=!1,Vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Dt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o}();function ke(o,u){if(Dt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(wt){t:{try{it(u.nodeName);var S=!0;break t}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:qt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ke.aa.h.call(this)}}V(ke,Dt);var qt={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),Q=0;function K(o,u,f,m,S){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=S,this.key=++Q,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function pt(o){this.src=o,this.g={},this.h=0}pt.prototype.add=function(o,u,f,m,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var q=_(o,u,m,S);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new K(u,this.src,C,!!m,S),u.fa=f,o.push(u)),u};function bt(o,u){var f=u.type;if(f in o.g){var m=o.g[f],S=Array.prototype.indexOf.call(m,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(m,S,1),C&&(Y(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function _(o,u,f,m){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==m)return S}return-1}var w="closure_lm_"+(1e6*Math.random()|0),P={};function O(o,u,f,m,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)O(o,u[C],f,m,S);return null}return f=tt(f),o&&o[N]?o.K(u,f,h(m)?!!m.capture:!!m,S):x(o,u,f,!1,m,S)}function x(o,u,f,m,S,C){if(!u)throw Error("Invalid event type");var q=h(S)?!!S.capture:!!S,Rt=W(o);if(Rt||(o[w]=Rt=new pt(o)),f=Rt.add(u,f,m,q,C),f.proxy)return f;if(m=B(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)ln||(S=q),S===void 0&&(S=!1),o.addEventListener(u.toString(),m,S);else if(o.attachEvent)o.attachEvent(j(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function B(){function o(f){return u.call(o.src,o.listener,f)}const u=M;return o}function H(o,u,f,m,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)H(o,u[C],f,m,S);else m=h(m)?!!m.capture:!!m,f=tt(f),o&&o[N]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=_(C,f,m,S),-1<f&&(Y(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=W(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,f,m,S)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[N])bt(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(j(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=W(u))?(bt(f,o),f.h==0&&(f.src=null,u[w]=null)):Y(o)}}}function j(o){return o in P?P[o]:P[o]="on"+o}function M(o,u){if(o.da)o=!0;else{u=new ke(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&U(o),o=f.call(m,u)}return o}function W(o){return o=o[w],o instanceof pt?o:null}var et="__closure_events_fn_"+(1e9*Math.random()>>>0);function tt(o){return typeof o=="function"?o:(o[et]||(o[et]=function(u){return o.handleEvent(u)}),o[et])}function J(){Vt.call(this),this.i=new pt(this),this.M=this,this.F=null}V(J,Vt),J.prototype[N]=!0,J.prototype.removeEventListener=function(o,u,f,m){H(this,o,u,f,m)};function nt(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Dt(u,o);else if(u instanceof Dt)u.target=u.target||o;else{var S=u;u=new Dt(m,o),A(u,S)}if(S=!0,f)for(var C=f.length-1;0<=C;C--){var q=u.g=f[C];S=Tt(q,m,!0,u)&&S}if(q=u.g=o,S=Tt(q,m,!0,u)&&S,S=Tt(q,m,!1,u)&&S,f)for(C=0;C<f.length;C++)q=u.g=f[C],S=Tt(q,m,!1,u)&&S}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)Y(f[m]);delete o.g[u],o.h--}}this.F=null},J.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},J.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function Tt(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var q=u[C];if(q&&!q.da&&q.capture==f){var Rt=q.listener,Gt=q.ha||q.src;q.fa&&bt(o.i,q),S=Rt.call(Gt,m)!==!1&&S}}return S&&!m.defaultPrevented}function gt(o,u,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Mt(o){o.g=gt(()=>{o.g=null,o.i&&(o.i=!1,Mt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class _e extends Vt{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Mt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function be(o){Vt.call(this),this.h=o,this.g={}}V(be,Vt);var Br=[];function un(o){Z(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}be.prototype.N=function(){be.aa.N.call(this),un(this)},be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var or=c.JSON.stringify,ae=c.JSON.parse,Re=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ar(){}ar.prototype.h=null;function ol(o){return o.h||(o.h=o.i())}function al(){}var jr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function So(){Dt.call(this,"d")}V(So,Dt);function Po(){Dt.call(this,"c")}V(Po,Dt);var Mn={},cl=null;function Qs(){return cl=cl||new J}Mn.La="serverreachability";function ll(o){Dt.call(this,Mn.La,o)}V(ll,Dt);function $r(o){const u=Qs();nt(u,new ll(u))}Mn.STAT_EVENT="statevent";function ul(o,u){Dt.call(this,Mn.STAT_EVENT,o),this.stat=u}V(ul,Dt);function ce(o){const u=Qs();nt(u,new ul(u,o))}Mn.Ma="timingevent";function hl(o,u){Dt.call(this,Mn.Ma,o),this.size=u}V(hl,Dt);function qr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function zr(){this.g=!0}zr.prototype.xa=function(){this.g=!1};function Am(o,u,f,m,S,C){o.info(function(){if(o.g)if(C)for(var q="",Rt=C.split("&"),Gt=0;Gt<Rt.length;Gt++){var vt=Rt[Gt].split("=");if(1<vt.length){var Jt=vt[0];vt=vt[1];var Zt=Jt.split("_");q=2<=Zt.length&&Zt[1]=="type"?q+(Jt+"="+vt+"&"):q+(Jt+"=redacted&")}}else q=null;else q=C;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+f+`
`+q})}function bm(o,u,f,m,S,C,q){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+f+`
`+C+" "+q})}function cr(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Sm(o,f)+(m?" "+m:"")})}function Rm(o,u){o.info(function(){return"TIMEOUT: "+u})}zr.prototype.info=function(){};function Sm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var q=1;q<S.length;q++)S[q]=""}}}}return or(f)}catch{return u}}var Ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Co;function Xs(){}V(Xs,ar),Xs.prototype.g=function(){return new XMLHttpRequest},Xs.prototype.i=function(){return{}},Co=new Xs;function hn(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var pl={},Vo={};function Do(o,u,f){o.L=1,o.v=ei(Qe(u)),o.m=f,o.P=!0,ml(o,null)}function ml(o,u){o.F=Date.now(),Js(o),o.A=Qe(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Cl(f.i,"t",m),o.C=0,f=o.j.J,o.h=new dl,o.g=Gl(o.j,f?u:null,!o.m),0<o.O&&(o.M=new _e(g(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Br[0]=S.toString()),S=Br);for(var C=0;C<S.length;C++){var q=O(f,S[C],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),$r(),Am(o.i,o.u,o.A,o.l,o.R,o.m)}hn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ye(o)==3?u.j():this.Y(o)},hn.prototype.Y=function(o){try{if(o==this.g)t:{const Zt=Ye(this.g);var u=this.g.Ba();const hr=this.g.Z();if(!(3>Zt)&&(Zt!=3||this.g&&(this.h.h||this.g.oa()||Ml(this.g)))){this.J||Zt!=4||u==7||(u==8||0>=hr?$r(3):$r(2)),xo(this);var f=this.g.Z();this.X=f;e:if(gl(this)){var m=Ml(this.g);o="";var S=m.length,C=Ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Hr(this);var q="";break e}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(C&&u==S-1)});m.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,bm(this.i,this.u,this.A,this.l,this.R,Zt,f),this.o){if(this.T&&!this.K){e:{if(this.g){var Rt,Gt=this.g;if((Rt=Gt.g?Gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Rt)){var vt=Rt;break e}}vt=null}if(f=vt)cr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,f);else{this.o=!1,this.s=3,ce(12),Ln(this),Hr(this);break t}}if(this.P){f=!0;let Ce;for(;!this.J&&this.C<q.length;)if(Ce=Pm(this,q),Ce==Vo){Zt==4&&(this.s=4,ce(14),f=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==pl){this.s=4,ce(15),cr(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else cr(this.i,this.l,Ce,null),No(this,Ce);if(gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Zt!=4||q.length!=0||this.h.h||(this.s=1,ce(16),f=!1),this.o=this.o&&f,!f)cr(this.i,this.l,q,"[Invalid Chunked Response]"),Ln(this),Hr(this);else if(0<q.length&&!this.W){this.W=!0;var Jt=this.j;Jt.g==this&&Jt.ba&&!Jt.M&&(Jt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Uo(Jt),Jt.M=!0,ce(11))}}else cr(this.i,this.l,q,null),No(this,q);Zt==4&&Ln(this),this.o&&!this.J&&(Zt==4?ql(this.j,this):(this.o=!1,Js(this)))}else Hm(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),Ln(this),Hr(this)}}}catch{}finally{}};function gl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Pm(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?Vo:(f=Number(u.substring(f,m)),isNaN(f)?pl:(m+=1,m+f>u.length?Vo:(u=u.slice(m,m+f),o.C=m+f,u)))}hn.prototype.cancel=function(){this.J=!0,Ln(this)};function Js(o){o.S=Date.now()+o.I,_l(o,o.I)}function _l(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=qr(g(o.ba,o),u)}function xo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}hn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Rm(this.i,this.A),this.L!=2&&($r(),ce(17)),Ln(this),this.s=2,Hr(this)):_l(this,this.S-o)};function Hr(o){o.j.G==0||o.J||ql(o.j,o)}function Ln(o){xo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,un(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function No(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Oo(f.h,o))){if(!o.K&&Oo(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)oi(f),si(f);else break t;Fo(f),ce(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=qr(g(f.Za,f),6e3));if(1>=El(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Un(f,11)}else if((o.K||f.g==o)&&oi(f),!z(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let vt=S[u];if(f.T=vt[0],vt=vt[1],f.G==2)if(vt[0]=="c"){f.K=vt[1],f.ia=vt[2];const Jt=vt[3];Jt!=null&&(f.la=Jt,f.j.info("VER="+f.la));const Zt=vt[4];Zt!=null&&(f.Aa=Zt,f.j.info("SVER="+f.Aa));const hr=vt[5];hr!=null&&typeof hr=="number"&&0<hr&&(m=1.5*hr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Ce=o.g;if(Ce){const ci=Ce.g?Ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ci){var C=m.h;C.g||ci.indexOf("spdy")==-1&&ci.indexOf("quic")==-1&&ci.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ko(C,C.h),C.h=null))}if(m.D){const Bo=Ce.g?Ce.g.getResponseHeader("X-HTTP-Session-Id"):null;Bo&&(m.ya=Bo,Pt(m.I,m.D,Bo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var q=o;if(m.qa=Kl(m,m.J?m.ia:null,m.W),q.K){wl(m.h,q);var Rt=q,Gt=m.L;Gt&&(Rt.I=Gt),Rt.B&&(xo(Rt),Js(Rt)),m.g=q}else jl(m);0<f.i.length&&ii(f)}else vt[0]!="stop"&&vt[0]!="close"||Un(f,7);else f.G==3&&(vt[0]=="stop"||vt[0]=="close"?vt[0]=="stop"?Un(f,7):Lo(f):vt[0]!="noop"&&f.l&&f.l.ta(vt),f.v=0)}}$r(4)}catch{}}var Cm=class{constructor(o,u){this.g=o,this.map=u}};function yl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function El(o){return o.h?1:o.g?o.g.size:0}function Oo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ko(o,u){o.g?o.g.add(u):o.h=u}function wl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}yl.prototype.cancel=function(){if(this.i=Tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return D(o.i)}function Vm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function Dm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function Il(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Dm(o),m=Vm(o),S=m.length,C=0;C<S;C++)u.call(void 0,m[C],f&&f[C],o)}var Al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),S=null;if(0<=m){var C=o[f].substring(0,m);S=o[f].substring(m+1)}else C=o[f];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Fn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Fn){this.h=o.h,Zs(this,o.j),this.o=o.o,this.g=o.g,ti(this,o.s),this.l=o.l;var u=o.i,f=new Wr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),bl(this,f),this.m=o.m}else o&&(u=String(o).match(Al))?(this.h=!1,Zs(this,u[1]||"",!0),this.o=Kr(u[2]||""),this.g=Kr(u[3]||"",!0),ti(this,u[4]),this.l=Kr(u[5]||"",!0),bl(this,u[6]||"",!0),this.m=Kr(u[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}Fn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Gr(u,Rl,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Gr(u,Rl,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Gr(f,f.charAt(0)=="/"?km:Om,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Gr(f,Lm)),o.join("")};function Qe(o){return new Fn(o)}function Zs(o,u,f){o.j=f?Kr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ti(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function bl(o,u,f){u instanceof Wr?(o.i=u,Fm(o.i,o.h)):(f||(u=Gr(u,Mm)),o.i=new Wr(u,o.h))}function Pt(o,u,f){o.i.set(u,f)}function ei(o){return Pt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Kr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Nm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Nm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Rl=/[#\/\?@]/g,Om=/[#\?:]/g,km=/[#\?]/g,Mm=/[#\?@]/g,Lm=/#/g;function Wr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&xm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=Wr.prototype,e.add=function(o,u){fn(this),this.i=null,o=lr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Sl(o,u){fn(o),u=lr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Pl(o,u){return fn(o),u=lr(o,u),o.g.has(u)}e.forEach=function(o,u){fn(this),this.g.forEach(function(f,m){f.forEach(function(S){o.call(u,S,m,this)},this)},this)},e.na=function(){fn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const S=o[m];for(let C=0;C<S.length;C++)f.push(u[m])}return f},e.V=function(o){fn(this);let u=[];if(typeof o=="string")Pl(this,o)&&(u=u.concat(this.g.get(lr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},e.set=function(o,u){return fn(this),this.i=null,o=lr(this,o),Pl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Cl(o,u,f){Sl(o,u),0<f.length&&(o.i=null,o.g.set(lr(o,u),D(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const C=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var S=C;q[m]!==""&&(S+="="+encodeURIComponent(String(q[m]))),o.push(S)}}return this.i=o.join("&")};function lr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Fm(o,u){u&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(Sl(this,m),Cl(this,S,f))},o)),o.j=u}function Um(o,u){const f=new zr;if(c.Image){const m=new Image;m.onload=v(dn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=v(dn,f,"TestLoadImage: error",!1,u,m),m.onabort=v(dn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(dn,f,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Bm(o,u){const f=new zr,m=new AbortController,S=setTimeout(()=>{m.abort(),dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(S),C.ok?dn(f,"TestPingServer: ok",!0,u):dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),dn(f,"TestPingServer: error",!1,u)})}function dn(o,u,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function jm(){this.g=new Re}function $m(o,u,f){const m=f||"";try{Il(o,function(S,C){let q=S;h(S)&&(q=or(S)),u.push(m+C+"="+encodeURIComponent(q))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Qr(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Qr,ar),Qr.prototype.g=function(){return new ni(this.l,this.j)},Qr.prototype.i=function(o){return function(){return o}}({});function ni(o,u){J.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ni,J),e=ni.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Xr(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Yr(this):Xr(this),this.readyState==3&&Vl(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Yr(this))},e.Qa=function(o){this.g&&(this.response=o,Yr(this))},e.ga=function(){this.g&&Yr(this)};function Yr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Xr(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Xr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Dl(o){let u="";return Z(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Mo(o,u,f){t:{for(m in f){var m=!1;break t}m=!0}m||(f=Dl(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pt(o,u,f))}function Ot(o){J.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ot,J);var qm=/^https?$/i,zm=["POST","PUT"];e=Ot.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Co.g(),this.v=this.o?ol(this.o):ol(Co),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){xl(this,C);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())f.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(zm,u,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of f)this.g.setRequestHeader(C,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{kl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){xl(this,C)}};function xl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Nl(o),ri(o)}function Nl(o){o.A||(o.A=!0,nt(o,"complete"),nt(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,nt(this,"complete"),nt(this,"abort"),ri(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),Ot.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ol(this):this.bb())},e.bb=function(){Ol(this)};function Ol(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ye(o)!=4||o.Z()!=2)){if(o.u&&Ye(o)==4)gt(o.Ea,0,o);else if(nt(o,"readystatechange"),Ye(o)==4){o.h=!1;try{const q=o.Z();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var m;if(m=q===0){var S=String(o.D).match(Al)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!qm.test(S?S.toLowerCase():"")}f=m}if(f)nt(o,"complete"),nt(o,"success");else{o.m=6;try{var C=2<Ye(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Nl(o)}}finally{ri(o)}}}}function ri(o,u){if(o.g){kl(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||nt(o,"ready");try{f.onreadystatechange=m}catch{}}}function kl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Ye(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Ye(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ae(u)}};function Ml(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Hm(o){const u={};o=(o.g&&2<=Ye(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(z(o[m]))continue;var f=b(o[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[S]||[];u[S]=C,C.push(f)}I(u,function(m){return m.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Ll(o){this.Aa=0,this.i=[],this.j=new zr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,o),this.cb=Jr("retryDelaySeedMs",1e4,o),this.Wa=Jr("forwardChannelMaxRetries",2,o),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new yl(o&&o.concurrentRequestLimit),this.Da=new jm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Ll.prototype,e.la=8,e.G=1,e.connect=function(o,u,f,m){ce(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Kl(this,null,this.W),ii(this)};function Lo(o){if(Fl(o),o.G==3){var u=o.U++,f=Qe(o.I);if(Pt(f,"SID",o.K),Pt(f,"RID",u),Pt(f,"TYPE","terminate"),Zr(o,f),u=new hn(o,o.j,u),u.L=2,u.v=ei(Qe(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Gl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Js(u)}Hl(o)}function si(o){o.g&&(Uo(o),o.g.cancel(),o.g=null)}function Fl(o){si(o),o.u&&(c.clearTimeout(o.u),o.u=null),oi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ii(o){if(!vl(o.h)&&!o.s){o.s=!0;var u=o.Ga;dt||Pe(),ht||(dt(),ht=!0),ge.add(u,o),o.B=0}}function Km(o,u){return El(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=qr(g(o.Ga,o,u),zl(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new hn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),A(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=Bl(this,S,u),f=Qe(this.I),Pt(f,"RID",o),Pt(f,"CVER",22),this.D&&Pt(f,"X-HTTP-Session-Id",this.D),Zr(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Dl(C)))+"&"+u:this.m&&Mo(f,this.m,C)),ko(this.h,S),this.Ua&&Pt(f,"TYPE","init"),this.P?(Pt(f,"$req",u),Pt(f,"SID","null"),S.T=!0,Do(S,f,null)):Do(S,f,u),this.G=2}}else this.G==3&&(o?Ul(this,o):this.i.length==0||vl(this.h)||Ul(this))};function Ul(o,u){var f;u?f=u.l:f=o.U++;const m=Qe(o.I);Pt(m,"SID",o.K),Pt(m,"RID",f),Pt(m,"AID",o.T),Zr(o,m),o.m&&o.o&&Mo(m,o.m,o.o),f=new hn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Bl(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ko(o.h,f),Do(f,m,u)}function Zr(o,u){o.H&&Z(o.H,function(f,m){Pt(u,m,f)}),o.l&&Il({},function(f,m){Pt(u,m,f)})}function Bl(o,u,f){f=Math.min(o.i.length,f);var m=o.l?g(o.l.Na,o.l,o):null;t:{var S=o.i;let C=-1;for(;;){const q=["count="+f];C==-1?0<f?(C=S[0].g,q.push("ofs="+C)):C=0:q.push("ofs="+C);let Rt=!0;for(let Gt=0;Gt<f;Gt++){let vt=S[Gt].g;const Jt=S[Gt].map;if(vt-=C,0>vt)C=Math.max(0,S[Gt].g-100),Rt=!1;else try{$m(Jt,q,"req"+vt+"_")}catch{m&&m(Jt)}}if(Rt){m=q.join("&");break t}}}return o=o.i.splice(0,f),u.D=o,m}function jl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;dt||Pe(),ht||(dt(),ht=!0),ge.add(u,o),o.v=0}}function Fo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=qr(g(o.Fa,o),zl(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,$l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=qr(g(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ce(10),si(this),$l(this))};function Uo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function $l(o){o.g=new hn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Qe(o.qa);Pt(u,"RID","rpc"),Pt(u,"SID",o.K),Pt(u,"AID",o.T),Pt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pt(u,"TO",o.ja),Pt(u,"TYPE","xmlhttp"),Zr(o,u),o.m&&o.o&&Mo(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ei(Qe(u)),f.m=null,f.P=!0,ml(f,o)}e.Za=function(){this.C!=null&&(this.C=null,si(this),Fo(this),ce(19))};function oi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ql(o,u){var f=null;if(o.g==u){oi(o),Uo(o),o.g=null;var m=2}else if(Oo(o.h,u))f=u.D,wl(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;m=Qs(),nt(m,new hl(m,f)),ii(o)}else jl(o);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&Km(o,u)||m==2&&Fo(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),S){case 1:Un(o,5);break;case 4:Un(o,10);break;case 3:Un(o,6);break;default:Un(o,2)}}}function zl(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Un(o,u){if(o.j.info("Error code "+u),u==2){var f=g(o.fb,o),m=o.Xa;const S=!m;m=new Fn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zs(m,"https"),ei(m),S?Um(m.toString(),f):Bm(m.toString(),f)}else ce(2);o.G=0,o.l&&o.l.sa(u),Hl(o),Fl(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function Hl(o){if(o.G=0,o.ka=[],o.l){const u=Tl(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Kl(o,u,f){var m=f instanceof Fn?Qe(f):new Fn(f);if(m.g!="")u&&(m.g=u+"."+m.g),ti(m,m.s);else{var S=c.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new Fn(null);m&&Zs(C,m),u&&(C.g=u),S&&ti(C,S),f&&(C.l=f),m=C}return f=o.D,u=o.ya,f&&u&&Pt(m,f,u),Pt(m,"VER",o.la),Zr(o,m),m}function Gl(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ot(new Qr({eb:f})):new Ot(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wl(){}e=Wl.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function ai(){}ai.prototype.g=function(o,u){return new ye(o,u)};function ye(o,u){J.call(this),this.g=new Ll(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!z(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!z(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new ur(this)}V(ye,J),ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ye.prototype.close=function(){Lo(this.g)},ye.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=or(o),o=f);u.i.push(new Cm(u.Ya++,o)),u.G==3&&ii(u)},ye.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,ye.aa.N.call(this)};function Ql(o){So.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Ql,So);function Yl(){Po.call(this),this.status=1}V(Yl,Po);function ur(o){this.g=o}V(ur,Wl),ur.prototype.ua=function(){nt(this.g,"a")},ur.prototype.ta=function(o){nt(this.g,new Ql(o))},ur.prototype.sa=function(o){nt(this.g,new Yl)},ur.prototype.ra=function(){nt(this.g,"b")},ai.prototype.createWebChannel=ai.prototype.g,ye.prototype.send=ye.prototype.o,ye.prototype.open=ye.prototype.m,ye.prototype.close=ye.prototype.close,Ud=function(){return new ai},Fd=function(){return Qs()},Ld=Mn,Ma={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ys.NO_ERROR=0,Ys.TIMEOUT=8,Ys.HTTP_ERROR=6,Ai=Ys,fl.COMPLETE="complete",Md=fl,al.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",J.prototype.listen=J.prototype.K,is=al,kd=Qr,Ot.prototype.listenOnce=Ot.prototype.L,Ot.prototype.getLastError=Ot.prototype.Ka,Ot.prototype.getLastErrorCode=Ot.prototype.Ba,Ot.prototype.getStatus=Ot.prototype.Z,Ot.prototype.getResponseJson=Ot.prototype.Oa,Ot.prototype.getResponseText=Ot.prototype.oa,Ot.prototype.send=Ot.prototype.ea,Ot.prototype.setWithCredentials=Ot.prototype.Ha,Od=Ot}).apply(typeof mi<"u"?mi:typeof self<"u"?self:typeof window<"u"?window:{});const ah="@firebase/firestore";/**
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
 */class ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
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
 */let Lr="10.12.1";/**
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
 */const Xn=new Tc("@firebase/firestore");function ns(){return Xn.logLevel}function X(e,...t){if(Xn.logLevel<=yt.DEBUG){const n=t.map(Ac);Xn.debug(`Firestore (${Lr}): ${e}`,...n)}}function on(e,...t){if(Xn.logLevel<=yt.ERROR){const n=t.map(Ac);Xn.error(`Firestore (${Lr}): ${e}`,...n)}}function Cr(e,...t){if(Xn.logLevel<=yt.WARN){const n=t.map(Ac);Xn.warn(`Firestore (${Lr}): ${e}`,...n)}}function Ac(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function ot(e="Unexpected state"){const t=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: `+e;throw on(t),new Error(t)}function St(e,t){e||ot()}function lt(e,t){return e}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends On{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Bd{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ee.UNAUTHENTICATED))}shutdown(){}}class gw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _w{constructor(t){this.t=t,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(St(typeof r.accessToken=="string"),new Bd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return St(t===null||typeof t=="string"),new ee(t)}}class yw{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vw{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new yw(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ew{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ww{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(St(typeof n.token=="string"),this.R=n.token,new Ew(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Tw(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Tw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function Et(e,t){return e<t?-1:e>t?1:0}function Vr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class $t{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new rt(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new rt(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new rt(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rt(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $t.fromMillis(Date.now())}static fromDate(t){return $t.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new $t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Et(this.nanoseconds,t.nanoseconds):Et(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class at{constructor(t){this.timestamp=t}static fromTimestamp(t){return new at(t)}static min(){return new at(new $t(0,0))}static max(){return new at(new $t(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xs{constructor(t,n,r){n===void 0?n=0:n>t.length&&ot(),r===void 0?r=t.length-n:r>t.length-n&&ot(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return xs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof xs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class kt extends xs{construct(t,n,r){return new kt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new rt(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new kt(n)}static emptyPath(){return new kt([])}}const Iw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends xs{construct(t,n,r){return new Qt(t,n,r)}static isValidIdentifier(t){return Iw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new rt(F.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new rt(F.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new rt(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new rt(F.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(kt.fromString(t))}static fromName(t){return new st(kt.fromString(t).popFirst(5))}static empty(){return new st(kt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&kt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return kt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new kt(t.slice()))}}function Aw(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=at.fromTimestamp(r===1e9?new $t(n+1,0):new $t(n,r));return new Cn(s,st.empty(),t)}function bw(e){return new Cn(e.readTime,e.key,-1)}class Cn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Cn(at.min(),st.empty(),-1)}static max(){return new Cn(at.max(),st.empty(),-1)}}function Rw(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=st.comparator(e.documentKey,t.documentKey),n!==0?n:Et(e.largestBatchId,t.largestBatchId))}/**
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
 */const Sw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function $s(e){if(e.code!==F.FAILED_PRECONDITION||e.message!==Sw)throw e;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ot(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):L.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):L.reject(n)}static resolve(t){return new L((n,r)=>{n(t)})}static reject(t){return new L((n,r)=>{r(t)})}static waitFor(t){return new L((n,r)=>{let s=0,i=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(t){let n=L.resolve(!1);for(const r of t)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new L((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(t[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new L((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Cw(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qs(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class bc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}bc.oe=-1;function lo(e){return e==null}function Li(e){return e===0&&1/e==-1/0}function Vw(e){return typeof e=="number"&&Number.isInteger(e)&&!Li(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function ch(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function sr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function $d(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Nt{constructor(t,n){this.comparator=t,this.root=n||Wt.EMPTY}insert(t,n){return new Nt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(t){return new Nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gi(this.root,t,this.comparator,!1)}getReverseIterator(){return new gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gi(this.root,t,this.comparator,!0)}}class gi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Wt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Wt.RED,this.left=s??Wt.EMPTY,this.right=i??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Wt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Wt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ot();const t=this.left.check();if(t!==this.right.check())throw ot();return t+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw ot()}get value(){throw ot()}get color(){throw ot()}get left(){throw ot()}get right(){throw ot()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Wt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xt{constructor(t){this.comparator=t,this.data=new Nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new lh(this.data.getIterator())}getIteratorFrom(t){return new lh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Xt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Xt(this.comparator);return n.data=t,n}}class lh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ee{constructor(t){this.fields=t,t.sort(Qt.comparator)}static empty(){return new Ee([])}unionWith(t){let n=new Xt(Qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ee(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ie{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qd("Invalid base64 string: "+i):i}}(t);return new ie(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new ie(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Et(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const Dw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(e){if(St(!!e),typeof e=="string"){let t=0;const n=Dw.exec(e);if(St(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ut(e.seconds),nanos:Ut(e.nanos)}}function Ut(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Jn(e){return typeof e=="string"?ie.fromBase64String(e):ie.fromUint8Array(e)}/**
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
 */function Rc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sc(e){const t=e.mapValue.fields.__previous_value__;return Rc(t)?Sc(t):t}function Ns(e){const t=Vn(e.mapValue.fields.__local_write_time__.timestampValue);return new $t(t.seconds,t.nanos)}/**
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
 */class xw{constructor(t,n,r,s,i,a,c,l,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Os{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Os("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Os&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const _i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Rc(e)?4:Nw(e)?9007199254740991:10:ot()}function Ge(e,t){if(e===t)return!0;const n=Zn(e);if(n!==Zn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ns(e).isEqual(Ns(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Vn(s.timestampValue),c=Vn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Jn(s.bytesValue).isEqual(Jn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Ut(s.geoPointValue.latitude)===Ut(i.geoPointValue.latitude)&&Ut(s.geoPointValue.longitude)===Ut(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ut(s.integerValue)===Ut(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ut(s.doubleValue),c=Ut(i.doubleValue);return a===c?Li(a)===Li(c):isNaN(a)&&isNaN(c)}return!1}(e,t);case 9:return Vr(e.arrayValue.values||[],t.arrayValue.values||[],Ge);case 10:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ch(a)!==ch(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Ge(a[l],c[l])))return!1;return!0}(e,t);default:return ot()}}function ks(e,t){return(e.values||[]).find(n=>Ge(n,t))!==void 0}function Dr(e,t){if(e===t)return 0;const n=Zn(e),r=Zn(t);if(n!==r)return Et(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Et(e.booleanValue,t.booleanValue);case 2:return function(i,a){const c=Ut(i.integerValue||i.doubleValue),l=Ut(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(e,t);case 3:return uh(e.timestampValue,t.timestampValue);case 4:return uh(Ns(e),Ns(t));case 5:return Et(e.stringValue,t.stringValue);case 6:return function(i,a){const c=Jn(i),l=Jn(a);return c.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Et(c[h],l[h]);if(d!==0)return d}return Et(c.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const c=Et(Ut(i.latitude),Ut(a.latitude));return c!==0?c:Et(Ut(i.longitude),Ut(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,a){const c=i.values||[],l=a.values||[];for(let h=0;h<c.length&&h<l.length;++h){const d=Dr(c[h],l[h]);if(d)return d}return Et(c.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,a){if(i===_i.mapValue&&a===_i.mapValue)return 0;if(i===_i.mapValue)return 1;if(a===_i.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Et(l[p],d[p]);if(g!==0)return g;const v=Dr(c[l[p]],h[d[p]]);if(v!==0)return v}return Et(l.length,d.length)}(e.mapValue,t.mapValue);default:throw ot()}}function uh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Et(e,t);const n=Vn(e),r=Vn(t),s=Et(n.seconds,r.seconds);return s!==0?s:Et(n.nanos,r.nanos)}function xr(e){return La(e)}function La(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Vn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Jn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return st.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=La(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${La(n.fields[a])}`;return s+"}"}(e.mapValue):ot()}function Fa(e){return!!e&&"integerValue"in e}function Pc(e){return!!e&&"arrayValue"in e}function hh(e){return!!e&&"nullValue"in e}function fh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function bi(e){return!!e&&"mapValue"in e}function gs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return sr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=gs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Nw(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class he{constructor(t){this.value=t}static empty(){return new he({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!bi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=gs(n)}setAll(t){let n=Qt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=gs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());bi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ge(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){sr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new he(gs(this.value))}}function zd(e){const t=[];return sr(e.fields,(n,r)=>{const s=new Qt([n]);if(bi(r)){const i=zd(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ee(t)}/**
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
 */class ne{constructor(t,n,r,s,i,a,c){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new ne(t,0,at.min(),at.min(),at.min(),he.empty(),0)}static newFoundDocument(t,n,r,s){return new ne(t,1,n,at.min(),r,s,0)}static newNoDocument(t,n){return new ne(t,2,n,at.min(),at.min(),he.empty(),0)}static newUnknownDocument(t,n){return new ne(t,3,n,at.min(),at.min(),he.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(at.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=he.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=he.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=at.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ne&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fi{constructor(t,n){this.position=t,this.inclusive=n}}function dh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=st.comparator(st.fromName(a.referenceValue),n.key):r=Dr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ph(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ge(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ui{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ow(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Hd{}class Bt extends Hd{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Mw(t,n,r):n==="array-contains"?new Uw(t,r):n==="in"?new Bw(t,r):n==="not-in"?new jw(t,r):n==="array-contains-any"?new $w(t,r):new Bt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Lw(t,r):new Fw(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Dr(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.matchesComparison(Dr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ot()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends Hd{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new We(t,n)}matches(t){return Kd(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Kd(e){return e.op==="and"}function Gd(e){return kw(e)&&Kd(e)}function kw(e){for(const t of e.filters)if(t instanceof We)return!1;return!0}function Ua(e){if(e instanceof Bt)return e.field.canonicalString()+e.op.toString()+xr(e.value);if(Gd(e))return e.filters.map(t=>Ua(t)).join(",");{const t=e.filters.map(n=>Ua(n)).join(",");return`${e.op}(${t})`}}function Wd(e,t){return e instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.field.isEqual(s.field)&&Ge(r.value,s.value)}(e,t):e instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Wd(a,s.filters[c]),!0):!1}(e,t):void ot()}function Qd(e){return e instanceof Bt?function(n){return`${n.field.canonicalString()} ${n.op} ${xr(n.value)}`}(e):e instanceof We?function(n){return n.op.toString()+" {"+n.getFilters().map(Qd).join(" ,")+"}"}(e):"Filter"}class Mw extends Bt{constructor(t,n,r){super(t,n,r),this.key=st.fromName(r.referenceValue)}matches(t){const n=st.comparator(t.key,this.key);return this.matchesComparison(n)}}class Lw extends Bt{constructor(t,n){super(t,"in",n),this.keys=Yd("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Fw extends Bt{constructor(t,n){super(t,"not-in",n),this.keys=Yd("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Yd(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>st.fromName(r.referenceValue))}class Uw extends Bt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Pc(n)&&ks(n.arrayValue,this.value)}}class Bw extends Bt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ks(this.value.arrayValue,n)}}class jw extends Bt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ks(this.value.arrayValue,n)}}class $w extends Bt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Pc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ks(this.value.arrayValue,r))}}/**
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
 */class qw{constructor(t,n=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function mh(e,t=null,n=[],r=[],s=null,i=null,a=null){return new qw(e,t,n,r,s,i,a)}function Cc(e){const t=lt(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ua(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>xr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>xr(r)).join(",")),t.ue=n}return t.ue}function Vc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ow(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Wd(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ph(e.startAt,t.startAt)&&ph(e.endAt,t.endAt)}function Ba(e){return st.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class uo{constructor(t,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zw(e,t,n,r,s,i,a,c){return new uo(e,t,n,r,s,i,a,c)}function Dc(e){return new uo(e)}function gh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Hw(e){return e.collectionGroup!==null}function _s(e){const t=lt(e);if(t.ce===null){t.ce=[];const n=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Xt(Qt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.ce.push(new Ui(i,r))}),n.has(Qt.keyField().canonicalString())||t.ce.push(new Ui(Qt.keyField(),r))}return t.ce}function qe(e){const t=lt(e);return t.le||(t.le=Kw(t,_s(e))),t.le}function Kw(e,t){if(e.limitType==="F")return mh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ui(s.field,i)});const n=e.endAt?new Fi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fi(e.startAt.position,e.startAt.inclusive):null;return mh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ja(e,t,n){return new uo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ho(e,t){return Vc(qe(e),qe(t))&&e.limitType===t.limitType}function Xd(e){return`${Cc(qe(e))}|lt:${e.limitType}`}function dr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Qd(s)).join(", ")}]`),lo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>xr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>xr(s)).join(",")),`Target(${r})`}(qe(e))}; limitType=${e.limitType})`}function fo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):st.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of _s(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=dh(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,_s(r),s)||r.endAt&&!function(a,c,l){const h=dh(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,_s(r),s))}(e,t)}function Gw(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Jd(e){return(t,n)=>{let r=!1;for(const s of _s(e)){const i=Ww(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ww(e,t,n){const r=e.field.isKeyField()?st.comparator(t.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Dr(l,h):ot()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ot()}}/**
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
 */class Fr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){sr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return $d(this.inner)}size(){return this.innerSize}}/**
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
 */const Qw=new Nt(st.comparator);function an(){return Qw}const Zd=new Nt(st.comparator);function os(...e){let t=Zd;for(const n of e)t=t.insert(n.key,n);return t}function tp(e){let t=Zd;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function zn(){return ys()}function ep(){return ys()}function ys(){return new Fr(e=>e.toString(),(e,t)=>e.isEqual(t))}const Yw=new Nt(st.comparator),Xw=new Xt(st.comparator);function ft(...e){let t=Xw;for(const n of e)t=t.add(n);return t}const Jw=new Xt(Et);function Zw(){return Jw}/**
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
 */function np(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(t)?"-0":t}}function rp(e){return{integerValue:""+e}}function sp(e,t){return Vw(t)?rp(t):np(e,t)}/**
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
 */class po{constructor(){this._=void 0}}function tT(e,t,n){return e instanceof Bi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Rc(i)&&(i=Sc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,t):e instanceof Ms?op(e,t):e instanceof Ls?ap(e,t):function(s,i){const a=ip(s,i),c=_h(a)+_h(s.Pe);return Fa(a)&&Fa(s.Pe)?rp(c):np(s.serializer,c)}(e,t)}function eT(e,t,n){return e instanceof Ms?op(e,t):e instanceof Ls?ap(e,t):n}function ip(e,t){return e instanceof Fs?function(r){return Fa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Bi extends po{}class Ms extends po{constructor(t){super(),this.elements=t}}function op(e,t){const n=cp(t);for(const r of e.elements)n.some(s=>Ge(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ls extends po{constructor(t){super(),this.elements=t}}function ap(e,t){let n=cp(t);for(const r of e.elements)n=n.filter(s=>!Ge(s,r));return{arrayValue:{values:n}}}class Fs extends po{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function _h(e){return Ut(e.integerValue||e.doubleValue)}function cp(e){return Pc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class nT{constructor(t,n){this.field=t,this.transform=n}}function rT(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ms&&s instanceof Ms||r instanceof Ls&&s instanceof Ls?Vr(r.elements,s.elements,Ge):r instanceof Fs&&s instanceof Fs?Ge(r.Pe,s.Pe):r instanceof Bi&&s instanceof Bi}(e.transform,t.transform)}class sT{constructor(t,n){this.version=t,this.transformResults=n}}class ze{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ze}static exists(t){return new ze(void 0,t)}static updateTime(t){return new ze(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ri(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class mo{}function lp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new hp(e.key,ze.none()):new zs(e.key,e.data,ze.none());{const n=e.data,r=he.empty();let s=new Xt(Qt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new kn(e.key,r,new Ee(s.toArray()),ze.none())}}function iT(e,t,n){e instanceof zs?function(s,i,a){const c=s.value.clone(),l=vh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):e instanceof kn?function(s,i,a){if(!Ri(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=vh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(up(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function vs(e,t,n,r){return e instanceof zs?function(i,a,c,l){if(!Ri(i.precondition,a))return c;const h=i.value.clone(),d=Eh(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof kn?function(i,a,c,l){if(!Ri(i.precondition,a))return c;const h=Eh(i.fieldTransforms,l,a),d=a.data;return d.setAll(up(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,c){return Ri(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(e,t,n)}function oT(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=ip(r.transform,s||null);i!=null&&(n===null&&(n=he.empty()),n.set(r.field,i))}return n||null}function yh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vr(r,s,(i,a)=>rT(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class zs extends mo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kn extends mo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function up(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function vh(e,t,n){const r=new Map;St(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,eT(a,c,n[s]))}return r}function Eh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,tT(i,a,t))}return r}class hp extends mo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aT extends mo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cT{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&iT(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=vs(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=vs(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=ep();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=lp(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(at.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ft())}isEqual(t){return this.batchId===t.batchId&&Vr(this.mutations,t.mutations,(n,r)=>yh(n,r))&&Vr(this.baseMutations,t.baseMutations,(n,r)=>yh(n,r))}}class xc{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){St(t.mutations.length===r.length);let s=function(){return Yw}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new xc(t,n,r,s)}}/**
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
 */class lT{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class uT{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ft,mt;function hT(e){switch(e){default:return ot();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function fp(e){if(e===void 0)return on("GRPC error has no .code"),F.UNKNOWN;switch(e){case Ft.OK:return F.OK;case Ft.CANCELLED:return F.CANCELLED;case Ft.UNKNOWN:return F.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return F.INTERNAL;case Ft.UNAVAILABLE:return F.UNAVAILABLE;case Ft.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ft.NOT_FOUND:return F.NOT_FOUND;case Ft.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ft.ABORTED:return F.ABORTED;case Ft.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ft.DATA_LOSS:return F.DATA_LOSS;default:return ot()}}(mt=Ft||(Ft={}))[mt.OK=0]="OK",mt[mt.CANCELLED=1]="CANCELLED",mt[mt.UNKNOWN=2]="UNKNOWN",mt[mt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mt[mt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mt[mt.NOT_FOUND=5]="NOT_FOUND",mt[mt.ALREADY_EXISTS=6]="ALREADY_EXISTS",mt[mt.PERMISSION_DENIED=7]="PERMISSION_DENIED",mt[mt.UNAUTHENTICATED=16]="UNAUTHENTICATED",mt[mt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mt[mt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mt[mt.ABORTED=10]="ABORTED",mt[mt.OUT_OF_RANGE=11]="OUT_OF_RANGE",mt[mt.UNIMPLEMENTED=12]="UNIMPLEMENTED",mt[mt.INTERNAL=13]="INTERNAL",mt[mt.UNAVAILABLE=14]="UNAVAILABLE",mt[mt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fT(){return new TextEncoder}/**
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
 */const dT=new Wn([4294967295,4294967295],0);function wh(e){const t=fT().encode(e),n=new Nd;return n.update(t),new Uint8Array(n.digest())}function Th(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Wn([n,r],0),new Wn([s,i],0)]}class Nc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new as(`Invalid padding: ${n}`);if(r<0)throw new as(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new as(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new as(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=Wn.fromNumber(this.Ie)}Ee(t,n,r){let s=t.add(n.multiply(Wn.fromNumber(r)));return s.compare(dT)===1&&(s=new Wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=wh(t),[r,s]=Th(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Nc(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const n=wh(t),[r,s]=Th(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class as extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class go{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Hs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new go(at.min(),s,new Nt(Et),an(),ft())}}class Hs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Hs(r,n,ft(),ft(),ft())}}/**
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
 */class Si{constructor(t,n,r,s){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=s}}class dp{constructor(t,n){this.targetId=t,this.me=n}}class pp{constructor(t,n,r=ie.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ih{constructor(){this.fe=0,this.ge=bh(),this.pe=ie.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=ft(),n=ft(),r=ft();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ot()}}),new Hs(this.pe,this.ye,t,n,r)}ve(){this.we=!1,this.ge=bh()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,St(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pT{constructor(t){this.Le=t,this.Be=new Map,this.ke=an(),this.qe=Ah(),this.Qe=new Nt(Et)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const r=this.Ge(n);switch(t.state){case 0:this.ze(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(t.resumeToken));break;default:ot()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(t){const n=t.targetId,r=t.me.count,s=this.Je(n);if(s){const i=s.target;if(Ba(i))if(r===0){const a=new st(i.path);this.Ue(n,a,ne.newNoDocument(a,at.min()))}else St(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(t),l=c?this.Xe(c,t,a):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Jn(r).toUint8Array()}catch(l){if(l instanceof qd)return Cr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nc(a,s,i)}catch(l){return Cr(l instanceof as?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(t,n,r){return n.me.count===r-this.nt(t,n.targetId)?0:2}nt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(t){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Ba(c.target)){const l=new st(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,ne.newNoDocument(l,t))}i.be&&(n.set(a,i.Ce()),i.ve())}});let r=ft();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new go(t,n,this.Qe,this.ke,r);return this.ke=an(),this.qe=Ah(),this.Qe=new Nt(Et),s}$e(t,n){if(!this.ze(t))return;const r=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new Ih,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new Xt(Et),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||X("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ih),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Ah(){return new Nt(st.comparator)}function bh(){return new Nt(st.comparator)}const mT={asc:"ASCENDING",desc:"DESCENDING"},gT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_T={and:"AND",or:"OR"};class yT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function $a(e,t){return e.useProto3Json||lo(t)?t:{value:t}}function ji(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mp(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function vT(e,t){return ji(e,t.toTimestamp())}function He(e){return St(!!e),at.fromTimestamp(function(n){const r=Vn(n);return new $t(r.seconds,r.nanos)}(e))}function Oc(e,t){return qa(e,t).canonicalString()}function qa(e,t){const n=function(s){return new kt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function gp(e){const t=kt.fromString(e);return St(wp(t)),t}function za(e,t){return Oc(e.databaseId,t.path)}function sa(e,t){const n=gp(t);if(n.get(1)!==e.databaseId.projectId)throw new rt(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new rt(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new st(yp(n))}function _p(e,t){return Oc(e.databaseId,t)}function ET(e){const t=gp(e);return t.length===4?kt.emptyPath():yp(t)}function Ha(e){return new kt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yp(e){return St(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Rh(e,t,n){return{name:za(e,t),fields:n.value.mapValue.fields}}function wT(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ot()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(St(d===void 0||typeof d=="string"),ie.fromBase64String(d||"")):(St(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ie.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(h){const d=h.code===void 0?F.UNKNOWN:fp(h.code);return new rt(d,h.message||"")}(a);n=new pp(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=sa(e,r.document.name),i=He(r.document.updateTime),a=r.document.createTime?He(r.document.createTime):at.min(),c=new he({mapValue:{fields:r.document.fields}}),l=ne.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Si(h,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=sa(e,r.document),i=r.readTime?He(r.readTime):at.min(),a=ne.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Si([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=sa(e,r.document),i=r.removedTargetIds||[];n=new Si([],i,s,null)}else{if(!("filter"in t))return ot();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new uT(s,i),c=r.targetId;n=new dp(c,a)}}return n}function TT(e,t){let n;if(t instanceof zs)n={update:Rh(e,t.key,t.value)};else if(t instanceof hp)n={delete:za(e,t.key)};else if(t instanceof kn)n={update:Rh(e,t.key,t.data),updateMask:DT(t.fieldMask)};else{if(!(t instanceof aT))return ot();n={verify:za(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Bi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ms)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ls)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fs)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw ot()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ot()}(e,t.precondition)),n}function IT(e,t){return e&&e.length>0?(St(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?He(s.updateTime):He(i);return a.isEqual(at.min())&&(a=He(i)),new sT(a,s.transformResults||[])}(n,t))):[]}function AT(e,t){return{documents:[_p(e,t.path)]}}function bT(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_p(e,s);const i=function(h){if(h.length!==0)return Ep(We.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:pr(g.field),direction:PT(g.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const c=$a(e,t.limit);return c!==null&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:n,parent:s}}function RT(e){let t=ET(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){St(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=vp(p);return g instanceof We&&Gd(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(V){return new Ui(mr(V.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,lo(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new Fi(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new Fi(v,g)}(n.endAt)),zw(t,s,a,i,c,"F",l,h)}function ST(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ot()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function vp(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mr(n.unaryFilter.field);return Bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=mr(n.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(n.unaryFilter.field);return Bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mr(n.unaryFilter.field);return Bt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ot()}}(e):e.fieldFilter!==void 0?function(n){return Bt.create(mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ot()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return We.create(n.compositeFilter.filters.map(r=>vp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ot()}}(n.compositeFilter.op))}(e):ot()}function PT(e){return mT[e]}function CT(e){return gT[e]}function VT(e){return _T[e]}function pr(e){return{fieldPath:e.canonicalString()}}function mr(e){return Qt.fromServerFormat(e.fieldPath)}function Ep(e){return e instanceof Bt?function(n){if(n.op==="=="){if(fh(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NAN"}};if(hh(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fh(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NOT_NAN"}};if(hh(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pr(n.field),op:CT(n.op),value:n.value}}}(e):e instanceof We?function(n){const r=n.getFilters().map(s=>Ep(s));return r.length===1?r[0]:{compositeFilter:{op:VT(n.op),filters:r}}}(e):ot()}function DT(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function wp(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class En{constructor(t,n,r,s,i=at.min(),a=at.min(),c=ie.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new En(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class xT{constructor(t){this.ct=t}}function NT(e){const t=RT({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ja(t,t.limit,"L"):t}/**
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
 */class OT{constructor(){this._n=new kT}addToCollectionParentIndex(t,n){return this._n.add(n),L.resolve()}getCollectionParents(t,n){return L.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return L.resolve()}deleteFieldIndex(t,n){return L.resolve()}deleteAllFieldIndexes(t){return L.resolve()}createTargetIndexes(t,n){return L.resolve()}getDocumentsMatchingTarget(t,n){return L.resolve(null)}getIndexType(t,n){return L.resolve(0)}getFieldIndexes(t,n){return L.resolve([])}getNextCollectionGroupToUpdate(t){return L.resolve(null)}getMinOffset(t,n){return L.resolve(Cn.min())}getMinOffsetFromCollectionGroup(t,n){return L.resolve(Cn.min())}updateCollectionGroup(t,n,r){return L.resolve()}updateIndexEntries(t,n){return L.resolve()}}class kT{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Xt(kt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Xt(kt.comparator)).toArray()}}/**
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
 */class Nr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Nr(0)}static Ln(){return new Nr(-1)}}/**
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
 */class MT{constructor(){this.changes=new Fr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ne.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class LT{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class FT{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&vs(r.mutation,s,Ee.empty(),$t.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ft()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ft()){const s=zn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=os();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=zn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ft()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(t,n,r,s){let i=an();const a=ys(),c=function(){return ys()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof kn)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),vs(d.mutation,h,d.mutation.getFieldMask(),$t.now())):a.set(h.key,Ee.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new LT(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(t,n){const r=ys();let s=new Nt((a,c)=>a-c),i=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Ee.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||ft()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=ep();d.forEach(g=>{if(!i.has(g)){const v=lp(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return st.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Hw(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):L.resolve(zn());let c=-1,l=i;return a.next(h=>L.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(t,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,l,h,ft())).next(d=>({batchId:c,changes:tp(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new st(n)).next(r=>{let s=os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=os();return this.indexManager.getCollectionParents(t,i).next(c=>L.forEach(c,l=>{const h=function(p,g){return new uo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ne.newInvalidDocument(d)))});let c=os();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&vs(d.mutation,h,Ee.empty(),$t.now()),fo(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class UT{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return L.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:He(s.createTime)}}(n)),L.resolve()}getNamedQuery(t,n){return L.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:NT(s.bundledQuery),readTime:He(s.readTime)}}(n)),L.resolve()}}/**
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
 */class BT{constructor(){this.overlays=new Nt(st.comparator),this.hr=new Map}getOverlay(t,n){return L.resolve(this.overlays.get(n))}getOverlays(t,n){const r=zn();return L.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),L.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),L.resolve()}getOverlaysForCollection(t,n,r){const s=zn(),i=n.length+1,a=new st(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Nt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=zn(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=zn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return L.resolve(c)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new lT(n,r));let i=this.hr.get(n);i===void 0&&(i=ft(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class kc{constructor(){this.Pr=new Xt(zt.Ir),this.Tr=new Xt(zt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new zt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new zt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new st(new kt([])),r=new zt(n,t),s=new zt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new st(new kt([])),r=new zt(n,t),s=new zt(n,t+1);let i=ft();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new zt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class zt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return st.comparator(t.key,n.key)||Et(t.pr,n.pr)}static Er(t,n){return Et(t.pr,n.pr)||st.comparator(t.key,n.key)}}/**
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
 */class jT{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Xt(zt.Ir)}checkEmpty(t){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cT(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.wr=this.wr.add(new zt(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return L.resolve(a)}lookupMutationBatch(t,n){return L.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new zt(n,0),s=new zt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const c=this.Sr(a.pr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Xt(Et);return n.forEach(s=>{const i=new zt(s,0),a=new zt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],c=>{r=r.add(c.pr)})}),L.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;st.isDocumentKey(i)||(i=i.child(""));const a=new zt(new st(i),0);let c=new Xt(Et);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.pr)),!0)},a),L.resolve(this.Dr(c))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){St(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return L.forEach(n.mutations,s=>{const i=new zt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new zt(n,0),s=this.wr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,L.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $T{constructor(t){this.vr=t,this.docs=function(){return new Nt(st.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ne.newInvalidDocument(n))}getEntries(t,n){let r=an();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ne.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=an();const a=n.path,c=new st(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Rw(bw(d),r)<=0||(s.has(d.key)||fo(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(t,n,r,s){ot()}Fr(t,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new qT(this)}getSize(t){return L.resolve(this.size)}}class qT extends MT{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),L.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class zT{constructor(t){this.persistence=t,this.Mr=new Fr(n=>Cc(n),Vc),this.lastRemoteSnapshotVersion=at.min(),this.highestTargetId=0,this.Or=0,this.Nr=new kc,this.targetCount=0,this.Lr=Nr.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(t){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return L.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),L.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Nr(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,L.resolve()}updateTargetData(t,n){return this.qn(n),L.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(t){return L.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return L.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),L.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),L.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return L.resolve(r)}containsKey(t,n){return L.resolve(this.Nr.containsKey(n))}}/**
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
 */class HT{constructor(t,n){this.Br={},this.overlays={},this.kr=new bc(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new zT(this),this.indexManager=new OT,this.remoteDocumentCache=function(s){return new $T(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new xT(n),this.$r=new UT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new BT,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new jT(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){X("MemoryPersistence","Starting transaction:",t);const s=new KT(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return L.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class KT extends Pw{constructor(t){super(),this.currentSequenceNumber=t}}class Mc{constructor(t){this.persistence=t,this.zr=new kc,this.jr=null}static Hr(t){return new Mc(t)}get Jr(){if(this.jr)return this.jr;throw ot()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),L.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),L.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Jr,r=>{const s=st.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,at.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return L.or([()=>L.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class Lc{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=ft(),s=ft();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lc(t,n.fromCache,r,s)}}/**
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
 */class GT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class WT{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Jv()?8:Cw(Qv())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new GT;return this.Ji(t,n,a).next(c=>{if(i.result=c,this.Ui)return this.Yi(t,n,a,c.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(ns()<=yt.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",dr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),L.resolve()):(ns()<=yt.DEBUG&&X("QueryEngine","Query:",dr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(ns()<=yt.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",dr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qe(n))):L.resolve())}ji(t,n){if(gh(n))return L.resolve(null);let r=qe(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ja(n,null,"F"),r=qe(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=ft(...i);return this.zi.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(l=>{const h=this.Zi(n,c);return this.Xi(n,h,a,l.readTime)?this.ji(t,ja(n,null,"F")):this.es(t,h,n,l)}))})))}Hi(t,n,r,s){return gh(n)||s.isEqual(at.min())?L.resolve(null):this.zi.getDocuments(t,r).next(i=>{const a=this.Zi(n,i);return this.Xi(n,a,r,s)?L.resolve(null):(ns()<=yt.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dr(n)),this.es(t,a,n,Aw(s,-1)).next(c=>c))})}Zi(t,n){let r=new Xt(Jd(t));return n.forEach((s,i)=>{fo(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return ns()<=yt.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",dr(n)),this.zi.getDocumentsMatchingQuery(t,n,Cn.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class QT{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new Nt(Et),this.rs=new Fr(i=>Cc(i),Vc),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new FT(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function YT(e,t,n,r){return new QT(e,t,n,r)}async function Tp(e,t){const n=lt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=ft();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({us:h,removedBatchIds:a,addedBatchIds:c}))})})}function XT(e,t){const n=lt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,g=p.keys();let v=L.resolve();return g.forEach(V=>{v=v.next(()=>d.getEntry(l,V)).next(D=>{const k=h.docVersions.get(V);St(k!==null),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ft();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ip(e){const t=lt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function JT(e,t){const n=lt(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];t.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?v=v.withResumeToken(ie.EMPTY_BYTE_STRING,at.min()).withLastLimboFreeSnapshotVersion(at.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(D,k,G){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(g,v,d)&&c.push(n.Qr.updateTargetData(i,v))});let l=an(),h=ft();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(ZT(i,a,t.documentUpdates).next(d=>{l=d.cs,h=d.ls})),!r.isEqual(at.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return L.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ns=s,i))}function ZT(e,t,n){let r=ft(),s=ft();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=an();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(at.min())?(t.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(l),a=a.insert(c,l)):X("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{cs:a,ls:s}})}function tI(e,t){const n=lt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function eI(e,t){const n=lt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,L.resolve(s)):n.Qr.allocateTargetId(r).next(a=>(s=new En(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Ka(e,t,n){const r=lt(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!qs(a))throw a;X("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Sh(e,t,n){const r=lt(e);let s=at.min(),i=ft();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const p=lt(l),g=p.rs.get(d);return g!==void 0?L.resolve(p.ns.get(g)):p.Qr.getTargetData(h,d)}(r,a,qe(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,n?s:at.min(),n?i:ft())).next(c=>(nI(r,Gw(t),c),{documents:c,hs:i})))}function nI(e,t,n){let r=e.ss.get(t)||at.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Ph{constructor(){this.activeTargetIds=Zw()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rI{constructor(){this.no=new Ph,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ph,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class sI{io(t){}shutdown(){}}/**
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
 */class Ch{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yi=null;function ia(){return yi===null?yi=function(){return 268435456+Math.round(2147483648*Math.random())}():yi++,"0x"+yi.toString(16)}/**
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
 */const iI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class oI{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const te="WebChannelConnection";class aI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,a){const c=ia(),l=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,a),this.Mo(n,l,h,s).then(d=>(X("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Cr("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,a,c){return this.Co(n,r,s,i,a)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}vo(n,r){const s=iI[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,n,r,s){const i=ia();return new Promise((a,c)=>{const l=new Od;l.setWithCredentials(!0),l.listenOnce(Md.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ai.NO_ERROR:const d=l.getResponseJson();X(te,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case Ai.TIMEOUT:X(te,`RPC '${t}' ${i} timed out`),c(new rt(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ai.HTTP_ERROR:const p=l.getStatus();if(X(te,`RPC '${t}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const V=function(k){const G=k.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(G)>=0?G:F.UNKNOWN}(v.status);c(new rt(V,v.message))}else c(new rt(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new rt(F.UNAVAILABLE,"Connection failed."));break;default:ot()}}finally{X(te,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);X(te,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Oo(t,n,r){const s=ia(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ud(),c=Fd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new kd({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");X(te,`Creating RPC '${t}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);let g=!1,v=!1;const V=new oI({lo:k=>{v?X(te,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(g||(X(te,`Opening RPC '${t}' stream ${s} transport.`),p.open(),g=!0),X(te,`RPC '${t}' stream ${s} sending:`,k),p.send(k))},ho:()=>p.close()}),D=(k,G,z)=>{k.listen(G,$=>{try{z($)}catch(it){setTimeout(()=>{throw it},0)}})};return D(p,is.EventType.OPEN,()=>{v||(X(te,`RPC '${t}' stream ${s} transport opened.`),V.mo())}),D(p,is.EventType.CLOSE,()=>{v||(v=!0,X(te,`RPC '${t}' stream ${s} transport closed`),V.po())}),D(p,is.EventType.ERROR,k=>{v||(v=!0,Cr(te,`RPC '${t}' stream ${s} transport errored:`,k),V.po(new rt(F.UNAVAILABLE,"The operation could not be completed")))}),D(p,is.EventType.MESSAGE,k=>{var G;if(!v){const z=k.data[0];St(!!z);const $=z,it=$.error||((G=$[0])===null||G===void 0?void 0:G.error);if(it){X(te,`RPC '${t}' stream ${s} received error:`,it);const wt=it.status;let Z=function(T){const A=Ft[T];if(A!==void 0)return fp(A)}(wt),I=it.message;Z===void 0&&(Z=F.INTERNAL,I="Unknown error status: "+wt+" with message "+it.message),v=!0,V.po(new rt(Z,I)),p.close()}else X(te,`RPC '${t}' stream ${s} received:`,z),V.yo(z)}}),D(c,Ld.STAT_EVENT,k=>{k.stat===Ma.PROXY?X(te,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Ma.NOPROXY&&X(te,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.fo()},0),V}}function oa(){return typeof document<"u"?document:null}/**
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
 */function _o(e){return new yT(e,!0)}/**
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
 */class Ap{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class bp{constructor(t,n,r,s,i,a,c,l){this.oi=t,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ap(t,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(n)}__(){}auth(){this.state=1;const t=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{t(()=>{const s=new rt(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,n){const r=this.a_(this.jo);this.stream=this.l_(t,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return X("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return n=>{this.oi.enqueueAndForget(()=>this.jo===t?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cI extends bp{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}l_(t,n){return this.connection.Oo("Listen",t,n)}onMessage(t){this.Yo.reset();const n=wT(this.serializer,t),r=function(i){if(!("targetChange"in i))return at.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?at.min():a.readTime?He(a.readTime):at.min()}(t);return this.listener.h_(n,r)}P_(t){const n={};n.database=Ha(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=Ba(l)?{documents:AT(i,l)}:{query:bT(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=mp(i,a.resumeToken);const h=$a(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(at.min())>0){c.readTime=ji(i,a.snapshotVersion.toTimestamp());const h=$a(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,t);const r=ST(this.serializer,t);r&&(n.labels=r),this.i_(n)}I_(t){const n={};n.database=Ha(this.serializer),n.removeTarget=t,this.i_(n)}}class lI extends bp{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,n){return this.connection.Oo("Write",t,n)}onMessage(t){if(St(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const n=IT(t.writeResults,t.commitTime),r=He(t.commitTime);return this.listener.A_(r,n)}return St(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Ha(this.serializer),this.i_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>TT(this.serializer,r))};this.i_(n)}}/**
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
 */class uI extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new rt(F.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(t,qa(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new rt(F.UNKNOWN,i.toString())})}xo(t,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(t,qa(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new rt(F.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class hI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(on(n),this.y_=!1):X("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class fI{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{ir(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=lt(l);h.M_.add(4),await Ks(h),h.N_.set("Unknown"),h.M_.delete(4),await yo(h)}(this))})}),this.N_=new hI(r,s)}}async function yo(e){if(ir(e))for(const t of e.x_)await t(!0)}async function Ks(e){for(const t of e.x_)await t(!1)}function Rp(e,t){const n=lt(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),jc(n)?Bc(n):Ur(n).Xo()&&Uc(n,t))}function Fc(e,t){const n=lt(e),r=Ur(n);n.F_.delete(t),r.Xo()&&Sp(n,t),n.F_.size===0&&(r.Xo()?r.n_():ir(n)&&n.N_.set("Unknown"))}function Uc(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(at.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ur(e).P_(t)}function Sp(e,t){e.L_.xe(t),Ur(e).I_(t)}function Bc(e){e.L_=new pT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Ur(e).start(),e.N_.w_()}function jc(e){return ir(e)&&!Ur(e).Zo()&&e.F_.size>0}function ir(e){return lt(e).M_.size===0}function Pp(e){e.L_=void 0}async function dI(e){e.N_.set("Online")}async function pI(e){e.F_.forEach((t,n)=>{Uc(e,t)})}async function mI(e,t){Pp(e),jc(e)?(e.N_.D_(t),Bc(e)):e.N_.set("Unknown")}async function gI(e,t,n){if(e.N_.set("Online"),t instanceof pp&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.F_.delete(c),s.L_.removeTarget(c))}(e,t)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $i(e,r)}else if(t instanceof Si?e.L_.Ke(t):t instanceof dp?e.L_.He(t):e.L_.We(t),!n.isEqual(at.min()))try{const r=await Ip(e.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.L_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(h);d&&i.F_.set(h,d.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(ie.EMPTY_BYTE_STRING,d.snapshotVersion)),Sp(i,l);const p=new En(d.target,l,h,d.sequenceNumber);Uc(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(e,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await $i(e,r)}}async function $i(e,t,n){if(!qs(t))throw t;e.M_.add(1),await Ks(e),e.N_.set("Offline"),n||(n=()=>Ip(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await yo(e)})}function Cp(e,t){return t().catch(n=>$i(e,n,t))}async function vo(e){const t=lt(e),n=Dn(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;_I(t);)try{const s=await tI(t.localStore,r);if(s===null){t.v_.length===0&&n.n_();break}r=s.batchId,yI(t,s)}catch(s){await $i(t,s)}Vp(t)&&Dp(t)}function _I(e){return ir(e)&&e.v_.length<10}function yI(e,t){e.v_.push(t);const n=Dn(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function Vp(e){return ir(e)&&!Dn(e).Zo()&&e.v_.length>0}function Dp(e){Dn(e).start()}async function vI(e){Dn(e).V_()}async function EI(e){const t=Dn(e);for(const n of e.v_)t.d_(n.mutations)}async function wI(e,t,n){const r=e.v_.shift(),s=xc.from(r,t,n);await Cp(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await vo(e)}async function TI(e,t){t&&Dn(e).E_&&await async function(r,s){if(function(a){return hT(a)&&a!==F.ABORTED}(s.code)){const i=r.v_.shift();Dn(r).t_(),await Cp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vo(r)}}(e,t),Vp(e)&&Dp(e)}async function Vh(e,t){const n=lt(e);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=ir(n);n.M_.add(3),await Ks(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await yo(n)}async function II(e,t){const n=lt(e);t?(n.M_.delete(2),await yo(n)):t||(n.M_.add(2),await Ks(n),n.N_.set("Unknown"))}function Ur(e){return e.B_||(e.B_=function(n,r,s){const i=lt(n);return i.f_(),new cI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:dI.bind(null,e),To:pI.bind(null,e),Ao:mI.bind(null,e),h_:gI.bind(null,e)}),e.x_.push(async t=>{t?(e.B_.t_(),jc(e)?Bc(e):e.N_.set("Unknown")):(await e.B_.stop(),Pp(e))})),e.B_}function Dn(e){return e.k_||(e.k_=function(n,r,s){const i=lt(n);return i.f_(),new lI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:vI.bind(null,e),Ao:TI.bind(null,e),R_:EI.bind(null,e),A_:wI.bind(null,e)}),e.x_.push(async t=>{t?(e.k_.t_(),await vo(e)):(await e.k_.stop(),e.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
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
 */class $c{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,c=new $c(t,n,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new rt(F.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(e,t){if(on("AsyncQueue",`${t}: ${e}`),qs(e))return new rt(F.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Er{constructor(t){this.comparator=t?(n,r)=>t(n,r)||st.comparator(n.key,r.key):(n,r)=>st.comparator(n.key,r.key),this.keyedMap=os(),this.sortedSet=new Nt(this.comparator)}static emptySet(t){return new Er(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Er)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Er;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Dh{constructor(){this.q_=new Nt(st.comparator)}track(t){const n=t.doc.key,r=this.q_.get(n);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(n,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(n):t.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):ot():this.q_=this.q_.insert(n,t)}Q_(){const t=[];return this.q_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Or{constructor(t,n,r,s,i,a,c,l,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Or(t,n,Er.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ho(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class AI{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class bI{constructor(){this.queries=new Fr(t=>Xd(t),ho),this.onlineState="Unknown",this.z_=new Set}}async function RI(e,t){const n=lt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.W_()&&t.G_()&&(r=2):(i=new AI,r=t.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=qc(a,`Initialization of query '${dr(t.query)}' failed`);return void t.onError(c)}n.queries.set(s,i),i.U_.push(t),t.j_(n.onlineState),i.K_&&t.H_(i.K_)&&zc(n)}async function SI(e,t){const n=lt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.U_.indexOf(t);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=t.G_()?0:1:!i.W_()&&t.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function PI(e,t){const n=lt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.U_)c.H_(s)&&(r=!0);a.K_=s}}r&&zc(n)}function CI(e,t,n){const r=lt(e),s=r.queries.get(t);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(t)}function zc(e){e.z_.forEach(t=>{t.next()})}var Ga,xh;(xh=Ga||(Ga={})).J_="default",xh.Cache="cache";class VI{constructor(t,n,r){this.query=t,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Or(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),n=!0):this.ta(t,this.onlineState)&&(this.na(t),n=!0),this.X_=t,n}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),n=!0),n}ta(t,n){if(!t.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(t){t=Or.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Ga.Cache}}/**
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
 */class xp{constructor(t){this.key=t}}class Np{constructor(t){this.key=t}}class DI{constructor(t,n){this.query=t,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ft(),this.mutatedKeys=ft(),this.Ia=Jd(t),this.Ta=new Er(this.Ia)}get Ea(){return this.la}da(t,n){const r=n?n.Aa:new Dh,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const g=s.get(d),v=fo(this.query,p)?p:null,V=!!g&&this.mutatedKeys.has(g.key),D=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;g&&v?g.data.isEqual(v.data)?V!==D&&(r.track({type:3,doc:v}),k=!0):this.Ra(g,v)||(r.track({type:2,doc:v}),k=!0,(l&&this.Ia(v,l)>0||h&&this.Ia(v,h)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),k=!0):g&&!v&&(r.track({type:1,doc:g}),k=!0,(l||h)&&(c=!0)),k&&(v?(a=a.add(v),i=D?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:i}}Ra(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((d,p)=>function(v,V){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ot()}};return D(v)-D(V)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,h=l!==this.ha;return this.ha=l,a.length!==0||h?{snapshot:new Or(this.query,t.Ta,i,a,t.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Dh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(n=>this.la=this.la.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=ft(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return t.forEach(r=>{this.Pa.has(r)||n.push(new Np(r))}),this.Pa.forEach(r=>{t.has(r)||n.push(new xp(r))}),n}pa(t){this.la=t.hs,this.Pa=ft();const n=this.da(t.documents);return this.applyChanges(n,!0)}ya(){return Or.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class xI{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class NI{constructor(t){this.key=t,this.wa=!1}}class OI{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Fr(c=>Xd(c),ho),this.Da=new Map,this.Ca=new Set,this.va=new Nt(st.comparator),this.Fa=new Map,this.Ma=new kc,this.xa={},this.Oa=new Map,this.Na=Nr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function kI(e,t,n=!0){const r=Up(e);let s;const i=r.ba.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Op(r,t,n,!0),s}async function MI(e,t){const n=Up(e);await Op(n,t,!0,!1)}async function Op(e,t,n,r){const s=await eI(e.localStore,qe(t)),i=s.targetId,a=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await LI(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&Rp(e.remoteStore,s),c}async function LI(e,t,n,r,s){e.Ba=(p,g,v)=>async function(D,k,G,z){let $=k.view.da(G);$.Xi&&($=await Sh(D.localStore,k.query,!1).then(({documents:I})=>k.view.da(I,$)));const it=z&&z.targetChanges.get(k.targetId),wt=z&&z.targetMismatches.get(k.targetId)!=null,Z=k.view.applyChanges($,D.isPrimaryClient,it,wt);return Oh(D,k.targetId,Z.fa),Z.snapshot}(e,p,g,v);const i=await Sh(e.localStore,t,!0),a=new DI(t,i.hs),c=a.da(i.documents),l=Hs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(c,e.isPrimaryClient,l);Oh(e,n,h.fa);const d=new xI(t,n,a);return e.ba.set(t,d),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),h.snapshot}async function FI(e,t,n){const r=lt(e),s=r.ba.get(t),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!ho(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ka(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Fc(r.remoteStore,s.targetId),Wa(r,s.targetId)}).catch($s)):(Wa(r,s.targetId),await Ka(r.localStore,s.targetId,!0))}async function UI(e,t){const n=lt(e),r=n.ba.get(t),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fc(n.remoteStore,r.targetId))}async function BI(e,t,n){const r=GI(e);try{const s=await function(a,c){const l=lt(a),h=$t.now(),d=c.reduce((v,V)=>v.add(V.key),ft());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let V=an(),D=ft();return l.os.getEntries(v,d).next(k=>{V=k,V.forEach((G,z)=>{z.isValidDocument()||(D=D.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,V)).next(k=>{p=k;const G=[];for(const z of c){const $=oT(z,p.get(z.key).overlayedDocument);$!=null&&G.push(new kn(z.key,$,zd($.value.mapValue),ze.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,G,c)}).next(k=>{g=k;const G=k.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(v,k.batchId,G)})}).then(()=>({batchId:g.batchId,changes:tp(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.xa[a.currentUser.toKey()];h||(h=new Nt(Et)),h=h.insert(c,l),a.xa[a.currentUser.toKey()]=h}(r,s.batchId,n),await Gs(r,s.changes),await vo(r.remoteStore)}catch(s){const i=qc(s,"Failed to persist write");n.reject(i)}}async function kp(e,t){const n=lt(e);try{const r=await JT(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Fa.get(i);a&&(St(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?St(a.wa):s.removedDocuments.size>0&&(St(a.wa),a.wa=!1))}),await Gs(n,r,t)}catch(r){await $s(r)}}function Nh(e,t,n){const r=lt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,a)=>{const c=a.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=lt(a);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(c)&&(h=!0)}),h&&zc(l)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jI(e,t,n){const r=lt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Fa.get(t),i=s&&s.key;if(i){let a=new Nt(st.comparator);a=a.insert(i,ne.newNoDocument(i,at.min()));const c=ft().add(i),l=new go(at.min(),new Map,new Nt(Et),a,c);await kp(r,l),r.va=r.va.remove(i),r.Fa.delete(t),Hc(r)}else await Ka(r.localStore,t,!1).then(()=>Wa(r,t,n)).catch($s)}async function $I(e,t){const n=lt(e),r=t.batch.batchId;try{const s=await XT(n.localStore,t);Lp(n,r,null),Mp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gs(n,s)}catch(s){await $s(s)}}async function qI(e,t,n){const r=lt(e);try{const s=await function(a,c){const l=lt(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(St(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,t);Lp(r,t,n),Mp(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Gs(r,s)}catch(s){await $s(s)}}function Mp(e,t){(e.Oa.get(t)||[]).forEach(n=>{n.resolve()}),e.Oa.delete(t)}function Lp(e,t,n){const r=lt(e);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function Wa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Da.get(t))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach(r=>{e.Ma.containsKey(r)||Fp(e,r)})}function Fp(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);n!==null&&(Fc(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),Hc(e))}function Oh(e,t,n){for(const r of n)r instanceof xp?(e.Ma.addReference(r.key,t),zI(e,r)):r instanceof Np?(X("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||Fp(e,r.key)):ot()}function zI(e,t){const n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),e.Ca.add(r),Hc(e))}function Hc(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new st(kt.fromString(t)),r=e.Na.next();e.Fa.set(r,new NI(n)),e.va=e.va.insert(n,r),Rp(e.remoteStore,new En(qe(Dc(n.path)),r,"TargetPurposeLimboResolution",bc.oe))}}async function Gs(e,t,n){const r=lt(e),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{a.push(r.Ba(l,t,n).then(h=>{if((h||n)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Lc.Ki(l.targetId,h);i.push(d)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(l,h){const d=lt(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.qi,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>L.forEach(g.Qi,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!qs(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=d.ns.get(g),V=v.snapshotVersion,D=v.withLastLimboFreeSnapshotVersion(V);d.ns=d.ns.insert(g,D)}}}(r.localStore,i))}async function HI(e,t){const n=lt(e);if(!n.currentUser.isEqual(t)){X("SyncEngine","User change. New user:",t.toKey());const r=await Tp(n.localStore,t);n.currentUser=t,function(i,a){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new rt(F.CANCELLED,a))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Gs(n,r.us)}}function KI(e,t){const n=lt(e),r=n.Fa.get(t);if(r&&r.wa)return ft().add(r.key);{let s=ft();const i=n.Da.get(t);if(!i)return s;for(const a of i){const c=n.ba.get(a);s=s.unionWith(c.view.Ea)}return s}}function Up(e){const t=lt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=kp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=KI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jI.bind(null,t),t.Sa.h_=PI.bind(null,t.eventManager),t.Sa.ka=CI.bind(null,t.eventManager),t}function GI(e){const t=lt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$I.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qI.bind(null,t),t}class kh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=_o(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return YT(this.persistence,new WT,t.initialUser,this.serializer)}createPersistence(t){return new HT(Mc.Hr,this.serializer)}createSharedClientState(t){return new rI}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WI{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HI.bind(null,this.syncEngine),await II(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new bI}()}createDatastore(t){const n=_o(t.databaseInfo.databaseId),r=function(i){return new aI(i)}(t.databaseInfo);return function(i,a,c,l){return new uI(i,a,c,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,c){return new fI(r,s,i,a,c)}(this.localStore,this.datastore,t.asyncQueue,n=>Nh(this.syncEngine,n,0),function(){return Ch.D()?new Ch:new sI}())}createSyncEngine(t,n){return function(s,i,a,c,l,h,d){const p=new OI(s,i,a,c,l,h);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=lt(r);X("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Ks(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class QI{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):on("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class YI{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ee.UNAUTHENTICATED,this.clientId=jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{X("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(X("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rt(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=qc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function aa(e,t){e.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tp(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Mh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await JI(e);X("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Vh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Vh(t.remoteStore,s)),e._onlineComponents=t}function XI(e){return e.name==="FirebaseError"?e.code===F.FAILED_PRECONDITION||e.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function JI(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await aa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!XI(n))throw n;Cr("Error using user provided cache. Falling back to memory cache: "+n),await aa(e,new kh)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await aa(e,new kh);return e._offlineComponents}async function Bp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Mh(e,e._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Mh(e,new WI))),e._onlineComponents}function ZI(e){return Bp(e).then(t=>t.syncEngine)}async function t0(e){const t=await Bp(e),n=t.eventManager;return n.onListen=kI.bind(null,t.syncEngine),n.onUnlisten=FI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=MI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=UI.bind(null,t.syncEngine),n}function e0(e,t,n={}){const r=new bn;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const d=new QI({next:g=>{a.enqueueAndForget(()=>SI(i,p));const v=g.docs.has(c);!v&&g.fromCache?h.reject(new rt(F.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?h.reject(new rt(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new VI(Dc(c.path),d,{includeMetadataChanges:!0,ra:!0});return RI(i,p)}(await t0(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function jp(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Lh=new Map;/**
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
 */function n0(e,t,n){if(!n)throw new rt(F.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function r0(e,t,n,r){if(t===!0&&r===!0)throw new rt(F.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fh(e){if(!st.isDocumentKey(e))throw new rt(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Kc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ot()}function tr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rt(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kc(e);throw new rt(F.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Uh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new rt(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new rt(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}r0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jp((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new rt(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new rt(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new rt(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Gc{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new rt(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new rt(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mw;switch(r.type){case"firstParty":return new vw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new rt(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lh.get(n);r&&(X("ComponentProvider","Removing Datastore"),Lh.delete(n),r.terminate())}(this),Promise.resolve()}}function s0(e,t,n,r={}){var s;const i=(e=tr(e,Gc))._getSettings(),a=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Cr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ee.MOCK_USER;else{c=Wv(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new rt(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ee(h)}e._authCredentials=new gw(new Bd(c,l))}}/**
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
 */class Wc{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Wc(this.firestore,t,this._query)}}class we{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Us(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new we(this.firestore,t,this._key)}}class Us extends Wc{constructor(t,n,r){super(t,n,Dc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new we(this.firestore,null,new st(t))}withConverter(t){return new Us(this.firestore,t,this._path)}}function Bh(e,t,...n){if(e=rn(e),arguments.length===1&&(t=jd.newId()),n0("doc","path",t),e instanceof Gc){const r=kt.fromString(t,...n);return Fh(r),new we(e,null,new st(r))}{if(!(e instanceof we||e instanceof Us))throw new rt(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(kt.fromString(t,...n));return Fh(r),new we(e.firestore,e instanceof Us?e.converter:null,new st(r))}}/**
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
 */class i0{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ap(this,"async_queue_retry"),this.hu=()=>{const n=oa();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const t=oa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new bn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!qs(t))throw t;X("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw on("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const s=$c.createAndSchedule(this,t,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ot()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class Eo extends Gc{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new i0}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qp(this),this._firestoreClient.terminate()}}function o0(e,t){const n=typeof e=="object"?e:Vd(),r=typeof e=="string"?e:"(default)",s=js(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kv("firestore");i&&s0(s,...i)}return s}function $p(e){return e._firestoreClient||qp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function qp(e){var t,n,r;const s=e._freezeSettings(),i=function(c,l,h,d){return new xw(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,jp(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new YI(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class kr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kr(ie.fromBase64String(t))}catch(n){throw new rt(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new kr(ie.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class wo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new rt(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class To{constructor(t){this._methodName=t}}/**
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
 */class Qc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new rt(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new rt(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Et(this._lat,t._lat)||Et(this._long,t._long)}}/**
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
 */const a0=/^__.*__$/;class c0{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new kn(t,this.data,this.fieldMask,n,this.fieldTransforms):new zs(t,this.data,n,this.fieldTransforms)}}class zp{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new kn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Hp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ot()}}class Yc{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Yc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return qi(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Hp(this.fu)&&a0.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class l0{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||_o(t)}Fu(t,n,r,s=!1){return new Yc({fu:t,methodName:n,vu:r,path:Qt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kp(e){const t=e._freezeSettings(),n=_o(e._databaseId);return new l0(e._databaseId,!!t.ignoreUndefinedProperties,n)}function u0(e,t,n,r,s,i={}){const a=e.Fu(i.merge||i.mergeFields?2:0,t,n,s);Jc("Data must be an object, but it was:",a,r);const c=Gp(r,a);let l,h;if(i.merge)l=new Ee(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Qa(t,p,n);if(!a.contains(g))throw new rt(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Qp(d,g)||d.push(g)}l=new Ee(d),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new c0(new he(c),l,h)}class Io extends To{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Io}}class Xc extends To{constructor(t,n){super(t),this.xu=n}_toFieldTransform(t){const n=new Fs(t.serializer,sp(t.serializer,this.xu));return new nT(t.path,n)}isEqual(t){return t instanceof Xc&&this.xu===t.xu}}function h0(e,t,n,r){const s=e.Fu(1,t,n);Jc("Data must be an object, but it was:",s,r);const i=[],a=he.empty();sr(r,(l,h)=>{const d=Zc(t,l,n);h=rn(h);const p=s.Su(d);if(h instanceof Io)i.push(d);else{const g=Ao(h,p);g!=null&&(i.push(d),a.set(d,g))}});const c=new Ee(i);return new zp(a,c,s.fieldTransforms)}function f0(e,t,n,r,s,i){const a=e.Fu(1,t,n),c=[Qa(t,r,n)],l=[s];if(i.length%2!=0)throw new rt(F.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Qa(t,i[g])),l.push(i[g+1]);const h=[],d=he.empty();for(let g=c.length-1;g>=0;--g)if(!Qp(h,c[g])){const v=c[g];let V=l[g];V=rn(V);const D=a.Su(v);if(V instanceof Io)h.push(v);else{const k=Ao(V,D);k!=null&&(h.push(v),d.set(v,k))}}const p=new Ee(h);return new zp(d,p,a.fieldTransforms)}function Ao(e,t){if(Wp(e=rn(e)))return Jc("Unsupported field value:",t,e),Gp(e,t);if(e instanceof To)return function(r,s){if(!Hp(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Ao(c,s.bu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=rn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$t.fromDate(r);return{timestampValue:ji(s.serializer,i)}}if(r instanceof $t){const i=new $t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ji(s.serializer,i)}}if(r instanceof Qc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kr)return{bytesValue:mp(s.serializer,r._byteString)};if(r instanceof we){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Oc(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Kc(r)}`)}(e,t)}function Gp(e,t){const n={};return $d(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sr(e,(r,s)=>{const i=Ao(s,t.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Wp(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $t||e instanceof Qc||e instanceof kr||e instanceof we||e instanceof To)}function Jc(e,t,n){if(!Wp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Kc(n);throw r==="an object"?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function Qa(e,t,n){if((t=rn(t))instanceof wo)return t._internalPath;if(typeof t=="string")return Zc(e,t);throw qi("Field path arguments must be of type string or ",e,!1,void 0,n)}const d0=new RegExp("[~\\*/\\[\\]]");function Zc(e,t,n){if(t.search(d0)>=0)throw qi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new wo(...t.split("."))._internalPath}catch{throw qi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qi(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new rt(F.INVALID_ARGUMENT,c+e+l)}function Qp(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Yp{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new p0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Xp("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p0 extends Yp{data(){return super.data()}}function Xp(e,t){return typeof t=="string"?Zc(e,t):t instanceof wo?t._internalPath:t._delegate._internalPath}class m0{convertValue(t,n="none"){switch(Zn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Jn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw ot()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return sr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Qc(Ut(t.latitude),Ut(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Sc(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ns(t));default:return null}}convertTimestamp(t){const n=Vn(t);return new $t(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=kt.fromString(t);St(wp(r));const s=new Os(r.get(1),r.get(3)),i=new st(r.popFirst(5));return s.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function g0(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
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
 */class _0{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Jp extends Yp{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new y0(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Xp("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class y0 extends Jp{data(t={}){return super.data(t)}}/**
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
 */function v0(e){e=tr(e,we);const t=tr(e.firestore,Eo);return e0($p(t),e._key).then(n=>I0(t,e,n))}class E0 extends m0{constructor(t){super(),this.firestore=t}convertBytes(t){return new kr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new we(this.firestore,null,n)}}function w0(e,t,n){e=tr(e,we);const r=tr(e.firestore,Eo),s=g0(e.converter,t);return Zp(r,[u0(Kp(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,ze.none())])}function T0(e,t,n,...r){e=tr(e,we);const s=tr(e.firestore,Eo),i=Kp(s);let a;return a=typeof(t=rn(t))=="string"||t instanceof wo?f0(i,"updateDoc",e._key,t,n,r):h0(i,"updateDoc",e._key,t),Zp(s,[a.toMutation(e._key,ze.exists(!0))])}function Zp(e,t){return function(r,s){const i=new bn;return r.asyncQueue.enqueueAndForget(async()=>BI(await ZI(r),s,i)),i.promise}($p(e),t)}function I0(e,t,n){const r=n.docs.get(t._key),s=new E0(e);return new Jp(e,s,t._key,r,new _0(n.hasPendingWrites,n.fromCache),t.converter)}function A0(e){return new Xc("increment",e)}(function(t,n=!0){(function(s){Lr=s})(rw),Pn(new sn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Eo(new _w(r.getProvider("auth-internal")),new ww(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new rt(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Os(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),$e(ah,"4.6.3",t),$e(ah,"4.6.3","esm2017")})();const tm="@firebase/installations",tl="0.6.7";/**
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
 */const em=1e4,nm=`w:${tl}`,rm="FIS_v2",b0="https://firebaseinstallations.googleapis.com/v1",R0=60*60*1e3,S0="installations",P0="Installations";/**
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
 */const C0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},er=new co(S0,P0,C0);function sm(e){return e instanceof On&&e.code.includes("request-failed")}/**
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
 */function im({projectId:e}){return`${b0}/projects/${e}/installations`}function om(e){return{token:e.token,requestStatus:2,expiresIn:D0(e.expiresIn),creationTime:Date.now()}}async function am(e,t){const r=(await t.json()).error;return er.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function V0(e,{refreshToken:t}){const n=cm(e);return n.append("Authorization",x0(t)),n}async function lm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function D0(e){return Number(e.replace("s","000"))}function x0(e){return`${rm} ${e}`}/**
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
 */async function N0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=im(e),s=cm(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:rm,appId:e.appId,sdkVersion:nm},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await lm(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:om(h.authToken)}}else throw await am("Create Installation",l)}/**
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
 */function um(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function O0(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const k0=/^[cdef][\w-]{21}$/,Ya="";function M0(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=L0(e);return k0.test(n)?n:Ya}catch{return Ya}}function L0(e){return O0(e).substr(0,22)}/**
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
 */function bo(e){return`${e.appName}!${e.appId}`}/**
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
 */const hm=new Map;function fm(e,t){const n=bo(e);dm(n,t),F0(n,t)}function dm(e,t){const n=hm.get(e);if(n)for(const r of n)r(t)}function F0(e,t){const n=U0();n&&n.postMessage({key:e,fid:t}),B0()}let Hn=null;function U0(){return!Hn&&"BroadcastChannel"in self&&(Hn=new BroadcastChannel("[Firebase] FID Change"),Hn.onmessage=e=>{dm(e.data.key,e.data.fid)}),Hn}function B0(){hm.size===0&&Hn&&(Hn.close(),Hn=null)}/**
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
 */const j0="firebase-installations-database",$0=1,nr="firebase-installations-store";let ca=null;function el(){return ca||(ca=Pd(j0,$0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nr)}}})),ca}async function zi(e,t){const n=bo(e),s=(await el()).transaction(nr,"readwrite"),i=s.objectStore(nr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&fm(e,t.fid),t}async function pm(e){const t=bo(e),r=(await el()).transaction(nr,"readwrite");await r.objectStore(nr).delete(t),await r.done}async function Ro(e,t){const n=bo(e),s=(await el()).transaction(nr,"readwrite"),i=s.objectStore(nr),a=await i.get(n),c=t(a);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&fm(e,c.fid),c}/**
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
 */async function nl(e){let t;const n=await Ro(e.appConfig,r=>{const s=q0(r),i=z0(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ya?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function q0(e){const t=e||{fid:M0(),registrationStatus:0};return mm(t)}function z0(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(er.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=H0(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:K0(e)}:{installationEntry:t}}async function H0(e,t){try{const n=await N0(e,t);return zi(e.appConfig,n)}catch(n){throw sm(n)&&n.customData.serverCode===409?await pm(e.appConfig):await zi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function K0(e){let t=await jh(e.appConfig);for(;t.registrationStatus===1;)await um(100),t=await jh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nl(e);return r||n}return t}function jh(e){return Ro(e,t=>{if(!t)throw er.create("installation-not-found");return mm(t)})}function mm(e){return G0(e)?{fid:e.fid,registrationStatus:0}:e}function G0(e){return e.registrationStatus===1&&e.registrationTime+em<Date.now()}/**
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
 */async function W0({appConfig:e,heartbeatServiceProvider:t},n){const r=Q0(e,n),s=V0(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:nm,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await lm(()=>fetch(r,c));if(l.ok){const h=await l.json();return om(h)}else throw await am("Generate Auth Token",l)}function Q0(e,{fid:t}){return`${im(e)}/${t}/authTokens:generate`}/**
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
 */async function rl(e,t=!1){let n;const r=await Ro(e.appConfig,i=>{if(!gm(i))throw er.create("not-registered");const a=i.authToken;if(!t&&J0(a))return i;if(a.requestStatus===1)return n=Y0(e,t),i;{if(!navigator.onLine)throw er.create("app-offline");const c=tA(i);return n=X0(e,c),c}});return n?await n:r.authToken}async function Y0(e,t){let n=await $h(e.appConfig);for(;n.authToken.requestStatus===1;)await um(100),n=await $h(e.appConfig);const r=n.authToken;return r.requestStatus===0?rl(e,t):r}function $h(e){return Ro(e,t=>{if(!gm(t))throw er.create("not-registered");const n=t.authToken;return eA(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function X0(e,t){try{const n=await W0(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await zi(e.appConfig,r),n}catch(n){if(sm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await zi(e.appConfig,r)}throw n}}function gm(e){return e!==void 0&&e.registrationStatus===2}function J0(e){return e.requestStatus===2&&!Z0(e)}function Z0(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+R0}function tA(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function eA(e){return e.requestStatus===1&&e.requestTime+em<Date.now()}/**
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
 */async function nA(e){const t=e,{installationEntry:n,registrationPromise:r}=await nl(t);return r?r.catch(console.error):rl(t).catch(console.error),n.fid}/**
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
 */async function rA(e,t=!1){const n=e;return await sA(n),(await rl(n,t)).token}async function sA(e){const{registrationPromise:t}=await nl(e);t&&await t}/**
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
 */function iA(e){if(!e||!e.options)throw la("App Configuration");if(!e.name)throw la("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw la(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function la(e){return er.create("missing-app-config-values",{valueName:e})}/**
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
 */const _m="installations",oA="installations-internal",aA=e=>{const t=e.getProvider("app").getImmediate(),n=iA(t),r=js(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cA=e=>{const t=e.getProvider("app").getImmediate(),n=js(t,_m).getImmediate();return{getId:()=>nA(n),getToken:s=>rA(n,s)}};function lA(){Pn(new sn(_m,aA,"PUBLIC")),Pn(new sn(oA,cA,"PRIVATE"))}lA();$e(tm,tl);$e(tm,tl,"esm2017");/**
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
 */const Hi="analytics",uA="firebase_id",hA="origin",fA=60*1e3,dA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sl="https://www.googletagmanager.com/gtag/js";/**
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
 */const de=new Tc("@firebase/analytics");/**
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
 */const pA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Te=new co("analytics","Analytics",pA);/**
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
 */function mA(e){if(!e.startsWith(sl)){const t=Te.create("invalid-gtag-resource",{gtagURL:e});return de.warn(t.message),""}return e}function ym(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function gA(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function _A(e,t){const n=gA("firebase-js-sdk-policy",{createScriptURL:mA}),r=document.createElement("script"),s=`${sl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function yA(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function vA(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const l=(await ym(n)).find(h=>h.measurementId===s);l&&await t[l.appId]}}catch(c){de.error(c)}e("config",s,i)}async function EA(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await ym(n);for(const l of a){const h=c.find(p=>p.measurementId===l),d=h&&t[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){de.error(i)}}function wA(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[c,l]=a;await EA(e,t,n,c,l)}else if(i==="config"){const[c,l]=a;await vA(e,t,n,r,c,l)}else if(i==="consent"){const[c,l]=a;e("consent",c,l)}else if(i==="get"){const[c,l,h]=a;e("get",c,l,h)}else if(i==="set"){const[c]=a;e("set",c)}else e(i,...a)}catch(c){de.error(c)}}return s}function TA(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=wA(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function IA(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(sl)&&n.src.includes(e))return n;return null}/**
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
 */const AA=30,bA=1e3;class RA{constructor(t={},n=bA){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const vm=new RA;function SA(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function PA(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:SA(r)},i=dA.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((t=l.error)===null||t===void 0)&&t.message&&(c=l.error.message)}catch{}throw Te.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function CA(e,t=vm,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Te.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Te.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new xA;return setTimeout(async()=>{c.abort()},fA),Em({appId:r,apiKey:s,measurementId:i},a,c,t)}async function Em(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=vm){var i;const{appId:a,measurementId:c}=e;try{await VA(r,t)}catch(l){if(c)return de.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await PA(e);return s.deleteThrottleMetadata(a),l}catch(l){const h=l;if(!DA(h)){if(s.deleteThrottleMetadata(a),c)return de.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw l}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Xu(n,s.intervalMillis,AA):Xu(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,p),de.debug(`Calling attemptFetch again in ${d} millis`),Em(e,p,r,s)}}function VA(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Te.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function DA(e){if(!(e instanceof On)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class xA{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function NA(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
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
 */async function OA(){if(Ad())try{await bd()}catch(e){return de.warn(Te.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return de.warn(Te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kA(e,t,n,r,s,i,a){var c;const l=CA(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&de.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>de.error(v)),t.push(l);const h=OA().then(v=>{if(v)return r.getId()}),[d,p]=await Promise.all([l,h]);IA(i)||_A(i,d.measurementId),s("js",new Date);const g=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return g[hA]="firebase",g.update=!0,p!=null&&(g[uA]=p),s("config",d.measurementId,g),d.measurementId}/**
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
 */class MA{constructor(t){this.app=t}_delete(){return delete Es[this.app.options.appId],Promise.resolve()}}let Es={},qh=[];const zh={};let ua="dataLayer",LA="gtag",Hh,wm,Kh=!1;function FA(){const e=[];if(Xv()&&e.push("This is a browser extension environment."),Zv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Te.create("invalid-analytics-context",{errorInfo:t});de.warn(n.message)}}function UA(e,t,n){FA();const r=e.options.appId;if(!r)throw Te.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)de.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Te.create("no-api-key");if(Es[r]!=null)throw Te.create("already-exists",{id:r});if(!Kh){yA(ua);const{wrappedGtag:i,gtagCore:a}=TA(Es,qh,zh,ua,LA);wm=i,Hh=a,Kh=!0}return Es[r]=kA(e,qh,zh,t,Hh,ua,n),new MA(e)}function BA(e=Vd()){e=rn(e);const t=js(e,Hi);return t.isInitialized()?t.getImmediate():jA(e)}function jA(e,t={}){const n=js(e,Hi);if(n.isInitialized()){const s=n.getImmediate();if(ki(t,n.getOptions()))return s;throw Te.create("already-initialized")}return n.initialize({options:t})}function $A(e,t,n,r){e=rn(e),NA(wm,Es[e.app.options.appId],t,n,r).catch(s=>de.error(s))}const Gh="@firebase/analytics",Wh="0.10.4";function qA(){Pn(new sn(Hi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return UA(r,s,n)},"PUBLIC")),Pn(new sn("analytics-internal",e,"PRIVATE")),$e(Gh,Wh),$e(Gh,Wh,"esm2017");function e(t){try{const n=t.getProvider(Hi).getImmediate();return{logEvent:(r,s,i)=>$A(n,r,s,i)}}catch(n){throw Te.create("interop-component-reg-failed",{reason:n})}}}qA();const zA={apiKey:"AIzaSyB50sy77sEA-DxW39FRHit36fIOVwL3YOk",authDomain:"mishshish-kombat.firebaseapp.com",projectId:"mishshish-kombat",storageBucket:"mishshish-kombat.appspot.com",messagingSenderId:"144805837634",appId:"1:144805837634:web:06d1413904f8152b3a26db",measurementId:"G-LPNYD3505B"},Tm=Cd(zA);BA(Tm);const Qh=o0(Tm),HA=["src"],ha={__name:"NavItem",props:{path:String,imagePath:String},setup(e){return(t,n)=>{const r=Vf("router-link");return wr(),Tr("div",{class:Yi(["items-start rounded-full inline-block py-5 px-6 flex-1 transition",{"bg-zinc-900":t.$route.path===e.path}])},[Yt(r,{to:e.path},{default:hc(()=>[jt("img",{src:e.imagePath,width:"24px",height:"24px",class:"pointer-events-none"},null,8,HA)]),_:1},8,["to"])],2)}}},KA={class:"bg-black fixed left-1/2 transform -translate-x-1/2 bottom-8 rounded-full pt-3 pb-2 px-3 gap-x-2.5",style:{"box-shadow":"0px 0px 200px 40px rgba(62, 62, 62, 0.25)",width:"240px"}},fa=11111,GA={__name:"App",setup(e){window.Telegram.WebApp;const t=_a(0),n=_a(!0),r=async()=>{n.value=!0;const i=Bh(Qh,"users",String(fa)),a=await v0(i);a.exists()?t.value=a.data().count:await w0(i,{userId:fa,count:0}),n.value=!1},s=async()=>{const i=Bh(Qh,"users",String(fa));await T0(i,{count:A0(1)})};return xf(()=>{r()}),fs("info",{count:t,countDataIncrement:s,isLoading:n}),(i,a)=>{const c=Gg("auto-animate");return wr(),Tr(Fe,null,[s_((wr(),Tr("div",null,[Yt(en(Ed))])),[[c]]),jt("nav",KA,[Yt(ha,{path:"/shishkombt",imagePath:"/icons/home.webp"}),Yt(ha,{path:"/mining",imagePath:"/icons/mine.webp"}),Yt(ha,{path:"/info",imagePath:"/icons/info.webp"})])],64)}}},WA="/icons/burger.webp",QA="/icons/shish.webp",Im=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Ws=e=>(Ug("data-v-4a34625f"),e=e(),Bg(),e),YA={key:0,className:"loading"},XA=Ws(()=>jt("h1",{class:"text-white text-4xl font-bold flex items-center justify-center h-screen"}," Загрузка... ",-1)),JA=[XA],ZA={key:1,className:"homescreen"},tb=Ws(()=>jt("header",null,[jt("div",{class:"bg-zinc-900 w-5/6 h-12 mx-auto my-9 rounded-full flex justify-between py-2 px-7"},[jt("p",{class:"text-white text-xl select-none"},"1 уровень ⚡⚡"),jt("p",{class:"text-zinc-400 text-xl select-none"},"0 осталось")])],-1)),eb={class:"mt-28"},nb={class:"flex items-center justify-center gap-4 mt-20"},rb={class:"text-white text-4xl select-none"},sb=Ws(()=>jt("img",{src:WA,width:"46px",height:"46px",class:"pointer-events-none"},null,-1)),ib=Ws(()=>jt("div",{class:"bg-zinc-900 rounded-full px-6 py-1"},[jt("p",{class:"text-white text-xl select-none"},"+1")],-1)),ob=Ws(()=>jt("img",{src:QA,width:"256px",height:"256px",class:"pointer-events-none"},null,-1)),ab=[ob],cb={__name:"Home",setup(e){const{count:t,countDataIncrement:n,isLoading:r}=je("info"),s=async()=>{t.value++,await n()};return(i,a)=>en(r)?(wr(),Tr("div",YA,JA)):(wr(),Tr("div",ZA,[tb,jt("div",eb,[jt("div",nb,[jt("p",rb,ig(en(t)),1),sb,ib]),jt("div",{class:"flex justify-center mt-12",onClick:s},ab)])]))}},lb=Im(cb,[["__scopeId","data-v-4a34625f"]]),ub={},hb={class:"flex flex-col items-center justify-center h-screen"},fb=jt("h1",{class:"text-white text-8xl font-bold6"},"404",-1),db=jt("p",{class:"text-zinc-300 text-lg mt-2"},"Страница не найдена",-1);function pb(e,t){const n=Vf("router-link");return wr(),Tr("div",hb,[fb,db,Yt(n,{to:"/shishkombt",class:"text-xl bg-white py-2 px-16 rounded-full mt-8"},{default:hc(()=>[Zf("Домой")]),_:1})])}const mb=Im(ub,[["render",pb]]),gb=kv({history:uv("/"),routes:[{path:"/shishkombt",name:"home",component:lb},{path:"/:pathMatch(.*)*",name:"notfound",component:mb}]}),il=dy(GA);il.use(gb);il.use(Ny);il.mount("#app");
