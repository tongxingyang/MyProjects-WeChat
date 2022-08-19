System.register([ "./texture-barrier-60b5983b.js", "./json-asset-933a1d4c.js", "./renderable-component-7c6600ed.js", "./deprecated-26630860.js", "./mesh-f5415e9d.js", "./mesh-renderer-fb3b7695.js", "./skeleton-b0039cea.js", "./skeletal-animation-utils-121f35a2.js", "./deprecated-e75308d4.js", "./animation-component-aa8a7f84.js" ], function(t) {
    var e, i, n, o, s, a, r, c, u, l, h, d, f, p, m, k, _, v, S, A, g, y, b, B, C, j, w, I, P, T;
    return {
        setters: [ function(t) {
            e = t.l, i = t.bT, n = t.c0, o = t.bX, s = t.i, a = t.bW, r = t.bU, c = t.c1, u = t.b$;
        }, function(t) {
            l = t.Z, h = t.Q, d = t.W, f = t.bW, p = t.bZ, m = t.b6, k = t.cd, _ = t.bX, v = t.b$, 
            S = t.cg, A = t.ds, g = t.ch, y = t.cc;
        }, function() {}, function() {}, function() {}, function() {}, function() {}, function(e) {
            b = e.S, B = e.g, t("SkelAnimDataHub", e.S);
        }, function(t) {
            C = t.J, j = t.c, w = t.S;
        }, function(t) {
            I = t.a, P = t.p, T = t.l;
        } ],
        execute: function() {
            var x = function() {
                function t(t) {
                    this.jointTexturePool = void 0, this.jointAnimationInfo = void 0, this.jointTexturePool = new C(t), 
                    this.jointAnimationInfo = new j(t);
                }
                var e = t.prototype;
                return e.releaseSkeleton = function(t) {
                    this.jointTexturePool.releaseSkeleton(t);
                }, e.releaseAnimationClip = function(t) {
                    this.jointTexturePool.releaseAnimationClip(t);
                }, e.clear = function() {
                    this.jointTexturePool.clear(), this.jointAnimationInfo.clear();
                }, t;
            }();
            e.internal.DataPoolManager = x;
            var O, D, M, U, z, E, R, L, N, W, q, F, X, Z, $, H, J, Q, G, K, V = new l(), Y = new l(), tt = t("SkeletalAnimationState", function(t) {
                function n(i, n) {
                    var o;
                    return void 0 === n && (n = ""), (o = t.call(this, i, n) || this)._frames = 1, o._bakedDuration = 0, 
                    o._animInfo = null, o._sockets = [], o._animInfoMgr = void 0, o._parent = null, 
                    o._curvesInited = !1, o._animInfoMgr = e.director.root.dataPoolManager.jointAnimationInfo, 
                    o;
                }
                i(n, t);
                var o = n.prototype;
                return o.initialize = function(e) {
                    if (!this._curveLoaded) {
                        this._parent = e.getComponent("cc.SkeletalAnimation");
                        var i = this._parent.useBakedAnimation;
                        this._doNotCreateEval = i, t.prototype.initialize.call(this, e), this._curvesInited = !i;
                        var n = b.getOrExtract(this.clip), o = n.frames, s = n.samples;
                        this._frames = o - 1, this._animInfo = this._animInfoMgr.getData(e.uuid), this._bakedDuration = this._frames / s, 
                        this.setUseBaked(i);
                    }
                }, o.setUseBaked = function(e) {
                    e ? (this._sampleCurves = this._sampleCurvesBaked, this.duration = this._bakedDuration) : (this._sampleCurves = t.prototype._sampleCurves, 
                    this.duration = this.clip.duration, this._curvesInited || (this._curveLoaded = !1, 
                    t.prototype.initialize.call(this, this._targetNode), this._curvesInited = !0));
                }, o.rebuildSocketCurves = function(t) {
                    if (this._sockets.length = 0, this._targetNode) for (var e = this._targetNode, i = 0; i < t.length; ++i) {
                        var n = t[i], o = e.getChildByPath(n.path);
                        if (n.target) {
                            for (var s = b.getOrExtract(this.clip), a = n.path, r = s.joints[a], c = o, u = void 0; !r; ) {
                                var f = a.lastIndexOf("/");
                                if (a = a.substring(0, f), r = s.joints[a], c && (u || (u = l.identity(Y)), l.fromRTS(V, c.rotation, c.position, c.scale), 
                                l.multiply(u, V, u), c = c.parent), f < 0) break;
                            }
                            for (var p = r && r.transforms, m = s.frames, k = [], _ = 0; _ < m; _++) {
                                var v;
                                v = p && u ? l.multiply(V, p[_], u) : p ? p[_] : u || new l();
                                var S = {
                                    pos: new h(),
                                    rot: new d(),
                                    scale: new h()
                                };
                                l.toRTS(v, S.rot, S.pos, S.scale), k.push(S);
                            }
                            this._sockets.push({
                                target: n.target,
                                frames: k
                            });
                        }
                    }
                }, o._setAnimInfoDirty = function(t, e) {
                    t.dirty = e;
                }, o._sampleCurvesBaked = function(t) {
                    var e = t / this.duration, i = this._animInfo, n = this.clip;
                    i.currentClip !== n && (this._animInfoMgr.switchClip(this._animInfo, n), this._parent.getUsers().forEach(function(t) {
                        t.uploadAnimation(n);
                    }));
                    var o = e * this._frames + .5 | 0;
                    if (o !== i.data[0]) {
                        i.data[0] = o, this._setAnimInfoDirty(i, !0);
                        for (var s = 0; s < this._sockets.length; ++s) {
                            var a = this._sockets[s], r = a.target, c = a.frames[o], u = c.pos, l = c.rot, h = c.scale;
                            r.setRTS(l, u, h);
                        }
                    }
                }, n;
            }(I)), et = t("Socket", (O = f("cc.SkeletalAnimation.Socket"), D = p(m), O((z = n((U = function(t, e) {
                void 0 === t && (t = ""), void 0 === e && (e = null), c(this, "path", z, this), 
                c(this, "target", E, this), this.path = t, this.target = e;
            }).prototype, "path", [ _, v ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), E = n(U.prototype, "target", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), M = U)) || M));
            o.setClassAlias(et, "cc.SkeletalAnimationComponent.Socket");
            var it = new l(), nt = new l();
            function ot(t, e, i) {
                void 0 === e && (e = ""), void 0 === i && (i = []);
                for (var n = 0; n < t.children.length; n++) {
                    var o = t.children[n];
                    if (o) {
                        var s = e ? e + "/" + o.name : o.name;
                        i.push(s), ot(o, s, i);
                    }
                }
                return i;
            }
            var st, at = (R = f("cc.SkeletalAnimation"), L = S(), N = A(99), W = g(), q = p([ et ]), 
            F = y(), X = y(), Z = p([ et ]), st = R($ = L($ = N($ = k($ = W((K = G = function(t) {
                function n() {
                    for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                    return e = t.call.apply(t, [ this ].concat(n)) || this, c(e, "_useBakedAnimation", J, u(e)), 
                    c(e, "_sockets", Q, u(e)), e._users = new Set(), e._currentBakedState = null, e;
                }
                i(n, t);
                var o = n.prototype;
                return o.onLoad = function() {
                    t.prototype.onLoad.call(this);
                    for (var e = this.node.getComponentsInChildren(w), i = 0; i < e.length; ++i) {
                        var n = e[i];
                        n.skinningRoot === this.node && this.notifySkinnedMeshAdded(n);
                    }
                }, o.onDestroy = function() {
                    t.prototype.onDestroy.call(this), e.director.root.dataPoolManager.jointAnimationInfo.destroy(this.node.uuid), 
                    P().removeSockets(this.node, this._sockets), this._removeAllUsers();
                }, o.start = function() {
                    this.sockets = this._sockets, this.useBakedAnimation = this._useBakedAnimation, 
                    t.prototype.start.call(this);
                }, o.pause = function() {
                    var e;
                    this._useBakedAnimation ? null === (e = this._currentBakedState) || void 0 === e || e.pause() : t.prototype.pause.call(this);
                }, o.resume = function() {
                    var e;
                    this._useBakedAnimation ? null === (e = this._currentBakedState) || void 0 === e || e.resume() : t.prototype.resume.call(this);
                }, o.stop = function() {
                    this._useBakedAnimation ? this._currentBakedState && (this._currentBakedState.stop(), 
                    this._currentBakedState = null) : t.prototype.stop.call(this);
                }, o.querySockets = function() {
                    var t = this._defaultClip && Object.keys(b.getOrExtract(this._defaultClip).joints).sort().reduce(function(t, e) {
                        return e.startsWith(t[t.length - 1]) || t.push(e), t;
                    }, []) || [];
                    if (!t.length) return [ "please specify a valid default animation clip first" ];
                    for (var e = [], i = 0; i < t.length; i++) {
                        var n = t[i], o = this.node.getChildByPath(n);
                        o && (e.push(n), ot(o, n, e));
                    }
                    return e;
                }, o.rebuildSocketAnimations = function() {
                    for (var t, e = s(this._sockets); !(t = e()).done; ) {
                        var i = t.value, n = this.node.getChildByPath(i.path), o = i.target;
                        n && o && (o.name = i.path.substring(i.path.lastIndexOf("/") + 1) + " Socket", o.parent = this.node, 
                        B(n, this.node, it), l.fromRTS(nt, o.rotation, o.position, o.scale), l.equals(nt, it) || (o.matrix = it));
                    }
                    for (var a = 0, r = Object.keys(this._nameToState); a < r.length; a++) {
                        var c = r[a];
                        this._nameToState[c].rebuildSocketCurves(this._sockets);
                    }
                }, o.createSocket = function(t) {
                    var e = this._sockets.find(function(e) {
                        return e.path === t;
                    });
                    if (e) return e.target;
                    if (!this.node.getChildByPath(t)) return console.warn("illegal socket path"), null;
                    var i = new m();
                    return i.parent = this.node, this._sockets.push(new et(t, i)), this.rebuildSocketAnimations(), 
                    i;
                }, o.notifySkinnedMeshAdded = function(t) {
                    var e = this._useBakedAnimation, i = t.associatedAnimation;
                    if (i && i._users.delete(t), t.associatedAnimation = this, t.setUseBakedAnimation(e, !0), 
                    e) {
                        var n = this._currentBakedState;
                        n && t.uploadAnimation(n.clip);
                    }
                    this._users.add(t);
                }, o.notifySkinnedMeshRemoved = function(t) {
                    a(t.associatedAnimation === this || null === t.associatedAnimation), t.setUseBakedAnimation(!1), 
                    t.associatedAnimation = null, this._users.delete(t);
                }, o.getUsers = function() {
                    return this._users;
                }, o._createState = function(t, e) {
                    return new tt(t, e);
                }, o._doCreateState = function(e, i) {
                    var n = t.prototype._doCreateState.call(this, e, i);
                    return n.rebuildSocketCurves(this._sockets), n;
                }, o.doPlayOrCrossFade = function(e, i) {
                    if (this._useBakedAnimation) {
                        this._currentBakedState && this._currentBakedState.stop();
                        var n = e;
                        this._currentBakedState = n, n.play();
                    } else t.prototype.doPlayOrCrossFade.call(this, e, i);
                }, o._removeAllUsers = function() {
                    var t = this;
                    Array.from(this._users).forEach(function(e) {
                        t.notifySkinnedMeshRemoved(e);
                    });
                }, r(n, [ {
                    key: "sockets",
                    get: function() {
                        return this._sockets;
                    },
                    set: function(t) {
                        if (!this._useBakedAnimation) {
                            var e = P();
                            e.removeSockets(this.node, this._sockets), e.addSockets(this.node, t);
                        }
                        this._sockets = t, this.rebuildSocketAnimations();
                    }
                }, {
                    key: "useBakedAnimation",
                    get: function() {
                        return this._useBakedAnimation;
                    },
                    set: function(t) {
                        for (var e in this._useBakedAnimation = t, this._nameToState) this._nameToState[e].setUseBaked(t);
                        this._users.forEach(function(e) {
                            e.setUseBakedAnimation(t);
                        }), this._useBakedAnimation ? P().removeSockets(this.node, this._sockets) : (P().addSockets(this.node, this._sockets), 
                        this._currentBakedState = null);
                    }
                } ]), n;
            }(T), G.Socket = et, n((H = K).prototype, "sockets", [ q, F ], Object.getOwnPropertyDescriptor(H.prototype, "sockets"), H.prototype), 
            n(H.prototype, "useBakedAnimation", [ X ], Object.getOwnPropertyDescriptor(H.prototype, "useBakedAnimation"), H.prototype), 
            J = n(H.prototype, "_useBakedAnimation", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), Q = n(H.prototype, "_sockets", [ Z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), $ = H)) || $) || $) || $) || $) || $, t({
                SkeletalAnimation: st,
                SkeletalAnimationComponent: st
            }), st);
            e.SkeletalAnimationComponent = at, o.setClassAlias(at, "cc.SkeletalAnimationComponent");
        }
    };
});