// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../layers/support/source/DataLayerSource ../../geometry/SpatialReference".split(" "),function(m,c,a,n,p,d,q,r,g,t,u){var h;a=h=function(e){function k(b){b=e.call(this,b)||this;b.cacheHint=void 0;b.dynamicDataSource=
void 0;b.gdbVersion=null;b.geometryPrecision=void 0;b.historicMoment=null;b.maxAllowableOffset=void 0;b.objectIds=null;b.orderByFields=null;b.outFields=null;b.outSpatialReference=null;b.relationshipId=void 0;b.start=void 0;b.num=void 0;b.returnGeometry=!1;b.returnM=void 0;b.returnZ=void 0;b.where=null;return b}m._inheritsLoose(k,e);var l=k.prototype;l._writeHistoricMoment=function(b,f){f.historicMoment=b&&b.getTime()};l.writeStart=function(b,f){f.resultOffset=this.start;f.resultRecordCount=this.num||
10;0<this.start&&null==this.where&&(f.definitionExpression="1\x3d1")};l.clone=function(){return new h(p.clone({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,
start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))};return k}(n.JSONSupport);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"cacheHint",void 0);c.__decorate([d.property({type:t.DataLayerSource,json:{write:!0}})],a.prototype,"dynamicDataSource",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,
"geometryPrecision",void 0);c.__decorate([d.property({type:Date})],a.prototype,"historicMoment",void 0);c.__decorate([g.writer("historicMoment")],a.prototype,"_writeHistoricMoment",null);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maxAllowableOffset",void 0);c.__decorate([d.property({type:[Number],json:{write:!0}})],a.prototype,"objectIds",void 0);c.__decorate([d.property({type:[String],json:{write:!0}})],a.prototype,"orderByFields",void 0);c.__decorate([d.property({type:[String],
json:{write:!0}})],a.prototype,"outFields",void 0);c.__decorate([d.property({type:u,json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"relationshipId",void 0);c.__decorate([d.property({type:Number,json:{read:{source:"resultOffset"}}})],a.prototype,"start",void 0);c.__decorate([g.writer("start"),g.writer("num")],a.prototype,"writeStart",null);c.__decorate([d.property({type:Number,json:{read:{source:"resultRecordCount"}}})],
a.prototype,"num",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"returnGeometry",void 0);c.__decorate([d.property({type:Boolean,json:{write:{overridePolicy(e){return{enabled:e}}}}})],a.prototype,"returnM",void 0);c.__decorate([d.property({type:Boolean,json:{write:{overridePolicy(e){return{enabled:e}}}}})],a.prototype,"returnZ",void 0);c.__decorate([d.property({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],a.prototype,"where",void 0);
a=h=c.__decorate([r.subclass("esri.rest.support.RelationshipQuery")],a);a.from=q.ensureType(a);return a});