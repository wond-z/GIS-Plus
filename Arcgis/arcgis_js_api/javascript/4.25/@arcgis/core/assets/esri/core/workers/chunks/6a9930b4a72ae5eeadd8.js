"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[611],{10638:(e,t,r)=>{r.d(t,{T:()=>g,c:()=>f,i:()=>m,w:()=>h});var i=r(71552),o=r(82426),n=r(71252),a=r(60991),s=r(92143),c=r(95708),l=r(51006);const d=s.L.getLogger("esri.views.webgl.checkWebGLError"),u=!!(0,i.h)("enable-feature:webgl-debug");function h(){return u}function f(e){if(h()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),i=(new Error).stack;d.error(new a.Z("webgl-error","WebGL error occured",{message:r,stack:i}))}}}function m(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}const p={target:l.T.TEXTURE_2D,samplingMode:l.c.LINEAR,wrapMode:l.b.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1};class g{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(l.R.Texture,this),this._descriptor={...p,...t};for(const e in p)void 0===this._descriptor[e]&&(this._descriptor[e]=p[e]);if(e.type!==c.C.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),x(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===l.T.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(l.R.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===l.T.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=l.T.TEXTURE_CUBE_MAP_POSITIVE_X;t<=l.T.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null);const i=this._descriptor,o=t??i.target,a=x(o);null===e&&(i.width=i.width||4,i.height=i.height||4,a&&(i.depth=i.depth??1));const s=this._context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),g._validateTexture(this._context,i),this._configurePixelStorage(),f(r);const c=i.pixelFormat;let d=i.internalFormat??this._deriveInternalFormat(c,i.dataType);if(v(e)){let t=e.width,n=e.height;const s=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,n=e.videoHeight),i.width&&i.height,a&&i.depth,i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,d,i.hasMipmap,t,n,s),this._texImage(o,0,d,t,n,s,e),f(r),i.hasMipmap&&this.generateMipmap(),void 0===i.width&&(i.width=t),void 0===i.height&&(i.height=n),a&&void 0===i.depth&&(i.depth=s)}else{const{width:t,height:s,depth:c}=i;if(null==t||null==s)throw new Error("Width and height must be specified!");if(a&&null==c)throw new Error("Depth must be specified!");if(i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,d,i.hasMipmap,t,s,c),r.DEPTH24_STENCIL8&&d===r.DEPTH_STENCIL&&(d=r.DEPTH24_STENCIL8),_(e)){const n=e.levels,a=T(o,t,s,c),u=Math.min(a-1,n.length-1);m(r)?r.texParameteri(i.target,r.TEXTURE_MAX_LEVEL,u):i.hasMipmap=i.hasMipmap&&a===n.length;const h=d;if(!(h in l.C))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const a=n[Math.min(e,n.length-1)];this._compressedTexImage(o,e,h,t,r,i,a)}),u)}else(0,n.i)(e)?(this._texImage(o,0,d,t,s,c,e),f(r),i.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel(((e,t,i,n)=>{this._texImage(o,e,d,t,i,n,null),f(r)}))}g._applySamplingMode(r,this._descriptor),g._applyWrapMode(r,this._descriptor),g._applyAnisotropicFilteringParameters(this._context,this._descriptor),f(r),this._context.bindTexture(s,g.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,o,n,a=0){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,c=this._descriptor,{pixelFormat:l,dataType:d,target:u,isImmutable:h}=c,f=c.internalFormat??this._deriveInternalFormat(l,d);if(h&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const p=this._context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||r<0||i>c.width||o>c.height||t+i>c.width||r+o>c.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),a){if(!m(s))return void console.error("Webgl2 must be enabled to use dataRowOffset!");s.pixelStorei(s.UNPACK_SKIP_ROWS,a)}if(v(n)?m(s)?s.texSubImage2D(u,e,t,r,i,o,l,d,n):s.texSubImage2D(u,e,t,r,l,d,n):_(n)?s.compressedTexSubImage2D(u,e,t,r,i,o,f,n.levels[e]):s.texSubImage2D(u,e,t,r,i,o,l,d,n),a){if(!m(s))return void console.error("Webgl2 must be enabled to use dataRowOffset!");s.pixelStorei(s.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(p,g.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,r,i,o,n,a,s){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const c=this._context.gl;if(!m(c))throw new Error("3D textures are not supported in WebGL1");const l=this._descriptor,{pixelFormat:d,dataType:u,isImmutable:h,target:f}=l,p=l.internalFormat??this._deriveInternalFormat(d,u);if(h&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");x(f)||console.warn("Attempting to set 3D texture data on a non-3D texture");const v=this._context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),(t<0||r<0||i<0||o>l.width||n>l.height||a>l.depth||t+o>l.width||r+n>l.height||i+a>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),_(s))s=s.levels[e],c.compressedTexSubImage3D(f,e,t,r,i,o,n,a,p,s);else{const l=s;c.texSubImage3D(f,e,t,r,i,o,n,a,d,u,l)}this._context.bindTexture(v,g.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,g._validateTexture(this._context,e)}e.samplingMode===l.c.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=l.c.LINEAR_MIPMAP_NEAREST):e.samplingMode===l.c.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=l.c.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,g.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,g._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(g._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(g._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.type===c.C.WEBGL1)return e;switch(t){case l.a.FLOAT:switch(e){case l.P.RGBA:return l.S.RGBA32F;case l.P.RGB:return l.S.RGB32F;default:throw new Error("Unable to derive format")}case l.a.UNSIGNED_BYTE:switch(e){case l.P.RGBA:return l.S.RGBA8;case l.P.RGB:return l.S.RGB8}default:return e}}_configurePixelStorage(){const e=this._context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,i,o,n){const a=this._context.gl;if(!m(a))throw new Error("Immutable textures are not supported in WebGL1");if(!(t in l.S))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const s=r?T(e,i,o,n):1;if(x(e)){if(null==n)throw new Error("Missing depth dimension for 3D texture upload");a.texStorage3D(e,s,t,i,o,n)}else a.texStorage2D(e,s,t,i,o);this._wasImmutablyAllocated=!0}_texImage(e,t,r,i,o,a,s){const l=this._context.gl;let d=null;const u=this._context.type===c.C.WEBGL2,h=x(e),{isImmutable:f,pixelFormat:m,dataType:p}=this._descriptor;if(u&&(d=l),u||!v(s))if(f){if((0,n.i)(s)){const r=s;if(h){if(null==a)throw new Error("Missing depth dimension for 3D texture upload");d.texSubImage3D(e,t,0,0,0,i,o,a,m,p,r)}else l.texSubImage2D(e,t,0,0,i,o,m,p,r)}}else{const c=(0,n.u)(s);if(h){if(null==a)throw new Error("Missing depth dimension for 3D texture upload");d.texImage3D(e,t,r,i,o,a,0,m,p,c)}else l.texImage2D(e,t,r,i,o,0,m,p,c)}else l.texImage2D(e,0,r,m,p,s)}_compressedTexImage(e,t,r,i,o,a,s){const l=this._context.gl;let d=null;const u=x(e),h=this._descriptor.isImmutable;if(u){if(this._context.type!==c.C.WEBGL2)throw new Error("3D textures are not supported in WebGL1");d=l}if(h){if((0,n.i)(s))if(u){if(null==a)throw new Error("Missing depth dimension for 3D texture upload");d.compressedTexSubImage3D(e,t,0,0,0,i,o,a,r,s)}else l.compressedTexSubImage2D(e,t,0,0,i,o,r,s)}else if(u){if(null==a)throw new Error("Missing depth dimension for 3D texture upload");d.compressedTexImage3D(e,t,r,i,o,a,0,s)}else l.compressedTexImage2D(e,t,r,i,o,0,s)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:i,depth:o,hasMipmap:n,target:a}=this._descriptor;const s=a===l.T.TEXTURE_3D;if(null==r||null==i||s&&null==o)throw new Error("Missing texture dimensions for mipmap calculation");for(let a=0;e(a,r,i,o),n&&(1!==r||1!==i||s&&1!==o)&&!(a>=t);++a)r=Math.max(1,r>>1),i=Math.max(1,i>>1),s&&(o=Math.max(1,o>>1))}static _validateTexture(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=m(e.gl),i=null!=t.width&&(0,o.i)(t.width)&&null!=t.height&&(0,o.i)(t.height);r||!t.isImmutable&&!x(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),r||i||("number"==typeof t.wrapMode?t.wrapMode!==l.b.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===l.b.CLAMP_TO_EDGE&&t.wrapMode.t===l.b.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;r===l.c.LINEAR_MIPMAP_NEAREST||r===l.c.LINEAR_MIPMAP_LINEAR?(r=l.c.LINEAR,t.hasMipmap||(i=l.c.LINEAR)):r!==l.c.NEAREST_MIPMAP_NEAREST&&r!==l.c.NEAREST_MIPMAP_LINEAR||(r=l.c.NEAREST,t.hasMipmap||(i=l.c.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}}function _(e){return(0,n.i)(e)&&"type"in e&&"compressed"===e.type}function v(e){return(0,n.i)(e)&&!_(e)&&!function(e){return(0,n.i)(e)&&"byteLength"in e}(e)}function x(e){return e===l.T.TEXTURE_3D||e===l.T.TEXTURE_2D_ARRAY}function T(e,t,r,i=1){let o=Math.max(t,r);return e===l.T.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}g.TEXTURE_UNIT_FOR_UPDATES=0},8498:(e,t,r)=>{r.d(t,{a:()=>o,r:()=>n}),r(32191),r(82426),(0,r(68681).c)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new i(t)}function n(e,t,r,i){let o,n=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];n>a&&(o=n,n=a,a=o);let s=(r[1]-e[1])/t[1],c=(i[1]-e[1])/t[1];if(s>c&&(o=s,s=c,c=o),n>c||s>a)return!1;s>n&&(n=s),c<a&&(a=c);let l=(r[2]-e[2])/t[2],d=(i[2]-e[2])/t[2];return l>d&&(o=l,l=d,d=o),!(n>d||l>a||(d<a&&(a=d),a<0))}},3808:(e,t,r)=>{var i;r.d(t,{V:()=>i}),function(e){e[e.Global=1]="Global",e[e.Local=2]="Local"}(i||(i={}))},79764:(e,t,r)=>{function i(e){return 32+e.length}function o(e){if(!e)return 0;let t=c;for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];switch(typeof o){case"string":t+=i(o);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function n(e){if(!e)return 0;if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return 32+8*t;let r=l;for(let i=0;i<t;i++)r+=a(e[i]);return r}(e);let t=c;for(const r in e)e.hasOwnProperty(r)&&(t+=a(e[r]));return t}function a(e){switch(typeof e){case"object":return n(e);case"string":return i(e);case"number":return 16;case"boolean":return 4;default:return 8}}function s(e,t){return l+e.length*t}r.d(t,{B:()=>d,a:()=>n,b:()=>s,e:()=>o});const c=32,l=32;var d;!function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(d||(d={}))},95708:(e,t,r)=>{r.d(t,{C:()=>i,c:()=>s,g:()=>a});var i,o,n=r(71552);function a(e){const t=(0,n.h)("esri-force-webgl");if(t===i.WEBGL1||t===i.WEBGL2)return[t];switch(e){case"2d":return(0,n.h)("mac")&&(0,n.h)("chrome")?[i.WEBGL1,i.WEBGL2]:[i.WEBGL2,i.WEBGL1];case"3d":return[i.WEBGL2,i.WEBGL1]}}function s(e,t,r={}){const o=t===i.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let n=null;for(const t of o){try{n=e.getContext(t,r)}catch(e){}if(n)break}return n}(o=i||(i={}))[o.WEBGL1=1]="WEBGL1",o[o.WEBGL2=2]="WEBGL2"},49500:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,l.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(c)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{a:()=>o,i:()=>i});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,c=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,c]},94446:(e,t,r)=>{r.d(t,{c:()=>a,f:()=>s,i:()=>c});var i=r(82426),o=r(2420),n=r(72836);function a(e){return e?{origin:(0,n.k)(e.origin),vector:(0,n.k)(e.vector)}:{origin:(0,n.d)(),vector:(0,n.d)()}}function s(e,t,r=a()){return(0,n.c)(r.origin,e),(0,n.b)(r.vector,t,e),r}function c(e,t,r){return function(e,t,r,a,s){const{vector:c,origin:l}=e,d=(0,n.b)(o.s.get(),t,l),u=(0,n.m)(c,d)/(0,n.H)(c);return(0,n.g)(s,c,(0,i.c)(u,0,1)),(0,n.a)(s,s,e.origin)}(e,t,0,0,r)}(0,n.d)(),(0,n.d)(),new o.O((()=>a()))},26923:(e,t,r)=>{r.d(t,{f:()=>o,i:()=>c,m:()=>a,n:()=>s,t:()=>n});var i=r(29794);function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function n(e,t){if(e===t){const r=t[1],i=t[2],o=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=o}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function a(e,t,r){const i=t[0],o=t[1],n=t[2],a=t[3],s=t[4],c=t[5],l=t[6],d=t[7],u=t[8],h=r[0],f=r[1],m=r[2],p=r[3],g=r[4],_=r[5],v=r[6],x=r[7],T=r[8];return e[0]=h*i+f*a+m*l,e[1]=h*o+f*s+m*d,e[2]=h*n+f*c+m*u,e[3]=p*i+g*a+_*l,e[4]=p*o+g*s+_*d,e[5]=p*n+g*c+_*u,e[6]=v*i+x*a+T*l,e[7]=v*o+x*s+T*d,e[8]=v*n+x*c+T*u,e}function s(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=t[4],s=t[5],c=t[6],l=t[7],d=t[8],u=t[9],h=t[10],f=t[11],m=t[12],p=t[13],g=t[14],_=t[15],v=r*s-i*a,x=r*c-o*a,T=r*l-n*a,b=i*c-o*s,A=i*l-n*s,E=o*l-n*c,S=d*p-u*m,w=d*g-h*m,C=d*_-f*m,y=u*g-h*p,M=u*_-f*p,R=h*_-f*g;let O=v*R-x*M+T*y+b*C-A*w+E*S;return O?(O=1/O,e[0]=(s*R-c*M+l*y)*O,e[1]=(c*C-a*R-l*w)*O,e[2]=(a*M-s*C+l*S)*O,e[3]=(o*M-i*R-n*y)*O,e[4]=(r*R-o*C+n*w)*O,e[5]=(i*C-r*M-n*S)*O,e[6]=(p*E-g*A+_*b)*O,e[7]=(g*T-m*E-_*x)*O,e[8]=(m*A-p*T+_*v)*O,e):null}function c(e){const t=(0,i.g)(),r=e[0],o=e[1],n=e[2],a=e[3],s=e[4],c=e[5],l=e[6],d=e[7],u=e[8];return Math.abs(1-(r*r+a*a+l*l))<=t&&Math.abs(1-(o*o+s*s+d*d))<=t&&Math.abs(1-(n*n+c*c+u*u))<=t}},16912:(e,t,r)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function o(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>o,c:()=>i})},57532:(e,t,r)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>a,a:()=>n,b:()=>o,c:()=>i});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},10611:(e,t,r)=>{r.r(t),r.d(t,{C:()=>un,D:()=>rn,E:()=>pn,F:()=>an,M:()=>bn,N:()=>Qo,a:()=>hn,b:()=>fn,c:()=>mn,d:()=>cn,e:()=>On,f:()=>Sn,g:()=>Hn,h:()=>Ln,i:()=>Qn,j:()=>Zo,k:()=>nn,l:()=>$n,o:()=>ra});var i=r(49500),o=r(71252),n=r(26923),a=r(16912),s=r(65775),c=r(57532),l=r(72836),d=r(53326),u=r(40167),h=r(79641),f=r(90779);function m(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function p(e,t,r,i,o,n,a,s,c){const l=new Float32Array(9);return l[0]=e,l[1]=t,l[2]=r,l[3]=i,l[4]=o,l[5]=n,l[6]=a,l[7]=s,l[8]=c,l}var g,_,v,x,T,b,A,E,S,w,C,y,M,R=r(87372),O=r(82058),P=r(41864),N=r(79764),I=r(60991),L=r(92143),D=r(50406),F=r(10738);async function B(e,t){const{data:r}=await(0,O.default)(e,{responseType:"image",...t});return r}(M=g||(g={}))[M.None=0]="None",M[M.Front=1]="Front",M[M.Back=2]="Back",M[M.COUNT=3]="COUNT",function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(_||(_={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(v||(v={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(x||(x={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(T||(T={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(b||(b={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(A||(A={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(E||(E={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(S||(S={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(w||(w={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(C||(C={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(y||(y={}));var V=r(6906),U=r(8498),z=r(19657),G=r(99520),H=r(76506),W=r(82426),k=r(3808);const $=new Float32Array(2);new Float64Array(3),new Float32Array(6),(0,c.c)();class j{constructor(){this.id=(0,z.g)()}unload(){}}var X,q;(q=X||(X={}))[q.Layer=0]="Layer",q[q.Object=1]="Object",q[q.Geometry=2]="Geometry",q[q.Material=3]="Material",q[q.Texture=4]="Texture",q[q.COUNT=5]="COUNT";class Y{}function K(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(K||(K={}));const Z=new Map([[G.V.POSITION,0],[G.V.NORMAL,1],[G.V.UV0,2],[G.V.COLOR,3],[G.V.SIZE,4],[G.V.TANGENT,4],[G.V.AUXPOS1,5],[G.V.SYMBOLCOLOR,5],[G.V.AUXPOS2,6],[G.V.FEATUREATTRIBUTE,6],[G.V.INSTANCEFEATUREATTRIBUTE,6],[G.V.INSTANCECOLOR,7],[G.V.OBJECTANDLAYERIDCOLOR,7],[G.V.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[G.V.MODEL,8],[G.V.MODELNORMAL,12],[G.V.MODELORIGINHI,11],[G.V.MODELORIGINLO,15]]);(0,W.d)(10),(0,W.d)(12),(0,W.d)(70),(0,W.d)(40);const Q={scale:0,factor:0,minPixelSize:0,paddingPixels:0},J=(0,d.c)();function ee(e,t,r,i,n,a,s){if(!function(e){return!!(0,o.i)(e)&&!e.visible}(t))if(e.boundingInfo){(0,U.a)(e.primitiveType===E.Triangle);const t=r.tolerance;re(e.boundingInfo,i,n,t,a,s)}else{const t=e.indices.get(G.V.POSITION),r=e.vertexAttributes.get(G.V.POSITION);oe(i,n,0,t.length/3,t,r,void 0,a,s)}}const te=(0,l.d)();function re(e,t,r,i,n,a){if((0,o.a)(e))return;const s=function(e,t,r){return(0,l.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,te);if((0,d.s)(J,e.getBBMin()),(0,d.d)(J,e.getBBMax()),(0,o.i)(n)&&n.applyToAabb(J),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),c=Math.max(n,a);const l=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(u,h)),!(c<0)&&(s=Math.max(s,Math.min(u,h)),!(s>c)&&s<1/0)}(e,t,r,i)}(J,t,s,i)){const{primitiveIndices:o,indices:s,position:c}=e,l=o?o.length:s.length/3;if(l>ue){const o=e.getChildren();if(void 0!==o){for(let e=0;e<8;++e)void 0!==o[e]&&re(o[e],t,r,i,n,a);return}}oe(t,r,0,l,s,c,o,n,a)}}const ie=(0,l.d)();function oe(e,t,r,i,n,a,s,c,l){if(s)return function(e,t,r,i,n,a,s,c,l){const d=a.data,u=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,_=t[2]-m;for(let e=r;e<i;++e){const t=s[e];let r=3*t,i=u*n[r++],a=d[i++],v=d[i++],x=d[i];i=u*n[r++];let T=d[i++],b=d[i++],A=d[i];i=u*n[r];let E=d[i++],S=d[i++],w=d[i];(0,o.i)(c)&&([a,v,x]=c.applyToVertex(a,v,x,e),[T,b,A]=c.applyToVertex(T,b,A,e),[E,S,w]=c.applyToVertex(E,S,w,e));const C=T-a,y=b-v,M=A-x,R=E-a,O=S-v,P=w-x,N=g*P-O*_,I=_*R-P*p,L=p*O-R*g,D=C*N+y*I+M*L;if(Math.abs(D)<=Number.EPSILON)continue;const F=h-a,B=f-v,V=m-x,U=F*N+B*I+V*L;if(D>0){if(U<0||U>D)continue}else if(U>0||U<D)continue;const z=B*M-y*V,G=V*C-M*F,H=F*y-C*B,W=p*z+g*G+_*H;if(D>0){if(W<0||U+W>D)continue}else if(W>0||U+W<D)continue;const k=(R*z+O*G+P*H)/D;k>=0&&l(k,se(C,y,M,R,O,P,ie),t,!1)}}(e,t,r,i,n,a,s,c,l);const d=a.data,u=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,_=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=u*n[t++],i=d[r++],a=d[r++],s=d[r];r=u*n[t++];let v=d[r++],x=d[r++],T=d[r];r=u*n[t++];let b=d[r++],A=d[r++],E=d[r];(0,o.i)(c)&&([i,a,s]=c.applyToVertex(i,a,s,e),[v,x,T]=c.applyToVertex(v,x,T,e),[b,A,E]=c.applyToVertex(b,A,E,e));const S=v-i,w=x-a,C=T-s,y=b-i,M=A-a,R=E-s,O=g*R-M*_,P=_*y-R*p,N=p*M-y*g,I=S*O+w*P+C*N;if(Math.abs(I)<=Number.EPSILON)continue;const L=h-i,D=f-a,F=m-s,B=L*O+D*P+F*N;if(I>0){if(B<0||B>I)continue}else if(B>0||B<I)continue;const V=D*C-w*F,U=F*S-C*L,z=L*w-S*D,G=p*V+g*U+_*z;if(I>0){if(G<0||B+G>I)continue}else if(G>0||B+G<I)continue;const H=(y*V+M*U+R*z)/I;H>=0&&l(H,se(S,w,C,y,M,R,ie),e,!1)}}const ne=(0,l.d)(),ae=(0,l.d)();function se(e,t,r,i,o,n,a){return(0,l.s)(ne,e,t,r),(0,l.s)(ae,i,o,n),(0,l.h)(a,ne,ae),(0,l.n)(a,a),a}function ce(e,t){const r=t?ce(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=le(i)),null==i&&t in r||(r[t]=i)}return r}function le(e){const t=[];return e.forEach((e=>t.push(e))),t}const de={multiply:1,ignore:2,replace:3,tint:4},ue=1e3;class he extends j{constructor(e,t){super(),this.type=X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Z,this._parameters=ce(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(Array.isArray(o)?null===e[i]?(e[i]=o.slice(),r=!0):(0,H.n)(e[i],o)&&(r=!0):e[i]!==o&&(r=!0,e[i]=o))}return r})(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,o.i)(this.repository)&&this.repository.materialChanged(this)}}var fe;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(fe||(fe={}));var me=r(2420),pe=r(94446);function ge(e,t,r){return(0,l.b)(_e,t,e),(0,l.b)(ve,r,e),(0,l.l)((0,l.h)(_e,_e,ve))/2}new me.O(pe.c),new me.O((()=>({p0:(0,l.d)(),p1:(0,l.d)(),p2:(0,l.d)()})));const _e=(0,l.d)(),ve=(0,l.d)();var xe,Te,be,Ae=r(92457),Ee=r(29768);class Se{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function we(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const c=a[s],l=(1<<n)-1<<c;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~l|+e<<c&l,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}}(be=xe||(xe={}))[be.Color=0]="Color",be[be.Depth=1]="Depth",be[be.Normal=2]="Normal",be[be.Shadow=3]="Shadow",be[be.ShadowHighlight=4]="ShadowHighlight",be[be.ShadowExludeHighlight=5]="ShadowExludeHighlight",be[be.Highlight=6]="Highlight",be[be.Alpha=7]="Alpha",be[be.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",be[be.COUNT=9]="COUNT",function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=12]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=14]="HUD_MATERIAL",e[e.LABEL_MATERIAL=15]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=16]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",e[e.DRAPED_WATER=19]="DRAPED_WATER",e[e.VOXEL=20]="VOXEL",e[e.MAX_SLOTS=21]="MAX_SLOTS"}(Te||(Te={}));var Ce=r(56697),ye=r(71552),Me=r(22465),Re=r(48190),Oe=r(75067),Pe=r(32101),Ne=r(68681),Ie=r(73173),Le=r(51006),De=r(10638),Fe=r(95708);const Be=L.L.getLogger("esri.views.webgl.BufferObject");class Ve{constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(Le.R.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,De.c)(this._context.gl),i&&this.setData(i)}static createIndex(e,t,r){return new Ve(e,Le.l.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new Ve(e,Le.l.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==Fe.C.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new Ve(e,Le.l.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=Le.U.STREAM_READ,r){if(e.type!==Fe.C.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new Ve(e,Le.l.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=Le.U.STREAM_DRAW,r){if(e.type!==Fe.C.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new Ve(e,Le.l.PIXEL_UNPACK_BUFFER,t,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===Le.l.ELEMENT_ARRAY_BUFFER?this._indexType===Le.D.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===Le.l.ELEMENT_ARRAY_BUFFER||this.bufferType===Le.l.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(Le.R.BufferObject,this),this._context=(0,o.n)(this._context)):this._glName&&Be.warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&Be.error("Buffer size needs to be positive!"),this.bufferType===Le.l.ELEMENT_ARRAY_BUFFER&&(0,o.i)(t))switch(this._indexType=t,t){case Le.D.UNSIGNED_SHORT:e*=2;break;case Le.D.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===Le.l.ELEMENT_ARRAY_BUFFER&&((0,H.k)(e)&&(t/=2,this._indexType=Le.D.UNSIGNED_SHORT),(0,H.l)(e)&&(t/=4,this._indexType=Le.D.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;(0,o.i)(t)?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,De.c)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;(t<0||t>=this._size)&&Be.error("offset is out of range!"),r>=i&&Be.error("end must be bigger than start!"),t+(i-r)>this._size&&Be.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===Fe.C.WEBGL2)n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{const o=0===r&&i===e.length?e:e.subarray(r,i);n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,o)}(0,De.c)(n),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,t=0,r,i){if(this._context.type!==Fe.C.WEBGL2)return void Be.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||i<0)return void Be.error("Problem getting subdata: offset and length were less than zero!");const o=(0,H.m)(e)?e.BYTES_PER_ELEMENT:1;if(o*((r??0)+(i??0))>e.byteLength)return void Be.error("Problem getting subdata: offset and length exceeded destination size!");t+o*(i??0)>this.byteSize&&Be.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,Le.l.COPY_READ_BUFFER),n.getBufferSubData(Le.l.COPY_READ_BUFFER,t,e,r,i),this._context.unbindBuffer(Le.l.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,r,i){this._context.type===Fe.C.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):Be.error("Get buffer subdata is supported in WebGL2 only!")}}function Ue(e,t,r,i,o=0){const n=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);void 0===r&&console.error(`There is no location for vertex attribute '${e.name}' defined.`);const i=o*e.stride;if(e.count<=4)n.vertexAttribPointer(r,e.count,e.type,e.normalized,e.stride,e.offset+i),n.enableVertexAttribArray(r),e.divisor>0&&a&&a.vertexAttribDivisor(r,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)n.vertexAttribPointer(r+t,3,e.type,e.normalized,e.stride,e.offset+12*t+i),n.enableVertexAttribArray(r+t),e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)n.vertexAttribPointer(r+t,4,e.type,e.normalized,e.stride,e.offset+16*t+i),n.enableVertexAttribArray(r+t),e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function ze(e,t,r,i){const o=e.gl,n=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);if(e.count<=4)o.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)o.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)o.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(Le.l.ARRAY_BUFFER)}function Ge(e){switch(e){case Le.P.ALPHA:case Le.P.LUMINANCE:case Le.P.RED:case Le.P.RED_INTEGER:case Le.S.R8:case Le.S.R8I:case Le.S.R8UI:case Le.S.R8_SNORM:case Le.i.STENCIL_INDEX8:return 1;case Le.P.LUMINANCE_ALPHA:case Le.P.RG:case Le.P.RG_INTEGER:case Le.S.RGBA4:case Le.S.R16F:case Le.S.R16I:case Le.S.R16UI:case Le.S.RG8:case Le.S.RG8I:case Le.S.RG8UI:case Le.S.RG8_SNORM:case Le.S.RGB565:case Le.S.RGB5_A1:case Le.i.DEPTH_COMPONENT16:return 2;case Le.P.DEPTH_COMPONENT:case Le.P.RGB:case Le.P.RGB_INTEGER:case Le.S.RGB8:case Le.S.RGB8I:case Le.S.RGB8UI:case Le.S.RGB8_SNORM:case Le.S.SRGB8:case Le.i.DEPTH_COMPONENT24:return 3;case Le.P.DEPTH_STENCIL:case Le.P.RGBA:case Le.P.RGBA_INTEGER:case Le.S.RGBA8:case Le.S.R32F:case Le.S.R11F_G11F_B10F:case Le.S.RG16F:case Le.S.R32I:case Le.S.R32UI:case Le.S.RG16I:case Le.S.RG16UI:case Le.S.RGBA8I:case Le.S.RGBA8UI:case Le.S.RGBA8_SNORM:case Le.S.SRGB8_ALPHA8:case Le.S.RGB9_E5:case Le.S.RGB10_A2UI:case Le.S.RGB10_A2:case Le.i.DEPTH_STENCIL:case Le.i.DEPTH_COMPONENT32F:case Le.i.DEPTH24_STENCIL8:return 4;case Le.i.DEPTH32F_STENCIL8:return 5;case Le.S.RGB16F:case Le.S.RGB16I:case Le.S.RGB16UI:return 6;case Le.S.RG32F:case Le.S.RG32I:case Le.S.RG32UI:case Le.S.RGBA16F:case Le.S.RGBA16I:case Le.S.RGBA16UI:return 8;case Le.S.RGB32F:case Le.S.RGB32I:case Le.S.RGB32UI:return 12;case Le.S.RGBA32F:case Le.S.RGBA32I:case Le.S.RGBA32UI:return 16;case Le.C.COMPRESSED_RGB_S3TC_DXT1_EXT:case Le.C.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case Le.C.COMPRESSED_RGBA_S3TC_DXT3_EXT:case Le.C.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case Le.C.COMPRESSED_R11_EAC:case Le.C.COMPRESSED_SIGNED_R11_EAC:case Le.C.COMPRESSED_RGB8_ETC2:case Le.C.COMPRESSED_SRGB8_ETC2:case Le.C.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case Le.C.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case Le.C.COMPRESSED_RG11_EAC:case Le.C.COMPRESSED_SIGNED_RG11_EAC:case Le.C.COMPRESSED_RGBA8_ETC2_EAC:case Le.C.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function He(e){if((0,o.a)(e))return 0;if("descriptor"in e)return e.glName?He(e.descriptor):0;const t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;const r="hasMipmap"in e&&e.hasMipmap?1.3:1,i=e.width*e.height;return Ge(t)*i*r}const We=L.L.getLogger("esri.views.webgl.VertexArrayObject");class ke{constructor(e,t,r,i,o=null){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=o,this._glName=null,this._initialized=!1,e.instanceCounter.increment(Le.R.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].size),(0,o.i)(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(this._context){if(this._glName){const e=this._context?.capabilities?.vao;e?(e.deleteVertexArray(this._glName),this._glName=null):We.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=(0,o.p)(this._indexBuffer)}this._context.instanceCounter.decrement(Le.R.VertexArrayObject,this),this._context=(0,o.n)(this._context)}else(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&We.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||We.error("Vertex buffer dictionary is empty!");const i=this._context.gl;for(const r in e){const i=e[r];i||We.error("Vertex buffer is uninitialized!");const o=t[r];o||We.error("Vertex element descriptor is empty!"),Ue(this._context,this._locations,i,o)}(0,o.i)(r)&&(this._context.capabilities.vao?i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:t}=this;e||We.error("Vertex buffer dictionary is empty!");for(const r in e){const i=e[r];i||We.error("Vertex buffer is uninitialized!");const o=t[r];ze(this._context,this._locations,i,o)}(0,o.i)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}class $e{constructor(e,t){this._context=e,this._desc=t,this.type="renderbuffer",this._context.instanceCounter.increment(Le.R.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:i,height:o,internalFormat:n,multisampled:a}=t;if(a){if(this._context.type!==Fe.C.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,n,i,o)}else r.renderbufferStorage(r.RENDERBUFFER,n,i,o)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}resize(e,t){const r=this._desc;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(Le.R.Renderbuffer,this),this._context=(0,o.n)(this._context))}}class je{constructor(e,t,r=null,i=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._depthStencilTexture=null,this._initialized=!1,this._desc={...t},e.instanceCounter.increment(Le.R.FramebufferObject,this),(0,o.i)(r)){Array.isArray(r)||(r=[r]);for(let e=0;e<r.length;++e){const t=r[e],i=Le.m.COLOR_ATTACHMENT0+e;let o;Ye(t)?(Xe(t)?(o=t.descriptor,this._colorAttachments.set(i,t)):(o=t,this._colorAttachments.set(i,new De.T(this._context,o))),Ke(o,this._desc)):(qe(t)?(o=t.descriptor,this._colorAttachments.set(i,t)):(o=t,this._colorAttachments.set(i,new $e(this._context,o))),Ze(o,this._desc)),this._validateColorAttachmentPoint(i)}}if((0,o.i)(i)){let e,t;if(Ye(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),Xe(i)?(t=i.descriptor,this._depthStencilTexture=i):(t=i,this._depthStencilTexture=new De.T(this._context,t)),Ke(t,this._desc);else{qe(i)?(t=i.descriptor,e=i):(t=i,e=new $e(this._context,t));const r=this._desc.depthStencilTarget??Le.h.DEPTH_STENCIL_RENDER_BUFFER;r===Le.h.STENCIL_RENDER_BUFFER?this._stencilAttachment=e:r===Le.h.DEPTH_RENDER_BUFFER||r===Le.h.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=e:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),this._desc.depthStencilTarget=r,Ze(t,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(Le.R.FramebufferObject,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(Le.m.COLOR_ATTACHMENT0);return e&&Xe(e)?e:null}get colorAttachment(){return this._colorAttachments.get(Le.m.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width??0}get height(){return this._desc.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((e,[t,r])=>e+He(r)),0)+He(this.depthStencilAttachment)}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&Xe(t)?t:null}attachColorTexture(e,t=Le.m.COLOR_ATTACHMENT0){e&&(this._validateColorAttachmentPoint(t),Ke(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e))}detachColorTexture(e=Le.m.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(e);if(Xe(t)){const r=t;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),r}}setColorTextureTarget(e,t=Le.m.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(t);Xe(r)&&this._framebufferTexture2D(r.glName,t,e)}attachDepthStencilTexture(e){if((0,o.a)(e))return;const t=e.descriptor;t.pixelFormat!==Le.P.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==Le.a.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),Ke(t,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==Le.h.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=Le.h.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,Le.n)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,Le.n)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if((0,o.a)(e))return;const t=e.descriptor;if(t.internalFormat!==Le.i.DEPTH_STENCIL&&t.internalFormat!==Le.i.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),Ze(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=t.internalFormat===Le.i.DEPTH_STENCIL?Le.h.DEPTH_STENCIL_RENDER_BUFFER:Le.h.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=this._desc.depthStencilTarget===Le.h.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(Le.o.FRAMEBUFFER,r,t.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===Le.h.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Le.o.FRAMEBUFFER,t,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}detachAll(){this._colorAttachments.forEach(((e,t)=>this._detachColorAttachment(t))),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,t,r,i,o,n,a){(e<0||t<0||o<0||n<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const s=this._desc,c=a.descriptor;a.descriptor.target!==Le.T.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==s?.width||null==s?.height||null==c?.width||null==c?.height||e+r>s.width||t+i>s.height||o+r>c.width||n+i>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context,d=l.bindTexture(a,De.T.TEXTURE_UNIT_FOR_UPDATES);l.setActiveTexture(De.T.TEXTURE_UNIT_FOR_UPDATES),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(Le.T.TEXTURE_2D,0,o,n,e,t,r,i),l.bindTexture(d,De.T.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,t,r,i,o,n,a){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,o,n,a)}async readPixelsAsync(e,t,r,i,o,n,a){if(this._context.type!==Fe.C.WEBGL2)return(0,De.w)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,t,r,i,o,n,a);const s=this._context.gl,c=Ve.createPixelPack(this._context,Le.U.STREAM_READ,a.byteLength);this._context.bindBuffer(c),this._context.bindFramebuffer(this),s.readPixels(e,t,r,i,o,n,0),this._context.unbindBuffer(Le.l.PIXEL_PACK_BUFFER),await c.getSubDataAsync(a),c.dispose()}resize(e,t){const r=this._desc;if(r.width!==e||r.height!==t){if(!this._initialized)return r.width=e,r.height=t,this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));r.width=e,r.height=t,this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=Le.o.FRAMEBUFFER){const t=this._context.gl;if(this._initialized)return void t.bindFramebuffer(e,this.glName);this._glName&&t.deleteFramebuffer(this._glName);const r=this._context,i=t.createFramebuffer(),o=this._desc,n=o.colorTarget??Le.g.RENDER_BUFFER,a=o.width??1,s=o.height??1;if(t.bindFramebuffer(e,i),0===this._colorAttachments.size)if(n===Le.g.TEXTURE||n===Le.g.CUBEMAP)this._colorAttachments.set(Le.m.COLOR_ATTACHMENT0,function(e,t,r){return new De.T(e,{target:r,pixelFormat:Le.P.RGBA,dataType:Le.a.UNSIGNED_BYTE,samplingMode:Le.c.NEAREST,wrapMode:Le.b.CLAMP_TO_EDGE,width:t.width,height:t.height})}(r,o,this.descriptor.colorTarget===Le.g.CUBEMAP?Le.T.TEXTURE_CUBE_MAP:Le.T.TEXTURE_2D));else{const e=new $e(r,{internalFormat:Le.S.RGBA4,width:a,height:s});this._colorAttachments.set(Le.m.COLOR_ATTACHMENT0,e)}this._colorAttachments.forEach(((r,i)=>{r&&(Xe(r)?this._framebufferTexture2D(r.glName,i,Qe(r),e):t.framebufferRenderbuffer(e,i,t.RENDERBUFFER,r.glName))}));const c=o.depthStencilTarget??Le.h.NONE;switch(c){case Le.h.DEPTH_RENDER_BUFFER:case Le.h.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new $e(r,{internalFormat:o.depthStencilTarget===Le.h.DEPTH_RENDER_BUFFER?Le.i.DEPTH_COMPONENT16:Le.i.DEPTH_STENCIL,width:a,height:s}));const i=c===Le.h.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(e,i,t.RENDERBUFFER,this._depthAttachment.glName);break}case Le.h.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new $e(r,{internalFormat:Le.i.STENCIL_INDEX8,width:a,height:s})),t.framebufferRenderbuffer(e,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,this._stencilAttachment.glName);break;case Le.h.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){r.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const e={target:Le.T.TEXTURE_2D,pixelFormat:Le.P.DEPTH_STENCIL,dataType:Le.a.UNSIGNED_INT_24_8,samplingMode:Le.c.NEAREST,wrapMode:Le.b.CLAMP_TO_EDGE,width:a,height:s};this._depthStencilTexture=new De.T(r,e)}this._framebufferTexture2D(this._depthStencilTexture.glName,t.DEPTH_STENCIL_ATTACHMENT,Qe(this._depthStencilTexture),e)}(0,De.w)()&&t.checkFramebufferStatus(e)!==t.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=i,this._initialized=!0}_framebufferTexture2D(e,t=Le.m.COLOR_ATTACHMENT0,r=Le.T.TEXTURE_2D,i=Le.o.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(i,t,r,e,o)}_detachColorAttachment(e){(0,De.w)()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const t=this._context.gl,r=this._colorAttachments.get(e);return Xe(r)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(Le.o.FRAMEBUFFER,e,t.RENDERBUFFER,null)),this._colorAttachments.delete(e),r}_disposeColorAttachments(){this._colorAttachments.forEach(((e,t)=>{this._detachColorAttachment(t),e.dispose()})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===Le.h.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Le.o.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(Le.o.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(-1===je._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;je._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else je._MAX_COLOR_ATTACHMENTS=1}const t=e-Le.m.COLOR_ATTACHMENT0;t+1>je._MAX_COLOR_ATTACHMENTS&&L.L.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${je._MAX_COLOR_ATTACHMENTS} color attachments`)}}function Xe(e){return null!=e&&"type"in e&&"texture"===e.type}function qe(e){return null!=e&&"type"in e&&"renderbuffer"===e.type}function Ye(e){return Xe(e)||null!=e&&"pixelFormat"in e}function Ke(e,t){e.target!==Le.T.TEXTURE_2D&&e.target!==Le.T.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function Ze(e,t){void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function Qe(e){return e.descriptor.target===Le.T.TEXTURE_CUBE_MAP?Le.T.TEXTURE_CUBE_MAP_POSITIVE_X:Le.T.TEXTURE_2D}je._MAX_COLOR_ATTACHMENTS=-1;var Je=r(59696),et=r(47880),tt=r(32191);class rt{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,l.d)(),this._children=void 0,(0,U.a)(e.length>=1),(0,U.a)(r.length%this._numIndexPerPrimitive==0),(0,U.a)(r.length>=e.length*this._numIndexPerPrimitive),(0,U.a)(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];it.clear(),it.push(s),this.bbMin=(0,l.f)(o[s],o[s+1],o[s+2]),this.bbMax=(0,l.k)(this.bbMin);for(let t=0;t<a;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[i+e],it.push(s);let t=o[s];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[s+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[s+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}(0,l.z)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let e=0;e<it.length;++e){s=it.getItemAt(e);const t=o[s]-this.center[0],r=o[s+1]-this.center[1],i=o[s+2]-this.center[2],n=t*t+r*r+i*i;if(n<=c)continue;const a=Math.sqrt(n),l=.5*(a-this.radius);this.radius=this.radius+l,c=this.radius*this.radius;const d=l/a;this.center[0]+=t*d,this.center[1]+=r*d,this.center[2]+=i*d}it.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,l.G)(this.bbMin,this.bbMax)>1){const e=(0,l.z)((0,l.d)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:n}=this.position;for(let a=0;a<t;++a){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[a];let c=n*this.indices[s],l=o[c],d=o[c+1],u=o[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=n*this.indices[s+e];const t=o[c],r=o[c+1],i=o[c+2];t<l&&(l=t),r<d&&(d=r),i<u&&(u=i)}l<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[a]=t,++i[t]}let a=0;for(let e=0;e<8;++e)i[e]>0&&++a;if(a<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==s[e]&&(this._children[e]=new rt(s[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){it.prune()}}const it=new V.P({deallocator:null}),ot=(0,l.d)(),nt=(0,l.d)(),at=(0,l.d)(),st=(0,l.d)();class ct extends j{constructor(e,t=[],r=E.Triangle,i=null,o=-1){super(),this._primitiveType=r,this.objectAndLayerIdColor=i,this.edgeIndicesLength=o,this.type=X.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,Ae.g)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,(0,Ae.c)(r)),e===G.V.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}cloneShallow(){const e=new ct([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:t,_indices:r}=e;return this._vertexAttributes.forEach(((e,r)=>t.set(r,e))),this._indices.forEach(((e,t)=>r.set(t,e))),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,o.a)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===E.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(G.V.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,l.s)(r,0,0,0),(0,l.s)(st,0,0,0);let n=0,a=0;for(let e=0;e<t.length-2;e+=3){const s=t[e+0]*i,c=t[e+1]*i,d=t[e+2]*i;(0,l.s)(ot,o[s+0],o[s+1],o[s+2]),(0,l.s)(nt,o[c+0],o[c+1],o[c+2]),(0,l.s)(at,o[d+0],o[d+1],o[d+2]);const u=ge(ot,nt,at);u?((0,l.a)(ot,ot,nt),(0,l.a)(ot,ot,at),(0,l.g)(ot,ot,1/3*u),(0,l.a)(r,r,ot),n+=u):((0,l.a)(st,st,ot),(0,l.a)(st,st,nt),(0,l.a)(st,st,at),a+=3)}return!(0===a&&0===n||(0!==n?((0,l.g)(r,r,1/n),0):0===a||((0,l.g)(r,st,1/a),0)))}(this.vertexAttributes.get(G.V.POSITION),t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(G.V.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,l.s)(r,0,0,0);let n=-1,a=0;for(let e=0;e<t.length;e++){const s=t[e]*i;n!==s&&(r[0]+=o[s+0],r[1]+=o[s+1],r[2]+=o[s+2],a++),n=s}return a>1&&(0,l.g)(r,r,1/a),a>0}(this.vertexAttributes.get(G.V.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(G.V.POSITION);if(!e||0===e.length)return null;const t=this.primitiveType===E.Triangle?3:1;(0,U.a)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,Ae.g)(e.length/t),i=this.vertexAttributes.get(G.V.POSITION);return i?new rt(r,t,e,i):null}}class lt{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(r,t),this._technique),this._technique}ensureResources(e){return x.LOADED}}var dt;!function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(dt||(dt={}));class ut extends Se{constructor(){super(...arguments),this.hasWebGL2Context=!1}}function ht(e){e.attributes.add(G.V.POSITION,"vec3"),e.vertex.code.add(K`vec3 positionModel() { return position; }`)}function ft({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(K`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(K`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}(0,Ee._)([we({constValue:!0})],ut.prototype,"hasSliceHighlight",void 0),(0,Ee._)([we({constValue:!1})],ut.prototype,"hasSliceInVertexProgram",void 0),(0,Ee._)([we({constValue:!1})],ut.prototype,"instancedDoublePrecision",void 0),(0,Ee._)([we({constValue:!1})],ut.prototype,"useLegacyTerrainShading",void 0),(0,Ee._)([we({constValue:!1})],ut.prototype,"hasModelTransformation",void 0),(0,Ee._)([we({constValue:dt.Pass})],ut.prototype,"pbrTextureBindType",void 0),(0,Ee._)([we()],ut.prototype,"hasWebGL2Context",void 0);class mt{constructor(e,t,r,i,n=null){this.name=e,this.type=t,this.arraySize=n,this.bind={[dt.Pass]:null,[dt.Draw]:null},(0,o.i)(r)&&(0,o.i)(i)&&(this.bind[r]=i)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class pt extends mt{constructor(e,t){super(e,"vec3",dt.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}class gt extends mt{constructor(e,t){super(e,"vec3",dt.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}class _t extends mt{constructor(e,t){super(e,"mat3",dt.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}class vt extends mt{constructor(e,t){super(e,"mat3",dt.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}class xt extends mt{constructor(e,t){super(e,"mat4",dt.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}function Tt(e,t){e.include(ht);const r=e.vertex;r.include(ft,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new gt("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new gt("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new vt("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new xt("transformProjFromView",(e=>e.transformProjFromView)),new _t("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new pt("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new pt("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),r.code.add(K`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(K`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?K`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:K`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new gt("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(K`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(K`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class bt extends Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,l.d)(),this.transformWorldFromViewTL=(0,l.d)(),this.transformViewFromCameraRelativeRS=(0,a.c)(),this.transformProjFromView=(0,c.c)()}}class At extends Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,a.c)(),this.transformWorldFromModelTH=(0,Ce.b)(),this.transformWorldFromModelTL=(0,Ce.b)()}}class Et extends mt{constructor(e,t){super(e,"vec2",dt.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}function St(e){e.varyings.add("linearDepth","float")}function wt(e){e.vertex.uniforms.add(new Et("nearFar",((e,t)=>t.camera.nearFar)))}function Ct(e){e.vertex.code.add(K`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function yt(e,t){const{vertex:r}=e;switch(t.output){case xe.Color:if(t.receiveShadows)return St(e),void r.code.add(K`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case xe.Depth:case xe.Shadow:case xe.ShadowHighlight:case xe.ShadowExludeHighlight:return e.include(Tt,t),St(e),wt(e),Ct(e),void r.code.add(K`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(K`void forwardLinearDepth() {}`)}function Mt(e,t){!function(e,t,r){if(!t.hasSlicePlane){const r=K`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}e.extensions.add("GL_OES_standard_derivatives"),t.hasSliceInVertexProgram&&e.vertex.uniforms.add(r),e.fragment.uniforms.add(r);const i=K`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=K`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?K`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:K`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}(e,t,[new pt("slicePlaneOrigin",((e,r)=>function(e,t,r){if((0,o.a)(r.slicePlane))return l.Z;const i=Rt(e,t,r),n=Ot(i,r.slicePlane),a=Pt(e,i,r);return(0,o.i)(a)?(0,l.e)(Lt,n,a):n}(t,e,r))),new pt("slicePlaneBasis1",((e,r)=>Nt(t,e,r,(0,o.u)(r.slicePlane)?.basis1))),new pt("slicePlaneBasis2",((e,r)=>Nt(t,e,r,(0,o.u)(r.slicePlane)?.basis2)))])}function Rt(e,t,r){return e.instancedDoublePrecision?(0,l.s)(It,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Ot(e,t){return(0,o.i)(e)?(0,l.b)(Lt,t.origin,e):t.origin}function Pt(e,t,r){return e.hasSliceTranslatedView?(0,o.i)(t)?(0,s.k)(Ft,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function Nt(e,t,r,i){if((0,o.a)(i)||(0,o.a)(r.slicePlane))return l.Z;const n=Rt(e,t,r),a=Ot(n,r.slicePlane),s=Pt(e,n,r);return(0,o.i)(s)?((0,l.a)(Dt,i,a),(0,l.e)(Lt,a,s),(0,l.e)(Dt,Dt,s),(0,l.b)(Dt,Dt,Lt)):i}const It=(0,l.d)(),Lt=(0,l.d)(),Dt=(0,l.d)(),Ft=(0,c.c)();function Bt(e,t){const r=t.output===xe.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(G.V.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):e.attributes.add(G.V.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(K`
     void forwardObjectAndLayerIdColor() {
      ${r?i?K`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:K`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:K``} }`),e.fragment.code.add(K`
      void outputObjectAndLayerIdColor() {
        ${r?K`gl_FragColor = objectAndLayerIdColorVarying;`:K``} }`)}class Vt extends mt{constructor(e,t,r){super(e,"vec4",dt.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class Ut extends mt{constructor(e,t){super(e,"float",dt.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}class zt extends mt{constructor(e,t,r){super(e,"float",dt.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}function Gt(e){e.code.add(K`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Ht(e,t){switch(e.fragment.include(Gt),t.output){case xe.Shadow:case xe.ShadowHighlight:case xe.ShadowExludeHighlight:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(K`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case xe.Depth:e.fragment.code.add(K`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}class Wt extends mt{constructor(e,t){super(e,"mat4",dt.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}function kt(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",l.Z):e.uniforms.add(new pt("cameraPosition",((e,t)=>(0,l.s)(Xt,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function $t(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add([new xt("proj",((e,t)=>t.camera.projectionMatrix)),new Wt("view",((e,t)=>(0,s.k)(jt,t.camera.viewMatrix,e.origin))),new pt("localOrigin",(e=>e.origin))]);const r=e=>(0,l.s)(Xt,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add([new xt("proj",((e,t)=>t.camera.projectionMatrix)),new xt("view",((e,t)=>(0,s.k)(jt,t.camera.viewMatrix,r(t)))),new gt("localOrigin",((e,t)=>r(t)))])}const jt=(0,Me.c)(),Xt=(0,l.d)();function qt(e,t,r=!1,i=0){if(e.hasWebGL2Context){const e=K`vec2(textureSize(${t}, ${K.int(i)}))`;return r?"(1.0 / "+e+")":e}return r?t+"InvSize":t+"Size"}class Yt extends mt{constructor(e,t){super(e,"vec4",dt.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}var Kt;!function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize"}(Kt||(Kt={}));class Zt extends mt{constructor(e,t){super(e,"sampler2D",dt.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function Qt(e,t,r=Kt.None){const i=[new Zt(e,t)];if(r&Kt.Size){const r=e+"Size";i.push(new Et(r,((e,r)=>{const i=t(e,r);return(0,o.i)(i)?(0,et.s)(Jt,i.descriptor.width,i.descriptor.height):tt.Z})))}if(r&Kt.InvSize){const r=e+"InvSize";i.push(new Et(r,((e,r)=>{const i=t(e,r);return(0,o.i)(i)?(0,et.s)(Jt,1/i.descriptor.width,1/i.descriptor.height):tt.Z})))}return i}const Jt=(0,tt.a)();function er(e,t=!0){e.attributes.add(G.V.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(K`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?K`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}const tr=L.L.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class rr{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){tr.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class ir extends rr{constructor(){super(...arguments),this.vertex=new ar,this.fragment=new ar,this.attributes=new sr,this.varyings=new cr,this.extensions=new lr,this.constants=new dr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?hr:ur,c=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,o.i)(i)&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,o.i)(i)&&r.set(t.name,i)}));const i=Array.from(r.values()),n=i.length;return(e,r,o)=>{for(let a=0;a<n;++a)i[a](t,e,r,o)}}}class or{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if((0,o.a)(e))tr.error(`Trying to add null Uniform from ${(new Error).stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new I.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map((e=>(0,o.i)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class nr{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class ar extends rr{constructor(){super(...arguments),this.uniforms=new or,this.code=new nr,this.constants=new dr}get builder(){return this}}class sr{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class cr{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class lr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?lr.ALLOWLIST_VERTEX:lr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}lr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],lr.ALLOWLIST_VERTEX=[];class dr{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=dr._numberToFloatStr(r);break;case"int":i=dr._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${dr._numberToFloatStr(r[0])},                            ${dr._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${dr._numberToFloatStr(r[0])},                            ${dr._numberToFloatStr(r[1])},                            ${dr._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${dr._numberToFloatStr(r[0])},                            ${dr._numberToFloatStr(r[1])},                            ${dr._numberToFloatStr(r[2])},                            ${dr._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${dr._numberToIntStr(r[0])},                             ${dr._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${dr._numberToIntStr(r[0])},                             ${dr._numberToIntStr(r[1])},                             ${dr._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${dr._numberToIntStr(r[0])},                             ${dr._numberToIntStr(r[1])},                             ${dr._numberToIntStr(r[2])},                             ${dr._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>dr._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ur="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",hr="precision highp float;\nprecision highp sampler2D;";class fr extends Y{constructor(){super(...arguments),this.color=(0,Ne.f)(1,1,1,1)}}let mr;var pr;Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:fr,build:function(){const e=new ir;return e.include(er),e.fragment.uniforms.add([new Zt("tex",(e=>e.texture)),new Yt("uColor",(e=>e.color))]),e.fragment.code.add(K`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}},Symbol.toStringTag,{value:"Module"})),function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(pr||(pr={}));let gr=null,_r=null;async function vr(){return(0,o.a)(_r)&&(_r=function(){if((0,o.a)(mr)){const e=e=>(0,Ie.g)(`esri/libs/basisu/${e}`);mr=r.e(3786).then(r.bind(r,73786)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return mr}(),gr=await _r),_r}function xr(e,t,r,i,o){const n=Ge(t?Le.C.COMPRESSED_RGBA8_ETC2_EAC:Le.C.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function Tr(e){return e.getNumImages()>=1&&!e.isUASTC()}function br(e){return e.getFaces()>=1&&e.isETC1S()}function Ar(e,t,r,i,o,n,a,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[d,u]=c?i?[pr.ETC2_RGBA,Le.C.COMPRESSED_RGBA8_ETC2_EAC]:[pr.ETC1_RGB,Le.C.COMPRESSED_RGB8_ETC2]:l?i?[pr.BC3_RGBA,Le.C.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[pr.BC1_RGB,Le.C.COMPRESSED_RGB_S3TC_DXT1_EXT]:[pr.RGBA32,Le.P.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let e=0;e<h;e++)f.push(new Uint8Array(a(e,d))),s(e,d,f[e]);const m=f.length>1,p=m?Le.c.LINEAR_MIPMAP_LINEAR:Le.c.LINEAR,g={...t,samplingMode:p,hasMipmap:m,internalFormat:u,width:o,height:n};return new De.T(e,g,{type:"compressed",levels:f})}const Er=L.L.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Sr(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const wr=Sr("DXT1"),Cr=Sr("DXT3"),yr=Sr("DXT5");new Je.V(G.V.POSITION,3,Le.D.FLOAT,0,12),new Je.V(G.V.POSITION,3,Le.D.FLOAT,0,20),new Je.V(G.V.UV0,2,Le.D.FLOAT,12,20),new Je.V(G.V.POSITION,3,Le.D.FLOAT,0,32),new Je.V(G.V.NORMAL,3,Le.D.FLOAT,12,32),new Je.V(G.V.UV0,2,Le.D.FLOAT,24,32),new Je.V(G.V.POSITION,3,Le.D.FLOAT,0,16),new Je.V(G.V.COLOR,4,Le.D.UNSIGNED_BYTE,12,16);const Mr=[new Je.V(G.V.POSITION,2,Le.D.FLOAT,0,8)],Rr=[new Je.V(G.V.POSITION,2,Le.D.FLOAT,0,16),new Je.V(G.V.UV0,2,Le.D.FLOAT,8,16)];class Or extends ke{}class Pr extends j{constructor(e,t){super(),this._data=e,this.type=X.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Oe.Z,this._passParameters=new fr,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Le.b.REPEAT,t:Le.b.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||S.STRETCH,this.estimatedTexMemRequired=Pr._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;(0,o.a)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,Pe.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,Pe.HK)(e.src)||(0,Pe.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,o.a)(e))return 0;if((0,H.h)(e)||(0,H.q)(e))return t.encoding===Pr.KTX2_ENCODING?function(e,t){if((0,o.a)(gr))return e.byteLength;const r=new gr.KTX2File(new Uint8Array(e)),i=br(r)?xr(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===Pr.BASIS_ENCODING?function(e,t){if((0,o.a)(gr))return e.byteLength;const r=new gr.BasisFile(new Uint8Array(e)),i=Tr(r)?xr(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Pr._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:Le.T.TEXTURE_2D,pixelFormat:Le.P.RGBA,dataType:Le.a.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Le.c.LINEAR_MIPMAP_LINEAR:Le.c.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,o.i)(this._glTexture))return this._glTexture;if((0,o.i)(this._loadingPromise))return this._loadingPromise;const r=this._data;return(0,o.a)(r)?(this._glTexture=new De.T(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,H.h)(r)||(0,H.q)(r))&&this.params.encoding===Pr.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):((0,H.h)(r)||(0,H.q)(r))&&this.params.encoding===Pr.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):((0,H.h)(r)||(0,H.q)(r))&&this.params.encoding===Pr.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):(0,H.q)(r)?this._loadFromPixelData(e,r):(0,H.h)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this._data instanceof HTMLVideoElement)||(0,o.a)(this._glTexture))return r;if(this._data.readyState<Nr.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if((0,o.i)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this._data),this._drawStretchedTexture(e,t,r,i,o,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this._data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const{textureData:i,internalFormat:n,width:a,height:s}=(0,o.c)(function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Er.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Er.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case wr:o=8,n=Le.C.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Cr:o=16,n=Le.C.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case yr:o=16,n=Le.C.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Er.error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,c=r[4],l=r[3];0==(3&c)&&0==(3&l)||(Er.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const d=c,u=l;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||(0,W.i)(c)&&(0,W.i)(l)||(Er.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let h,f,m=r[1]+4;const p=[];for(let t=0;t<s;++t)f=(c+3>>2)*(l+3>>2)*o,h=new Uint8Array(e,m,f),p.push(h),m+=f,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:n,width:d,height:u}}(r,t.hasMipmap??!1));return t.samplingMode=i.levels.length>1?Le.c.LINEAR_MIPMAP_LINEAR:Le.c.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new De.T(e,t,i)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.a)(gr)&&(gr=await vr());const i=new gr.KTX2File(new Uint8Array(r));if(!br(i))return null;i.startTranscoding();const n=Ar(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.a)(gr)&&(gr=await vr());const i=new gr.BasisFile(new Uint8Array(r));if(!Tr(i))return null;i.startTranscoding();const n=Ar(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,U.a)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?Le.P.LUMINANCE:3===this.params.components?Le.P.RGB:Le.P.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new De.T(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const o=await B(r,{signal:i});return(0,D.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const o=await(0,O.l)(r,r.src,!1,i);return(0,D.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=Nr.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((n,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),(0,o.r)(d)},c=()=>{r.readyState>=Nr.HAVE_CURRENT_DATA&&(s(),n(this._loadFromImage(e,r,t)))},l=e=>{s(),a(e||new I.Z("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const d=(0,D.fu)(i,(()=>l((0,D.zE)())))}))))}_loadFromImage(e,t,r){const i=Pr._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?Le.P.RGB:Le.P.RGBA,!this._requiresPowerOfTwo(e,o)||(0,W.i)(i.width)&&(0,W.i)(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new De.T(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,o,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=Le.b.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,De.i)(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,o){const{width:n,height:a}=r,s=(0,W.f)(n),c=(0,W.f)(a);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case S.PAD:i.textureCoordinateScaleFactor=[n/s,a/c],l=new De.T(e,i),l.updateData(0,0,0,n,a,t);break;case S.STRETCH:case null:case void 0:l=this._stretchToPowerOfTwo(e,t,i,o());break;default:(0,Re.n)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}_stretchToPowerOfTwo(e,t,r,i){const o=new De.T(e,r),n=new je(e,{colorTarget:Le.g.TEXTURE,depthStencilTarget:Le.h.NONE},o),a=new De.T(e,{target:Le.T.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:Le.a.UNSIGNED_BYTE,wrapMode:Le.b.CLAMP_TO_EDGE,samplingMode:Le.c.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=Mr,r=Z,i=-1,o=1){let n=null;return n=t===Rr?new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):new Float32Array([i,i,o,i,i,o,o,o]),new Or(e,r,{geometry:t},{geometry:Ve.createVertex(e,Le.U.STATIC_DRAW,n)})}(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,n,s,a,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(c),o}_drawStretchedTexture(e,t,r,i,o,n){this._passParameters.texture=o,e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(t,this._passParameters,null),e.bindVAO(i),e.drawArrays(Le.e.TRIANGLE_STRIP,0,function(e,t){return e.vertexBuffers[t].size/e.layout[t][0].stride}(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height),this._passParameters.texture=null}unload(){if((0,o.i)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,o.i)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,o.i)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var Nr;function Ir(e){e.include(Gt),e.code.add(K`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Lr(e,t){t.hasMultipassTerrain&&(e.fragment.include(Ir),e.fragment.uniforms.add(new Zt("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new Et("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new Et("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(K`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}function Dr(e){e.vertex.code.add(K`const float PI = 3.141592653589793;`),e.fragment.code.add(K`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}Pr.DDS_ENCODING="image/vnd-ms.dds",Pr.KTX2_ENCODING="image/ktx2",Pr.BASIS_ENCODING="image/x.basis",function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Nr||(Nr={}));const Fr=.001;function Br(e){e.code.add(K`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}class Vr{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Ur{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,o.p)(this._program),this._pipeline=this._configuration=null}reload(e){(0,o.p)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Le.e.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}class zr{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new V.P({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(dt.Pass,this),this.bindDraw=t.generateBind(dt.Draw,this),this._fragmentUniforms=(0,De.w)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,o.a)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,o.i)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}Le.d.LESS,Le.d.ALWAYS;const Gr={mask:255},Hr={function:{func:Le.d.ALWAYS,ref:T.OutlineVisualElementMask,mask:T.OutlineVisualElementMask},operation:{fail:Le.f.KEEP,zFail:Le.f.KEEP,zPass:Le.f.ZERO}},Wr={function:{func:Le.d.ALWAYS,ref:T.OutlineVisualElementMask,mask:T.OutlineVisualElementMask},operation:{fail:Le.f.KEEP,zFail:Le.f.KEEP,zPass:Le.f.REPLACE}};function kr(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let r=0;r<a;++r){const a=2*e[r];o[i]=t[a],o[i+1]=t[a+1],i+=n}}function $r(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],i+=a}}function jr(e,t,r,i,o,n=1){if(!r)return void $r(e,t,i,o,n);const a=i.typedBuffer,s=i.typedBufferStride,c=e.length,l=r[0],d=r[1],u=r[2],h=r[4],f=r[5],m=r[6],p=r[8],g=r[9],_=r[10],v=r[12],x=r[13],T=r[14];o*=s;let b=0,A=0,E=0;const S=Zr(r)?e=>{b=t[e]+v,A=t[e+1]+x,E=t[e+2]+T}:e=>{const r=t[e],i=t[e+1],o=t[e+2];b=l*r+h*i+p*o+v,A=d*r+f*i+g*o+x,E=u*r+m*i+_*o+T};if(1===n)for(let t=0;t<c;++t)S(3*e[t]),a[o]=b,a[o+1]=A,a[o+2]=E,o+=s;else for(let t=0;t<c;++t){S(3*e[t]);for(let e=0;e<n;++e)a[o]=b,a[o+1]=A,a[o+2]=E,o+=s}}function Xr(e,t,r,i,o,n=1){if(!r)return void $r(e,t,i,o,n);const a=r,c=i.typedBuffer,l=i.typedBufferStride,d=e.length,u=a[0],h=a[1],f=a[2],m=a[4],p=a[5],g=a[6],_=a[8],v=a[9],x=a[10],T=!(0,s.l)(a),b=1e-6,A=.999999;o*=l;let E=0,S=0,w=0;const C=Zr(a)?e=>{E=t[e],S=t[e+1],w=t[e+2]}:e=>{const r=t[e],i=t[e+1],o=t[e+2];E=u*r+m*i+_*o,S=h*r+p*i+v*o,w=f*r+g*i+x*o};if(1===n)if(T)for(let t=0;t<d;++t){C(3*e[t]);const r=E*E+S*S+w*w;if(r<A&&r>b){const e=1/Math.sqrt(r);c[o]=E*e,c[o+1]=S*e,c[o+2]=w*e}else c[o]=E,c[o+1]=S,c[o+2]=w;o+=l}else for(let t=0;t<d;++t)C(3*e[t]),c[o]=E,c[o+1]=S,c[o+2]=w,o+=l;else for(let t=0;t<d;++t){if(C(3*e[t]),T){const e=E*E+S*S+w*w;if(e<A&&e>b){const t=1/Math.sqrt(e);E*=t,S*=t,w*=t}}for(let e=0;e<n;++e)c[o]=E,c[o+1]=S,c[o+2]=w,o+=l}}function qr(e,t,r,i,o,n=1){if(!r)return void function(e,t,r,i,o=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let r=0;r<s;++r){const o=4*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],n[i+3]=t[o+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],n[i+3]=t[s+3],i+=a}}(e,t,i,o,n);const a=r,c=i.typedBuffer,l=i.typedBufferStride,d=e.length,u=a[0],h=a[1],f=a[2],m=a[4],p=a[5],g=a[6],_=a[8],v=a[9],x=a[10],T=!(0,s.l)(a),b=1e-6,A=.999999;if(o*=l,1===n)for(let r=0;r<d;++r){const i=4*e[r],n=t[i],a=t[i+1],s=t[i+2],d=t[i+3];let E=u*n+m*a+_*s,S=h*n+p*a+v*s,w=f*n+g*a+x*s;if(T){const e=E*E+S*S+w*w;if(e<A&&e>b){const t=1/Math.sqrt(e);E*=t,S*=t,w*=t}}c[o]=E,c[o+1]=S,c[o+2]=w,c[o+3]=d,o+=l}else for(let r=0;r<d;++r){const i=4*e[r],a=t[i],s=t[i+1],d=t[i+2],E=t[i+3];let S=u*a+m*s+_*d,w=h*a+p*s+v*d,C=f*a+g*s+x*d;if(T){const e=S*S+w*w+C*C;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,w*=t,C*=t}}for(let e=0;e<n;++e)c[o]=S,c[o+1]=w,c[o+2]=C,c[o+3]=E,o+=l}}function Yr(e,t,r,i,o,n=1){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(o*=s,r!==t.length||4!==r)if(1!==n)if(4!==r)for(let r=0;r<c;++r){const i=3*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}else for(let r=0;r<c;++r){const i=4*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else{if(4===r){for(let r=0;r<c;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}return}for(let r=0;r<c;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else{a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),r=s/4,l=e[o/=4];o+=r;const d=c*n;for(let t=1;t<d;++t)e[o]=l,o+=r}}function Kr(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}function Zr(e){return 1===e[0]&&0===e[1]&&0===e[2]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[8]&&0===e[9]&&1===e[10]}Le.d.EQUAL,T.OutlineVisualElementMask,T.OutlineVisualElementMask,Le.f.KEEP,Le.f.KEEP,Le.f.KEEP,Le.d.NOTEQUAL,T.OutlineVisualElementMask,T.OutlineVisualElementMask,Le.f.KEEP,Le.f.KEEP,Le.f.KEEP;var Qr,Jr,ei=r(15215);function ti(e,t,r=Le.r.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}(Jr=Qr||(Qr={}))[Jr.Color=0]="Color",Jr[Jr.Alpha=1]="Alpha",Jr[Jr.FrontFace=2]="FrontFace",Jr[Jr.NONE=3]="NONE",Jr[Jr.COUNT=4]="COUNT";const ri={face:Le.F.BACK,mode:Le.q.CCW},ii={face:Le.F.FRONT,mode:Le.q.CCW},oi=e=>e===g.Back?ri:e===g.Front?ii:null,ni={zNear:0,zFar:1},ai={r:!0,g:!0,b:!0,a:!0};function si(e){return vi.intern(e)}function ci(e){return Ti.intern(e)}function li(e){return Ai.intern(e)}function di(e){return Si.intern(e)}function ui(e){return Ci.intern(e)}function hi(e){return Mi.intern(e)}function fi(e){return Oi.intern(e)}function mi(e){return Ni.intern(e)}function pi(e){return Li.intern(e)}class gi{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function _i(e){return"["+e.join(",")+"]"}const vi=new gi(xi,(e=>({__tag:"Blending",...e})));function xi(e){return e?_i([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const Ti=new gi(bi,(e=>({__tag:"Culling",...e})));function bi(e){return e?_i([e.face,e.mode]):null}const Ai=new gi(Ei,(e=>({__tag:"PolygonOffset",...e})));function Ei(e){return e?_i([e.factor,e.units]):null}const Si=new gi(wi,(e=>({__tag:"DepthTest",...e})));function wi(e){return e?_i([e.func]):null}const Ci=new gi(yi,(e=>({__tag:"StencilTest",...e})));function yi(e){return e?_i([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const Mi=new gi(Ri,(e=>({__tag:"DepthWrite",...e})));function Ri(e){return e?_i([e.zNear,e.zFar]):null}const Oi=new gi(Pi,(e=>({__tag:"ColorWrite",...e})));function Pi(e){return e?_i([e.r,e.g,e.b,e.a]):null}const Ni=new gi(Ii,(e=>({__tag:"StencilWrite",...e})));function Ii(e){return e?_i([e.mask]):null}const Li=new gi((function(e){return e?_i([xi(e.blending),bi(e.culling),Ei(e.polygonOffset),wi(e.depthTest),yi(e.stencilTest),Ri(e.depthWrite),Pi(e.colorWrite),Ii(e.stencilWrite)]):null}),(e=>({blending:si(e.blending),culling:ci(e.culling),polygonOffset:li(e.polygonOffset),depthTest:di(e.depthTest),stencilTest:ui(e.stencilTest),depthWrite:hi(e.depthWrite),colorWrite:fi(e.colorWrite),stencilWrite:mi(e.stencilWrite)}))),Di=function(e,t,r,i,o=Le.r.ADD,n=Le.r.ADD,a=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:n,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}(Le.B.SRC_ALPHA,Le.B.ONE,Le.B.ONE_MINUS_SRC_ALPHA,Le.B.ONE_MINUS_SRC_ALPHA),Fi=ti(Le.B.ONE,Le.B.ONE),Bi=ti(Le.B.ZERO,Le.B.ONE_MINUS_SRC_ALPHA);function Vi(e){return e===Qr.FrontFace?null:e===Qr.Alpha?Bi:Fi}const Ui={factor:-1,units:-2};function zi(e){return e?Ui:null}function Gi(e,t=Le.d.LESS){return e===Qr.NONE||e===Qr.FrontFace?t:Le.d.LEQUAL}function Hi(e){e.fragment.uniforms.add(new Yt("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,W.s)(Wi,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,W.s)(Wi,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new Et("zScale",((e,t)=>ki(t)))),e.fragment.code.add(K`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const Wi=(0,Ne.c)();function ki(e){return 0===e.camera.projectionMatrix[11]?(0,et.s)($i,0,1):(0,et.s)($i,1,0)}const $i=(0,tt.a)();var ji;function Xi(e,t){switch(t.textureCoordinateType){case ji.Default:return e.attributes.add(G.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(K`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ji.Compressed:return e.attributes.add(G.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(K`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case ji.Atlas:return e.attributes.add(G.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(G.V.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(K`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,Re.n)(t.textureCoordinateType);case ji.None:return void e.vertex.code.add(K`void forwardTextureCoordinates() {}`);case ji.COUNT:return}}function qi(e){e.uniforms.add(new gt("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function Yi(e){e.uniforms.add(new gt("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function Ki(e,t){const r=e.fragment;qi(r),Yi(r),function(e,t){t.useLegacyTerrainShading?e.uniforms.add(new Ut("lightingFixedFactor",((e,t)=>t.lighting.noonFactor*(1-t.lighting.globalFactor)))):e.constants.add("lightingFixedFactor","float",0)}(r,t),r.code.add(K`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Zi(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(K`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Qi(e,t){switch(e.include(Xi,t),e.fragment.code.add(K`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case ji.Default:case ji.Compressed:return void e.fragment.code.add(K`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case ji.Atlas:return e.include(Zi),void e.fragment.code.add(K`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,Re.n)(t.textureCoordinateType);case ji.None:case ji.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(ji||(ji={}));class Ji extends mt{constructor(e,t){super(e,"vec2",dt.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}class eo extends mt{constructor(e,t){super(e,"sampler2D",dt.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function to(e,t,r=Kt.None){const i=[new eo(e,t)];if(r&Kt.Size){const r=e+"Size";i.push(new Ji(r,((e,r)=>{const i=t(e,r);return(0,o.i)(i)?(0,et.s)(ro,i.descriptor.width,i.descriptor.height):tt.Z})))}if(r&Kt.InvSize){const r=e+"InvSize";i.push(new Ji(r,((e,r)=>{const i=t(e,r);return(0,o.i)(i)?(0,et.s)(ro,1/i.descriptor.width,1/i.descriptor.height):tt.Z})))}return i}const ro=(0,tt.a)();var io;function oo(e,t){const r=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===io.Normal&&i&&e.include(Qi,t),t.pbrMode!==io.Schematic)if(t.pbrMode!==io.Disabled){if(t.pbrMode===io.Normal){r.code.add(K`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas?t.hasWebGL2Context?Kt.None:Kt.Size:Kt.None,o=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(o===dt.Pass?Qt("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):to("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),r.code.add(K`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(o===dt.Pass?Qt("texEmission",(e=>e.textureEmissive),e):to("texEmission",(e=>e.textureEmissive),e)),r.code.add(K`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(o===dt.Pass?Qt("texOcclusion",(e=>e.textureOcclusion),e):to("texOcclusion",(e=>e.textureOcclusion),e)),r.code.add(K`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(K`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(o===dt.Pass?[new gt("emissionFactor",(e=>e.emissiveFactor)),new gt("mrrFactors",(e=>e.mrrFactors))]:[new pt("emissionFactor",(e=>e.emissiveFactor)),new pt("mrrFactors",(e=>e.mrrFactors))]),r.code.add(K`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?K`vtc.uv = vuv0;`:""}
      ${t.hasMetallicRoughnessTextureTransform?K`vtc.uv = metallicRoughnessUV;`:""}
      ${t.hasMetallicRoughnessTexture?t.supportsTextureAtlas?K`
                vtc.size = ${qt(t,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:K`applyMetallnessAndRoughness(vtc);`:""}
      ${t.hasEmissiveTextureTransform?K`vtc.uv = emissiveUV;`:""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?K`
                vtc.size = ${qt(t,"texEmission")};
                applyEmission(vtc);`:K`applyEmission(vtc);`:""}
      ${t.hasOcclusionTextureTransform?K`vtc.uv = occlusionUV;`:""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?K`
                vtc.size = ${qt(t,"texOcclusion")};
                applyOcclusion(vtc);`:K`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(K`float getBakedOcclusion() { return 1.0; }`);else r.code.add(K`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function no(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new gt("lightingAmbientSH0",((e,t)=>(0,l.s)(ao,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(K`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add([new Yt("lightingAmbientSH_R",((e,t)=>(0,W.s)(so,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new Yt("lightingAmbientSH_G",((e,t)=>(0,W.s)(so,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new Yt("lightingAmbientSH_B",((e,t)=>(0,W.s)(so,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(K`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add([new gt("lightingAmbientSH0",((e,t)=>(0,l.s)(ao,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new Yt("lightingAmbientSH_R1",((e,t)=>(0,W.s)(so,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new Yt("lightingAmbientSH_G1",((e,t)=>(0,W.s)(so,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new Yt("lightingAmbientSH_B1",((e,t)=>(0,W.s)(so,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new Yt("lightingAmbientSH_R2",((e,t)=>(0,W.s)(so,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new Yt("lightingAmbientSH_G2",((e,t)=>(0,W.s)(so,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new Yt("lightingAmbientSH_B2",((e,t)=>(0,W.s)(so,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(K`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==io.Normal&&t.pbrMode!==io.Schematic||r.code.add(K`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}(0,Ce.f)(0,.6,.2),function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(io||(io={}));const ao=(0,l.d)(),so=(0,Ne.c)();class co extends mt{constructor(e,t){super(e,"bool",dt.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}function lo(e){const t=K`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}function uo(e,t){t.normalType===ho.Attribute&&(e.attributes.add(G.V.NORMAL,"vec3"),e.vertex.code.add(K`vec3 normalModel() {
return normal;
}`)),t.normalType===ho.CompressedAttribute&&(e.include(lo),e.attributes.add(G.V.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(K`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===ho.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(K`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var ho;function fo(e,t){t.normalType===ho.Attribute||t.normalType===ho.CompressedAttribute?(e.include(uo,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new _t("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new vt("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(K`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===ho.Ground?(e.include(Tt,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(K`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?K`normalize(vPositionWorldCameraRelative);`:K`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(K`void forwardNormal() {}`)}(0,l.d)(),(0,l.d)(),function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(ho||(ho={}));class mo extends bt{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,a.c)()}}class po extends At{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,a.c)(),this.toMapSpace=(0,Ne.c)()}}class go extends mt{constructor(e,t){super(e,"int",dt.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}class _o extends mt{constructor(e,t,r){super(e,"mat4",dt.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}class vo extends mt{constructor(e,t,r){super(e,"mat4",dt.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}function xo(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new vo("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),bo(e,t))}function To(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new _o("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),bo(e,t))}function bo(e,t){const r=e.fragment;r.include(Gt),r.uniforms.add([...Qt("shadowMapTex",((e,t)=>t.shadowMap.depthTexture),t.hasWebGL2Context?Kt.None:Kt.Size),new go("numCascades",((e,t)=>t.shadowMap.numCascades)),new Yt("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))]),r.code.add(K`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${qt(t,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function Ao(e){const t=e.fragment.code;t.add(K`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(K`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(K`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Eo(e,t){const r=e.fragment.code;e.include(Dr),t.pbrMode===io.Water||t.pbrMode===io.WaterOnIntegratedMesh?(r.add(K`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(K`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(K`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(K`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(K`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==io.Normal&&t.pbrMode!==io.Schematic||(e.include(Ao),r.add(K`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(K`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(K`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(K`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(K`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(K`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}const So=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new ir,t=e.fragment;return e.include(er),t.include(Ir),t.uniforms.add([new Zt("depthMap",(e=>e.depthTexture)),new eo("tex",(e=>e.colorTexture)),new Ji("blurSize",(e=>e.blurSize)),new Ut("projScale",((e,t)=>{const r=(0,l.C)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new Et("nearFar",((e,t)=>t.camera.nearFar))]),t.code.add(K`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${K.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(K`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${K.int(4)}; r <= ${K.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),e}},Symbol.toStringTag,{value:"Module"}));class wo extends Ur{initializeProgram(e){return new zr(e.rctx,wo.shader.get().build(),Z)}initializePipeline(){return pi({colorWrite:ai})}}function Co(e){return Math.max(10,20*e.camera.computeRenderPixelSizeAtDist(Math.abs(4*e.camera.relativeElevation)))}wo.shader=new Vr(So,(()=>Promise.resolve().then((()=>So))));const yo=(0,tt.a)(),Mo=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new ir,t=e.fragment;return e.include(er),t.include(Ir),e.include(Hi),t.uniforms.add(new Ut("radius",((e,t)=>Co(t)))),t.code.add(K`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),t.code.add(K`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add([new Et("nearFar",((e,t)=>t.camera.nearFar)),new Zt("normalMap",(e=>e.normalTexture)),new Zt("depthMap",(e=>e.depthTexture)),new Et("zScale",((e,t)=>ki(t))),new Ut("projScale",(e=>e.projScale)),new Zt("rnm",(e=>e.noiseTexture)),new Et("rnmScale",((e,t)=>(0,et.s)(yo,t.camera.fullWidth/(0,o.u)(e.noiseTexture).descriptor.width,t.camera.fullHeight/(0,o.u)(e.noiseTexture).descriptor.height))),new Ut("intensity",((e,t)=>2/Co(t)**6)),new Et("screenSize",((e,t)=>(0,et.s)(yo,t.camera.fullWidth,t.camera.fullHeight)))]),t.code.add(K`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${K.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${K.int(16)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),e}},Symbol.toStringTag,{value:"Module"}));class Ro extends Ur{initializeProgram(e){return new zr(e.rctx,Ro.shader.get().build(),Z)}initializePipeline(){return pi({colorWrite:ai})}}Ro.shader=new Vr(Mo,(()=>Promise.resolve().then((()=>Mo))));class Oo extends lt{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,o.k)(this._texture),this._textureNormal=(0,o.k)(this._textureNormal),this._textureEmissive=(0,o.k)(this._textureEmissive),this._textureOcclusion=(0,o.k)(this._textureOcclusion),this._textureMetallicRoughness=(0,o.k)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?x.LOADED:x.LOADING}get textureBindParameters(){return new Po((0,o.i)(this._texture)?this._texture.glTexture:null,(0,o.i)(this._textureNormal)?this._textureNormal.glTexture:null,(0,o.i)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,o.i)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,o.i)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,o.a)(this._texture)||e!==this._texture.id)&&(this._texture=(0,o.k)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,o.a)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,D.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,o.k)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class Po extends Y{constructor(e=null,t=null,r=null,i=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}var No=r(35861),Io=r(45087),Lo=r(60939);const Do=(0,l.d)(),Fo=(0,l.d)(),Bo=(0,l.d)(),Vo=new class{constructor(e=0){this.offset=e,this.sphere=(0,Lo.c)(),this.tmpVertex=(0,l.d)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*o+c[4]*n+c[8]*a+c[12],this.tmpVertex[1]=c[1]*o+c[5]*n+c[9]*a+c[13],this.tmpVertex[2]=c[2]*o+c[6]*n+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,l.d)(),this._mbs=(0,Lo.c)(),this._obb={center:(0,l.d)(),halfSize:(0,Ce.b)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+o*o+n*n);return this._tmpVertex[0]=e+i*a,this._tmpVertex[1]=t+o*a,this._tmpVertex[2]=r+n*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),c=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),l=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),d=Math.sqrt(s*s+c*c+l*l);if(d<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const u=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(r),Math.abs(n)),f=Math.max(Math.abs(i),Math.abs(a)),m=Math.sqrt(u*u+h*h+f*f),p=this._totalOffset/m,g=this._totalOffset/d;return e[0]+=t*(t>0?p:g),e[1]+=r*(r>0?p:g),e[2]+=i*(i>0?p:g),e[3]+=o*(o<0?p:g),e[4]+=n*(n<0?p:g),e[5]+=a*(a<0?p:g),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,l.p)(this._obb.halfSize,e.halfSize,e.quaternion),(0,l.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,l.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,No.c)(Uo,e.quaternion),(0,l.p)(this._obb.halfSize,this._obb.halfSize,Uo),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,l.d)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){for(let t=0;t<3;++t)Do[t]=e[0+t]+this.localOrigin[t],Fo[t]=e[3+t]+this.localOrigin[t],Bo[t]=Do[t];const t=this.applyToVertex(Do[0],Do[1],Do[2]);for(let r=0;r<3;++r)e[r]=t[r],e[r+3]=t[r];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t+0]=Math.min(e[t+0],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let t=0;t<3;++t)Bo[t]=0==(e&1<<t)?Do[t]:Fo[t];r(Bo)}let i=0;for(let e=0;e<3;++e)Do[e]*Fo[e]<0&&(i|=1<<e);if(0!==i&&7!==i)for(let e=0;e<8;++e)if(0==(i&e)){for(let t=0;t<3;++t)i[t]?Bo[t]=0:Bo[t]=0!=(e&1<<t)?Do[t]:Fo[t];r(Bo)}for(let t=0;t<3;++t)e[t+0]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const Uo=(0,Io.c)();function zo(e,t){if(Ct(e),t.hasModelTransformation)return e.vertex.code.add(K`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void e.vertex.code.add(K`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);e.vertex.code.add(K`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(K`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const Go=(0,Ne.f)(1,1,0,1),Ho=(0,Ne.f)(1,0,1,1);function Wo(e,t){e.fragment.uniforms.add(Qt("depthTex",((e,t)=>t.highlightDepthTexture),t.hasWebGL2Context?Kt.None:Kt.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",Go).add("unoccludedHighlightFlag","vec4",Ho),e.fragment.code.add(K`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${function(e,t,r,i=null,o=0){if(e.hasWebGL2Context)return K`texelFetch(${t}, ivec2(${r}), ${K.int(o)})`;let n=K`texture2D(${t}, ${r} * `;return n+=i?K`(${i}))`:K`${t+"InvSize"})`,n}(t,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}var ko=r(75854);function $o(e,t){t.hasVertexColors?(e.attributes.add(G.V.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(K`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(K`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(K`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function jo(e){e.vertex.code.add(K`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(K`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(K`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(K`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(K`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(K`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(K`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const Xo=(0,Ne.c)();function qo(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new Yt("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:o}=e.verticalOffset,n=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return(0,W.s)(Yo,o*a,n,r,i)})))}(r),t.hasScreenSizePerspective&&(e.include(jo),function(e){e.uniforms.add(new Yt("screenSizePerspectiveAlignment",(e=>function(e){return(0,W.s)(Xo,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),kt(e.vertex,t)),r.code.add(K`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?K`vec3 worldNormal = normalize(worldPos + localOrigin);`:K`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?K`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:K`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(K`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Yo=(0,Ne.c)();function Ko(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(G.V.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new gt("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new gt("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new gt("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new gt("vvSizeFactor",(e=>e.vvSizeFactor))),r.uniforms.add(new vt("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new gt("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(K`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(K`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?K`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(K`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",8),t.hasVvInstancing&&r.uniforms.add([new zt("vvColorValues",(e=>e.vvColorValues),8),new Vt("vvColorColors",(e=>e.vvColorColors),8)]),r.code.add(K`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?K`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(K`vec4 vvColor() { return vec4(1.0); }`)}function Zo(e,t){const r=e.fragment;switch(r.code.add(K`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case Qo.None:r.code.add(K`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Qo.View:r.code.add(K`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Qo.WindingOrder:r.code.add(K`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,Re.n)(t.doubleSidedMode);case Qo.COUNT:}}var Qo;function Jo(e){e.vertex.code.add(K`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function en(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(G.V.MODELORIGINHI,"vec3"),e.attributes.add(G.V.MODELORIGINLO,"vec3"),e.attributes.add(G.V.MODEL,"mat3"),e.attributes.add(G.V.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(ft,t),r.uniforms.add(new pt("viewOriginHi",((e,t)=>function(e,t){const r=e.length;for(let i=0;i<r;++i)$[0]=e[i],t[i]=$[0];return t}((0,l.s)(tn,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),tn)))),r.uniforms.add(new pt("viewOriginLo",((e,t)=>function(e,t){const r=e.length;for(let i=0;i<r;++i)$[0]=e[i],$[1]=e[i]-$[0],t[i]=$[1];return t}((0,l.s)(tn,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),tn))))),r.code.add(K`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(K`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?K`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(K`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===xe.Normal&&(function(e){e.uniforms.add(new xt("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}(r),r.code.add(K`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(K`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(Qo||(Qo={})),(0,Ee._)([we()],class extends Se{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}.prototype,"instancedDoublePrecision",void 0);const tn=(0,l.d)();function rn(e){e.vertex.code.add(K`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${K.int(ko.C.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${K.int(ko.C.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${K.int(ko.C.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${K.int(ko.C.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function on(e,t){t.hasSymbolColors?(e.include(rn),e.attributes.add(G.V.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(K`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new go("colorMixMode",(e=>de[e.colorMixMode]))),e.vertex.code.add(K`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function nn(e){e.fragment.code.add(K`
    #define discardOrAdjustAlpha(color) { if (color.a < ${K.float(Fr)}) { discard; } }
  `)}class an extends mt{constructor(e,t){super(e,"float",dt.Draw,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}function sn(e,t){ln(e,t,new Ut("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function cn(e,t){ln(e,t,new an("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function ln(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==C.Mask&&t.alphaDiscardMode!==C.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case C.Blend:return e.include(nn);case C.Opaque:i.code.add(K`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case C.Mask:i.code.add(K`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case C.MaskBlend:e.fragment.code.add(K`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function dn(e,t){const{vertex:r,fragment:i}=e,n=t.hasModelTransformation;n&&r.uniforms.add(new xt("model",(e=>(0,o.i)(e.modelTransformation)?e.modelTransformation:c.I)));const a=t.hasColorTexture&&t.alphaDiscardMode!==C.Opaque;switch(t.output){case xe.Depth:case xe.Shadow:case xe.ShadowHighlight:case xe.ShadowExludeHighlight:case xe.ObjectAndLayerIdColor:$t(r,t),e.include(zo,t),e.include(Xi,t),e.include(Ko,t),e.include(Ht,t),e.include(Mt,t),e.include(Bt,t),wt(e),e.varyings.add("depth","float"),a&&i.uniforms.add(new Zt("tex",(e=>e.texture))),r.code.add(K`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${n?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(sn,t),i.code.add(K`
          void main(void) {
            discardBySlice(vpos);
            ${a?K`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?K`colorUV`:K`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===xe.ObjectAndLayerIdColor?K`outputObjectAndLayerIdColor();`:K`outputDepth(depth);`}
          }
        `);break;case xe.Normal:$t(r,t),e.include(zo,t),e.include(uo,t),e.include(fo,t),e.include(Xi,t),e.include(Ko,t),a&&i.uniforms.add(new Zt("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),r.code.add(K`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===ho.Attribute?K`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${n?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(Mt,t),e.include(sn,t),i.code.add(K`
          void main() {
            discardBySlice(vpos);
            ${a?K`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?K`colorUV`:K`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===ho.ScreenDerivative?K`
                vec3 normal = screenDerivativeNormal(vPositionView);`:K`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case xe.Highlight:$t(r,t),e.include(zo,t),e.include(Xi,t),e.include(Ko,t),a&&i.uniforms.add(new Zt("tex",(e=>e.texture))),r.code.add(K`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${n?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(Mt,t),e.include(sn,t),e.include(Wo,t),i.code.add(K`
          void main() {
            discardBySlice(vpos);
            ${a?K`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?K`colorUV`:K`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function un(e,t){const r=e.fragment;if(t.hasVertexTangents?(e.attributes.add(G.V.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===Qo.WindingOrder?r.code.add(K`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(K`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(K`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==ji.None){e.include(Qi,t);const i=t.supportsTextureAtlas?t.hasWebGL2Context?Kt.None:Kt.Size:Kt.None;r.uniforms.add(t.pbrTextureBindType===dt.Pass?Qt("normalTexture",(e=>e.textureNormal),i):to("normalTexture",(e=>e.textureNormal),i)),r.code.add(K`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?K`vtc.size = ${qt(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function hn(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(Qt("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?Kt.None:Kt.InvSize)),r.constants.add("blurSizePixelsInverse","float",.5),r.code.add(K`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${qt(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(K`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function fn(e){e.constants.add("ambientBoostFactor","float",.4)}function mn(e){e.uniforms.add(new Ut("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function pn(e,t){const r=e.fragment;switch(e.include(hn,t),t.pbrMode!==io.Disabled&&e.include(Eo,t),e.include(no,t),e.include(Dr),r.code.add(K`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===io.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),fn(r),mn(r),qi(r),r.code.add(K`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?K`normalize(vPosWorld)`:K`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Yi(r),r.code.add(K`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case io.Disabled:case io.WaterOnIntegratedMesh:case io.Water:e.include(Ki,t),r.code.add(K`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case io.Normal:case io.Schematic:r.code.add(K`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(K`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new co("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(K`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new Ut("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new Ut("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(K`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(K`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===io.Schematic?K`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:K`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:(0,Re.n)(t.pbrMode);case io.COUNT:}}function gn(e){e.vertex.uniforms.add(new vt("colorTextureTransformMatrix",(e=>(0,o.i)(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:m()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(K`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function _n(e){e.vertex.uniforms.add(new vt("normalTextureTransformMatrix",(e=>(0,o.i)(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:m()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(K`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function vn(e){e.vertex.uniforms.add(new vt("emissiveTextureTransformMatrix",(e=>(0,o.i)(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:m()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(K`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function xn(e){e.vertex.uniforms.add(new vt("occlusionTextureTransformMatrix",(e=>(0,o.i)(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:m()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(K`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Tn(e){e.vertex.uniforms.add(new vt("metallicRoughnessTextureTransformMatrix",(e=>(0,o.i)(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:m()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(K`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function bn(e){e.include(Br),e.code.add(K`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${K.int(ko.C.Multiply)}) {
        return allMixed;
      }
      if (mode == ${K.int(ko.C.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${K.int(ko.C.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${K.int(ko.C.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${K.int(ko.C.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}const An=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new ir,{vertex:r,fragment:i,varyings:n}=t;return $t(r,e),t.include(ht),n.add("vpos","vec3"),t.include(Ko,e),t.include(en,e),t.include(qo,e),e.hasColorTextureTransform&&t.include(gn),e.output!==xe.Color&&e.output!==xe.Alpha||(e.hasNormalTextureTransform&&t.include(_n),e.hasEmissionTextureTransform&&t.include(vn),e.hasOcclusionTextureTransform&&t.include(xn),e.hasMetallicRoughnessTextureTransform&&t.include(Tn),kt(r,e),t.include(uo,e),t.include(zo,e),e.normalType===ho.Attribute&&e.offsetBackfaces&&t.include(Jo),t.include(un,e),t.include(fo,e),e.instancedColor&&t.attributes.add(G.V.INSTANCECOLOR,"vec4"),n.add("localvpos","vec3"),t.include(Xi,e),t.include(yt,e),t.include(on,e),t.include($o,e),r.uniforms.add(new Yt("externalColor",(e=>e.externalColor))),n.add("vcolorExt","vec4"),e.hasMultipassTerrain&&n.add("depth","float"),e.hasModelTransformation&&r.uniforms.add(new xt("model",(e=>(0,o.i)(e.modelTransformation)?e.modelTransformation:c.I))),r.code.add(K`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${K.float(Fr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===ho.Attribute?K`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===ho.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?K`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?K`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?K`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?K`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?K`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===xe.Alpha&&(t.include(Mt,e),t.include(sn,e),t.include(Lr,e),i.uniforms.add([new Ut("opacity",(e=>e.opacity)),new Ut("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&i.uniforms.add(new Zt("tex",(e=>e.texture))),i.include(bn),i.code.add(K`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?K`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?K`colorUV`:K`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:K`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?K`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:K`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===xe.Color&&(t.include(Mt,e),t.include(pn,e),t.include(hn,e),t.include(sn,e),t.include(e.instancedDoublePrecision?xo:To,e),t.include(Lr,e),kt(i,e),i.uniforms.add([r.uniforms.get("localOrigin"),new gt("ambient",(e=>e.ambient)),new gt("diffuse",(e=>e.diffuse)),new Ut("opacity",(e=>e.opacity)),new Ut("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&i.uniforms.add(new Zt("tex",(e=>e.texture))),t.include(oo,e),t.include(Eo,e),i.include(bn),t.include(Zo,e),fn(i),mn(i),Yi(i),i.code.add(K`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?K`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?K`colorUV`:K`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:K`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===ho.ScreenDerivative?K`
                vec3 normal = screenDerivativeNormal(localvpos);`:K`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===io.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?K`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:K`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?K`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:K`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?K`normalize(posWorld);`:K`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?K`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===io.Normal||e.pbrMode===io.Schematic?K`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?K`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:K`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Qr.Color?K`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(dn,e),t}},Symbol.toStringTag,{value:"Module"}));class En extends mo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,l.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=g.Back,this.emissiveFactor=(0,l.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,l.f)(.2,.2,.2),this.diffuse=(0,l.f)(.8,.8,.8),this.externalColor=(0,Ne.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,l.d)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,a.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=_.Less,this.textureAlphaMode=C.Blend,this.textureAlphaCutoff=.1,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=fe.Occlude}}class Sn extends po{constructor(){super(...arguments),this.origin=(0,l.d)(),this.slicePlaneLocalOrigin=this.origin}}class wn extends Ur{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Fe.C.WEBGL2,t.spherical=e.viewingMode===k.V.Global,t.doublePrecisionRequiresObfuscation=function(e){return!!(0,ye.h)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?ji.Default:ji.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,wn.shader)}_initializeProgram(e,t){return new zr(e.rctx,t.get().build(this.configuration),Z)}_convertDepthTestFunction(e){return e===_.Lequal?Le.d.LEQUAL:Le.d.LESS}_makePipeline(e,t){const r=this.configuration,i=e===Qr.NONE,o=e===Qr.FrontFace;return pi({blending:r.output!==xe.Color&&r.output!==xe.Alpha||!r.transparent?null:i?Di:Vi(e),culling:Cn(r)&&oi(r.cullFace),depthTest:{func:Gi(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:i||o?r.writeDepth&&ni:null,colorWrite:ai,stencilWrite:r.hasOccludees?Gr:null,stencilTest:r.hasOccludees?t?Wr:Hr:null,polygonOffset:i||o?null:zi(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Cn(e){return e.cullFace!==g.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}wn.shader=new Vr(An,(()=>Promise.resolve().then((()=>An))));class yn extends ut{constructor(){super(...arguments),this.output=xe.Color,this.alphaDiscardMode=C.Opaque,this.doubleSidedMode=Qo.None,this.pbrMode=io.Disabled,this.cullFace=g.None,this.transparencyPassType=Qr.NONE,this.normalType=ho.Attribute,this.textureCoordinateType=ji.None,this.customDepthTest=_.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Ee._)([we({count:xe.COUNT})],yn.prototype,"output",void 0),(0,Ee._)([we({count:C.COUNT})],yn.prototype,"alphaDiscardMode",void 0),(0,Ee._)([we({count:Qo.COUNT})],yn.prototype,"doubleSidedMode",void 0),(0,Ee._)([we({count:io.COUNT})],yn.prototype,"pbrMode",void 0),(0,Ee._)([we({count:g.COUNT})],yn.prototype,"cullFace",void 0),(0,Ee._)([we({count:Qr.COUNT})],yn.prototype,"transparencyPassType",void 0),(0,Ee._)([we({count:ho.COUNT})],yn.prototype,"normalType",void 0),(0,Ee._)([we({count:ji.COUNT})],yn.prototype,"textureCoordinateType",void 0),(0,Ee._)([we({count:_.COUNT})],yn.prototype,"customDepthTest",void 0),(0,Ee._)([we()],yn.prototype,"spherical",void 0),(0,Ee._)([we()],yn.prototype,"hasVertexColors",void 0),(0,Ee._)([we()],yn.prototype,"hasSymbolColors",void 0),(0,Ee._)([we()],yn.prototype,"hasVerticalOffset",void 0),(0,Ee._)([we()],yn.prototype,"hasSlicePlane",void 0),(0,Ee._)([we()],yn.prototype,"hasSliceHighlight",void 0),(0,Ee._)([we()],yn.prototype,"hasColorTexture",void 0),(0,Ee._)([we()],yn.prototype,"hasMetallicRoughnessTexture",void 0),(0,Ee._)([we()],yn.prototype,"hasEmissionTexture",void 0),(0,Ee._)([we()],yn.prototype,"hasOcclusionTexture",void 0),(0,Ee._)([we()],yn.prototype,"hasNormalTexture",void 0),(0,Ee._)([we()],yn.prototype,"hasScreenSizePerspective",void 0),(0,Ee._)([we()],yn.prototype,"hasVertexTangents",void 0),(0,Ee._)([we()],yn.prototype,"hasOccludees",void 0),(0,Ee._)([we()],yn.prototype,"hasMultipassTerrain",void 0),(0,Ee._)([we()],yn.prototype,"hasModelTransformation",void 0),(0,Ee._)([we()],yn.prototype,"offsetBackfaces",void 0),(0,Ee._)([we()],yn.prototype,"vvSize",void 0),(0,Ee._)([we()],yn.prototype,"vvColor",void 0),(0,Ee._)([we()],yn.prototype,"receiveShadows",void 0),(0,Ee._)([we()],yn.prototype,"receiveAmbientOcclusion",void 0),(0,Ee._)([we()],yn.prototype,"textureAlphaPremultiplied",void 0),(0,Ee._)([we()],yn.prototype,"instanced",void 0),(0,Ee._)([we()],yn.prototype,"instancedColor",void 0),(0,Ee._)([we()],yn.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Ee._)([we()],yn.prototype,"instancedDoublePrecision",void 0),(0,Ee._)([we()],yn.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Ee._)([we()],yn.prototype,"writeDepth",void 0),(0,Ee._)([we()],yn.prototype,"transparent",void 0),(0,Ee._)([we()],yn.prototype,"enableOffset",void 0),(0,Ee._)([we()],yn.prototype,"cullAboveGround",void 0),(0,Ee._)([we()],yn.prototype,"snowCover",void 0),(0,Ee._)([we()],yn.prototype,"hasColorTextureTransform",void 0),(0,Ee._)([we()],yn.prototype,"hasEmissionTextureTransform",void 0),(0,Ee._)([we()],yn.prototype,"hasNormalTextureTransform",void 0),(0,Ee._)([we()],yn.prototype,"hasOcclusionTextureTransform",void 0),(0,Ee._)([we()],yn.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Ee._)([we({constValue:!0})],yn.prototype,"hasVvInstancing",void 0),(0,Ee._)([we({constValue:!1})],yn.prototype,"useCustomDTRExponentForWater",void 0),(0,Ee._)([we({constValue:!1})],yn.prototype,"supportsTextureAtlas",void 0),(0,Ee._)([we({constValue:!0})],yn.prototype,"useFillLights",void 0);const Mn=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new ir,{vertex:r,fragment:i,varyings:o}=t;return $t(r,e),t.include(ht),o.add("vpos","vec3"),t.include(Ko,e),t.include(en,e),t.include(qo,e),e.output!==xe.Color&&e.output!==xe.Alpha||(kt(t.vertex,e),t.include(uo,e),t.include(zo,e),e.offsetBackfaces&&t.include(Jo),e.instancedColor&&t.attributes.add(G.V.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),e.hasMultipassTerrain&&o.add("depth","float"),t.include(Xi,e),t.include(yt,e),t.include(on,e),t.include($o,e),r.uniforms.add(new Yt("externalColor",(e=>e.externalColor))),o.add("vcolorExt","vec4"),r.code.add(K`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${K.float(Fr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?K`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===xe.Alpha&&(t.include(Mt,e),t.include(sn,e),t.include(Lr,e),i.uniforms.add([new Ut("opacity",(e=>e.opacity)),new Ut("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&i.uniforms.add(new Zt("tex",(e=>e.texture))),i.include(bn),i.code.add(K`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?K`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?K`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?K`colorUV`:K`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:K`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?K`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:K`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===xe.Color&&(t.include(Mt,e),t.include(pn,e),t.include(hn,e),t.include(sn,e),t.include(e.instancedDoublePrecision?xo:To,e),t.include(Lr,e),kt(t.fragment,e),qi(i),fn(i),mn(i),i.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new gt("ambient",(e=>e.ambient)),new gt("diffuse",(e=>e.diffuse)),new Ut("opacity",(e=>e.opacity)),new Ut("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&i.uniforms.add(new Zt("tex",(e=>e.texture))),t.include(oo,e),t.include(Eo,e),i.include(bn),t.extensions.add("GL_OES_standard_derivatives"),Yi(i),i.code.add(K`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?K`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?K`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?K`colorUV`:K`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:K`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===io.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?K`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:K`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?K`albedo = mix(albedo, vec3(1), 0.9);`:K``}
        ${K`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===io.Normal||e.pbrMode===io.Schematic?e.spherical?K`vec3 normalGround = normalize(vpos + localOrigin);`:K`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:K``}
        ${e.pbrMode===io.Normal||e.pbrMode===io.Schematic?K`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?K`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:K`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Qr.Color?K`gl_FragColor = premultiplyAlpha(gl_FragColor);`:K``}
      }
    `)),t.include(dn,e),t}},Symbol.toStringTag,{value:"Module"}));class Rn extends wn{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ho.Attribute,t.doubleSidedMode=Qo.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Rn.shader)}}Rn.shader=new Vr(Mn,(()=>Promise.resolve().then((()=>Mn))));class On extends he{constructor(e){super(e,Nn),this.supportsEdges=!0,this._configuration=new yn,this._vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,ei.n)().vec3f(G.V.POSITION).vec3f(G.V.NORMAL);return e.hasVertexTangents&&r.vec4f(G.V.TANGENT),t&&r.vec2f(G.V.UV0),e.hasVertexColors&&r.vec4u8(G.V.COLOR),e.hasSymbolColors&&r.vec4u8(G.V.SYMBOLCOLOR),(0,ye.h)("enable-feature:objectAndLayerId-rendering")&&r.vec4u8(G.V.OBJECTANDLAYERIDCOLOR),r}(this.parameters),this._instanceBufferLayout=e.instanced?Ln(this.parameters):null}isVisibleForOutput(e){return e!==xe.Shadow&&e!==xe.ShadowExludeHighlight&&e!==xe.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:r,hasSymbolColors:i,vvColorEnabled:n}=e,a=(0,o.i)(t)&&t.includes("color"),s="replace"===e.colorMixMode,c=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(a||n||i)?!!s||c:r?s?l:c:a||n||i?!!s||c:s?l:c}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,o.i)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,o.i)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType="screenDerivative"===this.parameters.normals?ho.ScreenDerivative:ho.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,o.i)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?g.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,o.i)(this.parameters.modelTransformation),e!==xe.Color&&e!==xe.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Qo.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Qo.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Qo.WindingOrder:Qo.None,this._configuration.instancedColor=(0,o.i)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?io.Schematic:io.Normal:io.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return(0,o.i)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,a,s){if((0,o.i)(this.parameters.verticalOffset)){const e=i.camera;(0,l.s)(zn,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case k.V.Global:t=(0,l.n)(Vn,zn);break;case k.V.Local:t=(0,l.c)(Vn,Bn)}let s=0;const c=(0,l.b)(Gn,zn,e.eye),d=(0,l.l)(c),u=(0,l.g)(c,c,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,l.m)(t,u)),s+=function(e,t,r,i,n){let a=(r.screenLength||0)*e.pixelRatio;(0,o.i)(n)&&(a=function(e,t,r,i){return function(e,t){return Math.max((0,W.h)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return Q.scale=Math.min(i.divisor/(t-i.offset),1),Q.factor=function(e){return Math.abs(e*e*e)}(e),Q.minPixelSize=i.minPixelSize,Q.paddingPixels=o,Q}(t,r,i))}(a,i,t,n));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,W.c)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,d,this.parameters.verticalOffset,h,this.parameters.screenSizePerspective),(0,l.g)(t,t,s),(0,l.t)(Un,t,i.transform.inverseRotation),n=(0,l.b)(Dn,n,Un),a=(0,l.b)(Fn,a,Un)}ee(e,t,i,n,a,function(e){return(0,o.i)(e)?(Vo.offset=e,Vo):null}(i.verticalOffset),s)}requiresSlot(e,t){return!(t!==xe.Color&&t!==xe.Alpha&&t!==xe.Depth&&t!==xe.Normal&&t!==xe.Shadow&&t!==xe.ShadowHighlight&&t!==xe.ShadowExludeHighlight&&t!==xe.Highlight&&t!==xe.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?Te.TRANSPARENT_MATERIAL:Te.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Te.OPAQUE_MATERIAL)&&e!==Te.DRAPED_MATERIAL&&t!==xe.ObjectAndLayerIdColor)}createGLMaterial(e){return new Pn(e)}createBufferWriter(){return new In(this._vertexBufferLayout,this._instanceBufferLayout)}}class Pn extends Oo{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Rn:wn,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==xe.Color&&this._output!==xe.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}const Nn=new class extends En{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};class In{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(G.V.POSITION).length}write(e,t,r,i,n){!function(e,t,r,i,n,a){for(const s of t.fieldNames){const t=e.vertexAttributes.get(s),c=e.indices.get(s);if(t&&c)switch(s){case G.V.POSITION:{(0,U.a)(3===t.size);const e=n.getField(s,u.a);e&&jr(c,t.data,r,e,a);break}case G.V.NORMAL:{(0,U.a)(3===t.size);const e=n.getField(s,u.a);e&&Xr(c,t.data,i,e,a);break}case G.V.UV0:{(0,U.a)(2===t.size);const e=n.getField(s,u.d);e&&kr(c,t.data,e,a);break}case G.V.COLOR:{(0,U.a)(3===t.size||4===t.size);const e=n.getField(s,u.c);e&&Yr(c,t.data,t.size,e,a);break}case G.V.SYMBOLCOLOR:{(0,U.a)(3===t.size||4===t.size);const e=n.getField(s,u.c);e&&Yr(c,t.data,t.size,e,a);break}case G.V.TANGENT:{(0,U.a)(4===t.size);const e=n.getField(s,u.b);e&&qr(c,t.data,i,e,a);break}}else if(s===G.V.OBJECTANDLAYERIDCOLOR&&(0,o.i)(e.objectAndLayerIdColor)&&4===e.objectAndLayerIdColor.length){const t=e.indices.get(G.V.POSITION);if(t){const r=t.length,i=n.getField(s,u.c);Kr(e.objectAndLayerIdColor,i,r,a)}}}}(r,this.vertexBufferLayout,e,t,i,n)}}function Ln(e){let t=(0,ei.n)();return t=e.instancedDoublePrecision?t.vec3f(G.V.MODELORIGINHI).vec3f(G.V.MODELORIGINLO).mat3f(G.V.MODEL).mat3f(G.V.MODELNORMAL):t.mat4f(G.V.MODEL).mat4f(G.V.MODELNORMAL),(0,o.i)(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(G.V.INSTANCECOLOR)),(0,o.i)(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(G.V.INSTANCEFEATUREATTRIBUTE)),(0,o.i)(e.instanced)&&e.instanced.includes("objectAndLayerIdColor")&&(t=t.vec4u8(G.V.OBJECTANDLAYERIDCOLOR_INSTANCED)),t}const Dn=(0,l.d)(),Fn=(0,l.d)(),Bn=(0,l.f)(0,0,1),Vn=(0,l.d)(),Un=(0,l.d)(),zn=(0,l.d)(),Gn=(0,l.d)();function Hn(e){if((0,o.a)(e))return null;const t=(0,o.i)(e.offset)?e.offset:R.Z,r=(0,o.i)(e.rotation)?e.rotation:0,i=(0,o.i)(e.scale)?e.scale:R.O,a=p(1,0,0,0,1,0,t[0],t[1],1),s=p(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),c=p(i[0],0,0,0,i[1],0,0,0,1),l=m();return(0,n.m)(l,s,c),(0,n.m)(l,a,l),l}class Wn{constructor(e,t,r,i,o){this.name=e,this.stageResources=t,this.lodThreshold=r,this.pivotOffset=i,this.numberOfVertices=o}}const kn=L.L.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function $n(e,t){const r=await async function(e,t){const r=(0,o.i)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,P.r)(t.request(e,"json",r));return!0===i.ok?i.value:((0,D.r9)(i.error),void jn(i.error.details.url))}(e,r,t);const i=await(0,P.r)((0,O.default)(e,(0,o.u)(t)));return!0===i.ok?i.value.data:((0,D.r9)(i.error),void jn(i.error))}(e,t),i=await async function(e,t){const r=[];for(const i in e){const n=e[i],a=n.images[0].data;if(!a){kn.warn("Externally referenced texture data is not yet supported");continue}const s=n.encoding+";base64,"+a,c="/textureDefinitions/"+i,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:Le.b.REPEAT,t:Le.b.REPEAT},preMultiplyAlpha:Yn(l)!==C.Opaque},u=(0,o.i)(t)&&t.disableTextures?Promise.resolve(null):B(s,t);r.push(u.then((e=>({refId:c,image:e,params:d,alphaChannelUsage:l}))))}const i=await Promise.all(r),n={};for(const e of i)n[e.refId]=e;return n}(r.textureDefinitions,t);let n=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:n+(0,N.a)(r)}}function jn(e){throw new I.Z("",`Request for object resource failed: ${e}`)}function Xn(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(kn.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(kn.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(kn.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(kn.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else kn.warn("Indexed geometries must specify faces"),i=!1;break}default:kn.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(kn.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(kn.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function qn(e){const t=(0,d.i)();return e.forEach((e=>{const r=e.boundingInfo;(0,o.i)(r)&&((0,d.e)(t,r.getBBMin()),(0,d.e)(t,r.getBBMax()))})),t}function Yn(e){switch(e){case"mask":return C.Mask;case"maskAndTransparency":return C.MaskBlend;case"none":return C.Opaque;default:return C.Blend}}function Kn(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Zn=new F.V(1,2,"wosr");async function Qn(e,t){const r=Jn((0,i.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):$n(r.url,t)),{engineResources:i,referenceBoundingBox:n}=function(e,t){const r=[],i=[],n=[],a=[],s=e.resource,c=F.V.parse(s.version||"1.0","wosr");Zn.validate(c);const d=s.model.name,u=s.model.geometries,h=s.materialDefinitions,f=e.textures;let m=0;const p=new Map;for(let e=0;e<u.length;e++){const s=u[e];if(!Xn(s))continue;const c=Kn(s),d=s.params.vertexAttributes,_=[];for(const e in d){const t=d[e],r=t.values;_.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const v=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)v.push([t,e[t].values])}const x=f&&f[c.texture];if(x&&!p.has(c.texture)){const{image:e,params:t}=x,r=new Pr(e,t);a.push(r),p.set(c.texture,r)}const T=p.get(c.texture),b=T?T.id:void 0;let A=n[c.material]?n[c.material][c.texture]:null;if(!A){const e=h[c.material.substring(c.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=x?Yn(x.alphaChannelUsage):void 0,s={ambient:(0,l.B)(e.diffuse),diffuse:(0,l.B)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:g.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,o.i)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),A=new On(s),n[c.material]||(n[c.material]={}),n[c.material][c.texture]=A}i.push(A);const E=new ct(_,v);m+=v.position?v.position.length:0,r.push(E)}return{engineResources:[{name:d,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:qn(r)}}(e,t);return{lods:i,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,f.l)(new f.D(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,o.j)(n.model.meta,"ESRI_proxyEllipsoid"),d=n.meta.isEsriSymbolResource&&(0,o.i)(a)&&n.meta.uri.includes("/RealisticTrees/");d&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const n of i.parts){const i=n.attributes.normal;if((0,o.a)(i))return;const a=n.attributes.position,d=a.count,h=(0,l.d)(),m=(0,l.d)(),p=(0,l.d)(),g=(0,f.c)(u.c,d),_=(0,f.c)(u.a,d),v=(0,s.c)((0,c.c)(),n.transform);for(let o=0;o<d;o++){a.getVec(o,m),i.getVec(o,h),(0,l.e)(m,m,n.transform),(0,l.b)(p,m,t.center),(0,l.A)(p,p,t.radius);const s=p[2],c=(0,l.l)(p),d=Math.min(.45+.55*c*c,1);(0,l.A)(p,p,t.radius),null!==v&&(0,l.e)(p,p,v),(0,l.n)(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.z)(p,p,h,s>-1?.2:Math.min(-4*s-3.8,1)),_.setVec(o,p),g.set(o,0,255*d),g.set(o,1,255*d),g.set(o,2,255*d),g.set(o,3,255)}n.attributes.normal=_,n.attributes.color=g}}}(n,a));const h=n.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:d,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},m={...t.materialParamsMixin,treeRendering:d},{engineResources:p,referenceBoundingBox:_}=ea(n,h,m,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:p,referenceBoundingBox:_,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}function Jn(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ea(e,t,r,i){const a=e.model,s=new Array,c=new Map,l=new Map,m=a.lods.length,p=(0,d.i)();return a.lods.forEach(((e,v)=>{const x=!0===i.skipHighLods&&(m>1&&0===v||m>3&&1===v)||!1===i.skipHighLods&&null!=i.singleLodIndex&&v!==i.singleLodIndex;if(x&&0!==v)return;const T=new Array;let b=0;if(e.parts.forEach((e=>{const{geometry:t,vertexCount:r}=function(e){const t=function(e,t){switch(t){case Le.e.TRIANGLES:return(0,f.e)(e);case Le.e.TRIANGLE_STRIP:return(0,f.d)(e);case Le.e.TRIANGLE_FAN:return(0,f.b)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),r=e.attributes.position.count,i=(0,f.c)(u.a,r);(0,h.t)(i,e.attributes.position,e.transform);const a=[[G.V.POSITION,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]],s=[[G.V.POSITION,t]];if((0,o.i)(e.attributes.normal)){const i=(0,f.c)(u.a,r);(0,n.n)(ta,e.transform),(0,h.a)(i,e.attributes.normal,ta),a.push([G.V.NORMAL,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([G.V.NORMAL,t])}if((0,o.i)(e.attributes.tangent)){const i=(0,f.c)(u.b,r);(0,n.n)(ta,e.transform),(0,f.t)(i,e.attributes.tangent,ta),a.push([G.V.TANGENT,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([G.V.TANGENT,t])}if((0,o.i)(e.attributes.texCoord0)){const i=(0,f.c)(u.d,r);(0,f.n)(i,e.attributes.texCoord0),a.push([G.V.UV0,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([G.V.UV0,t])}if((0,o.i)(e.attributes.color)){const i=(0,f.c)(u.c,r);if(4===e.attributes.color.elementCount)e.attributes.color instanceof u.b?(0,f.s)(i,e.attributes.color,255):e.attributes.color instanceof u.c?(0,f.a)(i,e.attributes.color):e.attributes.color instanceof u.s&&(0,f.s)(i,e.attributes.color,1/256);else{(0,f.f)(i,255,255,255,255);const t=new u.u(i.buffer,0,4);e.attributes.color instanceof u.a?(0,h.s)(t,e.attributes.color,255):e.attributes.color instanceof u.u?(0,h.c)(t,e.attributes.color):e.attributes.color instanceof u.v&&(0,h.s)(t,e.attributes.color,1/256)}a.push([G.V.COLOR,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([G.V.COLOR,t])}return{geometry:new ct(a,s),vertexCount:r}}(e);T.push(t),b+=r;const i=t.boundingInfo;(0,o.i)(i)&&0===v&&((0,d.e)(p,i.getBBMin()),(0,d.e)(p,i.getBBMax()))})),x)return;const A=new Wn(e.name,{textures:new Array,materials:new Array,geometries:T},e.lodThreshold,[0,0,0],b);s.push(A),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=a.materials.get(e.material),s=(0,o.i)(e.attributes.texCoord0),d=(0,o.i)(e.attributes.normal);if((0,o.a)(n))return;const u=function(e){switch(e){case"BLEND":return C.Blend;case"MASK":return C.Mask;case"OPAQUE":case null:case void 0:return C.Opaque}}(n.alphaMode);if(!c.has(i)){if(s){const e=(e,t=!1)=>{if((0,o.i)(e)&&!l.has(e)){const r=a.textures.get(e);(0,o.i)(r)&&l.set(e,new Pr(r.data,t?{...r.parameters,preMultiplyAlpha:t}:r.parameters))}};e(n.textureColor,u!==C.Opaque),e(n.textureNormal),e(n.textureOcclusion),e(n.textureEmissive),e(n.textureMetallicRoughness)}const h=n.color[0]**(1/f.C),m=n.color[1]**(1/f.C),p=n.color[2]**(1/f.C),v=n.emissiveFactor[0]**(1/f.C),x=n.emissiveFactor[1]**(1/f.C),T=n.emissiveFactor[2]**(1/f.C),b=(0,o.i)(n.textureColor)&&s?l.get(n.textureColor):null;c.set(i,new On({...t,transparent:u===C.Blend,customDepthTest:_.Lequal,textureAlphaMode:u,textureAlphaCutoff:n.alphaCutoff,diffuse:[h,m,p],ambient:[h,m,p],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?g.None:g.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:d?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,o.i)(b)?b.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:(0,o.i)(n.textureNormal)&&s?l.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:(0,o.i)(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:(0,o.i)(n.textureOcclusion)&&s?l.get(n.textureOcclusion).id:void 0,emissiveTextureId:(0,o.i)(n.textureEmissive)&&s?l.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.i)(n.textureMetallicRoughness)&&s?l.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[v,x,T],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:Hn(n.colorTextureTransform),normalTextureTransformMatrix:Hn(n.normalTextureTransform),occlusionTextureTransformMatrix:Hn(n.occlusionTextureTransform),emissiveTextureTransformMatrix:Hn(n.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Hn(n.metallicRoughnessTextureTransform),...r}))}if(A.stageResources.materials.push(c.get(i)),s){const e=e=>{(0,o.i)(e)&&A.stageResources.textures.push(l.get(e))};e(n.textureColor),e(n.textureNormal),e(n.textureOcclusion),e(n.textureEmissive),e(n.textureMetallicRoughness)}}))})),{engineResources:s,referenceBoundingBox:p}}const ta=(0,a.c)(),ra=Object.freeze(Object.defineProperty({__proto__:null,fetch:Qn,parseUrl:Jn,gltfToEngineResources:ea},Symbol.toStringTag,{value:"Module"}))},35861:(e,t,r)=>{r.d(t,{c:()=>c,e:()=>d,f:()=>l,g:()=>a,m:()=>s,s:()=>n});var i=r(72836),o=r(29794);function n(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function a(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>(0,o.g)()?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function s(e,t,r){const i=t[0],o=t[1],n=t[2],a=t[3],s=r[0],c=r[1],l=r[2],d=r[3];return e[0]=i*d+a*s+o*l-n*c,e[1]=o*d+a*c+n*s-i*l,e[2]=n*d+a*l+i*c-o*s,e[3]=a*d-i*s-o*c-n*l,e}function c(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function l(e,t,r,i){const o=.5*Math.PI/180;t*=o,r*=o,i*=o;const n=Math.sin(t),a=Math.cos(t),s=Math.sin(r),c=Math.cos(r),l=Math.sin(i),d=Math.cos(i);return e[0]=n*c*d-a*s*l,e[1]=a*s*d+n*c*l,e[2]=a*c*l-n*s*d,e[3]=a*c*d+n*s*l,e}const d=r(82426).e;(0,i.d)(),(0,i.f)(1,0,0),(0,i.f)(0,1,0)},45087:(e,t,r)=>{function i(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,{I:()=>a,a:()=>n,b:()=>o,c:()=>i});const a=[0,0,0,1]},2420:(e,t,r)=>{r.d(t,{O:()=>u,c:()=>_,d:()=>g,e:()=>T,s:()=>p,w:()=>x}),r(76506);var i=r(30773),o=r(72836),n=r(79764),a=r(16912),s=r(57532),c=r(45087),l=r(32191),d=r(68681);class u{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.n)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*h);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,h));e++)this._items.push(this._allocator())}}const h=1024;class f{constructor(e,t,r){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this._itemByteSize)}get(){0===this._itemsPtr&&(0,i.n)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=m){return new f(16,l.c,e)}static createVec3f64(e=m){return new f(24,o.q,e)}static createVec4f64(e=m){return new f(32,d.b,e)}static createMat3f64(e=m){return new f(72,a.a,e)}static createMat4f64(e=m){return new f(128,s.a,e)}static createQuatf64(e=m){return new f(32,c.a,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const m=4*n.B.KILOBYTES,p=(f.createVec2f64(),f.createVec3f64());f.createVec4f64(),f.createMat3f64();const g=f.createMat4f64();function _(e){return e?v((0,o.k)(e.origin),(0,o.k)(e.direction)):v((0,o.d)(),(0,o.d)())}function v(e,t){return{origin:e,direction:t}}function x(e,t){const r=b.get();return r.origin=e,r.direction=t,r}function T(e,t,r){const i=(0,o.m)(e.direction,(0,o.b)(r,t,e.origin));return(0,o.a)(r,e.origin,(0,o.g)(r,e.direction,i)),r}f.createQuatf64();const b=new u((()=>_()))},60939:(e,t,r)=>{r.d(t,{b:()=>h,c:()=>u,d:()=>m,g:()=>f,i:()=>_,m:()=>S}),r(71552);var i=r(92143),o=r(82426),n=r(71252),a=r(65775),s=r(72836),c=r(68681),l=r(40961),d=r(2420);function u(){return(0,c.c)()}function h(e,t=u()){return(0,o.b)(t,e)}function f(e){return e[3]}function m(e){return e}function p(e,t,r){if((0,n.a)(t))return!1;const{origin:i,direction:o}=t,a=g;a[0]=i[0]-e[0],a[1]=i[1]-e[1],a[2]=i[2]-e[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===s)return!1;const c=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),l=c*c-4*s*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-e[3]*e[3]);if(l<0)return!1;const d=Math.sqrt(l);let u=(-c-d)/(2*s);const h=(-c+d)/(2*s);return(u<0||h<u&&h>0)&&(u=h),!(u<0||(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),0))}const g=(0,s.d)();function _(e,t){return p(e,t,null)}function v(e,t,r){const i=d.s.get(),o=d.d.get();(0,s.h)(i,t.origin,t.direction);const n=f(e);(0,s.h)(r,i,t.origin),(0,s.g)(r,r,1/(0,s.l)(r)*n);const c=T(e,t.origin),u=(0,l.a)(t.origin,r);return(0,a.a)(o,u+c,i),(0,s.e)(r,r,o),r}function x(e,t,r){const i=(0,s.b)(d.s.get(),t,e),o=(0,s.g)(d.s.get(),i,e[3]/(0,s.l)(i));return(0,s.a)(r,o,e)}function T(e,t){const r=(0,s.b)(d.s.get(),t,e),i=(0,s.l)(r),n=f(e),a=n+Math.abs(n-i);return(0,o.g)(n/a)}const b=(0,s.d)();function A(e,t,r,i){const n=(0,s.b)(b,t,e);switch(r){case l.A.X:{const e=(0,o.o)(n,b)[2];return(0,s.s)(i,-Math.sin(e),Math.cos(e),0)}case l.A.Y:{const e=(0,o.o)(n,b),t=e[1],r=e[2],a=Math.sin(t);return(0,s.s)(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case l.A.Z:return(0,s.n)(i,n);default:return}}function E(e,t){const r=(0,s.b)(w,t,e);return(0,s.l)(r)-e[3]}function S(e,t){const r=(0,s.G)(e,t),i=f(e);return r<=i*i}const w=(0,s.d)(),C=u();Object.freeze(Object.defineProperty({__proto__:null,create:u,copy:h,fromCenterAndRadius:function(e,t){return(0,c.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},getRadius:f,getCenter:m,fromValues:function(e,t,r,i){return(0,c.f)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&(0,s.c)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return i.L.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===r?r:h(e,r)},intersectRay:p,intersectsRay:_,intersectRayClosestSilhouette:function(e,t,r){if(p(e,t,r))return r;const i=v(e,t,d.s.get());return(0,s.a)(r,t.origin,(0,s.g)(d.s.get(),t.direction,(0,s.C)(t.origin,i)/(0,s.l)(t.direction))),r},closestPointOnSilhouette:v,closestPoint:function(e,t,r){return p(e,t,r)?r:((0,d.e)(t,e,r),x(e,r,r))},projectPoint:x,distanceToSilhouette:function(e,t){const r=(0,s.b)(d.s.get(),t,e),i=(0,s.H)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},angleToSilhouette:T,axisAt:A,altitudeAt:E,setAltitudeAt:function(e,t,r,i){const o=E(e,t),n=A(e,t,l.A.Z,w),a=(0,s.g)(w,n,r-o);return(0,s.a)(i,t,a)},containsPoint:S,tmpSphere:C},Symbol.toStringTag,{value:"Module"}))},75854:(e,t,r)=>{var i,o;r.d(t,{C:()=>i}),r(82426),(o=i||(i={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},87372:(e,t,r)=>{function i(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}r.d(t,{O:()=>a,Z:()=>n,c:()=>i,f:()=>o});const n=i(),a=o(1,1);o(1,0),o(0,1)},32191:(e,t,r)=>{function i(){return[0,0]}function o(e,t){return new Float64Array(e,t,2)}r.d(t,{Z:()=>n,a:()=>i,c:()=>o});const n=[0,0]},79641:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>c,c:()=>l,f:()=>d,m:()=>i,n:()=>s,s:()=>a,t:()=>o});const i=r(92143).L.getLogger("esri.views.3d.support.buffer.math");function o(e,t,r){if(e.count!==t.count)return void i.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],s=r[2],c=r[4],l=r[5],d=r[6],u=r[8],h=r[9],f=r[10],m=r[12],p=r[13],g=r[14],_=e.typedBuffer,v=e.typedBufferStride,x=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*v,r=e*T,i=x[r],o=x[r+1],b=x[r+2];_[t]=n*i+c*o+u*b+m,_[t+1]=a*i+l*o+h*b+p,_[t+2]=s*i+d*o+f*b+g}}function n(e,t,r){if(e.count!==t.count)return void i.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],s=r[2],c=r[3],l=r[4],d=r[5],u=r[6],h=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,g=t.typedBuffer,_=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*p,r=e*_,i=g[r],o=g[r+1],v=g[r+2];m[t]=n*i+c*o+u*v,m[t+1]=a*i+l*o+h*v,m[t+2]=s*i+d*o+f*v}}function a(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*n,i=e*s;o[t]=r*a[i],o[t+1]=r*a[i+1],o[t+2]=r*a[i+2]}}function s(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*o,r=e*a,s=n[r],c=n[r+1],l=n[r+2],d=s*s+c*c+l*l;if(d>0){const e=1/Math.sqrt(d);i[t]=e*s,i[t+1]=e*c,i[t+2]=e*l}}}function c(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*n,i=e*s;o[t]=a[i]>>r,o[t+1]=a[i+1]>>r,o[t+2]=a[i+2]>>r}}function l(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=n[l],i[c+1]=n[l+1],i[c+2]=n[l+2],c+=o,l+=a}function d(e,t,r,i,o){const n=e.typedBuffer,a=e.typedBufferStride,s=o?.count??e.count;let c=(o?.dstIndex??0)*a;for(let e=0;e<s;++e)n[c]=t,n[c+1]=r,n[c+2]=i,c+=a}},56697:(e,t,r)=>{function i(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function n(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}r.d(t,{b:()=>i,c:()=>o,f:()=>n}),n(1,1,1),n(1,0,0),n(0,1,0),n(0,0,1)},68681:(e,t,r)=>{function i(){return[0,0,0,0]}function o(e,t,r,i){return[e,t,r,i]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,{b:()=>n,c:()=>i,f:()=>o}),o(1,1,1,1)},40961:(e,t,r)=>{r.d(t,{A:()=>i,a:()=>s});var i,o,n=r(82426),a=r(72836);function s(e,t){const r=(0,a.m)(e,t)/((0,a.l)(e)*(0,a.l)(t));return-(0,n.g)(r)}(o=i||(i={}))[o.X=0]="X",o[o.Y=1]="Y",o[o.Z=2]="Z",(0,a.d)(),(0,a.d)()}}]);