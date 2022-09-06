System.register([ "./json-asset-af371a48.js", "./base.js", "./index-dc70820b.js", "./spot-light-544a206a.js", "./texture-buffer-pool-98424398.js", "./deprecated-7473158a.js", "./renderable-component-3b41513c.js", "./transform-utils-ef5df50c.js", "./mesh-c7cb246d.js", "./skeleton-6825b7cc.js", "./index-27322636.js", "./collision-matrix-8f442d02.js", "./capsule-bcaf73b6.js", "./terrain-asset-905e6340.js", "./physics-framework.js", "./array-collision-matrix-ec6af177.js" ], function() {
    var e, t, i, o, n, s, r, l, a, d, h, c, u, f, p, y, g, _, v;
    return {
        setters: [ function(c) {
            e = c.cb, t = c.c4, i = c.c8, o = c.ev, n = c.ef, s = c.hd, r = c.ei, l = c.e, a = c.eZ, 
            d = c.ed, h = c.e_;
        }, function() {}, function() {}, function() {}, function() {}, function(e) {
            c = e.g, u = e.G;
        }, function() {}, function() {}, function() {}, function() {}, function(e) {
            f = e.P, p = e.r, y = e.m;
        }, function(e) {
            g = e.P, _ = e.E;
        }, function() {}, function() {}, function() {}, function(e) {
            v = e.A;
        } ],
        execute: function() {
            var B = function() {
                function e() {
                    this.collisionFilterGroup = f.PhysicsGroup.DEFAULT, this.collisionFilterMask = -1;
                }
                var t = e.prototype;
                return t.getGroup = function() {
                    return this.collisionFilterGroup;
                }, t.setGroup = function(e) {
                    this.collisionFilterGroup = e;
                }, t.addGroup = function(e) {
                    this.collisionFilterGroup |= e;
                }, t.removeGroup = function(e) {
                    this.collisionFilterGroup &= ~e;
                }, t.getMask = function() {
                    return this.collisionFilterMask;
                }, t.setMask = function(e) {
                    this.collisionFilterMask = e;
                }, t.addMask = function(e) {
                    this.collisionFilterMask |= e;
                }, t.removeMask = function(e) {
                    this.collisionFilterMask &= ~e;
                }, e;
            }(), S = new e(), w = new t(), k = new t(), m = new i(), M = function(e) {
                function t(i, o) {
                    var n;
                    return (n = e.call(this) || this)._id = void 0, n.index = -1, n.ref = 0, n.node = void 0, 
                    n.world = void 0, n.shapes = [], n.wrappedBody = null, n._id = t.idCounter++, n.node = i, 
                    n.world = o, n;
                }
                o(t, e), t.getSharedBody = function(e, i, o) {
                    var n, s = e.uuid;
                    if (t.sharedBodesMap.has(s)) n = t.sharedBodesMap.get(s); else {
                        n = new t(e, i);
                        var r = g.DEFAULT, l = f.instance.collisionMatrix[r];
                        n.collisionFilterGroup = r, n.collisionFilterMask = l, t.sharedBodesMap.set(e.uuid, n);
                    }
                    if (o) {
                        n.wrappedBody = o;
                        var a = o.rigidBody.group, d = f.instance.collisionMatrix[a];
                        n.collisionFilterGroup = a, n.collisionFilterMask = d;
                    }
                    return n;
                };
                var i = t.prototype;
                return i.intersects = function(e) {
                    for (var t = 0; t < this.shapes.length; t++) for (var i = this.shapes[t], o = 0; o < e.shapes.length; o++) {
                        var s = e.shapes[o];
                        (i.collider.needTriggerEvent || s.collider.needTriggerEvent) && n.resolve(i.worldShape, s.worldShape) && (this.world.shapeArr.push(i), 
                        this.world.shapeArr.push(s));
                    }
                }, i.addShape = function(e) {
                    this.shapes.indexOf(e) < 0 && this.shapes.push(e);
                }, i.removeShape = function(e) {
                    var t = this.shapes.indexOf(e);
                    t >= 0 && s(this.shapes, t);
                }, i.syncSceneToPhysics = function() {
                    if (this.node.hasChangedFlags) {
                        this.node.getWorldMatrix(S), w.set(this.node.worldPosition), m.set(this.node.worldRotation), 
                        k.set(this.node.worldScale);
                        for (var e = 0; e < this.shapes.length; e++) this.shapes[e].transform(S, w, m, k);
                    }
                }, i.syncInitial = function() {
                    this.node.getWorldMatrix(S), w.set(this.node.worldPosition), m.set(this.node.worldRotation), 
                    k.set(this.node.worldScale);
                    for (var e = 0; e < this.shapes.length; e++) this.shapes[e].transform(S, w, m, k);
                }, i.destroy = function() {
                    t.sharedBodesMap.delete(this.node.uuid), this.node = null, this.world = null, this.shapes = null;
                }, r(t, [ {
                    key: "id",
                    get: function() {
                        return this._id;
                    }
                }, {
                    key: "enabled",
                    set: function(e) {
                        e ? this.index < 0 && (this.index = this.world.bodies.length, this.world.addSharedBody(this), 
                        this.syncInitial()) : this.index >= 0 && 0 === this.shapes.length && (this.index = -1, 
                        this.world.removeSharedBody(this));
                    }
                }, {
                    key: "reference",
                    set: function(e) {
                        e ? this.ref++ : this.ref--, 0 === this.ref && this.destroy();
                    }
                } ]), t;
            }(B);
            M.sharedBodesMap = new Map(), M.idCounter = 0;
            var b = new t(), x = {
                type: "onTriggerEnter",
                selfCollider: null,
                otherCollider: null,
                impl: {}
            }, C = function() {
                function e() {
                    this.shapeArr = [], this.bodies = [], this._shapeArrPrev = [], this._collisionMatrix = new v(), 
                    this._collisionMatrixPrev = new v();
                }
                var i = e.prototype;
                return i.setGravity = function() {}, i.setAllowSleep = function() {}, i.setDefaultMaterial = function() {}, 
                i.destroy = function() {
                    this.bodies.length && l("You should destroy all physics component first.");
                }, i.step = function() {
                    var e = this._shapeArrPrev;
                    this._shapeArrPrev = this.shapeArr, this.shapeArr = e, this.shapeArr.length = 0;
                    for (var t = 0; t < this.bodies.length; t++) for (var i = this.bodies[t], o = t + 1; o < this.bodies.length; o++) {
                        var n = this.bodies[o];
                        0 != (i.collisionFilterGroup & n.collisionFilterMask) && 0 != (n.collisionFilterGroup & i.collisionFilterMask) && i.intersects(n);
                    }
                }, i.syncSceneToPhysics = function() {
                    for (var e = 0; e < this.bodies.length; e++) this.bodies[e].syncSceneToPhysics();
                }, i.syncAfterEvents = function() {
                    this.syncSceneToPhysics();
                }, i.emitEvents = function() {
                    this.emitTriggerEvent();
                }, i.raycastClosest = function(e, i, o) {
                    for (var s = 1 / 0, r = i.maxDistance, l = i.mask, a = 0; a < this.bodies.length; a++) {
                        var d = this.bodies[a];
                        if (d.collisionFilterGroup & l) for (var h = 0; h < d.shapes.length; h++) {
                            var c = d.shapes[h], u = n.resolve(e, c.worldShape);
                            0 === u || u > r || s > u && (s = u, t.normalize(b, e.d), t.scaleAndAdd(b, e.o, b, u), 
                            o._assign(b, u, c.collider, t.ZERO));
                        }
                    }
                    return !(s === 1 / 0);
                }, i.raycast = function(e, i, o, s) {
                    for (var r = i.maxDistance, l = i.mask, a = 0; a < this.bodies.length; a++) {
                        var d = this.bodies[a];
                        if (d.collisionFilterGroup & l) for (var h = 0; h < d.shapes.length; h++) {
                            var c = d.shapes[h], u = n.resolve(e, c.worldShape);
                            if (!(0 === u || u > r)) {
                                var f = o.add();
                                e.computeHit(b, u), f._assign(b, u, c.collider, t.ZERO), s.push(f);
                            }
                        }
                    }
                    return s.length > 0;
                }, i.getSharedBody = function(e, t) {
                    return M.getSharedBody(e, this, t);
                }, i.addSharedBody = function(e) {
                    this.bodies.indexOf(e) < 0 && this.bodies.push(e);
                }, i.removeSharedBody = function(e) {
                    var t = this.bodies.indexOf(e);
                    t >= 0 && s(this.bodies, t);
                }, i.emitTriggerEvent = function() {
                    for (var e, t, i = 0; i < this.shapeArr.length; i += 2) e = this.shapeArr[i], t = this.shapeArr[i + 1], 
                    x.selfCollider = e.collider, x.otherCollider = t.collider, this._collisionMatrix.set(e.id, t.id, !0), 
                    this._collisionMatrixPrev.get(e.id, t.id) ? x.type = "onTriggerStay" : x.type = "onTriggerEnter", 
                    e.collider && e.collider.emit(x.type, x), x.selfCollider = t.collider, x.otherCollider = e.collider, 
                    t.collider && t.collider.emit(x.type, x);
                    for (var o = 0; o < this._shapeArrPrev.length; o += 2) e = this._shapeArrPrev[o], 
                    t = this._shapeArrPrev[o + 1], this._collisionMatrixPrev.get(e.id, t.id) && (this._collisionMatrix.get(e.id, t.id) || (x.type = "onTriggerExit", 
                    x.selfCollider = e.collider, x.otherCollider = t.collider, e.collider && e.collider.emit(x.type, x), 
                    x.selfCollider = t.collider, x.otherCollider = e.collider, t.collider && t.collider.emit(x.type, x), 
                    this._collisionMatrix.set(e.id, t.id, !1)));
                    var n = this._collisionMatrixPrev.matrix;
                    this._collisionMatrixPrev.matrix = this._collisionMatrix.matrix, this._collisionMatrix.matrix = n, 
                    this._collisionMatrix.reset();
                }, r(e, [ {
                    key: "impl",
                    get: function() {
                        return this;
                    }
                } ]), e;
            }(), G = function() {
                function e() {}
                var t = e.prototype;
                return t.initialize = function(e) {
                    this._rigidBody = e, this._sharedBody = f.instance.physicsWorld.getSharedBody(this._rigidBody.node, this), 
                    this._sharedBody.reference = !0;
                }, t.onEnable = function() {
                    this._sharedBody.enabled = !0;
                }, t.onDisable = function() {
                    this._sharedBody.enabled = !1;
                }, t.onDestroy = function() {
                    this._sharedBody.reference = !1, this._rigidBody = null, this._sharedBody = null;
                }, t.setMass = function() {}, t.setType = function() {}, t.setLinearDamping = function() {}, 
                t.setAngularDamping = function() {}, t.useGravity = function() {}, t.useCCD = function() {}, 
                t.isUsingCCD = function() {
                    return !1;
                }, t.setLinearFactor = function() {}, t.setAngularFactor = function() {}, t.setAllowSleep = function() {}, 
                t.wakeUp = function() {}, t.sleep = function() {}, t.clearState = function() {}, 
                t.clearForces = function() {}, t.clearVelocity = function() {}, t.setSleepThreshold = function() {}, 
                t.getSleepThreshold = function() {
                    return 0;
                }, t.getLinearVelocity = function() {}, t.setLinearVelocity = function() {}, t.getAngularVelocity = function() {}, 
                t.setAngularVelocity = function() {}, t.applyForce = function() {}, t.applyLocalForce = function() {}, 
                t.applyImpulse = function() {}, t.applyLocalImpulse = function() {}, t.applyTorque = function() {}, 
                t.applyLocalTorque = function() {}, t.setGroup = function(e) {
                    this._sharedBody.setGroup(e);
                }, t.getGroup = function() {
                    return this._sharedBody.getGroup();
                }, t.addGroup = function(e) {
                    this._sharedBody.addGroup(e);
                }, t.removeGroup = function(e) {
                    this._sharedBody.removeGroup(e);
                }, t.setMask = function(e) {
                    this._sharedBody.setMask(e);
                }, t.getMask = function() {
                    return this._sharedBody.getMask();
                }, t.addMask = function(e) {
                    this._sharedBody.addMask(e);
                }, t.removeMask = function(e) {
                    this._sharedBody.removeMask(e);
                }, r(e, [ {
                    key: "impl",
                    get: function() {
                        return this;
                    }
                }, {
                    key: "isAwake",
                    get: function() {
                        return !0;
                    }
                }, {
                    key: "isSleepy",
                    get: function() {
                        return !1;
                    }
                }, {
                    key: "isSleeping",
                    get: function() {
                        return !1;
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
                } ]), e;
            }(), A = function() {
                function e() {
                    this.id = e.idCounter++;
                }
                var i = e.prototype;
                return i.getAABB = function() {}, i.getBoundingSphere = function() {}, i.updateEventListener = function() {}, 
                i.setMaterial = function() {}, i.setAsTrigger = function() {}, i.setCenter = function(e) {
                    t.copy(this._localShape.center, e);
                }, i.initialize = function(e) {
                    this._collider = e, this._sharedBody = f.instance.physicsWorld.getSharedBody(this._collider.node), 
                    this._sharedBody.reference = !0;
                }, i.onLoad = function() {
                    this.setCenter(this._collider.center);
                }, i.onEnable = function() {
                    this._sharedBody.addShape(this), this._sharedBody.enabled = !0;
                }, i.onDisable = function() {
                    this._sharedBody.removeShape(this), this._sharedBody.enabled = !1;
                }, i.onDestroy = function() {
                    this._sharedBody.reference = !1, this._collider = null, this._localShape = null, 
                    this._worldShape = null;
                }, i.transform = function(e, t, i, o) {
                    this._localShape.transform(e, t, i, o, this._worldShape);
                }, i.getGroup = function() {
                    return this._sharedBody.getGroup();
                }, i.setGroup = function(e) {
                    this._sharedBody.setGroup(e);
                }, i.addGroup = function(e) {
                    this._sharedBody.addGroup(e);
                }, i.removeGroup = function(e) {
                    this._sharedBody.removeGroup(e);
                }, i.getMask = function() {
                    return this._sharedBody.getMask();
                }, i.setMask = function(e) {
                    this._sharedBody.setMask(e);
                }, i.addMask = function(e) {
                    this._sharedBody.addMask(e);
                }, i.removeMask = function(e) {
                    this._sharedBody.removeMask(e);
                }, r(e, [ {
                    key: "attachedRigidBody",
                    get: function() {
                        return null;
                    }
                }, {
                    key: "localShape",
                    get: function() {
                        return this._localShape;
                    }
                }, {
                    key: "worldShape",
                    get: function() {
                        return this._worldShape;
                    }
                }, {
                    key: "impl",
                    get: function() {
                        return this._worldShape;
                    }
                }, {
                    key: "sharedBody",
                    get: function() {
                        return this._sharedBody;
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), e;
            }();
            A.idCounter = 0;
            var F = function(e) {
                function i() {
                    var t;
                    return (t = e.call(this) || this)._localShape = new a(), t._worldShape = new a(), 
                    t;
                }
                o(i, e);
                var n = i.prototype;
                return n.updateSize = function() {
                    t.multiplyScalar(this.localObb.halfExtents, this.collider.size, .5), t.multiply(this.worldObb.halfExtents, this.localObb.halfExtents, this.collider.node.worldScale);
                }, n.onLoad = function() {
                    e.prototype.onLoad.call(this), this.updateSize();
                }, r(i, [ {
                    key: "localObb",
                    get: function() {
                        return this._localShape;
                    }
                }, {
                    key: "worldObb",
                    get: function() {
                        return this._worldShape;
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), i;
            }(A), E = function(e) {
                o(i, e);
                var t = i.prototype;
                function i(t) {
                    var i;
                    return void 0 === t && (t = .5), (i = e.call(this) || this)._localShape = new d(0, 0, 0, t), 
                    i._worldShape = new d(0, 0, 0, t), i;
                }
                return t.updateRadius = function() {
                    this.localSphere.radius = this.collider.radius;
                    var e = p(this.collider.node.worldScale);
                    this.worldSphere.radius = this.localSphere.radius * e;
                }, t.onLoad = function() {
                    e.prototype.onLoad.call(this), this.updateRadius();
                }, r(i, [ {
                    key: "localSphere",
                    get: function() {
                        return this._localShape;
                    }
                }, {
                    key: "worldSphere",
                    get: function() {
                        return this._worldShape;
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), i;
            }(A), P = function(e) {
                function t(t, i, o) {
                    var n;
                    void 0 === t && (t = .5), void 0 === i && (i = 2), void 0 === o && (o = _.Y_AXIS);
                    var s = (i - 2 * t) / 2, r = s < 0 ? 0 : s;
                    return (n = e.call(this) || this)._localShape = new h(t, r, o), n._worldShape = new h(t, r, o), 
                    n;
                }
                o(t, e);
                var i = t.prototype;
                return i.setRadius = function(e) {
                    this.localCapsule.radius = e, this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
                }, i.setCylinderHeight = function(e) {
                    this.localCapsule.halfHeight = e / 2, this.localCapsule.updateCache(), this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
                }, i.setDirection = function(e) {
                    this.localCapsule.axis = e, this.localCapsule.updateCache(), this.worldCapsule.axis = e, 
                    this.worldCapsule.updateCache(), this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
                }, i.onLoad = function() {
                    e.prototype.onLoad.call(this), this.setRadius(this.collider.radius), this.setDirection(this.collider.direction);
                }, r(t, [ {
                    key: "localCapsule",
                    get: function() {
                        return this._localShape;
                    }
                }, {
                    key: "worldCapsule",
                    get: function() {
                        return this._worldShape;
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collider;
                    }
                } ]), t;
            }(A);
            c.once(u.EVENT_ENGINE_INITED, function() {
                y.register("builtin", {
                    RigidBody: G,
                    BoxShape: F,
                    SphereShape: E,
                    PhysicsWorld: C,
                    CapsuleShape: P
                });
            });
        }
    };
});