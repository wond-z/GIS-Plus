"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[332],{60332:(e,n,t)=>{t.r(n),t.d(n,{registerFunctions:()=>h});var a=t(94056),i=t(97944),r=t(84494),s=t(72256),l=t(50406),o=t(72274),f=t(9506),c=t(97546);async function u(e,n,t){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(await n.evaluateIdentifier(t,r))}const r={};for(let e=0;e<a.length;e++)r[a[e]]=i[e];return e.parameters=r,e}return e}function d(e,n,t=null){for(const t in e)if(t.toLowerCase()===n.toLowerCase())return e[t];return t}function m(e){if(null===e)return null;const n={type:d(e,"type",""),name:d(e,"name","")};if("range"===n.type)n.range=d(e,"range",[]);else{n.codedValues=[];for(const t of d(e,"codedValues",[]))n.codedValues.push({name:d(t,"name",""),code:d(t,"code",null)})}return n}function y(e){if(null===e)return null;const n={},t=d(e,"wkt",null);null!==t&&(n.wkt=t);const a=d(e,"wkid",null);return null!==a&&(n.wkid=a),n}function p(e){if(null===e)return null;const n={hasZ:d(e,"hasz",!1),hasM:d(e,"hasm",!1)},t=d(e,"spatialreference",null);t&&(n.spatialReference=y(t));const a=d(e,"x",null);if(null!==a)return n.x=a,n.y=d(e,"y",null),n;const i=d(e,"rings",null);if(null!==i)return n.rings=i,n;const r=d(e,"paths",null);if(null!==r)return n.paths=r,n;const s=d(e,"points",null);if(null!==s)return n.points=s,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const a=d(e,t,null);null!==a&&(n[t]=a)}return n}function h(e){"async"===e.mode&&(e.functions.getuser=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,s)=>{(0,a.p)(s,0,2,n,t);let l=(0,a.P)(s[1],""),o=!0===l;if(l=!0===l||!1===l?"":(0,a.y)(l),0===s.length||s[0]instanceof a.ah){let e=null;n.services&&n.services.portal&&(e=n.services.portal),s.length>0&&(e=(0,i.g)(s[0],e));const t=await(0,i.l)(e,l,o);if(t){const e=JSON.parse(JSON.stringify(t));for(const n of["lastLogin","created","modified"])void 0!==e[n]&&null!==e[n]&&(e[n]=new Date(e[n]));return a.F.convertObjectToArcadeDictionary(e)}return null}let f=null;if((0,a.t)(s[0])&&(f=s[0]),f){if(o=!1,l)return null;await f.load();const e=await f.getOwningSystemUrl();if(!e){if(!l){const e=await f.getIdentityUser();return e?a.F.convertObjectToArcadeDictionary({username:e}):null}return null}let t=null;n.services&&n.services.portal&&(t=n.services.portal),t=(0,i.g)(new a.ah(e),t);const r=await(0,i.l)(t,l,o);if(r){const e=JSON.parse(JSON.stringify(r));for(const n of["lastLogin","created","modified"])void 0!==e[n]&&null!==e[n]&&(e[n]=new Date(e[n]));return a.F.convertObjectToArcadeDictionary(e)}return null}throw new a.A(n,a.E.InvalidParameter,t)}))},e.signatures.push({name:"getuser",min:1,max:2}),e.functions.featuresetbyid=function(n,t){return e.standardFunctionAsync(n,t,((e,r,s)=>{if((0,a.p)(s,2,4,n,t),s[0]instanceof i.F){const e=(0,a.y)(s[1]);let i=(0,a.P)(s[2],null);const r=(0,a.W)((0,a.P)(s[3],!0));if(null===i&&(i=["*"]),!1===(0,a.o)(i))throw new a.A(n,a.E.InvalidParameter,t);return s[0].featureSetById(e,r,i)}throw new a.A(n,a.E.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(n,t){return e.standardFunctionAsync(n,t,((e,r,s)=>{if((0,a.p)(s,1,2,n,t),(0,a.s)(s[0])){let e=(0,a.P)(s[1],"datasource");return null===e&&(e="datasource"),e=(0,a.y)(e).toLowerCase(),(0,i.c)(s[0].fullSchema(),e,n.lrucache,n.interceptor,n.spatialReference)}throw new a.A(n,a.E.InvalidParameter,t)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(n,t){return e.standardFunctionAsync(n,t,((e,r,s)=>{if((0,a.p)(s,2,5,n,t),null===s[0])throw new a.A(n,a.E.PortalRequired,t);if(s[0]instanceof a.ah){const e=(0,a.y)(s[1]),r=(0,a.y)(s[2]);let l=(0,a.P)(s[3],null);const o=(0,a.W)((0,a.P)(s[4],!0));if(null===l&&(l=["*"]),!1===(0,a.o)(l))throw new a.A(n,a.E.InvalidParameter,t);let f=null;return n.services&&n.services.portal&&(f=n.services.portal),f=(0,i.g)(s[0],f),(0,i.a)(e,r,n.spatialReference,l,o,f,n.lrucache,n.interceptor)}if(!1===(0,a.n)(s[0]))throw new a.A(n,a.E.PortalRequired,t);const l=(0,a.y)(s[0]),o=(0,a.y)(s[1]);let f=(0,a.P)(s[2],null);const c=(0,a.W)((0,a.P)(s[3],!0));if(null===f&&(f=["*"]),!1===(0,a.o)(f))throw new a.A(n,a.E.InvalidParameter,t);if(n.services&&n.services.portal)return(0,i.a)(l,o,n.spatialReference,f,c,n.services.portal,n.lrucache,n.interceptor);throw new a.A(n,a.E.PortalRequired,t)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(n,t){return e.standardFunctionAsync(n,t,((e,r,s)=>{if((0,a.p)(s,2,4,n,t),s[0]instanceof i.F){const e=(0,a.y)(s[1]);let i=(0,a.P)(s[2],null);const r=(0,a.W)((0,a.P)(s[3],!0));if(null===i&&(i=["*"]),!1===(0,a.o)(i))throw new a.A(n,a.E.InvalidParameter,t);return s[0].featureSetByName(e,r,i)}throw new a.A(n,a.E.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(n,t){return e.standardFunction(n,t,((e,r,s)=>{(0,a.p)(s,1,1,n,t);let l=s[0];const o={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,a.n)(l))l=JSON.parse(l),void 0!==l.layerDefinition?(o.layerDefinition=l.layerDefinition,o.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(o.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(o.featureSet.features=l.features,o.featureSet.geometryType=l.geometryType,o.layerDefinition.geometryType=o.featureSet.geometryType,o.layerDefinition.objectIdField=l.objectIdFieldName,o.layerDefinition.typeIdField=l.typeIdFieldName,o.layerDefinition.globalIdField=l.globalIdFieldName,o.layerDefinition.fields=l.fields,l.spatialReference&&(o.layerDefinition.spatialReference=l.spatialReference));else{if(!(s[0]instanceof a.F))throw new a.A(n,a.E.InvalidParameter,t);{l=JSON.parse(s[0].castToText(!0));const e=d(l,"layerdefinition");if(null!==e){o.layerDefinition.geometryType=d(e,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.globalIdField=d(e,"globalidfield",""),o.layerDefinition.objectIdField=d(e,"objectidfield",""),o.layerDefinition.typeIdField=d(e,"typeidfield","");const n=d(e,"spatialreference",null);n&&(o.layerDefinition.spatialReference=y(n));for(const n of d(e,"fields",[])){const e={name:d(n,"name",""),alias:d(n,"alias",""),type:d(n,"type",""),nullable:d(n,"nullable",!0),editable:d(n,"editable",!0),length:d(n,"length",null),domain:m(d(n,"domain"))};o.layerDefinition.fields.push(e)}const t=d(l,"featureset",null);if(t){const e={};for(const n of o.layerDefinition.fields)e[n.name.toLowerCase()]=n.name;for(const n of d(t,"features",[])){const t={},a=d(n,"attributes",{});for(const n in a)t[e[n.toLowerCase()]]=a[n];o.featureSet.features.push({attributes:t,geometry:p(d(n,"geometry",null))})}}}else{o.layerDefinition.geometryType=d(l,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.objectIdField=d(l,"objectidfieldname",""),o.layerDefinition.typeIdField=d(l,"typeidfieldname","");const e=d(l,"spatialreference",null);e&&(o.layerDefinition.spatialReference=y(e));for(const e of d(l,"fields",[])){const n={name:d(e,"name",""),alias:d(e,"alias",""),type:d(e,"type",""),nullable:d(e,"nullable",!0),editable:d(e,"editable",!0),length:d(e,"length",null),domain:m(d(e,"domain"))};o.layerDefinition.fields.push(n)}const n={};for(const e of o.layerDefinition.fields)n[e.name.toLowerCase()]=e.name;for(const e of d(l,"features",[])){const t={},a=d(e,"attributes",{});for(const e in a)t[n[e.toLowerCase()]]=a[e];o.featureSet.features.push({attributes:t,geometry:p(d(e,"geometry",null))})}}}}if(0==(!!(f=o).layerDefinition&&!!f.featureSet&&!1!==function(e,n){for(const n of["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(n===e)return!0;return!1}(f.layerDefinition.geometryType)&&null!==f.layerDefinition.objectIdField&&""!==f.layerDefinition.objectIdField&&!1!==(0,a.o)(f.layerDefinition.fields)&&!1!==(0,a.o)(f.featureSet.features)))throw new a.A(n,a.E.InvalidParameter,t);var f;return i.b.create(o,n.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(n,t){return e.standardFunctionAsync(n,t,(async(s,f,c)=>{if((0,a.p)(c,2,2,n,t),(0,a.o)(c[0])||(0,a.q)(c[0])){const e=[];let i=c[0];i instanceof r.I&&(i=i.toArray());let s=null;if(!(0,a.l)(c[1]))throw new a.A(n,a.E.InvalidParameter,t);s=c[1].createFunction(n);for(const n of i){const t=s(n);(0,l.y8)(t)?!0===await t&&e.push(n):!0===t&&e.push(n)}return e}if((0,a.t)(c[0])){const t=await c[0].load(),a=o.WhereClause.create(c[1],t.getFieldsIndex()),r=a.getVariables();if(r.length>0){const t=[];for(let a=0;a<r.length;a++){const i={name:r[a]};t.push(await e.evaluateIdentifier(n,i))}const s={};for(let e=0;e<r.length;e++)s[r[e]]=t[e];return a.parameters=s,new i.d({parentfeatureset:c[0],whereclause:a})}return new i.d({parentfeatureset:c[0],whereclause:a})}throw new a.A(n,a.E.InvalidParameter,t)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,s)=>{if((0,a.p)(s,2,2,n,t),(0,a.t)(s[0])){const e=new i.O(s[1]);return new i.e({parentfeatureset:s[0],orderbyclause:e})}throw new a.A(n,a.E.InvalidParameter,t)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,s)=>{if((0,a.p)(s,2,2,n,t),(0,a.t)(s[0]))return new i.T({parentfeatureset:s[0],topnum:s[1]});if((0,a.o)(s[0]))return(0,a.w)(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,(0,a.w)(s[1]));if((0,a.q)(s[0]))return(0,a.w)(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,(0,a.w)(s[1]));throw new a.A(n,a.E.InvalidParameter,t)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(n,t){return e.standardFunctionAsync(n,t,(async(e,i,r)=>{if((0,a.p)(r,1,1,n,t),(0,a.t)(r[0])){const n=await r[0].first(e.abortSignal);if(null!==n){const e=a.D.createFromGraphicLikeObject(n.geometry,n.attributes,r[0]);return e._underlyingGraphic=n,e}return n}return(0,a.o)(r[0])?0===r[0].length?null:r[0][0]:(0,a.q)(r[0])?0===r[0].length()?null:r[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,s)=>{(0,a.p)(s,1,2,n,t);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(s.length>1)if(s[1]instanceof a.F){if(s[1].hasField("minsize")&&(l.minsize=(0,a.w)(s[1].field("minsize"))),s[1].hasField("metadata")&&(l.returnMetadata=(0,a.W)(s[1].field("metadata"))),s[1].hasField("maxsize")&&(l.maxsize=(0,a.w)(s[1].field("maxsize"))),s[1].hasField("types")){const e=(0,a.ai)(s[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==s[1])throw new a.A(n,a.E.InvalidParameter,t);if((0,a.s)(s[0])){let e=s[0]._layer;return e instanceof f.default&&(e=(0,i.f)(e,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===e||!1===(0,a.t)(e)?[]:(await e.load(),e.queryAttachments(s[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===s[0])return[];throw new a.A(n,a.E.InvalidParameter,t)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,l)=>{(0,a.p)(l,2,4,n,t);const c=l[0],u=(0,a.y)(l[1]);let d=(0,a.P)(l[2],null);const m=(0,a.W)((0,a.P)(l[3],!0));if(null===d&&(d=["*"]),!1===(0,a.o)(d))throw new a.A(n,a.E.InvalidParameter,t);if(null===l[0])return null;if(!(0,a.s)(l[0]))throw new a.A(n,a.E.InvalidParameter,t);let y=c._layer;if(y instanceof f.default&&(y=(0,i.f)(y,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===y)return null;if(!1===(0,a.t)(y))return null;y=await y.load();const p=y.relationshipMetaData().filter((e=>e.name===u));if(0===p.length)return null;if(void 0!==p[0].relationshipTableId&&null!==p[0].relationshipTableId&&p[0].relationshipTableId>-1)return(0,i.h)(y,p[0],c.field(y.objectIdField),y.spatialReference,d,m,n.lrucache,n.interceptor);let h=y.serviceUrl();if(!h)return null;h="/"===h.charAt(h.length-1)?h+p[0].relatedTableId.toString():h+"/"+p[0].relatedTableId.toString();const w=await(0,i.i)(h,y.spatialReference,d,m,n.lrucache,n.interceptor);await w.load();let g=w.relationshipMetaData();if(g=g.filter((e=>e.id===p[0].id)),!1===c.hasField(p[0].keyField)||null===c.field(p[0].keyField)){const e=await y.getFeatureByObjectId(c.field(y.objectIdField),[p[0].keyField]);if(e){const n=o.WhereClause.create(g[0].keyField+"= @id",w.getFieldsIndex());return n.parameters={id:e.attributes[p[0].keyField]},w.filter(n)}return new s.E({parentfeatureset:w})}const F=o.WhereClause.create(g[0].keyField+"= @id",w.getFieldsIndex());return F.parameters={id:c.field(p[0].keyField)},w.filter(F)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,s)=>{(0,a.p)(s,2,3,n,t);const l=s[0],u=(0,a.y)((0,a.P)(s[1],"")).toLowerCase(),d=(0,a.n)(s[2])?(0,a.y)(s[2]):null;if(null===s[0])return null;if(!(0,a.s)(s[0]))throw new a.A(n,a.E.InvalidParameter,t);let m=l._layer;if(m instanceof f.default&&(m=(0,i.f)(m,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===m)return null;if(!1===(0,a.t)(m))return null;await m.load();const y=m.serviceUrl(),p=await(0,i.j)(y,n.spatialReference);let h=null,w=null,g=!1;if(null!==d&&""!==d&&void 0!==d){for(const e of p.terminals)e.terminalName===d&&(w=e.terminalId);null===w&&(g=!0)}const F=p.associations.getFieldsIndex(),E=F.get("TOGLOBALID").name,I=F.get("FROMGLOBALID").name,A=F.get("TOTERMINALID").name,D=F.get("FROMTERMINALID").name,b=F.get("FROMNETWORKSOURCEID").name,N=F.get("TONETWORKSOURCEID").name,S=F.get("ASSOCIATIONTYPE").name,x=F.get("ISCONTENTVISIBLE").name,v=F.get("OBJECTID").name;for(const e of m.fields)if("global-id"===e.type){h=l.field(e.name);break}let P=null,$=new i.S(new c.Z({name:"percentalong",alias:"percentalong",type:"double"}),o.WhereClause.create("0",p.associations.getFieldsIndex())),C=new i.S(new c.Z({name:"side",alias:"side",type:"string"}),o.WhereClause.create("''",p.associations.getFieldsIndex()));const T="globalid",L="globalId",R={};for(const e in p.lkp)R[e]=p.lkp[e].sourceId;const W=new i.k(new c.Z({name:"classname",alias:"classname",type:"string"}),null,R);let O="";switch(u){case"midspan":{O=`((${E}='${h}') OR ( ${I}='${h}')) AND (${S} IN (5))`,W.codefield=o.WhereClause.create(`CASE WHEN (${E}='${h}') THEN ${b} ELSE ${N} END`,p.associations.getFieldsIndex());const e=(0,a.a1)(i.A.findField(p.associations.fields,I));e.name=T,e.alias=T,P=new i.S(e,o.WhereClause.create(`CASE WHEN (${I}='${h}') THEN ${E} ELSE ${I} END`,p.associations.getFieldsIndex())),$=p.unVersion>=4?new i.n(i.A.findField(p.associations.fields,F.get("PERCENTALONG").name)):new i.S(new c.Z({name:"percentalong",alias:"percentalong",type:"double"}),o.WhereClause.create("0",p.associations.getFieldsIndex()));break}case"junctionedge":{O=`((${E}='${h}') OR ( ${I}='${h}')) AND (${S} IN (4,6))`,W.codefield=o.WhereClause.create(`CASE WHEN (${E}='${h}') THEN ${b} ELSE ${N} END`,p.associations.getFieldsIndex());const e=(0,a.a1)(i.A.findField(p.associations.fields,I));e.name=T,e.alias=T,P=new i.S(e,o.WhereClause.create(`CASE WHEN (${I}='${h}') THEN ${E} ELSE ${I} END`,p.associations.getFieldsIndex())),C=new i.S(new c.Z({name:"side",alias:"side",type:"string"}),o.WhereClause.create(`CASE WHEN (${S}=4) THEN 'from' ELSE 'to' END`,p.associations.getFieldsIndex()));break}case"connected":{let e=`${E}='@T'`,n=`${I}='@T'`;null!==w&&(e+=` AND ${A}=@A`,n+=` AND ${D}=@A`),O="(("+e+") OR ("+n+"))",O=(0,a.aj)(O,"@T",h??""),e=(0,a.aj)(e,"@T",h??""),null!==w&&(e=(0,a.aj)(e,"@A",w.toString()),O=(0,a.aj)(O,"@A",w.toString())),W.codefield=o.WhereClause.create("CASE WHEN "+e+` THEN ${b} ELSE ${N} END`,p.associations.getFieldsIndex());const t=(0,a.a1)(i.A.findField(p.associations.fields,I));t.name=T,t.alias=T,P=new i.S(t,o.WhereClause.create("CASE WHEN "+e+` THEN ${I} ELSE ${E} END`,p.associations.getFieldsIndex()));break}case"container":O=`${E}='${h}' AND ${S} = 2`,null!==w&&(O+=` AND ${A} = `+w.toString()),W.codefield=b,O="( "+O+" )",P=new i.m(i.A.findField(p.associations.fields,I),T,T);case"content":O=`(${I}='${h}' AND ${S} = 2)`,null!==w&&(O+=` AND ${D} = `+w.toString()),W.codefield=N,O="( "+O+" )",P=new i.m(i.A.findField(p.associations.fields,E),T,T);break;case"structure":O=`(${E}='${h}' AND ${S} = 3)`,null!==w&&(O+=` AND ${A} = `+w.toString()),W.codefield=b,O="( "+O+" )",P=new i.m(i.A.findField(p.associations.fields,I),T,L);break;case"attached":O=`(${I}='${h}' AND ${S} = 3)`,null!==w&&(O+=` AND ${D} = `+w.toString()),W.codefield=N,O="( "+O+" )",P=new i.m(i.A.findField(p.associations.fields,E),T,L);break;default:throw new a.A(n,a.E.InvalidParameter,t)}return g&&(O="1 <> 1"),new i.A({parentfeatureset:p.associations,adaptedFields:[new i.n(i.A.findField(p.associations.fields,v)),new i.n(i.A.findField(p.associations.fields,x)),P,C,W,$],extraFilter:O?o.WhereClause.create(O,p.associations.getFieldsIndex()):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(n,t){return e.standardFunctionAsync(n,t,(async(i,r,l)=>{if((0,a.p)(l,3,3,n,t),!(0,a.t)(l[0]))throw new a.A(n,a.E.InvalidParameter,t);const f=await l[0].load(),c=[],d=[];let m=!1,y=[];if((0,a.n)(l[1]))y.push(l[1]);else if(l[1]instanceof a.F)y.push(l[1]);else if((0,a.o)(l[1]))y=l[1];else{if(!(0,a.q)(l[1]))throw new a.A(n,a.E.InvalidParameter,t);y=l[1].toArray()}for(const e of y)if((0,a.n)(e)){const n=o.WhereClause.create((0,a.y)(e),f.getFieldsIndex()),t=!0===(0,s.i)(n)?(0,a.y)(e):"%%%%FIELDNAME";c.push({name:t,expression:n}),"%%%%FIELDNAME"===t&&(m=!0)}else{if(!(e instanceof a.F))throw new a.A(n,a.E.InvalidParameter,t);{const i=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",r=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===i&&(m=!0),!i)throw new a.A(n,a.E.InvalidParameter,t);c.push({name:i,expression:o.WhereClause.create(r||i,f.getFieldsIndex())})}}if(y=[],(0,a.n)(l[2]))y.push(l[2]);else if((0,a.o)(l[2]))y=l[2];else if((0,a.q)(l[2]))y=l[2].toArray();else{if(!(l[2]instanceof a.F))throw new a.A(n,a.E.InvalidParameter,t);y.push(l[2])}for(const e of y){if(!(e instanceof a.F))throw new a.A(n,a.E.InvalidParameter,t);{const i=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",s=e.hasField("expression")?e.field("expression"):"";if(!i||!r||!s)throw new a.A(n,a.E.InvalidParameter,t);d.push({name:i,statistic:r.toLowerCase(),expression:o.WhereClause.create(s,f.getFieldsIndex())})}}if(m){const e={};for(const n of f.fields)e[n.name.toLowerCase()]=1;for(const n of c)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of d)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let n=0;for(const t of c)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}for(const t of c)await u(t.expression,e,n);for(const t of d)await u(t.expression,e,n);return l[0].groupby(c,d)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(n,t){return e.standardFunctionAsync(n,t,(async(i,r,l)=>{if((0,a.t)(l[0])){(0,a.p)(l,2,2,n,t);const i=await l[0].load(),r=[];let f=[];if((0,a.n)(l[1]))f.push(l[1]);else if(l[1]instanceof a.F)f.push(l[1]);else if((0,a.o)(l[1]))f=l[1];else{if(!(0,a.q)(l[1]))throw new a.A(n,a.E.InvalidParameter,t);f=l[1].toArray()}let c=!1;for(const e of f)if((0,a.n)(e)){const n=o.WhereClause.create((0,a.y)(e),i.getFieldsIndex()),t=!0===(0,s.i)(n)?(0,a.y)(e):"%%%%FIELDNAME";r.push({name:t,expression:n}),"%%%%FIELDNAME"===t&&(c=!0)}else{if(!(e instanceof a.F))throw new a.A(n,a.E.InvalidParameter,t);{const s=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===s&&(c=!0),!s)throw new a.A(n,a.E.InvalidParameter,t);r.push({name:s,expression:o.WhereClause.create(l||s,i.getFieldsIndex())})}}if(c){const e={};for(const n of i.fields)e[n.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let n=0;for(const t of r)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}for(const t of r)await u(t.expression,e,n);return l[0].groupby(r,[])}return function(e,n,t,i){if(1===i.length){if((0,a.o)(i[0]))return(0,a.ak)(e,i[0],-1);if((0,a.q)(i[0]))return(0,a.ak)(e,i[0].toArray(),-1)}return(0,a.ak)(e,i,-1)}("distinct",0,0,l)}))})}t(74569),t(91306),t(71552),t(76506),t(92143),t(31450),t(40642),t(21801),t(34250),t(60474),t(66396),t(86656),t(60991),t(17533),t(6540),t(73796),t(12047),t(21972),t(91055),t(19657),t(6906),t(97714),t(60947),t(2906),t(91597),t(86787),t(35132),t(89623),t(84069),t(44567),t(98380),t(92896),t(22781),t(57251),t(32422),t(36097),t(56240),t(3482),t(40267),t(88762),t(32101),t(53785),t(95587),t(82058),t(49900),t(81184),t(33101),t(67477),t(78533),t(74653),t(91091),t(58943),t(52228),t(23761),t(86748),t(66122),t(15324),t(75067),t(89914),t(14249),t(60217),t(29107),t(30574),t(2157),t(25977),t(58076),t(98242),t(7471),t(54414),t(59465),t(1648),t(8925),t(33921),t(45154),t(16769),t(93603),t(15438),t(593),t(85699),t(55531),t(96055),t(47776),t(18033),t(6331),t(62048),t(56890),t(30493),t(4292),t(75626),t(72652),t(29641),t(70821),t(3296),t(34229),t(37029),t(96467),t(63571),t(30776),t(48027),t(54174),t(82426),t(72836),t(29794),t(63130),t(25696),t(98402),t(42775),t(95834),t(34394),t(57150),t(76726),t(20444),t(76393),t(78548),t(2497),t(49906),t(46527),t(11799),t(48649),t(59877),t(9960),t(30823),t(53326),t(92482),t(5853),t(39141),t(38742),t(48243),t(34635),t(10401),t(70737),t(36834),t(8487),t(17817),t(90814),t(15459),t(97189),t(61847),t(28212),t(16955),t(22401),t(48699),t(77894),t(55187),t(8586),t(44509),t(69814),t(11305),t(62259),t(44790),t(5909),t(60669),t(48208),t(51589),t(13201),t(70846),t(67961),t(12158),t(74864),t(63683),t(94479),t(45702),t(51127),t(90319),t(23243),t(51669),t(38822),t(74057),t(48190),t(85557),t(1709),t(69218),t(2845),t(94216),t(49214),t(95533),t(94751),t(95307),t(81731),t(76733),t(11385),t(55823),t(92847),t(87258),t(9801),t(53523),t(42911),t(46826),t(45433),t(54732),t(31292),t(93314),t(35197),t(32925),t(27207),t(53426),t(34446),t(55402),t(46646),t(39210),t(90549),t(78303),t(46495),t(56420),t(73173),t(74742),t(28239),t(42870),t(65514),t(46987),t(37453),t(66284),t(87239),t(5777),t(55306),t(65684),t(26822),t(51723),t(6090),t(3977),t(36741),t(11253),t(94070),t(43022),t(16218),t(9075),t(71206),t(9352),t(89241),t(91700),t(51979),t(32037),t(60698),t(90811),t(60045),t(68681),t(53321),t(86758),t(95310),t(58085),t(93939),t(62407),t(90033),t(97807),t(238),t(68714),t(20208),t(54179),t(10691),t(38949),t(71777),t(19755),t(62554),t(27371),t(78648),t(87558),t(13063),t(17153),t(35962),t(9252),t(67350),t(11471),t(83748),t(28376),t(41617),t(95873),t(23771),t(87728),t(96994),t(75025),t(21132),t(80462),t(92200),t(65949),t(22465),t(65775),t(21471),t(65398),t(9641),t(6210),t(36231),t(79093),t(29027),t(67541),t(1557),t(47842),t(17298),t(17055),t(2180),t(14327),t(39275),t(29395),t(94303),t(77807),t(50203),t(30439),t(6941),t(14460),t(13322),t(89440),t(86861),t(39241),t(41864),t(97565),t(64049),t(68219),t(6416),t(82377),t(59765),t(77361),t(61261),t(47346),t(68653),t(40944),t(71831),t(78893)}}]);