/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import e from"../../Viewpoint.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import{t as o}from"../../chunks/common.js";import{f as i,s as a,a as c,r as u,t as m,b as l,c as p}from"../../chunks/mat2d.js";import{c as f}from"../../chunks/mat2df32.js";import{c as h}from"../../chunks/mat2df64.js";import{s as y,d as j,e as g,r as d,m as w}from"../../chunks/mat3.js";import{c as x}from"../../chunks/mat3f32.js";import{b as k,n as v,c as b,e as R,f as G,g as S,h as z,s as A,t as M,i as _,j as N,k as T}from"../../chunks/vec2.js";import{f as U}from"../../chunks/vec2f32.js";import{a as V,f as C}from"../../chunks/vec2f64.js";import E from"../../core/Collection.js";import{i as F,j as P,a as q}from"../../chunks/maybe.js";import{e as D}from"../../chunks/unitUtils.js";import I from"../../geometry/Extent.js";import L from"../../geometry/Geometry.js";import O from"../../geometry/Point.js";import{isLoaded as W,canProjectWithoutEngine as B,load as Q,project as H}from"../../geometry/projection.js";import J,{e as K,j as X,g as Y}from"../../geometry/SpatialReference.js";import"../../geometry/Multipoint.js";import"../../chunks/writer.js";import"../../chunks/zmUtils.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/reader.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../Camera.js";import"../../core/Clonable.js";import"../../chunks/Cyclical.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";function Z(t){return function(t){return t instanceof Float32Array&&t.length>=2}(t)||function(t){return Array.isArray(t)&&t.length>=2}(t)}const $=180/Math.PI;function tt(t){return t.wkid?t:t.spatialReference||J.WGS84}function et(t,e){return e.type?A(t,e.x,e.y):T(t,e)}function rt(t){return D(t)}function nt(t,e){const r=Math.max(1,e[0]),n=Math.max(1,e[1]);return Math.max(t.width/r,t.height/n)*(s=t.spatialReference,X(s)?39.37*rt(s)*96:1);var s}async function st(t,e,r,n){let s,o;if(!t)return null;if(Array.isArray(t)&&!t.length)return null;if(E.isCollection(t)&&(t=t.toArray()),Array.isArray(t)&&t.length&&"object"==typeof t[0]){const s=t.every((t=>"attributes"in t)),o=t.some((t=>!t.geometry));let i=t;if(s&&o&&e&&e.allLayerViews){const r=new Map;for(const e of t){const t=e.layer,n=r.get(t)||[],s=e.attributes[t.objectIdField];null!=s&&n.push(s),r.set(t,n)}const n=[];r.forEach(((t,r)=>{const s=e.allLayerViews.find((t=>t.layer.id===r.id));if("queryFeatures"in s){const e=r.createQuery();e.objectIds=t,e.returnGeometry=!0,n.push(s.queryFeatures(e))}}));const s=await Promise.all(n),o=[];for(const t of s)if(t&&t.features&&t.features.length)for(const e of t.features)F(e.geometry)&&o.push(e.geometry);i=o}for(const t of i)n=await st(t,e,r,n);return n}if(Array.isArray(t)&&2===t.length&&"number"==typeof t[0]&&"number"==typeof t[1])s=new O(t);else if(t instanceof L)s=t;else if("geometry"in t)if(t.geometry)s=t.geometry;else if(t.layer){const r=t.layer,n=e.allLayerViews.find((t=>t.layer.id===r.id));if("queryFeatures"in n){const e=r.createQuery();e.objectIds=[t.attributes[r.objectIdField]],e.returnGeometry=!0;const o=await n.queryFeatures(e);s=P(o,"features",0,"geometry")}}if(q(s))return null;if(o="point"===s.type?new I({xmin:s.x,ymin:s.y,xmax:s.x,ymax:s.y,spatialReference:s.spatialReference}):s.extent,!o)return null;W()||B(o.spatialReference,r)||await Q();const i=H(o,r);return i?n=n?n.union(i):i:null}function ot(t,e){return K(tt(t),e)?t:H(t,e)}async function it(t,r){if(!t||!r)return new e({targetGeometry:new O,scale:0,rotation:0});let n=r.spatialReference;const{constraints:s,padding:o,viewpoint:i,size:a}=r,c=[o?a[0]-o.left-o.right:a[0],o?a[1]-o.top-o.bottom:a[1]];let u=null;t instanceof e?u=t:t.viewpoint?u=t.viewpoint:t.target&&"esri.Viewpoint"===t.target.declaredClass&&(u=t.target);let m=null;u&&u.targetGeometry?m=u.targetGeometry:t instanceof I?m=t:(t||t&&("center"in t||"extent"in t||"target"in t))&&(m=await st(t.center,r,n)||await st(t.extent,r,n)||await st(t.target,r,n)||await st(t,r,n)),!m&&i&&i.targetGeometry?m=i.targetGeometry:!m&&r.extent&&(m=r.extent),n||(n=tt(r.spatialReference||r.extent||m)),W()||K(m.spatialReference,n)||B(m,n)||await Q();const l=ot(m.center?m.center:m,n);let p=null;if(u&&F(u.targetGeometry)&&"point"===u.targetGeometry.type)p=u.scale;else if("scale"in t&&t.scale)p=t.scale;else if("zoom"in t&&-1!==t.zoom&&s&&s.effectiveLODs)p=s.zoomToScale(t.zoom);else if(Array.isArray(m)||"point"===m.type||"extent"===m.type&&0===m.width&&0===m.height){const t=ot(r.extent,n);p=F(t)?nt(t,c):r.extent?nt(r.extent,c):i.scale}else p=nt(ot(m.extent,n),c);const f=function(t){if(t&&(!Array.isArray(t)||"number"!=typeof t[0])&&("object"==typeof t||Array.isArray(t)&&"object"==typeof t[0])){if("layer"in t&&t.layer&&t.layer.minScale&&t.layer.maxScale){const e=t.layer;return{min:e.minScale,max:e.maxScale}}if(Array.isArray(t)&&t.length&&t.every((t=>"layer"in t))){let e=0,r=0;for(const n of t){const t=n.layer;t&&t.minScale&&t.maxScale&&(e=t.minScale<e?t.minScale:e,r=t.maxScale>r?t.maxScale:r)}return e&&r?{min:e,max:r}:null}}}(t);f&&(f.min&&f.min>p?p=f.min:f.max&&f.max<p&&(p=f.max));let h=0;u?h=u.rotation:t.hasOwnProperty("rotation")?h=t.rotation:i&&(h=i.rotation);let y=new e({targetGeometry:l,scale:p,rotation:h});return s&&(y=s.fit(y),s.constrainByGeometry(y),s.rotationEnabled||(y.rotation=h)),y}function at(t,e){const r=t.targetGeometry,n=e.targetGeometry;return r.x=n.x,r.y=n.y,r.spatialReference=n.spatialReference,t.scale=e.scale,t.rotation=e.rotation,t}function ct(t,e,r){return r?A(t,.5*(e[0]-r.right+r.left),.5*(e[1]-r.bottom+r.top)):z(t,e,.5)}const ut=function(){const t=V();return function(e,r,n){const s=r.targetGeometry;et(t,s);const o=.5*ft(r);return e.xmin=t[0]-o*n[0],e.ymin=t[1]-o*n[1],e.xmax=t[0]+o*n[0],e.ymax=t[1]+o*n[1],e.spatialReference=s.spatialReference,e}}();function mt(t,e,r,n,s){return kt(t,e,r.center),t.scale=nt(r,n),s&&s.constraints&&s.constraints.constrain(t),t}const lt=function(){const t=V();return function(e,r,n){return S(e,function(t,e){return z(t,e,.5)}(e,r),ct(t,r,n))}}(),pt=function(){const t=h(),e=V();return function(r,n,s,o){const i=ft(n),a=ht(n);return A(e,i,i),l(t,e),u(t,t,a),m(t,t,lt(e,s,o)),m(t,t,[0,o.top-o.bottom]),A(r,t[4],t[5])}}();function ft(t){return t.scale*(e=t.targetGeometry,F(e)&&X(e.spatialReference)?1/(39.37*rt(e.spatialReference)*96):1);var e}function ht(t){return o(t.rotation)||0}const yt=function(){const t=V(),e=V(),r=V();return function(n,s,o,i,l,p){return _(t,s),z(e,o,.5*p),A(r,1/i*p,-1/i*p),c(n,e),l&&u(n,n,l),a(n,n,r),m(n,n,t),n}}(),jt=function(){const t=V();return function(e,r,n,s){const o=ft(r),i=ht(r);return et(t,r.targetGeometry),yt(e,t,n,o,i,s)}}(),gt=function(){const t=V();return function(e,r,n,s){const o=ft(r);return et(t,r.targetGeometry),yt(e,t,n,o,0,s)}}();function dt(t){const e=Y(t);return e?e.valid[1]-e.valid[0]:0}const wt=function(){const t=V(),e=V(),r=[0,0,0];return function(n,s,o){k(t,n,s),v(t,t),k(e,n,o),v(e,e),b(r,t,e);let i=Math.acos(R(t,e)/(G(t)*G(e)))*$;return r[2]<0&&(i=-i),isNaN(i)&&(i=0),i}}(),xt=function(){const t=V();return function(e,r,n,s){const o=e.targetGeometry;return at(e,r),pt(t,r,n,s),o.x+=t[0],o.y+=t[1],e}}(),kt=function(t,e,r){at(t,e);const n=t.targetGeometry;return n.x=r.x,n.y=r.y,n.spatialReference=r.spatialReference,t},vt=function(){const t=V();return function(e,r,n,s,o){o||(o="center"),S(t,n,s),z(t,t,.5);const i=t[0],a=t[1];switch(o){case"center":A(t,0,0);break;case"left":A(t,-i,0);break;case"top":A(t,0,a);break;case"right":A(t,i,0);break;case"bottom":A(t,0,-a);break;case"top-left":A(t,-i,a);break;case"bottom-left":A(t,-i,-a);break;case"top-right":A(t,i,a);break;case"bottom-right":A(t,i,-a)}return Nt(e,r,t),e}}();function bt(t,e,r){return at(t,e),t.rotation+=r,t}function Rt(t,e,r){return at(t,e),t.rotation=r,t}const Gt=function(){const t=V();return function(e,r,n,s,o){return at(e,r),isNaN(n)||0===n||(Mt(t,s,r,o),e.scale=r.scale*n,_t(t,t,e,o),Nt(e,e,A(t,t[0]-s[0],s[1]-t[1]))),e}}();function St(t,e,r){return at(t,e),t.scale=r,t}const zt=function(){const t=V();return function(e,r,n,s,o,i){return at(e,r),isNaN(n)||0===n||(Mt(t,o,r,i),e.scale=r.scale*n,e.rotation+=s,_t(t,t,e,i),Nt(e,e,A(t,t[0]-o[0],o[1]-t[1]))),e}}(),At=function(){const t=V(),e=V();return function(r,n,s,o,i,a,c){return lt(e,a,c),N(t,i,e),o?zt(r,n,s,o,t,a):Gt(r,n,s,t,a)}}(),Mt=function(){const t=h();return function(e,r,n,s){return M(e,r,function(t,e,r,n){return jt(t,e,r,1),p(t,t)}(t,n,s))}}(),_t=function(){const t=h();return function(e,r,n,s){return M(e,r,jt(t,n,s,1))}}(),Nt=function(){const t=V(),e=h();return function(r,n,s){at(r,n);const o=ft(n),c=r.targetGeometry;return i(e,ht(n)),a(e,e,C(o,o)),M(t,s,e),c.x+=t[0],c.y+=t[1],r}}();var Tt;const Ut=[0,0];let Vt=Tt=class extends r{constructor(t){super(t),this._viewpoint2D={center:V(),rotation:0,scale:0,spatialReference:null},this.center=[0,0],this.extent=new I,this.id=0,this.inverseTransform=h(),this.resolution=0,this.rotation=0,this.scale=0,this.transform=h(),this.transformNoRotation=h(),this.displayMat3=x(),this.displayViewMat3=x(),this.viewMat3=x(),this.viewMat2d=f(),this.worldScreenWidth=0,this.size=[0,0]}set pixelRatio(t){this._set("pixelRatio",t),this._update()}set size(t){this._set("size",t),this._update()}set viewpoint(t){if(t){const e=this._viewpoint2D,r=t.targetGeometry;e.center[0]=r.x,e.center[1]=r.y,e.rotation=t.rotation,e.scale=t.scale,e.spatialReference=r.spatialReference}this._update()}copy(t){const e=this.size,r=this.viewpoint;return r&&e?(this.viewpoint=at(r,t.viewpoint),this._set("size",T(e,t.size))):(this.viewpoint=t.viewpoint.clone(),this._set("size",[t.size[0],t.size[1]])),this._set("pixelRatio",t.pixelRatio),this}clone(){return new Tt({size:this.size,viewpoint:this.viewpoint.clone(),pixelRatio:this.pixelRatio})}toMap(t,e,r){return Z(e)?M(t,e,this.inverseTransform):(Ut[0]=e,Ut[1]=r,M(t,Ut,this.inverseTransform))}toScreen(t,e,r){return Z(e)?M(t,e,this.transform):(Ut[0]=e,Ut[1]=r,M(t,Ut,this.transform))}toScreenNoRotation(t,e,r){return Z(e)?M(t,e,this.transformNoRotation):(Ut[0]=e,Ut[1]=r,M(t,Ut,this.transformNoRotation))}getScreenTransform(t,e){const{center:r}=this._viewpoint2D,n=this._get("pixelRatio")||1,s=this._get("size");return yt(t,r,s,e,0,n),t}_update(){const{center:t,spatialReference:r,scale:n,rotation:s}=this._viewpoint2D,i=this._get("pixelRatio")||1,a=this._get("size"),l=new e({targetGeometry:new O(t[0],t[1],r),scale:n,rotation:s});if(this._set("viewpoint",l),!a||!r||!n)return;this.resolution=ft(l),this.rotation=s,this.scale=n,this.spatialReference=r,T(this.center,t);const f=0!==a[0]?2/a[0]:0,h=0!==a[1]?-2/a[1]:0;y(this.displayMat3,f,0,0,0,h,0,-1,1,1);const x=j(this.viewMat3),k=U(a[0]/2,a[1]/2),v=U(-a[0]/2,-a[1]/2),b=o(s);g(x,x,k),d(x,x,b),g(x,x,v),w(this.displayViewMat3,this.displayMat3,x);const R=c(this.viewMat2d,k);return u(R,R,b),m(R,R,v),ut(this.extent,l,a),jt(this.transform,l,a,i),p(this.inverseTransform,this.transform),gt(this.transformNoRotation,l,a,i),this.worldScreenWidth=function(t,e){return Math.round(dt(t)/e)}(this.spatialReference,this.resolution),this._set("id",this.id+1),this}};t([n({readOnly:!0})],Vt.prototype,"id",void 0),t([n({value:1,json:{write:!0}})],Vt.prototype,"pixelRatio",null),t([n({json:{write:!0}})],Vt.prototype,"size",null),t([n()],Vt.prototype,"spatialReference",void 0),t([n({type:e,json:{write:!0}})],Vt.prototype,"viewpoint",null),Vt=Tt=t([s("esri.views.2d.ViewState")],Vt);const Ct=Vt;export{xt as a,kt as b,at as c,mt as d,Ct as default,St as e,it as f,nt as g,vt as h,wt as i,lt as j,ct as k,bt as l,dt as m,Z as n,At as p,Rt as r,zt as s,Nt as t};