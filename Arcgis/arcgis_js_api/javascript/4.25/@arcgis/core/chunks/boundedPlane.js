/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"./object.js";import{L as s}from"./Logger.js";import{g as i}from"./mathUtils.js";import{O as n,s as t,j as a}from"./ray.js";import{c as o,t as e,a as r}from"./mat4.js";import{c}from"./mat4f64.js";import{f as u,d as g,k as b,c as f,m as l,l as p,e as m,g as d,a as h,s as I,C as j,F as P,b as N,j as v,n as w,H as M}from"./vec3.js";import{p as T,A as y}from"./vector.js";import{c as S,h as A,d as _}from"./lineSegment.js";import{c as O,j as V,n as x,k as E,w as F,a as Y,l as k,h as q,m as B,o as C,i as L,q as U}from"./plane.js";const R=s.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class z{constructor(){this.plane=O(),this.origin=g(),this.basis1=g(),this.basis2=g()}}function G(s=ls){return{plane:O(s.plane),origin:b(s.origin),basis1:b(s.basis1),basis2:b(s.basis2)}}function H(s,i=G()){return W(s.origin,s.basis1,s.basis2,i)}function W(s,i,n,t=G()){return f(t.origin,s),f(t.basis1,i),f(t.basis2,n),X(t),a=t,o="fromValues()",Math.abs(l(a.basis1,a.basis2)/(p(a.basis1)*p(a.basis2)))>1e-6&&R.warn(o,"Provided basis vectors are not perpendicular"),Math.abs(l(a.basis1,cs(a)))>1e-6&&R.warn(o,"Basis vectors and plane normal are not perpendicular"),Math.abs(-l(cs(a),a.origin)-a.plane[3])>1e-6&&R.warn(o,"Plane offset is not consistent with plane origin"),t;var a,o}function X(s){V(s.basis2,s.basis1,s.origin,s.plane)}function Z(s,i,n){s!==n&&H(s,n);const a=d(t.get(),cs(s),i);return h(n.origin,n.origin,a),n.plane[3]-=i,n}function D(s,i=G()){const n=(s[2]-s[0])/2,t=(s[3]-s[1])/2;return I(i.origin,s[0]+n,s[1]+t,0),I(i.basis1,n,0,0),I(i.basis2,0,t,0),k(0,0,1,0,i.plane),i}function J(s,i,n){return!!q(s.plane,i,n)&&us(s,n)}function K(s,n,a){const o=ps.get();fs(s,n,o,ps.get());let e=Number.POSITIVE_INFINITY;for(const r of Is){const c=bs(s,r,ms.get()),u=t.get();if(B(o,c,u)){const s=P(t.get(),n.origin,u),o=Math.abs(i(l(n.direction,s)));o<e&&(e=o,f(a,u))}}return e===Number.POSITIVE_INFINITY?Q(s,n,a):a}function Q(s,i,n){if(J(s,i,n))return n;const o=ps.get(),e=ps.get();fs(s,i,o,e);let r=Number.POSITIVE_INFINITY;for(const c of Is){const u=bs(s,c,ms.get()),g=t.get();if(C(o,u,g)){const s=a(i,g);if(!L(e,g))continue;s<r&&(r=s,f(n,g))}}return is(s,i.origin)<r&&$(s,i.origin,n),n}function $(s,i,n){const a=U(s.plane,i,t.get()),o=A(gs(s,s.basis1),a,-1,1,t.get()),e=A(gs(s,s.basis2),a,-1,1,t.get());return N(n,h(t.get(),o,e),s.origin),n}function ss(s,i,n){const{origin:a,basis1:o,basis2:e}=s,r=N(t.get(),i,a),c=T(o,r),u=T(e,r),g=T(cs(s),r);return I(n,c,u,g)}function is(s,i){const n=ss(s,i,t.get()),{basis1:a,basis2:o}=s,e=p(a),r=p(o),c=Math.max(Math.abs(n[0])-e,0),u=Math.max(Math.abs(n[1])-r,0),g=n[2];return c*c+u*u+g*g}function ns(s,i){return Math.sqrt(is(s,i))}function ts(s,i){return L(s.plane,i)&&us(s,i)}function as(s,i){const n=-s.plane[3];return T(cs(s),i)-n}function os(s,i){return v(s.basis1,i.basis1)&&v(s.basis2,i.basis2)&&v(s.origin,i.origin)}function es(s,i,n){return s!==n&&H(s,n),o(js,i),e(js,js),m(n.basis1,s.basis1,js),m(n.basis2,s.basis2,js),m(x(n.plane),x(s.plane),js),m(n.origin,s.origin,i),E(n.plane,n.plane,n.origin),n}function rs(s,i,n,t){return s!==t&&H(s,t),r(Ps,i,n),m(t.basis1,s.basis1,Ps),m(t.basis2,s.basis2,Ps),X(t),t}function cs(s){return x(s.plane)}function us(s,i){const n=N(t.get(),i,s.origin),a=M(s.basis1),o=M(s.basis2),e=l(s.basis1,n),r=l(s.basis2,n);return-e-a<0&&e-a<0&&-r-o<0&&r-o<0}function gs(s,i){const n=ms.get();return f(n.origin,s.origin),f(n.vector,i),n}function bs(s,i,n){const{basis1:a,basis2:o,origin:e}=s,r=d(t.get(),a,i.origin[0]),c=d(t.get(),o,i.origin[1]);h(n.origin,r,c),h(n.origin,n.origin,e);const u=d(t.get(),a,i.direction[0]),g=d(t.get(),o,i.direction[1]);return d(n.vector,h(u,u,g),2),n}function fs(s,i,n,t){const a=cs(s);V(a,i.direction,i.origin,n),V(x(n),a,i.origin,t)}const ls={plane:O(),origin:u(0,0,0),basis1:u(1,0,0),basis2:u(0,1,0)},ps=new n(O),ms=new n(S),ds=g(),hs=new n((()=>G())),Is=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],js=c(),Ps=c(),Ns=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:z,create:G,wrap:function(s,i,n){const t=hs.get();return t.origin=s,t.basis1=i,t.basis2=n,t.plane=F(0,0,0,0),X(t),t},copy:H,copyWithoutVerify:function(s,i){f(i.origin,s.origin),f(i.basis1,s.basis1),f(i.basis2,s.basis2),Y(i.plane,s.plane)},fromValues:W,updateUnboundedPlane:X,elevate:Z,setExtent:function(s,i,n){return D(i,n),Z(n,as(s,s.origin),n),n},fromAABoundingRect:D,intersectRay:J,intersectRayClosestSilhouette:function(s,i,n){if(J(s,i,n))return n;const a=K(s,i,t.get());return h(n,i.origin,d(t.get(),i.direction,j(i.origin,a)/p(i.direction))),n},closestPointOnSilhouette:K,closestPoint:Q,projectPoint:$,projectPointLocal:ss,distance2:is,distance:ns,distanceToSilhouette:function(s,i){let n=Number.NEGATIVE_INFINITY;for(const t of Is){const a=bs(s,t,ms.get()),o=_(a,i);o>n&&(n=o)}return Math.sqrt(n)},extrusionContainsPoint:ts,axisAt:function(s,i,n,t){return function(s,i,n){switch(i){case y.X:f(n,s.basis1),w(n,n);break;case y.Y:f(n,s.basis2),w(n,n);break;case y.Z:f(n,cs(s))}return n}(s,n,t)},altitudeAt:as,setAltitudeAt:function(s,i,n,t){const a=as(s,i),o=d(ds,cs(s),n-a);return h(t,i,o),t},equals:os,transform:es,rotate:rs,normal:cs,UP:ls},Symbol.toStringTag,{value:"Module"}));export{z as B,H as a,Ns as b,G as c,os as d,ts as e,W as f,D as g,ns as h,J as i,cs as n,rs as r,es as t,X as u};