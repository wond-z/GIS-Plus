/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import{clone as s}from"../../core/lang.js";import{i as r}from"../../chunks/maybe.js";import{f as o}from"../../chunks/messages.js";import i,{A as t,a as n}from"../../renderers/support/AuthoringInfo.js";import{createRenderer as l}from"./type.js";import{b as a,f as p,v as m,d as u}from"../../chunks/utils16.js";import{v as c}from"../../chunks/binningUtils.js";import{b as d,f as j,c as h,g as y}from"../../chunks/layerUtils2.js";import{getColors as f,cloneScheme as b,getSchemes as k,flatten2DArray as g}from"../symbology/relationship.js";import{c as S}from"../../chunks/utils6.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/promiseUtils.js";import"../../chunks/locale.js";import"../../chunks/tslib.es6.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/reader.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/enumeration.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/LegendOptions.js";import"../../renderers/PointCloudRGBRenderer.js";import"../../renderers/PointCloudStretchRenderer.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/writer.js";import"../../renderers/PointCloudUniqueValueRenderer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/Renderer.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../core/reactiveUtils.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/utils15.js";import"../../chunks/numberUtils.js";import"../../intl.js";import"../../chunks/assets.js";import"../heuristics/sizeRange.js";import"../../chunks/scaleUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/spatialStatistics.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/statsWorker.js";import"../../chunks/quantizationUtils.js";import"../../chunks/utils13.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/utils11.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/FullTextSearch.js";import"../../rest/support/StatisticDefinition.js";import"../statistics/support/predominanceUtils.js";import"../../chunks/utils12.js";import"../../chunks/executeQuery.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils4.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils5.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../chunks/executeQueryPBF.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/Task.js";import"../statistics/uniqueValues.js";import"../symbology/type.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils17.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../statistics/classBreaks.js";import"../statistics/summaryStatistics.js";import"../../views/support/colorUtils.js";const v=["equal-interval","natural-breaks","quantile"],I=["HH","HL","LH","LL"],w={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]},C={2:["L","H"],3:["L","M","H"],4:["L","M1","M2","H"]},M=e=>({minValue:e.minValue,maxValue:e.maxValue});function V(e,r){const o=s(w[e]);return g(o,r)}function U(e,s,r,o){const{field:i,normalizationField:t}=e,{field:n,normalizationField:l}=s,a=r.map((e=>[e.minValue,e.maxValue])),p=o.map((e=>[e.minValue,e.maxValue])),m=a.length,u=C[m];return`\n  var field1 = $feature['${i}'];\n  var field2 = $feature['${n}'];\n  var hasNormField1 = ${t?"true":"false"};\n  var hasNormField2 = ${l?"true":"false"};\n  var normField1 = ${t?`$feature['${t}']`:"null"};\n  var normField2 = ${l?`$feature['${l}']`:"null"};\n\n  if (\n    IsEmpty(field1) ||\n    IsEmpty(field2) ||\n    (hasNormField1 && (IsEmpty(normField1) || normField1 == 0)) ||\n    (hasNormField2 && (IsEmpty(normField2) || normField2 == 0))\n  ) {\n    return null;\n  }\n\n  var value1 = IIf(hasNormField1, (field1 / normField1), field1);\n  var value2 = IIf(hasNormField2, (field2 / normField2), field2);\n\n  var breaks1 = ${JSON.stringify(a)};\n  var breaks2 = ${JSON.stringify(p)};\n  var classCodes = ${JSON.stringify(u)};\n\n  function getClassCode(value, breaks) {\n    var code = null;\n\n    for (var i in breaks) {\n      var info = breaks[i];\n      if (value >= info[0] && value <= info[1]) {\n        code = classCodes[i];\n        break;\n      }\n    }\n\n    return code;\n  }\n\n  var code1 = getClassCode(value1, breaks1);\n  var code2 = getClassCode(value2, breaks2);\n\n  var classValue = IIf(IsEmpty(code1) || IsEmpty(code2), null, code1 + code2);\n  return classValue;\n  `}async function L(s){const r=await async function(s){if(!(s&&s.renderer&&s.numClasses))throw new e("update-relationship-renderer:missing-parameters","'renderer' and 'numClasses' parameters are required");const{field1:r,field2:o,renderer:i,numClasses:t,colors:n}=s,l=t**2;if((r||o)&&!(r&&o&&r.field&&o.field))throw new e("update-relationship-renderer:missing-parameters","'field1' and 'field2' parameters are required");if(r&&!r.classBreakInfos||o&&!o.classBreakInfos)throw new e("update-relationship-renderer:missing-parameters","'field1.classBreakInfos' and 'field2.classBreakInfos' are required");if(!i.authoringInfo)throw new e("update-relationship-renderer:missing-parameters","'renderer.authoringInfo' is required");if(i.uniqueValueInfos.length!==l)throw new e("update-relationship-renderer:invalid-parameters",`Renderer must have ${l} unique value infos to support ${t} classes`);if(n&&n.length!==l)throw new e("update-relationship-renderer:invalid-parameters",`The scheme must have ${l} colors`);return s}(s),{field1:o,field2:i,renderer:l,numClasses:p,focus:m,colors:u}=r,c=l.clone();if(c.valueExpression=U(o,i,o.classBreakInfos,i.classBreakInfos),function(e,s,r){const o=V(s,r);e.sort(((e,s)=>{const r=o.indexOf(e.value),i=o.indexOf(s.value);let t=0;return r<i?t=-1:r>i&&(t=1),t}))}(c.uniqueValueInfos,p,m),u){const e=a(u,u.length);c.uniqueValueInfos.forEach(((s,r)=>S(s.symbol,e[r])))}return function(e,s){const{authoringInfo:r}=e;r.numClasses=s.numClasses,r.focus=s.focus||null,r.focus||delete r.focus;const{field1:o,field2:i}=s;r.field1=new t({field:o.field,normalizationField:o.normalizationField,label:o.label,classBreakInfos:o.classBreakInfos.map((e=>new n(M(e))))}),r.field2=new t({field:i.field,normalizationField:i.normalizationField,label:i.label,classBreakInfos:i.classBreakInfos.map((e=>new n(M(e))))}),e.authoringInfo=r}(c,r),c}async function F(s){const t=await async function(s){if(!(s&&s.layer&&s.view&&s.field1&&s.field2))throw new e("relationship-renderer:missing-parameters","'layer', 'view', 'field1' and 'field2' parameters are required");s.forBinning&&c(s,"relationship-renderer");const o={...s};if(o.symbolType=o.symbolType||"2d",o.defaultSymbolEnabled=null==o.defaultSymbolEnabled||o.defaultSymbolEnabled,o.classificationMethod=o.classificationMethod||"quantile",o.numClasses=o.numClasses||3,o.focus=o.focus||null,!v.includes(o.classificationMethod))throw new e("relationship-renderer:invalid-parameters",`classification method ${o.classificationMethod} is not supported`);if(o.numClasses<2||o.numClasses>4)throw new e("relationship-renderer:invalid-parameters","'numClasses' must be 2, 3 or 4");if(s.focus&&!I.includes(s.focus))throw new e("relationship-renderer:invalid-parameters","'focus' must be 'HH', 'HL', 'LH', 'LL' or null");const i=s.forBinning?d:j,t=h(o.layer,i,s.forBinning);if(o.layer=t,!t)throw new e("relationship-renderer:invalid-parameters","'layer' must be one of these types: "+y(i).join(", "));const n=r(o.signal)?{signal:o.signal}:null;await t.load(n);const l=t.geometryType,a=o.symbolType.includes("3d");if(o.outlineOptimizationEnabled="polygon"===l&&o.outlineOptimizationEnabled,o.sizeOptimizationEnabled=("point"===l||"multipoint"===l||"polyline"===l)&&o.sizeOptimizationEnabled,"mesh"===l)o.symbolType="3d-volumetric",o.colorMixMode=o.colorMixMode||"replace",o.edgesType=o.edgesType||"none";else{if("3d-volumetric-uniform"===o.symbolType&&"point"!==l)throw new e("relationship-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(a&&"polygon"===l)throw new e("relationship-renderer:not-supported","3d symbols are not supported for polygon layers");if(o.symbolType.includes("3d-volumetric")&&(!o.view||"3d"!==o.view.type))throw new e("relationship-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const{field1:p,field2:u}=o,f=[p.field,u.field];p.normalizationField&&f.push(p.normalizationField),u.normalizationField&&f.push(u.normalizationField);const b=m(t,f,"relationship-renderer:invalid-parameters");if(b)throw b;return o}(s),{layer:n,classificationMethod:a,field1:g,field2:S,numClasses:w,view:C,signal:L}=t,F={layer:n,classificationMethod:a,field:g.field,normalizationField:g.normalizationField,normalizationType:g.normalizationField?"field":null,minValue:g.minValue,maxValue:g.maxValue,analyzeData:!(null!=g.minValue&&null!=g.maxValue),numClasses:w,view:C,signal:L},z={layer:n,classificationMethod:a,field:S.field,normalizationField:S.normalizationField,normalizationType:S.normalizationField?"field":null,minValue:S.minValue,maxValue:S.maxValue,analyzeData:!(null!=S.minValue&&null!=S.maxValue),numClasses:w,view:C,signal:L},[T,x]=await Promise.all([p(F),p(z)]);if(!T||!x)throw new e("relationship-renderer:error","error when calculating class breaks");return async function(s,t,n){const a=await o("esri/smartMapping/t9n/smartMapping"),{basemap:p,classificationMethod:m,field1:c,field2:d,focus:j,numClasses:h,signal:y}=s,g=s.layer,S=t.classBreakInfos,v=n.classBreakInfos;if(h!==S.length||S.length!==v.length)throw new e("relationship-renderer:error","incompatible class breaks");const I=function(e,s){return V(e,s).map((e=>({value:e,count:0})))}(h,j),w=U(s.field1,s.field2,S,v),C=await async function(e){let s=e.relationshipScheme,o=null,i=null;const t=await u(e.basemap,e.view);if(o=r(t.basemapId)?t.basemapId:null,i=r(t.basemapTheme)?t.basemapTheme:null,s)return{scheme:b(s),basemapId:o,basemapTheme:i};const n=k({basemap:o,basemapTheme:i,geometryType:e.geometryType,theme:e.theme,worldScale:e.worldScale,view:e.view});return n&&(s=n.primaryScheme,o=n.basemapId,i=n.basemapTheme),{scheme:s,basemapId:o,basemapTheme:i}}({basemap:p,geometryType:g.geometryType,theme:"default",relationshipScheme:s.relationshipScheme,worldScale:s.symbolType.includes("3d-volumetric"),view:s.view}),L=C.scheme,F=await l({layer:g,basemap:p,valueExpression:w,valueExpressionTitle:a.relationship.legendTitle,numTypes:-1,sortEnabled:!1,defaultSymbolEnabled:s.defaultSymbolEnabled,typeScheme:{colors:f(L,h,j),...L},statistics:{uniqueValueInfos:I},legendOptions:s.legendOptions,outlineOptimizationEnabled:s.outlineOptimizationEnabled,sizeOptimizationEnabled:s.sizeOptimizationEnabled,symbolType:s.symbolType,colorMixMode:s.colorMixMode,edgesType:s.edgesType,view:s.view,signal:y}),z=F.renderer,T=z.uniqueValueInfos,x=a.relationship;for(const e of T)e.label=x[e.value];const D=new i({type:"relationship",classificationMethod:m,numClasses:h,focus:j,field1:{field:c.field,normalizationField:c.normalizationField,label:c.label,classBreakInfos:S.map(M)},field2:{field:d.field,normalizationField:d.normalizationField,label:d.label,classBreakInfos:v.map(M)}});return z.authoringInfo=D,{renderer:z,classBreaks:{field1:t,field2:n},uniqueValueInfos:F.uniqueValueInfos,relationshipScheme:L,basemapId:F.basemapId,basemapTheme:F.basemapTheme}}(t,T.result,x.result)}export{F as createRenderer,L as updateRenderer};