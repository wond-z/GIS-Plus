/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as e,i as t,e as r,u as s}from"./maybe.js";import{tryProjectWithZConversion as i}from"../geometry/projection.js";import{g as a}from"./ElevationProvider.js";import{f as o}from"./mat4.js";import{c as l}from"./mat4f64.js";import{s as n,Z as h,e as p,d as m}from"./vec3.js";import{f,c as d}from"./vec4f32.js";import{O as _}from"./Object3DVisualElement.js";import{l as u,c}from"./line.js";import{R as g}from"./Material.js";import{R as C}from"./DefaultBufferWriter.js";function y(s,o,l,n=!1){const h=i(s,o);return e(h)?null:(h.hasZ&&!n||!t(l)||(h.z=r(a(l,h),0)),h)}function P(e,t,r){r.warnOnce(`Failed to project analysis geometry (id: '${e.id}'), projection from spatial reference (wkid: '${t.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}class w extends _{constructor(e,r){super(e),this._hasExternalMaterial=!1,this._renderOccluded=g.OccludeAndTransparent,this._width=1,this._color=f(1,0,1,1),this._innerWidth=1,this._innerColor=null,this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._writeDepthEnabled=!0,this._falloff=0,this._polygonOffset=!1,this._material=r,this._hasExternalMaterial=t(r),this.applyProps(e)}setGeometryFromRenderSpacePoint(e,t=1e3){const r=[];r.push([[e[0]-t,e[1]+0,e[2]+0],[e[0]+t,e[1]+0,e[2]+0]]),r.push([[e[0]-0,e[1]-t,e[2]+0],[e[0]+0,e[1]+t,e[2]+0]]),r.push([[e[0]-0,e[1]+0,e[2]-t],[e[0]+0,e[1]+0,e[2]+t]]),this.geometry=r}setGeometryFromExtent(e){const t=this.view.spatialReference,r=m(),s=m(),i=100,a=[];n(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),a.push([s[0],s[1],s[2]]),n(r,e[2],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),a.push([s[0],s[1],s[2]]),n(r,e[2],e[3],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),a.push([s[0],s[1],s[2]]),n(r,e[0],e[3],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),a.push([s[0],s[1],s[2]]),n(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),a.push([s[0],s[1],s[2]]),n(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),a.push([s[0],s[1],s[2]]),this.geometry=[a]}setGeometryFromFrustum(e){const t=[];e.lines.forEach((e=>{t.push([e.origin[0],e.origin[1],e.origin[2]]),t.push([e.endpoint[0],e.endpoint[1],e.endpoint[2]])})),this.geometry=[t]}setGeometryFromBoundedPlane(e){const t=[],r=e.origin,s=e.basis1,i=e.basis2,a=.5,o=m(),l=m(),n=m(),h=m();o[0]=r[0]-s[0]*a-i[0]*a,o[1]=r[1]-s[1]*a-i[1]*a,o[2]=r[2]-s[2]*a-i[2]*a,l[0]=r[0]-s[0]*a+i[0]*a,l[1]=r[1]-s[1]*a+i[1]*a,l[2]=r[2]-s[2]*a+i[2]*a,n[0]=r[0]+s[0]*a+i[0]*a,n[1]=r[1]+s[1]*a+i[1]*a,n[2]=r[2]+s[2]*a+i[2]*a,h[0]=r[0]+s[0]*a-i[0]*a,h[1]=r[1]+s[1]*a-i[1]*a,h[2]=r[2]+s[2]*a-i[2]*a,t.push([o[0],o[1],o[2]]),t.push([l[0],l[1],l[2]]),t.push([n[0],n[1],n[2]]),t.push([h[0],h[1],h[2]]),t.push([o[0],o[1],o[2]]),this.geometry=[t]}setGeometryFromSegment(e){const t=e.endRenderSpace;this.transform=o(O,t);const{points:r}=e.createRenderGeometry(t,this.view.renderCoordsHelper);this.geometry=[r]}setGeometryFromSegments(e,t=h){this.transform=o(O,t),this.geometry=e.map((e=>e.createRenderGeometry(t,this.view.renderCoordsHelper).points))}getTransformedGeometry(){return e(this._geometry)?null:this._geometry.map((e=>e.map((e=>p(m(),e,this.transform)))))}get renderOccluded(){return t(this._material)?this._material.parameters.renderOccluded:this._renderOccluded}set renderOccluded(e){this._renderOccluded=e,t(this._material)&&this._material.setParameters({renderOccluded:e})}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return t(this._material)?this._material.parameters.width:this._width}set width(e){this._width=e,t(this._material)&&this._material.setParameters({width:e})}get color(){return t(this._material)?this._material.parameters.color:this._color}set color(e){this._color=d(e),t(this._material)&&this._material.setParameters({color:this._color})}get innerWidth(){return t(this._material)?this._material.parameters.innerWidth:this._innerWidth}set innerWidth(e){this._innerWidth=e,t(this._material)&&this._material.setParameters({innerWidth:e})}get innerColor(){return t(this._material)?this._material.parameters.innerColor:this._innerColor}set innerColor(e){this._innerColor=t(e)?d(e):e,t(this._material)&&this._material.setParameters({innerColor:this._innerColor})}get stipplePattern(){return t(this._material)?this._material.parameters.stipplePattern:this._stipplePattern}set stipplePattern(e){this._stipplePattern=e,t(this._material)&&this._material.setParameters({stipplePattern:e})}get stippleOffColor(){return t(this._material)?this._material.parameters.stippleOffColor:this._stippleOffColor}set stippleOffColor(e){this._stippleOffColor=t(e)?d(e):null,t(this._material)&&this._material.setParameters({stippleOffColor:this._stippleOffColor})}get stipplePreferContinuous(){return t(this._material)?this._material.parameters.stipplePreferContinuous:this._stipplePreferContinuous}set stipplePreferContinuous(e){this._stipplePreferContinuous=e,t(this._material)&&this._material.setParameters({stipplePreferContinuous:e})}get writeDepthEnabled(){return t(this._material)?this._material.parameters.writeDepth:this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled=e,t(this._material)&&this._material.setParameters({writeDepth:e})}get falloff(){return t(this._material)?this._material.parameters.falloff:this._falloff}set falloff(e){this._falloff=e,t(this._material)&&this._material.setParameters({falloff:e})}get polygonOffset(){return t(this._material)?this._material.parameters.hasPolygonOffset:this._polygonOffset}set polygonOffset(e){this._polygonOffset=e,t(this._material)&&this._material.setParameters({hasPolygonOffset:e})}createExternalResources(){this._hasExternalMaterial||(this._material=new C({width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,hasPolygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}))}destroyExternalResources(){this._hasExternalMaterial||(this._material=null)}createGeometries(e){for(const t of u(this.geometry)){const r=c(t);e.addGeometry(r,s(this._material))}}forEachExternalMaterial(e){this._hasExternalMaterial||e(s(this._material))}}const O=l();export{w as L,y as a,P as l};