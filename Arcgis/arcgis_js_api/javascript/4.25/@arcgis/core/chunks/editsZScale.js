/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as n}from"./maybe.js";import{g as e}from"./unitUtils.js";import{e as i}from"../geometry/SpatialReference.js";function s(n,e,i){if(null==n.hasM||n.hasZ)for(const n of e)for(const e of n)e.length>2&&(e[2]*=i)}function t(n,i,s){if(!n&&!i||!s)return;const t=e(s);o(n,s,t),o(i,s,t)}function o(n,e,i){if(n)for(const s of n)f(s.geometry,e,i)}function f(t,o,f){if(n(t)||!t.spatialReference||i(t.spatialReference,o))return;const r=e(t.spatialReference)/f;if(1!==r)if("x"in t)null!=t.z&&(t.z*=r);else if("rings"in t)s(t,t.rings,r);else if("paths"in t)s(t,t.paths,r);else if("points"in t&&(null==t.hasM||t.hasZ))for(const n of t.points)n.length>2&&(n[2]*=r)}export{t as u};
