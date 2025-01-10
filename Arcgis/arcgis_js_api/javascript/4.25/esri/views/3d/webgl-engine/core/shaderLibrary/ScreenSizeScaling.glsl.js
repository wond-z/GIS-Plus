// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./util/View.glsl","../shaderModules/FloatPassUniform","../shaderModules/interfaces"],function(b,f,c,g){b.ScreenSizeScaling=function(a,d){d.screenSizeEnabled&&(a=a.vertex,f.addCameraPosition(a,d),a.uniforms.add(new c.FloatPassUniform("perScreenPixelRatio",(e,h)=>h.camera.perScreenPixelRatio)),a.uniforms.add(new c.FloatPassUniform("screenSizeScale",e=>e.screenSizeScale)),a.code.add(g.glsl`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`))};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});