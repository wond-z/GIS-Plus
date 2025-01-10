/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{t as s,m as t,c as r,s as o}from"./mat3.js";import{c as a}from"./mat3f64.js";import{s as m}from"./vec2.js";import{s as n,t as c,d as f}from"./vec3.js";const i=f(),e=a(),u=a(),p=a();function j(t,r,o){return n(i,r[0],r[1],1),c(i,i,s(e,o)),0===i[2]?m(t,i[0],i[1]):m(t,i[0]/i[2],i[1]/i[2])}function v(s,o,a){return d(u,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),d(p,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]),t(s,r(u,u),p)}function d(a,m,f,u,p,j,v,d,g){o(a,m,u,j,f,p,v,1,1,1),n(i,d,g,1),r(e,a);const[x,b,h]=c(i,i,s(e,e));return o(e,x,0,0,0,b,0,0,0,h),t(a,e,a)}export{v as g,j as t};
