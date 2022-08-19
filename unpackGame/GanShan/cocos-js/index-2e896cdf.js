System.register([ "./texture-barrier-60b5983b.js", "./json-asset-933a1d4c.js", "./index-f2b92470.js", "./renderable-component-7c6600ed.js", "./deprecated-26630860.js", "./deprecated-ef6bb945.js", "./mesh-f5415e9d.js", "./deprecated-6c081405.js", "./skeleton-b0039cea.js", "./collision-matrix-ae46bfd8.js", "./capsule-3dc9b423.js", "./terrain-asset-ecb9fa31.js" ], function(t) {
    var e, i, r, n, o, s, a, p, l, c, u, h, y, _, d, f, g, b, m, w, v, S, C, T, E, k, P, D, O, I, M, z, A, x, B, F, N, j, L, H, R, G, W, V, U, q, Y, X, K, Z;
    return {
        setters: [ function(t) {
            e = t.bT, i = t.bU, r = t.c0, n = t.c1, o = t.b$, s = t.cw, a = t.l, p = t.w, l = t.f, 
            c = t.bv, u = t.R, h = t.e, y = t.bK;
        }, function(t) {
            _ = t.bW, d = t.aL, f = t.b$, g = t.a8, b = t.bX, m = t.Q, w = t.bZ, v = t.cd, S = t.dP, 
            C = t.cg, T = t.ch, E = t.ds, k = t.bY, P = t.cc, D = t.ci, O = t.bm, I = t.e2, 
            M = t.de, z = t.bJ, A = t.bK, x = t.aq, B = t.dQ, F = t.dl;
        }, function() {}, function() {}, function(t) {
            N = t.g;
        }, function(t) {
            j = t.d, L = t.D, H = t.a;
        }, function(t) {
            R = t.M;
        }, function() {}, function() {}, function(t) {
            G = t.b, W = t.c, V = t.P, U = t.C, q = t.a, Y = t.E, X = t.d;
        }, function(t) {
            K = t.c;
        }, function(t) {
            Z = t.T;
        } ],
        execute: function() {
            var Q, $, J, tt, et, it, rt, nt;
            t({
                k: Fe,
                l: Ge,
                n: Re,
                r: Ne,
                s: Be
            });
            var ot, st = t("d", _("cc.PhysicsMaterial")((nt = rt = function(t) {
                function r() {
                    var e;
                    return (e = t.call(this) || this).id = void 0, n(e, "_friction", J, o(e)), n(e, "_rollingFriction", tt, o(e)), 
                    n(e, "_spinningFriction", et, o(e)), n(e, "_restitution", it, o(e)), r.allMaterials.push(o(e)), 
                    e.id = r._idCounter++, e._uuid || (e._uuid = "pm_" + e.id), e;
                }
                e(r, t);
                var s = r.prototype;
                return s.clone = function() {
                    var t = new r();
                    return t._friction = this._friction, t._restitution = this._restitution, t._rollingFriction = this._rollingFriction, 
                    t._spinningFriction = this._spinningFriction, t;
                }, s.destroy = function() {
                    if (t.prototype.destroy.call(this)) {
                        var e = r.allMaterials.indexOf(this);
                        return e >= 0 && r.allMaterials.splice(e, 1), !0;
                    }
                    return !1;
                }, s.setValues = function(t, e, i, n) {
                    var o = this._friction !== t || this._rollingFriction !== e || this._spinningFriction !== i || this._restitution !== n;
                    this._friction = t, this._rollingFriction = e, this._spinningFriction = i, this._restitution = n, 
                    o && this.emit(r.EVENT_UPDATE);
                }, i(r, [ {
                    key: "friction",
                    get: function() {
                        return this._friction;
                    },
                    set: function(t) {
                        g(this._friction, t) || (this._friction = t, this.emit(r.EVENT_UPDATE));
                    }
                }, {
                    key: "rollingFriction",
                    get: function() {
                        return this._rollingFriction;
                    },
                    set: function(t) {
                        g(this._rollingFriction, t) || (this._rollingFriction = t, this.emit(r.EVENT_UPDATE));
                    }
                }, {
                    key: "spinningFriction",
                    get: function() {
                        return this._spinningFriction;
                    },
                    set: function(t) {
                        g(this._spinningFriction, t) || (this._spinningFriction = t, this.emit(r.EVENT_UPDATE));
                    }
                }, {
                    key: "restitution",
                    get: function() {
                        return this._restitution;
                    },
                    set: function(t) {
                        g(this._restitution, t) || (this._restitution = t, this.emit(r.EVENT_UPDATE));
                    }
                } ]), r;
            }(d), rt.allMaterials = [], rt.EVENT_UPDATE = "event_update", rt._idCounter = 0, 
            r(($ = nt).prototype, "friction", [ f ], Object.getOwnPropertyDescriptor($.prototype, "friction"), $.prototype), 
            r($.prototype, "rollingFriction", [ f ], Object.getOwnPropertyDescriptor($.prototype, "rollingFriction"), $.prototype), 
            r($.prototype, "spinningFriction", [ f ], Object.getOwnPropertyDescriptor($.prototype, "spinningFriction"), $.prototype), 
            r($.prototype, "restitution", [ f ], Object.getOwnPropertyDescriptor($.prototype, "restitution"), $.prototype), 
            J = r($.prototype, "_friction", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .6;
                }
            }), tt = r($.prototype, "_rollingFriction", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), et = r($.prototype, "_spinningFriction", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), it = r($.prototype, "_restitution", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Q = $)) || Q), at = t("f", function() {
                function t() {
                    this._hitPoint = new m(), this._hitNormal = new m(), this._distance = 0, this._collider = null;
                }
                var e = t.prototype;
                return e._assign = function(t, e, i, r) {
                    m.copy(this._hitPoint, t), m.copy(this._hitNormal, r), this._distance = e, this._collider = i;
                }, e.clone = function() {
                    var e = new t();
                    return m.copy(e._hitPoint, this._hitPoint), m.copy(e._hitNormal, this._hitNormal), 
                    e._distance = this._distance, e._collider = this._collider, e;
                }, i(t, [ {
                    key: "hitPoint",
                    get: function() {
                        return this._hitPoint;
                    }
                }, {
                    key: "distance",
                    get: function() {
                        return this._distance;
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                }, {
                    key: "hitNormal",
                    get: function() {
                        return this._hitNormal;
                    }
                } ]), t;
            }());
            function pt(t) {
                a._global.CC_PHYSICS_BUILTIN = "builtin" === t, a._global.CC_PHYSICS_CANNON = "cannon.js" === t, 
                a._global.CC_PHYSICS_AMMO = "ammo.js" === t;
            }
            var lt, ct = t("m", {
                id: "",
                switchTo: function(t) {
                    if (ct.runInEditor) {
                        var e = ct;
                        if (ct.physicsWorld && t !== ct.id && null != ct.backend[t] ? (ct.physicsWorld.destroy(), 
                        console.info("[PHYSICS]: switch from " + ct.id + " to " + t + "."), pt(t), e.id = t, 
                        e.wrapper = ct.backend[t], e.physicsWorld = _t()) : (console.info("[PHYSICS]: using " + t + "."), 
                        e.physicsWorld = _t()), ot) {
                            var i = e.physicsWorld;
                            i.setGravity(ot.gravity), i.setAllowSleep(ot.allowSleep), i.setDefaultMaterial(ot.defaultMaterial);
                        }
                    }
                },
                register: function(t, e) {
                    if (console.info("[PHYSICS]: register " + t + "."), ct.backend[t] = e, !ct.physicsWorld || ct.id === t) {
                        pt(t);
                        var i = ct;
                        i.id = t, i.wrapper = e;
                    }
                },
                wrapper: {},
                backend: {},
                physicsWorld: null,
                runInEditor: !s
            }), ut = function() {
                return 0;
            }, ht = {
                impl: null,
                setGravity: ut,
                setAllowSleep: ut,
                setDefaultMaterial: ut,
                step: ut,
                syncAfterEvents: ut,
                syncSceneToPhysics: ut,
                raycast: ut,
                raycastClosest: ut,
                emitEvents: ut,
                destroy: ut
            };
            function yt(t, e) {
                return null == t && (ct.id ? p(ct.id + " physics does not support " + lt[e]) : l(9600), 
                !0);
            }
            function _t() {
                return yt(ct.wrapper.PhysicsWorld, lt.World) ? ht : new ct.wrapper.PhysicsWorld();
            }
            !function(t) {
                t[t.World = 0] = "World", t[t.RigidBody = 1] = "RigidBody", t[t.BoxCollider = 2] = "BoxCollider", 
                t[t.SphereCollider = 3] = "SphereCollider", t[t.CapsuleCollider = 4] = "CapsuleCollider", 
                t[t.MeshCollider = 5] = "MeshCollider", t[t.CylinderCollider = 6] = "CylinderCollider", 
                t[t.ConeCollider = 7] = "ConeCollider", t[t.TerrainCollider = 8] = "TerrainCollider", 
                t[t.SimplexCollider = 9] = "SimplexCollider", t[t.PlaneCollider = 10] = "PlaneCollider", 
                t[t.PointToPointConstraint = 11] = "PointToPointConstraint", t[t.HingeConstraint = 12] = "HingeConstraint", 
                t[t.ConeTwistConstraint = 13] = "ConeTwistConstraint";
            }(lt || (lt = {}));
            var dt = {
                impl: null,
                rigidBody: null,
                isAwake: !1,
                isSleepy: !1,
                isSleeping: !1,
                initialize: ut,
                onEnable: ut,
                onDisable: ut,
                onDestroy: ut,
                setType: ut,
                setMass: ut,
                setLinearDamping: ut,
                setAngularDamping: ut,
                useGravity: ut,
                setLinearFactor: ut,
                setAngularFactor: ut,
                setAllowSleep: ut,
                wakeUp: ut,
                sleep: ut,
                clearState: ut,
                clearForces: ut,
                clearVelocity: ut,
                setSleepThreshold: ut,
                getSleepThreshold: ut,
                getLinearVelocity: ut,
                setLinearVelocity: ut,
                getAngularVelocity: ut,
                setAngularVelocity: ut,
                applyForce: ut,
                applyLocalForce: ut,
                applyImpulse: ut,
                applyLocalImpulse: ut,
                applyTorque: ut,
                applyLocalTorque: ut,
                setGroup: ut,
                getGroup: ut,
                addGroup: ut,
                removeGroup: ut,
                setMask: ut,
                getMask: ut,
                addMask: ut,
                removeMask: ut,
                isUsingCCD: ut,
                useCCD: ut
            }, ft = {
                INITED: !1
            }, gt = {
                impl: null,
                collider: null,
                attachedRigidBody: null,
                initialize: ut,
                onLoad: ut,
                onEnable: ut,
                onDisable: ut,
                onDestroy: ut,
                setGroup: ut,
                getGroup: ut,
                addGroup: ut,
                removeGroup: ut,
                setMask: ut,
                getMask: ut,
                addMask: ut,
                removeMask: ut,
                setMaterial: ut,
                setAsTrigger: ut,
                setCenter: ut,
                getAABB: ut,
                getBoundingSphere: ut,
                updateSize: ut,
                updateRadius: ut,
                setRadius: ut,
                setCylinderHeight: ut,
                setDirection: ut,
                setHeight: ut,
                setShapeType: ut,
                setVertices: ut,
                setMesh: ut,
                setTerrain: ut,
                setNormal: ut,
                setConstant: ut,
                updateEventListener: ut
            }, bt = {
                INITED: !1
            }, mt = {
                impl: null,
                initialize: ut,
                onLoad: ut,
                onEnable: ut,
                onDisable: ut,
                onDestroy: ut,
                setEnableCollision: ut,
                setConnectedBody: ut,
                setPivotA: ut,
                setPivotB: ut,
                setAxis: ut
            };
            a.internal.PhysicsGroup = V;
            var wt, vt, St, Ct, Tt, Et, kt, Pt, Dt, Ot, It, Mt, zt, At, xt, Bt, Ft, Nt, jt, Lt, Ht, Rt, Gt, Wt, Vt, Ut, qt, Yt, Xt, Kt, Zt, Qt, $t, Jt, te, ee, ie, re, ne, oe, se, ae, pe, le, ce = t("P", function(t) {
                function r() {
                    var e;
                    return (e = t.call(this) || this).raycastClosestResult = new at(), e.raycastResults = [], 
                    e.collisionMatrix = new U(1), e.minVolumeSize = 1e-5, e.useNodeChains = !1, e._enable = !0, 
                    e._allowSleep = !0, e._maxSubSteps = 1, e._subStepCount = 0, e._fixedTimeStep = 1 / 60, 
                    e._autoSimulation = !0, e._accumulator = 0, e._sleepThreshold = .1, e._gravity = new m(0, -10, 0), 
                    e._material = new st(), e.raycastOptions = {
                        group: -1,
                        mask: -1,
                        queryTrigger: !0,
                        maxDistance: 1e7
                    }, e.raycastResultPool = new u(function() {
                        return new at();
                    }, 1), e._material.on(st.EVENT_UPDATE, e._updateMaterial, o(e)), e;
                }
                e(r, t);
                var n = r.prototype;
                return n.postUpdate = function(t) {
                    if (this.physicsWorld) if (this._enable) {
                        if (this._autoSimulation) {
                            for (this._subStepCount = 0, this._accumulator += t, j.emit(L.EVENT_BEFORE_PHYSICS); this._subStepCount < this._maxSubSteps; ) {
                                if (!(this._accumulator >= this._fixedTimeStep)) {
                                    this.physicsWorld.syncSceneToPhysics();
                                    break;
                                }
                                this.physicsWorld.syncSceneToPhysics(), this.physicsWorld.step(this._fixedTimeStep), 
                                this.physicsWorld.emitEvents(), this.physicsWorld.syncAfterEvents(), this._accumulator -= this._fixedTimeStep, 
                                this._subStepCount++;
                            }
                            j.emit(L.EVENT_AFTER_PHYSICS);
                        }
                    } else this.physicsWorld.syncSceneToPhysics();
                }, n.resetConfiguration = function(t) {
                    var e = t || (N.config ? N.config.physics : null);
                    if (e) {
                        if ("boolean" == typeof e.allowSleep && (this._allowSleep = e.allowSleep), "number" == typeof e.fixedTimeStep && (this._fixedTimeStep = e.fixedTimeStep), 
                        "number" == typeof e.maxSubSteps && (this._maxSubSteps = e.maxSubSteps), "number" == typeof e.sleepThreshold && (this._sleepThreshold = e.sleepThreshold), 
                        "boolean" == typeof e.autoSimulation && (this.autoSimulation = e.autoSimulation), 
                        e.gravity && m.copy(this._gravity, e.gravity), e.defaultMaterial && this._material.setValues(e.defaultMaterial.friction, e.defaultMaterial.rollingFriction, e.defaultMaterial.spinningFriction, e.defaultMaterial.restitution), 
                        e.collisionMatrix) for (var i in e.collisionMatrix) this.collisionMatrix["" + (1 << parseInt(i))] = e.collisionMatrix[i];
                        if (e.collisionGroups) {
                            var r = e.collisionGroups;
                            r instanceof Array && (r.forEach(function(t) {
                                V[t.name] = 1 << t.index;
                            }), c.update(V));
                        }
                    }
                    this.physicsWorld && (this.physicsWorld.setGravity(this._gravity), this.physicsWorld.setAllowSleep(this._allowSleep), 
                    this.physicsWorld.setDefaultMaterial(this._material));
                }, n.resetAccumulator = function(t) {
                    void 0 === t && (t = 0), this._accumulator = t;
                }, n.step = function(t, e, i) {
                    this.physicsWorld && this.physicsWorld.step(t, e, i);
                }, n.syncSceneToPhysics = function() {
                    this.physicsWorld && this.physicsWorld.syncSceneToPhysics();
                }, n.emitEvents = function() {
                    this.physicsWorld && this.physicsWorld.emitEvents();
                }, n.raycast = function(t, e, i, r) {
                    return void 0 === e && (e = 4294967295), void 0 === i && (i = 1e7), void 0 === r && (r = !0), 
                    !!this.physicsWorld && (this.raycastResultPool.reset(), this.raycastResults.length = 0, 
                    this.raycastOptions.mask = e >>> 0, this.raycastOptions.maxDistance = i, this.raycastOptions.queryTrigger = r, 
                    this.physicsWorld.raycast(t, this.raycastOptions, this.raycastResultPool, this.raycastResults));
                }, n.raycastClosest = function(t, e, i, r) {
                    return void 0 === e && (e = 4294967295), void 0 === i && (i = 1e7), void 0 === r && (r = !0), 
                    !!this.physicsWorld && (this.raycastOptions.mask = e >>> 0, this.raycastOptions.maxDistance = i, 
                    this.raycastOptions.queryTrigger = r, this.physicsWorld.raycastClosest(t, this.raycastOptions, this.raycastClosestResult));
                }, n._updateMaterial = function() {
                    this.physicsWorld && this.physicsWorld.setDefaultMaterial(this._material);
                }, r.constructAndRegister = function() {
                    if (!r._instance) {
                        var t = new r();
                        t.resetConfiguration(), function(t) {
                            if (ot || (ot = t), ct.runInEditor && !ct.physicsWorld) {
                                console.info("[PHYSICS]: using " + ct.id + ".");
                                var e = ct.physicsWorld = _t();
                                e.setGravity(ot.gravity), e.setAllowSleep(ot.allowSleep), e.setDefaultMaterial(ot.defaultMaterial);
                            }
                        }(t), r._instance = t, j.registerSystem(r.ID, t, t.priority);
                    }
                }, i(r, [ {
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
                        this._allowSleep = t, this.physicsWorld && this.physicsWorld.setAllowSleep(t);
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
                    key: "gravity",
                    get: function() {
                        return this._gravity;
                    },
                    set: function(t) {
                        this._gravity.set(t), this.physicsWorld && this.physicsWorld.setGravity(t);
                    }
                }, {
                    key: "sleepThreshold",
                    get: function() {
                        return this._sleepThreshold;
                    },
                    set: function(t) {
                        this._sleepThreshold = t;
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
                    key: "defaultMaterial",
                    get: function() {
                        return this._material;
                    }
                }, {
                    key: "physicsWorld",
                    get: function() {
                        return ct.physicsWorld;
                    }
                } ], [ {
                    key: "PHYSICS_NONE",
                    get: function() {
                        return !ct.id;
                    }
                }, {
                    key: "PHYSICS_BUILTIN",
                    get: function() {
                        return "builtin" === ct.id;
                    }
                }, {
                    key: "PHYSICS_CANNON",
                    get: function() {
                        return "cannon.js" === ct.id;
                    }
                }, {
                    key: "PHYSICS_BULLET",
                    get: function() {
                        return "bullet" === ct.id;
                    }
                }, {
                    key: "PHYSICS_PHYSX",
                    get: function() {
                        return "physx" === ct.id;
                    }
                }, {
                    key: "PhysicsGroup",
                    get: function() {
                        return V;
                    }
                }, {
                    key: "instance",
                    get: function() {
                        return r._instance;
                    }
                } ]), r;
            }(H));
            ce.ID = "PHYSICS", ce._instance = null, j.once(L.EVENT_INIT, function() {
                ce.constructAndRegister();
            });
            var ue, he, ye, _e, de, fe, ge, be, me, we, ve, Se, Ce, Te, Ee, ke, Pe, De, Oe, Ie, Me, ze, Ae = t("R", (wt = _("cc.RigidBody"), 
            vt = C(), St = T(), Ct = E(-1), Tt = w(ce.PhysicsGroup), Et = k(), kt = P(), Pt = w(q), 
            Dt = k(), Ot = P(), It = D(), Mt = k(), zt = P(), At = D(), xt = k(), Bt = P(), 
            Ft = D(), Nt = k(), jt = P(), Lt = D(), Ht = k(), Rt = P(), Gt = D(), Wt = k(), 
            Vt = P(), Ut = D(), qt = k(), Yt = P(), Xt = D(), Kt = k(), Zt = P(), wt(Qt = vt(Qt = St(Qt = v(Qt = S(Qt = Ct((le = pe = function(t) {
                function r() {
                    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    return (e = t.call.apply(t, [ this ].concat(r)) || this)._body = null, n(e, "_group", Jt, o(e)), 
                    n(e, "_type", te, o(e)), n(e, "_mass", ee, o(e)), n(e, "_allowSleep", ie, o(e)), 
                    n(e, "_linearDamping", re, o(e)), n(e, "_angularDamping", ne, o(e)), n(e, "_useGravity", oe, o(e)), 
                    n(e, "_linearFactor", se, o(e)), n(e, "_angularFactor", ae, o(e)), e;
                }
                e(r, t);
                var s = r.prototype;
                return s.onLoad = function() {
                    ct.runInEditor && (this._body = yt(ct.wrapper.RigidBody, lt.RigidBody) ? dt : new ct.wrapper.RigidBody(), 
                    this._body.initialize(this));
                }, s.onEnable = function() {
                    this._body && this._body.onEnable();
                }, s.onDisable = function() {
                    this._body && this._body.onDisable();
                }, s.onDestroy = function() {
                    this._body && this._body.onDestroy();
                }, s.applyForce = function(t, e) {
                    this._isInitialized && this._body.applyForce(t, e);
                }, s.applyLocalForce = function(t, e) {
                    this._isInitialized && this._body.applyLocalForce(t, e);
                }, s.applyImpulse = function(t, e) {
                    this._isInitialized && this._body.applyImpulse(t, e);
                }, s.applyLocalImpulse = function(t, e) {
                    this._isInitialized && this._body.applyLocalImpulse(t, e);
                }, s.applyTorque = function(t) {
                    this._isInitialized && this._body.applyTorque(t);
                }, s.applyLocalTorque = function(t) {
                    this._isInitialized && this._body.applyLocalTorque(t);
                }, s.wakeUp = function() {
                    this._isInitialized && this._body.wakeUp();
                }, s.sleep = function() {
                    this._isInitialized && this._body.sleep();
                }, s.clearState = function() {
                    this._isInitialized && this._body.clearState();
                }, s.clearForces = function() {
                    this._isInitialized && this._body.clearForces();
                }, s.clearVelocity = function() {
                    this._isInitialized && this._body.clearVelocity();
                }, s.getLinearVelocity = function(t) {
                    this._isInitialized && this._body.getLinearVelocity(t);
                }, s.setLinearVelocity = function(t) {
                    this._isInitialized && this._body.setLinearVelocity(t);
                }, s.getAngularVelocity = function(t) {
                    this._isInitialized && this._body.getAngularVelocity(t);
                }, s.setAngularVelocity = function(t) {
                    this._isInitialized && this._body.setAngularVelocity(t);
                }, s.getGroup = function() {
                    return this._isInitialized ? this._body.getGroup() : 0;
                }, s.setGroup = function(t) {
                    this._isInitialized && this._body.setGroup(t);
                }, s.addGroup = function(t) {
                    this._isInitialized && this._body.addGroup(t);
                }, s.removeGroup = function(t) {
                    this._isInitialized && this._body.removeGroup(t);
                }, s.getMask = function() {
                    return this._isInitialized ? this._body.getMask() : 0;
                }, s.setMask = function(t) {
                    this._isInitialized && this._body.setMask(t);
                }, s.addMask = function(t) {
                    this._isInitialized && this._body.addMask(t);
                }, s.removeMask = function(t) {
                    this._isInitialized && this._body.removeMask(t);
                }, i(r, [ {
                    key: "group",
                    get: function() {
                        return this._group;
                    },
                    set: function(t) {
                        this._group = t, this._body && this._body.getGroup() !== t && this._body.setGroup(t);
                    }
                }, {
                    key: "type",
                    get: function() {
                        return this._type;
                    },
                    set: function(t) {
                        this._type !== t && (this._type = t, this._body && this._body.setType(t));
                    }
                }, {
                    key: "mass",
                    get: function() {
                        return this._mass;
                    },
                    set: function(t) {
                        this._mass !== t && (t = t <= 0 ? 1e-4 : t, this._mass = t, this._body && this._body.setMass(t));
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
                    key: "useGravity",
                    get: function() {
                        return this._useGravity;
                    },
                    set: function(t) {
                        this._useGravity = t, this._body && this._body.useGravity(t);
                    }
                }, {
                    key: "linearFactor",
                    get: function() {
                        return this._linearFactor;
                    },
                    set: function(t) {
                        m.copy(this._linearFactor, t), this._body && this._body.setLinearFactor(this._linearFactor);
                    }
                }, {
                    key: "angularFactor",
                    get: function() {
                        return this._angularFactor;
                    },
                    set: function(t) {
                        m.copy(this._angularFactor, t), this._body && this._body.setAngularFactor(this._angularFactor);
                    }
                }, {
                    key: "sleepThreshold",
                    get: function() {
                        return this._isInitialized ? this._body.getSleepThreshold() : .1;
                    },
                    set: function(t) {
                        this._isInitialized && this._body.setSleepThreshold(t);
                    }
                }, {
                    key: "useCCD",
                    get: function() {
                        return !!this._isInitialized && this._body.isUsingCCD();
                    },
                    set: function(t) {
                        this._isInitialized && this._body.useCCD(t);
                    }
                }, {
                    key: "isAwake",
                    get: function() {
                        return !!this._isInitialized && this._body.isAwake;
                    }
                }, {
                    key: "isSleepy",
                    get: function() {
                        return !!this._isInitialized && this._body.isSleepy;
                    }
                }, {
                    key: "isSleeping",
                    get: function() {
                        return !!this._isInitialized && this._body.isSleeping;
                    }
                }, {
                    key: "isStatic",
                    get: function() {
                        return this._type === q.STATIC;
                    },
                    set: function(t) {
                        t && this.isStatic || !t && !this.isStatic || (this.type = t ? q.STATIC : q.DYNAMIC);
                    }
                }, {
                    key: "isDynamic",
                    get: function() {
                        return this._type === q.DYNAMIC;
                    },
                    set: function(t) {
                        t && this.isDynamic || !t && !this.isDynamic || (this.type = t ? q.DYNAMIC : q.KINEMATIC);
                    }
                }, {
                    key: "isKinematic",
                    get: function() {
                        return this._type === q.KINEMATIC;
                    },
                    set: function(t) {
                        t && this.isKinematic || !t && !this.isKinematic || (this.type = t ? q.KINEMATIC : q.DYNAMIC);
                    }
                }, {
                    key: "body",
                    get: function() {
                        return this._body;
                    }
                }, {
                    key: "_isInitialized",
                    get: function() {
                        var t = null === this._body;
                        return t && h("[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene."), 
                        !t;
                    }
                } ]), r;
            }(O), pe.Type = q, r(($t = le).prototype, "group", [ Tt, Et, kt ], Object.getOwnPropertyDescriptor($t.prototype, "group"), $t.prototype), 
            r($t.prototype, "type", [ Pt, Dt, Ot ], Object.getOwnPropertyDescriptor($t.prototype, "type"), $t.prototype), 
            r($t.prototype, "mass", [ It, Mt, zt ], Object.getOwnPropertyDescriptor($t.prototype, "mass"), $t.prototype), 
            r($t.prototype, "allowSleep", [ At, xt, Bt ], Object.getOwnPropertyDescriptor($t.prototype, "allowSleep"), $t.prototype), 
            r($t.prototype, "linearDamping", [ Ft, Nt, jt ], Object.getOwnPropertyDescriptor($t.prototype, "linearDamping"), $t.prototype), 
            r($t.prototype, "angularDamping", [ Lt, Ht, Rt ], Object.getOwnPropertyDescriptor($t.prototype, "angularDamping"), $t.prototype), 
            r($t.prototype, "useGravity", [ Gt, Wt, Vt ], Object.getOwnPropertyDescriptor($t.prototype, "useGravity"), $t.prototype), 
            r($t.prototype, "linearFactor", [ Ut, qt, Yt ], Object.getOwnPropertyDescriptor($t.prototype, "linearFactor"), $t.prototype), 
            r($t.prototype, "angularFactor", [ Xt, Kt, Zt ], Object.getOwnPropertyDescriptor($t.prototype, "angularFactor"), $t.prototype), 
            Jt = r($t.prototype, "_group", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ce.PhysicsGroup.DEFAULT;
                }
            }), te = r($t.prototype, "_type", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return q.DYNAMIC;
                }
            }), ee = r($t.prototype, "_mass", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), ie = r($t.prototype, "_allowSleep", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), re = r($t.prototype, "_linearDamping", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1;
                }
            }), ne = r($t.prototype, "_angularDamping", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1;
                }
            }), oe = r($t.prototype, "_useGravity", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), se = r($t.prototype, "_linearFactor", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m(1, 1, 1);
                }
            }), ae = r($t.prototype, "_angularFactor", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m(1, 1, 1);
                }
            }), Qt = $t)) || Qt) || Qt) || Qt) || Qt) || Qt) || Qt));
            Ae || (Ae = t("R", {}));
            var xe = t("C", (ue = _("cc.Collider"), he = w(Ae), ye = M(), _e = k(), de = P(), 
            fe = w(st), ge = M(), be = k(), me = P(), we = k(), ve = P(), Se = w(m), Ce = k(), 
            Te = P(), Ee = w(st), ue((ze = Me = function(t) {
                function r(e) {
                    var i;
                    return (i = t.call(this) || this).type = void 0, i._shape = null, i._aabb = null, 
                    i._boundingSphere = null, i._isSharedMaterial = !0, i._needTriggerEvent = !1, i._needCollisionEvent = !1, 
                    n(i, "_material", De, o(i)), n(i, "_isTrigger", Oe, o(i)), n(i, "_center", Ie, o(i)), 
                    i.type = e, i;
                }
                e(r, t);
                var s = r.prototype;
                return s.on = function(e, i, r, n) {
                    var o = t.prototype.on.call(this, e, i, r, n);
                    return this._updateNeedEvent(e), o;
                }, s.off = function(e, i, r) {
                    t.prototype.off.call(this, e, i, r), this._updateNeedEvent();
                }, s.once = function(e, i, r) {
                    var n = t.prototype.once.call(this, e, i, r);
                    return this._updateNeedEvent(e), n;
                }, s.removeAll = function(e) {
                    t.prototype.removeAll.call(this, e), this._updateNeedEvent();
                }, s.getGroup = function() {
                    return this._isInitialized ? this._shape.getGroup() : 0;
                }, s.setGroup = function(t) {
                    this._isInitialized && this._shape.setGroup(t);
                }, s.addGroup = function(t) {
                    this._isInitialized && this._shape.addGroup(t);
                }, s.removeGroup = function(t) {
                    this._isInitialized && this._shape.removeGroup(t);
                }, s.getMask = function() {
                    return this._isInitialized ? this._shape.getMask() : 0;
                }, s.setMask = function(t) {
                    this._isInitialized && this._shape.setMask(t);
                }, s.addMask = function(t) {
                    this._isInitialized && this._shape.addMask(t);
                }, s.removeMask = function(t) {
                    this._isInitialized && this._shape.removeMask(t);
                }, s.onLoad = function() {
                    ct.runInEditor && (this.sharedMaterial = null == this._material ? ce.instance.defaultMaterial : this._material, 
                    this._shape = function(t) {
                        return ft.INITED || (ft.INITED = !0, ft[G.BOX] = function() {
                            return yt(ct.wrapper.BoxShape, lt.BoxCollider) ? gt : new ct.wrapper.BoxShape();
                        }, ft[G.SPHERE] = function() {
                            return yt(ct.wrapper.SphereShape, lt.SphereCollider) ? gt : new ct.wrapper.SphereShape();
                        }, ft[G.CAPSULE] = function() {
                            return yt(ct.wrapper.CapsuleShape, lt.CapsuleCollider) ? gt : new ct.wrapper.CapsuleShape();
                        }, ft[G.CYLINDER] = function() {
                            return yt(ct.wrapper.CylinderShape, lt.CylinderCollider) ? gt : new ct.wrapper.CylinderShape();
                        }, ft[G.CONE] = function() {
                            return yt(ct.wrapper.ConeShape, lt.ConeCollider) ? gt : new ct.wrapper.ConeShape();
                        }, ft[G.MESH] = function() {
                            return yt(ct.wrapper.TrimeshShape, lt.MeshCollider) ? gt : new ct.wrapper.TrimeshShape();
                        }, ft[G.TERRAIN] = function() {
                            return yt(ct.wrapper.TerrainShape, lt.TerrainCollider) ? gt : new ct.wrapper.TerrainShape();
                        }, ft[G.SIMPLEX] = function() {
                            return yt(ct.wrapper.SimplexShape, lt.SimplexCollider) ? gt : new ct.wrapper.SimplexShape();
                        }, ft[G.PLANE] = function() {
                            return yt(ct.wrapper.PlaneShape, lt.PlaneCollider) ? gt : new ct.wrapper.PlaneShape();
                        }), ft[t]();
                    }(this.type), this._shape.initialize(this), this._shape.onLoad());
                }, s.onEnable = function() {
                    this._shape && this._shape.onEnable();
                }, s.onDisable = function() {
                    this._shape && this._shape.onDisable();
                }, s.onDestroy = function() {
                    this._shape && (this._needTriggerEvent = !1, this._needCollisionEvent = !1, this._shape.updateEventListener(), 
                    this._material && this._material.off(st.EVENT_UPDATE, this._updateMaterial, this), 
                    this._shape.onDestroy()), this._boundingSphere && this._boundingSphere.destroy();
                }, s._updateMaterial = function() {
                    this._shape && this._shape.setMaterial(this._material);
                }, s._updateNeedEvent = function(t) {
                    this.isValid && (void 0 !== t ? ("onCollisionEnter" !== t && "onCollisionStay" !== t && "onCollisionExit" !== t || (this._needCollisionEvent = !0), 
                    "onTriggerEnter" !== t && "onTriggerStay" !== t && "onTriggerExit" !== t || (this._needTriggerEvent = !0)) : (this.hasEventListener("onTriggerEnter") || this.hasEventListener("onTriggerStay") || this.hasEventListener("onTriggerExit") || (this._needTriggerEvent = !1), 
                    this.hasEventListener("onCollisionEnter") || this.hasEventListener("onCollisionStay") || this.hasEventListener("onCollisionExit") || (this._needCollisionEvent = !1)), 
                    this._shape && this._shape.updateEventListener());
                }, i(r, [ {
                    key: "attachedRigidBody",
                    get: function() {
                        return (t = this.node.getComponent(Ae)) && t.isValid ? t : null;
                        var t;
                    }
                }, {
                    key: "sharedMaterial",
                    get: function() {
                        return this._material;
                    },
                    set: function(t) {
                        this.material = t;
                    }
                }, {
                    key: "material",
                    get: function() {
                        return this._isSharedMaterial && this._material && (this._material.off(st.EVENT_UPDATE, this._updateMaterial, this), 
                        this._material = this._material.clone(), this._material.on(st.EVENT_UPDATE, this._updateMaterial, this), 
                        this._isSharedMaterial = !1), this._material;
                    },
                    set: function(t) {
                        this._shape ? (t && this._material ? this._material.id !== t.id && (this._material.off(st.EVENT_UPDATE, this._updateMaterial, this), 
                        t.on(st.EVENT_UPDATE, this._updateMaterial, this), this._isSharedMaterial = !1, 
                        this._material = t) : t && !this._material ? (t.on(st.EVENT_UPDATE, this._updateMaterial, this), 
                        this._material = t) : !t && this._material && (this._material.off(st.EVENT_UPDATE, this._updateMaterial, this), 
                        this._material = t), this._updateMaterial()) : this._material = t;
                    }
                }, {
                    key: "isTrigger",
                    get: function() {
                        return this._isTrigger;
                    },
                    set: function(t) {
                        this._isTrigger = t, this._shape && this._shape.setAsTrigger(this._isTrigger);
                    }
                }, {
                    key: "center",
                    get: function() {
                        return this._center;
                    },
                    set: function(t) {
                        m.copy(this._center, t), this._shape && this._shape.setCenter(this._center);
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                }, {
                    key: "worldBounds",
                    get: function() {
                        return null == this._aabb && (this._aabb = new z()), this._shape && this._shape.getAABB(this._aabb), 
                        this._aabb;
                    }
                }, {
                    key: "boundingSphere",
                    get: function() {
                        return null == this._boundingSphere && (this._boundingSphere = new A()), this._shape && this._shape.getBoundingSphere(this._boundingSphere), 
                        this._boundingSphere;
                    }
                }, {
                    key: "needTriggerEvent",
                    get: function() {
                        return this._needTriggerEvent;
                    }
                }, {
                    key: "needCollisionEvent",
                    get: function() {
                        return this._needCollisionEvent;
                    }
                }, {
                    key: "_isInitialized",
                    get: function() {
                        var t = null === this._shape;
                        return t && h("[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene."), 
                        !t;
                    }
                } ]), r;
            }(y(O)), Me.Type = G, Me.Axis = Y, r((Pe = ze).prototype, "attachedRigidBody", [ he, I, ye, _e, de ], Object.getOwnPropertyDescriptor(Pe.prototype, "attachedRigidBody"), Pe.prototype), 
            r(Pe.prototype, "sharedMaterial", [ fe, ge, be, me ], Object.getOwnPropertyDescriptor(Pe.prototype, "sharedMaterial"), Pe.prototype), 
            r(Pe.prototype, "isTrigger", [ we, ve ], Object.getOwnPropertyDescriptor(Pe.prototype, "isTrigger"), Pe.prototype), 
            r(Pe.prototype, "center", [ Se, Ce, Te ], Object.getOwnPropertyDescriptor(Pe.prototype, "center"), Pe.prototype), 
            De = r(Pe.prototype, "_material", [ Ee ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Oe = r(Pe.prototype, "_isTrigger", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Ie = r(Pe.prototype, "_center", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), ke = Pe)) || ke));
            function Be(t, e) {
                t.__cc_wrapper__ = e;
            }
            function Fe(t) {
                return t.__cc_wrapper__;
            }
            function Ne(t) {
                return Math.max(t.x, Math.max(t.y, t.z));
            }
            xe || (xe = t("C", {}));
            var je = t("V", new m()), Le = t("o", {
                type: "onTriggerEnter",
                selfCollider: null,
                otherCollider: null,
                impl: null
            }), He = t("q", {
                type: "onCollisionEnter",
                selfCollider: null,
                otherCollider: null,
                contacts: [],
                impl: null
            });
            function Re(t) {
                var e = [];
                if (t.length >= 3) {
                    e[0] = t[0], e[1] = t[1], e[2] = t[2];
                    for (var i = t.length, r = 3; r < i; r += 3) {
                        for (var n = t[r], o = t[r + 1], s = t[r + 2], a = e.length, p = !0, l = 0; l < a; l += 3) if (g(n, e[l]) && g(o, e[l + 1]) && g(s, e[l + 2])) {
                            p = !1;
                            break;
                        }
                        p && (e.push(n), e.push(o), e.push(s));
                    }
                }
                return e;
            }
            function Ge(t) {
                return t.x = Math.abs(t.x), t.y = Math.abs(t.y), t.z = Math.abs(t.z), t;
            }
            var We, Ve, Ue, qe, Ye, Xe, Ke, Ze, Qe, $e, Je, ti, ei, ii, ri, ni, oi, si, ai, pi, li, ci, ui, hi, yi, _i, di, fi, gi, bi, mi, wi, vi, Si, Ci, Ti, Ei, ki, Pi, Di, Oi, Ii, Mi, zi, Ai, xi, Bi, Fi, Ni, ji, Li, Hi, Ri, Gi, Wi, Vi, Ui, qi, Yi, Xi, Ki, Zi, Qi, $i, Ji, tr, er, ir, rr, nr, or, sr, ar, pr, lr, cr, ur, hr, yr, _r, dr, fr, gr, br, mr, wr, vr, Sr, Cr, Tr, Er, kr, Pr, Dr, Or, Ir, Mr, zr, Ar, xr, Br, Fr, Nr, jr, Lr, Hr, Rr, Gr, Wr, Vr, Ur, qr, Yr, Xr, Kr, Zr, Qr, $r, Jr, tn, en, rn, nn, on, sn = Object.freeze({
                __proto__: null,
                setWrap: Be,
                getWrap: Fe,
                maxComponent: Ne,
                VEC3_0: je,
                TriggerEventObject: Le,
                CollisionEventObject: He,
                shrinkPositions: Re,
                absolute: Ge,
                cylinder: K
            }), an = t("B", (We = _("cc.BoxCollider"), Ve = C(), Ue = T(), qe = w(m), Ye = P(), 
            We(Xe = Ve(Xe = Ue(Xe = v((Qe = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.BOX) || this, n(e, "_size", Ze, o(e)), e;
                }
                return e(r, t), i(r, [ {
                    key: "size",
                    get: function() {
                        return this._size;
                    },
                    set: function(t) {
                        m.strictEquals(this._size, t) || (m.copy(this._size, t), Ge(this._size), this._shape && this.shape.updateSize());
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), r;
            }(xe), r((Ke = Qe).prototype, "size", [ qe, Ye ], Object.getOwnPropertyDescriptor(Ke.prototype, "size"), Ke.prototype), 
            Ze = r(Ke.prototype, "_size", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m(1, 1, 1);
                }
            }), Xe = Ke)) || Xe) || Xe) || Xe) || Xe)), pn = t("S", ($e = _("cc.SphereCollider"), 
            Je = C(), ti = T(), ei = P(), $e(ii = Je(ii = ti(ii = v((oi = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.SPHERE) || this, n(e, "_radius", ni, o(e)), e;
                }
                return e(r, t), i(r, [ {
                    key: "radius",
                    get: function() {
                        return this._radius;
                    },
                    set: function(t) {
                        this._radius !== t && (this._radius = Math.abs(t), this._shape && this.shape.updateRadius());
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), r;
            }(xe), r((ri = oi).prototype, "radius", [ ei ], Object.getOwnPropertyDescriptor(ri.prototype, "radius"), ri.prototype), 
            ni = r(ri.prototype, "_radius", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), ii = ri)) || ii) || ii) || ii) || ii)), ln = t("b", (si = _("cc.CapsuleCollider"), 
            ai = C(), pi = T(), li = P(), ci = P(), ui = w(Y), hi = P(), si(yi = ai(yi = pi(yi = v((bi = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.CAPSULE) || this, n(e, "_radius", di, o(e)), n(e, "_cylinderHeight", fi, o(e)), 
                    n(e, "_direction", gi, o(e)), e;
                }
                e(r, t);
                var s = r.prototype;
                return s._getRadiusScale = function() {
                    if (null == this.node) return 1;
                    var t = this.node.worldScale;
                    return this._direction === Y.Y_AXIS ? Math.abs(x(t.x, t.z)) : this._direction === Y.X_AXIS ? Math.abs(x(t.y, t.z)) : Math.abs(x(t.x, t.y));
                }, s._getHeightScale = function() {
                    if (null == this.node) return 1;
                    var t = this.node.worldScale;
                    return this._direction === Y.Y_AXIS ? Math.abs(t.y) : this._direction === Y.X_AXIS ? Math.abs(t.x) : Math.abs(t.z);
                }, i(r, [ {
                    key: "radius",
                    get: function() {
                        return this._radius;
                    },
                    set: function(t) {
                        this._radius !== t && (this._radius = Math.abs(t), this._shape && this.shape.setRadius(t));
                    }
                }, {
                    key: "cylinderHeight",
                    get: function() {
                        return this._cylinderHeight;
                    },
                    set: function(t) {
                        this._cylinderHeight !== t && (this._cylinderHeight = Math.abs(t), this._shape && this.shape.setCylinderHeight(t));
                    }
                }, {
                    key: "direction",
                    get: function() {
                        return this._direction;
                    },
                    set: function(t) {
                        (t = Math.floor(t)) < Y.X_AXIS || t > Y.Z_AXIS || this._direction !== t && (this._direction = t, 
                        this._shape && this.shape.setDirection(t));
                    }
                }, {
                    key: "height",
                    get: function() {
                        return 2 * this._radius + this._cylinderHeight;
                    },
                    set: function(t) {
                        var e = t - 2 * this._radius;
                        e < 0 && (e = 0), this.cylinderHeight = e;
                    }
                }, {
                    key: "worldHeight",
                    get: function() {
                        return 2 * this._radius * this._getRadiusScale() + this._cylinderHeight * this._getHeightScale();
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), r;
            }(xe), r((_i = bi).prototype, "radius", [ li ], Object.getOwnPropertyDescriptor(_i.prototype, "radius"), _i.prototype), 
            r(_i.prototype, "cylinderHeight", [ ci ], Object.getOwnPropertyDescriptor(_i.prototype, "cylinderHeight"), _i.prototype), 
            r(_i.prototype, "direction", [ ui, hi ], Object.getOwnPropertyDescriptor(_i.prototype, "direction"), _i.prototype), 
            di = r(_i.prototype, "_radius", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), fi = r(_i.prototype, "_cylinderHeight", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), gi = r(_i.prototype, "_direction", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Y.Y_AXIS;
                }
            }), yi = _i)) || yi) || yi) || yi) || yi)), cn = t("c", (mi = _("cc.CylinderCollider"), 
            wi = C(), vi = T(), Si = P(), Ci = P(), Ti = w(Y), Ei = P(), mi(ki = wi(ki = vi(ki = v((Mi = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.CYLINDER) || this, n(e, "_radius", Di, o(e)), n(e, "_height", Oi, o(e)), 
                    n(e, "_direction", Ii, o(e)), e;
                }
                return e(r, t), i(r, [ {
                    key: "radius",
                    get: function() {
                        return this._radius;
                    },
                    set: function(t) {
                        this._radius !== t && (this._radius = Math.abs(t), this._shape && this.shape.setRadius(t));
                    }
                }, {
                    key: "height",
                    get: function() {
                        return this._height;
                    },
                    set: function(t) {
                        this._height !== t && (this._height = Math.abs(t), this._shape && this.shape.setHeight(t));
                    }
                }, {
                    key: "direction",
                    get: function() {
                        return this._direction;
                    },
                    set: function(t) {
                        this._direction !== t && (t < Y.X_AXIS || t > Y.Z_AXIS || (this._direction = t, 
                        this._shape && this.shape.setDirection(t)));
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), r;
            }(xe), r((Pi = Mi).prototype, "radius", [ Si ], Object.getOwnPropertyDescriptor(Pi.prototype, "radius"), Pi.prototype), 
            r(Pi.prototype, "height", [ Ci ], Object.getOwnPropertyDescriptor(Pi.prototype, "height"), Pi.prototype), 
            r(Pi.prototype, "direction", [ Ti, Ei ], Object.getOwnPropertyDescriptor(Pi.prototype, "direction"), Pi.prototype), 
            Di = r(Pi.prototype, "_radius", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), Oi = r(Pi.prototype, "_height", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2;
                }
            }), Ii = r(Pi.prototype, "_direction", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Y.Y_AXIS;
                }
            }), ki = Pi)) || ki) || ki) || ki) || ki)), un = t("g", (zi = _("cc.ConeCollider"), 
            Ai = C(), xi = T(), Bi = P(), Fi = P(), Ni = w(Y), ji = P(), zi(Li = Ai(Li = xi(Li = v((Vi = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.CONE) || this, n(e, "_radius", Ri, o(e)), n(e, "_height", Gi, o(e)), 
                    n(e, "_direction", Wi, o(e)), e;
                }
                return e(r, t), i(r, [ {
                    key: "radius",
                    get: function() {
                        return this._radius;
                    },
                    set: function(t) {
                        this._radius !== t && (this._radius = Math.abs(t), this._shape && this.shape.setRadius(t));
                    }
                }, {
                    key: "height",
                    get: function() {
                        return this._height;
                    },
                    set: function(t) {
                        this._height !== t && (t < 0 && (t = 0), this._height = t, this._shape && this.shape.setHeight(t));
                    }
                }, {
                    key: "direction",
                    get: function() {
                        return this._direction;
                    },
                    set: function(t) {
                        this._direction !== t && (t < Y.X_AXIS || t > Y.Z_AXIS || (this._direction = t, 
                        this._shape && this.shape.setDirection(t)));
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), r;
            }(xe), r((Hi = Vi).prototype, "radius", [ Bi ], Object.getOwnPropertyDescriptor(Hi.prototype, "radius"), Hi.prototype), 
            r(Hi.prototype, "height", [ Fi ], Object.getOwnPropertyDescriptor(Hi.prototype, "height"), Hi.prototype), 
            r(Hi.prototype, "direction", [ Ni, ji ], Object.getOwnPropertyDescriptor(Hi.prototype, "direction"), Hi.prototype), 
            Ri = r(Hi.prototype, "_radius", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), Gi = r(Hi.prototype, "_height", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), Wi = r(Hi.prototype, "_direction", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Y.Y_AXIS;
                }
            }), Li = Hi)) || Li) || Li) || Li) || Li)), hn = t("M", (Ui = _("cc.MeshCollider"), 
            qi = C(), Yi = T(), Xi = w(R), Ki = P(), Zi = P(), Ui(Qi = qi(Qi = Yi(Qi = v((er = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.MESH) || this, n(e, "_mesh", Ji, o(e)), n(e, "_convex", tr, o(e)), 
                    e;
                }
                return e(r, t), i(r, [ {
                    key: "mesh",
                    get: function() {
                        return this._mesh;
                    },
                    set: function(t) {
                        this._mesh !== t && (this._mesh = t, this._shape && this.shape.setMesh(this._mesh));
                    }
                }, {
                    key: "convex",
                    get: function() {
                        return this._convex;
                    },
                    set: function(t) {
                        this._convex !== t && (this._convex = t);
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), r;
            }(xe), r(($i = er).prototype, "mesh", [ Xi, Ki ], Object.getOwnPropertyDescriptor($i.prototype, "mesh"), $i.prototype), 
            r($i.prototype, "convex", [ f, Zi ], Object.getOwnPropertyDescriptor($i.prototype, "convex"), $i.prototype), 
            Ji = r($i.prototype, "_mesh", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), tr = r($i.prototype, "_convex", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Qi = $i)) || Qi) || Qi) || Qi) || Qi)), yn = t("e", (ir = _("cc.ConstantForce"), 
            rr = C(), nr = B(Ae), or = T(), sr = k(), ar = P(), pr = k(), lr = P(), cr = k(), 
            ur = P(), hr = k(), yr = P(), ir(_r = rr(_r = nr(_r = or(_r = S(_r = v((wr = function(t) {
                function r() {
                    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    return (e = t.call.apply(t, [ this ].concat(r)) || this)._rigidBody = null, n(e, "_force", fr, o(e)), 
                    n(e, "_localForce", gr, o(e)), n(e, "_torque", br, o(e)), n(e, "_localTorque", mr, o(e)), 
                    e._mask = 0, e;
                }
                e(r, t);
                var s = r.prototype;
                return s.onLoad = function() {
                    this._rigidBody = this.node.getComponent(Ae), this._maskUpdate(this._force, 1), 
                    this._maskUpdate(this._localForce, 2), this._maskUpdate(this._torque, 4), this._maskUpdate(this._localTorque, 8);
                }, s.lateUpdate = function() {
                    null != this._rigidBody && 0 !== this._mask && (1 & this._mask && this._rigidBody.applyForce(this._force), 
                    2 & this._mask && this._rigidBody.applyLocalForce(this.localForce), 4 & this._mask && this._rigidBody.applyTorque(this._torque), 
                    8 & this._mask && this._rigidBody.applyLocalTorque(this._localTorque));
                }, s._maskUpdate = function(t, e) {
                    t.strictEquals(m.ZERO) ? this._mask &= ~e : this._mask |= e;
                }, i(r, [ {
                    key: "force",
                    get: function() {
                        return this._force;
                    },
                    set: function(t) {
                        m.copy(this._force, t), this._maskUpdate(this._force, 1);
                    }
                }, {
                    key: "localForce",
                    get: function() {
                        return this._localForce;
                    },
                    set: function(t) {
                        m.copy(this._localForce, t), this._maskUpdate(this.localForce, 2);
                    }
                }, {
                    key: "torque",
                    get: function() {
                        return this._torque;
                    },
                    set: function(t) {
                        m.copy(this._torque, t), this._maskUpdate(this._torque, 4);
                    }
                }, {
                    key: "localTorque",
                    get: function() {
                        return this._localTorque;
                    },
                    set: function(t) {
                        m.copy(this._localTorque, t), this._maskUpdate(this._localTorque, 8);
                    }
                } ]), r;
            }(O), fr = r((dr = wr).prototype, "_force", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), gr = r(dr.prototype, "_localForce", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), br = r(dr.prototype, "_torque", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), mr = r(dr.prototype, "_localTorque", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), r(dr.prototype, "force", [ sr, ar ], Object.getOwnPropertyDescriptor(dr.prototype, "force"), dr.prototype), 
            r(dr.prototype, "localForce", [ pr, lr ], Object.getOwnPropertyDescriptor(dr.prototype, "localForce"), dr.prototype), 
            r(dr.prototype, "torque", [ cr, ur ], Object.getOwnPropertyDescriptor(dr.prototype, "torque"), dr.prototype), 
            r(dr.prototype, "localTorque", [ hr, yr ], Object.getOwnPropertyDescriptor(dr.prototype, "localTorque"), dr.prototype), 
            _r = dr)) || _r) || _r) || _r) || _r) || _r) || _r)), _n = t("T", (vr = _("cc.TerrainCollider"), 
            Sr = C(), Cr = T(), Tr = w(Z), Er = P(), vr(kr = Sr(kr = Cr(kr = v((Or = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.TERRAIN) || this, n(e, "_terrain", Dr, o(e)), e;
                }
                return e(r, t), i(r, [ {
                    key: "terrain",
                    get: function() {
                        return this._terrain;
                    },
                    set: function(t) {
                        this._terrain = t, this._shape && this.shape.setTerrain(this._terrain);
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), r;
            }(xe), r((Pr = Or).prototype, "terrain", [ Tr, Er ], Object.getOwnPropertyDescriptor(Pr.prototype, "terrain"), Pr.prototype), 
            Dr = r(Pr.prototype, "_terrain", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), kr = Pr)) || kr) || kr) || kr) || kr)), dn = t("h", (Ir = _("cc.SimplexCollider"), 
            Mr = C(), zr = T(), Ar = w(X), xr = P(), Br = P(), Fr = D(), Nr = P(), jr = D(), 
            Lr = P(), Hr = D(), Rr = P(), Ir(Gr = Mr(Gr = zr(Gr = v((Yr = qr = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.SIMPLEX) || this, n(e, "_shapeType", Vr, o(e)), n(e, "_vertices", Ur, o(e)), 
                    e;
                }
                return e(r, t), r.prototype.updateVertices = function() {
                    this._shape && this.shape.setVertices(this._vertices);
                }, i(r, [ {
                    key: "shapeType",
                    get: function() {
                        return this._shapeType;
                    },
                    set: function(t) {
                        this._shapeType = t, this._shape && this.shape.setShapeType(t);
                    }
                }, {
                    key: "vertex0",
                    get: function() {
                        return this._vertices[0];
                    },
                    set: function(t) {
                        m.copy(this._vertices[0], t), this.updateVertices();
                    }
                }, {
                    key: "vertex1",
                    get: function() {
                        return this._vertices[1];
                    },
                    set: function(t) {
                        m.copy(this._vertices[1], t), this.updateVertices();
                    }
                }, {
                    key: "vertex2",
                    get: function() {
                        return this._vertices[2];
                    },
                    set: function(t) {
                        m.copy(this._vertices[2], t), this.updateVertices();
                    }
                }, {
                    key: "vertex3",
                    get: function() {
                        return this._vertices[3];
                    },
                    set: function(t) {
                        m.copy(this._vertices[3], t), this.updateVertices();
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                }, {
                    key: "vertices",
                    get: function() {
                        return this._vertices;
                    }
                } ]), r;
            }(xe), qr.ESimplexType = X, r((Wr = Yr).prototype, "shapeType", [ Ar, xr ], Object.getOwnPropertyDescriptor(Wr.prototype, "shapeType"), Wr.prototype), 
            r(Wr.prototype, "vertex0", [ f, Br ], Object.getOwnPropertyDescriptor(Wr.prototype, "vertex0"), Wr.prototype), 
            r(Wr.prototype, "vertex1", [ Fr, Nr ], Object.getOwnPropertyDescriptor(Wr.prototype, "vertex1"), Wr.prototype), 
            r(Wr.prototype, "vertex2", [ jr, Lr ], Object.getOwnPropertyDescriptor(Wr.prototype, "vertex2"), Wr.prototype), 
            r(Wr.prototype, "vertex3", [ Hr, Rr ], Object.getOwnPropertyDescriptor(Wr.prototype, "vertex3"), Wr.prototype), 
            Vr = r(Wr.prototype, "_shapeType", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return X.TETRAHEDRON;
                }
            }), Ur = r(Wr.prototype, "_vertices", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [ new m(0, 0, 0), new m(0, 0, 1), new m(1, 0, 0), new m(0, 1, 0) ];
                }
            }), Gr = Wr)) || Gr) || Gr) || Gr) || Gr));
            dn || (dn = t("h", {}));
            var fn, gn, bn, mn, wn, vn, Sn, Cn, Tn, En, kn, Pn, Dn, On, In, Mn, zn, An, xn, Bn, Fn, Nn, jn, Ln, Hn, Rn, Gn, Wn, Vn, Un = t("i", (Xr = _("cc.PlaneCollider"), 
            Kr = C(), Zr = T(), Qr = w(m), $r = P(), Jr = P(), Xr(tn = Kr(tn = Zr(tn = v((on = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, G.PLANE) || this, n(e, "_normal", rn, o(e)), n(e, "_constant", nn, o(e)), 
                    e;
                }
                return e(r, t), i(r, [ {
                    key: "normal",
                    get: function() {
                        return this._normal;
                    },
                    set: function(t) {
                        m.strictEquals(this._normal, t) || (m.copy(this._normal, t), this._shape && this.shape.setNormal(this._normal));
                    }
                }, {
                    key: "constant",
                    get: function() {
                        return this._constant;
                    },
                    set: function(t) {
                        this._constant !== t && (this._constant = t, this._shape && this.shape.setConstant(this._constant));
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), r;
            }(xe), r((en = on).prototype, "normal", [ Qr, $r ], Object.getOwnPropertyDescriptor(en.prototype, "normal"), en.prototype), 
            r(en.prototype, "constant", [ f, Jr ], Object.getOwnPropertyDescriptor(en.prototype, "constant"), en.prototype), 
            rn = r(en.prototype, "_normal", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m(0, 1, 0);
                }
            }), nn = r(en.prototype, "_constant", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), tn = en)) || tn) || tn) || tn) || tn)), qn = t("a", (fn = _("cc.Constraint"), 
            gn = B(Ae), bn = w(Ae), mn = k(), wn = w(Ae), vn = k(), Sn = k(), Cn = w(Ae), fn(Tn = gn((On = Dn = function(t) {
                function r(e) {
                    var i;
                    return (i = t.call(this) || this).TYPE = void 0, n(i, "_enableCollision", kn, o(i)), 
                    n(i, "_connectedBody", Pn, o(i)), i._constraint = null, i.TYPE = e, i;
                }
                e(r, t);
                var s = r.prototype;
                return s.onLoad = function() {
                    ct.runInEditor && (this._constraint = function(t) {
                        return bt.INITED || (bt.INITED = !0, bt[W.POINT_TO_POINT] = function() {
                            return yt(ct.wrapper.PointToPointConstraint, lt.PointToPointConstraint) ? mt : new ct.wrapper.PointToPointConstraint();
                        }, bt[W.HINGE] = function() {
                            return yt(ct.wrapper.HingeConstraint, lt.HingeConstraint) ? mt : new ct.wrapper.HingeConstraint();
                        }, bt[W.CONE_TWIST] = function() {
                            return yt(ct.wrapper.ConeTwistConstraint, lt.ConeTwistConstraint) ? mt : new ct.wrapper.ConeTwistConstraint();
                        }), bt[t]();
                    }(this.TYPE), this._constraint.initialize(this));
                }, s.onEnable = function() {
                    this._constraint && this._constraint.onEnable();
                }, s.onDisable = function() {
                    this._constraint && this._constraint.onDisable();
                }, s.onDestroy = function() {
                    this._constraint && this._constraint.onDestroy();
                }, i(r, [ {
                    key: "attachedBody",
                    get: function() {
                        return this.getComponent(Ae);
                    }
                }, {
                    key: "connectedBody",
                    get: function() {
                        return this._connectedBody;
                    },
                    set: function(t) {
                        this._connectedBody = t, this._constraint && this._constraint.setConnectedBody(t);
                    }
                }, {
                    key: "enableCollision",
                    get: function() {
                        return this._enableCollision;
                    },
                    set: function(t) {
                        this._enableCollision = t, this._constraint && this._constraint.setEnableCollision(t);
                    }
                } ]), r;
            }(y(O)), Dn.Type = W, r((En = On).prototype, "attachedBody", [ bn, I, mn ], Object.getOwnPropertyDescriptor(En.prototype, "attachedBody"), En.prototype), 
            r(En.prototype, "connectedBody", [ wn, vn ], Object.getOwnPropertyDescriptor(En.prototype, "connectedBody"), En.prototype), 
            r(En.prototype, "enableCollision", [ Sn ], Object.getOwnPropertyDescriptor(En.prototype, "enableCollision"), En.prototype), 
            kn = r(En.prototype, "_enableCollision", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), Pn = r(En.prototype, "_connectedBody", [ Cn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Tn = En)) || Tn) || Tn));
            qn || (qn = t("a", {}));
            var Yn, Xn, Kn, Zn, Qn, $n, Jn, to, eo, io, ro = t("H", (In = _("cc.HingeConstraint"), 
            Mn = C(), zn = T(), An = w(m), xn = w(m), Bn = w(m), Fn = F("axisA"), Nn = F("pivotA"), 
            jn = F("pivotB"), In(Ln = Mn(Ln = zn((Vn = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, W.HINGE) || this, n(e, "_axis", Rn, o(e)), n(e, "_pivotA", Gn, o(e)), 
                    n(e, "_pivotB", Wn, o(e)), e;
                }
                return e(r, t), i(r, [ {
                    key: "pivotA",
                    get: function() {
                        return this._pivotA;
                    },
                    set: function(t) {
                        m.copy(this._pivotA, t), this.constraint.setPivotA(this._pivotA);
                    }
                }, {
                    key: "pivotB",
                    get: function() {
                        return this._pivotB;
                    },
                    set: function(t) {
                        m.copy(this._pivotB, t), this.constraint.setPivotB(this._pivotB);
                    }
                }, {
                    key: "axis",
                    get: function() {
                        return this._axis;
                    },
                    set: function(t) {
                        m.copy(this._axis, t), this.constraint.setAxis(this._axis);
                    }
                }, {
                    key: "constraint",
                    get: function() {
                        return this._constraint;
                    }
                } ]), r;
            }(qn), r((Hn = Vn).prototype, "pivotA", [ An ], Object.getOwnPropertyDescriptor(Hn.prototype, "pivotA"), Hn.prototype), 
            r(Hn.prototype, "pivotB", [ xn ], Object.getOwnPropertyDescriptor(Hn.prototype, "pivotB"), Hn.prototype), 
            r(Hn.prototype, "axis", [ Bn ], Object.getOwnPropertyDescriptor(Hn.prototype, "axis"), Hn.prototype), 
            Rn = r(Hn.prototype, "_axis", [ b, Fn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), Gn = r(Hn.prototype, "_pivotA", [ b, Nn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), Wn = r(Hn.prototype, "_pivotB", [ b, jn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), Ln = Hn)) || Ln) || Ln) || Ln)), no = t("j", (Yn = _("cc.PointToPointConstraint"), 
            Xn = C(), Kn = T(), Zn = w(m), Qn = w(m), Yn($n = Xn($n = Kn((io = function(t) {
                function r() {
                    var e;
                    return e = t.call(this, W.POINT_TO_POINT) || this, n(e, "_pivotA", to, o(e)), n(e, "_pivotB", eo, o(e)), 
                    e;
                }
                return e(r, t), i(r, [ {
                    key: "pivotA",
                    get: function() {
                        return this._pivotA;
                    },
                    set: function(t) {
                        m.copy(this._pivotA, t), this.constraint.setPivotA(this._pivotA);
                    }
                }, {
                    key: "pivotB",
                    get: function() {
                        return this._pivotB;
                    },
                    set: function(t) {
                        m.copy(this._pivotB, t), this.constraint.setPivotB(this._pivotB);
                    }
                }, {
                    key: "constraint",
                    get: function() {
                        return this._constraint;
                    }
                } ]), r;
            }(qn), r((Jn = io).prototype, "pivotA", [ Zn ], Object.getOwnPropertyDescriptor(Jn.prototype, "pivotA"), Jn.prototype), 
            r(Jn.prototype, "pivotB", [ Qn ], Object.getOwnPropertyDescriptor(Jn.prototype, "pivotB"), Jn.prototype), 
            to = r(Jn.prototype, "_pivotA", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), eo = r(Jn.prototype, "_pivotB", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new m();
                }
            }), $n = Jn)) || $n) || $n) || $n));
            a.PhysicsSystem = ce, a.PhysicsMaterial = st, a.PhysicsRayResult = at, a.ConstantForce = yn, 
            t("p", Object.freeze({
                __proto__: null,
                PhysicsSystem: ce,
                PhysicsRayResult: at,
                get Collider() {
                    return xe;
                },
                BoxCollider: an,
                SphereCollider: pn,
                CapsuleCollider: ln,
                MeshCollider: hn,
                CylinderCollider: cn,
                ConeCollider: un,
                TerrainCollider: _n,
                get SimplexCollider() {
                    return dn;
                },
                PlaneCollider: Un,
                get Constraint() {
                    return qn;
                },
                HingeConstraint: ro,
                PointToPointConstraint: no,
                get RigidBody() {
                    return Ae;
                },
                PhysicsMaterial: st,
                ConstantForce: yn,
                selector: ct,
                utils: sn,
                get ERigidBodyType() {
                    return q;
                },
                get EAxisDirection() {
                    return Y;
                },
                get ESimplexType() {
                    return X;
                },
                get EColliderType() {
                    return G;
                },
                get EConstraintType() {
                    return W;
                },
                get PhysicsGroup() {
                    return V;
                }
            }));
        }
    };
});