// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../layers/graphics/dehydratedFeatures ../../../../rest/query/operations/query ../../support/PBFDecoder".split(" "),function(v,l,f,q,r,w,g,B,C,t,x,
y,z){let k=function(a){function c(b){return a.call(this,b)||this}l._inheritsLoose(c,a);var e=c.prototype;e.queryFeatureCount=function(b,d){return this.layer.queryFeatureCount(b,d)};e.destroy=function(){this._decoder=r.destroyMaybe(this._decoder)};e._createRequestOptions=function(b){return{...b,query:{...this.layer.customParameters,token:this.layer.apiKey,...b?.query}}};l._createClass(c,[{key:"queryFeaturesDehydrated",get:function(){var b=this.layer.capabilities;if((b=b&&b.query)&&b.supportsFormatPBF){r.isNone(this._decoder)&&
(this._decoder=new z.PBFDecoder(this.schedule));const d={sourceSpatialReference:this.layer.spatialReference?.toJSON()??null,applyTransform:!0,maxStringAttributeLength:1024};return(h,m)=>y.runQuery(this.layer.parsedUrl,h,"pbf",this._createRequestOptions(m)).then(A=>{w.throwIfAborted(m);return r.isSome(this._decoder)?this._decoder.invoke({buffer:A.data,options:d},m.signal):Promise.reject(w.createAbortError())})}return(d,h)=>y.executeQuery(this.layer.parsedUrl,d,this.layer.spatialReference,this._createRequestOptions(h)).then(m=>
x.fromFeatureSetJSON(m.data))}}]);return c}(q);f.__decorate([g.property({constructOnly:!0})],k.prototype,"layer",void 0);f.__decorate([g.property({constructOnly:!0})],k.prototype,"schedule",void 0);f.__decorate([g.property({readOnly:!0})],k.prototype,"queryFeaturesDehydrated",null);k=f.__decorate([t.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],k);let n=function(a){function c(b){return a.call(this,b)||this}l._inheritsLoose(c,a);var e=c.prototype;e.queryFeaturesDehydrated=
function(b,d){return this.layer.queryFeatures(b,d)};e.queryFeatureCount=function(b,d){return this.layer.queryFeatureCount(b,d)};return c}(q);f.__decorate([g.property({constructOnly:!0})],n.prototype,"layer",void 0);f.__decorate([g.property({readOnly:!0})],n.prototype,"queryFeaturesDehydrated",null);n=f.__decorate([t.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],n);let u=function(a){function c(e){return a.call(this,e)||this}l._inheritsLoose(c,a);c.prototype.queryFeaturesDehydrated=
function(e,b){return this.layer.queryFeatures(e,b)};return c}(q);f.__decorate([g.property({constructOnly:!0})],u.prototype,"layer",void 0);u=f.__decorate([t.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],u);let p=function(a){function c(b){return a.call(this,b)||this}l._inheritsLoose(c,a);var e=c.prototype;e.queryFeaturesDehydrated=function(b,d){return this.source.queryFeaturesJSON(b,d).then(x.fromFeatureSetJSON,h=>{if(h&&"query-features-json:unsupported"===
h.name)return this.layer.queryFeatures(b,d);throw h;})};e.queryFeatureCount=function(b,d){return this.layer.queryFeatureCount(b,d)};return c}(q);f.__decorate([g.property({constructOnly:!0})],p.prototype,"layer",void 0);f.__decorate([g.property({constructOnly:!0})],p.prototype,"source",void 0);p=f.__decorate([t.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],p);v.createFeatureTileQuery3D=function(a,c){return"feature"===a.type&&"feature-layer"===a.source.type?r.isSome(a.infoFor3D)?
new n({layer:a}):new k({layer:a,schedule:c}):"feature"===a.type&&"memory"===a.source.type||"csv"===a.type||"geojson"===a.type||"oriented-imagery"===a.type||"wfs"===a.type?new p({layer:a,source:a.source}):"ogc-feature"===a.type?new u({layer:a}):null};Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});