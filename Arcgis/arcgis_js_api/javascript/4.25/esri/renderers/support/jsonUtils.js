// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Warning","../../core/accessorSupport/extensions/serializableProperty/reader","./types"],function(c,f,g,h){function e(a,d,b){return a?a&&(a.styleName||a.styleUrl)&&"uniqueValue"!==a.type?(b&&b.messages&&b.messages.push(new f("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+a.type+"'",{definition:a,context:b})),null):k(a,d,b):null}const k=g.createTypeReader({types:h.rendererTypes});c.fromJSON=function(a,d){return e(a,null,
d)};c.read=e;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});