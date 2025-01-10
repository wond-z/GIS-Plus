/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as e}from"./devEnvironmentUtils.js";import{i as t,a as o,u as a,j as r}from"./maybe.js";import{m as i,n as s}from"./mat3.js";import{c as n}from"./mat3f64.js";import{c as l}from"./mat4.js";import{I as c,c as d}from"./mat4f64.js";import{s as u,d as m,f as p,c as h,n as v,b as f,l as g,g as x,m as T,t as b,B as y,e as C,A as M,z as w}from"./vec3.js";import{i as O,e as S}from"./aaBoundingBox.js";import{a as A,b as L,d as N,c as _,s as P,u as R,v as I}from"./BufferView.js";import{t as E,a as D,s as V,c as B}from"./vec32.js";import{l as z,D as $,C as F,c as j,t as G,n as U,s as k,a as W,f as H,b as q,d as Q,e as Y}from"./DefaultMaterial_COLOR_GAMMA.js";import{c as J,f as X}from"./mat3f32.js";import{Z,O as K}from"./vec2f32.js";import ee from"../request.js";import{r as te}from"./asyncUtils.js";import{a as oe}from"./byteSizeEstimations.js";import ae from"../core/Error.js";import{L as re}from"./Logger.js";import{throwIfAbortError as ie}from"../core/promiseUtils.js";import{V as se}from"./Version.js";import{r as ne}from"./requestImageUtils.js";import{A as le,C as ce,c as de}from"./basicInterfaces.js";import{am as ue,an as me,X as pe,s as he,a6 as ve,a7 as fe,e as ge,M as xe,a as Te,N as be,r as ye,O as Ce,o as Me,J as we,T as Oe,k as Se,t as Ae,n as Le,a3 as Ne,C as _e,S as Pe,a8 as Re,j as Ie,a9 as Ee,b as De,m as Ve,f as Be,Z as ze,R as $e,c as Fe,ag as je,P as Ge,u as Ue,w as ke,x as We,D as He,I as qe,l as Qe,d as Ye}from"./bufferWriterUtils.js";import{h as Je}from"./object.js";import{V as Xe}from"./ViewingMode.js";import{n as Ze}from"./InterleavedLayout.js";import{S as Ke,R as et}from"./RenderSlot.js";import{I as tt,T as ot,N as at,g as rt,e as it,a as st,h as nt,f as lt,r as ct,s as dt,P as ut,q as mt,E as pt,b as ht,d as vt,B as ft,M as gt,k as xt,R as Tt,j as bt,p as yt,V as Ct}from"./SSAOHelper.js";import{n as Mt}from"./compilerUtils.js";import{g as wt,q as Ot,R as St,D as At,M as Lt,v as Nt,i as _t}from"./Material.js";import{G as Pt}from"./GLTextureMaterial.js";import{T as Rt,m as It,e as Et,o as Dt,f as Vt,a as Bt,d as zt,c as $t,g as Ft,h as jt}from"./OrderIndependentTransparency.js";import{V as Gt}from"./VertexAttribute.js";import{g as Ut}from"./verticalOffsetUtils.js";import{f as kt}from"./vec4f64.js";import{T as Wt,O as Ht}from"./OutputHighlight.glsl.js";import{_ as qt}from"./tslib.es6.js";import{p as Qt,S as Yt}from"./ShaderTechniqueConfiguration.js";import{a as Jt,b as Xt}from"./doublePrecisionUtils.js";import{C as Zt}from"./symbolColorUtils.js";import{V as Kt}from"./VertexColor.glsl.js";import{V as eo,d as to}from"./VisualVariables.glsl.js";import{C as oo}from"./context-util.js";import{d as ao,b as ro,e as io}from"./enums3.js";function so(e,t){const o=e.fragment;switch(o.code.add(wt`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case no.None:o.code.add(wt`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case no.View:o.code.add(wt`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case no.WindingOrder:o.code.add(wt`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Mt(t.doubleSidedMode);case no.COUNT:}}var no;function lo(e){e.vertex.code.add(wt`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function co(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(Gt.MODELORIGINHI,"vec3"),e.attributes.add(Gt.MODELORIGINLO,"vec3"),e.attributes.add(Gt.MODEL,"mat3"),e.attributes.add(Gt.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(ue,t),o.uniforms.add(new me("viewOriginHi",((e,t)=>Jt(u(uo,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),uo)))),o.uniforms.add(new me("viewOriginLo",((e,t)=>Xt(u(uo,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),uo))))),o.code.add(wt`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(wt`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?wt`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(wt`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===Ke.Normal&&(pe(o),o.code.add(wt`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(wt`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(no||(no={})),qt([Qt()],class extends Yt{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}.prototype,"instancedDoublePrecision",void 0);const uo=m();function mo(e){e.vertex.code.add(wt`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${wt.int(Zt.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${wt.int(Zt.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${wt.int(Zt.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${wt.int(Zt.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function po(e,t){t.hasSymbolColors?(e.include(mo),e.attributes.add(Gt.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(wt`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new tt("colorMixMode",(e=>Ot[e.colorMixMode]))),e.vertex.code.add(wt`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ho(e){e.fragment.code.add(wt`
    #define discardOrAdjustAlpha(color) { if (color.a < ${wt.float(he)}) { discard; } }
  `)}class vo extends ve{constructor(e,t){super(e,"float",fe.Draw,((o,a,r)=>o.setUniform1f(e,t(a,r))))}}function fo(e,t){xo(e,t,new ge("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function go(e,t){xo(e,t,new vo("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function xo(e,t,o){const a=e.fragment;switch(t.alphaDiscardMode!==le.Mask&&t.alphaDiscardMode!==le.MaskBlend||a.uniforms.add(o),t.alphaDiscardMode){case le.Blend:return e.include(ho);case le.Opaque:a.code.add(wt`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case le.Mask:a.code.add(wt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case le.MaskBlend:e.fragment.code.add(wt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function To(e,o){const{vertex:a,fragment:r}=e,i=o.hasModelTransformation;i&&a.uniforms.add(new xe("model",(e=>t(e.modelTransformation)?e.modelTransformation:c)));const s=o.hasColorTexture&&o.alphaDiscardMode!==le.Opaque;switch(o.output){case Ke.Depth:case Ke.Shadow:case Ke.ShadowHighlight:case Ke.ShadowExludeHighlight:case Ke.ObjectAndLayerIdColor:Te(a,o),e.include(Wt,o),e.include(ot,o),e.include(eo,o),e.include(Ce,o),e.include(ye,o),e.include(Me,o),we(e),e.varyings.add("depth","float"),s&&r.uniforms.add(new be("tex",(e=>e.texture))),a.code.add(wt`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${i?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(fo,o),r.code.add(wt`
          void main(void) {
            discardBySlice(vpos);
            ${s?wt`
                    vec4 texColor = texture2D(tex, ${o.hasColorTextureTransform?wt`colorUV`:wt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${o.output===Ke.ObjectAndLayerIdColor?wt`outputObjectAndLayerIdColor();`:wt`outputDepth(depth);`}
          }
        `);break;case Ke.Normal:Te(a,o),e.include(Wt,o),e.include(at,o),e.include(rt,o),e.include(ot,o),e.include(eo,o),s&&r.uniforms.add(new be("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),a.code.add(wt`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${o.normalType===it.Attribute?wt`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(ye,o),e.include(fo,o),r.code.add(wt`
          void main() {
            discardBySlice(vpos);
            ${s?wt`
                    vec4 texColor = texture2D(tex, ${o.hasColorTextureTransform?wt`colorUV`:wt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${o.normalType===it.ScreenDerivative?wt`
                vec3 normal = screenDerivativeNormal(vPositionView);`:wt`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case Ke.Highlight:Te(a,o),e.include(Wt,o),e.include(ot,o),e.include(eo,o),s&&r.uniforms.add(new be("tex",(e=>e.texture))),a.code.add(wt`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(ye,o),e.include(fo,o),e.include(Ht,o),r.code.add(wt`
          void main() {
            discardBySlice(vpos);
            ${s?wt`
                    vec4 texColor = texture2D(tex, ${o.hasColorTextureTransform?wt`colorUV`:wt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function bo(e,t){const o=e.fragment;if(t.hasVertexTangents?(e.attributes.add(Gt.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===no.WindingOrder?o.code.add(wt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(wt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(wt`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==st.None){e.include(nt,t);const a=t.supportsTextureAtlas?t.hasWebGL2Context?Oe.None:Oe.Size:Oe.None;o.uniforms.add(t.pbrTextureBindType===fe.Pass?Se("normalTexture",(e=>e.textureNormal),a):lt("normalTexture",(e=>e.textureNormal),a)),o.code.add(wt`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?wt`vtc.size = ${Ae(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function yo(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(Se("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?Oe.None:Oe.InvSize)),o.constants.add("blurSizePixelsInverse","float",1/ct),o.code.add(wt`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${Ae(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):o.code.add(wt`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Co(e){e.constants.add("ambientBoostFactor","float",dt)}function Mo(e){e.uniforms.add(new ge("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function wo(e,t){const o=e.fragment;switch(e.include(yo,t),t.pbrMode!==ut.Disabled&&e.include(mt,t),e.include(pt,t),e.include(Le),o.code.add(wt`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===ut.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Co(o),Mo(o),ht(o),o.code.add(wt`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?wt`normalize(vPosWorld)`:wt`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),vt(o),o.code.add(wt`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case ut.Disabled:case ut.WaterOnIntegratedMesh:case ut.Water:e.include(gt,t),o.code.add(wt`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case ut.Normal:case ut.Schematic:o.code.add(wt`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(wt`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new ft("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(wt`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add([new ge("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new ge("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),o.code.add(wt`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(wt`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===ut.Schematic?wt`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:wt`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:Mt(t.pbrMode);case ut.COUNT:}}function Oo(e){e.vertex.uniforms.add(new Ne("colorTextureTransformMatrix",(e=>t(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:J()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(wt`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function So(e){e.vertex.uniforms.add(new Ne("normalTextureTransformMatrix",(e=>t(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:J()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(wt`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ao(e){e.vertex.uniforms.add(new Ne("emissiveTextureTransformMatrix",(e=>t(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:J()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(wt`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Lo(e){e.vertex.uniforms.add(new Ne("occlusionTextureTransformMatrix",(e=>t(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:J()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(wt`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function No(e){e.vertex.uniforms.add(new Ne("metallicRoughnessTextureTransformMatrix",(e=>t(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:J()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(wt`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function _o(e){e.include(_e),e.code.add(wt`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${wt.int(Zt.Multiply)}) {
        return allMixed;
      }
      if (mode == ${wt.int(Zt.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${wt.int(Zt.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${wt.int(Zt.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${wt.int(Zt.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}const Po=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const o=new Pe,{vertex:a,fragment:r,varyings:i}=o;return Te(a,e),o.include(Re),i.add("vpos","vec3"),o.include(eo,e),o.include(co,e),o.include(to,e),e.hasColorTextureTransform&&o.include(Oo),e.output!==Ke.Color&&e.output!==Ke.Alpha||(e.hasNormalTextureTransform&&o.include(So),e.hasEmissionTextureTransform&&o.include(Ao),e.hasOcclusionTextureTransform&&o.include(Lo),e.hasMetallicRoughnessTextureTransform&&o.include(No),Ie(a,e),o.include(at,e),o.include(Wt,e),e.normalType===it.Attribute&&e.offsetBackfaces&&o.include(lo),o.include(bo,e),o.include(rt,e),e.instancedColor&&o.attributes.add(Gt.INSTANCECOLOR,"vec4"),i.add("localvpos","vec3"),o.include(ot,e),o.include(Ee,e),o.include(po,e),o.include(Kt,e),a.uniforms.add(new De("externalColor",(e=>e.externalColor))),i.add("vcolorExt","vec4"),e.hasMultipassTerrain&&i.add("depth","float"),e.hasModelTransformation&&a.uniforms.add(new xe("model",(e=>t(e.modelTransformation)?e.modelTransformation:c))),a.code.add(wt`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${wt.float(he)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===it.Attribute?wt`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===it.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?wt`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?wt`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?wt`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?wt`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?wt`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===Ke.Alpha&&(o.include(ye,e),o.include(fo,e),o.include(Ve,e),r.uniforms.add([new ge("opacity",(e=>e.opacity)),new ge("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&r.uniforms.add(new be("tex",(e=>e.texture))),r.include(_o),r.code.add(wt`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?wt`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?wt`colorUV`:wt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:wt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?wt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:wt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===Ke.Color&&(o.include(ye,e),o.include(wo,e),o.include(yo,e),o.include(fo,e),o.include(e.instancedDoublePrecision?xt:Tt,e),o.include(Ve,e),Ie(r,e),r.uniforms.add([a.uniforms.get("localOrigin"),new Be("ambient",(e=>e.ambient)),new Be("diffuse",(e=>e.diffuse)),new ge("opacity",(e=>e.opacity)),new ge("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&r.uniforms.add(new be("tex",(e=>e.texture))),o.include(bt,e),o.include(mt,e),r.include(_o),o.include(so,e),Co(r),Mo(r),vt(r),r.code.add(wt`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?wt`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?wt`colorUV`:wt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:wt`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===it.ScreenDerivative?wt`
                vec3 normal = screenDerivativeNormal(localvpos);`:wt`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===ut.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?wt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:wt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?wt`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:wt`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?wt`normalize(posWorld);`:wt`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?wt`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===ut.Normal||e.pbrMode===ut.Schematic?wt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?wt`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:wt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Rt.Color?wt`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),o.include(To,e),o}},Symbol.toStringTag,{value:"Module"}));class Ro extends Ct{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=p(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ce.Back,this.emissiveFactor=p(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=p(.2,.2,.2),this.diffuse=p(.8,.8,.8),this.externalColor=kt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=m(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=n(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=de.Less,this.textureAlphaMode=le.Blend,this.textureAlphaCutoff=ze,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=St.Occlude}}class Io extends yt{constructor(){super(...arguments),this.origin=m(),this.slicePlaneLocalOrigin=this.origin}}class Eo extends Fe{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===oo.WEBGL2,t.spherical=e.viewingMode===Xe.Global,t.doublePrecisionRequiresObfuscation=je(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?st.Default:st.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Eo.shader)}_initializeProgram(e,t){return new Ge(e.rctx,t.get().build(this.configuration),At)}_convertDepthTestFunction(e){return e===de.Lequal?ao.LEQUAL:ao.LESS}_makePipeline(e,t){const o=this.configuration,a=e===Rt.NONE,r=e===Rt.FrontFace;return It({blending:o.output!==Ke.Color&&o.output!==Ke.Alpha||!o.transparent?null:a?Et:Dt(e),culling:Do(o)&&Vt(o.cullFace),depthTest:{func:Bt(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:a||r?o.writeDepth&&zt:null,colorWrite:$t,stencilWrite:o.hasOccludees?Ue:null,stencilTest:o.hasOccludees?t?ke:We:null,polygonOffset:a||r?null:Ft(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Do(e){return e.cullFace!==ce.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Eo.shader=new $e(Po,(()=>Promise.resolve().then((()=>Po))));class Vo extends He{constructor(){super(...arguments),this.output=Ke.Color,this.alphaDiscardMode=le.Opaque,this.doubleSidedMode=no.None,this.pbrMode=ut.Disabled,this.cullFace=ce.None,this.transparencyPassType=Rt.NONE,this.normalType=it.Attribute,this.textureCoordinateType=st.None,this.customDepthTest=de.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}qt([Qt({count:Ke.COUNT})],Vo.prototype,"output",void 0),qt([Qt({count:le.COUNT})],Vo.prototype,"alphaDiscardMode",void 0),qt([Qt({count:no.COUNT})],Vo.prototype,"doubleSidedMode",void 0),qt([Qt({count:ut.COUNT})],Vo.prototype,"pbrMode",void 0),qt([Qt({count:ce.COUNT})],Vo.prototype,"cullFace",void 0),qt([Qt({count:Rt.COUNT})],Vo.prototype,"transparencyPassType",void 0),qt([Qt({count:it.COUNT})],Vo.prototype,"normalType",void 0),qt([Qt({count:st.COUNT})],Vo.prototype,"textureCoordinateType",void 0),qt([Qt({count:de.COUNT})],Vo.prototype,"customDepthTest",void 0),qt([Qt()],Vo.prototype,"spherical",void 0),qt([Qt()],Vo.prototype,"hasVertexColors",void 0),qt([Qt()],Vo.prototype,"hasSymbolColors",void 0),qt([Qt()],Vo.prototype,"hasVerticalOffset",void 0),qt([Qt()],Vo.prototype,"hasSlicePlane",void 0),qt([Qt()],Vo.prototype,"hasSliceHighlight",void 0),qt([Qt()],Vo.prototype,"hasColorTexture",void 0),qt([Qt()],Vo.prototype,"hasMetallicRoughnessTexture",void 0),qt([Qt()],Vo.prototype,"hasEmissionTexture",void 0),qt([Qt()],Vo.prototype,"hasOcclusionTexture",void 0),qt([Qt()],Vo.prototype,"hasNormalTexture",void 0),qt([Qt()],Vo.prototype,"hasScreenSizePerspective",void 0),qt([Qt()],Vo.prototype,"hasVertexTangents",void 0),qt([Qt()],Vo.prototype,"hasOccludees",void 0),qt([Qt()],Vo.prototype,"hasMultipassTerrain",void 0),qt([Qt()],Vo.prototype,"hasModelTransformation",void 0),qt([Qt()],Vo.prototype,"offsetBackfaces",void 0),qt([Qt()],Vo.prototype,"vvSize",void 0),qt([Qt()],Vo.prototype,"vvColor",void 0),qt([Qt()],Vo.prototype,"receiveShadows",void 0),qt([Qt()],Vo.prototype,"receiveAmbientOcclusion",void 0),qt([Qt()],Vo.prototype,"textureAlphaPremultiplied",void 0),qt([Qt()],Vo.prototype,"instanced",void 0),qt([Qt()],Vo.prototype,"instancedColor",void 0),qt([Qt()],Vo.prototype,"objectAndLayerIdColorInstanced",void 0),qt([Qt()],Vo.prototype,"instancedDoublePrecision",void 0),qt([Qt()],Vo.prototype,"doublePrecisionRequiresObfuscation",void 0),qt([Qt()],Vo.prototype,"writeDepth",void 0),qt([Qt()],Vo.prototype,"transparent",void 0),qt([Qt()],Vo.prototype,"enableOffset",void 0),qt([Qt()],Vo.prototype,"cullAboveGround",void 0),qt([Qt()],Vo.prototype,"snowCover",void 0),qt([Qt()],Vo.prototype,"hasColorTextureTransform",void 0),qt([Qt()],Vo.prototype,"hasEmissionTextureTransform",void 0),qt([Qt()],Vo.prototype,"hasNormalTextureTransform",void 0),qt([Qt()],Vo.prototype,"hasOcclusionTextureTransform",void 0),qt([Qt()],Vo.prototype,"hasMetallicRoughnessTextureTransform",void 0),qt([Qt({constValue:!0})],Vo.prototype,"hasVvInstancing",void 0),qt([Qt({constValue:!1})],Vo.prototype,"useCustomDTRExponentForWater",void 0),qt([Qt({constValue:!1})],Vo.prototype,"supportsTextureAtlas",void 0),qt([Qt({constValue:!0})],Vo.prototype,"useFillLights",void 0);const Bo=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new Pe,{vertex:o,fragment:a,varyings:r}=t;return Te(o,e),t.include(Re),r.add("vpos","vec3"),t.include(eo,e),t.include(co,e),t.include(to,e),e.output!==Ke.Color&&e.output!==Ke.Alpha||(Ie(t.vertex,e),t.include(at,e),t.include(Wt,e),e.offsetBackfaces&&t.include(lo),e.instancedColor&&t.attributes.add(Gt.INSTANCECOLOR,"vec4"),r.add("vNormalWorld","vec3"),r.add("localvpos","vec3"),e.hasMultipassTerrain&&r.add("depth","float"),t.include(ot,e),t.include(Ee,e),t.include(po,e),t.include(Kt,e),o.uniforms.add(new De("externalColor",(e=>e.externalColor))),r.add("vcolorExt","vec4"),o.code.add(wt`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${wt.float(he)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?wt`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===Ke.Alpha&&(t.include(ye,e),t.include(fo,e),t.include(Ve,e),a.uniforms.add([new ge("opacity",(e=>e.opacity)),new ge("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&a.uniforms.add(new be("tex",(e=>e.texture))),a.include(_o),a.code.add(wt`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?wt`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?wt`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?wt`colorUV`:wt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:wt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?wt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:wt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===Ke.Color&&(t.include(ye,e),t.include(wo,e),t.include(yo,e),t.include(fo,e),t.include(e.instancedDoublePrecision?xt:Tt,e),t.include(Ve,e),Ie(t.fragment,e),ht(a),Co(a),Mo(a),a.uniforms.add([o.uniforms.get("localOrigin"),o.uniforms.get("view"),new Be("ambient",(e=>e.ambient)),new Be("diffuse",(e=>e.diffuse)),new ge("opacity",(e=>e.opacity)),new ge("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&a.uniforms.add(new be("tex",(e=>e.texture))),t.include(bt,e),t.include(mt,e),a.include(_o),t.extensions.add("GL_OES_standard_derivatives"),vt(a),a.code.add(wt`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?wt`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?wt`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?wt`colorUV`:wt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:wt`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===ut.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?wt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:wt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?wt`albedo = mix(albedo, vec3(1), 0.9);`:wt``}
        ${wt`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===ut.Normal||e.pbrMode===ut.Schematic?e.spherical?wt`vec3 normalGround = normalize(vpos + localOrigin);`:wt`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:wt``}
        ${e.pbrMode===ut.Normal||e.pbrMode===ut.Schematic?wt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?wt`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:wt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Rt.Color?wt`gl_FragColor = premultiplyAlpha(gl_FragColor);`:wt``}
      }
    `)),t.include(To,e),t}},Symbol.toStringTag,{value:"Module"}));class zo extends Eo{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=it.Attribute,t.doubleSidedMode=no.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,zo.shader)}}zo.shader=new $e(Bo,(()=>Promise.resolve().then((()=>Bo))));class $o extends Lt{constructor(e){super(e,jo),this.supportsEdges=!0,this._configuration=new Vo,this._vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=Ze().vec3f(Gt.POSITION).vec3f(Gt.NORMAL);return e.hasVertexTangents&&o.vec4f(Gt.TANGENT),t&&o.vec2f(Gt.UV0),e.hasVertexColors&&o.vec4u8(Gt.COLOR),e.hasSymbolColors&&o.vec4u8(Gt.SYMBOLCOLOR),Je("enable-feature:objectAndLayerId-rendering")&&o.vec4u8(Gt.OBJECTANDLAYERIDCOLOR),o}(this.parameters),this._instanceBufferLayout=e.instanced?Uo(this.parameters):null}isVisibleForOutput(e){return e!==Ke.Shadow&&e!==Ke.ShadowExludeHighlight&&e!==Ke.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:o,hasVertexColors:a,hasSymbolColors:r,vvColorEnabled:i}=e,s=t(o)&&o.includes("color"),n="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return a&&(s||i||r)?!!n||l:a?n?c:l:s||i||r?!!n||l:n?c:l}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=t(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=t(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType="screenDerivative"===this.parameters.normals?it.ScreenDerivative:it.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,t(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?ce.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=o.multipassTerrain.enabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=t(this.parameters.modelTransformation),e!==Ke.Color&&e!==Ke.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=no.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?no.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?no.WindingOrder:no.None,this._configuration.instancedColor=t(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!o.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?ut.Schematic:ut.Normal:ut.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<jt,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return t(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,o,a,r,i,s,n){if(t(this.parameters.verticalOffset)){const e=r.camera;u(Yo,a[12],a[13],a[14]);let t=null;switch(r.viewingMode){case Xe.Global:t=v(qo,Yo);break;case Xe.Local:t=h(qo,Ho)}let o=0;const n=f(Jo,Yo,e.eye),l=g(n),c=x(n,n,1/l);let d=null;this.parameters.screenSizePerspective&&(d=T(t,c)),o+=Nt(e,l,this.parameters.verticalOffset,d,this.parameters.screenSizePerspective),x(t,t,o),b(Qo,t,r.transform.inverseRotation),i=f(ko,i,Qo),s=f(Wo,s,Qo)}_t(e,o,r,i,s,Ut(r.verticalOffset),n)}requiresSlot(e,t){return!(t!==Ke.Color&&t!==Ke.Alpha&&t!==Ke.Depth&&t!==Ke.Normal&&t!==Ke.Shadow&&t!==Ke.ShadowHighlight&&t!==Ke.ShadowExludeHighlight&&t!==Ke.Highlight&&t!==Ke.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?et.TRANSPARENT_MATERIAL:et.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:et.OPAQUE_MATERIAL)&&e!==et.DRAPED_MATERIAL&&t!==Ke.ObjectAndLayerIdColor)}createGLMaterial(e){return new Fo(e)}createBufferWriter(){return new Go(this._vertexBufferLayout,this._instanceBufferLayout)}}class Fo extends Pt{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return u(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?zo:Eo,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==Ke.Color&&this._output!==Ke.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}const jo=new class extends Ro{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};class Go{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(Gt.POSITION).length}write(e,t,o,a,r){qe(o,this.vertexBufferLayout,e,t,a,r)}}function Uo(e){let o=Ze();return o=e.instancedDoublePrecision?o.vec3f(Gt.MODELORIGINHI).vec3f(Gt.MODELORIGINLO).mat3f(Gt.MODEL).mat3f(Gt.MODELNORMAL):o.mat4f(Gt.MODEL).mat4f(Gt.MODELNORMAL),t(e.instanced)&&e.instanced.includes("color")&&(o=o.vec4f(Gt.INSTANCECOLOR)),t(e.instanced)&&e.instanced.includes("featureAttribute")&&(o=o.vec4f(Gt.INSTANCEFEATUREATTRIBUTE)),t(e.instanced)&&e.instanced.includes("objectAndLayerIdColor")&&(o=o.vec4u8(Gt.OBJECTANDLAYERIDCOLOR_INSTANCED)),o}const ko=m(),Wo=m(),Ho=p(0,0,1),qo=m(),Qo=m(),Yo=m(),Jo=m();function Xo(e){if(o(e))return null;const a=t(e.offset)?e.offset:Z,r=t(e.rotation)?e.rotation:0,s=t(e.scale)?e.scale:K,n=X(1,0,0,0,1,0,a[0],a[1],1),l=X(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),c=X(s[0],0,0,0,s[1],0,0,0,1),d=J();return i(d,l,c),i(d,n,d),d}class Zo{constructor(e,t,o,a,r){this.name=e,this.stageResources=t,this.lodThreshold=o,this.pivotOffset=a,this.numberOfVertices=r}}const Ko=re.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ea(e,o){const r=await async function(e,o){const r=t(o)&&o.streamDataRequester;if(r)return async function(e,t,o){const a=await te(t.request(e,"json",o));return!0===a.ok?a.value:(ie(a.error),void ta(a.error.details.url))}(e,r,o);const i=await te(ee(e,a(o)));return!0===i.ok?i.value.data:(ie(i.error),void ta(i.error))}(e,o),i=await async function(e,o){const a=[];for(const r in e){const i=e[r],s=i.images[0].data;if(!s){Ko.warn("Externally referenced texture data is not yet supported");continue}const n=i.encoding+";base64,"+s,l="/textureDefinitions/"+r,c="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:ro.REPEAT,t:ro.REPEAT},preMultiplyAlpha:ra(c)!==le.Opaque},u=t(o)&&o.disableTextures?Promise.resolve(null):ne(n,o);a.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const r=await Promise.all(a),i={};for(const e of r)i[e.refId]=e;return i}(r.textureDefinitions,o);let s=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];s+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:s+oe(r)}}function ta(e){throw new ae("",`Request for object resource failed: ${e}`)}function oa(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||(Ko.warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ko.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),a=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ko.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),a=!1)):(Ko.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),a=!1)}}else Ko.warn("Indexed geometries must specify faces"),a=!1;break}default:Ko.warn(`Unsupported topology '${o}'`),a=!1}e.params.material||(Ko.warn("Geometry requires material"),a=!1);const r=e.params.vertexAttributes;for(const e in r)r[e].values||(Ko.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function aa(e){const o=O();return e.forEach((e=>{const a=e.boundingInfo;t(a)&&(S(o,a.getBBMin()),S(o,a.getBBMax()))})),o}function ra(e){switch(e){case"mask":return le.Mask;case"maskAndTransparency":return le.MaskBlend;case"none":return le.Opaque;default:return le.Blend}}function ia(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const sa=new se(1,2,"wosr");async function na(a,i){const s=la(e(a));if("wosr"===s.fileType){const e=await(i.cache?i.cache.loadWOSR(s.url,i):ea(s.url,i)),{engineResources:o,referenceBoundingBox:a}=function(e,o){const a=[],r=[],i=[],s=[],n=e.resource,l=se.parse(n.version||"1.0","wosr");sa.validate(l);const c=n.model.name,d=n.model.geometries,u=n.materialDefinitions,m=e.textures;let p=0;const h=new Map;for(let e=0;e<d.length;e++){const n=d[e];if(!oa(n))continue;const l=ia(n),c=n.params.vertexAttributes,v=[];for(const e in c){const t=c[e],o=t.values;v.push([e,{data:o,size:t.valuesPerElement,exclusive:!0}])}const f=[];if("PerAttributeArray"!==n.params.topology){const e=n.params.faces;for(const t in e)f.push([t,e[t].values])}const g=m&&m[l.texture];if(g&&!h.has(l.texture)){const{image:e,params:t}=g,o=new Qe(e,t);s.push(o),h.set(l.texture,o)}const x=h.get(l.texture),T=x?x.id:void 0;let b=i[l.material]?i[l.material][l.texture]:null;if(!b){const e=u[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const a=g&&g.alphaChannelUsage,r=e.transparency>0||"transparency"===a||"maskAndTransparency"===a,s=g?ra(g.alphaChannelUsage):void 0,n={ambient:y(e.diffuse),diffuse:y(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:s,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:ce.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!g&&!!g.params.preMultiplyAlpha};t(o)&&o.materialParamsMixin&&Object.assign(n,o.materialParamsMixin),b=new $o(n),i[l.material]||(i[l.material]={}),i[l.material][l.texture]=b}r.push(b);const C=new Ye(v,f);p+=f.position?f.position.length:0,a.push(C)}return{engineResources:[{name:c,stageResources:{textures:s,materials:r,geometries:a},pivotOffset:n.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:aa(a)}}(e,i);return{lods:o,referenceBoundingBox:a,isEsriSymbolResource:!1,isWosr:!0}}const n=await(i.cache?i.cache.loadGLTF(s.url,i,i.usePBR):z(new $(i.streamDataRequester),s.url,i,i.usePBR)),c=r(n.model.meta,"ESRI_proxyEllipsoid"),u=n.meta.isEsriSymbolResource&&t(c)&&n.meta.uri.includes("/RealisticTrees/");u&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,function(e,t){for(let a=0;a<e.model.lods.length;++a){const r=e.model.lods[a];for(const i of r.parts){const r=i.attributes.normal;if(o(r))return;const s=i.attributes.position,n=s.count,c=m(),u=m(),p=m(),h=j(_,n),x=j(A,n),T=l(d(),i.transform);for(let o=0;o<n;o++){s.getVec(o,u),r.getVec(o,c),C(u,u,i.transform),f(p,u,t.center),M(p,p,t.radius);const n=p[2],l=g(p),d=Math.min(.45+.55*l*l,1);M(p,p,t.radius),null!==T&&C(p,p,T),v(p,p),a+1!==e.model.lods.length&&e.model.lods.length>1&&w(p,p,c,n>-1?.2:Math.min(-4*n-3.8,1)),x.setVec(o,p),h.set(o,0,255*d),h.set(o,1,255*d),h.set(o,2,255*d),h.set(o,3,255)}i.attributes.normal=x,i.attributes.color=h}}}(n,c));const p=n.meta.isEsriSymbolResource?{usePBR:i.usePBR,isSchematic:!1,treeRendering:u,mrrFactors:[0,1,.2]}:{usePBR:i.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},h={...i.materialParamsMixin,treeRendering:u},{engineResources:x,referenceBoundingBox:T}=ca(n,p,h,i.skipHighLods&&null==s.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:s.specifiedLodIndex});return{lods:x,referenceBoundingBox:T,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}function la(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ca(e,a,r,i){const n=e.model,l=new Array,c=new Map,d=new Map,u=n.lods.length,m=O();return n.lods.forEach(((e,p)=>{const h=!0===i.skipHighLods&&(u>1&&0===p||u>3&&1===p)||!1===i.skipHighLods&&null!=i.singleLodIndex&&p!==i.singleLodIndex;if(h&&0!==p)return;const v=new Array;let f=0;if(e.parts.forEach((e=>{const{geometry:o,vertexCount:a}=function(e){const o=function(e,t){switch(t){case io.TRIANGLES:return Y(e);case io.TRIANGLE_STRIP:return Q(e);case io.TRIANGLE_FAN:return q(e)}}(e.indices||e.attributes.position.count,e.primitiveType),a=e.attributes.position.count,r=j(A,a);E(r,e.attributes.position,e.transform);const i=[[Gt.POSITION,{data:r.typedBuffer,size:r.elementCount,exclusive:!0}]],n=[[Gt.POSITION,o]];if(t(e.attributes.normal)){const t=j(A,a);s(da,e.transform),D(t,e.attributes.normal,da),i.push([Gt.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),n.push([Gt.NORMAL,o])}if(t(e.attributes.tangent)){const t=j(L,a);s(da,e.transform),G(t,e.attributes.tangent,da),i.push([Gt.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),n.push([Gt.TANGENT,o])}if(t(e.attributes.texCoord0)){const t=j(N,a);U(t,e.attributes.texCoord0),i.push([Gt.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),n.push([Gt.UV0,o])}if(t(e.attributes.color)){const t=j(_,a);if(4===e.attributes.color.elementCount)e.attributes.color instanceof L?k(t,e.attributes.color,255):e.attributes.color instanceof _?W(t,e.attributes.color):e.attributes.color instanceof P&&k(t,e.attributes.color,1/256);else{H(t,255,255,255,255);const o=new R(t.buffer,0,4);e.attributes.color instanceof A?V(o,e.attributes.color,255):e.attributes.color instanceof R?B(o,e.attributes.color):e.attributes.color instanceof I&&V(o,e.attributes.color,1/256)}i.push([Gt.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),n.push([Gt.COLOR,o])}return{geometry:new Ye(i,n),vertexCount:a}}(e);v.push(o),f+=a;const r=o.boundingInfo;t(r)&&0===p&&(S(m,r.getBBMin()),S(m,r.getBBMax()))})),h)return;const g=new Zo(e.name,{textures:new Array,materials:new Array,geometries:v},e.lodThreshold,[0,0,0],f);l.push(g),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),l=t(e.attributes.texCoord0),u=t(e.attributes.normal);if(o(s))return;const m=function(e){switch(e){case"BLEND":return le.Blend;case"MASK":return le.Mask;case"OPAQUE":case null:case void 0:return le.Opaque}}(s.alphaMode);if(!c.has(i)){if(l){const e=(e,o=!1)=>{if(t(e)&&!d.has(e)){const a=n.textures.get(e);t(a)&&d.set(e,new Qe(a.data,o?{...a.parameters,preMultiplyAlpha:o}:a.parameters))}};e(s.textureColor,m!==le.Opaque),e(s.textureNormal),e(s.textureOcclusion),e(s.textureEmissive),e(s.textureMetallicRoughness)}const o=s.color[0]**(1/F),p=s.color[1]**(1/F),h=s.color[2]**(1/F),v=s.emissiveFactor[0]**(1/F),f=s.emissiveFactor[1]**(1/F),g=s.emissiveFactor[2]**(1/F),x=t(s.textureColor)&&l?d.get(s.textureColor):null;c.set(i,new $o({...a,transparent:m===le.Blend,customDepthTest:de.Lequal,textureAlphaMode:m,textureAlphaCutoff:s.alphaCutoff,diffuse:[o,p,h],ambient:[o,p,h],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?ce.None:ce.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:u?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:t(x)?x.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:t(s.textureNormal)&&l?d.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:t(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:t(s.textureOcclusion)&&l?d.get(s.textureOcclusion).id:void 0,emissiveTextureId:t(s.textureEmissive)&&l?d.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:t(s.textureMetallicRoughness)&&l?d.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[v,f,g],mrrFactors:[s.metallicFactor,s.roughnessFactor,a.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:Xo(s.colorTextureTransform),normalTextureTransformMatrix:Xo(s.normalTextureTransform),occlusionTextureTransformMatrix:Xo(s.occlusionTextureTransform),emissiveTextureTransformMatrix:Xo(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Xo(s.metallicRoughnessTextureTransform),...r}))}if(g.stageResources.materials.push(c.get(i)),l){const e=e=>{t(e)&&g.stageResources.textures.push(d.get(e))};e(s.textureColor),e(s.textureNormal),e(s.textureOcclusion),e(s.textureEmissive),e(s.textureMetallicRoughness)}}))})),{engineResources:l,referenceBoundingBox:m}}const da=n(),ua=Object.freeze(Object.defineProperty({__proto__:null,fetch:na,parseUrl:la,gltfToEngineResources:ca},Symbol.toStringTag,{value:"Module"}));export{bo as C,mo as D,wo as E,vo as F,_o as M,no as N,yo as a,Co as b,Mo as c,go as d,$o as e,Io as f,Xo as g,Uo as h,na as i,so as j,ho as k,ea as l,ua as o};
