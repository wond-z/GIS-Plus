/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Error.js";import{i as r,p as s,a as i,d as o}from"./maybe.js";import{throwIfAborted as p,isAborted as m}from"../core/promiseUtils.js";import{whenOnce as l}from"../core/reactiveUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{b as j}from"./MemCache.js";import{f as u}from"./mat3f32.js";import{c}from"./aaBoundingRect.js";import{S as d,a as y,C as h,b as g,T as f}from"./TileInfoViewPOT.js";import{w as b,a as S,V as w}from"./VectorTile.js";import{V as C,S as v}from"./StyleDefinition.js";import{T as U}from"./TileKey2.js";import{a as I,b as L,c as T,d as _,e as M}from"./WGLBrushVTLSymbol.js";import{V as R}from"./VTLMaterialManager.js";import{d as V,B as x}from"./enums3.js";import{S as P}from"./StyleRepository.js";import{L as D}from"./LayerView3D.js";import{T as E}from"./TiledLayerView3D.js";import{O as F,P as O}from"./terrainUtils.js";import k from"../views/layers/LayerView.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./handleUtils.js";import"./watch.js";import"./ArrayPool.js";import"../core/scheduling.js";import"./nextTick.js";import"./get.js";import"./utils.js";import"./tracking.js";import"./metadata.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../core/urlUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../kernel.js";import"./assets.js";import"../request.js";import"../intl.js";import"./number.js";import"./jsonMap.js";import"./locale.js";import"./messages.js";import"./Rect.js";import"./Texture.js";import"./context-util.js";import"./pbf.js";import"./rasterizingUtils.js";import"./floatRGBA.js";import"./config.js";import"../layers/support/TileInfo.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../layers/support/LOD.js";import"./TileKey.js";import"./TileInfoView.js";import"./mat3.js";import"./enums2.js";import"./FramebufferObject.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"../core/Evented.js";import"./enums.js";import"./vec4f32.js";import"./definitions.js";import"./enums4.js";import"./number2.js";import"./vec2f32.js";import"./GeometryUtils2.js";import"./ShaderCompiler.js";import"./programUtils.js";import"./VertexElementDescriptor.js";import"../Color.js";import"./colorUtils.js";import"./colorUtils2.js";import"./unitBezier.js";import"./GeometryUtils.js";import"./Geometry.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"../views/SceneView.js";import"../Camera.js";import"../core/Clonable.js";import"./Cyclical.js";import"../geometry.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../Viewpoint.js";import"./domUtils.js";import"./GraphicsCollection.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../geometry/projection.js";import"./mat4.js";import"./pe.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./boundedPlane.js";import"./ray.js";import"./byteSizeEstimations.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./vec4f64.js";import"./vector.js";import"./lineSegment.js";import"./plane.js";import"./mathUtils2.js";import"./RenderCoordsHelper.js";import"./sphere.js";import"./ElevationProvider.js";import"./ViewingMode.js";import"./spatialReferenceSupport.js";import"./scaleUtils.js";import"../widgets/Popup/PopupViewModel.js";import"../layers/Layer.js";import"../symbols/support/symbolUtils.js";import"./utils6.js";import"./asyncUtils.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"./projector.js";import"./widgetUtils.js";import"./mat2df32.js";import"./mat2d.js";import"./jsxFactory.js";import"./jsxWidgetSupport.js";import"./InputManager.js";import"./ObservableValue.js";import"./layerViewUtils.js";import"../widgets/Feature/FeatureViewModel.js";import"./throttle.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./executeQueryJSON.js";import"./utils4.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils5.js";import"./pbfQueryUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"../rest/support/FeatureSet.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"./featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils2.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"./editsZScale.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"../layers/mixins/BlendLayer.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureLayerBase.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"./OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/TimeReference.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"./labelingInfo.js";import"./versionUtils.js";import"./styleUtils.js";import"../support/popupUtils.js";import"./actions.js";import"./AnchorElementViewModel.js";import"../widgets/support/GoTo.js";import"./layerUtils.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./loadAll.js";import"./writeUtils.js";import"../Ground.js";import"./debugFlags.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"./basemapUtils.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../support/TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./Scheduler.js";import"./debugFlags2.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces3.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"../widgets/Popup.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"../widgets/Attachments.js";import"./unitFormatUtils.js";import"./messageBundle.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"./themeUtils.js";import"./uriUtils.js";import"./utils15.js";import"./numberUtils.js";import"./chartUtils.js";import"./Spinner.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"./TerrainConst.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./vec2.js";import"./SSAOHelper.js";import"./bufferWriterUtils.js";import"./basicInterfaces.js";import"./Util2.js";import"./Material.js";import"./VertexAttribute.js";import"./utils20.js";import"./doublePrecisionUtils.js";import"./triangle.js";import"./Indices.js";import"./ShaderTechniqueConfiguration.js";import"./RenderSlot.js";import"./vec3f32.js";import"./requestImageUtils.js";import"./BufferView.js";import"./OrderIndependentTransparency.js";import"./CameraSpace.glsl.js";import"./line2.js";import"./DefaultBufferWriter.js";import"./Octree.js";import"./frustum.js";import"./InterleavedLayout.js";import"./types.js";import"./triangulationUtils.js";import"./earcut.js";import"./deduplicate.js";import"./MultipassGeometryTest.glsl.js";import"./graphicUtils.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"./hydratedFeatures.js";import"./interfaces4.js";import"./NestedMap.js";import"./Camera.js";import"./Intersector.js";import"./verticalOffsetUtils.js";import"./quat.js";import"./glUtil.js";import"./OutputHighlight.glsl.js";import"./GeometryUtil.js";import"./HUDMaterial.js";import"./VisualVariables.glsl.js";import"./GLTextureMaterial.js";import"./axisAngleDegrees.js";import"./earthUtils.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./ElevationQuery.js";import"./edgeUtils.js";import"./vec32.js";import"./SnappingCandidate.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./symbolColorUtils.js";import"./VertexColor.glsl.js";import"./callExpressionWithFeature.js";import"./line.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./ColorMaterial.js";import"./viewpointUtils.js";import"./ray2.js";import"./resources.js";import"./labelFormatUtils.js";import"./FeatureTileDescriptor3D.js";import"./geometryServiceUtils.js";import"./project.js";import"../rest/support/ProjectParameters.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./WorkerHandle.js";import"./ElevationSamplerData.js";import"./DefaultVertexAttributeLayouts.js";import"../views/2d/ViewState.js";import"./mat2df64.js";import"./I3SUtil.js";import"./I3SBinaryReader.js";import"./edgeProcessing.js";import"./EdgeWorkerHandle.js";import"./workerHelper.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./Program.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../widgets/Attribution.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";class B{constructor(t,e){this._lockedSchemaPixelSize=t,this._isGCS=e}getLevelRowColumn(t){return this._isGCS?[t[0],t[1]>>1,t[2]>>1]:256===this._lockedSchemaPixelSize&&t[0]>0?[t[0]-1,t[1]>>1,t[2]>>1]:t}adjustLevel(t){return this._isGCS?t:256===this._lockedSchemaPixelSize?t>0?t-1:0:t}getShift(t,e){let r=0,s=0;return(256===this._lockedSchemaPixelSize||this._isGCS)&&(t[2]%2&&(r=e),t[1]%2&&(s=e)),[r,s]}getScale(t){if(this._isGCS){if(512===this._lockedSchemaPixelSize)return 4}else if(256===this._lockedSchemaPixelSize&&0===t)return 1;return 2}}class A extends g{constructor(t,e,r,s,i){super(t,e,r),this._memCache=s,this._loader=i,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new f(t.tileInfo,t.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach((t=>t.abort())),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(t,e,s,i){const o=new U(t,e,s,0);let m=this._memCache.get(o.id);if(r(m))return m.retain(),m;const l=await this._getVectorTileData(o);if(p(i),!this._layer)return null;if(m=this._memCache.get(o.id),r(m))return m.retain(),m;const a=this._layer.tileInfo.getTileBounds(c(),o),n=this._tileInfoView.getTileResolution(t);return m=new w(o,n,a[0],a[3],512,512,this._styleRepository,this._memCache),r(l)?(m.setData(l),m.retain(),this._memCache.put(o.id,m,m.memoryUsage*m.referenced,j)):m.setData(null),m.neededForCoverage=!0,m.transforms.tileUnitsToPixels=u(1/8,0,0,0,1/8,0,0,0,1),function(t,e){const r=[],s=new d(4096,r,(()=>{const t=new S;return t.show=!1,t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t})),i=new y(r,s,((e,r,s)=>new h(e,r,s,t.styleRepository,t.key.level,0)),((t,e)=>{b(t,e,!1)}),(()=>0),(t=>{const r=e.getStyleLayerByUID(t).getLayoutProperty("visibility");return!r||r.getValue()!==C.NONE}));r.push(t),s.add(t),i.setScreenSize(512,512),i.continue(1/0)}(m,this._styleRepository),m}_getVectorTileData(t){const e=t.id;if(this._ongoingTileRequests.has(e))return this._ongoingTileRequests.get(e);const r=new AbortController,s={signal:r.signal},i=this._getParsedVectorTileData(t,s).then((t=>(this._ongoingTileRequests.delete(e),this._ongoingRequestToController.delete(e),t))).catch((()=>(this._ongoingTileRequests.delete(e),this._ongoingRequestToController.delete(e),null)));return this._ongoingTileRequests.set(e,i),this._ongoingRequestToController.set(e,r),i}_getParsedVectorTileData(t,e){return this.fetchTileData(t,e).then((r=>this.parseTileData({key:t,data:r},e)))}request(t,e){return this._loader.request(t,"binary",e)}}const H={vtlBackground:I,vtlFill:L,vtlLine:T,vtlCircle:_,vtlSymbol:M};class G{constructor(t,e){this.spriteMosaic=t,this.glyphMosaic=e,this._brushCache=new Map,this._vtlMaterialManager=new R}dispose(){this._brushCache&&(this._brushCache.forEach((t=>t.dispose())),this._brushCache=null),this._vtlMaterialManager=s(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(t,e,r){const{context:s}=t,i=r.layers;r.backgroundBucketIds.length>0&&(t.renderPass="background",r.backgroundBucketIds.forEach((s=>this._renderStyleLayer(r.getLayerById(s),t,e,!0)))),s.setBlendingEnabled(!1),s.setDepthTestEnabled(!0),s.setDepthWriteEnabled(!0),s.setDepthFunction(V.LEQUAL),t.renderPass="opaque";for(let r=i.length-1;r>=0;r--)this._renderStyleLayer(i[r],t,e,!1);s.setDepthWriteEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunctionSeparate(x.ONE,x.ONE_MINUS_SRC_ALPHA,x.ONE,x.ONE_MINUS_SRC_ALPHA),t.renderPass="translucent";for(let r=0;r<i.length;r++)this._renderStyleLayer(i[r],t,e,!1);s.setDepthTestEnabled(!1),s.bindVAO()}_renderStyleLayer(t,e,r,s=!1){if(!(s||t&&r.layerData.has(t.uid)))return;const i=t.getLayoutProperty("visibility");if(i&&i.getValue()===C.NONE)return;const{renderPass:o}=e;let p;switch(t.type){case v.BACKGROUND:if("background"!==o)return;p="vtlBackground";break;case v.FILL:if("opaque"!==o&&"translucent"!==e.renderPass)return;p="vtlFill";break;case v.LINE:if("translucent"!==o)return;p="vtlLine";break;case v.CIRCLE:if("translucent"!==o)return;p="vtlCircle";break;case v.SYMBOL:if("translucent"!==o)return;p="vtlSymbol"}const m=e.displayLevel;void 0!==t.minzoom&&t.minzoom>m+1e-6||void 0!==t.maxzoom&&t.maxzoom<=m-1e-6||(e.styleLayerUID=t.uid,e.styleLayer=t,this._drawWithBrush(e,r,p))}_drawWithBrush(t,e,r){if(!this._brushCache.has(r)){const t=H[r];this._brushCache.set(r,new t)}this._brushCache.get(r).drawMany(t,[e])}}let q=class extends(E(D(k))){constructor(){super(...arguments),this.type="vector-tile-3d"}initialize(){if(i(this.layer.fullExtent))return void this.addResolvingPromise(Promise.reject(new e("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:t,spatialReference:s,state:o,viewingMode:p}=this.view,{pixelRatio:a}=o,n="local"===p&&!F(s)||O.force512VTL,j=this.layer.tileInfo.spatialReference.isGeographic,u=n?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,j?1:2),c=this._getTileInfoSupportError(u,this.layer.fullExtent);if(r(c))return this.addResolvingPromise(Promise.reject(c));const d=l((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=t.tilingScheme,s=e.pixelSize;let i;if(this.schemaHelper=new B(s,r(t.spatialReference)&&t.spatialReference.isGeographic),256===s){const t=this.layer.tileInfo.spatialReference.isGeographic;i=this.layer.tileInfo.getOrCreateCompatible(256,t?1:2)}else i=this.view.spatialReference.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const o=this._getTileInfoCompatibilityError(i,e);if(o)throw o;this.tileInfo=i}));this._tileHandlerController=new AbortController;const y=this.view.resourceController;this._memCache=y.memoryController.newCache(this.layer.uid,(t=>{t.release()}));const h=new P(this.layer.currentStyleInfo.style),g=t.mapTileRequester;this._tileHandler=new A(this.layer,h,a,this._memCache,g);const f=this._tileHandlerController.signal,b=t=>y.schedule(t),S=this._tileHandler.start({signal:f,schedule:b}),w=this._tileHandler.spriteMosaic;w.then((t=>{!m(f)&&this._tileHandler&&(this.painter=new G(t,this._tileHandler.glyphMosaic))})),S.then((()=>this._tileHandlerController=null)),this.updatingHandles.add((()=>({style:this.layer.currentStyleInfo.style,newPixelRatio:this.view.state?.pixelRatio})),(({style:t})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const e=new P(t),r=new A(this.layer,e,a,this._memCache,g),s=r.start({signal:this._tileHandlerController.signal,schedule:b}),i=r.spriteMosaic;s.then((()=>this._tileHandlerController=null)),this.updatingHandles.addPromise(Promise.all([s,i]).then((([,t])=>{const e=this._tileHandler,s=this.painter;this.painter=new G(t,r.glyphMosaic),this._tileHandler=r,this.emit("data-changed"),e.destroy(),s&&s.dispose()})))}));const C=Promise.all([d,S,w]);this.addResolvingPromise(C)}destroy(){this.painter=s(this.painter),this._tileHandlerController&&(this._tileHandlerController.abort(),this._tileHandlerController=null),o(this._tileHandler),this._memCache=o(this._memCache),this._tileHandler=null}get dataLevelRange(){const t=this.tileInfo.lods,e=t[0].scale,r=t[t.length-1].scale,s=this.levelRangeFromScaleRange(e,r);return 1===s.minLevel&&256===this.tileInfo.size[0]&&(s.minLevel=0),s}async fetchTile(t,e,r,s){return this._tileHandler.getVectorTile(t,e,r,s)}};t([a()],q.prototype,"layer",void 0),t([a()],q.prototype,"dataLevelRange",null),t([a()],q.prototype,"updatingProgressValue",void 0),q=t([n("esri.views.3d.layers.VectorTileLayerView3D")],q);const z=q;export{z as default};