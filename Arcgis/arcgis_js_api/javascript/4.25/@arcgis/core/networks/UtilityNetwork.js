/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{d as t}from"../core/promiseUtils.js";import{L as r}from"../chunks/Logger.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import i from"../layers/FeatureLayer.js";import{q as n}from"../chunks/featureQueryAll.js";import p from"./Network.js";import a from"../request.js";import{JSONSupportMixin as m}from"../core/JSONSupport.js";import l from"../core/Loadable.js";import{R as u}from"../chunks/typeUtils2.js";import c from"./support/NamedTraceConfiguration.js";import y from"./support/NetworkSystemLayers.js";import j from"./support/TerminalConfiguration.js";import d from"../rest/support/Query.js";import"../chunks/object.js";import"../core/Error.js";import"../chunks/maybe.js";import"../config.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../core/Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../core/reactiveUtils.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../layers/Layer.js";import"../core/HandleOwner.js";import"../chunks/WatchUpdatingTracking.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/assets.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"../chunks/fieldType.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/TimeReference.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"../chunks/utils10.js";import"./support/TraceConfiguration.js";import"./support/UNTraceConfiguration.js";import"./support/Terminal.js";let h=class extends(m(l)){constructor(e){super(e),this.request=a}initialize(){}async load(e){const t=this.layer.load(e).then((()=>this._initializeRulesTable()));return this.addResolvingPromise(t),this}getFeatureSQL(e,t){const r=e.layerId.toString(),s=e.fieldsIndex?.normalizeFieldName("assetGroup"),o=e.fieldsIndex?.normalizeFieldName("assetType"),i=s?t.attributes[s]:null,n=o?t.attributes[o]:null,p=this.rulesHash[r];if(p){const e=p.assetGroupHash[i];if(e)return e.assetTypeHash[n]||null}return null}async _initializeRulesTable(){const e={};let t;!function(e){e[e.from=0]="from",e[e.to=1]="to",e[e.via=2]="via"}(t||(t={}));const r=[{networkSourceId:"fromNetworkSource",assetGroupId:"fromAssetGroup",assetTypeId:"fromAssetType"},{networkSourceId:"toNetworkSource",assetGroupId:"toAssetGroup",assetTypeId:"toAssetType"},{networkSourceId:"viaNetworkSource",assetGroupId:"viaAssetGroup",assetTypeId:"viaAssetType"}];for(const s of this.rules){if(s.ruleType!==u.RTJunctionJunctionConnectivity&&s.ruleType!==u.RTJunctionEdgeConnectivity&&s.ruleType!==u.RTEdgeJunctionEdgeConnectivity)continue;let o=[[t.from,t.to],[t.to,t.from]];s.ruleType===u.RTEdgeJunctionEdgeConnectivity&&(o=[[t.from,t.via],[t.via,t.from],[t.to,t.via],[t.via,t.to]]);for(const i of o){const o=i.shift(),n=i.shift();let p=!1;switch(s.ruleType){case u.RTEdgeJunctionEdgeConnectivity:p=o===t.from||o===t.to;break;case u.RTJunctionEdgeConnectivity:p=o===t.to}const a=r[o],m=s[a.networkSourceId].layerId.toString(),l=s[a.assetGroupId]?.assetGroupCode?.toString(),c=s[a.assetTypeId]?.assetTypeCode?.toString(),y=r[n],j=s[y.networkSourceId].layerId.toString(),d=s[y.assetGroupId]?.assetGroupCode?.toString(),h=s[y.assetTypeId],b=h?.assetTypeCode?.toString(),f=e[m]?e[m]:{assetGroupHash:{}};if(!(l&&c&&d&&b))continue;const k=f.assetGroupHash[l]?f.assetGroupHash[l]:{assetTypeHash:{}},T=k.assetTypeHash[c]?k.assetTypeHash[c]:{};if(T[j]=T[j]?T[j]:{},p){T[m]=T[m]?T[m]:{};const e=`(assetgroup = ${l} AND assettype = ${c})`;T[m].anyVertex=T[m].anyVertex?`${T[m].anyVertex}`:`${e}`,"esriNECPEndVertex"===h.connectivityPolicy&&(T[m].endVertex=T[m]?.endVertex?`${T[m].endVertex}`:`${e}`)}const g=`(assetgroup = ${d} AND assettype = ${b})`;T[j].anyVertex=T[j]?.anyVertex?`${T[j].anyVertex} OR ${g}`:`${g}`,"esriNECPEndVertex"===h.connectivityPolicy&&(T[j].endVertex=T[j]?.endVertex?`${T[j].endVertex} OR ${g}`:`${g}`),k.assetTypeHash[c]=T,f.assetGroupHash[l]=k,e[m]=f}}this.rulesHash=e}};e([s({constructOnly:!0})],h.prototype,"layer",void 0),e([s({constructOnly:!0})],h.prototype,"rules",void 0),e([s()],h.prototype,"rulesHash",void 0),e([s({constructOnly:!0})],h.prototype,"request",void 0),h=e([o("esri.networks.RulesTable")],h);const b=h,f=r.getLogger("esri.networks.UtilityNetwork");let k=class extends p{constructor(e){super(e),this.sharedNamedTraceConfigurations=[],this.type="utility"}get serviceTerritoryFeatureLayerId(){return this.dataElement?.serviceTerritoryFeatureLayerId??null}get networkSystemLayers(){return new y({rulesTableId:this.sourceJSON?.systemLayers.rulesTableId,rulesTableUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.rulesTableId}`:null,subnetworksTableId:this.sourceJSON?.systemLayers.subnetworksTableId,subnetworksTableUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.subnetworksTableId}`:null,dirtyAreasLayerId:this.sourceJSON?.systemLayers.dirtyAreasLayerId,dirtyAreasLayerUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.dirtyAreasLayerId}`:null})}get rulesTableId(){return t(f,"rulesTableId",{replacement:"networkSystemLayers.rulesTableId"}),this.sourceJSON?.systemLayers.rulesTableId}get rulesTableUrl(){return t(f,"rulesTableUrl",{replacement:"networkSystemLayers.rulesTableUrl"}),this.sourceJSON?`${this.featureServiceUrl}/${this.networkSystemLayers.rulesTableId}`:null}get subnetworksTableId(){return t(f,"subnetworksTableId",{replacement:"networkSystemLayers.subnetworksTableId"}),this.sourceJSON?.systemLayers.subnetworksTableId}get subnetworksTableUrl(){return t(f,"subnetworksTableUrl",{replacement:"networkSystemLayers.subnetworksTableUrl"}),this.sourceJSON?`${this.featureServiceUrl}/${this.networkSystemLayers.subnetworksTableId}`:null}get terminalConfigurations(){return this.dataElement?.terminalConfigurations.map((e=>j.fromJSON(e)))||[]}get domainNetworkNames(){return this.dataElement?.domainNetworks.map((e=>e.domainNetworkName))||[]}get _utilityLayerList(){const e=new Set;return this.dataElement?.domainNetworks?.map((t=>{t.edgeSources.map((t=>{e.add(t.layerId)})),t.junctionSources.map((t=>{e.add(t.layerId)}))})),e}async load(e){return this.addResolvingPromise(super.load(e)),this.addResolvingPromise(this._loadNamedTraceConfigurationsFromNetwork(e)),this}getTerminalConfiguration(e){let t=null,r=null;const s=e.layer;let o=null;if("feature"!==s?.type)return null;if(o=s.layerId,null===o)return null;const i=e.attributes;if(null==i)return null;for(const s of Object.keys(i))"ASSETGROUP"===s.toUpperCase()&&(t=e.getAttribute(s)),"ASSETTYPE"===s.toUpperCase()&&(r=e.getAttribute(s));if(!this.dataElement)return null;let n=null;const p=this.dataElement.domainNetworks;for(const e of p){const s=e.junctionSources?.find((e=>e.layerId===o));if(s){const e=s.assetGroups?.find((e=>e.assetGroupCode===t));if(e){const t=e.assetTypes?.find((e=>e.assetTypeCode===r));if(t){n=t.terminalConfigurationId;break}}}}if(null!=n){const e=this.dataElement.terminalConfigurations?.find((e=>e.terminalConfigurationId===n));return e?j.fromJSON(e):null}return null}getTierNames(e){const t=this.dataElement?.domainNetworks.find((t=>t.domainNetworkName===e));return t?.tiers.map((e=>e.name))||[]}async getRulesTable(){return this._createRulesTable()}isUtilityLayer(e){return this._utilityLayerList.has(e.layerId)}async _loadNamedTraceConfigurationsFromNetwork(e){if(0===this.sharedNamedTraceConfigurations?.length)return;const t=this.sharedNamedTraceConfigurations.map((e=>e.globalId)),r=await this.queryNamedTraceConfigurations({globalIds:t},e);for(const e of this.sharedNamedTraceConfigurations){const t=r?.find((t=>t.globalId===e.globalId));if(t){const r=t.write({},{origin:"service"});e.read(r,{origin:"service"})}}}async _createRulesTable(){const e=new i({url:this.rulesTableUrl});await e.load();const t=this.dataElement?.domainNetworks;if(!t)return null;const r=t.flatMap((e=>[...e.edgeSources,...e.junctionSources])),s=(await this._queryRulesTable(e)).map((t=>this._hydrateRuleInfo(e,r,t)));return new b({layer:e,rules:s})}async _queryRulesTable(e){const t=new d({where:"1=1",outFields:["*"]});return(await n(e,t)).features}_hydrateRuleInfo(e,t,r){const s=e.fieldsIndex,o=s.get("RULETYPE"),i=s.get("CREATIONDATE"),n=s.get("FROMNETWORKSOURCEID"),p=s.get("FROMASSETGROUP"),a=s.get("FROMASSETTYPE"),m=s.get("FROMTERMINALID"),l=s.get("TONETWORKSOURCEID"),c=s.get("TOASSETGROUP"),y=s.get("TOASSETTYPE"),j=s.get("TOTERMINALID"),d=s.get("VIANETWORKSOURCEID"),h=s.get("VIAASSETGROUP"),b=s.get("VIAASSETTYPE"),f=s.get("VIATERMINALID"),k=r.attributes[o.name],T=new Date(r.attributes[i.name]),g=[{networkSourceId:r.attributes[n.name],assetGroupId:r.attributes[p.name],assetTypeId:r.attributes[a.name],terminalId:r.attributes[m.name]},{networkSourceId:r.attributes[l.name],assetGroupId:r.attributes[c.name],assetTypeId:r.attributes[y.name],terminalId:r.attributes[j.name]},{networkSourceId:r.attributes[d.name],assetGroupId:r.attributes[h.name],assetTypeId:r.attributes[b.name],terminalId:r.attributes[f.name]}];let S;!function(e){e[e.from=0]="from",e[e.to=1]="to",e[e.via=2]="via"}(S||(S={}));const I={ruleType:k,creationDate:T};for(const e of[S.from,S.to,S.via]){if(k!==u.RTEdgeJunctionEdgeConnectivity&&e===S.via)continue;const r=g[e],s=t.find((e=>e.sourceId===r.networkSourceId)),o=s?.assetGroups.find((e=>e.assetGroupCode===r.assetGroupId)),i=o?.assetTypes.find((e=>e.assetTypeCode===r.assetTypeId));let n=this._getTerminal(k,i,r);k!==u.RTContainment&&k!==u.RTAttachment||(n=null);let p="";switch(e){case S.from:p="from";break;case S.to:p="to";break;case S.via:p="via"}I[`${p}NetworkSource`]=s,I[`${p}AssetGroup`]=o,I[`${p}AssetType`]=i,I[`${p}Terminal`]=n}return I}_getTerminal(e,t,r){if(e===u.RTAttachment||e===u.RTContainment)return null;const s=t?.terminalConfigurationId,o=this.terminalConfigurations?.find((e=>e.id===s));return o?.terminals?.find((e=>e.id===r.terminalId))??null}};e([s({type:[c],json:{origins:{"web-map":{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}},service:{read:{source:"traceConfigurations"}}},read:!1}})],k.prototype,"sharedNamedTraceConfigurations",void 0),e([s({type:["utility"],readOnly:!0,json:{read:!1,write:!1}})],k.prototype,"type",void 0),e([s({readOnly:!0})],k.prototype,"serviceTerritoryFeatureLayerId",null),e([s({readOnly:!0})],k.prototype,"networkSystemLayers",null),e([s({readOnly:!0})],k.prototype,"rulesTableId",null),e([s({readOnly:!0})],k.prototype,"rulesTableUrl",null),e([s({readOnly:!0})],k.prototype,"subnetworksTableId",null),e([s({readOnly:!0})],k.prototype,"subnetworksTableUrl",null),e([s({readOnly:!0})],k.prototype,"terminalConfigurations",null),e([s({readOnly:!0})],k.prototype,"domainNetworkNames",null),k=e([o("esri.networks.UtilityNetwork")],k);const T=k;export{T as default};