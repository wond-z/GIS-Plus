/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import e from"../../core/Accessor.js";import{a as r}from"../../chunks/maybe.js";import{c as s}from"../../chunks/screenUtils.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{isSupported as n,geodesicLengths as c}from"../../geometry/support/geodesicUtils.js";import{straightLineDensify as m}from"../../geometry/support/normalizeUtils.js";import p,{o as a,g as l}from"../../geometry/SpatialReference.js";import{webMercatorToGeographic as u}from"../../geometry/support/webMercatorUtils.js";import h from"../../geometry/Polyline.js";import j from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/Error.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/geodesicConstants.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/utils4.js";import"../../chunks/utils5.js";function d(t,e){return t&&t.includes(e)}function g(t,e){const{x:r,y:s}="decimal-degrees"===t?u(e,!0):e;return[r,s]}function k({state:{paddedViewState:t},spatialReference:e,width:r}){return e.isWrappable&&t.worldScreenWidth<r}let f=class extends e{constructor(t){super(t),this.scaleComputedFrom=s(),this.view=null}get state(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"}getScaleBarProperties(t,e){if("disabled"===this.state||isNaN(t)||!e)return null;const s=this._getDistanceInKm(this.view,this.scaleComputedFrom);if(r(s))return null;if("metric"===e)return this._getScaleBarProps(t,s,"metric");const o=s/1.609;return this._getScaleBarProps(t,o,"non-metric")}_getLocationUnit(){const t=this.get("view.spatialReference"),{isWebMercator:e,wkid:r,wkt:s}=t;return e||d(s,"WGS_1984_Web_Mercator")?"decimal-degrees":null!=a[r]||d(s,"PROJCS")?"linear-unit":"unknown"}_getDistanceInKm(t,e){const{state:r,spatialReference:s}=t,o=this._getLocationUnit();if("linear-unit"===o){const t=1e3,e=r.extent.width,o=function(t){const{wkid:e}=t;if(null!=a[e])return a.values[a[e]];const{wkt:r}=t,s=r.lastIndexOf(",")+1,o=r.lastIndexOf("]]");return parseFloat(r.substring(s,o))}(s);return e*o/t}const[i,l]=this._getScaleMeasuringPoints(t,e),u="decimal-degrees"===o||s.isGeographic&&!n(s)?p.WGS84:s,j=new h({paths:[[g(o,i),g(o,l)]],spatialReference:u}),d=m(j,10);let k;try{[k]=c([d],"kilometers")}catch{return null}return k}_getScaleMeasuringPoints(t,e){const{width:r,height:o,position:i,spatialReference:n}=t;if(k(t)){const{valid:t}=l(n);return[new j(t[0],0,n),new j(t[1],0,n)]}let c=e.y-i[1];c>o?c=o:c<0&&(c=0);const m=s(0,c),p=s(r,c);return[t.toMap(m),t.toMap(p)]}_getScaleBarProps(t,e,r){const{view:s}=this;let o=t*e/(k(s)?s.state.paddedViewState.worldScreenWidth:s.width),i="metric"===r?"km":"mi";o<.1&&("mi"===i?(o*=5280,i="ft"):"km"===i&&(o*=1e3,i="m"));let n=0;for(;o>=1;)o/=10,n++;const c=this._getConstraints(o);if(!c)return null;const{min:m,max:p}=c,a=p/o>=o/m?m:p;return{length:t*(a/o),value:10**n*a,unit:i}}_getConstraints(t){return t>.5?{min:.5,max:1}:t>.3?{min:.3,max:.5}:t>.2?{min:.2,max:.3}:t>.15?{min:.15,max:.2}:t>=.1?{min:.15,max:.1}:void 0}};t([o()],f.prototype,"scaleComputedFrom",void 0),t([o({readOnly:!0})],f.prototype,"state",null),t([o()],f.prototype,"view",void 0),f=t([i("esri.widgets.Scalebar.ScaleBarViewModel")],f);const y=f;export{y as default};