/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{h as e}from"./object.js";import{i as t,a as r}from"./maybe.js";var o;function n(e,o,n={}){const u=i(e);for(;u.length>1;){const e=a(o,u.shift(),n);if(t(e))return e}return function(e,t,o={}){if(!window.WebGLRenderingContext)return s(e,c),null;const n=a(e,t,o);return r(n)&&s(e,l),n}(o,u.shift(),n)}function i(t){const r=e("esri-force-webgl");if(r===o.WEBGL1||r===o.WEBGL2)return[r];switch(t){case"2d":return e("mac")&&e("chrome")?[o.WEBGL1,o.WEBGL2]:[o.WEBGL2,o.WEBGL1];case"3d":return[o.WEBGL2,o.WEBGL1]}}function a(e,t,r={}){const n=t===o.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let i=null;for(const t of n){try{i=e.getContext(t,r)}catch(e){}if(i)break}return i}function s(e,t){const r=e.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+t+"</div></div></td></tr></table>")}!function(e){e[e.WEBGL1=1]="WEBGL1",e[e.WEBGL2=2]="WEBGL2"}(o||(o={}));const c='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',l='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';export{o as C,n as a,a as c,i as g};