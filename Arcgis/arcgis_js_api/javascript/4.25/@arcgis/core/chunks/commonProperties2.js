/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{symbolTypesRenderer as e,symbolTypesRenderer3D as r,symbolTypes as s}from"../symbols.js";import{c as t}from"../core/accessorSupport/decorators/subclass.js";import{write as o}from"../symbols/support/jsonUtils.js";import p from"../symbols/Symbol.js";import i from"../symbols/PolygonSymbol3D.js";const l={types:e,json:{write:{writer:o},origins:{"web-scene":{types:r,write:{writer:o},read:{reader:t({types:r})}}}}},y={types:{base:p,key:"type",typeMap:{"simple-fill":s.typeMap["simple-fill"],"picture-fill":s.typeMap["picture-fill"],"polygon-3d":s.typeMap["polygon-3d"]}},json:{write:{writer:o},origins:{"web-scene":{type:i,write:{writer:o}}}}},m={cast:e=>null==e||"string"==typeof e||"number"==typeof e?e:`${e}`,json:{type:String,write:{writer:(e,r)=>{r.value=e?.toString()}}}};export{l as a,y as r,m as u};
