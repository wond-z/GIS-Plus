/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import i from"../../core/Accessor.js";import{c as s}from"../../chunks/asyncUtils.js";import"../../chunks/object.js";import o from"../../core/Handles.js";import{f as r,i as n,d as a,e as l,a as d,m as c,g as u}from"../../chunks/maybe.js";import{after as h,throwIfAborted as p}from"../../core/promiseUtils.js";import{watch as m,syncAndInitial as _}from"../../core/reactiveUtils.js";import{c as w,e as v,d as y}from"../../chunks/screenUtils.js";import{c as f,d as g}from"../../chunks/timeUtils.js";import{property as T}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as j}from"../../core/accessorSupport/decorators/subclass.js";import{d as P}from"../../chunks/vec3.js";import{l as k}from"../../chunks/earthUtils.js";import{f as b,S as D}from"../../chunks/ShadowCastVisualizeTechniqueConfiguration.js";import O from"../../core/Collection.js";import{r as S}from"../../chunks/collectionUtils.js";import{m as V}from"../../chunks/handleUtils.js";import{t as U}from"../../chunks/throttle.js";import{b as C}from"../../chunks/traversalUtils.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/Error.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../geometry/SpatialReference.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/mat4.js";import"../../chunks/mat4f64.js";import"../../chunks/ViewingMode.js";import"../../chunks/mathUtils2.js";import"../../chunks/ShaderTechniqueConfiguration.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";var z;!function(e){e.Disabled="disabled",e.Ready="ready"}(z||(z={}));let A=class extends i{constructor(){super({}),this.color=new t([50,50,50,.7]),this.intervalOptions=new O([f(15,"minutes","milliseconds"),f(30,"minutes","milliseconds"),f(1,"hours","milliseconds"),f(2,"hours","milliseconds"),f(3,"hours","milliseconds")]),this.interval=this.intervalOptions.getItemAt(0)}set intervalOptions(e){this._set("intervalOptions",S(e,this._get("intervalOptions")))}};e([T({type:t})],A.prototype,"color",void 0),e([T()],A.prototype,"interval",void 0),e([T({type:O})],A.prototype,"intervalOptions",null),A=e([j("esri.widgets.ShadowCast.DiscreteOptions")],A);const E=A;var x;!function(e){e.Continuous="continuous",e.Hourly="hourly"}(x||(x={}));let M=class extends i{constructor(){super(...arguments),this.color=new t([0,0,255,.7]),this.mode=x.Continuous}};e([T({type:t})],M.prototype,"color",void 0),e([T()],M.prototype,"mode",void 0),M=e([j("esri.widgets.ShadowCast.DurationOptions")],M);const R=M;var N;!function(e){e.PointerMove="pointer-move",e.Main="main"}(N||(N={}));let G=class extends i{constructor(e){super(e),this._handles=new o,this._screenPoint=null,this._accumulatedShadowTime=null,this._shadowTimeTask=null,this._updateAccumulatedShadowTime=(e,t)=>{this._shadowTimeTask=r(this._shadowTimeTask),this._shadowTimeTask=s((async i=>{const{results:s,ground:o}=await e.hitTest(t);if(0===s.length&&!o.mapPoint)return void(this._accumulatedShadowTime=null);const r=await this.getDuration(t,i);this._accumulatedShadowTime=r}))},this._throttledUpdateAccumulatedShadowTime=U(this._updateAccumulatedShadowTime,300)}initialize(){this._handles.add(m((()=>({enabled:this.enabled,view:this.view})),(({enabled:e,view:t})=>{e&&n(t)?this._startTracking(t):this._stopTracking()}),_))}destroy(){this._handles=a(this._handles)}get screenPoint(){return this.enabled?this._screenPoint:null}get accumulatedShadowTime(){return this.enabled?this._accumulatedShadowTime:null}get testData(){return{setThrottleDelay:e=>{this._throttledUpdateAccumulatedShadowTime.remove(),this._throttledUpdateAccumulatedShadowTime=U(this._updateAccumulatedShadowTime,e)}}}_startTracking(e){const t=this._handles;if(t.has(N.Main))return;const i=()=>{t.has(N.PointerMove)||t.add(e.on("pointer-move",(t=>{const i=w(t.x,t.y);this._screenPoint=i,this._throttledUpdateAccumulatedShadowTime(e,i)})),N.PointerMove)},s=()=>{t.remove(N.PointerMove),this._screenPoint=null,this._accumulatedShadowTime=null};t.add([this._throttledUpdateAccumulatedShadowTime,e.on("pointer-enter",i),e.on("pointer-leave",s),e.on("pointer-down",s),e.on("pointer-drag",s),e.on("pointer-up",i),e.on("click",(t=>{const i=w(t.x,t.y);this._screenPoint=i,this._updateAccumulatedShadowTime(e,i)})),V((()=>{this._shadowTimeTask=r(this._shadowTimeTask)}))],N.Main),i()}_stopTracking(){this._handles.remove(N.Main)}};var F;e([T()],G.prototype,"getDuration",void 0),e([T()],G.prototype,"view",void 0),e([T()],G.prototype,"enabled",void 0),e([T()],G.prototype,"screenPoint",null),e([T()],G.prototype,"accumulatedShadowTime",null),e([T()],G.prototype,"_screenPoint",void 0),e([T()],G.prototype,"_accumulatedShadowTime",void 0),e([T()],G.prototype,"_shadowTimeTask",void 0),G=e([j("esri.widgets.ShadowCast.ShadowTooltipViewModel")],G),function(e){e.Threshold="threshold",e.Duration="duration",e.Discrete="discrete"}(F||(F={})),F.Threshold,F.Duration,F.Discrete;let H=class extends i{constructor(){super(...arguments),this.color=new t([255,0,0,.7]),this.value=f(4,"hours","milliseconds"),this.minValue=0,this.maxValue=f(8,"hours","milliseconds")}};e([T({type:t})],H.prototype,"color",void 0),e([T()],H.prototype,"value",void 0),e([T()],H.prototype,"minValue",void 0),e([T()],H.prototype,"maxValue",void 0),H=e([j("esri.widgets.ShadowCast.ThresholdOptions")],H);const L=H,B=[],q=P(),I=[],J=f(1,"hours","milliseconds");let W=class extends i{constructor(e){super(e),this.view=null,this.tooltip=new G({getDuration:(e,t)=>this.getDuration(e,t)}),this.startTimeOfDay=f(10,"hours","milliseconds"),this.endTimeOfDay=f(16,"hours","milliseconds"),this.visualizationType=F.Threshold,this.thresholdOptions=new L,this.durationOptions=new R,this.discreteOptions=new E,this._running=!0,this._handles=new o,this._stopPreviewingTask=null,this._forcePreview=null,this._autoRestoreForcePreviewEnabled=!0,this._utcOffset=null,this.date=new Date}initialize(){this._handles.add([m((()=>({view:this.view,tooltipEnabled:this._tooltipEnabled})),(({view:e,tooltipEnabled:t})=>{this.tooltip.view=e,this.tooltip.enabled=t}),_),m((()=>this._forcePreviewDependencies),(()=>{r(this._stopPreviewingTask),this._forcePreview=!0,this._autoRestoreForcePreviewEnabled&&(this._stopPreviewingTask=s((async e=>{await h(500,e),p(e),this._forcePreview=!1})))}),_),m((()=>({renderView:this.renderView,parameters:this._visualizationParameters})),K,_),m((()=>({renderView:this.renderView,parameters:{lightDirections:this._lightDirections}})),K,_),m((()=>({renderView:this.renderView,parameters:{enabled:this._running}})),K,_),m((()=>({renderView:this.renderView,parameters:{previewing:this._previewing}})),K,_)])}destroy(){this.stop(),this._handles=a(this._handles),a(this.tooltip)}get state(){return n(this.view)&&this.view.ready&&n(this._referencePosition)?z.Ready:z.Disabled}set date(e){const t=new Date(e);t.setHours(0,0,0,0),this._set("date",t)}get utcOffset(){return l(this._utcOffset,this._utcOffsetAuto)}set utcOffset(e){this._utcOffset=e}get testData(){return{setAutoRestoreForcedPreviewEnabled:e=>{this._autoRestoreForcePreviewEnabled=e},setForcedPreview:e=>{this._forcePreview=e},isPreviewing:()=>this._previewing}}get _previewing(){const{view:e}=this;return!(!d(e)&&!d(e.allLayerViews))||this._forcePreview||!e.stationary||e.allLayerViews.some((e=>Q(e)&&e.updating))}get _utcOffsetAuto(){const e=this._referencePosition;return c(e,0,(e=>k(e[0],!1)))}get _dateUTCOffset(){let e=this.date;return e=g(e,-e.getTimezoneOffset(),"minutes"),e=g(e,-this.utcOffset,"hours"),e}get _startDateTimeUTC(){return g(this._dateUTCOffset,this.startTimeOfDay)}get _endDateTimeUTC(){return g(this._dateUTCOffset,this.endTimeOfDay)}get _referencePosition(){return u(this.view,(e=>u(e.environmentManager,(e=>e.referencePositionWGS84Comparable))))}get _interval(){const e=this._duration>0?Math.floor(this._duration/255):255,t=this.discreteOptions.interval;switch(this.visualizationType){case F.Threshold:case F.Duration:return e;case F.Discrete:return t>0?t:e}}get _sampleCount(){return this._lightDirections.length}get _duration(){return this.endTimeOfDay-this.startTimeOfDay}get _lightDirections(){const{view:e}=this;if(d(e))return B;const t="global"===e.viewingMode?q:this._referencePosition;if(d(t))return B;const i=this._interval,s=b(this._startDateTimeUTC,this._endDateTimeUTC,i,t,e.state.viewingMode),o=s.length;I.length=0;const r=C(0,o,I),n=new Array(o);for(let e=0;e<o;++e)n[e]=s[r[e]];return n}get _tooltipEnabled(){return this.state===z.Ready&&this.visualizationType!==F.Discrete&&this._running&&!this._previewing}get _visualizationParameters(){if(!this._running)return null;switch(this.visualizationType){case F.Threshold:return this._thresholdVisualizationParameters;case F.Duration:return this._durationVisualizationParameters;case F.Discrete:return this._discreteVisualizationParameters}}get _thresholdVisualizationParameters(){const{value:e,color:i}=this.thresholdOptions,s=this._duration;return{visualization:D.Threshold,color:t.toUnitRGBA(i),threshold:s>0?e/this._duration:0}}get _durationVisualizationParameters(){const{color:e,mode:i}=this.durationOptions,s=this._duration,o=s>0&&i===x.Hourly?J/s:0;return{color:t.toUnitRGBA(e),visualization:D.Gradient,bandsEnabled:o>0,bandSize:o}}get _discreteVisualizationParameters(){return{color:t.toUnitRGBA(this.discreteOptions.color),visualization:D.Gradient,bandsEnabled:!1,bandSize:0}}get _forcePreviewDependencies(){const{view:e}=this;if(d(e))return null;const t=e.slicePlane,i=e.allLayerViews.toArray().filter(Q),s=i.map((e=>e.layer)).filter(n),o=i.map((e=>e.visible)),r=s.map((e=>e.visible)),a=s.map((e=>e.opacity)),l=s.filter((e=>"definitionExpression"in e)).map((e=>e.definitionExpression)),c=i.filter((e=>"filter"in e)).map((e=>e.filter));return{slicePlane:t,startDateUTC:this._startDateTimeUTC,endDateUTC:this._endDateTimeUTC,layerViewVisibilities:o,layerVisibilities:r,layerOpacities:a,filters:c,definitionExpressions:l}}get renderView(){const{view:e}=this;if(d(e))return null;const t=e._stage;return d(t)?null:t.renderView}start(){this._running=!0}stop(){this._running=!1}setRunning(e){this._running=e}async getDuration(e,t){const{view:i,renderView:s}=this;if(d(i)||d(s))return 0;const o=i.state.camera.screenToRender(v(e.x,e.y),y()),r=s.readAccumulatedShadow(o),n=this._sampleCount;return 0===n?0:r*n*(this._duration/n)}};function K({renderView:e,parameters:t}){n(e)&&n(t)&&e.setRenderParameters({shadowCastOptions:t})}function Q(e){if(e.suspended)return!1;switch(e.type){case"building-scene-3d":case"csv-3d":case"elevation-3d":case"feature-3d":case"geojson-3d":case"graphics-3d":case"integrated-mesh-3d":case"ogc-feature-3d":case"route-3d":case"scene-layer-3d":case"scene-layer-graphics-3d":case"stream-3d":case"wms-3d":return!0;case"base-dynamic-3d":case"dimension-3d":case"imagery-3d":case"imagery-tile-3d":case"line-of-sight-3d":case"map-image-3d":case"point-cloud-3d":case"tile-3d":case"vector-tile-3d":case"voxel-3d":case"wfs-3d":case"wmts-3d":case"media-3d":default:return!1;case"group":return e.layerViews.toArray().some((e=>Q(e)))}}e([T()],W.prototype,"state",null),e([T()],W.prototype,"view",void 0),e([T()],W.prototype,"tooltip",void 0),e([T({nonNullable:!0})],W.prototype,"date",null),e([T({nonNullable:!0})],W.prototype,"utcOffset",null),e([T({nonNullable:!0})],W.prototype,"startTimeOfDay",void 0),e([T({nonNullable:!0})],W.prototype,"endTimeOfDay",void 0),e([T({nonNullable:!0})],W.prototype,"visualizationType",void 0),e([T({type:L,nonNullable:!0})],W.prototype,"thresholdOptions",void 0),e([T({type:R,nonNullable:!0})],W.prototype,"durationOptions",void 0),e([T({type:E,nonNullable:!0})],W.prototype,"discreteOptions",void 0),e([T()],W.prototype,"_running",void 0),e([T()],W.prototype,"_handles",void 0),e([T()],W.prototype,"_stopPreviewingTask",void 0),e([T()],W.prototype,"_forcePreview",void 0),e([T()],W.prototype,"_autoRestoreForcePreviewEnabled",void 0),e([T()],W.prototype,"_previewing",null),e([T()],W.prototype,"_utcOffset",void 0),e([T()],W.prototype,"_utcOffsetAuto",null),e([T()],W.prototype,"_dateUTCOffset",null),e([T()],W.prototype,"_startDateTimeUTC",null),e([T()],W.prototype,"_endDateTimeUTC",null),e([T()],W.prototype,"_referencePosition",null),e([T()],W.prototype,"_interval",null),e([T()],W.prototype,"_sampleCount",null),e([T()],W.prototype,"_duration",null),e([T()],W.prototype,"_lightDirections",null),e([T()],W.prototype,"_tooltipEnabled",null),e([T()],W.prototype,"_visualizationParameters",null),e([T()],W.prototype,"_thresholdVisualizationParameters",null),e([T()],W.prototype,"_durationVisualizationParameters",null),e([T()],W.prototype,"_discreteVisualizationParameters",null),e([T()],W.prototype,"_forcePreviewDependencies",null),e([T()],W.prototype,"renderView",null),W=e([j("esri.widgets.ShadowCast.ShadowCastViewModel")],W);const X=W;export{x as D,z as S,F as a,X as default};