// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../support/debugFlags ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/attributes/NormalAttribute.glsl ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/terrain/Overlay.glsl ../core/shaderLibrary/terrain/TileBlendInput ../core/shaderTechnique/ShaderTechniqueConfiguration ../materials/DefaultTechniqueConfiguration".split(" "),
function(e,n,b,f,g,p,q,r,h,k,c,a){a=function(l){function m(){var d=l.apply(this,arguments)||this;d.output=g.ShaderOutput.Color;d.overlayMode=h.OverlayMode.Disabled;d.tileBlendInput=k.TileBlendInput.LayerOnly;d.spherical=!1;d.doublePrecisionRequiresObfuscation=!1;d.atmosphere=!1;d.receiveShadows=!1;d.hasSlicePlane=!1;d.backfaceCullingEnabled=!1;d.stencilEnabled=!1;d.textureFadingEnabled=!1;d.renderOccluded=!1;d.hasScreenSpaceReflections=!1;d.hasCloudsReflections=!1;d.shading=!f.TERRAIN_USE_LEGACY_SHADING;
d.useLegacyTerrainShading=f.TERRAIN_USE_LEGACY_SHADING;d.transparent=!1;d.tileBorders=!1;d.visualizeNormals=!1;d.screenSizePerspective=!1;d.receiveAmbientOcclusion=!1;return d}n._inheritsLoose(m,l);return m}(a.DefaultTechniqueConfiguration);b.__decorate([c.parameter({count:g.ShaderOutput.COUNT})],a.prototype,"output",void 0);b.__decorate([c.parameter({count:h.OverlayMode.COUNT})],a.prototype,"overlayMode",void 0);b.__decorate([c.parameter({count:k.TileBlendInput.COUNT})],a.prototype,"tileBlendInput",
void 0);b.__decorate([c.parameter()],a.prototype,"spherical",void 0);b.__decorate([c.parameter()],a.prototype,"doublePrecisionRequiresObfuscation",void 0);b.__decorate([c.parameter()],a.prototype,"atmosphere",void 0);b.__decorate([c.parameter()],a.prototype,"receiveShadows",void 0);b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"backfaceCullingEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"stencilEnabled",void 0);b.__decorate([c.parameter()],
a.prototype,"textureFadingEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"renderOccluded",void 0);b.__decorate([c.parameter()],a.prototype,"hasScreenSpaceReflections",void 0);b.__decorate([c.parameter()],a.prototype,"hasCloudsReflections",void 0);b.__decorate([c.parameter()],a.prototype,"shading",void 0);b.__decorate([c.parameter()],a.prototype,"useLegacyTerrainShading",void 0);b.__decorate([c.parameter()],a.prototype,"transparent",void 0);b.__decorate([c.parameter()],a.prototype,"tileBorders",
void 0);b.__decorate([c.parameter()],a.prototype,"visualizeNormals",void 0);b.__decorate([c.parameter()],a.prototype,"screenSizePerspective",void 0);b.__decorate([c.parameter()],a.prototype,"receiveAmbientOcclusion",void 0);b.__decorate([c.parameter({constValue:r.PBRMode.Disabled})],a.prototype,"pbrMode",void 0);b.__decorate([c.parameter({constValue:p.NormalAttributeType.CompressedAttribute})],a.prototype,"normalType",void 0);b.__decorate([c.parameter({constValue:q.TextureCoordinateAttributeType.Compressed})],
a.prototype,"textureCoordinateType",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"highStepCount",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"useCustomDTRExponentForWater",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"useFillLights",void 0);e.TerrainTechniqueConfiguration=a;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});