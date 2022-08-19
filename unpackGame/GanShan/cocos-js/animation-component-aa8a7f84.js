require("../@babel/runtime/helpers/Arrayincludes");

var t = require("../@babel/runtime/helpers/typeof");

System.register([ "./texture-barrier-60b5983b.js", "./json-asset-933a1d4c.js", "./deprecated-26630860.js", "./skeletal-animation-utils-121f35a2.js" ], function(e) {
    var n, i, r, a, s, o, u, h, l, c, f, p, _, v, d, m, g, y, b, w, T, A, S, E, k, C, I, P, x, O, N, M, L, z, R, F, D, U, V, B, W, Q, H, j, q, K, G, Y, X, J, Z, $, tt, et, nt, it, rt, at, st;
    return {
        setters: [ function(t) {
            n = t.d, i = t.c0, r = t.c1, a = t.bX, s = t.bW, o = t.bU, u = t.f, h = t.i, l = t.bT, 
            c = t.b$, f = t.l, p = t.bx, _ = t.bO, v = t.cA, d = t.bA, m = t.bw, g = t.bL, y = t.cJ, 
            b = t.cs, w = t.cM, T = t.bK;
        }, function(t) {
            A = t.bW, S = t.b6, E = t.bX, k = t.W, C = t.V, I = t.Q, P = t.T, x = t.dG, O = t.bp, 
            N = t.bt, M = t.a5, L = t.a1, z = t.bv, R = t.dD, F = t.dF, D = t.dH, U = t.ac, 
            V = t.dI, B = t.dJ, W = t.bq, Q = t.bs, H = t.bu, j = t.aa, q = t.Z, K = t.aL, G = t.dK, 
            Y = t.dL, X = t.dM, J = t.ab, Z = t.bZ, $ = t.cd, tt = t.cg, et = t.ds, nt = t.ch, 
            it = t.cc, rt = t.bm;
        }, function() {}, function(t) {
            at = t.S, st = t.B;
        } ],
        execute: function() {
            var ot, ut, ht, lt, ct, ft, pt, _t;
            function vt(t) {
                return "string" == typeof t || "number" == typeof t;
            }
            e({
                d: function(t, e) {
                    return t instanceof e;
                },
                i: vt,
                o: Qe,
                p: mi,
                s: We
            });
            var dt, mt, gt, yt, bt, wt, Tt = e("H", A("cc.animation.HierarchyPath")((lt = function() {
                function t(t) {
                    r(this, "path", ht, this), this.path = t || "";
                }
                return t.prototype.get = function(t) {
                    return t instanceof S ? t.getChildByPath(this.path) || (n(3926, t.name, this.path), 
                    null) : (n(3925), null);
                }, t;
            }(), ht = i((ut = lt).prototype, "path", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), ot = ut)) || ot), At = e("e", A("cc.animation.ComponentPath")((_t = function() {
                function t(t) {
                    r(this, "component", pt, this), this.component = t || "";
                }
                return t.prototype.get = function(t) {
                    return t instanceof S ? t.getComponent(this.component) || (n(3928, t.name, this.component), 
                    null) : (n(3927), null);
                }, t;
            }(), pt = i((ft = _t).prototype, "component", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), ct = ft)) || ct);
            function St(t, e, n, a) {
                var s, o, u, h, l, c, f = new e(), p = new e(), _ = new e(), v = A(t)((c = function() {
                    function t(t, n, i) {
                        r(this, "dataPoint", u, this), r(this, "inTangent", h, this), r(this, "outTangent", l, this), 
                        this.dataPoint = t || new e(), this.inTangent = n || new e(), this.outTangent = i || new e();
                    }
                    var i = t.prototype;
                    return i.lerp = function(t, e, i) {
                        var r = this.dataPoint, s = t.dataPoint;
                        p = n(p, this.inTangent, i), _ = n(_, t.outTangent, i);
                        var o = e * e * e, u = e * e, h = o - 2 * u + e, l = -2 * o + 3 * u, c = o - u;
                        return f = n(f, r, 2 * o - 3 * u + 1), f = a(f, f, p, h), f = a(f, f, s, l), f = a(f, f, _, c);
                    }, i.getNoLerp = function() {
                        return this.dataPoint;
                    }, t;
                }(), u = i((o = c).prototype, "dataPoint", [ E ], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return new e();
                    }
                }), h = i(o.prototype, "inTangent", [ E ], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return new e();
                    }
                }), l = i(o.prototype, "outTangent", [ E ], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return new e();
                    }
                }), s = o)) || s;
                if (e === k) {
                    var d = v.prototype.lerp;
                    v.prototype.lerp = function(t, e, n) {
                        var i = d.call(this, t, e, n);
                        return k.normalize(i, i), i;
                    };
                }
                return v;
            }
            var Et, kt, Ct, It, Pt, xt, Ot, Nt, Mt, Lt, zt, Rt, Ft, Dt, Ut, Vt, Bt, Wt, Qt, Ht, jt, qt, Kt, Gt, Yt, Xt, Jt, Zt = e("f", St("cc.CubicSplineVec2Value", C, C.multiplyScalar, C.scaleAndAdd)), $t = e("g", St("cc.CubicSplineVec3Value", I, I.multiplyScalar, I.scaleAndAdd)), te = e("h", St("cc.CubicSplineVec4Value", P, P.multiplyScalar, P.scaleAndAdd)), ee = e("j", St("cc.CubicSplineQuatValue", k, k.multiplyScalar, k.scaleAndAdd)), ne = e("k", A("cc.CubicSplineNumberValue")((wt = function() {
                function t(t, e, n) {
                    r(this, "dataPoint", gt, this), r(this, "inTangent", yt, this), r(this, "outTangent", bt, this), 
                    this.dataPoint = t, this.inTangent = e, this.outTangent = n;
                }
                var e = t.prototype;
                return e.lerp = function(t, e, n) {
                    var i = this.dataPoint, r = t.dataPoint, a = e * e * e, s = e * e;
                    return i * (2 * a - 3 * s + 1) + this.outTangent * n * (a - 2 * s + e) + r * (-2 * a + 3 * s) + t.inTangent * n * (a - s);
                }, e.getNoLerp = function() {
                    return this.dataPoint;
                }, t;
            }(), gt = i((mt = wt).prototype, "dataPoint", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), yt = i(mt.prototype, "inTangent", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), bt = i(mt.prototype, "outTangent", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), dt = mt)) || dt), ie = e("C", "cc.animation."), re = Symbol("CreateEval"), ae = Symbol("NormalizedFollow"), se = Symbol("ConvertAsTrsPath"), oe = Symbol("TrackBinding"), ue = e("b", A(ie + "TrackPath")((It = function() {
                function t() {
                    r(this, "_paths", Ct, this);
                }
                var e = t.prototype;
                return e.toProperty = function(t) {
                    return this._paths.push(t), this;
                }, e.toElement = function(t) {
                    return this._paths.push(t), this;
                }, e.toHierarchy = function(t) {
                    return this._paths.push(new Tt(t)), this;
                }, e.toComponent = function(t) {
                    var e = new At("string" == typeof t ? t : a.getClassName(t));
                    return this._paths.push(e), this;
                }, e.toCustomized = function(t) {
                    return this._paths.push(t), this;
                }, e.append = function() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    var r = (t = this._paths).concat.apply(t, n.map(function(t) {
                        return t._paths;
                    }));
                    return this._paths = r, this;
                }, e.isPropertyAt = function(t) {
                    return "string" == typeof this._paths[t];
                }, e.parsePropertyAt = function(t) {
                    return this._paths[t];
                }, e.isElementAt = function(t) {
                    return "number" == typeof this._paths[t];
                }, e.parseElementAt = function(t) {
                    return this._paths[t];
                }, e.isHierarchyAt = function(t) {
                    return this._paths[t] instanceof Tt;
                }, e.parseHierarchyAt = function(t) {
                    return s(this.isHierarchyAt(t)), this._paths[t].path;
                }, e.isComponentAt = function(t) {
                    return this._paths[t] instanceof At;
                }, e.parseComponentAt = function(t) {
                    return s(this.isComponentAt(t)), this._paths[t].component;
                }, e.slice = function(e, n) {
                    var i = new t();
                    return i._paths = this._paths.slice(e, n), i;
                }, e.trace = function(t, e, n) {
                    var i, r;
                    return null !== (i = e) && void 0 !== i || (e = 0), null !== (r = n) && void 0 !== r || (n = this._paths.length), 
                    this[ae](t, e, n);
                }, e[se] = function() {
                    for (var t, e = this._paths, n = e.length, i = 0, r = ""; i < n; ++i) {
                        var a = e[i];
                        if (!(a instanceof Tt)) break;
                        a.path && (r ? r += "/" + a.path : r = a.path);
                    }
                    if (i === n) return null;
                    if (i !== n - 1) return null;
                    switch (e[i]) {
                      case "position":
                      case "scale":
                      case "rotation":
                      case "eulerAngles":
                        t = e[i];
                        break;

                      default:
                        return null;
                    }
                    return {
                        node: r,
                        property: t
                    };
                }, e[ae] = function(t, e, i) {
                    for (var r = this._paths, a = t, s = e; s < i; ++s) {
                        var o = r[s];
                        if (vt(o)) {
                            if (!(o in a)) return n(3929, o), null;
                            a = a[o];
                        } else a = o.get(a);
                        if (null === a) break;
                    }
                    return a;
                }, o(t, [ {
                    key: "length",
                    get: function() {
                        return this._paths.length;
                    }
                } ]), t;
            }(), Ct = i((kt = It).prototype, "_paths", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Et = kt)) || Et), he = A(ie + "TrackBinding")(Pt = x((Mt = function() {
                function t() {
                    r(this, "path", Ot, this), r(this, "proxy", Nt, this);
                }
                var e = t.prototype;
                return e.parseTrsPath = function() {
                    return this.proxy ? null : this.path[se]();
                }, e.createRuntimeBinding = function(t, e, n) {
                    var i = this.path, r = this.proxy, a = i.length, s = a - 1;
                    if (0 === a || !i.isPropertyAt(s) && !i.isElementAt(s) || r) {
                        if (r) {
                            var o = i[ae](t, 0, a);
                            if (null === o) return null;
                            var h = r.forTarget(o), l = {
                                setValue: function(t) {
                                    h.set(t);
                                }
                            }, c = h.get;
                            return c && (l.getValue = function() {
                                return c.call(h);
                            }), l;
                        }
                        return u(3921), null;
                    }
                    var f, p = i.isPropertyAt(s) ? i.parsePropertyAt(s) : i.parseElementAt(s), _ = i[ae](t, 0, a - 1);
                    return null === _ ? null : e && _ instanceof S && ("position" === (f = p) || "rotation" === f || "scale" === f || "eulerAngles" === f) ? e.createPoseWriter(_, p, n) : {
                        setValue: function(t) {
                            _[p] = t;
                        },
                        getValue: function() {
                            return _[p];
                        }
                    };
                }, e.isMaskedOff = function(t) {
                    var e = this.parseTrsPath();
                    if (!e) return !1;
                    for (var n = t.joints[Symbol.iterator](), i = n.next(); !i.done; i = n.next()) {
                        var r = i.value;
                        if (r.path === e.node) return !r.enabled;
                    }
                    return !1;
                }, t;
            }(), Ot = i((xt = Mt).prototype, "path", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new ue();
                }
            }), Nt = i(xt.prototype, "proxy", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Pt = xt)) || Pt) || Pt, le = e("T", A(ie + "Track")((Ft = function() {
                function t() {
                    r(this, "_binding", Rt, this);
                }
                var e = t.prototype;
                return e.channels = function() {
                    return [];
                }, e.range = function() {
                    for (var t, e = {
                        min: 1 / 0,
                        max: -1 / 0
                    }, n = h(this.channels()); !(t = n()).done; ) {
                        var i = t.value;
                        e.min = Math.min(e.min, i.curve.rangeMin), e.max = Math.max(e.max, i.curve.rangeMax);
                    }
                    return e;
                }, o(t, [ {
                    key: "path",
                    get: function() {
                        return this._binding.path;
                    },
                    set: function(t) {
                        this._binding.path = t;
                    }
                }, {
                    key: "proxy",
                    get: function() {
                        return this._binding.proxy;
                    },
                    set: function(t) {
                        this._binding.proxy = t;
                    }
                }, {
                    key: oe,
                    get: function() {
                        return this._binding;
                    }
                } ]), t;
            }(), Rt = i((zt = Ft).prototype, "_binding", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new he();
                }
            }), Lt = zt)) || Lt), ce = A(ie + "Channel")((Bt = function() {
                function t(t) {
                    this.name = "", r(this, "_curve", Vt, this), this._curve = t;
                }
                return o(t, [ {
                    key: "curve",
                    get: function() {
                        return this._curve;
                    }
                } ]), t;
            }(), Vt = i((Ut = Bt).prototype, "_curve", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Dt = Ut)) || Dt, fe = A(ie + "SingleChannelTrack")((jt = function(t) {
                function e() {
                    var e;
                    return e = t.call(this) || this, r(e, "_channel", Ht, c(e)), e._channel = new ce(e.createCurve()), 
                    e;
                }
                l(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return [ this._channel ];
                }, n.createCurve = function() {
                    throw new Error("Not impl");
                }, n[re] = function() {
                    var t = this._channel.curve;
                    return new pe(t);
                }, o(e, [ {
                    key: "channel",
                    get: function() {
                        return this._channel;
                    }
                } ]), e;
            }(le), Ht = i((Qt = jt).prototype, "_channel", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Wt = Qt)) || Wt, pe = function() {
                function t(t) {
                    this._curve = t;
                }
                return t.prototype.evaluate = function(t) {
                    return this._curve.evaluate(t);
                }, t;
            }(), _e = e("R", A(ie + "RealTrack")(qt = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return l(e, t), e.prototype.createCurve = function() {
                    return new O();
                }, e;
            }(fe)) || qt);
            function ve(t) {
                return 0 === t.keyFramesCount ? void 0 : t;
            }
            var de, me, ge, ye, be, we, Te, Ae, Se, Ee, ke = [ "X", "Y", "Z", "W" ], Ce = e("V", A(ie + "VectorTrack")((Jt = function(t) {
                function e() {
                    var e;
                    e = t.call(this) || this, r(e, "_channels", Yt, c(e)), r(e, "_nComponents", Xt, c(e)), 
                    e._channels = new Array(4);
                    for (var n = 0; n < e._channels.length; ++n) {
                        var i = new ce(new O());
                        i.name = ke[n], e._channels[n] = i;
                    }
                    return e;
                }
                l(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return this._channels;
                }, n[re] = function() {
                    switch (this._nComponents) {
                      default:
                      case 2:
                        return new Ie(ve(this._channels[0].curve), ve(this._channels[1].curve));

                      case 3:
                        return new Pe(ve(this._channels[0].curve), ve(this._channels[1].curve), ve(this._channels[2].curve));

                      case 4:
                        return new xe(ve(this._channels[0].curve), ve(this._channels[1].curve), ve(this._channels[2].curve), ve(this._channels[3].curve));
                    }
                }, o(e, [ {
                    key: "componentsCount",
                    get: function() {
                        return this._nComponents;
                    },
                    set: function(t) {
                        this._nComponents = t;
                    }
                } ]), e;
            }(le), Yt = i((Gt = Jt).prototype, "_channels", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Xt = i(Gt.prototype, "_nComponents", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 4;
                }
            }), Kt = Gt)) || Kt), Ie = function() {
                function t(t, e) {
                    this._result = new C(), this._x = t, this._y = e;
                }
                return t.prototype.evaluate = function(t, e) {
                    return this._x && this._y || !e.getValue || C.copy(this._result, e.getValue()), 
                    this._x && (this._result.x = this._x.evaluate(t)), this._y && (this._result.y = this._y.evaluate(t)), 
                    this._result;
                }, t;
            }(), Pe = function() {
                function t(t, e, n) {
                    this._result = new I(), this._x = t, this._y = e, this._z = n;
                }
                return t.prototype.evaluate = function(t, e) {
                    return this._x && this._y && this._z || !e.getValue || I.copy(this._result, e.getValue()), 
                    this._x && (this._result.x = this._x.evaluate(t)), this._y && (this._result.y = this._y.evaluate(t)), 
                    this._z && (this._result.z = this._z.evaluate(t)), this._result;
                }, t;
            }(), xe = function() {
                function t(t, e, n, i) {
                    this._result = new P(), this._x = t, this._y = e, this._z = n, this._w = i;
                }
                return t.prototype.evaluate = function(t, e) {
                    return this._x && this._y && this._z && this._w || !e.getValue || P.copy(this._result, e.getValue()), 
                    this._x && (this._result.x = this._x.evaluate(t)), this._y && (this._result.y = this._y.evaluate(t)), 
                    this._z && (this._result.z = this._z.evaluate(t)), this._w && (this._result.w = this._w.evaluate(t)), 
                    this._result;
                }, t;
            }(), Oe = e("Q", A(ie + "QuatTrack")(de = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                l(e, t);
                var n = e.prototype;
                return n.createCurve = function() {
                    return new N();
                }, n[re] = function() {
                    return new Ne(this.channels()[0].curve);
                }, e;
            }(fe)) || de), Ne = function() {
                function t(t) {
                    this._result = new k(), this._curve = t;
                }
                return t.prototype.evaluate = function(t) {
                    return this._curve.evaluate(t, this._result), this._result;
                }, t;
            }(), Me = [ "Red", "Green", "Blue", "Alpha" ], Le = e("c", A(ie + "ColorTrack")((be = function(t) {
                function e() {
                    var e;
                    e = t.call(this) || this, r(e, "_channels", ye, c(e)), e._channels = new Array(4);
                    for (var n = 0; n < e._channels.length; ++n) {
                        var i = new ce(new O());
                        i.name = Me[n], e._channels[n] = i;
                    }
                    return e;
                }
                l(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return this._channels;
                }, n[re] = function() {
                    return new ze(ve(this._channels[0].curve), ve(this._channels[1].curve), ve(this._channels[2].curve), ve(this._channels[3].curve));
                }, e;
            }(le), ye = i((ge = be).prototype, "_channels", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), me = ge)) || me), ze = function() {
                function t(t, e, n, i) {
                    this._result = new M(), this._x = t, this._y = e, this._z = n, this._w = i;
                }
                return t.prototype.evaluate = function(t, e) {
                    return this._x && this._y && this._z && this._w || !e.getValue || M.copy(this._result, e.getValue()), 
                    this._x && (this._result.r = this._x.evaluate(t)), this._y && (this._result.g = this._y.evaluate(t)), 
                    this._z && (this._result.b = this._z.evaluate(t)), this._w && (this._result.a = this._w.evaluate(t)), 
                    this._result;
                }, t;
            }(), Re = [ "Width", "Height" ], Fe = e("S", A(ie + "SizeTrack")((Se = function(t) {
                function e() {
                    var e;
                    e = t.call(this) || this, r(e, "_channels", Ae, c(e)), e._channels = new Array(2);
                    for (var n = 0; n < e._channels.length; ++n) {
                        var i = new ce(new O());
                        i.name = Re[n], e._channels[n] = i;
                    }
                    return e;
                }
                l(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return this._channels;
                }, n[re] = function() {
                    return new De(ve(this._channels[0].curve), ve(this._channels[1].curve));
                }, e;
            }(le), Ae = i((Te = Se).prototype, "_channels", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), we = Te)) || we), De = function() {
                function t(t, e) {
                    this._result = new L(), this._width = t, this._height = e;
                }
                return t.prototype.evaluate = function(t, e) {
                    if ((!this._width || !this._height) && e.getValue) {
                        var n = e.getValue();
                        this._result.x = n.x, this._result.y = n.y;
                    }
                    return this._width && (this._result.width = this._width.evaluate(t)), this._height && (this._result.height = this._height.evaluate(t)), 
                    this._result;
                }, t;
            }(), Ue = e("O", A(ie + "ObjectTrack")(Ee = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return l(e, t), e.prototype.createCurve = function() {
                    return new z();
                }, e;
            }(fe)) || Ee), Ve = e("m", function() {
                function t(t) {
                    var e, n;
                    this.ratios = void 0, this._findRatio = void 0, this.ratios = t;
                    for (var i = !0, r = 1, a = t.length; r < a; r++) if (e = t[r] - t[r - 1], 1 === r) n = e; else if (Math.abs(e - n) > 1e-6) {
                        i = !1;
                        break;
                    }
                    this._findRatio = i ? He : D;
                }
                return t.prototype.sample = function(t) {
                    return this._findRatio(this.ratios, t);
                }, t;
            }());
            f.RatioSampler = Ve;
            var Be = e("n", function() {
                function t(e, n) {
                    this.types = void 0, this.type = null, this._values = [], this._lerp = void 0, this._duration = void 0, 
                    this._array = void 0, this._duration = n, this._values = e.values;
                    var i = function(e) {
                        return "string" == typeof e ? e : Array.isArray(e) ? e[0] === e[1] && e[2] === e[3] ? t.Linear : t.Bezier(e) : t.Linear;
                    };
                    if (void 0 !== e.easingMethod) this.type = i(e.easingMethod); else if (Array.isArray(e.easingMethods)) this.types = e.easingMethods.map(i); else if (void 0 !== e.easingMethods) {
                        this.types = new Array(this._values.length).fill(null);
                        for (var r = 0, a = Object.keys(e.easingMethods); r < a.length; r++) {
                            var s = a[r];
                            this.types[s] = i(e.easingMethods[s]);
                        }
                    } else this.type = null;
                    var o = e.values[0];
                    (void 0 === e.interpolate || e.interpolate) && (this._lerp = $e(o)), void 0 !== e._arrayLength && (this._array = new Array(e._arrayLength));
                }
                t.Bezier = function(t) {
                    return t;
                };
                var e = t.prototype;
                return e.hasLerp = function() {
                    return !!this._lerp;
                }, e.valueAt = function(t) {
                    if (void 0 === this._array) {
                        var e = this._values[t];
                        return e && e.getNoLerp ? e.getNoLerp() : e;
                    }
                    for (var n = 0; n < this._array.length; ++n) this._array[n] = this._values[this._array.length * t + n];
                    return this._array;
                }, e.valueBetween = function(t, e, n, i, r) {
                    if (this._lerp) {
                        var a = this.types ? this.types[e] : this.type, s = r - n, o = (t - n) / s;
                        if (a && (o = Qe(o, a)), void 0 === this._array) {
                            var u = this._values[e], h = this._values[i];
                            return this._lerp(u, h, o, s * this._duration);
                        }
                        for (var l = 0; l < this._array.length; ++l) {
                            var c = this._values[this._array.length * e + l], f = this._values[this._array.length * i + l];
                            this._array[l] = this._lerp(c, f, o, s * this._duration);
                        }
                        return this._array;
                    }
                    if (void 0 === this._array) return this.valueAt(e);
                    for (var p = 0; p < this._array.length; ++p) this._array[p] = this._values[this._array.length * e + p];
                    return this._array;
                }, e.empty = function() {
                    return 0 === this._values.length;
                }, e.constant = function() {
                    return 1 === this._values.length;
                }, t;
            }());
            function We(t, e, n) {
                var i = e.sample(n);
                if (i < 0) if ((i = ~i) <= 0) i = 0; else {
                    if (!(i >= e.ratios.length)) return t.valueBetween(n, i - 1, e.ratios[i - 1], i, e.ratios[i]);
                    i = e.ratios.length - 1;
                }
                return t.valueAt(i);
            }
            function Qe(t, e) {
                if ("string" == typeof e) {
                    var n = R[e];
                    n ? t = n(t) : u(3906, e);
                } else Array.isArray(e) && (t = F(e, t));
                return t;
            }
            function He(t, e) {
                var n = t.length - 1;
                if (0 === n) return 0;
                var i = t[0];
                if (e < i) return 0;
                var r = t[n];
                if (e > r) return n;
                var a = (e = (e - i) / (r - i)) / (1 / n), s = 0 | a, o = 1e-6;
                return a - s < o ? s : s + 1 - a < o ? s + 1 : ~(s + 1);
            }
            Be.Linear = null, f.AnimCurve = Be, e("E", function() {
                function t() {
                    this.events = [];
                }
                return t.prototype.add = function(t, e) {
                    this.events.push({
                        func: t || "",
                        params: e || []
                    });
                }, t;
            }()), f.sampleAnimationCurve = We;
            var je, qe, Ke, Ge, Ye, Xe, Je, Ze, $e = function() {
                function e(t, e, n, i) {
                    return t.lerp(e, n, i);
                }
                return function(n) {
                    if (null !== n) {
                        if ("number" == typeof n) return U;
                        if ("object" == t(n) && n.constructor) {
                            if (n instanceof k) return i = new k(), function(t, e, n) {
                                return k.slerp(i, t, e, n);
                            };
                            if (n instanceof p) return function(t) {
                                var e = new t();
                                return function(n, i, r) {
                                    return t.lerp(e, n, i, r), e;
                                };
                            }(n.constructor);
                            if (n.constructor === Number) return U;
                            if (V(n)) return e;
                        }
                        var i;
                    }
                };
            }(), tn = A(ie + "UntypedTrackChannel")((Ge = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, new O()) || this, r(e, "property", Ke, c(e)), e;
                }
                return l(e, t), e;
            }(ce), Ke = i((qe = Ge).prototype, "property", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), je = qe)) || je, en = A(ie + "UntypedTrack")((Ze = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, r(e, "_channels", Je, c(e)), 
                    e;
                }
                l(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return this._channels;
                }, n[re] = function(t) {
                    var e = this;
                    if (!t.getValue) throw new Error(_(3930));
                    var n = function(t) {
                        var n;
                        return null === (n = e._channels.find(function(e) {
                            return e.property === t;
                        })) || void 0 === n ? void 0 : n.curve;
                    }, i = t.getValue();
                    switch (!0) {
                      default:
                        throw new Error(_(3931));

                      case i instanceof C:
                        return new Ie(n("x"), n("y"));

                      case i instanceof I:
                        return new Pe(n("x"), n("y"), n("z"));

                      case i instanceof P:
                        return new xe(n("x"), n("y"), n("z"), n("w"));

                      case i instanceof M:
                        return new ze(n("r"), n("g"), n("b"), n("a"));

                      case i instanceof L:
                        return new De(n("width"), n("height"));
                    }
                }, n.addChannel = function(t) {
                    var e = new tn();
                    return e.property = t, this._channels.push(e), e;
                }, n.upgrade = function(t) {
                    var e = this, n = function(t, n) {
                        var i = e.channels().find(function(e) {
                            return e.property === t;
                        });
                        i && (n.name = i.name, n.curve.assignSorted(Array.from(i.curve.times()), Array.from(i.curve.values())));
                    }, i = t(this.path, this.proxy);
                    switch (i) {
                      default:
                        break;

                      case "vec2":
                      case "vec3":
                      case "vec4":
                        var r = new Ce();
                        r.path = this.path, r.proxy = this.proxy, r.componentsCount = "vec2" === i ? 2 : "vec3" === i ? 3 : 4;
                        var a = r.channels(), s = a[0], o = a[1], u = a[2], h = a[3];
                        switch (i) {
                          case "vec4":
                            n("w", h);

                          case "vec3":
                            n("z", u);

                          default:
                          case "vec2":
                            n("x", s), n("y", o);
                        }
                        return r;

                      case "color":
                        var l = new Le(), c = l.channels(), f = c[0], p = c[1], _ = c[2], v = c[3];
                        return n("r", f), n("g", p), n("b", _), n("a", v), n("x", f), n("y", p), n("z", _), 
                        n("w", v), l;

                      case "size":
                    }
                    return null;
                }, e;
            }(le), Je = i((Xe = Ze).prototype, "_channels", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Ye = Xe)) || Ye, nn = function() {
                function e(t) {
                    this._keys = [], this._curves = [], this._commonTargets = [], this._ratioSamplers = [], 
                    this._runtimeCurves = void 0, this._data = null, this._duration = void 0, this._duration = t;
                }
                var i = e.prototype;
                return i.getPropertyCurves = function() {
                    return this._runtimeCurves || this._createPropertyCurves(), this._runtimeCurves;
                }, i.toTracks = function() {
                    for (var e, i = [], r = this.keys, a = this.curves, o = this.commonTargets, u = function(t, e, n) {
                        for (var i, r = new ue(), a = h(e); !(i = a()).done; ) {
                            var s = i.value;
                            "string" == typeof s ? r.toProperty(s) : "number" == typeof s ? r.toElement(s) : s instanceof Tt ? r.toHierarchy(s.path) : s instanceof At ? r.toComponent(s.component) : r.toCustomized(s);
                        }
                        t.path = r, t.proxy = n;
                    }, l = o.map(function(t) {
                        var e = new en();
                        return u(e, t.modifiers, t.valueAdapter), i.push(e), e;
                    }), c = function() {
                        var a, o = e.value, h = o.data, c = h.values;
                        if (0 === c.length) return "continue";
                        var f = h.keys < 0 ? [ 0 ] : r[h.keys], p = c[0], _ = null === (a = h.interpolate) || void 0 === a || a;
                        s("number" != typeof h._arrayLength || "number" == typeof p);
                        var v = new an(h, f.length), d = function(t) {
                            u(t, o.modifiers, o.valueAdapter);
                        }, m = void 0;
                        if ("number" == typeof o.commonTarget) {
                            if (!c.every(function(t) {
                                return "number" == typeof t;
                            })) return n(3932), "continue";
                            if (o.valueAdapter || 1 !== o.modifiers.length || "string" != typeof o.modifiers[0]) return n(3933), 
                            "continue";
                            var g = o.modifiers[0], y = l[o.commonTarget].addChannel(g).curve;
                            m = y;
                        }
                        !function() {
                            if ("number" == typeof p) {
                                if (!c.every(function(t) {
                                    return "number" == typeof t;
                                })) return void n(3934);
                                var e;
                                if (m) e = m; else {
                                    var r = new _e();
                                    d(r), i.push(r), e = r.channel.curve;
                                }
                                var a = _ ? W.LINEAR : W.CONSTANT;
                                return e.assignSorted(f, c.map(function(t) {
                                    return {
                                        value: t,
                                        interpolationMode: a
                                    };
                                })), void v.convert(e);
                            }
                            if ("object" == t(p)) switch (!0) {
                              default:
                                break;

                              case rn(c, C):
                              case rn(c, I):
                              case rn(c, P):
                                var s = p instanceof C ? 2 : p instanceof I ? 3 : 4, o = new Ce();
                                d(o), o.componentsCount = s;
                                var u = o.channels(), h = u[0].curve, l = u[1].curve, g = u[2].curve, y = u[3].curve, b = _ ? W.LINEAR : W.CONSTANT, w = function(t) {
                                    return {
                                        value: t,
                                        interpolationMode: b
                                    };
                                };
                                switch (s) {
                                  case 4:
                                    y.assignSorted(f, c.map(function(t) {
                                        return w(t.w);
                                    })), v.convert(y);

                                  case 3:
                                    g.assignSorted(f, c.map(function(t) {
                                        return w(t.z);
                                    })), v.convert(g);

                                  default:
                                    h.assignSorted(f, c.map(function(t) {
                                        return w(t.x);
                                    })), v.convert(h), l.assignSorted(f, c.map(function(t) {
                                        return w(t.y);
                                    })), v.convert(l);
                                }
                                return void i.push(o);

                              case rn(c, k):
                                var T = new Oe();
                                d(T);
                                var A = _ ? H.SLERP : H.CONSTANT;
                                return T.channel.curve.assignSorted(f, c.map(function(t) {
                                    return {
                                        value: k.clone(t),
                                        interpolationMode: A
                                    };
                                })), v.convertQuatCurve(T.channel.curve), void i.push(T);

                              case rn(c, M):
                                var S = new Le();
                                d(S);
                                var E = S.channels(), x = E[0].curve, O = E[1].curve, N = E[2].curve, z = E[3].curve, R = _ ? W.LINEAR : W.CONSTANT, F = function(t) {
                                    return {
                                        value: t,
                                        interpolationMode: R
                                    };
                                };
                                return x.assignSorted(f, c.map(function(t) {
                                    return F(t.r);
                                })), v.convert(x), O.assignSorted(f, c.map(function(t) {
                                    return F(t.g);
                                })), v.convert(O), N.assignSorted(f, c.map(function(t) {
                                    return F(t.b);
                                })), v.convert(N), z.assignSorted(f, c.map(function(t) {
                                    return F(t.a);
                                })), v.convert(z), void i.push(S);

                              case rn(c, L):
                                var D = new Fe();
                                d(D);
                                var U = D.channels(), V = U[0].curve, B = U[1].curve, Q = _ ? W.LINEAR : W.CONSTANT, j = function(t) {
                                    return {
                                        value: t,
                                        interpolationMode: Q
                                    };
                                };
                                return V.assignSorted(f, c.map(function(t) {
                                    return j(t.width);
                                })), v.convert(V), B.assignSorted(f, c.map(function(t) {
                                    return j(t.height);
                                })), v.convert(B), void i.push(D);

                              case rn(c, ne):
                                var q = new _e();
                                d(q);
                                var K = _ ? W.CUBIC : W.CONSTANT;
                                return q.channel.curve.assignSorted(f, c.map(function(t) {
                                    return {
                                        value: t.dataPoint,
                                        leftTangent: t.inTangent,
                                        rightTangent: t.outTangent,
                                        interpolationMode: K
                                    };
                                })), void i.push(q);

                              case rn(c, Zt):
                              case rn(c, $t):
                              case rn(c, te):
                                var G = p instanceof Zt ? 2 : p instanceof $t ? 3 : 4, Y = new Ce();
                                d(Y), Y.componentsCount = G;
                                var X = Y.channels(), J = X[0], Z = X[1], $ = X[2], tt = X[3], et = _ ? W.LINEAR : W.CONSTANT, nt = function(t, e, n) {
                                    return {
                                        value: t,
                                        leftTangent: e,
                                        rightTangent: n,
                                        interpolationMode: et
                                    };
                                };
                                switch (G) {
                                  case 4:
                                    tt.curve.assignSorted(f, c.map(function(t) {
                                        return nt(t.dataPoint.w, t.inTangent.w, t.outTangent.w);
                                    }));

                                  case 3:
                                    $.curve.assignSorted(f, c.map(function(t) {
                                        return nt(t.dataPoint.z, t.inTangent.z, t.outTangent.z);
                                    }));

                                  default:
                                    J.curve.assignSorted(f, c.map(function(t) {
                                        return nt(t.dataPoint.y, t.inTangent.y, t.outTangent.y);
                                    })), Z.curve.assignSorted(f, c.map(function(t) {
                                        return nt(t.dataPoint.x, t.inTangent.x, t.outTangent.x);
                                    }));
                                }
                                return void i.push(Y);

                              case c.every(function(t) {
                                    return t instanceof ee;
                                }):
                                n(3935);
                            }
                            var it = new Ue();
                            d(it), it.channel.curve.assignSorted(f, c), i.push(it);
                        }();
                    }, f = h(a); !(e = f()).done; ) c();
                    return i;
                }, i._createPropertyCurves = function() {
                    var t = this;
                    this._ratioSamplers = this._keys.map(function(e) {
                        return new Ve(e.map(function(e) {
                            return e / t._duration;
                        }));
                    }), this._runtimeCurves = this._curves.map(function(e) {
                        return {
                            curve: new Be(e.data, t._duration),
                            modifiers: e.modifiers,
                            valueAdapter: e.valueAdapter,
                            sampler: t._ratioSamplers[e.data.keys],
                            commonTarget: e.commonTarget
                        };
                    });
                }, o(e, [ {
                    key: "keys",
                    get: function() {
                        return this._keys;
                    },
                    set: function(t) {
                        this._keys = t;
                    }
                }, {
                    key: "curves",
                    get: function() {
                        return this._curves;
                    },
                    set: function(t) {
                        this._curves = t, delete this._runtimeCurves;
                    }
                }, {
                    key: "commonTargets",
                    get: function() {
                        return this._commonTargets;
                    },
                    set: function(t) {
                        this._commonTargets = t;
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this._data;
                    }
                } ]), e;
            }();
            function rn(t, e) {
                return t.every(function(t) {
                    return t instanceof e;
                });
            }
            var an = function() {
                function t(t, e) {
                    this._easingMethods = void 0;
                    var n = t.easingMethods;
                    Array.isArray(n) ? 0 === n.length && 0 !== e ? this._easingMethods = new Array(e).fill(null) : this._easingMethods = n : this._easingMethods = void 0 === n ? new Array(e).fill(t.easingMethod) : Array.from({
                        length: e
                    }, function(t, e) {
                        var i;
                        return null !== (i = n[e]) && void 0 !== i ? i : null;
                    });
                }
                var e = t.prototype;
                return e.convert = function(t) {
                    var e, n, i, r, a, o, u, h, l, c, f, p, _, v, d, m, g, y, b, w, T, A = this._easingMethods;
                    if (A) {
                        var S = t.keyFramesCount;
                        if (!(t.keyFramesCount < 2)) {
                            Array.isArray(A) && s(S === A.length);
                            for (var E = S - 1, k = 0; k < E; ++k) {
                                var C = A[k];
                                C && (Array.isArray(C) ? (e = C, n = t.getKeyframeTime(k), i = t.getKeyframeValue(k), 
                                r = t.getKeyframeTime(k + 1), a = t.getKeyframeValue(k + 1), void 0, void 0, void 0, 
                                void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 
                                void 0, void 0, void 0, void 0, u = e[0], h = e[1], l = e[2], c = e[3], f = i.value, 
                                m = (1 - l) * (p = 3 * (r - n)), g = (1 - c) * (_ = 3 * (a.value - f)), 1 / 3, y = (d = h * _) / (v = u * p), 
                                b = Math.sqrt(v * v + d * d) * (1 / 3), w = g / m, T = Math.sqrt(m * m + g * g) * (1 / 3), 
                                i.interpolationMode = W.CUBIC, i.tangentWeightMode = (o = i.tangentWeightMode) === Q.NONE ? Q.RIGHT : o === Q.LEFT ? Q.BOTH : o, 
                                i.rightTangent = y, i.rightTangentWeight = b, a.tangentWeightMode = function(t) {
                                    return t === Q.NONE ? Q.LEFT : t === Q.RIGHT ? Q.BOTH : t;
                                }(a.tangentWeightMode), a.leftTangent = w, a.leftTangentWeight = T) : sn(C, t, k));
                            }
                        }
                    }
                }, e.convertQuatCurve = function(t) {
                    var e = this._easingMethods;
                    if (e) {
                        var n = t.keyFramesCount;
                        if (!(t.keyFramesCount < 2)) {
                            Array.isArray(e) && s(n === e.length);
                            for (var i = n - 1, r = 0; r < i; ++r) {
                                var a = e[r];
                                a && (Array.isArray(a) ? t.getKeyframeValue(r).easingMethod = a.slice() : on(a, t, r));
                            }
                        }
                    }
                }, o(t, [ {
                    key: "nil",
                    get: function() {
                        return !this._easingMethods || this._easingMethods.every(function(t) {
                            return null == t;
                        });
                    }
                } ]), t;
            }();
            function sn(t, e, n) {
                s(n !== e.keyFramesCount - 1);
                var i = e.getKeyframeValue(n), r = Fn[t];
                r === B.CONSTANT ? i.interpolationMode = W.CONSTANT : (i.interpolationMode = W.LINEAR, 
                i.easingMethod = r);
            }
            function on(t, e, n) {
                s(n !== e.keyFramesCount - 1);
                var i = e.getKeyframeValue(n), r = Fn[t];
                i.easingMethod = r;
            }
            var un, hn, ln, cn, fn, pn, _n, vn, dn, mn, gn, yn, bn, wn, Tn, An, Sn, En, kn, Cn, In, Pn, xn, On, Nn, Mn, Ln, zn, Rn, Fn = {
                constant: B.CONSTANT,
                linear: B.LINEAR,
                quadIn: B.QUAD_IN,
                quadOut: B.QUAD_OUT,
                quadInOut: B.QUAD_IN_OUT,
                quadOutIn: B.QUAD_OUT_IN,
                cubicIn: B.CUBIC_IN,
                cubicOut: B.CUBIC_OUT,
                cubicInOut: B.CUBIC_IN_OUT,
                cubicOutIn: B.CUBIC_OUT_IN,
                quartIn: B.QUART_IN,
                quartOut: B.QUART_OUT,
                quartInOut: B.QUART_IN_OUT,
                quartOutIn: B.QUART_OUT_IN,
                quintIn: B.QUINT_IN,
                quintOut: B.QUINT_OUT,
                quintInOut: B.QUINT_IN_OUT,
                quintOutIn: B.QUINT_OUT_IN,
                sineIn: B.SINE_IN,
                sineOut: B.SINE_OUT,
                sineInOut: B.SINE_IN_OUT,
                sineOutIn: B.SINE_OUT_IN,
                expoIn: B.EXPO_IN,
                expoOut: B.EXPO_OUT,
                expoInOut: B.EXPO_IN_OUT,
                expoOutIn: B.EXPO_OUT_IN,
                circIn: B.CIRC_IN,
                circOut: B.CIRC_OUT,
                circInOut: B.CIRC_IN_OUT,
                circOutIn: B.CIRC_OUT_IN,
                elasticIn: B.ELASTIC_IN,
                elasticOut: B.ELASTIC_OUT,
                elasticInOut: B.ELASTIC_IN_OUT,
                elasticOutIn: B.ELASTIC_OUT_IN,
                backIn: B.BACK_IN,
                backOut: B.BACK_OUT,
                backInOut: B.BACK_IN_OUT,
                backOutIn: B.BACK_OUT_IN,
                bounceIn: B.BOUNCE_IN,
                bounceOut: B.BOUNCE_OUT,
                bounceInOut: B.BOUNCE_IN_OUT,
                bounceOutIn: B.BOUNCE_OUT_IN,
                smooth: B.SMOOTH,
                fade: B.FADE
            };
            function Dn() {
                throw new Error("split() only valid in Editor.");
            }
            A(ie + "ExoticAnimation")((ln = function() {
                function t() {
                    r(this, "_nodeAnimations", hn, this);
                }
                var e = t.prototype;
                return e.createEvaluator = function(t) {
                    return new Gn(this._nodeAnimations, t);
                }, e.addNodeAnimation = function(t) {
                    var e = new Un(t);
                    return this._nodeAnimations.push(e), e;
                }, e.collectAnimatedJoints = function() {
                    return Array.from(new Set(this._nodeAnimations.map(function(t) {
                        return t.path;
                    })));
                }, e.split = function() {
                    return Dn();
                }, e.toHashString = function() {
                    return this._nodeAnimations.map(function(t) {
                        return t.toHashString();
                    }).join("\n");
                }, t;
            }(), hn = i((un = ln).prototype, "_nodeAnimations", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), un));
            var Un = A(ie + "ExoticNodeAnimation")((mn = function() {
                function t(t) {
                    r(this, "_path", pn, this), r(this, "_position", _n, this), r(this, "_rotation", vn, this), 
                    r(this, "_scale", dn, this), this._path = t;
                }
                var e = t.prototype;
                return e.createPosition = function(t, e) {
                    this._position = new jn(t, new Qn(e));
                }, e.createRotation = function(t, e) {
                    this._rotation = new jn(t, new Hn(e));
                }, e.createScale = function(t, e) {
                    this._scale = new jn(t, new Qn(e));
                }, e.createEvaluator = function(t) {
                    return new Yn(this._path, this._position, this._rotation, this._scale, t);
                }, e.split = function() {
                    return Dn();
                }, e.toHashString = function() {
                    var t, e, n, i, r, a;
                    return this._path + "\n" + (null !== (t = null === (e = this._position) || void 0 === e ? void 0 : e.toHashString()) && void 0 !== t ? t : "") + (null !== (n = null === (i = this._scale) || void 0 === i ? void 0 : i.toHashString()) && void 0 !== n ? n : "") + (null !== (r = null === (a = this._rotation) || void 0 === a ? void 0 : a.toHashString()) && void 0 !== r ? r : "");
                }, o(t, [ {
                    key: "path",
                    get: function() {
                        return this._path;
                    }
                } ]), t;
            }(), pn = i((fn = mn).prototype, "_path", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), _n = i(fn.prototype, "_position", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vn = i(fn.prototype, "_rotation", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), dn = i(fn.prototype, "_scale", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), cn = fn)) || cn;
            function Vn(t) {
                return t.toPrecision(2);
            }
            function Bn(t) {
                return t.map(Vn).join(" ");
            }
            var Wn = A(ie + "ExoticVectorLikeTrackValues")((Tn = function() {
                function t(t) {
                    r(this, "_values", bn, this), r(this, "_isQuantized", wn, this), this._values = t, 
                    this._isQuantized = !1;
                }
                var e = t.prototype;
                return e.quantize = function(t) {
                    s(!this._isQuantized), this._values = function(t, e) {
                        var n = Jn[e], i = 1 << n.BYTES_PER_ELEMENT, r = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY;
                        t.forEach(function(t) {
                            r = Math.min(t, r), a = Math.max(t, a);
                        });
                        var s = a - r, o = n.from(t, function(t) {
                            return (t - r) / s * i;
                        });
                        return new fi(Zn(t), o, s, r);
                    }(this._values, t), this._isQuantized = !0;
                }, e.toHashString = function() {
                    var t = this._isQuantized, e = this._values;
                    return t + " " + (t ? e.toHashString() : Bn(e));
                }, o(t, [ {
                    key: "precision",
                    get: function() {
                        return this._isQuantized ? this._values.originalPrecision : Zn(this._values);
                    }
                } ]), t;
            }(), bn = i((yn = Tn).prototype, "_values", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), wn = i(yn.prototype, "_isQuantized", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), gn = yn)) || gn, Qn = A(ie + "ExoticVec3TrackValues")(An = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                l(e, t), e.imitate = function(t, n) {
                    var i = new e(t);
                    return n._isQuantized && i.quantize(n._values.quantizationType), i;
                };
                var n = e.prototype;
                return n.get = function(t, e) {
                    var n = this._values;
                    this._isQuantized ? vi(n, t, e) : I.fromArray(e, n, 3 * t);
                }, n.lerp = function(t, e, n, i, r, a) {
                    var s = this._values;
                    this._isQuantized ? (vi(s, t, i), vi(s, e, r)) : (I.fromArray(i, s, 3 * t), I.fromArray(r, s, 3 * e)), 
                    I.lerp(a, i, r, n);
                }, e;
            }(Wn)) || An, Hn = A(ie + "ExoticQuatTrackValues")(Sn = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                l(e, t), e.imitate = function(t, n) {
                    var i = new e(t);
                    return n._isQuantized && i.quantize(n._values.quantizationType), i;
                };
                var n = e.prototype;
                return n.get = function(t, e) {
                    var n = this._values;
                    this._isQuantized ? di(n, t, e) : k.fromArray(e, n, 4 * t);
                }, n.lerp = function(t, e, n, i, r, a) {
                    var s = this._values;
                    this._isQuantized ? (di(s, t, i), di(s, e, r)) : (k.fromArray(i, s, 4 * t), k.fromArray(r, s, 4 * e)), 
                    k.slerp(a, i, r, n);
                }, e;
            }(Wn)) || Sn, jn = A(ie + "ExoticTrack")((Pn = function() {
                function t(t, e) {
                    r(this, "times", Cn, this), r(this, "values", In, this), this.times = t, this.values = e;
                }
                return t.prototype.toHashString = function() {
                    var t = this.times, e = this.values;
                    return "times: " + Bn(t) + "; values: " + e.toHashString();
                }, t;
            }(), Cn = i((kn = Pn).prototype, "times", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), In = i(kn.prototype, "values", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), En = kn)) || En;
            function qn(t, e) {
                t.length, s(0 !== t.length);
                var n = 0, i = 0, r = D(t, e);
                if (r >= 0) n = r; else {
                    var a = ~r, o = a - 1;
                    n = o;
                    var u = t[a], h = t[o];
                    i = (e - h) / (u - h);
                }
                return {
                    index: n,
                    ratio: i
                };
            }
            !function() {
                function t() {
                    this._reset();
                }
                var e = t.prototype;
                e.transformTime = function(t) {
                    return t - this._timeOffset;
                }, e.calculate = function(t, e, n) {
                    this._reset();
                    var i = t.length;
                    if (i) {
                        var r = t[0], a = t[i - 1], o = j(e, r, a), u = j(n, r, a);
                        this._timeOffset = o;
                        var h = function(t, e, n) {
                            var i = t.length;
                            s(n >= e && e >= t[0] && n <= t[i - 1]);
                            var r = qn(t, e), a = r.index, o = r.ratio, u = qn(t, n);
                            return {
                                fromIndex: a,
                                fromRatio: o,
                                toIndex: u.index,
                                toRatio: u.ratio
                            };
                        }(t, o, u), l = h.fromIndex, c = h.fromRatio, f = h.toIndex, p = h.toRatio, _ = !c, v = !p;
                        l !== f || c !== p ? (_ || (this.preLerpIndex = l, this.preLerpRatio = c), this.directKeyframesBegin = _ ? l : l + 1, 
                        this.directKeyframesEnd = f + 1, v || (this.postLerpIndex = f, this.postLerpRatio = p)) : _ ? (this.directKeyframesBegin = l, 
                        this.directKeyframesEnd = l + 1) : (this.preLerpIndex = l, this.preLerpRatio = c);
                    }
                }, e._reset = function() {
                    this.preLerpIndex = -1, this.preLerpRatio = 0, this.directKeyframesBegin = 0, this.directKeyframesEnd = 0, 
                    this.postLerpIndex = -1, this.postLerpRatio = 0, this._timeOffset = 0;
                }, o(t, [ {
                    key: "keyframesCount",
                    get: function() {
                        var t = this.preLerpIndex, e = this.directKeyframesBegin;
                        return 0 + (t < 0 ? 0 : 1) + (this.directKeyframesEnd - e) + (this.postLerpIndex < 0 ? 0 : 1);
                    }
                } ]);
            }();
            var Kn, Gn = function() {
                function t(t, e) {
                    this._nodeEvaluations = void 0, this._nodeEvaluations = t.map(function(t) {
                        return t.createEvaluator(e);
                    });
                }
                return t.prototype.evaluate = function(t) {
                    this._nodeEvaluations.forEach(function(e) {
                        e.evaluate(t);
                    });
                }, t;
            }(), Yn = function() {
                function t(t, e, n, i, r) {
                    this._position = null, this._rotation = null, this._scale = null, e && (this._position = _i(e.times, e.values, I, t, "position", r)), 
                    n && (this._rotation = _i(n.times, n.values, k, t, "rotation", r)), i && (this._scale = _i(i.times, i.values, I, t, "scale", r));
                }
                return t.prototype.evaluate = function(t) {
                    if (this._position) {
                        var e = this._position.evaluator.evaluate(t);
                        this._position.runtimeBinding.setValue(e);
                    }
                    if (this._rotation) {
                        var n = this._rotation.evaluator.evaluate(t);
                        this._rotation.runtimeBinding.setValue(n);
                    }
                    if (this._scale) {
                        var i = this._scale.evaluator.evaluate(t);
                        this._scale.runtimeBinding.setValue(i);
                    }
                }, t;
            }(), Xn = function() {
                function t(t, e, n) {
                    this._times = void 0, this._inputSampleResultCache = {
                        just: !1,
                        index: -1,
                        nextIndex: -1,
                        ratio: 0
                    }, this._values = void 0, this._prevValue = void 0, this._nextValue = void 0, this._resultValue = void 0, 
                    this._times = t, this._values = e, this._prevValue = new n(), this._nextValue = new n(), 
                    this._resultValue = new n();
                }
                return t.prototype.evaluate = function(t) {
                    var e = this._times, n = this._values, i = this._resultValue;
                    if (0 === e.length) return i;
                    var r = function(t, e, n) {
                        var i = t.length, r = t[0], a = t[i - 1];
                        if (e < r) n.just = !0, n.index = 0; else if (e > a) n.just = !0, n.index = i - 1; else {
                            var s = D(t, e);
                            if (s >= 0) n.just = !0, n.index = s; else {
                                var o = ~s, u = o - 1, h = t[u], l = t[o], c = (e - t[u]) / (l - h);
                                n.just = !1, n.index = u, n.nextIndex = o, n.ratio = c;
                            }
                        }
                        return n;
                    }(e, t, this._inputSampleResultCache);
                    return r.just ? n.get(r.index, i) : n.lerp(r.index, r.nextIndex, r.ratio, this._prevValue, this._nextValue, i), 
                    i;
                }, t;
            }(), Jn = {
                uint8: Uint8Array,
                uint16: Uint16Array
            };
            function Zn(t) {
                switch (t.BYTES_PER_ELEMENT) {
                  default:
                  case 4:
                    return Kn.FLOAT_32;

                  case 8:
                    return Kn.FLOAT_64;
                }
            }
            !function(t) {
                t[t.FLOAT_32 = 0] = "FLOAT_32", t[t.FLOAT_64 = 1] = "FLOAT_64";
            }(Kn || (Kn = {}));
            var $n, ti, ei, ni, ii, ri, ai, si, oi, ui, hi, li, ci, fi = A(ie + "QuantizedFloatArray")((Rn = function() {
                function t(t, e, n, i) {
                    void 0 === i && (i = 0), r(this, "originalPrecision", Nn, this), r(this, "min", Mn, this), 
                    r(this, "extent", Ln, this), r(this, "values", zn, this), this.originalPrecision = t, 
                    this.values = e, this.extent = n, this.min = i;
                }
                return t.prototype.toHashString = function() {
                    var t = this.originalPrecision, e = this.min, n = this.extent, i = this.values;
                    return t + " " + Vn(e) + " " + Vn(n) + " " + i.join(" ");
                }, o(t, [ {
                    key: "quantizationType",
                    get: function() {
                        switch (this.values.BYTES_PER_ELEMENT) {
                          default:
                          case 1:
                            return "uint8";

                          case 2:
                            return "uint16";
                        }
                    }
                } ]), t;
            }(), Nn = i((On = Rn).prototype, "originalPrecision", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Mn = i(On.prototype, "min", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ln = i(On.prototype, "extent", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), zn = i(On.prototype, "values", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), xn = On)) || xn;
            function pi(t, e) {
                return t.values[e] / (1 << t.values.BYTES_PER_ELEMENT) * t.extent + t.min;
            }
            function _i(t, e, n, i, r, a) {
                var s = new he();
                s.path = new ue().toHierarchy(i).toProperty(r);
                var o = a(s);
                return o ? {
                    runtimeBinding: o,
                    evaluator: new Xn(t, e, n)
                } : null;
            }
            function vi(t, e, n) {
                I.set(n, pi(t, 3 * e + 0), pi(t, 3 * e + 1), pi(t, 3 * e + 2));
            }
            function di(t, e, n) {
                k.set(n, pi(t, 4 * e + 0), pi(t, 4 * e + 1), pi(t, 4 * e + 2), pi(t, 4 * e + 3));
            }
            function mi() {
                return f.director.getAnimationManager();
            }
            var gi = Symbol("SearchForRootBonePath"), yi = Symbol("ExoticAnimation"), bi = e("A", A("cc.AnimationClip")((ci = li = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, r(e, "sample", ei, c(e)), 
                    r(e, "speed", ni, c(e)), r(e, "wrapMode", ii, c(e)), r(e, "enableTrsBlending", ri, c(e)), 
                    r(e, "_duration", ai, c(e)), r(e, "_hash", si, c(e)), e.frameRate = 0, r(e, "_tracks", oi, c(e)), 
                    r(e, "_exoticAnimation", ui, c(e)), e._legacyData = void 0, e._legacyDataDirty = !1, 
                    r(e, "_events", hi, c(e)), e._runtimeEvents = {
                        ratios: [],
                        eventGroups: []
                    }, e;
                }
                l(e, t), e.createWithSpriteFrames = function(t, n) {
                    var i = new e();
                    i.sample = n || i.sample, i.duration = t.length / i.sample;
                    var r = 1 / i.sample, a = new Ue();
                    return a.path = new ue().toComponent("cc.Sprite").toProperty("spriteFrame"), a.channels()[0].curve.assignSorted(t.map(function(t, e) {
                        return [ r * e, t ];
                    })), i.addTrack(a), i;
                };
                var i = e.prototype;
                return i.onLoaded = function() {
                    this.frameRate = this.sample, this.events = this._events;
                }, i.range = function() {
                    for (var t = {
                        min: 1 / 0,
                        max: -1 / 0
                    }, e = this._tracks, n = e.length, i = 0; i < n; ++i) {
                        var r = e[i].range();
                        t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max);
                    }
                    return t;
                }, i.getTrack = function(t) {
                    return this._tracks[t];
                }, i.addTrack = function(t) {
                    var e = this._tracks.length;
                    return this._tracks.push(t), e;
                }, i.removeTrack = function(t) {
                    this._tracks.splice(t, 1);
                }, i.clearTracks = function() {
                    this._tracks.length = 0;
                }, i.createEventEvaluator = function(t) {
                    return new Ii(t, this._runtimeEvents.ratios, this._runtimeEvents.eventGroups, this.wrapMode);
                }, i.createEvaluator = function(t) {
                    var e = this, n = t.target;
                    return this._createEvalWithBinder(n, function(i) {
                        if (!t.mask || !i.isMaskedOff(t.mask)) {
                            var r = i.createRuntimeBinding(n, e.enableTrsBlending ? t.pose : void 0, !1);
                            return null != r ? r : void 0;
                        }
                    }, t.rootMotion);
                }, i.destroy = function() {
                    var e;
                    return (null === (e = f.director.root) || void 0 === e ? void 0 : e.dataPoolManager) && f.director.root.dataPoolManager.releaseAnimationClip(this), 
                    at.destroy(this), t.prototype.destroy.call(this);
                }, i[st] = function(t, e, n) {
                    for (var i = 1 / e, r = this._collectAnimatedJoints(), a = r.length, s = {}, o = 0; o < a; ++o) s[r[o]] = {
                        transforms: Array.from({
                            length: n
                        }, function() {
                            return new q();
                        })
                    };
                    var u = r.reduce(function(t, e) {
                        return t[e] = new Ai(), t;
                    }, {});
                    for (var h in u) {
                        var l = u[h], c = h.lastIndexOf("/");
                        if (c >= 0) {
                            var f = h.substring(0, c), p = u[f];
                            p && (l.parent = p);
                        }
                    }
                    for (var _ = this._createEvalWithBinder(void 0, function(t) {
                        var e = t.parseTrsPath();
                        if (e) {
                            var n = u[e.node];
                            if (n) return Ci(n, e.property);
                        }
                    }, void 0), v = 0; v < n; ++v) {
                        var d = t + i * v;
                        _.evaluate(d);
                        for (var m = 0; m < a; ++m) {
                            var g = r[m];
                            q.copy(s[g].transforms[v], u[g].globalTransform);
                        }
                        for (var y = 0; y < a; ++y) {
                            var b = r[y];
                            u[b].invalidate();
                        }
                    }
                    return {
                        samples: e,
                        frames: n,
                        joints: s
                    };
                }, i.upgradeUntypedTracks = function(t) {
                    for (var e = [], n = [], i = this._tracks, r = i.length, a = 0; a < r; ++a) {
                        var s = i[a];
                        if (s instanceof en) {
                            var o = s.upgrade(t);
                            o && (e.push(o), n.push(s));
                        }
                    }
                    for (var u = n.length, h = 0; h < u; ++h) v.remove(i, n[h]);
                    i.push.apply(i, e);
                }, i[gi] = function() {
                    return this._searchForRootBonePath();
                }, i.getPropertyCurves = function() {
                    return this._getLegacyData().getPropertyCurves();
                }, i.updateEventDatas = function() {
                    this.events = this._events;
                }, i.hasEvents = function() {
                    return 0 !== this.events.length;
                }, i.syncLegacyData = function() {
                    this._legacyData && (this._fromLegacy(this._legacyData), this._legacyData = void 0);
                }, i._createEvalWithBinder = function(t, e, n) {
                    this._legacyDataDirty && (this._legacyDataDirty = !1, this.syncLegacyData());
                    var i, r = [];
                    n && (i = this._createRootMotionEvaluation(t, n, r));
                    for (var a, s = [], o = this._tracks, u = o.length, h = 0; h < u; ++h) {
                        var l = o[h];
                        if (!r.includes(l) && !Array.from(l.channels()).every(function(t) {
                            return 0 === t.curve.keyFramesCount;
                        })) {
                            var c = e(l[oe]);
                            if (c) {
                                var f = l[re](c);
                                s.push({
                                    binding: c,
                                    trackEval: f
                                });
                            }
                        }
                    }
                    return this._exoticAnimation && (a = this._exoticAnimation.createEvaluator(e)), 
                    new wi(s, a, i);
                }, i._createRootMotionEvaluation = function(t, e, i) {
                    if (t instanceof S) {
                        var r = this._searchForRootBonePath();
                        if (r) {
                            var a = t.getChildByPath(r);
                            if (a) {
                                for (var s = new Ti(), o = [], h = this._tracks, l = h.length, c = 0; c < l; ++c) {
                                    var f = h[c], p = f[oe].parseTrsPath();
                                    if (p && p.node === r) {
                                        i.push(f);
                                        var _ = Ci(s, p.property);
                                        if (_) {
                                            var v = f[re](_);
                                            o.push({
                                                binding: _,
                                                trackEval: v
                                            });
                                        }
                                    }
                                }
                                return new Ei(a, this._duration, s, o);
                            }
                            n(3924);
                        } else n(3923);
                    } else u(3920);
                }, i._searchForRootBonePath = function() {
                    var t = this._tracks.map(function(t) {
                        var e = t[oe].parseTrsPath();
                        if (e) {
                            var n = e.node;
                            return {
                                path: n,
                                rank: n.split("/").length
                            };
                        }
                        return {
                            path: "",
                            rank: 0
                        };
                    });
                    t.sort(function(t, e) {
                        return t.rank - e.rank;
                    });
                    var e = t.findIndex(function(t) {
                        return 0 !== t.rank;
                    });
                    if (e < 0) return "";
                    for (var n = t.length, i = t[e], r = !0, a = e + 1; a < n; ++a) {
                        var s = t[a];
                        if (s.rank !== i.rank) break;
                        if (s.path !== i.path) {
                            r = !1;
                            break;
                        }
                    }
                    return r ? i.path : "";
                }, i._getLegacyData = function() {
                    return this._legacyData || (this._legacyData = this._toLegacy()), this._legacyData;
                }, i._toLegacy = function() {
                    var t = new nn(this._duration);
                    return t.keys = [], t.curves = [], t.commonTargets = [], t;
                }, i._fromLegacy = function(t) {
                    for (var e = t.toTracks(), n = e.length, i = 0; i < n; ++i) this.addTrack(e[i]);
                }, i._collectAnimatedJoints = function() {
                    for (var t = new Set(), e = this._tracks, n = e.length, i = 0; i < n; ++i) {
                        var r = e[i][oe].parseTrsPath();
                        r && t.add(r.node);
                    }
                    if (this._exoticAnimation) for (var a = this._exoticAnimation.collectAnimatedJoints(), s = a.length, o = 0; o < s; ++o) t.add(a[o]);
                    return Array.from(t);
                }, o(e, [ {
                    key: "duration",
                    get: function() {
                        return this._duration;
                    },
                    set: function(t) {
                        this._duration = t;
                    }
                }, {
                    key: "tracksCount",
                    get: function() {
                        return this._tracks.length;
                    }
                }, {
                    key: "tracks",
                    get: function() {
                        return this._tracks;
                    }
                }, {
                    key: "hash",
                    get: function() {
                        var t, e;
                        if (this._hash) return this._hash;
                        var n = "Exotic:" + (null !== (t = null === (e = this._exoticAnimation) || void 0 === e ? void 0 : e.toHashString()) && void 0 !== t ? t : "");
                        return this._hash = d(n, 666);
                    }
                }, {
                    key: "events",
                    get: function() {
                        return this._events;
                    },
                    set: function(t) {
                        var e = this;
                        this._events = t;
                        for (var n = [], i = [], r = this.events.sort(function(t, e) {
                            return t.frame - e.frame;
                        }), a = r.length, s = function(t) {
                            var a = r[t], s = a.frame / e._duration, o = n.findIndex(function(t) {
                                return t === s;
                            });
                            o < 0 && (o = n.length, n.push(s), i.push({
                                events: []
                            })), i[o].events.push({
                                functionName: a.func,
                                parameters: a.params
                            });
                        }, o = 0; o < a; ++o) s(o);
                        this._runtimeEvents = {
                            ratios: n,
                            eventGroups: i
                        };
                    }
                }, {
                    key: yi,
                    get: function() {
                        return this._exoticAnimation;
                    }
                }, {
                    key: yi,
                    set: function(t) {
                        this._exoticAnimation = t;
                    }
                }, {
                    key: "keys",
                    get: function() {
                        return this._getLegacyData().keys;
                    }
                }, {
                    key: "keys",
                    set: function(t) {
                        this._legacyDataDirty = !0, this._getLegacyData().keys = t;
                    }
                }, {
                    key: "curves",
                    get: function() {
                        return this._legacyDataDirty = !0, this._getLegacyData().curves;
                    }
                }, {
                    key: "curves",
                    set: function(t) {
                        this._getLegacyData().curves = t;
                    }
                }, {
                    key: "commonTargets",
                    get: function() {
                        return this._getLegacyData().commonTargets;
                    }
                }, {
                    key: "commonTargets",
                    set: function(t) {
                        this._legacyDataDirty = !0, this._getLegacyData().commonTargets = t;
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this._getLegacyData().data;
                    }
                }, {
                    key: "eventGroups",
                    get: function() {
                        return this._runtimeEvents.eventGroups;
                    }
                } ]), e;
            }(K), li.WrapMode = G, ei = i((ti = ci).prototype, "sample", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 60;
                }
            }), ni = i(ti.prototype, "speed", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), ii = i(ti.prototype, "wrapMode", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return G.Normal;
                }
            }), ri = i(ti.prototype, "enableTrsBlending", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), ai = i(ti.prototype, "_duration", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), si = i(ti.prototype, "_hash", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), oi = i(ti.prototype, "_tracks", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), ui = i(ti.prototype, "_exoticAnimation", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), hi = i(ti.prototype, "_events", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), $n = ti)) || $n);
            f.AnimationClip = bi;
            var wi = function() {
                function t(t, e, n) {
                    this._exoticAnimationEvaluator = void 0, this._trackEvalStatues = [], this._rootMotionEvaluation = void 0, 
                    this._trackEvalStatues = t, this._exoticAnimationEvaluator = e, this._rootMotionEvaluation = n;
                }
                var e = t.prototype;
                return e.evaluate = function(t) {
                    for (var e = this._trackEvalStatues, n = this._exoticAnimationEvaluator, i = e.length, r = 0; r < i; ++r) {
                        var a = e[r], s = a.trackEval, o = a.binding, u = s.evaluate(t, o);
                        o.setValue(u);
                    }
                    n && n.evaluate(t);
                }, e.evaluateRootMotion = function(t, e) {
                    var n = this._rootMotionEvaluation;
                    n && n.evaluate(t, e);
                }, t;
            }(), Ti = function() {
                function t() {
                    this.position = new I(), this.scale = new I(1, 1, 1), this.rotation = new k(), this.eulerAngles = new I();
                }
                return t.prototype.getTransform = function(t) {
                    q.fromRTS(t, this.rotation, this.position, this.scale);
                }, t;
            }(), Ai = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).parent = null, e._dirty = !0, 
                    e._transform = new q(), e;
                }
                return l(e, t), e.prototype.invalidate = function() {
                    this._dirty = !0;
                }, o(e, [ {
                    key: "globalTransform",
                    get: function() {
                        var t = this._transform;
                        return this._dirty && (this._dirty = !1, q.fromRTS(t, this.rotation, this.position, this.scale), 
                        this.parent && q.multiply(t, this.parent.globalTransform, t)), this._transform;
                    }
                } ]), e;
            }(Ti), Si = new q(), Ei = function() {
                function t(t, e, n, i) {
                    this._initialTransformCache = new q(), this._clipEndTransformCache = new q(), this._startTransformCache = new q(), 
                    this._endTransformCache = new q(), this._motionTransformCache = new q(), this._translationMotionCache = new I(), 
                    this._rotationMotionCache = new k(), this._scaleMotionCache = new I(), this._rootBone = t, 
                    this._duration = e, this._boneTransform = n, this._trackEvalStatuses = i;
                }
                var e = t.prototype;
                return e.evaluate = function(t, e) {
                    var n = this._calcMotionTransform(t, e, this._motionTransformCache), i = this._translationMotionCache, r = this._rotationMotionCache, a = this._scaleMotionCache, s = this._rootBone;
                    q.toRTS(n, r, i, a), I.add(i, i, s.position), s.setPosition(i), k.multiply(r, r, s.rotation), 
                    s.setRotation(r), I.multiply(a, a, s.scale), s.setScale(a);
                }, e._calcMotionTransform = function(t, e, n) {
                    var i = this._duration, r = i - t, a = this._evaluateAt(t, this._startTransformCache);
                    if (e < r) {
                        var s = this._evaluateAt(t + e, this._endTransformCache);
                        ki(n, a, s);
                    } else {
                        q.identity(n);
                        var o = function(t, e) {
                            ki(Si, t, e), q.multiply(n, n, Si);
                        }, u = e - r, h = Math.floor(u / i), l = u - h * i, c = this._evaluateAt(0, this._initialTransformCache), f = this._evaluateAt(i, this._clipEndTransformCache), p = this._evaluateAt(l, this._endTransformCache);
                        o(a, f), ki(Si, c, f);
                        for (var _ = 0; _ < h; ++_) q.multiply(n, n, Si);
                        o(c, p);
                    }
                    return n;
                }, e._evaluateAt = function(t, e) {
                    for (var n = this._trackEvalStatuses, i = n.length, r = 0; r < i; ++r) {
                        var a = n[r], s = a.trackEval, o = a.binding, u = s.evaluate(t, o);
                        o.setValue(u);
                    }
                    return this._boneTransform.getTransform(e), e;
                }, t;
            }();
            function ki(t, e, n) {
                q.invert(t, e), q.multiply(t, n, t);
            }
            function Ci(t, e) {
                switch (e) {
                  default:
                    return;

                  case "position":
                    return {
                        setValue: function(e) {
                            I.copy(t.position, e);
                        }
                    };

                  case "rotation":
                    return {
                        setValue: function(e) {
                            k.copy(t.rotation, e);
                        }
                    };

                  case "scale":
                    return {
                        setValue: function(e) {
                            I.copy(t.scale, e);
                        }
                    };

                  case "eulerAngles":
                    return {
                        setValue: function(e) {
                            I.copy(t.eulerAngles, e);
                        }
                    };
                }
            }
            var Ii = function() {
                function t(t, e, n, i) {
                    this._lastFrameIndex = -1, this._lastIterations = 0, this._lastDirection = 0, this._ignoreIndex = -1, 
                    this._sampled = !1, this._targetNode = t, this._ratios = e, this._eventGroups = n, 
                    this._wrapMode = i;
                }
                var e = t.prototype;
                return e.setWrapMode = function(t) {
                    this._wrapMode = t;
                }, e.ignore = function(t, e) {
                    this._ignoreIndex = -1, this._sampled = !1;
                    var n = xi(t, this._ratios);
                    n < 0 && (n = ~n - 1, e < 0 && (n += 1), this._ignoreIndex = n);
                }, e.sample = function(t, e, n) {
                    var i = this._eventGroups.length, r = xi(t, this._ratios);
                    if (r < 0 && (r = ~r - 1, e < 0 && (r += 1)), this._ignoreIndex !== r && (this._ignoreIndex = -1), 
                    !this._sampled) return this._sampled = !0, this._doFire(r, !1), this._lastFrameIndex = r, 
                    this._lastIterations = n, void (this._lastDirection = e);
                    var a = this._wrapMode, s = Pi(n), o = Pi(this._lastIterations), u = this._lastFrameIndex, h = this._lastDirection, l = -1 !== o && s !== o;
                    if (u === r && l && 1 === i) this._doFire(0, !1); else if (u !== r || l) {
                        e = h;
                        do {
                            if (u !== r) {
                                if (-1 === e && 0 === u && r > 0 ? ((a & Y.PingPong) === Y.PingPong ? e *= -1 : u = i, 
                                o++) : 1 === e && u === i - 1 && r < i - 1 && ((a & Y.PingPong) === Y.PingPong ? e *= -1 : u = -1, 
                                o++), u === r) break;
                                if (o > s) break;
                            }
                            u += e, this._doFire(u, !0);
                        } while (u !== r && u > -1 && u < i);
                    }
                    this._lastFrameIndex = r, this._lastIterations = n, this._lastDirection = e;
                }, e._doFire = function(t, e) {
                    e ? mi().pushDelayEvent(this._checkAndFire, this, [ t ]) : this._checkAndFire(t);
                }, e._checkAndFire = function(t) {
                    if (this._targetNode && this._targetNode.isValid) {
                        var e = this._eventGroups;
                        if (!(t < 0 || t >= e.length || this._ignoreIndex === t)) for (var n = e[t], i = this._targetNode.components, r = n.events.length, a = 0; a < r; ++a) for (var s = n.events[a], o = s.functionName, u = i.length, h = 0; h < u; ++h) {
                            var l = i[h], c = l[o];
                            "function" == typeof c && c.apply(l, s.parameters);
                        }
                    }
                }, t;
            }();
            function Pi(t) {
                return t - (0 | t) == 0 && (t -= 1), 0 | t;
            }
            function xi(t, e) {
                return D(e, t);
            }
            var Oi, Ni = function() {
                function t() {
                    this._isPlaying = !1, this._isPaused = !1, this._stepOnce = !1;
                }
                var e = t.prototype;
                return e.play = function() {
                    this._isPlaying ? this._isPaused ? (this._isPaused = !1, this.onResume()) : this.onError(_(3912)) : (this._isPlaying = !0, 
                    this.onPlay());
                }, e.stop = function() {
                    this._isPlaying && (this._isPlaying = !1, this.onStop(), this._isPaused = !1);
                }, e.pause = function() {
                    this._isPlaying && !this._isPaused && (this._isPaused = !0, this.onPause());
                }, e.resume = function() {
                    this._isPlaying && this._isPaused && (this._isPaused = !1, this.onResume());
                }, e.step = function() {
                    this.pause(), this._stepOnce = !0, this._isPlaying || this.play();
                }, e.update = function() {}, e.onPlay = function() {}, e.onPause = function() {}, 
                e.onResume = function() {}, e.onStop = function() {}, e.onError = function() {}, 
                o(t, [ {
                    key: "isPlaying",
                    get: function() {
                        return this._isPlaying;
                    }
                }, {
                    key: "isPaused",
                    get: function() {
                        return this._isPaused;
                    }
                }, {
                    key: "isMotionless",
                    get: function() {
                        return !this.isPlaying || this.isPaused;
                    }
                } ]), t;
            }(), Mi = function() {
                function t(t) {
                    this.weight = 0, this._pose = void 0, this._blendStateWriters = [], this._pose = t;
                }
                var e = t.prototype;
                return e.destroy = function() {
                    for (var t = 0; t < this._blendStateWriters.length; ++t) this._pose.destroyWriter(this._blendStateWriters[t]);
                    this._blendStateWriters.length = 0;
                }, e.createPoseWriter = function(t, e, n) {
                    var i = this._pose.createWriter(t, e, this, n);
                    return this._blendStateWriters.push(i), i;
                }, t;
            }();
            !function(t) {
                t.PLAY = "play", t.STOP = "stop", t.PAUSE = "pause", t.RESUME = "resume", t.LASTFRAME = "lastframe", 
                t.FINISHED = "finished";
            }(Oi || (Oi = {})), m(Oi);
            var Li = e("a", function(t) {
                function e(e, n) {
                    var i;
                    return void 0 === n && (n = ""), (i = t.call(this) || this).duration = 1, i.speed = 1, 
                    i.time = 0, i.frameRate = 0, i._targetNode = null, i._curveLoaded = !1, i._clip = void 0, 
                    i._useSimpleProcess = !1, i._target = null, i._wrapMode = G.Normal, i._repeatCount = 1, 
                    i._delay = 0, i._delayTime = 0, i._currentFramePlayed = !1, i._name = void 0, i._lastIterations = NaN, 
                    i._lastWrapInfo = null, i._wrappedInfo = new X(), i._allowLastFrame = !1, i._blendStateWriterHost = {
                        weight: 0
                    }, i._playbackDuration = 0, i._invDuration = 1, i._poseOutput = null, i._weight = 1, 
                    i._clipEval = void 0, i._clipEventEval = void 0, i._doNotCreateEval = !1, i._clip = e, 
                    i._name = n || e && e.name, i._playbackRange = {
                        min: 0,
                        max: e.duration
                    }, i._playbackDuration = e.duration, e.duration || g("Clip " + e.name + " has zero duration."), 
                    i;
                }
                l(e, t);
                var n = e.prototype;
                return n.initialize = function(t, e, n) {
                    if (!this._curveLoaded) {
                        this._curveLoaded = !0, this._poseOutput && (this._poseOutput.destroy(), this._poseOutput = null), 
                        this._clipEval && (this._clipEval = void 0), this._targetNode = t;
                        var i = this._clip;
                        if (this.duration = i.duration, this._invDuration = 1 / this.duration, this.speed = i.speed, 
                        this.wrapMode = i.wrapMode, this.frameRate = i.sample, this._playbackRange.min = 0, 
                        this._playbackRange.max = i.duration, this._playbackDuration = i.duration, (this.wrapMode & Y.Loop) === Y.Loop ? this.repeatCount = 1 / 0 : this.repeatCount = 1, 
                        !this._doNotCreateEval) {
                            var r, a, s, o = null !== (r = null != e ? e : null === (a = mi()) || void 0 === a ? void 0 : a.blendState) && void 0 !== r ? r : null;
                            o && (this._poseOutput = new Mi(o)), this._clipEval = i.createEvaluator({
                                target: t,
                                pose: null !== (s = this._poseOutput) && void 0 !== s ? s : void 0,
                                mask: n
                            });
                        }
                        this._clipEventEval = i.createEventEvaluator(this._targetNode);
                    }
                }, n.destroy = function() {
                    this.isMotionless || mi().removeAnimation(this), this._poseOutput && (this._poseOutput.destroy(), 
                    this._poseOutput = null), this._clipEval = void 0;
                }, n.emit = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    mi().pushDelayEvent(this._emit, this, e);
                }, n.on = function(t, e, n) {
                    return this._target && this._target.isValid ? this._target.on(t, e, n) : null;
                }, n.once = function(t, e, n) {
                    return this._target && this._target.isValid ? this._target.once(t, e, n) : null;
                }, n.off = function(t, e, n) {
                    this._target && this._target.isValid && this._target.off(t, e, n);
                }, n.allowLastFrameEvent = function(t) {
                    this._allowLastFrame = t;
                }, n._setEventTarget = function(t) {
                    this._target = t;
                }, n.setTime = function(t) {
                    this._currentFramePlayed = !1, this.time = t || 0;
                    var e, n = this.getWrappedInfo(t, this._wrappedInfo);
                    null === (e = this._clipEventEval) || void 0 === e || e.ignore(n.ratio, n.direction);
                }, n.update = function(t) {
                    this._delayTime > 0 && (this._delayTime -= t, this._delayTime > 0) || (this._currentFramePlayed ? this.time += t * this.speed : this._currentFramePlayed = !0, 
                    this._process());
                }, n.sample = function() {
                    var t = this.getWrappedInfo(this.time, this._wrappedInfo);
                    return this._sampleCurves(t.time), this._sampleEvents(t), t;
                }, n.onPlay = function() {
                    this.setTime(this._getPlaybackStart()), this._delayTime = this._delay, this._onReplayOrResume(), 
                    this.emit(Oi.PLAY, this);
                }, n.onStop = function() {
                    this.isPaused || this._onPauseOrStop(), this.emit(Oi.STOP, this);
                }, n.onResume = function() {
                    this._onReplayOrResume(), this.emit(Oi.RESUME, this);
                }, n.onPause = function() {
                    this._onPauseOrStop(), this.emit(Oi.PAUSE, this);
                }, n._sampleCurves = function(t) {
                    var e = this._poseOutput, n = this._clipEval;
                    e && (e.weight = this.weight), n && n.evaluate(t);
                }, n._process = function() {
                    this._useSimpleProcess ? this.simpleProcess() : this.process();
                }, n.process = function() {
                    var t, e = this.sample();
                    this._allowLastFrame && (t = this._lastWrapInfo ? this._lastWrapInfo : this._lastWrapInfo = new X(e), 
                    this.repeatCount > 1 && (0 | e.iterations) > (0 | t.iterations) && this.emit(Oi.LASTFRAME, this), 
                    t.set(e)), e.stopped && (this.stop(), this.emit(Oi.FINISHED, this));
                }, n.simpleProcess = function() {
                    var t = this._playbackRange.min, e = this._playbackDuration, n = this.time % e;
                    n < 0 && (n += e);
                    var i = (t + n) * this._invDuration;
                    this._sampleCurves(t + n), this._sampleEvents(this.getWrappedInfo(this.time, this._wrappedInfo)), 
                    this._allowLastFrame && (Number.isNaN(this._lastIterations) && (this._lastIterations = i), 
                    (this.time > 0 && this._lastIterations > i || this.time < 0 && this._lastIterations < i) && this.emit(Oi.LASTFRAME, this), 
                    this._lastIterations = i);
                }, n._needReverse = function(t) {
                    var e = this.wrapMode, n = !1;
                    return (e & Y.PingPong) === Y.PingPong && (t - (0 | t) == 0 && t > 0 && (t -= 1), 
                    1 & t && (n = !n)), (e & Y.Reverse) === Y.Reverse && (n = !n), n;
                }, n.getWrappedInfo = function(t, e) {
                    e = e || new X();
                    var n = this._getPlaybackStart(), i = this._getPlaybackEnd() - n, r = !1, a = this.repeatCount, s = (t -= n) > 0 ? t / i : -t / i;
                    if (s >= a) {
                        s = a, r = !0;
                        var o = a - (0 | a);
                        0 === o && (o = 1), t = o * i * (t > 0 ? 1 : -1);
                    }
                    if (t > i) {
                        var u = t % i;
                        t = 0 === u ? i : u;
                    } else t < 0 && 0 != (t %= i) && (t += i);
                    var h = !1, l = this._wrapMode & Y.ShouldWrap;
                    l && (h = this._needReverse(s));
                    var c = h ? -1 : 1;
                    return this.speed < 0 && (c *= -1), l && h && (t = i - t), e.time = n + t, e.ratio = e.time / this.duration, 
                    e.direction = c, e.stopped = r, e.iterations = s, e;
                }, n._getPlaybackStart = function() {
                    return this._playbackRange.min;
                }, n._getPlaybackEnd = function() {
                    return this._playbackRange.max;
                }, n._sampleEvents = function(t) {
                    var e;
                    null === (e = this._clipEventEval) || void 0 === e || e.sample(t.ratio, t.direction, t.iterations);
                }, n._emit = function(t, e) {
                    this._target && this._target.isValid && this._target.emit(t, t, e);
                }, n._onReplayOrResume = function() {
                    mi().addAnimation(this);
                }, n._onPauseOrStop = function() {
                    mi().removeAnimation(this);
                }, o(e, [ {
                    key: "clip",
                    get: function() {
                        return this._clip;
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name;
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this.duration;
                    }
                }, {
                    key: "wrapMode",
                    get: function() {
                        return this._wrapMode;
                    },
                    set: function(t) {
                        var e;
                        this._wrapMode = t, this.time = 0, t & Y.Loop ? this.repeatCount = 1 / 0 : this.repeatCount = 1, 
                        null === (e = this._clipEventEval) || void 0 === e || e.setWrapMode(t);
                    }
                }, {
                    key: "repeatCount",
                    get: function() {
                        return this._repeatCount;
                    },
                    set: function(t) {
                        this._repeatCount = t;
                        var e = this._wrapMode & Y.ShouldWrap, n = (this.wrapMode & Y.Reverse) === Y.Reverse;
                        this._useSimpleProcess = t === 1 / 0 && !e && !n;
                    }
                }, {
                    key: "delay",
                    get: function() {
                        return this._delay;
                    },
                    set: function(t) {
                        this._delayTime = this._delay = t;
                    }
                }, {
                    key: "playbackRange",
                    get: function() {
                        return this._playbackRange;
                    },
                    set: function(t) {
                        s(t.max > t.min), this._playbackRange.min = Math.max(t.min, 0), this._playbackRange.max = Math.min(t.max, this.duration), 
                        this._playbackDuration = this._playbackRange.max - this._playbackRange.min, this.setTime(0);
                    }
                }, {
                    key: "current",
                    get: function() {
                        return this.getWrappedInfo(this.time).time;
                    }
                }, {
                    key: "ratio",
                    get: function() {
                        return this.current / this.duration;
                    }
                }, {
                    key: "weight",
                    get: function() {
                        return this._weight;
                    },
                    set: function(t) {
                        this._weight = t, this._poseOutput && (this._poseOutput.weight = t);
                    }
                }, {
                    key: "curveLoaded",
                    get: function() {
                        return this._curveLoaded;
                    }
                } ]), e;
            }(Ni));
            f.AnimationState = Li;
            var zi, Ri, Fi, Di, Ui, Vi, Bi, Wi, Qi, Hi, ji, qi, Ki, Gi, Yi, Xi, Ji, Zi = function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this) || this)._managedStates = [], n._fadings = [], n._scheduled = !1, 
                    n._scheduler = null != e ? e : mi(), n;
                }
                l(e, t);
                var n = e.prototype;
                return n.update = function(t) {
                    if (!this.isMotionless) {
                        var e = this._managedStates, n = this._fadings;
                        if (1 === e.length && 1 === n.length) {
                            var i = e[0].state;
                            i && (i.weight = 1);
                        } else this._calculateWeights(t);
                        1 === e.length && 1 === n.length && this._unscheduleThis();
                    }
                }, n.crossFade = function(t, e) {
                    var n;
                    0 === this._managedStates.length && (e = 0), 0 === e && this.clear();
                    var i = this._managedStates.find(function(e) {
                        return e.state === t;
                    });
                    i ? (null === (n = i.state) || void 0 === n ? void 0 : n.isMotionless) && i.state.play() : (i = {
                        state: t,
                        reference: 0
                    }, t && t.play(), this._managedStates.push(i)), ++i.reference, this._fadings.unshift({
                        easeDuration: e,
                        easeTime: 0,
                        target: i
                    }), this.isMotionless || this._scheduleThis();
                }, n.clear = function() {
                    for (var t = 0; t < this._managedStates.length; ++t) {
                        var e = this._managedStates[t].state;
                        e && e.stop();
                    }
                    this._managedStates.length = 0, this._fadings.length = 0;
                }, n.onPlay = function() {
                    t.prototype.onPlay.call(this), this._scheduleThis();
                }, n.onPause = function() {
                    t.prototype.onPause.call(this);
                    for (var e = 0; e < this._managedStates.length; ++e) {
                        var n = this._managedStates[e].state;
                        n && n.pause();
                    }
                    this._unscheduleThis();
                }, n.onResume = function() {
                    t.prototype.onResume.call(this);
                    for (var e = 0; e < this._managedStates.length; ++e) {
                        var n = this._managedStates[e].state;
                        n && n.resume();
                    }
                    this._scheduleThis();
                }, n.onStop = function() {
                    t.prototype.onStop.call(this), this.clear();
                }, n._calculateWeights = function(t) {
                    for (var e = this._managedStates, n = this._fadings, i = 0; i < e.length; ++i) {
                        var r = e[i].state;
                        r && (r.weight = 0);
                    }
                    for (var a = 1, s = n.length, o = 0; o < n.length; ++o) {
                        var u = n[o];
                        u.easeTime += t;
                        var h = 0 === u.easeDuration ? 1 : J(u.easeTime / u.easeDuration), l = h * a;
                        if (a *= 1 - h, u.target.state && (u.target.state.weight += l), u.easeTime >= u.easeDuration) {
                            s = o + 1, u.easeTime = u.easeDuration;
                            break;
                        }
                    }
                    if (s !== n.length) {
                        for (var c = s; c < n.length; ++c) {
                            var f = n[c];
                            --f.target.reference, f.target.reference <= 0 && (f.target.state && f.target.state.stop(), 
                            y(this._managedStates, f.target));
                        }
                        n.splice(s);
                    }
                }, n._scheduleThis = function() {
                    this._scheduled || (this._scheduler.addCrossFade(this), this._scheduled = !0);
                }, n._unscheduleThis = function() {
                    this._scheduled && (this._scheduler.removeCrossFade(this), this._scheduled = !1);
                }, e;
            }(Ni), $i = e("l", (zi = A("cc.Animation"), Ri = tt(), Fi = et(99), Di = nt(), Ui = Z([ bi ]), 
            Vi = it(), Bi = Z(bi), Wi = it(), Qi = it(), Hi = Z([ bi ]), zi(ji = Ri(ji = Fi(ji = $(ji = Di((Ji = Xi = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, r(e, "playOnLoad", Ki, c(e)), 
                    e._crossFade = new Zi(), e._nameToState = b(!0), r(e, "_clips", Gi, c(e)), r(e, "_defaultClip", Yi, c(e)), 
                    e._hasBeenPlayed = !1, e;
                }
                l(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    for (var t in this.clips = this._clips, this._nameToState) this._nameToState[t].initialize(this.node);
                }, i.start = function() {
                    this.playOnLoad && !this._hasBeenPlayed && this._defaultClip && this.crossFade(this._defaultClip.name, 0);
                }, i.onEnable = function() {
                    this._crossFade.resume();
                }, i.onDisable = function() {
                    this._crossFade.pause();
                }, i.onDestroy = function() {
                    for (var t in this._crossFade.stop(), this._nameToState) this._nameToState[t].destroy();
                    this._nameToState = b(!0);
                }, i.play = function(t) {
                    if (this._hasBeenPlayed = !0, !t) {
                        if (!this._defaultClip) return;
                        t = this._defaultClip.name;
                    }
                    this.crossFade(t, 0);
                }, i.crossFade = function(t, e) {
                    void 0 === e && (e = .3), this._hasBeenPlayed = !0;
                    var n = this._nameToState[t];
                    n && this.doPlayOrCrossFade(n, e);
                }, i.pause = function() {
                    this._crossFade.pause();
                }, i.resume = function() {
                    this._crossFade.resume();
                }, i.stop = function() {
                    this._crossFade.stop();
                }, i.getState = function(t) {
                    var e = this._nameToState[t];
                    return e && !e.curveLoaded && e.initialize(this.node), e || null;
                }, i.createState = function(t, e) {
                    return e = e || t.name, this.removeState(e), this._doCreateState(t, e);
                }, i.removeState = function(t) {
                    var e = this._nameToState[t];
                    e && (e.allowLastFrameEvent(!1), e.stop(), delete this._nameToState[t]);
                }, i.addClip = function(t, e) {
                    return w(this._clips, t) || this._clips.push(t), this.createState(t, e);
                }, i.removeClip = function(t, e) {
                    var i;
                    for (var r in this._nameToState) {
                        var a = this._nameToState[r];
                        if (a.clip === t) {
                            i = a;
                            break;
                        }
                    }
                    if (t === this._defaultClip) {
                        if (!e) return void n(3902);
                        this._defaultClip = null;
                    }
                    if (i && i.isPlaying) {
                        if (!e) return void n(3903);
                        i.stop();
                    }
                    this._clips = this._clips.filter(function(e) {
                        return e !== t;
                    }), i && delete this._nameToState[i.name];
                }, i.on = function(e, n, i, r) {
                    var a = t.prototype.on.call(this, e, n, i, r);
                    return e === Oi.LASTFRAME && this._syncAllowLastFrameEvent(), a;
                }, i.once = function(e, n, i) {
                    var r = t.prototype.once.call(this, e, n, i);
                    return e === Oi.LASTFRAME && this._syncAllowLastFrameEvent(), r;
                }, i.off = function(e, n, i) {
                    t.prototype.off.call(this, e, n, i), e === Oi.LASTFRAME && this._syncDisallowLastFrameEvent();
                }, i._createState = function(t, e) {
                    return new Li(t, e);
                }, i._doCreateState = function(t, e) {
                    var n = this._createState(t, e);
                    return n._setEventTarget(this), n.allowLastFrameEvent(this.hasEventListener(Oi.LASTFRAME)), 
                    this.node && n.initialize(this.node), this._nameToState[n.name] = n, n;
                }, i.doPlayOrCrossFade = function(t, e) {
                    this._crossFade.play(), this._crossFade.crossFade(t, e);
                }, i._removeStateOfAutomaticClip = function(t) {
                    for (var e in this._nameToState) {
                        var n = this._nameToState[e];
                        tr(t, n.clip) && (n.stop(), delete this._nameToState[e]);
                    }
                }, i._syncAllowLastFrameEvent = function() {
                    if (this.hasEventListener(Oi.LASTFRAME)) for (var t in this._nameToState) this._nameToState[t].allowLastFrameEvent(!0);
                }, i._syncDisallowLastFrameEvent = function() {
                    if (!this.hasEventListener(Oi.LASTFRAME)) for (var t in this._nameToState) this._nameToState[t].allowLastFrameEvent(!1);
                }, o(e, [ {
                    key: "clips",
                    get: function() {
                        return this._clips;
                    },
                    set: function(t) {
                        var e = this;
                        this._crossFade && this._crossFade.clear();
                        for (var n, i = h(this._clips); !(n = i()).done; ) {
                            var r = n.value;
                            r && this._removeStateOfAutomaticClip(r);
                        }
                        for (var a, s = h(t); !(a = s()).done; ) {
                            var o = a.value;
                            o && this.createState(o);
                        }
                        var u = t.find(function(t) {
                            return tr(t, e._defaultClip);
                        });
                        this._defaultClip = u || null, this._clips = t;
                    }
                }, {
                    key: "defaultClip",
                    get: function() {
                        return this._defaultClip;
                    },
                    set: function(t) {
                        this._defaultClip = t, t && (this._clips.findIndex(function(e) {
                            return tr(e, t);
                        }) >= 0 || (this._clips.push(t), this.createState(t)));
                    }
                } ]), e;
            }(T(rt)), Xi.EventType = Oi, i((qi = Ji).prototype, "clips", [ Ui, Vi ], Object.getOwnPropertyDescriptor(qi.prototype, "clips"), qi.prototype), 
            i(qi.prototype, "defaultClip", [ Bi, Wi ], Object.getOwnPropertyDescriptor(qi.prototype, "defaultClip"), qi.prototype), 
            Ki = i(qi.prototype, "playOnLoad", [ E, Qi ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Gi = i(qi.prototype, "_clips", [ Hi ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Yi = i(qi.prototype, "_defaultClip", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ji = qi)) || ji) || ji) || ji) || ji) || ji));
            function tr(t, e) {
                return t === e || !!t && !!e && t._uuid === e._uuid && t._uuid;
            }
            f.Animation = $i, f.AnimationComponent = $i, a.setClassAlias($i, "cc.AnimationComponent");
        }
    };
});