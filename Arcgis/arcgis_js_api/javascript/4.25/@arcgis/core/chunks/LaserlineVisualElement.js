/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{i as e,a as t,p as i,k as n}from"./maybe.js";import{d as s,s as a,b as r,n as l,l as o,C as c,e as h,c as d,h as p,a as u,f,k as g}from"./vec3.js";import{p as _,c as m,b as P,e as b}from"./lineSegment.js";import{V as v}from"./VisualElement.js";import{c as w,f as V,a as x,g as D,b as L}from"./frustum.js";import{w as E}from"./ray.js";import{V as y}from"./ViewingMode.js";import{g as S}from"./glUtil.js";import{n as C}from"./InterleavedLayout.js";import{L as M,e as R,f as A,N as T,F as O,S as q,M as I,R as j,c as z,P as W,Q as N,U,b as B,W as F}from"./bufferWriterUtils.js";import{V as H}from"./VertexAttribute.js";import{k as G}from"./mat4.js";import{c as k}from"./mat4f64.js";import{s as X}from"./vec2.js";import{a as Q}from"./vec2f64.js";import{C as $}from"./CameraSpace.glsl.js";import{g as J,N as K,D as Y,c as Z,u as ee}from"./Material.js";import{B as te,e as ie,U as ne}from"./enums3.js";import{m as se,i as ae,c as re}from"./OrderIndependentTransparency.js";import{B as le}from"./FramebufferObject.js";import{R as oe}from"./RenderSlot.js";import{_ as ce}from"./tslib.es6.js";import{p as he,S as de}from"./ShaderTechniqueConfiguration.js";import{d as pe,t as ue}from"./mathUtils.js";import{c as fe}from"./vec4f64.js";import{c as ge,f as _e}from"./plane.js";import{c as me}from"./sphere.js";function Pe(t,i){t.extensions.add("GL_OES_standard_derivatives");const n=t.fragment;n.include(M),t.include($),n.uniforms.add([new R("globalAlpha",(e=>e.globalAlpha)),new A("glowColor",(e=>e.glowColor)),new R("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new R("glowFalloff",(e=>e.glowFalloff)),new A("innerColor",(e=>e.innerColor)),new R("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new T("depthMap",((e,t)=>t.linearDepthTexture)),new O("nearFar",((e,t)=>t.camera.nearFar)),new T("frameColor",((e,t)=>t.mainColorTexture))]),n.code.add(J`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),n.code.add(J`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),n.code.add(J`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),n.code.add(J`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),i.contrastControlEnabled?(n.uniforms.add(new R("globalAlphaContrastBoost",(t=>e(t.globalAlphaContrastBoost)?t.globalAlphaContrastBoost:1))),n.code.add(J`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):n.code.add(J`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const be=Q(),ve=k(),we=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new q;t.include(Pe,e);const{vertex:i,fragment:n}=t;return i.uniforms.add([new I("modelView",((e,t)=>G(ve,t.camera.viewMatrix,e.origin))),new I("proj",((e,t)=>t.camera.projectionMatrix)),new R("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new O("pixelToNDC",((e,t)=>X(be,2/t.camera.fullViewport[2],2/t.camera.fullViewport[3])))]),t.attributes.add(H.START,"vec3"),t.attributes.add(H.END,"vec3"),t.attributes.add(H.UP,"vec3"),t.attributes.add(H.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),i.code.add(J`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),n.uniforms.add(new R("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),n.code.add(J`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}},Symbol.toStringTag,{value:"Module"}));class Ve extends z{initializeProgram(e){return new W(e.rctx,Ve.shader.get().build(this.configuration),xe)}initializePipeline(){return se({blending:ae(te.ONE,te.ONE_MINUS_SRC_ALPHA),colorWrite:re})}}Ve.shader=new j(we,(()=>Promise.resolve().then((()=>we))));const xe=new Map([[H.START,0],[H.END,1],[H.UP,2],[H.EXTRUDE,3]]);class De{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=s(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=new Float64Array(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);a(this._origin,e[t+0],e[t+1],e[t+2])}else a(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(t){const i=this._ensureVAO(t);e(i)&&(t.bindVAO(i),t.drawArrays(ie.TRIANGLES,0,this._count))}dispose(){e(this._vao)&&this._vao.dispose()}_ensureVAO(e){return t(this._buffers)?null:(t(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new N(e,xe,{data:S(ye)},{data:le.createVertex(e,ne.STATIC_DRAW,i)})}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.data.setData(i),this._dirty=!1}_numberOfRenderVertices(e){return 2*(e.length/3-1)*3}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=t;const i=ye.createBuffer(t),n=this._origin;let s=0,l=0;for(const t of e){for(let e=0;e<t.length;e+=3){const o=a(Ee,t[e+0],t[e+1],t[e+2]);0===e?l=this._renderCoordsHelper.getAltitude(o):this._renderCoordsHelper.setAltitude(o,l);const c=this._renderCoordsHelper.worldUpAtPosition(o,Le),h=s+2*e,d=r(Ee,o,n);if(e<t.length-3){i.up.setVec(h,c),i.up.setVec(h+3,c),i.up.setVec(h+5,c);for(let e=0;e<6;e++)i.start.setVec(h+e,d);i.extrude.setValues(h+0,0,-1),i.extrude.setValues(h+1,1,-1),i.extrude.setValues(h+2,1,1),i.extrude.setValues(h+3,0,-1),i.extrude.setValues(h+4,1,1),i.extrude.setValues(h+5,0,1)}if(e>0){i.up.setVec(h-2,c),i.up.setVec(h-4,c),i.up.setVec(h-5,c);for(let e=-6;e<0;e++)i.end.setVec(h+e,d)}}s+=this._numberOfRenderVertices(t)}return i.buffer}}const Le=s(),Ee=s(),ye=C().vec3f(H.START).vec3f(H.END).vec3f(H.UP).vec2f(H.EXTRUDE);class Se extends de{constructor(){super(...arguments),this.contrastControlEnabled=!1}}ce([he()],Se.prototype,"contrastControlEnabled",void 0);const Ce=pe(6);function Me(e){return X(Ae,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-pe(2))))}function Re(e,t,i){return h(je,e,i),d(Oe,t),Oe[3]=0,ue(Oe,Oe,i),_e(je,Oe,ze)}const Ae=Q(),Te=s(),Oe=fe(),qe=s(),Ie=s(),je=s(),ze=ge(),We=me(),Ne=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:Ce,build:function(e){const t=new q;t.extensions.add("GL_OES_standard_derivatives"),t.include(U),t.include(Pe,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new R("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add(J`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>h(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>h(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add([new B("heightManifoldOrigin",((i,n)=>(e(Te,i,n),t(Ie,n),r(Ie,Ie,Te),l(Oe,Ie),Oe[3]=o(Ie),Oe))),new A("globalOrigin",((e,i)=>t(Te,i))),new R("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,c(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/o(e.heightManifoldTarget)))]),i.code.add(J`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(J`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new R("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add(J`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new R("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add(J`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(J`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(J`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){i.uniforms.add([new O("angleCutoff",(e=>Me(e))),new B("heightPlane",((e,t)=>Re(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,Te),t.camera.viewMatrix)))]);const t=e.spherical?J`normalize(globalOrigin - pos)`:J`heightPlane.xyz`;i.code.add(J`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(i.uniforms.add([new O("angleCutoff",(e=>Me(e))),new B("pointDistanceSphere",((e,t)=>function(e,t){return h(We,e.pointDistanceOrigin,t.camera.viewMatrix),We[3]=c(e.pointDistanceOrigin,e.pointDistanceTarget),We}(e,t)))]),i.code.add(J`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add([new O("angleCutoff",(e=>Me(e))),new B("lineVerticalPlane",((e,t)=>function(e,t){const i=_(e.lineVerticalPlaneSegment,.5,Te),n=e.renderCoordsHelper.worldUpAtPosition(i,qe),s=l(Ie,e.lineVerticalPlaneSegment.vector),a=p(Oe,n,s);return l(a,a),Re(e.lineVerticalPlaneSegment.origin,a,t.camera.viewMatrix)}(e,t))),new A("lineVerticalStart",((e,t)=>function(e,t){const i=d(Te,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),h(i,i,t.camera.viewMatrix)}(e,t))),new A("lineVerticalEnd",((e,t)=>function(e,t){const i=u(Te,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),h(i,i,t.camera.viewMatrix)}(e,t)))]),i.code.add(J`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(i.uniforms.add([new O("angleCutoff",(e=>Me(e))),new A("intersectsLineStart",((e,t)=>h(Te,e.lineStartWorld,t.camera.viewMatrix))),new A("intersectsLineEnd",((e,t)=>h(Te,e.lineEndWorld,t.camera.viewMatrix))),new A("intersectsLineDirection",((e,t)=>(d(Oe,e.intersectsLineSegment.vector),Oe[3]=0,l(Te,ue(Oe,Oe,t.camera.viewMatrix))))),new R("intersectsLineRadius",(e=>e.intersectsLineRadius))]),i.code.add(J`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(J`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),t}},Symbol.toStringTag,{value:"Module"}));class Ue extends K{constructor(){super(...arguments),this.innerColor=f(1,1,1),this.innerWidth=1,this.glowColor=f(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=pe(6),this.pointDistanceOrigin=s(),this.pointDistanceTarget=s(),this.lineVerticalPlaneSegment=m(),this.intersectsLineSegment=m(),this.intersectsLineRadius=3,this.heightManifoldTarget=s(),this.lineStartWorld=s(),this.lineEndWorld=s()}}class Be extends z{initializeProgram(e){return new W(e.rctx,Be.shader.get().build(this.configuration),Y)}initializePipeline(){return se({blending:ae(te.ONE,te.ONE_MINUS_SRC_ALPHA),colorWrite:re})}}Be.shader=new j(Ne,(()=>Promise.resolve().then((()=>Ne))));class Fe extends Se{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}ce([he()],Fe.prototype,"heightManifoldEnabled",void 0),ce([he()],Fe.prototype,"pointDistanceEnabled",void 0),ce([he()],Fe.prototype,"lineVerticalPlaneEnabled",void 0),ce([he()],Fe.prototype,"intersectsLineEnabled",void 0),ce([he()],Fe.prototype,"spherical",void 0);class He{constructor(e,t={contrastControlEnabled:!1}){this._config=t,this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=y.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._passParameters=Z(e,new Ue)}get renderSlots(){return[this._config.contrastControlEnabled?oe.LASERLINES_CONTRAST_CONTROL:oe.LASERLINES]}get needsLinearDepth(){return!0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){d(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){d(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){d(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){P(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){P(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get viewingMode(){return this._viewingMode}set viewingMode(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,e(this._pathVerticalPlaneData)&&this._requestRender())}set pathVerticalPlaneVertices(e){t(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new De(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){t(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new De(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){ee(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e;const t=e.renderContext.rctx;this._quadVAO=F(t),this._techniqueRepository=e.shaderTechniqueRepository,this._techniqueConfig=new Fe;const i=new Se;i.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(Ve,i)}uninitializeRenderContext(){this._quadVAO=i(this._quadVAO),this._technique=n(this._technique),this._pathVerticalPlaneData=i(this._pathVerticalPlaneData),this._pathTechnique=n(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===y.Global,this._technique=this._techniqueRepository.releaseAndAcquire(Be,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,t){const i=e.rctx;this._updatePassParameters(e),i.bindTechnique(t,this._passParameters,e.bindParameters),i.bindVAO(this._quadVAO),i.drawArrays(ie.TRIANGLE_STRIP,0,4)}_renderPath(e){if(t(this._pathVerticalPlaneData)||t(this._pathTechnique))return;const i=e.rctx,n=this._pathTechnique;i.bindTechnique(n,{...this._passParameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if(V(E(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),Ge),Ge.c0=-Number.MAX_VALUE,!x(t.frustum,Ge))return;D(Ge,this._passParameters.lineStartWorld),L(Ge,this._passParameters.lineEndWorld)}else d(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),u(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}}const Ge=w();class ke extends v{constructor(e){super(e.view),this._angleCutoff=Ce,this._style={},this._heightManifoldTarget=s(),this._heightManifoldEnabled=!1,this._intersectsLine=m(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e)}get testData(){return this._renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){e(t)?(d(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(t(e))return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(e,Xe);this.intersectsLine=b(e,i),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){e(t)?(P(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=e(t)?P(t):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=e(t)?{origin:g(t.origin),target:g(t.target)}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||e(this._pointDistanceLine)||e(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){e(this._renderer)||(this._renderer=new He({renderCoordsHelper:this.view.renderCoordsHelper},{contrastControlEnabled:!0}),this._renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer.renderSlots,this._renderer))}_syncStyle(){t(this._renderer)||(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){t(this._renderer)||this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){t(this._renderer)||(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){t(this._renderer)||(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){t(this._renderer)||(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){t(this._renderer)||(this._renderer.pathVerticalPlaneEnabled=e(this._pathVerticalPlaneBuffers)&&this.visible,e(this._pathVerticalPlaneBuffers)&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){t(this._renderer)||(this._renderer.lineVerticalPlaneEnabled=e(this._lineVerticalPlaneSegment)&&this.visible,e(this._lineVerticalPlaneSegment)&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){t(this._renderer)||(this._renderer.pointDistanceEnabled=e(this._pointDistanceLine)&&this.visible,e(this._pointDistanceLine)&&(this._renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this._renderer.pointDistanceTarget=this._pointDistanceLine.target))}_disposeRenderer(){e(this._renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const Xe=s();export{ke as L};
