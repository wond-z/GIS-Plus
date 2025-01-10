/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{f as e,e as t,a6 as a,a7 as r,T as s,aq as i,ar as o,k as n,an as l,t as c,b as d,al as h,ak as u,a5 as m,a3 as g,ae as p,i as f,n as v,S as x,U as b,L as _,N as S,F as w,R as T,c as y,P as F,W as M}from"./bufferWriterUtils.js";import{g as O,N as A,D as N}from"./Material.js";import{s as P,d as L,f as z,c as R,D as C,g as H,a as D,k as V,z as B,C as I}from"./vec3.js";import{s as G,c as U,h as E}from"./mathUtils.js";import{c as j}from"./vec4f64.js";import{c as k}from"./mat3f64.js";import{V as q}from"./VertexAttribute.js";import{f as W}from"./vec3f32.js";import{n as $}from"./compilerUtils.js";import"./object.js";import"../core/Error.js";import"./Logger.js";import"./basicInterfaces.js";import{i as X,u as K,p as Q,g as Y,a as Z}from"./maybe.js";import{s as J}from"./vec2.js";import{r as ee}from"./requestImageUtils.js";import{Z as te,a as ae}from"./vec2f64.js";import{m as re,c as se}from"./OrderIndependentTransparency.js";import{C as ie,g as oe}from"./CameraSpace.glsl.js";import{e as ne,T as le,P as ce,a as de,c as he,b as ue,g as me,h as ge}from"./enums3.js";import{v as pe,F as fe}from"./FramebufferObject.js";import{T as ve}from"./Texture.js";var xe;function be(e,t){switch(t.textureCoordinateType){case xe.Default:return e.attributes.add(q.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(O`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case xe.Compressed:return e.attributes.add(q.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(O`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case xe.Atlas:return e.attributes.add(q.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(q.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(O`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:$(t.textureCoordinateType);case xe.None:return void e.vertex.code.add(O`void forwardTextureCoordinates() {}`);case xe.COUNT:return}}function _e(t){t.uniforms.add(new e("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function Se(t){t.uniforms.add(new e("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function we(e,a){const r=e.fragment;_e(r),Se(r),function(e,a){a.useLegacyTerrainShading?e.uniforms.add(new t("lightingFixedFactor",((e,t)=>t.lighting.noonFactor*(1-t.lighting.globalFactor)))):e.constants.add("lightingFixedFactor","float",0)}(r,a),r.code.add(O`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Te(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(O`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function ye(e,t){switch(e.include(be,t),e.fragment.code.add(O`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case xe.Default:case xe.Compressed:return void e.fragment.code.add(O`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case xe.Atlas:return e.include(Te),void e.fragment.code.add(O`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:$(t.textureCoordinateType);case xe.None:case xe.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(xe||(xe={}));class Fe extends a{constructor(e,t){super(e,"vec2",r.Draw,((a,r,s,i)=>a.setUniform2fv(e,t(r,s,i))))}}class Me extends a{constructor(e,t){super(e,"sampler2D",r.Draw,((a,r,s)=>a.bindTexture(e,t(r,s))))}}function Oe(e,t,a=s.None){const r=[new Me(e,t)];if(a&s.Size){const a=e+i;r.push(new Fe(a,((e,a)=>{const r=t(e,a);return X(r)?J(Ae,r.descriptor.width,r.descriptor.height):te})))}if(a&s.InvSize){const a=e+o;r.push(new Fe(a,((e,a)=>{const r=t(e,a);return X(r)?J(Ae,1/r.descriptor.width,1/r.descriptor.height):te})))}return r}const Ae=ae(),Ne=W(0,.6,.2);var Pe;function Le(t,a){const i=t.fragment,o=a.hasMetallicRoughnessTexture||a.hasEmissionTexture||a.hasOcclusionTexture;if(a.pbrMode===Pe.Normal&&o&&t.include(ye,a),a.pbrMode!==Pe.Schematic)if(a.pbrMode!==Pe.Disabled){if(a.pbrMode===Pe.Normal){i.code.add(O`vec3 mrr;
vec3 emission;
float occlusion;`);const t=a.supportsTextureAtlas?a.hasWebGL2Context?s.None:s.Size:s.None,d=a.pbrTextureBindType;a.hasMetallicRoughnessTexture&&(i.uniforms.add(d===r.Pass?n("texMetallicRoughness",(e=>e.textureMetallicRoughness),t):Oe("texMetallicRoughness",(e=>e.textureMetallicRoughness),t)),i.code.add(O`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),a.hasEmissionTexture&&(i.uniforms.add(d===r.Pass?n("texEmission",(e=>e.textureEmissive),t):Oe("texEmission",(e=>e.textureEmissive),t)),i.code.add(O`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),a.hasOcclusionTexture?(i.uniforms.add(d===r.Pass?n("texOcclusion",(e=>e.textureOcclusion),t):Oe("texOcclusion",(e=>e.textureOcclusion),t)),i.code.add(O`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(O`float getBakedOcclusion() { return 1.0; }`),i.uniforms.add(d===r.Pass?[new e("emissionFactor",(e=>e.emissiveFactor)),new e("mrrFactors",(e=>e.mrrFactors))]:[new l("emissionFactor",(e=>e.emissiveFactor)),new l("mrrFactors",(e=>e.mrrFactors))]),i.code.add(O`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?O`vtc.uv = vuv0;`:""}
      ${a.hasMetallicRoughnessTextureTransform?O`vtc.uv = metallicRoughnessUV;`:""}
      ${a.hasMetallicRoughnessTexture?a.supportsTextureAtlas?O`
                vtc.size = ${c(a,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:O`applyMetallnessAndRoughness(vtc);`:""}
      ${a.hasEmissiveTextureTransform?O`vtc.uv = emissiveUV;`:""}
      ${a.hasEmissionTexture?a.supportsTextureAtlas?O`
                vtc.size = ${c(a,"texEmission")};
                applyEmission(vtc);`:O`applyEmission(vtc);`:""}
      ${a.hasOcclusionTextureTransform?O`vtc.uv = occlusionUV;`:""}
      ${a.hasOcclusionTexture?a.supportsTextureAtlas?O`
                vtc.size = ${c(a,"texOcclusion")};
                applyOcclusion(vtc);`:O`applyOcclusion(vtc);`:""}
    }
  `)}}else i.code.add(O`float getBakedOcclusion() { return 1.0; }`);else i.code.add(O`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function ze(t,a){const r=t.fragment,s=void 0!==a.lightingSphericalHarmonicsOrder?a.lightingSphericalHarmonicsOrder:2;0===s?(r.uniforms.add(new e("lightingAmbientSH0",((e,t)=>P(Re,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(O`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===s?(r.uniforms.add([new d("lightingAmbientSH_R",((e,t)=>G(Ce,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d("lightingAmbientSH_G",((e,t)=>G(Ce,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d("lightingAmbientSH_B",((e,t)=>G(Ce,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(O`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===s&&(r.uniforms.add([new e("lightingAmbientSH0",((e,t)=>P(Re,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d("lightingAmbientSH_R1",((e,t)=>G(Ce,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d("lightingAmbientSH_G1",((e,t)=>G(Ce,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d("lightingAmbientSH_B1",((e,t)=>G(Ce,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d("lightingAmbientSH_R2",((e,t)=>G(Ce,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d("lightingAmbientSH_G2",((e,t)=>G(Ce,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d("lightingAmbientSH_B2",((e,t)=>G(Ce,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(O`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),a.pbrMode!==Pe.Normal&&a.pbrMode!==Pe.Schematic||r.code.add(O`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(Pe||(Pe={}));const Re=L(),Ce=j();class He extends a{constructor(e,t){super(e,"bool",r.Pass,((a,r,s)=>a.setUniform1b(e,t(r,s))))}}class De{constructor(e=L()){this.intensity=e}}class Ve{constructor(e=L(),t=z(.57735,.57735,.57735)){this.intensity=e,this.direction=t}}class Be{constructor(e=L(),t=z(.57735,.57735,.57735),a=!0,r=1,s=1){this.intensity=e,this.direction=t,this.castShadows=a,this.specularStrength=r,this.environmentStrength=s}}class Ie{constructor(){this.r=[0],this.g=[0],this.b=[0]}}function Ge(e,t,a){(a=a||e).length=e.length;for(let r=0;r<e.length;r++)a[r]=e[r]*t[r];return a}function Ue(e,t,a){(a=a||e).length=e.length;for(let r=0;r<e.length;r++)a[r]=e[r]*t;return a}function Ee(e,t,a){(a=a||e).length=e.length;for(let r=0;r<e.length;r++)a[r]=e[r]+t[r];return a}function je(e){return(e+1)*(e+1)}function ke(e,t,a){const r=e[0],s=e[1],i=e[2],o=a||[];return o.length=je(t),t>=0&&(o[0]=.28209479177),t>=1&&(o[1]=.4886025119*r,o[2]=.4886025119*i,o[3]=.4886025119*s),t>=2&&(o[4]=1.09254843059*r*s,o[5]=1.09254843059*s*i,o[6]=.31539156525*(3*i*i-1),o[7]=1.09254843059*r*i,o[8]=.54627421529*(r*r-s*s)),o}const qe=[],We=[],$e=[],Xe=[0],Ke=[0],Qe=L(),Ye=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class Ze{constructor(){this.color=L(),this.intensity=1}}class Je{constructor(){this.direction=L(),this.ambient=new Ze,this.diffuse=new Ze}}const et=.4;class tt{constructor(){this._shOrder=2,this._legacy=new Je,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Ie,this._mainLight=new Be(L(),z(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){(function(e,t,a,r){!function(e,t){const a=je(e),r=t||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=a;for(let e=0;e<a;e++)r.r[e]=r.g[e]=r.b[e]=0}(t,r),P(a.intensity,0,0,0);let s=!1;const i=qe,o=We,n=$e;i.length=0,o.length=0,n.length=0;for(const t of e)t instanceof Be&&!s?(R(a.direction,t.direction),R(a.intensity,t.intensity),a.specularStrength=t.specularStrength,a.environmentStrength=t.environmentStrength,a.castShadows=t.castShadows,s=!0):t instanceof Be||t instanceof Ve?i.push(t):t instanceof De?o.push(t):t instanceof Ie&&n.push(t);(function(e,t){const a=(r=t.r.length,U(Math.floor(Math.sqrt(r)-1),0,2));var r;for(const r of e)C(Qe,r.direction),ke(Qe,a,Xe),Ge(Xe,Ye),Ue(Xe,r.intensity[0],Ke),Ee(t.r,Ke),Ue(Xe,r.intensity[1],Ke),Ee(t.g,Ke),Ue(Xe,r.intensity[2],Ke),Ee(t.b,Ke)})(i,r),function(e,t){ke(Qe,0,Xe);for(const a of e)t.r[0]+=Xe[0]*Ye[0]*a.intensity[0]*4*Math.PI,t.g[0]+=Xe[0]*Ye[0]*a.intensity[1]*4*Math.PI,t.b[0]+=Xe[0]*Ye[0]*a.intensity[2]*4*Math.PI}(o,r);for(const e of n)Ee(r.r,e.r),Ee(r.g,e.g),Ee(r.b,e.b)})(e,this._shOrder,this._mainLight,this._sphericalHarmonics),R(this._legacy.direction,this._mainLight.direction);const t=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*t,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*t,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*t,H(this._legacy.diffuse.color,this._mainLight.intensity,t),R(at,this._legacy.diffuse.color),H(at,at,.4*this.globalFactor),D(this._legacy.ambient.color,this._legacy.ambient.color,at)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),this._mainLight.direction=V(e.mainLight.direction),this._mainLight.intensity=V(e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,t,a){if(B(this._mainLight.intensity,e.mainLight.intensity,t.mainLight.intensity,a),this._mainLight.environmentStrength=E(e.mainLight.environmentStrength,t.mainLight.environmentStrength,a),this._mainLight.specularStrength=E(e.mainLight.specularStrength,t.mainLight.specularStrength,a),R(this._mainLight.direction,t.mainLight.direction),this._mainLight.castShadows=t.mainLight.castShadows,this.globalFactor=E(e.globalFactor,t.globalFactor,a),this.noonFactor=E(e.noonFactor,t.noonFactor,a),e.sh.r.length===t.sh.r.length)for(let r=0;r<t.sh.r.length;r++)this._sphericalHarmonics.r[r]=E(e.sh.r[r],t.sh.r[r],a),this._sphericalHarmonics.g[r]=E(e.sh.g[r],t.sh.g[r],a),this._sphericalHarmonics.b[r]=E(e.sh.b[r],t.sh.b[r],a);else for(let e=0;e<t.sh.r.length;e++)this._sphericalHarmonics.r[e]=t.sh.r[e],this._sphericalHarmonics.g[e]=t.sh.g[e],this._sphericalHarmonics.b[e]=t.sh.b[e]}}const at=L();function rt(e){const t=O`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}function st(e,t){t.normalType===it.Attribute&&(e.attributes.add(q.NORMAL,"vec3"),e.vertex.code.add(O`vec3 normalModel() {
return normal;
}`)),t.normalType===it.CompressedAttribute&&(e.include(rt),e.attributes.add(q.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(O`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===it.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(O`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var it;function ot(e,t){t.normalType===it.Attribute||t.normalType===it.CompressedAttribute?(e.include(st,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new m("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new g("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(O`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===it.Ground?(e.include(p,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(O`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?O`normalize(vPositionWorldCameraRelative);`:O`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(O`void forwardNormal() {}`)}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(it||(it={}));class nt extends u{constructor(){super(...arguments),this.transformNormalViewFromGlobal=k()}}class lt extends h{constructor(){super(...arguments),this.transformNormalGlobalFromModel=k(),this.toMapSpace=j()}}class ct extends a{constructor(e,t){super(e,"int",r.Pass,((a,r,s)=>a.setUniform1i(e,t(r,s))))}}class dt extends a{constructor(e,t,a){super(e,"mat4",r.Draw,((a,r,s)=>a.setUniformMatrix4fv(e,t(r,s))),a)}}class ht extends a{constructor(e,t,a){super(e,"mat4",r.Pass,((a,r,s)=>a.setUniformMatrix4fv(e,t(r,s))),a)}}class ut extends A{constructor(){super(...arguments),this.origin=L()}}function mt(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new ht("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),pt(e,t))}function gt(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new dt("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),pt(e,t))}function pt(e,t){const a=e.fragment;a.include(f),a.uniforms.add([...n("shadowMapTex",((e,t)=>t.shadowMap.depthTexture),t.hasWebGL2Context?s.None:s.Size),new ct("numCascades",((e,t)=>t.shadowMap.numCascades)),new d("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))]),a.code.add(O`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${c(t,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function ft(e){const t=e.fragment.code;t.add(O`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(O`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(O`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function vt(e,t){const a=e.fragment.code;e.include(v),t.pbrMode===Pe.Water||t.pbrMode===Pe.WaterOnIntegratedMesh?(a.add(O`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),a.add(O`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),a.add(O`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),a.add(O`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),a.add(O`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==Pe.Normal&&t.pbrMode!==Pe.Schematic||(e.include(ft),a.add(O`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),a.add(O`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),a.add(O`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),a.add(O`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),a.add(O`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),a.add(O`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}const xt=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new x,a=e.fragment;return e.include(b),a.include(_),a.uniforms.add([new S("depthMap",(e=>e.depthTexture)),new Me("tex",(e=>e.colorTexture)),new Fe("blurSize",(e=>e.blurSize)),new t("projScale",((e,t)=>{const a=I(t.camera.eye,t.camera.center);return a>5e4?Math.max(0,e.projScale-(a-5e4)):e.projScale})),new w("nearFar",((e,t)=>t.camera.nearFar))]),a.code.add(O`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${O.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),a.code.add(O`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${O.int(4)}; r <= ${O.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),e}},Symbol.toStringTag,{value:"Module"}));class bt extends y{initializeProgram(e){return new F(e.rctx,bt.shader.get().build(),N)}initializePipeline(){return re({colorWrite:se})}}function _t(e){return Math.max(10,20*e.camera.computeRenderPixelSizeAtDist(Math.abs(4*e.camera.relativeElevation)))}bt.shader=new T(xt,(()=>Promise.resolve().then((()=>xt))));const St=ae(),wt=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new x,a=e.fragment;return e.include(b),a.include(_),e.include(ie),a.uniforms.add(new t("radius",((e,t)=>_t(t)))),a.code.add(O`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),a.code.add(O`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),a.uniforms.add([new w("nearFar",((e,t)=>t.camera.nearFar)),new S("normalMap",(e=>e.normalTexture)),new S("depthMap",(e=>e.depthTexture)),new w("zScale",((e,t)=>oe(t))),new t("projScale",(e=>e.projScale)),new S("rnm",(e=>e.noiseTexture)),new w("rnmScale",((e,t)=>J(St,t.camera.fullWidth/K(e.noiseTexture).descriptor.width,t.camera.fullHeight/K(e.noiseTexture).descriptor.height))),new t("intensity",((e,t)=>2/_t(t)**6)),new w("screenSize",((e,t)=>J(St,t.camera.fullWidth,t.camera.fullHeight)))]),a.code.add(O`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${O.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${O.int(16)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),e}},Symbol.toStringTag,{value:"Module"}));class Tt extends y{initializeProgram(e){return new F(e.rctx,Tt.shader.get().build(),N)}initializePipeline(){return re({colorWrite:se})}}Tt.shader=new T(wt,(()=>Promise.resolve().then((()=>wt))));class yt extends A{constructor(){super(...arguments),this.projScale=1}}class Ft extends yt{}class Mt extends A{}class Ot extends Mt{constructor(){super(...arguments),this.blurSize=ae()}}const At=2;class Nt{constructor(e,t,a){this._techniqueRepository=e,this._rctx=t,this._requestRender=a,this._enabled=!1,this._quadVAO=null,this._passParameters=new Ft,this._drawParameters=new Ot}dispose(){this._quadVAO=Q(this._quadVAO)}disposeOffscreenBuffers(){Y(this._ssaoFBO,(e=>e.resize(0,0))),Y(this._blur0FBO,(e=>e.resize(0,0))),Y(this._blur1FBO,(e=>e.resize(0,0)))}set enabled(e){e?this._enable():this._disable()}get enabled(){return this._enabled}get ready(){return this.enabled&&X(this._passParameters.noiseTexture)&&X(this._ssaoFBO)&&X(this._blur0FBO)&&X(this._blur1FBO)}get loading(){return this.enabled&&!this.ready}get colorTexture(){return X(this._blur1FBO)?this._blur1FBO.colorTexture:null}get width(){return X(this._ssaoFBO)?this._ssaoFBO.width:-1}get height(){return X(this._ssaoFBO)?this._ssaoFBO.height:-1}computeSSAO(e,t,a){if(!this.enabled||Z(t)||Z(a)||Z(this._passParameters.noiseTexture)||Z(this._ssaoFBO)||Z(this._blur0FBO)||Z(this._blur1FBO))return;const r=this._rctx,s=e.camera;this._passParameters.normalTexture=a,this._passParameters.depthTexture=t,this._passParameters.projScale=1/s.computeRenderPixelSizeAtDist(1);const i=s.fullViewport,o=i[2],n=i[3],l=o/2,c=n/2;this._ssaoFBO.resize(o,n),this._blur0FBO.resize(l,c),this._blur1FBO.resize(l,c),Z(this._quadVAO)&&(this._quadVAO=M(this._rctx)),r.bindFramebuffer(this._ssaoFBO),r.setViewport(0,0,o,n),r.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),r.bindVAO(this._quadVAO),r.drawArrays(ne.TRIANGLE_STRIP,0,pe(this._quadVAO,"geometry"));const d=r.bindTechnique(this._blurTechnique,this._passParameters,e);r.setViewport(0,0,l,c),r.bindFramebuffer(this._blur0FBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,J(this._drawParameters.blurSize,0,2/n),d.bindDraw(this._drawParameters,e,this._passParameters),r.setViewport(0,0,l,c),r.drawArrays(ne.TRIANGLE_STRIP,0,pe(this._quadVAO,"geometry")),r.bindFramebuffer(this._blur1FBO),this._drawParameters.colorTexture=this._blur0FBO.colorTexture,J(this._drawParameters.blurSize,2/o,0),d.bindDraw(this._drawParameters,e,this._passParameters),r.drawArrays(ne.TRIANGLE_STRIP,0,pe(this._quadVAO,"geometry")),r.setViewport(i[0],i[1],i[2],i[3])}_selectPrograms(){Z(this._ssaoTechnique)&&(this._ssaoTechnique=this._techniqueRepository.acquire(Tt)),Z(this._blurTechnique)&&(this._blurTechnique=this._techniqueRepository.acquire(bt))}_enable(){this.enabled||(this._enabled=!0,this._loadResources((()=>{this._enabled&&this._initialize()})))}_loadResources(e){this._data?e():import("./SSAOHelperData.js").then((t=>{this._data=t,e()}))}_initialize(){const e={target:le.TEXTURE_2D,pixelFormat:ce.RGBA,dataType:de.UNSIGNED_BYTE,samplingMode:he.LINEAR,wrapMode:ue.CLAMP_TO_EDGE,width:0,height:0},t={colorTarget:me.TEXTURE,depthStencilTarget:ge.NONE};ee(this._data.noiseTexture).then((a=>{this._enabled&&(this._ssaoFBO=new fe(this._rctx,t,e),this._blur0FBO=new fe(this._rctx,t,e),this._blur1FBO=new fe(this._rctx,t,e),this._passParameters.noiseTexture=new ve(this._rctx,{target:le.TEXTURE_2D,pixelFormat:ce.RGBA,dataType:de.UNSIGNED_BYTE,hasMipmap:!0,width:a.width,height:a.height},a),this._requestRender())})),this._selectPrograms()}_disable(){this._enabled=!1,this._passParameters.noiseTexture=Q(this._passParameters.noiseTexture),this._blur1FBO=Q(this._blur1FBO),this._blur0FBO=Q(this._blur0FBO),this._ssaoFBO=Q(this._ssaoFBO)}get gpuMemoryUsage(){return(X(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(X(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(X(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}export{De as A,He as B,ze as E,Ve as F,ct as I,we as M,st as N,Pe as P,gt as R,Nt as S,be as T,nt as V,xe as a,_e as b,Be as c,Se as d,it as e,Oe as f,ot as g,ye as h,Te as i,Le as j,mt as k,Fe as l,Me as m,ut as n,tt as o,lt as p,vt as q,At as r,et as s,Ne as t};
