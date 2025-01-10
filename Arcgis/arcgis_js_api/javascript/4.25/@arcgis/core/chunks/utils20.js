/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as t,i as s}from"./maybe.js";import{m as r,j as n,c as o,t as a}from"./mat4.js";import{c as e}from"./mat4f64.js";import{s as i}from"./Util2.js";import{e as m}from"./doublePrecisionUtils.js";function f(s,r){return t(s)&&(s=[]),s.push(r),s}function c(s,r){if(t(s))return null;const n=s.filter((t=>t!==r));return 0===n.length?null:n}function u(t){return!!s(t)&&!t.visible}function l(t,e,m){const f=t.origin.vec3;i(b,-f[0],-f[1],-f[2]),s(t.transformation)?r(e,b,t.transformation):n(e,b),o(m,e),a(m,m)}function p(t,s,r,n,o){j[0]=t.get(s,0),j[1]=t.get(s,1),j[2]=t.get(s,2),m(j,g,3),r.set(o,0,g[0]),n.set(o,0,g[1]),r.set(o,1,g[2]),n.set(o,1,g[3]),r.set(o,2,g[4]),n.set(o,2,g[5])}const j=new Float64Array(3),g=new Float32Array(6),b=e();export{f as a,l as c,p as e,u as i,c as r};
