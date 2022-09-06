var e = window._CCSettings;

function n() {
    var r = function() {
        window._CCSettings = void 0, cc.loader.downloader._subpackages = e.subpackages, 
        cc.view.enableRetina(!0), cc.view.resizeWithBrowserSize(!0), cc.view.setDesignResolutionSize(750, 1334, 4);
        var n = new cc.Scene(), r = new cc.Node();
        r.addComponent(cc.CanvasComponent).clearFlag = 1, r.parent = n;
        var t = "bg.jpg";
        (o = new cc.Node()).parent = r, function(e, n) {
            var r = wx.createImage();
            r.onload = function() {
                var n = cc.SpriteFrame.createWithImage(r);
                e.spriteFrame = n, e.width = 750, e.height = 1650;
            }, r.src = n;
        }(o.addComponent(cc.SpriteComponent), t);
        var o;
        t = "bg1.png";
        (o = new cc.Node()).parent = r, function(e, n) {
            var r = wx.createImage();
            r.onload = function() {
                var n = cc.SpriteFrame.createWithImage(r);
                e.spriteFrame = n, e.width = 680, e.height = 248;
            }, r.src = n;
        }(o.addComponent(cc.SpriteComponent), t), o.setPosition(0, -cc.winSize.height / 2 + 134, 0), 
        cc.director.runSceneImmediate(n);
        var i = e.launchScene, a = new Date().valueOf();
        cc.director.preloadScene(i, function() {}, function() {
            var e = (.001 * (new Date().valueOf() - a)).toFixed(2);
            console.log("首场景加载耗时:" + e), cc.director.loadScene(i, null, function() {
                cc.loader.onProgress = null, console.log("Success to load scene: " + i);
            });
        });
    };
    (function(e) {
        var r = Promise.resolve();
        e && e.forEach(function(e) {
            r = r.then(function() {
                return o.loadIIFE(n.jsListRoot + "/" + e);
            });
        });
        return r;
    })(e.jsList).then(function() {
        (n.systemGlobal || System).import("virtual:///prerequisite-imports:main").then(function() {
            cc.game.run(r);
        }).catch(function(e) {
            console.error("Load project module error: \n" + e);
        });
    });
}

function r() {
    var n = e.uuids, r = e.rawAssets, t = e.assetTypes, i = e.rawAssets = {};
    for (var a in r) {
        var s = r[a], c = i[a] = {};
        for (var u in s) {
            var d = s[u], m = d[1];
            "number" == typeof m && (d[1] = t[m]), c[n[u] || u] = d;
        }
    }
    for (var p = e.scenes, l = 0; l < p.length; ++l) {
        var f = p[l];
        "number" == typeof f.uuid && (f.uuid = n[f.uuid]);
    }
    var v = e.packedAssets;
    for (var g in v) for (var w = v[g], h = 0; h < w.length; ++h) "number" == typeof w[h] && (w[h] = n[w[h]]);
    var b = e.subpackages;
    for (var S in b) {
        var y = b[S].uuids;
        if (y) for (var k = 0, C = y.length; k < C; k++) "number" == typeof y[k] && (y[k] = n[y[k]]);
    }
    var P = {
        libraryPath: "res/import",
        rawAssetsBase: "res/raw-",
        rawAssets: e.rawAssets,
        packedAssets: e.packedAssets,
        md5AssetsMap: e.md5AssetsMap,
        subPackages: e.subpackages
    };
    return {
        scenes: e.scenes,
        debugMode: e.debug ? 1 : 3,
        showFPS: e.debug,
        frameRate: 60,
        groupList: e.groupList,
        collisionMatrix: e.collisionMatrix,
        renderPipeline: e.renderPipeline,
        adapter: o.findCanvas("GameCanvas"),
        assetOptions: P,
        customJointTextureLayouts: e.customJointTextureLayouts || []
    };
}

function t(e) {
    var n = [];
    if (e) for (var r = 0; r < e.length; ++r) n.push(o.loadIIFE(e[r]));
    return Promise.all(n);
}

"undefined" != typeof qq ? (require("mmmsdk.min"), wx.mmmsdk.init("1111532521", "qqqgame", "ylkjgame", function() {
    console.log("mmmsdk脚本：", wx.mmmsdk.openid);
})) : "undefined" != typeof wx && (require("./utils/uma.min"), wx.uma.init({
    appKey: "617a0f39e014255fcb5eefcb",
    useOpenid: !0,
    autoGetOpenid: !0,
    debug: !0
})), window.kd = require("./KdSdk"), window.boot = n;

var o = function o() {
    return e = window._CCSettings, Promise.resolve(o.engine ? o.engine() : void 0).then(function() {
        return (n.systemGlobal || System).import("cc");
    }).then(function() {
        var e = r();
        return new Promise(function(n, r) {
            cc.game.init(e) ? n() : r();
        });
    }).then(function() {
        return t(e.scriptPackages);
    });
};

o.engine = void 0, o.loadIIFE = void 0, o.findCanvas = void 0, n.jsListRoot = "src", 
n.systemGlobal = void 0, n.prepare = o;