/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{L as e}from"./Logger.js";import t from"../layers/support/Field.js";import i from"../layers/support/FieldsIndex.js";import{fixFields as s}from"../layers/support/fieldUtils.js";function r(){return{fields:{type:[t],value:null},fieldsIndex:{readOnly:!0,get(){return new i(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const t=this._userOutFields;if(!t||!t.length)return null;if(t.includes("*"))return["*"];if(!this.fields)return t;for(const i of t){const s=this.fieldsIndex?.has(i);s||e.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:t})}return s(this.fieldsIndex,t)}}}}export{r as d};
