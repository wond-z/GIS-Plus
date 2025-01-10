/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{i as t}from"./maybe.js";import e from"../symbols/callouts/Callout3D.js";import o from"../symbols/callouts/LineCallout3D.js";function n(e){if(!e)return!1;const o=e.verticalOffset;return!!o&&!(o.screenLength<=0||t(o.maxWorldLength)&&o.maxWorldLength<=0)}function r(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const e=t.callout;return!!e&&!!e.visible&&!!n(t)}function s(t){return"point-3d"===t.type||"label-3d"===t.type}function l(t){return"center"===t.horizontalAlignment}const a={types:{key:"type",base:e,typeMap:{line:o}},json:{write:!0}};export{n as a,s as b,a as c,r as h,l as t};
