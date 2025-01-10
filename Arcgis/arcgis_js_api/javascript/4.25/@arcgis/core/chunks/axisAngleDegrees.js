/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{r,d as s}from"./mathUtils.js";import{s as t,m as n,g as a}from"./quat.js";import{c as o}from"./quatf64.js";import{c as u,h as f,n as i,i as c}from"./vec3.js";function e(r=q){return[r[0],r[1],r[2],r[3]]}function m(r,s,t=e()){return u(t,r),t[3]=s,t}function p(r,s,t=e()){return f(t,r,s),i(t,t),t[3]=-c(r,s),t}function j(s,o,u=e()){return t(v,s,h(s)),t(b,o,h(o)),n(v,b,v),f=u,i=r(a(u,v)),f[3]=i,f;var f,i}function d(r){return r}function g(r){return r[3]}function h(r){return s(r[3])}const q=[0,0,1,0],v=o(),b=o();e();export{j as a,h as b,e as c,d,p as e,m as f,g};
