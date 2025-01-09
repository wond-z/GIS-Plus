/**
 * =================== tinyqueue =========================
 */
function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
}
function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
TinyQueue.prototype = {
    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    },
};

/**
 * =================== geokdbush =========================
 */
class Geokdbush {
    constructor() {
        this.earthRadius = 6371;
        this.earthCircumference = 40007;
        this.rad = Math.PI / 180;
    }
    
    around(index, lng, lat, maxResults, maxDistance, predicate) {
        var result = [];
    
        if (maxResults === undefined) maxResults = Infinity;
        if (maxDistance === undefined) maxDistance = Infinity;
    
        var cosLat = Math.cos(lat * this.rad);
        var sinLat = Math.sin(lat * this.rad);
    
        var q = TinyQueue(null, this.compareDist);
    
        // an object that represents the top kd-tree node (the whole Earth)
        var node = {
            left: 0, // left index in the kd-tree array
            right: index.ids.length - 1, // right index
            axis: 0, // 0 for longitude axis and 1 for latitude axis
            dist: 0, // will hold the lower bound of children's distances to the query point
            minLng: -180, // bounding box of the node
            minLat: -90,
            maxLng: 180,
            maxLat: 90,
        };
    
        while (node) {
            var right = node.right;
            var left = node.left;
    
            if (right - left <= index.nodeSize) {
                // leaf node
    
                // add all points of the leaf node to the queue
                for (var i = left; i <= right; i++) {
                    var item = index.points[index.ids[i]];
                    if (!predicate || predicate(item)) {
                        q.push({
                            item: item,
                            dist: this.greatCircleDist(
                                lng,
                                lat,
                                index.coords[2 * i],
                                index.coords[2 * i + 1],
                                cosLat,
                                sinLat
                            ),
                        });
                    }
                }
            } else {
                // not a leaf node (has child nodes)
    
                var m = (left + right) >> 1; // middle index
    
                var midLng = index.coords[2 * m];
                var midLat = index.coords[2 * m + 1];
    
                // add middle point to the queue
                item = index.points[index.ids[m]];
                if (!predicate || predicate(item)) {
                    q.push({
                        item: item,
                        dist: this.greatCircleDist(
                            lng,
                            lat,
                            midLng,
                            midLat,
                            cosLat,
                            sinLat
                        ),
                    });
                }
    
                var nextAxis = (node.axis + 1) % 2;
    
                // first half of the node
                var leftNode = {
                    left: left,
                    right: m - 1,
                    axis: nextAxis,
                    minLng: node.minLng,
                    minLat: node.minLat,
                    maxLng: node.axis === 0 ? midLng : node.maxLng,
                    maxLat: node.axis === 1 ? midLat : node.maxLat,
                    dist: 0,
                };
                // second half of the node
                var rightNode = {
                    left: m + 1,
                    right: right,
                    axis: nextAxis,
                    minLng: node.axis === 0 ? midLng : node.minLng,
                    minLat: node.axis === 1 ? midLat : node.minLat,
                    maxLng: node.maxLng,
                    maxLat: node.maxLat,
                    dist: 0,
                };
    
                leftNode.dist = this.boxDist(lng, lat, leftNode, cosLat, sinLat);
                rightNode.dist = this.boxDist(lng, lat, rightNode, cosLat, sinLat);

                q.push(leftNode);
                q.push(rightNode);
            }
            while (q.length && q.peek().item) {
                var candidate = q.pop();
                if (candidate.dist > maxDistance) return result;
                result.push(candidate.item);
                if (result.length === maxResults) return result;
            }
    
            // the next closest kd-tree node
            node = q.pop();
        }
    
        return result;
    }
    boxDist(lng, lat, node, cosLat, sinLat) {
        var minLng = node.minLng;
        var maxLng = node.maxLng;
        var minLat = node.minLat;
        var maxLat = node.maxLat;
    
        // query point is between minimum and maximum longitudes
        if (lng >= minLng && lng <= maxLng) {
            if (lat <= minLat) return (this.earthCircumference * (minLat - lat)) / 360; // south
            if (lat >= maxLat) return (this.earthCircumference * (lat - maxLat)) / 360; // north
            return 0; // inside the bbox
        }
        var closestLng =
            (minLng - lng + 360) % 360 <= (lng - maxLng + 360) % 360
                ? minLng
                : maxLng;
        var cosLngDelta = Math.cos((closestLng - lng) * this.rad);
        var extremumLat = Math.atan(sinLat / (cosLat * cosLngDelta)) / this.rad;
    
        var d = Math.max(
            this.greatCircleDistPart(minLat, cosLat, sinLat, cosLngDelta),
            this.greatCircleDistPart(maxLat, cosLat, sinLat, cosLngDelta)
        );
    
        if (extremumLat > minLat && extremumLat < maxLat) {
            d = Math.max(
                d,
                this.greatCircleDistPart(extremumLat, cosLat, sinLat, cosLngDelta)
            );
        }
    
        return this.earthRadius * Math.acos(d);
    }
    compareDist(a, b) {
        return a.dist - b.dist;
    }
    greatCircleDist(lng, lat, lng2, lat2, cosLat, sinLat) {
        var cosLngDelta = Math.cos((lng2 - lng) * this.rad);
        return (
            this.earthRadius *
            Math.acos(this.greatCircleDistPart(lat2, cosLat, sinLat, cosLngDelta))
        );
    }
    greatCircleDistPart(lat, cosLat, sinLat, cosLngDelta) {
        var d =
            sinLat * Math.sin(lat * this.rad) +
            cosLat * Math.cos(lat * this.rad) * cosLngDelta;
        return Math.min(d, 1);
    }
    distance(lng, lat, lng2, lat2) {
        return this.greatCircleDist(
            lng,
            lat,
            lng2,
            lat2,
            Math.cos(lat * this.rad),
            Math.sin(lat * this.rad)
        );
    }
}


/**
 * =================== kdbush =========================
 */
function kdbush(points, getX, getY, nodeSize, ArrayType) {
    return new KDBush(points, getX, getY, nodeSize, ArrayType);
}
function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var x, y;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY)
                    result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY)
            result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}
function sort(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;

    var m = Math.floor((left + right) / 2);

    select(ids, coords, m, left, right, depth % 2);

    sort(ids, coords, nodeSize, left, m - 1, depth + 1);
    sort(ids, coords, nodeSize, m + 1, right, depth + 1);
}
function select(ids, coords, k, left, right, inc) {
    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp((2 * z) / 3);
            var sd =
                0.5 *
                Math.sqrt((z * s * (n - s)) / n) *
                (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - (m * s) / n + sd));
            var newRight = Math.min(
                right,
                Math.floor(k + ((n - m) * s) / n + sd)
            );
            select(ids, coords, k, newLeft, newRight, inc);
        }

        var t = coords[2 * k + inc];
        var i = left;
        var j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) i++;
            while (coords[2 * j + inc] > t) j--;
        }

        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}
function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}
function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function within(ids, coords, qx, qy, r, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var r2 = r * r;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2)
                    result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        var x = coords[2 * m];
        var y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}
function sqDist(ax, ay, bx, by) {
    var dx = ax - bx;
    var dy = ay - by;
    return dx * dx + dy * dy;
}

function KDBush(points, getX, getY, nodeSize, ArrayType) {
    getX = getX || defaultGetX;
    getY = getY || defaultGetY;
    ArrayType = ArrayType || Array;

    this.nodeSize = nodeSize || 64;
    this.points = points;

    this.ids = new ArrayType(points.length);
    this.coords = new ArrayType(points.length * 2);

    for (var i = 0; i < points.length; i++) {
        this.ids[i] = i;
        this.coords[2 * i] = getX(points[i]);
        this.coords[2 * i + 1] = getY(points[i]);
    }

    sort(this.ids, this.coords, this.nodeSize, 0, this.ids.length - 1, 0);
}
KDBush.prototype = {
    range: function (minX, minY, maxX, maxY) {
        return range(
            this.ids,
            this.coords,
            minX,
            minY,
            maxX,
            maxY,
            this.nodeSize
        );
    },

    within: function (x, y, r) {
        return within(this.ids, this.coords, x, y, r, this.nodeSize);
    },
};

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}


/**
 * =================== NodeHeap =========================
 */
function NodeHeap(options) {
    if (!(this instanceof NodeHeap)) return new NodeHeap(options);

    options = options || {};

    if (!options.compare) {
        throw new Error("Please supply a comparison function to NodeHeap");
    }

    this.data = [];
    this.length = this.data.length;
    this.compare = options.compare;
    this.setNodeId = function (nodeSearchState, heapIndex) {
        nodeSearchState.heapIndex = heapIndex;
    };

    if (this.length > 0) {
        for (var i = this.length >> 1; i >= 0; i--) this._down(i);
    }

    if (options.setNodeId) {
        for (var i = 0; i < this.length; ++i) {
            this.setNodeId(this.data[i], i);
        }
    }
}

NodeHeap.prototype = {
    push: function (item) {
        this.data.push(item);
        this.setNodeId(item, this.length);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this.setNodeId(this.data[0], 0);
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function () {
        return this.data[0];
    },

    updateItem: function (pos) {
        this._down(pos);
        this._up(pos);
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var setNodeId = this.setNodeId;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;

            setNodeId(current, pos);
            pos = parent;
        }

        data[pos] = item;
        setNodeId(item, pos);
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];
        var setNodeId = this.setNodeId;

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            setNodeId(best, pos);
            pos = left;
        }

        data[pos] = item;
        setNodeId(item, pos);
    },
};
