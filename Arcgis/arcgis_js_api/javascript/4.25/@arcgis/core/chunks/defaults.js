/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"./object.js";import{a as s}from"./maybe.js";import o from"../symbols/SimpleFillSymbol.js";import r from"../symbols/SimpleLineSymbol.js";import m from"../symbols/SimpleMarkerSymbol.js";import e from"../symbols/TextSymbol.js";import{d as a,a as t,b as l,c as i,e as n,f,g as p}from"./defaultsJSON.js";const S=m.fromJSON(a),c=r.fromJSON(t),b=o.fromJSON(l),u=e.fromJSON(i);function y(o){if(s(o))return null;switch(o.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return c;case"polygon":case"extent":return b}return null}const j=m.fromJSON(n),J=r.fromJSON(f),N=o.fromJSON(p);export{b as a,c as b,S as c,u as d,J as e,N as f,y as g,j as h};
