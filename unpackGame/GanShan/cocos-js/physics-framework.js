System.register([ "./texture-barrier-60b5983b.js", "./base.js", "./json-asset-933a1d4c.js", "./index-f2b92470.js", "./renderable-component-7c6600ed.js", "./deprecated-26630860.js", "./deprecated-ef6bb945.js", "./mesh-f5415e9d.js", "./deprecated-6c081405.js", "./skeleton-b0039cea.js", "./index-2e896cdf.js", "./collision-matrix-ae46bfd8.js", "./capsule-3dc9b423.js", "./terrain-asset-ecb9fa31.js" ], function(e) {
    var o, i, n, t, s, a, l, r, p, d, C, c, m, y, u;
    return {
        setters: [ function(e) {
            o = e.l, i = e.bX;
        }, function() {}, function(e) {
            n = e.ax, t = e.ay;
        }, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function(o) {
            s = o.P, a = o.C, l = o.a, r = o.B, p = o.S, d = o.b, C = o.R, c = o.M, m = o.c, 
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
            n(s, "PhysicsSystem", [ {
                name: "ins",
                newName: "instance"
            }, {
                name: "PHYSICS_AMMO",
                newName: "PHYSICS_BULLET"
            } ]), n(s.prototype, "PhysicsSystem.prototype", [ {
                name: "deltaTime",
                newName: "fixedTimeStep"
            }, {
                name: "maxSubStep",
                newName: "maxSubSteps"
            } ]), t(s.prototype, "PhysicsSystem.prototype", [ {
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
            } ]), n(a.prototype, "Collider.prototype", [ {
                name: "attachedRigidbody",
                newName: "attachedRigidBody"
            }, {
                name: "TYPE",
                newName: "type"
            } ]), n(a, "Collider", [ {
                name: "EColliderType",
                newName: "Type"
            }, {
                name: "EAxisDirection",
                newName: "Axis"
            } ]), n(l, "Constraint", [ {
                name: "EConstraintType",
                newName: "Type"
            } ]), n(r.prototype, "BoxCollider.prototype", [ {
                name: "boxShape",
                newName: "shape"
            } ]), n(p.prototype, "SphereCollider.prototype", [ {
                name: "sphereShape",
                newName: "shape"
            } ]), n(d.prototype, "CapsuleCollider.prototype", [ {
                name: "capsuleShape",
                newName: "shape"
            } ]), n(C.prototype, "RigidBody.prototype", [ {
                name: "rigidBody",
                newName: "body"
            } ]), n(C, "RigidBody", [ {
                name: "ERigidBodyType",
                newName: "Type"
            } ]), t(C.prototype, "RigidBody.prototype", [ {
                name: "fixedRotation"
            } ]), o.RigidBodyComponent = C, i.setClassAlias(C, "cc.RigidBodyComponent"), o.ColliderComponent = a, 
            i.setClassAlias(a, "cc.ColliderComponent"), o.BoxColliderComponent = r, i.setClassAlias(r, "cc.BoxColliderComponent"), 
            o.SphereColliderComponent = p, i.setClassAlias(p, "cc.SphereColliderComponent"), 
            i.setClassAlias(d, "cc.CapsuleColliderComponent"), i.setClassAlias(c, "cc.MeshColliderComponent"), 
            i.setClassAlias(m, "cc.CylinderColliderComponent"), o.PhysicMaterial = y, i.setClassAlias(y, "cc.PhysicMaterial"), 
            o.physics = u;
        }
    };
});