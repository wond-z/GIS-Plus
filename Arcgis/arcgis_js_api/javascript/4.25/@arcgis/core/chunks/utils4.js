/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import r from"../config.js";import{id as e}from"../kernel.js";import{clone as t}from"../core/lang.js";import{urlToObject as o}from"../core/urlUtils.js";import{s as n}from"../request.js";function i(r,e){return e?{...e,query:{...r,...e.query}}:{query:r}}function s(r){return"string"==typeof r?o(r):t(r)}function f(r,e,t){const o={};for(const n in r){if("declaredClass"===n)continue;const i=r[n];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){o[n]=[];for(let r=0;r<i.length;r++)o[n][r]=f(i[r])}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(t&&t[n]);o[n]=e?r:JSON.stringify(r)}else o[n]=e?i:JSON.stringify(i);else o[n]=i}return o}function u(t,o){return n(t)&&(o||r.apiKey)?o||r.apiKey:e?.findCredential(t)?.token}export{i as a,f as e,u as g,s as p};
