/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{i as o}from"../../chunks/maybe.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{e as s}from"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as p}from"../../geometry/support/jsonUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";let m=class extends t{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};r([e({json:{read:{reader:r=>r?r.map((r=>p(r))).filter(o):null},write:{writer:(r,t)=>{t.geometries1=r?.map((r=>r.toJSON()))??null}}}})],m.prototype,"geometries1",void 0),r([e({json:{read:{reader:r=>r?r.map((r=>p(r))).filter(o):null},write:{writer:(r,t)=>{t.geometries2=r?.map((r=>r.toJSON()))??null}}}})],m.prototype,"geometries2",void 0),r([e({type:String,json:{write:!0}})],m.prototype,"relation",void 0),r([e({type:String,json:{write:!0}})],m.prototype,"relationParameter",void 0),m=r([i("esri.rest.support.RelationParameters")],m),m.from=s(m);const n=m;export{n as default};