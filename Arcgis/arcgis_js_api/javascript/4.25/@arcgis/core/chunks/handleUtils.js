/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{i as r}from"./maybe.js";function o(o){return e((()=>o.forEach((o=>r(o)&&o.remove()))))}function e(r){return{remove:()=>{r&&(r(),r=void 0)}}}function n(o){return e((()=>{const e=o();r(e)&&e.remove()}))}function t(o){return e(r(o)?()=>o.destroy():void 0)}export{t as d,o as h,e as m,n as r};
