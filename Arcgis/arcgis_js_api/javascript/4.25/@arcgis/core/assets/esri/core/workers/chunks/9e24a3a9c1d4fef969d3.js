"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6748],{86748:(t,e,o)=>{o.d(e,{Z:()=>J});var i=o(29768),r=o(66122),s=o(15324),n=o(12047),a=o(76506),l=o(92143),p=o(50406),d=o(34250),h=o(86787),c=o(97714),y=o(17533),u=o(2906),m=o(91306),f=o(14249),g=o(29107),v=o(75626),_=o(54414),b=o(72652),w=o(29641),C=o(45154),x=o(70821),I=o(34229),j=o(37029),Z=o(4292),F=o(30574),S=o(7471),T=o(58076),N=o(56890),O=o(2157),M=o(25977);o(21972),o(60474),o(66396),o(86656),o(71552),o(91055),o(6540),o(19657),o(6906),o(75067),o(89914),o(60991),o(31450),o(40642),o(60217),o(74569),o(21801),o(73796),o(60947),o(91597),o(35132),o(89623),o(84069),o(44567),o(98380),o(92896),o(22781),o(57251),o(32422),o(59465),o(1648),o(8925),o(33921),o(3482),o(30493),o(16769),o(93603),o(15438),o(593),o(85699),o(55531),o(96055),o(47776),o(18033),o(6331),o(62048),o(3296),o(98242);const R=l.L.getLogger("esri.PopupTemplate"),D=s.Z.ofType({key:"type",defaultKeyValue:"button",base:x.Z,typeMap:{button:I.Z,toggle:j.Z}}),L={base:O.Z,key:"type",typeMap:{media:C.Z,custom:M.Z,text:Z.Z,attachments:F.Z,fields:S.Z,expression:T.Z,relationship:N.Z}},A=["attachments","fields","media","text","expression","relationship"];let E=class extends((0,r.J)(n.wq)){constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title=""}castContent(t){return Array.isArray(t)?t.map((t=>(0,m.a)(L,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||(0,p.y8)(t)?t:(R.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e.description,e.mediaInfos,o):this._readPopupInfo(e)}writeContent(t,e,o,i){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>A.includes(t.type))).map((t=>t&&t.toJSON(i))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type?this._writeTextContent(t,e):"relationship"===t.type&&this._writeRelationshipContent(t,e)}))):e.description=t}writeFieldInfos(t,e,o,i){const{content:r}=this,s=Array.isArray(r)?r:null;if(t){const o=s?s.filter((t=>"fields"===t.type)):[],r=o.length&&o.every((t=>t.fieldInfos?.length));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(i);return r&&(e.visible=!1),e}))}if(s)for(const t of s)"fields"===t.type&&this._writeFieldsContent(t,e)}writeLayerOptions(t,e,o,i){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(i)}writeTitle(t,e){e.title=t||""}async collectRequiredFields(t,e){const o=this.expressionInfos||[];await this._collectExpressionInfoFields(t,e,[...o,...this._getContentExpressionInfos(this.content,o)]),(0,f.gd)(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const o=(0,a.d9)(t.fieldInfos);Array.isArray(e.fieldInfos)?o.forEach((t=>{const o=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));o?o.visible=!0:e.fieldInfos.push(t)})):e.fieldInfos=o}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeRelationshipContent(t,e){const o=t.orderByFields?.map((e=>this._toFieldOrderJSON(e,t.relationshipId)))||[],i=[...e.relatedRecordsInfo?.orderByFields||[],...o];e.relatedRecordsInfo={showRelatedRecords:!0,...i?.length&&{orderByFields:i}}}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const o=(0,a.d9)(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o}_readPopupInfoElements(t,e,o){const i={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||i.mediaInfos||(o.mediaInfos=e,i.mediaInfos=!0),C.Z.fromJSON(o)):"text"===o.type?(o.text||!t||i.description||(o.text=t,i.description=!0),Z.Z.fromJSON(o)):"attachments"===o.type?F.Z.fromJSON(o):"fields"===o.type?S.Z.fromJSON(o):"expression"===o.type?T.Z.fromJSON(o):"relationship"===o.type?N.Z.fromJSON(o):void 0)).filter(Boolean)}_toRelationshipContent(t){const{field:e,order:o}=t;if(!e?.startsWith("relationships/"))return null;const i=e.replace("relationships/","").split("/");if(2!==i.length)return null;const r=parseInt(i[0],10),s=i[1];return"number"==typeof r&&s?N.Z.fromJSON({relationshipId:r,orderByFields:[{field:s,order:o}]}):null}_toFieldOrderJSON(t,e){const{order:o,field:i}=t;return{field:`relationships/${e}/${i}`,order:o}}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o,relatedRecordsInfo:i={showRelatedRecords:!1}}){const r=[];t?r.push(new Z.Z({text:t})):r.push(new S.Z),Array.isArray(e)&&e.length&&r.push(C.Z.fromJSON({mediaInfos:e})),o&&r.push(F.Z.fromJSON({displayType:"auto"}));const{showRelatedRecords:s,orderByFields:n}=i;return s&&n?.length&&n.forEach((t=>{const e=this._toRelationshipContent(t);e&&r.push(e)})),r.length?r:t}_getContentElementFields(t){const e=t?.type;if("attachments"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)];if("custom"===e)return t.outFields||[];if("fields"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(t.fieldInfos??this.fieldInfos)];if("media"===e){const e=t.mediaInfos||[];return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...e.reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[])]}return"text"===e?this._extractFieldNames(t.text):[]}_getMediaInfoFields(t){const{caption:e,title:o,value:i}=t,r=i||{},{fields:s,normalizeField:n,tooltipField:a,sourceURL:l,linkURL:p}=r,d=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(l),...this._extractFieldNames(p),...s??[]];return n&&d.push(n),a&&d.push(a),d}_getContentExpressionInfos(t,e){return Array.isArray(t)?t.reduce(((t,e)=>[...t,..."expression"===e.type&&e.expressionInfo?[e.expressionInfo]:[]]),e):[]}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>(0,f.io)(t,e,o.expression))))}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>!t.startsWith("relationships/")&&!t.startsWith("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:i}=t,r="button"===i||"toggle"===i?t.image:"";return[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(r)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return[];const e=t.match(/{[^}]*}/g);if(!e)return[];const o=/\{(\w+):.+\}/,i=e.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(o,"{$1}")));return i?i.map((t=>t.slice(1,-1))):[]}};(0,i._)([(0,d.Cb)({type:D})],E.prototype,"actions",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"content",void 0),(0,i._)([(0,h.p)("content")],E.prototype,"castContent",null),(0,i._)([(0,c.r)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments","relatedRecordsInfo"])],E.prototype,"readContent",null),(0,i._)([(0,u.w)("content",{popupElements:{type:s.Z.ofType(g.Qp)},showAttachments:{type:Boolean},mediaInfos:{type:s.Z.ofType(C.t)},description:{type:String},relatedRecordsInfo:{type:w.Z}})],E.prototype,"writeContent",null),(0,i._)([(0,d.Cb)({type:[v.Z],json:{write:!0}})],E.prototype,"expressionInfos",void 0),(0,i._)([(0,d.Cb)({type:[_.Z]})],E.prototype,"fieldInfos",void 0),(0,i._)([(0,u.w)("fieldInfos")],E.prototype,"writeFieldInfos",null),(0,i._)([(0,d.Cb)({type:b.Z})],E.prototype,"layerOptions",void 0),(0,i._)([(0,u.w)("layerOptions")],E.prototype,"writeLayerOptions",null),(0,i._)([(0,d.Cb)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],E.prototype,"lastEditInfoEnabled",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"outFields",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"overwriteActions",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"returnGeometry",void 0),(0,i._)([(0,d.Cb)({json:{type:String}})],E.prototype,"title",void 0),(0,i._)([(0,u.w)("title")],E.prototype,"writeTitle",null),E=(0,i._)([(0,y.j)("esri.PopupTemplate")],E);const J=E},55531:(t,e,o)=>{o.d(e,{c:()=>i});const i=(0,o(57251).s)()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"})},8925:(t,e,o)=>{o.d(e,{d:()=>i});const i=(0,o(57251).s)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});i.toJSON.bind(i),i.fromJSON.bind(i)},33921:(t,e,o)=>{o.d(e,{a:()=>x,b:()=>C,c:()=>g,f:()=>v});var i=o(57251),r=o(3482),s=o(71252);const n={year:"numeric",month:"numeric",day:"numeric"},a={year:"numeric",month:"long",day:"numeric"},l={year:"numeric",month:"short",day:"numeric"},p={year:"numeric",month:"long",weekday:"long",day:"numeric"},d={hour:"numeric",minute:"numeric"},h={...d,second:"numeric"},c={"short-date":n,"short-date-short-time":{...n,...d},"short-date-short-time-24":{...n,...d,hour12:!1},"short-date-long-time":{...n,...h},"short-date-long-time-24":{...n,...h,hour12:!1},"short-date-le":n,"short-date-le-short-time":{...n,...d},"short-date-le-short-time-24":{...n,...d,hour12:!1},"short-date-le-long-time":{...n,...h},"short-date-le-long-time-24":{...n,...h,hour12:!1},"long-month-day-year":a,"long-month-day-year-short-time":{...a,...d},"long-month-day-year-short-time-24":{...a,...d,hour12:!1},"long-month-day-year-long-time":{...a,...h},"long-month-day-year-long-time-24":{...a,...h,hour12:!1},"day-short-month-year":l,"day-short-month-year-short-time":{...l,...d},"day-short-month-year-short-time-24":{...l,...d,hour12:!1},"day-short-month-year-long-time":{...l,...h},"day-short-month-year-long-time-24":{...l,...h,hour12:!1},"long-date":p,"long-date-short-time":{...p,...d},"long-date-short-time-24":{...p,...d,hour12:!1},"long-date-long-time":{...p,...h},"long-date-long-time-24":{...p,...h,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":d,"long-time":h},y=(0,i.s)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});y.apiValues,y.toJSON.bind(y),y.fromJSON.bind(y);const u={ar:"ar-u-nu-latn-ca-gregory"};let m=new WeakMap,f=c["short-date-short-time"];function g(t){return t?c[t]:null}function v(t,e){return function(t){const e=t||f;let o=m.get(e);if(!o){const t=(0,r.g)(),i=u[(0,r.g)()]||t;o=new Intl.DateTimeFormat(i,e),m.set(e,o)}return o}(e).format(t)}(0,r.b)((()=>{m=new WeakMap,f=c["short-date-short-time"]}));const _={ar:"ar-u-nu-latn"};let b=new WeakMap,w={};function C(t={}){const e={};return null!=t.digitSeparator&&(e.useGrouping=t.digitSeparator),null!=t.places&&(e.minimumFractionDigits=e.maximumFractionDigits=t.places),e}function x(t,e){return-0===t&&(t=0),function(t){const e=t||w;if(!b.has(e)){const o=(0,r.g)(),i=_[(0,r.g)()]||o;b.set(e,new Intl.NumberFormat(i,t))}return(0,s.b)(b.get(e))}(e).format(t)}(0,r.b)((()=>{b=new WeakMap,w={}}))},98242:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(12047),n=o(34250),a=(o(76506),o(91306),o(17533));o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let l=i=class extends s.wq{constructor(t){super(t),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new i({title:this.title,expression:this.expression})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"expression",void 0),(0,r._)([(0,n.Cb)({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"returnType",void 0),l=i=(0,r._)([(0,a.j)("esri.popup.ElementExpressionInfo")],l);const p=l},75626:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(12047),n=o(34250),a=(o(76506),o(91306),o(17533));o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let l=i=class extends s.wq{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new i({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"name",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"expression",void 0),(0,r._)([(0,n.Cb)({type:["string","number"],json:{write:!0}})],l.prototype,"returnType",void 0),l=i=(0,r._)([(0,a.j)("esri.popup.ExpressionInfo")],l);const p=l},54414:(t,e,o)=>{o.d(e,{Z:()=>y});var i,r=o(29768),s=o(57251),n=o(12047),a=o(76506),l=o(34250),p=(o(91306),o(59465)),d=o(17533),h=o(1648);o(71552),o(21972),o(60474),o(66396),o(86656),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991),o(8925),o(33921),o(3482);let c=i=class extends n.wq{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new i({fieldName:this.fieldName,format:this.format?(0,a.d9)(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),(0,r._)([(0,l.Cb)({type:h.Z,json:{write:!0}})],c.prototype,"format",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!0,default:!1}})],c.prototype,"isEditable",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,r._)([(0,p.e)(new s.J({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],c.prototype,"stringFieldOption",void 0),(0,r._)([(0,l.Cb)({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],c.prototype,"statisticType",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"tooltip",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"visible",void 0),c=i=(0,r._)([(0,d.j)("esri.popup.FieldInfo")],c);const y=c},72652:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(12047),n=o(34250),a=(o(76506),o(91306),o(17533));o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let l=i=class extends s.wq{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new i({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};(0,r._)([(0,n.Cb)({type:Boolean,json:{write:!0}})],l.prototype,"returnTopmostRaster",void 0),(0,r._)([(0,n.Cb)({type:Boolean,json:{write:!0}})],l.prototype,"showNoDataRecords",void 0),l=i=(0,r._)([(0,a.j)("esri.popup.LayerOptions")],l);const p=l},29641:(t,e,o)=>{o.d(e,{Z:()=>h});var i,r=o(29768),s=o(12047),n=o(76506),a=o(34250),l=(o(91306),o(17533)),p=o(30493);o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let d=i=class extends s.wq{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new i({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?(0,n.d9)(this.orderByFields):null})}};(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"showRelatedRecords",void 0),(0,r._)([(0,a.Cb)({type:[p.Z],json:{write:!0}})],d.prototype,"orderByFields",void 0),d=i=(0,r._)([(0,l.j)("esri.popup.RelatedRecordsInfo")],d);const h=d},29107:(t,e,o)=>{o.d(e,{Qp:()=>p});var i=o(30574),r=(o(2157),o(25977),o(58076)),s=o(7471),n=o(45154),a=o(56890),l=o(4292);o(34250),o(92143),o(31450),o(71552),o(76506),o(40642),o(91306),o(60474),o(66396),o(86656),o(60991),o(17533),o(6540),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406),o(98242),o(2906),o(54414),o(57251),o(59465),o(1648),o(8925),o(33921),o(3482),o(97714),o(16769),o(93603),o(15438),o(593),o(85699),o(55531),o(96055),o(47776),o(18033),o(6331),o(62048),o(66122),o(30493);const p={base:null,key:"type",typeMap:{attachment:i.Z,media:n.Z,text:l.Z,expression:r.Z,field:s.Z,relationship:a.Z}}},30574:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(2157);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406);let l=i=class extends a.Z{constructor(t){super(t),this.description=null,this.displayType="auto",this.title=null,this.type="attachments"}clone(){return new i({description:this.description,displayType:this.displayType,title:this.title})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"description",void 0),(0,r._)([(0,s.Cb)({type:["auto","preview","list"],json:{write:!0}})],l.prototype,"displayType",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"title",void 0),(0,r._)([(0,s.Cb)({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=i=(0,r._)([(0,n.j)("esri.popup.content.AttachmentsContent")],l);const p=l},16769:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(93603),l=o(55531);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(15438),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406),o(593),o(85699),o(57251);let p=i=class extends a.Z{constructor(t){super(t),this.type="bar-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:l.c.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.BarChartMediaInfo")],p);const d=p},96055:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(93603),l=o(55531);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(15438),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406),o(593),o(85699),o(57251);let p=i=class extends a.Z{constructor(t){super(t),this.type="column-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:l.c.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.ColumnChartMediaInfo")],p);const d=p},2157:(t,e,o)=>{o.d(e,{Z:()=>l});var i=o(29768),r=o(12047),s=o(34250),n=(o(76506),o(91306),o(17533));o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let a=class extends r.wq{constructor(t){super(t),this.type=null}};(0,i._)([(0,s.Cb)({type:["attachments","custom","fields","media","text","expression","relationship"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,i._)([(0,n.j)("esri.popup.content.Content")],a);const l=a},25977:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(29768),s=o(76506),n=o(34250),a=(o(91306),o(17533)),l=o(2157);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406);let p=i=class extends l.Z{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new i({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?(0,s.d9)(this.outFields):null})}};(0,r._)([(0,n.Cb)()],p.prototype,"creator",void 0),(0,r._)([(0,n.Cb)()],p.prototype,"destroyer",void 0),(0,r._)([(0,n.Cb)()],p.prototype,"outFields",void 0),(0,r._)([(0,n.Cb)({type:["custom"],readOnly:!0})],p.prototype,"type",void 0),p=i=(0,r._)([(0,a.j)("esri.popup.content.CustomContent")],p);const d=p},58076:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(98242),l=o(2157);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406);let p=i=class extends l.Z{constructor(t){super(t),this.expressionInfo=null,this.type="expression"}clone(){return new i({expressionInfo:this.expressionInfo?.clone()})}};(0,r._)([(0,s.Cb)({type:a.Z,json:{write:!0}})],p.prototype,"expressionInfo",void 0),(0,r._)([(0,s.Cb)({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.ExpressionContent")],p);const d=p},7471:(t,e,o)=>{o.d(e,{Z:()=>c});var i,r=o(29768),s=o(76506),n=o(34250),a=(o(91306),o(17533)),l=o(2906),p=o(54414),d=o(2157);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(57251),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406),o(59465),o(1648),o(8925),o(33921),o(3482);let h=i=class extends d.Z{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,e){e.fieldInfos=t&&t.map((t=>t.toJSON()))}clone(){return new i((0,s.d9)({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};(0,r._)([(0,n.Cb)({type:Object,json:{write:!0}})],h.prototype,"attributes",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,r._)([(0,n.Cb)({type:[p.Z]})],h.prototype,"fieldInfos",void 0),(0,r._)([(0,l.w)("fieldInfos")],h.prototype,"writeFieldInfos",null),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=i=(0,r._)([(0,a.j)("esri.popup.content.FieldsContent")],h);const c=h},47776:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(15438),l=o(18033);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406);let p=i=class extends a.Z{constructor(t){super(t),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:Number,json:{write:!0}})],p.prototype,"refreshInterval",void 0),(0,r._)([(0,s.Cb)({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:l.Z,json:{write:!0}})],p.prototype,"value",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.ImageMediaInfo")],p);const d=p},6331:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(93603),l=o(55531);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(15438),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406),o(593),o(85699),o(57251);let p=i=class extends a.Z{constructor(t){super(t),this.type="line-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:l.c.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.LineChartMediaInfo")],p);const d=p},45154:(t,e,o)=>{o.d(e,{Z:()=>_,t:()=>f});var i=o(29768),r=o(76506),s=o(34250),n=(o(91306),o(97714)),a=o(17533),l=o(2906),p=o(16769),d=o(96055),h=o(2157),c=o(47776),y=o(6331),u=o(62048),m=o(15438);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(93603),o(593),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406),o(85699),o(55531),o(57251),o(18033);const f={base:m.Z,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":p.Z,"column-chart":d.Z,"line-chart":y.Z,"pie-chart":u.Z,image:c.Z}};var g;let v=g=class extends h.Z{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map((t=>"image"===t.type?c.Z.fromJSON(t):"barchart"===t.type?p.Z.fromJSON(t):"columnchart"===t.type?d.Z.fromJSON(t):"linechart"===t.type?y.Z.fromJSON(t):"piechart"===t.type?u.Z.fromJSON(t):void 0)).filter(Boolean)}writeMediaInfos(t,e){e.mediaInfos=t&&t.map((t=>t.toJSON()))}clone(){return new g((0,r.d9)({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}};(0,i._)([(0,s.Cb)()],v.prototype,"activeMediaInfoIndex",void 0),(0,i._)([(0,s.Cb)({type:Object,json:{write:!0}})],v.prototype,"attributes",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],v.prototype,"description",void 0),(0,i._)([(0,s.Cb)({types:[f]})],v.prototype,"mediaInfos",void 0),(0,i._)([(0,n.r)("mediaInfos")],v.prototype,"readMediaInfos",null),(0,i._)([(0,l.w)("mediaInfos")],v.prototype,"writeMediaInfos",null),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],v.prototype,"title",void 0),(0,i._)([(0,s.Cb)({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=g=(0,i._)([(0,a.j)("esri.popup.content.MediaContent")],v);const _=v},62048:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(93603),l=o(55531);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(15438),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406),o(593),o(85699),o(57251);let p=i=class extends a.Z{constructor(t){super(t),this.type="pie-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:l.c.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.PieChartMediaInfo")],p);const d=p},56890:(t,e,o)=>{o.d(e,{Z:()=>h});var i=o(29768),r=o(66122),s=o(34250),n=(o(76506),o(91306)),a=o(17533),l=o(2157),p=o(30493);o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991),o(12047);let d=class extends((0,r.J)(l.Z)){constructor(t){super(t),this.description=null,this.displayCount=null,this.displayType="list",this.orderByFields=null,this.relationshipId=null,this.title=null,this.type="relationship"}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],d.prototype,"description",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{type:n.I,write:!0}})],d.prototype,"displayCount",void 0),(0,i._)([(0,s.Cb)({type:["list"],json:{write:!0}})],d.prototype,"displayType",void 0),(0,i._)([(0,s.Cb)({type:[p.Z],json:{write:!0}})],d.prototype,"orderByFields",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{type:n.I,write:!0}})],d.prototype,"relationshipId",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],d.prototype,"title",void 0),(0,i._)([(0,s.Cb)({type:["relationship"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=(0,i._)([(0,a.j)("esri.popup.content.RelationshipContent")],d);const h=d},4292:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(2157);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406);let l=i=class extends a.Z{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new i({text:this.text})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"text",void 0),(0,r._)([(0,s.Cb)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=i=(0,r._)([(0,n.j)("esri.popup.content.TextContent")],l);const p=l},93603:(t,e,o)=>{o.d(e,{Z:()=>p});var i=o(29768),r=o(34250),s=(o(76506),o(91306),o(17533)),n=o(15438),a=o(593);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(12047),o(21972),o(91055),o(19657),o(6906),o(50406),o(85699);let l=class extends n.Z{constructor(t){super(t),this.type=null,this.value=null}};(0,i._)([(0,r.Cb)({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),(0,i._)([(0,r.Cb)({type:a.Z,json:{write:!0}})],l.prototype,"value",void 0),l=(0,i._)([(0,s.j)("esri.popup.content.mixins.ChartMediaInfo")],l);const p=l},15438:(t,e,o)=>{o.d(e,{Z:()=>l});var i=o(29768),r=o(12047),s=o(34250),n=(o(76506),o(91306),o(17533));o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let a=class extends r.wq{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],a.prototype,"altText",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],a.prototype,"caption",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],a.prototype,"title",void 0),(0,i._)([(0,s.Cb)({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,i._)([(0,n.j)("esri.popup.content.mixins.MediaInfo")],a);const l=a},593:(t,e,o)=>{o.d(e,{Z:()=>h});var i,r=o(29768),s=o(12047),n=o(76506),a=o(34250),l=(o(91306),o(17533)),p=o(85699);o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let d=i=class extends s.wq{constructor(t){super(t),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new i({fields:(0,n.d9)(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};(0,r._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"fields",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"normalizeField",void 0),(0,r._)([(0,a.Cb)({type:[p.Z],json:{read:!1}})],d.prototype,"series",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"tooltipField",void 0),d=i=(0,r._)([(0,l.j)("esri.popup.content.support.ChartMediaInfoValue")],d);const h=d},85699:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(21972),n=o(34250),a=(o(76506),o(91306),o(17533));o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let l=i=class extends s.Z{constructor(t){super(t),this.fieldName=null,this.tooltip=null,this.value=null}clone(){return new i({fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};(0,r._)([(0,n.Cb)()],l.prototype,"fieldName",void 0),(0,r._)([(0,n.Cb)()],l.prototype,"tooltip",void 0),(0,r._)([(0,n.Cb)()],l.prototype,"value",void 0),l=i=(0,r._)([(0,a.j)("esri.popup.content.support.ChartMediaInfoValueSeries")],l);const p=l},18033:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(12047),n=o(34250),a=(o(76506),o(91306),o(17533));o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let l=i=class extends s.wq{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new i({linkURL:this.linkURL,sourceURL:this.sourceURL})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"linkURL",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"sourceURL",void 0),l=i=(0,r._)([(0,a.j)("esri.popup.content.support.ImageMediaInfoValue")],l);const p=l},1648:(t,e,o)=>{o.d(e,{Z:()=>y});var i,r=o(29768),s=o(8925),n=o(12047),a=o(34250),l=(o(76506),o(91306)),p=o(59465),d=o(17533),h=o(33921);o(57251),o(71552),o(21972),o(60474),o(66396),o(86656),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991),o(3482);let c=i=class extends n.wq{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null}clone(){return new i({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?(0,h.f)(t,{...(0,h.c)(this.dateFormat),...this.dateTimeFormatOptions}):(0,h.a)(t,(0,h.b)(this))}formatRasterPixelValue(t){if(t.includes("-"))return t;let e,o;return t.trim().includes(",")?(e=",",o=e+" ",this._formatDelimitedString(t,e,o,this)):t.trim().includes(";")?(e=";",o=e+" ",this._formatDelimitedString(t,e,o,this)):t.trim().includes(" ")?(e=o=" ",this._formatDelimitedString(t,e,o,this)):this.format(Number(t))}_formatDelimitedString(t,e,o,i){return t&&e&&o&&i?t.trim().split(e).map((t=>this.format(Number(t)))).join(o):t}};(0,r._)([(0,p.e)(s.d)],c.prototype,"dateFormat",void 0),(0,r._)([(0,a.Cb)({type:Object,json:{read:!1}})],c.prototype,"dateTimeFormatOptions",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"digitSeparator",void 0),(0,r._)([(0,a.Cb)({type:l.I,json:{write:!0}})],c.prototype,"places",void 0),c=i=(0,r._)([(0,d.j)("esri.popup.support.FieldInfoFormat")],c);const y=c},30493:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(12047),n=o(34250),a=(o(76506),o(91306),o(17533));o(21972),o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let l=i=class extends s.wq{constructor(t){super(t),this.field=null,this.order=null}clone(){return new i({field:this.field,order:this.order})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"field",void 0),(0,r._)([(0,n.Cb)({type:["asc","desc"],json:{write:!0}})],l.prototype,"order",void 0),l=i=(0,r._)([(0,a.j)("esri.popup.support.RelatedRecordsInfoFieldOrder")],l);const p=l},70821:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(29768),s=o(21972),n=o(3296),a=o(34250),l=(o(76506),o(91306),o(17533));o(60474),o(66396),o(86656),o(71552),o(92143),o(31450),o(40642),o(91055),o(6540),o(19657),o(6906),o(50406),o(60991);let p=i=class extends((0,n.IG)(s.Z)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};(0,r._)([(0,a.Cb)()],p.prototype,"active",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"className",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"disabled",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"id",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"indicator",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"title",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"type",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"visible",void 0),p=i=(0,r._)([(0,l.j)("esri.support.actions.ActionBase")],p);const d=p},34229:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(70821);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(21972),o(91055),o(19657),o(6906),o(50406),o(3296);let l=i=class extends a.Z{constructor(t){super(t),this.image=null,this.type="button"}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};(0,r._)([(0,s.Cb)()],l.prototype,"image",void 0),l=i=(0,r._)([(0,n.j)("esri.support.Action.ActionButton")],l);const p=l},37029:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(29768),s=o(34250),n=(o(76506),o(91306),o(17533)),a=o(70821);o(92143),o(31450),o(71552),o(40642),o(60474),o(66396),o(86656),o(60991),o(6540),o(21972),o(91055),o(19657),o(6906),o(50406),o(3296);let l=i=class extends a.Z{constructor(t){super(t),this.image=null,this.type="toggle",this.value=!1}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};(0,r._)([(0,s.Cb)()],l.prototype,"image",void 0),(0,r._)([(0,s.Cb)()],l.prototype,"value",void 0),l=i=(0,r._)([(0,n.j)("esri.support.Action.ActionToggle")],l);const p=l}}]);