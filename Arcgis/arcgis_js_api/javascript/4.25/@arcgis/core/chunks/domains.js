/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"./object.js";import r from"../layers/support/CodedValueDomain.js";import e from"../layers/support/Domain.js";import o from"../layers/support/InheritedDomain.js";import t from"../layers/support/RangeDomain.js";const a={key:"type",base:e,typeMap:{range:t,"coded-value":r,inherited:o}};function s(e){if(!e||!e.type)return null;switch(e.type){case"range":return t.fromJSON(e);case"codedValue":return r.fromJSON(e);case"inherited":return o.fromJSON(e)}return null}export{s as f,a as t};
