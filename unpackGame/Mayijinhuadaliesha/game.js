require("./libs/wrapper/builtin/index"), window.DOMParser = require("./libs/common/xmldom/dom-parser").DOMParser, 
require("./libs/common/engine3d/globalAdapter/index"), require("./libs/wrapper/unify"), 
require("./libs/wrapper/systemInfo"), require("src/polyfills.bundle.js"), require("src/system.bundle.js"), 
require("src/settings"), require("main");

var e = window.boot;

if (e.prepare.engine = function() {
    var e = requirePlugin("cocos");
    System.register("cc", [], function(r, i) {
        return {
            setters: [],
            execute: function() {
                r(e);
            }
        };
    });
}, e.prepare.loadIIFE = function(e) {
    require(e);
}, e.prepare.findCanvas = function() {
    var e;
    return {
        frame: e = document.createElement("div"),
        canvas: window.canvas,
        container: e
    };
}, canvas) {
    var r = canvas.width, i = canvas.height;
    screen.width < screen.height ? canvas.width > canvas.height && (r = canvas.height, 
    i = canvas.width) : canvas.width < canvas.height && (r = canvas.height, i = canvas.width), 
    canvas.width = r, canvas.height = i;
}

canvas && window.devicePixelRatio >= 2 && (canvas.width *= 2, canvas.height *= 2), 
window.__globalAdapter.init(function() {
    var e = window.boot;
    e.prepare().then(function() {
        require("./libs/common/engine3d/index.js"), require("./libs/common/remote-downloader.js"), 
        cc.view._maxPixelRatio = 2, remoteDownloader.REMOTE_SERVER_ROOT = "https://kcmnq.jinkezhexin.top/AntPortrait/wxMJB", 
        remoteDownloader.SUBCONTEXT_ROOT = "";
        var r = cc.loader.md5Pipe || cc.loader.subPackPipe || cc.loader.assetLoader;
        if (cc.loader.insertPipeAfter(r, remoteDownloader), window.wxDownloader = remoteDownloader, 
        require("./libs/wrapper/engine/index"), cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) {
            var i = require("src/subdomain.json.js");
            cc.game.once(cc.game.EVENT_ENGINE_INITED, function() {
                cc.Pipeline.Downloader.PackDownloader._doPreload("WECHAT_SUBDOMAIN", i);
            }), require("./libs/wrapper/sub-context-adapter");
        } else cc.macro.CLEANUP_IMAGE_CACHE = !0;
        remoteDownloader.init(), e();
    });
});