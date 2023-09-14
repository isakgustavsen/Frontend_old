import{n as D,P as H,Q as N,R as P,S as j,k as E,f as k,T as K,U as T,m as W,V as $,g as V,W as I,o as z,c as C,a as g,F as J,r as Z,t as O}from"./entry.297705d3.js";const q=()=>null;function Q(...a){const r=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(r);let[s,e,t={}]=a;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??q,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const n=E(),c=()=>n.isHydrating?n.payload.data[s]:n.static.data[s],l=()=>c()!==void 0;n._asyncData[s]||(n._asyncData[s]={data:D(c()??t.default()),pending:D(!l()),error:H(n.payload._errors,s),status:D("idle")});const i={...n._asyncData[s]};i.refresh=i.execute=(o={})=>{if(n._asyncDataPromises[s]){if(o.dedupe===!1)return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((o._initial||n.isHydrating&&o._initial!==!1)&&l())return c();i.pending.value=!0,i.status.value="pending";const p=new Promise((f,y)=>{try{f(e(n))}catch(x){y(x)}}).then(f=>{if(p.cancelled)return n._asyncDataPromises[s];let y=f;t.transform&&(y=t.transform(f)),t.pick&&(y=G(y,t.pick)),i.data.value=y,i.error.value=null,i.status.value="success"}).catch(f=>{if(p.cancelled)return n._asyncDataPromises[s];i.error.value=f,i.data.value=k(t.default()),i.status.value="error"}).finally(()=>{p.cancelled||(i.pending.value=!1,n.payload.data[s]=i.data.value,i.error.value&&(n.payload._errors[s]=K(i.error.value)),delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=p,n._asyncDataPromises[s]};const u=()=>i.refresh({_initial:!0}),h=t.server!==!1&&n.payload.serverRendered;{const o=T();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const f=o._nuxtOnBeforeMountCbs;o&&(N(()=>{f.forEach(y=>{y()}),f.splice(0,f.length)}),P(()=>f.splice(0,f.length)))}h&&n.isHydrating&&l()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):o&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?o._nuxtOnBeforeMountCbs.push(u):t.immediate&&u(),t.watch&&j(t.watch,()=>i.refresh());const p=n.hook("app:data:refresh",f=>{if(!f||f.includes(s))return i.refresh()});o&&P(p)}const d=Promise.resolve(n._asyncDataPromises[s]).then(()=>i);return Object.assign(d,i),d}function G(a,r){const s={};for(const e of r)s[e]=a[e];return s}const F=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function X(a,r){r?r={...F,...r}:r=F;const s=R(r);return s.dispatch(a),s.toString()}const Y=Object.freeze(["prototype","__proto__","constructor"]);function R(a){let r="",s=new Map;const e=t=>{r+=t};return{toString(){return r},getContext(){return s},dispatch(t){return a.replacer&&(t=a.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let c="";const l=n.length;l<10?c="unknown:["+n+"]":c=n.slice(8,l-1),c=c.toLowerCase();let i=null;if((i=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+i+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(c!=="object"&&c!=="function"&&c!=="asyncfunction")this[c]?this[c](t):a.ignoreUnknown||this.unkown(t,c);else{let u=Object.keys(t);a.unorderedObjects&&(u=u.sort());let h=[];a.respectType!==!1&&!A(t)&&(h=Y),a.excludeKeys&&(u=u.filter(o=>!a.excludeKeys(o)),h=h.filter(o=>!a.excludeKeys(o))),e("object:"+(u.length+h.length)+":");const d=o=>{this.dispatch(o),e(":"),a.excludeValues||this.dispatch(t[o]),e(",")};for(const o of u)d(o);for(const o of h)d(o)}},array(t,n){if(n=n===void 0?a.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const i of t)this.dispatch(i);return}const c=new Map,l=t.map(i=>{const u=R(a);u.dispatch(i);for(const[h,d]of u.getContext())c.set(h,d);return u.toString()});return s=c,l.sort(),this.array(l,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),A(t)?this.dispatch("[native]"):this.dispatch(t.toString()),a.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),a.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,a.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,a.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(a.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const L="[native code] }",tt=L.length;function A(a){return typeof a!="function"?!1:Function.prototype.toString.call(a).slice(-tt)===L}class w{constructor(r,s){r=this.words=r||[],this.sigBytes=s===void 0?r.length*4:s}toString(r){return(r||et).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const et={stringify(a){const r=[];for(let s=0;s<a.sigBytes;s++){const e=a.words[s>>>2]>>>24-s%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},st={stringify(a){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<a.sigBytes;e+=3){const t=a.words[e>>>2]>>>24-e%4*8&255,n=a.words[e+1>>>2]>>>24-(e+1)%4*8&255,c=a.words[e+2>>>2]>>>24-(e+2)%4*8&255,l=t<<16|n<<8|c;for(let i=0;i<4&&e*8+i*6<a.sigBytes*8;i++)s.push(r.charAt(l>>>6*(3-i)&63))}return s.join("")}},rt={parse(a){const r=a.length,s=[];for(let e=0;e<r;e++)s[e>>>2]|=(a.charCodeAt(e)&255)<<24-e%4*8;return new w(s,r)}},nt={parse(a){return rt.parse(unescape(encodeURIComponent(a)))}};class at{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=nt.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let c=0;c<t;c+=this.blockSize)this._doProcessBlock(this._data.words,c);s=this._data.words.splice(0,t),this._data.sigBytes-=n}return new w(s,n)}}class it extends at{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const U=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ot=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class ct extends it{constructor(){super(...arguments),this._hash=new w([...U])}reset(){super.reset(),this._hash=new w([...U])}_doProcessBlock(r,s){const e=this._hash.words;let t=e[0],n=e[1],c=e[2],l=e[3],i=e[4],u=e[5],h=e[6],d=e[7];for(let o=0;o<64;o++){if(o<16)B[o]=r[s+o]|0;else{const v=B[o-15],b=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,_=B[o-2],M=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;B[o]=b+B[o-7]+M+B[o-16]}const p=i&u^~i&h,f=t&n^t&c^n&c,y=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),x=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),S=d+x+p+ot[o]+B[o],m=y+f;d=h,h=u,u=i,i=l+S|0,l=c,c=n,n=t,t=S+m|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+c|0,e[3]=e[3]+l|0,e[4]=e[4]+i|0,e[5]=e[5]+u|0,e[6]=e[6]+h|0,e[7]=e[7]+d|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function lt(a){return new ct().finalize(a).toString(st)}function ut(a,r={}){const s=typeof a=="string"?a:X(a,r);return lt(s).slice(0,10)}function ft(a,r,s){const[e={},t]=typeof r=="string"?[{},r]:[r,s],n=e.key||ut([t,k(e.baseURL),typeof a=="string"?a:"",k(e.params||e.query)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const c=n===t?"$f"+n:n,l=W(()=>{let b=a;return typeof b=="function"&&(b=b()),k(b)});if(!e.baseURL&&typeof l.value=="string"&&l.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:u,default:h,transform:d,pick:o,watch:p,immediate:f,...y}=e,x=$({...y,cache:typeof e.cache=="boolean"?void 0:e.cache}),S={server:i,lazy:u,default:h,transform:d,pick:o,immediate:f,watch:p===!1?[]:[x,l,...p||[]]};let m;return Q(c,()=>{var _;return(_=m==null?void 0:m.abort)==null||_.call(m),m=typeof AbortController<"u"?new AbortController:{},typeof l.value=="string"&&l.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(l.value,{signal:m.signal,...x})},S)}const ht={class:"p-16"},dt={class:"table-auto text-white"},yt=g("thead",null,[g("tr",null,[g("th",{class:"px-4 py-2"},"Name"),g("th",{class:"px-4 py-2"},"Email"),g("th",{class:"px-4 py-2"},"Role")])],-1),pt={class:"border px-4 py-2"},gt={class:"border px-4 py-2"},mt={class:"border px-4 py-2"},wt=V({__name:"user",async setup(a){let r,s;const{data:e}=([r,s]=I(()=>ft("/api/getUsers","$hBZ0rZwLoL")),r=await r,s(),r);return(t,n)=>(z(),C("div",ht,[g("table",dt,[yt,g("tbody",null,[(z(!0),C(J,null,Z(k(e),c=>(z(),C("tr",{key:c.id},[g("td",pt,O(c.name),1),g("td",gt,O(c.email),1),g("td",mt,O(c.role),1)]))),128))])])]))}});export{wt as default};
