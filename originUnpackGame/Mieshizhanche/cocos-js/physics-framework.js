System.register([ "./json-asset-af371a48.js", "./base.js", "./index-dc70820b.js", "./spot-light-544a206a.js", "./texture-buffer-pool-98424398.js", "./deprecated-7473158a.js", "./renderable-component-3b41513c.js", "./transform-utils-ef5df50c.js", "./mesh-c7cb246d.js", "./skeleton-6825b7cc.js", "./index-27322636.js", "./collision-matrix-8f442d02.js", "./capsule-bcaf73b6.js", "./terrain-asset-905e6340.js" ], function(e) {
    var o, i, n, t, s, a, l, r, p, C, d, c, m, y, u;
    return {
        setters: [ function(e) {
            o = e.cQ, i = e.cR, n = e.l, t = e.fj;
        }, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function(o) {
            s = o.P, a = o.C, l = o.a, r = o.B, p = o.S, C = o.b, d = o.R, c = o.M, m = o.c, 
            y = o.d, u = o.p;
            var i = {};
            i.BoxCollider = o.B, i.BoxColliderComponent = o.B, i.CapsuleCollider = o.b, i.CapsuleColliderComponent = o.b, 
            i.Collider = o.C, i.ColliderComponent = o.C, i.ConeCollider = o.g, i.ConstantForce = o.e, 
            i.Constraint = o.a, i.CylinderCollider = o.c, i.CylinderColliderComponent = o.c, 
            i.HingeConstraint = o.H, i.MeshCollider = o.M, i.MeshColliderComponent = o.M, i.PhysicMaterial = o.d, 
            i.PhysicsMaterial = o.d, i.PhysicsRayResult = o.f, i.PhysicsSystem = o.P, i.PlaneCollider = o.i, 
            i.PointToPointConstraint = o.j, i.RigidBody = o.R, i.RigidBodyComponent = o.R, i.SimplexCollider = o.h, 
            i.SphereCollider = o.S, i.SphereColliderComponent = o.S, i.TerrainCollider = o.T, 
            i.physics = o.p, e(i);
        }, function(o) {
            var i = {};
            i.EAxisDirection = o.E, i.ERigidBodyType = o.a, e(i);
        }, function() {}, function() {} ],
        execute: function() {
            o(s, "PhysicsSystem", [ {
                name: "ins",
                newName: "instance"
            }, {
                name: "PHYSICS_AMMO",
                newName: "PHYSICS_BULLET"
            } ]), o(s.prototype, "PhysicsSystem.prototype", [ {
                name: "deltaTime",
                newName: "fixedTimeStep"
            }, {
                name: "maxSubStep",
                newName: "maxSubSteps"
            } ]), i(s.prototype, "PhysicsSystem.prototype", [ {
                name: "useFixedTime"
            }, {
                name: "useCollisionMatrix"
            }, {
                name: "updateCollisionMatrix"
            }, {
                name: "resetCollisionMatrix"
            }, {
                name: "isCollisionGroup"
            }, {
                name: "setCollisionGroup"
            } ]), o(a.prototype, "Collider.prototype", [ {
                name: "attachedRigidbody",
                newName: "attachedRigidBody"
            }, {
                name: "TYPE",
                newName: "type"
            } ]), o(a, "Collider", [ {
                name: "EColliderType",
                newName: "Type"
            }, {
                name: "EAxisDirection",
                newName: "Axis"
            } ]), o(l, "Constraint", [ {
                name: "EConstraintType",
                newName: "Type"
            } ]), o(r.prototype, "BoxCollider.prototype", [ {
                name: "boxShape",
                newName: "shape"
            } ]), o(p.prototype, "SphereCollider.prototype", [ {
                name: "sphereShape",
                newName: "shape"
            } ]), o(C.prototype, "CapsuleCollider.prototype", [ {
                name: "capsuleShape",
                newName: "shape"
            } ]), o(d.prototype, "RigidBody.prototype", [ {
                name: "rigidBody",
                newName: "body"
            } ]), o(d, "RigidBody", [ {
                name: "ERigidBodyType",
                newName: "Type"
            } ]), i(d.prototype, "RigidBody.prototype", [ {
                name: "fixedRotation"
            } ]), n.RigidBodyComponent = d, t.setClassAlias(d, "cc.RigidBodyComponent"), n.ColliderComponent = a, 
            t.setClassAlias(a, "cc.ColliderComponent"), n.BoxColliderComponent = r, t.setClassAlias(r, "cc.BoxColliderComponent"), 
            n.SphereColliderComponent = p, t.setClassAlias(p, "cc.SphereColliderComponent"), 
            t.setClassAlias(C, "cc.CapsuleColliderComponent"), t.setClassAlias(c, "cc.MeshColliderComponent"), 
            t.setClassAlias(m, "cc.CylinderColliderComponent"), n.PhysicMaterial = y, t.setClassAlias(y, "cc.PhysicMaterial"), 
            n.physics = u;
        }
    };
});