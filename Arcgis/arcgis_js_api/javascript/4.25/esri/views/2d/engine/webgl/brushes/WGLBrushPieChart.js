// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","./WGLGeometryBrushMarker","../techniques/utils","../../../../webgl/enums"],function(g,h,k,l,m){return function(d){function c(){return d.apply(this,arguments)||this}g._inheritsLoose(c,d);var e=c.prototype;e.supportsSymbology=function(a){return a===h.WGLSymbologyType.PIE_CHART};e._drawMarkers=function(a,f,b,n,p,q,r){({context:f}=a);({rendererInfo:a}=a);({rendererSchema:a}=a);l.assertRendererSchema(a,"pie-chart");b.setUniform4fv("u_colors",
a.colors);b.setUniform4fv("u_defaultColor",a.defaultColor);b.setUniform4fv("u_othersColor",a.othersColor);b.setUniform4fv("u_outlineColor",a.outlineColor);b.setUniform1f("u_donutRatio",a.holePercentage);b.setUniform1f("u_sectorThreshold",a.sectorThreshold);b.setUniform1f("u_outlineWidth",a.outlineWidth);f.drawElements(n,p,m.DataType.UNSIGNED_INT,q)};return c}(k)});