/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";const l=[{scale:565,level:9},{scale:9028,level:8},{scale:72224,level:7},{scale:288896,level:6},{scale:2311163,level:5},{scale:18489298,level:4},{scale:73957191,level:3},{scale:295828764,level:2}];async function s(s){const{view:r}=await async function(l){if(!l.view)throw new e("bin-level:missing-parameters","'view' parameter is required");return await l.view.when(),{...l}}(s);return function(e){let s=2;for(const r of l)if(!(r.scale<e)){s=r.level;break}return s}(r.scale)}export{s as default};
