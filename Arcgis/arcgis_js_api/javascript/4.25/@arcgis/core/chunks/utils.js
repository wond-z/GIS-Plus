/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{h as r}from"./handleUtils.js";import{clone as t}from"../core/lang.js";import{b as n}from"./maybe.js";function e(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function a(r,t){return null!=r&&r.metadatas&&null!=r.metadatas[t]}function s(r,t,n){return i(r,t,n?{policy:n,path:""}:null)}function i(r,e,a){return e?Object.keys(e).reduce(((r,s)=>{let o=null,u="merge";if(a&&(o=a.path?`${a.path}.${s}`:s,u=a.policy(o)),"replace"===u)return r[s]=e[s],r;if(void 0===r[s])return r[s]=t(e[s]),r;let l=r[s],c=e[s];if(l===c)return r;if(Array.isArray(c)||Array.isArray(r))l=l?Array.isArray(l)?r[s]=l.concat():r[s]=[l]:r[s]=[],c&&(Array.isArray(c)||(c=[c]),c.forEach((r=>{l.includes(r)||l.push(r)})));else if(c&&"object"==typeof c)if(a){const t=a.path;a.path=n(o),r[s]=i(l,c,a),a.path=t}else r[s]=i(l,c,null);else r.hasOwnProperty(s)&&!e.hasOwnProperty(s)||(r[s]=c);return r}),r||{}):r}function o(r){return Array.isArray(r)?r:r.split(".")}function u(r){return r.includes(",")?r.split(",").map((r=>r.trim())):[r.trim()]}function l(t,n,e,a){const s=function(r){if(Array.isArray(r)){const t=[];for(const n of r)t.push(...u(n));return t}return u(r)}(n);if(1!==s.length){const n=s.map((r=>a(t,r,e)));return r(n)}return a(t,s[0],e)}function c(r){let t=!1;return()=>{t||(t=!0,r())}}export{o as a,e as g,a as i,s as m,c as o,l as p};