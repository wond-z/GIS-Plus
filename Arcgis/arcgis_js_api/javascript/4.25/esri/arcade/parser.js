// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./treeAnalysis","./lib/arcade-parser","./lib/types"],function(c,d,e,b){c.parseScript=function(a,f=[]){a=e.parse(a);if(null===a.body||void 0===a.body)throw new b.ParsingError({index:0,line:0,column:0,data:null,description:"",code:b.ParsingErrorCodes.InvalidExpression});if(0===a.body.length)throw new b.ParsingError({index:0,line:0,column:0,data:null,description:"",code:b.ParsingErrorCodes.InvalidExpression});if(0===a.body.length)throw new b.ParsingError({index:0,line:0,column:0,data:null,
description:"",code:b.ParsingErrorCodes.InvalidExpression});a.loadedModules={};d.findScriptDependencies(a,f);return a};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});