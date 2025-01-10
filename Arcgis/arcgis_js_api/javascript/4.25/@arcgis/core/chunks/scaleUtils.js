/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{e as t,i as n}from"./unitUtils.js";function e(e,i){const a=i||e.extent,r=e.width,s=t(a&&a.spatialReference);return a&&r?a.width/r*s*n*96:0}function i(e,i){return e/(t(i)*n*96)}function a(t){return t/(96*n)}function r(e,i){return e*(t(i)*n*96)}function s(t,n){const e=t.extent,a=t.width-(t.padding?t.padding.left+t.padding.right:0),r=i(n,e.spatialReference);return e.clone().expand(r*a/e.width)}export{r as a,i as b,a as c,s as d,e as g};
