/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */
const t=new WeakMap;function n(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function i(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function e(e){if(o(e),e.transitionEl){const o=n.bind(e),s=i.bind(e);t.set(e,[e.transitionEl,o,s]),e.transitionEl.addEventListener("transitionstart",o),e.transitionEl.addEventListener("transitionend",s)}}function o(n){if(!t.has(n))return;const[i,e,o]=t.get(n);i.removeEventListener("transitionstart",e),i.removeEventListener("transitionend",o),t.delete(n)}export{e as c,o as d};
