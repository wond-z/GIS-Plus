// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/Logger ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/support/layerUtils ./LayerView3D ./TiledLayerView3D ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),function(l,h,r,q,g,t,m,e,A,u,
v,w,x,y,z){e=function(n){function k(){var a=n.apply(this,arguments)||this;a.type="wmts-3d";return a}l._inheritsLoose(k,n);var d=k.prototype;d._getCompatibleTileInfoMatrixSet=function(a,b=!1){const c=v.getTileMaxtrixSetFromActiveLayer(this.layer);if(g.isSome(c)){if(r.isCollection(c))return c.find(f=>{f=a(f);g.isSome(f)&&(b?q.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",f):this.addResolvingPromise(Promise.reject(f)));return null==f});const p=a(c);
g.isSome(p)&&(b?q.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",p):this.addResolvingPromise(Promise.reject(p)));return c}return null};d.initialize=function(){this._getCompatibleTileInfoMatrixSet(b=>this._getTileInfoSupportError(b.tileInfo,b.fullExtent));const a=t.whenOnce(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const b=this._getCompatibleTileInfoMatrixSet(c=>this._getTileInfoSupportError(c.tileInfo,c.fullExtent)||this._getTileInfoCompatibilityError(c.tileInfo,
this.view.basemapTerrain.tilingScheme));g.isNone(b)||(this.layer.activeLayer.tileMatrixSetId!==b.id&&(this.layer.activeLayer.tileMatrixSetId=b.id),this.tileInfo=b.tileInfo,this.layer.fullExtent=b.fullExtent)});this.addResolvingPromise(a);this.when(()=>this._postInitialize())};d.refresh=function(){this.emit("data-changed")};d.canResume=function(){if(!n.prototype.canResume.call(this))return!1;const a=this.layer.activeLayer.tileMatrixSet;return a&&!this._getTileInfoError(a.tileInfo,a.fullExtent)};d.doRefresh=
function(){var a=l._asyncToGenerator(function*(){this.suspended||this.emit("data-changed")});return function(){return a.apply(this,arguments)}}();d._postInitialize=function(){this.updatingHandles.add(()=>this.layer?.activeLayer?.styleId,()=>this.refresh());this.updatingHandles.add(()=>this.layer?.activeLayer,a=>{const b=this._getCompatibleTileInfoMatrixSet(c=>this._getTileInfoSupportError(c.tileInfo,c.fullExtent)||this._getTileInfoCompatibilityError(c.tileInfo,this.view.basemapTerrain.tilingScheme),
!0);g.isSome(b)&&a.tileMatrixSetId!==b.id&&(this.layer.activeLayer.tileMatrixSetId=b.id);this.notifyChange("suspended");this.canResume()&&this.refresh()})};d._getTileInfoError=function(a,b){return this._getTileInfoSupportError(a,b)||this._getTileInfoCompatibilityError(a,this.view.basemapTerrain.tilingScheme)};l._createClass(k,[{key:"hasMixedImageFormats",get:function(){return!0}}]);return k}(z(x.TiledLayerView3D(w.LayerView3D(y))));h.__decorate([m.property({readOnly:!0})],e.prototype,"hasMixedImageFormats",
null);h.__decorate([m.property()],e.prototype,"layer",void 0);h.__decorate([m.property()],e.prototype,"suspended",void 0);return e=h.__decorate([u.subclass("esri.views.3d.layers.WMTSLayerView3d")],e)});