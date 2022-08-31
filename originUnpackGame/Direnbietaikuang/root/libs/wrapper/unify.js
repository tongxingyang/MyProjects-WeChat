var e = require("./utils");

if (window.__globalAdapter) {
    var o = window.__globalAdapter, t = wx.getSystemInfoSync(), n = t.windowWidth > t.windowHeight;
    o.isSubContext = void 0 === wx.getOpenDataContext, o.isDevTool = "devtools" === t.platform, 
    e.cloneMethod(o, wx, "getSystemInfoSync"), e.cloneMethod(o, wx, "onTouchStart"), 
    e.cloneMethod(o, wx, "onTouchMove"), e.cloneMethod(o, wx, "onTouchEnd"), e.cloneMethod(o, wx, "onTouchCancel"), 
    e.cloneMethod(o, wx, "createInnerAudioContext"), e.cloneMethod(o, wx, "onAudioInterruptionEnd"), 
    e.cloneMethod(o, wx, "onAudioInterruptionBegin"), e.cloneMethod(o, wx, "createVideo"), 
    e.cloneMethod(o, wx, "setPreferredFramesPerSecond"), e.cloneMethod(o, wx, "showKeyboard"), 
    e.cloneMethod(o, wx, "hideKeyboard"), e.cloneMethod(o, wx, "updateKeyboard"), e.cloneMethod(o, wx, "onKeyboardInput"), 
    e.cloneMethod(o, wx, "onKeyboardConfirm"), e.cloneMethod(o, wx, "onKeyboardComplete"), 
    e.cloneMethod(o, wx, "offKeyboardInput"), e.cloneMethod(o, wx, "offKeyboardConfirm"), 
    e.cloneMethod(o, wx, "offKeyboardComplete"), e.cloneMethod(o, wx, "getOpenDataContext"), 
    e.cloneMethod(o, wx, "onMessage"), e.cloneMethod(o, wx, "loadSubpackage"), e.cloneMethod(o, wx, "getSharedCanvas"), 
    e.cloneMethod(o, wx, "loadFont"), e.cloneMethod(o, wx, "onShow"), e.cloneMethod(o, wx, "onHide"), 
    e.cloneMethod(o, wx, "onError"), e.cloneMethod(o, wx, "offError");
    var r = !1, c = 1;
    wx.onDeviceOrientationChange && wx.onDeviceOrientationChange(function(e) {
        "landscape" === e.value ? c = 1 : "landscapeReverse" === e.value && (c = -1);
    }), Object.assign(o, {
        startAccelerometer: function(e) {
            r ? wx.startAccelerometer && wx.startAccelerometer({
                fail: function(e) {
                    console.error("start accelerometer failed", e);
                }
            }) : (r = !0, wx.onAccelerometerChange && wx.onAccelerometerChange(function(o) {
                var t = {}, r = o.x, d = o.y;
                if (n) {
                    var l = r;
                    r = -d, d = l;
                }
                t.x = r * c, t.y = d * c, t.z = o.z, e && e(t);
            }));
        },
        stopAccelerometer: function() {
            wx.stopAccelerometer && wx.stopAccelerometer({
                fail: function(e) {
                    console.error("stop accelerometer failed", e);
                }
            });
        }
    });
}