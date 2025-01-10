/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"./object.js";import{f as e}from"./vec3.js";import{f as t}from"./aaBoundingBox.js";function n(t,{isPrimitive:n,width:r,depth:o,height:s}){const a=n?10:1;if(null==r&&null==s&&null==o)return[a*t[0],a*t[1],a*t[2]];const c=e(r,o,s);let u;for(let e=0;e<3;e++){const n=c[e];if(null!=n){u=n/t[e];break}}for(let e=0;e<3;e++)null==c[e]&&(c[e]=t[e]*u);return c}const r=t(-.5,-.5,-.5,.5,.5,.5),o=t(-.5,-.5,0,.5,.5,1),s=t(-.5,-.5,0,.5,.5,.5);function a(e){switch(e){case"sphere":case"cube":case"diamond":return r;case"cylinder":case"cone":case"inverted-cone":return o;case"tetrahedron":return s;default:return}}const c=["butt","square","round"],u=[...c,"none"],i=["miter","bevel","round"];export{i as a,n as b,c as l,a as o,u as p};
