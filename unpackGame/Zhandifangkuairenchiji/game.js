var uma = require("./umtrack-wx-game/lib/index.js");

wx.uma.setOpenid("6142ed07517ed71020504219");

uma.init({
    appKey: "6142ed07517ed71020504219",
    useOpenid: false,
    // default true
    autoGetOpenid: false,
    debug: false,
    uploadUserInfo: false
});

if (typeof swan !== "undefined" && typeof swanGlobal !== "undefined") {
    require("swan-game-adapter.js");
    require("libs/laya.bdmini.js");
} else if (typeof wx !== "undefined") {
    require("weapp-adapter.js");
    require("libs/min/laya.wxmini.min.js");
}

window.loadLib = require;

require("index.js");