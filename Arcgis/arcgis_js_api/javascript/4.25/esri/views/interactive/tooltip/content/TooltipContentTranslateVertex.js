// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/Error ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(b,p,q,f,x,y,z,A,B,r,h,t,c,C,a){var u=`${h.CONTENT} ${`${h.CONTENT}--translate-vertex`}`;
b.TooltipContentTranslateVertex=function(k){function g(){return k.apply(this,arguments)||this}p._inheritsLoose(g,k);g.prototype.render=function(){const {distance:v,elevation:l,area:m,totalLength:n,tooltipOptions:w}=this.info,{visibleElements:d}=w,e=this._messagesTooltip.sketch;return a.tsx("div",{class:u},d.distance&&a.tsx(c.TooltipField,{title:e.distance,value:this._formatLength(v)}),d.elevation&&f.isSome(l)&&a.tsx(c.TooltipField,{title:e.elevation,value:this._formatVerticalLength(l)}),d.area&&f.isSome(m)&&
a.tsx(c.TooltipField,{title:e.area,value:this._formatArea(m)}),d.totalLength&&f.isSome(n)&&a.tsx(c.TooltipField,{title:e.totalLength,value:this._formatLength(n)}))};return g}(t.TooltipContent);b.TooltipContentTranslateVertex=q.__decorate([r.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],b.TooltipContentTranslateVertex);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});