/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{s as r}from"./vec2.js";import{a as o}from"./vec2f64.js";import{s as a}from"./mathUtils.js";import{c as t}from"./vec4f64.js";import{b as e,F as f}from"./bufferWriterUtils.js";import{g as c}from"./Material.js";function n(r){r.fragment.uniforms.add(new e("projInfo",((r,o)=>function(r){const o=r.camera.projectionMatrix;return 0===o[11]?a(s,2/(r.camera.fullWidth*o[0]),2/(r.camera.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):a(s,-2/(r.camera.fullWidth*o[0]),-2/(r.camera.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}(o)))),r.fragment.uniforms.add(new f("zScale",((r,o)=>i(o)))),r.fragment.code.add(c`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const s=t();function i(o){return 0===o.camera.projectionMatrix[11]?r(m,0,1):r(m,1,0)}const m=o();export{n as C,i as g};
