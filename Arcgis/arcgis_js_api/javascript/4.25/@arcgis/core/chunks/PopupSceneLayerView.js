/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Error.js";import{i as s}from"./maybe.js";import"./Logger.js";import"./ensureType.js";import"../core/lang.js";import"./object.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{unpackFieldNames as a,populateMissingFields as o}from"../layers/support/fieldUtils.js";import{a as p,g as i}from"./popupUtils.js";const c=c=>{let n=class extends c{_validateFetchPopupFeatures(e){const{layer:s}=this,{popupEnabled:r}=s;return r?p(s,e)?void 0:new t("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s}):new t("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;const c=s(t)?t.clientGraphics:null;if(!c||0===c.length)return[];const n="scene"===this.layer.type&&s(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,l=a(this.layer.fieldsIndex,await i(n,p(this.layer,t)));await this.prepareFetchPopupFeatures(l);const u=new Set,h=[],y=[];for(const e of c)o(l,e,u)?y.push(e):h.push(e);return 0===y.length?h:this.whenGraphicAttributes(y,[...u]).catch((()=>y)).then((e=>h.concat(e)))}};return n=e([r("esri.views.3d.layers.support.PopupSceneLayerView")],n),n};export{c as P};