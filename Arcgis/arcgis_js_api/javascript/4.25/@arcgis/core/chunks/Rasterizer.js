/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../request.js";import t from"../core/Error.js";import{throwIfAborted as r,isAbortError as n}from"../core/promiseUtils.js";import{c as i,g as a}from"./_commonjsHelpers.js";import{M as s}from"../core/scheduling.js";import{c as o}from"./imageutils2.js";import{j as u}from"./mathUtils.js";import{s as c,C as l,g as h,R as d,e as f}from"./cimAnalyzer.js";import{r as p,a as m}from"./rasterizingUtils.js";import{B as g}from"./utils7.js";var y;y=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.isNotPNG=function(e){return e===s},t.isNotAPNG=function(e){return e===o},t.default=function(e){var t=new Uint8Array(e);if(Array.prototype.some.call(u,(function(e,r){return e!==t[r]})))return s;var r=!1;if(c(t,(function(e){return!(r="acTL"===e)})),!r)return o;var n=[],i=[],l=null,p=null,m=0,g=new a.APNG;if(c(t,(function(e,t,r,s){var o=new DataView(t.buffer);switch(e){case"IHDR":l=t.subarray(r+8,r+8+s),g.width=o.getUint32(r+8),g.height=o.getUint32(r+12);break;case"acTL":g.numPlays=o.getUint32(r+8+4);break;case"fcTL":p&&(g.frames.push(p),m++),(p=new a.Frame).width=o.getUint32(r+8+4),p.height=o.getUint32(r+8+8),p.left=o.getUint32(r+8+12),p.top=o.getUint32(r+8+16);var u=o.getUint16(r+8+20),c=o.getUint16(r+8+22);0===c&&(c=100),p.delay=1e3*u/c,p.delay<=10&&(p.delay=100),g.playTime+=p.delay,p.disposeOp=o.getUint8(r+8+24),p.blendOp=o.getUint8(r+8+25),p.dataParts=[],0===m&&2===p.disposeOp&&(p.disposeOp=1);break;case"fdAT":p&&p.dataParts.push(t.subarray(r+8+4,r+8+s));break;case"IDAT":p&&p.dataParts.push(t.subarray(r+8,r+8+s));break;case"IEND":i.push(h(t,r,12+s));break;default:n.push(h(t,r,12+s))}})),p&&g.frames.push(p),0==g.frames.length)return o;var y=new Blob(n),v=new Blob(i);return g.frames.forEach((function(e){var t=[];t.push(u),l.set(f(e.width),0),l.set(f(e.height),4),t.push(d("IHDR",l)),t.push(y),e.dataParts.forEach((function(e){return t.push(d("IDAT",e))})),t.push(v),e.imageData=new Blob(t,{type:"image/png"}),delete e.dataParts,t=null})),g};var n,i=(n=r(1))&&n.__esModule?n:{default:n},a=r(2),s=new Error("Not a PNG"),o=new Error("Not an animated PNG"),u=new Uint8Array([137,80,78,71,13,10,26,10]);function c(e,t){var r=new DataView(e.buffer),n=8,i=void 0,a=void 0,s=void 0;do{a=r.getUint32(n),s=t(i=l(e,n+4,4),e,n,a),n+=12+a}while(!1!==s&&"IEND"!=i&&n<e.length)}function l(e,t,r){var n=Array.prototype.slice.call(e.subarray(t,t+r));return String.fromCharCode.apply(String,n)}function h(e,t,r){var n=new Uint8Array(r);return n.set(e.subarray(t,t+r)),n}var d=function(e,t){var r=e.length+t.length,n=new Uint8Array(r+8),a=new DataView(n.buffer);a.setUint32(0,t.length),n.set(function(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(e),4),n.set(t,8);var s=(0,i.default)(n,4,r);return a.setUint32(r+4,s),n},f=function(e){return new Uint8Array([e>>>24&255,e>>>16&255,e>>>8&255,255&e])}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-t,i=-1,a=t,s=t+n;a<s;a++)i=i>>>8^r[255&(i^e[a])];return-1^i};for(var r=new Uint32Array(256),n=0;n<256;n++){for(var i=n,a=0;a<8;a++)i=0!=(1&i)?3988292384^i>>>1:i>>>1;r[n]=i}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Frame=t.APNG=void 0;var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=(n=r(3))&&n.__esModule?n:{default:n};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.APNG=function(){function e(){s(this,e),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return i(e,[{key:"createImages",value:function(){return Promise.all(this.frames.map((function(e){return e.createImage()})))}},{key:"getPlayer",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.createImages().then((function(){return new a.default(t,e,r)}))}}]),e}(),t.Frame=function(){function e(){s(this,e),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return i(e,[{key:"createImage",value:function(){var e=this;return this.imageElement?Promise.resolve():new Promise((function(t,r){var n=URL.createObjectURL(e.imageData);e.imageElement=document.createElement("img"),e.imageElement.onload=function(){URL.revokeObjectURL(n),t()},e.imageElement.onerror=function(){URL.revokeObjectURL(n),e.imageElement=null,r(new Error("Image creation error"))},e.imageElement.src=n}))}}]),e}()},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e){function t(e,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.playbackRate=1,i._currentFrameNumber=0,i._ended=!1,i._paused=!0,i._numPlays=0,i._apng=e,i.context=r,i.stop(),n&&i.play(),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,0!==this._apng.numPlays&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&1==this._prevFrame.disposeOp?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&2==this._prevFrame.disposeOp&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var e=this.currentFrame;this._prevFrame=e,this._prevFrameData=null,2==e.disposeOp&&(this._prevFrameData=this.context.getImageData(e.left,e.top,e.width,e.height)),0==e.blendOp&&this.context.clearRect(e.left,e.top,e.width,e.height),this.context.drawImage(e.imageElement,e.left,e.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var e=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var t=performance.now()+this.currentFrame.delay/this.playbackRate;requestAnimationFrame((function r(n){if(!e._ended&&!e._paused){if(n>=t){for(;n-t>=e._apng.playTime/e.playbackRate;)t+=e._apng.playTime/e.playbackRate,e._numPlays++;do{e.renderNextFrame(),t+=e.currentFrame.delay/e.playbackRate}while(!e._ended&&n>t)}requestAnimationFrame(r)}}))}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),t}(((n=r(4))&&n.__esModule?n:{default:n}).default);t.default=a},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,s,o,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(a(r=this._events[e]))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(i(r))for(o=Array.prototype.slice.call(arguments,1),s=(c=r.slice()).length,u=0;u<s;u++)c[u].apply(this,o);return!0},r.prototype.addListener=function(e,t){var s;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(s=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!n(t))throw TypeError("listener must be a function");var r=!1;function i(){this.removeListener(e,i),r||(r=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},r.prototype.removeListener=function(e,t){var r,a,s,o;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(r=this._events[e]).length,a=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(r)){for(o=s;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){a=o;break}if(a<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(a,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}}])};const v=a({exports:{}}.exports=y()),_=[137,80,78,71,13,10,26,10];var w={},b={},x={};Object.defineProperty(x,"__esModule",{value:!0}),x.loop=x.conditional=x.parse=void 0,x.parse=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,i)}));else if("function"==typeof r)r(t,n,i,e);else{var a=Object.keys(r)[0];Array.isArray(r[a])?(i[a]={},e(t,r[a],n,i[a])):i[a]=r[a](t,n,i,e)}return n},x.conditional=function(e,t){return function(r,n,i,a){t(r,n,i)&&a(r,e,n,i)}},x.loop=function(e,t){return function(r,n,i,a){for(var s=[],o=r.pos;t(r,n,i);){var u={};if(a(r,e,n,u),r.pos===o)break;o=r.pos,s.push(u)}return s}};var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.readBits=k.readArray=k.readUnsigned=k.readString=k.peekBytes=k.readBytes=k.peekByte=k.readByte=k.buildStream=void 0,k.buildStream=function(e){return{data:e,pos:0}},k.readByte=function(){return function(e){return e.data[e.pos++]}},k.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};var U=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};k.readBytes=U,k.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}},k.readString=function(e){return function(t){return Array.from(U(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}},k.readUnsigned=function(e){return function(t){var r=U(2)(t);return e?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}},k.readArray=function(e,t){return function(r,n,i){for(var a="function"==typeof t?t(r,n,i):t,s=U(e),o=new Array(a),u=0;u<a;u++)o[u]=s(r);return o}},k.readBits=function(e){return function(t){for(var r=function(e){return e.data[e.pos++]}(t),n=new Array(8),i=0;i<8;i++)n[7-i]=!!(r&1<<i);return Object.keys(e).reduce((function(t,r){var i=e[r];return i.length?t[r]=function(e,t,r){for(var n=0,i=0;i<r;i++)n+=e[t+i]&&Math.pow(2,r-i-1);return n}(n,i.index,i.length):t[r]=n[i.index],t}),{})}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=x,r=k,n={blocks:function(e){for(var t=[],n=e.data.length,i=0,a=(0,r.readByte)()(e);0!==a&&a;a=(0,r.readByte)()(e)){if(e.pos+a>=n){var s=n-e.pos;t.push((0,r.readBytes)(s)(e)),i+=s;break}t.push((0,r.readBytes)(a)(e)),i+=a}for(var o=new Uint8Array(i),u=0,c=0;c<t.length;c++)o.set(t[c],u),u+=t[c].length;return o}},i=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),a=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0,r.readByte)()},n]}]},(function(e){return 44===(0,r.peekByte)()(e)})),s=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(e,t,n){return(0,r.readBytes)(n.text.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),o=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(e,t,n){return(0,r.readString)(n.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),u=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),c=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,t.loop)([i,o,u,a,s],(function(e){var t=(0,r.peekByte)()(e);return 33===t||44===t}))}];e.default=c}(b);var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.deinterlace=void 0,A.deinterlace=function(e,t){for(var r=new Array(e.length),n=e.length/t,i=function(n,i){var a=e.slice(i*t,(i+1)*t);r.splice.apply(r,[n*t,t].concat(a))},a=[0,4,2,1],s=[8,8,4,2],o=0,u=0;u<4;u++)for(var c=a[u];c<n;c+=s[u])i(c,o),o++;return r};var C={};Object.defineProperty(C,"__esModule",{value:!0}),C.lzw=void 0,C.lzw=function(e,t,r){var n,i,a,s,o,u,c,l,h,d,f,p,m,g,y,v,_=4096,w=r,b=new Array(r),x=new Array(_),k=new Array(_),U=new Array(4097);for(o=1+(i=1<<(d=e)),n=i+2,c=-1,a=(1<<(s=d+1))-1,l=0;l<i;l++)x[l]=0,k[l]=l;for(f=p=m=g=y=v=0,h=0;h<w;){if(0===g){if(p<s){f+=t[v]<<p,p+=8,v++;continue}if(l=f&a,f>>=s,p-=s,l>n||l==o)break;if(l==i){a=(1<<(s=d+1))-1,n=i+2,c=-1;continue}if(-1==c){U[g++]=k[l],c=l,m=l;continue}for(u=l,l==n&&(U[g++]=m,l=c);l>i;)U[g++]=k[l],l=x[l];m=255&k[l],U[g++]=m,n<_&&(x[n]=c,k[n]=m,0==(++n&a)&&n<_&&(s++,a+=n)),c=u}g--,b[y++]=U[g],h++}for(h=y;h<w;h++)b[h]=0;return b},Object.defineProperty(w,"__esModule",{value:!0});var F,P=w.decompressFrames=w.decompressFrame=E=w.parseGIF=void 0,M=(F=b)&&F.__esModule?F:{default:F},B=x,O=k,I=A,L=C,E=w.parseGIF=function(e){var t=new Uint8Array(e);return(0,B.parse)((0,O.buildStream)(t),M.default)},j=function(e,t,r){if(e.image){var n=e.image,i=n.descriptor.width*n.descriptor.height,a=(0,L.lzw)(n.data.minCodeSize,n.data.blocks,i);n.descriptor.lct.interlaced&&(a=(0,I.deinterlace)(a,n.descriptor.width));var s={pixels:a,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?s.colorTable=n.lct:s.colorTable=t,e.gce&&(s.delay=10*(e.gce.delay||10),s.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(s.transparentIndex=e.gce.transparentColorIndex)),r&&(s.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var i=4*n,a=e.pixels[n],s=e.colorTable[a]||[0,0,0];r[i]=s[0],r[i+1]=s[1],r[i+2]=s[2],r[i+3]=a!==e.transparentIndex?255:0}return r}(s)),s}console.warn("gif frame does not have associated image.")};w.decompressFrame=j,P=w.decompressFrames=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return j(r,e.gct,t)}))};const R=[71,73,70];class z{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(i,a){const u=this._resourceMap.get(i);if(u)return{width:u.width,height:u.height};const c=this._inFlightResourceMap.get(i);if(c)return c.then((e=>({width:e.width,height:e.height})));const l=async function(i,a){const{arrayBuffer:u,mediaType:c}=await async function(r,i){let a;const s=";base64,";if(r.includes(s)){const e=r.indexOf(s),t=r.indexOf(s)+s.length,n=r.substring(t),i=atob(n),o=new Uint8Array(i.length);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);a={arrayBuffer:o.buffer,mediaType:r.substring(0,e).replace("data:","")}}else try{const t=await e(r,{responseType:"array-buffer",...i});a={arrayBuffer:t.data,mediaType:t.getHeader("Content-Type")}}catch(e){if(!n(e))throw new t("mapview-invalid-resource",`Could not fetch requested resource at ${r}`)}return a}(i,a),l="image/png"===c;return"image/gif"===c&&function(e){if(!function(e){const t=new Uint8Array(e);return!R.some(((e,r)=>e!==t[r]))}(e))return!1;const t=new DataView(e),r=t.getUint8(10);let n=13+(128&r?3*2**(1+(7&r)):0),i=0,a=!1;for(;!a;){switch(t.getUint8(n++)){case 33:if(!s())return!1;break;case 44:o();break;case 59:a=!0;break;default:return!1}if(i>1)return!0}function s(){switch(t.getUint8(n++)){case 249:n++,n+=4,u();break;case 1:i++,n++,n+=12,u();break;case 254:u();break;case 255:n++,n+=8,n+=3,u();break;default:return!1}return!0}function o(){i++,n+=8;const e=t.getUint8(n++);n+=128&e?3*2**(1+(7&e)):0,n++,u()}function u(){let e;for(;e=t.getUint8(n++);)n+=e}return!1}(u)?async function(e,t){const r=E(e),n=P(r,!0),{width:i,height:a}=r.lsd,u=document.createElement("canvas");u.width=i,u.height=a;const c=u.getContext("2d"),l=[],h=[];for(const e of n){h.push(s(e.delay||100));const t=new ImageData(e.patch,e.dims.width,e.dims.height),r=o(t),n=3===e.disposalType&&c.getImageData(e.dims.left,e.dims.top,e.dims.width,e.dims.height);c.drawImage(r,e.dims.left,e.dims.top);const u=c.getImageData(0,0,i,a);l.push(u),1===e.disposalType||(2===e.disposalType?c.clearRect(e.dims.left,e.dims.top,e.dims.width,e.dims.height):3===e.disposalType&&c.putImageData(n,e.dims.left,e.dims.top))}return{frameDurations:h,getFrame:e=>l[e],width:i,height:a}}(u):l&&function(e){if(!function(e){const t=new Uint8Array(e);return!_.some(((e,r)=>e!==t[r]))}(e))return!1;const t=new DataView(e),r=new Uint8Array(e);let n,i=8;do{const e=t.getUint32(i);if(n=String.fromCharCode.apply(String,Array.prototype.slice.call(r.subarray(i+4,i+8))),"acTL"===n)return!0;i+=12+e}while("IEND"!==n&&i<r.length);return!1}(u)?async function(e,t){const n=v(e);if(n instanceof Error)throw n;await n.createImages(),r(t);const{frames:i,width:a,height:o}=n,u=document.createElement("canvas");u.width=a,u.height=o;const c=u.getContext("2d"),l=[],h=[];for(const e of i){h.push(s(e.delay||100));const t=e.imageElement;0===e.blendOp?c.globalCompositeOperation="copy":c.globalCompositeOperation="source-over";const r=2===e.disposeOp&&c.getImageData(e.left,e.top,e.width,e.height);c.drawImage(t,e.left,e.top);const n=c.getImageData(0,0,a,o);l.push(n),0===e.disposeOp||(1===e.disposeOp?c.clearRect(e.left,e.top,e.width,e.height):2===e.disposeOp&&c.putImageData(r,e.left,e.top))}return{frameDurations:h,getFrame:e=>l[e],width:a,height:o}}(u,a):async function(r,i){const a=window.URL.createObjectURL(r);try{const{data:t}=await e(a,{...i,responseType:"image"});return t}catch(e){if(!n(e))throw new t("mapview-invalid-resource",`Could not fetch requested resource at ${a}`);throw e}finally{window.URL.revokeObjectURL(a)}}(new Blob([u],{type:c}),a)}(i,a);return this._inFlightResourceMap.set(i,c),l.then((e=>(this._inFlightResourceMap.delete(i),this._resourceMap.set(i,e),{width:e.width,height:e.height})),(()=>({width:0,height:0})))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}}class S{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,r){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[r,n,i]=p(this._rasterizationCanvas,e.style,t);return{size:[n,i],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:u(Math.ceil(t))}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,r;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=c(e.style,e.cap),e.cap){case"butt":r="Butt";break;case"square":r="Square";break;default:r="Round"}else t=e.dashTemplate,r=e.cim.capStyle;const[n,i,a]=m(t,r);return{size:[i,a],image:new Uint32Array(n.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let n,i,a,s=1;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(n=l.fromSimpleMarker(e),a=h(n)):e.cim&&"CIMHatchFill"===e.cim.type?(n=l.fromCIMHatchFill(e.cim,t),i=new d(n.frame.xmin,-n.frame.ymax,n.frame.xmax-n.frame.xmin,n.frame.ymax-n.frame.ymin),s=t):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(n=l.fromCIMInsidePolygon(e.cim),i=new d(n.frame.xmin,-n.frame.ymax,n.frame.xmax-n.frame.xmin,n.frame.ymax-n.frame.ymin)):(n=e.cim,a=h(n)),a&&!r){const[e,t,r]=f(a);return e?{size:[t,r],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:s}:null}const[o,g,y,v,_]=l.rasterize(this._rasterizationCanvas,n,i,this._resourceManager,!r);return o?{size:[g,y],image:new Uint32Array(o.buffer),sdf:!1,simplePattern:!1,anchorX:v,anchorY:_}:null}rasterizeImageResource(e,t,r,n){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?i.putImageData(r,0,0):(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${t}px`),i.drawImage(r,0,0,e,t));const a=i.getImageData(0,0,e,t),s=new Uint8Array(a.data);if(n)for(const e of n)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[t,r,n,i]=e.oldColor,[a,o,u,c]=e.newColor;if(t===a&&r===o&&n===u&&i===c)continue;for(let e=0;e<s.length;e+=4)t===s[e]&&r===s[e+1]&&n===s[e+2]&&i===s[e+3]&&(s[e]=a,s[e+1]=o,s[e+2]=u,s[e+3]=c)}let o;for(let e=0;e<s.length;e+=4)o=s[e+3]/255,s[e]=s[e]*o,s[e+1]=s[e+1]*o,s[e+2]=s[e+2]*o;let u=s,c=e,l=t;const h=512;if(c>=h||l>=h){const r=c/l;r>1?(c=h,l=Math.round(h/r)):(l=h,c=Math.round(h*r)),u=new Uint8Array(4*c*l);const n=new Uint8ClampedArray(u.buffer);g(s,e,t,n,c,l,!1)}return{size:[c,l],image:new Uint32Array(u.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}export{z as C,S as R};