"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2197,5777,9914],{93314:(e,t,s)=>{s.d(t,{Z:()=>g});var r,i=s(29768),n=s(12047),a=s(71252),o=s(35197),l=s(34250),h=(s(76506),s(91306),s(97714)),c=s(17533),u=s(2906);s(21972),s(60474),s(66396),s(86656),s(71552),s(92143),s(31450),s(40642),s(91055),s(6540),s(19657),s(6906),s(50406),s(60991);let f=r=class extends n.wq{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return m}static get empty(){return d}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new r({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,a.i)(this.start)?this.start.getTime():this.start,s=(0,a.i)(this.end)?this.end.getTime():this.end,r=(0,a.i)(e.start)?e.start.getTime():e.start,i=(0,a.i)(e.end)?e.end.getTime():e.end;return t===r&&s===i}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,a.g)(this.start,(t=>(0,o.t)(t,e))),s=(0,a.g)(this.end,(t=>{const s=(0,o.t)(t,e);return t.getTime()===s.getTime()?s:(0,o.o)(s,1,e)}));return new r({start:t,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return r.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,a.m)(this.start,-1/0,(e=>e.getTime())),s=(0,a.m)(this.end,1/0,(e=>e.getTime())),i=(0,a.m)(e.start,-1/0,(e=>e.getTime())),n=(0,a.m)(e.end,1/0,(e=>e.getTime()));let o,l;if(i>=t&&i<=s?o=i:t>=i&&t<=n&&(o=t),s>=i&&s<=n?l=s:n>=t&&n<=s&&(l=n),null!=o&&null!=l&&!isNaN(o)&&!isNaN(l)){const e=new r;return e.start=o===-1/0?null:new Date(o),e.end=l===1/0?null:new Date(l),e}return r.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const s=new r,{start:i,end:n}=this;return(0,a.i)(i)&&(s.start=(0,o.o)(i,e,t)),(0,a.i)(n)&&(s.end=(0,o.o)(n,e,t)),s}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return m.clone();const t=(0,a.i)(this.start)&&(0,a.i)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,s=(0,a.i)(this.end)&&(0,a.i)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new r({start:t,end:s})}};(0,i._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],f.prototype,"end",void 0),(0,i._)([(0,h.r)("end")],f.prototype,"readEnd",null),(0,i._)([(0,u.w)("end")],f.prototype,"writeEnd",null),(0,i._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"isAllTime",null),(0,i._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"isEmpty",null),(0,i._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],f.prototype,"start",void 0),(0,i._)([(0,h.r)("start")],f.prototype,"readStart",null),(0,i._)([(0,u.w)("start")],f.prototype,"writeStart",null),f=r=(0,i._)([(0,c.j)("esri.TimeExtent")],f);const m=new f,d=new f({start:void 0,end:void 0}),g=f},89914:(e,t,s)=>{s.d(t,{S:()=>i});var r=s(21972);class i{constructor(){this._observers=[]}observe(e){return this._observers.includes(e)||this._observers.push(e),new r.c(this._observers,e)}notify(){const e=this._observers.slice();for(let t=0;t<e.length;++t){const s=e[t];s.onInvalidated(),s.onCommitted()}}}},5777:(e,t,s)=>{s.d(t,{a:()=>n,c:()=>r,g:()=>i});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==s.g?s.g:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}},53326:(e,t,s)=>{s.d(t,{A:()=>c,B:()=>g,N:()=>_,a:()=>l,b:()=>b,c:()=>n,d:()=>f,e:()=>h,f:()=>a,i:()=>d,p:()=>m,s:()=>u,t:()=>o});var r=s(71252),i=s(21801);function n(e=y){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function a(e,t,s,r,i,a,o=n()){return o[0]=e,o[1]=t,o[2]=s,o[3]=r,o[4]=i,o[5]=a,o}function o(e,t){const s=isFinite(e[2])||isFinite(e[5]);return new i.Z(s?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function h(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function c(e,t=[0,0,0]){return t[0]=function(e){return e[0]>=e[3]?0:e[3]-e[0]}(e),t[1]=function(e){return e[1]>=e[4]?0:e[4]-e[1]}(e),t[2]=function(e){return e[2]>=e[5]?0:e[5]-e[2]}(e),t}function u(e,t,s=e){return s[0]=t[0],s[1]=t[1],s[2]=t[2],s!==e&&(s[3]=e[3],s[4]=e[4],s[5]=e[5]),s}function f(e,t,s=e){return s[3]=t[0],s[4]=t[1],s[5]=t[2],s!==e&&(s[0]=e[0],s[1]=e[1],s[2]=e[2]),e}function m(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function d(e){return e?m(e,_):n(_)}function g(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function p(e){return 6===e.length}function b(e,t,s){if((0,r.a)(e)||(0,r.a)(t))return e===t;if(!p(e)||!p(t))return!1;if(s){for(let r=0;r<e.length;r++)if(!s(e[r],t[r]))return!1}else for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}s(92482);const _=[1/0,1/0,1/0,-1/0,-1/0,-1/0],y=[0,0,0,0,0,0];n()},65775:(e,t,s)=>{s.d(t,{B:()=>d,a:()=>m,b:()=>g,c:()=>o,d:()=>p,e:()=>b,f:()=>f,g:()=>c,i:()=>n,k:()=>h,l:()=>_,m:()=>l,s:()=>i,t:()=>a,z:()=>u});var r=s(29794);function i(e,t,s,r,i,n,a,o,l,h,c,u,f,m,d,g,p){return e[0]=t,e[1]=s,e[2]=r,e[3]=i,e[4]=n,e[5]=a,e[6]=o,e[7]=l,e[8]=h,e[9]=c,e[10]=u,e[11]=f,e[12]=m,e[13]=d,e[14]=g,e[15]=p,e}function n(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function a(e,t){if(e===t){const s=t[1],r=t[2],i=t[3],n=t[6],a=t[7],o=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=s,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=n,e[11]=t[14],e[12]=i,e[13]=a,e[14]=o}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function o(e,t){const s=t[0],r=t[1],i=t[2],n=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],f=t[10],m=t[11],d=t[12],g=t[13],p=t[14],b=t[15],_=s*o-r*a,y=s*l-i*a,v=s*h-n*a,M=r*l-i*o,C=r*h-n*o,E=i*h-n*l,w=c*g-u*d,D=c*p-f*d,x=c*b-m*d,A=u*p-f*g,S=u*b-m*g,O=f*b-m*p;let T=_*O-y*S+v*A+M*x-C*D+E*w;return T?(T=1/T,e[0]=(o*O-l*S+h*A)*T,e[1]=(i*S-r*O-n*A)*T,e[2]=(g*E-p*C+b*M)*T,e[3]=(f*C-u*E-m*M)*T,e[4]=(l*x-a*O-h*D)*T,e[5]=(s*O-i*x+n*D)*T,e[6]=(p*v-d*E-b*y)*T,e[7]=(c*E-f*v+m*y)*T,e[8]=(a*S-o*x+h*w)*T,e[9]=(r*x-s*S-n*w)*T,e[10]=(d*C-g*v+b*_)*T,e[11]=(u*v-c*C-m*_)*T,e[12]=(o*D-a*A-l*w)*T,e[13]=(s*A-r*D+i*w)*T,e[14]=(g*y-d*M-p*_)*T,e[15]=(c*M-u*y+f*_)*T,e):null}function l(e,t,s){const r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],l=t[5],h=t[6],c=t[7],u=t[8],f=t[9],m=t[10],d=t[11],g=t[12],p=t[13],b=t[14],_=t[15];let y=s[0],v=s[1],M=s[2],C=s[3];return e[0]=y*r+v*o+M*u+C*g,e[1]=y*i+v*l+M*f+C*p,e[2]=y*n+v*h+M*m+C*b,e[3]=y*a+v*c+M*d+C*_,y=s[4],v=s[5],M=s[6],C=s[7],e[4]=y*r+v*o+M*u+C*g,e[5]=y*i+v*l+M*f+C*p,e[6]=y*n+v*h+M*m+C*b,e[7]=y*a+v*c+M*d+C*_,y=s[8],v=s[9],M=s[10],C=s[11],e[8]=y*r+v*o+M*u+C*g,e[9]=y*i+v*l+M*f+C*p,e[10]=y*n+v*h+M*m+C*b,e[11]=y*a+v*c+M*d+C*_,y=s[12],v=s[13],M=s[14],C=s[15],e[12]=y*r+v*o+M*u+C*g,e[13]=y*i+v*l+M*f+C*p,e[14]=y*n+v*h+M*m+C*b,e[15]=y*a+v*c+M*d+C*_,e}function h(e,t,s){const r=s[0],i=s[1],n=s[2];if(t===e)e[12]=t[0]*r+t[4]*i+t[8]*n+t[12],e[13]=t[1]*r+t[5]*i+t[9]*n+t[13],e[14]=t[2]*r+t[6]*i+t[10]*n+t[14],e[15]=t[3]*r+t[7]*i+t[11]*n+t[15];else{const s=t[0],a=t[1],o=t[2],l=t[3],h=t[4],c=t[5],u=t[6],f=t[7],m=t[8],d=t[9],g=t[10],p=t[11];e[0]=s,e[1]=a,e[2]=o,e[3]=l,e[4]=h,e[5]=c,e[6]=u,e[7]=f,e[8]=m,e[9]=d,e[10]=g,e[11]=p,e[12]=s*r+h*i+m*n+t[12],e[13]=a*r+c*i+d*n+t[13],e[14]=o*r+u*i+g*n+t[14],e[15]=l*r+f*i+p*n+t[15]}return e}function c(e,t,s){const r=s[0],i=s[1],n=s[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function u(e,t,s,i){let n,a,o,l,h,c,u,f,m,d,g,p,b,_,y,v,M,C,E,w,D,x,A,S,O=i[0],T=i[1],R=i[2],F=Math.sqrt(O*O+T*T+R*R);return F<(0,r.g)()?null:(F=1/F,O*=F,T*=F,R*=F,n=Math.sin(s),a=Math.cos(s),o=1-a,l=t[0],h=t[1],c=t[2],u=t[3],f=t[4],m=t[5],d=t[6],g=t[7],p=t[8],b=t[9],_=t[10],y=t[11],v=O*O*o+a,M=T*O*o+R*n,C=R*O*o-T*n,E=O*T*o-R*n,w=T*T*o+a,D=R*T*o+O*n,x=O*R*o+T*n,A=T*R*o-O*n,S=R*R*o+a,e[0]=l*v+f*M+p*C,e[1]=h*v+m*M+b*C,e[2]=c*v+d*M+_*C,e[3]=u*v+g*M+y*C,e[4]=l*E+f*w+p*D,e[5]=h*E+m*w+b*D,e[6]=c*E+d*w+_*D,e[7]=u*E+g*w+y*D,e[8]=l*x+f*A+p*S,e[9]=h*x+m*A+b*S,e[10]=c*x+d*A+_*S,e[11]=u*x+g*A+y*S,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function f(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function m(e,t,s){if(0===t)return n(e);let i,a,o,l=s[0],h=s[1],c=s[2],u=Math.sqrt(l*l+h*h+c*c);return u<(0,r.g)()?null:(u=1/u,l*=u,h*=u,c*=u,i=Math.sin(t),a=Math.cos(t),o=1-a,e[0]=l*l*o+a,e[1]=h*l*o+c*i,e[2]=c*l*o-h*i,e[3]=0,e[4]=l*h*o-c*i,e[5]=h*h*o+a,e[6]=c*h*o+l*i,e[7]=0,e[8]=l*c*o+h*i,e[9]=h*c*o-l*i,e[10]=c*c*o+a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function d(e,t){const s=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=s,e[7]=0,e[8]=0,e[9]=-s,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function g(e,t,s,r){const i=t[0],n=t[1],a=t[2],o=t[3],l=i+i,h=n+n,c=a+a,u=i*l,f=i*h,m=i*c,d=n*h,g=n*c,p=a*c,b=o*l,_=o*h,y=o*c,v=r[0],M=r[1],C=r[2];return e[0]=(1-(d+p))*v,e[1]=(f+y)*v,e[2]=(m-_)*v,e[3]=0,e[4]=(f-y)*M,e[5]=(1-(u+p))*M,e[6]=(g+b)*M,e[7]=0,e[8]=(m+_)*C,e[9]=(g-b)*C,e[10]=(1-(u+d))*C,e[11]=0,e[12]=s[0],e[13]=s[1],e[14]=s[2],e[15]=1,e}function p(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function b(e,t){if(e===t)return!0;const s=e[0],i=e[1],n=e[2],a=e[3],o=e[4],l=e[5],h=e[6],c=e[7],u=e[8],f=e[9],m=e[10],d=e[11],g=e[12],p=e[13],b=e[14],_=e[15],y=t[0],v=t[1],M=t[2],C=t[3],E=t[4],w=t[5],D=t[6],x=t[7],A=t[8],S=t[9],O=t[10],T=t[11],R=t[12],F=t[13],I=t[14],N=t[15],j=(0,r.g)();return Math.abs(s-y)<=j*Math.max(1,Math.abs(s),Math.abs(y))&&Math.abs(i-v)<=j*Math.max(1,Math.abs(i),Math.abs(v))&&Math.abs(n-M)<=j*Math.max(1,Math.abs(n),Math.abs(M))&&Math.abs(a-C)<=j*Math.max(1,Math.abs(a),Math.abs(C))&&Math.abs(o-E)<=j*Math.max(1,Math.abs(o),Math.abs(E))&&Math.abs(l-w)<=j*Math.max(1,Math.abs(l),Math.abs(w))&&Math.abs(h-D)<=j*Math.max(1,Math.abs(h),Math.abs(D))&&Math.abs(c-x)<=j*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(u-A)<=j*Math.max(1,Math.abs(u),Math.abs(A))&&Math.abs(f-S)<=j*Math.max(1,Math.abs(f),Math.abs(S))&&Math.abs(m-O)<=j*Math.max(1,Math.abs(m),Math.abs(O))&&Math.abs(d-T)<=j*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(g-R)<=j*Math.max(1,Math.abs(g),Math.abs(R))&&Math.abs(p-F)<=j*Math.max(1,Math.abs(p),Math.abs(F))&&Math.abs(b-I)<=j*Math.max(1,Math.abs(b),Math.abs(I))&&Math.abs(_-N)<=j*Math.max(1,Math.abs(_),Math.abs(N))}function _(e){const t=(0,r.g)(),s=e[0],i=e[1],n=e[2],a=e[4],o=e[5],l=e[6],h=e[8],c=e[9],u=e[10];return Math.abs(1-(s*s+a*a+h*h))<=t&&Math.abs(1-(i*i+o*o+c*c))<=t&&Math.abs(1-(n*n+l*l+u*u))<=t}},3530:(e,t,s)=>{function r(e){return(t,s)=>{t[s]=e}}s.d(t,{s:()=>r})},35197:(e,t,s)=>{s.d(t,{c:()=>o,o:()=>n,t:()=>a}),s(71552);const r={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function n(e,t,s){const r=new Date(e.getTime());if(t&&s){const e=i[s],{getter:n,setter:a,multiplier:o}=e;if("months"===s){const e=function(e,t){const s=new Date(e,t+1,1);return s.setDate(0),s.getDate()}(r.getFullYear(),r.getMonth()+t);r.getDate()>e&&r.setDate(e)}r[a](r[n]()+t*o)}return r}function a(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function o(e,t,s){return 0===e?0:e*r[t]/r[s]}},66122:(e,t,s)=>{s.d(t,{J:()=>h,j:()=>c});var r=s(29768),i=s(21972),n=(s(71552),s(76506)),a=(s(92143),s(71252)),o=s(66396),l=s(17533);s(60474),s(86656),s(91055),s(6540),s(34250),s(91306),s(60991),s(31450),s(40642),s(19657),s(6906),s(50406);const h=e=>{let t=class extends e{clone(){const e=(0,a.c)((0,o.g)(this),"unable to clone instance of non-accessor class"),t=e.metadatas,s=e.store,r={},l=new Map;for(const e in t){const a=t[e],o=s?.originOf(e),h=a.clonable;if(a.readOnly||!1===h||o!==i.O.USER&&o!==i.O.DEFAULTS&&o!==i.O.WEB_MAP&&o!==i.O.WEB_SCENE)continue;const c=this[e];let u=null;u="function"==typeof h?h(c):"reference"===h?c:(0,n.Vo)(c),null!=c&&null==u||(o===i.O.DEFAULTS?l.set(e,u):r[e]=u)}const h=new(0,Object.getPrototypeOf(this).constructor)(r);if(l.size){const e=(0,o.g)(h)?.store;if(e)for(const[t,s]of l)e.set(t,s,i.O.DEFAULTS)}return h}};return t=(0,r._)([(0,l.j)("esri.core.Clonable")],t),t};let c=class extends(h(i.Z)){};c=(0,r._)([(0,l.j)("esri.core.Clonable")],c)},15324:(e,t,s)=>{s.d(t,{Z:()=>T});var r,i,n,a=s(29768),o=s(91055),l=s(75067),h=s(76506),c=s(71252),u=s(6906),f=s(34250),m=s(91306),d=s(3530),g=s(17533),p=s(6540),b=s(89914);s(21972),s(60474),s(66396),s(86656),s(71552),s(92143),s(31450),s(40642),s(19657),s(50406),s(60991),(n=r||(r={}))[n.ADD=1]="ADD",n[n.REMOVE=2]="REMOVE",n[n.MOVE=4]="MOVE";const _=new o.O(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1})),y=()=>{};function v(e){return e?e instanceof O?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function M(e){if(e&&e.length)return e[0]}function C(e,t,s,r){const i=Math.min(e.length-s,t.length-r);let n=0;for(;n<i&&e[s+n]===t[r+n];)n++;return n}function E(e,t,s,r){t&&t.forEach(((t,i,n)=>{e.push(t),E(e,s.call(r,t,i,n),s,r)}))}const w=new Set,D=new Set,x=new Set,A=new Map;let S=0,O=i=class extends l.Z.EventedAccessor{constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new b.S,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:S++})}static isCollection(e){return null!=e&&e instanceof i}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof i?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return(0,p.t)(this._observable),this._items}set items(e){this._emitBeforeChanges(r.ADD)||(this._splice(0,this.length,v(e)),this._emitAfterChanges(r.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=y,s.removed=!0,e.splice(e.indexOf(s),1)}}}return this._emitter.on(e,t)}once(e,t){const s=this.on(e,t);return{remove(){s.remove()}}}add(e,t){if((0,p.t)(this._observable),this._emitBeforeChanges(r.ADD))return this;const s=this.getNextIndex(t??null);return this._splice(s,0,[e]),this._emitAfterChanges(r.ADD),this}addMany(e,t=this._items.length){if((0,p.t)(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(r.ADD))return this;const s=this.getNextIndex(t);return this._splice(s,0,v(e)),this._emitAfterChanges(r.ADD),this}at(e){if((0,p.t)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if((0,p.t)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return[];const e=this._splice(0,this.length)||[];return this._emitAfterChanges(r.REMOVE),e}clone(){return(0,p.t)(this._observable),this._createNewInstance({items:this._items.map(h.d9)})}concat(...e){(0,p.t)(this._observable);const t=e.map(v);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if((0,p.t)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const s=(0,c.b)(this._splice(0,this.length)),i=s.length;for(let r=0;r<i;r++)e.call(t,s[r],r,s);this._emitAfterChanges(r.REMOVE)}every(e,t){return(0,p.t)(this._observable),this._items.every(e,t)}filter(e,t){let s;return(0,p.t)(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return(0,p.t)(this._observable),this._items.find(e,t)}findIndex(e,t){return(0,p.t)(this._observable),this._items.findIndex(e,t)}flatten(e,t){(0,p.t)(this._observable);const s=[];return E(s,this,e,t),new i(s)}forEach(e,t){return(0,p.t)(this._observable),this._items.forEach(e,t)}getItemAt(e){return(0,p.t)(this._observable),this._items[e]}getNextIndex(e){(0,p.t)(this._observable);const t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return(0,p.t)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return(0,p.t)(this._observable),this._items.indexOf(e,t)}join(e=","){return(0,p.t)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return(0,p.t)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){(0,p.t)(this._observable);const s=this._items.map(e,t);return new i({items:s})}reorder(e,t=this.length-1){(0,p.t)(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(r.MOVE))return e;this._splice(s,1),this._splice(t,0,[e]),this._emitAfterChanges(r.MOVE)}return e}}pop(){if((0,p.t)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const e=M(this._splice(this.length-1,1));return this._emitAfterChanges(r.REMOVE),e}push(...e){return(0,p.t)(this._observable),this._emitBeforeChanges(r.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(r.ADD)),this.length}reduce(e,t){(0,p.t)(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){(0,p.t)(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return(0,p.t)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if((0,p.t)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(r.REMOVE))return;const t=M(this._splice(e,1));return this._emitAfterChanges(r.REMOVE),t}removeMany(e){if((0,p.t)(this._observable),!e||!e.length||this._emitBeforeChanges(r.REMOVE))return[];const t=e instanceof i?e.toArray():e,s=this._items,n=[],a=t.length;for(let e=0;e<a;e++){const r=t[e],i=s.indexOf(r);if(i>-1){const r=1+C(t,s,e+1,i+1),a=this._splice(i,r);a&&a.length>0&&n.push.apply(n,a),e+=r-1}}return this._emitAfterChanges(r.REMOVE),n}reverse(){if((0,p.t)(this._observable),this._emitBeforeChanges(r.MOVE))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(r.MOVE),this}shift(){if((0,p.t)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const e=M(this._splice(0,1));return this._emitAfterChanges(r.REMOVE),e}slice(e=0,t=this.length){return(0,p.t)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return(0,p.t)(this._observable),this._items.some(e,t)}sort(e){if((0,p.t)(this._observable),!this.length||this._emitBeforeChanges(r.MOVE))return this;const t=(0,c.b)(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(r.MOVE),this}splice(e,t,...s){(0,p.t)(this._observable);const i=(t?r.REMOVE:0)|(s.length?r.ADD:0);if(this._emitBeforeChanges(i))return[];const n=this._splice(e,t,s)||[];return this._emitAfterChanges(i),n}toArray(){return(0,p.t)(this._observable),this._items.slice()}toJSON(){return(0,p.t)(this._observable),this.toArray()}toLocaleString(){return(0,p.t)(this._observable),this._items.toLocaleString()}toString(){return(0,p.t)(this._observable),this._items.toString()}unshift(...e){return(0,p.t)(this._observable),!e.length||this._emitBeforeChanges(r.ADD)||(this._splice(0,0,e),this._emitAfterChanges(r.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,s){const r=this._items,i=this.itemType;let n,a;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=(0,u.Os)((()=>this._dispatchChange()))),t){if(a=r.splice(e,t),this.hasEventListener("before-remove")){const t=_.acquire();t.target=this,t.cancellable=!0;for(let s=0,i=a.length;s<i;s++)n=a[s],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(a.splice(s,1),r.splice(e,0,n),e+=1,s-=1,i-=1);_.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=_.acquire();e.target=this,e.cancellable=!1;const t=a.length;for(let s=0;s<t;s++)e.reset(a[s]),this.emit("after-remove",e);_.release(e)}}if(s&&s.length){if(i){const e=[];for(const t of s){const s=i.ensureType(t);null==s&&null!=t||e.push(s)}s=e}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),a=e===this.length;if(t||n){const i=_.acquire();i.target=this,i.cancellable=!0;const o=_.acquire();o.target=this,o.cancellable=!1;for(const l of s)t?(i.reset(l),this.emit("before-add",i),i.defaultPrevented||(a?r.push(l):r.splice(e++,0,l),this._set("length",r.length),n&&(o.reset(l),this.emit("after-add",o)))):(a?r.push(l):r.splice(e++,0,l),this._set("length",r.length),o.reset(l),this.emit("after-add",o));_.release(o),_.release(i)}else{if(a)for(const e of s)r.push(e);else r.splice(e,0,...s);this._set("length",r.length)}}return(s&&s.length||a&&a.length)&&this._notifyChangeEvent(s,a),a}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=_.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,_.release(s)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=_.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),_.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const t of e){const e=t.changes;w.clear(),D.clear(),x.clear();for(const{added:t,removed:s}of e){if(t)if(0===x.size&&0===D.size)for(const e of t)w.add(e);else for(const e of t)D.has(e)?(x.add(e),D.delete(e)):x.has(e)||w.add(e);if(s)if(0===x.size&&0===w.size)for(const e of s)D.add(e);else for(const e of s)w.has(e)?w.delete(e):(x.delete(e),D.add(e))}const s=o.A.acquire();w.forEach((e=>{s.push(e)}));const r=o.A.acquire();D.forEach((e=>{r.push(e)}));const i=this._items,n=t.items,a=o.A.acquire();if(x.forEach((e=>{n.indexOf(e)!==i.indexOf(e)&&a.push(e)})),t.listeners&&(s.length||r.length||a.length)){const e={target:this,added:s,removed:r,moved:a},i=t.listeners.length;for(let s=0;s<i;s++){const r=t.listeners[s];r.removed||r.callback.call(this,e)}}o.A.release(s),o.A.release(r),o.A.release(a)}w.clear(),D.clear(),x.clear()}};O.ofType=e=>{if(!e)return i;if(A.has(e))return A.get(e);let t=null;if("function"==typeof e)t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(const s in e.typeMap){const r=e.typeMap[s].prototype.declaredClass;t?t+=` | ${r}`:t=r}let s=class extends i{};return(0,a._)([(0,d.s)({Type:e,ensureType:"function"==typeof e?(0,m.e)(e):(0,m.a)(e)})],s.prototype,"itemType",void 0),s=(0,a._)([(0,g.j)(`esri.core.Collection<${t}>`)],s),A.set(e,s),s},(0,a._)([(0,f.Cb)()],O.prototype,"length",void 0),(0,a._)([(0,f.Cb)()],O.prototype,"items",null),O=i=(0,a._)([(0,g.j)("esri.core.Collection")],O);const T=O},92197:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var r=s(29768),i=s(31450),n=s(82058),a=(s(96467),s(71252)),o=s(54179),l=s(50406),h=s(32101),c=s(34250),u=(s(76506),s(91306),s(97714)),f=s(17533),m=s(21801),d=s(60947),g=s(41617),p=s(80462),b=s(89440),_=s(39241),y=s(68219),v=s(6416),M=s(67541),C=s(30776),E=s(78548),w=s(11305),D=s(60669),x=s(5909);s(71552),s(88762),s(60991),s(92143),s(40642),s(63571),s(59465),s(57251),s(2906),s(14249),s(60217),s(74569),s(73796),s(12047),s(21972),s(60474),s(66396),s(86656),s(91055),s(6540),s(19657),s(6906),s(84069),s(91597),s(86787),s(35132),s(89623),s(44567),s(98380),s(92896),s(22781),s(32422),s(48027),s(54174),s(82426),s(72836),s(29794),s(63130),s(25696),s(98402),s(42775),s(95834),s(34394),s(57150),s(76726),s(20444),s(76393),s(2497),s(49906),s(46527),s(11799),s(48649),s(59877),s(9960),s(30823),s(53326),s(92482),s(5853),s(39141),s(38742),s(48243),s(15324),s(75067),s(89914),s(34635),s(10401),s(49900),s(81184),s(33101),s(3482),s(67477),s(78533),s(74653),s(91091),s(58943),s(70737),s(36834),s(66122),s(8487),s(17817),s(90814),s(15459),s(97189),s(61847),s(28212),s(16955),s(22401),s(48699),s(77894),s(55187),s(8586),s(44509),s(69814),s(62259),s(44790),s(48208),s(51589),s(3296),s(92200),s(65949),s(22465),s(65775),s(5777),s(41864),s(56420),s(73173),s(74742),s(28239),s(93314),s(35197),s(1557),s(47842),s(17298),s(85557),s(53785),s(95587);const A=["atom","xml"],S={base:C.Z,key:"type",typeMap:{"simple-line":E.Z},errorContext:"symbol"},O={base:C.Z,key:"type",typeMap:{"picture-marker":w.Z,"simple-marker":D.Z},errorContext:"symbol"},T={base:C.Z,key:"type",typeMap:{"simple-fill":x.Z},errorContext:"symbol"};let R=class extends((0,p.h)((0,y.Q)((0,b.O)((0,_.I)((0,v.M)((0,o.M)(g.Z))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline?.style.includes("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,h.vt)(this.url,A)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=(0,a.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(l.r9).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:s}=await(0,n.default)(i.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,d.a)(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return s}_hasGeometry(e){return this.featureCollections?.some((t=>t.featureSet?.geometryType===e&&t.featureSet.features?.length>0))??!1}};(0,r._)([(0,c.Cb)()],R.prototype,"description",void 0),(0,r._)([(0,c.Cb)()],R.prototype,"featureCollections",void 0),(0,r._)([(0,u.r)("service","featureCollections",["featureCollection.layers"])],R.prototype,"readFeatureCollections",null),(0,r._)([(0,c.Cb)({type:m.Z,json:{name:"lookAtExtent"}})],R.prototype,"fullExtent",void 0),(0,r._)([(0,c.Cb)(M.i)],R.prototype,"id",void 0),(0,r._)([(0,c.Cb)(M.a)],R.prototype,"legendEnabled",void 0),(0,r._)([(0,c.Cb)({types:S,json:{write:!0}})],R.prototype,"lineSymbol",void 0),(0,r._)([(0,c.Cb)({type:["show","hide"]})],R.prototype,"listMode",void 0),(0,r._)([(0,c.Cb)({types:O,json:{write:!0}})],R.prototype,"pointSymbol",void 0),(0,r._)([(0,c.Cb)({types:T,json:{write:!0}})],R.prototype,"polygonSymbol",void 0),(0,r._)([(0,c.Cb)({type:["GeoRSS"]})],R.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.Cb)(M.u)],R.prototype,"url",void 0),(0,r._)([(0,c.Cb)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],R.prototype,"title",null),(0,r._)([(0,c.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],R.prototype,"type",void 0),R=(0,r._)([(0,f.j)("esri.layers.GeoRSSLayer")],R);const F=R},68219:(e,t,s)=>{s.d(t,{Q:()=>b});var r=s(29768),i=s(92143),n=s(50406),a=s(34250),o=(s(76506),s(91306),s(17533)),l=s(15324),h=(s(71552),s(60991),s(19657));s(31450),s(40642),s(60474),s(66396),s(86656),s(6540),s(91055),s(75067),s(21972),s(6906),s(89914);const c=new l.Z,u=new WeakMap;function f(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function m(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:m(t,e%t):0}let d=0,g=0;function p(){const e=Date.now();for(const t of c)t.refreshInterval&&e-(u.get(t)??0)+5>=6e4*t.refreshInterval&&(u.set(t,e),t.refresh(e))}(0,h.a)((()=>{const e=Date.now();let t=0;for(const s of c)t=m(Math.round(6e4*s.refreshInterval),t),s.refreshInterval?u.get(s)||u.set(s,e):u.delete(s);if(t!==g){if(g=t,clearInterval(d),0===g)return void(d=0);d=setInterval(p,g)}}));const b=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,n.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{f(this)&&c.push(this)}),(()=>{}))}destroy(){f(this)&&c.includes(this)&&c.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,n.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{i.L.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,r._)([(0,a.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,r._)([(0,a.Cb)()],t.prototype,"refreshParameters",null),t=(0,r._)([(0,o.j)("esri.layers.mixins.RefreshableLayer")],t),t}}}]);