// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/aaBoundingRect","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/VertexAttribute"],function(r,f,B,C,h){function x(a){return C.createSquareGeometry([[a[0],a[1],-1],[a[2],a[1],-1],[a[2],a[3],-1],[a[0],a[3],-1]])}const D=[0,0,1];r.computeImageExportSize=function(a,b,e){const k=f.width(a)/f.height(a),d={width:e,height:e};1.0001<k?d.height=e/k:.9999>k&&(d.width=e*k);d.width=Math.round(d.width/(f.width(a)/f.width(b)));
d.height=Math.round(d.height/(f.height(a)/f.height(b)));return d};r.createGeometryForExtent=x;r.createOuterImageGeometry=function(a,b){if(!f.intersects(a,b))return x(b);const e=[a[1]-b[1],Math.min(a[3],b[3])-Math.max(a[1],b[1]),b[3]-a[3],123456];a=[a[0]-b[0],Math.min(a[2],b[2])-Math.max(a[0],b[0]),b[2]-a[2],123456];const k=b[2]-b[0],d=b[3]-b[1],n=0<a[0]&&0<a[2]?3:2;var c=0<e[0]&&0<e[2]?3:2,l=(c+1)*(n+1);const t=new Float64Array(3*l);l=new Float32Array(2*l);c=Array(6*(c*n-1));let u=0,v=0,y=0,g=0,m=
0;for(let p=0;4>p;p++){const z=e[p];if(0>=z)continue;let w=0;for(let q=0;4>q;q++){const A=a[q];0>=A||(t[v++]=b[0]+w,t[v++]=b[1]+u,t[v++]=-1,l[y++]=w/k,l[y++]=u/d,3>q&&3>p&&(1!==q||1!==p)&&(c[m++]=g,c[m++]=g+1,c[m++]=g+n+1,c[m++]=g+1,c[m++]=g+n+2,c[m++]=g+n+1),g++,w+=A)}u+=z}return new B.Geometry([[h.VertexAttribute.POSITION,{size:3,data:t,exclusive:!0}],[h.VertexAttribute.NORMAL,{size:3,data:D,exclusive:!0}],[h.VertexAttribute.UV0,{size:2,data:l,exclusive:!0}]],[[h.VertexAttribute.POSITION,c],[h.VertexAttribute.NORMAL,
Array(c.length)],[h.VertexAttribute.UV0,c]])};Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});