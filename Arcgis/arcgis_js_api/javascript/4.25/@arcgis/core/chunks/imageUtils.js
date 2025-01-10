/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t=null,n=!0;function e(t,e,a){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(n)try{return new ImageData(t,e)}catch(t){n=!1}return r(t,e,a)}function a(t,e,a,o){if(!e||!a)throw new Error("Cannot construct image data without dimensions");if(n)try{return new ImageData(t,e,a)}catch(t){n=!1}const c=r(e,a,o);return c.data.set(t,0),c}function r(n,e,a){return a||(t||(t=document.createElement("canvas"),t.width=1,t.height=1),a=t),a.getContext("2d").createImageData(n,e)}export{e as c,a as w};
