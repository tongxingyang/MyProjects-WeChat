require("weapp-adapter.js");

var splash = require("./first-screen");

splash.start("default", "default", "false").then(function(r) {
    //   console.log(111, r);
    //   splash.setProgress(.2)
}).then(function(r) {
    //   console.log(222, r);
    splash.end().then(function() {
        // console.log(2222);
        return true;
    });
});

require("./libs/laya.wxmini.js");

requirePlugin("layaPlugin/laya.core.js");

requirePlugin("layaPlugin/laya.d3.js");
require("./libs/laya.ui.min.js");

let version = wx.getSystemInfoSync().SDKVersion;

if (compareVersion(version, "2.13.0") >= 0) wx.loadSubpackage({
    name: "wasm",
    success: res => {
        require("wasm/laya.physics3D.wasm-wx.min.js");
        requirejs();
    }
}); else wx.loadSubpackage({
    name: "physics3D",
    success: res => {
        require("physics3D/laya.physics3D.min.js");
        requirejs();
    }
});

function requirejs() {
    window.loadLib = require;
    require("./index.js");
    // wx.setPreferredFramesPerSecond(60);
}

function clearFrist() {
    FIRSTRENDER = false;
    cancelAnimationFrame(render);
}

window.clearFrist = clearFrist;

function compareVersion(v1, v2) {
    v1 = v1.split(".");
    v2 = v2.split(".");
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) v1.push("0");
    while (v2.length < len) v2.push("0");
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);
        if (num1 > num2) return 1; else if (num1 < num2) return -1;
    }
    return 0;
}