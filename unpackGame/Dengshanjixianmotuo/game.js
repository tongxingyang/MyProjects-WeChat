// 渲染首屏（开发者工具执行有渲染问题，所以开发者工具上不渲染）
wx.__first__canvas = wx.createCanvas();

var data = wx.getSystemInfoSync();

if (data.platform != "devtools") {
    var first_scene = require("./first-screen.js");
    first_scene.drawImg("first.jpg");
}

require("cocos2d-js-min.js");
require("main.js");
require("ccRequire.js");
require("assets/internal/index.js");
require("adapter-min.js");
require("ex/index.js");
require("ex/settings.js");
// 加载引擎
setTimeout(function() {
    var loader = require("./engine-loader");
    loader.loadEngine("engine");
}, 0);

function render() {
    if (wx.isGl) {
        var n = initVertexBuffers(gl);
        requestAnimationFrame(render);
    }
}

requestAnimationFrame(render);