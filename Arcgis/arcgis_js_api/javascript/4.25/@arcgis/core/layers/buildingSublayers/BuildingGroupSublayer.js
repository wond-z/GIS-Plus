/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import r from"../../core/Collection.js";import{a as o}from"../../chunks/loadAll.js";import{W as t,subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import p from"./BuildingComponentSublayer.js";import m from"./BuildingSublayer.js";import"../../chunks/ArrayPool.js";import"../../core/Evented.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../core/reactiveUtils.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../renderers/support/jsonUtils.js";import"../FeatureLayer.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../core/sql.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../chunks/domains.js";import"../support/CodedValueDomain.js";import"../support/Domain.js";import"../support/InheritedDomain.js";import"../support/RangeDomain.js";import"../Layer.js";import"../../core/HandleOwner.js";import"../../chunks/WatchUpdatingTracking.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/assets.js";import"../../intl.js";import"../../chunks/messages.js";import"../../chunks/editsZScale.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../support/Field.js";import"../../chunks/fieldType.js";import"../mixins/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../mixins/CustomParametersMixin.js";import"../../chunks/EditBusLayer.js";import"../mixins/FeatureEffectLayer.js";import"../support/FeatureEffect.js";import"../support/FeatureFilter.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../rest/support/Query.js";import"../../chunks/DataLayerSource.js";import"../../chunks/FullTextSearch.js";import"../../rest/support/StatisticDefinition.js";import"../mixins/FeatureLayerBase.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/commonProperties.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../support/GeometryFieldsInfo.js";import"../support/LayerFloorInfo.js";import"../support/Relationship.js";import"../mixins/FeatureReductionLayer.js";import"../support/AggregateField.js";import"../support/ExpressionInfo.js";import"../../chunks/FeatureReduction.js";import"../support/FeatureReductionBinning.js";import"../support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../support/FeatureReductionCluster.js";import"../support/FeatureReductionSelection.js";import"../../chunks/clusterUtils.js";import"../../chunks/OperationalLayer.js";import"../mixins/OrderedLayer.js";import"../mixins/PortalLayer.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../mixins/PublishableLayer.js";import"../support/PublishingInfo.js";import"../mixins/RefreshableLayer.js";import"../mixins/ScaleRangeLayer.js";import"../mixins/TemporalLayer.js";import"../../TimeInterval.js";import"../support/TimeInfo.js";import"../support/TimeReference.js";import"../support/FeatureTemplate.js";import"../support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../support/FieldsIndex.js";import"../../chunks/labelingInfo.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../support/popupUtils.js";import"../../chunks/capabilities.js";import"../../chunks/I3SIndexInfo.js";import"../../chunks/I3SLayerDefinitions.js";import"../../chunks/I3SUtil.js";import"../../chunks/mat3.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quat.js";import"../../chunks/I3SBinaryReader.js";import"../../chunks/VertexAttribute.js";import"../../chunks/quatf64.js";import"../../geometry/projection.js";import"../../chunks/pe.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/ViewingMode.js";import"../../chunks/edgeUtils.js";import"../../chunks/symbolColorUtils.js";import"../../chunks/vec3f32.js";import"../../chunks/plane.js";import"../../chunks/vector.js";import"../../chunks/ray.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/vec2f64.js";import"../../chunks/mathUtils2.js";import"../../chunks/popupUtils.js";var n;const u={type:r,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:l}}},read:!1}};function l(s,o,e){if(s&&Array.isArray(s))return new r(s.map((s=>{const r=function(s){return"group"===s.layerType?a:p}(s);if(r){const o=new r;return o.read(s,e),o}return e&&e.messages&&s&&e.messages.push(new t("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(s.type||"unknown")+"' are not supported",{definition:s,context:e})),null})))}let a=n=class extends m{constructor(s){super(s),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return o(this,(s=>n.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&s(r)}))))}};s([i({type:["hide","show","hide-children"],json:{write:!0}})],a.prototype,"listMode",void 0),s([i(u)],a.prototype,"sublayers",void 0),a=n=s([e("esri.layers.buildingSublayers.BuildingGroupSublayer")],a),function(s){s.sublayersProperty=u,s.readSublayers=l,s.forEachSublayer=function s(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&s(r.sublayers,o)}))}}(a||(a={}));const j=a;export{j as default};