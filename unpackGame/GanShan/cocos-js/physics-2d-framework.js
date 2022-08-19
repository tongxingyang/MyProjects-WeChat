System.register([ "./texture-barrier-60b5983b.js", "./json-asset-933a1d4c.js", "./index-f2b92470.js", "./renderable-component-7c6600ed.js", "./deprecated-26630860.js", "./deprecated-ef6bb945.js", "./collision-matrix-ae46bfd8.js", "./polygon-separator-ae8b995d.js", "./hinge-joint-2d-fff26bf7.js" ], function(e) {
    var i;
    return {
        setters: [ function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function(e) {
            i = e.P;
        }, function(i) {
            var n = {};
            n.BoxCollider2D = i.B, n.CircleCollider2D = i.i, n.Collider2D = i.h, n.Contact2DType = i.C, 
            n.DistanceJoint2D = i.D, n.ECollider2DType = i.a, n.EJoint2DType = i.b, n.EPhysics2DDrawFlags = i.d, 
            n.ERaycast2DType = i.c, n.ERigidBody2DType = i.E, n.FixedJoint2D = i.F, n.HingeJoint2D = i.H, 
            n.Joint2D = i.J, n.MouseJoint2D = i.M, n.PHYSICS_2D_PTM_RATIO = i.e, n.Physics2DManifoldType = i.g, 
            n.PhysicsGroup = i.P, n.PhysicsSystem2D = i.f, n.PolygonCollider2D = i.j, n.RelativeJoint2D = i.k, 
            n.RigidBody2D = i.R, n.SliderJoint2D = i.l, n.SpringJoint2D = i.S, n.WheelJoint2D = i.W, 
            e(n);
        } ],
        execute: function() {
            e("Physics2DUtils", {
                PolygonSeparator: i
            });
        }
    };
});