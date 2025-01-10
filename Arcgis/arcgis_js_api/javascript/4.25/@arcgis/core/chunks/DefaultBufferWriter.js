/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{i as e,a as t,d as i,p as r,e as s}from"./maybe.js";import{j as a,m as o}from"./mat4.js";import{c as n,b as l,I as c}from"./mat4f64.js";import{e as p,z as d,C as h,k as u,c as m,f,s as v,d as g,b as S,m as _,g as T,a as y,l as b}from"./vec3.js";import{c as A,a as O}from"./sphere.js";import{b as R}from"./mathUtils2.js";import{O as C,U as x}from"./basicInterfaces.js";import{C as L,b as E,g as D,N as P,M as I,R as w}from"./Material.js";import{O as N}from"./ArrayPool.js";import{g as j}from"./watch.js";import{a as M,i as W}from"./Util2.js";import{a as z,r as U,i as F}from"./utils20.js";import V from"../core/Evented.js";import B from"../core/Handles.js";import{P as k}from"../core/scheduling.js";import{O as G}from"./Octree.js";import{h as J}from"./object.js";import{L as H}from"./Logger.js";import{s as $,c as q}from"./mathUtils.js";import{b as X}from"./screenUtils.js";import{k as Z}from"./vec2.js";import{Z as Q,c as Y,O as K}from"./vec4f64.js";import{P as ee}from"./frustum.js";import{c as te,d as ie,f as re,a as se}from"./lineSegment.js";import{c as ae,d as oe,s as ne,n as le}from"./plane.js";import{n as ce}from"./InterleavedLayout.js";import{S as pe,R as de}from"./RenderSlot.js";import{D as he,e as ue,f as me,g as fe,v as ve,h as ge,i as Se,j as _e,T as Te,k as ye,t as be,b as Ae,l as Oe,S as Re,n as Ce,O as xe,o as Le,a as Ee,M as De,F as Pe,p as Ie,q as we,m as Ne,r as je,C as Me,s as We,c as ze,P as Ue,u as Fe,w as Ve,x as Be,y as ke,z as Ge,A as Je,B as He,E as $e,R as qe,H as Xe,G as Ze,V as Qe,I as Ye}from"./bufferWriterUtils.js";import{V as Ke}from"./VertexAttribute.js";import{_ as et}from"./tslib.es6.js";import{p as tt}from"./ShaderTechniqueConfiguration.js";import{T as it,m as rt,e as st,o as at,a as ot,d as nt,b as lt,c as ct,O as pt}from"./OrderIndependentTransparency.js";import{p as dt}from"./floatRGBA.js";import{P as ht,a as ut,b as mt,e as ft}from"./enums3.js";import{T as vt}from"./Texture.js";class gt{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(e,t,i,r,s,a){this.id=j(),this.geometry=e,this.material=t,this.transformation=i,this.instanceParameters=r,this.origin=s,this._shaderTransformation=a,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return e(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(p(e,e,this.getStaticTransformation()),!0)}}gt.pool=new N(gt);class St{constructor(e){this.channel=e,this.id=j()}}class _t extends L{constructor(e={}){super(),this.type=E.Object,this._geometryRecords=new Array,this._geometries=new Array,this._objectTransformation=n(),this._bvObjectSpace=new yt,this._bvWorldSpace=new yt,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.castShadow=null==e.castShadow||e.castShadow,this.metadata=e.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new Tt);const{geometries:t,materials:i,transformations:r,origins:s}=e;if(Array.isArray(t)){M(i.length===t.length,"Object3D: materials don't match geometries"),M(r.length===t.length,"Object3D: transformations don't match geometries"),this._geometryRecords.length=t.length,this._geometries.length=t.length;for(let e=0;e<t.length;e++)this._geometries[e]=t[e],this._geometryRecords[e]=gt.pool.acquire(t[e],i[e],l(r[e]),{highlights:null,occludees:null,visible:this._visible},s&&s[e])}}get geometryRecords(){return this._geometryRecords}get geometries(){return this._geometries}get transformation(){return this._objectTransformation}set transformation(e){a(this._objectTransformation,e),this._invalidateBoundingVolume(),this._emit("objectTransformation",this)}dispose(){this._geometryRecords.length=0,this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){M(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(t,i,r,s,a){r=r||c,this._geometries.push(t);const o=gt.pool.acquire(t,i,r,{highlights:null,occludees:null,visible:this._visible},s,a);return this._geometryRecords.push(o),this._hasVolatileTransformation=this._hasVolatileTransformation||e(o.shaderTransformation),this._emit("objectGeometryAdded",{object:this,record:o}),this._invalidateBoundingVolume(),o}removeGeometry(t){const i=this._geometryRecords.splice(t,1)[0];return this._hasVolatileTransformation=e(i.shaderTransformation)?this._geometryRecords.some((t=>e(t.shaderTransformation))):this._hasVolatileTransformation,i.dispose(),this._geometries.splice(t,1),this._emit("objectGeometryRemoved",{object:this,record:i}),this._invalidateBoundingVolume(),i}removeAllGeometries(){for(;this.geometryRecords.length>0;)this.removeGeometry(0)}geometryVertexAttrsUpdated(e){this._emit("vertexAttrsUpdated",{object:this,record:e}),this._invalidateBoundingVolume()}get isVisible(){return this._visible}setVisible(e){if(this._visible!==e){this._visible=e;for(const e of this._geometryRecords)e.instanceParameters.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new St(C.MaskOccludee);for(const t of this._geometryRecords)t.instanceParameters.occludees=z(t.instanceParameters.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometryRecords)t.instanceParameters.occludees=U(t.instanceParameters.occludees,e);this._emit("occlusionChanged",this)}highlight(){const e=new St(C.Highlight);for(const t of this._geometryRecords)t.instanceParameters.highlights=z(t.instanceParameters.highlights,e);return this._emit("highlightChanged",this),e}removeHighlight(e){for(const t of this._geometryRecords)t.instanceParameters.highlights=U(t.instanceParameters.highlights,e);this._emit("highlightChanged",this)}getCombinedStaticTransformation(e,t){return o(t,this.transformation,e.getStaticTransformation())}_getCombinedShaderTransformation(e){return o(n(),this.transformation,e.getShaderTransformation())}hasVolativeTransformation(){return this._hasVolatileTransformation}get boundingVolumeWorldSpace(){return this._validateBoundingVolume(),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._validateBoundingVolume(),this._bvObjectSpace}_validateBoundingVolume(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let t=0;t<this._geometryRecords.length;++t){const i=this._geometries[t],r=this._geometryRecords[t],s=i.boundingInfo;e(s)&&(this._calculateTransformedBoundingVolume(s,this._bvObjectSpace,r.getShaderTransformation()),this._calculateTransformedBoundingVolume(s,this._bvWorldSpace,this._getCombinedShaderTransformation(r)))}d(this._bvObjectSpace.bounds,this._bvObjectSpace.min,this._bvObjectSpace.max,.5),d(this._bvWorldSpace.bounds,this._bvWorldSpace.min,this._bvWorldSpace.max,.5);const i=g(),r=g(),s=R(this.transformation);for(let e=0;e<this._geometryRecords.length;++e){const a=this._geometries[e].boundingInfo;if(t(a))continue;const o=this._geometryRecords[e].getShaderTransformation(),n=R(o);p(i,a.getCenter(),o);const l=h(i,this._bvObjectSpace.bounds),c=a.getBSRadius()*n;this._bvObjectSpace.bounds[3]=Math.max(this._bvObjectSpace.bounds[3],l+c),p(r,i,this.transformation);const d=h(r,this._bvWorldSpace.bounds),u=c*s;this._bvWorldSpace.bounds[3]=Math.max(this._bvWorldSpace.bounds[3],d+u)}this._bvDirty=!1}_calculateTransformedBoundingVolume(e,t,i){const r=e.getBBMin(),s=e.getBBMax(),a=u(r),o=u(s);p(a,a,i),p(o,o,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],a[e],o[e]),t.max[e]=Math.max(t.max[e],a[e],o[e]);for(let e=0;e<3;++e){m(a,r),m(o,s),a[e]=s[e],o[e]=r[e],p(a,a,i),p(o,o,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],a[e],o[e]),t.max[e]=Math.max(t.max[e],a[e],o[e])}}_invalidateBoundingVolume(){this._bvDirty=!0,e(this._parentLayer)&&this._parentLayer.notifyObjectBBChanged(this,this._bvWorldSpace.bounds)}_emit(t,i){e(this._parentLayer)&&this._parentLayer.events.emit(t,i)}get test(){const e=this;return{hasGeometry:t=>e._geometries.includes(t),getGeometryIndex:t=>e._geometries.indexOf(t)}}}class Tt{constructor(){this.min=f(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=f(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class yt extends Tt{constructor(){super(...arguments),this.bounds=A()}init(){v(this.min,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),v(this.max,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),O(this.bounds)}}const bt=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","shaderTransformationChanged","objectTransformation","visibilityChanged","occlusionChanged","highlightChanged","objectGeometryAdded","objectGeometryRemoved","vertexAttrsUpdated"];class At extends L{constructor(e,t=""){super(),this.apiLayerUid=t,this.type=E.Layer,this.events=new V,this.isSliceable=!1,this._objects=new k,this._stageHandles=new B,this.apiLayerUid=t,this.isVisible=e?.isVisible??!0,this.isPickable=e?.isPickable??!0,this.updatePolicy=e?.updatePolicy??x.ASYNC}get objects(){return this._objects}destroy(){this.detachStage(),this._stage=null}attachStage(e){this.detachStage(),this._stage=e;for(const t of bt)this._stageHandles.add(this.events.on(t,(i=>e.handleEvent(t,i))))}detachStage(){this._stageHandles.removeAll(),this.invalidateSpatialQueryAccelerator()}add(t){this._objects.push(t),t.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:t}),e(this._octree)&&this._octree.add([t])}remove(t){this._objects.removeUnordered(t)&&(t.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:t}),e(this._octree)&&this._octree.remove([t]))}addMany(t){this._objects.pushArray(t);for(const e of t)e.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:t}),e(this._octree)&&this._octree.add(t)}removeMany(t){const i=new Array;if(this._objects.removeUnorderedMany(t,t.length,i),0!==i.length){for(const e of i)e.parentLayer=null;this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),e(this._octree)&&this._octree.remove(i)}}sync(){e(this._stage)&&this.updatePolicy!==x.SYNC&&this._stage.syncLayer(this.id)}notifyObjectBBChanged(t,i){e(this._octree)&&this._octree.update(t,i)}getSpatialQueryAccelerator(){return t(this._octree)&&this._objects.length>50&&this._createOctree(),this._octree}shaderTransformationChanged(){this.invalidateSpatialQueryAccelerator(),this.events.emit("shaderTransformationChanged",this)}invalidateSpatialQueryAccelerator(){this._octree=i(this._octree)}_createOctree(){this._octree=new G((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)}}function Ot(t){return e(t)&&t.type===E.Layer}var Rt,Ct;!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(Rt||(Rt={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(Ct||(Ct={}));class xt extends he{constructor(){super(...arguments),this.output=pe.Color,this.transparencyPassType=it.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=Rt.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=Ct.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}function Lt(e,t){const i=e.vertex;i.uniforms.add(new ue("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(Ke.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new me("vvSizeMinSize",(e=>e.vvSizeMinSize))),i.uniforms.add(new me("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),i.uniforms.add(new me("vvSizeOffset",(e=>e.vvSizeOffset))),i.uniforms.add(new me("vvSizeFactor",(e=>e.vvSizeFactor))),i.code.add(D`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(Ke.SIZE,"float"),i.code.add(D`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(Ke.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add([new fe("vvOpacityValues",(e=>e.vvOpacityValues),8),new fe("vvOpacityOpacities",(e=>e.vvOpacityOpacities),8)]),i.code.add(D`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(D`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.attributes.add(Ke.COLORFEATUREATTRIBUTE,"float"),i.constants.add("vvColorNumber","int",ve),i.uniforms.add(new fe("vvColorValues",(e=>e.vvColorValues),ve)),i.uniforms.add(new ge("vvColorColors",(e=>e.vvColorColors),ve)),i.code.add(D`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(e.attributes.add(Ke.COLOR,"vec4"),i.code.add(D`vec4 getColor(){
return applyOpacity(color);
}`))}et([tt({count:pe.COUNT})],xt.prototype,"output",void 0),et([tt({count:it.COUNT})],xt.prototype,"transparencyPassType",void 0),et([tt()],xt.prototype,"occluder",void 0),et([tt()],xt.prototype,"hasSlicePlane",void 0),et([tt()],xt.prototype,"writeDepth",void 0),et([tt({count:Rt.COUNT})],xt.prototype,"space",void 0),et([tt()],xt.prototype,"hideOnShortSegments",void 0),et([tt()],xt.prototype,"hasCap",void 0),et([tt({count:Ct.COUNT})],xt.prototype,"anchor",void 0),et([tt()],xt.prototype,"hasTip",void 0),et([tt()],xt.prototype,"vvSize",void 0),et([tt()],xt.prototype,"vvColor",void 0),et([tt()],xt.prototype,"vvOpacity",void 0),et([tt()],xt.prototype,"hasOccludees",void 0),et([tt()],xt.prototype,"hasMultipassTerrain",void 0),et([tt()],xt.prototype,"cullAboveGround",void 0),et([tt({constValue:!0})],xt.prototype,"hasVvInstancing",void 0),et([tt({constValue:!0})],xt.prototype,"hasSliceTranslatedView",void 0);class Et{constructor(e){this._rctx=e,this._cache=new Map}dispose(){this._cache.forEach((e=>r(e.stippleTexture))),this._cache.clear()}_acquire(e){if(t(e))return null;const i=this._patternId(e),r=this._cache.get(i);if(r)return r.refCount++,r;const{encodedData:s,paddedPixels:a}=function(e){const t=Pt(e),i=1/e.pixelRatio,r=It(e),s=wt(e),a=(Math.floor(.5*(s-1))+.5)*i,o=[];let n=1;for(const e of t){for(let t=0;t<e;t++){const r=n*(Math.min(t,e-1-t)+.5)*i/a*.5+.5;o.push(r)}n=-n}const l=Math.round(t[0]/2),c=[...o.slice(l),...o.slice(0,l)],p=r+Nt,d=new Uint8Array(4*p);let h=4;for(const e of c)dt(e,d,h),h+=4;return d.copyWithin(0,h-4,h),d.copyWithin(h,4,8),{encodedData:d,paddedPixels:p}}(e),o=new Dt(new vt(this._rctx,{width:a,height:1,internalFormat:ht.RGBA,pixelFormat:ht.RGBA,dataType:ut.UNSIGNED_BYTE,wrapMode:mt.CLAMP_TO_EDGE},s));return this._cache.set(i,o),o}release(i){if(t(i))return;const r=this._patternId(i),s=this._cache.get(r);s&&(s.refCount--,0===s.refCount&&(e(s.stippleTexture)&&s.stippleTexture.dispose(),this._cache.delete(r)))}swap(e,t){const i=this._acquire(t);return this.release(e),i}_patternId(e){return`${e.pattern.join(",")}-r${e.pixelRatio}`}}class Dt extends P{constructor(e){super(),this.stippleTexture=e,this.refCount=1}}function Pt(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function It(e){if(t(e))return 1;const i=Pt(e);return Math.floor(i.reduce(((e,t)=>e+t)))}function wt(e){return Pt(e).reduce(((e,t)=>Math.max(e,t)))}const Nt=2,jt=Y();function Mt(i,r){i.constants.add("stippleAlphaColorDiscard","float",.001),i.constants.add("stippleAlphaHighlightDiscard","float",.5),r.stippleEnabled?function(i,r){const s=!(r.draped&&r.stipplePreferContinuous),{vertex:a,fragment:o}=i;o.include(Se),r.draped||(_e(a,r),a.uniforms.add(new ue("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),a.code.add(D`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),i.varyings.add("vStippleDistance","float"),r.stippleRequiresClamp&&i.varyings.add("vStippleDistanceLimits","vec2"),r.stippleRequiresStretchMeasure&&i.varyings.add("vStipplePatternStretch","float"),a.code.add(D`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${zt};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),a.code.add(D`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),a.code.add(D`
    if (segmentLengthPseudoScreen >= ${s?"patternLength":"1e4"}) {
  `),a.uniforms.add(new ue("pixelRatio",((e,t)=>t.camera.pixelRatio))),a.code.add(D`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${r.stippleRequiresStretchMeasure?D`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),o.constants.add("stippleTexturePadding","float",Nt);const n=r.hasWebGL2Context?Te.None:Te.Size;o.uniforms.add(ye("stipplePatternTexture",(e=>e.stippleTexture),n)),o.uniforms.add([new ue("stipplePatternSDFNormalizer",(t=>{return i=t.stipplePattern,e(i)?(Math.floor(.5*(wt(i)-1))+.5)/i.pixelRatio:1;var i})),new ue("stipplePatternPixelSizeInv",(e=>1/Wt(e)))]),o.code.add(D`
    float padStippleTexture(float u) {
      float paddedTextureSize = ${be(r,"stipplePatternTexture")}.x;
      float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;

      return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
    }
  `),o.code.add(D`
    float getStippleSDF(out bool isClamped) {
      ${r.stippleRequiresClamp?D`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:D`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${r.stippleScaleWithLineWidth?D`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${r.stippleRequiresStretchMeasure?D`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:D`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${r.stippleScaleWithLineWidth?D`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:D`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),r.stippleOffColorEnabled?(o.uniforms.add(new Ae("stippleOffColor",(e=>{return i=e.stippleOffColor,t(i)?Q:4===i.length?i:$(jt,i[0],i[1],i[2],1);var i}))),o.code.add(D`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):o.code.add(D`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(i,r):function(e){e.fragment.code.add(D`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(i)}function Wt(t){const i=t.stipplePattern;return e(i)?It(t.stipplePattern)/i.pixelRatio:1}const zt=D.float(.4),Ut=128,Ft=.5;function Vt(e,t=128,i=.5*t,r=0){const s=function(e,t=128,i=.5*t,r=0){switch(e){case"circle":default:return function(e,t){const i=e/2-.5;return Ht(e,Gt(i,i,t/2))}(t,i);case"square":return function(e,t){return Bt(e,t,!1)}(t,i);case"cross":return function(e,t,i=0){return kt(e,t,!1,i)}(t,i,r);case"x":return function(e,t,i=0){return kt(e,t,!0,i)}(t,i,r);case"kite":return function(e,t){return Bt(e,t,!0)}(t,i);case"triangle":return function(e,t){return Ht(e,Jt(e/2,t,t/2))}(t,i);case"arrow":return function(e,t){const i=t,r=t/2,s=e/2,a=.8*i,o=Gt(s,(e-t)/2-a,Math.sqrt(a*a+r*r)),n=Jt(s,i,r);return Ht(e,((e,t)=>Math.max(n(e,t),-o(e,t))))}(t,i)}}(e,t,i,r);return new Oe(s,{mipmap:!1,wrap:{s:mt.CLAMP_TO_EDGE,t:mt.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0})}function Bt(e,t,i){return i&&(t/=Math.SQRT2),Ht(e,((r,s)=>{let a=r-.5*e+.25,o=.5*e-s-.75;if(i){const e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t}))}function kt(e,t,i,r=0){t-=r,i&&(t*=Math.SQRT2);const s=.5*t;return Ht(e,((t,a)=>{let o,n=t-.5*e,l=.5*e-a-1;if(i){const e=(n+l)/Math.SQRT2;l=(l-n)/Math.SQRT2,n=e}return n=Math.abs(n),l=Math.abs(l),o=n>l?n>s?Math.sqrt((n-s)*(n-s)+l*l):l:l>s?Math.sqrt(n*n+(l-s)*(l-s)):n,o-=r/2,o}))}function Gt(e,t,i){return(r,s)=>{const a=r-e,o=s-t;return Math.sqrt(a*a+o*o)-i}}function Jt(e,t,i){const r=Math.sqrt(t*t+i*i);return(s,a)=>{const o=Math.abs(s-e)-i,n=a-e+t/2+.75,l=(t*o+i*n)/r,c=-n;return Math.max(l,c)}}function Ht(e,t){const i=new Uint8Array(4*e*e);for(let r=0;r<e;r++)for(let s=0;s<e;s++){const a=s+e*r;let o=t(s,r);o=o/e+.5,dt(o,i,4*a)}return i}const $t=64,qt=32,Xt=10,Zt=.25;function Qt(e,t){return e.fromData(`${t}-marker`,(()=>Vt(t,64,32,6.4)))}function Yt(e,i){const r=e.vertex;e.constants.add("markerSizePerLineWidth","float",10),r.uniforms.add(new ue("pixelRatio",((e,t)=>t.camera.pixelRatio))),t(r.uniforms.get("markerScale"))&&r.constants.add("markerScale","float",1),r.code.add(D`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),i.space===Rt.World&&(r.constants.add("maxSegmentLengthFraction","float",.45),r.uniforms.add(new ue("perRenderPixelRatio",((e,t)=>t.camera.perRenderPixelRatio))),r.code.add(D`float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}
bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}`))}var Kt;!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(Kt||(Kt={}));class ei extends he{constructor(){super(...arguments),this.output=pe.Color,this.capType=Kt.BUTT,this.transparencyPassType=it.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.wireframe=!1,this.objectAndLayerIdColorInstanced=!1}}et([tt({count:pe.COUNT})],ei.prototype,"output",void 0),et([tt({count:Kt.COUNT})],ei.prototype,"capType",void 0),et([tt({count:it.COUNT})],ei.prototype,"transparencyPassType",void 0),et([tt()],ei.prototype,"occluder",void 0),et([tt()],ei.prototype,"hasSlicePlane",void 0),et([tt()],ei.prototype,"hasPolygonOffset",void 0),et([tt()],ei.prototype,"writeDepth",void 0),et([tt()],ei.prototype,"draped",void 0),et([tt()],ei.prototype,"stippleEnabled",void 0),et([tt()],ei.prototype,"stippleOffColorEnabled",void 0),et([tt()],ei.prototype,"stippleScaleWithLineWidth",void 0),et([tt()],ei.prototype,"stipplePreferContinuous",void 0),et([tt()],ei.prototype,"roundJoins",void 0),et([tt()],ei.prototype,"applyMarkerOffset",void 0),et([tt()],ei.prototype,"vvSize",void 0),et([tt()],ei.prototype,"vvColor",void 0),et([tt()],ei.prototype,"vvOpacity",void 0),et([tt()],ei.prototype,"falloffEnabled",void 0),et([tt()],ei.prototype,"innerColorEnabled",void 0),et([tt()],ei.prototype,"hasOccludees",void 0),et([tt()],ei.prototype,"hasMultipassTerrain",void 0),et([tt()],ei.prototype,"cullAboveGround",void 0),et([tt()],ei.prototype,"wireframe",void 0),et([tt({constValue:!0})],ei.prototype,"stippleRequiresClamp",void 0),et([tt({constValue:!0})],ei.prototype,"stippleRequiresStretchMeasure",void 0),et([tt({constValue:!0})],ei.prototype,"hasVvInstancing",void 0),et([tt({constValue:!0})],ei.prototype,"hasSliceTranslatedView",void 0),et([tt()],ei.prototype,"objectAndLayerIdColorInstanced",void 0);const ti=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:1,build:function(e){const t=new Re,{vertex:i,fragment:r}=t,a=e.hasMultipassTerrain&&(e.output===pe.Color||e.output===pe.Alpha);t.include(Ce),t.include(Lt,e),t.include(Mt,e);const o=e.applyMarkerOffset&&!e.draped;o&&(i.uniforms.add(new ue("markerScale",(e=>e.markerScale))),t.include(Yt,{space:Rt.World})),e.output===pe.Depth&&t.include(xe,e),t.include(Le,e),Ee(i,e),i.uniforms.add([new De("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new Pe("nearFar",((e,t)=>t.camera.nearFar)),new ue("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new Ae("viewport",((e,t)=>t.camera.fullViewport))]),i.constants.add("LARGE_HALF_FLOAT","float",65500),t.attributes.add(Ke.POSITION,"vec3"),t.attributes.add(Ke.SUBDIVISIONFACTOR,"float"),t.attributes.add(Ke.UV0,"vec2"),t.attributes.add(Ke.AUXPOS1,"vec3"),t.attributes.add(Ke.AUXPOS2,"vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),Ie(t),a&&t.varyings.add("depth","float");const n=e.capType===Kt.ROUND,l=e.stippleEnabled&&e.stippleScaleWithLineWidth||n;l&&t.varyings.add("vLineWidth","float");const c=e.stippleEnabled&&e.stippleScaleWithLineWidth;c&&t.varyings.add("vLineSizeInv","float");const p=e.innerColorEnabled||n;p&&t.varyings.add("vLineDistance","float");const d=e.stippleEnabled&&n,h=e.falloffEnabled||d;h&&t.varyings.add("vLineDistanceNorm","float"),n&&(t.varyings.add("vSegmentSDF","float"),t.varyings.add("vReverseSegmentSDF","float")),i.code.add(D`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),i.code.add(D`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),we(t),i.code.add(D`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${a?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),i.uniforms.add(new ue("pixelRatio",((e,t)=>t.camera.pixelRatio))),i.code.add(D`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${l?D`vLineWidth = lineWidth;`:""}
      ${c?D`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);
  `),o&&i.code.add(D`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),i.code.add(D`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(e.stippleEnabled||n)&&i.code.add(D`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${n?D`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),i.code.add(D`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?i.code.add(D`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?D`min(1.0, subdivisionFactor * ${D.float(1.5)})`:D`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):i.code.add(D`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const u=e.capType!==Kt.BUTT;return i.code.add(D`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${u?D`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),i.code.add(D`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${h||p?D`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${p?D`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${h?D`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),n&&i.code.add(D`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?i.uniforms.add(new ue("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):i.code.add(D`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.code.add(D`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?i.code.add(D`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.code.add(D`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new ue("stipplePatternPixelSize",(e=>Wt(e)))),i.code.add(D`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),i.code.add(D`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),a&&t.include(Ne,e),t.include(je,e),r.include(Me),r.code.add(D`
  void main() {
    discardBySlice(vpos);
    ${a?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.wireframe?r.code.add(D`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(n&&r.code.add(D`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${D.float(We)}) {
        discard;
      }
    `),d?r.code.add(D`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${D.float(We)}, stippleCoverage);
      `):r.code.add(D`float stippleAlpha = getStippleAlpha();`),r.uniforms.add(new Ae("intrinsicColor",(e=>e.color))),r.code.add(D`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(r.uniforms.add(new Ae("innerColor",(e=>s(e.innerColor,e.color)))),r.uniforms.add(new ue("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),r.code.add(D`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),r.code.add(D`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(r.uniforms.add(new ue("falloff",(e=>e.falloff))),r.code.add(D`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),r.code.add(D`
    if (finalColor.a < ${D.float(We)}) {
      discard;
    }

    ${e.output===pe.Alpha?D`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===pe.Color?D`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===pe.Color&&e.transparencyPassType===it.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===pe.Highlight?D`gl_FragColor = vec4(1.0);`:""}
    ${e.output===pe.Depth?D`outputDepth(linearDepth);`:""}
    ${e.output===pe.ObjectAndLayerIdColor?D`outputObjectAndLayerIdColor();`:""}
  }
  `),t}},Symbol.toStringTag,{value:"Module"})),ii=new Map([[Ke.POSITION,0],[Ke.SUBDIVISIONFACTOR,1],[Ke.UV0,2],[Ke.AUXPOS1,3],[Ke.AUXPOS2,4],[Ke.COLOR,5],[Ke.COLORFEATUREATTRIBUTE,5],[Ke.SIZE,6],[Ke.SIZEFEATUREATTRIBUTE,6],[Ke.OPACITYFEATUREATTRIBUTE,7],[Ke.OBJECTANDLAYERIDCOLOR,8]]);class ri extends ze{initializeProgram(e){return new Ue(e.rctx,ri.shader.get().build(this.configuration),ii)}_makePipelineState(e,t){const i=this.configuration,r=e===it.NONE,s=e===it.FrontFace;return rt({blending:i.output===pe.Color||i.output===pe.Alpha?r?st:at(e):null,depthTest:{func:ot(e)},depthWrite:r?i.writeDepth&&nt:lt(e),colorWrite:ct,stencilWrite:i.hasOccludees?Fe:null,stencilTest:i.hasOccludees?t?Ve:Be:null,polygonOffset:r||s?i.hasPolygonOffset&&si:pt})}initializePipeline(){const e=this.configuration;if(e.occluder){const t=e.hasPolygonOffset&&si;this._occluderPipelineTransparent=rt({blending:st,polygonOffset:t,depthTest:ke,depthWrite:null,colorWrite:ct,stencilWrite:null,stencilTest:Ge}),this._occluderPipelineOpaque=rt({blending:st,polygonOffset:t,depthTest:ke,depthWrite:null,colorWrite:ct,stencilWrite:Je,stencilTest:He}),this._occluderPipelineMaskWrite=rt({blending:null,polygonOffset:t,depthTest:$e,depthWrite:null,colorWrite:null,stencilWrite:Fe,stencilTest:Ve})}return this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return this.configuration.wireframe?ft.LINES:ft.TRIANGLE_STRIP}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?e===de.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:e===de.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,t)}}ri.shader=new qe(ti,(()=>Promise.resolve().then((()=>ti))));const si={factor:0,units:-4};var ai;!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(ai||(ai={}));class oi extends I{constructor(e){super(e,new li),this._configuration=new ei,this._vertexAttributeLocations=ii,this._layout=this.createLayout()}isClosed(e,t){return hi(this.parameters,e,t)}getConfiguration(t,i){this._configuration.output=t,this._configuration.draped=i.slot===de.DRAPED_MATERIAL;const r=e(this.parameters.stipplePattern)&&t!==pe.Highlight;var s;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&e(this.parameters.stippleOffColor),this._configuration.stippleScaleWithLineWidth=r&&this.parameters.stippleScaleWithLineWidth,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=!!e(this.parameters.markerParameters)&&(s=this.parameters.markerParameters).anchor===Ct.Tip&&s.hideOnShortSegments&&"begin-end"===s.placement&&s.worldSpace,this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.vvOpacity=this.parameters.vvOpacityEnabled,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&e(this.parameters.innerColor),this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.occluder=this.parameters.renderOccluded===w.OccludeAndTransparentStencil,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration.hasMultipassTerrain=i.multipassTerrain.enabled,this._configuration.cullAboveGround=i.multipassTerrain.cullAboveGround,this._configuration.wireframe=this.parameters.wireframe,this._configuration}intersect(t,i,r,s,a,o,n,l,c){e(c)?this._intersectDrapedLineGeometry(t,s,c,o,n):this._intersectLineGeometry(t,i,r,s,n)}_intersectDrapedLineGeometry(e,t,i,r,s){if(!t.options.selectionMode)return;const a=e.vertexAttributes.get(Ke.POSITION).data,o=e.vertexAttributes.get(Ke.SIZE);let n=this.parameters.width;if(this.parameters.vvSizeEnabled){const t=e.vertexAttributes.get(Ke.SIZEFEATUREATTRIBUTE).data[0];n*=q(this.parameters.vvSizeOffset[0]+t*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else o&&(n*=o.data[0]);const l=r[0],c=r[1],p=(n/2+4)*e.screenToWorldRatio;let d=Number.MAX_VALUE,h=0;for(let e=0;e<a.length-5;e+=3){const t=a[e],i=a[e+1],r=l-t,s=c-i,o=a[e+3]-t,n=a[e+4]-i,p=q((o*r+n*s)/(o*o+n*n),0,1),u=o*p-r,m=n*p-s,f=u*u+m*m;f<d&&(d=f,h=e/3)}d<p*p&&s(i.dist,i.normal,h,!1)}_intersectLineGeometry(e,t,i,r,s){if(!r.options.selectionMode||F(t))return;if(!W(i))return void H.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const a=e.vertexAttributes,o=a.get(Ke.POSITION).data;let n=this.parameters.width;if(this.parameters.vvSizeEnabled){const e=a.get(Ke.SIZEFEATUREATTRIBUTE).data[0];n*=q(this.parameters.vvSizeOffset[0]+e*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else a.has(Ke.SIZE)&&(n*=a.get(Ke.SIZE).data[0]);const l=r.camera,c=gi;Z(c,r.point);const p=n*l.pixelRatio/2+4*l.pixelRatio;v(xi[0],c[0]-p,c[1]+p,0),v(xi[1],c[0]+p,c[1]+p,0),v(xi[2],c[0]+p,c[1]-p,0),v(xi[3],c[0]-p,c[1]-p,0);for(let e=0;e<4;e++)if(!l.unprojectFromRenderScreen(xi[e],Li[e]))return;oe(l.eye,Li[0],Li[1],Ei),oe(l.eye,Li[1],Li[2],Di),oe(l.eye,Li[2],Li[3],Pi),oe(l.eye,Li[3],Li[0],Ii);let d=Number.MAX_VALUE,u=0;const f=di(this.parameters,a,e.indices)?o.length-2:o.length-5;for(let e=0;e<f;e+=3){ui[0]=o[e]+i[12],ui[1]=o[e+1]+i[13],ui[2]=o[e+2]+i[14];const t=(e+3)%o.length;if(mi[0]=o[t]+i[12],mi[1]=o[t+1]+i[13],mi[2]=o[t+2]+i[14],ne(Ei,ui)<0&&ne(Ei,mi)<0||ne(Di,ui)<0&&ne(Di,mi)<0||ne(Pi,ui)<0&&ne(Pi,mi)<0||ne(Ii,ui)<0&&ne(Ii,mi)<0)continue;if(l.projectToRenderScreen(ui,Si),l.projectToRenderScreen(mi,_i),Si[2]<0&&_i[2]>0){S(fi,ui,mi);const e=l.frustum,t=-ne(e[ee.NEAR],ui)/_(fi,le(e[ee.NEAR]));T(fi,fi,t),y(ui,ui,fi),l.projectToRenderScreen(ui,Si)}else if(Si[2]>0&&_i[2]<0){S(fi,mi,ui);const e=l.frustum,t=-ne(e[ee.NEAR],mi)/_(fi,le(e[ee.NEAR]));T(fi,fi,t),y(mi,mi,fi),l.projectToRenderScreen(mi,_i)}else if(Si[2]<0&&_i[2]<0)continue;Si[2]=0,_i[2]=0;const r=ie(re(Si,_i,bi),c);r<d&&(d=r,m(Ti,ui),m(yi,mi),u=e/3)}const g=r.rayBegin,A=r.rayEnd;if(d<p*p){let e=Number.MAX_VALUE;if(se(re(Ti,yi,bi),re(g,A,Ai),vi)){S(vi,vi,g);const t=b(vi);T(vi,vi,1/t),e=t/h(g,A)}s(e,vi,u,!1)}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return!1;const r=e.indices,s=i.get(Ke.POSITION);return Xe(s,r?r.get(Ke.POSITION):null,r&&di(this.parameters,i,r),t)}createLayout(){const e=ce().vec3f(Ke.POSITION).f32(Ke.SUBDIVISIONFACTOR).vec2f(Ke.UV0).vec3f(Ke.AUXPOS1).vec3f(Ke.AUXPOS2);return this.parameters.vvSizeEnabled?e.f32(Ke.SIZEFEATUREATTRIBUTE):e.f32(Ke.SIZE),this.parameters.vvColorEnabled?e.f32(Ke.COLORFEATUREATTRIBUTE):e.vec4f(Ke.COLOR),this.parameters.vvOpacityEnabled&&e.f32(Ke.OPACITYFEATUREATTRIBUTE),J("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(Ke.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new ci(this._layout,this.parameters)}requiresSlot(e,t){return!(t!==pe.Color&&t!==pe.Alpha&&t!==pe.Highlight&&t!==pe.Depth&&t!==pe.ObjectAndLayerIdColor||e!==de.DRAPED_MATERIAL&&(this.parameters.renderOccluded===w.OccludeAndTransparentStencil?e!==de.OPAQUE_MATERIAL&&e!==de.OCCLUDER_MATERIAL&&e!==de.TRANSPARENT_OCCLUDER_MATERIAL:t===pe.Color||t===pe.Alpha?e!==(this.parameters.writeDepth?de.TRANSPARENT_MATERIAL:de.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):e!==de.OPAQUE_MATERIAL))}createGLMaterial(e){return new ni(e)}validateParameters(t){"miter"!==t.join&&(t.miterLimit=0),e(t.markerParameters)&&(t.markerScale=t.markerParameters.width/t.width)}}class ni extends Ze{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==pe.Color&&this._output!==pe.Alpha||this._updateOccludeeState(e);const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters(this._stippleTextureRepository.swap(this._stipplePattern,t)),this._stipplePattern=t),this.ensureTechnique(ri,e)}}class li extends Qe{constructor(){super(...arguments),this.width=0,this.color=K,this.join="miter",this.cap=Kt.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.hasOccludees=!1,this.wireframe=!1}}class ci{constructor(e,t){this._parameters=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=1+i}}_isClosed(e){return di(this._parameters,e.vertexAttributes,e.indices)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.indices.get(Ke.POSITION).length/2+1,i=this._isClosed(e);let r=i?2:4;return r+=((i?t:t-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(t,i,r,s,a){const o=Oi,n=Ri,l=Ci,c=r.vertexAttributes.get(Ke.POSITION).data,d=r.indices&&r.indices.get(Ke.POSITION),u=r.vertexAttributes.get(Ke.DISTANCETOSTART)?.data;d&&d.length!==2*(c.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let f=1,g=0;this._parameters.vvSizeEnabled?g=r.vertexAttributes.get(Ke.SIZEFEATUREATTRIBUTE).data[0]:r.vertexAttributes.has(Ke.SIZE)&&(f=r.vertexAttributes.get(Ke.SIZE).data[0]);let S=[1,1,1,1],_=0;this._parameters.vvColorEnabled?_=r.vertexAttributes.get(Ke.COLORFEATUREATTRIBUTE).data[0]:r.vertexAttributes.has(Ke.COLOR)&&(S=r.vertexAttributes.get(Ke.COLOR).data);let T=null;J("enable-feature:objectAndLayerId-rendering")&&(T=r.objectAndLayerIdColor);let y=0;this._parameters.vvOpacityEnabled&&(y=r.vertexAttributes.get(Ke.OPACITYFEATUREATTRIBUTE).data[0]);const b=c.length/3,A=new Float32Array(s.buffer),O=J("enable-feature:objectAndLayerId-rendering")?new Uint8Array(s.buffer):null,R=this.vertexBufferLayout.stride/4;let C=a*R;const x=C;let L=0;const E=u?(e,t,i)=>L=u[i]:(e,t,i)=>L+=h(e,t),D=(t,i,r,s,a,o,n)=>{if(A[C++]=i[0],A[C++]=i[1],A[C++]=i[2],A[C++]=s,A[C++]=n,A[C++]=a,A[C++]=t[0],A[C++]=t[1],A[C++]=t[2],A[C++]=r[0],A[C++]=r[1],A[C++]=r[2],this._parameters.vvSizeEnabled?A[C++]=g:A[C++]=f,this._parameters.vvColorEnabled)A[C++]=_;else{const e=Math.min(4*o,S.length-4);A[C++]=S[e+0],A[C++]=S[e+1],A[C++]=S[e+2],A[C++]=S[e+3]}this._parameters.vvOpacityEnabled&&(A[C++]=y),J("enable-feature:objectAndLayerId-rendering")&&(e(T)&&(O[4*C+0]=T[0],O[4*C+1]=T[1],O[4*C+2]=T[2],O[4*C+3]=T[3]),C++)};C+=R,v(n,c[0],c[1],c[2]),t&&p(n,n,t);const P=this._isClosed(r);if(P){const e=c.length-3;v(o,c[e],c[e+1],c[e+2]),t&&p(o,o,t)}else v(l,c[3],c[4],c[5]),t&&p(l,l,t),D(n,n,l,1,ai.LEFT_CAP_START,0,0),D(n,n,l,1,ai.RIGHT_CAP_START,0,0),m(o,n),m(n,l);const I=P?0:1,w=P?b:b-1;for(let e=I;e<w;e++){const i=(e+1)%b*3;v(l,c[i+0],c[i+1],c[i+2]),t&&p(l,l,t),E(o,n,e),D(o,n,l,0,ai.LEFT_JOIN_END,e,L),D(o,n,l,0,ai.RIGHT_JOIN_END,e,L);const r=this.numJoinSubdivisions;for(let t=0;t<r;++t){const i=(t+1)/(r+1);D(o,n,l,i,ai.LEFT_JOIN_END,e,L),D(o,n,l,i,ai.RIGHT_JOIN_END,e,L)}D(o,n,l,1,ai.LEFT_JOIN_START,e,L),D(o,n,l,1,ai.RIGHT_JOIN_START,e,L),m(o,n),m(n,l)}P?(v(l,c[3],c[4],c[5]),t&&p(l,l,t),L=E(o,n,w),D(o,n,l,0,ai.LEFT_JOIN_END,I,L),D(o,n,l,0,ai.RIGHT_JOIN_END,I,L)):(L=E(o,n,w),D(o,n,n,0,ai.LEFT_CAP_END,w,L),D(o,n,n,0,ai.RIGHT_CAP_END,w,L)),pi(A,x+R,A,x,R),C=pi(A,C-R,A,C,R),this._parameters.wireframe&&this._addWireframeVertices(s,x,C,R)}_addWireframeVertices(e,t,i,r){const s=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let o=0;const n=e=>o=pi(a,e,s,o,r);for(let e=0;e<a.length-1;e+=2*r)n(e),n(e+2*r),n(e+1*r),n(e+2*r),n(e+1*r),n(e+3*r)}}function pi(e,t,i,r,s){for(let a=0;a<s;a++)i[r++]=e[t++];return r}function di(e,t,i){return hi(e,t.get(Ke.POSITION).data,i?i.get(Ke.POSITION):null)}function hi(e,t,i){return!!e.isClosed&&(i?i.length>2:t.length>6)}const ui=g(),mi=g(),fi=g(),vi=g(),gi=g(),Si=X(),_i=X(),Ti=g(),yi=g(),bi=te(),Ai=te(),Oi=g(),Ri=g(),Ci=g(),xi=[X(),X(),X(),X()],Li=[g(),g(),g(),g()],Ei=ae(),Di=ae(),Pi=ae(),Ii=ae(),wi=ce().vec3f(Ke.POSITION),Ni=ce().vec3f(Ke.POSITION).vec2f(Ke.UV0),ji=ce().vec3f(Ke.POSITION).vec4u8(Ke.COLOR);ce().vec3f(Ke.POSITION).vec4u8(Ke.OBJECTANDLAYERIDCOLOR),ce().vec3f(Ke.POSITION).vec2f(Ke.UV0).vec4u8(Ke.OBJECTANDLAYERIDCOLOR);const Mi=ce().vec3f(Ke.POSITION).vec4u8(Ke.COLOR).vec4u8(Ke.OBJECTANDLAYERIDCOLOR);class Wi{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(Ke.POSITION).length}write(e,t,i,r,s){Ye(i,this.vertexBufferLayout,e,t,r,s)}}export{Kt as C,Wi as D,gt as G,Mt as L,Yt as M,_t as O,Ni as P,oi as R,Et as S,At as W,Mi as a,ji as b,Vt as c,Ft as d,Ut as e,Wt as f,wi as g,Rt as h,Ot as i,Lt as j,Ct as k,$t as l,qt as m,Zt as n,xt as o,Qt as p,St as q,Xt as r};
