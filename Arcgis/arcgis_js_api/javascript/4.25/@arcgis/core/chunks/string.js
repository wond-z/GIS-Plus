/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{g as e}from"./object.js";const t=/\{([^\}]+)\}/g;function r(e){return e??""}function n(n,o){return n.replace(t,"object"==typeof o?(t,n)=>r(e(n,o)):(e,t)=>r(o(t)))}function o(e,t){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(e=>t&&t.includes(e)?e:`\\${e}`))}function c(e){let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return t}function s(e){return(new DOMParser).parseFromString(e||"","text/html").body.innerText||""}export{o as e,c as n,n as r,s};
