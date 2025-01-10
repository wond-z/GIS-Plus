/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as e}from"./maybe.js";import{f as r}from"./screenUtils.js";import{k as n}from"./vec2.js";import{b as o,c as t,s}from"./vec3.js";import{s as c}from"./ray.js";function i(e,n,o){return a(e,e.screenToRender(n,r(c.get())),o)}function a(t,s,i){const a=r(n(c.get(),s));if(a[2]=0,!t.unprojectFromRenderScreen(a,i.origin))return null;const u=r(n(c.get(),s));u[2]=1;const m=t.unprojectFromRenderScreen(u,c.get());return e(m)?null:(o(i.direction,m,i.origin),i)}function u(e,n,o){return m(e,e.screenToRender(n,r(c.get())),o)}function m(r,n,i){t(i.origin,r.eye);const a=s(c.get(),n[0],n[1],1),u=r.unprojectFromRenderScreen(a,c.get());return e(u)?null:(o(i.direction,u,i.origin),i)}export{a,u as b,m as c,i as f};
