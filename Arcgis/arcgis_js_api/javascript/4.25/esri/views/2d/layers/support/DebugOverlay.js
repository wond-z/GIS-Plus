// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../../../webgl/BufferObject ../../../webgl/FramebufferObject ../../../../core/arrayUtils ../../../../core/has ../../../webgl/checkWebGLError ../../../webgl/context-util ../../../webgl/enums ../../../../chunks/builtins ../../../webgl/Texture ../../../webgl/VertexArrayObject ../../engine/DisplayObject ../../../webgl/VertexElementDescriptor".split(" "),function(m,f,n,h,w,x,y,z,A,c,B,C,p,q,r){const t=
{geometry:[new r.VertexElementDescriptor("a_PositionAndFlags",3,c.DataType.SHORT,0,6)]},g=new Map;g.set("a_PositionAndFlags",0);const u={vsPath:"debug/overlay",fsPath:"debug/overlay",attributes:g};return function(k){function e(b){var a=k.call(this)||this;a._conf=b;return a}m._inheritsLoose(e,k);e.makeFlags=function(b,a){return b|a<<2};var d=e.prototype;d._createTransforms=function(){return{dvs:n.create()}};d.doRender=function(b){this._updateTransforms(b);this._ensureResources(b);const {context:a}=
b;a.useProgram(this._program);this._program.setUniformMatrix3fv("u_dvsMat3",this.transforms.dvs);this._program.setUniform4fv("u_colors",this._conf.getColors(b));this._program.setUniform1fv("u_opacities",this._conf.getOpacities(b));const {vertexData:v,indexData:l}=this._conf.getMesh(b);this._vertexBuffer.setData(v);this._indexBuffer.setData(l);a.bindVAO(this._vertexArray);a.setBlendingEnabled(!0);a.setBlendFunction(c.BlendFactor.ONE,c.BlendFactor.ONE_MINUS_SRC_ALPHA);a.setDepthTestEnabled(!1);a.setStencilTestEnabled(!1);
a.setColorMask(!0,!0,!0,!0);a.drawElements(c.PrimitiveType.TRIANGLES,l.length,c.DataType.UNSIGNED_INT,0)};d.onDetach=function(){this._vertexArray&&(this._vertexArray.dispose(),this._vertexArray=null)};d._updateTransforms=function(b){f.identity(this.transforms.dvs);f.translate(this.transforms.dvs,this.transforms.dvs,[-1,1]);f.scale(this.transforms.dvs,this.transforms.dvs,[2/b.state.size[0],-2/b.state.size[1],1])};d._ensureResources=function(b){const {context:a}=b;this._program||(this._program=b.painter.materialManager.getProgram(u));
this._vertexBuffer||(this._vertexBuffer=h.BufferObject.createVertex(a,c.Usage.STREAM_DRAW));this._indexBuffer||(this._indexBuffer=h.BufferObject.createIndex(a,c.Usage.STREAM_DRAW));this._vertexArray||(this._vertexArray=new p.VertexArrayObject(a,g,t,{geometry:this._vertexBuffer},this._indexBuffer))};return e}(q.DisplayObject)});