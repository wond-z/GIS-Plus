/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{k as e,i as t}from"./maybe.js";import{isPromiseLike as s}from"../core/promiseUtils.js";class i{constructor(t,i){this._textureRep=t,this._disposed=!1;const r=this._textureRep.acquire(i);s(r)?(r.then((t=>{this._disposed?e(t):this._textureRef=t})),this.loadPromise=r):this._textureRef=r}dispose(){this._textureRef=e(this._textureRef),this._disposed=!0}get glTexture(){return t(this._textureRef)?this._textureRef.glTexture:null}}export{i as R};
