// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/number","../../../intl/locale","./Format"],function(u,q,E,m){function d(c){var f=c.match(F);f=f?f[0]:"";const b=c.includes(".")?c.split(".")[1].length:0;return f+q.format(Number(c),{pattern:"###0.###",places:b,round:-1})}function e(c){return q.parse(c)}const n=q.getCustoms().decimal,p={N:"north",S:"south",E:"east",W:"west"},r=new RegExp(`-?\\d+[\\.|\\${n}]?\\d*`),F=/^[\\0]+(?=\d)/;u.generateDefaultFormats=function(){const c=RegExp("N|S","i"),f=RegExp("E|W","i");return[new m({name:"basemap",
coordinateSegments:[{alias:"X",description:"easting",searchPattern:r,substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"Y",description:"northing",searchPattern:r,substitution:{input:b=>e(b),output:b=>d(b)}}],defaultPattern:"X, Y",viewModel:null}),new m({name:"dd",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=\\D*?[N|S])`,"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"N",description:"north/south indicator",searchPattern:c},
{alias:"X",description:"degrees longitude",searchPattern:new RegExp(`\\d{1,3}[\\.|\\${n}]?\\d*(?=\\D*?[E|W|])`,"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"E",description:"east/west indicator",searchPattern:f}],defaultPattern:"Y\u00b0\u200eN, X\u00b0\u200eE",viewModel:null}),new m({name:"ddm",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:RegExp("\\d{1,2}(?\x3d.*?\\s+.*?[N|S])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"A",description:"minutes latitude",
searchPattern:new RegExp(`\\d{1,2}[\\.\\${n}]?\\d*(?=.*?[N|S])`,"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"N",description:"north/south indicator",searchPattern:c},{alias:"X",description:"degrees longitude",searchPattern:RegExp("\\d{1,3}(?\x3d\\D*?\\s+.*?[E|W])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"B",description:"minutes longitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\|${n}]?\\d*(?=.*?[E|W])`,"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"E",description:"east/west indicator",
searchPattern:f}],defaultPattern:"Y\u00b0\u200e A'N, X\u00b0\u200e B'E",viewModel:null}),new m({name:"dms",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:RegExp("\\d{1,2}(?\x3d.*?\\s+.*?[N|S])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"A",description:"minutes latitude",searchPattern:RegExp("\\d{1,2}(?\x3d.*?[N|S])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"B",description:"seconds latitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=.*?[N|S])`,
"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"N",description:"north/south indicator",searchPattern:c},{alias:"X",description:"degrees longitude",searchPattern:RegExp("\\d{1,3}(?\x3d.*?\\s+.*?[E|W])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"C",description:"minutes longitude",searchPattern:RegExp("\\d{1,2}(?\x3d.*?[E|W])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"D",description:"seconds longitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=.*?[E|W])`,
"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"E",description:"east/west indicator",searchPattern:f}],defaultPattern:"Y\u00b0\u200e A' B\"N, X\u00b0\u200e C' D\"E",viewModel:null}),new m({name:"xy",coordinateSegments:[{alias:"X",description:"longitude",searchPattern:r,substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"Y",description:"latitude",searchPattern:r,substitution:{input:b=>e(b),output:b=>d(b)}}],defaultPattern:"X\u00b0\u200e, Y\u00b0\u200e",viewModel:null}),new m({name:"mgrs",
coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new m({name:"usng",coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},
{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new m({name:"utm",coordinateSegments:[{alias:"Z",description:"zone number",searchPattern:/\d{1,2}|[abyz]/i},{alias:"B",description:"latitude band",searchPattern:/^\D/},{alias:"X",description:"easting",
searchPattern:/\d{1,7}(?=\s*\d{7}$)/},{alias:"Y",description:"northing",searchPattern:/\d{1,7}/}],defaultPattern:"ZB X Y",viewModel:null})]};u.setDefaultPatterns=function(c,f){const b="ar"===E.getLocale(),z=c.abbreviatedDirections.north,A=c.abbreviatedDirections.south,B=c.abbreviatedDirections.east,C=c.abbreviatedDirections.west,v=q.getCustoms().decimal,g={};g[z]="N";g[A]="S";g[B]="E";g[C]="W";const t=new RegExp(`-?\\d+[\\.|\\${v}]?\\d*`),w=new RegExp(`N|S|${z}|${A}`,"i"),x=new RegExp(`E|W|${B}|${C}`,
"i"),D={ddm:`Y${"\u00b0\u200e"} A'${c.abbreviatedDirections.north}, X${"\u00b0\u200e"} B'${c.abbreviatedDirections.east}`,dms:`Y${"\u00b0\u200e"} A' B"${c.abbreviatedDirections.north}, X${"\u00b0\u200e"} C' D"${c.abbreviatedDirections.east}`,dd:`Y${"\u00b0\u200e"}${c.abbreviatedDirections.north}, X${"\u00b0\u200e"}${c.abbreviatedDirections.east}`,xy:"X\u00b0\u200e, Y\u00b0\u200e",basemap:"X, Y"},G={ddm:`${c.abbreviatedDirections.north}${"\u00b0\u200e"}Y 'A ,${c.abbreviatedDirections.east}${"\u00b0\u200e"}X 'B`,
dms:`${c.abbreviatedDirections.north}${"\u00b0\u200e"}Y 'A "B ,${c.abbreviatedDirections.east}${"\u00b0\u200e"}X 'C "D`,dd:`${c.abbreviatedDirections.north}${"\u00b0\u200e"}Y ,${c.abbreviatedDirections.east}${"\u00b0\u200e"}X`,xy:"X\u00b0\u200e ,Y\u00b0\u200e",basemap:"X ,Y"},k=new RegExp(`\\d{1,2}[\\.|\\${v}]?\\d*`,"i"),y=new RegExp(`\\d{1,3}[\\.|\\${v}]?\\d*`,"i");f.forEach(h=>{var {name:l}=h;"dd"===l?h.coordinateSegments=[{alias:"Y",description:"degrees latitude",searchPattern:k,substitution:{input:a=>
e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.north,description:"north/south indicator",searchPattern:w,substitution:{input:a=>g[a],output:a=>c.abbreviatedDirections[p[a]]}},{alias:"X",description:"degrees longitude",searchPattern:y,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.east,description:"east/west indicator",searchPattern:x,substitution:{input:a=>g[a],output:a=>c.abbreviatedDirections[p[a]]}}]:"ddm"===l?h.coordinateSegments=[{alias:"Y",description:"degrees latitude",
searchPattern:k,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"A",description:"minutes latitude",searchPattern:k,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.north,description:"north/south indicator",searchPattern:w,substitution:{input:a=>g[a],output:a=>c.abbreviatedDirections[p[a]]}},{alias:"X",description:"degrees longitude",searchPattern:y,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"B",description:"minutes longitude",searchPattern:k,substitution:{input:a=>
e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.east,description:"east/west indicator",searchPattern:x,substitution:{input:a=>g[a],output:a=>c.abbreviatedDirections[p[a]]}}]:"dms"===l?h.coordinateSegments=[{alias:"Y",description:"degrees latitude",searchPattern:k,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"A",description:"minutes latitude",searchPattern:k,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"B",description:"seconds latitude",searchPattern:k,substitution:{input:a=>e(a),
output:a=>d(a)}},{alias:c.abbreviatedDirections.north,description:"north/south indicator",searchPattern:w,substitution:{input:a=>g[a],output:a=>c.abbreviatedDirections[p[a]]}},{alias:"X",description:"degrees longitude",searchPattern:y,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"C",description:"minutes longitude",searchPattern:k,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"D",description:"seconds longitude",searchPattern:k,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.east,
description:"east/west indicator",searchPattern:x,substitution:{input:a=>g[a],output:a=>c.abbreviatedDirections[p[a]]}}]:"xy"===h.name?h.coordinateSegments=[{alias:"X",description:"easting",searchPattern:t,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"Y",description:"northing",searchPattern:t,substitution:{input:a=>e(a),output:a=>d(a)}}]:"basemap"===h.name&&(h.coordinateSegments=[{alias:"X",description:"easting",searchPattern:t,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"Y",description:"northing",
searchPattern:t,substitution:{input:a=>e(a),output:a=>d(a)}}]);D[l]&&(l=b?G[l]:D[l],h.defaultPattern=l,h.currentPattern=l)})};Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});