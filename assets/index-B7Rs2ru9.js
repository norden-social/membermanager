var ze=Object.defineProperty;var Ee=(t,e,n)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>Ee(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function E(){}function $e(t){return t()}function ie(){return Object.create(null)}function F(t){t.forEach($e)}function ve(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Le(t){return Object.keys(t).length===0}function c(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function De(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function k(){return C(" ")}function te(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Se(t){return Array.from(t.childNodes)}function M(t,e){e=""+e,t.data!==e&&(t.data=e)}function K(t,e){t.value=e??""}let fe;function T(t){fe=t}const q=[],X=[];let B=[];const re=[],Oe=Promise.resolve();let le=!1;function Ae(){le||(le=!0,Oe.then(ye))}function se(t){B.push(t)}function ue(t){re.push(t)}const ne=new Set;let P=0;function ye(){if(P!==0)return;const t=fe;do{try{for(;P<q.length;){const e=q[P];P++,T(e),je(e.$$)}}catch(e){throw q.length=0,P=0,e}for(T(null),q.length=0,P=0;X.length;)X.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];ne.has(n)||(ne.add(n),n())}B.length=0}while(q.length);for(;re.length;)re.pop()();le=!1,ne.clear(),T(t)}function je(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(se)}}function Ce(t){const e=[],n=[];B.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),B=e}const W=new Set;let I;function U(){I={r:0,c:[],p:I}}function G(){I.r||F(I.c),I=I.p}function $(t,e){t&&t.i&&(W.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),I.c.push(()=>{W.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function ae(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ce(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function x(t){t&&t.c()}function Z(t,e,n){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),se(()=>{const s=t.$$.on_mount.map($e).filter(ve);t.$$.on_destroy?t.$$.on_destroy.push(...s):F(s),t.$$.on_mount=[]}),l.forEach(se)}function R(t,e){const n=t.$$;n.fragment!==null&&(Ce(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(t,e){t.$$.dirty[0]===-1&&(q.push(t),Ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,r,l,s,o=null,m=[-1]){const i=fe;T(t);const f=t.$$={fragment:null,ctx:[],props:s,update:E,not_equal:l,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:ie(),dirty:m,skip_bound:!1,root:e.target||i.$$.root};o&&o(f.root);let u=!1;if(f.ctx=n?n(t,e.props||{},(a,p,..._)=>{const h=_.length?_[0]:p;return f.ctx&&l(f.ctx[a],f.ctx[a]=h)&&(!f.skip_bound&&f.bound[a]&&f.bound[a](h),u&&Ie(t,a)),p}):[],f.update(),u=!0,F(f.before_update),f.fragment=r?r(f.ctx):!1,e.target){if(e.hydrate){const a=Se(e.target);f.fragment&&f.fragment.l(a),a.forEach(S)}else f.fragment&&f.fragment.c();e.intro&&$(t.$$.fragment),Z(t,e.target,e.anchor),ye()}T(i)}class H{constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){R(this,1),this.$destroy=E}$on(e,n){if(!ve(n))return E;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Le(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ne);function Pe(t){let e,n,r,l,s,o,m,i,f,u,a,p,_,h;return{c(){e=w("form"),n=w("div"),r=w("label"),r.textContent="Benutzername:",l=k(),s=w("input"),o=k(),m=w("div"),i=w("label"),i.textContent="Passwort:",f=k(),u=w("input"),a=k(),p=w("center"),p.innerHTML='<button type="submit" class="svelte-1ndkz3p">Daten laden</button>',g(r,"for","username"),g(r,"class","svelte-1ndkz3p"),g(s,"id","username"),g(s,"type","text"),g(s,"class","svelte-1ndkz3p"),g(n,"class","form-group svelte-1ndkz3p"),g(i,"for","password"),g(i,"class","svelte-1ndkz3p"),g(u,"id","password"),g(u,"type","password"),g(u,"class","svelte-1ndkz3p"),g(m,"class","form-group svelte-1ndkz3p")},m(d,b){A(d,e,b),c(e,n),c(n,r),c(n,l),c(n,s),K(s,t[0]),c(e,o),c(e,m),c(m,i),c(m,f),c(m,u),K(u,t[1]),c(e,a),c(e,p),_||(h=[te(s,"input",t[4]),te(u,"input",t[5]),te(e,"submit",t[2])],_=!0)},p(d,[b]){b&1&&s.value!==d[0]&&K(s,d[0]),b&2&&u.value!==d[1]&&K(u,d[1])},i:E,o:E,d(d){d&&S(e),_=!1,F(h)}}}function qe(t,e,n){let{username:r}=e,{password:l}=e,{fetchData:s}=e;function o(f){f.preventDefault(),s()}function m(){r=this.value,n(0,r)}function i(){l=this.value,n(1,l)}return t.$$set=f=>{"username"in f&&n(0,r=f.username),"password"in f&&n(1,l=f.password),"fetchData"in f&&n(3,s=f.fetchData)},[r,l,o,s,m,i]}class Be extends H{constructor(e){super(),V(this,e,qe,Pe,Y,{username:0,password:1,fetchData:3})}}function Fe(t){let e;return{c(){e=w("p"),e.textContent="Laden...",g(e,"class","loading svelte-1j58wrj")},m(n,r){A(n,e,r)},p:E,i:E,o:E,d(n){n&&S(e)}}}class Me extends H{constructor(e){super(),V(this,e,null,Fe,Y,{})}}function Te(t){let e,n;return{c(){e=w("p"),n=C(t[0]),g(e,"class","error svelte-bxlh6h")},m(r,l){A(r,e,l),c(e,n)},p(r,[l]){l&1&&M(n,r[0])},i:E,o:E,d(r){r&&S(e)}}}function Ye(t,e,n){let{error:r}=e;return t.$$set=l=>{"error"in l&&n(0,r=l.error)},[r]}class ke extends H{constructor(e){super(),V(this,e,Ye,Te,Y,{error:0})}}function de(t,e,n){const r=t.slice();return r[1]=e[n],r}function me(t){let e,n=Q(y(t[1],23))+"",r,l;return{c(){e=w("a"),r=C(n),g(e,"href",l=Q(y(t[1],23))),g(e,"target","_blank")},m(s,o){A(s,e,o),c(e,r)},p(s,o){o&1&&n!==(n=Q(y(s[1],23))+"")&&M(r,n),o&1&&l!==(l=Q(y(s[1],23)))&&g(e,"href",l)},d(s){s&&S(e)}}}function pe(t){let e,n,r,l=y(t[1],20)+"",s,o,m,i,f=y(t[1],22)+"",u,a,p,_,h=y(t[1],23),d,b,N,J,D=new Date(y(t[1],27)).toLocaleDateString()+"",j,oe,v=h&&me(t);return{c(){e=w("li"),n=w("h2"),r=w("strong"),s=C(l),o=k(),m=w("p"),i=w("a"),u=C(f),p=k(),_=w("p"),v&&v.c(),d=k(),b=w("p"),N=w("i"),J=C("Letzte Zahlung: "),j=C(D),oe=k(),g(n,"class","svelte-6q350z"),g(i,"href",a="mailto:"+y(t[1],22)),g(i,"target","_blank"),g(m,"class","svelte-6q350z"),g(_,"class","svelte-6q350z"),g(b,"class","svelte-6q350z"),g(e,"class","svelte-6q350z")},m(L,O){A(L,e,O),c(e,n),c(n,r),c(r,s),c(e,o),c(e,m),c(m,i),c(i,u),c(e,p),c(e,_),v&&v.m(_,null),c(e,d),c(e,b),c(b,N),c(N,J),c(N,j),c(e,oe)},p(L,O){O&1&&l!==(l=y(L[1],20)+"")&&M(s,l),O&1&&f!==(f=y(L[1],22)+"")&&M(u,f),O&1&&a!==(a="mailto:"+y(L[1],22))&&g(i,"href",a),O&1&&(h=y(L[1],23)),h?v?v.p(L,O):(v=me(L),v.c(),v.m(_,null)):v&&(v.d(1),v=null),O&1&&D!==(D=new Date(y(L[1],27)).toLocaleDateString()+"")&&M(j,D)},d(L){L&&S(e),v&&v.d()}}}function Ze(t){let e,n=ae(t[0]),r=[];for(let l=0;l<n.length;l+=1)r[l]=pe(de(t,n,l));return{c(){e=w("ul");for(let l=0;l<r.length;l+=1)r[l].c();g(e,"class","svelte-6q350z")},m(l,s){A(l,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(l,[s]){if(s&1){n=ae(l[0]);let o;for(o=0;o<n.length;o+=1){const m=de(l,n,o);r[o]?r[o].p(m,s):(r[o]=pe(m),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},i:E,o:E,d(l){l&&S(e),De(r,l)}}}function Q(t){try{return JSON.parse(t).value}catch{return null}}function y(t,e){const n=t.data.find(r=>r.columnId===e);return n?n.value:null}function Re(t,e,n){let{rows:r}=e;return t.$$set=l=>{"rows"in l&&n(0,r=l.rows)},[r]}class Ve extends H{constructor(e){super(),V(this,e,Re,Ze,Y,{rows:0})}}function he(t){let e,n,r,l;function s(i){t[7](i)}function o(i){t[8](i)}let m={fetchData:t[6]};return t[0]!==void 0&&(m.username=t[0]),t[1]!==void 0&&(m.password=t[1]),e=new Be({props:m}),X.push(()=>ce(e,"username",s)),X.push(()=>ce(e,"password",o)),{c(){x(e.$$.fragment)},m(i,f){Z(e,i,f),l=!0},p(i,f){const u={};!n&&f&1&&(n=!0,u.username=i[0],ue(()=>n=!1)),!r&&f&2&&(r=!0,u.password=i[1],ue(()=>r=!1)),e.$set(u)},i(i){l||($(e.$$.fragment,i),l=!0)},o(i){z(e.$$.fragment,i),l=!1},d(i){R(e,i)}}}function ge(t){let e,n;return e=new Me({}),{c(){x(e.$$.fragment)},m(r,l){Z(e,r,l),n=!0},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function _e(t){let e,n;return e=new ke({props:{error:t[3]}}),{c(){x(e.$$.fragment)},m(r,l){Z(e,r,l),n=!0},p(r,l){const s={};l&8&&(s.error=r[3]),e.$set(s)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function we(t){let e,n;return e=new Ve({props:{rows:t[2]}}),{c(){x(e.$$.fragment)},m(r,l){Z(e,r,l),n=!0},p(r,l){const s={};l&4&&(s.rows=r[2]),e.$set(s)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function be(t){let e;return{c(){e=w("p"),e.textContent="Es sind keine Zahlungen überfällig.",g(e,"class","no-payments svelte-ixgj9a")},m(n,r){A(n,e,r)},d(n){n&&S(e)}}}function He(t){let e,n,r,l,s,o,m,i,f=t[2].length===0&&!t[4]&&he(t),u=t[4]&&ge(),a=t[3]&&_e(t),p=t[2].length>0&&we(t),_=t[5]&&be();return{c(){e=w("main"),n=w("h1"),n.textContent="Überfällige Zahlungen",r=k(),f&&f.c(),l=k(),u&&u.c(),s=k(),a&&a.c(),o=k(),p&&p.c(),m=k(),_&&_.c(),g(n,"class","svelte-ixgj9a"),g(e,"class","svelte-ixgj9a")},m(h,d){A(h,e,d),c(e,n),c(e,r),f&&f.m(e,null),c(e,l),u&&u.m(e,null),c(e,s),a&&a.m(e,null),c(e,o),p&&p.m(e,null),c(e,m),_&&_.m(e,null),i=!0},p(h,[d]){h[2].length===0&&!h[4]?f?(f.p(h,d),d&20&&$(f,1)):(f=he(h),f.c(),$(f,1),f.m(e,l)):f&&(U(),z(f,1,1,()=>{f=null}),G()),h[4]?u?d&16&&$(u,1):(u=ge(),u.c(),$(u,1),u.m(e,s)):u&&(U(),z(u,1,1,()=>{u=null}),G()),h[3]?a?(a.p(h,d),d&8&&$(a,1)):(a=_e(h),a.c(),$(a,1),a.m(e,o)):a&&(U(),z(a,1,1,()=>{a=null}),G()),h[2].length>0?p?(p.p(h,d),d&4&&$(p,1)):(p=we(h),p.c(),$(p,1),p.m(e,m)):p&&(U(),z(p,1,1,()=>{p=null}),G()),h[5]?_||(_=be(),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},i(h){i||($(f),$(u),$(a),$(p),i=!0)},o(h){z(f),z(u),z(a),z(p),i=!1},d(h){h&&S(e),f&&f.d(),u&&u.d(),a&&a.d(),p&&p.d(),_&&_.d()}}}function Je(t,e,n){let r=localStorage.getItem("username")||"",l=localStorage.getItem("password")||"",s=[],o="",m=!1,i=!1;const f=()=>{localStorage.setItem("username",r),localStorage.setItem("password",l)},u=(d,b)=>btoa(`${d}:${b}`),a=d=>{const b=new Date;return b.setFullYear(b.getFullYear()-1),d<b},p=async()=>{f();const d=u(r,l);n(4,m=!0),n(3,o=""),n(2,s=[]),n(5,i=!1);try{const b=await fetch("https://cloud.norden.social/apps/tables/api/1/tables/4/rows",{headers:{Authorization:`Basic ${d}`}});if(!b.ok)throw new ke(`Error: ${b.statusText}`);const N=await b.json();n(2,s=N.filter(J=>{const D=J.data.find(j=>j.columnId===27);if(D!=null&&D.value){const j=new Date(D.value);return a(j)}return!1})),s.length===0&&n(5,i=!0)}catch(b){n(3,o=b.message||"Ein unbekannter Fehler ist aufgetreten.")}finally{n(4,m=!1)}};function _(d){r=d,n(0,r)}function h(d){l=d,n(1,l)}return[r,l,s,o,m,i,p,_,h]}class Ke extends H{constructor(e){super(),V(this,e,Je,He,Y,{})}}new Ke({target:document.getElementById("app")});
