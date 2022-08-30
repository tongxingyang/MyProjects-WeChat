function e() {
    require("./libs/wrapper/builtin/index");
    var e = require("./first-screen");
    if (window.DOMParser = require("./libs/common/xmldom/dom-parser").DOMParser, window.__globalAdapter = {}, 
    require("./libs/wrapper/unify"), require("./libs/wrapper/fs-utils"), require("./uma"), 
    require("src/polyfills.bundle.43263.js"), require("src/system.bundle.3f3f2.js"), 
    canvas) {
        var r = canvas.width, n = canvas.height;
        screen.width < screen.height ? canvas.width > canvas.height && (r = canvas.height, 
        n = canvas.width) : canvas.width < canvas.height && (r = canvas.height, n = canvas.width), 
        canvas.width = r, canvas.height = n;
    }
    canvas && window.devicePixelRatio >= 2 && (canvas.width *= 2, canvas.height *= 2);
    var t = require("src/import-map.e944c.js").default;
    function i(e) {
        return "".concat("cocos-js", "/").concat(e);
    }
    System.warmup({
        importMap: t,
        importMapUrl: "src/import-map.e944c.js",
        defaultHandler: function(e) {
            require("." + e);
        },
        handlers: {
            "plugin:": function(e) {
                requirePlugin(e);
            }
        }
    }), e.start("default", "default", "false").then(function() {
        return System.import("./application.9b6f4.js");
    }).then(function(r) {
        return e.setProgress(.2).then(function() {
            return Promise.resolve(r);
        });
    }).then(function(e) {
        return (0, e.createApplication)({
            loadJsListFile: function(e) {
                return require(e);
            },
            fetchWasm: i
        });
    }).then(function(r) {
        return e.setProgress(.4).then(function() {
            return Promise.resolve(r);
        });
    }).then(function(r) {
        return function(r) {
            return r.import("cc").then(function(r) {
                return e.setProgress(.6).then(function() {
                    return Promise.resolve(r);
                });
            }).then(function(n) {
                return require("./libs/common/engine/index.js"), require("./libs/wrapper/engine/index"), 
                require("./libs/common/cache-manager.js"), n.view._maxPixelRatio = 4, n.macro.CLEANUP_IMAGE_CACHE = !1, 
                e.end().then(function() {
                    return r.start({
                        findCanvas: function() {
                            var e = document.createElement("div");
                            return {
                                frame: e,
                                canvas: window.canvas,
                                container: e
                            };
                        }
                    });
                });
            });
        }(r);
    }).catch(function(e) {
        console.error(e);
    });
}

"android" === wx.getSystemInfoSync().platform.toLocaleLowerCase() ? GameGlobal.requestAnimationFrame(e) : e();