/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{c as t}from"./asyncUtils.js";import e from"../core/Error.js";import{L as r}from"./Logger.js";import{i as s,u as o}from"./maybe.js";import{throwIfAborted as i,isAbortError as p}from"../core/promiseUtils.js";import{e as a,W as m}from"../geometry/SpatialReference.js";import{b as n,a as u}from"./featureConversionUtils.js";import{F as l}from"./FeatureStore.js";import{p as j,c}from"./projectionSupport.js";import{Q as y}from"./QueryEngine.js";import{v as h,c as g}from"./geojson.js";import{m as d}from"./sourceUtils.js";import{getFeature as f}from"../layers/ogc/wfsUtils.js";import _ from"../layers/support/FieldsIndex.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/lang.js";import"./metadata.js";import"./object.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"./ensureType.js";import"../config.js";import"./string.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/JSONSupport.js";import"./writer.js";import"../geometry/support/jsonUtils.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../core/Evented.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./quickselect.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"../geometry/projection.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./SimpleObservable.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./json.js";import"./MemCache.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils4.js";import"./utils5.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"./ItemCache.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./utils13.js";import"./generateRendererUtils.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"./colorUtils.js";import"./enumeration.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../symbols/Symbol.js";import"./SnappingCandidate.js";import"./utils21.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./QueryEngineCapabilities.js";import"./timeSupport.js";import"./Scheduler.js";import"../core/reactiveUtils.js";import"./ObservableValue.js";import"./debugFlags2.js";import"./xmlUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,r=await f(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((t=>t.name)),signal:t});await h(r),i(t);const o=g(r,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!a(this._queryEngine.spatialReference,m))for(const t of o)s(t.geometry)&&(t.geometry=n(j(u(t.geometry,this._queryEngine.geometryType,!1,!1),m,this._queryEngine.spatialReference)));let p=1;for(const t of o){const r={};d(this._fieldsIndex,r,t.attributes,!0),t.attributes=r,null==t.attributes[e]&&(t.objectId=t.attributes[e]=p++)}return o}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:r,getFeatureOutputFormat:s,spatialReference:p,fields:a,geometryType:m,featureType:n,objectIdField:u,customParameters:j}=t;this._featureType=n,this._customParameters=j,this._getFeatureUrl=r,this._getFeatureOutputFormat=s,this._fieldsIndex=new _(a),await this._checkProjection(p),i(e),this._queryEngine=new y({fields:a,geometryType:m,hasM:!1,hasZ:!1,objectIdField:u,spatialReference:p,timeInfo:null,featureStore:new l({geometryType:m,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(o(e.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new e("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(s){return this._customParameters=s,this._snapshotTask?.abort(),this._snapshotTask=t(this._snapshotFeatures),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),t&&this._queryEngine.featureStore.addMany(t)}),(t=>{this._queryEngine.featureStore.clear(),p(t)||r.getLogger("esri.layers.WFSLayer").error(new e("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:t}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await c(m,t)}catch{throw new e("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{E as default};