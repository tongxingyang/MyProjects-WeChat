require("weapp-adapter.js");

require("./libs/laya.wxmini.js");

requirePlugin("layaPlugin/laya.core.js");

requirePlugin("layaPlugin/laya.d3.js");

window.loadLib = require;

var splash = require("./first-screen");

window.splash = splash;

splash.start("default", "default", "false").then(function(r) {
    let task = wx.loadSubpackage({
        name: "js",
        success: res => {}
    });
    task.onProgressUpdate(res => {
        var progress = res.totalBytesWritten / res.totalBytesExpectedToWrite;
        splash.setProgress(progress);
    });
});