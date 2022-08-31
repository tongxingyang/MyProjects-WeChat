System.register([], function(e, n) {
    function t(e, n) {
        window._CCSettings = void 0, e.view.enableRetina(!0), e.view.resizeWithBrowserSize(!0);
        var t = n.launchScene;
        e.director.loadScene(t, null, function() {
            e.view.setDesignResolutionSize(750, 1334, 4), console.log("Success to load scene: ".concat(t));
        });
    }
    return e("createApplication", function(e) {
        var r = e.loadJsListFile;
        return e.fetchWasm, Promise.resolve().then(function() {
            return t = o, (n = "import") in (e = {
                start: i
            }) ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
            var e, n, t;
        });
        function i(e) {
            var n, i, u = e.findCanvas;
            return Promise.resolve().then(function() {
                return o("cc");
            }).then(function(e) {
                return i = e, function(e) {
                    var n = "src/settings.json";
                    return new Promise(function(e, t) {
                        if ("undefined" == typeof fsUtils || n.startsWith("http")) {
                            var r = 3, i = 2e3;
                            !function o() {
                                var s = new XMLHttpRequest();
                                s.open("GET", n), s.responseType = "text", s.onload = function() {
                                    window._CCSettings = JSON.parse(s.response), window._CCSettings.server = "", e();
                                }, s.onerror = function() {
                                    r-- > 0 ? setTimeout(o, i) : t(new Error("request settings failed!"));
                                }, s.send(null);
                            }();
                        } else {
                            var o = fsUtils.readJsonSync(n);
                            o instanceof Error ? t(o) : (window._CCSettings = o, window._CCSettings.server = "", 
                            e());
                        }
                    });
                }();
            }).then(function() {
                return n = window._CCSettings, function(e, n, t) {
                    if (n.macros) for (var r in n.macros) e.macro[r] = n.macros[r];
                    var i = function(e, n, t) {
                        var r = {
                            bundleVers: n.bundleVers,
                            remoteBundles: n.remoteBundles,
                            server: n.server,
                            subpackages: n.subpackages
                        };
                        return {
                            debugMode: n.debug ? e.DebugMode.INFO : e.DebugMode.ERROR,
                            showFPS: n.debug,
                            frameRate: 60,
                            groupList: n.groupList,
                            collisionMatrix: n.collisionMatrix,
                            renderPipeline: n.renderPipeline,
                            adapter: t("GameCanvas"),
                            assetOptions: r,
                            customJointTextureLayouts: n.customJointTextureLayouts || [],
                            physics: n.physics
                        };
                    }(e, n, t);
                    return Promise.resolve(e.game.init(i));
                }(i, n, u).then(function() {
                    if (!n.renderPipeline) return i.game.run();
                }).then(function() {
                    if (n.scriptPackages) return e = n.scriptPackages, Promise.all(e.map(function(e) {
                        return o(e);
                    }));
                    var e;
                }).then(function() {
                    return function(e) {
                        var n = Promise.resolve();
                        return e.forEach(function(e) {
                            n = n.then(function() {
                                return r("src/".concat(e));
                            });
                        }), n;
                    }(n.jsList);
                }).then(function() {
                    return s(n.hasResourcesBundle, n.hasStartSceneBundle);
                }).then(function() {
                    if (n.renderPipeline) return i.game.run();
                }).then(function() {
                    i.game.onStart = t.bind(null, i, n), t(i, n);
                });
            });
        }
        function o(e) {
            return n.import("".concat(e));
        }
        function s(e, n) {
            Promise.resolve();
            var t = cc.AssetManager.BuiltinBundleName, r = t.MAIN, i = t.RESOURCES, o = t.START_SCENE, s = e ? [ i, r ] : [ r ];
            s.push(o);
            return n && s.push(o), s.reduce(function(e, n) {
                return e.then(function() {
                    return function(e) {
                        return new Promise(function(n, t) {
                            cc.assetManager.loadBundle(e, function(e, r) {
                                if (e) return t(e);
                                n(r);
                            });
                        });
                    }(n);
                });
            }, Promise.resolve());
        }
    }), {
        setters: [],
        execute: function() {}
    };
});