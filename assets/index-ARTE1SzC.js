var je=Object.defineProperty;var De=(n,e,t)=>e in n?je(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var V=(n,e,t)=>De(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const f of r)if(f.type==="childList")for(const i of f.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const f={};return r.integrity&&(f.integrity=r.integrity),r.referrerPolicy&&(f.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?f.credentials="include":r.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(r){if(r.ep)return;r.ep=!0;const f=t(r);fetch(r.href,f)}})();function j(){}function ve(n){return n()}function te(){return Object.create(null)}function C(n){n.forEach(ve)}function $e(n){return typeof n=="function"}function B(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Le(n){return Object.keys(n).length===0}function p(n,e){n.appendChild(e)}function $(n,e,t){n.insertBefore(e,t||null)}function v(n){n.parentNode&&n.parentNode.removeChild(n)}function R(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function E(n){return document.createTextNode(n)}function D(){return E(" ")}function F(){return E("")}function G(n,e,t,l){return n.addEventListener(e,t,l),()=>n.removeEventListener(e,t,l)}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Se(n){return Array.from(n.childNodes)}function K(n,e){e=""+e,n.data!==e&&(n.data=e)}function Y(n,e){n.value=e??""}let ee;function P(n){ee=n}const O=[],ne=[];let A=[];const le=[],Ie=Promise.resolve();let W=!1;function Ee(){W||(W=!0,Ie.then(ye))}function X(n){A.push(n)}const Q=new Set;let N=0;function ye(){if(N!==0)return;const n=ee;do{try{for(;N<O.length;){const e=O[N];N++,P(e),Ne(e.$$)}}catch(e){throw O.length=0,N=0,e}for(P(null),O.length=0,N=0;ne.length;)ne.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];Q.has(t)||(Q.add(t),t())}A.length=0}while(O.length);for(;le.length;)le.pop()();W=!1,Q.clear(),P(n)}function Ne(n){if(n.fragment!==null){n.update(),C(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(X)}}function Oe(n){const e=[],t=[];A.forEach(l=>n.indexOf(l)===-1?e.push(l):t.push(l)),t.forEach(l=>l()),A=e}const Z=new Set;let I;function H(){I={r:0,c:[],p:I}}function J(){I.r||C(I.c),I=I.p}function w(n,e){n&&n.i&&(Z.delete(n),n.i(e))}function k(n,e,t,l){if(n&&n.o){if(Z.has(n))return;Z.add(n),I.c.push(()=>{Z.delete(n),l&&(t&&n.d(1),l())}),n.o(e)}else l&&l()}function S(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function U(n){n&&n.c()}function q(n,e,t){const{fragment:l,after_update:r}=n.$$;l&&l.m(e,t),X(()=>{const f=n.$$.on_mount.map(ve).filter($e);n.$$.on_destroy?n.$$.on_destroy.push(...f):C(f),n.$$.on_mount=[]}),r.forEach(X)}function z(n,e){const t=n.$$;t.fragment!==null&&(Oe(t.after_update),C(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ae(n,e){n.$$.dirty[0]===-1&&(O.push(n),Ee(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function M(n,e,t,l,r,f,i=null,c=[-1]){const d=ee;P(n);const o=n.$$={fragment:null,ctx:[],props:f,update:j,not_equal:r,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:te(),dirty:c,skip_bound:!1,root:e.target||d.$$.root};i&&i(o.root);let _=!1;if(o.ctx=t?t(n,e.props||{},(a,y,...h)=>{const u=h.length?h[0]:y;return o.ctx&&r(o.ctx[a],o.ctx[a]=u)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](u),_&&Ae(n,a)),y}):[],o.update(),_=!0,C(o.before_update),o.fragment=l?l(o.ctx):!1,e.target){if(e.hydrate){const a=Se(e.target);o.fragment&&o.fragment.l(a),a.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&w(n.$$.fragment),q(n,e.target,e.anchor),ye()}P(d)}class T{constructor(){V(this,"$$");V(this,"$$set")}$destroy(){z(this,1),this.$destroy=j}$on(e,t){if(!$e(t))return j;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(t),()=>{const r=l.indexOf(t);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!Le(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ce);function Pe(n){let e,t,l,r,f,i,c,d,o,_,a,y,h,u;return{c(){e=b("form"),t=b("div"),l=b("label"),l.textContent="Benutzername:",r=D(),f=b("input"),i=D(),c=b("div"),d=b("label"),d.textContent="Passwort:",o=D(),_=b("input"),a=D(),y=b("center"),y.innerHTML='<button type="submit" class="svelte-1ogr4jx">Daten laden</button>',m(l,"for","username"),m(l,"class","svelte-1ogr4jx"),m(f,"id","username"),m(f,"type","text"),m(f,"class","svelte-1ogr4jx"),m(t,"class","form-group svelte-1ogr4jx"),m(d,"for","password"),m(d,"class","svelte-1ogr4jx"),m(_,"id","password"),m(_,"type","password"),m(_,"class","svelte-1ogr4jx"),m(c,"class","form-group svelte-1ogr4jx")},m(g,s){$(g,e,s),p(e,t),p(t,l),p(t,r),p(t,f),Y(f,n[0]),p(e,i),p(e,c),p(c,d),p(c,o),p(c,_),Y(_,n[1]),p(e,a),p(e,y),h||(u=[G(f,"input",n[4]),G(_,"input",n[5]),G(e,"submit",n[2])],h=!0)},p(g,[s]){s&1&&f.value!==g[0]&&Y(f,g[0]),s&2&&_.value!==g[1]&&Y(_,g[1])},i:j,o:j,d(g){g&&v(e),h=!1,C(u)}}}function Be(n,e,t){let{username:l}=e,{password:r}=e,{fetchData:f}=e;function i(o){o.preventDefault(),f()}function c(){l=this.value,t(0,l)}function d(){r=this.value,t(1,r)}return n.$$set=o=>{"username"in o&&t(0,l=o.username),"password"in o&&t(1,r=o.password),"fetchData"in o&&t(3,f=o.fetchData)},[l,r,i,f,c,d]}class Fe extends T{constructor(e){super(),M(this,e,Be,Pe,B,{username:0,password:1,fetchData:3})}}function qe(n){let e;return{c(){e=b("p"),e.textContent="Laden...",m(e,"class","loading svelte-1j58wrj")},m(t,l){$(t,e,l)},p:j,i:j,o:j,d(t){t&&v(e)}}}class ze extends T{constructor(e){super(),M(this,e,null,qe,B,{})}}function Me(n){let e,t;return{c(){e=b("p"),t=E(n[0]),m(e,"class","error svelte-bxlh6h")},m(l,r){$(l,e,r),p(e,t)},p(l,[r]){r&1&&K(t,l[0])},i:j,o:j,d(l){l&&v(e)}}}function Te(n,e,t){let{error:l}=e;return n.$$set=r=>{"error"in r&&t(0,l=r.error)},[l]}class ke extends T{constructor(e){super(),M(this,e,Te,Me,B,{error:0})}}function re(n,e,t){const l=n.slice();return l[1]=e[t],l}function fe(n,e,t){const l=n.slice();return l[4]=e[t],l}function oe(n,e,t){const l=n.slice();return l[4]=e[t],l}function ie(n,e,t){const l=n.slice();return l[4]=e[t],l}function se(n){let e=n[4].value+"",t;return{c(){t=E(e)},m(l,r){$(l,t,r)},p(l,r){r&1&&e!==(e=l[4].value+"")&&K(t,e)},d(l){l&&v(t)}}}function ue(n){let e,t=n[4].columnId===20&&se(n);return{c(){t&&t.c(),e=F()},m(l,r){t&&t.m(l,r),$(l,e,r)},p(l,r){l[4].columnId===20?t?t.p(l,r):(t=se(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&v(e),t&&t.d(l)}}}function ce(n){let e,t=n[4].value&&ae(n);return{c(){t&&t.c(),e=F()},m(l,r){t&&t.m(l,r),$(l,e,r)},p(l,r){l[4].value?t?t.p(l,r):(t=ae(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&v(e),t&&t.d(l)}}}function ae(n){let e,t=x(n[4].value)+"",l,r;return{c(){e=b("a"),l=E(t),m(e,"href",r=x(n[4].value)),m(e,"target","_blank")},m(f,i){$(f,e,i),p(e,l)},p(f,i){i&1&&t!==(t=x(f[4].value)+"")&&K(l,t),i&1&&r!==(r=x(f[4].value))&&m(e,"href",r)},d(f){f&&v(e)}}}function de(n){let e,t=n[4].columnId===23&&ce(n);return{c(){t&&t.c(),e=F()},m(l,r){t&&t.m(l,r),$(l,e,r)},p(l,r){l[4].columnId===23?t?t.p(l,r):(t=ce(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&v(e),t&&t.d(l)}}}function _e(n){let e,t=new Date(n[4].value).toLocaleDateString()+"",l;return{c(){e=E("Letzte Zahlung: "),l=E(t)},m(r,f){$(r,e,f),$(r,l,f)},p(r,f){f&1&&t!==(t=new Date(r[4].value).toLocaleDateString()+"")&&K(l,t)},d(r){r&&(v(e),v(l))}}}function he(n){let e,t=n[4].columnId===27&&_e(n);return{c(){t&&t.c(),e=F()},m(l,r){t&&t.m(l,r),$(l,e,r)},p(l,r){l[4].columnId===27?t?t.p(l,r):(t=_e(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&v(e),t&&t.d(l)}}}function me(n){let e,t,l,r,f,i,c,d=S(n[1].data),o=[];for(let u=0;u<d.length;u+=1)o[u]=ue(ie(n,d,u));let _=S(n[1].data),a=[];for(let u=0;u<_.length;u+=1)a[u]=de(oe(n,_,u));let y=S(n[1].data),h=[];for(let u=0;u<y.length;u+=1)h[u]=he(fe(n,y,u));return{c(){e=b("li"),t=b("p");for(let u=0;u<o.length;u+=1)o[u].c();l=D(),r=b("p");for(let u=0;u<a.length;u+=1)a[u].c();f=D(),i=b("p");for(let u=0;u<h.length;u+=1)h[u].c();c=D(),m(t,"class","svelte-f1csb0"),m(r,"class","svelte-f1csb0"),m(i,"class","svelte-f1csb0"),m(e,"class","svelte-f1csb0")},m(u,g){$(u,e,g),p(e,t);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(t,null);p(e,l),p(e,r);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(r,null);p(e,f),p(e,i);for(let s=0;s<h.length;s+=1)h[s]&&h[s].m(i,null);p(e,c)},p(u,g){if(g&1){d=S(u[1].data);let s;for(s=0;s<d.length;s+=1){const L=ie(u,d,s);o[s]?o[s].p(L,g):(o[s]=ue(L),o[s].c(),o[s].m(t,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=d.length}if(g&1){_=S(u[1].data);let s;for(s=0;s<_.length;s+=1){const L=oe(u,_,s);a[s]?a[s].p(L,g):(a[s]=de(L),a[s].c(),a[s].m(r,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=_.length}if(g&1){y=S(u[1].data);let s;for(s=0;s<y.length;s+=1){const L=fe(u,y,s);h[s]?h[s].p(L,g):(h[s]=he(L),h[s].c(),h[s].m(i,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=y.length}},d(u){u&&v(e),R(o,u),R(a,u),R(h,u)}}}function Ye(n){let e,t=S(n[0]),l=[];for(let r=0;r<t.length;r+=1)l[r]=me(re(n,t,r));return{c(){e=b("ul");for(let r=0;r<l.length;r+=1)l[r].c();m(e,"class","svelte-f1csb0")},m(r,f){$(r,e,f);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null)},p(r,[f]){if(f&1){t=S(r[0]);let i;for(i=0;i<t.length;i+=1){const c=re(r,t,i);l[i]?l[i].p(c,f):(l[i]=me(c),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},i:j,o:j,d(r){r&&v(e),R(l,r)}}}function x(n){try{return JSON.parse(n).value}catch{return null}}function xe(n,e,t){let{rows:l}=e;return n.$$set=r=>{"rows"in r&&t(0,l=r.rows)},[l]}class Re extends T{constructor(e){super(),M(this,e,xe,Ye,B,{rows:0})}}function pe(n){let e,t,l,r;e=new Fe({props:{username:n[3],password:n[4],fetchData:n[5]}});let f=n[2]&&ge();return{c(){U(e.$$.fragment),t=D(),f&&f.c(),l=F()},m(i,c){q(e,i,c),$(i,t,c),f&&f.m(i,c),$(i,l,c),r=!0},p(i,c){i[2]?f?c&4&&w(f,1):(f=ge(),f.c(),w(f,1),f.m(l.parentNode,l)):f&&(H(),k(f,1,1,()=>{f=null}),J())},i(i){r||(w(e.$$.fragment,i),w(f),r=!0)},o(i){k(e.$$.fragment,i),k(f),r=!1},d(i){i&&(v(t),v(l)),z(e,i),f&&f.d(i)}}}function ge(n){let e,t;return e=new ze({}),{c(){U(e.$$.fragment)},m(l,r){q(e,l,r),t=!0},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){z(e,l)}}}function be(n){let e,t;return e=new ke({props:{error:n[1]}}),{c(){U(e.$$.fragment)},m(l,r){q(e,l,r),t=!0},p(l,r){const f={};r&2&&(f.error=l[1]),e.$set(f)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){z(e,l)}}}function we(n){let e,t;return e=new Re({props:{rows:n[0]}}),{c(){U(e.$$.fragment)},m(l,r){q(e,l,r),t=!0},p(l,r){const f={};r&1&&(f.rows=l[0]),e.$set(f)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){z(e,l)}}}function Ze(n){let e,t,l,r,f,i,c=n[0].length<=0&&pe(n),d=n[1]&&be(n),o=n[0].length>0&&we(n);return{c(){e=b("main"),t=b("h1"),t.textContent="Überfällige Zahlungen",l=D(),c&&c.c(),r=D(),d&&d.c(),f=D(),o&&o.c(),m(t,"class","svelte-1djxqkj"),m(e,"class","svelte-1djxqkj")},m(_,a){$(_,e,a),p(e,t),p(e,l),c&&c.m(e,null),p(e,r),d&&d.m(e,null),p(e,f),o&&o.m(e,null),i=!0},p(_,[a]){_[0].length<=0?c?(c.p(_,a),a&1&&w(c,1)):(c=pe(_),c.c(),w(c,1),c.m(e,r)):c&&(H(),k(c,1,1,()=>{c=null}),J()),_[1]?d?(d.p(_,a),a&2&&w(d,1)):(d=be(_),d.c(),w(d,1),d.m(e,f)):d&&(H(),k(d,1,1,()=>{d=null}),J()),_[0].length>0?o?(o.p(_,a),a&1&&w(o,1)):(o=we(_),o.c(),w(o,1),o.m(e,null)):o&&(H(),k(o,1,1,()=>{o=null}),J())},i(_){i||(w(c),w(d),w(o),i=!0)},o(_){k(c),k(d),k(o),i=!1},d(_){_&&v(e),c&&c.d(),d&&d.d(),o&&o.d()}}}function He(n,e,t){let l=localStorage.getItem("username")||"",r=localStorage.getItem("password")||"",f=[],i="",c=!1;async function d(){localStorage.setItem("username",l),localStorage.setItem("password",r);const o=`${l}:${r}`,_=btoa(o);t(2,c=!0),t(1,i=""),t(0,f=[]);try{const a=await fetch("https://cloud.norden.social/apps/tables/api/1/tables/4/rows",{headers:{Authorization:`Basic ${_}`}});if(!a.ok)throw new ke(`Error: ${a.statusText}`);const y=await a.json(),h=new Date;h.setFullYear(h.getFullYear()-1),t(0,f=y.filter(u=>{const g=u.data.find(s=>s.columnId===27);return g&&g.value?new Date(g.value)<h:!1}))}catch(a){t(1,i=a.message)}finally{t(2,c=!1)}}return[f,i,c,l,r,d]}class Je extends T{constructor(e){super(),M(this,e,He,Ze,B,{})}}new Je({target:document.getElementById("app")});