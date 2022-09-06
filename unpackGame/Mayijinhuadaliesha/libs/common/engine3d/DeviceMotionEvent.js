var e = cc.internal.inputManager, t = window.__globalAdapter;

Object.assign(e, {
    setAccelerometerEnabled: function(e) {
        var t = cc.director.getScheduler();
        t.enableForTarget(this), e ? (this._registerAccelerometerEvent(), t.scheduleUpdate(this)) : (this._unregisterAccelerometerEvent(), 
        t.unscheduleUpdate(this));
    },
    _registerAccelerometerEvent: function() {
        this._accelCurTime = 0;
        var e = this;
        this._acceleration = new cc.internal.Acceleration(), t.startAccelerometer(function(t) {
            e._acceleration.x = t.x, e._acceleration.y = t.y, e._acceleration.z = t.y;
        });
    },
    _unregisterAccelerometerEvent: function() {
        this._accelCurTime = 0, t.stopAccelerometer();
    }
});