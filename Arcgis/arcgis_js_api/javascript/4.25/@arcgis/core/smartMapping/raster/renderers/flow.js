/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import s from"../../../core/Error.js";import{i as r}from"../../../chunks/maybe.js";import t from"../../../renderers/support/AuthoringInfo.js";import o from"../../../renderers/support/AuthoringInfoVisualVariable.js";import{h as e,i}from"../../../chunks/rasterRendererHelper.js";import p from"../../../renderers/visualVariables/ColorVariable.js";import m from"../../../renderers/visualVariables/OpacityVariable.js";import n from"../../../renderers/visualVariables/SizeVariable.js";import{processRasterRendererParameters as l}from"../support/utils.js";import{c as a,g as u,a as c,b as j,d as h}from"../../../chunks/utils16.js";import{cloneScheme as y,getSchemes as d}from"../../symbology/flow.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/tslib.es6.js";import"../../../chunks/jsonMap.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/tracking.js";import"../../../chunks/ensureType.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../chunks/reader.js";import"../../../chunks/colorRamps.js";import"../../../rest/support/AlgorithmicColorRamp.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/common.js";import"../../../chunks/enumeration.js";import"../../../rest/support/ColorRamp.js";import"../../../rest/support/MultipartColorRamp.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../rasterRenderers.js";import"../../../renderers/ClassBreaksRenderer.js";import"../../../symbols.js";import"../../../symbols/CIMSymbol.js";import"../../../chunks/writer.js";import"../../../layers/support/fieldUtils.js";import"../../../chunks/arcadeOnDemand.js";import"../../../geometry.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../geometry/SpatialReference.js";import"../../../geometry/Point.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../symbols/Symbol.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils2.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/screenUtils.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils3.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../chunks/aaBoundingBox.js";import"../../../chunks/aaBoundingRect.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../core/urlUtils.js";import"../../../chunks/persistableUrlUtils.js";import"../../../symbols/LabelSymbol3D.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/collectionUtils.js";import"../../../portal/Portal.js";import"../../../kernel.js";import"../../../request.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../chunks/locale.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../core/Clonable.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/support/StyleOrigin.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/calloutUtils.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/support/Symbol3DVerticalOffset.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../renderers/Renderer.js";import"../../../renderers/mixins/VisualVariablesMixin.js";import"../../../renderers/visualVariables/RotationVariable.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../renderers/visualVariables/support/OpacityStop.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../Graphic.js";import"../../../PopupTemplate.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../chunks/date.js";import"../../../chunks/number.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/mixins/ChartMediaInfo.js";import"../../../popup/content/mixins/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/RelationshipContent.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/content/TextContent.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../support/actions/ActionBase.js";import"../../../core/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/projectionEllipsoid.js";import"../../../renderers/support/ClassBreakInfo.js";import"../../../chunks/commonProperties2.js";import"../../../symbols/support/jsonUtils.js";import"../../../chunks/symbolConversion.js";import"../../../renderers/FlowRenderer.js";import"../../../renderers/RasterColormapRenderer.js";import"../../../renderers/support/ColormapInfo.js";import"../../../chunks/colorRampUtils.js";import"../../../chunks/colorUtils2.js";import"../../../renderers/RasterShadedReliefRenderer.js";import"../../../renderers/RasterStretchRenderer.js";import"../../../chunks/stretchRendererUtils.js";import"../../../renderers/UniqueValueRenderer.js";import"../../../core/reactiveUtils.js";import"../../../chunks/diffUtils.js";import"../../../renderers/support/UniqueValue.js";import"../../../renderers/support/UniqueValueClass.js";import"../../../renderers/support/UniqueValueGroup.js";import"../../../renderers/support/UniqueValueInfo.js";import"../../../chunks/styleUtils2.js";import"../../../renderers/VectorFieldRenderer.js";import"../../../geometry/support/normalizeUtils.js";import"../../../chunks/normalizeUtilsCommon.js";import"../../../chunks/simplify.js";import"../../../chunks/utils4.js";import"../../../chunks/utils5.js";import"../../../chunks/vectorFieldUtils.js";import"../../../layers/support/PixelBlock.js";import"../../../chunks/pixelUtils.js";import"../../../chunks/utils6.js";import"../../../chunks/asyncUtils.js";import"../../../chunks/jsonUtils.js";import"../../../chunks/parser.js";import"../../../chunks/mat4f32.js";import"../../../chunks/mat4.js";import"../../../chunks/_commonjsHelpers.js";import"../../../chunks/assets.js";import"../../../chunks/ItemCache.js";import"../../../chunks/MemCache.js";import"../../../symbols/support/cimSymbolUtils.js";import"../../../chunks/utils7.js";import"../../../layers/support/Field.js";import"../../../chunks/domains.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/fieldType.js";import"../../../layers/support/RasterInfo.js";import"../../../chunks/generateRendererUtils.js";import"../../../chunks/stretchUtils.js";import"../../../rest/support/ImageHistogramParameters.js";import"../../../TimeExtent.js";import"../../../chunks/timeUtils.js";import"../../../layers/support/MosaicRule.js";import"../../../layers/support/DimensionalDefinition.js";import"../../../layers/support/RasterFunction.js";import"../../../chunks/numberUtils.js";import"../../../intl.js";import"../../../chunks/messages.js";import"../../../chunks/PointSizeSplatAlgorithm.js";import"../../../chunks/scaleUtils.js";import"../../../chunks/spatialStatistics.js";import"../../../chunks/binningUtils.js";import"../../../chunks/layerUtils2.js";import"../../../chunks/statsWorker.js";import"../../../chunks/quantizationUtils.js";import"../../../chunks/heatmapUtils.js";import"../../../chunks/vec4f64.js";import"../../../chunks/utils13.js";import"../../../core/workers/workers.js";import"../../../core/workers/Connection.js";import"../../../chunks/Queue.js";import"../../../core/workers/RemoteClient.js";import"../../../chunks/utils11.js";import"../../../chunks/basemapUtils.js";import"../../../Basemap.js";import"../../../chunks/loadAll.js";import"../../../portal/PortalItem.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../chunks/writeUtils.js";import"../../../chunks/layerUtils.js";import"../../../chunks/arcgisLayerUrl.js";import"../../../rest/support/Query.js";import"../../../chunks/DataLayerSource.js";import"../../../chunks/FullTextSearch.js";import"../../../rest/support/StatisticDefinition.js";import"../../statistics/support/predominanceUtils.js";import"../../../chunks/utils12.js";import"../../../renderers/support/jsonUtils.js";import"../../../renderers/DictionaryRenderer.js";import"../../../chunks/DictionaryLoader.js";import"../../../chunks/LRUCache.js";import"../../../renderers/DotDensityRenderer.js";import"../../../renderers/support/AttributeColorInfo.js";import"../../../renderers/HeatmapRenderer.js";import"../../../renderers/support/HeatmapColorStop.js";import"../../../renderers/PieChartRenderer.js";import"../../../renderers/SimpleRenderer.js";import"../../../chunks/executeQuery.js";import"../../../chunks/executeQueryJSON.js";import"../../../chunks/query.js";import"../../../chunks/pbfQueryUtils.js";import"../../../chunks/pbf.js";import"../../../chunks/OptimizedFeature.js";import"../../../chunks/OptimizedFeatureSet.js";import"../../../chunks/queryZScale.js";import"../../../chunks/zscale.js";import"../../../rest/support/FeatureSet.js";import"../../../chunks/executeQueryPBF.js";import"../../../chunks/featureConversionUtils.js";import"../../../rest/query/support/AttachmentInfo.js";import"../../../rest/support/AttachmentQuery.js";import"../../../rest/support/RelationshipQuery.js";import"../../../rest/support/TopFeaturesQuery.js";import"../../../rest/support/TopFilter.js";import"../../../chunks/Task.js";import"../../statistics/classBreaks.js";import"../../statistics/summaryStatistics.js";import"../../../views/support/colorUtils.js";import"../../symbology/color.js";import"../../../chunks/colors2.js";import"../../../chunks/symbologyUtils.js";import"../../../chunks/utils17.js";async function k(k){k=await async function(s){const r={...s};return r.theme||(r.theme="flow-line"),l(r)}(k);const b=e(k.layer.rasterInfo);if(!r(b))throw new s("flow-renderer:not-supported","Only vector data is supported");return async function(s,e){e.flowRepresentation&&(s.flowRepresentation=e.flowRepresentation);const l=await async function(s){let t=s.flowScheme,o=null,e=null;const i=await h(null,s.view);if(o=r(i.basemapId)?i.basemapId:null,e=r(i.basemapTheme)?i.basemapTheme:null,t)return{scheme:y(t),basemapId:o,basemapTheme:e};const p=d({basemap:o,basemapTheme:e,theme:s.theme,hasSizeVariable:s.hasSizeVariable});return p&&(t=p.primaryScheme,o=p.basemapId,e=p.basemapTheme),{scheme:t,basemapId:o,basemapTheme:e}}({theme:e.theme,flowScheme:e.flowScheme,view:e.view,hasSizeVariable:e.includeSizeVariable}),k=l.scheme;if(!k)throw a("flow-renderer:insufficient-info","Unable to find flow scheme");s.flowSpeed=k.flowSpeed,s.density=k.density,s.trailLength=k.trailLength,s.trailWidth=k.trailWidth,s.trailCap=k.trailCap,s.color=k.color;const b=[],f=[],S="Magnitude",g=e.layer.rasterInfo,U=!r(g.statistics)||"vector-magdir"!==g.dataType&&"vector-uv"!==g.dataType?{minMagnitude:0,maxMagnitude:10}:i(g.dataType,g.statistics);if(!U||null==U.minMagnitude||null==U.maxMagnitude)throw a("flow-renderer:insufficient-info","stats not available");const w={min:U.minMagnitude,max:U.maxMagnitude},C={min:w.min,max:null!=w.max?w.max/2:null},R=u(C,null,null,null),V=c(R,C,null);if(e.includeColorVariable){const s=j(k.colors,5);if(s.length<5)throw a("flow-renderer:insufficient-info","Flow scheme does not have enough colors");const r=new p({field:S,stops:V.map(((r,t)=>({value:r,color:s[t]})))});b.push(r);const t=new o({type:"color",minSliderValue:w.min,maxSliderValue:w.max,theme:"high-to-low"});f.push(t)}if(e.includeOpacityVariable){const s=new m({field:S,stops:[{value:V[0],opacity:k.minOpacity},{value:V[4],opacity:k.maxOpacity}]});b.push(s);const r=new o({type:"opacity",minSliderValue:w.min,maxSliderValue:w.max});f.push(r)}if(e.includeSizeVariable){const s=new n({field:S,stops:[{value:w.min,size:k.minSize},{value:w.max,size:k.maxSize}]});b.push(s);const r=new o({type:"size",minSliderValue:w.min,maxSliderValue:w.max,theme:"high-to-low"});f.push(r)}const I=new t({type:"flow",visualVariables:f.length?f:null,flowTheme:k.theme});return s.visualVariables=b,s.authoringInfo=I,s.legendOptions=e.legendOptions,{renderer:s,visualVariables:b.map((s=>s.clone())),flowScheme:y(k),basemapId:l.basemapId,basemapTheme:l.basemapTheme,layerEffect:k.layerEffect,statistics:w}}(b,k)}export{k as createRenderer};