/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import n from"../Ground.js";import{D as r,C as t}from"../core/lang.js";import{a as o,i as e}from"./maybe.js";import{e as i}from"./unitUtils.js";function l(t){if(o(t))return null;if(t instanceof n)return s(t);const e=t.tileInfo;if(o(e))return null;const l=r(e.lods);return o(l)?null:l.resolution*i(e.spatialReference)}function s(n){if(o(n))return null;const r=n.layers.items.map(u).filter(e);return t(r)??null}function u(n){return"tileInfo"in n?l(n):null}export{l as a,s as g};
