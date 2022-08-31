require("weapp-adapter.js");

var e = require("./first-screen");

function s() {
    window.loadLib = require, require("./index.js"), e.end().then(function() {
        return console.log(2222), !0;
    });
}

e.start("default", "default", "false").then(function(r) {
    console.log(111, r), wx.loadSubpackage({
        name: "libs",
        success: function(r) {
            require("./libs/min/laya.wxmini.min.js"), requirePlugin("layaPlugin/laya.core.js"), 
            requirePlugin("layaPlugin/laya.d3.js"), requirePlugin("layaPlugin/laya.html.js"), 
            requirePlugin("layaPlugin/laya.particle.js"), e.setProgress(.6), function(e, s) {
                e = e.split("."), s = s.split(".");
                for (var r = Math.max(e.length, s.length); e.length < r; ) e.push("0");
                for (;s.length < r; ) s.push("0");
                for (var a = 0; a < r; a++) {
                    var n = parseInt(e[a]), i = parseInt(s[a]);
                    if (n > i) return 1;
                    if (n < i) return -1;
                }
                return 0;
            }(wx.getSystemInfoSync().SDKVersion, "2.13.0") >= 0 ? wx.loadSubpackage({
                name: "wasm",
                success: function(r) {
                    e.setProgress(.8), require("wasm/laya.physics3D.wasm-wx.min.js"), s();
                }
            }) : wx.loadSubpackage({
                name: "physics3D",
                success: function(r) {
                    e.setProgress(.8), require("physics3D/laya.physics3D.min.js"), s();
                }
            });
        }
    }), e.setProgress(.2);
}).then(function(e) {});