// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./Label","../../support/ColorPicker","../../support/widgetUtils","../../support/jsxFactory"],function(b,d,e,f,c){b.LabeledColorPicker=function(a){return c.tsx(d.Label,{for:a.id,label:a.label,tabIndex:-1},c.tsx(e.ColorPicker,{id:a.id,value:a.value,onChange:a.onChange}))};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});