// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/reactiveUtils ../core/screenUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/subclass ./Widget ./ScaleBar/ScaleBarViewModel ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(n,f,u,v,h,e,p,w,x,y,A,z,c){e=function(q){function k(a,b){a=q.call(this,a,b)||this;a.messages=null;a.unit="non-metric";
a.viewModel=new y;return a}n._inheritsLoose(k,q);var g=k.prototype;g.initialize=function(){this.addHandles([u.watch(()=>{const {view:a}=this;return[a?.stationary,a?.center,a?.scale,a?.zoom]},([a])=>{a&&this.scheduleRender()})])};g.castStyle=function(a){return"line"===a?a:"ruler"};g.castUnit=function(a){return"metric"===a||"dual"===a?a:"non-metric"};g.render=function(){var a="disabled"===this.get("viewModel.state");const b={["esri-disabled"]:a};let d,r;if(!a){const {unit:l,style:t}=this;a="metric"===
l||"dual"===l;if("non-metric"===l||"dual"===l){const m=this.viewModel.getScaleBarProperties(50,"non-metric");m&&(r="ruler"===t?this._renderRuler(m):this._renderLine(m,"bottom"))}a&&(a=this.viewModel.getScaleBarProperties(50,"metric"))&&(d="ruler"===t?this._renderRuler(a):this._renderLine(a,"top"))}return c.tsx("div",{afterCreate:this._handleRootCreateOrUpdate,afterUpdate:this._handleRootCreateOrUpdate,bind:this,class:this.classes("esri-scale-bar esri-widget",b)},d,r)};g._renderRuler=function(a){const b=
2*Math.round(a.length),{messages:d}=this;a=`${2*a.value} ${d[a.unit]||d.unknownUnit}`;return c.tsx("div",{class:this.classes("esri-scale-bar__bar-container","esri-scale-bar__bar-container--ruler"),key:"esri-scale-bar__ruler"},c.tsx("div",{class:"esri-scale-bar__ruler",styles:{width:`${b}px`}},c.tsx("div",{class:"esri-scale-bar__ruler-block"}),c.tsx("div",{class:"esri-scale-bar__ruler-block"}),c.tsx("div",{class:"esri-scale-bar__ruler-block"}),c.tsx("div",{class:"esri-scale-bar__ruler-block"})),c.tsx("div",
{class:this.classes("esri-scale-bar__label-container","esri-scale-bar__label-container--ruler")},c.tsx("div",{class:"esri-scale-bar__label"},"0"),c.tsx("div",{class:"esri-scale-bar__label"},a)))};g._renderLine=function(a,b){var {messages:d}=this;d=`${2*a.value} ${d[a.unit]||d.unknownUnit}`;d=c.tsx("div",{class:this.classes("esri-scale-bar__label-container","esri-scale-bar__label-container--line",{["esri-scale-bar__label-container--top"]:"top"===b,["esri-scale-bar__label-container--bottom"]:"bottom"===
b}),key:"esri-scale-bar__label"},c.tsx("div",{class:"esri-scale-bar__label"},d));a=2*Math.round(a.length);b=c.tsx("div",{class:this.classes("esri-scale-bar__line",{["esri-scale-bar__line--top"]:"top"===b,["esri-scale-bar__line--bottom"]:"bottom"===b}),key:"esri-scale-bar__line",styles:{width:`${a}px`}});return c.tsx("div",{class:this.classes("esri-scale-bar__bar-container","esri-scale-bar__bar-container--line"),key:"esri-scale-bar__line-container"},[b,d])};g._handleRootCreateOrUpdate=function(a){const b=
this.viewModel;b&&(a=a.getBoundingClientRect(),a=v.createScreenPoint(a.left+window.pageXOffset,a.top+window.pageYOffset),a.x!==b.scaleComputedFrom.x||a.y!==b.scaleComputedFrom.y)&&(b.scaleComputedFrom=a)};n._createClass(k,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"style",set:function(a){this._set("style","dual"===this.unit?"line":a)}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=
a}}]);return k}(x);f.__decorate([h.property()],e.prototype,"label",null);f.__decorate([h.property(),z.messageBundle("esri/widgets/ScaleBar/t9n/ScaleBar")],e.prototype,"messages",void 0);f.__decorate([h.property()],e.prototype,"style",null);f.__decorate([p.cast("style")],e.prototype,"castStyle",null);f.__decorate([h.property()],e.prototype,"unit",void 0);f.__decorate([p.cast("unit")],e.prototype,"castUnit",null);f.__decorate([h.property()],e.prototype,"view",null);f.__decorate([h.property()],e.prototype,
"viewModel",void 0);return e=f.__decorate([w.subclass("esri.widgets.ScaleBar")],e)});