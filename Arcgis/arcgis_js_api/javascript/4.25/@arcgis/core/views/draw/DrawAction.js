/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Evented.js";import o from"../../core/Handles.js";import{clone as e}from"../../core/lang.js";import{i,d as r,a as n,e as p}from"../../chunks/maybe.js";import{ignoreAbortErrors as a}from"../../core/promiseUtils.js";import{e as m}from"../../chunks/screenUtils.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import h from"../../layers/GraphicsLayer.js";import{m as u}from"../../chunks/dehydratedFeatures.js";import{V as j}from"../../chunks/ViewingMode.js";import{S as d}from"../../chunks/SnappingVisualizer2D.js";import{c as y,E as g,a as k,C as b}from"../../chunks/EditGeometryOperations.js";import{S as _}from"../../chunks/SnappingContext.js";import{S}from"../../chunks/SnappingOperation.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/Error.js";import"../../chunks/GraphicsCollection.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../core/HandleOwner.js";import"../../chunks/WatchUpdatingTracking.js";import"../../core/reactiveUtils.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/quantizationUtils.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/enums.js";import"../../chunks/settings.js";import"../../chunks/Settings2.js";import"../../chunks/vec4f64.js";import"../../chunks/plane.js";import"../../chunks/vector.js";import"../../chunks/ray.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/RightAngleSnappingHint.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/Scheduler.js";import"../../chunks/ObservableValue.js";import"../../chunks/debugFlags2.js";var f;let v=f=class extends s.EventedAccessor{constructor(t){super(t),this._hasZ=null,this._cursorScreenPoint=null,this._activePointerId=null,this._stagedVertexUnsnapped=null,this._lastVertexUnsnapped=null,this._handles=new o,this._viewHandlesKey="view-handles",this._undoRedoHandlesKey="undo-redo-handles",this._drawToolHandlesKey="draw-tool",this._nativeEventHistory={undoStack:[],redoStack:[]},this.interactiveUndoDisabled=!1,this.history=[],this.redoHistory=[],this.snapToScene=!1,this.view=null,this.elevationInfo=null,this.defaultZ=0,this._coordinateHelper=y(t.hasZ,!1,t.view.spatialReference),this._snappingManager=t.snappingManager,this._editGeometryOperations=new g(new k(t.editGeometryType??"polygon",this._coordinateHelper)),this._snappingGraphicsLayer=new h({id:f.SNAPPING_GRAPHICS_LAYER_ID,listMode:"hide",internal:!0}),this._snappingContext=new _({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:"mouse",visualizer:new d(this._snappingGraphicsLayer)}),this._activeComponent=new b(t.view.spatialReference,j.Local),this._editGeometryOperations.data.components.push(this._activeComponent)}normalizeCtorArgs(t){const s={...t};return delete s.editGeometryType,s}initialize(){this._snappingOperation=new S({view:this.view}),"2d"===this.view.type&&this.view.map.layers.add(this._snappingGraphicsLayer)}destroy(){this._handles.destroy(),this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy(),i(this._snappingManager)&&this._snappingManager.doneSnapping(),this._snappingOperation=r(this._snappingOperation),this._editGeometryOperations.destroy()}get _committedVertices(){return this._editGeometryOperations.data.components[0].vertices.map((t=>t.pos))}get vertices(){return i(this._stagedVertex)?[...this._committedVertices,this._coordinateHelper.pointToArray(this._stagedVertex)]:this._committedVertices}get hasZ(){return i(this._hasZ)?this._hasZ:"3d"===this.view.type}set hasZ(t){this._hasZ=t,this.notifyChange("hasZ")}get _stagedVertex(){return this._snappingOperation.stagedPoint}set _stagedVertex(t){this._snappingOperation.stagedPoint=e(t)}canUndo(){return this._editGeometryOperations.canUndo}canRedo(){return this._editGeometryOperations.canRedo}undo(){this.canUndo&&this._editGeometryOperations.undo()}redo(){this.canRedo&&this._editGeometryOperations.redo()}getCoordsFromScreenPoint(t){const s=this.screenToMap(t);return n(s)?null:s.hasZ?[s.x,s.y,s.z]:[s.x,s.y]}getCoordsAndPointFromScreenPoint(t){const s=this.screenToMap(t);return n(s)?null:s.hasZ?{vertex:[s.x,s.y,s.z],mapPoint:s}:{vertex:[s.x,s.y],mapPoint:s}}screenToMap(t){let s=null;if("3d"===this.view.type)if(this.hasZ){const o=p(this.elevationInfo,x);s=this.view.sceneIntersectionHelper.intersectElevationFromScreen(m(t.x,t.y),o,this._getGeometryZValue())}else{const o=p(this.elevationInfo,P);s=this.view.sceneIntersectionHelper.intersectElevationFromScreen(m(t.x,t.y),o,0),i(s)&&(s.z=void 0)}else s=this.view.toMap(t),i(s)&&(s.z=this.hasZ?this._getGeometryZValue():void 0);return s}_pushCursorVertex(t,s){const o=u(t[0],t[1],null,this.view.spatialReference);this._stagedVertexUnsnapped=o;const e=this._snappingManager;if(n(e))return this._stagedVertex=o,void s();a(this._snappingOperation.snap({point:o},e,this._snappingContext)).then((()=>{s()}))}_popCursorVertex(){this._stagedVertexUnsnapped=null,this._stagedVertex=null}_getGeometryZValue(){return this.defaultZ}_abortSnapping(){this._snappingOperation.abort()}_isDuplicateOfLastVertex(t){const s=this._editGeometryOperations.data.components[0].getLastVertex();if(i(s)&&t[0]===s[0]&&t[1]===s[1])return!0;const{x:o,y:e}=this._coordinateHelper.vectorToDehydratedPoint(t);return!(!i(this._lastVertexUnsnapped)||o!==this._lastVertexUnsnapped.x||e!==this._lastVertexUnsnapped.y)}_shouldHandlePointerEvent(t){return this._isPrimaryPointerAction(t)&&(n(this._activePointerId)||this._activePointerId===t.pointerId)}_vertexAddHandler(t){const s=i(this._stagedVertex)?this._coordinateHelper.pointToArray(this._stagedVertex):this.getCoordsFromScreenPoint(this._cursorScreenPoint);i(s)&&this._addVertex(s,t.native)}_drawCompleteHandler(t){this._completeDrawing(t.native)}_isPrimaryPointerAction(t){return"mouse"!==t.pointerType||0===t.button}};v.SNAPPING_GRAPHICS_LAYER_ID="DrawAction-snapping-graphics-layer",t([l({readOnly:!0})],v.prototype,"vertices",null),t([l({type:Boolean,nonNullable:!0})],v.prototype,"interactiveUndoDisabled",void 0),t([l({readOnly:!0})],v.prototype,"history",void 0),t([l({readOnly:!0})],v.prototype,"redoHistory",void 0),t([l()],v.prototype,"snapToScene",void 0),t([l()],v.prototype,"view",void 0),t([l()],v.prototype,"elevationInfo",void 0),t([l({nonNullable:!0})],v.prototype,"defaultZ",void 0),t([l()],v.prototype,"hasZ",null),t([l()],v.prototype,"_snappingOperation",void 0),t([l()],v.prototype,"_stagedVertex",null),v=f=t([c("esri.views.draw.DrawAction")],v);const x={mode:"absolute-height",offset:0},P={mode:"on-the-ground",offset:0},U=v;export{U as default};