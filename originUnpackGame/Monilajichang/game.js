require("weapp-adapter.js");

var a = require("./webgl_splash.js").drawImg;

function e() {
    i && (a("loading/loading_atlas_lfsz3h.jpg", c), requestAnimationFrame(e));
}

var i = !0;

GameGlobal.dycc = window.canvas, GameGlobal.screencanvas = GameGlobal.dycc || new _Canvas2.default();

var n = wx.getSystemInfoSync(), l = n.screenWidth, r = n.screenHeight;

GameGlobal.dycc.width = l, GameGlobal.dycc.height = r;

var c = GameGlobal.dycc.getContext("webgl", {
    stencil: !0
});

requestAnimationFrame(e), window.clearFrist = function() {
    i = !1, cancelAnimationFrame(e);
}, require("./libs/min/laya.wxmini.min.js"), requirePlugin("layaPlugin/laya.core.js"), 
requirePlugin("layaPlugin/laya.d3.js"), window.loadLib = require, require("./index.js");