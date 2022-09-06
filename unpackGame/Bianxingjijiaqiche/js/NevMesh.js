var t, e;

!function(t) {
    class e {
        static init(t) {
            for (let e = 0; e < t.length; e++) {
                let n = t[e];
                n.f = 0, n.g = 0, n.h = 0, n.cost = 1, n.visited = !1, n.closed = !1, n.parent = null;
            }
        }
        static cleanUp(t) {
            for (let e = 0; e < t.length; e++) {
                let n = t[e];
                delete n.f, delete n.g, delete n.h, delete n.cost, delete n.visited, delete n.closed, 
                delete n.parent;
            }
        }
        static heap() {
            return new t.BinaryHeap(function(t) {
                return t.f;
            });
        }
        static search(t, n, r) {
            e.init(t);
            let o = e.heap();
            for (o.push(n); o.size() > 0; ) {
                let n = o.pop();
                if (n === r) {
                    let t = n, e = [];
                    for (;t.parent; ) e.push(t), t = t.parent;
                    return this.cleanUp(e), e.reverse();
                }
                n.closed = !0;
                let s = e.neighbours(t, n);
                for (let t = 0, i = s.length; t < i; t++) {
                    let i = s[t];
                    if (i.closed) continue;
                    let l = n.g + i.cost, c = i.visited;
                    (!c || l < i.g) && (i.visited = !0, i.parent = n, !i.centroid || r.centroid, i.h = i.h || e.heuristic(i.centroid, r.centroid), 
                    i.g = l, i.f = i.g + i.h, c ? o.rescoreElement(i) : o.push(i));
                }
            }
            return [];
        }
        static heuristic(e, n) {
            return t.Vector3.distanceToSquared(e, n);
        }
        static neighbours(t, e) {
            let n = [];
            for (let r = 0; r < e.neighbours.length; r++) n.push(t[e.neighbours[r]]);
            return n;
        }
    }
    t.Astar = e;
}(e || (e = {})), (e || (e = {})).BinaryHeap = class {
    constructor(t) {
        this.content = [], this.scoreFunction = t;
    }
    push(t) {
        this.content.push(t), this.sinkDown(this.content.length - 1);
    }
    pop() {
        let t = this.content[0], e = this.content.pop();
        return this.content.length > 0 && (this.content[0] = e, this.bubbleUp(0)), t;
    }
    remove(t) {
        let e = this.content.indexOf(t), n = this.content.pop();
        e !== this.content.length - 1 && (this.content[e] = n, this.scoreFunction(n) < this.scoreFunction(t) ? this.sinkDown(e) : this.bubbleUp(e));
    }
    size() {
        return this.content.length;
    }
    rescoreElement(t) {
        this.sinkDown(this.content.indexOf(t));
    }
    sinkDown(t) {
        let e = this.content[t];
        for (;t > 0; ) {
            let n = (t + 1 >> 1) - 1, r = this.content[n];
            if (!(this.scoreFunction(e) < this.scoreFunction(r))) break;
            this.content[n] = e, this.content[t] = r, t = n;
        }
    }
    bubbleUp(t) {
        let e = this.content.length, n = this.content[t], r = this.scoreFunction(n);
        for (;;) {
            let o, s = t + 1 << 1, i = s - 1, l = null;
            if (i < e) {
                let t = this.content[i];
                (o = this.scoreFunction(t)) < r && (l = i);
            }
            if (s < e) {
                let t = this.content[s];
                this.scoreFunction(t) < (null === l ? r : o) && (l = s);
            }
            if (null === l) break;
            this.content[t] = this.content[l], this.content[l] = n, t = l;
        }
    }
}, (t = e || (e = {})).Channel = class {
    constructor() {
        this.portals = [];
    }
    push(t, e) {
        void 0 === e && (e = t), this.portals.push({
            left: t,
            right: e
        });
    }
    triarea2(t, e, n) {
        var r = e.x - t.x, o = e.z - t.z;
        return (n.x - t.x) * o - r * (n.z - t.z);
    }
    vequal(e, n) {
        return t.Vector3.distanceToSquared(e, n) < 1e-5;
    }
    stringPull() {
        let t, e, n, r = this.portals, o = [], s = 0, i = 0, l = 0;
        t = r[0].left, e = r[0].left, n = r[0].right, o.push(t);
        for (let c = 1; c < r.length; c++) {
            let h = r[c].left, u = r[c].right;
            if (this.triarea2(t, n, u) <= 0) {
                if (!(this.vequal(t, n) || this.triarea2(t, e, u) > 0)) {
                    o.push(e), e = t = e, n = t, i = s = i, l = s, c = s;
                    continue;
                }
                n = u, l = c;
            }
            if (this.triarea2(t, e, h) >= 0) {
                if (!(this.vequal(t, e) || this.triarea2(t, n, h) < 0)) {
                    o.push(n), e = t = n, n = t, i = s = l, l = s, c = s;
                    continue;
                }
                e = h, i = c;
            }
        }
        return 0 !== o.length && this.vequal(o[o.length - 1], r[r.length - 1].left) || o.push(r[r.length - 1].left), 
        this.path = o, o;
    }
}, function(t) {
    t.Face = class {
        constructor(t, e, n) {
            this.a = 0, this.b = 0, this.c = 0, this.c = n, this.b = e, this.a = t;
        }
    };
}(e || (e = {})), function(t) {
    t.Geometry = class {
        constructor() {
            this.faces = [], this.vertices = [];
        }
        mergeVertices() {
            let t, e, n, r, o, s, i = {}, l = new Array(), c = [], h = Math.pow(10, 4);
            for (n = 0, r = this.vertices.length; n < r; n++) t = this.vertices[n], null == i[e = Math.round(t.x * h) + "_" + Math.round(t.y * h) + "_" + Math.round(t.z * h)] ? (i[e] = n, 
            l.push(t), c[n] = l.length - 1) : c[n] = c[i[e]];
            let u = [];
            for (n = 0, r = this.faces.length; n < r; n++) {
                (o = this.faces[n]).a = c[o.a], o.b = c[o.b], o.c = c[o.c], s = [ o.a, o.b, o.c ];
                let t = -1;
                for (let e = 0; e < 3; e++) if (s[e] == s[(e + 1) % 3]) {
                    t = e, u.push(n);
                    break;
                }
            }
            for (n = u.length - 1; n >= 0; n--) {
                let t = u[n];
                this.faces.splice(t, 1);
            }
            let a = this.vertices.length - l.length;
            return this.vertices = l, a;
        }
    };
}(e || (e = {})), function(t) {
    function e(e) {
        let n = t.Patroll.buildNavigationMesh(e);
        return t.Patroll.groupNavMesh(n);
    }
    t.zoneNodes = {}, t.buildNodesByJson = function(n) {
        let r = n.vertices, o = n.faces, s = [];
        for (let e = 0; e < o.length / 5; e++) s.push(new t.Face(o[5 * e + 1], o[5 * e + 2], o[5 * e + 3]));
        let i = [];
        for (let e = 0; e < r.length; e += 3) i.push(new t.Vector3(r[e], r[e + 1], r[e + 2]));
        let l = new t.Geometry();
        return l.faces = s, l.vertices = i, e(l);
    }, t.buildNodes = e, t.setZoneData = function(e, n) {
        t.zoneNodes[e] = n;
    }, t.getGroup = function(e, n) {
        if (!t.zoneNodes[e]) return null;
        let r = null, o = Math.pow(50, 2);
        for (let s = 0, i = t.zoneNodes[e].groups.length; s < i; s++) {
            const i = t.zoneNodes[e].groups[s];
            for (let e = 0, l = i.length; e < l; e++) {
                const l = i[e];
                let c = t.Vector3.distanceToSquared(l.centroid, n);
                c < o && (r = s, o = c);
            }
        }
        return r;
    }, t.getRandomNode = function(e, n, r, o) {
        if (!t.zoneNodes[e]) return new t.Vector3();
        r = r || null, o = o || 0;
        let s = [], i = t.zoneNodes[e].groups[n];
        for (let e = 0, n = i.length; e < n; e++) {
            const n = i[e];
            r && o ? t.Vector3.distanceToSquared(r, n.centroid) < o * o && s.push(n.centroid) : s.push(n.centroid);
        }
        if (s.length > 0) {
            let e = t.random(s.length);
            return s[e], s[e];
        }
    }, t.findPath = function(e, n, r, o) {
        let s = t.zoneNodes[r].groups[o], i = t.zoneNodes[r].vertices, l = null, c = 999999;
        for (let n = 0, r = s.length; n < r; n++) {
            const r = s[n];
            let o = t.Vector3.distanceToSquared(r.centroid, e);
            o < c && (l = r, c = o);
        }
        let h = null;
        c = 999999;
        for (let e = 0, r = s.length; e < r; e++) {
            const r = s[e];
            let o = t.Vector3.distanceToSquared(r.centroid, n);
            o < c && t.Vector3.isVectorInPolygon(n, r, i) && (h = r, c = o);
        }
        if (!l || !h) return null;
        let u = t.Astar.search(s, l, h), a = function(t, e) {
            for (let n = 0; n < t.neighbours.length; n++) if (t.neighbours[n] === e.id) return t.portals[n];
        }, d = new t.Channel();
        d.push(e);
        for (let t = 0; t < u.length; t++) {
            let e = u[t], n = u[t + 1];
            if (n) {
                let t = a(e, n);
                d.push(i[t[0]], i[t[1]]);
            }
        }
        d.push(n), d.stringPull();
        let g = [];
        for (let e = 0, n = d.path.length; e < n; e++) {
            const n = d.path[e];
            let r = new t.Vector3(n.x, n.y, n.z);
            g.push(r);
        }
        return g.shift(), g;
    };
}(e || (e = {})), function(t) {
    class e {
        static computeCentroids(e) {
            let n, r, o;
            for (n = 0, r = e.faces.length; n < r; n++) (o = e.faces[n]).centroid = new t.Vector3(0, 0, 0), 
            t.Vector3.add(o.centroid, e.vertices[o.a], o.centroid), t.Vector3.add(o.centroid, e.vertices[o.b], o.centroid), 
            t.Vector3.add(o.centroid, e.vertices[o.c], o.centroid), t.Vector3.scale(o.centroid, 1 / 3, o.centroid);
        }
        static buildNavigationMesh(t) {
            return e.computeCentroids(t), t.mergeVertices(), e.buildPolygonsFromGeometry(t);
        }
        static buildPolygonsFromGeometry(t) {
            let n = [], r = t.vertices;
            for (let r = 0, o = t.faces.length; r < o; r++) {
                let o = t.faces[r];
                n.push({
                    id: e.polygonId++,
                    vertexIds: [ o.a, o.b, o.c ],
                    centroid: o.centroid,
                    normal: o.normal,
                    neighbours: []
                });
            }
            let o = {
                polygons: n,
                vertices: r
            };
            for (let t = 0, r = n.length; t < r; t++) {
                let r = n[t];
                e.buildPolygonNeighbours(r, o);
            }
            return o;
        }
        static buildPolygonNeighbours(n, r) {
            n.neighbours = [];
            for (let o = 0, s = r.polygons.length; o < s; o++) n !== r.polygons[o] && (t.Vector3.distanceToSquared(n.centroid, r.polygons[o].centroid) > 1e4 || e.arrayIntersect(n.vertexIds, r.polygons[o].vertexIds).length >= 2 && n.neighbours.push(r.polygons[o]));
        }
        static arrayIntersect(...t) {
            let e, n, r, o, s, i, l = [], c = {};
            for (i = t.length - 1, r = t[0].length, n = 0, e = 0; e <= i; e++) (o = t[e].length) < r && (n = e, 
            r = o);
            for (e = 0; e <= i; e++) {
                s = t[o = e === n ? 0 : e || n].length;
                for (let n = 0; n < s; n++) {
                    let r = t[o][n];
                    c[r] === e - 1 ? e === i ? (l.push(r), c[r] = 0) : c[r] = e : 0 === e && (c[r] = 0);
                }
            }
            return l;
        }
        static groupNavMesh(t) {
            let n = {
                vertices: null,
                groups: null
            };
            for (let n = 0, r = t.vertices.length; n < r; n++) {
                let n = t.vertices;
                n.x = e.roundNumber(n.x, 2), n.y = e.roundNumber(n.y, 2), n.z = e.roundNumber(n.z, 2);
            }
            n.vertices = t.vertices;
            let r = e.buildPolygonGroups(t);
            n.groups = [];
            let o = function(t, e) {
                for (let n = 0; n < t.length; n++) if (e === t[n]) return n;
            };
            for (let t = 0, s = r.length; t < s; t++) {
                const s = r[t];
                let i = [];
                for (let t = 0, n = s.length; t < n; t++) {
                    const n = s[t];
                    let r = [], l = [];
                    for (let t = 0, i = n.neighbours.length; t < i; t++) {
                        const i = n.neighbours[t];
                        r.push(o(s, i)), l.push(e.getSharedVerticesInOrder(n, i));
                    }
                    n.centroid.x = e.roundNumber(n.centroid.x, 2), n.centroid.y = e.roundNumber(n.centroid.y, 2), 
                    n.centroid.z = e.roundNumber(n.centroid.z, 2), i.push({
                        id: o(s, n),
                        neighbours: r,
                        vertexIds: n.vertexIds,
                        centroid: n.centroid,
                        portals: l
                    });
                }
                n.groups.push(i);
            }
            return n;
        }
        static getSharedVerticesInOrder(t, e) {
            let n = t.vertexIds, r = e.vertexIds, o = [];
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t];
                r.indexOf(e) > -1 && o.push(e);
            }
            if (o.length < 2) return [];
            o.indexOf(n[0]) > -1 && o.indexOf(n[n.length - 1]) > -1 && n.push(n.shift()), o.indexOf(r[0]) > -1 && o.indexOf(r[r.length - 1]) > -1 && r.push(r.shift()), 
            o = [];
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t];
                r.indexOf(e) > -1 && o.push(e);
            }
            return o;
        }
        static buildPolygonGroups(t) {
            let e = t.polygons, n = (t.vertices, []), r = 0;
            function o(t) {
                for (let e = 0, n = t.neighbours.length; e < n; e++) {
                    const n = t.neighbours[e];
                    null == n.group && (n.group = t.group, o(n));
                }
            }
            for (let t = 0, s = e.length; t < s; t++) {
                const s = e[t];
                null == s.group && (s.group = r++, o(s)), n[s.group] || (n[s.group] = []), n[s.group].push(s);
            }
            return n;
        }
        static roundNumber(t, e) {
            let n = new Number(t + "").toFixed(e);
            return parseFloat(n);
        }
    }
    e.polygonId = 1, t.Patroll = e;
}(e || (e = {})), function(t) {
    t.random = function(t, e = null) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
    };
}(e || (e = {})), function(t) {
    class e {
        constructor(t = 0, e = 0, n = 0, r = null) {
            this.x = t, this.y = e, this.z = n;
        }
        static add(t, e, n) {
            n.x = t.x + e.x, n.y = t.y + e.y, n.z = t.z + e.z;
        }
        static subtract(t, e, n) {
            n.x = t.x - e.x, n.y = t.y - e.y, n.z = t.z - e.z;
        }
        static cross(t, e, n) {
            let r = t.x, o = t.y, s = t.z, i = e.x, l = e.y, c = e.z;
            n.x = o * c - s * l, n.y = s * i - r * c, n.z = r * l - o * i;
        }
        static dot(t, e) {
            return t.x * e.x + t.y * e.y + t.z * e.z;
        }
        static scalarLength(t) {
            let e = t.x, n = t.y, r = t.z;
            return Math.sqrt(e * e + n * n + r * r);
        }
        static scalarLengthSquared(t) {
            let e = t.x, n = t.y, r = t.z;
            return e * e + n * n + r * r;
        }
        static normalize(t, e) {
            let n = t.x, r = t.y, o = t.z, s = n * n + r * r + o * o;
            s > 0 && (s = 1 / Math.sqrt(s), e.x = n * s, e.y = r * s, e.z = o * s);
        }
        static multiply(t, e, n) {
            n.x = t.x * e.x, n.y = t.y * e.y, n.z = t.z * e.z;
        }
        static scale(t, e, n) {
            n.x = t.x * e, n.y = t.y * e, n.z = t.z * e;
        }
        static lerp(t, e, n, r) {
            let o = t.x, s = t.y, i = t.z;
            r.x = o + n * (e.x - o), r.y = s + n * (e.y - s), r.z = i + n * (e.z - i);
        }
        static distanceToSquared(t, e) {
            let n = t.x - e.x, r = t.y - e.y, o = t.z - e.z;
            return n * n + r * r + o * o;
        }
        static isVectorInPolygon(t, n, r) {
            n.centroid;
            let o = 9e5, s = -9e5, i = [];
            for (let t = 0, e = n.vertexIds.length; t < e; t++) {
                const e = n.vertexIds[t];
                o = Math.min(r[e].y, o), s = Math.max(r[e].y, s), i.push(r[e]);
            }
            return !!(t.y < s + .5 && t.y > o - .5 && e.isPointInPoly(i, t));
        }
        static isPointInPoly(t, e) {
            for (var n = !1, r = -1, o = t.length, s = o - 1; ++r < o; s = r) (t[r].z <= e.z && e.z < t[s].z || t[s].z <= e.z && e.z < t[r].z) && e.x < (t[s].x - t[r].x) * (e.z - t[r].z) / (t[s].z - t[r].z) + t[r].x && (n = !n);
            return n;
        }
        cloneTo(t) {
            let e = t;
            e.x = this.x, e.y = this.y, e.z = this.z;
        }
        clone() {
            let t = new e();
            return this.cloneTo(t), t;
        }
    }
    t.Vector3 = e;
}(e || (e = {})), window.NevMesh = e;