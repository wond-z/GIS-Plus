/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{h as e}from"./object.js";import{c as t}from"./mathUtils.js";import{i as o,e as i}from"./maybe.js";import{f as r}from"./mat3.js";import{c as a}from"./mat3f64.js";import{c as s}from"./mat4.js";import{c as n}from"./mat4f64.js";import{s as l,k as c}from"./vec2.js";import{O as d,a as p,f as u}from"./vec2f64.js";import{s as f,e as v,n as h,b as g,g as m,c as x,l as O,C as S,t as b,m as P,a as C,d as y,f as w}from"./vec3.js";import{Z as A,c as z,f as j}from"./vec4f64.js";import{c as D}from"./aaBoundingRect.js";import{c as T}from"./BufferView.js";import{n as _}from"./InterleavedLayout.js";import{S as V,R as I}from"./RenderSlot.js";import{S as U,a as E,b as F,V as M,c as L}from"./VisualVariables.glsl.js";import{a as R,j as H,b as N,e as G,N as B,X as $,L as W,k as X,T as q,F as k,i as Z,K as Y,S as J,r as K,C as Q,o as ee,h as te,v as oe,g as ie,s as re,Z as ae,R as se,c as ne,P as le,D as ce,_ as de,Y as pe,$ as ue,a0 as fe,a1 as ve,a2 as he}from"./bufferWriterUtils.js";import{g as ge,D as me,M as xe,d as Oe,e as Se,p as be,v as Pe,R as Ce}from"./Material.js";import{V as ye}from"./VertexAttribute.js";import{G as we,a as Ae}from"./GLTextureMaterial.js";import{a as ze}from"./Util2.js";import{i as je}from"./utils20.js";import{e as De}from"./DefaultBufferWriter.js";import{m as Te}from"./MultipassGeometryTest.glsl.js";import{O as _e}from"./OutputHighlight.glsl.js";import{T as Ve,i as Ie,d as Ue,m as Ee,o as Fe,c as Me}from"./OrderIndependentTransparency.js";import{V as Le}from"./ViewingMode.js";import{C as Re}from"./context-util.js";import{B as He,d as Ne,e as Ge}from"./enums3.js";import{_ as Be}from"./tslib.es6.js";import{p as $e}from"./ShaderTechniqueConfiguration.js";var We,Xe;function qe(e,t){e.include(U),e.attributes.add(ye.POSITION,"vec3"),e.attributes.add(ye.NORMAL,"vec3"),e.attributes.add(ye.AUXPOS1,"vec4");const o=e.vertex;R(o,t),H(o,t),o.uniforms.add([new N("viewport",((e,t)=>t.camera.fullViewport)),new G("polygonOffset",(e=>e.shaderPolygonOffset)),new G("cameraGroundRelative",((e,t)=>t.camera.aboveGround?1:-1)),new G("renderTransparentlyOccludedHUD",((e,t)=>t.renderTransparentlyOccludedHUD===We.Occluded?1:t.renderTransparentlyOccludedHUD===We.NotOccluded?0:.75)),new B("hudVisibilityTexture",((e,t)=>t.hudVisibilityTexture))]),t.hasVerticalOffset&&E(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(ge`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(ge`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.isDraped&&!t.hasVerticalOffset||$(o),t.isDraped||(o.uniforms.add(new G("perDistancePixelRatio",((e,t)=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)))),o.code.add(ge`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),t.screenCenterOffsetUnitsEnabled===Xe.Screen&&o.uniforms.add(new G("pixelRatio",((e,t)=>t.camera.pixelRatio))),t.hasScreenSizePerspective&&F(o),o.code.add(ge`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled===Xe.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?ge`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled!==Xe.Screen?ge`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled===Xe.Screen?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled===Xe.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),o.code.add(ge`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function ke(e){const t=ge`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,o=ge`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;e.vertex.code.add(t),e.vertex.code.add(o),e.fragment.code.add(t),e.fragment.code.add(o)}function Ze(e,t){const{vertex:o,fragment:i}=e;t.hasMultipassGeometry&&o.include(Te),t.hasMultipassTerrain&&e.varyings.add("depth","float"),o.code.add(ge`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.hasMultipassGeometry?ge`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${t.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.hasMultipassTerrain&&i.include(W),t.hasMultipassTerrain&&i.uniforms.add([...X("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture),t.hasWebGL2Context?q.None:q.InvSize),new k("nearFar",((e,t)=>t.camera.nearFar))]),i.include(Z),i.code.add(ge`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${t.hasMultipassTerrain?ge`
          vec2 uv = gl_FragCoord.xy;

          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = ${Y(t,"terrainDepthTexture","uv")};

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}function Ye(e){return e.outlineColor[3]>0&&e.outlineSize>0}function Je(e,t=Ke){var i,r,a;return e.textureIsSignedDistanceField?(i=e.anchorPosition,r=e.distanceFieldBoundingBox,a=t,o(r)?l(a,i[0]*(r[2]-r[0])+r[0],i[1]*(r[3]-r[1])+r[1]):l(a,0,0)):c(t,e.anchorPosition),t}!function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(We||(We={})),function(e){e[e.World=0]="World",e[e.Screen=1]="Screen",e[e.COUNT=2]="COUNT"}(Xe||(Xe={}));const Ke=p(),Qe=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new J,i=e.signedDistanceFieldEnabled;if(t.include(ke),t.include(qe,e),t.include(K,e),e.occlusionPass)return t.include(Ze,e),t;const{vertex:r,fragment:a}=t;t.include(U),a.include(Z),a.include(Q),t.include(M,e),t.include(ee,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),r.uniforms.add([new N("viewport",((e,t)=>t.camera.fullViewport)),new k("screenOffset",((e,t)=>l(Ke,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new k("anchorPosition",(e=>Je(e))),new N("materialColor",(e=>e.color)),new G("pixelRatio",((e,t)=>t.camera.pixelRatio))]),i&&(r.uniforms.add(new N("outlineColor",(e=>e.outlineColor))),a.uniforms.add([new N("outlineColor",(e=>Ye(e)?e.outlineColor:A)),new G("outlineSize",(e=>Ye(e)?e.outlineSize:0))])),e.hasScreenSizePerspective&&(L(r),F(r)),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(ye.UV0,"vec2"),t.attributes.add(ye.COLOR,"vec4"),t.attributes.add(ye.SIZE,"vec2"),t.attributes.add(ye.AUXPOS2,"vec4"),r.code.add(ge`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?ge`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:ge`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const s=ge`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,n=e.pixelSnappingEnabled?i?ge`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:ge`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:ge`posProj += quadOffset;`;e.vvColor&&r.uniforms.add([new te("vvColorColors",(e=>e.vvColorColors),oe),new ie("vvColorValues",(e=>e.vvColorValues),oe)]),r.uniforms.add(new k("textureCoordinateScaleFactor",(e=>o(e.texture)&&o(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:d))),r.code.add(ge`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${s}
    ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${ge.float(re)};
    ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${ge.float(re)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${n}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?ge`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),a.uniforms.add(new B("tex",(e=>e.texture)));const c=e.debugDrawLabelBorder?ge`(isBorder > 0.0 ? 0.0 : ${ge.float(ae)})`:ge.float(ae),p=ge`
    ${e.debugDrawLabelBorder?ge`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?ge`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${ge.float(De)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${c} ||
          fillPixelColor.a + outlinePixelColor.a < ${ge.float(re)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${c}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:ge`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${c}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?ge`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===V.Alpha&&a.code.add(ge`
      void main() {
        ${p}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),e.output===V.ObjectAndLayerIdColor&&a.code.add(ge`
      void main() {
        ${p}
        outputObjectAndLayerIdColor();
      }
      `),e.output===V.Color&&a.code.add(ge`
    void main() {
      ${p}
      ${e.transparencyPassType===Ve.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),e.output===V.Highlight&&(t.include(_e,e),a.code.add(ge`
    void main() {
      ${p}
      ${e.binaryHighlightOcclusionEnabled?ge`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t},calculateAnchorPosForRendering:Je},Symbol.toStringTag,{value:"Module"}));class et extends ne{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Re.WEBGL2,t.spherical=e.viewingMode===Le.Global}initializeProgram(e){return new le(e.rctx,et.shader.get().build(this.configuration),me)}_setPipelineState(e){const t=this.configuration,o=e===Ve.NONE,i=e===Ve.FrontFace,r=this.configuration.hasPolygonOffset&&tt,a=(o||i)&&t.output!==V.Highlight?(t.depthEnabled||t.occlusionPass)&&Ue:null;return Ee({blending:t.output===V.Color||t.output===V.Alpha||t.output===V.Highlight?o?ot:Fe(e):null,depthTest:{func:Ne.LEQUAL},depthWrite:a,colorWrite:Me,polygonOffset:r})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return this.configuration.occlusionPass?Ge.POINTS:Ge.TRIANGLES}}et.shader=new se(Qe,(()=>Promise.resolve().then((()=>Qe))));const tt={factor:0,units:-4},ot=Ie(He.ONE,He.ONE_MINUS_SRC_ALPHA);class it extends ce{constructor(){super(...arguments),this.output=V.Color,this.screenCenterOffsetUnitsEnabled=Xe.World,this.transparencyPassType=Ve.NONE,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.binaryHighlightOcclusionEnabled=!0,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.hasMultipassGeometry=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}Be([$e({count:V.COUNT})],it.prototype,"output",void 0),Be([$e({count:Xe.COUNT})],it.prototype,"screenCenterOffsetUnitsEnabled",void 0),Be([$e({count:Ve.COUNT})],it.prototype,"transparencyPassType",void 0),Be([$e()],it.prototype,"spherical",void 0),Be([$e()],it.prototype,"occlusionTestEnabled",void 0),Be([$e()],it.prototype,"signedDistanceFieldEnabled",void 0),Be([$e()],it.prototype,"vvSize",void 0),Be([$e()],it.prototype,"vvColor",void 0),Be([$e()],it.prototype,"hasVerticalOffset",void 0),Be([$e()],it.prototype,"hasScreenSizePerspective",void 0),Be([$e()],it.prototype,"debugDrawLabelBorder",void 0),Be([$e()],it.prototype,"binaryHighlightOcclusionEnabled",void 0),Be([$e()],it.prototype,"hasSlicePlane",void 0),Be([$e()],it.prototype,"hasPolygonOffset",void 0),Be([$e()],it.prototype,"depthEnabled",void 0),Be([$e()],it.prototype,"pixelSnappingEnabled",void 0),Be([$e()],it.prototype,"isDraped",void 0),Be([$e()],it.prototype,"hasMultipassGeometry",void 0),Be([$e()],it.prototype,"hasMultipassTerrain",void 0),Be([$e()],it.prototype,"cullAboveGround",void 0),Be([$e()],it.prototype,"occlusionPass",void 0),Be([$e()],it.prototype,"objectAndLayerIdColorInstanced",void 0),Be([$e({constValue:!0})],it.prototype,"hasSliceInVertexProgram",void 0),Be([$e({constValue:!1})],it.prototype,"hasVvInstancing",void 0);class rt extends xe{constructor(e){super(e,new yt),this._configuration=new it}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits?Xe.Screen:Xe.World,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.isDraped=this.parameters.isDraped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.vvSize=!!this.parameters.vvSizeEnabled,this._configuration.vvColor=!!this.parameters.vvColorEnabled,this._configuration.occlusionPass=t.slot===I.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(e===V.Color||e===V.Alpha),e===V.Color&&(this._configuration.debugDrawLabelBorder=!!this.parameters.debugDrawLabelBorder),e===V.Highlight&&(this._configuration.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassGeometry=t.multipassGeometry.enabled,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,r,a,s,n,l,c){o(c)?this._intersectDrapedHudGeometry(e,s,n,l,c):this._intersectHudGeometry(e,t,i,r,n,l)}_intersectDrapedHudGeometry(e,t,i,r,a){const s=e.vertexAttributes.get(ye.POSITION),n=e.vertexAttributes.get(ye.SIZE),l=this.parameters,c=Je(l);let d=1,p=1;if(o(r)){const e=r(Ot);d=e[0],p=e[5]}d*=e.screenToWorldRatio,p*=e.screenToWorldRatio;const u=bt*e.screenToWorldRatio;for(let o=0;o<s.data.length/s.size;o++){const r=o*s.size,f=s.data[r],v=s.data[r+1],h=o*n.size;let g;Pt[0]=n.data[h]*d,Pt[1]=n.data[h+1]*p,l.textureIsSignedDistanceField&&(g=l.outlineSize*e.screenToWorldRatio/2),st(t,f,v,Pt,u,g,l,c)&&i(a.dist,a.normal,-1,!1)}}_intersectHudGeometry(e,t,i,a,n,l){if(!a.options.selectionMode||!a.options.hud||je(t))return;const c=this.parameters;let d=1,p=1;if(r(vt,i),o(l)){const e=l(Ot);d=e[0],p=e[5],function(e){const t=e[0],o=e[1],i=e[2],r=e[3],a=e[4],s=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+o*o+i*i),p=1/Math.sqrt(r*r+a*a+s*s),u=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=o*d,e[2]=i*d,e[3]=r*p,e[4]=a*p,e[5]=s*p,e[6]=n*u,e[7]=l*u,e[8]=c*u}(vt)}const u=e.vertexAttributes.get(ye.POSITION),b=e.vertexAttributes.get(ye.SIZE),P=e.vertexAttributes.get(ye.NORMAL),C=e.vertexAttributes.get(ye.AUXPOS1);ze(u.size>=3);const w=a.point,A=a.camera,z=Je(c);d*=A.pixelRatio,p*=A.pixelRatio;const j="screen"===this.parameters.centerOffsetUnits;for(let e=0;e<u.data.length/u.size;e++){const t=e*u.size;f(ct,u.data[t],u.data[t+1],u.data[t+2]),v(ct,ct,i);const o=e*b.size;Pt[0]=b.data[o]*d,Pt[1]=b.data[o+1]*p,v(ct,ct,A.viewMatrix);const r=e*C.size;if(f(mt,C.data[r+0],C.data[r+1],C.data[r+2]),!j&&(ct[0]+=mt[0],ct[1]+=mt[1],0!==mt[2])){const e=mt[2];h(mt,ct),g(ct,ct,m(mt,mt,e))}const l=e*P.size;if(f(dt,P.data[l],P.data[l+1],P.data[l+2]),this._normalAndViewAngle(dt,vt,A,xt),this._applyVerticalOffsetTransformationView(ct,xt,A,nt),A.applyProjection(ct,pt),pt[0]>-1){pt[0]=Math.floor(pt[0]),pt[1]=Math.floor(pt[1]),j&&(mt[0]||mt[1])&&(pt[0]+=mt[0],0!==mt[1]&&(pt[1]+=Oe(mt[1],nt.factorAlignment)),A.unapplyProjection(pt,ct)),pt[0]+=this.parameters.screenOffset[0],pt[1]+=this.parameters.screenOffset[1],Se(Pt,nt.factor,Pt);const e=St*A.pixelRatio;let t;if(c.textureIsSignedDistanceField&&(t=c.outlineSize*A.pixelRatio/2),st(w,pt[0],pt[1],Pt,e,t,c,z)){const e=a.ray;if(v(ft,ct,s(gt,A.viewMatrix)),pt[0]=w[0],pt[1]=w[1],A.unprojectFromRenderScreen(pt,ct)){const t=y();x(t,e.direction);const o=1/O(t);m(t,t,o),n(S(e.origin,ct)*o,t,-1,!0,1,ft)}}}}}computeAttachmentOrigin(e,t){const o=e.vertexAttributes;if(!o)return!1;const i=o.get(ye.POSITION),r=e.indices.get(ye.POSITION);return de(i,r,t)}createBufferWriter(){return new zt(this)}_normalAndViewAngle(e,t,o,i){return(function(e){return e instanceof Float32Array&&e.length>=16}(a=t)||function(e){return Array.isArray(e)&&e.length>=16}(a))&&(t=r(ht,t)),b(i.normal,e,t),v(i.normal,i.normal,o.viewInverseTransposeMatrix),i.cosAngle=P(ut,Ct),i;var a}_updateScaleInfo(e,t,i){const r=this.parameters;o(r.screenSizePerspective)?be(i,t,r.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),o(r.screenSizePerspectiveAlignment)?be(i,t,r.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,o,i,r,a,s){const n=this._normalAndViewAngle(t,o,r,xt);return this._applyVerticalGroundOffsetView(e,n,r,s),this._applyVerticalOffsetTransformationView(s,n,r,a),this._applyPolygonOffsetView(s,n,i[3],r,s),this._applyCenterOffsetView(s,i,s),s}applyShaderOffsetsNDC(e,t,i,r,a){return this._applyCenterOffsetNDC(e,t,i,r),o(a)&&x(a,r),this._applyPolygonOffsetNDC(r,t,i,r),r}_applyPolygonOffsetView(e,o,i,r,a){const s=r.aboveGround?1:-1;let n=Math.sign(i);0===n&&(n=s);const l=s*n;if(this.parameters.shaderPolygonOffset<=0)return x(a,e);const c=t(Math.abs(o.cosAngle),.01,1),d=1-Math.sqrt(1-c*c)/c/r.viewport[2];return m(a,e,l>0?d:1/d),a}_applyVerticalGroundOffsetView(e,t,o,i){const r=O(e),a=o.aboveGround?1:-1,s=.5*o.computeRenderPixelSizeAtDist(r),n=m(ct,t.normal,a*s);return C(i,e,n),i}_applyVerticalOffsetTransformationView(e,t,o,r){const a=this.parameters;if(!a.verticalOffset||!a.verticalOffset.screenLength){if(a.screenSizePerspective||a.screenSizePerspectiveAlignment){const o=O(e);this._updateScaleInfo(r,o,t.cosAngle)}else r.factor.scale=1,r.factorAlignment.scale=1;return e}const s=O(e),n=i(a.screenSizePerspectiveAlignment,a.screenSizePerspective),l=Pe(o,s,a.verticalOffset,t.cosAngle,n);return this._updateScaleInfo(r,s,t.cosAngle),m(t.normal,t.normal,l),C(e,e,t.normal)}_applyCenterOffsetView(e,t,o){const i="screen"!==this.parameters.centerOffsetUnits;return o!==e&&x(o,e),i&&(o[0]+=t[0],o[1]+=t[1],t[2]&&(h(dt,o),C(o,o,m(dt,dt,t[2])))),o}_applyCenterOffsetNDC(e,t,o,i){const r="screen"!==this.parameters.centerOffsetUnits;return i!==e&&x(i,e),r||(i[0]+=t[0]/o.fullWidth*2,i[1]+=t[1]/o.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,o,i){const r=this.parameters.shaderPolygonOffset;if(e!==i&&x(i,e),r){const e=o.aboveGround?1:-1,a=e*Math.sign(t[3]);i[2]-=(a||e)*r}return i}requiresSlot(e,t){if(t===V.Color||t===V.Alpha||t===V.Highlight||t===V.ObjectAndLayerIdColor){if(e===I.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:t,occlusionTest:o}=this.parameters;return e===(t?I.LABEL_MATERIAL:I.HUD_MATERIAL)||o&&e===I.OCCLUSION_PIXELS}return!1}createGLMaterial(e){return new at(e)}calculateRelativeScreenBounds(e,t,o=D()){return function(e,t,o,i=lt){c(i,e.anchorPosition),i[0]*=-t[0],i[1]*=-t[1],i[0]+=e.screenOffset[0]*o,i[1]+=e.screenOffset[1]*o}(this.parameters,e,t,o),o[2]=o[0]+e[0],o[3]=o[1]+e[1],o}}class at extends we{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(et,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function st(e,t,i,r,a,s,n,l){let c=t-a-(l[0]>0?r[0]*l[0]:0),d=c+r[0]+2*a,p=i-a-(l[1]>0?r[1]*l[1]:0),u=p+r[1]+2*a;const f=n.distanceFieldBoundingBox;return n.textureIsSignedDistanceField&&o(f)&&(c+=r[0]*f[0],p+=r[1]*f[1],d-=r[0]*(1-f[2]),u-=r[1]*(1-f[3]),c-=s,d+=s,p-=s,u+=s),e[0]>c&&e[0]<d&&e[1]>p&&e[1]<u}const nt={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},lt=p(),ct=y(),dt=y(),pt=z(),ut=y(),ft=y(),vt=a(),ht=a(),gt=n(),mt=y(),xt={normal:ut,cosAngle:0},Ot=n(),St=1,bt=2,Pt=[0,0],Ct=w(0,0,1);class yt extends Ae{constructor(){super(...arguments),this.renderOccluded=Ce.Occlude,this.color=j(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=u(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.outlineColor=j(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.binaryHighlightOcclusion=!0,this.debugDrawLabelBorder=!1,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const wt=_().vec3f(ye.POSITION).vec3f(ye.NORMAL).vec2f(ye.UV0).vec4u8(ye.COLOR).vec2f(ye.SIZE).vec4f(ye.AUXPOS1).vec4f(ye.AUXPOS2),At=wt.clone().vec4u8(ye.OBJECTANDLAYERIDCOLOR);class zt{constructor(t){this._material=t,this.vertexBufferLayout=e("enable-feature:objectAndLayerId-rendering")?At:wt}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get(ye.POSITION).length}write(e,t,i,r,a){pe(i.indices.get(ye.POSITION),i.vertexAttributes.get(ye.POSITION).data,e,r.position,a,6),ue(i.indices.get(ye.NORMAL),i.vertexAttributes.get(ye.NORMAL).data,t,r.normal,a,6);{const e=i.vertexAttributes.get(ye.UV0).data;let t,o,s,n;if(null==e||e.length<4){const e=this._material.parameters;t=0,o=0,s=e.texCoordScale[0],n=e.texCoordScale[1]}else t=e[0],o=e[1],s=e[2],n=e[3];s=Math.min(1.99999,s+1),n=Math.min(1.99999,n+1);const l=i.indices.get(ye.POSITION).length,c=r.uv0;let d=a;for(let e=0;e<l;++e)c.set(d,0,t),c.set(d,1,o),d+=1,c.set(d,0,s),c.set(d,1,o),d+=1,c.set(d,0,s),c.set(d,1,n),d+=1,c.set(d,0,s),c.set(d,1,n),d+=1,c.set(d,0,t),c.set(d,1,n),d+=1,c.set(d,0,t),c.set(d,1,o),d+=1}fe(i.indices.get(ye.COLOR),i.vertexAttributes.get(ye.COLOR).data,4,r.color,a,6);{const e=i.indices.get(ye.SIZE),t=i.vertexAttributes.get(ye.SIZE).data,o=e.length,s=r.size;let n=a;for(let i=0;i<o;++i){const o=t[2*e[i]],r=t[2*e[i]+1];for(let e=0;e<6;++e)s.set(n,0,o),s.set(n,1,r),n+=1}}if(i.indices.get(ye.AUXPOS1)&&i.vertexAttributes.get(ye.AUXPOS1)&&ve(i.indices.get(ye.AUXPOS1),i.vertexAttributes.get(ye.AUXPOS1).data,r.auxpos1,a,6),i.indices.get(ye.AUXPOS2)&&i.vertexAttributes.get(ye.AUXPOS2)&&ve(i.indices.get(ye.AUXPOS2),i.vertexAttributes.get(ye.AUXPOS2).data,r.auxpos2,a,6),o(i.objectAndLayerIdColor)&&4===i.objectAndLayerIdColor.length&&i.indices.get(ye.POSITION)){const e=i.indices.get(ye.POSITION).length,t=r.getField(ye.OBJECTANDLAYERIDCOLOR,T);he(i.objectAndLayerIdColor,t,e,a,6)}}}export{ke as A,rt as H,We as a,qe as b,Xe as c};
