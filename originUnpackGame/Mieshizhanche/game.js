function e() {
    require("./libs/wrapper/builtin/index");
    var e = require("./first-screen");
    if (window.DOMParser = require("./libs/common/xmldom/dom-parser").DOMParser, window.__globalAdapter = {}, 
    require("./libs/wrapper/unify"), require("./libs/wrapper/fs-utils"), require("src/polyfills.bundle.43263.js"), 
    require("src/system.bundle.3f3f2.js"), canvas) {
        var n = canvas.width, r = canvas.height;
        screen.width < screen.height ? canvas.width > canvas.height && (n = canvas.height, 
        r = canvas.width) : canvas.width < canvas.height && (n = canvas.height, r = canvas.width), 
        canvas.width = n, canvas.height = r;
    }
    canvas && window.devicePixelRatio >= 2 && (canvas.width *= 2, canvas.height *= 2);
    var t = require("src/import-map.8d466.js").default;
    function i(e) {
        return "".concat("cocos-js", "/").concat(e);
    }
    System.warmup({
        importMap: t,
        importMapUrl: "src/import-map.8d466.js",
        defaultHandler: function(e) {
            require("." + e);
        },
        handlers: {
            "plugin:": function(e) {
                requirePlugin(e);
            }
        }
    }), e.start("default", "default", "true").then(function() {
        return System.import("./application.71072.js");
    }).then(function(n) {
        return e.setProgress(.2).then(function() {
            return Promise.resolve(n);
        });
    }).then(function(e) {
        return (0, e.createApplication)({
            loadJsListFile: function(e) {
                return require(e);
            },
            fetchWasm: i
        });
    }).then(function(n) {
        return e.setProgress(.4).then(function() {
            return Promise.resolve(n);
        });
    }).then(function(n) {
        return function(n) {
            return n.import("cc").then(function(n) {
                return e.setProgress(.6).then(function() {
                    return Promise.resolve(n);
                });
            }).then(function(r) {
                return require("./libs/common/engine/index.js"), require("./libs/wrapper/engine/index"), 
                require("./libs/common/cache-manager.js"), r.view._maxPixelRatio = 4, r.macro.CLEANUP_IMAGE_CACHE = !1, 
                e.end().then(function() {
                    return n.start({
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
        }(n);
    }).catch(function(e) {
        console.error(e);
    });
}

"android" === wx.getSystemInfoSync().platform.toLocaleLowerCase() ? GameGlobal.requestAnimationFrame(e) : e();