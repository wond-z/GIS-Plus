/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{s as e}from"./mathUtils.js";import{c as r}from"./vec4f64.js";import{b as a,j as t,f as o,a3 as i,v as c,g as s,h as v}from"./bufferWriterUtils.js";import{g as n}from"./Material.js";import{V as l}from"./VertexAttribute.js";function f(e){e.vertex.code.add(n`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(n`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(n`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(n`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(n`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function d(e){e.uniforms.add(new a("screenSizePerspective",(e=>u(e.screenSizePerspective))))}function m(e){e.uniforms.add(new a("screenSizePerspectiveAlignment",(e=>u(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function u(r){return e(S,r.parameters.divisor,r.parameters.offset,r.parameters.minPixelSize,r.paddingPixelsOverride)}const S=r();function z(e,r){const a=e.vertex;r.hasVerticalOffset?(b(a),r.hasScreenSizePerspective&&(e.include(f),m(a),t(e.vertex,r)),a.code.add(n`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?n`vec3 worldNormal = normalize(worldPos + localOrigin);`:n`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?n`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):a.code.add(n`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const p=r();function b(r){r.uniforms.add(new a("verticalOffset",((r,a)=>{const{minWorldLength:t,maxWorldLength:o,screenLength:i}=r.verticalOffset,c=Math.tan(.5*a.camera.fovY)/(.5*a.camera.fullViewport[3]),s=a.camera.pixelRatio||1;return e(p,i*s,c,t,o)})))}function P(e,r){r.hasVvInstancing&&(r.vvSize||r.vvColor)&&e.attributes.add(l.INSTANCEFEATUREATTRIBUTE,"vec4");const a=e.vertex;r.vvSize?(a.uniforms.add(new o("vvSizeMinSize",(e=>e.vvSizeMinSize))),a.uniforms.add(new o("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),a.uniforms.add(new o("vvSizeOffset",(e=>e.vvSizeOffset))),a.uniforms.add(new o("vvSizeFactor",(e=>e.vvSizeFactor))),a.uniforms.add(new i("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),a.uniforms.add(new o("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),a.code.add(n`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),a.code.add(n`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${r.hasVvInstancing?n`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):a.code.add(n`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),r.vvColor?(a.constants.add("vvColorNumber","int",c),r.hasVvInstancing&&a.uniforms.add([new s("vvColorValues",(e=>e.vvColorValues),c),new v("vvColorColors",(e=>e.vvColorColors),c)]),a.code.add(n`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${r.hasVvInstancing?n`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):a.code.add(n`vec4 vvColor() { return vec4(1.0); }`)}export{f as S,P as V,b as a,m as b,d as c,z as d};
