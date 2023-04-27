(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ur(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Hr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?io(r):Hr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(V(e))return e}}const no=/;(?![^(]*\))/g,ro=/:([^]+)/,ao=/\/\*.*?\*\//gs;function io(e){const t={};return e.replace(ao,"").split(no).forEach(n=>{if(n){const r=n.split(ro);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function $t(e){let t="";if(re(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=$t(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const so="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oo=Ur(so);function Ti(e){return!!e||e===""}const Sa=e=>re(e)?e:e==null?"":R(e)||V(e)&&(e.toString===Ri||!L(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!R(t)&&!Li(t)?String(t):t,q={},_t=[],Ce=()=>{},lo=()=>!1,fo=/^on[^a-z]/,Bn=e=>fo.test(e),$r=e=>e.startsWith("onUpdate:"),ce=Object.assign,Xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},co=Object.prototype.hasOwnProperty,Y=(e,t)=>co.call(e,t),R=Array.isArray,kt=e=>Un(e)==="[object Map]",Mi=e=>Un(e)==="[object Set]",L=e=>typeof e=="function",re=e=>typeof e=="string",Wr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Fi=e=>V(e)&&L(e.then)&&L(e.catch),Ri=Object.prototype.toString,Un=e=>Ri.call(e),uo=e=>Un(e).slice(8,-1),Li=e=>Un(e)==="[object Object]",Kr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},mo=/-(\w)/g,Pt=Hn(e=>e.replace(mo,(t,n)=>n?n.toUpperCase():"")),ho=/\B([A-Z])/g,gt=Hn(e=>e.replace(ho,"-$1").toLowerCase()),ji=Hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Hn(e=>e?`on${ji(e)}`:""),Nn=(e,t)=>!Object.is(e,t),ir=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},po=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ta;const go=()=>Ta||(Ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ke;class vo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function bo(e,t=ke){t&&t.active&&t.effects.push(e)}function yo(){return ke}const qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Di=e=>(e.w&Ze)>0,Yi=e=>(e.n&Ze)>0,xo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},wo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Di(a)&&!Yi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},gr=new WeakMap;let jt=0,Ze=1;const vr=30;let Ae;const ut=Symbol(""),br=Symbol("");class Vr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bo(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Je=!0,Ze=1<<++jt,jt<=vr?xo(this):Na(this),this.fn()}finally{jt<=vr&&wo(this),Ze=1<<--jt,Ae=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const zi=[];function Tt(){zi.push(Je),Je=!1}function Nt(){const e=zi.pop();Je=e===void 0?!0:e}function he(e,t,n){if(Je&&Ae){let r=gr.get(e);r||gr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=qr()),Bi(a)}}function Bi(e,t){let n=!1;jt<=vr?Yi(e)||(e.n|=Ze,n=!Di(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function ze(e,t,n,r,a,i){const s=gr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&R(e)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":R(e)?Kr(n)&&o.push(s.get("length")):(o.push(s.get(ut)),kt(e)&&o.push(s.get(br)));break;case"delete":R(e)||(o.push(s.get(ut)),kt(e)&&o.push(s.get(br)));break;case"set":kt(e)&&o.push(s.get(ut));break}if(o.length===1)o[0]&&yr(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);yr(qr(l))}}function yr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const _o=Ur("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wr)),ko=Jr(),Ao=Jr(!1,!0),Oo=Jr(!0),Fa=Eo();function Eo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,s=this.length;i<s;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt();const r=B(this)[t].apply(this,n);return Nt(),r}}),e}function Po(e){const t=B(this);return he(t,"has",e),t.hasOwnProperty(e)}function Jr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ho:Ki:t?Wi:Xi).get(r))return r;const s=R(r);if(!e){if(s&&Y(Fa,a))return Reflect.get(Fa,a,i);if(a==="hasOwnProperty")return Po}const o=Reflect.get(r,a,i);return(Wr(a)?Ui.has(a):_o(a))||(e||he(r,"get",a),t)?o:fe(o)?s&&Kr(a)?o:o.value:V(o)?e?qi(o):Qr(o):o}}const Co=Hi(),Io=Hi(!0);function Hi(e=!1){return function(n,r,a,i){let s=n[r];if(Xt(s)&&fe(s)&&!fe(a))return!1;if(!e&&(!xr(a)&&!Xt(a)&&(s=B(s),a=B(a)),!R(n)&&fe(s)&&!fe(a)))return s.value=a,!0;const o=R(n)&&Kr(r)?Number(r)<n.length:Y(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(o?Nn(a,s)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function So(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function To(e,t){const n=Reflect.has(e,t);return(!Wr(t)||!Ui.has(t))&&he(e,"has",t),n}function No(e){return he(e,"iterate",R(e)?"length":ut),Reflect.ownKeys(e)}const $i={get:ko,set:Co,deleteProperty:So,has:To,ownKeys:No},Mo={get:Oo,set(e,t){return!0},deleteProperty(e,t){return!0}},Fo=ce({},$i,{get:Ao,set:Io}),Gr=e=>e,$n=e=>Reflect.getPrototypeOf(e);function fn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:s}=$n(a),o=r?Gr:n?na:ta;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function cn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function un(e,t=!1){return e=e.__v_raw,!t&&he(B(e),"iterate",ut),Reflect.get(e,"size",e)}function Ra(e){e=B(e);const t=B(this);return $n(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function La(e,t){t=B(t);const n=B(this),{has:r,get:a}=$n(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Nn(t,s)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function ja(e){const t=B(this),{has:n,get:r}=$n(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Da(){const e=B(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function dn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=B(s),l=t?Gr:e?na:ta;return!e&&he(o,"iterate",ut),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function mn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),s=kt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?Gr:t?na:ta;return!t&&he(i,"iterate",l?br:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:o?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Ro(){const e={get(i){return fn(this,i)},get size(){return un(this)},has:cn,add:Ra,set:La,delete:ja,clear:Da,forEach:dn(!1,!1)},t={get(i){return fn(this,i,!1,!0)},get size(){return un(this)},has:cn,add:Ra,set:La,delete:ja,clear:Da,forEach:dn(!1,!0)},n={get(i){return fn(this,i,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:dn(!0,!1)},r={get(i){return fn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=mn(i,!1,!1),n[i]=mn(i,!0,!1),t[i]=mn(i,!1,!0),r[i]=mn(i,!0,!0)}),[e,n,t,r]}const[Lo,jo,Do,Yo]=Ro();function Zr(e,t){const n=t?e?Yo:Do:e?jo:Lo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const zo={get:Zr(!1,!1)},Bo={get:Zr(!1,!0)},Uo={get:Zr(!0,!1)},Xi=new WeakMap,Wi=new WeakMap,Ki=new WeakMap,Ho=new WeakMap;function $o(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xo(e){return e.__v_skip||!Object.isExtensible(e)?0:$o(uo(e))}function Qr(e){return Xt(e)?e:ea(e,!1,$i,zo,Xi)}function Wo(e){return ea(e,!1,Fo,Bo,Wi)}function qi(e){return ea(e,!0,Mo,Uo,Ki)}function ea(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Xo(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function At(e){return Xt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function xr(e){return!!(e&&e.__v_isShallow)}function Vi(e){return At(e)||Xt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Ji(e){return Mn(e,"__v_skip",!0),e}const ta=e=>V(e)?Qr(e):e,na=e=>V(e)?qi(e):e;function Ko(e){Je&&Ae&&(e=B(e),Bi(e.dep||(e.dep=qr())))}function qo(e,t){e=B(e);const n=e.dep;n&&yr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Vo(e){return fe(e)?e.value:e}const Jo={get:(e,t,n)=>Vo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Gi(e){return At(e)?e:new Proxy(e,Jo)}var Zi;class Go{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zi]=!1,this._dirty=!0,this.effect=new Vr(t,()=>{this._dirty||(this._dirty=!0,qo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Ko(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zi="__v_isReadonly";function Zo(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new Go(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Xn(i,t,n)}return a}function Ie(e,t,n,r){if(L(e)){const i=Ge(e,t,n,r);return i&&Fi(i)&&i.catch(s=>{Xn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function Xn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,s,o]);return}}Qo(e,n,a,r)}function Qo(e,t,n,r=!0){console.error(e)}let Wt=!1,wr=!1;const se=[];let Fe=0;const Ot=[];let Ye=null,ot=0;const Qi=Promise.resolve();let ra=null;function el(e){const t=ra||Qi;return e?t.then(this?e.bind(this):e):t}function tl(e){let t=Fe+1,n=se.length;for(;t<n;){const r=t+n>>>1;Kt(se[r])<e?t=r+1:n=r}return t}function aa(e){(!se.length||!se.includes(e,Wt&&e.allowRecurse?Fe+1:Fe))&&(e.id==null?se.push(e):se.splice(tl(e.id),0,e),es())}function es(){!Wt&&!wr&&(wr=!0,ra=Qi.then(ns))}function nl(e){const t=se.indexOf(e);t>Fe&&se.splice(t,1)}function rl(e){R(e)?Ot.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?ot+1:ot))&&Ot.push(e),es()}function Ya(e,t=Wt?Fe+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function ts(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>Kt(n)-Kt(r)),ot=0;ot<Ye.length;ot++)Ye[ot]();Ye=null,ot=0}}const Kt=e=>e.id==null?1/0:e.id,al=(e,t)=>{const n=Kt(e)-Kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ns(e){wr=!1,Wt=!0,se.sort(al);const t=Ce;try{for(Fe=0;Fe<se.length;Fe++){const n=se[Fe];n&&n.active!==!1&&Ge(n,null,14)}}finally{Fe=0,se.length=0,ts(),Wt=!1,ra=null,(se.length||Ot.length)&&ns()}}function il(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(k=>re(k)?k.trim():k)),m&&(a=n.map(po))}let o,l=r[o=ar(t)]||r[o=ar(Pt(t))];!l&&i&&(l=r[o=ar(gt(t))]),l&&Ie(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ie(c,e,6,a)}}function rs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!L(e)){const l=c=>{const d=rs(c,t,!0);d&&(o=!0,ce(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(V(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>s[l]=null):ce(s,i),V(e)&&r.set(e,s),s)}function Wn(e,t){return!e||!Bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,gt(t))||Y(e,t))}let Re=null,Kn=null;function Fn(e){const t=Re;return Re=e,Kn=e&&e.type.__scopeId||null,t}function sl(e){Kn=e}function ol(){Kn=null}function ll(e,t=Re,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ka(-1);const i=Fn(t);let s;try{s=e(...a)}finally{Fn(i),r._d&&Ka(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:F,inheritAttrs:N}=e;let z,w;const P=Fn(e);try{if(n.shapeFlag&4){const j=a||r;z=Me(d.call(j,j,m,i,k,v,F)),w=l}else{const j=t;z=Me(j.length>1?j(i,{attrs:l,slots:o,emit:c}):j(i,null)),w=t.props?l:fl(l)}}catch(j){zt.length=0,Xn(j,e,1),z=ge(mt)}let E=z;if(w&&N!==!1){const j=Object.keys(w),{shapeFlag:U}=E;j.length&&U&7&&(s&&j.some($r)&&(w=cl(w,s)),E=Ct(E,w))}return n.dirs&&(E=Ct(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),z=E,Fn(P),z}const fl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bn(n))&&((t||(t={}))[n]=e[n]);return t},cl=(e,t)=>{const n={};for(const r in e)(!$r(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ul(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(s[v]!==r[v]&&!Wn(c,v))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?za(r,s,c):!0:!!s;return!1}function za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Wn(n,i))return!0}return!1}function dl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ml=e=>e.__isSuspense;function hl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):rl(e)}function pl(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function En(e,t,n=!1){const r=ne||Re;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const hn={};function Pn(e,t,n){return as(e,t,n)}function as(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){const o=yo()===(ne==null?void 0:ne.scope)?ne:null;let l,c=!1,d=!1;if(fe(e)?(l=()=>e.value,c=xr(e)):At(e)?(l=()=>e,r=!0):R(e)?(d=!0,c=e.some(E=>At(E)||xr(E)),l=()=>e.map(E=>{if(fe(E))return E.value;if(At(E))return yt(E);if(L(E))return Ge(E,o,2)})):L(e)?t?l=()=>Ge(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return m&&m(),Ie(e,o,3,[v])}:l=Ce,t&&r){const E=l;l=()=>yt(E())}let m,v=E=>{m=w.onStop=()=>{Ge(E,o,4)}},k;if(Vt)if(v=Ce,t?n&&Ie(t,o,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=lf();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Ce;let F=d?new Array(e.length).fill(hn):hn;const N=()=>{if(w.active)if(t){const E=w.run();(r||c||(d?E.some((j,U)=>Nn(j,F[U])):Nn(E,F)))&&(m&&m(),Ie(t,o,3,[E,F===hn?void 0:d&&F[0]===hn?[]:F,v]),F=E)}else w.run()};N.allowRecurse=!!t;let z;a==="sync"?z=N:a==="post"?z=()=>me(N,o&&o.suspense):(N.pre=!0,o&&(N.id=o.uid),z=()=>aa(N));const w=new Vr(l,z);t?n?N():F=w.run():a==="post"?me(w.run.bind(w),o&&o.suspense):w.run();const P=()=>{w.stop(),o&&o.scope&&Xr(o.scope.effects,w)};return k&&k.push(P),P}function gl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?is(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const s=ne;It(this);const o=as(a,i.bind(r),n);return s?It(s):dt(),o}function is(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))yt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Mi(e)||kt(e))e.forEach(n=>{yt(n,t)});else if(Li(e))for(const n in e)yt(e[n],t);return e}function ia(e){return L(e)?{setup:e,name:e.name}:e}const Cn=e=>!!e.type.__asyncLoader,ss=e=>e.type.__isKeepAlive;function vl(e,t){os(e,"a",t)}function bl(e,t){os(e,"da",t)}function os(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ss(a.parent.vnode)&&yl(r,t,n,a),a=a.parent}}function yl(e,t,n,r){const a=qn(t,e,r,!0);ls(()=>{Xr(r[t],a)},n)}function qn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Tt(),It(n);const o=Ie(t,n,e,s);return dt(),Nt(),o});return r?a.unshift(i):a.push(i),i}}const $e=e=>(t,n=ne)=>(!Vt||e==="sp")&&qn(e,(...r)=>t(...r),n),xl=$e("bm"),wl=$e("m"),_l=$e("bu"),kl=$e("u"),Al=$e("bum"),ls=$e("um"),Ol=$e("sp"),El=$e("rtg"),Pl=$e("rtc");function Cl(e,t=ne){qn("ec",e,t)}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Tt(),Ie(l,n,8,[e.el,o,e,t]),Nt())}}const Il=Symbol();function or(e,t,n,r){let a;const i=n&&n[r];if(R(e)||re(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const _r=e=>e?xs(e)?fa(e)||e.proxy:_r(e.parent):null,Yt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_r(e.parent),$root:e=>_r(e.root),$emit:e=>e.emit,$options:e=>sa(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=el.bind(e.proxy)),$watch:e=>gl.bind(e)}),lr=(e,t)=>e!==q&&!e.__isScriptSetup&&Y(e,t),Sl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(lr(r,t))return s[t]=1,r[t];if(a!==q&&Y(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&Y(c,t))return s[t]=3,i[t];if(n!==q&&Y(n,t))return s[t]=4,n[t];kr&&(s[t]=0)}}const d=Yt[t];let m,v;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==q&&Y(n,t))return s[t]=4,n[t];if(v=l.config.globalProperties,Y(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return lr(a,t)?(a[t]=n,!0):r!==q&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==q&&Y(e,s)||lr(t,s)||(o=i[0])&&Y(o,s)||Y(r,s)||Y(Yt,s)||Y(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let kr=!0;function Tl(e){const t=sa(e),n=e.proxy,r=e.ctx;kr=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:F,activated:N,deactivated:z,beforeDestroy:w,beforeUnmount:P,destroyed:E,unmounted:j,render:U,renderTracked:ue,renderTriggered:ie,errorCaptured:we,serverPrefetch:be,expose:je,inheritAttrs:Ft,components:an,directives:sn,filters:tr}=t;if(c&&Nl(c,r,null,e.appContext.config.unwrapInjectedRef),s)for(const J in s){const $=s[J];L($)&&(r[J]=$.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=Qr(J))}if(kr=!0,i)for(const J in i){const $=i[J],nt=L($)?$.bind(n,n):L($.get)?$.get.bind(n,n):Ce,on=!L($)&&L($.set)?$.set.bind(n):Ce,rt=xe({get:nt,set:on});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Se=>rt.value=Se})}if(o)for(const J in o)fs(o[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach($=>{pl($,J[$])})}d&&Ba(d,e,"c");function oe(J,$){R($)?$.forEach(nt=>J(nt.bind(n))):$&&J($.bind(n))}if(oe(xl,m),oe(wl,v),oe(_l,k),oe(kl,F),oe(vl,N),oe(bl,z),oe(Cl,we),oe(Pl,ue),oe(El,ie),oe(Al,P),oe(ls,j),oe(Ol,be),R(je))if(je.length){const J=e.exposed||(e.exposed={});je.forEach($=>{Object.defineProperty(J,$,{get:()=>n[$],set:nt=>n[$]=nt})})}else e.exposed||(e.exposed={});U&&e.render===Ce&&(e.render=U),Ft!=null&&(e.inheritAttrs=Ft),an&&(e.components=an),sn&&(e.directives=sn)}function Nl(e,t,n=Ce,r=!1){R(e)&&(e=Ar(e));for(const a in e){const i=e[a];let s;V(i)?"default"in i?s=En(i.from||a,i.default,!0):s=En(i.from||a):s=En(i),fe(s)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[a]=s}}function Ba(e,t,n){Ie(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fs(e,t,n,r){const a=r.includes(".")?is(n,r):()=>n[r];if(re(e)){const i=t[e];L(i)&&Pn(a,i)}else if(L(e))Pn(a,e.bind(n));else if(V(e))if(R(e))e.forEach(i=>fs(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Pn(a,i,e)}}function sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Rn(l,c,s,!0)),Rn(l,t,s)),V(t)&&i.set(t,l),l}function Rn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Rn(e,i,n,!0),a&&a.forEach(s=>Rn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Ml[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Ml={data:Ua,props:st,emits:st,methods:st,computed:st,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:st,directives:st,watch:Rl,provide:Ua,inject:Fl};function Ua(e,t){return t?e?function(){return ce(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Fl(e,t){return st(Ar(e),Ar(t))}function Ar(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function st(e,t){return e?ce(ce(Object.create(null),e),t):t}function Rl(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Ll(e,t,n,r=!1){const a={},i={};Mn(i,Jn,1),e.propsDefaults=Object.create(null),cs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Wo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=B(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Wn(e.emitsOptions,v))continue;const k=t[v];if(l)if(Y(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const F=Pt(v);a[F]=Or(l,o,F,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{cs(e,t,a,i)&&(c=!0);let d;for(const m in o)(!t||!Y(t,m)&&((d=gt(m))===m||!Y(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Or(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!Y(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function cs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(On(l))continue;const c=t[l];let d;a&&Y(a,d=Pt(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:Wn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=B(n),c=o||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Or(a,l,m,c[m],e,!Y(c,m))}}return s}function Or(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=Y(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(It(a),r=c[n]=l.call(null,t),dt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===gt(n))&&(r=!0))}return r}function us(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=us(m,t,!0);ce(s,v),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,_t),_t;if(R(i))for(let d=0;d<i.length;d++){const m=Pt(i[d]);Ha(m)&&(s[m]=q)}else if(i)for(const d in i){const m=Pt(d);if(Ha(m)){const v=i[d],k=s[m]=R(v)||L(v)?{type:v}:Object.assign({},v);if(k){const F=Wa(Boolean,k.type),N=Wa(String,k.type);k[0]=F>-1,k[1]=N<0||F<N,(F>-1||Y(k,"default"))&&o.push(m)}}}const c=[s,o];return V(e)&&r.set(e,c),c}function Ha(e){return e[0]!=="$"}function $a(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Xa(e,t){return $a(e)===$a(t)}function Wa(e,t){return R(t)?t.findIndex(n=>Xa(n,e)):L(t)&&Xa(t,e)?0:-1}const ds=e=>e[0]==="_"||e==="$stable",oa=e=>R(e)?e.map(Me):[Me(e)],Dl=(e,t,n)=>{if(t._n)return t;const r=ll((...a)=>oa(t(...a)),n);return r._c=!1,r},ms=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ds(a))continue;const i=e[a];if(L(i))t[a]=Dl(a,i,r);else if(i!=null){const s=oa(i);t[a]=()=>s}}},hs=(e,t)=>{const n=oa(t);e.slots.default=()=>n},Yl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Mn(t,"_",n)):ms(t,e.slots={})}else e.slots={},t&&hs(e,t);Mn(e.slots,Jn,1)},zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ce(a,t),!n&&o===1&&delete a._):(i=!t.$stable,ms(t,a)),s=t}else t&&(hs(e,t),s={default:1});if(i)for(const o in a)!ds(o)&&!(o in s)&&delete a[o]};function ps(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bl=0;function Ul(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!V(a)&&(a=null);const i=ps(),s=new Set;let o=!1;const l=i.app={_uid:Bl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&L(c.install)?(s.add(c),c.install(l,...d)):L(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const v=ge(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),o=!0,l._container=c,c.__vue_app__=l,fa(v.component)||v.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Er(e,t,n,r,a=!1){if(R(e)){e.forEach((v,k)=>Er(v,t&&(R(t)?t[k]:t),n,r,a));return}if(Cn(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===q?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,Y(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),L(l))Ge(l,o,12,[s,d]);else{const v=re(l),k=fe(l);if(v||k){const F=()=>{if(e.f){const N=v?Y(m,l)?m[l]:d[l]:l.value;a?R(N)&&Xr(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],Y(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=s,Y(m,l)&&(m[l]=s)):k&&(l.value=s,e.k&&(d[e.k]=s))};s?(F.id=-1,me(F,n)):F()}}}const me=hl;function Hl(e){return $l(e)}function $l(e,t){const n=go();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ce,insertStaticContent:F}=e,N=(f,u,h,g=null,p=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Lt(f,u)&&(g=ln(f),Se(f,p,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=u;switch(b){case Vn:z(f,u,h,g);break;case mt:w(f,u,h,g);break;case fr:f==null&&P(u,h,g,A);break;case ye:an(f,u,h,g,p,x,A,y,_);break;default:C&1?U(f,u,h,g,p,x,A,y,_):C&6?sn(f,u,h,g,p,x,A,y,_):(C&64||C&128)&&b.process(f,u,h,g,p,x,A,y,_,vt)}S!=null&&p&&Er(S,f&&f.ref,x,u||f,!u)},z=(f,u,h,g)=>{if(f==null)r(u.el=o(u.children),h,g);else{const p=u.el=f.el;u.children!==f.children&&c(p,u.children)}},w=(f,u,h,g)=>{f==null?r(u.el=l(u.children||""),h,g):u.el=f.el},P=(f,u,h,g)=>{[f.el,f.anchor]=F(f.children,u,h,g,f.el,f.anchor)},E=({el:f,anchor:u},h,g)=>{let p;for(;f&&f!==u;)p=v(f),r(f,h,g),f=p;r(u,h,g)},j=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=v(f),a(f),f=h;a(u)},U=(f,u,h,g,p,x,A,y,_)=>{A=A||u.type==="svg",f==null?ue(u,h,g,p,x,A,y,_):be(f,u,p,x,A,y,_)},ue=(f,u,h,g,p,x,A,y)=>{let _,b;const{type:S,props:C,shapeFlag:T,transition:M,dirs:D}=f;if(_=f.el=s(f.type,x,C&&C.is,C),T&8?d(_,f.children):T&16&&we(f.children,_,null,g,p,x&&S!=="foreignObject",A,y),D&&at(f,null,g,"created"),ie(_,f,f.scopeId,A,g),C){for(const H in C)H!=="value"&&!On(H)&&i(_,H,null,C[H],x,f.children,g,p,De);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ne(b,g,f)}D&&at(f,null,g,"beforeMount");const X=(!p||p&&!p.pendingBranch)&&M&&!M.persisted;X&&M.beforeEnter(_),r(_,u,h),((b=C&&C.onVnodeMounted)||X||D)&&me(()=>{b&&Ne(b,g,f),X&&M.enter(_),D&&at(f,null,g,"mounted")},p)},ie=(f,u,h,g,p)=>{if(h&&k(f,h),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(p){let x=p.subTree;if(u===x){const A=p.vnode;ie(f,A,A.scopeId,A.slotScopeIds,p.parent)}}},we=(f,u,h,g,p,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Ve(f[b]):Me(f[b]);N(null,S,u,h,g,p,x,A,y)}},be=(f,u,h,g,p,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const C=f.props||q,T=u.props||q;let M;h&&it(h,!1),(M=T.onVnodeBeforeUpdate)&&Ne(M,h,u,f),S&&at(u,f,h,"beforeUpdate"),h&&it(h,!0);const D=p&&u.type!=="foreignObject";if(b?je(f.dynamicChildren,b,y,h,g,D,x):A||$(f,u,y,null,h,g,D,x,!1),_>0){if(_&16)Ft(y,u,C,T,h,g,p);else if(_&2&&C.class!==T.class&&i(y,"class",null,T.class,p),_&4&&i(y,"style",C.style,T.style,p),_&8){const X=u.dynamicProps;for(let H=0;H<X.length;H++){const ee=X[H],_e=C[ee],bt=T[ee];(bt!==_e||ee==="value")&&i(y,ee,_e,bt,p,f.children,h,g,De)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Ft(y,u,C,T,h,g,p);((M=T.onVnodeUpdated)||S)&&me(()=>{M&&Ne(M,h,u,f),S&&at(u,f,h,"updated")},g)},je=(f,u,h,g,p,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===ye||!Lt(_,b)||_.shapeFlag&70)?m(_.el):h;N(_,b,S,null,g,p,x,A,!0)}},Ft=(f,u,h,g,p,x,A)=>{if(h!==g){if(h!==q)for(const y in h)!On(y)&&!(y in g)&&i(f,y,h[y],null,A,u.children,p,x,De);for(const y in g){if(On(y))continue;const _=g[y],b=h[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,p,x,De)}"value"in g&&i(f,"value",h.value,g.value)}},an=(f,u,h,g,p,x,A,y,_)=>{const b=u.el=f?f.el:o(""),S=u.anchor=f?f.anchor:o("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:M}=u;M&&(y=y?y.concat(M):M),f==null?(r(b,h,g),r(S,h,g),we(u.children,h,S,p,x,A,y,_)):C>0&&C&64&&T&&f.dynamicChildren?(je(f.dynamicChildren,T,h,p,x,A,y),(u.key!=null||p&&u===p.subTree)&&gs(f,u,!0)):$(f,u,h,S,p,x,A,y,_)},sn=(f,u,h,g,p,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?p.ctx.activate(u,h,g,A,_):tr(u,h,g,p,x,A,_):Aa(f,u,_)},tr=(f,u,h,g,p,x,A)=>{const y=f.component=ef(f,g,p);if(ss(f)&&(y.ctx.renderer=vt),tf(y),y.asyncDep){if(p&&p.registerDep(y,oe),!f.el){const _=y.subTree=ge(mt);w(null,_,u,h)}return}oe(y,f,u,h,p,x,A)},Aa=(f,u,h)=>{const g=u.component=f.component;if(ul(f,u,h))if(g.asyncDep&&!g.asyncResolved){J(g,u,h);return}else g.next=u,nl(g.update),g.update();else u.el=f.el,g.vnode=u},oe=(f,u,h,g,p,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:C,u:T,parent:M,vnode:D}=f,X=S,H;it(f,!1),S?(S.el=D.el,J(f,S,A)):S=D,C&&ir(C),(H=S.props&&S.props.onVnodeBeforeUpdate)&&Ne(H,M,S,D),it(f,!0);const ee=sr(f),_e=f.subTree;f.subTree=ee,N(_e,ee,m(_e.el),ln(_e),f,p,x),S.el=ee.el,X===null&&dl(f,ee.el),T&&me(T,p),(H=S.props&&S.props.onVnodeUpdated)&&me(()=>Ne(H,M,S,D),p)}else{let S;const{el:C,props:T}=u,{bm:M,m:D,parent:X}=f,H=Cn(u);if(it(f,!1),M&&ir(M),!H&&(S=T&&T.onVnodeBeforeMount)&&Ne(S,X,u),it(f,!0),C&&rr){const ee=()=>{f.subTree=sr(f),rr(C,f.subTree,f,p,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=sr(f);N(null,ee,h,g,f,p,x),u.el=ee.el}if(D&&me(D,p),!H&&(S=T&&T.onVnodeMounted)){const ee=u;me(()=>Ne(S,X,ee),p)}(u.shapeFlag&256||X&&Cn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&me(f.a,p),f.isMounted=!0,u=h=g=null}},_=f.effect=new Vr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,it(f,!0),b()},J=(f,u,h)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,jl(f,u.props,g,h),zl(f,u.children,h),Tt(),Ya(),Nt()},$=(f,u,h,g,p,x,A,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=u.children,{patchFlag:T,shapeFlag:M}=u;if(T>0){if(T&128){on(b,C,h,g,p,x,A,y,_);return}else if(T&256){nt(b,C,h,g,p,x,A,y,_);return}}M&8?(S&16&&De(b,p,x),C!==b&&d(h,C)):S&16?M&16?on(b,C,h,g,p,x,A,y,_):De(b,p,x,!0):(S&8&&d(h,""),M&16&&we(C,h,g,p,x,A,y,_))},nt=(f,u,h,g,p,x,A,y,_)=>{f=f||_t,u=u||_t;const b=f.length,S=u.length,C=Math.min(b,S);let T;for(T=0;T<C;T++){const M=u[T]=_?Ve(u[T]):Me(u[T]);N(f[T],M,h,null,p,x,A,y,_)}b>S?De(f,p,x,!0,!1,C):we(u,h,g,p,x,A,y,_,C)},on=(f,u,h,g,p,x,A,y,_)=>{let b=0;const S=u.length;let C=f.length-1,T=S-1;for(;b<=C&&b<=T;){const M=f[b],D=u[b]=_?Ve(u[b]):Me(u[b]);if(Lt(M,D))N(M,D,h,null,p,x,A,y,_);else break;b++}for(;b<=C&&b<=T;){const M=f[C],D=u[T]=_?Ve(u[T]):Me(u[T]);if(Lt(M,D))N(M,D,h,null,p,x,A,y,_);else break;C--,T--}if(b>C){if(b<=T){const M=T+1,D=M<S?u[M].el:g;for(;b<=T;)N(null,u[b]=_?Ve(u[b]):Me(u[b]),h,D,p,x,A,y,_),b++}}else if(b>T)for(;b<=C;)Se(f[b],p,x,!0),b++;else{const M=b,D=b,X=new Map;for(b=D;b<=T;b++){const pe=u[b]=_?Ve(u[b]):Me(u[b]);pe.key!=null&&X.set(pe.key,b)}let H,ee=0;const _e=T-D+1;let bt=!1,Pa=0;const Rt=new Array(_e);for(b=0;b<_e;b++)Rt[b]=0;for(b=M;b<=C;b++){const pe=f[b];if(ee>=_e){Se(pe,p,x,!0);continue}let Te;if(pe.key!=null)Te=X.get(pe.key);else for(H=D;H<=T;H++)if(Rt[H-D]===0&&Lt(pe,u[H])){Te=H;break}Te===void 0?Se(pe,p,x,!0):(Rt[Te-D]=b+1,Te>=Pa?Pa=Te:bt=!0,N(pe,u[Te],h,null,p,x,A,y,_),ee++)}const Ca=bt?Xl(Rt):_t;for(H=Ca.length-1,b=_e-1;b>=0;b--){const pe=D+b,Te=u[pe],Ia=pe+1<S?u[pe+1].el:g;Rt[b]===0?N(null,Te,h,Ia,p,x,A,y,_):bt&&(H<0||b!==Ca[H]?rt(Te,h,Ia,2):H--)}}},rt=(f,u,h,g,p=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,h,g);return}if(b&128){f.suspense.move(u,h,g);return}if(b&64){A.move(f,u,h,vt);return}if(A===ye){r(x,u,h);for(let C=0;C<_.length;C++)rt(_[C],u,h,g);r(f.anchor,u,h);return}if(A===fr){E(f,u,h);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,h),me(()=>y.enter(x),p);else{const{leave:C,delayLeave:T,afterLeave:M}=y,D=()=>r(x,u,h),X=()=>{C(x,()=>{D(),M&&M()})};T?T(x,D,X):X()}else r(x,u,h)},Se=(f,u,h,g=!1,p=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:T}=f;if(y!=null&&Er(y,null,h,f,!0),S&256){u.ctx.deactivate(f);return}const M=S&1&&T,D=!Cn(f);let X;if(D&&(X=A&&A.onVnodeBeforeUnmount)&&Ne(X,u,f),S&6)to(f.component,h,g);else{if(S&128){f.suspense.unmount(h,g);return}M&&at(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,h,p,vt,g):b&&(x!==ye||C>0&&C&64)?De(b,u,h,!1,!0):(x===ye&&C&384||!p&&S&16)&&De(_,u,h),g&&Oa(f)}(D&&(X=A&&A.onVnodeUnmounted)||M)&&me(()=>{X&&Ne(X,u,f),M&&at(f,null,u,"unmounted")},h)},Oa=f=>{const{type:u,el:h,anchor:g,transition:p}=f;if(u===ye){eo(h,g);return}if(u===fr){j(f);return}const x=()=>{a(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:A,delayLeave:y}=p,_=()=>A(h,x);y?y(f.el,x,_):_()}else x()},eo=(f,u)=>{let h;for(;f!==u;)h=v(f),a(f),f=h;a(u)},to=(f,u,h)=>{const{bum:g,scope:p,update:x,subTree:A,um:y}=f;g&&ir(g),p.stop(),x&&(x.active=!1,Se(A,f,u,h)),y&&me(y,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},De=(f,u,h,g=!1,p=!1,x=0)=>{for(let A=x;A<f.length;A++)Se(f[A],u,h,g,p)},ln=f=>f.shapeFlag&6?ln(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ea=(f,u,h)=>{f==null?u._vnode&&Se(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,h),Ya(),ts(),u._vnode=f},vt={p:N,um:Se,m:rt,r:Oa,mt:tr,mc:we,pc:$,pbc:je,n:ln,o:e};let nr,rr;return t&&([nr,rr]=t(vt)),{render:Ea,hydrate:nr,createApp:Ul(Ea,nr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function gs(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Ve(a[i]),o.el=s.el),n||gs(s,o)),o.type===Vn&&(o.el=s.el)}}function Xl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Wl=e=>e.__isTeleport,ye=Symbol(void 0),Vn=Symbol(void 0),mt=Symbol(void 0),fr=Symbol(void 0),zt=[];let Ee=null;function G(e=!1){zt.push(Ee=e?null:[])}function Kl(){zt.pop(),Ee=zt[zt.length-1]||null}let qt=1;function Ka(e){qt+=e}function vs(e){return e.dynamicChildren=qt>0?Ee||_t:null,Kl(),qt>0&&Ee&&Ee.push(e),e}function te(e,t,n,r,a,i){return vs(Q(e,t,n,r,a,i,!0))}function bs(e,t,n,r,a){return vs(ge(e,t,n,r,a,!0))}function Pr(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",ys=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>e!=null?re(e)||fe(e)||L(e)?{i:Re,r:e,k:t,f:!!n}:e:null;function Q(e,t=null,n=null,r=0,a=null,i=e===ye?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ys(t),ref:t&&In(t),scopeId:Kn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Re};return o?(la(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),qt>0&&!s&&Ee&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ee.push(l),l}const ge=ql;function ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Il)&&(e=mt),Pr(e)){const o=Ct(e,t,!0);return n&&la(o,n),qt>0&&!i&&Ee&&(o.shapeFlag&6?Ee[Ee.indexOf(e)]=o:Ee.push(o)),o.patchFlag|=-2,o}if(sf(e)&&(e=e.__vccOpts),t){t=Vl(t);let{class:o,style:l}=t;o&&!re(o)&&(t.class=$t(o)),V(l)&&(Vi(l)&&!R(l)&&(l=ce({},l)),t.style=Hr(l))}const s=re(e)?1:ml(e)?128:Wl(e)?64:V(e)?4:L(e)?2:0;return Q(e,t,n,r,a,s,i,!0)}function Vl(e){return e?Vi(e)||Jn in e?ce({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?Gl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&ys(o),ref:t&&t.ref?n&&a?R(a)?a.concat(In(t)):[a,In(t)]:In(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Jl(e=" ",t=0){return ge(Vn,null,e,t)}function qa(e="",t=!1){return t?(G(),bs(mt,null,e)):ge(mt,null,e)}function Me(e){return e==null||typeof e=="boolean"?ge(mt):R(e)?ge(ye,null,e.slice()):typeof e=="object"?Ve(e):ge(Vn,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function la(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),la(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Jn in t)?t._ctx=Re:a===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),r&64?(n=16,t=[Jl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=$t([t.class,r.class]));else if(a==="style")t.style=Hr([t.style,r.style]);else if(Bn(a)){const i=t[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Ie(e,t,7,[n,r])}const Zl=ps();let Ql=0;function ef(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Zl,i={uid:Ql++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new vo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:us(r,a),emitsOptions:rs(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const It=e=>{ne=e,e.scope.on()},dt=()=>{ne&&ne.scope.off(),ne=null};function xs(e){return e.vnode.shapeFlag&4}let Vt=!1;function tf(e,t=!1){Vt=t;const{props:n,children:r}=e.vnode,a=xs(e);Ll(e,n,a,t),Yl(e,r);const i=a?nf(e,t):void 0;return Vt=!1,i}function nf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ji(new Proxy(e.ctx,Sl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?af(e):null;It(e),Tt();const i=Ge(r,e,0,[e.props,a]);if(Nt(),dt(),Fi(i)){if(i.then(dt,dt),t)return i.then(s=>{Va(e,s,t)}).catch(s=>{Xn(s,e,0)});e.asyncDep=i}else Va(e,i,t)}else ws(e,t)}function Va(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Gi(t)),ws(e,n)}let Ja;function ws(e,t,n){const r=e.type;if(!e.render){if(!t&&Ja&&!r.render){const a=r.template||sa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ce(ce({isCustomElement:i,delimiters:o},s),l);r.render=Ja(a,c)}}e.render=r.render||Ce}It(e),Tt(),Tl(e),Nt(),dt()}function rf(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function af(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=rf(e))},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gi(Ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yt)return Yt[n](e)},has(t,n){return n in t||n in Yt}}))}function sf(e){return L(e)&&"__vccOpts"in e}const xe=(e,t)=>Zo(e,t,Vt);function _s(e,t,n){const r=arguments.length;return r===2?V(t)&&!R(t)?Pr(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pr(n)&&(n=[n]),ge(e,t,n))}const of=Symbol(""),lf=()=>En(of),ff="3.2.47",cf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,Ga=lt&&lt.createElement("template"),uf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(cf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ga.innerHTML=r?`<svg>${e}</svg>`:e;const o=Ga.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function df(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function mf(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Cr(r,i,"");for(const i in n)Cr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Za=/\s*!important$/;function Cr(e,t,n){if(R(n))n.forEach(r=>Cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hf(e,t);Za.test(n)?e.setProperty(gt(r),n.replace(Za,""),"important"):e[r]=n}}const Qa=["Webkit","Moz","ms"],cr={};function hf(e,t){const n=cr[t];if(n)return n;let r=Pt(t);if(r!=="filter"&&r in e)return cr[t]=r;r=ji(r);for(let a=0;a<Qa.length;a++){const i=Qa[a]+r;if(i in e)return cr[t]=i}return t}const ei="http://www.w3.org/1999/xlink";function pf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ei,t.slice(6,t.length)):e.setAttributeNS(ei,t,n);else{const i=oo(t);n==null||i&&!Ti(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ti(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function vf(e,t,n,r){e.addEventListener(t,n,r)}function bf(e,t,n,r){e.removeEventListener(t,n,r)}function yf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=xf(t);if(r){const c=i[t]=kf(r,a);vf(e,o,c,l)}else s&&(bf(e,o,s,l),i[t]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;function xf(e){let t;if(ti.test(e)){t={};let r;for(;r=e.match(ti);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let ur=0;const wf=Promise.resolve(),_f=()=>ur||(wf.then(()=>ur=0),ur=Date.now());function kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ie(Af(r,n.value),t,5,[r])};return n.value=e,n.attached=_f(),n}function Af(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ni=/^on[a-z]/,Of=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?df(e,r,a):t==="style"?mf(e,n,r):Bn(t)?$r(t)||yf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ef(e,t,r,a))?gf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pf(e,t,r,a))};function Ef(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ni.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ni.test(t)&&re(n)?!1:t in e}const Pf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pn=(e,t)=>n=>{if(!("key"in n))return;const r=gt(n.key);if(t.some(a=>a===r||Pf[a]===r))return e(n)},Cf=ce({patchProp:Of},uf);let ri;function If(){return ri||(ri=Hl(Cf))}const Sf=(...e)=>{const t=If().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Tf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Tf(e){return re(e)?document.querySelector(e):e}const ks=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Nf={name:"Board",data(){return{board:[],gameStarted:!1,playerX:0,playerY:0,treasureX:0,treasureY:0,movementAvailable:0,coin1X:0,coin1Y:0,coin2X:0,coin2Y:0,coin3X:0,coin3Y:0,win:!1,loss:!1,mode:0,modes:["Treasure Hunt","Escape","Endless"],coins:0,treasure:!1}},methods:{startGame(){this.board=[],this.playerX=0,this.playerY=0,this.coin1X=0,this.coin1Y=0,this.coin2X=0,this.coin2Y=0,this.coin3X=0,this.coin3Y=0,this.coins=0,this.treasure=!1,this.win=!1,this.loss=!1,this.generateBoard(),this.placePlayer()},generateBoard(){for(let e=0;e<10;e++){let t=[];for(let n=0;n<10;n++)t.push(this.rand(5,1));this.board.push(t)}},move(e,t){if(this.evaluateMovement(e,t)){switch(e){case"up":this.playerY-=t;break;case"left":this.playerX-=t;break;case"right":this.playerX+=t;break;case"down":this.playerY+=t}const n=this.board[this.playerY][this.playerX];this.movementAvailable=n,this.board[this.playerY][this.playerX]=null,this.playerX==this.treasureX&&this.playerY==this.treasureY&&(this.treaure=!0),this.playerX==this.coin1X&&this.playerY==this.coin1Y&&(this.coin1X=null,this.coin1Y==null,this.coins++),this.playerX==this.coin2X&&this.playerY==this.coin2Y&&(this.coin2X=null,this.coin2Y==null,this.coins++),this.playerX==this.coin3X&&this.playerY==this.coin3Y&&(this.coin3X=null,this.coin3Y==null,this.coins++),this.coins==3&&this.treasure==!0&&(this.win=!0),this.playerMovement===null&&(this.lose=!0)}},evaluateMovement(e,t){let n=!0,r=this.playerX,a=this.playerY;switch(e){case"up":n=a-t>=0&&this.board[a-t][r]>=0;break;case"left":n=r-t>=0&&this.board[r-t][a]>=0;break;case"right":n=r+t<10&&this.board[r+t][a]>=0;break;case"down":n=a+t<10&&this.board[a+t][r]>=0}return n},placePlayer(){this.playerX=this.rand(10,0),this.playerY=this.rand(10,0);const e=this.board[this.playerY][this.playerX];this.movementAvailable=e,this.board[this.playerY][this.playerX]=null,this.setBoardPieces()},rand(e,t){return Math.floor(Math.random()*e)+t},setBoardPieces(){switch(this.mode){case 0:this.treasureX=this.rand(10,0),this.treasureY=this.rand(10,0),this.coin1X=this.rand(10,0),this.coin1Y=this.rand(10,0),this.coin2X=this.rand(10,0),this.coin2Y=this.rand(10,0),this.coin3X=this.rand(10,0),this.coin3Y=this.rand(10,0);break}this.playerX==this.treasureX&&this.playerY==this.treasureY||this.playerX==this.coin1X&&this.playerY==this.coin1Y||this.playerX==this.coin2X&&this.playerY==this.coin2Y||this.playerX==this.coin3X&&this.playerY==this.coin3Y?this.setBoardPieces():this.gameStarted=!0}}},Xe=e=>(sl("data-v-160fe0e7"),e=e(),ol(),e),Mf=Xe(()=>Q("h1",null,"Board",-1)),Ff={key:0,id:"boardContainer",class:"d-flex flex-column align-items-center",style:{width:"300px"}},Rf={key:0},Lf={key:1},jf={class:"d-flex mb-5",style:{"min-height":"40px"}},Df={key:1,class:"fa-solid fa-dragon",id:"hero"},Yf={id:"controls",class:"d-flex w-100 mt-5 flex-column align-items-center justify-content-center"},zf={class:"row w-100 px-5"},Bf=Xe(()=>Q("div",{class:"col-4"},null,-1)),Uf=Xe(()=>Q("i",{class:"fa-solid fa-arrow-up"},null,-1)),Hf=[Uf],$f={key:1,class:"col-4"},Xf=Xe(()=>Q("div",{class:"col-4"},null,-1)),Wf={class:"row w-100 px-5"},Kf=Xe(()=>Q("i",{class:"fa-solid fa-arrow-left"},null,-1)),qf=[Kf],Vf={key:1,class:"col-4"},Jf={class:"col-4 d-flex justify-content-center"},Gf={class:"fw-bold fs-3"},Zf=Xe(()=>Q("i",{class:"fa-solid fa-arrow-right"},null,-1)),Qf=[Zf],ec={key:3,class:"col-4"},tc={class:"row w-100 px-5"},nc=Xe(()=>Q("div",{class:"col-4"},null,-1)),rc=Xe(()=>Q("i",{class:"fa-solid fa-arrow-down"},null,-1)),ac=[rc],ic={key:1,class:"col-4"},sc=Xe(()=>Q("div",{class:"col-4"},null,-1));function oc(e,t,n,r,a,i){return G(),te("main",{onKeydown:[t[5]||(t[5]=pn(s=>i.move("up",a.movementAvailable),["up"])),t[6]||(t[6]=pn(s=>i.move("left",a.movementAvailable),["left"])),t[7]||(t[7]=pn(s=>i.move("right",a.movementAvailable),["right"])),t[8]||(t[8]=pn(s=>i.move("down",a.movementAvailable),["down"]))]},[Mf,Q("button",{onClick:t[0]||(t[0]=(...s)=>i.startGame&&i.startGame(...s)),class:"btn btn-primary mb-5"},"Play"),a.board.length>0?(G(),te("div",Ff,[a.win?(G(),te("h1",Rf,"You Win!")):a.loss?(G(),te("h1",Lf,"You Lose!")):qa("",!0),Q("div",jf,[(G(!0),te(ye,null,or(a.coins,s=>(G(),te("span",{key:s,class:"bigCoin"}))),128))]),Q("table",null,[Q("tbody",null,[(G(!0),te(ye,null,or(a.board,(s,o)=>(G(),te("tr",{key:o},[(G(!0),te(ye,null,or(s,(l,c)=>(G(),te("td",{key:o*10+c,class:$t(i.rand(2,0)==1?"dirt1":"dirt2")},[a.playerX!==c||a.playerY!==o?(G(),te("span",{key:0,class:$t(a.coin1X==c&&a.coin1Y==o||a.coin2X==c&&a.coin2Y==o||a.coin3X==c&&a.coin3Y==o?"coin":"")},Sa(l),3)):(G(),te("i",Df))],2))),128))]))),128))])]),Q("div",Yf,[Q("div",zf,[Bf,i.evaluateMovement("up",a.movementAvailable)?(G(),te("button",{key:0,onClick:t[1]||(t[1]=s=>i.move("up",a.movementAvailable)),class:"col-4 btn btn-primary"},Hf)):(G(),te("div",$f)),Xf]),Q("div",Wf,[i.evaluateMovement("left",a.movementAvailable)?(G(),te("button",{key:0,onClick:t[2]||(t[2]=s=>i.move("left",a.movementAvailable)),class:"col-4 btn btn-primary"},qf)):(G(),te("div",Vf)),Q("div",Jf,[Q("h4",Gf,Sa(a.movementAvailable),1)]),i.evaluateMovement("right",a.movementAvailable)?(G(),te("button",{key:2,onClick:t[3]||(t[3]=s=>i.move("right",a.movementAvailable)),class:"col-4 btn btn-primary"},Qf)):(G(),te("div",ec))]),Q("div",tc,[nc,i.evaluateMovement("down",a.movementAvailable)?(G(),te("button",{key:0,onClick:t[4]||(t[4]=s=>i.move("down",a.movementAvailable)),class:"col-4 btn btn-primary"},ac)):(G(),te("div",ic)),sc])])])):qa("",!0)],32)}const lc=ks(Nf,[["render",oc],["__scopeId","data-v-160fe0e7"]]);const fc={__name:"App",setup(e){return(t,n)=>(G(),bs(lc))}},cc=ks(fc,[["__scopeId","data-v-d132e1a8"]]);function ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ai(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(e){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function uc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dc(e,t,n){return t&&ii(e.prototype,t),n&&ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ca(e,t){return hc(e)||gc(e,t)||As(e,t)||bc()}function tn(e){return mc(e)||pc(e)||As(e)||vc()}function mc(e){if(Array.isArray(e))return Ir(e)}function hc(e){if(Array.isArray(e))return e}function pc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function As(e,t){if(e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var si=function(){},ua={},Os={},Es=null,Ps={mark:si,measure:si};try{typeof window<"u"&&(ua=window),typeof document<"u"&&(Os=document),typeof MutationObserver<"u"&&(Es=MutationObserver),typeof performance<"u"&&(Ps=performance)}catch{}var yc=ua.navigator||{},oi=yc.userAgent,li=oi===void 0?"":oi,Qe=ua,K=Os,fi=Es,gn=Ps;Qe.document;var We=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",Cs=~li.indexOf("MSIE")||~li.indexOf("Trident/"),vn,bn,yn,xn,wn,Be="___FONT_AWESOME___",Sr=16,Is="fa",Ss="svg-inline--fa",ht="data-fa-i2svg",Tr="data-fa-pseudo-element",xc="data-fa-pseudo-element-pending",da="data-prefix",ma="data-icon",ci="fontawesome-i2svg",wc="async",_c=["HTML","HEAD","STYLE","SCRIPT"],Ts=function(){try{return!0}catch{return!1}}(),W="classic",Z="sharp",ha=[W,Z];function nn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[W]}})}var Jt=nn((vn={},ae(vn,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(vn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),vn)),Gt=nn((bn={},ae(bn,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(bn,Z,{solid:"fass",regular:"fasr",light:"fasl"}),bn)),Zt=nn((yn={},ae(yn,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(yn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),yn)),kc=nn((xn={},ae(xn,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(xn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xn)),Ac=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ns="fa-layers-text",Oc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ec=nn((wn={},ae(wn,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(wn,Z,{900:"fass",400:"fasr",300:"fasl"}),wn)),Ms=[1,2,3,4,5,6,7,8,9,10],Pc=Ms.concat([11,12,13,14,15,16,17,18,19,20]),Cc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qt=new Set;Object.keys(Gt[W]).map(Qt.add.bind(Qt));Object.keys(Gt[Z]).map(Qt.add.bind(Qt));var Ic=[].concat(ha,tn(Qt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Ms.map(function(e){return"".concat(e,"x")})).concat(Pc.map(function(e){return"w-".concat(e)})),Bt=Qe.FontAwesomeConfig||{};function Sc(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Tc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var Nc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Nc.forEach(function(e){var t=ca(e,2),n=t[0],r=t[1],a=Tc(Sc(n));a!=null&&(Bt[r]=a)})}var Fs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Is,replacementClass:Ss,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var St=O(O({},Fs),Bt);St.autoReplaceSvg||(St.observeMutations=!1);var I={};Object.keys(Fs).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){St[e]=n,Ut.forEach(function(r){return r(I)})},get:function(){return St[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){St.cssPrefix=t,Ut.forEach(function(n){return n(I)})},get:function(){return St.cssPrefix}});Qe.FontAwesomeConfig=I;var Ut=[];function Mc(e){return Ut.push(e),function(){Ut.splice(Ut.indexOf(e),1)}}var qe=Sr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fc(e){if(!(!e||!We)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return K.head.insertBefore(t,r),e}}var Rc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var e=12,t="";e-- >0;)t+=Rc[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function pa(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Rs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Rs(e[n]),'" ')},"").trim()}function Gn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ga(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function jc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Dc(e){var t=e.transform,n=e.width,r=n===void 0?Sr:n,a=e.height,i=a===void 0?Sr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Cs?l+="translate(".concat(t.x/qe-r/2,"em, ").concat(t.y/qe-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):l+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),l+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Yc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ls(){var e=Is,t=Ss,n=I.cssPrefix,r=I.replacementClass,a=Yc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var ui=!1;function dr(){I.autoAddCss&&!ui&&(Fc(Ls()),ui=!0)}var zc={mixout:function(){return{dom:{css:Ls,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},Ue=Qe||{};Ue[Be]||(Ue[Be]={});Ue[Be].styles||(Ue[Be].styles={});Ue[Be].hooks||(Ue[Be].hooks={});Ue[Be].shims||(Ue[Be].shims=[]);var Pe=Ue[Be],js=[],Bc=function e(){K.removeEventListener("DOMContentLoaded",e),jn=1,js.map(function(t){return t()})},jn=!1;We&&(jn=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),jn||K.addEventListener("DOMContentLoaded",Bc));function Uc(e){We&&(jn?setTimeout(e,0):js.push(e))}function rn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Rs(e):"<".concat(t," ").concat(Lc(r),">").concat(i.map(rn).join(""),"</").concat(t,">")}function di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Hc=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},mr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?Hc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function $c(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Nr(e){var t=$c(e);return t.length===1?t[0].toString(16):null}function Xc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function mi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=mi(t);typeof Pe.hooks.addPack=="function"&&!a?Pe.hooks.addPack(e,mi(t)):Pe.styles[e]=O(O({},Pe.styles[e]||{}),i),e==="fas"&&Mr("fa",t)}var _n,kn,An,xt=Pe.styles,Wc=Pe.shims,Kc=(_n={},ae(_n,W,Object.values(Zt[W])),ae(_n,Z,Object.values(Zt[Z])),_n),va=null,Ds={},Ys={},zs={},Bs={},Us={},qc=(kn={},ae(kn,W,Object.keys(Jt[W])),ae(kn,Z,Object.keys(Jt[Z])),kn);function Vc(e){return~Ic.indexOf(e)}function Jc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Vc(a)?a:null}var Hs=function(){var t=function(i){return mr(xt,function(s,o,l){return s[l]=mr(o,i,{}),s},{})};Ds=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Ys=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Us=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in xt||I.autoFetchSvg,r=mr(Wc,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});zs=r.names,Bs=r.unicodes,va=Zn(I.styleDefault,{family:I.familyDefault})};Mc(function(e){va=Zn(e.styleDefault,{family:I.familyDefault})});Hs();function ba(e,t){return(Ds[e]||{})[t]}function Gc(e,t){return(Ys[e]||{})[t]}function ct(e,t){return(Us[e]||{})[t]}function $s(e){return zs[e]||{prefix:null,iconName:null}}function Zc(e){var t=Bs[e],n=ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return va}var ya=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?W:n,a=Jt[r][e],i=Gt[r][e]||Gt[r][a],s=e in Pe.styles?e:null;return i||s||null}var hi=(An={},ae(An,W,Object.keys(Zt[W])),ae(An,Z,Object.keys(Zt[Z])),An);function Qn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,W,"".concat(I.cssPrefix,"-").concat(W)),ae(t,Z,"".concat(I.cssPrefix,"-").concat(Z)),t),s=null,o=W;(e.includes(i[W])||e.some(function(c){return hi[W].includes(c)}))&&(o=W),(e.includes(i[Z])||e.some(function(c){return hi[Z].includes(c)}))&&(o=Z);var l=e.reduce(function(c,d){var m=Jc(I.cssPrefix,d);if(xt[d]?(d=Kc[o].includes(d)?kc[o][d]:d,s=d,c.prefix=d):qc[o].indexOf(d)>-1?(s=d,c.prefix=Zn(d,{family:o})):m?c.iconName=m:d!==I.replacementClass&&d!==i[W]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=s==="fa"?$s(c.iconName):{},k=ct(c.prefix,c.iconName);v.prefix&&(s=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!xt.far&&xt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},ya());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Z&&(xt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=et()||"fas"),l}var Qc=function(){function e(){uc(this,e),this.definitions={}}return dc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=O(O({},n.definitions[o]||{}),s[o]),Mr(o,s[o]);var l=Zt[W][o];l&&Mr(l,s[o]),Hs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),pi=[],wt={},Et={},eu=Object.keys(Et);function tu(e,t){var n=t.mixoutsTo;return pi=e,wt={},Object.keys(Et).forEach(function(r){eu.indexOf(r)===-1&&delete Et[r]}),pi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Ln(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){wt[s]||(wt[s]=[]),wt[s].push(i[s])})}r.provides&&r.provides(Et)}),n}function Fr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=wt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=ct(n,t)||t,di(Xs.definitions,n,t)||di(Pe.styles,n,t)}var Xs=new Qc,nu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,pt("noAuto")},ru={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Uc(function(){iu({autoReplaceSvgRoot:n}),pt("watch",t)})}},au={icon:function(t){if(t===null)return null;if(Ln(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Zn(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Ac))){var a=Qn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ct(i,t)||t}}}},ve={noAuto:nu,config:I,dom:ru,parse:au,library:Xs,findIconDefinition:Rr,toHtml:rn},iu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(Pe.styles).length>0||I.autoFetchSvg)&&We&&I.autoReplaceSvg&&ve.dom.i2svg({node:r})};function er(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return rn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function su(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(ga(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=Gn(O(O({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ou(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:s}),children:r}]}]}function xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,F=r.found?r:n,N=F.width,z=F.height,w=a==="fak",P=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},j=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};k&&(E.attributes[ht]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||en())},children:[l]}),delete E.attributes.title);var U=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:O(O({},j),m.styles)}),ue=r.found&&n.found?He("generateAbstractMask",U)||{children:[],attributes:{}}:He("generateAbstractIcon",U)||{children:[],attributes:{}},ie=ue.children,we=ue.attributes;return U.children=ie,U.attributes=we,o?ou(U):su(U)}function gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=O(O(O({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[ht]="");var d=O({},s.styles);ga(a)&&(d.transform=Dc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Gn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function lu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Gn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var hr=Pe.styles;function Lr(e){var t=e[0],n=e[1],r=e.slice(4),a=ca(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var fu={found:!1,width:512,height:512};function cu(e,t){!Ts&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=$s(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&hr[t]&&hr[t][e]){var s=hr[t][e];return r(Lr(s))}cu(e,t),r(O(O({},fu),{},{icon:I.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var vi=function(){},Dr=I.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:vi,measure:vi},Dt='FA "6.4.0"',uu=function(t){return Dr.mark("".concat(Dt," ").concat(t," begins")),function(){return Ws(t)}},Ws=function(t){Dr.mark("".concat(Dt," ").concat(t," ends")),Dr.measure("".concat(Dt," ").concat(t),"".concat(Dt," ").concat(t," begins"),"".concat(Dt," ").concat(t," ends"))},wa={begin:uu,end:Ws},Sn=function(){};function bi(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function du(e){var t=e.getAttribute?e.getAttribute(da):null,n=e.getAttribute?e.getAttribute(ma):null;return t&&n}function mu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function hu(){if(I.autoReplaceSvg===!0)return Tn.replace;var e=Tn[I.autoReplaceSvg];return e||Tn.replace}function pu(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function gu(e){return K.createElement(e)}function Ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pu:gu:n;if(typeof e=="string")return K.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(Ks(s,{ceFn:r}))}),a}function vu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Tn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ks(a),n)}),n.getAttribute(ht)===null&&I.keepOriginalSource){var r=K.createComment(vu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~pa(n).indexOf(I.replacementClass))return Tn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===I.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return rn(o)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=s}};function yi(e){e()}function qs(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=yi;I.mutateApproach===wc&&(r=Qe.requestAnimationFrame||yi),r(function(){var a=hu(),i=wa.begin("mutate");e.map(a),i(),n()})}}var _a=!1;function Vs(){_a=!0}function Yr(){_a=!1}var Dn=null;function xi(e){if(fi&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,s=i===void 0?Sn:i,o=e.observeMutationsRoot,l=o===void 0?K:o;Dn=new fi(function(c){if(!_a){var d=et();Mt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!bi(m.addedNodes[0])&&(I.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&bi(m.target)&&~Cc.indexOf(m.attributeName))if(m.attributeName==="class"&&du(m.target)){var v=Qn(pa(m.target)),k=v.prefix,F=v.iconName;m.target.setAttribute(da,k||d),F&&m.target.setAttribute(ma,F)}else mu(m.target)&&a(m.target)})}}),We&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bu(){Dn&&Dn.disconnect()}function yu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function xu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qn(pa(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Gc(a.prefix,e.innerText)||ba(a.prefix,Nr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function wu(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||en()):(t["aria-hidden"]="true",t.focusable="false")),t}function _u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xu(e),r=n.iconName,a=n.prefix,i=n.rest,s=wu(e),o=Fr("parseNodeAttributes",{},e),l=t.styleParser?yu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var ku=Pe.styles;function Js(e){var t=I.autoReplaceSvg==="nest"?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(Ns)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var tt=new Set;ha.map(function(e){tt.add("fa-".concat(e))});Object.keys(Jt[W]).map(tt.add.bind(tt));Object.keys(Jt[Z]).map(tt.add.bind(tt));tt=tn(tt);function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=K.documentElement.classList,r=function(m){return n.add("".concat(ci,"-").concat(m))},a=function(m){return n.remove("".concat(ci,"-").concat(m))},i=I.autoFetchSvg?tt:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(ku));i.includes("fa")||i.push("fa");var s=[".".concat(Ns,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Mt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=o.reduce(function(d,m){try{var v=Js(m);v&&d.push(v)}catch(k){Ts||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){qs(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Au(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Js(e).then(function(n){n&&qs([n],t)})}function Ou(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Rr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Eu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,N=n.classes,z=N===void 0?[]:N,w=n.attributes,P=w===void 0?{}:w,E=n.styles,j=E===void 0?{}:E;if(t){var U=t.prefix,ue=t.iconName,ie=t.icon;return er(O({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?P["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(F||en()):(P["aria-hidden"]="true",P.focusable="false")),xa({icons:{main:Lr(ie),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ue,transform:O(O({},Le),a),symbol:s,title:v,maskId:d,titleId:F,extra:{attributes:P,styles:j,classes:z}})})}},Pu={mixout:function(){return{icon:Ou(Eu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_i,n.nodeCallback=Au,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?K:r,i=n.callback,s=i===void 0?function(){}:i;return _i(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,F){Promise.all([jr(a,o),d.iconName?jr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=ca(N,2),w=z[0],P=z[1];k([n,xa({icons:{main:w,mask:P},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Gn(o);l.length>0&&(a.style=l);var c;return ga(s)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Cu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return er({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(tn(i)).join(" ")},children:s}]})}}}},Iu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return er({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),lu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(tn(o))}})})}}}},Su={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return er({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),gi({content:n,transform:O(O({},Le),i),title:o,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(tn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Cs){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,gi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},Tu=new RegExp('"',"ug"),ki=[1105920,1112319];function Nu(e){var t=e.replace(Tu,""),n=Xc(t,0),r=n>=ki[0]&&n<=ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:Nr(a?t[0]:t),isSecondary:r||a}}function Ai(e,t){var n="".concat(xc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),s=i.filter(function(ie){return ie.getAttribute(Tr)===t})[0],o=Qe.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Oc),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:W,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Gt[v][l[2].toLowerCase()]:Ec[v][c],F=Nu(m),N=F.value,z=F.isSecondary,w=l[0].startsWith("FontAwesome"),P=ba(k,N),E=P;if(w){var j=Zc(N);j.iconName&&j.prefix&&(P=j.iconName,k=j.prefix)}if(P&&!z&&(!s||s.getAttribute(da)!==k||s.getAttribute(ma)!==E)){e.setAttribute(n,E),s&&e.removeChild(s);var U=_u(),ue=U.extra;ue.attributes[Tr]=t,jr(P,k).then(function(ie){var we=xa(O(O({},U),{},{icons:{main:ie,mask:ya()},prefix:k,iconName:E,extra:ue,watchable:!0})),be=K.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=we.map(function(je){return rn(je)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Mu(e){return Promise.all([Ai(e,"::before"),Ai(e,"::after")])}function Fu(e){return e.parentNode!==document.head&&!~_c.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oi(e){if(We)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(Fu).map(Mu),a=wa.begin("searchPseudoElements");Vs(),Promise.all(r).then(function(){a(),Yr(),t()}).catch(function(){a(),Yr(),n()})})}var Ru={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?K:r;I.searchPseudoElements&&Oi(a)}}},Ei=!1,Lu={mixout:function(){return{dom:{unwatch:function(){Vs(),Ei=!0}}}},hooks:function(){return{bootstrap:function(){xi(Fr("mutationObserverCallbacks",{}))},noAuto:function(){bu()},watch:function(n){var r=n.observeMutationsRoot;Ei?Yr():xi(Fr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},ju={mixout:function(){return{parse:{transform:function(n){return Pi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Pi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Du(e){return e.tag==="g"?e.children:[e]}var Yu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qn(a.split(" ").map(function(s){return s.trim()})):ya();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,v=s.icon,k=jc({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:O(O({},pr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ci)}:{},z={tag:"g",attributes:O({},k.inner),children:[Ci(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},w={tag:"g",attributes:O({},k.outer),children:[z]},P="mask-".concat(o||en()),E="clip-".concat(o||en()),j={tag:"mask",attributes:O(O({},pr),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,w]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Du(v)},j]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(P,")")},pr)}),{children:r,attributes:a}}}},zu={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=O(O({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Bu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Uu=[zc,Pu,Cu,Iu,Su,Ru,Lu,ju,Yu,zu,Bu];tu(Uu,{mixoutsTo:ve});ve.noAuto;var Gs=ve.config,Hu=ve.library;ve.dom;var Yn=ve.parse;ve.findIconDefinition;ve.toHtml;var $u=ve.icon;ve.layer;var Xu=ve.text;ve.counter;function Ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ii(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ku(e,t){if(e==null)return{};var n=Wu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zr(e){return qu(e)||Vu(e)||Ju(e)||Gu()}function qu(e){if(Array.isArray(e))return Br(e)}function Vu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ju(e,t){if(e){if(typeof e=="string")return Br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(e,t)}}function Br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zs={exports:{}};(function(e){(function(t){var n=function(w,P,E){if(!c(P)||m(P)||v(P)||k(P)||l(P))return P;var j,U=0,ue=0;if(d(P))for(j=[],ue=P.length;U<ue;U++)j.push(n(w,P[U],E));else{j={};for(var ie in P)Object.prototype.hasOwnProperty.call(P,ie)&&(j[w(ie,E)]=n(w,P[ie],E))}return j},r=function(w,P){P=P||{};var E=P.separator||"_",j=P.split||/(?=[A-Z])/;return w.split(j).join(E)},a=function(w){return F(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var P=a(w);return P.substr(0,1).toUpperCase()+P.substr(1)},s=function(w,P){return r(w,P).toLowerCase()},o=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return o.call(w)=="[object Array]"},m=function(w){return o.call(w)=="[object Date]"},v=function(w){return o.call(w)=="[object RegExp]"},k=function(w){return o.call(w)=="[object Boolean]"},F=function(w){return w=w-0,w===w},N=function(w,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?w:function(j,U){return E(j,w,U)}},z={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(w,P){return n(N(a,P),w)},decamelizeKeys:function(w,P){return n(N(s,P),w,P)},pascalizeKeys:function(w,P){return n(N(i,P),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(Zu)})(Zs);var Qu=Zs.exports,ed=["class","style"];function td(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Qu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function nd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ka(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=nd(d);break;case"style":l.style=td(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Ku(n,ed);return _s(e.tag,Oe(Oe(Oe({},t),{},{class:a.class,style:Oe(Oe({},a.style),s)},a.attrs),o),r)}var Qs=!1;try{Qs=!0}catch{}function rd(){if(!Qs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function ad(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Si(e){if(e&&zn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Yn.icon)return Yn.icon(e);if(e===null)return null;if(zn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var id=ia({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=xe(function(){return Si(t.icon)}),i=xe(function(){return Ht("classes",ad(t))}),s=xe(function(){return Ht("transform",typeof t.transform=="string"?Yn.transform(t.transform):t.transform)}),o=xe(function(){return Ht("mask",Si(t.mask))}),l=xe(function(){return $u(a.value,Oe(Oe(Oe(Oe({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});Pn(l,function(d){if(!d)return rd("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=xe(function(){return l.value?ka(l.value.abstract[0],{},r):null});return function(){return c.value}}});ia({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Gs.familyPrefix,i=xe(function(){return["".concat(a,"-layers")].concat(zr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return _s("div",{class:i.value},r.default?r.default():[])}}});ia({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Gs.familyPrefix,i=xe(function(){return Ht("classes",[].concat(zr(t.counter?["".concat(a,"-layers-counter")]:[]),zr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),s=xe(function(){return Ht("transform",typeof t.transform=="string"?Yn.transform(t.transform):t.transform)}),o=xe(function(){var c=Xu(t.value.toString(),Oe(Oe({},s.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=xe(function(){return ka(o.value,{},r)});return function(){return l.value}}});var sd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};Hu.add(sd);Sf(cc).component("font-awesome-icon",id).mount("#app");
