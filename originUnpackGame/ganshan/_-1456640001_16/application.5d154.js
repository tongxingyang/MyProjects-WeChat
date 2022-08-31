System.register([], function(e, n) {
    return e("createApplication", function(e) {
        var t = e.loadJsListFile, r = e.fetchWasm, o = Promise.resolve();
        return (o = o.then(function() {
            return s("wait-for-ammo-instantiation");
        }).then(function(e) {
            return (0, e.default)(r(""));
        })).then(function() {
            return t = s, (n = "import") in (e = {
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
            var n, r, o = e.findCanvas;
            return Promise.resolve().then(function() {
                return s("cc");
            }).then(function(e) {
                return r = e, function(e) {
                    var n = "src/settings.09fdc.json";
                    return new Promise(function(e, t) {
                        if ("undefined" == typeof fsUtils || n.startsWith("http")) {
                            var r = 3, o = 2e3;
                            !function i() {
                                var s = new XMLHttpRequest();
                                s.open("GET", n), s.responseType = "text", s.onload = function() {
                                    window._CCSettings = JSON.parse(s.response), e();
                                }, s.onerror = function() {
                                    r-- > 0 ? setTimeout(i, o) : t(new Error("request settings failed!"));
                                }, s.send(null);
                            }();
                        } else {
                            var i = fsUtils.readJsonSync(n);
                            i instanceof Error ? t(i) : (window._CCSettings = i, e());
                        }
                    });
                }();
            }).then(function() {
                return n = window._CCSettings, function(e, n, t) {
                    if (n.macros) for (var r in n.macros) e.macro[r] = n.macros[r];
                    var o = function(e, n, t) {
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
                            physics: n.physics,
                            orientation: n.orientation,
                            exactFitScreen: n.exactFitScreen
                        };
                    }(e, n, t), i = e.game.init(o);
                    try {
                        n.customLayers && n.customLayers.forEach(function(n) {
                            e.Layers.addLayer(n.name, n.bit);
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.warn(e);
                    }
                    return i ? Promise.resolve(i) : Promise.reject();
                }(r, n, o).then(function() {
                    if (n.scriptPackages) return e = n.scriptPackages, Promise.all(e.map(function(e) {
                        return s(e);
                    }));
                    var e;
                }).then(function() {
                    return function(e) {
                        var n = Promise.resolve();
                        return e.forEach(function(e) {
                            n = n.then(function() {
                                return t("src/".concat(e));
                            });
                        }), n;
                    }(n.jsList);
                }).then(function() {
                    return u(n.hasResourcesBundle, n.hasStartSceneBundle);
                }).then(function() {
                    return r.game.run(function() {
                        return function(e, n) {
                            window._CCSettings = void 0, e.view.resizeWithBrowserSize(!0);
                            var t = n.launchScene;
                            e.director.loadScene(t, null, function() {
                                e.view.setDesignResolutionSize(750, 1334, 4), console.log("Success to load scene: ".concat(t));
                            });
                        }(r, n);
                    });
                });
            });
        }
        function s(e) {
            return n.import("".concat(e));
        }
        function u(e, n) {
            Promise.resolve();
            var t = cc.AssetManager.BuiltinBundleName, r = t.MAIN, o = t.RESOURCES, i = t.START_SCENE, s = e ? [ o, r ] : [ r ];
            return n && s.push(i), s.reduce(function(e, n) {
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