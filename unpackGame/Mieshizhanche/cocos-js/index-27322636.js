System.register([ "./json-asset-af371a48.js", "./index-dc70820b.js", "./deprecated-7473158a.js", "./renderable-component-3b41513c.js", "./mesh-c7cb246d.js", "./skeleton-6825b7cc.js", "./collision-matrix-8f442d02.js", "./capsule-bcaf73b6.js", "./terrain-asset-905e6340.js" ], function(t) {
    var e, i, r, n, o, s, a, p, l, c, u, h, y, _, d, f, g, b, m, v, w, S, C, T, E, k, P, D, O, I, M, z, A, x, F, B, N, j, L, H, R, G, V, W, q, U, Y, X, K, Z;
    return {
        setters: [ function(t) {
            e = t.ep, i = t.ev, r = t.ei, n = t.dd, o = t.eq, s = t.eA, a = t.er, p = t.ez, 
            l = t.cl, c = t.es, u = t.c4, h = t.eN, y = t.l, _ = t.w, d = t.f, f = t.cI, g = t.R, 
            b = t.eu, m = t.fT, v = t.gP, w = t.fV, S = t.fW, C = t.gg, T = t.et, E = t.fS, 
            k = t.gF, P = t.e, D = t.dO, O = t.dc, I = t.hc, M = t.g7, z = t.ec, A = t.ed, x = t.cD, 
            F = t.gQ, B = t.gx;
        }, function(t) {
            N = t.d, j = t.D, L = t.j;
        }, function(t) {
            H = t.g;
        }, function() {}, function(t) {
            R = t.M;
        }, function() {}, function(t) {
            G = t.b, V = t.c, W = t.P, q = t.C, U = t.a, Y = t.E, X = t.d;
        }, function(t) {
            K = t.c;
        }, function(t) {
            Z = t.T;
        } ],
        execute: function() {
            var Q, J, $, tt, et, it, rt, nt;
            t({
                k: Be,
                l: Ge,
                n: Re,
                r: Ne,
                s: Fe
            });
            var ot, st = t("d", e("cc.PhysicsMaterial")((nt = rt = function(t) {
                function e() {
                    var i;
                    return (i = t.call(this) || this).id = void 0, a(i, "_friction", $, p(i)), a(i, "_rollingFriction", tt, p(i)), 
                    a(i, "_spinningFriction", et, p(i)), a(i, "_restitution", it, p(i)), e.allMaterials.push(p(i)), 
                    i.id = e._idCounter++, i._uuid || (i._uuid = "pm_" + i.id), i;
                }
                i(e, t);
                var n = e.prototype;
                return n.clone = function() {
                    var t = new e();
                    return t._friction = this._friction, t._restitution = this._restitution, t._rollingFriction = this._rollingFriction, 
                    t._spinningFriction = this._spinningFriction, t;
                }, n.destroy = function() {
                    if (t.prototype.destroy.call(this)) {
                        var i = e.allMaterials.indexOf(this);
                        return i >= 0 && e.allMaterials.splice(i, 1), !0;
                    }
                    return !1;
                }, n.setValues = function(t, i, r, n) {
                    var o = this._friction !== t || this._rollingFriction !== i || this._spinningFriction !== r || this._restitution !== n;
                    this._friction = t, this._rollingFriction = i, this._spinningFriction = r, this._restitution = n, 
                    o && this.emit(e.EVENT_UPDATE);
                }, r(e, [ {
                    key: "friction",
                    get: function() {
                        return this._friction;
                    },
                    set: function(t) {
                        l(this._friction, t) || (this._friction = t, this.emit(e.EVENT_UPDATE));
                    }
                }, {
                    key: "rollingFriction",
                    get: function() {
                        return this._rollingFriction;
                    },
                    set: function(t) {
                        l(this._rollingFriction, t) || (this._rollingFriction = t, this.emit(e.EVENT_UPDATE));
                    }
                }, {
                    key: "spinningFriction",
                    get: function() {
                        return this._spinningFriction;
                    },
                    set: function(t) {
                        l(this._spinningFriction, t) || (this._spinningFriction = t, this.emit(e.EVENT_UPDATE));
                    }
                }, {
                    key: "restitution",
                    get: function() {
                        return this._restitution;
                    },
                    set: function(t) {
                        l(this._restitution, t) || (this._restitution = t, this.emit(e.EVENT_UPDATE));
                    }
                } ]), e;
            }(n), rt.allMaterials = [], rt.EVENT_UPDATE = "event_update", rt._idCounter = 0, 
            o((J = nt).prototype, "friction", [ s ], Object.getOwnPropertyDescriptor(J.prototype, "friction"), J.prototype), 
            o(J.prototype, "rollingFriction", [ s ], Object.getOwnPropertyDescriptor(J.prototype, "rollingFriction"), J.prototype), 
            o(J.prototype, "spinningFriction", [ s ], Object.getOwnPropertyDescriptor(J.prototype, "spinningFriction"), J.prototype), 
            o(J.prototype, "restitution", [ s ], Object.getOwnPropertyDescriptor(J.prototype, "restitution"), J.prototype), 
            $ = o(J.prototype, "_friction", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .6;
                }
            }), tt = o(J.prototype, "_rollingFriction", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), et = o(J.prototype, "_spinningFriction", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), it = o(J.prototype, "_restitution", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Q = J)) || Q), at = t("f", function() {
                function t() {
                    this._hitPoint = new u(), this._hitNormal = new u(), this._distance = 0, this._collider = null;
                }
                var e = t.prototype;
                return e._assign = function(t, e, i, r) {
                    u.copy(this._hitPoint, t), u.copy(this._hitNormal, r), this._distance = e, this._collider = i;
                }, e.clone = function() {
                    var e = new t();
                    return u.copy(e._hitPoint, this._hitPoint), u.copy(e._hitNormal, this._hitNormal), 
                    e._distance = this._distance, e._collider = this._collider, e;
                }, r(t, [ {
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
                y._global.CC_PHYSICS_BUILTIN = "builtin" === t, y._global.CC_PHYSICS_CANNON = "cannon.js" === t, 
                y._global.CC_PHYSICS_AMMO = "ammo.js" === t;
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
                runInEditor: !h
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
                return null == t && (ct.id ? _(ct.id + " physics does not support " + lt[e]) : d(9600), 
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
            y.internal.PhysicsGroup = W;
            var vt, wt, St, Ct, Tt, Et, kt, Pt, Dt, Ot, It, Mt, zt, At, xt, Ft, Bt, Nt, jt, Lt, Ht, Rt, Gt, Vt, Wt, qt, Ut, Yt, Xt, Kt, Zt, Qt, Jt, $t, te, ee, ie, re, ne, oe, se, ae, pe, le, ce = t("P", function(t) {
                function e() {
                    var e;
                    return (e = t.call(this) || this).raycastClosestResult = new at(), e.raycastResults = [], 
                    e.collisionMatrix = new q(1), e.minVolumeSize = 1e-5, e.useNodeChains = !1, e._enable = !0, 
                    e._allowSleep = !0, e._maxSubSteps = 1, e._subStepCount = 0, e._fixedTimeStep = 1 / 60, 
                    e._autoSimulation = !0, e._accumulator = 0, e._sleepThreshold = .1, e._gravity = new u(0, -10, 0), 
                    e._material = new st(), e.raycastOptions = {
                        group: -1,
                        mask: -1,
                        queryTrigger: !0,
                        maxDistance: 1e7
                    }, e.raycastResultPool = new g(function() {
                        return new at();
                    }, 1), e._material.on(st.EVENT_UPDATE, e._updateMaterial, p(e)), e;
                }
                i(e, t);
                var n = e.prototype;
                return n.postUpdate = function(t) {
                    if (this.physicsWorld) if (this._enable) {
                        if (this._autoSimulation) {
                            for (this._subStepCount = 0, this._accumulator += t, N.emit(j.EVENT_BEFORE_PHYSICS); this._subStepCount < this._maxSubSteps; ) {
                                if (!(this._accumulator >= this._fixedTimeStep)) {
                                    this.physicsWorld.syncSceneToPhysics();
                                    break;
                                }
                                this.physicsWorld.syncSceneToPhysics(), this.physicsWorld.step(this._fixedTimeStep), 
                                this.physicsWorld.emitEvents(), this.physicsWorld.syncAfterEvents(), this._accumulator -= this._fixedTimeStep, 
                                this._subStepCount++;
                            }
                            N.emit(j.EVENT_AFTER_PHYSICS);
                        }
                    } else this.physicsWorld.syncSceneToPhysics();
                }, n.resetConfiguration = function(t) {
                    var e = t || (H.config ? H.config.physics : null);
                    if (e) {
                        if ("boolean" == typeof e.allowSleep && (this._allowSleep = e.allowSleep), "number" == typeof e.fixedTimeStep && (this._fixedTimeStep = e.fixedTimeStep), 
                        "number" == typeof e.maxSubSteps && (this._maxSubSteps = e.maxSubSteps), "number" == typeof e.sleepThreshold && (this._sleepThreshold = e.sleepThreshold), 
                        "boolean" == typeof e.autoSimulation && (this.autoSimulation = e.autoSimulation), 
                        e.gravity && u.copy(this._gravity, e.gravity), e.defaultMaterial && this._material.setValues(e.defaultMaterial.friction, e.defaultMaterial.rollingFriction, e.defaultMaterial.spinningFriction, e.defaultMaterial.restitution), 
                        e.collisionMatrix) for (var i in e.collisionMatrix) this.collisionMatrix["" + (1 << parseInt(i))] = e.collisionMatrix[i];
                        if (e.collisionGroups) {
                            var r = e.collisionGroups;
                            r instanceof Array && (r.forEach(function(t) {
                                W[t.name] = 1 << t.index;
                            }), f.update(W));
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
                }, e.constructAndRegister = function() {
                    if (!e._instance) {
                        var t = new e();
                        t.resetConfiguration(), function(t) {
                            if (ot || (ot = t), ct.runInEditor && !ct.physicsWorld) {
                                console.info("[PHYSICS]: using " + ct.id + ".");
                                var e = ct.physicsWorld = _t();
                                e.setGravity(ot.gravity), e.setAllowSleep(ot.allowSleep), e.setDefaultMaterial(ot.defaultMaterial);
                            }
                        }(t), e._instance = t, N.registerSystem(e.ID, t, t.priority);
                    }
                }, r(e, [ {
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
                        return W;
                    }
                }, {
                    key: "instance",
                    get: function() {
                        return e._instance;
                    }
                } ]), e;
            }(L));
            ce.ID = "PHYSICS", ce._instance = null, N.once(j.EVENT_INIT, function() {
                ce.constructAndRegister();
            });
            var ue, he, ye, _e, de, fe, ge, be, me, ve, we, Se, Ce, Te, Ee, ke, Pe, De, Oe, Ie, Me, ze, Ae = t("R", (vt = e("cc.RigidBody"), 
            wt = w(), St = S(), Ct = C(-1), Tt = b(ce.PhysicsGroup), Et = T(), kt = E(), Pt = b(U), 
            Dt = T(), Ot = E(), It = k(), Mt = T(), zt = E(), At = k(), xt = T(), Ft = E(), 
            Bt = k(), Nt = T(), jt = E(), Lt = k(), Ht = T(), Rt = E(), Gt = k(), Vt = T(), 
            Wt = E(), qt = k(), Ut = T(), Yt = E(), Xt = k(), Kt = T(), Zt = E(), vt(Qt = wt(Qt = St(Qt = m(Qt = v(Qt = Ct((le = pe = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(r)) || this)._body = null, a(e, "_group", $t, p(e)), 
                    a(e, "_type", te, p(e)), a(e, "_mass", ee, p(e)), a(e, "_allowSleep", ie, p(e)), 
                    a(e, "_linearDamping", re, p(e)), a(e, "_angularDamping", ne, p(e)), a(e, "_useGravity", oe, p(e)), 
                    a(e, "_linearFactor", se, p(e)), a(e, "_angularFactor", ae, p(e)), e;
                }
                i(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    ct.runInEditor && (this._body = yt(ct.wrapper.RigidBody, lt.RigidBody) ? dt : new ct.wrapper.RigidBody(), 
                    this._body.initialize(this));
                }, n.onEnable = function() {
                    this._body && this._body.onEnable();
                }, n.onDisable = function() {
                    this._body && this._body.onDisable();
                }, n.onDestroy = function() {
                    this._body && this._body.onDestroy();
                }, n.applyForce = function(t, e) {
                    this._isInitialized && this._body.applyForce(t, e);
                }, n.applyLocalForce = function(t, e) {
                    this._isInitialized && this._body.applyLocalForce(t, e);
                }, n.applyImpulse = function(t, e) {
                    this._isInitialized && this._body.applyImpulse(t, e);
                }, n.applyLocalImpulse = function(t, e) {
                    this._isInitialized && this._body.applyLocalImpulse(t, e);
                }, n.applyTorque = function(t) {
                    this._isInitialized && this._body.applyTorque(t);
                }, n.applyLocalTorque = function(t) {
                    this._isInitialized && this._body.applyLocalTorque(t);
                }, n.wakeUp = function() {
                    this._isInitialized && this._body.wakeUp();
                }, n.sleep = function() {
                    this._isInitialized && this._body.sleep();
                }, n.clearState = function() {
                    this._isInitialized && this._body.clearState();
                }, n.clearForces = function() {
                    this._isInitialized && this._body.clearForces();
                }, n.clearVelocity = function() {
                    this._isInitialized && this._body.clearVelocity();
                }, n.getLinearVelocity = function(t) {
                    this._isInitialized && this._body.getLinearVelocity(t);
                }, n.setLinearVelocity = function(t) {
                    this._isInitialized && this._body.setLinearVelocity(t);
                }, n.getAngularVelocity = function(t) {
                    this._isInitialized && this._body.getAngularVelocity(t);
                }, n.setAngularVelocity = function(t) {
                    this._isInitialized && this._body.setAngularVelocity(t);
                }, n.getGroup = function() {
                    return this._isInitialized ? this._body.getGroup() : 0;
                }, n.setGroup = function(t) {
                    this._isInitialized && this._body.setGroup(t);
                }, n.addGroup = function(t) {
                    this._isInitialized && this._body.addGroup(t);
                }, n.removeGroup = function(t) {
                    this._isInitialized && this._body.removeGroup(t);
                }, n.getMask = function() {
                    return this._isInitialized ? this._body.getMask() : 0;
                }, n.setMask = function(t) {
                    this._isInitialized && this._body.setMask(t);
                }, n.addMask = function(t) {
                    this._isInitialized && this._body.addMask(t);
                }, n.removeMask = function(t) {
                    this._isInitialized && this._body.removeMask(t);
                }, r(e, [ {
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
                        u.copy(this._linearFactor, t), this._body && this._body.setLinearFactor(this._linearFactor);
                    }
                }, {
                    key: "angularFactor",
                    get: function() {
                        return this._angularFactor;
                    },
                    set: function(t) {
                        u.copy(this._angularFactor, t), this._body && this._body.setAngularFactor(this._angularFactor);
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
                        return this._type === U.STATIC;
                    },
                    set: function(t) {
                        t && this.isStatic || !t && !this.isStatic || (this.type = t ? U.STATIC : U.DYNAMIC);
                    }
                }, {
                    key: "isDynamic",
                    get: function() {
                        return this._type === U.DYNAMIC;
                    },
                    set: function(t) {
                        t && this.isDynamic || !t && !this.isDynamic || (this.type = t ? U.DYNAMIC : U.KINEMATIC);
                    }
                }, {
                    key: "isKinematic",
                    get: function() {
                        return this._type === U.KINEMATIC;
                    },
                    set: function(t) {
                        t && this.isKinematic || !t && !this.isKinematic || (this.type = t ? U.KINEMATIC : U.DYNAMIC);
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
                        return t && P("[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene."), 
                        !t;
                    }
                } ]), e;
            }(D), pe.Type = U, o((Jt = le).prototype, "group", [ Tt, Et, kt ], Object.getOwnPropertyDescriptor(Jt.prototype, "group"), Jt.prototype), 
            o(Jt.prototype, "type", [ Pt, Dt, Ot ], Object.getOwnPropertyDescriptor(Jt.prototype, "type"), Jt.prototype), 
            o(Jt.prototype, "mass", [ It, Mt, zt ], Object.getOwnPropertyDescriptor(Jt.prototype, "mass"), Jt.prototype), 
            o(Jt.prototype, "allowSleep", [ At, xt, Ft ], Object.getOwnPropertyDescriptor(Jt.prototype, "allowSleep"), Jt.prototype), 
            o(Jt.prototype, "linearDamping", [ Bt, Nt, jt ], Object.getOwnPropertyDescriptor(Jt.prototype, "linearDamping"), Jt.prototype), 
            o(Jt.prototype, "angularDamping", [ Lt, Ht, Rt ], Object.getOwnPropertyDescriptor(Jt.prototype, "angularDamping"), Jt.prototype), 
            o(Jt.prototype, "useGravity", [ Gt, Vt, Wt ], Object.getOwnPropertyDescriptor(Jt.prototype, "useGravity"), Jt.prototype), 
            o(Jt.prototype, "linearFactor", [ qt, Ut, Yt ], Object.getOwnPropertyDescriptor(Jt.prototype, "linearFactor"), Jt.prototype), 
            o(Jt.prototype, "angularFactor", [ Xt, Kt, Zt ], Object.getOwnPropertyDescriptor(Jt.prototype, "angularFactor"), Jt.prototype), 
            $t = o(Jt.prototype, "_group", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ce.PhysicsGroup.DEFAULT;
                }
            }), te = o(Jt.prototype, "_type", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return U.DYNAMIC;
                }
            }), ee = o(Jt.prototype, "_mass", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), ie = o(Jt.prototype, "_allowSleep", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), re = o(Jt.prototype, "_linearDamping", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1;
                }
            }), ne = o(Jt.prototype, "_angularDamping", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1;
                }
            }), oe = o(Jt.prototype, "_useGravity", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), se = o(Jt.prototype, "_linearFactor", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u(1, 1, 1);
                }
            }), ae = o(Jt.prototype, "_angularFactor", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u(1, 1, 1);
                }
            }), Qt = Jt)) || Qt) || Qt) || Qt) || Qt) || Qt) || Qt));
            Ae || (Ae = t("R", {}));
            var xe = t("C", (ue = e("cc.Collider"), he = b(Ae), ye = M(), _e = T(), de = E(), 
            fe = b(st), ge = M(), be = T(), me = E(), ve = T(), we = E(), Se = b(u), Ce = T(), 
            Te = E(), Ee = b(st), ue((ze = Me = function(t) {
                function e(e) {
                    var i;
                    return (i = t.call(this) || this).type = void 0, i._shape = null, i._aabb = null, 
                    i._boundingSphere = null, i._isSharedMaterial = !0, i._needTriggerEvent = !1, i._needCollisionEvent = !1, 
                    a(i, "_material", De, p(i)), a(i, "_isTrigger", Oe, p(i)), a(i, "_center", Ie, p(i)), 
                    i.type = e, i;
                }
                i(e, t);
                var n = e.prototype;
                return n.on = function(e, i, r, n) {
                    var o = t.prototype.on.call(this, e, i, r, n);
                    return this._updateNeedEvent(e), o;
                }, n.off = function(e, i, r) {
                    t.prototype.off.call(this, e, i, r), this._updateNeedEvent();
                }, n.once = function(e, i, r) {
                    var n = t.prototype.once.call(this, e, i, r);
                    return this._updateNeedEvent(e), n;
                }, n.removeAll = function(e) {
                    t.prototype.removeAll.call(this, e), this._updateNeedEvent();
                }, n.getGroup = function() {
                    return this._isInitialized ? this._shape.getGroup() : 0;
                }, n.setGroup = function(t) {
                    this._isInitialized && this._shape.setGroup(t);
                }, n.addGroup = function(t) {
                    this._isInitialized && this._shape.addGroup(t);
                }, n.removeGroup = function(t) {
                    this._isInitialized && this._shape.removeGroup(t);
                }, n.getMask = function() {
                    return this._isInitialized ? this._shape.getMask() : 0;
                }, n.setMask = function(t) {
                    this._isInitialized && this._shape.setMask(t);
                }, n.addMask = function(t) {
                    this._isInitialized && this._shape.addMask(t);
                }, n.removeMask = function(t) {
                    this._isInitialized && this._shape.removeMask(t);
                }, n.onLoad = function() {
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
                }, n.onEnable = function() {
                    this._shape && this._shape.onEnable();
                }, n.onDisable = function() {
                    this._shape && this._shape.onDisable();
                }, n.onDestroy = function() {
                    this._shape && (this._needTriggerEvent = !1, this._needCollisionEvent = !1, this._shape.updateEventListener(), 
                    this._material && this._material.off(st.EVENT_UPDATE, this._updateMaterial, this), 
                    this._shape.onDestroy()), this._boundingSphere && this._boundingSphere.destroy();
                }, n._updateMaterial = function() {
                    this._shape && this._shape.setMaterial(this._material);
                }, n._updateNeedEvent = function(t) {
                    this.isValid && (void 0 !== t ? ("onCollisionEnter" !== t && "onCollisionStay" !== t && "onCollisionExit" !== t || (this._needCollisionEvent = !0), 
                    "onTriggerEnter" !== t && "onTriggerStay" !== t && "onTriggerExit" !== t || (this._needTriggerEvent = !0)) : (this.hasEventListener("onTriggerEnter") || this.hasEventListener("onTriggerStay") || this.hasEventListener("onTriggerExit") || (this._needTriggerEvent = !1), 
                    this.hasEventListener("onCollisionEnter") || this.hasEventListener("onCollisionStay") || this.hasEventListener("onCollisionExit") || (this._needCollisionEvent = !1)), 
                    this._shape && this._shape.updateEventListener());
                }, r(e, [ {
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
                        u.copy(this._center, t), this._shape && this._shape.setCenter(this._center);
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
                        return t && P("[Physics]: This component has not been call onLoad yet, please make sure the node has been added to the scene."), 
                        !t;
                    }
                } ]), e;
            }(O(D)), Me.Type = G, Me.Axis = Y, o((Pe = ze).prototype, "attachedRigidBody", [ he, I, ye, _e, de ], Object.getOwnPropertyDescriptor(Pe.prototype, "attachedRigidBody"), Pe.prototype), 
            o(Pe.prototype, "sharedMaterial", [ fe, ge, be, me ], Object.getOwnPropertyDescriptor(Pe.prototype, "sharedMaterial"), Pe.prototype), 
            o(Pe.prototype, "isTrigger", [ ve, we ], Object.getOwnPropertyDescriptor(Pe.prototype, "isTrigger"), Pe.prototype), 
            o(Pe.prototype, "center", [ Se, Ce, Te ], Object.getOwnPropertyDescriptor(Pe.prototype, "center"), Pe.prototype), 
            De = o(Pe.prototype, "_material", [ Ee ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Oe = o(Pe.prototype, "_isTrigger", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Ie = o(Pe.prototype, "_center", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), ke = Pe)) || ke));
            function Fe(t, e) {
                t.__cc_wrapper__ = e;
            }
            function Be(t) {
                return t.__cc_wrapper__;
            }
            function Ne(t) {
                return Math.max(t.x, Math.max(t.y, t.z));
            }
            xe || (xe = t("C", {}));
            var je = t("V", new u()), Le = t("o", {
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
                        for (var n = t[r], o = t[r + 1], s = t[r + 2], a = e.length, p = !0, c = 0; c < a; c += 3) if (l(n, e[c]) && l(o, e[c + 1]) && l(s, e[c + 2])) {
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
            var Ve, We, qe, Ue, Ye, Xe, Ke, Ze, Qe, Je, $e, ti, ei, ii, ri, ni, oi, si, ai, pi, li, ci, ui, hi, yi, _i, di, fi, gi, bi, mi, vi, wi, Si, Ci, Ti, Ei, ki, Pi, Di, Oi, Ii, Mi, zi, Ai, xi, Fi, Bi, Ni, ji, Li, Hi, Ri, Gi, Vi, Wi, qi, Ui, Yi, Xi, Ki, Zi, Qi, Ji, $i, tr, er, ir, rr, nr, or, sr, ar, pr, lr, cr, ur, hr, yr, _r, dr, fr, gr, br, mr, vr, wr, Sr, Cr, Tr, Er, kr, Pr, Dr, Or, Ir, Mr, zr, Ar, xr, Fr, Br, Nr, jr, Lr, Hr, Rr, Gr, Vr, Wr, qr, Ur, Yr, Xr, Kr, Zr, Qr, Jr, $r, tn, en, rn, nn, on, sn = Object.freeze({
                __proto__: null,
                setWrap: Fe,
                getWrap: Be,
                maxComponent: Ne,
                VEC3_0: je,
                TriggerEventObject: Le,
                CollisionEventObject: He,
                shrinkPositions: Re,
                absolute: Ge,
                cylinder: K
            }), an = t("B", (Ve = e("cc.BoxCollider"), We = w(), qe = S(), Ue = b(u), Ye = E(), 
            Ve(Xe = We(Xe = qe(Xe = m((Qe = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.BOX) || this, a(e, "_size", Ze, p(e)), e;
                }
                return i(e, t), r(e, [ {
                    key: "size",
                    get: function() {
                        return this._size;
                    },
                    set: function(t) {
                        u.strictEquals(this._size, t) || (u.copy(this._size, t), Ge(this._size), this._shape && this.shape.updateSize());
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape;
                    }
                } ]), e;
            }(xe), o((Ke = Qe).prototype, "size", [ Ue, Ye ], Object.getOwnPropertyDescriptor(Ke.prototype, "size"), Ke.prototype), 
            Ze = o(Ke.prototype, "_size", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u(1, 1, 1);
                }
            }), Xe = Ke)) || Xe) || Xe) || Xe) || Xe)), pn = t("S", (Je = e("cc.SphereCollider"), 
            $e = w(), ti = S(), ei = E(), Je(ii = $e(ii = ti(ii = m((oi = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.SPHERE) || this, a(e, "_radius", ni, p(e)), e;
                }
                return i(e, t), r(e, [ {
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
                } ]), e;
            }(xe), o((ri = oi).prototype, "radius", [ ei ], Object.getOwnPropertyDescriptor(ri.prototype, "radius"), ri.prototype), 
            ni = o(ri.prototype, "_radius", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), ii = ri)) || ii) || ii) || ii) || ii)), ln = t("b", (si = e("cc.CapsuleCollider"), 
            ai = w(), pi = S(), li = E(), ci = E(), ui = b(Y), hi = E(), si(yi = ai(yi = pi(yi = m((bi = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.CAPSULE) || this, a(e, "_radius", di, p(e)), a(e, "_cylinderHeight", fi, p(e)), 
                    a(e, "_direction", gi, p(e)), e;
                }
                i(e, t);
                var n = e.prototype;
                return n._getRadiusScale = function() {
                    if (null == this.node) return 1;
                    var t = this.node.worldScale;
                    return this._direction === Y.Y_AXIS ? Math.abs(x(t.x, t.z)) : this._direction === Y.X_AXIS ? Math.abs(x(t.y, t.z)) : Math.abs(x(t.x, t.y));
                }, n._getHeightScale = function() {
                    if (null == this.node) return 1;
                    var t = this.node.worldScale;
                    return this._direction === Y.Y_AXIS ? Math.abs(t.y) : this._direction === Y.X_AXIS ? Math.abs(t.x) : Math.abs(t.z);
                }, r(e, [ {
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
                } ]), e;
            }(xe), o((_i = bi).prototype, "radius", [ li ], Object.getOwnPropertyDescriptor(_i.prototype, "radius"), _i.prototype), 
            o(_i.prototype, "cylinderHeight", [ ci ], Object.getOwnPropertyDescriptor(_i.prototype, "cylinderHeight"), _i.prototype), 
            o(_i.prototype, "direction", [ ui, hi ], Object.getOwnPropertyDescriptor(_i.prototype, "direction"), _i.prototype), 
            di = o(_i.prototype, "_radius", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), fi = o(_i.prototype, "_cylinderHeight", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), gi = o(_i.prototype, "_direction", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Y.Y_AXIS;
                }
            }), yi = _i)) || yi) || yi) || yi) || yi)), cn = t("c", (mi = e("cc.CylinderCollider"), 
            vi = w(), wi = S(), Si = E(), Ci = E(), Ti = b(Y), Ei = E(), mi(ki = vi(ki = wi(ki = m((Mi = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.CYLINDER) || this, a(e, "_radius", Di, p(e)), a(e, "_height", Oi, p(e)), 
                    a(e, "_direction", Ii, p(e)), e;
                }
                return i(e, t), r(e, [ {
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
                } ]), e;
            }(xe), o((Pi = Mi).prototype, "radius", [ Si ], Object.getOwnPropertyDescriptor(Pi.prototype, "radius"), Pi.prototype), 
            o(Pi.prototype, "height", [ Ci ], Object.getOwnPropertyDescriptor(Pi.prototype, "height"), Pi.prototype), 
            o(Pi.prototype, "direction", [ Ti, Ei ], Object.getOwnPropertyDescriptor(Pi.prototype, "direction"), Pi.prototype), 
            Di = o(Pi.prototype, "_radius", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), Oi = o(Pi.prototype, "_height", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2;
                }
            }), Ii = o(Pi.prototype, "_direction", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Y.Y_AXIS;
                }
            }), ki = Pi)) || ki) || ki) || ki) || ki)), un = t("g", (zi = e("cc.ConeCollider"), 
            Ai = w(), xi = S(), Fi = E(), Bi = E(), Ni = b(Y), ji = E(), zi(Li = Ai(Li = xi(Li = m((Wi = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.CONE) || this, a(e, "_radius", Ri, p(e)), a(e, "_height", Gi, p(e)), 
                    a(e, "_direction", Vi, p(e)), e;
                }
                return i(e, t), r(e, [ {
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
                } ]), e;
            }(xe), o((Hi = Wi).prototype, "radius", [ Fi ], Object.getOwnPropertyDescriptor(Hi.prototype, "radius"), Hi.prototype), 
            o(Hi.prototype, "height", [ Bi ], Object.getOwnPropertyDescriptor(Hi.prototype, "height"), Hi.prototype), 
            o(Hi.prototype, "direction", [ Ni, ji ], Object.getOwnPropertyDescriptor(Hi.prototype, "direction"), Hi.prototype), 
            Ri = o(Hi.prototype, "_radius", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), Gi = o(Hi.prototype, "_height", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), Vi = o(Hi.prototype, "_direction", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Y.Y_AXIS;
                }
            }), Li = Hi)) || Li) || Li) || Li) || Li)), hn = t("M", (qi = e("cc.MeshCollider"), 
            Ui = w(), Yi = S(), Xi = b(R), Ki = E(), Zi = E(), qi(Qi = Ui(Qi = Yi(Qi = m((er = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.MESH) || this, a(e, "_mesh", $i, p(e)), a(e, "_convex", tr, p(e)), 
                    e;
                }
                return i(e, t), r(e, [ {
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
                } ]), e;
            }(xe), o((Ji = er).prototype, "mesh", [ Xi, Ki ], Object.getOwnPropertyDescriptor(Ji.prototype, "mesh"), Ji.prototype), 
            o(Ji.prototype, "convex", [ s, Zi ], Object.getOwnPropertyDescriptor(Ji.prototype, "convex"), Ji.prototype), 
            $i = o(Ji.prototype, "_mesh", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), tr = o(Ji.prototype, "_convex", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Qi = Ji)) || Qi) || Qi) || Qi) || Qi)), yn = t("e", (ir = e("cc.ConstantForce"), 
            rr = w(), nr = F(Ae), or = S(), sr = T(), ar = E(), pr = T(), lr = E(), cr = T(), 
            ur = E(), hr = T(), yr = E(), ir(_r = rr(_r = nr(_r = or(_r = v(_r = m((vr = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    return (e = t.call.apply(t, [ this ].concat(r)) || this)._rigidBody = null, a(e, "_force", fr, p(e)), 
                    a(e, "_localForce", gr, p(e)), a(e, "_torque", br, p(e)), a(e, "_localTorque", mr, p(e)), 
                    e._mask = 0, e;
                }
                i(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    this._rigidBody = this.node.getComponent(Ae), this._maskUpdate(this._force, 1), 
                    this._maskUpdate(this._localForce, 2), this._maskUpdate(this._torque, 4), this._maskUpdate(this._localTorque, 8);
                }, n.lateUpdate = function() {
                    null != this._rigidBody && 0 !== this._mask && (1 & this._mask && this._rigidBody.applyForce(this._force), 
                    2 & this._mask && this._rigidBody.applyLocalForce(this.localForce), 4 & this._mask && this._rigidBody.applyTorque(this._torque), 
                    8 & this._mask && this._rigidBody.applyLocalTorque(this._localTorque));
                }, n._maskUpdate = function(t, e) {
                    t.strictEquals(u.ZERO) ? this._mask &= ~e : this._mask |= e;
                }, r(e, [ {
                    key: "force",
                    get: function() {
                        return this._force;
                    },
                    set: function(t) {
                        u.copy(this._force, t), this._maskUpdate(this._force, 1);
                    }
                }, {
                    key: "localForce",
                    get: function() {
                        return this._localForce;
                    },
                    set: function(t) {
                        u.copy(this._localForce, t), this._maskUpdate(this.localForce, 2);
                    }
                }, {
                    key: "torque",
                    get: function() {
                        return this._torque;
                    },
                    set: function(t) {
                        u.copy(this._torque, t), this._maskUpdate(this._torque, 4);
                    }
                }, {
                    key: "localTorque",
                    get: function() {
                        return this._localTorque;
                    },
                    set: function(t) {
                        u.copy(this._localTorque, t), this._maskUpdate(this._localTorque, 8);
                    }
                } ]), e;
            }(D), fr = o((dr = vr).prototype, "_force", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), gr = o(dr.prototype, "_localForce", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), br = o(dr.prototype, "_torque", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), mr = o(dr.prototype, "_localTorque", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), o(dr.prototype, "force", [ sr, ar ], Object.getOwnPropertyDescriptor(dr.prototype, "force"), dr.prototype), 
            o(dr.prototype, "localForce", [ pr, lr ], Object.getOwnPropertyDescriptor(dr.prototype, "localForce"), dr.prototype), 
            o(dr.prototype, "torque", [ cr, ur ], Object.getOwnPropertyDescriptor(dr.prototype, "torque"), dr.prototype), 
            o(dr.prototype, "localTorque", [ hr, yr ], Object.getOwnPropertyDescriptor(dr.prototype, "localTorque"), dr.prototype), 
            _r = dr)) || _r) || _r) || _r) || _r) || _r) || _r)), _n = t("T", (wr = e("cc.TerrainCollider"), 
            Sr = w(), Cr = S(), Tr = b(Z), Er = E(), wr(kr = Sr(kr = Cr(kr = m((Or = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.TERRAIN) || this, a(e, "_terrain", Dr, p(e)), e;
                }
                return i(e, t), r(e, [ {
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
                } ]), e;
            }(xe), o((Pr = Or).prototype, "terrain", [ Tr, Er ], Object.getOwnPropertyDescriptor(Pr.prototype, "terrain"), Pr.prototype), 
            Dr = o(Pr.prototype, "_terrain", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), kr = Pr)) || kr) || kr) || kr) || kr)), dn = t("h", (Ir = e("cc.SimplexCollider"), 
            Mr = w(), zr = S(), Ar = b(X), xr = E(), Fr = E(), Br = k(), Nr = E(), jr = k(), 
            Lr = E(), Hr = k(), Rr = E(), Ir(Gr = Mr(Gr = zr(Gr = m((Yr = Ur = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.SIMPLEX) || this, a(e, "_shapeType", Wr, p(e)), a(e, "_vertices", qr, p(e)), 
                    e;
                }
                return i(e, t), e.prototype.updateVertices = function() {
                    this._shape && this.shape.setVertices(this._vertices);
                }, r(e, [ {
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
                        u.copy(this._vertices[0], t), this.updateVertices();
                    }
                }, {
                    key: "vertex1",
                    get: function() {
                        return this._vertices[1];
                    },
                    set: function(t) {
                        u.copy(this._vertices[1], t), this.updateVertices();
                    }
                }, {
                    key: "vertex2",
                    get: function() {
                        return this._vertices[2];
                    },
                    set: function(t) {
                        u.copy(this._vertices[2], t), this.updateVertices();
                    }
                }, {
                    key: "vertex3",
                    get: function() {
                        return this._vertices[3];
                    },
                    set: function(t) {
                        u.copy(this._vertices[3], t), this.updateVertices();
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
                } ]), e;
            }(xe), Ur.ESimplexType = X, o((Vr = Yr).prototype, "shapeType", [ Ar, xr ], Object.getOwnPropertyDescriptor(Vr.prototype, "shapeType"), Vr.prototype), 
            o(Vr.prototype, "vertex0", [ s, Fr ], Object.getOwnPropertyDescriptor(Vr.prototype, "vertex0"), Vr.prototype), 
            o(Vr.prototype, "vertex1", [ Br, Nr ], Object.getOwnPropertyDescriptor(Vr.prototype, "vertex1"), Vr.prototype), 
            o(Vr.prototype, "vertex2", [ jr, Lr ], Object.getOwnPropertyDescriptor(Vr.prototype, "vertex2"), Vr.prototype), 
            o(Vr.prototype, "vertex3", [ Hr, Rr ], Object.getOwnPropertyDescriptor(Vr.prototype, "vertex3"), Vr.prototype), 
            Wr = o(Vr.prototype, "_shapeType", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return X.TETRAHEDRON;
                }
            }), qr = o(Vr.prototype, "_vertices", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [ new u(0, 0, 0), new u(0, 0, 1), new u(1, 0, 0), new u(0, 1, 0) ];
                }
            }), Gr = Vr)) || Gr) || Gr) || Gr) || Gr));
            dn || (dn = t("h", {}));
            var fn, gn, bn, mn, vn, wn, Sn, Cn, Tn, En, kn, Pn, Dn, On, In, Mn, zn, An, xn, Fn, Bn, Nn, jn, Ln, Hn, Rn, Gn, Vn, Wn, qn = t("i", (Xr = e("cc.PlaneCollider"), 
            Kr = w(), Zr = S(), Qr = b(u), Jr = E(), $r = E(), Xr(tn = Kr(tn = Zr(tn = m((on = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.PLANE) || this, a(e, "_normal", rn, p(e)), a(e, "_constant", nn, p(e)), 
                    e;
                }
                return i(e, t), r(e, [ {
                    key: "normal",
                    get: function() {
                        return this._normal;
                    },
                    set: function(t) {
                        u.strictEquals(this._normal, t) || (u.copy(this._normal, t), this._shape && this.shape.setNormal(this._normal));
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
                } ]), e;
            }(xe), o((en = on).prototype, "normal", [ Qr, Jr ], Object.getOwnPropertyDescriptor(en.prototype, "normal"), en.prototype), 
            o(en.prototype, "constant", [ s, $r ], Object.getOwnPropertyDescriptor(en.prototype, "constant"), en.prototype), 
            rn = o(en.prototype, "_normal", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u(0, 1, 0);
                }
            }), nn = o(en.prototype, "_constant", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), tn = en)) || tn) || tn) || tn) || tn)), Un = t("a", (fn = e("cc.Constraint"), 
            gn = F(Ae), bn = b(Ae), mn = T(), vn = b(Ae), wn = T(), Sn = T(), Cn = b(Ae), fn(Tn = gn((On = Dn = function(t) {
                function e(e) {
                    var i;
                    return (i = t.call(this) || this).TYPE = void 0, a(i, "_enableCollision", kn, p(i)), 
                    a(i, "_connectedBody", Pn, p(i)), i._constraint = null, i.TYPE = e, i;
                }
                i(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    ct.runInEditor && (this._constraint = function(t) {
                        return bt.INITED || (bt.INITED = !0, bt[V.POINT_TO_POINT] = function() {
                            return yt(ct.wrapper.PointToPointConstraint, lt.PointToPointConstraint) ? mt : new ct.wrapper.PointToPointConstraint();
                        }, bt[V.HINGE] = function() {
                            return yt(ct.wrapper.HingeConstraint, lt.HingeConstraint) ? mt : new ct.wrapper.HingeConstraint();
                        }, bt[V.CONE_TWIST] = function() {
                            return yt(ct.wrapper.ConeTwistConstraint, lt.ConeTwistConstraint) ? mt : new ct.wrapper.ConeTwistConstraint();
                        }), bt[t]();
                    }(this.TYPE), this._constraint.initialize(this));
                }, n.onEnable = function() {
                    this._constraint && this._constraint.onEnable();
                }, n.onDisable = function() {
                    this._constraint && this._constraint.onDisable();
                }, n.onDestroy = function() {
                    this._constraint && this._constraint.onDestroy();
                }, r(e, [ {
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
                } ]), e;
            }(O(D)), Dn.Type = V, o((En = On).prototype, "attachedBody", [ bn, I, mn ], Object.getOwnPropertyDescriptor(En.prototype, "attachedBody"), En.prototype), 
            o(En.prototype, "connectedBody", [ vn, wn ], Object.getOwnPropertyDescriptor(En.prototype, "connectedBody"), En.prototype), 
            o(En.prototype, "enableCollision", [ Sn ], Object.getOwnPropertyDescriptor(En.prototype, "enableCollision"), En.prototype), 
            kn = o(En.prototype, "_enableCollision", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), Pn = o(En.prototype, "_connectedBody", [ Cn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Tn = En)) || Tn) || Tn));
            Un || (Un = t("a", {}));
            var Yn, Xn, Kn, Zn, Qn, Jn, $n, to, eo, io, ro = t("H", (In = e("cc.HingeConstraint"), 
            Mn = w(), zn = S(), An = b(u), xn = b(u), Fn = b(u), Bn = B("axisA"), Nn = B("pivotA"), 
            jn = B("pivotB"), In(Ln = Mn(Ln = zn((Wn = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, V.HINGE) || this, a(e, "_axis", Rn, p(e)), a(e, "_pivotA", Gn, p(e)), 
                    a(e, "_pivotB", Vn, p(e)), e;
                }
                return i(e, t), r(e, [ {
                    key: "pivotA",
                    get: function() {
                        return this._pivotA;
                    },
                    set: function(t) {
                        u.copy(this._pivotA, t), this.constraint.setPivotA(this._pivotA);
                    }
                }, {
                    key: "pivotB",
                    get: function() {
                        return this._pivotB;
                    },
                    set: function(t) {
                        u.copy(this._pivotB, t), this.constraint.setPivotB(this._pivotB);
                    }
                }, {
                    key: "axis",
                    get: function() {
                        return this._axis;
                    },
                    set: function(t) {
                        u.copy(this._axis, t), this.constraint.setAxis(this._axis);
                    }
                }, {
                    key: "constraint",
                    get: function() {
                        return this._constraint;
                    }
                } ]), e;
            }(Un), o((Hn = Wn).prototype, "pivotA", [ An ], Object.getOwnPropertyDescriptor(Hn.prototype, "pivotA"), Hn.prototype), 
            o(Hn.prototype, "pivotB", [ xn ], Object.getOwnPropertyDescriptor(Hn.prototype, "pivotB"), Hn.prototype), 
            o(Hn.prototype, "axis", [ Fn ], Object.getOwnPropertyDescriptor(Hn.prototype, "axis"), Hn.prototype), 
            Rn = o(Hn.prototype, "_axis", [ c, Bn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), Gn = o(Hn.prototype, "_pivotA", [ c, Nn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), Vn = o(Hn.prototype, "_pivotB", [ c, jn ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), Ln = Hn)) || Ln) || Ln) || Ln)), no = t("j", (Yn = e("cc.PointToPointConstraint"), 
            Xn = w(), Kn = S(), Zn = b(u), Qn = b(u), Yn(Jn = Xn(Jn = Kn((io = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, V.POINT_TO_POINT) || this, a(e, "_pivotA", to, p(e)), a(e, "_pivotB", eo, p(e)), 
                    e;
                }
                return i(e, t), r(e, [ {
                    key: "pivotA",
                    get: function() {
                        return this._pivotA;
                    },
                    set: function(t) {
                        u.copy(this._pivotA, t), this.constraint.setPivotA(this._pivotA);
                    }
                }, {
                    key: "pivotB",
                    get: function() {
                        return this._pivotB;
                    },
                    set: function(t) {
                        u.copy(this._pivotB, t), this.constraint.setPivotB(this._pivotB);
                    }
                }, {
                    key: "constraint",
                    get: function() {
                        return this._constraint;
                    }
                } ]), e;
            }(Un), o(($n = io).prototype, "pivotA", [ Zn ], Object.getOwnPropertyDescriptor($n.prototype, "pivotA"), $n.prototype), 
            o($n.prototype, "pivotB", [ Qn ], Object.getOwnPropertyDescriptor($n.prototype, "pivotB"), $n.prototype), 
            to = o($n.prototype, "_pivotA", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), eo = o($n.prototype, "_pivotB", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u();
                }
            }), Jn = $n)) || Jn) || Jn) || Jn));
            y.PhysicsSystem = ce, y.PhysicsMaterial = st, y.PhysicsRayResult = at, y.ConstantForce = yn, 
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
                PlaneCollider: qn,
                get Constraint() {
                    return Un;
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
                    return U;
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
                    return V;
                },
                get PhysicsGroup() {
                    return W;
                }
            }));
        }
    };
});