/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as t,P as n}from"./SnappingManager.js";import{P as a}from"./PointSnappingHint.js";class e extends t{constructor(t){super({...t,constraint:new n(t.coordinateHelper,t.targetPoint)})}get hints(){return[new a(this.targetPoint,this.elevationInfo,this.domain)]}}export{e as V};
