// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/ray ../../../../chunks/sphere ./common ./InteractionType".split(" "),function(p,w,f,g,x,u,h,q){function r(a,b,e=h.defaultConstraintOptions){if(!a.state.isLocal)return 0;var c=a.state.constraints.distance;if(!a.pointsOfInterest.surfaceOrigin.renderLocation||Infinity===c)return 0;l.min=0;l.max=c;c=l;var d=e.interactionType;if(d!==q.InteractionType.NONE){var {min:t,max:k}=c,{interactionStartCamera:m,
interactionFactor:y}=e;e=d===q.InteractionType.ZOOM||d===q.InteractionType.PAN;d=r(a,m);var v=0===d?0:f.distance(m.eye,a.pointsOfInterest.surfaceOrigin.renderLocation);c.min=t;c.max=k;h.adjustRangeForInteraction(d,v,e,y,.05*v,c)}a=f.distance(b.eye,a.pointsOfInterest.surfaceOrigin.renderLocation);a=l.max-a;return-1E-6<=a?0:a}const l={min:0,max:0},z=g.create(),A=g.create(),B=g.create(),C=g.create(),n=g.create();p.applyDistanceConstraint=function(a,b,e=h.defaultConstraintOptions){var c=r(a,b,e);if(0===
c)return!1;var d=a.pointsOfInterest.surfaceOrigin;c=f.distance(b.eye,a.pointsOfInterest.surfaceOrigin.renderLocation)+c;const t=f.copy(z,b.eye);var k=h.interactionDirectionTowardsConstraintMinimization;e=e.interactionDirection;var m=f.direction(C,b.eye,a.pointsOfInterest.surfaceOrigin.renderLocation);k=k.call(h,b,e,m,B);if(!u.intersectRay(u.fromCenterAndRadius(d.renderLocation,c),x.wrap(b.eye,k),n))return!1;b.eye=n;d=f.subtract(A,b.eye,t);b.center=f.add(n,b.center,d);d=a.renderCoordsHelper.getAltitude(b.center);
a=a.renderCoordsHelper.intersectInfiniteManifold(b.ray,d,n);w.isSome(a)&&(b.center=a);return!0};p.getDistanceConstraintError=r;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});