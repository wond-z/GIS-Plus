// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../core/Logger ./BufferObject ./enums ./FramebufferObject ./Texture ./VertexArrayObject ./VertexElementDescriptor".split(" "),function(g,l,m,a,n,p,q,r){g.testSamplerPrecision=function(b){var d=new n.FramebufferObject(b,{colorTarget:a.TargetType.TEXTURE,depthStencilTarget:a.DepthStencilTargetType.NONE},{target:a.TextureType.TEXTURE_2D,wrapMode:a.TextureWrapMode.CLAMP_TO_EDGE,pixelFormat:a.PixelFormat.RGBA,dataType:a.PixelType.UNSIGNED_BYTE,samplingMode:a.TextureSamplingMode.NEAREST,
width:1,height:1});const c=new Uint8Array(4),h=m.BufferObject.createVertex(b,a.Usage.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),k=new q.VertexArrayObject(b,new Map([["a_position",0]]),{geometry:[new r.VertexElementDescriptor("a_position",2,a.DataType.SHORT,0,4)]},{geometry:h}),e=b.programCache.acquire("\nprecision highp float;\nattribute vec2 a_pos;\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset \x3d pow(2.0, float(bitIndex));\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value \x3d texture2D(u_texture, vec2(0.0));\n  float bit \x3d getBit(value.x * 255.0, 1);\n\n  v_color \x3d bit * vec4(1.0);\n  gl_Position \x3d vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n",
"\nprecision highp float;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor \x3d v_color;\n}\n",new Map([["a_pos",0]]));b.useProgram(e);var f=new p.Texture(b,{target:a.TextureType.TEXTURE_2D,wrapMode:a.TextureWrapMode.CLAMP_TO_EDGE,pixelFormat:a.PixelFormat.RGBA,dataType:a.PixelType.UNSIGNED_BYTE,samplingMode:a.TextureSamplingMode.NEAREST,width:1,height:1},new Uint8Array([2,255,0,0]));e.setUniform1i("u_texture",0);b.bindTexture(f,0);f=b.getBoundFramebufferObject();b.bindFramebuffer(d);b.useProgram(e);
const {x:t,y:u,width:v,height:w}=b.getViewport();b.setViewport(0,0,1,1);b.bindVAO(k);b.drawArrays(a.PrimitiveType.TRIANGLE_STRIP,0,4);b.setViewport(t,u,v,w);d.readPixels(0,0,1,1,a.PixelFormat.RGBA,a.PixelType.UNSIGNED_BYTE,c);e.dispose();k.dispose(!1);h.dispose();d.dispose();(d=255!==c[0]||255!==c[1]||255!==c[2]||255!==c[3])&&l.getLogger("esri.views.webgl.testSamplerPrecision").warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${c[0]}.${c[1]}.${c[2]}.${c[3]}]`);
b.bindFramebuffer(f);return d};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});