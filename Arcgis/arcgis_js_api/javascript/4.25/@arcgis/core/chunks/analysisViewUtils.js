/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{c as o}from"./asyncUtils.js";import{a as t,r as i}from"./maybe.js";import{onAbort as a}from"../core/promiseUtils.js";import{watch as e,syncAndInitial as s,whenOnce as n}from"../core/reactiveUtils.js";function r(e,s){e.interactive=!0;const{tool:r,view:c}=e;c.activeTool=r;let l=a(s,(()=>{c.activeTool===r&&(c.activeTool=null)}));return o((async o=>{await n((()=>t(r)||!r.active),o),l=i(l)}),s)}function c(o,t){return e((()=>o.interactive),(()=>function(o,t){o.interactive?function(o,t){l(o);const{view:i,analysis:a}=o,e=new t({view:i,analysis:a,analysisViewData:o});o.tool=e,i.tools.add(e)}(o,t):l(o)}(o,t)),s)}function l(o){const{view:i,tool:a}=o;t(a)||(i.tools.remove(a),o.tool=null)}export{r as a,c,l as r};
