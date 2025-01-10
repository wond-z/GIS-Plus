// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/materials/PatternStyle".split(" "),
function(q,r,d,v,w,x,y,z,A,B,C,t,D,n,b,E,F,p,f){function u(a){const c=new E.ShaderBuilder,g=a.hasMultipassTerrain&&(a.output===d.ShaderOutput.Color||a.output===d.ShaderOutput.Alpha);a.draped||c.extensions.add("GL_OES_standard_derivatives");const {vertex:e,fragment:h}=c;t.addProjViewLocalOrigin(e,a);c.include(w.Transform,a);c.include(x.VertexColor,a);a.draped?e.uniforms.add(new n.FloatPassUniform("worldToScreenRatio",(m,k)=>1/k.screenToPCSRatio)):c.attributes.add(p.VertexAttribute.BOUNDINGRECT,"mat3");
c.attributes.add(p.VertexAttribute.POSITION,"vec3");c.attributes.add(p.VertexAttribute.UVMAPSPACE,"vec4");c.varyings.add("vpos","vec3");c.varyings.add("vuv","vec2");g&&c.varyings.add("depth","float");var l=a.style===f.Style.ForwardDiagonal||a.style===f.Style.BackwardDiagonal||a.style===f.Style.DiagonalCross;l&&e.code.add(b.glsl`
      const mat2 rotate45 = mat2(${b.glsl.float(.70710678118)}, ${b.glsl.float(-.70710678118)},
                                 ${b.glsl.float(.70710678118)}, ${b.glsl.float(.70710678118)});
    `);a.draped||(t.addCameraPosition(e,a),e.uniforms.add(new n.FloatPassUniform("worldToScreenPerDistanceRatio",(m,k)=>1/k.camera.perScreenPixelRatio)),e.code.add(b.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),e.code.add(b.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),e.code.add(b.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${b.glsl.float(.08715574274)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `));e.code.add(b.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${l?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${l?" * rotate45":""};

      ${a.draped?"":b.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${b.glsl.float(a.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);if(l=a.output===d.ShaderOutput.Depth)c.include(y.OutputDepth,a),r.addNearFar(c),r.addLinearDepth(c);e.code.add(b.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${g?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${l?b.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:b.glsl`transformPosition(proj, view, vpos);`}
    }
  `);c.include(v.SliceDraw,a);h.include(C.ColorConversion);a.draped&&h.uniforms.add(new n.FloatPassUniform("texelSize",(m,k)=>1/k.camera.pixelRatio));a.output===d.ShaderOutput.Highlight&&c.include(z.OutputHighlight,a);g&&c.include(A.multipassTerrainTest,a);a.output!==d.ShaderOutput.Highlight&&(h.code.add(b.glsl`
      const float lineWidth = ${b.glsl.float(a.lineWidth)};
      const float spacing = ${b.glsl.float(a.patternSpacing)};
      const float spacingINV = ${b.glsl.float(1/a.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),a.draped||h.code.add(b.glsl`const int maxSamples = 5;
float sample(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`));h.uniforms.add(new D.Float4PassUniform("uColor",m=>m.color));h.code.add(b.glsl`
    void main() {
      discardBySlice(vpos);
      ${g?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${a.hasVertexColors?"vColor * uColor;":"uColor;"}
      color = highlightSlice(color, vpos);

      ${a.output!==d.ShaderOutput.Highlight?b.glsl`color.a *= ${G(a)};`:""}

      if (color.a < ${b.glsl.float(B.symbolAlphaCutoff)}) {
        discard;
      }

      ${a.output===d.ShaderOutput.Alpha?b.glsl`gl_FragColor = vec4(color.a);`:""}

      ${a.output===d.ShaderOutput.Color?b.glsl`gl_FragColor = color; ${a.transparencyPassType===F.TransparencyPassType.Color?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}`:""}
      ${a.output===d.ShaderOutput.Highlight?b.glsl`outputHighlight();`:""}
      ${a.output===d.ShaderOutput.Depth?b.glsl`outputDepth(linearDepth);`:""};
    }
  `);return c}function G(a){function c(g){return a.draped?b.glsl`coverage(vuv.${g}, texelSize)`:b.glsl`sample(vuv.${g})`}switch(a.style){case f.Style.ForwardDiagonal:case f.Style.Horizontal:return c("y");case f.Style.BackwardDiagonal:case f.Style.Vertical:return c("x");case f.Style.DiagonalCross:case f.Style.Cross:return b.glsl`
        1.0 - (1.0 - ${c("x")}) * (1.0 - ${c("y")})
      `;default:return"0.0"}}const H=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));q.Pattern=H;q.build=u});