// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function d(){return c}function e(a){c=a}function f(a){return a*m}function g(a){return a*n}function h(a,k){return Math.abs(a-k)<=c*Math.max(1,Math.abs(a),Math.abs(k))}let c=1E-6;const l=Math.random,m=Math.PI/180,n=180/Math.PI,p=Object.freeze(Object.defineProperty({__proto__:null,getEpsilon:d,setEpsilon:e,RANDOM:l,toRadian:f,toDegree:g,equals:h},Symbol.toStringTag,{value:"Module"}));b.RANDOM=l;b.common=p;b.equals=h;b.getEpsilon=d;b.setEpsilon=e;b.toDegree=g;b.toRadian=
f});