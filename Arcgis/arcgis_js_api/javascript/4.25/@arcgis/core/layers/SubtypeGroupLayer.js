/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r from"../core/Collection.js";import e from"../core/Error.js";import{HandleOwnerMixin as t}from"../core/HandleOwner.js";import o from"../core/Handles.js";import{d as i,i as p,e as n}from"../chunks/maybe.js";import{M as m}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as a,whenOrAbort as l}from"../core/promiseUtils.js";import{watch as u,sync as c}from"../core/reactiveUtils.js";import{sqlAnd as y}from"../core/sql.js";import{urlToObject as j,join as h}from"../core/urlUtils.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{r as b}from"../chunks/reader.js";import{subclass as f}from"../core/accessorSupport/decorators/subclass.js";import{O as g,n as k}from"../core/Accessor.js";import S from"./Layer.js";import{APIKeyMixin as I}from"./mixins/APIKeyMixin.js";import{A as C}from"../chunks/ArcGISService.js";import{BlendLayer as L}from"./mixins/BlendLayer.js";import{CustomParametersMixin as v}from"./mixins/CustomParametersMixin.js";import{E as U}from"../chunks/EditBusLayer.js";import{FeatureLayerBase as F,b as P,u as w,c as x,d as D,e as R,f as E,q as M,h as T,i as V,j as O,k as _,l as A,m as G}from"./mixins/FeatureLayerBase.js";import{O as q}from"../chunks/OperationalLayer.js";import{PortalLayer as B}from"./mixins/PortalLayer.js";import{RefreshableLayer as Q}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as $}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as H}from"./mixins/TemporalLayer.js";import{t as N}from"../chunks/arcgisLayerUrl.js";import{i as z}from"../chunks/commonProperties.js";import{d as J}from"../chunks/fieldProperties.js";import{fixTimeInfoFields as W}from"./support/fieldUtils.js";import{S as K}from"../chunks/Subtype.js";import Z from"./support/SubtypeSublayer.js";import X from"./support/TimeInfo.js";import{s as Y}from"../chunks/versionUtils.js";import ss from"../rest/support/Query.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/WatchUpdatingTracking.js";import"../core/JSONSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../request.js";import"../kernel.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/screenUtils.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/common.js";import"../chunks/_commonjsHelpers.js";import"../geometry/HeightModelInfo.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../core/Clonable.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../chunks/DataLayerSource.js";import"../chunks/enumeration.js";import"./support/Field.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"./support/GeometryFieldsInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../chunks/persistableUrlUtils.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/arcadeOnDemand.js";import"../chunks/opacityUtils.js";import"../chunks/FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../chunks/asyncUtils.js";import"../portal/Portal.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../TimeInterval.js";import"./support/TimeReference.js";import"./support/FieldsIndex.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../renderers/support/jsonUtils.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"./support/FeatureTemplate.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/labelingInfo.js";import"../support/popupUtils.js";const rs="SubtypeGroupLayer";function es(s,r){return new e("layer:unsupported",`Layer (${s.title}, ${s.id}) of type '${s.declaredClass}' ${r}`,{layer:s})}const ts=J();let os=class extends(F(U(L(H($(Q(C(q(B(m(v(I(t(S)))))))))))))){constructor(...s){super(...s),this._handles=new o,this._sublayersCollectionChanged=!1,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(r.ofType(Z)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(u((()=>this.sublayers),((s,r)=>this._handleSublayersChange(s,r)),c))}destroy(){this.source?.destroy(),this._handles=i(this._handles)}normalizeCtorArgs(s,r){return"string"==typeof s?{url:s,...r}:s}load(s){const r=p(s)?s.signal:null,t=this.loadFromPortal({supportedTypes:["Feature Service"]},s).catch(a).then((async()=>{if(!this.url)throw new e("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new e("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(r))})).then((()=>this.finishLoadEditablePortalLayer(s)));return this.addResolvingPromise(t),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get parsedUrl(){const s=j(this.url);return null!=s&&null!=this.layerId&&(s.path=h(s.path,this.layerId.toString())),s}set source(s){this._get("source")!==s&&this._set("source",s)}readTitleFromService(s,{name:r}){return this.url?N(this.url,r):r}async addAttachment(s,r){return P(this,s,r,rs)}async updateAttachment(s,r,e){return w(this,s,r,e,rs)}async applyEdits(s,r){return x(this,s,r)}on(s,r){return super.on(s,r)}async createGraphicsSource(s){const{default:r}=await l(import("../chunks/FeatureLayerSource.js"),s);return new r({layer:this}).load({signal:s})}createQuery(){const s=D(this),r=this.sublayers.map((s=>s.subtypeCode));return s.where=y(`${this.subtypeField} IN (${r.join(",")})`,this.definitionExpression),s}async deleteAttachments(s,r){return R(this,s,r,rs)}async fetchRecomputedExtents(s){return E(this,s,rs)}getFieldDomain(s,r){return this._getLayerDomain(s)}getField(s){return this.fieldsIndex.get(s)}async queryAttachments(s,r){return M(this,s,r,rs)}async queryFeatures(s,r){const e=await this.load(),t=ss.from(s)??e.createQuery(),o=n(t.outFields,[]);o.includes(this.subtypeField)||(o.push(this.subtypeField),t.outFields=o);const i=await e.source.queryFeatures(t,r);if(i?.features)for(const s of i.features)s.layer=this._findSublayerForFeature(s),s.sourceLayer=this;return i}async queryObjectIds(s,r){return T(this,s,r,rs)}async queryFeatureCount(s,r){return V(this,s,r,rs)}async queryExtent(s,r){return O(this,s,r,rs)}async queryRelatedFeatures(s,r){return _(this,s,r,rs)}async queryRelatedFeaturesCount(s,r){return A(this,s,r,rs)}write(s,r){const{origin:t,layerContainerType:o,messages:i}=r;if(this.isTable){if("web-scene"===t||"web-map"===t&&"tables"!==o)return i?.push(es(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===t&&"tables"===o)return i?.push(es(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(s,r):(i?.push(new e("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(s){return!!this.loaded&&Y(this,s)}_findSublayerForFeature(s){const r=this.fieldsIndex.get(this.subtypeField),e=s.attributes[r.name];return this.sublayers.find((s=>s.subtypeCode===e))}_getLayerDomain(s){const r=this.fieldsIndex.get(s);return r?r.domain:null}async _initLayerProperties(s){this._set("source",s);const{sourceJSON:r}=s;if(r&&(this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})),this.isTable)throw new e("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new e("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),W(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return G(this)}_verifyFields(){const s=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+s+")"),this.isTable||-1!==s.search(/\/FeatureServer\//i)||this.fields?.some((s=>"geometry"===s.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+s+")")}_handleSublayersChange(s,r){r&&(r.forEach((s=>{s.parent=null})),this.handles.remove("sublayers-owner")),s&&(s.forEach((s=>{s.parent=this})),this._sublayersCollectionChanged=!1,this.handles.add([s.on("after-add",(({item:s})=>{s.parent=this})),s.on("after-remove",(({item:s})=>{s.parent=null})),s.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};s([d({readOnly:!0})],os.prototype,"createQueryVersion",null),s([d({type:Boolean,readOnly:!0})],os.prototype,"editingEnabled",null),s([d({...ts.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],os.prototype,"fields",void 0),s([d(ts.fieldsIndex)],os.prototype,"fieldsIndex",void 0),s([d(z)],os.prototype,"id",void 0),s([d({type:["show","hide","hide-children"]})],os.prototype,"listMode",void 0),s([d({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],os.prototype,"operationalLayerType",void 0),s([d(ts.outFields)],os.prototype,"outFields",void 0),s([d({readOnly:!0})],os.prototype,"parsedUrl",null),s([d()],os.prototype,"source",null),s([d({type:[K],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],os.prototype,"subtypes",void 0),s([d({type:r.ofType(Z),json:{origins:{service:{read:{source:"subtypes",reader:(s,e,t)=>{const o=s.map((({code:s})=>{const r=new Z({subtypeCode:s});return r.read(e,t),r}));return new(r.ofType(Z))(o)}}}},name:"layers",write:{overridePolicy(s,r,e){const t=this.originOf("sublayers"),o=g.PORTAL_ITEM;let i=!0;if(k(t)===o&&k(e.origin)>o){const r=s.some((s=>s.hasUserOverrides()));i=this._sublayersCollectionChanged||r}return{enabled:i,ignoreOrigin:!0}}}}})],os.prototype,"sublayers",void 0),s([d({type:X})],os.prototype,"timeInfo",void 0),s([d({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],os.prototype,"title",void 0),s([b("service","title",["name"])],os.prototype,"readTitleFromService",null),s([d({json:{read:!1}})],os.prototype,"type",void 0),os=s([f("esri.layers.SubtypeGroupLayer")],os);const is=os;export{is as default};