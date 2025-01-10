/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{q as e,k as o,T as t,K as r}from"./bufferWriterUtils.js";import{g as a}from"./Material.js";import{f as i}from"./vec4f64.js";function d(o,t){if(e(o),t.hasModelTransformation)return o.vertex.code.add(a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void o.vertex.code.add(a`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);o.vertex.code.add(a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add(a`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const c=i(1,1,0,1),n=i(1,0,1,1);function s(e,i){e.fragment.uniforms.add(o("depthTex",((e,o)=>o.highlightDepthTexture),i.hasWebGL2Context?t.None:t.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",c).add("unoccludedHighlightFlag","vec4",n),e.fragment.code.add(a`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${r(i,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}export{s as O,d as T,n as u};
