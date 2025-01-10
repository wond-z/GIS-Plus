/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as t}from"./maybe.js";import{o as n,c as u}from"./unitUtils.js";function e(t,u){return{type:n(u),value:t,unit:u}}function a(t,u){return{type:n(u),value:t,unit:u}}function r(t,u){return{type:n(u),value:t,unit:u}}function i(t,u,e="arithmetic"){return{type:n(u),value:t,unit:u,rotationType:e}}function s(t,n){return e(u(t.value,t.unit,n),n)}function o(n,e){return t(n)?e:t(e)||n.value>u(e.value,e.unit,n.unit)?n:e}function l(n,u){return t(n)?null:{...n,value:n.value*u}}const c=a(0,"meters"),f=r(0,"square-meters");i(0,"radians");export{r as a,e as b,a as c,f as d,i as e,o as m,l as s,s as t,c as z};
