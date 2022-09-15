// 渲染首屏（开发者工具执行有渲染问题，所以开发者工具上不渲染）
wx.__first__canvas = wx.createCanvas();

var data = wx.getSystemInfoSync();

if (data.platform != "devtools") {
    var first_scene = require("./first-screen.js");
    first_scene.drawImg("first.jpg");
}


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