System.register([ "./texture-barrier-60b5983b.js", "./json-asset-933a1d4c.js", "./index-f2b92470.js", "./deprecated-26630860.js", "./deprecated-ef6bb945.js", "./collision-matrix-ae46bfd8.js" ], function(t) {
    var e, o, i, n, r, a, p, s, c, u, l, y, f, _, h, g, b, d, m, w, D, O, S, j, P, L, C;
    return {
        setters: [ function(t) {
            e = t.bv, o = t.l, i = t.bT, n = t.bU, r = t.bK, a = t.cw, p = t.c0, s = t.c1, c = t.b$;
        }, function(t) {
            u = t.V, l = t.bW, y = t.dk, f = t.bZ, _ = t.bm, h = t.ch, g = t.a3, b = t.b$, d = t.a1, 
            m = t.Q, w = t.W, D = t.ae;
        }, function() {}, function(t) {
            O = t.g;
        }, function(t) {
            S = t.d, j = t.D, P = t.a;
        }, function(t) {
            L = t.C, C = t.P;
        } ],
        execute: function() {
            var x, A, E, T, k, I;
            t({
                E: void 0,
                P: void 0,
                a: void 0,
                b: void 0,
                c: void 0,
                d: void 0,
                g: void 0,
                s: function(t, e) {
                    z = t, o._global.CC_PHYSICS_2D_BUILTIN = "builtin" == t, o._global.CC_PHYSICS_2D_BOX2D = "box2d" == t, 
                    M = e;
                }
            }), function(t) {
                t[t.Static = 0] = "Static", t[t.Kinematic = 1] = "Kinematic", t[t.Dynamic = 2] = "Dynamic", 
                t[t.Animated = 3] = "Animated";
            }(x || (x = t("E", {}))), e(x), function(t) {
                t[t.None = 0] = "None", t[t.BOX = 1] = "BOX", t[t.CIRCLE = 2] = "CIRCLE", t[t.POLYGON = 3] = "POLYGON";
            }(A || (A = t("a", {}))), e(A), function(t) {
                t[t.None = 0] = "None", t[t.DISTANCE = 1] = "DISTANCE", t[t.SPRING = 2] = "SPRING", 
                t[t.WHEEL = 3] = "WHEEL", t[t.MOUSE = 4] = "MOUSE", t[t.FIXED = 5] = "FIXED", t[t.SLIDER = 6] = "SLIDER", 
                t[t.RELATIVE = 7] = "RELATIVE", t[t.HINGE = 8] = "HINGE";
            }(E || (E = t("b", {}))), e(E), function(t) {
                t[t.DEFAULT = 1] = "DEFAULT";
            }(T || (T = t("P", {}))), e(T), function(t) {
                t[t.Closest = 0] = "Closest", t[t.Any = 1] = "Any", t[t.AllClosest = 2] = "AllClosest", 
                t[t.All = 3] = "All";
            }(k || (k = t("c", {}))), t("C", {
                None: "none-contact",
                BEGIN_CONTACT: "begin-contact",
                END_CONTACT: "end-contact",
                PRE_SOLVE: "pre-solve",
                POST_SOLVE: "post-solve"
            }), function(t) {
                t[t.None = 0] = "None", t[t.Shape = 1] = "Shape", t[t.Joint = 2] = "Joint", t[t.Aabb = 4] = "Aabb", 
                t[t.Pair = 8] = "Pair", t[t.CenterOfMass = 16] = "CenterOfMass", t[t.Particle = 32] = "Particle", 
                t[t.Controller = 64] = "Controller", t[t.All = 63] = "All";
            }(I || (I = t("d", {})));
            var M, z, v = t("e", 32), F = function() {
                return 0;
            }, R = {
                impl: null,
                rigidBody: null,
                isAwake: !1,
                isSleeping: !1,
                initialize: F,
                setType: F,
                setLinearDamping: F,
                setAngularDamping: F,
                setGravityScale: F,
                setFixedRotation: F,
                setAllowSleep: F,
                isActive: F,
                setActive: F,
                wakeUp: F,
                sleep: F,
                getMass: F,
                getInertia: F,
                getLinearVelocity: F,
                setLinearVelocity: F,
                getLinearVelocityFromWorldPoint: F,
                getAngularVelocity: F,
                setAngularVelocity: F,
                getLocalVector: F,
                getWorldVector: F,
                getLocalPoint: F,
                getWorldPoint: F,
                getLocalCenter: F,
                getWorldCenter: F,
                applyForce: F,
                applyForceToCenter: F,
                applyTorque: F,
                applyLinearImpulse: F,
                applyLinearImpulseToCenter: F,
                applyAngularImpulse: F,
                onEnable: F,
                onDisable: F,
                onDestroy: F
            }, q = {
                INITED: !1
            }, N = {
                INITED: !1
            }, V = {
                impl: null,
                initialize: F,
                setDampingRatio: F,
                setFrequency: F,
                setMaxForce: F,
                setTarget: F,
                setDistance: F,
                setAngularOffset: F,
                setCorrectionFactor: F,
                setLinearOffset: F,
                setMaxLength: F,
                setMaxTorque: F,
                setLowerLimit: F,
                setUpperLimit: F,
                setMaxMotorForce: F,
                setMaxMotorTorque: F,
                setMotorSpeed: F,
                enableLimit: F,
                enableMotor: F,
                setLowerAngle: F,
                setUpperAngle: F
            }, B = null;
            o.internal.PhysicsGroup2D = T;
            var W, Y, G, H, U, J, X, K, $, Q, Z, tt, et, ot, it, nt, rt, at, pt, st, ct = t("f", function(t) {
                function o() {
                    var o;
                    (o = t.call(this) || this).velocityIterations = 10, o.positionIterations = 10, o.physicsWorld = void 0, 
                    o.collisionMatrix = new L(), o._enable = !0, o._allowSleep = !0, o._maxSubSteps = 1, 
                    o._fixedTimeStep = 1 / 60, o._autoSimulation = !0, o._accumulator = 0, o._steping = !1, 
                    o._gravity = new u(0, -10 * v), o._delayEvents = [];
                    var i = O.config ? O.config.physics : null;
                    if (i) {
                        if (u.copy(o._gravity, i.gravity), o._gravity.multiplyScalar(v), o._allowSleep = i.allowSleep, 
                        o._fixedTimeStep = i.fixedTimeStep, o._maxSubSteps = i.maxSubSteps, o._autoSimulation = i.autoSimulation, 
                        i.collisionMatrix) for (var n in i.collisionMatrix) {
                            var r = parseInt(n), a = 1 << parseInt(n);
                            o.collisionMatrix["" + a] = i.collisionMatrix[r];
                        }
                        if (i.collisionGroups) {
                            var p = i.collisionGroups;
                            p instanceof Array && (p.forEach(function(t) {
                                T[t.name] = 1 << t.index;
                            }), e.update(T));
                        }
                    }
                    return o.physicsWorld = new M.PhysicsWorld(), o.gravity = o._gravity, o.allowSleep = o._allowSleep, 
                    o;
                }
                i(o, t);
                var r = o.prototype;
                return r.postUpdate = function(t) {
                    if (this._enable && this._autoSimulation) {
                        S.emit(j.EVENT_BEFORE_PHYSICS), this._steping = !0;
                        var e = this._fixedTimeStep, o = this.velocityIterations, i = this.positionIterations;
                        this._accumulator += t;
                        for (var n = 0; n++ < this._maxSubSteps && this._accumulator > e; ) this.physicsWorld.step(e, o, i), 
                        this._accumulator -= e;
                        for (var r = this._delayEvents, a = 0, p = r.length; a < p; a++) {
                            var s = r[a];
                            s.func.call(s.target);
                        }
                        r.length = 0, this.physicsWorld.syncPhysicsToScene(), this.debugDrawFlags && this.physicsWorld.drawDebug(), 
                        this._steping = !1, S.emit(j.EVENT_AFTER_PHYSICS);
                    }
                }, r._callAfterStep = function(t, e) {
                    this._steping ? this._delayEvents.push({
                        target: t,
                        func: e
                    }) : e.call(t);
                }, r.resetAccumulator = function(t) {
                    void 0 === t && (t = 0), this._accumulator = t;
                }, r.step = function(t) {
                    this.physicsWorld.step(t, this.velocityIterations, this.positionIterations);
                }, r.raycast = function(t, e, o, i) {
                    return void 0 === o && (o = k.Closest), void 0 === i && (i = 4294967295), this.physicsWorld.raycast(t, e, o, i);
                }, r.testPoint = function(t) {
                    return this.physicsWorld.testPoint(t);
                }, r.testAABB = function(t) {
                    return this.physicsWorld.testAABB(t);
                }, n(o, [ {
                    key: "enable",
                    get: function() {
                        return this._enable;
                    },
                    set: function(t) {
                        this._enable = t;
                    }
                }, {
                    key: "allowSleep",
                    get: function() {
                        return this._allowSleep;
                    },
                    set: function(t) {
                        this._allowSleep = t, this.physicsWorld.setAllowSleep(t);
                    }
                }, {
                    key: "gravity",
                    get: function() {
                        return this._gravity;
                    },
                    set: function(t) {
                        this._gravity.set(t), this.physicsWorld.setGravity(new u(t.x / v, t.y / v));
                    }
                }, {
                    key: "maxSubSteps",
                    get: function() {
                        return this._maxSubSteps;
                    },
                    set: function(t) {
                        this._maxSubSteps = t;
                    }
                }, {
                    key: "fixedTimeStep",
                    get: function() {
                        return this._fixedTimeStep;
                    },
                    set: function(t) {
                        this._fixedTimeStep = t;
                    }
                }, {
                    key: "autoSimulation",
                    get: function() {
                        return this._autoSimulation;
                    },
                    set: function(t) {
                        this._autoSimulation = t;
                    }
                }, {
                    key: "debugDrawFlags",
                    get: function() {
                        return this.physicsWorld.debugDrawFlags;
                    },
                    set: function(t) {
                        this.physicsWorld.debugDrawFlags = t;
                    }
                }, {
                    key: "stepping",
                    get: function() {
                        return this._steping;
                    }
                } ], [ {
                    key: "PHYSICS_NONE",
                    get: function() {
                        return !z;
                    }
                }, {
                    key: "PHYSICS_BUILTIN",
                    get: function() {
                        return "builtin" === z;
                    }
                }, {
                    key: "PHYSICS_BOX2D",
                    get: function() {
                        return "box2d" === z;
                    }
                }, {
                    key: "PhysicsGroup",
                    get: function() {
                        return T;
                    }
                }, {
                    key: "instance",
                    get: function() {
                        return B || (B = new o()), B;
                    }
                } ]), o;
            }(r(P)));
            ct.ID = "PHYSICS_2D", S.once(j.EVENT_INIT, function() {
                ct.PHYSICS_NONE || a || S.registerSystem(ct.ID, ct.instance, P.Priority.LOW);
            }), function(t) {
                t[t.Circles = 0] = "Circles", t[t.FaceA = 1] = "FaceA", t[t.FaceB = 2] = "FaceB";
            }(W || (W = t("g", {})));
            var ut, lt, yt, ft, _t, ht, gt, bt, dt, mt, wt, Dt, Ot, St, jt, Pt, Lt, Ct, xt, At, Et, Tt, kt, It, Mt, zt, vt, Ft, Rt, qt, Nt, Vt, Bt, Wt, Yt, Gt, Ht, Ut, Jt, Xt, Kt, $t, Qt, Zt, te, ee, oe, ie, ne, re, ae, pe, se, ce, ue, le, ye, fe, _e, he, ge, be, de, me, we, De, Oe, Se, je, Pe, Le, Ce, xe, Ae, Ee, Te, ke, Ie, Me, ze, ve, Fe, Re, qe, Ne, Ve, Be, We, Ye, Ge, He, Ue, Je, Xe, Ke, $e, Qe, Ze, to, eo, oo = y, io = f, no = h, ro = t("R", (Y = l("cc.RigidBody2D"), 
            G = no(), H = io(C), U = io(x), Y(J = G((st = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "enabledContactListener", K, c(e)), 
                    s(e, "bullet", $, c(e)), s(e, "awakeOnLoad", Q, c(e)), e._body = null, s(e, "_group", Z, c(e)), 
                    s(e, "_type", tt, c(e)), s(e, "_allowSleep", et, c(e)), s(e, "_gravityScale", ot, c(e)), 
                    s(e, "_linearDamping", it, c(e)), s(e, "_angularDamping", nt, c(e)), s(e, "_linearVelocity", rt, c(e)), 
                    s(e, "_angularVelocity", at, c(e)), s(e, "_fixedRotation", pt, c(e)), e;
                }
                i(e, t);
                var r = e.prototype;
                return r.isAwake = function() {
                    return !!this._body && this._body.isAwake;
                }, r.wakeUp = function() {
                    this._body && this._body.wakeUp();
                }, r.sleep = function() {
                    this._body && this._body.sleep();
                }, r.getMass = function() {
                    return this._body ? this._body.getMass() : 0;
                }, r.applyForce = function(t, e, o) {
                    this._body && this._body.applyForce(t, e, o);
                }, r.applyForceToCenter = function(t, e) {
                    this._body && this._body.applyForceToCenter(t, e);
                }, r.applyTorque = function(t, e) {
                    this._body && this._body.applyTorque(t, e);
                }, r.applyLinearImpulse = function(t, e, o) {
                    this._body && this._body.applyLinearImpulse(t, e, o);
                }, r.applyLinearImpulseToCenter = function(t, e) {
                    this._body && this._body.applyLinearImpulseToCenter(t, e);
                }, r.applyAngularImpulse = function(t, e) {
                    this._body && this._body.applyAngularImpulse(t, e);
                }, r.getLinearVelocityFromWorldPoint = function(t, e) {
                    return this._body ? this._body.getLinearVelocityFromWorldPoint(t, e) : e;
                }, r.getLocalVector = function(t, e) {
                    return this._body ? this._body.getLocalVector(t, e) : e;
                }, r.getWorldVector = function(t, e) {
                    return this._body ? this._body.getWorldVector(t, e) : e;
                }, r.getLocalPoint = function(t, e) {
                    return this._body ? this._body.getLocalPoint(t, e) : e;
                }, r.getWorldPoint = function(t, e) {
                    return this._body ? this._body.getWorldPoint(t, e) : e;
                }, r.getLocalCenter = function(t) {
                    return this._body ? this._body.getLocalCenter(t) : t;
                }, r.getWorldCenter = function(t) {
                    return this._body ? this._body.getWorldCenter(t) : t;
                }, r.getInertia = function() {
                    return this._body && this._body.getInertia(), 0;
                }, r.onLoad = function() {
                    this._body = o._global.CC_PHYSICS_2D_BUILTIN ? R : new M.RigidBody(), this._body.initialize(this);
                }, r.onEnable = function() {
                    this._body && this._body.onEnable();
                }, r.onDisable = function() {
                    this._body && this._body.onDisable();
                }, r.onDestroy = function() {
                    this._body && this._body.onDestroy();
                }, n(e, [ {
                    key: "group",
                    get: function() {
                        return this._group;
                    },
                    set: function(t) {
                        this._group = t;
                    }
                }, {
                    key: "type",
                    get: function() {
                        return this._type;
                    },
                    set: function(t) {
                        this._type = t, this._body && (t === x.Animated ? this._body.setType(x.Kinematic) : this._body.setType(t));
                    }
                }, {
                    key: "allowSleep",
                    get: function() {
                        return this._allowSleep;
                    },
                    set: function(t) {
                        this._allowSleep = t, this._body && this._body.setAllowSleep(t);
                    }
                }, {
                    key: "gravityScale",
                    get: function() {
                        return this._gravityScale;
                    },
                    set: function(t) {
                        this._gravityScale = t, this._body && this._body.setGravityScale(t);
                    }
                }, {
                    key: "linearDamping",
                    get: function() {
                        return this._linearDamping;
                    },
                    set: function(t) {
                        this._linearDamping = t, this._body && this._body.setLinearDamping(t);
                    }
                }, {
                    key: "angularDamping",
                    get: function() {
                        return this._angularDamping;
                    },
                    set: function(t) {
                        this._angularDamping = t, this._body && this._body.setAngularDamping(t);
                    }
                }, {
                    key: "linearVelocity",
                    get: function() {
                        return this._body && this._body.getLinearVelocity(this._linearVelocity), this._linearVelocity;
                    },
                    set: function(t) {
                        this._linearVelocity = t, this._body && this._body.setLinearVelocity(t);
                    }
                }, {
                    key: "angularVelocity",
                    get: function() {
                        return this._body && (this._angularVelocity = this._body.getAngularVelocity()), 
                        this._angularVelocity;
                    },
                    set: function(t) {
                        this._angularVelocity = t, this._body && this._body.setAngularVelocity(t);
                    }
                }, {
                    key: "fixedRotation",
                    get: function() {
                        return this._fixedRotation;
                    },
                    set: function(t) {
                        this._fixedRotation = t, this._body && this._body.setFixedRotation(t);
                    }
                }, {
                    key: "impl",
                    get: function() {
                        return this._body;
                    }
                } ]), e;
            }(_), p((X = st).prototype, "group", [ H ], Object.getOwnPropertyDescriptor(X.prototype, "group"), X.prototype), 
            K = p(X.prototype, "enabledContactListener", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), $ = p(X.prototype, "bullet", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), p(X.prototype, "type", [ U ], Object.getOwnPropertyDescriptor(X.prototype, "type"), X.prototype), 
            p(X.prototype, "allowSleep", [ oo ], Object.getOwnPropertyDescriptor(X.prototype, "allowSleep"), X.prototype), 
            p(X.prototype, "gravityScale", [ oo ], Object.getOwnPropertyDescriptor(X.prototype, "gravityScale"), X.prototype), 
            p(X.prototype, "linearDamping", [ oo ], Object.getOwnPropertyDescriptor(X.prototype, "linearDamping"), X.prototype), 
            p(X.prototype, "angularDamping", [ oo ], Object.getOwnPropertyDescriptor(X.prototype, "angularDamping"), X.prototype), 
            p(X.prototype, "linearVelocity", [ oo ], Object.getOwnPropertyDescriptor(X.prototype, "linearVelocity"), X.prototype), 
            p(X.prototype, "angularVelocity", [ oo ], Object.getOwnPropertyDescriptor(X.prototype, "angularVelocity"), X.prototype), 
            p(X.prototype, "fixedRotation", [ oo ], Object.getOwnPropertyDescriptor(X.prototype, "fixedRotation"), X.prototype), 
            Q = p(X.prototype, "awakeOnLoad", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), Z = p(X.prototype, "_group", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return C.DEFAULT;
                }
            }), tt = p(X.prototype, "_type", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return x.Dynamic;
                }
            }), et = p(X.prototype, "_allowSleep", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), ot = p(X.prototype, "_gravityScale", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), it = p(X.prototype, "_linearDamping", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), nt = p(X.prototype, "_angularDamping", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), rt = p(X.prototype, "_linearVelocity", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), at = p(X.prototype, "_angularVelocity", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), pt = p(X.prototype, "_fixedRotation", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), J = X)) || J) || J)), ao = t("h", (ut = l("cc.Collider2D"), lt = f(C), ut((Ot = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "editing", _t, c(e)), 
                    s(e, "tag", ht, c(e)), e.TYPE = A.None, e._shape = null, e._body = null, s(e, "_group", gt, c(e)), 
                    s(e, "_density", bt, c(e)), s(e, "_sensor", dt, c(e)), s(e, "_friction", mt, c(e)), 
                    s(e, "_restitution", wt, c(e)), s(e, "_offset", Dt, c(e)), e;
                }
                i(e, t);
                var o = e.prototype;
                return o.onLoad = function() {
                    this._shape = function(t) {
                        return q.INITED || (q.INITED = !0, q[A.BOX] = function() {
                            return new M.BoxShape();
                        }, q[A.CIRCLE] = function() {
                            return new M.CircleShape();
                        }, q[A.POLYGON] = function() {
                            return new M.PolygonShape();
                        }), q[t]();
                    }(this.TYPE), this._shape.initialize(this), this._shape.onLoad && this._shape.onLoad(), 
                    this._body = this.getComponent(ro);
                }, o.onEnable = function() {
                    this._shape && this._shape.onEnable();
                }, o.onDisable = function() {
                    this._shape && this._shape.onDisable && this._shape.onDisable();
                }, o.onDestroy = function() {
                    this._shape && this._shape.onDestroy && this._shape.onDestroy();
                }, o.apply = function() {
                    this._shape && this._shape.apply && this._shape.apply();
                }, n(e, [ {
                    key: "group",
                    get: function() {
                        return this._group;
                    },
                    set: function(t) {
                        this._group = t, this._shape && this._shape.onGroupChanged && this._shape.onGroupChanged();
                    }
                }, {
                    key: "density",
                    get: function() {
                        return this._density;
                    },
                    set: function(t) {
                        this._density = t;
                    }
                }, {
                    key: "sensor",
                    get: function() {
                        return this._sensor;
                    },
                    set: function(t) {
                        this._sensor = t;
                    }
                }, {
                    key: "friction",
                    get: function() {
                        return this._friction;
                    },
                    set: function(t) {
                        this._friction = t;
                    }
                }, {
                    key: "restitution",
                    get: function() {
                        return this._restitution;
                    },
                    set: function(t) {
                        this._restitution = t;
                    }
                }, {
                    key: "offset",
                    get: function() {
                        return this._offset;
                    },
                    set: function(t) {
                        this._offset = t;
                    }
                }, {
                    key: "body",
                    get: function() {
                        return this._body;
                    }
                }, {
                    key: "impl",
                    get: function() {
                        return this._shape;
                    }
                }, {
                    key: "worldAABB",
                    get: function() {
                        return this._shape ? this._shape.worldAABB : new g();
                    }
                } ]), e;
            }(r(_)), _t = p((ft = Ot).prototype, "editing", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), ht = p(ft.prototype, "tag", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), p(ft.prototype, "group", [ lt ], Object.getOwnPropertyDescriptor(ft.prototype, "group"), ft.prototype), 
            p(ft.prototype, "density", [ y ], Object.getOwnPropertyDescriptor(ft.prototype, "density"), ft.prototype), 
            p(ft.prototype, "sensor", [ y ], Object.getOwnPropertyDescriptor(ft.prototype, "sensor"), ft.prototype), 
            p(ft.prototype, "friction", [ y ], Object.getOwnPropertyDescriptor(ft.prototype, "friction"), ft.prototype), 
            p(ft.prototype, "restitution", [ y ], Object.getOwnPropertyDescriptor(ft.prototype, "restitution"), ft.prototype), 
            p(ft.prototype, "offset", [ y ], Object.getOwnPropertyDescriptor(ft.prototype, "offset"), ft.prototype), 
            gt = p(ft.prototype, "_group", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return C.DEFAULT;
                }
            }), bt = p(ft.prototype, "_density", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), dt = p(ft.prototype, "_sensor", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), mt = p(ft.prototype, "_friction", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .2;
                }
            }), wt = p(ft.prototype, "_restitution", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Dt = p(ft.prototype, "_offset", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), yt = ft)) || yt)), po = (t("B", l("cc.BoxCollider2D")(St = h()((Lt = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "_size", Pt, c(e)), 
                    e.TYPE = A.BOX, e;
                }
                return i(e, t), n(e, [ {
                    key: "size",
                    get: function() {
                        return this._size;
                    },
                    set: function(t) {
                        this._size = t;
                    }
                }, {
                    key: "worldPoints",
                    get: function() {
                        return this._shape ? this._shape.worldPoints : [];
                    }
                } ]), e;
            }(ao), Pt = p((jt = Lt).prototype, "_size", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new d(1, 1);
                }
            }), p(jt.prototype, "size", [ y ], Object.getOwnPropertyDescriptor(jt.prototype, "size"), jt.prototype), 
            St = jt)) || St) || St), t("i", l("cc.CircleCollider2D")(Ct = h()((Et = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "_radius", At, c(e)), 
                    e.TYPE = A.CIRCLE, e;
                }
                return i(e, t), n(e, [ {
                    key: "radius",
                    get: function() {
                        return this._radius;
                    },
                    set: function(t) {
                        this._radius = t < 0 ? 0 : t;
                    }
                }, {
                    key: "worldPosition",
                    get: function() {
                        return this._shape ? this._shape.worldPosition : new u();
                    }
                }, {
                    key: "worldRadius",
                    get: function() {
                        return this._shape ? this._shape.worldRadius : 0;
                    }
                } ]), e;
            }(ao), At = p((xt = Et).prototype, "_radius", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), p(xt.prototype, "radius", [ y ], Object.getOwnPropertyDescriptor(xt.prototype, "radius"), xt.prototype), 
            Ct = xt)) || Ct) || Ct), t("j", (Tt = l("cc.PolygonCollider2D"), kt = h(), It = y({
                serializable: !1,
                displayOrder: 0
            }), Mt = y({
                type: u
            }), Tt(zt = kt((qt = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "threshold", Ft, c(e)), 
                    s(e, "_points", Rt, c(e)), e.TYPE = A.POLYGON, e;
                }
                return i(e, t), n(e, [ {
                    key: "points",
                    get: function() {
                        return this._points;
                    },
                    set: function(t) {
                        this._points = t;
                    }
                }, {
                    key: "worldPoints",
                    get: function() {
                        return this._shape ? this._shape.worldPoints : [];
                    }
                } ]), e;
            }(ao), Ft = p((vt = qt).prototype, "threshold", [ It ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), Rt = p(vt.prototype, "_points", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [ new u(-1, -1), new u(1, -1), new u(1, 1), new u(-1, 1) ];
                }
            }), p(vt.prototype, "points", [ Mt ], Object.getOwnPropertyDescriptor(vt.prototype, "points"), vt.prototype), 
            zt = vt)) || zt) || zt)), t("J", (Nt = l("cc.Joint2D"), Vt = f(ro), Nt((Jt = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, s(e, "anchor", Yt, c(e)), 
                    s(e, "connectedAnchor", Gt, c(e)), s(e, "collideConnected", Ht, c(e)), s(e, "connectedBody", Ut, c(e)), 
                    e._body = null, e._joint = null, e.TYPE = E.None, e;
                }
                i(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    this._joint = function(t) {
                        return function() {
                            if (!N.INITED) {
                                N.INITED = !0;
                                var t = o._global.CC_PHYSICS_2D_BUILTIN;
                                N[E.SPRING] = function() {
                                    return t ? V : new M.SpringJoint();
                                }, N[E.DISTANCE] = function() {
                                    return t ? V : new M.DistanceJoint();
                                }, N[E.FIXED] = function() {
                                    return t ? V : new M.FixedJoint();
                                }, N[E.MOUSE] = function() {
                                    return t ? V : new M.MouseJoint();
                                }, N[E.RELATIVE] = function() {
                                    return t ? V : new M.RelativeJoint();
                                }, N[E.SLIDER] = function() {
                                    return t ? V : new M.SliderJoint();
                                }, N[E.WHEEL] = function() {
                                    return t ? V : new M.WheelJoint();
                                }, N[E.HINGE] = function() {
                                    return t ? V : new M.HingeJoint();
                                };
                            }
                        }(), N[t]();
                    }(this.TYPE), this._joint.initialize(this), this._body = this.getComponent(ro);
                }, r.onEnable = function() {
                    this._joint && this._joint.onEnable && this._joint.onEnable();
                }, r.onDisable = function() {
                    this._joint && this._joint.onDisable && this._joint.onDisable();
                }, r.start = function() {
                    this._joint && this._joint.start && this._joint.start();
                }, r.onDestroy = function() {
                    this._joint && this._joint.onDestroy && this._joint.onDestroy();
                }, n(e, [ {
                    key: "body",
                    get: function() {
                        return this._body;
                    }
                }, {
                    key: "impl",
                    get: function() {
                        return this._joint;
                    }
                } ]), e;
            }(_), Yt = p((Wt = Jt).prototype, "anchor", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), Gt = p(Wt.prototype, "connectedAnchor", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), Ht = p(Wt.prototype, "collideConnected", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Ut = p(Wt.prototype, "connectedBody", [ Vt ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Bt = Wt)) || Bt))), so = (t("D", l("cc.DistanceJoint2D")(Xt = h()((Zt = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).TYPE = E.DISTANCE, s(e, "_maxLength", $t, c(e)), 
                    s(e, "_autoCalcDistance", Qt, c(e)), e;
                }
                return i(e, t), n(e, [ {
                    key: "maxLength",
                    get: function() {
                        return this._autoCalcDistance && this.connectedBody ? m.distance(this.node.worldPosition, this.connectedBody.node.worldPosition) : this._maxLength;
                    },
                    set: function(t) {
                        this._maxLength = t, this._joint && this._joint.setMaxLength(t);
                    }
                }, {
                    key: "autoCalcDistance",
                    get: function() {
                        return this._autoCalcDistance;
                    },
                    set: function(t) {
                        this._autoCalcDistance = t;
                    }
                } ]), e;
            }(po), p((Kt = Zt).prototype, "maxLength", [ y ], Object.getOwnPropertyDescriptor(Kt.prototype, "maxLength"), Kt.prototype), 
            p(Kt.prototype, "autoCalcDistance", [ y ], Object.getOwnPropertyDescriptor(Kt.prototype, "autoCalcDistance"), Kt.prototype), 
            $t = p(Kt.prototype, "_maxLength", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5;
                }
            }), Qt = p(Kt.prototype, "_autoCalcDistance", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), Xt = Kt)) || Xt) || Xt), t("S", l("cc.SpringJoint2D")(te = h()((ae = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).TYPE = E.SPRING, s(e, "_frequency", oe, c(e)), 
                    s(e, "_dampingRatio", ie, c(e)), s(e, "_distance", ne, c(e)), s(e, "_autoCalcDistance", re, c(e)), 
                    e;
                }
                return i(e, t), n(e, [ {
                    key: "frequency",
                    get: function() {
                        return this._frequency;
                    },
                    set: function(t) {
                        this._frequency = t, this._joint && this._joint.setFrequency(t);
                    }
                }, {
                    key: "dampingRatio",
                    get: function() {
                        return this._dampingRatio;
                    },
                    set: function(t) {
                        this._dampingRatio = t, this._joint && this._joint.setDampingRatio(t);
                    }
                }, {
                    key: "distance",
                    get: function() {
                        return this._autoCalcDistance && this.connectedBody ? m.distance(this.node.worldPosition, this.connectedBody.node.worldPosition) : this._distance;
                    },
                    set: function(t) {
                        this._distance = t, this._joint && this._joint.setDistance(t);
                    }
                }, {
                    key: "autoCalcDistance",
                    get: function() {
                        return this._autoCalcDistance;
                    },
                    set: function(t) {
                        this._autoCalcDistance = t;
                    }
                } ]), e;
            }(po), p((ee = ae).prototype, "frequency", [ y ], Object.getOwnPropertyDescriptor(ee.prototype, "frequency"), ee.prototype), 
            p(ee.prototype, "dampingRatio", [ y ], Object.getOwnPropertyDescriptor(ee.prototype, "dampingRatio"), ee.prototype), 
            p(ee.prototype, "distance", [ y ], Object.getOwnPropertyDescriptor(ee.prototype, "distance"), ee.prototype), 
            p(ee.prototype, "autoCalcDistance", [ y ], Object.getOwnPropertyDescriptor(ee.prototype, "autoCalcDistance"), ee.prototype), 
            oe = p(ee.prototype, "_frequency", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5;
                }
            }), ie = p(ee.prototype, "_dampingRatio", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .7;
                }
            }), ne = p(ee.prototype, "_distance", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10;
                }
            }), re = p(ee.prototype, "_autoCalcDistance", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), te = ee)) || te) || te), t("M", l("cc.MouseJoint2D")(pe = h()((ye = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).TYPE = E.MOUSE, s(e, "_maxForce", ce, c(e)), 
                    s(e, "_dampingRatio", ue, c(e)), s(e, "_frequency", le, c(e)), e._target = new u(), 
                    e;
                }
                return i(e, t), e.prototype.update = function(t) {
                    this._joint.update(t);
                }, n(e, [ {
                    key: "target",
                    get: function() {
                        return this._target;
                    },
                    set: function(t) {
                        this._target = t, this._joint && this._joint.setTarget(t);
                    }
                }, {
                    key: "frequency",
                    get: function() {
                        return this._frequency;
                    },
                    set: function(t) {
                        this._frequency = t, this._joint && this._joint.setFrequency(t);
                    }
                }, {
                    key: "dampingRatio",
                    get: function() {
                        return this._dampingRatio;
                    },
                    set: function(t) {
                        this._dampingRatio = t, this._joint && this._joint.setDampingRatio(t);
                    }
                }, {
                    key: "maxForce",
                    get: function() {
                        return this._maxForce;
                    },
                    set: function(t) {
                        this._maxForce = t, this._joint && this._joint.setMaxForce(t);
                    }
                } ]), e;
            }(po), p((se = ye).prototype, "frequency", [ y ], Object.getOwnPropertyDescriptor(se.prototype, "frequency"), se.prototype), 
            p(se.prototype, "dampingRatio", [ y ], Object.getOwnPropertyDescriptor(se.prototype, "dampingRatio"), se.prototype), 
            p(se.prototype, "maxForce", [ y ], Object.getOwnPropertyDescriptor(se.prototype, "maxForce"), se.prototype), 
            ce = p(se.prototype, "_maxForce", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1e3;
                }
            }), ue = p(se.prototype, "_dampingRatio", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .7;
                }
            }), le = p(se.prototype, "_frequency", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5;
                }
            }), pe = se)) || pe) || pe), new m()), co = new m(), uo = (t("k", l("cc.RelativeJoint2D")(fe = h()((De = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).TYPE = E.RELATIVE, s(e, "_maxForce", he, c(e)), 
                    s(e, "_maxTorque", ge, c(e)), s(e, "_correctionFactor", be, c(e)), s(e, "_angularOffset", de, c(e)), 
                    s(e, "_linearOffset", me, c(e)), s(e, "_autoCalcOffset", we, c(e)), e;
                }
                return i(e, t), n(e, [ {
                    key: "maxForce",
                    get: function() {
                        return this._maxForce;
                    },
                    set: function(t) {
                        this._maxForce = t, this._joint && this._joint.setMaxForce(t);
                    }
                }, {
                    key: "maxTorque",
                    get: function() {
                        return this._maxTorque;
                    },
                    set: function(t) {
                        this._maxTorque = t, this._joint && this._joint.setMaxTorque(t);
                    }
                }, {
                    key: "correctionFactor",
                    get: function() {
                        return this._correctionFactor;
                    },
                    set: function(t) {
                        this._correctionFactor = t, this._joint && this._joint.setCorrectionFactor(t);
                    }
                }, {
                    key: "linearOffset",
                    get: function() {
                        return this._autoCalcOffset && this.connectedBody ? u.subtract(this._linearOffset, this.connectedBody.node.worldPosition, this.node.worldPosition) : this._linearOffset;
                    },
                    set: function(t) {
                        this._linearOffset.set(t), this._joint && this._joint.setLinearOffset(t);
                    }
                }, {
                    key: "angularOffset",
                    get: function() {
                        return this._autoCalcOffset && this.connectedBody && (w.toEuler(so, this.node.worldRotation), 
                        w.toEuler(co, this.connectedBody.node.worldRotation), this._angularOffset = co.z - so.z), 
                        this._angularOffset;
                    },
                    set: function(t) {
                        this._angularOffset = t, this._joint && this._joint.setAngularOffset(t);
                    }
                }, {
                    key: "autoCalcOffset",
                    get: function() {
                        return this._autoCalcOffset;
                    },
                    set: function(t) {
                        this._autoCalcOffset = t;
                    }
                } ]), e;
            }(po), p((_e = De).prototype, "maxForce", [ y ], Object.getOwnPropertyDescriptor(_e.prototype, "maxForce"), _e.prototype), 
            p(_e.prototype, "maxTorque", [ y ], Object.getOwnPropertyDescriptor(_e.prototype, "maxTorque"), _e.prototype), 
            p(_e.prototype, "correctionFactor", [ y ], Object.getOwnPropertyDescriptor(_e.prototype, "correctionFactor"), _e.prototype), 
            p(_e.prototype, "linearOffset", [ y ], Object.getOwnPropertyDescriptor(_e.prototype, "linearOffset"), _e.prototype), 
            p(_e.prototype, "angularOffset", [ y ], Object.getOwnPropertyDescriptor(_e.prototype, "angularOffset"), _e.prototype), 
            p(_e.prototype, "autoCalcOffset", [ y ], Object.getOwnPropertyDescriptor(_e.prototype, "autoCalcOffset"), _e.prototype), 
            he = p(_e.prototype, "_maxForce", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5;
                }
            }), ge = p(_e.prototype, "_maxTorque", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .7;
                }
            }), be = p(_e.prototype, "_correctionFactor", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3;
                }
            }), de = p(_e.prototype, "_angularOffset", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), me = p(_e.prototype, "_linearOffset", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), we = p(_e.prototype, "_autoCalcOffset", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), fe = _e)) || fe) || fe), new u());
            t("l", l("cc.SliderJoint2D")(Oe = h()((ke = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).TYPE = E.SLIDER, s(e, "_angle", je, c(e)), 
                    s(e, "_autoCalcAngle", Pe, c(e)), s(e, "_enableMotor", Le, c(e)), s(e, "_maxMotorForce", Ce, c(e)), 
                    s(e, "_motorSpeed", xe, c(e)), s(e, "_enableLimit", Ae, c(e)), s(e, "_lowerLimit", Ee, c(e)), 
                    s(e, "_upperLimit", Te, c(e)), e;
                }
                return i(e, t), n(e, [ {
                    key: "angle",
                    get: function() {
                        return this._autoCalcAngle && this.connectedBody && (u.subtract(uo, this.connectedBody.node.worldPosition, this.node.worldPosition), 
                        this._angle = D(Math.atan2(uo.y, uo.x))), this._angle;
                    },
                    set: function(t) {
                        this._angle = t;
                    }
                }, {
                    key: "autoCalcAngle",
                    get: function() {
                        return this._autoCalcAngle;
                    },
                    set: function(t) {
                        this._autoCalcAngle = t;
                    }
                }, {
                    key: "enableMotor",
                    get: function() {
                        return this._enableMotor;
                    },
                    set: function(t) {
                        this._enableMotor = t;
                    }
                }, {
                    key: "maxMotorForce",
                    get: function() {
                        return this._maxMotorForce;
                    },
                    set: function(t) {
                        this._maxMotorForce = t, this._joint && this._joint.setMaxMotorForce(t);
                    }
                }, {
                    key: "motorSpeed",
                    get: function() {
                        return this._motorSpeed;
                    },
                    set: function(t) {
                        this._motorSpeed = t, this._joint && this._joint.setMotorSpeed(t);
                    }
                }, {
                    key: "enableLimit",
                    get: function() {
                        return this._enableLimit;
                    },
                    set: function(t) {
                        this._enableLimit = t;
                    }
                }, {
                    key: "lowerLimit",
                    get: function() {
                        return this._lowerLimit;
                    },
                    set: function(t) {
                        this._lowerLimit = t, this._joint && this._joint.setLowerLimit(t);
                    }
                }, {
                    key: "upperLimit",
                    get: function() {
                        return this._upperLimit;
                    },
                    set: function(t) {
                        this._upperLimit = t, this._joint && this._joint.setUpperLimit(t);
                    }
                } ]), e;
            }(po), p((Se = ke).prototype, "angle", [ y ], Object.getOwnPropertyDescriptor(Se.prototype, "angle"), Se.prototype), 
            p(Se.prototype, "autoCalcAngle", [ y ], Object.getOwnPropertyDescriptor(Se.prototype, "autoCalcAngle"), Se.prototype), 
            p(Se.prototype, "enableMotor", [ y ], Object.getOwnPropertyDescriptor(Se.prototype, "enableMotor"), Se.prototype), 
            p(Se.prototype, "maxMotorForce", [ y ], Object.getOwnPropertyDescriptor(Se.prototype, "maxMotorForce"), Se.prototype), 
            p(Se.prototype, "motorSpeed", [ y ], Object.getOwnPropertyDescriptor(Se.prototype, "motorSpeed"), Se.prototype), 
            p(Se.prototype, "enableLimit", [ y ], Object.getOwnPropertyDescriptor(Se.prototype, "enableLimit"), Se.prototype), 
            p(Se.prototype, "lowerLimit", [ y ], Object.getOwnPropertyDescriptor(Se.prototype, "lowerLimit"), Se.prototype), 
            p(Se.prototype, "upperLimit", [ y ], Object.getOwnPropertyDescriptor(Se.prototype, "upperLimit"), Se.prototype), 
            je = p(Se.prototype, "_angle", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Pe = p(Se.prototype, "_autoCalcAngle", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), Le = p(Se.prototype, "_enableMotor", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Ce = p(Se.prototype, "_maxMotorForce", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1e3;
                }
            }), xe = p(Se.prototype, "_motorSpeed", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1e3;
                }
            }), Ae = p(Se.prototype, "_enableLimit", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Ee = p(Se.prototype, "_lowerLimit", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Te = p(Se.prototype, "_upperLimit", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Oe = Se)) || Oe) || Oe), t("F", l("cc.FixedJoint2D")(Ie = h()((Fe = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).TYPE = E.FIXED, s(e, "_frequency", ze, c(e)), 
                    s(e, "_dampingRatio", ve, c(e)), e;
                }
                return i(e, t), n(e, [ {
                    key: "frequency",
                    get: function() {
                        return this._frequency;
                    },
                    set: function(t) {
                        this._frequency = t, this._joint && this._joint.setFrequency(t);
                    }
                }, {
                    key: "dampingRatio",
                    get: function() {
                        return this._dampingRatio;
                    },
                    set: function(t) {
                        this._dampingRatio = t, this._joint && this._joint.setDampingRatio(t);
                    }
                } ]), e;
            }(po), p((Me = Fe).prototype, "frequency", [ y ], Object.getOwnPropertyDescriptor(Me.prototype, "frequency"), Me.prototype), 
            p(Me.prototype, "dampingRatio", [ y ], Object.getOwnPropertyDescriptor(Me.prototype, "dampingRatio"), Me.prototype), 
            ze = p(Me.prototype, "_frequency", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .7;
                }
            }), ve = p(Me.prototype, "_dampingRatio", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), Ie = Me)) || Ie) || Ie), t("W", l("cc.WheelJoint2D")(Re = h()((He = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).TYPE = E.WHEEL, s(e, "_angle", Ne, c(e)), 
                    s(e, "_enableMotor", Ve, c(e)), s(e, "_maxMotorTorque", Be, c(e)), s(e, "_motorSpeed", We, c(e)), 
                    s(e, "_frequency", Ye, c(e)), s(e, "_dampingRatio", Ge, c(e)), e;
                }
                return i(e, t), n(e, [ {
                    key: "angle",
                    get: function() {
                        return this._angle;
                    },
                    set: function(t) {
                        this._angle = t;
                    }
                }, {
                    key: "enableMotor",
                    get: function() {
                        return this._enableMotor;
                    },
                    set: function(t) {
                        this._enableMotor = t, this._joint && this._joint.enableMotor(t);
                    }
                }, {
                    key: "maxMotorTorque",
                    get: function() {
                        return this._maxMotorTorque;
                    },
                    set: function(t) {
                        this._maxMotorTorque = t, this._joint && this._joint.setMaxMotorTorque(t);
                    }
                }, {
                    key: "motorSpeed",
                    get: function() {
                        return this._motorSpeed;
                    },
                    set: function(t) {
                        this._motorSpeed = t, this._joint && this._joint.setMotorSpeed(t);
                    }
                }, {
                    key: "frequency",
                    get: function() {
                        return this._frequency;
                    },
                    set: function(t) {
                        this._frequency = t, this._joint && this._joint.setFrequency(t);
                    }
                }, {
                    key: "dampingRatio",
                    get: function() {
                        return this._dampingRatio;
                    },
                    set: function(t) {
                        this._dampingRatio = t, this._joint && this._joint.setDampingRatio(t);
                    }
                } ]), e;
            }(po), p((qe = He).prototype, "angle", [ y ], Object.getOwnPropertyDescriptor(qe.prototype, "angle"), qe.prototype), 
            p(qe.prototype, "enableMotor", [ y ], Object.getOwnPropertyDescriptor(qe.prototype, "enableMotor"), qe.prototype), 
            p(qe.prototype, "maxMotorTorque", [ y ], Object.getOwnPropertyDescriptor(qe.prototype, "maxMotorTorque"), qe.prototype), 
            p(qe.prototype, "motorSpeed", [ y ], Object.getOwnPropertyDescriptor(qe.prototype, "motorSpeed"), qe.prototype), 
            p(qe.prototype, "frequency", [ y ], Object.getOwnPropertyDescriptor(qe.prototype, "frequency"), qe.prototype), 
            p(qe.prototype, "dampingRatio", [ y ], Object.getOwnPropertyDescriptor(qe.prototype, "dampingRatio"), qe.prototype), 
            Ne = p(qe.prototype, "_angle", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 90;
                }
            }), Ve = p(qe.prototype, "_enableMotor", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Be = p(qe.prototype, "_maxMotorTorque", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1e3;
                }
            }), We = p(qe.prototype, "_motorSpeed", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Ye = p(qe.prototype, "_frequency", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5;
                }
            }), Ge = p(qe.prototype, "_dampingRatio", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .7;
                }
            }), Re = qe)) || Re) || Re), t("H", l("cc.HingeJoint2D")(Ue = h()((eo = function(t) {
                function e() {
                    for (var e, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).TYPE = E.HINGE, s(e, "_enableLimit", Xe, c(e)), 
                    s(e, "_lowerAngle", Ke, c(e)), s(e, "_upperAngle", $e, c(e)), s(e, "_enableMotor", Qe, c(e)), 
                    s(e, "_maxMotorTorque", Ze, c(e)), s(e, "_motorSpeed", to, c(e)), e;
                }
                return i(e, t), n(e, [ {
                    key: "enableLimit",
                    get: function() {
                        return this._enableLimit;
                    },
                    set: function(t) {
                        this._enableLimit = t;
                    }
                }, {
                    key: "lowerAngle",
                    get: function() {
                        return this._lowerAngle;
                    },
                    set: function(t) {
                        this._lowerAngle = t, this._joint && this._joint.setLowerAngle(t);
                    }
                }, {
                    key: "upperAngle",
                    get: function() {
                        return this._upperAngle;
                    },
                    set: function(t) {
                        this._upperAngle = t, this._joint && this._joint.setUpperAngle(t);
                    }
                }, {
                    key: "enableMotor",
                    get: function() {
                        return this._enableMotor;
                    },
                    set: function(t) {
                        this._enableMotor = t, this._joint && this._joint.enableMotor(t);
                    }
                }, {
                    key: "maxMotorTorque",
                    get: function() {
                        return this._maxMotorTorque;
                    },
                    set: function(t) {
                        this._maxMotorTorque = t, this._joint && this._joint.setMaxMotorTorque(t);
                    }
                }, {
                    key: "motorSpeed",
                    get: function() {
                        return this._motorSpeed;
                    },
                    set: function(t) {
                        this._motorSpeed = t, this._joint && this._joint.setMotorSpeed(t);
                    }
                } ]), e;
            }(po), p((Je = eo).prototype, "enableLimit", [ y ], Object.getOwnPropertyDescriptor(Je.prototype, "enableLimit"), Je.prototype), 
            p(Je.prototype, "lowerAngle", [ y ], Object.getOwnPropertyDescriptor(Je.prototype, "lowerAngle"), Je.prototype), 
            p(Je.prototype, "upperAngle", [ y ], Object.getOwnPropertyDescriptor(Je.prototype, "upperAngle"), Je.prototype), 
            p(Je.prototype, "enableMotor", [ y ], Object.getOwnPropertyDescriptor(Je.prototype, "enableMotor"), Je.prototype), 
            p(Je.prototype, "maxMotorTorque", [ y ], Object.getOwnPropertyDescriptor(Je.prototype, "maxMotorTorque"), Je.prototype), 
            p(Je.prototype, "motorSpeed", [ y ], Object.getOwnPropertyDescriptor(Je.prototype, "motorSpeed"), Je.prototype), 
            Xe = p(Je.prototype, "_enableLimit", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Ke = p(Je.prototype, "_lowerAngle", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), $e = p(Je.prototype, "_upperAngle", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Qe = p(Je.prototype, "_enableMotor", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Ze = p(Je.prototype, "_maxMotorTorque", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1e3;
                }
            }), to = p(Je.prototype, "_motorSpeed", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Ue = Je)) || Ue) || Ue);
        }
    };
});