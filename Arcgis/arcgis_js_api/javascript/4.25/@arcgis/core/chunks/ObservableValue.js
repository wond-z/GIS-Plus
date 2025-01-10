/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{t as s}from"./tracking.js";import{S as e}from"./SimpleObservable.js";class t{constructor(s){this._observable=new e,this._value=s}get(){return s(this._observable),this._value}set(s){s!==this._value&&(this._value=s,this._observable.notify())}}export{t as O};
