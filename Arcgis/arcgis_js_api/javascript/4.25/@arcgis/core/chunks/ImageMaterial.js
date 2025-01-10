/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{S as e,R as t}from"./RenderSlot.js";import{C as a}from"./basicInterfaces.js";import{G as r}from"./GLTextureMaterial.js";import{g as s,D as i,M as o,i as n,a as l}from"./Material.js";import{T as u,i as p,m as c,o as h,f as d,a as m,d as f,b as g,c as _,g as T,h as v}from"./OrderIndependentTransparency.js";import{D as P,P as y}from"./DefaultBufferWriter.js";import{_ as S}from"./tslib.es6.js";import{S as O,a as x,F as A,r as C,m as b,N as F,e as w,Z as D,C as E,D as M,c as N,P as j,u as I,w as R,x as L,R as U}from"./bufferWriterUtils.js";import{p as B}from"./ShaderTechniqueConfiguration.js";import{i as G}from"./maybe.js";import{O as W}from"./vec2f64.js";import{T as $}from"./OutputHighlight.glsl.js";import{V as H}from"./VertexAttribute.js";import{B as z}from"./enums3.js";const q=Object.freeze(Object.defineProperty({__proto__:null,build:function(t){const a=new O,{vertex:r,fragment:i}=a;return x(r,t),a.include($,t),a.attributes.add(H.POSITION,"vec3"),a.attributes.add(H.UV0,"vec2"),a.varyings.add("vpos","vec3"),t.hasMultipassTerrain&&a.varyings.add("depth","float"),r.uniforms.add(new A("textureCoordinateScaleFactor",(e=>G(e.texture)&&G(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:W))),r.code.add(s`
    void main(void) {
      vpos = position;
      ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),a.include(C,t),a.include(b,t),i.uniforms.add([new F("tex",(e=>e.texture)),new w("opacity",(e=>e.opacity))]),a.varyings.add("vTexCoord","vec2"),t.output===e.Alpha?i.code.add(s`
    void main() {
      discardBySlice(vpos);
      ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${s.float(D)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(i.include(E),i.code.add(s`
    void main() {
      discardBySlice(vpos);
      ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${s.float(D)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${t.transparencyPassType===u.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),a}},Symbol.toStringTag,{value:"Module"}));class V extends N{initializeProgram(e){return new j(e.rctx,V.shader.get().build(this.configuration),i)}_setPipelineState(t,a){const r=this.configuration,s=t===u.NONE,i=t===u.FrontFace;return c({blending:r.output!==e.Color&&r.output!==e.Alpha||!r.transparent?null:s?Q:h(t),culling:d(r.cullFace),depthTest:{func:m(t)},depthWrite:s?r.writeDepth&&f:g(t),colorWrite:_,stencilWrite:r.hasOccludees?I:null,stencilTest:r.hasOccludees?a?R:L:null,polygonOffset:s||i?null:T(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}V.shader=new U(q,(()=>Promise.resolve().then((()=>q))));const Q=p(z.ONE,z.ONE_MINUS_SRC_ALPHA);class Z extends M{constructor(){super(...arguments),this.output=e.Color,this.cullFace=a.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}S([B({count:e.COUNT})],Z.prototype,"output",void 0),S([B({count:a.COUNT})],Z.prototype,"cullFace",void 0),S([B()],Z.prototype,"hasSlicePlane",void 0),S([B()],Z.prototype,"transparent",void 0),S([B()],Z.prototype,"enableOffset",void 0),S([B()],Z.prototype,"writeDepth",void 0),S([B()],Z.prototype,"hasOccludees",void 0),S([B({count:u.COUNT})],Z.prototype,"transparencyPassType",void 0),S([B()],Z.prototype,"hasMultipassTerrain",void 0),S([B()],Z.prototype,"cullAboveGround",void 0);class k extends o{constructor(e){super(e,new K),this.supportsEdges=!0,this._configuration=new Z}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<v,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,a,r,s,i,o){n(e,t,r,s,i,void 0,o)}requiresSlot(a,r){return!(r!==e.Color&&r!==e.Alpha&&r!==e.Highlight||a!==t.DRAPED_MATERIAL&&(r===e.Highlight?a!==t.OPAQUE_MATERIAL:a!==(this.parameters.transparent?this.parameters.writeDepth?t.TRANSPARENT_MATERIAL:t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:t.OPAQUE_MATERIAL)))}createGLMaterial(e){return new J(e)}createBufferWriter(){return new P(y)}}class J extends r{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(V,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(t){return this._output!==e.Color&&this._output!==e.Alpha||this._updateOccludeeState(t),this._updateParameters(t)}}class K extends l{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=a.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{k as I};
