// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Evented ../../../../../core/HandleOwner ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/quantityUtils ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/Point ../../../../../support/elevationInfoUtils ../../../../ViewingMode ../../Manipulator3D ../../manipulatorUtils ../../SnappingVisualizer3D ../manipulatorUtils ../visualElementUtils ../manipulations/config ../manipulations/MoveManipulation ../manipulations/moveUtils ./GraphicScaleRotateTransform ./ScaleRotateMeshAdapter ./ScaleRotateObjectSymbol3DAdapter ./undoRecords ../../../layers/graphics/GraphicState ../../../../interactive/InteractiveToolBase ../../../../interactive/editGeometry/EditGeometryOperations ../../../../interactive/sketch/SketchTooltipOptions ../../../../interactive/snapping/SnappingContext ../../../../interactive/snapping/SnappingDragPipelineStep ../../../../interactive/tooltip/Tooltip ../../../../interactive/tooltip/TranslateTooltipInfos ../../../../support/automaticLengthMeasurementUtils ../../../../support/euclideanLengthMeasurementUtils".split(" "),
function(e,w,k,E,F,G,c,x,r,m,ba,ca,H,I,y,J,K,L,M,z,N,O,n,P,Q,R,S,T,U,V,W,A,X,Y,Z,u,B,aa){e.GraphicTransformTool=function(C){function t(a){a=C.call(this,a)||this;a.enableZ=!0;a.enableRotation=!0;a.enableScaling=!0;a.tooltipOptions=new A;a.type="transform-3d";a._scaleRotate=null;a._snappingPipeline=new Y.SnappingPipeline;a._tooltip=null;return a}w._inheritsLoose(t,C);var f=t.prototype;f.initialize=function(){const {graphic:a,view:d}=this;this.graphicState=new U.GraphicState({graphic:a});this.addHandles(r.watch(()=>
this.tooltipOptions.enabled,b=>{this._tooltip=b?new Z.Tooltip({view:d}):c.destroyMaybe(this._tooltip)},r.syncAndInitial));this._moveManipulation=new n.MoveManipulation({tool:this,view:d,snapToScene:this.snapToScene,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:this.enableZ&&z.canMoveZ(a),radius:n.MoveManipulation.radiusForSymbol(a.symbol)});this._moveManipulation.forEachManipulator(b=>this.handles.add(b.events.on("immediate-click",g=>{this.emit("immediate-click",{...g,graphic:a});g.stopPropagation()})));
const p=b=>g=>{this.handles.add(g.events.on("focus-changed",({action:l})=>{const q=this._tooltip;c.isNone(q)||("focus"===l?this._updateMoveTooltip(b):q.clear())}))};this._moveManipulation.xyManipulation.forEachManipulator(p(n.ManipulationType.XY));this._moveManipulation.xyAxisManipulation.forEachManipulator(p(n.ManipulationType.XY_AXIS));this._moveManipulation.zManipulation.forEachManipulator(p(n.ManipulationType.Z));this._moveManipulation.elevationInfo=y.getGraphicEffectiveElevationInfo(a);const h=
a.geometry;this._moveManipulation.createGraphicDragPipeline((b,g,l,q,v)=>{c.isSome(h)&&b===n.ManipulationType.XY&&(l=l.next(this._snappingPipeline.createSnapDragEventPipelineStep({snappingContext:new X.SnappingContext({elevationInfo:y.getGraphicEffectiveElevationInfo(a),pointer:v,editGeometryOperations:W.EditGeometryOperations.fromGeometry(new I({spatialReference:h.spatialReference}),d.state.viewingMode),visualizer:new M.SnappingVisualizer3D,excludeFeature:a}),snappingManager:this.snappingManager,
updatingHandles:this.updatingHandles,cancel:q,useZ:!1}),this._snappingPipeline.next));return l=l.next(D=>{this._updateMoveTooltip(b,D);return D})},this.graphicState,b=>{const {action:g,graphic:l,dxScreen:q,dyScreen:v}=b;b={graphic:l,dxScreen:q,dyScreen:v};switch(g){case "start":this.emit("graphic-translate-start",b);this.emit("record-undo",{record:this._createGeometryUndoRecord()});break;case "update":this.emit("graphic-translate",b);break;case "end":this.emit("graphic-translate-stop",b)}});this._moveManipulation.angle=
c.isSome(this._scaleRotate)?this._scaleRotate.angle:0;this._scaleRotateAdapter=this._createScaleRotateAdapter();this.handles.add(r.watch(()=>this._scaleRotateAdapter.angle,()=>this._updateMoveAngle()));if(this.enableScaling||this.enableRotation)this._scaleRotate=new Q.GraphicScaleRotateTransform({tool:this,mode:this.enableScaling&&this.enableRotation?null:this.enableScaling?"scale":"rotate",adapter:this._scaleRotateAdapter,tooltipOptions:this.tooltipOptions}),this.handles.add(this._scaleRotate.events.on("scale-changed",
()=>this._onScaleChanged()));this.handles.add([N.createVisualElements({view:this.view,graphic:this.graphic,forEachManipulator:b=>this._forEachManipulator(b),onManipulatorsChanged:()=>G.makeHandle()}),this.graphicState.on("changed",()=>this._onGeometryChanged()),this._hideManipulatorsForGraphicState(),r.watch(()=>d.scale,()=>this._updateMoveAngle())]);this.handles.add(this.view.trackGraphicState(this.graphicState));this._onGeometryChanged();this._updateMoveAngle();this._forEachManipulator(b=>{b instanceof
K.Manipulator3D&&this.handles.add(b.events.on("grab-changed",()=>this._updateManipulatorsInteractive()))});this.finishToolCreation()};f.destroy=function(){this._tooltip=c.destroyMaybe(this._tooltip);this._moveManipulation.destroy();this._scaleRotate=c.destroyMaybe(this._scaleRotate);this._scaleRotateAdapter=c.destroyMaybe(this._scaleRotateAdapter);this._set("view",null);this._set("graphic",null)};f._updateManipulatorsInteractive=function(){c.isNone(this._scaleRotate)||(this._scaleRotate.interactive=
!this._moveManipulation.grabbing,this._moveManipulation.interactive=!this._scaleRotate.grabbing)};f._createScaleRotateAdapter=function(){return c.isSome(this.graphic.geometry)&&"mesh"===this.graphic.geometry.type?new R.ScaleRotateMeshAdapter({graphic:this.graphic,geometry:this.graphic.geometry,viewingMode:this.view.state.viewingMode}):new S.ScaleRotateObjectSymbol3DAdapter({graphic:this.graphic,sizeFilter:a=>this._enforceNonZeroSize(a),findLayerView:()=>this.view.allLayerViews.find(a=>a.layer===this.graphic.layer),
sizeAxis:c.isSome(this.tooltipOptions.visualVariables)&&c.isSome(this.tooltipOptions.visualVariables.size)?this.tooltipOptions.visualVariables.size.axis:null})};f._forEachManipulator=function(a){this._moveManipulation.forEachManipulator(a);c.isSome(this._scaleRotate)&&this._scaleRotate.forEachManipulator(a)};f._hideManipulatorsForGraphicState=function(){return r.watch(()=>this.graphicState.displaying,a=>{this._forEachManipulator(d=>d.available=a);this._moveManipulation.zManipulation.available=a&&
this.enableZ&&z.canMoveZ(this.graphic)})};f._createGeometryUndoRecord=function(){return T.createGraphicGeometryUndoRecord(this.graphic)};f.reset=function(){};f.onHide=function(){c.isSome(this._scaleRotate)&&this._scaleRotate.cancelActiveAnimation()};f._onScaleChanged=function(){if(!c.isNone(this._scaleRotate)){var a=this._scaleRotate.getScale();this._moveManipulation.displayScale=a}};f._updateMoveAngle=function(){this._moveManipulation.angle=this.view.state.viewingMode===J.ViewingMode.Local||this.view.scale<
O.ALIGN_ARROWS_SCALE_THRESHOLD?this._scaleRotateAdapter.angle:0};f._onGeometryChanged=function(){L.placeAtGraphic(this.view,this,this.graphic)};f._enforceNonZeroSize=function(a){return a||this.view.state.camera.computeRenderPixelSizeAt(this._moveManipulation.renderLocation)};f._updateMoveTooltip=function(a,d){const {tooltipOptions:p,_tooltip:h}=this;if(!c.isNone(h)){h.clear();var b=this.graphicState.isDraped?"on-the-ground":"absolute-height";switch(a){case n.ManipulationType.XY:h.info=new u.TranslateGraphicTooltipInfo({tooltipOptions:p});
this._updateMoveTooltipDistance(h.info,d,(g,l)=>B.autoHorizontalDistanceByElevationModeBetweenPoints(g,l,b));break;case n.ManipulationType.XY_AXIS:h.info=new u.TranslateGraphicXYTooltipInfo({tooltipOptions:p});this._updateMoveTooltipDistance(h.info,d,(g,l)=>{g=B.autoHorizontalDistanceByElevationModeBetweenPoints(g,l,b);return x.scale(g,P.axisConstrainedDragSign(d))});break;case n.ManipulationType.Z:h.info=new u.TranslateGraphicZTooltipInfo({tooltipOptions:p}),this._updateMoveTooltipDistance(h.info,
d,aa.verticalSignedDistanceBetweenPoints)}}};f._updateMoveTooltipDistance=function(a,d,p){if(c.isSome(d)&&"end"!==d.action){const {mapStart:h,mapEnd:b}=d;d=p(h,b);a.distance=c.isSome(d)?d:x.zeroMeters}};w._createClass(t,[{key:"snapToScene",set:function(a){this._moveManipulation&&(this._moveManipulation.snapToScene=a);this._set("snapToScene",a)}},{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"location",set:function(a){this._moveManipulation.location=a;c.isSome(this._scaleRotate)&&
(this._scaleRotate.location=a)}},{key:"elevationAlignedLocation",set:function(a){this._moveManipulation.elevationAlignedLocation=a;c.isSome(this._scaleRotate)&&(this._scaleRotate.elevationAlignedLocation=a)}},{key:"test",get:function(){return{discManipulator:this._moveManipulation.xyManipulation.test.discManipulator,zManipulator:this._moveManipulation.zManipulation.test.manipulator,ringManipulator:c.isSome(this._scaleRotate)?this._scaleRotate.test.ringManipulator:null,arrowManipulators:this._moveManipulation.xyAxisManipulation.test.arrowManipulators,
scaleRotateAdapter:this._scaleRotateAdapter,scaleRotateTransform:this._scaleRotate,tooltip:this._tooltip}}}]);return t}(F.HandleOwnerMixin(E.EventedMixin(V.InteractiveToolBase)));k.__decorate([m.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"view",void 0);k.__decorate([m.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"graphic",void 0);k.__decorate([m.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"enableZ",
void 0);k.__decorate([m.property()],e.GraphicTransformTool.prototype,"enableRotation",void 0);k.__decorate([m.property()],e.GraphicTransformTool.prototype,"enableScaling",void 0);k.__decorate([m.property({constructOnly:!0,type:A})],e.GraphicTransformTool.prototype,"tooltipOptions",void 0);k.__decorate([m.property()],e.GraphicTransformTool.prototype,"graphicState",void 0);k.__decorate([m.property({value:!1})],e.GraphicTransformTool.prototype,"snapToScene",null);k.__decorate([m.property({constructOnly:!0})],
e.GraphicTransformTool.prototype,"snappingManager",void 0);k.__decorate([m.property({readOnly:!0})],e.GraphicTransformTool.prototype,"type",void 0);k.__decorate([m.property({readOnly:!0})],e.GraphicTransformTool.prototype,"updating",null);e.GraphicTransformTool=k.__decorate([H.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransformTool")],e.GraphicTransformTool);Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});