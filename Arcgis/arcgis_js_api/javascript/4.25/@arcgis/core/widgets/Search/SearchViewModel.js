/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{g as t}from"../../chunks/assets.js";import s from"../../config.js";import o from"../../Graphic.js";import r from"../../PopupTemplate.js";import"../../symbols.js";import i from"../../core/Accessor.js";import l from"../../core/Collection.js";import n from"../../core/Error.js";import a from"../../core/Evented.js";import u from"../../core/Handles.js";import{L as p}from"../../chunks/Logger.js";import{u as c,i as m,a as h}from"../../chunks/maybe.js";import{eachAlways as d,after as g}from"../../core/promiseUtils.js";import{watch as y,whenOnce as j,initial as S}from"../../core/reactiveUtils.js";import{property as f}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as b}from"../../core/accessorSupport/decorators/subclass.js";import _ from"../../geometry/Point.js";import v from"../../geometry/SpatialReference.js";import{o as w}from"../../chunks/locale.js";import{f as x}from"../../chunks/messages.js";import k from"../../portal/Portal.js";import{h as L}from"../../chunks/layerViewUtils.js";import I from"./LayerSearchSource.js";import P,{i as E,m as T,a as R,b as F}from"./LocatorSearchSource.js";import C from"./SearchSource.js";import{g as D,a as M}from"../../chunks/geometryUtils3.js";import{s as O,g as G,p as U}from"../../chunks/geolocationUtils.js";import{GoToMixin as A}from"../support/GoTo.js";import N from"../../symbols/PictureMarkerSymbol.js";import B from"../../symbols/SimpleLineSymbol.js";import V from"../../symbols/SimpleFillSymbol.js";import J from"../../symbols/TextSymbol.js";import"../../request.js";import"../../kernel.js";import"../../chunks/object.js";import"../../core/urlUtils.js";import"../../chunks/string.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../core/Clonable.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../intl.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/FullTextSearch.js";import"../../chunks/suggestLocations.js";import"../../chunks/utils4.js";import"../../rest/support/AddressCandidate.js";import"../../chunks/commonProperties3.js";import"../../chunks/scaleUtils.js";import"../../chunks/trimExtend.js";import"../../rest/support/GeneralizeParameters.js";import"../../rest/support/LengthsParameters.js";import"../../rest/support/OffsetParameters.js";import"../../chunks/project.js";import"../../chunks/utils5.js";import"../../rest/support/ProjectParameters.js";import"../../rest/support/RelationParameters.js";import"../../rest/support/TrimExtendParameters.js";function Q(e,t){return e.hasOwnProperty(t)&&null!=e[t]&&""!==e[t]}const H=p.getLogger("esri.widgets.Search.SearchViewModel"),z=l.ofType({key:e=>e.layer?"layer":"locator",base:C,typeMap:{layer:I,locator:P}}),q=v.WGS84,W=/<(?:.|\s)*?>/g;let Z=class extends(A(a.EventedMixin(i))){constructor(e){super(e),this._handles=new u,this._gotoController=null,this._searching=null,this._createdFeatureLayers=[],this.autoNavigate=!0,this.autoSelect=!0,this.defaultPopupTemplate=null,this.defaultSources=new z,this.defaultSymbols={point:new N({url:t("esri/images/search/search-symbol-32.png"),size:24,width:24,height:24}),polyline:new B({color:[130,130,130,1],width:2}),polygon:new V({color:[235,235,235,.4],outline:{color:[130,130,130,1],width:2}})},this.includeDefaultSources=!0,this.maxInputLength=128,this.maxResults=6,this.maxSuggestions=6,this.messages=null,this.minSuggestCharacters=3,this.popupEnabled=!0,this.popupTemplate=null,this.portal=k.getDefault(),this.resultCount=null,this.resultGraphicEnabled=!0,this.resultGraphic=null,this.results=null,this.selectedSuggestion=null,this.searchAllEnabled=!0,this.selectedResult=null,this.sources=new z,this.suggestionDelay=350,this.suggestionCount=null,this.suggestions=null,this.suggestionsEnabled=!0,this.view=null}initialize(){const e=async()=>{const e=await x("esri/widgets/Search/t9n/Search");this.messages=e,this.defaultPopupTemplate=new r({title:e.searchResult,content:"{Match_addr}"})};e(),this._handles.add([y((()=>[this.includeDefaultSources,this.view,this.portal]),(()=>this._update()),S),w(e)])}destroy(){this._destroyFeatureLayers(),this._abortGoTo(),this.clearGraphics(),this._handles.destroy(),this._handles=null}get activeSource(){return this.allSources.at(this.activeSourceIndex)??null}get activeSourceIndex(){return 1!==this.allSources.length&&this.searchAllEnabled?-1:0}set activeSourceIndex(e){this._overrideIfSome("activeSourceIndex",e)}get allPlaceholder(){return this.messages?.allPlaceholder}set allPlaceholder(e){this._overrideIfSome("allPlaceholder",e)}get allSources(){const{sources:e,defaultSources:t,includeDefaultSources:s}=this,o="function"==typeof s?s.call(null,{sources:e,defaultSources:t}):s?t.concat(e):e,r=this._get("allSources")||new z;return r.removeAll(),r.addMany(o.filter(Boolean)),r}get locationEnabled(){return this._get("locationEnabled")||O()}set locationEnabled(e){if(void 0===e)return void this._clearOverride("locationEnabled");const t=O();if(e&&!t){const e=new n("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});H.error(e)}this._override("locationEnabled",!!e&&t)}get placeholder(){const{allSources:e,activeSourceIndex:t,allPlaceholder:s}=this;if(-1===t)return s;const o=e.at(t);return o?o.placeholder:""}set searchTerm(e){this._set("searchTerm",e||""),this.clearGraphics(),this.selectedSuggestion&&this.selectedSuggestion.text!==e&&this._set("selectedSuggestion",null),""===e&&this._clear()}get searchTerm(){return this._get("searchTerm")||""}get state(){return this._searching?"searching":this.updating?"loading":0===this.allSources.length?"disabled":"ready"}get updating(){return null!=this._updatingPromise}clear(){this.searchTerm=""}clearGraphics(){this._removeHighlight(),this._closePopup(),this.view&&this.view.graphics.remove(this.resultGraphic),this._set("resultGraphic",null)}search(e,t){this.emit("search-start"),this.clearGraphics();const s=this._createSuggestionForSearch(e),o=this.when().then((()=>this._getResultsFromSources(s,t).then((e=>{if(c(t?.signal)?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:s.text,numResults:0,numErrors:0,errors:[],results:[]};this._formatResponse(o,e,s);const r=this._getFirstResult(o.results),i=(s.location&&r?r.name:s.text).replace(W,"");return this._set("searchTerm",i),(s.key&&"number"==typeof s.sourceIndex||s.location)&&this._set("selectedSuggestion",s),this._set("results",o.results),this._set("resultCount",o.results.reduce(((e,t)=>e+t.results.length),0)),this.emit("search-complete",o),this._selectFirstResult(r).then((()=>o))})))).then((e=>(this._clearSearching(),e)),(e=>{throw this._clearSearching(),e}));return this._searching=o,o}searchNearby(e){if(!this.locationEnabled){const e=new n("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});return H.error(e),Promise.reject(e)}const t=G().then((t=>U({position:t,view:this.view},e))).then((t=>this.search(t,e)));return this._searching=t,t.catch((()=>{})).then((()=>this._clearSearching())),t}select(e){if(this.clearGraphics(),!e){const t=new n("select:missing-parameter","Cannot select without a searchResult.",{searchResult:e});return H.error(t),Promise.reject(t)}const{view:t}=this,s=Q(e,"sourceIndex")?e.sourceIndex:this._getSourceIndexOfResult(e),r=this.allSources.at(s);if(!r){const e=new n("select:missing-source","Cannot select without a source.",{source:r});return H.error(e),Promise.reject(e)}const i=r instanceof I?this._getLayerSourcePopupTemplate(r):r.popupTemplate,l=r.resultSymbol||this._getDefaultSymbol(e),a=Q(r,"resultGraphicEnabled")?r.resultGraphicEnabled:this.resultGraphicEnabled,u=Q(r,"autoNavigate")?r.autoNavigate:this.autoNavigate,p=Q(r,"popupEnabled")?r.popupEnabled:this.popupEnabled,c=p?i||this.popupTemplate||this.defaultPopupTemplate:null,{feature:h}=e;if(!h){const e=new n("select:missing-feature","Cannot select without a feature.",{feature:h});return H.error(e),Promise.reject(e)}const{attributes:g,geometry:y,layer:j,sourceLayer:S}=h,f=D(y),b={layerViewQuery:this._getLayerView(h),elevationQuery:t&&m(f)?M(f,t).catch((()=>f)):Promise.resolve(f)};return d(b).then((i=>{const n=i.layerViewQuery.value,d=i.elevationQuery.value;l instanceof J&&(l.text=e.name);const f=t&&u?e.target||e.extent:null;return(m(f)?this._goToSearchResult(f):Promise.resolve()).then((()=>{const i=n?h:new o({geometry:y,symbol:l,attributes:g,layer:j,sourceLayer:S,popupTemplate:c}),u=p&&this.view?.popup,m=u&&i.getEffectivePopupTemplate(u.defaultPopupTemplateEnabled);return m&&t.popup.open({features:[i],location:d}),n&&L(n)&&!m&&this._highlightFeature({graphic:i,layerView:n}),!n&&a&&t&&t.graphics.push(i),this._setResultFloor(e),this._set("selectedResult",e),this._set("resultGraphic",i),this.emit("select-result",{result:e,source:r,sourceIndex:s}),e}))}))}suggest(e,t,s){const o=e||this.searchTerm;return this.emit("suggest-start",{searchTerm:o}),this._suggestTimer(t,s).then((()=>this._suggestImmediate(o,s).then((e=>(this._set("suggestions",e.results),this._set("suggestionCount",e.results.reduce(((e,t)=>e+t.results.length),0)),this.emit("suggest-complete",e),e)))))}async when(){await j((()=>!this.updating))}async _update(){const{portal:e,view:t}=this;if(this.includeDefaultSources){const s=this._updatingPromise=d([e?.load(),t?.when()]);if(this.destroyed)return;if(await s,s!==this._updatingPromise)return}await j((()=>this.messages)),this.destroyed||this._updateDefaultSources(),this._updatingPromise=null}_clearSearching(){this._searching=null}_convertHelperServices(){const e=this.portal?.helperServices?.geocode;return e?e.map((e=>{if(!1===e.placefinding)return;const t=s.apiKey&&E(e.url)?{url:T}:null,o=P.fromJSON({...e,...t}),r=o.url;if(E(r)||R(r)||F(r)){const e=o.outFields||["Addr_type","Match_addr","StAddr","City"],t=o.placeholder||this.messages.placeholder,s="number"==typeof o.defaultZoomScale?o.defaultZoomScale:2500;o.set({singleLineFieldName:"SingleLine",outFields:e,placeholder:t,defaultZoomScale:s})}return o.singleLineFieldName?o:void 0})).filter(Boolean):[]}_destroyFeatureLayers(){this._createdFeatureLayers.forEach((e=>e?.destroy())),this._createdFeatureLayers=[]}_getLayerSources(e,t){const s=this.view?.map;return e.map((e=>{const o=s.findLayerById(e.id);if(!o)return;const r=this._getLayerJSON(e),i=I.fromJSON(r);return i.placeholder=t,this._getLayer(o,r).then((e=>{i.layer=e})),i})).filter(Boolean).toArray()}_getTableSources(e,t){const s=this.view?.map;return e.map((e=>{const o=s.findTableById(e.id);if(!o)return;const r=this._getLayerJSON(e),i=I.fromJSON(r);return i.placeholder=t,this._getLayer(o,r).then((e=>{i.layer=e})),i})).filter(Boolean).toArray()}_convertApplicationProperties(){const e=this.view?.map,t=e?.applicationProperties?.viewing?.search;if(!t)return[];const{enabled:s,hintText:o,layers:r,tables:i}=t;return s?[...this._getLayerSources(r,o),...this._getTableSources(i,o)]:[]}async _getSubLayer(e,t){if(await e.load(),!e.allSublayers)throw new Error;const s=e.allSublayers.find((e=>e.id===t.subLayer));if(!s)throw new Error;const o=await s.createFeatureLayer();return this._createdFeatureLayers.push(o),o}async _getBuildingSubLayer(e,t){await e.load();const s=e.allSublayers.find((e=>e.id===t.subLayer));if("building-component"!==s?.type)throw new Error;if(await s.load(),null==s.associatedLayer)throw new Error;return await s.associatedLayer.load(),s}_getLayer(e,t){return"feature"===e.type||"scene"===e.type||"csv"===e.type||"geojson"===e.type||"ogc-feature"===e.type?Promise.resolve(e):"map-image"===e.type?this._getSubLayer(e,t).catch((()=>{const t=new n("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:e});return H.error(t),null})):"building-scene"===e.type?this._getBuildingSubLayer(e,t):Promise.resolve(null)}_getLayerJSON(e){return"function"==typeof e.toJSON?e.toJSON():e}_updateDefaultSources(){const{defaultSources:e,includeDefaultSources:t}=this;this._destroyFeatureLayers(),e.removeAll(),t&&e.addMany([...this._convertApplicationProperties(),...this._convertHelperServices()])}_abortGoTo(){this._gotoController&&this._gotoController.abort(),this._gotoController=null}_clear(){this._abortGoTo(),this._set("resultCount",null),this._set("results",null),this._set("suggestions",null),this._set("suggestionCount",null),this._set("selectedResult",null),this._set("selectedSuggestion",null),this.emit("search-clear")}_closePopup(){const e=this.view?.popup,{resultGraphic:t}=this;if(!e||!t)return;const{selectedFeature:s}=e;s&&s===t&&e.close()}_suggestTimer(e,t){const s=null!=e?e:this.suggestionDelay;return g(s,null,t&&t.signal)}_createLocationForSearch(e){return e instanceof o?D(e.geometry):e instanceof _?e:Array.isArray(e)&&2===e.length?new _({longitude:e[0],latitude:e[1]}):null}_createSuggestionForSearch(e){if(e&&Q(e,"key")&&Q(e,"text")&&Q(e,"sourceIndex"))return e;const t=this._createLocationForSearch(e),s="string"==typeof e?e:this.searchTerm,{selectedSuggestion:o,selectedResult:r}=this,i=!e&&o&&r,l=i&&o.key===r.key&&o.sourceIndex===r.sourceIndex,n=i&&o.location;return l||n?o:{location:c(t),text:t?"":s,sourceIndex:null,key:null}}_getFirstResult(e){let t=null;return e&&e.some((e=>{const{results:s}=e,o=s[0],r=!!o;return r&&(t=o),r})),t}_selectFirstResult(e){return this.autoSelect&&e?this.select(e):Promise.resolve(null)}_suggestImmediate(e,t){return this.when().then((()=>this._getSuggestionsFromSources(e,t))).then((s=>{if(c(t?.signal)?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:e,numResults:0,numErrors:0,errors:[],results:[]};return this._formatResponse(o,s),o}))}_formatSourceResponse(e,t,s){const o=t&&t.value||[],r=t&&t.error,i=this.allSources.at(s);if(r){const t={sourceIndex:s,source:i,error:r};e.errors.push(t),H.error(r),e.numErrors++}else{const t={sourceIndex:s,source:i,results:o};e.results.push(t),e.numResults+=o.length}}_formatResponse(e,t,s){if(t)if(-1===e.activeSourceIndex){const o=s&&Q(s,"sourceIndex")&&-1!==s.sourceIndex?s.sourceIndex:void 0;t.forEach(((t,s)=>{const r=void 0!==o?o:s;this._formatSourceResponse(e,t,r)}))}else this._formatSourceResponse(e,t[0],e.activeSourceIndex)}_getResultsFromSources(e,t){const{allSources:s}=this,o=!e.location&&Q(e,"sourceIndex")?e.sourceIndex:this.activeSourceIndex,r=[];if(!s.length){const e=new n("search:no-sources-defined","At least one source is required.",{allSources:s});return H.error(e),Promise.reject(e)}return-1===o?s.forEach(((s,o)=>{r.push(this._getResultsFromSource(e,o,t))})):r.push(this._getResultsFromSource(e,o,t)),d(r)}_getSuggestionsFromSources(e,t){const{allSources:s,activeSourceIndex:o}=this,r=[];if(!s.length){const e=new n("suggest:no-sources-defined","At least one source is required.",{allSources:s});return H.error(e),Promise.reject(e)}return-1===o?s.forEach(((s,o)=>{r.push(this._getSuggestionsFromSource(e,o,t))})):r.push(this._getSuggestionsFromSource(e,o,t)),d(r)}_getResultsFromSource(e,t,s){const o=this.allSources.at(t),{location:r=null}=e,i=this.view?.spatialReference||q,l=Q(o,"maxResults")?o.maxResults:this.maxResults,n=!!(o instanceof I&&Q(o,"exactMatch"))&&o.exactMatch,{view:a}=this;return o.getResults({view:a,sourceIndex:t,location:r,suggestResult:e,spatialReference:i,exactMatch:n,maxResults:l},s)}_getSuggestionsFromSource(e,t,s){const o=this.allSources.at(t),r=Q(o,"suggestionsEnabled")?o.suggestionsEnabled:this.suggestionsEnabled,i=e.length,l=Q(o,"minSuggestCharacters")?o.minSuggestCharacters:this.minSuggestCharacters;if(r&&e.trim()&&i>=l){const r=this.view?.spatialReference||q,i=Q(o,"maxSuggestions")?o.maxSuggestions:this.maxSuggestions,{view:l}=this,n=!!(o instanceof I&&Q(o,"exactMatch"))&&o.exactMatch;return o.getSuggestions({view:l,sourceIndex:t,suggestTerm:e,spatialReference:r,maxSuggestions:i,exactMatch:n},s)}return Promise.resolve(null)}_getLayerSourcePopupTemplate(e){const{layer:t}=e;if(t)return Q(e,"popupTemplate")?e.popupTemplate:t.popupTemplate}_getSourceIndexOfResult(e){const t=this.results;let s=null;return t.some((t=>t.results.some((o=>o===e&&(s=t.sourceIndex,!0))))),s}async _goToSearchResult(e){const t=!!e;this._abortGoTo();const s=new AbortController;this._gotoController=s;const o={target:{target:e},options:{animate:t,signal:s.signal}};await this.callGoTo(o),this._gotoController=null}_getDefaultSymbol(e){const{defaultSymbols:t}=this,s=e.feature?.geometry;if(h(s))return null;switch(s.type){case"point":case"multipoint":return t.point;case"polyline":return t.polyline;case"extent":case"polygon":return t.polygon;default:return null}}_removeHighlight(){this._handles.remove("highlight")}async _getLayerView(e){const{view:t}=this;if(!e||!t||"building-component"===e.layer.type||"subtype-sublayer"===e.layer.type)return null;const{layer:s}=e;return await t.when(),t.whenLayerView(s)}_highlightFeature(e){const{graphic:t,layerView:s}=e,{attributes:o,layer:r}=t,{objectIdField:i}=r,l=o&&o[i],n=s.highlight(l||t);this._handles.add(n,"highlight")}_setResultFloor(e){const{view:t}=this,s=e.feature?.attributes,o=e.feature?.sourceLayer;if(o&&"floorInfo"in o&&o?.floorInfo?.floorField&&s){const e=s[o.floorInfo.floorField];t?.emit("select-result-floor",e)}}};Z.ALL_INDEX=-1,e([f()],Z.prototype,"_searching",void 0),e([f()],Z.prototype,"_updatingPromise",void 0),e([f({readOnly:!0,value:null})],Z.prototype,"activeSource",null),e([f()],Z.prototype,"activeSourceIndex",null),e([f()],Z.prototype,"allPlaceholder",null),e([f({readOnly:!0})],Z.prototype,"allSources",null),e([f()],Z.prototype,"autoNavigate",void 0),e([f()],Z.prototype,"autoSelect",void 0),e([f()],Z.prototype,"defaultPopupTemplate",void 0),e([f({readOnly:!0})],Z.prototype,"defaultSources",void 0),e([f()],Z.prototype,"defaultSymbols",void 0),e([f()],Z.prototype,"includeDefaultSources",void 0),e([f()],Z.prototype,"locationEnabled",null),e([f()],Z.prototype,"maxInputLength",void 0),e([f()],Z.prototype,"maxResults",void 0),e([f()],Z.prototype,"maxSuggestions",void 0),e([f()],Z.prototype,"messages",void 0),e([f()],Z.prototype,"minSuggestCharacters",void 0),e([f({readOnly:!0})],Z.prototype,"placeholder",null),e([f()],Z.prototype,"popupEnabled",void 0),e([f({type:r})],Z.prototype,"popupTemplate",void 0),e([f({type:k})],Z.prototype,"portal",void 0),e([f()],Z.prototype,"resultCount",void 0),e([f()],Z.prototype,"resultGraphicEnabled",void 0),e([f({readOnly:!0})],Z.prototype,"resultGraphic",void 0),e([f({readOnly:!0})],Z.prototype,"results",void 0),e([f({readOnly:!0})],Z.prototype,"selectedSuggestion",void 0),e([f()],Z.prototype,"searchAllEnabled",void 0),e([f({readOnly:!0})],Z.prototype,"selectedResult",void 0),e([f()],Z.prototype,"searchTerm",null),e([f({type:z})],Z.prototype,"sources",void 0),e([f({readOnly:!0})],Z.prototype,"state",null),e([f()],Z.prototype,"suggestionDelay",void 0),e([f()],Z.prototype,"suggestionCount",void 0),e([f({readOnly:!0})],Z.prototype,"suggestions",void 0),e([f()],Z.prototype,"suggestionsEnabled",void 0),e([f({readOnly:!0})],Z.prototype,"updating",null),e([f()],Z.prototype,"view",void 0),e([f()],Z.prototype,"clear",null),Z=e([b("esri.widgets.Search.SearchViewModel")],Z);const K=Z;export{K as default};