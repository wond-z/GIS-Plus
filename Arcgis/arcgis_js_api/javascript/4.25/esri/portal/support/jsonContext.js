// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/urlUtils","../Portal"],function(b,c,d){b.createForItemRead=function(a){return{origin:"portal-item",url:c.urlToObject(a.itemUrl),portal:a.portal||d.getDefault(),portalItem:a,readResourcePaths:[]}};b.createForItemWrite=function(a){return{origin:"portal-item",messages:[],writtenProperties:[],url:a.itemUrl?c.urlToObject(a.itemUrl):null,portal:a.portal||d.getDefault(),portalItem:a}};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});