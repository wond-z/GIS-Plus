/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as t}from"./maybe.js";import{g as e}from"./centroid.js";import{O as r,a as o}from"./OptimizedFeature.js";const i={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new r(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(r,i)=>(t(r.centroid)&&(r.centroid=e(new o,r.geometry,i.hasZ,i.hasM)),r.centroid)};export{i as o};
