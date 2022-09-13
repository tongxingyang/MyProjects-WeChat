require("weapp-adapter.js");

var {drawImg: drawImg} = require("webgl_splash.js");

function render() {
    if (FIRSTRENDER) {
        drawImg("loading/loading_atlas_ijwj3d.jpg", gl);
        requestAnimationFrame(render);
    }
}

// wx.setPreferredFramesPerSecond(30);
var FIRSTRENDER = true;

GameGlobal.dycc = window.canvas;

GameGlobal.screencanvas = GameGlobal.dycc || new _Canvas2.default();

const {screenWidth: screenWidth, screenHeight: screenHeight} = wx.getSystemInfoSync();

GameGlobal.dycc.width = screenWidth;

GameGlobal.dycc.height = screenHeight;

var gl = GameGlobal.dycc.getContext("webgl", {
    stencil: true
});

//不加{stencil:true}开发者工具上会出现白屏
requestAnimationFrame(render);

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

wx.loadSubpackage({
    name: "libs",
    success: res => {
        require("./libs/min/laya.wxmini.min.js");
        requirePlugin("layaPlugin/laya.core.js");
        requirePlugin("layaPlugin/laya.d3.js");
        requirePlugin("layaPlugin/laya.html.js");
        requirePlugin("layaPlugin/laya.particle.js");
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
    }
});

function requirejs() {
    window.loadLib = require;
    require("./index.js");
    require("SGSDK/src/Main.js");
}

function clearFrist() {
    FIRSTRENDER = false;
    cancelAnimationFrame(render);
}

window.clearFrist = clearFrist;