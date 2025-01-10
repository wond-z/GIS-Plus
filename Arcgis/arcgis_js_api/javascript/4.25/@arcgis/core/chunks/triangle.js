/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{O as n}from"./ray.js";import{k as s,d as r,g as t,a,b as o,l as e,h as i}from"./vec3.js";import{c}from"./lineSegment.js";function p(n,s,r){const o=1e-5,{direction:e,origin:i}=s,{p0:c,p1:p,p2:f}=n,u=p[0]-c[0],m=p[1]-c[1],b=p[2]-c[2],g=f[0]-c[0],j=f[1]-c[1],d=f[2]-c[2],h=e[1]*d-j*e[2],l=e[2]*g-d*e[0],w=e[0]*j-g*e[1],k=u*h+m*l+b*w;if(k>-o&&k<o)return!1;const v=1/k,x=i[0]-c[0],y=i[1]-c[1],M=i[2]-c[2],O=v*(x*h+y*l+M*w);if(O<0||O>1)return!1;const S=y*b-m*M,q=M*u-b*x,z=x*m-u*y,A=v*(e[0]*S+e[1]*q+e[2]*z);return!(A<0||O+A>1||(r&&(t(r,e,v*(g*S+j*q+d*z)),a(r,i,r)),0))}function f(n,s,r){const t=s[0]-n[0],a=s[1]-n[1],o=r[0]-n[0],e=r[1]-n[1];return.5*Math.abs(t*e-a*o)}function u(n,s,r){return o(m,s,n),o(b,r,n),e(i(m,m,b))/2}new n(c),new n((()=>({p0:r(),p1:r(),p2:r()})));const m=r(),b=r();export{f as a,u as b,p as i};
