// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./BaseFunctionArguments".split(" "),function(h,b,d,a,m,k,l){var e;a=e=function(g){function f(){var c=g.apply(this,arguments)||this;c.inputRanges=null;c.outputValues=null;c.noDataRanges=null;c.allowUnmatched=!1;return c}h._inheritsLoose(f,g);f.prototype.clone=
function(){return new e({inputRanges:[...this.inputRanges],outputValues:[...this.outputValues],noDataRanges:[...this.noDataRanges],allowUnmatched:this.allowUnmatched})};return f}(l);b.__decorate([d.property({json:{write:!0}})],a.prototype,"inputRanges",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"outputValues",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"noDataRanges",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"allowUnmatched",void 0);
return a=e=b.__decorate([k.subclass("esri.layers.support.rasterFunctions.RemapFunctionArguments")],a)});