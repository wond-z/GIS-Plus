/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import o from"../../geometry/Extent.js";import i from"../../geometry/Polygon.js";import{fromJSON as n}from"../../geometry/support/jsonUtils.js";import m from"./DimensionalDefinition.js";import p from"../../geometry/Geometry.js";import"../../geometry/Multipoint.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";var a;const c={base:p,key:"type",typeMap:{extent:o,polygon:i}};let l=a=class extends s{constructor(t){super(t),this.areaOfInterest=null,this.subsetDefinitions=null}get dimensions(){const{subsetDefinitions:t}=this;if(null==t||0===t.length)return[];const s=new Map;t.forEach((t=>{if(!t.dimensionName)return;let e,r;if(Array.isArray(t.values[0])){const s=t.values;e=s[0][0],r=s[t.values.length-1][1]}else{const s=t.values;e=s[0],r=s[t.values.length-1]}if(s.has(t.dimensionName)){const o=s.get(t.dimensionName);o[0]=Math.min(e,o[0]),o[1]=Math.max(r,o[1])}else s.set(t.dimensionName,[e,r])}));const e=[];for(const t of s)e.push({name:t[0],extent:t[1]});return e}get variables(){const{subsetDefinitions:t}=this;if(null==t||0===t.length)return[];const s=new Set;return t.forEach((t=>{t.variableName&&s.add(t.variableName)})),[...s]}clone(){const t=this.subsetDefinitions?.map((t=>t.clone())),s=this.areaOfInterest?this.areaOfInterest.clone():this.areaOfInterest;return new a({areaOfInterest:s,subsetDefinitions:t})}};t([e({types:c,json:{read:n,write:!0}})],l.prototype,"areaOfInterest",void 0),t([e({readOnly:!0})],l.prototype,"dimensions",null),t([e({readOnly:!0})],l.prototype,"variables",null),t([e({type:[m],json:{write:!0}})],l.prototype,"subsetDefinitions",void 0),l=a=t([r("esri.layers.support.MultidimensionalSubset")],l);const u=l;export{u as default};