/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";import{a as e}from"./maybe.js";var n;function r(t){switch(t){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function a(r,a,l){if(e(r)||a===n.Ignore)return l[0]=255,l[1]=255,l[2]=255,void(l[3]=255);const s=t(Math.round(r[3]*i),0,i),p=0===s||a===n.Tint?0:a===n.Replace?u:c;l[0]=t(Math.round(r[0]*o),0,o),l[1]=t(Math.round(r[1]*o),0,o),l[2]=t(Math.round(r[2]*o),0,o),l[3]=s+p}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(n||(n={}));const o=255,i=85,u=i,c=2*i;export{n as C,a as e,r as p};
