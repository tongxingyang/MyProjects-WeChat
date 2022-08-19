require("../@babel/runtime/helpers/Objectentries");

var t = require("../@babel/runtime/helpers/typeof");

System.register([ "./texture-barrier-60b5983b.js", "./json-asset-933a1d4c.js", "./renderable-component-7c6600ed.js", "./deprecated-26630860.js", "./deprecated-ef6bb945.js", "./skeletal-animation-utils-121f35a2.js", "./animation-component-aa8a7f84.js" ], function(e) {
    var n, i, r, a, o, s, u, l, c, h, f, p, d, _, g, v, m, y, b, T, E, w, S, A, M, k, C, N, O, R, I, x, P, L, F, z, U, B, W, D, V, G, j, H, Q, q, Y, X, Z, J, $, K, tt, et, nt, it, rt, at, ot, st, ut, lt, ct, ht, ft, pt;
    return {
        setters: [ function(t) {
            n = t.T, i = t.w, r = t.l, a = t.c0, o = t.i, s = t.c1, u = t.bW, l = t.bU, c = t.bT, 
            h = t.ce, f = t.cJ, p = t.b$, d = t.cK, _ = t.cI, g = t.cL, v = t.cA, m = t.bw, 
            y = t.d, b = t.cp, T = t.f, E = t.cB;
        }, function(t) {
            w = t.bW, S = t.x, A = t.v, M = t.bo, k = t.dA, C = t.bX, N = t.dB, O = t.aH, R = t.dC, 
            I = t.aL, x = t.bZ, P = t.V, L = t.Q, F = t.b$, z = t.W, U = t.dk, B = t.ch, W = t.bm, 
            D = t.dD;
            var n = {};
            n.bezier = t.dE, n.bezierByTime = t.dF, n.easing = t.dD, e(n);
        }, function() {}, function() {}, function(t) {
            V = t.d, G = t.D, j = t.a;
        }, function(t) {
            H = t.b, Q = t.d, q = t.a;
            var n = {};
            n.getPathFromRoot = t.c, n.getWorldTransformUntilRoot = t.g, e(n);
        }, function(t) {
            Y = t.C, X = t.A, Z = t.a, J = t.T, $ = t.b, K = t.R, tt = t.V, et = t.Q, nt = t.c, 
            it = t.S, rt = t.O, at = t.i, ot = t.d, st = t.H, ut = t.e, lt = t.f, ct = t.g, 
            ht = t.h, ft = t.j, pt = t.k;
            var n = {};
            n.AnimCurve = t.n, n.Animation = t.l, n.AnimationClip = t.A, n.AnimationComponent = t.l, 
            n.AnimationState = t.a, n.EventInfo = t.E, n.RatioSampler = t.m, n.computeRatioByType = t.o, 
            n.sampleAnimationCurve = t.s, e(n);
        } ],
        execute: function() {
            var dt, _t, gt, vt, mt, yt, bt, Tt, Et, wt, St, At, Mt, kt, Ct, Nt, Ot, Rt, It = w("cc.animation.UniformProxyFactory")((yt = function() {
                function t(t, e) {
                    s(this, "passIndex", gt, this), s(this, "uniformName", vt, this), s(this, "channelIndex", mt, this), 
                    this.passIndex = e || 0, this.uniformName = t || "";
                }
                return t.prototype.forTarget = function(t) {
                    var e = t.passes[this.passIndex], a = e.getHandle(this.uniformName);
                    if (!a) throw new Error('Material "' + t.name + '" has no uniform "' + this.uniformName + '"');
                    if (S.getTypeFromHandle(a) < n.SAMPLER1D) {
                        var s = void 0 === this.channelIndex ? a : e.getHandle(this.uniformName, this.channelIndex, n.FLOAT);
                        if (!s) throw new Error('Uniform "' + this.uniformName + " (in material " + t.name + ") has no channel " + this.channelIndex + '"');
                        return function(t, e) {
                            for (var n, i = o(t.shaderInfo.blocks); !(n = i()).done; ) for (var r, a = n.value, s = o(a.members); !(r = s()).done; ) {
                                var u = r.value;
                                if (u.name === e) return u.count > 1;
                            }
                            return !1;
                        }(e, this.uniformName) ? {
                            set: function(t) {
                                e.setUniformArray(s, t);
                            }
                        } : {
                            set: function(t) {
                                e.setUniform(s, t);
                            }
                        };
                    }
                    var u = S.getBindingFromHandle(a), l = e.properties[this.uniformName], c = l && l.value ? l.value + "-texture" : A(l.type), h = M.get(c);
                    return h || (i("Illegal texture default value: " + c + "."), h = M.get("default-texture")), 
                    {
                        set: function(t) {
                            t || (t = h);
                            var n = t.getGFXTexture();
                            n && n.width && n.height && (e.bindTexture(u, n), t instanceof k && e.bindSampler(u, r.game._gfxDevice.getSampler(t.getSamplerInfo())));
                        }
                    };
                }, t;
            }(), gt = a((_t = yt).prototype, "passIndex", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), vt = a(_t.prototype, "uniformName", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), mt = a(_t.prototype, "channelIndex", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {}
            }), dt = _t)) || dt, xt = w("cc.animation.MorphWeightValueProxy")((St = function() {
                function t() {
                    s(this, "subMeshIndex", Et, this), s(this, "shapeIndex", wt, this);
                }
                return t.prototype.forTarget = function(t) {
                    var e = this;
                    return {
                        set: function(n) {
                            t.setWeight(n, e.subMeshIndex, e.shapeIndex);
                        }
                    };
                }, t;
            }(), Et = a((Tt = St).prototype, "subMeshIndex", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), wt = a(Tt.prototype, "shapeIndex", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), bt = Tt)) || bt, Pt = w("cc.animation.MorphWeightsValueProxy")((Ct = function() {
                function t() {
                    s(this, "subMeshIndex", kt, this);
                }
                return t.prototype.forTarget = function(t) {
                    var e = this;
                    return {
                        set: function(n) {
                            t.setWeights(n, e.subMeshIndex);
                        }
                    };
                }, t;
            }(), kt = a((Mt = Ct).prototype, "subMeshIndex", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), At = Mt)) || At, Lt = w("cc.animation.MorphWeightsAllValueProxy")(Nt = function() {
                function t() {}
                return t.prototype.forTarget = function(t) {
                    return {
                        set: function(e) {
                            for (var n, i, r = null !== (n = null === (i = t.mesh) || void 0 === i ? void 0 : i.struct.primitives.length) && void 0 !== n ? n : 0, a = 0; a < r; ++a) t.setWeights(e, a);
                        }
                    };
                }, t;
            }()) || Nt, Ft = Symbol("[[Owner]]");
            function zt(t, e) {
                u(t[Ft] === e);
            }
            !function(t) {
                t[t.FLOAT = 0] = "FLOAT", t[t.BOOLEAN = 1] = "BOOLEAN", t[t.TRIGGER = 2] = "TRIGGER", 
                t[t.INTEGER = 3] = "INTEGER";
            }(Ot || (Ot = {})), function(t) {
                t[t.AFTER_CONSUMED = 0] = "AFTER_CONSUMED", t[t.NEXT_FRAME_OR_AFTER_CONSUMED = 1] = "NEXT_FRAME_OR_AFTER_CONSUMED";
            }(Rt || (Rt = {}));
            var Ut, Bt, Wt, Dt, Vt, Gt, jt, Ht, Qt, qt, Yt, Xt, Zt, Jt, $t, Kt, te, ee, ne, ie, re, ae, oe, se, ue, le, ce, he, fe, pe, de, _e, ge, ve, me, ye, be, Te, Ee, we, Se, Ae, Me, ke, Ce, Ne, Oe, Re, Ie, xe, Pe, Le, Fe, ze, Ue, Be, We, De, Ve, Ge, je, He, Qe, qe, Ye, Xe, Ze, Je = function() {
                function t(t, e) {
                    this.type = void 0, this.resetMode = Rt.AFTER_CONSUMED, this._value = void 0, this._refs = [], 
                    this.type = t, this._value = e;
                }
                return t.prototype.bind = function(t, e) {
                    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                    return this._refs.push({
                        fn: t,
                        thisArg: e,
                        args: i
                    }), this._value;
                }, l(t, [ {
                    key: "value",
                    get: function() {
                        return this._value;
                    },
                    set: function(t) {
                        this._value = t;
                        for (var e, n = o(this._refs); !(e = n()).done; ) {
                            var i = e.value, r = i.fn, a = i.thisArg, s = i.args;
                            r.call.apply(r, [ a, t ].concat(s));
                        }
                    }
                } ]), t;
            }(), $e = function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this, e + " transition is invalid") || this).name = "TransitionRejectError", 
                    n;
                }
                return c(e, t), e;
            }(h(Error)), Ke = function(t) {
                function e(e) {
                    return t.call(this, "Graph variable " + e + " is not defined") || this;
                }
                return c(e, t), e;
            }(h(Error)), tn = function(e) {
                function n(n, i, r) {
                    return e.call(this, "Expect graph variable " + n + " to have type '" + i + "' instead of received '" + (null != r ? r : t(r)) + "'") || this;
                }
                return c(n, e), n;
            }(h(Error)), en = Symbol("[[createEval]]"), nn = Symbol("[[Outgoing transitions]]"), rn = Symbol("[[Incoming transitions]]"), an = w("cc.animation.State")((Dt = function(t) {
                function e() {
                    var e;
                    return e = t.call(this) || this, s(e, "name", Wt, p(e)), e[nn] = [], e[rn] = [], 
                    e;
                }
                return c(e, t), e;
            }(R), Wt = a((Bt = Dt).prototype, "name", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Ut = Bt)) || Ut, on = w(Y + "InteractiveState")((Ht = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "_components", jt, p(e)), 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n.addComponent = function(t) {
                    var e = new t();
                    return this._components.push(e), e;
                }, n.removeComponent = function(t) {
                    f(this._components, t);
                }, n.instantiateComponents = function() {
                    return this._components.map(function(t) {
                        return O(t);
                    });
                }, l(e, [ {
                    key: "components",
                    get: function() {
                        return this._components;
                    }
                } ]), e;
            }(an), jt = a((Gt = Ht).prototype, "_components", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Vt = Gt)) || Vt, sn = w("cc.animation.Motion")(($t = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "motion", Yt, p(e)), 
                    s(e, "speed", Xt, p(e)), s(e, "speedMultiplier", Zt, p(e)), s(e, "speedMultiplierEnabled", Jt, p(e)), 
                    e;
                }
                return c(e, t), e.prototype.clone = function() {
                    var t, n, i = new e();
                    return i.motion = null !== (t = null === (n = this.motion) || void 0 === n ? void 0 : n.clone()) && void 0 !== t ? t : null, 
                    i.speed = this.speed, i.speedMultiplier = this.speedMultiplier, i.speedMultiplierEnabled = this.speedMultiplierEnabled, 
                    i;
                }, e;
            }(on), Yt = a((qt = $t).prototype, "motion", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Xt = a(qt.prototype, "speed", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), Zt = a(qt.prototype, "speedMultiplier", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Jt = a(qt.prototype, "speedMultiplierEnabled", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Qt = qt)) || Qt, un = Symbol("[[OnAfterDeserialized]]"), ln = w(Y + "Transition")((re = function(t) {
                function e(e, n, i) {
                    var r;
                    return r = t.call(this) || this, s(r, "from", ee, p(r)), s(r, "to", ne, p(r)), s(r, "conditions", ie, p(r)), 
                    r[Ft] = void 0, r.from = e, r.to = n, i && (r.conditions = i), r;
                }
                return c(e, t), e;
            }(R), ee = a((te = re).prototype, "from", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ne = a(te.prototype, "to", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ie = a(te.prototype, "conditions", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Kt = te)) || Kt, cn = w(Y + "AnimationTransition")((he = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "duration", se, p(e)), 
                    s(e, "relativeDuration", ue, p(e)), s(e, "exitConditionEnabled", le, p(e)), s(e, "_exitCondition", ce, p(e)), 
                    e;
                }
                return c(e, t), l(e, [ {
                    key: "exitCondition",
                    get: function() {
                        return this._exitCondition;
                    },
                    set: function(t) {
                        this._exitCondition = t;
                    }
                } ]), e;
            }(ln), se = a((oe = he).prototype, "duration", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3;
                }
            }), ue = a(oe.prototype, "relativeDuration", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), le = a(oe.prototype, "exitConditionEnabled", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), ce = a(oe.prototype, "_exitCondition", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), ae = oe)) || ae, hn = w(Y + "EmptyState")(fe = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return c(e, t), e;
            }(an)) || fe, fn = w(Y + "EmptyStateTransition")((ge = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "duration", _e, p(e)), 
                    e;
                }
                return c(e, t), e;
            }(ln), _e = a((de = ge).prototype, "duration", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3;
                }
            }), pe = de)) || pe, pn = w("cc.animation.StateMachine")((Se = function(t) {
                c(n, t);
                var e = n.prototype;
                function n() {
                    var e;
                    return e = t.call(this) || this, s(e, "_states", ye, p(e)), s(e, "_transitions", be, p(e)), 
                    s(e, "_entryState", Te, p(e)), s(e, "_exitState", Ee, p(e)), s(e, "_anyState", we, p(e)), 
                    e._entryState = e._addState(new an()), e._entryState.name = "Entry", e._exitState = e._addState(new an()), 
                    e._exitState.name = "Exit", e._anyState = e._addState(new an()), e._anyState.name = "Any", 
                    e;
                }
                return e.__callOnAfterDeserializeRecursive = function() {
                    this[un]();
                    for (var t = this._states.length, e = 0; e < t; ++e) {
                        var n = this._states[e];
                        n instanceof dn && n.stateMachine.__callOnAfterDeserializeRecursive();
                    }
                }, e[un] = function() {
                    this._states.forEach(function() {}), this._transitions.forEach(function(t) {
                        t.from[nn].push(t), t.to[rn].push(t);
                    });
                }, e[en] = function() {
                    throw new Error("Method not implemented.");
                }, e.states = function() {
                    return this._states;
                }, e.transitions = function() {
                    return this._transitions;
                }, e.getTransitionsBetween = function(t, e) {
                    return zt(t, this), zt(e, this), t[nn].filter(function(t) {
                        return t.to === e;
                    });
                }, e.getOutgoings = function(t) {
                    return zt(t, this), t[nn];
                }, e.getIncomings = function(t) {
                    return zt(t, this), t[rn];
                }, e.addMotion = function() {
                    return this._addState(new sn());
                }, e.addSubStateMachine = function() {
                    return this._addState(new dn());
                }, e.addEmpty = function() {
                    return this._addState(new hn());
                }, e.remove = function(t) {
                    zt(t, this), t !== this.entryState && t !== this.exitState && t !== this.anyState && (this.eraseTransitionsIncludes(t), 
                    f(this._states, t));
                }, e.connect = function(t, e, n) {
                    if (zt(t, this), zt(e, this), e === this.entryState) throw new $e("to-entry");
                    if (e === this.anyState) throw new $e("to-any");
                    if (t === this.exitState) throw new $e("from-exit");
                    var i = t instanceof sn || t === this._anyState ? new cn(t, e, n) : t instanceof hn ? new fn(t, e, n) : new ln(t, e, n);
                    return this._transitions.push(i), t[nn].push(i), e[rn].push(i), i;
                }, e.disconnect = function(t, e) {
                    zt(t, this), zt(e, this);
                    for (var n = t[nn], i = e[rn], r = this._transitions, a = n.filter(function(t) {
                        return t.to === e;
                    }), o = a.length, s = function(t) {
                        var e = a[t];
                        f(n, e), u(f(r, e)), _(g(i, function(t) {
                            return t === e;
                        }));
                    }, l = 0; l < o; ++l) s(l);
                }, e.removeTransition = function(t) {
                    u(f(this._transitions, t)), _(g(t.from[nn], function(e) {
                        return e === t;
                    })), _(g(t.to[rn], function(e) {
                        return e === t;
                    }));
                }, e.eraseOutgoings = function(t) {
                    var e = this;
                    zt(t, this);
                    for (var n = t[nn], i = function(t) {
                        var i = n[t], r = i.to;
                        u(f(e._transitions, i)), _(g(r[rn], function(t) {
                            return t === i;
                        }));
                    }, r = 0; r < n.length; ++r) i(r);
                    n.length = 0;
                }, e.eraseIncomings = function(t) {
                    var e = this;
                    zt(t, this);
                    for (var n = t[rn], i = function(t) {
                        var i = n[t], r = i.from;
                        u(f(e._transitions, i)), _(g(r[nn], function(t) {
                            return t === i;
                        }));
                    }, r = 0; r < n.length; ++r) i(r);
                    n.length = 0;
                }, e.eraseTransitionsIncludes = function(t) {
                    this.eraseIncomings(t), this.eraseOutgoings(t);
                }, e.clone = function() {
                    for (var t, e = new n(), i = new Map(), r = o(this._states); !(t = r()).done; ) {
                        var a = t.value;
                        switch (a) {
                          case this._entryState:
                            i.set(a, e._entryState);
                            break;

                          case this._exitState:
                            i.set(a, e._exitState);
                            break;

                          case this._anyState:
                            i.set(a, e._anyState);
                            break;

                          default:
                            if (a instanceof sn || a instanceof dn) {
                                var s = a.clone();
                                e._addState(s), i.set(a, s);
                            }
                        }
                    }
                    for (var u, l = o(this._transitions); !(u = l()).done; ) {
                        var c = u.value, h = i.get(c.from), f = i.get(c.to), p = e.connect(h, f);
                        p.conditions = c.conditions.map(function(t) {
                            return t.clone();
                        }), p instanceof cn && (p.duration = c.duration, p.exitConditionEnabled = c.exitConditionEnabled, 
                        p.exitCondition = c.exitCondition);
                    }
                    return e;
                }, e._addState = function(t) {
                    return this._states.push(t), t;
                }, l(n, [ {
                    key: "entryState",
                    get: function() {
                        return this._entryState;
                    }
                }, {
                    key: "exitState",
                    get: function() {
                        return this._exitState;
                    }
                }, {
                    key: "anyState",
                    get: function() {
                        return this._anyState;
                    }
                } ]), n;
            }(R), ye = a((me = Se).prototype, "_states", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), be = a(me.prototype, "_transitions", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Te = a(me.prototype, "_entryState", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ee = a(me.prototype, "_exitState", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), we = a(me.prototype, "_anyState", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ve = me)) || ve, dn = w("cc.animation.SubStateMachine")((Ce = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "_stateMachine", ke, p(e)), 
                    e;
                }
                return c(e, t), e.prototype.clone = function() {
                    var t = new e();
                    return t._stateMachine = this._stateMachine.clone(), t;
                }, l(e, [ {
                    key: "stateMachine",
                    get: function() {
                        return this._stateMachine;
                    }
                } ]), e;
            }(on), ke = a((Me = Ce).prototype, "_stateMachine", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new pn();
                }
            }), Ae = Me)) || Ae, _n = w("cc.animation.Layer")((Le = function() {
                function t() {
                    this[Ft] = void 0, s(this, "_stateMachine", Re, this), s(this, "name", Ie, this), 
                    s(this, "weight", xe, this), s(this, "mask", Pe, this), this._stateMachine = new pn();
                }
                return l(t, [ {
                    key: "stateMachine",
                    get: function() {
                        return this._stateMachine;
                    }
                } ]), t;
            }(), Re = a((Oe = Le).prototype, "_stateMachine", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ie = a(Oe.prototype, "name", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), xe = a(Oe.prototype, "weight", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), Pe = a(Oe.prototype, "mask", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ne = Oe)) || Ne;
            !function(t) {
                t[t.override = 0] = "override", t[t.additive = 1] = "additive";
            }(Ze || (Ze = {})), u(0 == (0 | Rt.AFTER_CONSUMED << 1));
            var gn, vn, mn, yn, bn, Tn = w("cc.animation.PlainVariable")((We = function() {
                function t(t) {
                    if (s(this, "_type", Ue, this), s(this, "_value", Be, this), void 0 !== t) switch (this._type = t, 
                    t) {
                      default:
                        break;

                      case Ot.FLOAT:
                      case Ot.INTEGER:
                        this._value = 0;
                        break;

                      case Ot.BOOLEAN:
                        this._value = !1;
                    }
                }
                return l(t, [ {
                    key: "type",
                    get: function() {
                        return this._type;
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value;
                    },
                    set: function(t) {
                        this._value = t;
                    }
                } ]), t;
            }(), Ue = a((ze = We).prototype, "_type", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Ot.FLOAT;
                }
            }), Be = a(ze.prototype, "_value", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Fe = ze)) || Fe, En = w("cc.animation.TriggerVariable")((je = function() {
                function t() {
                    s(this, "_flags", Ge, this);
                }
                return l(t, [ {
                    key: "type",
                    get: function() {
                        return Ot.TRIGGER;
                    }
                }, {
                    key: "value",
                    get: function() {
                        return !!((1 & this._flags) >> 0);
                    },
                    set: function(t) {
                        t ? this._flags |= 1 : this._flags &= -2;
                    }
                }, {
                    key: "resetMode",
                    get: function() {
                        return (6 & this._flags) >> 1;
                    },
                    set: function(t) {
                        this._flags &= -7, this._flags |= t << 1;
                    }
                } ]), t;
            }(), Ge = a((Ve = je).prototype, "_flags", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), De = Ve)) || De, wn = w("cc.animation.AnimationGraph")((Xe = function(t) {
                function e() {
                    var e;
                    return e = t.call(this) || this, s(e, "_layers", qe, p(e)), s(e, "_variables", Ye, p(e)), 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n.onLoaded = function() {
                    for (var t = this._layers, e = t.length, n = 0; n < e; ++n) t[n].stateMachine.__callOnAfterDeserializeRecursive();
                }, n.addLayer = function() {
                    var t = new _n();
                    return this._layers.push(t), t;
                }, n.removeLayer = function(t) {
                    v.removeAt(this._layers, t);
                }, n.moveLayer = function(t, e) {
                    !function(t, e, n) {
                        if (d(t, e), d(t, n), e === n) return t;
                        var i = t[e];
                        if (e < n) for (var r = e + 1; r <= n; ++r) t[r - 1] = t[r]; else for (var a = e; a !== n; --a) t[a] = t[a - 1];
                        t[n] = i;
                    }(this._layers, t, e);
                }, n.addBoolean = function(t, e) {
                    void 0 === e && (e = !1);
                    var n = new Tn(Ot.BOOLEAN);
                    n.value = e, this._variables[t] = n;
                }, n.addFloat = function(t, e) {
                    void 0 === e && (e = 0);
                    var n = new Tn(Ot.FLOAT);
                    n.value = e, this._variables[t] = n;
                }, n.addInteger = function(t, e) {
                    void 0 === e && (e = 0);
                    var n = new Tn(Ot.INTEGER);
                    n.value = e, this._variables[t] = n;
                }, n.addTrigger = function(t, e, n) {
                    void 0 === e && (e = !1), void 0 === n && (n = Rt.AFTER_CONSUMED);
                    var i = new En();
                    i.resetMode = n, i.value = e, this._variables[t] = i;
                }, n.removeVariable = function(t) {
                    delete this._variables[t];
                }, n.getVariable = function(t) {
                    return this._variables[t];
                }, l(e, [ {
                    key: "layers",
                    get: function() {
                        return this._layers;
                    }
                }, {
                    key: "variables",
                    get: function() {
                        return Object.entries(this._variables);
                    }
                } ]), e;
            }(I), qe = a((Qe = Xe).prototype, "_layers", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Ye = a(Qe.prototype, "_variables", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return {};
                }
            }), He = Qe)) || He, Sn = Mn, An = Mn;
            function Mn() {}
            gn = w("cc.animation.ClipMotion"), vn = x(X), gn((bn = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "clip", yn, p(e)), 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n[en] = function(t) {
                    return this.clip ? new Hn(t, this.clip) : null;
                }, n.clone = function() {
                    var t = new e();
                    return t.clip = this.clip, t;
                }, e;
            }(R), yn = a((mn = bn).prototype, "clip", [ vn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mn));
            var kn, Cn, Nn, On, Rn, In, xn, Pn, Ln, Fn, zn, Un, Bn, Wn, Dn, Vn, Gn, jn, Hn = function() {
                function t(t, e) {
                    this.duration = e.duration / e.speed, this._state = new Z(e), this._state.initialize(t.node, t.blendBuffer, t.mask);
                }
                var e = t.prototype;
                return e.getClipStatuses = function(t) {
                    var e = this, n = !1;
                    return {
                        next: function() {
                            return n ? {
                                done: !0,
                                value: void 0
                            } : (n = !0, {
                                done: !1,
                                value: {
                                    __DEBUG_ID__: e.__DEBUG__ID__,
                                    clip: e._state.clip,
                                    weight: t
                                }
                            });
                        }
                    };
                }, e.sample = function(t, e) {
                    if (0 !== e) {
                        var n = this._state.duration * t;
                        this._state.time = n, this._state.weight = e, this._state.sample(), this._state.weight = 0;
                    }
                }, l(t, [ {
                    key: "progress",
                    get: function() {
                        return this._state.time / this.duration;
                    }
                } ]), t;
            }(), Qn = w(Y + "BindableNumber")((Rn = function() {
                function t(t) {
                    void 0 === t && (t = 0), s(this, "variable", Nn, this), s(this, "value", On, this), 
                    this.value = t;
                }
                return t.prototype.clone = function() {
                    var e = new t();
                    return e.value = this.value, e.variable = this.variable, e;
                }, t;
            }(), Nn = a((Cn = Rn).prototype, "variable", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), On = a(Cn.prototype, "value", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), kn = Cn)) || kn, qn = w(Y + "BindableBoolean")((Fn = function() {
                function t(t) {
                    void 0 === t && (t = !1), s(this, "variable", Pn, this), s(this, "value", Ln, this), 
                    this.value = t;
                }
                return t.prototype.clone = function() {
                    var e = new t();
                    return e.value = this.value, e.variable = this.variable, e;
                }, t;
            }(), Pn = a((xn = Fn).prototype, "variable", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Ln = a(xn.prototype, "value", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), In = xn)) || In;
            function Yn(t, e, n, i, r) {
                var a = e.variable, o = e.value;
                if (!a) return o;
                var s = t.getVar(a);
                if (!Zn(s, a)) return o;
                if (s.type !== n) throw new tn(a, "number");
                for (var u = arguments.length, l = new Array(u > 5 ? u - 5 : 0), c = 5; c < u; c++) l[c - 5] = arguments[c];
                var h = s.bind.apply(s, [ i, r ].concat(l));
                return h;
            }
            function Xn(t, e, n, i, r) {
                var a = e.variable, o = e.value;
                if (!a) return o;
                var s = t.getVar(a);
                if (!Zn(s, a)) return o;
                if (n !== Ot.FLOAT && n !== Ot.INTEGER) throw new tn(a, "number or integer");
                for (var u = arguments.length, l = new Array(u > 5 ? u - 5 : 0), c = 5; c < u; c++) l[c - 5] = arguments[c];
                var h = s.bind.apply(s, [ i, r ].concat(l));
                return h;
            }
            function Zn(t, e) {
                if (t) return !0;
                throw new Ke(e);
            }
            var Jn, $n, Kn, ti, ei, ni, ii, ri, ai, oi, si, ui = w(Y + "AnimationBlendItem")((Wn = function() {
                function t() {
                    s(this, "motion", Bn, this);
                }
                var e = t.prototype;
                return e.clone = function() {
                    var e = new t();
                    return this._assign(e), e;
                }, e._assign = function(t) {
                    var e, n;
                    return t.motion = null !== (e = null === (n = this.motion) || void 0 === n ? void 0 : n.clone()) && void 0 !== e ? e : null, 
                    t;
                }, t;
            }(), Bn = a((Un = Wn).prototype, "motion", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zn = Un)) || zn, li = w(Y + "AnimationBlend")((jn = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "name", Gn, p(e)), 
                    e;
                }
                return c(e, t), e;
            }(R), Gn = a((Vn = jn).prototype, "name", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Dn = Vn)) || Dn, ci = function() {
                function t(t, e, n, i) {
                    this._childEvaluators = n.map(function(e) {
                        var n, i;
                        return null !== (n = null === (i = e.motion) || void 0 === i ? void 0 : i[en](t)) && void 0 !== n ? n : null;
                    }), this._weights = new Array(this._childEvaluators.length).fill(0), this._inputs = [].concat(i);
                }
                var e = t.prototype;
                return e.getChildWeight = function(t) {
                    return this._weights[t];
                }, e.getChildMotionEval = function(t) {
                    return this._childEvaluators[t];
                }, e.getClipStatuses = function(t) {
                    var e, n = this._childEvaluators, i = this._weights, r = n.length, a = 0;
                    return {
                        next: function() {
                            for (;;) {
                                if (e) {
                                    var o = e.next();
                                    if (!o.done) return o;
                                }
                                if (a >= r) return {
                                    done: !0,
                                    value: void 0
                                };
                                var s = n[a];
                                e = null == s ? void 0 : s.getClipStatuses(t * i[a]), ++a;
                            }
                        }
                    };
                }, e.sample = function(t, e) {
                    for (var n = 0; n < this._childEvaluators.length; ++n) {
                        var i;
                        null === (i = this._childEvaluators[n]) || void 0 === i || i.sample(t, e * this._weights[n]);
                    }
                }, e.setInput = function(t, e) {
                    this._inputs[e] = t, this.doEval();
                }, e.doEval = function() {
                    this.eval(this._weights, this._inputs);
                }, e.eval = function() {}, l(t, [ {
                    key: "childCount",
                    get: function() {
                        return this._weights.length;
                    }
                }, {
                    key: "duration",
                    get: function() {
                        for (var t = 0, e = 0; e < this._childEvaluators.length; ++e) {
                            var n, i;
                            t += (null !== (n = null === (i = this._childEvaluators[e]) || void 0 === i ? void 0 : i.duration) && void 0 !== n ? n : 0) * this._weights[e];
                        }
                        return t;
                    }
                } ]), t;
            }(), hi = w(Y + "AnimationBlend1DItem")((ti = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "threshold", Kn, p(e)), 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n.clone = function() {
                    var t = new e();
                    return this._assign(t), t;
                }, n._assign = function(e) {
                    return t.prototype._assign.call(this, e), e.threshold = this.threshold, e;
                }, e;
            }(ui), Kn = a(($n = ti).prototype, "threshold", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Jn = $n)) || Jn, fi = (w("cc.animation.AnimationBlend1D")((ai = ri = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "_items", ni, p(e)), 
                    s(e, "param", ii, p(e)), e;
                }
                c(e, t);
                var n = e.prototype;
                return n.clone = function() {
                    var t = new e();
                    return t._items = this._items.map(function(t) {
                        return t.clone();
                    }), t.param = this.param.clone(), t;
                }, n[en] = function(t) {
                    var e = new fi(t, this, this._items, this._items.map(function(t) {
                        return t.threshold;
                    }), 0), n = Yn(t, this.param, Ot.FLOAT, e.setInput, e, 0);
                    return e.setInput(n, 0), e;
                }, l(e, [ {
                    key: "items",
                    get: function() {
                        return this._items;
                    },
                    set: function(t) {
                        this._items = Array.from(t).sort(function(t, e) {
                            return t.threshold - e.threshold;
                        });
                    }
                } ]), e;
            }(li), ri.Item = hi, ni = a((ei = ai).prototype, "_items", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), ii = a(ei.prototype, "param", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Qn();
                }
            }), ei)), function(t) {
                function e(e, n, i, r, a) {
                    var o;
                    return (o = t.call(this, e, n, i, [ a ]) || this)._thresholds = r, o.doEval(), o;
                }
                return c(e, t), e.prototype.eval = function(t, e) {
                    var n = e[0];
                    !function(t, e, n) {
                        if (t.fill(0), 0 === e.length) ; else if (n <= e[0]) t[0] = 1; else if (n >= e[e.length - 1]) t[t.length - 1] = 1; else {
                            for (var i = 0, r = 1; r < e.length; ++r) if (e[r] > n) {
                                i = r;
                                break;
                            }
                            var a = e[i - 1], o = e[i], s = o - a;
                            t[i - 1] = (o - n) / s, t[i] = (n - a) / s;
                        }
                    }(t, this._thresholds, n);
                }, e;
            }(ci)), pi = (oi = new P(), si = {
                wA: 0,
                wB: 0
            }, function(t, e, n) {
                if (u(t.length === e.length), 0 !== e.length) if (1 !== e.length) if (P.strictEquals(n, P.ZERO)) {
                    var i = e.findIndex(function(t) {
                        return P.strictEquals(t, P.ZERO);
                    });
                    i >= 0 ? t[i] = 1 : t.fill(1 / e.length);
                } else {
                    for (var r = -1, a = -1, o = -1, s = Number.NEGATIVE_INFINITY, l = Number.NEGATIVE_INFINITY, c = n.x, h = n.y, f = 0; f < e.length; ++f) {
                        var p = e[f];
                        if (P.equals(p, P.ZERO)) o = f; else {
                            var d = P.normalize(oi, p), _ = P.dot(d, n);
                            d.x * h - d.y * c > 0 ? _ >= l && (l = _, r = f) : _ >= s && (s = _, a = f);
                        }
                    }
                    var g = 0;
                    if (r < 0 || a < 0) g = 1; else {
                        var v = (A = e[r], M = e[a], k = n, C = si, (N = P.cross(A, M)) ? (C.wA = P.cross(k, M) / N, 
                        C.wB = P.cross(k, A) / -N) : (C.wA = 0, C.wB = 0), C), m = v.wA, y = v.wB, b = 0, T = 0, E = m + y;
                        E > 1 ? (b = m / E, T = y / E) : E < 0 ? (b = 0, T = 0, g = 1) : (b = m, T = y, 
                        g = 1 - E), t[r] = b, t[a] = T;
                    }
                    if (g > 0) if (o >= 0) t[o] = g; else for (var w = g / t.length, S = 0; S < t.length; ++S) t[S] += w;
                } else t[0] = 1;
                var A, M, k, C, N;
            });
            function di(t, e, n, i) {
                t.fill(0);
                for (var r = new P(0, 0), a = new P(0, 0), o = 0, s = e.length, u = 0; u < s; ++u) {
                    for (var l = Number.MAX_VALUE, c = !1, h = 0; h < s; ++h) if (u !== h) {
                        i(e[u], e[h], n, r, a);
                        var f = 1 - P.dot(r, a) / P.lengthSqr(a);
                        if (f < 0) {
                            c = !0;
                            break;
                        }
                        l = Math.min(l, f);
                    }
                    c || (t[u] = l, o += l);
                }
                o > 0 && t.forEach(function(e, n) {
                    return t[n] = e / o;
                });
            }
            var _i, gi, vi, mi, yi, bi, Ti, Ei, wi, Si, Ai, Mi, ki, Ci, Ni, Oi, Ri, Ii, xi = function(t, e, n, i, r) {
                P.subtract(i, n, t), P.subtract(r, e, t);
            }, Pi = (_i = new L(0, 0, 0), gi = new L(0, 0, 0), vi = new L(0, 0, 0), mi = new L(0, 0, 0), 
            yi = new L(0, 0, 0), bi = new L(0, 0, 0), function(t, e, n, i, r) {
                var a = 0, o = 0, s = 2;
                L.set(vi, n.x, n.y, 0), P.equals(t, P.ZERO) ? (a = P.angle(n, e), o = 0, s = 1) : P.equals(e, P.ZERO) ? (o = a = P.angle(n, t), 
                s = 1) : (a = P.angle(t, e)) <= 0 ? o = 0 : P.equals(n, P.ZERO) ? o = a : (L.set(mi, t.x, t.y, 0), 
                L.set(yi, e.x, e.y, 0), L.set(bi, n.x, n.y, 0), L.cross(_i, mi, yi), L.projectOnPlane(vi, bi, _i), 
                o = L.angle(mi, vi), a < .99 * Math.PI && L.dot(L.cross(gi, mi, vi), _i) < 0 && (o = -o));
                var u = P.len(t), l = P.len(e), c = (l + u) / 2;
                P.set(r, (l - u) / c, a * s), P.set(i, (L.len(vi) - u) / c, o * s);
            });
            !function(t) {
                t[t.SIMPLE_DIRECTIONAL = 0] = "SIMPLE_DIRECTIONAL", t[t.FREEFORM_CARTESIAN = 1] = "FREEFORM_CARTESIAN", 
                t[t.FREEFORM_DIRECTIONAL = 2] = "FREEFORM_DIRECTIONAL";
            }(Ii || (Ii = {})), m(Ii);
            var Li, Fi, zi, Ui, Bi, Wi, Di, Vi, Gi, ji, Hi, Qi, qi, Yi, Xi, Zi, Ji, $i, Ki, tr, er, nr, ir, rr, ar, or, sr, ur, lr, cr, hr, fr = w(Y + "AnimationBlend2DItem")((Si = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "threshold", wi, p(e)), 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n.clone = function() {
                    var t = new e();
                    return this._assign(t), t;
                }, n._assign = function(e) {
                    return t.prototype._assign.call(this, e), P.copy(e.threshold, this.threshold), e;
                }, e;
            }(ui), wi = a((Ei = Si).prototype, "threshold", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new P();
                }
            }), Ti = Ei)) || Ti, pr = (w("cc.animation.AnimationBlend2D")((Ri = Oi = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "algorithm", Mi, p(e)), 
                    s(e, "_items", ki, p(e)), s(e, "paramX", Ci, p(e)), s(e, "paramY", Ni, p(e)), e;
                }
                c(e, t);
                var n = e.prototype;
                return n.clone = function() {
                    var t = new e();
                    return t._items = this._items.map(function(t) {
                        var e;
                        return null !== (e = null == t ? void 0 : t.clone()) && void 0 !== e ? e : null;
                    }), t.paramX = this.paramX.clone(), t.paramY = this.paramY.clone(), t;
                }, n[en] = function(t) {
                    var e = new pr(t, this, this._items, this._items.map(function(t) {
                        return t.threshold;
                    }), this.algorithm, [ 0, 0 ]), n = Yn(t, this.paramX, Ot.FLOAT, e.setInput, e, 0), i = Yn(t, this.paramY, Ot.FLOAT, e.setInput, e, 1);
                    return e.setInput(n, 0), e.setInput(i, 1), e;
                }, l(e, [ {
                    key: "items",
                    get: function() {
                        return this._items;
                    },
                    set: function(t) {
                        this._items = Array.from(t);
                    }
                } ]), e;
            }(li), Oi.Algorithm = Ii, Oi.Item = fr, Mi = a((Ai = Ri).prototype, "algorithm", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Ii.SIMPLE_DIRECTIONAL;
                }
            }), ki = a(Ai.prototype, "_items", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Ci = a(Ai.prototype, "paramX", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Qn();
                }
            }), Ni = a(Ai.prototype, "paramY", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Qn();
                }
            }), Ai)), function(t) {
                function e(e, n, i, r, a, o) {
                    var s;
                    return (s = t.call(this, e, n, i, o) || this)._thresholds = void 0, s._algorithm = void 0, 
                    s._value = new P(), s._thresholds = r, s._algorithm = a, s.doEval(), s;
                }
                return c(e, t), e.prototype.eval = function(t, e) {
                    var n = e[0], i = e[1];
                    switch (P.set(this._value, n, i), t.fill(0), this._algorithm) {
                      case Ii.SIMPLE_DIRECTIONAL:
                        pi(t, this._thresholds, this._value);
                        break;

                      case Ii.FREEFORM_CARTESIAN:
                        !function(t, e, n) {
                            di(t, e, n, xi);
                        }(t, this._thresholds, this._value);
                        break;

                      case Ii.FREEFORM_DIRECTIONAL:
                        !function(t, e, n) {
                            di(t, e, n, Pi);
                        }(t, this._thresholds, this._value);
                    }
                }, e;
            }(ci)), dr = w(Y + "AnimationBlendDirectItem")((Ui = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "weight", zi, p(e)), 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n.clone = function() {
                    var t = new e();
                    return this._assign(t), t;
                }, n._assign = function(e) {
                    return t.prototype._assign.call(this, e), e.weight = this.weight, e;
                }, e;
            }(ui), zi = a((Fi = Ui).prototype, "weight", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Li = Fi)) || Li, _r = (w("cc.animation.AnimationBlendDirect")((Vi = Di = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "_items", Wi, p(e)), 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n.clone = function() {
                    var t = new e();
                    return t._items = this._items.map(function(t) {
                        var e;
                        return null !== (e = null == t ? void 0 : t.clone()) && void 0 !== e ? e : null;
                    }), t;
                }, n[en] = function(t) {
                    return new _r(t, this, this._items, this._items.map(function(t) {
                        return t.weight;
                    }));
                }, l(e, [ {
                    key: "items",
                    get: function() {
                        return this._items;
                    },
                    set: function(t) {
                        this._items = Array.from(t);
                    }
                } ]), e;
            }(li), Di.Item = dr, Wi = a((Bi = Vi).prototype, "_items", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Bi)), function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).doEval(), e;
                }
                return c(e, t), e.prototype.eval = function(t, e) {
                    for (var n = t.length, i = 0; i < n; ++i) t[i] = e[i];
                }, e;
            }(ci)), gr = (w(Y + "AnimationMask")((Hi = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "_jointMasks", ji, p(e)), 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n.addJoint = function(t, e) {
                    var n = new gr();
                    n.path = t, n.enabled = e, this._jointMasks.push(n);
                }, n.removeJoint = function(t) {
                    g(this._jointMasks, function(e) {
                        return e.path === t;
                    });
                }, n.clear = function() {
                    this._jointMasks.length = 0;
                }, n.filterDisabledNodes = function(t) {
                    for (var e = this._jointMasks, n = e.length, i = new Set(), r = 0; r < n; ++r) {
                        var a = e[r], o = a.path;
                        if (!a.enabled) {
                            var s = t.getChildByPath(o);
                            s && i.add(s);
                        }
                    }
                    return i;
                }, l(e, [ {
                    key: "joints",
                    get: function() {
                        return this._jointMasks;
                    },
                    set: function(t) {
                        this.clear();
                        for (var e, n = o(t); !(e = n()).done; ) {
                            var i = e.value;
                            this.addJoint(i.path, i.enabled);
                        }
                    }
                } ]), e;
            }(I), ji = a((Gi = Hi).prototype, "_jointMasks", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), a(Gi.prototype, "joints", [ F ], Object.getOwnPropertyDescriptor(Gi.prototype, "joints"), Gi.prototype), 
            Gi)), w("cc.JointMask")((Yi = a((qi = function() {
                s(this, "path", Yi, this), s(this, "enabled", Xi, this);
            }).prototype, "path", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Xi = a(qi.prototype, "enabled", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), Qi = qi)) || Qi);
            !function(t) {
                t[t.EQUAL_TO = 0] = "EQUAL_TO", t[t.NOT_EQUAL_TO = 1] = "NOT_EQUAL_TO", t[t.LESS_THAN = 2] = "LESS_THAN", 
                t[t.LESS_THAN_OR_EQUAL_TO = 3] = "LESS_THAN_OR_EQUAL_TO", t[t.GREATER_THAN = 4] = "GREATER_THAN", 
                t[t.GREATER_THAN_OR_EQUAL_TO = 5] = "GREATER_THAN_OR_EQUAL_TO";
            }(hr || (hr = {})), w(Y + "BinaryCondition")((er = tr = function() {
                function t() {
                    s(this, "operator", Ji, this), s(this, "lhs", $i, this), s(this, "rhs", Ki, this);
                }
                var e = t.prototype;
                return e.clone = function() {
                    var e = new t();
                    return e.operator = this.operator, e.lhs = this.lhs.clone(), e.rhs = this.rhs.clone(), 
                    e;
                }, e[en] = function(t) {
                    var e = this.operator, n = this.lhs, i = this.rhs, r = new mr(e, 0, 0), a = Xn(t, n, Ot.FLOAT, r.setLhs, r), o = Xn(t, i, Ot.FLOAT, r.setRhs, r);
                    return r.reset(a, o), r;
                }, t;
            }(), tr.Operator = hr, Ji = a((Zi = er).prototype, "operator", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return hr.EQUAL_TO;
                }
            }), $i = a(Zi.prototype, "lhs", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Qn();
                }
            }), Ki = a(Zi.prototype, "rhs", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Qn();
                }
            }), Zi));
            var vr, mr = function() {
                function t(t, e, n) {
                    this._operator = t, this._lhs = e, this._rhs = n, this._eval();
                }
                var e = t.prototype;
                return e.reset = function(t, e) {
                    this._lhs = t, this._rhs = e, this._eval();
                }, e.setLhs = function(t) {
                    this._lhs = t, this._eval();
                }, e.setRhs = function(t) {
                    this._rhs = t, this._eval();
                }, e.eval = function() {
                    return this._result;
                }, e._eval = function() {
                    var t = this._lhs, e = this._rhs;
                    switch (this._operator) {
                      default:
                      case hr.EQUAL_TO:
                        this._result = t === e;
                        break;

                      case hr.NOT_EQUAL_TO:
                        this._result = t !== e;
                        break;

                      case hr.LESS_THAN:
                        this._result = t < e;
                        break;

                      case hr.LESS_THAN_OR_EQUAL_TO:
                        this._result = t <= e;
                        break;

                      case hr.GREATER_THAN:
                        this._result = t > e;
                        break;

                      case hr.GREATER_THAN_OR_EQUAL_TO:
                        this._result = t >= e;
                    }
                }, t;
            }();
            !function(t) {
                t[t.TRUTHY = 0] = "TRUTHY", t[t.FALSY = 1] = "FALSY";
            }(vr || (vr = {})), w(Y + "UnaryCondition")((or = ar = function() {
                function t() {
                    s(this, "operator", ir, this), s(this, "operand", rr, this);
                }
                var e = t.prototype;
                return e.clone = function() {
                    var e = new t();
                    return e.operator = this.operator, e.operand = this.operand.clone(), e;
                }, e[en] = function(t) {
                    var e = this.operator, n = this.operand, i = new br(e, !1), r = Yn(t, n, Ot.BOOLEAN, i.setOperand, i);
                    return i.reset(r), i;
                }, t;
            }(), ar.Operator = vr, ir = a((nr = or).prototype, "operator", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return vr.TRUTHY;
                }
            }), rr = a(nr.prototype, "operand", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new qn();
                }
            }), nr));
            var yr, br = function() {
                function t(t, e) {
                    this._operator = t, this._operand = e, this._eval();
                }
                var e = t.prototype;
                return e.reset = function(t) {
                    this.setOperand(t);
                }, e.setOperand = function(t) {
                    this._operand = t, this._eval();
                }, e.eval = function() {
                    return this._result;
                }, e._eval = function() {
                    var t = this._operand;
                    switch (this._operator) {
                      default:
                      case vr.TRUTHY:
                        this._result = !!t;
                        break;

                      case vr.FALSY:
                        this._result = !t;
                    }
                }, t;
            }(), Tr = w(Y + "TriggerCondition")((cr = function() {
                function t() {
                    s(this, "trigger", lr, this);
                }
                var e = t.prototype;
                return e.clone = function() {
                    var e = new t();
                    return e.trigger = this.trigger, e;
                }, e[en] = function(t) {
                    var e = new Er(!1), n = t.getVar(this.trigger);
                    return Zn(n, this.trigger) && (function(t, e) {
                        if (t !== Ot.TRIGGER) throw new tn(e, "trigger");
                    }(n.type, this.trigger), e.setTrigger(n.bind(e.setTrigger, e))), e;
                }, t;
            }(), lr = a((ur = cr).prototype, "trigger", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), sr = ur)) || sr, Er = function() {
                function t(t) {
                    this._triggered = !1, this._triggered = t;
                }
                var e = t.prototype;
                return e.setTrigger = function(t) {
                    this._triggered = t;
                }, e.eval = function() {
                    return this._triggered;
                }, t;
            }(), wr = function() {
                function t() {
                    this._nodeBlendStates = new Map();
                }
                var e = t.prototype;
                return e.createWriter = function(t, e, n, i) {
                    var r = this.ref(t, e);
                    return new Sr(t, e, r, n, i);
                }, e.destroyWriter = function(t) {
                    var e = t;
                    this.deRef(e.node, e.property);
                }, e.ref = function(t, e) {
                    var n = this._nodeBlendStates.get(t);
                    return n || (n = this.createNodeBlendState(), this._nodeBlendStates.set(t, n)), 
                    n.refProperty(t, e);
                }, e.deRef = function(t, e) {
                    var n = this._nodeBlendStates.get(t);
                    n && (n.deRefProperty(e), n.empty && this._nodeBlendStates.delete(t));
                }, e.apply = function() {
                    this._nodeBlendStates.forEach(function(t, e) {
                        t.apply(e);
                    });
                }, t;
            }(), Sr = function() {
                function t(t, e, n, i, r) {
                    this._node = t, this._property = e, this._propertyBlendState = n, this._host = i, 
                    this._constants = r;
                }
                var e = t.prototype;
                return e.getValue = function() {
                    return this._node[this._property];
                }, e.setValue = function(t) {
                    var e = this._propertyBlendState, n = this._host.weight;
                    e.blend(t, n);
                }, l(t, [ {
                    key: "node",
                    get: function() {
                        return this._node;
                    }
                }, {
                    key: "property",
                    get: function() {
                        return this._property;
                    }
                } ]), t;
            }();
            !function(t) {
                t[t.POSITION = 1] = "POSITION", t[t.ROTATION = 2] = "ROTATION", t[t.SCALE = 4] = "SCALE", 
                t[t.EULER_ANGLES = 8] = "EULER_ANGLES";
            }(yr || (yr = {}));
            var Ar, Mr = yr.POSITION | yr.ROTATION | yr.SCALE | yr.EULER_ANGLES, kr = function() {
                function t() {
                    this.refCount = 0, this.accumulatedWeight = 0, this.result = new L();
                }
                var e = t.prototype;
                return e.blend = function(t, e) {
                    this.accumulatedWeight = Fr(this.result, this.result, this.accumulatedWeight, t, e);
                }, e.reset = function() {
                    this.accumulatedWeight = 0, L.zero(this.result);
                }, t;
            }(), Cr = function() {
                function t() {
                    this.refCount = 0, this.accumulatedWeight = 0, this.result = new z();
                }
                var e = t.prototype;
                return e.blend = function(t, e) {
                    this.accumulatedWeight = zr(this.result, this.result, this.accumulatedWeight, t, e);
                }, e.reset = function() {
                    this.accumulatedWeight = 0, z.identity(this.result);
                }, t;
            }(), Nr = function() {
                function t() {
                    this._transformApplyFlags = 0, this._properties = {};
                }
                var e = t.prototype;
                return e.refProperty = function(t, e) {
                    var n, i, r, a = this._properties;
                    switch (e) {
                      default:
                      case "position":
                      case "scale":
                      case "eulerAngles":
                        r = null !== (n = a[e]) && void 0 !== n ? n : a[e] = this._createVec3BlendState(t[e]);
                        break;

                      case "rotation":
                        r = null !== (i = a[e]) && void 0 !== i ? i : a[e] = this._createQuatBlendState(t.rotation);
                    }
                    return ++r.refCount, r;
                }, e.deRefProperty = function(t) {
                    var e = this._properties, n = e[t];
                    n && (--n.refCount, n.refCount > 0 || delete e[t]);
                }, e.apply = function(t) {
                    var e, n, i, r = this._transformApplyFlags, a = this._properties, o = a.position, s = a.scale, u = a.rotation, l = a.eulerAngles;
                    r && (o && r & yr.POSITION && (e = o.result), s && r & yr.SCALE && (n = s.result), 
                    l && r & yr.EULER_ANGLES && (i = l.result), u && r & yr.ROTATION && (i = u.result), 
                    (i || e || n) && t.setRTS(i, e, n), this._transformApplyFlags = 0);
                }, l(t, [ {
                    key: "empty",
                    get: function() {
                        var t = this._properties;
                        return !(t.position || t.rotation || t.eulerAngles || t.scale);
                    }
                } ]), t;
            }(), Or = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                c(e, t);
                var n = e.prototype;
                return n.apply = function(e) {
                    var n = this._properties, i = n.position, r = n.scale, a = n.rotation, o = n.eulerAngles;
                    i && i.accumulatedWeight && (this._transformApplyFlags |= yr.POSITION, i.accumulatedWeight < 1 && i.blend(e.position, 1 - i.accumulatedWeight)), 
                    r && r.accumulatedWeight && (this._transformApplyFlags |= yr.SCALE, r.accumulatedWeight < 1 && r.blend(e.scale, 1 - r.accumulatedWeight)), 
                    o && o.accumulatedWeight && (this._transformApplyFlags |= yr.EULER_ANGLES, o.accumulatedWeight < 1 && o.blend(e.eulerAngles, 1 - o.accumulatedWeight)), 
                    a && a.accumulatedWeight && (this._transformApplyFlags |= yr.ROTATION, a.accumulatedWeight < 1 && a.blend(e.rotation, 1 - a.accumulatedWeight)), 
                    t.prototype.apply.call(this, e), null == i || i.reset(), null == r || r.reset(), 
                    null == a || a.reset(), null == o || o.reset();
                }, n._createVec3BlendState = function() {
                    return new kr();
                }, n._createQuatBlendState = function() {
                    return new Cr();
                }, e;
            }(Nr), Rr = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return c(e, t), e.prototype.createNodeBlendState = function() {
                    return new Or();
                }, e;
            }(wr), Ir = function() {
                function t(t) {
                    this.refCount = 0, this.result = new L(), this._defaultValue = new L(), this._clipBlendResult = new L(), 
                    this._accumulatedWeight = 0, L.copy(this._defaultValue, t), L.copy(this.result, t);
                }
                var e = t.prototype;
                return e.blend = function(t, e) {
                    this._accumulatedWeight = Fr(this._clipBlendResult, this._clipBlendResult, this._accumulatedWeight, t, e);
                }, e.commitLayerChange = function(t) {
                    var e = this.result, n = this._clipBlendResult, i = this._accumulatedWeight;
                    i < 1 && this.blend(this._defaultValue, 1 - i), L.lerp(e, e, n, t), L.zero(this._clipBlendResult), 
                    this._accumulatedWeight = 0;
                }, e.reset = function() {
                    L.copy(this.result, this._defaultValue);
                }, t;
            }(), xr = function() {
                function t(t) {
                    this.refCount = 0, this.result = new z(), this._defaultValue = new z(), this._clipBlendResult = new z(), 
                    this._accumulatedWeight = 0, z.copy(this._defaultValue, t), z.copy(this.result, t);
                }
                var e = t.prototype;
                return e.blend = function(t, e) {
                    this._accumulatedWeight = zr(this._clipBlendResult, this._clipBlendResult, this._accumulatedWeight, t, e);
                }, e.commitLayerChange = function(t) {
                    var e = this.result, n = this._clipBlendResult, i = this._accumulatedWeight;
                    i < 1 && this.blend(this._defaultValue, 1 - i), z.slerp(e, e, n, t), z.identity(this._clipBlendResult), 
                    this._accumulatedWeight = 0;
                }, e.reset = function() {
                    z.copy(this.result, this._defaultValue);
                }, t;
            }(), Pr = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this)._layerMask = -1 >>> 0, 
                    e;
                }
                c(e, t);
                var n = e.prototype;
                return n.setLayerMask = function(t) {
                    this._layerMask &= ~(1 << t);
                }, n.commitLayerChanges = function(t, e) {
                    if (this._layerMask & 1 << t) {
                        var n = this._properties, i = n.position, r = n.scale, a = n.rotation, o = n.eulerAngles;
                        i && i.commitLayerChange(e), r && r.commitLayerChange(e), a && a.commitLayerChange(e), 
                        o && o.commitLayerChange(e);
                    }
                }, n.apply = function(e) {
                    this._transformApplyFlags = Mr, t.prototype.apply.call(this, e);
                    var n = this._properties, i = n.position, r = n.scale, a = n.rotation, o = n.eulerAngles;
                    null == i || i.reset(), null == r || r.reset(), null == a || a.reset(), null == o || o.reset();
                }, n._createVec3BlendState = function(t) {
                    return new Ir(t);
                }, n._createQuatBlendState = function(t) {
                    return new xr(t);
                }, e;
            }(Nr), Lr = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                c(e, t);
                var n = e.prototype;
                return n.setMask = function(t, e) {
                    this._nodeBlendStates.forEach(function(n, i) {
                        e.has(i) && n.setLayerMask(t);
                    });
                }, n.commitLayerChanges = function(t, e) {
                    this._nodeBlendStates.forEach(function(n) {
                        n.commitLayerChanges(t, e);
                    });
                }, n.createNodeBlendState = function() {
                    return new Pr();
                }, e;
            }(wr);
            function Fr(t, e, n, i, r) {
                var a = n + r;
                if (1 !== r || n) {
                    if (a) {
                        var o = r / a;
                        L.lerp(t, t, i, o);
                    }
                } else L.copy(t, i);
                return a;
            }
            function zr(t, e, n, i, r) {
                var a = n + r;
                if (1 !== r || n) {
                    if (a) {
                        var o = r / a;
                        z.slerp(t, e, i, o);
                    }
                } else z.copy(t, i);
                return a;
            }
            var Ur, Br, Wr = w(Y + "StateMachineComponent")(Ar = function() {
                function t() {}
                var e = t.prototype;
                return e.onMotionStateEnter = function() {}, e.onMotionStateExit = function() {}, 
                e.onMotionStateUpdate = function() {}, e.onStateMachineEnter = function() {}, e.onStateMachineExit = function() {}, 
                t;
            }()) || Ar, Dr = function() {
                function t(t, e, n) {
                    var i = this;
                    this._blendBuffer = new Lr(), this._currentTransitionCache = {
                        duration: 0,
                        time: 0
                    }, this._varInstances = {}, this._hasAutoTrigger = !1;
                    for (var r, a = o(t.variables); !(r = a()).done; ) {
                        var s = r.value, u = s[0], l = s[1], c = this._varInstances[u] = new Je(l.type, l.value);
                        if (l.type === Ot.TRIGGER) {
                            var h = l.resetMode;
                            c.resetMode = h, h === Rt.NEXT_FRAME_OR_AFTER_CONSUMED && (this._hasAutoTrigger = !0);
                        }
                    }
                    for (var f = {
                        controller: n,
                        blendBuffer: this._blendBuffer,
                        node: e,
                        getVar: function(t) {
                            return i._varInstances[t];
                        },
                        triggerResetFn: function(t) {
                            i.setValue(t, !1);
                        }
                    }, p = (this._layerEvaluations = t.layers.map(function(t) {
                        var e;
                        return new Vr(t, b({}, f, {
                            mask: null !== (e = t.mask) && void 0 !== e ? e : void 0
                        }));
                    })).length, d = 0; d < p; ++d) {
                        var _ = t.layers[d].mask;
                        if (_) {
                            var g = _.filterDisabledNodes(f.node);
                            this._blendBuffer.setMask(d, g);
                        }
                    }
                }
                var e = t.prototype;
                return e.update = function(t) {
                    for (var e = this._blendBuffer, n = this._layerEvaluations, i = n.length, r = 0; r < i; ++r) {
                        var a = n[r];
                        a.update(t), e.commitLayerChanges(r, a.weight * a.passthroughWeight);
                    }
                    if (this._hasAutoTrigger) {
                        var o = this._varInstances;
                        for (var s in o) {
                            var u = o[s];
                            u.type === Ot.TRIGGER && u.resetMode === Rt.NEXT_FRAME_OR_AFTER_CONSUMED && (u.value = !1);
                        }
                    }
                    this._blendBuffer.apply();
                }, e.getVariables = function() {
                    return Object.entries(this._varInstances);
                }, e.getCurrentStateStatus = function(t) {
                    return this._layerEvaluations[t].getCurrentStateStatus();
                }, e.getCurrentClipStatuses = function(t) {
                    return this._layerEvaluations[t].getCurrentClipStatuses();
                }, e.getCurrentTransition = function(t) {
                    var e = this._layerEvaluations, n = this._currentTransitionCache;
                    return e[t].getCurrentTransition(n) ? n : null;
                }, e.getNextStateStatus = function(t) {
                    return this._layerEvaluations[t].getNextStateStatus();
                }, e.getNextClipStatuses = function(t) {
                    return _(this.getCurrentTransition(t)), this._layerEvaluations[t].getNextClipStatuses();
                }, e.getValue = function(t) {
                    var e = this._varInstances[t];
                    return e ? e.value : void 0;
                }, e.setValue = function(t, e) {
                    var n = this._varInstances[t];
                    n && (n.value = e);
                }, e.setLayerWeight = function(t, e) {
                    this._layerEvaluations[t].weight = e;
                }, t;
            }(), Vr = function() {
                function t(t, e) {
                    this.passthroughWeight = 1, this._nodes = [], this._topLevelEntry = void 0, this._topLevelExit = void 0, 
                    this._currentNode = void 0, this._currentTransitionToNode = null, this._currentTransitionPath = [], 
                    this._transitionProgress = 0, this._fromWeight = 0, this._toWeight = 0, this._fromUpdated = !1, 
                    this._toUpdated = !1, this.name = t.name, this._controller = e.controller, this.weight = t.weight;
                    var n = this._addStateMachine(t.stateMachine, null, b({}, e), t.name), i = n.entry, r = n.exit;
                    this._topLevelEntry = i, this._topLevelExit = r, this._currentNode = i, this._resetTrigger = e.triggerResetFn;
                }
                var e = t.prototype;
                return e.update = function(t) {
                    this.exited || (this._fromWeight = 1, this._toWeight = 0, this._eval(t), this._sample());
                }, e.getCurrentStateStatus = function() {
                    var t = this._currentNode;
                    return t.kind === Br.animation ? t.getFromPortStatus() : null;
                }, e.getCurrentClipStatuses = function() {
                    var t = this._currentNode;
                    return t.kind === Br.animation ? t.getClipStatuses(this._fromWeight) : jr;
                }, e.getCurrentTransition = function(t) {
                    var e = this._currentTransitionPath;
                    if (0 !== e.length) {
                        if (e[e.length - 1].to.kind !== Br.animation) return !1;
                        var n = e[0], i = n.duration, r = n.normalizedDuration, a = t.duration = r ? i * (this._currentNode.kind === Br.animation ? this._currentNode.duration : 0) : i;
                        return t.time = this._transitionProgress * a, !0;
                    }
                    return !1;
                }, e.getNextStateStatus = function() {
                    return u(this._currentTransitionToNode && this._currentTransitionToNode.kind !== Br.empty), 
                    this._currentTransitionToNode.getToPortStatus();
                }, e.getNextClipStatuses = function() {
                    var t, e = this._currentTransitionPath, n = e[e.length - 1].to;
                    return u(n.kind === Br.animation), null !== (t = n.getClipStatuses(this._toWeight)) && void 0 !== t ? t : jr;
                }, e._addStateMachine = function(t, e, n, i) {
                    for (var r, a, s, u = this, l = Array.from(t.states()), c = l.map(function(e) {
                        return e instanceof sn ? new Jr(e, n) : e === t.entryState ? r = new ca(e, Br.entry, e.name) : e === t.exitState ? s = new ca(e, Br.exit, e.name) : e === t.anyState ? a = new ca(e, Br.any, e.name) : e instanceof hn ? new ha(e) : null;
                    }), h = {
                        components: null,
                        parent: e,
                        entry: r,
                        exit: s,
                        any: a
                    }, f = 0; f < l.length; ++f) {
                        var p = c[f];
                        p && (p.stateMachine = h);
                    }
                    for (var d = l.map(function(t) {
                        if (t instanceof dn) {
                            var e = u._addStateMachine(t.stateMachine, h, n, i + "/" + t.name);
                            return e.components = new Zr(t), e;
                        }
                        return null;
                    }), _ = 0; _ < l.length; ++_) {
                        var g = l[_], v = t.getOutgoings(g), m = [], y = void 0;
                        y = g instanceof dn ? d[_].exit : c[_];
                        for (var b, T = function() {
                            var t, e = b.value, i = e.to, r = l.findIndex(function(t) {
                                return t === e.to;
                            });
                            t = i instanceof dn ? d[r].entry : c[r];
                            var a = {
                                conditions: e.conditions.map(function(t) {
                                    return t[en](n);
                                }),
                                to: t,
                                triggers: void 0,
                                duration: 0,
                                normalizedDuration: !1,
                                exitCondition: 0,
                                exitConditionEnabled: !1
                            };
                            e instanceof cn ? (a.duration = e.duration, a.normalizedDuration = e.relativeDuration, 
                            a.exitConditionEnabled = e.exitConditionEnabled, a.exitCondition = e.exitCondition) : e instanceof fn && (a.duration = e.duration), 
                            a.conditions.forEach(function(t, n) {
                                var i, r = e.conditions[n];
                                r instanceof Tr && r.trigger && (null !== (i = a.triggers) && void 0 !== i ? i : a.triggers = []).push(r.trigger);
                            }), m.push(a);
                        }, E = o(v); !(b = E()).done; ) T();
                        y.outgoingTransitions = m;
                    }
                    return h;
                }, e._eval = function(t) {
                    if (u(!this.exited), An("[Layer " + this.name + "]: UpdateStart " + t + "s"), this._continueDanglingTransition()) return 0;
                    for (var e = t, n = !0, i = 0; n || e > 0; ) {
                        if (n = !1, 100 === i) {
                            y(14e3, 100);
                            break;
                        }
                        if (++i, this._currentTransitionPath.length > 0) {
                            if (e -= this._updateCurrentTransition(e), this._currentNode.kind === Br.exit) break;
                            0 === this._currentTransitionPath.length && (n = !0);
                        } else {
                            var r = this._currentNode, a = this._matchCurrentNodeTransition(e);
                            if (a) {
                                var o = a.transition, s = a.requires;
                                if (Sn("[SubStateMachine " + this.name + "]: CurrentNodeUpdate: " + r.name), e -= s, 
                                r.kind === Br.animation && (r.updateFromPort(s), this._fromUpdated = !0), this._switchTo(o)) break;
                                n = !0;
                            } else Sn("[SubStateMachine " + this.name + "]: CurrentNodeUpdate: " + r.name), 
                            r.kind === Br.animation ? (r.updateFromPort(e), this._fromUpdated = !0, e = 0) : e = 0;
                        }
                    }
                    return Sn("[SubStateMachine " + this.name + "]: UpdateEnd"), this._fromUpdated && this._currentNode.kind === Br.animation && (this._fromUpdated = !1, 
                    this._currentNode.triggerFromPortUpdate(this._controller)), this._currentTransitionToNode && this._toUpdated && this._currentTransitionToNode.kind === Br.animation && (this._toUpdated = !1, 
                    this._currentTransitionToNode.triggerToPortUpdate(this._controller)), e;
                }, e._sample = function() {
                    var t = this._currentNode, e = this._currentTransitionToNode, n = this._fromWeight, i = this._toWeight;
                    t.kind === Br.empty ? (this.passthroughWeight = i, e && e.kind === Br.animation && e.sampleToPort(1)) : e && e.kind === Br.empty ? (this.passthroughWeight = n, 
                    t.kind === Br.animation && t.sampleFromPort(1)) : (this.passthroughWeight = 1, t.kind === Br.animation && t.sampleFromPort(n), 
                    e && e.kind === Br.animation && e.sampleToPort(i));
                }, e._matchCurrentNodeTransition = function(t) {
                    var e = this._currentNode, n = 1 / 0, i = null, r = this._matchTransition(e, e, t, qr);
                    if (r && (n = r.requires, i = r.transition), e.kind === Br.animation) for (var a = e.stateMachine; null !== a; a = a.parent) {
                        var o = this._matchTransition(a.any, e, t, Yr);
                        o && o.requires < n && (n = o.requires, i = o.transition);
                    }
                    return i ? Qr.set(i, n) : null;
                }, e._matchTransition = function(t, e, n, i) {
                    u(t === e || t.kind === Br.any);
                    for (var r = t.outgoingTransitions, a = r.length, o = 1 / 0, s = null, l = 0; l < a; ++l) {
                        var c = r[l], h = c.conditions, f = h.length;
                        if (0 === f) {
                            if (t.kind === Br.entry || t.kind === Br.exit) return i.set(c, 0);
                            if (!c.exitConditionEnabled) continue;
                        }
                        var p = 0;
                        if (e.kind === Br.animation && c.exitConditionEnabled) {
                            var d = e.duration * c.exitCondition;
                            if ((p = Math.max(d - e.fromPortTime, 0)) > n) continue;
                        }
                        for (var _ = !0, g = 0; g < f; ++g) if (!h[g].eval()) {
                            _ = !1;
                            break;
                        }
                        if (_) {
                            if (0 === p) return i.set(c, 0);
                            p < o && (o = p, s = c);
                        }
                    }
                    return s ? i.set(s, o) : null;
                }, e._switchTo = function(t) {
                    var e = this._currentNode;
                    An("[SubStateMachine " + this.name + "]: STARTED " + e.name + " -> " + t.to.name + ".");
                    var n = this._currentTransitionPath;
                    this._consumeTransition(t), n.push(t);
                    var i = this._matchTransitionPathUntilMotion();
                    return !i || (this._doTransitionToMotion(i), !1);
                }, e._continueDanglingTransition = function() {
                    var t = this._currentTransitionPath, e = t.length;
                    if (0 === e) return !1;
                    var n = t[e - 1].to;
                    if (n.kind !== Br.animation && n.kind !== Br.empty) {
                        var i = this._matchTransitionPathUntilMotion();
                        return !i || (this._doTransitionToMotion(i), !1);
                    }
                    return !1;
                }, e._matchTransitionPathUntilMotion = function() {
                    for (var t = this._currentTransitionPath, e = t[t.length - 1].to; e.kind !== Br.animation && e.kind !== Br.empty; ) {
                        var n = this._matchTransition(e, e, 0, Qr);
                        if (!n) break;
                        var i = n.transition;
                        this._consumeTransition(i), t.push(i), e = i.to;
                    }
                    return e.kind === Br.animation || e.kind === Br.empty ? e : null;
                }, e._consumeTransition = function(t) {
                    var e = t.to;
                    e.kind === Br.entry && this._callEnterMethods(e);
                }, e._resetTriggersAlongThePath = function() {
                    for (var t = this._currentTransitionPath, e = t.length, n = 0; n < e; ++n) {
                        var i = t[n];
                        this._resetTriggersOnTransition(i);
                    }
                }, e._doTransitionToMotion = function(t) {
                    this._resetTriggersAlongThePath(), this._transitionProgress = 0, this._currentTransitionToNode = t, 
                    this._toUpdated = !1, t.kind === Br.animation && t.resetToPort(), this._callEnterMethods(t);
                }, e._updateCurrentTransition = function(t) {
                    var e, n = this._currentTransitionPath, i = this._currentTransitionToNode;
                    _(n.length > 0);
                    var r = n[0], a = r.duration, o = r.normalizedDuration, s = this._currentNode, l = i, c = 0, h = 0;
                    if (a <= 0) c = 0, h = 1; else {
                        u(s.kind === Br.animation || s.kind === Br.empty);
                        var f = this._transitionProgress, p = s.kind === Br.empty ? a : o ? a * s.duration : a, d = f * p, g = p - d;
                        c = Math.min(g, t), h = this._transitionProgress = (d + c) / p;
                    }
                    var v = null !== (e = null == l ? void 0 : l.name) && void 0 !== e ? e : "<Empty>";
                    this._fromWeight = 1 - h, this._toWeight = h;
                    var m = 0 !== c, y = 1 === h;
                    if (s.kind === Br.animation && m && (An("Update " + s.name), s.updateFromPort(c), 
                    this._fromUpdated = !0), l.kind === Br.animation && m && (An("Update " + l.name), 
                    l.updateToPort(c), this._toUpdated = !0), y) {
                        Sn("[SubStateMachine " + this.name + "]: Transition finished:  " + s.name + " -> " + v + "."), 
                        this._callExitMethods(s);
                        for (var b = this._currentTransitionPath, T = b.length, E = 0; E < T; ++E) {
                            var w = b[E].to;
                            w.kind === Br.exit && this._callExitMethods(w);
                        }
                        this._fromUpdated = this._toUpdated, this._toUpdated = !1, l.kind === Br.animation && l.finishTransition(), 
                        this._currentNode = l, this._currentTransitionToNode = null, this._currentTransitionPath.length = 0, 
                        this._fromWeight = 1, this._toWeight = 0;
                    }
                    return c;
                }, e._resetTriggersOnTransition = function(t) {
                    var e = t.triggers;
                    if (e) for (var n = e.length, i = 0; i < n; ++i) {
                        var r = e[i];
                        this._resetTrigger(r);
                    }
                }, e._resetTrigger = function(t) {
                    (0, this._triggerReset)(t);
                }, e._callEnterMethods = function(t) {
                    var e, n = this._controller;
                    switch (t.kind) {
                      default:
                        break;

                      case Br.animation:
                        t.components.callMotionStateEnterMethods(n, t.getToPortStatus());
                        break;

                      case Br.entry:
                        null === (e = t.stateMachine.components) || void 0 === e || e.callStateMachineEnterMethods(n);
                    }
                }, e._callExitMethods = function(t) {
                    var e, n = this._controller;
                    switch (t.kind) {
                      default:
                        break;

                      case Br.animation:
                        t.components.callMotionStateExitMethods(n, t.getFromPortStatus());
                        break;

                      case Br.exit:
                        null === (e = t.stateMachine.components) || void 0 === e || e.callStateMachineExitMethods(n);
                    }
                }, l(t, [ {
                    key: "exited",
                    get: function() {
                        return this._currentNode === this._topLevelExit;
                    }
                } ]), t;
            }(), Gr = Object.freeze({
                next: function() {
                    return {
                        done: !0,
                        value: void 0
                    };
                }
            }), jr = Object.freeze(((Ur = {})[Symbol.iterator] = function() {
                return Gr;
            }, Ur)), Hr = function() {
                function t() {
                    this.transition = null, this.requires = 0;
                }
                return t.prototype.set = function(t, e) {
                    return this.transition = t, this.requires = e, this;
                }, t;
            }(), Qr = new Hr(), qr = new Hr(), Yr = new Hr();
            !function(t) {
                t[t.entry = 0] = "entry", t[t.exit = 1] = "exit", t[t.any = 2] = "any", t[t.animation = 3] = "animation", 
                t[t.empty = 4] = "empty";
            }(Br || (Br = {}));
            var Xr = function(t) {
                this.name = void 0, this.outgoingTransitions = [], this.name = t.name;
            }, Zr = function() {
                function t(t) {
                    this._components = t.instantiateComponents();
                }
                var e = t.prototype;
                return e.callMotionStateEnterMethods = function(t, e) {
                    this._callMotionStateCallbackIfNonDefault("onMotionStateEnter", t, e);
                }, e.callMotionStateUpdateMethods = function(t, e) {
                    this._callMotionStateCallbackIfNonDefault("onMotionStateUpdate", t, e);
                }, e.callMotionStateExitMethods = function(t, e) {
                    this._callMotionStateCallbackIfNonDefault("onMotionStateExit", t, e);
                }, e.callStateMachineEnterMethods = function(t) {
                    this._callStateMachineCallbackIfNonDefault("onStateMachineEnter", t);
                }, e.callStateMachineExitMethods = function(t) {
                    this._callStateMachineCallbackIfNonDefault("onStateMachineExit", t);
                }, e._callMotionStateCallbackIfNonDefault = function(t, e, n) {
                    for (var i = this._components, r = i.length, a = 0; a < r; ++a) {
                        var o = i[a];
                        o[t] !== Wr.prototype[t] && o[t](e, n);
                    }
                }, e._callStateMachineCallbackIfNonDefault = function(t, e) {
                    for (var n = this._components, i = n.length, r = 0; r < i; ++r) {
                        var a = n[r];
                        a[t] !== Wr.prototype[t] && a[t](e);
                    }
                }, t;
            }(), Jr = function(t) {
                function e(e, n) {
                    var i, r, a;
                    if ((a = t.call(this, e) || this).kind = Br.animation, a._source = null, a._baseSpeed = 1, 
                    a._speed = 1, a._fromPort = {
                        progress: 0,
                        statusCache: {
                            progress: 0
                        }
                    }, a._toPort = {
                        progress: 0,
                        statusCache: {
                            progress: 0
                        }
                    }, a._baseSpeed = e.speed, a._setSpeedMultiplier(1), e.speedMultiplierEnabled && e.speedMultiplier) {
                        var o = e.speedMultiplier, s = n.getVar(o);
                        if (Zn(s, o)) {
                            !function(t, e, n) {
                                if (t !== e) throw new tn(n, "number");
                            }(s.type, Ot.FLOAT, o), s.bind(a._setSpeedMultiplier, p(a));
                            var u = s.value;
                            a._setSpeedMultiplier(u);
                        }
                    }
                    var l = b({}, n), c = null !== (i = null === (r = e.motion) || void 0 === r ? void 0 : r[en](l)) && void 0 !== i ? i : null;
                    return c && Object.defineProperty(c, "__DEBUG_ID__", {
                        value: a.name
                    }), a._source = c, a.components = new Zr(e), a;
                }
                c(e, t);
                var n = e.prototype;
                return n.updateFromPort = function(t) {
                    this._fromPort.progress = $r(this._fromPort.progress, this.duration, t * this._speed);
                }, n.updateToPort = function(t) {
                    this._toPort.progress = $r(this._toPort.progress, this.duration, t * this._speed);
                }, n.triggerFromPortUpdate = function(t) {
                    this.components.callMotionStateUpdateMethods(t, this.getFromPortStatus());
                }, n.triggerToPortUpdate = function(t) {
                    this.components.callMotionStateUpdateMethods(t, this.getToPortStatus());
                }, n.getFromPortStatus = function() {
                    var t = this._fromPort.statusCache;
                    return t.progress = Kr(this._fromPort.progress), t;
                }, n.getToPortStatus = function() {
                    var t = this._toPort.statusCache;
                    return t.progress = Kr(this._toPort.progress), t;
                }, n.resetToPort = function() {
                    this._toPort.progress = 0;
                }, n.finishTransition = function() {
                    this._fromPort.progress = this._toPort.progress;
                }, n.sampleFromPort = function(t) {
                    var e;
                    null === (e = this._source) || void 0 === e || e.sample(this._fromPort.progress, t);
                }, n.sampleToPort = function(t) {
                    var e;
                    null === (e = this._source) || void 0 === e || e.sample(this._toPort.progress, t);
                }, n.getClipStatuses = function(t) {
                    var e, n = this._source;
                    return n ? ((e = {})[Symbol.iterator] = function() {
                        return n.getClipStatuses(t);
                    }, e) : jr;
                }, n._setSpeedMultiplier = function(t) {
                    this._speed = this._baseSpeed * t;
                }, l(e, [ {
                    key: "duration",
                    get: function() {
                        var t, e;
                        return null !== (t = null === (e = this._source) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0;
                    }
                }, {
                    key: "fromPortTime",
                    get: function() {
                        return this._fromPort.progress * this.duration;
                    }
                } ]), e;
            }(Xr);
            function $r(t, e, n) {
                return 0 === e ? 0 : t + n / e;
            }
            function Kr(t) {
                return t - Math.trunc(t);
            }
            var ta, ea, na, ia, ra, aa, oa, sa, ua, la, ca = function(t) {
                function e(e, n) {
                    var i;
                    return (i = t.call(this, e) || this).kind = void 0, i.kind = n, i;
                }
                return c(e, t), e;
            }(Xr), ha = function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this, e) || this).kind = Br.empty, n;
                }
                return c(e, t), e;
            }(Xr), fa = (ta = w("cc.animation.AnimationController"), ea = B(), na = U(wn), ta(ia = ea((oa = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "graph", aa, p(e)), 
                    e._graphEval = null, e;
                }
                c(e, t);
                var n = e.prototype;
                return n.__preload = function() {
                    this.graph && (this._graphEval = new Dr(this.graph, this.node, this));
                }, n.update = function(t) {
                    var e;
                    null === (e = this._graphEval) || void 0 === e || e.update(t);
                }, n.getVariables = function() {
                    return this._graphEval.getVariables();
                }, n.setValue = function(t, e) {
                    this._graphEval.setValue(t, e);
                }, n.getValue = function(t) {
                    return this._graphEval.getValue(t);
                }, n.getCurrentStateStatus = function(t) {
                    return this._graphEval.getCurrentStateStatus(t);
                }, n.getCurrentClipStatuses = function(t) {
                    return this._graphEval.getCurrentClipStatuses(t);
                }, n.getCurrentTransition = function(t) {
                    return this._graphEval.getCurrentTransition(t);
                }, n.getNextStateStatus = function(t) {
                    return this._graphEval.getNextStateStatus(t);
                }, n.getNextClipStatuses = function(t) {
                    return this._graphEval.getNextClipStatuses(t);
                }, n.setLayerWeight = function(t, e) {
                    return this._graphEval.setLayerWeight(t, e);
                }, e;
            }(W), aa = a((ra = oa).prototype, "graph", [ na ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ia = ra)) || ia) || ia);
            e("animation", Object.freeze({
                __proto__: null,
                UniformProxyFactory: It,
                MorphWeightValueProxy: xt,
                MorphWeightsValueProxy: Pt,
                MorphWeightsAllValueProxy: Lt,
                Track: J,
                TrackPath: $,
                RealTrack: K,
                VectorTrack: tt,
                QuatTrack: et,
                ColorTrack: nt,
                SizeTrack: it,
                ObjectTrack: rt,
                isPropertyPath: at,
                isCustomPath: ot,
                HierarchyPath: st,
                ComponentPath: ut,
                CubicSplineVec2Value: lt,
                CubicSplineVec3Value: ct,
                CubicSplineVec4Value: ht,
                CubicSplineQuatValue: ft,
                CubicSplineNumberValue: pt,
                AnimationController: fa,
                get VariableType() {
                    return Ot;
                },
                StateMachineComponent: Wr
            }));
            var pa = e("AnimationManager", w((la = ua = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this)._anims = new E([]), e._crossFades = new E([]), 
                    e._delayEvents = [], e._blendStateBuffer = new Rr(), e._sockets = [], e;
                }
                c(e, t);
                var n = e.prototype;
                return n.addCrossFade = function(t) {
                    -1 === this._crossFades.array.indexOf(t) && this._crossFades.push(t);
                }, n.removeCrossFade = function(t) {
                    var e = this._crossFades.array.indexOf(t);
                    e >= 0 ? this._crossFades.fastRemoveAt(e) : T(3907);
                }, n.update = function(t) {
                    var e = this._delayEvents, n = this._crossFades, i = this._sockets, a = n.array;
                    for (n.i = 0; n.i < a.length; ++n.i) a[n.i].update(t);
                    var o = this._anims, s = o.array;
                    for (o.i = 0; o.i < s.length; ++o.i) {
                        var u = s[o.i];
                        u.isMotionless || u.update(t);
                    }
                    this._blendStateBuffer.apply();
                    for (var l = r.director.getTotalFrames(), c = 0, h = i.length; c < h; c++) {
                        var f = i[c], p = f.target, d = f.transform;
                        p.matrix = H(d, l);
                    }
                    for (var _ = 0, g = e.length; _ < g; _++) {
                        var v = e[_];
                        v.fn.apply(v.thisArg, v.args);
                    }
                    e.length = 0;
                }, n.destruct = function() {}, n.addAnimation = function(t) {
                    -1 === this._anims.array.indexOf(t) && this._anims.push(t);
                }, n.removeAnimation = function(t) {
                    var e = this._anims.array.indexOf(t);
                    e >= 0 ? this._anims.fastRemoveAt(e) : T(3907);
                }, n.pushDelayEvent = function(t, e, n) {
                    this._delayEvents.push({
                        fn: t,
                        thisArg: e,
                        args: n
                    });
                }, n.addSockets = function(t, e) {
                    for (var n = this, i = function(i) {
                        var r = e[i];
                        if (n._sockets.find(function(t) {
                            return t.target === r.target;
                        })) return "continue";
                        var a = t.getChildByPath(r.path), o = r.target && a && q(a, t);
                        o && n._sockets.push({
                            target: r.target,
                            transform: o
                        });
                    }, r = 0; r < e.length; ++r) i(r);
                }, n.removeSockets = function(t, e) {
                    for (var n = 0; n < e.length; ++n) for (var i = e[n], r = 0; r < this._sockets.length; ++r) {
                        var a = this._sockets[r];
                        if (a.target === i.target) {
                            Q(a.transform.node), this._sockets[r] = this._sockets[this._sockets.length - 1], 
                            this._sockets.length--;
                            break;
                        }
                    }
                }, l(e, [ {
                    key: "blendState",
                    get: function() {
                        return this._blendStateBuffer;
                    }
                } ]), e;
            }(j), ua.ID = "animation", sa = la)) || sa);
            V.on(G.EVENT_INIT, function() {
                var t = new pa();
                V.registerSystem(pa.ID, t, j.Priority.HIGH);
            }), r.AnimationManager = pa, r.easing = D;
        }
    };
});