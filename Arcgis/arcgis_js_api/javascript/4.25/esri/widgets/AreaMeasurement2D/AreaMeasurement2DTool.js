// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../intl ../../symbols ../../core/analysisThemeUtils ../../core/maybe ../../core/reactiveUtils ../../core/unitFormatUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/geometryEngine ../../geometry/projection ../../geometry/support/geodesicUtils ../../layers/GraphicsLayer ../../views/ViewingMode ../../views/draw/Draw ../../views/interactive/dragEventPipeline ../../views/interactive/GraphicManipulator ../../views/interactive/InteractiveToolBase ../../intl/messages ../../intl/locale ../../geometry/Point ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../symbols/TextSymbol ../../symbols/Font ../../symbols/SimpleMarkerSymbol ../../geometry/Polyline ../../geometry/SpatialReference ../../geometry/Polygon".split(" "),
function(h,A,p,ea,y,fa,ha,x,B,D,u,E,r,ia,ja,Q,l,m,g,F,R,S,C,T,U,G,V,H,W,X,Y,Z,I,J,z,aa){function ba(b,d,f){var a={style:"circle",color:x.getAccentColor(.5),outline:{type:"simple-line",width:0}};const e=new I({...a,size:8});a=new I({...a,size:12});b=new y({geometry:b,symbol:e});return new T.GraphicManipulator({view:d,layer:f,graphic:b,focusedSymbol:a})}function K(b,d,f){if(2===b.length)return b=new J({paths:b,spatialReference:d}),d?.isGeographic?g.isSupported(d)?d=g.geodesicDensify(b,1E5):(b=m.project(b,
z.WGS84),b=g.geodesicDensify(b,1E5),d=m.project(b,d)):d?.isWebMercator?d=l.geodesicDensify(b,1E5,"meters"):l.planarLength(b,"meters")>=f?(b=m.project(b,z.WGS84),b=g.geodesicDensify(b,1E5),d=m.project(b,d)):d=b,{measurement:null,fillGeometry:null,outlineGeometry:d};b.push(b[0]);var a=new J({paths:[b],spatialReference:d}),e=new aa({rings:[b],spatialReference:d});let c=b=null;if(d?.isGeographic)if(g.isSupported(d)){b=g.geodesicDensify(a,1E5);c=g.geodesicDensify(e,1E5);c=l.simplify(c);if(!c)return null;
e=g.geodesicLengths([a],"meters")[0];a=g.geodesicAreas([c],"square-meters")[0]}else{b=z.WGS84;a=m.project(a,b);e=m.project(e,b);b=g.geodesicDensify(a,1E5);c=g.geodesicDensify(e,1E5);c=l.simplify(c);if(!c)return null;e=g.geodesicLengths([a],"meters")[0];a=g.geodesicAreas([c],"square-meters")[0];b=m.project(b,d);c=m.project(c,d)}else if(d?.isWebMercator){b=l.geodesicDensify(a,1E5,"meters");c=l.geodesicDensify(e,1E5,"meters");c=l.simplify(c);if(!c)return null;e=l.geodesicLength(a,"meters");a=l.geodesicArea(c,
"square-meters")}else{const n=l.planarLength(a,"meters");if(n>=f){b=z.WGS84;a=m.project(a,b);e=m.project(e,b);b=g.geodesicDensify(a,1E5);c=g.geodesicDensify(e,1E5);c=l.simplify(c);if(!c)return null;e=g.geodesicLengths([a],"meters")[0];a=g.geodesicAreas([c],"square-meters")[0];b=m.project(b,d);c=m.project(c,d)}else{b=a;c=l.simplify(e);if(!c)return null;e=n;a=l.planarArea(c,"square-meters")}}return{measurement:{geometry:c,area:a,perimeter:e},fillGeometry:c,outlineGeometry:b}}function L(b){if(!b)return!1;
const {isGeographic:d,isWebMercator:f,isWGS84:a}=b;return d&&!a&&!g.isSupported(b)||!d&&!f}function M(b,d,f){if(!d||!b)return null;const a={area:null,perimeter:null},{area:e,perimeter:c}=d;switch(f){case "metric":a.area=u.formatMetricArea(b,e,"square-meters");break;case "imperial":a.area=u.formatImperialArea(b,e,"square-meters");break;default:d=E.convertUnit(e,"square-meters",f),a.area=u.formatDecimal(b,d,f)}if(f=ca(f))switch(f){case "metric":a.perimeter=u.formatMetricLength(b,c,"meters");break;case "imperial":a.perimeter=
u.formatImperialLength(b,c,"meters");break;default:d=E.convertUnit(c,"meters",f),a.perimeter=u.formatDecimal(b,d,f)}else a.perimeter="";return a}function ca(b){switch(b){case "metric":return"metric";case "imperial":return"imperial";case "square-inches":return"inches";case "square-feet":return"feet";case "square-yards":return"yards";case "square-miles":return"miles";case "square-us-feet":return"us-feet";case "square-meters":return"meters";case "square-kilometers":return"kilometers";case "acres":return"imperial";
case "ares":case "hectares":return"metric";case "square-millimeters":return"millimeters";case "square-centimeters":return"centimeters";case "square-decimeters":return"decimeters";default:return null}}h.AreaMeasurement2DTool=function(b){function d(a){a=b.call(this,a)||this;a._drawActive=!1;a._measurementLayer=new F({internal:!0,listMode:"hide",visible:!1});a._manipulatorLayer=new F({internal:!0,listMode:"hide",visible:!1});a._vertices=[];a.geodesicDistanceThreshold=1E5;a.measurement=null;a.measurementLabel=
null;return a}A._inheritsLoose(d,b);var f=d.prototype;f.initialize=function(){var a=this;G.fetchMessageBundle("esri/core/t9n/Units").then(c=>{this.messages=c});this.addHandles(V.onLocaleChange(A._asyncToGenerator(function*(){a.messages=yield G.fetchMessageBundle("esri/core/t9n/Units")})));const e=this.view;this._draw=new S({view:e});e.map.addMany([this._measurementLayer,this._manipulatorLayer]);e.focus();this.addHandles(D.watch(()=>[this.unit,this.geodesicDistanceThreshold,this.messages],()=>{this._updateGraphics()},
D.initial))};f.destroy=function(){const {map:a}=this.view;this._draw.view=null;this._draw=B.destroyMaybe(this._draw);a.removeMany([this._measurementLayer,this._manipulatorLayer]);this._measurementLayer.removeAll();this._manipulatorLayer.removeAll();this._set("measurement",null);this._set("measurementLabel",null);this._measurementLayer=B.destroyMaybe(this._measurementLayer);this._manipulatorLayer=B.destroyMaybe(this._manipulatorLayer);this._resetVertices()};f.onActivate=function(){this._drawActive||
0!==this._vertices.length||this._startSketch()};f.onShow=function(){this._measurementLayer.visible=!0;this._manipulatorLayer.visible=!0};f.onHide=function(){this._measurementLayer.visible=!1;this._manipulatorLayer.visible=!1};f.reset=function(){this._resetVertices();this._measurementLayer.removeAll();this._set("measurement",null);this._set("measurementLabel",null);this._draw.reset();this._drawActive=!1;this._updateSketch([])};f._resetVertices=function(){for(const {handle:a}of this._vertices)a.remove();
this._vertices=[]};f._startSketch=function(){this._drawActive=!0;const a=this._draw.create("polyline",{mode:"click"});a.on("vertex-add vertex-update vertex-remove cursor-update undo redo".split(" "),e=>this._updateSketch(e.vertices));a.on("draw-complete",()=>this._stopSketch())};f._stopSketch=function(){3>this._vertices.length?(this.reset(),this._startSketch()):(this.manipulators.forEach(({manipulator:a})=>{a.interactive=!0}),this._drawActive=!1,this.finishToolCreation())};f._updateSketch=function(a){const e=
this.view.spatialReference;if(e&&(!L(e)||m.isLoaded())){for(;this._vertices.length>a.length;){const {handle:k,manipulator:v}=this._vertices.pop();k.remove();this.manipulators.remove(v)}for(let k=this._vertices.length;k<a.length;k++){const [v,N]=a[k];var c=new H({x:v,y:N,spatialReference:e});c=ba(c,this.view,this._manipulatorLayer);this.manipulators.add(c);var n=C.createManipulatorDragEventPipeline(c,(O,da)=>{da.next(C.screenToMap(this.view)).next(C.dragGraphic(O.graphic,R.ViewingMode.Local)).next(()=>
{const P=O.graphic.geometry;this._vertices[k].coord=[P.x,P.y];this._updateGraphics()})});this._vertices.push({manipulator:c,coord:[v,N],handle:n})}c=this._vertices.length-1;n=this._vertices[c];var [q,t]=a[c];if(n.coord[0]!==q||n.coord[1]!==t)n.coord=[q,t],n.manipulator.graphic.geometry=new H({x:q,y:t,spatialReference:e});var w=this._drawActive?this._vertices[c].manipulator:null;this.manipulators.forEach(({manipulator:k})=>{k.interactive=null==w||k!==w});this._updateGraphics()}};f._updateGraphics=
function(){if(2>this._vertices.length)this._measurementLayer.removeAll();else{var a=this._vertices.map(({coord:v})=>v);if(a=K(a,this.view.spatialReference,this.geodesicDistanceThreshold)){var {measurement:e,fillGeometry:c,outlineGeometry:n}=a;this._set("measurement",e);a=e?M(this.messages,e,this.unit):null;this._set("measurementLabel",a);if(c||n){var {graphics:q}=this._measurementLayer;if(3===q.length){var t=q.at(0);var w=q.at(1);var k=q.at(2)}else t=new y({symbol:new W({color:x.getAccentColor(.3),
outline:null})}),w=new y({symbol:new X({color:x.getAccentColor(),width:2})}),k=new y({symbol:new Y({color:x.getTextColor(),font:new Z({size:14,family:"sans-serif"}),haloColor:x.getTextHaloColor(.5),haloSize:2})}),q.removeAll(),q.addMany([t,w,k]);t.geometry=c;w.geometry=n;k.geometry=c?.centroid;k.symbol.text=a?.area??""}}}};A._createClass(d,[{key:"cursor",get:function(){return this._drawActive?"crosshair":null}},{key:"editable",set:function(a){this._set("editable",a);a||this._draw.reset()}}]);return d}(U.InteractiveToolBase);
p.__decorate([r.property()],h.AreaMeasurement2DTool.prototype,"_drawActive",void 0);p.__decorate([r.property({readOnly:!0})],h.AreaMeasurement2DTool.prototype,"cursor",null);p.__decorate([r.property({value:!0})],h.AreaMeasurement2DTool.prototype,"editable",null);p.__decorate([r.property({type:Number})],h.AreaMeasurement2DTool.prototype,"geodesicDistanceThreshold",void 0);p.__decorate([r.property({readOnly:!0})],h.AreaMeasurement2DTool.prototype,"measurement",void 0);p.__decorate([r.property({readOnly:!0})],
h.AreaMeasurement2DTool.prototype,"measurementLabel",void 0);p.__decorate([r.property()],h.AreaMeasurement2DTool.prototype,"messages",void 0);p.__decorate([r.property()],h.AreaMeasurement2DTool.prototype,"unit",void 0);p.__decorate([r.property({constructOnly:!0})],h.AreaMeasurement2DTool.prototype,"view",void 0);h.AreaMeasurement2DTool=p.__decorate([Q.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],h.AreaMeasurement2DTool);h.createAreaMeasurementInfo2D=K;h.createAreaMeasurementLabel=
M;h.isProjectionEngineRequired=L;h.isSupported=function(b){return null!=b};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});