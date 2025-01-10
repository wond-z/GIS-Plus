/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{g as n}from"./mathUtils.js";import{m as s,l as t,n as a,h as o,d as r,g as c}from"./vec3.js";var u;function i(n,t,a){const o=s(n,t)/s(n,n);return c(a,n,o)}function f(n,a){return s(n,a)/t(n)}function e(a,o){const r=s(a,o)/(t(a)*t(o));return-n(r)}function m(t,r,c){a(p,t),a(h,r);const u=s(p,h),i=n(u),f=o(p,p,h);return s(f,c)<0?2*Math.PI-i:i}!function(n){n[n.X=0]="X",n[n.Y=1]="Y",n[n.Z=2]="Z"}(u||(u={}));const p=r(),h=r();export{u as A,e as a,m as b,i as c,f as p};
