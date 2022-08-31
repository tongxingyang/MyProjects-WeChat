var e, t;

System.register("chunks:///_virtual/main", [ "./StartUi.ts" ], function() {
    return {
        setters: [ null ],
        execute: function() {}
    };
}), System.register("chunks:///_virtual/StartUi.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    var t, n, o, r, i, s, a, u, l, c, d, g, p, f;
    return {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, o = e.initializerDefineProperty, 
            r = e.assertThisInitialized, i = e.createClass;
        }, function(e) {
            s = e.cclegacy, a = e._decorator, u = e.ProgressBar, l = e.assetManager, c = e.Prefab, 
            d = e.instantiate, g = e.director, p = e.Sprite, f = e.Component;
        } ],
        execute: function() {
            var h, m, w, v, C;
            s._RF.push({}, "e242elVF3pO2qEeta1WG/bi", "StartUi", void 0);
            var S = a.ccclass, B = a.property;
            e("StartUi", (h = S("StartUi"), m = B(u), h((C = t((v = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                    return t = e.call.apply(e, [ this ].concat(i)) || this, o(t, "progressBarNode", C, r(t)), 
                    t.targetProgress = 0, t.totalCount = 0, t._completedCount = 0, t;
                }
                n(t, e);
                var s = t.prototype;
                return s.onLoad = function() {
                    var e = this;
                    this.node.setSiblingIndex(99), window.wx.showLoading({
                        title: "分包加载中"
                    }), this.loadJJBundle().then(function() {
                        Promise.all([ e.loadScripts(), e.loadRes() ]).then(function(t) {
                            console.log(t), l.getBundle("res").load("prefab/game/Game3d", c, function(t, n) {
                                if (t) console.error(t); else {
                                    var o = d(n);
                                    o.getComponent("Boot").loadAll(function(t, n, o) {
                                        e.totalCount = n, e.completedCount = t;
                                    }, function(t, n) {
                                        g.getScene().addChild(o), o.setSiblingIndex(0), e.targetProgress = 1;
                                    });
                                }
                                window.wx.hideLoading();
                            });
                        }).catch(function(e) {
                            window.wx.hideLoading(), console.log(e);
                        });
                    });
                }, s.showLogo = function(e) {}, s.update = function(e) {
                    this.progressBarNode.progress < this.targetProgress && (this.progressBarNode.progress += .1), 
                    this.progressBarNode.progress >= 1 && this.node.destroy();
                }, s.onDisable = function() {
                    l.releaseAsset(this.node.getChildByName("bg").getComponent(p).spriteFrame), l.releaseAsset(this.node.getChildByName("logo").getComponent(p).spriteAtlas);
                }, s.loadScripts = function() {
                    return new Promise(function(e, t) {
                        var n = new Date().getTime();
                        l.loadBundle("Scripts", function(t) {
                            e("子包Scripts加载耗时：" + (new Date().getTime() - n) / 1e3 + "s");
                        });
                    });
                }, s.loadRes = function() {
                    return new Promise(function(e, t) {
                        var n = new Date().getTime();
                        l.loadBundle("res", function(t) {
                            e("子包res加载耗时：" + (new Date().getTime() - n) / 1e3 + "s");
                        });
                    });
                }, s.loadJJBundle = function() {
                    return new Promise(function(e, t) {
                        var n = new Date().getTime();
                        l.loadBundle("ExportLibs", function(t, o) {
                            o.load("ExportRes/CanvasJJ", c, function(t, o) {
                                t ? console.error(t) : g.getScene().addChild(d(o)), e("运营框架加载耗时：" + (new Date().getTime() - n) / 1e3 + "s");
                            });
                        });
                    });
                }, i(t, [ {
                    key: "completedCount",
                    get: function() {
                        return this._completedCount;
                    },
                    set: function(e) {
                        this._completedCount = e, this.targetProgress = this.completedCount / this.totalCount;
                    }
                } ]), t;
            }(f)).prototype, "progressBarNode", [ m ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), w = v)) || w)), s._RF.pop();
        }
    };
}), e = "virtual:///prerequisite-imports/main", t = "chunks:///_virtual/main", System.register(e, [ t ], function(e, t) {
    return {
        setters: [ function(t) {
            var n = {};
            for (var o in t) "default" !== o && "__esModule" !== o && (n[o] = t[o]);
            e(n);
        } ],
        execute: function() {}
    };
});