// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./ColormapFunctionArguments ../../../renderers/support/colorRampUtils".split(" "),function(l,c,d,b,r,m,n,p,q){b=function(g){function f(){var a=g.apply(this,arguments)||this;a.functionName="Colormap";a.functionArguments=null;a.rasterArgumentNames=
["raster"];return a}l._inheritsLoose(f,g);var h=f.prototype;h._bindSourceRasters=function(){var a=this.sourceRasterInfos[0];if(1<a.bandCount)return{success:!1,error:"colormap-function: source data must be single band"};let {colormap:e,colorRamp:k}=this.functionArguments;e?.length||k&&(e=q.convertColorRampToColors(k,256,!0));if(!e?.length)return{success:!1,error:"colormap-function: missing colormap argument"};this.outputPixelType=this._getOutputPixelType("u8");a=a.clone();a.pixelType=this.outputPixelType;
a.colormap=e;this.rasterInfo=a;return{success:!0}};h._processPixels=function(a){return a.pixelBlocks?.[0]};return f}(n);c.__decorate([d.property({json:{write:!0,name:"rasterFunction"}})],b.prototype,"functionName",void 0);c.__decorate([d.property({type:p,json:{write:!0,name:"rasterFunctionArguments"}})],b.prototype,"functionArguments",void 0);c.__decorate([d.property()],b.prototype,"rasterArgumentNames",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"indexedColormap",void 0);return b=
c.__decorate([m.subclass("esri.layers.support.rasterFunctions.ColormapFunction")],b)});