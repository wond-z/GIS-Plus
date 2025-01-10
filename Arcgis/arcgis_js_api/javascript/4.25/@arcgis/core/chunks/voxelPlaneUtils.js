/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{s as a,m as t}from"./quat.js";import{c as o}from"./quatf64.js";import{c as r,n as s,p as n,d as m}from"./vec3.js";import{a as c,t as e}from"./common.js";const f=m(),i=o(),p=o(),u=o(),j=new Float64Array([0,0,1]),l=new Float64Array([0,1,0]),w=new Float64Array([1,0,0]);function y(t){r(f,t),s(f,f);const m=Math.atan2(f[1],f[0]),e=a(o(),j,-m);n(f,f,e);const i=-1*Math.atan2(f[2],f[0]);return[c(m)+270,c(i)+90]}function A(o,m){return a(p,j,e(o-270)),a(u,l,e(m-90)),t(i,p,u),r(f,w),n(f,f,i),s(f,f),[f[0],f[1],f[2]]}export{A as a,y as c};
