// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.memoize=function(h){let f,c=[],d,g=!1;return function(...b){var a;if(a=g&&f===this)a:if(b.length!==c.length)a=!1;else{for(a=0;a<b.length;++a)if(b[a]!==c[a]){a=!1;break a}a=!0}if(a)return d;d=h.apply(this,b);f=this;c=b;g=!0;return d}};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});