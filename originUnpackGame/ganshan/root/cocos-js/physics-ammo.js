System.register([ "./texture-barrier-60b5983b.js", "./base.js", "./json-asset-933a1d4c.js", "./index-f2b92470.js", "./renderable-component-7c6600ed.js", "./deprecated-26630860.js", "./deprecated-ef6bb945.js", "./mesh-f5415e9d.js", "./deprecated-6c081405.js", "./skeleton-b0039cea.js", "./index-2e896cdf.js", "./collision-matrix-ae46bfd8.js", "./capsule-3dc9b423.js", "./terrain-asset-ecb9fa31.js", "./physics-framework.js", "./_commonjsHelpers-19d0a8b5.js", "./tuple-dictionary-5e20c301.js", "./instantiated-0d849fc8.js", "./array-collision-matrix-ec6af177.js" ], function() {
    var t, i, e, s, o, n, r, a, l, d, h, c, p, _, u, y, f, g, S, m, C, B, T, v;
    return {
        setters: [ function(a) {
            t = a.bU, i = a.W, e = a.cr, s = a.e, o = a.bT, n = a.d, r = a.w;
        }, function() {}, function(t) {
            a = t.Q, l = t.W, d = t.ce, h = t.ap, c = t.aq;
        }, function() {}, function() {}, function(t) {
            p = t.g, _ = t.G;
        }, function() {}, function() {}, function() {}, function() {}, function(t) {
            u = t.P, y = t.V, f = t.l, g = t.m;
        }, function(t) {
            S = t.a, m = t.P, C = t.b;
        }, function() {}, function() {}, function() {}, function() {}, function(t) {
            B = t.T;
        }, function(t) {
            T = t.b;
        }, function(t) {
            v = t.A;
        } ],
        execute: function() {
            var b = {
                type: "onTriggerEnter",
                selfCollider: null,
                otherCollider: null,
                impl: null
            }, A = {
                type: "onCollisionEnter",
                selfCollider: null,
                otherCollider: null,
                contacts: [],
                impl: null
            }, E = function() {
                function i() {
                    this.BT_TRANSFORM_0 = T.Transform_new(), this.BT_TRANSFORM_1 = T.Transform_new(), 
                    this.BT_V3_0 = T.Vec3_new(0, 0, 0), this.BT_V3_1 = T.Vec3_new(0, 0, 0), this.BT_V3_2 = T.Vec3_new(0, 0, 0), 
                    this.BT_QUAT_0 = T.Quat_new(0, 0, 0, 1);
                }
                return i.setWrapper = function(t, i, e) {
                    this.ROOT[i] || (this.ROOT[i] = {}), this.ROOT[i][t] = e;
                }, i.delWrapper = function(t, i) {
                    delete this.ROOT[i][t];
                }, i.getWrapper = function(t, i) {
                    return this.ROOT[i][t];
                }, i.isNotEmptyShape = function(t) {
                    return t !== T.EmptyShape_static();
                }, t(i, null, [ {
                    key: "instance",
                    get: function() {
                        return null == i._instance && (i._instance = new i()), i._instance;
                    }
                } ]), i;
            }();
            E._instance = void 0, E.ROOT = {};
            var O, w, I, R, D, M = new a(), P = new a(), F = new l();
            function V(t, i) {
                return T.Vec3_set(t, i.x, i.y, i.z), t;
            }
            function k(t, i) {
                return t.x = T.Vec3_x(i), t.y = T.Vec3_y(i), t.z = T.Vec3_z(i), t;
            }
            function N(t, i) {
                return T.Quat_set(t, i.x, i.y, i.z, i.w), t;
            }
            function L(t, i) {
                return t.x = T.Quat_x(i), t.y = T.Quat_y(i), t.z = T.Quat_z(i), t.w = T.Quat_w(i), 
                t;
            }
            T.CACHE = E, function(t) {
                t[t.BODY_RE_ADD = 1] = "BODY_RE_ADD", t[t.GHOST_RE_ADD = 2] = "GHOST_RE_ADD";
            }(O || (O = {})), function(t) {
                t[t.CF_STATIC_OBJECT = 1] = "CF_STATIC_OBJECT", t[t.CF_KINEMATIC_OBJECT = 2] = "CF_KINEMATIC_OBJECT", 
                t[t.CF_NO_CONTACT_RESPONSE = 4] = "CF_NO_CONTACT_RESPONSE", t[t.CF_CUSTOM_MATERIAL_CALLBACK = 8] = "CF_CUSTOM_MATERIAL_CALLBACK", 
                t[t.CF_CHARACTER_OBJECT = 16] = "CF_CHARACTER_OBJECT", t[t.CF_DISABLE_VISUALIZE_OBJECT = 32] = "CF_DISABLE_VISUALIZE_OBJECT", 
                t[t.CF_DISABLE_SPU_COLLISION_PROCESSING = 64] = "CF_DISABLE_SPU_COLLISION_PROCESSING";
            }(w || (w = {})), function(t) {
                t[t.CO_COLLISION_OBJECT = 1] = "CO_COLLISION_OBJECT", t[t.CO_RIGID_BODY = 2] = "CO_RIGID_BODY", 
                t[t.CO_GHOST_OBJECT = 4] = "CO_GHOST_OBJECT", t[t.CO_SOFT_BODY = 8] = "CO_SOFT_BODY", 
                t[t.CO_HF_FLUID = 16] = "CO_HF_FLUID", t[t.CO_USER_TYPE = 32] = "CO_USER_TYPE", 
                t[t.CO_FEATHERSTONE_LINK = 64] = "CO_FEATHERSTONE_LINK";
            }(I || (I = {})), function(t) {
                t[t.ACTIVE_TAG = 1] = "ACTIVE_TAG", t[t.ISLAND_SLEEPING = 2] = "ISLAND_SLEEPING", 
                t[t.WANTS_DEACTIVATION = 3] = "WANTS_DEACTIVATION", t[t.DISABLE_DEACTIVATION = 4] = "DISABLE_DEACTIVATION", 
                t[t.DISABLE_SIMULATION = 5] = "DISABLE_SIMULATION";
            }(R || (R = {})), function(t) {
                t[t.BT_DISABLE_WORLD_GRAVITY = 1] = "BT_DISABLE_WORLD_GRAVITY", t[t.BT_ENABLE_GYROPSCOPIC_FORCE = 2] = "BT_ENABLE_GYROPSCOPIC_FORCE";
            }(D || (D = {}));
            var x = M, G = P, W = function() {
                var i = e.prototype;
                function e() {
                    this.id = void 0, this._isEnabled = !1, this._isUsingCCD = !1, this.id = e.idCounter++;
                }
                return i.setMass = function(t) {
                    this._rigidBody.isDynamic && (T.RigidBody_setMass(this.impl, t), this._wakeUpIfSleep(), 
                    this._sharedBody.dirty |= O.BODY_RE_ADD);
                }, i.setType = function(t) {
                    this._sharedBody.setType(t);
                }, i.setLinearDamping = function() {
                    T.RigidBody_setDamping(this.impl, this._rigidBody.linearDamping, this._rigidBody.angularDamping);
                }, i.setAngularDamping = function() {
                    T.RigidBody_setDamping(this.impl, this._rigidBody.linearDamping, this._rigidBody.angularDamping);
                }, i.useGravity = function(t) {
                    if (this._rigidBody.isDynamic) {
                        var i = T.RigidBody_getFlags(this.impl);
                        t ? i &= ~D.BT_DISABLE_WORLD_GRAVITY : (T.RigidBody_setGravity(this.impl, V(E.instance.BT_V3_0, a.ZERO)), 
                        i |= D.BT_DISABLE_WORLD_GRAVITY), T.RigidBody_setFlags(this.impl, i), this._wakeUpIfSleep(), 
                        this._sharedBody.dirty |= O.BODY_RE_ADD;
                    }
                }, i.useCCD = function(t) {
                    T.CollisionObject_setCcdMotionThreshold(this.impl, t ? .01 : 0), T.CollisionObject_setCcdSweptSphereRadius(this.impl, t ? .1 : 0), 
                    this._isUsingCCD = t;
                }, i.isUsingCCD = function() {
                    return this._isUsingCCD;
                }, i.setLinearFactor = function(t) {
                    T.RigidBody_setLinearFactor(this.impl, V(E.instance.BT_V3_0, t)), this._wakeUpIfSleep();
                }, i.setAngularFactor = function(t) {
                    T.RigidBody_setAngularFactor(this.impl, V(E.instance.BT_V3_0, t)), this._wakeUpIfSleep();
                }, i.setAllowSleep = function(t) {
                    this._rigidBody.isDynamic && (t ? T.CollisionObject_forceActivationState(this.impl, R.ACTIVE_TAG) : T.CollisionObject_forceActivationState(this.impl, R.DISABLE_DEACTIVATION), 
                    this._wakeUpIfSleep());
                }, i.clearState = function() {
                    T.RigidBody_clearState(this.impl);
                }, i.clearVelocity = function() {
                    this.setLinearVelocity(a.ZERO), this.setAngularVelocity(a.ZERO);
                }, i.clearForces = function() {
                    T.RigidBody_clearForces(this.impl);
                }, i.initialize = function(t) {
                    this._rigidBody = t, this._sharedBody = u.instance.physicsWorld.getSharedBody(this._rigidBody.node, this), 
                    this._sharedBody.reference = !0;
                }, i.onEnable = function() {
                    this._isEnabled = !0, this.setMass(this._rigidBody.mass), this.setAllowSleep(this._rigidBody.allowSleep), 
                    this.setLinearDamping(this._rigidBody.linearDamping), this.setAngularDamping(this._rigidBody.angularDamping), 
                    this.setLinearFactor(this._rigidBody.linearFactor), this.setAngularFactor(this._rigidBody.angularFactor), 
                    this.useGravity(this._rigidBody.useGravity), this._sharedBody.bodyEnabled = !0;
                }, i.onDisable = function() {
                    this._isEnabled = !1, this._sharedBody.bodyEnabled = !1;
                }, i.onDestroy = function() {
                    this._sharedBody.reference = !1, this._rigidBody = null, this._sharedBody = null;
                }, i.wakeUp = function(t) {
                    void 0 === t && (t = !0), T.CollisionObject_activate(this.impl, t);
                }, i.sleep = function() {
                    return T.RigidBody_wantsSleeping(this.impl);
                }, i.setSleepThreshold = function(t) {
                    this._wakeUpIfSleep(), T.RigidBody_setSleepingThresholds(this.impl, t, t);
                }, i.getSleepThreshold = function() {
                    return T.RigidBody_getLinearSleepingThreshold(this.impl);
                }, i.getLinearVelocity = function(t) {
                    return k(t, T.RigidBody_getLinearVelocity(this.impl));
                }, i.setLinearVelocity = function(t) {
                    this._wakeUpIfSleep(), V(T.RigidBody_getLinearVelocity(this.impl), t);
                }, i.getAngularVelocity = function(t) {
                    return k(t, T.RigidBody_getAngularVelocity(this.impl));
                }, i.setAngularVelocity = function(t) {
                    this._wakeUpIfSleep(), V(T.RigidBody_getAngularVelocity(this.impl), t);
                }, i.applyLocalForce = function(t, i) {
                    this._sharedBody.syncSceneToPhysics(), this._wakeUpIfSleep();
                    var e = this._sharedBody.node.worldRotation, s = a.transformQuat(x, t, e), o = i ? a.transformQuat(G, i, e) : a.ZERO;
                    T.RigidBody_applyForce(this.impl, V(E.instance.BT_V3_0, s), V(E.instance.BT_V3_1, o));
                }, i.applyLocalTorque = function(t) {
                    this._sharedBody.syncSceneToPhysics(), this._wakeUpIfSleep(), a.transformQuat(x, t, this._sharedBody.node.worldRotation), 
                    T.RigidBody_applyTorque(this.impl, V(E.instance.BT_V3_0, x));
                }, i.applyLocalImpulse = function(t, i) {
                    this._sharedBody.syncSceneToPhysics(), this._wakeUpIfSleep();
                    var e = this._sharedBody.node.worldRotation, s = a.transformQuat(x, t, e), o = i ? a.transformQuat(G, i, e) : a.ZERO;
                    T.RigidBody_applyImpulse(this.impl, V(E.instance.BT_V3_0, s), V(E.instance.BT_V3_1, o));
                }, i.applyForce = function(t, i) {
                    this._sharedBody.syncSceneToPhysics(), this._wakeUpIfSleep();
                    var e = i || a.ZERO;
                    T.RigidBody_applyForce(this.impl, V(E.instance.BT_V3_0, t), V(E.instance.BT_V3_1, e));
                }, i.applyTorque = function(t) {
                    this._sharedBody.syncSceneToPhysics(), this._wakeUpIfSleep(), T.RigidBody_applyTorque(this.impl, V(E.instance.BT_V3_0, t));
                }, i.applyImpulse = function(t, i) {
                    this._sharedBody.syncSceneToPhysics(), this._wakeUpIfSleep();
                    var e = i || a.ZERO;
                    T.RigidBody_applyImpulse(this.impl, V(E.instance.BT_V3_0, t), V(E.instance.BT_V3_1, e));
                }, i.getGroup = function() {
                    return this._sharedBody.collisionFilterGroup;
                }, i.setGroup = function(t) {
                    this._sharedBody.collisionFilterGroup = t;
                }, i.addGroup = function(t) {
                    this._sharedBody.collisionFilterGroup |= t;
                }, i.removeGroup = function(t) {
                    this._sharedBody.collisionFilterGroup &= ~t;
                }, i.getMask = function() {
                    return this._sharedBody.collisionFilterMask;
                }, i.setMask = function(t) {
                    this._sharedBody.collisionFilterMask = t;
                }, i.addMask = function(t) {
                    this._sharedBody.collisionFilterMask |= t;
                }, i.removeMask = function(t) {
                    this._sharedBody.collisionFilterMask &= ~t;
                }, i._wakeUpIfSleep = function() {
                    this.isAwake || T.CollisionObject_activate(this.impl, !0);
                }, t(e, [ {
                    key: "isAwake",
                    get: function() {
                        var t = T.CollisionObject_getActivationState(this.impl);
                        return t === R.ACTIVE_TAG || t === R.DISABLE_DEACTIVATION;
                    }
                }, {
                    key: "isSleepy",
                    get: function() {
                        return T.CollisionObject_getActivationState(this.impl) === R.WANTS_DEACTIVATION;
                    }
                }, {
                    key: "isSleeping",
                    get: function() {
                        return T.CollisionObject_getActivationState(this.impl) === R.ISLAND_SLEEPING;
                    }
                }, {
                    key: "impl",
                    get: function() {
                        return this._sharedBody.body;
                    }
                }, {
                    key: "rigidBody",
                    get: function() {
                        return this._rigidBody;
                    }
                }, {
                    key: "sharedBody",
                    get: function() {
                        return this._sharedBody;
                    }
                }, {
                    key: "isEnabled",
                    get: function() {
                        return this._isEnabled;
                    }
                } ]), e;
            }();
            W.idCounter = 0;
            var j = M, U = F, z = 0, J = function() {
                function i(t, e) {
                    this.id = void 0, this.node = void 0, this.wrappedWorld = void 0, this.wrappedJoints0 = [], 
                    this.wrappedJoints1 = [], this.dirty = 0, this._collisionFilterGroup = u.PhysicsGroup.DEFAULT, 
                    this._collisionFilterMask = -1, this.ref = 0, this.bodyIndex = -1, this.ghostIndex = -1, 
                    this._wrappedBody = null, this.id = i.idCounter++, this.wrappedWorld = e, this.node = t;
                }
                i.getSharedBody = function(t, e, s) {
                    var o, n = t.uuid;
                    if (i.sharedBodesMap.has(n)) o = i.sharedBodesMap.get(n); else {
                        o = new i(t, e);
                        var r = m.DEFAULT, a = u.instance.collisionMatrix[r];
                        o._collisionFilterGroup = r, o._collisionFilterMask = a, i.sharedBodesMap.set(t.uuid, o);
                    }
                    if (s) {
                        o._wrappedBody = s;
                        var l = s.rigidBody.group, d = u.instance.collisionMatrix[l];
                        o._collisionFilterGroup = l, o._collisionFilterMask = d;
                    }
                    return o;
                };
                var s = i.prototype;
                return s._instantiateBodyStruct = function() {
                    if (!this._bodyStruct) {
                        var t = 0;
                        this._wrappedBody && this._wrappedBody.rigidBody.enabled && this._wrappedBody.rigidBody.isDynamic && (t = this._wrappedBody.rigidBody.mass);
                        var i = E.instance.BT_TRANSFORM_0, e = E.instance.BT_QUAT_0;
                        V(T.Transform_getOrigin(i), this.node.worldPosition), N(e, this.node.worldRotation), 
                        T.Transform_setRotation(i, e);
                        var s = T.ccMotionState_new(this.id, i), o = T.RigidBody_new(t, s), n = u.instance.sleepThreshold;
                        T.RigidBody_setSleepingThresholds(o, n, n), this._bodyStruct = {
                            id: z++,
                            body: o,
                            motionState: s,
                            compound: T.ccCompoundShape_new(),
                            wrappedShapes: [],
                            useCompound: !1
                        }, E.setWrapper(this.id, T.BODY_CACHE_NAME, this), this._ghostStruct && T.CollisionObject_setIgnoreCollisionCheck(this.ghost, this.body, !0), 
                        this._wrappedBody && this.setBodyType(this._wrappedBody.rigidBody.type);
                    }
                }, s._instantiateGhostStruct = function() {
                    if (!this._ghostStruct) {
                        var t = T.CollisionObject_new(), i = T.ccCompoundShape_new();
                        T.CollisionObject_setCollisionShape(t, i), T.CollisionObject_setCollisionFlags(t, w.CF_STATIC_OBJECT | w.CF_NO_CONTACT_RESPONSE), 
                        this._ghostStruct = {
                            id: z++,
                            ghost: t,
                            compound: i,
                            wrappedShapes: []
                        }, this._bodyStruct && T.CollisionObject_setIgnoreCollisionCheck(this.body, this.ghost, !0), 
                        this._wrappedBody && this.setGhostType(this._wrappedBody.rigidBody.type);
                    }
                }, s.setType = function(t) {
                    this.setBodyType(t), this.setGhostType(t);
                }, s.setBodyType = function(t) {
                    if (this._bodyStruct && this._wrappedBody) {
                        var i = this._bodyStruct.body, e = this._wrappedBody, s = e.rigidBody, o = T.CollisionObject_getCollisionFlags(i), n = E.instance.BT_V3_0;
                        switch (t) {
                          case S.DYNAMIC:
                            o &= ~w.CF_KINEMATIC_OBJECT, o &= ~w.CF_STATIC_OBJECT, T.CollisionObject_setCollisionFlags(i, o), 
                            e.setMass(s.mass), e.useGravity(s.useGravity), e.setAllowSleep(s.allowSleep);
                            break;

                          case S.KINEMATIC:
                            T.Vec3_set(n, 0, 0, 0), T.RigidBody_setMassProps(i, 0, n), o |= w.CF_KINEMATIC_OBJECT, 
                            o &= ~w.CF_STATIC_OBJECT, T.CollisionObject_setCollisionFlags(i, o), T.CollisionObject_forceActivationState(i, R.DISABLE_DEACTIVATION);
                            break;

                          case S.STATIC:
                          default:
                            T.Vec3_set(n, 0, 0, 0), T.RigidBody_setMassProps(i, 0, n), o |= w.CF_STATIC_OBJECT, 
                            o &= ~w.CF_KINEMATIC_OBJECT, T.CollisionObject_setCollisionFlags(i, o), T.CollisionObject_forceActivationState(i, R.ISLAND_SLEEPING);
                        }
                        this.dirty |= O.BODY_RE_ADD;
                    }
                }, s.setGhostType = function(t) {
                    if (this._ghostStruct) {
                        var i = this._ghostStruct.ghost, e = T.CollisionObject_getCollisionFlags(i);
                        switch (t) {
                          case S.DYNAMIC:
                          case S.KINEMATIC:
                            e &= ~w.CF_STATIC_OBJECT, e |= w.CF_KINEMATIC_OBJECT, T.CollisionObject_setCollisionFlags(i, e), 
                            T.CollisionObject_forceActivationState(i, R.DISABLE_DEACTIVATION);
                            break;

                          case S.STATIC:
                          default:
                            e &= ~w.CF_KINEMATIC_OBJECT, e |= w.CF_STATIC_OBJECT, T.CollisionObject_setCollisionFlags(i, e), 
                            T.CollisionObject_forceActivationState(i, R.ISLAND_SLEEPING);
                        }
                        this.dirty |= O.GHOST_RE_ADD;
                    }
                }, s.addShape = function(t, i) {
                    function e(t, i) {
                        T.CollisionObject_setCollisionShape(t.body, i), t.dirty |= O.BODY_RE_ADD, t._wrappedBody && t._wrappedBody.isEnabled && t._wrappedBody.setMass(t._wrappedBody.rigidBody.mass);
                    }
                    if (i) this.ghostStruct.wrappedShapes.indexOf(t) < 0 && (this.ghostStruct.wrappedShapes.push(t), 
                    t.setCompound(this.ghostCompoundShape), this.ghostEnabled = !0); else if (this.bodyStruct.wrappedShapes.indexOf(t) < 0) {
                        if (this.bodyStruct.wrappedShapes.push(t), this.bodyStruct.useCompound) t.setCompound(this.bodyCompoundShape); else {
                            var s = this.bodyStruct.wrappedShapes.length;
                            if (1 !== s || t.needCompound()) {
                                this.bodyStruct.useCompound = !0;
                                for (var o = 0; o < s; o++) this.bodyStruct.wrappedShapes[o].setCompound(this.bodyCompoundShape);
                                e(this, this.bodyStruct.compound);
                            } else e(this, t.impl);
                        }
                        this.bodyEnabled = !0;
                    }
                }, s.removeShape = function(t, i) {
                    if (i) {
                        var s = this.ghostStruct.wrappedShapes.indexOf(t);
                        s >= 0 && (e(this.ghostStruct.wrappedShapes, s), t.setCompound(0), this.ghostEnabled = !1);
                    } else {
                        var o = this.bodyStruct.wrappedShapes.indexOf(t);
                        o >= 0 && (this.bodyStruct.useCompound ? t.setCompound(0) : T.CollisionObject_setCollisionShape(this.body, T.EmptyShape_static()), 
                        T.CollisionObject_activate(this.body, !0), this.dirty |= O.BODY_RE_ADD, e(this.bodyStruct.wrappedShapes, o), 
                        this.bodyEnabled = !1);
                    }
                }, s.addJoint = function(t, i) {
                    i ? this.wrappedJoints1.indexOf(t) < 0 && this.wrappedJoints1.push(t) : this.wrappedJoints0.indexOf(t) < 0 && this.wrappedJoints0.push(t);
                }, s.removeJoint = function(t, i) {
                    if (i) {
                        var s = this.wrappedJoints1.indexOf(t);
                        s >= 0 && e(this.wrappedJoints1, s);
                    } else {
                        var o = this.wrappedJoints0.indexOf(t);
                        o >= 0 && e(this.wrappedJoints0, o);
                    }
                }, s.updateDirty = function() {
                    this.dirty && (this.bodyIndex >= 0 && this.dirty & O.BODY_RE_ADD && this.updateBodyByReAdd(), 
                    this.ghostIndex >= 0 && this.dirty & O.GHOST_RE_ADD && this.updateGhostByReAdd(), 
                    this.dirty = 0);
                }, s.syncSceneToPhysics = function() {
                    if (this.node.hasChangedFlags) {
                        var t = E.instance.BT_QUAT_0, i = T.CollisionObject_getWorldTransform(this.body);
                        if (N(t, this.node.worldRotation), V(T.Transform_getOrigin(i), this.node.worldPosition), 
                        T.Transform_setRotation(i, t), this.node.hasChangedFlags & d.SCALE && this.syncBodyScale(), 
                        T.CollisionObject_isKinematicObject(this.body)) {
                            var e = T.RigidBody_getMotionState(this.body);
                            e && T.MotionState_setWorldTransform(e, i);
                        } else this.isBodySleeping() && T.CollisionObject_activate(this.body);
                    }
                }, s.syncPhysicsToScene = function() {
                    T.CollisionObject_isStaticOrKinematicObject(this.body) || this.syncPhysicsToGraphics();
                }, s.syncPhysicsToGraphics = function() {
                    if (!this.isBodySleeping()) {
                        var t = E.instance.BT_QUAT_0, i = E.instance.BT_TRANSFORM_0;
                        if (T.MotionState_getWorldTransform(T.RigidBody_getMotionState(this.body), i), T.Transform_getRotation(i, t), 
                        this.node.worldRotation = L(U, t), this.node.worldPosition = k(j, T.Transform_getOrigin(i)), 
                        this._ghostStruct) {
                            var e = T.CollisionObject_getWorldTransform(this.ghost);
                            V(T.Transform_getOrigin(e), this.node.worldPosition), N(t, this.node.worldRotation), 
                            T.Transform_setRotation(e, t);
                        }
                    }
                }, s.syncSceneToGhost = function() {
                    if (this.node.hasChangedFlags) {
                        var t = E.instance.BT_QUAT_0, i = T.CollisionObject_getWorldTransform(this.ghost);
                        V(T.Transform_getOrigin(i), this.node.worldPosition), N(t, this.node.worldRotation), 
                        T.Transform_setRotation(i, t), this.node.hasChangedFlags & d.SCALE && this.syncGhostScale(), 
                        T.CollisionObject_activate(this.ghost);
                    }
                }, s.syncInitialBody = function() {
                    var t = E.instance.BT_QUAT_0, i = T.CollisionObject_getWorldTransform(this.body);
                    V(T.Transform_getOrigin(i), this.node.worldPosition), N(t, this.node.worldRotation), 
                    T.Transform_setRotation(i, t), this.syncBodyScale(), T.CollisionObject_activate(this.body);
                }, s.syncInitialGhost = function() {
                    var t = E.instance.BT_QUAT_0, i = T.CollisionObject_getWorldTransform(this.ghost);
                    V(T.Transform_getOrigin(i), this.node.worldPosition), N(t, this.node.worldRotation), 
                    T.Transform_setRotation(i, t), this.syncGhostScale(), T.CollisionObject_activate(this.body);
                }, s.syncBodyScale = function() {
                    for (var t = 0; t < this.bodyStruct.wrappedShapes.length; t++) this.bodyStruct.wrappedShapes[t].updateScale();
                    for (var i = 0; i < this.wrappedJoints0.length; i++) this.wrappedJoints0[i].updateScale0();
                    for (var e = 0; e < this.wrappedJoints1.length; e++) this.wrappedJoints1[e].updateScale1();
                }, s.syncGhostScale = function() {
                    for (var t = 0; t < this.ghostStruct.wrappedShapes.length; t++) this.ghostStruct.wrappedShapes[t].updateScale();
                }, s.updateBodyByReAdd = function() {
                    this.bodyIndex >= 0 && (this.wrappedWorld.removeSharedBody(this), this.bodyIndex = this.wrappedWorld.bodies.length, 
                    this.wrappedWorld.addSharedBody(this));
                }, s.updateGhostByReAdd = function() {
                    this.ghostIndex >= 0 && (this.wrappedWorld.removeGhostObject(this), this.ghostIndex = this.wrappedWorld.ghosts.length, 
                    this.wrappedWorld.addGhostObject(this));
                }, s.destroy = function() {
                    if (i.sharedBodesMap.delete(this.node.uuid), this.node = null, this.wrappedWorld = null, 
                    this._bodyStruct) {
                        var t = this._bodyStruct;
                        E.delWrapper(t.body, T.BODY_CACHE_NAME), T.MotionState_del(t.motionState), T.CollisionShape_del(t.compound), 
                        T.CollisionObject_del(t.body), this._bodyStruct = null;
                    }
                    if (this._ghostStruct) {
                        var e = this._ghostStruct;
                        T.CollisionShape_del(e.compound), T.CollisionObject_del(e.ghost), this._ghostStruct = null;
                    }
                }, s.isBodySleeping = function() {
                    return T.CollisionObject_getActivationState(this.body) === R.ISLAND_SLEEPING;
                }, t(i, [ {
                    key: "wrappedBody",
                    get: function() {
                        return this._wrappedBody;
                    }
                }, {
                    key: "bodyCompoundShape",
                    get: function() {
                        return this.bodyStruct.compound;
                    }
                }, {
                    key: "ghostCompoundShape",
                    get: function() {
                        return this.ghostStruct.compound;
                    }
                }, {
                    key: "body",
                    get: function() {
                        return this.bodyStruct.body;
                    }
                }, {
                    key: "ghost",
                    get: function() {
                        return this.ghostStruct.ghost;
                    }
                }, {
                    key: "collisionFilterGroup",
                    get: function() {
                        return this._collisionFilterGroup;
                    },
                    set: function(t) {
                        t !== this._collisionFilterGroup && (this._collisionFilterGroup = t, this.dirty |= O.BODY_RE_ADD, 
                        this.dirty |= O.GHOST_RE_ADD);
                    }
                }, {
                    key: "collisionFilterMask",
                    get: function() {
                        return this._collisionFilterMask;
                    },
                    set: function(t) {
                        t !== this._collisionFilterMask && (this._collisionFilterMask = t, this.dirty |= O.BODY_RE_ADD, 
                        this.dirty |= O.GHOST_RE_ADD);
                    }
                }, {
                    key: "bodyStruct",
                    get: function() {
                        return this._instantiateBodyStruct(), this._bodyStruct;
                    }
                }, {
                    key: "ghostStruct",
                    get: function() {
                        return this._instantiateGhostStruct(), this._ghostStruct;
                    }
                }, {
                    key: "bodyEnabled",
                    set: function(t) {
                        if (t) {
                            if (this.bodyIndex < 0) {
                                if (0 === this.bodyStruct.wrappedShapes.length) {
                                    if (!this.wrappedBody) return;
                                    if (!this.wrappedBody.rigidBody.isDynamic) return;
                                }
                                this.bodyIndex = this.wrappedWorld.bodies.length, this.wrappedWorld.addSharedBody(this), 
                                this.syncInitialBody();
                            }
                        } else this.bodyIndex >= 0 && (0 === this.bodyStruct.wrappedShapes.length && null == this.wrappedBody || 0 === this.bodyStruct.wrappedShapes.length && null != this.wrappedBody && !this.wrappedBody.isEnabled || 0 === this.bodyStruct.wrappedShapes.length && null != this.wrappedBody && !this.wrappedBody.rigidBody.enabledInHierarchy) && (T.RigidBody_clearState(this.body), 
                        this.bodyIndex = -1, this.wrappedWorld.removeSharedBody(this));
                    }
                }, {
                    key: "ghostEnabled",
                    set: function(t) {
                        t ? this.ghostIndex < 0 && this.ghostStruct.wrappedShapes.length > 0 && (this.ghostIndex = 1, 
                        this.wrappedWorld.addGhostObject(this), this.syncInitialGhost()) : this.ghostIndex >= 0 && 0 === this.ghostStruct.wrappedShapes.length && this.ghost && (this.ghostIndex = -1, 
                        this.wrappedWorld.removeGhostObject(this));
                    }
                }, {
                    key: "reference",
                    set: function(t) {
                        t ? this.ref++ : this.ref--, 0 === this.ref && this.destroy();
                    }
                } ]), i;
            }();
            J.idCounter = 0, J.sharedBodesMap = new Map();
            var H = M, Y = {}, Q = function() {
                function i() {
                    this.id = i.idCounter++, this._isEnabled = !1, this._isTrigger = !1, this._isInitialized = !1, 
                    this._impl = 0, this._compound = 0, this.quat = T.Quat_new(0, 0, 0, 1), this.transform = T.Transform_new();
                }
                var e = i.prototype;
                return e.updateEventListener = function() {
                    this._sharedBody.wrappedWorld.updateNeedEmitEvents(this.collider.needCollisionEvent || this.collider.needTriggerEvent);
                }, e.setMaterial = function(t) {
                    if (!this._isTrigger && this._isEnabled && t) if (this._compound) {
                        Y[t._uuid] || (Y[t._uuid] = T.ccMaterial_new());
                        var i = Y[t._uuid];
                        T.ccMaterial_set(i, t.restitution, t.friction, t.rollingFriction, t.spinningFriction), 
                        T.CollisionShape_setMaterial(this._impl, i);
                    } else T.CollisionObject_setMaterial(this._sharedBody.body, t.restitution, t.friction, t.rollingFriction, t.spinningFriction);
                }, e.setCenter = function(t) {
                    a.copy(H, t), H.multiply(this._collider.node.worldScale), V(T.Transform_getOrigin(this.transform), H), 
                    this.updateCompoundTransform();
                }, e.setAsTrigger = function(t) {
                    this._isTrigger !== t && (this._isEnabled && (this._sharedBody.removeShape(this, !t), 
                    this._sharedBody.addShape(this, t)), this._isTrigger = t);
                }, e.getAABB = function(t) {
                    var i = E.instance.BT_TRANSFORM_0;
                    T.Transform_setIdentity(i), T.Transform_setRotation(i, N(E.instance.BT_QUAT_0, this._collider.node.worldRotation));
                    var e = E.instance.BT_V3_0, s = E.instance.BT_V3_1;
                    T.CollisionShape_getAabb(this._impl, i, e, s), t.halfExtents.x = (T.Vec3_x(s) - T.Vec3_x(e)) / 2, 
                    t.halfExtents.y = (T.Vec3_y(s) - T.Vec3_y(e)) / 2, t.halfExtents.z = (T.Vec3_z(s) - T.Vec3_z(e)) / 2, 
                    a.add(t.center, this._collider.node.worldPosition, this._collider.center);
                }, e.getBoundingSphere = function(t) {
                    t.radius = T.CollisionShape_getLocalBoundingSphere(this._impl), a.add(t.center, this._collider.node.worldPosition, this._collider.center);
                }, e.initialize = function(t) {
                    this._collider = t, this._isInitialized = !0, this._sharedBody = u.instance.physicsWorld.getSharedBody(this._collider.node), 
                    this._sharedBody.reference = !0, this.onComponentSet(), this.setWrapper();
                }, e.setWrapper = function() {
                    E.isNotEmptyShape(this._impl) && (T.CollisionShape_setUserPointer(this._impl, this._impl), 
                    E.setWrapper(this._impl, i.TYPE, this));
                }, e.onLoad = function() {
                    this.setCenter(this._collider.center), this.setAsTrigger(this._collider.isTrigger);
                }, e.onEnable = function() {
                    this._isEnabled = !0, this._sharedBody.addShape(this, this._isTrigger), this.setMaterial(this.collider.sharedMaterial);
                }, e.onDisable = function() {
                    this._isEnabled = !1, this._sharedBody.removeShape(this, this._isTrigger);
                }, e.onDestroy = function() {
                    this._sharedBody.reference = !1, this._collider = null, T.Quat_del(this.quat), T.Transform_del(this.transform), 
                    this._compound && T.CollisionShape_del(this._compound), E.isNotEmptyShape(this._impl) && (T.CollisionShape_del(this._impl), 
                    E.delWrapper(this._impl, i.TYPE));
                }, e.updateByReAdd = function() {
                    this._isEnabled && (this._sharedBody.removeShape(this, this._isTrigger), this._sharedBody.addShape(this, this._isTrigger));
                }, e.getGroup = function() {
                    return this._sharedBody.collisionFilterGroup;
                }, e.setGroup = function(t) {
                    this._sharedBody.collisionFilterGroup = t;
                }, e.addGroup = function(t) {
                    this._sharedBody.collisionFilterGroup |= t;
                }, e.removeGroup = function(t) {
                    this._sharedBody.collisionFilterGroup &= ~t;
                }, e.getMask = function() {
                    return this._sharedBody.collisionFilterMask;
                }, e.setMask = function(t) {
                    this._sharedBody.collisionFilterMask = t;
                }, e.addMask = function(t) {
                    this._sharedBody.collisionFilterMask |= t;
                }, e.removeMask = function(t) {
                    this._sharedBody.collisionFilterMask &= ~t;
                }, e.setCompound = function(t) {
                    this._compound && T.CompoundShape_removeChildShape(this._compound, this._impl), 
                    t && T.CompoundShape_addChildShape(t, this.transform, this._impl), this._compound = t;
                }, e.updateScale = function() {
                    this.setCenter(this._collider.center);
                }, e.updateCompoundTransform = function() {
                    this._compound ? T.CompoundShape_updateChildTransform(this._compound, this._impl, this.transform, !0) : this._isEnabled && !this._isTrigger && this._sharedBody && !this._sharedBody.bodyStruct.useCompound && (this._sharedBody.dirty |= O.BODY_RE_ADD);
                }, e.needCompound = function() {
                    return this._collider.type === C.TERRAIN || !this._collider.center.equals(a.ZERO);
                }, t(i, [ {
                    key: "attachedRigidBody",
                    get: function() {
                        return this._sharedBody.wrappedBody ? this._sharedBody.wrappedBody.rigidBody : null;
                    }
                }, {
                    key: "impl",
                    get: function() {
                        return this._impl;
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                }, {
                    key: "sharedBody",
                    get: function() {
                        return this._sharedBody;
                    }
                } ]), i;
            }();
            Q.TYPE = "shape", Q.idCounter = 0;
            var K = function() {
                function i(t) {
                    this.impl = 0, this.event = t;
                }
                var e = i.prototype;
                return e.getLocalPointOnA = function(t) {
                    this.impl && k(t, T.ManifoldPoint_get_m_localPointA(this.impl));
                }, e.getLocalPointOnB = function(t) {
                    this.impl && k(t, T.ManifoldPoint_get_m_localPointB(this.impl));
                }, e.getWorldPointOnA = function(t) {
                    this.impl && k(t, T.ManifoldPoint_get_m_positionWorldOnA(this.impl));
                }, e.getWorldPointOnB = function(t) {
                    this.impl && k(t, T.ManifoldPoint_get_m_positionWorldOnB(this.impl));
                }, e.getLocalNormalOnA = function(t) {
                    if (this.impl) {
                        var i = E.instance.BT_QUAT_0, e = T.PersistentManifold_getBody0(this.impl), s = T.CollisionObject_getWorldTransform(e);
                        T.Transform_getRotation(s, i);
                        var o = F;
                        L(o, i), l.conjugate(o, o), k(t, T.ManifoldPoint_get_m_normalWorldOnB(this.impl)), 
                        this.isBodyA || a.negate(t, t), a.transformQuat(t, t, o);
                    }
                }, e.getLocalNormalOnB = function(t) {
                    if (this.impl) {
                        var i = E.instance.BT_QUAT_0, e = T.PersistentManifold_getBody1(this.impl), s = T.CollisionObject_getWorldTransform(e);
                        T.Transform_getRotation(s, i);
                        var o = F;
                        L(o, i), l.conjugate(o, o), k(t, T.ManifoldPoint_get_m_normalWorldOnB(this.impl)), 
                        a.transformQuat(t, t, o);
                    }
                }, e.getWorldNormalOnA = function(t) {
                    this.impl && (k(t, T.ManifoldPoint_get_m_normalWorldOnB(this.impl)), this.isBodyA || a.negate(t, t));
                }, e.getWorldNormalOnB = function(t) {
                    this.impl && k(t, T.ManifoldPoint_get_m_normalWorldOnB(this.impl));
                }, t(i, [ {
                    key: "isBodyA",
                    get: function() {
                        return this.event.selfCollider.shape.sharedBody.body === T.PersistentManifold_getBody0(this.impl);
                    }
                } ]), i;
            }(), q = [], Z = M, X = P, $ = function() {
                var i = o.prototype;
                function o() {
                    this._world = void 0, this._broadphase = void 0, this._solver = void 0, this._dispatcher = void 0, 
                    this._needEmitEvents = !1, this._needSyncAfterEvents = !1, this.bodies = [], this.ghosts = [], 
                    this.constraints = [], this.triggerArrayMat = new v(), this.collisionArrayMat = new v(), 
                    this.contactsDic = new B(), this.oldContactsDic = new B(), this._broadphase = T.DbvtBroadphase_new(), 
                    this._dispatcher = T.CollisionDispatcher_new(), this._solver = T.SequentialImpulseConstraintSolver_new(), 
                    this._world = T.ccDiscreteDynamicsWorld_new(this._dispatcher, this._broadphase, this._solver);
                }
                return i.setDefaultMaterial = function() {}, i.setAllowSleep = function(t) {
                    T.ccDiscreteDynamicsWorld_setAllowSleep(this._world, t);
                }, i.setGravity = function(t) {
                    T.DynamicsWorld_setGravity(this._world, V(E.instance.BT_V3_0, t));
                }, i.updateNeedEmitEvents = function(t) {
                    if (this.ghosts) if (t) this._needEmitEvents = !0; else {
                        this._needEmitEvents = !1;
                        for (var i = 0; i < this.ghosts.length; i++) for (var e = this.ghosts[i].ghostStruct.wrappedShapes, s = 0; s < e.length; s++) {
                            var o = e[s].collider;
                            if (o.needCollisionEvent || o.needTriggerEvent) return void (this._needEmitEvents = !0);
                        }
                        for (var n = 0; n < this.bodies.length; n++) for (var r = this.bodies[n].bodyStruct.wrappedShapes, a = 0; a < r.length; a++) {
                            var l = r[a].collider;
                            if (l.needCollisionEvent || l.needTriggerEvent) return void (this._needEmitEvents = !0);
                        }
                    }
                }, i.destroy = function() {
                    (this.constraints.length || this.bodies.length) && s("You should destroy all physics component first."), 
                    T.CollisionWorld_del(this._world), T.DbvtBroadphase_del(this._broadphase), T.CollisionDispatcher_del(this._dispatcher), 
                    T.SequentialImpulseConstraintSolver_del(this._solver), this.bodies = null, this.ghosts = null, 
                    this.constraints = null, this.triggerArrayMat = null, this.collisionArrayMat = null, 
                    this.contactsDic = null, this.oldContactsDic = null, q.length = 0;
                }, i.step = function(t, i, e) {
                    void 0 === e && (e = 0), (this.bodies.length || this.ghosts.length) && (void 0 === i && (i = t), 
                    T.DynamicsWorld_stepSimulation(this._world, i, e, t));
                }, i.syncSceneToPhysics = function() {
                    for (var t = this.ghosts.length - 1; t >= 0; t--) {
                        var i = this.ghosts[t];
                        i.updateDirty(), i.syncSceneToGhost();
                    }
                    for (var e = this.bodies.length - 1; e >= 0; e--) {
                        var s = this.bodies[e];
                        s.updateDirty(), s.syncSceneToPhysics();
                    }
                }, i.syncAfterEvents = function() {
                    this._needSyncAfterEvents && this.syncSceneToPhysics();
                }, i.raycast = function(t, i, e, s) {
                    t.computeHit(Z, i.maxDistance);
                    var o = V(E.instance.BT_V3_0, Z), n = V(E.instance.BT_V3_1, t.o), r = T.ccAllRayCallback_static();
                    if (T.ccAllRayCallback_reset(r, n, o, i.mask, i.queryTrigger), T.CollisionWorld_rayTest(this._world, n, o, r), 
                    T.RayCallback_hasHit(r)) {
                        for (var l = T.ccAllRayCallback_getHitPointWorld(r), d = T.ccAllRayCallback_getHitNormalWorld(r), h = T.ccAllRayCallback_getCollisionShapePtrs(r), c = 0, p = T.int_array_size(h); c < p; c++) {
                            k(Z, T.Vec3_array_at(l, c)), k(X, T.Vec3_array_at(d, c));
                            var _ = E.getWrapper(T.int_array_at(h, c), Q.TYPE), u = e.add();
                            s.push(u), u._assign(Z, a.distance(t.o, Z), _.collider, X);
                        }
                        return !0;
                    }
                    return !1;
                }, i.raycastClosest = function(t, i, e) {
                    t.computeHit(Z, i.maxDistance);
                    var s = V(E.instance.BT_V3_0, Z), o = V(E.instance.BT_V3_1, t.o), n = T.ccClosestRayCallback_static();
                    if (T.ccClosestRayCallback_reset(n, o, s, i.mask, i.queryTrigger), T.CollisionWorld_rayTest(this._world, o, s, n), 
                    T.RayCallback_hasHit(n)) {
                        k(Z, T.ccClosestRayCallback_getHitPointWorld(n)), k(X, T.ccClosestRayCallback_getHitNormalWorld(n));
                        var r = E.getWrapper(T.ccClosestRayCallback_getCollisionShapePtr(n), Q.TYPE);
                        return e._assign(Z, a.distance(t.o, Z), r.collider, X), !0;
                    }
                    return !1;
                }, i.getSharedBody = function(t, i) {
                    return J.getSharedBody(t, this, i);
                }, i.addSharedBody = function(t) {
                    this.bodies.indexOf(t) < 0 && (this.bodies.push(t), T.DynamicsWorld_addRigidBody(this._world, t.body, t.collisionFilterGroup, t.collisionFilterMask));
                }, i.removeSharedBody = function(t) {
                    var i = this.bodies.indexOf(t);
                    i >= 0 && (e(this.bodies, i), T.DynamicsWorld_removeRigidBody(this._world, t.body));
                }, i.addGhostObject = function(t) {
                    this.ghosts.indexOf(t) < 0 && (this.ghosts.push(t), T.CollisionWorld_addCollisionObject(this._world, t.ghost, t.collisionFilterGroup, t.collisionFilterMask));
                }, i.removeGhostObject = function(t) {
                    var i = this.ghosts.indexOf(t);
                    i >= 0 && (e(this.ghosts, i), T.CollisionWorld_removeCollisionObject(this._world, t.ghost));
                }, i.addConstraint = function(t) {
                    var i = this.constraints.indexOf(t);
                    i < 0 && (this.constraints.push(t), T.DynamicsWorld_addConstraint(this.impl, t.impl, !t.constraint.enableCollision), 
                    t.index = i);
                }, i.removeConstraint = function(t) {
                    var i = this.constraints.indexOf(t);
                    i >= 0 && (this.constraints.splice(i, 1), T.DynamicsWorld_removeConstraint(this.impl, t.impl), 
                    t.index = -1);
                }, i.emitEvents = function() {
                    if (this._needSyncAfterEvents = !1, this._needEmitEvents) {
                        this.gatherConatactData();
                        for (var t = this.contactsDic.getLength(); t--; ) {
                            q.push.apply(q, A.contacts), A.contacts.length = 0;
                            var i = this.contactsDic.getKeyByIndex(t), e = this.contactsDic.getDataByKey(i), s = e.shape0, o = e.shape1;
                            this.oldContactsDic.set(s.id, o.id, e);
                            var n = s.collider, r = o.collider;
                            if (n && r) {
                                if (n.isTrigger || r.isTrigger) this.triggerArrayMat.get(s.id, o.id) ? b.type = "onTriggerStay" : (b.type = "onTriggerEnter", 
                                this.triggerArrayMat.set(s.id, o.id, !0)), b.impl = e.impl, b.selfCollider = n, 
                                b.otherCollider = r, n.emit(b.type, b), b.selfCollider = r, b.otherCollider = n, 
                                r.emit(b.type, b), this._needSyncAfterEvents = !0; else {
                                    var a = n.attachedRigidBody, l = r.attachedRigidBody;
                                    if (a && l) {
                                        if (a.isSleeping && l.isSleeping) continue;
                                    } else if (!a && l) {
                                        if (l.isSleeping) continue;
                                    } else if (!l && a && a.isSleeping) continue;
                                    this.collisionArrayMat.get(s.id, o.id) ? A.type = "onCollisionStay" : (A.type = "onCollisionEnter", 
                                    this.collisionArrayMat.set(s.id, o.id, !0));
                                    for (var d = 0; d < e.contacts.length; d++) {
                                        var h = e.contacts[d];
                                        if (q.length > 0) {
                                            var c = q.pop();
                                            c.impl = h, A.contacts.push(c);
                                        } else {
                                            var p = new K(A);
                                            p.impl = h, A.contacts.push(p);
                                        }
                                    }
                                    A.impl = e.impl, A.selfCollider = n, A.otherCollider = r, n.emit(A.type, A), A.selfCollider = r, 
                                    A.otherCollider = n, r.emit(A.type, A), this._needSyncAfterEvents = !0;
                                }
                                null == this.oldContactsDic.get(s.id, o.id) && this.oldContactsDic.set(s.id, o.id, e);
                            }
                        }
                        for (var _ = this.oldContactsDic.getLength(); _--; ) {
                            var u = this.oldContactsDic.getKeyByIndex(_), y = this.oldContactsDic.getDataByKey(u), f = y.shape0, g = y.shape1, S = f.collider, m = g.collider;
                            if (S && m) {
                                var C = S.isTrigger || m.isTrigger;
                                null == this.contactsDic.getDataByKey(u) && (C ? this.triggerArrayMat.get(f.id, g.id) && (b.type = "onTriggerExit", 
                                b.selfCollider = S, b.otherCollider = m, S.emit(b.type, b), b.selfCollider = m, 
                                b.otherCollider = S, m.emit(b.type, b), this.triggerArrayMat.set(f.id, g.id, !1), 
                                this.oldContactsDic.set(f.id, g.id, null), this._needSyncAfterEvents = !0) : this.collisionArrayMat.get(f.id, g.id) && (q.push.apply(q, A.contacts), 
                                A.contacts.length = 0, A.type = "onCollisionExit", A.selfCollider = S, A.otherCollider = m, 
                                S.emit(A.type, A), A.selfCollider = m, A.otherCollider = S, m.emit(A.type, A), this.collisionArrayMat.set(f.id, g.id, !1), 
                                this.oldContactsDic.set(f.id, g.id, null), this._needSyncAfterEvents = !0));
                            }
                        }
                        this.contactsDic.reset();
                    }
                }, i.gatherConatactData = function() {
                    for (var t = T.Dispatcher_getNumManifolds(this._dispatcher), i = 0; i < t; i++) for (var e = T.Dispatcher_getManifoldByIndexInternal(this._dispatcher, i), s = T.PersistentManifold_getNumContacts(e), o = 0; o < s; o++) {
                        var n = T.PersistentManifold_getContactPoint(e, o), r = T.ManifoldPoint_getShape0(n), a = T.ManifoldPoint_getShape1(n), l = E.getWrapper(r, Q.TYPE), d = E.getWrapper(a, Q.TYPE);
                        if (l.collider.needTriggerEvent || d.collider.needTriggerEvent || l.collider.needCollisionEvent || d.collider.needCollisionEvent) {
                            var h = this.contactsDic.get(l.id, d.id);
                            h || (h = this.contactsDic.set(l.id, d.id, {
                                shape0: l,
                                shape1: d,
                                contacts: [],
                                impl: e
                            })), h.contacts.push(n);
                        }
                    }
                }, t(o, [ {
                    key: "impl",
                    get: function() {
                        return this._world;
                    }
                } ]), o;
            }(), tt = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.updateSize = function() {
                    var t = E.instance.BT_V3_0;
                    V(t, this.getMinUnscaledHalfExtents(y)), T.BoxShape_setUnscaledHalfExtents(this.impl, t), 
                    this.updateCompoundTransform();
                }, s.onComponentSet = function() {
                    var t = E.instance.BT_V3_0;
                    V(t, this.getMinUnscaledHalfExtents(y)), this._impl = T.BoxShape_new(t), this.updateScale();
                }, s.updateScale = function() {
                    i.prototype.updateScale.call(this);
                    var t = E.instance.BT_V3_0;
                    T.CollisionShape_setLocalScaling(this._impl, V(t, this.getMinScale(y))), this.updateCompoundTransform();
                }, s.getMinUnscaledHalfExtents = function(t) {
                    var i = this.collider.size, e = f(y.set(this._collider.node.worldScale)), s = u.instance.minVolumeSize, o = i.x / 2, n = i.y / 2, r = i.z / 2, a = o * e.x < s ? s / e.x : o, l = n * e.y < s ? s / e.y : n, d = r * e.z < s ? s / e.z : r;
                    return t.set(a, l, d), t;
                }, s.getMinScale = function(t) {
                    var i = this.collider.size, e = f(y.set(this._collider.node.worldScale)), s = u.instance.minVolumeSize, o = i.x / 2, n = i.y / 2, r = i.z / 2, a = o * e.x < s ? s / o : e.x, l = n * e.y < s ? s / n : e.y, d = r * e.z < s ? s / r : e.z;
                    return t.set(a, l, d), t;
                }, t(e, [ {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }(Q), it = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.updateRadius = function() {
                    T.SphereShape_setUnscaledRadius(this.impl, this.getMinUnscaledRadius()), this.updateCompoundTransform();
                }, s.onComponentSet = function() {
                    this._impl = T.SphereShape_new(this.getMinUnscaledRadius()), this.updateScale();
                }, s.updateScale = function() {
                    i.prototype.updateScale.call(this);
                    var t = this.getMinScale();
                    M.set(t, t, t);
                    var e = E.instance.BT_V3_0;
                    T.CollisionShape_setLocalScaling(this._impl, V(e, M)), this.updateCompoundTransform();
                }, s.getMinUnscaledRadius = function() {
                    var t = this.collider.radius, i = Math.abs(h(this._collider.node.worldScale)), e = u.instance.minVolumeSize;
                    return i * t < e ? e / i : t;
                }, s.getMinScale = function() {
                    var t = this.collider.radius, i = Math.abs(h(this._collider.node.worldScale)), e = u.instance.minVolumeSize;
                    return i * t < e ? e / t : i;
                }, t(e, [ {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }(Q), et = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.setCylinderHeight = function() {
                    this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
                }, s.setDirection = function() {
                    this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
                }, s.setRadius = function() {
                    this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
                }, s.onComponentSet = function() {
                    this._impl = T.CapsuleShape_new(.5, 1), this.setRadius(this.collider.radius);
                }, s.updateScale = function() {
                    i.prototype.updateScale.call(this), this.setRadius(this.collider.radius);
                }, s.updateProperties = function(t, i, e, s) {
                    var o, n, r = s, a = e;
                    1 === a ? (o = t * Math.abs(c(r.x, r.z)), n = i / 2 * Math.abs(r.y)) : 0 === a ? (o = t * Math.abs(c(r.y, r.z)), 
                    n = i / 2 * Math.abs(r.x)) : (o = t * Math.abs(c(r.x, r.y)), n = i / 2 * Math.abs(r.z)), 
                    T.CapsuleShape_updateProp(this._impl, o, n, a), this.updateCompoundTransform();
                }, t(e, [ {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }(Q), st = function(e) {
                function s() {
                    for (var t, i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
                    return (t = e.call.apply(e, [ this ].concat(s)) || this).refBtTriangleMesh = 0, 
                    t;
                }
                o(s, e);
                var r = s.prototype;
                return r.setMesh = function(t) {
                    if (this._isInitialized) if (this._impl && E.isNotEmptyShape(this._impl)) n(9620); else {
                        var i = t;
                        if (i && i.renderingSubMeshes.length > 0) {
                            var e = this._getBtTriangleMesh(i);
                            this.collider.convex ? this._impl = T.ConvexTriangleMeshShape_new(e) : this._impl = T.BvhTriangleMeshShape_new(e, !0, !0);
                            var s = E.instance.BT_V3_0;
                            V(s, this._collider.node.worldScale), T.CollisionShape_setMargin(this._impl, .01), 
                            T.CollisionShape_setLocalScaling(this._impl, s), this.setCompound(this._compound), 
                            this.updateByReAdd(), this.setWrapper();
                        } else this._impl = T.EmptyShape_static();
                    }
                }, r.onComponentSet = function() {
                    this.setMesh(this.collider.mesh);
                }, r.onDestroy = function() {
                    this.refBtTriangleMesh && T.TriangleMesh_del(this.refBtTriangleMesh), e.prototype.onDestroy.call(this);
                }, r.updateScale = function() {
                    e.prototype.updateScale.call(this);
                    var t = E.instance.BT_V3_0;
                    V(t, this._collider.node.worldScale), T.CollisionShape_setLocalScaling(this._impl, t), 
                    this.updateCompoundTransform();
                }, r._getBtTriangleMesh = function(t) {
                    return this.refBtTriangleMesh = T.TriangleMesh_new(), function(t, e) {
                        for (var s = e.renderingSubMeshes.length, o = 0; o < s; o++) {
                            var n = e.renderingSubMeshes[o], r = n.geometricInfo;
                            if (r) {
                                var a = n.primitiveMode, l = r.positions, d = r.indices, h = E.instance.BT_V3_0, c = E.instance.BT_V3_1, p = E.instance.BT_V3_2;
                                if (a === i.TRIANGLE_LIST) for (var _ = d.length, u = 0; u < _; u += 3) {
                                    var y = 3 * d[u], f = 3 * d[u + 1], g = 3 * d[u + 2];
                                    T.Vec3_set(h, l[y], l[y + 1], l[y + 2]), T.Vec3_set(c, l[f], l[f + 1], l[f + 2]), 
                                    T.Vec3_set(p, l[g], l[g + 1], l[g + 2]), T.TriangleMesh_addTriangle(t, h, c, p);
                                } else if (a === i.TRIANGLE_STRIP) for (var S = d.length - 2, m = 0, C = 0; C < S; C += 1) {
                                    var B = 3 * d[C - m], v = 3 * d[C + m + 1], b = 3 * d[C + 2];
                                    m = ~m, T.Vec3_set(h, l[B], l[B + 1], l[B + 2]), T.Vec3_set(c, l[v], l[v + 1], l[v + 2]), 
                                    T.Vec3_set(p, l[b], l[b + 1], l[b + 2]), T.TriangleMesh_addTriangle(t, h, c, p);
                                } else if (a === i.TRIANGLE_FAN) {
                                    var A = d.length - 1, O = 3 * d[0];
                                    T.Vec3_set(h, l[O], l[O + 1], l[O + 2]);
                                    for (var w = 1; w < A; w += 1) {
                                        var I = 3 * d[w], R = 3 * d[w + 1];
                                        T.Vec3_set(c, l[I], l[I + 1], l[I + 2]), T.Vec3_set(p, l[R], l[R + 1], l[R + 2]), 
                                        T.TriangleMesh_addTriangle(t, h, c, p);
                                    }
                                }
                            }
                        }
                    }(this.refBtTriangleMesh, t), this.refBtTriangleMesh;
                }, t(s, [ {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), s;
            }(Q), ot = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.setHeight = function() {
                    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }, s.setDirection = function() {
                    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }, s.setRadius = function() {
                    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }, s.onComponentSet = function() {
                    var t = E.instance.BT_V3_0;
                    T.Vec3_set(t, .5, 1, .5), this._impl = T.CylinderShape_new(t), this.setRadius(this.collider.radius);
                }, s.updateScale = function() {
                    i.prototype.updateScale.call(this), this.setRadius(this.collider.radius);
                }, s.updateProperties = function(t, i, e, s) {
                    var o, n, r = s, a = e;
                    1 === a ? (n = i * Math.abs(r.y), o = t * Math.abs(c(r.x, r.z))) : 0 === a ? (n = i * Math.abs(r.x), 
                    o = t * Math.abs(c(r.y, r.z))) : (n = i * Math.abs(r.z), o = t * Math.abs(c(r.x, r.y))), 
                    T.CylinderShape_updateProp(this._impl, o, n / 2, a), this.updateCompoundTransform();
                }, t(e, [ {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }(Q), nt = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.setHeight = function() {
                    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }, s.setDirection = function() {
                    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }, s.setRadius = function() {
                    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }, s.onComponentSet = function() {
                    this._impl = T.ConeShape_new(.5, 1), this.setRadius(this.collider.radius);
                }, s.updateScale = function() {
                    i.prototype.updateScale.call(this), this.setRadius(this.collider.radius);
                }, s.updateProperties = function(t, i, e, s) {
                    var o, n, r = s, a = e;
                    1 === a ? (n = i * Math.abs(r.y), o = t * Math.abs(c(r.x, r.z))) : 0 === a ? (n = i * Math.abs(r.x), 
                    o = t * Math.abs(c(r.y, r.z))) : (n = i * Math.abs(r.z), o = t * Math.abs(c(r.x, r.y))), 
                    T.ConeShape_setRadius(this._impl, o), T.ConeShape_setHeight(this._impl, n), T.ConeShape_setConeUpIndex(this._impl, a);
                    var l = E.instance.BT_V3_0;
                    T.Vec3_set(l, 1, 1, 1), T.CollisionShape_setLocalScaling(this._impl, l), this.updateCompoundTransform();
                }, t(e, [ {
                    key: "impl",
                    get: function() {
                        return this._impl;
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }(Q), rt = function(i) {
                function e() {
                    for (var t, e = arguments.length, s = new Array(e), o = 0; o < e; o++) s[o] = arguments[o];
                    return (t = i.call.apply(i, [ this ].concat(s)) || this)._bufPtr = 0, t._tileSize = 0, 
                    t._localOffset = new a(), t;
                }
                o(e, i);
                var s = e.prototype;
                return s.setTerrain = function(t) {
                    if (this._isInitialized) if (this._impl && E.isNotEmptyShape(this._impl)) r("[Physics][Bullet]: change the terrain asset after initialization is not support."); else {
                        var i = t;
                        if (i) {
                            this._tileSize = i.tileSize;
                            var e = i.getVertexCountI(), s = i.getVertexCountJ();
                            this._bufPtr = T._malloc(4 * e * s);
                            for (var o = 0, n = Number.MAX_SAFE_INTEGER, a = Number.MIN_SAFE_INTEGER, l = 0; l < s; l++) for (var d = 0; d < e; d++) {
                                var h = i.getHeight(d, l);
                                T._write_f32(this._bufPtr + o, h), n > h && (n = h), h > a && (a = h), o += 4;
                            }
                            a += .01, n -= .01, this._localOffset.set((e - 1) / 2 * this._tileSize, (a + n) / 2, (s - 1) / 2 * this._tileSize), 
                            this._impl = T.TerrainShape_new(e, s, this._bufPtr, 1, n, a);
                            var c = E.instance.BT_V3_0;
                            T.Vec3_set(c, this._tileSize, 1, this._tileSize), T.CollisionShape_setLocalScaling(this._impl, c), 
                            this.setCompound(this._compound), this.updateByReAdd(), this.setWrapper();
                        } else this._impl = T.EmptyShape_static();
                    }
                }, s.onComponentSet = function() {
                    this.setTerrain(this.collider.terrain);
                }, s.onDestroy = function() {
                    this._bufPtr && T._free(this._bufPtr), i.prototype.onDestroy.call(this);
                }, s.setCenter = function(t) {
                    a.copy(M, t), M.add(this._localOffset), V(T.Transform_getOrigin(this.transform), M), 
                    this.updateCompoundTransform();
                }, t(e, [ {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }(Q), at = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.setShapeType = function() {}, s.setVertices = function() {}, s.onComponentSet = function() {
                    this._impl = T.SimplexShape_new();
                    for (var t = this.collider.shapeType, i = this.collider.vertices, e = E.instance.BT_V3_0, s = 0; s < t; s++) T.SimplexShape_addVertex(this._impl, V(e, i[s]));
                    T.CollisionShape_setLocalScaling(this._impl, V(e, this._collider.node.worldScale));
                }, s.onLoad = function() {
                    i.prototype.onLoad.call(this), this.collider.updateVertices();
                }, s.updateScale = function() {
                    i.prototype.updateScale.call(this);
                    var t = E.instance.BT_V3_0;
                    T.CollisionShape_setLocalScaling(this._impl, V(t, this._collider.node.worldScale));
                }, t(e, [ {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }(Q), lt = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.setNormal = function(t) {
                    V(T.StaticPlaneShape_getPlaneNormal(this.impl), t), this.updateCompoundTransform();
                }, s.setConstant = function(t) {
                    T.StaticPlaneShape_setPlaneConstant(this.impl, t), this.updateCompoundTransform();
                }, s.updateScale = function() {
                    i.prototype.updateScale.call(this);
                    var t = E.instance.BT_V3_0;
                    V(t, this._collider.node.worldScale), T.CollisionShape_setLocalScaling(this._impl, t), 
                    this.updateCompoundTransform();
                }, s.onComponentSet = function() {
                    var t = E.instance.BT_V3_0;
                    V(t, this.collider.normal), this._impl = T.StaticPlaneShape_new(t, this.collider.constant), 
                    this.updateScale();
                }, t(e, [ {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }(Q), dt = function() {
                function i() {
                    this.dirty = 0, this.index = -1, this._impl = 0, this._collided = !1;
                }
                var e = i.prototype;
                return e.setConnectedBody = function() {}, e.setEnableCollision = function(t) {
                    this._collided !== t && (this._collided = t, this.updateByReAdd());
                }, e.updateByReAdd = function() {
                    if (this._rigidBody && this.index >= 0) {
                        var t = this._rigidBody.body.sharedBody;
                        t.wrappedWorld.removeConstraint(this), t.wrappedWorld.addConstraint(this);
                    }
                }, e.initialize = function(t) {
                    this._com = t, this._rigidBody = t.attachedBody, this._collided = t.enableCollision, 
                    this.onComponentSet();
                }, e.onEnable = function() {
                    var t = this._rigidBody.body.sharedBody;
                    t.wrappedWorld.addConstraint(this), t.addJoint(this, 0);
                    var i = this.constraint.connectedBody;
                    i && i.body.sharedBody.addJoint(this, 1);
                }, e.onDisable = function() {
                    var t = this._rigidBody.body.sharedBody;
                    t.wrappedWorld.removeConstraint(this), t.removeJoint(this, 0);
                    var i = this.constraint.connectedBody;
                    i && i.body.sharedBody.removeJoint(this, 1);
                }, e.onDestroy = function() {
                    T.TypedConstraint_del(this._impl), this._com = null, this._rigidBody = null;
                }, t(i, [ {
                    key: "impl",
                    get: function() {
                        return this._impl;
                    }
                }, {
                    key: "constraint",
                    get: function() {
                        return this._com;
                    }
                } ]), i;
            }(), ht = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.setPivotA = function() {
                    var t = this.constraint, i = E.instance.BT_V3_0;
                    a.multiply(M, t.node.worldScale, t.pivotA), V(i, M), T.P2PConstraint_setPivotA(this._impl, i), 
                    t.connectedBody || this.setPivotB(t.pivotB);
                }, s.setPivotB = function() {
                    var t = this.constraint, i = this._rigidBody.node, e = E.instance.BT_V3_0, s = t.connectedBody;
                    s ? (a.multiply(M, s.node.worldScale, t.pivotB), V(e, M)) : (a.multiply(M, i.worldScale, t.pivotA), 
                    a.add(M, M, i.worldPosition), a.add(M, M, t.pivotB), V(e, M)), T.P2PConstraint_setPivotB(this._impl, e);
                }, s.onComponentSet = function() {
                    var t = this.constraint.connectedBody, i = this._rigidBody.body.impl, e = t ? t.body.impl : T.TypedConstraint_getFixedBody(), s = E.instance.BT_V3_0, o = E.instance.BT_V3_1;
                    this._impl = T.P2PConstraint_new(i, e, s, o), this.setPivotA(this.constraint.pivotA), 
                    this.setPivotB(this.constraint.pivotB);
                }, s.updateScale0 = function() {
                    this.setPivotA(this.constraint.pivotA);
                }, s.updateScale1 = function() {
                    this.setPivotB(this.constraint.pivotB);
                }, t(e, [ {
                    key: "constraint",
                    get: function() {
                        return this._com;
                    }
                } ]), e;
            }(dt), ct = function(i) {
                function e() {
                    return i.apply(this, arguments) || this;
                }
                o(e, i);
                var s = e.prototype;
                return s.setPivotA = function() {
                    this.updateFrames();
                }, s.setPivotB = function() {
                    this.updateFrames();
                }, s.setAxis = function() {
                    this.updateFrames();
                }, s.onComponentSet = function() {
                    var t = this.constraint.connectedBody, i = this._rigidBody.body.impl, e = t ? t.body.impl : T.TypedConstraint_getFixedBody(), s = E.instance.BT_TRANSFORM_0, o = E.instance.BT_TRANSFORM_1;
                    this._impl = T.HingeConstraint_new(i, e, s, o), this.updateFrames();
                }, s.updateFrames = function() {
                    var t = this.constraint, i = t.node, e = M, s = F, o = E.instance.BT_TRANSFORM_0;
                    a.multiply(e, i.worldScale, t.pivotA), V(T.Transform_getOrigin(o), e);
                    var n = E.instance.BT_QUAT_0;
                    l.rotationTo(s, a.UNIT_Z, t.axis), N(n, s), T.Transform_setRotation(o, n);
                    var r = E.instance.BT_TRANSFORM_1, d = this.constraint.connectedBody;
                    d ? a.multiply(e, d.node.worldScale, t.pivotB) : (a.multiply(e, i.worldScale, t.pivotA), 
                    a.add(e, e, i.worldPosition), a.add(e, e, t.pivotB), l.multiply(s, s, i.worldRotation)), 
                    V(T.Transform_getOrigin(r), e), N(n, s), T.Transform_setRotation(r, n), T.HingeConstraint_setFrames(this._impl, o, r);
                }, s.updateScale0 = function() {
                    this.updateFrames();
                }, s.updateScale1 = function() {
                    this.updateFrames();
                }, t(e, [ {
                    key: "constraint",
                    get: function() {
                        return this._com;
                    }
                } ]), e;
            }(dt);
            p.once(_.EVENT_ENGINE_INITED, function() {
                g.register("bullet", {
                    PhysicsWorld: $,
                    RigidBody: W,
                    BoxShape: tt,
                    SphereShape: it,
                    CapsuleShape: et,
                    TrimeshShape: st,
                    CylinderShape: ot,
                    ConeShape: nt,
                    TerrainShape: rt,
                    SimplexShape: at,
                    PlaneShape: lt,
                    PointToPointConstraint: ht,
                    HingeConstraint: ct
                });
            });
        }
    };
});